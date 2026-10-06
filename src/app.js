import { countFan } from "gb-mahjong-js/lib/api/index.js";
import constants from "gb-mahjong-js/lib/core/constants.js";
import QRCode from "qrcode";
import { FAN_POINTS, FANS } from "./fans.js";
import { WinContextError, createWinContext, encodeWinContext, gangLabel, lastTileLabel, normalizeWinContext, validateWinContext, validateWinContextSetup } from "./win-context.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const SUITS = ["m", "p", "s"];
const HONORS = ["E", "S", "W", "N", "C", "F", "P"];
const WIND_LABELS = { E: "东", S: "南", W: "西", N: "北" };
const MODE_META = {
  hand: { label: "立牌", need: 0 },
  chi: { label: "吃", need: 3 },
  peng: { label: "碰", need: 3 },
  mingGang: { label: "明杠", need: 4 },
  anGang: { label: "暗杠", need: 4 },
  jiaGang: { label: "加杠", need: 1 },
};
const TILES = [...SUITS.flatMap((suit) => Array.from({ length: 9 }, (_, index) => `${index + 1}${suit}`)), ...HONORS];
const TILE_ORDER = new Map(TILES.map((code, index) => [code, index]));
const SAMPLE_HAND = ["1m", "2m", "3m", "1p", "2p", "3p", "1s", "2s", "3s", "7s", "8s", "9s", "E"];

const state = {
  hand: [], melds: [], draft: [], draftError: "", mode: "hand", flowers: 0, round: "E", seat: "E",
  winContext: createWinContext(),
};

function tileSvg(code) {
  return `<svg class="tile-face" viewBox="0 0 64 88" aria-hidden="true"><use href="#tile-${code}"></use></svg>`;
}
function tileLabel(code) {
  if (HONORS.includes(code)) return { E: "东", S: "南", W: "西", N: "北", C: "中", F: "发", P: "白" }[code];
  return `${code[0]}${{ m: "万", p: "筒", s: "条" }[code.at(-1)]}`;
}
function sortTiles(codes) { return [...codes].sort((left, right) => TILE_ORDER.get(left) - TILE_ORDER.get(right)); }
function allPickedTiles() { return [...state.hand, ...state.draft, ...state.melds.flatMap((meld) => meld.tiles)]; }
function countTile(code) { return allPickedTiles().filter((tile) => tile === code).length; }
function selectedCount() { return state.hand.length + state.melds.length * 3; }
function tileButton(code) {
  const count = countTile(code);
  const kongAction = state.mode === "anGang" && count === 4
    || state.mode === "jiaGang" && count === 4 && state.melds.some((meld) => meld.type === "peng" && meld.tiles[0] === code);
  return `<button type="button" class="tile-button" data-tile="${code}" aria-label="${tileLabel(code)}，当前已有 ${count} 张"${count >= 4 && !kongAction ? " disabled" : ""}>${tileSvg(code)}</button>`;
}
function compactTiles(codes) {
  const ordered = sortTiles(codes);
  const suits = SUITS.map((suit) => {
    const digits = ordered.filter((tile) => tile.endsWith(suit)).map((tile) => tile[0]).join("");
    return digits ? `${digits}${suit}` : "";
  }).join("");
  return `${suits}${ordered.filter((tile) => HONORS.includes(tile)).join("")}`;
}
function meldDsl(meld) { return meld.type === "anGang" ? `[${compactTiles(meld.tiles)}]` : `[${compactTiles(meld.tiles)},1]`; }
function buildInput(hand = state.hand, winContext = state.winContext) {
  validateWinContext({ context: winContext, hand, melds: state.melds });
  const winning = hand.at(-1);
  const context = encodeWinContext(state.round, state.seat, winContext);
  return `${state.melds.map(meldDsl).join("")}${compactTiles(hand.slice(0, -1))}${winning}|${context}|${state.flowers}`;
}
function fanItems(result) {
  return (result.fans ?? []).map((entry) => ({ name: constants.FAN_NAME[entry.fanId] ?? "未命名番种", points: entry.score ?? 0 }))
    .sort((left, right) => right.points - left.points || left.name.localeCompare(right.name, "zh-CN"));
}
function coreTotal(result) { return fanItems(result).filter((fan) => fan.name !== "花牌").reduce((sum, fan) => sum + fan.points, 0); }

function renderPalette() {
  $("#wan-tiles").innerHTML = TILES.filter((tile) => tile.endsWith("m")).map(tileButton).join("");
  $("#tong-tiles").innerHTML = TILES.filter((tile) => tile.endsWith("p")).map(tileButton).join("");
  $("#tiao-tiles").innerHTML = TILES.filter((tile) => tile.endsWith("s")).map(tileButton).join("");
  $("#honor-tiles").innerHTML = TILES.filter((tile) => HONORS.includes(tile)).map(tileButton).join("");
}
function renderWinds() {
  const radio = (name, selected) => Object.entries(WIND_LABELS).map(([value, label]) => `<label><input type="radio" name="${name}" value="${value}"${selected === value ? " checked" : ""}/><span>${label}</span></label>`).join("");
  $("#round-winds").innerHTML = radio("round", state.round);
  $("#seat-winds").innerHTML = radio("seat", state.seat);
}
function renderDraft() {
  const meta = MODE_META[state.mode];
  $("#draft-bar").hidden = state.mode === "hand";
  if (state.mode === "hand") return;
  const quickHint = {
    peng: "碰 · 点一张牌，自动录入三张",
    mingGang: "明杠 · 点一张牌，自动录入四张",
    anGang: "暗杠 · 点一张牌，自动录入四张",
    jiaGang: "加杠 · 点一张牌，升级已有碰",
  }[state.mode];
  $("#draft-label").textContent = state.draftError || (quickHint || `组一副${meta.label} · 选 ${state.draft.length}/${meta.need} 张，选满自动完成`);
  $("#draft-tiles").innerHTML = state.draft.map((tile, index) => `<button type="button" class="mini-tile" data-remove-draft="${index}" aria-label="撤回${tileLabel(tile)}">${tileSvg(tile)}</button>`).join("");
}
function renderHand() {
  const total = selectedCount();
  $("#selection-count").textContent = `${total} / 14`;
  $("#selection-label").textContent = state.mode === "hand" ? "逐张点牌" : `正在录入${MODE_META[state.mode].label}`;
  $("#hand-state").textContent = total === 13 ? "等待一张和牌" : total === 14 ? "最后一张是和牌" : `还差 ${Math.max(0, 13 - total)} 张`;
  $("#selected-rack").innerHTML = state.hand.length
    ? state.hand.map((tile, index) => `<button type="button" class="selected-tile${index === state.hand.length - 1 && total === 14 ? " is-winning" : ""}" data-remove-hand="${index}" aria-label="移除${tileLabel(tile)}">${tileSvg(tile)}</button>`).join("")
    : `<p class="empty-rack">从上方点选立牌</p>`;
  $("#meld-rack").innerHTML = state.melds.map((meld, index) => `<div class="meld-group"><span>${MODE_META[meld.type].label}</span>${meld.tiles.map((tile) => `<i>${tileSvg(tile)}</i>`).join("")}<button type="button" data-remove-meld="${index}" aria-label="移除这副${MODE_META[meld.type].label}">×</button></div>`).join("");
}
function renderConditions() {
  $("#flower-count").textContent = String(state.flowers);
  const availability = contextAvailability();
  const extras = [state.winContext.selfDrawn ? "自摸" : "点和"];
  if (state.winContext.gang) extras.push(gangLabel(state.winContext));
  if (state.winContext.lastTile) extras.push(lastTileLabel(state.winContext).split("（")[0]);
  if (state.winContext.fourthTile) extras.push("和绝张");
  $("#context-summary").textContent = `${WIND_LABELS[state.round]}风圈 · ${WIND_LABELS[state.seat]}风位 · ${extras.join(" · ")} · 花牌 ${state.flowers}`;
  $$('[data-context-flag]').forEach((input) => {
    input.checked = state.winContext[input.dataset.contextFlag];
    const flag = input.dataset.contextFlag;
    const blockedByRobKong = state.winContext.gang && !state.winContext.selfDrawn && ["lastTile", "fourthTile"].includes(flag);
    const blockedGang = flag === "gang" && (
      (state.winContext.selfDrawn && !availability.hasOwnKong)
      || (!state.winContext.selfDrawn && (state.winContext.lastTile || state.winContext.fourthTile || !availability.canRobKong))
    );
    const blockedFourthTile = flag === "fourthTile" && !availability.canFourthTile;
    input.disabled = !input.checked && (blockedByRobKong || blockedGang || blockedFourthTile);
    input.closest("label")?.classList.toggle("is-disabled", input.disabled);
  });
  $("#last-tile-label").textContent = lastTileLabel(state.winContext);
  $("#gang-label").textContent = gangLabel(state.winContext);
  const notes = [];
  if (state.winContext.gang && !state.winContext.selfDrawn) notes.push("抢杠和属于点和，不与末张或和绝张同时计算");
  else if (state.winContext.selfDrawn && !availability.hasOwnKong) notes.push("先录入一副明杠或暗杠，才可选择杠上开花");
  else if (!state.winContext.selfDrawn && (state.winContext.lastTile || state.winContext.fourthTile)) notes.push("末张或和绝张已选中；取消后才可选择抢杠和");
  if (!availability.canFourthTile) notes.push("当前已知和牌进张不能成立和绝张");
  if (!state.winContext.selfDrawn && !availability.canRobKong) notes.push("当前已知和牌进张不能成立抢杠和");
  $("#context-rule-note").textContent = notes.join("；");
  $("#context-rule-note").hidden = notes.length === 0;
}

function naturalWinningHands() {
  const total = selectedCount();
  const neutralContext = createWinContext();
  if (total === 14) {
    try { return countFan(buildInput(state.hand, neutralContext)).isHu ? [state.hand] : []; }
    catch { return []; }
  }
  if (total !== 13) return [];
  return TILES.filter((tile) => countTile(tile) < 4).flatMap((tile) => {
    const hand = [...state.hand, tile];
    try { return countFan(buildInput(hand, neutralContext)).isHu ? [hand] : []; }
    catch { return []; }
  });
}

function contextAvailability() {
  const winningHands = naturalWinningHands();
  const resolved = winningHands.length > 0;
  const ownMeldTiles = state.melds.flatMap((meld) => meld.tiles);
  return {
    hasOwnKong: state.melds.some((meld) => meld.type === "mingGang" || meld.type === "anGang"),
    canFourthTile: !resolved || winningHands.some((hand) => !hand.slice(0, -1).includes(hand.at(-1))),
    canRobKong: !resolved || winningHands.some((hand) => ![...hand.slice(0, -1), ...ownMeldTiles].includes(hand.at(-1))),
  };
}
function resultCard(wait) {
  const eligible = coreTotal(wait.result) >= 8;
  return `<button type="button" class="wait-card${eligible ? "" : " is-low"}" data-promote-tile="${wait.tile}" aria-label="选择${tileLabel(wait.tile)}作为和牌，${wait.result.totalFan}番">${tileSvg(wait.tile)}<span><strong>${wait.result.totalFan}番</strong><small>${eligible ? "可和" : "不足 8 番"}</small></span></button>`;
}
function renderCompleted(result) {
  const eligible = coreTotal(result) >= 8;
  $("#result-title").textContent = result.isHu ? `${result.totalFan} 番` : "未构成和牌";
  $("#result-subtitle").textContent = result.isHu ? (eligible ? "达到 8 番起和" : "未达到 8 番起和") : "检查牌数与副露";
  $("#result-content").innerHTML = result.isHu
    ? `<div class="fan-list">${fanItems(result).map((fan) => `<div><span>${fan.name}</span><strong>+${fan.points}</strong></div>`).join("")}</div><p class="result-note">${result.decomposition?.packs?.length ? "已选取番数最高的合法拆解。" : "特殊和型已按规则单独判断。"}</p>`
    : `<p class="empty-result">这 14 张牌不能组成合法和牌；可点选已选牌移除后继续调整。</p>`;
}
function renderResults() {
  const total = selectedCount();
  try {
    if (total === 13) {
      validateWinContextSetup({ context: state.winContext, melds: state.melds });
      const neutralContext = createWinContext();
      const invalidWaits = [];
      const waits = TILES.filter((tile) => countTile(tile) < 4).flatMap((tile) => {
        const hand = [...state.hand, tile];
        const baseResult = countFan(buildInput(hand, neutralContext));
        if (!baseResult.isHu) return [];
        try {
          const result = countFan(buildInput(hand));
          return result.isHu ? [{ tile, result }] : [];
        } catch (error) {
          if (error instanceof WinContextError) {
            invalidWaits.push({ tile, message: error.message });
            return [];
          }
          throw error;
        }
      });
      if (!waits.length && invalidWaits.length) {
        const reasons = [...new Set(invalidWaits.map((wait) => wait.message))];
        $("#result-title").textContent = "所选场况不成立";
        $("#result-subtitle").textContent = "牌型已听，但与和牌方式冲突";
        $("#result-content").innerHTML = `<p class="empty-result">${reasons.map(escapeHtml).join("；")}</p>`;
        return;
      }
      $("#result-title").textContent = waits.length ? `听 ${waits.length} 张牌` : "尚未听牌";
      $("#result-subtitle").textContent = waits.length ? (invalidWaits.length ? `另有 ${invalidWaits.length} 张进张不符合所选场况` : "点一张牌查看完整拆解") : "继续调整立牌或副露";
      $("#result-content").innerHTML = waits.length ? `<div class="wait-list">${waits.map(resultCard).join("")}</div>${invalidWaits.length ? `<p class="result-note">已按当前和牌方式排除：${invalidWaits.map((wait) => tileLabel(wait.tile)).join("、")}。</p>` : ""}` : `<p class="empty-result">当前 13 张牌还没有可和的进张。</p>`;
      return;
    }
    if (total === 14) { renderCompleted(countFan(buildInput())); return; }
    $("#result-title").textContent = total < 13 ? "继续点牌" : "牌数过多";
    $("#result-subtitle").textContent = total < 13 ? `还差 ${13 - total} 张才可查听牌` : "请移除多余牌";
    $("#result-content").innerHTML = `<p class="empty-result">${total < 13 ? "凑满 13 张会自动列出全部听牌。" : "完整牌面和副露合计应为 14 张。"}</p>`;
  } catch (error) {
    $("#result-title").textContent = "无法计算";
    $("#result-subtitle").textContent = "请检查当前场况";
    $("#result-content").innerHTML = `<p class="empty-result">${escapeHtml(error.message)}</p>`;
  }
}
function renderCatalog() {
  $("#fan-catalog").innerHTML = FAN_POINTS.map((points) => {
    const entries = FANS.filter((fan) => fan.points === points);
    return `<section class="fan-group"><h3><strong>${points}</strong>番 <span>${entries.length} 项</span></h3><div>${entries.map((fan) => `<details><summary>${fan.name}</summary><p>${fan.description}</p>${fan.excludes ? `<small>常见排斥：${fan.excludes}</small>` : ""}</details>`).join("")}</div></section>`;
  }).join("");
}
async function renderShareCode() {
  const url = `${window.location.origin}${window.location.pathname}#calculator`;
  $("#share-url").textContent = url;
  try { await QRCode.toCanvas($("#share-qr"), url, { width: 112, margin: 0, color: { dark: "#172031", light: "#ffffff" }, errorCorrectionLevel: "M" }); }
  catch { $("#share-url").textContent = "二维码生成失败，请复制当前地址"; }
}
function renderAll() {
  renderPalette(); renderWinds(); renderDraft(); renderHand(); renderConditions(); renderResults();
  $$('[data-mode]').forEach((button) => button.classList.toggle("is-active", button.dataset.mode === state.mode));
}
function addTile(code) {
  if (["peng", "mingGang", "anGang", "jiaGang"].includes(state.mode)) {
    const mode = state.mode;
    const copiesInHand = state.hand.filter((tile) => tile === code).length;
    const matchingMelds = state.melds.filter((meld) => meld.tiles[0] === code);
    const removeFromHand = (count) => {
      for (let removed = 0; removed < count; removed += 1) state.hand.splice(state.hand.lastIndexOf(code), 1);
    };
    if (mode === "peng") {
    if (selectedCount() + 3 > 14) state.draftError = "副露与立牌合计不能超过 14 张";
    else if (countTile(code) + 3 > 4) state.draftError = `现有${tileLabel(code)}数量不足以录入一副碰`;
    else {
      state.melds.push({ type: "peng", tiles: [code, code, code] });
      state.mode = "hand";
      state.draftError = "";
    }
    } else if (mode === "jiaGang") {
      const pengIndex = state.melds.findIndex((meld) => meld.type === "peng" && meld.tiles[0] === code);
      if (pengIndex < 0) state.draftError = `没有${tileLabel(code)}的碰可升级`;
      else if (matchingMelds.length !== 1 || copiesInHand > 1) state.draftError = "这张牌在其他副露或手牌中的数量不符合加杠";
      else {
        if (copiesInHand === 1) removeFromHand(1);
        state.melds[pengIndex] = { type: "mingGang", tiles: [code, code, code, code] };
        state.mode = "hand";
        state.draftError = "";
      }
    } else {
      const expectedHandCopies = mode === "anGang" ? 4 : 3;
      const consumedCopies = Math.min(copiesInHand, expectedHandCopies);
      if (matchingMelds.length) state.draftError = `已有${tileLabel(code)}副露，请使用加杠或移除原副露`;
      else if (mode === "mingGang" && copiesInHand === 4) state.draftError = "明杠需有一张来自其他玩家的牌；四张手牌请选暗杠";
      else if (selectedCount() - consumedCopies + 3 > 14) state.draftError = "副露与立牌合计不能超过 14 张";
      else {
        removeFromHand(consumedCopies);
        state.melds.push({ type: mode, tiles: [code, code, code, code] });
        state.mode = "hand";
        state.draftError = "";
      }
    }
  } else {
    if (countTile(code) >= 4) return;
    if (state.mode === "hand") { if (selectedCount() >= 14) return; state.hand.push(code); }
    else if (state.draft.length < MODE_META[state.mode].need) {
      state.draft.push(code);
      state.draftError = "";
      if (state.draft.length === MODE_META[state.mode].need) completeDraft();
    }
  }
  renderAll();
}
function validateDraft() {
  const { mode, draft } = state;
  const numbers = draft.filter((tile) => !HONORS.includes(tile));
  if (mode === "chi") {
    if (numbers.length !== 3 || new Set(numbers.map((tile) => tile.at(-1))).size !== 1) throw new Error("吃牌必须是同一花色的三张顺子");
    const values = numbers.map((tile) => Number(tile[0])).sort((a, b) => a - b);
    if (values[1] !== values[0] + 1 || values[2] !== values[1] + 1) throw new Error("吃牌需要连续三张，例如 123 万");
  } else if (new Set(draft).size !== 1) throw new Error(`${MODE_META[mode].label}需要同一张牌`);
}
function completeDraft() {
  try {
    if (state.draft.length !== MODE_META[state.mode].need) return;
    if (selectedCount() + 3 > 14) throw new Error("副露与立牌合计不能超过 14 张");
    validateDraft();
    state.melds.push({ type: state.mode, tiles: sortTiles(state.draft) });
    state.draft = []; state.draftError = ""; state.mode = "hand";
  } catch (error) { state.draftError = `${error.message}；点已选牌可撤回`; }
}
function resetState() {
  state.hand = []; state.melds = []; state.draft = []; state.draftError = ""; state.mode = "hand"; state.flowers = 0; state.round = "E"; state.seat = "E";
  state.winContext = createWinContext();
  renderAll();
}
function loadSample() { resetState(); state.hand = [...SAMPLE_HAND]; renderAll(); setView("calculator"); }
function setView(view) {
  $$('[data-view-panel]').forEach((panel) => { panel.hidden = panel.dataset.viewPanel !== view; panel.classList.toggle("is-visible", panel.dataset.viewPanel === view); });
  $$('[data-view]').forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  if (window.location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "instant" });
}
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character])); }

document.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-tile]"); if (tile) addTile(tile.dataset.tile);
  const hand = event.target.closest("[data-remove-hand]"); if (hand) { state.hand.splice(Number(hand.dataset.removeHand), 1); renderAll(); }
  const meld = event.target.closest("[data-remove-meld]"); if (meld) { state.melds.splice(Number(meld.dataset.removeMeld), 1); renderAll(); }
  const wait = event.target.closest("[data-promote-tile]"); if (wait && selectedCount() === 13) { state.hand.push(wait.dataset.promoteTile); renderAll(); }
  const draft = event.target.closest("[data-remove-draft]"); if (draft) { state.draft.splice(Number(draft.dataset.removeDraft), 1); state.draftError = ""; renderAll(); }
  const mode = event.target.closest("[data-mode]"); if (mode) { state.mode = mode.dataset.mode; state.draft = []; state.draftError = ""; renderAll(); }
  const view = event.target.closest("[data-view]"); if (view) setView(view.dataset.view);
  const flower = event.target.closest("[data-flower-step]"); if (flower) { state.flowers = Math.max(0, Math.min(8, state.flowers + Number(flower.dataset.flowerStep))); renderAll(); }
});
$("#reset-hand").addEventListener("click", resetState);
$("#load-sample").addEventListener("click", loadSample);
$("#round-winds").addEventListener("change", (event) => { state.round = event.target.value; renderAll(); });
$("#seat-winds").addEventListener("change", (event) => { state.seat = event.target.value; renderAll(); });
$$('[data-context-flag]').forEach((input) => input.addEventListener("change", (event) => {
  state.winContext = normalizeWinContext(state.winContext, { [event.target.dataset.contextFlag]: event.target.checked });
  renderAll();
}));
renderCatalog(); renderAll(); setView(["#catalog", "#guide"].includes(window.location.hash) ? window.location.hash.slice(1) : "calculator"); renderShareCode();

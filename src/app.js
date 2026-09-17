import { countFan } from "gb-mahjong-js/lib/api/index.js";
import constants from "gb-mahjong-js/lib/core/constants.js";
import QRCode from "qrcode";
import { FAN_POINTS, FANS } from "./fans.js";

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
};
const TILES = [...SUITS.flatMap((suit) => Array.from({ length: 9 }, (_, index) => `${index + 1}${suit}`)), ...HONORS];
const TILE_ORDER = new Map(TILES.map((code, index) => [code, index]));
const SAMPLE_HAND = ["1m", "2m", "3m", "1p", "2p", "3p", "1s", "2s", "3s", "7s", "8s", "9s", "E"];

const state = {
  hand: [...SAMPLE_HAND], melds: [], draft: [], mode: "hand", flowers: 0, round: "E", seat: "E",
  conditions: { selfDrawn: false, lastTile: false, fourthTile: false, afterKong: false, robKong: false },
};

function tileSvg(code) {
  return `<svg class="tile-face" viewBox="0 0 64 88" aria-hidden="true"><use href="./mahjong-sprite.svg#tile-${code}"></use></svg>`;
}
function tileLabel(code) {
  if (HONORS.includes(code)) return { E: "东", S: "南", W: "西", N: "北", C: "中", F: "发", P: "白" }[code];
  return `${code[0]}${{ m: "万", p: "筒", s: "条" }[code.at(-1)]}`;
}
function sortTiles(codes) { return [...codes].sort((left, right) => TILE_ORDER.get(left) - TILE_ORDER.get(right)); }
function allPickedTiles() { return [...state.hand, ...state.draft, ...state.melds.flatMap((meld) => meld.tiles)]; }
function countTile(code) { return allPickedTiles().filter((tile) => tile === code).length; }
function selectedCount() { return state.hand.length + state.melds.reduce((sum, meld) => sum + meld.tiles.length, 0); }
function tileButton(code) {
  const count = countTile(code);
  return `<button type="button" class="tile-button" data-tile="${code}" aria-label="${tileLabel(code)}，当前已有 ${count} 张"${count >= 4 ? " disabled" : ""}>${tileSvg(code)}</button>`;
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
function buildInput(hand = state.hand) {
  if (state.conditions.afterKong && state.conditions.robKong) throw new Error("杠上开花与抢杠和不能同时成立");
  if (state.conditions.afterKong && !state.conditions.selfDrawn) throw new Error("杠上开花应同时勾选自摸");
  if (state.conditions.afterKong && state.conditions.lastTile) throw new Error("杠上开花与海底捞月不能同时成立");
  const winning = hand.at(-1);
  if (!winning) throw new Error("请先选择和牌");
  const context = `${state.round}${state.seat}${state.conditions.selfDrawn ? 1 : 0}${state.conditions.fourthTile ? 1 : 0}${state.conditions.lastTile ? 1 : 0}${state.conditions.afterKong || state.conditions.robKong ? 1 : 0}`;
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
  $("#draft-label").textContent = `组一副${meta.label} · ${state.draft.length}/${meta.need}`;
  $("#draft-tiles").innerHTML = state.draft.map((tile) => `<span class="mini-tile">${tileSvg(tile)}</span>`).join("");
  $("#confirm-draft").disabled = state.draft.length !== meta.need;
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
  $("#context-summary").textContent = `${WIND_LABELS[state.round]}风圈 · ${WIND_LABELS[state.seat]}风位 · 花牌 ${state.flowers}`;
  $$('[data-condition]').forEach((input) => { input.checked = state.conditions[input.dataset.condition]; });
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
      const waits = TILES.filter((tile) => countTile(tile) < 4).flatMap((tile) => {
        const result = countFan(buildInput([...state.hand, tile]));
        return result.isHu ? [{ tile, result }] : [];
      });
      $("#result-title").textContent = waits.length ? `听 ${waits.length} 张牌` : "尚未听牌";
      $("#result-subtitle").textContent = waits.length ? "点一张牌查看完整拆解" : "继续调整立牌或副露";
      $("#result-content").innerHTML = waits.length ? `<div class="wait-list">${waits.map(resultCard).join("")}</div>` : `<p class="empty-result">当前 13 张牌还没有可和的进张。</p>`;
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
function renderAll() { renderPalette(); renderWinds(); renderDraft(); renderHand(); renderConditions(); renderResults(); }
function addTile(code) {
  if (countTile(code) >= 4) return;
  if (state.mode === "hand") { if (selectedCount() >= 14) return; state.hand.push(code); }
  else if (state.draft.length < MODE_META[state.mode].need) state.draft.push(code);
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
    if (selectedCount() + state.draft.length > 14) throw new Error("副露与立牌合计不能超过 14 张");
    validateDraft();
    state.melds.push({ type: state.mode, tiles: sortTiles(state.draft) });
    state.draft = []; state.mode = "hand"; renderAll();
  } catch (error) { $("#draft-label").textContent = error.message; }
}
function resetState() {
  state.hand = []; state.melds = []; state.draft = []; state.mode = "hand"; state.flowers = 0; state.round = "E"; state.seat = "E";
  state.conditions = { selfDrawn: false, lastTile: false, fourthTile: false, afterKong: false, robKong: false };
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
  const mode = event.target.closest("[data-mode]"); if (mode) { state.mode = mode.dataset.mode; state.draft = []; renderAll(); }
  const view = event.target.closest("[data-view]"); if (view) setView(view.dataset.view);
  const flower = event.target.closest("[data-flower-step]"); if (flower) { state.flowers = Math.max(0, Math.min(8, state.flowers + Number(flower.dataset.flowerStep))); renderAll(); }
});
$("#reset-hand").addEventListener("click", resetState);
$("#load-sample").addEventListener("click", loadSample);
$("#cancel-draft").addEventListener("click", () => { state.draft = []; state.mode = "hand"; renderAll(); });
$("#confirm-draft").addEventListener("click", completeDraft);
$("#round-winds").addEventListener("change", (event) => { state.round = event.target.value; renderAll(); });
$("#seat-winds").addEventListener("change", (event) => { state.seat = event.target.value; renderAll(); });
$$('[data-condition]').forEach((input) => input.addEventListener("change", (event) => { state.conditions[event.target.dataset.condition] = event.target.checked; renderAll(); }));
if (window.matchMedia("(min-width: 700px)").matches) $("#context-details").open = true;
renderCatalog(); renderAll(); setView(["#catalog", "#guide"].includes(window.location.hash) ? window.location.hash.slice(1) : "calculator"); renderShareCode();

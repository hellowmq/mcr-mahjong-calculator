import { countFan } from "gb-mahjong-js/lib/api/index.js";
import constants from "gb-mahjong-js/lib/core/constants.js";
import { FAN_POINTS, FANS } from "./fans.js";

const FAN_BY_NAME = new Map(FANS.map((fan) => [fan.name, fan]));
const SAMPLE_HAND = "123m123p123s789s东东";
const HONORS = new Set(["东", "南", "西", "北", "中", "发", "白", "E", "S", "W", "N", "C", "F", "P"]);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function normalizeTiles(raw) {
  return String(raw ?? "")
    .replace(/[萬万]/g, "m")
    .replace(/[筒饼餅]/g, "p")
    .replace(/[条條索]/g, "s")
    .replace(/[一壹]/g, "1")
    .replace(/[二贰]/g, "2")
    .replace(/[三叁]/g, "3")
    .replace(/[四肆]/g, "4")
    .replace(/[五伍]/g, "5")
    .replace(/[六陆]/g, "6")
    .replace(/[七柒]/g, "7")
    .replace(/[八捌]/g, "8")
    .replace(/[九玖]/g, "9")
    .replace(/东/g, "E")
    .replace(/南/g, "S")
    .replace(/西/g, "W")
    .replace(/北/g, "N")
    .replace(/中/g, "C")
    .replace(/发/g, "F")
    .replace(/白/g, "P");
}

function tileTokens(raw) {
  const text = normalizeTiles(raw).replace(/[\s,[\]]/g, "");
  const tokens = [];
  let pending = "";
  for (const char of text) {
    if (/^[1-9]$/.test(char)) {
      pending += char;
      continue;
    }
    if (/^[mps]$/.test(char)) {
      for (const digit of pending) tokens.push({ value: `${digit}${char}`, label: `${digit}${char === "m" ? "万" : char === "p" ? "筒" : "条"}`, honor: false });
      pending = "";
      continue;
    }
    if (HONORS.has(char)) {
      if (pending) throw new Error("数字牌需要在数字后写 m、p 或 s");
      const label = { E: "东", S: "南", W: "西", N: "北", C: "中", F: "发", P: "白" }[char] ?? char;
      tokens.push({ value: char, label, honor: true });
      continue;
    }
    if (char === "z") {
      if (!pending) throw new Error("z 后需要 1–7 的字牌编号");
      for (const digit of pending) {
        const label = { 1: "东", 2: "南", 3: "西", 4: "北", 5: "中", 6: "发", 7: "白" }[digit];
        if (!label) throw new Error("字牌编号只能是 1–7");
        tokens.push({ value: digit, label, honor: true });
      }
      pending = "";
      continue;
    }
    if (!/[0-9]/.test(char)) throw new Error(`无法识别字符：${char}`);
  }
  if (pending) throw new Error("最后一组数字缺少 m、p 或 s 花色");
  return tokens;
}

function buildInput() {
  const hand = normalizeTiles($("#hand-input").value).replace(/\s+/g, "");
  const melds = normalizeTiles($("#meld-input").value).replace(/\s+/g, "");
  const selfDrawn = $("#self-drawn").checked;
  const lastTile = $("#last-tile").checked;
  const fourthTile = $("#fourth-tile").checked;
  const afterKong = $("#after-kong").checked;
  const robKong = $("#rob-kong").checked;
  if (!hand) throw new Error("请先输入立牌");
  if (afterKong && robKong) throw new Error("“杠后和牌”和“抢杠和”不能同时选择");
  if (afterKong && !selfDrawn) throw new Error("杠后开花应勾选“自摸”");
  if (afterKong && lastTile) throw new Error("杠后开花与牌墙最后一张不能同时选择");
  const flowers = Math.max(0, Math.min(8, Number($("#flower-count").value) || 0));
  const round = $("#round-wind").value;
  const seat = $("#seat-wind").value;
  const context = `${round}${seat}${selfDrawn ? 1 : 0}${fourthTile ? 1 : 0}${lastTile ? 1 : 0}${afterKong || robKong ? 1 : 0}`;
  return `${melds}${hand}|${context}|${flowers}`;
}

function setPreview() {
  const preview = $("#hand-preview");
  try {
    const tokens = tileTokens($("#hand-input").value);
    $("#hand-count").textContent = `${tokens.length} 张`;
    preview.innerHTML = tokens.length
      ? tokens.map((tile, index) => `<span class="tile-token${tile.honor ? " honor" : ""}${index === tokens.length - 1 ? " win" : ""}">${tile.label}</span>`).join("")
      : `<span class="empty-result">等待牌面</span>`;
  } catch (error) {
    $("#hand-count").textContent = "—";
    preview.innerHTML = `<span class="empty-result">${escapeHtml(error.message)}</span>`;
  }
}

function renderResult(result, error = null) {
  const total = $("#result-total");
  const state = $("#result-state");
  const breakdown = $("#fan-breakdown");
  const fanCount = $("#fan-count");
  const decomposition = $("#decomposition-note");
  if (error || !result?.isHu) {
    total.textContent = "—";
    state.textContent = error?.message ?? "牌面未组成合法和牌";
    state.classList.add("is-warn");
    fanCount.textContent = "0 项";
    breakdown.innerHTML = `<p class="empty-result">${escapeHtml(error?.message ?? "请检查张数、牌面结构与副露格式。")}</p>`;
    decomposition.textContent = "";
    return;
  }
  state.classList.remove("is-warn");
  const fans = (result.fans ?? []).map((entry) => ({
    name: constants.FAN_NAME[entry.fanId] ?? "未命名番种",
    points: entry.score ?? 0,
  })).sort((a, b) => b.points - a.points || a.name.localeCompare(b.name, "zh-CN"));
  const coreTotal = fans.filter((fan) => fan.name !== "花牌").reduce((sum, fan) => sum + fan.points, 0);
  total.textContent = String(result.totalFan ?? 0);
  state.textContent = coreTotal >= 8 ? "达到 8 番起和" : "未达到 8 番起和";
  fanCount.textContent = `${fans.length} 项`;
  breakdown.innerHTML = fans.length ? fans.map((fan) => {
    const meta = FAN_BY_NAME.get(fan.name);
    return `<div class="fan-row"><span>${fan.name}${meta?.group ? `<small>${meta.group}</small>` : ""}</span><strong>+${fan.points}</strong></div>`;
  }).join("") : `<p class="empty-result">没有可显示的番种。</p>`;
  decomposition.textContent = result.decomposition?.packs?.length ? "已从合法拆解中选取番数最高的方案。" : "特殊和型已按规则单独判断。";
}

function calculate() {
  try {
    renderResult(countFan(buildInput()));
  } catch (error) {
    renderResult(null, error);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function renderCatalog() {
  $("#fan-catalog").innerHTML = FAN_POINTS.map((points) => {
    const group = FANS.filter((fan) => fan.points === points);
    const cards = group.map((fan) => `<details class="fan-card"><summary>${fan.name}</summary><p>${fan.description}</p>${fan.excludes ? `<span class="excludes"><b>常见排斥：</b>${fan.excludes}</span>` : ""}</details>`).join("");
    return `<section class="fan-group"><div><div class="fan-group-score"><strong>${points}</strong><span>番</span></div><p class="fan-group-label">${group[0].group} · ${group.length} 项</p></div><div class="fan-cards">${cards}</div></section>`;
  }).join("");
}

function setView(view) {
  $$("[data-view-panel]").forEach((panel) => {
    const visible = panel.dataset.viewPanel === view;
    panel.hidden = !visible;
    panel.classList.toggle("is-visible", visible);
  });
  $$(".view-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  if (window.location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);
}

$("#calculator-form").addEventListener("submit", (event) => { event.preventDefault(); calculate(); });
$("#hand-input").addEventListener("input", setPreview);
$("#sample-button").addEventListener("click", () => {
  $("#hand-input").value = SAMPLE_HAND;
  $("#meld-input").value = "";
  $("#self-drawn").checked = false;
  $("#last-tile").checked = false;
  $("#fourth-tile").checked = false;
  $("#after-kong").checked = false;
  $("#rob-kong").checked = false;
  $("#flower-count").value = "0";
  setPreview();
  calculate();
});
$$(`[data-step]`).forEach((button) => button.addEventListener("click", () => {
  const input = $(`#${button.dataset.target}`);
  input.value = Math.max(Number(input.min), Math.min(Number(input.max), Number(input.value) + Number(button.dataset.step)));
}));
$$(`[data-view]`).forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));

renderCatalog();
setPreview();
calculate();
setView(window.location.hash === "#catalog" ? "catalog" : "calculator");

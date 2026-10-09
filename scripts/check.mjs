import { readFileSync, statSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const js = readFileSync("dist/app.js", "utf8");
const css = readFileSync("dist/styles.css", "utf8");
const sprite = readFileSync("dist/mahjong-sprite.svg", "utf8");
const pwa = readFileSync("dist/pwa.js", "utf8");
const serviceWorker = readFileSync("dist/sw.js", "utf8");
const manifest = JSON.parse(readFileSync("dist/manifest.webmanifest", "utf8"));

for (const marker of ["国标麻将算番", "算番器", "番种表", "81 番种", "逐张点牌"]) {
  if (!html.includes(marker)) throw new Error(`missing HTML marker: ${marker}`);
}
for (const marker of ["和牌条件", "自摸", "抢杠和", "和绝张", "海底捞月（末张点和）"]) {
  if (!html.includes(marker)) throw new Error(`missing context option: ${marker}`);
}
if (!html.includes('id="tile-1m"') || !js.includes('href="#tile-')) {
  throw new Error("离线麻将精灵没有内联到打包页");
}
if (!sprite.includes('id="tile-5m"') || !sprite.includes(">伍</text>")) {
  throw new Error("五万牌面字形应为伍");
}

if (!js.includes("gb-mahjong-js") && !js.includes("FanCalculator")) {
  throw new Error("bundled scoring engine marker is missing");
}
if (!html.includes('rel="manifest"') || !html.includes('src="./pwa.js"') || !html.includes('id="offline-status"')) {
  throw new Error("PWA entry points or offline status are missing from HTML");
}
for (const hook of ["<!-- site:head -->", "<!-- site:after-result -->", "<!-- site:guide -->"]) {
  if (html.split(hook).length !== 2) throw new Error(`deploy hook must appear once: ${hook}`);
}
if (html.includes("ca-pub-") || html.includes("adsbygoogle") || html.includes("googlesyndication")) {
  throw new Error("tool build must not contain an ad client or ad script");
}
if (manifest.scope !== "./" || manifest.start_url !== "./#calculator") {
  throw new Error("PWA manifest is not relative to the deployed project path");
}
if (!pwa.includes('register("./sw.js"') || !serviceWorker.includes('"./app.js?v=20261007-tiles"') || !serviceWorker.includes('"./index.html"')) {
  throw new Error("PWA registration or offline shell is incomplete");
}
if (/fetch\s*\(|XMLHttpRequest|WebSocket/.test(js)) {
  throw new Error("runtime network API detected in static bundle");
}
if (css.length < 2000) throw new Error("stylesheet was not built");
if (!css.includes("grid-template-columns:repeat(14,minmax(0,1fr))") || /\.selected-rack\{[^}]*overflow-x:auto/.test(css)) {
  throw new Error("已选手牌必须在单行自适应显示 14 张，避免横向滚动");
}
for (const path of ["dist/index.html", "dist/app.js", "dist/styles.css", "dist/favicon.svg", "dist/mahjong-sprite.svg", "dist/pwa.js", "dist/sw.js", "dist/manifest.webmanifest", "dist/icon-192.png", "dist/icon-512.png"]) {
  if (statSync(path).size === 0) throw new Error(`empty output: ${path}`);
}

console.log("static checks passed");

import { readFileSync, statSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const js = readFileSync("dist/app.js", "utf8");
const css = readFileSync("dist/styles.css", "utf8");
const pwa = readFileSync("dist/pwa.js", "utf8");
const serviceWorker = readFileSync("dist/sw.js", "utf8");
const manifest = JSON.parse(readFileSync("dist/manifest.webmanifest", "utf8"));

for (const marker of ["国标麻将算番", "算番器", "番种表", "81 番种", "逐张点牌"]) {
  if (!html.includes(marker)) throw new Error(`missing HTML marker: ${marker}`);
}
if (!html.includes('id="tile-1m"') || !js.includes('href="#tile-')) {
  throw new Error("离线麻将精灵没有内联到打包页");
}

if (!js.includes("gb-mahjong-js") && !js.includes("FanCalculator")) {
  throw new Error("bundled scoring engine marker is missing");
}
if (!html.includes('rel="manifest"') || !html.includes('src="./pwa.js"') || !html.includes('id="offline-status"')) {
  throw new Error("PWA entry points or offline status are missing from HTML");
}
if (!html.includes('location.hostname === "tech.wenmq.cn"') || !html.includes('client=ca-pub-5022811590872785') || !html.includes('data-ad-slot="1726092669"') || !html.includes('class="adsense-slot"')) {
  throw new Error("AdSense script or calculator result ad unit is missing from HTML");
}
if (!html.includes("广告与隐私") || !html.includes("Google 隐私权政策")) {
  throw new Error("AdSense privacy disclosure is missing from HTML");
}
if (manifest.scope !== "./" || manifest.start_url !== "./#calculator") {
  throw new Error("PWA manifest is not relative to the deployed project path");
}
if (!pwa.includes('register("./sw.js"') || !serviceWorker.includes('"./app.js"') || !serviceWorker.includes('"./index.html"')) {
  throw new Error("PWA registration or offline shell is incomplete");
}
if (/fetch\s*\(|XMLHttpRequest|WebSocket/.test(js)) {
  throw new Error("runtime network API detected in static bundle");
}
if (css.length < 2000) throw new Error("stylesheet was not built");
for (const path of ["dist/index.html", "dist/app.js", "dist/styles.css", "dist/favicon.svg", "dist/mahjong-sprite.svg", "dist/pwa.js", "dist/sw.js", "dist/manifest.webmanifest", "dist/icon-192.png", "dist/icon-512.png"]) {
  if (statSync(path).size === 0) throw new Error(`empty output: ${path}`);
}

console.log("static checks passed");

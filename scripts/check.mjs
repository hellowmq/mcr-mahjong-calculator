import { readFileSync, statSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const js = readFileSync("dist/app.js", "utf8");
const css = readFileSync("dist/styles.css", "utf8");

for (const marker of ["国标麻将算番", "算番器", "番种表", "81 番种", "逐张点牌"]) {
  if (!html.includes(marker)) throw new Error(`missing HTML marker: ${marker}`);
}
if (!html.includes('id="tile-1m"') || !js.includes('href="#tile-')) {
  throw new Error("离线麻将精灵没有内联到打包页");
}

if (!js.includes("gb-mahjong-js") && !js.includes("FanCalculator")) {
  throw new Error("bundled scoring engine marker is missing");
}
if (/fetch\s*\(|XMLHttpRequest|WebSocket/.test(js)) {
  throw new Error("runtime network API detected in static bundle");
}
if (css.length < 2000) throw new Error("stylesheet was not built");
for (const path of ["dist/index.html", "dist/app.js", "dist/styles.css", "dist/favicon.svg", "dist/mahjong-sprite.svg"]) {
  if (statSync(path).size === 0) throw new Error(`empty output: ${path}`);
}

console.log("static checks passed");

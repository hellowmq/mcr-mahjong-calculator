import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { build } from "esbuild";

mkdirSync("dist", { recursive: true });
const sourceHtml = readFileSync("src/index.html", "utf8");
const sprite = readFileSync("src/mahjong-sprite.svg", "utf8");
const defs = sprite.match(/<defs>([\s\S]*)<\/defs>/)?.[1];
if (!defs) throw new Error("麻将牌精灵定义缺失");
const inlineSprite = `<svg class="sprite-defs" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs>${defs}</defs></svg>`;
if (!sourceHtml.includes("<!-- INLINE_SPRITE_DEFS -->")) throw new Error("页面缺少麻将精灵占位标记");
writeFileSync("dist/index.html", sourceHtml.replace("<!-- INLINE_SPRITE_DEFS -->", inlineSprite));
copyFileSync("src/styles.css", "dist/styles.css");
copyFileSync("src/favicon.svg", "dist/favicon.svg");
copyFileSync("src/mahjong-sprite.svg", "dist/mahjong-sprite.svg");
for (const path of ["manifest.webmanifest", "sw.js", "pwa.js", "icon-192.png", "icon-512.png"]) {
  copyFileSync(`src/${path}`, `dist/${path}`);
}

await build({
  entryPoints: ["src/app.js"],
  bundle: true,
  format: "iife",
  outfile: "dist/app.js",
  legalComments: "inline",
  charset: "utf8",
  sourcemap: false
});

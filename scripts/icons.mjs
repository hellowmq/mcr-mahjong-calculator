import { readFileSync, writeFileSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";

// 单一真源：src/icon-master.svg。PWA 位图图标一律由此导出，
// 避免 favicon 与 icon-192/512 手工维护导致的主体/配色漂移。
const SOURCE = "src/icon-master.svg";
const svg = readFileSync(SOURCE);

const targets = [
  { size: 192, out: "src/icon-192.png" },
  { size: 512, out: "src/icon-512.png" },
];

for (const { size, out } of targets) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    background: "rgba(0,0,0,0)",
    font: { loadSystemFonts: false }, // 图标主体已转为轮廓，不依赖运行时字体
  });
  const png = resvg.render().asPng();
  writeFileSync(out, png);
  console.log(`icons: ${out} (${size}x${size}, ${png.length} bytes)`);
}

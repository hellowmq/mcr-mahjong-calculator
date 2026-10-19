import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFile = resolve(__dirname, "../node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/combination.js");

if (!existsSync(targetFile)) {
  console.log("gb-mahjong-js not installed, skipping patch.");
  process.exit(0);
}

let content = readFileSync(targetFile, "utf8");

const bugPattern = `          for (let l = k + 1; l < sortedKegang.length; l++) {
            if (
              si === sj &&`;

const fix = `          for (let l = k + 1; l < sortedKegang.length; l++) {
            if (sortedKegang[l].rank !== sortedKegang[k].rank + 1) continue;
            if (
              si === sj &&`;

if (content.includes("if (sortedKegang[l].rank !== sortedKegang[k].rank + 1) continue;")) {
  console.log("gb-mahjong-js is already patched for 一色四节高 (FAN_YISESIJIEGAO).");
} else if (content.includes(bugPattern)) {
  content = content.replace(bugPattern, fix);
  writeFileSync(targetFile, content, "utf8");
  console.log("gb-mahjong-js successfully patched for 一色四节高 (FAN_YISESIJIEGAO).");
} else {
  console.warn("Could not find patch target in gb-mahjong-js/lib/solver/fan-rules/scoring/combination.js");
}

import assert from "node:assert/strict";
import { countFan } from "gb-mahjong-js/lib/api/index.js";
import constants from "gb-mahjong-js/lib/core/constants.js";

const cases = [
  ["普通和牌", "123m123p123s789sEE|EE0000|0", "门前清"],
  ["连七对", "11223344556677m|EE0000|0", "连七对"],
  ["十三幺", "19m19p19sESWNCFPP|EE0000|0", "十三幺"],
  ["九莲宝灯", "1112345678999m1m|EE0000|0", "九莲宝灯"],
];

for (const [label, input, expectedFan] of cases) {
  const result = countFan(input);
  assert.equal(result.isHu, true, `${label} should be a winning hand`);
  const names = result.fans.map((fan) => constants.FAN_NAME[fan.fanId]);
  assert.ok(names.includes(expectedFan), `${label} missing ${expectedFan}`);
  console.log(`${label}: ${result.totalFan} 番 · ${names.join("、")}`);
}

assert.throws(() => countFan("123m456p789sEE|EE0000|0"), /Failed to parse hand/);
console.log("engine smoke passed");

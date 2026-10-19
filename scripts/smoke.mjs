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

const allGreen = countFan("22233344466688s|EE0000|0");
const allGreenNames = allGreen.fans.map((fan) => constants.FAN_NAME[fan.fanId]);
assert.ok(allGreenNames.includes("绿一色"), "二、三、四、六、八条组成的牌型应命中绿一色");
assert.ok(!allGreenNames.includes("一色四节高"), "2346条不连续，不得误判为一色四节高");
assert.ok(allGreenNames.includes("一色三节高"), "2346条包含234连续三刻，应计一色三节高");

const fourSectionHigh = countFan("22233344455588s|EE0000|0");
const fourSectionHighNames = fourSectionHigh.fans.map((fan) => constants.FAN_NAME[fan.fanId]);
assert.ok(fourSectionHighNames.includes("一色四节高"), "2345条连续四刻，应命中一色四节高");

const redBamboo = countFan("22233344455566s|EE0000|0");
const redBambooNames = redBamboo.fans.map((fan) => constants.FAN_NAME[fan.fanId]);
assert.ok(!redBambooNames.includes("绿一色"), "包含五条的牌型不得命中绿一色");
console.log("绿一色边界: 纯绿条子命中，含五条排除");
console.log("一色四节高边界: 2346条不误计四节高，2345条正确计四节高");

assert.throws(() => countFan("123m456p789sEE|EE0000|0"), /Failed to parse hand/);
console.log("engine smoke passed");

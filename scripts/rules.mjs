import assert from "node:assert/strict";
import { countFan } from "gb-mahjong-js/lib/api/index.js";
import constants from "gb-mahjong-js/lib/core/constants.js";
import { createWinContext, encodeWinContext, gangLabel, lastTileLabel, normalizeWinContext, validateWinContext } from "../src/win-context.js";

const fanNames = (input) => countFan(input).fans.map((fan) => constants.FAN_NAME[fan.fanId]);

assert.equal(encodeWinContext("E", "S", { selfDrawn: false, fourthTile: false, lastTile: false, gang: false }), "ES0000");
assert.equal(encodeWinContext("E", "S", { selfDrawn: true, fourthTile: false, lastTile: true, gang: false }), "ES1010");
assert.equal(encodeWinContext("E", "S", { selfDrawn: true, fourthTile: false, lastTile: true, gang: true }), "ES1011");
assert.equal(encodeWinContext("E", "S", { selfDrawn: false, fourthTile: false, lastTile: false, gang: true }), "ES0001");
assert.equal(lastTileLabel({ selfDrawn: true, gang: false }), "妙手回春（海底自摸）");
assert.equal(lastTileLabel({ selfDrawn: false, gang: false }), "海底捞月（末张点和）");
assert.equal(gangLabel({ selfDrawn: false }), "抢杠和");
assert.equal(gangLabel({ selfDrawn: true }), "杠上开花");

const robKong = normalizeWinContext({ ...createWinContext(), lastTile: true, fourthTile: true }, { gang: true });
assert.deepEqual(robKong, { selfDrawn: false, fourthTile: false, gang: true, lastTile: false });
const replacementLastTile = normalizeWinContext({ ...createWinContext(), selfDrawn: true, lastTile: true }, { gang: true });
assert.deepEqual(replacementLastTile, { selfDrawn: true, fourthTile: false, gang: true, lastTile: true });

const pairWaitHand = ["1m", "2m", "3m", "1p", "2p", "3p", "1s", "2s", "3s", "7s", "8s", "9s", "E", "E"];
assert.throws(
  () => validateWinContext({ context: { selfDrawn: false, gang: false, lastTile: false, fourthTile: true }, hand: pairWaitHand, melds: [] }),
  /单钓将等和法不会计和绝张/
);
assert.throws(
  () => validateWinContext({ context: { selfDrawn: false, gang: true, lastTile: false, fourthTile: false }, hand: pairWaitHand, melds: [] }),
  /单钓将、七对等此类和法不会成立抢杠和/
);

const sevenPairs = ["1m", "1m", "2m", "2m", "3m", "3m", "4m", "4m", "5m", "5m", "6m", "6m", "7m", "7m"];
assert.throws(
  () => validateWinContext({ context: { selfDrawn: false, gang: true, lastTile: false, fourthTile: false }, hand: sevenPairs, melds: [] }),
  /不会成立抢杠和/
);

const doubleEast = fanNames("EEE123m123p123s11m|EE0000|0");
assert.ok(doubleEast.includes("圈风刻"), "东风圈的东刻应计圈风刻");
assert.ok(doubleEast.includes("门风刻"), "东风位的东刻应同时计门风刻");
const eastRoundSouthSeat = fanNames("EEE123m123p123s11m|ES0000|0");
assert.ok(eastRoundSouthSeat.includes("圈风刻"), "东风圈的东刻应计圈风刻");
assert.ok(!eastRoundSouthSeat.includes("门风刻"), "南风位的东刻不应计门风刻");

const lastDiscard = fanNames("12789m123p123sEE3m|EE0010|0");
assert.ok(lastDiscard.includes("海底捞月"));
assert.ok(!lastDiscard.includes("妙手回春"));
const lastDraw = fanNames("12789m123p123sEE3m|EE1010|0");
assert.ok(lastDraw.includes("妙手回春"));
assert.ok(!lastDraw.includes("海底捞月"));

const replacementLastDraw = fanNames("[EEEE]123m123p123s55m|EE1011|0");
assert.ok(replacementLastDraw.includes("杠上开花"), "杠后补牌和应计杠上开花");
assert.ok(replacementLastDraw.includes("妙手回春"), "补到牌墙最后一张和应同时计妙手回春");

const robbedKong = fanNames("12789m123p123sEE3m|EE0001|0");
assert.ok(robbedKong.includes("抢杠和"));
assert.ok(!robbedKong.includes("和绝张"));
const fourthTile = fanNames("12789m123p123sEE3m|EE0100|0");
assert.ok(fourthTile.includes("和绝张"), "自己的立牌中没有同张时，应允许和绝张");

const bigFourWinds = fanNames("[EEE,2][SSSS,1]WWWNN55pN|EE1000|0");
assert.ok(bigFourWinds.includes("大四喜"));
assert.ok(!bigFourWinds.includes("圈风刻"), "大四喜不另计圈风刻");
assert.ok(!bigFourWinds.includes("门风刻"), "大四喜不另计门风刻");

console.log("context rule checks passed");

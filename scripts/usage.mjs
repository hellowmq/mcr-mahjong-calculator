import test from "node:test";
import assert from "node:assert/strict";
import { createUsageTracker } from "../src/usage.js";

test("manual input and repeated renders count once without exposing the hand", () => {
  const events = [];
  const usage = createUsageTracker((event) => events.push(event));
  usage.start(); usage.start();
  usage.result("waits", "private-hand");
  usage.result("waits", "private-hand");
  usage.result("score", "private-hand-with-winning-tile");
  usage.result("score", "private-hand-with-winning-tile");
  assert.deepEqual(events, [
    { eventName: "calculator_start", input_mode: "manual" },
    { eventName: "calculator_result", input_mode: "manual", result_type: "waits" },
    { eventName: "calculator_result", input_mode: "manual", result_type: "score" }
  ]);
  assert.ok(!JSON.stringify(events).includes("private-hand"));
});
test("sample results remain separate; reset begins another manual hand", () => {
  const events = [];
  const usage = createUsageTracker((event) => events.push(event));
  usage.sample(); usage.result("waits", "hand"); usage.start();
  usage.reset(); usage.start(); usage.result("waits", "hand");
  usage.reset(); usage.start(); usage.result("waits", "hand");
  assert.equal(events.filter(event => event.eventName === "calculator_start" && event.input_mode === "manual").length, 1);
  assert.equal(events.filter(event => event.eventName === "calculator_result" && event.input_mode === "manual").length, 2);
  assert.equal(events[0].eventName, "sample_load");
  assert.equal(events[1].input_mode, "sample");
});
test("only supported result types and one successful share per page are counted", () => {
  const events = [];
  const usage = createUsageTracker((event) => events.push(event));
  usage.result("error", "private-error"); usage.share(); usage.share(); usage.reset(); usage.share();
  assert.deepEqual(events, [{ eventName: "share_copy", input_mode: "manual" }]);
});
test("an unavailable or broken collector never interrupts tool actions", () => {
  const usage = createUsageTracker(() => { throw new Error("collector unavailable"); });
  assert.doesNotThrow(() => { usage.start(); usage.sample(); usage.result("score", "private"); usage.share(); usage.reset(); });
});

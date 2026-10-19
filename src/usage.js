// Tool events stay local unless a deployment explicitly installs a collector.
export function createUsageTracker(send) {
  let inputMode = "manual";
  const starts = new Set();
  const results = new Set();
  let shared = false;
  const emit = (eventName, parameters = {}) => {
    try { send({ eventName, input_mode: inputMode, ...parameters }); }
    catch { /* Statistics must never interrupt the calculator. */ }
  };
  return {
    start() {
      if (starts.has(inputMode)) return;
      starts.add(inputMode);
      emit("calculator_start");
    },
    reset() { inputMode = "manual"; results.clear(); },
    sample() { inputMode = "sample"; emit("sample_load"); },
    result(resultType, signature) {
      if (!["waits", "score"].includes(resultType)) return;
      // The signature contains local state for deduplication, never event data.
      const key = `${inputMode}:${resultType}:${signature}`;
      if (results.has(key)) return;
      results.add(key);
      emit("calculator_result", { result_type: resultType });
    },
    share() {
      if (shared) return;
      shared = true;
      emit("share_copy");
    }
  };
}

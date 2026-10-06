export class WinContextError extends Error {
  constructor(message) {
    super(message);
    this.name = "WinContextError";
  }
}

export function createWinContext() {
  return { selfDrawn: false, fourthTile: false, gang: false, lastTile: false };
}

export function normalizeWinContext(context, change) {
  const next = { ...context, ...change };
  if (change.gang === true && !next.selfDrawn) {
    next.lastTile = false;
    next.fourthTile = false;
  }
  if ((change.lastTile === true || change.fourthTile === true) && next.gang && !next.selfDrawn) next.gang = false;
  if (change.selfDrawn === false && next.gang) {
    next.lastTile = false;
    next.fourthTile = false;
  }
  return next;
}

export function winContextFlags(context) {
  return {
    selfDrawn: context.selfDrawn,
    fourthTile: context.fourthTile,
    lastTile: context.lastTile,
    gang: context.gang,
  };
}

export function encodeWinContext(round, seat, context) {
  const flags = winContextFlags(context);
  return `${round}${seat}${flags.selfDrawn ? 1 : 0}${flags.fourthTile ? 1 : 0}${flags.lastTile ? 1 : 0}${flags.gang ? 1 : 0}`;
}

export function lastTileLabel(context) {
  if (context.selfDrawn && context.gang) return "妙手回春（可与杠上开花同计）";
  if (context.selfDrawn) return "妙手回春（海底自摸）";
  return "海底捞月（末张点和）";
}

export function gangLabel(context) {
  return context.selfDrawn ? "杠上开花" : "抢杠和";
}

export function validateWinContextSetup({ context, melds }) {
  if (context.gang && !context.selfDrawn && (context.lastTile || context.fourthTile)) {
    throw new WinContextError("抢杠和不与海底捞月、妙手回春或和绝张同时成立");
  }
  if (context.gang && context.selfDrawn && !melds.some((meld) => meld.type === "mingGang" || meld.type === "anGang")) {
    throw new WinContextError("杠上开花要求先在牌面中录入一副明杠或暗杠");
  }
}

export function validateWinContext({ context, hand, melds }) {
  validateWinContextSetup({ context, melds });
  const winning = hand.at(-1);
  if (!winning) throw new WinContextError("请先选择和牌");
  const concealedBeforeWin = hand.slice(0, -1);
  if (context.fourthTile && concealedBeforeWin.includes(winning)) {
    throw new WinContextError("这张牌在立牌中已经存在，不能再作为牌池与副露外的第 4 张计和绝张；单钓将等和法不会计和绝张");
  }
  if (context.gang && !context.selfDrawn) {
    const ownTilesBeforeWin = [...concealedBeforeWin, ...melds.flatMap((meld) => meld.tiles)];
    if (ownTilesBeforeWin.includes(winning)) {
      throw new WinContextError("抢杠的牌已由他家明刻占用三张，你的牌中不能另有同张；单钓将、七对等此类和法不会成立抢杠和");
    }
  }
}

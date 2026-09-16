(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/gb-mahjong-js/lib/core/constants.js
  var require_constants = __commonJS({
    "node_modules/gb-mahjong-js/lib/core/constants.js"(exports, module) {
      "use strict";
      var TILE_INVALID = 0;
      var TILE_1m = 1;
      var TILE_2m = 2;
      var TILE_3m = 3;
      var TILE_4m = 4;
      var TILE_5m = 5;
      var TILE_6m = 6;
      var TILE_7m = 7;
      var TILE_8m = 8;
      var TILE_9m = 9;
      var TILE_1s = 10;
      var TILE_2s = 11;
      var TILE_3s = 12;
      var TILE_4s = 13;
      var TILE_5s = 14;
      var TILE_6s = 15;
      var TILE_7s = 16;
      var TILE_8s = 17;
      var TILE_9s = 18;
      var TILE_1p = 19;
      var TILE_2p = 20;
      var TILE_3p = 21;
      var TILE_4p = 22;
      var TILE_5p = 23;
      var TILE_6p = 24;
      var TILE_7p = 25;
      var TILE_8p = 26;
      var TILE_9p = 27;
      var TILE_E = 28;
      var TILE_S = 29;
      var TILE_W = 30;
      var TILE_N = 31;
      var TILE_C = 32;
      var TILE_F = 33;
      var TILE_P = 34;
      var TILE_MEI = 35;
      var TILE_LAN = 36;
      var TILE_ZHU = 37;
      var TILE_JU = 38;
      var TILE_CHU = 39;
      var TILE_XIA = 40;
      var TILE_QIU = 41;
      var TILE_DONG = 42;
      var TILE_BAIDA = 43;
      var TILE_MAJIANG = 44;
      var TILE_SIZE = 43;
      var SUIT_INVALID = 0;
      var SUIT_WAN = 1;
      var SUIT_TIAO = 2;
      var SUIT_BING = 3;
      var SUIT_HUA = 4;
      var SUIT_FENG = 5;
      var SUIT_JIAN = 6;
      var RANK_INVALID = 0;
      var RANK_1 = 1;
      var RANK_2 = 2;
      var RANK_3 = 3;
      var RANK_4 = 4;
      var RANK_5 = 5;
      var RANK_6 = 6;
      var RANK_7 = 7;
      var RANK_8 = 8;
      var RANK_9 = 9;
      var TILE_CHAR_INVALID = " ";
      var TILE_CHAR_WAN = "m";
      var TILE_CHAR_TIAO = "s";
      var TILE_CHAR_BING = "p";
      var TILE_CHAR_E = "E";
      var TILE_CHAR_S = "S";
      var TILE_CHAR_W = "W";
      var TILE_CHAR_N = "N";
      var TILE_CHAR_C = "C";
      var TILE_CHAR_F = "F";
      var TILE_CHAR_P = "P";
      var TILE_CHAR_MEI = "a";
      var TILE_CHAR_LAN = "b";
      var TILE_CHAR_ZHU = "c";
      var TILE_CHAR_JU = "d";
      var TILE_CHAR_CHU = "e";
      var TILE_CHAR_XIA = "f";
      var TILE_CHAR_QIU = "g";
      var TILE_CHAR_DONG = "h";
      var PACK_TYPE_INVALID = 0;
      var PACK_TYPE_SHUNZI = 1;
      var PACK_TYPE_KEZI = 2;
      var PACK_TYPE_GANG = 3;
      var PACK_TYPE_JIANG = 4;
      var PACK_TYPE_ZUHELONG = 5;
      var BITMAP = (tile) => 1n << BigInt(tile);
      var TILES_UTF8 = [
        "",
        "🀇",
        "🀈",
        "🀉",
        "🀊",
        "🀋",
        "🀌",
        "🀍",
        "🀎",
        "🀏",
        "🀐",
        "🀑",
        "🀒",
        "🀓",
        "🀔",
        "🀕",
        "🀖",
        "🀗",
        "🀘",
        "🀙",
        "🀚",
        "🀛",
        "🀜",
        "🀝",
        "🀞",
        "🀟",
        "🀠",
        "🀡",
        "🀀",
        "🀁",
        "🀂",
        "🀃",
        "🀄",
        "🀅",
        "🀆",
        "🀢",
        "🀣",
        "🀤",
        "🀥",
        "🀦",
        "🀧",
        "🀨",
        "🀩",
        "🀪",
        "🀫"
      ];
      var TILES_SUIT = [
        SUIT_INVALID,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_WAN,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_TIAO,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_BING,
        SUIT_FENG,
        SUIT_FENG,
        SUIT_FENG,
        SUIT_FENG,
        SUIT_JIAN,
        SUIT_JIAN,
        SUIT_JIAN,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_HUA,
        SUIT_INVALID,
        SUIT_INVALID
      ];
      var TILES_RANK = [
        RANK_INVALID,
        RANK_1,
        RANK_2,
        RANK_3,
        RANK_4,
        RANK_5,
        RANK_6,
        RANK_7,
        RANK_8,
        RANK_9,
        RANK_1,
        RANK_2,
        RANK_3,
        RANK_4,
        RANK_5,
        RANK_6,
        RANK_7,
        RANK_8,
        RANK_9,
        RANK_1,
        RANK_2,
        RANK_3,
        RANK_4,
        RANK_5,
        RANK_6,
        RANK_7,
        RANK_8,
        RANK_9,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID,
        RANK_INVALID
      ];
      var TILES_SUIT_CHAR = [
        TILE_CHAR_INVALID,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_WAN,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_TIAO,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_BING,
        TILE_CHAR_E,
        TILE_CHAR_S,
        TILE_CHAR_W,
        TILE_CHAR_N,
        TILE_CHAR_C,
        TILE_CHAR_F,
        TILE_CHAR_P,
        TILE_CHAR_MEI,
        TILE_CHAR_LAN,
        TILE_CHAR_ZHU,
        TILE_CHAR_JU,
        TILE_CHAR_CHU,
        TILE_CHAR_XIA,
        TILE_CHAR_QIU,
        TILE_CHAR_DONG,
        TILE_CHAR_INVALID,
        TILE_CHAR_INVALID
      ];
      var TILE_TYPE_BITMAP_WAN = BITMAP(TILE_1m) | BITMAP(TILE_2m) | BITMAP(TILE_3m) | BITMAP(TILE_4m) | BITMAP(TILE_5m) | BITMAP(TILE_6m) | BITMAP(TILE_7m) | BITMAP(TILE_8m) | BITMAP(TILE_9m);
      var TILE_TYPE_BITMAP_TIAO = BITMAP(TILE_1s) | BITMAP(TILE_2s) | BITMAP(TILE_3s) | BITMAP(TILE_4s) | BITMAP(TILE_5s) | BITMAP(TILE_6s) | BITMAP(TILE_7s) | BITMAP(TILE_8s) | BITMAP(TILE_9s);
      var TILE_TYPE_BITMAP_BING = BITMAP(TILE_1p) | BITMAP(TILE_2p) | BITMAP(TILE_3p) | BITMAP(TILE_4p) | BITMAP(TILE_5p) | BITMAP(TILE_6p) | BITMAP(TILE_7p) | BITMAP(TILE_8p) | BITMAP(TILE_9p);
      var TILE_TYPE_BITMAP_SHU = TILE_TYPE_BITMAP_WAN | TILE_TYPE_BITMAP_TIAO | TILE_TYPE_BITMAP_BING;
      var TILE_TYPE_BITMAP_FENG = BITMAP(TILE_E) | BITMAP(TILE_S) | BITMAP(TILE_W) | BITMAP(TILE_N);
      var TILE_TYPE_BITMAP_JIAN = BITMAP(TILE_C) | BITMAP(TILE_F) | BITMAP(TILE_P);
      var TILE_TYPE_BITMAP_ZI = TILE_TYPE_BITMAP_FENG | TILE_TYPE_BITMAP_JIAN;
      var TILE_TYPE_BITMAP_MEANINGFUL = TILE_TYPE_BITMAP_SHU | TILE_TYPE_BITMAP_ZI;
      var TILE_TYPE_BITMAP_YAOJIU = TILE_TYPE_BITMAP_ZI | BITMAP(TILE_1m) | BITMAP(TILE_9m) | BITMAP(TILE_1s) | BITMAP(TILE_9s) | BITMAP(TILE_1p) | BITMAP(TILE_9p);
      var TILE_TYPE_BITMAP_LV = BITMAP(TILE_2s) | BITMAP(TILE_3s) | BITMAP(TILE_4s) | BITMAP(TILE_6s) | BITMAP(TILE_8s) | BITMAP(TILE_F);
      var TILE_TYPE_BITMAP_QUANDA = BITMAP(TILE_7m) | BITMAP(TILE_8m) | BITMAP(TILE_9m) | BITMAP(TILE_7s) | BITMAP(TILE_8s) | BITMAP(TILE_9s) | BITMAP(TILE_7p) | BITMAP(TILE_8p) | BITMAP(TILE_9p);
      var TILE_TYPE_BITMAP_QUANZHONG = BITMAP(TILE_4m) | BITMAP(TILE_5m) | BITMAP(TILE_6m) | BITMAP(TILE_4s) | BITMAP(TILE_5s) | BITMAP(TILE_6s) | BITMAP(TILE_4p) | BITMAP(TILE_5p) | BITMAP(TILE_6p);
      var TILE_TYPE_BITMAP_QUANXIAO = BITMAP(TILE_1m) | BITMAP(TILE_2m) | BITMAP(TILE_3m) | BITMAP(TILE_1s) | BITMAP(TILE_2s) | BITMAP(TILE_3s) | BITMAP(TILE_1p) | BITMAP(TILE_2p) | BITMAP(TILE_3p);
      var TILE_TYPE_BITMAP_DAYUWU = TILE_TYPE_BITMAP_QUANDA | BITMAP(TILE_6m) | BITMAP(TILE_6s) | BITMAP(TILE_6p);
      var TILE_TYPE_BITMAP_XIAOYUWU = TILE_TYPE_BITMAP_QUANXIAO | BITMAP(TILE_4m) | BITMAP(TILE_4s) | BITMAP(TILE_4p);
      var TILE_TYPE_BITMAP_TUIBUDAO = BITMAP(TILE_2s) | BITMAP(TILE_4s) | BITMAP(TILE_5s) | BITMAP(TILE_6s) | BITMAP(TILE_8s) | BITMAP(TILE_9s) | BITMAP(TILE_1p) | BITMAP(TILE_2p) | BITMAP(TILE_3p) | BITMAP(TILE_4p) | BITMAP(TILE_5p) | BITMAP(TILE_8p) | BITMAP(TILE_9p) | BITMAP(TILE_P);
      var ZuhelongBitmap = [
        0n,
        BITMAP(TILE_1m) | BITMAP(TILE_4m) | BITMAP(TILE_7m) | BITMAP(TILE_2s) | BITMAP(TILE_5s) | BITMAP(TILE_8s) | BITMAP(TILE_3p) | BITMAP(TILE_6p) | BITMAP(TILE_9p),
        BITMAP(TILE_1m) | BITMAP(TILE_4m) | BITMAP(TILE_7m) | BITMAP(TILE_3s) | BITMAP(TILE_6s) | BITMAP(TILE_9s) | BITMAP(TILE_2p) | BITMAP(TILE_5p) | BITMAP(TILE_8p),
        BITMAP(TILE_2m) | BITMAP(TILE_5m) | BITMAP(TILE_8m) | BITMAP(TILE_1s) | BITMAP(TILE_4s) | BITMAP(TILE_7s) | BITMAP(TILE_3p) | BITMAP(TILE_6p) | BITMAP(TILE_9p),
        BITMAP(TILE_2m) | BITMAP(TILE_5m) | BITMAP(TILE_8m) | BITMAP(TILE_3s) | BITMAP(TILE_6s) | BITMAP(TILE_9s) | BITMAP(TILE_1p) | BITMAP(TILE_4p) | BITMAP(TILE_7p),
        BITMAP(TILE_3m) | BITMAP(TILE_6m) | BITMAP(TILE_9m) | BITMAP(TILE_1s) | BITMAP(TILE_4s) | BITMAP(TILE_7s) | BITMAP(TILE_2p) | BITMAP(TILE_5p) | BITMAP(TILE_8p),
        BITMAP(TILE_3m) | BITMAP(TILE_6m) | BITMAP(TILE_9m) | BITMAP(TILE_2s) | BITMAP(TILE_5s) | BITMAP(TILE_8s) | BITMAP(TILE_1p) | BITMAP(TILE_4p) | BITMAP(TILE_7p)
      ];
      var FAN_SCORE = [
        0,
        88,
        88,
        88,
        88,
        88,
        88,
        88,
        64,
        64,
        64,
        64,
        64,
        64,
        48,
        48,
        32,
        32,
        32,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        16,
        16,
        16,
        16,
        16,
        16,
        12,
        12,
        12,
        12,
        12,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        4,
        4,
        4,
        4,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        5
      ];
      var FAN_NAME = [
        "无效番种",
        "大四喜",
        "大三元",
        "绿一色",
        "九莲宝灯",
        "四杠",
        "连七对",
        "十三幺",
        "清幺九",
        "小四喜",
        "小三元",
        "字一色",
        "四暗刻",
        "一色双龙会",
        "一色四同顺",
        "一色四节高",
        "一色四步高",
        "三杠",
        "混幺九",
        "七对",
        "七星不靠",
        "全双刻",
        "清一色",
        "一色三同顺",
        "一色三节高",
        "全大",
        "全中",
        "全小",
        "清龙",
        "三色双龙会",
        "一色三步高",
        "全带五",
        "三同刻",
        "三暗刻",
        "全不靠",
        "组合龙",
        "大于五",
        "小于五",
        "三风刻",
        "花龙",
        "推不倒",
        "三色三同顺",
        "三色三节高",
        "无番和",
        "妙手回春",
        "海底捞月",
        "杠上开花",
        "抢杠和",
        "碰碰和",
        "混一色",
        "三色三步高",
        "五门齐",
        "全求人",
        "双暗杠",
        "双箭刻",
        "全带幺",
        "不求人",
        "双明杠",
        "和绝张",
        "箭刻",
        "圈风刻",
        "门风刻",
        "门前清",
        "平和",
        "四归一",
        "双同刻",
        "双暗刻",
        "暗杠",
        "断幺",
        "一般高",
        "喜相逢",
        "连六",
        "老少副",
        "幺九刻",
        "明杠",
        "缺一门",
        "无字",
        "边张",
        "坎张",
        "单钓将",
        "自摸",
        "花牌",
        "明暗杠"
      ];
      var fanNames = [
        "FAN_INVALID",
        "FAN_DASIXI",
        "FAN_DASANYUAN",
        "FAN_LVYISE",
        "FAN_JIULIANBAODENG",
        "FAN_SIGANG",
        "FAN_LIANQIDUI",
        "FAN_SHISANYAO",
        "FAN_QINGYAOJIU",
        "FAN_XIAOSIXI",
        "FAN_XIAOSANYUAN",
        "FAN_ZIYISE",
        "FAN_SIANKE",
        "FAN_YISESHUANGLONGHUI",
        "FAN_YISESITONGSHUN",
        "FAN_YISESIJIEGAO",
        "FAN_YISESIBUGAO",
        "FAN_SANGANG",
        "FAN_HUNYAOJIU",
        "FAN_QIDUI",
        "FAN_QIXINGBUKAO",
        "FAN_QUANSHUANGKE",
        "FAN_QINGYISE",
        "FAN_YISESANTONGSHUN",
        "FAN_YISESANJIEGAO",
        "FAN_QUANDA",
        "FAN_QUANZHONG",
        "FAN_QUANXIAO",
        "FAN_QINGLONG",
        "FAN_SANSESHUANGLONGHUI",
        "FAN_YISESANBUGAO",
        "FAN_QUANDAIWU",
        "FAN_SANTONGKE",
        "FAN_SANANKE",
        "FAN_QUANBUKAO",
        "FAN_ZUHELONG",
        "FAN_DAYUWU",
        "FAN_XIAOYUWU",
        "FAN_SANFENGKE",
        "FAN_HUALONG",
        "FAN_TUIBUDAO",
        "FAN_SANSESANTONGSHUN",
        "FAN_SANSESANJIEGAO",
        "FAN_WUFANHU",
        "FAN_MIAOSHOUHUICHUN",
        "FAN_HAIDILAOYUE",
        "FAN_GANGSHANGKAIHUA",
        "FAN_QIANGGANGHU",
        "FAN_PENGPENGHU",
        "FAN_HUNYISE",
        "FAN_SANSESANBUGAO",
        "FAN_WUMENQI",
        "FAN_QUANQIUREN",
        "FAN_SHUANGANGANG",
        "FAN_SHUANGJIANKE",
        "FAN_QUANDAIYAO",
        "FAN_BUQIUREN",
        "FAN_SHUANGMINGGANG",
        "FAN_HUJUEZHANG",
        "FAN_JIANKE",
        "FAN_QUANFENGKE",
        "FAN_MENFENGKE",
        "FAN_MENQIANQING",
        "FAN_PINGHU",
        "FAN_SIGUIYI",
        "FAN_SHUANGTONGKE",
        "FAN_SHUANGANKE",
        "FAN_ANGANG",
        "FAN_DUANYAO",
        "FAN_YIBANGAO",
        "FAN_XIXIANGFENG",
        "FAN_LIANLIU",
        "FAN_LAOSHAOFU",
        "FAN_YAOJIUKE",
        "FAN_MINGGANG",
        "FAN_QUEYIMEN",
        "FAN_WUZI",
        "FAN_BIANZHANG",
        "FAN_KANZHANG",
        "FAN_DANDIAOJIANG",
        "FAN_ZIMO",
        "FAN_HUAPAI",
        "FAN_MINGANGANG",
        "FAN_SIZE"
      ];
      var exported = {
        TILE_INVALID,
        TILE_1m,
        TILE_2m,
        TILE_3m,
        TILE_4m,
        TILE_5m,
        TILE_6m,
        TILE_7m,
        TILE_8m,
        TILE_9m,
        TILE_1s,
        TILE_2s,
        TILE_3s,
        TILE_4s,
        TILE_5s,
        TILE_6s,
        TILE_7s,
        TILE_8s,
        TILE_9s,
        TILE_1p,
        TILE_2p,
        TILE_3p,
        TILE_4p,
        TILE_5p,
        TILE_6p,
        TILE_7p,
        TILE_8p,
        TILE_9p,
        TILE_E,
        TILE_S,
        TILE_W,
        TILE_N,
        TILE_C,
        TILE_F,
        TILE_P,
        TILE_MEI,
        TILE_LAN,
        TILE_ZHU,
        TILE_JU,
        TILE_CHU,
        TILE_XIA,
        TILE_QIU,
        TILE_DONG,
        TILE_BAIDA,
        TILE_MAJIANG,
        TILE_SIZE,
        SUIT_INVALID,
        SUIT_WAN,
        SUIT_TIAO,
        SUIT_BING,
        SUIT_HUA,
        SUIT_FENG,
        SUIT_JIAN,
        RANK_INVALID,
        RANK_1,
        RANK_2,
        RANK_3,
        RANK_4,
        RANK_5,
        RANK_6,
        RANK_7,
        RANK_8,
        RANK_9,
        TILE_CHAR_INVALID,
        TILE_CHAR_WAN,
        TILE_CHAR_TIAO,
        TILE_CHAR_BING,
        TILE_CHAR_E,
        TILE_CHAR_S,
        TILE_CHAR_W,
        TILE_CHAR_N,
        TILE_CHAR_C,
        TILE_CHAR_F,
        TILE_CHAR_P,
        TILE_CHAR_MEI,
        TILE_CHAR_LAN,
        TILE_CHAR_ZHU,
        TILE_CHAR_JU,
        TILE_CHAR_CHU,
        TILE_CHAR_XIA,
        TILE_CHAR_QIU,
        TILE_CHAR_DONG,
        PACK_TYPE_INVALID,
        PACK_TYPE_SHUNZI,
        PACK_TYPE_KEZI,
        PACK_TYPE_GANG,
        PACK_TYPE_JIANG,
        PACK_TYPE_ZUHELONG,
        BITMAP,
        TILES_UTF8,
        TILES_SUIT,
        TILES_RANK,
        TILES_SUIT_CHAR,
        TILE_TYPE_BITMAP_WAN,
        TILE_TYPE_BITMAP_TIAO,
        TILE_TYPE_BITMAP_BING,
        TILE_TYPE_BITMAP_SHU,
        TILE_TYPE_BITMAP_FENG,
        TILE_TYPE_BITMAP_JIAN,
        TILE_TYPE_BITMAP_ZI,
        TILE_TYPE_BITMAP_MEANINGFUL,
        TILE_TYPE_BITMAP_YAOJIU,
        TILE_TYPE_BITMAP_LV,
        TILE_TYPE_BITMAP_QUANDA,
        TILE_TYPE_BITMAP_QUANZHONG,
        TILE_TYPE_BITMAP_QUANXIAO,
        TILE_TYPE_BITMAP_DAYUWU,
        TILE_TYPE_BITMAP_XIAOYUWU,
        TILE_TYPE_BITMAP_TUIBUDAO,
        ZuhelongBitmap,
        FAN_SCORE,
        FAN_NAME
      };
      fanNames.forEach((name, index) => {
        exported[name] = index;
      });
      module.exports = exported;
    }
  });

  // node_modules/gb-mahjong-js/lib/core/tile.js
  var require_tile = __commonJS({
    "node_modules/gb-mahjong-js/lib/core/tile.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var Tile = class _Tile {
        constructor(tile = constants2.TILE_INVALID, drawflag = 0) {
          this._tile = tile;
          this._drawflag = drawflag;
        }
        assign(tile) {
          this._tile = tile;
          this.ResetDrawflag();
          return this;
        }
        clone() {
          return new _Tile(this._tile, this._drawflag);
        }
        equals(tile) {
          if (tile instanceof _Tile) {
            return this._tile === tile._tile;
          }
          return this._tile === tile;
        }
        Pred() {
          return new _Tile(this._tile - 1);
        }
        Succ() {
          return new _Tile(this._tile + 1);
        }
        GetTileUsingOffset(offset) {
          return new _Tile(this._tile + offset);
        }
        Suit() {
          return constants2.TILES_SUIT[this._tile];
        }
        Rank() {
          return constants2.TILES_RANK[this._tile];
        }
        IsShu() {
          return (this.GetBitmap() & constants2.TILE_TYPE_BITMAP_SHU) === this.GetBitmap();
        }
        IsZi() {
          return (this.GetBitmap() & constants2.TILE_TYPE_BITMAP_ZI) === this.GetBitmap();
        }
        IsFeng() {
          return (this.GetBitmap() & constants2.TILE_TYPE_BITMAP_FENG) === this.GetBitmap();
        }
        IsJian() {
          return (this.GetBitmap() & constants2.TILE_TYPE_BITMAP_JIAN) === this.GetBitmap();
        }
        IsYaojiu() {
          return (this.GetBitmap() & constants2.TILE_TYPE_BITMAP_YAOJIU) === this.GetBitmap();
        }
        IsHua() {
          return this.Suit() === constants2.SUIT_HUA;
        }
        UTF8() {
          return constants2.TILES_UTF8[this._tile];
        }
        RankChar() {
          return String(this.Rank());
        }
        SuitChar() {
          return constants2.TILES_SUIT_CHAR[this._tile];
        }
        TileChar() {
          return this.IsShu() ? this.RankChar() : this.SuitChar();
        }
        SetZimo() {
          this._drawflag = 1;
        }
        SetChonghu() {
          this._drawflag = 2;
        }
        ResetDrawflag() {
          this._drawflag = 0;
        }
        IsZimo() {
          return this._drawflag === 1;
        }
        IsChonghu() {
          return this._drawflag === 2;
        }
        GetId() {
          return this._tile;
        }
        GetBitmap() {
          return 1n << BigInt(this._tile);
        }
        GetDrawflag() {
          return this._drawflag;
        }
        valueOf() {
          return this._tile;
        }
      };
      module.exports = Tile;
    }
  });

  // node_modules/gb-mahjong-js/lib/core/pack.js
  var require_pack = __commonJS({
    "node_modules/gb-mahjong-js/lib/core/pack.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var Tile = require_tile();
      var Pack = class {
        constructor(type = constants2.PACK_TYPE_INVALID, tile = new Tile(), zuhelongType = 0, offer = 0) {
          this._type = type;
          this._tile = tile;
          this._zuhelong_type = zuhelongType;
          this._offer = offer;
        }
        IsValid() {
          return this._type !== constants2.PACK_TYPE_INVALID;
        }
        GetType() {
          return this._type;
        }
        GetMiddleTile() {
          return this._tile;
        }
        equals(pack) {
          return this._type === pack._type && this._tile.equals(pack._tile);
        }
        GetAllTile() {
          const ret = [];
          switch (this.GetType()) {
            case constants2.PACK_TYPE_SHUNZI:
              ret.push(this._tile.Pred(), this._tile.clone(), this._tile.Succ());
              break;
            case constants2.PACK_TYPE_GANG:
              ret.push(
                this._tile.clone(),
                this._tile.clone(),
                this._tile.clone(),
                this._tile.clone()
              );
              break;
            case constants2.PACK_TYPE_KEZI:
              ret.push(this._tile.clone(), this._tile.clone(), this._tile.clone());
              break;
            case constants2.PACK_TYPE_JIANG:
              ret.push(this._tile.clone(), this._tile.clone());
              break;
            case constants2.PACK_TYPE_ZUHELONG:
              for (let index = constants2.TILE_1m; index <= constants2.TILE_9p; index += 1) {
                if ((constants2.BITMAP(index) & this.GetZuhelongBitmap()) !== 0n) {
                  ret.push(new Tile(index));
                }
              }
              break;
            default:
              break;
          }
          return ret;
        }
        GetZuhelongType() {
          return this._zuhelong_type;
        }
        GetZuhelongBitmap() {
          return constants2.ZuhelongBitmap[this._zuhelong_type];
        }
        GetOffer() {
          return this._offer;
        }
        IsAnshou() {
          return this._offer === 0 || this._offer === -1;
        }
        HaveLastTile() {
          return this._offer < 0;
        }
        IsShunzi() {
          return this._type === constants2.PACK_TYPE_SHUNZI;
        }
        IsKezi() {
          return this._type === constants2.PACK_TYPE_KEZI;
        }
        IsGang() {
          return this._type === constants2.PACK_TYPE_GANG;
        }
        IsKeGang() {
          return this.IsKezi() || this.IsGang();
        }
        IsJiang() {
          return this._type === constants2.PACK_TYPE_JIANG;
        }
        IsZuhelong() {
          return this._type === constants2.PACK_TYPE_ZUHELONG;
        }
        SetOffer(offer) {
          this._offer = offer;
        }
        SetType(type) {
          this._type = type;
        }
      };
      module.exports = Pack;
    }
  });

  // node_modules/gb-mahjong-js/lib/model/win-context.js
  var require_win_context = __commonJS({
    "node_modules/gb-mahjong-js/lib/model/win-context.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var WinContext = class {
        constructor(overrides = {}) {
          this.quanfeng = overrides.quanfeng ?? constants2.TILE_E;
          this.menfeng = overrides.menfeng ?? constants2.TILE_E;
          this.zimo = overrides.zimo ?? false;
          this.juezhang = overrides.juezhang ?? false;
          this.haidi = overrides.haidi ?? false;
          this.gang = overrides.gang ?? false;
        }
      };
      module.exports = WinContext;
    }
  });

  // node_modules/gb-mahjong-js/lib/model/hand.js
  var require_hand = __commonJS({
    "node_modules/gb-mahjong-js/lib/model/hand.js"(exports, module) {
      "use strict";
      var WinContext = require_win_context();
      var Hand = class {
        constructor(overrides = {}) {
          this.tiles = overrides.tiles ?? [];
          this.packs = overrides.packs ?? [];
          this.winningTile = overrides.winningTile ?? null;
          this.flowers = overrides.flowers ?? [];
          this.context = overrides.context instanceof WinContext ? overrides.context : new WinContext(overrides.context);
          this.source = overrides.source ?? null;
        }
      };
      module.exports = Hand;
    }
  });

  // node_modules/gb-mahjong-js/lib/model/fan-result.js
  var require_fan_result = __commonJS({
    "node_modules/gb-mahjong-js/lib/model/fan-result.js"(exports, module) {
      "use strict";
      var FanResult = class {
        constructor(overrides = {}) {
          this.isHu = overrides.isHu ?? false;
          this.totalFan = overrides.totalFan ?? overrides.total ?? 0;
          this.fanIds = overrides.fanIds ?? [];
          this.fans = overrides.fans ?? [];
          this.decomposition = overrides.decomposition ?? null;
        }
        get total() {
          return this.totalFan;
        }
        get packs() {
          return this.decomposition?.packs ?? [];
        }
      };
      module.exports = FanResult;
    }
  });

  // node_modules/gb-mahjong-js/lib/model/decomposition-pack.js
  var require_decomposition_pack = __commonJS({
    "node_modules/gb-mahjong-js/lib/model/decomposition-pack.js"(exports, module) {
      "use strict";
      var DecompositionPack = class {
        constructor(overrides = {}) {
          this.type = overrides.type ?? null;
          this.tile = overrides.tile ?? null;
          this.offer = overrides.offer ?? 0;
          this.zuhelong = overrides.zuhelong ?? overrides.zuhelongType ?? 0;
        }
      };
      module.exports = DecompositionPack;
    }
  });

  // node_modules/gb-mahjong-js/lib/core/handtiles.js
  var require_handtiles = __commonJS({
    "node_modules/gb-mahjong-js/lib/core/handtiles.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var Pack = require_pack();
      var Tile = require_tile();
      var HANDTILES_REGEX = /^(\[([1-9]{3,4}[msp]|[ESWNCFP]{3,4})(,[123567])?\]|([ESWNCFPa-h]|[1-9]+[msp]))+(\|([ESWN]{2}[01]{4})(\|([a-h]{0,8}|[0-8]))?)?$/;
      var compareTiles = (left, right) => left.GetId() - right.GetId();
      var createCountTable = () => Array(constants2.TILE_MAJIANG + 1).fill(0);
      var isDigit = (char) => char >= "0" && char <= "9";
      var isWindOrDragon = (char) => /[ESWNCFP]/.test(char);
      var isSuitChar = (char) => /[msp]/.test(char);
      var isFlowerChar = (char) => char >= constants2.TILE_CHAR_MEI && char <= constants2.TILE_CHAR_DONG;
      var tileIdOf = (tile) => tile instanceof Tile ? tile.GetId() : tile;
      var toTile = (tile) => tile instanceof Tile ? tile.clone() : new Tile(tile);
      var Handtiles = class {
        constructor() {
          this._ClearAndSetDefault();
        }
        FuluBitmap() {
          let bitmap = 0n;
          this.fulu.forEach((pack) => {
            const middleTile = pack.GetMiddleTile();
            switch (pack.GetType()) {
              case constants2.PACK_TYPE_SHUNZI:
                bitmap |= middleTile.GetBitmap();
                bitmap |= middleTile.Pred().GetBitmap();
                bitmap |= middleTile.Succ().GetBitmap();
                break;
              case constants2.PACK_TYPE_KEZI:
              case constants2.PACK_TYPE_GANG:
              case constants2.PACK_TYPE_JIANG:
                bitmap |= middleTile.GetBitmap();
                break;
              default:
                break;
            }
          });
          return bitmap;
        }
        LipaiBitmap() {
          return this.lipai.reduce((bitmap, tile) => bitmap | tile.GetBitmap(), 0n);
        }
        LipaiTileCount(tile) {
          return this.lipai_table[tileIdOf(tile)] || 0;
        }
        FuluTileCount(tile) {
          return this.fulu_table[tileIdOf(tile)] || 0;
        }
        HandTileCount(tile) {
          return this.LipaiTileCount(tile) + this.FuluTileCount(tile);
        }
        HuapaiCount() {
          let count = 0;
          for (let index = constants2.TILE_MEI; index <= constants2.TILE_DONG; index += 1) {
            count += this.huapai_table[index];
          }
          return count;
        }
        HandtilesToString() {
          let result = "";
          this.fulu.forEach((pack) => {
            const middleTile = pack.GetMiddleTile();
            const tiles = pack.GetAllTile();
            result += "[";
            tiles.forEach((tile) => {
              result += tile.TileChar();
            });
            if (middleTile.IsShu()) {
              result += middleTile.SuitChar();
            }
            if (pack.GetOffer()) {
              result += `,${pack.GetOffer()}`;
            }
            result += "]";
          });
          let previousWasNumberedTile = false;
          for (let index = 0; index < this.lipai.length; index += 1) {
            const tile = this.lipai[index];
            if (previousWasNumberedTile) {
              const isFourteenthTile = index + 1 + this.fulu.length * 3 === 14;
              const changedSuit = !tile.IsShu() || tile.Suit() !== this.lipai[index - 1].Suit();
              if (isFourteenthTile || changedSuit) {
                result += this.lipai[index - 1].SuitChar();
              }
            }
            previousWasNumberedTile = tile.IsShu();
            result += tile.TileChar();
          }
          if (previousWasNumberedTile) {
            result += this.GetLastLipai().SuitChar();
          }
          result += "|";
          result += new Tile(this.GetQuanfeng()).TileChar();
          result += new Tile(this.GetMenfeng()).TileChar();
          result += String(this.IsZimo());
          result += String(this.IsJuezhang());
          result += String(this.IsHaidi());
          result += String(this.IsGang());
          result += "|";
          this.huapai.forEach((tile) => {
            result += tile.TileChar();
          });
          return result;
        }
        StringToHandtiles(input) {
          const source = input.replace(/ /g, "");
          if (!HANDTILES_REGEX.test(source)) {
            return -1;
          }
          this._ClearAndSetDefault();
          const charMap = {
            [constants2.TILE_CHAR_WAN]: constants2.TILE_1m,
            [constants2.TILE_CHAR_TIAO]: constants2.TILE_1s,
            [constants2.TILE_CHAR_BING]: constants2.TILE_1p,
            [constants2.TILE_CHAR_E]: constants2.TILE_E,
            [constants2.TILE_CHAR_S]: constants2.TILE_S,
            [constants2.TILE_CHAR_W]: constants2.TILE_W,
            [constants2.TILE_CHAR_N]: constants2.TILE_N,
            [constants2.TILE_CHAR_C]: constants2.TILE_C,
            [constants2.TILE_CHAR_F]: constants2.TILE_F,
            [constants2.TILE_CHAR_P]: constants2.TILE_P,
            [constants2.TILE_CHAR_MEI]: constants2.TILE_MEI
          };
          let part = 0;
          let is_fulu = false;
          let handle_offer = false;
          let offer = 0;
          let nums = "";
          let chars = "";
          let char_suit = "";
          for (const char of source) {
            if (char === "[") {
              is_fulu = true;
              continue;
            }
            if (char === "]") {
              const isChars = nums.length === 0;
              const tileCode = isChars ? charMap[chars[1]] : charMap[char_suit] - 1 + Number(nums[1]);
              const tiles = isChars ? chars : nums;
              const pack = new Pack(constants2.PACK_TYPE_INVALID, new Tile(tileCode));
              if (tiles.length === 3) {
                if (!handle_offer) {
                  offer = 1;
                }
                if (offer > 3) {
                  return -2;
                }
                if (!isChars && tiles[1] === String.fromCharCode(tiles.charCodeAt(0) + 1) && tiles[1] === String.fromCharCode(tiles.charCodeAt(2) - 1)) {
                  pack.SetType(constants2.PACK_TYPE_SHUNZI);
                } else if (tiles[1] === tiles[0] && tiles[1] === tiles[2]) {
                  pack.SetType(constants2.PACK_TYPE_KEZI);
                } else {
                  return -3;
                }
              } else if (tiles.length === 4) {
                if (!handle_offer) {
                  offer = 0;
                }
                if (tiles[1] === tiles[0] && tiles[1] === tiles[2] && tiles[1] === tiles[3]) {
                  pack.SetType(constants2.PACK_TYPE_GANG);
                } else {
                  return -4;
                }
              }
              pack.SetOffer(offer);
              this.fulu.push(pack);
              is_fulu = false;
              handle_offer = false;
              offer = 0;
              nums = "";
              chars = "";
              char_suit = "";
              continue;
            }
            if (char === ",") {
              handle_offer = true;
              continue;
            }
            if (isDigit(char)) {
              if (part === 0) {
                if (is_fulu) {
                  if (!handle_offer) {
                    nums += char;
                  } else {
                    offer = Number(char);
                  }
                } else {
                  nums += char;
                }
              } else if (part === 1) {
                nums += char;
              } else if (part === 2) {
                for (let index = 0; index < Number(char); index += 1) {
                  this.huapai.push(
                    new Tile(charMap[constants2.TILE_CHAR_MEI] + index)
                  );
                }
              }
              continue;
            }
            if (isWindOrDragon(char)) {
              if (part === 0) {
                if (is_fulu) {
                  chars += char;
                  char_suit = "z";
                } else {
                  this.lipai.push(new Tile(charMap[char]));
                }
              } else if (part === 1) {
                chars += char;
              }
              continue;
            }
            if (isSuitChar(char)) {
              if (is_fulu) {
                char_suit = char;
              } else {
                for (const num of nums) {
                  this.lipai.push(new Tile(charMap[char] - 1 + Number(num)));
                }
                nums = "";
              }
              continue;
            }
            if (char === "|") {
              part += 1;
              continue;
            }
            if (isFlowerChar(char)) {
              const tile = new Tile(
                charMap[constants2.TILE_CHAR_MEI] + char.charCodeAt(0) - constants2.TILE_CHAR_MEI.charCodeAt(0)
              );
              if (part === 0) {
                this.lipai.push(tile);
              } else if (part === 2) {
                this.huapai.push(tile);
              }
              continue;
            }
            return -999;
          }
          if (part >= 1) {
            this.SetQuanfeng(charMap[chars[0]]);
            this.SetMenfeng(charMap[chars[1]]);
            this.SetZimo(Number(nums[0]));
            this.SetJuezhang(Number(nums[1]));
            this.SetHaidi(Number(nums[2]));
            this.SetGang(Number(nums[3]));
          }
          if (this.fulu.length * 3 + this.lipai.length === 13) {
            this.lipai.push(new Tile(constants2.TILE_INVALID));
          } else if (this.fulu.length * 3 + this.lipai.length !== 14) {
            return -5;
          }
          if (this._GenerateTable()) {
            return -6;
          }
          if (this.IsZimo()) {
            this.LastLipai().SetZimo();
          } else {
            this.LastLipai().SetChonghu();
          }
          if (this.IsGang()) {
            if (this.IsZimo()) {
              if (!this.fulu.some((pack) => pack.IsGang())) {
                return -7;
              }
            } else if (this.IsHaidi() || this.HandTileCount(this.GetLastLipai()) > 1) {
              return -7;
            }
          }
          if (this.IsJuezhang() && this.LipaiTileCount(this.GetLastLipai()) > 1) {
            return -7;
          }
          this.SortLipaiWithoutLastOne();
          return 0;
        }
        DrawTile(tile) {
          this.SetLastLipai(tile);
          this.LastLipai().SetZimo();
        }
        SetTile(tile) {
          this.SetLastLipai(tile);
          this.LastLipai().SetChonghu();
        }
        DiscardTile() {
          const tile = new Tile(this.GetLastLipai().GetId());
          this.SetLastLipai(constants2.TILE_INVALID);
          return tile;
        }
        SortLipaiWithoutLastOne() {
          if (this.lipai.length <= 1) {
            return;
          }
          const last = this.lipai[this.lipai.length - 1];
          const sorted = this.lipai.slice(0, -1).sort(compareTiles);
          this.lipai = [...sorted, last];
        }
        SortLipaiAll() {
          this.lipai.sort(compareTiles);
        }
        GetQuanfeng() {
          return this._quanfeng;
        }
        GetMenfeng() {
          return this._menfeng;
        }
        IsZimo() {
          return this._zimo;
        }
        IsJuezhang() {
          return this._juezhang;
        }
        IsHaidi() {
          return this._haidi;
        }
        IsGang() {
          return this._gang;
        }
        SetQuanfeng(value) {
          this._quanfeng = value;
        }
        SetMenfeng(value) {
          this._menfeng = value;
        }
        SetZimo(value) {
          this._zimo = value;
        }
        SetJuezhang(value) {
          this._juezhang = value;
        }
        SetHaidi(value) {
          this._haidi = value;
        }
        SetGang(value) {
          this._gang = value;
        }
        IsMenqing() {
          return this.fulu.every((pack) => pack.IsAnshou());
        }
        IsTotallyFulu() {
          return this.fulu.length === 4 && this.fulu.every((pack) => !pack.IsAnshou());
        }
        NoFulu() {
          return this.fulu.length === 0;
        }
        SetLastLipai(tile) {
          const nextTile = toTile(tile);
          if (this.lipai.length === 0) {
            this.lipai.push(nextTile);
            this.lipai_table[nextTile.GetId()] += 1;
            return;
          }
          const current = this.LastLipai();
          this.lipai_table[current.GetId()] -= 1;
          this.lipai[this.lipai.length - 1] = nextTile;
          this.lipai_table[nextTile.GetId()] += 1;
        }
        LastLipai() {
          return this.lipai[this.lipai.length - 1];
        }
        GetLastLipai() {
          return this.LastLipai();
        }
        HasWinningTile() {
          const lastTile = this.GetLastLipai();
          return Boolean(lastTile) && lastTile.GetId() !== constants2.TILE_INVALID;
        }
        _GenerateTable() {
          this.fulu_table.fill(0);
          this.lipai_table.fill(0);
          this.huapai_table.fill(0);
          this.fulu.forEach((pack) => {
            pack.GetAllTile().forEach((tile) => {
              this.fulu_table[tile.GetId()] += 1;
            });
          });
          this.lipai.forEach((tile) => {
            this.lipai_table[tile.GetId()] += 1;
          });
          this.huapai.forEach((tile) => {
            this.huapai_table[tile.GetId()] += 1;
          });
          for (let index = constants2.TILE_1m; index < constants2.TILE_SIZE; index += 1) {
            if (this.fulu_table[index] + this.lipai_table[index] > 4) {
              return -1;
            }
          }
          for (let index = constants2.TILE_MEI; index <= constants2.TILE_DONG; index += 1) {
            if (this.lipai_table[index] + this.huapai_table[index] > 1) {
              return -1;
            }
          }
          return 0;
        }
        _ClearAndSetDefault() {
          this.fulu = [];
          this.lipai = [];
          this.huapai = [];
          this.fulu_table = createCountTable();
          this.lipai_table = createCountTable();
          this.huapai_table = createCountTable();
          this.SetQuanfeng(constants2.TILE_E);
          this.SetMenfeng(constants2.TILE_E);
          this.SetZimo(0);
          this.SetJuezhang(0);
          this.SetHaidi(0);
          this.SetGang(0);
        }
      };
      module.exports = Handtiles;
    }
  });

  // node_modules/gb-mahjong-js/lib/parser/errors.js
  var require_errors = __commonJS({
    "node_modules/gb-mahjong-js/lib/parser/errors.js"(exports, module) {
      "use strict";
      var HandParseError = class extends Error {
        constructor(code, input) {
          super(`Failed to parse hand: ${code}`);
          this.name = "HandParseError";
          this.code = code;
          this.input = input;
        }
      };
      module.exports = {
        HandParseError
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/parser/legacy-adapter.js
  var require_legacy_adapter = __commonJS({
    "node_modules/gb-mahjong-js/lib/parser/legacy-adapter.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var Handtiles = require_handtiles();
      var Pack = require_pack();
      var Tile = require_tile();
      var Hand = require_hand();
      var WinContext = require_win_context();
      var cloneTile = (tile) => tile instanceof Tile ? tile.clone() : new Tile(tile);
      var clonePack = (pack) => new Pack(
        pack.GetType(),
        cloneTile(pack.GetMiddleTile()),
        pack.GetZuhelongType(),
        pack.GetOffer()
      );
      var inferWinningTile = (legacy) => {
        const lastTile = legacy.GetLastLipai();
        if (!legacy.HasWinningTile() || !lastTile) {
          return null;
        }
        return lastTile.clone();
      };
      var handFromLegacy = (legacy) => new Hand({
        tiles: legacy.lipai.filter((tile) => tile.GetId() !== constants2.TILE_INVALID).map(cloneTile),
        packs: legacy.fulu.map(clonePack),
        winningTile: inferWinningTile(legacy),
        flowers: legacy.huapai.map(cloneTile),
        context: new WinContext({
          quanfeng: legacy.GetQuanfeng(),
          menfeng: legacy.GetMenfeng(),
          zimo: Boolean(legacy.IsZimo()),
          juezhang: Boolean(legacy.IsJuezhang()),
          haidi: Boolean(legacy.IsHaidi()),
          gang: Boolean(legacy.IsGang())
        }),
        source: legacy.HandtilesToString()
      });
      var legacyFromHand = (input) => {
        const hand = input instanceof Hand ? input : new Hand(input);
        const legacy = new Handtiles();
        legacy.fulu = hand.packs.map(clonePack);
        legacy.huapai = hand.flowers.map(cloneTile);
        legacy.lipai = hand.tiles.map(cloneTile);
        if (hand.winningTile === null && legacy.fulu.length * 3 + legacy.lipai.length === 13) {
          legacy.lipai.push(new Tile());
        } else if (hand.winningTile !== null && legacy.fulu.length * 3 + legacy.lipai.length === 13) {
          legacy.lipai.push(cloneTile(hand.winningTile));
        }
        legacy.SetQuanfeng(hand.context.quanfeng);
        legacy.SetMenfeng(hand.context.menfeng);
        legacy.SetZimo(Number(Boolean(hand.context.zimo)));
        legacy.SetJuezhang(Number(Boolean(hand.context.juezhang)));
        legacy.SetHaidi(Number(Boolean(hand.context.haidi)));
        legacy.SetGang(Number(Boolean(hand.context.gang)));
        legacy._GenerateTable();
        return legacy;
      };
      module.exports = {
        handFromLegacy,
        legacyFromHand,
        normalizeHonorSuit: (input) => input.replace(
          /([1-7]+)z/g,
          (_, digits) => digits.split("").map(
            (digit) => ({
              "1": "E",
              "2": "S",
              "3": "W",
              "4": "N",
              "5": "C",
              "6": "F",
              "7": "P"
            })[digit] ?? digit
          ).join("")
        )
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/parser/parse-hand.js
  var require_parse_hand = __commonJS({
    "node_modules/gb-mahjong-js/lib/parser/parse-hand.js"(exports, module) {
      "use strict";
      var Handtiles = require_handtiles();
      var { HandParseError } = require_errors();
      var { handFromLegacy, normalizeHonorSuit } = require_legacy_adapter();
      var parseHand = (input) => {
        const legacy = new Handtiles();
        const normalizedInput = normalizeHonorSuit(String(input ?? ""));
        const code = legacy.StringToHandtiles(normalizedInput);
        if (code !== 0) {
          throw new HandParseError(code, input);
        }
        return handFromLegacy(legacy);
      };
      module.exports = parseHand;
    }
  });

  // node_modules/gb-mahjong-js/lib/api/normalize-hand.js
  var require_normalize_hand = __commonJS({
    "node_modules/gb-mahjong-js/lib/api/normalize-hand.js"(exports, module) {
      "use strict";
      var Hand = require_hand();
      var WinContext = require_win_context();
      var parseHand = require_parse_hand();
      var normalizeContext = (baseContext = {}, overrides = {}) => new WinContext({
        ...baseContext,
        ...overrides
      });
      var normalizeHandInput = (input, overrides = {}) => {
        const hand = typeof input === "string" ? parseHand(input) : input instanceof Hand ? input : new Hand(input);
        return new Hand({
          tiles: hand.tiles.slice(),
          packs: hand.packs.slice(),
          winningTile: hand.winningTile ?? null,
          flowers: hand.flowers.slice(),
          context: normalizeContext(hand.context, overrides),
          source: hand.source ?? (typeof input === "string" ? input : null)
        });
      };
      module.exports = {
        normalizeHandInput
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/decomposition.js
  var require_decomposition = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/decomposition.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var Tile = require_tile();
      var DecompositionPack = require_decomposition_pack();
      var createCountTable = () => Array(constants2.TILE_SIZE + 1).fill(0);
      var cloneExistingPack = (pack) => new DecompositionPack({
        type: pack.GetType(),
        tile: pack.GetMiddleTile().clone(),
        offer: pack.GetOffer()
      });
      var createPack = (type, tile, offer = 0) => new DecompositionPack({
        type,
        tile: new Tile(tile),
        offer
      });
      var isNumberedTile = (tile) => constants2.TILES_SUIT[tile] === constants2.SUIT_WAN || constants2.TILES_SUIT[tile] === constants2.SUIT_TIAO || constants2.TILES_SUIT[tile] === constants2.SUIT_BING;
      var canMakeSequence = (counts, tile) => isNumberedTile(tile) && constants2.TILES_RANK[tile] <= 7 && counts[tile] > 0 && counts[tile + 1] > 0 && counts[tile + 2] > 0 && constants2.TILES_SUIT[tile] === constants2.TILES_SUIT[tile + 1] && constants2.TILES_SUIT[tile] === constants2.TILES_SUIT[tile + 2];
      var findFirstTile = (counts) => {
        for (let tile = constants2.TILE_1m; tile <= constants2.TILE_P; tile += 1) {
          if (counts[tile] > 0) {
            return tile;
          }
        }
        return null;
      };
      var isCompleteHandShape = (hand) => hand.packs.length * 3 + hand.tiles.length === 14;
      var buildCounts = (tiles) => {
        const counts = createCountTable();
        tiles.forEach((tile) => {
          counts[tile.GetId()] += 1;
        });
        return counts;
      };
      var searchMelds = (counts, currentPacks, decompositions) => {
        const tile = findFirstTile(counts);
        if (tile === null) {
          decompositions.push(currentPacks.slice());
          return;
        }
        if (counts[tile] >= 3) {
          counts[tile] -= 3;
          currentPacks.push(createPack(constants2.PACK_TYPE_KEZI, tile));
          searchMelds(counts, currentPacks, decompositions);
          currentPacks.pop();
          counts[tile] += 3;
        }
        if (canMakeSequence(counts, tile)) {
          counts[tile] -= 1;
          counts[tile + 1] -= 1;
          counts[tile + 2] -= 1;
          currentPacks.push(createPack(constants2.PACK_TYPE_SHUNZI, tile + 1));
          searchMelds(counts, currentPacks, decompositions);
          currentPacks.pop();
          counts[tile] += 1;
          counts[tile + 1] += 1;
          counts[tile + 2] += 1;
        }
      };
      var enumerateDecompositions = (hand) => {
        if (!hand || !isCompleteHandShape(hand)) {
          return [];
        }
        const counts = buildCounts(hand.tiles);
        const decompositions = [];
        const fixedPacks = hand.packs.map(cloneExistingPack);
        for (let tile = constants2.TILE_1m; tile <= constants2.TILE_P; tile += 1) {
          if (counts[tile] < 2) {
            continue;
          }
          counts[tile] -= 2;
          searchMelds(
            counts,
            [...fixedPacks, createPack(constants2.PACK_TYPE_JIANG, tile)],
            decompositions
          );
          counts[tile] += 2;
        }
        return decompositions.filter((packs) => packs.length === 5);
      };
      module.exports = {
        enumerateDecompositions
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-optimizer.js
  var require_fan_optimizer = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-optimizer.js"(exports, module) {
      "use strict";
      var FanResult = require_fan_result();
      var DecompositionPack = require_decomposition_pack();
      var tileIdOf = (tile) => tile && typeof tile.GetId === "function" ? tile.GetId() : tile;
      var packSignature = (pack) => [
        pack.type ?? null,
        tileIdOf(pack.tile) ?? null,
        pack.offer ?? 0,
        pack.zuhelong ?? 0
      ].join(":");
      var normalizePack = (pack) => pack instanceof DecompositionPack ? pack : new DecompositionPack(pack);
      var normalizeMatchedPacks = (matchedPacks, remap) => (matchedPacks ?? []).map((index) => remap.get(index)).filter((index) => index !== void 0).sort((left, right) => left - right);
      var createEmptyFanResult = () => new FanResult({
        isHu: false,
        totalFan: 0,
        fanIds: [],
        fans: [],
        decomposition: null
      });
      var canonicalizeCandidate = (candidate) => {
        const packs = (candidate.decomposition?.packs ?? []).map(normalizePack);
        const indexedPacks = packs.map((pack, index) => ({
          index,
          pack,
          signature: packSignature(pack)
        }));
        indexedPacks.sort(
          (left, right) => left.signature.localeCompare(right.signature)
        );
        const remap = new Map(
          indexedPacks.map((entry, normalizedIndex) => [entry.index, normalizedIndex])
        );
        return new FanResult({
          isHu: candidate.isHu ?? true,
          totalFan: candidate.totalFan ?? candidate.total ?? 0,
          fanIds: (candidate.fanIds ?? []).slice().sort((left, right) => left - right),
          fans: (candidate.fans ?? []).map((fan) => ({
            ...fan,
            matchedPacks: normalizeMatchedPacks(fan.matchedPacks, remap)
          })),
          decomposition: candidate.decomposition ? {
            ...candidate.decomposition,
            packs: indexedPacks.map((entry) => entry.pack)
          } : null
        });
      };
      module.exports = {
        canonicalizeCandidate,
        createEmptyFanResult,
        packSignature
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/core/accumulator.js
  var require_accumulator = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/core/accumulator.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var FanAccumulator = class {
        constructor() {
          this.fanTable = /* @__PURE__ */ new Map();
          this.excludedTable = /* @__PURE__ */ new Map();
        }
        addFan(fanId, matchedPacks = []) {
          if (!this.fanTable.has(fanId)) {
            this.fanTable.set(fanId, []);
          }
          this.fanTable.get(fanId).push(matchedPacks.slice().sort((a, b) => a - b));
        }
        excludeFan(fanId, matchedPacks = []) {
          if (!this.excludedTable.has(fanId)) {
            this.excludedTable.set(fanId, []);
          }
          this.excludedTable.get(fanId).push(matchedPacks.slice().sort((a, b) => a - b));
        }
        hasFan(fanId) {
          const entries = this.fanTable.get(fanId);
          return Boolean(entries) && entries.length > 0;
        }
        applyExclusions() {
          for (const [fanId, excludedEntries] of this.excludedTable) {
            const fanEntries = this.fanTable.get(fanId);
            if (!fanEntries || fanEntries.length === 0) continue;
            const used = new Array(excludedEntries.length).fill(false);
            const keep = new Array(fanEntries.length).fill(true);
            for (let j = 0; j < excludedEntries.length; j++) {
              if (used[j]) continue;
              for (let k = 0; k < fanEntries.length; k++) {
                if (!keep[k]) continue;
                if (arraysEqual(fanEntries[k], excludedEntries[j])) {
                  keep[k] = false;
                  used[j] = true;
                  break;
                }
              }
            }
            const remaining = fanEntries.filter((_, i) => keep[i]);
            if (remaining.length === 0) {
              this.fanTable.delete(fanId);
            } else {
              this.fanTable.set(fanId, remaining);
            }
          }
        }
        getTotal() {
          let total = 0;
          for (const [fanId, entries] of this.fanTable) {
            total += entries.length * constants2.FAN_SCORE[fanId];
          }
          return total;
        }
        getFanIds() {
          const ids = [];
          for (const [fanId, entries] of this.fanTable) {
            for (let i = 0; i < entries.length; i++) {
              ids.push(fanId);
            }
          }
          return ids.sort((a, b) => a - b);
        }
        getFans() {
          const fans = [];
          for (const [fanId, entries] of this.fanTable) {
            for (const matchedPacks of entries) {
              fans.push({
                fanId,
                score: constants2.FAN_SCORE[fanId],
                matchedPacks
              });
            }
          }
          return fans;
        }
        clear() {
          this.fanTable.clear();
          this.excludedTable.clear();
        }
      };
      function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }
      module.exports = { FanAccumulator, arraysEqual };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/core/helpers.js
  var require_helpers = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/core/helpers.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var tileIdOf = (tile) => {
        if (tile === null || tile === void 0) return 0;
        return typeof tile.GetId === "function" ? tile.GetId() : tile;
      };
      var isShu = (tileId) => (1n << BigInt(tileId) & constants2.TILE_TYPE_BITMAP_SHU) === 1n << BigInt(tileId);
      var isZi = (tileId) => (1n << BigInt(tileId) & constants2.TILE_TYPE_BITMAP_ZI) === 1n << BigInt(tileId);
      var isFeng = (tileId) => tileId >= constants2.TILE_E && tileId <= constants2.TILE_N;
      var isJian = (tileId) => tileId >= constants2.TILE_C && tileId <= constants2.TILE_P;
      var isHonorTile = (tileId) => tileId >= constants2.TILE_E && tileId <= constants2.TILE_P;
      var isNumberedTile = (tileId) => tileId >= constants2.TILE_1m && tileId <= constants2.TILE_9p;
      var isYaojiu = (tileId) => (1n << BigInt(tileId) & constants2.TILE_TYPE_BITMAP_YAOJIU) === 1n << BigInt(tileId);
      var tileRank = (tileId) => constants2.TILES_RANK[tileId];
      var tileSuit = (tileId) => constants2.TILES_SUIT[tileId];
      var packType = (pack) => typeof pack.GetType === "function" ? pack.GetType() : pack.type;
      var packTile = (pack) => typeof pack.GetMiddleTile === "function" ? pack.GetMiddleTile() : pack.tile;
      var packOffer = (pack) => typeof pack.GetOffer === "function" ? pack.GetOffer() : pack.offer;
      var isKezi = (pack) => packType(pack) === constants2.PACK_TYPE_KEZI;
      var isGang = (pack) => packType(pack) === constants2.PACK_TYPE_GANG;
      var isKeGang = (pack) => isKezi(pack) || isGang(pack);
      var isJiang = (pack) => packType(pack) === constants2.PACK_TYPE_JIANG;
      var isShunzi = (pack) => packType(pack) === constants2.PACK_TYPE_SHUNZI;
      var isAnshou = (pack) => {
        const offer = packOffer(pack);
        return offer === 0 || offer === -1;
      };
      var packTileId = (pack) => tileIdOf(packTile(pack));
      var packsEqual = (a, b) => packType(a) === packType(b) && packTileId(a) === packTileId(b);
      module.exports = {
        tileIdOf,
        isShu,
        isZi,
        isFeng,
        isJian,
        isHonorTile,
        isNumberedTile,
        isYaojiu,
        tileRank,
        tileSuit,
        packType,
        packTile,
        packOffer,
        isKezi,
        isGang,
        isKeGang,
        isJiang,
        isShunzi,
        isAnshou,
        packTileId,
        packsEqual
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/core/bitmap.js
  var require_bitmap = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/core/bitmap.js"(exports, module) {
      "use strict";
      var { isShunzi, isGang, isKezi, isJiang, packTileId } = require_helpers();
      var constants2 = require_constants();
      var collectBitmap = (packs) => {
        let bitmap = 0n;
        for (const pack of packs) {
          if (!pack) continue;
          const tid = packTileId(pack);
          if (tid === null || tid === void 0) continue;
          if (isShunzi(pack)) {
            bitmap |= 1n << BigInt(tid - 1);
            bitmap |= 1n << BigInt(tid);
            bitmap |= 1n << BigInt(tid + 1);
          } else if (isGang(pack) || isKezi(pack) || isJiang(pack)) {
            bitmap |= 1n << BigInt(tid);
          }
        }
        return bitmap;
      };
      var collectTileBitmap = (tiles) => {
        let bitmap = 0n;
        for (const tile of tiles) {
          bitmap |= tile.GetBitmap();
        }
        return bitmap;
      };
      var handTileCount = (hand, tileId) => {
        const { packType, packTileId: getPackTileId } = require_helpers();
        let count = 0;
        for (const tile of hand.tiles) {
          if (tile.GetId() === tileId) count++;
        }
        for (const pack of hand.packs) {
          const type = packType(pack);
          const tid = getPackTileId(pack);
          if (type === constants2.PACK_TYPE_SHUNZI) {
            if (tid - 1 === tileId || tid === tileId || tid + 1 === tileId) count++;
          } else if (type === constants2.PACK_TYPE_KEZI) {
            if (tid === tileId) count += 3;
          } else if (type === constants2.PACK_TYPE_GANG) {
            if (tid === tileId) count += 4;
          }
        }
        return count;
      };
      var isMenqing = (hand) => {
        const { isAnshou } = require_helpers();
        return hand.packs.length === 0 || hand.packs.every((p) => isAnshou(p));
      };
      var bitPopCount = (n) => {
        let c = 0;
        let val = n;
        while (val) {
          val &= val - 1n;
          c++;
        }
        return c;
      };
      module.exports = {
        collectBitmap,
        collectTileBitmap,
        handTileCount,
        isMenqing,
        bitPopCount
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/overall-attr.js
  var require_overall_attr = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/overall-attr.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var {
        isShu,
        isZi,
        isYaojiu,
        tileRank,
        isGang,
        isKeGang,
        isJiang,
        isShunzi,
        packType,
        packTileId
      } = require_helpers();
      var {
        collectBitmap,
        collectTileBitmap,
        handTileCount,
        isMenqing
      } = require_bitmap();
      var excludeYaojiuke = (acc, packs) => {
        for (let i = 0; i < packs.length; i++) {
          const tid = packTileId(packs[i]);
          const rank = tileRank(tid);
          const zi = isZi(tid);
          if (isKeGang(packs[i]) && (rank === 1 || rank === 9 || zi)) {
            acc.excludeFan(constants2.FAN_YAOJIUKE, [i]);
          }
        }
      };
      var countOverallAttrFans = (acc, hand, packs, zuhelongType) => {
        let handBitmap = collectBitmap(hand.packs) | collectTileBitmap(hand.tiles);
        if (zuhelongType > 0) {
          handBitmap |= constants2.ZuhelongBitmap[zuhelongType];
        }
        if (zuhelongType === 0) {
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_LV) === handBitmap) {
            acc.addFan(constants2.FAN_LVYISE);
            acc.excludeFan(constants2.FAN_HUNYISE);
          }
          if (isMenqing(hand)) {
            const tileTable = /* @__PURE__ */ new Map();
            for (const tile of hand.tiles) {
              const id = tile.GetId();
              tileTable.set(id, (tileTable.get(id) || 0) + 1);
            }
            const winTileId = hand.winningTile ? hand.winningTile.GetId() : hand.tiles[hand.tiles.length - 1].GetId();
            tileTable.set(winTileId, tileTable.get(winTileId) - 1);
            let startTile = -1;
            if (tileTable.get(constants2.TILE_1m) > 0) startTile = constants2.TILE_1m;
            else if (tileTable.get(constants2.TILE_1s) > 0)
              startTile = constants2.TILE_1s;
            else if (tileTable.get(constants2.TILE_1p) > 0)
              startTile = constants2.TILE_1p;
            if (startTile > 0) {
              let flag = true;
              if (tileTable.get(startTile) !== 3 || tileTable.get(startTile + 8) !== 3) {
                flag = false;
              }
              for (let i = 2; i <= 8; i++) {
                if (tileTable.get(startTile - 1 + i) !== 1) {
                  flag = false;
                  break;
                }
              }
              if (flag) {
                acc.addFan(constants2.FAN_JIULIANBAODENG);
                acc.excludeFan(constants2.FAN_QINGYISE);
                acc.excludeFan(constants2.FAN_BUQIUREN);
                acc.excludeFan(constants2.FAN_MENQIANQING);
                acc.excludeFan(constants2.FAN_WUZI);
                for (let i = 0; i < packs.length; i++) {
                  if (isKeGang(packs[i]) && isYaojiu(packTileId(packs[i]))) {
                    acc.excludeFan(constants2.FAN_YAOJIUKE, [i]);
                    break;
                  }
                }
              }
            }
          }
          if ((handBitmap & (constants2.TILE_TYPE_BITMAP_YAOJIU & ~constants2.TILE_TYPE_BITMAP_ZI)) === handBitmap) {
            acc.addFan(constants2.FAN_QINGYAOJIU);
            acc.excludeFan(constants2.FAN_PENGPENGHU);
            acc.excludeFan(constants2.FAN_QUANDAIYAO);
            acc.excludeFan(constants2.FAN_WUZI);
            for (let i = 0; i < packs.length; i++) {
              for (let j = i + 1; j < packs.length; j++) {
                if (isKeGang(packs[i]) && isKeGang(packs[j]) && tileRank(packTileId(packs[i])) === tileRank(packTileId(packs[j]))) {
                  acc.excludeFan(constants2.FAN_SHUANGTONGKE, [i, j]);
                }
              }
            }
            excludeYaojiuke(acc, packs);
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_ZI) === handBitmap) {
            acc.addFan(constants2.FAN_ZIYISE);
            acc.excludeFan(constants2.FAN_PENGPENGHU);
            acc.excludeFan(constants2.FAN_QUANDAIYAO);
            excludeYaojiuke(acc, packs);
          }
          if (handBitmap & constants2.TILE_TYPE_BITMAP_YAOJIU & ~constants2.TILE_TYPE_BITMAP_ZI && handBitmap & constants2.TILE_TYPE_BITMAP_ZI && (handBitmap & constants2.TILE_TYPE_BITMAP_YAOJIU) === handBitmap) {
            acc.addFan(constants2.FAN_HUNYAOJIU);
            acc.excludeFan(constants2.FAN_PENGPENGHU);
            acc.excludeFan(constants2.FAN_QUANDAIYAO);
            excludeYaojiuke(acc, packs);
          }
          if (packs.length === 5) {
            let flag = true;
            for (const p of packs) {
              if (!((isKeGang(p) || isJiang(p)) && isShu(packTileId(p)) && tileRank(packTileId(p)) % 2 === 0)) {
                flag = false;
                break;
              }
            }
            if (flag) {
              acc.addFan(constants2.FAN_QUANSHUANGKE);
              acc.excludeFan(constants2.FAN_PENGPENGHU);
              acc.excludeFan(constants2.FAN_DUANYAO);
              acc.excludeFan(constants2.FAN_WUZI);
            }
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_WAN) === handBitmap || (handBitmap & constants2.TILE_TYPE_BITMAP_TIAO) === handBitmap || (handBitmap & constants2.TILE_TYPE_BITMAP_BING) === handBitmap) {
            acc.addFan(constants2.FAN_QINGYISE);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_QUANDA) === handBitmap) {
            acc.addFan(constants2.FAN_QUANDA);
            acc.excludeFan(constants2.FAN_DAYUWU);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_QUANZHONG) === handBitmap) {
            acc.addFan(constants2.FAN_QUANZHONG);
            acc.excludeFan(constants2.FAN_DUANYAO);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_QUANXIAO) === handBitmap) {
            acc.addFan(constants2.FAN_QUANXIAO);
            acc.excludeFan(constants2.FAN_XIAOYUWU);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          if (packs.length === 5) {
            let flag = true;
            for (const p of packs) {
              const rank = tileRank(packTileId(p));
              if (!(isShunzi(p) && rank >= 4 && rank <= 6 || (isKeGang(p) || isJiang(p)) && rank === 5)) {
                flag = false;
                break;
              }
            }
            if (flag) {
              acc.addFan(constants2.FAN_QUANDAIWU);
              acc.excludeFan(constants2.FAN_DUANYAO);
              acc.excludeFan(constants2.FAN_WUZI);
            }
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_DAYUWU) === handBitmap) {
            acc.addFan(constants2.FAN_DAYUWU);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_XIAOYUWU) === handBitmap) {
            acc.addFan(constants2.FAN_XIAOYUWU);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          if ((handBitmap & constants2.TILE_TYPE_BITMAP_TUIBUDAO) === handBitmap) {
            acc.addFan(constants2.FAN_TUIBUDAO);
            acc.excludeFan(constants2.FAN_QUEYIMEN);
          }
          if (packs.length === 5 && packs.every((p) => isKeGang(p) || isJiang(p))) {
            acc.addFan(constants2.FAN_PENGPENGHU);
          }
          {
            const bitmapNozi = handBitmap & ~constants2.TILE_TYPE_BITMAP_ZI;
            if (handBitmap & constants2.TILE_TYPE_BITMAP_ZI && handBitmap & constants2.TILE_TYPE_BITMAP_SHU && ((bitmapNozi & constants2.TILE_TYPE_BITMAP_WAN) === bitmapNozi || (bitmapNozi & constants2.TILE_TYPE_BITMAP_TIAO) === bitmapNozi || (bitmapNozi & constants2.TILE_TYPE_BITMAP_BING) === bitmapNozi)) {
              acc.addFan(constants2.FAN_HUNYISE);
            }
          }
          if (packs.length === 5) {
            let flag = true;
            for (const p of packs) {
              const rank = tileRank(packTileId(p));
              const yaojiu = isYaojiu(packTileId(p));
              if (!(isShunzi(p) && (rank === 2 || rank === 8) || (isKeGang(p) || isJiang(p)) && yaojiu)) {
                flag = false;
                break;
              }
            }
            if (flag) {
              acc.addFan(constants2.FAN_QUANDAIYAO);
            }
          }
          if ((handBitmap & ~constants2.TILE_TYPE_BITMAP_YAOJIU) === handBitmap) {
            acc.addFan(constants2.FAN_DUANYAO);
            acc.excludeFan(constants2.FAN_WUZI);
          }
          {
            const suitCount = ((handBitmap & constants2.TILE_TYPE_BITMAP_WAN) === 0n ? 0 : 1) + ((handBitmap & constants2.TILE_TYPE_BITMAP_TIAO) === 0n ? 0 : 1) + ((handBitmap & constants2.TILE_TYPE_BITMAP_BING) === 0n ? 0 : 1);
            if (suitCount === 2) {
              acc.addFan(constants2.FAN_QUEYIMEN);
            }
          }
        }
        {
          const hasWan = (handBitmap & constants2.TILE_TYPE_BITMAP_WAN) !== 0n;
          const hasTiao = (handBitmap & constants2.TILE_TYPE_BITMAP_TIAO) !== 0n;
          const hasBing = (handBitmap & constants2.TILE_TYPE_BITMAP_BING) !== 0n;
          const hasFeng = (handBitmap & constants2.TILE_TYPE_BITMAP_FENG) !== 0n;
          const hasJian = (handBitmap & constants2.TILE_TYPE_BITMAP_JIAN) !== 0n;
          if ((hasWan ? 1 : 0) + (hasTiao ? 1 : 0) + (hasBing ? 1 : 0) + (hasFeng ? 1 : 0) + (hasJian ? 1 : 0) === 5) {
            acc.addFan(constants2.FAN_WUMENQI);
          }
        }
        {
          const regularPacks = packs.filter(
            (p) => packType(p) !== constants2.PACK_TYPE_ZUHELONG
          );
          if (regularPacks.length !== 7 && regularPacks.length > 0 && regularPacks.every(
            (p) => isShunzi(p) || isJiang(p) && isShu(packTileId(p))
          )) {
            acc.addFan(constants2.FAN_PINGHU);
            acc.excludeFan(constants2.FAN_WUZI);
          }
        }
        for (let i = constants2.TILE_1m; i <= constants2.TILE_P; i++) {
          let hasGang = false;
          for (const p of packs) {
            if (isGang(p) && packTileId(p) === i) {
              hasGang = true;
              break;
            }
          }
          if (hasGang) continue;
          if (handTileCount(hand, i) === 4) {
            acc.addFan(constants2.FAN_SIGUIYI);
          }
        }
        if ((handBitmap & ~constants2.TILE_TYPE_BITMAP_ZI) === handBitmap) {
          acc.addFan(constants2.FAN_WUZI);
        }
      };
      module.exports = { countOverallAttrFans, excludeYaojiuke };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/ke-gang.js
  var require_ke_gang = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/ke-gang.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var { isGang, isKezi, isAnshou, isJiang } = require_helpers();
      var countKeGangFans = (acc, packs) => {
        const angang = [];
        const minggang = [];
        const anke = [];
        for (let i = 0; i < packs.length; i++) {
          if (isGang(packs[i])) {
            if (isAnshou(packs[i])) {
              angang.push(i);
            } else {
              minggang.push(i);
            }
          } else if (isKezi(packs[i]) && isAnshou(packs[i])) {
            anke.push(i);
          }
        }
        const key = angang.length * 100 + minggang.length * 10 + anke.length;
        switch (key) {
          case 400:
            acc.addFan(constants2.FAN_SIGANG, angang);
            acc.addFan(constants2.FAN_SIANKE, angang);
            break;
          case 310:
            acc.addFan(constants2.FAN_SIGANG, [
              angang[0],
              angang[1],
              angang[2],
              minggang[0]
            ]);
            acc.addFan(constants2.FAN_SANANKE, angang);
            break;
          case 220:
            acc.addFan(constants2.FAN_SIGANG, [
              angang[0],
              angang[1],
              minggang[0],
              minggang[1]
            ]);
            acc.addFan(constants2.FAN_SHUANGANKE, angang);
            break;
          case 130:
            acc.addFan(constants2.FAN_SIGANG, [
              angang[0],
              minggang[0],
              minggang[1],
              minggang[2]
            ]);
            break;
          case 301:
            acc.addFan(constants2.FAN_SANGANG, angang);
            acc.addFan(constants2.FAN_SIANKE, [
              angang[0],
              angang[1],
              angang[2],
              anke[0]
            ]);
            break;
          case 300:
            acc.addFan(constants2.FAN_SANGANG, angang);
            acc.addFan(constants2.FAN_SANANKE, angang);
            break;
          case 211:
            acc.addFan(constants2.FAN_SANGANG, [angang[0], angang[1], minggang[0]]);
            acc.addFan(constants2.FAN_SANANKE, [angang[0], angang[1], anke[0]]);
            break;
          case 210:
            acc.addFan(constants2.FAN_SANGANG, [angang[0], angang[1], minggang[0]]);
            acc.addFan(constants2.FAN_SHUANGANKE, [angang[0], angang[1]]);
            break;
          case 121:
            acc.addFan(constants2.FAN_SANGANG, [angang[0], minggang[0], minggang[1]]);
            acc.addFan(constants2.FAN_SHUANGANKE, [angang[0], anke[0]]);
            break;
          case 120:
            acc.addFan(constants2.FAN_SANGANG, [angang[0], minggang[0], minggang[1]]);
            break;
          case 202:
            acc.addFan(constants2.FAN_SHUANGANGANG, angang);
            acc.addFan(constants2.FAN_SIANKE, [
              angang[0],
              angang[1],
              anke[0],
              anke[1]
            ]);
            break;
          case 201:
            acc.addFan(constants2.FAN_SHUANGANGANG, angang);
            acc.addFan(constants2.FAN_SANANKE, [angang[0], angang[1], anke[0]]);
            break;
          case 112:
            acc.addFan(constants2.FAN_MINGANGANG, [angang[0], minggang[0]]);
            acc.addFan(constants2.FAN_SANANKE, [angang[0], anke[0], anke[1]]);
            break;
          case 111:
            acc.addFan(constants2.FAN_MINGANGANG, [angang[0], minggang[0]]);
            acc.addFan(constants2.FAN_SHUANGANKE, [angang[0], anke[0]]);
            break;
          case 22:
            acc.addFan(constants2.FAN_SHUANGMINGGANG, minggang);
            acc.addFan(constants2.FAN_SHUANGANKE, anke);
            break;
          case 103:
            acc.addFan(constants2.FAN_ANGANG, angang);
            acc.addFan(constants2.FAN_SIANKE, [angang[0], anke[0], anke[1], anke[2]]);
            break;
          case 102:
            acc.addFan(constants2.FAN_ANGANG, angang);
            acc.addFan(constants2.FAN_SANANKE, [angang[0], anke[0], anke[1]]);
            break;
          case 101:
            acc.addFan(constants2.FAN_ANGANG, angang);
            acc.addFan(constants2.FAN_SHUANGANKE, [angang[0], anke[0]]);
            break;
          case 13:
            acc.addFan(constants2.FAN_MINGGANG, minggang);
            acc.addFan(constants2.FAN_SANANKE, anke);
            break;
          case 12:
            acc.addFan(constants2.FAN_MINGGANG, minggang);
            acc.addFan(constants2.FAN_SHUANGANKE, anke);
            break;
          default: {
            if (minggang.length === 4) acc.addFan(constants2.FAN_SIGANG, minggang);
            else if (anke.length === 4) acc.addFan(constants2.FAN_SIANKE, anke);
            else if (minggang.length === 3)
              acc.addFan(constants2.FAN_SANGANG, minggang);
            else if (anke.length === 3) acc.addFan(constants2.FAN_SANANKE, anke);
            else if (angang.length === 2)
              acc.addFan(constants2.FAN_SHUANGANGANG, angang);
            else if (minggang.length === 2)
              acc.addFan(constants2.FAN_SHUANGMINGGANG, minggang);
            else if (anke.length === 2) acc.addFan(constants2.FAN_SHUANGANKE, anke);
            else if (minggang.length === 1 && angang.length === 1)
              acc.addFan(constants2.FAN_MINGANGANG, [angang[0], minggang[0]]);
            else if (angang.length === 1) acc.addFan(constants2.FAN_ANGANG, angang);
            else if (minggang.length === 1)
              acc.addFan(constants2.FAN_MINGGANG, minggang);
            break;
          }
        }
        if (acc.hasFan(constants2.FAN_SIGANG)) {
          acc.excludeFan(constants2.FAN_PENGPENGHU);
          for (let i = 0; i < packs.length; i++) {
            if (isJiang(packs[i])) {
              acc.excludeFan(constants2.FAN_DANDIAOJIANG, [i]);
              break;
            }
          }
        }
        if (acc.hasFan(constants2.FAN_SHUANGANGANG)) {
          const entries = acc.fanTable.get(constants2.FAN_SHUANGANGANG);
          if (entries && entries.length > 0) {
            acc.excludeFan(constants2.FAN_SHUANGANKE, entries[0]);
          }
        }
        if (acc.hasFan(constants2.FAN_SIANKE)) {
          acc.excludeFan(constants2.FAN_PENGPENGHU);
          acc.excludeFan(constants2.FAN_BUQIUREN);
          acc.excludeFan(constants2.FAN_MENQIANQING);
        }
      };
      module.exports = { countKeGangFans };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/combination.js
  var require_combination = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/combination.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var {
        isFeng,
        isJian,
        isShu,
        isShunzi,
        isKeGang,
        isJiang,
        tileRank,
        tileSuit,
        packTileId,
        packsEqual
      } = require_helpers();
      var countAssociatedCombinationFans = (acc, packs) => {
        const candidates = [];
        const shunziIds = [];
        const kegangIds = [];
        const jiangIds = [];
        for (let i = 0; i < packs.length; i++) {
          if (isShunzi(packs[i])) shunziIds.push(i);
          else if (isKeGang(packs[i])) kegangIds.push(i);
          else if (isJiang(packs[i])) jiangIds.push(i);
        }
        {
          const fengKegang = [];
          const fengJiang = [];
          for (let i = 0; i < packs.length; i++) {
            if (isFeng(packTileId(packs[i]))) {
              if (isKeGang(packs[i])) fengKegang.push(i);
              else fengJiang.push(i);
            }
          }
          if (fengKegang.length === 4) {
            candidates.push({ fanId: constants2.FAN_DASIXI, packs: fengKegang });
          }
          if (fengKegang.length === 3 && fengJiang.length === 1) {
            candidates.push({
              fanId: constants2.FAN_XIAOSIXI,
              packs: [fengKegang[0], fengKegang[1], fengKegang[2], fengJiang[0]]
            });
          }
          if (fengKegang.length === 3) {
            candidates.push({
              fanId: constants2.FAN_SANFENGKE,
              packs: [fengKegang[0], fengKegang[1], fengKegang[2]]
            });
          }
        }
        {
          const jianKegang = [];
          const jianJiang = [];
          for (let i = 0; i < packs.length; i++) {
            if (isJian(packTileId(packs[i]))) {
              if (isKeGang(packs[i])) jianKegang.push(i);
              else jianJiang.push(i);
            }
          }
          if (jianKegang.length === 3) {
            candidates.push({ fanId: constants2.FAN_DASANYUAN, packs: jianKegang });
          }
          if (jianKegang.length === 2 && jianJiang.length === 1) {
            candidates.push({
              fanId: constants2.FAN_XIAOSANYUAN,
              packs: [jianKegang[0], jianKegang[1], jianJiang[0]]
            });
          }
          if (jianKegang.length === 2) {
            candidates.push({
              fanId: constants2.FAN_SHUANGJIANKE,
              packs: [jianKegang[0], jianKegang[1]]
            });
          }
        }
        {
          const shunzi123 = [];
          const shunzi789 = [];
          for (const id of shunziIds) {
            const rank = tileRank(packTileId(packs[id]));
            if (rank === 2) shunzi123.push(id);
            else if (rank === 8) shunzi789.push(id);
          }
          if (shunzi123.length === 2 && shunzi789.length === 2 && jiangIds.length > 0 && tileRank(packTileId(packs[jiangIds[0]])) === 5) {
            const suit123a = tileSuit(packTileId(packs[shunzi123[0]]));
            const suit123b = tileSuit(packTileId(packs[shunzi123[1]]));
            const suit789a = tileSuit(packTileId(packs[shunzi789[0]]));
            const suit789b = tileSuit(packTileId(packs[shunzi789[1]]));
            const suitJiang = tileSuit(packTileId(packs[jiangIds[0]]));
            if (suit123a === suit123b && suit123a === suit789a && suit123a === suit789b && suit123a === suitJiang) {
              candidates.push({
                fanId: constants2.FAN_YISESHUANGLONGHUI,
                packs: [
                  shunzi123[0],
                  shunzi123[1],
                  shunzi789[0],
                  shunzi789[1],
                  jiangIds[0]
                ]
              });
            } else if ((suit123a === suit789a && suit123b === suit789b || suit123a === suit789b && suit123b === suit789a) && suit123a !== suit123b && suit123a !== suitJiang && suit123b !== suitJiang) {
              candidates.push({
                fanId: constants2.FAN_SANSESHUANGLONGHUI,
                packs: [
                  shunzi123[0],
                  shunzi123[1],
                  shunzi789[0],
                  shunzi789[1],
                  jiangIds[0]
                ]
              });
            }
          }
        }
        for (let i = 0; i < shunziIds.length; i++) {
          for (let j = i + 1; j < shunziIds.length; j++) {
            if (packsEqual(packs[shunziIds[i]], packs[shunziIds[j]])) {
              candidates.push({
                fanId: constants2.FAN_YIBANGAO,
                packs: [shunziIds[i], shunziIds[j]]
              });
              for (let k = j + 1; k < shunziIds.length; k++) {
                if (packsEqual(packs[shunziIds[j]], packs[shunziIds[k]])) {
                  candidates.push({
                    fanId: constants2.FAN_YISESANTONGSHUN,
                    packs: [shunziIds[i], shunziIds[j], shunziIds[k]]
                  });
                  for (let l = k + 1; l < shunziIds.length; l++) {
                    if (packsEqual(packs[shunziIds[k]], packs[shunziIds[l]])) {
                      candidates.push({
                        fanId: constants2.FAN_YISESITONGSHUN,
                        packs: [
                          shunziIds[i],
                          shunziIds[j],
                          shunziIds[k],
                          shunziIds[l]
                        ]
                      });
                    }
                  }
                }
              }
            }
          }
        }
        {
          const sortedKegang = kegangIds.filter((id) => isShu(packTileId(packs[id]))).map((id) => ({ rank: tileRank(packTileId(packs[id])), id })).sort((a, b) => a.rank - b.rank);
          for (let i = 0; i < sortedKegang.length; i++) {
            for (let j = i + 1; j < sortedKegang.length; j++) {
              if (sortedKegang[j].rank !== sortedKegang[i].rank + 1) continue;
              for (let k = j + 1; k < sortedKegang.length; k++) {
                if (sortedKegang[k].rank !== sortedKegang[j].rank + 1) continue;
                const si = tileSuit(packTileId(packs[sortedKegang[i].id]));
                const sj = tileSuit(packTileId(packs[sortedKegang[j].id]));
                const sk = tileSuit(packTileId(packs[sortedKegang[k].id]));
                if (si !== sj && si !== sk && sj !== sk) {
                  candidates.push({
                    fanId: constants2.FAN_SANSESANJIEGAO,
                    packs: [
                      sortedKegang[i].id,
                      sortedKegang[j].id,
                      sortedKegang[k].id
                    ]
                  });
                } else if (si === sj && si === sk) {
                  candidates.push({
                    fanId: constants2.FAN_YISESANJIEGAO,
                    packs: [
                      sortedKegang[i].id,
                      sortedKegang[j].id,
                      sortedKegang[k].id
                    ]
                  });
                }
                for (let l = k + 1; l < sortedKegang.length; l++) {
                  if (si === sj && si === sk && si === tileSuit(packTileId(packs[sortedKegang[l].id]))) {
                    candidates.push({
                      fanId: constants2.FAN_YISESIJIEGAO,
                      packs: [
                        sortedKegang[i].id,
                        sortedKegang[j].id,
                        sortedKegang[k].id,
                        sortedKegang[l].id
                      ]
                    });
                  }
                }
              }
            }
          }
        }
        {
          const sortedShunzi = shunziIds.map((id) => ({ rank: tileRank(packTileId(packs[id])), id })).sort((a, b) => a.rank - b.rank);
          for (let i = 0; i < sortedShunzi.length; i++) {
            for (let j = i + 1; j < sortedShunzi.length; j++) {
              const step1 = sortedShunzi[j].rank - sortedShunzi[i].rank;
              if (step1 !== 1 && step1 !== 2 || tileSuit(packTileId(packs[sortedShunzi[i].id])) !== tileSuit(packTileId(packs[sortedShunzi[j].id])))
                continue;
              for (let k = j + 1; k < sortedShunzi.length; k++) {
                const step2 = sortedShunzi[k].rank - sortedShunzi[j].rank;
                if (step2 !== 1 && step2 !== 2 || tileSuit(packTileId(packs[sortedShunzi[j].id])) !== tileSuit(packTileId(packs[sortedShunzi[k].id])))
                  continue;
                if (step1 === step2) {
                  candidates.push({
                    fanId: constants2.FAN_YISESANBUGAO,
                    packs: [
                      sortedShunzi[i].id,
                      sortedShunzi[j].id,
                      sortedShunzi[k].id
                    ]
                  });
                }
                for (let l = k + 1; l < sortedShunzi.length; l++) {
                  const step3 = sortedShunzi[l].rank - sortedShunzi[k].rank;
                  if (step3 !== 1 && step3 !== 2 || tileSuit(packTileId(packs[sortedShunzi[k].id])) !== tileSuit(packTileId(packs[sortedShunzi[l].id])))
                    continue;
                  if (step1 === step2 && step1 === step3) {
                    candidates.push({
                      fanId: constants2.FAN_YISESIBUGAO,
                      packs: [
                        sortedShunzi[i].id,
                        sortedShunzi[j].id,
                        sortedShunzi[k].id,
                        sortedShunzi[l].id
                      ]
                    });
                  }
                }
              }
            }
          }
          for (let i = 0; i < sortedShunzi.length; i++) {
            for (let j = i + 1; j < sortedShunzi.length; j++) {
              if (sortedShunzi[j].rank - sortedShunzi[i].rank !== 1 || tileSuit(packTileId(packs[sortedShunzi[i].id])) === tileSuit(packTileId(packs[sortedShunzi[j].id])))
                continue;
              for (let k = j + 1; k < sortedShunzi.length; k++) {
                if (sortedShunzi[k].rank - sortedShunzi[j].rank !== 1 || tileSuit(packTileId(packs[sortedShunzi[i].id])) === tileSuit(packTileId(packs[sortedShunzi[k].id])) || tileSuit(packTileId(packs[sortedShunzi[j].id])) === tileSuit(packTileId(packs[sortedShunzi[k].id])))
                  continue;
                candidates.push({
                  fanId: constants2.FAN_SANSESANBUGAO,
                  packs: [sortedShunzi[i].id, sortedShunzi[j].id, sortedShunzi[k].id]
                });
              }
            }
          }
        }
        {
          const rankMap = /* @__PURE__ */ new Map();
          for (const id of shunziIds) {
            const rank = tileRank(packTileId(packs[id]));
            if (!rankMap.has(rank)) rankMap.set(rank, []);
            rankMap.get(rank).push(id);
          }
          if (rankMap.has(2) && rankMap.has(5) && rankMap.has(8)) {
            for (const i of rankMap.get(2)) {
              for (const j of rankMap.get(5)) {
                for (const k of rankMap.get(8)) {
                  const s1 = tileSuit(packTileId(packs[i]));
                  const s2 = tileSuit(packTileId(packs[j]));
                  const s3 = tileSuit(packTileId(packs[k]));
                  if (s1 === s2 && s1 === s3) {
                    candidates.push({
                      fanId: constants2.FAN_QINGLONG,
                      packs: [i, j, k]
                    });
                  }
                  if (s1 !== s2 && s1 !== s3 && s2 !== s3) {
                    candidates.push({
                      fanId: constants2.FAN_HUALONG,
                      packs: [i, j, k]
                    });
                  }
                }
              }
            }
          }
        }
        for (let i = 0; i < kegangIds.length; i++) {
          for (let j = i + 1; j < kegangIds.length; j++) {
            if (isShu(packTileId(packs[kegangIds[i]])) && tileRank(packTileId(packs[kegangIds[i]])) === tileRank(packTileId(packs[kegangIds[j]]))) {
              candidates.push({
                fanId: constants2.FAN_SHUANGTONGKE,
                packs: [kegangIds[i], kegangIds[j]]
              });
              for (let k = j + 1; k < kegangIds.length; k++) {
                if (tileRank(packTileId(packs[kegangIds[j]])) === tileRank(packTileId(packs[kegangIds[k]]))) {
                  candidates.push({
                    fanId: constants2.FAN_SANTONGKE,
                    packs: [kegangIds[i], kegangIds[j], kegangIds[k]]
                  });
                }
              }
            }
          }
        }
        for (let i = 0; i < shunziIds.length; i++) {
          for (let j = i + 1; j < shunziIds.length; j++) {
            if (tileRank(packTileId(packs[shunziIds[i]])) !== tileRank(packTileId(packs[shunziIds[j]])) || tileSuit(packTileId(packs[shunziIds[i]])) === tileSuit(packTileId(packs[shunziIds[j]])))
              continue;
            for (let k = j + 1; k < shunziIds.length; k++) {
              if (tileRank(packTileId(packs[shunziIds[j]])) === tileRank(packTileId(packs[shunziIds[k]])) && tileSuit(packTileId(packs[shunziIds[i]])) !== tileSuit(packTileId(packs[shunziIds[k]])) && tileSuit(packTileId(packs[shunziIds[j]])) !== tileSuit(packTileId(packs[shunziIds[k]]))) {
                candidates.push({
                  fanId: constants2.FAN_SANSESANTONGSHUN,
                  packs: [shunziIds[i], shunziIds[j], shunziIds[k]]
                });
              }
            }
          }
        }
        for (let i = 0; i < shunziIds.length; i++) {
          for (let j = i + 1; j < shunziIds.length; j++) {
            const si = tileSuit(packTileId(packs[shunziIds[i]]));
            const sj = tileSuit(packTileId(packs[shunziIds[j]]));
            const ri = tileRank(packTileId(packs[shunziIds[i]]));
            const rj = tileRank(packTileId(packs[shunziIds[j]]));
            if (si !== sj) {
              if (ri === rj) {
                candidates.push({
                  fanId: constants2.FAN_XIXIANGFENG,
                  packs: [shunziIds[i], shunziIds[j]]
                });
              }
            } else if (ri === rj + 3 || ri === rj - 3) {
              candidates.push({
                fanId: constants2.FAN_LIANLIU,
                packs: [shunziIds[i], shunziIds[j]]
              });
            } else if (ri === rj + 6 || ri === rj - 6) {
              candidates.push({
                fanId: constants2.FAN_LAOSHAOFU,
                packs: [shunziIds[i], shunziIds[j]]
              });
            }
          }
        }
        if (candidates.length === 0) return;
        const bestState = bfsOptimize(candidates, packs.length);
        if (!bestState) return;
        for (const id of bestState.eids) {
          const c = candidates[id];
          acc.addFan(c.fanId, c.packs);
          switch (c.fanId) {
            case constants2.FAN_DASIXI:
              acc.excludeFan(constants2.FAN_PENGPENGHU);
              for (const pi of c.packs) {
                if (isFeng(packTileId(packs[pi]))) {
                  acc.excludeFan(constants2.FAN_QUANFENGKE, [pi]);
                  acc.excludeFan(constants2.FAN_MENFENGKE, [pi]);
                  acc.excludeFan(constants2.FAN_YAOJIUKE, [pi]);
                }
              }
              break;
            case constants2.FAN_DASANYUAN:
            case constants2.FAN_XIAOSANYUAN:
            case constants2.FAN_SHUANGJIANKE:
              for (const pi of c.packs) {
                if (isJian(packTileId(packs[pi]))) {
                  acc.excludeFan(constants2.FAN_JIANKE, [pi]);
                  acc.excludeFan(constants2.FAN_YAOJIUKE, [pi]);
                }
              }
              break;
            case constants2.FAN_XIAOSIXI:
            case constants2.FAN_SANFENGKE:
              for (const pi of c.packs) {
                if (isFeng(packTileId(packs[pi]))) {
                  acc.excludeFan(constants2.FAN_YAOJIUKE, [pi]);
                }
              }
              break;
            case constants2.FAN_YISESHUANGLONGHUI:
              acc.excludeFan(constants2.FAN_QINGYISE);
              acc.excludeFan(constants2.FAN_PINGHU);
              acc.excludeFan(constants2.FAN_WUZI);
              break;
            case constants2.FAN_YISESITONGSHUN:
              acc.excludeFan(constants2.FAN_SIGUIYI);
              acc.excludeFan(constants2.FAN_SIGUIYI);
              acc.excludeFan(constants2.FAN_SIGUIYI);
              break;
            case constants2.FAN_YISESIJIEGAO:
              acc.excludeFan(constants2.FAN_PENGPENGHU);
              break;
            case constants2.FAN_SANSESHUANGLONGHUI:
              acc.excludeFan(constants2.FAN_PINGHU);
              break;
            default:
              break;
          }
        }
      };
      var bfsOptimize = (candidates, packCount) => {
        class UF {
          constructor(n) {
            this.f = Array.from({ length: n }, (_, i) => i);
          }
          find(x) {
            if (this.f[x] !== x) this.f[x] = this.find(this.f[x]);
            return this.f[x];
          }
          union(a, b) {
            const ra = this.find(a);
            const rb = this.find(b);
            if (ra === rb) return false;
            if (ra < rb) this.f[rb] = ra;
            else this.f[ra] = rb;
            return true;
          }
          clone() {
            const copy = new UF(0);
            copy.f = this.f.slice();
            return copy;
          }
          hash() {
            let h = 0;
            for (let i = 0; i < this.f.length; i++) {
              h = h * 5 + this.find(i);
            }
            return h;
          }
        }
        class State {
          constructor() {
            this.uf = new UF(packCount);
            this.eids = [];
            this.score = 0;
          }
          tryAdd(id) {
            const v = candidates[id].packs;
            for (let i = 0; i < v.length; i++) {
              for (let j = i + 1; j < v.length; j++) {
                if (this.uf.find(v[i]) === this.uf.find(v[j])) {
                  return null;
                }
              }
            }
            const newState = new State();
            newState.uf = this.uf.clone();
            newState.eids = this.eids.slice();
            newState.score = this.score;
            for (let i = 1; i < v.length; i++) {
              newState.uf.union(v[i], v[i - 1]);
            }
            newState.eids.push(id);
            newState.score += constants2.FAN_SCORE[candidates[id].fanId];
            return newState;
          }
        }
        const visited = /* @__PURE__ */ new Map();
        let bestState = null;
        let bestScore = 0;
        const queue = [new State()];
        visited.set(new State().uf.hash(), 0);
        while (queue.length > 0) {
          const current = queue.shift();
          for (let i = 0; i < candidates.length; i++) {
            const next = current.tryAdd(i);
            if (!next) continue;
            const h = next.uf.hash();
            if (visited.has(h) && visited.get(h) >= next.score) continue;
            visited.set(h, next.score);
            queue.push(next);
            if (next.score > bestScore) {
              bestScore = next.score;
              bestState = next;
            }
          }
        }
        return bestState;
      };
      module.exports = { countAssociatedCombinationFans, bfsOptimize };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/single-pack.js
  var require_single_pack = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/single-pack.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var { isKeGang, isJian, isYaojiu, packTileId } = require_helpers();
      var countSinglePackFans = (acc, hand, packs) => {
        for (let i = 0; i < packs.length; i++) {
          const p = packs[i];
          if (!isKeGang(p)) continue;
          const tid = packTileId(p);
          if (isJian(tid)) {
            acc.addFan(constants2.FAN_JIANKE, [i]);
            acc.excludeFan(constants2.FAN_YAOJIUKE, [i]);
          }
          if (tid === hand.context.quanfeng) {
            acc.addFan(constants2.FAN_QUANFENGKE, [i]);
            acc.excludeFan(constants2.FAN_YAOJIUKE, [i]);
          }
          if (tid === hand.context.menfeng) {
            acc.addFan(constants2.FAN_MENFENGKE, [i]);
            acc.excludeFan(constants2.FAN_YAOJIUKE, [i]);
          }
          if (isYaojiu(tid)) {
            acc.addFan(constants2.FAN_YAOJIUKE, [i]);
          }
        }
      };
      module.exports = { countSinglePackFans };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/ting/calc-ting.js
  var require_calc_ting = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/ting/calc-ting.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var { isNumberedTile, tileRank } = require_helpers();
      var calcTing = (hand) => {
        const handWithoutWin = hand.tiles.slice(0, -1);
        const counts = new Array(constants2.TILE_P + 1).fill(0);
        for (const tile of handWithoutWin) {
          counts[tile.GetId()]++;
        }
        const tingTiles = [];
        for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
          counts[t]++;
          if (canFormMelds(counts, hand.packs.length)) {
            tingTiles.push(t);
          }
          counts[t]--;
        }
        return tingTiles;
      };
      var canFormMelds = (counts, meldCount) => {
        const c = counts.slice();
        const target = 4 - meldCount;
        for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
          if (c[t] < 2) continue;
          c[t] -= 2;
          if (canFormNMelds(c, target)) {
            c[t] += 2;
            return true;
          }
          c[t] += 2;
        }
        return false;
      };
      var canFormNMelds = (counts, n) => {
        if (n === 0) {
          return counts.every((c) => c === 0);
        }
        let first = -1;
        for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
          if (counts[t] > 0) {
            first = t;
            break;
          }
        }
        if (first === -1) return n === 0;
        if (counts[first] >= 3) {
          counts[first] -= 3;
          const ok = canFormNMelds(counts, n - 1);
          counts[first] += 3;
          if (ok) return true;
        }
        if (isNumberedTile(first) && tileRank(first) <= 7 && counts[first + 1] > 0 && counts[first + 2] > 0) {
          counts[first]--;
          counts[first + 1]--;
          counts[first + 2]--;
          const ok = canFormNMelds(counts, n - 1);
          counts[first]++;
          counts[first + 1]++;
          counts[first + 2]++;
          if (ok) return true;
        }
        return false;
      };
      module.exports = {
        calcTing,
        canFormMelds,
        canFormNMelds
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/detection/zuhelong.js
  var require_zuhelong = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/detection/zuhelong.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var {
        isNumberedTile,
        isShunzi,
        tileRank,
        packType,
        packTileId: getPackTileId
      } = require_helpers();
      var judgeZuhelong = (tileBitmap) => {
        for (let i = 1; i <= 6; i++) {
          if ((tileBitmap & constants2.ZuhelongBitmap[i]) === constants2.ZuhelongBitmap[i]) {
            return i;
          }
        }
        return 0;
      };
      var judgePartOfZuhelong = (bitmap) => {
        const shuBitmap = bitmap & constants2.TILE_TYPE_BITMAP_SHU;
        for (let i = 1; i <= 6; i++) {
          if ((constants2.ZuhelongBitmap[i] | shuBitmap) === constants2.ZuhelongBitmap[i]) {
            return true;
          }
        }
        return false;
      };
      var enumerateZuhelongDecompositions = (hand, zuhelongType) => {
        const results = [];
        const zuhelongBitmap = constants2.ZuhelongBitmap[zuhelongType];
        const remaining = [];
        let bm = zuhelongBitmap;
        for (const tile of hand.tiles) {
          const tbm = tile.GetBitmap();
          if (bm & tbm) {
            bm ^= tbm;
          } else {
            remaining.push(tile);
          }
        }
        const counts = new Array(constants2.TILE_P + 1).fill(0);
        for (const tile of remaining) {
          counts[tile.GetId()]++;
        }
        const zuhelongPack = {
          type: constants2.PACK_TYPE_ZUHELONG,
          tile: { GetId: () => 0, GetBitmap: () => 0n },
          offer: 0,
          zuhelong: zuhelongType
        };
        const meldsNeeded = 1 - hand.packs.length;
        for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
          if (counts[t] < 2) continue;
          counts[t] -= 2;
          const pairPack = {
            type: constants2.PACK_TYPE_JIANG,
            tile: { GetId: () => t, GetBitmap: () => 1n << BigInt(t) },
            offer: 0
          };
          if (meldsNeeded <= 0) {
            results.push({ packs: [pairPack, zuhelongPack], zuhelongPack });
          } else {
            const melds = findNMelds(counts, meldsNeeded);
            if (melds) {
              results.push({
                packs: [...melds, pairPack, zuhelongPack],
                zuhelongPack
              });
            }
          }
          counts[t] += 2;
        }
        return results;
      };
      var findNMelds = (counts, n) => {
        if (n === 0) {
          for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
            if (counts[t] !== 0) return null;
          }
          return [];
        }
        const c = counts.slice();
        const melds = [];
        for (let i = 0; i < n; i++) {
          const meld = findMeld(c);
          if (!meld) return null;
          melds.push(meld);
          const tid = meld.tile.GetId();
          if (meld.type === constants2.PACK_TYPE_KEZI) {
            c[tid] -= 3;
          } else if (meld.type === constants2.PACK_TYPE_SHUNZI) {
            c[tid - 1]--;
            c[tid]--;
            c[tid + 1]--;
          }
        }
        for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
          if (c[t] !== 0) return null;
        }
        return melds;
      };
      var findMeld = (counts) => {
        for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
          if (counts[t] === 0) continue;
          if (counts[t] >= 3) {
            return {
              type: constants2.PACK_TYPE_KEZI,
              tile: { GetId: () => t, GetBitmap: () => 1n << BigInt(t) },
              offer: 0
            };
          }
          if (isNumberedTile(t) && tileRank(t) <= 7 && counts[t + 1] > 0 && counts[t + 2] > 0) {
            return {
              type: constants2.PACK_TYPE_SHUNZI,
              tile: { GetId: () => t + 1, GetBitmap: () => 1n << BigInt(t + 1) },
              offer: 0
            };
          }
          break;
        }
        return null;
      };
      var packContainsWinningTile = (pack, winTileId) => {
        const tid = getPackTileId(pack);
        if (isShunzi(pack)) {
          return winTileId === tid - 1 || winTileId === tid || winTileId === tid + 1;
        }
        return tid === winTileId;
      };
      var markWinningTilePacks = (decompositions, winTileId, handPackCount, zimo) => {
        for (const packs of decompositions) {
          for (let i = 0; i < packs.length; i++) {
            const p = packs[i];
            const type = packType(p);
            if (type === constants2.PACK_TYPE_ZUHELONG) continue;
            if (!packContainsWinningTile(p, winTileId)) continue;
            if (i >= handPackCount) {
              const newOffer = zimo ? -1 : -2;
              if (typeof p.SetOffer === "function") {
                p.SetOffer(newOffer);
              } else {
                p.offer = newOffer;
              }
              break;
            }
          }
        }
      };
      module.exports = {
        judgeZuhelong,
        judgePartOfZuhelong,
        enumerateZuhelongDecompositions,
        findNMelds,
        findMeld,
        packContainsWinningTile,
        markWinningTilePacks
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/win-mode.js
  var require_win_mode = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/scoring/win-mode.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var {
        isShunzi,
        isJiang,
        isAnshou,
        tileRank,
        packType,
        packTileId
      } = require_helpers();
      var { isMenqing } = require_bitmap();
      var { canFormMelds } = require_calc_ting();
      var { packContainsWinningTile } = require_zuhelong();
      var findJiangPackIdx = (packs) => {
        for (let i = 0; i < packs.length; i++) {
          if (isJiang(packs[i])) return i;
        }
        return -1;
      };
      var findZuhelongPackIdx = (packs) => {
        for (let i = 0; i < packs.length; i++) {
          if (packType(packs[i]) === constants2.PACK_TYPE_ZUHELONG) return i;
        }
        return -1;
      };
      var removeZuhelongTiles = (tiles, zbm) => {
        const remaining = [];
        let bm = zbm;
        for (const tile of tiles) {
          const tbm = tile.GetBitmap();
          if (bm & tbm) {
            bm ^= tbm;
          } else {
            remaining.push(tile);
          }
        }
        return remaining;
      };
      var detectWaitInPacks = (packs, winTileId) => {
        for (let i = 0; i < packs.length; i++) {
          const p = packs[i];
          const pt = packType(p);
          if (pt === constants2.PACK_TYPE_ZUHELONG) continue;
          if (!packContainsWinningTile(p, winTileId)) continue;
          if (isJiang(p)) {
            return { fanId: constants2.FAN_DANDIAOJIANG, packIdx: i };
          }
          if (isShunzi(p)) {
            const midRank = tileRank(packTileId(p));
            const winRank = tileRank(winTileId);
            if (midRank === 2 && winRank === 3 || midRank === 8 && winRank === 7) {
              return { fanId: constants2.FAN_BIANZHANG, packIdx: i };
            }
            if (midRank === winRank) {
              return { fanId: constants2.FAN_KANZHANG, packIdx: i };
            }
          }
        }
        return null;
      };
      var countWinModeFans = (acc, hand, packs, zuhelongType) => {
        const ctx = hand.context;
        if (ctx.haidi && ctx.zimo) {
          acc.addFan(constants2.FAN_MIAOSHOUHUICHUN);
          acc.excludeFan(constants2.FAN_ZIMO);
        }
        if (ctx.haidi && !ctx.zimo) {
          acc.addFan(constants2.FAN_HAIDILAOYUE);
        }
        if (ctx.gang && ctx.zimo) {
          acc.addFan(constants2.FAN_GANGSHANGKAIHUA);
          acc.excludeFan(constants2.FAN_ZIMO);
        }
        if (ctx.gang && !ctx.zimo) {
          acc.addFan(constants2.FAN_QIANGGANGHU);
          acc.excludeFan(constants2.FAN_HUJUEZHANG);
        }
        const allFulu = hand.packs.length === 4 && hand.packs.every((p) => !isAnshou(p));
        if (allFulu && !ctx.zimo) {
          acc.addFan(constants2.FAN_QUANQIUREN);
          const jiangIdx = findJiangPackIdx(packs);
          if (jiangIdx >= 0) {
            acc.excludeFan(constants2.FAN_DANDIAOJIANG, [jiangIdx]);
          }
        }
        if (isMenqing(hand) && ctx.zimo) {
          acc.addFan(constants2.FAN_BUQIUREN);
          acc.excludeFan(constants2.FAN_MENQIANQING);
          acc.excludeFan(constants2.FAN_ZIMO);
        }
        if (ctx.juezhang) {
          acc.addFan(constants2.FAN_HUJUEZHANG);
          const jiangIdx = findJiangPackIdx(packs);
          if (jiangIdx >= 0) {
            acc.excludeFan(constants2.FAN_DANDIAOJIANG, [jiangIdx]);
          }
        }
        if (isMenqing(hand)) {
          acc.addFan(constants2.FAN_MENQIANQING);
        }
        {
          const winTileId = hand.winningTile ? hand.winningTile.GetId() : hand.tiles[hand.tiles.length - 1].GetId();
          const zbm = zuhelongType > 0 ? constants2.ZuhelongBitmap[zuhelongType] : 0n;
          let canDetectWait = false;
          let waitFanId = 0;
          let waitPackIdx = -1;
          const tileCountsForVerify = new Array(constants2.TILE_P + 1).fill(0);
          for (let ti = 0; ti < hand.tiles.length - 1; ti++) {
            tileCountsForVerify[hand.tiles[ti].GetId()]++;
          }
          if (zuhelongType > 0) {
            const winBitmap = 1n << BigInt(winTileId);
            const winInZuhelong = (zbm & winBitmap) !== 0n;
            if (winInZuhelong) {
              const remaining = removeZuhelongTiles(hand.tiles, zbm);
              const zlTileIds = [];
              let bm3 = zbm;
              for (const tile of hand.tiles) {
                const tbm = tile.GetBitmap();
                if (bm3 & tbm) {
                  bm3 ^= tbm;
                  zlTileIds.push(tile.GetId());
                }
              }
              zlTileIds.sort((a, b) => a - b);
              let winGroup = null;
              for (let g = 0; g < 3; g++) {
                const group = zlTileIds.slice(g * 3, (g + 1) * 3);
                if (group.includes(winTileId)) {
                  winGroup = group;
                  break;
                }
              }
              if (winGroup) {
                const groupLow = Math.min(...winGroup);
                const posInGroup = winTileId - groupLow;
                waitFanId = posInGroup === 0 || posInGroup === 6 ? constants2.FAN_BIANZHANG : constants2.FAN_KANZHANG;
                const remCounts = new Array(constants2.TILE_P + 1).fill(0);
                for (const t of remaining) remCounts[t.GetId()]++;
                const hasRemPair = remCounts.some((c) => c >= 2);
                if (!hasRemPair) {
                  waitPackIdx = findZuhelongPackIdx(packs);
                }
              }
            } else {
              const detected = detectWaitInPacks(packs, winTileId);
              if (detected) {
                waitFanId = detected.fanId;
                waitPackIdx = detected.packIdx;
              }
              if (waitPackIdx < 0) {
                const remaining = removeZuhelongTiles(hand.tiles, zbm);
                const winIdx = remaining.findIndex((t) => t.GetId() === winTileId);
                if (winIdx >= 0) remaining.splice(winIdx, 1);
                const hasPair = remaining.some((t) => t.GetId() === winTileId);
                if (hasPair) {
                  waitFanId = constants2.FAN_DANDIAOJIANG;
                  for (let i = 0; i < packs.length; i++) {
                    if (isJiang(packs[i]) && packTileId(packs[i]) === winTileId) {
                      waitPackIdx = i;
                      break;
                    }
                  }
                  if (waitPackIdx < 0) {
                    waitPackIdx = findZuhelongPackIdx(packs);
                  }
                } else {
                  const allCounts = new Array(constants2.TILE_P + 1).fill(0);
                  for (const tile of hand.tiles) {
                    if (tile.GetId() !== winTileId) allCounts[tile.GetId()]++;
                  }
                  const winRank = tileRank(winTileId);
                  const isLow = winRank <= 7 && allCounts[winTileId + 1] > 0 && allCounts[winTileId + 2] > 0;
                  const isMid = winRank >= 2 && winRank <= 8 && allCounts[winTileId - 1] > 0 && allCounts[winTileId + 1] > 0;
                  const isHigh = winRank >= 3 && allCounts[winTileId - 1] > 0 && allCounts[winTileId - 2] > 0;
                  if (isLow || isMid || isHigh) {
                    waitFanId = isMid && !isLow && !isHigh ? constants2.FAN_KANZHANG : constants2.FAN_BIANZHANG;
                    waitPackIdx = findZuhelongPackIdx(packs);
                    if (waitPackIdx < 0) waitPackIdx = packs.length - 1;
                  }
                }
              }
            }
            if (waitPackIdx >= 0) {
              const zlVerify = new Array(constants2.TILE_P + 1).fill(0);
              let bmZv = zbm;
              for (let ti = 0; ti < hand.tiles.length - 1; ti++) {
                const tid = hand.tiles[ti].GetId();
                const tbm = 1n << BigInt(tid);
                if (bmZv & tbm) {
                  bmZv ^= tbm;
                } else {
                  zlVerify[tid]++;
                }
              }
              const zlMeldCount = hand.packs.length + 3;
              canDetectWait = true;
              for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
                if (t === winTileId) continue;
                zlVerify[t]++;
                if (canFormMelds(zlVerify, zlMeldCount)) {
                  canDetectWait = false;
                  zlVerify[t]--;
                  break;
                }
                zlVerify[t]--;
              }
            }
          } else {
            const detected = detectWaitInPacks(packs, winTileId);
            if (detected) {
              waitFanId = detected.fanId;
              waitPackIdx = detected.packIdx;
            }
            if (waitPackIdx < 0) {
              for (let i = 0; i < packs.length; i++) {
                const p = packs[i];
                const pt = packType(p);
                if (pt === constants2.PACK_TYPE_ZUHELONG) continue;
                if (isJiang(p) && packContainsWinningTile(p, winTileId)) {
                  waitFanId = constants2.FAN_DANDIAOJIANG;
                  waitPackIdx = i;
                  break;
                }
              }
            }
            if (waitPackIdx >= 0) {
              canDetectWait = true;
              for (let t = constants2.TILE_1m; t <= constants2.TILE_P; t++) {
                if (t === winTileId) continue;
                tileCountsForVerify[t]++;
                if (canFormMelds(tileCountsForVerify, hand.packs.length)) {
                  canDetectWait = false;
                  tileCountsForVerify[t]--;
                  break;
                }
                tileCountsForVerify[t]--;
              }
            }
          }
          if (canDetectWait) {
            acc.addFan(waitFanId, waitPackIdx >= 0 ? [waitPackIdx] : []);
          }
        }
        if (ctx.zimo) {
          acc.addFan(constants2.FAN_ZIMO);
          if ((acc.hasFan(constants2.FAN_JIULIANBAODENG) || acc.hasFan(constants2.FAN_SIANKE)) && !acc.hasFan(constants2.FAN_MIAOSHOUHUICHUN) && !acc.hasFan(constants2.FAN_GANGSHANGKAIHUA)) {
            acc.excludedTable.delete(constants2.FAN_ZIMO);
          }
        }
      };
      module.exports = { countWinModeFans, packContainsWinningTile };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/detection/special-hands.js
  var require_special_hands = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/detection/special-hands.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var { isHonorTile, tileSuit } = require_helpers();
      var { collectTileBitmap, bitPopCount } = require_bitmap();
      var { judgePartOfZuhelong } = require_zuhelong();
      var isCompleteClosedHand = (hand) => Boolean(hand) && hand.packs.length === 0 && hand.tiles.length === 14;
      var buildTileCounts = (tiles) => {
        const counts = /* @__PURE__ */ new Map();
        for (const tile of tiles) {
          const id = tile.GetId();
          counts.set(id, (counts.get(id) ?? 0) + 1);
        }
        return counts;
      };
      var isQidui = (hand) => {
        if (!isCompleteClosedHand(hand)) return false;
        let pairCount = 0;
        for (const count of buildTileCounts(hand.tiles).values()) {
          if (count !== 2 && count !== 4) return false;
          pairCount += count / 2;
        }
        return pairCount === 7;
      };
      var isLianqidui = (hand) => {
        if (!isQidui(hand)) return false;
        const uniqueIds = [...new Set(hand.tiles.map((t) => t.GetId()))].sort(
          (a, b) => a - b
        );
        for (let i = 1; i < uniqueIds.length; i++) {
          if (uniqueIds[i] !== uniqueIds[i - 1] + 1 || tileSuit(uniqueIds[i]) !== tileSuit(uniqueIds[i - 1])) {
            return false;
          }
        }
        return true;
      };
      var isMeaningfulTile = (tileId) => tileId >= constants2.TILE_1m && tileId <= constants2.TILE_P;
      var isBukaoStructure = (hand) => {
        if (!isCompleteClosedHand(hand)) return false;
        const tileIds = hand.tiles.map((t) => t.GetId());
        const uniqueTiles = new Set(tileIds);
        if (uniqueTiles.size !== 14 || !tileIds.every(isMeaningfulTile)) return false;
        const bitmap = collectTileBitmap(hand.tiles);
        return judgePartOfZuhelong(bitmap);
      };
      var isQuanbukao = (hand) => {
        if (!isBukaoStructure(hand)) return false;
        const honorCount = hand.tiles.filter((t) => isHonorTile(t.GetId())).length;
        return honorCount < 7;
      };
      var isQixingbukao = (hand) => {
        if (!isBukaoStructure(hand)) return false;
        const honorCount = hand.tiles.filter((t) => isHonorTile(t.GetId())).length;
        return honorCount === 7;
      };
      var judgeCompleteSpecialHu = (hand) => {
        if (!isCompleteClosedHand(hand)) return 0;
        const bitmap = collectTileBitmap(hand.tiles);
        const cnt = bitPopCount(bitmap);
        if ((bitmap & constants2.TILE_TYPE_BITMAP_YAOJIU) === bitmap && cnt === 13) {
          return constants2.FAN_SHISANYAO;
        }
        if (judgePartOfZuhelong(bitmap) && (bitmap & constants2.TILE_TYPE_BITMAP_MEANINGFUL) === bitmap && cnt === 14) {
          if ((bitmap & constants2.TILE_TYPE_BITMAP_ZI) === constants2.TILE_TYPE_BITMAP_ZI) {
            return constants2.FAN_QIXINGBUKAO;
          }
          return constants2.FAN_QUANBUKAO;
        }
        return 0;
      };
      var judgeQidui = (hand) => {
        if (!isQidui(hand)) return 0;
        return isLianqidui(hand) ? constants2.FAN_LIANQIDUI : constants2.FAN_QIDUI;
      };
      module.exports = {
        isCompleteClosedHand,
        buildTileCounts,
        isQidui,
        isLianqidui,
        isMeaningfulTile,
        isBukaoStructure,
        isQuanbukao,
        isQixingbukao,
        judgeCompleteSpecialHu,
        judgeQidui
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-rules/index.js
  var require_fan_rules = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-rules/index.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var { normalizeHandInput } = require_normalize_hand();
      var { enumerateDecompositions } = require_decomposition();
      var {
        canonicalizeCandidate,
        createEmptyFanResult
      } = require_fan_optimizer();
      var { FanAccumulator } = require_accumulator();
      var { collectTileBitmap } = require_bitmap();
      var { countOverallAttrFans } = require_overall_attr();
      var { countKeGangFans } = require_ke_gang();
      var { countAssociatedCombinationFans } = require_combination();
      var { countSinglePackFans } = require_single_pack();
      var { countWinModeFans } = require_win_mode();
      var {
        judgeCompleteSpecialHu,
        judgeQidui,
        isQuanbukao,
        isQixingbukao,
        isCompleteClosedHand
      } = require_special_hands();
      var {
        judgeZuhelong,
        enumerateZuhelongDecompositions,
        markWinningTilePacks
      } = require_zuhelong();
      var { calcTing } = require_calc_ting();
      var countBasicFans = (acc, hand, packs, zuhelongType) => {
        countOverallAttrFans(acc, hand, packs, zuhelongType);
        countKeGangFans(acc, packs);
        countAssociatedCombinationFans(acc, packs);
        countSinglePackFans(acc, hand, packs);
        countWinModeFans(acc, hand, packs, zuhelongType);
      };
      var buildResult = (acc, hand, packs) => {
        const fans = acc.getFans();
        const fanIds = acc.getFanIds();
        const totalFan = acc.getTotal();
        return canonicalizeCandidate({
          isHu: true,
          totalFan,
          fanIds,
          fans,
          decomposition: packs ? { packs } : null
        });
      };
      var evaluateFanRules = (input, overrides = {}) => {
        const hand = normalizeHandInput(input, overrides);
        let bestResult = null;
        let bestTotal = 0;
        const tileBitmap = collectTileBitmap(hand.tiles);
        const zuhelongType = judgeZuhelong(tileBitmap);
        if (isCompleteClosedHand(hand)) {
          const specialFan = judgeCompleteSpecialHu(hand);
          if (specialFan) {
            const acc = new FanAccumulator();
            acc.addFan(specialFan);
            countWinModeFans(acc, hand, [], 0);
            if (zuhelongType > 0) {
              acc.addFan(constants2.FAN_ZUHELONG, []);
            }
            acc.excludeFan(constants2.FAN_BUQIUREN);
            acc.excludeFan(constants2.FAN_MENQIANQING);
            if (hand.context.zimo) {
              acc.fanTable.delete(constants2.FAN_ZIMO);
              acc.excludedTable.delete(constants2.FAN_ZIMO);
              acc.addFan(constants2.FAN_ZIMO);
            }
            acc.applyExclusions();
            if (acc.getTotal() === 0) {
              acc.addFan(constants2.FAN_WUFANHU);
            }
            if (acc.getTotal() > bestTotal) {
              bestTotal = acc.getTotal();
              bestResult = buildResult(acc, hand, null);
            }
          }
        }
        if (isCompleteClosedHand(hand)) {
          const qiduiFan = judgeQidui(hand);
          if (qiduiFan) {
            const acc = new FanAccumulator();
            acc.addFan(qiduiFan);
            countOverallAttrFans(acc, hand, [], 0);
            countWinModeFans(acc, hand, [], 0);
            acc.excludeFan(constants2.FAN_BUQIUREN);
            acc.excludeFan(constants2.FAN_MENQIANQING);
            if (qiduiFan === constants2.FAN_LIANQIDUI) {
              acc.excludeFan(constants2.FAN_QINGYISE);
              acc.excludeFan(constants2.FAN_WUZI);
            }
            if (hand.context.zimo) {
              acc.fanTable.delete(constants2.FAN_ZIMO);
              acc.excludedTable.delete(constants2.FAN_ZIMO);
              acc.addFan(constants2.FAN_ZIMO);
            }
            acc.applyExclusions();
            if (acc.getTotal() === 0) {
              acc.addFan(constants2.FAN_WUFANHU);
            }
            if (acc.getTotal() > bestTotal) {
              bestTotal = acc.getTotal();
              bestResult = buildResult(acc, hand, null);
            }
          }
        }
        const isBukao = isQuanbukao(hand) || isQixingbukao(hand);
        let zuhelongBitmap = zuhelongType > 0 ? constants2.ZuhelongBitmap[zuhelongType] : 0n;
        let sortedTiles = hand.tiles.slice();
        if (zuhelongBitmap && !isBukao) {
          const remaining = [];
          let bm = zuhelongBitmap;
          for (const tile of sortedTiles) {
            const tbm = tile.GetBitmap();
            if (bm & tbm) {
              bm ^= tbm;
            } else {
              remaining.push(tile);
            }
          }
          sortedTiles = remaining;
        }
        const decompositions = enumerateDecompositions({
          ...hand,
          tiles: sortedTiles
        });
        const winTileId = hand.winningTile ? hand.winningTile.GetId() : hand.tiles.length > 0 ? hand.tiles[hand.tiles.length - 1].GetId() : 0;
        if (winTileId > 0) {
          markWinningTilePacks(
            decompositions,
            winTileId,
            hand.packs.length,
            hand.context.zimo
          );
        }
        for (const packs of decompositions) {
          const acc = new FanAccumulator();
          countBasicFans(acc, hand, packs, 0);
          acc.applyExclusions();
          if (acc.getTotal() === 0) {
            acc.addFan(constants2.FAN_WUFANHU);
          }
          if (acc.getTotal() > bestTotal) {
            bestTotal = acc.getTotal();
            bestResult = buildResult(acc, hand, packs);
          }
        }
        if (zuhelongBitmap && !isBukao) {
          const zuhelongDecomps = enumerateZuhelongDecompositions(hand, zuhelongType);
          for (const { packs: decompPacks, zuhelongPack } of zuhelongDecomps) {
            const packs = [...hand.packs, ...decompPacks];
            markWinningTilePacks(
              [packs],
              winTileId,
              hand.packs.length,
              hand.context.zimo
            );
            const acc = new FanAccumulator();
            countBasicFans(acc, hand, packs, zuhelongType);
            acc.applyExclusions();
            if (acc.hasFan(constants2.FAN_WUFANHU)) {
              acc.fanTable.delete(constants2.FAN_WUFANHU);
            }
            const zlIdx = packs.indexOf(zuhelongPack);
            acc.addFan(constants2.FAN_ZUHELONG, zlIdx >= 0 ? [zlIdx] : []);
            if (acc.getTotal() > bestTotal) {
              bestTotal = acc.getTotal();
              bestResult = buildResult(acc, hand, packs);
            }
          }
        }
        if (bestResult && hand.flowers && hand.flowers.length > 0) {
          for (let i = 0; i < hand.flowers.length; i++) {
            bestResult.fans.push({
              fanId: constants2.FAN_HUAPAI,
              score: constants2.FAN_SCORE[constants2.FAN_HUAPAI],
              matchedPacks: []
            });
            bestResult.fanIds.push(constants2.FAN_HUAPAI);
          }
          bestResult.totalFan += hand.flowers.length;
          bestResult.fanIds.sort((a, b) => a - b);
        }
        if (!bestResult) {
          return createEmptyFanResult();
        }
        return bestResult;
      };
      module.exports = {
        evaluateFanRules,
        calcTing
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/fan-calculator.js
  var require_fan_calculator = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/fan-calculator.js"(exports, module) {
      "use strict";
      var { normalizeHandInput } = require_normalize_hand();
      var { evaluateFanRules } = require_fan_rules();
      var FanCalculator = class {
        count(input, overrides = {}) {
          const hand = normalizeHandInput(input, overrides);
          return evaluateFanRules(hand);
        }
      };
      module.exports = FanCalculator;
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/special-hu.js
  var require_special_hu = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/special-hu.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var ZUHELONG_COMBINATIONS = [
        [
          [constants2.TILE_1m, constants2.TILE_4m, constants2.TILE_7m],
          [constants2.TILE_2s, constants2.TILE_5s, constants2.TILE_8s],
          [constants2.TILE_3p, constants2.TILE_6p, constants2.TILE_9p]
        ],
        [
          [constants2.TILE_1m, constants2.TILE_4m, constants2.TILE_7m],
          [constants2.TILE_2p, constants2.TILE_5p, constants2.TILE_8p],
          [constants2.TILE_3s, constants2.TILE_6s, constants2.TILE_9s]
        ],
        [
          [constants2.TILE_1s, constants2.TILE_4s, constants2.TILE_7s],
          [constants2.TILE_2m, constants2.TILE_5m, constants2.TILE_8m],
          [constants2.TILE_3p, constants2.TILE_6p, constants2.TILE_9p]
        ],
        [
          [constants2.TILE_1s, constants2.TILE_4s, constants2.TILE_7s],
          [constants2.TILE_2p, constants2.TILE_5p, constants2.TILE_8p],
          [constants2.TILE_3m, constants2.TILE_6m, constants2.TILE_9m]
        ],
        [
          [constants2.TILE_1p, constants2.TILE_4p, constants2.TILE_7p],
          [constants2.TILE_2m, constants2.TILE_5m, constants2.TILE_8m],
          [constants2.TILE_3s, constants2.TILE_6s, constants2.TILE_9s]
        ],
        [
          [constants2.TILE_1p, constants2.TILE_4p, constants2.TILE_7p],
          [constants2.TILE_2s, constants2.TILE_5s, constants2.TILE_8s],
          [constants2.TILE_3m, constants2.TILE_6m, constants2.TILE_9m]
        ]
      ];
      var SHISANYAO_TILES = /* @__PURE__ */ new Set([
        constants2.TILE_1m,
        constants2.TILE_9m,
        constants2.TILE_1s,
        constants2.TILE_9s,
        constants2.TILE_1p,
        constants2.TILE_9p,
        constants2.TILE_E,
        constants2.TILE_S,
        constants2.TILE_W,
        constants2.TILE_N,
        constants2.TILE_C,
        constants2.TILE_F,
        constants2.TILE_P
      ]);
      var isCompleteClosedHand = (hand) => Boolean(hand) && hand.packs.length === 0 && hand.tiles.length === 14;
      var buildCounts = (hand) => {
        const counts = /* @__PURE__ */ new Map();
        hand.tiles.forEach((tile) => {
          const id = tile.GetId();
          counts.set(id, (counts.get(id) ?? 0) + 1);
        });
        return counts;
      };
      var isQidui = (hand) => {
        if (!isCompleteClosedHand(hand)) {
          return false;
        }
        let pairCount = 0;
        for (const count of buildCounts(hand).values()) {
          if (count !== 2 && count !== 4) {
            return false;
          }
          pairCount += count / 2;
        }
        return pairCount === 7;
      };
      var isShisanyao = (hand) => {
        if (!isCompleteClosedHand(hand)) {
          return false;
        }
        const uniqueTiles = new Set(hand.tiles.map((tile) => tile.GetId()));
        if (uniqueTiles.size !== 13) {
          return false;
        }
        return hand.tiles.every((tile) => SHISANYAO_TILES.has(tile.GetId()));
      };
      var isMeaningfulTile = (tileId) => tileId >= constants2.TILE_1m && tileId <= constants2.TILE_P;
      var isHonorTile = (tileId) => tileId >= constants2.TILE_E && tileId <= constants2.TILE_P;
      var isPartOfZuhelong = (numberedTiles) => ZUHELONG_COMBINATIONS.some((combination) => {
        const allowedTiles = new Set(combination.flat());
        return numberedTiles.every((tileId) => allowedTiles.has(tileId));
      });
      var isBukaoStructure = (hand) => {
        if (!isCompleteClosedHand(hand)) {
          return false;
        }
        const tileIds = hand.tiles.map((tile) => tile.GetId());
        const uniqueTiles = new Set(tileIds);
        if (uniqueTiles.size !== 14 || !tileIds.every(isMeaningfulTile)) {
          return false;
        }
        const numberedTiles = tileIds.filter((tileId) => tileId <= constants2.TILE_9p);
        return isPartOfZuhelong(numberedTiles);
      };
      var isQuanbukao = (hand) => {
        if (!isBukaoStructure(hand)) {
          return false;
        }
        const honorCount = hand.tiles.filter((tile) => isHonorTile(tile.GetId())).length;
        return honorCount < 7;
      };
      var isQixingbukao = (hand) => {
        if (!isBukaoStructure(hand)) {
          return false;
        }
        const honorCount = hand.tiles.filter((tile) => isHonorTile(tile.GetId())).length;
        return honorCount === 7;
      };
      function hasSpecialHu(hand) {
        return isQidui(hand) || isShisanyao(hand) || isQuanbukao(hand) || isQixingbukao(hand);
      }
      module.exports = {
        hasSpecialHu,
        isQidui,
        isShisanyao,
        isQuanbukao,
        isQixingbukao
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/judge-hu.js
  var require_judge_hu = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/judge-hu.js"(exports, module) {
      "use strict";
      var { normalizeHandInput } = require_normalize_hand();
      var { enumerateDecompositions } = require_decomposition();
      var { hasSpecialHu } = require_special_hu();
      var judgeHu = (input, options = {}) => {
        const hand = normalizeHandInput(input, options);
        return enumerateDecompositions(hand).length > 0 || hasSpecialHu(hand);
      };
      module.exports = {
        judgeHu,
        hasSpecialHu,
        normalizeHandInput
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/solver/calc-ting.js
  var require_calc_ting2 = __commonJS({
    "node_modules/gb-mahjong-js/lib/solver/calc-ting.js"(exports, module) {
      "use strict";
      var constants2 = require_constants();
      var Tile = require_tile();
      var Hand = require_hand();
      var { normalizeHandInput } = require_normalize_hand();
      var { judgeHu } = require_judge_hu();
      var compareTiles = (left, right) => left.GetId() - right.GetId();
      var isWinningTileCandidate = (tileId) => tileId >= constants2.TILE_1m && tileId <= constants2.TILE_P;
      var toTile = (tile) => tile instanceof Tile ? tile.clone() : new Tile(tile);
      var createVisibleTileTable = (hand) => {
        const counts = Array(constants2.TILE_MAJIANG + 1).fill(0);
        hand.tiles.forEach((tile) => {
          counts[tile.GetId()] += 1;
        });
        hand.packs.forEach((pack) => {
          pack.GetAllTile().forEach((tile) => {
            counts[tile.GetId()] += 1;
          });
        });
        return counts;
      };
      var cloneHandWithWinningTile = (hand, tile) => {
        const winningTile = toTile(tile);
        const tiles = hand.tiles.slice();
        if (hand.winningTile !== null) {
          const winningTileIndex = tiles.findIndex(
            (candidate) => candidate.GetId() === hand.winningTile.GetId()
          );
          if (winningTileIndex !== -1) {
            tiles.splice(winningTileIndex, 1);
          }
        }
        tiles.push(winningTile.clone());
        tiles.sort(compareTiles);
        return new Hand({
          tiles,
          packs: hand.packs.slice(),
          winningTile,
          flowers: hand.flowers.slice(),
          context: hand.context,
          source: hand.source
        });
      };
      var judgeHuTileForHand = (hand, tile) => {
        const tileId = tile instanceof Tile ? tile.GetId() : tile;
        if (!isWinningTileCandidate(tileId)) {
          return false;
        }
        return judgeHu(cloneHandWithWinningTile(hand, tileId));
      };
      var judgeHuTile = (input, tile, options = {}) => {
        const hand = normalizeHandInput(input, options);
        return judgeHuTileForHand(hand, tile);
      };
      var calcTing = (input, options = {}) => {
        const hand = normalizeHandInput(input, options);
        const visibleTileTable = createVisibleTileTable(hand);
        return Array.from(
          { length: constants2.TILE_P - constants2.TILE_1m + 1 },
          (_, index) => constants2.TILE_1m + index
        ).filter(
          (tileId) => (options.includeExhaustedTile || visibleTileTable[tileId] < 4) && judgeHuTileForHand(hand, tileId)
        ).map((tileId) => new Tile(tileId)).sort(compareTiles);
      };
      module.exports = {
        calcTing,
        cloneHandWithWinningTile,
        judgeHuTile
      };
    }
  });

  // node_modules/gb-mahjong-js/lib/parser/format-hand.js
  var require_format_hand = __commonJS({
    "node_modules/gb-mahjong-js/lib/parser/format-hand.js"(exports, module) {
      "use strict";
      var { legacyFromHand } = require_legacy_adapter();
      var formatHand = (input) => legacyFromHand(input).HandtilesToString();
      module.exports = formatHand;
    }
  });

  // node_modules/gb-mahjong-js/lib/api/index.js
  var require_api = __commonJS({
    "node_modules/gb-mahjong-js/lib/api/index.js"(exports, module) {
      "use strict";
      var Tile = require_tile();
      var Pack = require_pack();
      var Hand = require_hand();
      var WinContext = require_win_context();
      var FanResult = require_fan_result();
      var DecompositionPack = require_decomposition_pack();
      var FanCalculator = require_fan_calculator();
      var { judgeHu: judgeHuSolver } = require_judge_hu();
      var {
        judgeHuTile: judgeHuTileSolver,
        calcTing: calcTingSolver
      } = require_calc_ting2();
      var parseHand = require_parse_hand();
      var formatHand = require_format_hand();
      var { HandParseError } = require_errors();
      var judgeHu = (input, overrides = {}) => {
        return judgeHuSolver(input, overrides);
      };
      var judgeHuTile = (input, tile, overrides = {}) => {
        return judgeHuTileSolver(input, tile, overrides);
      };
      var calcTing = (input, options = {}) => {
        return calcTingSolver(input, options);
      };
      var countFan2 = (input, options = {}) => {
        const calculator = new FanCalculator();
        return calculator.count(input, options);
      };
      module.exports = {
        HandParseError,
        parseHand,
        formatHand,
        judgeHu,
        judgeHuTile,
        calcTing,
        countFan: countFan2,
        Tile,
        Pack,
        Hand,
        WinContext,
        FanResult,
        DecompositionPack,
        FanCalculator
      };
    }
  });

  // node_modules/qrcode/lib/can-promise.js
  var require_can_promise = __commonJS({
    "node_modules/qrcode/lib/can-promise.js"(exports, module) {
      module.exports = function() {
        return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
      };
    }
  });

  // node_modules/qrcode/lib/core/utils.js
  var require_utils = __commonJS({
    "node_modules/qrcode/lib/core/utils.js"(exports) {
      var toSJISFunction;
      var CODEWORDS_COUNT = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      exports.getSymbolSize = function getSymbolSize(version) {
        if (!version) throw new Error('"version" cannot be null or undefined');
        if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
        return version * 4 + 17;
      };
      exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
        return CODEWORDS_COUNT[version];
      };
      exports.getBCHDigit = function(data) {
        let digit = 0;
        while (data !== 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      };
      exports.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== "function") {
          throw new Error('"toSJISFunc" is not a valid function.');
        }
        toSJISFunction = f;
      };
      exports.isKanjiModeEnabled = function() {
        return typeof toSJISFunction !== "undefined";
      };
      exports.toSJIS = function toSJIS(kanji) {
        return toSJISFunction(kanji);
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-level.js
  var require_error_correction_level = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
      exports.L = { bit: 1 };
      exports.M = { bit: 0 };
      exports.Q = { bit: 3 };
      exports.H = { bit: 2 };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "l":
          case "low":
            return exports.L;
          case "m":
          case "medium":
            return exports.M;
          case "q":
          case "quartile":
            return exports.Q;
          case "h":
          case "high":
            return exports.H;
          default:
            throw new Error("Unknown EC Level: " + string);
        }
      }
      exports.isValid = function isValid(level) {
        return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
      };
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/bit-buffer.js
  var require_bit_buffer = __commonJS({
    "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
      function BitBuffer() {
        this.buffer = [];
        this.length = 0;
      }
      BitBuffer.prototype = {
        get: function(index) {
          const bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function(num, length) {
          for (let i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(bit) {
          const bufIndex = Math.floor(this.length / 8);
          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }
          if (bit) {
            this.buffer[bufIndex] |= 128 >>> this.length % 8;
          }
          this.length++;
        }
      };
      module.exports = BitBuffer;
    }
  });

  // node_modules/qrcode/lib/core/bit-matrix.js
  var require_bit_matrix = __commonJS({
    "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
      function BitMatrix(size) {
        if (!size || size < 1) {
          throw new Error("BitMatrix size must be defined and greater than 0");
        }
        this.size = size;
        this.data = new Uint8Array(size * size);
        this.reservedBit = new Uint8Array(size * size);
      }
      BitMatrix.prototype.set = function(row, col, value, reserved) {
        const index = row * this.size + col;
        this.data[index] = value;
        if (reserved) this.reservedBit[index] = true;
      };
      BitMatrix.prototype.get = function(row, col) {
        return this.data[row * this.size + col];
      };
      BitMatrix.prototype.xor = function(row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      BitMatrix.prototype.isReserved = function(row, col) {
        return this.reservedBit[row * this.size + col];
      };
      module.exports = BitMatrix;
    }
  });

  // node_modules/qrcode/lib/core/alignment-pattern.js
  var require_alignment_pattern = __commonJS({
    "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1) return [];
        const posCount = Math.floor(version / 7) + 2;
        const size = getSymbolSize(version);
        const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        const positions = [size - 7];
        for (let i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6);
        return positions.reverse();
      };
      exports.getPositions = function getPositions(version) {
        const coords = [];
        const pos = exports.getRowColCoords(version);
        const posLength = pos.length;
        for (let i = 0; i < posLength; i++) {
          for (let j = 0; j < posLength; j++) {
            if (i === 0 && j === 0 || // top-left
            i === 0 && j === posLength - 1 || // bottom-left
            i === posLength - 1 && j === 0) {
              continue;
            }
            coords.push([pos[i], pos[j]]);
          }
        }
        return coords;
      };
    }
  });

  // node_modules/qrcode/lib/core/finder-pattern.js
  var require_finder_pattern = __commonJS({
    "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      var FINDER_PATTERN_SIZE = 7;
      exports.getPositions = function getPositions(version) {
        const size = getSymbolSize(version);
        return [
          // top-left
          [0, 0],
          // top-right
          [size - FINDER_PATTERN_SIZE, 0],
          // bottom-left
          [0, size - FINDER_PATTERN_SIZE]
        ];
      };
    }
  });

  // node_modules/qrcode/lib/core/mask-pattern.js
  var require_mask_pattern = __commonJS({
    "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      };
      exports.isValid = function isValid(mask) {
        return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
      };
      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : void 0;
      };
      exports.getPenaltyN1 = function getPenaltyN1(data) {
        const size = data.size;
        let points = 0;
        let sameCountCol = 0;
        let sameCountRow = 0;
        let lastCol = null;
        let lastRow = null;
        for (let row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;
          for (let col = 0; col < size; col++) {
            let module2 = data.get(row, col);
            if (module2 === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module2;
              sameCountCol = 1;
            }
            module2 = data.get(col, row);
            if (module2 === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module2;
              sameCountRow = 1;
            }
          }
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
      };
      exports.getPenaltyN2 = function getPenaltyN2(data) {
        const size = data.size;
        let points = 0;
        for (let row = 0; row < size - 1; row++) {
          for (let col = 0; col < size - 1; col++) {
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
          }
        }
        return points * PenaltyScores.N2;
      };
      exports.getPenaltyN3 = function getPenaltyN3(data) {
        const size = data.size;
        let points = 0;
        let bitsCol = 0;
        let bitsRow = 0;
        for (let row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;
          for (let col = 0; col < size; col++) {
            bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
            if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
            bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
            if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
          }
        }
        return points * PenaltyScores.N3;
      };
      exports.getPenaltyN4 = function getPenaltyN4(data) {
        let darkCount = 0;
        const modulesCount = data.data.length;
        for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
        const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
        return k * PenaltyScores.N4;
      };
      function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
          case exports.Patterns.PATTERN001:
            return i % 2 === 0;
          case exports.Patterns.PATTERN010:
            return j % 3 === 0;
          case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
          case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
          case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
          case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      }
      exports.applyMask = function applyMask(pattern, data) {
        const size = data.size;
        for (let col = 0; col < size; col++) {
          for (let row = 0; row < size; row++) {
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };
      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        const numPatterns = Object.keys(exports.Patterns).length;
        let bestPattern = 0;
        let lowerPenalty = Infinity;
        for (let p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data);
          const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
          exports.applyMask(p, data);
          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }
        return bestPattern;
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-code.js
  var require_error_correction_code = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
      var ECLevel = require_error_correction_level();
      var EC_BLOCKS_TABLE = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ];
      var EC_CODEWORDS_TABLE = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/galois-field.js
  var require_galois_field = __commonJS({
    "node_modules/qrcode/lib/core/galois-field.js"(exports) {
      var EXP_TABLE = new Uint8Array(512);
      var LOG_TABLE = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1;
          if (x & 256) {
            x ^= 285;
          }
        }
        for (let i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      exports.log = function log(n) {
        if (n < 1) throw new Error("log(" + n + ")");
        return LOG_TABLE[n];
      };
      exports.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      exports.mul = function mul(x, y) {
        if (x === 0 || y === 0) return 0;
        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
    }
  });

  // node_modules/qrcode/lib/core/polynomial.js
  var require_polynomial = __commonJS({
    "node_modules/qrcode/lib/core/polynomial.js"(exports) {
      var GF = require_galois_field();
      exports.mul = function mul(p1, p2) {
        const coeff = new Uint8Array(p1.length + p2.length - 1);
        for (let i = 0; i < p1.length; i++) {
          for (let j = 0; j < p2.length; j++) {
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
          }
        }
        return coeff;
      };
      exports.mod = function mod(divident, divisor) {
        let result = new Uint8Array(divident);
        while (result.length - divisor.length >= 0) {
          const coeff = result[0];
          for (let i = 0; i < divisor.length; i++) {
            result[i] ^= GF.mul(divisor[i], coeff);
          }
          let offset = 0;
          while (offset < result.length && result[offset] === 0) offset++;
          result = result.slice(offset);
        }
        return result;
      };
      exports.generateECPolynomial = function generateECPolynomial(degree) {
        let poly = new Uint8Array([1]);
        for (let i = 0; i < degree; i++) {
          poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
        }
        return poly;
      };
    }
  });

  // node_modules/qrcode/lib/core/reed-solomon-encoder.js
  var require_reed_solomon_encoder = __commonJS({
    "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
      var Polynomial = require_polynomial();
      function ReedSolomonEncoder(degree) {
        this.genPoly = void 0;
        this.degree = degree;
        if (this.degree) this.initialize(this.degree);
      }
      ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      ReedSolomonEncoder.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error("Encoder not initialized");
        }
        const paddedData = new Uint8Array(data.length + this.degree);
        paddedData.set(data);
        const remainder = Polynomial.mod(paddedData, this.genPoly);
        const start = this.degree - remainder.length;
        if (start > 0) {
          const buff = new Uint8Array(this.degree);
          buff.set(remainder, start);
          return buff;
        }
        return remainder;
      };
      module.exports = ReedSolomonEncoder;
    }
  });

  // node_modules/qrcode/lib/core/version-check.js
  var require_version_check = __commonJS({
    "node_modules/qrcode/lib/core/version-check.js"(exports) {
      exports.isValid = function isValid(version) {
        return !isNaN(version) && version >= 1 && version <= 40;
      };
    }
  });

  // node_modules/qrcode/lib/core/regex.js
  var require_regex = __commonJS({
    "node_modules/qrcode/lib/core/regex.js"(exports) {
      var numeric = "[0-9]+";
      var alphanumeric = "[A-Z $%*+\\-./:]+";
      var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      kanji = kanji.replace(/u/g, "\\u");
      var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
      exports.KANJI = new RegExp(kanji, "g");
      exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      exports.BYTE = new RegExp(byte, "g");
      exports.NUMERIC = new RegExp(numeric, "g");
      exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
      var TEST_KANJI = new RegExp("^" + kanji + "$");
      var TEST_NUMERIC = new RegExp("^" + numeric + "$");
      var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      exports.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };
      exports.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };
      exports.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
    }
  });

  // node_modules/qrcode/lib/core/mode.js
  var require_mode = __commonJS({
    "node_modules/qrcode/lib/core/mode.js"(exports) {
      var VersionCheck = require_version_check();
      var Regex = require_regex();
      exports.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
      };
      exports.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
      };
      exports.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
      };
      exports.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
      };
      exports.MIXED = {
        bit: -1
      };
      exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid version: " + version);
        }
        if (version >= 1 && version < 10) return mode.ccBits[0];
        else if (version < 27) return mode.ccBits[1];
        return mode.ccBits[2];
      };
      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
        else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
        else if (Regex.testKanji(dataStr)) return exports.KANJI;
        else return exports.BYTE;
      };
      exports.toString = function toString(mode) {
        if (mode && mode.id) return mode.id;
        throw new Error("Invalid mode");
      };
      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "numeric":
            return exports.NUMERIC;
          case "alphanumeric":
            return exports.ALPHANUMERIC;
          case "kanji":
            return exports.KANJI;
          case "byte":
            return exports.BYTE;
          default:
            throw new Error("Unknown mode: " + string);
        }
      }
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/version.js
  var require_version = __commonJS({
    "node_modules/qrcode/lib/core/version.js"(exports) {
      var Utils = require_utils();
      var ECCode = require_error_correction_code();
      var ECLevel = require_error_correction_level();
      var Mode = require_mode();
      var VersionCheck = require_version_check();
      var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
      var G18_BCH = Utils.getBCHDigit(G18);
      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      function getReservedBitsCount(mode, version) {
        return Mode.getCharCountIndicator(mode, version) + 4;
      }
      function getTotalBitsFromDataArray(segments, version) {
        let totalBits = 0;
        segments.forEach(function(data) {
          const reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
      }
      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          const length = getTotalBitsFromDataArray(segments, currentVersion);
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      exports.from = function from(value, defaultValue) {
        if (VersionCheck.isValid(value)) {
          return parseInt(value, 10);
        }
        return defaultValue;
      };
      exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid QR Code version");
        }
        if (typeof mode === "undefined") mode = Mode.BYTE;
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode === Mode.MIXED) return dataTotalCodewordsBits;
        const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
        switch (mode) {
          case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
          case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
          case Mode.KANJI:
            return Math.floor(usableBits / 13);
          case Mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };
      exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
        let seg;
        const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
        if (Array.isArray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }
          if (data.length === 0) {
            return 1;
          }
          seg = data[0];
        } else {
          seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };
      exports.getEncodedBits = function getEncodedBits(version) {
        if (!VersionCheck.isValid(version) || version < 7) {
          throw new Error("Invalid QR Code version");
        }
        let d = version << 12;
        while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
        }
        return version << 12 | d;
      };
    }
  });

  // node_modules/qrcode/lib/core/format-info.js
  var require_format_info = __commonJS({
    "node_modules/qrcode/lib/core/format-info.js"(exports) {
      var Utils = require_utils();
      var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      var G15_BCH = Utils.getBCHDigit(G15);
      exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
        const data = errorCorrectionLevel.bit << 3 | mask;
        let d = data << 10;
        while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
        }
        return (data << 10 | d) ^ G15_MASK;
      };
    }
  });

  // node_modules/qrcode/lib/core/numeric-data.js
  var require_numeric_data = __commonJS({
    "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
      var Mode = require_mode();
      function NumericData(data) {
        this.mode = Mode.NUMERIC;
        this.data = data.toString();
      }
      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };
      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };
      NumericData.prototype.write = function write(bitBuffer) {
        let i, group, value;
        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer.put(value, 10);
        }
        const remainingNum = this.data.length - i;
        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer.put(value, remainingNum * 3 + 1);
        }
      };
      module.exports = NumericData;
    }
  });

  // node_modules/qrcode/lib/core/alphanumeric-data.js
  var require_alphanumeric_data = __commonJS({
    "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
      var Mode = require_mode();
      var ALPHA_NUM_CHARS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function AlphanumericData(data) {
        this.mode = Mode.ALPHANUMERIC;
        this.data = data;
      }
      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };
      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };
      AlphanumericData.prototype.write = function write(bitBuffer) {
        let i;
        for (i = 0; i + 2 <= this.data.length; i += 2) {
          let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
          bitBuffer.put(value, 11);
        }
        if (this.data.length % 2) {
          bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };
      module.exports = AlphanumericData;
    }
  });

  // node_modules/qrcode/lib/core/byte-data.js
  var require_byte_data = __commonJS({
    "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
      var Mode = require_mode();
      function ByteData(data) {
        this.mode = Mode.BYTE;
        if (typeof data === "string") {
          this.data = new TextEncoder().encode(data);
        } else {
          this.data = new Uint8Array(data);
        }
      }
      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };
      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };
      ByteData.prototype.write = function(bitBuffer) {
        for (let i = 0, l = this.data.length; i < l; i++) {
          bitBuffer.put(this.data[i], 8);
        }
      };
      module.exports = ByteData;
    }
  });

  // node_modules/qrcode/lib/core/kanji-data.js
  var require_kanji_data = __commonJS({
    "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
      var Mode = require_mode();
      var Utils = require_utils();
      function KanjiData(data) {
        this.mode = Mode.KANJI;
        this.data = data;
      }
      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };
      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };
      KanjiData.prototype.write = function(bitBuffer) {
        let i;
        for (i = 0; i < this.data.length; i++) {
          let value = Utils.toSJIS(this.data[i]);
          if (value >= 33088 && value <= 40956) {
            value -= 33088;
          } else if (value >= 57408 && value <= 60351) {
            value -= 49472;
          } else {
            throw new Error(
              "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
            );
          }
          value = (value >>> 8 & 255) * 192 + (value & 255);
          bitBuffer.put(value, 13);
        }
      };
      module.exports = KanjiData;
    }
  });

  // node_modules/dijkstrajs/dijkstra.js
  var require_dijkstra = __commonJS({
    "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
      "use strict";
      var dijkstra = {
        single_source_shortest_paths: function(graph, s, d) {
          var predecessors = {};
          var costs = {};
          costs[s] = 0;
          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);
          var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
          while (!open.empty()) {
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            adjacent_nodes = graph[u] || {};
            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                cost_of_e = adjacent_nodes[v];
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }
          if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
            throw new Error(msg);
          }
          return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function(predecessors, d) {
          var nodes = [];
          var u = d;
          var predecessor;
          while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
          }
          nodes.reverse();
          return nodes;
        },
        find_path: function(graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(
            predecessors,
            d
          );
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for (key in T) {
              if (T.hasOwnProperty(key)) {
                t[key] = T[key];
              }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },
          default_sorter: function(a, b) {
            return a.cost - b.cost;
          },
          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function(value, cost) {
            var item = { value, cost };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },
          /**
           * Return the highest priority element in the queue.
           */
          pop: function() {
            return this.queue.shift();
          },
          empty: function() {
            return this.queue.length === 0;
          }
        }
      };
      if (typeof module !== "undefined") {
        module.exports = dijkstra;
      }
    }
  });

  // node_modules/qrcode/lib/core/segments.js
  var require_segments = __commonJS({
    "node_modules/qrcode/lib/core/segments.js"(exports) {
      var Mode = require_mode();
      var NumericData = require_numeric_data();
      var AlphanumericData = require_alphanumeric_data();
      var ByteData = require_byte_data();
      var KanjiData = require_kanji_data();
      var Regex = require_regex();
      var Utils = require_utils();
      var dijkstra = require_dijkstra();
      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }
      function getSegments(regex, mode, str) {
        const segments = [];
        let result;
        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode,
            length: result[0].length
          });
        }
        return segments;
      }
      function getSegmentsFromString(dataStr) {
        const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
        const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
        let byteSegs;
        let kanjiSegs;
        if (Utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
          kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
          kanjiSegs = [];
        }
        const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs.sort(function(s1, s2) {
          return s1.index - s2.index;
        }).map(function(obj) {
          return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
          };
        });
      }
      function getSegmentBitsLength(length, mode) {
        switch (mode) {
          case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
          case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
          case Mode.KANJI:
            return KanjiData.getBitsLength(length);
          case Mode.BYTE:
            return ByteData.getBitsLength(length);
        }
      }
      function mergeSegments(segs) {
        return segs.reduce(function(acc, curr) {
          const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }
          acc.push(curr);
          return acc;
        }, []);
      }
      function buildNodes(segs) {
        const nodes = [];
        for (let i = 0; i < segs.length; i++) {
          const seg = segs[i];
          switch (seg.mode) {
            case Mode.NUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.ALPHANUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.KANJI:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
              break;
            case Mode.BYTE:
              nodes.push([
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
          }
        }
        return nodes;
      }
      function buildGraph(nodes, version) {
        const table = {};
        const graph = { start: {} };
        let prevNodeIds = ["start"];
        for (let i = 0; i < nodes.length; i++) {
          const nodeGroup = nodes[i];
          const currentNodeIds = [];
          for (let j = 0; j < nodeGroup.length; j++) {
            const node = nodeGroup[j];
            const key = "" + i + j;
            currentNodeIds.push(key);
            table[key] = { node, lastCount: 0 };
            graph[key] = {};
            for (let n = 0; n < prevNodeIds.length; n++) {
              const prevNodeId = prevNodeIds[n];
              if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
              }
            }
          }
          prevNodeIds = currentNodeIds;
        }
        for (let n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]].end = 0;
        }
        return { map: graph, table };
      }
      function buildSingleSegment(data, modesHint) {
        let mode;
        const bestMode = Mode.getBestModeForData(data);
        mode = Mode.from(modesHint, bestMode);
        if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
          throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
        }
        if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
          mode = Mode.BYTE;
        }
        switch (mode) {
          case Mode.NUMERIC:
            return new NumericData(data);
          case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
          case Mode.KANJI:
            return new KanjiData(data);
          case Mode.BYTE:
            return new ByteData(data);
        }
      }
      exports.fromArray = function fromArray(array) {
        return array.reduce(function(acc, seg) {
          if (typeof seg === "string") {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }
          return acc;
        }, []);
      };
      exports.fromString = function fromString(data, version) {
        const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
        const nodes = buildNodes(segs);
        const graph = buildGraph(nodes, version);
        const path = dijkstra.find_path(graph.map, "start", "end");
        const optimizedSegs = [];
        for (let i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
      };
      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(
          getSegmentsFromString(data, Utils.isKanjiModeEnabled())
        );
      };
    }
  });

  // node_modules/qrcode/lib/core/qrcode.js
  var require_qrcode = __commonJS({
    "node_modules/qrcode/lib/core/qrcode.js"(exports) {
      var Utils = require_utils();
      var ECLevel = require_error_correction_level();
      var BitBuffer = require_bit_buffer();
      var BitMatrix = require_bit_matrix();
      var AlignmentPattern = require_alignment_pattern();
      var FinderPattern = require_finder_pattern();
      var MaskPattern = require_mask_pattern();
      var ECCode = require_error_correction_code();
      var ReedSolomonEncoder = require_reed_solomon_encoder();
      var Version = require_version();
      var FormatInfo = require_format_info();
      var Mode = require_mode();
      var Segments = require_segments();
      function setupFinderPattern(matrix, version) {
        const size = matrix.size;
        const pos = FinderPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r) continue;
            for (let c = -1; c <= 7; c++) {
              if (col + c <= -1 || size <= col + c) continue;
              if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupTimingPattern(matrix) {
        const size = matrix.size;
        for (let r = 8; r < size - 8; r++) {
          const value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      function setupAlignmentPattern(matrix, version) {
        const pos = AlignmentPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupVersionInfo(matrix, version) {
        const size = matrix.size;
        const bits = Version.getEncodedBits(version);
        let row, col, mod;
        for (let i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
        const size = matrix.size;
        const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
        let i, mod;
        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1;
          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size - 15 + i, 8, mod, true);
          }
          if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        }
        matrix.set(size - 8, 8, 1, true);
      }
      function setupData(matrix, data) {
        const size = matrix.size;
        let inc = -1;
        let row = size - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        for (let col = size - 1; col > 0; col -= 2) {
          if (col === 6) col--;
          while (true) {
            for (let c = 0; c < 2; c++) {
              if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || size <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      function createData(version, errorCorrectionLevel, segments) {
        const buffer = new BitBuffer();
        segments.forEach(function(data) {
          buffer.put(data.mode.bit, 4);
          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
          data.write(buffer);
        });
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        }
        const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
        for (let i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 17 : 236, 8);
        }
        return createCodewords(buffer, version, errorCorrectionLevel);
      }
      function createCodewords(bitBuffer, version, errorCorrectionLevel) {
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewords = totalCodewords - ecTotalCodewords;
        const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
        const blocksInGroup2 = totalCodewords % ecTotalBlocks;
        const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
        const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
        const rs = new ReedSolomonEncoder(ecCount);
        let offset = 0;
        const dcData = new Array(ecTotalBlocks);
        const ecData = new Array(ecTotalBlocks);
        let maxDataSize = 0;
        const buffer = new Uint8Array(bitBuffer.buffer);
        for (let b = 0; b < ecTotalBlocks; b++) {
          const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
          dcData[b] = buffer.slice(offset, offset + dataSize);
          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        }
        const data = new Uint8Array(totalCodewords);
        let index = 0;
        let i, r;
        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        }
        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }
        return data;
      }
      function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
        let segments;
        if (Array.isArray(data)) {
          segments = Segments.fromArray(data);
        } else if (typeof data === "string") {
          let estimatedVersion = version;
          if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
          }
          segments = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error("Invalid data");
        }
        const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
        if (!bestVersion) {
          throw new Error("The amount of data is too big to be stored in a QR Code");
        }
        if (!version) {
          version = bestVersion;
        } else if (version < bestVersion) {
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
          );
        }
        const dataBits = createData(version, errorCorrectionLevel, segments);
        const moduleCount = Utils.getSymbolSize(version);
        const modules = new BitMatrix(moduleCount);
        setupFinderPattern(modules, version);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version);
        setupFormatInfo(modules, errorCorrectionLevel, 0);
        if (version >= 7) {
          setupVersionInfo(modules, version);
        }
        setupData(modules, dataBits);
        if (isNaN(maskPattern)) {
          maskPattern = MaskPattern.getBestMask(
            modules,
            setupFormatInfo.bind(null, modules, errorCorrectionLevel)
          );
        }
        MaskPattern.applyMask(maskPattern, modules);
        setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
        return {
          modules,
          version,
          errorCorrectionLevel,
          maskPattern,
          segments
        };
      }
      exports.create = function create(data, options) {
        if (typeof data === "undefined" || data === "") {
          throw new Error("No input text");
        }
        let errorCorrectionLevel = ECLevel.M;
        let version;
        let mask;
        if (typeof options !== "undefined") {
          errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);
          if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
          }
        }
        return createSymbol(data, version, errorCorrectionLevel, mask);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/utils.js
  var require_utils2 = __commonJS({
    "node_modules/qrcode/lib/renderer/utils.js"(exports) {
      function hex2rgba(hex) {
        if (typeof hex === "number") {
          hex = hex.toString();
        }
        if (typeof hex !== "string") {
          throw new Error("Color should be defined as hex string");
        }
        let hexCode = hex.slice().replace("#", "").split("");
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error("Invalid hex color: " + hex);
        }
        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [c, c];
          }));
        }
        if (hexCode.length === 6) hexCode.push("F", "F");
        const hexValue = parseInt(hexCode.join(""), 16);
        return {
          r: hexValue >> 24 & 255,
          g: hexValue >> 16 & 255,
          b: hexValue >> 8 & 255,
          a: hexValue & 255,
          hex: "#" + hexCode.slice(0, 6).join("")
        };
      }
      exports.getOptions = function getOptions(options) {
        if (!options) options = {};
        if (!options.color) options.color = {};
        const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
        const width = options.width && options.width >= 21 ? options.width : void 0;
        const scale = options.scale || 4;
        return {
          width,
          scale: width ? 4 : scale,
          margin,
          color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {}
        };
      };
      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
      };
      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        const scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };
      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        const size = qr.modules.size;
        const data = qr.modules.data;
        const scale = exports.getScale(size, opts);
        const symbolSize = Math.floor((size + opts.margin * 2) * scale);
        const scaledMargin = opts.margin * scale;
        const palette = [opts.color.light, opts.color.dark];
        for (let i = 0; i < symbolSize; i++) {
          for (let j = 0; j < symbolSize; j++) {
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
              const iSrc = Math.floor((i - scaledMargin) / scale);
              const jSrc = Math.floor((j - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
    }
  });

  // node_modules/qrcode/lib/renderer/canvas.js
  var require_canvas = __commonJS({
    "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
      var Utils = require_utils2();
      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style) canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + "px";
        canvas.style.width = size + "px";
      }
      function getCanvasElement() {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }
      exports.render = function render(qrData, canvas, options) {
        let opts = options;
        let canvasEl = canvas;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!canvas) {
          canvasEl = getCanvasElement();
        }
        opts = Utils.getOptions(opts);
        const size = Utils.getImageWidth(qrData.modules.size, opts);
        const ctx = canvasEl.getContext("2d");
        const image = ctx.createImageData(size, size);
        Utils.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
      };
      exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        let opts = options;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!opts) opts = {};
        const canvasEl = exports.render(qrData, canvas, opts);
        const type = opts.type || "image/png";
        const rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/svg-tag.js
  var require_svg_tag = __commonJS({
    "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
      var Utils = require_utils2();
      function getColorAttrib(color, attrib) {
        const alpha = color.a / 255;
        const str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }
      function svgCmd(cmd, x, y) {
        let str = cmd + x;
        if (typeof y !== "undefined") str += " " + y;
        return str;
      }
      function qrToPath(data, size, margin) {
        let path = "";
        let moveBy = 0;
        let newRow = false;
        let lineLength = 0;
        for (let i = 0; i < data.length; i++) {
          const col = Math.floor(i % size);
          const row = Math.floor(i / size);
          if (!col && !newRow) newRow = true;
          if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
              moveBy = 0;
              newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
              path += svgCmd("h", lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }
        return path;
      }
      exports.render = function render(qrData, options, cb) {
        const opts = Utils.getOptions(options);
        const size = qrData.modules.size;
        const data = qrData.modules.data;
        const qrcodesize = size + opts.margin * 2;
        const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
        const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
        const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
        const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
        const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
        if (typeof cb === "function") {
          cb(null, svgTag);
        }
        return svgTag;
      };
    }
  });

  // node_modules/qrcode/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/qrcode/lib/browser.js"(exports) {
      var canPromise = require_can_promise();
      var QRCode2 = require_qrcode();
      var CanvasRenderer = require_canvas();
      var SvgRenderer = require_svg_tag();
      function renderCanvas(renderFunc, canvas, text, opts, cb) {
        const args = [].slice.call(arguments, 1);
        const argsNum = args.length;
        const isLastArgCb = typeof args[argsNum - 1] === "function";
        if (!isLastArgCb && !canPromise()) {
          throw new Error("Callback required as last argument");
        }
        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
              cb = opts;
              opts = void 0;
            } else {
              cb = opts;
              opts = text;
              text = canvas;
              canvas = void 0;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 1) {
            text = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = void 0;
          }
          return new Promise(function(resolve, reject) {
            try {
              const data = QRCode2.create(text, opts);
              resolve(renderFunc(data, canvas, opts));
            } catch (e) {
              reject(e);
            }
          });
        }
        try {
          const data = QRCode2.create(text, opts);
          cb(null, renderFunc(data, canvas, opts));
        } catch (e) {
          cb(e);
        }
      }
      exports.create = QRCode2.create;
      exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
      exports.toString = renderCanvas.bind(null, function(data, _, opts) {
        return SvgRenderer.render(data, opts);
      });
    }
  });

  // src/app.js
  var import_api = __toESM(require_api(), 1);
  var import_constants = __toESM(require_constants(), 1);
  var import_qrcode = __toESM(require_browser(), 1);

  // src/fans.js
  var FANS = [
    { name: "大四喜", points: 88, group: "字牌系列", description: "由东、南、西、北四副风刻或风杠组成的和牌。", excludes: "小四喜、三风刻、碰碰和、圈风刻、门风刻、幺九刻" },
    { name: "大三元", points: 88, group: "字牌系列", description: "和牌中有中、发、白三副箭刻或箭杠。", excludes: "小三元、双箭刻、箭刻" },
    { name: "绿一色", points: 88, group: "花色组合系列", description: "只由二、三、四、六、八条及发组成的和牌。", excludes: "混一色" },
    { name: "九莲宝灯", points: 88, group: "特殊系列", description: "一种花色的 1112345678999，再加同花色任意一张。", excludes: "清一色、门前清、不求人、幺九刻" },
    { name: "四杠", points: 88, group: "杠牌系列", description: "四个杠与将牌组成的和牌。", excludes: "三杠、双暗杠、双明杠、碰碰和、单钓将" },
    { name: "连七对", points: 88, group: "七对系列", description: "一种花色中，序数连续的七个对子。", excludes: "七对、清一色、平和" },
    { name: "十三幺", points: 88, group: "特殊系列", description: "三种序数牌的一九、七种字牌，以及其中一对作将。", excludes: "五门齐、门前清、不求人、单钓将" },
    { name: "清幺九", points: 64, group: "刻牌系列", description: "只由序数牌一、九的刻子、顺子及将牌组成。", excludes: "碰碰和、混幺九、幺九刻、无字" },
    { name: "小四喜", points: 64, group: "字牌系列", description: "三副风刻或风杠，另以风牌作将。", excludes: "大四喜、三风刻" },
    { name: "小三元", points: 64, group: "字牌系列", description: "两副箭刻或箭杠，另以箭牌作将。", excludes: "大三元、双箭刻、箭刻" },
    { name: "字一色", points: 64, group: "字牌系列", description: "全部由字牌的刻子、杠和将牌组成。", excludes: "碰碰和" },
    { name: "四暗刻", points: 64, group: "刻牌系列", description: "四个暗刻或暗杠组成的和牌。", excludes: "门前清、碰碰和、不求人" },
    { name: "一色双龙会", points: 64, group: "老少系列", description: "一种花色的两个 123、两个 789，五作将。", excludes: "老少副、一般高、清一色、平和、缺一门" },
    { name: "一色四同顺", points: 48, group: "同顺系列", description: "同一花色有四副起首相同的顺子。", excludes: "一色三同顺、一般高、四归一" },
    { name: "一色四节高", points: 48, group: "刻牌系列", description: "同一花色有四副依次递增一位的刻子或杠。", excludes: "一色三节高、碰碰和" },
    { name: "一色四步高", points: 32, group: "步步高系列", description: "同一花色四副顺子按一位或两位递增。", excludes: "一色三步高" },
    { name: "三杠", points: 32, group: "杠牌系列", description: "和牌中有三个杠。", excludes: "双明杠、双暗杠" },
    { name: "混幺九", points: 32, group: "刻牌系列", description: "由字牌与序数牌一、九的刻子、顺子及将牌组成。", excludes: "清幺九、碰碰和、幺九刻" },
    { name: "七对", points: 24, group: "七对系列", description: "由七个对子组成的和牌。", excludes: "门前清、不求人、单钓将" },
    { name: "七星不靠", points: 24, group: "不靠系列", description: "七种字牌各一张，加三种花色 147、258、369 组合出的七张序数牌。", excludes: "五门齐、全不靠、不求人、单钓将" },
    { name: "全双刻", points: 24, group: "刻牌系列", description: "全部由二、四、六、八的刻子和将牌组成。", excludes: "碰碰和、断幺" },
    { name: "清一色", points: 24, group: "花色组合系列", description: "和牌全部属于同一种序数牌花色。", excludes: "无字" },
    { name: "一色三同顺", points: 24, group: "同顺系列", description: "同一花色有三副起首相同的顺子。", excludes: "一色三节高、一般高" },
    { name: "一色三节高", points: 24, group: "刻牌系列", description: "同一花色有三副依次递增一位的刻子或杠。", excludes: "一色三同顺" },
    { name: "全大", points: 24, group: "序数牌系列", description: "只由七、八、九组成顺子、刻子或将牌。", excludes: "大于五" },
    { name: "全中", points: 24, group: "序数牌系列", description: "只由四、五、六组成顺子、刻子或将牌。", excludes: "断幺" },
    { name: "全小", points: 24, group: "序数牌系列", description: "只由一、二、三组成顺子、刻子或将牌。", excludes: "小于五" },
    { name: "清龙", points: 16, group: "龙系列", description: "同一花色的 123、456、789 三副顺子。", excludes: "连六" },
    { name: "三色双龙会", points: 16, group: "老少系列", description: "两种花色各有 123、789，第三种花色以五作将。", excludes: "喜相逢、平和、无字" },
    { name: "一色三步高", points: 16, group: "步步高系列", description: "同一花色三副顺子按一位或两位递增。", excludes: "" },
    { name: "全带五", points: 16, group: "全带系列", description: "每副牌和将牌都含有序数牌五。", excludes: "断幺" },
    { name: "三同刻", points: 16, group: "刻牌系列", description: "三种花色中有三副相同序数的刻子或杠。", excludes: "双同刻" },
    { name: "三暗刻", points: 16, group: "刻牌系列", description: "三个暗刻或暗杠。", excludes: "双暗刻" },
    { name: "全不靠", points: 12, group: "不靠系列", description: "三种花色的 147、258、369 单张与字牌中的任意单张组成和牌。", excludes: "五门齐、不求人、单钓将" },
    { name: "组合龙", points: 12, group: "龙系列", description: "三种花色分别组成 147、258、369 的三组单张。", excludes: "" },
    { name: "大于五", points: 12, group: "序数牌系列", description: "只由六至九的序数牌组成和牌。", excludes: "无字" },
    { name: "小于五", points: 12, group: "序数牌系列", description: "只由一至四的序数牌组成和牌。", excludes: "无字" },
    { name: "三风刻", points: 12, group: "字牌系列", description: "三副风刻或风杠。", excludes: "" },
    { name: "花龙", points: 8, group: "龙系列", description: "三种花色各一副顺子，连接成 1 至 9。", excludes: "一般高、平和" },
    { name: "推不倒", points: 8, group: "特殊系列", description: "只使用牌面图形上下对称的序数牌及白板。", excludes: "缺一门" },
    { name: "三色三同顺", points: 8, group: "同顺系列", description: "三种花色各有一副起首相同的顺子。", excludes: "喜相逢" },
    { name: "三色三节高", points: 8, group: "刻牌系列", description: "三种花色各有刻子，序数依次递增一位。", excludes: "" },
    { name: "无番和", points: 8, group: "和牌方式系列", description: "和牌后没有其他可计番种，花牌不计入此判断。", excludes: "" },
    { name: "妙手回春", points: 8, group: "和牌方式系列", description: "自摸牌墙最后一张牌和牌，不另计自摸。", excludes: "自摸" },
    { name: "海底捞月", points: 8, group: "和牌方式系列", description: "和牌于牌墙最后一张打出的牌。", excludes: "" },
    { name: "杠上开花", points: 8, group: "和牌方式系列", description: "开杠后抓进的牌成和，不包括补花。", excludes: "自摸" },
    { name: "抢杠和", points: 8, group: "和牌方式系列", description: "和别人开明杠时所抢的那张牌。", excludes: "和绝张" },
    { name: "碰碰和", points: 6, group: "刻牌系列", description: "四副牌全部为刻子或杠。", excludes: "" },
    { name: "混一色", points: 6, group: "花色组合系列", description: "一种序数牌花色与字牌组成和牌。", excludes: "" },
    { name: "三色三步高", points: 6, group: "步步高系列", description: "三种花色的三副顺子按一位递增。", excludes: "" },
    { name: "五门齐", points: 6, group: "花色组合系列", description: "三种序数牌、风牌、箭牌五类牌齐全。", excludes: "" },
    { name: "全求人", points: 6, group: "和牌方式系列", description: "全靠吃、碰、杠后单钓他人打出的牌和牌。", excludes: "单钓将" },
    { name: "双暗杠", points: 6, group: "杠牌系列", description: "两个暗杠。", excludes: "" },
    { name: "双箭刻", points: 6, group: "字牌系列", description: "两副箭刻或箭杠。", excludes: "" },
    { name: "全带幺", points: 4, group: "全带系列", description: "每副牌和将牌都含有幺九牌或字牌。", excludes: "" },
    { name: "不求人", points: 4, group: "和牌方式系列", description: "没有吃、碰、明杠，并以自摸和牌。", excludes: "" },
    { name: "双明杠", points: 4, group: "杠牌系列", description: "两个明杠。", excludes: "" },
    { name: "和绝张", points: 4, group: "和牌方式系列", description: "和牌张是牌池、桌面已亮出的三张之外的第四张。", excludes: "抢杠和" },
    { name: "箭刻", points: 2, group: "字牌系列", description: "中、发、白任一副刻子或箭杠。", excludes: "" },
    { name: "圈风刻", points: 2, group: "字牌系列", description: "与当前圈风相同的风刻或风杠。", excludes: "" },
    { name: "门风刻", points: 2, group: "字牌系列", description: "与本门风相同的风刻或风杠。", excludes: "" },
    { name: "门前清", points: 2, group: "和牌方式系列", description: "没有吃、碰、明杠，并和他人打出的牌。", excludes: "" },
    { name: "平和", points: 2, group: "和牌方式系列", description: "四副顺子与序数牌将组成的和牌。", excludes: "无字" },
    { name: "四归一", points: 2, group: "刻牌系列", description: "同一张牌的四张归在一家和牌组合内，杠牌不计。", excludes: "" },
    { name: "双同刻", points: 2, group: "刻牌系列", description: "两副序数相同的刻子或杠。", excludes: "" },
    { name: "双暗刻", points: 2, group: "刻牌系列", description: "两个暗刻或暗杠。", excludes: "" },
    { name: "暗杠", points: 2, group: "杠牌系列", description: "自抓四张相同的牌开杠。", excludes: "" },
    { name: "断幺", points: 2, group: "序数牌系列", description: "和牌中没有一、九及字牌。", excludes: "" },
    { name: "一般高", points: 1, group: "同顺系列", description: "同一花色有两副相同的顺子。", excludes: "" },
    { name: "喜相逢", points: 1, group: "同顺系列", description: "两种花色有两副序数相同的顺子。", excludes: "" },
    { name: "连六", points: 1, group: "龙系列", description: "同一花色有六张序数相连。", excludes: "" },
    { name: "老少副", points: 1, group: "老少系列", description: "同一花色有 123 和 789 两副顺子。", excludes: "" },
    { name: "幺九刻", points: 1, group: "刻牌系列", description: "一、九或风牌组成的刻子或杠。", excludes: "" },
    { name: "明杠", points: 1, group: "杠牌系列", description: "吃碰后以外来牌组成的明杠。", excludes: "" },
    { name: "缺一门", points: 1, group: "花色组合系列", description: "和牌中缺少一种序数牌花色。", excludes: "" },
    { name: "无字", points: 1, group: "花色组合系列", description: "和牌中没有风牌和箭牌。", excludes: "" },
    { name: "边张", points: 1, group: "和牌方式系列", description: "和 123 的三或 789 的七形成的边张。", excludes: "" },
    { name: "坎张", points: 1, group: "和牌方式系列", description: "和顺子中间缺少的那张牌。", excludes: "" },
    { name: "单钓将", points: 1, group: "和牌方式系列", description: "单和一张牌组成将牌。", excludes: "" },
    { name: "自摸", points: 1, group: "和牌方式系列", description: "自己抓进牌成和。", excludes: "" },
    { name: "花牌", points: 1, group: "特殊系列", description: "春夏秋冬、梅兰竹菊，每张计一番，不计入起和。", excludes: "不计入起和" }
  ];
  var FAN_POINTS = [...new Set(FANS.map((fan) => fan.points))].sort((a, b) => b - a);

  // src/app.js
  var FAN_BY_NAME = new Map(FANS.map((fan) => [fan.name, fan]));
  var SAMPLE_HAND = "123m123p123s789s东东";
  var HONORS = /* @__PURE__ */ new Set(["东", "南", "西", "北", "中", "发", "白", "E", "S", "W", "N", "C", "F", "P"]);
  var $ = (selector) => document.querySelector(selector);
  var $$ = (selector) => [...document.querySelectorAll(selector)];
  function normalizeTiles(raw) {
    return String(raw ?? "").replace(/[萬万]/g, "m").replace(/[筒饼餅]/g, "p").replace(/[条條索]/g, "s").replace(/[一壹]/g, "1").replace(/[二贰]/g, "2").replace(/[三叁]/g, "3").replace(/[四肆]/g, "4").replace(/[五伍]/g, "5").replace(/[六陆]/g, "6").replace(/[七柒]/g, "7").replace(/[八捌]/g, "8").replace(/[九玖]/g, "9").replace(/东/g, "E").replace(/南/g, "S").replace(/西/g, "W").replace(/北/g, "N").replace(/中/g, "C").replace(/发/g, "F").replace(/白/g, "P");
  }
  function tileTokens(raw) {
    const text = normalizeTiles(raw).replace(/[\s,[\]]/g, "");
    const tokens = [];
    let pending = "";
    for (const char of text) {
      if (/^[1-9]$/.test(char)) {
        pending += char;
        continue;
      }
      if (/^[mps]$/.test(char)) {
        for (const digit of pending) tokens.push({ value: `${digit}${char}`, label: `${digit}${char === "m" ? "万" : char === "p" ? "筒" : "条"}`, honor: false });
        pending = "";
        continue;
      }
      if (HONORS.has(char)) {
        if (pending) throw new Error("数字牌需要在数字后写 m、p 或 s");
        const label = { E: "东", S: "南", W: "西", N: "北", C: "中", F: "发", P: "白" }[char] ?? char;
        tokens.push({ value: char, label, honor: true });
        continue;
      }
      if (char === "z") {
        if (!pending) throw new Error("z 后需要 1–7 的字牌编号");
        for (const digit of pending) {
          const label = { 1: "东", 2: "南", 3: "西", 4: "北", 5: "中", 6: "发", 7: "白" }[digit];
          if (!label) throw new Error("字牌编号只能是 1–7");
          tokens.push({ value: digit, label, honor: true });
        }
        pending = "";
        continue;
      }
      if (!/[0-9]/.test(char)) throw new Error(`无法识别字符：${char}`);
    }
    if (pending) throw new Error("最后一组数字缺少 m、p 或 s 花色");
    return tokens;
  }
  function buildInput() {
    const hand = normalizeTiles($("#hand-input").value).replace(/\s+/g, "");
    const melds = normalizeTiles($("#meld-input").value).replace(/\s+/g, "");
    const selfDrawn = $("#self-drawn").checked;
    const lastTile = $("#last-tile").checked;
    const fourthTile = $("#fourth-tile").checked;
    const afterKong = $("#after-kong").checked;
    const robKong = $("#rob-kong").checked;
    if (!hand) throw new Error("请先输入立牌");
    if (afterKong && robKong) throw new Error("“杠后和牌”和“抢杠和”不能同时选择");
    if (afterKong && !selfDrawn) throw new Error("杠后开花应勾选“自摸”");
    if (afterKong && lastTile) throw new Error("杠后开花与牌墙最后一张不能同时选择");
    const flowers = Math.max(0, Math.min(8, Number($("#flower-count").value) || 0));
    const round = $("#round-wind").value;
    const seat = $("#seat-wind").value;
    const context = `${round}${seat}${selfDrawn ? 1 : 0}${fourthTile ? 1 : 0}${lastTile ? 1 : 0}${afterKong || robKong ? 1 : 0}`;
    return `${melds}${hand}|${context}|${flowers}`;
  }
  function setPreview() {
    const preview = $("#hand-preview");
    try {
      const tokens = tileTokens($("#hand-input").value);
      $("#hand-count").textContent = `${tokens.length} 张`;
      preview.innerHTML = tokens.length ? tokens.map((tile, index) => `<span class="tile-token${tile.honor ? " honor" : ""}${index === tokens.length - 1 ? " win" : ""}">${tile.label}</span>`).join("") : `<span class="empty-result">等待牌面</span>`;
    } catch (error) {
      $("#hand-count").textContent = "—";
      preview.innerHTML = `<span class="empty-result">${escapeHtml(error.message)}</span>`;
    }
  }
  function renderResult(result, error = null) {
    const total = $("#result-total");
    const state = $("#result-state");
    const breakdown = $("#fan-breakdown");
    const fanCount = $("#fan-count");
    const decomposition = $("#decomposition-note");
    if (error || !result?.isHu) {
      total.textContent = "—";
      state.textContent = error?.message ?? "牌面未组成合法和牌";
      state.classList.add("is-warn");
      fanCount.textContent = "0 项";
      breakdown.innerHTML = `<p class="empty-result">${escapeHtml(error?.message ?? "请检查张数、牌面结构与副露格式。")}</p>`;
      decomposition.textContent = "";
      return;
    }
    state.classList.remove("is-warn");
    const fans = (result.fans ?? []).map((entry) => ({
      name: import_constants.default.FAN_NAME[entry.fanId] ?? "未命名番种",
      points: entry.score ?? 0
    })).sort((a, b) => b.points - a.points || a.name.localeCompare(b.name, "zh-CN"));
    const coreTotal = fans.filter((fan) => fan.name !== "花牌").reduce((sum, fan) => sum + fan.points, 0);
    total.textContent = String(result.totalFan ?? 0);
    state.textContent = coreTotal >= 8 ? "达到 8 番起和" : "未达到 8 番起和";
    fanCount.textContent = `${fans.length} 项`;
    breakdown.innerHTML = fans.length ? fans.map((fan) => {
      const meta = FAN_BY_NAME.get(fan.name);
      return `<div class="fan-row"><span>${fan.name}${meta?.group ? `<small>${meta.group}</small>` : ""}</span><strong>+${fan.points}</strong></div>`;
    }).join("") : `<p class="empty-result">没有可显示的番种。</p>`;
    decomposition.textContent = result.decomposition?.packs?.length ? "已从合法拆解中选取番数最高的方案。" : "特殊和型已按规则单独判断。";
  }
  function calculate() {
    try {
      renderResult((0, import_api.countFan)(buildInput()));
    } catch (error) {
      renderResult(null, error);
    }
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }
  function renderCatalog() {
    $("#fan-catalog").innerHTML = FAN_POINTS.map((points) => {
      const group = FANS.filter((fan) => fan.points === points);
      const cards = group.map((fan) => `<details class="fan-card"><summary>${fan.name}</summary><p>${fan.description}</p>${fan.excludes ? `<span class="excludes"><b>常见排斥：</b>${fan.excludes}</span>` : ""}</details>`).join("");
      return `<section class="fan-group"><div><div class="fan-group-score"><strong>${points}</strong><span>番</span></div><p class="fan-group-label">${group[0].group} · ${group.length} 项</p></div><div class="fan-cards">${cards}</div></section>`;
    }).join("");
  }
  async function renderShareCode() {
    const urlElement = $("#share-url");
    const noteElement = $("#share-note");
    const canvas = $("#share-qr");
    const isHttp = window.location.protocol === "http:" || window.location.protocol === "https:";
    const url = isHttp ? `${window.location.origin}${window.location.pathname}#calculator` : "http://本机内网地址:8080/";
    urlElement.textContent = url;
    noteElement.textContent = isHttp ? "扫码打开当前地址" : "请先通过 HTTP 静态服务打开本站";
    try {
      await import_qrcode.default.toCanvas(canvas, url, {
        width: 96,
        margin: 0,
        color: { dark: "#111b26", light: "#f5eddf" },
        errorCorrectionLevel: "M"
      });
    } catch (error) {
      noteElement.textContent = "二维码生成失败，请复制地址";
    }
  }
  function setView(view) {
    $$("[data-view-panel]").forEach((panel) => {
      const visible = panel.dataset.viewPanel === view;
      panel.hidden = !visible;
      panel.classList.toggle("is-visible", visible);
    });
    $$(".view-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
    if (window.location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);
  }
  $("#calculator-form").addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });
  $("#hand-input").addEventListener("input", setPreview);
  $("#sample-button").addEventListener("click", () => {
    $("#hand-input").value = SAMPLE_HAND;
    $("#meld-input").value = "";
    $("#self-drawn").checked = false;
    $("#last-tile").checked = false;
    $("#fourth-tile").checked = false;
    $("#after-kong").checked = false;
    $("#rob-kong").checked = false;
    $("#flower-count").value = "0";
    setPreview();
    calculate();
  });
  $$(`[data-step]`).forEach((button) => button.addEventListener("click", () => {
    const input = $(`#${button.dataset.target}`);
    input.value = Math.max(Number(input.min), Math.min(Number(input.max), Number(input.value) + Number(button.dataset.step)));
  }));
  $$(`[data-view]`).forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
  renderCatalog();
  setPreview();
  calculate();
  setView(window.location.hash === "#catalog" ? "catalog" : "calculator");
  renderShareCode();
})();

import { readFileSync } from "node:fs";

// 牌面规范自动校验。
// 依据：中文维基百科《麻雀牌》「牌张 → 数字牌 → 筒子 / 索子 / 万子 / 番子」各节的描述
//   https://zh.wikipedia.org/zh-hans/麻雀牌
// 分两类约束：
//   A~C 番种硬约束（错了会导致算番错误，不可协商）
//   D    wiki 外貌/排布规范（错了会导致认错牌或牌面不像麻将）
const sprite = readFileSync("src/mahjong-sprite.svg", "utf8");
const defs = sprite.match(/<defs>([\s\S]*)<\/defs>/)?.[1] ?? "";

const BLUE = "#1f5c99", RED = "#df3535", GREEN = "#168b45";

const PRIM = {
  "dot-green": ["dot", "green"], "dot-red": ["dot", "red"], "dot-ink": ["dot", "ink"],
  "bamboo-green": ["bamboo", "green"], "bamboo-red": ["bamboo", "red"],
};

function symbolBody(id) {
  const m = defs.match(new RegExp(`<symbol\\s+id="${id}"[^>]*>([\\s\\S]*?)</symbol>`));
  return m ? m[1] : null;
}
function leaves(id) {
  const body = symbolBody(id);
  if (body == null) throw new Error(`缺少牌面 symbol: ${id}`);
  const out = [];
  for (const m of body.matchAll(/<use\s+([^>]*)\/>/g)) {
    const a = m[1];
    const href = a.match(/href="#([^"]+)"/)?.[1];
    const x = parseFloat(a.match(/x="([-\d.]+)"/)?.[1] ?? "0");
    const y = parseFloat(a.match(/y="([-\d.]+)"/)?.[1] ?? "0");
    const ang = parseFloat(a.match(/rotate\(\s*([-\d.]+)/)?.[1] ?? "0");
    if (PRIM[href]) out.push({ kind: PRIM[href][0], color: PRIM[href][1], x, y, ang });
  }
  return out;
}
// 按 y 聚类成行（容差 tol），行内按 x 升序
function rows(lv, tol = 3) {
  const out = [];
  for (const l of lv) {
    let r = out.find((r) => Math.abs(r.y - l.y) <= tol);
    if (!r) { r = { y: l.y, items: [] }; out.push(r); }
    r.items.push(l);
  }
  out.sort((a, b) => a.y - b.y);
  for (const r of out) r.items.sort((a, b) => a.x - b.x);
  return out;
}
function texts(id) {
  const b = symbolBody(id) ?? "";
  return [...b.matchAll(/<text[^>]*fill="(#[0-9a-f]{6})"[^>]*>([^<]*)</g)]
    .map((m) => ({ color: m[1], ch: m[2] }));
}

const CX = 32, CY = 44, TOL = 0.6;

// ── 约束 A：数量（筒=圆点数、条=竹节数）────────────────────────
for (const suit of ["p", "s"]) {
  for (let n = 2; n <= 9; n++) {
    const cnt = leaves(`tile-${n}${suit}`).length;
    if (cnt !== n) throw new Error(`${n}${suit === "p" ? "筒" : "条"} 图元数量 ${cnt} != ${n}`);
  }
}

// ── 约束 B：推不倒(8番)几何中心对称 ────────────────────────────
// 判据是旋转180°图形重合，不看颜色。牌集合：筒1·2·3·4·5·8·9 + 条2·4·5·6·8·9 + 白板
function centerSymmetric(lv) {
  const used = new Array(lv.length).fill(false);
  for (let i = 0; i < lv.length; i++) {
    if (used[i]) continue;
    const { kind: k, x, y, ang } = lv[i];
    const tx = 2 * CX - x, ty = 2 * CY - y;
    if (Math.abs(tx - x) <= TOL && Math.abs(ty - y) <= TOL) { used[i] = true; continue; }
    let match = -1;
    for (let j = 0; j < lv.length; j++) {
      if (used[j] || j === i) continue;
      const q = lv[j];
      if (Math.abs(q.x - tx) <= TOL && Math.abs(q.y - ty) <= TOL && q.kind === k) {
        if (k === "bamboo" && Math.abs((ang - q.ang) % 180) > 1) continue; // 竹节自身中心对称，朝向模180
        match = j; break;
      }
    }
    if (match < 0) return false;
    used[i] = used[match] = true;
  }
  return true;
}
const REVERSIBLE = [
  ...[1, 2, 3, 4, 5, 8, 9].map((n) => `tile-${n}p`),
  ...[2, 4, 5, 6, 8, 9].map((n) => `tile-${n}s`),
  "tile-P", // 白板
];
for (const id of REVERSIBLE) {
  if (id === "tile-1p" || id === "tile-P") continue; // 径向/矩形自绘，恒对称
  if (!centerSymmetric(leaves(id))) throw new Error(`推不倒牌 ${id} 非中心对称(旋转180°不重合)`);
}

// ── 约束 C：绿一色(88番) —— 2/3/4/6/8条 + 发 必须纯绿 ──────────
for (const id of [2, 3, 4, 6, 8].map((n) => `tile-${n}s`)) {
  const bad = leaves(id).filter((l) => l.color !== "green");
  if (bad.length) throw new Error(`绿一色牌 ${id} 含非绿图元: ${[...new Set(bad.map((b) => b.color))].join(",")}`);
}
const fBody = symbolBody("tile-F") ?? "";
if (!new RegExp(`fill="${GREEN}"`).test(fBody)) throw new Error("发财(发) 必须为绿色");

// ── 约束 D：维基外貌/排布规范 ──────────────────────────────────

// D1 三索「排成上一下二之形」——上一根居中，下两根左右
{
  const lv = leaves("tile-3s");
  const top = lv.filter((l) => l.y < CY), bot = lv.filter((l) => l.y > CY);
  if (top.length !== 1 || bot.length !== 2) {
    throw new Error(`三索应为「上一下二」，实际 上${top.length} 下${bot.length}`);
  }
  if (Math.abs(top[0].x - CX) > TOL) throw new Error("三索上方那根索子应水平居中");
  if (Math.abs((bot[0].x + bot[1].x) / 2 - CX) > TOL) throw new Error("三索下方两根应左右对称");
}

// D2 六索「为上三下三之形」
{
  const rs = rows(leaves("tile-6s"));
  if (rs.length !== 2 || rs[0].items.length !== 3 || rs[1].items.length !== 3) {
    throw new Error(`六索应为「上三下三」，实际 ${rs.map((r) => r.items.length).join("+")}`);
  }
}

// D3 八索「顶部四条为倒M形、底部四条为M形」，且上下互为镜像（兼为推不倒）
{
  const rs = rows(leaves("tile-8s"));
  if (rs.length !== 2 || rs[0].items.length !== 4 || rs[1].items.length !== 4) {
    throw new Error(`八索应为「上四下四」，实际 ${rs.map((r) => r.items.length).join("+")}`);
  }
  const top = rs[0].items, bot = rs[1].items;
  for (let i = 0; i < 4; i++) {
    if (Math.abs(top[i].ang + bot[i].ang) > 1) {
      throw new Error(`八索上下同列索子应倾斜相反(倒M/M)，第${i + 1}列 ${top[i].ang} vs ${bot[i].ang}`);
    }
    if (Math.abs(top[i].ang - bot[3 - i].ang) > 1) {
      throw new Error(`八索上下应互为镜像，第${i + 1}列与镜像列角度不符`);
    }
  }
}

// D4 九筒「三行圆形，每行三个，由顶至底为蓝色、红色和绿色」
{
  const rs = rows(leaves("tile-9p"));
  if (rs.length !== 3) throw new Error(`九筒应为三行，实际 ${rs.length} 行`);
  const want = ["ink", "red", "green"];
  rs.forEach((r, i) => {
    if (r.items.some((l) => l.color !== want[i])) {
      throw new Error(`九筒第${i + 1}行应为${want[i]}色`);
    }
  });
}

// D5 三筒「蓝、红、绿色的圆排成斜线」
{
  const s = [...leaves("tile-3p")].sort((a, b) => a.y - b.y);
  const want = ["ink", "red", "green"];
  s.forEach((l, i) => {
    if (l.color !== want[i]) throw new Error(`三筒斜线第${i + 1}个圆应为${want[i]}色，实际${l.color}`);
  });
}

// D6 白板「只有蓝色长方形框子」（日本以外的现代麻雀大多有蓝框）
{
  const b = symbolBody("tile-P") ?? "";
  const strokes = [...b.matchAll(/stroke="(#[0-9a-f]{6})"/g)].map((m) => m[1]);
  if (!strokes.length || strokes.some((s) => s !== BLUE)) {
    throw new Error(`白板应为蓝色框，实际 ${[...new Set(strokes)].join(",") || "无框"}`);
  }
}

// D7 万子「顶部蓝色中文数字，底部红色萬字」；五万用大写「伍」
for (let n = 1; n <= 9; n++) {
  const t = texts(`tile-${n}m`);
  if (t.length !== 2) throw new Error(`${n}万 应有上下两个汉字`);
  if (t[0].color !== BLUE) throw new Error(`${n}万 顶部数字应为蓝色`);
  if (t[1].color !== RED) throw new Error(`${n}万 底部萬字应为红色`);
}
const wu = texts("tile-5m");
if (wu.length === 2 && wu[0].ch !== "伍") throw new Error("五万顶部数字应采用大写「伍」");

// D8 风牌蓝色楷书；中红、发绿
for (const [id, ch] of [["E", "東"], ["S", "南"], ["W", "西"], ["N", "北"]]) {
  const t = texts(`tile-${id}`);
  if (t.length !== 1 || t[0].ch !== ch) throw new Error(`${id} 风牌应为汉字「${ch}」`);
  if (t[0].color !== BLUE) throw new Error(`${ch} 应为蓝色`);
}
{
  const c = texts("tile-C"), f = texts("tile-F");
  if (c.length !== 1 || c[0].color !== RED) throw new Error("中 应为红色");
  if (f.length !== 1 || f[0].color !== GREEN) throw new Error("发 应为绿色");
}

console.log("tile geometry checks passed (wiki 麻将牌规范 + 番种约束)");

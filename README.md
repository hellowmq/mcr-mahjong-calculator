# 国标麻将算番

纯前端国标麻将算番器与 81 番种表，按 1998 年《中国麻将竞赛规则（试行）》整理。

## 本地运行

```bash
npm install
npm run build
python3 -m http.server 8080 --directory dist
```

计算核心使用 `gb-mahjong-js` 的 MIT 许可 JavaScript 规则层；说明见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。本站不使用后端、账号、数据库或运行时 API。

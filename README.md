# 国标麻将算番

纯前端国标麻将算番器与 81 番种表，按 1998 年《中国麻将竞赛规则（试行）》整理。无需后端、账号、数据库或运行时 API。

<p align="center">
  <img src="docs/media/mobile-calculator.png" width="390" alt="国标麻将算番器移动端预览：已选手牌、完整点牌面板与听牌结果" />
</p>

> 预览图由构建后的离线页面在固定移动端视口中离屏渲染导出，不包含桌面、浏览器界面或用户牌局数据。

- 移动优先：逐张点选 34 种标准牌；选满 13 张自动查听，选满 14 张自动列出番种。
- 副露：可按吃、碰、明杠、暗杠逐副录入；圈风、门风、花牌与和牌条件可补充设置。
- 牌面：使用站内自制的单一 SVG 精灵库 `src/mahjong-sprite.svg`，按键、已选手牌与结果共用，不裁切或依赖第三方牌图资源。
- 分享：用法页生成当前地址二维码；手机扫码后进入精简的移动工作台。

## 离线直接打开

下载或克隆仓库后，直接双击打开 [`dist/index.html`](dist/index.html) 即可使用；它是已打包的离线入口，支持 `file://` 协议。

`src/index.html` 是开发源码，会引用未打包模块，不能作为直接打开的入口。

## 本地运行

```bash
npm install
npm run build
python3 -m http.server 8080 --directory dist
```

计算核心使用 `gb-mahjong-js` 的 MIT 许可 JavaScript 规则层；说明见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。本站不使用后端、账号、数据库或运行时 API。

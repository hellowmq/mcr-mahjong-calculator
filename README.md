# MCR Mahjong Calculator

面向 MCR（Mahjong Competition Rules，中国官方麻将竞赛规则）的纯前端算番器与 81 番种表。算番无需本站后端、账号、数据库或运行时 API；在线时页面会连接 Google AdSense 加载广告，离线算番仍可使用。

[ChatGPT 部署版](https://guobiao-mahjong-calculator.firehorsek.chatgpt.site/) · [国内访问推荐](https://tech.wenmq.cn/mcr-mahjong-calculator/)

<p align="center">
  <img src="docs/media/mobile-calculator.png" width="390" alt="MCR 麻将算番器移动端预览：已选手牌、完整点牌面板与听牌结果" />
</p>

> 预览图由构建后的离线页面在固定移动端视口中离屏渲染导出，不包含桌面、浏览器界面或用户牌局数据。

- 移动优先：逐张点选 34 种标准牌；选满 13 张自动查听，选满 14 张自动列出番种。
- 副露：可按吃、碰、明杠、暗杠逐副录入；圈风、门风、花牌与和牌条件可补充设置。
- 牌面：使用站内自制的单一 SVG 精灵库 `src/mahjong-sprite.svg`，按键、已选手牌与结果共用，不裁切或依赖第三方牌图资源。
- 分享：用法页生成当前地址二维码；手机扫码后进入精简的移动工作台。

## 离线使用

普通用户不需要下载或打开 HTML 文件：先在支持 Service Worker 的浏览器中联网打开准备使用的入口，等待页面显示“离线缓存已就绪”，页面与算番资源就会保存在当前浏览器中。两种入口的缓存分别保存；之后断网时，请在同一浏览器重新打开首次联网使用的那个入口。

也可以按需将网页安装到设备主屏幕或应用列表，之后从图标启动；安装不是离线使用的前提。若浏览器数据被清除，或浏览器回收了站点缓存，需要重新联网打开页面并等待缓存就绪。

仓库中的 `dist/` 是部署构建产物；在源码页面打开 `dist/index.html` 只会查看 HTML 内容，不会运行算番器。普通用户请使用上面的任一入口，首次联网缓存后即可离线打开。`src/index.html` 是开发源码，不是用户入口。

## 本地运行

```bash
npm ci
npm run build
python3 -m http.server 8080 --directory dist
```

## 开发检查

```bash
npm run check
npm run build
```

`check` 检查打包产物是否完整、关键内容与算番引擎标记是否存在、麻将精灵是否内联，以及是否意外引入运行时网络请求；它不代表完整牌局已经人工复核。

## 依赖与许可

计算核心使用 `gb-mahjong-js` 的 MIT 许可 JavaScript 规则层；说明见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。本站不使用后端、账号、数据库或运行时 API。

本仓库当前未为项目自有代码和素材设置开源许可证。公开可见不等于授予再分发或派生权；第三方依赖仍各自遵循原许可。

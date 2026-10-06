const offlineStatus = document.querySelector("#offline-status");
const installButton = document.querySelector("#install-app");
let installPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installButton.hidden = true;
  offlineStatus.textContent = "已安装。页面会在联网时自动更新，断网时仍可打开算番。";
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  await installPrompt.prompt();
  const { outcome } = await installPrompt.userChoice;
  if (outcome === "accepted") installButton.hidden = true;
  installPrompt = null;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js", { scope: "./" })
    .then(() => navigator.serviceWorker.ready)
    .then(() => {
      const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
      offlineStatus.textContent = standalone
        ? "离线缓存已就绪。页面会在联网时自动更新，断网时仍可打开算番。"
        : "离线缓存已就绪。这台设备已保存页面和算番资源，现在可以断网使用。";
    })
    .catch(() => {
      offlineStatus.textContent = "离线缓存暂未完成。请保持联网后重新打开本页，再确认此处显示“离线缓存已就绪”。";
    });
} else {
  offlineStatus.textContent = "当前浏览器不支持离线缓存，请使用较新版本的 Safari、Chrome 或 Edge。";
}

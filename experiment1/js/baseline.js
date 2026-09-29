let baselineSpeed = 0;
let lastY = null;
let lastTime = null;

window.addEventListener("scroll", () => {
  const now = Date.now();
  const currentY = window.scrollY;

  // 初回スクロール時に計測開始
  if (lastY === null) {
    lastY = currentY;
    lastTime = now;
    return;
  }

  const deltaY = Math.abs(currentY - lastY);
  const deltaTime = now - lastTime;

  // 自動スクロールを除外（小さすぎる or 大きすぎる）
  if (deltaY < 2 || deltaY > 200) {
    lastY = currentY;
    lastTime = now;
    return;
  }

  if (deltaTime > 0) {
    const speed = deltaY / deltaTime;
    baselineSpeed = Math.max(baselineSpeed, speed);
  }

  lastY = currentY;
  lastTime = now;
});

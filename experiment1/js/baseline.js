let baselineSpeed = 0;
let lastY = null;
let lastTime = null;
let finished = false;  // ← 追加：計測終了フラグ

window.addEventListener("scroll", () => {
  if (finished) return;  // ← 追加：finish後は計測しない

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

  // ページ移動時のスクロール（高速すぎる）を除外
  if (deltaTime < 15) {
    lastY = currentY;
    lastTime = now;
    return;
  }

  // 人間のスクロールだけ記録
  if (deltaTime > 0) {
    const speed = deltaY / deltaTime;
    baselineSpeed = Math.max(baselineSpeed, speed);
  }

  lastY = currentY;
  lastTime = now;
});

function finishBaselineA() {
  finished = true;  // ← 追加：計測終了
  localStorage.setItem("baselineSpeed", baselineSpeed);
  location.href = "A-2.html";
}

function finishBaselineB() {
  finished = true;  // ← 追加：計測終了
  localStorage.setItem("baselineSpeed", baselineSpeed);
  location.href = "B-2.html";
}

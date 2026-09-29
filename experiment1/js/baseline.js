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

  if (deltaTime > 0) {
    const speed = deltaY / deltaTime;
    baselineSpeed = Math.max(baselineSpeed, speed);
  }

  lastY = currentY;
  lastTime = now;
});

function finishBaselineA() {
  localStorage.setItem("baselineSpeed", baselineSpeed);
  location.href = "A-2.html";
}

function finishBaselineB() {
  localStorage.setItem("baselineSpeed", baselineSpeed);
  location.href = "B-2.html";
}

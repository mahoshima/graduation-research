let lastY = window.scrollY;
let lastTime = Date.now();
let baselineSpeed = 0;

window.addEventListener("scroll", () => {
  const now = Date.now();
  const currentY = window.scrollY;

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

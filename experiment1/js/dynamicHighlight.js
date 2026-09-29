const baseline = Number(localStorage.getItem("baselineSpeed"));

let lastY = window.scrollY;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const now = Date.now();
  const currentY = window.scrollY;

  const deltaY = Math.abs(currentY - lastY);
  const deltaTime = now - lastTime;

  const speed = deltaY / deltaTime; // px/ms

  // baseline より速くスクロールしたら赤にする
  if (speed > baseline) {
    document.querySelectorAll('.scroll-highlight').forEach(el => {
      el.classList.add('active');
    });
  } else {
    document.querySelectorAll('.scroll-highlight').forEach(el => {
      el.classList.remove('active');
    });
  }

  lastY = currentY;
  lastTime = now;
});

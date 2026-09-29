// 条件1で記録した baselineSpeed を読み込む
const baseline = Number(localStorage.getItem("baselineSpeed"));
console.log("baseline:", baseline);  // ← baseline の値を確認

// スクロール速度計測用
let lastY = window.scrollY;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const now = Date.now();
  const currentY = window.scrollY;

  const deltaY = Math.abs(currentY - lastY);
  const deltaTime = now - lastTime;

  // px/ms のスクロール速度
  const speed = deltaY / deltaTime;
  console.log("speed:", speed);  // ← speed の値を確認

  // baseline より速くスクロールしたら赤にする
  if (speed > baseline) {
    console.log("→ 赤にする判定が出た");  // ← 判定が出たか確認
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

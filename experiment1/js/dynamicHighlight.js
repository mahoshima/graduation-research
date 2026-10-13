// 条件1で記録した baselineSpeed を読み込む
const baseline = Number(localStorage.getItem("baselineSpeed"));
console.log("baseline:", baseline);  // ← baseline の値を確認

// スクロール速度計測用
let lastY = window.scrollY;
let lastTime = Date.now();

//　一度でも赤くなったかを記録
let isHighlighted = false;

window.addEventListener("scroll", () => {
  // 既に赤くなっている場合は、これ以降の速度計算や判定をスキップ
  if (isHighlighted) return;
  
  const now = Date.now();
  const currentY = window.scrollY;

  const deltaY = Math.abs(currentY - lastY);
  const deltaTime = now - lastTime;

  if (deltaTime === 0) return;

  // px/ms のスクロール速度
  const speed = deltaY / deltaTime;
  console.log("speed:", speed);  // ← speed の値を確認

  // baseline より速くスクロールしたら赤にする
  if (speed > baseline) {
    console.log("→ 赤にする判定が出た");  // ← 判定が出たか確認
    document.querySelectorAll('.scroll-highlight').forEach(el => {
      el.classList.add('active');
    });
    isHighlighted = true;
  }

  lastY = currentY;
  lastTime = now;
});

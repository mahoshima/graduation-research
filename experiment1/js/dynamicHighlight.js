// 条件1で記録した baselineSpeed を読み込む
const baseline = Number(localStorage.getItem("baselineSpeed"));
console.log("baseline:", baseline);  // ← baseline の値を確認

// スクロール速度計測用
let lastY = window.scrollY;
let lastTime = Date.now();

//　一度でも赤くなったかを記録
let isHighlighted = false;

// 強調が発生したか
let highlightTriggered = false;

// 条件3の最大スクロール速度
let condition3MaxSpeed = 0;

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

  // 最大スクロール速度を更新
  condition3MaxSpeed =
    Math.max(condition3MaxSpeed, speed);
  
  // localStorageへ保存
  localStorage.setItem(
    "condition3MaxSpeed",
    condition3MaxSpeed
  );

  // baseline より速くスクロールしたら赤にする
  if (speed > baseline) {
  // 強調発生
  highlightTriggered = true;
  // localStorageに保存
  localStorage.setItem(
    "highlightTriggered",
    "true"
  );

  // 条件3開始から何秒後に発生したか
  const start =
    Number(localStorage.getItem("condition3Start"));

  const highlightTriggerTime =
    Math.round((Date.now() - start) / 1000);

  localStorage.setItem(
    "highlightTriggerTime",
    highlightTriggerTime
  );

  console.log("→ 赤にする判定が出た");
    
  document.querySelectorAll('.scroll-highlight').forEach(el => {
    el.classList.add('active');
  });
  isHighlighted = true;
}

  lastY = currentY;
  lastTime = now;
});

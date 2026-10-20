// Firebase SDK 読み込み（HTML側で CDN を読み込む前提）
const firebaseConfig = {
  apiKey: "AIzaSyAdT49zjU6a27Ud5it1tnH9LubC50dYD6E",
  authDomain: "graduation-research-b7223.firebaseapp.com",
  projectId: "graduation-research-b7223",
  storageBucket: "graduation-research-b7223.firebasestorage.app",
  messagingSenderId: "131819979074",
  appId: "1:131819979074:web:5c61ee7b7927c8fd2b48db"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);

// Firestore取得
const db = firebase.firestore();

// Firebaseへ保存
function sendLog(data) {

  db.collection("experiment1").add(data)

    .then(() => {
      console.log("ログ送信完了");
    })

    .catch((error) => {
      console.error("ログ送信エラー:", error);
    });
}

// Googleフォームへ進むボタン用
function saveAndOpenForm() {

  sendLog({

  // 被験者ID
  participantId:
    localStorage.getItem("participantId"),

  // 実験パターン
  experimentPattern:
    localStorage.getItem("experimentPattern"),

  // 各条件の滞在時間
  condition1Time:
    localStorage.getItem("condition1Time"),

  condition2Time:
    localStorage.getItem("condition2Time"),

  condition3Time:
    localStorage.getItem("condition3Time"),

  // 条件1で取得した基準速度
  baselineSpeed:
    localStorage.getItem("baselineSpeed"),

  // 強調発生有無
  highlightTriggered:
    localStorage.getItem("highlightTriggered"),

  // 強調発生時刻
  highlightTriggerTime:
    localStorage.getItem("highlightTriggerTime")

});

  // Googleフォームを開く
  window.open(
    "https://forms.gle/xeCUwH1k22md4jGA9",
    "_blank"
  );
}

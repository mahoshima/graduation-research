// Firebase SDK 読み込み（HTML側で CDN を読み込む前提）
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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

  // 滞在時間
  condition1Time:
    localStorage.getItem("condition1Time"),
  condition2Time:
    localStorage.getItem("condition2Time"),
  condition3Time:
    localStorage.getItem("condition3Time"),

  // 基準速度
  baselineSpeed:
    localStorage.getItem("baselineSpeed"),

  // 強調が発生したか
  highlightTriggered:
    localStorage.getItem("highlightTriggered"),
  // 何秒後に強調が発生したか
  highlightTriggerTime:
    localStorage.getItem("highlightTriggerTime")

});

  // Googleフォームを開く
  window.open(
    "https://forms.gle/LcGRvHRuvUToE87u9",
    "_blank"
  );
}

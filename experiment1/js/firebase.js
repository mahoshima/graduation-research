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

    participantId:
      localStorage.getItem("participantId"),

    experimentPattern:
      localStorage.getItem("experimentPattern"),

    condition1Time:
      localStorage.getItem("condition1Time"),

    condition2Time:
      localStorage.getItem("condition2Time"),

    condition3Time:
      localStorage.getItem("condition3Time"),

    baselineSpeed:
      localStorage.getItem("baselineSpeed")

  });

  // Googleフォームを開く
  window.open(
    "https://forms.gle/Vg9LYjgoJjBTpZ489",
    "_blank"
  );
}

// Firebase SDK 読み込み（HTML側で CDN を読み込む前提）
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 初期化
firebase.initializeApp(firebaseConfig);

// Firestore 取得
const db = firebase.firestore();

// baselineSpeed と pattern を送信する関数
function sendLog(baselineSpeed, pattern) {
  db.collection("logs").add({
    baselineSpeed: baselineSpeed,
    pattern: pattern,
    timestamp: Date.now()
  })
  .then(() => {
    console.log("ログ送信完了");
  })
  .catch((error) => {
    console.error("ログ送信エラー:", error);
  });
}

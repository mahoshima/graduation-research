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
  participantId:
    localStorage.getItem("participantId"),

  experimentPattern:
    localStorage.getItem("experimentPattern"),

  check: "iphone2"
});

  // Googleフォームを開く
  window.open(
    "https://forms.gle/xeCUwH1k22md4jGA9",
    "_blank"
  );
}

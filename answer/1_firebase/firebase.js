// src/firebase.js（ステップ1：まずはベタ張りで動かす）
// Firebase のコンソールに出たコードを貼り付けて、★の2行を足す。
// firebaseConfig の中身は、自分のプロジェクトの値に置き換わる。
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ★追加

const firebaseConfig = {
  apiKey: "AIza...（自分の値）",
  authDomain: "（自分の値）.firebaseapp.com",
  projectId: "（自分の値）",
  storageBucket: "（自分の値）.firebasestorage.app",
  messagingSenderId: "（自分の値）",
  appId: "（自分の値）"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ★追加

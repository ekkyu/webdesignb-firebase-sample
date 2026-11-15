# webdesignb-firebase-sample

WebデザインB（第7回）の練習用アプリ「ふしぎ菓子店」です。
第6回の完成形（props・products.json・state）から始めて、Firebase の Firestore をつなぎます。

## 開き方

1. このページの右上の「☆ Star」を押す
2. 緑の「Use this template」→「Open in a codespace」を押す（前回の codespace は使わず、新しく作る）
3. 準備が終わると、自動で `npm install` と `npm start` が動き、プレビューが開く
4. プレビューが出ないときは、下のパネルの「ポート」タブ → 3000 の地球儀アイコンで別のタブに開く
5. GitHub に保存するときは、ソース管理でコミット →「ブランチを発行」→「Publish to GitHub private repository」

使い終わったら github.com/codespaces で「…」→「Stop codespace」。

## ファイルの場所

```
.gitignore             Git に入れないファイルの一覧（.env.local も入っている）
public/img/            商品の画像
src/App.jsx            画面全体
src/components/        コンポーネント
src/data/products.json 商品のデータ
src/firebase.js        Firebase の設定（授業で作る）
answer/                各ステップの答え
```

## 遅れたときは

`answer` フォルダの中に、ステップごとの完成したファイルがあります。
同じ名前のファイルの中身をコピーして、`src/components`（App.jsx と firebase.js は `src`）に貼り付けてください。
`firebase.js` の firebaseConfig の中身は、自分のプロジェクトの値に置き換えてください。

| フォルダ | 内容 |
|---|---|
| answer/1_firebase | firebase.js（まずはキーをベタ張りで動かす） |
| answer/2_like | ① いいねボタン（Firestore の likes） |
| answer/3_reviews | ② お客さまの声（Firestore の reviews） |
| answer/4_products | ③ 商品のデータも Firestore に置く |
| answer/5_rules | セキュリティルール（Firebase のコンソールに貼る） |
| answer/6_env | キーを .env.local と Vercel の環境変数に移す |
| answer/hatten_login | 発展：ログインした人だけ投稿できるようにする |

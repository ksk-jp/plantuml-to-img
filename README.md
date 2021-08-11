# できること

github actions と連動してリポジトリへの PUSH をトリガに
Plantuml ファイル（拡張子 .pu）から画像ファイル（拡張子 .png）を生成しプッシュします。

依存パッケージ
[glob](https://www.npmjs.com/package/glob): ファイル走査のため
[node-plantuml](https://www.npmjs.com/package/node-plantuml): 画像ファイル作成のため

# PJ への移植方法

以下をコピーする

- .github/
- index.js
- package.json
- package-lock.json
- .gitignore

# ローカルで動作確認する方法

1. 適当な.pu ファイルを作成
2. npm ci
3. npm run node-plantuml

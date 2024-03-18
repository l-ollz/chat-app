# Chat App

これは TypeScript、React、Vite、Firebase 及びその他の技術を使用して構築したリアルタイムチャットアプリです。

## 機能一覧

- Google アカウントを使用したサインイン（認証）
- 自分のプロフィール、メールアドレス、名前、ID を表示
- 会話の作成（個人 or グループ）
- 下記の送信：
  - ファイル
  - 画像
  - テキスト
- リンクを送信した場合はアンカータグを追加
- 各メッセージへのリプライ（テキスト、画像、ファイルなど）
- ドラッグアンドドロップによるファイル or 画像アップロード
- 新規メッセージの通知
- 既読機能（見られた場合は、小さなアバターが下に表示される）
- メッセージへのリアクション送信
- 絵文字の送信
- 各メッセージへのリアクションを表示
- 送信された画像とファイルを表示
- グループの画像とグループ名の変更
- ライトモードとダークモードの切り替え
- メッセージを削除。削除後は「メッセージが削除されました」を表示
- グループ内の管理者権限の付与
  - グループからユーザーを退出させる
  - グループへの招待

## 主要な技術

- TypeScript
- React
- Styled Components
- Material UI
- Firebase
- Vite

## 経緯・苦労した点

リアルタイムで動くアプリケーションについて学びたいと思い作り始めました。

Firebase に触れること自体始めてだったため、
初めは特に Firebase 周りの扱いに慣れるのに苦労しました。

Firestore などを使えばリアルタイムでのアプリの実装は想像の何倍も簡単に実装することができて驚きました。

また今回はアプリで扱うデータの構造について考えるのにも苦労しました。

初めはどういった構造にすべきかわからなかったため、手を動かしながら進めていきました。

## 改善点

Jest 等のテストフレームワークはマストで導入したいです。

<details>
<summary><h3> デモキャプチャ </h3></summary>

#

![スクリーンショット 2024-03-09 23.52.05](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-09%2023.52.05.png)

#

![スクリーンショット 2024-03-09 23.52.06](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-09%2023.52.06.png)

#

![スクリーンショット 2024-03-09 23.52.07](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-09%2023.52.07.png)

#

![スクリーンショット 2024-03-09 23.52.07](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-18%2023.16.03.png)

#

![スクリーンショット 2024-03-18 23.17.22](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-18%2023.17.22.png)

#

![スクリーンショット 2024-03-18 23.17.59](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-18%2023.17.59.png)

#

![スクリーンショット 2024-03-18 23.18.13.](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-18%2023.18.13.png)

#

![スクリーンショット 2024-03-18 23.18.59](https://raw.githubusercontent.com/l-ollz/chat-app/main/screenshots/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-03-18%2023.18.59.png)

</details>

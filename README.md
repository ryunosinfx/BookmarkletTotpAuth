# BookmarkletTotpAuth

Bookmarklet for Totp Auth

## これは何？

ブックマークレットで作動する TOTP ソフトウェアトークンです。
設定情報は展開したドメインの LocalStrage に暗号化されて保存されます。
暗号化の鍵相当は、SALT という変数に書いてあります。※キーは他の文字列と結合し、それを SHA-256 でハッシュ化、一定の回数でストレッチした上で Base64URL 形式へ中で改変して使用しています。

## 使い方

次のページを開きます。

https://ryunosinfx.github.io/BookmarkletTotpAuth/index.html

開いたら bookmarklet Link をブックマークして、目的のサイトでブックマークを開くと起動します。
ブックマークする URL が直接必要な場合は copy ボタンを押すとクリップボードにコピーされます。

開いたら、

-   add:ここから TOTP の認証情報を追加します。
    -   入力項目（手入力）
        -   Name:保存設定名を入力します
        -   Secret:提示された BASE32 形式のシークレットを入力します
        -   Period:TOTP のワンタイムパスワードが切り替わる秒数を設定します。何もなければ 30 秒が設定されます。
        -   Type:hmac の証明のハッシュ方式を設定します。何もなければ SHA-1 が設定されます。
        -   Digits:ワンタイムパスワードの桁数を設定します。何もなければ 6 が設定されます。
    -   画像入力
        -   QR コードを画像で取り込みます。（jsQR を使用）ブラウザが理解できる形式なら読めるはず。（png と svg は確認済み）
        -   読み込んだら読み込んだ QR コードと中身の情報を開示します。
    -   画面スキャン
        -   scan ボタンを押すと任意の画面を 10 秒間スキャンします。
        -   読み込んだら読み込んだ QR コードと中身の情報を開示します。
        -   スキャンで QR コードが見つからない場合は最後の画面を出したままになります。またスキャンを押してください。
    -   auth ボタン
        -   現在の設定値からワンタイムパスワードを算出して表示します。Period 毎に自動更新します。
    -   save ボタン
        -   保存します。

### Save 済みのデータを使う

保存した直後や再度ブックマークレットを起動すると保存済みの情報をリストで表示します。

情報は各ドメインごとに LocalStorage の実装上、最大５ MB 保存されます。
ドメインが変わると読み込めません。
そのドメインで既に 5MB を使い切っていたら保存できません。
一応 item 名は鍵(SALT)＋オリジン名の SHA256 ハッシュ値の BASE64URL を使って居ますが、かぶった場合は壊れる可能性が有ります。

-   名称エリア
    -   QR コードから読み込んだ場合は保存名（issuer:name）になります。手入力の場合した字そのままです。
    -   ここをクリックすると隣の欄に 10 秒間番号が表示されます。
-   del ボタン
    -   登録情報を削除します。
-   export ボタン
    -   登録情報を QR コードにして 10 秒間表示します。

### 鍵(SALT)の切り替え

Generat SALT as URL for bookmarklet
の項目のテキストエリアにある文言を切り替えて、SALT postEncoding: base64URI の項目を Source of the bookmarklet のソースの SALT に設定してください。
ソース変更は入力（input イベント)で入力で bookmarklet Link のブックマーク URL に即時に変更をしています。

## develop

QR コードの読み込みを QRCodeTest のサンプル QR コードでテストできます。

開発は ESmodule なので、ローカルで作動させる場合は nodejs の簡易 http サーバーにホスティングしてください。

```
node server.mjs
```

http://localhost:8088/index.html
でアクセスが可能です。

## ライセンス　 Licence

AGPLv3

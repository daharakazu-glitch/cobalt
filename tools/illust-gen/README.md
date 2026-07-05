# 例文イラスト生成システム（illust-gen）

リッチ画風の例文イラスト（96×96 SVG）を「背景 × 床 × 小物 × 人物」の
組み合わせで一括生成するツール。実装: 匠 ／ アートディレクション: 彩。

- `lib.js` … 背景(BGS)・床(FLOORS)・人物(bust/stand/runner)・基本小物(P.*)
- `extra.js` … 追加小物と compose（under層対応）。**require するのはこちら**
- `recipes19.js` / `recipes1117.js` … 章ごとの場面レシピ（1問=1エントリ）
- `build.js` … 全レシピを assets/illust/ へ出力（`node tools/illust-gen/build.js`）

新しい章を作るときは recipes に `"chapterNN": { "001": {bg, floor, items:[...]}, ... }`
を追加して build する。第10章のみ手描きの原画（このツールの画風の見本）なので
レシピに含めない（上書きしないこと）。

規格・パレット・禁止事項（文字を描かない等）は docs/HANDOVER.md §2 を参照。

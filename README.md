# コバルト（Cobalt）— 英文法トレーナー

山形南高校オリジナルの英文法学習Webアプリ。ビルド不要のバニラJS静的サイトで、
GitHub Pages で公開しています。

- 公開URL: https://daharakazu-glitch.github.io/cobalt/
- リポジトリ: `daharakazu-glitch/cobalt`
- 進捗: **第1〜17章 全章完成（各16問＝計272問・全問に例文イラスト付き）**

> 例文・和訳・解説はすべてオリジナル（著作権対応。ブランド名・商品名は使いません）。

---

## 🧭 まず読むもの（AIセッション向けの入口）

このリポジトリを初めて開いた人（またはAIモデル）は、次の順で読めば全体像を掴めます。

1. **この `README.md`** … 全体地図（今ここ）
2. **[`CLAUDE.md`](CLAUDE.md)** … AIが作業するときのルール・地雷・段取り
3. **[`docs/HANDOVER.md`](docs/HANDOVER.md)** … ★正本の引き継ぎ書（設計・進捗・手順の詳細すべて）
4. **[`docs/README.md`](docs/README.md)** … docs フォルダの索引

> 💡 特定のAIモデル（Fable / Opus / Sonnet など）に依存した情報はありません。
> どのモデルでも、上の4ファイルを読めば作業を継続できます。

---

## 🗂 リポジトリ構成

ビルド不要。ブラウザで `index.html` を直接開けば動きます（ログイン不要・進捗は localStorage）。

```
cobalt/
├── index.html              … ダッシュボード（章グリッド＋進捗）
├── chapter01.html 〜 chapter17.html
│                           … 各章ページ ★これらは公開URLそのもの（移動禁止）
├── css/
│   └── style.css           … デザインシステム（:root にトークン）
├── js/
│   ├── storage.js          … window.Progress（localStorage 進捗管理）
│   ├── dashboard.js        … ダッシュボード描画
│   └── chapter.js          … ★共有の章描画エンジン（5形式＋発音＋PDF＋例文イラスト）
├── data/
│   ├── chapters.js         … window.CHAPTERS（章一覧・有効/ロック制御）
│   └── chapter01.js 〜 chapter17.js … 各章の問題データ（16問）
├── assets/
│   ├── hero.png
│   └── illust/chapterNN/NNN.svg … 例文イラスト（手描きSVG・96×96）
├── tools/
│   └── illust-gen/         … 例文イラスト生成システム（README あり）
├── docs/
│   ├── HANDOVER.md         … ★正本の引き継ぎ書
│   └── README.md           … docs 索引
└── .github/workflows/pages.yml … GitHub Actions デプロイ
```

---

## ▶️ ローカルで動かす

依存関係なし。どちらでもOK。

```bash
# 方法1: ファイルを直接開く
open index.html            # macOS

# 方法2: 簡易サーバ（相対パス・fetch を安全に動かしたいとき推奨）
python3 -m http.server 8000
# → http://localhost:8000/ を開く
```

---

## ➕ 新しい章を追加する

手順の詳細は [`docs/HANDOVER.md`](docs/HANDOVER.md) の §4 に集約しています。おおまかには:

1. `data/chapterNN.js` を作成（問題16問・型は HANDOVER §2）
2. `assets/illust/chapterNN/NNN.svg` を作成（`tools/illust-gen` のレシピ追加 → `node tools/illust-gen/build.js`）
3. `chapterNN.html` を作成（`chapter01.html` をコピーして3箇所を書き換え）
4. `data/chapters.js` の該当章を有効化
5. QA → commit → push →（ユーザー確認後に）デプロイ

---

## 🚀 デプロイ

`.github/workflows/pages.yml` が **main への push** で自動デプロイします。
**main へのマージ（＝公開反映）はユーザー確認後に行う**こと。ハマりどころは
[`docs/HANDOVER.md`](docs/HANDOVER.md) §5 を参照。

---

## ⚠️ 触ってはいけないもの

- `chapter01.html`〜`chapter17.html` の**ファイル名・配置**（公開URL・生徒のブックマーク・
  `data/chapters.js` の href が直結。フォルダ移動は公開URLを壊す）。
- ユーザーのMac上のローカルフォルダ（クラウドセッションからは触れない）。
- `assets/illust/chapter10/*.svg`（画風の手描き見本。生成ツールで上書きしない）。

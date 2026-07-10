# CLAUDE.md — AIセッション作業ガイド

このファイルは Claude Code が自動で読み込みます。**特定のモデルに依存しません**
（Fable / Opus / Sonnet いずれでも、これを読めば作業を継続できます）。
詳細の正本は [`docs/HANDOVER.md`](docs/HANDOVER.md)。迷ったら必ずそちらを開くこと。

---

## プロジェクト一行まとめ

山形南高校向けの英文法学習Webアプリ「**コバルト（Cobalt）**」。ビルド不要のバニラJS
静的サイト。第1〜17章・272問すべて完成・GitHub Pages で公開済み。

- 公開URL: https://daharakazu-glitch.github.io/cobalt/
- リポジトリ: `daharakazu-glitch/cobalt`

## 最初に読む順番

1. [`README.md`](README.md) … 全体地図・構成・ローカル起動
2. このファイル（作業ルール）
3. [`docs/HANDOVER.md`](docs/HANDOVER.md) … ★設計・進捗・手順の詳細すべて

---

## 作業ルール（★重要）

- **公開サイトのファイルを移動・改名しない**。特に `chapterNN.html` は公開URLそのもの
  （`data/chapters.js` の href・生徒のブックマークが直結）。整理のためでも動かさない。
- **ユーザーのMac上のローカルファイルには触れない**（クラウドセッションから到達不可）。
  正本はこのリポジトリの `docs/HANDOVER.md`。
- **main へのマージ＝公開反映は必ずユーザー確認後**。指定の作業ブランチで開発する。
- `assets/illust/chapter10/*.svg` は画風の手描き見本。生成ツールで**上書きしない**。
- 破壊的操作・共有状態への操作（push 等）は事前確認が基本。
- `gh` CLI は使えないことがある → **GitHub MCP ツール**で代替（Actions監視・PR作成など可）。

## よく使う操作

```bash
# ローカルで動かす
python3 -m http.server 8000        # → http://localhost:8000/

# 例文イラストを再生成（レシピ追加後）
node tools/illust-gen/build.js

# コミット（作者情報を固定）
git -c user.name="daharakazu-glitch" \
    -c user.email="daharakazu-glitch@users.noreply.github.com" \
    commit -m "…"
```

## コードの地図（どこを触ると何が変わるか）

| やりたいこと | 触るファイル |
|---|---|
| 章の一覧・有効/ロック | `data/chapters.js` |
| ある章の問題内容 | `data/chapterNN.js` |
| 全章共通の表示・採点・発音・PDF | `js/chapter.js`（★共有エンジン。全章に反映） |
| ダッシュボード表示 | `js/dashboard.js` |
| 進捗の保存 | `js/storage.js`（localStorage `grammar_app_progress`） |
| デザイン | `css/style.css`（:root にトークン） |
| 例文イラスト生成 | `tools/illust-gen/`（README あり） |

## 進め方の好み（ユーザー）

- 名前・方針は**候補を提示させて選ぶ**スタイル。
- 大きなタスクは**段階化**（まず1章試作 → 量産）。1章ずつ 作成→デプロイ→報告 を厳守。
- 「AIチーム」設定で進行（役割は `docs/HANDOVER.md` §1）。完了時は PM(蒼司) に報告。

## 次にやること

本編（第1〜17章）は完成・公開済み。次は**発展編**（会話表現編／イディオム編／
語彙・語法編）。章立ての候補をユーザーに提示して選んでもらう → §4 の手順で1章ずつ。
詳細は `docs/HANDOVER.md` §8。

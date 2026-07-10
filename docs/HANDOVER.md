# コバルト（Cobalt）英文法アプリ — 引き継ぎ書

最終更新: 2026-07-05（第10章追加・例文イラスト機能追加を反映）

---

## 0. これは何か

大学受験向けの英文法学習Webアプリ「**コバルト（Cobalt）**」の開発案件。
市販文法書アプリ（Vintage）と**同じ構成・同じ文法項目**をなぞりつつ、
**例文・和訳・解説はすべてオリジナル**（著作権対応。商品名/ブランド名は一切使わない）。

- 作業ディレクトリ（ユーザーのMac）: `/Users/kazuyukiharada/Desktop/AIチーム`（**git管理外**）
- 実アプリ（ユーザーのMac）: `/Users/kazuyukiharada/Desktop/AIチーム/grammar-app/`（**gitリポジトリ**）
- GitHubリポジトリ名: **`cobalt`**（フォルダ名 grammar-app とは別。リポジトリは daharakazu-glitch/cobalt）
- 公開URL: https://daharakazu-glitch.github.io/cobalt/

> ⚠️ 用語の対応: ローカルフォルダ = `grammar-app` ／ GitHubリポジトリ = `cobalt`。
> 「grammar-app という名前のGitHubリポジトリ」は存在しない。GitHub上は `cobalt`。

> 🚪 このリポジトリを初めて開いたら、まず `README.md`（全体地図）→ `CLAUDE.md`
> （作業ルール）→ この `HANDOVER.md`（詳細の正本）の順で読めば継続できる。
> 特定のAIモデル（Fable/Opus/Sonnet 等）に依存した情報はない。

> 💡 クラウドセッション（Claude Code on the Web 等）で作業する場合の注意:
> - ユーザーのMacのファイルには触れない。リポジトリのこの `docs/HANDOVER.md` が正。
> - `gh` CLI は使えないことがある → GitHub MCP ツールで代替（Actions監視・workflow_dispatch・PR作成すべて可能）。
> - セッション指定の作業ブランチがある場合はそこで開発し、**main へのマージ（＝Pagesデプロイ発動）はユーザー確認後**。

---

## 1. AIチーム（役割設定）

このプロジェクトは「AIチーム」という設定で進行。発言時は名前と役職を名乗り、完了時はPM(蒼司)に報告する。

| 名前 | 役職 | 呼出 |
|---|---|---|
| 蒼司(Soji) | PM | /蒼司 |
| 詠(Ei) | 英語教材デザイナー（問題作成担当） | /詠 |
| 彩(Aya) | UX/UIデザイナー（例文イラスト担当） | /彩 |
| 匠(Takumi) | フロントエンドエンジニア | /匠 |
| 澄(Sumi) | QAテスター | /澄 |

---

## 2. 技術スタック / ファイル構成

ビルド不要のバニラJS静的サイト（ブラウザで直接開ける）。ログイン不要、進捗は localStorage。

```
grammar-app/ (GitHub: cobalt)
├── README.md             … リポジトリの入口・全体地図
├── CLAUDE.md             … AIセッションの作業ガイド（Claude Codeが自動ロード）
├── index.html            … ダッシュボード（章グリッド＋進捗）
├── chapterNN.html        … 各章ページ（NN = 01〜。chapter01.htmlをコピーして作る）
├── css/style.css         … デザインシステム（:root にトークン。末尾に発音/PDF/イラスト用CSS）
├── js/
│   ├── storage.js        … window.Progress（localStorageキー grammar_app_progress）
│   ├── dashboard.js      … ダッシュボード描画
│   └── chapter.js        … ★共有の章描画エンジン（5形式＋発音＋PDF＋例文イラスト）
├── data/
│   ├── chapters.js       … window.CHAPTERS（章一覧。total/hrefで有効/ロック制御）
│   └── chapterNN.js      … window.CHAPTER_META + window.CHAPTER_DATA（問題データ）
├── assets/
│   ├── hero.png
│   └── illust/chapterNN/NNN.svg … ★例文イラスト（問題idと同名の手描きSVG、96×96）
├── docs/
│   ├── HANDOVER.md       … この引き継ぎ書（正本）
│   └── README.md         … docs 索引
└── .github/workflows/pages.yml … GitHub Actionsデプロイ
```

### 問題データの型（chapterNN.js）

```js
window.CHAPTER_META = { id:"chapterNN", no:N, title:"…", subtitle:"…", description:"…" };
window.CHAPTER_DATA = [ { …問題… }, … ]; // 各章16問
```

問題オブジェクト:

- `id`（章内で一意。"001"〜"016"）
- `tags`（["基本"|"超頻出"|"発展"]）
- `type`（5形式: "choice" | "error" | "ordering" | "fill" | "rewrite"）
- `point`（学習ポイント短見出し）
- `question`（問題文。空所は全角で `（　）`）
- `choices` / `answerIndex`（choice・error用）
- `pieces` / `answer`（ordering用。`pieces.join(" ") === answer` が必須）
- `answer`（fill・rewrite用。許容解の配列）
- `ja`（和訳）, `en`（完成英文）, `explanation`（解説）
- `img`（任意。例文イラストの相対パス `assets/illust/chapterNN/NNN.svg`。
  `js/chapter.js` が問題文の右に小さく表示。無い問題は従来どおりの表示）

### 例文イラストの仕様（第10章から導入・ユーザー要望）

- **完全オリジナルの手描きSVG**（外部画像・生成サービス不使用 → 著作権/オフライン/軽量の三拍子。1点2〜4KB）
- **画風は「リッチ版」**（2026-07-05 ユーザー承認。初版のアイコン調は「イマイチ」とのことで全面刷新済み）:
  - グラデーション背景で**シーンを描く**（夜のステージ・夕焼け・食堂・雨空など、例文の場面をそのまま絵にする）
  - 人物はフラット絵本調: 肌 `#f2c9a4`・丸頭・点目・ほほ紅 `#f0a08a`・簡略な髪と服
  - 光の演出を入れる（radialGradient のスポットライト/ランプ/電飾、紙吹雪、星）
  - 参考実装: `assets/illust/chapter10/*.svg`（001 ステージ / 004 ワルツ / 007 お化け屋敷 / 015 夜のバス などが見本）
- 規格: `width="96" height="96" viewBox="0 0 96 96"`、背景は角丸 `rx="18"` の rect（gradient fill）
- 基本パレット: コバルト `#0047ab` / 夜 `#1a2f5e`〜`#0d1b3d` / 木 `#b98a5a`〜`#96693f` / 灯 `#ffe9a8`・`#ffd75e` / 珊瑚 `#ef6f6f` / 肌 `#f2c9a4`
- 表示: PC 84px・スマホ 64px、問題文の右横（`.q-wrap` / `.q-illust`、`loading="lazy"`、読み込み失敗時は自動で非表示）
- PDF出力には含めない（プリントはあくまで文字ベースでシンプルに）
- **文字（英字・数字）はSVG内に描かない**（フォント依存とネタバレ防止）
- 品質確認は Playwright で全点をグリッド表示→スクリーンショット目視が確実（形の破綻はコードだけでは気づけない）

---

## 3. 現在の進捗（★重要）

### 完成・公開済み

- **第1〜17章 全章完成（各16問＝計272問・全問に例文イラスト付き）**。
  1時制 / 2態 / 3助動詞 / 4仮定法 / 5不定詞 / 6動名詞 / 7分詞 / 8関係詞 / 9比較 / 10接続詞 /
  11疑問文・否定 / 12名詞・冠詞 / 13代名詞 / 14形容詞・副詞 / 15前置詞 / 16動詞の語法 / 17特殊構文
- 例文イラストは **`tools/illust-gen/` の生成システム**で量産（第10章のみ手描き原画＝画風の見本）。
  レシピ（recipes*.js）に場面を追記して `node tools/illust-gen/build.js` で assets/illust/ に一括出力。
- 全章共通機能（`js/chapter.js` に一括実装＝全章に反映）:
  1. **発音チェック**: マイク録音＋100点満点の甘め評価。
     - `SpeechRecognition` で音読を文字起こし → `normalize` 後に Levenshtein距離で類似度 → 甘め補正（×1.15＋8、下限40・上限100）。
     - ティア: 90+🌟 / 75+✨ / 55+👍 / それ以下💪。「聞き取り: “…”」表示。
     - 非対応ブラウザは `MediaRecorder` にフォールバック（録音再生＋手本再生）。
  2. **PDF出力**: 各問題に「選択」チェック → 下部固定ツールバー → モーダルで6種類を選択 → `window.open()` + `print()` で生成（jsPDF等は不使用）。
     - 6種: 例文リスト / 英作文テスト / 和訳テスト / 空所補充テスト / ミックステスト / 解答・解説プリント。
  3. **例文イラスト**（2026-07-05 追加）: `img` フィールドがある問題に小さめSVGを表示（§2参照）。

### 次にやる: 発展編（ユーザー要望あり・本編17章は完成済み）

会話表現編 / イディオム・慣用表現編 / 語彙・語法編。いずれも同じ仕組みで追加できる
（chapters.js に枠追加 → data/ に16問 → イラストは illust-gen のレシピ追加 → html）。
着手順・章立てはユーザーに候補を提示して選んでもらうこと（§7の進め方）。

---

## 4. 新しい章を追加する手順（テンプレ）

1. `data/chapterNN.js` を作成（`CHAPTER_META` + `CHAPTER_DATA` 16問）。型は §2 参照。空所は `（　）`。
2. **各問題の例文イラストを `assets/illust/chapterNN/NNN.svg` に作成**し、問題の `img` に相対パスを設定（§2の規格・パレット厳守）。
3. `chapterNN.html` を作成（chapter01.html をコピーし、`CHAPTER N` / `<h1>` / `data/chapterNN.js` の3箇所を変更）。
4. `data/chapters.js` の該当章を `total: 16, href: "chapterNN.html"` に有効化。
5. QAスクリプトで検証（下記）→ 通ったら削除。
6. commit → push → デプロイ確認 → ライブ確認。

### QAスクリプト（毎回書いて実行、通ったら rm）

リポジトリ直下に `_qa_check.js` を作り `node _qa_check.js`。チェック項目:

- 問題数16 / id重複なし / 必須キー（id,type,point,question,ja,en,explanation）
- tags が ["基本","超頻出","発展"] のみ
- choice・error: choices配列・answerIndex範囲
- ordering: `pieces.join(" ") === answer`（コンマは answer に入れない。en側にのみ句読点）
- fill・rewrite: answer が非空配列
- choice・fill: 問題文に全角空所 `（　）` がある
- **img: ファイル実在・`<svg`開始・`viewBox="0 0 96 96"`**
- chapters.js の有効化・chapterNN.html の3点変更

可能なら実ブラウザ確認も（Playwright + `python3 -m http.server` で 16問描画・イラスト読込・正解判定・コンソールエラー無しを確認。第10章で実施済み）。

---

## 5. コミット & デプロイ（★ハマりどころ）

### コミット（作者情報を固定）

```
git -c user.name="daharakazu-glitch" -c user.email="daharakazu-glitch@users.noreply.github.com" commit -m "…"
```

### デプロイ

- build_type = `workflow`（GitHub Actions）に移行済み。`.github/workflows/pages.yml` が **main への push** で自動デプロイ（workflow_dispatch も可）。
- 完了確認: `gh run watch <id> --repo daharakazu-glitch/cobalt --exit-status`（gh が無い環境では GitHub MCP の actions_get / get_job_logs で代替）。
- ライブ確認（キャッシュ回避に `?n=$RANDOM`）:
  - `curl -s -o /dev/null -w "%{http_code}" .../chapterNN.html` → 200
  - `curl -s .../data/chapters.js | grep chapterNN.html` → 1

### 既知の障害と対処

- deploy-pages が `Deployment failed, try again later` で落ちることがある（GitHub側の一時障害。artifactのuploadは成功、deployment APIのみ失敗）。
  - `gh run rerun --failed` は同じ理由で再失敗しがち。
  - 対処: `gh workflow run pages.yml --repo daharakazu-glitch/cobalt --ref main`（workflow_dispatch）で新規runを起こすと通る（実証済み）。他章は落ちないので慌てない。
- legacy(Jekyll)には二度と戻さない。日本語/英語テキストでビルドが `queued`/`errored` 固着し、キャンセルも削除も不可（403）になった。workflow移行がこれを迂回する唯一の確実な手。

---

## 6. コンテンツ方針（例文の作り方）

- 全てオリジナル。ブランド名・商品名NG。大学受験レベル。
- 「ありきたりな例文」を避け、高校生に印象的な題材に。
  - 大谷翔平は1章1例程度に抑制。ミュージシャン/お笑い芸人/モノマネ/ビートボックス等も活用。
- **同じ題材の使いすぎに注意**（2026-07-05 ユーザー指摘で39問＋25問を入れ替え済み）。応援歌・揚げパン・告白ネタは各章1回程度、**披露ネタ（一芸・モノマネ・手品・talent show）はアプリ全体で数問まで**に抑える。
- **例文は南高ネタ限定ではない**（2026-07-05 ユーザー方針）。実在のスポーツ選手（大谷翔平・井上尚弥・160km/h高校生投手など）、往年の喜劇役者（チャップリン）、音楽家、そして「毎朝校門に来る猫」「監督まで眠る試写会」「体育館を横切る紙飛行機」のような**印象に残る場面**を広く使ってよい。ただしバンド名・商品名・ブランド名は引き続きNG。
- 公式サイト https://www.yamanan-h.ed.jp/ が一次情報源（※クラウドセッションのネットワーク制限では閲覧不可。参照が必要ならユーザーのMac側で確認してもらう）。
- 南高（山形南高校）DNA＋男子校の自虐ユーモアを「たまに」織り込む（全問ではない）。題材ストック:
  - 応援歌「空はコバルト（The Sky Is Cobalt）」= アプリ名の由来。校歌より歌う機会が多い。※「校歌」の連呼は避け応援歌に分散。
  - 制服がなく生徒が「我らの心得」を自分たちで決めて守る。
  - 南校祭: 山形西など他校の女子が来校し**社交ダンス（ワルツ）**を踊る伝統。
  - 一芸披露の風習: 学校祭・壮行式で指名された生徒が一芸→面白ければ喝采、つまらなければブーイング。
  - コスパ食堂: 安くメニュー豊富。おばちゃんが教室まで揚げパン・おにぎりを売りに来る。
  - 男子校自虐: 告白しても振られる/女子に相手にされない/勇気を出すも空回り。
  - **部活動が非常に盛ん**（2026-07-05 追加）。運動部: 野球・バスケ・サッカー・ラグビー・ハンドボール・柔道・バドミントン・卓球・山岳・レスリング・ボクシング・硬式テニス・ソフトテニス・陸上・水泳など。文化部: 吹奏楽・書道・文芸・化学・写真・映画演劇・美術。いずれも大会実績あり。
  - **体育祭**: 学校祭の一部・クラス対抗で毎年大盛り上がり。盛り上がりすぎて毎年救急車で運ばれる生徒が複数出る（県教育委員会も注視）。綱引き・クラス対抗リレーが鉄板ネタ。
  - **授業中の眠気対策**: 眠くなったら立ち上がって授業に参加する生徒がいる。
  - **マラソン大会**: 思い思いの仮装で走る生徒が少なくない。特に3年生。

---

## 7. ユーザーの進め方の好み

- 名前・方針は候補を提示させて選ぶスタイル。方向転換は「全部作り直す」等を明示。
- 大きなタスクは**段階化（まず1章試作→量産）**を好む。→ 1章ずつ作成→デプロイ→報告 を厳守。
- 破壊的操作・共有状態への操作（push等）は事前確認が基本。

---

## 8. すぐ次にやること

本編（第1〜17章・272問・全問イラスト付き）は**完成・公開済み**。次は**発展編**:

1. 章立ての候補（会話表現編 / イディオム編 / 語彙・語法編の構成案）をユーザーに提示して選んでもらう。
2. 選ばれた編を §4 の手順（イラストは tools/illust-gen のレシピ追加）で1章ずつ作成 → QA → デプロイ → 報告。

そのほかの改善候補: 苦手問題の復習モード、章横断のランダム演習、成績のエクスポートなど（未着手・未承認）。

---

### 参考: 永続メモリ

引き継ぎ元は `/Users/kazuyukiharada/.claude/projects/-Users-kazuyukiharada-Desktop-AI---/memory/MEMORY.md` に
同等の情報を保持している（Claude の auto memory。セッションをまたいで自動ロードされる）。
このリポジトリの `docs/HANDOVER.md`（本ファイル）が git 管理される正本。更新したら両方を揃えること。

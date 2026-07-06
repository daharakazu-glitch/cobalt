/*
 * 第9章「比較」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 *
 * 問題オブジェクトの型:
 *   id          : 問題ID（章内で一意）
 *   tags        : ["基本"|"超頻出"|"発展" ...] 難易度・頻度タグ
 *   type        : "choice" | "error" | "ordering" | "fill" | "rewrite"
 *   point       : 学習ポイント（短い見出し）
 *   question    : 問題文（空所は （　） で表記）
 *   choices     : 選択肢配列（choice / error）
 *   answerIndex : 正解の添字（choice / error）
 *   pieces      : 正しい並び順の語句配列（ordering）
 *   answer      : 正解文字列 or 許容配列（ordering / fill / rewrite）
 *   ja          : 日本語訳
 *   en          : 完成した英文
 *   explanation : 解説（オリジナル）
 */
window.CHAPTER_META = {
  id: "chapter09",
  no: 9,
  title: "比較",
  subtitle: "Comparison",
  description: "原級・比較級・最上級の基本から、比較級の強調（much/far）、倍数表現、〈the 比較級, the 比較級〉、最上級相当表現（no other / than any other）、ラテン比較（superior to など）まで、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "原級比較 as ~ as",
    question: "My little brother is now almost as tall （　） I am.",
    choices: ["as", "than", "that", "so"],
    answerIndex: 0,
    ja: "弟は今やほとんど僕と同じくらいの背丈だ。",
    en: "My little brother is now almost as tall as I am.",
    explanation: "〈as + 原級 + as〉で「〜と同じくらい…」。前の as は副詞、後ろの as は接続詞。tall のような原級（変化しない形）を挟む。",
    img: "assets/illust/chapter09/001.svg"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "not so/as ~ as（〜ほど…でない）",
    question: "Our new gym is not （　） big as the old one, but it's a lot cleaner.",
    choices: ["so", "more", "very", "too"],
    answerIndex: 0,
    ja: "新しい体育館は古いものほど大きくはないが、ずっときれいだ。",
    en: "Our new gym is not so big as the old one, but it's a lot cleaner.",
    explanation: "否定文では〈not so + 原級 + as〉も〈not as ~ as〉も使え「〜ほど…でない」。ここは so が正解。more は比較級用で不可。",
    img: "assets/illust/chapter09/002.svg"
  },
  {
    id: "003",
    tags: ["基本"],
    type: "choice",
    point: "比較級 + than",
    question: "The days during summer cram school felt much （　） than any other days of the year.",
    choices: ["long", "longer", "longest", "more long"],
    answerIndex: 1,
    ja: "夏期講習の日々は、一年のどの日よりもずっと長く感じられた。",
    en: "The days during summer cram school felt much longer than any other days of the year.",
    explanation: "than があるので比較級 longer。long は er 型で more long とはしない。much は比較級を強める（→005）。",
    img: "assets/illust/chapter09/003.svg"
  },
  {
    id: "004",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "最上級 the ~est / the most",
    question: "The cafeteria's fried bread is the （　） snack in the whole school.",
    choices: ["popular", "more popular", "most popular", "popularest"],
    answerIndex: 2,
    ja: "食堂の揚げパンは、全校で一番人気の軽食だ。",
    en: "The cafeteria's fried bread is the most popular snack in the whole school.",
    explanation: "3音節以上の形容詞 popular は most をつけて最上級。popularest とはしない。in the whole school のように範囲を in で示す。（※不動の人気・南高食堂の揚げパン）",
    img: "assets/illust/chapter09/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出"],
    type: "choice",
    point: "比較級の強調 much / far",
    question: "The live concert was （　） more exciting than I had expected.",
    choices: ["very", "much", "so", "too"],
    answerIndex: 1,
    ja: "そのライブは、僕が予想していたよりもずっとわくわくするものだった。",
    en: "The live concert was much more exciting than I had expected.",
    explanation: "比較級を「ずっと・はるかに」と強めるのは much / far / even / still / a lot。very は原級を強めるので比較級には使えない。",
    img: "assets/illust/chapter09/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "倍数表現 twice as ~ as",
    question: "This new speaker is （　） as loud as my old one.",
    choices: ["twice", "double", "two times more", "twice more"],
    answerIndex: 0,
    ja: "この新しいスピーカーは、僕の古いものの2倍の音量が出る。",
    en: "This new speaker is twice as loud as my old one.",
    explanation: "倍数は〈倍数 + as + 原級 + as〉。「2倍」は twice as ~ as。3倍以上は three times as ~ as のように times を使う。",
    img: "assets/illust/chapter09/006.svg"
  },
  {
    id: "007",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "the 比較級, the 比較級",
    question: "（　） you practice beatboxing, the better you get.",
    choices: ["The more", "More", "The most", "Much more"],
    answerIndex: 0,
    ja: "ビートボックスは練習すればするほど、上達する。",
    en: "The more you practice beatboxing, the better you get.",
    explanation: "〈The + 比較級 …, the + 比較級 …〉で「〜すればするほど…」。前後とも the を忘れずに。（※意外な才能・南高の一芸自慢）",
    img: "assets/illust/chapter09/007.svg"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "ラテン比較 superior to（than ではない）",
    question: "①Everyone agrees ②that Inoue's left hook ③is far superior ④than anyone else's in the division.",
    choices: ["①Everyone agrees", "②that Inoue's left hook", "③is far superior", "④than anyone else's in the division"],
    answerIndex: 3,
    ja: "井上尚弥の左フックは同じ階級の誰のものよりはるかに上だと、誰もが認めている。",
    en: "Everyone agrees that Inoue's left hook is far superior to anyone else's in the division.",
    explanation: "superior / inferior / senior / junior などのラテン比較は than ではなく to を使う。④の than が誤り。強調には far / much を添える。（※モンスターの左は世界基準）",
    img: "assets/illust/chapter09/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "than any other + 単数名詞",
    question: "①The school festival is ②more exciting ③than any other ④events at our school.",
    choices: ["①The school festival is", "②more exciting", "③than any other", "④events at our school"],
    answerIndex: 3,
    ja: "南校祭は、うちの学校のどの行事よりもわくわくする。",
    en: "The school festival is more exciting than any other event at our school.",
    explanation: "〈比較級 + than any other + 単数名詞〉で最上級の意味。any other の後ろは単数なので④ events を event に直す。（※他校の女子も来る南校祭）",
    img: "assets/illust/chapter09/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "the 比較級, the 比較級",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「音量を上げれば上げるほど、隣のクラスから苦情が来る。」",
    pieces: ["The louder", "we", "turn it up", "the more", "the class next door", "complains"],
    answer: "The louder we turn it up the more the class next door complains",
    ja: "音量を上げれば上げるほど、隣のクラスから苦情が来る。",
    en: "The louder we turn it up, the more the class next door complains.",
    explanation: "〈The + 比較級 + S V …, the + 比較級 + S V …〉。louder は turn it up を、more は complains を修飾する副詞比較級。書くときは前半の後ろにコンマ。",
    img: "assets/illust/chapter09/010.svg"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "分数・倍数 + as ~ as",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「ここのカレーは、駅前の店の半分の値段だ。」",
    pieces: ["The curry here", "is", "half", "as expensive as", "the one", "near the station"],
    answer: "The curry here is half as expensive as the one near the station",
    ja: "ここのカレーは、駅前の店の半分の値段だ。",
    en: "The curry here is half as expensive as the one near the station.",
    explanation: "倍数・分数は〈half / twice / X times + as + 原級 + as〉の語順。half as expensive as で「半分の高さ＝半額」。the one は the curry の反復を避ける代名詞。（※コスパ最強の南高食堂）",
    img: "assets/illust/chapter09/011.svg"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "as ~ as possible",
    question: "During the fire drill, we were told to leave the building as quickly as （　）.",
    answer: ["possible"],
    ja: "避難訓練では、できるだけ早く建物から出るように言われた。",
    en: "During the fire drill, we were told to leave the building as quickly as possible.",
    explanation: "〈as + 原級 + as possible〉で「できるだけ〜」。as ~ as one can（ここでは as we could）でも言い換えられる。",
    img: "assets/illust/chapter09/012.svg"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "最上級相当 No other ... as ~ as",
    question: "（　） other club starts its morning practice as early as the boxing club.",
    answer: ["No"],
    ja: "ボクシング部ほど朝練の開始が早い部は、ほかにない。",
    en: "No other club starts its morning practice as early as the boxing club.",
    explanation: "No other + 単数名詞 + as ~ as A で「Aほど〜なものはない」＝最上級相当。（※夜明け前のロードワークとミット打ちの音が近所の目覚まし代わり）",
    img: "assets/illust/chapter09/013.svg"
  },
  {
    id: "014",
    tags: ["発展"],
    type: "fill",
    point: "know better than to do",
    question: "He should （　） better than to confess to a girl the night before final exams.",
    answer: ["know"],
    ja: "期末試験の前夜に女子へ告白するなんて、彼はもっと分別があってしかるべきだ。",
    en: "He should know better than to confess to a girl the night before final exams.",
    explanation: "〈know better than to do〉で「〜しないだけの分別がある／〜するほど愚かではない」。直訳は「〜するよりよく知っている」。（※タイミングを見誤る南高男子）",
    img: "assets/illust/chapter09/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "原級（No other ~）→ 最上級への書きかえ",
    question: "次の文を、最上級を使ってほぼ同じ意味に書きかえなさい。\nNo other event at our school is as exciting as the sports festival.",
    answer: [
      "The sports festival is the most exciting event at our school.",
      "The sports festival is the most exciting event at our school"
    ],
    ja: "体育祭は、うちの学校で一番盛り上がる行事だ。",
    en: "The sports festival is the most exciting event at our school.",
    explanation: "No other ~ is as … as A は「Aが一番…だ」。最上級 the most exciting event に書き換える。（※盛り上がりすぎて県教育委員会が注視するレベルの「一番」）",
    img: "assets/illust/chapter09/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "the 比較級, the 比較級 への書きかえ",
    question: "次の2文を〈The 比較級 …, the 比較級 …〉の形で1文にしなさい。\nAs it gets colder, the hot drinks from the school vending machine sell better.",
    answer: [
      "The colder it gets, the better the hot drinks from the school vending machine sell.",
      "The colder it gets, the better the hot drinks from the school vending machine sell"
    ],
    ja: "寒くなればなるほど、校内の自販機の温かい飲み物がよく売れる。",
    en: "The colder it gets, the better the hot drinks from the school vending machine sell.",
    explanation: "比較級 colder と better をそれぞれ文頭に出し、前に the をつけて〈The 比較級 S V, the 比較級 S V〉に。前半の後ろにコンマを打つ。",
    img: "assets/illust/chapter09/016.svg"
  }
];

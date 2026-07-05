/*
 * 第15章「前置詞」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter15",
  no: 15,
  title: "前置詞",
  subtitle: "Prepositions",
  description: "by と until、in / on / at、known to / for / as、rob A of B など、入試で差がつく前置詞の使い分けを総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "by（期限）と until（継続）",
    question: "Hand in the entry form for the talent show （　） Friday.",
    choices: ["until", "by", "till", "during"],
    answerIndex: 1,
    ja: "一芸大会のエントリー用紙は金曜までに提出すること。",
    en: "Hand in the entry form for the talent show by Friday.",
    explanation: "by は「〜までに（期限・完了）」、until / till は「〜までずっと（継続）」。提出は一度きりの動作なので by。hand in は「提出する」。",
    img: "assets/illust/chapter15/001.svg"
  },
  {
    id: "002",
    tags: ["超頻出"],
    type: "choice",
    point: "特定の日の朝は on",
    question: "（　） the morning of the festival, nobody could sit still in class.",
    choices: ["In", "At", "On", "By"],
    answerIndex: 2,
    ja: "南校祭の日の朝は、誰も教室でじっとしていられなかった。",
    en: "On the morning of the festival, nobody could sit still in class.",
    explanation: "ふつうは in the morning だが、「特定の日の朝」は on the morning of ~ になる。on Sunday morning も同じ発想。sit still は「じっと座っている」。",
    img: "assets/illust/chapter15/002.svg"
  },
  {
    id: "003",
    tags: ["基本"],
    type: "choice",
    point: "during + 名詞（期間）",
    question: "He read twenty novels （　） the summer vacation.",
    choices: ["while", "during", "between", "among"],
    answerIndex: 1,
    ja: "彼は夏休みの間に小説を20冊読んだ。",
    en: "He read twenty novels during the summer vacation.",
    explanation: "during は前置詞なので後ろに名詞句、while は接続詞なので後ろに S + V が続く。while the summer vacation は不可。第10章の接続詞と合わせて整理しておく。",
    img: "assets/illust/chapter15/003.svg"
  },
  {
    id: "004",
    tags: ["基本"],
    type: "choice",
    point: "道具の with",
    question: "She cut the ribbon （　） the scissors she borrowed from the art room.",
    choices: ["by", "with", "in", "on"],
    answerIndex: 1,
    ja: "彼女は美術室から借りたハサミでリボンを切った。",
    en: "She cut the ribbon with the scissors she borrowed from the art room.",
    explanation: "道具・手段は with + 道具（cut with scissors / write with a pen）。by は by bus のように無冠詞の交通・通信手段に使う。",
    img: "assets/illust/chapter15/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出"],
    type: "choice",
    point: "be known as「〜として知られる」",
    question: "He is known （　） the best mimic in school.",
    choices: ["to", "for", "as", "by"],
    answerIndex: 2,
    ja: "彼は校内一のモノマネ名人として知られている。",
    en: "He is known as the best mimic in school.",
    explanation: "be known as ~「〜として」、be known to ~「〜に」、be known for ~「〜（の理由）で」。「名人として」という肩書なので as。3つの区別が超頻出。",
    img: "assets/illust/chapter15/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "in time（間に合って）",
    question: "We arrived just （　） time for the opening act of the school festival.",
    choices: ["on", "in", "at", "by"],
    answerIndex: 1,
    ja: "僕らは南校祭のオープニングアクトにぎりぎり間に合った。",
    en: "We arrived just in time for the opening act of the school festival.",
    explanation: "in time は「間に合って」、on time は「時間ぴったりに」。just in time で「ぎりぎり間に合って」。for ~ で「〜に（間に合う）」と対象を示す。",
    img: "assets/illust/chapter15/006.svg"
  },
  {
    id: "007",
    tags: ["発展"],
    type: "choice",
    point: "rob A of B（分離の of）",
    question: "Someone robbed the clubroom （　） its precious trophy.",
    choices: ["of", "from", "off", "out"],
    answerIndex: 0,
    ja: "何者かが部室から大切なトロフィーを奪っていった。",
    en: "Someone robbed the clubroom of its precious trophy.",
    explanation: "rob A of B「AからBを奪う」の of は「分離」を表す。deprive A of B / cure A of B も同じ型。steal なら steal B from A と語順が変わる点に注意。",
    img: "assets/illust/chapter15/007.svg"
  },
  {
    id: "008",
    tags: ["超頻出"],
    type: "error",
    point: "be married to ~",
    question: "My cousin got ①married ②with ③a musician ④last spring.",
    choices: ["①married", "②with", "③a musician", "④last spring"],
    answerIndex: 1,
    ja: "いとこは去年の春、ミュージシャンと結婚した。",
    en: "My cousin got married to a musician last spring.",
    explanation: "「〜と結婚する」は marry ~ または get married to ~。日本語の「〜と」につられて with としないのが定番ポイント。",
    img: "assets/illust/chapter15/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "discuss は他動詞（about 不要）",
    question: "We ①discussed ②about ③the plan ④for the school festival.",
    choices: ["①discussed", "②about", "③the plan", "④for the school festival"],
    answerIndex: 1,
    ja: "私たちは南校祭の計画について話し合った。",
    en: "We discussed the plan for the school festival.",
    explanation: "discuss は他動詞なので前置詞不要（discuss the plan）。同様に marry / enter / reach / approach / attend も前置詞を付けない。「余計な前置詞」を探させる超定番。",
    img: "assets/illust/chapter15/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "in spite of ~「〜にもかかわらず」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「大雪にもかかわらず、彼は半袖で登校してきた。」",
    pieces: ["In spite of", "the heavy snow", "he", "came", "to school", "in short sleeves"],
    answer: "In spite of the heavy snow he came to school in short sleeves",
    ja: "大雪にもかかわらず、彼は半袖で登校してきた。",
    en: "In spite of the heavy snow, he came to school in short sleeves.",
    explanation: "in spite of + 名詞句 = despite + 名詞句「〜にもかかわらず」。節を続けるなら although S + V にする。in short sleeves は「半袖姿で」の in（着用）。（※第1章の彼は今日も元気です）",
    img: "assets/illust/chapter15/010.svg"
  },
  {
    id: "011",
    tags: ["基本"],
    type: "ordering",
    point: "thanks to ~「〜のおかげで」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼女の助言のおかげで、僕はバンドのオーディションに受かった。」",
    pieces: ["Thanks to", "her advice", "I", "passed", "the audition", "for the school band"],
    answer: "Thanks to her advice I passed the audition for the school band",
    ja: "彼女の助言のおかげで、僕はバンドのオーディションに受かった。",
    en: "Thanks to her advice, I passed the audition for the school band.",
    explanation: "thanks to ~「〜のおかげで」（良い原因）。悪い原因なら because of / due to ~ が合う。pass the audition は「オーディションに合格する」。",
    img: "assets/illust/chapter15/011.svg"
  },
  {
    id: "012",
    tags: ["基本"],
    type: "fill",
    point: "be proud of ~",
    question: "He is secretly proud （　） his impression of our principal.",
    answer: ["of"],
    ja: "彼は校長先生のモノマネをひそかに誇りにしている。",
    en: "He is secretly proud of his impression of our principal.",
    explanation: "be proud of ~「〜を誇りに思う」。形容詞と前置詞のセット（be afraid of / be famous for / be interested in など）は熟語としてまとめて覚える。",
    img: "assets/illust/chapter15/012.svg"
  },
  {
    id: "013",
    tags: ["発展"],
    type: "fill",
    point: "within walking distance of ~",
    question: "The gym is within walking distance （　） the station.",
    answer: ["of"],
    ja: "その体育館は駅から歩いて行ける距離にある。",
    en: "The gym is within walking distance of the station.",
    explanation: "within walking distance of ~「〜から徒歩圏内で」。日本語の「〜から」につられて from としないのがポイント（from も許容されることはあるが、of が標準）。",
    img: "assets/illust/chapter15/013.svg"
  },
  {
    id: "014",
    tags: ["超頻出"],
    type: "fill",
    point: "on foot（徒歩で）",
    question: "He missed the last bus and had to go home （　） foot.",
    answer: ["on"],
    ja: "彼は最終バスを逃して、歩いて帰るはめになった。",
    en: "He missed the last bus and had to go home on foot.",
    explanation: "交通手段は by bus / by bike だが、「徒歩で」だけは on foot。by foot としないのが定番のひっかけ。（※第10章で急がなかった彼の末路）",
    img: "assets/illust/chapter15/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "Because 節 → Because of 句",
    question: "次の文を、Because of で始めてほぼ同じ意味に書き換えなさい。\nBecause it snowed heavily, the morning practice was canceled.",
    answer: [
      "Because of the heavy snow, the morning practice was canceled.",
      "Because of the heavy snow, the morning practice was canceled",
      "Because of the heavy snow the morning practice was canceled.",
      "Because of the heavy snow the morning practice was canceled"
    ],
    ja: "大雪のため、朝練は中止になった。",
    en: "Because of the heavy snow, the morning practice was canceled.",
    explanation: "節（it snowed heavily）を名詞句（the heavy snow）に変えて because of に続ける。「動詞の内容を名詞化する」この変換は、due to / owing to でも同じように使える。",
    img: "assets/illust/chapter15/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "While 節 → During 句",
    question: "次の文を、During で始めてほぼ同じ意味に書き換えなさい。\nWhile I was staying in Sendai, I went to three concerts.",
    answer: [
      "During my stay in Sendai, I went to three concerts.",
      "During my stay in Sendai, I went to three concerts",
      "During my stay in Sendai I went to three concerts.",
      "During my stay in Sendai I went to three concerts"
    ],
    ja: "仙台に滞在している間に、私は3回コンサートに行った。",
    en: "During my stay in Sendai, I went to three concerts.",
    explanation: "While I was staying（節）→ During my stay（句）。接続詞 while と前置詞 during の書き換えは和文英訳でも頻出。stay を名詞として使うのがコツ。",
    img: "assets/illust/chapter15/016.svg"
  }
];

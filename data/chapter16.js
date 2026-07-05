/*
 * 第16章「動詞の語法」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter16",
  no: 16,
  title: "動詞の語法",
  subtitle: "Verb Usage",
  description: "borrow / lend、say / tell、raise / rise、lie / lay など、意味が近くて形が紛らわしい動詞の使い分けを総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "lend（貸す）と borrow（借りる）",
    question: "Could you （　） me your notes before tomorrow's quiz?",
    choices: ["borrow", "lend", "rent", "use"],
    answerIndex: 1,
    ja: "明日の小テストの前に、ノートを貸してくれない？",
    en: "Could you lend me your notes before tomorrow's quiz?",
    explanation: "lend + 人 + 物「人に物を貸す」、borrow + 物「物を借りる」。主語が貸す側なら lend。rent は家や車など有料の貸し借りに使う。",
    img: "assets/illust/chapter16/001.svg"
  },
  {
    id: "002",
    tags: ["基本"],
    type: "choice",
    point: "speak + 言語",
    question: "She can （　） three languages, which amazed the exchange students.",
    choices: ["say", "tell", "speak", "talk"],
    answerIndex: 2,
    ja: "彼女は3か国語を話せて、交換留学生たちを驚かせた。",
    en: "She can speak three languages, which amazed the exchange students.",
    explanation: "言語を「話せる」は speak + 言語。say は発言内容、tell は人に伝える、talk は「おしゃべりする」（自動詞中心）。which は前の文全体を受ける非制限用法。",
    img: "assets/illust/chapter16/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "raise（他動詞）と rise（自動詞）",
    question: "（　） your hand if you want the last rice ball from the cafeteria lady.",
    choices: ["Rise", "Raise", "Arise", "Rose"],
    answerIndex: 1,
    ja: "おばちゃんの最後のおにぎりが欲しい人は手を挙げて。",
    en: "Raise your hand if you want the last rice ball from the cafeteria lady.",
    explanation: "raise は「〜を上げる」（他動詞・目的語が必要）、rise は「上がる」（自動詞）。your hand という目的語があるので raise。The sun rises. と対比で覚える。",
    img: "assets/illust/chapter16/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "suit（人に似合う）",
    question: "That stage costume really （　） you — wear it at the show.",
    choices: ["fits", "suits", "matches", "meets"],
    answerIndex: 1,
    ja: "そのステージ衣装、君に本当に似合ってるよ。本番でそれを着なよ。",
    en: "That stage costume really suits you — wear it at the show.",
    explanation: "suit は「（色・スタイルが）人に似合う」、fit は「（サイズが）合う」、match は「（物と物が）調和する」。「似合う」なので suits。",
    img: "assets/illust/chapter16/004.svg"
  },
  {
    id: "005",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "let + O + 動詞の原形",
    question: "My parents won't let me （　） to the late-night radio show on weekdays.",
    choices: ["to listen", "listening", "listen", "listened"],
    answerIndex: 2,
    ja: "両親は平日に深夜ラジオを聴かせてくれない。",
    en: "My parents won't let me listen to the late-night radio show on weekdays.",
    explanation: "使役動詞 let / make / have + O + 動詞の原形。let me to listen とはしない。（※お笑い芸人のラジオを聴きたい年頃。イヤホンで隠れて聴くかは自己責任）",
    img: "assets/illust/chapter16/005.svg"
  },
  {
    id: "006",
    tags: ["発展"],
    type: "choice",
    point: "lie（横になる）の過去形は lay",
    question: "Feeling dizzy after the marathon, he （　） down on the bench.",
    choices: ["lay", "laid", "lied", "lain"],
    answerIndex: 0,
    ja: "マラソンのあと目まいがして、彼はベンチに横になった。",
    en: "Feeling dizzy after the marathon, he lay down on the bench.",
    explanation: "lie（横になる）- lay - lain / lay（〜を置く）- laid - laid / lie（嘘をつく）- lied - lied。「横になった」（過去）なので lay。3系列の活用の混同を突く超定番問題。",
    img: "assets/illust/chapter16/006.svg"
  },
  {
    id: "007",
    tags: ["超頻出"],
    type: "choice",
    point: "remind A of B「AにBを思い出させる」",
    question: "This melody （　） me of our final performance at the gym.",
    choices: ["remembers", "reminds", "recalls", "memorizes"],
    answerIndex: 1,
    ja: "このメロディーを聴くと、体育館での最後の演奏を思い出す。",
    en: "This melody reminds me of our final performance at the gym.",
    explanation: "remind A of B「AにBを思い出させる」。主語が「物」で人に思い出させる型。remember は「（自分が）覚えている・思い出す」で、物を主語にこの意味では使えない。",
    img: "assets/illust/chapter16/007.svg"
  },
  {
    id: "008",
    tags: ["超頻出"],
    type: "error",
    point: "explain + 物 + to + 人",
    question: "The teacher ①explained ②us ③the new rule ④in detail.",
    choices: ["①explained", "②us", "③the new rule", "④in detail"],
    answerIndex: 1,
    ja: "先生は新しい規則を私たちに詳しく説明した。",
    en: "The teacher explained the new rule to us in detail.",
    explanation: "explain は explain + 物 + to + 人 の語順で、explain us the rule のような二重目的語は取れない。suggest / propose / introduce も同じ型。②の us が誤り。",
    img: "assets/illust/chapter16/008.svg"
  },
  {
    id: "009",
    tags: ["基本", "超頻出"],
    type: "error",
    point: "say と tell の使い分け",
    question: "He ①said ②me ③that the audition ④was postponed.",
    choices: ["①said", "②me", "③that the audition", "④was postponed"],
    answerIndex: 0,
    ja: "彼はオーディションが延期になったと私に言った。",
    en: "He told me that the audition was postponed.",
    explanation: "「人に〜と言う」は tell + 人 + that節。say を使うなら say to me that ~ とする。①の said をそのまま人に続けているのが誤り。",
    img: "assets/illust/chapter16/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "keep + O + waiting「待たせる」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「おばちゃんは揚げたての揚げパンのために、僕らを10分待たせた。」",
    pieces: ["The cafeteria lady", "kept", "us", "waiting", "for ten minutes", "for fresh fried bread"],
    answer: "The cafeteria lady kept us waiting for ten minutes for fresh fried bread",
    ja: "おばちゃんは揚げたての揚げパンのために、僕らを10分待たせた。",
    en: "The cafeteria lady kept us waiting for ten minutes for fresh fried bread.",
    explanation: "keep + O + ~ing「Oを〜させ続ける」。I'm sorry to have kept you waiting.（お待たせしました）も同じ型の定番表現。（※揚げたてなら10分など安いもの）",
    img: "assets/illust/chapter16/010.svg"
  },
  {
    id: "011",
    tags: ["基本", "超頻出"],
    type: "ordering",
    point: "It takes + 人 + 時間 + to do",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「新しい応援歌を覚えるのに3時間かかった。」",
    pieces: ["It", "took", "me", "three hours", "to memorize", "the new cheer song"],
    answer: "It took me three hours to memorize the new cheer song",
    ja: "新しい応援歌を覚えるのに3時間かかった。",
    en: "It took me three hours to memorize the new cheer song.",
    explanation: "It takes + 人 + 時間 + to do「人が〜するのに時間がかかる」。お金なら It costs + 人 + 金額 + to do。この take / cost のペアは頻出。",
    img: "assets/illust/chapter16/011.svg"
  },
  {
    id: "012",
    tags: ["超頻出"],
    type: "fill",
    point: "cost の過去形は cost",
    question: "The concert ticket （　） me two thousand yen, but it was worth every yen.",
    answer: ["cost"],
    ja: "コンサートのチケットは2000円したが、1円残らず価値があった。",
    en: "The concert ticket cost me two thousand yen, but it was worth every yen.",
    explanation: "cost - cost - cost（無変化）。cost + 人 + 金額「人に（金額）がかかる」。worth every yen は worth every penny のもじりで「払った分の価値が完全にある」。",
    img: "assets/illust/chapter16/012.svg"
  },
  {
    id: "013",
    tags: ["基本"],
    type: "fill",
    point: "graduate from ~",
    question: "My sister will graduate （　） high school this spring.",
    answer: ["from"],
    ja: "姉はこの春、高校を卒業する。",
    en: "My sister will graduate from high school this spring.",
    explanation: "graduate from ~「〜を卒業する」。日本語の「〜を」につられて graduate high school（前置詞なし）としないこと（口語では見られるが、入試では from を付ける）。",
    img: "assets/illust/chapter16/013.svg"
  },
  {
    id: "014",
    tags: ["発展"],
    type: "fill",
    point: "make oneself understood",
    question: "I couldn't make myself （　） in English on the first day of the homestay.",
    answer: ["understood"],
    ja: "ホームステイ初日、英語で自分の言いたいことを伝えられなかった。",
    en: "I couldn't make myself understood in English on the first day of the homestay.",
    explanation: "make oneself understood「自分の言うことを理解してもらう」。myself は「理解される」側なので過去分詞 understood。make oneself heard（声を届かせる）も同じ型。",
    img: "assets/illust/chapter16/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "直接話法 → tell + 人 + to do",
    question: "次の文を、tell を使ってほぼ同じ意味に書き換えなさい。\nShe said to me, \"Practice the steps every day.\"",
    answer: [
      "She told me to practice the steps every day.",
      "She told me to practice the steps every day"
    ],
    ja: "彼女は僕に、毎日ステップを練習するように言った。",
    en: "She told me to practice the steps every day.",
    explanation: "命令文の直接話法は tell + 人 + to do の間接話法に書き換える。否定の命令なら tell + 人 + not to do。（※ワルツ本番まであと2週間、特訓は続く）",
    img: "assets/illust/chapter16/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "borrow → lend の視点変換",
    question: "次の文を、lend を使ってほぼ同じ意味に書き換えなさい。\nMay I borrow your bike?",
    answer: [
      "Will you lend me your bike?",
      "Will you lend me your bike",
      "Could you lend me your bike?",
      "Could you lend me your bike",
      "Can you lend me your bike?",
      "Can you lend me your bike",
      "Would you lend me your bike?",
      "Would you lend me your bike"
    ],
    ja: "自転車を貸してもらえますか。",
    en: "Will you lend me your bike?",
    explanation: "borrow（借りる）を lend（貸す）で言い換えると、主語が自分から相手に変わる。May I borrow ~? = Will / Could you lend me ~? の視点変換は会話問題でも頻出。",
    img: "assets/illust/chapter16/016.svg"
  }
];

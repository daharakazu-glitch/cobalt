/*
 * 第12章「名詞・冠詞」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter12",
  no: 12,
  title: "名詞・冠詞",
  subtitle: "Nouns & Articles",
  description: "不可算名詞の数え方、a / an / the / 無冠詞の使い分け、単数・複数の一致まで、名詞まわりの落とし穴を総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "advice は不可算名詞",
    question: "Our teacher gave us three pieces of useful （　） about the entrance exam.",
    choices: ["advices", "advice", "an advice", "the advices"],
    answerIndex: 1,
    ja: "先生は入試について役立つ助言を3つしてくれた。",
    en: "Our teacher gave us three pieces of useful advice about the entrance exam.",
    explanation: "advice / information / news / furniture などは不可算名詞。数えるときは a piece of ~ / three pieces of ~ の形を使い、複数形の -s は付けない。",
    img: "assets/illust/chapter12/001.svg"
  },
  {
    id: "002",
    tags: ["基本"],
    type: "choice",
    point: "楽器には the",
    question: "She has played （　） violin since she was four, and it shows on stage.",
    choices: ["a", "an", "the", "some"],
    answerIndex: 2,
    ja: "彼女は4歳からバイオリンを弾いていて、それはステージを見れば分かる。",
    en: "She has played the violin since she was four, and it shows on stage.",
    explanation: "play + the + 楽器（play the piano / the guitar）。一方、スポーツは無冠詞（play soccer）。it shows は「（それが）見て取れる」。",
    img: "assets/illust/chapter12/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "学問名は単数扱い",
    question: "Mathematics （　） actually my favorite subject, believe it or not.",
    choices: ["are", "is", "were", "have been"],
    answerIndex: 1,
    ja: "信じられないかもしれないけど、実は数学が一番好きな科目なんだ。",
    en: "Mathematics is actually my favorite subject, believe it or not.",
    explanation: "mathematics / physics / economics / news などは -s で終わっていても単数扱い。believe it or not は「信じようと信じまいと」。",
    img: "assets/illust/chapter12/003.svg"
  },
  {
    id: "004",
    tags: ["基本"],
    type: "choice",
    point: "発音が母音なら an",
    question: "The dress rehearsal lasted more than （　） hour, but nobody complained.",
    choices: ["a", "an", "the", "one of"],
    answerIndex: 1,
    ja: "通し稽古は1時間以上続いたが、誰も文句を言わなかった。",
    en: "The dress rehearsal lasted more than an hour, but nobody complained.",
    explanation: "a / an は綴りではなく発音で決まる。hour は h を発音しないので an hour。逆に university は発音が子音 /j/ で始まるので a university。",
    img: "assets/illust/chapter12/004.svg"
  },
  {
    id: "005",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "本来の目的なら無冠詞",
    question: "His little sister is finally old enough to go to （　）.",
    choices: ["school", "a school", "the school", "schools"],
    answerIndex: 0,
    ja: "彼の妹もついに学校に通う年齢になった。",
    en: "His little sister is finally old enough to go to school.",
    explanation: "go to school（授業を受けに行く）/ go to bed（寝る）のように、本来の目的で使うときは無冠詞。go to the school なら「（建物としての）その学校へ行く」。",
    img: "assets/illust/chapter12/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "二重所有格 a friend of mine",
    question: "A friend of （　） is famous in three schools for his juggling.",
    choices: ["me", "my", "mine", "myself"],
    answerIndex: 2,
    ja: "僕の友達の一人は、ジャグリングで3つの学校に名をとどろかせている。",
    en: "A friend of mine is famous in three schools for his juggling.",
    explanation: "a / this / that と所有格は名詞の前に並べられないので、a friend of mine という二重所有格の形を使う。a my friend は不可。",
    img: "assets/illust/chapter12/006.svg"
  },
  {
    id: "007",
    tags: ["基本"],
    type: "choice",
    point: "luggage は不可算",
    question: "How （　） luggage are you taking to the training camp?",
    choices: ["many", "much", "a few", "several"],
    answerIndex: 1,
    ja: "合宿にはどれくらいの荷物を持っていくの？",
    en: "How much luggage are you taking to the training camp?",
    explanation: "luggage / baggage（荷物）は不可算名詞なので how much で量を尋ねる。個数を言いたいときは two pieces of luggage のようにする。",
    img: "assets/illust/chapter12/007.svg"
  },
  {
    id: "008",
    tags: ["超頻出"],
    type: "error",
    point: "homework は不可算",
    question: "The teacher gave us ①a lot of ②homeworks ③to finish ④by Monday.",
    choices: ["①a lot of", "②homeworks", "③to finish", "④by Monday"],
    answerIndex: 1,
    ja: "先生は月曜までに終わらせる宿題をどっさり出した。",
    en: "The teacher gave us a lot of homework to finish by Monday.",
    explanation: "homework は不可算名詞なので複数形にできない。②を homework に直す。a lot of は可算・不可算のどちらにも使えるので①は正しい。",
    img: "assets/illust/chapter12/008.svg"
  },
  {
    id: "009",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "the number of ~ は単数扱い",
    question: "①The number of ②students who bring rice balls for lunch ③are ④increasing.",
    choices: ["①The number of", "②students who bring rice balls for lunch", "③are", "④increasing"],
    answerIndex: 2,
    ja: "昼食におにぎりを持参する生徒の数は増えている。",
    en: "The number of students who bring rice balls for lunch is increasing.",
    explanation: "the number of ~「〜の数」は number が主語なので単数扱い（is）。a number of ~「たくさんの〜」なら複数扱いになる。この対比が超頻出。（※おばちゃんのおにぎりと競合中）",
    img: "assets/illust/chapter12/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "二重所有格を文で使う",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「兄の同級生の一人が、プロのお笑い芸人になった。」",
    pieces: ["A classmate", "of", "my brother's", "became", "a professional comedian"],
    answer: "A classmate of my brother's became a professional comedian",
    ja: "兄の同級生の一人が、プロのお笑い芸人になった。",
    en: "A classmate of my brother's became a professional comedian.",
    explanation: "a + 名詞 + of + 所有代名詞/名詞's の二重所有格。my brother's の後ろに classmate が省略されていると考えるとよい。a my brother's classmate とは言えない。",
    img: "assets/illust/chapter12/010.svg"
  },
  {
    id: "011",
    tags: ["基本"],
    type: "ordering",
    point: "by + 無冠詞の交通手段",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「生徒の大半は、冬でも自転車で通学する。」",
    pieces: ["Most of", "the students", "come", "to school", "by bike", "even in winter"],
    answer: "Most of the students come to school by bike even in winter",
    ja: "生徒の大半は、冬でも自転車で通学する。",
    en: "Most of the students come to school by bike even in winter.",
    explanation: "交通手段は by + 無冠詞（by bike / by bus / by train）。by a bike とはしない。Most of the ~ は「その〜の大半」。（※雪の日も自転車を押して登校するのが山形の根性）",
    img: "assets/illust/chapter12/011.svg"
  },
  {
    id: "012",
    tags: ["基本"],
    type: "fill",
    point: "in the morning の the",
    question: "The dance hall is quiet in （　） morning and packed after school.",
    answer: ["the"],
    ja: "ダンスホールは朝は静かで、放課後は満員になる。",
    en: "The dance hall is quiet in the morning and packed after school.",
    explanation: "in the morning / in the afternoon / in the evening は the を付ける定型。ただし at night は無冠詞になる点もセットで覚える。",
    img: "assets/illust/chapter12/012.svg"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "catch + 人 + by the + 身体部位",
    question: "He caught me （　） the arm and dragged me to the karaoke stage.",
    answer: ["by"],
    ja: "彼は僕の腕をつかむと、カラオケのステージへ引っ張っていった。",
    en: "He caught me by the arm and dragged me to the karaoke stage.",
    explanation: "catch / take / pull + 人 + by the + 身体部位 の形では、所有格ではなく the を使う（caught my arm より catch me by the arm が定型）。（※指名されたら逃げられない一芸ルール）",
    img: "assets/illust/chapter12/013.svg"
  },
  {
    id: "014",
    tags: ["超頻出"],
    type: "fill",
    point: "集合名詞 audience",
    question: "Her first live show drew a large （　） of nearly two hundred people.",
    answer: ["audience", "crowd"],
    ja: "彼女の初ライブは、200人近い大観衆を集めた。",
    en: "Her first live show drew a large audience of nearly two hundred people.",
    explanation: "「多くの観客」は a large audience（× many audiences）。audience / family / team などの集合名詞は、大小を large / small で表す。draw は「（人を）引き寄せる・集める」。",
    img: "assets/illust/chapter12/014.svg"
  },
  {
    id: "015",
    tags: ["発展"],
    type: "rewrite",
    point: "不可算名詞の数え方",
    question: "次の文の下線部の誤りを直し、正しい文に書き換えなさい。\nHe bought three chalks for the art project.",
    answer: [
      "He bought three pieces of chalk for the art project.",
      "He bought three pieces of chalk for the art project",
      "He bought three sticks of chalk for the art project.",
      "He bought three sticks of chalk for the art project"
    ],
    ja: "彼は美術の課題のためにチョークを3本買った。",
    en: "He bought three pieces of chalk for the art project.",
    explanation: "chalk は不可算名詞なので three chalks とは言えない。three pieces of chalk（または sticks of chalk）と単位名詞を使って数える。paper（紙）→ a sheet of paper も同じ発想。",
    img: "assets/illust/chapter12/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "of の所有 → 's の所有格",
    question: "次の文を、's を使ってほぼ同じ意味に書き換えなさい。\nHe borrowed the camera of his father without asking.",
    answer: [
      "He borrowed his father's camera without asking.",
      "He borrowed his father's camera without asking"
    ],
    ja: "彼は父さんのカメラを黙って借りていった。",
    en: "He borrowed his father's camera without asking.",
    explanation: "人・生き物の所有は of ~ より 's を使うのが自然（his father's camera）。無生物には of を使うことが多い（the legs of the table）。without asking は「断りなく」。",
    img: "assets/illust/chapter12/016.svg"
  }
];

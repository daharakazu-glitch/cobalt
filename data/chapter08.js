/*
 * 第8章「関係詞」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter08",
  no: 8,
  title: "関係詞",
  subtitle: "Relatives",
  description: "関係代名詞（who/which/whose/that/what）、関係副詞（where/when/why）、前置詞＋関係代名詞、非制限用法、複合関係詞まで、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "主格の関係代名詞 who（人）",
    question: "The pitcher （　） threw 160 kilometers per hour in high school is now a national hero.",
    choices: ["which", "who", "whom", "whose"],
    answerIndex: 1,
    ja: "高校時代に時速160キロを投げたあの投手は、いまや国民的ヒーローだ。",
    en: "The pitcher who threw 160 kilometers per hour in high school is now a national hero.",
    explanation: "先行詞が人（the pitcher）で、関係詞節の主語が欠けているので主格の who（that も可）。（※高校生で160km/h。実在するのだから野球は恐ろしい）",
    img: "assets/illust/chapter08/001.svg"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "目的格の関係代名詞 which（物）",
    question: "The bold calligraphy （　） the calligraphy club hangs in the hallway stops everyone in their tracks.",
    choices: ["who", "which", "whose", "what"],
    answerIndex: 1,
    ja: "書道部が廊下に掲げる力強い書は、通りかかる誰の足をも止めさせる。",
    en: "The bold calligraphy which the calligraphy club hangs in the hallway stops everyone in their tracks.",
    explanation: "先行詞が物（calligraphy）で、後ろの文では hangs の目的語が欠けているので目的格の which（that も可、省略も可）。what は先行詞を含むためここでは使えない。",
    img: "assets/illust/chapter08/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "所有格の関係代名詞 whose",
    question: "Chaplin was a comedian （　） films still make the whole world laugh a century later.",
    choices: ["who", "which", "whose", "whom"],
    answerIndex: 2,
    ja: "チャップリンは、その映画が100年後の今も世界中を笑わせている喜劇役者だ。",
    en: "Chaplin was a comedian whose films still make the whole world laugh a century later.",
    explanation: "「その人の〜が…」という所有の関係は whose + 名詞（whose films）。先行詞が人でも物でも whose が使える。（※お笑いの大大大先輩。100年もつ笑いは本物）",
    img: "assets/illust/chapter08/003.svg"
  },
  {
    id: "004",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "関係副詞 where（場所）",
    question: "The old gym is the place （　） our cheer squad has trained for decades.",
    choices: ["which", "where", "when", "that"],
    answerIndex: 1,
    ja: "あの古い体育館は、応援団が何十年も練習してきた場所だ。",
    en: "The old gym is the place where our cheer squad has trained for decades.",
    explanation: "先行詞が場所で、関係詞節が完全な文（train は自動詞的で目的語なし）なので関係副詞 where。",
    img: "assets/illust/chapter08/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出"],
    type: "choice",
    point: "関係副詞 when（時）",
    question: "I'll never forget the day （　） a shy kid brought the whole gym to tears with just one song.",
    choices: ["which", "where", "when", "what"],
    answerIndex: 2,
    ja: "内気な子がたった一曲で体育館中を涙させたあの日を、僕は一生忘れないだろう。",
    en: "I'll never forget the day when a shy kid brought the whole gym to tears with just one song.",
    explanation: "先行詞が時（the day）で、後ろが完全な文なので関係副詞 when。（※一芸で全校を泣かせた伝説）",
    img: "assets/illust/chapter08/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "先行詞を含む関係代名詞 what",
    question: "（　） impressed everyone most was just how cheap and tasty the cafeteria menu is.",
    choices: ["That", "Which", "What", "It"],
    answerIndex: 2,
    ja: "みんなが一番感心したのは、食堂のメニューがいかに安くておいしいかということだった。",
    en: "What impressed everyone most was just how cheap and tasty the cafeteria menu is.",
    explanation: "先行詞を含み「〜すること・もの」を表すのは関係代名詞 what（＝the thing which）。文の主語になっている。（※安くて旨い南高食堂）",
    img: "assets/illust/chapter08/006.svg"
  },
  {
    id: "007",
    tags: ["発展"],
    type: "choice",
    point: "前置詞 + 関係代名詞",
    question: "This is the very microphone （　） he performed his legendary stand-up act last year.",
    choices: ["which", "that", "with which", "where"],
    answerIndex: 2,
    ja: "これこそ、彼が去年あの伝説の漫才を披露したまさにそのマイクだ。",
    en: "This is the very microphone with which he performed his legendary stand-up act last year.",
    explanation: "perform … with the microphone の with が前に出た形が with which。前置詞＋関係代名詞では that は使えない。（※一芸伝説を生んだマイク）",
    img: "assets/illust/chapter08/007.svg"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "非制限用法に that は使えない",
    question: "My favorite band, ①that ②released a new single yesterday, ③is coming ④to a city near us.",
    choices: ["①that", "②released a new single yesterday", "③is coming", "④to a city near us"],
    answerIndex: 0,
    ja: "私の大好きなバンドが、昨日新曲を出して、近くの市に来る。",
    en: "My favorite band, which released a new single yesterday, is coming to a city near us.",
    explanation: "コンマ付きの非制限用法（継続用法）では関係代名詞 that は使えない。①は that ではなく which が正しい。（※推しバンドが県内に）",
    img: "assets/illust/chapter08/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "関係副詞 where と関係代名詞 which の区別",
    question: "The cafeteria ①is a place ②which ③almost everyone ④gathers during the lunch break.",
    choices: ["①is a place", "②which", "③almost everyone", "④gathers during the lunch break"],
    answerIndex: 1,
    ja: "食堂は、昼休みにほとんど全員が集まる場所だ。",
    en: "The cafeteria is a place where almost everyone gathers during the lunch break.",
    explanation: "後ろが完全な文（gather は自動詞で目的語なし）なので、関係代名詞 which ではなく関係副詞 where（＝at which）が正しい。②を where にする。（※昼は満員の南高食堂）",
    img: "assets/illust/chapter08/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "前置詞 + 関係代名詞（at which）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「これは、僕が初めて女子に話しかけた南校祭だ。」",
    pieces: ["This", "is", "the festival", "at which", "I", "first", "talked to", "a girl"],
    answer: "This is the festival at which I first talked to a girl",
    ja: "これは、僕が初めて女子に話しかけた南校祭だ。",
    en: "This is the festival at which I first talked to a girl.",
    explanation: "talk to a girl at the festival の at が関係代名詞の前に出て at which。where で言い換えることもできる。（※人生初の勇気を出した記念すべき南校祭…その後は聞かないでほしい南高男子）",
    img: "assets/illust/chapter08/010.svg"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "数量表現 + of whom（非制限用法）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「ハンドボール部には20人の部員がいて、その多くが週末は他の部の助っ人もしている。」",
    pieces: ["Our handball club", "has", "twenty members", "many of whom", "help other teams", "on weekends"],
    answer: "Our handball club has twenty members many of whom help other teams on weekends",
    ja: "ハンドボール部には20人の部員がいて、その多くが週末は他の部の助っ人もしている。",
    en: "Our handball club has twenty members, many of whom help other teams on weekends.",
    explanation: "数量表現 + of whom / of which の非制限用法。many of whom = and many of them。書くときはコンマを添える。（※部活の垣根を越えて助け合うのも南高流）",
    img: "assets/illust/chapter08/011.svg"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "関係代名詞 what（〜するもの）",
    question: "A cup of hot soup at the summit is exactly （　） an exhausted climber needs.",
    answer: ["what"],
    ja: "山頂での温かいスープ一杯こそ、疲れ果てた登山者がまさに必要とするものだ。",
    en: "A cup of hot soup at the summit is exactly what an exhausted climber needs.",
    explanation: "先行詞を含む関係代名詞 what「〜するもの・こと」= the thing(s) which。（※山岳部の合言葉は『山頂の一杯のために登る』）",
    img: "assets/illust/chapter08/012.svg"
  },
  {
    id: "013",
    tags: ["発展"],
    type: "fill",
    point: "関係副詞 why（理由）",
    question: "Nobody could explain the reason （　） the cat showed up at the school gate every single morning.",
    answer: ["why"],
    ja: "なぜその猫が毎朝欠かさず校門に現れるのか、誰も理由を説明できなかった。",
    en: "Nobody could explain the reason why the cat showed up at the school gate every single morning.",
    explanation: "先行詞 the reason に続く関係副詞は why。the reason か why のどちらか一方を省略することも多い。show up は「現れる」。（※その猫、3年間無遅刻無欠席だったらしい）",
    img: "assets/illust/chapter08/013.svg"
  },
  {
    id: "014",
    tags: ["超頻出"],
    type: "fill",
    point: "複合関係代名詞 whoever（〜する人は誰でも）",
    question: "（　） scores the winning goal will be carried around the field by the whole team.",
    answer: ["Whoever"],
    ja: "決勝ゴールを決めた者は誰でも、チーム全員にフィールドを一周担がれることになっている。",
    en: "Whoever scores the winning goal will be carried around the field by the whole team.",
    explanation: "whoever = anyone who「〜する人は誰でも」。whoever 自体が節の中の主語を兼ねる。（※担がれた本人はだいたい照れて下を向いている）",
    img: "assets/illust/chapter08/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "2文を whose で1文に",
    question: "次の2文を、関係代名詞 whose を使って1文にしなさい。\nI have a friend. His father is a famous comedian.",
    answer: [
      "I have a friend whose father is a famous comedian.",
      "I have a friend whose father is a famous comedian"
    ],
    ja: "私には、父親が有名なお笑い芸人である友人がいる。",
    en: "I have a friend whose father is a famous comedian.",
    explanation: "his father の所有格 his を、所有格の関係代名詞 whose に置き換えて2文をつなぐ。a friend whose father …（父親が〜な友人）。",
    img: "assets/illust/chapter08/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "非制限用法の which（前文全体を受ける）",
    question: "次の2文を、関係代名詞 which を使って1文にしなさい。\nHe recommended a new song to me. It quickly became my favorite.",
    answer: [
      "He recommended a new song to me, which quickly became my favorite.",
      "He recommended a new song to me, which quickly became my favorite"
    ],
    ja: "彼は僕にある新曲を薦めてくれて、それがすぐにお気に入りになった。",
    en: "He recommended a new song to me, which quickly became my favorite.",
    explanation: "コンマ＋which の非制限用法で、前の名詞（a new song）を補足説明する。継続用法では that は使えない点にも注意。（※推し曲が増える瞬間）",
    img: "assets/illust/chapter08/016.svg"
  }
];

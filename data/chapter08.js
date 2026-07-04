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
    question: "The student （　） won the talent show now gets mobbed in the hallway every break.",
    choices: ["which", "who", "whom", "whose"],
    answerIndex: 1,
    ja: "一芸大会で優勝した生徒は、今や休み時間のたびに廊下で取り囲まれる。",
    en: "The student who won the talent show now gets mobbed in the hallway every break.",
    explanation: "先行詞が人で、関係詞節の中で主語の働きをするので主格 who。（※一芸披露で喝采を浴びると一躍スターの南高）"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "目的格の関係代名詞 which（物）",
    question: "The fried bread （　） the cafeteria ladies sell every morning is the best in the whole prefecture.",
    choices: ["who", "which", "whose", "what"],
    answerIndex: 1,
    ja: "食堂のおばちゃんたちが毎朝売る揚げパンは、県内で一番だ。",
    en: "The fried bread which the cafeteria ladies sell every morning is the best in the whole prefecture.",
    explanation: "先行詞が物で、関係詞節の中で sell の目的語になるので目的格 which（that も可）。（※コスパ最強の名物・揚げパン）"
  },
  {
    id: "003",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "所有格の関係代名詞 whose",
    question: "There's a first-year （　） beatboxing is so good that even the music teacher was left speechless.",
    choices: ["who", "which", "whose", "whom"],
    answerIndex: 2,
    ja: "ビートボックスがうますぎて音楽の先生さえ言葉を失った1年生がいる。",
    en: "There's a first-year whose beatboxing is so good that even the music teacher was left speechless.",
    explanation: "「その〜」と所有の関係を表すのは所有格 whose。whose beatboxing（その子のビートボックス）。（※意外な才能で注目を集める一芸）"
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
    explanation: "先行詞が場所で、関係詞節が完全な文（train は自動詞的で目的語なし）なので関係副詞 where。"
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
    explanation: "先行詞が時（the day）で、後ろが完全な文なので関係副詞 when。（※一芸で全校を泣かせた伝説）"
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
    explanation: "先行詞を含み「〜すること・もの」を表すのは関係代名詞 what（＝the thing which）。文の主語になっている。（※安くて旨い南高食堂）"
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
    explanation: "perform … with the microphone の with が前に出た形が with which。前置詞＋関係代名詞では that は使えない。（※一芸伝説を生んだマイク）"
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
    explanation: "コンマ付きの非制限用法（継続用法）では関係代名詞 that は使えない。①は that ではなく which が正しい。（※推しバンドが県内に）"
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
    explanation: "後ろが完全な文（gather は自動詞で目的語なし）なので、関係代名詞 which ではなく関係副詞 where（＝at which）が正しい。②を where にする。（※昼は満員の南高食堂）"
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
    explanation: "talk to a girl at the festival の at が関係代名詞の前に出て at which。where で言い換えることもできる。（※人生初の勇気を出した記念すべき南校祭…その後は聞かないでほしい南高男子）"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "数量表現 + of whom（非制限用法）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「その部には20人の部員がいて、その多くが一芸自慢だ。」",
    pieces: ["The club", "has", "twenty members", "many of whom", "are proud of", "their party tricks"],
    answer: "The club has twenty members many of whom are proud of their party tricks",
    ja: "その部には20人の部員がいて、その多くが一芸自慢だ。",
    en: "The club has twenty members, many of whom are proud of their party tricks.",
    explanation: "〈数量 + of + whom/which〉は非制限用法で「そのうちの〜」を表す。many of whom（そのうちの多く）。party trick は「宴会芸・一芸」。"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "関係代名詞 what（〜するもの）",
    question: "This cheap, filling karaage is exactly （　） a hungry high schooler needs after practice.",
    answer: ["what"],
    ja: "この安くてボリュームのある唐揚げは、練習後の腹ペコの高校生がまさに必要とするものだ。",
    en: "This cheap, filling karaage is exactly what a hungry high schooler needs after practice.",
    explanation: "「〜するもの」を先行詞なしで表すのは関係代名詞 what。needs の目的語が欠けている点に注目。（※部活後の救世主、南高食堂の唐揚げ）"
  },
  {
    id: "013",
    tags: ["発展"],
    type: "fill",
    point: "関係副詞 why（理由）",
    question: "Nobody could explain the reason （　） the boos suddenly turned into wild cheers.",
    answer: ["why"],
    ja: "なぜブーイングが突然大歓声に変わったのか、その理由を誰も説明できなかった。",
    en: "Nobody could explain the reason why the boos suddenly turned into wild cheers.",
    explanation: "先行詞が the reason で、後ろが完全な文なので理由の関係副詞 why。（※一芸披露は紙一重、ブーイングが喝采に変わる瞬間）"
  },
  {
    id: "014",
    tags: ["超頻出"],
    type: "fill",
    point: "複合関係代名詞 whoever（〜する人は誰でも）",
    question: "（　） gets picked at the send-off ceremony has to perform a talent in front of the whole school.",
    answer: ["Whoever"],
    ja: "壮行式で指名された者は誰でも、全校生徒の前で一芸を披露しなければならない。",
    en: "Whoever gets picked at the send-off ceremony has to perform a talent in front of the whole school.",
    explanation: "「〜する人は誰でも」は複合関係代名詞 whoever（＝anyone who）。節全体が主語になる。（※逃げ場なし、南高の壮行式の一芸指名）"
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
    explanation: "his father の所有格 his を、所有格の関係代名詞 whose に置き換えて2文をつなぐ。a friend whose father …（父親が〜な友人）。"
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
    explanation: "コンマ＋which の非制限用法で、前の名詞（a new song）を補足説明する。継続用法では that は使えない点にも注意。（※推し曲が増える瞬間）"
  }
];

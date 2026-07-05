/*
 * 第3章「助動詞」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter03",
  no: 3,
  title: "助動詞",
  subtitle: "Modals",
  description: "推量の must / can't、過去への推量 must have p.p.、後悔の should have p.p.、used to・had better・would rather など、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "否定の推量 can't be（〜のはずがない）",
    question: "That guy singing the school song alone at full volume at midnight （　） be entirely sane.",
    choices: ["must", "can't", "should", "would"],
    answerIndex: 1,
    ja: "真夜中に一人で全力で校歌を歌っているあいつが、完全に正気なはずがない。",
    en: "That guy singing the school song alone at full volume at midnight can't be entirely sane.",
    explanation: "「〜のはずがない」という否定の強い推量は can't（cannot）be。肯定の「〜にちがいない」は must be。（※南高生の謎の情熱）",
    img: "assets/illust/chapter03/001.svg"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "肯定の推量 must be（〜にちがいない）",
    question: "The lights are still on in the club room, so someone （　） be practicing even now.",
    choices: ["can't", "must", "need", "used to"],
    answerIndex: 1,
    ja: "部室の明かりがまだついているから、今も誰かが練習しているにちがいない。",
    en: "The lights are still on in the club room, so someone must be practicing even now.",
    explanation: "現在の状況から「〜にちがいない」と強く推量するのは must be。反対の「〜のはずがない」は can't be。",
    img: "assets/illust/chapter03/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "過去への推量 must have + 過去分詞",
    question: "The whole gym smells of sweat; the cheer squad （　） trained hard again this morning.",
    choices: ["must have", "should have", "can't have", "need have"],
    answerIndex: 0,
    ja: "体育館全体が汗くさい。応援団はまた今朝も猛練習したにちがいない。",
    en: "The whole gym smells of sweat; the cheer squad must have trained hard again this morning.",
    explanation: "現在の証拠から「（過去に）〜したにちがいない」と推量するのは must have + 過去分詞。",
    img: "assets/illust/chapter03/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "後悔 should have + 過去分詞（〜すべきだったのに）",
    question: "I finally got her number, but I was too nervous to call. I （　） just called her right away.",
    choices: ["should have", "must have", "can't have", "would have"],
    answerIndex: 0,
    ja: "やっと彼女の番号を手に入れたのに、緊張して電話できなかった。すぐに電話すべきだったのに。",
    en: "I finally got her number, but I was too nervous to call. I should have just called her right away.",
    explanation: "「〜すべきだったのに（実際はしなかった）」という後悔・非難は should have + 過去分詞。（※またも好機を逃す南高男子）",
    img: "assets/illust/chapter03/004.svg"
  },
  {
    id: "005",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "used to（以前は〜だった／したものだ）",
    question: "There （　） be an old cherry tree here, but it was cut down before we entered the school.",
    choices: ["used to", "would", "must", "should"],
    answerIndex: 0,
    ja: "以前はここに古い桜の木があったが、私たちが入学する前に切られてしまった。",
    en: "There used to be an old cherry tree here, but it was cut down before we entered the school.",
    explanation: "過去の状態「以前は〜だった（今はちがう）」は used to。状態には would は使えない（would は過去の反復動作のみ）。",
    img: "assets/illust/chapter03/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "had better（〜したほうがよい・警告）",
    question: "You （　） not skip cheer practice again, or the captain will make you sing solo.",
    choices: ["had better", "would rather", "used to", "may well"],
    answerIndex: 0,
    ja: "もう二度と応援練習をサボらないほうがいい。さもないと団長にソロで歌わされるぞ。",
    en: "You had better not skip cheer practice again, or the captain will make you sing solo.",
    explanation: "「〜したほうがよい（さもないと…）」という警告を含む助言は had better。否定は had better not（notの位置に注意）。",
    img: "assets/illust/chapter03/006.svg"
  },
  {
    id: "007",
    tags: ["発展"],
    type: "choice",
    point: "would rather A than B（BよりむしろAしたい）",
    question: "Honestly, I （　） study alone in silence than shout myself hoarse at practice.",
    choices: ["would rather", "had better", "used to", "may well"],
    answerIndex: 0,
    ja: "正直、練習で声をからすくらいなら、静かに一人で勉強するほうがましだ。",
    en: "Honestly, I would rather study alone in silence than shout myself hoarse at practice.",
    explanation: "「BよりむしろAしたい」は would rather A than B。A・Bには動詞の原形が入る（study … than shout …）。",
    img: "assets/illust/chapter03/007.svg"
  },
  {
    id: "008",
    tags: ["基本"],
    type: "error",
    point: "助動詞の後は動詞の原形",
    question: "In this school, every first-year ①must ②to learn ③the entire cheer song ④by heart within a week.",
    choices: ["①must", "②to learn", "③the entire cheer song", "④by heart within a week"],
    answerIndex: 1,
    ja: "この学校では、1年生全員が1週間以内に応援歌「空はコバルト」を全部暗記しなければならない。",
    en: "In this school, every first-year must learn the entire cheer song by heart within a week.",
    explanation: "助動詞 must の後は動詞の原形。to は不要。②は to learn ではなく learn が正しい。（※入学早々、校歌より先に応援歌「空はコバルト」の暗記テスト）",
    img: "assets/illust/chapter03/008.svg"
  },
  {
    id: "009",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "cannot ~ too …（いくら〜してもしすぎることはない）",
    question: "You ①can be ②too careful ③when you ride ④your bike downhill at full speed.",
    choices: ["①can be", "②too careful", "③when you ride", "④your bike downhill at full speed"],
    answerIndex: 0,
    ja: "全速力で坂道を自転車で下るときは、どんなに注意してもしすぎることはない。",
    en: "You cannot be too careful when you ride your bike downhill at full speed.",
    explanation: "cannot ~ too …（いくら〜してもしすぎることはない）。「注意しすぎることはない」は cannot be too careful。①は can be ではなく cannot be が正しい。",
    img: "assets/illust/chapter03/009.svg"
  },
  {
    id: "010",
    tags: ["発展"],
    type: "ordering",
    point: "否定の過去推量 cannot have + 過去分詞",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼女が僕の名前を覚えていたはずがない。」",
    pieces: ["She", "cannot", "have", "remembered", "my name"],
    answer: "She cannot have remembered my name",
    ja: "彼女が僕の名前を覚えていたはずがない。",
    en: "She cannot have remembered my name.",
    explanation: "「（過去に）〜したはずがない」という否定の強い推量は cannot have + 過去分詞。（※そもそも認識されていない南高男子）",
    img: "assets/illust/chapter03/010.svg"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "would rather A than B",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「僕は告白して振られるくらいなら、黙って見ているほうがましだ。」",
    pieces: ["I", "would", "rather", "watch", "in silence", "than", "confess", "and get rejected"],
    answer: "I would rather watch in silence than confess and get rejected",
    ja: "僕は告白して振られるくらいなら、黙って見ているほうがましだ。",
    en: "I would rather watch in silence than confess and get rejected.",
    explanation: "「BするよりむしろAしたい」は would rather A than B。A・Bは動詞の原形（watch … than confess …）。（※守りに入る南高男子）",
    img: "assets/illust/chapter03/011.svg"
  },
  {
    id: "012",
    tags: ["発展"],
    type: "fill",
    point: "needn't have + 過去分詞（〜する必要はなかったのに）",
    question: "You （　） have brought an umbrella; the rain stopped an hour ago.",
    answer: ["needn't", "need not"],
    ja: "傘を持ってくる必要はなかったのに。雨は1時間前にやんだよ。",
    en: "You needn't have brought an umbrella; the rain stopped an hour ago.",
    explanation: "「（実際にはしたが）〜する必要はなかったのに」は needn't have + 過去分詞。need not have も可。",
    img: "assets/illust/chapter03/012.svg"
  },
  {
    id: "013",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "未来の可能は will be able to",
    question: "After a month of hard training, you will （　） able to run the full marathon course.",
    answer: ["be"],
    ja: "1か月の猛練習の後には、フルマラソンのコースを走れるようになるだろう。",
    en: "After a month of hard training, you will be able to run the full marathon course.",
    explanation: "can には未来形がないので、未来の「〜できるようになる」は will be able to で表す。空所には be が入る。",
    img: "assets/illust/chapter03/013.svg"
  },
  {
    id: "014",
    tags: ["発展"],
    type: "fill",
    point: "may well（〜するのももっともだ）",
    question: "She may （　） be proud of her son; he passed the exam at the top of his class.",
    answer: ["well"],
    ja: "彼女が息子を誇りに思うのももっともだ。彼はクラス首席で試験に合格したのだから。",
    en: "She may well be proud of her son; he passed the exam at the top of his class.",
    explanation: "may well do は「〜するのももっともだ・たぶん〜だろう」。ここは「誇りに思うのももっともだ」。",
    img: "assets/illust/chapter03/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "must → had to（過去の義務）",
    question: "次の文を had to を使って過去の文に書き換えなさい。\nWe must clean the whole gym after practice.",
    answer: [
      "We had to clean the whole gym after practice.",
      "We had to clean the whole gym after practice"
    ],
    ja: "私たちは練習の後、体育館全体を掃除しなければならなかった。",
    en: "We had to clean the whole gym after practice.",
    explanation: "must には過去形がないので、過去の義務は had to で表す。must → had to。",
    img: "assets/illust/chapter03/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "後悔 should have + 過去分詞",
    question: "次の文とほぼ同じ意味になるように、should を使って書き換えなさい。\nI didn't study harder, and now I regret it.",
    answer: [
      "I should have studied harder.",
      "I should have studied harder"
    ],
    ja: "もっと一生懸命勉強すべきだったのに。",
    en: "I should have studied harder.",
    explanation: "「〜すべきだったのに（実際はしなかった）」という後悔は should have + 過去分詞で表す。",
    img: "assets/illust/chapter03/016.svg"
  }
];

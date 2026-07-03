/*
 * 第4章「仮定法」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter04",
  no: 4,
  title: "仮定法",
  subtitle: "Subjunctive",
  description: "仮定法過去・過去完了、I wish、as if、if の省略による倒置、without / but for など、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "仮定法過去（現在の事実に反する仮定）",
    question: "If I （　） a little braver, I would ask her to the school festival right now.",
    choices: ["am", "were", "had been", "will be"],
    answerIndex: 1,
    ja: "もう少し勇気があれば、今すぐ彼女を文化祭に誘うのに。",
    en: "If I were a little braver, I would ask her to the school festival right now.",
    explanation: "現在の事実に反する仮定は仮定法過去〈If + S + 過去形, S + would + 原形〉。be動詞は主語に関係なく were を使うのが原則。（※勇気さえあれば…の南高男子）"
  },
  {
    id: "002",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "仮定法過去完了（過去の事実に反する仮定）",
    question: "If we （　） harder that summer, we might have won the prefectural tournament.",
    choices: ["trained", "had trained", "train", "would train"],
    answerIndex: 1,
    ja: "あの夏もっと猛練習していたら、県大会で優勝できていたかもしれない。",
    en: "If we had trained harder that summer, we might have won the prefectural tournament.",
    explanation: "過去の事実に反する仮定は仮定法過去完了〈If + S + had + 過去分詞, S + would/might have + 過去分詞〉。"
  },
  {
    id: "003",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "I wish + 仮定法過去（現在かなわぬ願望）",
    question: "I wish I （　） sing even half as loud as the cheer squad captain.",
    choices: ["can", "could", "will", "am able to"],
    answerIndex: 1,
    ja: "応援団長の半分でいいから大きな声で歌えたらなあ。",
    en: "I wish I could sing even half as loud as the cheer squad captain.",
    explanation: "現在かなわない願望は〈I wish + S + 過去形（助動詞なら could / would）〉。can ではなく could。"
  },
  {
    id: "004",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "as if + 仮定法過去完了（まるで〜だったかのように）",
    question: "He talks about the girls' school festival as if he （　） actually been invited.",
    choices: ["has", "had", "have", "would have"],
    answerIndex: 1,
    ja: "彼はまるで実際に招待されたかのように、女子校の文化祭のことを話す。",
    en: "He talks about the girls' school festival as if he had actually been invited.",
    explanation: "「まるで（実際は違うが）〜だったかのように」は as if + 仮定法過去完了 had + 過去分詞。主節 talks より前の事実に反する内容なので had been。（※妄想が止まらない南高男子）"
  },
  {
    id: "005",
    tags: ["発展"],
    type: "choice",
    point: "if の省略による倒置（Were I …）",
    question: "（　） I in your shoes, I would apologize to her before it's too late.",
    choices: ["Were", "Was", "If", "Had"],
    answerIndex: 0,
    ja: "もし僕が君の立場なら、手遅れになる前に彼女に謝るよ。",
    en: "Were I in your shoes, I would apologize to her before it's too late.",
    explanation: "仮定法で if を省略すると主語と（助）動詞が倒置される。If I were → Were I。be in one's shoes は「〜の立場にある」。"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "It is time + 仮定法過去（もう〜してよいころだ）",
    question: "It's high time you （　） studying seriously instead of daydreaming about girls.",
    choices: ["start", "started", "will start", "have started"],
    answerIndex: 1,
    ja: "女子のことを夢想してばかりいないで、そろそろ真剣に勉強を始めてもいいころだ。",
    en: "It's high time you started studying seriously instead of daydreaming about girls.",
    explanation: "〈It is (high) time + S + 過去形〉で「もう〜してよいころだ（まだしていない）」。動詞は仮定法過去。（※現実を見よ南高男子）"
  },
  {
    id: "007",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "Without … / But for …（〜がなければ）",
    question: "（　） the constant cheering, our team would have given up long ago.",
    choices: ["Without", "Unless", "Except", "Despite"],
    answerIndex: 0,
    ja: "絶え間ない応援がなければ、うちのチームはとっくに諦めていただろう。",
    en: "Without the constant cheering, our team would have given up long ago.",
    explanation: "Without … / But for … は「〜がなければ／〜がなかったら」で仮定法を導く。ここは過去の帰結なので would have given up。"
  },
  {
    id: "008",
    tags: ["超頻出", "発展"],
    type: "error",
    point: "仮定法過去完了の帰結節は would have + p.p.",
    question: "If she ①had noticed ②my message, she ③would ④reply immediately, but she never did.",
    choices: ["①had noticed", "②my message", "③would", "④reply immediately"],
    answerIndex: 3,
    ja: "もし彼女が僕のメッセージに気づいていたら、すぐに返信してくれただろうに。でも一度もなかった。",
    en: "If she had noticed my message, she would have replied immediately, but she never did.",
    explanation: "if節が過去完了（had noticed）なので、帰結節も〈would have + 過去分詞〉。④は reply ではなく have replied が正しい。（※既読すらつかない南高男子）"
  },
  {
    id: "009",
    tags: ["発展"],
    type: "error",
    point: "I wish + 仮定法過去完了（過去への願望）",
    question: "Looking back, I wish I ①studied ②abroad ③when I ④had the chance.",
    choices: ["①studied", "②abroad", "③when I", "④had the chance"],
    answerIndex: 0,
    ja: "振り返ると、チャンスがあったときに留学しておけばよかったと思う。",
    en: "Looking back, I wish I had studied abroad when I had the chance.",
    explanation: "過去に対する「〜しておけばよかった」という願望は〈I wish + S + had + 過去分詞〉。①は studied ではなく had studied が正しい。"
  },
  {
    id: "010",
    tags: ["超頻出", "発展"],
    type: "ordering",
    point: "If it were not for …（〜がなければ）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「もし彼の声量がなければ、うちの応援は成立しないだろう。」",
    pieces: ["If", "it", "were", "not", "for", "his volume", "our cheering", "would not work"],
    answer: "If it were not for his volume our cheering would not work",
    ja: "もし彼の声量がなければ、うちの応援は成立しないだろう。",
    en: "If it were not for his volume, our cheering would not work.",
    explanation: "If it were not for … は「（今）〜がなければ」という現在の仮定。帰結は would + 原形。（※応援の生命線）"
  },
  {
    id: "011",
    tags: ["超頻出"],
    type: "ordering",
    point: "I wish + 仮定法過去完了",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「あのとき彼女に話しかけていればよかったのに。」",
    pieces: ["I", "wish", "I", "had", "talked", "to her", "back then"],
    answer: "I wish I had talked to her back then",
    ja: "あのとき彼女に話しかけていればよかったのに。",
    en: "I wish I had talked to her back then.",
    explanation: "過去にしなかったことへの後悔の願望は〈I wish + S + had + 過去分詞〉。（※あの日の一歩を悔やむ南高男子）"
  },
  {
    id: "012",
    tags: ["発展"],
    type: "fill",
    point: "if の省略による倒置（Had + S + p.p.）",
    question: "（　） I known the test was today, I would have studied all night.",
    answer: ["Had"],
    ja: "今日がテストだと知っていたら、徹夜で勉強したのに。",
    en: "Had I known the test was today, I would have studied all night.",
    explanation: "If I had known → if を省略して倒置すると Had I known。仮定法過去完了の倒置。空所には Had。"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "as though + 仮定法過去（まるで〜のように）",
    question: "She smiled at me so kindly that I felt as （　） I were floating on air.",
    answer: ["though", "if"],
    ja: "彼女があまりに優しく微笑んでくれたので、僕はまるで宙に浮いているような気分だった。",
    en: "She smiled at me so kindly that I felt as though I were floating on air.",
    explanation: "as though（＝as if）+ 仮定法過去で「まるで〜であるかのように」。were を使う点にも注意。（※微笑み一つで浮足立つ南高男子）"
  },
  {
    id: "014",
    tags: ["発展"],
    type: "fill",
    point: "未来の仮定 were to + 原形",
    question: "If the school festival （　） to be canceled, the whole third year would be devastated.",
    answer: ["were"],
    ja: "もし文化祭が中止になるようなことがあれば、3年生全員が打ちのめされるだろう。",
    en: "If the school festival were to be canceled, the whole third year would be devastated.",
    explanation: "〈If + S + were to + 原形〉は実現性の低い未来の仮定を表す。帰結は would + 原形。"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "Without … → If it were not for …",
    question: "次の文を If で始まる文に書き換えなさい。\nWithout your support, I couldn't keep going.",
    answer: [
      "If it were not for your support, I couldn't keep going.",
      "If it were not for your support, I couldn't keep going",
      "If it weren't for your support, I couldn't keep going.",
      "If it weren't for your support, I couldn't keep going"
    ],
    ja: "君の支えがなければ、僕は続けていけないだろう。",
    en: "If it were not for your support, I couldn't keep going.",
    explanation: "Without … ＝ If it were not for …（現在の仮定）。過去のことなら If it had not been for … になる。"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "直説法 → I wish（仮定法）",
    question: "次の文とほぼ同じ意味になるように、I wish を使って書き換えなさい。\nI'm sorry I don't have her contact information.",
    answer: [
      "I wish I had her contact information.",
      "I wish I had her contact information"
    ],
    ja: "彼女の連絡先を知っていればなあ。",
    en: "I wish I had her contact information.",
    explanation: "現在の事実（連絡先を持っていない）を残念に思う気持ちは〈I wish + S + 過去形〉で表す。have → had。（※連絡先すら遠い南高男子）"
  }
];

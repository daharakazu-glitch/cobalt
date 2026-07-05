/*
 * 第10章「接続詞」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
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
 *   img         : 例文イラスト（小さめSVG。任意。js/chapter.js が問題文の横に表示）
 */
window.CHAPTER_META = {
  id: "chapter10",
  no: 10,
  title: "接続詞",
  subtitle: "Conjunctions",
  description: "等位・従位・相関接続詞から so that / in case / unless まで、文と文をつなぐ要を大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "命令文 + and「そうすれば」",
    question: "Do one more impression, （　） the whole gym will burst into cheers.",
    choices: ["or", "and", "but", "so"],
    answerIndex: 1,
    ja: "もう一つモノマネをやってみろ、そうすれば体育館全体が大喝采に包まれるぞ。",
    en: "Do one more impression, and the whole gym will burst into cheers.",
    explanation: "命令文 + and は「〜しなさい、そうすれば…」、命令文 + or は「〜しなさい、さもないと…」。ここは喝采という良い結果が続くので and。burst into cheers は「歓声がどっと湧く」。（※一芸披露で当たると喝采、外すとブーイングが南高の掟）",
    img: "assets/illust/chapter10/001.svg"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "命令文 + or「さもないと」",
    question: "Run to the cafeteria right after class, （　） the fried bread will be gone in five minutes.",
    choices: ["and", "so", "or", "but"],
    answerIndex: 2,
    ja: "授業が終わったらすぐ食堂へ走れ。さもないと揚げパンは5分で売り切れるぞ。",
    en: "Run to the cafeteria right after class, or the fried bread will be gone in five minutes.",
    explanation: "「走れ、さもないと売り切れる」という悪い結果が続くので、命令文 + or（= if you don't ...）。and にすると「走れば売り切れる」となり意味が通らない。（※おばちゃんの揚げパンは校内最速の争奪戦）",
    img: "assets/illust/chapter10/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "not only A but also B",
    question: "He is not only the fastest beatboxer in school （　） also the kindest math tutor in our class.",
    choices: ["and", "but", "or", "nor"],
    answerIndex: 1,
    ja: "彼は校内最速のビートボクサーであるだけでなく、クラスで一番親切な数学の先生役でもある。",
    en: "He is not only the fastest beatboxer in school but also the kindest math tutor in our class.",
    explanation: "相関接続詞 not only A but also B「AだけでなくBも」。A と B には文法的に対等なもの（ここでは名詞句どうし）を置く。B not only A の形や、also の省略もあるので柔軟に対応できるようにしておく。",
    img: "assets/illust/chapter10/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "目的を表す so that",
    question: "He practiced the waltz every night （　） he wouldn't step on his partner's toes at the school festival.",
    choices: ["so that", "even if", "unless", "as far as"],
    answerIndex: 0,
    ja: "南校祭でパートナーの足を踏まないように、彼は毎晩ワルツの練習をした。",
    en: "He practiced the waltz every night so that he wouldn't step on his partner's toes at the school festival.",
    explanation: "so that + S + will / can / won't などで「〜するために・〜しないように」という目的を表す。口語では that が省略されることもある。（※南校祭では他校の女子と社交ダンスを踊る伝統。この夜のための猛特訓）",
    img: "assets/illust/chapter10/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "such A that / so 形 that の区別",
    question: "It was （　） a powerful cheer song that even the visiting students started humming along.",
    choices: ["so", "such", "very", "too"],
    answerIndex: 1,
    ja: "それはあまりに力強い応援歌だったので、来校していた他校の生徒までが口ずさみ始めた。",
    en: "It was such a powerful cheer song that even the visiting students started humming along.",
    explanation: "後ろが「a + 形容詞 + 名詞」なので such ... that。so を使うなら so powerful a cheer song that という語順になる（語順問題としても頻出）。（※応援歌「空はコバルト」は他校生も持っていかれる名曲）",
    img: "assets/illust/chapter10/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "even though（事実の譲歩）",
    question: "（　） he has already been turned down twice this year, he is writing a new letter with a smile.",
    choices: ["Even though", "Even if", "As if", "So that"],
    answerIndex: 0,
    ja: "今年すでに2回振られたにもかかわらず、彼は笑顔で新しい手紙を書いている。",
    en: "Even though he has already been turned down twice this year, he is writing a new letter with a smile.",
    explanation: "even though は「実際に〜であるにもかかわらず」（事実）、even if は「たとえ〜だとしても」（仮定）。すでに2回振られたのは事実なので even though。turn down は「（誘い・告白を）断る」。（※それでも折れないのが南高男子の心得）",
    img: "assets/illust/chapter10/006.svg"
  },
  {
    id: "007",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "名詞節の whether（補語では if 不可）",
    question: "The real question is （　） we can finish the haunted house by tomorrow morning.",
    choices: ["if", "whether", "what", "unless"],
    answerIndex: 1,
    ja: "本当の問題は、明日の朝までにお化け屋敷を完成させられるかどうかだ。",
    en: "The real question is whether we can finish the haunted house by tomorrow morning.",
    explanation: "「〜かどうか」の名詞節は whether / if。ただし if が使えるのは主に他動詞の目的語のときだけで、補語（be動詞の後）・主語・前置詞の後では whether を使う。ここは補語なので whether 一択。",
    img: "assets/illust/chapter10/007.svg"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "because（節）と because of（名詞句）",
    question: "①Because of it rained hard all morning, ②the cheering practice ③was held ④indoors.",
    choices: ["①Because of", "②the cheering practice", "③was held", "④indoors"],
    answerIndex: 0,
    ja: "午前中ずっと激しく雨が降ったので、応援練習は屋内で行われた。",
    en: "Because it rained hard all morning, the cheering practice was held indoors.",
    explanation: "because の後ろには S + V の節、because of の後ろには名詞句がくる。it rained という節が続いているので Because が正しい。because of を使うなら Because of the heavy rain とする。",
    img: "assets/illust/chapter10/008.svg"
  },
  {
    id: "009",
    tags: ["発展"],
    type: "error",
    point: "neither A nor B",
    question: "He can ①neither sing ②or dance, ③but his impression of our principal ④always brings the house down.",
    choices: ["①neither sing", "②or dance", "③but his impression of our principal", "④always brings the house down"],
    answerIndex: 1,
    ja: "彼は歌も踊りもできないが、校長先生のモノマネはいつも場内を爆笑の渦にする。",
    en: "He can neither sing nor dance, but his impression of our principal always brings the house down.",
    explanation: "相関接続詞は neither A nor B「AもBも〜ない」で固定。or は either A or B とセット。bring the house down は「満場の喝采・爆笑をさらう」という重要イディオム。（※歌えなくても踊れなくても、一芸があれば南高では英雄）",
    img: "assets/illust/chapter10/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "条件の as long as「〜する限り」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「君がベースを弾き続ける限り、僕らのバンドは決して解散しない。」",
    pieces: ["Our band", "will", "never", "break up", "as long as", "you", "keep", "playing the bass"],
    answer: "Our band will never break up as long as you keep playing the bass",
    ja: "君がベースを弾き続ける限り、僕らのバンドは決して解散しない。",
    en: "Our band will never break up as long as you keep playing the bass.",
    explanation: "as long as は「〜する限り（は）」という条件を表す接続詞。範囲・程度を表す as far as（as far as I know など）との使い分けが頻出。break up は「解散する」。（※文化祭ライブのために結成されたバンドの熱い誓い）",
    img: "assets/illust/chapter10/010.svg"
  },
  {
    id: "011",
    tags: ["超頻出", "発展"],
    type: "ordering",
    point: "in case「〜するといけないから」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「雨が降るといけないから、応援旗はビニールシートで包んでおこう。」",
    pieces: ["Let's", "wrap", "the cheering flag", "in a plastic sheet", "in case", "it", "rains"],
    answer: "Let's wrap the cheering flag in a plastic sheet in case it rains",
    ja: "雨が降るといけないから、応援旗はビニールシートで包んでおこう。",
    en: "Let's wrap the cheering flag in a plastic sheet in case it rains.",
    explanation: "in case + S + V は「〜するといけないから・〜の場合に備えて」。if が「〜したら（そのときに）する」なのに対し、in case は「〜する前に備えておく」。in case の節内は未来のことでも現在形 rains を使う点にも注意。",
    img: "assets/illust/chapter10/011.svg"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "unless = if ... not",
    question: "You cannot join the dance on the main floor （　） you have practiced the basic steps.",
    answer: ["unless"],
    ja: "基本ステップを練習していない限り、メインフロアのダンスには参加できない。",
    en: "You cannot join the dance on the main floor unless you have practiced the basic steps.",
    explanation: "unless は「〜しない限り・もし〜しなければ」で、if ... not とほぼ同義。unless 自体に否定の意味が含まれるので、節内に not を重ねないこと。（※ワルツの基本ステップは南校祭前の必修科目）",
    img: "assets/illust/chapter10/012.svg"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "対比の while / whereas",
    question: "My best friend talks to anyone easily, （　） I freeze the moment a girl says hello to me.",
    answer: ["while", "whereas"],
    ja: "親友は誰とでも気軽に話せるのに対し、僕は女子に挨拶された瞬間に固まってしまう。",
    en: "My best friend talks to anyone easily, while I freeze the moment a girl says hello to me.",
    explanation: "while には「〜する間に」（時）のほかに「〜する一方で」（対比）の意味があり、長文読解でも頻出。同じ対比は whereas でも表せる。the moment + S + V は「〜した瞬間に」。（※挨拶されただけで石像と化す男子校生）",
    img: "assets/illust/chapter10/013.svg"
  },
  {
    id: "014",
    tags: ["基本"],
    type: "fill",
    point: "as far as I know「私の知る限り」",
    question: "（　） far as I know, nobody has ever beaten the cafeteria lady at rock-paper-scissors.",
    answer: ["As", "as"],
    ja: "僕の知る限り、じゃんけんで食堂のおばちゃんに勝った者は一人もいない。",
    en: "As far as I know, nobody has ever beaten the cafeteria lady at rock-paper-scissors.",
    explanation: "as far as は「〜する限り（では）」と知識・範囲の限界を表す。as far as I know / as far as I can see は定型表現。条件（〜しさえすれば）の as long as と混同しないこと。（※おまけのおにぎりを懸けた勝負は連敗記録更新中）",
    img: "assets/illust/chapter10/014.svg"
  },
  {
    id: "015",
    tags: ["発展"],
    type: "rewrite",
    point: "命令文 + or → if / unless への書き換え",
    question: "次の文を、if を使ってほぼ同じ意味に書き換えなさい。\nHurry up, or you will miss the last bus.",
    answer: [
      "If you don't hurry up, you will miss the last bus.",
      "If you don't hurry up, you will miss the last bus",
      "If you do not hurry up, you will miss the last bus.",
      "If you do not hurry up, you will miss the last bus",
      "You will miss the last bus if you don't hurry up.",
      "You will miss the last bus if you don't hurry up"
    ],
    ja: "急ぎなさい、さもないと最終バスに乗り遅れますよ。",
    en: "If you don't hurry up, you will miss the last bus.",
    explanation: "命令文 + or「さもないと」は If ... not（または Unless ...）で書き換えられる。逆に命令文 + and は If you ... と肯定の条件文になる。書き換えは和文英訳・整序でも頻出のパターン。",
    img: "assets/illust/chapter10/015.svg"
  },
  {
    id: "016",
    tags: ["発展", "超頻出"],
    type: "rewrite",
    point: "too ... to → so ... that ... not",
    question: "次の文を、so と that を使ってほぼ同じ意味に書き換えなさい。\nThis math problem is too difficult for me to solve.",
    answer: [
      "This math problem is so difficult that I cannot solve it.",
      "This math problem is so difficult that I cannot solve it",
      "This math problem is so difficult that I can't solve it.",
      "This math problem is so difficult that I can't solve it"
    ],
    ja: "この数学の問題は難しすぎて、僕には解けない。",
    en: "This math problem is so difficult that I cannot solve it.",
    explanation: "too ... to do は so ... that + S + can't（否定文）で書き換えられる。that 節の中では solve の目的語 it を落とさないことが最重要ポイント（to solve の後ろに it を付けないのと対）。",
    img: "assets/illust/chapter10/016.svg"
  }
];

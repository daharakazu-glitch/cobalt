/*
 * 第6章「動名詞」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter06",
  no: 6,
  title: "動名詞",
  subtitle: "Gerunds",
  description: "動名詞を目的語にとる動詞、前置詞＋動名詞、動名詞と不定詞で意味が変わる動詞、意味上の主語・完了動名詞、慣用表現まで、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "動名詞を目的語にとる動詞（finish）",
    question: "We had to finish （　） the whole venue before the girls from other schools arrived for the dance.",
    choices: ["to clean", "cleaning", "clean", "cleaned"],
    answerIndex: 1,
    ja: "他校の女子がダンスに来る前に、僕たちは会場全体を掃除し終えなければならなかった。",
    en: "We had to finish cleaning the whole venue before the girls from other schools arrived for the dance.",
    explanation: "finish は目的語に動名詞のみをとる（to不定詞は不可）。同様に enjoy, mind, avoid, give up, put off, practice なども動名詞をとる。（※南校祭のダンス準備）",
    img: "assets/illust/chapter06/001.svg"
  },
  {
    id: "002",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "look forward to ~ing（to は前置詞）",
    question: "I'm really looking forward to （　） Ohtani play in person someday.",
    choices: ["see", "seeing", "to see", "saw"],
    answerIndex: 1,
    ja: "いつか大谷が実際にプレーするのを生で見るのを、本当に楽しみにしている。",
    en: "I'm really looking forward to seeing Ohtani play in person someday.",
    explanation: "look forward to の to は前置詞なので、後ろは動名詞。to see としない点が最頻出のひっかけ。〈see + O + 原形〉で「Oが〜するのを見る」。",
    img: "assets/illust/chapter06/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "stop to do（〜するために立ち止まる）",
    question: "On his way to practice, he stopped （　） a photo of the cobalt-blue sky over the school.",
    choices: ["taking", "to take", "take", "took"],
    answerIndex: 1,
    ja: "練習に向かう途中、彼は学校の上に広がるコバルトブルーの空の写真を撮るために立ち止まった。",
    en: "On his way to practice, he stopped to take a photo of the cobalt-blue sky over the school.",
    explanation: "stop to do は「〜するために立ち止まる」（to不定詞は目的）。stop doing なら「〜するのをやめる」。ここは「撮るために立ち止まった」なので to take。（※応援歌「空はコバルト」の由来の空）",
    img: "assets/illust/chapter06/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "remember doing（〜したのを覚えている）",
    question: "Do you remember （　） the cheer captain break down in tears at last year's final game?",
    choices: ["to see", "seeing", "see", "to have seen"],
    answerIndex: 1,
    ja: "去年の最後の試合で、応援団長が号泣したのを見たのを覚えている？",
    en: "Do you remember seeing the cheer captain break down in tears at last year's final game?",
    explanation: "remember doing は「（過去に）〜したのを覚えている」。remember to do は「（これから）忘れずに〜する」。ここは過去の記憶なので seeing。",
    img: "assets/illust/chapter06/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "be used to ~ing（〜することに慣れている）",
    question: "Having no uniform, Nanko students are used to （　） what to wear on their own every single morning.",
    choices: ["decide", "deciding", "decided", "decision"],
    answerIndex: 1,
    ja: "制服がないので、南高生は毎朝自分で何を着るか決めることに慣れている。",
    en: "Having no uniform, Nanko students are used to deciding what to wear on their own every single morning.",
    explanation: "be used to ~ing は「〜することに慣れている」で、to は前置詞。used to do（以前は〜した）と混同しないこと。（※制服がなく自分で服を選ぶ南高生）",
    img: "assets/illust/chapter06/005.svg"
  },
  {
    id: "006",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "mind ~ing（Would you mind ~ing?）",
    question: "Would you mind （　） the volume down a little? — Honestly, at Nanko, nobody has ever asked that.",
    choices: ["to turn", "turning", "turn", "turned"],
    answerIndex: 1,
    ja: "少し音量を下げていただけますか？——正直、南高でそんなことを頼まれたためしがない。",
    en: "Would you mind turning the volume down a little? — Honestly, at Nanko, nobody has ever asked that.",
    explanation: "mind は動名詞を目的語にとる。Would you mind ~ing? は「〜していただけますか」という丁寧な依頼。（※音量を下げる発想がない南高の応援）",
    img: "assets/illust/chapter06/006.svg"
  },
  {
    id: "007",
    tags: ["超頻出"],
    type: "choice",
    point: "spend + 時間 + (in) ~ing",
    question: "He spent the whole night （　） the waltz so that he wouldn't embarrass himself at the festival.",
    choices: ["to practice", "practicing", "practice", "practiced"],
    answerIndex: 1,
    ja: "彼は南校祭で恥をかかないように、一晩中ワルツの練習に費やした。",
    en: "He spent the whole night practicing the waltz so that he wouldn't embarrass himself at the festival.",
    explanation: "〈spend + 時間/お金 + (in) ~ing〉で「〜して時間（お金）を費やす」。in はしばしば省略される。（※社交ダンスにだけは本気の南高男子）",
    img: "assets/illust/chapter06/007.svg"
  },
  {
    id: "008",
    tags: ["基本", "超頻出"],
    type: "error",
    point: "前置詞の後は動名詞",
    question: "She is really good ①at ②to imitate ③the cheer captain's ④over-the-top gestures.",
    choices: ["①at", "②to imitate", "③the cheer captain's", "④over-the-top gestures"],
    answerIndex: 1,
    ja: "彼女は応援団長の大げさな身ぶりをまねるのがとても上手だ。",
    en: "She is really good at imitating the cheer captain's over-the-top gestures.",
    explanation: "前置詞 at の後は動名詞。be good at ~ing で「〜するのが得意だ」。②は to imitate ではなく imitating が正しい。",
    img: "assets/illust/chapter06/008.svg"
  },
  {
    id: "009",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "stop / prevent A from ~ing",
    question: "Nothing ①could stop ②him ③from to sing ④at the top of his lungs during the game.",
    choices: ["①could stop", "②him", "③from to sing", "④at the top of his lungs"],
    answerIndex: 2,
    ja: "試合中、何ものも彼が声を張り上げて歌うのを止められなかった。",
    en: "Nothing could stop him from singing at the top of his lungs during the game.",
    explanation: "〈stop/prevent/keep A from ~ing〉で「Aが〜するのを妨げる」。from は前置詞なので後ろは動名詞。③は from to sing ではなく from singing が正しい。（※声量だけは誰にも止められない南高生）",
    img: "assets/illust/chapter06/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "cannot help ~ing（〜せずにはいられない）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼がどれほど真剣かを見ると、僕は笑わずにはいられない。」",
    pieces: ["I", "cannot", "help", "laughing", "when", "I", "see", "how serious", "he is"],
    answer: "I cannot help laughing when I see how serious he is",
    ja: "彼がどれほど真剣かを見ると、僕は笑わずにはいられない。",
    en: "I cannot help laughing when I see how serious he is.",
    explanation: "cannot help ~ing は「〜せずにはいられない」（＝cannot help but do）。help は「避ける」の意味。",
    img: "assets/illust/chapter06/010.svg"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "be worth ~ing（〜する価値がある）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「その応援歌は、何度も繰り返し聞く価値が十分にある。」",
    pieces: ["The cheer song", "is", "well", "worth", "listening to", "over and over"],
    answer: "The cheer song is well worth listening to over and over",
    ja: "その応援歌は、何度も繰り返し聞く価値が十分にある。",
    en: "The cheer song is well worth listening to over and over.",
    explanation: "〈be worth ~ing〉で「〜する価値がある」。listen to のように他動詞的な句動詞では最後の前置詞（to）を残す。well は「十分に」と worth を強調。（※「空はコバルト」は何度でも）",
    img: "assets/illust/chapter06/011.svg"
  },
  {
    id: "012",
    tags: ["超頻出"],
    type: "fill",
    point: "on ~ing（〜するとすぐに）",
    question: "On （　） the news about Ohtani's new record, the whole class burst into cheers.",
    answer: ["hearing"],
    ja: "大谷の新記録のニュースを聞くとすぐに、クラス全体が歓声をあげた。",
    en: "On hearing the news about Ohtani's new record, the whole class burst into cheers.",
    explanation: "〈on ~ing〉は「〜するとすぐに」（＝as soon as S V）。前置詞 on の後なので動名詞 hearing。",
    img: "assets/illust/chapter06/012.svg"
  },
  {
    id: "013",
    tags: ["発展"],
    type: "fill",
    point: "There is no ~ing（〜できない）",
    question: "There is no （　） how loud a fired-up Nanko student can get once the game begins.",
    answer: ["telling", "knowing", "predicting"],
    ja: "いったん試合が始まれば、気合の入った南高生がどれほど大声になれるか、まったく予測がつかない。",
    en: "There is no telling how loud a fired-up Nanko student can get once the game begins.",
    explanation: "〈There is no ~ing〉で「〜することはできない」（＝It is impossible to do）。There is no telling は「知る由もない・予測がつかない」の定番表現。",
    img: "assets/illust/chapter06/013.svg"
  },
  {
    id: "014",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "be busy ~ing（〜するのに忙しい）",
    question: "The day before the festival, everyone was busy （　） up the stage and hanging decorations.",
    answer: ["setting", "putting"],
    ja: "南校祭の前日、みんなステージを組んだり飾りをつるしたりで大忙しだった。",
    en: "The day before the festival, everyone was busy setting up the stage and hanging decorations.",
    explanation: "〈be busy ~ing〉で「〜するのに忙しい」。set up は「（舞台などを）設営する」。（※南校祭前日の熱気）",
    img: "assets/illust/chapter06/014.svg"
  },
  {
    id: "015",
    tags: ["発展"],
    type: "rewrite",
    point: "完了動名詞・受動 having been + 過去分詞",
    question: "次の文とほぼ同じ意味になるように、of を使って書き換えなさい。\nHe is proud that he was chosen as the cheer captain.",
    answer: [
      "He is proud of having been chosen as the cheer captain.",
      "He is proud of having been chosen as the cheer captain"
    ],
    ja: "彼は応援団長に選ばれたことを誇りに思っている。",
    en: "He is proud of having been chosen as the cheer captain.",
    explanation: "主節（is proud）より前の受動の内容は、完了受動動名詞〈having been + 過去分詞〉で表す。be proud of ~ing。（※南高の栄誉、応援団長）",
    img: "assets/illust/chapter06/015.svg"
  },
  {
    id: "016",
    tags: ["超頻出"],
    type: "rewrite",
    point: "It is no use ~ing（〜しても無駄だ）",
    question: "次の文を、It is no use ~ing を使ってほぼ同じ意味に書き換えなさい。\nIt is useless to regret your past mistakes now.",
    answer: [
      "It is no use regretting your past mistakes now.",
      "It is no use regretting your past mistakes now"
    ],
    ja: "今さら過去の失敗を悔やんでも無駄だ。",
    en: "It is no use regretting your past mistakes now.",
    explanation: "〈It is no use ~ing〉で「〜しても無駄だ」（＝It is useless to do）。It is no good ~ing も同義。",
    img: "assets/illust/chapter06/016.svg"
  }
];

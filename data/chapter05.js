/*
 * 第5章「不定詞」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter05",
  no: 5,
  title: "不定詞",
  subtitle: "Infinitives",
  description: "too ... to、enough to、疑問詞 + to、want O to do、be to 構文、意味上の主語、独立不定詞など、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "too + 形容詞 + to do（〜すぎて…できない）",
    question: "At the festival dance, he was too nervous （　） a single word to the girl from Yamagata Nishi.",
    choices: ["saying", "to say", "said", "say"],
    answerIndex: 1,
    ja: "南校祭のダンスで、彼は緊張しすぎて山形西の女子に一言も話しかけられなかった。",
    en: "At the festival dance, he was too nervous to say a single word to the girl from Yamagata Nishi.",
    explanation: "〈too + 形容詞 + to do〉で「あまりに〜なので…できない」。（※他校の女子と社交ダンスを踊る南校祭、緊張で固まる南高男子）"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "形容詞 + enough + to do（…できるほど〜）",
    question: "Our school has no uniform, so you have to be disciplined （　） to dress properly on your own.",
    choices: ["enough", "too", "so", "very"],
    answerIndex: 0,
    ja: "うちの学校には制服がないので、自分できちんとした服装をするだけの自律心が必要だ。",
    en: "Our school has no uniform, so you have to be disciplined enough to dress properly on your own.",
    explanation: "〈形容詞/副詞 + enough + to do〉で「…できるほど〜だ」。enough は形容詞の後ろに置く点に注意。（※制服がなく「我らの心得」で自らを律する南高生）"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "It takes + (人) + 時間 + to do",
    question: "It took the first-years a whole month （　） all the words of the cheer song \u201CThe Sky Is Cobalt.\u201D",
    choices: ["learn", "learning", "to learn", "learned"],
    answerIndex: 2,
    ja: "1年生が応援歌「空はコバルト」の歌詞を全部覚えるのに、まる1か月かかった。",
    en: "It took the first-years a whole month to learn all the words of the cheer song \u201CThe Sky Is Cobalt.\u201D",
    explanation: "〈It takes + (人) + 時間 + to do〉で「（人が）…するのに（時間）がかかる」。（※校歌より歌う機会の多い応援歌「空はコバルト」）"
  },
  {
    id: "004",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "目的を表す so as (not) to do",
    question: "He practiced the waltz every night （　） as not to step on his partner's feet at the festival dance.",
    choices: ["so", "in order", "such", "as"],
    answerIndex: 0,
    ja: "彼は南校祭のダンスでパートナーの足を踏まないように、毎晩ワルツを練習した。",
    en: "He practiced the waltz every night so as not to step on his partner's feet at the festival dance.",
    explanation: "so as to do / in order to do は「〜するために」。否定は so as not to do（notの位置に注意）。（※社交ダンスに本気の南高男子）"
  },
  {
    id: "005",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "疑問詞 + to do",
    question: "Nobody taught us （　） behave at a formal dance, so we made up our own rules.",
    choices: ["how to", "how", "what to", "to how"],
    answerIndex: 0,
    ja: "正式なダンスでのふるまい方を誰も教えてくれなかったので、僕たちは自分たちで作法を決めた。",
    en: "Nobody taught us how to behave at a formal dance, so we made up our own rules.",
    explanation: "〈疑問詞 + to do〉は名詞句として目的語などになる。how to behave は「どうふるまうべきか」。（※作法まで自分たちで決める「我らの心得」）"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "want / expect + O + to do",
    question: "The senior members want every freshman （　） the cheer song by heart before the first game.",
    choices: ["learn", "to learn", "learning", "learned"],
    answerIndex: 1,
    ja: "先輩たちは、最初の試合までに新入生全員が応援歌を暗記することを望んでいる。",
    en: "The senior members want every freshman to learn the cheer song by heart before the first game.",
    explanation: "〈want + O + to do〉で「Oに〜してほしい」。want は that節ではなく〈O + to do〉をとる。"
  },
  {
    id: "007",
    tags: ["発展"],
    type: "choice",
    point: "be to 構文（予定・運命など）",
    question: "According to tradition, the girls from other schools （　） to arrive just as the evening dance begins.",
    choices: ["are", "will", "have", "used"],
    answerIndex: 0,
    ja: "伝統によれば、他校の女子生徒たちは夕方のダンスが始まるちょうどそのときに到着することになっている。",
    en: "According to tradition, the girls from other schools are to arrive just as the evening dance begins.",
    explanation: "〈be + to不定詞〉は「予定・義務・可能・運命・意図」を表す。ここは「〜することになっている」という予定。（※南校祭名物の社交ダンス）"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "意味上の主語（人柄の形容詞は of A）",
    question: "It was very brave ①for him ②to ask ③a Yamagata Nishi student ④to dance with him.",
    choices: ["①for him", "②to ask", "③a Yamagata Nishi student", "④to dance with him"],
    answerIndex: 0,
    ja: "山形西の生徒にダンスを申し込むとは、彼はとても勇敢だった。",
    en: "It was very brave of him to ask a Yamagata Nishi student to dance with him.",
    explanation: "人の性質を表す形容詞（brave, kind, foolish など）では、不定詞の意味上の主語を〈of + 人〉で表す。①は for him ではなく of him が正しい。（※勇気だけは一流の南高男子）"
  },
  {
    id: "009",
    tags: ["発展"],
    type: "error",
    point: "知覚動詞 + O + 原形不定詞",
    question: "We ①watched ②the two of them ③to dance ④until the very last song.",
    choices: ["①watched", "②the two of them", "③to dance", "④until the very last song"],
    answerIndex: 2,
    ja: "僕たちは最後の曲まで、その二人が踊るのをずっと見ていた。",
    en: "We watched the two of them dance until the very last song.",
    explanation: "知覚動詞（watch, see, hear など）は〈知覚動詞 + O + 原形不定詞〉。③は to dance ではなく原形 dance が正しい。"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "too + 形容詞 + (for A) + to do",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「その応援歌はあまりに感動的で、僕は涙をこらえられなかった。」",
    pieces: ["The cheer song", "was", "too", "moving", "for me", "to", "hold back", "my tears"],
    answer: "The cheer song was too moving for me to hold back my tears",
    ja: "その応援歌はあまりに感動的で、僕は涙をこらえられなかった。",
    en: "The cheer song was too moving for me to hold back my tears.",
    explanation: "〈too + 形容詞 + (for A) + to do〉で「（Aには）あまりに〜すぎて…できない」。意味上の主語は for me。（※「空はコバルト」に泣く南高生）"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "結果を表す不定詞 …, only to do",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼は勇気を出して彼女を誘ったが、結局ていねいに断られただけだった。」",
    pieces: ["He", "gathered his courage", "and asked her", "only", "to", "be", "politely turned down"],
    answer: "He gathered his courage and asked her only to be politely turned down",
    ja: "彼は勇気を出して彼女を誘ったが、結局ていねいに断られただけだった。",
    en: "He gathered his courage and asked her, only to be politely turned down.",
    explanation: "〈…, only to do〉は「…したが結局〜しただけだった」という残念な結果を表す。（※勇気の代償は丁重なお断り、南高男子）"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "不定詞の意味上の主語 for A",
    question: "With no uniform rules, it is easy （　） students to express themselves through fashion.",
    answer: ["for"],
    ja: "制服の決まりがないので、生徒がファッションで自分を表現するのは簡単だ。",
    en: "With no uniform rules, it is easy for students to express themselves through fashion.",
    explanation: "〈It is + 形容詞 + for A + to do〉で「Aが…するのは〜だ」。easy は人柄の形容詞ではないので of ではなく for。（※制服のない南高）"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "seem / appear + to do（〜のように思われる）",
    question: "She （　） to enjoy the dance, which gave the whole third year a rare glimmer of hope.",
    answer: ["seemed", "appeared", "seems", "appears"],
    ja: "彼女はダンスを楽しんでいるように見え、それが3年生全体にまれな希望の光を与えた。",
    en: "She seemed to enjoy the dance, which gave the whole third year a rare glimmer of hope.",
    explanation: "〈S + seem/appear + to do〉で「Sは〜するように思われる」。（※わずかな脈ありに沸き立つ南高男子）"
  },
  {
    id: "014",
    tags: ["発展"],
    type: "fill",
    point: "独立不定詞 To be honest（正直に言うと）",
    question: "To be （　）, most of us go to the festival dance more for the snacks than for romance.",
    answer: ["honest", "frank"],
    ja: "正直に言うと、僕たちの多くはロマンスよりも軽食目当てで南校祭のダンスに行く。",
    en: "To be honest, most of us go to the festival dance more for the snacks than for romance.",
    explanation: "To be honest（正直に言うと）は文全体を修飾する独立不定詞。To tell the truth, needless to say なども同類。（※恋より焼きそばの南高男子）"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "so … that S can't → too … to",
    question: "次の文を too ... to を使って書き換えなさい。\nThe music was so loud that we couldn't hear each other.",
    answer: [
      "The music was too loud for us to hear each other.",
      "The music was too loud for us to hear each other"
    ],
    ja: "音楽があまりにうるさくて、僕たちはお互いの声が聞こえなかった。",
    en: "The music was too loud for us to hear each other.",
    explanation: "〈so + 形容詞 + that + S + can't do〉は〈too + 形容詞 + (for S) + to do〉に書き換えられる。主語 we は意味上の主語 for us に。"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "It seems that … → S seems to have p.p.",
    question: "次の文とほぼ同じ意味になるように、seem を使って書き換えなさい。\nIt seems that he has fallen for her completely.",
    answer: [
      "He seems to have fallen for her completely.",
      "He seems to have fallen for her completely"
    ],
    ja: "彼は彼女に完全に惚れ込んでしまったようだ。",
    en: "He seems to have fallen for her completely.",
    explanation: "〈It seems that S + have + p.p.〉は〈S seems to have + p.p.〉に書き換える。主節より前の時制なので完了不定詞 to have fallen。（※一目惚れから抜け出せない南高男子）"
  }
];

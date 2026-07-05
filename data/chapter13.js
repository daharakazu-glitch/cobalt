/*
 * 第13章「代名詞」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter13",
  no: 13,
  title: "代名詞",
  subtitle: "Pronouns",
  description: "one / it / that、another / the other、those who、再帰代名詞から形式目的語の it まで、代名詞の使い分けを総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "one（同種の別物）と it（それ自体）",
    question: "I left my umbrella on the bus, so I have to buy （　） before the rainy season.",
    choices: ["it", "one", "that", "this"],
    answerIndex: 1,
    ja: "バスに傘を忘れてきたから、梅雨の前に新しいのを買わないと。",
    en: "I left my umbrella on the bus, so I have to buy one before the rainy season.",
    explanation: "one は「同じ種類の別のもの」（= a + 名詞）、it は「その物そのもの」。忘れた傘そのものを買い直すことはできないので one。この it / one の区別は最頻出。",
    img: "assets/illust/chapter13/001.svg"
  },
  {
    id: "002",
    tags: ["超頻出"],
    type: "choice",
    point: "2つのうちの残り = the other",
    question: "He has two acts: one is beatboxing, and （　） is an impression of our principal.",
    choices: ["another", "other", "the other", "others"],
    answerIndex: 2,
    ja: "彼には持ちネタが2つある。1つはビートボックスで、もう1つは校長先生のモノマネだ。",
    en: "He has two acts: one is beatboxing, and the other is an impression of our principal.",
    explanation: "2つのうち「1つは one、残りの1つは the other」。残りが特定できるので the が付く。3つ以上で「別のもう1つ」なら another。（※どちらのネタも壮行式の定番）",
    img: "assets/illust/chapter13/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "some ~, others ...",
    question: "Some students spend lunchtime in the gym, and （　） rush to the cafeteria.",
    choices: ["other", "the other", "others", "another"],
    answerIndex: 2,
    ja: "昼休みを体育館で過ごす生徒もいれば、食堂へ駆け込む生徒もいる。",
    en: "Some students spend lunchtime in the gym, and others rush to the cafeteria.",
    explanation: "「〜する人もいれば、…する人もいる」は some ~, others ...。残り全員と特定するなら the others になる。単独の other は代名詞として使えない。",
    img: "assets/illust/chapter13/003.svg"
  },
  {
    id: "004",
    tags: ["基本"],
    type: "choice",
    point: "明暗・天候・時間の it",
    question: "（　） was already dark when the rehearsal finally ended.",
    choices: ["That", "It", "There", "This"],
    answerIndex: 1,
    ja: "リハーサルがやっと終わったときには、もう暗くなっていた。",
    en: "It was already dark when the rehearsal finally ended.",
    explanation: "明暗・天候・時間・距離を表す文の主語には、意味を持たない it を使う（It is dark / It is five o'clock / It rains）。この it は「それ」とは訳さない。",
    img: "assets/illust/chapter13/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出"],
    type: "choice",
    point: "those who ~「〜する人々」",
    question: "（　） who keep our own rules don't need a uniform.",
    choices: ["These", "They", "Those", "Them"],
    answerIndex: 2,
    ja: "自分たちの決めた心得を守る者に、制服はいらない。",
    en: "Those who keep our own rules don't need a uniform.",
    explanation: "those who ~ で「〜する人々」。people who ~ とほぼ同義の定型表現。（※制服のない南高では、生徒が自分たちで決めた「我らの心得」を守るのが誇り）",
    img: "assets/illust/chapter13/005.svg"
  },
  {
    id: "006",
    tags: ["基本"],
    type: "choice",
    point: "help oneself to ~「自由に取って食べる」",
    question: "The cafeteria lady smiled and said, \"Help （　） to the extra rice balls, boys.\"",
    choices: ["yourself", "yourselves", "you", "yours"],
    answerIndex: 1,
    ja: "食堂のおばちゃんはにっこり笑って言った。「おまけのおにぎり、みんな自由に食べな。」",
    en: "The cafeteria lady smiled and said, \"Help yourselves to the extra rice balls, boys.\"",
    explanation: "help oneself to ~ は「〜を自由に取って食べる（飲む）」。呼びかけの boys から相手は複数なので yourselves。主語と目的語が同一人物のとき再帰代名詞を使う。",
    img: "assets/illust/chapter13/006.svg"
  },
  {
    id: "007",
    tags: ["発展"],
    type: "choice",
    point: "所有代名詞 hers = her + 名詞",
    question: "My act got a few laughs, but （　） brought the whole gym down.",
    choices: ["her", "hers", "she", "herself"],
    answerIndex: 1,
    ja: "僕の一芸はそこそこ笑いを取ったが、彼女のは体育館全体を爆笑の渦に巻き込んだ。",
    en: "My act got a few laughs, but hers brought the whole gym down.",
    explanation: "hers は her act を1語で表す所有代名詞（mine / yours / his / hers / ours / theirs）。所有格 her の後ろには必ず名詞が必要なので、単独では使えない。",
    img: "assets/illust/chapter13/007.svg"
  },
  {
    id: "008",
    tags: ["超頻出"],
    type: "error",
    point: "almost は副詞（almost all the ~）",
    question: "①Almost ②students in our class ③have ④their own bikes.",
    choices: ["①Almost", "②students in our class", "③have", "④their own bikes"],
    answerIndex: 0,
    ja: "クラスのほとんどの生徒が自分の自転車を持っている。",
    en: "Almost all the students in our class have their own bikes.",
    explanation: "almost は副詞なので名詞を直接修飾できない。almost all the students か most students に直す。「almost + 名詞」は不可、という定番の誤り探し。",
    img: "assets/illust/chapter13/008.svg"
  },
  {
    id: "009",
    tags: ["基本", "超頻出"],
    type: "error",
    point: "its（所有格）と it's（= it is）",
    question: "The brass band polished ①it's ②trophy ③before ④the ceremony.",
    choices: ["①it's", "②trophy", "③before", "④the ceremony"],
    answerIndex: 0,
    ja: "吹奏楽部は式典の前にトロフィーを磨き上げた。",
    en: "The brass band polished its trophy before the ceremony.",
    explanation: "its は「それの」という所有格、it's は it is / it has の短縮形。ここは所有格なので its が正しい。ネイティブでも間違える超定番ポイント。",
    img: "assets/illust/chapter13/009.svg"
  },
  {
    id: "010",
    tags: ["発展"],
    type: "ordering",
    point: "None of ~「誰一人〜ない」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「最後の問題の答えは、僕らの誰にも分からなかった。」",
    pieces: ["None", "of", "us", "knew", "the answer", "to", "the last question"],
    answer: "None of us knew the answer to the last question",
    ja: "最後の問題の答えは、僕らの誰にも分からなかった。",
    en: "None of us knew the answer to the last question.",
    explanation: "3人以上で「誰も〜ない」は none of ~（2人なら neither of ~）。「〜の答え」は the answer to ~ と前置詞 to を使う点にも注意（of ではない）。",
    img: "assets/illust/chapter13/010.svg"
  },
  {
    id: "011",
    tags: ["超頻出"],
    type: "ordering",
    point: "something + 形容詞 + to do の語順",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「ダンス練習のあとに、何か冷たい飲み物を持ってきてくれない？」",
    pieces: ["Could", "you", "bring", "me", "something", "cold", "to drink", "after the dance practice"],
    answer: "Could you bring me something cold to drink after the dance practice",
    ja: "ダンス練習のあとに、何か冷たい飲み物を持ってきてくれない？",
    en: "Could you bring me something cold to drink after the dance practice?",
    explanation: "something / anything / nothing を修飾する形容詞は後ろに置き、さらに不定詞が続く（something cold to drink）。cold something という語順にしないこと。",
    img: "assets/illust/chapter13/011.svg"
  },
  {
    id: "012",
    tags: ["超頻出"],
    type: "fill",
    point: "some ~, others ...（fill版）",
    question: "Some of the fans waved flags, and （　） sang at the top of their voices.",
    answer: ["others"],
    ja: "ファンの中には旗を振る者もいれば、声の限りに歌う者もいた。",
    en: "Some of the fans waved flags, and others sang at the top of their voices.",
    explanation: "some ~, others ...「〜する者もいれば、…する者もいる」。at the top of one's voice は「声を限りに」という重要イディオム。（※応援席の風物詩）",
    img: "assets/illust/chapter13/012.svg"
  },
  {
    id: "013",
    tags: ["発展", "超頻出"],
    type: "fill",
    point: "形式目的語の it",
    question: "I found （　） hard to say even one word to her.",
    answer: ["it"],
    ja: "彼女に一言かけることさえ難しいと分かった。",
    en: "I found it hard to say even one word to her.",
    explanation: "find / make / think + it + 形容詞 + to do の形式目的語構文。真の目的語は to say 以下で、it が先に場所取りをする。found to say hard という語順は不可。（※言えた頃には彼女は下校済み）",
    img: "assets/illust/chapter13/013.svg"
  },
  {
    id: "014",
    tags: ["基本"],
    type: "fill",
    point: "each other「お互い」",
    question: "The twin comedians always help （　） other with new jokes.",
    answer: ["each"],
    ja: "その双子の芸人は、新ネタづくりでいつもお互いに助け合っている。",
    en: "The twin comedians always help each other with new jokes.",
    explanation: "each other「お互い」は代名詞なので、動詞や前置詞の目的語として使う（help each other / talk with each other）。one another もほぼ同義。",
    img: "assets/illust/chapter13/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "所有代名詞で簡潔に",
    question: "次の文を、所有代名詞を使って簡潔に書き換えなさい。\nMy score was higher than her score.",
    answer: [
      "My score was higher than hers.",
      "My score was higher than hers"
    ],
    ja: "僕の点数は彼女の点数より高かった。",
    en: "My score was higher than hers.",
    explanation: "her score の繰り返しを避けて所有代名詞 hers で受ける。比較の文では than mine / than hers の形が頻出。（※点数だけは勝てた、点数だけは）",
    img: "assets/illust/chapter13/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "People who → Those who",
    question: "次の文を、Those で始めてほぼ同じ意味に書き換えなさい。\nPeople who laugh a lot stay healthy.",
    answer: [
      "Those who laugh a lot stay healthy.",
      "Those who laugh a lot stay healthy"
    ],
    ja: "よく笑う人は健康でいられる。",
    en: "Those who laugh a lot stay healthy.",
    explanation: "those who ~ は people who ~ の書き換え定番。「笑う門には福来る」に近い発想の文。長文でも Those who ~ を「それらの人々？」と誤読しないこと。",
    img: "assets/illust/chapter13/016.svg"
  }
];

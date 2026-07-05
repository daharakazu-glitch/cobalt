/*
 * 第11章「疑問文・否定」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter11",
  no: 11,
  title: "疑問文・否定",
  subtitle: "Questions & Negation",
  description: "間接疑問・付加疑問・否定疑問への答え方から、部分否定・準否定・no more than まで、設問と否定の急所を総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "間接疑問は平叙語順",
    question: "Does anyone know （　）? We need it for tomorrow's practice.",
    choices: ["where is the cheering flag kept", "where the cheering flag is kept", "where kept the cheering flag is", "is the cheering flag kept where"],
    answerIndex: 1,
    ja: "応援旗がどこに保管されているか、誰か知らない？ 明日の練習で必要なんだ。",
    en: "Does anyone know where the cheering flag is kept? We need it for tomorrow's practice.",
    explanation: "疑問詞節が動詞の目的語になる間接疑問では、疑問詞 + S + V の平叙語順にする。where is the flag という直接疑問の語順のまま入れないのが最頻出ポイント。",
    img: "assets/illust/chapter11/001.svg"
  },
  {
    id: "002",
    tags: ["基本"],
    type: "choice",
    point: "Let's の付加疑問は shall we",
    question: "Let's run through the waltz one more time, （　）?",
    choices: ["will you", "don't we", "shall we", "won't you"],
    answerIndex: 2,
    ja: "もう一回ワルツを通しで練習しようよ、ね？",
    en: "Let's run through the waltz one more time, shall we?",
    explanation: "Let's ~ の付加疑問は shall we?、命令文の付加疑問は will you?。run through は「通しで練習する」。（※南校祭の社交ダンスは本番前夜まで特訓が続く）",
    img: "assets/illust/chapter11/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "否定疑問への答え方",
    question: "A: Don't you like carrying the big drum? B: （　）. I actually enjoy it.",
    choices: ["No, I don't", "Yes, I do", "No, I do", "Yes, I don't"],
    answerIndex: 1,
    ja: "A: 大太鼓を運ぶの、嫌いじゃないの？ B: いや、好きだよ。実は楽しんでるんだ。",
    en: "A: Don't you like carrying the big drum? B: Yes, I do. I actually enjoy it.",
    explanation: "英語では質問の形に関係なく、答えの内容が肯定なら Yes、否定なら No。日本語の「いいえ、好きです」に引きずられて No と答えないこと。",
    img: "assets/illust/chapter11/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "部分否定 not always",
    question: "A funny impression does （　） get a cheer — sometimes it gets boos instead.",
    choices: ["always", "not always", "never", "not never"],
    answerIndex: 1,
    ja: "面白いモノマネがいつも喝采をもらえるとは限らない——ときにはブーイングを浴びることもある。",
    en: "A funny impression does not always get a cheer — sometimes it gets boos instead.",
    explanation: "not + always / all / every は「いつも（すべて）〜とは限らない」という部分否定。never は全否定なので後半の「ときには〜」と矛盾する。（※一芸披露は水物。ウケるも滑るも紙一重）",
    img: "assets/illust/chapter11/004.svg"
  },
  {
    id: "005",
    tags: ["基本"],
    type: "choice",
    point: "How come + 平叙語順",
    question: "（　） you were late for the morning cheer practice again?",
    choices: ["Why did", "How come", "What did", "Why were"],
    answerIndex: 1,
    ja: "どうしてまた朝の応援練習に遅れたの？",
    en: "How come you were late for the morning cheer practice again?",
    explanation: "How come の後ろは疑問文の語順にせず、S + V の平叙語順が続く（How come you were ...?）。Why なら Why were you late ...? と倒置が必要。",
    img: "assets/illust/chapter11/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "準否定 hardly「ほとんど〜ない」",
    question: "The sports festival got so heated that I could （　） hear the announcements.",
    choices: ["hardly", "almost", "mostly", "nearly"],
    answerIndex: 0,
    ja: "体育祭があまりに白熱して、アナウンスがほとんど聞こえなかった。",
    en: "The sports festival got so heated that I could hardly hear the announcements.",
    explanation: "hardly / scarcely は「ほとんど〜ない」という準否定の副詞。almost / nearly は「ほとんど〜だ」で否定の意味を持たない。（※応援合戦、クラス対抗リレー、そして毎年の救急車。それが南高の体育祭）",
    img: "assets/illust/chapter11/006.svg"
  },
  {
    id: "007",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "no more than = only",
    question: "She solved the puzzle in （　） ten minutes, which amazed the whole club.",
    choices: ["no more than", "not more than", "no less than", "not less than"],
    answerIndex: 0,
    ja: "彼女はそのパズルをたった10分で解いてしまい、部員全員を驚かせた。",
    en: "She solved the puzzle in no more than ten minutes, which amazed the whole club.",
    explanation: "no more than = only「たった」、no less than = as many as「〜も」、not more than = at most「多くても」、not less than = at least「少なくとも」。「たった10分」という速さの驚きなので no more than。",
    img: "assets/illust/chapter11/007.svg"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "間接疑問内で倒置しない",
    question: "Nobody told me ①why ②did the teacher ③cancel ④today's quiz.",
    choices: ["①why", "②did the teacher", "③cancel", "④today's quiz"],
    answerIndex: 1,
    ja: "なぜ先生が今日の小テストを中止にしたのか、誰も教えてくれなかった。",
    en: "Nobody told me why the teacher canceled today's quiz.",
    explanation: "間接疑問の中では did による倒置をせず、why the teacher canceled と平叙語順にする。②の did the teacher が誤り。cancel の過去形は canceled / cancelled のどちらの綴りも可。",
    img: "assets/illust/chapter11/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "二重否定にしない",
    question: "I ①don't know ②nothing ③about ④her weekend plans.",
    choices: ["①don't know", "②nothing", "③about", "④her weekend plans"],
    answerIndex: 1,
    ja: "彼女の週末の予定については何も知らない。",
    en: "I don't know anything about her weekend plans.",
    explanation: "標準英語では1文の中で否定語を重ねない。don't がすでにあるので nothing は anything にする（または I know nothing とする）。（※そもそも彼女の予定を知る接点がないのが南高男子）",
    img: "assets/illust/chapter11/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "否定主語 Nobody + 間接疑問",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「なぜあのドラマーがいつもあんなに陽気なのか、誰も知らない。」",
    pieces: ["Nobody", "knows", "why", "the drummer", "is", "always", "so cheerful"],
    answer: "Nobody knows why the drummer is always so cheerful",
    ja: "なぜあのドラマーがいつもあんなに陽気なのか、誰も知らない。",
    en: "Nobody knows why the drummer is always so cheerful.",
    explanation: "Nobody を主語にすると文全体が否定になる（Nobody knows = 誰も知らない）。why 以下は間接疑問なので the drummer is という平叙語順。頻度の副詞 always は be動詞の後ろに置く。",
    img: "assets/illust/chapter11/010.svg"
  },
  {
    id: "011",
    tags: ["基本"],
    type: "ordering",
    point: "勧誘の Why don't we ~?",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「放課後、クラス対抗リレーのバトンパスを練習しない？」",
    pieces: ["Why", "don't", "we", "practice", "the baton pass", "for the class relay", "after school"],
    answer: "Why don't we practice the baton pass for the class relay after school",
    ja: "放課後、クラス対抗リレーのバトンパスを練習しない？",
    en: "Why don't we practice the baton pass for the class relay after school?",
    explanation: "Why don't we ~? は「（一緒に）〜しない？」という勧誘表現（= Shall we ~? / How about ~ing?）。（※リレーの勝敗はバトンで決まる、とクラスの陸上部員は譲らない）",
    img: "assets/illust/chapter11/011.svg"
  },
  {
    id: "012",
    tags: ["超頻出"],
    type: "fill",
    point: "準否定 seldom / rarely",
    question: "My grandfather （　） talks about his youth, so his stories are precious.",
    answer: ["seldom", "rarely"],
    ja: "祖父はめったに若い頃の話をしないので、その話はとても貴重だ。",
    en: "My grandfather seldom talks about his youth, so his stories are precious.",
    explanation: "seldom / rarely は「めったに〜ない」という頻度の準否定。一般動詞の前に置く。hardly / scarcely（程度・「ほとんど〜ない」）との使い分けも頻出。",
    img: "assets/illust/chapter11/012.svg"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "Neither of ~「どちらも〜ない」",
    question: "（　） of the two goalkeepers was able to stop that shot.",
    answer: ["Neither", "neither"],
    ja: "2人のゴールキーパーのどちらも、あのシュートを止めることができなかった。",
    en: "Neither of the two goalkeepers was able to stop that shot.",
    explanation: "「（2つ・2人の）どちらも〜ない」は neither of ~。原則単数扱いなので was を使う。3つ以上なら none of ~ を使う点もセットで覚える。",
    img: "assets/illust/chapter11/013.svg"
  },
  {
    id: "014",
    tags: ["基本"],
    type: "fill",
    point: "付加疑問（肯定文 → 否定形）",
    question: "The cafeteria lady remembers every student's face, （　） she?",
    answer: ["doesn't"],
    ja: "食堂のおばちゃんは全生徒の顔を覚えてるんだよね？",
    en: "The cafeteria lady remembers every student's face, doesn't she?",
    explanation: "肯定文の付加疑問は「否定の短縮形 + 主語の代名詞」。一般動詞 remembers（三単現）なので doesn't she? となる。（※顔だけでなく、揚げパンの好みまで覚えている説がある）",
    img: "assets/illust/chapter11/014.svg"
  },
  {
    id: "015",
    tags: ["発展"],
    type: "rewrite",
    point: "感嘆文 What a ~!",
    question: "次の文を、What で始まる感嘆文に書き換えなさい。\nShe is a very talented beatboxer.",
    answer: [
      "What a talented beatboxer she is!",
      "What a talented beatboxer she is",
      "What a talented beatboxer she is."
    ],
    ja: "彼女はなんて才能のあるビートボクサーなんだ！",
    en: "What a talented beatboxer she is!",
    explanation: "What + a + 形容詞 + 名詞 + S + V! の語順。How を使うなら How talented she is! と形容詞だけを前に出す。感嘆文でも S + V の平叙語順を保つのがポイント。",
    img: "assets/illust/chapter11/015.svg"
  },
  {
    id: "016",
    tags: ["発展", "超頻出"],
    type: "rewrite",
    point: "never ~ without …「〜すると必ず…」",
    question: "次の文を、never と without を使ってほぼ同じ意味に書き換えなさい。\nWhenever I hear this cheer song, I think of the festival.",
    answer: [
      "I never hear this cheer song without thinking of the festival.",
      "I never hear this cheer song without thinking of the festival"
    ],
    ja: "この応援歌を聞くと、必ずあの祭りを思い出す。",
    en: "I never hear this cheer song without thinking of the festival.",
    explanation: "never ~ without …ing は「…せずに〜することはない」＝「〜すれば必ず…する」という二重否定による強い肯定。Whenever S V = never ~ without …ing の書き換えは超定番。",
    img: "assets/illust/chapter11/016.svg"
  }
];

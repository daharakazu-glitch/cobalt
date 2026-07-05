/*
 * 第7章「分詞」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter07",
  no: 7,
  title: "分詞",
  subtitle: "Participles",
  description: "現在分詞と過去分詞の使い分け、感情を表す分詞、知覚・使役＋分詞、付帯状況の with、分詞構文（否定・完了・受動・独立）まで、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "感情を引き起こす側は現在分詞",
    question: "The stand-up act by the class clown was so （　） that the whole gym roared with applause.",
    choices: ["excite", "exciting", "excited", "to excite"],
    answerIndex: 1,
    ja: "クラスのお調子者の漫才があまりに面白くて、体育館全体が喝采で沸いた。",
    en: "The stand-up act by the class clown was so exciting that the whole gym roared with applause.",
    explanation: "「人をワクワクさせる」ような、感情を引き起こす側の物事には現在分詞 exciting。人が「ワクワクさせられる」なら excited。（※南高名物、指名された生徒の一芸披露）",
    img: "assets/illust/chapter07/001.svg"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "感情を受ける側は過去分詞",
    question: "Everyone looked completely （　） during his flat speech, and soon the booing started.",
    choices: ["boring", "bored", "bore", "to bore"],
    answerIndex: 1,
    ja: "彼の盛り上がらないスピーチの間、みんな完全に退屈しきった様子で、まもなくブーイングが始まった。",
    en: "Everyone looked completely bored during his flat speech, and soon the booing started.",
    explanation: "人が「退屈させられる」側なら過去分詞 bored。物事が「退屈させる」側なら boring。（※つまらなければ容赦なくブーイングを浴びる南高の風習）",
    img: "assets/illust/chapter07/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "現在分詞による後置修飾（能動）",
    question: "The student （　） a magic trick on stage suddenly dropped every single card.",
    choices: ["performed", "performing", "to perform", "performs"],
    answerIndex: 1,
    ja: "ステージで手品を披露していた生徒が、突然カードを一枚残らず落とした。",
    en: "The student performing a magic trick on stage suddenly dropped every single card.",
    explanation: "名詞を後ろから修飾し「〜している…」と能動・進行の意味を表すのは現在分詞。the student performing …（手品を披露している生徒）。（※スベると笑いに変わる一芸披露）",
    img: "assets/illust/chapter07/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "過去分詞による後置修飾（受動）",
    question: "The fried bread （　） by the cafeteria ladies sells out within minutes every single day.",
    choices: ["selling", "sold", "is sold", "sells"],
    answerIndex: 1,
    ja: "食堂のおばちゃんたちに売られる揚げパンは、毎日数分で売り切れる。",
    en: "The fried bread sold by the cafeteria ladies sells out within minutes every single day.",
    explanation: "名詞を後ろから修飾し「〜される…」と受動の意味を表すのは過去分詞。the fried bread sold by …（〜に売られる揚げパン）。（※コスパ最強、教室まで売りに来る名物の揚げパン）",
    img: "assets/illust/chapter07/004.svg"
  },
  {
    id: "005",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "have + O + 過去分詞（被害）",
    question: "He had his wallet （　） in the festival crowd, so he couldn't buy a single snack all day.",
    choices: ["steal", "stealing", "stolen", "to steal"],
    answerIndex: 2,
    ja: "彼は南校祭の人混みで財布を盗まれ、その日は一日中軽食一つ買えなかった。",
    en: "He had his wallet stolen in the festival crowd, so he couldn't buy a single snack all day.",
    explanation: "〈have + O + 過去分詞〉は「Oを〜される（被害）」も表す。wallet は「盗まれる」側なので stolen。",
    img: "assets/illust/chapter07/005.svg"
  },
  {
    id: "006",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "知覚動詞 + O + 過去分詞（受動）",
    question: "After his joke completely bombed, we saw him （　） off the stage by two laughing seniors.",
    choices: ["dragged", "dragging", "drag", "to drag"],
    answerIndex: 0,
    ja: "彼のジョークが完全にスベった後、僕たちは彼が笑っている先輩二人にステージから引きずり降ろされるのを見た。",
    en: "After his joke completely bombed, we saw him dragged off the stage by two laughing seniors.",
    explanation: "〈知覚動詞 + O + 過去分詞〉で「Oが〜されるのを見る/聞く」。him は「引きずられる」側なので dragged。（※ウケなければステージ強制退場も一芸披露の掟）",
    img: "assets/illust/chapter07/006.svg"
  },
  {
    id: "007",
    tags: ["発展"],
    type: "choice",
    point: "付帯状況の with + O + 現在分詞",
    question: "At the send-off ceremony, she sang the whole song with tears （　） down her cheeks.",
    choices: ["run", "running", "ran", "to run"],
    answerIndex: 1,
    ja: "壮行式で、彼女は涙を頬に流しながら、その歌を最後まで歌いきった。",
    en: "At the send-off ceremony, she sang the whole song with tears running down her cheeks.",
    explanation: "〈with + O + 現在分詞〉で「Oが〜した状態で」という付帯状況を表す。tears が「流れている」ので running。",
    img: "assets/illust/chapter07/007.svg"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "補語になる過去分詞（stand + 過去分詞）",
    question: "When his name was called, ①not knowing ②what to say, he just ③stood there ④froze.",
    choices: ["①not knowing", "②what to say", "③stood there", "④froze"],
    answerIndex: 3,
    ja: "名前を呼ばれ、何を言えばいいか分からず、彼はただそこに立ちすくんでいた。",
    en: "When his name was called, not knowing what to say, he just stood there frozen.",
    explanation: "「凍りついた（すくんだ）状態で立っていた」は主語 he が「凍りつかされた」側なので過去分詞 frozen。④は froze ではなく frozen が正しい。文頭の not knowing は分詞構文の否定。（※指名されて頭が真っ白になる一芸披露）",
    img: "assets/illust/chapter07/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "感情を表す分詞（変化に富んだ＝varied）",
    question: "The menu at our cafeteria is so ①varying and ②cheap that ③even students ④on a tight budget eat well.",
    choices: ["①varying", "②cheap", "③even students", "④on a tight budget"],
    answerIndex: 0,
    ja: "うちの食堂のメニューはとても豊富で安いので、お金に余裕のない生徒でもしっかり食べられる。",
    en: "The menu at our cafeteria is so varied and cheap that even students on a tight budget eat well.",
    explanation: "「（種類が）豊富な・変化に富んだ」は過去分詞由来の形容詞 varied。①は varying ではなく varied が正しい。（※メニュー豊富でコスパ抜群の南高食堂）",
    img: "assets/illust/chapter07/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "分詞構文の否定（Not + ~ing）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「何を披露すればいいか分からず、彼は結局しょぼい手品をやった。」",
    pieces: ["Not", "knowing", "what to perform", "he", "ended up", "doing", "a lame magic trick"],
    answer: "Not knowing what to perform he ended up doing a lame magic trick",
    ja: "何を披露すればいいか分からず、彼は結局しょぼい手品をやった。",
    en: "Not knowing what to perform, he ended up doing a lame magic trick.",
    explanation: "分詞構文の否定は not を分詞の前に置く。Not knowing …（〜が分からないので）。end up ~ing は「結局〜することになる」。（※一芸を求められるも準備不足の悲劇）",
    img: "assets/illust/chapter07/010.svg"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "付帯状況の with + O + 現在分詞",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「おばちゃんたちが揚げパンを売り歩く中、僕たちは休み時間を過ごした。」",
    pieces: ["We", "spent the break", "with", "the ladies", "selling", "fried bread", "around the classroom"],
    answer: "We spent the break with the ladies selling fried bread around the classroom",
    ja: "おばちゃんたちが揚げパンを売り歩く中、僕たちは休み時間を過ごした。",
    en: "We spent the break with the ladies selling fried bread around the classroom.",
    explanation: "〈with + O + 現在分詞〉で「Oが〜している中で／〜しながら」という付帯状況を表す。the ladies が「売り歩いている」ので selling。（※教室まで来てくれる名物のおばちゃん）",
    img: "assets/illust/chapter07/011.svg"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "感情を受ける側は過去分詞（amazed）",
    question: "The whole audience was （　） when the shy first-year suddenly started beatboxing like a pro.",
    answer: ["amazed", "astonished", "stunned"],
    ja: "内気な1年生が突然プロ並みにビートボックスを始めたとき、観客全員が驚嘆した。",
    en: "The whole audience was amazed when the shy first-year suddenly started beatboxing like a pro.",
    explanation: "人が「驚かされる」側なので過去分詞 amazed。amazing（驚かせるような）と区別する。（※意外な特技で喝采をさらう一芸披露）",
    img: "assets/illust/chapter07/012.svg"
  },
  {
    id: "013",
    tags: ["発展"],
    type: "fill",
    point: "独立分詞構文（Judging from）",
    question: "（　） from the roar of applause, his impression of that famous comedian was a huge hit.",
    answer: ["Judging"],
    ja: "拍手の大歓声から判断すると、彼のあの有名芸人のモノマネは大成功だった。",
    en: "Judging from the roar of applause, his impression of that famous comedian was a huge hit.",
    explanation: "judging from … は「〜から判断すると」という慣用的な独立分詞構文。主語に関係なく決まった形で使う。（※モノマネで喝采を浴びる一芸披露）",
    img: "assets/illust/chapter07/013.svg"
  },
  {
    id: "014",
    tags: ["超頻出"],
    type: "fill",
    point: "get + O + 過去分詞（〜してもらう）",
    question: "Right before the festival, I finally got my hair （　） just like my favorite musician's.",
    answer: ["cut", "done", "styled"],
    ja: "南校祭の直前に、やっと大好きなミュージシャンそっくりに髪を切ってもらった。",
    en: "Right before the festival, I finally got my hair cut just like my favorite musician's.",
    explanation: "〈get + O + 過去分詞〉で「Oを〜してもらう」。hair は「切ってもらう」側なので過去分詞 cut（cut–cut–cut）。",
    img: "assets/illust/chapter07/014.svg"
  },
  {
    id: "015",
    tags: ["発展"],
    type: "rewrite",
    point: "受動の分詞構文（Being の省略）",
    question: "次の文を分詞構文を使って書き換えなさい。\nBecause he was chosen to perform, he practiced his comedy act all week.",
    answer: [
      "Chosen to perform, he practiced his comedy act all week.",
      "Chosen to perform, he practiced his comedy act all week",
      "Being chosen to perform, he practiced his comedy act all week.",
      "Being chosen to perform, he practiced his comedy act all week"
    ],
    ja: "一芸を披露するよう指名されたので、彼は一週間ずっとネタを練習した。",
    en: "Chosen to perform, he practiced his comedy act all week.",
    explanation: "受動の分詞構文は〈Being + 過去分詞〉だが、Being はふつう省略され、過去分詞で文を始める。Chosen to perform, …（指名されたので）。（※壮行式などで指名される一芸披露）",
    img: "assets/illust/chapter07/015.svg"
  },
  {
    id: "016",
    tags: ["超頻出"],
    type: "rewrite",
    point: "完了分詞構文（Having + 過去分詞）",
    question: "次の文を分詞構文を使って書き換えなさい。\nAfter he had eaten three pieces of fried bread, he still lined up for onigiri.",
    answer: [
      "Having eaten three pieces of fried bread, he still lined up for onigiri.",
      "Having eaten three pieces of fried bread, he still lined up for onigiri"
    ],
    ja: "揚げパンを3個食べた後も、彼はさらにおにぎりの列に並んだ。",
    en: "Having eaten three pieces of fried bread, he still lined up for onigiri.",
    explanation: "主節よりも前に完了した動作を表す分詞構文は〈Having + 過去分詞〉。（※コスパ食堂で無限に食べる南高生）",
    img: "assets/illust/chapter07/016.svg"
  }
];

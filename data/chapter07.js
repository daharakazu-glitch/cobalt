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
    question: "Everyone looked completely （　） during the three-hour lecture, and half the class was soon asleep.",
    choices: ["boring", "bored", "bore", "to bore"],
    answerIndex: 1,
    ja: "3時間の講義の間、みんな完全に退屈しきった様子で、まもなくクラスの半分は眠っていた。",
    en: "Everyone looked completely bored during the three-hour lecture, and half the class was soon asleep.",
    explanation: "退屈「させられる」側の人は過去分詞 bored、退屈「させる」側の物事は boring。looked bored で「退屈した様子だった」。（※最後まで起きていたのは、例の立って聞く生徒だけだった）",
    img: "assets/illust/chapter07/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "現在分詞による後置修飾（能動）",
    question: "The musician （　） old songs in the underpass turned out to be a world-famous guitarist.",
    choices: ["performed", "performing", "to perform", "performs"],
    answerIndex: 1,
    ja: "地下道で古い歌を演奏していたそのミュージシャンは、実は世界的なギタリストだった。",
    en: "The musician performing old songs in the underpass turned out to be a world-famous guitarist.",
    explanation: "名詞 + 現在分詞句で「〜している…」と後ろから修飾（能動の関係）。turn out to be ~ は「〜だと判明する」。（※世界的スターのお忍び路上ライブ、たまに本当にあるから侮れない）",
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
    question: "In the very last minute, we saw the winning goal （　） by the youngest player on the team.",
    choices: ["scored", "scoring", "score", "to score"],
    answerIndex: 0,
    ja: "試合終了間際、チーム最年少の選手によって決勝ゴールが決められるのを僕たちは見た。",
    en: "In the very last minute, we saw the winning goal scored by the youngest player on the team.",
    explanation: "知覚動詞 + O + 過去分詞「Oが〜されるのを見る」。O（the goal）と score は受動の関係なので過去分詞 scored。能動なら原形か現在分詞を使う。",
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
    question: "Suddenly called on in class, ①not knowing ②the answer, he just ③stood there ④froze.",
    choices: ["①not knowing", "②the answer", "③stood there", "④froze"],
    answerIndex: 3,
    ja: "授業で急に当てられ、答えが分からず、彼は凍りついたようにただそこに立っていた。",
    en: "Suddenly called on in class, not knowing the answer, he just stood there frozen.",
    explanation: "stand + 過去分詞で「〜した状態で立っている」。④は過去形 froze ではなく過去分詞 frozen（凍りついた状態で）が正しい。（※眠気防止に立つのは名案だが、当てられて固まるのは別問題）",
    img: "assets/illust/chapter07/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "感情を表す分詞（変化に富んだ＝varied）",
    question: "The training menus of our clubs are so ①varying and ②tough that ③no one ④ever gets bored.",
    choices: ["①varying", "②tough", "③no one", "④ever gets bored"],
    answerIndex: 0,
    ja: "うちの部活のトレーニングメニューはとても多彩でハードなので、誰も飽きることがない。",
    en: "The training menus of our clubs are so varied and tough that no one ever gets bored.",
    explanation: "「変化に富んだ」という出来上がった状態は過去分詞 varied。varying は「刻々と変わりつつある」で不自然。（※野球部から山岳部・ボクシング部まで15以上——南高は部活の見本市）",
    img: "assets/illust/chapter07/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "分詞構文の否定（Not + ~ing）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「コンサートが中止になったことを知らず、何百人ものファンが雨の中で待ち続けた。」",
    pieces: ["Not", "knowing", "the concert was canceled", "hundreds of fans", "kept", "waiting", "in the rain"],
    answer: "Not knowing the concert was canceled hundreds of fans kept waiting in the rain",
    ja: "コンサートが中止になったことを知らず、何百人ものファンが雨の中で待ち続けた。",
    en: "Not knowing the concert was canceled, hundreds of fans kept waiting in the rain.",
    explanation: "分詞構文の否定は Not を分詞の直前に置く（Not knowing ~「〜を知らずに」）。keep ~ing「〜し続ける」との組み合わせ。（※翌週の振替公演で、バンドは雨の日のファンを最前列に招待したという）",
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
    question: "The whole stadium was （　） when Ohtani struck out three batters on just nine pitches.",
    answer: ["amazed", "astonished", "stunned"],
    ja: "大谷がわずか9球で3者三振を奪ったとき、スタジアム全体が驚嘆した。",
    en: "The whole stadium was amazed when Ohtani struck out three batters on just nine pitches.",
    explanation: "驚か「される」側なので過去分詞 amazed（astonished / stunned も可）。strike out は「三振に取る」。（※9球3者三振＝いわゆる immaculate inning。実況が絶叫するやつ）",
    img: "assets/illust/chapter07/012.svg"
  },
  {
    id: "013",
    tags: ["発展"],
    type: "fill",
    point: "独立分詞構文（Judging from）",
    question: "（　） from the long line outside, the new ramen shop across the street is a huge hit.",
    answer: ["Judging"],
    ja: "外の長い行列から判断すると、通りの向かいの新しいラーメン店は大当たりだ。",
    en: "Judging from the long line outside, the new ramen shop across the street is a huge hit.",
    explanation: "Judging from ~「〜から判断すると」は主語を明示しない独立分詞構文の慣用表現。Generally speaking / Strictly speaking なども同じ仲間。（※行列は最高の看板である）",
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
    question: "次の文を分詞構文を使って書き換えなさい。\nBecause she was selected for the national team, she trained twice as hard as before.",
    answer: [
      "Selected for the national team, she trained twice as hard as before.",
      "Selected for the national team, she trained twice as hard as before",
      "Being selected for the national team, she trained twice as hard as before.",
      "Being selected for the national team, she trained twice as hard as before"
    ],
    ja: "代表チームに選ばれたので、彼女は以前の2倍熱心に練習した。",
    en: "Selected for the national team, she trained twice as hard as before.",
    explanation: "受動の分詞構文は Being + 過去分詞。文頭の Being は省略され、過去分詞 Selected から始めるのが普通。twice as ~ as ...「…の2倍〜」。",
    img: "assets/illust/chapter07/015.svg"
  },
  {
    id: "016",
    tags: ["超頻出"],
    type: "rewrite",
    point: "完了分詞構文（Having + 過去分詞）",
    question: "次の文を分詞構文を使って書き換えなさい。\nAfter he had run the whole marathon dressed as a wizard, he slept for twelve hours.",
    answer: [
      "Having run the whole marathon dressed as a wizard, he slept for twelve hours.",
      "Having run the whole marathon dressed as a wizard, he slept for twelve hours"
    ],
    ja: "魔法使いの仮装でマラソンを完走した後、彼は12時間眠った。",
    en: "Having run the whole marathon dressed as a wizard, he slept for twelve hours.",
    explanation: "主節より前に起きたことは完了分詞構文 Having + 過去分詞 で表す。（※恒例のマラソン大会、3年生は思い思いの仮装で走るのが南高流。とんがり帽子は走りにくい）",
    img: "assets/illust/chapter07/016.svg"
  }
];

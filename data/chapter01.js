/*
 * 第1章「時制」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter01",
  no: 1,
  title: "時制",
  subtitle: "Tenses",
  description: "現在・過去・未来、進行形、完了形の使い分けを、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "習慣を表す現在形",
    question: "In midwinter, a die-hard Nanko student （　） to school in short sleeves just to prove he never loses to the cold.",
    choices: ["is walking", "walks", "has walked", "walked"],
    answerIndex: 1,
    ja: "真冬でも、筋金入りの南高生は「寒さには絶対に負けない」と証明するためだけに半袖で登校する。",
    en: "In midwinter, a die-hard Nanko student walks to school in short sleeves just to prove he never loses to the cold.",
    explanation: "習慣的・反復的な事実は現在形で表す。今この瞬間の動作ではないので進行形 is walking は不可。just to ~ は「〜するためだけに」。（※真冬でも半袖、南高名物の謎の気合）",
    img: "assets/illust/chapter01/001.svg"
  },
  {
    id: "002",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "状態動詞は進行形にしない",
    question: "This signed ball （　） to my brother, a die-hard Ohtani fan, so don't you dare touch it.",
    choices: ["is belonging", "belongs", "is belonged", "has been belonging"],
    answerIndex: 1,
    ja: "このサイン入りボールは大谷翔平の熱狂的ファンである兄のものだから、絶対に触るなよ。",
    en: "This signed ball belongs to my brother, a die-hard Ohtani fan, so don't you dare touch it.",
    explanation: "belong（所属する）は状態を表す動詞で、原則として進行形にしない。同様に know, own, resemble, contain なども進行形を避ける。",
    img: "assets/illust/chapter01/002.svg"
  },
  {
    id: "003",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "時・条件の副詞節は現在形で未来を表す",
    question: "I'll switch into full-focus mode as soon as the exam period （　）.",
    choices: ["will start", "starts", "will have started", "started"],
    answerIndex: 1,
    ja: "試験期間が始まったらすぐに、僕は全集中モードに切り替えるよ。",
    en: "I'll switch into full-focus mode as soon as the exam period starts.",
    explanation: "as soon as / when / until / if などが導く時・条件の副詞節では、未来のことでも現在形で表す。主節の will と重ねて will start としない点が頻出。（※チャイム一つで受験生モードに入る南高生の「全集中」）",
    img: "assets/illust/chapter01/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "未来完了 will have + 過去分詞",
    question: "By the time you get to the platform, the last train （　）.",
    choices: ["leaves", "has left", "will have left", "is leaving"],
    answerIndex: 2,
    ja: "君がホームに着くころには、最終電車は出てしまっているだろう。",
    en: "By the time you get to the platform, the last train will have left.",
    explanation: "「未来のある時点までに〜してしまっているだろう」は未来完了 will have + p.p.。By the time … が未来完了の目印になりやすい。",
    img: "assets/illust/chapter01/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "現在完了進行形（継続）",
    question: "The whole class （　） the school cheer since dawn, and the windows are still shaking.",
    choices: ["practices", "is practicing", "has been practicing", "practiced"],
    answerIndex: 2,
    ja: "クラス全員が夜明けからずっと応援歌を練習していて、窓がいまだに揺れている。",
    en: "The whole class has been practicing the school cheer since dawn, and the windows are still shaking.",
    explanation: "since dawn（過去のある時点から今まで）と動作の継続を表すので現在完了進行形 have been ~ing。the whole class は一つのまとまりとして単数扱いなので has。（※声量が県内トップクラスの南高応援）",
    img: "assets/illust/chapter01/005.svg"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "過去完了（大過去）",
    question: "By the time the teacher came back, the students （　） already turned the classroom into a festival stage.",
    choices: ["have", "had", "were", "would"],
    answerIndex: 1,
    ja: "先生が戻ってきたころには、生徒たちはすでに教室を文化祭のステージに変えてしまっていた。",
    en: "By the time the teacher came back, the students had already turned the classroom into a festival stage.",
    explanation: "過去の一点（戻ってきたとき）より前に完了した動作は過去完了 had + p.p.。過去の基準時より「さらに前」を表す大過去。（※南高祭が近づくと変身する南高生）",
    img: "assets/illust/chapter01/006.svg"
  },
  {
    id: "007",
    tags: ["基本"],
    type: "choice",
    point: "その場で決めた意志は will",
    question: "A: A girl just glanced in our direction! B: Really? Then I （　） go and say hi right now.",
    choices: ["am going to", "will", "am", "have"],
    answerIndex: 1,
    ja: "A: 女子がこっちをチラッと見たぞ！ B: マジか？じゃあ今すぐ挨拶しに行ってくる。",
    en: "A: A girl just glanced in our direction! B: Really? Then I will go and say hi right now.",
    explanation: "発話の場でとっさに決めた意志は will。be going to は前もって決めていた予定に使うため、この場面には合わない。（※勇んで駆け出したが、彼女が見ていたのは後ろにいた他校生だった…南高男子の悲哀）",
    img: "assets/illust/chapter01/007.svg"
  },
  {
    id: "008",
    tags: ["発展", "超頻出"],
    type: "error",
    point: "継続は現在完了で",
    question: "Since she moved to Osaka, ①she is living ②in a small apartment ③near the river ④all by herself.",
    choices: ["①she is living", "②in a small apartment", "③near the river", "④all by herself"],
    answerIndex: 0,
    ja: "大阪に引っ越して以来、彼女は川の近くの小さなアパートに一人で住んでいる。",
    en: "Since she moved to Osaka, she has lived in a small apartment near the river all by herself.",
    explanation: "Since …（〜以来）と過去から現在までの継続を表すので、①は現在形 is living ではなく現在完了 has lived が正しい。",
    img: "assets/illust/chapter01/008.svg"
  },
  {
    id: "009",
    tags: ["発展"],
    type: "error",
    point: "時の副詞節内は現在形",
    question: "By the time the sun ①will rise, ②we ③will have finished ④setting up the tents.",
    choices: ["①will rise", "②we", "③will have finished", "④setting up the tents"],
    answerIndex: 0,
    ja: "太陽が昇るころには、私たちはテントを張り終えているだろう。",
    en: "By the time the sun rises, we will have finished setting up the tents.",
    explanation: "By the time … は時の副詞節なので、中では未来のことでも現在形 rises を使う。主節が未来完了 will have finished でも副詞節は will rise としない。",
    img: "assets/illust/chapter01/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "過去完了＋just（〜したところだった）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「僕がやっと話しかける勇気を出したとき、彼女はちょうど歩き去ったところだった。」",
    pieces: ["She", "had", "just", "walked away", "when", "I", "finally", "worked up the courage", "to say hi"],
    answer: "She had just walked away when I finally worked up the courage to say hi",
    ja: "僕がやっと話しかける勇気を出したとき、彼女はちょうど歩き去ったところだった。",
    en: "She had just walked away when I finally worked up the courage to say hi.",
    explanation: "「(過去の一点)より前にちょうど〜したところだった」は過去完了 had + just + p.p.。worked up the courage（過去）よりも前の出来事を had walked away で表す。work up the courage は「勇気を奮い起こす」。（※勇気を出すのに30分、彼女が去るのに3秒…南高男子の永遠のすれ違い）",
    img: "assets/illust/chapter01/010.svg"
  },
  {
    id: "011",
    tags: ["超頻出"],
    type: "ordering",
    point: "現在完了進行形（期間 for）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼は3時間ずっと全力で応援歌「空はコバルト」を歌い続けている。」",
    pieces: ["He", "has", "been", "singing", "\u201CThe Sky Is Cobalt\u201D", "at full volume", "for", "three hours"],
    answer: "He has been singing \u201CThe Sky Is Cobalt\u201D at full volume for three hours",
    ja: "彼は3時間ずっと全力で応援歌「空はコバルト」を歌い続けている。",
    en: "He has been singing \u201CThe Sky Is Cobalt\u201D at full volume for three hours.",
    explanation: "過去から今まで継続している動作は現在完了進行形 have been ~ing。期間は for three hours、at full volume は「全力で・大音量で」。（※校歌よりも応援歌「空はコバルト」を歌う機会が多い南高生）",
    img: "assets/illust/chapter01/011.svg"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "起点の since",
    question: "Our school's cheer squad has trained in this old gym （　） early April.",
    answer: ["since"],
    ja: "うちの応援団はこの古い体育館で4月初めからずっと練習している。",
    en: "Our school's cheer squad has trained in this old gym since early April.",
    explanation: "現在完了で「〜から（起点）」を表すのは since。early April のような時の一点には since を、three years のような期間には for を使う。（※伝統の応援練習）",
    img: "assets/illust/chapter01/012.svg"
  },
  {
    id: "013",
    tags: ["基本"],
    type: "fill",
    point: "状態動詞 know は現在形",
    question: "Now that I've tried hitting in the batting cage, I finally （　） why people call Ohtani a monster.",
    answer: ["know", "understand"],
    ja: "自分でバッティングセンターで打ってみて、なぜみんなが大谷を化け物と呼ぶのか、ようやくわかった。",
    en: "Now that I've tried hitting in the batting cage, I finally know why people call Ohtani a monster.",
    explanation: "know は状態を表す動詞なので、今の状態は現在形 know で表し、進行形にはしない。understand も同様に許容される。now that … は「今や〜なので」。",
    img: "assets/illust/chapter01/013.svg"
  },
  {
    id: "014",
    tags: ["超頻出"],
    type: "fill",
    point: "条件の副詞節は現在形",
    question: "Please stay inside until the storm （　） down.",
    answer: ["settles", "calms", "dies"],
    ja: "嵐がおさまるまで屋内にいてください。",
    en: "Please stay inside until the storm settles down.",
    explanation: "until が導く時の副詞節では、未来のことでも現在形。三人称単数 the storm に合わせて settles と -s を付ける点にも注意。",
    img: "assets/illust/chapter01/014.svg"
  },
  {
    id: "015",
    tags: ["発展"],
    type: "rewrite",
    point: "過去→現在完了進行形",
    question: "次の2文を、現在完了進行形を使って1文に書き換えなさい。\nIt started to rain two hours ago. It is still raining now.",
    answer: ["It has been raining for two hours.", "It has been raining for two hours"],
    ja: "雨は2時間降り続いている。",
    en: "It has been raining for two hours.",
    explanation: "「過去に始まり今も続く動作」は現在完了進行形。2時間前から今までなので for two hours。（It has rained for two hours も可だが、継続の躍動感を出すには進行形が自然。）",
    img: "assets/illust/chapter01/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "現在完了（経験）への書き換え",
    question: "次の文とほぼ同じ意味になるように、現在完了を使って書き換えなさい。\nThis is my first time getting a reply from a girl.",
    answer: [
      "I have never gotten a reply from a girl before.",
      "I have never got a reply from a girl before.",
      "I have never gotten a reply from a girl before",
      "I have never got a reply from a girl before"
    ],
    ja: "僕は今まで一度も女子から返信をもらったことがない。",
    en: "I have never gotten a reply from a girl before.",
    explanation: "「初めてもらう」＝「今までもらったことがない」。経験を否定する現在完了 have never + p.p. で表す。get の過去分詞は gotten（英）/ got（英）どちらも可。（※返信が来ただけで大事件になる南高男子）",
    img: "assets/illust/chapter01/016.svg"
  }
];

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
    question: "My sister （　） to the gym every morning before she starts work.",
    choices: ["is going", "goes", "has gone", "went"],
    answerIndex: 1,
    ja: "姉は毎朝、仕事を始める前にジムへ通っている。",
    en: "My sister goes to the gym every morning before she starts work.",
    explanation: "every morning のように習慣的・反復的な動作を表すときは現在形。今この瞬間の動作ではないので進行形 is going は不可。"
  },
  {
    id: "002",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "状態動詞は進行形にしない",
    question: "This old cabinet （　） to my grandmother, so please handle it with care.",
    choices: ["is belonging", "belongs", "is belonged", "has been belonging"],
    answerIndex: 1,
    ja: "この古いキャビネットは祖母のものなので、丁寧に扱ってください。",
    en: "This old cabinet belongs to my grandmother, so please handle it with care.",
    explanation: "belong（所属する）は状態を表す動詞で、原則として進行形にしない。同様に know, own, resemble, contain なども進行形を避ける。"
  },
  {
    id: "003",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "時・条件の副詞節は現在形で未来を表す",
    question: "I'll text you as soon as the meeting （　）.",
    choices: ["will end", "ends", "will have ended", "ended"],
    answerIndex: 1,
    ja: "会議が終わったらすぐにメッセージを送るね。",
    en: "I'll text you as soon as the meeting ends.",
    explanation: "as soon as / when / until / if などが導く時・条件の副詞節では、未来のことでも現在形で表す。主節の will と重ねて will end としない点が頻出。"
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
    explanation: "「未来のある時点までに〜してしまっているだろう」は未来完了 will have + p.p.。By the time … が未来完了の目印になりやすい。"
  },
  {
    id: "005",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "現在完了進行形（継続）",
    question: "We （　） for this band's new album since last autumn.",
    choices: ["wait", "are waiting", "have been waiting", "waited"],
    answerIndex: 2,
    ja: "私たちは去年の秋からずっとこのバンドの新しいアルバムを待っている。",
    en: "We have been waiting for this band's new album since last autumn.",
    explanation: "since last autumn（過去のある時点から今まで）と動作の継続を表すので現在完了進行形 have been ~ing。"
  },
  {
    id: "006",
    tags: ["超頻出"],
    type: "choice",
    point: "過去完了（大過去）",
    question: "When I finally reached the airport, my flight （　） already taken off.",
    choices: ["has", "had", "was", "would"],
    answerIndex: 1,
    ja: "私がようやく空港に着いたとき、飛行機はすでに離陸してしまっていた。",
    en: "When I finally reached the airport, my flight had already taken off.",
    explanation: "過去の一点（着いたとき）より前に完了した動作は過去完了 had + p.p.。過去の基準時より「さらに前」を表す大過去。"
  },
  {
    id: "007",
    tags: ["基本"],
    type: "choice",
    point: "その場で決めた意志は will",
    question: "A: Someone is knocking at the door. B: OK, I （　） see who it is.",
    choices: ["am going to", "will", "am", "have"],
    answerIndex: 1,
    ja: "A: 誰かがドアをノックしているよ。 B: わかった、誰か見てくるね。",
    en: "A: Someone is knocking at the door. B: OK, I will see who it is.",
    explanation: "発話の場でとっさに決めた意志は will。be going to は前もって決めていた予定に使うため、この場面には合わない。"
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
    explanation: "Since …（〜以来）と過去から現在までの継続を表すので、①は現在形 is living ではなく現在完了 has lived が正しい。"
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
    explanation: "By the time … は時の副詞節なので、中では未来のことでも現在形 rises を使う。主節が未来完了 will have finished でも副詞節は will rise としない。"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "過去完了＋just（〜したところだった）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「私が駅に着いたとき、電車はちょうど出発したところだった。」",
    pieces: ["The train", "had", "just", "left", "when", "I", "got", "to the station"],
    answer: "The train had just left when I got to the station",
    ja: "私が駅に着いたとき、電車はちょうど出発したところだった。",
    en: "The train had just left when I got to the station.",
    explanation: "「(過去の一点)より前にちょうど〜したところだった」は過去完了 had + just + p.p.。got（過去）よりも前の出来事を had left で表す。"
  },
  {
    id: "011",
    tags: ["超頻出"],
    type: "ordering",
    point: "現在完了進行形（期間 for）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼は3年間ずっとその会社で働いている。」",
    pieces: ["He", "has", "been", "working", "for", "that company", "for", "three years"],
    answer: "He has been working for that company for three years",
    ja: "彼は3年間ずっとその会社で働いている。",
    en: "He has been working for that company for three years.",
    explanation: "過去から今まで継続している動作は現在完了進行形 have been ~ing。期間は for three years、「〜で働く」は work for。"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "起点の since",
    question: "My uncle has run a small bakery （　） 2015.",
    answer: ["since"],
    ja: "おじは2015年から小さなパン屋を営んでいる。",
    en: "My uncle has run a small bakery since 2015.",
    explanation: "現在完了で「〜から（起点）」を表すのは since。2015 のような時の一点には since を、three years のような期間には for を使う。"
  },
  {
    id: "013",
    tags: ["基本"],
    type: "fill",
    point: "状態動詞 know は現在形",
    question: "I finally （　） what you meant by that comment.",
    answer: ["know", "understand"],
    ja: "君があのコメントで言いたかったことが、ようやくわかった（今わかっている）。",
    en: "I finally know what you meant by that comment.",
    explanation: "know は状態を表す動詞なので、今の状態は現在形 know で表し、進行形にはしない。understand も同様に許容される。"
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
    explanation: "until が導く時の副詞節では、未来のことでも現在形。三人称単数 the storm に合わせて settles と -s を付ける点にも注意。"
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
    explanation: "「過去に始まり今も続く動作」は現在完了進行形。2時間前から今までなので for two hours。（It has rained for two hours も可だが、継続の躍動感を出すには進行形が自然。）"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "現在完了（経験）への書き換え",
    question: "次の文とほぼ同じ意味になるように、現在完了を使って書き換えなさい。\nThis is my first time visiting Kyoto.",
    answer: [
      "I have never visited Kyoto before.",
      "I have never been to Kyoto before.",
      "I have never visited Kyoto before",
      "I have never been to Kyoto before"
    ],
    ja: "私は今まで一度も京都を訪れたことがない。",
    en: "I have never visited Kyoto before.",
    explanation: "「初めて訪れる」＝「今まで訪れたことがない」。経験を否定する現在完了 have never + p.p. で表す。visit の代わりに have been to も可。"
  }
];

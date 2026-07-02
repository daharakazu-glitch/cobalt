/*
 * 第2章「態」 学習データ（全オリジナル・大学受験レベル）
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
  id: "chapter02",
  no: 2,
  title: "態",
  subtitle: "Voice",
  description: "受動態の基本から、進行形・完了形・助動詞・群動詞の受動態、感情を表す受動態まで、大学受験レベルのオリジナル問題で総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "受動態の基本 be + 過去分詞",
    question: "The old gym （　） by hundreds of Nanko students every single morning for their legendary cheer practice.",
    choices: ["uses", "is using", "is used", "used"],
    answerIndex: 2,
    ja: "その古い体育館は、伝説の応援練習のために毎朝何百人もの南高生に使われている。",
    en: "The old gym is used by hundreds of Nanko students every single morning for their legendary cheer practice.",
    explanation: "受動態は〈be + 過去分詞〉で「〜される」を表す。動作主は by 〜。ここは現在の習慣なので is used。（※朝から声量バグの南高応援）"
  },
  {
    id: "002",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "動作主 by … の省略",
    question: "English （　） in more than fifty countries around the world.",
    choices: ["speaks", "is spoken", "is speaking", "spoke"],
    answerIndex: 1,
    ja: "英語は世界の50カ国以上で話されている。",
    en: "English is spoken in more than fifty countries around the world.",
    explanation: "受動態の動作主が「一般の人々」で不特定・自明なときは by … を省略するのがふつう。is spoken。"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "現在完了の受動態 have been + 過去分詞",
    question: "The trophy （　） in the same dusty case since the school was founded.",
    choices: ["has kept", "has been kept", "is keeping", "keeps"],
    answerIndex: 1,
    ja: "そのトロフィーは学校が創立されて以来、同じ埃っぽいケースに保管されている。",
    en: "The trophy has been kept in the same dusty case since the school was founded.",
    explanation: "現在完了の受動態は〈have/has been + 過去分詞〉。トロフィーは「保管される」側なので受動態、since … で継続を表す。"
  },
  {
    id: "004",
    tags: ["超頻出", "発展"],
    type: "choice",
    point: "進行形の受動態 be being + 過去分詞",
    question: "Right now the stage for the school festival （　） by a swarm of overexcited students.",
    choices: ["is building", "is being built", "has built", "builds"],
    answerIndex: 1,
    ja: "今まさに、文化祭のステージが興奮しきった生徒の群れによって作られているところだ。",
    en: "Right now the stage for the school festival is being built by a swarm of overexcited students.",
    explanation: "進行形の受動態は〈be being + 過去分詞〉で「今〜されているところだ」。is being built。（※南高祭前の異様な熱気）"
  },
  {
    id: "005",
    tags: ["超頻出"],
    type: "choice",
    point: "助動詞＋受動態 must be + 過去分詞",
    question: "All the borrowed costumes （　） by Monday, or the drama club will be in serious trouble.",
    choices: ["must return", "must be returned", "must returning", "must be return"],
    answerIndex: 1,
    ja: "借りた衣装はすべて月曜までに返却されなければならない。さもないと演劇部は大問題になる。",
    en: "All the borrowed costumes must be returned by Monday, or the drama club will be in serious trouble.",
    explanation: "助動詞に続く受動態は〈助動詞 + be + 過去分詞〉。costumes は「返却される」側なので must be returned。"
  },
  {
    id: "006",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "使役 make の受動態は to が復活",
    question: "The first-year students （　） to sing the school song over and over until their voices gave out.",
    choices: ["were made sing", "were made to sing", "made to sing", "were making sing"],
    answerIndex: 1,
    ja: "1年生は声がかれるまで、何度も何度も校歌を歌わされた。",
    en: "The first-year students were made to sing the school song over and over until their voices gave out.",
    explanation: "使役動詞 make は能動態では〈make O do〉と to を伴わないが、受動態になると to が復活して〈be made to do〉となる。（※伝統の校歌の洗礼）"
  },
  {
    id: "007",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "自動詞＋前置詞の受動態は前置詞を残す",
    question: "He finally worked up the courage to talk to a girl, but he was just （　） and left standing there alone.",
    choices: ["laughed", "laughed at", "laughing at", "laughed to"],
    answerIndex: 1,
    ja: "彼はやっとの思いで女子に話しかける勇気を出したが、ただ笑われて、一人ぽつんとその場に取り残された。",
    en: "He finally worked up the courage to talk to a girl, but he was just laughed at and left standing there alone.",
    explanation: "laugh at 〜（〜を笑う）のような〈自動詞＋前置詞〉を受動態にするときは、前置詞 at を落とさず残して be laughed at とする。（※渾身の一歩も実らず…南高男子の悲哀）"
  },
  {
    id: "008",
    tags: ["発展"],
    type: "error",
    point: "群動詞の受動態で前置詞を落とさない",
    question: "Because he overslept again, ①he was laughed ②by his classmates ③for showing up ④in yesterday's gym clothes.",
    choices: ["①he was laughed", "②by his classmates", "③for showing up", "④in yesterday's gym clothes"],
    answerIndex: 1,
    ja: "また寝坊したので、彼は昨日の体操服のまま現れたことをクラスメートに笑われた。",
    en: "Because he overslept again, he was laughed at by his classmates for showing up in yesterday's gym clothes.",
    explanation: "laugh at の受動態は be laughed at。動作主を表す by の前に前置詞 at を残し、was laughed at by … とする。②は by の前に at が抜けている。"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "未来の受動態 will be + 過去分詞",
    question: "The exam results ①will announce ②on the bulletin board ③in front of the staff room ④next Friday.",
    choices: ["①will announce", "②on the bulletin board", "③in front of the staff room", "④next Friday"],
    answerIndex: 0,
    ja: "試験の結果は来週の金曜日、職員室前の掲示板に発表される。",
    en: "The exam results will be announced on the bulletin board in front of the staff room next Friday.",
    explanation: "主語 results は「発表される」側なので受動態。未来の受動態は〈will be + 過去分詞〉。①は will announce ではなく will be announced が正しい。"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "be known to / be known for",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「南高の応援団は、その圧倒的な声量で県中に知られている。」",
    pieces: ["Nanko's cheer squad", "is", "known", "to", "the whole prefecture", "for", "its overwhelming volume"],
    answer: "Nanko's cheer squad is known to the whole prefecture for its overwhelming volume",
    ja: "南高の応援団は、その圧倒的な声量で県中に知られている。",
    en: "Nanko's cheer squad is known to the whole prefecture for its overwhelming volume.",
    explanation: "be known to 〜（〜に知られている）と be known for 〜（〜で知られている・〜ゆえに有名）。ここでは県中の人々に（to）、圧倒的な声量ゆえに（for）知られている。"
  },
  {
    id: "011",
    tags: ["超頻出"],
    type: "ordering",
    point: "現在完了の受動態（継続）",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「この校歌は何世代もの生徒たちによって歌い継がれてきた。」",
    pieces: ["This school song", "has", "been", "sung", "by", "generations of students"],
    answer: "This school song has been sung by generations of students",
    ja: "この校歌は何世代もの生徒たちによって歌い継がれてきた。",
    en: "This school song has been sung by generations of students.",
    explanation: "現在完了の受動態は〈have/has been + 過去分詞〉。校歌は「歌われる」側なので has been sung。sing–sang–sung の変化に注意。"
  },
  {
    id: "012",
    tags: ["基本", "超頻出"],
    type: "fill",
    point: "感情を表す受動態の前置詞（be surprised at）",
    question: "Everyone was surprised （　） how loud a single Nanko student could be.",
    answer: ["at", "by"],
    ja: "たった一人の南高生がこれほど大声を出せることに、誰もが驚いた。",
    en: "Everyone was surprised at how loud a single Nanko student could be.",
    explanation: "感情を表す受動態は by 以外の前置詞をとることが多い。be surprised at 〜（〜に驚く）。by も許容される。"
  },
  {
    id: "013",
    tags: ["基本"],
    type: "fill",
    point: "be covered with 〜（状態の受動態）",
    question: "By the end of the sports festival, every jersey was covered （　） mud and glory.",
    answer: ["with", "in"],
    ja: "体育祭が終わるころには、どのユニフォームも泥と栄光にまみれていた。",
    en: "By the end of the sports festival, every jersey was covered with mud and glory.",
    explanation: "be covered with 〜（〜で覆われている）。状態を表す受動態も by 以外の前置詞をとる。with の代わりに in も可。"
  },
  {
    id: "014",
    tags: ["発展"],
    type: "fill",
    point: "get + 過去分詞（口語的な受動態）",
    question: "He tried to look cool in front of the girls' school, but he tripped and （　） completely soaked by the sudden rain.",
    answer: ["got", "was"],
    ja: "彼は女子校の前でカッコつけようとしたが、つまずいた上に突然の雨でずぶ濡れになった。",
    en: "He tried to look cool in front of the girls' school, but he tripped and got completely soaked by the sudden rain.",
    explanation: "〈get + 過去分詞〉は「〜される（状態になる）」を表す口語的な受動態。get soaked（ずぶ濡れになる）。was でも可。（※決めようとするほど空回る南高男子）"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "能動態 → 受動態",
    question: "次の能動態の文を受動態に書き換えなさい。\nThe whole school respects the legendary cheer captain.",
    answer: [
      "The legendary cheer captain is respected by the whole school.",
      "The legendary cheer captain is respected by the whole school"
    ],
    ja: "その伝説の応援団長は全校生徒に尊敬されている。",
    en: "The legendary cheer captain is respected by the whole school.",
    explanation: "目的語 the legendary cheer captain を主語に、動詞を〈be + 過去分詞〉に、元の主語を by 〜 に置く。現在形なので is respected。"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "It is said that … → S is said to …",
    question: "次の文を、He を主語にしてほぼ同じ意味になるように書き換えなさい。\nIt is said that he practices his confession speech every single night.",
    answer: [
      "He is said to practice his confession speech every single night.",
      "He is said to practice his confession speech every single night"
    ],
    ja: "彼は毎晩、告白のセリフを練習していると言われている。",
    en: "He is said to practice his confession speech every single night.",
    explanation: "〈It is said that S V …〉は〈S is said to do …〉に書き換えられる。that節が主節と同じ時制なら to do。（※練習は完璧、本番は永遠の未遂…南高男子）"
  }
];

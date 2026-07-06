/*
 * 第14章「形容詞・副詞」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter14",
  no: 14,
  title: "形容詞・副詞",
  subtitle: "Adjectives & Adverbs",
  description: "hard / hardly、late / lately、few / little、enough の位置など、形が似ていて意味が違う要注意ペアを総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "almost all the ~",
    question: "（　） all the seats were taken ten minutes before the show.",
    choices: ["Almost", "Most", "Almost of", "The most"],
    answerIndex: 0,
    ja: "開演10分前には、ほとんどすべての席が埋まっていた。",
    en: "Almost all the seats were taken ten minutes before the show.",
    explanation: "almost は副詞なので all を修飾して almost all the ~ の形になる。Most を使うなら Most of the seats / Most seats。Almost of は存在しない形。",
    img: "assets/illust/chapter14/001.svg"
  },
  {
    id: "002",
    tags: ["基本"],
    type: "choice",
    point: "hard（懸命に）と hardly（ほとんど〜ない）",
    question: "She practiced （　） for the violin contest until her fingertips hurt.",
    choices: ["hardly", "hard", "hardly ever", "as hard"],
    answerIndex: 1,
    ja: "彼女は指先が痛くなるまで、バイオリンコンクールに向けて懸命に練習した。",
    en: "She practiced hard for the violin contest until her fingertips hurt.",
    explanation: "hard は「懸命に」という副詞、hardly は「ほとんど〜ない」という全く別の副詞。practiced hardly とすると「ほとんど練習しなかった」ことになってしまう。",
    img: "assets/illust/chapter14/002.svg"
  },
  {
    id: "003",
    tags: ["超頻出"],
    type: "choice",
    point: "lately「最近」",
    question: "Have you heard from the exchange student （　）?",
    choices: ["late", "lately", "later", "latest"],
    answerIndex: 1,
    ja: "最近、あの交換留学生から連絡はあった？",
    en: "Have you heard from the exchange student lately?",
    explanation: "late は「遅く」、lately は「最近」（= recently）で意味が別。lately は現在完了と相性がよい。hear from ~ は「〜から連絡がある」。",
    img: "assets/illust/chapter14/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "little「ほとんど〜ない」（不可算）",
    question: "There was （　） hope of beating Class 3 in the tug-of-war, but we grabbed the rope anyway.",
    choices: ["little", "a little", "few", "a few"],
    answerIndex: 0,
    ja: "綱引きで3組に勝てる望みはほとんどなかったが、それでも僕らはロープを握った。",
    en: "There was little hope of beating Class 3 in the tug-of-war, but we grabbed the rope anyway.",
    explanation: "hope は不可算なので little / a little。a のない little は「ほとんどない」という否定的な意味で、but ... anyway と呼応する。（※そして両クラスとも本気を出しすぎ、今年も担架が出動した）",
    img: "assets/illust/chapter14/004.svg"
  },
  {
    id: "005",
    tags: ["超頻出"],
    type: "choice",
    point: "形容詞 + enough + to do",
    question: "He is （　） to ask her to dance at the festival this year.",
    choices: ["enough brave", "brave enough", "enough bravely", "bravely enough"],
    answerIndex: 1,
    ja: "今年の南校祭では、彼女をダンスに誘えるくらいの勇気が彼にはある。",
    en: "He is brave enough to ask her to dance at the festival this year.",
    explanation: "enough は形容詞・副詞を修飾するとき必ず後ろに置く（brave enough）。名詞なら前でも可（enough money）。ask + 人 + to do は「人に〜するよう頼む・誘う」。",
    img: "assets/illust/chapter14/005.svg"
  },
  {
    id: "006",
    tags: ["発展"],
    type: "choice",
    point: "asleep は叙述用法のみ",
    question: "By fourth period, half the class was fast （　）, while one student took notes standing up.",
    choices: ["sleep", "sleepy", "asleep", "sleeping"],
    answerIndex: 2,
    ja: "4時間目までにクラスの半分はぐっすり眠っていたが、一人の生徒は立ったままノートを取っていた。",
    en: "By fourth period, half the class was fast asleep, while one student took notes standing up.",
    explanation: "asleep / awake / alive など a- で始まる形容詞は補語専用（叙述用法のみ）。fast asleep は「ぐっすり眠って」。（※眠くなったら立つ。単純にして最強の南高式眠気対策）",
    img: "assets/illust/chapter14/006.svg"
  },
  {
    id: "007",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "highly「大いに・高く（評価）」",
    question: "Our coach thinks （　） of your dedication to morning practice.",
    choices: ["high", "highly", "height", "higher"],
    answerIndex: 1,
    ja: "コーチは、君の朝練へのひたむきさを高く評価している。",
    en: "Our coach thinks highly of your dedication to morning practice.",
    explanation: "think highly of ~「〜を高く評価する」。high は「（物理的に）高く」、highly は「大いに・高度に」と抽象的な意味になる。speak highly of ~ も同じ型。",
    img: "assets/illust/chapter14/007.svg"
  },
  {
    id: "008",
    tags: ["基本", "超頻出"],
    type: "error",
    point: "動詞を修飾するのは副詞 well",
    question: "She sings ①very ②good ③at ④karaoke.",
    choices: ["①very", "②good", "③at", "④karaoke"],
    answerIndex: 1,
    ja: "彼女はカラオケでとても上手に歌う。",
    en: "She sings very well at karaoke.",
    explanation: "動詞 sings を修飾するのは形容詞 good ではなく副詞 well。「歌がうまい」は She sings well / She is good at singing のどちらかで表す。",
    img: "assets/illust/chapter14/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "enough は形容詞の後ろ",
    question: "My brother is ①enough tall ②to reach ③the top shelf ④of the bookcase.",
    choices: ["①enough tall", "②to reach", "③the top shelf", "④of the bookcase"],
    answerIndex: 0,
    ja: "兄は本棚のいちばん上の棚に届くくらい背が高い。",
    en: "My brother is tall enough to reach the top shelf of the bookcase.",
    explanation: "enough が形容詞・副詞を修飾するときは必ず後置（tall enough）。enough tall という語順は不可。語順を入れ替えるだけの定番の誤り探し。",
    img: "assets/illust/chapter14/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "be crowded with ~ と always の位置",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「食堂は正午にはいつも腹ぺこの生徒でいっぱいだ。」",
    pieces: ["The cafeteria", "is", "always", "crowded", "with", "hungry students", "at noon"],
    answer: "The cafeteria is always crowded with hungry students at noon",
    ja: "食堂は正午にはいつも腹ぺこの生徒でいっぱいだ。",
    en: "The cafeteria is always crowded with hungry students at noon.",
    explanation: "be crowded with ~「〜で混雑している」。頻度の副詞 always は be動詞の直後に置く。（※コスパ食堂の正午は椅子取りゲームと化す）",
    img: "assets/illust/chapter14/010.svg"
  },
  {
    id: "011",
    tags: ["超頻出"],
    type: "ordering",
    point: "kind enough to do「親切にも〜する」",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「彼は親切にも僕のドラムを音楽室まで運んでくれた。」",
    pieces: ["He", "was", "kind", "enough", "to carry", "my drum", "to the music room"],
    answer: "He was kind enough to carry my drum to the music room",
    ja: "彼は親切にも僕のドラムを音楽室まで運んでくれた。",
    en: "He was kind enough to carry my drum to the music room.",
    explanation: "be kind enough to do = be so kind as to do「親切にも〜する」。enough は kind の後ろに置く。この2つの言い換えはセットで頻出。",
    img: "assets/illust/chapter14/011.svg"
  },
  {
    id: "012",
    tags: ["基本"],
    type: "fill",
    point: "lately / recently「最近」",
    question: "The wrestling club's morning shouts have been getting even louder （　）.",
    answer: ["lately", "recently"],
    ja: "最近、レスリング部の朝の掛け声がさらに大きくなっている。",
    en: "The wrestling club's morning shouts have been getting even louder lately.",
    explanation: "「最近」は lately / recently。現在完了（進行）形との相性がよい。（※大会が近い証拠。校舎の窓がわずかに震える）",
    img: "assets/illust/chapter14/012.svg"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "boring（退屈させる側）",
    question: "The movie was so （　） that even the director fell asleep at the premiere.",
    answer: ["boring", "dull"],
    ja: "その映画はあまりに退屈で、試写会では監督本人まで眠ってしまった。",
    en: "The movie was so boring that even the director fell asleep at the premiere.",
    explanation: "退屈「させる」側の物事は boring、退屈「させられる」側の人は bored。premiere は「試写会・初演」。（※実話だったら映画史に残る伝説である）",
    img: "assets/illust/chapter14/013.svg"
  },
  {
    id: "014",
    tags: ["基本"],
    type: "fill",
    point: "seventeen-year-old（ハイフン形容詞）",
    question: "The contest winner was a seventeen-（　）-old beatboxer from Yamagata.",
    answer: ["year"],
    ja: "コンテストの優勝者は、山形出身の17歳のビートボクサーだった。",
    en: "The contest winner was a seventeen-year-old beatboxer from Yamagata.",
    explanation: "数詞をハイフンでつないで形容詞にするときは単数形を使う（a seventeen-year-old boy）。He is seventeen years old. と述語で使うときは複数形 years になる点と対比で覚える。",
    img: "assets/illust/chapter14/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "形容詞 → 副詞への書き換え",
    question: "次の文を、動詞と副詞を使ってほぼ同じ意味に書き換えなさい。\nShe is a careful driver.",
    answer: [
      "She drives carefully.",
      "She drives carefully",
      "She drives very carefully.",
      "She drives very carefully"
    ],
    ja: "彼女は運転が慎重だ。",
    en: "She drives carefully.",
    explanation: "「形容詞 + 名詞」は「動詞 + 副詞」で言い換えられる（a careful driver → drives carefully）。a good swimmer → swims well なども同じパターンで、英作文の武器になる。",
    img: "assets/illust/chapter14/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "almost no ~ → few ~",
    question: "次の文を、few を使ってほぼ同じ意味に書き換えなさい。\nThere were almost no empty seats left in the hall.",
    answer: [
      "There were few empty seats left in the hall.",
      "There were few empty seats left in the hall"
    ],
    ja: "ホールには空席がほとんど残っていなかった。",
    en: "There were few empty seats left in the hall.",
    explanation: "almost no + 可算名詞 ≒ few + 可算名詞「ほとんど〜ない」。不可算名詞なら little を使う（almost no time ≒ little time）。left は「残っている」を表す過去分詞。",
    img: "assets/illust/chapter14/016.svg"
  }
];

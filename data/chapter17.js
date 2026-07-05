/*
 * 第17章「特殊構文」 学習データ（全オリジナル・大学受験レベル）
 * 設計: 英語教材デザイナー 詠(Ei) ／ イラスト: UX/UIデザイナー 彩(Aya)
 * ※ 例文・和訳・解説はすべて本チームによる完全オリジナルです。
 * 型は data/chapter01.js ヘッダコメント参照（img は例文イラスト）。
 */
window.CHAPTER_META = {
  id: "chapter17",
  no: 17,
  title: "特殊構文",
  subtitle: "Special Structures",
  description: "It is ~ that の強調構文、否定語による倒置、同格の that、if any などの省略表現まで、読解で差がつく構文を総点検します。"
};

window.CHAPTER_DATA = [
  {
    id: "001",
    tags: ["超頻出"],
    type: "choice",
    point: "強調構文 It is ~ that ...",
    question: "It was at the school festival （　） he first talked to her.",
    choices: ["when", "that", "which", "what"],
    answerIndex: 1,
    ja: "彼が初めて彼女と話したのは、南校祭でのことだった。",
    en: "It was at the school festival that he first talked to her.",
    explanation: "It is ~ that ... の強調構文。強調される部分が場所の副詞句でも that を使うのが原則。that 以下が完全な文になっているかで強調構文だと見抜く。",
    img: "assets/illust/chapter17/001.svg"
  },
  {
    id: "002",
    tags: ["超頻出"],
    type: "choice",
    point: "否定語文頭の倒置",
    question: "（　） have I heard such a beautiful chorus in this old gym.",
    choices: ["Never", "Ever", "Once", "Always"],
    answerIndex: 0,
    ja: "この古い体育館で、あれほど美しい合唱を聴いたことは一度もない。",
    en: "Never have I heard such a beautiful chorus in this old gym.",
    explanation: "Never / Little / Hardly などの否定語が文頭に出ると、疑問文と同じ倒置（have I heard）が起こる。倒置が起きているのを見て文頭に否定語を選ぶ逆算問題。",
    img: "assets/illust/chapter17/002.svg"
  },
  {
    id: "003",
    tags: ["基本", "超頻出"],
    type: "choice",
    point: "Neither + 助動詞 + S「〜もまた…ない」",
    question: "A: I can't do a backflip. B: （　） can I, so let's practice together in secret.",
    choices: ["So", "Neither", "Either", "None"],
    answerIndex: 1,
    ja: "A: バク転できないんだよね。 B: 僕もできないよ。だからこっそり一緒に練習しよう。",
    en: "A: I can't do a backflip. B: Neither can I, so let's practice together in secret.",
    explanation: "否定文を受けて「〜もまた…ない」は Neither + 助動詞 + S（Neither can I）。肯定文を受けるなら So do I / So can I。（※一芸披露に備えた秘密特訓はこうして始まる）",
    img: "assets/illust/chapter17/003.svg"
  },
  {
    id: "004",
    tags: ["超頻出"],
    type: "choice",
    point: "同格の that",
    question: "The news （　） our band had won first prize spread through school in minutes.",
    choices: ["which", "what", "that", "whose"],
    answerIndex: 2,
    ja: "うちのバンドが最優秀賞を取ったという知らせは、数分で学校中に広まった。",
    en: "The news that our band had won first prize spread through school in minutes.",
    explanation: "news / fact / idea などの後ろで内容を説明する that は同格の接続詞（〜という…）。後ろが完全な文なら同格の that、名詞が欠けていれば関係代名詞 which と見分ける。",
    img: "assets/illust/chapter17/004.svg"
  },
  {
    id: "005",
    tags: ["発展"],
    type: "choice",
    point: "few, if any,「あるとしてもごくわずか」",
    question: "There are few, （　）, students who can stay calm during the final class relay.",
    choices: ["if any", "if ever", "if not", "if only"],
    answerIndex: 0,
    ja: "最終種目のクラス対抗リレーの間、冷静でいられる生徒は、いるとしてもごくわずかだ。",
    en: "There are few, if any, students who can stay calm during the final class relay.",
    explanation: "few, if any,「（数が）あるとしてもごくわずか」/ seldom, if ever,「（頻度が）めったに〜ない」。few には any、seldom には ever。（※冷静さを失った結果が、毎年の救急車である）",
    img: "assets/illust/chapter17/005.svg"
  },
  {
    id: "006",
    tags: ["発展", "超頻出"],
    type: "choice",
    point: "Not until ~ の倒置",
    question: "Not until the graduation ceremony （　） how much he loved this school.",
    choices: ["he realized", "did he realize", "he did realize", "realized he"],
    answerIndex: 1,
    ja: "卒業式になって初めて、彼はこの学校をどれほど愛していたかに気づいた。",
    en: "Not until the graduation ceremony did he realize how much he loved this school.",
    explanation: "Not until ~ が文頭に出ると、主節は did he realize と倒置になる。It was not until ~ that ... の強調構文でも同じ内容を表せる（その場合は倒置しない）。",
    img: "assets/illust/chapter17/006.svg"
  },
  {
    id: "007",
    tags: ["超頻出"],
    type: "choice",
    point: "what we call「いわゆる」",
    question: "His one-man comedy show is （　） we call a legend at our school.",
    choices: ["what", "that", "which", "as"],
    answerIndex: 0,
    ja: "彼のワンマンお笑いライブは、我が校でいわゆる伝説というやつだ。",
    en: "His one-man comedy show is what we call a legend at our school.",
    explanation: "what we call / what is called「いわゆる」。関係代名詞 what を使った定型表現で、後ろに名詞が続く。so-called と同じ意味。",
    img: "assets/illust/chapter17/007.svg"
  },
  {
    id: "008",
    tags: ["発展"],
    type: "error",
    point: "Little の後は倒置",
    question: "Little ①he knew ②that the whole class ③was planning ④a surprise party.",
    choices: ["①he knew", "②that the whole class", "③was planning", "④a surprise party"],
    answerIndex: 0,
    ja: "クラス全員がサプライズパーティーを計画しているとは、彼は知る由もなかった。",
    en: "Little did he know that the whole class was planning a surprise party.",
    explanation: "否定の副詞 Little が文頭に出ているので、did he know と倒置しなければならない。Little did he know ~「〜とは知る由もなかった」は物語文の定番表現。",
    img: "assets/illust/chapter17/008.svg"
  },
  {
    id: "009",
    tags: ["超頻出"],
    type: "error",
    point: "the habit of ~ing（同格の of）",
    question: "She has the habit ①to hum ②the cheer song ③while ④solving math problems.",
    choices: ["①to hum", "②the cheer song", "③while", "④solving math problems"],
    answerIndex: 0,
    ja: "彼女には、数学の問題を解きながら応援歌を口ずさむ癖がある。",
    en: "She has the habit of humming the cheer song while solving math problems.",
    explanation: "habit の内容は of ~ing で示す（the habit of humming）。to 不定詞は続けられない。同格の of を取る名詞（habit / idea / hope など）と、同格の that を取る名詞の区別も意識する。",
    img: "assets/illust/chapter17/009.svg"
  },
  {
    id: "010",
    tags: ["超頻出"],
    type: "ordering",
    point: "強調構文の組み立て",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「他校の生徒たちの心を最も動かしたのは、応援歌だった。」",
    pieces: ["It", "was", "the cheer song", "that", "moved", "the visiting students", "most"],
    answer: "It was the cheer song that moved the visiting students most",
    ja: "他校の生徒たちの心を最も動かしたのは、応援歌だった。",
    en: "It was the cheer song that moved the visiting students most.",
    explanation: "It was + 強調したい語句 + that + 残りの文。主語（the cheer song）を強調する形。（※「空はコバルト」、他校の生徒の心まで持っていく）",
    img: "assets/illust/chapter17/010.svg"
  },
  {
    id: "011",
    tags: ["発展"],
    type: "ordering",
    point: "場所の副詞句 + V + S の倒置",
    question: "次の日本語に合うように語句を並べ替えなさい。\n「ステージの上には、緊張した1年生が立っていた。」",
    pieces: ["On the stage", "stood", "a nervous", "first-year student"],
    answer: "On the stage stood a nervous first-year student",
    ja: "ステージの上には、緊張した1年生が立っていた。",
    en: "On the stage stood a nervous first-year student.",
    explanation: "場所の副詞句が文頭に出ると、V + S の倒置が起こる（stood a student）。新情報の主語を文末に回す語順で、物語や描写文で多用される。（※壮行式で指名された1年生の伝説が始まる瞬間）",
    img: "assets/illust/chapter17/011.svg"
  },
  {
    id: "012",
    tags: ["発展"],
    type: "fill",
    point: "seldom, if ever,",
    question: "He seldom, if （　）, breaks a promise to his bandmates.",
    answer: ["ever"],
    ja: "彼がバンド仲間との約束を破ることは、あるとしてもめったにない。",
    en: "He seldom, if ever, breaks a promise to his bandmates.",
    explanation: "seldom, if ever,「あるとしてもめったに〜ない」。頻度の seldom には ever、数量の few には any を組み合わせる。挿入されたこの2語を読み飛ばせるようになると長文が速くなる。",
    img: "assets/illust/chapter17/012.svg"
  },
  {
    id: "013",
    tags: ["超頻出"],
    type: "fill",
    point: "There is no doubt that ~",
    question: "There is no doubt （　） she will win the speech contest.",
    answer: ["that"],
    ja: "彼女がスピーチコンテストで優勝することは間違いない。",
    en: "There is no doubt that she will win the speech contest.",
    explanation: "doubt の内容を示す同格の that。There is no doubt that ~「〜であることに疑いはない」は英作文でも便利な定型。no doubt だけでも副詞的に「きっと」の意味で使える。",
    img: "assets/illust/chapter17/013.svg"
  },
  {
    id: "014",
    tags: ["基本"],
    type: "fill",
    point: "強調の do",
    question: "I really （　） believe your act will get cheers this time.",
    answer: ["do"],
    ja: "今度こそ君の一芸は喝采をもらえるって、本当に信じてるよ。",
    en: "I really do believe your act will get cheers this time.",
    explanation: "動詞の前の do / does / did は「本当に・確かに」という強調。I do believe = 心から信じている。（※前回ブーイングだった友への、最高のエール）",
    img: "assets/illust/chapter17/014.svg"
  },
  {
    id: "015",
    tags: ["超頻出"],
    type: "rewrite",
    point: "強調構文への書き換え",
    question: "次の文の in the ninth inning を強調する文に書き換えなさい。\nOhtani hit the winning home run in the ninth inning.",
    answer: [
      "It was in the ninth inning that Ohtani hit the winning home run.",
      "It was in the ninth inning that Ohtani hit the winning home run"
    ],
    ja: "大谷が決勝ホームランを打ったのは、9回のことだった。",
    en: "It was in the ninth inning that Ohtani hit the winning home run.",
    explanation: "It was + 強調部分 + that + 残り。前置詞句 in the ninth inning ごと前に出すのがポイント（in を置き忘れない）。時の副詞句の強調でも when ではなく that が原則。",
    img: "assets/illust/chapter17/015.svg"
  },
  {
    id: "016",
    tags: ["発展"],
    type: "rewrite",
    point: "Never を文頭に出す倒置",
    question: "次の文を、Never で始まる倒置の文に書き換えなさい。\nI have never been so nervous on stage.",
    answer: [
      "Never have I been so nervous on stage.",
      "Never have I been so nervous on stage"
    ],
    ja: "ステージの上であれほど緊張したことは、これまで一度もない。",
    en: "Never have I been so nervous on stage.",
    explanation: "Never を文頭に出したら have I been と倒置する。元の文の have been から have だけを主語の前に移動させるイメージ。書き換え・整序の両方で出題される。",
    img: "assets/illust/chapter17/016.svg"
  }
];

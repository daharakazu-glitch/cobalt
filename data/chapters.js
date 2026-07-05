/*
 * 章一覧（ダッシュボード用）
 * 設計: 詠(Ei) / 実装: 匠(Takumi)
 * total: その章の総問題数（未実装章は 0）
 * href : 章ページ（未実装章は null → ロック表示）
 * 試作フェーズでは第1章「時制」のみ稼働。他章は本チームで順次オリジナル作成予定の枠。
 */
window.CHAPTERS = [
  { id: "chapter01", no: 1, title: "時制", sub: "Tenses", total: 16, href: "chapter01.html" },
  { id: "chapter02", no: 2, title: "態", sub: "Voice", total: 16, href: "chapter02.html" },
  { id: "chapter03", no: 3, title: "助動詞", sub: "Modals", total: 16, href: "chapter03.html" },
  { id: "chapter04", no: 4, title: "仮定法", sub: "Subjunctive", total: 16, href: "chapter04.html" },
  { id: "chapter05", no: 5, title: "不定詞", sub: "Infinitives", total: 16, href: "chapter05.html" },
  { id: "chapter06", no: 6, title: "動名詞", sub: "Gerunds", total: 16, href: "chapter06.html" },
  { id: "chapter07", no: 7, title: "分詞", sub: "Participles", total: 16, href: "chapter07.html" },
  { id: "chapter08", no: 8, title: "関係詞", sub: "Relatives", total: 16, href: "chapter08.html" },
  { id: "chapter09", no: 9, title: "比較", sub: "Comparison", total: 16, href: "chapter09.html" },
  { id: "chapter10", no: 10, title: "接続詞", sub: "Conjunctions", total: 16, href: "chapter10.html" },
  { id: "chapter11", no: 11, title: "疑問文・否定", sub: "Questions & Negation", total: 16, href: "chapter11.html" },
  { id: "chapter12", no: 12, title: "名詞・冠詞", sub: "Nouns & Articles", total: 16, href: "chapter12.html" },
  { id: "chapter13", no: 13, title: "代名詞", sub: "Pronouns", total: 16, href: "chapter13.html" },
  { id: "chapter14", no: 14, title: "形容詞・副詞", sub: "Adjectives & Adverbs", total: 16, href: "chapter14.html" },
  { id: "chapter15", no: 15, title: "前置詞", sub: "Prepositions", total: 16, href: "chapter15.html" },
  { id: "chapter16", no: 16, title: "動詞の語法", sub: "Verb Usage", total: 16, href: "chapter16.html" },
  { id: "chapter17", no: 17, title: "特殊構文", sub: "Special Structures", total: 16, href: "chapter17.html" }
];

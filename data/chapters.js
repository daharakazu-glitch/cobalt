/*
 * 章一覧（ダッシュボード用）
 * 設計: 詠(Ei) / 実装: 匠(Takumi)
 * total: その章の総問題数（未実装章は 0）
 * href : 章ページ（未実装章は null → ロック表示）
 * 試作フェーズでは第1章「時制」のみ稼働。他章は本チームで順次オリジナル作成予定の枠。
 */
window.CHAPTERS = [
  { id: "chapter01", no: 1, title: "時制", sub: "Tenses", total: 16, href: "chapter01.html" },
  { id: "chapter02", no: 2, title: "態", sub: "Voice", total: 0, href: null },
  { id: "chapter03", no: 3, title: "助動詞", sub: "Modals", total: 0, href: null },
  { id: "chapter04", no: 4, title: "仮定法", sub: "Subjunctive", total: 0, href: null },
  { id: "chapter05", no: 5, title: "不定詞", sub: "Infinitives", total: 0, href: null },
  { id: "chapter06", no: 6, title: "動名詞", sub: "Gerunds", total: 0, href: null },
  { id: "chapter07", no: 7, title: "分詞", sub: "Participles", total: 0, href: null },
  { id: "chapter08", no: 8, title: "関係詞", sub: "Relatives", total: 0, href: null },
  { id: "chapter09", no: 9, title: "比較", sub: "Comparison", total: 0, href: null },
  { id: "chapter10", no: 10, title: "接続詞", sub: "Conjunctions", total: 0, href: null }
];

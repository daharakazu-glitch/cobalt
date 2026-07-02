/*
 * ダッシュボード描画
 * 実装: 匠(Takumi)
 */
(function () {
  var grid = document.getElementById("chapterGrid");
  var totalMastered = 0;
  var totalProblems = 0;

  window.CHAPTERS.forEach(function (ch) {
    var mastered = Progress.masteredCount(ch.id);
    if (ch.total > 0) { totalMastered += mastered; totalProblems += ch.total; }

    var card = document.createElement(ch.href ? "a" : "div");
    card.className = "chapter-card" + (ch.href ? "" : " locked");
    if (ch.href) card.href = ch.href;

    var complete = ch.total > 0 && mastered >= ch.total;
    var badge = ch.total === 0
      ? "準備中"
      : (complete ? "\uD83D\uDC51 コンプリート" : "\u2B50 " + mastered + " / " + ch.total);
    var pct = ch.total > 0 ? Math.round((mastered / ch.total) * 100) : 0;

    card.innerHTML =
      '<div class="chapter-no">CHAPTER ' + ch.no + '</div>' +
      '<div class="chapter-name">' + ch.title + '</div>' +
      '<div class="chapter-sub">' + ch.sub + '</div>' +
      '<div class="chapter-badge' + (complete ? ' complete' : '') + '">' + badge + '</div>' +
      '<div class="mini-bar"><i style="width:' + pct + '%"></i></div>';

    grid.appendChild(card);
  });

  // 全体進捗
  var pct = totalProblems > 0 ? Math.round((totalMastered / totalProblems) * 100) : 0;
  document.getElementById("statText").textContent = "マスターした問題数";
  document.getElementById("statNum").textContent = totalMastered + " / " + totalProblems;
  document.getElementById("barFill").style.width = pct + "%";
})();

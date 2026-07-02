/*
 * 進捗ストレージ（localStorage）
 * 実装: フロントエンドエンジニア 匠(Takumi)
 * 元アプリのFirebaseの代わりに、ログイン不要のブラウザ内保存で進捗を管理する。
 *
 * 保存キー: grammar_app_progress
 * 構造:
 *   {
 *     "chapter01": { mastered: { "001": true, ... }, solved: { "001": true|false, ... } }
 *   }
 */
window.Progress = (function () {
  var KEY = "grammar_app_progress";

  function readAll() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function writeAll(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      /* 保存不可（プライベートモード等）でもアプリは動作継続 */
    }
  }

  function getChapter(chapterId) {
    var all = readAll();
    var c = all[chapterId] || {};
    return { mastered: c.mastered || {}, solved: c.solved || {} };
  }

  function setMastered(chapterId, problemId, value) {
    var all = readAll();
    if (!all[chapterId]) all[chapterId] = { mastered: {}, solved: {} };
    if (!all[chapterId].mastered) all[chapterId].mastered = {};
    if (value) all[chapterId].mastered[problemId] = true;
    else delete all[chapterId].mastered[problemId];
    writeAll(all);
  }

  function setSolved(chapterId, problemId, correct) {
    var all = readAll();
    if (!all[chapterId]) all[chapterId] = { mastered: {}, solved: {} };
    if (!all[chapterId].solved) all[chapterId].solved = {};
    all[chapterId].solved[problemId] = !!correct;
    writeAll(all);
  }

  function masteredCount(chapterId) {
    var c = getChapter(chapterId);
    return Object.keys(c.mastered).filter(function (k) { return c.mastered[k]; }).length;
  }

  return {
    getChapter: getChapter,
    setMastered: setMastered,
    setSolved: setSolved,
    masteredCount: masteredCount
  };
})();

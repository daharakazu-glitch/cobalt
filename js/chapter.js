/*
 * 章ページ描画エンジン（5形式：choice / error / ordering / fill / rewrite）
 * 実装: フロントエンドエンジニア 匠(Takumi)
 */
(function () {
  var meta = window.CHAPTER_META;
  var data = window.CHAPTER_DATA;
  var chapterId = meta.id;
  var saved = Progress.getChapter(chapterId);

  // ---- ヘッダー ----
  document.getElementById("chapTitle").textContent = "第" + meta.no + "章　" + meta.title;
  document.getElementById("chapSub").textContent = meta.description;
  document.title = "第" + meta.no + "章 " + meta.title + " | コバルト";

  var wrap = document.getElementById("problems");
  data.forEach(function (p) { wrap.appendChild(buildProblem(p)); });
  updateHeaderProgress();

  // =========================================================
  function buildProblem(p) {
    var el = document.createElement("section");
    el.className = "problem";
    el.id = "p-" + p.id;
    if (saved.mastered[p.id]) el.classList.add("mastered");

    // 上段（ID・タグ・ポイント）
    var top = document.createElement("div");
    top.className = "problem-top";
    top.innerHTML =
      '<span class="problem-id">Q.' + p.id + '</span>' +
      (p.tags || []).map(function (t) { return '<span class="tag ' + t + '">' + t + '</span>'; }).join("") +
      '<span class="point-badge">' + escapeHtml(p.point) + '</span>';
    el.appendChild(top);

    // 問題文
    var q = document.createElement("div");
    q.className = "q-text";
    q.innerHTML = escapeHtml(p.question).replace(/（　）/g, '<span class="blank">（　）</span>');
    el.appendChild(q);

    // 解答ボックス（共通）
    var ans = document.createElement("div");
    ans.className = "answer-box";
    ans.innerHTML =
      '<div class="lead">解答</div>' +
      '<div class="en">' + escapeHtml(p.en) + '</div>' +
      '<div class="ja">' + escapeHtml(p.ja) + '</div>' +
      '<div class="exp"><b>解説：</b>' + escapeHtml(p.explanation) + '</div>';

    // 形式ごとの操作エリア
    var body;
    if (p.type === "choice" || p.type === "error") body = buildChoice(p, ans, el);
    else if (p.type === "ordering") body = buildOrdering(p, ans, el);
    else if (p.type === "fill") body = buildFill(p, ans, el);
    else body = buildRewrite(p, ans, el); // rewrite

    el.appendChild(body);
    el.appendChild(ans);
    el.appendChild(buildActions(p, ans, el));
    return el;
  }

  // ---- choice / error ----
  function buildChoice(p, ans, el) {
    var box = document.createElement("div");
    box.className = "choices";
    p.choices.forEach(function (c, i) {
      var b = document.createElement("button");
      b.className = "choice-btn";
      b.type = "button";
      b.innerHTML = '<span class="txt">' + escapeHtml(c) + '</span>';
      b.addEventListener("click", function () {
        var buttons = box.querySelectorAll(".choice-btn");
        buttons.forEach(function (x) { x.disabled = true; });
        var correct = i === p.answerIndex;
        buttons[p.answerIndex].classList.add("correct");
        buttons[p.answerIndex].insertAdjacentHTML("beforeend", '<span class="mark">\u2713</span>');
        if (!correct) {
          b.classList.add("wrong");
          b.insertAdjacentHTML("beforeend", '<span class="mark">\u2717</span>');
        }
        showAnswer(ans);
        Progress.setSolved(chapterId, p.id, correct);
      });
      box.appendChild(b);
    });
    return box;
  }

  // ---- ordering ----
  function buildOrdering(p, ans, el) {
    var box = document.createElement("div");
    box.className = "order-area";
    var slot = document.createElement("div");
    slot.className = "order-slot";
    var pool = document.createElement("div");
    pool.className = "order-pool";

    var picked = [];
    var shuffled = shuffle(p.pieces.map(function (t, i) { return { t: t, i: i }; }));

    shuffled.forEach(function (item) {
      var pc = document.createElement("button");
      pc.className = "piece";
      pc.type = "button";
      pc.textContent = item.t;
      pc.addEventListener("click", function () {
        pc.classList.add("used");
        var chip = document.createElement("button");
        chip.className = "piece";
        chip.type = "button";
        chip.textContent = item.t;
        chip.addEventListener("click", function () {
          chip.remove();
          pc.classList.remove("used");
          picked = picked.filter(function (x) { return x !== chip; });
        });
        slot.appendChild(chip);
        picked.push(chip);
      });
      pool.appendChild(pc);
    });

    box.appendChild(slot);
    box.appendChild(pool);

    // 答え合わせ／リセット
    var row = document.createElement("div");
    row.className = "btn-row";
    var check = document.createElement("button");
    check.className = "btn primary";
    check.type = "button";
    check.textContent = "答え合わせ";
    var reset = document.createElement("button");
    reset.className = "btn ghost";
    reset.type = "button";
    reset.textContent = "リセット";
    var line = document.createElement("div");
    line.className = "result-line";

    check.addEventListener("click", function () {
      var made = picked.map(function (c) { return c.textContent; }).join(" ");
      var correct = normalize(made) === normalize(p.answer);
      line.textContent = correct ? "\u2713 正解！" : "\u2717 もう一度、または解答を確認しよう";
      line.className = "result-line " + (correct ? "ok" : "ng");
      if (correct) showAnswer(ans);
      Progress.setSolved(chapterId, p.id, correct);
    });
    reset.addEventListener("click", function () {
      picked.slice().forEach(function (c) { c.click(); });
      picked = [];
      line.textContent = "";
    });

    row.appendChild(check);
    row.appendChild(reset);
    box.appendChild(row);
    box.appendChild(line);
    return box;
  }

  // ---- fill ----
  function buildFill(p, ans, el) {
    var box = document.createElement("div");
    var row = document.createElement("div");
    row.className = "fill-row";
    var input = document.createElement("input");
    input.className = "fill-input";
    input.type = "text";
    input.placeholder = "空所に入る語を入力";
    input.setAttribute("autocomplete", "off");
    var check = document.createElement("button");
    check.className = "btn primary";
    check.type = "button";
    check.textContent = "判定";
    row.appendChild(input);
    row.appendChild(check);
    var line = document.createElement("div");
    line.className = "result-line";

    function judge() {
      var val = normalize(input.value);
      if (!val) return;
      var oks = [].concat(p.answer).map(normalize);
      var correct = oks.indexOf(val) !== -1;
      input.classList.remove("correct", "wrong");
      input.classList.add(correct ? "correct" : "wrong");
      line.textContent = correct ? "\u2713 正解！" : "\u2717 惜しい。解答を確認しよう";
      line.className = "result-line " + (correct ? "ok" : "ng");
      showAnswer(ans);
      Progress.setSolved(chapterId, p.id, correct);
    }
    check.addEventListener("click", judge);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") judge(); });

    box.appendChild(row);
    box.appendChild(line);
    return box;
  }

  // ---- rewrite（自己採点） ----
  function buildRewrite(p, ans, el) {
    var box = document.createElement("div");
    var row = document.createElement("div");
    row.className = "fill-row";
    var input = document.createElement("input");
    input.className = "fill-input";
    input.type = "text";
    input.placeholder = "書き換えた英文を入力（任意）";
    input.setAttribute("autocomplete", "off");
    row.appendChild(input);
    box.appendChild(row);
    var hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = "自分の答えを書いたら「解答を見る」で照合し、○×で自己採点しよう。";
    box.appendChild(hint);
    return box;
  }

  // ---- 下段アクション（解答を見る・音声・マスター） ----
  function buildActions(p, ans, el) {
    var row = document.createElement("div");
    row.className = "btn-row";

    var reveal = document.createElement("button");
    reveal.className = "btn";
    reveal.type = "button";
    reveal.textContent = "解答を見る";
    reveal.addEventListener("click", function () { showAnswer(ans); });
    row.appendChild(reveal);

    // 音声（Web Speech / 非対応時は無効化）
    if ("speechSynthesis" in window) {
      var speak = document.createElement("button");
      speak.className = "btn";
      speak.type = "button";
      speak.textContent = "\uD83D\uDD0A 音声";
      speak.addEventListener("click", function () { speakEn(p.en); });
      row.appendChild(speak);

      var slow = document.createElement("button");
      slow.className = "btn";
      slow.type = "button";
      slow.textContent = "\uD83D\uDC22 ゆっくり";
      slow.addEventListener("click", function () { speakEn(p.en, 0.6); });
      row.appendChild(slow);
    }

    // 自己採点（fill以外の自己判定用にも置くが、主に rewrite）
    if (p.type === "rewrite") {
      var mk = document.createElement("span");
      mk.className = "self-row";
      var ok = document.createElement("button");
      ok.className = "btn"; ok.type = "button"; ok.textContent = "\u25CB できた";
      ok.addEventListener("click", function () { Progress.setSolved(chapterId, p.id, true); ok.classList.add("primary"); });
      var ng = document.createElement("button");
      ng.className = "btn"; ng.type = "button"; ng.textContent = "\u00D7 まだ";
      ng.addEventListener("click", function () { Progress.setSolved(chapterId, p.id, false); });
      mk.appendChild(document.createTextNode(""));
      mk.appendChild(ok); mk.appendChild(ng);
      row.appendChild(mk);
    }

    // マスター
    var star = document.createElement("button");
    star.className = "btn star-btn" + (saved.mastered[p.id] ? " on" : "");
    star.type = "button";
    star.textContent = "\u2B50 マスター";
    star.addEventListener("click", function () {
      var now = !el.classList.contains("mastered");
      el.classList.toggle("mastered", now);
      star.classList.toggle("on", now);
      Progress.setMastered(chapterId, p.id, now);
      updateHeaderProgress();
    });
    row.appendChild(star);

    return row;
  }

  // ---- 共通ユーティリティ ----
  function showAnswer(ans) { ans.classList.add("show"); }

  function updateHeaderProgress() {
    var m = Progress.masteredCount(chapterId);
    var t = data.length;
    document.getElementById("statNum").textContent = m + " / " + t;
    document.getElementById("barFill").style.width = Math.round((m / t) * 100) + "%";
  }

  // ---- ネイティブ英語音声の選定 ----
  // 高品質な en-US 音声を優先。ページ読込直後は voices が空のことがあるため、
  // voiceschanged で読み直し、キャッシュする。
  var bestVoice = null;
  // 各OS/ブラウザで自然な英語ネイティブ音声の名前候補（優先順）
  var PREFERRED = [
    "Google US English", "Samantha", "Aria", "Jenny", "Guy", "Ava", "Allison",
    "Alex", "Zira", "Karen", "Daniel", "Serena", "Moira", "Tessa", "Microsoft"
  ];

  function pickVoice() {
    var vs = (window.speechSynthesis && window.speechSynthesis.getVoices()) || [];
    if (!vs.length) return null;
    var enUS = vs.filter(function (v) { return /^en[-_]us/i.test(v.lang); });
    var enAny = vs.filter(function (v) { return /^en[-_]/i.test(v.lang) || /english/i.test(v.name); });
    var pool = enUS.length ? enUS : enAny;
    if (!pool.length) return null;
    // 名前の優先候補に一致するものを先に選ぶ
    for (var i = 0; i < PREFERRED.length; i++) {
      var hit = pool.filter(function (v) { return v.name.indexOf(PREFERRED[i]) !== -1; })[0];
      if (hit) return hit;
    }
    // ローカル（端末内蔵）の自然な音声を優先
    var local = pool.filter(function (v) { return v.localService; })[0];
    return local || pool[0];
  }

  if ("speechSynthesis" in window) {
    bestVoice = pickVoice();
    window.speechSynthesis.onvoiceschanged = function () { bestVoice = pickVoice(); };
  }

  function speakEn(text, rate) {
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = rate || 0.95;
      u.pitch = 1;
      if (!bestVoice) bestVoice = pickVoice();
      if (bestVoice) u.voice = bestVoice;
      window.speechSynthesis.speak(u);
    } catch (e) { /* 非対応環境では何もしない */ }
  }

  function normalize(s) {
    return String(s).toLowerCase().trim()
      .replace(/[.,!?;:"']/g, "")
      .replace(/\s+/g, " ");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
})();

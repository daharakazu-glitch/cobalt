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
  buildToolbar();

  // =========================================================
  function buildProblem(p) {
    var el = document.createElement("section");
    el.className = "problem";
    el.id = "p-" + p.id;
    if (saved.mastered[p.id]) el.classList.add("mastered");

    // 上段（選択チェック・ID・タグ・ポイント）
    var top = document.createElement("div");
    top.className = "problem-top";

    var sel = document.createElement("label");
    sel.className = "sel-wrap";
    sel.title = "この問題をPDFに含める";
    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "sel-check";
    cb.setAttribute("data-id", p.id);
    cb.addEventListener("change", updateToolbar);
    sel.appendChild(cb);
    sel.appendChild(document.createTextNode("選択"));
    top.appendChild(sel);

    var meta2 = document.createElement("span");
    meta2.className = "top-meta";
    meta2.innerHTML =
      '<span class="problem-id">Q.' + p.id + '</span>' +
      (p.tags || []).map(function (t) { return '<span class="tag ' + t + '">' + t + '</span>'; }).join("") +
      '<span class="point-badge">' + escapeHtml(p.point) + '</span>';
    top.appendChild(meta2);
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

    // 発音チェック（マイク録音＋100点満点の簡易評価）
    if (SR || hasRecorder()) {
      var rec = document.createElement("button");
      rec.className = "btn rec-btn";
      rec.type = "button";
      rec.textContent = "\uD83C\uDFA4 発音チェック";
      var scoreBox = document.createElement("div");
      scoreBox.className = "score-box";
      rec.addEventListener("click", function () {
        startPronounce(p, rec, scoreBox);
      });
      row.appendChild(rec);
      row.appendChild(scoreBox); // flex-wrap により行の下に全幅で表示
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

  // =========================================================
  // 発音チェック（マイク録音 ＋ 100点満点の簡易・encouraging 評価）
  // =========================================================
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function hasRecorder() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  function startPronounce(p, btn, box) {
    if (btn.classList.contains("recording")) return; // 二重起動防止
    box.classList.add("show");
    box.innerHTML = '<div class="score-status">\uD83C\uDF99 話しかけてください…（英文を音読）</div>';
    btn.classList.add("recording");
    btn.textContent = "\u25CF 録音中…";

    var target = p.en;
    var finished = false;

    function finish(transcript) {
      if (finished) return;
      finished = true;
      btn.classList.remove("recording");
      btn.textContent = "\uD83C\uDFA4 発音チェック";
      renderScore(box, target, transcript);
    }

    // SpeechRecognition が使えるなら文字起こし＋採点
    if (SR) {
      var rec;
      try { rec = new SR(); } catch (e) { rec = null; }
      if (rec) {
        rec.lang = "en-US";
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        var got = "";
        rec.onresult = function (ev) {
          try { got = ev.results[0][0].transcript || ""; } catch (e) { got = ""; }
        };
        rec.onerror = function (ev) {
          if (ev && ev.error === "no-speech") { finish(""); }
          else if (ev && (ev.error === "not-allowed" || ev.error === "service-not-allowed")) {
            finished = true;
            btn.classList.remove("recording");
            btn.textContent = "\uD83C\uDFA4 発音チェック";
            box.innerHTML = '<div class="score-status">マイクの使用が許可されませんでした。ブラウザの設定を確認してください。</div>';
          } else { finish(got); }
        };
        rec.onend = function () { finish(got); };
        try { rec.start(); } catch (e) { finish(""); }
        return;
      }
    }

    // SpeechRecognition 非対応 → MediaRecorder で録音のみ（再生できる／採点は励ましのみ）
    if (hasRecorder()) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        var chunks = [];
        var mr = new MediaRecorder(stream);
        mr.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
        mr.onstop = function () {
          stream.getTracks().forEach(function (t) { t.stop(); });
          var blob = new Blob(chunks, { type: "audio/webm" });
          var url = URL.createObjectURL(blob);
          finished = true;
          btn.classList.remove("recording");
          btn.textContent = "\uD83C\uDFA4 発音チェック";
          box.classList.add("show");
          box.innerHTML =
            '<div class="score-status">録音できました！ 手本と聞き比べてみよう。</div>' +
            '<audio class="rec-audio" controls src="' + url + '"></audio>';
          var again = document.createElement("button");
          again.className = "btn"; again.type = "button"; again.textContent = "\uD83D\uDD0A 手本を聞く";
          again.addEventListener("click", function () { speakEn(target); });
          box.appendChild(again);
        };
        mr.start();
        setTimeout(function () { if (mr.state !== "inactive") mr.stop(); }, 4000);
      }).catch(function () {
        finished = true;
        btn.classList.remove("recording");
        btn.textContent = "\uD83C\uDFA4 発音チェック";
        box.innerHTML = '<div class="score-status">マイクを使用できませんでした。</div>';
      });
    }
  }

  function renderScore(box, target, transcript) {
    var said = (transcript || "").trim();
    var score = scorePronounce(target, said);
    var tier;
    if (score >= 90) tier = "\uD83C\uDF1F すばらしい！ネイティブ級！";
    else if (score >= 75) tier = "\u2728 とても良い発音です！";
    else if (score >= 55) tier = "\uD83D\uDC4D いい調子！その調子で練習しよう";
    else tier = "\uD83D\uDCAA ナイストライ！もう一度チャレンジ";

    var html =
      '<div class="score-num">' + score + '<small>点</small></div>' +
      '<div class="score-tier">' + tier + '</div>';
    if (said) html += '<div class="score-said">聞き取り: \u201C' + escapeHtml(said) + '\u201D</div>';
    else html += '<div class="score-said">うまく聞き取れませんでした。もう一度どうぞ。</div>';
    box.innerHTML = html;
    var again = document.createElement("button");
    again.className = "btn"; again.type = "button"; again.textContent = "\uD83D\uDD0A 手本を聞く";
    again.addEventListener("click", function () { speakEn(target); });
    box.appendChild(again);
  }

  // 手本と聞き取り結果の類似度から 100点満点を算出（甘め・encouraging）
  function scorePronounce(target, said) {
    if (!said) return 40; // 無音でも励ましの下限
    var a = normalize(target), b = normalize(said);
    if (!a) return 80;
    var dist = levenshtein(a, b);
    var sim = 1 - dist / Math.max(a.length, b.length); // 0..1
    if (sim < 0) sim = 0;
    var score = Math.round(sim * 100 * 1.15 + 8); // 甘め補正
    if (score > 100) score = 100;
    if (score < 40) score = 40;
    return score;
  }

  function levenshtein(a, b) {
    var m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      for (j = 0; j <= n; j++) prev[j] = cur[j];
    }
    return prev[n];
  }

  // =========================================================
  // 選択ツールバー ＋ 6種類のPDF出力（window.open + print）
  // =========================================================
  var toolbarCounter = null;

  function getSelectedIds() {
    var ids = [];
    var boxes = document.querySelectorAll(".sel-check");
    boxes.forEach(function (b) { if (b.checked) ids.push(b.getAttribute("data-id")); });
    return ids;
  }

  function updateToolbar() {
    if (!toolbarCounter) return;
    var n = getSelectedIds().length;
    toolbarCounter.textContent = n + " 問 選択中";
  }

  function buildToolbar() {
    var bar = document.createElement("div");
    bar.className = "select-toolbar";
    bar.innerHTML =
      '<span class="sb-title">PDF出力</span>' +
      '<span class="sb-count">0 問 選択中</span>' +
      '<button class="btn ghost sb-all" type="button">全選択</button>' +
      '<button class="btn ghost sb-none" type="button">全解除</button>' +
      '<button class="btn primary sb-make" type="button">PDFを作成</button>';
    document.body.appendChild(bar);
    toolbarCounter = bar.querySelector(".sb-count");

    bar.querySelector(".sb-all").addEventListener("click", function () {
      document.querySelectorAll(".sel-check").forEach(function (b) { b.checked = true; });
      updateToolbar();
    });
    bar.querySelector(".sb-none").addEventListener("click", function () {
      document.querySelectorAll(".sel-check").forEach(function (b) { b.checked = false; });
      updateToolbar();
    });
    bar.querySelector(".sb-make").addEventListener("click", function () {
      var ids = getSelectedIds();
      if (!ids.length) { alert("PDFに含める問題を1つ以上選択してください。"); return; }
      openPdfModal(ids);
    });
  }

  var PDF_FORMATS = [
    { key: "list",   label: "\uD83D\uDCC4 例文リスト",   desc: "英文＋和訳を一覧" },
    { key: "eiwa",   label: "\u270D\uFE0F 英作文テスト",  desc: "和訳から英文を書く" },
    { key: "wayaku", label: "\uD83D\uDCDD 和訳テスト",    desc: "英文の意味を書く" },
    { key: "cloze",  label: "\uD83D\uDD8A\uFE0F 空所補充テスト", desc: "空所に語を入れる" },
    { key: "mix",    label: "\uD83D\uDD00 ミックステスト", desc: "問題文＋選択肢など" },
    { key: "full",   label: "\uD83D\uDCD8 解答・解説プリント", desc: "解答と解説を全掲載" }
  ];

  function openPdfModal(ids) {
    var back = document.createElement("div");
    back.className = "pdf-modal";
    var card = document.createElement("div");
    card.className = "pdf-modal-card";
    card.innerHTML =
      '<div class="pm-head">PDFの種類を選ぶ <b>（' + ids.length + '問）</b></div>' +
      '<div class="pm-grid"></div>' +
      '<button class="btn ghost pm-close" type="button">閉じる</button>';
    back.appendChild(card);
    var grid = card.querySelector(".pm-grid");
    PDF_FORMATS.forEach(function (f) {
      var b = document.createElement("button");
      b.className = "pm-item";
      b.type = "button";
      b.innerHTML = '<span class="pm-label">' + f.label + '</span><span class="pm-desc">' + f.desc + '</span>';
      b.addEventListener("click", function () {
        openPdfWindow(f.key, ids);
        document.body.removeChild(back);
      });
      grid.appendChild(b);
    });
    card.querySelector(".pm-close").addEventListener("click", function () { document.body.removeChild(back); });
    back.addEventListener("click", function (e) { if (e.target === back) document.body.removeChild(back); });
    document.body.appendChild(back);
  }

  function selectedProblems(ids) {
    return data.filter(function (p) { return ids.indexOf(p.id) !== -1; });
  }

  // 問題文の空所を出題形式に応じて整形
  function questionText(p) {
    return String(p.question).replace(/\n/g, "<br>");
  }

  function pdfRows(kind, list) {
    var rows = "";
    list.forEach(function (p, idx) {
      var no = idx + 1;
      var body = "";
      if (kind === "list") {
        body = '<div class="en">' + escapeHtml(p.en) + '</div>' +
               '<div class="ja">' + escapeHtml(p.ja) + '</div>';
      } else if (kind === "eiwa") {
        body = '<div class="ja">' + escapeHtml(p.ja) + '</div>' +
               '<div class="wline"></div><div class="wline"></div>';
      } else if (kind === "wayaku") {
        body = '<div class="en">' + escapeHtml(p.en) + '</div>' +
               '<div class="wline"></div>';
      } else if (kind === "cloze") {
        body = '<div class="q">' + questionText(p) + '</div>';
        if (p.choices) body += '<div class="ch">' + p.choices.map(function (c, i) {
          return '<span>' + String.fromCharCode(9312 + i) + ' ' + escapeHtml(c) + '</span>';
        }).join("　") + '</div>';
      } else if (kind === "mix") {
        body = '<div class="q">' + questionText(p) + '</div>';
        if (p.choices) body += '<div class="ch">' + p.choices.map(function (c, i) {
          return '<span>' + String.fromCharCode(9312 + i) + ' ' + escapeHtml(c) + '</span>';
        }).join("　") + '</div>';
        if (p.pieces) body += '<div class="ch">[ ' + shuffle(p.pieces).map(escapeHtml).join(" / ") + ' ]</div>';
        body += '<div class="wline"></div>';
      } else if (kind === "full") {
        body = '<div class="q">' + questionText(p) + '</div>' +
               '<div class="en"><b>解答：</b>' + escapeHtml(p.en) + '</div>' +
               '<div class="ja">' + escapeHtml(p.ja) + '</div>' +
               '<div class="exp"><b>解説：</b>' + escapeHtml(p.explanation) + '</div>';
      }
      rows += '<div class="row"><span class="no">' + no + '.</span><div class="cell">' +
              '<div class="pt">' + escapeHtml(p.point) + '</div>' + body + '</div></div>';
    });
    return rows;
  }

  function needsAnswerKey(kind) {
    return kind === "eiwa" || kind === "wayaku" || kind === "cloze" || kind === "mix";
  }

  function answerKey(list) {
    var rows = "";
    list.forEach(function (p, idx) {
      rows += '<div class="akrow"><b>' + (idx + 1) + '.</b> ' + escapeHtml(p.en) + '</div>';
    });
    return '<div class="pagebreak"></div><h2>解答</h2>' + rows;
  }

  function openPdfWindow(kind, ids) {
    var list = selectedProblems(ids);
    var fmt = PDF_FORMATS.filter(function (f) { return f.key === kind; })[0] || {};
    var heading = "第" + meta.no + "章　" + meta.title + "　" + (fmt.label || "").replace(/^[^ ]+ /, "");
    var rows = pdfRows(kind, list);
    if (needsAnswerKey(kind)) rows += answerKey(list);

    var html =
      '<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8">' +
      '<title>' + heading + '</title><style>' +
      '@page{margin:16mm;}' +
      'body{font-family:"Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif;color:#0f172a;line-height:1.6;}' +
      'h1{font-size:18px;border-bottom:3px solid #0047ab;padding-bottom:6px;margin:0 0 4px;}' +
      '.sub{color:#475569;font-size:12px;margin-bottom:14px;}' +
      'h2{font-size:15px;color:#0047ab;margin:18px 0 8px;}' +
      '.row{display:flex;gap:8px;padding:9px 0;border-bottom:1px solid #e2e8f0;page-break-inside:avoid;}' +
      '.no{font-weight:700;color:#0047ab;min-width:22px;}' +
      '.cell{flex:1;}' +
      '.pt{font-size:11px;color:#64748b;margin-bottom:3px;}' +
      '.en{font-size:14px;}' +
      '.ja{font-size:13px;color:#334155;margin-top:2px;}' +
      '.q{font-size:14px;margin:2px 0;}' +
      '.ch{font-size:13px;color:#334155;margin-top:4px;}' +
      '.ch span{display:inline-block;margin-right:8px;}' +
      '.exp{font-size:12px;color:#475569;margin-top:4px;}' +
      '.wline{border-bottom:1px solid #94a3b8;height:20px;margin-top:6px;}' +
      '.akrow{font-size:13px;padding:4px 0;border-bottom:1px dotted #cbd5e1;}' +
      '.pagebreak{page-break-before:always;}' +
      '.foot{margin-top:20px;text-align:center;color:#94a3b8;font-size:11px;}' +
      '@media print{.noprint{display:none;}}' +
      '.noprint{position:fixed;top:10px;right:10px;}' +
      '.noprint button{font-size:14px;padding:8px 16px;background:#0047ab;color:#fff;border:none;border-radius:8px;cursor:pointer;}' +
      '</style></head><body>' +
      '<div class="noprint"><button onclick="window.print()">この内容を印刷 / PDF保存</button></div>' +
      '<h1>' + escapeHtml(heading) + '</h1>' +
      '<div class="sub">コバルト COBALT · ENGLISH GRAMMAR　／　全' + list.length + '問</div>' +
      rows +
      '<div class="foot">コバルト（Cobalt）— English Grammar</div>' +
      '</body></html>';

    var w = window.open("", "_blank");
    if (!w) { alert("ポップアップがブロックされました。ブラウザの設定で許可してください。"); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
  }
})();


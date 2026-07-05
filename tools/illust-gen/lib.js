/* コバルト 例文イラスト組版ライブラリ（リッチ画風・96x96）
 * 実装: 匠 ／ アートディレクション: 彩
 * bg + floor + props + characters を合成して1枚のSVGを出力する。
 */
const SKIN = "#f2c9a4", BLUSH = "#f0a08a", MOUTH = "#b06e4a", INK = "#2b1d12";

let uid = 0;
function id(p) { return p + (++uid); }

// ---------- 背景 ----------
const BGS = {
  night(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f3060"/><stop offset="1" stop-color="#141f42"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><circle cx="16" cy="16" r="1.4" fill="#fff"/><circle cx="38" cy="10" r="1.1" fill="#fff"/><circle cx="80" cy="14" r="1.2" fill="#fff"/><circle cx="64" cy="22" r=".9" fill="#fff" opacity=".8"/>` };
  },
  stage(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2f5e"/><stop offset="1" stop-color="#0d1b3d"/></linearGradient><linearGradient id="${g}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8dc" stop-opacity=".75"/><stop offset="1" stop-color="#fff8dc" stop-opacity=".05"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><path d="M38 0h20l12 64h-44z" fill="url(#${g}s)"/>` };
  },
  sunset(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb36b"/><stop offset=".55" stop-color="#e77e6a"/><stop offset="1" stop-color="#5a4f9e"/></linearGradient><radialGradient id="${g}u" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff0b3"/><stop offset="1" stop-color="#fff0b3" stop-opacity="0"/></radialGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><circle cx="76" cy="28" r="16" fill="url(#${g}u)"/><circle cx="76" cy="28" r="6.5" fill="#ffdd88"/>` };
  },
  day(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0ff"/><stop offset="1" stop-color="#8ec3f5"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><g fill="#fff" opacity=".9"><ellipse cx="24" cy="20" rx="11" ry="5"/><ellipse cx="33" cy="17" rx="8" ry="4.4"/><ellipse cx="72" cy="30" rx="9" ry="4"/></g>` };
  },
  warm(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2d8"/><stop offset="1" stop-color="#ffdda6"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/>` };
  },
  rain(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a6b8f"/><stop offset="1" stop-color="#39466a"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><g fill="#c3cddf"><path d="M28 24a9 9 0 0 1 1.6-17.8A12 12 0 0 1 51 3.4 8 8 0 0 1 55.5 19z"/><path d="M68 28a6.5 6.5 0 0 1 1.3-12.8 8.5 8.5 0 0 1 15.7-2A5.6 5.6 0 0 1 88 23.7z" opacity=".85"/></g><g stroke="#9db8e8" stroke-width="2.4" stroke-linecap="round"><path d="M26 30l-2.6 6M36 32l-2.6 6M46 28l-2.6 6M58 31l-2.6 6M70 34l-2.6 6M80 32l-2.6 6"/></g>` };
  },
  snow(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8d8ef"/><stop offset="1" stop-color="#9fb6d9"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><g fill="#fff"><circle cx="18" cy="16" r="2"/><circle cx="42" cy="10" r="1.6"/><circle cx="66" cy="18" r="2"/><circle cx="84" cy="10" r="1.5"/><circle cx="30" cy="30" r="1.6"/><circle cx="56" cy="26" r="1.4"/><circle cx="78" cy="32" r="1.7"/><circle cx="12" cy="42" r="1.5"/><circle cx="88" cy="48" r="1.4"/></g>` };
  },
  hall(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3a72"/><stop offset="1" stop-color="#2c2350"/></linearGradient><radialGradient id="${g}c" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><circle cx="48" cy="13" r="12" fill="url(#${g}c)"/><circle cx="43.5" cy="14" r="1.8" fill="#ffd75e"/><circle cx="48" cy="16" r="1.8" fill="#ffd75e"/><circle cx="52.5" cy="14" r="1.8" fill="#ffd75e"/>` };
  },
  dusk(g) {
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2f68"/><stop offset="1" stop-color="#1c1740"/></linearGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><circle cx="18" cy="16" r="1.4" fill="#fff"/><circle cx="60" cy="12" r="1.1" fill="#fff"/><circle cx="84" cy="24" r="1.2" fill="#fff"/>` };
  },
  festival(g) { // 夜＋電飾（ワルツ系）
    return { defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3f76"/><stop offset=".7" stop-color="#1b2a55"/><stop offset="1" stop-color="#15224a"/></linearGradient><radialGradient id="${g}l" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>`,
      body: `<rect width="96" height="96" rx="18" fill="url(#${g})"/><path d="M4 20q22 12 44 0t44 0" stroke="#0e1a3c" stroke-width="1.6" fill="none"/>` +
        [16, 34, 52, 70, 86].map((x, i) => `<circle cx="${x}" cy="${[24,28,29,27,22][i]}" r="4.6" fill="url(#${g}l)"/><circle cx="${x}" cy="${[24,28,29,27,22][i]}" r="1.6" fill="#ffd75e"/>`).join("") };
  }
};

// ---------- 床 ----------
const FLOORS = {
  wood: `<path d="M8 64h80v14a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16z" fill="#a57847"/><path d="M8 64h80v3h-80z" fill="#8a5f36"/>`,
  woodLow: `<path d="M6 74h84v6a15 15 0 0 1-15 14h-54a15 15 0 0 1-15-14z" fill="#a57847"/><path d="M6 74h84v3h-84z" fill="#8a5f36"/>`,
  stage: `<path d="M8 66h80v12a17 17 0 0 1-17 16h-46a17 17 0 0 1-17-16z" fill="#7a5533"/><path d="M8 66h80v3h-80z" fill="#956a41"/>`,
  road: `<path d="M4 74h88v8a14 14 0 0 1-14 12h-60a14 14 0 0 1-14-12z" fill="#232c4e"/><path d="M12 80h10M32 80h10M52 80h10M72 80h10" stroke="#4a5680" stroke-width="2.4" stroke-linecap="round"/>`,
  roadDay: `<path d="M4 74h88v8a14 14 0 0 1-14 12h-60a14 14 0 0 1-14-12z" fill="#5a6478"/><path d="M12 80h10M32 80h10M52 80h10M72 80h10" stroke="#aab4c8" stroke-width="2.4" stroke-linecap="round"/>`,
  snow: `<path d="M4 72h88v10a14 14 0 0 1-14 12h-60a14 14 0 0 1-14-12z" fill="#eef4fb"/><ellipse cx="30" cy="74" rx="16" ry="3" fill="#dce8f5"/><ellipse cx="70" cy="76" rx="12" ry="2.6" fill="#dce8f5"/>`,
  grass: `<path d="M4 72h88v10a14 14 0 0 1-14 12h-60a14 14 0 0 1-14-12z" fill="#6ea25f"/><path d="M14 72l2-5M26 72l2-5M44 72l2-5M64 72l2-5M80 72l2-5" stroke="#547f47" stroke-width="2" stroke-linecap="round"/>`,
  gym: `<path d="M8 68h80v10a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16z" fill="#c99a63"/><path d="M8 68h80v3h-80z" fill="#a87e4e"/><path d="M20 78h20M56 82h22" stroke="#b3854f" stroke-width="1.6"/>`
};

// ---------- 人物 ----------
function face(cx, cy, s, expr) {
  const e = expr || "smile";
  let eyes = `<circle cx="${cx-3.2*s}" cy="${cy+0.6*s}" r="${0.95*s}" fill="${INK}"/><circle cx="${cx+3.2*s}" cy="${cy+0.6*s}" r="${0.95*s}" fill="${INK}"/>`;
  if (e === "sleep" || e === "calmshut") eyes = `<path d="M${cx-4.4*s} ${cy+0.6*s}c1 1.1 2.4 1.1 3.4 0M${cx+1*s} ${cy+0.6*s}c1 1.1 2.4 1.1 3.4 0" stroke="${INK}" stroke-width="${1.1*s}" fill="none" stroke-linecap="round"/>`;
  if (e === "happy") eyes = `<path d="M${cx-4.6*s} ${cy+0.8*s}c1-1.4 2.6-1.4 3.6 0M${cx+1*s} ${cy+0.8*s}c1-1.4 2.6-1.4 3.6 0" stroke="${INK}" stroke-width="${1.3*s}" fill="none" stroke-linecap="round"/>`;
  let mouth = `<path d="M${cx-2.2*s} ${cy+4.2*s}a${3*s} ${3*s} 0 0 0 ${4.4*s} 0" stroke="${MOUTH}" stroke-width="${1.1*s}" fill="none" stroke-linecap="round"/>`;
  if (e === "sad") mouth = `<path d="M${cx-2.2*s} ${cy+5*s}a${3*s} ${3*s} 0 0 1 ${4.4*s} 0" stroke="${MOUTH}" stroke-width="${1.1*s}" fill="none" stroke-linecap="round"/>`;
  if (e === "wow") mouth = `<ellipse cx="${cx}" cy="${cy+4.4*s}" rx="${1.7*s}" ry="${2.2*s}" fill="${MOUTH}"/>`;
  if (e === "flat" || e === "sleep") mouth = `<path d="M${cx-2*s} ${cy+4.6*s}h${4*s}" stroke="${MOUTH}" stroke-width="${1.1*s}" stroke-linecap="round"/>`;
  const blush = `<circle cx="${cx-5.6*s}" cy="${cy+3*s}" r="${1.25*s}" fill="${BLUSH}" opacity=".7"/><circle cx="${cx+5.6*s}" cy="${cy+3*s}" r="${1.25*s}" fill="${BLUSH}" opacity=".7"/>`;
  return eyes + mouth + blush;
}
function hairFor(cx, cy, s, kind) {
  const k = kind || "boy";
  if (k === "boy") return `<path d="M${cx-8.6*s} ${cy-1.6*s}c1.3-7 16-7 17.2 0l-2.2-1.2.5 2.1c-4.8-2.6-9.6-2.6-13-.5z" fill="#3d2b1f"/>`;
  if (k === "spiky") return `<path d="M${cx-8.6*s} ${cy-1*s}l1.6-3.4 2 2 1.8-3.4 2 2.4 1.8-3 1.8 3 2-2.4 1.8 3.4 2-2 1.6 3.4c-5.6-2.6-13-2.6-18.4 0z" fill="#2b2118"/>`;
  if (k === "girl") return `<path d="M${cx-8.4*s} ${cy}c0-7.4 15.4-8.2 16.8-.8 0 3-1 4.2-1 4.2l-1-3.6c-3.2 1.7-8.8 1.7-11.2-1.2l-1.8 4s-1.8-.4-1.8-2.6z" fill="#5a4632"/><circle cx="${cx+8*s}" cy="${cy-5*s}" r="${2.8*s}" fill="#5a4632"/>`;
  if (k === "bob") return `<path d="M${cx-9*s} ${cy+3*s}c-1-9 4-13 9-13s10 4 9 13l-2.4-1c.6-6-2-8.6-6.6-8.6s-7.2 2.6-6.6 8.6z" fill="#2b2118"/>`;
  if (k === "grandma") return `<path d="M${cx-9.5*s} ${cy-2.6*s}c1.6-6.4 5.8-8.8 9.5-8.8s7.9 2.4 9.5 8.8c0 0-2.8-1.6-4.8-1.6l.8 2.4c-4.8-2.8-9.6-2.8-13.6-.8z" fill="#8f8f96"/><path d="M${cx-9.5*s} ${cy-2.6*s}c3.2-2 15.8-2 19 0l-1.6 4c-5.6-2.4-13.6-2.4-16 0z" fill="#e05555"/>`;
  if (k === "old") return `<path d="M${cx-8.6*s} ${cy-1.6*s}c1.3-7 16-7 17.2 0l-2.8-1.2c-4.4-2.4-8.8-2.4-11.8-.4z" fill="#8f8f96"/>`;
  return "";
}
// バスト（机・カウンター向け上半身）
function bust(x, y, s, o) {
  o = o || {};
  const shirt = o.shirt || "#2b6bd8";
  return `<g><circle cx="${x}" cy="${y}" r="${9.5*s}" fill="${SKIN}"/>${hairFor(x, y-2*s, s, o.hair)}${face(x, y, s, o.expr)}<path d="M${x-12*s} ${y+17*s}c1-6.5 5.5-9.5 12-9.5s11 3 12 9.5z" fill="${shirt}"/></g>`;
}
// 立ち姿
function stand(x, y, s, o) { // y = 足元
  o = o || {};
  const shirt = o.shirt || "#2b6bd8", pants = o.pants || "#2b3a55";
  const arms = o.arms === "up"
    ? `<path d="M${x-7*s} ${y-24*s}l-4 -7M${x+7*s} ${y-24*s}l4 -7" stroke="${SKIN}" stroke-width="${3.2*s}" stroke-linecap="round"/>`
    : `<path d="M${x-7*s} ${y-24*s}l-3.4 8M${x+7*s} ${y-24*s}l3.4 8" stroke="${SKIN}" stroke-width="${3.2*s}" stroke-linecap="round"/>`;
  const skirt = o.skirt
    ? `<path d="M${x-6.5*s} ${y-27*s}h${13*s}l${3.5*s} ${15*s}h-${20*s}z" fill="${shirt}"/><path d="M${x-4*s} ${y-12*s}v${9*s}M${x+4*s} ${y-12*s}v${9*s}" stroke="${SKIN}" stroke-width="${3*s}" stroke-linecap="round"/>`
    : `<path d="M${x-6.5*s} ${y-27*s}h${13*s}v${15*s}h-${13*s}z" fill="${shirt}"/><path d="M${x-3.6*s} ${y-12*s}v${10*s}M${x+3.6*s} ${y-12*s}v${10*s}" stroke="${pants}" stroke-width="${4.2*s}" stroke-linecap="round"/>`;
  return `<g>${arms}${skirt}<circle cx="${x}" cy="${y-34*s}" r="${8*s}" fill="${SKIN}"/>${hairFor(x, y-35.6*s, 0.85*s, o.hair)}${face(x, y-34*s, 0.85*s, o.expr)}</g>`;
}
// 走る人
function runner(x, y, s, o) {
  o = o || {};
  const shirt = o.shirt || "#e05555";
  return `<g><circle cx="${x}" cy="${y-26*s}" r="${6.5*s}" fill="${SKIN}"/>${hairFor(x, y-27.4*s, 0.7*s, o.hair||"boy")}${face(x, y-26*s, 0.7*s, o.expr||"wow")}<path d="M${x-5*s} ${y-19*s}c${1*s}-3 ${3*s}-4.5 ${5.5*s}-4.5 ${2.4*s} 0 ${4.4*s} ${1.8*s} ${5*s} ${5*s}l${0.4*s} ${6*s}-${3.2*s} ${1*s}-${2.2*s}-${5*s}-${2.2*s} ${6*s}-${3.6*s} ${3.2*s}z" fill="${shirt}"/><path d="M${x-4.6*s} ${y-6*s}l-5 ${8*s} ${3.8*s} ${1*s} ${4.8*s}-${6.4*s}M${x} ${y-4*s}l${1*s} ${8.6*s} ${3.8*s}-.5.5-${8.6*s}" fill="none" stroke="${SKIN}" stroke-width="${3.6*s}" stroke-linecap="round"/><path d="M${x-14*s} ${y-20*s}h${5*s}M${x-16*s} ${y-14*s}h${6*s}M${x-13*s} ${y-8*s}h${4.6*s}" stroke="#9db8e8" stroke-width="${2*s}" stroke-linecap="round"/></g>`;
}

// ---------- 小物 ----------
const P = {
  micStand(x, y, s) {
    return `<g><rect x="${x-1.4*s}" y="${y-26*s}" width="${2.8*s}" height="${26*s}" rx="${1.4*s}" fill="#cfd6e4"/><path d="M${x-8*s} ${y}c0-2.5 3.5-4 8-4s8 1.5 8 4z" fill="#9aa4b8"/><circle cx="${x}" cy="${y-32*s}" r="${8.5*s}" fill="#39445c"/><path d="M${x-7*s} ${y-34.5*s}h${14*s}M${x-8*s} ${y-31.5*s}h${16*s}M${x-7*s} ${y-28.5*s}h${14*s}" stroke="#5a6880" stroke-width="${1.1*s}"/></g>`;
  },
  flag(x, y, s, color) { // y=旗竿の下端
    const c = color || "#0a58c8";
    return `<g><rect x="${x-1.7*s}" y="${y-64*s}" width="${3.4*s}" height="${64*s}" rx="${1.7*s}" fill="#3a3f55"/><path d="M${x+1.7*s} ${y-60*s} C ${x+12*s} ${y-64*s}, ${x+24*s} ${y-56*s}, ${x+34*s} ${y-60*s} S ${x+46*s} ${y-62*s}, ${x+46*s} ${y-62*s} L ${x+46*s} ${y-40*s} C ${x+36*s} ${y-36*s}, ${x+24*s} ${y-44*s}, ${x+14*s} ${y-40*s} S ${x+1.7*s} ${y-38*s}, ${x+1.7*s} ${y-38*s} Z" fill="${c}"/><path d="M${x+10*s} ${y-56*s}l${1.8*s} ${3.7*s} ${4*s} .6-${2.9*s} ${2.8*s} .7 ${4*s}-${3.6*s}-${1.9*s}-${3.6*s} ${1.9*s} .7-${4*s}-${2.9*s}-${2.8*s} ${4*s}-.6z" fill="#fff"/></g>`;
  },
  notes(x, y, s, c) {
    const col = c || "#9db8ff";
    return `<g stroke-linecap="round"><path d="M${x} ${y}c3 2 3 6 0 8s-3 6 0 8" stroke="${col}" stroke-width="${2.2*s}" fill="none"/><path d="M${x+11*s} ${y-5*s}c2.4 1.6 2.4 4.8 0 6.4s-2.4 4.8 0 6.4" stroke="${col}" stroke-width="${1.9*s}" fill="none" opacity=".85"/></g>`;
  },
  star(x, y, s, c) {
    const col = c || "#ffd75e";
    return `<path d="M${x} ${y}l${1.8*s} ${3.7*s} ${4*s} .6-${2.9*s} ${2.8*s} .7 ${4*s}-${3.6*s}-${1.9*s}-${3.6*s} ${1.9*s} .7-${4*s}-${2.9*s}-${2.8*s} ${4*s}-.6z" fill="${col}"/>`;
  },
  sparkle(x, y, s) {
    return `<g fill="#ffd75e"><circle cx="${x}" cy="${y}" r="${1.7*s}"/><circle cx="${x+14*s}" cy="${y+10*s}" r="${1.3*s}"/><circle cx="${x-8*s}" cy="${y+14*s}" r="${1.2*s}"/></g>`;
  },
  confetti(x, y, s) {
    return `<g><rect x="${x}" y="${y}" width="3" height="6" rx="1.5" fill="#ff8f6b" transform="rotate(25 ${x} ${y})"/><rect x="${x+26*s}" y="${y+8*s}" width="3" height="6" rx="1.5" fill="#6bd0ff" transform="rotate(-30 ${x+26*s} ${y+8*s})"/><rect x="${x+10*s}" y="${y+26*s}" width="3" height="6" rx="1.5" fill="#8affc1" transform="rotate(40 ${x+10*s} ${y+26*s})"/><circle cx="${x+30*s}" cy="${y+24*s}" r="1.6" fill="#ffd75e"/></g>`;
  },
  moon(x, y, s) {
    return `<path d="M${x} ${y}a${10*s} ${10*s} 0 1 0 ${7.3*s} ${16.4*s} ${11*s} ${11*s} 0 0 1-${7.3*s}-${16.4*s}z" fill="#ffe9a8"/>`;
  },
  sun(x, y, s) {
    return `<g><circle cx="${x}" cy="${y}" r="${8*s}" fill="#ffd75e"/><path d="M${x} ${y-13*s}v${4.4*s}M${x} ${y+8.6*s}v${4.4*s}M${x-13*s} ${y}h${4.4*s}M${x+8.6*s} ${y}h${4.4*s}M${x-9.5*s} ${y-9.5*s}l${3*s} ${3*s}M${x+6.5*s} ${y+6.5*s}l${3*s} ${3*s}M${x+9.5*s} ${y-9.5*s}l-${3*s} ${3*s}M${x-6.5*s} ${y+6.5*s}l-${3*s} ${3*s}" stroke="#ffd75e" stroke-width="${2.4*s}" stroke-linecap="round"/></g>`;
  },
  cloudRain(x, y, s) {
    return `<g><path d="M${x} ${y}a${8*s} ${8*s} 0 0 1 ${1.5*s}-${15.8*s} ${10.5*s} ${10.5*s} 0 0 1 ${19.4*s}-${2.6*s} ${7*s} ${7*s} 0 0 1 ${-2.4*s} ${18.4*s}z" fill="#c3cddf"/><path d="M${x+2*s} ${y+4*s}l-${2.4*s} ${5.4*s}M${x+10*s} ${y+5.4*s}l-${2.4*s} ${5.4*s}M${x+17*s} ${y+3.4*s}l-${2.4*s} ${5.4*s}" stroke="#9db8e8" stroke-width="${2.4*s}" stroke-linecap="round"/></g>`;
  },
  bread(x, y, s) {
    return `<g><ellipse cx="${x}" cy="${y}" rx="${11*s}" ry="${8*s}" fill="#d78f35"/><ellipse cx="${x}" cy="${y-1.6*s}" rx="${11*s}" ry="${7.4*s}" fill="#f3bd6e"/><g fill="#fff"><circle cx="${x-4*s}" cy="${y-2.6*s}" r="${1.3*s}"/><circle cx="${x+3*s}" cy="${y-0.6*s}" r="${1.3*s}"/><circle cx="${x}" cy="${y-4.2*s}" r="${1.3*s}"/></g><path d="M${x-4*s} ${y-14*s}c-2.5 3-2.5 5 0 8M${x+4*s} ${y-16*s}c-2.5 3-2.5 5 0 8" stroke="#e8ddc8" stroke-width="${2.2*s}" fill="none" stroke-linecap="round" opacity=".9"/></g>`;
  },
  onigiri(x, y, s) {
    return `<g><path d="M${x} ${y-18*s}l${11*s} ${18*s}h-${22*s}z" fill="#fff" stroke="#39445c" stroke-width="${2.2*s}" stroke-linejoin="round"/><rect x="${x-4.5*s}" y="${y-8*s}" width="${9*s}" height="${8*s}" rx="${1.2*s}" fill="#39445c"/></g>`;
  },
  clock(x, y, s, late) {
    const hand = late ? `<path d="M${x} ${y-6.5*s}v${6.5*s}l${4.6*s} ${3*s}" stroke="#e34d4d" stroke-width="${2.6*s}" fill="none" stroke-linecap="round"/>` : `<path d="M${x} ${y-6.5*s}v${6.5*s}l${4.6*s}-${2*s}" stroke="#0047ab" stroke-width="${2.6*s}" fill="none" stroke-linecap="round"/>`;
    return `<g><circle cx="${x}" cy="${y}" r="${11*s}" fill="#fff" stroke="#0047ab" stroke-width="${3*s}"/>${hand}<circle cx="${x}" cy="${y}" r="${1.6*s}" fill="#0047ab"/></g>`;
  },
  book(x, y, s) {
    return `<g transform="rotate(-5 ${x} ${y})"><rect x="${x-12*s}" y="${y-6.5*s}" width="${24*s}" height="${13*s}" rx="${1.6*s}" fill="#fdfaf2"/><path d="M${x} ${y-6.5*s}v${13*s}" stroke="#d8d2c2" stroke-width="${1.2*s}"/><path d="M${x-9*s} ${y-2.5*s}h${6*s}M${x-9*s} ${y+0.5*s}h${6*s}M${x+3*s} ${y-2.5*s}h${6*s}M${x+3*s} ${y+0.5*s}h${6*s}" stroke="#b9c3d6" stroke-width="${1.3*s}" stroke-linecap="round"/></g>`;
  },
  pencil(x, y, s) {
    return `<g><rect x="${x}" y="${y}" width="${3*s}" height="${12*s}" rx="${1.5*s}" fill="#f2a83d" transform="rotate(-30 ${x} ${y})"/><path d="M${x-5*s} ${y+10*s}l-${2.6*s} ${3.6*s} ${4.3*s} .5z" fill="#3d2b1f"/></g>`;
  },
  paper(x, y, s) {
    return `<g transform="rotate(-6 ${x} ${y})"><rect x="${x-13*s}" y="${y-8.5*s}" width="${26*s}" height="${17*s}" rx="2" fill="#fdfaf2"/><path d="M${x-9*s} ${y-3.5*s}h${18*s}M${x-9*s} ${y+0.5*s}h${18*s}M${x-9*s} ${y+4.5*s}h${12*s}" stroke="#b9c3d6" stroke-width="1.5" stroke-linecap="round"/></g>`;
  },
  letter(x, y, s) {
    return `<g transform="rotate(-6 ${x} ${y})"><rect x="${x-11*s}" y="${y-7*s}" width="${22*s}" height="${14*s}" rx="2" fill="#fdfaf2" stroke="#d8d2c2"/><path d="M${x-11*s} ${y-7*s}l${11*s} ${8*s} ${11*s}-${8*s}" stroke="#d8d2c2" stroke-width="1.4" fill="none"/><path d="M${x-2.6*s} ${y+1*s}c1-1.5 3-1.5 3.2.2.2-1.7 2.2-1.7 3.2-.2.8 1.1-1 2.6-3.2 4-2.2-1.4-4-2.9-3.2-4z" fill="#ef6f6f"/></g>`;
  },
  phone(x, y, s, sad) {
    return `<g><rect x="${x-6*s}" y="${y-11*s}" width="${12*s}" height="${22*s}" rx="${2.6*s}" fill="#2b3a55"/><rect x="${x-4.6*s}" y="${y-9*s}" width="${9.2*s}" height="${15*s}" rx="${1.4*s}" fill="${sad ? "#3e4f78" : "#9dc1f5"}"/><circle cx="${x}" cy="${y+8.4*s}" r="${1.2*s}" fill="#8a93ad"/></g>`;
  },
  heart(x, y, s, c) {
    const col = c || "#ef6f6f";
    return `<path d="M${x} ${y+7*s}c-${7*s}-${4.6*s}-${9.6*s}-${9.4*s}-${6.8*s}-${12.8*s}c${2*s}-${2.4*s} ${5.4*s}-${1.6*s} ${6.8*s} .8 ${1.4*s}-${2.4*s} ${4.8*s}-${3.2*s} ${6.8*s}-.8 ${2.8*s} ${3.4*s} .2 ${8.2*s}-${6.8*s} ${12.8*s}z" fill="${col}"/>`;
  },
  brokenHeart(x, y, s) {
    return `<g><path d="M${x} ${y+7*s}c-${7*s}-${4.6*s}-${9.6*s}-${9.4*s}-${6.8*s}-${12.8*s}c${2*s}-${2.4*s} ${5.4*s}-${1.6*s} ${6.8*s} .8 ${1.4*s}-${2.4*s} ${4.8*s}-${3.2*s} ${6.8*s}-.8 ${2.8*s} ${3.4*s} .2 ${8.2*s}-${6.8*s} ${12.8*s}z" fill="#ef6f6f"/><path d="M${x} ${y-5.4*s}l-${1.6*s} ${3.4*s} ${3*s} ${2.4*s}-${2.4*s} ${4*s}" stroke="#e9f1fc" stroke-width="${1.6*s}" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  },
  bubble(x, y, s, kind) {
    let inner = `<circle cx="${x-4.5*s}" cy="${y}" r="${1.5*s}" fill="#3b82f6"/><circle cx="${x}" cy="${y}" r="${1.5*s}" fill="#3b82f6"/><circle cx="${x+4.5*s}" cy="${y}" r="${1.5*s}" fill="#3b82f6"/>`;
    if (kind === "heart") inner = `<path d="M${x} ${y+3*s}c-${3.4*s}-${2.2*s}-${4.6*s}-${4.6*s}-${3.2*s}-${6.2*s}c${1*s}-${1.2*s} ${2.6*s}-.8 ${3.2*s} .4 .6-${1.2*s} ${2.2*s}-${1.6*s} ${3.2*s}-.4 ${1.4*s} ${1.6*s} .2 ${4*s}-${3.2*s} ${6.2*s}z" fill="#ef6f6f"/>`;
    if (kind === "q") inner = `<path d="M${x-2.4*s} ${y-1.6*s}a${2.6*s} ${2.6*s} 0 1 1 ${3.6*s} ${2.4*s}c-${1*s} .4-${1.2*s} ${0.9*s}-${1.2*s} ${1.8*s}" stroke="#3b82f6" stroke-width="${1.5*s}" fill="none" stroke-linecap="round"/><circle cx="${x}" cy="${y+4.4*s}" r="${0.9*s}" fill="#3b82f6"/>`;
    return `<g><path d="M${x-9*s} ${y-7*s}h${18*s}a${4*s} ${4*s} 0 0 1 ${4*s} ${4*s}v${5*s}a${4*s} ${4*s} 0 0 1-${4*s} ${4*s}h-${10*s}l-${5*s} ${5*s}v-${5*s}h-${3*s}a${4*s} ${4*s} 0 0 1-${4*s}-${4*s}v-${5*s}a${4*s} ${4*s} 0 0 1 ${4*s}-${4*s}z" fill="#fff" stroke="#3b82f6" stroke-width="${1.8*s}"/>${inner}</g>`;
  },
  trophy(x, y, s) {
    return `<g><path d="M${x-8*s} ${y-18*s}h${16*s}v${6*s}a${8*s} ${8*s} 0 0 1-${16*s} 0z" fill="#ffd75e"/><path d="M${x-8*s} ${y-16*s}c-${4*s} 0-${6*s} ${5*s}-${1*s} ${7*s}M${x+8*s} ${y-16*s}c${4*s} 0 ${6*s} ${5*s} ${1*s} ${7*s}" stroke="#ffd75e" stroke-width="${2*s}" fill="none"/><rect x="${x-2*s}" y="${y-6*s}" width="${4*s}" height="${4*s}" fill="#e8b23d"/><path d="M${x-6*s} ${y}h${12*s}l${1.4*s} ${3.6*s}h-${14.8*s}z" fill="#a5772a"/><path d="M${x-2.6*s} ${y-13.6*s}l${1.3*s} ${2.6*s} ${2.9*s} .4-${2.1*s} ${2*s} .5 ${2.9*s}-${2.6*s}-${1.4*s}-${2.6*s} ${1.4*s} .5-${2.9*s}-${2.1*s}-${2*s} ${2.9*s}-.4z" fill="#fff" opacity=".85"/></g>`;
  },
  baseball(x, y, s) {
    return `<g><rect x="${x+6*s}" y="${y-26*s}" width="${5*s}" height="${28*s}" rx="${2.5*s}" fill="#c98d4e" transform="rotate(24 ${x+8*s} ${y-12*s})"/><circle cx="${x-4*s}" cy="${y}" r="${7.5*s}" fill="#fff" stroke="#d8d2c2"/><path d="M${x-8.6*s} ${y-3.6*s}c2 1.6 2 5.6 0 7.2M${x+0.6*s} ${y-3.6*s}c-2 1.6-2 5.6 0 7.2" stroke="#e05555" stroke-width="${1.4*s}" fill="none"/></g>`;
  },
  megaphone(x, y, s) {
    return `<g transform="rotate(-14 ${x} ${y})"><path d="M${x-10*s} ${y-4*s}l${14*s}-${6*s}v${20*s}l-${14*s}-${6*s}z" fill="#e05555"/><rect x="${x-14*s}" y="${y-4*s}" width="${5*s}" height="${8*s}" rx="${1.6*s}" fill="#b23a3a"/><path d="M${x+8*s} ${y-8*s}l${5*s}-${3*s}M${x+9*s} ${y}h${6*s}M${x+8*s} ${y+8*s}l${5*s} ${3*s}" stroke="#ffd75e" stroke-width="${2.2*s}" stroke-linecap="round"/></g>`;
  },
  umbrella(x, y, s, c) {
    const col = c || "#3b82f6";
    return `<g><path d="M${x-14*s} ${y}a${14*s} ${14*s} 0 0 1 ${28*s} 0c-2.4-2-4.8-2-7 0-2.2-2-4.8-2-7 0-2.2-2-4.6-2-7 0-2.2-2-4.6-2-7 0z" fill="${col}"/><path d="M${x} ${y-13*s}v${24*s}a${3*s} ${3*s} 0 0 1-${6*s} 0" stroke="#2b3a55" stroke-width="${1.8*s}" fill="none" stroke-linecap="round"/></g>`;
  },
  tent(x, y, s) {
    return `<g><path d="M${x} ${y-16*s}l${16*s} ${16*s}h-${32*s}z" fill="#e07a4a"/><path d="M${x} ${y-16*s}l${5*s} ${16*s}h-${10*s}z" fill="#b85a30"/><path d="M${x} ${y-16*s}v-${4*s}" stroke="#5a4632" stroke-width="${1.8*s}" stroke-linecap="round"/></g>`;
  },
  train(x, y, s) {
    return `<g><rect x="${x-26*s}" y="${y-18*s}" width="${52*s}" height="${20*s}" rx="${5*s}" fill="#e8edf5"/><rect x="${x-26*s}" y="${y-18*s}" width="${52*s}" height="${6*s}" rx="${3*s}" fill="#0a58c8"/><rect x="${x-20*s}" y="${y-10*s}" width="${9*s}" height="${7*s}" rx="1.6" fill="#9dc1f5"/><rect x="${x-6*s}" y="${y-10*s}" width="${9*s}" height="${7*s}" rx="1.6" fill="#9dc1f5"/><rect x="${x+8*s}" y="${y-10*s}" width="${9*s}" height="${7*s}" rx="1.6" fill="#9dc1f5"/><circle cx="${x-14*s}" cy="${y+4*s}" r="${3.4*s}" fill="#2b3a55"/><circle cx="${x+12*s}" cy="${y+4*s}" r="${3.4*s}" fill="#2b3a55"/><path d="M${x+30*s} ${y-14*s}h${5*s}M${x+29*s} ${y-8*s}h${7*s}" stroke="#c3cddf" stroke-width="${2*s}" stroke-linecap="round"/></g>`;
  },
  bus(x, y, s) {
    return `<g><rect x="${x-25*s}" y="${y-16*s}" width="${50*s}" height="${20*s}" rx="${4.5*s}" fill="#ffcf5e"/><rect x="${x-20*s}" y="${y-12*s}" width="${9*s}" height="${7*s}" rx="1.6" fill="#fff3c9"/><rect x="${x-7*s}" y="${y-12*s}" width="${9*s}" height="${7*s}" rx="1.6" fill="#fff3c9"/><rect x="${x+6*s}" y="${y-12*s}" width="${9*s}" height="${7*s}" rx="1.6" fill="#fff3c9"/><path d="M${x-25*s} ${y-2*s}h${50*s}" stroke="#0047ab" stroke-width="${2.6*s}"/><circle cx="${x-13*s}" cy="${y+4*s}" r="${3.6*s}" fill="#1c2038"/><circle cx="${x+13*s}" cy="${y+4*s}" r="${3.6*s}" fill="#1c2038"/></g>`;
  },
  house(x, y, s) { // y=接地
    return `<g><path d="M${x-16*s} ${y}v-${18*s}l${16*s}-${12*s} ${16*s} ${12*s}v${18*s}z" fill="#e8ddc8"/><path d="M${x-19*s} ${y-18*s}l${19*s}-${14*s} ${19*s} ${14*s}" stroke="#8a5f36" stroke-width="${3.4*s}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="${x-10*s}" y="${y-14*s}" width="${7*s}" height="${6*s}" rx="1.2" fill="#ffca5e"/><rect x="${x+2*s}" y="${y-11*s}" width="${8*s}" height="${11*s}" rx="1.4" fill="#7a532f"/></g>`;
  },
  school(x, y, s) { // 校舎+時計
    return `<g><rect x="${x-22*s}" y="${y-24*s}" width="${44*s}" height="${24*s}" rx="${2.4*s}" fill="#e8ddc8"/><rect x="${x-6*s}" y="${y-30*s}" width="${12*s}" height="${8*s}" rx="1.6" fill="#d8c9ac"/><circle cx="${x}" cy="${y-26*s}" r="${2.6*s}" fill="#fff" stroke="#0047ab" stroke-width="1.2"/><g fill="#9dc1f5"><rect x="${x-18*s}" y="${y-19*s}" width="${6*s}" height="${6*s}" rx="1"/><rect x="${x-3*s}" y="${y-19*s}" width="${6*s}" height="${6*s}" rx="1"/><rect x="${x+12*s}" y="${y-19*s}" width="${6*s}" height="${6*s}" rx="1"/></g><rect x="${x-4*s}" y="${y-9*s}" width="${8*s}" height="${9*s}" rx="1.4" fill="#7a532f"/></g>`;
  },
  crowd(x, y, s, c) {
    const col = c || "#20264a";
    let out = `<g fill="${col}">`;
    for (let i = 0; i < 5; i++) {
      const cx = x + i * 17 * s;
      out += `<path d="M${cx} ${y}c1-${7*s} ${4*s}-${11*s} ${8*s}-${11*s}s${7*s} ${4*s} ${8*s} ${11*s}z"/>`;
    }
    out += `</g><path d="${[0,1,2,3,4].map(i=>`M${x+6*s+i*17*s} ${y-13*s}l${1*s}-${4*s}`).join("")}" stroke="${col}" stroke-width="${3*s}" stroke-linecap="round"/>`;
    return out;
  },
  tangle(x, y, s) {
    return `<g><path d="M${x-20*s} ${y+4*s}c-3-8 4-14 10-11 1-6 10-8 14-3 6-4 14 1 12 8 6 1 8 9 3 13 2 6-5 11-10 8-3 5-11 5-14 0-6 3-13-2-11-8-3-1-5-4-4-7z" fill="#2c3d6e" transform="translate(${20*s} ${-4*s}) scale(${s}) translate(${-20} ${4})"/><path d="M${x-12*s} ${y-6*s}c4-3 8-2 10 1 3-3 8-2 9 2 4-1 7 3 5 7-3 5-9 3-11 0-2 3-8 4-10 0-3 1-6-2-5-5" stroke="#5a75b8" stroke-width="${1.8*s}" fill="none" stroke-linecap="round"/></g>`;
  },
  qmark(x, y, s, c) {
    const col = c || "#0047ab";
    return `<g><path d="M${x-5*s} ${y-4*s}a${5.5*s} ${5.5*s} 0 1 1 ${7.5*s} ${5*s}c-2 .9-3 2-3 4" stroke="${col}" stroke-width="${2.6*s}" fill="none" stroke-linecap="round"/><circle cx="${x-0.5*s}" cy="${y+9*s}" r="${1.6*s}" fill="${col}"/></g>`;
  },
  exclaim(x, y, s, c) {
    const col = c || "#ffd75e";
    return `<g><rect x="${x-1.6*s}" y="${y-10*s}" width="${3.2*s}" height="${12*s}" rx="${1.6*s}" fill="${col}"/><circle cx="${x}" cy="${y+6*s}" r="${1.9*s}" fill="${col}"/></g>`;
  },
  laughs(x, y, s) {
    return `<g stroke="#ffd75e" stroke-width="${2.4*s}" stroke-linecap="round"><path d="M${x} ${y}l${5*s} ${2*s}M${x-2*s} ${y+10*s}h${6*s}M${x+2*s} ${y+20*s}l${5*s}-${2*s}"/></g>`;
  },
  boos(x, y, s) {
    return `<g stroke="#7d95bd" stroke-width="${2.4*s}" stroke-linecap="round"><path d="M${x} ${y}l${4*s} ${3*s}M${x+2*s} ${y+10*s}l${4*s}-${1*s}M${x} ${y+19*s}l${4*s}-${4*s}"/></g>`;
  },
  zz(x, y, s) { // 眠り（幾何形のジグザグで表現・文字ではない装飾）
    return `<g stroke="#9db8e8" stroke-width="${2*s}" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M${x} ${y}h${6*s}l-${6*s} ${6*s}h${6*s}"/><path d="M${x+11*s} ${y-8*s}h${4.4*s}l-${4.4*s} ${4.4*s}h${4.4*s}" opacity=".8"/></g>`;
  },
  tv(x, y, s) {
    return `<g><rect x="${x-16*s}" y="${y-12*s}" width="${32*s}" height="${22*s}" rx="${3*s}" fill="#2b3a55"/><rect x="${x-13.4*s}" y="${y-9.4*s}" width="${26.8*s}" height="${16.8*s}" rx="${1.8*s}" fill="#9dc1f5"/><circle cx="${x-4*s}" cy="${y-3*s}" r="${3*s}" fill="${SKIN}"/><path d="M${x-8*s} ${y+4*s}c1-3 3-4.4 5.5-4.4 2 0 3.6 1 4.5 3" fill="#e05555"/><path d="M${x+4*s} ${y-6*s}l${5*s}-${2*s}" stroke="#c98d4e" stroke-width="${2*s}" stroke-linecap="round"/><path d="M${x-4*s} ${y+12*s}l-${3*s} ${4*s}M${x+4*s} ${y+12*s}l${3*s} ${4*s}" stroke="#2b3a55" stroke-width="${2*s}" stroke-linecap="round"/></g>`;
  },
  board(x, y, s) {
    return `<g><rect x="${x-16*s}" y="${y-12*s}" width="${32*s}" height="${24*s}" rx="${2*s}" fill="#fdfaf2" stroke="#b98a5a" stroke-width="${2.4*s}"/><path d="M${x-11*s} ${y-6*s}h${22*s}M${x-11*s} ${y}h${22*s}M${x-11*s} ${y+6*s}h${14*s}" stroke="#b9c3d6" stroke-width="${1.8*s}" stroke-linecap="round"/><circle cx="${x+10*s}" cy="${y-8.4*s}" r="${1.6*s}" fill="#e05555"/></g>`;
  },
  mud(x, y, s) {
    return `<g fill="#8a6134"><ellipse cx="${x}" cy="${y}" rx="${5*s}" ry="${2*s}"/><ellipse cx="${x+9*s}" cy="${y+3*s}" rx="${3.4*s}" ry="${1.5*s}"/><circle cx="${x-6*s}" cy="${y+3*s}" r="${1.4*s}"/></g>`;
  },
  shirt(x, y, s, c) {
    const col = c || "#fff";
    return `<g><path d="M${x-9*s} ${y-8*s}l${4*s}-${3*s}h${10*s}l${4*s} ${3*s}-${2.6*s} ${4*s}-${1.8*s}-${1.4*s}v${11*s}h-${9.2*s}v-${11*s}l-${1.8*s} ${1.4*s}z" fill="${col}" stroke="#c3cddf" stroke-width="1"/></g>`;
  },
  mirror(x, y, s) {
    return `<g><ellipse cx="${x}" cy="${y}" rx="${9*s}" ry="${12*s}" fill="#cfe8ff" stroke="#8a5f36" stroke-width="${2.6*s}"/><path d="M${x-3*s} ${y-6*s}l-${2*s} ${5*s}" stroke="#fff" stroke-width="${1.8*s}" stroke-linecap="round"/><path d="M${x} ${y+12*s}v${5*s}M${x-4*s} ${y+17*s}h${8*s}" stroke="#8a5f36" stroke-width="${2.2*s}" stroke-linecap="round"/></g>`;
  },
  footprints(x, y, s) {
    return `<g><g fill="#f4f7fc"><ellipse cx="${x}" cy="${y}" rx="${4.4*s}" ry="${7*s}" transform="rotate(-18 ${x} ${y})"/><ellipse cx="${x+12*s}" cy="${y-9*s}" rx="${4.4*s}" ry="${7*s}" transform="rotate(12 ${x+12*s} ${y-9*s})"/></g><g fill="#ff9d9d"><ellipse cx="${x+25*s}" cy="${y-17*s}" rx="${4.4*s}" ry="${7*s}" transform="rotate(-12 ${x+25*s} ${y-17*s})"/><ellipse cx="${x+38*s}" cy="${y-25*s}" rx="${4.4*s}" ry="${7*s}" transform="rotate(14 ${x+38*s} ${y-25*s})"/></g></g>`;
  },
  sakura(x, y, s) {
    return `<g fill="#f7b2c4"><circle cx="${x}" cy="${y}" r="${2*s}"/><circle cx="${x+10*s}" cy="${y+8*s}" r="${1.6*s}"/><circle cx="${x-8*s}" cy="${y+12*s}" r="${1.5*s}"/><circle cx="${x+4*s}" cy="${y+20*s}" r="${1.4*s}"/></g>`;
  },
  ticket(x, y, s) {
    return `<g transform="rotate(-8 ${x} ${y})"><rect x="${x-12*s}" y="${y-7*s}" width="${24*s}" height="${14*s}" rx="${2*s}" fill="#ffd75e"/><path d="M${x+3*s} ${y-7*s}v${14*s}" stroke="#e8b23d" stroke-width="${1.4*s}" stroke-dasharray="2.4 2.4"/><path d="M${x-8*s} ${y-2*s}h${8*s}M${x-8*s} ${y+2*s}h${6*s}" stroke="#a5772a" stroke-width="${1.5*s}" stroke-linecap="round"/></g>`;
  },
  coin(x, y, s) {
    return `<g><circle cx="${x}" cy="${y}" r="${7*s}" fill="#ffd75e" stroke="#e8b23d" stroke-width="${1.6*s}"/><circle cx="${x}" cy="${y}" r="${2.2*s}" fill="none" stroke="#e8b23d" stroke-width="${1.4*s}"/></g>`;
  },
  guitar(x, y, s) {
    return `<g transform="rotate(10 ${x} ${y})"><rect x="${x-2.3*s}" y="${y-40*s}" width="${4.6*s}" height="${40*s}" rx="${2.3*s}" fill="#8a5a36"/><rect x="${x-5*s}" y="${y-44*s}" width="${10*s}" height="${8*s}" rx="${2.4*s}" fill="#2b2118"/><path d="M${x+0.5*s} ${y-8*s}c-${10*s}-1-${17*s} ${5*s}-${17*s} ${14*s} 0 ${10*s} ${8*s} ${17*s} ${17*s} ${17*s} ${8*s} 0 ${13*s}-${5*s} ${13*s}-${12*s} 0-${4*s}-2-${6.5*s}-${4*s}-${9*s}-1.8-2.2-3.5-4-4-7-.3-2-2-2.8-5-3z" fill="#e05555"/><circle cx="${x}" cy="${y+10*s}" r="${5*s}" fill="#1c1030"/></g>`;
  },
  cap(x, y, s, c) {
    const col = c || "#0a3f8f";
    return `<g><path d="M${x-9*s} ${y}c0-6 4.5-9.5 9-9.5s9 3.5 9 9.5z" fill="${col}"/><path d="M${x-9*s} ${y}h${23*s}" stroke="${col}" stroke-width="${2.6*s}" stroke-linecap="round"/></g>`;
  },
  snowman(x, y, s) {
    return `<g><circle cx="${x}" cy="${y}" r="${7*s}" fill="#fff"/><circle cx="${x}" cy="${y-10*s}" r="${5*s}" fill="#fff"/><circle cx="${x-1.6*s}" cy="${y-11*s}" r=".9" fill="#2b3a55"/><circle cx="${x+1.6*s}" cy="${y-11*s}" r=".9" fill="#2b3a55"/><path d="M${x-4*s} ${y-14.6*s}h${8*s}" stroke="#e05555" stroke-width="${2.2*s}" stroke-linecap="round"/></g>`;
  },
  river(x, y, s) {
    return `<g><path d="M${x-24*s} ${y}q${12*s} ${4*s} ${24*s} 0t${24*s} 0v${8*s}h-${48*s}z" fill="#6ea3e0" opacity=".85"/><path d="M${x-14*s} ${y+3.4*s}q${5*s} ${1.6*s} ${10*s} 0M${x+4*s} ${y+5.4*s}q${5*s} ${1.6*s} ${10*s} 0" stroke="#cfe8ff" stroke-width="${1.4*s}" fill="none" stroke-linecap="round"/></g>`;
  }
};

// ---------- 合成 ----------
function compose(spec) {
  uid = 0;
  const g = id("bg");
  const bg = BGS[spec.bg || "day"](g);
  let body = bg.body;
  if (spec.floor) body += FLOORS[spec.floor];
  for (const it of spec.items || []) body += it;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">\n<defs>${bg.defs}</defs>\n${body}\n</svg>\n`;
}

module.exports = { compose, P, bust, stand, runner, BGS, FLOORS };

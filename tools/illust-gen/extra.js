/* 追加パーツ＋合成の拡張（匠） */
const L = require("./lib.js");
const P = L.P;

P.tree = (x, y, s) => `<g><rect x="${x-2.4*s}" y="${y-16*s}" width="${4.8*s}" height="${16*s}" rx="${2*s}" fill="#8a5f36"/><circle cx="${x}" cy="${y-22*s}" r="${11*s}" fill="#f7b2c4"/><circle cx="${x-8*s}" cy="${y-16*s}" r="${7*s}" fill="#f4a3b8"/><circle cx="${x+8*s}" cy="${y-16*s}" r="${7*s}" fill="#f4a3b8"/></g>`;
P.bike = (x, y, s) => `<g stroke="#2b3a55" stroke-width="${2.4*s}" fill="none"><circle cx="${x-12*s}" cy="${y}" r="${8*s}"/><circle cx="${x+12*s}" cy="${y}" r="${8*s}"/><path d="M${x-12*s} ${y}l${7*s}-${12*s}h${9*s}l${8*s} ${12*s}M${x-5*s} ${y-12*s}l-${4*s}-${3*s}h${6*s}M${x+4*s} ${y-12*s}l-${4*s} ${12*s}"/><path d="M${x+2*s} ${y-16.5*s}h${6*s}" stroke-linecap="round"/></g>`;
P.broom = (x, y, s) => `<g><rect x="${x}" y="${y-26*s}" width="${3*s}" height="${20*s}" rx="${1.5*s}" fill="#8a5f36" transform="rotate(14 ${x} ${y-16*s})"/><path d="M${x-4*s} ${y-7*s}l${10*s} ${2.4*s}-${2*s} ${9*s}c-${4*s} ${1*s}-${8*s}-${1*s}-${10*s}-${4*s}z" fill="#e8b23d"/><path d="M${x-3*s} ${y+2*s}l${1.4*s}-${5*s}M${x+0.6*s} ${y+3.4*s}l${1.4*s}-${5*s}" stroke="#c99223" stroke-width="${1.2*s}"/></g>`;
P.plane = (x, y, s) => `<g fill="#e8edf5"><path d="M${x-14*s} ${y}h${22*s}l${6*s}-${5*s} ${2*s} ${1.4*s}-${4*s} ${5.6*s} ${4*s} ${5.6*s}-${2*s} ${1.4*s}-${6*s}-${5*s}h-${22*s}c-${2*s} 0-${2*s}-${4*s} 0-${4*s}z"/><path d="M${x-2*s} ${y}l-${6*s}-${8*s} ${3.4*s}-.6 ${8*s} ${8.6*s}z"/></g><path d="M${x-22*s} ${y+2*s}h${5*s}M${x-24*s} ${y+6*s}h${6*s}" stroke="#c3cddf" stroke-width="${1.8*s}" stroke-linecap="round"/>`;
P.camera = (x, y, s) => `<g><rect x="${x-13*s}" y="${y-8*s}" width="${26*s}" height="${17*s}" rx="${3*s}" fill="#39445c"/><rect x="${x-4*s}" y="${y-11*s}" width="${9*s}" height="${4*s}" rx="${1.4*s}" fill="#39445c"/><circle cx="${x}" cy="${y+0.5*s}" r="${5.6*s}" fill="#9dc1f5" stroke="#22304a" stroke-width="${1.6*s}"/><circle cx="${x+1.8*s}" cy="${y-1.4*s}" r="${1.4*s}" fill="#fff" opacity=".9"/><circle cx="${x+9*s}" cy="${y-4.4*s}" r="${1.3*s}" fill="#ffd75e"/></g>`;
P.scissors = (x, y, s) => `<g stroke="#0047ab" stroke-width="${2.6*s}" fill="none" stroke-linecap="round"><circle cx="${x-5*s}" cy="${y+8*s}" r="${4.4*s}"/><circle cx="${x+7*s}" cy="${y+8*s}" r="${4.4*s}"/><path d="M${x-2.4*s} ${y+4.6*s}l${9*s}-${14*s}M${x+4.4*s} ${y+4.6*s}l-${9*s}-${14*s}"/></g>`;
P.amp = (x, y, s) => `<g><rect x="${x-13*s}" y="${y-12*s}" width="${26*s}" height="${24*s}" rx="${3*s}" fill="#3a3f55"/><rect x="${x-10.4*s}" y="${y-9*s}" width="${21*s}" height="${10*s}" rx="${1.6*s}" fill="#23273a"/><circle cx="${x-7*s}" cy="${y+6*s}" r="${2.2*s}" fill="#ffd75e"/><circle cx="${x}" cy="${y+6*s}" r="${2.2*s}" fill="#c9d3e4"/><circle cx="${x+7*s}" cy="${y+6*s}" r="${2.2*s}" fill="#c9d3e4"/></g>`;
P.bowl = (x, y, s) => `<g><path d="M${x-13*s} ${y-3*s}h${26*s}c0 ${7*s}-${5*s} ${11*s}-${13*s} ${11*s}s-${13*s}-${4*s}-${13*s}-${11*s}z" fill="#e8edf5"/><path d="M${x-11*s} ${y-3*s}c${2*s}-${5*s} ${7*s}-${7*s} ${11*s}-${7*s}s${9*s} ${2*s} ${11*s} ${7*s}z" fill="#c98d4e"/><path d="M${x-3*s} ${y-14*s}c-2 2.4-2 4 0 6.4M${x+4*s} ${y-15*s}c-2 2.4-2 4 0 6.4" stroke="#e8ddc8" stroke-width="${1.8*s}" fill="none" stroke-linecap="round"/></g>`;
P.cup = (x, y, s) => `<g><path d="M${x-7*s} ${y-8*s}h${14*s}l-${1.6*s} ${16*s}h-${10.8*s}z" fill="#e05555"/><path d="M${x-7*s} ${y-4.4*s}h${14*s}" stroke="#fff" stroke-width="${2*s}" opacity=".6"/><path d="M${x-2.6*s} ${y-15*s}c-1.8 2.2-1.8 3.6 0 5.8M${x+3*s} ${y-16*s}c-1.8 2.2-1.8 3.6 0 5.8" stroke="#c3cddf" stroke-width="${1.7*s}" fill="none" stroke-linecap="round"/></g>`;
P.drum = (x, y, s) => `<g><ellipse cx="${x}" cy="${y-10*s}" rx="${12*s}" ry="${4.6*s}" fill="#e8edf5"/><path d="M${x-12*s} ${y-10*s}v${12*s}c0 ${2.6*s} ${5.4*s} ${4.6*s} ${12*s} ${4.6*s}s${12*s}-${2*s} ${12*s}-${4.6*s}v-${12*s}" fill="#e05555"/><path d="M${x-12*s} ${y-8*s}l${8*s} ${8*s} ${8*s}-${8*s} ${8*s} ${8*s}" stroke="#ffd75e" stroke-width="${1.8*s}" fill="none"/><path d="M${x-6*s} ${y-22*s}l${5*s} ${9*s}M${x+9*s} ${y-21*s}l-${4*s} ${8.6*s}" stroke="#8a5f36" stroke-width="${2*s}" stroke-linecap="round"/><circle cx="${x-6.6*s}" cy="${y-23*s}" r="${2*s}" fill="#8a5f36"/><circle cx="${x+9.6*s}" cy="${y-22*s}" r="${2*s}" fill="#8a5f36"/></g>`;
P.soccer = (x, y, s) => `<g><circle cx="${x}" cy="${y}" r="${8*s}" fill="#fff" stroke="#c3cddf"/><path d="M${x} ${y-3.4*s}l${3.2*s} ${2.3*s}-${1.2*s} ${3.8*s}h-${4*s}l-${1.2*s}-${3.8*s}z" fill="#2b3a55"/><path d="M${x} ${y-3.4*s}v-${4.4*s}M${x+3.2*s} ${y-1.1*s}l${4*s}-${1.4*s}M${x-3.2*s} ${y-1.1*s}l-${4*s}-${1.4*s}M${x+2*s} ${y+2.7*s}l${2.6*s} ${3.4*s}M${x-2*s} ${y+2.7*s}l-${2.6*s} ${3.4*s}" stroke="#2b3a55" stroke-width="${1.3*s}"/></g>`;
P.case = (x, y, s) => `<g><rect x="${x-11*s}" y="${y-14*s}" width="${22*s}" height="${18*s}" rx="${2.6*s}" fill="#c98d4e"/><path d="M${x-11*s} ${y-7*s}h${22*s}" stroke="#a5713a" stroke-width="${1.6*s}"/><path d="M${x-4*s} ${y-14*s}v-${3.4*s}a${2*s} ${2*s} 0 0 1 ${2*s}-${2*s}h${4*s}a${2*s} ${2*s} 0 0 1 ${2*s} ${2*s}v${3.4*s}" stroke="#a5713a" stroke-width="${2*s}" fill="none"/></g>`;
P.chalks = (x, y, s) => `<g><rect x="${x}" y="${y}" width="${11*s}" height="${3.4*s}" rx="${1.7*s}" fill="#fff" transform="rotate(-8 ${x} ${y})"/><rect x="${x+2*s}" y="${y+5*s}" width="${11*s}" height="${3.4*s}" rx="${1.7*s}" fill="#ffd0d0" transform="rotate(4 ${x+2*s} ${y+5*s})"/><rect x="${x-1*s}" y="${y+10*s}" width="${11*s}" height="${3.4*s}" rx="${1.7*s}" fill="#cfe3ff" transform="rotate(-3 ${x-1*s} ${y+10*s})"/></g>`;
P.tangle = (x, y, s) => `<g><ellipse cx="${x}" cy="${y}" rx="${17*s}" ry="${11*s}" fill="#2c3d6e"/><path d="M${x-10*s} ${y-4*s}c${3.4*s}-${2.6*s} ${6.8*s}-${1.7*s} ${8.5*s} ${0.9*s}c${2.6*s}-${2.6*s} ${6.8*s}-${1.7*s} ${7.7*s} ${1.7*s}c${3.4*s}-${0.9*s} ${6*s} ${2.6*s} ${4.3*s} ${6*s}" stroke="#5a75b8" stroke-width="${1.8*s}" fill="none" stroke-linecap="round"/></g>`;

// guitar 色指定版で上書き
P.guitar = (x, y, s, c) => {
  const col = c || "#e05555";
  return `<g transform="rotate(10 ${x} ${y})"><rect x="${x-2.3*s}" y="${y-40*s}" width="${4.6*s}" height="${40*s}" rx="${2.3*s}" fill="#8a5a36"/><rect x="${x-5*s}" y="${y-44*s}" width="${10*s}" height="${8*s}" rx="${2.4*s}" fill="#2b2118"/><path d="M${x+0.5*s} ${y-8*s}c-${10*s}-1-${17*s} ${5*s}-${17*s} ${14*s} 0 ${10*s} ${8*s} ${17*s} ${17*s} ${17*s} ${8*s} 0 ${13*s}-${5*s} ${13*s}-${12*s} 0-${4*s}-2-${6.5*s}-${4*s}-${9*s}-1.8-2.2-3.5-4-4-7-.3-2-2-2.8-5-3z" fill="${col}"/><circle cx="${x}" cy="${y+10*s}" r="${5*s}" fill="#1c1030"/><path d="M${x-1*s} ${y-40*s}v${46*s}M${x+1.4*s} ${y-40*s}v${46*s}" stroke="#e8d9b5" stroke-width=".7"/></g>`;
};

// compose に under（床より下に描く層）対応を追加
const { BGS, FLOORS } = L;
let uid2 = 0;
function compose2(spec) {
  const g = "bg" + (++uid2);
  const bg = BGS[spec.bg || "day"](g);
  let body = bg.body;
  for (const it of spec.under || []) body += it;
  if (spec.floor) body += FLOORS[spec.floor];
  for (const it of spec.items || []) body += it;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">\n<defs>${bg.defs}</defs>\n${body}\n</svg>\n`;
}
module.exports = { compose: compose2, P, bust: L.bust, stand: L.stand, runner: L.runner };
// シルクハット（手品用）
require("./lib.js").P.tophat = (x, y, s) => `<g><ellipse cx="${x}" cy="${y}" rx="${13*s}" ry="${4*s}" fill="#2b3450"/><path d="M${x-8*s} ${y}v-${14*s}a${2*s} ${2*s} 0 0 1 ${2*s}-${2*s}h${12*s}a${2*s} ${2*s} 0 0 1 ${2*s} ${2*s}v${14*s}" fill="#3a4666"/><path d="M${x-8*s} ${y-5*s}h${16*s}" stroke="#e05555" stroke-width="${2.6*s}"/></g>`;

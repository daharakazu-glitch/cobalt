/* 例文イラスト一括生成: node tools/illust-gen/build.js （リポジトリ直下で実行）
 * レシピ（recipes*.js）を編集して再実行すると assets/illust/ を上書き生成する。
 */
const fs = require("fs"), path = require("path");
const { compose } = require("./extra.js");
const all = { ...require("./recipes19.js"), ...require("./recipes1117.js") };
const REPO = path.join(__dirname, "..", "..");
let n = 0;
for (const [ch, qs] of Object.entries(all)) {
  const dir = path.join(REPO, "assets/illust", ch);
  fs.mkdirSync(dir, { recursive: true });
  for (const [qid, spec] of Object.entries(qs)) {
    fs.writeFileSync(path.join(dir, qid + ".svg"), compose(spec));
    n++;
  }
}
console.log("generated:", n);

const plantuml = require("node-plantuml");
const fs = require("fs");
const glob = require("glob");

// puファイルから.pngを生成する
function generatePngFromPu(puFileNameWithoutExt) {
  fs.readFile(puFileNameWithoutExt + ".pu", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    const gen = plantuml.generate(data);
    gen.out.pipe(fs.createWriteStream(puFileNameWithoutExt + ".png"));
  });
}

// 拡張子を取り除く
function trimExt(fileName) {
  return fileName.split(".").slice(0, -1).join(".");
}

function main() {
  glob("**/*", (err, fileNames) => {
    fileNames.forEach((fileName) => {
      if (fileName.endsWith(".pu")) {
        const fileWithoutExt = trimExt(fileName);
        //すでにpngが存在する場合、png作成処理スキップ
        if (!fs.existsSync(fileWithoutExt + ".png")) {
          generatePngFromPu(fileWithoutExt);
        }
      }
    });
  });
}
main();

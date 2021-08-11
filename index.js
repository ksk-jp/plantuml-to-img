const plantuml = require("node-plantuml");
const fs = require("fs");

function generatePng(puFileName) {
  fs.readFile(puFileName + ".pu", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    const gen = plantuml.generate(data);
    gen.out.pipe(fs.createWriteStream(puFileName + ".png"));
  });
}
generatePng("sample/sample");

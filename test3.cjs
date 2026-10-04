const fs = require("fs");
const text = fs.readFileSync("src/data/sundayPlannerTests.ts", "utf8");

const matches = text.match(/sundayBatchPaperCache\.set\((.*?)\)/g);
console.log(matches);

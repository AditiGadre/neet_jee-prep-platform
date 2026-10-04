const fs = require("fs");
const text = fs.readFileSync("src/data/physicsQuestions.ts", "utf8");

const kws = ["Motion in One Dimension", "Motion in a Plane", "Motion in a Straight Line", "Kinematics", "Vectors"];

let matchCount = 0;
for (const line of text.split("\n")) {
  for (const kw of kws) {
    if (line.toLowerCase().includes(kw.toLowerCase())) {
      matchCount++;
      break;
    }
  }
}
console.log("Matches:", matchCount);

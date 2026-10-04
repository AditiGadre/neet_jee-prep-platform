const fs = require("fs");
const text = fs.readFileSync("src/data/sundayPlannerTests.ts", "utf8");

const pMatches = text.match(/export const OFFICIAL_PHYSICS_UNITS = \[(.*?)\];/s);
if (pMatches) console.log("PHYSICS UNITS:", pMatches[1].trim());

const pKeywords1 = text.match(/code: 'CW-01'.*?physicsKeywords: \[(.*?)\]/s);
if (pKeywords1) console.log("CW-01 Physics Keywords:", pKeywords1[1].trim());

const pKeywords2 = text.match(/code: 'CW-02'.*?physicsKeywords: \[(.*?)\]/s);
if (pKeywords2) console.log("CW-02 Physics Keywords:", pKeywords2[1].trim());

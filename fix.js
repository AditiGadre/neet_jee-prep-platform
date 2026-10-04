
const fs = require('fs');
let content = fs.readFileSync('src/data/sundayPlannerTests.ts', 'utf8');
content = content.replace(/let i = \\(t\\.code\\.split.*?;/, 'let i = (t.code.split(\\'\\').reduce((a, b) => a + b.charCodeAt(0), 0) * 7 + picked.length) % matched.length;');
fs.writeFileSync('src/data/sundayPlannerTests.ts', content);
console.log('Fixed');


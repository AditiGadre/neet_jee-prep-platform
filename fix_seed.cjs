
const fs = require('fs');
let code = fs.readFileSync('src/data/sundayPlannerTests.ts', 'utf8');

// Replace t.code with t.id for random seeding to ensure uniqueness across batches
code = code.replace(/t\.code\.split/g, 't.id.split');

fs.writeFileSync('src/data/sundayPlannerTests.ts', code);
console.log('Fixed seeds in sundayPlannerTests.ts');


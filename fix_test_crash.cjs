
const fs = require('fs');
let code = fs.readFileSync('src/components/TestSeriesSection.tsx', 'utf8');

code = code.replace(
  /\{currentDisplayTests\.map\(\(mock: SundayPlannerTest\) => \{\\n              const isLive = isSundayToday;\\n              const paperLookupKey = mock\.id;/g,
  '{currentDisplayTests.map((mock: SundayPlannerTest) => {\n              const isLive = isSundayToday;\n              const paperLookupKey = mock.id;'
);

fs.writeFileSync('src/components/TestSeriesSection.tsx', code);
console.log('Fixed literal newlines');


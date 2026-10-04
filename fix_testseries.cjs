const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'TestSeriesSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the buggy fallback logic in TestSeriesSection.tsx
// Instead of falling back to plannerTest.code (which is the Dropper track), we should just stick with paperLookupKey.

content = content.replace(/let customPaper = await fetchAuthoritativePaper\(paperLookupKey, true\);\s*if \(!customPaper && paperLookupKey !== plannerTest\.code\) \{\s*customPaper = await fetchAuthoritativePaper\(plannerTest\.code, true\);\s*\}/g, 
  "let customPaper = await fetchAuthoritativePaper(paperLookupKey, true);");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Fixed TestSeriesSection.tsx fallbacks.");

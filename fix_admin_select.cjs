
const fs = require('fs');
let code = fs.readFileSync('src/components/AdminSection.tsx', 'utf8');

code = code.replace(/value=\\{selectedPlannerPreset\\.toUpperCase\\(\\)\\}/g, 'value={selectedPlannerPreset}');

fs.writeFileSync('src/components/AdminSection.tsx', code);
console.log('Fixed select value binding');


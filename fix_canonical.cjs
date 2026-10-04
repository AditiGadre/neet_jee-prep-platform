
const fs = require('fs');
let code = fs.readFileSync('src/services/authoritativeCloudService.ts', 'utf8');

code = code.replace(/export function getCanonicalPaperCode\\(paperCode: string\\): string \\{[\\s\\S]*?^\\}/m, 'export function getCanonicalPaperCode(paperCode: string): string {\n  if (!paperCode) return \'CWT-01\';\n  return paperCode.toUpperCase().trim();\n}');

fs.writeFileSync('src/services/authoritativeCloudService.ts', code);
console.log('Fixed getCanonicalPaperCode');



import fs from 'fs';
const file = 'src/components/AdminSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /const existingIds = new Set\(sundayQuestions\.map\(q => q\.id\)\);\s*let candidates = bank\.filter\(q => !existingIds\.has\(q\.id\) && q\.questionText !== currentQ\.questionText\);/g,
  'const existingIds = new Set(sundayQuestions.map(q => q.id));\n' +
  '      const bannedStr = localStorage.getItem(\'agy_banned_questions\') || \'[]\';\n' +
  '      const banned = new Set(JSON.parse(bannedStr));\n' +
  '      let candidates = bank.filter(q => !existingIds.has(q.id) && !banned.has(q.id) && q.questionText !== currentQ.questionText);'
);

content = content.replace(
  /const existingIds = new Set\(sundayQuestions\.map\(q => q\.id\)\);\s*const candidates = bank\.filter\(q => !existingIds\.has\(q\.id\) && q\.questionText !== currentQ\.questionText\);/g,
  'const existingIds = new Set(sundayQuestions.map(q => q.id));\n' +
  '      const bannedStr = localStorage.getItem(\'agy_banned_questions\') || \'[]\';\n' +
  '      const banned = new Set(JSON.parse(bannedStr));\n' +
  '      const candidates = bank.filter(q => !existingIds.has(q.id) && !banned.has(q.id) && q.questionText !== currentQ.questionText);'
);

fs.writeFileSync(file, content);
console.log('Fixed Swap Filters');


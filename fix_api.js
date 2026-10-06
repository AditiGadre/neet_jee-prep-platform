
import fs from 'fs';
const file = 'api/sunday-paper.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('&& parsed.questions.length === 180', '');

fs.writeFileSync(file, content);


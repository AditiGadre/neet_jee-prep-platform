import fs from 'fs';
const file = 'api/sunday-paper.ts';
let content = fs.readFileSync(file, 'utf8');

const configExport = 
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '25mb',
    },
  },
};
;

if (!content.includes('export const config')) {
  content = content + '\n' + configExport;
  fs.writeFileSync(file, content);
}
console.log('Done');

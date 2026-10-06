
import fs from 'fs';
const file = 'src/components/AdminSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/setActionSuccessBanner\(.*Question # deleted!\\);/g, 'setActionSuccessBanner(Question # deleted!);');
content = content.replace(/setActionSuccessBanner\(.*Question # swapped specifically!\\);/g, 'setActionSuccessBanner(Question # swapped specifically!);');
content = content.replace(/setActionSuccessBanner\(.*Question # swapped!\\);/g, 'setActionSuccessBanner(Question # swapped!);');
content = content.replace(/setActionSuccessBanner\(.*Option .* set as key.*\\);/g, 'setActionSuccessBanner(Option  set as key for Q#!);');


fs.writeFileSync(file, content);
console.log('Fixed Syntax');


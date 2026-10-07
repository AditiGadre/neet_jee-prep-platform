const fs = require('fs');
const text = fs.readFileSync('src/components/AdminSection.tsx', 'utf-8');
const search = 'className={p-2 rounded-lg border }';
const replace = 'className={p-2 rounded-lg border }';

if (text.includes(search)) {
    console.log('Found it!');
    fs.writeFileSync('src/components/AdminSection.tsx', text.replace(search, replace), 'utf-8');
} else {
    console.log('Not found! Looking for lines containing rounded-lg border');
    const lines = text.split('\\n');
    lines.forEach(l => {
        if (l.includes('rounded-lg border')) console.log(l);
    });
}

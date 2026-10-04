
const fs = require('fs');
let admin = fs.readFileSync('src/components/AdminSection.tsx', 'utf8');
let testSeries = fs.readFileSync('src/components/TestSeriesSection.tsx', 'utf8');

admin = admin.replace(/<option key=\{([^\}]+)\} value=\{[^\}]+\}>/g, (match, keyMatch) => {
  if (match.includes('value={t.code}') || match.includes('11TH') || match.includes('12TH')) {
    return '<option key={' + keyMatch + '} value={t.id}>';
  }
  return match;
});
fs.writeFileSync('src/components/AdminSection.tsx', admin);

testSeries = testSeries.replace(
  /const paperLookupKey = [^;]+;/g,
  'const paperLookupKey = plannerTest.id;'
);
fs.writeFileSync('src/components/TestSeriesSection.tsx', testSeries);
console.log('Fixed');


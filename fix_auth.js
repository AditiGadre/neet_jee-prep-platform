
import fs from 'fs';
const file = 'src/services/authoritativeCloudService.ts';
let content = fs.readFileSync(file, 'utf8');

// Fix the corrupted block
content = content.replace(
  /const qSolImage = updatedFields\.hasOwnProperty\("solutionImage"\) \? updatedFields\.solutionImage : copy\[questionIdx\]\?\.solutionImage;copy\[questionIdx\] = \{\s*\.\.\.copy\[questionIdx\],\s*questionText: formatMathAndFormulas\(qText\),\s*options: qOpts,\s*correctAnswer: qAns,\s*explanation: formatMathAndFormulas\(qExpl\),\s*updatedAt: new Date\(\)\.toISOString\(\),\s*updatedBy: adminUser,\s*version: \(\(copy\[questionIdx\] as any\)\?\.version \|\| 0\) \+ 1\s*\};/,
  'const qSolImage = updatedFields.hasOwnProperty("solutionImage") ? updatedFields.solutionImage : copy[questionIdx]?.solutionImage;\n' +
  '  copy[questionIdx] = {\n' +
  '    ...copy[questionIdx],\n' +
  '    questionText: formatMathAndFormulas(qText),\n' +
  '    options: qOpts,\n' +
  '    correctAnswer: qAns,\n' +
  '    explanation: formatMathAndFormulas(qExpl),\n' +
  '    image: qImage,\n' +
  '    solutionImage: qSolImage,\n' +
  '    updatedAt: new Date().toISOString(),\n' +
  '    updatedBy: adminUser,\n' +
  '    version: ((copy[questionIdx] as any)?.version || 0) + 1\n' +
  '  };'
);

fs.writeFileSync(file, content);
console.log('Fixed');


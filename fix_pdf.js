import fs from "fs";
let content = fs.readFileSync("src/utils/pdfDownloader.ts", "utf8");

// Add to inline solutions
content = content.replace(
  /\$\{formatExplanationParagraphs\(q\.explanation\)\}\s*<\/div>/g,
  `\${formatExplanationParagraphs(q.explanation)}
                \${q.solutionImage ? \`<div style="margin-top: 8px; text-align: center;"><img src="\${q.solutionImage}" style="max-height: 180px; border-radius: 6px;" /></div>\` : ""}
              </div>`
);

// Add to step-by-step solutions
content = content.replace(
  /\$\{q\.explanation \? formatMathAndFormulas\(cleanOcrText\(q\.explanation\)\) : .Verified answer per official NCERT curriculum..\}\s*<\/div>/g,
  `\${q.explanation ? formatMathAndFormulas(cleanOcrText(q.explanation)) : "Verified answer per official NCERT curriculum."}
              </div>
              \${q.solutionImage ? \`<div style="margin-top: 10px; text-align: center;"><img src="\${q.solutionImage}" style="max-height: 200px; border-radius: 6px; border: 1px solid #e2e8f0;" /></div>\` : ""}`
);

fs.writeFileSync("src/utils/pdfDownloader.ts", content);

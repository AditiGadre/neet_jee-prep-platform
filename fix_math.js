const fs = require('fs');
let content = fs.readFileSync('src/utils/mathFormatter.ts', 'utf8');

content = content.replace(/\\n\)/g, '\\n1)'); // wait, it's replaced with just '\n'

// Let's just rewrite the end of the file
const start = content.indexOf('// 8. Auto-format newlines');
if (start !== -1) {
    content = content.substring(0, start);
}

content += // 8. Auto-format newlines for lists and complex question types
  // Add newline before A. B. C. D.
  out = out.replace(/(?:,\\\\s*|\\\\s+)([A-D]\\\\.\\\\s+[A-Za-z])/g, '\\n1');
  // Add newline before (i) (ii) (iii) (iv)
  out = out.replace(/(?:,\\\\s*|\\\\s+)(\\\\((?:i|ii|iii|iv|v|vi)\\\\)\\\\s+[A-Za-z])/gi, '\\n1');
  // Add newline before 1. 2. 3. 4.
  out = out.replace(/(?:,\\\\s*|\\\\s+)([1-4]\\\\.\\\\s+[A-Za-z])/g, '\\n1');
  // Add newline before Statement I, Statement II, etc.
  out = out.replace(/(?:,\\\\s*|\\\\s+)(Statement\\\\s*(?:I|II|III|IV|1|2|3|4):?)/gi, '\\n1');
  // Add newline before Assertion (A): / Reason (R):
  out = out.replace(/(?:,\\\\s*|\\\\s+)(Assertion\\\\s*\\\\([A-Z]\\\\):?|Reason\\\\s*\\\\([A-Z]\\\\):?)/gi, '\\n1');

  out = out.replace(/\\\\n{3,}/g, '\\n\\n');
  return out.trim();
}
;

fs.writeFileSync('src/utils/mathFormatter.ts', content);

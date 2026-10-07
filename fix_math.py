import re

with open('src/utils/mathFormatter.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r"// 8\. Auto-format newlines for lists and complex question types.*?out\.replace\(/\\n\{3,\}/g, '\\n\\n'\);"

new_block = '''// 8. Auto-format newlines for lists and complex question types
  const isMatchColumns = out.toLowerCase().includes('column') || out.toLowerCase().includes('list i');
  
  if (isMatchColumns) {
    // Specifically format Match the Columns so A matches with 1 on the same line
    out = out.replace(/(\\([A-D]\\)\\s+.*?)\\s+(\\((?:p|q|r|s|i|ii|iii|iv|v|vi|1|2|3|4)\\)\\s+.*?)(?=(?:\\n|\\([A-D]\\)|$))/gi, ' \\t\\t ');
    out = out.replace(/(\\([A-D]\\)\\s+.*?)\\s+([1-4]\\.\\s+.*?)(?=(?:\\n|\\([A-D]\\)|$))/gi, ' \\t\\t ');
  }

  // Add newline before A. B. C. D.
  out = out.replace(/(?:,\\s*|\\s+)([A-D]\\.\\s+[A-Za-z])/g, '\\n');
  
  if (!isMatchColumns) {
    // Add newline before (i) (ii) (iii) (iv)
    out = out.replace(/(?:,\\s*|\\s+)(\\((?:i|ii|iii|iv|v|vi)\\)\\s+[A-Za-z])/gi, '\\n');
    // Add newline before 1. 2. 3. 4.
    out = out.replace(/(?:,\\s*|\\s+)([1-4]\\.\\s+[A-Za-z])/g, '\\n');
  }

  // Add newline before Statement I, Statement II, etc.
  out = out.replace(/(?:,\\s*|\\s+)(Statement\\s*(?:I|II|III|IV|1|2|3|4):?)/gi, '\\n');
  // Add newline before Assertion (A): / Reason (R):
  out = out.replace(/(?:,\\s*|\\s+)(Assertion\\s*\\([A-Z]\\):?|Reason\\s*\\([A-Z]\\):?)/gi, '\\n');
  // Add newline before Assertion and Reason when they just use A and R
  out = out.replace(/(?:,\\s*|\\s+)(Assertion\\s*:?|Reason\\s*:?)/gi, '\\n');

  out = out.replace(/\\n{3,}/g, '\\n\\n');'''

def repl(m):
    return new_block

new_content, count = re.subn(pattern, repl, content, flags=re.DOTALL)

if count > 0:
    with open('src/utils/mathFormatter.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated mathFormatter.ts")
else:
    print("Failed to replace in mathFormatter.ts")

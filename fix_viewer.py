import re

with open('src/components/DetailedSolutionViewer.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_logic = '''          // Cap step-by-step solution to exactly 5 lines max per user request
          parsed = parsed.map(s => ({
              ...s,
              lines: s.lines.slice(0, 5)
          }));'''

new_logic = '''          // Group explanation into max 5 visual steps without cutting any content
          parsed = parsed.map(s => {
              if (s.lines.length <= 5) return s;
              
              // If more than 5 lines, compress them into 5 chunks 
              const chunks = ['', '', '', '', ''];
              const chunkSize = Math.ceil(s.lines.length / 5);
              for (let i = 0; i < s.lines.length; i++) {
                  const chunkIndex = Math.min(4, Math.floor(i / chunkSize));
                  if (chunks[chunkIndex]) chunks[chunkIndex] += ' ';
                  chunks[chunkIndex] += s.lines[i];
              }
              return { ...s, lines: chunks.filter(Boolean) };
          });'''

code = code.replace(old_logic, new_logic)

with open('src/components/DetailedSolutionViewer.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

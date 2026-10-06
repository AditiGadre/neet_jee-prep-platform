with open('src/utils/mathFormatter.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = r'''  out = out.replace(/[^\S\r\n]+/g, ' ');
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}'''

replacement = r'''  out = out.replace(/[^\S\r\n]+/g, ' ');

  // 8. Auto-format newlines for lists and complex question types
  // Add newline before A. B. C. D.
  out = out.replace(/(?:,\s*|\s+)([A-D]\.\s+[A-Za-z])/g, '\n');
  // Add newline before (i) (ii) (iii) (iv)
  out = out.replace(/(?:,\s*|\s+)(\((?:i|ii|iii|iv|v|vi)\)\s+[A-Za-z])/gi, '\n');
  // Add newline before 1. 2. 3. 4.
  out = out.replace(/(?:,\s*|\s+)([1-4]\.\s+[A-Za-z])/g, '\n');
  // Add newline before Statement I, Statement II, etc.
  out = out.replace(/(?:,\s*|\s+)(Statement\s*(?:I|II|III|IV|1|2|3|4):?)/gi, '\n');
  // Add newline before Assertion (A): / Reason (R):
  out = out.replace(/(?:,\s*|\s+)(Assertion\s*\([A-Z]\):?|Reason\s*\([A-Z]\):?)/gi, '\n');

  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}'''

content = content.replace(target, replacement)

with open('src/utils/mathFormatter.ts', 'w', encoding='utf-8') as f:
    f.write(content)

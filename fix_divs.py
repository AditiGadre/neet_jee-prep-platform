import re
with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

div_starts = len(re.findall(r'<div', code))
div_ends = len(re.findall(r'</div', code))
print(f"<div>: {div_starts}, </div>: {div_ends}")

brace_starts = code.count('{')
brace_ends = code.count('}')
print(f"{{: {brace_starts}, }}: {brace_ends}")

paren_starts = code.count('(')
paren_ends = code.count(')')
print(f"(: {paren_starts}, ): {paren_ends}")

tag_starts = len(re.findall(r'<[a-zA-Z]+', code))
tag_ends = len(re.findall(r'</[a-zA-Z]+', code))
self_closing = len(re.findall(r'/>', code))
print(f"Tags opened: {tag_starts}, closed: {tag_ends}, self_closing: {self_closing}")


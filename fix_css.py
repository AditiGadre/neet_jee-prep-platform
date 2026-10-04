with open('src/index.css', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace('#f1f5f9', '#fafaf9')
code = code.replace('#cbd5e1', '#d6d3d1')
code = code.replace('#94a3b8', '#a8a29e')

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(code)

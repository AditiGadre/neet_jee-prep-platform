with open('src/components/Sidebar.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace('<SubIcon className={w-3 h-3 } />', '<SubIcon className={w-3 h-3 } />')

with open('src/components/Sidebar.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

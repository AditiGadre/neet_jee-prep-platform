import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # 1. Replace all slate- with stone-
    content = re.sub(r'\bslate-', 'stone-', content)
    
    # 2. Replace indigo- with rose-
    content = re.sub(r'\bindigo-', 'rose-', content)
    
    # 3. Replace blue- with amber-
    content = re.sub(r'\bblue-', 'amber-', content)
    
    # 4. Replace gray- with stone-
    content = re.sub(r'\bgray-', 'stone-', content)

    # 5. Replace sky- and cyan- just in case
    content = re.sub(r'\bsky-', 'orange-', content)
    content = re.sub(r'\bcyan-', 'teal-', content)

    # 6. Replace black with stone-950 (but carefully, e.g., text-black, bg-black, border-black)
    content = re.sub(r'\btext-black\b', 'text-stone-900', content)
    content = re.sub(r'\bbg-black\b', 'bg-stone-950', content)
    content = re.sub(r'\bborder-black\b', 'border-stone-900', content)

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

changed = 0
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            if process_file(os.path.join(root, file)):
                changed += 1

print(f"Changed {changed} files.")

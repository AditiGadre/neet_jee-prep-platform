import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Image Prompt onChange
pattern1 = r'onChange=\{e => \{\s*const file = e\.target\.files\?\.\[0\];\s*if \(file\) \{\s*const reader = new FileReader\(\);\s*reader\.onloadend = \(\) => setEditForm\(prev => prev \? \{ \.\.\.prev, image: reader\.result as string \} : null\);\s*reader\.readAsDataURL\(file\);\s*\}\s*\}\}'
replacement1 = '''onChange={async e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      try {
                                        const compressedBase64 = await compressImage(file);
                                        setEditForm(prev => prev ? { ...prev, image: compressedBase64 } : null);
                                      } catch (err) {
                                        alert("Failed to process image.");
                                      }
                                    }
                                  }}'''

content, c1 = re.subn(pattern1, replacement1, content)

# Replace Solution Image onChange
pattern2 = r'onChange=\{e => \{\s*const file = e\.target\.files\?\.\[0\];\s*if \(file\) \{\s*const reader = new FileReader\(\);\s*reader\.onloadend = \(\) => setEditForm\(prev => prev \? \{ \.\.\.prev, solutionImage: reader\.result as string \} : null\);\s*reader\.readAsDataURL\(file\);\s*\}\s*\}\}'
replacement2 = '''onChange={async e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      try {
                                        const compressedBase64 = await compressImage(file);
                                        setEditForm(prev => prev ? { ...prev, solutionImage: compressedBase64 } : null);
                                      } catch (err) {
                                        alert("Failed to process image.");
                                      }
                                    }
                                  }}'''

content, c2 = re.subn(pattern2, replacement2, content)

print("Replaced", c1, c2)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

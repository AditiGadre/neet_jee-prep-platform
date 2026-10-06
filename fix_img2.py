with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_stmt = "import { compressImage } from '../utils/imageCompressor';\n"
if "compressImage" not in content:
    content = content.replace("import { formatMathAndFormulas } from '../utils/mathFormatter';", "import { formatMathAndFormulas } from '../utils/mathFormatter';\n" + import_stmt)

old_input = '''                                  onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => setEditForm(prev => prev ? { ...prev, image: reader.result as string } : null);
                                      reader.readAsDataURL(file);
                                    }
                                  }}'''

new_input = '''                                  onChange={async e => {
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

old_sol = '''                                  onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => setEditForm(prev => prev ? { ...prev, solutionImage: reader.result as string } : null);
                                      reader.readAsDataURL(file);
                                    }
                                  }}'''

new_sol = '''                                  onChange={async e => {
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

# Manual replacement string by string
content = content.replace(old_input, new_input)
content = content.replace(old_sol, new_sol)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done manual replacement")

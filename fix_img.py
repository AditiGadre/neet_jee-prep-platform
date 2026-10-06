import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
import_stmt = "import { compressImage } from '../utils/imageCompressor';\n"
if "import { compressImage }" not in content:
    content = content.replace("import { formatMathAndFormulas } from '../utils/mathFormatter';", "import { formatMathAndFormulas } from '../utils/mathFormatter';\n" + import_stmt)

# Fix Question Prompt Image
old_prompt_input = '''                                  onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => setEditForm(prev => prev ? { ...prev, image: reader.result as string } : null);
                                      reader.readAsDataURL(file);
                                    }
                                  }}'''

new_prompt_input = '''                                  onChange={async e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      try {
                                        const compressedBase64 = await compressImage(file);
                                        setEditForm(prev => prev ? { ...prev, image: compressedBase64 } : null);
                                      } catch (err) {
                                        alert("Failed to process image. Try a smaller file.");
                                      }
                                    }
                                  }}'''

# Fix Solution Image
old_sol_input = '''                                  onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => setEditForm(prev => prev ? { ...prev, solutionImage: reader.result as string } : null);
                                      reader.readAsDataURL(file);
                                    }
                                  }}'''

new_sol_input = '''                                  onChange={async e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      try {
                                        const compressedBase64 = await compressImage(file);
                                        setEditForm(prev => prev ? { ...prev, solutionImage: compressedBase64 } : null);
                                      } catch (err) {
                                        alert("Failed to process solution image. Try a smaller file.");
                                      }
                                    }
                                  }}'''

content, count1 = re.subn(re.escape(old_prompt_input), new_prompt_input, content)
content, count2 = re.subn(re.escape(old_sol_input), new_sol_input, content)

print("Replaced Prompt:", count1, "Sol:", count2)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

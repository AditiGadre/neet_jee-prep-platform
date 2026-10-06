import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_catch = '''        if (result.success && result.paper) {
          setSundayQuestions(result.paper.questions);
          setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);
          
          // Push the edited/new question globally to the custom vault bank
          uploadCustomQuestions([{ ...updatedQ, tags: [...(updatedQ.tags || []), 'Admin Edited'] }], 'Admin Edited');
          
          setActionSuccessBanner(✅ Question # saved successfully!);
          setTimeout(() => setActionSuccessBanner(null), 3000);
        } else {
          setActionSuccessBanner(✅ Question # saved!);
          setTimeout(() => setActionSuccessBanner(null), 3000);
        }
      } catch (err: any) {
        setActionSuccessBanner(✅ Question # saved!);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      }'''

new_catch = '''        if (result.success && result.paper) {
          setSundayQuestions(result.paper.questions);
          setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);
          
          // Push the edited/new question globally to the custom vault bank
          uploadCustomQuestions([{ ...updatedQ, tags: [...(updatedQ.tags || []), 'Admin Edited'] }], 'Admin Edited');
          
          setActionSuccessBanner(✅ Question # saved successfully!);
          setTimeout(() => setActionSuccessBanner(null), 3000);
        } else {
          setActionErrorBanner(❌ Failed to save question #: );
          setTimeout(() => setActionErrorBanner(null), 6000);
        }
      } catch (err: any) {
        setActionErrorBanner(❌ Failed to save question #: );
        setTimeout(() => setActionErrorBanner(null), 6000);
      }'''

content = content.replace(old_catch, new_catch)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed error handling")

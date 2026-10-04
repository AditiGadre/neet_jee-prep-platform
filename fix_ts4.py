with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

import re
text = re.sub(r'import \{[^}]*syncStudentEnrollmentToCloud[^}]*\} from \'../utils/cloudSyncManager\';', 'import { fetchAllStudentsFromCloud, syncStudentEnrollmentToCloud, syncAdminConfigToCloud, getAdminConfigFromCloud } from \'../utils/cloudSyncManager\';', text)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

with open("src/data/mockData.ts", "r", encoding="utf8") as f:
    text2 = f.read()
text2 = text2.replace("category: 'chapter-wise'", "category: 'minor'")

with open("src/data/mockData.ts", "w", encoding="utf8") as f:
    f.write(text2)

print("Fixed imports and mockData TestCategory")

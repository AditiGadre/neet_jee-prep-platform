import re

with open('src/components/CBTTestModal.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

if 'fetchUnlockRequestsFromCloud' not in code:
    import_statement = "import { syncUnlockRequestsToCloud, fetchUnlockRequestsFromCloud } from '../services/authoritativeCloudService';\n"
    code = import_statement + code

old_hook = '''useEffect(() => {
    const handleAccessChanged = (e: any) => {
      if (e.detail?.accessGranted) {
        setIsSundayTestUnlockedByAdmin(true);
      }
    };

    window.addEventListener('neet_admin_access_changed', handleAccessChanged);'''

new_hook = '''useEffect(() => {
    const handleAccessChanged = (e: any) => {
      if (e.detail?.accessGranted) {
        setIsSundayTestUnlockedByAdmin(true);
      }
    };

    fetchUnlockRequestsFromCloud().then(cloudReqs => {
      if (cloudReqs && cloudReqs.length > 0) {
        localStorage.setItem('neet_unlock_requests', JSON.stringify(cloudReqs));
        if (cloudReqs.some(r => r.status === 'approved')) {
          localStorage.setItem('neet_admin_test_access', 'true');
          setIsSundayTestUnlockedByAdmin(true);
        }
      }
    });

    window.addEventListener('neet_admin_access_changed', handleAccessChanged);'''

code = code.replace(old_hook, new_hook)

with open('src/components/CBTTestModal.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

import re

with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_hook = '''useEffect(() => {
    // Initial checks
    setIsAdminAccessGranted(checkAdminAccess());
'''

new_hook = '''useEffect(() => {
    // Initial checks
    setIsAdminAccessGranted(checkAdminAccess());
    
    // Sync with universal cloud admin approvals
    fetchUnlockRequestsFromCloud().then(cloudReqs => {
      if (cloudReqs && cloudReqs.length > 0) {
        localStorage.setItem('neet_unlock_requests', JSON.stringify(cloudReqs));
        const approved = cloudReqs.some(r => r.status === 'approved');
        if (approved) {
          localStorage.setItem('neet_admin_test_access', 'true');
          setIsAdminAccessGranted(true);
        }
      }
    });
'''

code = code.replace(old_hook, new_hook)

with open('src/components/TestSeriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

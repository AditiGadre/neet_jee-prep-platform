import re

with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change checkAdminAccess to getUnlockedTests
old_check = '''  const checkAdminAccess = () => {
    try {
      if (localStorage.getItem('neet_admin_test_access') === 'true') return true;
      const rawReqs = localStorage.getItem('neet_unlock_requests');
      if (rawReqs) {
        const reqs = JSON.parse(rawReqs);
        if (Array.isArray(reqs)) {
          return reqs.some((r: any) => {
            if (r.status !== 'approved') return false;
            const rCode = (r.testCode || '').toUpperCase();
            return (
              rCode === 'ALL SUNDAY TESTS' ||
              (rollNumber && r.rollNumber === rollNumber) ||
              (studentPhone && r.studentPhone === studentPhone)
            );
          });
        }
      }
    } catch {
      return false;
    }
    return false;
  };'''

new_check = '''  const getUnlockedTests = () => {
    try {
      if (localStorage.getItem('neet_admin_test_access') === 'true') return ['ALL'];
      const rawReqs = localStorage.getItem('neet_unlock_requests');
      if (rawReqs) {
        const reqs = JSON.parse(rawReqs);
        if (Array.isArray(reqs)) {
          return reqs
            .filter((r: any) => r.status === 'approved' && (
               (rollNumber && r.rollNumber === rollNumber) || 
               (studentPhone && r.studentPhone === studentPhone) ||
               (!rollNumber && !studentPhone) // fallback if user isn't fully enrolled but has an approved req on this device
            ))
            .map((r: any) => (r.testCode || '').toUpperCase());
        }
      }
    } catch {}
    return [];
  };
  
  const isTestSpecificallyUnlocked = (testCode: string) => {
     const unlocked = getUnlockedTests();
     if (unlocked.includes('ALL') || unlocked.includes('ALL SUNDAY TESTS')) return true;
     return unlocked.includes((testCode || '').toUpperCase());
  };
'''

content = content.replace(old_check, new_check)

with open('src/components/TestSeriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

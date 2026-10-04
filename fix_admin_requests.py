import re

with open('src/components/SuperUserModal.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add imports
if 'fetchUnlockRequestsFromCloud' not in code:
    import_statement = "import { syncUnlockRequestsToCloud, fetchUnlockRequestsFromCloud } from '../services/authoritativeCloudService';\n"
    code = import_statement + code

# Update getStoredUnlockRequests to async
old_get = '''export function getStoredUnlockRequests(): StudentUnlockRequest[] {'''
new_get = '''export async function fetchAllUnlockRequests(): Promise<StudentUnlockRequest[]> {
  const cloud = await fetchUnlockRequestsFromCloud();
  if (cloud && cloud.length > 0) return cloud;
  
  export function getStoredUnlockRequests(): StudentUnlockRequest[] {'''

code = code.replace(old_get, new_get)

# Update state initialization
old_state = "const [unlockRequests, setUnlockRequests] = useState<StudentUnlockRequest[]>(getStoredUnlockRequests());"
new_state = '''const [unlockRequests, setUnlockRequests] = useState<StudentUnlockRequest[]>(getStoredUnlockRequests());
  useEffect(() => {
    fetchAllUnlockRequests().then(reqs => {
      if (reqs && reqs.length > 0) setUnlockRequests(reqs);
    });
  }, []);'''

code = code.replace(old_state, new_state)

# Update handleApproveRequest
old_approve = '''const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'approved' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));'''
new_approve = '''const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'approved' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    syncUnlockRequestsToCloud(updated);'''
code = code.replace(old_approve, new_approve)

# Update handleApproveAllRequests
old_approve_all = '''const updated = unlockRequests.map(r => ({ ...r, status: 'approved' as const }));
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));'''
new_approve_all = '''const updated = unlockRequests.map(r => ({ ...r, status: 'approved' as const }));
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    syncUnlockRequestsToCloud(updated);'''
code = code.replace(old_approve_all, new_approve_all)

# Update handleRejectRequest
old_reject = '''const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'rejected' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));'''
new_reject = '''const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'rejected' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    syncUnlockRequestsToCloud(updated);'''
code = code.replace(old_reject, new_reject)

with open('src/components/SuperUserModal.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
import_target = "syncTopicAllocationsToCloud"
content = content.replace(import_target, f"{import_target},\n  syncUnlockRequestsToCloud,\n  fetchUnlockRequestsFromCloud")

# Update state fetch
state_target = '''  const [unlockRequests, setUnlockRequests] = useState<StudentUnlockRequest[]>(() => {
    try {
      return getStoredUnlockRequests();
    } catch {
      return [];
    }
  });'''
state_new = '''  const [unlockRequests, setUnlockRequests] = useState<StudentUnlockRequest[]>(() => {
    try {
      return getStoredUnlockRequests();
    } catch {
      return [];
    }
  });

  useEffect(() => {
     let isMounted = true;
     const loadReqs = async () => {
         try {
             const reqs = await fetchUnlockRequestsFromCloud();
             if (isMounted && reqs && reqs.length > 0) {
                 setUnlockRequests(reqs);
                 localStorage.setItem('neet_unlock_requests', JSON.stringify(reqs));
             }
         } catch {}
     };
     loadReqs();
     const interval = setInterval(loadReqs, 10000);
     return () => {
        isMounted = false;
        clearInterval(interval);
     };
  }, []);'''
content = content.replace(state_target, state_new)

# Update handleApproveRequest
appr_req = '''const handleApproveRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'approved' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('Request Approved & Unlocked!');
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };'''
appr_req_new = '''const handleApproveRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'approved' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    syncUnlockRequestsToCloud(updated);
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('Request Approved & Unlocked!');
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };'''
content = content.replace(appr_req, appr_req_new)

# Update handleApproveAllRequests
appr_all = '''const handleApproveAllRequests = () => {
    const updated = unlockRequests.map(r => ({ ...r, status: 'approved' as const }));
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    localStorage.setItem('neet_admin_test_access', 'true');
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('✨ All Pending Test Requests Approved & Unlocked Platform-Wide!');
    setTimeout(() => setActionSuccessBanner(null), 3500);
  };'''
appr_all_new = '''const handleApproveAllRequests = () => {
    const updated = unlockRequests.map(r => ({ ...r, status: 'approved' as const }));
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    syncUnlockRequestsToCloud(updated);
    localStorage.setItem('neet_admin_test_access', 'true');
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('✨ All Pending Test Requests Approved & Unlocked Platform-Wide!');
    setTimeout(() => setActionSuccessBanner(null), 3500);
  };'''
content = content.replace(appr_all, appr_all_new)

# Update handleRejectRequest
rej = '''const handleRejectRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'rejected' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    setActionSuccessBanner('Request Rejected.');
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };'''
rej_new = '''const handleRejectRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'rejected' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    syncUnlockRequestsToCloud(updated);
    setActionSuccessBanner('Request Rejected.');
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };'''
content = content.replace(rej, rej_new)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix handleApproveRequest
appr_pattern = r"const handleApproveRequest = \(reqId: string\) => \{.*?(?=const handleApproveAllRequests)"
appr_new = '''const handleApproveRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'approved' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    // Do NOT set neet_admin_test_access globally so students only get the specific test unlocked!
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('Request Approved & Unlocked!');
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };
  
  '''
content = re.sub(appr_pattern, appr_new, content, flags=re.DOTALL)

# Fix Re-Approve button rendering
btn_pattern = r"\) : isRejected \? \(\s*<button\s*onClick=\{.*?handleApproveRequest\(req\.id\).*?\}\s*className=.*?Re-Approve\s*</button>\s*\) : \("
btn_new = r") : isRejected ? ( <span className=\"text-[11px] font-bold text-red-700 font-mono\">✖ Rejected</span> ) : ("
content = re.sub(btn_pattern, btn_new, content, flags=re.DOTALL)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated AdminSection")

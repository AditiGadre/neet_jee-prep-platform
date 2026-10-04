import re

with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

if 'syncUnlockRequestsToCloud' not in code:
    import_statement = "import { syncUnlockRequestsToCloud, fetchUnlockRequestsFromCloud } from '../services/authoritativeCloudService';\n"
    code = import_statement + code

old_request = '''const list = raw ? JSON.parse(raw) : [];
      list.unshift(newRequest);
      localStorage.setItem('neet_unlock_requests', JSON.stringify(list));
      window.dispatchEvent(new Event('neet_unlock_request_sent'));'''
new_request = '''const list = raw ? JSON.parse(raw) : [];
      list.unshift(newRequest);
      localStorage.setItem('neet_unlock_requests', JSON.stringify(list));
      syncUnlockRequestsToCloud(list);
      window.dispatchEvent(new Event('neet_unlock_request_sent'));'''

code = code.replace(old_request, new_request)

with open('src/components/TestSeriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

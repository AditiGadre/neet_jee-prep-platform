import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_pattern = r"const handleImportBackupZIP = async \(e: React.ChangeEvent<HTMLInputElement>\) => \{.*?(?=\s+const handleMockPdfUpload)"

import_new = '''const handleImportBackupZIP = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsSyncingAction(true);
    setActionSuccessBanner(null);
    setActionErrorBanner(null);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = await JSZip.loadAsync(file);
      const dataFile = zip.file('platform_backup.agydata');
      if (!dataFile) {
         alert("Invalid ZIP backup: missing platform_backup.agydata internal file.");
         setIsSyncingAction(false);
         return;
      }
      const text = await dataFile.async('string');
      const data = JSON.parse(text);
      let count = 0;
      let fails = 0;
      
      const entries = Object.entries(data);
      if (entries.length > 30) {
         if(!confirm(`You are about to import ${entries.length} papers. This might take a while. Proceed?`)) {
            setIsSyncingAction(false);
            return;
         }
      }

      for (const [code, paper] of entries) {
         try {
           const res = await commitAuthoritativePaperToCloud(paper as any, (paper as any).revision || 1);
           if (res.success) count++;
           else fails++;
         } catch(e) { fails++; }
      }
      
      const msg = `Successfully imported and deployed ${count} papers to the Master Cloud Database! ${fails > 0 ? '(' + fails + ' failed)' : ''}`;
      alert(msg);
      setActionSuccessBanner(msg);
    } catch(err) {
      alert("Failed to read ZIP backup.");
      setActionErrorBanner("Failed to read ZIP backup.");
    } finally {
      setIsSyncingAction(false);
      if (e.target) e.target.value = '';
    }
  };'''

def repl2(m): return import_new
content = re.sub(import_pattern, repl2, content, flags=re.DOTALL)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Import ZIP updated!")

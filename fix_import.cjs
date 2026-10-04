const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'AdminSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// We need to implement handleImportBackupZIP so it uploads all the papers sequentially.
const importBlock = `
  const handleImportBackupZIP = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      for (const [code, paper] of Object.entries(data)) {
         try {
           const res = await commitAuthoritativePaperToCloud(paper, paper.revision || 1);
           if (res.success) count++;
           else fails++;
         } catch(e) { fails++; }
      }
      
      const msg = \`Successfully imported and deployed \${count} papers to the Master Cloud Database! \${fails > 0 ? '(' + fails + ' failed)' : ''}\`;
      alert(msg);
      setActionSuccessBanner(msg);
      
      if (selectedPlannerPreset && data[selectedPlannerPreset]) {
        // Refresh currently viewed paper
        const fresh = await fetchAuthoritativePaper(selectedPlannerPreset, true);
        if (fresh && Array.isArray(fresh.questions)) {
           setSundayQuestions(fresh.questions);
        }
      }
    } catch(err) {
      alert("Failed to read ZIP backup.");
      setActionErrorBanner("Failed to read ZIP backup.");
    } finally {
      setIsSyncingAction(false);
      if (e.target) e.target.value = '';
    }
  };
`;

const regex = /const handleImportBackupZIP = async \(e: React\.ChangeEvent<HTMLInputElement>\) => \{[\s\S]*?alert\("Failed to read ZIP backup\."\);\s*\}\s*finally\s*\{\s*setIsSyncingAction\(false\);\s*\}\s*\};/m;

if (regex.test(content)) {
    content = content.replace(regex, importBlock.trim());
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Replaced handleImportBackupZIP!");
} else {
    console.log("Could not find handleImportBackupZIP!");
}

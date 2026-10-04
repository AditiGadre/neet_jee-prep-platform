const fs = require("fs");
let text = fs.readFileSync("src/components/AdminSection.tsx", "utf8");

const startIdx = text.indexOf("const handleExportSelectedTrackZIP = async () => {");
const endIdx = text.indexOf("const handleImportBackupZIP", startIdx);

const newFunc = `const handleExportSelectedTrackZIP = async () => {
    setIsSyncingAction(true);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      let targetTests: any[] = [];
      let trackName = "";

      if (exportTrackSelection === 'dropper1') { targetTests = SUNDAY_DROPPER_TRACK1_TESTS; trackName = "Repeater_Track_1"; }
      else if (exportTrackSelection === 'dropper2') { targetTests = SUNDAY_DROPPER_TRACK2_TESTS; trackName = "Repeater_Track_2"; }
      else if (exportTrackSelection === '11th1') { targetTests = SUNDAY_11TH_TRACK1_TESTS; trackName = "11th_Track_1"; }
      else if (exportTrackSelection === '11th2') { targetTests = SUNDAY_11TH_TRACK2_TESTS; trackName = "11th_Track_2"; }
      else if (exportTrackSelection === '12th') { targetTests = PLANNER_12TH_TESTS; trackName = "12th_Track"; }

      const data: Record<string, any> = {};
      
      for (const t of targetTests) {
        if (!t || !t.code) continue;
        try {
          const cloud = await fetchAuthoritativePaper(t.code, true);
          if (cloud) {
             data[t.code] = cloud;
             const textContent = \`Paper: \${t.code}\\nTitle: \${t.title}\\n\\n\` + 
                (cloud.questions || []).map((q: any, i: number) => \`Q\${i+1}. \${q.questionText}\\nAns: \${q.correctAnswer}\\n\`).join('\\n');
             zip.file(\`readable_exports/\${t.code}.txt\`, textContent);
          }
        } catch(e) {}
      }
      
      zip.file('platform_backup.agydata', JSON.stringify(data));
      
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = \`\${trackName}_Backup_\${new Date().toISOString().split('T')[0]}.zip\`;
      a.click();
      URL.revokeObjectURL(url);
      alert(\`Exported \${trackName} as ZIP successfully!\`);
    } catch (e) {
      alert("Failed to export ZIP.");
      console.error(e);
    } finally {
      setIsSyncingAction(false);
    }
  };

  `;

text = text.substring(0, startIdx) + newFunc + text.substring(endIdx);
fs.writeFileSync("src/components/AdminSection.tsx", text, "utf8");
console.log("Successfully replaced the function completely.");

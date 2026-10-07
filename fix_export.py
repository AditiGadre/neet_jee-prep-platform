import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Modify ZIP Export
export_pattern = r"const handleExportSelectedTrackZIP = async \(\) => \{.*?(?=const handleImportBackupZIP)"
export_new = '''const handleExportSelectedTrackZIP = async () => {
    setIsSyncingAction(true);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      let targetTests: any[] = [];
      let trackName = "";

      if (exportTrackSelection === 'dropper1') { targetTests = SUNDAY_DROPPER_TRACK1_TESTS; trackName = "Repeater_Track_1"; }
      else if (exportTrackSelection === 'dropper2') { targetTests = SUNDAY_DROPPER_TRACK2_TESTS; trackName = "Repeater_Track_2"; }
      else if (exportTrackSelection === 'dropper3') { targetTests = SUNDAY_DROPPER_PC_TESTS; trackName = "Repeater_Track_3"; }
      else if (exportTrackSelection === '11th1') { targetTests = SUNDAY_11TH_TRACK1_TESTS; trackName = "11th_Track_1"; }
      else if (exportTrackSelection === '11th2') { targetTests = SUNDAY_11TH_TRACK2_TESTS; trackName = "11th_Track_2"; }
      else if (exportTrackSelection === '12th1') { targetTests = PLANNER_12TH_COMPLETE_TESTS; trackName = "12th_Track_1"; }
      else if (exportTrackSelection === '12th2') { targetTests = PLANNER_12TH_PC_TESTS; trackName = "12th_Track_2"; }

      const data: Record<string, any> = {};
      
      for (const t of targetTests) {
        const fetchCode = (t.code || t.id).toUpperCase();
        try {
          const resp = await fetch(`/api/sunday-paper?action=fetch&code=${encodeURIComponent(fetchCode)}`);
          const json = await resp.json();
          if (json && json.success && json.paper) {
             const cloud = json.paper;
             data[fetchCode] = cloud;
             
             // Create a Microsoft Word compatible HTML string (.doc)
             const wordHtml = `
               <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
               <head>
                 <title>${t.title}</title>
                 <style>
                    body { font-family: 'Calibri', sans-serif; font-size: 12pt; }
                    .question { margin-bottom: 20px; }
                    .options { margin-left: 20px; }
                 </style>
               </head>
               <body>
                 <h1>${t.title} (${fetchCode})</h1>
                 <hr/>
                 ${(cloud.questions || []).map((q: any, i: number) => `
                   <div class="question">
                     <p><strong>Q${i+1}.</strong> ${q.questionText || ''}</p>
                     ${q.image ? `<img src="${q.image}" style="max-height: 250px;" />` : ''}
                     <div class="options">
                        ${(q.options || []).map((opt: string, optIdx: number) => `<p>(${String.fromCharCode(65 + optIdx)}) ${opt}</p>`).join('')}
                     </div>
                     <p><strong>Correct Answer:</strong> Option ${String.fromCharCode(65 + (q.correctAnswer || 0))}</p>
                     ${q.explanation ? `<p><strong>Explanation:</strong> ${q.explanation}</p>` : ''}
                   </div>
                 `).join('')}
               </body>
               </html>
             `;
             
             zip.file(`readable_exports/${fetchCode}.doc`, wordHtml);
          }
        } catch(e) {}
      }
      
      zip.file('platform_backup.agydata', JSON.stringify(data));
      
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${trackName}_Backup_Export.zip`;
      a.click();
      URL.revokeObjectURL(url);
      alert(`Exported ${trackName} as ZIP (with Word docs) successfully!`);
    } catch (e) {
      alert("Failed to export ZIP.");
      console.error(e);
    } finally {
      setIsSyncingAction(false);
    }
  };

  '''

def repl1(m): return export_new
content = re.sub(export_pattern, repl1, content, flags=re.DOTALL)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Export ZIP updated!")

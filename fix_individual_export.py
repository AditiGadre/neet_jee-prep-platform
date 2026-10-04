import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

state_hook = """  const [pendingSwapId, setPendingSwapId] = useState<string | null>(null);
  const [exportTrackSelection, setExportTrackSelection] = useState<string>('dropper1');"""
text = text.replace("  const [pendingSwapId, setPendingSwapId] = useState<string | null>(null);", state_hook)

old_export_func = """  const handleExportAllTracksZIP = async () => {
    setIsSyncingAction(true);
    try {
      // Dynamic import to keep bundle small
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      const allTests = [
        ...SUNDAY_DROPPER_TRACK1_TESTS,
        ...SUNDAY_DROPPER_TRACK2_TESTS,
        ...SUNDAY_DROPPER_PC_TESTS,
        ...SUNDAY_11TH_TRACK1_TESTS,
        ...SUNDAY_11TH_TRACK2_TESTS,
        ...PLANNER_12TH_TESTS
      ];
      
      const data: Record<string, any> = {};
      
      for (const t of allTests) {
        if (!t || !t.code) continue;
        try {
          const cloud = await fetchAuthoritativePaper(t.code, true);
          if (cloud) {
             data[t.code] = cloud;
             const textContent = `Paper: ${t.code}\nTitle: ${t.title}\n\n` + 
                (cloud.questions || []).map((q: any, i: number) => `Q${i+1}. ${q.questionText}\nAns: ${q.correctAnswer}\n`).join('\n');
             zip.file(`readable_exports/${t.code}.txt`, textContent);
          }
        } catch(e) {}
      }
      
      zip.file('platform_backup.agydata', JSON.stringify(data));
      
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `All_Tracks_Backup_${new Date().toISOString().split('T')[0]}.zip`;
      a.click();
      URL.revokeObjectURL(url);
      alert("Exported All Tracks as ZIP successfully!");
    } catch (e) {
      alert("Failed to export ZIP.");
      console.error(e);
    } finally {
      setIsSyncingAction(false);
    }
  };"""

new_export_func = """  const handleExportSelectedTrackZIP = async () => {
    setIsSyncingAction(true);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      let targetTests: SundayPlannerTest[] = [];
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
             const textContent = `Paper: ${t.code}\nTitle: ${t.title}\n\n` + 
                (cloud.questions || []).map((q: any, i: number) => `Q${i+1}. ${q.questionText}\nAns: ${q.correctAnswer}\n`).join('\n');
             zip.file(`readable_exports/${t.code}.txt`, textContent);
          }
        } catch(e) {}
      }
      
      zip.file('platform_backup.agydata', JSON.stringify(data));
      
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${trackName}_Backup_${new Date().toISOString().split('T')[0]}.zip`;
      a.click();
      URL.revokeObjectURL(url);
      alert(`Exported ${trackName} as ZIP successfully!`);
    } catch (e) {
      alert("Failed to export ZIP.");
      console.error(e);
    } finally {
      setIsSyncingAction(false);
    }
  };"""

text = text.replace(old_export_func, new_export_func)

old_buttons = """                  <button
                    onClick={handleExportAllTracksZIP}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wide flex items-center gap-1 shadow-md transition"
                  >
                    <Download className="w-3.5 h-3.5" /> Export All Tracks (ZIP)
                  </button>"""

new_buttons = """                  <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                    <select
                      value={exportTrackSelection}
                      onChange={(e) => setExportTrackSelection(e.target.value)}
                      className="bg-slate-700 text-white text-[10px] rounded pl-2 pr-6 py-1 border-none focus:ring-0 cursor-pointer outline-none font-bold mr-1"
                    >
                      <option value="dropper1">Repeater Track 1</option>
                      <option value="dropper2">Repeater Track 2</option>
                      <option value="11th1">11th Track 1</option>
                      <option value="11th2">11th Track 2</option>
                      <option value="12th">12th Track</option>
                    </select>
                    <button
                      onClick={handleExportSelectedTrackZIP}
                      className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wide flex items-center gap-1 shadow-md transition cursor-pointer"
                    >
                      <Download className="w-3 h-3" /> Export ZIP
                    </button>
                  </div>"""

text = text.replace(old_buttons, new_buttons)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Updated AdminSection with individual track export dropdown")

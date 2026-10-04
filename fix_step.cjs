const fs = require("fs");
let text = fs.readFileSync("src/components/AdminSection.tsx", "utf8");

text = text.replace(/handleExportAllTracksZIP/g, "handleExportSelectedTrackZIP");
text = text.replace(/export All Tracks as ZIP/g, "export ZIP");

// Now replace the tests array logic:
const oldTests = `const allTests = [
        ...SUNDAY_DROPPER_TRACK1_TESTS,
        ...SUNDAY_DROPPER_TRACK2_TESTS,
        ...SUNDAY_DROPPER_PC_TESTS,
        ...SUNDAY_11TH_TRACK1_TESTS,
        ...SUNDAY_11TH_TRACK2_TESTS,
        ...PLANNER_12TH_TESTS
      ];`;

const newTests = `let allTests: any[] = [];
      let trackName = "";

      if (exportTrackSelection === 'dropper1') { allTests = SUNDAY_DROPPER_TRACK1_TESTS; trackName = "Repeater_Track_1"; }
      else if (exportTrackSelection === 'dropper2') { allTests = SUNDAY_DROPPER_TRACK2_TESTS; trackName = "Repeater_Track_2"; }
      else if (exportTrackSelection === '11th1') { allTests = SUNDAY_11TH_TRACK1_TESTS; trackName = "11th_Track_1"; }
      else if (exportTrackSelection === '11th2') { allTests = SUNDAY_11TH_TRACK2_TESTS; trackName = "11th_Track_2"; }
      else if (exportTrackSelection === '12th') { allTests = PLANNER_12TH_TESTS; trackName = "12th_Track"; }`;

text = text.replace(oldTests, newTests);

// Now replace the filename
text = text.replace("`All_Tracks_Backup_${new Date().toISOString().split('T')[0]}.zip`", "`${trackName}_Backup_${new Date().toISOString().split('T')[0]}.zip`");
text = text.replace(`alert("Exported All Tracks as ZIP successfully!");`, "alert(`Exported ${trackName} as ZIP successfully!`);");

// Replace the button
const buttonRegex = /<button\s+onClick=\{handleExportSelectedTrackZIP\}[\s\S]*?<\/button>/g;
const newButtons = `<div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
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
                  </div>`;

text = text.replace(buttonRegex, newButtons);

fs.writeFileSync("src/components/AdminSection.tsx", text, "utf8");
console.log("Successfully replaced step-by-step");

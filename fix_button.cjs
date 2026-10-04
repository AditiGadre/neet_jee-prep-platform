const fs = require("fs");
let text = fs.readFileSync("src/components/AdminSection.tsx", "utf8");

const buttonRegex = /<button\s+onClick=\{handleExportAllTracksZIP\}[\s\S]*?<\/button>/g;
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

text = text.replace(/handleExportAllTracksZIP/g, "handleExportSelectedTrackZIP");
text = text.replace(/export All Tracks as ZIP/g, "export ZIP");

fs.writeFileSync("src/components/AdminSection.tsx", text, "utf8");
console.log("Successfully replaced button!");

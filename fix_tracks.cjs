const fs = require("fs");
let text = fs.readFileSync("src/components/AdminSection.tsx", "utf8");

// First, make sure we import PLANNER_12TH_COMPLETE_TESTS and PLANNER_12TH_PC_TESTS if not imported
if (!text.includes("PLANNER_12TH_COMPLETE_TESTS")) {
  text = text.replace(
    "PLANNER_12TH_TESTS,", 
    "PLANNER_12TH_TESTS,\n  PLANNER_12TH_COMPLETE_TESTS,\n  PLANNER_12TH_PC_TESTS,"
  );
}

// 1. Update the logic inside handleExportSelectedTrackZIP
const funcRegex = /if \(exportTrackSelection === 'dropper1'\)[\s\S]*?else if \(exportTrackSelection === '12th'\) \{ targetTests = PLANNER_12TH_TESTS; trackName = "12th_Track"; \}/;

const newLogic = `if (exportTrackSelection === 'dropper1') { targetTests = SUNDAY_DROPPER_TRACK1_TESTS; trackName = "Repeater_Track_1"; }
      else if (exportTrackSelection === 'dropper2') { targetTests = SUNDAY_DROPPER_TRACK2_TESTS; trackName = "Repeater_Track_2"; }
      else if (exportTrackSelection === 'dropper3') { targetTests = SUNDAY_DROPPER_PC_TESTS; trackName = "Repeater_Track_3"; }
      else if (exportTrackSelection === '11th1') { targetTests = SUNDAY_11TH_TRACK1_TESTS; trackName = "11th_Track_1"; }
      else if (exportTrackSelection === '11th2') { targetTests = SUNDAY_11TH_TRACK2_TESTS; trackName = "11th_Track_2"; }
      else if (exportTrackSelection === '12th1') { targetTests = PLANNER_12TH_COMPLETE_TESTS; trackName = "12th_Track_1"; }
      else if (exportTrackSelection === '12th2') { targetTests = PLANNER_12TH_PC_TESTS; trackName = "12th_Track_2"; }`;

text = text.replace(funcRegex, newLogic);

// 2. Update the select options
const selectRegex = /<option value="dropper1">Repeater Track 1<\/option>[\s\S]*?<option value="12th">12th Track<\/option>/;
const newSelect = `<option value="dropper1">Repeater Track 1</option>
                      <option value="dropper2">Repeater Track 2</option>
                      <option value="dropper3">Repeater Track 3</option>
                      <option value="11th1">11th Track 1</option>
                      <option value="11th2">11th Track 2</option>
                      <option value="12th1">12th Track 1</option>
                      <option value="12th2">12th Track 2</option>`;
text = text.replace(selectRegex, newSelect);

fs.writeFileSync("src/components/AdminSection.tsx", text, "utf8");
console.log("Replaced with new 7 tracks structure.");

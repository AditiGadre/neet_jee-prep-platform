const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'AdminSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = "// STRICT PLANNER ADHERENCE: Get candidates ONLY from the chapters prescribed in the planner for this subject";
const endMarker = "let bank: Question[] = [];";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newSwapLogic = `
      // STRICT PLANNER ADHERENCE: Get candidates ONLY from the customized chapters if provided, else official planner
      let targetChapters: string[] = [];
      if (sub === 'Physics') {
        if (sundayPhyUnits && sundayPhyUnits.length > 0) {
           targetChapters = [...sundayPhyUnits];
        } else {
           const cleanKey = selectedPlannerPreset.replace(/^(11th|12th)-/i, '').toLowerCase();
           const planner = SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_11TH_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_11TH_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || PLANNER_12TH_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_DROPPER_PLANNER_TESTS[0];
           targetChapters = OFFICIAL_PHYSICS_UNITS.filter(u => planner.physicsKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase())));
        }
      } else if (sub === 'Chemistry') {
        if (sundayChemUnits && sundayChemUnits.length > 0) {
           targetChapters = [...sundayChemUnits];
        } else {
           const cleanKey = selectedPlannerPreset.replace(/^(11th|12th)-/i, '').toLowerCase();
           const planner = SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_11TH_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_11TH_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || PLANNER_12TH_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_DROPPER_PLANNER_TESTS[0];
           targetChapters = OFFICIAL_CHEMISTRY_UNITS.filter(u => planner.chemistryKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase())));
        }
      } else {
        if (sundayBioUnits && sundayBioUnits.length > 0) {
           targetChapters = [...sundayBioUnits];
        } else {
           const cleanKey = selectedPlannerPreset.replace(/^(11th|12th)-/i, '').toLowerCase();
           const planner = SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_11TH_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_11TH_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || PLANNER_12TH_TESTS.find(t => t.code.toLowerCase() === cleanKey)
              || SUNDAY_DROPPER_PLANNER_TESTS[0];
           const botMatch = OFFICIAL_BOTANY_BLOCKS.filter(b => planner.botanyKeywords?.some(kw => b.toLowerCase().includes(kw.toLowerCase()))).map(b => \`[Botany] \${b}\`);
           const zooMatch = OFFICIAL_ZOOLOGY_BLOCKS.filter(z => planner.zoologyKeywords?.some(kw => z.toLowerCase().includes(kw.toLowerCase()))).map(z => \`[Zoology] \${z}\`);
           targetChapters = [...botMatch, ...zooMatch];
        }
      }

      `;

    content = content.substring(0, startIndex) + newSwapLogic + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Replaced handleStartSwapMenu logic!");
} else {
    console.log("Could not find handleStartSwapMenu logic!");
}

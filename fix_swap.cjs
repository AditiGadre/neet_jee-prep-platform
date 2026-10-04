const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'AdminSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// We need to fix handleStartSwapMenu so it uses the CURRENT customized chapters if available, 
// and only falls back to the static planner if not.

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
           targetChapters = [...OFFICIAL_BOTANY_BLOCKS.filter(u => planner.botanyKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase()))), ...OFFICIAL_ZOOLOGY_BLOCKS.filter(u => planner.zoologyKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase())))];
        }
      }
`;

const regex = /\/\/ STRICT PLANNER ADHERENCE: Get candidates ONLY from the chapters prescribed[\s\S]*?(?=\s*let fullSubjectBank)/m;

if (regex.test(content)) {
    content = content.replace(regex, newSwapLogic);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Replaced handleStartSwapMenu logic!");
} else {
    console.log("Could not find handleStartSwapMenu logic!");
}

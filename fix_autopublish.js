
import fs from 'fs';
const file = 'src/components/AdminSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /saveCustomSundayPaper\(selectedPlannerPreset, paperToSave\);\s*setActionSuccessBanner\(\(.*?)Question #\\\$\\{questionIdx \+ 1\\} deleted!\\);/g,
  saveCustomSundayPaper(selectedPlannerPreset, paperToSave);\n        await commitAuthoritativePaperToCloud(paperToSave, paperRevision);\n        setPaperRevision(prev => prev + 1);\n        setActionSuccessBanner(\\ #\ deleted!\);
);

content = content.replace(
  /saveCustomSundayPaper\(selectedPlannerPreset, currentPaper\);\s*setActionSuccessBanner\(\(.*?)Question #\\\$\\{questionIdx \+ 1\\} swapped specifically!\\);/g,
  saveCustomSundayPaper(selectedPlannerPreset, currentPaper);\n      await commitAuthoritativePaperToCloud(currentPaper, paperRevision);\n      setPaperRevision(prev => prev + 1);\n      setActionSuccessBanner(\\ #\ swapped specifically!\);
);

content = content.replace(
  /saveCustomSundayPaper\(selectedPlannerPreset, currentPaper\);\s*setActionSuccessBanner\(\(.*?)Question #\\\$\\{questionIdx \+ 1\\} swapped!\\);/g,
  saveCustomSundayPaper(selectedPlannerPreset, currentPaper);\n      await commitAuthoritativePaperToCloud(currentPaper, paperRevision);\n      setPaperRevision(prev => prev + 1);\n      setActionSuccessBanner(\\ #\ swapped!\);
);

fs.writeFileSync(file, content);
console.log('Fixed auto-publish safely');


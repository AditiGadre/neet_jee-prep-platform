
import fs from 'fs';
const file = 'src/components/AdminSection.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('saveCustomSundayPaper(selectedPlannerPreset, paperToSave);')) {
    if (i + 1 < lines.length && lines[i+1].includes('setActionSuccessBanner(') && lines[i+1].includes('deleted!')) {
      lines[i] = '        saveCustomSundayPaper(selectedPlannerPreset, paperToSave);\\n        await commitAuthoritativePaperToCloud(paperToSave, paperRevision);\\n        setPaperRevision(prev => prev + 1);';
    }
  }
}

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('saveCustomSundayPaper(selectedPlannerPreset, currentPaper);')) {
    if (i + 1 < lines.length && lines[i+1].includes('setActionSuccessBanner(') && lines[i+1].includes('swapped')) {
      lines[i] = '      saveCustomSundayPaper(selectedPlannerPreset, currentPaper);\\n      await commitAuthoritativePaperToCloud(currentPaper, paperRevision);\\n      setPaperRevision(prev => prev + 1);';
    }
  }
}

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('saveCustomSundayPaper(selectedPlannerPreset, paperToSave);')) {
    if (i + 1 < lines.length && lines[i+1].includes('setActionSuccessBanner(') && lines[i+1].includes('set as key')) {
      lines[i] = '      saveCustomSundayPaper(selectedPlannerPreset, paperToSave);\\n      commitAuthoritativePaperToCloud(paperToSave, paperRevision).catch(() => {});\\n      setPaperRevision(prev => prev + 1);';
    }
  }
}

fs.writeFileSync(file, lines.join('\n').replace(/\\\\n/g, '\\n'));
console.log('Done');


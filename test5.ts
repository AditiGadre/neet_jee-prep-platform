import { OFFICIAL_PHYSICS_UNITS, SUNDAY_DROPPER_TRACK1_TESTS } from './src/data/sundayPlannerTests.ts';

const planner = SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.code === 'CW-02');
console.log("CW-02 physics keywords:", planner.physicsKeywords);

const phyMatch = OFFICIAL_PHYSICS_UNITS.filter(u => 
  planner.physicsKeywords.some(kw => u.toLowerCase().includes(kw.toLowerCase()))
);
console.log("CW-02 phyMatch:", phyMatch);

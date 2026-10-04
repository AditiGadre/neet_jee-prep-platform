import { SUNDAY_DROPPER_PLANNER_TESTS, ensureAllSundayPapersGenerated, generateSundayTestQuestions } from './src/data/sundayPlannerTests.ts';

ensureAllSundayPapersGenerated();

const cw01 = generateSundayTestQuestions(SUNDAY_DROPPER_PLANNER_TESTS[0]);
const cw02 = generateSundayTestQuestions(SUNDAY_DROPPER_PLANNER_TESTS[1]);

console.log("CW-01 Length:", cw01.length);
console.log("CW-02 Length:", cw02.length);

if (cw01.length > 0 && cw02.length > 0) {
  console.log("Are they identical?", cw01[0].id === cw02[0].id);
  console.log("CW-01[0]:", cw01[0].chapter);
  console.log("CW-02[0]:", cw02[0].chapter);
}

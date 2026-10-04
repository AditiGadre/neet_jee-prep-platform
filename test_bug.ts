
import { SUNDAY_DROPPER_TRACK1_TESTS, SUNDAY_DROPPER_TRACK2_TESTS } from './src/data/sundayPlannerTests';
import { generateSundayTestQuestions } from './src/data/sundayPlannerTests';
console.log('Track 1 CW-01 First Q ID:', generateSundayTestQuestions(SUNDAY_DROPPER_TRACK1_TESTS[0])[0].id);
console.log('Track 2 T01 First Q ID:', generateSundayTestQuestions(SUNDAY_DROPPER_TRACK2_TESTS[0])[0].id);


import { Question } from '../types';
import { ALLEN_KINEMATICS_EXERCISE_1_PART1_QUESTIONS } from './allenKinematicsExercise1Part1';
import { ALLEN_KINEMATICS_EXERCISE_1_PART2_QUESTIONS } from './allenKinematicsExercise1Part2';
import { ALLEN_KINEMATICS_EXERCISE_1_PART3_QUESTIONS } from './allenKinematicsExercise1Part3';
import {
  ALLEN_KINEMATICS_EXERCISE_2_QUESTIONS,
  ALLEN_KINEMATICS_EXERCISE_3_QUESTIONS
} from './allenKinematicsExercise2And3';

export {
  ALLEN_KINEMATICS_EXERCISE_1_PART1_QUESTIONS,
  ALLEN_KINEMATICS_EXERCISE_1_PART2_QUESTIONS,
  ALLEN_KINEMATICS_EXERCISE_1_PART3_QUESTIONS,
  ALLEN_KINEMATICS_EXERCISE_2_QUESTIONS,
  ALLEN_KINEMATICS_EXERCISE_3_QUESTIONS
};

/**
 * All 301 Conceptual Questions from Exercise-I (Build Up Your Understanding)
 */
export const ALLEN_KINEMATICS_EXERCISE_1_QUESTIONS: Question[] = [
  ...ALLEN_KINEMATICS_EXERCISE_1_PART1_QUESTIONS,
  ...ALLEN_KINEMATICS_EXERCISE_1_PART2_QUESTIONS,
  ...ALLEN_KINEMATICS_EXERCISE_1_PART3_QUESTIONS
];

/**
 * Complete Master Question Bank for Allen Kinematics (Motion in a Straight Line & Motion in a Plane)
 * Total: 364 Authentic Questions (Exercise I: 301, Exercise II: 35, Exercise III: 28)
 */
export const ALL_ALLEN_KINEMATICS_QUESTIONS: Question[] = [
  ...ALLEN_KINEMATICS_EXERCISE_1_QUESTIONS,
  ...ALLEN_KINEMATICS_EXERCISE_2_QUESTIONS,
  ...ALLEN_KINEMATICS_EXERCISE_3_QUESTIONS
];

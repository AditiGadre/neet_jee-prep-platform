import {
  ALL_FINGERTIPS_BIOLOGY_QUESTIONS,
  FINGERTIPS_BIO_CH01_MCQS,
  FINGERTIPS_BIO_CH01_EXAM_SCORER,
  FINGERTIPS_BIO_CH02_MCQS,
  FINGERTIPS_BIO_CH02_EXAM_SCORER,
  FINGERTIPS_BIO_CH03_MCQS,
  FINGERTIPS_BIO_CH03_EXAM_SCORER,
  FINGERTIPS_BIO_CH04_MCQS,
  FINGERTIPS_BIO_CH04_EXAM_SCORER,
  FINGERTIPS_BIO_CH05_MCQS,
  FINGERTIPS_BIO_CH05_EXAM_SCORER,
  FINGERTIPS_BIO_CH06_MCQS,
  FINGERTIPS_BIO_CH06_EXAM_SCORER,
  FINGERTIPS_BIO_CH07_MCQS,
  FINGERTIPS_BIO_CH07_EXAM_SCORER,
  FINGERTIPS_BIO_CH08_MCQS,
  FINGERTIPS_BIO_CH08_EXAM_SCORER,
  FINGERTIPS_BIO_CH09_MCQS,
  FINGERTIPS_BIO_CH09_EXAM_SCORER,
  FINGERTIPS_BIO_CH10_MCQS,
  FINGERTIPS_BIO_CH10_EXAM_SCORER,
  FINGERTIPS_BIO_CH11_MCQS,
  FINGERTIPS_BIO_CH11_EXAM_SCORER,
  FINGERTIPS_BIO_CH12_MCQS,
  FINGERTIPS_BIO_CH12_EXAM_SCORER,
  FINGERTIPS_BIO_CH13_MCQS,
  FINGERTIPS_BIO_CH13_EXAM_SCORER,
  FINGERTIPS_BIO_CH14_MCQS,
  FINGERTIPS_BIO_CH14_EXAM_SCORER,
  FINGERTIPS_BIO_CH15_MCQS,
  FINGERTIPS_BIO_CH15_EXAM_SCORER,
  FINGERTIPS_BIO_CH16_MCQS,
  FINGERTIPS_BIO_CH16_EXAM_SCORER,
  FINGERTIPS_BIO_CH17_MCQS,
  FINGERTIPS_BIO_CH17_EXAM_SCORER,
  FINGERTIPS_BIO_CH18_MCQS,
  FINGERTIPS_BIO_CH18_EXAM_SCORER,
  FINGERTIPS_BIO_CH19_MCQS,
  FINGERTIPS_BIO_CH19_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH01_MCQS,
  FINGERTIPS_BIO_C12_CH01_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH02_MCQS,
  FINGERTIPS_BIO_C12_CH02_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH03_MCQS,
  FINGERTIPS_BIO_C12_CH03_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH04_MCQS,
  FINGERTIPS_BIO_C12_CH04_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH05_MCQS,
  FINGERTIPS_BIO_C12_CH05_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH06_MCQS,
  FINGERTIPS_BIO_C12_CH06_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH07_MCQS,
  FINGERTIPS_BIO_C12_CH07_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH08_MCQS,
  FINGERTIPS_BIO_C12_CH08_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH09_MCQS,
  FINGERTIPS_BIO_C12_CH09_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH10_MCQS,
  FINGERTIPS_BIO_C12_CH10_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH11_MCQS,
  FINGERTIPS_BIO_C12_CH11_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH12_MCQS,
  FINGERTIPS_BIO_C12_CH12_EXAM_SCORER,
  FINGERTIPS_BIO_C12_CH13_MCQS,
  FINGERTIPS_BIO_C12_CH13_EXAM_SCORER,
  NEET_MODEL_TEST_PAPER_1,
  NEET_MODEL_TEST_PAPER_2
} from './fingertipsBiologyQuestions';
import {
  ALL_CHEMISTRY_MASTER_QUESTIONS,
  SOME_BASIC_CONCEPTS_OF_CHEMISTRY_QUESTIONS,
  STRUCTURE_OF_ATOM_QUESTIONS,
  CLASSIFICATION_OF_ELEMENTS_AND_PERIODICITY_IN_PROPERTIES_QUESTIONS,
  CHEMICAL_BONDING_AND_MOLECULAR_STRUCTURE_QUESTIONS,
  STATES_OF_MATTER_QUESTIONS,
  THERMODYNAMICS_QUESTIONS,
  EQUILIBRIUM_QUESTIONS,
  REDOX_REACTIONS_QUESTIONS,
  HYDROGEN_QUESTIONS,
  THE_S_BLOCK_ELEMENTS_QUESTIONS,
  THE_P_BLOCK_ELEMENTS__GROUP_13___14__QUESTIONS,
  ORGANIC_CHEMISTRY___SOME_BASIC_PRINCIPLES___TECHNIQUES_QUESTIONS,
  HYDROCARBONS_QUESTIONS,
  ENVIRONMENTAL_CHEMISTRY_QUESTIONS,
  THE_SOLID_STATE_QUESTIONS,
  SOLUTIONS_QUESTIONS,
  ELECTROCHEMISTRY_QUESTIONS,
  CHEMICAL_KINETICS_QUESTIONS,
  SURFACE_CHEMISTRY_QUESTIONS,
  GENERAL_PRINCIPLES_AND_PROCESSES_OF_ISOLATION_OF_ELEMENTS_QUESTIONS,
  THE_P_BLOCK_ELEMENTS__GROUP_15__16__17_AND_18__QUESTIONS,
  THE_D__AND_F_BLOCK_ELEMENTS_QUESTIONS,
  COORDINATION_COMPOUNDS_QUESTIONS,
  HALOALKANES_AND_HALOARENES_QUESTIONS,
  ALCOHOLS__PHENOLS_AND_ETHERS_QUESTIONS,
  ALDEHYDES__KETONES_AND_CARBOXYLIC_ACIDS_QUESTIONS,
  AMINES_QUESTIONS,
  BIOMOLECULES_QUESTIONS,
  POLYMERS_QUESTIONS,
  CHEMISTRY_IN_EVERYDAY_LIFE_QUESTIONS,
} from './chemistryQuestions';
import {
  CHEMISTRY_MOCK_TEST_1_QUESTIONS,
  CHEMISTRY_MOCK_TEST_2_QUESTIONS,
  CHEMISTRY_MOCK_TEST_3_QUESTIONS,
  CHEMISTRY_MOCK_TEST_4_QUESTIONS,
  CHEMISTRY_MOCK_TEST_5_QUESTIONS
} from './chemistryMockTests';
import { VECTORS_BOOK_QUESTIONS } from './vectorsQuestions';
import { UNITS_BOOK_QUESTIONS } from './unitsQuestions';
import { MOTION_BOOK_QUESTIONS } from './motionQuestions';
import { GRAVITATION_BOOK_QUESTIONS } from './gravitationQuestions';
import { ELECTROSTATICS_BOOK_QUESTIONS } from './electrostaticsQuestions';
import { MAGNETISM_BOOK_QUESTIONS } from './magnetismQuestions';
import { THERMODYNAMICS_BOOK_QUESTIONS as PHYSICS_THERMO_QUESTIONS } from './thermodynamicsQuestions';
import {
  TestItem,
  Flashcard,
  MindMapNode,
  BookItem,
  PYQItem,
  Question
} from '../types';

export const SAMPLE_QUESTIONS: Question[] = FINGERTIPS_BIO_CH01_MCQS.slice(0, 45);

/**
 * Helper to slice exactly 45 questions from a source array
 */
const get45 = (arr: Question[], start = 0): Question[] => {
  if (!arr || arr.length === 0) return SAMPLE_QUESTIONS;
  if (arr.length <= 45) return arr;
  const sliced = arr.slice(start, start + 45);
  return sliced.length >= 45 ? sliced : arr.slice(0, 45);
};

export const TEST_SERIES_DATA: TestItem[] = [
// ==========================================
  // 1. SUNDAY-TO-SUNDAY ALL INDIA SCHEDULED TEST SERIES (45 Qs & 15 MINS)
  // ==========================================
  {
    id: 'test-sunday-01',
    title: 'Sunday Mock 01: Diversity in Living World (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 1: The Living World, Biological Classification, Plant Kingdom & Animal Kingdom (45 High-Yield NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-09-06',
    cbtMode: true,
    features: [
      '45 NCERT Verified Questions',
      'Allotted Time: 15 Minutes Speed CBT',
      '+4 for Correct, -1 for Negative',
      'All India Percentile & Weak Area Diagnostic'
    ],
    questions: get45(FINGERTIPS_BIO_CH01_MCQS)
  },
  {
    id: 'test-sunday-02',
    title: 'Sunday Mock 02: Structural Organisation in Plants & Animals (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 2: Morphology & Anatomy of Flowering Plants, Animal Tissues, Cockroach & Frog Anatomy',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-09-13',
    cbtMode: true,
    features: [
      '45 NCERT Questions',
      'Allotted Time: 15 Minutes (180 Marks)',
      '100% Verified Diagrams & Explanations',
      'Instant AI Scorecard & Detailed Solutions'
    ],
    questions: get45(FINGERTIPS_BIO_CH05_MCQS)
  },
  {
    id: 'test-sunday-03',
    title: 'Sunday Mock 03: Cell Structure, Biomolecules & Cell Division (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 3: Cell: Unit of Life, Biomolecules & Enzymes, Cell Cycle & Mitosis/Meiosis',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-09-20',
    cbtMode: true,
    features: [
      '45 High-Yield Questions',
      '15 Minutes Speed Practice',
      '+4/-1 NTA Marking Pattern',
      'Detailed Step-by-Step Solutions'
    ],
    questions: get45(FINGERTIPS_BIO_CH08_MCQS)
  },
  {
    id: 'test-sunday-04',
    title: 'Sunday Mock 04: Plant Physiology Master Challenge (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 4: Photosynthesis in Higher Plants, Cellular Respiration & Plant Growth Regulators',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-09-27',
    cbtMode: true,
    features: [
      '45 NCERT Questions',
      '15 Minutes Speed Practice',
      'Z-Scheme, Krebs Cycle, Kranz Anatomy',
      'National AIR Predictor'
    ],
    questions: get45(FINGERTIPS_BIO_CH13_MCQS)
  },
  {
    id: 'test-sunday-05',
    title: 'Sunday Mock 05: Human Physiology Core Systems (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 5: Breathing, Body Fluids & Circulation, Excretion & Nephron Counter-current',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-10-04',
    cbtMode: true,
    features: [
      '45 NCERT Questions',
      '15 Minutes Speed Practice',
      'Cardiac Cycle, ECG & RAAS Pathway',
      'Instant CBT Scorecard'
    ],
    questions: get45(FINGERTIPS_BIO_CH17_MCQS)
  },
  {
    id: 'test-sunday-06',
    title: 'Sunday Mock 06: Human Physiology Neural & Chemical Integration (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 5 (Part 2): Locomotion, Sliding Filament, Neural Control, Eye/Ear & Endocrine System',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-10-11',
    cbtMode: true,
    features: [
      '45 NCERT Questions',
      '15 Minutes Speed Practice',
      'Hormone Feedback & Synaptic Transmission',
      'Detailed Step Solutions'
    ],
    questions: get45(FINGERTIPS_BIO_CH19_MCQS)
  },
  {
    id: 'test-sunday-07',
    title: 'Sunday Mock 07: Genetics & Molecular Basis of Inheritance (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Class 12 Unit 7: Mendelian Genetics, Linkage, DNA Replication, Transcription & Lac Operon',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-10-18',
    cbtMode: true,
    features: [
      '45 Questions (180 Marks)',
      '15 Minutes Speed CBT',
      'High-Yield Genetics Problems',
      'All India Rank Prediction'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH05_MCQS)
  },
  {
    id: 'test-sunday-08',
    title: 'Sunday Mock 08: Biotechnology Principles & Applications (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Class 12 Unit 9: Restriction Enzymes, pBR322 Vectors, PCR, Bt Toxin & RNA Interference',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-10-25',
    cbtMode: true,
    features: [
      '45 Questions (180 Marks)',
      '15 Minutes Speed CBT',
      'NCERT Line-by-Line Verified',
      'Instant Diagnostic Report'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH09_MCQS)
  },
  {
    id: 'test-sunday-09',
    title: 'Sunday Mock 09: Ecology & Environment Master Test (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Class 12 Unit 10: Organisms & Populations, Ecosystem, Biodiversity & Environmental Issues',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-11-01',
    cbtMode: true,
    features: [
      '45 NCERT Questions',
      '15 Minutes Speed CBT',
      'Population Curves & Biomes',
      'Detailed Answers'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH11_MCQS)
  },
  {
    id: 'test-sunday-10',
    title: 'Sunday Mock 10: Full Class 11 Biology Grand Test (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Complete Class 11 NCERT Biology (Units 1 to 5 Comprehensive Balanced 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-11-08',
    cbtMode: true,
    features: [
      '45 Grand Test Questions',
      '15 Minutes Speed Practice',
      'NTA NEET Standard Format',
      'Weak Topic Diagnostic'
    ],
    questions: get45(NEET_MODEL_TEST_PAPER_1, 0)
  },
  {
    id: 'test-sunday-11',
    title: 'Sunday Mock 11: Full Class 12 Biology Grand Test (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Complete Class 12 NCERT Biology (Units 6 to 10 Comprehensive Balanced 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-11-15',
    cbtMode: true,
    features: [
      '45 Grand Test Questions',
      '15 Minutes Speed Practice',
      'NTA NEET Standard Format',
      'Weak Topic Diagnostic'
    ],
    questions: get45(NEET_MODEL_TEST_PAPER_2, 0)
  },
  {
    id: 'test-sunday-12',
    title: 'Sunday Mock 12: All India Full Syllabus Pre-NEET Mock (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Complete Class 11 & Class 12 Master Mock (All 38 Chapters High-Yield Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-11-22',
    cbtMode: true,
    features: [
      '45 Master Mock Questions',
      '15 Minutes Speed CBT',
      'Final NEET Simulation',
      'All India Percentile'
    ],
    questions: get45(ALL_FINGERTIPS_BIOLOGY_QUESTIONS, 100)
  },

  // ==========================================
  // 2. BIOLOGY ALL 38 CHAPTER-WISE TESTS (45 Qs & 15 MINS EACH)
  // ==========================================
  {
    id: 'test-bio-ch01',
    title: 'Biology Chapter 01: The Living World (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 01: The Living World (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH01_MCQS)
  },
  {
    id: 'test-bio-ch02',
    title: 'Biology Chapter 02: Biological Classification (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 02: Biological Classification (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH02_MCQS)
  },
  {
    id: 'test-bio-ch03',
    title: 'Biology Chapter 03: Plant Kingdom (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 03: Plant Kingdom (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH03_MCQS)
  },
  {
    id: 'test-bio-ch04',
    title: 'Biology Chapter 04: Animal Kingdom (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 04: Animal Kingdom (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH04_MCQS)
  },
  {
    id: 'test-bio-ch05',
    title: 'Biology Chapter 05: Morphology of Flowering Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 05: Morphology of Flowering Plants (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH05_MCQS)
  },
  {
    id: 'test-bio-ch06',
    title: 'Biology Chapter 06: Anatomy of Flowering Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 06: Anatomy of Flowering Plants (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH06_MCQS)
  },
  {
    id: 'test-bio-ch07',
    title: 'Biology Chapter 07: Structural Organisation in Animals (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 07: Structural Organisation in Animals (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH07_MCQS)
  },
  {
    id: 'test-bio-ch08',
    title: 'Biology Chapter 08: Cell: The Unit of Life (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 08: Cell: The Unit of Life (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH08_MCQS)
  },
  {
    id: 'test-bio-ch09',
    title: 'Biology Chapter 09: Biomolecules (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 09: Biomolecules (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH09_MCQS)
  },
  {
    id: 'test-bio-ch10',
    title: 'Biology Chapter 10: Cell Cycle and Cell Division (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 10: Cell Cycle and Cell Division (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH10_MCQS)
  },
  {
    id: 'test-bio-ch11',
    title: 'Biology Chapter 11: Transport in Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 11: Transport in Plants (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH11_MCQS)
  },
  {
    id: 'test-bio-ch12',
    title: 'Biology Chapter 12: Mineral Nutrition (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 12: Mineral Nutrition (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH12_MCQS)
  },
  {
    id: 'test-bio-ch13',
    title: 'Biology Chapter 13: Photosynthesis in Higher Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 13: Photosynthesis in Higher Plants (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH13_MCQS)
  },
  {
    id: 'test-bio-ch14',
    title: 'Biology Chapter 14: Respiration in Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 14: Respiration in Plants (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH14_MCQS)
  },
  {
    id: 'test-bio-ch15',
    title: 'Biology Chapter 15: Plant Growth and Development (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 15: Plant Growth and Development (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH15_MCQS)
  },
  {
    id: 'test-bio-ch16',
    title: 'Biology Chapter 16: Digestion and Absorption (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 16: Digestion and Absorption (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH16_MCQS)
  },
  {
    id: 'test-bio-ch17',
    title: 'Biology Chapter 17: Breathing and Exchange of Gases (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 17: Breathing and Exchange of Gases (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH17_MCQS)
  },
  {
    id: 'test-bio-ch18',
    title: 'Biology Chapter 18: Body Fluids and Circulation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 18: Body Fluids and Circulation (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH18_MCQS)
  },
  {
    id: 'test-bio-ch19',
    title: 'Biology Chapter 19: Excretory Products and their Elimination (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 19: Excretory Products and their Elimination (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH19_MCQS)
  },
  {
    id: 'test-bio-ch20',
    title: 'Biology Chapter 20: Locomotion and Movement (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 20: Locomotion and Movement (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH18_EXAM_SCORER)
  },
  {
    id: 'test-bio-ch21',
    title: 'Biology Chapter 21: Neural Control and Coordination (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 21: Neural Control and Coordination (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH19_EXAM_SCORER)
  },
  {
    id: 'test-bio-ch22',
    title: 'Biology Chapter 22: Chemical Coordination and Integration (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 22: Chemical Coordination and Integration (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH17_EXAM_SCORER)
  },
  {
    id: 'test-bio-ch23',
    title: 'Biology Chapter 23: Reproduction in Organisms (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 23: Reproduction in Organisms (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH01_MCQS)
  },
  {
    id: 'test-bio-ch24',
    title: 'Biology Chapter 24: Sexual Reproduction in Flowering Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 24: Sexual Reproduction in Flowering Plants (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH02_MCQS)
  },
  {
    id: 'test-bio-ch25',
    title: 'Biology Chapter 25: Human Reproduction (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 25: Human Reproduction (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH03_MCQS)
  },
  {
    id: 'test-bio-ch26',
    title: 'Biology Chapter 26: Reproductive Health (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 26: Reproductive Health (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH04_MCQS)
  },
  {
    id: 'test-bio-ch27',
    title: 'Biology Chapter 27: Principles of Inheritance and Variation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 27: Principles of Inheritance and Variation (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH05_MCQS)
  },
  {
    id: 'test-bio-ch28',
    title: 'Biology Chapter 28: Molecular Basis of Inheritance (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 28: Molecular Basis of Inheritance (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH06_MCQS)
  },
  {
    id: 'test-bio-ch29',
    title: 'Biology Chapter 29: Evolution (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 29: Evolution (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH07_MCQS)
  },
  {
    id: 'test-bio-ch30',
    title: 'Biology Chapter 30: Human Health and Disease (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 30: Human Health and Disease (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH08_MCQS)
  },
  {
    id: 'test-bio-ch31',
    title: 'Biology Chapter 31: Strategies for Enhancement in Food Production (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 31: Strategies for Enhancement in Food Production (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH09_MCQS)
  },
  {
    id: 'test-bio-ch32',
    title: 'Biology Chapter 32: Microbes in Human Welfare (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 32: Microbes in Human Welfare (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH10_MCQS)
  },
  {
    id: 'test-bio-ch33',
    title: 'Biology Chapter 33: Biotechnology: Principles and Processes (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 33: Biotechnology: Principles and Processes (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH11_MCQS)
  },
  {
    id: 'test-bio-ch34',
    title: 'Biology Chapter 34: Biotechnology and its Applications (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 34: Biotechnology and its Applications (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH12_MCQS)
  },
  {
    id: 'test-bio-ch35',
    title: 'Biology Chapter 35: Organisms and Populations (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 35: Organisms and Populations (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH13_MCQS)
  },
  {
    id: 'test-bio-ch36',
    title: 'Biology Chapter 36: Ecosystem (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 36: Ecosystem (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH11_EXAM_SCORER)
  },
  {
    id: 'test-bio-ch37',
    title: 'Biology Chapter 37: Biodiversity and Conservation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 37: Biodiversity and Conservation (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH12_EXAM_SCORER)
  },
  {
    id: 'test-bio-ch38',
    title: 'Biology Chapter 38: Environmental Issues (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Biology Chapter 38: Environmental Issues (45 Standard NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH13_EXAM_SCORER)
  },

  // ==========================================
  // 3. CHEMISTRY ALL 30 CHAPTER-WISE TESTS (45 Qs & 15 MINS EACH)
  // ==========================================
  {
    id: 'test-chem-ch01',
    title: 'Chemistry Chapter 01: Some Basic Concepts of Chemistry (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 01: Some Basic Concepts of Chemistry (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(SOME_BASIC_CONCEPTS_OF_CHEMISTRY_QUESTIONS)
  },
  {
    id: 'test-chem-ch02',
    title: 'Chemistry Chapter 02: Structure of Atom (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 02: Structure of Atom (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(STRUCTURE_OF_ATOM_QUESTIONS)
  },
  {
    id: 'test-chem-ch03',
    title: 'Chemistry Chapter 03: Classification of Elements & Periodicity (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 03: Classification of Elements & Periodicity (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(CLASSIFICATION_OF_ELEMENTS_AND_PERIODICITY_IN_PROPERTIES_QUESTIONS)
  },
  {
    id: 'test-chem-ch04',
    title: 'Chemistry Chapter 04: Chemical Bonding and Molecular Structure (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 04: Chemical Bonding and Molecular Structure (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(CHEMICAL_BONDING_AND_MOLECULAR_STRUCTURE_QUESTIONS)
  },
  {
    id: 'test-chem-ch05',
    title: 'Chemistry Chapter 05: States of Matter: Gases & Liquids (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 05: States of Matter: Gases & Liquids (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(STATES_OF_MATTER_QUESTIONS)
  },
  {
    id: 'test-chem-ch06',
    title: 'Chemistry Chapter 06: Chemical Thermodynamics (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 06: Chemical Thermodynamics (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(THERMODYNAMICS_QUESTIONS)
  },
  {
    id: 'test-chem-ch07',
    title: 'Chemistry Chapter 07: Chemical & Ionic Equilibrium (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 07: Chemical & Ionic Equilibrium (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(EQUILIBRIUM_QUESTIONS)
  },
  {
    id: 'test-chem-ch08',
    title: 'Chemistry Chapter 08: Redox Reactions (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 08: Redox Reactions (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(REDOX_REACTIONS_QUESTIONS)
  },
  {
    id: 'test-chem-ch09',
    title: 'Chemistry Chapter 09: Hydrogen & Its Compounds (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 09: Hydrogen & Its Compounds (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(HYDROGEN_QUESTIONS)
  },
  {
    id: 'test-chem-ch10',
    title: 'Chemistry Chapter 10: The s-Block Elements (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 10: The s-Block Elements (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(THE_S_BLOCK_ELEMENTS_QUESTIONS)
  },
  {
    id: 'test-chem-ch11',
    title: 'Chemistry Chapter 11: The p-Block Elements (Groups 13 & 14) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 11: The p-Block Elements (Groups 13 & 14) (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(THE_P_BLOCK_ELEMENTS__GROUP_13___14__QUESTIONS)
  },
  {
    id: 'test-chem-ch12',
    title: 'Chemistry Chapter 12: Organic Chemistry: Basic Principles & Techniques (GOC) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 12: Organic Chemistry: Basic Principles & Techniques (GOC) (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ORGANIC_CHEMISTRY___SOME_BASIC_PRINCIPLES___TECHNIQUES_QUESTIONS)
  },
  {
    id: 'test-chem-ch13',
    title: 'Chemistry Chapter 13: Hydrocarbons (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 13: Hydrocarbons (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(HYDROCARBONS_QUESTIONS)
  },
  {
    id: 'test-chem-ch14',
    title: 'Chemistry Chapter 14: Environmental Chemistry (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 14: Environmental Chemistry (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ENVIRONMENTAL_CHEMISTRY_QUESTIONS)
  },
  {
    id: 'test-chem-ch15',
    title: 'Chemistry Chapter 15: The Solid State (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 15: The Solid State (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(THE_SOLID_STATE_QUESTIONS)
  },
  {
    id: 'test-chem-ch16',
    title: 'Chemistry Chapter 16: Solutions & Colligative Properties (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 16: Solutions & Colligative Properties (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(SOLUTIONS_QUESTIONS)
  },
  {
    id: 'test-chem-ch17',
    title: 'Chemistry Chapter 17: Electrochemistry (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 17: Electrochemistry (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ELECTROCHEMISTRY_QUESTIONS)
  },
  {
    id: 'test-chem-ch18',
    title: 'Chemistry Chapter 18: Chemical Kinetics (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 18: Chemical Kinetics (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(CHEMICAL_KINETICS_QUESTIONS)
  },
  {
    id: 'test-chem-ch19',
    title: 'Chemistry Chapter 19: Surface Chemistry (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 19: Surface Chemistry (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(SURFACE_CHEMISTRY_QUESTIONS)
  },
  {
    id: 'test-chem-ch20',
    title: 'Chemistry Chapter 20: General Principles of Isolation of Elements (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 20: General Principles of Isolation of Elements (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(GENERAL_PRINCIPLES_AND_PROCESSES_OF_ISOLATION_OF_ELEMENTS_QUESTIONS)
  },
  {
    id: 'test-chem-ch21',
    title: 'Chemistry Chapter 21: The p-Block Elements (Groups 15 to 18) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 21: The p-Block Elements (Groups 15 to 18) (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(THE_P_BLOCK_ELEMENTS__GROUP_15__16__17_AND_18__QUESTIONS)
  },
  {
    id: 'test-chem-ch22',
    title: 'Chemistry Chapter 22: The d- and f-Block Elements (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 22: The d- and f-Block Elements (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(THE_D__AND_F_BLOCK_ELEMENTS_QUESTIONS)
  },
  {
    id: 'test-chem-ch23',
    title: 'Chemistry Chapter 23: Coordination Compounds (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 23: Coordination Compounds (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(COORDINATION_COMPOUNDS_QUESTIONS)
  },
  {
    id: 'test-chem-ch24',
    title: 'Chemistry Chapter 24: Haloalkanes and Haloarenes (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 24: Haloalkanes and Haloarenes (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(HALOALKANES_AND_HALOARENES_QUESTIONS)
  },
  {
    id: 'test-chem-ch25',
    title: 'Chemistry Chapter 25: Alcohols, Phenols and Ethers (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 25: Alcohols, Phenols and Ethers (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ALCOHOLS__PHENOLS_AND_ETHERS_QUESTIONS)
  },
  {
    id: 'test-chem-ch26',
    title: 'Chemistry Chapter 26: Aldehydes, Ketones and Carboxylic Acids (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 26: Aldehydes, Ketones and Carboxylic Acids (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ALDEHYDES__KETONES_AND_CARBOXYLIC_ACIDS_QUESTIONS)
  },
  {
    id: 'test-chem-ch27',
    title: 'Chemistry Chapter 27: Amines and Organic Nitrogen Compounds (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 27: Amines and Organic Nitrogen Compounds (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(AMINES_QUESTIONS)
  },
  {
    id: 'test-chem-ch28',
    title: 'Chemistry Chapter 28: Biomolecules (Chemistry) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 28: Biomolecules (Chemistry) (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(BIOMOLECULES_QUESTIONS)
  },
  {
    id: 'test-chem-ch29',
    title: 'Chemistry Chapter 29: Polymers (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 29: Polymers (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(POLYMERS_QUESTIONS)
  },
  {
    id: 'test-chem-ch30',
    title: 'Chemistry Chapter 30: Chemistry in Everyday Life (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Chemistry Chapter 30: Chemistry in Everyday Life (Physical, Inorganic & Organic 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(CHEMISTRY_IN_EVERYDAY_LIFE_QUESTIONS)
  },

  // ==========================================
  // 4. PHYSICS ALL 29 CHAPTER-WISE TESTS (45 Qs & 15 MINS EACH)
  // ==========================================
  {
    id: 'test-phy-ch01',
    title: 'Physics Chapter 01: Physical World & Units and Measurements (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 01: Physical World & Units and Measurements (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(UNITS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch02',
    title: 'Physics Chapter 02: Vectors & Basic Mathematical Tools (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 02: Vectors & Basic Mathematical Tools (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(VECTORS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch03',
    title: 'Physics Chapter 03: Motion in a Straight Line (1D Kinematics) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 03: Motion in a Straight Line (1D Kinematics) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MOTION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch04',
    title: 'Physics Chapter 04: Motion in a Plane (2D & Projectile Motion) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 04: Motion in a Plane (2D & Projectile Motion) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MOTION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch05',
    title: 'Physics Chapter 05: Laws of Motion & Friction (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 05: Laws of Motion & Friction (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MOTION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch06',
    title: 'Physics Chapter 06: Work, Energy, and Power (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 06: Work, Energy, and Power (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MOTION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch07',
    title: 'Physics Chapter 07: System of Particles & Rotational Motion (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 07: System of Particles & Rotational Motion (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MOTION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch08',
    title: 'Physics Chapter 08: Gravitation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 08: Gravitation (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(GRAVITATION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch09',
    title: 'Physics Chapter 09: Mechanical Properties of Solids (Elasticity) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 09: Mechanical Properties of Solids (Elasticity) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(GRAVITATION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch10',
    title: 'Physics Chapter 10: Mechanical Properties of Fluids (Viscosity & Surface Tension) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 10: Mechanical Properties of Fluids (Viscosity & Surface Tension) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(GRAVITATION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch11',
    title: 'Physics Chapter 11: Thermal Properties of Matter & Calorimetry (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 11: Thermal Properties of Matter & Calorimetry (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(PHYSICS_THERMO_QUESTIONS)
  },
  {
    id: 'test-phy-ch12',
    title: 'Physics Chapter 12: Thermodynamics (Physics) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 12: Thermodynamics (Physics) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(PHYSICS_THERMO_QUESTIONS)
  },
  {
    id: 'test-phy-ch13',
    title: 'Physics Chapter 13: Kinetic Theory of Gases (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 13: Kinetic Theory of Gases (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(PHYSICS_THERMO_QUESTIONS)
  },
  {
    id: 'test-phy-ch14',
    title: 'Physics Chapter 14: Oscillations (Simple Harmonic Motion) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 14: Oscillations (Simple Harmonic Motion) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(VECTORS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch15',
    title: 'Physics Chapter 15: Waves and Acoustics (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 15: Waves and Acoustics (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(UNITS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch16',
    title: 'Physics Chapter 16: Electrostatics: Electric Charges and Fields (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 16: Electrostatics: Electric Charges and Fields (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ELECTROSTATICS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch17',
    title: 'Physics Chapter 17: Electrostatic Potential and Capacitance (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 17: Electrostatic Potential and Capacitance (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ELECTROSTATICS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch18',
    title: 'Physics Chapter 18: Current Electricity & DC Circuits (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 18: Current Electricity & DC Circuits (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ELECTROSTATICS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch19',
    title: 'Physics Chapter 19: Moving Charges and Magnetism (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 19: Moving Charges and Magnetism (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MAGNETISM_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch20',
    title: 'Physics Chapter 20: Magnetism and Matter (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 20: Magnetism and Matter (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MAGNETISM_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch21',
    title: 'Physics Chapter 21: Electromagnetic Induction (EMI) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 21: Electromagnetic Induction (EMI) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MAGNETISM_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch22',
    title: 'Physics Chapter 22: Alternating Current (AC) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 22: Alternating Current (AC) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ELECTROSTATICS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch23',
    title: 'Physics Chapter 23: Electromagnetic Waves (EM Waves) (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 23: Electromagnetic Waves (EM Waves) (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MAGNETISM_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch24',
    title: 'Physics Chapter 24: Ray Optics and Optical Instruments (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 24: Ray Optics and Optical Instruments (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(UNITS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch25',
    title: 'Physics Chapter 25: Wave Optics & Interference (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 25: Wave Optics & Interference (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(VECTORS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch26',
    title: 'Physics Chapter 26: Dual Nature of Radiation and Matter (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 26: Dual Nature of Radiation and Matter (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(ELECTROSTATICS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch27',
    title: 'Physics Chapter 27: Atoms & Bohr Model (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 27: Atoms & Bohr Model (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(UNITS_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch28',
    title: 'Physics Chapter 28: Nuclei & Radioactivity (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 28: Nuclei & Radioactivity (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(GRAVITATION_BOOK_QUESTIONS)
  },
  {
    id: 'test-phy-ch29',
    title: 'Physics Chapter 29: Semiconductor Electronics & Logic Gates (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Physics Chapter 29: Semiconductor Electronics & Logic Gates (Numerical & Conceptual 45 Qs)',
    totalQuestions: 45,
    durationMinutes: 15,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '15 Mins Speed Practice', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(MAGNETISM_BOOK_QUESTIONS)
  }
];

// ==========================================
export const FLASHCARDS_DATA: Flashcard[] = [
  // ==========================================
  // BIOLOGY FLASHCARDS (BOTANY & ZOOLOGY)
  // ==========================================
  {
    id: 'fc-bio-1',
    subject: 'Biology',
    category: 'Diagrams',
    subCategory: 'Zoology / Physiology',
    topic: 'Human Circulatory System & Double Circulation',
    frontTitle: 'Human Heart Anatomy & Double Circulation',
    frontContent: 'Trace the flow of deoxygenated and oxygenated blood through chambers, valves and great vessels.',
    diagramSvg: `<svg viewBox="0 0 300 200" class="w-full h-44 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" rx="8" fill="#F8FAFC"/><path d="M70,20 L70,80" stroke="#3B82F6" stroke-width="8" stroke-linecap="round"/><text x="35" y="45" font-size="9" fill="#1E40AF" font-weight="bold">Vena Cava</text><rect x="50" y="80" width="80" height="45" rx="6" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><text x="60" y="105" font-size="10" fill="#1E40AF" font-weight="bold">Right Atrium</text><line x1="90" y1="125" x2="90" y2="138" stroke="#1E40AF" stroke-width="2" stroke-dasharray="3,2"/><rect x="50" y="140" width="80" height="45" rx="6" fill="#BFDBFE" stroke="#3B82F6" stroke-width="2"/><text x="56" y="165" font-size="10" fill="#1E40AF" font-weight="bold">Right Ventricle</text><path d="M130,150 Q160,110 170,40" stroke="#3B82F6" stroke-width="4" fill="none"/><text x="175" y="45" font-size="9" fill="#1E40AF" font-weight="bold">Pulmonary Art. (to Lungs)</text><path d="M230,20 L230,80" stroke="#EF4444" stroke-width="8" stroke-linecap="round"/><text x="238" y="45" font-size="9" fill="#991B1B" font-weight="bold">Pulmonary Veins</text><rect x="170" y="80" width="80" height="45" rx="6" fill="#FEE2E2" stroke="#EF4444" stroke-width="2"/><text x="180" y="105" font-size="10" fill="#991B1B" font-weight="bold">Left Atrium</text><line x1="210" y1="125" x2="210" y2="138" stroke="#991B1B" stroke-width="2" stroke-dasharray="3,2"/><rect x="170" y="140" width="80" height="45" rx="6" fill="#FECACA" stroke="#EF4444" stroke-width="2"/><text x="178" y="165" font-size="10" fill="#991B1B" font-weight="bold">Left Ventricle</text><path d="M210,140 Q150,50 120,20" stroke="#EF4444" stroke-width="5" fill="none"/><text x="80" y="20" font-size="9" fill="#991B1B" font-weight="bold">Systemic Aorta</text></svg>`,
    backExplanation: '1. Deoxygenated blood: Vena Cava -> Right Atrium -> Tricuspid Valve -> Right Ventricle -> Pulmonary Artery -> Lungs.\n2. Oxygenated blood: Pulmonary Veins -> Left Atrium -> Bicuspid (Mitral) Valve -> Left Ventricle -> Aorta -> Systemic Circulation.',
    backKeyPoints: [
      'SA Node (Pacemaker) generates 70-75 impulses/min in upper right wall of right atrium',
      'Stroke Volume = 70 mL, Cardiac Output = ~5000 mL/min (5 L/min)',
      'Tricuspid on right (3 flaps), Bicuspid/Mitral on left (2 flaps)'
    ],
    mnemonic: 'LAB RAT: Left Atrium Bicuspid, Right Atrium Tricuspid!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-2',
    subject: 'Biology',
    category: 'Diagrams',
    subCategory: 'Zoology / Physiology',
    topic: 'Human Excretory System - Nephron Structure',
    frontTitle: 'Nephron Segments & Counter-Current Mechanism',
    frontContent: 'Identify key functional segments of nephron and their primary reabsorption/secretion roles.',
    diagramSvg: `<svg viewBox="0 0 300 200" class="w-full h-44 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" rx="8" fill="#F8FAFC"/><circle cx="60" cy="50" r="18" fill="#FEF08A" stroke="#CA8A04" stroke-width="2"/><circle cx="60" cy="50" r="10" fill="#EF4444" opacity="0.6"/><text x="15" y="30" font-size="9" fill="#854D0E" font-weight="bold">Malpighian Body (Glomerulus)</text><path d="M78,50 C110,30 110,80 130,60" stroke="#EAB308" stroke-width="6" fill="none"/><text x="90" y="25" font-size="9" fill="#854D0E" font-weight="bold">PCT (70-80% Reabsorption)</text><path d="M130,60 L130,160" stroke="#3B82F6" stroke-width="4" fill="none"/><text x="60" y="120" font-size="8" fill="#1E40AF">Desc. Limb (Permeable to H2O)</text><path d="M130,160 C130,185 170,185 170,160" stroke="#6366F1" stroke-width="4" fill="none"/><text x="120" y="195" font-size="8" fill="#4338CA" font-weight="bold">Loop of Henle</text><path d="M170,160 L170,60" stroke="#EC4899" stroke-width="5" fill="none"/><text x="175" y="120" font-size="8" fill="#BE185D">Asc. Limb (Impermeable to H2O)</text><path d="M170,60 C190,40 210,70 230,50" stroke="#10B981" stroke-width="5" fill="none"/><text x="185" y="35" font-size="8" fill="#047857" font-weight="bold">DCT (Conditional Na+/H2O)</text><path d="M230,20 L230,180" stroke="#059669" stroke-width="8" stroke-linecap="round"/><text x="238" y="100" font-size="9" fill="#065F46" font-weight="bold">Collecting Duct</text></svg>`,
    backExplanation: '• Glomerulus + Bowman Capsule = Malpighian body (Ultrafiltration, GFR = 125 mL/min = 180 L/day).\n• PCT: 70-80% electrolytes and water reabsorbed (simple cuboidal brush border).\n• Henles Loop Descending: Permeable to water, impermeable to electrolytes (concentrates filtrate).\n• Henles Loop Ascending: Impermeable to water, actively transports electrolytes (dilutes filtrate).\n• DCT: Conditional reabsorption of Na+ and water under Aldosterone & ADH.',
    backKeyPoints: [
      'Counter-current multiplier occurs in Loop of Henle and Vasa Recta',
      'Osmolarity rises from 300 mOsmol/L in cortex to 1200 mOsmol/L in inner medulla',
      'Juxtaglomerular (JG) cells release Renin upon fall in GFR'
    ],
    mnemonic: 'PCT = Primary Collector of 80% Total electrolytes!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-bio-3',
    subject: 'Biology',
    category: 'Diagrams',
    subCategory: 'Botany / Physiology',
    topic: 'Photosynthesis - C4 Pathway & Kranz Anatomy',
    frontTitle: 'C4 Leaf Kranz Anatomy & PEPcase Fixation',
    frontContent: 'Describe the anatomical differences and dual CO2 fixation in mesophyll vs bundle sheath cells of C4 plants.',
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-full h-40 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="180" rx="8" fill="#F0FDF4"/><circle cx="150" cy="90" r="28" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/><text x="126" y="94" font-size="9" fill="#15803D" font-weight="bold">Vascular Bundle</text><circle cx="150" cy="90" r="54" fill="none" stroke="#22C55E" stroke-width="20" stroke-dasharray="16,4"/><text x="150" y="155" text-anchor="middle" font-size="9" fill="#166534" font-weight="bold">Bundle Sheath Cells (RuBisCO, No Grana, Rich CO2)</text><circle cx="150" cy="90" r="76" fill="none" stroke="#86EFAC" stroke-width="12" stroke-dasharray="22,6"/><text x="150" y="20" text-anchor="middle" font-size="9" fill="#166534" font-weight="bold">Mesophyll Cells (PEPcase, C4 Acid OAA Formation)</text></svg>`,
    backExplanation: '1. Mesophyll Cells: Contain PEP carboxylase (PEPcase). Fixes atmospheric CO2 with PEP (3C) into Oxaloacetate OAA (4C). Lacks RuBisCO.\n2. Bundle Sheath Cells: Large, wreath-like (Kranz) cells with thick impermeable walls, rich in RuBisCO but lacking grana/PSII. Calvin cycle occurs here with zero photorespiration.',
    backKeyPoints: [
      'C4 plants: Sugarcane, Maize, Sorghum',
      'Zero photorespiration allows maximum productivity in hot, bright tropical climates',
      'Optimum temperature: 30°C - 45°C (higher than C3 20°C - 25°C)'
    ],
    mnemonic: 'PEP in Mesophyll catches CO2, feeds RuBisCO in Bundle Sheath!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-bio-4',
    subject: 'Biology',
    category: 'Diagrams',
    subCategory: 'Genetics / Molecular',
    topic: 'DNA Packaging - Nucleosome Core Particle',
    frontTitle: 'Nucleosome Octamer & 200 bp DNA Wrapping',
    frontContent: 'What is the molecular composition of the histone octamer and how many base pairs wrap around each nucleosome?',
    diagramSvg: `<svg viewBox="0 0 300 170" class="w-full h-38 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="170" rx="8" fill="#FDF4FF"/><ellipse cx="150" cy="85" rx="50" ry="35" fill="#E879F9" stroke="#C026D3" stroke-width="2"/><text x="115" y="90" font-size="9" fill="#701A75" font-weight="bold">Histone Octamer (H2A, H2B, H3, H4 x 2)</text><path d="M60,60 C90,20 210,20 240,60 C260,90 240,140 150,140 C80,140 50,100 60,60" stroke="#2563EB" stroke-width="5" fill="none"/><rect x="80" y="110" width="22" height="35" rx="4" fill="#F43F5E" stroke="#BE123C" stroke-width="1.5"/><text x="75" y="155" font-size="8" fill="#9F1239" font-weight="bold">H1 Histone</text><text x="150" y="165" text-anchor="middle" font-size="9" fill="#1E293B" font-weight="bold">1.75 Turns of DNA (200 base pairs per nucleosome)</text></svg>`,
    backExplanation: '• Histone Octamer: Positively charged basic proteins (rich in Lysine and Arginine) made of two molecules each of H2A, H2B, H3, and H4.\n• DNA wrapping: ~1.75 turns of negatively charged double helix containing 200 base pairs of DNA (146 bp core + linker DNA).\n• H1 Histone: Plugs linker DNA at the entry/exit site.',
    backKeyPoints: [
      'Euchromatin: Loosely packed, lightly staining, transcriptionally active',
      'Heterochromatin: Densely packed, darkly staining, transcriptionally inactive'
    ],
    mnemonic: 'Octamer = 2 x (H2A + H2B + H3 + H4), sealed by H1 outside!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-5',
    subject: 'Biology',
    category: 'Formulas',
    subCategory: 'Ecology / Population',
    topic: 'Population Growth - Exponential vs Logistic',
    frontTitle: 'Exponential (J-curve) vs Logistic (S-curve) Models',
    frontContent: 'State differential equations and environmental resistance for Verhulst-Pearl logistic growth.',
    frontFormula: 'dN/dt = rN ((K - N) / K)',
    backExplanation: '• Exponential: dN/dt = rN (Integral: Nt = N0 * e^(rt)). Occurs with unlimited resources.\n• Logistic: dN/dt = rN * ((K - N) / K). Realistic model with carrying capacity K and sigmoid curve.',
    backKeyPoints: [
      'r = Intrinsic rate of natural increase',
      'K = Carrying capacity (environmental limit)',
      '(K - N)/K is the fraction of carrying capacity still available'
    ],
    mnemonic: 'J-shape = Jet speed, S-shape = Settles at K!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-6',
    subject: 'Biology',
    category: 'Concepts',
    subCategory: 'Genetics / Molecular',
    topic: 'Gene Regulation - Lac Operon Structure',
    frontTitle: 'Structural Genes & Products of Lac Operon',
    frontContent: 'List the enzymes encoded by z, y, and a structural genes and identify the natural inducer.',
    backExplanation: '• z gene -> beta-galactosidase (hydrolyzes lactose to glucose + galactose)\n• y gene -> permease (increases membrane permeability to beta-galactosides)\n• a gene -> transacetylase (acetyl transferase)\n• i gene -> synthesizes repressor protein constitutively.',
    backKeyPoints: [
      'Inducer: Allolactose (inactivates lac repressor)',
      'Operon is inducible and under both negative and positive control',
      'Discovered by Francois Jacob and Jacques Monod'
    ],
    mnemonic: 'Z-Y-A = B-P-T (Beta-gal, Permease, Transacetylase)',
    difficulty: 'Medium'
  },

  // ==========================================
  // CHEMISTRY FLASHCARDS (PHYSICAL, ORGANIC, INORGANIC)
  // ==========================================
  {
    id: 'fc-chem-1',
    subject: 'Chemistry',
    category: 'Diagrams',
    subCategory: 'Physical / Electrochemistry',
    topic: 'Electrochemistry - Daniell Galvanic Cell',
    frontTitle: 'Galvanic Cell Notation & Standard Cell Potential',
    frontContent: 'Identify anode, cathode, electron flow direction and calculate standard EMF of Daniell Cell.',
    diagramSvg: `<svg viewBox="0 0 300 190" class="w-full h-40 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="190" rx="8" fill="#F8FAFC"/><rect x="30" y="70" width="90" height="90" rx="4" fill="#DBEAFE" stroke="#64748B" stroke-width="2"/><rect x="180" y="70" width="90" height="90" rx="4" fill="#CFFAFE" stroke="#64748B" stroke-width="2"/><rect x="55" y="40" width="16" height="90" fill="#94A3B8" stroke="#475569" stroke-width="1.5"/><text x="45" y="30" font-size="9" fill="#1E293B" font-weight="bold">Zn Anode (-)</text><text x="45" y="150" font-size="8" fill="#1E40AF">1M ZnSO4</text><rect x="225" y="40" width="16" height="90" fill="#F97316" stroke="#C2410C" stroke-width="1.5"/><text x="215" y="30" font-size="9" fill="#9A3412" font-weight="bold">Cu Cathode (+)</text><text x="215" y="150" font-size="8" fill="#0E7490">1M CuSO4</text><path d="M63,40 L63,15 L140,15" stroke="#334155" stroke-width="2" fill="none"/><circle cx="150" cy="15" r="10" fill="#FFFFFF" stroke="#334155" stroke-width="1.5"/><text x="144" y="19" font-size="9" fill="#2563EB" font-weight="bold">V</text><path d="M160,15 L233,15 L233,40" stroke="#334155" stroke-width="2" fill="none"/><path d="M95,85 L95,60 L205,60 L205,85" stroke="#F59E0B" stroke-width="8" fill="none" stroke-linecap="round"/><text x="120" y="55" font-size="8" fill="#B45309" font-weight="bold">Salt Bridge (KCl)</text><text x="150" y="180" text-anchor="middle" font-size="9" fill="#334155" font-weight="bold">E°cell = E°(Cu2+/Cu) - E°(Zn2+/Zn) = +1.10 V</text></svg>`,
    backExplanation: '• Anode (Oxidation, Negative): Zn(s) -> Zn2+(aq) + 2e- (E° = -0.76 V)\n• Cathode (Reduction, Positive): Cu2+(aq) + 2e- -> Cu(s) (E° = +0.34 V)\n• Cell EMF: E°cell = E°cathode - E°anode = 0.34 - (-0.76) = +1.10 V.\n• Electrons flow from Zn anode to Cu cathode through external wire.',
    backKeyPoints: [
      'LOAN rule: Left, Oxidation, Anode, Negative',
      'Salt bridge maintains electrical neutrality via inert electrolyte (KCl/KNO3 in agar-agar)',
      'If E_ext > 1.10 V, current reverses and cell acts as electrolytic cell'
    ],
    mnemonic: 'LOAN: Left Anode Oxidizes Negatively!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-chem-2',
    subject: 'Chemistry',
    category: 'Diagrams',
    subCategory: 'Inorganic / Chemical Bonding',
    topic: 'Chemical Bonding - sp3 Hybridization & VSEPR',
    frontTitle: 'Methane (CH4) Tetrahedral Geometry & 109.5° Angle',
    frontContent: 'Describe orbital overlap, bond angle, and geometry of sp3 hybridized central atoms.',
    diagramSvg: `<svg viewBox="0 0 300 170" class="w-full h-38 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="170" rx="8" fill="#F8FAFC"/><circle cx="150" cy="85" r="14" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/><text x="144" y="89" font-size="10" fill="#FFFFFF" font-weight="bold">C</text><line x1="150" y1="71" x2="150" y2="25" stroke="#1D4ED8" stroke-width="3"/><circle cx="150" cy="22" r="8" fill="#EF4444"/><line x1="138" y1="92" x2="90" y2="135" stroke="#1D4ED8" stroke-width="3"/><circle cx="86" cy="138" r="8" fill="#EF4444"/><line x1="162" y1="92" x2="210" y2="135" stroke="#1D4ED8" stroke-width="3"/><circle cx="214" cy="138" r="8" fill="#EF4444"/><line x1="150" y1="99" x2="150" y2="145" stroke="#1D4ED8" stroke-width="4" stroke-dasharray="3,2"/><circle cx="150" cy="148" r="8" fill="#EF4444"/><text x="150" y="165" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="bold">sp³ Tetrahedral Geometry (109.5° Bond Angle, CH4)</text></svg>`,
    backExplanation: '• 1 s orbital mixes with 3 p orbitals to form 4 equivalent sp3 hybrid orbitals oriented tetrahedrally at 109.5°.\n• In NH3 (1 lone pair): Bond angle compresses to 107° (Pyramidal).\n• In H2O (2 lone pairs): Bond angle compresses to 104.5° (Bent / V-shaped).',
    backKeyPoints: [
      'VSEPR Repulsion order: Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair',
      'CH4 has zero dipole moment due to symmetric tetrahedral cancellation'
    ],
    mnemonic: 'sp3 = 4 domains = 109.5° Tetrahedral!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-chem-3',
    subject: 'Chemistry',
    category: 'Formulas',
    subCategory: 'Physical / Equilibrium',
    topic: 'Ionic Equilibrium - Buffer Solutions',
    frontTitle: 'Henderson-Hasselbalch Equation for Buffer pH',
    frontContent: 'State formulas for acidic and basic buffer pH and condition for maximum buffer capacity.',
    frontFormula: 'pH = pKa + log([Salt] / [Acid])  ;  pOH = pKb + log([Salt] / [Base])',
    backExplanation: '• Acidic Buffer: CH3COOH + CH3COONa -> pH = pKa + log([Conjugate Base]/[Weak Acid]).\n• Basic Buffer: NH4OH + NH4Cl -> pOH = pKb + log([Conjugate Acid]/[Weak Base]), where pH = 14 - pOH.\n• Max Buffer Capacity occurs when [Salt] = [Acid], giving pH = pKa.',
    backKeyPoints: [
      'Buffer range: pH = pKa ± 1',
      'Blood buffer: H2CO3 / HCO3- maintains pH ~ 7.4'
    ],
    mnemonic: 'pH = pKa + Log(Salt over Acid)',
    difficulty: 'Medium'
  },
  {
    id: 'fc-chem-4',
    subject: 'Chemistry',
    category: 'Reactions',
    subCategory: 'Organic / Aldehydes & Ketones',
    topic: 'Aldol Condensation vs Cannizzaro Reaction',
    frontTitle: 'Alpha-Hydrogen Rule in Carbonyl Reactions',
    frontContent: 'Compare structural requirements, reagents, and products for Aldol vs Cannizzaro.',
    backExplanation: '• Aldol: Requires AT LEAST ONE alpha-H (e.g. CH3CHO, CH3COCH3). Reagent: dil. NaOH. Yields beta-hydroxy aldehyde/ketone -> alpha,beta-unsaturated carbonyl upon heating.\n• Cannizzaro: NO alpha-H (e.g. HCHO, C6H5CHO, (CH3)3C-CHO). Reagent: Conc. 50% NaOH. Undergoes self-redox to alcohol and carboxylic acid salt.',
    backKeyPoints: [
      'Cross-Cannizzaro with HCHO: HCHO is always oxidized to formate, other aldehyde reduced to alcohol',
      'Benzaldehyde gives Benzyl Alcohol + Sodium Benzoate in Cannizzaro'
    ],
    mnemonic: 'Alpha-H = Aldol! Zero Alpha-H = Cannizzaro!',
    difficulty: 'Medium'
  },

  // ==========================================
  // PHYSICS FLASHCARDS (MECHANICS, ELECTRODYNAMICS, OPTICS, MODERN)
  // ==========================================
  {
    id: 'fc-phy-1',
    subject: 'Physics',
    category: 'Diagrams',
    subCategory: 'Mechanics / Rotational Motion',
    topic: 'Rotational Dynamics - Pure Rolling on Incline',
    frontTitle: 'Acceleration & Rolling Race on Incline Plane',
    frontContent: 'What is the acceleration formula for pure rolling down an incline and who wins the rolling race?',
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-full h-40 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="180" rx="8" fill="#F8FAFC"/><polygon points="30,150 270,150 270,40" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/><text x="60" y="145" font-size="10" fill="#334155" font-weight="bold">θ</text><circle cx="190" cy="75" r="24" fill="#FDE047" stroke="#CA8A04" stroke-width="2"/><circle cx="190" cy="75" r="3" fill="#000000"/><line x1="190" y1="75" x2="190" y2="120" stroke="#DC2626" stroke-width="2"/><text x="195" y="115" font-size="8" fill="#DC2626" font-weight="bold">mg</text><line x1="190" y1="75" x2="150" y2="100" stroke="#2563EB" stroke-width="2"/><text x="145" y="90" font-size="8" fill="#2563EB" font-weight="bold">a = g sinθ / (1 + K²/R²)</text><path d="M210,65 A 18 18 0 0 1 205,92" stroke="#9333EA" stroke-width="2" fill="none"/><text x="215" y="80" font-size="8" fill="#9333EA" font-weight="bold">ω</text></svg>`,
    frontFormula: 'a = (g sin θ) / (1 + K²/R²)',
    backExplanation: '• Total Kinetic Energy: K_total = 1/2 M v^2 * (1 + K^2/R^2).\n• K^2/R^2 values: Solid Sphere (2/5 = 0.4) < Disc/Solid Cylinder (1/2 = 0.5) < Hollow Sphere (2/3 = 0.67) < Ring/Hollow Cylinder (1.0).\n• Smallest K^2/R^2 reaches bottom first: Solid Sphere > Disc > Hollow Sphere > Ring.',
    backKeyPoints: [
      'Static friction provides the required torque for pure rolling but does ZERO work',
      'Velocity at bottom: v = sqrt(2gh / (1 + K^2/R^2))'
    ],
    mnemonic: 'Least K²/R² wins: Solid Sphere > Disc > Hollow Sphere > Ring!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-phy-2',
    subject: 'Physics',
    category: 'Diagrams',
    subCategory: 'Optics / Ray Optics',
    topic: 'Ray Optics - Convex Lens Image Formation',
    frontTitle: 'Convex Lens Formula & Real Inverted Image at 2F',
    frontContent: 'State lens maker formula, thin lens formula, and image characteristics when object is at 2F.',
    diagramSvg: `<svg viewBox="0 0 300 170" class="w-full h-38 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="170" rx="8" fill="#F8FAFC"/><line x1="10" y1="85" x2="290" y2="85" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,2"/><ellipse cx="150" cy="85" rx="8" ry="60" fill="#93C5FD" stroke="#2563EB" stroke-width="2" opacity="0.8"/><circle cx="90" cy="85" r="3" fill="#DC2626"/><text x="85" y="100" font-size="8" fill="#DC2626" font-weight="bold">F1</text><circle cx="30" cy="85" r="3" fill="#DC2626"/><text x="22" y="100" font-size="8" fill="#DC2626" font-weight="bold">2F1</text><circle cx="210" cy="85" r="3" fill="#DC2626"/><text x="205" y="100" font-size="8" fill="#DC2626" font-weight="bold">F2</text><circle cx="270" cy="85" r="3" fill="#DC2626"/><text x="262" y="100" font-size="8" fill="#DC2626" font-weight="bold">2F2</text><line x1="30" y1="85" x2="30" y2="45" stroke="#16A34A" stroke-width="3"/><polygon points="30,40 26,48 34,48" fill="#16A34A"/><text x="15" y="45" font-size="8" fill="#16A34A" font-weight="bold">Object</text><line x1="30" y1="45" x2="150" y2="45" stroke="#EA580C" stroke-width="1.5"/><line x1="150" y1="45" x2="270" y2="125" stroke="#EA580C" stroke-width="1.5"/><line x1="30" y1="45" x2="270" y2="125" stroke="#7C3AED" stroke-width="1.5"/><line x1="270" y1="85" x2="270" y2="125" stroke="#DC2626" stroke-width="3"/><polygon points="270,130 266,122 274,122" fill="#DC2626"/><text x="250" y="145" font-size="8" fill="#DC2626" font-weight="bold">Real, Inverted (m = -1)</text></svg>`,
    frontFormula: '1/f = 1/v - 1/u  ;  1/f = (μ - 1)(1/R1 - 1/R2)',
    backExplanation: '• When object is placed at 2F1: Real, inverted, same size image forms at 2F2 with magnification m = -1.\n• When object is between Focus F and Optical Center O: Virtual, erect, magnified image forms on same side (Magnifying Glass mode).\n• Power of lens: P = 1 / f(in meters) in Dioptres (D).',
    backKeyPoints: [
      'Convex lens in water (μ_w = 4/3): Focal length increases 4 times, Power drops to 1/4',
      'Sign convention: u is negative, real image v is positive'
    ],
    mnemonic: 'Object at 2F gives identical image at 2F (m = -1)!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-phy-3',
    subject: 'Physics',
    category: 'Diagrams',
    subCategory: 'Electrodynamics / Current Electricity',
    topic: 'Current Electricity - Balanced Wheatstone Bridge',
    frontTitle: 'Wheatstone Bridge Null Deflection Condition',
    frontContent: 'What is the condition for null deflection in galvanometer and how to find unknown resistance S?',
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-full h-40 mx-auto" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="180" rx="8" fill="#F8FAFC"/><polygon points="150,30 230,90 150,150 70,90" fill="none" stroke="#2563EB" stroke-width="2.5"/><circle cx="150" cy="30" r="4" fill="#1E40AF"/><circle cx="230" cy="90" r="4" fill="#1E40AF"/><circle cx="150" cy="150" r="4" fill="#1E40AF"/><circle cx="70" cy="90" r="4" fill="#1E40AF"/><text x="95" y="55" font-size="10" fill="#1E3A8A" font-weight="bold">P (Resistor)</text><text x="185" y="55" font-size="10" fill="#1E3A8A" font-weight="bold">Q (Resistor)</text><text x="95" y="130" font-size="10" fill="#1E3A8A" font-weight="bold">R (Resistor)</text><text x="185" y="130" font-size="10" fill="#1E3A8A" font-weight="bold">S (Resistor)</text><line x1="70" y1="90" x2="230" y2="90" stroke="#DC2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="150" cy="90" r="12" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.5"/><text x="146" y="94" font-size="10" fill="#DC2626" font-weight="bold">G</text><text x="150" y="172" text-anchor="middle" font-size="9" fill="#047857" font-weight="bold">Balanced Condition: P / Q = R / S (Ig = 0)</text></svg>`,
    frontFormula: 'P / Q = R / S  ==>  S = (Q / P) * R',
    backExplanation: '• When P/Q = R/S, potential at junction B equals potential at junction D (V_B = V_D).\n• Zero current flows through galvanometer (Ig = 0).\n• Interchanging galvanometer and battery positions does NOT alter balance condition.',
    backKeyPoints: [
      'Meter bridge works strictly on Wheatstone bridge principle',
      'End errors in meter bridge arise from resistance of copper strips at wire ends'
    ],
    mnemonic: 'P over Q equals R over S for zero deflection!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-phy-4',
    subject: 'Physics',
    category: 'Formulas',
    subCategory: 'Modern Physics / Dual Nature',
    topic: 'Modern Physics - De Broglie Wavelength Shortcuts',
    frontTitle: 'De Broglie Shortcut for Accelerated Electrons',
    frontContent: 'What are the rapid calculation shortcuts for electron, proton, deuteron, and alpha particle wavelengths?',
    frontFormula: 'λ_e = 12.27 / √V  Å  =  1.227 / √V  nm',
    backExplanation: 'Using de Broglie relation λ = h / p = h / √(2m q V):\n• Electron: λ = 12.27 / √V Å (For V = 100V, λ = 1.227 Å)\n• Proton: λ = 0.286 / √V Å\n• Deuteron: λ = 0.202 / √V Å\n• Alpha Particle: λ = 0.101 / √V Å\n• Thermal Neutron at T Kelvin: λ = 30.83 / √T Å.',
    backKeyPoints: [
      'Davisson-Germer experiment proved wave nature of electrons',
      'Stopping potential V0 depends ONLY on frequency, NOT on light intensity'
    ],
    mnemonic: '12.27 over root V in Angstroms for Electron!',
    difficulty: 'Easy'
  }
];

// ==========================================
export const MIND_MAPS_DATA: MindMapNode[] = [
  // ==========================================
  // BIOLOGY MIND MAPS
  // ==========================================
  {
    id: 'mm-bio-1',
    subject: 'Biology',
    title: 'Genetics & Molecular Basis of Inheritance',
    description: 'Complete visual roadmap of Mendelian genetics, chromosome theory, DNA structure, replication, transcription, translation & regulation.',
    children: [
      {
        title: '1. Mendelian Genetics & Inheritance',
        details: [
          'Monohybrid cross: 3:1 phenotypic, 1:2:1 genotypic ratio',
          'Dihybrid cross: 9:3:3:1 phenotypic ratio (independent assortment)',
          'Incomplete dominance in Mirabilis jalapa (1:2:1 phenotypic and genotypic)',
          'Co-dominance in ABO blood grouping (IA, IB, i alleles on chromosome 9)'
        ],
        subTopics: [
          'Test Cross (Unknown dominant x Homozygous recessive) gives 1:1 or 1:1:1:1',
          'Pleiotropy: Single gene controls multiple phenotypic traits (e.g. Phenylketonuria)'
        ]
      },
      {
        title: '2. DNA Replication & Polarity',
        details: [
          'Semiconservative replication proven by Meselson and Stahl (15N and 14N in E. coli)',
          'Replication fork synthesizes strictly in 5 prime to 3 prime direction',
          'Leading strand is continuous, Lagging strand produces Okazaki fragments',
          'Enzymes: Helicase, Single-strand binding proteins, Primase, DNA Polymerase III, Ligase'
        ],
        subTopics: [
          'Taylor used radioactive thymidine on Vicia faba chromosomes',
          'DNA Polymerase I removes RNA primers via 5 to 3 exonuclease proofreading'
        ]
      },
      {
        title: '3. Transcription & Translation',
        details: [
          'Transcription unit: Promoter, Structural Gene, Terminator',
          'RNA Polymerase II transcribes hnRNA in eukaryotes (capped with m7Gppp, poly-A tail)',
          'Genetic code: 64 codons, 61 code for amino acids, 3 stop codons (UAA, UAG, UGA)',
          'AUG is dual-purpose: codes for Methionine and acts as Start codon'
        ],
        subTopics: [
          'Wobble hypothesis by Crick: Non-Watson-Crick base pairing at 3rd codon base',
          'Peptidyl transferase (23S rRNA in bacteria / 28S rRNA in eukaryotes) forms peptide bond'
        ]
      },
      {
        title: '4. Gene Regulation (Lac Operon)',
        details: [
          'Jacob and Monod model in E. coli for lactose catabolism',
          'z gene (beta-galactosidase), y gene (permease), a gene (transacetylase)',
          'i gene synthesizes repressor protein constitutively',
          'Allolactose acts as inducer binding to repressor to turn transcription ON'
        ],
        subTopics: [
          'Negative regulation: Operon is normally OFF in presence of active repressor',
          'Catabolite activator protein (CAP-cAMP) provides positive regulation'
        ]
      }
    ]
  },
  {
    id: 'mm-bio-2',
    subject: 'Biology',
    title: 'Human Physiology & Organ Systems',
    description: 'Integrated roadmap of Circulation, Excretion, Respiration & Neural Control.',
    children: [
      {
        title: '1. Circulatory System & Cardiac Cycle',
        details: [
          'Double circulation: Pulmonary circuit (Right Ventricle -> Lungs -> Left Atrium) and Systemic circuit',
          'Cardiac Output = Stroke Volume (70 mL) x Heart Rate (72 bpm) = 5 L/min',
          'Nodal tissue: SA Node (72 bpm), AV Node (40-60 bpm), Bundle of His (35 bpm)'
        ],
        subTopics: [
          'ECG: P-wave (Atrial depolarisation), QRS (Ventricular depolarisation), T-wave (Ventricular repolarisation)'
        ]
      },
      {
        title: '2. Excretory System & Nephron Dynamics',
        details: [
          'Glomerular Filtration Rate (GFR) = 125 mL/min = 180 Litres/day',
          'PCT reabsorbs 70-80% of electrolytes and water (brush border cuboidal)',
          'Counter-current multiplier in Loop of Henle creates 1200 mOsmol/L medullary gradient'
        ],
        subTopics: [
          'RAAS: JG cells secrete Renin -> Angiotensin II -> Aldosterone -> Na+ and water retention'
        ]
      }
    ]
  },

  // ==========================================
  // CHEMISTRY MIND MAPS
  // ==========================================
  {
    id: 'mm-chem-1',
    subject: 'Chemistry',
    title: 'Physical Chemistry: Thermodynamics & Electrochemistry',
    description: 'Formulas, laws, cell potentials, Nernst equation, and Gibbs free energy relations.',
    children: [
      {
        title: '1. Chemical Thermodynamics',
        details: [
          'First Law: Delta U = q + w (where w = -P_ext * Delta V for expansion)',
          'Enthalpy: H = U + PV -> Delta H = Delta U + Delta n_g * R * T',
          'Gibbs Free Energy: Delta G = Delta H - T * Delta S (Spontaneous when Delta G < 0)'
        ],
        subTopics: [
          'Standard Delta G° = -2.303 R T log K_c',
          'Third law: Entropy of perfectly crystalline substance is ZERO at 0 Kelvin'
        ]
      },
      {
        title: '2. Electrochemistry & Galvanic Cells',
        details: [
          'Standard EMF: E°cell = E°cathode - E°anode (both standard reduction potentials)',
          'Nernst Equation at 298 K: E_cell = E°cell - (0.0591 / n) * log Q',
          'Equilibrium condition: E_cell = 0 -> E°cell = (0.0591 / n) * log K_c'
        ],
        subTopics: [
          'Kohlrausch Law: Limiting molar conductivity equals sum of individual ionic conductivities',
          'Faraday 1st Law: m = Z * I * t = (E / 96500) * Q'
        ]
      }
    ]
  },
  {
    id: 'mm-chem-2',
    subject: 'Chemistry',
    title: 'Organic Chemistry: Reaction Mechanisms & Carbonyls',
    description: 'Named reactions, electrophilic/nucleophilic substitutions, and conversions.',
    children: [
      {
        title: '1. Carbonyl Reactions (Aldehydes & Ketones)',
        details: [
          'Aldol: Requires alpha-H, dil. NaOH -> beta-hydroxy aldehyde -> enal',
          'Cannizzaro: NO alpha-H, 50% NaOH -> disproportionation to alcohol + acid salt',
          'Nucleophilic addition: Reactivity order HCHO > RCHO > RCOR (steric + electronic)'
        ],
        subTopics: [
          'Tollens Test (Ammoniacal AgNO3) & Fehlings Test oxidize aliphatic aldehydes',
          'Haloform reaction (I2 + NaOH) tests for CH3-C=O and CH3-CH(OH)- groups'
        ]
      },
      {
        title: '2. Nucleophilic Substitutions (SN1 vs SN2)',
        details: [
          'SN1: 2-step, carbocation intermediate, polar protic solvent, 3° > 2° > 1° > CH3X, Racemization',
          'SN2: 1-step concerted, transition state, polar aprotic solvent, CH3X > 1° > 2° > 3°, Walden Inversion'
        ],
        subTopics: [
          'Good leaving groups: I- > Br- > Cl- > F-',
          'Nucleophilicity in polar protic solvents: I- > Br- > Cl- > F-'
        ]
      }
    ]
  },

  // ==========================================
  // PHYSICS MIND MAPS
  // ==========================================
  {
    id: 'mm-phy-1',
    subject: 'Physics',
    title: 'Mechanics & Rotational Dynamics',
    description: 'Kinematics, Newton laws, work energy theorem, rolling dynamics & gravitation.',
    children: [
      {
        title: '1. Rotational Motion & Pure Rolling',
        details: [
          'Pure rolling: v_cm = omega * R, contact point has zero instantaneous velocity',
          'Kinetic Energy: K_total = 1/2 M v^2 * (1 + K^2/R^2)',
          'Acceleration on Incline: a = (g sin theta) / (1 + K^2/R^2)'
        ],
        subTopics: [
          'Race down incline winner: Solid Sphere (K^2/R^2 = 0.4) > Disc (0.5) > Hollow Sphere (0.67) > Ring (1.0)',
          'Parallel Axis Theorem: I = I_cm + M d^2; Perpendicular Axis: I_z = I_x + I_y'
        ]
      },
      {
        title: '2. Gravitation & Orbital Motion',
        details: [
          'g variation: At height h: g_h = g(1 - 2h/R); At depth d: g_d = g(1 - d/R)',
          'Escape Velocity: v_e = sqrt(2 g R) = sqrt(2 G M / R) = 11.2 km/s on Earth',
          'Orbital Velocity: v_o = sqrt(g R) = 7.9 km/s (v_e = sqrt(2) * v_o)'
        ],
        subTopics: [
          'Kepler 3rd Law: T^2 is proportional to R^3',
          'Gravitational Potential at center of solid sphere: V_center = -1.5 * (G M / R)'
        ]
      }
    ]
  },
  {
    id: 'mm-phy-2',
    subject: 'Physics',
    title: 'Electrodynamics & Modern Physics',
    description: 'Current electricity, circuits, optics, dual nature & atomic models.',
    children: [
      {
        title: '1. Current Electricity & Circuits',
        details: [
          'Drift velocity: v_d = e E tau / m, Current: I = n e A v_d',
          'Kirchhoff Laws: Junction rule (Charge conservation), Loop rule (Energy conservation)',
          'Balanced Wheatstone Bridge: P / Q = R / S -> Zero galvanometer current'
        ],
        subTopics: [
          'Potentiometer compares EMF: E1 / E2 = l1 / l2',
          'Internal resistance: r = R * (l1 - l2) / l2'
        ]
      },
      {
        title: '2. Modern Physics & Photoelectric Effect',
        details: [
          'Einstein equation: K_max = h * nu - phi_0 = e * V_0',
          'De Broglie wavelength of accelerated electron: lambda = 12.27 / sqrt(V) Angstroms',
          'Bohr orbit radius: r_n = 0.529 * n^2 / Z Angstroms, Energy: E_n = -13.6 * Z^2 / n^2 eV'
        ],
        subTopics: [
          'Rydberg formula: 1 / lambda = R_H * Z^2 * (1/n1^2 - 1/n2^2)',
          'Stopping potential V0 depends strictly on frequency nu, NOT on intensity!'
        ]
      }
    ]
  }
];

// ==========================================
export const BOOKS_DATA: BookItem[] = [
  {
    id: 'book-ncert-bio',
    title: 'Master NCERT Biology Line-by-Line Highlighter & Notes',
    category: 'NCERT notes',
    subject: 'Biology',
    pages: 420,
    size: '18.4 MB',
    description: 'Every single line from NCERT Class 11 & 12 dissected with 3,500+ tagged PYQs, diagrams, and examiner secret traps.',
    rating: 4.96,
    highlights: ['100% NCERT verbatim alignment', 'Color coded: Green (High-yield), Yellow (Tricky)', 'Summary mind maps after every chapter']
  },
  {
    id: 'book-formula-phy',
    title: 'Pocket Formula Book for Physics NEET & JEE',
    category: 'Formula books',
    subject: 'Physics',
    pages: 180,
    size: '9.2 MB',
    description: 'Formula handbook with standard derivations, dimensional shortcuts, and common sign convention pitfalls.',
    rating: 4.91,
    highlights: ['All 28 chapters covered', 'Includes graphical tricks', 'Printable cheat-sheets included']
  },
  {
    id: 'book-reactions-chem',
    title: 'Organic Chemistry Reactions, Reagents & Mechanisms',
    category: 'Revision notes',
    subject: 'Chemistry',
    pages: 240,
    size: '12.8 MB',
    description: 'Comprehensive named reactions atlas with electron-pushing arrow mechanisms, solvent effects, and conversion roadmaps.',
    rating: 4.94,
    highlights: ['All 82 named reactions indexed', 'Conversion flowcharts from Alkane to Amines', 'Reagent function lookup table']
  },
  {
    id: 'book-pyq-archive',
    title: '37 Years Solved NEET & AIPMT Topic-Wise Archive',
    category: 'eBooks',
    subject: 'Biology',
    pages: 650,
    size: '34.5 MB',
    description: 'Complete authentic question bank from 1988 to 2024 with line-by-line NCERT references and step-by-step verified solutions.',
    rating: 4.98,
    highlights: ['Topic-wise categorized questions', 'Examiner frequency tag (Hot/Regular)', 'Detailed step-by-step solutions']
  }
];

// ==========================================
// PREVIOUS YEAR QUESTIONS (PYQS) REPOSITORY
// ==========================================
export const PYQS_DATA: PYQItem[] = [
  {
    id: 'pyq-bio-2024-1',
    subject: 'Biology',
    chapter: 'Molecular Basis of Inheritance',
    topic: 'Lac Operon',
    year: 2024,
    exam: 'NEET',
    frequency: 'Asked 6 times in last 7 years',
    conceptWeightage: 'Very High (12 Marks)',
    question: {
      id: 'pyq-q1',
      subject: 'Biology',
      chapter: 'Molecular Basis of Inheritance',
      topic: 'Lac Operon',
      difficulty: 'Medium',
      questionText: 'In the lac operon of E. coli, which gene encodes the enzyme beta-galactosidase?',
      options: ['z gene', 'y gene', 'a gene', 'i gene'],
      correctAnswer: 0,
      explanation: 'The z gene codes for beta-galactosidase, y gene codes for permease, and a gene codes for transacetylase.',
      tags: ['NEET 2024', 'NCERT Page 104', 'Class 12']
    }
  },
  {
    id: 'pyq-bio-2023-1',
    subject: 'Biology',
    chapter: 'Photosynthesis in Higher Plants',
    topic: 'C4 Pathway',
    year: 2023,
    exam: 'NEET',
    frequency: 'Asked every year',
    conceptWeightage: 'High (8 Marks)',
    question: {
      id: 'pyq-q2',
      subject: 'Biology',
      chapter: 'Photosynthesis in Higher Plants',
      topic: 'C4 Pathway',
      difficulty: 'Medium',
      questionText: 'In C4 plants, the first stable product of CO2 fixation is formed in:',
      options: ['Mesophyll cells (Oxaloacetic acid, 4C)', 'Bundle sheath cells (PGA)', 'Epidermal cells', 'Guard cells'],
      correctAnswer: 0,
      explanation: 'In C4 plants, CO2 is fixed by PEP carboxylase in mesophyll cells to form Oxaloacetic acid (OAA, 4C).',
      tags: ['NEET 2023', 'NCERT Class 11']
    }
  },
  {
    id: 'pyq-chem-2024-1',
    subject: 'Chemistry',
    chapter: 'Aldehydes, Ketones and Carboxylic Acids',
    topic: 'Named Reactions',
    year: 2024,
    exam: 'NEET',
    frequency: 'Asked 5 times',
    conceptWeightage: 'High (8 Marks)',
    question: {
      id: 'pyq-q3',
      subject: 'Chemistry',
      chapter: 'Aldehydes, Ketones and Carboxylic Acids',
      topic: 'Aldol & Cannizzaro',
      difficulty: 'Medium',
      questionText: 'Which of the following aldehydes will undergo Cannizzaro reaction on treatment with 50% NaOH?',
      options: ['Benzaldehyde (C6H5CHO)', 'Acetaldehyde (CH3CHO)', 'Propionaldehyde (CH3CH2CHO)', 'Acetone (CH3COCH3)'],
      correctAnswer: 0,
      explanation: 'Cannizzaro reaction is given by aldehydes having NO alpha-hydrogen atom, such as Benzaldehyde (C6H5CHO) and Formaldehyde (HCHO).',
      tags: ['NEET 2024', 'Organic Chemistry']
    }
  }
];

// ==========================================
// TOP MEDICAL & ENGINEERING COLLEGES DATABASE
// ==========================================
export const COLLEGES_DATA: any[] = [
  {
    id: 'clg-1',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'AIIMS',
    location: 'New Delhi',
    totalSeats: 125,
    closingRankGen: 55,
    closingRankOBC: 240,
    closingRankSC: 1100,
    closingRankST: 2800,
    approxFeePerYear: '₹1,628 / yr',
    nirfRank: 1
  },
  {
    id: 'clg-2',
    name: 'Maulana Azad Medical College (MAMC)',
    type: 'Government',
    location: 'New Delhi',
    totalSeats: 250,
    closingRankGen: 98,
    closingRankOBC: 410,
    closingRankSC: 1850,
    closingRankST: 4200,
    approxFeePerYear: '₹4,445 / yr',
    nirfRank: 5
  },
  {
    id: 'clg-3',
    name: 'Christian Medical College (CMC)',
    type: 'Private',
    location: 'Vellore, Tamil Nadu',
    totalSeats: 100,
    closingRankGen: 220,
    closingRankOBC: 650,
    closingRankSC: 2900,
    closingRankST: 6500,
    approxFeePerYear: '₹52,830 / yr',
    nirfRank: 3
  },
  {
    id: 'clg-4',
    name: 'King George\'s Medical University (KGMU)',
    type: 'Government',
    location: 'Lucknow, Uttar Pradesh',
    totalSeats: 250,
    closingRankGen: 1450,
    closingRankOBC: 2800,
    closingRankSC: 14200,
    closingRankST: 28000,
    approxFeePerYear: '₹54,900 / yr',
    nirfRank: 12
  },
  {
    id: 'clg-5',
    name: 'JIPMER (Jawaharlal Institute of Postgraduate Medical Education)',
    type: 'Government',
    location: 'Puducherry',
    totalSeats: 182,
    closingRankGen: 270,
    closingRankOBC: 890,
    closingRankSC: 3400,
    closingRankST: 7800,
    approxFeePerYear: '₹7,620 / yr',
    nirfRank: 2
  }
];

// ==========================================
// TOP RANKER SUCCESS STORIES
// ==========================================
export const RANKER_STORIES: any[] = [
  {
    id: 'story-1',
    name: 'Aryan Sharma',
    exam: 'NEET',
    air: 24,
    score: '715 / 720',
    college: 'AIIMS New Delhi',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    quote: 'Practicing the 45-question chapterwise and Sunday CBT test series with instant solutions helped me eliminate negative marks.',
    state: 'Maharashtra',
    year: 2024,
    category: 'General',
    keyStrategy: 'Solved all 32 biology chapters with 1-min-per-question strict timer discipline.'
  },
  {
    id: 'story-2',
    name: 'Sneha Patel',
    exam: 'NEET',
    air: 68,
    score: '708 / 720',
    college: 'MAMC New Delhi',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    quote: 'The flashcards and mind maps made my morning revision super fast before attempting Sunday mocks.',
    state: 'Gujarat',
    year: 2024,
    category: 'OBC',
    keyStrategy: 'Replaced random MCQs with focused 45-question tests and daily DPPs.'
  }
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS (FAQS)
// ==========================================
export const FAQS_DATA: any[] = [
  {
    question: 'How is this CBT Test Series structured for NEET 2026/2027?',
    answer: 'Every test is strictly structured with 45 questions, 45 minutes allotted time, and 180 marks (+4 for correct, -1 for incorrect). It features scheduled Sunday-to-Sunday All India mock tests, Class 11 & 12 chapter-wise tests, and customizable tests from our 6,465 verified NCERT question bank.',
    category: 'CBT Test Series'
  },
  {
    question: 'Can I download question papers and scorecards as PDFs for offline practice?',
    answer: 'Yes! Every test, DPP, formula book, and scorecard comes with a 1-click "Download PDF" button that generates a high-quality printable document with questions, OMR matrix, and verified step solutions.',
    category: 'Downloads & Study Material'
  },
  {
    question: 'How does the 24/7 AI Faculty Doubt Solver work?',
    answer: 'You can paste or type any question in Biology, Chemistry, or Physics. Our system uses advanced AI and verified NCERT references to provide instant step-by-step derivations, calculations, and examiner tips.',
    category: 'Academic Doubts'
  }
];

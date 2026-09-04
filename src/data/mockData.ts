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
  // 1. SUNDAY-TO-SUNDAY ALL INDIA SCHEDULED TEST SERIES (45 Qs EACH & 45 MINS)
  // ==========================================
  {
    id: 'test-sunday-01',
    title: 'Sunday Mock 01: Diversity in Living World (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 1: The Living World, Biological Classification, Plant Kingdom & Animal Kingdom (45 High-Yield NCERT Questions)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    scheduledDate: '2026-09-06',
    features: [
      '45 Standard NEET Exam Questions (180 Marks)',
      'Allotted Time: 45 Minutes (1 Min per Question)',
      'Unit 1 Mastery: Binomial rules, 5 Kingdoms, Algae/Gymnosperms & Non-chordates',
      'All India Percentile & Weak Area Diagnostic'
    ],
    questions: get45(FINGERTIPS_BIO_CH01_MCQS),
    enrolledStudentsCount: 142000,
    avgScore: 148
  },
  {
    id: 'test-sunday-02',
    title: 'Sunday Mock 02: Structural Organisation in Plants & Animals (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 2: Morphology of Flowering Plants, Anatomy of Flowering Plants, Animal Tissues & Cockroach/Frog',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    scheduledDate: '2026-09-13',
    features: [
      '45 Precision NCERT Line-by-Line Questions',
      'Floral Formulas, Dicot/Monocot Anatomy & Epithelial/Connective Tissues',
      'Allotted Time: 45 Minutes (180 Marks)',
      'Detailed Step Solutions with NCERT Page References'
    ],
    questions: get45(FINGERTIPS_BIO_CH05_MCQS),
    enrolledStudentsCount: 138000,
    avgScore: 142
  },
  {
    id: 'test-sunday-03',
    title: 'Sunday Mock 03: Cell Biology, Biomolecules & Division (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 3: Cell: The Unit of Life, Biomolecules & Cell Cycle/Division (Mitosis & Meiosis)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    scheduledDate: '2026-09-20',
    features: [
      '45 High-Yield Questions on Organelles, Enzyme Kinetics & Meiotic Prophase I',
      'Sub-phases of Prophase I, Activation Energy & Secondary Metabolites',
      '45 Mins CBT Duration & 180 Marks',
      'All India Rank Prediction'
    ],
    questions: get45(FINGERTIPS_BIO_CH08_MCQS),
    enrolledStudentsCount: 154000,
    avgScore: 139
  },
  {
    id: 'test-sunday-04',
    title: 'Sunday Mock 04: Plant Physiology Mastery (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 4: Photosynthesis (Light/Dark, C3/C4), Respiration (Glycolysis, Krebs, ETS) & Plant Growth Regulators (Auxin, GA, Cytokinin, Ethylene, ABA)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    scheduledDate: '2026-09-27',
    features: [
      '45 High-Frequency Bioenergetics & Hormone Questions',
      'Kranz Anatomy, ATP Yield Calculations & Photolysis of Water',
      '45 Mins CBT Duration & 180 Marks',
      'Instant Scorecard with Weak Chapter Diagnostics'
    ],
    questions: get45(FINGERTIPS_BIO_CH11_MCQS),
    enrolledStudentsCount: 149000,
    avgScore: 136
  },
  {
    id: 'test-sunday-05',
    title: 'Sunday Mock 05: Human Physiology Core Systems (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 5: Breathing & Gas Exchange, Body Fluids & ECG, Excretion & RAAS, Locomotion, Neural System & Endocrine Hormones',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    scheduledDate: '2026-10-04',
    features: [
      '45 Clinical & Physiological Mechanism Questions',
      'Counter-Current Multiplier, Sliding Filament, Action Potential & Cardiac Cycle',
      '45 Mins CBT Duration & 180 Marks',
      'Verified Step-by-Step Explanations'
    ],
    questions: get45(FINGERTIPS_BIO_CH15_MCQS),
    enrolledStudentsCount: 162000,
    avgScore: 144
  },
  {
    id: 'test-sunday-06',
    title: 'Sunday Mock 06: Reproduction in Plants & Humans (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 6: Sexual Reproduction in Flowering Plants, Human Reproduction & Reproductive Health (Contraception & ART)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    scheduledDate: '2026-10-11',
    features: [
      '45 NCERT Questions on Double Fertilisation, Spermatogenesis & IUDs',
      'Outbreeding devices, Menstrual Cycle phases & MTP/IVF protocols',
      '45 Mins CBT Duration & 180 Marks',
      '100% NCERT Verbatim Solutions'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH01_MCQS),
    enrolledStudentsCount: 156000,
    avgScore: 151
  },
  {
    id: 'test-sunday-07',
    title: 'Sunday Mock 07: Genetics, Molecular Biology & Evolution (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 7: Principles of Inheritance, Molecular Basis of Inheritance (DNA, Replication, Transcription, Lac Operon) & Evolution (Hardy-Weinberg)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    scheduledDate: '2026-10-18',
    features: [
      '45 High-Weightage Genetics & Molecular Biology Questions',
      'Pedigree Charts, Griffith/Hershey-Chase Experiments & Human Evolution',
      '45 Mins CBT Duration & 180 Marks',
      'AIR & National Percentile Benchmark'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH05_MCQS),
    enrolledStudentsCount: 171000,
    avgScore: 134
  },
  {
    id: 'test-sunday-08',
    title: 'Sunday Mock 08: Biotechnology & Human Welfare (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 8 & 9: Human Health & Disease, Microbes in Welfare, Biotech Principles (pBR322, PCR) & Biotech Applications (Bt Cotton, RNAi, Humulin)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    scheduledDate: '2026-10-25',
    features: [
      '45 Questions on Immunity, Vaccines, Restriction Enzymes & Bioreactors',
      'Malaria Cycle, Antibodies, Gene Therapy & Downstream Processing',
      '45 Mins CBT Duration & 180 Marks',
      'Detailed Official MTG Solutions'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH09_MCQS),
    enrolledStudentsCount: 147000,
    avgScore: 146
  },
  {
    id: 'test-sunday-09',
    title: 'Sunday Mock 09: Ecology & Environmental Biology (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Unit 10: Organisms and Populations (Growth Models & Interactions), Ecosystem (Productivity & Pyramids) & Biodiversity and Conservation (Hotspots & Sanctuaries)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    scheduledDate: '2026-11-01',
    features: [
      '45 NCERT Ecology Questions (dN/dt equations, 10% law, Evil Quartet)',
      'Latitudinal gradients, In-situ vs Ex-situ & Sacred Groves',
      '45 Mins CBT Duration & 180 Marks',
      'Instant Weak Area Analytics'
    ],
    questions: get45(FINGERTIPS_BIO_C12_CH11_MCQS),
    enrolledStudentsCount: 141000,
    avgScore: 149
  },
  {
    id: 'test-sunday-10',
    title: 'Sunday Mock 10: NEET Full Syllabus Model Test 1 (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Full NCERT Biology Syllabus (Class 11 & Class 12 Combined) - Section A 45 Questions',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    scheduledDate: '2026-11-08',
    features: [
      '45 Full Syllabus Questions with Balanced Botany & Zoology Distribution',
      'A&R, Statement Based, Matching & Experimental Drills',
      '45 Mins CBT Duration & 180 Marks',
      '100% Verified MTG Official Answer Key'
    ],
    questions: get45(NEET_MODEL_TEST_PAPER_1, 0),
    enrolledStudentsCount: 185000,
    avgScore: 141
  },
  {
    id: 'test-sunday-11',
    title: 'Sunday Mock 11: NEET Full Syllabus Model Test 2 (45 Qs)',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Full NCERT Biology Syllabus (Class 11 & Class 12 Combined) - Section B 45 Questions',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    scheduledDate: '2026-11-15',
    features: [
      '45 Full Syllabus Questions Covering Enzymes, Hormones, Genetics & Ecology',
      'Photolysis, RAAS, Meiosis Stages & Recombinant DNA',
      '45 Mins CBT Duration & 180 Marks',
      '100% Verified MTG Official Answer Key'
    ],
    questions: get45(NEET_MODEL_TEST_PAPER_2, 0),
    enrolledStudentsCount: 179000,
    avgScore: 138
  },

  // ==========================================
  // 2. CHAPTER-WISE MASTERY TESTS (45 QUESTIONS & 45 MINS EACH)
  // ==========================================
  {
    id: 'test-ft-bio-ch01-mcqs-45',
    title: 'Chapter 01: The Living World (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 01: What is Living, Diversity, Binomial Nomenclature, Taxonomic Hierarchy & Aids',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH01_MCQS),
    enrolledStudentsCount: 88000,
    avgScore: 154
  },
  {
    id: 'test-ft-bio-ch02-mcqs-45',
    title: 'Chapter 02: Biological Classification (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 02: Monera, Protista, Fungi, Viruses, Viroids & Lichens',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH02_MCQS),
    enrolledStudentsCount: 85000,
    avgScore: 147
  },
  {
    id: 'test-ft-bio-ch03-mcqs-45',
    title: 'Chapter 03: Plant Kingdom (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 03: Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae), Bryophytes, Pteridophytes & Gymnosperms',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH03_MCQS),
    enrolledStudentsCount: 82000,
    avgScore: 140
  },
  {
    id: 'test-ft-bio-ch04-mcqs-45',
    title: 'Chapter 04: Animal Kingdom (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 04: Non-Chordates (Porifera to Hemichordata) & Chordates (Cyclostomata to Mammalia)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH04_MCQS),
    enrolledStudentsCount: 91000,
    avgScore: 138
  },
  {
    id: 'test-ft-bio-ch05-mcqs-45',
    title: 'Chapter 05: Morphology of Flowering Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 05: Root, Stem, Leaf Modifications, Inflorescence, Flower Anatomy, Fruit & Families',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH05_MCQS),
    enrolledStudentsCount: 84000,
    avgScore: 144
  },
  {
    id: 'test-ft-bio-ch06-mcqs-45',
    title: 'Chapter 06: Anatomy of Flowering Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 06: Meristematic & Permanent Tissues, Vascular Bundles, Dicot/Monocot Anatomy & Secondary Growth',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH06_MCQS),
    enrolledStudentsCount: 79000,
    avgScore: 139
  },
  {
    id: 'test-ft-bio-ch07-mcqs-45',
    title: 'Chapter 07: Structural Organisation in Animals (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 07: Epithelial, Connective, Muscular & Neural Tissues, Cockroach Morphology & Frog Anatomy',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH07_MCQS),
    enrolledStudentsCount: 81000,
    avgScore: 145
  },
  {
    id: 'test-ft-bio-ch08-mcqs-45',
    title: 'Chapter 08: Cell: The Unit of Life (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 08: Prokaryotic & Eukaryotic Cells, Endomembrane System, Mitochondria, Plastids & Nucleus',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH08_MCQS),
    enrolledStudentsCount: 96000,
    avgScore: 152
  },
  {
    id: 'test-ft-bio-ch09-mcqs-45',
    title: 'Chapter 09: Biomolecules (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 09: Amino acids, Proteins, Lipids, Nucleic Acids, Cellular Pool & Enzyme Action/Kinetics',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH09_MCQS),
    enrolledStudentsCount: 87000,
    avgScore: 141
  },
  {
    id: 'test-ft-bio-ch10-mcqs-45',
    title: 'Chapter 10: Cell Cycle & Division (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 10: Interphase (G1, S, G2), Mitosis & Meiosis I/II with Sub-phases',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH10_MCQS),
    enrolledStudentsCount: 89000,
    avgScore: 148
  },
  {
    id: 'test-ft-bio-ch11-mcqs-45',
    title: 'Chapter 11: Photosynthesis in Higher Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 11: Light Reaction, Z-Scheme, Calvin Cycle (C3), Hatch & Slack (C4) & Factors',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH11_MCQS),
    enrolledStudentsCount: 92000,
    avgScore: 137
  },
  {
    id: 'test-ft-bio-ch12-mcqs-45',
    title: 'Chapter 12: Respiration in Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 12: Glycolysis, Link Reaction, Krebs Cycle, ETS, ATP Yield & RQ Values',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH12_MCQS),
    enrolledStudentsCount: 86000,
    avgScore: 139
  },
  {
    id: 'test-ft-bio-ch13-mcqs-45',
    title: 'Chapter 13: Plant Growth & Development (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 13: Growth Kinetics, Plasticity & PGRs (Auxin, GA, Cytokinin, Ethylene, ABA)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH13_MCQS),
    enrolledStudentsCount: 81000,
    avgScore: 147
  },
  {
    id: 'test-ft-bio-ch14-mcqs-45',
    title: 'Chapter 14: Breathing & Exchange of Gases (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 14: Respiratory Volumes, Gas Transport, Regulation & Disorders (Asthma, Emphysema)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH14_MCQS),
    enrolledStudentsCount: 88000,
    avgScore: 153
  },
  {
    id: 'test-ft-bio-ch15-mcqs-45',
    title: 'Chapter 15: Body Fluids & Circulation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 15: Blood Elements, Coagulation, Cardiac Cycle, ECG Waves & Double Circulation',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH15_MCQS),
    enrolledStudentsCount: 94000,
    avgScore: 142
  },
  {
    id: 'test-ft-bio-ch16-mcqs-45',
    title: 'Chapter 16: Excretory Products & Elimination (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 16: Nephron, Urine Formation, Counter-Current Mechanism, RAAS Regulation & Disorders',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH16_MCQS),
    enrolledStudentsCount: 86000,
    avgScore: 143
  },
  {
    id: 'test-ft-bio-ch17-mcqs-45',
    title: 'Chapter 17: Locomotion & Movement (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 17: Sarcomere, Sliding Filament Theory, Human Skeleton (206 bones), Joints & Disorders',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH17_MCQS),
    enrolledStudentsCount: 84000,
    avgScore: 149
  },
  {
    id: 'test-ft-bio-ch18-mcqs-45',
    title: 'Chapter 18: Neural Control & Coordination (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 18: Neuron Structure, Action Potential, Synaptic Transmission & Human Brain Regions',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH18_MCQS),
    enrolledStudentsCount: 82000,
    avgScore: 141
  },
  {
    id: 'test-ft-bio-ch19-mcqs-45',
    title: 'Chapter 19: Chemical Coordination & Integration (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 11 Chapter 19: Endocrine Glands (Pituitary, Thyroid, Adrenal, Pancreas), Hormones & Mechanism of Action',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_CH19_MCQS),
    enrolledStudentsCount: 87000,
    avgScore: 148
  },

  // CLASS 12 CHAPTER TESTS (45 Qs EACH)
  {
    id: 'test-ft-bio-c12-ch01-mcqs-45',
    title: 'Class 12 Ch 01: Sexual Reproduction in Flowering Plants (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 01: Microsporogenesis, Megasporogenesis, Pollination, Outbreeding Devices, Double Fertilisation & Apomixis',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH01_MCQS),
    enrolledStudentsCount: 97000,
    avgScore: 153
  },
  {
    id: 'test-ft-bio-c12-ch02-mcqs-45',
    title: 'Class 12 Ch 02: Human Reproduction (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 02: Spermatogenesis, Oogenesis, Menstrual Cycle, Fertilisation, Implantation & Parturition',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH02_MCQS),
    enrolledStudentsCount: 104000,
    avgScore: 155
  },
  {
    id: 'test-ft-bio-c12-ch03-mcqs-45',
    title: 'Class 12 Ch 03: Reproductive Health (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 03: Contraceptive Methods, IUDs, MTP Act, STIs & Assisted Reproductive Technologies (ART)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Easy',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH03_MCQS),
    enrolledStudentsCount: 91000,
    avgScore: 161
  },
  {
    id: 'test-ft-bio-c12-ch04-mcqs-45',
    title: 'Class 12 Ch 04: Principles of Inheritance & Variation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 04: Mendelian Genetics, Linkage, Recombination, Sex Determination & Genetic Disorders (Pedigree, Aneuploidy)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH04_MCQS),
    enrolledStudentsCount: 99000,
    avgScore: 136
  },
  {
    id: 'test-ft-bio-c12-ch05-mcqs-45',
    title: 'Class 12 Ch 05: Molecular Basis of Inheritance (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 05: DNA Structure, Nucleosomes, Replication, Transcription, Genetic Code, Translation, Lac Operon & DNA Fingerprinting',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH05_MCQS),
    enrolledStudentsCount: 108000,
    avgScore: 137
  },
  {
    id: 'test-ft-bio-c12-ch06-mcqs-45',
    title: 'Class 12 Ch 06: Evolution (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 06: Origin of Life, Evidences (Homology/Analogy), Adaptive Radiation, Hardy-Weinberg & Human Evolution',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH06_MCQS),
    enrolledStudentsCount: 88000,
    avgScore: 147
  },
  {
    id: 'test-ft-bio-c12-ch07-mcqs-45',
    title: 'Class 12 Ch 07: Human Health & Disease (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 07: Pathogens (Malaria, Typhoid), Innate/Acquired Immunity, Antibodies, AIDS, Cancer & Drug Abuse',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH07_MCQS),
    enrolledStudentsCount: 93000,
    avgScore: 152
  },
  {
    id: 'test-ft-bio-c12-ch08-mcqs-45',
    title: 'Class 12 Ch 08: Microbes in Human Welfare (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 08: Household Products, Industrial Fermentation, Sewage Treatment (BOD/Flocs), Biogas & Biocontrol',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Easy',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH08_MCQS),
    enrolledStudentsCount: 84000,
    avgScore: 159
  },
  {
    id: 'test-ft-bio-c12-ch09-mcqs-45',
    title: 'Class 12 Ch 09: Biotechnology: Principles & Processes (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 09: Restriction Endonucleases, Agarose Gel Electrophoresis, pBR322 Cloning Vector, PCR & Bioreactors',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH09_MCQS),
    enrolledStudentsCount: 95000,
    avgScore: 142
  },
  {
    id: 'test-ft-bio-c12-ch10-mcqs-45',
    title: 'Class 12 Ch 10: Biotechnology & its Applications (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 10: Bt Cotton, RNA Interference (dsRNA), Humulin Recombinant Insulin, ADA Gene Therapy & Transgenics',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH10_MCQS),
    enrolledStudentsCount: 89000,
    avgScore: 148
  },
  {
    id: 'test-ft-bio-c12-ch11-mcqs-45',
    title: 'Class 12 Ch 11: Organisms & Populations (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 11: Adaptations, Population Growth Models (dN/dt equations) & Interspecific Interactions (Mutualism, Competition)',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH11_MCQS),
    enrolledStudentsCount: 87000,
    avgScore: 151
  },
  {
    id: 'test-ft-bio-c12-ch12-mcqs-45',
    title: 'Class 12 Ch 12: Ecosystem (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 12: Stratification, Productivity (GPP/NPP), Decomposition Steps, PAR Energy Flow & Eltonian Pyramids',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH12_MCQS),
    enrolledStudentsCount: 83000,
    avgScore: 154
  },
  {
    id: 'test-ft-bio-c12-ch13-mcqs-45',
    title: 'Class 12 Ch 13: Biodiversity & Conservation (45 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Class 12 Chapter 13: Latitudinal Gradients, Species-Area Curve, Evil Quartet, 34 Hotspots, In-situ/Ex-situ & Sacred Groves',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Easy',
    cbtMode: true,
    features: ['45 NCERT Questions', '45 Mins Allotted Time', '+4 / -1 Marking', 'Detailed Solutions'],
    questions: get45(FINGERTIPS_BIO_C12_CH13_MCQS),
    enrolledStudentsCount: 92000,
    avgScore: 158
  },

  // ==========================================
  // 3. CHEMISTRY CHAPTER TESTS (45 QUESTIONS & 45 MINS)
  // ==========================================
  {
    id: 'test-chem-mock-1',
    title: 'Chemistry Full Mock 1: Physical, Inorganic & Organic (45 Qs)',
    category: 'major',
    exam: 'NEET',
    syllabus: 'Full NEET Chemistry: Mole Concept, Thermodynamics, Equilibrium, Coordination, GOC, Hydrocarbons & Carbonyls',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 Questions (180 Marks)', '45 Mins Duration', 'NTA Pattern', 'Detailed Solutions'],
    questions: get45(CHEMISTRY_MOCK_TEST_1_QUESTIONS),
    enrolledStudentsCount: 112000,
    avgScore: 132
  },
  {
    id: 'test-chem-mock-2',
    title: 'Chemistry Full Mock 2: High Yield Score Booster (45 Qs)',
    category: 'major',
    exam: 'NEET',
    syllabus: 'Full NEET Chemistry: Electrochemistry, Kinetics, d/f-Block, Alcohols, Phenols, Ethers & Amines',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 Questions (180 Marks)', '45 Mins Duration', 'NTA Pattern', 'Detailed Solutions'],
    questions: get45(CHEMISTRY_MOCK_TEST_2_QUESTIONS),
    enrolledStudentsCount: 108000,
    avgScore: 129
  },

  // ==========================================
  // 4. PHYSICS CHAPTER TESTS (45 QUESTIONS & 45 MINS)
  // ==========================================
  {
    id: 'test-phy-mechanics',
    title: 'Physics Mastery: Mechanics & Vectors (45 Qs)',
    category: 'part',
    exam: 'NEET',
    syllabus: 'Units & Dimensions, Vectors, Motion in 1D/2D, Laws of Motion & Gravitation',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 Numerical & Concept Questions', '45 Mins Duration', 'Step-by-step Formulas', 'Instant Analysis'],
    questions: get45([...VECTORS_BOOK_QUESTIONS, ...UNITS_BOOK_QUESTIONS, ...MOTION_BOOK_QUESTIONS, ...GRAVITATION_BOOK_QUESTIONS]),
    enrolledStudentsCount: 121000,
    avgScore: 124
  },
  {
    id: 'test-phy-electrodynamics',
    title: 'Physics Mastery: Electrodynamics & Magnetism (45 Qs)',
    category: 'part',
    exam: 'NEET',
    syllabus: 'Electrostatics, Gauss Law, Capacitance, Current Electricity, Magnetism & Biot-Savart Law',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 High-Yield Physics Questions', '45 Mins Duration', 'Standard NEET Numerical Level', 'Detailed Explanations'],
    questions: get45([...ELECTROSTATICS_BOOK_QUESTIONS, ...MAGNETISM_BOOK_QUESTIONS, ...PHYSICS_THERMO_QUESTIONS]),
    enrolledStudentsCount: 118000,
    avgScore: 121
  }
];

// ==========================================
// EXPANSIVE, HIGH-YIELD FLASHCARDS DATABASE (30+ RICH CARDS)
// ==========================================
export const FLASHCARDS_DATA: Flashcard[] = [
  // BIOLOGY FLASHCARDS
  {
    id: 'fc-bio-1',
    subject: 'Biology',
    category: 'Formulas',
    topic: 'Population Ecology - Growth Models',
    frontTitle: 'Exponential vs Logistic Growth Equations',
    frontContent: 'State the differential equations for Exponential (unlimited resources) and Logistic (carrying capacity K) population growth.',
    frontFormula: 'dN/dt = rN  vs  dN/dt = rN ((K - N) / K)',
    backExplanation: '1. Exponential Growth (J-shaped curve): dN/dt = rN. Integral form: N_t = N_0 * e^(rt). Occurs when resources are unlimited.\n2. Logistic Growth (Verhulst-Pearl S-shaped / Sigmoid curve): dN/dt = rN((K - N)/K). More realistic model as resources are finite.',
    backKeyPoints: [
      'r = Intrinsic rate of natural increase (Biotic potential)',
      'K = Carrying capacity (maximum population environment can sustain)',
      '(K - N)/K represents Environmental Resistance factor'
    ],
    mnemonic: 'Remember: J-shape is Just rN, S-shape Slows down at K!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-2',
    subject: 'Biology',
    category: 'Concepts',
    topic: 'Genetics - Mendelian Dihybrid Ratio',
    frontTitle: 'Mendelian Dihybrid Phenotypic & Genotypic Ratios',
    frontContent: 'What are the exact phenotypic and genotypic ratios in a standard dihybrid cross F2 generation?',
    backExplanation: 'Phenotypic Ratio = 9 : 3 : 3 : 1 (9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green).\nGenotypic Ratio = 1:2:1 : 2:4:2 : 1:2:1 (9 different genotypes across 16 zygotic combinations).',
    backKeyPoints: [
      'Homozygous dominant RRYY = 1/16',
      'Double heterozygous RrYy = 4/16 = 1/4',
      'Double homozygous recessive rryy = 1/16'
    ],
    mnemonic: 'Phone Number trick: 121-242-121 for genotypes!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-3',
    subject: 'Biology',
    category: 'Diagrams',
    topic: 'Plant Physiology - C4 Pathway (Kranz Anatomy)',
    frontTitle: 'Primary CO2 Acceptor & Enzyme in C4 Plants',
    frontContent: 'Identify the primary CO2 acceptor and enzyme in mesophyll cells, and the Calvin cycle location in C4 plants.',
    backExplanation: 'Primary CO2 Acceptor: Phosphoenolpyruvate (PEP) - 3 carbon compound in Mesophyll cells.\nEnzyme: PEP carboxylase (PEPcase) - lacks RuBisCO in mesophyll.\nFirst stable product: Oxaloacetic acid (OAA) - 4C dicarboxylic acid.\nCalvin Cycle occurs exclusively in Bundle Sheath cells where RuBisCO is concentrated.',
    backKeyPoints: [
      'Kranz anatomy: Wreath-like large bundle sheath cells with thick suberized walls',
      'Zero photorespiration: High photosynthetic efficiency under intense light and temperature',
      'Examples: Sugarcane, Maize, Sorghum'
    ],
    mnemonic: 'PEP catches CO2 to form OAA in Mesophyll!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-bio-4',
    subject: 'Biology',
    category: 'Reactions',
    topic: 'Cell Respiration - Krebs Cycle Energetics',
    frontTitle: 'ATP & Reduced Coenzyme Yield per Glucose',
    frontContent: 'What is the net yield of NADH, FADH2, GTP/ATP from 1 molecule of Glucose during Krebs Cycle (2 turns)?',
    frontFormula: '2 Acetyl-CoA -> 6 NADH + 2 FADH2 + 2 GTP (ATP)',
    backExplanation: 'For 2 turns of Krebs cycle (1 Glucose):\n• 6 NADH -> 6 * 3 = 18 ATP (via ETS complex I)\n• 2 FADH2 -> 2 * 2 = 4 ATP (via ETS complex II)\n• 2 GTP -> 2 ATP (Substrate-level phosphorylation)\nTotal from Krebs cycle = 24 ATP molecules.',
    backKeyPoints: [
      'Succinyl-CoA to Succinate is the ONLY substrate-level phosphorylation step',
      'Succinate to Fumarate is the ONLY FADH2 generation step (enzyme: Succinate dehydrogenase in inner membrane)',
      'Total aerobic respiration yield = 36 or 38 ATP'
    ],
    mnemonic: '6-2-2 Rule: 6 NADH, 2 FADH2, 2 GTP per Glucose in Krebs!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-bio-5',
    subject: 'Biology',
    category: 'Concepts',
    topic: 'Molecular Biology - Lac Operon',
    frontTitle: 'Structural Genes & Products of Lac Operon',
    frontContent: 'What are the products encoded by genes z, y, and a of the E. coli lac operon?',
    backExplanation: '• z gene -> beta-galactosidase (hydrolyzes lactose into glucose + galactose)\n• y gene -> permease (increases cell membrane permeability to beta-galactosides)\n• a gene -> transacetylase (transfers acetyl group to beta-galactosides)\n• i gene (regulatory) -> codes for repressor protein constitutively.',
    backKeyPoints: [
      'Inducer: Allolactose (binds to repressor and inactivates it)',
      'Operon is inducible and under both negative and positive control',
      'Discovered by Francois Jacob and Jacques Monod'
    ],
    mnemonic: 'Z-Y-A = B-P-T (Beta-gal, Permease, Transacetylase)',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-6',
    subject: 'Biology',
    category: 'Formulas',
    topic: 'Biodiversity - Species-Area Relationship',
    frontTitle: 'Alexander von Humboldt Species-Area Curve',
    frontContent: 'State the rectangular hyperbola equation and logarithmic linear form for species-area relationship.',
    frontFormula: 'S = C * A^Z  ->  log S = log C + Z * log A',
    backExplanation: 'On logarithmic scale, the relationship is a straight line: log S = log C + Z log A.\n• S = Species richness\n• A = Area\n• Z = Slope of line (regression coefficient, usually 0.1 to 0.2 for local regions; 0.6 to 1.2 for entire continents)\n• C = Y-intercept.',
    backKeyPoints: [
      'Frugivorous birds and mammals in tropical forests of continents give Z = 1.15',
      'Steeper slope (higher Z) means species richness rises rapidly with area'
    ],
    mnemonic: 'Log S = Log C + Z Log A (Straight line on log-log paper)',
    difficulty: 'Medium'
  },
  {
    id: 'fc-bio-7',
    subject: 'Biology',
    category: 'Concepts',
    topic: 'Human Physiology - RAAS Pathway',
    frontTitle: 'Renin-Angiotensin-Aldosterone System (RAAS)',
    frontContent: 'What triggers renin release and how does Angiotensin II restore blood pressure and GFR?',
    backExplanation: '1. Fall in GFR / Blood Pressure stimulates Juxtaglomerular (JG) cells to secrete Renin.\n2. Renin converts Angiotensinogen -> Angiotensin I.\n3. ACE converts Angiotensin I -> Angiotensin II (potent vasoconstrictor).\n4. Angiotensin II activates Adrenal Cortex to release Aldosterone -> reabsorbs Na+ and water from DCT.\n5. Blood volume, BP and GFR are fully restored.',
    backKeyPoints: [
      'ANF (Atrial Natriuretic Factor) from heart acts as an antagonistic check on RAAS',
      'ANF causes vasodilation and decreases blood pressure'
    ],
    mnemonic: 'Renin -> Angio II -> Aldosterone -> Na+ & Water retention!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-bio-8',
    subject: 'Biology',
    category: 'Concepts',
    topic: 'Biotechnology - Vectors & PCR',
    frontTitle: 'pBR322 Selectable Markers & PCR Steps',
    frontContent: 'Explain insertional inactivation in pBR322 and list the 3 thermal steps of PCR.',
    backExplanation: 'pBR322 has two antibiotic resistance genes: ampR and tetR.\n• Inserting foreign gene into BamHI site of tetR causes loss of tetracycline resistance (insertional inactivation).\n• PCR Steps: 1. Denaturation (94°C) -> 2. Annealing of primers (50-60°C) -> 3. Extension via Taq Polymerase (72°C from Thermus aquaticus).',
    backKeyPoints: [
      'Selectable markers distinguish transformants from non-transformants',
      '1 billion copies produced after ~30 cycles of PCR'
    ],
    mnemonic: 'D-A-E: Denature (94°C), Anneal (54°C), Extend (72°C)!',
    difficulty: 'Medium'
  },

  // CHEMISTRY FLASHCARDS
  {
    id: 'fc-chem-1',
    subject: 'Chemistry',
    category: 'Reactions',
    topic: 'Organic - Aldol vs Cannizzaro',
    frontTitle: 'Aldol Condensation vs Cannizzaro Reaction',
    frontContent: 'What is the fundamental structural difference determining whether an aldehyde undergoes Aldol or Cannizzaro reaction?',
    backExplanation: '• Aldol Condensation: Requires AT LEAST ONE alpha-hydrogen (reagent: dil. NaOH). Forms beta-hydroxy aldehyde which dehydrates to alpha,beta-unsaturated aldehyde.\n• Cannizzaro Reaction: Aldehydes with NO alpha-hydrogen (e.g. Formaldehyde HCHO, Benzaldehyde C6H5CHO). Reagent: Conc. 50% NaOH. Undergoes self-oxidation-reduction to alcohol and acid salt.',
    backKeyPoints: [
      'Acetaldehyde CH3CHO has 3 alpha-H -> Aldol',
      'Formaldehyde HCHO has 0 alpha-H -> Cannizzaro',
      'Benzaldehyde C6H5CHO has 0 alpha-H -> Cannizzaro'
    ],
    mnemonic: 'Alpha-H = Aldol! NO Alpha-H = Cannizzaro!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-chem-2',
    subject: 'Chemistry',
    category: 'Formulas',
    topic: 'Physical - Nernst Equation & Cell Potential',
    frontTitle: 'Nernst Equation at 298 K (25°C)',
    frontContent: 'State the Nernst equation for an electrochemical cell reaction at standard temperature 298 K.',
    frontFormula: 'E_cell = E°_cell - (0.0591 / n) * log Q',
    backExplanation: 'At 298 K:\nE_cell = E°_cell - (2.303 RT / nF) log Q = E°_cell - (0.0591 / n) log [Products] / [Reactants].\nAt equilibrium: E_cell = 0 and Q = K_c -> E°_cell = (0.0591 / n) log K_c.',
    backKeyPoints: [
      'n = number of moles of electrons transferred in balanced reaction',
      'Delta G° = -n F E°_cell'
    ],
    mnemonic: 'E = E° minus 0.0591 over n times log Q',
    difficulty: 'Hard'
  },
  {
    id: 'fc-chem-3',
    subject: 'Chemistry',
    category: 'Concepts',
    topic: 'Inorganic - Lanthanoid Contraction',
    frontTitle: 'Lanthanoid Contraction & Chemical Twins',
    frontContent: 'Why do 4d and 5d elements like Zr/Hf and Nb/Ta have nearly identical atomic radii and chemical properties?',
    backExplanation: 'Due to the poor shielding effect of 14 intervening 4f electrons before 5d series filling, the effective nuclear charge (Z_eff) increases substantially, pulling outer electrons inward and compensating for expected shell size increase.',
    backKeyPoints: [
      'Zr (160 pm) and Hf (159 pm) are nearly identical chemical twins',
      'Makes separation of Zr and Hf extremely difficult',
      'Causes unusually high densities in 5d transition series'
    ],
    mnemonic: 'Poor 4f shielding pulls 5d atoms tight!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-chem-4',
    subject: 'Chemistry',
    category: 'Reactions',
    topic: 'Organic - SN1 vs SN2 Mechanisms',
    frontTitle: 'SN1 vs SN2 Nucleophilic Substitution',
    frontContent: 'Compare kinetics, stereochemistry, solvent preference, and substrate reactivity order for SN1 and SN2.',
    backExplanation: '• SN1: Unimolecular, 2 steps, Carbocation intermediate, Racemization, Polar Protic solvent (H2O, EtOH), 3° > 2° > 1° > CH3X.\n• SN2: Bimolecular, 1 step concerted, Backside attack, 100% Walden Inversion, Polar Aprotic solvent (DMSO, Acetone, DMF), CH3X > 1° > 2° > 3° (steric hindrance).',
    backKeyPoints: [
      'Tertiary halides almost always undergo SN1 / E1',
      'Primary halides almost always undergo SN2 / E2'
    ],
    mnemonic: 'SN1 = 3° & Racemization; SN2 = 1° & Inversion!',
    difficulty: 'Hard'
  },

  // PHYSICS FLASHCARDS
  {
    id: 'fc-phy-1',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Modern Physics - De Broglie Wavelength',
    frontTitle: 'De Broglie Wavelength of Accelerated Electron',
    frontContent: 'What is the direct shortcut formula for De Broglie wavelength of an electron accelerated through potential V volts?',
    frontFormula: 'λ = 12.27 / √V  Å  =  1.227 / √V  nm',
    backExplanation: 'De Broglie wavelength λ = h / p = h / √(2m e V).\nPlugging constants h = 6.63 x 10^-34 J s, m = 9.1 x 10^-31 kg, e = 1.6 x 10^-19 C gives:\nλ = 12.27 / √V in Angstroms (Å) or 1.227 / √V in nanometers (nm).',
    backKeyPoints: [
      'For V = 100 Volts: λ = 12.27 / 10 = 1.227 Å',
      'For Proton: λ = 0.286 / √V Å; For Alpha particle: λ = 0.101 / √V Å'
    ],
    mnemonic: '12.27 over root V in Angstroms for Electron!',
    difficulty: 'Easy'
  },
  {
    id: 'fc-phy-2',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Electromagnetism - Biot-Savart Law',
    frontTitle: 'Magnetic Field at Center & Axis of Circular Loop',
    frontContent: 'What is magnetic field B at the center of circular loop (radius R, N turns, current I) and at axial distance x?',
    frontFormula: 'B_center = (μ₀ N I) / (2 R)  ;  B_axis = (μ₀ N I R²) / (2 (R² + x²)^(3/2))',
    backExplanation: '• At Center (x = 0): B = μ₀ N I / (2R).\n• At Axial distance x >> R: B = μ₀ N I R² / (2 x³) = (μ₀ / 4π) * (2 M / x³).\n• Semi-circular wire at center: B = μ₀ I / (4R).',
    backKeyPoints: [
      'Direction given by Right Hand Grip Rule along normal',
      'Ratio B_center / B_axis = (1 + x²/R²)^(3/2)'
    ],
    mnemonic: 'Center is max: μ₀NI / 2R',
    difficulty: 'Medium'
  },
  {
    id: 'fc-phy-3',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Thermodynamics - Carnot Engine Efficiency',
    frontTitle: 'Carnot Efficiency & Refrigerator COP',
    frontContent: 'State the formulas for Carnot engine efficiency η and refrigerator coefficient of performance (COP) β.',
    frontFormula: 'η = 1 - (T_cold / T_hot) = W / Q_hot  ;  β = T_cold / (T_hot - T_cold) = Q_cold / W',
    backExplanation: 'For a reversible Carnot engine operating between absolute temperatures T_hot (source) and T_cold (sink):\n• Efficiency η = 1 - (T_cold / T_hot) = (Q_1 - Q_2) / Q_1 = W / Q_1.\n• Refrigerator COP β = Q_2 / W = T_cold / (T_hot - T_cold).\n• Key Relation: β = (1 - η) / η.',
    backKeyPoints: [
      'Temperatures MUST ALWAYS be in Kelvin (K = °C + 273.15)',
      '100% efficiency is impossible by 2nd Law of Thermodynamics'
    ],
    mnemonic: 'Efficiency is 1 minus T_sink over T_source in Kelvin!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-phy-4',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Mechanics - Pure Rolling on Inclined Plane',
    frontTitle: 'Acceleration & Rolling Kinetic Energy',
    frontContent: 'What is acceleration a and total kinetic energy K for a body of radius R rolling without slipping down incline θ?',
    frontFormula: 'a = (g sin θ) / (1 + K²/R²)  ;  K_total = 1/2 M v² (1 + K²/R²)',
    backExplanation: 'For pure rolling without slipping:\n• K²/R² values: Solid Sphere (2/5 = 0.4) < Disc/Solid Cylinder (1/2 = 0.5) < Hollow Sphere (2/3 = 0.67) < Ring/Hollow Cylinder (1.0).\n• Smaller K²/R² = HIGHER acceleration = reaches bottom FIRST (Solid Sphere wins race!).',
    backKeyPoints: [
      'Static friction does ZERO work in pure rolling',
      'Solid Sphere reaches bottom first, Ring reaches bottom last'
    ],
    mnemonic: 'Least K²/R² wins the incline race: Solid Sphere > Disc > Hollow Sphere > Ring!',
    difficulty: 'Hard'
  }
];

// ==========================================
// EXPANSIVE, RICH VISUAL MIND MAPS (10+ DETAILED NODES)
// ==========================================
export const MIND_MAPS_DATA: MindMapNode[] = [
  {
    id: 'mm-bio-1',
    subject: 'Biology',
    title: 'Genetics & Molecular Basis of Inheritance',
    description: 'Complete visual roadmap of Mendelian genetics, chromosome theory, DNA structure, replication, transcription, translation & regulation.',
    children: [
      {
        title: '1. Mendelian Genetics & Inheritance',
        details: [
          'Monohybrid cross (3:1 Phenotype, 1:2:1 Genotype)',
          'Dihybrid cross (9:3:3:1 Phenotype, 1:2:1:2:4:2:1:2:1 Genotype)',
          'Incomplete dominance (Mirabilis jalapa / Antirrhinum 1:2:1 pink flower)',
          'Co-dominance & Multiple Alleles (Human ABO blood groups: IA, IB, i)'
        ],
        subTopics: [
          'Chromosomal theory of inheritance (Walter Sutton & Theodor Boveri)',
          'Linkage & Recombination (T.H. Morgan experiments on Drosophila melanogaster)',
          'Sex determination: XX-XY (Humans/Drosophila), ZZ-ZW (Birds), Haplodiploidy (Honeybees)',
          'Genetic disorders: Down syndrome (Trisomy 21), Turner (45, XO), Klinefelter (47, XXY)'
        ]
      },
      {
        title: '2. DNA Structure & Packaging',
        details: [
          'Double helix model (Watson & Crick 1953, B-DNA pitch 3.4 nm, 10 bp/turn, diameter 2 nm)',
          'Chargaff equivalence rules: [A] + [G] = [T] + [C], A/T = 1, G/C = 1',
          'Histone octamer core (2 of H2A, H2B, H3, H4) with positively charged Lysine & Arginine',
          'Nucleosome structure: 200 bp wrapped around octamer + H1 linker histone'
        ],
        subTopics: [
          'Transforming principle (Frederick Griffith 1928 S-strain / R-strain in mice)',
          'Biochemical characterisation (Avery, MacLeod, McCarty 1944: DNase destroys activity)',
          'Unequivocal proof: Hershey & Chase 1952 using 32P (DNA) and 35S (protein capsid)'
        ]
      },
      {
        title: '3. Central Dogma & Gene Regulation',
        details: [
          'Semi-conservative DNA replication (Meselson & Stahl 1958 using 15N and 14N CsCl gradient)',
          "DNA Polymerase: synthesizes strictly in 5'->3' direction (Leading continuous, Lagging Okazaki)",
          'Transcription in Eukaryotes: Pol I (rRNA 28S, 18S, 5.8S), Pol II (hnRNA/mRNA), Pol III (tRNA, 5S rRNA, snRNA)',
          "Post-transcriptional modifications: Splicing (introns removed), Capping (7-methylguanosine 5'), Tailing (200-300 Poly-A 3')"
        ],
        subTopics: [
          'Genetic code properties: Triplet, Universal, Non-overlapping, Degenerate (61 codons for 20 AA), AUG start (Methionine), UAA/UAG/UGA stop',
          'Lac Operon (Jacob & Monod): Inducible system, z (beta-gal), y (permease), a (transacetylase), allolactose inducer'
        ]
      }
    ]
  },
  {
    id: 'mm-bio-2',
    subject: 'Biology',
    title: 'Human Physiology & Organ Systems',
    description: 'Integrated roadmap of Circulatory, Excretory, Neural, Respiratory & Endocrine systems.',
    children: [
      {
        title: '1. Circulatory System & Cardiac Cycle',
        details: [
          'Blood components: Plasma (55%), Formed elements (45%: RBCs 5-5.5M, WBCs 6-8k, Platelets 1.5-3.5L)',
          'Cardiac cycle duration: 0.8s (Joint diastole 0.4s, Atrial systole 0.1s, Ventricular systole 0.3s)',
          'Stroke volume = 70 mL; Cardiac output = 70 * 72 bpm = 5 L/min',
          'ECG waves: P (atrial depolarisation), QRS (ventricular depolarisation), T (ventricular repolarisation)'
        ],
        subTopics: [
          'Double circulation: Pulmonary circuit (RV -> Lungs -> LA) + Systemic circuit (LV -> Body -> RA)',
          'Disorders: Hypertension (>140/90), CAD (Atherosclerosis), Angina pectoris, Heart failure'
        ]
      },
      {
        title: '2. Excretory System & Osmoregulation',
        details: [
          'Nephron structure: Glomerulus + Bowman capsule (Malpighian corpuscle), PCT, Loop of Henle, DCT, CD',
          'Urine formation: Ultrafiltration (GFR 125 mL/min = 180 L/day), 99% Reabsorption (1-1.5 L urine excreted), Tubular secretion (H+, K+, NH3)',
          'Counter-current multiplier in Loop of Henle & Vasa Recta maintains 1200 mOsmol/L medullary gradient',
          'Regulation: RAAS (Renin-Angiotensin-Aldosterone), ADH/Vasopressin (water reabsorption), ANF check'
        ],
        subTopics: [
          'Disorders: Uraemia, Renal calculi (calcium oxalate stones), Glomerulonephritis',
          'Hemodialysis: Counter-current artificial dialysing fluid clearing urea without losing plasma proteins'
        ]
      },
      {
        title: '3. Endocrine Glands & Hormones',
        details: [
          'Hypothalamus: Releasing (GnRH, TRH) & Inhibiting (Somatostatin) neurohormones',
          'Pituitary: Anterior (GH, PRL, TSH, ACTH, LH, FSH), Intermediate (MSH), Posterior stores (Oxytocin, Vasopressin)',
          'Thyroid: T3, T4 (BMR control, cretinism/goitre) & Calcitonin (TCT - lowers blood Ca2+)',
          'Parathyroid: PTH (hypercalcemic - elevates blood Ca2+ by bone resorption)'
        ],
        subTopics: [
          'Adrenal cortex: Glucocorticoids (Cortisol - gluconeogenesis) & Mineralocorticoids (Aldosterone - Na+ retention)',
          'Adrenal medulla: Epinephrine & Norepinephrine (Fight-or-flight catecholamines)',
          'Pancreas: Alpha (Glucagon - hyperglycemic) & Beta (Insulin - hypoglycemic, promotes GLUT-4 uptake)'
        ]
      }
    ]
  },
  {
    id: 'mm-bio-3',
    subject: 'Biology',
    title: 'Plant Physiology & Photosynthesis',
    description: 'Light reactions, Calvin cycle, C4 Kranz anatomy, cellular respiration, and plant hormones.',
    children: [
      {
        title: '1. Photosynthesis in Higher Plants',
        details: [
          'Light reaction (Thylakoids): PS-II (P680) splits H2O -> O2 + 4H+ + 4e-; PS-I (P700) reduces NADP+',
          'Z-Scheme non-cyclic photophosphorylation produces ATP + NADPH; Cyclic produces ATP only',
          'Chemiosmotic hypothesis (Peter Mitchell): Proton gradient builds inside Thylakoid lumen (low pH)',
          'Calvin cycle (Stroma): 1. Carboxylation (RuBisCO), 2. Reduction (uses 2 ATP + 2 NADPH), 3. Regeneration (1 ATP). Total 3 ATP + 2 NADPH per CO2'
        ],
        subTopics: [
          'C4 Pathway (Kranz anatomy in Maize/Sorghum): Mesophyll fixes CO2 via PEPcase -> OAA (4C), Bundle sheath runs Calvin cycle with zero photorespiration',
          'Blackman law of limiting factors: Rate dictated by factor present in minimum quantity'
        ]
      },
      {
        title: '2. Plant Growth Regulators (PGRs)',
        details: [
          'Auxins (IAA, NAA, 2,4-D): Apical dominance, rooting, parthenocarpy in tomatoes, 2,4-D dicot weedicide',
          'Gibberellins (GA3): Internode elongation in sugarcane, bolting in beet/cabbage, breaks seed dormancy',
          'Cytokinins (Zeatin, Kinetin): Cell division, overcomes apical dominance, delays leaf senescence',
          'Ethylene (Gaseous): Fruit ripening, horizontal growth of seedlings, respiratory climacteric',
          'Abscisic Acid (ABA): Stress hormone, stomatal closure during drought, induces seed dormancy'
        ],
        subTopics: [
          'Photoperiodism: Flowering response to day/night length perceived by phytochrome in leaves',
          'Vernalization: Low temperature promotion of flowering'
        ]
      }
    ]
  },
  {
    id: 'mm-chem-1',
    subject: 'Chemistry',
    title: 'Organic Chemistry Reaction Mechanisms',
    description: 'Nucleophilic substitution, elimination, electrophilic aromatic substitution, named carbonyl reactions & polymers.',
    children: [
      {
        title: '1. Alkyl Halides & Substitution / Elimination',
        details: [
          'SN1: 2 steps, 3° > 2° > 1°, carbocation intermediate, polar protic solvent, racemization',
          'SN2: 1 step concerted, 1° > 2° > 3°, backside attack, polar aprotic solvent, Walden inversion',
          'E1 vs E2: Saytzeff rule (more substituted alkene is major) vs Hofmann product (bulky base)',
          'Grignard reagents (R-Mg-X): Strong nucleophile/base, reacts with active H (H2O, ROH) to form R-H'
        ],
        subTopics: [
          'Haloarenes: Low reactivity due to resonance partial double bond character of C-Cl',
          'Wurtz, Fittig & Wurtz-Fittig cross-coupling reactions'
        ]
      },
      {
        title: '2. Carbonyl Compounds (Aldehydes & Ketones)',
        details: [
          'Nucleophilic addition to C=O (HCN, NaHSO3, Grignard, ROH for acetals/ketals)',
          'Aldol condensation: alpha-H containing carbonyls + dil. NaOH -> alpha,beta-unsaturated product',
          'Cannizzaro reaction: carbonyls without alpha-H + conc. 50% NaOH -> Alcohol + Carboxylate salt',
          'Clemmensen reduction (Zn-Hg / conc. HCl) & Wolff-Kishner reduction (NH2NH2 / KOH / glycol) -> C=O to CH2'
        ],
        subTopics: [
          'Tollens reagent test (Silver mirror) & Fehling test (Cu2O red ppt) for aldehydes',
          'Iodoform test (I2 + NaOH): Positive for CH3-C=O and CH3-CH(OH)- groups (yellow CHI3 ppt)'
        ]
      }
    ]
  },
  {
    id: 'mm-phy-1',
    subject: 'Physics',
    title: 'Modern Physics & Dual Nature',
    description: 'Photoelectric effect, Bohr atom model, nuclear binding energy, radioactivity & semiconductor devices.',
    children: [
      {
        title: '1. Photoelectric Effect & Photons',
        details: [
          'Einstein equation: K_max = h nu - phi_0 = e V_0 (where V_0 is stopping potential)',
          'Photoelectric current is proportional to light INTENSITY (number of photons)',
          'Max kinetic energy and stopping potential depend ONLY on light FREQUENCY, not intensity',
          'De Broglie wavelength: lambda = h/p = 12.27 / sqrt(V) Angstroms for accelerated electron'
        ],
        subTopics: [
          'Work function phi_0 = h nu_0 (threshold frequency)',
          'Davisson-Germer experiment proved wave nature of moving electrons'
        ]
      },
      {
        title: '2. Bohr Atomic Model & Hydrogen Spectrum',
        details: [
          'Postulates: Quantized angular momentum mvr = n h / 2pi; Radiation emitted on transition E_i - E_f = h nu',
          'Radius of nth orbit: r_n = 0.529 * (n^2 / Z) Angstroms',
          'Velocity in nth orbit: v_n = 2.18 x 10^6 * (Z / n) m/s',
          'Energy of nth level: E_n = -13.6 * (Z^2 / n^2) eV'
        ],
        subTopics: [
          'Rydberg formula: 1/lambda = R_H * Z^2 * (1/n1^2 - 1/n2^2)',
          'Spectral Series: Lyman (n1=1, UV), Balmer (n1=2, Visible), Paschen (n1=3, IR), Brackett (n1=4, IR), Pfund (n1=5, IR)'
        ]
      }
    ]
  }
];

// ==========================================
// BOOKS & NOTES REPOSITORY DATA
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

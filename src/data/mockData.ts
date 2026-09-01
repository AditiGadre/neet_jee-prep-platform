import {
  TestItem,
  OnlineCourse,
  Flashcard,
  MindMapNode,
  BookItem,
  PYQItem,
  RankerStory,
  CollegeInfo,
  Question
} from '../types';
import { VECTORS_BOOK_QUESTIONS } from './vectorsQuestions';
import { UNITS_BOOK_QUESTIONS } from './unitsQuestions';
import { MOTION_BOOK_QUESTIONS } from './motionQuestions';
import { ELECTROSTATICS_BOOK_QUESTIONS } from './electrostaticsQuestions';
import { GRAVITATION_BOOK_QUESTIONS } from './gravitationQuestions';
import { THERMODYNAMICS_BOOK_QUESTIONS } from './thermodynamicsQuestions';
import { MAGNETISM_BOOK_QUESTIONS } from './magnetismQuestions';
import { 
  ALL_BIOLOGY_MASTER_QUESTIONS,
  THE_LIVING_WORLD_V1_QUESTIONS,
  HUMAN_REPRODUCTION_V2_QUESTIONS,
  PRINCIPLES_OF_INHERITANCE_AND_VARIATION_V2_QUESTIONS,
  MOLECULAR_BASIS_OF_INHERITANCE_V2_QUESTIONS,
  BIOTECHNOLOGY__PRINCIPLES_AND_PROCESSES_V2_QUESTIONS,
  BIOTECHNOLOGY_AND_ITS_APPLICATIONS_V2_QUESTIONS,
  ORGANISMS_AND_POPULATIONS_V2_QUESTIONS,
  ECOSYSTEM_V2_QUESTIONS,
  BIODIVERSITY_AND_CONSERVATION_V2_QUESTIONS,
  ENVIRONMENTAL_ISSUES_V2_QUESTIONS
} from './biologyQuestions';

export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 'q1',
    subject: 'Biology',
    chapter: 'Human Physiology',
    topic: 'Neural Control and Coordination',
    difficulty: 'Medium',
    questionText: 'During the transmission of nerve impulse through a nerve fibre, the potential on the inner side of the axonal membrane has which type of electric charge?',
    options: [
      'First positive, then negative and continue to be negative',
      'First negative, then positive and continue to be positive',
      'First positive, then negative and again back to positive',
      'First negative, then positive and again back to negative'
    ],
    correctAnswer: 3,
    explanation: 'During resting state, axonal membrane is negatively charged inside (-70mV). Upon depolarization due to Na+ influx, it becomes positive (+30mV). During repolarization due to K+ efflux, it returns to negative resting potential.',
    pyqYear: 2023,
    tags: ['Nerve Impulse', 'Resting Potential', 'Action Potential']
  },
  {
    id: 'q2',
    subject: 'Physics',
    chapter: 'Electrodynamics',
    topic: 'Current Electricity & Kirchhoff Laws',
    difficulty: 'Medium',
    questionText: 'A potentiometer wire of length 100 cm has a resistance of 10 Ω. It is connected in series with a resistance of 40 Ω and a battery of EMF 2 V. The potential gradient along the wire is:',
    options: [
      '0.4 V/m',
      '0.2 V/m',
      '0.04 V/m',
      '4.0 V/m'
    ],
    correctAnswer: 0,
    explanation: 'Total resistance R_total = 10 + 40 = 50 Ω. Current I = V / R_total = 2 / 50 = 0.04 A. Voltage across wire V_wire = I * R_wire = 0.04 * 10 = 0.4 V. Wire length = 1 m. Potential Gradient = V_wire / L = 0.4 V / 1 m = 0.4 V/m.',
    pyqYear: 2024,
    tags: ['Potentiometer', 'Current Electricity', 'Potential Gradient']
  },
  {
    id: 'q3',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topic: 'Aldehydes, Ketones and Carboxylic Acids',
    difficulty: 'Hard',
    questionText: 'Which of the following compounds will give a positive Iodoform test upon reaction with I2 and NaOH?',
    options: [
      'Benzophenone (C6H5-CO-C6H5)',
      '3-Pentanone (CH3-CH2-CO-CH2-CH3)',
      'Acetophenone (C6H5-CO-CH3)',
      'Benzaldehyde (C6H5-CHO)'
    ],
    correctAnswer: 2,
    explanation: 'The Iodoform test is given by compounds containing the CH3-C=O (methyl ketone) group or CH3-CH(OH)- group. Acetophenone contains C6H5-CO-CH3 with a methyl keto group, forming yellow CHI3 precipitate.',
    pyqYear: 2023,
    tags: ['Iodoform Test', 'Carbonyl Compounds', 'Named Reactions']
  },
  {
    id: 'q4',
    subject: 'Biology',
    chapter: 'Genetics and Evolution',
    topic: 'Molecular Basis of Inheritance',
    difficulty: 'Easy',
    questionText: 'If the sequence of nitrogen bases of the coding strand of DNA in a transcription unit is 5\' - ATGAATG - 3\', the sequence of bases in its mRNA would be:',
    options: [
      '5\' - UACUUAC - 3\'',
      '5\' - AUGAAUG - 3\'',
      '5\' - GAUCAAU - 3\'',
      '5\' - CAUUCAU - 3\''
    ],
    correctAnswer: 1,
    explanation: 'The mRNA sequence is identical to the coding strand (5\' to 3\') except that Thymine (T) is replaced with Uracil (U). Thus, 5\'-ATGAATG-3\' becomes 5\'-AUGAAUG-3\'.',
    pyqYear: 2022,
    tags: ['Transcription', 'Central Dogma', 'Coding Strand']
  },
  {
    id: 'q5',
    subject: 'Physics',
    chapter: 'Modern Physics',
    topic: 'Photoelectric Effect',
    difficulty: 'Easy',
    questionText: 'When light of frequency 2ν₀ (where ν₀ is threshold frequency) is incident on a metal plate, the maximum velocity of electrons emitted is v₁. When the frequency of incident radiation is increased to 5ν₀, the maximum velocity of electrons emitted is v₂. The ratio v₁/v₂ is:',
    options: [
      '1 : 2',
      '1 : 4',
      '1 : √2',
      '4 : 1'
    ],
    correctAnswer: 0,
    explanation: 'By Einstein\'s equation: 1/2 m v₁² = h(2ν₀ - ν₀) = hν₀. For 5ν₀: 1/2 m v₂² = h(5ν₀ - ν₀) = 4hν₀. Dividing gives (v₁/v₂)² = 1/4 => v₁/v₂ = 1/2.',
    pyqYear: 2021,
    tags: ['Photoelectric Effect', 'Work Function', 'Threshold Frequency']
  },
  {
    id: 'q6',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topic: 'Chemical Kinetics',
    difficulty: 'Medium',
    questionText: 'A first-order reaction has a rate constant of 1.15 x 10⁻³ s⁻¹. How long will 5 g of this reactant take to reduce to 3 g?',
    options: [
      '444 seconds',
      '222 seconds',
      '888 seconds',
      '111 seconds'
    ],
    correctAnswer: 0,
    explanation: 'For 1st order: t = (2.303 / k) * log10([A]0 / [A]t) = (2.303 / 1.15e-3) * log10(5 / 3) = 2002.6 * 0.2218 ≈ 444 seconds.',
    pyqYear: 2024,
    tags: ['Rate Constant', 'Half Life', 'First Order Kinetics']
  }
];

export const TEST_SERIES_DATA: TestItem[] = [
  {
    id: 'test-biology-grand-380',
    title: 'NEET Biology Complete Master Grand Test (380 Qs - All 38 Chapters)',
    category: 'full',
    exam: 'NEET',
    syllabus: 'Full NEET Biology Syllabus: Class 11 (22 Chapters) & Class 12 (16 Chapters) Complete',
    totalQuestions: 380,
    durationMinutes: 200,
    totalMarks: 1520,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Mixed',
    cbtMode: true,
    features: [
      'All 38 NCERT Chapters Covered',
      'Class 11 & Class 12 Master Question Bank',
      'Step-by-step NCERT explanations',
      'Full CBT Mock Exam Simulation'
    ],
    questions: ALL_BIOLOGY_MASTER_QUESTIONS,
    enrolledStudentsCount: 48900,
    avgScore: 980
  },
  {
    id: 'test-biology-vol1-class11',
    title: 'Class 11 Biology Full Syllabus Test (220 Qs - Units I to V)',
    category: 'part',
    exam: 'NEET',
    syllabus: 'Diversity in Living World, Structural Organisation, Cell Structure, Plant Physiology, Human Physiology',
    totalQuestions: 220,
    durationMinutes: 180,
    totalMarks: 880,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'All 22 Class 11 Chapters',
      'Deep Physiology & Cell Biology Coverage',
      'Instant Scorecard & Detailed Solutions'
    ],
    questions: ALL_BIOLOGY_MASTER_QUESTIONS.slice(0, 220),
    enrolledStudentsCount: 41200,
    avgScore: 610
  },
  {
    id: 'test-biology-vol2-class12',
    title: 'Class 12 Biology Full Syllabus Test (160 Qs - Units VI to X)',
    category: 'part',
    exam: 'NEET',
    syllabus: 'Reproduction, Genetics and Evolution, Biology in Human Welfare, Biotechnology, Ecology & Environment',
    totalQuestions: 160,
    durationMinutes: 150,
    totalMarks: 640,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: [
      'All 16 Class 12 Chapters',
      'High-Yield Genetics & Biotechnology Focus',
      'Full CBT Exam Mode with Analytics'
    ],
    questions: ALL_BIOLOGY_MASTER_QUESTIONS.slice(220, 380),
    enrolledStudentsCount: 43500,
    avgScore: 490
  },
  {
    id: 'test-genetics-molecular',
    title: 'Genetics & Molecular Biology Chapterwise Test',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Principles of Inheritance & Variation, Molecular Basis of Inheritance',
    totalQuestions: 20,
    durationMinutes: 30,
    totalMarks: 80,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: [
      'Mendelian crosses, pedigrees, and chromosomal disorders',
      'DNA replication, transcription, translation, Lac operon'
    ],
    questions: [
      ...PRINCIPLES_OF_INHERITANCE_AND_VARIATION_V2_QUESTIONS,
      ...MOLECULAR_BASIS_OF_INHERITANCE_V2_QUESTIONS
    ],
    enrolledStudentsCount: 38200,
    avgScore: 62
  },
  {
    id: 'test-biotechnology-unit',
    title: 'Biotechnology: Principles & Applications Test',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Recombinant DNA technology, PCR, Gel electrophoresis, Bt Cotton, RNAi, Gene Therapy, GMOs',
    totalQuestions: 20,
    durationMinutes: 30,
    totalMarks: 80,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'Vectors, restriction enzymes, downstream processing',
      'Transgenic Rosie cow, Humulin, ADA gene therapy'
    ],
    questions: [
      ...BIOTECHNOLOGY__PRINCIPLES_AND_PROCESSES_V2_QUESTIONS,
      ...BIOTECHNOLOGY_AND_ITS_APPLICATIONS_V2_QUESTIONS
    ],
    enrolledStudentsCount: 36700,
    avgScore: 68
  },
  {
    id: 'test-ecology-environment-unit',
    title: 'Ecology & Environment Complete Unit Test (40 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Organisms & Populations, Ecosystem, Biodiversity & Conservation, Environmental Issues',
    totalQuestions: 40,
    durationMinutes: 45,
    totalMarks: 160,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'Population interactions, ecological succession, biogeochemical cycles',
      'Hotspots, Evil Quartet, global warming, ozone depletion'
    ],
    questions: [
      ...ORGANISMS_AND_POPULATIONS_V2_QUESTIONS,
      ...ECOSYSTEM_V2_QUESTIONS,
      ...BIODIVERSITY_AND_CONSERVATION_V2_QUESTIONS,
      ...ENVIRONMENTAL_ISSUES_V2_QUESTIONS
    ],
    enrolledStudentsCount: 39800,
    avgScore: 128
  },
  {
    id: 'test-vectors-book',
    title: 'Vectors Chapter Grand Test (143 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Vectors: Fundamentals, Addition & Subtraction of Vectors, Lami\'s Theorem, Multiplication of Vectors',
    totalQuestions: 143,
    durationMinutes: 180,
    totalMarks: 572,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Mixed',
    cbtMode: true,
    features: [
      'Comprehensive textbook practice',
      'Parsed questions and detailed answers',
      'Step-by-step solutions',
      'NCERT verbatim alignments'
    ],
    questions: VECTORS_BOOK_QUESTIONS,
    enrolledStudentsCount: 34200,
    avgScore: 320
  },
  {
    id: 'test-units-book',
    title: 'Units & Dimensions Chapter Practice Test (142 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Units, Dimensions and Measurement (Offline Preloaded)',
    totalQuestions: 142,
    durationMinutes: 180,
    totalMarks: 568,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'Offline-capable, preloaded directly',
      'Includes absolute unit conversions',
      'Dimensional homogeneity questions',
      'Detailed explanations included'
    ],
    questions: UNITS_BOOK_QUESTIONS,
    enrolledStudentsCount: 28900,
    avgScore: 245
  },
  {
    id: 'test-motion-book',
    title: 'Motion in One Dimension Chapter Practice Test (86 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Motion in a Straight Line & Graphical Questions (Offline Preloaded)',
    totalQuestions: 86,
    durationMinutes: 90,
    totalMarks: 344,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: [
      'Offline-capable, preloaded directly',
      'Graphs, displacement, velocity and equations of motion',
      '1D relative motion questions',
      'Step-by-step explanations'
    ],
    questions: MOTION_BOOK_QUESTIONS,
    enrolledStudentsCount: 31200,
    avgScore: 198
  },
  {
    id: 'test-electrostatics-book',
    title: 'Electrostatics Chapter Practice Test (88 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Coulomb\'s Law, Electric Fields, Gauss Law & Potential (Offline Preloaded)',
    totalQuestions: 88,
    durationMinutes: 90,
    totalMarks: 352,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'Offline-capable, preloaded directly',
      'Electric dipole, flux, potential energy, and conductors',
      'Detailed step-by-step explanations'
    ],
    questions: ELECTROSTATICS_BOOK_QUESTIONS,
    enrolledStudentsCount: 27400,
    avgScore: 215
  },
  {
    id: 'test-gravitation-book',
    title: 'Gravitation Chapter Practice Test (125 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Newton\'s Law of Gravitation, Satellites, Kepler\'s Laws (Offline Preloaded)',
    totalQuestions: 125,
    durationMinutes: 120,
    totalMarks: 500,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'Offline-capable, preloaded directly',
      'Escape velocity, orbital speed, and variation of g',
      'Detailed step-by-step solutions'
    ],
    questions: GRAVITATION_BOOK_QUESTIONS,
    enrolledStudentsCount: 29800,
    avgScore: 310
  },
  {
    id: 'test-thermodynamics-book',
    title: 'Thermodynamics Chapter Practice Test (153 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Laws of Thermodynamics, Heat Engines, Kinetic Theory (Offline Preloaded)',
    totalQuestions: 153,
    durationMinutes: 150,
    totalMarks: 612,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: [
      'Offline-capable, preloaded directly',
      'Carnot cycle, indicator diagrams, isothermal and adiabatic processes',
      'Detailed step-by-step solutions'
    ],
    questions: THERMODYNAMICS_BOOK_QUESTIONS,
    enrolledStudentsCount: 33400,
    avgScore: 354
  },
  {
    id: 'test-magnetism-book',
    title: 'Magnetism Chapter Practice Test (177 Qs)',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Magnetic Effects of Current, Earth\'s Magnetism, Materials (Offline Preloaded)',
    totalQuestions: 177,
    durationMinutes: 180,
    totalMarks: 708,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: [
      'Offline-capable, preloaded directly',
      'Biot-Savart, Ampere\'s law, moving charges, and magnetic dipoles',
      'Detailed step-by-step solutions'
    ],
    questions: MAGNETISM_BOOK_QUESTIONS,
    enrolledStudentsCount: 35600,
    avgScore: 412
  },
  // Minor Test Series
  {
    id: 'test-minor-01',
    title: 'Minor Test 01: Cell Biology & Genetics',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Cell: The Unit of Life, Biomolecules, Cell Cycle & Division, Mendelian Genetics',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      'Chapter-wise tests',
      'Topic-wise MCQs',
      'Instant scorecard',
      'Detailed solutions',
      'Time-based practice',
      'Difficulty-wise questions',
      'AI-based performance tracking'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 14200,
    avgScore: 138
  },
  {
    id: 'test-minor-02',
    title: 'Minor Test 02: Mechanics & Kinematics',
    category: 'minor',
    exam: 'NEET',
    syllabus: 'Units & Measurements, Motion in a Straight Line, Motion in a Plane, Laws of Motion',
    totalQuestions: 45,
    durationMinutes: 45,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: [
      'Chapter-wise tests',
      'Topic-wise MCQs',
      'Instant scorecard',
      'Detailed solutions',
      'Time-based practice',
      'Difficulty-wise questions',
      'AI-based performance tracking'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 12890,
    avgScore: 112
  },
  // Major Test Series
  {
    id: 'test-major-01',
    title: 'Major Test Series 01 (Physics + Chemistry + Biology)',
    category: 'major',
    exam: 'NEET',
    syllabus: 'Class 11 Term 1 (Mechanics, Thermodynamics, Physical Chemistry, Plant Physiology)',
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Mixed',
    scheduledDate: '2026-08-20',
    cbtMode: true,
    features: [
      'Multi-chapter syllabus',
      'NEET/JEE pattern',
      'National ranking',
      'Negative marking',
      'Detailed analysis',
      'Subject-wise reports',
      'Performance comparison'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 48900,
    avgScore: 495
  },
  {
    id: 'test-major-02',
    title: 'Major Test Series 02: Full Class 12 Syllabus Blend',
    category: 'major',
    exam: 'NEET',
    syllabus: 'Electrodynamics, Optics, Organic Synthesis, Genetics, Ecology & Biotechnology',
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-08-27',
    cbtMode: true,
    features: [
      'Multi-chapter syllabus',
      'NEET/JEE pattern',
      'National ranking',
      'Negative marking',
      'Detailed analysis',
      'Subject-wise reports',
      'Performance comparison'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 52100,
    avgScore: 510
  },
  // Part Syllabus Test
  {
    id: 'test-part-01',
    title: 'Part Syllabus Test (PST-01): Unit-wise Evaluation',
    category: 'part',
    exam: 'NEET',
    syllabus: 'Physics (Optics & Modern), Chemistry (Organic Unit 1 & 2), Biology (Human Reproduction & Genetics)',
    totalQuestions: 90,
    durationMinutes: 90,
    totalMarks: 360,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-08-22',
    cbtMode: true,
    features: [
      'Physics, Chemistry & Biology unit tests',
      'Scheduled calendar',
      'CBT mode',
      'Rank prediction'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 31000,
    avgScore: 260
  },
  // Full Syllabus Test
  {
    id: 'test-full-01',
    title: 'All India Full Syllabus Grand Test (FST-01)',
    category: 'full',
    exam: 'NEET',
    syllabus: 'Complete 100% CBT NEET-UG Syllabus (Physics, Chemistry, Botany, Zoology)',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect (Attempt any 180)',
    difficulty: 'Hard',
    scheduledDate: '2026-08-25',
    cbtMode: true,
    features: [
      'Complete syllabus',
      'Real exam simulation',
      'AIR prediction',
      'Weak chapter analysis',
      'Revision suggestions'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 89000,
    avgScore: 532
  },
  // NEET Mock Test
  {
    id: 'test-mock-01',
    title: 'Official CBT NEET Mock Test 2026',
    category: 'neet_mock',
    exam: 'NEET',
    syllabus: 'Complete Standard NEET Curriculum with Latest Section A & B Format',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 / -1 with latest CBT marking scheme',
    difficulty: 'Mixed',
    cbtMode: true,
    features: [
      'Latest pattern',
      'Unlimited practice',
      'All India ranking',
      'Instant result',
      'Detailed solutions'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 114000,
    avgScore: 545
  },
  // High Yield Test Series (HYTS)
  {
    id: 'test-hyts-01',
    title: 'High Yield Test Series (HYTS): 80/20 Core Chapters',
    category: 'full',
    exam: 'NEET',
    syllabus: 'High-Weightage Chapters in Mechanics, Genetics, Thermodynamics & Organic Chemistry',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-08-28',
    cbtMode: true,
    features: [
      'Focus on top 20% syllabus that yields 80% marks',
      'NCERT line-by-line concept coverage',
      'Video solutions by senior faculty',
      'All India Rank & percentile snapshot'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 76500,
    avgScore: 558
  },
  // Target 360/360 in Biology Test
  {
    id: 'test-bio-360',
    title: 'Target 360/360 Biology Special Test: Full Botany & Zoology',
    category: 'major',
    exam: 'NEET',
    syllabus: '100% NCERT Class 11 & 12 Biology (Botany + Zoology) with Assertion-Reason',
    totalQuestions: 100,
    durationMinutes: 90,
    totalMarks: 360,
    negativeMarking: '+4 for correct, -1 for incorrect (Attempt 90/100)',
    difficulty: 'Medium',
    scheduledDate: '2026-08-30',
    cbtMode: true,
    features: [
      'Curated by Dr. NK Sharma',
      'Assertion-Reason & Statement-based questions',
      'Diagram-based traps from NCERT',
      'Instant audio and text explanations'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 94000,
    avgScore: 312
  }
];

export const ONLINE_COURSES_DATA: OnlineCourse[] = [
  {
    id: 'course-target-batch',
    title: 'NEETcbt Target Batch 2026 (Ascend & Vital)',
    batchType: 'Target Batch',
    targetExam: 'NEET',
    duration: '12-24 Months Comprehensive Program',
    price: '₹7,999',
    originalPrice: '₹15,999',
    discount: '50% OFF',
    rating: 4.98,
    enrolledCount: 68400,
    badge: 'NEETcbt #1 Flagship Choice',
    features: [
      'Complete Question Bank with strict NCERT Line-by-Line Filters',
      'Audio & Video Explanations for all difficult questions',
      'Micro-Target & Daily Practice Problem (DPP) Generator',
      '10,000+ Active Recall Flashcards for Physics, Chem & Bio',
      '50+ High Yield & Part Syllabus Chapter-level Mock Tests'
    ],
    includes: {
      liveClasses: 'Target Setting Masterclasses & High-Yield Strategy Sessions',
      recordedClasses: 'Complete Video Lecture Library with chapter sub-topic index',
      assignments: '30,000+ NCERT-tagged Practice Questions with difficulty filters',
      weeklyTests: 'Sunday All-India Online CBT Tests with AIR Rank Predictor',
      mentorSupport: 'Personalized Micro-Target tracker & AI error log audit'
    },
    faculty: [
      { name: 'Dr. NK Sharma', subject: 'Masterclass Biology', exp: '30+ yrs', almaMater: 'Senior Academic Director' },
      { name: 'Er. Sandeep Verma', subject: 'Physics Numerical Mastery', exp: '16+ yrs', almaMater: 'IIT Kanpur' },
      { name: 'Dr. Vivek Sharma', subject: 'Zoology & Physiology', exp: '14+ yrs', almaMater: 'AIIMS New Delhi' }
    ]
  },
  {
    id: 'course-masterclass-bio',
    title: 'Masterclass in Biology by Dr. NK Sharma',
    batchType: 'Masterclass',
    targetExam: 'NEET',
    duration: 'Full Syllabus 38 Chapters Audio Q-Bank',
    price: '₹3,499',
    originalPrice: '₹6,999',
    discount: '50% OFF',
    rating: 4.99,
    enrolledCount: 52100,
    badge: 'Target 360/360 in Biology',
    features: [
      '6,000+ Questions with Audio Solutions by Dr. NK Sharma',
      'Categorized into "Past Year", "Understanding NCERT" & "Mastering NCERT"',
      '60+ Daily Tests with 90 Questions each',
      'Assertion-Reason, Statement I/II, Diagram & Match questions',
      'NCERT Word-by-Word Analysis to catch examiner traps'
    ],
    includes: {
      liveClasses: 'Weekly Live Doubt and Tough Question Decoding sessions',
      recordedClasses: 'Full Audio Explanations for every single question',
      assignments: 'Chapter-wise 90-Q speed drills replicating NEET timings',
      weeklyTests: '15 Full-Syllabus Biology Grand Mocks',
      mentorSupport: 'Direct audio query desk with senior Biology faculty'
    },
    faculty: [
      { name: 'Dr. NK Sharma', subject: 'Biology Guru & Author', exp: '30+ yrs', almaMater: 'Trained 100+ AIR Top 100 Rankers' }
    ]
  },
  {
    id: 'course-classroom-test-series',
    title: 'NEETcbt Classroom Test Series (CTS) 2026',
    batchType: 'Classroom Test Series',
    targetExam: 'NEET',
    duration: 'Offline Pen & Paper in 150+ Cities across India',
    price: '₹8,999',
    originalPrice: '₹14,999',
    discount: '40% OFF',
    rating: 4.96,
    enrolledCount: 44300,
    badge: 'Real OMR Exam Experience',
    features: [
      'Physical Pen & Paper OMR Tests conducted on scheduled Sundays',
      'Available in 150+ Offline Test Centres across India',
      'Same Day OMR Scanning & Instant AIR generation on NEETcbt portal',
      'High Yield Test Series (HYTS) + Part & Full Syllabus Mocks',
      'Includes complementary access to Online Target Batch Q-Bank'
    ],
    includes: {
      liveClasses: 'Post-Test Detailed Video & Audio Solution Discussions',
      recordedClasses: 'Online CBT Re-attempt simulator access for all papers',
      assignments: 'Printed Question Booklets with detailed solutions',
      weeklyTests: '25 Physical OMR Tests (10 Unit + 5 Part + 10 Full Syllabus)',
      mentorSupport: 'National Percentile & Medical College Cut-off mapping'
    },
    faculty: [
      { name: 'National Testing Panel', subject: 'Physics, Chemistry & Biology', exp: '20+ yrs', almaMater: 'Ex-CBT / Ex-AIIMS Panelists' }
    ]
  },
  {
    id: 'course-foundation',
    title: 'NEET/JEE 2-Year Integrated Foundation Batch',
    batchType: 'Foundation',
    targetExam: 'NEET',
    duration: '24 Months (Class 11 + 12 + Foundation)',
    price: '₹24,999',
    originalPrice: '₹49,999',
    discount: '50% OFF',
    rating: 4.9,
    enrolledCount: 18450,
    badge: 'Best for 11th Graders',
    features: [
      'Complete NCERT to Advanced Masterclasses',
      'Zero-to-Hero conceptual building',
      'Daily Problem Solving & Chapter Assessments',
      'Weekly Doubt Clearing Lounges',
      'Printed Study Material & DPP Books home delivered'
    ],
    includes: {
      liveClasses: '600+ Hours Live Interactive Sessions with real-time poll & chat',
      recordedClasses: 'Unlimited 4K HD Playback with 2x speed, bookmarking & notes',
      assignments: '1,500+ Curated Daily assignments with video solution hints',
      weeklyTests: 'Sunday CBT Mock Tests with National Rank Predictor',
      mentorSupport: 'Dedicated AIIMS / IITian 1-on-1 Academic & Strategy Mentor'
    },
    faculty: [
      { name: 'Dr. Vivek Sharma', subject: 'Botany & Zoology', exp: '14+ yrs', almaMater: 'AIIMS New Delhi' },
      { name: 'Prof. Ramesh Chandra', subject: 'Physics', exp: '18+ yrs', almaMater: 'IIT Bombay' },
      { name: 'Dr. Ananya Ray', subject: 'Organic & Inorganic Chemistry', exp: '12+ yrs', almaMater: 'IISc Bangalore' }
    ]
  },
  {
    id: 'course-dropper',
    title: 'Achievers Dropper & Repeater Elite Batch',
    batchType: 'Dropper Batch',
    targetExam: 'NEET',
    duration: '10 Months Intensive Target Batch',
    price: '₹18,499',
    originalPrice: '₹39,999',
    discount: '54% OFF',
    rating: 4.95,
    enrolledCount: 29800,
    badge: 'Highest Selection Rate (94.2%)',
    features: [
      'High-velocity full syllabus coverage in 180 days',
      'Emphasis on PYQs (15+ Years) and High-Yield patterns',
      'Daily 2 DPPs + Daily Speed Quizzes',
      'AI error log tracking to eliminate recurring mistakes',
      'Personalized test analysis by senior professors'
    ],
    includes: {
      liveClasses: 'Daily 4 Hours Dual-Track Live Masterclasses',
      recordedClasses: 'Full Video Archive with quick 10-minute micro-concept revisions',
      assignments: 'Topic-wise Question Bank with 25,000+ Verified MCQs',
      weeklyTests: 'Part & Full Syllabus CBT Series with AIR Simulation',
      mentorSupport: 'Weekly 1-on-1 performance audit & stress counselling'
    },
    faculty: [
      { name: 'Er. Sandeep Verma', subject: 'Physics Mechanics & Modern', exp: '16+ yrs', almaMater: 'IIT Kanpur' },
      { name: 'Dr. Meenakshi Soni', subject: 'Human Physiology & Genetics', exp: '15+ yrs', almaMater: 'MAMC Delhi' },
      { name: 'Dr. Arvind Joshi', subject: 'Physical & General Chemistry', exp: '13+ yrs', almaMater: 'IIT Delhi' }
    ]
  },
  {
    id: 'course-crash',
    title: 'Super 60 Days NEET/JEE Rapid Crash Course',
    batchType: 'Crash Course',
    targetExam: 'NEET',
    duration: '60 Days Ultra Rapid Booster',
    price: '₹6,999',
    originalPrice: '₹14,999',
    discount: '53% OFF',
    rating: 4.85,
    enrolledCount: 41200,
    badge: 'Exam-Ready Score Booster',
    features: [
      '120+ High-Yield Formula and Diagram Revision Modules',
      '20 Full Syllabus Mock CBT Tests with detailed video solutions',
      'Most Expected 5,000 Questions for the upcoming exam',
      'Time-management drills and elimination trick mastery',
      'Special CBT Pattern trap-question decoding sessions'
    ],
    includes: {
      liveClasses: 'Power-packed 3-hour marathon sessions daily',
      recordedClasses: 'Complete Formula Sheets, Mind Maps & Audio Flashcards',
      assignments: 'Top 100 must-solve MCQs per chapter',
      weeklyTests: '3 All-India CBT Mocks per week with instant scorecard',
      mentorSupport: '24/7 Doubt forum with sub-5 minute average answer time'
    },
    faculty: [
      { name: 'Dr. Priyanka Sen', subject: 'Biology Complete NCERT Line-by-Line', exp: '11+ yrs', almaMater: 'KGMU Lucknow' },
      { name: 'Er. Alok Tripathi', subject: 'Physics Quick Formulas & Tricks', exp: '15+ yrs', almaMater: 'IIT Roorkee' }
    ]
  }
];

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Modern Physics - De Broglie Wavelength',
    frontTitle: 'De Broglie Wavelength of an Electron',
    frontContent: 'What is the relation between accelerating potential (V) and De Broglie wavelength (λ)?',
    frontFormula: 'λ = h / p = h / √(2mE)',
    backExplanation: 'For an electron accelerated through potential difference V in volts:\nλ = 12.27 / √V Å (Angstroms) or 1.227 / √V nm.',
    backKeyPoints: [
      'Mass of electron m = 9.1 x 10^-31 kg',
      'Charge e = 1.6 x 10^-19 C',
      'Useful for quick 5-second calculation in NEET/JEE'
    ],
    mnemonic: 'Remember: 12.27 over root V in Angstroms!',
    difficulty: 'Easy'
  },
  {
    id: 'fc-2',
    subject: 'Chemistry',
    category: 'Reactions',
    topic: 'Organic - Named Reactions',
    frontTitle: 'Aldol Condensation vs Cannizzaro Reaction',
    frontContent: 'What is the fundamental structural requirement distinguishing Aldol from Cannizzaro reaction?',
    backExplanation: 'Aldol Condensation requires at least one α-hydrogen atom (in presence of dil. NaOH). Cannizzaro Reaction occurs in aldehydes that do NOT have any α-hydrogen (in presence of conc. 50% NaOH), undergoing disproportionation to alcohol and carboxylate salt.',
    backKeyPoints: [
      'Aldol: Acetaldehyde, Acetone (has α-H)',
      'Cannizzaro: Formaldehyde (HCHO), Benzaldehyde (C6H5CHO) (no α-H)',
      'Cross Aldol produces 4 products if both partners have α-H'
    ],
    mnemonic: 'Alpha-H = Aldol! Cannizzaro = CANNOT have alpha-H!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-3',
    subject: 'Biology',
    category: 'Concepts',
    topic: 'Genetics - Mendelian Dihybrid Ratio',
    frontTitle: 'Mendelian Dihybrid Phenotypic & Genotypic Ratio',
    frontContent: 'What are the classic F2 Phenotypic and Genotypic ratios in a Dihybrid cross (independent assortment)?',
    backExplanation: 'Phenotypic Ratio = 9 : 3 : 3 : 1 (9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green).\nGenotypic Ratio = 1:2:1 : 2:4:2 : 1:2:1 (122412121 mnemonic).',
    backKeyPoints: [
      'Based on Law of Independent Assortment',
      'Total combinations = 16 zygotic combinations, 9 genotypes, 4 phenotypes',
      'Deviation occurs when genes are linked (Morgan experiment)'
    ],
    mnemonic: 'PhoneNumber Trick: 122-412-121 for genotypes!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-4',
    subject: 'Biology',
    category: 'Diagrams',
    topic: 'Plant Physiology - C4 Pathway (Hatch & Slack)',
    frontTitle: 'Primary CO2 Acceptor & First Stable Product in C4 Plants',
    frontContent: 'Identify the primary CO2 acceptor and the enzyme in mesophyll cells, along with the first 4-carbon compound formed.',
    backExplanation: 'Primary CO2 acceptor: Phosphoenolpyruvate (PEP) - 3 carbon compound.\nEnzyme: PEP carboxylase (PEPcase) - lacks RuBisCO in mesophyll cells.\nFirst stable product: Oxaloacetic acid (OAA) - 4 carbon dicarboxylic acid.',
    backKeyPoints: [
      'Kranz anatomy: Bundle sheath cells with agranal chloroplasts and RuBisCO',
      'Zero photorespiration: Higher photosynthetic efficiency under high light and temp',
      'Examples: Maize, Sugarcane, Sorghum'
    ],
    mnemonic: 'PEP catches CO2 to make OAA in the Mesophyll!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-5',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Electromagnetism - Biot-Savart Law',
    frontTitle: 'Magnetic Field at Center of Circular Coil',
    frontContent: 'Magnetic induction B at the center of a circular loop of N turns and radius R carrying current I.',
    frontFormula: 'B = (μ₀ * N * I) / (2 * R)',
    backExplanation: 'At the exact center of a circular coil of radius R, the field vectors from every element add up constructively along the normal axis.\nFor semi-circle: B = μ₀I / (4R).\nFor arc subtending θ rad: B = (μ₀I / 4πR) * θ.',
    backKeyPoints: [
      'Direction given by Right Hand Thumb Rule',
      'At axial distance x: B = (μ₀ N I R²) / (2 (R² + x²)^(3/2))'
    ],
    mnemonic: 'Center is maximum: μ₀NI over 2R',
    difficulty: 'Easy'
  },
  {
    id: 'fc-6',
    subject: 'Chemistry',
    category: 'Concepts',
    topic: 'Inorganic - Periodic Trends & Lanthanoid Contraction',
    frontTitle: 'Lanthanoid Contraction & Pair Radii Match',
    frontContent: 'Why do 4d and 5d transition elements (like Zr/Hf and Nb/Ta) have almost identical atomic/ionic radii?',
    backExplanation: 'Due to the poor shielding effect of intervening 4f-electrons before 5d series filling, the effective nuclear charge increases significantly, pulling outer electrons closer and cancelling expected size increase.',
    backKeyPoints: [
      'Zr (4d) ~ 160 pm and Hf (5d) ~ 159 pm (Nearly identical chemical twins)',
      'Increases ionization energy and density of 5d elements',
      'Makes separation of Zr and Hf difficult'
    ],
    mnemonic: 'Poor f-shielding pulls 5d tight!',
    difficulty: 'Medium'
  }
];

export const MIND_MAPS_DATA: MindMapNode[] = [
  {
    id: 'mm-bio-1',
    subject: 'Biology',
    title: 'Genetics & Molecular Inheritance',
    description: 'Complete visual roadmap of Mendelian principles, DNA structure, replication, transcription, translation & regulation.',
    children: [
      {
        title: 'Mendelian Genetics',
        details: ['Monohybrid cross (3:1, 1:2:1)', 'Dihybrid cross (9:3:3:1)', 'Incomplete dominance (Mirabilis jalapa 1:2:1)', 'Codominance (ABO Blood group)'],
        subTopics: ['Chromosomal theory (Sutton & Boveri)', 'Linkage & Recombination (T.H. Morgan on Drosophila)', 'Sex determination (XX-XY, ZZ-ZW, Haplodiploidy)']
      },
      {
        title: 'Structure of Genetic Material',
        details: ['Double helix model (Watson & Crick)', 'B-DNA pitch 3.4 nm, 10 bp per turn', 'Histone octamer (H2A, H2B, H3, H4) + H1 linker', '200 bp in nucleosome core'],
        subTopics: ['Chargaff rules: A+G = T+C', 'Transforming principle (Griffith S/R strain)', 'Hershey-Chase bacteriophage T2 experiment']
      },
      {
        title: 'Central Dogma & Processes',
        details: ['Semi-conservative replication (Meselson-Stahl 15N/14N)', 'Transcription in Eukaryotes (Pol I, II, III)', 'Post-transcriptional splicing, capping (m7G), tailing (Poly-A)'],
        subTopics: ['Genetic code: Universal, degenerate, non-overlapping, AUG start', 'Lac Operon (Jacob & Monod): Inducible, Repressor-Operator binding']
      }
    ]
  },
  {
    id: 'mm-phy-1',
    subject: 'Physics',
    title: 'Thermodynamics & Thermal Physics',
    description: 'State variables, laws of thermodynamics, cyclic processes, heat engines, Carnot efficiency and kinetic theory.',
    children: [
      {
        title: 'Zeroth & First Law',
        details: ['Zeroth law defines Temperature (Thermal equilibrium)', 'First law: dQ = dU + dW (Conservation of energy)', 'Internal energy U = (f/2) nRT (Depends only on temperature)'],
        subTopics: ['Isothermal process (T=const, dU=0, W = nRT ln(V2/V1))', 'Adiabatic process (dQ=0, PV^γ = const, W = (P1V1 - P2V2)/(γ - 1))', 'Isochoric (dV=0, W=0, dQ=dU)', 'Isobaric (dP=0, W=P(V2-V1))']
      },
      {
        title: 'Heat Engines & Second Law',
        details: ['Kelvin-Planck statement (No engine with 100% efficiency)', 'Clausius statement (Heat cannot flow cold to hot without external work)', 'Carnot cycle: 2 Isothermal + 2 Adiabatic steps'],
        subTopics: ['Carnot Efficiency η = 1 - (T_cold / T_hot) = 1 - (Q2 / Q1)', 'Refrigerator COP β = Q2 / W = T_cold / (T_hot - T_cold)']
      }
    ]
  },
  {
    id: 'mm-chem-1',
    subject: 'Chemistry',
    title: 'Organic Reaction Mechanisms Roadmap',
    description: 'Nucleophilic substitution, elimination, electrophilic aromatic substitution, and carbonyl reactions.',
    children: [
      {
        title: 'Alkyl Halides (SN1 vs SN2)',
        details: ['SN1: 2 steps, carbocation intermediate, racemization, 3° > 2° > 1°, polar protic solvent', 'SN2: 1 step, backside attack, Walden inversion, 1° > 2° > 3°, polar aprotic solvent'],
        subTopics: ['E1 vs E2: Saytzeff (more substituted alkene) vs Hofmann rule', 'Elimination favored at high temperature with bulky strong base']
      },
      {
        title: 'Carbonyl Chemistry',
        details: ['Nucleophilic addition to C=O', 'Grignard reagent addition to aldehydes/ketones -> 1°, 2°, 3° alcohols', 'Aldol & Cross Aldol, Cannizzaro, Clemmensen reduction (Zn-Hg/HCl)'],
        subTopics: ['Wolff-Kishner reduction (NH2NH2/KOH/glycol)', 'Tollens and Fehling tests for aldehydes']
      }
    ]
  }
];

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
    size: '8.2 MB',
    description: 'All 30 chapters formula sheet with sign conventions, limiting cases, dimension derivations, and rapid shortcut tricks.',
    rating: 4.92,
    highlights: ['Instant memory tables', 'All SI units & dimensions included', 'Ready-to-use graph cheat sheets']
  },
  {
    id: 'book-organic-rev',
    title: 'Organic Chemistry Reaction Mechanism & Roadmaps',
    category: 'Revision notes',
    subject: 'Chemistry',
    pages: 240,
    size: '12.6 MB',
    description: 'Comprehensive guide covering 65+ Named Reactions, conversion flowcharts, reagents cheat sheet, and acidity/basicity orders.',
    rating: 4.88,
    highlights: ['Step-by-step electron arrow pushing', 'Reagents reference table', 'Top 500 conversion practice questions']
  },
  {
    id: 'book-neet-ebook',
    title: '37 Years NEET Chapter-wise Solved Question Bank (PDF)',
    category: 'eBooks',
    subject: 'All',
    pages: 650,
    size: '34.0 MB',
    description: 'Complete collection of all AIPMT & NEET questions from 1988 to 2024 with 100% detailed step-by-step solutions and CBT keys.',
    rating: 4.98,
    highlights: ['37 Years archive', 'Tagged by difficulty level', 'Error-free CBT verified solutions']
  },
  {
    id: 'book-jee-maths',
    title: 'JEE Mathematics Quick Revision & Master Notes',
    category: 'Revision notes',
    subject: 'Mathematics',
    pages: 310,
    size: '15.8 MB',
    description: 'Calculus, Vectors & 3D, Coordinate Geometry, and Algebra crash notes with formula handbook.',
    rating: 4.85,
    highlights: ['Calculus graph shortcuts', '3D geometry visualization cards', 'Quick formula cheat sheet']
  }
];

export const PYQS_DATA: PYQItem[] = [
  {
    id: 'pyq-2024-bio-1',
    exam: 'NEET',
    year: 2024,
    subject: 'Biology',
    chapter: 'Genetics and Evolution',
    topic: 'Molecular Basis of Inheritance',
    frequency: 'High (4-5 Qs per year)',
    conceptWeightage: '8.5% of Biology Paper',
    question: {
      id: 'pyq-q-1',
      subject: 'Biology',
      chapter: 'Genetics and Evolution',
      topic: 'Molecular Basis of Inheritance',
      difficulty: 'Medium',
      questionText: '[NEET 2024] Which of the following statements about the Lac operon is INCORRECT?',
      options: [
        'Lactose binds to the repressor protein and inactivates it',
        'The structural gene z codes for beta-galactosidase',
        'In the absence of lactose, the repressor binds to the operator region',
        'RNA polymerase binds directly to the operator region to start transcription'
      ],
      correctAnswer: 3,
      explanation: 'Statement 4 is incorrect because RNA polymerase binds to the PROMOTER region (p gene), not the operator region. The operator is the binding site for the repressor protein.',
      pyqYear: 2024
    }
  },
  {
    id: 'pyq-2023-phy-1',
    exam: 'NEET',
    year: 2023,
    subject: 'Physics',
    chapter: 'Ray Optics and Optical Instruments',
    topic: 'Refraction at Spherical Surfaces & Lenses',
    frequency: 'Very High (3 Qs per year)',
    conceptWeightage: '6.2% of Physics Paper',
    question: {
      id: 'pyq-q-2',
      subject: 'Physics',
      chapter: 'Ray Optics and Optical Instruments',
      topic: 'Refraction at Spherical Surfaces',
      difficulty: 'Medium',
      questionText: '[NEET 2023] A biconvex lens has radii of curvature 20 cm and 40 cm. If its focal length is 20 cm in air, the refractive index of the material of the lens is:',
      options: [
        '1.5',
        '1.67',
        '1.33',
        '1.75'
      ],
      correctAnswer: 1,
      explanation: 'Using Lens Maker formula: 1/f = (μ - 1) [1/R1 - 1/R2]. Here f = 20 cm, R1 = +20 cm, R2 = -40 cm. 1/20 = (μ - 1) [1/20 - (-1/40)] = (μ - 1) [3/40]. Thus (μ - 1) = (40 / (20 * 3)) = 2/3 ≈ 0.67 => μ = 1.67.',
      pyqYear: 2023
    }
  },
  {
    id: 'pyq-2023-chem-1',
    exam: 'NEET',
    year: 2023,
    subject: 'Chemistry',
    chapter: 'Electrochemistry',
    topic: 'Nernst Equation & Cell Potential',
    frequency: 'High (2-3 Qs per year)',
    conceptWeightage: '5.5% of Chemistry Paper',
    question: {
      id: 'pyq-q-3',
      subject: 'Chemistry',
      chapter: 'Electrochemistry',
      topic: 'Nernst Equation',
      difficulty: 'Medium',
      questionText: '[NEET 2023] For the cell reaction: 2Fe³⁺(aq) + 2I⁻(aq) -> 2Fe²⁺(aq) + I₂(s), the standard EMF is 0.236 V at 298 K. The standard Gibbs energy (ΔrG°) of the reaction is (1 F = 96500 C/mol):',
      options: [
        '-45.55 kJ/mol',
        '-91.10 kJ/mol',
        '+45.55 kJ/mol',
        '-22.77 kJ/mol'
      ],
      correctAnswer: 0,
      explanation: 'Here n = 2 electrons transferred. ΔrG° = -n F E°cell = -2 * 96500 * 0.236 = -45548 J/mol = -45.55 kJ/mol.',
      pyqYear: 2023
    }
  },
  {
    id: 'pyq-2022-phy-1',
    exam: 'NEET',
    year: 2022,
    subject: 'Physics',
    chapter: 'Mechanics',
    topic: 'Gravitation & Escape Velocity',
    frequency: 'Medium (2 Qs per year)',
    conceptWeightage: '4.8% of Physics Paper',
    question: {
      id: 'pyq-q-4',
      subject: 'Physics',
      chapter: 'Mechanics',
      topic: 'Gravitation',
      difficulty: 'Easy',
      questionText: '[NEET 2022] The escape velocity from the Earth\'s surface is v. The escape velocity from the surface of another planet having a radius, four times that of Earth and same mass density is:',
      options: [
        'v',
        '2v',
        '4v',
        'v/4'
      ],
      correctAnswer: 2,
      explanation: 'Escape velocity v_esc = √(2GM / R) = √(2G (4/3 π R³ ρ) / R) = R * √(8/3 π G ρ). Since density ρ is constant, v_esc is directly proportional to Radius R. If R\' = 4R, then v\' = 4v.',
      pyqYear: 2022
    }
  }
];

export const RANKER_STORIES: RankerStory[] = [
  {
    id: 'ranker-1',
    name: 'Aarav Singhania',
    exam: 'NEET',
    air: 1,
    score: '720/720 (Perfect Score)',
    college: 'AIIMS New Delhi',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    quote: 'The AI weak-chapter analysis and CBT Full Syllabus test series gave me the exact confidence to eliminate negative marking. Attempted 45 full mocks here!',
    state: 'Maharashtra',
    year: 2024,
    category: 'General',
    keyStrategy: 'Solved 1 DPP daily and mastered NCERT line-by-line notes.'
  },
  {
    id: 'ranker-2',
    name: 'Diya Mukherjee',
    exam: 'NEET',
    air: 14,
    score: '715/720',
    college: 'AIIMS New Delhi',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    quote: 'The flashcards for Organic reactions and Biology diagrams transformed my last 30 days revision. The mentor support resolved every difficult doubt within minutes.',
    state: 'West Bengal',
    year: 2024,
    category: 'General',
    keyStrategy: 'Used Custom Test generator to target weak Physical Chemistry numericals.'
  },
  {
    id: 'ranker-3',
    name: 'Rohan Deshmukh',
    exam: 'NEET',
    air: 32,
    score: '710/720',
    college: 'JIPMER Puducherry',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    quote: 'As a dropper, the Achievers batch kept me disciplined. National rankings and detailed subject-wise analysis showed my exact standing each Sunday.',
    state: 'Rajasthan',
    year: 2024,
    category: 'OBC-NCL',
    keyStrategy: 'Re-attempted incorrect questions from every Minor and Major test.'
  },
  {
    id: 'ranker-4',
    name: 'Ananya S. Iyer',
    exam: 'JEE',
    air: 48,
    score: '99.99 Percentile (JEE Adv 312/360)',
    college: 'IIT Bombay (Computer Science)',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    quote: 'The level of multi-chapter Major tests matched the trickiest questions of JEE Advanced. The mind maps gave a birds eye view of entire Physics concepts.',
    state: 'Karnataka',
    year: 2024,
    category: 'General',
    keyStrategy: 'Strict time-management drills and daily PYQ topic-wise solving.'
  }
];

export const COLLEGES_DATA: CollegeInfo[] = [
  {
    id: 'clg-1',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'AIIMS',
    location: 'New Delhi',
    totalSeats: 125,
    closingRankGen: 55,
    closingRankOBC: 240,
    closingRankSC: 850,
    closingRankST: 2800,
    approxFeePerYear: '₹1,628 / yr',
    nirfRank: 1
  },
  {
    id: 'clg-2',
    name: 'JIPMER (Jawaharlal Institute of Postgraduate Medical Education & Research)',
    type: 'Government',
    location: 'Puducherry',
    totalSeats: 182,
    closingRankGen: 260,
    closingRankOBC: 620,
    closingRankSC: 2100,
    closingRankST: 5400,
    approxFeePerYear: '₹7,620 / yr',
    nirfRank: 2
  },
  {
    id: 'clg-3',
    name: 'Maulana Azad Medical College (MAMC)',
    type: 'Government',
    location: 'New Delhi',
    totalSeats: 250,
    closingRankGen: 110,
    closingRankOBC: 450,
    closingRankSC: 1800,
    closingRankST: 4200,
    approxFeePerYear: '₹3,000 / yr',
    nirfRank: 3
  },
  {
    id: 'clg-4',
    name: 'King George\'s Medical University (KGMU)',
    type: 'Government',
    location: 'Lucknow, Uttar Pradesh',
    totalSeats: 250,
    closingRankGen: 1200,
    closingRankOBC: 2400,
    closingRankSC: 9800,
    closingRankST: 18500,
    approxFeePerYear: '₹54,000 / yr',
    nirfRank: 5
  },
  {
    id: 'clg-5',
    name: 'Christian Medical College (CMC)',
    type: 'Private',
    location: 'Vellore, Tamil Nadu',
    totalSeats: 100,
    closingRankGen: 180,
    closingRankOBC: 520,
    closingRankSC: 3400,
    closingRankST: 7100,
    approxFeePerYear: '₹48,000 / yr',
    nirfRank: 4
  },
  {
    id: 'clg-6',
    name: 'Kasturba Medical College (KMC Manipal)',
    type: 'Private',
    location: 'Manipal, Karnataka',
    totalSeats: 250,
    closingRankGen: 45000,
    closingRankOBC: 48000,
    closingRankSC: 85000,
    closingRankST: 120000,
    approxFeePerYear: '₹14,50,000 / yr',
    nirfRank: 9
  }
];

export const FAQS_DATA = [
  {
    category: 'Test Series',
    question: 'How do Minor, Major, Part Syllabus, and Full Syllabus tests differ?',
    answer: 'Minor Test Series focus on single chapters with topic-wise MCQs for daily building. Major Test Series cover multi-chapter blocks with negative marking and national percentiles. Part Syllabus Tests group whole units (e.g. Optics + Genetics) according to scheduled calendar dates. Full Syllabus Tests replicate the exact official 720-mark NEET / 300-mark JEE pattern with AIR prediction.'
  },
  {
    category: 'CBT Simulator',
    question: 'Is the test interface identical to the actual CBT examination?',
    answer: 'Yes! Our CBT mode features the official CBT color-coded palette (Answered, Not Answered, Marked for Review, Answered & Marked for Review), live countdown timer, clear response options, and section-switching capabilities.'
  },
  {
    category: 'Custom Test & DPP',
    question: 'How does the Custom Test & DPP Generator work?',
    answer: 'You can choose your target subjects (Physics, Chemistry, Biology, Mathematics), select specific chapters/topics, adjust the question count, set the timer duration, and choose difficulty (Easy, Medium, Hard, or Adaptive). The platform dynamically synthesizes a fresh paper with instant scoring.'
  },
  {
    category: 'Mentorship & Support',
    question: 'How does 1-on-1 Mentor Support and Doubt Resolution work?',
    answer: 'Enrolled students can submit doubt photos or text 24/7 to our Academic Support team for sub-10 minute solutions from top medical & engineering graduates. You also get weekly 1-on-1 video counselling for exam strategy.'
  },
  {
    category: 'NEET Exam & Counselling',
    question: 'What is the current NEET-UG marking scheme and duration?',
    answer: 'NEET-UG consists of 200 questions (Physics: 50, Chemistry: 50, Botany: 50, Zoology: 50). Students must attempt 180 questions for 720 total marks. Marking scheme: +4 for each correct answer, -1 for incorrect answer, 0 for unattempted. Duration is 200 minutes (3 hours 20 minutes).'
  }
];

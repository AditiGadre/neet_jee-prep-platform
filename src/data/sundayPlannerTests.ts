import { Question, TestItem } from '../types';
import { getUnifiedQuestionBank } from '../utils/questionDatabase';
import { formatMathAndFormulas } from '../utils/mathFormatter';

export interface SundayPlannerTest {
  id: string;
  code: string; // e.g. 'CWT-01', 'CUM-01', 'PART-01', 'FST-01'
  dateStr: string; // e.g. '2026-09-20'
  phase: 'Phase 1: Chapter-Wise' | 'Phase 1: Cumulative' | 'Phase 2: Part-Wise' | 'Phase 3: Full Syllabus';
  phaseGroup: 'cwt' | 'cumulative' | 'part' | 'full';
  title: string;
  description: string;
  objective?: string;
  physicsUnit: string;
  chemistryUnit: string;
  botanyBlock: string;
  zoologyBlock: string;
  physicsKeywords: string[];
  chemistryKeywords: string[];
  botanyKeywords: string[];
  zoologyKeywords: string[];
  totalQuestions: number; // 180
  durationMinutes: number; // 180
  totalMarks: number; // 720
}

export interface SundayChapterSelection {
  physics: string[];
  chemistry: string[];
  biology: string[];
}

/**
 * 20 OFFICIAL UNITS - PHYSICS (NEET UG NTA/NMC Syllabus)
 */
export const OFFICIAL_PHYSICS_UNITS = [
  'Unit 1: Physics & Measurement + Experimental Skills',
  'Unit 2: Kinematics',
  'Unit 3: Laws of Motion',
  'Unit 4: Work, Energy & Power',
  'Unit 5: Rotational Motion',
  'Unit 6: Gravitation',
  'Unit 7: Properties of Solids & Liquids',
  'Unit 8: Thermodynamics',
  'Unit 9: Kinetic Theory of Gases',
  'Unit 10: Oscillations & Waves',
  'Unit 11: Electrostatics',
  'Unit 12: Current Electricity',
  'Unit 13: Magnetic Effects of Current & Magnetism',
  'Unit 14: Electromagnetic Induction & AC',
  'Unit 15: Electromagnetic Waves',
  'Unit 16: Optics',
  'Unit 17: Dual Nature of Matter & Radiation',
  'Unit 18: Atoms & Nuclei',
  'Unit 19: Electronic Devices',
  'Unit 20: Experimental Skills & Practical Physics'
];

/**
 * 20 OFFICIAL UNITS - CHEMISTRY (NEET UG NTA/NMC Syllabus)
 */
export const OFFICIAL_CHEMISTRY_UNITS = [
  'Unit 1: Some Basic Concepts in Chemistry',
  'Unit 2: Atomic Structure',
  'Unit 3: Chemical Bonding & Molecular Structure',
  'Unit 4: Chemical Thermodynamics',
  'Unit 5: Solutions',
  'Unit 6: Equilibrium',
  'Unit 7: Redox Reactions & Electrochemistry',
  'Unit 8: Chemical Kinetics',
  'Unit 9: Classification of Elements & Periodicity',
  'Unit 10: P-Block Elements',
  'Unit 11: d- & f-Block Elements',
  'Unit 12: Coordination Compounds',
  'Unit 13: Purification & Characterisation of Organic Compounds',
  'Unit 14: Some Basic Principles of Organic Chemistry',
  'Unit 15: Hydrocarbons',
  'Unit 16: Organic Compounds Containing Halogens',
  'Unit 17: Organic Compounds Containing Oxygen',
  'Unit 18: Organic Compounds Containing Nitrogen',
  'Unit 19: Biomolecules',
  'Unit 20: Principles Related to Practical Chemistry'
];

/**
 * 20 TRACKING BLOCKS - BOTANY (NEET UG)
 */
export const OFFICIAL_BOTANY_BLOCKS = [
  '1. The Living World',
  '2. Biological Classification',
  '3. Plant Kingdom',
  '4. Morphology of Flowering Plants',
  '5. Anatomy of Flowering Plants',
  '6. Cell: Structure & Function',
  '7. Biomolecules (Botany)',
  '8. Cell Cycle & Cell Division',
  '9. Transport in Plants',
  '10. Mineral Nutrition',
  '11. Photosynthesis in Plants',
  '12. Respiration in Plants',
  '13. Plant Growth & Development',
  '14. Sexual Reproduction in Flowering Plants',
  '15. Principles of Inheritance & Variation (Botany)',
  '16. Molecular Basis of Inheritance (Botany)',
  '17. Evolution (Plant Systems)',
  '18. Microbes in Human Welfare (Botany)',
  '19. Biotechnology: Principles & Processes',
  '20. Ecology & Environment'
];

/**
 * 20 TRACKING BLOCKS - ZOOLOGY (NEET UG)
 */
export const OFFICIAL_ZOOLOGY_BLOCKS = [
  '1. Animal Kingdom',
  '2. Structural Organisation in Animals',
  '3. Breathing & Respiration',
  '4. Body Fluids & Circulation',
  '5. Excretory Products & Elimination',
  '6. Locomotion & Movement',
  '7. Neural Control & Coordination',
  '8. Chemical Coordination & Regulation',
  '9. Human Reproduction',
  '10. Reproductive Health',
  '11. Human Health & Disease',
  '12. Microbes & Human Welfare Applications',
  '13. Principles of Inheritance & Variation (Zoology)',
  '14. Molecular Basis of Inheritance (Zoology)',
  '15. Evolution (Animal & Human Evolution)',
  '16. Biotechnology & Its Applications',
  '17. Biology & Human Welfare',
  '18. Organisms & Populations',
  '19. Ecosystem',
  '20. Biodiversity & Conservation'
];

/**
 * COMPLETE 33 SUNDAY TESTS PLANNER (15 September 2026 - 2 May 2027)
 * Strictly matching the NEET 2027 Dropper Test Planner PDF.
 */
export const SUNDAY_DROPPER_PLANNER_TESTS: SundayPlannerTest[] = [
  // ==========================================
  // PHASE 1: CHAPTER/UNIT-WISE + CUMULATIVE
  // ==========================================
  {
    id: 'test-sunday-cwt-01',
    code: 'CWT-01',
    dateStr: '2026-09-20',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-01: Physics & Measurement, Basic Concepts of Chemistry, Living World, Animal Kingdom',
    description: 'Unit 1 Physics + Unit 1 Chemistry + Living World + Animal Kingdom (180 Marks • 180 Qs)',
    physicsUnit: 'Unit 1: Physics & Measurement + Experimental Skills',
    chemistryUnit: 'Unit 1: Some Basic Concepts in Chemistry',
    botanyBlock: '1. The Living World',
    zoologyBlock: '1. Animal Kingdom',
    physicsKeywords: ['Units and Measurement', 'Units, Dimensions', 'Vectors', 'Experimental Skills'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Mole Concept', 'Some Basic Concepts in Chemistry'],
    botanyKeywords: ['The Living World', 'Diversity of Living World'],
    zoologyKeywords: ['Animal Kingdom'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-02',
    code: 'CWT-02',
    dateStr: '2026-09-27',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-02: Kinematics, Atomic Structure, Biological Classification, Structural Organisation',
    description: 'Unit 2 Physics + Unit 2 Chemistry + Biological Classification + Animal Tissues/Cockroach/Frog',
    physicsUnit: 'Unit 2: Kinematics (1D & 2D Motion)',
    chemistryUnit: 'Unit 2: Atomic Structure',
    botanyBlock: '2. Biological Classification',
    zoologyBlock: '2. Structural Organisation in Animals',
    physicsKeywords: ['Motion in One Dimension', 'Motion in a Plane', 'Kinematics', 'Vectors'],
    chemistryKeywords: ['Structure of Atom', 'Atomic Structure'],
    botanyKeywords: ['Biological Classification'],
    zoologyKeywords: ['Structural Organisation in Animals', 'Structural Organisation of Animals'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-03',
    code: 'CWT-03',
    dateStr: '2026-10-04',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-03: Laws of Motion, Chemical Bonding, Plant Kingdom, Breathing & Respiration',
    description: 'Unit 3 Physics + Unit 3 Chemistry + Plant Kingdom + Breathing & Respiration (180 Marks • 180 Qs)',
    physicsUnit: 'Unit 3: Laws of Motion & Friction',
    chemistryUnit: 'Unit 3: Chemical Bonding & Molecular Structure',
    botanyBlock: '3. Plant Kingdom',
    zoologyBlock: '3. Breathing & Respiration',
    physicsKeywords: ['Laws of Motion', 'Friction', 'Newton'],
    chemistryKeywords: ['Chemical Bonding & Molecular Structure', 'Chemical Bonding and Molecular Structure'],
    botanyKeywords: ['Plant Kingdom'],
    zoologyKeywords: ['Breathing and Exchange of Gases', 'Breathing & Respiration'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-04',
    code: 'CWT-04',
    dateStr: '2026-10-11',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-04: Work Energy & Power, Thermodynamics (Chem), Morphology, Body Fluids & Circulation',
    description: 'Unit 4 Physics + Unit 4 Chemistry + Morphology of Flowering Plants + Circulatory System',
    physicsUnit: 'Unit 4: Work, Energy & Power',
    chemistryUnit: 'Unit 4: Chemical Thermodynamics',
    botanyBlock: '4. Morphology of Flowering Plants',
    zoologyBlock: '4. Body Fluids & Circulation',
    physicsKeywords: ['Work, Energy and Power', 'Work, Energy & Power'],
    chemistryKeywords: ['Chemical Thermodynamics', 'Thermodynamics'],
    botanyKeywords: ['Morphology of Flowering Plants', 'Morphology of Flowering Plant'],
    zoologyKeywords: ['Body Fluids and Circulation', 'Body Fluids & Circulation'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cum-01',
    code: 'CUM-01',
    dateStr: '2026-10-18',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-01: Cumulative Checkpoint Test 1 (All CWT-01 to CWT-04 Syllabus)',
    description: 'Comprehensive Cumulative Revision: Physics Units 1-4 + Chemistry Units 1-4 + Botany Blocks 1-4 + Zoology Blocks 1-4',
    objective: 'Cumulative revision & retention checkpoint across all covered chapters in Month 1.',
    physicsUnit: 'Units 1-4: Measurement, Kinematics, NLM, Work Energy',
    chemistryUnit: 'Units 1-4: Basic Concepts, Atom Structure, Bonding, Thermodynamics',
    botanyBlock: 'Blocks 1-4: Living World, Classification, Plant Kingdom, Morphology',
    zoologyBlock: 'Blocks 1-4: Animal Kingdom, Structural Org, Breathing, Body Fluids',
    physicsKeywords: ['Units and Measurement', 'Motion in One Dimension', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Chemical Thermodynamics'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-05',
    code: 'CWT-05',
    dateStr: '2026-10-25',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-05: Rotational Motion, Solutions, Plant Anatomy, Excretory Products & Elimination',
    description: 'Unit 5 Physics + Unit 5 Chemistry + Anatomy of Flowering Plants + Excretory Physiology',
    physicsUnit: 'Unit 5: Rotational Motion & Moment of Inertia',
    chemistryUnit: 'Unit 5: Solutions (Colligative Properties)',
    botanyBlock: '5. Anatomy of Flowering Plants',
    zoologyBlock: '5. Excretory Products & Elimination',
    physicsKeywords: ['Rotational Motion'],
    chemistryKeywords: ['Solutions'],
    botanyKeywords: ['Anatomy of Flowering Plants', 'Plant Anatomy'],
    zoologyKeywords: ['Excretory Products and their Elimination', 'Excretory Products & Elimination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-06',
    code: 'CWT-06',
    dateStr: '2026-11-01',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-06: Gravitation, Equilibrium (Chem), Cell: Structure & Function, Locomotion & Movement',
    description: 'Unit 6 Physics + Unit 6 Chemistry + Cell Biology + Skeletal & Muscular Movement',
    physicsUnit: 'Unit 6: Gravitation & Orbital Motion',
    chemistryUnit: 'Unit 6: Equilibrium (Chemical & Ionic)',
    botanyBlock: '6. Cell: Structure & Function',
    zoologyBlock: '6. Locomotion & Movement',
    physicsKeywords: ['Gravitation'],
    chemistryKeywords: ['Equilibrium', 'Chemical Equilibrium', 'Ionic Equilibrium'],
    botanyKeywords: ['Cell: The Unit of Life', 'Cell: Structure & Function'],
    zoologyKeywords: ['Locomotion and Movement', 'Locomotion & Movement'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-07',
    code: 'CWT-07',
    dateStr: '2026-11-08',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-07: Properties of Solids & Liquids, Redox & Electrochemistry, Biomolecules, Neural Control',
    description: 'Unit 7 Physics + Unit 7 Chemistry + Biomolecules (NCERT) + Neural Control & Sense Organs',
    physicsUnit: 'Unit 7: Properties of Solids & Liquids (Elasticity, Fluids, Thermal)',
    chemistryUnit: 'Unit 7: Redox Reactions & Electrochemistry',
    botanyBlock: '7. Biomolecules (Botany)',
    zoologyBlock: '7. Neural Control & Coordination',
    physicsKeywords: ['Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Elasticity', 'Thermal Properties of Matter'],
    chemistryKeywords: ['Redox Reactions', 'Electrochemistry', 'Redox Reactions & Electrochemistry'],
    botanyKeywords: ['Biomolecules'],
    zoologyKeywords: ['Neural Control and Coordination', 'Neural Control & Coordination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-08',
    code: 'CWT-08',
    dateStr: '2026-11-15',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-08: Thermodynamics (Physics), Chemical Kinetics, Cell Cycle, Chemical Coordination',
    description: 'Unit 8 Physics + Unit 8 Chemistry + Cell Division & Mitosis/Meiosis + Endocrine Glands',
    physicsUnit: 'Unit 8: Thermodynamics & Heat Engines',
    chemistryUnit: 'Unit 8: Chemical Kinetics',
    botanyBlock: '8. Cell Cycle & Cell Division',
    zoologyBlock: '8. Chemical Coordination & Regulation',
    physicsKeywords: ['Thermodynamics', 'Transmission of Heat'],
    chemistryKeywords: ['Chemical Kinetics'],
    botanyKeywords: ['Cell Cycle and Cell Division', 'Cell Cycle & Cell Division'],
    zoologyKeywords: ['Chemical Coordination and Integration', 'Chemical Coordination & Regulation'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cum-02',
    code: 'CUM-02',
    dateStr: '2026-11-22',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-02: Cumulative Checkpoint Test 2 (All CWT-01 to CWT-08 Syllabus)',
    description: 'Comprehensive Cumulative Revision: Physics Units 1-8 + Chemistry Units 1-8 + Botany Blocks 1-8 + Zoology Blocks 1-8',
    objective: 'Full mid-phase consolidation of Class 11 core mechanics, physical chemistry, cell biology & physiology.',
    physicsUnit: 'Units 1-8: Full Class 11 Mechanics, Fluids & Thermal Physics',
    chemistryUnit: 'Units 1-8: Basic Chemistry, Structure, Bonding, Thermo, Solutions, Equil, Redox, Kinetics',
    botanyBlock: 'Blocks 1-8: Living World, Diversity, Morphology, Anatomy, Cell Unit & Cell Cycle',
    zoologyBlock: 'Blocks 1-8: Animal Kingdom, Structural Org, Human Physiology Systems (Breathing to Endocrine)',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermodynamics'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Thermodynamics', 'Solutions', 'Equilibrium', 'Redox Reactions', 'Electrochemistry', 'Chemical Kinetics'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products', 'Locomotion and Movement', 'Neural Control', 'Chemical Coordination and Integration'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-09',
    code: 'CWT-09',
    dateStr: '2026-11-29',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-09: Kinetic Theory of Gases, Periodicity & Elements, Transport in Plants, Human Reproduction',
    description: 'Unit 9 Physics + Unit 9 Chemistry + Plant Transport + Male & Female Reproductive Systems',
    physicsUnit: 'Unit 9: Kinetic Theory of Gases',
    chemistryUnit: 'Unit 9: Classification of Elements & Periodicity',
    botanyBlock: '9. Transport in Plants',
    zoologyBlock: '9. Human Reproduction',
    physicsKeywords: ['Kinetic Theory of Gases'],
    chemistryKeywords: ['Classification of Elements and Periodicity in Properties', 'Classification of Elements & Periodicity', 'Periodic Table & Periodicity'],
    botanyKeywords: ['Transport in Plants'],
    zoologyKeywords: ['Human Reproduction'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-10',
    code: 'CWT-10',
    dateStr: '2026-12-06',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-10: Oscillations & Waves, P-Block Elements, Mineral Nutrition, Reproductive Health',
    description: 'Unit 10 Physics + Unit 10 Chemistry + Plant Mineral Nutrition + Contraception & ART Reproductive Health',
    physicsUnit: 'Unit 10: Oscillations & Waves (SHM, Acoustics)',
    chemistryUnit: 'Unit 10: P-Block Elements (Groups 13-18)',
    botanyBlock: '10. Mineral Nutrition',
    zoologyBlock: '10. Reproductive Health',
    physicsKeywords: ['Simple Harmonic Motion', 'Waves and Sound', 'Oscillations & Waves'],
    chemistryKeywords: ['The p-Block Elements (Groups 13 and 14)', 'The p-Block Elements (Group 15, 16, 17 and 18)', 'P-Block Elements'],
    botanyKeywords: ['Mineral Nutrition'],
    zoologyKeywords: ['Reproductive Health'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-11',
    code: 'CWT-11',
    dateStr: '2026-12-13',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-11: Electrostatics, d- & f-Block Elements, Photosynthesis in Plants, Human Health & Disease',
    description: 'Unit 11 Physics + Unit 11 Chemistry + Light & Dark Reactions + Immunity, Pathogens & Cancer',
    physicsUnit: 'Unit 11: Electrostatics (Fields, Potential, Capacitance)',
    chemistryUnit: 'Unit 11: d- & f-Block Elements',
    botanyBlock: '11. Photosynthesis in Plants',
    zoologyBlock: '11. Human Health & Disease',
    physicsKeywords: ['Electrostatics', 'Electrostatic Potential and Capacitance', 'Capacitance'],
    chemistryKeywords: ['The d- and f-Block Elements', 'd- & f-Block Elements', 'd & f-Block Elements'],
    botanyKeywords: ['Photosynthesis in Higher Plants', 'Photosynthesis in Plants'],
    zoologyKeywords: ['Human Health and Disease', 'Human Health & Disease'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-12',
    code: 'CWT-12',
    dateStr: '2026-12-20',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-12: Current Electricity, Coordination Compounds, Respiration in Plants, Microbes in Welfare',
    description: 'Unit 12 Physics + Unit 12 Chemistry + Glycolysis/Krebs Cycle/ETS + Industrial Microbes & Biocontrol',
    physicsUnit: 'Unit 12: Current Electricity (Ohm, Kirchhoff, Circuits)',
    chemistryUnit: 'Unit 12: Coordination Compounds (Isomerism, CFT)',
    botanyBlock: '12. Respiration in Plants',
    zoologyBlock: '12. Microbes & Human Welfare Applications',
    physicsKeywords: ['Current Electricity'],
    chemistryKeywords: ['Coordination Compounds', 'Coordination Chemistry'],
    botanyKeywords: ['Respiration in Plants'],
    zoologyKeywords: ['Microbes in Human Welfare', 'Microbes & Human Welfare Applications'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cum-03',
    code: 'CUM-03',
    dateStr: '2026-12-27',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-03: Cumulative Checkpoint Test 3 (All CWT-01 to CWT-12 Syllabus)',
    description: 'Comprehensive Cumulative Revision: Physics Units 1-12 + Chemistry Units 1-12 + Botany Blocks 1-12 + Zoology Blocks 1-12',
    objective: 'Year-end checkpoint covering 60% of total NEET syllabus including electrostatics, circuits & coordination.',
    physicsUnit: 'Units 1-12: Mechanics, Fluids, Thermal, Waves, Electrostatics, Current Electricity',
    chemistryUnit: 'Units 1-12: Physical Chemistry, Periodic Properties, P-Block, d-Block, Coordination',
    botanyBlock: 'Blocks 1-12: Diversity, Morphology, Cell, Plant Physiology (Transport, Nutrition, Photosynthesis, Respiration)',
    zoologyBlock: 'Blocks 1-12: Animal Kingdom, Structural Org, Physiology, Human Reproduction, Health & Microbes',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Thermodynamics', 'Kinetic Theory of Gases', 'Oscillations & Waves', 'Electrostatics', 'Current Electricity'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Thermodynamics', 'Solutions', 'Equilibrium', 'Redox Reactions', 'Electrochemistry', 'Chemical Kinetics', 'Classification of Elements and Periodicity', 'P-Block Elements', 'd- & f-Block Elements', 'Coordination Compounds'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Breathing', 'Body Fluids', 'Excretory Products', 'Locomotion', 'Neural Control', 'Chemical Coordination', 'Human Reproduction', 'Reproductive Health', 'Human Health and Disease', 'Microbes in Human Welfare'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-13',
    code: 'CWT-13',
    dateStr: '2027-01-03',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-13: Magnetism, Purification of Organic Compounds, Plant Growth, Principles of Inheritance',
    description: 'Unit 13 Physics + Unit 13 Chemistry + Plant Hormones & Photoperiodism + Mendelian Genetics (180 Qs)',
    physicsUnit: 'Unit 13: Magnetic Effects of Current & Magnetism',
    chemistryUnit: 'Unit 13: Purification & Characterisation of Organic Compounds',
    botanyBlock: '13. Plant Growth & Development',
    zoologyBlock: '13. Principles of Inheritance & Variation',
    physicsKeywords: ['Magnetism and Matter', 'Magnetism', 'Magnetic Effects of Current & Magnetism'],
    chemistryKeywords: ['Purification & Characterisation of Organic Compounds', 'Organic Chemistry - Some Basic Principles & Techniques'],
    botanyKeywords: ['Plant Growth and Development', 'Plant Growth & Development'],
    zoologyKeywords: ['Principles of Inheritance and Variation', 'Principles of Inheritance & Variation', 'Mendelian Genetics #01'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-14',
    code: 'CWT-14',
    dateStr: '2027-01-10',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-14: EMI & AC, Some Basic Principles of Organic Chemistry (GOC), Flower Reproduction, Molecular Genetics',
    description: 'Unit 14 Physics + Unit 14 Chemistry (GOC/Isomerism) + Angiosperm Embryology + DNA/RNA Replication',
    physicsUnit: 'Unit 14: Electromagnetic Induction & Alternating Current',
    chemistryUnit: 'Unit 14: Some Basic Principles of Organic Chemistry (GOC & Mechanisms)',
    botanyBlock: '14. Sexual Reproduction in Flowering Plants',
    zoologyBlock: '14. Molecular Basis of Inheritance',
    physicsKeywords: ['Electromagnetic Induction', 'Alternating Current', 'EMI & AC'],
    chemistryKeywords: ['Organic Chemistry - Some Basic Principles & Techniques', 'Nomenclature & Isomerism (GOC)', 'Reaction Mechanism', 'Some Basic Principles of Organic Chemistry'],
    botanyKeywords: ['Sexual Reproduction in Flowering Plants'],
    zoologyKeywords: ['Molecular Basis of Inheritance'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-15',
    code: 'CWT-15',
    dateStr: '2027-01-17',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-15: Electromagnetic Waves, Hydrocarbons, Genetics Principles (Botany), Evolution',
    description: 'Unit 15 Physics + Unit 15 Chemistry (Alkanes/Alkenes/Alkynes/Arenes) + Linkage/Sex Determination + Darwinism & Hardy-Weinberg',
    physicsUnit: 'Unit 15: Electromagnetic Waves (Spectrum & Poynting Vector)',
    chemistryUnit: 'Unit 15: Hydrocarbons (Aliphatic & Aromatic)',
    botanyBlock: '15. Principles of Inheritance & Variation (Botany)',
    zoologyBlock: '15. Evolution',
    physicsKeywords: ['Electromagnetic Waves'],
    chemistryKeywords: ['Hydrocarbons', 'Hydrocarbons (Alkane, Alkene & Alkyne)', 'Aromatic Hydrocarbons'],
    botanyKeywords: ['Principles of Inheritance and Variation', 'Linkage, Sex Linkage, Sex Determination #03'],
    zoologyKeywords: ['Evolution', 'Origin and Evolution: RACE 01', 'Origin and Evolution: RACE 02'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-16',
    code: 'CWT-16',
    dateStr: '2027-01-24',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-16: Optics (Ray & Wave), Organic Halogens (Haloalkanes), Molecular Genetics (Botany), Biotechnology Applications',
    description: 'Unit 16 Physics + Unit 16 Chemistry + Transcription/Translation + Recombinant Therapeutics & GMOs',
    physicsUnit: 'Unit 16: Optics (Ray Optics & Optical Instruments + Wave Optics)',
    chemistryUnit: 'Unit 16: Organic Compounds Containing Halogens (Haloalkanes & Haloarenes)',
    botanyBlock: '16. Molecular Basis of Inheritance (Botany)',
    zoologyBlock: '16. Biotechnology & Its Applications',
    physicsKeywords: ['Ray Optics and Optical Instruments', 'Wave Optics', 'Optics'],
    chemistryKeywords: ['Haloalkanes and Haloarenes', 'Alkyl Halides', 'Organic Compounds Containing Halogens'],
    botanyKeywords: ['Molecular Basis of Inheritance'],
    zoologyKeywords: ['Biotechnology and its Applications', 'Biotechnology: Application', 'Biotechnology & Its Applications'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cum-04',
    code: 'CUM-04',
    dateStr: '2027-01-31',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-04: Cumulative Checkpoint Test 4 (All CWT-01 to CWT-16 Syllabus)',
    description: 'Comprehensive Cumulative Revision: Physics Units 1-16 + Chemistry Units 1-16 + Botany Blocks 1-16 + Zoology Blocks 1-16',
    objective: 'High-yield consolidation of Electromagnetism, Optics, GOC, Hydrocarbons, Genetics & Evolution.',
    physicsUnit: 'Units 1-16: Mechanics, Fluids, Thermo, Waves, Electrostatics, Magnetism, EMI/AC, Optics',
    chemistryUnit: 'Units 1-16: Physical Chem, Inorganic Families, GOC, Hydrocarbons, Haloalkanes',
    botanyBlock: 'Blocks 1-16: Plant Diversity, Anatomy, Physiology, Angiosperm Reproduction, Genetics',
    zoologyBlock: 'Blocks 1-16: Animal Diversity, Physiology, Human Reproduction, Genetics, Evolution, Biotech',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Thermodynamics', 'Oscillations & Waves', 'Electrostatics', 'Current Electricity', 'Magnetism', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Ray Optics and Optical Instruments', 'Wave Optics'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Thermodynamics', 'Solutions', 'Equilibrium', 'Redox Reactions', 'Chemical Kinetics', 'P-Block Elements', 'd- & f-Block Elements', 'Coordination Compounds', 'Organic Chemistry - Some Basic Principles & Techniques', 'Hydrocarbons', 'Haloalkanes and Haloarenes'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Sexual Reproduction in Flowering Plants', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Breathing', 'Body Fluids', 'Excretory', 'Locomotion', 'Neural Control', 'Chemical Coordination', 'Human Reproduction', 'Reproductive Health', 'Human Health and Disease', 'Microbes in Human Welfare', 'Principles of Inheritance', 'Molecular Basis', 'Evolution', 'Biotechnology and its Applications'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-17',
    code: 'CWT-17',
    dateStr: '2027-02-07',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-17: Dual Nature of Radiation & Matter, Oxygen Containing Compounds, Plant Evolution, Human Welfare',
    description: 'Unit 17 Physics + Unit 17 Chemistry (Alcohols/Phenols/Ethers/Aldehydes/Ketones/Acids) + Human Welfare Biology',
    physicsUnit: 'Unit 17: Dual Nature of Matter & Radiation (Photoelectric Effect & de Broglie)',
    chemistryUnit: 'Unit 17: Organic Compounds Containing Oxygen (Alcohols, Carbonyls, Acids)',
    botanyBlock: '17. Evolution (Plant Systems)',
    zoologyBlock: '17. Biology & Human Welfare',
    physicsKeywords: ['Dual Nature of Radiation and Matter', 'Dual Nature of Matter & Radiation'],
    chemistryKeywords: ['Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Carbonyl Compounds (Aldehydes & Ketones)', 'Carboxylic Acids & Its Derivatives', 'Organic Compounds Containing Oxygen'],
    botanyKeywords: ['Evolution', 'Origin and Evolution: RACE 03'],
    zoologyKeywords: ['Biology & Human Welfare', 'Human Health and Disease', 'Microbes in Human Welfare', 'Domestication of Animals'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-18',
    code: 'CWT-18',
    dateStr: '2027-02-14',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-18: Atoms & Nuclei, Nitrogen Containing Compounds (Amines), Plant Microbes, Organisms & Populations',
    description: 'Unit 18 Physics + Unit 18 Chemistry (Amines & Diazonium) + Population Interactions & Abiotic Adaptations',
    physicsUnit: 'Unit 18: Atoms & Nuclei (Bohr Model, Radioactivity, Mass Defect)',
    chemistryUnit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines & Diazonium Salts)',
    botanyBlock: '18. Microbes in Human Welfare (Botany)',
    zoologyBlock: '18. Organisms & Populations',
    physicsKeywords: ['Atoms', 'Nuclei', 'Atoms & Nuclei'],
    chemistryKeywords: ['Amines', 'Nitrogen Containing Compounds (Amines)', 'Organic Compounds Containing Nitrogen'],
    botanyKeywords: ['Microbes in Human Welfare'],
    zoologyKeywords: ['Organisms and Populations', 'Organisms & Populations', 'Organism and Population (Ecology)'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cwt-19',
    code: 'CWT-19',
    dateStr: '2027-02-21',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-19: Electronic Devices (Semiconductors), Biomolecules & Practical Chem, Biotech Processes, Ecosystem',
    description: 'Unit 19 Physics + Units 19-20 Chemistry + rDNA Technology & PCR + Energy Flow, Food Chains & Biogeochemical Cycles',
    physicsUnit: 'Unit 19: Electronic Devices (p-n Junction Diodes, Logic Gates)',
    chemistryUnit: 'Units 19-20: Biomolecules + Principles Related to Practical Chemistry',
    botanyBlock: '19. Biotechnology: Principles & Processes',
    zoologyBlock: '19. Ecosystem',
    physicsKeywords: ['Semiconductor Electronics: Materials, Devices and Simple Circuits', 'Electronic Devices'],
    chemistryKeywords: ['Biomolecules', 'Chemistry in Everyday Life', 'Environmental Chemistry', 'Practical Chemistry'],
    botanyKeywords: ['Biotechnology: Principles and Processes', 'Biotechnology: Principles & Processes'],
    zoologyKeywords: ['Ecosystem'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-cum-05',
    code: 'CUM-05',
    dateStr: '2027-02-28',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-05: Phase 1 Grand Cumulative Checkpoint (Full CWT-01 to CWT-19 Syllabus)',
    description: 'Full Syllabus Consolidation closing Phase 1: All 20 Physics Units, 20 Chemistry Units, 20 Botany Blocks, 20 Zoology Blocks',
    objective: 'Official Phase 1 Grand Cumulative Test covering 100% of listed NCERT syllabus before Part Tests begin.',
    physicsUnit: 'All Physics Units 1-19 (Complete Physics Syllabus)',
    chemistryUnit: 'All Chemistry Units 1-20 (Complete Chemistry Syllabus)',
    botanyBlock: 'All Botany Tracking Blocks 1-20 (Complete Botany Syllabus)',
    zoologyBlock: 'All Zoology Tracking Blocks 1-20 (Complete Zoology Syllabus)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },

  // ==========================================
  // PHASE 2: PART-WISE TESTS (MARCH 2027)
  // ==========================================
  {
    id: 'test-sunday-part-01',
    code: 'PART-01',
    dateStr: '2027-03-07',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: 'PART-01 / Part Test 1: Physics Units 1-7 | Chemistry Units 1-8 | Biology Units 1-3',
    description: 'Integrated testing: Class 11 Mechanics & Fluids + Physical Chemistry Fundamentals + Living Diversity & Cell Biology',
    objective: 'Shift from chapter mastery to integrated timed testing. Use mixed difficulty, PYQ-style questions and full paper analysis.',
    physicsUnit: 'Physics Units 1-7: Measurement, Kinematics, NLM, WEP, Rotational, Gravitation, Solids & Fluids',
    chemistryUnit: 'Chemistry Units 1-8: Basic Concepts, Atom, Bonding, Thermo, Solutions, Equilibrium, Redox, Kinetics',
    botanyBlock: 'Biology Units 1-3 (Botany): Diversity in Living World, Plant Kingdom, Morphology & Anatomy, Cell Biology',
    zoologyBlock: 'Biology Units 1-3 (Zoology): Animal Kingdom, Structural Organisation, Complete Human Physiology',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Chemical Thermodynamics', 'Solutions', 'Equilibrium', 'Redox Reactions', 'Chemical Kinetics'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Cell Cycle and Cell Division'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products', 'Locomotion and Movement', 'Neural Control', 'Chemical Coordination and Integration'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-part-02',
    code: 'PART-02',
    dateStr: '2027-03-14',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: 'PART-02 / Part Test 2: Physics Units 8-14 | Chemistry Units 9-15 | Biology Units 4-7',
    description: 'Integrated testing: Thermodynamics, Waves, Electrostatics, Circuits, Magnetism, EMI/AC + Inorganic Families + Plant Phys & Genetics',
    objective: 'Rigorous simulation across mid-syllabus electromagnetism, organic basics & genetic inheritance.',
    physicsUnit: 'Physics Units 8-14: Thermodynamics, KTG, Oscillations/Waves, Electrostatics, Current, Magnetism, EMI/AC',
    chemistryUnit: 'Chemistry Units 9-15: Periodicity, P-Block, d- & f-Block, Coordination, Purification, GOC, Hydrocarbons',
    botanyBlock: 'Biology Units 4-7 (Botany): Plant Physiology (Transport, Nutrition, Photosynthesis, Respiration), Angiosperm Reproduction',
    zoologyBlock: 'Biology Units 4-7 (Zoology): Human Reproduction, Reproductive Health, Genetics, Molecular Biology, Evolution',
    physicsKeywords: ['Thermodynamics', 'Kinetic Theory of Gases', 'Simple Harmonic Motion', 'Waves and Sound', 'Electrostatics', 'Current Electricity', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current'],
    chemistryKeywords: ['Classification of Elements and Periodicity in Properties', 'The p-Block Elements (Groups 13 and 14)', 'The p-Block Elements (Group 15, 16, 17 and 18)', 'The d- and f-Block Elements', 'Coordination Compounds', 'Organic Chemistry - Some Basic Principles & Techniques', 'Hydrocarbons'],
    botanyKeywords: ['Transport in Plants', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Sexual Reproduction in Flowering Plants'],
    zoologyKeywords: ['Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-part-03',
    code: 'PART-03',
    dateStr: '2027-03-21',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: 'PART-03 / Part Test 3: Physics Units 15-20 | Chemistry Units 16-20 | Biology Units 8-10',
    description: 'Integrated testing: EM Waves, Optics, Modern Physics, Semiconductors + Oxygen/Nitrogen Organics + Biotechnology & Ecology',
    objective: 'High-scoring modern physics, organic chemistry derivatives, biotechnology tools and ecology ecosystems.',
    physicsUnit: 'Physics Units 15-20: EM Waves, Ray & Wave Optics, Dual Nature, Atoms, Nuclei, Semiconductors, Practical Skills',
    chemistryUnit: 'Chemistry Units 16-20: Haloalkanes, Oxygen Organics, Nitrogen Organics, Biomolecules, Practical Chemistry',
    botanyBlock: 'Biology Units 8-10 (Botany): Biotechnology Principles & Applications, Organisms & Environment, Biodiversity',
    zoologyBlock: 'Biology Units 8-10 (Zoology): Biotechnology Applications, Human Welfare, Ecosystems, Environmental Conservation',
    physicsKeywords: ['Electromagnetic Waves', 'Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics: Materials, Devices and Simple Circuits'],
    chemistryKeywords: ['Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules'],
    botanyKeywords: ['Biotechnology: Principles and Processes', 'Biotechnology: Application', 'Organisms and Populations', 'Biodiversity and Conservation'],
    zoologyKeywords: ['Biotechnology and its Applications', 'Human Health and Disease', 'Microbes in Human Welfare', 'Ecosystem', 'Biodiversity and Conservation'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },

  // ==========================================
  // PHASE 3: FULL SYLLABUS TEST SERIES (28 March - 2 May 2027)
  // ==========================================
  {
    id: 'test-sunday-fst-01',
    code: 'FST-01',
    dateStr: '2027-03-28',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-01 / Full Syllabus Test 1: Complete NEET PCB Grand Simulation',
    description: '100% Authentic NTA Mirror Simulation: Complete Physics (45 Qs) + Complete Chemistry (45 Qs) + Complete Biology (90 Qs)',
    objective: 'Complete NEET syllabus mock simulation with All-India rank benchmarking and speed analytics.',
    physicsUnit: 'Complete NEET Physics Syllabus (All 20 Units)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (All 20 Units)',
    botanyBlock: 'Complete NEET Botany Syllabus (All 20 Tracking Blocks)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (All 20 Tracking Blocks)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-fst-02',
    code: 'FST-02',
    dateStr: '2027-04-04',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-02 / Full Syllabus Test 2: Complete Syllabus + Weak-Area Diagnostic Focus',
    description: 'Full syllabus simulation emphasizing conceptual traps, multi-step calculation numerics and diagrammatic NCERT questions.',
    objective: 'Complete syllabus + weak-area focus with automated post-test diagnostic weakness reporting.',
    physicsUnit: 'Complete NEET Physics Syllabus',
    chemistryUnit: 'Complete NEET Chemistry Syllabus',
    botanyBlock: 'Complete NEET Botany Syllabus',
    zoologyBlock: 'Complete NEET Zoology Syllabus',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-fst-03',
    code: 'FST-03',
    dateStr: '2027-04-11',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-03 / Full Syllabus Test 3: Complete Syllabus + PYQ Emphasis Pattern',
    description: 'Full syllabus simulation structured around 10-year recurring NEET high-frequency question patterns.',
    objective: 'Complete syllabus + PYQ emphasis to ensure maximum accuracy in recurring concept types.',
    physicsUnit: 'Complete NEET Physics Syllabus',
    chemistryUnit: 'Complete NEET Chemistry Syllabus',
    botanyBlock: 'Complete NEET Botany Syllabus',
    zoologyBlock: 'Complete NEET Zoology Syllabus',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-fst-04',
    code: 'FST-04',
    dateStr: '2027-04-18',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-04 / Full Syllabus Test 4: Complete Syllabus + High-Difficulty Challenge Mix',
    description: 'High-difficulty mock with assertion-reasoning, statement-based and deep multi-concept problem sets.',
    objective: 'Complete syllabus + high-difficulty mix to train for toughest expected examination paper scenarios.',
    physicsUnit: 'Complete NEET Physics Syllabus',
    chemistryUnit: 'Complete NEET Chemistry Syllabus',
    botanyBlock: 'Complete NEET Botany Syllabus',
    zoologyBlock: 'Complete NEET Zoology Syllabus',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-fst-05',
    code: 'FST-05',
    dateStr: '2027-04-25',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-05 / Full Syllabus Test 5: Complete Syllabus + OMR / Time Strategy Simulation',
    description: 'Calibrated time-management mock test training candidates on optimal section attempt order and rapid bubble filling.',
    objective: 'Complete syllabus + OMR / time strategy for peak speed and negative mark reduction.',
    physicsUnit: 'Complete NEET Physics Syllabus',
    chemistryUnit: 'Complete NEET Chemistry Syllabus',
    botanyBlock: 'Complete NEET Botany Syllabus',
    zoologyBlock: 'Complete NEET Zoology Syllabus',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-sunday-fst-06',
    code: 'FST-06',
    dateStr: '2027-05-02',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-06 / Final NEET Simulation: Grand Exam-Condition Simulation',
    description: 'Final full 180-Question All-India national rehearsal conducted 1 week prior to official NEET examination.',
    objective: 'Complete syllabus; final exam-condition simulation with definitive All India Rank & College Seat Predictor.',
    physicsUnit: 'Complete NEET Physics Syllabus',
    chemistryUnit: 'Complete NEET Chemistry Syllabus',
    botanyBlock: 'Complete NEET Botany Syllabus',
    zoologyBlock: 'Complete NEET Zoology Syllabus',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  }
];

/**
 * Filter questions from bank matching keywords
 */
function filterQuestionsByKeywords(bank: Question[], keywords: string[]): Question[] {
  if (keywords.includes('All Chapters') || keywords.length === 0) {
    return bank;
  }

  const cleanKeywords = keywords.map(k =>
    k
      .replace(/^Unit \d+:\s*/i, '')
      .replace(/^\[(Botany|Zoology)\]\s*\d*\.?\s*/i, '')
      .toLowerCase()
      .trim()
  );

  const matched = bank.filter(q => {
    const qCh = (q.chapter || '').toLowerCase().trim();
    const qTopic = (q.topic || '').toLowerCase().trim();
    const normQCh = qCh.replace(/[^a-z0-9]/g, '');

    return cleanKeywords.some(kw => {
      const normKw = kw.replace(/[^a-z0-9]/g, '');
      if (normQCh && normKw && (normQCh.includes(normKw) || normKw.includes(normQCh))) return true;
      const kwWords = kw.split(/[^a-z0-9]+/).filter(w => w.length >= 4 && !['unit', 'chapter', 'part', 'test', 'class'].includes(w));
      return kwWords.length > 0 && kwWords.every(w => qCh.includes(w) || qTopic.includes(w));
    });
  });

  return matched.length > 0 ? matched : bank;
}

/**
 * Generate a complete 180-Question Sunday Mock Test (45 Physics, 45 Chemistry, 90 Biology)
 * strictly conforming to the prescribed calendar chapters without mixing unrelated chapters.
 */
export function generateSundayTestQuestions(
  test: SundayPlannerTest,
  customChapters?: SundayChapterSelection
): Question[] {
  // 1. Physics (45 Questions strictly from selected chapter pool)
  const phyBank = getUnifiedQuestionBank('Physics');
  const phyKeywords = customChapters?.physics && customChapters.physics.length > 0
    ? customChapters.physics
    : test.physicsKeywords;
  const phyPool = filterQuestionsByKeywords(phyBank, phyKeywords);
  const randomizedPhy = [...phyPool].sort(() => 0.5 - Math.random());
  const pickedPhy: Question[] = [];
  for (let idx = 0; idx < 45; idx++) {
    const q = randomizedPhy[idx % randomizedPhy.length];
    pickedPhy.push({
      ...q,
      id: `sunday-${test.code.toLowerCase()}-phy-${idx + 1}-${q.id}`,
      subject: 'Physics' as const,
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    });
  }

  // 2. Chemistry (45 Questions strictly from selected chapter pool)
  const chemBank = getUnifiedQuestionBank('Chemistry');
  const chemKeywords = customChapters?.chemistry && customChapters.chemistry.length > 0
    ? customChapters.chemistry
    : test.chemistryKeywords;
  const chemPool = filterQuestionsByKeywords(chemBank, chemKeywords);
  const randomizedChem = [...chemPool].sort(() => 0.5 - Math.random());
  const pickedChem: Question[] = [];
  for (let idx = 0; idx < 45; idx++) {
    const q = randomizedChem[idx % randomizedChem.length];
    pickedChem.push({
      ...q,
      id: `sunday-${test.code.toLowerCase()}-chem-${idx + 1}-${q.id}`,
      subject: 'Chemistry' as const,
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    });
  }

  // 3. Biology (90 Questions: 45 Botany + 45 Zoology strictly from selected pool)
  const bioBank = getUnifiedQuestionBank('Biology');
  const botKeywords = customChapters?.biology && customChapters.biology.length > 0
    ? customChapters.biology
    : test.botanyKeywords;
  const zooKeywords = customChapters?.biology && customChapters.biology.length > 0
    ? customChapters.biology
    : test.zoologyKeywords;

  const botPool = filterQuestionsByKeywords(bioBank, botKeywords);
  const zooPool = filterQuestionsByKeywords(bioBank, zooKeywords);

  const randomizedBot = [...botPool].sort(() => 0.5 - Math.random());
  const pickedBot: Question[] = [];
  for (let idx = 0; idx < 45; idx++) {
    const q = randomizedBot[idx % randomizedBot.length];
    pickedBot.push({
      ...q,
      id: `sunday-${test.code.toLowerCase()}-bot-${idx + 1}-${q.id}`,
      subject: 'Biology' as const,
      tags: [...(q.tags || []), 'Botany'],
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    });
  }

  const randomizedZoo = [...zooPool].sort(() => 0.5 - Math.random());
  const pickedZoo: Question[] = [];
  for (let idx = 0; idx < 45; idx++) {
    const q = randomizedZoo[idx % randomizedZoo.length];
    pickedZoo.push({
      ...q,
      id: `sunday-${test.code.toLowerCase()}-zoo-${idx + 1}-${q.id}`,
      subject: 'Biology' as const,
      tags: [...(q.tags || []), 'Zoology'],
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    });
  }

  return [...pickedPhy, ...pickedChem, ...pickedBot, ...pickedZoo];
}

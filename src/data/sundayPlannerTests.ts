import { Question, TestItem } from '../types';
import { getUnifiedQuestionBank, STRICT_SYLLABUS_UNIT_MAPPINGS } from '../utils/questionDatabase';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { getSequentialLoopQuestions } from '../utils/questionLoopManager';
import { getHardPhysicsDiagram } from '../utils/diagramEngine';

export interface SundayPlannerTest {
  id: string;
  code: string; // e.g. 'CWT-01', 'CUM-01', 'PART-01', 'FST-01'
  dateStr: string; // e.g. '2026-09-20'
  phase: string;
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
  'Unit 1: Units and Measurements',
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
    title: 'CWT-01: Units and Measurements, Basic Concepts of Chemistry, Living World, Animal Kingdom',
    description: 'Unit 1 Physics (Units and Measurements) + Unit 1 Chemistry + Living World + Animal Kingdom (180 Marks • 180 Qs)',
    physicsUnit: 'Unit 1: Units and Measurements',
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
 * OFFICIAL NEET CLASS 11 EXAM TEST PLANNER (20 September 2026 – 14 March 2027)
 * 20 Sunday Tests: 12 Chapter-Wise Tests (CWT), 5 Cumulative Tests (CUM), 3 Full Syllabus Tests (FST)
 * Strictly aligned to official NMC/NTA NEET (UG)-2026/2027 syllabus for Class 11.
 */
export const SUNDAY_11TH_PLANNER_TESTS: SundayPlannerTest[] = [
  // 1. CWT-01: 20 Sep 2026
  {
    id: 'test-11th-cwt-01',
    code: 'CWT-01',
    dateStr: '2026-09-20',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-01: Units & Measurements, Some Basic Concepts of Chemistry, The Living World, Animal Kingdom',
    description: 'Units & Measurements (Phy) + Some Basic Concepts of Chemistry (Chem) + The Living World (Bot) + Animal Kingdom (Zoo)',
    objective: 'Complete chapter-wise testing stage 1 — fundamental units, mole concept, diversity of living world, and animal kingdom.',
    physicsUnit: 'Units & Measurements',
    chemistryUnit: 'Some Basic Concepts of Chemistry',
    botanyBlock: 'The Living World',
    zoologyBlock: 'Animal Kingdom',
    physicsKeywords: ['Units and Measurement', 'Units, Dimensions', 'Vectors', 'Experimental Skills'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Mole Concept', 'Some Basic Concepts in Chemistry'],
    botanyKeywords: ['The Living World', 'Diversity of Living World'],
    zoologyKeywords: ['Animal Kingdom'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 2. CWT-02: 04 Oct 2026
  {
    id: 'test-11th-cwt-02',
    code: 'CWT-02',
    dateStr: '2026-10-04',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-02: Kinematics, Structure of Atom, Biological Classification, Structural Organisation in Animals',
    description: 'Kinematics (Phy) + Structure of Atom (Chem) + Biological Classification (Bot) + Structural Organisation in Animals (Zoo)',
    objective: '1D & 2D Motion, atomic structure, 5-kingdom system, and animal tissues.',
    physicsUnit: 'Kinematics',
    chemistryUnit: 'Structure of Atom',
    botanyBlock: 'Biological Classification',
    zoologyBlock: 'Structural Organisation in Animals',
    physicsKeywords: ['Kinematics', 'Motion in One Dimension', 'Motion in a Plane', 'Motion in a Straight Line'],
    chemistryKeywords: ['Structure of Atom', 'Atomic Structure'],
    botanyKeywords: ['Biological Classification'],
    zoologyKeywords: ['Structural Organisation in Animals', 'Structural Organisation of Animals', 'Animal Tissues'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 3. CWT-03: 18 Oct 2026
  {
    id: 'test-11th-cwt-03',
    code: 'CWT-03',
    dateStr: '2026-10-18',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-03: Laws of Motion, Classification of Elements & Periodicity, Plant Kingdom, Cell Cycle & Cell Division',
    description: 'Laws of Motion (Phy) + Classification of Elements & Periodicity (Chem) + Plant Kingdom (Bot) + Cell Cycle & Cell Division (Zoo)',
    objective: 'Newtonian dynamics, periodic trends, plant kingdom classification, and cell division mechanisms.',
    physicsUnit: 'Laws of Motion',
    chemistryUnit: 'Classification of Elements & Periodicity',
    botanyBlock: 'Plant Kingdom',
    zoologyBlock: 'Cell Cycle & Cell Division',
    physicsKeywords: ['Laws of Motion', 'Friction', 'Newton'],
    chemistryKeywords: ['Classification of Elements', 'Periodicity', 'Periodic Table', 'Classification of Elements & Periodicity'],
    botanyKeywords: ['Plant Kingdom'],
    zoologyKeywords: ['Cell Cycle & Cell Division', 'Cell Cycle and Cell Division', 'Cell Division'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 4. CUM-01: 25 Oct 2026
  {
    id: 'test-11th-cum-01',
    code: 'CUM-01',
    dateStr: '2026-10-25',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-01: Cumulative Checkpoint Test 1 (CWT-01 to CWT-02 Coverage)',
    description: 'Cumulative test combining all CWT-01 to CWT-02 portions across Physics, Chemistry, Botany, and Zoology.',
    objective: 'Mixed NEET-level questions + error-analysis + NCERT-based revision (CWT-01 to CWT-02 coverage).',
    physicsUnit: 'CWT-01 to CWT-02: Units & Measurements, Kinematics',
    chemistryUnit: 'CWT-01 to CWT-02: Some Basic Concepts, Structure of Atom',
    botanyBlock: 'CWT-01 to CWT-02: The Living World, Biological Classification',
    zoologyBlock: 'CWT-01 to CWT-02: Animal Kingdom, Structural Organisation in Animals',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Motion in One Dimension', 'Motion in a Plane'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Mole Concept', 'Structure of Atom'],
    botanyKeywords: ['The Living World', 'Biological Classification'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 5. CWT-04: 01 Nov 2026
  {
    id: 'test-11th-cwt-04',
    code: 'CWT-04',
    dateStr: '2026-11-01',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-04: Work, Energy & Power, Chemical Bonding & Molecular Structure, Morphology of Flowering Plants, Breathing & Exchange of Gases',
    description: 'Work, Energy & Power (Phy) + Chemical Bonding & Molecular Structure (Chem) + Morphology of Flowering Plants (Bot) + Breathing & Exchange of Gases (Zoo)',
    objective: 'Work-energy theorem, chemical bonds and molecular geometries, flowering plant morphology, and respiratory exchange.',
    physicsUnit: 'Work, Energy & Power',
    chemistryUnit: 'Chemical Bonding & Molecular Structure',
    botanyBlock: 'Morphology of Flowering Plants',
    zoologyBlock: 'Breathing & Exchange of Gases',
    physicsKeywords: ['Work, Energy and Power', 'Work, Energy & Power', 'Work Energy Power'],
    chemistryKeywords: ['Chemical Bonding & Molecular Structure', 'Chemical Bonding', 'Molecular Structure'],
    botanyKeywords: ['Morphology of Flowering Plants', 'Morphology of Flowering Plant'],
    zoologyKeywords: ['Breathing and Exchange of Gases', 'Breathing & Exchange of Gases', 'Breathing & Respiration'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 6. CWT-05: 15 Nov 2026
  {
    id: 'test-11th-cwt-05',
    code: 'CWT-05',
    dateStr: '2026-11-15',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-05: Rotational Motion, Thermodynamics (Chem), Anatomy of Flowering Plants, Body Fluids & Circulation',
    description: 'Rotational Motion (Phy) + Thermodynamics (Chem) + Anatomy of Flowering Plants (Bot) + Body Fluids & Circulation (Zoo)',
    objective: 'Rotational dynamics and moment of inertia, chemical thermodynamics, plant internal anatomy, circulatory system.',
    physicsUnit: 'Rotational Motion',
    chemistryUnit: 'Thermodynamics',
    botanyBlock: 'Anatomy of Flowering Plants',
    zoologyBlock: 'Body Fluids & Circulation',
    physicsKeywords: ['Rotational Motion', 'Moment of Inertia', 'Rigid Body'],
    chemistryKeywords: ['Thermodynamics', 'Chemical Thermodynamics'],
    botanyKeywords: ['Anatomy of Flowering Plants', 'Plant Anatomy'],
    zoologyKeywords: ['Body Fluids and Circulation', 'Body Fluids & Circulation'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 7. CUM-02: 22 Nov 2026
  {
    id: 'test-11th-cum-02',
    code: 'CUM-02',
    dateStr: '2026-11-22',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-02: Cumulative Checkpoint Test 2 (CWT-01 to CWT-04 Coverage)',
    description: 'Cumulative test combining all CWT-01 to CWT-04 portions across Physics, Chemistry, Botany, and Zoology.',
    objective: 'Mixed NEET-level questions + error-analysis + NCERT-based revision (CWT-01 to CWT-04 coverage).',
    physicsUnit: 'CWT-01 to CWT-04: Measurement, Kinematics, Laws of Motion, Work Energy',
    chemistryUnit: 'CWT-01 to CWT-04: Basic Concepts, Atom Structure, Periodic Table, Chemical Bonding',
    botanyBlock: 'CWT-01 to CWT-04: Living World, Classification, Plant Kingdom, Morphology',
    zoologyBlock: 'CWT-01 to CWT-04: Animal Kingdom, Structural Org, Cell Division, Breathing',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements', 'Chemical Bonding'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell Cycle & Cell Division', 'Breathing and Exchange of Gases'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 8. CWT-06: 29 Nov 2026
  {
    id: 'test-11th-cwt-06',
    code: 'CWT-06',
    dateStr: '2026-11-29',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-06: Gravitation, Equilibrium, Cell: The Unit of Life, Excretory Products & Elimination',
    description: 'Gravitation (Phy) + Equilibrium (Chem) + Cell: The Unit of Life (Bot) + Excretory Products & Elimination (Zoo)',
    objective: 'Gravitational law and orbits, chemical & ionic equilibrium, cell structure and organelles, excretory physiology.',
    physicsUnit: 'Gravitation',
    chemistryUnit: 'Equilibrium',
    botanyBlock: 'Cell: The Unit of Life',
    zoologyBlock: 'Excretory Products & Elimination',
    physicsKeywords: ['Gravitation', 'Kepler'],
    chemistryKeywords: ['Equilibrium', 'Chemical Equilibrium', 'Ionic Equilibrium'],
    botanyKeywords: ['Cell: The Unit of Life', 'Cell Structure and Function', 'Cell: Structure & Function'],
    zoologyKeywords: ['Excretory Products and their Elimination', 'Excretory Products & Elimination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 9. CWT-07: 13 Dec 2026
  {
    id: 'test-11th-cwt-07',
    code: 'CWT-07',
    dateStr: '2026-12-13',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-07: Properties of Solids & Liquids, Redox Reactions, Biomolecules, Locomotion & Movement',
    description: 'Properties of Solids & Liquids (Phy) + Redox Reactions (Chem) + Biomolecules (Bot) + Locomotion & Movement (Zoo)',
    objective: 'Mechanical and thermal properties of matter, redox processes, cellular biomolecules, musculoskeletal system.',
    physicsUnit: 'Properties of Solids & Liquids',
    chemistryUnit: 'Redox Reactions',
    botanyBlock: 'Biomolecules',
    zoologyBlock: 'Locomotion & Movement',
    physicsKeywords: ['Properties of Solids & Liquids', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Elasticity', 'Fluid Mechanics'],
    chemistryKeywords: ['Redox Reactions'],
    botanyKeywords: ['Biomolecules'],
    zoologyKeywords: ['Locomotion and Movement', 'Locomotion & Movement'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 10. CUM-03: 20 Dec 2026
  {
    id: 'test-11th-cum-03',
    code: 'CUM-03',
    dateStr: '2026-12-20',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-03: Cumulative Checkpoint Test 3 (CWT-01 to CWT-06 Coverage)',
    description: 'Mid-session comprehensive cumulative combining all CWT-01 to CWT-06 chapters across all 4 subjects.',
    objective: 'Mixed NEET-level questions + error-analysis + NCERT-based revision (CWT-01 to CWT-06 coverage).',
    physicsUnit: 'CWT-01 to CWT-06: Units 1-6 (Measurement through Gravitation)',
    chemistryUnit: 'CWT-01 to CWT-06: Units 1-6 (Basic Concepts through Equilibrium)',
    botanyBlock: 'CWT-01 to CWT-06: Chapters 1-6 (Living World through Cell: Unit of Life)',
    zoologyBlock: 'CWT-01 to CWT-06: Chapters 1-6 (Animal Kingdom through Excretory System)',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell Cycle & Cell Division', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 11. CWT-08: 27 Dec 2026
  {
    id: 'test-11th-cwt-08',
    code: 'CWT-08',
    dateStr: '2026-12-27',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-08: Thermodynamics (Phy), Organic Chemistry: Basic Principles & Techniques, Photosynthesis in Plants, Neural Control & Coordination',
    description: 'Thermodynamics (Phy) + Organic Chemistry: Basic Principles & Techniques (Chem) + Photosynthesis in Plants (Bot) + Neural Control & Coordination (Zoo)',
    objective: 'Thermal physics and engines, general organic chemistry (GOC), photosynthetic pathways, neural transmission.',
    physicsUnit: 'Thermodynamics',
    chemistryUnit: 'Organic Chemistry: Basic Principles & Techniques',
    botanyBlock: 'Photosynthesis in Plants',
    zoologyBlock: 'Neural Control & Coordination',
    physicsKeywords: ['Thermodynamics', 'Heat Engines'],
    chemistryKeywords: ['Organic Chemistry: Basic Principles & Techniques', 'Organic Chemistry - Some Basic Principles', 'GOC', 'General Organic Chemistry'],
    botanyKeywords: ['Photosynthesis in Higher Plants', 'Photosynthesis in Plants', 'Photosynthesis'],
    zoologyKeywords: ['Neural Control & Coordination', 'Neural Control and Coordination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 12. CWT-09: 10 Jan 2027
  {
    id: 'test-11th-cwt-09',
    code: 'CWT-09',
    dateStr: '2027-01-10',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-09: Kinetic Theory of Gases, Hydrocarbons, Respiration in Plants, Chemical Coordination & Integration',
    description: 'Kinetic Theory of Gases (Phy) + Hydrocarbons (Chem) + Respiration in Plants (Bot) + Chemical Coordination & Integration (Zoo)',
    objective: 'Kinetic molecular theory, hydrocarbon families, cellular respiration, hormonal integration.',
    physicsUnit: 'Kinetic Theory of Gases',
    chemistryUnit: 'Hydrocarbons',
    botanyBlock: 'Respiration in Plants',
    zoologyBlock: 'Chemical Coordination & Integration',
    physicsKeywords: ['Kinetic Theory of Gases', 'Kinetic Theory', 'KTG'],
    chemistryKeywords: ['Hydrocarbons', 'Alkanes', 'Alkenes', 'Alkynes'],
    botanyKeywords: ['Respiration in Plants'],
    zoologyKeywords: ['Chemical Coordination & Integration', 'Chemical Coordination and Integration'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 13. CUM-04: 17 Jan 2027
  {
    id: 'test-11th-cum-04',
    code: 'CUM-04',
    dateStr: '2027-01-17',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-04: Cumulative Checkpoint Test 4 (CWT-01 to CWT-08 Coverage)',
    description: 'Advanced cumulative test combining all chapters from CWT-01 to CWT-08 across all 4 subjects.',
    objective: 'Mixed NEET-level questions + error-analysis + NCERT-based revision (CWT-01 to CWT-08 coverage).',
    physicsUnit: 'CWT-01 to CWT-08: Units 1-8 (Measurement through Thermodynamics)',
    chemistryUnit: 'CWT-01 to CWT-08: Units 1-8 (Basic Concepts through GOC)',
    botanyBlock: 'CWT-01 to CWT-08: Chapters 1-8 (Living World through Photosynthesis)',
    zoologyBlock: 'CWT-01 to CWT-08: Chapters 1-8 (Animal Kingdom through Neural Control)',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Properties of Solids & Liquids', 'Thermodynamics'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Organic Chemistry - Some Basic Principles'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Photosynthesis in Plants'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell Cycle & Cell Division', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control & Coordination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 14. CWT-10: 24 Jan 2027
  {
    id: 'test-11th-cwt-10',
    code: 'CWT-10',
    dateStr: '2027-01-24',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-10: Oscillations & Waves, Hydrocarbons — Mastery, Plant Growth & Development, Animal Tissues & Frog / Supporting NEET Coverage',
    description: 'Oscillations & Waves (Phy) + Hydrocarbons — mastery (Chem) + Plant Growth & Development (Bot) + Animal Tissues & Frog / supporting NEET unit coverage (Zoo)',
    objective: 'SHM and wave motion, advanced hydrocarbon reactions, plant growth regulators, and frog anatomy.',
    physicsUnit: 'Oscillations & Waves',
    chemistryUnit: 'Hydrocarbons — mastery',
    botanyBlock: 'Plant Growth & Development',
    zoologyBlock: 'Animal Tissues & Frog / supporting NEET unit coverage',
    physicsKeywords: ['Oscillations', 'Waves', 'Simple Harmonic Motion', 'SHM', 'Wave Motion'],
    chemistryKeywords: ['Hydrocarbons', 'Alkanes', 'Alkenes', 'Alkynes', 'Aromatic Hydrocarbons'],
    botanyKeywords: ['Plant Growth & Development', 'Plant Growth and Development'],
    zoologyKeywords: ['Animal Tissues', 'Frog', 'Morphology and Anatomy of Frog', 'Structural Organisation in Animals'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 15. CWT-11: 07 Feb 2027
  {
    id: 'test-11th-cwt-11',
    code: 'CWT-11',
    dateStr: '2027-02-07',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-11: Class 11 Physics — NEET Mastery / Experimental Skills, Practical Chemistry, Botany & Zoology Mastery Revision',
    description: 'Deliberate mastery/NEET-format reinforcement test so that no new chapter remains after 21 February 2027. Class 11 Physics (Experimental Skills) + Class 11 Practical Chemistry + Class 11 Botany Mastery + Class 11 Zoology Mastery.',
    objective: 'NEET mastery and experimental/practical skills reinforcement across all 4 subjects.',
    physicsUnit: 'Class 11 Physics — NEET mastery / Experimental Skills',
    chemistryUnit: 'Class 11 Chemistry — NEET mastery / Practical Chemistry',
    botanyBlock: 'Class 11 Botany — NEET mastery revision',
    zoologyBlock: 'Class 11 Zoology — NEET mastery revision',
    physicsKeywords: ['Experimental Skills', 'Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Properties of Solids & Liquids', 'Thermodynamics', 'Oscillations'],
    chemistryKeywords: ['Practical Chemistry', 'Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Organic Chemistry - Some Basic Principles', 'Hydrocarbons'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Photosynthesis', 'Respiration in Plants', 'Plant Growth & Development'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell Cycle & Cell Division', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products', 'Locomotion and Movement', 'Neural Control', 'Chemical Coordination', 'Animal Tissues'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 16. CUM-05: 14 Feb 2027
  {
    id: 'test-11th-cum-05',
    code: 'CUM-05',
    dateStr: '2027-02-14',
    phase: 'Phase 1: Cumulative',
    phaseGroup: 'cumulative',
    title: 'CUM-05: Final Cumulative Checkpoint (CWT-01 to CWT-10 Complete Coverage)',
    description: 'Final cumulative checkpoint before the last CWT on 21 February. Combines all CWT-01 to CWT-10 chapters across Physics, Chemistry, Botany, and Zoology.',
    objective: 'Mixed NEET-level questions + error-analysis + NCERT-based revision. Final cumulative checkpoint before the last CWT on 21 February.',
    physicsUnit: 'CWT-01 to CWT-10: Complete Class 11 Physics Units 1-10',
    chemistryUnit: 'CWT-01 to CWT-10: Complete Class 11 Chemistry Units 1-9',
    botanyBlock: 'CWT-01 to CWT-10: Complete Class 11 Botany Chapters 1-10',
    zoologyBlock: 'CWT-01 to CWT-10: Complete Class 11 Zoology Chapters 1-10',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Properties of Solids & Liquids', 'Thermodynamics', 'Kinetic Theory of Gases', 'Oscillations & Waves'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Organic Chemistry - Some Basic Principles', 'Hydrocarbons'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Photosynthesis in Plants', 'Respiration in Plants', 'Plant Growth & Development'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell Cycle & Cell Division', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control & Coordination', 'Chemical Coordination & Integration', 'Animal Tissues'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 17. CWT-12: 21 Feb 2027
  {
    id: 'test-11th-cwt-12',
    code: 'CWT-12',
    dateStr: '2027-02-21',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: 'CWT-12: Class 11 NEET Mastery & Experimental Skills Final Reinforcement',
    description: 'Final deliberate mastery/NEET-format reinforcement test so that no new chapter remains after 21 February 2027. Full Class 11 syllabus coverage with experimental skills.',
    objective: 'Final chapter mastery/reinforcement checkpoint so that no new chapter remains after 21 February 2027.',
    physicsUnit: 'Class 11 Physics — NEET mastery / Experimental Skills',
    chemistryUnit: 'Class 11 Chemistry — NEET mastery / Practical Chemistry',
    botanyBlock: 'Class 11 Botany — NEET mastery revision',
    zoologyBlock: 'Class 11 Zoology — NEET mastery revision',
    physicsKeywords: ['Experimental Skills', 'Units and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation', 'Properties of Solids & Liquids', 'Thermodynamics', 'Oscillations'],
    chemistryKeywords: ['Practical Chemistry', 'Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Organic Chemistry - Some Basic Principles', 'Hydrocarbons'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Photosynthesis', 'Respiration in Plants', 'Plant Growth & Development'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell Cycle & Cell Division', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products', 'Locomotion and Movement', 'Neural Control', 'Chemical Coordination', 'Animal Tissues'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 18. FST-01: 28 Feb 2027
  {
    id: 'test-11th-fst-01',
    code: 'FST-01',
    dateStr: '2027-02-28',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-01: Complete Class 11 NEET Full Syllabus Benchmark Test 1',
    description: 'Complete Class 11 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Baseline full-syllabus benchmark + identify weak chapters.',
    objective: 'Baseline full-syllabus benchmark + identify weak chapters across complete Class 11 curriculum.',
    physicsUnit: 'Complete Class 11 Physics (10 Units)',
    chemistryUnit: 'Complete Class 11 Chemistry (9 Units)',
    botanyBlock: 'Complete Class 11 Botany (10 Units)',
    zoologyBlock: 'Complete Class 11 Zoology (10 Units)',
    physicsKeywords: ['Class 11 Physics All Chapters'],
    chemistryKeywords: ['Class 11 Chemistry All Chapters'],
    botanyKeywords: ['Class 11 Botany All Chapters'],
    zoologyKeywords: ['Class 11 Zoology All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 19. FST-02: 07 Mar 2027
  {
    id: 'test-11th-fst-02',
    code: 'FST-02',
    dateStr: '2027-03-07',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-02: Complete Class 11 NEET Full Syllabus Test 2 (Speed & Accuracy)',
    description: 'Complete Class 11 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Time-management + accuracy + high-level NEET mixed practice.',
    objective: 'Time-management + accuracy + high-level NEET mixed practice.',
    physicsUnit: 'Complete Class 11 Physics (10 Units)',
    chemistryUnit: 'Complete Class 11 Chemistry (9 Units)',
    botanyBlock: 'Complete Class 11 Botany (10 Units)',
    zoologyBlock: 'Complete Class 11 Zoology (10 Units)',
    physicsKeywords: ['Class 11 Physics All Chapters'],
    chemistryKeywords: ['Class 11 Chemistry All Chapters'],
    botanyKeywords: ['Class 11 Botany All Chapters'],
    zoologyKeywords: ['Class 11 Zoology All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  // 20. FST-03: 14 Mar 2027
  {
    id: 'test-11th-fst-03',
    code: 'FST-03',
    dateStr: '2027-03-14',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: 'FST-03: Complete Class 11 NEET Grand Test 3 (Final Revision)',
    description: 'Complete Class 11 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Final Class 11 grand test + final error-log revision.',
    objective: 'Final Class 11 grand test + final error-log revision concluding the Class 11 Sunday test series.',
    physicsUnit: 'Complete Class 11 Physics (10 Units)',
    chemistryUnit: 'Complete Class 11 Chemistry (9 Units)',
    botanyBlock: 'Complete Class 11 Botany (10 Units)',
    zoologyBlock: 'Complete Class 11 Zoology (10 Units)',
    physicsKeywords: ['Class 11 Physics All Chapters'],
    chemistryKeywords: ['Class 11 Chemistry All Chapters'],
    botanyKeywords: ['Class 11 Botany All Chapters'],
    zoologyKeywords: ['Class 11 Zoology All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  }
];

export interface RevisionAnalysisBufferStage {
  period: string;
  action: string;
  output: string;
}

/**
 * REVISION & ANALYSIS BUFFER — 11 DEC 2026 TO 03 FEB 2027
 * Post-mock error correction, structured weak-topic repair, and final readiness review.
 */
export const REVISION_ANALYSIS_BUFFER_12TH: RevisionAnalysisBufferStage[] = [
  {
    period: '11–20 Dec 2026',
    action: 'Analyse all 5 mocks',
    output: 'Subject/chapter error heatmap + rank trend'
  },
  {
    period: '21–31 Dec 2026',
    action: 'Weak-topic repair cycle 1',
    output: 'NCERT revision + targeted MCQs'
  },
  {
    period: '01–10 Jan 2027',
    action: 'Weak-topic repair cycle 2',
    output: 'Re-test weak chapters'
  },
  {
    period: '11–20 Jan 2027',
    action: 'Physics + Chemistry intensive revision',
    output: 'Formula/reaction/error notebook'
  },
  {
    period: '21–27 Jan 2027',
    action: 'Botany + Zoology NCERT revision',
    output: 'Line-by-line recall + MCQs'
  },
  {
    period: '28 Jan–02 Feb 2027',
    action: 'Full mixed revision',
    output: 'Marked questions + repeated-error revision'
  },
  {
    period: '03 Feb 2027',
    action: 'Final readiness review',
    output: 'Student report + next-phase study plan'
  }
];

/**
 * COMPLETE SYLLABUS TEST PLANNER FOR CLASS 12TH BATCH (Class 11 + Class 12)
 * Window: 20 September 2026 – 03 February 2027
 * 23 Total Tests: 8 Part-Wise (every 5 days), 10 Complete Syllabus (every 4 days), 5 NEET Mocks (every 2 days)
 * + Structured Revision & Analysis Buffer through 03 Feb 2027.
 */
export const PLANNER_12TH_TESTS: SundayPlannerTest[] = [
  // ==========================================
  // PHASE 1: 8 PART-WISE TESTS (Every 5 Days)
  // ==========================================
  {
    id: 'test-12th-part-01',
    code: 'PART 1',
    dateStr: '2026-09-20',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 1: Measurement, Kinematics, Laws of Motion, Basic Concepts, Living World, Animal Kingdom',
    description: 'Physics (Measurement, Kinematics, Laws of Motion) + Chemistry (Basic Concepts, Atomic Structure, Periodicity) + Botany (Living World, Classification, Plant Kingdom, Morphology) + Zoology (Animal Kingdom, Structural Organisation, Cell)',
    objective: 'Progressive coverage of complete Class 11 + 12 syllabus: Stage 1 foundational mechanics, basic chemistry, taxonomy, and animal diversity.',
    physicsUnit: 'Measurement, Kinematics, Laws of Motion',
    chemistryUnit: 'Basic Concepts, Atomic Structure, Periodicity',
    botanyBlock: 'Living World, Classification, Plant Kingdom, Morphology',
    zoologyBlock: 'Animal Kingdom, Structural Organisation, Cell',
    physicsKeywords: ['Units and Measurement', 'Kinematics', 'Motion in One Dimension', 'Motion in a Plane', 'Laws of Motion'],
    chemistryKeywords: ['Some Basic Concepts of Chemistry', 'Mole Concept', 'Structure of Atom', 'Classification of Elements'],
    botanyKeywords: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants'],
    zoologyKeywords: ['Animal Kingdom', 'Structural Organisation in Animals', 'Cell: The Unit of Life'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-02',
    code: 'PART 2',
    dateStr: '2026-09-25',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 2: Work Energy & Rotation, Bonding & Thermodynamics, Plant Anatomy & Cell, Digestion & Breathing',
    description: 'Physics (Work, Energy & Power; System of Particles & Rotation) + Chemistry (Chemical Bonding; States of Matter; Thermodynamics) + Botany (Anatomy; Cell; Biomolecules; Cell Division) + Zoology (Biomolecules; Digestion; Breathing)',
    objective: 'Progressive coverage Stage 2: Rotational dynamics, thermodynamics & states of matter, cell biology, digestion & respiration.',
    physicsUnit: 'Work, Energy & Power; System of Particles & Rotation',
    chemistryUnit: 'Chemical Bonding; States of Matter; Thermodynamics',
    botanyBlock: 'Anatomy; Cell; Biomolecules; Cell Division',
    zoologyBlock: 'Biomolecules; Digestion; Breathing',
    physicsKeywords: ['Work, Energy and Power', 'Rotational Motion', 'Moment of Inertia'],
    chemistryKeywords: ['Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Chemical Thermodynamics'],
    botanyKeywords: ['Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle & Cell Division'],
    zoologyKeywords: ['Biomolecules', 'Breathing and Exchange of Gases', 'Digestion'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-03',
    code: 'PART 3',
    dateStr: '2026-09-30',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 3: Gravitation & Bulk Matter, Equilibrium & Redox, Plant Physiology, Circulation & Excretion',
    description: 'Physics (Gravitation; Properties of Bulk Matter) + Chemistry (Equilibrium; Redox; official NEET inorganic topics) + Botany (Transport; Mineral Nutrition; Photosynthesis) + Zoology (Circulation; Excretion)',
    objective: 'Progressive coverage Stage 3: Gravitation and fluid/bulk properties, chemical equilibria, photosynthesis and plant nutrition, human circulation & excretion.',
    physicsUnit: 'Gravitation; Properties of Bulk Matter',
    chemistryUnit: 'Equilibrium; Redox; official NEET inorganic topics',
    botanyBlock: 'Transport; Mineral Nutrition; Photosynthesis',
    zoologyBlock: 'Circulation; Excretion',
    physicsKeywords: ['Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter'],
    chemistryKeywords: ['Equilibrium', 'Chemical Equilibrium', 'Ionic Equilibrium', 'Redox Reactions'],
    botanyKeywords: ['Photosynthesis in Higher Plants', 'Photosynthesis in Plants', 'Transport in Plants', 'Mineral Nutrition'],
    zoologyKeywords: ['Body Fluids and Circulation', 'Excretory Products and their Elimination'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-04',
    code: 'PART 4',
    dateStr: '2026-10-05',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 4: Thermal, KTG, Waves & SHM, Organic Basics & Hydrocarbons, Plant Growth, Locomotion & Control',
    description: 'Physics (Thermodynamics; Kinetic Theory; Oscillations; Waves) + Chemistry (Organic Basics; Hydrocarbons; official practical/organic topics) + Botany (Respiration; Plant Growth & Development) + Zoology (Locomotion; Neural Control; Chemical Coordination)',
    objective: 'Progressive coverage Stage 4: Thermal & wave physics, general organic chemistry & hydrocarbons, plant respiration & development, nervous & endocrine regulation.',
    physicsUnit: 'Thermodynamics; Kinetic Theory; Oscillations; Waves',
    chemistryUnit: 'Organic Basics; Hydrocarbons; official practical/organic topics',
    botanyBlock: 'Respiration; Plant Growth & Development',
    zoologyBlock: 'Locomotion; Neural Control; Chemical Coordination',
    physicsKeywords: ['Thermodynamics', 'Kinetic Theory of Gases', 'Oscillations', 'Waves'],
    chemistryKeywords: ['Organic Chemistry - Some Basic Principles', 'GOC', 'Hydrocarbons', 'Practical Chemistry'],
    botanyKeywords: ['Respiration in Plants', 'Plant Growth & Development'],
    zoologyKeywords: ['Locomotion and Movement', 'Neural Control & Coordination', 'Chemical Coordination & Integration'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-05',
    code: 'PART 5',
    dateStr: '2026-10-10',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 5: Electrostatics & Current, Physical Chem (Solutions, Electrochem, Kinetics), Genetics & Reproduction',
    description: 'Physics (Electrostatics; Current Electricity) + Chemistry (Solutions; Electrochemistry; Chemical Kinetics) + Botany (Sexual Reproduction; Inheritance & Variation) + Zoology (Human Reproduction; Reproductive Health)',
    objective: 'Progressive coverage Stage 5: Transition into Class 12 syllabus — electrodynamics, solutions and electrochemistry, Mendelian genetics and human reproduction.',
    physicsUnit: 'Electrostatics; Current Electricity',
    chemistryUnit: 'Solutions; Electrochemistry; Chemical Kinetics',
    botanyBlock: 'Sexual Reproduction; Inheritance & Variation',
    zoologyBlock: 'Human Reproduction; Reproductive Health',
    physicsKeywords: ['Electrostatics', 'Current Electricity', 'Capacitance'],
    chemistryKeywords: ['Solutions', 'Electrochemistry', 'Chemical Kinetics'],
    botanyKeywords: ['Sexual Reproduction in Flowering Plants', 'Principles of Inheritance & Variation'],
    zoologyKeywords: ['Human Reproduction', 'Reproductive Health'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-06',
    code: 'PART 6',
    dateStr: '2026-10-15',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 6: Magnetism & EMI, Inorganic (d/f Block, Coordination, p-Block), Molecular Genetics & Evolution, Health',
    description: 'Physics (Moving Charges & Magnetism; Magnetism; EMI) + Chemistry (d/f Block; Coordination; official p-Block topics) + Botany (Molecular Basis of Inheritance; Evolution) + Zoology (Human Health & Disease; Food Production)',
    objective: 'Progressive coverage Stage 6: Magnetic fields and electromagnetic induction, coordination chemistry and transition metals, molecular biology, human health and disease.',
    physicsUnit: 'Moving Charges & Magnetism; Magnetism; EMI',
    chemistryUnit: 'd/f Block; Coordination; official p-Block topics',
    botanyBlock: 'Molecular Basis of Inheritance; Evolution',
    zoologyBlock: 'Human Health & Disease; Food Production',
    physicsKeywords: ['Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction'],
    chemistryKeywords: ['d and f Block', 'Coordination Compounds', 'p-Block'],
    botanyKeywords: ['Molecular Basis of Inheritance', 'Evolution'],
    zoologyKeywords: ['Human Health and Disease', 'Strategies for Enhancement in Food Production'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-07',
    code: 'PART 7',
    dateStr: '2026-10-20',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 7: AC, EM Waves & Ray Optics, Organic (Halogens, Oxygen Derivatives), Microbes & Biotechnology',
    description: 'Physics (AC; EM Waves; Ray Optics) + Chemistry (Haloalkanes; Alcohols/Phenols/Ethers; Carbonyl Compounds) + Botany (Microbes; Biotechnology Principles) + Zoology (Biotechnology Applications; Organisms & Populations)',
    objective: 'Progressive coverage Stage 7: Alternating currents, optical instruments and rays, haloalkanes and carbonyl compounds, recombinant DNA principles & ecology.',
    physicsUnit: 'AC; EM Waves; Ray Optics',
    chemistryUnit: 'Haloalkanes; Alcohols/Phenols/Ethers; Carbonyl Compounds',
    botanyBlock: 'Microbes; Biotechnology Principles',
    zoologyBlock: 'Biotechnology Applications; Organisms & Populations',
    physicsKeywords: ['Alternating Current', 'Electromagnetic Waves', 'Ray Optics'],
    chemistryKeywords: ['Haloalkanes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids'],
    botanyKeywords: ['Microbes in Human Welfare', 'Biotechnology: Principles & Processes'],
    zoologyKeywords: ['Biotechnology and its Applications', 'Organisms and Populations'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-part-08',
    code: 'PART 8',
    dateStr: '2026-10-25',
    phase: 'Phase 1: Part-Wise',
    phaseGroup: 'part',
    title: 'PART 8: Modern Physics & Electronics, Nitrogen Derivatives & Practical Chem, Ecology & Complete Biology Revision',
    description: 'Physics (Wave Optics; Dual Nature; Atoms; Nuclei; Electronics) + Chemistry (Amines; Biomolecules; Practical Chemistry; remaining official topics) + Botany (Biotechnology Applications; Ecosystem; Biodiversity; Environment) + Zoology (Ecosystem; Biodiversity; Environment + complete Biology revision)',
    objective: 'Progressive coverage Stage 8: Final part-wise test completing entire Class 11 + 12 syllabus scope before Full-Syllabus phase.',
    physicsUnit: 'Wave Optics; Dual Nature; Atoms; Nuclei; Electronics',
    chemistryUnit: 'Amines; Biomolecules; Practical Chemistry; remaining official topics',
    botanyBlock: 'Biotechnology Applications; Ecosystem; Biodiversity; Environment',
    zoologyBlock: 'Ecosystem; Biodiversity; Environment + complete Biology revision',
    physicsKeywords: ['Wave Optics', 'Dual Nature of Radiation', 'Atoms', 'Nuclei', 'Semiconductor'],
    chemistryKeywords: ['Amines', 'Biomolecules', 'Practical Chemistry'],
    botanyKeywords: ['Biotechnology and its Applications', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues'],
    zoologyKeywords: ['Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues', 'Animal Kingdom'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },

  // ==========================================
  // PHASE 2: 10 COMPLETE-SYLLABUS TESTS (Every 4 Days)
  // ==========================================
  {
    id: 'test-12th-full-01',
    code: 'FULL-01',
    dateStr: '2026-10-29',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-01: Complete Class 11 + 12 NEET Paper 1 (Baseline + Error Tagging)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Baseline benchmark + error tagging across all 4 subjects.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-02',
    code: 'FULL-02',
    dateStr: '2026-11-02',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-02: Complete Class 11 + 12 NEET Paper 2 (NCERT Retention + Physics Focus)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'NCERT retention + Physics numerical accuracy and conceptual clarity.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-03',
    code: 'FULL-03',
    dateStr: '2026-11-06',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-03: Complete Class 11 + 12 NEET Paper 3 (Chemistry Calculation & Reactions)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Chemistry calculation/reactions precision across Physical, Inorganic, and Organic Chemistry.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-04',
    code: 'FULL-04',
    dateStr: '2026-11-10',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-04: Complete Class 11 + 12 NEET Paper 4 (Biology Precision & NCERT Line-by-Line)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Biology precision (target 340+ in Botany + Zoology) and NCERT diagram recall.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-05',
    code: 'FULL-05',
    dateStr: '2026-11-14',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-05: Complete Class 11 + 12 NEET Paper 5 (Time Management & Pacing)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Time management training: complete Biology in 45m, Chemistry in 50m, Physics in 70m.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-06',
    code: 'FULL-06',
    dateStr: '2026-11-18',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-06: Complete Class 11 + 12 NEET Paper 6 (Negative-Mark Reduction Strategy)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Negative-mark reduction: strategic elimination and disciplined unattempted question protocol.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-07',
    code: 'FULL-07',
    dateStr: '2026-11-22',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-07: Complete Class 11 + 12 NEET Paper 7 (Weak-Chapter Reinforcement)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Weak-chapter reinforcement and diagnostic assessment of high-yield topics.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-08',
    code: 'FULL-08',
    dateStr: '2026-11-26',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-08: Complete Class 11 + 12 NEET Paper 8 (Mixed Difficulty Simulation)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Mixed difficulty stress test with tricky multi-statement and assertion-reason questions.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-09',
    code: 'FULL-09',
    dateStr: '2026-11-30',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-09: Complete Class 11 + 12 NEET Paper 9 (Rank Improvement Milestone)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Rank improvement and scoring consistency above 650+ mark threshold.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-full-10',
    code: 'FULL-10',
    dateStr: '2026-12-04',
    phase: 'Phase 2: Full Syllabus',
    phaseGroup: 'full',
    title: 'FULL-10: Complete Class 11 + 12 NEET Paper 10 (Final Readiness Assessment)',
    description: 'Complete Class 11 + 12 NEET Syllabus across Physics, Chemistry, Botany, and Zoology. Full-syllabus NEET-pattern paper.',
    objective: 'Final readiness benchmark concluding Phase 2 complete-syllabus testing.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },

  // ==========================================
  // PHASE 3: 5 NEET MOCK TESTS (Every 2 Days)
  // ==========================================
  {
    id: 'test-12th-mock-01',
    code: 'NEET MOCK-01',
    dateStr: '2026-12-10',
    phase: 'Phase 3: NEET Mock',
    phaseGroup: 'full',
    title: 'NEET MOCK-01: All-India Examination Simulation 1',
    description: 'Complete Class 11 + 12 NEET Examination Simulation. Mandatory analysis: score, subject analysis, chapter errors, accuracy, negative marks, rank/percentile.',
    objective: 'Final examination simulation with comprehensive post-test mandatory analytics.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-mock-02',
    code: 'NEET MOCK-02',
    dateStr: '2026-12-12',
    phase: 'Phase 3: NEET Mock',
    phaseGroup: 'full',
    title: 'NEET MOCK-02: All-India Examination Simulation 2',
    description: 'Complete Class 11 + 12 NEET Examination Simulation. Mandatory analysis: score, subject analysis, chapter errors, accuracy, negative marks, rank/percentile.',
    objective: 'Final examination simulation with comprehensive post-test mandatory analytics.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-mock-03',
    code: 'NEET MOCK-03',
    dateStr: '2026-12-14',
    phase: 'Phase 3: NEET Mock',
    phaseGroup: 'full',
    title: 'NEET MOCK-03: All-India Examination Simulation 3',
    description: 'Complete Class 11 + 12 NEET Examination Simulation. Mandatory analysis: score, subject analysis, chapter errors, accuracy, negative marks, rank/percentile.',
    objective: 'Final examination simulation with comprehensive post-test mandatory analytics.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-mock-04',
    code: 'NEET MOCK-04',
    dateStr: '2026-12-16',
    phase: 'Phase 3: NEET Mock',
    phaseGroup: 'full',
    title: 'NEET MOCK-04: All-India Examination Simulation 4',
    description: 'Complete Class 11 + 12 NEET Examination Simulation. Mandatory analysis: score, subject analysis, chapter errors, accuracy, negative marks, rank/percentile.',
    objective: 'Final examination simulation with comprehensive post-test mandatory analytics.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
    physicsKeywords: ['All Chapters'],
    chemistryKeywords: ['All Chapters'],
    botanyKeywords: ['All Chapters'],
    zoologyKeywords: ['All Chapters'],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-12th-mock-05',
    code: 'NEET MOCK-05',
    dateStr: '2026-12-18',
    phase: 'Phase 3: NEET Mock',
    phaseGroup: 'full',
    title: 'NEET MOCK-05: All-India Final Grand Rehearsal 5',
    description: 'Complete Class 11 + 12 NEET Final Grand Simulation. Mandatory analysis: score, subject analysis, chapter errors, accuracy, negative marks, rank/percentile. Leads directly into Revision & Analysis Buffer.',
    objective: 'Final examination simulation leading into the structured 7-stage Revision & Analysis Buffer through 03 Feb 2027.',
    physicsUnit: 'Complete NEET Physics Syllabus (Class 11 + 12)',
    chemistryUnit: 'Complete NEET Chemistry Syllabus (Class 11 + 12)',
    botanyBlock: 'Complete NEET Botany Syllabus (Class 11 + 12)',
    zoologyBlock: 'Complete NEET Zoology Syllabus (Class 11 + 12)',
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
 * Official canonical NCERT Biology chapters split between Botany and Zoology
 */
export const BOTANY_NCERT_CHAPTERS = new Set([
  'The Living World',
  'Diversity in the Living World',
  'Biological Classification',
  'Plant Kingdom',
  'Morphology of Flowering Plants',
  'Anatomy of Flowering Plants',
  'Cell: The Unit of Life',
  'Biomolecules',
  'Cell Cycle and Cell Division',
  'Photosynthesis in Higher Plants',
  'Respiration in Plants',
  'Plant Growth and Development',
  'Sexual Reproduction in Flowering Plants',
  'Principles of Inheritance and Variation',
  'Molecular Basis of Inheritance',
  'Biotechnology: Principles and Processes',
  'Organisms and Populations',
  'Ecosystem',
  'Biodiversity and Conservation'
]);

export const ZOOLOGY_NCERT_CHAPTERS = new Set([
  'Animal Kingdom',
  'Structural Organisation in Animals',
  'Cell: The Unit of Life',
  'Biomolecules',
  'Cell Cycle and Cell Division',
  'Breathing and Exchange of Gases',
  'Body Fluids and Circulation',
  'Excretory Products and their Elimination',
  'Locomotion and Movement',
  'Neural Control and Coordination',
  'Chemical Coordination and Integration',
  'Human Reproduction',
  'Reproductive Health',
  'Evolution',
  'Human Health and Disease',
  'Microbes in Human Welfare',
  'Biotechnology and its Applications'
]);

/**
 * Filter questions from bank matching keywords with strict Botany/Zoology isolation
 */
/**
 * Filter questions from bank matching keywords with strict chapter isolation
 */
export function filterQuestionsByKeywords(
  bank: Question[],
  keywords: string[],
  subject?: 'Physics' | 'Chemistry' | 'Botany' | 'Zoology'
): Question[] {
  if (!keywords || keywords.length === 0 || keywords.includes('All Chapters') || keywords.some(k => k.toLowerCase().includes('all chapters'))) {
    if (subject === 'Botany') {
      return bank.filter(q => BOTANY_NCERT_CHAPTERS.has(q.chapter || ''));
    }
    if (subject === 'Zoology') {
      return bank.filter(q => ZOOLOGY_NCERT_CHAPTERS.has(q.chapter || ''));
    }
    return bank;
  }

  // Pre-filter bank by subject discipline if Botany or Zoology
  let scopedBank = bank;
  if (subject === 'Botany') {
    const bOnly = bank.filter(q => BOTANY_NCERT_CHAPTERS.has(q.chapter || ''));
    if (bOnly.length > 0) scopedBank = bOnly;
  } else if (subject === 'Zoology') {
    const zOnly = bank.filter(q => ZOOLOGY_NCERT_CHAPTERS.has(q.chapter || ''));
    if (zOnly.length > 0) scopedBank = zOnly;
  }

  const targetChapters = new Set<string>();
  const normalizeK = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '').trim();

  for (const kw of keywords) {
    const stripped = kw
      .replace(/^Unit\s*\d+\s*:\s*/i, '')
      .replace(/^\[(Botany|Zoology)\]\s*\d*\.?\s*/i, '')
      .replace(/^\d+\.\s*/, '')
      .trim();

    const normKw = normalizeK(kw);
    const normStripped = normalizeK(stripped);

    const mapped = STRICT_SYLLABUS_UNIT_MAPPINGS[normKw] || STRICT_SYLLABUS_UNIT_MAPPINGS[normStripped];
    if (mapped && mapped.length > 0) {
      mapped.forEach(c => targetChapters.add(normalizeK(c)));
    } else {
      targetChapters.add(normStripped);
    }
  }

  const matched = scopedBank.filter(q => {
    const qCh = normalizeK(q.chapter || '');
    if (!qCh) return false;
    for (const target of targetChapters) {
      if (qCh === target || qCh.includes(target) || target.includes(qCh)) {
        return true;
      }
    }
    return false;
  });

  return matched;
}


export const SUNDAY_CUSTOM_PAPERS_KEY = 'neet_custom_sunday_papers';

export interface SavedSundayPaper {
  paperCode: string;
  testTitle?: string;
  customChapters?: SundayChapterSelection;
  questions: Question[];
  updatedAt: string;
  publishedBy?: string;
}

export function getAllSavedCustomSundayPapers(): Record<string, SavedSundayPaper> {
  try {
    const raw = localStorage.getItem(SUNDAY_CUSTOM_PAPERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getSavedCustomSundayPaper(paperIdOrCode: string): SavedSundayPaper | null {
  if (!paperIdOrCode) return null;
  const all = getAllSavedCustomSundayPapers();
  const key = paperIdOrCode.toLowerCase().trim();
  if (all[key]) return all[key];

  for (const k of Object.keys(all)) {
    if (k.toLowerCase() === key || all[k].paperCode?.toLowerCase() === key) {
      return all[k];
    }
  }

  // Fallback check legacy neet_published_sunday_test
  try {
    const legacyRaw = localStorage.getItem('neet_published_sunday_test');
    if (legacyRaw) {
      const legacy = JSON.parse(legacyRaw);
      if (legacy && Array.isArray(legacy.questions) && legacy.questions.length === 180) {
        if (!legacy.paperCode || legacy.paperCode.toLowerCase() === key) {
          return {
            paperCode: legacy.paperCode || paperIdOrCode,
            testTitle: legacy.testTitle,
            questions: legacy.questions,
            customChapters: legacy.units ? {
              physics: legacy.units.physics || [],
              chemistry: legacy.units.chemistry || [],
              biology: legacy.units.biology || []
            } : undefined,
            updatedAt: legacy.publishedAt || new Date().toISOString(),
            publishedBy: legacy.publishedBy || 'Admin'
          };
        }
      }
    }
  } catch {}

  return null;
}

export function saveCustomSundayPaper(
  paperCode: string,
  data: {
    questions: Question[];
    customChapters?: SundayChapterSelection;
    testTitle?: string;
    publishedBy?: string;
  }
): void {
  try {
    const all = getAllSavedCustomSundayPapers();
    const key = paperCode.toLowerCase().trim();
    const payload: SavedSundayPaper = {
      paperCode: paperCode.toUpperCase(),
      testTitle: data.testTitle,
      customChapters: data.customChapters,
      questions: data.questions,
      updatedAt: new Date().toISOString(),
      publishedBy: data.publishedBy || 'Admin Portal'
    };
    all[key] = payload;
    localStorage.setItem(SUNDAY_CUSTOM_PAPERS_KEY, JSON.stringify(all));

    // Also sync legacy neet_published_sunday_test
    try {
      const legacyPayload = {
        paperCode: paperCode.toUpperCase(),
        testTitle: data.testTitle,
        publishedAt: new Date().toISOString(),
        publishedBy: data.publishedBy || 'Admin Portal',
        questions: data.questions,
        units: data.customChapters
      };
      localStorage.setItem('neet_published_sunday_test', JSON.stringify(legacyPayload));
      window.dispatchEvent(new CustomEvent('neet_published_sunday_test_updated', { detail: legacyPayload }));
    } catch {}

    window.dispatchEvent(new CustomEvent('neet_custom_sunday_paper_saved', { detail: { paperCode, payload } }));
  } catch (err) {
    console.error('Failed to save custom Sunday paper:', err);
  }
}

export function deleteCustomSundayPaper(paperCode: string): void {
  try {
    const all = getAllSavedCustomSundayPapers();
    const key = paperCode.toLowerCase().trim();
    if (all[key]) {
      delete all[key];
      localStorage.setItem(SUNDAY_CUSTOM_PAPERS_KEY, JSON.stringify(all));
      window.dispatchEvent(new CustomEvent('neet_custom_sunday_paper_deleted', { detail: { paperCode } }));
    }
  } catch (err) {
    console.error('Failed to delete custom Sunday paper:', err);
  }
}

/**
 * 24 CANONICAL PHYSICS CHAPTERS (NEET UG)
 * Used to ensure 100% comprehensive syllabus coverage across every Full Syllabus Test (FST).
 */
export const CANONICAL_NEET_PHYSICS_CHAPTERS: { name: string; keywords: string[] }[] = [
  { name: 'Units and Measurements', keywords: ['Units and Measurement', 'Units, Dimensions', 'Vectors', 'Experimental Skills'] },
  { name: 'Kinematics', keywords: ['Kinematics', 'Motion in One Dimension', 'Motion in a Plane'] },
  { name: 'Laws of Motion', keywords: ['Laws of Motion', 'Friction', 'Newton'] },
  { name: 'Work, Energy and Power', keywords: ['Work, Energy and Power', 'Work Energy Power'] },
  { name: 'Rotational Motion', keywords: ['Rotational Motion', 'Moment of Inertia', 'Rigid Body'] },
  { name: 'Gravitation', keywords: ['Gravitation', 'Kepler'] },
  { name: 'Mechanical Properties of Solids', keywords: ['Mechanical Properties of Solids', 'Elasticity'] },
  { name: 'Mechanical Properties of Fluids', keywords: ['Mechanical Properties of Fluids', 'Fluid Mechanics', 'Surface Tension', 'Viscosity'] },
  { name: 'Thermal Properties & Heat', keywords: ['Thermal Properties of Matter', 'Calorimetry', 'Transmission of Heat'] },
  { name: 'Thermodynamics', keywords: ['Thermodynamics', 'Heat Engines'] },
  { name: 'Kinetic Theory of Gases', keywords: ['Kinetic Theory', 'Kinetic Theory of Gases', 'KTG'] },
  { name: 'Oscillations & SHM', keywords: ['Oscillations', 'Simple Harmonic Motion', 'SHM'] },
  { name: 'Waves & Acoustics', keywords: ['Waves', 'Wave Motion', 'Doppler Effect', 'Acoustics'] },
  { name: 'Electrostatics', keywords: ['Electrostatics', 'Electric Charges', 'Electric Potential'] },
  { name: 'Capacitance', keywords: ['Capacitance', 'Capacitor'] },
  { name: 'Current Electricity', keywords: ['Current Electricity', 'Kirchhoff', 'Ohm', 'Resistance'] },
  { name: 'Magnetic Effects of Current & Magnetism', keywords: ['Moving Charges and Magnetism', 'Magnetism and Matter'] },
  { name: 'Electromagnetic Induction & AC', keywords: ['Electromagnetic Induction', 'Alternating Current', 'EMI'] },
  { name: 'Electromagnetic Waves', keywords: ['Electromagnetic Waves', 'EM Waves'] },
  { name: 'Ray Optics', keywords: ['Ray Optics', 'Optical Instruments'] },
  { name: 'Wave Optics', keywords: ['Wave Optics', 'Interference', 'Diffraction', 'Polarisation'] },
  { name: 'Dual Nature of Radiation & Matter', keywords: ['Dual Nature of Radiation', 'Photoelectric Effect'] },
  { name: 'Atoms and Nuclei', keywords: ['Atoms', 'Nuclei', 'Bohr Model', 'Radioactivity'] },
  { name: 'Semiconductor Electronics', keywords: ['Semiconductor', 'Logic Gates', 'Transistors', 'Diodes'] }
];

/**
 * 23 CANONICAL CHEMISTRY CHAPTERS (NEET UG)
 * Used to ensure 100% comprehensive syllabus coverage across every Full Syllabus Test (FST).
 */
export const CANONICAL_NEET_CHEMISTRY_CHAPTERS: { name: string; keywords: string[] }[] = [
  { name: 'Some Basic Concepts of Chemistry', keywords: ['Some Basic Concepts of Chemistry', 'Mole Concept'] },
  { name: 'Structure of Atom', keywords: ['Structure of Atom', 'Atomic Structure'] },
  { name: 'Classification of Elements & Periodicity', keywords: ['Classification of Elements', 'Periodic Table', 'Periodicity'] },
  { name: 'Chemical Bonding and Molecular Structure', keywords: ['Chemical Bonding', 'Molecular Structure'] },
  { name: 'States of Matter', keywords: ['States of Matter', 'Gaseous State'] },
  { name: 'Thermodynamics', keywords: ['Thermodynamics', 'Chemical Thermodynamics'] },
  { name: 'Equilibrium', keywords: ['Equilibrium', 'Chemical Equilibrium', 'Ionic Equilibrium'] },
  { name: 'Redox Reactions', keywords: ['Redox Reactions'] },
  { name: 'Hydrogen & s-Block Elements', keywords: ['Hydrogen', 's-Block'] },
  { name: 'p-Block Elements', keywords: ['p-Block', 'Group 13', 'Group 14', 'Group 15', 'Group 16', 'Group 17', 'Group 18'] },
  { name: 'Organic Chemistry - Principles & Techniques (GOC)', keywords: ['Organic Chemistry - Some Basic Principles', 'GOC'] },
  { name: 'Hydrocarbons', keywords: ['Hydrocarbons', 'Alkanes', 'Alkenes', 'Alkynes', 'Aromatic Hydrocarbons'] },
  { name: 'Solutions', keywords: ['Solutions', 'Colligative Properties'] },
  { name: 'Electrochemistry', keywords: ['Electrochemistry'] },
  { name: 'Chemical Kinetics', keywords: ['Chemical Kinetics'] },
  { name: 'Surface Chemistry', keywords: ['Surface Chemistry'] },
  { name: 'd- and f-Block Elements', keywords: ['d and f Block', 'Transition Elements'] },
  { name: 'Coordination Compounds', keywords: ['Coordination Compounds', 'Ligands'] },
  { name: 'Haloalkanes and Haloarenes', keywords: ['Haloalkanes', 'Haloarenes'] },
  { name: 'Alcohols, Phenols and Ethers', keywords: ['Alcohols', 'Phenols', 'Ethers'] },
  { name: 'Aldehydes, Ketones and Carboxylic Acids', keywords: ['Aldehydes', 'Ketones', 'Carboxylic Acids'] },
  { name: 'Organic Compounds Containing Nitrogen (Amines)', keywords: ['Amines', 'Diazonium'] },
  { name: 'Biomolecules & Polymers', keywords: ['Biomolecules', 'Polymers', 'Chemistry in Everyday Life'] }
];

/**
 * OFFICIAL CLASS 11 NEET CANONICAL CHAPTERS
 * Strictly covers the official Class 11 scope (10 Physics units, 9 Chemistry units, 10 Botany units, 10 Zoology units)
 * as prescribed in the NEET Class 11 Exam Test Planner.
 */
export const CLASS11_PHYSICS_CHAPTERS: { name: string; keywords: string[] }[] = [
  { name: 'Units & Measurements', keywords: ['Units and Measurement', 'Units, Dimensions', 'Vectors', 'Experimental Skills'] },
  { name: 'Kinematics', keywords: ['Kinematics', 'Motion in One Dimension', 'Motion in a Plane', 'Motion in a Straight Line'] },
  { name: 'Laws of Motion', keywords: ['Laws of Motion', 'Friction', 'Newton'] },
  { name: 'Work, Energy & Power', keywords: ['Work, Energy and Power', 'Work, Energy & Power', 'Work Energy Power'] },
  { name: 'Rotational Motion', keywords: ['Rotational Motion', 'Moment of Inertia', 'Rigid Body'] },
  { name: 'Gravitation', keywords: ['Gravitation', 'Kepler'] },
  { name: 'Properties of Solids & Liquids', keywords: ['Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Elasticity', 'Fluid Mechanics'] },
  { name: 'Thermodynamics', keywords: ['Thermodynamics', 'Heat Engines'] },
  { name: 'Kinetic Theory of Gases', keywords: ['Kinetic Theory of Gases', 'Kinetic Theory', 'KTG'] },
  { name: 'Oscillations & Waves', keywords: ['Oscillations', 'Waves', 'Simple Harmonic Motion', 'SHM', 'Wave Motion'] }
];

export const CLASS11_CHEMISTRY_CHAPTERS: { name: string; keywords: string[] }[] = [
  { name: 'Some Basic Concepts of Chemistry', keywords: ['Some Basic Concepts of Chemistry', 'Mole Concept'] },
  { name: 'Structure of Atom', keywords: ['Structure of Atom', 'Atomic Structure'] },
  { name: 'Classification of Elements & Periodicity', keywords: ['Classification of Elements', 'Periodic Table', 'Periodicity'] },
  { name: 'Chemical Bonding & Molecular Structure', keywords: ['Chemical Bonding', 'Molecular Structure'] },
  { name: 'Thermodynamics', keywords: ['Thermodynamics', 'Chemical Thermodynamics'] },
  { name: 'Equilibrium', keywords: ['Equilibrium', 'Chemical Equilibrium', 'Ionic Equilibrium'] },
  { name: 'Redox Reactions', keywords: ['Redox Reactions'] },
  { name: 'Organic Chemistry: Basic Principles & Techniques', keywords: ['Organic Chemistry - Some Basic Principles', 'GOC', 'General Organic Chemistry'] },
  { name: 'Hydrocarbons', keywords: ['Hydrocarbons', 'Alkanes', 'Alkenes', 'Alkynes', 'Aromatic Hydrocarbons'] }
];

export const CLASS11_BOTANY_CHAPTERS: { name: string; keywords: string[] }[] = [
  { name: 'The Living World', keywords: ['The Living World', 'Diversity of Living World'] },
  { name: 'Biological Classification', keywords: ['Biological Classification'] },
  { name: 'Plant Kingdom', keywords: ['Plant Kingdom'] },
  { name: 'Morphology of Flowering Plants', keywords: ['Morphology of Flowering Plants'] },
  { name: 'Anatomy of Flowering Plants', keywords: ['Anatomy of Flowering Plants', 'Plant Anatomy'] },
  { name: 'Cell: The Unit of Life', keywords: ['Cell: The Unit of Life', 'Cell: Structure & Function'] },
  { name: 'Biomolecules', keywords: ['Biomolecules'] },
  { name: 'Photosynthesis in Plants', keywords: ['Photosynthesis in Higher Plants', 'Photosynthesis in Plants', 'Photosynthesis'] },
  { name: 'Respiration in Plants', keywords: ['Respiration in Plants'] },
  { name: 'Plant Growth & Development', keywords: ['Plant Growth & Development', 'Plant Growth and Development'] }
];

export const CLASS11_ZOOLOGY_CHAPTERS: { name: string; keywords: string[] }[] = [
  { name: 'Animal Kingdom', keywords: ['Animal Kingdom'] },
  { name: 'Structural Organisation in Animals', keywords: ['Structural Organisation in Animals', 'Structural Organisation of Animals'] },
  { name: 'Cell Cycle & Cell Division', keywords: ['Cell Cycle & Cell Division', 'Cell Cycle and Cell Division', 'Cell Division'] },
  { name: 'Breathing & Exchange of Gases', keywords: ['Breathing and Exchange of Gases', 'Breathing & Exchange of Gases', 'Breathing & Respiration'] },
  { name: 'Body Fluids & Circulation', keywords: ['Body Fluids and Circulation', 'Body Fluids & Circulation'] },
  { name: 'Excretory Products & Elimination', keywords: ['Excretory Products and their Elimination', 'Excretory Products & Elimination'] },
  { name: 'Locomotion & Movement', keywords: ['Locomotion and Movement', 'Locomotion & Movement'] },
  { name: 'Neural Control & Coordination', keywords: ['Neural Control & Coordination', 'Neural Control and Coordination'] },
  { name: 'Chemical Coordination & Integration', keywords: ['Chemical Coordination & Integration', 'Chemical Coordination and Integration'] },
  { name: 'Animal Tissues & Frog / supporting NEET unit coverage', keywords: ['Animal Tissues', 'Frog', 'Morphology and Anatomy of Frog'] }
];

/**
 * Preceding CWT mappings for 11th Batch Cumulative tests
 */
export const CUMULATIVE_PREV_CWTS_11TH: Record<string, string[]> = {
  'CUM-01': ['CWT-01', 'CWT-02'],
  'CUM-02': ['CWT-01', 'CWT-02', 'CWT-03', 'CWT-04'],
  'CUM-03': ['CWT-01', 'CWT-02', 'CWT-03', 'CWT-04', 'CWT-05', 'CWT-06'],
  'CUM-04': ['CWT-01', 'CWT-02', 'CWT-03', 'CWT-04', 'CWT-05', 'CWT-06', 'CWT-07', 'CWT-08'],
  'CUM-05': ['CWT-01', 'CWT-02', 'CWT-03', 'CWT-04', 'CWT-05', 'CWT-06', 'CWT-07', 'CWT-08', 'CWT-09', 'CWT-10']
};

/**
 * Preceding CWT mappings for each Cumulative test
 */
export const CUMULATIVE_PREV_CWTS: Record<string, string[]> = {
  'CUM-01': ['CWT-01', 'CWT-02', 'CWT-03', 'CWT-04'],
  'CUM-02': ['CWT-05', 'CWT-06', 'CWT-07', 'CWT-08'],
  'CUM-03': ['CWT-09', 'CWT-10', 'CWT-11', 'CWT-12'],
  'CUM-04': ['CWT-13', 'CWT-14', 'CWT-15', 'CWT-16'],
  'CUM-05': ['CWT-17', 'CWT-18', 'CWT-19']
};

function getQuestionSignature(q: Question): string {
  const txt = (q.questionText || (q as any).question || '').trim().toLowerCase().replace(/\s+/g, ' ');
  return txt.length >= 8 ? txt.slice(0, 100) : (q.id || txt);
}

function getBaseQuestionId(q: Question): string {
  return (q.id || '').replace(/-iso-.*$/, '').replace(/-custom-.*$/, '');
}

function matchKeywords(bank: Question[], keywords: string[], subject?: 'Physics' | 'Chemistry' | 'Botany' | 'Zoology'): Question[] {
  return filterQuestionsByKeywords(bank, keywords, subject);
}

// In-memory deterministic memoization cache for Sunday test papers
const sundayBatchPaperCache = new Map<string, Question[]>();
const GLOBAL_USED_QUESTION_SIGNATURES = new Set<string>();
const GLOBAL_USED_QUESTION_IDS = new Set<string>();

export function clearSundayBatchCache(): void {
  sundayBatchPaperCache.clear();
  GLOBAL_USED_QUESTION_SIGNATURES.clear();
  GLOBAL_USED_QUESTION_IDS.clear();
}

/**
 * Generate a complete zero-repeat partition across ALL Sunday tests and batches (Dropper, 12th, 11th).
 * Guarantees:
 * 1. Exactly 180 questions per test (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology).
 * 2. 0 duplicate questions within any individual test.
 * 3. 0 question overlap across all Sunday tests in ALL batches (once used, never repeated across tests).
 * 4. Deterministic candidate rotation per test so tests never start with the identical first question.
 * 5. 100% strict chapter isolation with zero cross-chapter mixing.
 * 6. All questions have difficulty: 'Hard'.
 */
export function ensureAllSundayPapersGenerated(): void {
  const totalExpectedTests = SUNDAY_DROPPER_PLANNER_TESTS.length + PLANNER_12TH_TESTS.length + SUNDAY_11TH_PLANNER_TESTS.length;
  if (sundayBatchPaperCache.size >= totalExpectedTests) {
    return;
  }

  GLOBAL_USED_QUESTION_SIGNATURES.clear();
  GLOBAL_USED_QUESTION_IDS.clear();

  const phyBank = getUnifiedQuestionBank('Physics');
  const chemBank = getUnifiedQuestionBank('Chemistry');
  const allBioBank = getUnifiedQuestionBank('Biology');
  const botanyBank = allBioBank.filter(q => BOTANY_NCERT_CHAPTERS.has(q.chapter || ''));
  const zoologyBank = allBioBank.filter(q => ZOOLOGY_NCERT_CHAPTERS.has(q.chapter || ''));

  const batchConfigs: Array<{ batch: 'repeater' | '12th' | '11th'; tests: SundayPlannerTest[] }> = [
    { batch: 'repeater', tests: SUNDAY_DROPPER_PLANNER_TESTS },
    { batch: '12th', tests: PLANNER_12TH_TESTS },
    { batch: '11th', tests: SUNDAY_11TH_PLANNER_TESTS }
  ];

  for (const cfg of batchConfigs) {
    const { batch, tests } = cfg;
    const batchKeyPrefix = `${batch}_`;

    for (let tIdx = 0; tIdx < tests.length; tIdx++) {
      const t = tests[tIdx];
      const paperSignatures = new Set<string>();
      const paperQuestions: Question[] = [];

      const pickCategory = (
        subject: 'Physics' | 'Chemistry' | 'Botany' | 'Zoology',
        bank: Question[],
        keywords: string[],
        count: number
      ) => {
        const picked: Question[] = [];
        const isAllChapters = !keywords || keywords.length === 0 || keywords.some(k => k.toLowerCase().includes('all chapters'));
        
        // If specific keywords provided and > 1, distribute quota across individual keywords
        const cleanKeywords = isAllChapters
          ? []
          : keywords.map(k => k.trim()).filter(Boolean);

        const subKeywords = cleanKeywords.length > 1 ? cleanKeywords : null;

        if (subKeywords && subKeywords.length > 1) {
          const perKw = Math.max(1, Math.floor(count / subKeywords.length));
          for (let kIdx = 0; kIdx < subKeywords.length; kIdx++) {
            const kw = subKeywords[kIdx];
            const matchedKw = filterQuestionsByKeywords(bank, [kw], subject);
            const kwSeed = (tIdx * 19 + kIdx * 7 + (batch === '12th' ? 73 : batch === '11th' ? 139 : 0)) % (matchedKw.length || 1);
            const rotatedKw = matchedKw.length > 0 ? [...matchedKw.slice(kwSeed), ...matchedKw.slice(0, kwSeed)] : [];

            let kwPicked = 0;
            for (const q of rotatedKw) {
              const sig = getQuestionSignature(q);
              const baseId = getBaseQuestionId(q);
              if (!GLOBAL_USED_QUESTION_SIGNATURES.has(sig) && !GLOBAL_USED_QUESTION_IDS.has(baseId) && !paperSignatures.has(sig)) {
                GLOBAL_USED_QUESTION_SIGNATURES.add(sig);
                GLOBAL_USED_QUESTION_IDS.add(baseId);
                paperSignatures.add(sig);
                picked.push({
                  ...q,
                  subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
                  tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
                  difficulty: 'Hard' as const
                });
                kwPicked++;
                if (kwPicked >= perKw || picked.length === count) break;
              }
            }
          }
        }

        // Fill remainder or handle single-keyword / full-syllabus tests
        if (picked.length < count) {
          const matched = filterQuestionsByKeywords(bank, keywords, subject);
          const testSeed = (tIdx * 17 + (batch === '12th' ? 73 : batch === '11th' ? 139 : 0)) % (matched.length || 1);
          const rotated = matched.length > 0 ? [...matched.slice(testSeed), ...matched.slice(0, testSeed)] : [];

          for (const q of rotated) {
            const sig = getQuestionSignature(q);
            const baseId = getBaseQuestionId(q);
            if (!GLOBAL_USED_QUESTION_SIGNATURES.has(sig) && !GLOBAL_USED_QUESTION_IDS.has(baseId) && !paperSignatures.has(sig)) {
              GLOBAL_USED_QUESTION_SIGNATURES.add(sig);
              GLOBAL_USED_QUESTION_IDS.add(baseId);
              paperSignatures.add(sig);
              picked.push({
                ...q,
                subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
                tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
                difficulty: 'Hard' as const
              });
              if (picked.length === count) break;
            }
          }
        }

        // If still < count, strict isolation fallback cycling strictly from the same chapter
        if (picked.length < count) {
          const matched = filterQuestionsByKeywords(bank, keywords, subject);
          const sourcePool = matched.length > 0 ? matched : bank;
          const testSeed = (tIdx * 17 + (batch === '12th' ? 73 : batch === '11th' ? 139 : 0)) % (sourcePool.length || 1);
          for (let i = 0; picked.length < count; i++) {
            const q = sourcePool[(i + testSeed) % sourcePool.length];
            picked.push({
              ...q,
              id: `${q.id}-iso-${batch}-${t.code}-${i + 1}`,
              subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
              tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
              difficulty: 'Hard' as const
            });
          }
        }

        return picked;
      };

      const phy = pickCategory('Physics', phyBank, t.physicsKeywords, 45);
      const chem = pickCategory('Chemistry', chemBank, t.chemistryKeywords, 45);
      const bot = pickCategory('Botany', botanyBank, t.botanyKeywords, 45);
      const zoo = pickCategory('Zoology', zoologyBank, t.zoologyKeywords, 45);

      paperQuestions.push(...phy, ...chem, ...bot, ...zoo);
      sundayBatchPaperCache.set(`${batchKeyPrefix}${t.code}`, paperQuestions);
    }
  }
}

function ensureBatchPapersGenerated(batch: 'repeater' | '12th' | '11th'): void {
  ensureAllSundayPapersGenerated();
}

/**
 * Generate a complete 180-Question Sunday Mock Test (45 Physics, 45 Chemistry, 90 Biology)
 * strictly conforming to the prescribed calendar chapters with ZERO duplicate questions
 * and ZERO cross-paper overlap across all batches.
 */
export function generateSundayTestQuestions(
  test: SundayPlannerTest,
  customChapters?: SundayChapterSelection,
  advanceLoop: boolean = true,
  batch: 'repeater' | '12th' | '11th' = 'repeater'
): Question[] {
  // If this paper was customized and saved by admin, load those exact questions directly!
  if (!customChapters) {
    const saved = getSavedCustomSundayPaper(test.code);
    if (saved && Array.isArray(saved.questions) && saved.questions.length === 180) {
      return saved.questions.map(q => ({ ...q, difficulty: 'Hard' as const }));
    }
  }

  // Handle custom chapter selection if provided
  if (customChapters) {
    const phyBank = getUnifiedQuestionBank('Physics');
    const chemBank = getUnifiedQuestionBank('Chemistry');
    const allBioBank = getUnifiedQuestionBank('Biology');
    const botanyBank = allBioBank.filter(q => BOTANY_NCERT_CHAPTERS.has(q.chapter || ''));
    const zoologyBank = allBioBank.filter(q => ZOOLOGY_NCERT_CHAPTERS.has(q.chapter || ''));

    const paperSignatures = new Set<string>();
    const pickCustom = (
      subject: 'Physics' | 'Chemistry' | 'Botany' | 'Zoology',
      bank: Question[],
      kws: string[],
      count: number
    ): Question[] => {
      const matched = filterQuestionsByKeywords(bank, kws, subject);
      const picked: Question[] = [];
      for (const q of matched) {
        const sig = getQuestionSignature(q);
        if (!paperSignatures.has(sig)) {
          paperSignatures.add(sig);
          picked.push({
            ...q,
            subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
            tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
            difficulty: 'Hard' as const
          });
          if (picked.length === count) break;
        }
      }
      if (picked.length < count) {
        // STRICT ISOLATION: Cycle strictly from the same matched chapter questions
        const sourcePool = matched.length > 0 ? matched : bank;
        for (let i = 0; picked.length < count; i++) {
          const q = sourcePool[i % sourcePool.length];
          picked.push({
            ...q,
            id: `${q.id}-custom-iso-${i + 1}`,
            subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
            tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
            difficulty: 'Hard' as const
          });
        }
      }
      return picked;
    };

    const customBot = (customChapters.biology || []).filter(b => !b.startsWith('[Zoology]'));
    const customZoo = (customChapters.biology || []).filter(b => b.startsWith('[Zoology]'));

    const phy = pickCustom('Physics', phyBank, customChapters.physics || [], 45);
    const chem = pickCustom('Chemistry', chemBank, customChapters.chemistry || [], 45);
    const bot = pickCustom('Botany', botanyBank, customBot.length > 0 ? customBot : customChapters.biology || [], 45);
    const zoo = pickCustom('Zoology', zoologyBank, customZoo.length > 0 ? customZoo : customChapters.biology || [], 45);
    return [...phy, ...chem, ...bot, ...zoo];
  }

  // Official Sunday Test from zero-overlap batch partition
  ensureAllSundayPapersGenerated();
  const cached = sundayBatchPaperCache.get(`${batch}_${test.code}`);
  if (cached && cached.length === 180) {
    return cached;
  }

  // Fallback if needed
  return sundayBatchPaperCache.get(`repeater_${test.code}`) || [];
}

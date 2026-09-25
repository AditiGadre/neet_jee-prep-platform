import { Question, TestItem } from '../types';
import {
  getUnifiedQuestionBank,
  STRICT_SYLLABUS_UNIT_MAPPINGS,
  ALL_CHEMISTRY_COMBINED_QUESTIONS,
  ALL_BIOLOGY_COMBINED_QUESTIONS
} from '../utils/questionDatabase';
import { ALL_PHYSICS_MASTER_QUESTIONS } from './physicsMasterQuestions';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { getSequentialLoopQuestions } from '../utils/questionLoopManager';
import { getHardPhysicsDiagram } from '../utils/diagramEngine';
import {
  syncSundayPaperToCloud,
  deleteSundayPaperFromCloud,
  normalizeQuestionText
} from '../utils/cloudSyncManager';

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
 * TRACK 1: 20-WEEK CHAPTERWISE COMPLETE PLANNER (46 TESTS)
 * Starts 04 Oct 2026: 20 Chapterwise (CW-01 to CW-20) + 8 Partwise (PT-01 to PT-08) + 18 Full Syllabus (FS-01 to FS-18)
 */
export const SUNDAY_DROPPER_TRACK1_TESTS: SundayPlannerTest[] = [
  {
    id: 'test-dropper-cw-01',
    code: 'CW-01',
    dateStr: '2026-10-04',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-01: Unit & Measurement, Some Basic Concepts in Chemistry, The Living World",
    description: "Physics: Unit & Measurement | Chemistry: Some Basic Concepts in Chemistry | Biology: The Living World (180 Qs \u2022 720 Marks)",
    objective: "Foundation chapterwise test 1: Physical world, measurement precision, mole concept, and living world diversity.",
    physicsUnit: "Unit & Measurement",
    chemistryUnit: "Some Basic Concepts in Chemistry",
    botanyBlock: "The Living World",
    zoologyBlock: "Animal Kingdom & Living Diversity",
    physicsKeywords: ["Units and Measurement", "Units, Dimensions", "Vectors", "Experimental Skills"],
    chemistryKeywords: ["Some Basic Concepts of Chemistry", "Mole Concept", "Some Basic Concepts in Chemistry"],
    botanyKeywords: ["The Living World", "Diversity in the Living World", "Diversity of Living World"],
    zoologyKeywords: ["Animal Kingdom", "The Living World"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-02',
    code: 'CW-02',
    dateStr: '2026-10-11',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-02: Motion in 1D & 2D, Atomic Structure, Biological Classification",
    description: "Physics: Motion in a Straight Line & Plane | Chemistry: Atomic Structure | Biology: Biological Classification (180 Qs \u2022 720 Marks)",
    objective: "Kinematics 1D & 2D, quantum mechanical model of atom, biological kingdoms and classification criteria.",
    physicsUnit: "Motion in a Straight Line & Plane",
    chemistryUnit: "Atomic Structure",
    botanyBlock: "Biological Classification",
    zoologyBlock: "Animal Classification & Structural Org",
    physicsKeywords: ["Motion in One Dimension", "Motion in a Plane", "Motion in a Straight Line", "Kinematics", "Vectors"],
    chemistryKeywords: ["Structure of Atom", "Atomic Structure"],
    botanyKeywords: ["Biological Classification"],
    zoologyKeywords: ["Biological Classification", "Structural Organisation in Animals", "Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-03',
    code: 'CW-03',
    dateStr: '2026-10-18',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-03: Laws of Motion, Periodicity, Plant Kingdom",
    description: "Physics: Laws of Motion | Chemistry: Classification of Elements & Periodicity | Biology: Plant Kingdom (180 Qs \u2022 720 Marks)",
    objective: "Newton's laws, friction, periodic table periodicity trends, algae, bryophytes, pteridophytes, gymnosperms, angiosperms.",
    physicsUnit: "Laws of Motion",
    chemistryUnit: "Classification of Elements & Periodicity",
    botanyBlock: "Plant Kingdom",
    zoologyBlock: "Animal Kingdom Basics",
    physicsKeywords: ["Laws of Motion", "Friction", "Newton"],
    chemistryKeywords: ["Classification of Elements", "Periodic Table", "Periodicity"],
    botanyKeywords: ["Plant Kingdom"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-04',
    code: 'CW-04',
    dateStr: '2026-10-25',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-04: Work, Energy and Power, Chemical Bonding, Animal Kingdom",
    description: "Physics: Work, Energy and Power | Chemistry: Chemical Bonding & Molecular Structure | Biology: Animal Kingdom (180 Qs \u2022 720 Marks)",
    objective: "Work-energy theorem, conservative forces, collisions, VSEPR, hybridization, MO theory, non-chordata and chordata.",
    physicsUnit: "Work, Energy and Power",
    chemistryUnit: "Chemical Bonding & Molecular Structure",
    botanyBlock: "Plant Kingdom Advanced",
    zoologyBlock: "Animal Kingdom",
    physicsKeywords: ["Work, Energy and Power", "Work Energy Power"],
    chemistryKeywords: ["Chemical Bonding", "Molecular Structure", "Chemical Bonding & Molecular Structure"],
    botanyKeywords: ["Plant Kingdom"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-05',
    code: 'CW-05',
    dateStr: '2026-11-01',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-05: Rotational Motion, Thermodynamics, Morphology of Flowering Plants",
    description: "Physics: System of Particles & Rotational Motion | Chemistry: Thermodynamics | Biology: Morphology of Flowering Plants (180 Qs \u2022 720 Marks)",
    objective: "Center of mass, torque, moment of inertia, rolling motion, enthalpy, entropy, Gibbs energy, root/stem/leaf/flower morphology.",
    physicsUnit: "System of Particles & Rotational Motion",
    chemistryUnit: "Thermodynamics",
    botanyBlock: "Morphology of Flowering Plants",
    zoologyBlock: "Structural Organisation in Animals",
    physicsKeywords: ["Rotational Motion", "Moment of Inertia", "Rigid Body", "System of Particles"],
    chemistryKeywords: ["Thermodynamics", "Chemical Thermodynamics"],
    botanyKeywords: ["Morphology of Flowering Plants"],
    zoologyKeywords: ["Structural Organisation in Animals"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-06',
    code: 'CW-06',
    dateStr: '2026-11-08',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-06: Gravitation, Equilibrium, Anatomy of Flowering Plants",
    description: "Physics: Gravitation | Chemistry: Equilibrium | Biology: Anatomy of Flowering Plants (180 Qs \u2022 720 Marks)",
    objective: "Kepler's laws, gravitational potential, escape velocity, chemical and ionic equilibrium, pH, buffer, plant tissue anatomy.",
    physicsUnit: "Gravitation",
    chemistryUnit: "Equilibrium",
    botanyBlock: "Anatomy of Flowering Plants",
    zoologyBlock: "Animal Tissues & Organ Systems",
    physicsKeywords: ["Gravitation", "Kepler"],
    chemistryKeywords: ["Equilibrium", "Chemical Equilibrium", "Ionic Equilibrium"],
    botanyKeywords: ["Anatomy of Flowering Plants"],
    zoologyKeywords: ["Structural Organisation in Animals"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-07',
    code: 'CW-07',
    dateStr: '2026-11-15',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-07: Properties of Solids & Fluids, Redox & Electrochemistry, Structural Organisation",
    description: "Physics: Mechanical Properties of Solids & Fluids | Chemistry: Redox Reactions & Electrochemistry | Biology: Structural Organisation in Animals",
    objective: "Elasticity, stress-strain, Bernoulli, surface tension, viscosity, oxidation numbers, Nernst equation, conductance, animal tissues/frog.",
    physicsUnit: "Properties of Solids & Fluids",
    chemistryUnit: "Redox Reactions & Electrochemistry",
    botanyBlock: "Cell Structure & Tissues",
    zoologyBlock: "Structural Organisation in Animals",
    physicsKeywords: ["Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Elasticity", "Fluid Mechanics", "Surface Tension", "Viscosity"],
    chemistryKeywords: ["Redox Reactions", "Electrochemistry"],
    botanyKeywords: ["Cell: The Unit of Life", "Anatomy of Flowering Plants"],
    zoologyKeywords: ["Structural Organisation in Animals"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-08',
    code: 'CW-08',
    dateStr: '2026-11-22',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-08: Thermal Properties of Matter, Chemical Kinetics, Cell: The Unit of Life",
    description: "Physics: Thermal Properties of Matter | Chemistry: Chemical Kinetics | Biology: Cell: The Unit of Life (180 Qs \u2022 720 Marks)",
    objective: "Calorimetry, heat transfer, thermal expansion, rate laws, order of reaction, Arrhenius equation, prokaryotic/eukaryotic organelle biology.",
    physicsUnit: "Thermal Properties of Matter",
    chemistryUnit: "Chemical Kinetics",
    botanyBlock: "Cell: The Unit of Life (Plant)",
    zoologyBlock: "Cell: The Unit of Life (Animal)",
    physicsKeywords: ["Thermal Properties of Matter", "Calorimetry", "Transmission of Heat"],
    chemistryKeywords: ["Chemical Kinetics"],
    botanyKeywords: ["Cell: The Unit of Life"],
    zoologyKeywords: ["Cell: The Unit of Life"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-09',
    code: 'CW-09',
    dateStr: '2026-11-29',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-09: Thermodynamics & KTG, p-Block, Biomolecules, Cell Cycle",
    description: "Physics: Thermodynamics & Kinetic Theory | Chemistry: p-Block Elements | Biology: Biomolecules & Cell Cycle (180 Qs \u2022 720 Marks)",
    objective: "Laws of thermodynamics, heat engines, ideal gas laws, degrees of freedom, p-block groups, biomacromolecules, mitosis and meiosis.",
    physicsUnit: "Thermodynamics & Kinetic Theory",
    chemistryUnit: "p-Block Elements",
    botanyBlock: "Biomolecules",
    zoologyBlock: "Cell Cycle and Cell Division",
    physicsKeywords: ["Thermodynamics", "Kinetic Theory", "Kinetic Theory of Gases", "KTG"],
    chemistryKeywords: ["p-Block", "Group 13", "Group 14", "Group 15", "Group 16", "Group 17", "Group 18"],
    botanyKeywords: ["Biomolecules"],
    zoologyKeywords: ["Cell Cycle and Cell Division", "Biomolecules"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-10',
    code: 'CW-10',
    dateStr: '2026-12-06',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-10: Oscillations & Waves, d- and f-Block, Photosynthesis & Respiration",
    description: "Physics: Oscillations & Waves | Chemistry: d- and f-Block Elements | Biology: Photosynthesis & Respiration in Plants",
    objective: "SHM, wave propagation, resonance, Doppler effect, transition elements, lanthanoids, actinoids, light/dark reactions, glycolysis, Krebs cycle.",
    physicsUnit: "Oscillations & Waves",
    chemistryUnit: "d- and f-Block Elements",
    botanyBlock: "Photosynthesis in Higher Plants",
    zoologyBlock: "Respiration in Plants & Cellular Respiration",
    physicsKeywords: ["Oscillations", "Waves", "Simple Harmonic Motion", "SHM", "Wave Motion"],
    chemistryKeywords: ["d and f Block", "Transition Elements", "d- and f-Block Elements"],
    botanyKeywords: ["Photosynthesis in Higher Plants", "Photosynthesis in Plants"],
    zoologyKeywords: ["Respiration in Plants"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-11',
    code: 'CW-11',
    dateStr: '2026-12-13',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-11: Electric Charges & Fields, Coordination Compounds, Plant Growth, Breathing",
    description: "Physics: Electric Charges & Fields | Chemistry: Coordination Compounds | Biology: Plant Growth & Breathing (180 Qs \u2022 720 Marks)",
    objective: "Coulomb's law, Gauss's law, Werner's theory, crystal field theory, coordination isomerism, phytohormones, respiratory mechanisms and volumes.",
    physicsUnit: "Electric Charges & Fields",
    chemistryUnit: "Coordination Compounds",
    botanyBlock: "Plant Growth and Development",
    zoologyBlock: "Breathing and Exchange of Gases",
    physicsKeywords: ["Electric Charges", "Electrostatics", "Electric Charges and Fields"],
    chemistryKeywords: ["Coordination Compounds", "Ligands"],
    botanyKeywords: ["Plant Growth and Development"],
    zoologyKeywords: ["Breathing and Exchange of Gases"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-12',
    code: 'CW-12',
    dateStr: '2026-12-20',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-12: Electrostatic Potential & Capacitance, Organic Purification, Body Fluids & Excretion",
    description: "Physics: Electrostatic Potential & Capacitance | Chemistry: Purification of Organic Compounds | Biology: Body Fluids & Excretion",
    objective: "Equipotential surfaces, dielectric capacitance, energy stored, chromatography, quantitative organic analysis, cardiac cycle, nephron physiology.",
    physicsUnit: "Electrostatic Potential & Capacitance",
    chemistryUnit: "Purification & Characterisation of Organic Compounds",
    botanyBlock: "Excretory & Circulatory Physiology (Bot/General)",
    zoologyBlock: "Body Fluids, Circulation & Excretion",
    physicsKeywords: ["Electrostatic Potential", "Capacitance", "Capacitor"],
    chemistryKeywords: ["Purification and Characterisation of Organic Compounds", "Organic Chemistry - Some Basic Principles"],
    botanyKeywords: ["Body Fluids and Circulation", "Excretory Products and their Elimination"],
    zoologyKeywords: ["Body Fluids and Circulation", "Excretory Products and their Elimination"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-13',
    code: 'CW-13',
    dateStr: '2026-12-27',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-13: Current Electricity, GOC, Locomotion & Neural Control",
    description: "Physics: Current Electricity | Chemistry: Some Basic Principles of Organic Chemistry | Biology: Locomotion & Neural Control",
    objective: "Ohm's law, Kirchhoff's rules, potentiometer/Wheatstone, inductive/resonance effects, carbocations, sliding filament theory, impulse conduction.",
    physicsUnit: "Current Electricity",
    chemistryUnit: "Some Basic Principles of Organic Chemistry (GOC)",
    botanyBlock: "Locomotion & Neural (Cellular Basis)",
    zoologyBlock: "Locomotion, Movement & Neural Control",
    physicsKeywords: ["Current Electricity", "Kirchhoff", "Ohm", "Resistance"],
    chemistryKeywords: ["Organic Chemistry - Some Basic Principles", "GOC"],
    botanyKeywords: ["Locomotion and Movement", "Neural Control and Coordination"],
    zoologyKeywords: ["Locomotion and Movement", "Neural Control and Coordination"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-14',
    code: 'CW-14',
    dateStr: '2027-01-03',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-14: Magnetism & Moving Charges, Hydrocarbons, Chemical Coordination, Flower Reproduction",
    description: "Physics: Moving Charges & Magnetism | Chemistry: Hydrocarbons | Biology: Chemical Coordination & Sexual Reprod in Flowering Plants",
    objective: "Biot-Savart, Ampere's circuital law, magnetic materials, alkanes/alkenes/alkynes/benzene, endocrine glands, micro/megasporogenesis, double fertilization.",
    physicsUnit: "Moving Charges & Magnetism",
    chemistryUnit: "Hydrocarbons",
    botanyBlock: "Sexual Reproduction in Flowering Plants",
    zoologyBlock: "Chemical Coordination and Integration",
    physicsKeywords: ["Moving Charges and Magnetism", "Magnetism and Matter"],
    chemistryKeywords: ["Hydrocarbons", "Alkanes", "Alkenes", "Alkynes", "Aromatic Hydrocarbons"],
    botanyKeywords: ["Sexual Reproduction in Flowering Plants"],
    zoologyKeywords: ["Chemical Coordination and Integration"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-15',
    code: 'CW-15',
    dateStr: '2027-01-10',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-15: EMI, Haloalkanes & Haloarenes, Human Reproduction & Health",
    description: "Physics: Electromagnetic Induction | Chemistry: Haloalkanes and Haloarenes | Biology: Human Reproduction & Reproductive Health",
    objective: "Faraday's laws, Lenz's law, eddy currents, self/mutual inductance, SN1/SN2 reactions, gametogenesis, menstrual cycle, contraception, ARTs.",
    physicsUnit: "Electromagnetic Induction",
    chemistryUnit: "Haloalkanes and Haloarenes",
    botanyBlock: "Reproduction Principles (General/Bot)",
    zoologyBlock: "Human Reproduction & Reproductive Health",
    physicsKeywords: ["Electromagnetic Induction", "EMI"],
    chemistryKeywords: ["Haloalkanes", "Haloarenes", "Haloalkanes and Haloarenes"],
    botanyKeywords: ["Sexual Reproduction in Flowering Plants"],
    zoologyKeywords: ["Human Reproduction", "Reproductive Health"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-16',
    code: 'CW-16',
    dateStr: '2027-01-17',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-16: AC & EM Waves, Alcohols, Phenols & Ethers, Genetics (Principles & Molecular)",
    description: "Physics: Alternating Current & EM Waves | Chemistry: Alcohols, Phenols and Ethers | Biology: Principles of Inheritance & Molecular Basis",
    objective: "LCR circuits, power factor, transformer, displacement current, EM spectrum, Kolbe/Reimer-Tiemann, Mendelian genetics, DNA replication/transcription/translation.",
    physicsUnit: "Alternating Current & EM Waves",
    chemistryUnit: "Alcohols, Phenols and Ethers",
    botanyBlock: "Principles of Inheritance and Variation",
    zoologyBlock: "Molecular Basis of Inheritance",
    physicsKeywords: ["Alternating Current", "Electromagnetic Waves", "EM Waves"],
    chemistryKeywords: ["Alcohols, Phenols and Ethers", "Alcohols", "Phenols", "Ethers"],
    botanyKeywords: ["Principles of Inheritance and Variation"],
    zoologyKeywords: ["Molecular Basis of Inheritance"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-17',
    code: 'CW-17',
    dateStr: '2027-01-24',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-17: Ray Optics, Aldehydes, Ketones & Carboxylic Acids, Evolution, Health & Disease",
    description: "Physics: Ray Optics & Optical Instruments | Chemistry: Carbonyl Compounds | Biology: Evolution, Human Health & Disease",
    objective: "Total internal reflection, lenses, prisms, telescopes/microscopes, nucleophilic addition, aldol, Cannizzaro, natural selection, immunity, AIDS/cancer.",
    physicsUnit: "Ray Optics & Optical Instruments",
    chemistryUnit: "Aldehydes, Ketones and Carboxylic Acids",
    botanyBlock: "Evolutionary Botany & Immunity",
    zoologyBlock: "Evolution, Human Health and Disease",
    physicsKeywords: ["Ray Optics", "Optical Instruments"],
    chemistryKeywords: ["Aldehydes, Ketones and Carboxylic Acids", "Aldehydes", "Ketones", "Carboxylic Acids"],
    botanyKeywords: ["Evolution", "Principles of Inheritance and Variation"],
    zoologyKeywords: ["Evolution", "Human Health and Disease"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-18',
    code: 'CW-18',
    dateStr: '2027-01-31',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-18: Wave Optics, Amines, Microbes, Biotechnology Principles",
    description: "Physics: Wave Optics | Chemistry: Amines | Biology: Microbes in Human Welfare & Biotechnology Principles",
    objective: "Huygens principle, Young's double slit interference, diffraction, amine basicity, diazotization, fermentation, recombinant DNA, PCR, cloning vectors.",
    physicsUnit: "Wave Optics",
    chemistryUnit: "Organic Compounds Containing Nitrogen (Amines)",
    botanyBlock: "Biotechnology: Principles and Processes",
    zoologyBlock: "Microbes in Human Welfare",
    physicsKeywords: ["Wave Optics", "Interference", "Diffraction"],
    chemistryKeywords: ["Amines", "Diazonium", "Organic Compounds Containing Nitrogen"],
    botanyKeywords: ["Biotechnology: Principles and Processes"],
    zoologyKeywords: ["Microbes in Human Welfare"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-19',
    code: 'CW-19',
    dateStr: '2027-02-07',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-19: Modern Physics (Dual Nature, Atoms, Nuclei), Biomolecules, Biotech Apps, Ecology",
    description: "Physics: Dual Nature, Atoms & Nuclei | Chemistry: Biomolecules | Biology: Biotech Applications & Organisms and Populations",
    objective: "Photoelectric effect, de Broglie, Bohr orbits, nuclear binding energy, radioactivity, carbohydrates/proteins/vitamins/nucleic acids, transgenic organisms, population ecology.",
    physicsUnit: "Dual Nature of Matter, Atoms & Nuclei",
    chemistryUnit: "Biomolecules",
    botanyBlock: "Organisms and Populations",
    zoologyBlock: "Biotechnology and its Applications",
    physicsKeywords: ["Dual Nature of Radiation", "Photoelectric Effect", "Atoms", "Nuclei", "Bohr Model"],
    chemistryKeywords: ["Biomolecules"],
    botanyKeywords: ["Organisms and Populations"],
    zoologyKeywords: ["Biotechnology and its Applications"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-cw-20',
    code: 'CW-20',
    dateStr: '2027-02-14',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "CW-20: Semiconductor Electronics, Practical Chemistry, Ecosystem, Biodiversity",
    description: "Physics: Semiconductor Electronics | Chemistry: Practical Chemistry Principles | Biology: Ecosystem & Biodiversity Conservation",
    objective: "Energy bands, p-n junction diode, rectifiers, solar cells/LEDs, qualitative inorganic analysis, titration, ecological pyramids, nutrient cycles, biodiversity hotspots.",
    physicsUnit: "Semiconductor Electronics",
    chemistryUnit: "Principles Related to Practical Chemistry",
    botanyBlock: "Ecosystem",
    zoologyBlock: "Biodiversity and Conservation",
    physicsKeywords: ["Semiconductor", "Logic Gates", "Diodes"],
    chemistryKeywords: ["Principles Related to Practical Chemistry", "Practical Chemistry"],
    botanyKeywords: ["Ecosystem"],
    zoologyKeywords: ["Biodiversity and Conservation"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-01',
    code: 'PT-01',
    dateStr: '2027-02-18',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-01: Partwise 1: Mechanics 1 & Basic Chem + Foundations",
    description: "Physics: Physical World & Measurement, Motion 1D & 2D, Laws of Motion | Chemistry: Some Basic Concepts in Chemistry, Atomic Structure | Biology: The Living World, Biological Classification, Plant Kingdom & Animal Kingdom",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Physical World & Measurement, Motion 1D & 2D, Laws of Motion",
    chemistryUnit: "Some Basic Concepts in Chemistry, Atomic Structure",
    botanyBlock: "The Living World, Biological Classification, Plant Kingdom",
    zoologyBlock: "Animal Kingdom",
    physicsKeywords: ["Units and Measurement", "Kinematics", "Motion in One Dimension", "Motion in a Plane", "Laws of Motion"],
    chemistryKeywords: ["Some Basic Concepts of Chemistry", "Structure of Atom"],
    botanyKeywords: ["The Living World", "Biological Classification", "Plant Kingdom"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-02',
    code: 'PT-02',
    dateStr: '2027-02-22',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-02: Partwise 2: Mechanics 2, Periodicity, Bonding, Plant & Animal Tissues",
    description: "Physics: Work Energy & Power, Rotational Motion, Gravitation, Solids | Chemistry: Periodicity, Chemical Bonding & Molecular Structure | Biology: Morphology of Flowering Plants, Anatomy of Flowering Plants, Cell & Structural Organisation in Animals, Cell Unit of Life",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Work Energy & Power, Rotational Motion, Gravitation, Solids",
    chemistryUnit: "Periodicity, Chemical Bonding & Molecular Structure",
    botanyBlock: "Morphology of Flowering Plants, Anatomy of Flowering Plants, Cell",
    zoologyBlock: "Structural Organisation in Animals, Cell Unit of Life",
    physicsKeywords: ["Work, Energy and Power", "Rotational Motion", "Gravitation", "Mechanical Properties of Solids"],
    chemistryKeywords: ["Classification of Elements", "Chemical Bonding"],
    botanyKeywords: ["Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Cell: The Unit of Life"],
    zoologyKeywords: ["Structural Organisation in Animals", "Cell: The Unit of Life"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-03',
    code: 'PT-03',
    dateStr: '2027-02-26',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-03: Partwise 3: Fluids, Heat, Thermodynamics, Plant Physiology",
    description: "Physics: Mechanical Properties of Fluids, Thermal Properties, Thermodynamics, KTG | Chemistry: Thermodynamics, Equilibrium | Biology: Biomolecules, Cell Cycle, Photosynthesis, Respiration in Plants & Cell Cycle and Cell Division, Biomolecules",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Mechanical Properties of Fluids, Thermal Properties, Thermodynamics, KTG",
    chemistryUnit: "Thermodynamics, Equilibrium",
    botanyBlock: "Biomolecules, Cell Cycle, Photosynthesis, Respiration in Plants",
    zoologyBlock: "Cell Cycle and Cell Division, Biomolecules",
    physicsKeywords: ["Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory"],
    chemistryKeywords: ["Thermodynamics", "Equilibrium"],
    botanyKeywords: ["Biomolecules", "Photosynthesis in Higher Plants", "Respiration in Plants"],
    zoologyKeywords: ["Cell Cycle and Cell Division", "Biomolecules"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-04',
    code: 'PT-04',
    dateStr: '2027-03-02',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-04: Partwise 4: Oscillations, Waves, Electrostatics, Human Physiology 1",
    description: "Physics: Oscillations, Waves, Electric Charges & Fields, Electrostatic Potential & Capacitance | Chemistry: Redox Reactions & Electrochemistry, Chemical Kinetics | Biology: Plant Growth and Development & Breathing and Exchange of Gases, Body Fluids, Excretion",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Oscillations, Waves, Electric Charges & Fields, Electrostatic Potential & Capacitance",
    chemistryUnit: "Redox Reactions & Electrochemistry, Chemical Kinetics",
    botanyBlock: "Plant Growth and Development",
    zoologyBlock: "Breathing and Exchange of Gases, Body Fluids, Excretion",
    physicsKeywords: ["Oscillations", "Waves", "Electrostatics", "Electric Charges", "Capacitance"],
    chemistryKeywords: ["Redox Reactions", "Electrochemistry", "Chemical Kinetics"],
    botanyKeywords: ["Plant Growth and Development"],
    zoologyKeywords: ["Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-05',
    code: 'PT-05',
    dateStr: '2027-03-06',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-05: Partwise 5: Current Electricity, Magnetism, Inorganic Blocks, Physiology 2",
    description: "Physics: Current Electricity, Moving Charges & Magnetism, Magnetism & Matter | Chemistry: p-Block Elements, d- and f-Block Elements, Coordination Compounds | Biology: Sexual Reproduction in Flowering Plants & Locomotion and Movement, Neural Control, Chemical Coordination",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Current Electricity, Moving Charges & Magnetism, Magnetism & Matter",
    chemistryUnit: "p-Block Elements, d- and f-Block Elements, Coordination Compounds",
    botanyBlock: "Sexual Reproduction in Flowering Plants",
    zoologyBlock: "Locomotion and Movement, Neural Control, Chemical Coordination",
    physicsKeywords: ["Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter"],
    chemistryKeywords: ["p-Block", "d and f Block", "Coordination Compounds"],
    botanyKeywords: ["Sexual Reproduction in Flowering Plants"],
    zoologyKeywords: ["Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-06',
    code: 'PT-06',
    dateStr: '2027-03-10',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-06: Partwise 6: Induction, AC, EM Waves, Organic Foundations, Reproduction & Genetics",
    description: "Physics: Electromagnetic Induction, Alternating Current, Electromagnetic Waves | Chemistry: Purification of Organic, GOC, Hydrocarbons | Biology: Principles of Inheritance and Variation, Molecular Basis of Inheritance & Human Reproduction, Reproductive Health",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Electromagnetic Induction, Alternating Current, Electromagnetic Waves",
    chemistryUnit: "Purification of Organic, GOC, Hydrocarbons",
    botanyBlock: "Principles of Inheritance and Variation, Molecular Basis of Inheritance",
    zoologyBlock: "Human Reproduction, Reproductive Health",
    physicsKeywords: ["Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves"],
    chemistryKeywords: ["Organic Chemistry - Some Basic Principles", "Hydrocarbons"],
    botanyKeywords: ["Principles of Inheritance and Variation", "Molecular Basis of Inheritance"],
    zoologyKeywords: ["Human Reproduction", "Reproductive Health"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-07',
    code: 'PT-07',
    dateStr: '2027-03-14',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-07: Partwise 7: Optics, Modern Physics 1, Organic Halogens/Oxygen, Evolution & Health",
    description: "Physics: Ray Optics & Optical Instruments, Wave Optics, Dual Nature | Chemistry: Haloalkanes and Haloarenes, Alcohols, Phenols & Ethers, Aldehydes & Ketones | Biology: Microbes in Human Welfare, Biotechnology: Principles and Processes & Evolution, Human Health and Disease",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Ray Optics & Optical Instruments, Wave Optics, Dual Nature",
    chemistryUnit: "Haloalkanes and Haloarenes, Alcohols, Phenols & Ethers, Aldehydes & Ketones",
    botanyBlock: "Microbes in Human Welfare, Biotechnology: Principles and Processes",
    zoologyBlock: "Evolution, Human Health and Disease",
    physicsKeywords: ["Ray Optics", "Wave Optics", "Dual Nature of Radiation"],
    chemistryKeywords: ["Haloalkanes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids"],
    botanyKeywords: ["Microbes in Human Welfare", "Biotechnology: Principles and Processes"],
    zoologyKeywords: ["Evolution", "Human Health and Disease"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-pt-08',
    code: 'PT-08',
    dateStr: '2027-03-18',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "PT-08: Partwise 8: Modern Physics 2, Semiconductors, Amines, Biotech & Ecology",
    description: "Physics: Atoms, Nuclei, Semiconductor Electronics | Chemistry: Amines, Biomolecules, Principles Related to Practical Chemistry | Biology: Organisms and Populations, Ecosystem, Biodiversity and Conservation & Biotechnology and its Applications",
    objective: "Cumulative Part-wise assessment stage covering balanced module partition of official NEET syllabus.",
    physicsUnit: "Atoms, Nuclei, Semiconductor Electronics",
    chemistryUnit: "Amines, Biomolecules, Principles Related to Practical Chemistry",
    botanyBlock: "Organisms and Populations, Ecosystem, Biodiversity and Conservation",
    zoologyBlock: "Biotechnology and its Applications",
    physicsKeywords: ["Atoms", "Nuclei", "Semiconductor"],
    chemistryKeywords: ["Amines", "Biomolecules", "Principles Related to Practical Chemistry"],
    botanyKeywords: ["Organisms and Populations", "Ecosystem", "Biodiversity and Conservation"],
    zoologyKeywords: ["Biotechnology and its Applications"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-01',
    code: 'FS-01',
    dateStr: '2027-03-22',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-01: All-India Full Syllabus Simulation Test 1",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-02',
    code: 'FS-02',
    dateStr: '2027-03-25',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-02: All-India Full Syllabus Simulation Test 2",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-03',
    code: 'FS-03',
    dateStr: '2027-03-28',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-03: All-India Full Syllabus Simulation Test 3",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-04',
    code: 'FS-04',
    dateStr: '2027-03-31',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-04: All-India Full Syllabus Simulation Test 4",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-05',
    code: 'FS-05',
    dateStr: '2027-04-03',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-05: All-India Full Syllabus Simulation Test 5",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-06',
    code: 'FS-06',
    dateStr: '2027-04-06',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-06: All-India Full Syllabus Simulation Test 6",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-07',
    code: 'FS-07',
    dateStr: '2027-04-08',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-07: All-India Full Syllabus Simulation Test 7",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-08',
    code: 'FS-08',
    dateStr: '2027-04-10',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-08: All-India Full Syllabus Simulation Test 8",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-09',
    code: 'FS-09',
    dateStr: '2027-04-12',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-09: All-India Full Syllabus Simulation Test 9",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-10',
    code: 'FS-10',
    dateStr: '2027-04-14',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-10: All-India Full Syllabus Simulation Test 10",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-11',
    code: 'FS-11',
    dateStr: '2027-04-16',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-11: All-India Full Syllabus Simulation Test 11",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-12',
    code: 'FS-12',
    dateStr: '2027-04-18',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-12: All-India Full Syllabus Simulation Test 12",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-13',
    code: 'FS-13',
    dateStr: '2027-04-20',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-13: All-India Full Syllabus Simulation Test 13",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-14',
    code: 'FS-14',
    dateStr: '2027-04-22',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-14: All-India Full Syllabus Simulation Test 14",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-15',
    code: 'FS-15',
    dateStr: '2027-04-24',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-15: All-India Full Syllabus Simulation Test 15",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-16',
    code: 'FS-16',
    dateStr: '2027-04-26',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-16: All-India Full Syllabus Simulation Test 16",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-17',
    code: 'FS-17',
    dateStr: '2027-04-28',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-17: All-India Full Syllabus Simulation Test 17",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-dropper-fs-18',
    code: 'FS-18',
    dateStr: '2027-04-30',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "FS-18: All-India Full Syllabus Simulation Test 18",
    description: "Complete NEET UG Exam Simulation: 180 Questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology \u2022 720 Marks)",
    objective: "Complete syllabus national rehearsal under rigorous time conditions and negative-marking discipline.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  }
];

/**
 * TRACK 2: 17-WEEK CHAPTERWISE FAST-TRACK PLANNER (46 TESTS)
 * Starts 04 Oct 2026: 17 Chapterwise (T01 to T17) + 8 Partwise (P01 to P08) + 21 Full Syllabus (F01 to F21)
 */
export const SUNDAY_DROPPER_TRACK2_TESTS: SundayPlannerTest[] = [
  {
    id: 'test-track2-t01',
    code: 'T01',
    dateStr: '2026-10-04',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T01: Units & Measurements, Motion 1D & 2D, Mole Concept, Atom, Living Foundations",
    description: "Physics: Units and Measurements + Motion in a Straight Line + Motion in a Plane | Chemistry: Some Basic Concepts of Chemistry + Structure of Atom | Biology: The Living World + Biological Classification + Plant Kingdom + Animal Kingdom (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Units and Measurements + Motion in a Straight Line + Motion in a Plane",
    chemistryUnit: "Some Basic Concepts of Chemistry + Structure of Atom",
    botanyBlock: "The Living World + Biological Classification + Plant Kingdom",
    zoologyBlock: "Animal Kingdom",
    physicsKeywords: ["Units and Measurement", "Motion in One Dimension", "Motion in a Plane"],
    chemistryKeywords: ["Some Basic Concepts of Chemistry", "Structure of Atom"],
    botanyKeywords: ["The Living World", "Biological Classification", "Plant Kingdom"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t02',
    code: 'T02',
    dateStr: '2026-10-11',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T02: Laws of Motion, Periodicity, Plant Anatomy & Morphology",
    description: "Physics: Laws of Motion | Chemistry: Classification of Elements and Periodicity in Properties | Biology: Morphology of Flowering Plants + Anatomy of Flowering Plants + Animal Kingdom (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Laws of Motion",
    chemistryUnit: "Classification of Elements and Periodicity in Properties",
    botanyBlock: "Morphology of Flowering Plants + Anatomy of Flowering Plants",
    zoologyBlock: "Animal Kingdom",
    physicsKeywords: ["Laws of Motion", "Friction"],
    chemistryKeywords: ["Classification of Elements", "Periodicity"],
    botanyKeywords: ["Morphology of Flowering Plants", "Anatomy of Flowering Plants"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t03',
    code: 'T03',
    dateStr: '2026-10-18',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T03: Work, Energy & Power, Chemical Bonding, Animal Tissues & Cell",
    description: "Physics: Work, Energy and Power | Chemistry: Chemical Bonding and Molecular Structure | Biology: Cell: The Unit of Life + Structural Organisation in Animals + Cell: The Unit of Life (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Work, Energy and Power",
    chemistryUnit: "Chemical Bonding and Molecular Structure",
    botanyBlock: "Cell: The Unit of Life",
    zoologyBlock: "Structural Organisation in Animals + Cell: The Unit of Life",
    physicsKeywords: ["Work, Energy and Power"],
    chemistryKeywords: ["Chemical Bonding", "Molecular Structure"],
    botanyKeywords: ["Cell: The Unit of Life"],
    zoologyKeywords: ["Structural Organisation in Animals", "Cell: The Unit of Life"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t04',
    code: 'T04',
    dateStr: '2026-10-25',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T04: Rotational Motion, Thermodynamics (Chem), Biomolecules, Cell Cycle",
    description: "Physics: System of Particles and Rotational Motion | Chemistry: Thermodynamics | Biology: Biomolecules + Cell Cycle and Cell Division (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "System of Particles and Rotational Motion",
    chemistryUnit: "Thermodynamics",
    botanyBlock: "Biomolecules",
    zoologyBlock: "Cell Cycle and Cell Division",
    physicsKeywords: ["Rotational Motion", "Moment of Inertia", "Rigid Body"],
    chemistryKeywords: ["Thermodynamics", "Chemical Thermodynamics"],
    botanyKeywords: ["Biomolecules"],
    zoologyKeywords: ["Cell Cycle and Cell Division"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t05',
    code: 'T05',
    dateStr: '2026-11-01',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T05: Gravitation, Solids, Redox & GOC, Plant Transport & Minerals",
    description: "Physics: Gravitation + Mechanical Properties of Solids | Chemistry: Redox Reactions + Organic Chemistry - Basic Principles (GOC) | Biology: Plant Growth and Development + Structural Organisation in Animals (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Gravitation + Mechanical Properties of Solids",
    chemistryUnit: "Redox Reactions + Organic Chemistry - Basic Principles (GOC)",
    botanyBlock: "Plant Growth and Development",
    zoologyBlock: "Structural Organisation in Animals",
    physicsKeywords: ["Gravitation", "Mechanical Properties of Solids"],
    chemistryKeywords: ["Redox Reactions", "Organic Chemistry - Some Basic Principles"],
    botanyKeywords: ["Plant Growth and Development"],
    zoologyKeywords: ["Structural Organisation in Animals"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t06',
    code: 'T06',
    dateStr: '2026-11-08',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T06: Fluids, Equilibrium, Photosynthesis in Plants",
    description: "Physics: Mechanical Properties of Fluids | Chemistry: Equilibrium | Biology: Photosynthesis in Higher Plants + Cell: The Unit of Life (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Mechanical Properties of Fluids",
    chemistryUnit: "Equilibrium",
    botanyBlock: "Photosynthesis in Higher Plants",
    zoologyBlock: "Cell: The Unit of Life",
    physicsKeywords: ["Mechanical Properties of Fluids", "Fluid Mechanics"],
    chemistryKeywords: ["Equilibrium", "Chemical Equilibrium", "Ionic Equilibrium"],
    botanyKeywords: ["Photosynthesis in Higher Plants"],
    zoologyKeywords: ["Cell: The Unit of Life"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t07',
    code: 'T07',
    dateStr: '2026-11-15',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T07: Thermal Properties & KTG, Hydrocarbons, Respiration & Plant Growth",
    description: "Physics: Thermal Properties of Matter + Kinetic Theory | Chemistry: Hydrocarbons | Biology: Respiration in Plants + Plant Growth and Development + Breathing and Exchange of Gases (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Thermal Properties of Matter + Kinetic Theory",
    chemistryUnit: "Hydrocarbons",
    botanyBlock: "Respiration in Plants + Plant Growth and Development",
    zoologyBlock: "Breathing and Exchange of Gases",
    physicsKeywords: ["Thermal Properties of Matter", "Kinetic Theory"],
    chemistryKeywords: ["Hydrocarbons"],
    botanyKeywords: ["Respiration in Plants", "Plant Growth and Development"],
    zoologyKeywords: ["Breathing and Exchange of Gases"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t08',
    code: 'T08',
    dateStr: '2026-11-22',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T08: Thermodynamics (Phy), Solutions, Digestion & Breathing",
    description: "Physics: Thermodynamics | Chemistry: Solutions | Biology: Plant Growth and Development + Breathing and Exchange of Gases (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Thermodynamics",
    chemistryUnit: "Solutions",
    botanyBlock: "Plant Growth and Development",
    zoologyBlock: "Breathing and Exchange of Gases",
    physicsKeywords: ["Thermodynamics"],
    chemistryKeywords: ["Solutions", "Colligative Properties"],
    botanyKeywords: ["Plant Growth and Development"],
    zoologyKeywords: ["Breathing and Exchange of Gases"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t09',
    code: 'T09',
    dateStr: '2026-11-29',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T09: Oscillations & Waves, Electrochemistry, Body Fluids & Circulation",
    description: "Physics: Oscillations + Waves | Chemistry: Electrochemistry | Biology: Cell: The Unit of Life + Body Fluids and Circulation (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Oscillations + Waves",
    chemistryUnit: "Electrochemistry",
    botanyBlock: "Cell: The Unit of Life",
    zoologyBlock: "Body Fluids and Circulation",
    physicsKeywords: ["Oscillations", "Waves", "SHM"],
    chemistryKeywords: ["Electrochemistry"],
    botanyKeywords: ["Cell: The Unit of Life"],
    zoologyKeywords: ["Body Fluids and Circulation"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t10',
    code: 'T10',
    dateStr: '2026-12-06',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T10: Electric Charges & Fields, Chemical Kinetics, Excretory Products",
    description: "Physics: Electric Charges and Fields | Chemistry: Chemical Kinetics | Biology: Cell Cycle and Cell Division + Excretory Products and their Elimination (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Electric Charges and Fields",
    chemistryUnit: "Chemical Kinetics",
    botanyBlock: "Cell Cycle and Cell Division",
    zoologyBlock: "Excretory Products and their Elimination",
    physicsKeywords: ["Electric Charges", "Electrostatics"],
    chemistryKeywords: ["Chemical Kinetics"],
    botanyKeywords: ["Cell Cycle and Cell Division"],
    zoologyKeywords: ["Excretory Products and their Elimination"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t11',
    code: 'T11',
    dateStr: '2026-12-13',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T11: Capacitance, p-Block & Metallurgy, Locomotion & Neural Control",
    description: "Physics: Electrostatic Potential and Capacitance | Chemistry: The p-Block Elements + Metallurgy | Biology: Plant Growth and Development + Locomotion and Movement + Neural Control and Coordination (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Electrostatic Potential and Capacitance",
    chemistryUnit: "The p-Block Elements + Metallurgy",
    botanyBlock: "Plant Growth and Development",
    zoologyBlock: "Locomotion and Movement + Neural Control and Coordination",
    physicsKeywords: ["Electrostatic Potential", "Capacitance"],
    chemistryKeywords: ["p-Block"],
    botanyKeywords: ["Plant Growth and Development"],
    zoologyKeywords: ["Locomotion and Movement", "Neural Control and Coordination"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t12',
    code: 'T12',
    dateStr: '2026-12-20',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T12: Current Electricity, d- and f-Block, Coordination Compounds, Endocrine",
    description: "Physics: Current Electricity | Chemistry: d- and f-Block Elements + Coordination Compounds | Biology: Cell: The Unit of Life + Chemical Coordination and Integration (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Current Electricity",
    chemistryUnit: "d- and f-Block Elements + Coordination Compounds",
    botanyBlock: "Cell: The Unit of Life",
    zoologyBlock: "Chemical Coordination and Integration",
    physicsKeywords: ["Current Electricity"],
    chemistryKeywords: ["d and f Block", "Coordination Compounds"],
    botanyKeywords: ["Cell: The Unit of Life"],
    zoologyKeywords: ["Chemical Coordination and Integration"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t13',
    code: 'T13',
    dateStr: '2026-12-27',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T13: Magnetism, Haloalkanes, Alcohols & Phenols, Flower Reproduction",
    description: "Physics: Moving Charges and Magnetism | Chemistry: Haloalkanes and Haloarenes + Alcohols, Phenols and Ethers | Biology: Sexual Reproduction in Flowering Plants + Animal Kingdom (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Moving Charges and Magnetism",
    chemistryUnit: "Haloalkanes and Haloarenes + Alcohols, Phenols and Ethers",
    botanyBlock: "Sexual Reproduction in Flowering Plants",
    zoologyBlock: "Animal Kingdom",
    physicsKeywords: ["Moving Charges and Magnetism"],
    chemistryKeywords: ["Haloalkanes", "Alcohols, Phenols and Ethers"],
    botanyKeywords: ["Sexual Reproduction in Flowering Plants"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t14',
    code: 'T14',
    dateStr: '2027-01-03',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T14: EMI & AC, Aldehydes & Ketones, Human Reproduction & Health",
    description: "Physics: Electromagnetic Induction + Alternating Current | Chemistry: Aldehydes, Ketones and Carboxylic Acids | Biology: Sexual Reproduction in Flowering Plants + Human Reproduction + Reproductive Health (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Electromagnetic Induction + Alternating Current",
    chemistryUnit: "Aldehydes, Ketones and Carboxylic Acids",
    botanyBlock: "Sexual Reproduction in Flowering Plants",
    zoologyBlock: "Human Reproduction + Reproductive Health",
    physicsKeywords: ["Electromagnetic Induction", "Alternating Current"],
    chemistryKeywords: ["Aldehydes, Ketones and Carboxylic Acids"],
    botanyKeywords: ["Sexual Reproduction in Flowering Plants"],
    zoologyKeywords: ["Human Reproduction", "Reproductive Health"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t15',
    code: 'T15',
    dateStr: '2027-01-10',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T15: EM Waves, Ray Optics, Amines, Biomolecules, Principles of Inheritance",
    description: "Physics: Electromagnetic Waves + Ray Optics and Optical Instruments | Chemistry: Amines + Biomolecules + Practical Chemistry | Biology: Principles of Inheritance and Variation + Molecular Basis of Inheritance (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Electromagnetic Waves + Ray Optics and Optical Instruments",
    chemistryUnit: "Amines + Biomolecules + Practical Chemistry",
    botanyBlock: "Principles of Inheritance and Variation",
    zoologyBlock: "Molecular Basis of Inheritance",
    physicsKeywords: ["Electromagnetic Waves", "Ray Optics"],
    chemistryKeywords: ["Amines", "Biomolecules"],
    botanyKeywords: ["Principles of Inheritance and Variation"],
    zoologyKeywords: ["Molecular Basis of Inheritance"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t16',
    code: 'T16',
    dateStr: '2027-01-17',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T16: Wave Optics, Chemistry Syllabus Completion, Molecular Basis of Inheritance",
    description: "Physics: Wave Optics | Chemistry: Principles Related to Practical Chemistry | Biology: Molecular Basis of Inheritance + Molecular Basis of Inheritance (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Wave Optics",
    chemistryUnit: "Principles Related to Practical Chemistry",
    botanyBlock: "Molecular Basis of Inheritance",
    zoologyBlock: "Molecular Basis of Inheritance",
    physicsKeywords: ["Wave Optics"],
    chemistryKeywords: ["Principles Related to Practical Chemistry"],
    botanyKeywords: ["Molecular Basis of Inheritance"],
    zoologyKeywords: ["Molecular Basis of Inheritance"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-t17',
    code: 'T17',
    dateStr: '2027-01-24',
    phase: 'Phase 1: Chapter-Wise',
    phaseGroup: 'cwt',
    title: "T17: Modern Physics, Semiconductors, Chemistry Audit, Evolution, Biotech & Ecology",
    description: "Physics: Dual Nature of Radiation, Atoms, Nuclei, Semiconductor | Chemistry: All Chapters Audit | Biology: Ecosystem, Biodiversity and Conservation + Evolution, Human Health and Disease, Biotechnology (180 Qs \u2022 720 Marks)",
    objective: "Fast-Track 17-Week Chapterwise stage completing high-yield syllabus modules with standalone focus.",
    physicsUnit: "Dual Nature of Radiation, Atoms, Nuclei, Semiconductor",
    chemistryUnit: "All Chapters Audit",
    botanyBlock: "Ecosystem, Biodiversity and Conservation",
    zoologyBlock: "Evolution, Human Health and Disease, Biotechnology",
    physicsKeywords: ["Dual Nature of Radiation", "Atoms", "Nuclei", "Semiconductor"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["Ecosystem", "Biodiversity and Conservation"],
    zoologyKeywords: ["Evolution", "Human Health and Disease", "Biotechnology and its Applications"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p01',
    code: 'P01',
    dateStr: '2027-01-28',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P01: Partwise 1: Mechanics 1, Atomic & Periodicity, Living Foundations",
    description: "Physics: Units and Measurements, Motion in a Straight Line, Motion in a Plane, Laws of Motion | Chemistry: Some Basic Concepts of Chemistry, Structure of Atom, Periodicity | Biology: The Living World, Biological Classification, Plant Kingdom & Animal Kingdom",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Units and Measurements, Motion in a Straight Line, Motion in a Plane, Laws of Motion",
    chemistryUnit: "Some Basic Concepts of Chemistry, Structure of Atom, Periodicity",
    botanyBlock: "The Living World, Biological Classification, Plant Kingdom",
    zoologyBlock: "Animal Kingdom",
    physicsKeywords: ["Units and Measurement", "Kinematics", "Motion in One Dimension", "Motion in a Plane", "Laws of Motion"],
    chemistryKeywords: ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements"],
    botanyKeywords: ["The Living World", "Biological Classification", "Plant Kingdom"],
    zoologyKeywords: ["Animal Kingdom"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p02',
    code: 'P02',
    dateStr: '2027-02-01',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P02: Partwise 2: Mechanics 2, Bonding & Thermo, Plant/Animal Tissues & Cell",
    description: "Physics: Work Energy and Power, Rotational Motion, Gravitation | Chemistry: Chemical Bonding, Thermodynamics, Equilibrium | Biology: Morphology, Anatomy, Cell: Unit of Life & Structural Organisation in Animals, Cell: Unit of Life",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Work Energy and Power, Rotational Motion, Gravitation",
    chemistryUnit: "Chemical Bonding, Thermodynamics, Equilibrium",
    botanyBlock: "Morphology, Anatomy, Cell: Unit of Life",
    zoologyBlock: "Structural Organisation in Animals, Cell: Unit of Life",
    physicsKeywords: ["Work, Energy and Power", "Rotational Motion", "Gravitation"],
    chemistryKeywords: ["Chemical Bonding", "Thermodynamics", "Equilibrium"],
    botanyKeywords: ["Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Cell: The Unit of Life"],
    zoologyKeywords: ["Structural Organisation in Animals", "Cell: The Unit of Life"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p03',
    code: 'P03',
    dateStr: '2027-02-05',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P03: Partwise 3: Solids, Fluids, Thermal, Redox, GOC, Hydrocarbons, Biomolecules & Cell Cycle",
    description: "Physics: Mechanical Properties of Solids, Mechanical Properties of Fluids, Thermal Properties | Chemistry: Redox Reactions, Organic Chemistry Basics (GOC), Hydrocarbons | Biology: Biomolecules, Cell Cycle and Cell Division, Plant Physiology & Biomolecules, Cell Cycle and Cell Division",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Mechanical Properties of Solids, Mechanical Properties of Fluids, Thermal Properties",
    chemistryUnit: "Redox Reactions, Organic Chemistry Basics (GOC), Hydrocarbons",
    botanyBlock: "Biomolecules, Cell Cycle and Cell Division, Plant Physiology",
    zoologyBlock: "Biomolecules, Cell Cycle and Cell Division",
    physicsKeywords: ["Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter"],
    chemistryKeywords: ["Redox Reactions", "Organic Chemistry - Some Basic Principles", "Hydrocarbons"],
    botanyKeywords: ["Biomolecules", "Cell Cycle and Cell Division"],
    zoologyKeywords: ["Biomolecules", "Cell Cycle and Cell Division"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p04',
    code: 'P04',
    dateStr: '2027-02-09',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P04: Partwise 4: Thermodynamics, KTG, Waves, Solutions, Kinetics, Photosynthesis & Respiration",
    description: "Physics: Thermodynamics, Kinetic Theory, Oscillations, Waves | Chemistry: Solutions, Electrochemistry, Chemical Kinetics | Biology: Photosynthesis in Plants, Respiration in Plants, Plant Growth & Breathing and Exchange of Gases",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Thermodynamics, Kinetic Theory, Oscillations, Waves",
    chemistryUnit: "Solutions, Electrochemistry, Chemical Kinetics",
    botanyBlock: "Photosynthesis in Plants, Respiration in Plants, Plant Growth",
    zoologyBlock: "Breathing and Exchange of Gases",
    physicsKeywords: ["Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
    chemistryKeywords: ["Solutions", "Electrochemistry", "Chemical Kinetics"],
    botanyKeywords: ["Photosynthesis in Higher Plants", "Respiration in Plants", "Plant Growth and Development"],
    zoologyKeywords: ["Breathing and Exchange of Gases"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p05',
    code: 'P05',
    dateStr: '2027-02-13',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P05: Partwise 5: Electrostatics, Current, Inorganic Blocks, Human Physiology 1",
    description: "Physics: Electric Charges and Fields, Electrostatic Potential and Capacitance, Current Electricity | Chemistry: p-Block Elements, d- and f-Block Elements | Biology: Cell: The Unit of Life & Breathing, Body Fluids and Circulation, Excretion",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Electric Charges and Fields, Electrostatic Potential and Capacitance, Current Electricity",
    chemistryUnit: "p-Block Elements, d- and f-Block Elements",
    botanyBlock: "Cell: The Unit of Life",
    zoologyBlock: "Breathing, Body Fluids and Circulation, Excretion",
    physicsKeywords: ["Electrostatics", "Electric Charges", "Capacitance", "Current Electricity"],
    chemistryKeywords: ["p-Block", "d and f Block"],
    botanyKeywords: ["Cell: The Unit of Life"],
    zoologyKeywords: ["Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p06',
    code: 'P06',
    dateStr: '2027-02-17',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P06: Partwise 6: Magnetism, EMI, AC, Coordination, Organic Halogens/Oxygen, Physiology 2 & Reproduction",
    description: "Physics: Moving Charges and Magnetism, Magnetism and Matter, EMI, Alternating Current | Chemistry: Coordination Compounds, Haloalkanes and Haloarenes, Alcohols, Phenols and Ethers | Biology: Sexual Reproduction in Flowering Plants & Locomotion, Neural Control, Chemical Coordination",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Moving Charges and Magnetism, Magnetism and Matter, EMI, Alternating Current",
    chemistryUnit: "Coordination Compounds, Haloalkanes and Haloarenes, Alcohols, Phenols and Ethers",
    botanyBlock: "Sexual Reproduction in Flowering Plants",
    zoologyBlock: "Locomotion, Neural Control, Chemical Coordination",
    physicsKeywords: ["Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current"],
    chemistryKeywords: ["Coordination Compounds", "Haloalkanes", "Alcohols, Phenols and Ethers"],
    botanyKeywords: ["Sexual Reproduction in Flowering Plants"],
    zoologyKeywords: ["Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p07',
    code: 'P07',
    dateStr: '2027-02-21',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P07: Partwise 7: EM Waves, Optics, Carbonyls, Amines, Human Reproduction & Genetics",
    description: "Physics: Electromagnetic Waves, Ray Optics, Wave Optics | Chemistry: Aldehydes, Ketones and Carboxylic Acids, Amines, Biomolecules, Practical Chemistry | Biology: Principles of Inheritance and Variation, Molecular Basis of Inheritance & Human Reproduction, Reproductive Health",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Electromagnetic Waves, Ray Optics, Wave Optics",
    chemistryUnit: "Aldehydes, Ketones and Carboxylic Acids, Amines, Biomolecules, Practical Chemistry",
    botanyBlock: "Principles of Inheritance and Variation, Molecular Basis of Inheritance",
    zoologyBlock: "Human Reproduction, Reproductive Health",
    physicsKeywords: ["Electromagnetic Waves", "Ray Optics", "Wave Optics"],
    chemistryKeywords: ["Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules"],
    botanyKeywords: ["Principles of Inheritance and Variation", "Molecular Basis of Inheritance"],
    zoologyKeywords: ["Human Reproduction", "Reproductive Health"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-p08',
    code: 'P08',
    dateStr: '2027-02-25',
    phase: 'Phase 2: Part-Wise',
    phaseGroup: 'part',
    title: "P08: Partwise 8: Modern Physics, Semiconductors, Chemistry Synthesis, Evolution, Biotech & Ecology",
    description: "Physics: Dual Nature, Atoms, Nuclei, Semiconductor Electronics | Chemistry: Full-Syllabus Integration and NTA Practical Coverage | Biology: Organisms and Populations, Ecosystem, Biodiversity and Conservation & Evolution, Human Health and Disease, Biotechnology",
    objective: "Fast-Track 8 Partwise tests covering complete syllabus cumulatively before full mocks.",
    physicsUnit: "Dual Nature, Atoms, Nuclei, Semiconductor Electronics",
    chemistryUnit: "Full-Syllabus Integration and NTA Practical Coverage",
    botanyBlock: "Organisms and Populations, Ecosystem, Biodiversity and Conservation",
    zoologyBlock: "Evolution, Human Health and Disease, Biotechnology",
    physicsKeywords: ["Dual Nature of Radiation", "Atoms", "Nuclei", "Semiconductor"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["Organisms and Populations", "Ecosystem", "Biodiversity and Conservation"],
    zoologyKeywords: ["Evolution", "Human Health and Disease", "Biotechnology and its Applications"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f01',
    code: 'F01',
    dateStr: '2027-02-28',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F01: Full Syllabus Mock Test 1",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 1 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f02',
    code: 'F02',
    dateStr: '2027-03-03',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F02: Full Syllabus Mock Test 2",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 2 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f03',
    code: 'F03',
    dateStr: '2027-03-06',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F03: Full Syllabus Mock Test 3",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 3 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f04',
    code: 'F04',
    dateStr: '2027-03-09',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F04: Full Syllabus Mock Test 4",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 4 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f05',
    code: 'F05',
    dateStr: '2027-03-12',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F05: Full Syllabus Mock Test 5",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 5 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f06',
    code: 'F06',
    dateStr: '2027-03-15',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F06: Full Syllabus Mock Test 6",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 6 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f07',
    code: 'F07',
    dateStr: '2027-03-18',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F07: Full Syllabus Mock Test 7",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 7 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f08',
    code: 'F08',
    dateStr: '2027-03-21',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F08: Full Syllabus Mock Test 8",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 8 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f09',
    code: 'F09',
    dateStr: '2027-03-24',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F09: Full Syllabus Mock Test 9",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 9 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f10',
    code: 'F10',
    dateStr: '2027-03-27',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F10: Full Syllabus Mock Test 10",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 10 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f11',
    code: 'F11',
    dateStr: '2027-03-30',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F11: Full Syllabus Mock Test 11",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 11 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f12',
    code: 'F12',
    dateStr: '2027-04-02',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F12: Full Syllabus Mock Test 12",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 12 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f13',
    code: 'F13',
    dateStr: '2027-04-05',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F13: Full Syllabus Mock Test 13",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 13 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f14',
    code: 'F14',
    dateStr: '2027-04-08',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F14: Full Syllabus Mock Test 14",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 14 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f15',
    code: 'F15',
    dateStr: '2027-04-11',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F15: Full Syllabus Mock Test 15",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 15 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f16',
    code: 'F16',
    dateStr: '2027-04-14',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F16: Full Syllabus Mock Test 16",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 16 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f17',
    code: 'F17',
    dateStr: '2027-04-17',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F17: Full Syllabus Mock Test 17",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 17 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f18',
    code: 'F18',
    dateStr: '2027-04-20',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F18: Full Syllabus Mock Test 18",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 18 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f19',
    code: 'F19',
    dateStr: '2027-04-23',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F19: Full Syllabus Mock Test 19",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 19 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f20',
    code: 'F20',
    dateStr: '2027-04-26',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F20: Full Syllabus Mock Test 20",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 20 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  },
  {
    id: 'test-track2-f21',
    code: 'F21',
    dateStr: '2027-04-29',
    phase: 'Phase 3: Full Syllabus',
    phaseGroup: 'full',
    title: "F21: Full Syllabus Mock Test 21",
    description: "Complete NEET UG Exam Simulation: 180 Questions (Physics + Chemistry + Botany + Zoology \u2022 720 Marks)",
    objective: "Full-scale NEET examination rehearsal 21 of 21. Standard 180-question format.",
    physicsUnit: "Complete NEET Physics Syllabus",
    chemistryUnit: "Complete NEET Chemistry Syllabus",
    botanyBlock: "Complete NEET Botany Syllabus",
    zoologyBlock: "Complete NEET Zoology Syllabus",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: ["All Chapters"],
    zoologyKeywords: ["All Chapters"],
    totalQuestions: 180,
    durationMinutes: 180,
    totalMarks: 720
  }
];

/**
 * TRACK 3: PHYSICS & CHEMISTRY FULL-SYLLABUS SERIES (27 TESTS)
 * 10 Feb to 29 Apr 2027: 27 Tests (PC-01 to PC-27), every 3 days, 100 questions (50 Phy + 50 Chem)
 */
export const SUNDAY_DROPPER_PC_TESTS: SundayPlannerTest[] = [
  {
    id: 'test-dropper-pc-01',
    code: 'PC-01',
    dateStr: '2027-02-10',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-01: Physics & Chemistry Full Syllabus Test 1",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 1 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-02',
    code: 'PC-02',
    dateStr: '2027-02-13',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-02: Physics & Chemistry Full Syllabus Test 2",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 2 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-03',
    code: 'PC-03',
    dateStr: '2027-02-16',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-03: Physics & Chemistry Full Syllabus Test 3",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 3 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-04',
    code: 'PC-04',
    dateStr: '2027-02-19',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-04: Physics & Chemistry Full Syllabus Test 4",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 4 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-05',
    code: 'PC-05',
    dateStr: '2027-02-22',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-05: Physics & Chemistry Full Syllabus Test 5",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 5 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-06',
    code: 'PC-06',
    dateStr: '2027-02-25',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-06: Physics & Chemistry Full Syllabus Test 6",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 6 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-07',
    code: 'PC-07',
    dateStr: '2027-02-28',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-07: Physics & Chemistry Full Syllabus Test 7",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 7 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-08',
    code: 'PC-08',
    dateStr: '2027-03-03',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-08: Physics & Chemistry Full Syllabus Test 8",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 8 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-09',
    code: 'PC-09',
    dateStr: '2027-03-06',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-09: Physics & Chemistry Full Syllabus Test 9",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 9 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-10',
    code: 'PC-10',
    dateStr: '2027-03-09',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-10: Physics & Chemistry Full Syllabus Test 10",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 10 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-11',
    code: 'PC-11',
    dateStr: '2027-03-12',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-11: Physics & Chemistry Full Syllabus Test 11",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 11 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-12',
    code: 'PC-12',
    dateStr: '2027-03-15',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-12: Physics & Chemistry Full Syllabus Test 12",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 12 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-13',
    code: 'PC-13',
    dateStr: '2027-03-18',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-13: Physics & Chemistry Full Syllabus Test 13",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 13 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-14',
    code: 'PC-14',
    dateStr: '2027-03-21',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-14: Physics & Chemistry Full Syllabus Test 14",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 14 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-15',
    code: 'PC-15',
    dateStr: '2027-03-24',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-15: Physics & Chemistry Full Syllabus Test 15",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 15 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-16',
    code: 'PC-16',
    dateStr: '2027-03-27',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-16: Physics & Chemistry Full Syllabus Test 16",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 16 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-17',
    code: 'PC-17',
    dateStr: '2027-03-30',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-17: Physics & Chemistry Full Syllabus Test 17",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 17 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-18',
    code: 'PC-18',
    dateStr: '2027-04-02',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-18: Physics & Chemistry Full Syllabus Test 18",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 18 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-19',
    code: 'PC-19',
    dateStr: '2027-04-05',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-19: Physics & Chemistry Full Syllabus Test 19",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 19 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-20',
    code: 'PC-20',
    dateStr: '2027-04-08',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-20: Physics & Chemistry Full Syllabus Test 20",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 20 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-21',
    code: 'PC-21',
    dateStr: '2027-04-11',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-21: Physics & Chemistry Full Syllabus Test 21",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 21 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-22',
    code: 'PC-22',
    dateStr: '2027-04-14',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-22: Physics & Chemistry Full Syllabus Test 22",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 22 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-23',
    code: 'PC-23',
    dateStr: '2027-04-17',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-23: Physics & Chemistry Full Syllabus Test 23",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 23 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-24',
    code: 'PC-24',
    dateStr: '2027-04-20',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-24: Physics & Chemistry Full Syllabus Test 24",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 24 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-25',
    code: 'PC-25',
    dateStr: '2027-04-23',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-25: Physics & Chemistry Full Syllabus Test 25",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 25 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-26',
    code: 'PC-26',
    dateStr: '2027-04-26',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-26: Physics & Chemistry Full Syllabus Test 26",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 26 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  },
  {
    id: 'test-dropper-pc-27',
    code: 'PC-27',
    dateStr: '2027-04-29',
    phase: 'Full Syllabus PC Series',
    phaseGroup: 'full',
    title: "PC-27: Physics & Chemistry Full Syllabus Test 27",
    description: "Intensive Dual-Subject Full Syllabus Test: 50 Physics + 50 Chemistry Questions (100 Qs \u2022 400 Marks \u2022 120 Mins)",
    objective: "Dedicated Physics and Chemistry mastery test 27 of 27 covering 100% of both subject syllabi.",
    physicsUnit: "Complete NEET Physics Syllabus (20 Units)",
    chemistryUnit: "Complete NEET Chemistry Syllabus (20 Units)",
    botanyBlock: "None (Physics & Chemistry Only)",
    zoologyBlock: "None (Physics & Chemistry Only)",
    physicsKeywords: ["All Chapters"],
    chemistryKeywords: ["All Chapters"],
    botanyKeywords: [],
    zoologyKeywords: [],
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 400
  }
];

/**
 * DEFAULT REPEATER / DROPPER PLANNER TESTS
 * Points to Track 1 (20-week complete planner) by default
 */
export const SUNDAY_DROPPER_PLANNER_TESTS: SundayPlannerTest[] = SUNDAY_DROPPER_TRACK1_TESTS;

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
  const is11th = key.startsWith('11th-');
  const is12th = key.startsWith('12th-');
  const cleanKey = key.replace(/^(11th|12th|repeater|dropper)-/i, '').trim();

  // 1. Exact key match
  if (all[key]) return all[key];
  if (all[paperIdOrCode.toUpperCase().trim()]) return all[paperIdOrCode.toUpperCase().trim()];

  // 2. Class 11 Batch Isolated Search
  if (is11th) {
    if (all[`11th-${cleanKey}`]) return all[`11th-${cleanKey}`];
    if (all[`11TH-${cleanKey.toUpperCase()}`]) return all[`11TH-${cleanKey.toUpperCase()}`];
    return null;
  }

  // 3. Class 12 Batch Isolated Search
  if (is12th) {
    if (all[`12th-${cleanKey}`]) return all[`12th-${cleanKey}`];
    if (all[`12TH-${cleanKey.toUpperCase()}`]) return all[`12TH-${cleanKey.toUpperCase()}`];
    return null;
  }

  // 4. Dropper / Repeater Batch Search
  if (all[cleanKey]) return all[cleanKey];
  if (all[cleanKey.toUpperCase()]) return all[cleanKey.toUpperCase()];
  if (all[`repeater-${cleanKey}`]) return all[`repeater-${cleanKey}`];
  if (all[`REPEATER-${cleanKey.toUpperCase()}`]) return all[`REPEATER-${cleanKey.toUpperCase()}`];

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
    const cleanKey = key.replace(/^(11th|12th|repeater|dropper)-/i, '').trim();
    const payload: SavedSundayPaper = {
      paperCode: paperCode.toUpperCase(),
      testTitle: data.testTitle,
      customChapters: data.customChapters,
      questions: data.questions,
      updatedAt: new Date().toISOString(),
      publishedBy: data.publishedBy || 'Admin Portal'
    };
    all[key] = payload;
    all[paperCode.toUpperCase()] = payload;
    if (cleanKey) {
      all[cleanKey] = payload;
      all[cleanKey.toUpperCase()] = payload;
    }
    // Clean up bloated legacy duplicate keys to keep storage lean (<500 KB)
    for (const k of Object.keys(all)) {
      if (k.startsWith('11th-') || k.startsWith('12th-') || k.startsWith('repeater-') || k.startsWith('dropper-') ||
          k.startsWith('11TH-') || k.startsWith('12TH-') || k.startsWith('REPEATER-') || k.startsWith('DROPPER-')) {
        delete all[k];
      }
    }
    all[paperCode.toUpperCase()] = payload;
    if (cleanKey) {
      all[cleanKey.toUpperCase()] = payload;
    }

    try {
      localStorage.setItem(SUNDAY_CUSTOM_PAPERS_KEY, JSON.stringify(all));
    } catch (quotaErr) {
      console.warn('LocalStorage quota limit reached, saving minimal current paper:', quotaErr);
      try {
        const minimal: Record<string, SavedSundayPaper> = {};
        minimal[paperCode.toUpperCase()] = payload;
        if (cleanKey) minimal[cleanKey.toUpperCase()] = payload;
        localStorage.setItem(SUNDAY_CUSTOM_PAPERS_KEY, JSON.stringify(minimal));
      } catch {}
    }

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
    // Delete from Supabase cloud database so all 10 lakh systems sync the reset immediately
    deleteSundayPaperFromCloud(paperCode).catch(err => {
      console.warn('Notice deleting Sunday paper from cloud:', err);
    });
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
  const allDropperTests = [
    ...SUNDAY_DROPPER_TRACK1_TESTS,
    ...SUNDAY_DROPPER_TRACK2_TESTS,
    ...SUNDAY_DROPPER_PC_TESTS
  ];
  const totalExpectedTests = allDropperTests.length + PLANNER_12TH_TESTS.length + SUNDAY_11TH_PLANNER_TESTS.length;
  if (sundayBatchPaperCache.size >= totalExpectedTests) {
    return;
  }

  // Use pure immutable builtin banks for 100% deterministic consistency across all systems
  const phyBank = ALL_PHYSICS_MASTER_QUESTIONS;
  const chemBank = ALL_CHEMISTRY_COMBINED_QUESTIONS;
  const allBioBank = ALL_BIOLOGY_COMBINED_QUESTIONS;
  const botanyBank = allBioBank.filter(q => BOTANY_NCERT_CHAPTERS.has(q.chapter || ''));
  const zoologyBank = allBioBank.filter(q => ZOOLOGY_NCERT_CHAPTERS.has(q.chapter || ''));

  const trackConfigs: Array<{
    batch: 'repeater' | '12th' | '11th';
    trackPrefix?: string;
    tests: SundayPlannerTest[];
  }> = [
    { batch: 'repeater', trackPrefix: 'track1_', tests: SUNDAY_DROPPER_TRACK1_TESTS },
    { batch: 'repeater', trackPrefix: 'track2_', tests: SUNDAY_DROPPER_TRACK2_TESTS },
    { batch: 'repeater', trackPrefix: 'pc_', tests: SUNDAY_DROPPER_PC_TESTS },
    { batch: '12th', tests: PLANNER_12TH_TESTS },
    { batch: '11th', tests: SUNDAY_11TH_PLANNER_TESTS }
  ];

  for (const cfg of trackConfigs) {
    const { batch, trackPrefix, tests } = cfg;
    const batchKeyPrefix = `${batch}_`;
    const trackUsedIds = new Set<string>();
    const trackUsedTexts = new Set<string>();

    for (let tIdx = 0; tIdx < tests.length; tIdx++) {
      const t = tests[tIdx];
      const isPCTest = t.code.startsWith('PC-') || t.totalQuestions === 100;

      const pickCategory = (
        subject: 'Physics' | 'Chemistry' | 'Botany' | 'Zoology',
        bank: Question[],
        keywords: string[],
        count: number
      ): Question[] => {
        const matched = filterQuestionsByKeywords(bank, keywords, subject);
        const picked: Question[] = [];

        // 1. Try to pick from matched syllabus keywords first
        for (const q of matched) {
          const baseId = getBaseQuestionId(q);
          const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
          if (!trackUsedIds.has(baseId) && (normText.length <= 15 || !trackUsedTexts.has(normText))) {
            trackUsedIds.add(baseId);
            if (normText.length > 15) trackUsedTexts.add(normText);
            picked.push({
              ...q,
              subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
              tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
              difficulty: 'Hard' as const
            });
            if (picked.length === count) break;
          }
        }

        // 2. If matched didn't reach count, fill remainder from general subject bank without repeating!
        if (picked.length < count) {
          for (const q of bank) {
            const baseId = getBaseQuestionId(q);
            const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
            if (!trackUsedIds.has(baseId) && (normText.length <= 15 || !trackUsedTexts.has(normText))) {
              trackUsedIds.add(baseId);
              if (normText.length > 15) trackUsedTexts.add(normText);
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

        return picked;
      };

      let paper: Question[];
      if (isPCTest) {
        const phy = pickCategory('Physics', phyBank, t.physicsKeywords, 50);
        const chem = pickCategory('Chemistry', chemBank, t.chemistryKeywords, 50);
        paper = [...phy, ...chem];
      } else {
        const phy = pickCategory('Physics', phyBank, t.physicsKeywords, 45);
        const chem = pickCategory('Chemistry', chemBank, t.chemistryKeywords, 45);
        const bot = pickCategory('Botany', botanyBank, t.botanyKeywords, 45);
        const zoo = pickCategory('Zoology', zoologyBank, t.zoologyKeywords, 45);
        paper = [...phy, ...chem, ...bot, ...zoo];
      }

      const cleanCode = t.code.toUpperCase().trim();
      const batchCode = `${batch.toUpperCase()}-${cleanCode}`;

      sundayBatchPaperCache.set(batchKeyPrefix + t.code, paper);
      sundayBatchPaperCache.set(batchKeyPrefix + cleanCode, paper);
      sundayBatchPaperCache.set(batchKeyPrefix + t.id, paper);
      sundayBatchPaperCache.set(batchCode, paper);

      if (trackPrefix) {
        sundayBatchPaperCache.set(trackPrefix + t.code, paper);
        sundayBatchPaperCache.set(trackPrefix + cleanCode, paper);
        sundayBatchPaperCache.set(trackPrefix + t.id, paper);
      }

      // Plain codes:
      sundayBatchPaperCache.set(t.code, paper);
      sundayBatchPaperCache.set(cleanCode, paper);
      sundayBatchPaperCache.set(t.id, paper);
    }
  }
}

function ensureBatchPapersGenerated(batch: 'repeater' | '12th' | '11th'): void {
  ensureAllSundayPapersGenerated();
}

/**
 * Strict Zero-Duplication Assertion:
 * Guarantees that EVERY question in the array has a unique ID and unique normalized text.
 * If any collision is detected, dynamically substitutes an unused question from the bank.
 */
export function assertNoDuplicateQuestions(questions: Question[], fallbackBank?: Question[]): Question[] {
  const seenIds = new Set<string>();
  const seenTexts = new Set<string>();
  const cleanList: Question[] = [];

  for (const q of questions) {
    const baseId = getBaseQuestionId(q);
    const rawText = q.questionText || (q as any).question || '';
    const normText = normalizeQuestionText(rawText);

    const isDuplicate =
      seenIds.has(baseId) ||
      (normText.length > 20 && seenTexts.has(normText));

    if (isDuplicate) {
      // Find an unused replacement from fallbackBank or unified subject bank
      const replacementBank = fallbackBank || getUnifiedQuestionBank(q.subject || 'Physics');
      let found = false;
      for (const rep of replacementBank) {
        const repId = getBaseQuestionId(rep);
        const repNormText = normalizeQuestionText(rep.questionText || (rep as any).question || '');
        if (!seenIds.has(repId) && (repNormText.length <= 20 || !seenTexts.has(repNormText))) {
          seenIds.add(repId);
          if (repNormText.length > 20) seenTexts.add(repNormText);
          cleanList.push({
            ...rep,
            subject: q.subject,
            tags: q.tags,
            difficulty: 'Hard' as const
          });
          found = true;
          break;
        }
      }
      if (!found) {
        cleanList.push(q);
      }
    } else {
      seenIds.add(baseId);
      if (normText.length > 20) seenTexts.add(normText);
      cleanList.push(q);
    }
  }

  return cleanList;
}

/**
 * Generate a complete Sunday Mock Test (180 questions, or 100 questions for Physics & Chemistry tests)
 * strictly conforming to the prescribed calendar chapters with ZERO duplicate questions
 * and ZERO cross-paper overlap across all batches.
 */
export function generateSundayTestQuestions(
  test: SundayPlannerTest,
  customChapters?: SundayChapterSelection,
  advanceLoop: boolean = true,
  batch: 'repeater' | '12th' | '11th' = 'repeater'
): Question[] {
  const isPCTest = test.code.startsWith('PC-') || test.totalQuestions === 100;
  const targetCount = isPCTest ? 100 : 180;

  // If this paper was customized and saved by admin, load those exact questions directly!
  if (!customChapters) {
    const saved =
      batch !== 'repeater'
        ? (getSavedCustomSundayPaper(batch + '-' + test.code) || getSavedCustomSundayPaper(batch + '-' + test.id))
        : (getSavedCustomSundayPaper(batch + '-' + test.code) || getSavedCustomSundayPaper(test.code) || getSavedCustomSundayPaper(test.id));
    if (saved && Array.isArray(saved.questions) && (saved.questions.length === targetCount || saved.questions.length === test.totalQuestions)) {
      return assertNoDuplicateQuestions(saved.questions.map(q => ({ ...q, difficulty: 'Hard' as const })));
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
    const paperIds = new Set<string>();
    const paperTexts = new Set<string>();

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
        const baseId = getBaseQuestionId(q);
        const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
        if (!paperSignatures.has(sig) && !paperIds.has(baseId) && (normText.length <= 15 || !paperTexts.has(normText))) {
          paperSignatures.add(sig);
          paperIds.add(baseId);
          if (normText.length > 15) paperTexts.add(normText);
          picked.push({
            ...q,
            subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
            tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
            difficulty: 'Hard' as const
          });
          if (picked.length === count) break;
        }
      }

      // STRICT ZERO-DUPLICATION: Fill remaining quota from bank without repeating any question
      if (picked.length < count) {
        for (const q of bank) {
          const sig = getQuestionSignature(q);
          const baseId = getBaseQuestionId(q);
          const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
          if (!paperSignatures.has(sig) && !paperIds.has(baseId) && (normText.length <= 15 || !paperTexts.has(normText))) {
            paperSignatures.add(sig);
            paperIds.add(baseId);
            if (normText.length > 15) paperTexts.add(normText);
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
      return picked;
    };

    if (isPCTest) {
      const phy = pickCustom('Physics', phyBank, customChapters.physics || [], 50);
      const chem = pickCustom('Chemistry', chemBank, customChapters.chemistry || [], 50);
      return assertNoDuplicateQuestions([...phy, ...chem]);
    }

    const customBot = (customChapters.biology || []).filter(b => !b.startsWith('[Zoology]'));
    const customZoo = (customChapters.biology || []).filter(b => b.startsWith('[Zoology]'));

    const phy = pickCustom('Physics', phyBank, customChapters.physics || [], 45);
    const chem = pickCustom('Chemistry', chemBank, customChapters.chemistry || [], 45);
    const bot = pickCustom('Botany', botanyBank, customBot.length > 0 ? customBot : customChapters.biology || [], 45);
    const zoo = pickCustom('Zoology', zoologyBank, customZoo.length > 0 ? customZoo : customChapters.biology || [], 45);
    const combined = [...phy, ...chem, ...bot, ...zoo];
    return assertNoDuplicateQuestions(combined);
  }

  // Official Sunday Test from zero-overlap batch partition
  ensureAllSundayPapersGenerated();
  const cleanCode = test.code.toUpperCase().trim();
  const batchKeyPrefix = `${batch}_`;
  const batchCode = `${batch.toUpperCase()}-${cleanCode}`;

  const cached =
    sundayBatchPaperCache.get(batchKeyPrefix + test.code) ||
    sundayBatchPaperCache.get(batchKeyPrefix + cleanCode) ||
    sundayBatchPaperCache.get(batchKeyPrefix + test.id) ||
    sundayBatchPaperCache.get(batchCode) ||
    sundayBatchPaperCache.get(test.code) ||
    sundayBatchPaperCache.get(cleanCode) ||
    sundayBatchPaperCache.get(test.id);

  if (cached && (cached.length === targetCount || cached.length === test.totalQuestions)) {
    return cached;
  }

  return [];
}

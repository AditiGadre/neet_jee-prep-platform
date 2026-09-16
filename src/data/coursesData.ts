import { OnlineCourse } from '../types';

export interface ClassroomLecture {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Biology';
  faculty: string;
  facultyDesignation: string;
  duration: string;
  chapter: string;
  batch: string;
  videoUrl?: string;
  thumbnailUrl: string;
  keyTopics: string[];
  pdfNotesUrl?: string;
  highYieldPoints: number;
}

export const ONLINE_COURSES_DATA: OnlineCourse[] = [
  {
    id: 'course-target-batch',
    title: 'NEET Target Classroom Lectures & Online Batches (2027–2029)',
    batchType: 'Target Batch',
    targetExam: 'NEET',
    duration: 'Multi-Year Structured Classroom Program',
    price: '₹12,499',
    originalPrice: '₹24,999',
    discount: '50% OFF',
    rating: 4.98,
    enrolledCount: 78400,
    badge: 'NEETcbt Flagship Classroom Batch',
    features: [
      'Daily 3-Hour Interactive Physical & Online Classroom Lectures',
      'Audio & 4K Video Explanations for all NCERT Line-by-Line concepts',
      'Micro-Target & Daily Practice Problem (DPP) Generator',
      '10,000+ Active Recall Flashcards for Physics, Chemistry & Biology',
      '50+ High Yield & Part Syllabus Chapter-level Sunday Mock Tests'
    ],
    includes: {
      liveClasses: 'Daily Live Classroom Masterclasses & High-Yield Strategy Sessions',
      recordedClasses: 'Complete 4K Video Lecture Archive with chapter sub-topic index',
      assignments: '30,000+ NCERT-tagged Practice Questions with video hints',
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
    title: 'Classroom Masterclass in Biology by Dr. NK Sharma',
    batchType: 'Masterclass',
    targetExam: 'NEET',
    duration: 'Full Syllabus 38 Chapters Audio & 4K Video Q-Bank',
    price: '₹3,499',
    originalPrice: '₹6,999',
    discount: '50% OFF',
    rating: 4.99,
    enrolledCount: 52100,
    badge: 'Target 360/360 in Biology',
    features: [
      '6,000+ Questions with Audio & Video Solutions by Dr. NK Sharma',
      'Categorized into "Past Year", "Understanding NCERT" & "Mastering NCERT"',
      '60+ Daily Tests with 90 Questions each',
      'Assertion-Reason, Statement I/II, Diagram & Match questions',
      'NCERT Word-by-Word Analysis to catch examiner traps'
    ],
    includes: {
      liveClasses: 'Weekly Live Doubt and Tough Question Decoding sessions',
      recordedClasses: 'Full Audio & Video Explanations for every single NCERT chapter',
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
    title: 'NEETcbt Classroom Lectures & Test Series (CTS)',
    batchType: 'Classroom Test Series',
    targetExam: 'NEET',
    duration: 'Classroom Sessions + Offline Pen & Paper in 150+ Cities',
    price: '₹8,999',
    originalPrice: '₹14,999',
    discount: '40% OFF',
    rating: 4.96,
    enrolledCount: 44300,
    badge: 'Real Classroom & OMR Experience',
    features: [
      'Daily Classroom Lectures with NCERT Line-by-Line Breakdown',
      'Physical Pen & Paper OMR Tests conducted on scheduled Sundays',
      'Available in 150+ Offline Test Centres across India',
      'Same Day OMR Scanning & Instant AIR generation on NEETcbt portal',
      'Includes complementary access to Online Target Batch Q-Bank'
    ],
    includes: {
      liveClasses: 'Physical Classroom Sessions + Post-Test Video Solution Discussions',
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
    title: 'NEET/JEE 2-Year Integrated Classroom Foundation Batch',
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
      'Complete NCERT to Advanced Classroom Masterclasses',
      'Zero-to-Hero conceptual building with physical faculty support',
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
    title: 'Achievers Dropper & Repeater Elite Classroom Batch',
    batchType: 'Dropper Batch',
    targetExam: 'NEET',
    duration: '10 Months Intensive Classroom Program',
    price: '₹18,499',
    originalPrice: '₹39,999',
    discount: '54% OFF',
    rating: 4.95,
    enrolledCount: 29800,
    badge: 'Highest Selection Rate (94.2%)',
    features: [
      'High-velocity full syllabus classroom coverage in 180 days',
      'Emphasis on PYQs (15+ Years) and High-Yield patterns',
      'Daily 2 DPPs + Daily Speed Quizzes in class',
      'AI error log tracking to eliminate recurring mistakes',
      'Personalized test analysis by senior professors'
    ],
    includes: {
      liveClasses: 'Daily 4 Hours Dual-Track Live Classroom Masterclasses',
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
    title: 'Super 60 Days NEET Classroom Rapid Crash Course',
    batchType: 'Crash Course',
    targetExam: 'NEET',
    duration: '60 Days Ultra Rapid Classroom Booster',
    price: '₹6,999',
    originalPrice: '₹14,999',
    discount: '53% OFF',
    rating: 4.85,
    enrolledCount: 41200,
    badge: 'Exam-Ready Score Booster',
    features: [
      '120+ High-Yield Formula and Diagram Revision Modules in classroom',
      '20 Full Syllabus Mock CBT Tests with detailed video solutions',
      'Most Expected 5,000 Questions for the upcoming exam',
      'Time-management drills and elimination trick mastery',
      'Special CBT Pattern trap-question decoding sessions'
    ],
    includes: {
      liveClasses: 'Power-packed 3-hour marathon classroom sessions daily',
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

export const CLASSROOM_LECTURES_DATA: ClassroomLecture[] = [
  // Biology
  {
    id: 'lec-bio-01',
    title: 'Molecular Basis of Inheritance: DNA Replication, Fork & Enzymes',
    subject: 'Biology',
    faculty: 'Dr. NK Sharma',
    facultyDesignation: 'Senior Academic Director (30+ yrs exp)',
    duration: '1h 42m',
    chapter: 'Molecular Basis of Inheritance',
    batch: 'Target Batch 2027–2029',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['DNA Polymerase III & Primase', 'Okazaki Fragments & Ligase', 'Meselson-Stahl Experiment Proof', 'High-Yield Trap Questions'],
    pdfNotesUrl: '#',
    highYieldPoints: 18
  },
  {
    id: 'lec-bio-02',
    title: 'Human Physiology: Neural Control, Axon Potential & Synapse',
    subject: 'Biology',
    faculty: 'Dr. Vivek Sharma',
    facultyDesignation: 'Ex-AIIMS New Delhi Faculty (14+ yrs exp)',
    duration: '1h 28m',
    chapter: 'Neural Control and Coordination',
    batch: 'Classroom Test Series Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Depolarization & Na+/K+ Pump', 'Chemical vs Electrical Synapses', 'Knee-Jerk Reflex Arc', 'Forebrain, Midbrain & Hindbrain'],
    pdfNotesUrl: '#',
    highYieldPoints: 24
  },
  {
    id: 'lec-bio-03',
    title: 'Principles of Inheritance: Monohybrid, Dihybrid & Linkage Maps',
    subject: 'Biology',
    faculty: 'Dr. NK Sharma',
    facultyDesignation: 'Biology Guru & Author',
    duration: '1h 55m',
    chapter: 'Principles of Inheritance and Variation',
    batch: 'Achievers Dropper Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Incomplete Dominance & Codominance', 'Morgan Drosophila Crosses & Linkage', 'Pedigree Chart Decoding Techniques', 'Mendelian Genetic Disorders'],
    pdfNotesUrl: '#',
    highYieldPoints: 32
  },
  {
    id: 'lec-bio-04',
    title: 'Cell Cycle & Cell Division: Mitosis Stages & Meiotic Crossing Over',
    subject: 'Biology',
    faculty: 'Dr. Meenakshi Soni',
    facultyDesignation: 'MAMC Delhi Gold Medalist',
    duration: '1h 15m',
    chapter: 'Cell Cycle and Cell Division',
    batch: 'Foundation 2-Year Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['G1, S Phase & G2 Checkpoints', 'Prophase I Stages (Leptotene to Diakinesis)', 'Synaptonemal Complex & Recombinase', 'Colchicine & Mitotic Poisons'],
    pdfNotesUrl: '#',
    highYieldPoints: 15
  },

  // Physics
  {
    id: 'lec-phy-01',
    title: 'Newton\'s Laws of Motion: Wedge Constraints & Free Body Diagrams (FBD)',
    subject: 'Physics',
    faculty: 'Er. Sandeep Verma',
    facultyDesignation: 'IIT Kanpur Graduate (16+ yrs exp)',
    duration: '1h 50m',
    chapter: 'Laws of Motion',
    batch: 'Target Batch 2027–2029',
    thumbnailUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Normal Reaction on Inclined Surfaces', 'Pulley Block Systems & Tension Shortcuts', 'Friction: Static vs Kinetic vs Rolling', 'Pseudo Force in Accelerating Frames'],
    pdfNotesUrl: '#',
    highYieldPoints: 28
  },
  {
    id: 'lec-phy-02',
    title: 'Electrostatics: Gauss\'s Law, Electric Flux & Potential Dipoles',
    subject: 'Physics',
    faculty: 'Prof. Ramesh Chandra',
    facultyDesignation: 'IIT Bombay Faculty (18+ yrs exp)',
    duration: '1h 35m',
    chapter: 'Electric Charges and Fields',
    batch: 'Classroom Test Series Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Flux Calculation for Cubes & Cylinders', 'Spherical Shell Field Distribution', 'Dipole Field in Axial & Equatorial Plane', 'Conductor Equipotential Properties'],
    pdfNotesUrl: '#',
    highYieldPoints: 20
  },
  {
    id: 'lec-phy-03',
    title: 'Rotational Motion: Moment of Inertia Theorems & Rolling Without Slipping',
    subject: 'Physics',
    faculty: 'Er. Alok Tripathi',
    facultyDesignation: 'IIT Roorkee Alumni (15+ yrs exp)',
    duration: '1h 40m',
    chapter: 'System of Particles and Rotational Motion',
    batch: 'Achievers Dropper Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Parallel & Perpendicular Axis Theorems', 'Torque = I * Alpha Equation', 'Pure Rolling Kinetic Energy Formula', 'Angular Momentum Conservation'],
    pdfNotesUrl: '#',
    highYieldPoints: 22
  },
  {
    id: 'lec-phy-04',
    title: 'Optics: Lens Maker Formula, Total Internal Reflection & Prism Deviation',
    subject: 'Physics',
    faculty: 'Er. Sandeep Verma',
    facultyDesignation: 'IIT Kanpur Graduate',
    duration: '1h 22m',
    chapter: 'Ray Optics and Optical Instruments',
    batch: 'Super 60 Crash Course',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Critical Angle & Fiber Optics Principle', 'Minimum Deviation Formula & Dispersion', 'Combination of Thin Lenses in Contact', 'Astronomical Telescope Magnification'],
    pdfNotesUrl: '#',
    highYieldPoints: 19
  },

  // Chemistry
  {
    id: 'lec-chem-01',
    title: 'Chemical Bonding: Hybridization, VSEPR Theory & Molecular Orbitals (MOT)',
    subject: 'Chemistry',
    faculty: 'Dr. Arvind Joshi',
    facultyDesignation: 'IIT Delhi Doctorate (13+ yrs exp)',
    duration: '1h 38m',
    chapter: 'Chemical Bonding and Molecular Structure',
    batch: 'Target Batch 2027–2029',
    thumbnailUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Bond Order & Magnetic Character in O2/N2', 'Shapes with Lone Pairs (SF4, ClF3, XeF4)', 'Hydrogen Bonding Impact on Boiling Points', 'Dipole Moment Vectors'],
    pdfNotesUrl: '#',
    highYieldPoints: 26
  },
  {
    id: 'lec-chem-02',
    title: 'Organic Mechanisms: SN1 vs SN2, E1/E2 & Markovnikov Rule Traps',
    subject: 'Chemistry',
    faculty: 'Dr. Ananya Ray',
    facultyDesignation: 'IISc Bangalore Researcher (12+ yrs exp)',
    duration: '1h 45m',
    chapter: 'Haloalkanes and Haloarenes',
    batch: 'Classroom Test Series Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Carbocation Rearrangements (Hydride/Methyl Shifts)', 'Polar Protic vs Aprotic Solvent Effects', 'Inversion of Configuration (Walden Inversion)', 'Zaitsev vs Hofmann Elimination'],
    pdfNotesUrl: '#',
    highYieldPoints: 30
  },
  {
    id: 'lec-chem-03',
    title: 'Ionic Equilibrium: pH Calculations, Buffer Solutions & Solubility Product (Ksp)',
    subject: 'Chemistry',
    faculty: 'Dr. Arvind Joshi',
    facultyDesignation: 'IIT Delhi Doctorate',
    duration: '1h 30m',
    chapter: 'Equilibrium',
    batch: 'Achievers Dropper Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Henderson-Hasselbalch Equation for Buffers', 'Common Ion Effect on Sparingly Soluble Salts', 'Hydrolysis of Salts (Acidic, Basic, Neutral)', 'Precipitation Conditions (Qsp vs Ksp)'],
    pdfNotesUrl: '#',
    highYieldPoints: 25
  },
  {
    id: 'lec-chem-04',
    title: 'Coordination Chemistry: Werner\'s Theory, Crystal Field Splitting (CFT) & Isomerism',
    subject: 'Chemistry',
    faculty: 'Dr. Ananya Ray',
    facultyDesignation: 'IISc Bangalore Researcher',
    duration: '1h 25m',
    chapter: 'Coordination Compounds',
    batch: 'Foundation 2-Year Batch',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&auto=format&fit=crop&q=80',
    keyTopics: ['Spectrochemical Series & High/Low Spin Complexes', 'Delta_o vs Delta_t Relationship', 'Optical & Geometrical Isomerism in Octahedral', 'Color in Coordination Complexes (d-d transitions)'],
    pdfNotesUrl: '#',
    highYieldPoints: 21
  }
];

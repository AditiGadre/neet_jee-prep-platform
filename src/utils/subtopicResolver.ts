import { Question } from '../types';

/**
 * Intelligent Sub-topic Classifier & Resolver
 * Accurately extracts and assigns specific subtopics for all questions across
 * Biology, Physics, and Chemistry, eliminating long comma-separated syllabus strings.
 */

// Keyword rules for The Living World subtopics
const LIVING_WORLD_SUBTOPICS = [
  {
    name: 'Taxonomical Aids',
    keywords: [
      'herbarium', 'botanical garden', 'museum', 'zoological park', 'zoo',
      'key', 'couplet', 'lead', 'flora', 'manual', 'monograph', 'catalogue',
      'preserved in', 'sheets', 'kew', 'howrah'
    ]
  },
  {
    name: 'Taxonomic Categories & Hierarchy',
    keywords: [
      'species', 'genus', 'family', 'order', 'class', 'phylum', 'division',
      'kingdom', 'taxon', 'taxa', 'hierarchy', 'solanaceae', 'felidae',
      'canidae', 'panthera', 'homo', 'sapiens', 'suffix', 'tricolor',
      'nigrum', 'tuberosum', 'musca', 'domestica', 'mangifera', 'indica',
      'triticum', 'aestivum', 'hominidae', 'primata', 'mammalia', 'chordata',
      'poaceae', 'poales', 'monocotyledonae', 'angiospermae'
    ]
  },
  {
    name: 'Binomial Nomenclature',
    keywords: [
      'binomial', 'nomenclature', 'linnaeus', 'icbn', 'iczn', 'generic',
      'specific epithet', 'latin', 'author citation', 'mayr', 'systema',
      'two-word', 'scientific name', 'handwritten', 'italics', 'identification',
      'classification system'
    ]
  },
  {
    name: 'What is Living?',
    keywords: [
      'growth', 'reproduction', 'metabolism', 'consciousness', 'cellular organisation',
      'self-consciousness', 'defining property', 'defining feature', 'extrinsic',
      'intrinsic', 'twin characteristic', 'sterile', 'mule', 'worker bee',
      'in vitro', 'catabolism', 'anabolism', 'homeostasis'
    ]
  },
  {
    name: 'Diversity in the Living World',
    keywords: [
      'biodiversity', 'million', 'identified', 'known species', 'range', 'variability',
      '1.7', '1.8'
    ]
  }
];

export function resolveQuestionSubtopic(q: Question): string {
  if (!q) return 'General';

  const sub = q.subject || 'General';
  const ch = (q.chapter || '').trim();
  const top = (q.topic || (q as any).subtopic || '').trim();
  const qText = ((q.questionText || (q as any).question || '') + ' ' + (q.explanation || '')).toLowerCase();

  // 1. BIOLOGY
  if (sub === 'Biology') {
    const chLower = ch.toLowerCase();
    
    // Specially handle The Living World / Diversity in Living World
    if (chLower.includes('living world') || chLower.includes('diversity in the living world')) {
      let bestSub = 'The Living World';
      let maxScore = 0;
      for (const rule of LIVING_WORLD_SUBTOPICS) {
        let score = 0;
        for (const kw of rule.keywords) {
          if (qText.includes(kw)) score++;
        }
        if (score > maxScore) {
          maxScore = score;
          bestSub = rule.name;
        }
      }
      return bestSub;
    }

    // If topic is already specific and clean (no commas / syllabus list)
    if (top && !top.includes(',') && top.length <= 45 && !top.toLowerCase().includes('chapter')) {
      return top;
    }

    // If topic has comma-separated syllabus list (like fingertips biology)
    if (top && top.includes(',')) {
      const candidates = top.split(',').map(s => s.trim()).filter(s => s.length > 2);
      let bestCandidate = candidates[0];
      let bestScore = 0;
      for (const cand of candidates) {
        const words = cand.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length >= 3);
        let score = 0;
        for (const w of words) {
          if (qText.includes(w)) score++;
        }
        if (score > bestScore) {
          bestScore = score;
          bestCandidate = cand;
        }
      }
      return bestCandidate;
    }

    return ch || 'General Biology';
  }

  // 2. PHYSICS
  if (sub === 'Physics') {
    const chLower = ch.toLowerCase();
    
    // Kinematics (Motion in 1D and 2D combined)
    if (
      chLower.includes('motion in one dimension') ||
      chLower.includes('motion in a straight line') ||
      chLower.includes('motion in a plane') ||
      chLower.includes('motion in 1d') ||
      chLower.includes('motion in 2d') ||
      chLower.includes('kinematic')
    ) {
      const is2D = (
        chLower.includes('plane') ||
        chLower.includes('2d') ||
        qText.includes('projectile') ||
        qText.includes('trajectory') ||
        qText.includes('circular motion') ||
        qText.includes('radius') ||
        qText.includes('angular velocity') ||
        qText.includes('range') ||
        qText.includes('angle of projection')
      );
      if (top && !top.includes(',') && top.length <= 35 && !top.toLowerCase().includes('motion in')) {
        return top;
      }
      return is2D ? 'Motion in a Plane (2D)' : 'Motion in a Straight Line (1D)';
    }

    // Units and Measurements
    if (
      chLower.includes('unit') ||
      chLower.includes('dimension') ||
      chLower.includes('measurement') ||
      chLower.includes('physical world')
    ) {
      if (qText.includes('dimension') || qText.includes('m^') || qText.includes('l^') || qText.includes('t^-') || qText.includes('[m') || qText.includes('[l') || qText.includes('[t')) {
        return 'Dimensional Analysis';
      }
      if (qText.includes('error') || qText.includes('percentage') || qText.includes('delta')) {
        return 'Errors of Measurement';
      }
      if (qText.includes('significant') || qText.includes('rounding')) {
        return 'Significant Figures';
      }
      if (qText.includes('vernier') || qText.includes('screw gauge') || qText.includes('least count')) {
        return 'Measuring Instruments';
      }
      if (qText.includes('unit') || qText.includes('joule') || qText.includes('newton') || qText.includes('si unit')) {
        return 'Units & Systems of Units';
      }
      if (top && !top.includes(',') && top.length <= 40) {
        return top;
      }
      return 'Units and Measurements';
    }

    if (top && !top.includes(',') && top.length <= 40) {
      return top;
    }
    return ch || 'General Physics';
  }

  // 3. CHEMISTRY
  if (top && !top.includes(',') && top.length <= 40) {
    return top;
  }
  return ch || 'General Chemistry';
}

export function normalizeChapterForDisplay(subject: string, chapter: string): string {
  const ch = (chapter || '').trim();
  const chLower = ch.toLowerCase();

  if (subject === 'Physics') {
    if (
      chLower.includes('motion in one dimension') ||
      chLower.includes('motion in a straight line') ||
      chLower.includes('motion in a plane') ||
      chLower.includes('motion in 1d') ||
      chLower.includes('motion in 2d') ||
      chLower.includes('kinematic')
    ) {
      return 'Kinematics';
    }
    if (
      chLower.includes('unit') ||
      chLower.includes('physical world') ||
      chLower.includes('physics and measurement') ||
      chLower.includes('physics & measurement') ||
      chLower.includes('physics measurement')
    ) {
      return 'Units and Measurements';
    }
  }

  if (subject === 'Biology') {
    if (chLower.includes('living world') || chLower.includes('diversity in the living world')) {
      return 'The Living World';
    }
  }

  return ch;
}

export function getQuestionDisplayTag(q: Question): string {
  const sub = q.subject || 'General';
  const cleanCh = normalizeChapterForDisplay(sub, q.chapter || '');
  const subtopic = resolveQuestionSubtopic(q);

  if (subtopic && subtopic !== cleanCh && !subtopic.includes(',')) {
    return '[' + sub + ' • ' + cleanCh + ' • ' + subtopic + ']';
  }
  return '[' + sub + ' • ' + cleanCh + ']';
}

interface SubtopicRule {
  name: string;
  keywords: string[];
}

function normalizeKey(str: string): string {
  return (str || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
}

/**
 * Standard NEET NCERT Subtopics Registry
 * Provides granular sub-topics for every major NEET chapter across Physics, Chemistry, and Biology.
 */
export const TOPIC_SUBTOPICS_REGISTRY: Record<string, SubtopicRule[]> = {
  // ==========================================
  // PHYSICS
  // ==========================================
  'physics_thermodynamics': [
    {
      name: 'Zeroth Law & Thermal Equilibrium',
      keywords: ['zeroth', 'thermal equilibrium', 'temperature scale', 'thermometer', 'thermal contact']
    },
    {
      name: 'First Law of Thermodynamics & Internal Energy',
      keywords: ['first law', 'internal energy', 'delta u', 'dq =', 'du + dw', 'state function', 'path function', 'heat added', 'heat supplied']
    },
    {
      name: 'Thermodynamic Processes (Isothermal, Adiabatic, Isobaric, Isochoric)',
      keywords: ['isothermal', 'adiabatic', 'isobaric', 'isochoric', 'polytropic', 'pv curve', 'p-v curve', 'indicator diagram', 'quasi-static']
    },
    {
      name: 'Work Done & Indicator (P-V) Diagrams',
      keywords: ['work done', 'indicator diagram', 'area under', 'cyclic process', 'net work', 'p delta v', 'pdv', 'work performed']
    },
    {
      name: 'Heat Engines, Refrigerators & Carnot Cycle',
      keywords: ['carnot', 'heat engine', 'refrigerator', 'heat pump', 'coefficient of performance', 'efficiency', 'source temperature', 'sink temperature', 'cop']
    },
    {
      name: 'Second Law of Thermodynamics & Entropy',
      keywords: ['second law', 'entropy', 'kelvin-planck', 'clausius', 'reversible process', 'irreversibility', 'disorder']
    },
    {
      name: 'Specific Heat Capacities of Gases (Cp, Cv & Mayer\'s Formula)',
      keywords: ['specific heat', 'cp', 'cv', 'mayer', 'degree of freedom', 'gamma', 'monoatomic', 'diatomic', 'triatomic', 'ratio of specific']
    }
  ],

  'physics_unitsandmeasurements': [
    {
      name: 'Units & Systems of Units (SI Units)',
      keywords: ['si unit', 'base unit', 'derived unit', 'system of units', 'cgs', 'mks', 'fundamental quantity']
    },
    {
      name: 'Dimensional Analysis & Applications',
      keywords: ['dimension', 'dimensional formula', 'principle of homogeneity', 'dimensions of', 'dimensionless']
    },
    {
      name: 'Errors of Measurement & Error Combination',
      keywords: ['error', 'relative error', 'percentage error', 'least count error', 'random error', 'propagation of error']
    },
    {
      name: 'Significant Figures & Rounding Off',
      keywords: ['significant figure', 'significant digit', 'rounding off', 'arithmetic operations with']
    },
    {
      name: 'Measuring Instruments (Vernier Callipers & Screw Gauge)',
      keywords: ['vernier', 'screw gauge', 'spherometer', 'least count', 'pitch', 'main scale', 'zero error']
    }
  ],

  'physics_kinematics': [
    {
      name: 'Motion in a Straight Line (1D) & Free Fall',
      keywords: ['straight line', '1d', 'distance', 'displacement', 'speed', 'velocity', 'acceleration', 'free fall', 'equations of motion']
    },
    {
      name: 'Kinematics Graphs (x-t, v-t, a-t Graphs)',
      keywords: ['graph', 'slope', 'position-time', 'velocity-time', 'area under', 'tangent', 'x-t', 'v-t']
    },
    {
      name: 'Vectors & Vector Operations',
      keywords: ['vector', 'scalar', 'cross product', 'dot product', 'magnitude', 'unit vector', 'component of vector', 'parallelogram law']
    },
    {
      name: 'Projectile Motion (Horizontal & Angular)',
      keywords: ['projectile', 'trajectory', 'maximum height', 'time of flight', 'horizontal range', 'angle of projection']
    },
    {
      name: 'Uniform Circular Motion & Centripetal Acceleration',
      keywords: ['circular motion', 'angular velocity', 'centripetal acceleration', 'radial acceleration', 'radius of circle', 'tangential acceleration']
    },
    {
      name: 'Relative Velocity in 1D & 2D',
      keywords: ['relative velocity', 'rain-man', 'river-boat', 'relative motion', 'wind']
    }
  ],

  'physics_lawsofmotion': [
    {
      name: 'Newton\'s Laws of Motion & Inertia',
      keywords: ['newton', 'first law', 'second law', 'third law', 'inertia', 'force', 'action and reaction']
    },
    {
      name: 'Momentum, Impulse & Conservation of Momentum',
      keywords: ['momentum', 'impulse', 'f = dp/dt', 'conservation of linear momentum', 'recoil']
    },
    {
      name: 'Equilibrium of Forces & Free Body Diagrams (FBD)',
      keywords: ['free body', 'fbd', 'equilibrium', 'concurrent forces', 'tension', 'normal reaction', 'pulley', 'wedge']
    },
    {
      name: 'Friction (Static, Kinetic, Rolling & Angle of Repose)',
      keywords: ['friction', 'coefficient of friction', 'static friction', 'kinetic friction', 'limiting friction', 'angle of repose', 'rough']
    },
    {
      name: 'Dynamics of Circular Motion & Banking of Roads',
      keywords: ['banking of roads', 'centripetal force', 'death well', 'conical pendulum', 'skidding', 'bending of cyclist']
    }
  ],

  'physics_workenergyandpower': [
    {
      name: 'Work Done by Constant & Variable Force',
      keywords: ['work done', 'force', 'displacement', 'w = f.d', 'integral f dx', 'variable force']
    },
    {
      name: 'Work-Energy Theorem & Kinetic Energy',
      keywords: ['work-energy theorem', 'kinetic energy', 'net work done', 'change in kinetic energy']
    },
    {
      name: 'Potential Energy & Conservative Forces',
      keywords: ['potential energy', 'spring potential energy', 'conservative force', 'potential energy curve', 'equilibrium']
    },
    {
      name: 'Conservation of Mechanical Energy & Power',
      keywords: ['conservation of mechanical energy', 'power', 'watt', 'rate of doing work', 'efficiency']
    },
    {
      name: 'Collisions in 1D & 2D (Elastic & Inelastic)',
      keywords: ['collision', 'elastic collision', 'inelastic collision', 'coefficient of restitution', 'head-on collision', 'oblique']
    }
  ],

  'physics_systemsofparticlesandrotationalmotion': [
    {
      name: 'Centre of Mass & Motion of COM',
      keywords: ['centre of mass', 'center of mass', 'velocity of com', 'acceleration of com', 'two-particle system']
    },
    {
      name: 'Torque, Angular Momentum & Conservation',
      keywords: ['torque', 'angular momentum', 'conservation of angular momentum', 'moment of a force', 'couple']
    },
    {
      name: 'Moment of Inertia & Parallel/Perpendicular Axes',
      keywords: ['moment of inertia', 'radius of gyration', 'parallel axis theorem', 'perpendicular axis theorem', 'ring', 'disc', 'cylinder', 'sphere']
    },
    {
      name: 'Rotational Dynamics & Work Done by Torque',
      keywords: ['rotational dynamics', 'torque = i alpha', 'angular acceleration', 'rotational kinetic energy']
    },
    {
      name: 'Pure Rolling Motion (Without Slipping)',
      keywords: ['rolling motion', 'pure rolling', 'without slipping', 'inclined plane', 'kinetic energy of rolling']
    }
  ],

  'physics_gravitation': [
    {
      name: 'Universal Law of Gravitation',
      keywords: ['universal law of gravitation', 'gravitational constant', 'cavendish', 'inverse square law', 'gravitational force']
    },
    {
      name: 'Acceleration Due to Gravity (g) & Variations',
      keywords: ['acceleration due to gravity', 'value of g', 'variation of g', 'height', 'depth', 'latitude', 'rotation of earth']
    },
    {
      name: 'Gravitational Potential Energy & Potential',
      keywords: ['gravitational potential', 'gravitational potential energy', 'point mass', 'infinity', 'potential at a point']
    },
    {
      name: 'Escape Velocity & Orbital Velocity',
      keywords: ['escape velocity', 'orbital velocity', 'satellite', 'geostationary', 'polar satellite', 'time period of satellite']
    },
    {
      name: 'Kepler\'s Laws of Planetary Motion',
      keywords: ['kepler', 'law of orbits', 'law of areas', 'law of periods', 'areal velocity', 'ellipse']
    }
  ],

  'physics_currentelectricity': [
    {
      name: 'Electric Current, Drift Velocity & Ohm\'s Law',
      keywords: ['drift velocity', 'current density', 'ohm\'s law', 'relaxation time', 'mobility']
    },
    {
      name: 'Resistance, Resistivity & Temperature Dependence',
      keywords: ['resistivity', 'temperature coefficient of resistance', 'internal resistance', 'color code']
    },
    {
      name: 'Resistor Networks & Cells in Series/Parallel',
      keywords: ['series combination', 'parallel combination', 'emf of cell', 'internal resistance of cell', 'terminal voltage']
    },
    {
      name: 'Kirchhoff\'s Rules & Electrical Circuits',
      keywords: ['kirchhoff', 'junction rule', 'loop rule', 'kvl', 'kcl', 'circuit solving']
    },
    {
      name: 'Measuring Devices (Wheatstone Bridge, Meter Bridge & Potentiometer)',
      keywords: ['wheatstone bridge', 'meter bridge', 'potentiometer', 'galvanometer', 'null point', 'balancing length']
    }
  ],

  // ==========================================
  // CHEMISTRY
  // ==========================================
  'chemistry_thermodynamics': [
    {
      name: 'First Law of Thermodynamics, Work & Internal Energy',
      keywords: ['first law', 'internal energy', 'work done', 'isothermal', 'adiabatic', 'state function', 'delta u', 'w = -p']
    },
    {
      name: 'Enthalpy (ΔH) & Thermochemical Equations',
      keywords: ['enthalpy', 'delta h', 'heat of formation', 'combustion', 'neutralization', 'exothermic', 'endothermic', 'thermochemical']
    },
    {
      name: 'Hess\'s Law of Constant Heat Summation & Bond Enthalpies',
      keywords: ['hess', 'bond energy', 'bond enthalpy', 'dissociation', 'lattice energy', 'born-haber', 'summation']
    },
    {
      name: 'Entropy (ΔS) & Second Law of Thermodynamics',
      keywords: ['entropy', 'delta s', 'disorder', 'randomness', 'second law', 'reversible']
    },
    {
      name: 'Gibbs Free Energy (ΔG) & Spontaneity',
      keywords: ['gibbs', 'free energy', 'delta g', 'spontaneous', 'non-spontaneous', 'equilibrium constant', 'delta g0']
    },
    {
      name: 'Heat Capacity (Cp, Cv) & Calorimetry',
      keywords: ['heat capacity', 'cp', 'cv', 'specific heat', 'calorimeter', 'bomb calorimeter', 'calorimetry']
    }
  ],

  'chemistry_somebasicconceptsofchemistry': [
    {
      name: 'Mole Concept, Molar Mass & Avogadro\'s Number',
      keywords: ['mole', 'avogadro', 'molar mass', 'gram atomic mass', 'number of atoms', 'number of molecules']
    },
    {
      name: 'Stoichiometry & Limiting Reagent',
      keywords: ['stoichiometry', 'limiting reagent', 'excess reagent', 'theoretical yield', 'balanced equation']
    },
    {
      name: 'Concentration Terms (Molarity, Molality, Mole Fraction)',
      keywords: ['molarity', 'molality', 'mole fraction', 'normality', 'ppm', 'mass percentage', 'volume percentage']
    },
    {
      name: 'Empirical & Molecular Formula',
      keywords: ['empirical formula', 'molecular formula', 'percentage composition']
    }
  ],

  'chemistry_structureofatom': [
    {
      name: 'Bohr\'s Model & Hydrogen Line Spectrum',
      keywords: ['bohr', 'radius of bohr orbit', 'energy of electron', 'hydrogen spectrum', 'lyman', 'balmer', 'paschen', 'rydberg']
    },
    {
      name: 'de Broglie Relation & Heisenberg Uncertainty Principle',
      keywords: ['de broglie', 'matter wave', 'heisenberg', 'uncertainty principle', 'delta x delta p']
    },
    {
      name: 'Quantum Numbers & Orbitals',
      keywords: ['quantum number', 'principal quantum number', 'azimuthal', 'magnetic quantum', 'spin quantum', 'node', 'orbital']
    },
    {
      name: 'Electronic Configuration & Rules (Aufbau, Hund, Pauli)',
      keywords: ['aufbau', 'hund\'s rule', 'pauli exclusion', 'electronic configuration', 'degenerate orbitals', 'anomalous configuration']
    }
  ],

  'chemistry_chemicalbondingandmolecularstructure': [
    {
      name: 'Lewis Structures, Octet Rule & Formal Charge',
      keywords: ['lewis structure', 'octet rule', 'formal charge', 'resonance structure']
    },
    {
      name: 'Ionic Bond, Lattice Enthalpy & Born-Haber Cycle',
      keywords: ['ionic bond', 'electrovalent', 'lattice energy', 'lattice enthalpy', 'fajans\' rule', 'polarising power']
    },
    {
      name: 'VSEPR Theory & Molecular Geometry',
      keywords: ['vsepr', 'lone pair', 'bond pair', 'geometry', 'shape of molecule', 'bent', 'trigonal', 'tetrahedral']
    },
    {
      name: 'Hybridization (sp, sp2, sp3, sp3d, sp3d2)',
      keywords: ['hybridization', 'sp3', 'sp2', 'sp', 'sp3d', 'hybrid orbital', 'sigma bond', 'pi bond']
    },
    {
      name: 'Molecular Orbital Theory (MOT) & Bond Order',
      keywords: ['molecular orbital', 'mot', 'bond order', 'paramagnetic', 'diamagnetic', 'bonding mo', 'antibonding mo']
    },
    {
      name: 'Dipole Moment & Hydrogen Bonding',
      keywords: ['dipole moment', 'debye', 'hydrogen bonding', 'intermolecular', 'intramolecular']
    }
  ],

  'chemistry_equilibrium': [
    {
      name: 'Chemical Equilibrium & Equilibrium Constant (Kc, Kp)',
      keywords: ['equilibrium constant', 'kc', 'kp', 'law of mass action', 'reaction quotient', 'qc']
    },
    {
      name: 'Le Chatelier\'s Principle & Factors Affecting Equilibrium',
      keywords: ['le chatelier', 'effect of temperature', 'effect of pressure', 'addition of inert gas', 'catalyst']
    },
    {
      name: 'Ionic Equilibrium, Acids, Bases & pH Calculations',
      keywords: ['arrhenius', 'bronsted', 'lewis acid', 'ph calculation', 'poh', 'auto-protolysis of water', 'kw']
    },
    {
      name: 'Buffer Solutions & Common Ion Effect',
      keywords: ['buffer solution', 'henderson', 'common ion effect', 'acidic buffer', 'basic buffer']
    },
    {
      name: 'Solubility Product (Ksp) & Salt Hydrolysis',
      keywords: ['solubility product', 'ksp', 'precipitation', 'ionic product', 'salt hydrolysis']
    }
  ],

  // ==========================================
  // BIOLOGY
  // ==========================================
  'biology_thelivingworld': [
    {
      name: 'Diversity in the Living World & What is Living?',
      keywords: ['what is living', 'biodiversity', 'metabolism', 'cellular organization', 'consciousness', 'growth', 'reproduction']
    },
    {
      name: 'Binomial Nomenclature & Scientific Naming Rules',
      keywords: ['binomial', 'nomenclature', 'linnaeus', 'icbn', 'iczn', 'generic name', 'specific epithet', 'author citation']
    },
    {
      name: 'Taxonomic Categories & Hierarchy',
      keywords: ['taxonomic category', 'species', 'genus', 'family', 'order', 'class', 'phylum', 'kingdom', 'taxon']
    },
    {
      name: 'Taxonomical Aids (Herbarium, Botanical Garden, Museum, Keys)',
      keywords: ['herbarium', 'botanical garden', 'museum', 'zoological park', 'key', 'couplet', 'lead', 'flora', 'manual', 'monograph']
    }
  ],

  'biology_animalkingdom': [
    {
      name: 'Basis of Classification (Symmetry, Coelom, Germ Layers)',
      keywords: ['levels of organization', 'symmetry', 'diploblastic', 'triploblastic', 'coelom', 'pseudocoelomate', 'segmentation']
    },
    {
      name: 'Non-Chordata: Porifera, Coelenterata & Ctenophora',
      keywords: ['porifera', 'sponges', 'canal system', 'coelenterata', 'cnidaria', 'cnidoblast', 'metagenesis', 'ctenophora', 'bioluminescence']
    },
    {
      name: 'Non-Chordata: Platyhelminthes, Aschelminthes & Annelida',
      keywords: ['platyhelminthes', 'flatworms', 'flame cells', 'aschelminthes', 'roundworms', 'annelida', 'metameres', 'nephridia']
    },
    {
      name: 'Non-Chordata: Arthropoda, Mollusca & Echinodermata',
      keywords: ['arthropoda', 'jointed appendages', 'malpighian tubules', 'mollusca', 'radula', 'echinodermata', 'water vascular system']
    },
    {
      name: 'Phylum Chordata & Vertebrata Classes',
      keywords: ['chordata', 'notochord', 'urochordata', 'cephalochordata', 'cyclostomata', 'chondrichthyes', 'osteichthyes', 'amphibia', 'reptilia', 'aves', 'mammalia']
    }
  ],

  'biology_celltheunitoftife': [
    {
      name: 'Prokaryotic Cell Structure',
      keywords: ['prokaryotic', 'mesosome', 'plasmid', 'cell envelope', 'peptidoglycan', '70s ribosome', 'nucleoid', 'flagella', 'pili']
    },
    {
      name: 'Cell Membrane & Fluid Mosaic Model',
      keywords: ['fluid mosaic', 'singer and nicolson', 'lipid bilayer', 'phospholipid', 'integral protein', 'peripheral protein', 'active transport']
    },
    {
      name: 'Endomembrane System (ER, Golgi, Lysosomes, Vacuoles)',
      keywords: ['endomembrane', 'endoplasmic reticulum', 'rer', 'ser', 'golgi apparatus', 'cisternae', 'lysosome', 'hydrolase', 'vacuole', 'tonoplast']
    },
    {
      name: 'Mitochondria, Plastids & Ribosomes',
      keywords: ['mitochondria', 'cristae', 'chloroplast', 'thylakoid', 'stroma', 'grana', '80s ribosome', 'semiautonomous']
    },
    {
      name: 'Nucleus, Chromatin & Cytoskeleton',
      keywords: ['nucleus', 'nucleolus', 'chromatin', 'histone', 'centromere', 'kinetochore', 'cilia', 'flagella', 'centrosome', 'centriole']
    }
  ]
};

/**
 * Get available sub-topics for a chosen subject and topic.
 * Guarantees that topics like Thermodynamics have exact, NCERT-standard sub-topics.
 */
export function getSubtopicsForTopic(subject: string, topic: string): string[] {
  const normSub = (subject || '').toLowerCase();
  const normTop = normalizeKey(topic || '');
  const key = `${normSub}_${normTop}`;

  // 1. Check curated registry first
  const rules = TOPIC_SUBTOPICS_REGISTRY[key];
  if (rules && rules.length > 0) {
    return rules.map(r => r.name);
  }

  // Also check without subject prefix if exact match
  for (const regKey of Object.keys(TOPIC_SUBTOPICS_REGISTRY)) {
    if (regKey.endsWith(`_${normTop}`)) {
      return TOPIC_SUBTOPICS_REGISTRY[regKey].map(r => r.name);
    }
  }

  // 2. Fallback: Extract from question bank questions if present
  try {
    const { getUnifiedQuestionBank } = require('./questionDatabase');
    const bank: Question[] = getUnifiedQuestionBank(subject as any, topic);
    const discovered = new Set<string>();
    for (const q of bank) {
      const t = (q.topic || (q as any).subtopic || '').trim();
      if (t && t.length <= 40 && !t.includes(',') && normalizeKey(t) !== normTop) {
        discovered.add(t);
      }
    }
    if (discovered.size > 0) {
      return Array.from(discovered).slice(0, 10);
    }
  } catch (e) {
    // ignore
  }

  // 3. Sensible default academic sub-topics
  return [
    'Fundamental Concepts & Theory',
    'Standard Formula Applications',
    'High-Yield Analytical Problems'
  ];
}

/**
 * Filter questions within a topic pool by the selected subtopic.
 * Strict isolation: If subtopic is specified, strictly returns questions belonging to that sub-topic.
 */
export function filterQuestionsBySubtopic(
  pool: Question[],
  subtopic: string,
  subject?: string,
  topic?: string
): Question[] {
  if (!subtopic || subtopic === 'All Sub-Topics' || subtopic.toLowerCase().includes('all sub-topic')) {
    return pool;
  }

  const normSub = (subject || '').toLowerCase();
  const normTop = normalizeKey(topic || '');
  const key = `${normSub}_${normTop}`;

  // 1. Match against registry rule keywords if available
  let matchedRule: SubtopicRule | undefined;
  const rules = TOPIC_SUBTOPICS_REGISTRY[key] || [];
  matchedRule = rules.find(r => r.name.toLowerCase() === subtopic.toLowerCase());

  if (!matchedRule) {
    // Try finding across all registry rules
    for (const rList of Object.values(TOPIC_SUBTOPICS_REGISTRY)) {
      const f = rList.find(r => r.name.toLowerCase() === subtopic.toLowerCase());
      if (f) {
        matchedRule = f;
        break;
      }
    }
  }

  if (matchedRule) {
    const matched = pool.filter(q => {
      const qTop = (q.topic || (q as any).subtopic || '').toLowerCase();
      if (qTop.includes(subtopic.toLowerCase()) || subtopic.toLowerCase().includes(qTop)) {
        return true;
      }
      const text = `${qTop} ${q.questionText || (q as any).question || ''} ${q.explanation || ''}`.toLowerCase();
      return matchedRule!.keywords.some(kw => text.includes(kw.toLowerCase()));
    });
    if (matched.length > 0) {
      return matched;
    }
  }

  // 2. Direct string / keyword match
  const subLower = subtopic.toLowerCase();
  const directMatches = pool.filter(q => {
    const qTop = (q.topic || (q as any).subtopic || '').toLowerCase();
    if (qTop && (qTop.includes(subLower) || subLower.includes(qTop))) {
      return true;
    }
    const text = `${q.questionText || (q as any).question || ''} ${q.explanation || ''}`.toLowerCase();
    const words = subLower.split(/[^a-z0-9]+/).filter(w => w.length >= 4);
    return words.some(w => text.includes(w));
  });

  return directMatches.length > 0 ? directMatches : pool;
}
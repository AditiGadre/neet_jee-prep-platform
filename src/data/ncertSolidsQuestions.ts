import { Question } from '../types';

export const NCERT_SOLIDS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch09-ex01",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Breaking Stress Properties",
    "difficulty": "Easy",
    "questionText": "The breaking stress of a cylindrical wire of a given material depends on:",
    "options": [
      "Length of wire",
      "Area of cross-section of wire",
      "Both length and area of cross-section",
      "Independent of length and area of cross-section (nature of material only)"
    ],
    "correctAnswer": 3,
    "explanation": "Breaking stress is an intrinsic characteristic property of the material of the wire and is independent of its geometric dimensions (length and cross-sectional area).",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex02",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Perfect Plasticity Classification",
    "difficulty": "Easy",
    "questionText": "Which of the following substances exhibits nearly perfect plastic behavior?",
    "options": [
      "Plasticine",
      "Quartz fibre",
      "Steel",
      "Rubber"
    ],
    "correctAnswer": 0,
    "explanation": "Plasticine (or putty) retains its deformed shape completely when deforming force is removed, showing near-perfect plastic behavior. (Quartz fibre is nearly perfectly elastic).",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex03",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Natural Length of Stretched String",
    "difficulty": "Hard",
    "questionText": "The length of an elastic string is X m when the tension is 8 N, and Y m when the tension is 10 N. The natural length of the string in terms of X and Y is (and its length under 18 N tension is):",
    "options": [
      "4X - 5Y",
      "5Y - 4X",
      "9X - 4Y",
      "4Y - 9X"
    ],
    "correctAnswer": 1,
    "explanation": "Let natural length be L_0 and spring compliance be k: L = L_0 + k T.\nX = L_0 + 8k, Y = L_0 + 10k => k = (Y - X)/2.\nL_0 = X - 8k = X - 4(Y - X) = 5X - 4Y.\nFor T = 18 N: L_18 = L_0 + 18k = (5X - 4Y) + 9(Y - X) = 5Y - 4X.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex04",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Work Done by Internal Restoring Force",
    "difficulty": "Medium",
    "questionText": "When a load of mass 10 kg is hung from a vertical wire, an extension of 2 m is produced. The magnitude of work done by the elastic restoring force during this stretching is (take g = 10 m/s^2):",
    "options": [
      "200 J",
      "100 J",
      "50 J",
      "25 J"
    ],
    "correctAnswer": 1,
    "explanation": "Work done by elastic restoring force W_rest = -(1/2) * F * \u0394L = -(1/2) * (mg) * \u0394L = -(1/2) * (100) * 2 = -100 J.\nMagnitude = 100 J.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex05",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Classification of Elastomers",
    "difficulty": "Easy",
    "questionText": "Substances like rubber and tissue of aorta which can be elastically stretched to very large values of strain without permanent deformation are called:",
    "options": [
      "Isomers",
      "Isodiapheres",
      "Plastomers",
      "Elastomers"
    ],
    "correctAnswer": 3,
    "explanation": "Materials that can undergo large reversible elastic strains are defined as elastomers.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex06",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Young's Modulus Doubling Length",
    "difficulty": "Easy",
    "questionText": "A tensile force F doubles the length of a wire of uniform cross-sectional area a. The Young's modulus Y of the wire material is equal to:",
    "options": [
      "F / a",
      "F / (3a)",
      "F / (2a)",
      "F / (4a)"
    ],
    "correctAnswer": 0,
    "explanation": "Doubling the length means extension \u0394L = L, so longitudinal strain = \u0394L / L = 1.\nStress = F / a.\nYoung's modulus Y = Stress / Strain = (F / a) / 1 = F / a.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex07",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Stress-Strain Slope Comparison",
    "difficulty": "Easy",
    "questionText": "Stress-strain curves for four metals A, B, C, and D are plotted with stress on the y-axis and strain on the x-axis. The maximum Young's modulus of elasticity corresponds to the metal with:",
    "options": [
      "The steepest slope (Metal A)",
      "Moderate slope (Metal B)",
      "Lower slope (Metal C)",
      "Lowest slope (Metal D)"
    ],
    "correctAnswer": 0,
    "explanation": "Young's modulus Y = Stress / Strain = slope of the linear elastic region of the stress-strain graph. The metal with the greatest slope (Metal A) has the highest Young's modulus.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex08",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Maximum Length of Hanging Wire Under Own Weight",
    "difficulty": "Medium",
    "questionText": "The breaking stress for a material is 2 \u00d7 10^8 N/m^2. What maximum length of a vertical hanging wire of this material can be supported without breaking under its own weight? (Density \u03c1 = 5 \u00d7 10^3 kg/m^3, g = 10 m/s^2):",
    "options": [
      "1 km",
      "2 km",
      "3 km",
      "4 km"
    ],
    "correctAnswer": 3,
    "explanation": "Maximum stress occurs at the top clamp: \u03c3_max = (M g) / A = (A L \u03c1 g) / A = \u03c1 g L.\nBreaking stress = \u03c1 g L_max => 2 \u00d7 10^8 = (5 \u00d7 10^3)(10) L_max => L_max = (2 \u00d7 10^8) / (5 \u00d7 10^4) = 4000 m = 4 km.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex09",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Young's Modulus of Gases",
    "difficulty": "Easy",
    "questionText": "The Young's modulus of elasticity Y for an ideal gas is:",
    "options": [
      "Unity",
      "Infinite",
      "Zero",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "Gases have no fixed shape or length and cannot sustain longitudinal tension or compression. Hence, Young's modulus for gases is zero.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex10",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Effect of Impurities on Elasticity",
    "difficulty": "Easy",
    "questionText": "When impurities are introduced into a pure metallic crystal lattice, its elasticity:",
    "options": [
      "May change (increase or decrease depending on impurity nature)",
      "Never changes",
      "Remains precisely the same",
      "Changes by a fixed factor of 5"
    ],
    "correctAnswer": 0,
    "explanation": "Adding carbon to iron increases its tensile strength and elasticity, whereas other impurities may weaken bonding and decrease elasticity. Thus, elasticity may change.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex11",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Elasticity of Perfectly Rigid Body",
    "difficulty": "Easy",
    "questionText": "The modulus of elasticity for a perfectly rigid body is:",
    "options": [
      "Unity",
      "Zero",
      "Infinite",
      "Cannot be predicted"
    ],
    "correctAnswer": 2,
    "explanation": "For a perfectly rigid body, deformation \u0394L = 0 for any finite applied stress, so Strain = 0. Therefore, Modulus = Stress / Strain = Stress / 0 = \u221e (Infinite).",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex12",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Shear Modulus Displacement of Cube",
    "difficulty": "Medium",
    "questionText": "A tangential force F is applied on the upper face of a cube of side b whose lower face is fixed rigidly to the floor. If the modulus of rigidity of the cube is G, the horizontal shift x of the upper surface is:",
    "options": [
      "F / (G b)",
      "G / (F b)",
      "G b / F",
      "F b / G"
    ],
    "correctAnswer": 0,
    "explanation": "Shear stress = F / b^2. Shear strain = x / b.\nModulus of rigidity G = Shear stress / Shear strain = (F / b^2) / (x / b) = F / (b x) => x = F / (G b).",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex13",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Bulk Modulus of Rubber Ball Underwater",
    "difficulty": "Medium",
    "questionText": "A solid rubber ball is taken to a depth of 1 km inside a lake so that its volume reduces by 0.05%. The bulk modulus of rubber is (density of water = 10^3 kg/m^3, g = 10 m/s^2):",
    "options": [
      "2 \u00d7 10^8 N/m^2",
      "2 \u00d7 10^9 N/m^2",
      "2 \u00d7 10^10 N/m^2",
      "2 \u00d7 10^11 N/m^2"
    ],
    "correctAnswer": 2,
    "explanation": "Excess hydrostatic pressure \u0394P = \u03c1 g h = (10^3)(10)(10^3) = 10^7 N/m^2.\nVolume strain \u0394V / V = 0.05% = 5 \u00d7 10^-4.\nBulk Modulus B = \u0394P / (\u0394V / V) = 10^7 / (5 \u00d7 10^-4) = 2 \u00d7 10^10 N/m^2.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex14",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Elastic Moduli of Liquids",
    "difficulty": "Easy",
    "questionText": "In the case of liquids and fluids, which elastic modulus is physically well-defined?",
    "options": [
      "Only Bulk modulus is defined",
      "Only Bulk modulus and Young\u2019s modulus are defined",
      "Only Bulk modulus and Shear modulus are defined",
      "All three moduli (Bulk, Young\u2019s and Shear) are defined"
    ],
    "correctAnswer": 0,
    "explanation": "Liquids have no definite shape and cannot support longitudinal tension or shear stress under static equilibrium. Hence, only Bulk modulus (resistance to volume compression) is defined.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex15",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Nature of Elastic Restoring Forces",
    "difficulty": "Easy",
    "questionText": "Within the elastic limit of deformation, internal elastic restoring forces in solids are:",
    "options": [
      "Always conservative",
      "Not always conservative",
      "Never conservative",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "Within the elastic limit, the work done in deforming a solid is stored completely as recoverable elastic potential energy; thus, elastic forces are strictly conservative.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex16",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Isothermal Elasticity of Ideal Gas",
    "difficulty": "Easy",
    "questionText": "The isothermal bulk modulus of elasticity of an ideal gas at pressure P is:",
    "options": [
      "P",
      "\u03b3 P",
      "Zero",
      "\u221e"
    ],
    "correctAnswer": 0,
    "explanation": "For an isothermal process, PV = constant => P dV + V dP = 0 => -V (dP/dV) = P. Therefore, B_isothermal = P.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex17",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Elastic Energy Density Formula",
    "difficulty": "Easy",
    "questionText": "The elastic potential energy stored per unit volume in a wire of Young's modulus Y subjected to longitudinal strain S is:",
    "options": [
      "(1/2) Y S^2",
      "(1/2) Y^2 S",
      "2 Y S^2",
      "Y S^2"
    ],
    "correctAnswer": 0,
    "explanation": "Energy density u = (1/2) * stress * strain = (1/2) * (Y * S) * S = (1/2) Y S^2.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch09-ex18",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Poisson's Ratio for Incompressible Material",
    "difficulty": "Easy",
    "questionText": "If there is no change in the total volume of a cylindrical wire when it is stretched (dV = 0), the Poisson's ratio \u03bd of the material is:",
    "options": [
      "+0.5",
      "-0.5",
      "+0.25",
      "-0.25"
    ],
    "correctAnswer": 0,
    "explanation": "V = \u03c0 r^2 L => dV / V = 2(dr / r) + (dL / L) = 0 => 2(-lateral strain) + (longitudinal strain) = 0 => \u03bd = lateral strain / longitudinal strain = 1/2 = 0.5.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Solids",
      "Class 11"
    ]
  }
];

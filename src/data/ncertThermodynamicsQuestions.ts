import { Question } from '../types';

export const NCERT_THERMODYNAMICS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch12-ex01",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermal Equilibrium Condition",
    "difficulty": "Easy",
    "questionText": "Two thermodynamic systems are said to be in mutual thermal equilibrium when they have the exact same:",
    "options": [
      "Pressure",
      "Volume",
      "Temperature",
      "Internal energy"
    ],
    "correctAnswer": 2,
    "explanation": "Thermal equilibrium between two systems occurs if and only if their temperatures are identical, meaning no net heat flow occurs between them.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex02",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process P-V Curve",
    "difficulty": "Easy",
    "questionText": "Which type of curve on a pressure-volume (P-V) indicator diagram represents an isothermal process for an ideal gas?",
    "options": [
      "Horizontal straight line",
      "Vertical straight line",
      "Rectangular hyperbola (PV = constant)",
      "Steep parabola"
    ],
    "correctAnswer": 2,
    "explanation": "For an ideal gas at constant temperature T, Boyle's law gives P V = constant, which plots as a rectangular hyperbola.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex03",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Work Done in Rectangular Cyclic Process",
    "difficulty": "Easy",
    "questionText": "An ideal gas is taken through a clockwise rectangular cyclic process on a P-V diagram between pressures P0 to 3P0 and volumes 2V0 to 5V0. The net work done in one complete cycle is:",
    "options": [
      "P0 V0",
      "3 P0 V0",
      "6 P0 V0",
      "5 P0 V0"
    ],
    "correctAnswer": 2,
    "explanation": "Work done in cyclic process = Area enclosed by cycle.\nLength along P-axis = 3P0 - P0 = 2P0.\nLength along V-axis = 5V0 - 2V0 = 3V0.\nNet Work W = (2P0) * (3V0) = 6 P0 V0.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex04",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Internal Energy in Isothermal Process",
    "difficulty": "Easy",
    "questionText": "For an isothermal expansion of an ideal gas, the change in internal energy \u0394U is equal to:",
    "options": [
      "\u0394Q",
      "\u0394W",
      "Zero",
      "\u0394V"
    ],
    "correctAnswer": 2,
    "explanation": "For an ideal gas, internal energy depends solely on temperature: U = n Cv T. Since temperature remains constant during an isothermal process (\u0394T = 0), \u0394U = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex05",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Expansion Cooling",
    "difficulty": "Easy",
    "questionText": "When a gas contained in a thermally insulated cylinder expands, its internal thermal energy decreases. The thermodynamic process involved is:",
    "options": [
      "Isobaric",
      "Isochoric",
      "Isothermal",
      "Adiabatic"
    ],
    "correctAnswer": 3,
    "explanation": "In an adiabatic expansion (Q = 0), the first law of thermodynamics gives \u0394U = -W. As the gas expands (W > 0), internal energy decreases (\u0394U < 0), causing the gas to cool.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex06",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law Internal Energy Definition",
    "difficulty": "Easy",
    "questionText": "Which fundamental law of thermodynamics quantitatively defines the concept of internal energy and establishes heat as a form of energy?",
    "options": [
      "Zeroth law",
      "First law",
      "Second law",
      "Third law"
    ],
    "correctAnswer": 1,
    "explanation": "The First Law of Thermodynamics (\u0394Q = \u0394U + \u0394W) states the conservation of energy and defines internal energy U as a thermodynamic state function.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex07",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Path Function vs State Function",
    "difficulty": "Easy",
    "questionText": "Which of the following thermodynamic quantities is a state function (and NOT a path function)?",
    "options": [
      "Heat supplied (\u0394Q)",
      "Work done (W)",
      "Heat plus Work (\u0394Q + W)",
      "Internal energy change (\u0394U)"
    ],
    "correctAnswer": 3,
    "explanation": "Internal energy U is a state function depending only on the initial and final states of the system, whereas heat Q and work W are path-dependent functions.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex08",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Work Done in Isobaric Doubling of Volume",
    "difficulty": "Medium",
    "questionText": "What is the work done by 0.2 mole of an ideal gas at room temperature (T = 300 K) when its volume is doubled during an isobaric process? (Take R = 2 cal mol^-1 \u00b0C^-1):",
    "options": [
      "30 cal",
      "40 cal",
      "120 cal",
      "160 cal"
    ],
    "correctAnswer": 2,
    "explanation": "For an isobaric process, V2 = 2 V1 => T2 = 2 T1 => \u0394T = T1 = 300 K.\nWork done W = P \u0394V = n R \u0394T = (0.2 mol) * (2 cal/mol K) * (300 K) = 120 cal.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex09",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Carnot Engine Efficiency Range",
    "difficulty": "Easy",
    "questionText": "The thermal efficiency \u03b7 of any real or ideal heat engine operating between two finite temperatures must always satisfy:",
    "options": [
      "0 \u2264 \u03b7 < 1",
      "1 to \u221e",
      "-1 to +1",
      "0 to \u221e"
    ],
    "correctAnswer": 0,
    "explanation": "According to the Second Law of Thermodynamics (Kelvin-Planck statement), 100% conversion of heat into work in a continuous cycle is impossible. Thus, 0 \u2264 \u03b7 < 1.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex10",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Carnot Engine Efficiency Calculation",
    "difficulty": "Easy",
    "questionText": "If a Carnot engine operates between temperatures of 127\u00b0C and 527\u00b0C, its thermodynamic efficiency is:",
    "options": [
      "25%",
      "37.5%",
      "50%",
      "75%"
    ],
    "correctAnswer": 2,
    "explanation": "T1 = 527 + 273 = 800 K (source), T2 = 127 + 273 = 400 K (sink).\nEfficiency \u03b7 = 1 - (T2 / T1) = 1 - (400 / 800) = 1 - 0.5 = 0.5 = 50%.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex11",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Efficiency at Absolute Zero Sink",
    "difficulty": "Easy",
    "questionText": "If the temperature of the cold sink of an ideal Carnot engine is at absolute zero (0 K), the efficiency of the engine would theoretically be:",
    "options": [
      "0%",
      "100%",
      "50%",
      "75%"
    ],
    "correctAnswer": 1,
    "explanation": "\u03b7 = 1 - (T2 / T1). When T2 = 0 K, \u03b7 = 1 - 0 = 1 (100%).",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex12",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Increasing Carnot Source Temperature",
    "difficulty": "Medium",
    "questionText": "A Carnot engine whose cold sink is at 300 K has an efficiency of 50%. By how much must the source temperature be increased so that its efficiency rises to 70%?",
    "options": [
      "100 K",
      "200 K",
      "300 K",
      "400 K"
    ],
    "correctAnswer": 3,
    "explanation": "Initial: \u03b7 = 1 - 300/T1 = 0.5 => 300/T1 = 0.5 => T1 = 600 K.\nNew: \u03b7' = 1 - 300/T1' = 0.7 => 300/T1' = 0.3 => T1' = 1000 K.\nRequired increase \u0394T = 1000 - 600 = 400 K.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex13",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Carnot Work Done Calculation",
    "difficulty": "Medium",
    "questionText": "A Carnot engine absorbs 6000 cal of heat from a reservoir at 627\u00b0C and rejects heat to a sink at 27\u00b0C. The useful mechanical work done by the engine is:",
    "options": [
      "2 kcal",
      "3 kcal",
      "4 kcal",
      "8 kcal"
    ],
    "correctAnswer": 2,
    "explanation": "T1 = 627 + 273 = 900 K, T2 = 27 + 273 = 300 K.\n\u03b7 = 1 - 300/900 = 2/3.\nWork W = \u03b7 * Q1 = (2/3) * 6000 cal = 4000 cal = 4 kcal.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex14",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Conditions for Reversible Thermodynamic Process",
    "difficulty": "Easy",
    "questionText": "A thermodynamic process can be strictly reversible if and only if:",
    "options": [
      "It is quasi-static (infinitely slow)",
      "It is non-dissipative (frictionless and without resistance)",
      "Both quasi-static and non-dissipative",
      "Neither quasi-static nor non-dissipative"
    ],
    "correctAnswer": 2,
    "explanation": "A process is reversible if the system remains in infinitesimal equilibrium at every stage (quasi-static) and energy is not dissipated via friction or turbulence (non-dissipative).",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex15",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Carnot Theorem Comparison",
    "difficulty": "Easy",
    "questionText": "According to Carnot's theorem, between the same two operating temperatures, the efficiency of any reversible engine is:",
    "options": [
      "Less than that of an irreversible engine",
      "Greater than that of any irreversible engine",
      "Equal to any irreversible engine",
      "Negligible compared to an irreversible engine"
    ],
    "correctAnswer": 1,
    "explanation": "Carnot's theorem states that no heat engine operating between two specified heat reservoirs can be more efficient than a Carnot reversible engine operating between the same reservoirs.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex16",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Stages in Carnot Cycle",
    "difficulty": "Easy",
    "questionText": "A complete ideal Carnot engine cycle consists of:",
    "options": [
      "Two stages",
      "Four stages (2 isothermal and 2 adiabatic)",
      "Six stages",
      "Eight stages"
    ],
    "correctAnswer": 1,
    "explanation": "The Carnot cycle consists of 4 distinct reversible processes: (1) Isothermal expansion, (2) Adiabatic expansion, (3) Isothermal compression, and (4) Adiabatic compression.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex17",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Expansion Pressure-Volume Relation",
    "difficulty": "Medium",
    "questionText": "In an adiabatic expansion of a monatomic ideal gas (\u03b3 = 5/3), if the volume increases to 8 times its initial volume, the final temperature becomes (initial temperature = 300 K):",
    "options": [
      "75 K",
      "300 K",
      "560 K",
      "340 K"
    ],
    "correctAnswer": 0,
    "explanation": "T1 V1^(\u03b3-1) = T2 V2^(\u03b3-1) => T2 = T1 (V1 / V2)^(5/3 - 1) = 300 * (1/8)^(2/3) = 300 * (1/4) = 75 K.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch12-ex18",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law Isobaric Heat Fractions",
    "difficulty": "Medium",
    "questionText": "An ideal diatomic gas (\u03b3 = 7/5) is expanding at constant pressure. The ratio of heat supplied to change in internal energy to work done (dQ : dU : dW) is:",
    "options": [
      "7 : 5 : 1",
      "7 : 2 : 5",
      "2 : 1 : 1",
      "7 : 5 : 2"
    ],
    "correctAnswer": 3,
    "explanation": "dQ = n Cp dT = n (7/2 R) dT = 7 units.\ndU = n Cv dT = n (5/2 R) dT = 5 units.\ndW = P dV = n R dT = 2 units.\nRatio dQ : dU : dW = 7 : 5 : 2.",
    "tags": [
      "NCERT NEET Physics",
      "Thermodynamics",
      "Class 11"
    ]
  }
];

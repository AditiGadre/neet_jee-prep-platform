import { Question } from '../types';

export const NCERT_KINETIC_THEORY_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch13-ex01",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Degrees of Freedom & Gamma Relation",
    "difficulty": "Easy",
    "questionText": "Each molecule of an ideal gas has f degrees of freedom. The ratio of specific heats \u03b3 = Cp / Cv for the gas is given by:",
    "options": [
      "1 + f/2",
      "1 + 1/f",
      "1 + 2/f",
      "f/2"
    ],
    "correctAnswer": 2,
    "explanation": "Cv = (f/2)R and Cp = Cv + R = (f/2 + 1)R.\n\u03b3 = Cp / Cv = (f/2 + 1)R / ((f/2)R) = 1 + 2/f.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex02",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "RMS Speed and Gas Density",
    "difficulty": "Easy",
    "questionText": "At constant pressure P, the root-mean-square speed c of gas molecules is related to the density d of the gas as:",
    "options": [
      "c \u221d d",
      "c \u221d 1/d",
      "c \u221d \u221ad",
      "c \u221d 1 / \u221ad"
    ],
    "correctAnswer": 3,
    "explanation": "From kinetic theory: P = (1/3) d c^2 => c = \u221a(3P / d) => c \u221d 1 / \u221ad.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex03",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Rotational Kinetic Energy of Diatomic Molecule",
    "difficulty": "Easy",
    "questionText": "The mean rotational kinetic energy per molecule of an ideal diatomic gas at absolute temperature T is:",
    "options": [
      "(1/2) kB T",
      "(5/2) kB T",
      "kB T",
      "(3/4) kB T"
    ],
    "correctAnswer": 2,
    "explanation": "A diatomic molecule has 2 rotational degrees of freedom. According to the law of equipartition of energy, each degree of freedom has an average energy of (1/2) kB T. Total rotational energy = 2 * (1/2 kB T) = kB T.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex04",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Equipartition of Energy in Gas Mixture",
    "difficulty": "Easy",
    "questionText": "A closed vessel contains a mixture of hydrogen and oxygen gases in the mass ratio 1 : 5 in thermal equilibrium. The ratio of the mean translational kinetic energy of a hydrogen molecule to that of an oxygen molecule is:",
    "options": [
      "1 : 16",
      "1 : 4",
      "1 : 5",
      "1 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "The mean translational kinetic energy of any gas molecule depends solely on the absolute temperature: <KE> = (3/2) kB T. Since both gases are at the same temperature, the ratio is 1 : 1.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex05",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Effect of Pressure on RMS Speed",
    "difficulty": "Easy",
    "questionText": "The rms speed of the molecules of an enclosed gas is v. What will be the new rms speed if the pressure of the gas is doubled while keeping the temperature constant?",
    "options": [
      "3v",
      "4v",
      "v",
      "5v"
    ],
    "correctAnswer": 2,
    "explanation": "v_rms = \u221a(3RT / M). Since the temperature T and molar mass M remain unchanged, doubling the pressure doubles the density proportionally, leaving v_rms unchanged at v.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex06",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Temperature Scaling of RMS Speed",
    "difficulty": "Easy",
    "questionText": "The temperature of an ideal gas is increased from 27\u00b0C to 927\u00b0C. The rms speed of its molecules will become:",
    "options": [
      "Twice",
      "Half",
      "Four times",
      "One fourth"
    ],
    "correctAnswer": 0,
    "explanation": "T1 = 27 + 273 = 300 K, T2 = 927 + 273 = 1200 K.\nv_rms \u221d \u221aT => v2 / v1 = \u221a(1200 / 300) = \u221a4 = 2 (Twice).",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex07",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Maximum RMS Speed among Gases",
    "difficulty": "Easy",
    "questionText": "Which of the following gases possesses the maximum rms molecular velocity at the same temperature?",
    "options": [
      "Oxygen (O2)",
      "Carbon dioxide (CO2)",
      "Hydrogen (H2)",
      "Helium (He)"
    ],
    "correctAnswer": 2,
    "explanation": "v_rms = \u221a(3RT / M). At the same temperature, v_rms is inversely proportional to the square root of the molar mass (M). Hydrogen has the smallest molar mass (M = 2 g/mol) and therefore the highest rms speed.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex08",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Dissociation and Effective Degrees of Freedom",
    "difficulty": "Hard",
    "questionText": "A vessel contains a non-linear triatomic gas (degrees of freedom f = 6). If 50% of the gas dissociates into individual monatomic atoms (f = 3), ignoring vibrational modes, the new average degrees of freedom per particle is:",
    "options": [
      "2.15",
      "3.75",
      "5.25",
      "6.35"
    ],
    "correctAnswer": 1,
    "explanation": "Starting with 1 mole of triatomic gas (N molecules): 50% remains as 0.5 mole triatomic (0.5N particles, f = 6), and 50% dissociates into 1.5N monatomic atoms (f = 3).\nTotal particles = 0.5N + 1.5N = 2.0N.\nAverage f = (0.5 * 6 + 1.5 * 3) / 2.0 = (3.0 + 4.5) / 2.0 = 7.5 / 2.0 = 3.75.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex09",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Mean Free Path and Molecule Radius",
    "difficulty": "Easy",
    "questionText": "The mean free path \u03bb of gas molecules of radius r is inversely proportional to:",
    "options": [
      "r",
      "r^2",
      "r^3",
      "\u221ar"
    ],
    "correctAnswer": 1,
    "explanation": "Mean free path \u03bb = 1 / (\u221a2 \u03c0 n d^2) = 1 / (4\u221a2 \u03c0 n r^2) \u221d 1 / r^2.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex10",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Total Energy of Gas Mixture",
    "difficulty": "Medium",
    "questionText": "A gas mixture consists of 2 moles of oxygen (O2, diatomic) and 4 moles of argon (Ar, monatomic) at absolute temperature T. Neglecting vibrational modes, the total internal energy of the system is:",
    "options": [
      "4 RT",
      "15 RT",
      "9 RT",
      "11 RT"
    ],
    "correctAnswer": 3,
    "explanation": "U = U_O2 + U_Ar = n1 (5/2 R T) + n2 (3/2 R T) = 2 * (5/2 RT) + 4 * (3/2 RT) = 5 RT + 6 RT = 11 RT.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex11",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Relation between Pressure and Kinetic Energy Density",
    "difficulty": "Easy",
    "questionText": "The relation between hydrostatic pressure P and the average translational kinetic energy per unit volume E of an ideal gas is:",
    "options": [
      "P = (2/3) E",
      "P = (1/3) E",
      "P = (1/2) E",
      "P = 3E"
    ],
    "correctAnswer": 0,
    "explanation": "P = (1/3) \u03c1 v_rms^2 and E = (1/2) \u03c1 v_rms^2 => P / E = 2/3 => P = (2/3) E.",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch13-ex12",
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "Speed of Sound and Molecular RMS Velocity",
    "difficulty": "Easy",
    "questionText": "If Cs is the velocity of sound in an ideal gas and C is the rms speed of its molecules, the exact relation between them is:",
    "options": [
      "Cs < C",
      "Cs = C",
      "Cs = C \u221a(\u03b3 / 3)",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "Cs = \u221a(\u03b3 RT / M) and C = \u221a(3 RT / M).\nDividing gives Cs / C = \u221a(\u03b3 / 3) => Cs = C \u221a(\u03b3 / 3).",
    "tags": [
      "NCERT NEET Physics",
      "Kinetic Theory",
      "Class 11"
    ]
  }
];

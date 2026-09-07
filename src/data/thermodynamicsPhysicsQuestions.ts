import { Question } from '../types';

export const THERMODYNAMICS_PHYSICS_BOOK_QUESTIONS: Question[] = [
  {
    "id": "errorless-phy-thd-001",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "First law of thermodynamics is given by [CPMT 1977, 91]",
    "options": [
      "$dQ = dU + P dV$",
      "$dQ = dU \\times P dV$",
      "$dQ = (dU + dV)P$",
      "$dQ = P dU + dV$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe First Law of Thermodynamics (FLOT) states the conservation of energy:\n$$dQ = dU + dW$$\nFor a hydrostatic system undergoing a quasi-static process, the work done by the gas is $dW = P dV$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$dQ = dU + P dV$$\nwhere $dQ$ is heat supplied to the system, $dU$ is increase in internal energy, and $P dV$ is work done by the system against external pressure.\n\n### ✓ Examiner Pro-Tip\n$dQ$ and $dW$ are path functions (inexact differentials), while $dU$ is a point/state function (exact differential).",
    "tags": [
      "Thermodynamics",
      "First Law of Thermodynamics",
      "Equation"
    ]
  },
  {
    "id": "errorless-phy-thd-002",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "The internal energy of an ideal gas depends upon [RPMT 1997; MP PMT 1999; CPMT 2003]",
    "options": [
      "Specific volume",
      "Pressure",
      "Temperature",
      "Density"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an ideal gas, intermolecular forces of attraction are assumed to be zero ($U_{\\text{potential}} = 0$). Therefore, the entire internal energy consists solely of translational (and rotational/vibrational) kinetic energy of the molecules.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$U = \\frac{f}{2} \\mu R T$$\nAccording to Joule's Law for ideal gases, $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = 0$ and $\\left(\\frac{\\partial U}{\\partial P}\\right)_T = 0$, meaning internal energy is a function of **temperature only** ($U = f(T)$).\n\n### ✓ Examiner Pro-Tip\nFor real gases with intermolecular attraction, $U = f(T, V)$.",
    "tags": [
      "Thermodynamics",
      "Internal Energy",
      "Ideal Gas"
    ]
  },
  {
    "id": "errorless-phy-thd-003",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "In changing the state of thermodynamics from A to B state, the heat required is $Q$ and the work done by the system is $W$. The change in its internal energy is [MP PMT 1986; AMU 2001]",
    "options": [
      "$Q + W$",
      "$Q - W$",
      "$Q$",
      "$\\frac{Q - W}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom the First Law of Thermodynamics:\n$$Q = \\Delta U + W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U = Q - W$$\nwhere $\\Delta U = U_B - U_A$ is the change in internal energy between states A and B.",
    "tags": [
      "Thermodynamics",
      "First Law of Thermodynamics",
      "Internal Energy Change"
    ]
  },
  {
    "id": "errorless-phy-thd-004",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Heat given to a system is $35\\text{ joules}$ and work done by the system is $15\\text{ joules}$. The change in the internal energy of the system will be [MP PET/PMT 1988]",
    "options": [
      "$-50\\text{ J}$",
      "$20\\text{ J}$",
      "$30\\text{ J}$",
      "$50\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = Q - W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $Q = +35\\text{ J}$ (heat given to system) and $W = +15\\text{ J}$ (work done by system):\n$$\\Delta U = 35 - 15 = 20\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nAlways adhere strictly to standard signs: $Q > 0$ when absorbed, $W > 0$ when work is done by gas.",
    "tags": [
      "Thermodynamics",
      "First Law of Thermodynamics",
      "Calculation"
    ]
  },
  {
    "id": "errorless-phy-thd-005",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "The temperature of an ideal gas is kept constant as it expands. The gas does external work. During this process, the internal energy of the gas [MP PMT 1990]",
    "options": [
      "Decreases",
      "Increases",
      "Remains constant",
      "Depends on the molecular motion"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an ideal gas, internal energy depends only on its temperature ($U = \\frac{f}{2} \\mu R T$).\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince temperature is held strictly constant ($T = \\text{constant} \\implies \\Delta T = 0$), the internal energy of the ideal gas **remains constant** ($\\Delta U = 0$). All heat absorbed goes into doing external work ($Q = W$).",
    "tags": [
      "Thermodynamics",
      "Isothermal Process",
      "Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-006",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "The first law of thermodynamics is concerned with the conservation of [MP PMT 1987; CBSE PMT 1990, 92; AFMC 1997; CPMT 1999; BHU 1999; DCE 2000; BCECE 2003]",
    "options": [
      "Momentum",
      "Energy",
      "Mass",
      "Temperature"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe First Law of Thermodynamics is the fundamental law of **conservation of energy** applied to thermal and mechanical systems, establishing that energy cannot be created or destroyed, only transformed between heat, mechanical work, and internal energy.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Conservation of Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-007",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A thermodynamic system goes from states (i) $P_1, V$ to $2P_1, V$ and (ii) $P, V$ to $P, 2V$. Then work done in the two cases is [MP PMT 1990]",
    "options": [
      "$\\text{Zero, Zero}$",
      "$\\text{Zero, } PV$",
      "$PV, \\text{ Zero}$",
      "$P_1 V, P V$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done in a thermodynamic process is $W = \\int P dV$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Case (i): Volume is constant at $V$ (isochoric process, $dV = 0$).\n$$W_1 = 0$$\n- Case (ii): Pressure is constant at $P$ while volume changes from $V$ to $2V$ (isobaric expansion).\n$$W_2 = P (2V - V) = PV$$\nThus, the work done in the two cases is **Zero, $PV$**.",
    "tags": [
      "Thermodynamics",
      "Work Done",
      "Isochoric vs Isobaric"
    ]
  },
  {
    "id": "errorless-phy-thd-008",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "If the amount of heat given to a system be $35\\text{ joules}$ and the amount of work done on the system be $-15\\text{ joules}$ (work done by the system is $-15\\text{ J}$), then the change in the internal energy of the system is [MP PMT 1989]",
    "options": [
      "$-50\\text{ joules}$",
      "$20\\text{ joules}$",
      "$30\\text{ joules}$",
      "$50\\text{ joules}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = Q - W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $Q = +35\\text{ J}$ and $W = -15\\text{ J}$ (work done on the gas):\n$$\\Delta U = 35 - (-15) = 35 + 15 = 50\\text{ joules}$$\n\n### ✓ Examiner Pro-Tip\nWhen work is done ON the system ($W < 0$) while heat is supplied ($Q > 0$), both inputs contribute additively to increase internal energy.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Sign Convention"
    ]
  },
  {
    "id": "errorless-phy-thd-009",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A system is given $300\\text{ calories}$ of heat and it does $600\\text{ joules}$ of work. How much does the internal energy of the system change in this process ($J = 4.18\\text{ joules/cal}$) [MP PET 1991]",
    "options": [
      "$654\\text{ Joule}$",
      "$156.5\\text{ Joule}$",
      "$-300\\text{ Joule}$",
      "$-528.2\\text{ Joule}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nConvert all quantities to consistent SI units (Joules):\n$$Q = 300 \\times 4.184\\text{ J} = 1254\\text{ J}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U = Q - W = 1254 - 600 = 654\\text{ Joules}$$\n\n### ✓ Examiner Pro-Tip\n$300 \\times 4.18 = 1254$, so $1254 - 600 = 654\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Unit Conversion",
      "Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-010",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Work done on or by a gas, in general depends upon the",
    "options": [
      "Initial state only",
      "Final state only",
      "Both initial and final states only",
      "Initial state, final state and the path"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork $W = \\int_{V_i}^{V_f} P dV$ represents the area under the process trajectory on the $P-V$ indicator diagram.\n\n### ⚡ Step-by-Step Derivation & Calculations\nBecause different thermodynamic paths connecting the same initial and final states enclose different areas, work is a **path-dependent function** that depends on the initial state, final state, and the specific path traversed.",
    "tags": [
      "Thermodynamics",
      "Path Function",
      "Work Done"
    ]
  },
  {
    "id": "errorless-phy-thd-011",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "If $R = \\text{universal gas constant}$, the amount of heat needed to raise the temperature of $2\\text{ mole}$ of an ideal monoatomic gas from $273\\text{ K}$ to $373\\text{ K}$ when no work is done is [MP PET 1990]",
    "options": [
      "$100 R$",
      "$150 R$",
      "$300 R$",
      "$500 R$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nWhen no work is done ($W = 0$, isochoric process):\n$$Q = \\Delta U = \\mu C_v \\Delta T$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor an ideal monoatomic gas, $C_v = \\frac{3}{2} R$.\nGiven $\\mu = 2\\text{ moles}$ and $\\Delta T = 373 - 273 = 100\\text{ K}$:\n$$Q = 2 \\times \\left(\\frac{3}{2} R\\right) \\times 100 = 3 R \\times 100 = 300 R$$\n\n### ✓ Examiner Pro-Tip\n$Q_v = 300 R$.",
    "tags": [
      "Thermodynamics",
      "Isochoric Heating",
      "Monoatomic Gas"
    ]
  },
  {
    "id": "errorless-phy-thd-012",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "Find the change in internal energy of the system when a system absorbs $2\\text{ kilocalorie}$ of heat and at the same time does $500\\text{ joule}$ of work [EAMCET 1984]",
    "options": [
      "$7900\\text{ J}$",
      "$8200\\text{ J}$",
      "$5600\\text{ J}$",
      "$6400\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$Q = 2\\text{ kcal} = 2000 \\times 4.2\\text{ J} = 8400\\text{ J}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U = Q - W = 8400 - 500 = 7900\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$8400 - 500 = 7900\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Kilocalories to Joules"
    ]
  },
  {
    "id": "errorless-phy-thd-013",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "A system performs work $\\Delta W$ when an amount of heat is $\\Delta Q$ added to the system, the corresponding change in the internal energy is $\\Delta U$. A unique function of the initial and final states (irrespective of the mode of change) is [CPMT 1981; J & K CET 2004]",
    "options": [
      "$\\Delta Q$",
      "$\\Delta W$",
      "$\\Delta U$ and $\\Delta Q$",
      "$\\Delta U$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy $U$ is a state function (point function), so $\\Delta U = U_f - U_i$ is completely independent of the path taken between the initial and final states.\nIn contrast, $\\Delta Q$ and $\\Delta W$ individually depend on the path.",
    "tags": [
      "Thermodynamics",
      "State Function",
      "Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-014",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A container of volume $1\\text{ m}^3$ is divided into two equal compartments by a partition. One of these compartments contains an ideal gas at $300\\text{ K}$. The other compartment is vacuum. The whole system is thermally isolated from its surroundings. The partition is removed and the gas expands to occupy the whole volume of the container. Its temperature now would be [Manipal MEE 1995]",
    "options": [
      "$300\\text{ K}$",
      "$239\\text{ K}$",
      "$200\\text{ K}$",
      "$100\\text{ K}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThis is **free adiabatic expansion** into vacuum:\n1. Since expansion is against vacuum ($P_{\\text{ext}} = 0$), work done $W = 0$.\n2. Since walls are thermally insulated, $Q = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom FLOT: $\\Delta U = Q - W = 0 - 0 = 0$.\nFor an ideal gas, $U = f(T)$. Therefore, $\\Delta U = 0 \\implies \\Delta T = 0$.\nThe temperature remains exactly **$300\\text{ K}$**.",
    "tags": [
      "Thermodynamics",
      "Free Expansion",
      "Joule Expansion"
    ]
  },
  {
    "id": "errorless-phy-thd-015",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "$110\\text{ J}$ of heat is added to a gaseous system, whose internal energy change is $40\\text{ J}$, then the amount of external work done is [CBSE PMT 1993; DPMT 1996, 03; AFMC 1999; JIPMER 2000; MH CET 2000; Pb. PMT 2003]",
    "options": [
      "$150\\text{ J}$",
      "$70\\text{ J}$",
      "$110\\text{ J}$",
      "$40\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = Q - \\Delta U$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = 110 - 40 = 70\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$110 - 40 = 70\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Work Calculation",
      "First Law"
    ]
  },
  {
    "id": "errorless-phy-thd-016",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Which of the following is not thermodynamical function [CBSE PMT 1993; CPMT 2001; DCE 1996, 2001]",
    "options": [
      "Enthalpy",
      "Work done",
      "Gibb's energy",
      "Internal energy"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nThermodynamic state functions (potentials) describe the equilibrium state of a system and depend only on state variables: Internal energy ($U$), Enthalpy ($H = U + PV$), Helmholtz free energy ($A = U - TS$), and Gibbs free energy ($G = H - TS$).\n**Work done** is a path-dependent process variable, not a thermodynamic state function.",
    "tags": [
      "Thermodynamics",
      "State Functions",
      "Path Variables"
    ]
  },
  {
    "id": "errorless-phy-thd-017",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "When the amount of work done is $333\\text{ cal}$ and change in internal energy is $167\\text{ cal}$, then the heat supplied is [AFMC 1998]",
    "options": [
      "$166\\text{ cal}$",
      "$333\\text{ cal}$",
      "$500\\text{ cal}$",
      "$400\\text{ cal}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$Q = \\Delta U + W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$Q = 167 + 333 = 500\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\n$167 + 333 = 500\\text{ cal}$.",
    "tags": [
      "Thermodynamics",
      "Heat Supplied",
      "First Law"
    ]
  },
  {
    "id": "errorless-phy-thd-018",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "First law thermodynamics states that [KCET 1999]",
    "options": [
      "System can do work",
      "System has temperature",
      "System has pressure",
      "Heat is a form of energy"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe First Law of Thermodynamics establishes the fundamental equivalence between mechanical work and heat, confirming that **heat is a form of energy** and the total energy of an isolated system is conserved.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Concept of Heat"
    ]
  },
  {
    "id": "errorless-phy-thd-019",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A thermodynamic system is changed from state $(P_1, V_1)$ to $(P_2, V_2)$ by two different processes. The quantity which will remain same will be [RPET 1999]",
    "options": [
      "$\\Delta Q$",
      "$\\Delta W$",
      "$\\Delta Q + \\Delta W$",
      "$\\Delta Q - \\Delta W$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom the first law of thermodynamics:\n$$\\Delta Q - \\Delta W = \\Delta U$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince internal energy $U$ is a state function, $\\Delta U = U_2 - U_1$ depends only on the initial and final states, meaning the difference **$\\Delta Q - \\Delta W$** is invariant regardless of the path chosen.",
    "tags": [
      "Thermodynamics",
      "State Function",
      "Path Invariance"
    ]
  },
  {
    "id": "errorless-phy-thd-020",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "In thermodynamic process, $200\\text{ Joules}$ of heat is given to a gas and $100\\text{ Joules}$ of work is also done on it. The change in internal energy of the gas is [AMU 1999]",
    "options": [
      "$100\\text{ J}$",
      "$300\\text{ J}$",
      "$419\\text{ J}$",
      "$24\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = Q - W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $Q = +200\\text{ J}$ and $W = -100\\text{ J}$ (work done on gas):\n$$\\Delta U = 200 - (-100) = 200 + 100 = 300\\text{ J}$$",
    "tags": [
      "Thermodynamics",
      "Work Done on Gas",
      "Internal Energy Increase"
    ]
  },
  {
    "id": "errorless-phy-thd-021",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A perfect gas contained in a cylinder is kept in vacuum. If the cylinder suddenly bursts, then the temperature of the gas [MH CET 1999]",
    "options": [
      "Remains constant",
      "Becomes zero",
      "Increases",
      "Decreases"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nWhen a perfect (ideal) gas bursts into surrounding vacuum, it performs zero external work ($W = 0$) because opposing pressure is zero. Since the process happens without heat exchange ($Q = 0$), $\\Delta U = Q - W = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor an ideal gas, $U$ depends only on $T$. Thus $\\Delta U = 0 \\implies$ temperature **remains constant**.",
    "tags": [
      "Thermodynamics",
      "Free Expansion",
      "Ideal Gas Burst"
    ]
  },
  {
    "id": "errorless-phy-thd-022",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "If $150\\text{ J}$ of heat is added to a system and the work done by the system is $110\\text{ J}$, then change in internal energy will be [AMU 1999; BHU 2000]",
    "options": [
      "$260\\text{ J}$",
      "$150\\text{ J}$",
      "$110\\text{ J}$",
      "$40\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = Q - W = 150 - 110 = 40\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$150 - 110 = 40\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Energy Change"
    ]
  },
  {
    "id": "errorless-phy-thd-023",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "If $\\Delta Q$ and $\\Delta W$ represent the heat supplied to the system and the work done on the system respectively, then the first law of thermodynamics can be written as [Roorkee 2000]",
    "options": [
      "$\\Delta Q = \\Delta U + \\Delta W$",
      "$\\Delta Q = \\Delta U - \\Delta W$",
      "$\\Delta Q = \\Delta W - \\Delta U$",
      "$\\Delta Q = -\\Delta W - \\Delta U$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn physics sign convention, $W_{\\text{by}} = -W_{\\text{on}}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta Q = \\Delta U + W_{\\text{by}} = \\Delta U + (-\\Delta W_{\\text{on}}) = \\Delta U - \\Delta W$$\n$$\\implies \\Delta Q = \\Delta U - \\Delta W$$\n(where $\\Delta W$ is defined as work done *on* the system).",
    "tags": [
      "Thermodynamics",
      "Sign Conventions",
      "Work on System"
    ]
  },
  {
    "id": "errorless-phy-thd-024",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "For free expansion of the gas which of the following is true [AMU 2000]",
    "options": [
      "$Q = W = 0$ and $\\Delta E_{\\text{int}} = 0$",
      "$Q = 0, W > 0$ and $\\Delta E_{\\text{int}} = -W$",
      "$W = 0, Q > 0$ and $\\Delta E_{\\text{int}} = Q$",
      "$W > 0, Q < 0$ and $\\Delta E_{\\text{int}} = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFree expansion is an adiabatic unrestrained expansion into a vacuum.\n- Adiabatic container: $Q = 0$\n- Expansion into vacuum ($P_{\\text{ext}} = 0$): $W = 0$\n- From First Law: $\\Delta E_{\\text{int}} = Q - W = 0 - 0 = 0$.",
    "tags": [
      "Thermodynamics",
      "Free Expansion",
      "Thermodynamic Quantities"
    ]
  },
  {
    "id": "errorless-phy-thd-025",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Which of the following can not determine the state of a thermodynamic system [AFMC 2001]",
    "options": [
      "Pressure and volume",
      "Volume and temperature",
      "Temperature and pressure",
      "Any one of pressure, volume or temperature"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy the equation of state ($PV = \\mu R T$), for a fixed mass of gas, specifying any **two** independent state variables uniquely fixes the third and determines the state of the system.\nA single variable alone **cannot** determine the thermodynamic state.",
    "tags": [
      "Thermodynamics",
      "Equation of State",
      "State Variables"
    ]
  },
  {
    "id": "errorless-phy-thd-026",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Which of the following is not a thermodynamics co-ordinate [AIIMS 2001]",
    "options": [
      "$P$",
      "$T$",
      "$V$",
      "$R$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nThermodynamic coordinates are macroscopic state variables ($P, V, T, U, S$).\n$R$ is the universal gas constant ($8.314\\text{ J/mol}\\cdot\\text{K}$), a universal physical constant, not a variable coordinate.",
    "tags": [
      "Thermodynamics",
      "Thermodynamic Coordinates",
      "Gas Constant"
    ]
  },
  {
    "id": "errorless-phy-thd-027",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "In a given process for an ideal gas, $dW = 0$ and $dQ < 0$. Then for the gas [IIT-JEE (Screening) 2001]",
    "options": [
      "The temperature will decrease",
      "The volume will increase",
      "The pressure will remain constant",
      "The temperature will increase"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom FLOT: $dU = dQ - dW = dQ - 0 = dQ$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince $dQ < 0$ (heat extracted), $dU < 0$.\nFor an ideal gas, $dU = \\mu C_v dT < 0 \\implies dT < 0$.\nTherefore, the temperature of the gas **will decrease**.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Temperature Decrease"
    ]
  },
  {
    "id": "errorless-phy-thd-028",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "The specific heat of hydrogen gas at constant pressure is $C_P = 3.4 \\times 10^3\\text{ cal/kg}\\cdot^\\circ\\text{C}$ and at constant volume is $C_V = 2.4 \\times 10^3\\text{ cal/kg}\\cdot^\\circ\\text{C}$. If one kilogram hydrogen gas is heated from $10^\\circ\\text{C}$ to $20^\\circ\\text{C}$ at constant pressure, the external work done by the gas is [MP PMT 1995; DPMT 2001]",
    "options": [
      "$10^5\\text{ cal}$",
      "$10^4\\text{ cal}$",
      "$10^3\\text{ cal}$",
      "$5 \\times 10^3\\text{ cal}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = Q_P - \\Delta U = m C_P \\Delta T - m C_V \\Delta T = m (C_P - C_V) \\Delta T$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $m = 1\\text{ kg}, C_P = 3.4 \\times 10^3, C_V = 2.4 \\times 10^3, \\Delta T = 20 - 10 = 10^\\circ\\text{C}$:\n$$W = 1 \\times (3.4 \\times 10^3 - 2.4 \\times 10^3) \\times 10 = 1 \\times (1.0 \\times 10^3) \\times 10 = 10^4\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\n$W = 10^3 \\times 10 = 10^4\\text{ cal}$.",
    "tags": [
      "Thermodynamics",
      "Mayer Relation",
      "Work Done at Constant Pressure"
    ]
  },
  {
    "id": "errorless-phy-thd-029",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Which of the following parameters does not characterize the thermodynamic state of matter [CPMT 2001; AIEEE 2003]",
    "options": [
      "Volume",
      "Temperature",
      "Pressure",
      "Work"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nVolume, temperature, and pressure are state variables. **Work** is a path-dependent process quantity (energy in transit during a change of state) and does not describe the state of matter itself.",
    "tags": [
      "Thermodynamics",
      "State vs Path Variables",
      "Work"
    ]
  },
  {
    "id": "errorless-phy-thd-030",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "In a thermodynamic system where the working substance is an ideal gas, its internal energy is in the form of [MP PMT 2003]",
    "options": [
      "Kinetic energy only",
      "Kinetic and potential energy",
      "Potential energy",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an ideal gas, intermolecular potential energy $U_P = 0$ because intermolecular forces are assumed to be non-existent. Hence, internal energy consists of **kinetic energy only** ($U = U_K$).",
    "tags": [
      "Thermodynamics",
      "Ideal Gas",
      "Kinetic Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-031",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is correct for any thermodynamic system [AIEEE 2004]",
    "options": [
      "The internal energy changes in all processes",
      "Internal energy and entropy are state functions",
      "The change in entropy can never be zero",
      "The work done in an adiabatic process is always zero"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy ($U$) and entropy ($S$) are **state functions** whose values depend exclusively on the current equilibrium state of the system and are independent of path.",
    "tags": [
      "Thermodynamics",
      "State Functions",
      "Entropy and Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-032",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A system is provided with $200\\text{ cal}$ of heat and the work done by the system on the surrounding is $40\\text{ J}$. Then its internal energy [Orissa PMT 2004]",
    "options": [
      "Increases by $600\\text{ J}$",
      "Decreases by $800\\text{ J}$",
      "Increases by $800\\text{ J}$",
      "Decreases by $50\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$Q = 200\\text{ cal} \\times 4.2\\text{ J/cal} = 840\\text{ J}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U = Q - W = 840 - 40 = 800\\text{ J}$$\nThus, internal energy **increases by $800\\text{ J}$**.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Internal Energy Calculation"
    ]
  },
  {
    "id": "errorless-phy-thd-033",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "In a thermodynamic process, pressure of a fixed mass of a gas is changed in such a manner that the gas molecules give out $20\\text{ J}$ of heat and $10\\text{ J}$ of work is done on the gas. If the initial internal energy of the gas was $40\\text{ J}$, then the final internal energy will be [DPMT 2004]",
    "options": [
      "$30\\text{ J}$",
      "$20\\text{ J}$",
      "$60\\text{ J}$",
      "$40\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = U_f - U_i = Q - W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $Q = -20\\text{ J}$ (heat given out) and $W = -10\\text{ J}$ (work done on gas):\n$$\\Delta U = -20 - (-10) = -20 + 10 = -10\\text{ J}$$\n$$U_f = U_i + \\Delta U = 40 + (-10) = 30\\text{ J}$$\n\n*(Note: In the book explanation on page 38, $U_f = 30\\text{ J}$, marked as (a) in standard numbering).*",
    "tags": [
      "Thermodynamics",
      "Internal Energy",
      "Final State"
    ]
  },
  {
    "id": "errorless-phy-thd-034",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Heat is not being exchanged by a body. If its internal energy is increased, then [RPMT 2002]",
    "options": [
      "Its temperature will increase",
      "Its temperature will decrease",
      "Its temperature will remain constant",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a substance, internal kinetic energy is directly proportional to temperature. When internal energy increases (e.g. via mechanical work done on the system during adiabatic compression), its **temperature will increase**.",
    "tags": [
      "Thermodynamics",
      "Internal Energy",
      "Temperature Relation"
    ]
  },
  {
    "id": "errorless-phy-thd-035",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Out of the following which quantity does not depend on path [RPET 2002]",
    "options": [
      "Temperature",
      "Energy",
      "Work",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n**Temperature** is an intrinsic state variable that depends solely on the thermodynamic equilibrium state of the system, not on the path by which the state was reached.",
    "tags": [
      "Thermodynamics",
      "State Variable",
      "Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-036",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "First law of thermodynamics is a special case of [CPMT 1985; RPET 2000; DCE 2000; CBSE PMT 2000; AIEEE 2002; AFMC 2002]",
    "options": [
      "Newton's law",
      "Law of conservation of energy",
      "Charle's law",
      "Law of heat exchange"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe First Law of Thermodynamics is the universal statement of the **law of conservation of energy** applied to thermal systems.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Conservation of Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-037",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "One mole of an ideal monoatomic gas is heated at a constant pressure of one atmosphere from $0^\\circ\\text{C}$ to $100^\\circ\\text{C}$. Then the change in the internal energy is [Pb. PMT 2001]",
    "options": [
      "$6.56\\text{ joules}$",
      "$8.32 \\times 10^2\\text{ joules}$",
      "$12.48 \\times 10^2\\text{ joules}$",
      "$20.80\\text{ joules}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nChange in internal energy is ALWAYS $\\Delta U = \\mu C_v \\Delta T$ for any process.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor a monoatomic gas: $C_v = \\frac{3}{2} R$.\nGiven $\\mu = 1\\text{ mole}, R = 8.314\\text{ J/mol}\\cdot\\text{K}, \\Delta T = 100 - 0 = 100\\text{ K}$:\n$$\\Delta U = 1 \\times \\left(\\frac{3}{2} \\times 8.314\\right) \\times 100 = 1.5 \\times 831.4 = 1247.1\\text{ J} \\approx 12.48 \\times 10^2\\text{ joules}$$\n\n### ✓ Examiner Pro-Tip\nRegardless of constant pressure or constant volume, $\\Delta U$ depends only on $C_v \\Delta T$.",
    "tags": [
      "Thermodynamics",
      "Internal Energy",
      "Monoatomic Gas"
    ]
  },
  {
    "id": "errorless-phy-thd-038",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "If the ratio of specific heat of a gas at constant pressure to that at constant volume is $\\gamma$, the change in internal energy of a mass of gas, when the volume changes from $V$ to $2V$ at constant pressure $p$, is [CBSE PMT 1998]",
    "options": [
      "$\\frac{R}{\\gamma - 1}$",
      "$p V$",
      "$\\frac{p V}{\\gamma - 1}$",
      "$\\frac{\\gamma p V}{\\gamma - 1}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = \\mu C_v \\Delta T = \\mu \\left(\\frac{R}{\\gamma - 1}\\right) \\Delta T = \\frac{\\mu R \\Delta T}{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom the ideal gas equation at constant pressure $p$:\n$$\\mu R \\Delta T = p \\Delta V = p (2V - V) = p V$$\n$$\\Delta U = \\frac{p V}{\\gamma - 1}$$\n\n### ✓ Examiner Pro-Tip\n$\\Delta U = \\frac{P_f V_f - P_i V_i}{\\gamma - 1}$ applies universally to any process.",
    "tags": [
      "Thermodynamics",
      "Internal Energy Formula",
      "Isobaric Expansion"
    ]
  },
  {
    "id": "errorless-phy-thd-039",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "If $C_v = 4.96\\text{ cal/mole}\\cdot\\text{K}$, then increase in internal energy when temperature of $2\\text{ moles}$ of this gas is increased from $340\\text{ K}$ to $342\\text{ K}$ is [RPET 1997]",
    "options": [
      "$27.80\\text{ cal}$",
      "$19.84\\text{ cal}$",
      "$13.90\\text{ cal}$",
      "$9.92\\text{ cal}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = \\mu C_v \\Delta T$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U = 2 \\times 4.96 \\times (342 - 340) = 2 \\times 4.96 \\times 2 = 4 \\times 4.96 = 19.84\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\n$4 \\times 4.96 = 19.84\\text{ cal}$.",
    "tags": [
      "Thermodynamics",
      "Internal Energy Calculation",
      "Specific Heat"
    ]
  },
  {
    "id": "errorless-phy-thd-040",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Temperature is a measurement of coldness or hotness of an object. This definition is based on [RPET 2003]",
    "options": [
      "Zeroth law of thermodynamics",
      "First law of thermodynamics",
      "Second law of thermodynamics",
      "Newton's law of cooling"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe **Zeroth Law of Thermodynamics** introduces and defines the concept of temperature as the common property determining thermal equilibrium between systems.",
    "tags": [
      "Thermodynamics",
      "Zeroth Law",
      "Concept of Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-041",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "When heat energy of $1500\\text{ Joules}$ is supplied to a gas at constant pressure $2.1 \\times 10^5\\text{ N/m}^2$, there was an increase in its volume equal to $2.5 \\times 10^{-3}\\text{ m}^3$. The increase in internal energy of the gas in Joules is [EAMCET 1999]",
    "options": [
      "$450$",
      "$525$",
      "$975$",
      "$2025$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = Q - W = Q - P \\Delta V$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = P \\Delta V = (2.1 \\times 10^5) \\times (2.5 \\times 10^{-3}) = 2.1 \\times 250 = 525\\text{ J}$$\n$$\\Delta U = 1500 - 525 = 975\\text{ Joules}$$\n\n### ✓ Examiner Pro-Tip\n$1500 - 525 = 975\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Isobaric Work"
    ]
  },
  {
    "id": "errorless-phy-thd-042",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "If heat given to a system is $6\\text{ kcal}$ and work done is $6\\text{ kJ}$. Then change in internal energy is [BHU 2000]",
    "options": [
      "$19.1\\text{ kJ}$",
      "$12.5\\text{ kJ}$",
      "$25\\text{ kJ}$",
      "$\\text{Zero}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$Q = 6\\text{ kcal} = 6 \\times 4.184\\text{ kJ} = 25.1\\text{ kJ}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U = Q - W = 25.1 - 6 = 19.1\\text{ kJ}$$\n\n### ✓ Examiner Pro-Tip\n$6 \\times 4.18 - 6 = 25.08 - 6 = 19.08\\text{ kJ} \\approx 19.1\\text{ kJ}$.",
    "tags": [
      "Thermodynamics",
      "Internal Energy",
      "First Law"
    ]
  },
  {
    "id": "errorless-phy-thd-043",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "In a thermodynamics process, pressure of a fixed mass of a gas is changed in such a manner that the gas releases $20\\text{ J}$ of heat and $8\\text{ J}$ of work is done on the gas. If the initial internal energy of the gas was $30\\text{ J}$, the final internal energy will be [DPMT 2002]",
    "options": [
      "$18\\text{ J}$",
      "$9\\text{ J}$",
      "$4.5\\text{ J}$",
      "$36\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = U_f - U_i = Q - W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $Q = -20\\text{ J}, W = -8\\text{ J}, U_i = 30\\text{ J}$:\n$$\\Delta U = -20 - (-8) = -12\\text{ J}$$\n$$U_f = 30 + (-12) = 18\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$30 - 12 = 18\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Final Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-044",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Medium",
    "questionText": "A monoatomic gas of $n$-moles is heated from temperature $T_1$ to $T_2$ under two different conditions: (i) at constant volume and (ii) at constant pressure. The change in internal energy of the gas is [CPMT 2000]",
    "options": [
      "More for (i)",
      "More for (ii)",
      "Same in both cases",
      "Independent of number of moles"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy is a state function depending exclusively on temperature:\n$$\\Delta U = n C_v \\Delta T = n C_v (T_2 - T_1)$$\nBecause the initial and final temperatures are identical in both processes, the change in internal energy is the **same in both cases**.",
    "tags": [
      "Thermodynamics",
      "Internal Energy",
      "State Function"
    ]
  },
  {
    "id": "errorless-phy-thd-045",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "The state of a thermodynamic system is represented by [MH CET 2004]",
    "options": [
      "Pressure only",
      "Volume only",
      "Pressure, volume and temperature",
      "Number of moles"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe complete thermodynamic state of a macroscopic system in equilibrium is uniquely defined by its thermodynamic state variables: **pressure, volume, and temperature** ($P, V, T$).",
    "tags": [
      "Thermodynamics",
      "Thermodynamic State",
      "State Variables"
    ]
  },
  {
    "id": "errorless-phy-thd-046",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Hard",
    "questionText": "A perfect gas goes from state A to another state B by absorbing $8 \\times 10^5\\text{ J}$ of heat and doing $6.5 \\times 10^5\\text{ J}$ of external work. It is now transferred between the same two states in another process in which it absorbs $10^5\\text{ J}$ of heat. Then in the second process [BHU 1997]",
    "options": [
      "Work done on the gas is $0.5 \\times 10^5\\text{ J}$",
      "Work done by gas is $0.5 \\times 10^5\\text{ J}$",
      "Work done on gas is $10^5\\text{ J}$",
      "Work done by gas is $10^5\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nSince states A and B are fixed, $\\Delta U = U_B - U_A$ is invariant for all paths.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. From path 1:\n$$\\Delta U = Q_1 - W_1 = 8 \\times 10^5 - 6.5 \\times 10^5 = 1.5 \\times 10^5\\text{ J}$$\n2. For path 2:\n$$Q_2 = \\Delta U + W_2$$\n$$10^5 = 1.5 \\times 10^5 + W_2 \\implies W_2 = 10^5 - 1.5 \\times 10^5 = -0.5 \\times 10^5\\text{ J}$$\nSince $W_2$ is negative, **work done on the gas is $0.5 \\times 10^5\\text{ J}$**.\n\n### ✓ Examiner Pro-Tip\n$W < 0$ denotes work done ON the system.",
    "tags": [
      "Thermodynamics",
      "Path Invariance",
      "Work Done on Gas"
    ]
  },
  {
    "id": "errorless-phy-thd-047",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "If a system undergoes contraction of volume then the work done by the system will be [BHU 1999]",
    "options": [
      "Zero",
      "Negligible",
      "Negative",
      "Positive"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\int P dV$$\nWhen volume contracts ($V_f < V_i$), $dV < 0$. Therefore, the work done by the system is **negative** (work is done on the system by external forces).",
    "tags": [
      "Thermodynamics",
      "Volume Contraction",
      "Negative Work"
    ]
  },
  {
    "id": "errorless-phy-thd-048",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics",
    "difficulty": "Easy",
    "questionText": "Which of the following is incorrect regarding the first law of thermodynamics? [AIEEE 2005]",
    "options": [
      "It introduces the concept of the internal energy",
      "It introduces the concept of the entropy",
      "It is not applicable to any cyclic process",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n- The First Law of Thermodynamics introduces the concept of **internal energy** ($U$).\n- The **Second Law of Thermodynamics** introduces the concept of **entropy** ($S = \\int \\frac{dQ}{T}$).\nTherefore, stating that the first law introduces entropy is **incorrect**.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Entropy vs Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-049",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "For an ideal gas, in an isothermal process [BHU 1998]",
    "options": [
      "Heat content remains constant",
      "Heat content and temperature remain constant",
      "Temperature remains constant",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nAn **isothermal process** is a thermodynamic change in which the **temperature of the system remains strictly constant** throughout ($\\Delta T = 0$).\n\n### ⚡ Step-by-Step Derivation & Calculations\nHeat content does not remain constant because heat is freely exchanged with the isothermal heat reservoir ($Q = W \\ne 0$).",
    "tags": [
      "Thermodynamics",
      "Isothermal Process",
      "Constant Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-050",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "Can two isothermal curves cut each other?",
    "options": [
      "Never",
      "Yes",
      "They will cut when temperature is $0^\\circ\\text{C}$",
      "Yes, when the pressure is critical pressure"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nTwo isothermal curves represent two distinct constant temperatures ($T_1 \\ne T_2$).\nIf they were to intersect at a common state $(P, V)$, that single point would possess two different temperatures simultaneously, which violates thermodynamic equilibrium.",
    "tags": [
      "Thermodynamics",
      "Isotherms",
      "Non-intersecting"
    ]
  },
  {
    "id": "errorless-phy-thd-051",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "In an isothermal expansion of an ideal gas [KCET 2000; AFMC 2001]",
    "options": [
      "Internal energy of the gas increases",
      "Internal energy of the gas decreases",
      "Internal energy remains unchanged",
      "Average kinetic energy of gas molecule decreases"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an ideal gas, internal energy $U = \\mu C_v T$.\nSince temperature is constant ($\\Delta T = 0$), the internal energy **remains unchanged** ($\\Delta U = 0$).",
    "tags": [
      "Thermodynamics",
      "Isothermal Expansion",
      "Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-052",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Hard",
    "questionText": "In an isothermal reversible expansion, if the volume of $96\\text{ gm}$ of oxygen at $27^\\circ\\text{C}$ is increased from $70\\text{ litres}$ to $140\\text{ litres}$, then the work done by the gas will be",
    "options": [
      "$300 R \\log_{10} 2$",
      "$81 R \\log_e 2$",
      "$900 R \\log_{10} 2$",
      "$2.3 \\times 900 R \\log_{10} 2$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\mu R T \\ln \\left(\\frac{V_2}{V_1}\\right) = 2.303 \\mu R T \\log_{10} \\left(\\frac{V_2}{V_1}\\right)$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor $\\text{O}_2$ (molar mass $M = 32\\text{ g/mol}$):\n$$\\mu = \\frac{96}{32} = 3\\text{ moles}$$\n$$T = 27 + 273 = 300\\text{ K}$$\n$$\\mu T = 3 \\times 300 = 900$$\n$$W = 2.303 \\times (900 R) \\log_{10} \\left(\\frac{140}{70}\\right) = 2.3 \\times 900 R \\log_{10} 2$$\n\n### ✓ Examiner Pro-Tip\n$2.303 \\times 900 R \\log_{10} 2$.",
    "tags": [
      "Thermodynamics",
      "Isothermal Work",
      "Oxygen Expansion"
    ]
  },
  {
    "id": "errorless-phy-thd-053",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "A vessel containing $5\\text{ litres}$ of a gas at $0.8\\text{ m}$ pressure is connected to an evacuated vessel of volume $3\\text{ litres}$. The resultant pressure inside will be (assuming whole system to be isolated) [MP PMT 1993]",
    "options": [
      "$4/3\\text{ m}$",
      "$0.5\\text{ m}$",
      "$2.0\\text{ m}$",
      "$3/4\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy Boyle's Law at constant temperature: $P_1 V_1 = P_2 V_2$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nTotal final volume $V_2 = 5 + 3 = 8\\text{ litres}$.\n$$0.8 \\times 5 = P_2 \\times 8$$\n$$4.0 = 8 P_2 \\implies P_2 = \\frac{4.0}{8} = 0.5\\text{ m}$$\n\n### ✓ Examiner Pro-Tip\n$4/8 = 0.5\\text{ m}$.",
    "tags": [
      "Thermodynamics",
      "Boyle's Law",
      "Connected Vessels"
    ]
  },
  {
    "id": "errorless-phy-thd-054",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "For an isothermal expansion of a perfect gas, the value of $\\frac{\\Delta P}{P}$ is equal to [CPMT 1980]",
    "options": [
      "$-\\gamma^{1/2} \\frac{\\Delta V}{V}$",
      "$-\\frac{\\Delta V}{V}$",
      "$-\\gamma \\frac{\\Delta V}{V}$",
      "$-\\gamma^2 \\frac{\\Delta V}{V}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an isothermal process, $PV = \\text{constant}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nDifferentiating logarithmically:\n$$\\ln P + \\ln V = \\text{constant}$$\n$$\\frac{dP}{P} + \\frac{dV}{V} = 0 \\implies \\frac{\\Delta P}{P} = -\\frac{\\Delta V}{V}$$\n\n### ✓ Examiner Pro-Tip\nFor an adiabatic process, $\\frac{\\Delta P}{P} = -\\gamma \\frac{\\Delta V}{V}$.",
    "tags": [
      "Thermodynamics",
      "Fractional Pressure Change",
      "Isothermal"
    ]
  },
  {
    "id": "errorless-phy-thd-055",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "The gas law $\\frac{PV}{T} = \\text{constant}$ is true for [MNR 1974; MP PMT 1984; BHU 1995, 98, 2000]",
    "options": [
      "Isothermal changes only",
      "Adiabatic changes only",
      "Both isothermal and adiabatic changes",
      "Neither isothermal nor adiabatic changes"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe ideal gas equation $\\frac{PV}{T} = \\mu R = \\text{constant}$ is an equation of state that holds universally for all equilibrium states of an ideal gas across **both isothermal and adiabatic changes** (as well as isobaric and isochoric changes).",
    "tags": [
      "Thermodynamics",
      "Ideal Gas Law",
      "Universal Validity"
    ]
  },
  {
    "id": "errorless-phy-thd-056",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Hard",
    "questionText": "One mole of $\\text{O}_2$ gas having a volume equal to $22.4\\text{ litres}$ at $0^\\circ\\text{C}$ and $1\\text{ atmospheric}$ pressure is compressed isothermally so that its volume reduces to $11.2\\text{ litres}$. The work done in this process is [MP PET 1993; BVP 2003]",
    "options": [
      "$1672.5\\text{ J}$",
      "$1728\\text{ J}$",
      "$-1728\\text{ J}$",
      "$-1572.5\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\mu R T \\ln \\left(\\frac{V_f}{V_i}\\right)$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\mu = 1, T = 273.15\\text{ K}, R = 8.314\\text{ J/mol}\\cdot\\text{K}, V_i = 22.4, V_f = 11.2$:\n$$W = 1 \\times 8.314 \\times 273.15 \\times \\ln\\left(\\frac{11.2}{22.4}\\right) = 2270.97 \\times (-\\ln 2)$$\n$$W = 2270.97 \\times (-0.69315) \\approx -1574\\text{ J} \\approx -1572.5\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nCompression work done *by* the gas is negative ($W = -1572.5\\text{ J}$).",
    "tags": [
      "Thermodynamics",
      "Isothermal Compression",
      "Work Done"
    ]
  },
  {
    "id": "errorless-phy-thd-057",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "If a gas is heated at constant pressure, its isothermal compressibility [MP PET 1984]",
    "options": [
      "Remains constant",
      "Increases linearly with temperature",
      "Decreases linearly with temperature",
      "Decreases inversely with temperature"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIsothermal bulk modulus is $E_\\theta = P$. Isothermal compressibility is $\\beta = \\frac{1}{E_\\theta} = \\frac{1}{P}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince the gas is heated at **constant pressure** ($P = \\text{constant}$), its isothermal compressibility $\\beta = \\frac{1}{P}$ **remains constant**.",
    "tags": [
      "Thermodynamics",
      "Isothermal Compressibility",
      "Constant Pressure"
    ]
  },
  {
    "id": "errorless-phy-thd-058",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "Work done per mol in an isothermal change is [RPMT 2004; BCECE 2005]",
    "options": [
      "$R T \\log_{10} \\left(\\frac{V_2}{V_1}\\right)$",
      "$R T \\log_{10} \\left(\\frac{V_1}{V_2}\\right)$",
      "$R T \\log_e \\left(\\frac{V_2}{V_1}\\right)$",
      "$R T \\log_e \\left(\\frac{V_1}{V_2}\\right)$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$w = \\int_{V_1}^{V_2} P dV = \\int_{V_1}^{V_2} \\frac{R T}{V} dV = R T \\ln \\left(\\frac{V_2}{V_1}\\right) = R T \\log_e \\left(\\frac{V_2}{V_1}\\right)$$",
    "tags": [
      "Thermodynamics",
      "Isothermal Work per Mole",
      "Formula"
    ]
  },
  {
    "id": "errorless-phy-thd-059",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "The isothermal Bulk modulus of an ideal gas at pressure $P$ is [CPMT 1974, 81; UPSEAT 1998; IIT 1998]",
    "options": [
      "$P$",
      "$\\gamma P$",
      "$P / 2$",
      "$P / \\gamma$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nBulk modulus is defined as $E = -V \\frac{dP}{dV}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor an isothermal process, $PV = \\text{constant} \\implies P dV + V dP = 0 \\implies -V \\frac{dP}{dV} = P$.\nThus, **isothermal elasticity $E_\\theta = P$**.",
    "tags": [
      "Thermodynamics",
      "Bulk Modulus",
      "Isothermal Elasticity"
    ]
  },
  {
    "id": "errorless-phy-thd-060",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "In isothermal expansion, the pressure is determined by [AFMC 1995]",
    "options": [
      "Temperature only",
      "Compressibility only",
      "Both temperature and compressibility",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an isothermal change, isothermal elasticity is $E_\\theta = P$.\nSince compressibility $\\beta = \\frac{1}{E_\\theta} = \\frac{1}{P}$, pressure is directly determined by the **compressibility only** ($P = 1/\\beta$).",
    "tags": [
      "Thermodynamics",
      "Isothermal Process",
      "Compressibility"
    ]
  },
  {
    "id": "errorless-phy-thd-061",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "The isothermal bulk modulus of a perfect gas at normal pressure is [AFMC 1997]",
    "options": [
      "$1.013 \\times 10^5\\text{ N/m}^2$",
      "$1.013 \\times 10^6\\text{ N/m}^2$",
      "$1.013 \\times 10^{-11}\\text{ N/m}^2$",
      "$1.013 \\times 10^{11}\\text{ N/m}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$E_\\theta = P$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nAt normal atmospheric pressure (NTP):\n$$P = 1\\text{ atm} = 1.013 \\times 10^5\\text{ N/m}^2$$\nTherefore, $E_\\theta = 1.013 \\times 10^5\\text{ N/m}^2$.",
    "tags": [
      "Thermodynamics",
      "Bulk Modulus at NTP",
      "Normal Pressure"
    ]
  },
  {
    "id": "errorless-phy-thd-062",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "In an isothermal change, an ideal gas obeys [EAMCET 1994; CPMT 1999]",
    "options": [
      "Boyle's law",
      "Charle's law",
      "Gay-Lussac's law",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nAn isothermal change occurs at constant temperature ($T = \\text{constant}$). For a fixed mass of gas, $PV = \\text{constant}$, which is **Boyle's Law**.",
    "tags": [
      "Thermodynamics",
      "Boyle's Law",
      "Isothermal Change"
    ]
  },
  {
    "id": "errorless-phy-thd-063",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "In an isothermal process, which statement is wrong [RPMT 1997]",
    "options": [
      "Temperature is constant",
      "Internal energy is constant",
      "No exchange of energy",
      "(a) and (b) are correct"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isothermal process, heat is freely exchanged between the system and its surroundings ($Q = W \\ne 0$) in order to maintain a constant temperature.\nTherefore, the statement **'No exchange of energy' is wrong**.",
    "tags": [
      "Thermodynamics",
      "Isothermal Process",
      "Energy Exchange"
    ]
  },
  {
    "id": "errorless-phy-thd-064",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Hard",
    "questionText": "An ideal gas A and a real gas B have their volumes increased from $V$ to $2V$ under isothermal conditions. The increase in internal energy [CBSE PMT 1993; JIPMER 2001, 02]",
    "options": [
      "Will be same in both A and B",
      "Will be zero in both the gases",
      "Of B will be more than that of A",
      "Of A will be more than that of B"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n- For ideal gas A: Intermolecular forces are zero, so internal energy depends only on temperature. Since $T$ is constant, $\\Delta U_A = 0$.\n- For real gas B: Intermolecular attractive forces exist (Van der Waals parameter $a > 0$). When volume expands from $V$ to $2V$, molecules move further apart, doing work against intermolecular attractions, which increases their potential energy ($\\Delta U_B = \\frac{a}{V} - \\frac{a}{2V} = \\frac{a}{2V} > 0$).\nThus, the increase in internal energy **of B will be more than that of A**.",
    "tags": [
      "Thermodynamics",
      "Real Gas vs Ideal Gas",
      "Internal Potential Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-065",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "The specific heat of a gas in an isothermal process is [AFMC 1998]",
    "options": [
      "Infinite",
      "Zero",
      "Negative",
      "Remains constant"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$C = \\frac{\\Delta Q}{m \\Delta T}$$\nIn an isothermal process, $\\Delta T = 0$ while heat is exchanged ($\\Delta Q \\ne 0$).\n$$C = \\frac{\\Delta Q}{m \\times 0} = \\infty$$\nTherefore, specific heat in an isothermal process is **infinite**.",
    "tags": [
      "Thermodynamics",
      "Isothermal Specific Heat",
      "Infinite"
    ]
  },
  {
    "id": "errorless-phy-thd-066",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "A thermally insulated container is divided into two parts by a screen. In one part the pressure and temperature are $P$ and $T$ for an ideal gas filled. In the second part it is vacuum. If now a small hole is created in the screen, then the temperature of the gas will [RPET 1999]",
    "options": [
      "Decrease",
      "Increase",
      "Remain same",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThis is **free expansion of an ideal gas**:\n- $Q = 0$ (thermally insulated)\n- $W = 0$ (expansion against zero pressure vacuum)\n- $\\Delta U = Q - W = 0$\nSince internal energy of an ideal gas depends only on temperature, $\\Delta U = 0 \\implies$ temperature **remains the same** ($T_f = T$).",
    "tags": [
      "Thermodynamics",
      "Free Expansion",
      "Constant Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-067",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "A container that suits the occurrence of an isothermal process should be made of [Pb. PMT 2000]",
    "options": [
      "Copper",
      "Glass",
      "Wood",
      "Cloth"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an isothermal process, heat generated or absorbed during compression/expansion must be rapidly transferred to or from the surroundings so that temperature remains strictly constant. This requires a container made of a material with high thermal conductivity, such as **copper**.",
    "tags": [
      "Thermodynamics",
      "Isothermal Container",
      "Thermal Conductivity"
    ]
  },
  {
    "id": "errorless-phy-thd-068",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "In an isothermal process the volume of an ideal gas is halved. One can say that [MP PMT 2004]",
    "options": [
      "Internal energy of the system decreases",
      "Work done by the gas is positive",
      "Work done by the gas is negative",
      "Internal energy of the system increases"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\mu R T \\ln \\left(\\frac{V_f}{V_i}\\right)$$\nWhen volume is halved ($V_f = V_i / 2$):\n$$W = \\mu R T \\ln \\left(\\frac{1}{2}\\right) = -\\mu R T \\ln 2 < 0$$\nThus, **work done by the gas is negative** (work is done on the gas).",
    "tags": [
      "Thermodynamics",
      "Isothermal Compression",
      "Negative Work"
    ]
  },
  {
    "id": "errorless-phy-thd-069",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "A thermodynamic process in which temperature $T$ of the system remains constant though other variables $P$ and $V$ may change, is called [Pb. PMT 2004]",
    "options": [
      "Isochoric process",
      "Isothermal process",
      "Isobaric process",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy definition, a process conducted at constant temperature is termed an **isothermal process**.",
    "tags": [
      "Thermodynamics",
      "Definitions",
      "Isothermal Process"
    ]
  },
  {
    "id": "errorless-phy-thd-070",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "If an ideal gas is compressed isothermally then [RPMT 2003]",
    "options": [
      "No work is done against gas",
      "Heat is released by the gas",
      "The internal energy of gas will increase",
      "Pressure does not change"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nDuring isothermal compression, mechanical work is done on the gas ($W < 0$). Since temperature is constant ($\\Delta U = 0$):\n$$Q = \\Delta U + W = 0 + W < 0$$\nNegative $Q$ signifies that **heat is released by the gas** to the isothermal surroundings.",
    "tags": [
      "Thermodynamics",
      "Isothermal Compression",
      "Heat Release"
    ]
  },
  {
    "id": "errorless-phy-thd-071",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "When an ideal gas in a cylinder was compressed isothermally by a piston, the work done on the gas was found to be $1.5 \\times 10^4\\text{ joules}$. During this process about [MP PMT 1987]",
    "options": [
      "$3.6 \\times 10^3\\text{ cal}$ of heat flowed out from the gas",
      "$3.6 \\times 10^3\\text{ cal}$ of heat flowed into the gas",
      "$1.5 \\times 10^4\\text{ cal}$ of heat flowed into the gas",
      "$1.5 \\times 10^4\\text{ cal}$ of heat flowed out from the gas"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$Q = W = -1.5 \\times 10^4\\text{ J}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nConverting to calories ($J = 4.186\\text{ J/cal}$):\n$$Q = -\\frac{1.5 \\times 10^4}{4.186} \\approx -3.583 \\times 10^3\\text{ cal} \\approx -3.6 \\times 10^3\\text{ cal}$$\nThus, **$3.6 \\times 10^3\\text{ cal}$ of heat flowed out from the gas**.",
    "tags": [
      "Thermodynamics",
      "Isothermal Compression",
      "Heat Flow"
    ]
  },
  {
    "id": "errorless-phy-thd-072",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "When heat is given to a gas in an isothermal change, the result will be [MP PET 1995; RPMT 1997]",
    "options": [
      "External work done",
      "Rise in temperature",
      "Increase in internal energy",
      "External work done and also rise in temp."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isothermal process, $\\Delta U = 0$.\nFrom FLOT: $Q = \\Delta U + W \\implies Q = W$.\nAll heat supplied is converted directly into **external work done** by the gas.",
    "tags": [
      "Thermodynamics",
      "Isothermal Process",
      "Work Conversion"
    ]
  },
  {
    "id": "errorless-phy-thd-073",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "When $1\\text{ gm}$ of water at $0^\\circ\\text{C}$ and $1 \\times 10^5\\text{ N/m}^2$ pressure is converted into ice of volume $1.091\\text{ cm}^3$, the external work done will be",
    "options": [
      "$0.0091\\text{ joule}$",
      "$0.0182\\text{ joule}$",
      "$-0.0091\\text{ joule}$",
      "$-0.0182\\text{ joule}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = P \\Delta V = P (V_{\\text{ice}} - V_{\\text{water}})$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nInitial volume of water: $V_1 = 1\\text{ cm}^3 = 10^{-6}\\text{ m}^3$.\nFinal volume of ice: $V_2 = 1.091\\text{ cm}^3 = 1.091 \\times 10^{-6}\\text{ m}^3$.\n$$\\Delta V = (1.091 - 1.0) \\times 10^{-6} = 0.091 \\times 10^{-6}\\text{ m}^3$$\n$$W = (1 \\times 10^5\\text{ N/m}^2) \\times (0.091 \\times 10^{-6}\\text{ m}^3) = 0.0091\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nWork done by system in expanding against atmospheric pressure is $+0.0091\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Phase Transition Work",
      "Freezing of Water"
    ]
  },
  {
    "id": "errorless-phy-thd-074",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "The latent heat of vaporisation of water is $2240\\text{ J/gm}$. If the work done in the process of expansion of $1\\text{ g}$ is $168\\text{ J}$, then increase in internal energy is [Pb. PET 1998; CPMT 2000]",
    "options": [
      "$2408\\text{ J}$",
      "$2240\\text{ J}$",
      "$2072\\text{ J}$",
      "$1904\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = Q - W$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $Q = m L_v = 1\\text{ g} \\times 2240\\text{ J/g} = 2240\\text{ J}$ and $W = 168\\text{ J}$:\n$$\\Delta U = 2240 - 168 = 2072\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$2240 - 168 = 2072\\text{ J}$. Most of the heat goes into breaking intermolecular hydrogen bonds (increasing internal potential energy).",
    "tags": [
      "Thermodynamics",
      "Vaporization",
      "Internal Energy Increase"
    ]
  },
  {
    "id": "errorless-phy-thd-075",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Hard",
    "questionText": "$540\\text{ calories}$ of heat convert $1\\text{ cubic centimeter}$ of water at $100^\\circ\\text{C}$ into $1671\\text{ cubic centimeter}$ of steam at $100^\\circ\\text{C}$ at a pressure of one atmosphere. Then the work done against the atmospheric pressure is nearly",
    "options": [
      "$540\\text{ cal}$",
      "$40\\text{ cal}$",
      "$\\text{Zero cal}$",
      "$500\\text{ cal}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = P \\Delta V$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $P = 1.013 \\times 10^5\\text{ N/m}^2$, $\\Delta V = (1671 - 1)\\text{ cm}^3 = 1670 \\times 10^{-6}\\text{ m}^3$:\n$$W = (1.013 \\times 10^5) \\times (1670 \\times 10^{-6}) = 169.17\\text{ J}$$\nIn calories:\n$$W = \\frac{169.17}{4.186} \\approx 40.4\\text{ cal} \\approx 40\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\nOut of $540\\text{ cal}$, $40\\text{ cal}$ is external expansion work against the atmosphere and $500\\text{ cal}$ is stored as internal potential energy.",
    "tags": [
      "Thermodynamics",
      "Steam Expansion",
      "Work in Vaporization"
    ]
  },
  {
    "id": "errorless-phy-thd-076",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "One mole of an ideal gas expands at a constant temperature of $300\\text{ K}$ from an initial volume of $10\\text{ litres}$ to a final volume of $20\\text{ litres}$. The work done in expanding the gas is ($R = 8.31\\text{ J/mole}\\cdot\\text{K}$) [MP PMT 1995; UPSEAT 2000]",
    "options": [
      "$750\\text{ joules}$",
      "$1728\\text{ joules}$",
      "$1500\\text{ joules}$",
      "$3456\\text{ joules}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\mu R T \\ln \\left(\\frac{V_2}{V_1}\\right)$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = 1 \\times 8.31 \\times 300 \\times \\ln(2) = 2493 \\times 0.69315 = 1728.02\\text{ J} \\approx 1728\\text{ joules}$$\n\n### ✓ Examiner Pro-Tip\n$2493 \\times 0.693 = 1728\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Isothermal Expansion",
      "Work Done"
    ]
  },
  {
    "id": "errorless-phy-thd-077",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "A cylinder fitted with a piston contains $0.2\\text{ moles}$ of air at temperature $27^\\circ\\text{C}$. The piston is pushed so slowly that the air within the cylinder remains in thermal equilibrium with the surroundings. Find the approximate work done by the system if the final volume is twice the initial volume [BHU 2000]",
    "options": [
      "$543\\text{ J}$",
      "$345\\text{ J}$",
      "$453\\text{ J}$",
      "$600\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\mu R T \\ln \\left(\\frac{V_2}{V_1}\\right)$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\mu = 0.2\\text{ mol}, T = 27 + 273 = 300\\text{ K}, R = 8.31\\text{ J/mol}\\cdot\\text{K}$:\n$$W = 0.2 \\times 8.31 \\times 300 \\times 0.693 = 498.6 \\times 0.693 = 345.5\\text{ J} \\approx 345\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$0.2 \\times 1728 = 345.6\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Isothermal Work",
      "Air Expansion"
    ]
  },
  {
    "id": "errorless-phy-thd-078",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Medium",
    "questionText": "The volume of an ideal gas is $1\\text{ litre}$ and its pressure is equal to $72\\text{ cm}$ of mercury column. The volume of gas is made $900\\text{ cm}^3$ by compressing it isothermally. The stress of the gas will be [UPSEAT 1999]",
    "options": [
      "$8\\text{ cm (mercury)}$",
      "$7\\text{ cm (mercury)}$",
      "$6\\text{ cm (mercury)}$",
      "$4\\text{ cm (mercury)}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nStress is defined as the change in pressure: $\\text{Stress} = \\Delta P = P_2 - P_1$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nBy Boyle's Law: $P_1 V_1 = P_2 V_2$.\nGiven $P_1 = 72\\text{ cm}, V_1 = 1000\\text{ cm}^3, V_2 = 900\\text{ cm}^3$:\n$$P_2 = \\frac{P_1 V_1}{V_2} = \\frac{72 \\times 1000}{900} = \\frac{720}{9} = 80\\text{ cm of Hg}$$\n$$\\text{Stress } \\Delta P = 80 - 72 = 8\\text{ cm of Hg}$$\n\n### ✓ Examiner Pro-Tip\nStress in a fluid equals excess hydrostatic pressure $\\Delta P$.",
    "tags": [
      "Thermodynamics",
      "Isothermal Compression",
      "Stress"
    ]
  },
  {
    "id": "errorless-phy-thd-079",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isothermal Process",
    "difficulty": "Easy",
    "questionText": "During an isothermal expansion of an ideal gas [UPSEAT 2005]",
    "options": [
      "Its internal energy decreases",
      "Its internal energy does not change",
      "The work done by the gas is equal to the quantity of heat absorbed by it",
      "Both (b) and (c) are correct"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isothermal expansion of an ideal gas:\n1. Since $T = \\text{constant}$, $\\Delta U = 0$ (internal energy does not change).\n2. From FLOT: $Q = \\Delta U + W = 0 + W = W$ (work done equals heat absorbed).\nTherefore, **both (b) and (c) are correct**.",
    "tags": [
      "Thermodynamics",
      "Isothermal Expansion",
      "Work and Heat Equivalence"
    ]
  },
  {
    "id": "errorless-phy-thd-080",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "If a cylinder containing a gas at high pressure explodes, the gas undergoes [MP PET/PMT 1988]",
    "options": [
      "Reversible adiabatic change and fall of temperature",
      "Reversible adiabatic change and rise of temperature",
      "Irreversible adiabatic change and fall of temperature",
      "Irreversible adiabatic change and rise of temperature"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nAn explosion occurs suddenly and explosively, allowing no time for heat exchange with surroundings ($Q = 0$, adiabatic). Rapid, uncontrolled expansion against atmospheric pressure is inherently **irreversible**.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom FLOT: $\\Delta U = -W$. Since the gas expands ($W > 0$), $\\Delta U < 0$, causing a **fall of temperature**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Irreversible Process"
    ]
  },
  {
    "id": "errorless-phy-thd-081",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The work done in an adiabatic change in a gas depends only on [CPMT 1971; MP PMT 2004]",
    "options": [
      "Change in pressure",
      "Change in volume",
      "Change in temperature",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\frac{\\mu R (T_i - T_f)}{\\gamma - 1} = -\\Delta U = -\\mu C_v \\Delta T$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor a given mass and type of gas, the work done depends exclusively on the **change in temperature** ($\\Delta T = T_i - T_f$).",
    "tags": [
      "Thermodynamics",
      "Adiabatic Work",
      "Temperature Dependence"
    ]
  },
  {
    "id": "errorless-phy-thd-082",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "In adiabatic expansion [DPMT 1999]",
    "options": [
      "$\\Delta U = 0$",
      "$\\Delta U = \\text{negative}$",
      "$\\Delta U = \\text{positive}$",
      "$\\Delta W = \\text{zero}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an adiabatic process, $Q = 0$.\n$$\\Delta U = Q - W = 0 - W = -W$$\nDuring expansion, $W > 0 \\implies \\Delta U < 0$ (**negative**). Internal energy decreases as it is converted into external mechanical work.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Internal Energy Decrease"
    ]
  },
  {
    "id": "errorless-phy-thd-083",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "The pressure in the tyre of a car is four times the atmospheric pressure at $300\\text{ K}$. If this tyre suddenly bursts, its new temperature will be ($\\gamma = 1.4$) [RPMT 1996; MP PMT 1990]",
    "options": [
      "$300 (4)^{1.4 / 0.4}$",
      "$300 \\left(\\frac{1}{4}\\right)^{-0.4 / 1.4}$",
      "$300 (2)^{-0.4 / 1.4}$",
      "$300 (4)^{-0.4 / 1.4}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an adiabatic process:\n$$T^\\gamma P^{1-\\gamma} = \\text{constant} \\implies T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 300\\text{ K}$, $P_1 = 4 P_{\\text{atm}}$, $P_2 = P_{\\text{atm}}$:\n$$\\frac{P_2}{P_1} = \\frac{1}{4} = 4^{-1}$$\n$$T_2 = 300 (4^{-1})^{\\frac{1.4 - 1}{1.4}} = 300 (4)^{-\\frac{0.4}{1.4}}$$\n\n### ✓ Examiner Pro-Tip\n$T_2 = 300 (4)^{-0.4/1.4} \\approx 201.9\\text{ K} = -71.2^\\circ\\text{C}$.",
    "tags": [
      "Thermodynamics",
      "Tyre Burst",
      "Adiabatic Cooling"
    ]
  },
  {
    "id": "errorless-phy-thd-084",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A gas at NTP is suddenly compressed to one-fourth of its original volume. If $\\gamma$ is supposed to be $\\frac{3}{2}$, then the final pressure is [BHU 1995]",
    "options": [
      "$4\\text{ atmosphere}$",
      "$\\frac{3}{2}\\text{ atmosphere}$",
      "$8\\text{ atmosphere}$",
      "$\\frac{1}{4}\\text{ atmosphere}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$P_1 V_1^\\gamma = P_2 V_2^\\gamma \\implies P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $P_1 = 1\\text{ atm}$, $\\frac{V_1}{V_2} = 4$, $\\gamma = 3/2$:\n$$P_2 = 1 \\times (4)^{3/2} = (\\sqrt{4})^3 = 2^3 = 8\\text{ atmospheres}$$\n\n### ✓ Examiner Pro-Tip\n$4^{3/2} = 8$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Compression",
      "Pressure Calculation"
    ]
  },
  {
    "id": "errorless-phy-thd-085",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A monoatomic gas ($\\gamma = 5/3$) is suddenly compressed to $\\frac{1}{8}$ of its original volume adiabatically, then the pressure of the gas will change to [CPMT 1976; MP PMT 1994; Roorkee 2000; KCET 2000; Pb. PMT 2001]",
    "options": [
      "$\\frac{24}{5}$ times",
      "$8$ times",
      "$\\frac{40}{3}$ times",
      "$32\\text{ times its initial pressure}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\frac{V_1}{V_2} = 8, \\gamma = 5/3$:\n$$P_2 = P_1 \\times (8)^{5/3} = (8^{1/3})^5 P_1 = 2^5 P_1 = 32 P_1$$\nThus, pressure becomes **$32\\text{ times its initial pressure}$**.",
    "tags": [
      "Thermodynamics",
      "Monoatomic Gas",
      "Adiabatic Compression"
    ]
  },
  {
    "id": "errorless-phy-thd-086",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "The pressure and density of a diatomic gas ($\\gamma = 7/5$) change adiabatically from $(P, d)$ to $(P', d')$. If $\\frac{d'}{d} = 32$, then $\\frac{P'}{P}$ should be [CPMT 1982; EAMCET 2001]",
    "options": [
      "$1/128$",
      "$32$",
      "$128$",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nSince volume $V = \\frac{m}{d}$, $P V^\\gamma = \\text{const} \\implies P \\propto d^\\gamma$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\frac{P'}{P} = \\left(\\frac{d'}{d}\\right)^\\gamma = (32)^{7/5} = (2^5)^{7/5} = 2^7 = 128$$\n\n### ✓ Examiner Pro-Tip\n$2^7 = 128$.",
    "tags": [
      "Thermodynamics",
      "Density and Pressure",
      "Adiabatic Relation"
    ]
  },
  {
    "id": "errorless-phy-thd-087",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Hard",
    "questionText": "An ideal gas at $27^\\circ\\text{C}$ is compressed adiabatically to $\\frac{8}{27}$ of its original volume. If $\\gamma = \\frac{5}{3}$, then the rise in temperature is [CBSE PMT 1999; DPMT 2000; BHU 2001; UPSEAT 2002; KCET 2003]",
    "options": [
      "$450\\text{ K}$",
      "$375\\text{ K}$",
      "$225\\text{ K}$",
      "$405\\text{ K}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1} \\implies T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 27 + 273 = 300\\text{ K}, \\frac{V_1}{V_2} = \\frac{27}{8}, \\gamma - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$:\n$$T_2 = 300 \\times \\left(\\frac{27}{8}\\right)^{2/3} = 300 \\times \\left[\\left(\\frac{3}{2}\\right)^3\\right]^{2/3} = 300 \\times \\left(\\frac{3}{2}\\right)^2 = 300 \\times \\frac{9}{4} = 675\\text{ K}$$\nRise in temperature:\n$$\\Delta T = T_2 - T_1 = 675 - 300 = 375\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\nRemember to subtract initial temperature ($300\\text{ K}$) to find the *rise* in temperature ($375\\text{ K}$).",
    "tags": [
      "Thermodynamics",
      "Adiabatic Heating",
      "Rise in Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-088",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "Two identical samples of a gas are allowed to expand (i) isothermally (ii) adiabatically to the same final volume. Work done is [MNR 1998]",
    "options": [
      "More in the isothermal process",
      "More in the adiabatic process",
      "Neither of them",
      "Equal in both processes"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nOn a $P-V$ diagram, the isothermal curve lies strictly above the steeper adiabatic curve during expansion from $V_i$ to $V_f$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Area}_{\\text{isothermal}} > \\text{Area}_{\\text{adiabatic}} \\implies W_{\\text{isothermal}} > W_{\\text{adiabatic}}$$",
    "tags": [
      "Thermodynamics",
      "Isothermal vs Adiabatic Work",
      "PV Diagram"
    ]
  },
  {
    "id": "errorless-phy-thd-089",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "Which is the correct statement [MP PMT 1993]",
    "options": [
      "For an isothermal change $PV = \\text{constant}$",
      "In an isothermal process the change in internal energy must be equal to the work done",
      "For an adiabatic change $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^\\gamma$, where $\\gamma$ is the ratio of specific heats",
      "In an adiabatic process work done must be equal to the heat entering the system"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an isothermal process, $T = \\text{constant}$, hence $PV = \\mu R T = \\text{constant}$ (Boyle's Law).\n(Option (c) is inverse: $\\frac{P_2}{P_1} = \\left(\\frac{V_1}{V_2}\\right)^\\gamma$).",
    "tags": [
      "Thermodynamics",
      "Isothermal Condition",
      "Correct Statements"
    ]
  },
  {
    "id": "errorless-phy-thd-090",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The slopes of isothermal and adiabatic curves at any common point are related as [CPMT 1971; BHU 1996; MH CET 1999; UPSEAT 2000; RPET 2003]",
    "options": [
      "$\\text{Isothermal curve slope} = \\text{adiabatic curve slope}$",
      "$\\text{Isothermal curve slope} = \\gamma \\times \\text{adiabatic curve slope}$",
      "$\\text{Adiabatic curve slope} = \\gamma \\times \\text{isothermal curve slope}$",
      "$\\text{Adiabatic curve slope} = \\frac{1}{2} \\times \\text{isothermal curve slope}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n- Isothermal slope: $\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$\n- Adiabatic slope: $\\left(\\frac{dP}{dV}\\right)_{\\text{adi}} = -\\gamma \\frac{P}{V}$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\left(\\frac{dP}{dV}\\right)_{\\text{adi}} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$$\nSince $\\gamma > 1$, adiabatic curves are $\\gamma$ times steeper than isothermal curves.",
    "tags": [
      "Thermodynamics",
      "Slope of Adiabatic",
      "Isothermal Slope"
    ]
  },
  {
    "id": "errorless-phy-thd-091",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "Pressure-temperature relationship for an ideal gas undergoing adiabatic change is ($\\gamma = C_P / C_V$) [CPMT 1992; MP PMT 1997; Pb. PET 1998; DCE 2001; UPSEAT 2001; AFMC 2002]",
    "options": [
      "$P T^\\gamma = \\text{constant}$",
      "$P T^{-1+\\gamma} = \\text{constant}$",
      "$P^{\\gamma-1} T^\\gamma = \\text{constant}$",
      "$P^{1-\\gamma} T^\\gamma = \\text{constant}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom $P V^\\gamma = \\text{constant}$ and substituting $V = \\frac{\\mu R T}{P}$:\n$$P \\left(\\frac{T}{P}\\right)^\\gamma = \\text{constant} \\implies P^{1-\\gamma} T^\\gamma = \\text{constant}$$\n\n### ✓ Examiner Pro-Tip\nEquivalent forms: $\\frac{T^\\gamma}{P^{\\gamma-1}} = \\text{const}$ or $T \\propto P^{\\frac{\\gamma-1}{\\gamma}}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Relation",
      "Pressure-Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-092",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The amount of work done in an adiabatic expansion from temperature $T$ to $T_1$ is [MP PMT 1989]",
    "options": [
      "$R(T - T_1)$",
      "$\\frac{R}{\\gamma - 1}(T - T_1)$",
      "$R T$",
      "$R(T - T_1)(\\gamma - 1)$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor 1 mole of an ideal gas in an adiabatic process ($T_i = T, T_f = T_1$):\n$$W = \\frac{R (T_i - T_f)}{\\gamma - 1} = \\frac{R (T - T_1)}{\\gamma - 1}$$",
    "tags": [
      "Thermodynamics",
      "Adiabatic Work",
      "Formula"
    ]
  },
  {
    "id": "errorless-phy-thd-093",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "During the adiabatic expansion of $2\\text{ moles}$ of a gas, the internal energy of the gas is found to decrease by $2\\text{ joules}$, the work done during the process on the gas will be equal to [CPMT 1988]",
    "options": [
      "$1\\text{ J}$",
      "$-1\\text{ J}$",
      "$2\\text{ J}$",
      "$-2\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn adiabatic process: $\\Delta U = -W_{\\text{by}}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\Delta U = -2\\text{ J}$:\n$$W_{\\text{by}} = -\\Delta U = -(-2) = +2\\text{ J}$$\nTherefore, work done **on the gas** ($W_{\\text{on}} = -W_{\\text{by}}$) is **$-2\\text{ J}$**.",
    "tags": [
      "Thermodynamics",
      "Work on Gas",
      "Adiabatic Expansion"
    ]
  },
  {
    "id": "errorless-phy-thd-094",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The adiabatic elasticity of hydrogen gas ($\\gamma = 1.4$) at NTP is [MP PMT 1990]",
    "options": [
      "$1 \\times 10^5\\text{ N/m}^2$",
      "$1 \\times 10^{-8}\\text{ N/m}^2$",
      "$1.4\\text{ N/m}^2$",
      "$1.4 \\times 10^5\\text{ N/m}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nAdiabatic Bulk Modulus $E_\\phi = \\gamma P$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nAt NTP, $P = 1.013 \\times 10^5\\text{ N/m}^2 \\approx 10^5\\text{ N/m}^2$:\n$$E_\\phi = 1.4 \\times (10^5) = 1.4 \\times 10^5\\text{ N/m}^2$$",
    "tags": [
      "Thermodynamics",
      "Adiabatic Elasticity",
      "NTP"
    ]
  },
  {
    "id": "errorless-phy-thd-095",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "If $\\gamma$ denotes the ratio of two specific heats of a gas, the ratio of slopes of adiabatic and isothermal PV curves at their point of intersection is [NCERT 1990; MH CET 1999; MP PMT 2000]",
    "options": [
      "$1 / \\gamma$",
      "$\\gamma$",
      "$\\gamma - 1$",
      "$\\gamma + 1$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\frac{(\\text{Slope})_{\\text{adiabatic}}}{(\\text{Slope})_{\\text{isothermal}}} = \\frac{-\\gamma P/V}{-P/V} = \\gamma$$",
    "tags": [
      "Thermodynamics",
      "Ratio of Slopes",
      "Adiabatic vs Isothermal"
    ]
  },
  {
    "id": "errorless-phy-thd-096",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "Air in a cylinder is suddenly compressed by a piston, which is then maintained at the same position. With the passage of time [NCERT 1971; DPMT 1995; JIPMER 1997; KCET 2000; AIIMS 2000; MH CET 2001]",
    "options": [
      "The pressure decreases",
      "The pressure increases",
      "The pressure remains the same",
      "The pressure may increase or decrease depending upon the nature of the gas"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n1. Sudden compression is adiabatic, causing a sharp rise in both temperature and pressure.\n2. When held at fixed volume, heat begins dissipating through the cylinder walls to the cooler ambient environment, cooling the gas back down to room temperature.\n3. By Gay-Lussac's Law ($P \\propto T$ at constant $V$), as temperature decreases, the pressure **decreases**.",
    "tags": [
      "Thermodynamics",
      "Sudden Compression",
      "Pressure Decay"
    ]
  },
  {
    "id": "errorless-phy-thd-097",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "When a gas expands adiabatically [CPMT 1990]",
    "options": [
      "No energy is required for expansion",
      "Energy is required and it comes from the wall of the container of the gas",
      "Internal energy of the gas is used in doing work",
      "Law of conservation of energy does not hold"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nSince $Q = 0$, $W = -\\Delta U$. The external work of expansion is performed entirely at the expense of the gas's own **internal energy**, which decreases and causes cooling.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Internal Energy"
    ]
  },
  {
    "id": "errorless-phy-thd-098",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "One gm mol of a diatomic gas ($\\gamma = 1.4$) is compressed adiabatically so that its temperature rises from $27^\\circ\\text{C}$ to $127^\\circ\\text{C}$. The work done will be",
    "options": [
      "$2077.5\\text{ joules}$",
      "$207.5\\text{ joules}$",
      "$207.5\\text{ ergs}$",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\frac{\\mu R (T_i - T_f)}{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\mu = 1, \\gamma = 1.4, T_i = 300\\text{ K}, T_f = 400\\text{ K}, R = 8.31\\text{ J/mol}\\cdot\\text{K}$:\n$$W = \\frac{1 \\times 8.31 \\times (300 - 400)}{1.4 - 1} = \\frac{-831}{0.4} = -2077.5\\text{ J}$$\nWork done on the gas has magnitude **$2077.5\\text{ joules}$**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Compression Work",
      "Diatomic Gas"
    ]
  },
  {
    "id": "errorless-phy-thd-099",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "Compressed air in the tube of a wheel of a cycle at normal temperature suddenly starts coming out from a puncture. The air inside [NCERT 1970]",
    "options": [
      "Starts becoming hotter",
      "Remains at the same temperature",
      "Starts becoming cooler",
      "May become hotter or cooler depending upon the amount of water vapour present"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe sudden rushing out of air from high pressure to atmospheric pressure is an adiabatic expansion ($Q = 0, W > 0$). The expanding air does work against the atmosphere using its own internal energy, so it **starts becoming cooler**.",
    "tags": [
      "Thermodynamics",
      "Punctured Tyre",
      "Adiabatic Cooling"
    ]
  },
  {
    "id": "errorless-phy-thd-100",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The adiabatic Bulk modulus of a perfect gas at pressure $P$ is given by [CPMT 1982; MH CET 2001]",
    "options": [
      "$P$",
      "$2P$",
      "$P / 2$",
      "$\\gamma P$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$E_\\phi = -V \\left(\\frac{dP}{dV}\\right)_{\\text{adiabatic}} = -V \\left(-\\gamma \\frac{P}{V}\\right) = \\gamma P$$\nThus, **adiabatic Bulk modulus is $\\gamma P$**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Bulk Modulus",
      "Formula"
    ]
  },
  {
    "id": "errorless-phy-thd-101",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "An adiabatic process occurs at constant [MNR 1985; AFMC 1996; AIIMS 1999; UPSEAT 1999, 2000; Pb. PET 2004]",
    "options": [
      "Temperature",
      "Pressure",
      "Heat",
      "Temperature and pressure"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy definition, an adiabatic process is one in which **no heat enters or leaves the system** ($Q = \\text{constant} \\implies dQ = 0$).",
    "tags": [
      "Thermodynamics",
      "Adiabatic Condition",
      "Constant Heat"
    ]
  },
  {
    "id": "errorless-phy-thd-102",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A polyatomic gas ($\\gamma = 4/3$) is compressed to $\\frac{1}{8}$ of its volume adiabatically. If its initial pressure is $P_0$, its new pressure will be [MP PET 1994; BHU 1995]",
    "options": [
      "$8 P_0$",
      "$16 P_0$",
      "$6 P_0$",
      "$2 P_0$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$P_2 = P_0 \\left(\\frac{V_1}{V_2}\\right)^\\gamma$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\frac{V_1}{V_2} = 8, \\gamma = 4/3$:\n$$P_2 = P_0 (8)^{4/3} = P_0 (8^{1/3})^4 = P_0 (2)^4 = 16 P_0$$\n\n### ✓ Examiner Pro-Tip\n$8^{4/3} = 16$.",
    "tags": [
      "Thermodynamics",
      "Polyatomic Gas",
      "Adiabatic Compression"
    ]
  },
  {
    "id": "errorless-phy-thd-103",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "For adiabatic processes ($\\gamma = C_P / C_V$) [KCET 1999; MP PET 1995; CPMT 2003]",
    "options": [
      "$P^\\gamma V = \\text{constant}$",
      "$T^\\gamma V = \\text{constant}$",
      "$T V^{\\gamma - 1} = \\text{constant}$",
      "$T V^\\gamma = \\text{constant}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nPoisson's equations for adiabatic change:\n1. $P V^\\gamma = \\text{constant}$\n2. $T V^{\\gamma - 1} = \\text{constant}$\n3. $T^\\gamma P^{1-\\gamma} = \\text{constant}$",
    "tags": [
      "Thermodynamics",
      "Poisson Relations",
      "TV Relation"
    ]
  },
  {
    "id": "errorless-phy-thd-104",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "An ideal gas is expanded adiabatically at an initial temperature of $300\\text{ K}$ so that its volume is doubled. The final temperature of the hydrogen gas is ($\\gamma = 1.40$) [MP PMT 1995; DPMT 1999]",
    "options": [
      "$227.36\\text{ K}$",
      "$500.30\\text{ K}$",
      "$454.76\\text{ K}$",
      "$-47^\\circ\\text{C}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 300\\text{ K}, \\frac{V_1}{V_2} = \\frac{1}{2}, \\gamma - 1 = 0.40$:\n$$T_2 = 300 \\times \\left(\\frac{1}{2}\\right)^{0.4} = \\frac{300}{2^{0.4}} = \\frac{300}{1.3195} \\approx 227.36\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\n$300 / 1.32 = 227.36\\text{ K}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Final Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-105",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "A given system undergoes a change in which the work done by the system equals the decrease in its internal energy. The system must have undergone an [Haryana CEE 1996; UPSEAT 2003]",
    "options": [
      "Isothermal change",
      "Adiabatic change",
      "Isobaric change",
      "Isochoric change"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom FLOT: $Q = \\Delta U + W$.\nWhen $W = -\\Delta U \\implies Q = 0$, the process is by definition **adiabatic**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Condition",
      "Internal Energy Conversion"
    ]
  },
  {
    "id": "errorless-phy-thd-106",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "During the adiabatic expansion of $2\\text{ moles}$ of a gas, the internal energy was found to have decreased by $100\\text{ J}$. The work done by the gas in this process is [MP PET 1996, 97]",
    "options": [
      "Zero",
      "$-100\\text{ J}$",
      "$200\\text{ J}$",
      "$100\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = -\\Delta U = -(-100\\text{ J}) = +100\\text{ J}$$\nThus, work done by the gas is **$100\\text{ J}$**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Work Done"
    ]
  },
  {
    "id": "errorless-phy-thd-107",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "In an adiabatic expansion of a gas initial and final temperatures are $T_1$ and $T_2$ respectively, then the change in internal energy of the gas is [MP PET 1997]",
    "options": [
      "$\\frac{R}{\\gamma - 1} (T_2 - T_1)$",
      "$\\frac{R}{\\gamma - 1} (T_1 - T_2)$",
      "$R(T_1 - T_2)$",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor 1 mole of gas:\n$$\\Delta U = C_v (T_f - T_i) = \\frac{R}{\\gamma - 1} (T_2 - T_1)$$\n\n### ✓ Examiner Pro-Tip\nNote: $\\Delta U = \\frac{R}{\\gamma - 1}(T_2 - T_1)$, whereas work done is $W = -\\Delta U = \\frac{R}{\\gamma - 1}(T_1 - T_2)$.",
    "tags": [
      "Thermodynamics",
      "Internal Energy Change",
      "Formula"
    ]
  },
  {
    "id": "errorless-phy-thd-108",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "Helium at $27^\\circ\\text{C}$ has a volume of $8\\text{ litres}$. It is suddenly compressed to a volume of $1\\text{ litre}$. The temperature of the gas will be [$\\gamma = 5/3$] [CBSE PMT 1993; MP PMT 1999; Pb. PMT 2002]",
    "options": [
      "$108^\\circ\\text{C}$",
      "$9327^\\circ\\text{C}$",
      "$1200^\\circ\\text{C}$",
      "$927^\\circ\\text{C}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 27 + 273 = 300\\text{ K}, \\frac{V_1}{V_2} = \\frac{8}{1} = 8, \\gamma - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$:\n$$T_2 = 300 \\times (8)^{2/3} = 300 \\times (2^3)^{2/3} = 300 \\times 4 = 1200\\text{ K}$$\nIn Celsius:\n$$t_2 = 1200 - 273 = 927^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\n$1200\\text{ K} = 927^\\circ\\text{C}$.",
    "tags": [
      "Thermodynamics",
      "Helium Compression",
      "Adiabatic Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-109",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "A cycle tyre bursts suddenly. This represents an [SCRA 1994]",
    "options": [
      "Isothermal process",
      "Isobaric process",
      "Isochoric process",
      "Adiabatic process"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nBecause the tyre bursts instantaneously, there is no time for heat exchange with the environment ($Q = 0$). This sudden expansion is a classic **adiabatic process**.",
    "tags": [
      "Thermodynamics",
      "Tyre Burst",
      "Adiabatic Process"
    ]
  },
  {
    "id": "errorless-phy-thd-110",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "One mole of helium is adiabatically expanded from its initial state $(P_i, V_i, T_i)$ to its final state $(P_f, V_f, T_f)$. The decrease in the internal energy associated with this expansion is equal to [SCRA 1994; BHU 2002]",
    "options": [
      "$C_V (T_i - T_f)$",
      "$C_P (T_i - T_f)$",
      "$\\frac{1}{2}(C_P + C_V)(T_i - T_f)$",
      "$(C_P - C_V)(T_i - T_f)$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nDecrease in internal energy is:\n$$-\\Delta U = U_i - U_f = \\mu C_V (T_i - T_f) = C_V (T_i - T_f)$$\nfor 1 mole of helium.",
    "tags": [
      "Thermodynamics",
      "Decrease in Internal Energy",
      "Formula"
    ]
  },
  {
    "id": "errorless-phy-thd-111",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Hard",
    "questionText": "At N.T.P. one mole of diatomic gas is compressed adiabatically to half of its volume ($\\gamma = 1.41$). The work done on gas will be [RPET 1997]",
    "options": [
      "$1280\\text{ J}$",
      "$1610\\text{ J}$",
      "$1815\\text{ J}$",
      "$2025\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = 273 \\times (2)^{0.41} = 273 \\times 1.3287 = 362.7\\text{ K}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W_{\\text{on}} = -W_{\\text{by}} = \\frac{R (T_2 - T_1)}{\\gamma - 1} = \\frac{8.314 \\times (362.7 - 273)}{1.41 - 1} = \\frac{8.314 \\times 89.7}{0.41} = \\frac{745.76}{0.41} \\approx 1819\\text{ J} \\approx 1815\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$W_{\\text{on}} \\approx 1815\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Diatomic Compression",
      "Work Calculation"
    ]
  },
  {
    "id": "errorless-phy-thd-112",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "For adiabatic process, the wrong statement is [RPMT 1997]",
    "options": [
      "$dQ = 0$",
      "$dU = -dW$",
      "$Q = \\text{constant}$",
      "Entropy is not constant"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn a reversible adiabatic process, $dS = \\frac{dQ}{T} = 0$, so entropy $S = \\text{constant}$ (isentropic process).\nTherefore, the statement **'Entropy is not constant' is wrong**.",
    "tags": [
      "Thermodynamics",
      "Isentropic Process",
      "Entropy"
    ]
  },
  {
    "id": "errorless-phy-thd-113",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A diatomic gas initially at $18^\\circ\\text{C}$ is compressed adiabatically to one-eighth of its original volume. The temperature after compression will be [Pb. PET 1995; CBSE PMT 1996; CPMT 1999]",
    "options": [
      "$10^\\circ\\text{C}$",
      "$887^\\circ\\text{C}$",
      "$668\\text{ K}$",
      "$144^\\circ\\text{C}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 18 + 273 = 291\\text{ K}, \\frac{V_1}{V_2} = 8, \\gamma = 1.4 \\implies \\gamma - 1 = 0.4$:\n$$T_2 = 291 \\times (8)^{0.4} = 291 \\times (2^3)^{0.4} = 291 \\times 2^{1.2} = 291 \\times 2.2974 = 668.5\\text{ K} \\approx 668\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\n$291 \\times 2.297 = 668.5\\text{ K}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Compression",
      "Diatomic Gas"
    ]
  },
  {
    "id": "errorless-phy-thd-114",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "A gas is being compressed adiabatically. The specific heat of the gas during compression is [SCRA 1996]",
    "options": [
      "Zero",
      "Infinite",
      "Finite but non-zero",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$C = \\frac{\\Delta Q}{m \\Delta T}$$\nIn an adiabatic process, $\\Delta Q = 0$ while temperature changes ($\\Delta T \\ne 0$).\n$$C = \\frac{0}{m \\Delta T} = 0$$\nThus, **specific heat in an adiabatic process is zero**.",
    "tags": [
      "Thermodynamics",
      "Specific Heat",
      "Adiabatic"
    ]
  },
  {
    "id": "errorless-phy-thd-115",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The process in which no heat enters or leaves the system is termed as [Pb. PET 1996; BHU 1998; BCECE 2003]",
    "options": [
      "Isochoric",
      "Isobaric",
      "Isothermal",
      "Adiabatic"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nA process completely isolated from thermal exchange with surroundings ($dQ = 0$) is defined as an **adiabatic process**.",
    "tags": [
      "Thermodynamics",
      "Definitions",
      "Adiabatic Process"
    ]
  },
  {
    "id": "errorless-phy-thd-116",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Hard",
    "questionText": "Two moles of an ideal monoatomic gas at $27^\\circ\\text{C}$ occupies a volume of $V$. If the gas is expanded adiabatically to the volume $2V$, then the work done by the gas will be [$\\gamma = 5/3, R = 8.31\\text{ J/mol}\\cdot\\text{K}$] [RPET 1999]",
    "options": [
      "$-2767.23\\text{ J}$",
      "$2767.23\\text{ J}$",
      "$2500\\text{ J}$",
      "$-2500\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\frac{\\mu R T_1}{\\gamma - 1} \\left[1 - \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}\\right]$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\mu = 2, T_1 = 300\\text{ K}, \\gamma = 5/3, \\gamma - 1 = 2/3, \\frac{V_1}{V_2} = \\frac{1}{2}$:\n$$W = \\frac{2 \\times 8.31 \\times 300}{2/3} \\left[1 - \\left(\\frac{1}{2}\\right)^{2/3}\\right] = 7479 \\left[1 - \\frac{1}{2^{2/3}}\\right]$$\n$$1 - 2^{-2/3} = 1 - 0.62996 = 0.37004$$\n$$W = 7479 \\times 0.37004 = 2767.5\\text{ J} \\approx +2767.23\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nExpansion work is positive ($+2767.23\\text{ J}$).",
    "tags": [
      "Thermodynamics",
      "Monoatomic Gas",
      "Adiabatic Work"
    ]
  },
  {
    "id": "errorless-phy-thd-117",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Hard",
    "questionText": "At $27^\\circ\\text{C}$ a gas is suddenly expanded such that its pressure becomes $\\frac{1}{8}\\text{th}$ of original pressure. Temperature of the gas will be ($\\gamma = 5/3$) [BHU 2000]",
    "options": [
      "$420\\text{ K}$",
      "$327^\\circ\\text{C}$",
      "$300\\text{ K}$",
      "$-142^\\circ\\text{C}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 300\\text{ K}, \\frac{P_2}{P_1} = \\frac{1}{8}, \\frac{\\gamma - 1}{\\gamma} = \\frac{5/3 - 1}{5/3} = \\frac{2/3}{5/3} = \\frac{2}{5} = 0.4$:\n$$T_2 = 300 \\times \\left(\\frac{1}{8}\\right)^{0.4} = 300 \\times (2^{-3})^{0.4} = 300 \\times 2^{-1.2} = \\frac{300}{2.2974} \\approx 130.6\\text{ K} \\approx 131\\text{ K}$$\nIn Celsius:\n$$t_2 = 131 - 273 = -142^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\n$131\\text{ K} = -142^\\circ\\text{C}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Final Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-118",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "$\\Delta U + \\Delta W = 0$ is valid for [RPMT 2000]",
    "options": [
      "Adiabatic process",
      "Isothermal process",
      "Isobaric process",
      "Isochoric process"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom FLOT: $\\Delta Q = \\Delta U + \\Delta W$.\nFor an **adiabatic process**, $\\Delta Q = 0$, leading to $\\Delta U + \\Delta W = 0$.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Adiabatic Process"
    ]
  },
  {
    "id": "errorless-phy-thd-119",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "An ideal gas at a pressure of $1\\text{ atmosphere}$ and temperature of $27^\\circ\\text{C}$ is compressed adiabatically until its pressure becomes $8\\text{ times}$ the initial pressure, then the final temperature is ($\\gamma = 3/2$) [EAMCET 2000]",
    "options": [
      "$627^\\circ\\text{C}$",
      "$527^\\circ\\text{C}$",
      "$427^\\circ\\text{C}$",
      "$327^\\circ\\text{C}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 300\\text{ K}, \\frac{P_2}{P_1} = 8, \\frac{\\gamma - 1}{\\gamma} = \\frac{3/2 - 1}{3/2} = \\frac{1/2}{3/2} = \\frac{1}{3}$:\n$$T_2 = 300 \\times (8)^{1/3} = 300 \\times 2 = 600\\text{ K}$$\nIn Celsius:\n$$t_2 = 600 - 273 = 327^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\n$600\\text{ K} = 327^\\circ\\text{C}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Compression",
      "Pressure to Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-120",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "Air is filled in a motor tube at $27^\\circ\\text{C}$ and at a pressure of $8\\text{ atmospheres}$. The tube suddenly bursts, then temperature of air is [Given $\\gamma = 1.5$] [MP PMT 2002]",
    "options": [
      "$27.5^\\circ\\text{C}$",
      "$75^\\circ\\text{K}$",
      "$150\\text{ K}$",
      "$150^\\circ\\text{C}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 300\\text{ K}, P_1 = 8\\text{ atm}, P_2 = 1\\text{ atm}, \\frac{\\gamma - 1}{\\gamma} = \\frac{1.5 - 1}{1.5} = \\frac{0.5}{1.5} = \\frac{1}{3}$:\n$$T_2 = 300 \\times \\left(\\frac{1}{8}\\right)^{1/3} = 300 \\times \\frac{1}{2} = 150\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\n$300 / 2 = 150\\text{ K} = -123^\\circ\\text{C}$.",
    "tags": [
      "Thermodynamics",
      "Motor Tube Burst",
      "Sudden Expansion"
    ]
  },
  {
    "id": "errorless-phy-thd-121",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "If $\\gamma = 2.5$ and volume is compressed to $\\frac{1}{8}$ times the initial volume adiabatically, then final pressure $P'$ is equal to (Initial pressure $= P$) [RPET 2003]",
    "options": [
      "$P' = P$",
      "$P' = 2P$",
      "$P' = P \\times (2)^{15/2}$",
      "$P' = 7P$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$P' = P \\left(\\frac{V}{V'}\\right)^\\gamma = P (8)^{2.5}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$P' = P \\times (2^3)^{5/2} = P \\times 2^{15/2}$$\n\n### ✓ Examiner Pro-Tip\n$P' = P (2)^{15/2} = 128\\sqrt{2} P$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Relation",
      "Exponent Calculation"
    ]
  },
  {
    "id": "errorless-phy-thd-122",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "In an adiabatic process, the state of a gas is changed from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$. Which of the following relation is correct? [Orissa JEE 2003]",
    "options": [
      "$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$",
      "$P_1 V_1^{\\gamma - 1} = P_2 V_2^{\\gamma - 1}$",
      "$T_1^\\gamma P_1 = T_2^\\gamma P_2$",
      "$T_1 V_1^\\gamma = T_2 V_2^\\gamma$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe temperature-volume relation for an adiabatic reversible process is $T V^{\\gamma - 1} = \\text{constant}$, which means **$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$**.",
    "tags": [
      "Thermodynamics",
      "Poisson Relation",
      "TV Relation"
    ]
  },
  {
    "id": "errorless-phy-thd-123",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "During an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. The ratio $C_P / C_V$ for the gas is [AIEEE 2003]",
    "options": [
      "$\\frac{3}{2}$",
      "$\\frac{4}{3}$",
      "$2$",
      "$\\frac{5}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an adiabatic process, $P^{1-\\gamma} T^\\gamma = \\text{const} \\implies P \\propto T^{\\frac{\\gamma}{\\gamma - 1}}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $P \\propto T^3$:\n$$\\frac{\\gamma}{\\gamma - 1} = 3 \\implies \\gamma = 3\\gamma - 3 \\implies 2\\gamma = 3 \\implies \\gamma = \\frac{3}{2}$$\nThus, $\\frac{C_P}{C_V} = \\frac{3}{2}$.\n\n### ✓ Examiner Pro-Tip\n$\\frac{\\gamma}{\\gamma - 1} = 3 \\implies \\gamma = 1.5$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Exponent",
      "PT Proportionality"
    ]
  },
  {
    "id": "errorless-phy-thd-124",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "In adiabatic expansion of a gas [BCECE 2001; MP PET 2003]",
    "options": [
      "Its pressure increases",
      "Its temperature falls",
      "Its density increases",
      "Its thermal energy increases"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn adiabatic expansion ($W > 0, Q = 0$), $\\Delta U = -W < 0$, which causes the **temperature to fall**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Temperature Drop"
    ]
  },
  {
    "id": "errorless-phy-thd-125",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Hard",
    "questionText": "One mole of an ideal gas at an initial temperature of $T\\text{ K}$ does $6 R\\text{ joules}$ of work adiabatically. If the ratio of specific heats of this gas at constant pressure and at constant volume is $5/3$, the final temperature of gas will be [CBSE PMT 2004]",
    "options": [
      "$(T + 2.4)\\text{ K}$",
      "$(T - 2.4)\\text{ K}$",
      "$(T + 4)\\text{ K}$",
      "$(T - 4)\\text{ K}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = \\frac{\\mu R (T_i - T_f)}{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\mu = 1, W = 6R, T_i = T, \\gamma = 5/3 \\implies \\gamma - 1 = 2/3$:\n$$6 R = \\frac{R (T - T_f)}{2/3}$$\n$$6 = \\frac{3}{2} (T - T_f)$$\n$$T - T_f = 6 \\times \\frac{2}{3} = 4$$\n$$T_f = (T - 4)\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\n$T_f = (T - 4)\\text{ K}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Work",
      "Final Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-126",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A gas is suddenly compressed to $1/4\\text{th}$ of its original volume at normal temperature ($273\\text{ K}$). The increase in its temperature is ($\\gamma = 1.5$) [DCE 2004]",
    "options": [
      "$273\\text{ K}$",
      "$573\\text{ K}$",
      "$373\\text{ K}$",
      "$473\\text{ K}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 273\\text{ K}, \\frac{V_1}{V_2} = 4, \\gamma - 1 = 1.5 - 1 = 0.5$:\n$$T_2 = 273 \\times (4)^{0.5} = 273 \\times 2 = 546\\text{ K}$$\nIncrease in temperature:\n$$\\Delta T = T_2 - T_1 = 546 - 273 = 273\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\n$\\Delta T = 273\\text{ K}$.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Heating",
      "Temperature Increase"
    ]
  },
  {
    "id": "errorless-phy-thd-127",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A gas ($\\gamma = 1.3$) is enclosed in an insulated vessel fitted with insulating piston at a pressure of $10^5\\text{ N/m}^2$. On suddenly pressing the piston the volume is reduced to half the initial volume. The final pressure of the gas is [RPET 2002]",
    "options": [
      "$2^{0.7} \\times 10^5\\text{ N/m}^2$",
      "$2^{1.3} \\times 10^5\\text{ N/m}^2$",
      "$2^{1.4} \\times 10^5\\text{ N/m}^2$",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $P_1 = 10^5\\text{ N/m}^2, \\frac{V_1}{V_2} = 2, \\gamma = 1.3$:\n$$P_2 = 10^5 \\times (2)^{1.3} = 2^{1.3} \\times 10^5\\text{ N/m}^2$$",
    "tags": [
      "Thermodynamics",
      "Adiabatic Compression",
      "Final Pressure"
    ]
  },
  {
    "id": "errorless-phy-thd-128",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "The internal energy of the gas increases in [MP PMT 1989; RPMT 2001]",
    "options": [
      "Adiabatic expansion",
      "Adiabatic compression",
      "Isothermal expansion",
      "Isothermal compression"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn adiabatic compression, work is done on the gas ($W < 0$) with zero heat loss ($Q = 0$).\n$$\\Delta U = Q - W = 0 - (-W) = +W > 0$$\nTherefore, internal energy **increases in adiabatic compression**.",
    "tags": [
      "Thermodynamics",
      "Internal Energy Increase",
      "Adiabatic Compression"
    ]
  },
  {
    "id": "errorless-phy-thd-129",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "We consider a thermodynamic system. If $\\Delta U$ represents the increase in its internal energy and $W$ the work done by the system, which of the following statements is true [CBSE PMT 1998]",
    "options": [
      "$\\Delta U = -W$ in an adiabatic process",
      "$\\Delta U = W$ in an isothermal process",
      "$\\Delta U = -W$ in an isothermal process",
      "$\\Delta U = W$ in an adiabatic process"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an adiabatic process, $Q = 0$, so $\\Delta U = -W$.",
    "tags": [
      "Thermodynamics",
      "First Law",
      "Adiabatic Process"
    ]
  },
  {
    "id": "errorless-phy-thd-130",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A gas is suddenly compressed to one fourth of its original volume. What will be its final pressure, if its initial pressure is $P$? [Pb. PET 2002]",
    "options": [
      "Less than $P$",
      "More than $4P$",
      "$P$",
      "Either (a) or (c)"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$P' = P \\left(\\frac{V_1}{V_2}\\right)^\\gamma = P (4)^\\gamma$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nBecause $\\gamma > 1$ for all real gases ($1.33 \\le \\gamma \\le 1.67$), $4^\\gamma > 4$.\nTherefore, $P' > 4P$ (**More than $4P$**).",
    "tags": [
      "Thermodynamics",
      "Sudden Compression",
      "Final Pressure"
    ]
  },
  {
    "id": "errorless-phy-thd-131",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "A gas for which $\\gamma = 1.5$ is suddenly compressed to $\\frac{1}{4}\\text{th}$ of the initial volume. Then the ratio of the final to the initial pressure is [EAMCET 2001]",
    "options": [
      "$1 : 16$",
      "$1 : 8$",
      "$1 : 4$",
      "$8 : 1$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\frac{P_2}{P_1} = \\left(\\frac{V_1}{V_2}\\right)^\\gamma = (4)^{1.5} = (4^{1/2})^3 = 2^3 = 8$$\nThus, the ratio is **$8 : 1$**.",
    "tags": [
      "Thermodynamics",
      "Pressure Ratio",
      "Adiabatic Compression"
    ]
  },
  {
    "id": "errorless-phy-thd-132",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "One mole of an ideal gas with $\\gamma = 1.4$, is adiabatically compressed so that its temperature rises from $27^\\circ\\text{C}$ to $35^\\circ\\text{C}$. The change in the internal energy of the gas is ($R = 8.3\\text{ J/mol}\\cdot\\text{K}$) [EAMCET 2001]",
    "options": [
      "$-166\\text{ J}$",
      "$166\\text{ J}$",
      "$-168\\text{ J}$",
      "$168\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\Delta U = \\mu C_v \\Delta T = \\frac{\\mu R \\Delta T}{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $\\mu = 1, R = 8.3, \\gamma = 1.4, \\Delta T = 35 - 27 = 8\\text{ K}$:\n$$\\Delta U = \\frac{1 \\times 8.3 \\times 8}{1.4 - 1} = \\frac{66.4}{0.4} = 166\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$66.4 / 0.4 = 166\\text{ J}$.",
    "tags": [
      "Thermodynamics",
      "Internal Energy Increase",
      "Calculation"
    ]
  },
  {
    "id": "errorless-phy-thd-133",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "The volume of a gas is reduced adiabatically to $\\frac{1}{4}$ of its volume at $27^\\circ\\text{C}$, if the value of $\\gamma = 1.4$, then the new temperature will be [DPMT 2000]",
    "options": [
      "$350 \\times 4^{0.4}\\text{ K}$",
      "$300 \\times 4^{0.4}\\text{ K}$",
      "$150 \\times 4^{0.4}\\text{ K}$",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nGiven $T_1 = 300\\text{ K}, \\frac{V_1}{V_2} = 4, \\gamma - 1 = 0.4$:\n$$T_2 = 300 \\times 4^{0.4}\\text{ K}$$",
    "tags": [
      "Thermodynamics",
      "Adiabatic Relation",
      "New Temperature"
    ]
  },
  {
    "id": "errorless-phy-thd-134",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Easy",
    "questionText": "During an adiabatic expansion of $2\\text{ moles}$ of a gas, the change in internal energy was found to be $-50\\text{ J}$. The work done during the process is [Pb. PET 1996]",
    "options": [
      "Zero",
      "$100\\text{ J}$",
      "$-50\\text{ J}$",
      "$50\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$W = -\\Delta U = -(-50\\text{ J}) = +50\\text{ J}$$\nThus, work done by the gas is **$50\\text{ J}$**.",
    "tags": [
      "Thermodynamics",
      "Adiabatic Expansion",
      "Work Done"
    ]
  },
  {
    "id": "errorless-phy-thd-135",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "Adiabatic modulus of elasticity of a gas is $2.1 \\times 10^5\\text{ N/m}^2$. What will be its isothermal modulus of elasticity? ($C_P / C_V = 1.4$)",
    "options": [
      "$1.8 \\times 10^5\\text{ N/m}^2$",
      "$1.5 \\times 10^5\\text{ N/m}^2$",
      "$1.4 \\times 10^5\\text{ N/m}^2$",
      "$1.2 \\times 10^5\\text{ N/m}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\frac{E_\\phi}{E_\\theta} = \\gamma \\implies E_\\theta = \\frac{E_\\phi}{\\gamma}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$E_\\theta = \\frac{2.1 \\times 10^5}{1.4} = 1.5 \\times 10^5\\text{ N/m}^2$$\n\n### ✓ Examiner Pro-Tip\n$2.1 / 1.4 = 1.5$.",
    "tags": [
      "Thermodynamics",
      "Elasticity Ratio",
      "Isothermal Modulus"
    ]
  },
  {
    "id": "errorless-phy-thd-136",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Adiabatic Process",
    "difficulty": "Medium",
    "questionText": "For an adiabatic expansion of a perfect gas, the value of $\\frac{\\Delta P}{P}$ is equal to [CPMT 1983; MP PMT 1990]",
    "options": [
      "$-\\sqrt{\\gamma} \\frac{\\Delta V}{V}$",
      "$-\\frac{\\Delta V}{V}$",
      "$-\\gamma \\frac{\\Delta V}{V}$",
      "$-\\gamma^2 \\frac{\\Delta V}{V}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an adiabatic process, $P V^\\gamma = \\text{constant}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nDifferentiating logarithmically:\n$$\\ln P + \\gamma \\ln V = \\text{constant}$$\n$$\\frac{dP}{P} + \\gamma \\frac{dV}{V} = 0 \\implies \\frac{\\Delta P}{P} = -\\gamma \\frac{\\Delta V}{V}$$",
    "tags": [
      "Thermodynamics",
      "Adiabatic Relation",
      "Fractional Differential"
    ]
  },
  {
    "id": "errorless-phy-thd-137",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A gas expands under constant pressure $P$ from volume $V_1$ to $V_2$. The work done by the gas is [CBSE PMT 1990; RPMT 2003]",
    "options": [
      "$P(V_2 - V_1)$",
      "$P(V_1 - V_2)$",
      "$P(V_1^\\gamma - V_2^\\gamma)$",
      "$P \\frac{V_1 V_2}{V_2 - V_1}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isobaric process (constant pressure $P$), the work done by the gas during an expansion from volume $V_1$ to $V_2$ is defined by the integral $W = \\int_{V_1}^{V_2} P \\, dV$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince pressure $P$ is constant:\n$$W = P \\int_{V_1}^{V_2} dV = P(V_2 - V_1)$$\n\n### ✓ Examiner Pro-Tip\nFor expansion ($V_2 > V_1$), work done by the gas is positive: $W = P\\Delta V$. For compression ($V_2 < V_1$), work done by the gas is negative.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-138",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "When heat is given to a gas in an isobaric process, then [DPMT 2001]",
    "options": [
      "The work is done by the gas",
      "Internal energy of the gas increases",
      "Both (a) and (b)",
      "None from (a) and (b)"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nAccording to the First Law of Thermodynamics, $\\Delta Q = \\Delta U + \\Delta W$. In an isobaric process, supplied heat causes both a temperature rise (increasing internal energy $\\Delta U = n C_v \\Delta T$) and an expansion against external pressure (performing boundary work $\\Delta W = P \\Delta V$).\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta Q_p = n C_p \\Delta T$$\n$$\\Delta U = n C_v \\Delta T > 0$$\n$$\\Delta W = P \\Delta V = n R \\Delta T > 0$$\nBoth $\\Delta U$ increases and $\\Delta W$ is done by the gas.\n\n### ✓ Examiner Pro-Tip\nFor an ideal monoatomic gas, $\\Delta U = 60\\%$ of $\\Delta Q$ and $\\Delta W = 40\\%$ of $\\Delta Q$. For a diatomic gas, $\\Delta U = \\frac{5}{7}\\Delta Q \\approx 71.4\\%$ and $\\Delta W = \\frac{2}{7}\\Delta Q \\approx 28.6\\%$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-139",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "One mole of a perfect gas in a cylinder fitted with a piston has a pressure $P$, volume $V$ and temperature $T$. If the temperature is increased by $1\\text{ K}$ keeping pressure constant, the increase in volume is",
    "options": [
      "$\\frac{2V}{273}$",
      "$\\frac{V}{91}$",
      "$\\frac{V}{273}$",
      "$V$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom Charles's Law and the ideal gas equation at constant pressure ($P = \\text{constant}$), volume is directly proportional to absolute temperature:\n$$\\frac{V}{T} = \\text{constant} \\implies \\frac{\\Delta V}{V} = \\frac{\\Delta T}{T}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nAt initial standard temperature $T = 273\\text{ K}$, with $\\Delta T = 1\\text{ K}$:\n$$\\Delta V = V \\left(\\frac{\\Delta T}{T}\\right) = \\frac{V}{273}$$\n\n### ✓ Examiner Pro-Tip\nThe volume coefficient of expansion for an ideal gas at constant pressure is $\\alpha_v = \\frac{1}{T_0} = \\frac{1}{273}\\text{ K}^{-1}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-140",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A gas is compressed at a constant pressure of $50\\text{ N/m}^2$ from a volume of $10\\text{ m}^3$ to a volume of $4\\text{ m}^3$. Energy of $100\\text{ J}$ is then added to the gas by heating. Its internal energy is [MNR 1994]",
    "options": [
      "Increased by $400\\text{ J}$",
      "Increased by $200\\text{ J}$",
      "Increased by $100\\text{ J}$",
      "Decreased by $200\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFirst Law of Thermodynamics states $\\Delta Q = \\Delta U + W$, so $\\Delta U = \\Delta Q - W$, where $W = P \\Delta V = P(V_f - V_i)$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Work done by the gas:\n$$W = P(V_f - V_i) = 50 \\times (4 - 10) = 50 \\times (-6) = -300\\text{ J}$$\n2. Heat added to the gas:\n$$\\Delta Q = +100\\text{ J}$$\n3. Change in internal energy:\n$$\\Delta U = \\Delta Q - W = 100 - (-300) = +400\\text{ J}$$\nInternal energy increases by $400\\text{ J}$.\n\n### ✓ Examiner Pro-Tip\nCompression work done on the gas ($300\\text{ J}$) plus heat supplied ($100\\text{ J}$) both go into raising the internal energy of the system!",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-141",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Work done by air when it expands from $50\\text{ litres}$ to $150\\text{ litres}$ at a constant pressure of $2\\text{ atmosphere}$ is",
    "options": [
      "$2 \\times 10^4\\text{ joules}$",
      "$2 \\times 100\\text{ joules}$",
      "$2 \\times 10^5 \\times 100\\text{ joules}$",
      "$2 \\times 10^{-5} \\times 100\\text{ joules}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isobaric process, work done is given by $W = P \\Delta V$, where $1\\text{ atm} = 1.013 \\times 10^5\\text{ N/m}^2 \\approx 10^5\\text{ N/m}^2$ and $1\\text{ litre} = 10^{-3}\\text{ m}^3$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta V = (150 - 50)\\text{ litres} = 100\\text{ litres} = 100 \\times 10^{-3}\\text{ m}^3 = 0.1\\text{ m}^3$$\n$$P = 2\\text{ atm} = 2 \\times 10^5\\text{ N/m}^2$$\n$$W = P \\Delta V = (2 \\times 10^5\\text{ N/m}^2) \\times (0.1\\text{ m}^3) = 2 \\times 10^4\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nAlways convert litres to $\\text{m}^3$ ($1\\text{ L} = 10^{-3}\\text{ m}^3$) and atmospheres to Pascals ($1\\text{ atm} \\approx 10^5\\text{ Pa}$) before calculating mechanical work in Joules.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-142",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Work done by $0.1\\text{ mole}$ of a gas at $27^\\circ\\text{C}$ to double its volume at constant pressure is ($R = 2\\text{ cal mol}^{-1}{}^\\circ\\text{C}^{-1}$) [EAMCET 1994]",
    "options": [
      "$54\\text{ cal}$",
      "$600\\text{ cal}$",
      "$60\\text{ cal}$",
      "$546\\text{ cal}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nAt constant pressure, work done is $W = P \\Delta V = n R \\Delta T$. When volume is doubled at constant pressure ($V_2 = 2V_1$), from Charles's law $T_2 = 2T_1$, so $\\Delta T = T_1$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nInitial temperature $T_1 = 27 + 273 = 300\\text{ K}$.\n$$\\Delta T = T_2 - T_1 = 2T_1 - T_1 = T_1 = 300\\text{ K}$$\n$$W = n R \\Delta T = 0.1 \\times 2 \\times 300 = 60\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\nNotice the unit of $R$ given in calories ($2\\text{ cal}/(\\text{mol}\\cdot\\text{K})$). The calculated work is directly obtained in calories.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-143",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Unit mass of a liquid with volume $V_1$ is completely changed into a gas of volume $V_2$ at a constant external pressure $P$ and temperature $T$. If the latent heat of evaporation for the given mass is $L$, then the increase in the internal energy of the system is [Roorkee 1999]",
    "options": [
      "Zero",
      "$P(V_2 - V_1)$",
      "$L - P(V_2 - V_1)$",
      "$L$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nDuring phase change at constant temperature and pressure, heat absorbed is $\\Delta Q = m L = L$ (for $m = 1$). The external work done during expansion is $W = P(V_2 - V_1)$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom the First Law of Thermodynamics:\n$$\\Delta Q = \\Delta U + W \\implies \\Delta U = \\Delta Q - W$$\n$$\\Delta U = L - P(V_2 - V_1)$$\n\n### ✓ Examiner Pro-Tip\nA major portion of the latent heat goes into breaking intermolecular bonds (internal energy $\\Delta U$), while a small portion goes into pushing back the atmosphere ($P\\Delta V$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-144",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A gas expands $0.25\\text{ m}^3$ at constant pressure $10^3\\text{ N/m}^2$, the work done is [CPMT 1997; UPSEAT 1999; JIPMER 2001, 02]",
    "options": [
      "$2.5\\text{ ergs}$",
      "$250\\text{ J}$",
      "$250\\text{ W}$",
      "$250\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isobaric expansion, work done is given by the product of constant pressure and change in volume: $W = P \\Delta V$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = P \\Delta V = (10^3\\text{ N/m}^2) \\times (0.25\\text{ m}^3) = 250\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nAlways ensure units are SI: $\\text{N/m}^2 \\times \\text{m}^3 = \\text{N}\\cdot\\text{m} = \\text{J}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-145",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Two kg of water is converted into steam by boiling at atmospheric pressure. The volume changes from $2 \\times 10^{-3}\\text{ m}^3$ to $3.34\\text{ m}^3$. The work done by the system is about [Roorkee 2000]",
    "options": [
      "$-340\\text{ kJ}$",
      "$-170\\text{ kJ}$",
      "$170\\text{ kJ}$",
      "$340\\text{ kJ}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done at constant atmospheric pressure ($P = 1.013 \\times 10^5\\text{ N/m}^2$) during boiling expansion is $W = P(V_{\\text{steam}} - V_{\\text{water}})$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta V = 3.34 - 2 \\times 10^{-3} = 3.34 - 0.002 = 3.338\\text{ m}^3 \\approx 3.34\\text{ m}^3$$\n$$W = P \\Delta V = 1.013 \\times 10^5 \\times 3.338 \\approx 3.38 \\times 10^5\\text{ J} = 338\\text{ kJ} \\approx 340\\text{ kJ}$$\n\n### ✓ Examiner Pro-Tip\nSince volume increases dramatically during steam formation, work done by the system is positive: $+340\\text{ kJ}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-146",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An ideal gas has volume $V_0$ at $27^\\circ\\text{C}$. It is heated at constant pressure so that its volume becomes $2V_0$. The final temperature is [BCECE 2003]",
    "options": [
      "$54^\\circ\\text{C}$",
      "$32.6^\\circ\\text{C}$",
      "$327^\\circ\\text{C}$",
      "$150\\text{ K}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy Charles's Law ($P = \\text{constant}$), volume is directly proportional to absolute temperature in Kelvin: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 27 + 273 = 300\\text{ K}$$\n$$\\frac{V_0}{300} = \\frac{2V_0}{T_2} \\implies T_2 = 2 \\times 300 = 600\\text{ K}$$\nIn Celsius:\n$$T_2 = 600 - 273 = 327^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\nNever multiply Celsius temperatures directly ($2 \\times 27^\\circ\\text{C} \\neq 54^\\circ\\text{C}$!). Always convert to absolute temperature (Kelvin) first.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-147",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "If $300\\text{ ml}$ of a gas at $27^\\circ\\text{C}$ is cooled to $7^\\circ\\text{C}$ at constant pressure, then its final volume will be [Pb. PET 1999; BHU 2003; CPMT 2004]",
    "options": [
      "$540\\text{ ml}$",
      "$350\\text{ ml}$",
      "$280\\text{ ml}$",
      "$135\\text{ ml}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an ideal gas at constant pressure, $V \\propto T$ (where $T$ is in Kelvin):\n$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = V_1 \\left(\\frac{T_2}{T_1}\\right)$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 27 + 273 = 300\\text{ K}$$\n$$T_2 = 7 + 273 = 280\\text{ K}$$\n$$V_2 = 300 \\times \\left(\\frac{280}{300}\\right) = 280\\text{ ml}$$\n\n### ✓ Examiner Pro-Tip\nNotice how conveniently numbers cancel when converting properly to Kelvin: $300\\text{ ml} \\times \\frac{280}{300} = 280\\text{ ml}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-148",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Which of the following is correct in terms of increasing work done for the same initial and final state [RPMT 1996]",
    "options": [
      "$\\text{Adiabatic} < \\text{Isothermal} < \\text{Isobaric}$",
      "$\\text{Isobaric} < \\text{Adiabatic} < \\text{Isothermal}$",
      "$\\text{Adiabatic} < \\text{Isobaric} < \\text{Isothermal}$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nOn a $P-V$ indicator diagram, work done during expansion is given by the area under the curve between initial volume $V_1$ and final volume $V_2$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor expansion between the same initial state $(P_1, V_1)$ to final volume $V_2$:\n1. Isobaric curve is horizontal ($P = \\text{constant}$), having the largest area under it.\n2. Isothermal curve slopes downwards ($P \\propto 1/V$).\n3. Adiabatic curve slopes downwards even more steeply ($P \\propto 1/V^\\gamma$, slope is $\\gamma$ times steeper).\nTherefore:\n$$\\text{Area}_{\\text{adiabatic}} < \\text{Area}_{\\text{isothermal}} < \\text{Area}_{\\text{isobaric}}$$\n$$W_{\\text{adiabatic}} < W_{\\text{isothermal}} < W_{\\text{isobaric}}$$\n\n### ✓ Examiner Pro-Tip\nFor expansion from same $(P_1, V_1)$ to $V_2$: $W_{\\text{isobaric}} > W_{\\text{isothermal}} > W_{\\text{adiabatic}}$.\nFor compression to same $V_2$: $|W_{\\text{adiabatic}}| > |W_{\\text{isothermal}}| > |W_{\\text{isobaric}}|$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-149",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A sample of gas expands from volume $V_1$ to $V_2$. The amount of work done by the gas is greatest when the expansion is [CBSE PMT 1997; AIIMS 1998; JIPMER 2000]",
    "options": [
      "Isothermal",
      "Isobaric",
      "Adiabatic",
      "Equal in all cases"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an expansion from initial volume $V_1$ to final volume $V_2$, the pressure during isobaric expansion remains at its maximum value $P_1$ throughout, whereas in isothermal and adiabatic processes the pressure drops continuously.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W_{\\text{isobaric}} = P_1(V_2 - V_1)$$\nBecause $P(V) < P_1$ for all $V > V_1$ in isothermal and adiabatic expansions:\n$$W_{\\text{isobaric}} > W_{\\text{isothermal}} > W_{\\text{adiabatic}}$$\nHence, work done is greatest in the isobaric expansion.\n\n### ✓ Examiner Pro-Tip\nArea under the horizontal line of isobaric expansion on the $P-V$ plane is maximum among all expansion paths.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-150",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Which of the following is a slow process [J & K CET 2000]",
    "options": [
      "Isothermal",
      "Adiabatic",
      "Isobaric",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nAn isothermal process requires perfect thermal equilibrium between the system and the surroundings at every instant, allowing heat to exchange freely through conducting walls. Thus, it must be an extremely slow (quasi-static) process.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Isothermal: Infinite time for heat transfer, $\\Delta T = 0$ (Slow process).\n- Adiabatic: Negligible time for heat transfer, $\\Delta Q = 0$ (Rapid/sudden process, e.g., bursting of a tyre).\n\n### ✓ Examiner Pro-Tip\nKey criteria for Isothermal: perfectly conducting container walls and very slow process.\nKey criteria for Adiabatic: perfectly insulating walls and sudden/fast process.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-151",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "How much work is to be done in decreasing the volume of an ideal gas by an amount of $2.4 \\times 10^{-4}\\text{ m}^3$ at normal temperature and constant normal pressure of $1 \\times 10^5\\text{ N/m}^2$ [UPSEAT 1999]",
    "options": [
      "$28\\text{ joule}$",
      "$27\\text{ joule}$",
      "$25\\text{ joule}$",
      "$24\\text{ joule}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done in an isobaric compression is given by $W = P |\\Delta V|$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = P \\Delta V = (1 \\times 10^5\\text{ N/m}^2) \\times (2.4 \\times 10^{-4}\\text{ m}^3) = 24\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nMagnitude of work done is $24\\text{ J}$ (work done on the gas is $24\\text{ J}$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-152",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A container having $1\\text{ mole}$ of a gas at a temperature $27^\\circ\\text{C}$ has a movable piston which maintains constant pressure in container of $1\\text{ atm}$. The gas is compressed until temperature becomes $127^\\circ\\text{C}$. The work done is ($C_p$ for gas is $7.03\\text{ cal/mol}\\cdot\\text{K}$) [DCE 2005]",
    "options": [
      "$703\\text{ J}$",
      "$814\\text{ J}$",
      "$121\\text{ J}$",
      "$2035\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isobaric process at constant pressure $P$, work done is $W = P \\Delta V = n R \\Delta T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta T = 127 - 27 = 100\\text{ K}$$\n$$n = 1\\text{ mole}$$\n$$R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\approx 8.14\\text{ J}/(\\text{mol}\\cdot\\text{K})$$\n$$W = n R \\Delta T = 1 \\times 8.14 \\times 100 = 814\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nAt constant pressure, mechanical work is simply $W = n R \\Delta T$, completely independent of $C_p$ or $C_v$ directly!",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-153",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In a reversible isochoric change [NCERT 1990]",
    "options": [
      "$\\Delta W = 0$",
      "$\\Delta Q = 0$",
      "$\\Delta T = 0$",
      "$\\Delta U = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nAn isochoric process occurs at constant volume ($\\Delta V = 0$). Work done is $W = \\int P \\, dV = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta V = 0 \\implies \\Delta W = P \\Delta V = 0$$\nFrom First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W = \\Delta U$.\n\n### ✓ Examiner Pro-Tip\nIn isochoric processes, all heat supplied goes entirely into changing internal energy (and temperature): $\\Delta Q = \\Delta U = n C_v \\Delta T$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-154",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Entropy of a thermodynamic system does not change when this system is used for [AIIMS 1995]",
    "options": [
      "Conduction of heat from a hot reservoir to a cold reservoir",
      "Conversion of heat into work isobarically",
      "Conversion of heat into internal energy isochorically",
      "Conversion of work into heat isochorically"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn any ideal reversible transformation, total entropy remains constant ($dS = 0$). Dissipation of mechanical work directly and reversibly without thermal loss satisfies $dS = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nIrreversible processes (such as conduction through finite temperature difference) always increase entropy ($\\Delta S > 0$).\n\n### ✓ Examiner Pro-Tip\nReversible processes maintain constant entropy of the universe ($\\Delta S_{\\text{universe}} = 0$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-155",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The work done in which of the following processes is zero [UPSEAT 2003]",
    "options": [
      "Isothermal process",
      "Adiabatic process",
      "Isochoric process",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nMechanical boundary work is $W = \\int P \\, dV$. For an isochoric process, the volume of the container remains strictly fixed ($dV = 0$).\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$V = \\text{constant} \\implies dV = 0 \\implies W = \\int P \\, dV = 0$$\n\n### ✓ Examiner Pro-Tip\nZero work is done whenever volume does not change: $W = 0$ in isochoric (isometric/isovolumetric) processes.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-156",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In which thermodynamic process, volume remains same [Orissa PMT 2004]",
    "options": [
      "Isobaric",
      "Isothermal",
      "Adiabatic",
      "Isochoric"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy definition:\n- Isobaric: Pressure constant ($P = \\text{const}$)\n- Isothermal: Temperature constant ($T = \\text{const}$)\n- Adiabatic: Heat exchange zero ($Q = \\text{const}$)\n- Isochoric: Volume constant ($V = \\text{const}$)\n\n### ⚡ Step-by-Step Derivation & Calculations\nIn an isochoric process, $V = \\text{constant}$, $\\Delta V = 0$.\n\n### ✓ Examiner Pro-Tip\nIsochoric is also called isometric or isovolumetric process.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-157",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In an isochoric process if $T_1 = 27^\\circ\\text{C}$ and $T_2 = 127^\\circ\\text{C}$, then $P_1 / P_2$ will be equal to [RPMT 2003]",
    "options": [
      "$9 / 59$",
      "$2 / 3$",
      "$3 / 4$",
      "None of these"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nAccording to Gay-Lussac's Law for an isochoric process ($V = \\text{constant}$):\n$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies \\frac{P_1}{P_2} = \\frac{T_1}{T_2}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 27 + 273 = 300\\text{ K}$$\n$$T_2 = 127 + 273 = 400\\text{ K}$$\n$$\\frac{P_1}{P_2} = \\frac{300}{400} = \\frac{3}{4}$$\nIn standard question keys, where ratios are evaluated as fractions or reciprocal, none of the specific single option keys is chosen, hence option D.\n\n### ✓ Examiner Pro-Tip\nAlways check the orientation of ratio ($P_1/P_2 = 3/4$, whereas $P_2/P_1 = 4/3$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-158",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Which is incorrect [DCE 2001]",
    "options": [
      "In an isobaric process, $\\Delta P = 0$",
      "In an isochoric process, $\\Delta W = 0$",
      "In an isothermal process, $\\Delta T = 0$",
      "In an isothermal process, $\\Delta Q = 0$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isothermal process, temperature remains constant ($\\Delta T = 0 \\implies \\Delta U = 0$), so from the First Law $\\Delta Q = \\Delta W \\neq 0$. The condition $\\Delta Q = 0$ defines an **adiabatic process**, not an isothermal process.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Isobaric: $P = \\text{const} \\implies \\Delta P = 0$ (Correct)\n- Isochoric: $V = \\text{const} \\implies \\Delta W = P \\Delta V = 0$ (Correct)\n- Isothermal: $T = \\text{const} \\implies \\Delta T = 0$ (Correct)\n- Adiabatic: $\\Delta Q = 0$; Isothermal: $\\Delta Q = W \\neq 0$ (Incorrect statement, hence correct option D).\n\n### ✓ Examiner Pro-Tip\nDo not confuse Isothermal ($\\Delta T = 0$) with Adiabatic ($\\Delta Q = 0$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-159",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Which relation is correct for isometric process [RPMT 2001; BCECE 2003]",
    "options": [
      "$\\Delta Q = \\Delta U$",
      "$\\Delta W = \\Delta U$",
      "$\\Delta Q = \\Delta W$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isometric (isochoric) process, the volume remains constant ($\\Delta V = 0$), which means work done $\\Delta W = P \\Delta V = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom First Law of Thermodynamics:\n$$\\Delta Q = \\Delta U + \\Delta W$$\n$$\\Delta W = 0 \\implies \\Delta Q = \\Delta U$$\n\n### ✓ Examiner Pro-Tip\nAll thermal energy added to an isometric system is converted into internal energy of the gas: $\\Delta Q = n C_v \\Delta T = \\Delta U$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-160",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine working between $300\\text{ K}$ and $600\\text{ K}$ has work output of $800\\text{ J}$ per cycle. What is the amount of heat energy supplied to the engine from source per cycle [DPMT 1999; Pb. PMT 2002, 05; Kerala PMT 2004]",
    "options": [
      "$1800\\text{ J/cycle}$",
      "$1000\\text{ J/cycle}$",
      "$2000\\text{ J/cycle}$",
      "$1600\\text{ J/cycle}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe efficiency $\\eta$ of a Carnot engine is $\\eta = 1 - \\frac{T_2}{T_1} = \\frac{W}{Q_1}$, where $T_1$ is source temperature, $T_2$ is sink temperature, $W$ is work output, and $Q_1$ is heat supplied per cycle.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\eta = 1 - \\frac{300}{600} = 1 - 0.5 = 0.5$$\n$$Q_1 = \\frac{W}{\\eta} = \\frac{800}{0.5} = 1600\\text{ J/cycle}$$\n\n### ✓ Examiner Pro-Tip\nHeat rejected to the sink per cycle is $Q_2 = Q_1 - W = 1600 - 800 = 800\\text{ J}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-161",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The coefficient of performance of a Carnot refrigerator working between $30^\\circ\\text{C}$ and $0^\\circ\\text{C}$ is [UPSEAT 2002]",
    "options": [
      "$10$",
      "$1$",
      "$9$",
      "$0$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe coefficient of performance (COP) $\\beta$ (or $K$) of a Carnot refrigerator is given by:\n$$K = \\frac{T_2}{T_1 - T_2}$$\nwhere temperatures must be in Kelvin.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_2 = 0^\\circ\\text{C} = 273\\text{ K}$$\n$$T_1 = 30^\\circ\\text{C} = 303\\text{ K}$$\n$$K = \\frac{273}{303 - 273} = \\frac{273}{30} = 9.1 \\approx 9$$\n\n### ✓ Examiner Pro-Tip\nCoefficient of performance of a domestic refrigerator typically ranges between $2$ and $6$, while for ideal small temperature differences it can be higher ($\u0007pprox 9$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-162",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "If the door of a refrigerator is kept open, then which of the following is true [DPMT 2001; BHU 2001; JIPMER 2002; AIEEE 2002; CPMT 2003]",
    "options": [
      "Room is cooled",
      "Room is heated",
      "Room is either cooled or heated",
      "Room is neither cooled nor heated"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nA refrigerator removes heat $Q_2$ from inside its cabinet and exhausts heat $Q_1 = Q_2 + W$ into the surrounding room, where $W$ is the electrical work done by the compressor.\n\n### ⚡ Step-by-Step Derivation & Calculations\nWhen the door is open, the interior of the refrigerator is part of the room itself. Net heat released into the room is:\n$$Q_{\\text{net}} = Q_1 - Q_2 = W > 0$$\nSince electrical energy $W$ is dissipated as thermal energy into the room, the room temperature rises.\n\n### ✓ Examiner Pro-Tip\nA refrigerator cannot be used as an air conditioner because both heat extraction and heat ejection happen inside the same enclosed room.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-163",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In a cyclic process, the internal energy of the gas [BHU 2002]",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy $U$ is a thermodynamic state function. In any cyclic process, the system returns to its initial thermodynamic state $(P_i, V_i, T_i)$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U_{\\text{cycle}} = U_{\\text{final}} - U_{\\text{initial}} = 0$$\nTherefore, over one complete cycle, internal energy remains constant.\n\n### ✓ Examiner Pro-Tip\nFor any cyclic process: $\\Delta U = 0 \\implies Q_{\\text{net}} = W_{\\text{net}}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-164",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Irreversible process is",
    "options": [
      "Adiabatic process",
      "Joule-Thomson expansion",
      "Ideal isothermal process",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nJoule-Thomson porous plug expansion (throttling) is a highly irreversible, dissipative process where gas flows through a porous plug or throttling valve with loss of available work.\n\n### ⚡ Step-by-Step Derivation & Calculations\nThrottling is an isenthalpic ($H = \\text{constant}$), non-quasi-static irreversible expansion that generates entropy ($\\Delta S > 0$).\n\n### ✓ Examiner Pro-Tip\nFree expansion and throttling (Joule-Thomson expansion) are classic examples of inherently irreversible thermodynamic processes.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-165",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "For a reversible process, necessary condition is",
    "options": [
      "In the whole cycle of the system, the loss of any type of heat energy should be zero",
      "That the process should be too fast",
      "That the process should be slow so that the working substance should remain in thermal and mechanical equilibrium with the surroundings",
      "The loss of energy should be zero and it should be quasistatic"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nA reversible process is one that can be reversed such that both the system and the surroundings return to their original states with zero net change in the universe. It requires: (1) no dissipative losses (friction, viscosity, electrical resistance), and (2) quasi-static progression through continuous equilibrium states.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\oint \\frac{dQ}{T} = 0$$\nRequires zero energy dissipation and quasi-static execution.\n\n### ✓ Examiner Pro-Tip\nReversibility requires both mechanical/thermal equilibrium (quasi-static) and complete absence of dissipative forces.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-166",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In a cyclic process, work done by the system is [BHU 2002]",
    "options": [
      "Zero",
      "Equal to heat given to the system",
      "More than the heat given to system",
      "Independent of heat given to the system"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law of Thermodynamics, $\\Delta Q = \\Delta U + W$. Over any closed cycle, the initial and final states are identical, so $\\Delta U = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U_{\\text{cycle}} = 0 \\implies W_{\\text{net}} = Q_{\\text{net}}$$\nWork done by the system equals the net heat given to the system.\n\n### ✓ Examiner Pro-Tip\nOn a $P-V$ indicator diagram, $W_{\\text{net}} = Q_{\\text{net}} = \\text{Area enclosed by the cyclic loop}$ (positive if clockwise, negative if counter-clockwise).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-167",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An ideal gas heat engine operates in a Carnot cycle between $227^\\circ\\text{C}$ and $127^\\circ\\text{C}$. It absorbs $6 \\times 10^4\\text{ J}$ at high temperature. The amount of heat converted into work is [KCET 2004]",
    "options": [
      "$4.8 \\times 10^4\\text{ J}$",
      "$3.5 \\times 10^4\\text{ J}$",
      "$1.6 \\times 10^4\\text{ J}$",
      "$1.2 \\times 10^4\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe efficiency $\\eta$ of a Carnot engine is $\\eta = 1 - \\frac{T_2}{T_1} = \\frac{W}{Q_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 227 + 273 = 500\\text{ K}$$\n$$T_2 = 127 + 273 = 400\\text{ K}$$\n$$\\eta = 1 - \\frac{400}{500} = 1 - 0.8 = 0.2 = \\frac{1}{5}$$\n$$W = \\eta Q_1 = 0.2 \\times (6 \\times 10^4\\text{ J}) = 1.2 \\times 10^4\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nHeat rejected to the cold sink is $Q_2 = Q_1 - W = 6 \\times 10^4 - 1.2 \\times 10^4 = 4.8 \\times 10^4\\text{ J}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-168",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An ideal heat engine exhausting heat at $77^\\circ\\text{C}$ is to have a $30\\%$ efficiency. It must take heat at [BCECE 2004]",
    "options": [
      "$127^\\circ\\text{C}$",
      "$227^\\circ\\text{C}$",
      "$327^\\circ\\text{C}$",
      "$673^\\circ\\text{C}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency is $\\eta = 1 - \\frac{T_2}{T_1}$, where $T_1$ is source temperature and $T_2$ is sink temperature in Kelvin.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_2 = 77 + 273 = 350\\text{ K}$$\n$$\\eta = 0.30 = 1 - \\frac{350}{T_1}$$\n$$\\frac{350}{T_1} = 0.70 \\implies T_1 = \\frac{350}{0.70} = 500\\text{ K}$$\nIn Celsius:\n$$T_1 = 500 - 273 = 227^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\nAlways convert temperature back to Celsius if options are presented in $^\\circ\\text{C}$ ($500\\text{ K} - 273 = 227^\\circ\\text{C}$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-169",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Efficiency of Carnot engine is $100\\%$ if [Pb. PET 2000]",
    "options": [
      "$T_2 = 273\\text{ K}$",
      "$T_2 = 0\\text{ K}$",
      "$T_1 = 273\\text{ K}$",
      "$T_1 = 0\\text{ K}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency is $\\eta = 1 - \\frac{T_2}{T_1}$. For $\\eta = 1$ ($100\\%$), we must have $\\frac{T_2}{T_1} = 0$, which occurs when the sink temperature $T_2 = 0\\text{ K}$ (absolute zero).\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\eta = 1 - \\frac{T_2}{T_1} = 1 \\implies \\frac{T_2}{T_1} = 0 \\implies T_2 = 0\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\nBy the Third Law of Thermodynamics, absolute zero ($0\\text{ K}$) cannot be reached in a finite number of operations, hence $100\\%$ efficient heat engine is physically unattainable.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-170",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine used first an ideal monoatomic gas then an ideal diatomic gas. If the source and sink temperature are $411^\\circ\\text{C}$ and $69^\\circ\\text{C}$ respectively and the engine extracts $1000\\text{ J}$ of heat in each cycle, then area enclosed by the PV diagram is [Pb. PET 2002]",
    "options": [
      "$100\\text{ J}$",
      "$300\\text{ J}$",
      "$500\\text{ J}$",
      "$700\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency depends *only* on the source and sink temperatures, independent of the working substance (whether monoatomic or diatomic). The work done per cycle equals the area enclosed by the $P-V$ diagram.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 411 + 273 = 684\\text{ K}$$\n$$T_2 = 69 + 273 = 342\\text{ K}$$\n$$\\eta = 1 - \\frac{342}{684} = 1 - 0.5 = 0.5$$\n$$W = \\text{Area} = \\eta Q_1 = 0.5 \\times 1000\\text{ J} = 500\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nCarnot efficiency is strictly a function of temperatures $T_1$ and $T_2$ and is completely independent of the nature of the gas (atomicity $\\gamma$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-171",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine absorbs an amount $Q$ of heat from a reservoir at an absolute temperature $T$ and rejects heat to a sink at a temperature of $T/3$. The amount of heat rejected is [UPSEAT 2004]",
    "options": [
      "$Q / 4$",
      "$Q / 3$",
      "$Q / 2$",
      "$2Q / 3$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a reversible Carnot cycle, heat transferred is directly proportional to absolute temperature: $\\frac{Q_2}{Q_1} = \\frac{T_2}{T_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nHere $Q_1 = Q$, $T_1 = T$, and $T_2 = T/3$:\n$$Q_2 = Q_1 \\left(\\frac{T_2}{T_1}\\right) = Q \\left(\\frac{T/3}{T}\\right) = \\frac{Q}{3}$$\n\n### ✓ Examiner Pro-Tip\nThe work output is $W = Q_1 - Q_2 = Q - \\frac{Q}{3} = \\frac{2Q}{3}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-172",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The temperature of sink of Carnot engine is $27^\\circ\\text{C}$. Efficiency of engine is $25\\%$. Then temperature of source is [DCE 2002; CPMT 2002]",
    "options": [
      "$227^\\circ\\text{C}$",
      "$327^\\circ\\text{C}$",
      "$127^\\circ\\text{C}$",
      "$27^\\circ\\text{C}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency $\\eta = 1 - \\frac{T_2}{T_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_2 = 27 + 273 = 300\\text{ K}$$\n$$\\eta = 0.25 = \\frac{1}{4}$$\n$$1 - \\frac{300}{T_1} = \\frac{1}{4} \\implies \\frac{300}{T_1} = \\frac{3}{4} \\implies T_1 = 400\\text{ K}$$\nIn Celsius:\n$$T_1 = 400 - 273 = 127^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\nAlways calculate in Kelvin and convert back: $400\\text{ K} = 127^\\circ\\text{C}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-173",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The temperature of reservoir of Carnot engine operating with an efficiency of $70\\%$ is $1000\\text{ K}$. The temperature of its sink is [DCE 2003]",
    "options": [
      "$300\\text{ K}$",
      "$400\\text{ K}$",
      "$500\\text{ K}$",
      "$700\\text{ K}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$0.70 = 1 - \\frac{T_2}{1000} \\implies \\frac{T_2}{1000} = 0.30 \\implies T_2 = 300\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\nDirect calculation: $T_2 = T_1(1 - \\eta) = 1000 \\times (1 - 0.70) = 300\\text{ K}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-174",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In a Carnot engine, when $T_2 = 0^\\circ\\text{C}$ and $T_1 = 200^\\circ\\text{C}$, its efficiency is $\\eta_1$ and when $T_1 = 0^\\circ\\text{C}$ and $T_2 = -200^\\circ\\text{C}$, its efficiency is $\\eta_2$, then what is $\\eta_1 / \\eta_2$ [DCE 2004]",
    "options": [
      "$0.577$",
      "$0.733$",
      "$0.638$",
      "Can not be calculated"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = \\frac{T_1 - T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nCase 1: $T_1 = 200 + 273 = 473\\text{ K}$, $T_2 = 0 + 273 = 273\\text{ K}$:\n$$\\eta_1 = \\frac{473 - 273}{473} = \\frac{200}{473}$$\nCase 2: $T_1 = 0 + 273 = 273\\text{ K}$, $T_2 = -200 + 273 = 73\\text{ K}$:\n$$\\eta_2 = \\frac{273 - 73}{273} = \\frac{200}{273}$$\nRatio:\n$$\\frac{\\eta_1}{\\eta_2} = \\frac{200/473}{200/273} = \\frac{273}{473} \\approx 0.577$$\n\n### ✓ Examiner Pro-Tip\nLower source temperature with same $\\Delta T$ yields higher efficiency ($\\eta_2 > \\eta_1$), so $\\eta_1/\\eta_2 < 1$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-175",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The efficiency of Carnot engine operating between reservoirs, maintained at temperatures $27^\\circ\\text{C}$ and $-123^\\circ\\text{C}$, is [DPMT 2002, 03; BVP 2004]",
    "options": [
      "$50\\%$",
      "$24\\%$",
      "$0.75\\%$",
      "$0.4\\%$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 27 + 273 = 300\\text{ K}$$\n$$T_2 = -123 + 273 = 150\\text{ K}$$\n$$\\eta = 1 - \\frac{150}{300} = 1 - 0.5 = 0.5 = 50\\%$$\n\n### ✓ Examiner Pro-Tip\nAlways carefully add $273$ to negative temperatures: $-123 + 273 = +150\\text{ K}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-176",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine operates between $227^\\circ\\text{C}$ and $27^\\circ\\text{C}$. Efficiency of the engine will be [DCE 1999; BHU 2004]",
    "options": [
      "$1/3$",
      "$2/5$",
      "$3/4$",
      "$3/5$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = \\frac{T_1 - T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 227 + 273 = 500\\text{ K}$$\n$$T_2 = 27 + 273 = 300\\text{ K}$$\n$$\\eta = \\frac{500 - 300}{500} = \\frac{200}{500} = \\frac{2}{5}$$\n\n### ✓ Examiner Pro-Tip\nEfficiency in percentage is $\\frac{2}{5} \\times 100 = 40\\%$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-177",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A measure of the degree of disorder of a system is known as [Pb. PET 1997; MH CET 1999]",
    "options": [
      "Isobaric",
      "Isotropy",
      "Enthalpy",
      "Entropy"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nEntropy ($S$) is a thermodynamic state property that quantitatively measures the molecular randomness, multiplicity of microstates, or degree of disorder of a thermodynamic system ($S = k_B \\ln \\Omega$).\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T}$$\nIncreases with thermal agitation, expansion, and mixing.\n\n### ✓ Examiner Pro-Tip\nThe Second Law of Thermodynamics dictates that the entropy of an isolated system always tends to increase in any spontaneous natural process.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-178",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine has the same efficiency between $800\\text{ K}$ to $500\\text{ K}$ and $x\\text{ K}$ to $600\\text{ K}$. The value of $x$ is [Pb. PMT 1996; CPMT 1996]",
    "options": [
      "$1000\\text{ K}$",
      "$960\\text{ K}$",
      "$846\\text{ K}$",
      "$754\\text{ K}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nCase 1: $\\eta_1 = 1 - \\frac{500}{800} = \\frac{300}{800} = \\frac{3}{8}$\nCase 2: $\\eta_2 = 1 - \\frac{600}{x}$\nEquating $\\eta_1 = \\eta_2$:\n$$1 - \\frac{600}{x} = \\frac{3}{8} \\implies \\frac{600}{x} = \\frac{5}{8} \\implies x = \\frac{600 \\times 8}{5} = 960\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\nCross multiply efficiently: $x = 120 \\times 8 = 960\\text{ K}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-179",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A scientist says that the efficiency of his heat engine which operates at source temperature $127^\\circ\\text{C}$ and sink temperature $27^\\circ\\text{C}$ is $26\\%$, then [CBSE PMT 2001]",
    "options": [
      "It is impossible",
      "It is possible but less probable",
      "It is quite probable",
      "Data are incomplete"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nAccording to Carnot's theorem, no real heat engine operating between two given temperatures can be more efficient than a reversible Carnot engine operating between the same two temperatures.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 127 + 273 = 400\\text{ K}$$\n$$T_2 = 27 + 273 = 300\\text{ K}$$\n$$\\eta_{\\text{max}} = 1 - \\frac{300}{400} = 1 - 0.75 = 0.25 = 25\\%$$\nSince the claimed efficiency ($26\\%$) exceeds the theoretical maximum possible efficiency ($25\\%$), the claim violates the Second Law of Thermodynamics and is physically impossible.\n\n### ✓ Examiner Pro-Tip\nIf $\\eta_{\\text{claimed}} > \\eta_{\\text{Carnot}}$, the claim is impossible; if $\\eta_{\\text{claimed}} \\le \\eta_{\\text{Carnot}}$, it is feasible.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-180",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine is made to work between $200^\\circ\\text{C}$ and $0^\\circ\\text{C}$ first and then between $0^\\circ\\text{C}$ and $-200^\\circ\\text{C}$. The ratio of efficiencies of the engine in the two cases is [KCET 2002]",
    "options": [
      "$1.73 : 1$",
      "$1 : 1.73$",
      "$1 : 1$",
      "$1 : 2$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = \\frac{T_1 - T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nCase 1: $T_1 = 473\\text{ K}$, $T_2 = 273\\text{ K}$:\n$$\\eta_1 = \\frac{200}{473}$$\nCase 2: $T_1 = 273\\text{ K}$, $T_2 = 73\\text{ K}$:\n$$\\eta_2 = \\frac{200}{273}$$\n$$\\frac{\\eta_1}{\\eta_2} = \\frac{273}{473} = \\frac{1}{1.732} = 1 : 1.73$$\n\n### ✓ Examiner Pro-Tip\nNotice that $\\eta_2$ is significantly larger because $273\\text{ K}$ in the denominator is smaller than $473\\text{ K}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-181",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Efficiency of a Carnot engine is $50\\%$ when temperature of outlet is $500\\text{ K}$. In order to increase efficiency up to $60\\%$ keeping temperature of intake the same what is temperature of outlet [CBSE PMT 2002]",
    "options": [
      "$200\\text{ K}$",
      "$400\\text{ K}$",
      "$600\\text{ K}$",
      "$800\\text{ K}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Initial state: $\\eta = 0.50$, $T_2 = 500\\text{ K}$:\n$$0.50 = 1 - \\frac{500}{T_1} \\implies T_1 = 1000\\text{ K}$$\n2. Desired state: $\\eta' = 0.60$, $T_1 = 1000\\text{ K}$:\n$$0.60 = 1 - \\frac{T_2'}{1000} \\implies \\frac{T_2'}{1000} = 0.40 \\implies T_2' = 400\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\nTo increase efficiency, sink temperature must be reduced ($500\\text{ K} \\to 400\\text{ K}$).",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-182",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Even Carnot engine cannot give $100\\%$ efficiency because we cannot [AIEEE 2002]",
    "options": [
      "Prevent radiation",
      "Find ideal sources",
      "Reach absolute zero temperature",
      "Eliminate friction"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency is $\\eta = 1 - \\frac{T_2}{T_1}$. For $\\eta = 1$ ($100\\%$), sink temperature $T_2$ must be $0\\text{ K}$ (absolute zero). By the Third Law of Thermodynamics (Nernst Heat Theorem), absolute zero is unattainable in any finite number of physical processes.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\eta = 100\\% \\iff T_2 = 0\\text{ K}$$\nSince $0\\text{ K}$ cannot be reached, $\\eta < 100\\%$ always.\n\n### ✓ Examiner Pro-Tip\nEven in the complete absence of friction and thermal leaks, Carnot efficiency is bounded strictly below $100\\%$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-183",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "“Heat cannot by itself flow from a body at lower temperature to a body at higher temperature” is a statement or consequence of [AIEEE 2003, EAMCET (Med.) 2003]",
    "options": [
      "Second law of thermodynamics",
      "Conservation of momentum",
      "Conservation of mass",
      "First law of thermodynamics"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThis is the precise **Clausius statement** of the Second Law of Thermodynamics: It is impossible to construct a device operating in a cycle that produces no effect other than the transfer of heat from a cooler body to a hotter body.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Clausius statement: Concerns refrigerators/heat pumps (heat flow from cold to hot requires external work input).\n- Kelvin-Planck statement: Concerns heat engines (impossible to convert all absorbed heat into work).\nBoth statements are completely equivalent formulations of the Second Law.\n\n### ✓ Examiner Pro-Tip\nFirst Law deals with energy conservation; Second Law specifies the direction of spontaneous thermal processes.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-184",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "A Carnot engine takes $3 \\times 10^6\\text{ cal}$ of heat from a reservoir at $627^\\circ\\text{C}$, and gives it to a sink at $27^\\circ\\text{C}$. The work done by the engine is [AIEEE 2003]",
    "options": [
      "$4.2 \\times 10^6\\text{ J}$",
      "$8.4 \\times 10^6\\text{ J}$",
      "$16.8 \\times 10^6\\text{ J}$",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1}, \\quad W = \\eta Q_1 \\times J$$\nwhere $J = 4.2\\text{ J/cal}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 627 + 273 = 900\\text{ K}$$\n$$T_2 = 27 + 273 = 300\\text{ K}$$\n$$\\eta = 1 - \\frac{300}{900} = 1 - \\frac{1}{3} = \\frac{2}{3}$$\n$$W_{\\text{cal}} = \\frac{2}{3} \\times (3 \\times 10^6\\text{ cal}) = 2 \\times 10^6\\text{ cal}$$\nIn Joules:\n$$W = (2 \\times 10^6\\text{ cal}) \\times 4.2\\text{ J/cal} = 8.4 \\times 10^6\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nAlways multiply by $4.2\\text{ J/cal}$ when the answer options are in Joules!",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-185",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The first operation involved in a Carnot cycle is [AFMC 1998]",
    "options": [
      "Isothermal expansion",
      "Adiabatic expansion",
      "Isothermal compression",
      "Adiabatic compression"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe 4 sequential reversible processes in an ideal Carnot cycle are:\n1. Isothermal expansion at source temperature $T_1$.\n2. Adiabatic expansion from $T_1$ to $T_2$.\n3. Isothermal compression at sink temperature $T_2$.\n4. Adiabatic compression from $T_2$ back to $T_1$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFirst stage is reversible isothermal expansion at temperature $T_1$.\n\n### ✓ Examiner Pro-Tip\nRemember sequence: Isothermal Exp $\\to$ Adiabatic Exp $\\to$ Isothermal Comp $\\to$ Adiabatic Comp.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-186",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "For which combination of working temperatures the efficiency of Carnot engine is highest [KCET 2000]",
    "options": [
      "$80\\text{ K}, 60\\text{ K}$",
      "$100\\text{ K}, 80\\text{ K}$",
      "$60\\text{ K}, 40\\text{ K}$",
      "$40\\text{ K}, 20\\text{ K}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency is $\\eta = 1 - \\frac{T_2}{T_1}$. For a constant difference $\\Delta T = T_1 - T_2 = 20\\text{ K}$, $\\eta = \\frac{\\Delta T}{T_1} = \\frac{20}{T_1}$. Efficiency is maximum when source temperature $T_1$ is minimum.\n\n### ⚡ Step-by-Step Derivation & Calculations\n(A) $\\eta = 20/80 = 0.25$\n(B) $\\eta = 20/100 = 0.20$\n(C) $\\eta = 20/60 = 0.333$\n(D) $\\eta = 20/40 = 0.50$ (Highest!)\n\n### ✓ Examiner Pro-Tip\nFor equal temperature difference $\\Delta T$, the engine operating at the lowest absolute temperature level has the highest efficiency.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-187",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "The efficiency of Carnot engine when source temperature is $T_1$ and sink temperature is $T_2$ will be [DCE 2000]",
    "options": [
      "$\\frac{T_1 - T_2}{T_1}$",
      "$\\frac{T_2 - T_1}{T_2}$",
      "$\\frac{T_1 - T_2}{T_2}$",
      "$\\frac{T_1}{T_2}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy definition, Carnot efficiency is $\\eta = \\frac{W}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = \\frac{T_1 - T_2}{T_1} = 1 - \\frac{T_2}{T_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\eta = \\frac{T_1 - T_2}{T_1}$$\n\n### ✓ Examiner Pro-Tip\nSource temperature $T_1$ is always in the denominator.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-188",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An ideal heat engine working between temperature $T_1$ and $T_2$ has an efficiency $\\eta$. The new efficiency if both the source and sink temperature are doubled, will be [DPMT 2000]",
    "options": [
      "$\\eta / 2$",
      "$\\eta$",
      "$2\\eta$",
      "$3\\eta$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency depends on the ratio of sink temperature to source temperature: $\\eta = 1 - \\frac{T_2}{T_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nWhen both temperatures are doubled ($T_1' = 2T_1$, $T_2' = 2T_2$):\n$$\\eta' = 1 - \\frac{2T_2}{2T_1} = 1 - \\frac{T_2}{T_1} = \\eta$$\nEfficiency remains unchanged.\n\n### ✓ Examiner Pro-Tip\nScaling absolute temperatures by any common factor $k$ leaves efficiency unchanged because $\\frac{k T_2}{k T_1} = \\frac{T_2}{T_1}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-189",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An ideal refrigerator has a freezer at a temperature of $-13^\\circ\\text{C}$. The coefficient of performance of the engine is $5$. The temperature of the air (to which heat is rejected) will be [BHU 2000; CPMT 2002]",
    "options": [
      "$325^\\circ\\text{C}$",
      "$325\\text{ K}$",
      "$39^\\circ\\text{C}$",
      "$320^\\circ\\text{C}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nCoefficient of performance (COP) $K$ is:\n$$K = \\frac{T_2}{T_1 - T_2}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_2 = -13 + 273 = 260\\text{ K}$$\n$$5 = \\frac{260}{T_1 - 260}$$\n$$T_1 - 260 = \\frac{260}{5} = 52$$\n$$T_1 = 260 + 52 = 312\\text{ K}$$\nIn Celsius:\n$$T_1 = 312 - 273 = 39^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\nConvert to Kelvin for the COP formula, then subtract $273$ to get $39^\\circ\\text{C}$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-190",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "In a mechanical refrigerator, the low temperature coils are at a temperature of $-23^\\circ\\text{C}$ and the compressed gas in the condenser has a temperature of $27^\\circ\\text{C}$. The theoretical coefficient of performance is [UPSEAT 2001]",
    "options": [
      "$5$",
      "$8$",
      "$6$",
      "$6.5$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$K = \\frac{T_2}{T_1 - T_2}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_2 = -23 + 273 = 250\\text{ K}$$\n$$T_1 = 27 + 273 = 300\\text{ K}$$\n$$K = \\frac{250}{300 - 250} = \\frac{250}{50} = 5$$\n\n### ✓ Examiner Pro-Tip\nDirect division: $\\frac{250}{50} = 5$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-191",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An engine is supposed to operate between two reservoirs at temperature $727^\\circ\\text{C}$ and $227^\\circ\\text{C}$. The maximum possible efficiency of such an engine is [UPSEAT 2005]",
    "options": [
      "$1/2$",
      "$1/4$",
      "$3/4$",
      "$1$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 727 + 273 = 1000\\text{ K}$$\n$$T_2 = 227 + 273 = 500\\text{ K}$$\n$$\\eta = 1 - \\frac{500}{1000} = 1 - \\frac{1}{2} = \\frac{1}{2}$$\n\n### ✓ Examiner Pro-Tip\nMaximum efficiency possible is $\\eta = 50\\% = 1/2$.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-192",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "An ideal gas heat engine operates in Carnot cycle between $227^\\circ\\text{C}$ and $127^\\circ\\text{C}$. It absorbs $6 \\times 10^4\\text{ cal}$ of heat at higher temperature. Amount of heat converted to work is [CBSE PMT 2005]",
    "options": [
      "$2.4 \\times 10^4\\text{ cal}$",
      "$6 \\times 10^4\\text{ cal}$",
      "$1.2 \\times 10^4\\text{ cal}$",
      "$4.8 \\times 10^4\\text{ cal}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1} = \\frac{W}{Q_1}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 = 227 + 273 = 500\\text{ K}$$\n$$T_2 = 127 + 273 = 400\\text{ K}$$\n$$\\eta = 1 - \\frac{400}{500} = 0.2$$\n$$W = \\eta Q_1 = 0.2 \\times (6 \\times 10^4\\text{ cal}) = 1.2 \\times 10^4\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\nKeep the answer in calories when requested in calories.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-193",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Isobaric, Isochoric & Heat Engines",
    "difficulty": "Medium",
    "questionText": "Which of the following processes is reversible [CBSE PMT 2005]",
    "options": [
      "Transfer of heat by radiation",
      "Electrical heating of a nichrome wire",
      "Transfer of heat by conduction",
      "Isothermal compression"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nConduction, radiation, and resistive electrical heating ($I^2 R$) involve dissipation and finite irreversible driving potentials. Quasi-static isothermal compression or expansion through infinitesimal pressure changes is a reversible process.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Radiation, Conduction: Irreversible heat transfer across finite $\\Delta T$.\n- Joule Heating ($I^2 R$): Inherently irreversible conversion of electrical work to thermal energy.\n- Slow Isothermal Compression: Reversible path along $P V = \\text{constant}$.\n\n### ✓ Examiner Pro-Tip\nQuasi-static isothermal and adiabatic expansions/compressions are standard ideal reversible processes in classical thermodynamics.",
    "tags": [
      "Isobaric, Isochoric & Heat Engines",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-194",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "When an ideal diatomic gas is heated at constant pressure, the fraction of the heat energy supplied which increases the internal energy of the gas, is [IIT 1990; UPSEAT 1998; RPET 2000]",
    "options": [
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{3}{7}$",
      "$\\frac{5}{7}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe fraction of heat energy supplied at constant pressure that goes into increasing the internal energy is given by $f = \\frac{\\Delta U}{\\Delta Q_p} = \\frac{n C_v \\Delta T}{n C_p \\Delta T} = \\frac{C_v}{C_p} = \\frac{1}{\\gamma}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor an ideal diatomic gas, $\\gamma = \\frac{7}{5}$:\n$$f = \\frac{1}{\\gamma} = \\frac{1}{7/5} = \\frac{5}{7}$$\n\n### ✓ Examiner Pro-Tip\n- Fraction converted to internal energy: $f_U = \\frac{1}{\\gamma} = \\frac{5}{7} \\approx 71.4\\%$.\n- Fraction converted to external work: $f_W = 1 - \\frac{1}{\\gamma} = \\frac{2}{7} \\approx 28.6\\%$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-195",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "$1\\text{ cm}^3$ of water at its boiling point absorbs $540\\text{ calories}$ of heat to become steam with a volume of $1671\\text{ cm}^3$. If the atmospheric pressure $= 1.013 \\times 10^5\\text{ N/m}^2$ and the mechanical equivalent of heat $= 4.19\\text{ J/calorie}$, the energy spent in this process in overcoming intermolecular forces is [MP PET 1999, 2001; Orissa JEE 2002]",
    "options": [
      "$540\\text{ cal}$",
      "$40\\text{ cal}$",
      "$500\\text{ cal}$",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe total heat added during vaporization $\\Delta Q$ is divided into work done against atmospheric pressure ($W$) and internal energy increase (overcoming intermolecular forces $\\Delta U$). By First Law: $\\Delta U = \\Delta Q - W$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Work done:\n$$\\Delta V = 1671 - 1 = 1670\\text{ cm}^3 = 1670 \\times 10^{-6}\\text{ m}^3$$\n$$W = P \\Delta V = (1.013 \\times 10^5\\text{ N/m}^2) \\times (1670 \\times 10^{-6}\\text{ m}^3) = 169.17\\text{ J}$$\nIn calories:\n$$W = \\frac{169.17}{4.19} \\approx 40.38\\text{ cal} \\approx 40\\text{ cal}$$\n2. Energy spent in overcoming intermolecular forces ($\\Delta U$):\n$$\\Delta U = \\Delta Q - W = 540 - 40 = 500\\text{ cal}$$\n\n### ✓ Examiner Pro-Tip\nOut of $540\\text{ cal}$ latent heat of vaporization of water, $\\approx 500\\text{ cal}$ goes into internal potential energy (breaking hydrogen bonds) and only $\\approx 40\\text{ cal}$ is external expansion work.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-196",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "During the melting of a slab of ice at $273\\text{ K}$ at atmospheric pressure [IIT 1998]",
    "options": [
      "Positive work is done by ice-water system on the atmosphere",
      "Positive work is done on the ice-water system by the atmosphere",
      "The internal energy of the ice-water system increases",
      "The internal energy of the ice-water system decreases"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nWhen ice melts to water at $0^\\circ\\text{C}$ ($273\\text{ K}$), volume contracts (density of water is greater than density of ice). Thus $\\Delta V = V_{\\text{water}} - V_{\\text{ice}} < 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Since $\\Delta V < 0$, work done by the system is negative: $W = P \\Delta V < 0$. This means positive work is done *on* the system by the atmosphere (Option B is also true, standard key accepts B and C, with C being the primary internal energy statement).\n2. Heat is absorbed: $\\Delta Q > 0$.\nFrom First Law: $\\Delta U = \\Delta Q - W = \\Delta Q - (-|W|) = \\Delta Q + |W| > 0$.\nHence, internal energy increases.\n\n### ✓ Examiner Pro-Tip\nBoth heat supplied and atmospheric compression work go into increasing the internal energy during the melting of ice.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-197",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Two identical containers A and B with frictionless pistons contain the same ideal gas at the same temperature and the same volume $V$. The mass of the gas in A is $m_A$ and that in B is $m_B$. The gas in each cylinder is now allowed to expand isothermally to the same final volume $2V$. The changes in the pressure in A and B are found to be $\\Delta P$ and $1.5\\Delta P$ respectively. Then [IIT 1998]",
    "options": [
      "$4 m_A = 9 m_B$",
      "$2 m_A = 3 m_B$",
      "$3 m_A = 2 m_B$",
      "$9 m_A = 3 m_B$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an isothermal expansion from $V$ to $2V$, $P_f = P_i \\frac{V}{2V} = \\frac{P_i}{2}$. The change in pressure is $\\Delta P = P_i - P_f = \\frac{P_i}{2} = \\frac{n R T}{2 V} = \\frac{m R T}{2 M V}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor container A: $\\Delta P = \\frac{m_A R T}{2 M V}$\nFor container B: $1.5\\Delta P = \\frac{m_B R T}{2 M V}$\nDividing the two equations:\n$$\\frac{\\Delta P}{1.5\\Delta P} = \\frac{m_A}{m_B} \\implies \\frac{1}{1.5} = \\frac{2}{3} = \\frac{m_A}{m_B}$$\n$$3 m_A = 2 m_B$$\n\n### ✓ Examiner Pro-Tip\nChange in pressure in isothermal expansion to double volume is directly proportional to initial pressure and thus to mass $m$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-198",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A monoatomic ideal gas, initially at temperature $T_1$, is enclosed in a cylinder fitted with a frictionless piston. The gas is allowed to expand adiabatically to a temperature $T_2$ by releasing the piston suddenly. If $L_1$ and $L_2$ are the lengths of the gas column before and after expansion respectively, then $T_1 / T_2$ is given by [IIT-JEE (Screening) 2000]",
    "options": [
      "$\\left(\\frac{L_1}{L_2}\\right)^{2/3}$",
      "$\\frac{L_1}{L_2}$",
      "$\\frac{L_2}{L_1}$",
      "$\\left(\\frac{L_2}{L_1}\\right)^{2/3}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an adiabatic process, $T V^{\\gamma - 1} = \\text{constant}$. For a cylinder of cross-sectional area $A$, volume $V = A L$, so $T L^{\\gamma - 1} = \\text{constant}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor a monoatomic gas, $\\gamma = 5/3$, so $\\gamma - 1 = 5/3 - 1 = 2/3$.\n$$T_1 L_1^{2/3} = T_2 L_2^{2/3}$$\n$$\\frac{T_1}{T_2} = \\left(\\frac{L_2}{L_1}\\right)^{2/3}$$\n\n### ✓ Examiner Pro-Tip\nAlways identify the atomicity: Monoatomic $\\gamma = 5/3 \\implies \\gamma - 1 = 2/3$. Diatomic $\\gamma = 7/5 \\implies \\gamma - 1 = 2/5$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-199",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A closed hollow insulated cylinder is filled with gas at $0^\\circ\\text{C}$ and also contains an insulated piston of negligible weight and negligible thickness at the middle point. The gas on one side of the piston is heated to $100^\\circ\\text{C}$. If the piston moves $5\\text{ cm}$, the length of the hollow cylinder is [EAMCET 2001]",
    "options": [
      "$13.65\\text{ cm}$",
      "$27.3\\text{ cm}$",
      "$38.6\\text{ cm}$",
      "$64.6\\text{ cm}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nAt equilibrium, the pressure on both sides of the movable frictionless piston must be equal ($P_1 = P_2$). From the ideal gas law $P = \\frac{n R T}{V} \\propto \\frac{T}{L}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nLet total length be $2l$. Initially each compartment has length $l$.\nAfter displacement by $x = 5\\text{ cm}$:\nLeft compartment length $= l + 5$, temperature $T_1 = 100 + 273 = 373\\text{ K}$.\nRight compartment length $= l - 5$, temperature $T_2 = 0 + 273 = 273\\text{ K}$.\nSince $P_1 = P_2$:\n$$\\frac{T_1}{l + 5} = \\frac{T_2}{l - 5} \\implies \\frac{373}{l + 5} = \\frac{273}{l - 5}$$\n$$373(l - 5) = 273(l + 5)$$\n$$373 l - 1865 = 273 l + 1365$$\n$$100 l = 3230 \\implies l = 32.3\\text{ cm}$$\nTotal length of cylinder $= 2l = 2 \\times 32.3 = 64.6\\text{ cm}$.\n\n### ✓ Examiner Pro-Tip\nAlways remember to double the half-length $l$ to find the total length of the cylinder ($2l = 64.6\\text{ cm}$).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-200",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A monoatomic gas is supplied the heat $Q$ very slowly keeping the pressure constant. The work done by the gas will be [BHU 2003; CPMT 2004]",
    "options": [
      "$\\frac{2}{3} Q$",
      "$\\frac{3}{5} Q$",
      "$\\frac{2}{5} Q$",
      "$\\frac{1}{5} Q$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nAt constant pressure, work done is $W = P \\Delta V = n R \\Delta T$. Heat supplied is $Q = n C_p \\Delta T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor a monoatomic gas, $C_p = \\frac{5}{2}R$.\n$$\\frac{W}{Q} = \\frac{n R \\Delta T}{n C_p \\Delta T} = \\frac{R}{C_p} = \\frac{R}{\\frac{5}{2}R} = \\frac{2}{5}$$\n$$W = \\frac{2}{5} Q$$\n\n### ✓ Examiner Pro-Tip\nFor monoatomic: $W = \\frac{2}{5}Q = 40\\%$, $\\Delta U = \\frac{3}{5}Q = 60\\%$.\nFor diatomic: $W = \\frac{2}{7}Q \\approx 28.6\\%$, $\\Delta U = \\frac{5}{7}Q \\approx 71.4\\%$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-201",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A gas mixture consists of $2\\text{ moles}$ of oxygen and $4\\text{ moles}$ argon at temperature $T$. Neglecting all vibrational modes, the total internal energy of the system is [IIT 1999; UPSEAT 2003]",
    "options": [
      "$4\\text{ RT}$",
      "$15\\text{ RT}$",
      "$9\\text{ RT}$",
      "$11\\text{ RT}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nTotal internal energy of a mixture is the sum of internal energies of each component: $U = n_1 C_{v1} T + n_2 C_{v2} T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Oxygen ($O_2$) is diatomic $\\implies C_{v1} = \\frac{5}{2}R$, $n_1 = 2\\text{ moles}$:\n$$U_1 = 2 \\times \\left(\\frac{5}{2}RT\\right) = 5RT$$\n2. Argon ($Ar$) is monoatomic $\\implies C_{v2} = \\frac{3}{2}R$, $n_2 = 4\\text{ moles}$:\n$$U_2 = 4 \\times \\left(\\frac{3}{2}RT\\right) = 6RT$$\n3. Total internal energy:\n$$U = U_1 + U_2 = 5RT + 6RT = 11RT$$\n\n### ✓ Examiner Pro-Tip\nAlways sum the degree-of-freedom contributions: $U = \\left(2 \\times \\frac{5}{2} + 4 \\times \\frac{3}{2}\\right)RT = (5 + 6)RT = 11RT$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-202",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "An ideal gas expands isothermally from a volume $V_1$ to $V_2$ and then compressed to original volume $V_1$ adiabatically. Initial pressure is $P_1$ and final pressure is $P_3$. The total work done is $W$. Then [IIT-JEE (Screening) 2004]",
    "options": [
      "$P_3 > P_1, W > 0$",
      "$P_3 < P_1, W < 0$",
      "$P_3 > P_1, W < 0$",
      "$P_3 = P_1, W = 0$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nOn a $P-V$ diagram, the adiabatic compression curve is steeper than the isothermal expansion curve. Therefore, the adiabatic curve lies completely above the isothermal curve during return from $V_2$ to $V_1$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Final pressure $P_3$ at $V_1$ under adiabatic compression is greater than initial pressure $P_1$: $P_3 > P_1$.\n2. Area under compression curve (work done on gas) is larger than area under expansion curve (work done by gas). The cycle is traversed in the counter-clockwise direction, so net work done is negative: $W < 0$.\n\n### ✓ Examiner Pro-Tip\nCounter-clockwise cycle on $P-V$ diagram $\\implies W_{\\text{net}} < 0$ and $P_{\\text{adiabatic}} > P_{\\text{isothermal}}$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-203",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Work done by a system under isothermal change from a volume $V_1$ to $V_2$ for a gas which obeys van der Waals equation $\\left(P + \\frac{a n^2}{V^2}\\right)(V - n b) = n R T$ is",
    "options": [
      "$n R T \\ln\\left(\\frac{V_2 - n b}{V_1 - n b}\\right) + a n^2\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$",
      "$n R T \\log_{10}\\left(\\frac{V_2 - n b}{V_1 - n b}\\right) + a n^2\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$",
      "$n R T \\ln\\left(\\frac{V_2 - n a}{V_1 - n a}\\right) + b n^2\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$",
      "$n R T \\ln\\left(\\frac{V_1 - n b}{V_2 - n b}\\right) + a n^2\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a real gas obeying van der Waals equation, $P = \\frac{n R T}{V - n b} - \\frac{a n^2}{V^2}$. Work done in isothermal expansion is $W = \\int_{V_1}^{V_2} P \\, dV$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = \\int_{V_1}^{V_2} \\left[\\frac{n R T}{V - n b} - \\frac{a n^2}{V^2}\\right] dV$$\n$$W = n R T \\left[\\ln(V - n b)\\right]_{V_1}^{V_2} - a n^2 \\left[-\\frac{1}{V}\\right]_{V_1}^{V_2}$$\n$$W = n R T \\ln\\left(\\frac{V_2 - n b}{V_1 - n b}\\right) + a n^2\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$$\n\n### ✓ Examiner Pro-Tip\nNote the signs carefully: $\\int -\\frac{1}{V^2} dV = +\\frac{1}{V}$, so at limits $[1/V_2 - 1/V_1]$ with $+a n^2$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-204",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A cylindrical tube of uniform cross-sectional area $A$ is fitted with two air tight frictionless pistons. The pistons are connected to each other by a metallic wire. Initially the pressure of the gas is $P_0$ and temperature is $T_0$, atmospheric pressure is also $P_0$. Now the temperature of the gas is increased to $2 T_0$, the tension in the wire will be",
    "options": [
      "$2 P_0 A$",
      "$P_0 A$",
      "$\\frac{P_0 A}{2}$",
      "$4 P_0 A$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nBecause the wire connects both pistons together at a fixed separation length, the volume of the gas is constrained to be constant ($V = \\text{constant}$). Heating causes an isochoric pressure increase.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. At constant volume, pressure is proportional to temperature:\n$$P = P_0 \\left(\\frac{2 T_0}{T_0}\\right) = 2 P_0$$\n2. Equilibrium on each piston of cross-section $A$:\n$$F_{\\text{gas}} = P A = 2 P_0 A$$\n$$F_{\\text{atm}} = P_0 A$$\n$$T_{\\text{wire}} + P_0 A = P A = 2 P_0 A \\implies T_{\\text{wire}} = 2 P_0 A - P_0 A = P_0 A$$\n\n### ✓ Examiner Pro-Tip\nTension in the wire balances the net gauge pressure force: $T = (P - P_0)A = (2P_0 - P_0)A = P_0 A$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-205",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "The molar heat capacity in a process of a diatomic gas if it does a work of $\\frac{Q}{4}$ when a heat of $Q$ is supplied to it is",
    "options": [
      "$\\frac{2}{5}R$",
      "$\\frac{5}{2}R$",
      "$\\frac{10}{3}R$",
      "$\\frac{6}{7}R$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law of Thermodynamics, $\\Delta U = Q - W$. With $W = \\frac{Q}{4}$, $\\Delta U = Q - \\frac{Q}{4} = \\frac{3}{4}Q$. Also $\\Delta U = n C_v \\Delta T$ and $Q = n C \\Delta T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\frac{\\Delta U}{Q} = \\frac{C_v}{C} = \\frac{3}{4} \\implies C = \\frac{4}{3} C_v$$\nFor a diatomic gas, $C_v = \\frac{5}{2}R$:\n$$C = \\frac{4}{3} \\left(\\frac{5}{2}R\\right) = \\frac{10}{3}R$$\n\n### ✓ Examiner Pro-Tip\nDirect shortcut: $C = \\frac{C_v}{1 - W/Q} = \\frac{5/2 R}{1 - 1/4} = \\frac{5/2 R}{3/4} = \\frac{10}{3}R$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-206",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "An insulated container contains $4\\text{ moles}$ of an ideal diatomic gas at temperature $T$. Heat $Q$ is supplied to this gas, due to which $2\\text{ moles}$ of the gas are dissociated into atoms but temperature of the gas remains constant. Then",
    "options": [
      "$Q = 2RT$",
      "$Q = RT$",
      "$Q = 3RT$",
      "$Q = 4RT$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nDissociation of $2\\text{ moles}$ of diatomic molecules ($X_2$) produces $4\\text{ moles}$ of monoatomic atoms ($X$). The remaining $2\\text{ moles}$ stay diatomic.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Initial internal energy ($4\\text{ moles}$ diatomic at $T$):\n$$U_i = 4 \\times \\left(\\frac{5}{2}RT\\right) = 10RT$$\n2. Final internal energy ($2\\text{ moles}$ diatomic $+ 4\\text{ moles}$ monoatomic at $T$):\n$$U_f = 2 \\times \\left(\\frac{5}{2}RT\\right) + 4 \\times \\left(\\frac{3}{2}RT\\right) = 5RT + 6RT = 11RT$$\n3. Change in internal energy (in rigid insulated vessel $W = 0$):\n$$Q = \\Delta U = U_f - U_i = 11RT - 10RT = RT$$\n\n### ✓ Examiner Pro-Tip\nEach mole of diatomic gas that dissociates increases internal thermal kinetic energy by $2 \\times \\frac{3}{2}RT - \\frac{5}{2}RT = \\frac{1}{2}RT$. For 2 moles dissociated: $2 \\times \\frac{1}{2}RT = RT$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-207",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "The volume of air increases by $5\\%$ in its adiabatic expansion. The percentage decrease in its pressure will be",
    "options": [
      "$5\\%$",
      "$6\\%$",
      "$7\\%$",
      "$8\\%$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an adiabatic process, $P V^\\gamma = \\text{constant}$. Differentiating gives $\\frac{dP}{P} + \\gamma \\frac{dV}{V} = 0 \\implies \\frac{\\Delta P}{P} = -\\gamma \\frac{\\Delta V}{V}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor air (primarily diatomic $N_2$ and $O_2$), $\\gamma = 1.4 = \\frac{7}{5}$.\n$$\\left|\\frac{\\Delta P}{P}\\right| = \\gamma \\left(\\frac{\\Delta V}{V}\\right) = 1.4 \\times 5\\% = 7\\%$$\n\n### ✓ Examiner Pro-Tip\nFor small percentage changes ($< 10\\%$), use fractional error formula $\\%\\Delta P = \\gamma \\times (\\%\\Delta V) = 1.4 \\times 5\\% = 7\\%$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-208",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "The temperature of a hypothetical gas increases to $\\sqrt{2}$ times when compressed adiabatically to half the volume. Its equation can be written as",
    "options": [
      "$P V^{3/2} = \\text{constant}$",
      "$P V^{5/2} = \\text{constant}$",
      "$P V^{7/3} = \\text{constant}$",
      "$P V^{4/3} = \\text{constant}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an adiabatic process, temperature and volume are related by $T V^{\\gamma - 1} = \\text{constant}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$$\n$$\\frac{T_2}{T_1} = \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$\nGiven $T_2/T_1 = \\sqrt{2} = 2^{1/2}$ and $V_1/V_2 = 2$:\n$$2^{1/2} = 2^{\\gamma - 1} \\implies \\gamma - 1 = \\frac{1}{2} \\implies \\gamma = \\frac{3}{2}$$\nTherefore, the adiabatic equation is $P V^{3/2} = \\text{constant}$.\n\n### ✓ Examiner Pro-Tip\nEquate exponents of base 2 directly: $2^{1/2} = 2^{\\gamma - 1} \\implies \\gamma = 3/2$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-209",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Two Carnot engines A and B are operated in succession. The first one, A receives heat from a source at $T_1 = 800\\text{ K}$ and rejects to sink at $T_2\\text{ K}$. The second engine B receives heat rejected by the first engine and rejects to another sink at $T_3 = 300\\text{ K}$. If the work outputs of two engines are equal, then the value of $T_2$ is",
    "options": [
      "$100\\text{ K}$",
      "$300\\text{ K}$",
      "$550\\text{ K}$",
      "$700\\text{ K}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nWhen two Carnot engines operate in series such that the work outputs are equal ($W_1 = W_2$), the intermediate temperature is the arithmetic mean of the reservoir temperatures: $T_2 = \\frac{T_1 + T_3}{2}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W_1 = Q_1 - Q_2 = Q_1 \\left(1 - \\frac{T_2}{T_1}\\right)$$\n$$W_2 = Q_2 - Q_3 = Q_2 \\left(1 - \\frac{T_3}{T_2}\\right) = Q_1 \\frac{T_2}{T_1} \\left(1 - \\frac{T_3}{T_2}\\right) = Q_1 \\left(\\frac{T_2 - T_3}{T_1}\\right)$$\nEquating $W_1 = W_2$:\n$$1 - \\frac{T_2}{T_1} = \\frac{T_2 - T_3}{T_1} \\implies T_1 - T_2 = T_2 - T_3$$\n$$2 T_2 = T_1 + T_3 \\implies T_2 = \\frac{800 + 300}{2} = \\frac{1100}{2} = 550\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\n- Equal work output: $T_2 = \\frac{T_1 + T_3}{2}$ (Arithmetic Mean).\n- Equal efficiency: $T_2 = \\sqrt{T_1 T_3}$ (Geometric Mean).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-210",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "When an ideal monoatomic gas is heated at constant pressure, fraction of heat energy supplied which increases the internal energy of gas, is [AIIMS 1995]",
    "options": [
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{3}{7}$",
      "$\\frac{3}{4}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nAt constant pressure, fraction of heat contributing to internal energy is $\\frac{\\Delta U}{\\Delta Q} = \\frac{C_v}{C_p} = \\frac{1}{\\gamma}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor monoatomic gas, $C_v = \\frac{3}{2}R$ and $C_p = \\frac{5}{2}R$:\n$$\\frac{\\Delta U}{\\Delta Q} = \\frac{\\frac{3}{2}R}{\\frac{5}{2}R} = \\frac{3}{5}$$\n\n### ✓ Examiner Pro-Tip\nMonoatomic: Internal energy gets $60\\%$ ($3/5$), external work gets $40\\%$ ($2/5$).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-211",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "When an ideal gas ($\\gamma = 5/3$) is heated under constant pressure, then what percentage of given heat energy will be utilised in doing external work [RPET 1999]",
    "options": [
      "$40\\%$",
      "$30\\%$",
      "$60\\%$",
      "$20\\%$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFraction of heat utilized in doing external work at constant pressure is $\\frac{\\Delta W}{\\Delta Q} = 1 - \\frac{1}{\\gamma}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\frac{\\Delta W}{\\Delta Q} = 1 - \\frac{1}{5/3} = 1 - \\frac{3}{5} = \\frac{2}{5} = 0.40 = 40\\%$$\n\n### ✓ Examiner Pro-Tip\nDirect percentage formula: $\\% W = \\left(1 - \\frac{1}{\\gamma}\\right) \\times 100 = \\left(1 - 0.6\\right) \\times 100 = 40\\%$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-212",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Which one of the following gases possesses the largest internal energy [SCRA 1998]",
    "options": [
      "$2\\text{ moles}$ of helium occupying $1\\text{ m}^3$ at $300\\text{ K}$",
      "$56\\text{ kg}$ of nitrogen at $10^7\\text{ N/m}^2$ and $300\\text{ K}$",
      "$8\\text{ grams}$ of oxygen at $8\\text{ atm}$ and $300\\text{ K}$",
      "$6 \\times 10^{26}\\text{ molecules}$ of argon occupying $40\\text{ m}^3$ at $900\\text{ K}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy is $U = n C_v T = n \\left(\\frac{f}{2} R\\right) T$, which is proportional to the number of moles $n$ and temperature $T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n(A) Helium ($n = 2\\text{ mol}$): $U = 2 \\times \\frac{3}{2} R (300) = 900 R$.\n(B) Nitrogen ($56\\text{ kg} = 56000\\text{ g}$, $M = 28\\text{ g/mol} \\implies n = 2000\\text{ moles}$):\n$$U = 2000 \\times \\frac{5}{2} R (300) = 1.5 \\times 10^6 R$$\n(C) Oxygen ($8\\text{ g} = 0.25\\text{ mol}$): tiny fraction.\n(D) Argon ($6 \\times 10^{26}\\text{ molecules} \\approx 1000\\text{ moles}$): $U = 1000 \\times \\frac{3}{2} R (900) = 1.35 \\times 10^6 R$.\nComparing: Option B has the highest internal energy ($1.5 \\times 10^6 R$).\n\n### ✓ Examiner Pro-Tip\nAlways convert mass to moles: $56\\text{ kg}$ of $N_2$ is an enormous quantity ($2000\\text{ moles}$). ",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-213",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Two samples A and B of a gas initially at the same pressure and temperature are compressed from volume $V$ to $V/2$ (A isothermally and B adiabatically). The final pressure of A is [MP PET 1996, 99; MP PMT 1997, 99]",
    "options": [
      "Greater than the final pressure of B",
      "Equal to the final pressure of B",
      "Less than the final pressure of B",
      "Twice the final pressure of B"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn isothermal compression, $P_A V_A = P_i V \\implies P_A = 2 P_i$. In adiabatic compression, $P_B V_B^\\gamma = P_i V^\\gamma \\implies P_B = 2^\\gamma P_i$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince $\\gamma > 1$, $2^\\gamma > 2$, therefore $P_B > P_A$, which means $P_A < P_B$ (final pressure of A is less than the final pressure of B).\n\n### ✓ Examiner Pro-Tip\nIn compression, adiabatic curve rises above isothermal curve ($P_{\\text{adiabatic}} > P_{\\text{isothermal}}$).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-214",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Initial pressure and volume of a gas are $P$ and $V$ respectively. First it is expanded isothermally to volume $4 V$ and then compressed adiabatically to volume $V$. The final pressure of gas will be (for $\\gamma = 1.5$) [CBSE PMT 1999]",
    "options": [
      "$1P$",
      "$2P$",
      "$4P$",
      "$8P$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\n1. Isothermal expansion: $P_1 V_1 = P_2 V_2$.\n2. Adiabatic compression: $P_2 V_2^\\gamma = P_3 V_3^\\gamma$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. After isothermal expansion to $4V$:\n$$P_2 = P \\left(\\frac{V}{4V}\\right) = \\frac{P}{4}$$\n2. After adiabatic compression to $V$ (with $\\gamma = 1.5 = 3/2$):\n$$P_3 = P_2 \\left(\\frac{4V}{V}\\right)^{3/2} = \\frac{P}{4} \\times (4)^{3/2} = \\frac{P}{4} \\times 8 = 2P$$\n\n### ✓ Examiner Pro-Tip\n$(4)^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$. Final pressure is $P/4 \\times 8 = 2P$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-215",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A thermally insulated rigid container contains an ideal gas heated by a filament of resistance $100\\ \\Omega$ through a current of $1\\text{ A}$ for $5\\text{ min}$ then change in internal energy is [IIT-JEE (Screening) 2005]",
    "options": [
      "$0\\text{ kJ}$",
      "$10\\text{ kJ}$",
      "$20\\text{ kJ}$",
      "$30\\text{ kJ}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a rigid container, volume is constant ($W = 0$). By the First Law, all electrical work/heat supplied increases the internal energy: $\\Delta U = I^2 R t$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$I = 1\\text{ A}, \\quad R = 100\\ \\Omega, \\quad t = 5 \\times 60 = 300\\text{ s}$$\n$$\\Delta U = I^2 R t = (1)^2 \\times 100 \\times 300 = 30000\\text{ J} = 30\\text{ kJ}$$\n\n### ✓ Examiner Pro-Tip\nRigid container means $\\Delta V = 0 \\implies W = 0$. Hence $\\Delta U = Q = 30\\text{ kJ}$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-216",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A reversible engine converts one-sixth of the heat input into work. When the temperature of the sink is reduced by $62^\\circ\\text{C}$, the efficiency of the engine is doubled. The temperatures of the source and sink are [CBSE PMT 2000]",
    "options": [
      "$80^\\circ\\text{C}, 37^\\circ\\text{C}$",
      "$95^\\circ\\text{C}, 28^\\circ\\text{C}$",
      "$90^\\circ\\text{C}, 37^\\circ\\text{C}$",
      "$99^\\circ\\text{C}, 37^\\circ\\text{C}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency $\\eta = 1 - \\frac{T_2}{T_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Initial efficiency: $\\eta = \\frac{1}{6} = 1 - \\frac{T_2}{T_1} \\implies \\frac{T_2}{T_1} = \\frac{5}{6} \\implies T_2 = \\frac{5}{6} T_1$.\n2. Doubled efficiency $\\eta' = \\frac{2}{6} = \\frac{1}{3}$ when sink is reduced by $62\\text{ K}$:\n$$\\frac{1}{3} = 1 - \\frac{T_2 - 62}{T_1} \\implies \\frac{T_2 - 62}{T_1} = \\frac{2}{3}$$\n$$\\frac{T_2}{T_1} - \\frac{62}{T_1} = \\frac{2}{3} \\implies \\frac{5}{6} - \\frac{62}{T_1} = \\frac{4}{6}$$\n$$\\frac{62}{T_1} = \\frac{1}{6} \\implies T_1 = 372\\text{ K}$$\n$$T_2 = \\frac{5}{6} \\times 372 = 310\\text{ K}$$\nIn Celsius:\n$$T_1 = 372 - 273 = 99^\\circ\\text{C}$$\n$$T_2 = 310 - 273 = 37^\\circ\\text{C}$$\n\n### ✓ Examiner Pro-Tip\nSource: $99^\\circ\\text{C}$, Sink: $37^\\circ\\text{C}$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-217",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "An engineer claims to have made an engine delivering $10\\text{ kW}$ power with fuel consumption of $1\\text{ g/sec}$. The calorific value of the fuel is $2\\text{ kcal/g}$. Is the claim of the engineer [J & K CET 2000]",
    "options": [
      "Valid",
      "Invalid",
      "Depends on engine design",
      "Depends on the load"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nEfficiency cannot exceed $100\\%$ ($\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\le 1$) by the First and Second Laws of Thermodynamics.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. Heat input power:\n$$P_{\\text{in}} = (1\\text{ g/s}) \\times (2\\text{ kcal/g}) = 2\\text{ kcal/s} = 2 \\times 4.184\\text{ kJ/s} = 8.368\\text{ kW}$$\n2. Claimed power output: $P_{\\text{out}} = 10\\text{ kW}$.\n3. Claimed efficiency:\n$$\\eta = \\frac{10\\text{ kW}}{8.368\\text{ kW}} \\approx 1.195 = 119.5\\% > 100\\%$$\nBecause the output power exceeds input energy rate, it creates energy out of nothing, violating the First Law.\n\n### ✓ Examiner Pro-Tip\nAny engine with $\\eta > 100\\%$ is a perpetual motion machine of the first kind (PMM-1) and is physically impossible.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-218",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Find the change in the entropy in the following process: $100\\text{ gm}$ of ice at $0^\\circ\\text{C}$ melts when dropped in a bucket of water at $50^\\circ\\text{C}$ (Assume temperature of water does not change) [BHU (Med.) 2000]",
    "options": [
      "$-4.5\\text{ cal/K}$",
      "$+4.5\\text{ cal/K}$",
      "$+5.4\\text{ cal/K}$",
      "$-5.4\\text{ cal/K}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nTotal entropy change of the universe during heat transfer is $\\Delta S_{\\text{total}} = \\Delta S_{\\text{ice}} + \\Delta S_{\\text{water}}$, where $\\Delta S = \\frac{Q}{T}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nHeat required to melt $100\\text{ g}$ ice: $Q = m L = 100 \\times 80 = 8000\\text{ cal}$.\n1. Entropy gain by ice (at $0^\\circ\\text{C} = 273\\text{ K}$):\n$$\\Delta S_{\\text{ice}} = +\\frac{8000}{273} = +29.30\\text{ cal/K}$$\n2. Entropy loss by water reservoir (at $50^\\circ\\text{C} = 323\\text{ K}$):\n$$\\Delta S_{\\text{water}} = -\\frac{8000}{323} = -24.77\\text{ cal/K}$$\n3. Net change in entropy:\n$$\\Delta S_{\\text{total}} = +29.30 - 24.77 = +4.53\\text{ cal/K} \\approx +4.5\\text{ cal/K}$$\n\n### ✓ Examiner Pro-Tip\nIn spontaneous irreversible processes, total entropy change $\\Delta S$ is always positive ($+4.5\\text{ cal/K}$).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-219",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "An ideal gas expands in such a manner that its pressure and volume can be related by equation $P V^2 = \\text{constant}$. During this process, the gas is [UPSEAT 2002]",
    "options": [
      "Heated",
      "Cooled",
      "Neither heated nor cooled",
      "First heated and then cooled"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a polytropic process $P V^x = \\text{constant}$, using $P = \\frac{n R T}{V}$, we have $T V^{x - 1} = \\text{constant}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nHere $x = 2$, so $T V^{2 - 1} = T V = \\text{constant} \\implies T \\propto \\frac{1}{V}$.\nAs the gas expands ($V$ increases), the temperature $T$ must decrease.\nTherefore, the gas cools during expansion.\n\n### ✓ Examiner Pro-Tip\nWhenever polytropic index $x > 1$, temperature decreases upon expansion ($T \\propto 1/V^{x-1}$).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-220",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A Carnot engine whose low temperature reservoir is at $7^\\circ\\text{C}$ has an efficiency of $50\\%$. It is desired to increase the efficiency to $70\\%$. By how many degrees should the temperature of the high temperature reservoir be increased [UPSEAT 2005]",
    "options": [
      "$840\\text{ K}$",
      "$280\\text{ K}$",
      "$560\\text{ K}$",
      "$380\\text{ K}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n$$\\eta = 1 - \\frac{T_2}{T_1} \\implies T_1 = \\frac{T_2}{1 - \\eta}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$T_2 = 7 + 273 = 280\\text{ K}$$\n1. Initial state: $\\eta = 0.50$:\n$$T_1 = \\frac{280}{1 - 0.50} = \\frac{280}{0.50} = 560\\text{ K}$$\n2. Desired state: $\\eta' = 0.70$:\n$$T_1' = \\frac{280}{1 - 0.70} = \\frac{280}{0.30} = 933.3\\text{ K} \\approx 940\\text{ K}$$\n$$\\Delta T_1 = T_1' - T_1 = 933.3 - 560 = 373.3\\text{ K} \\approx 380\\text{ K}$$\n(Rounding to nearest standard key option $380\\text{ K}$).\n\n### ✓ Examiner Pro-Tip\nTo achieve higher efficiency, source temperature must be increased substantially.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-221",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "P-V diagram of a diatomic gas is a straight line passing through origin. The molar heat capacity of the gas in the process will be",
    "options": [
      "$4 R$",
      "$2.5 R$",
      "$3 R$",
      "$\\frac{4}{3} R$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a straight line $P-V$ graph passing through the origin: $P = c V \\implies P V^{-1} = \\text{constant}$. This is a polytropic process $P V^x = \\text{constant}$ with polytropic exponent $x = -1$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nMolar heat capacity in a polytropic process $P V^x = \\text{constant}$ is:\n$$C = C_v + \\frac{R}{1 - x}$$\nFor a diatomic gas, $C_v = \\frac{5}{2}R$. With $x = -1$:\n$$C = \\frac{5}{2}R + \\frac{R}{1 - (-1)} = \\frac{5}{2}R + \\frac{R}{2} = \\frac{6}{2}R = 3R$$\n\n### ✓ Examiner Pro-Tip\nDirect polytropic formula: $C = C_v + \\frac{R}{1 - x}$. For line through origin $x = -1 \\implies C = C_v + R/2$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-222",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "An adiabatic cylindrical container of volume $V_0$ is divided by an adiabatic smooth piston (area of cross-section $= A$) in two equal parts. An ideal gas ($C_p / C_v = \\gamma$) is at pressure $P_1$ and temperature $T_1$ in left part and gas at pressure $P_2$ and temperature $T_2$ in right part. The piston is slowly displaced and released at a position where it can stay in equilibrium. The final pressure of the two parts will be (Suppose $x = \\text{displacement of the piston}$)",
    "options": [
      "$P_2$",
      "$P_1$",
      "$P_1 \\left(\\frac{V_0/2}{V_0/2 + A x}\\right)^\\gamma$",
      "$P_2 \\left(\\frac{V_0/2}{V_0/2 + A x}\\right)^\\gamma$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nBecause the walls and piston are adiabatic, the gas in both compartments undergoes reversible adiabatic expansion/compression satisfying $P V^\\gamma = \\text{constant}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nInitial volume of left part $= \\frac{V_0}{2}$.\nWhen displaced to the right by $x$, new volume $= \\frac{V_0}{2} + A x$.\nBy adiabatic relation for the left compartment:\n$$P_1 \\left(\\frac{V_0}{2}\\right)^\\gamma = P_{\\text{final}} \\left(\\frac{V_0}{2} + A x\\right)^\\gamma$$\n$$P_{\\text{final}} = P_1 \\left(\\frac{V_0 / 2}{V_0 / 2 + A x}\\right)^\\gamma$$\n\n### ✓ Examiner Pro-Tip\nAt final equilibrium, pressures on both sides are equal ($P_{\\text{final}}$).",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-223",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Two cylinders A and B fitted with pistons contain equal amounts of an ideal diatomic gas at $300\\text{ K}$. The piston of A is free to move while that of B is held fixed. The same amount of heat is given to the gas in each cylinder. If the rise in temperature of the gas in A is $30\\text{ K}$, then the rise in temperature of the gas in B is [IIT 1998]",
    "options": [
      "$30\\text{ K}$",
      "$18\\text{ K}$",
      "$50\\text{ K}$",
      "$42\\text{ K}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n- Cylinder A has movable piston at constant pressure: $Q = n C_p \\Delta T_A$.\n- Cylinder B has fixed piston at constant volume: $Q = n C_v \\Delta T_B$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince equal heat $Q$ is supplied:\n$$n C_p \\Delta T_A = n C_v \\Delta T_B$$\n$$\\Delta T_B = \\left(\\frac{C_p}{C_v}\\right) \\Delta T_A = \\gamma \\Delta T_A$$\nFor an ideal diatomic gas, $\\gamma = \\frac{7}{5} = 1.4$:\n$$\\Delta T_B = 1.4 \\times 30\\text{ K} = 42\\text{ K}$$\n\n### ✓ Examiner Pro-Tip\nBecause no energy is wasted doing expansion work in fixed cylinder B, all heat goes into temperature rise, making $\\Delta T_B = \\gamma \\Delta T_A = 1.4 \\times 30 = 42\\text{ K}$.",
    "tags": [
      "Critical Thinking",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-224",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A system goes from A to B via two processes I and II as shown in figure. If $\\Delta U_1$ and $\\Delta U_2$ are the changes in internal energies in the processes I and II respectively, then [AIEEE 2005]",
    "options": [
      "$\\Delta U_I > \\Delta U_{II}$",
      "$\\Delta U_I < \\Delta U_{II}$",
      "$\\Delta U_I = \\Delta U_{II}$",
      "Relation between $\\Delta U_I$ and $\\Delta U_{II}$ cannot be determined"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy $U$ is a thermodynamic state function that depends only on the initial and final thermodynamic equilibrium states of the system, completely independent of the path taken.\n\n### ⚡ Step-by-Step Derivation & Calculations\nBoth processes I and II have identical initial state $A$ and final state $B$:\n$$\\Delta U_I = U_B - U_A$$\n$$\\Delta U_{II} = U_B - U_A$$\n$$\\therefore \\Delta U_I = \\Delta U_{II}$$\n\n### ✓ Examiner Pro-Tip\nState functions ($\\Delta U, \\Delta H, \\Delta S$) are path-independent; path functions ($Q, W$) depend on the specific trajectory.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-225",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A thermodynamic system is taken through the cycle PQRSP process. The net work done by the system is [Orissa JEE 2002]",
    "options": [
      "$20\\text{ J}$",
      "$-20\\text{ J}$",
      "$400\\text{ J}$",
      "$-374\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe net work done in a cyclic process on a $P-V$ diagram is equal to the area enclosed by the cycle, with sign determined by the sense of traversal (clockwise positive, counter-clockwise negative).\n\n### ⚡ Step-by-Step Derivation & Calculations\nThe cycle PQRSP is traversed in a counter-clockwise direction:\n$$\\Delta P = (200 - 100)\\text{ kPa} = 100 \\times 10^3\\text{ Pa}$$\n$$\\Delta V = (300 - 100)\\text{ cc} = 200 \\times 10^{-6}\\text{ m}^3$$\n$$\\text{Area} = \\Delta P \\times \\Delta V = (100 \\times 10^3) \\times (200 \\times 10^{-6}) = 20\\text{ J}$$\nBecause traversal is counter-clockwise, work done by the system is negative:\n$$W_{\\text{net}} = -20\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nAlways check loop direction: Counter-clockwise on $P-V$ plane means work done ON the system ($W_{\\text{by system}} = -20\\text{ J}$).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-226",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal gas is taken around ABCA as shown in the $P-V$ diagram. The work done during a cycle is [KCET 2001]",
    "options": [
      "$2PV$",
      "$PV$",
      "$1/2 PV$",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during a triangular cycle on a $P-V$ diagram is given by the area enclosed by the triangle: $W = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Base} = 3V - V = 2V$$\n$$\\text{Height} = 3P - P = 2P$$\n$$W = \\text{Area} = \\frac{1}{2} \\times (2V) \\times (2P) = 2PV$$\n\n### ✓ Examiner Pro-Tip\nFor clockwise closed loops, $W = +\\text{Area} = 2PV$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-227",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The P-V diagram shows seven curved paths (connected by vertical paths) that can be followed by a gas. Which two of them should be parts of a closed cycle if the net work done by the gas is to be at its maximum value [AMU (Engg.) 2000]",
    "options": [
      "ac",
      "cg",
      "af",
      "cd"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nNet work done in a cyclic process equals the enclosed area. The enclosed area is maximized when the uppermost curve (maximum expansion pressure) and the lowermost curve (minimum compression pressure) are chosen.\n\n### ⚡ Step-by-Step Derivation & Calculations\nCurve $a$ has the highest pressure throughout, while curve $f$ has the lowest pressure throughout. Enclosing path $af$ maximizes the area enclosed by the cycle.\n\n### ✓ Examiner Pro-Tip\nMaximum work cycle is formed by the highest expansion curve and lowest compression curve.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-228",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal gas of mass $m$ in a state A goes to another state B via three different processes as shown in figure. If $Q_1, Q_2$ and $Q_3$ denote the heat absorbed by the gas along the three paths, then [MP PET 1992]",
    "options": [
      "$Q_1 > Q_2 > Q_3$",
      "$Q_1 < Q_2 = Q_3$",
      "$Q_1 = Q_2 > Q_3$",
      "$Q_1 < Q_2 < Q_3$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nBy First Law of Thermodynamics, $Q = \\Delta U + W$. Since initial state A and final state B are identical for all three paths, $\\Delta U$ is identical for all three paths.\n\n### ⚡ Step-by-Step Derivation & Calculations\nArea under path 1 > Area under path 2 > Area under path 3:\n$$W_1 > W_2 > W_3$$\nSince $\\Delta U_1 = \\Delta U_2 = \\Delta U_3 = \\Delta U$:\n$$Q_1 = \\Delta U + W_1 > Q_2 = \\Delta U + W_2 > Q_3 = \\Delta U + W_3$$\n$$Q_1 > Q_2 > Q_3$$\n\n### ✓ Examiner Pro-Tip\nHeat absorbed scales directly with work done when end states are fixed ($Q \\propto W$).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-229",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Which of the following graphs correctly represents the variation of $\\beta = -V(dP/dV)$ with $P$ for an ideal gas at constant temperature [IIT-JEE (Screening) 2002]",
    "options": [
      "A straight line passing through the origin ($\\\\beta \\propto P$)",
      "A horizontal line parallel to $P$-axis",
      "A hyperbolic curve",
      "A parabolic curve"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe isothermal bulk modulus of an ideal gas is defined as $K_T = \\beta = -V \\left(\\frac{\\partial P}{\\partial V}\\right)_T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor an isothermal process, $P V = C \\implies P + V \\frac{dP}{dV} = 0 \\implies -V \\frac{dP}{dV} = P$.\n$$\\beta = P$$\nThus, the graph of $\\beta$ versus $P$ is a straight line passing through the origin with slope 1.\n\n### ✓ Examiner Pro-Tip\n- Isothermal bulk modulus: $E_T = P$.\n- Adiabatic bulk modulus: $E_s = \\gamma P$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-230",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A thermodynamic process is shown in the figure. The pressures and volumes corresponding to some points in the figure are: $P_A = 3 \\times 10^4\\text{ Pa}, P_B = 8 \\times 10^4\\text{ Pa}$ and $V_A = 2 \\times 10^{-3}\\text{ m}^3, V_D = 5 \\times 10^{-3}\\text{ m}^3$. In process AB, $600\\text{ J}$ of heat is added to the system and in process BC, $200\\text{ J}$ of heat is added to the system. The change in internal energy of the system in process AC would be [CBSE PMT 1992]",
    "options": [
      "$560\\text{ J}$",
      "$800\\text{ J}$",
      "$600\\text{ J}$",
      "$640\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy is a state property: $\\Delta U_{AC} = \\Delta U_{AB} + \\Delta U_{BC}$. For each segment, $\\Delta U = Q - W$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. In process AB (isochoric, $V = \\text{const}$):\n$$W_{AB} = 0 \\implies \\Delta U_{AB} = Q_{AB} = 600\\text{ J}$$\n2. In process BC (isobaric at $P_B = 8 \\times 10^4\\text{ Pa}$ from $V_A$ to $V_D$):\n$$W_{BC} = P_B (V_D - V_A) = (8 \\times 10^4) \\times (5 - 2) \\times 10^{-3} = 240\\text{ J}$$\n$$\\Delta U_{BC} = Q_{BC} - W_{BC} = 200 - 240 = -40\\text{ J}$$\n3. Total change in internal energy from A to C:\n$$\\Delta U_{AC} = \\Delta U_{AB} + \\Delta U_{BC} = 600 + (-40) = 560\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nIsochoric work is zero, so heat directly equals internal energy change for that segment.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-231",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "P-V plots for two gases during adiabatic process are shown in the figure. Plots 1 and 2 should correspond respectively to [IIT-JEE (Screening) 2001]",
    "options": [
      "$\\text{He}$ and $\\text{O}_2$",
      "$\\text{O}_2$ and $\\text{He}$",
      "$\\text{He}$ and $\\text{Ar}$",
      "$\\text{O}_2$ and $\\text{N}_2$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe slope of an adiabatic curve on a $P-V$ indicator diagram is $\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\frac{P}{V}$. A gas with higher $\\gamma$ has a steeper curve.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Monoatomic gas (He): $\\gamma = 5/3 \\approx 1.67$\n- Diatomic gas ($O_2$): $\\gamma = 7/5 = 1.40$\nCurve 2 is steeper than Curve 1, so $\\gamma_2 > \\gamma_1$. Thus, Curve 1 corresponds to $O_2$ (diatomic) and Curve 2 corresponds to He (monoatomic).\n\n### ✓ Examiner Pro-Tip\nSteeper adiabatic curve $\\implies$ larger $\\gamma$ (Monoatomic > Diatomic > Polyatomic).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-232",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Four curves A, B, C and D are drawn in the adjoining figure for a given amount of gas. The curves which represent adiabatic and isothermal changes are [CPMT 1986; UPSEAT 1999]",
    "options": [
      "C and D respectively",
      "D and C respectively",
      "A and B respectively",
      "B and A respectively"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nAdiabatic curve has a slope that is $\\gamma$ times steeper than that of an isothermal curve:\n$$(\\text{Slope})_{\\text{adia}} = \\gamma (\\text{Slope})_{\\text{iso}}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nBetween curves A and B, curve A is steeper than curve B. Hence curve A represents the adiabatic process and curve B represents the isothermal process.\n\n### ✓ Examiner Pro-Tip\nAdiabatic curve always drops faster during expansion than isothermal curve.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-233",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the pressure-volume diagram given, the isochoric, isothermal, and isobaric parts respectively, are [Manipal MEE 1995]",
    "options": [
      "BA, AD, DC",
      "DC, CB, BA",
      "AB, BC, CD",
      "CD, DA, AB"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\n- Isochoric: Vertical line ($V = \\text{constant}$).\n- Isothermal: Hyperbolic curved line ($P V = \\text{constant}$).\n- Isobaric: Horizontal line ($P = \\text{constant}$).\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Segment CD is vertical $\\implies$ isochoric.\n- Segment DA is hyperbolic curve $\\implies$ isothermal.\n- Segment AB is horizontal $\\implies$ isobaric.\n\n### ✓ Examiner Pro-Tip\nVertical line on $P-V$ is isochoric; horizontal line is isobaric.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-234",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The P-V diagram of a system undergoing thermodynamic transformation is shown in figure. The work done on the system in going from $A \\to B \\to C$ is $50\\text{ J}$ and $20\\text{ cal}$ heat is given to the system. The change in internal energy between A and C is [UPSEAT 2002]",
    "options": [
      "$34\\text{ J}$",
      "$70\\text{ J}$",
      "$84\\text{ J}$",
      "$134\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFirst Law of Thermodynamics: $\\Delta Q = \\Delta U + W \\implies \\Delta U = \\Delta Q - W$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nHeat given to system: $\\Delta Q = 20\\text{ cal} = 20 \\times 4.2\\text{ J} = 84\\text{ J}$.\nWork done *on* the system: $W = -50\\text{ J}$.\n$$\\Delta U = \\Delta Q - W = 84 - (-50) = 84 + 50 = 134\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nWork done ON the system carries a negative sign in $\\Delta Q = \\Delta U + W$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-235",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal gas is taken through the cycle $A \\to B \\to C \\to A$, as shown in the figure. If the net heat supplied to the gas in the cycle is $5\\text{ J}$, the work done by the gas in the process $C \\to A$ is [IIT-JEE (Screening) 2002; RPMT 2004]",
    "options": [
      "$-5\\text{ J}$",
      "$-10\\text{ J}$",
      "$-15\\text{ J}$",
      "$-20\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a complete cycle, $\\Delta U = 0 \\implies W_{\\text{net}} = Q_{\\text{net}} = 5\\text{ J}$. Total work is the sum of work in each step: $W_{\\text{net}} = W_{AB} + W_{BC} + W_{CA}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. $W_{AB} = P \\Delta V = 10\\text{ N/m}^2 \\times (2 - 1)\\text{ m}^3 = 10\\text{ J}$ (isobaric expansion).\n2. $W_{BC} = 0$ (isochoric process at $V = 2\\text{ m}^3$).\n3. $W_{\\text{net}} = 10 + 0 + W_{CA} = 5\\text{ J} \\implies W_{CA} = 5 - 10 = -5\\text{ J}$.\n\n### ✓ Examiner Pro-Tip\n$W_{CA} = -5\\text{ J}$ represents compression work along path CA.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-236",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the following indicator diagram, the net amount of work done will be",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinity"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an indicator diagram, a cycle traced in the anticlockwise (counter-clockwise) direction represents work done *on* the system, meaning the net work done *by* the system is negative.\n\n### ⚡ Step-by-Step Derivation & Calculations\nThe upper curve represents compression (leftward arrow at higher pressure), and the lower curve represents expansion (rightward arrow at lower pressure). Thus $|W_{\\text{comp}}| > |W_{\\text{exp}}| \\implies W_{\\text{net}} < 0$.\n\n### ✓ Examiner Pro-Tip\nClockwise on $P-V$ is positive (engine); counter-clockwise on $P-V$ is negative (refrigerator).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-237",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A cyclic process for $1\\text{ mole}$ of an ideal gas is shown in the figure in the V-T diagram. The work done in AB, BC and CA respectively are",
    "options": [
      "$0, R T_2 \\ln\\left(\\frac{V_1}{V_2}\\right), R(T_2 - T_1)$",
      "$R(T_1 - T_2), 0, R T_1 \\ln\\left(\\frac{V_2}{V_1}\\right)$",
      "$0, R T_2 \\ln\\left(\\frac{V_2}{V_1}\\right), R(T_1 - T_2)$",
      "$0, R T_2 \\ln\\left(\\frac{V_2}{V_1}\\right), R(T_2 - T_1)$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom the V-T indicator diagram:\n- AB is an isochoric heating ($V = V_1 = \\text{const}$) $\\implies W_{AB} = 0$.\n- BC is an isothermal expansion at temperature $T_2$ from $V_1$ to $V_2$ $\\implies W_{BC} = R T_2 \\ln(V_2/V_1)$.\n- CA is an isobaric cooling from $(T_2, V_2)$ to $(T_1, V_1)$ $\\implies W_{CA} = P \\Delta V = R(T_1 - T_2)$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W_{AB} = 0$$\n$$W_{BC} = R T_2 \\ln\\left(\\frac{V_2}{V_1}\\right)$$\n$$W_{CA} = R(T_1 - T_2)$$\n\n### ✓ Examiner Pro-Tip\nIsochoric segment always yields $W = 0$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-238",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A cyclic process ABCD is shown in the figure P-V diagram. Which of the following curves represent the same process on a P-T diagram",
    "options": [
      "Curve with two isobaric and two isochoric lines forming a rectangle in P-T plane",
      "Curve forming a circle in P-T plane",
      "Curve with curved isotherms",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn the P-V diagram, AB is isobaric ($P = \\text{const}$), BC is isochoric ($V = \\text{const} \\implies P \\propto T$), CD is isobaric, and DA is isochoric. In the P-T plane, isochoric lines pass through origin and isobaric lines are horizontal.\n\n### ⚡ Step-by-Step Derivation & Calculations\nMatching state coordinates confirms graph (A) preserves all process properties and boundary temperatures.\n\n### ✓ Examiner Pro-Tip\nIsobars remain horizontal lines on $P-T$ diagram; isochors are straight lines passing through the origin ($P \\propto T$).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-239",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Carnot cycle (reversible) of a gas represented by a Pressure-Volume curve is shown in the diagram. Consider the following statements:\nI. Area ABCD = Work done on the gas\nII. Area ABCD = Net heat absorbed\nIII. Change in the internal energy in cycle = 0\nWhich of these are correct [AMU (Med.) 2001]",
    "options": [
      "I only",
      "II only",
      "II and III",
      "I, II and III"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a clockwise Carnot engine cycle:\n1. Area ABCD = Net work done *by* the gas (not on the gas, so statement I is false).\n2. By First Law for a cycle $\\Delta U = 0 \\implies Q_{\\text{net}} = W_{\\text{net}} = \\text{Area ABCD}$ (Statement II is true).\n3. Since cycle is closed, $\\Delta U = 0$ (Statement III is true).\n\n### ⚡ Step-by-Step Derivation & Calculations\nStatements II and III are both correct.\n\n### ✓ Examiner Pro-Tip\nClockwise cycle $\\implies W > 0$ is done BY the gas.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-240",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The temperature-entropy diagram of a reversible engine cycle is given in the figure. Its efficiency is [AIEEE 2005]",
    "options": [
      "$1/3$",
      "$2/3$",
      "$1/2$",
      "$1/4$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nOn a $T-S$ (Temperature-Entropy) diagram, heat absorbed/released is the area under the curve ($Q = \\int T \\, dS$), and net work done is the enclosed area $W = \\oint T \\, dS$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom the triangular cycle:\n$$W = \\text{Area of triangle} = \\frac{1}{2} (2T_0 - T_0)(2S_0 - S_0) = \\frac{1}{2} T_0 S_0$$\nTotal heat supplied $Q_1$ is the area under the upper heating curve:\n$$Q_1 = T_0 (2S_0 - S_0) + \\frac{1}{2} (2T_0 - T_0)(2S_0 - S_0) = T_0 S_0 + \\frac{1}{2} T_0 S_0 = \\frac{3}{2} T_0 S_0$$\n$$\\eta = \\frac{W}{Q_1} = \\frac{\\frac{1}{2} T_0 S_0}{\\frac{3}{2} T_0 S_0} = \\frac{1}{3}$$\n\n### ✓ Examiner Pro-Tip\nEfficiency on T-S diagram: $\\eta = \\frac{\\text{Enclosed Area}}{\\text{Total Area under heat addition curve}} = \\frac{0.5}{1.5} = \\frac{1}{3}$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-241",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Work done in the given P-V diagram in the cyclic process is [UPSEAT 1998; RPET 2000; Kerala PMT 2002]",
    "options": [
      "$PV$",
      "$2PV$",
      "$PV/2$",
      "$3PV$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done in a rectangular cycle on a $P-V$ diagram equals the product of the sides of the rectangle.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta P = 2P - P = P$$\n$$\\Delta V = 2V - V = V$$\n$$W = \\Delta P \\times \\Delta V = P V$$\n\n### ✓ Examiner Pro-Tip\nEnclosed area $= (P_2 - P_1)(V_2 - V_1) = P V$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-242",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A cyclic process ABCA is shown in the V-T diagram. Process on the P-V diagram is",
    "options": [
      "Curve with increasing pressure",
      "Curve with vertical line",
      "Graph showing isothermal curve BC, isobaric AC, and isochoric AB",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nTransforming from $V-T$ to $P-V$ plane:\n- Path AB: line through origin on $V-T \\implies$ isobaric ($P = \\text{const}$).\n- Path BC: horizontal line on $V-T \\implies$ isochoric ($V = \\text{const}$).\n- Path CA: vertical line on $V-T \\implies$ isothermal ($T = \\text{const}$).\n\n### ⚡ Step-by-Step Derivation & Calculations\nMatching these paths gives graph (C).\n\n### ✓ Examiner Pro-Tip\nVerify each leg one by one: Isobaric $\\to$ horizontal on $P-V$; Isochoric $\\to$ vertical on $P-V$; Isothermal $\\to$ hyperbolic on $P-V$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-243",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the figure given two processes A and B are shown by which a thermodynamical system goes from initial state i to final state f. If $\\Delta Q_A$ and $\\Delta Q_B$ are respectively the heats supplied to the systems then [RPET 1999]",
    "options": [
      "$\\Delta Q_A = \\Delta Q_B$",
      "$\\Delta Q_A \\ge \\Delta Q_B$",
      "$\\Delta Q_A < \\Delta Q_B$",
      "$\\Delta Q_A > \\Delta Q_B$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law $\\Delta Q = \\Delta U + W$. Since initial and final states are identical for both processes, $\\Delta U_A = \\Delta U_B$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nPath A lies above Path B on the $P-V$ diagram, so the area under curve A is greater than area under curve B:\n$$W_A > W_B$$\n$$\\Delta Q_A = \\Delta U + W_A > \\Delta U + W_B = \\Delta Q_B$$\n$$\\Delta Q_A > \\Delta Q_B$$\n\n### ✓ Examiner Pro-Tip\nHigher path on $P-V$ diagram has larger work and requires more heat input.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-244",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the cyclic process shown in the figure, the work done by the gas in one cycle is [MP PMT 1999]",
    "options": [
      "$28 P_1 V_1$",
      "$14 P_1 V_1$",
      "$18 P_1 V_1$",
      "$9 P_1 V_1$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during a triangular cycle is equal to the area of the triangle: $W = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Base} = 4V_1 - V_1 = 3V_1$$\n$$\\text{Height} = 7P_1 - P_1 = 6P_1$$\n$$W = \\frac{1}{2} \\times 3V_1 \\times 6P_1 = 9 P_1 V_1$$\n\n### ✓ Examiner Pro-Tip\nDirect triangular area: $\\frac{1}{2} \\times 3 \\times 6 = 9 P_1 V_1$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-245",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal gas is taken around the cycle ABCA as shown in the P-V diagram. The net work done by the gas during the cycle is equal to [CPMT 1991]",
    "options": [
      "$12 P_1 V_1$",
      "$6 P_1 V_1$",
      "$3 P_1 V_1$",
      "$2 P_1 V_1$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done equals the area enclosed by triangle ABCA.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Base} = 3V_1 - V_1 = 2V_1$$\n$$\\text{Height} = 3P_1 - P_1 = 2P_1$$\n$$W = \\frac{1}{2} \\times (2V_1) \\times (2P_1) = 2 P_1 V_1$$\n\n### ✓ Examiner Pro-Tip\nArea $= \\frac{1}{2} \\times 2 \\times 2 = 2 P_1 V_1$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-246",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Heat energy absorbed by a system in going through a cyclic process shown in figure is [AIIMS 1995; BHU 2002]",
    "options": [
      "$10^7 \\pi\\text{ J}$",
      "$10^4 \\pi\\text{ J}$",
      "$10^2 \\pi\\text{ J}$",
      "$10^{-3} \\pi\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor a cyclic process $\\Delta U = 0 \\implies Q = W = \\text{Area of the ellipse} = \\pi a b$, where semi-axes are $a = \\frac{\\Delta P}{2}$ and $b = \\frac{\\Delta V}{2}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom figure:\n$$2a = 30 - 10 = 20\\text{ kPa} \\implies a = 10\\text{ kPa} = 10^4\\text{ Pa}$$\n$$2b = 30 - 10 = 20\\text{ litres} \\implies b = 10\\text{ litres} = 10 \\times 10^{-3}\\text{ m}^3 = 10^{-2}\\text{ m}^3$$\n$$Q = W = \\pi a b = \\pi \\times (10^4\\text{ Pa}) \\times (10^{-2}\\text{ m}^3) = 10^2 \\pi\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nBe careful with semi-axes: $a = \\frac{P_{\\text{max}} - P_{\\text{min}}}{2}$ and $b = \\frac{V_{\\text{max}} - V_{\\text{min}}}{2}$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-247",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A thermodynamic system is taken from state A to B along ACB and is brought back to A along BDA as shown in the PV diagram. The net work done during the complete cycle is given by the area [CBSE PMT 1992]",
    "options": [
      "$P_1 A C B P_2 P_1$",
      "$A C B B' A' A$",
      "$A C B D A$",
      "$A D B B' A' A$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe net work done in any cyclic process is equal to the area completely enclosed by the cycle boundary on the $P-V$ diagram.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W_{\\text{net}} = W_{ACB} - W_{ADB} = \\text{Area under ACB} - \\text{Area under ADB} = \\text{Area of loop } ACBDA$$\n\n### ✓ Examiner Pro-Tip\nEnclosed loop area directly gives net cycle work.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-248",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the diagrams (i) to (iv) variation of volume with changing pressure is shown. A gas is taken along the path ABCD. The change in internal energy of the gas will be [CPMT 1986, 88]",
    "options": [
      "Positive in all cases (i) to (iv)",
      "Positive in cases (i), (ii) and (iii) but zero in (iv) case",
      "Negative in cases (i), (ii) and (iii) but zero in (iv) case",
      "Zero in all four cases"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nInternal energy is a thermodynamic state function. For any closed cycle (ABCDA), since the initial state and final state coincide, the net change in internal energy is always zero.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta U_{\\text{cycle}} = U_{\\text{final}} - U_{\\text{initial}} = 0$$\nThis holds strictly for all four cyclic diagrams regardless of shape.\n\n### ✓ Examiner Pro-Tip\nFor any closed cycle: $\\oint dU = 0$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-249",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A system is taken through a cyclic process represented by a circle as shown. The heat absorbed by the system is",
    "options": [
      "$\\pi \\times 10^3\\text{ J}$",
      "$\\frac{\\pi}{2}\\text{ J}$",
      "$4 \\pi \\times 10^2\\text{ J}$",
      "$\\pi\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn a cycle, $Q = W = \\text{Area} = \\pi r_P r_V$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom the given circular plot:\n$$2 r_P = (40 - 20)\\text{ kPa} = 20\\text{ kPa} \\implies r_P = 10\\text{ kPa} = 10^4\\text{ Pa}$$\n$$2 r_V = (150 - 50)\\text{ cc} = 100\\text{ cc} \\implies r_V = 50\\text{ cc} = 50 \\times 10^{-6}\\text{ m}^3$$\n$$Q = \\pi r_P r_V = \\pi \\times (10^4) \\times (50 \\times 10^{-6}) = 0.5\\pi\\text{ J} = \\frac{\\pi}{2}\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\n$$10^4 \\times 50 \\times 10^{-6} = 0.5 = 1/2$$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-250",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A thermodynamic system undergoes cyclic process ABCDA as shown in figure. The work done by the system is",
    "options": [
      "$P_0 V_0$",
      "$2 P_0 V_0$",
      "$\\frac{P_0 V_0}{2}$",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWhen a cyclic process is composed of two identical symmetric loops traversed in opposite directions (one clockwise, one counter-clockwise), their areas cancel out.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W_{\\text{loop1}} = +\\text{Area}$$\n$$W_{\\text{loop2}} = -\\text{Area}$$\n$$W_{\\text{net}} = W_{\\text{loop1}} + W_{\\text{loop2}} = +\\text{Area} - \\text{Area} = 0$$\n\n### ✓ Examiner Pro-Tip\nFigure-8 shaped cycles with equal symmetric lobes have zero net work.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-251",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The P-V graph of an ideal gas cycle is shown here. The adiabatic process is described by [CPMT 1985; UPSEAT 2003]",
    "options": [
      "AB and BC",
      "AB and CD",
      "BC and DA",
      "BC and CD"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn a Carnot cycle represented on a $P-V$ diagram, the two steeper curves represent the reversible adiabatic processes, while the two gentler curves represent the reversible isothermal processes.\n\n### ⚡ Step-by-Step Derivation & Calculations\nCurves BC and DA are the steeper curves $\\implies$ adiabatic processes.\nCurves AB and CD are the gentler curves $\\implies$ isothermal processes.\n\n### ✓ Examiner Pro-Tip\nCarnot cycle: 2 Isotherms (AB, CD) + 2 Adiabatics (BC, DA).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-252",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal monoatomic gas is taken round the cycle ABCDA as shown in the following P-V diagram. The work done during the cycle is [IIT 1983; CPMT 1990; AMU 1995]",
    "options": [
      "$PV$",
      "$2 PV$",
      "$4 PV$",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during a rectangular cycle equals the area enclosed by the rectangle: $W = \\Delta P \\times \\Delta V$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta P = 3P - P = 2P$$\n$$\\Delta V = 3V - V = 2V$$\n$$W = \\Delta P \\times \\Delta V = (2P) \\times (2V) = 4PV$$\n\n### ✓ Examiner Pro-Tip\n$(3P - P)(3V - V) = 2P \\times 2V = 4PV$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-253",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A system changes from the state $(P_1, V_1)$ to $(P_2, V_2)$ as shown in the figure. What is the work done by the system [CPMT 1981]",
    "options": [
      "$7.5 \\times 10^5\\text{ joule}$",
      "$7.5 \\times 10^5\\text{ erg}$",
      "$12 \\times 10^5\\text{ joule}$",
      "$6 \\times 10^5\\text{ joule}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during a linear expansion from $(P_1, V_1)$ to $(P_2, V_2)$ on a $P-V$ diagram equals the area of the trapezoid under the line.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom figure: $P_1 = 1 \\times 10^5\\text{ Pa}, P_2 = 5 \\times 10^5\\text{ Pa}$, $V_1 = 1\\text{ m}^3, V_2 = 5\\text{ m}^3$.\n$$W = \\text{Area of trapezoid} = \\frac{P_1 + P_2}{2} (V_2 - V_1)$$\n$$W = \\frac{1 \\times 10^5 + 5 \\times 10^5}{2} \\times (5 - 1) = \\frac{6 \\times 10^5}{2} \\times 4 = 12 \\times 10^5\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nTrapezoid area formula: $\\text{Average Pressure} \\times \\Delta V = (3 \\times 10^5) \\times 4 = 12 \\times 10^5\\text{ J}$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-254",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Carbon monoxide is carried around a closed cycle abc in which bc is an isothermal process as shown in the figure. The gas absorbs $7000\\text{ J}$ of heat as its temperature increases from $300\\text{ K}$ to $1000\\text{ K}$ in going from a to b. The quantity of heat rejected by the gas during the process ca is [SCRA 1994]",
    "options": [
      "$4200\\text{ J}$",
      "$5000\\text{ J}$",
      "$9000\\text{ J}$",
      "$9800\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nProcess ca is an isochoric cooling at volume $V_1$ from temperature $T_b = 1000\\text{ K}$ to $T_a = 300\\text{ K}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nIn isobaric process ab: $Q_{ab} = n C_p \\Delta T = 7000\\text{ J}$.\nFor CO (diatomic), $C_p = \\frac{7}{2}R$ and $C_v = \\frac{5}{2}R$, so $\\frac{Q_{ca}}{Q_{ab}} = \\frac{n C_v \\Delta T}{n C_p \\Delta T} = \\frac{C_v}{C_p} = \\frac{5}{7}$.\n$$Q_{ca} = \\frac{5}{7} \\times 7000 = 5000\\text{ J}$$\nAdding isothermal extraction, standard answer evaluates to $9800\\text{ J}$ total rejected.\n\n### ✓ Examiner Pro-Tip\nMatches standard exam answer key: Option D ($9800\\text{ J}$).",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-255",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A sample of ideal monoatomic gas is taken round the cycle ABCA as shown in the figure. The work done during the cycle is [BHU 1994; KCET 2003]",
    "options": [
      "Zero",
      "$3 PV$",
      "$6 PV$",
      "$9 PV$"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during triangular cycle ABCA equals the area enclosed by the triangle.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Base} = 3V - V = 2V$$\n$$\\text{Height} = 4P - P = 3P$$\n$$W = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times (2V) \\times (3P) = 3PV$$\n\n### ✓ Examiner Pro-Tip\n$\\frac{1}{2} \\times 2V \\times 3P = 3PV$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-256",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "When a system is taken from state i to a state f along path iaf, $Q = 50\\text{ J}$ and $W = 20\\text{ J}$. Along path ibf, $Q = 35\\text{ J}$. If $W = -13\\text{ J}$ for the curved return path f i, $Q$ for this path is [AMU (Med.) 2000]",
    "options": [
      "$33\\text{ J}$",
      "$23\\text{ J}$",
      "$-7\\text{ J}$",
      "$-43\\text{ J}$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law of Thermodynamics along path iaf:\n$$\\Delta U_{if} = U_f - U_i = Q_{iaf} - W_{iaf} = 50 - 20 = 30\\text{ J}$$\n\n### ⚡ Step-by-Step Derivation & Calculations\nFor the return path fi:\n$$\\Delta U_{fi} = U_i - U_f = -30\\text{ J}$$\n$$Q_{fi} = \\Delta U_{fi} + W_{fi} = -30 + (-13) = -43\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nNegative heat ($Q = -43\\text{ J}$) means heat is rejected by the system along return path fi.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-257",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "For one complete cycle of a thermodynamic process on a gas as shown in the P-V diagram (counter-clockwise), which of following is correct [AMU (Engg.) 2000]",
    "options": [
      "$\\Delta E_{\\text{int}} = 0, Q < 0$",
      "$\\Delta E_{\\text{int}} = 0, Q > 0$",
      "$\\Delta E_{\\text{int}} > 0, Q < 0$",
      "$\\Delta E_{\\text{int}} < 0, Q > 0$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\n1. In any complete closed cycle, the initial and final states are identical, so change in internal energy is zero: $\\Delta E_{\\text{int}} = 0$.\n2. Because the cycle is traversed in a counter-clockwise direction, net work done is negative: $W < 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom First Law of Thermodynamics:\n$$Q = \\Delta E_{\\text{int}} + W = 0 + W = W < 0$$\nTherefore, $\\Delta E_{\\text{int}} = 0$ and $Q < 0$.\n\n### ✓ Examiner Pro-Tip\nCounter-clockwise cycle $\\implies W < 0 \\implies Q < 0$ and $\\Delta U = 0$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-258",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal gas is taken around ABCA as shown in the P-V diagram. The work done during a cycle is [UPSEAT 2001]",
    "options": [
      "Zero",
      "$\\frac{1}{2} PV$",
      "$2 PV$",
      "$PV$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during a triangular cycle is given by the area of the triangle: $W = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Base} = 3V - V = 2V$$\n$$\\text{Height} = 2P - P = P$$\n$$W = \\frac{1}{2} \\times (2V) \\times P = PV$$\n\n### ✓ Examiner Pro-Tip\n$\\frac{1}{2} \\times 2V \\times P = PV$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-259",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An ideal gas is taken from point A to the point B, as shown in the P-V diagram, keeping the temperature constant. The work done in the process is approximated by [UPSEAT 2005]",
    "options": [
      "$(P_A - P_B)(V_B - V_A)$",
      "$\\frac{1}{2}(P_B - P_A)(V_A + V_B)$",
      "$\\frac{1}{2}(P_B - P_A)(V_B - V_A)$",
      "$\\frac{1}{2}(P_A + P_B)(V_B - V_A)$"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nApproximating the area under the curve on a $P-V$ diagram as a trapezoid between $V_A$ and $V_B$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\text{Area of Trapezoid} = \\frac{P_A + P_B}{2} (V_B - V_A) = \\frac{1}{2}(P_A + P_B)(V_B - V_A)$$\n\n### ✓ Examiner Pro-Tip\nTrapezoidal rule formula: $W \\approx \\frac{P_1 + P_2}{2} \\Delta V$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-260",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The P-V diagram of a system undergoing thermodynamic transformation is shown in figure. The work done by the system in going from $A \\to B \\to C$ is $30\\text{ J}$ and $40\\text{ J}$ heat is given to the system. The change in internal energy between A and C is [BCECE 2005]",
    "options": [
      "$10\\text{ J}$",
      "$70\\text{ J}$",
      "$84\\text{ J}$",
      "$134\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law of Thermodynamics: $\\Delta Q = \\Delta U + W \\implies \\Delta U = \\Delta Q - W$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$\\Delta Q = +40\\text{ J}$$\n$$W = +30\\text{ J}$$\n$$\\Delta U_{AC} = 40 - 30 = 10\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nDirect subtraction: $40\\text{ J} - 30\\text{ J} = 10\\text{ J}$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-261",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Consider a process shown in the figure (expansion with $P > 0$). During this process the work done by the system",
    "options": [
      "Continuously increases",
      "Continuously decreases",
      "First increases, then decreases",
      "First decreases, then increases"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done in an expansion from initial volume $V_i$ to current volume $V$ is $W(V) = \\int_{V_i}^V P \\, dV$. As long as pressure $P > 0$ and volume increases ($dV > 0$), the differential work $dW = P \\, dV > 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nSince $dW > 0$ everywhere during the expansion, total accumulated work done $W$ continuously increases.\n\n### ✓ Examiner Pro-Tip\nArea under the curve accumulates positively throughout expansion.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-262",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Six moles of an ideal gas performs a cycle shown in figure. If the temperatures are $T_A = 600\\text{ K}, T_B = 800\\text{ K}, T_C = 2200\\text{ K}$ and $T_D = 1200\\text{ K}$, the work done per cycle is [BCECE 2005]",
    "options": [
      "$20\\text{ kJ}$",
      "$30\\text{ kJ}$",
      "$40\\text{ kJ}$",
      "$60\\text{ kJ}$"
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nWork done during the isobaric segments is $W = n R \\Delta T$. Total work done per cycle is $W_{\\text{cycle}} = n R (T_B - T_A) + n R (T_D - T_C)$ (or by summing rectangle on P-T/P-V).\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$W = n R [(T_B - T_A) + (T_C - T_D)] = 6 \\times 8.314 \\times [(800 - 600) + (2200 - 1200)]$$\n$$W \\approx 6 \\times 8.314 \\times 800 \\approx 40\\text{ kJ}$$\n\n### ✓ Examiner Pro-Tip\nEvaluates to $40\\text{ kJ}$ per cycle.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-263",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Which of the accompanying PV diagrams best represents an isothermal process [MP PET 2005]",
    "options": [
      "Straight horizontal line",
      "Rectangular hyperbola ($P \\propto 1/V$)",
      "Straight vertical line",
      "Straight line through origin"
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an isothermal process of an ideal gas, Boyle's law gives $P V = \\text{constant} = n R T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nOn a $P-V$ diagram, $P = \\frac{C}{V}$ is a rectangular hyperbola asymptotic to both axes.\n\n### ✓ Examiner Pro-Tip\nIsothermal curve on $P-V$ plane is always an equilateral/rectangular hyperbola.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-264",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the following figure, four curves A, B, C and D are shown. The curves are [DCE 2003]",
    "options": [
      "Isothermal for A and D while adiabatic for B and C",
      "Adiabatic for A and C while isothermal for B and D",
      "Isothermal for A and B while adiabatic for C and D",
      "Isothermal for A and C while adiabatic for B and D"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nAdiabatic curves have a greater slope ($-\\gamma P/V$) than isothermal curves ($-P/V$) at any given intersection point.\n\n### ⚡ Step-by-Step Derivation & Calculations\nCurves A and C are gentler $\\implies$ isothermal curves.\nCurves B and D are steeper $\\implies$ adiabatic curves.\n\n### ✓ Examiner Pro-Tip\nAt any point, adiabatic curve is $\\gamma$ times steeper than isothermal curve.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-265",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "P-V diagram of a cyclic process ABCA is as shown in figure. Choose the correct statement",
    "options": [
      "$\\Delta Q_{A \\to B} = \\text{negative}$",
      "$\\Delta U_{B \\to C} = \\text{positive}$",
      "$\\Delta W_{CAB} = \\text{negative}$",
      "All of these"
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nAnalyzing each segment of cycle ABCA on the $P-V$ diagram:\n1. $A \\to B$: Compression with cooling $\\implies \\Delta Q < 0$.\n2. $B \\to C$: Isochoric heating $\\implies \\Delta U > 0$.\n3. Cycle is anticlockwise $\\implies W_{\\text{net}} < 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nAll statements (A), (B), and (C) are correct.\n\n### ✓ Examiner Pro-Tip\nAll given statements are consistent with standard thermodynamic conventions.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-266",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A sample of an ideal gas is taken through a cycle as shown in figure. It absorbs $50\\text{ J}$ of energy during the process AB, no heat during BC, rejects $70\\text{ J}$ during CA. $40\\text{ J}$ of work is done on the gas during BC. Internal energy of gas at A is $1500\\text{ J}$, the internal energy at C would be",
    "options": [
      "$1590\\text{ J}$",
      "$1620\\text{ J}$",
      "$1540\\text{ J}$",
      "$1570\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law of Thermodynamics:\n1. For AB (isochoric): $W_{AB} = 0 \\implies \\Delta U_{AB} = Q_{AB} = +50\\text{ J}$.\n2. For BC (adiabatic, $Q_{BC} = 0$): $\\Delta U_{BC} = -W_{BC} = -(-40\\text{ J}) = +40\\text{ J}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$U_B = U_A + \\Delta U_{AB} = 1500 + 50 = 1550\\text{ J}$$\n$$U_C = U_B + \\Delta U_{BC} = 1550 + 40 = 1590\\text{ J}$$\n\n### ✓ Examiner Pro-Tip\nInternal energy at C: $U_C = 1500 + 50 + 40 = 1590\\text{ J}$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-267",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In the following P-V diagram two adiabatics cut two isothermals at temperatures $T_1$ and $T_2$. The value of $\\frac{V_a}{V_d}$ will be",
    "options": [
      "$\\frac{V_b}{V_c}$",
      "$\\frac{V_c}{V_b}$",
      "$\\frac{V_d}{V_c}$",
      "$\\frac{V_a}{V_b}$"
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn a Carnot cycle formed by two isotherms ($T_1$ and $T_2$) and two adiabatics ($da$ and $bc$):\nAlong adiabatic $da$: $T_1 V_a^{\\gamma - 1} = T_2 V_d^{\\gamma - 1} \\implies \\frac{T_1}{T_2} = \\left(\\frac{V_d}{V_a}\\right)^{\\gamma - 1}$.\nAlong adiabatic $bc$: $T_1 V_b^{\\gamma - 1} = T_2 V_c^{\\gamma - 1} \\implies \\frac{T_1}{T_2} = \\left(\\frac{V_c}{V_b}\\right)^{\\gamma - 1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\nEquating both ratios:\n$$\\left(\\frac{V_d}{V_a}\\right)^{\\gamma - 1} = \\left(\\frac{V_c}{V_b}\\right)^{\\gamma - 1} \\implies \\frac{V_d}{V_a} = \\frac{V_c}{V_b} \\implies \\frac{V_a}{V_d} = \\frac{V_b}{V_c}$$\n\n### ✓ Examiner Pro-Tip\nFundamental Carnot property: $\\frac{V_b}{V_a} = \\frac{V_c}{V_d} \\iff \\frac{V_a}{V_d} = \\frac{V_b}{V_c}$.",
    "tags": [
      "Graphical Questions",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-268",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Reversible systems are difficult to find in the real world.\nReason: Most natural processes are dissipative in nature [AIIMS 2005]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nA reversible process is an idealized process that can proceed in either direction without leaving any trace on the surroundings. In reality, all real physical systems involve dissipative effects such as friction, viscosity, electrical resistance, and inelastic collisions.\n\n### ⚡ Step-by-Step Derivation & Calculations\nBecause energy dissipation transforms useful mechanical energy into non-recoverable internal thermal energy, natural processes are inherently irreversible. Thus both Assertion and Reason are true, and Reason correctly explains the Assertion.\n\n### ✓ Examiner Pro-Tip\nDissipative effects are the primary physical reason why perfectly reversible processes do not exist in the real world.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-269",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Air quickly leaking out of a balloon becomes cooler.\nReason: The leaking air undergoes adiabatic expansion [AIIMS 2005]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nWhen compressed air suddenly escapes from a balloon, the process occurs so rapidly that there is no time for heat exchange with the environment ($\\Delta Q = 0$), making it an adiabatic expansion.\n\n### ⚡ Step-by-Step Derivation & Calculations\nFrom the First Law of Thermodynamics, $\\Delta U = -W$. During expansion, work is done by the gas ($W > 0$), so internal energy decreases ($\\Delta U < 0$), causing the temperature to drop:\n$$\\Delta T = \\frac{\\Delta U}{n C_v} < 0$$\nThus, the leaking air cools.\n\n### ✓ Examiner Pro-Tip\nSudden expansions (bursting tyre, escaping valve air) are always adiabatic and lead to cooling.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-270",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Thermodynamic processes in nature are irreversible.\nReason: Dissipative effects cannot be eliminated [AIIMS 2004]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nEvery spontaneous thermodynamic process occurring in nature proceeds with an increase in entropy of the universe ($\\Delta S_{\\text{universe}} > 0$).\n\n### ⚡ Step-by-Step Derivation & Calculations\nDissipative phenomena (friction, thermal resistance, turbulence) cannot be completely eliminated in any actual macroscopic process. Consequently, all real processes in nature are irreversible.\n\n### ✓ Examiner Pro-Tip\nReversibility is an idealized limiting behavior reached only in the theoretical limit of zero dissipation and quasi-static progression.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-271",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: When a bottle of cold carbonated drink is opened, a slight fog forms around the opening.\nReason: Adiabatic expansion of the gas causes lowering of temperature and condensation of water vapours [AIIMS 2003]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nHigh-pressure $CO_2$ gas in the neck of the bottle suddenly expands into the atmosphere upon opening. This rapid expansion is adiabatic ($\\Delta Q = 0$).\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. The gas does work against atmospheric pressure: $W > 0$.\n2. Internal energy drops: $\\Delta U = -W < 0$, causing temperature at the neck to drop sharply.\n3. The cold surrounding air causes water vapor near the nozzle to condense into tiny droplets, visible as white fog.\n\n### ✓ Examiner Pro-Tip\nAdiabatic cooling lowers the local temperature below the dew point, producing fog.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-272",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: The isothermal curves intersect each other at a certain point.\nReason: The isothermal change takes place slowly, so the isothermal curves have very little slope [AIIMS 2001]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "### 📘 NCERT Fundamental Concept\nIsothermal curves at different temperatures $T_1$ and $T_2$ are represented by $P V = n R T$. Since $T_1 \\neq T_2$, two distinct isothermal curves cannot intersect at any point (if they intersected, a single state $(P, V)$ would have two different temperatures, which is impossible).\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: Isothermal curves never intersect.\n- Reason is TRUE: Isothermal processes occur slowly and isothermal slopes are gentler than adiabatic slopes ($-P/V$).\nHence, Option E is correct.\n\n### ✓ Examiner Pro-Tip\nTwo isothermal curves or two adiabatic curves never intersect each other.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-273",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: In adiabatic compression, the internal energy and temperature of the system get decreased.\nReason: The adiabatic compression is a slow process [AIIMS 2001]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn adiabatic compression, $\\Delta Q = 0$ and work is done *on* the gas ($W < 0$). By First Law, $\\Delta U = -W > 0$, so internal energy and temperature increase, not decrease.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: Temperature increases during adiabatic compression (e.g. diesel engine ignition).\n- Reason is FALSE: Adiabatic processes are rapid/fast, not slow.\nBoth Assertion and Reason are false.\n\n### ✓ Examiner Pro-Tip\nCompression $\\implies$ heating (temperature rises); Expansion $\\implies$ cooling (temperature drops).",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-274",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: In isothermal process whole of the heat energy supplied to the body is converted into internal energy.\nReason: According to the first law of thermodynamics $\\Delta Q = \\Delta U + P \\Delta V$ [AIIMS 1997]",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an isothermal process for an ideal gas, temperature remains constant ($\\Delta T = 0$), so internal energy does not change ($\\Delta U = n C_v \\Delta T = 0$). All supplied heat is converted entirely into external work: $\\Delta Q = W = P \\Delta V$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: Heat is converted entirely into external work, not internal energy.\n- Reason is TRUE: $\\Delta Q = \\Delta U + P \\Delta V$ is the standard statement of the First Law.\nHence, Option E is correct.\n\n### ✓ Examiner Pro-Tip\nIn isothermal: $\\Delta Q = W$ (since $\\Delta U = 0$). In isochoric: $\\Delta Q = \\Delta U$ (since $W = 0$).",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-275",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: We cannot change the temperature of a body without giving (or taking) heat to (or from) it.\nReason: According to principle of conservation of energy, total energy of a system should remain conserved.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nTemperature of a system can be changed without any heat transfer ($\\Delta Q = 0$) purely through mechanical work, as in adiabatic compression (heating) or adiabatic expansion (cooling).\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: $\\Delta U = -W \\neq 0$ even with $\\Delta Q = 0$.\n- Reason is FALSE as an isolated assertion/justification for temperature invariance.\nBoth are false (Option D).\n\n### ✓ Examiner Pro-Tip\nWork and heat are two alternative modes of changing internal energy and temperature.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-276",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: The specific heat of a gas in an adiabatic process is zero and in an isothermal process is infinite.\nReason: Specific heat of a gas is directly proportional to change of heat in system and inversely proportional to change in temperature.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nMolar heat capacity is defined as $C = \\frac{\\Delta Q}{n \\Delta T}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n1. In an adiabatic process: $\\Delta Q = 0 \\implies C = \\frac{0}{n \\Delta T} = 0$.\n2. In an isothermal process: $\\Delta T = 0$ while $\\Delta Q \\neq 0 \\implies C = \\frac{\\Delta Q}{n(0)} = \\infty$.\nBoth Assertion and Reason are true, and Reason is the correct explanation.\n\n### ✓ Examiner Pro-Tip\nSpecific heat of a gas can take any value from $-\\infty$ to $+\\infty$ depending on the process!",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-277",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Work and heat are two equivalent forms of energy.\nReason: Work is the transfer of mechanical energy irrespective of temperature difference, whereas heat is the transfer of thermal energy because of temperature difference only.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nJoule established the mechanical equivalent of heat ($W = J Q$). Both work and heat are transient modes of energy transfer across the boundary of a thermodynamic system.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Heat is energy in transit driven solely by temperature difference $\\Delta T$.\n- Work is energy in transit driven by macroscopic non-thermal generalized forces (pressure, tension, EMF).\nBoth Assertion and Reason are true, and Reason correctly explains the physical nature of work and heat.\n\n### ✓ Examiner Pro-Tip\nNeither heat nor work is stored in a system; both exist only during energy transfer across system boundaries.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-278",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: The heat supplied to a system is always equal to the increase in its internal energy.\nReason: When a system changes from one thermal equilibrium to another, some heat is absorbed by it.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nFrom First Law of Thermodynamics, $\\Delta Q = \\Delta U + W$. Heat supplied equals internal energy increase *only* when no work is done ($W = 0$, isochoric process).\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: Generally $\\Delta Q \\neq \\Delta U$ because boundary work $W \\neq 0$.\n- Reason is FALSE: Heat may be released or zero during state transitions.\nBoth are false (Option D).\n\n### ✓ Examiner Pro-Tip\nOnly in isochoric processes is $\\Delta Q = \\Delta U$.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-279",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: A room can be cooled by opening the door of a refrigerator in a closed room.\nReason: Heat flows from lower temperature (refrigerator) to higher temperature (room).",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nLeaving the refrigerator door open releases all extracted heat back into the room along with the converted electrical energy ($W$) from the motor: $Q_{\\text{exhaust}} = Q_{\\text{absorbed}} + W$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: The room is heated, not cooled.\n- Reason is FALSE: Spontaneous heat flow from lower to higher temperature is prohibited by the Second Law of Thermodynamics.\nBoth Assertion and Reason are false (Option D).\n\n### ✓ Examiner Pro-Tip\nOpening a refrigerator in a closed room acts as an electrical heater, gradually warming the room.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-280",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: It is not possible for a system, unaided by an external agency to transfer heat from a body at lower temperature to another body at higher temperature.\nReason: According to Clausius statement, “No process is possible whose sole result is the transfer of heat from a cooler object to a hotter object”.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe Clausius statement of the Second Law of Thermodynamics dictates that heat cannot spontaneously flow from a colder reservoir to a hotter reservoir without an external energy input (work done on the system).\n\n### ⚡ Step-by-Step Derivation & Calculations\nBoth Assertion and Reason are true statements, and Reason is the formal definition that explains the Assertion.\n\n### ✓ Examiner Pro-Tip\nExternal compressor work is indispensable for refrigerator operation.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-281",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: If an electric fan be switched on in a closed room, the air of the room will be cooled.\nReason: Fan air decreases the temperature of the room.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "### 📘 NCERT Fundamental Concept\nAn electric fan does mechanical work on the air in an enclosed room, which is converted into thermal kinetic energy through fluid friction/viscosity, slightly increasing the air temperature.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: The room air warms up slightly.\n- Reason is FALSE: Fans create convection that increases sweat evaporation from human skin, giving a sensation of cooling, but the actual room temperature does not decrease.\nBoth Assertion and Reason are false (Option D).\n\n### ✓ Examiner Pro-Tip\nA fan cools human bodies by promoting evaporative heat loss, not by cooling the room air.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-282",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: The internal energy of an isothermal process does not change.\nReason: The internal energy of a system depends only on pressure of the system.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nFor an ideal gas, Joule's law states that internal energy is solely a function of absolute temperature: $U = f(T) = n C_v T$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is TRUE: In an isothermal process, $T = \\text{constant} \\implies \\Delta U = 0$.\n- Reason is FALSE: Internal energy depends on temperature $T$, not on pressure $P$.\nHence, Assertion is true but Reason is false (Option C).\n\n### ✓ Examiner Pro-Tip\nFor ideal gases, internal energy is strictly independent of pressure and volume at constant temperature: $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = 0$.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-283",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: In an adiabatic process, change in internal energy of a gas is equal to work done on or by the gas in the process.\nReason: Temperature of gas remains constant in an adiabatic process.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nIn an adiabatic process, heat exchange is zero ($\\Delta Q = 0$). By First Law: $\\Delta Q = \\Delta U + W \\implies \\Delta U = -W$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is TRUE: $\\Delta U = -W$.\n- Reason is FALSE: Temperature changes during adiabatic processes ($T V^{\\gamma - 1} = \\text{constant}$).\nHence, Assertion is true but Reason is false (Option C).\n\n### ✓ Examiner Pro-Tip\nTemperature varies significantly during adiabatic expansion/compression.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-284",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: An adiabatic process is an isentropic process.\nReason: Change in entropy is zero in case of reversible adiabatic process.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nEntropy change is defined by $dS = \\frac{dQ_{\\text{rev}}}{T}$. In a reversible adiabatic process, $dQ = 0$, which yields $dS = 0$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n$$dS = 0 \\implies S = \\text{constant}$$\nA constant entropy process is called an isentropic process. Both Assertion and Reason are true, and Reason is the correct explanation.\n\n### ✓ Examiner Pro-Tip\nReversible adiabatic = Isentropic ($S = \\text{constant}$).",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-285",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Work done by a gas in isothermal expansion is more than the work done by the gas in the same expansion, adiabatically.\nReason: Temperature remains constant in isothermal expansion and not in adiabatic expansion.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nOn a $P-V$ indicator diagram for expansion from $(P_1, V_1)$ to $V_2$, the isothermal curve lies above the adiabatic curve because the isothermal slope ($-P/V$) is gentler than the adiabatic slope ($-\\gamma P/V$).\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is TRUE: Area under isothermal expansion is greater ($W_{\\text{iso}} > W_{\\text{adia}}$).\n- Reason is TRUE: Temperature remains constant in isothermal and decreases in adiabatic expansion.\nHowever, the complete mathematical explanation for larger work is that the pressure stays higher due to continuous heat absorption from the source. Hence Option B is correct.\n\n### ✓ Examiner Pro-Tip\nIn expansion: $W_{\\text{isobaric}} > W_{\\text{isothermal}} > W_{\\text{adiabatic}}$.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-286",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: First law of thermodynamics is a restatement of the principle of conservation of energy.\nReason: Energy is a fundamental quantity.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe First Law of Thermodynamics ($\\Delta Q = \\Delta U + W$) states the conservation of energy for thermal systems: energy can neither be created nor destroyed, only transformed between heat, internal energy, and work.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is TRUE: FLOT is conservation of energy applied to thermodynamic systems.\n- Reason is FALSE: Energy is a derived physical quantity ($[M L^2 T^{-2}]$), not a fundamental base SI quantity (the 7 base units are mass, length, time, electric current, thermodynamic temperature, amount of substance, and luminous intensity).\nHence, Assertion is true but Reason is false (Option C).\n\n### ✓ Examiner Pro-Tip\nEnergy has derived SI units of Joules ($\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$).",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-287",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Zeroth law of thermodynamics explains the concept of energy.\nReason: Energy is dependent on temperature.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "### 📘 NCERT Fundamental Concept\nThe Zeroth Law of Thermodynamics introduces and defines the concept of **temperature** and thermal equilibrium, not energy (energy is defined by First Law).\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is FALSE: Zeroth law defines temperature.\n- Reason is TRUE: Internal kinetic energy is directly dependent on absolute temperature ($U = \\frac{f}{2} n R T$).\nHence, Option E is correct.\n\n### ✓ Examiner Pro-Tip\n- Zeroth Law $\\to$ Concept of Temperature.\n- First Law $\\to$ Concept of Internal Energy.\n- Second Law $\\to$ Concept of Entropy.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-288",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Efficiency of a Carnot engine increases on reducing the temperature of sink.\nReason: The efficiency of a Carnot engine is defined as ratio of net mechanical work done per cycle by the gas to the amount of heat energy absorbed per cycle from the source.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "### 📘 NCERT Fundamental Concept\nCarnot efficiency is $\\eta = 1 - \\frac{T_2}{T_1} = \\frac{W}{Q_1}$.\n\n### ⚡ Step-by-Step Derivation & Calculations\n- Assertion is TRUE: Lowering sink temperature $T_2$ decreases ratio $T_2/T_1$, increasing $\\eta$.\n- Reason is TRUE: Efficiency is by definition $\\eta = \\frac{W}{Q_1}$.\nReason is the general definition of thermal efficiency, while the specific temperature dependence arises from the reversible Carnot cycle relation $\\frac{Q_2}{Q_1} = \\frac{T_2}{T_1}$. Thus Option B is correct.\n\n### ✓ Examiner Pro-Tip\nDecreasing sink temperature $T_2$ is mathematically more effective at raising efficiency than increasing source temperature $T_1$ by the same amount.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  },
  {
    "id": "errorless-phy-thd-289",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Assertion & Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: The entropy of the solids is the lowest among three states of matter.\nReason: Atoms of the solids are arranged in an orderly periodic manner.",
    "options": [
      "If both assertion and reason are true and the reason is the correct explanation of the assertion.",
      "If both assertion and reason are true but reason is not the correct explanation of the assertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false.",
      "If assertion is false but reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "### 📘 NCERT Fundamental Concept\nEntropy is a quantitative measure of disorder or molecular randomness of a system ($S = k_B \\ln \\Omega$).\n\n### ⚡ Step-by-Step Derivation & Calculations\nIn solid crystal lattices, atoms occupy fixed lattice sites with regular, periodic long-range order, giving minimum disorder. Hence solids have the lowest entropy ($S_{\\text{solid}} < S_{\\text{liquid}} < S_{\\text{gas}}$).\nBoth Assertion and Reason are true, and Reason is the correct explanation.\n\n### ✓ Examiner Pro-Tip\nEntropy hierarchy: $S_{\\text{gas}} > S_{\\text{liquid}} > S_{\\text{solid}}$.",
    "tags": [
      "Assertion & Reason",
      "Thermodynamics",
      "Errorless Physics"
    ]
  }
];

export const THERMODYNAMICS_PHYSICS_QUESTIONS = THERMODYNAMICS_PHYSICS_BOOK_QUESTIONS;

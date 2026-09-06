import { Question } from '../types';

export const FLUID_MECHANICS_BOOK_QUESTIONS: Question[] = [
  {
    "id": "errorless-phy-flu-001",
    "options": [
      "$10\\text{ m}$",
      "$20\\text{ m}$",
      "$60\\text{ m}$",
      "$30\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nHydrostatic pressure at a depth $y$ in a liquid is given by $P = P_0 + y\\rho g$, where $P_0$ is the atmospheric pressure.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Pressure at half depth ($h/2$): $P_{1/2} = P_0 + \\frac{h}{2}\\rho g$\n- Pressure at the bottom ($h$): $P_{\\text{bottom}} = P_0 + h\\rho g$\n\nAccording to the given condition:\n$$P_0 + \\frac{h}{2}\\rho g = \\frac{2}{3}(P_0 + h\\rho g)$$\n$$3P_0 + \\frac{3}{2}h\\rho g = 2P_0 + 2h\\rho g$$\n$$P_0 = \\frac{1}{2}h\\rho g \\implies h = \\frac{2P_0}{\\rho g}$$\nSubstitute the values:\n$$h = \\frac{2 \\times 10^5}{10^3 \\times 10} = 20\\text{ m}$$\n\n✓ **Examiner Pro-Tip:**\nDirect shortcut: $h = \\frac{2(1 - f)}{2f - 1} \\frac{P_0}{\\rho g}$ where $f = 2/3$, giving $h = 20\\text{ m}$.",
    "examTags": [
      "RPET 2000"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "If the pressure at half the depth of a lake is equal to $2/3$ of the pressure at the bottom of the lake, then what is the depth of the lake? (Take atmospheric pressure $P_0 = 10^5\\text{ N/m}^2$, $g = 10\\text{ m/s}^2$, density of water $\\rho = 10^3\\text{ kg/m}^3$)",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-002",
    "options": [
      "$\\frac{4}{3}$",
      "$\\frac{3}{2}$",
      "$3$",
      "$5$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe apparent weight of a body of mass $m$ and density $\\rho$ submerged in a fluid of density $\\sigma$ is:\n$$W_{\\text{app}} = m g \\left(1 - \\frac{\\sigma}{\\rho}\\right)$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nFor the balance to remain in equilibrium, the apparent weights of both bodies must be equal:\n$$m_1 g \\left(1 - \\frac{\\sigma}{\\rho_1}\\right) = m_2 g \\left(1 - \\frac{\\sigma}{\\rho_2}\\right)$$\nGiven $m_1 = 36\\text{ g}$, $\\rho_1 = 9\\text{ g/cm}^3$, $\\sigma = 1\\text{ g/cm}^3$, $m_2 = 48\\text{ g}$:\n$$36 \\left(1 - \\frac{1}{9}\\right) = 48 \\left(1 - \\frac{1}{\\rho_2}\\right)$$\n$$36 \\times \\frac{8}{9} = 48 \\left(1 - \\frac{1}{\\rho_2}\\right)$$\n$$32 = 48 \\left(1 - \\frac{1}{\\rho_2}\\right) \\implies 1 - \\frac{1}{\\rho_2} = \\frac{32}{48} = \\frac{2}{3}$$\n$$\\frac{1}{\\rho_2} = 1 - \\frac{2}{3} = \\frac{1}{3} \\implies \\rho_2 = 3\\text{ g/cm}^3$$",
    "examTags": [
      "CBSE PMT 1994"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "Two bodies are in equilibrium when suspended in water from the two arms of a physical balance. The mass of one body is $36\\text{ g}$ and its density is $9\\text{ g/cm}^3$. If the mass of the other body is $48\\text{ g}$, its density in $\\text{g/cm}^3$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-003",
    "options": [
      "$350\\text{ cm}^3$",
      "$300\\text{ cm}^3$",
      "$250\\text{ cm}^3$",
      "$22\\text{ cm}^3$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAssuming constant temperature, Boyle's law applies: $P_1 V_1 = P_2 V_2$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Atmospheric pressure $P_0 = h_{\\text{Hg}} \\rho_{\\text{Hg}} g = 0.70 \\times 13600 \\times g = 9520 g\\text{ N/m}^2$\n- At the bottom of the lake ($h = 47.6\\text{ m}$):\n$$P_1 = P_0 + h \\rho_w g = 9520 g + 47.6 \\times 1000 g = 9520 g + 47600 g = 57120 g\\text{ N/m}^2$$\n- Note that $\\frac{P_1}{P_0} = \\frac{57120 g}{9520 g} = 6$\n- By Boyle's Law:\n$$V_2 = V_1 \\left(\\frac{P_1}{P_0}\\right) = 50 \\times 6 = 300\\text{ cm}^3$$",
    "examTags": [
      "CPMT 1989"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Hard",
    "questionText": "An inverted bell lying at the bottom of a lake $47.6\\text{ m}$ deep has $50\\text{ cm}^3$ of air trapped in it. The bell is brought to the surface of the lake. The volume of the trapped air will be (Atmospheric pressure $= 70\\text{ cm of Hg}$ and density of $\\text{Hg} = 13.6\\text{ g/cm}^3$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-004",
    "options": [
      "$3.6\\text{ N}$",
      "$7.2\\text{ N}$",
      "$9.0\\text{ N}$",
      "$14.4\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nLiquid pressure at the bottom depends only on the vertical height of the liquid column: $P = h \\rho g$. The total downward thrust on the base is $F = P \\times A_{\\text{base}}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$F = h \\rho g A_{\\text{base}} = 0.4 \\times 900 \\times 10 \\times (2 \\times 10^{-3}) = 3600 \\times 2 \\times 10^{-3} = 7.2\\text{ N}$$\n\n✓ **Examiner Pro-Tip:**\nThis demonstrates the Hydrostatic Paradox: the force on the base is governed strictly by the liquid head above the base, not by the total weight of liquid in the tapered vessel.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "A uniformly tapering vessel of height $0.4\\text{ m}$ with base area $2 \\times 10^{-3}\\text{ m}^2$ is filled with a liquid of density $900\\text{ kg/m}^3$. The force that acts on the base of the vessel due to the liquid is ($g = 10\\text{ m/s}^2$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-005",
    "options": [
      "$10^5\\text{ N/m}^2$",
      "$2 \\times 10^5\\text{ N/m}^2$",
      "Zero",
      "Infinity"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBoth point P and point S lie on the free surfaces of liquids exposed directly to the open atmosphere.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$P_P = P_{\\text{atm}}, \\quad P_S = P_{\\text{atm}}$$\n$$\\Delta P = P_P - P_S = P_{\\text{atm}} - P_{\\text{atm}} = 0$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "A siphon is in operation as shown in the textbook figure. The density of the liquid flowing in the siphon is $1.5\\text{ g/cm}^3$. The pressure difference between point P (at the free surface of the upper container) and point S (at the free surface of the lower container) is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-006",
    "options": [
      "$250\\text{ m}$",
      "$2.5\\text{ km}$",
      "$1.25\\text{ km}$",
      "$750\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe change in atmospheric pressure across the height of the hill $H$ balances the change in the mercury column height $\\Delta h$:\n$$H \\rho_{\\text{air}} g = \\Delta h \\rho_{\\text{Hg}} g$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $\\Delta h = 75\\text{ cm} - 50\\text{ cm} = 25\\text{ cm} = 0.25\\text{ m}$\n- $\\frac{\\rho_{\\text{Hg}}}{\\rho_{\\text{air}}} = 10^4$\n$$H = \\Delta h \\left(\\frac{\\rho_{\\text{Hg}}}{\\rho_{\\text{air}}}\\right) = 0.25\\text{ m} \\times 10^4 = 2500\\text{ m} = 2.5\\text{ km}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "The height of a mercury barometer is $75\\text{ cm}$ at sea level and $50\\text{ cm}$ at the top of a hill. If the ratio of density of mercury to that of air is $10^4$, the height of the hill is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-007",
    "options": [
      "$\\frac{M}{\\sigma - \\rho}$",
      "$\\frac{\\sigma - \\rho}{M}$",
      "$M \\left(\\frac{1}{\\rho} - \\frac{1}{\\sigma}\\right)$",
      "$\\frac{1}{M} \\left(\\frac{1}{\\rho} - \\frac{1}{\\sigma}\\right)$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Initial volume of ice of mass $M$: $V_1 = \\frac{M}{\\rho}$\n- Final volume of water formed of mass $M$: $V_2 = \\frac{M}{\\sigma}$\n- Since $\\rho < \\sigma$, volume decreases by:\n$$\\Delta V = V_1 - V_2 = M\\left(\\frac{1}{\\rho} - \\frac{1}{\\sigma}\\right)$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Density of ice is $\\rho$ and that of water is $\\sigma$. What will be the decrease in volume when a mass $M$ of ice melts completely into water?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-008",
    "options": [
      "$2/3\\text{ g/cm}^3$",
      "$4/3\\text{ g/cm}^3$",
      "$3/2\\text{ g/cm}^3$",
      "$3\\text{ g/cm}^3$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWhen two liquids of equal mass $m$ and densities $\\rho_1, \\rho_2$ are mixed, the mixture density is the **harmonic mean** of their densities:\n$$\\rho_{\\text{mix}} = \\frac{2m}{V_1 + V_2} = \\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\rho_{\\text{mix}} = \\frac{2 \\times 1 \\times 2}{1 + 2} = \\frac{4}{3}\\text{ g/cm}^3$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Equal masses of water (density $= 1\\text{ g/cm}^3$) and a liquid of density $2\\text{ g/cm}^3$ are mixed together. The density of the resulting mixture is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-009",
    "options": [
      "$M$",
      "$M \\left(1 - \\frac{d}{d_2}\\right)$",
      "$M \\left(1 - \\frac{d}{d_1}\\right)$",
      "$M \\frac{1 - d/d_2}{1 - d/d_1}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn air, both the body and the standard weights experience buoyant upthrust from displaced air.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\text{Apparent weight of body} = \\text{Apparent weight of weights}$$\n$$M_0 g - \\left(\\frac{M_0}{d_1}\\right) d g = M g - \\left(\\frac{M}{d_2}\\right) d g$$\n$$M_0 \\left(1 - \\frac{d}{d_1}\\right) = M \\left(1 - \\frac{d}{d_2}\\right)$$\n$$M_0 = M \\frac{1 - d/d_2}{1 - d/d_1}$$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "A body of density $d_1$ is counterpoised by $M\\text{ g}$ of standard weights of density $d_2$ in air of density $d$. Then the true mass of the body in vacuum ($M_0$) is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-010",
    "options": [
      "Acceleration due to gravity",
      "Height of the liquid column",
      "Area of the bottom surface",
      "Nature (density) of the liquid"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nHydrostatic pressure $P = h \\rho g$ is independent of the cross-sectional area or geometry of the container base.",
    "examTags": [
      "Kerala Engg. 2002"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "The hydrostatic pressure at the bottom of a tank containing a liquid does NOT depend on",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-011",
    "options": [
      "$H$",
      "$2H$",
      "$7H$",
      "$8H$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy Boyle's law at constant temperature, $P_1 V_1 = P_2 V_2$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- At the surface: $P_2 = H$, $V_2 = \\frac{4}{3}\\pi (2r)^3 = 8 V_1$\n- At the bottom: $P_1 = H + h$\n$$(H + h) V_1 = H (8 V_1) \\implies H + h = 8H \\implies h = 7H$$",
    "examTags": [
      "AIIMS 1995",
      "AFMC 1997"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "When a large bubble rises from the bottom of a lake to the surface, its radius doubles. If atmospheric pressure is equal to a water column of height $H$, then the depth of the lake is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-012",
    "options": [
      "$5\\text{ m}$",
      "$10\\text{ m}$",
      "$15\\text{ m}$",
      "$20\\text{ m}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$P_1 V_1 = P_2 V_2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $P_2 = P_0$\n- $V_2 = 3 V_1 \\implies P_1 = 3 P_0 \\implies P_0 + h \\rho_w g = 3 P_0 \\implies h \\rho_w g = 2 P_0$\n- $P_0 = h_{\\text{Hg}} \\rho_{\\text{Hg}} g = 0.75 \\times 10 \\rho_w g = 7.5 \\rho_w g$\n- Therefore:\n$$h \\rho_w g = 2 (7.5 \\rho_w g) = 15 \\rho_w g \\implies h = 15\\text{ m}$$",
    "examTags": [
      "AMU 1995"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "The volume of an air bubble becomes three times as it rises from the bottom of a lake to its surface. Assuming atmospheric pressure is $75\\text{ cm of Hg}$ and density of water is $1/10$ of the density of mercury, the depth of the lake is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-013",
    "options": [
      "Increase by $2\\%$",
      "Decrease by $2\\%$",
      "Remain unchanged",
      "Sometimes increase and sometimes decrease"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAtmospheric pressure $P_0 = h \\rho g \\implies h = \\frac{P_0}{\\rho g}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\nSince $P_0$ and $\\rho$ are constant, $h \\propto \\frac{1}{g}$. A $2\\%$ decrease in $g$ results in a $2\\%$ increase in the barometric height $h$.",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "The value of acceleration due to gravity $g$ at a place decreases by $2\\%$. The barometric height of mercury column at that place will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-014",
    "options": [
      "Zero",
      "Equal to $76\\text{ cm}$",
      "More than $76\\text{ cm}$",
      "Less than $76\\text{ cm}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nInside an upward accelerating frame, the effective gravity is $g_{\\text{eff}} = g + a > g$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$h = \\frac{P_0}{\\rho g_{\\text{eff}}} = \\frac{P_0}{\\rho(g + a)} < \\frac{P_0}{\\rho g}$$\nThus, the height of the mercury column decreases (reads less than $76\\text{ cm}$).",
    "examTags": [
      "AIIMS",
      "AFMC"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "A barometer kept in a stationary elevator reads $76\\text{ cm}$. If the elevator starts accelerating upwards with acceleration $a$, the reading of the barometer will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-015",
    "options": [
      "(i) B, (ii) D",
      "(i) C, (ii) D",
      "(i) B, (ii) C",
      "(i) B, (ii) A"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Horizontal acceleration $a$ rightwards causes an inertial/pseudo force towards the left, making pressure higher on the rear face (A, B) than the front face (D, C): $P_B > P_C$ and $P_A > P_D$.\n- Gravity downwards causes pressure to increase with depth: $P_B > P_A$ and $P_C > P_D$.\n- Combining both gradients: **maximum pressure is at bottom-left corner B**, and **minimum pressure is at top-right corner D**.",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Hard",
    "questionText": "A closed rectangular tank ABCD is completely filled with water and accelerated horizontally with an acceleration $a$ towards the right. Pressure is (i) maximum at, and (ii) minimum at",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-016",
    "options": [
      "Increase",
      "Decrease",
      "Remain constant",
      "First decrease and then increase"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTotal pressure at depth $h$ is $P = P_0 + h\\rho g$. As air is evacuated, atmospheric pressure $P_0$ decreases, so total bottom pressure $P$ decreases accordingly.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "A beaker containing a liquid is kept inside a big closed jar. If the air inside the jar is continuously pumped out by a vacuum pump, the pressure in the liquid near the bottom of the beaker will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-017",
    "options": [
      "$152\\text{ cm}$",
      "$76\\text{ cm}$",
      "$38\\text{ cm}$",
      "$38\\sqrt{3}\\text{ cm}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe vertical height of mercury column $h = 76\\text{ cm}$ is fixed by atmospheric pressure.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$l = \\frac{h}{\\cos\\theta} = \\frac{76}{\\cos 60^\\circ} = \\frac{76}{0.5} = 152\\text{ cm}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "A barometer tube reads $76\\text{ cm}$ of mercury. If the tube is gradually inclined at an angle of $60^\\circ$ with the vertical, keeping the open end immersed in the mercury reservoir, the length of the mercury column along the tube will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-018",
    "options": [
      "$r/2$",
      "$r$",
      "$r/4$",
      "$3r/4$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Average pressure on vertical wall $= \\frac{1}{2} h \\rho g$\n- Force on side wall: $F_{\\text{wall}} = P_{\\text{avg}} \\times A_{\\text{wall}} = \\left(\\frac{1}{2} h \\rho g\\right) (2\\pi r h) = \\pi r \\rho g h^2$\n- Force on bottom base: $F_{\\text{base}} = (h \\rho g) (\\pi r^2) = \\pi r^2 \\rho g h$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nEquating both forces:\n$$\\pi r \\rho g h^2 = \\pi r^2 \\rho g h \\implies h = r$$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "The height to which a cylindrical vessel of radius $r$ must be filled with a homogeneous liquid so that the average force on the vertical side wall equals the force on the bottom base is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-019",
    "options": [
      "$10.4\\text{ cm}$",
      "$8.2\\text{ cm}$",
      "$7.2\\text{ cm}$",
      "$9.6\\text{ cm}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nEquating hydrostatic pressures at the common mercury reference level:\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$P_A = P_B$$\n$$10 \\times 1.3 \\times g = h \\times 0.8 \\times g + (10 - h) \\times 13.6 \\times g$$\n$$13 = 0.8h + 136 - 13.6h$$\n$$12.8h = 136 - 13 = 123$$\n$$h = \\frac{123}{12.8} \\approx 9.61\\text{ cm} \\approx 9.6\\text{ cm}$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Hard",
    "questionText": "A vertical U-tube of uniform cross-section contains mercury in both arms. A glycerin column (density $= 1.3\\text{ g/cm}^3$) of length $10\\text{ cm}$ is introduced into one arm. Oil of density $0.8\\text{ g/cm}^3$ is poured into the other arm until the upper surfaces of oil and glycerin are in the same horizontal level. Find the length of the oil column $h$. (Density of mercury $= 13.6\\text{ g/cm}^3$)",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-020",
    "options": [
      "$\\frac{1}{2} A \\rho g h$",
      "$\\frac{1}{3} A \\rho g h$",
      "$\\frac{1}{6} A \\rho g h$",
      "$\\frac{2}{3} A \\rho g h$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTotal hydrostatic thrust on a vertically submerged plane lamina equals the pressure at its centroid multiplied by the total area:\n$$F = P_{\\text{centroid}} \\times A$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nFor a triangle with base at the surface and vertex pointing down at depth $h$, the depth of the centroid below the base is $\\bar{x} = \\frac{1}{3} h$.\n$$F = \\left(\\frac{1}{3} h \\rho g\\right) A = \\frac{1}{3} A \\rho g h$$",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "A triangular lamina of area $A$ and height $h$ is immersed in a liquid of density $\\rho$ in a vertical plane with its base lying on the surface of the liquid. The total hydrostatic thrust on the lamina is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-021",
    "options": [
      "$\\frac{\\rho_1 + \\rho_2}{2}$",
      "$\\frac{\\rho_1 + \\rho_2}{2\\rho_1 \\rho_2}$",
      "$\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$",
      "$\\frac{\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\rho_{\\text{mix}} = \\frac{M_{\\text{total}}}{V_{\\text{total}}} = \\frac{2m}{\\frac{m}{\\rho_1} + \\frac{m}{\\rho_2}} = \\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "If two liquids of same mass but densities $\\rho_1$ and $\\rho_2$ respectively are mixed together, then the density of the mixture is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-022",
    "options": [
      "$\\frac{\\rho_1 + \\rho_2}{2}$",
      "$\\frac{\\rho_1 + \\rho_2}{2\\rho_1 \\rho_2}$",
      "$\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$",
      "$\\frac{\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\rho_{\\text{mix}} = \\frac{M_{\\text{total}}}{V_{\\text{total}}} = \\frac{V\\rho_1 + V\\rho_2}{2V} = \\frac{\\rho_1 + \\rho_2}{2}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "If two liquids of same volume but different densities $\\rho_1$ and $\\rho_2$ are mixed together, then the density of the mixture is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-023",
    "options": [
      "$\\rho = \\rho_0 \\left[1 - \\frac{\\rho_0 g y}{B}\\right]$",
      "$\\rho = \\rho_0 \\left[1 + \\frac{\\rho_0 g y}{B}\\right]$",
      "$\\rho = \\rho_0 \\left[1 + \\frac{B}{\\rho_0 g y}\\right]$",
      "$\\rho = \\rho_0 \\left[1 - \\frac{B}{\\rho_0 g y}\\right]$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBulk modulus $B = -V_0 \\frac{\\Delta P}{\\Delta V} = \\rho_0 \\frac{\\Delta P}{\\Delta \\rho} \\implies \\Delta \\rho = \\frac{\\rho_0 \\Delta P}{B}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\nSince $\\Delta P = \\rho_0 g y$:\n$$\\rho = \\rho_0 + \\Delta \\rho = \\rho_0 \\left[1 + \\frac{\\rho_0 g y}{B}\\right]$$",
    "examTags": [
      "AIIMS",
      "IIT-JEE"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "The density $\\rho$ of water of bulk modulus $B$ at a depth $y$ in the ocean is related to the surface density $\\rho_0$ by the relation",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-024",
    "options": [
      "$\\rho = \\rho_0 [1 + \\gamma \\Delta\\theta]$",
      "$\\rho = \\rho_0 [1 - \\gamma \\Delta\\theta]$",
      "$\\rho = \\rho_0 \\gamma \\Delta\\theta$",
      "$\\rho = \\rho_0 / (\\gamma \\Delta\\theta)$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$V = V_0 (1 + \\gamma \\Delta\\theta)$$\n$$\\rho = \\frac{m}{V} = \\frac{m}{V_0(1 + \\gamma \\Delta\\theta)} = \\rho_0 (1 + \\gamma \\Delta\\theta)^{-1} \\approx \\rho_0 (1 - \\gamma \\Delta\\theta)$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "With a rise in temperature $\\Delta\\theta$, the density of a given body of volumetric expansion coefficient $\\gamma$ changes according to the relation",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-025",
    "options": [
      "$d$",
      "$2d$",
      "$3d$",
      "$5d$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\rho_{\\text{mix}} = \\frac{V d + V(2d) + V(3d)}{3V} = \\frac{6d}{3} = 2d$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Three liquids of densities $d, 2d$ and $3d$ are mixed in equal volumes. Then the density of the mixture is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-026",
    "options": [
      "$\\frac{11}{7} d$",
      "$\\frac{18}{11} d$",
      "$\\frac{13}{9} d$",
      "$\\frac{23}{18} d$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\rho_{\\text{mix}} = \\frac{3m}{\\frac{m}{d} + \\frac{m}{2d} + \\frac{m}{3d}} = \\frac{3}{\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{3}} d = \\frac{3}{\\frac{11}{6}} d = \\frac{18}{11} d$$",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "Three liquids of densities $d, 2d$ and $3d$ are mixed in equal proportions of weights (masses). The relative density of the mixture is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-027",
    "options": [
      "The pressure on the bottom of tank (a) is greater than at the bottom of (b)",
      "The pressure on the bottom of tank (a) is smaller than at the bottom of (b)",
      "The pressure depends on the shape of the container",
      "The pressure on the bottom of (a) and (b) is the same"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nHydrostatic pressure $P = h \\rho g$ depends exclusively on column depth $h$ and liquid density $\\rho$, independent of container geometry.",
    "examTags": [
      "KCET 2005"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Two tanks (a) and (b) of different shapes are filled with water to the same depth $h$. Which of the following observations is correct?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-028",
    "options": [
      "Water levels in both sections A and B go up",
      "Water level in section A goes up and that in B comes down",
      "Water level in section A comes down and that in B goes up",
      "Water levels remain the same in both sections"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nCentrifugal acceleration pushes the water outward away from the central rotation axis into both vertical arms A and B, causing the water levels in both arms to rise simultaneously.",
    "examTags": [
      "AIIMS 2005"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "A given shaped glass tube having uniform cross section is filled with water and mounted on a rotatable shaft. If the tube is rotated about a central vertical axis with constant angular velocity $\\omega$, then",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-029",
    "options": [
      "Quantity of water increases with depth",
      "Density of water increases with depth",
      "Pressure of water increases linearly with depth ($P = h \\rho g$)",
      "Temperature of water increases with depth"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nHydrostatic pressure increases linearly with depth ($P = h \\rho g$). To withstand the tremendous overturning torque and lateral forces exerted by the high pressure at deep levels, dam walls are built thicker at the base.",
    "examTags": [
      "AFMC 2005"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Why is the dam of a water reservoir constructed thicker at the bottom than at the top?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-030",
    "options": [
      "Increase on the sides only",
      "Increase downwards only",
      "Increase equally in all directions",
      "Never increase"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy **Pascal's Law**, any pressure applied to an enclosed fluid is transmitted undiminished and equally in all directions throughout the fluid and to the walls of the vessel.",
    "examTags": [
      "AFMC 2005"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Air is blown through a hole into a closed pipe containing liquid. Then the pressure inside the liquid will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-031",
    "options": [
      "$2P$",
      "$8P$",
      "$4P$",
      "$7P$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$P_1 V_1 = P_2 V_2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $V_1 = \\frac{4}{3}\\pi r^3$\n- $V_2 = \\frac{4}{3}\\pi (2r)^3 = 8 V_1$\n- At surface: $P_2 = P$\n- At bottom: $P_1 = P + h$\n$$(P + h) V_1 = P (8 V_1) \\implies P + h = 8P \\implies h = 7P$$",
    "examTags": [
      "Kerala PET 2005"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "The radius of an air bubble at the bottom of a lake is $r$ and it becomes $2r$ when it reaches the top surface of the lake. If $P\\text{ cm of water}$ is the atmospheric pressure, then the depth of the lake is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-032",
    "options": [
      "$20\\%$",
      "$35\\%$",
      "$10\\%$",
      "$25\\%$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nFor a floating body, the weight of the body equals the buoyant upthrust of the displaced fluid:\n$$V \\rho_{\\text{ice}} g = V_{\\text{in}} \\rho_{\\text{water}} g \\implies \\frac{V_{\\text{in}}}{V} = \\frac{\\rho_{\\text{ice}}}{\\rho_{\\text{water}}}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{V_{\\text{in}}}{V} = \\frac{900}{1000} = 0.9 = 90\\%$$\n$$\\text{Fraction outside} = 1 - \\frac{V_{\\text{in}}}{V} = 1 - 0.9 = 0.1 = 10\\%$$",
    "examTags": [
      "CPMT 2004"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "An iceberg of density $900\\text{ kg/m}^3$ is floating in water of density $1000\\text{ kg/m}^3$. The percentage of volume of the iceberg outside the water is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-033",
    "options": [
      "$80\\text{ kg}$",
      "$50\\text{ kg}$",
      "$60\\text{ kg}$",
      "$30\\text{ kg}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Volume of the log: $V = \\frac{m}{\\rho_{\\text{wood}}} = \\frac{120}{600} = 0.2\\text{ m}^3$\n- Maximum upthrust when fully submerged: $F_b = V \\rho_{\\text{water}} g = 0.2 \\times 1000 g = 200 g\\text{ N}$\n- For the log to just sink under extra load $x$:\n$$(120 + x) g = 200 g \\implies x = 200 - 120 = 80\\text{ kg}$$",
    "examTags": [
      "CPMT 2004"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A log of wood of mass $120\\text{ kg}$ floats in water. The additional mass that can be placed on the log to make it just sink is (Take density of wood $= 600\\text{ kg/m}^3$, density of water $= 1000\\text{ kg/m}^3$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-034",
    "options": [
      "$0.94\\text{ m}$",
      "$0.97\\text{ m}$",
      "$0.98\\text{ m}$",
      "$0.99\\text{ m}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nOuter radius $R = D/2 = 0.5\\text{ m}$. Let inner radius be $r$.\n- Weight of bowl $= \\frac{2}{3}\\pi (R^3 - r^3) \\rho_{\\text{bowl}} g$\n- Upthrust on fully submerged hemispherical outer volume $= \\frac{2}{3}\\pi R^3 \\rho_{\\text{liquid}} g$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{2}{3}\\pi (R^3 - r^3) \\rho_{\\text{bowl}} g = \\frac{2}{3}\\pi R^3 \\rho_{\\text{liquid}} g$$\n$$(R^3 - r^3) \\times 2 \\times 10^4 = R^3 \\times 1.2 \\times 10^3$$\n$$R^3 - r^3 = R^3 \\times \\frac{1.2 \\times 10^3}{20 \\times 10^3} = 0.06 R^3$$\n$$r^3 = 0.94 R^3 = 0.94 \\times (0.5)^3 = 0.94 \\times 0.125 = 0.1175$$\n$$r = (0.1175)^{1/3} \\approx 0.49\\text{ m}$$\nInner diameter $d = 2r = 2 \\times 0.49\\text{ m} = 0.98\\text{ m}$",
    "examTags": [
      "SCRA 1998"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Hard",
    "questionText": "A hemispherical bowl just floats without sinking in a liquid of density $1.2 \\times 10^3\\text{ kg/m}^3$. If the outer diameter and the density of the material of the bowl are $1\\text{ m}$ and $2 \\times 10^4\\text{ kg/m}^3$ respectively, then the inner diameter of the bowl is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-035",
    "options": [
      "$\\frac{m_1 + m_2}{s_1 + s_2}$",
      "$\\frac{s_1 s_2}{m_1 + m_2}$",
      "$\\frac{m_1 + m_2}{\\frac{m_1}{s_1} + \\frac{m_2}{s_2}}$",
      "$\\frac{\\frac{m_1}{s_1} + \\frac{m_2}{s_2}}{m_1 + m_2}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Specific gravity of alloy} = \\frac{\\text{Total Mass}}{\\text{Total Volume} \\times \\rho_w} = \\frac{m_1 + m_2}{\\left(\\frac{m_1}{s_1 \\rho_w} + \\frac{m_2}{s_2 \\rho_w}\\right) \\rho_w} = \\frac{m_1 + m_2}{\\frac{m_1}{s_1} + \\frac{m_2}{s_2}}$$",
    "examTags": [
      "CPMT 1995"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "In making an alloy, a substance of specific gravity $s_1$ and mass $m_1$ is mixed with another substance of specific gravity $s_2$ and mass $m_2$. The specific gravity of the resulting alloy is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-036",
    "options": [
      "$8$",
      "$4$",
      "$3$",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTotal weight = Total buoyant upthrust in water ($\\rho_w = 1$):\n$$\\frac{4}{3}\\pi(R^3 - r^3)(2.4)g + \\frac{4}{3}\\pi r^3(0.3)g = \\frac{4}{3}\\pi R^3(1)g$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$2.4 R^3 - 2.4 r^3 + 0.3 r^3 = R^3$$\n$$1.4 R^3 = 2.1 r^3 \\implies \\frac{R^3}{r^3} = \\frac{2.1}{1.4} = \\frac{3}{2} = 1.5$$\n$$\\frac{\\text{Mass of concrete}}{\\text{Mass of sawdust}} = \\frac{\\frac{4}{3}\\pi (R^3 - r^3) \\times 2.4}{\\frac{4}{3}\\pi r^3 \\times 0.3} = \\left(\\frac{R^3}{r^3} - 1\\right) \\times \\frac{2.4}{0.3} = (1.5 - 1) \\times 8 = 0.5 \\times 8 = 4$$",
    "examTags": [
      "AIIMS 1995"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Hard",
    "questionText": "A concrete sphere of radius $R$ has a cavity of radius $r$ which is packed with sawdust. The specific gravities of concrete and sawdust are $2.4$ and $0.3$ respectively. For this sphere to float with its entire volume submerged under water, the ratio of mass of concrete to mass of sawdust is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-037",
    "options": [
      "$5 \\times 5 \\times 5 \\times 5\\text{ gf}$",
      "$4 \\times 4 \\times 4 \\times 4\\text{ gf}$",
      "$5 \\times 4 \\times 4 \\times 4\\text{ gf}$",
      "$4 \\times 5 \\times 5 \\times 5\\text{ gf}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$W_{\\text{app}} = V (\\rho - \\rho_w) g$$\nIn gram-force (gf):\n$$W_{\\text{app}} = (5 \\times 5 \\times 5) \\times (5 - 1) = 4 \\times 5 \\times 5 \\times 5\\text{ gf} = 500\\text{ gf}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A metallic block of density $5\\text{ g/cm}^3$ and dimensions $5\\text{ cm} \\times 5\\text{ cm} \\times 5\\text{ cm}$ is weighed in water. Its apparent weight is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-038",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{3}{8}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe immersed volume fraction is given by:\n$$\\frac{V_{\\text{in}}}{V} = \\frac{\\rho_{\\text{block}} g_{\\text{eff}}}{\\rho_{\\text{liquid}} g_{\\text{eff}}} = \\frac{\\rho_{\\text{block}}}{\\rho_{\\text{liquid}}}$$\nBecause effective gravity $g_{\\text{eff}} = g + g/3$ cancels out from both sides, the fraction immersed remains strictly $\\frac{1}{2}$.",
    "examTags": [
      "Kerala PET 2005"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A cubical block is floating in a liquid with half of its volume immersed. When the whole system accelerates upwards with an acceleration of $g/3$, the fraction of volume immersed in the liquid will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-039",
    "options": [
      "$1.6$",
      "$1.94$",
      "$3.1$",
      "$5.25$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$T = W - F_b = m g \\left(1 - \\frac{\\rho_L}{\\rho_S}\\right)$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$T = 2.1 \\left(1 - \\frac{0.8}{10.5}\\right) = 2.1 \\left(1 - 0.07619\\right) = 2.1 \\times 0.9238 \\approx 1.94\\text{ kg-wt}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A silver ingot weighing $2.1\\text{ kg}$ is held by a string so as to be completely immersed in a liquid of relative density $0.8$. If the relative density of silver is $10.5$, the tension in the string in $\\text{kg-wt}$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-040",
    "options": [
      "Metal is $3$, Liquid is $7$",
      "Metal is $7$, Liquid is $3$",
      "Metal is $7$, Liquid is $1/3$",
      "Metal is $3$, Liquid is $3$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Loss of weight in water $= 210 - 180 = 30\\text{ g} \\implies \\text{Volume } V = 30\\text{ cm}^3$\n- Relative density of metal $= \\frac{\\text{Weight in air}}{\\text{Loss in water}} = \\frac{210}{30} = 7$\n- Loss of weight in liquid $= 210 - 120 = 90\\text{ g}$\n- Relative density of liquid $= \\frac{\\text{Loss in liquid}}{\\text{Loss in water}} = \\frac{90}{30} = 3$",
    "examTags": [
      "CPMT 2004"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A sample of metal weighs $210\\text{ g}$ in air, $180\\text{ g}$ in water, and $120\\text{ g}$ in an unknown liquid. Then the relative densities of metal and liquid are respectively",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-041",
    "options": [
      "$4 : 3$",
      "$2 : 3$",
      "$3 : 4$",
      "$1 : 3$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\rho_A = f_A \\rho_w = \\frac{1}{2}\\rho_w, \\quad \\rho_B = f_B \\rho_w = \\frac{2}{3}\\rho_w$$\n$$\\frac{\\rho_A}{\\rho_B} = \\frac{1/2}{2/3} = \\frac{3}{4} = 3:4$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "Two solids A and B float in water. Solid A floats with $1/2$ of its volume immersed and B floats with $2/3$ of its volume immersed. The ratio of density of A to that of B is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-042",
    "options": [
      "$\\frac{d_0}{d}$",
      "$\\frac{d d_0}{d + d_0}$",
      "$\\frac{d - d_0}{d}$",
      "$\\frac{d d_0}{d - d_0}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Immersed fraction: $\\frac{V_{\\text{in}}}{V_0} = \\frac{d_0}{d}$\n- Fraction above surface:\n$$\\frac{V_{\\text{out}}}{V_0} = 1 - \\frac{V_{\\text{in}}}{V_0} = 1 - \\frac{d_0}{d} = \\frac{d - d_0}{d}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "The fraction of a floating object of volume $V_0$ and density $d_0$ that remains ABOVE the surface of a liquid of density $d$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-043",
    "options": [
      "Bernoulli",
      "Archimedes",
      "Boyle",
      "Pascal"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThis is the definitive statement of **Pascal's Law of Hydrostatics**, which forms the working foundation for hydraulic lifts, hydraulic brakes, and hydraulic presses.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and to the walls of the containing vessel. This fundamental principle was formulated by",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-044",
    "options": [
      "$6 \\times 5 \\times 5 \\times 5\\text{ gf}$",
      "$4 \\times 4 \\times 4 \\times 7\\text{ gf}$",
      "$5 \\times 5 \\times 5 \\times 7\\text{ gf}$",
      "$4 \\times 4 \\times 4 \\times 6\\text{ gf}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$W_{\\text{app}} = V (\\rho_s - \\rho_w) g = (5 \\times 5 \\times 5) \\times (7 - 1) = 6 \\times 5 \\times 5 \\times 5\\text{ gf} = 750\\text{ gf}$$",
    "examTags": [
      "AFMC 1997"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A block of steel of dimensions $5\\text{ cm} \\times 5\\text{ cm} \\times 5\\text{ cm}$ is weighed in water. If the relative density of steel is $7$, its apparent weight is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-045",
    "options": [
      "It will slowly come back to its earlier surface position",
      "It will remain submerged at rest wherever it is left (neutral equilibrium)",
      "It will accelerate and sink to the bottom",
      "It will shoot out violently"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWhen density of body equals density of liquid ($\\rho_{\\text{body}} = \\rho_{\\text{liquid}}$), the buoyant upthrust exactly equals the gravitational weight at all depths ($F_b = W$). The net vertical force is zero everywhere, so it stays in **neutral equilibrium** wherever it is released.",
    "examTags": [
      "AIIMS 1980"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A body is just floating fully submerged on the surface of a liquid. The density of the body is identically equal to that of the liquid. If the body is slightly pushed downwards and released, what will happen to the body?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-046",
    "options": [
      "Increase",
      "Decrease",
      "Remain unchanged",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Upthrust on cork: $F_b = V \\rho_w g_{\\text{eff}}$\n- Weight of cork: $W = V \\rho_c g_{\\text{eff}}$\n- Net upward pulling force on spring: $F_{\\text{spring}} = V (\\rho_w - \\rho_c) g_{\\text{eff}}$\nIn a downward accelerating elevator, $g_{\\text{eff}} = g - a < g$. Therefore, the tension in the spring decreases, causing its elongated length to **decrease**.",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Hard",
    "questionText": "A cork is submerged in water by a spring attached to the bottom of a bowl. When the bowl is placed in an elevator accelerating downwards with acceleration $a < g$, the length of the spring will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-047",
    "options": [
      "$m g \\left(\\frac{\\eta - 1}{\\eta}\\right)$",
      "$\\eta m g$",
      "$\\frac{m g}{\\eta - 1}$",
      "$(\\eta - 1) m g$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAt equilibrium, downward tension plus weight equals upward buoyant thrust:\n$$T + W = F_b \\implies T = F_b - W$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $W = V \\rho g = m g$\n- $F_b = V \\rho_{\\text{water}} g = V (\\eta \\rho) g = \\eta (V \\rho g) = \\eta m g$\n- Therefore:\n$$T = \\eta m g - m g = (\\eta - 1) m g$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A solid sphere of density $\\eta$ times lighter than water ($\\rho_{\\text{water}} = \\eta \\rho_{\\text{sphere}}$, with $\\eta > 1$) is suspended in a water tank by a string tied to its base. If the mass of the sphere is $m$, the tension in the string is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-048",
    "options": [
      "$V/2$",
      "$V/3$",
      "$V/4$",
      "$V$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Initial floating condition: $\\text{Weight of hollow sphere} = \\text{Upthrust of half volume} = \\frac{V}{2}\\rho_w g$\n- To sink completely, total weight must equal full volume upthrust $V \\rho_w g$:\n$$\\text{Weight of hollow sphere} + V' \\rho_w g = V \\rho_w g$$\n$$\\frac{V}{2}\\rho_w g + V' \\rho_w g = V \\rho_w g \\implies V' = \\frac{V}{2}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A hollow sphere of total volume $V$ is floating on a water surface with half of its volume immersed. What is the minimum volume of water that must be poured inside the hollow sphere so that it just sinks completely?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-049",
    "options": [
      "No change",
      "It will rise",
      "It will fall",
      "May rise or fall depending on the density of block"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe mass and gravitational weight of the block remain unchanged upon reorientation. By the law of floatation, the volume of displaced water $V_{\\text{in}} = \\frac{m}{\\rho_w}$ is constant, so the overall water level in the vessel experiences **no change**.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A rectangular block of dimensions $5\\text{ cm} \\times 5\\text{ cm} \\times 10\\text{ cm}$ floats in water with its $5\\text{ cm}$ side vertical. If it is reoriented to float with its $10\\text{ cm}$ side vertical, what change will occur in the level of water in the vessel?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-050",
    "options": [
      "$9\\text{ cm}$",
      "$6\\text{ cm}$",
      "$4.5\\text{ cm}$",
      "$2.25\\text{ cm}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Velocity upon striking water surface: $v = \\sqrt{2gh} = \\sqrt{2g \\times 9}$\n- Upward retardation inside water:\n$$a = \\frac{F_b - W}{m} = \\frac{V\\rho_w g - V\\rho g}{V\\rho} = \\left(\\frac{\\rho_w - \\rho}{\\rho}\\right) g = \\left(\\frac{1.0 - 0.4}{0.4}\\right) g = 1.5 g$$\n- Using $0 - v^2 = -2 a d$:\n$$d = \\frac{v^2}{2a} = \\frac{2g \\times 9}{2 \\times (1.5g)} = \\frac{9}{1.5} = 6\\text{ cm}$$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A ball of density $0.4 \\times 10^3\\text{ kg/m}^3$ falls freely under gravity into water from a height of $9\\text{ cm}$. To what maximum depth does the ball sink into water before momentarily coming to rest? (Neglect viscosity)",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-051",
    "options": [
      "$4 : 3$",
      "$2 : 3$",
      "$3 : 4$",
      "$1 : 2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- For A: $\\frac{V_{\\text{in}}}{V_A} = \\frac{1}{2} \\implies \\rho_A = \\frac{1}{2}\\rho_w$\n- For B: $\\frac{V_{\\text{out}}}{V_B} = \\frac{1}{4} \\implies \\frac{V_{\\text{in}}}{V_B} = \\frac{3}{4} \\implies \\rho_B = \\frac{3}{4}\\rho_w$\n- Ratio:\n$$\\frac{\\rho_A}{\\rho_B} = \\frac{1/2}{3/4} = \\frac{2}{3} = 2:3$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "Two solids A and B float in water. Solid A floats with $1/2$ of its body immersed, and B floats with $1/4$ of its volume above the water level. The ratio of density of A to that of B is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-052",
    "options": [
      "Remain unchanged",
      "Rise",
      "Fall",
      "First rise and then fall"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- When the steel balls are inside the floating boat, they displace water equal to their **weight**: $V_1 = \\frac{M}{\\rho_{\\text{water}}}$.\n- When the steel balls sink to the bottom, they displace water equal to their **volume**: $V_2 = \\frac{M}{\\rho_{\\text{steel}}}$.\n- Since $\\rho_{\\text{steel}} > \\rho_{\\text{water}}$, $V_2 < V_1$. Therefore, the total volume of displaced water decreases, causing the water level in the tank to **fall**.",
    "examTags": [
      "J&K CET 2005"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A toy boat carrying steel balls is floating in a water tank. If the steel balls are thrown into the tank water one by one and sink to the bottom, the water level in the tank will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-053",
    "options": [
      "Both pieces must have equal weights",
      "Both pieces must have equal densities",
      "Both pieces must have equal volumes",
      "Both are floating at the same depth"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBuoyant upthrust $F_b = V \\rho_{\\text{liquid}} g$. For equal upthrust in the same liquid, the submerged volume $V$ must be identical for both objects.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "Two pieces of different metals when fully immersed in a liquid experience equal buoyant upthrust forces. Then",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-054",
    "options": [
      "Equal to that of water",
      "Half the density of water",
      "Double the density of water",
      "The question is incomplete"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$V \\rho_{\\text{wood}} g = \\left(\\frac{V}{2}\\right) \\rho_{\\text{water}} g \\implies \\rho_{\\text{wood}} = \\frac{1}{2}\\rho_{\\text{water}}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A wooden cylinder floats vertically in water with half of its length immersed. The density of wood is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-055",
    "options": [
      "Remain at the same height",
      "Fall at the rate of $1\\text{ cm/hour}$",
      "Fall at the rate of $2\\text{ cm/hour}$",
      "Go up at the rate of $1\\text{ cm/hour}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Because $\\rho_c = \\frac{1}{2}\\rho_L$, the candle floats with half its instantaneous length submerged and half in air ($L_{\\text{sub}} = l/2$).\n- When the candle burns at rate $\\frac{dl}{dt} = 2\\text{ cm/hr}$, its length in air decreases by $1\\text{ cm/hr}$ while its submerged length decreases by $1\\text{ cm/hr}$.\n- As the submerged length decreases, the candle rises by $1\\text{ cm/hr}$ relative to the water surface.\n- Net downward motion of the burning tip $= 2 - 1 = 1\\text{ cm/hour}$.",
    "examTags": [
      "AIIMS 2005"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Hard",
    "questionText": "A candle of diameter $d$ and length $2L$ is floating vertically in a liquid of density $\\rho_L = 2\\rho_c$ inside a wide container. If the candle is burning at the rate of $2\\text{ cm/hour}$, the top of the candle will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-056",
    "options": [
      "Rise",
      "Fall",
      "Remain unchanged",
      "First rise and then fall"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- While floating, the glass ball is supported by ice and displaces water equivalent to its **weight** ($V_{\\text{displaced}} = m_{\\text{glass}} / \\rho_{\\text{water}}$).\n- After melting, the glass ball sinks to the bottom, displacing only its actual **volume** ($V_{\\text{actual}} = m_{\\text{glass}} / \\rho_{\\text{glass}}$).\n- Since $\\rho_{\\text{glass}} > \\rho_{\\text{water}}$, $V_{\\text{actual}} < V_{\\text{displaced}}$, so the water level **falls**.",
    "examTags": [
      "AFMC 2005"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "An ice block contains a heavy glass ball frozen inside it. When the ice melts completely inside a water vessel, the level of water in the vessel will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-057",
    "options": [
      "Viscosity of water supports large ships",
      "Surface tension is greater for ships",
      "The average density of the hollow ship is less than that of water",
      "The needle is not made of pure steel"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nA ship is designed with large hollow compartments filled with air, so its total mass divided by its total enclosed volume yields an average density much smaller than water, allowing it to displace its own weight before submerging. A solid needle has density $\\rho_{\\text{steel}} \\approx 7.8\\text{ g/cm}^3 > 1\\text{ g/cm}^3$ and sinks.",
    "examTags": [
      "AFMC 2005"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A massive steel ship floats easily on ocean water but a tiny steel needle sinks to the bottom. This is because",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-058",
    "options": [
      "Archimedes' principle",
      "Bernoulli's theorem",
      "Pascal's law",
      "Newton's laws of cooling"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nSubmarines control their depth and buoyancy by pumping water into or blowing compressed air out of their ballast tanks, directly applying **Archimedes' principle** of floatation.",
    "examTags": [
      "Kerala PMT 2005"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "The construction and buoyancy control of submarines is based directly on",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-059",
    "options": [
      "Liquid of high viscosity and high density flowing through a pipe of small radius",
      "Liquid of high viscosity and low density flowing through a pipe of small radius",
      "Liquid of low viscosity and low density flowing through a pipe of large radius",
      "Liquid of low viscosity and high density flowing through a pipe of large radius"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe critical velocity and streamlined nature of flow are governed by **Reynolds number**:\n$$N_R = \\frac{\\rho v D}{\\eta} = \\frac{2 \\rho v r}{\\eta}$$\nFor flow to remain strictly streamlined, $N_R$ must be as small as possible ($N_R < 2000$). This requires low density $\\rho$, small pipe radius $r$, and high dynamic viscosity $\\eta$.",
    "examTags": [
      "Pb. CET 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In which one of the following cases will the liquid flow in a pipe be most streamlined?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-060",
    "options": [
      "$4$ times that in the other pipe",
      "$1/4$ times that in the other pipe",
      "$2$ times that in the other pipe",
      "$1/2$ times that in the other pipe"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAccording to the **Equation of Continuity** for an incompressible fluid:\n$$A_1 v_1 = A_2 v_2 \\implies v_1 = \\left(\\frac{D_2}{D_1}\\right)^2 v_2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$v_1 = \\left(\\frac{4}{2}\\right)^2 v_2 = 2^2 v_2 = 4 v_2$$",
    "examTags": [
      "MNR 1980"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Two water pipes of diameters $2\\text{ cm}$ and $4\\text{ cm}$ are connected with the main supply line. The velocity of flow of water in the pipe of $2\\text{ cm}$ diameter is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-061",
    "options": [
      "$3.0\\text{ m/s}$",
      "$1.5\\text{ m/s}$",
      "$1.0\\text{ m/s}$",
      "$2.25\\text{ m/s}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTotal volume entering per second equals total volume leaving per second:\n$$A_1 v_1 = A_2 v_2 + A_3 v_3$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$A \\times 3 = A \\times 1.5 + 1.5 A \\times v$$\n$$3 A = 1.5 A + 1.5 A v$$\n$$1.5 A = 1.5 A v \\implies v = 1.0\\text{ m/s}$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "An incompressible liquid flows through a horizontal tube branching into two tubes. The entrance area is $A$ with velocity $3\\text{ m/s}$. One branch has area $A$ and velocity $1.5\\text{ m/s}$, and the second branch has area $1.5A$ and velocity $v$. The velocity $v$ of the fluid in the second branch is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-062",
    "options": [
      "Case I only",
      "Case II only",
      "Case III only",
      "Each case (I, II, and III)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy the equation of continuity $A_1 v_1 = A_2 v_2$, since the tube has a uniform cross-section ($A_1 = A_2 = A$) and water is incompressible, $v_1 = v_2$ holds strictly in all orientations.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Water enters through end A with speed $v_1$ and leaves through end B with speed $v_2$ of a cylindrical tube AB of uniform cross-section. The tube is always completely filled with water. In Case I the tube is horizontal, in Case II it is vertical with end A upwards, and in Case III it is vertical with end B upwards. We have $v_1 = v_2$ in",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-063",
    "options": [
      "$3.0\\text{ m/s}$",
      "$5.7\\text{ m/s}$",
      "$3.82\\text{ m/s}$",
      "$2.86\\text{ m/s}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy the equation of continuity:\n$$A_1 v_1 = A_2 v_2 \\implies v_2 = \\frac{A_1 v_1}{A_2}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$v_2 = \\frac{4.20 \\times 5.18}{7.60} \\approx 2.86\\text{ m/s}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Water is moving with a speed of $5.18\\text{ m/s}$ through a pipe with a cross-sectional area of $4.20\\text{ cm}^2$. The water gradually descends $9.66\\text{ m}$ as the pipe increases in area to $7.60\\text{ cm}^2$. The speed of flow at the lower level is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-064",
    "options": [
      "$1.25\\text{ m}$",
      "$12.5\\text{ m}$",
      "$0.125\\text{ m}$",
      "$125\\text{ m}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nVelocity head is defined as:\n$$h_v = \\frac{v^2}{2g}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$h_v = \\frac{5^2}{2 \\times 10} = \\frac{25}{20} = 1.25\\text{ m}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The velocity of kerosene oil in a horizontal pipe is $5\\text{ m/s}$. If $g = 10\\text{ m/s}^2$, then the velocity head of the oil is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-065",
    "options": [
      "Height of the liquid in tube A is maximum",
      "Height of the liquid in tubes A and B is the same",
      "Height of the liquid in all three tubes is the same",
      "Height of the liquid in tubes A and C is the same"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Radii at A and C are equal ($r_A = r_C = 2\\text{ cm}$) $\\implies A_A = A_C \\implies v_A = v_C$.\n- Applying Bernoulli's equation horizontally: $P_A + \\frac{1}{2}\\rho v_A^2 = P_C + \\frac{1}{2}\\rho v_C^2 \\implies P_A = P_C$.\n- Therefore, the height of liquid supported in manometer tubes A and C is identical ($h_A = h_C$).",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A liquid flows through a horizontal pipe. Three vertical manometer tubes A, B, and C are connected to the pipe where the pipe radii at the junctions are $2\\text{ cm}, 1\\text{ cm}$, and $2\\text{ cm}$ respectively. It can be concluded that",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-066",
    "options": [
      "$100\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$1\\text{ m/s}$",
      "$10\\sqrt{10}\\text{ m/s}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAccording to Bernoulli's theorem for horizontal streamline flow:\n$$P_1 + 0 = P_2 + \\frac{1}{2}\\rho v^2 \\implies \\frac{1}{2}\\rho v^2 = P_1 - P_2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{1}{2}(10^3) v^2 = (3.5 - 3.0) \\times 10^5 = 0.5 \\times 10^5$$\n$$v^2 = \\frac{2 \\times 0.5 \\times 10^5}{10^3} = 100 \\implies v = 10\\text{ m/s}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A manometer connected to a closed tap reads $3.5 \\times 10^5\\text{ N/m}^2$. When the valve is opened, the reading of the manometer falls to $3.0 \\times 10^5\\text{ N/m}^2$. The velocity of flow of water is (Take $\\rho = 10^3\\text{ kg/m}^3$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-067",
    "options": [
      "$4095.0\\text{ Pa}$",
      "$409.50\\text{ Pa}$",
      "$40.950\\text{ Pa}$",
      "$4.0950\\text{ Pa}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\Delta P = P_{\\text{lower}} - P_{\\text{upper}} = \\frac{1}{2}\\rho (v_{\\text{upper}}^2 - v_{\\text{lower}}^2)$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\Delta P = \\frac{1}{2} \\times 1.3 \\times (120^2 - 90^2) = 0.65 \\times (14400 - 8100) = 0.65 \\times 6300 = 4095\\text{ Pa}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Air is streaming past a horizontal aeroplane wing such that its speed is $120\\text{ m/s}$ over the upper surface and $90\\text{ m/s}$ at the lower surface. If the density of air is $1.3\\text{ kg/m}^3$, the pressure difference between the upper and lower surfaces of the wing is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-068",
    "options": [
      "$\\sqrt{2}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\sqrt{2} - 1$",
      "$\\frac{1}{\\sqrt{2} - 1}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe time taken for the water level to fall from $H_1$ to $H_2$ through an orifice of area $A_0$ is:\n$$t = \\frac{A}{A_0}\\sqrt{\\frac{2}{g}}(\\sqrt{H_1} - \\sqrt{H_2})$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $t_1 \\propto (\\sqrt{h} - \\sqrt{h/2})$\n- $t_2 \\propto (\\sqrt{h/2} - 0)$\n$$\\frac{t_1}{t_2} = \\frac{\\sqrt{h} - \\sqrt{h/2}}{\\sqrt{h/2}} = \\frac{1 - 1/\\sqrt{2}}{1/\\sqrt{2}} = \\sqrt{2} - 1$$",
    "examTags": [
      "EAMCET 2003"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A large tank filled with water to a height $h$ is emptied through a small orifice at the bottom. The ratio of time taken for the level of water to fall from $h$ to $h/2$ to that from $h/2$ to zero is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-069",
    "options": [
      "$10\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25.5\\text{ m/s}$",
      "$5\\text{ m/s}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy **Torricelli's Theorem**:\n$$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\text{ m/s}$$",
    "examTags": [
      "AIEEE 2002"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A cylinder of height $20\\text{ m}$ is completely filled with water. The velocity of efflux of water through a small hole on the side wall near the bottom is ($g = 10\\text{ m/s}^2$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-070",
    "options": [
      "$\\sqrt{400}\\text{ m/s} = 20\\text{ m/s}$",
      "$\\sqrt{600}\\text{ m/s}$",
      "$\\sqrt{60}\\text{ m/s}$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Total bottom pressure: $P = 3\\text{ atm} = 3 \\times 10^5\\text{ Pa}$\n- External atmospheric pressure: $P_0 = 1\\text{ atm} = 1 \\times 10^5\\text{ Pa}$\n- Excess gauge pressure: $\\Delta P = P - P_0 = 2 \\times 10^5\\text{ Pa}$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$v = \\sqrt{\\frac{2\\Delta P}{\\rho}} = \\sqrt{\\frac{2 \\times (2 \\times 10^5)}{10^3}} = \\sqrt{400} = 20\\text{ m/s}$$",
    "examTags": [
      "CPMT 2002"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "There is a hole in the bottom of a water tank. If the total absolute pressure at the bottom is $3\\text{ atm}$ ($1\\text{ atm} = 10^5\\text{ N/m}^2$), then the velocity of water flowing out from the hole into the open atmosphere is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-071",
    "options": [
      "$t$",
      "$4t$",
      "$2t$",
      "$t/4$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTime to empty a tank is proportional to the square root of the initial water height: $t \\propto \\sqrt{H}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{t'}{t} = \\sqrt{\\frac{4h}{h}} = \\sqrt{4} = 2 \\implies t' = 2t$$",
    "examTags": [
      "MP PMT 1997"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A cylindrical vessel filled with water up to height $h$ empties completely through a bottom hole in time $t$. If water is filled to a height $4h$, the time required to empty the vessel will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-072",
    "options": [
      "$2.5\\text{ cm}$",
      "$5\\text{ cm}$",
      "$10\\text{ cm}$",
      "$0.25\\text{ cm}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWater reaches a steady maximum height $h$ when the rate of inflow equals the rate of efflux outflow:\n$$\\text{Inflow rate} = A_0 \\sqrt{2gh}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$70 = 1 \\times \\sqrt{2 \\times 980 \\times h}$$\n$$70 = \\sqrt{1960 h}$$\n$$4900 = 1960 h \\implies h = \\frac{4900}{1960} = 2.5\\text{ cm}$$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A cylindrical tank has a hole of area $1\\text{ cm}^2$ at its bottom. If water flows into the tank from a supply tap at the rate of $70\\text{ cm}^3\\text{/s}$, the maximum height up to which water can rise in the tank is (Take $g = 980\\text{ cm/s}^2$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-073",
    "options": [
      "$0.1\\text{ m}$",
      "$0.05\\text{ m}$",
      "$0.005\\text{ m}$",
      "$0.0005\\text{ m}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$F = \\eta A \\frac{\\Delta v}{\\Delta x} \\implies \\Delta x = \\frac{\\eta A \\Delta v}{F}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $A = (0.1)^2 = 0.01\\text{ m}^2$\n- $\\eta = 0.01\\text{ poise} = 10^{-3}\\text{ Pa}\\cdot\\text{s}$\n- $\\Delta v = 0.1\\text{ m/s}$, $F = 0.002\\text{ N}$\n\n$$\\Delta x = \\frac{10^{-3} \\times 0.01 \\times 0.1}{0.002} = \\frac{10^{-6}}{2 \\times 10^{-3}} = 0.0005\\text{ m}$$",
    "examTags": [
      "EAMCET 2003"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A square plate of side $0.1\\text{ m}$ moves parallel to a second stationary plate at a speed of $0.1\\text{ m/s}$ in water. If the viscous force is $0.002\\text{ N}$ and the coefficient of viscosity of water is $0.01\\text{ poise} = 10^{-3}\\text{ N}\\cdot\\text{s/m}^2$, the separation between the plates is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-074",
    "options": [
      "Inversely proportional to $r$ but directly proportional to velocity $v$",
      "Directly proportional to both radius $r$ and velocity $v$",
      "Inversely proportional to both radius $r$ and velocity $v$",
      "Directly proportional to $r$ but inversely proportional to $v$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAccording to **Stokes' Law**, the viscous drag on a spherical object of radius $r$ moving at velocity $v$ is:\n$$F = 6\\pi \\eta r v$$\nHence, the viscous drag is directly proportional to both $r$ and $v$.",
    "examTags": [
      "AIEEE 2004"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Spherical balls of radius $r$ fall in a viscous fluid of viscosity $\\eta$ with velocity $v$. The retarding viscous force acting on each sphere is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-075",
    "options": [
      "Greater than the work done by air friction in the second $100\\text{ m}$",
      "Less than the work done by air friction in the second $100\\text{ m}$",
      "Equal to $100 m g$",
      "Greater than $100 m g$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Air friction force is $F = 6\\pi\\eta r v \\propto v$.\n- In the first $100\\text{ m}$, the velocity accelerates from $0$ to $v_T$, so average velocity is less than $v_T$.\n- In the second $100\\text{ m}$, the body moves at constant maximum terminal speed $v_T$.\n- Therefore, the average frictional retarding force and work done against air friction during the first $100\\text{ m}$ is **less** than in the second $100\\text{ m}$.",
    "examTags": [
      "MP PMT 1990"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A small sphere of mass $m$ is dropped from a great height in air. After falling $100\\text{ m}$, it attains its terminal velocity $v_T$ and continues to fall at that speed. The work done by air friction against the sphere during the first $100\\text{ m}$ of fall is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-076",
    "options": [
      "$10\\text{ cm/s}$",
      "$2.5\\text{ cm/s}$",
      "$5 \\times 4^{1/3}\\text{ cm/s} \\approx 7.94\\text{ cm/s}$",
      "$5\\sqrt{2}\\text{ cm/s}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Volume conservation: $\\frac{4}{3}\\pi R^3 = 2 \\times \\frac{4}{3}\\pi r^3 \\implies R = 2^{1/3} r$\n- Terminal velocity $v_T \\propto r^2$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$v_T' = v_T \\left(\\frac{R}{r}\\right)^2 = 5 \\times (2^{1/3})^2 = 5 \\times 2^{2/3} = 5 \\times 4^{1/3}\\text{ cm/s}$$",
    "examTags": [
      "MP PMT 1990"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Two raindrops of the same radius $r$ fall through air with a steady terminal velocity of $5\\text{ cm/s}$. If the two drops coalesce to form a single larger drop, the terminal velocity of the new drop will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-077",
    "options": [
      "$\\frac{2}{9} \\left[\\frac{r^2 (\\rho - 1)}{\\eta}\\right] g$",
      "$\\frac{2}{81} \\left[\\frac{r^2 (\\rho - 1)}{\\eta}\\right] g$",
      "$\\frac{2}{81} \\left[\\frac{r^2 (\\rho - 1)}{\\eta}\\right]^2 g$",
      "$\\frac{2}{9} \\left[\\frac{r^2 (\\rho - 1)}{\\eta}\\right]^2 g$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Velocity upon reaching water surface: $v = \\sqrt{2gh}$\n- Terminal velocity inside water: $v_T = \\frac{2}{9} \\frac{r^2 (\\rho - 1) g}{\\eta}$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nEquating $v = v_T$:\n$$\\sqrt{2gh} = \\frac{2}{9} \\frac{r^2 (\\rho - 1) g}{\\eta}$$\n$$2gh = \\frac{4}{81} \\left[\\frac{r^2 (\\rho - 1)}{\\eta}\\right]^2 g^2$$\n$$h = \\frac{2}{81} \\left[\\frac{r^2 (\\rho - 1)}{\\eta}\\right]^2 g$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Hard",
    "questionText": "A ball of radius $r$ and density $\\rho$ falls freely under gravity through a height $h$ in air before entering water (density $= 1$). If the velocity of the ball does not change on entering water (i.e. It enters at its terminal velocity), the height $h$ is given by (where $\\eta$ is the viscosity of water):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-078",
    "options": [
      "$\\frac{V}{16}$",
      "$\\frac{V}{17}$",
      "$\\frac{16V}{17}$",
      "$\\frac{17V}{16}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nFluid resistance of a capillary tube is $R = \\frac{8\\eta l}{\\pi r^4} \\propto \\frac{1}{r^4}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- For the first tube: $R_1 = R$\n- For the second tube ($r_2 = r/1$): $R_2 = \\frac{8\\eta l}{\\pi (r/2)^4} = 16 R$\n- Series equivalent resistance: $R_{\\text{eq}} = R_1 + R_2 = R + 16R = 17R$\n- New flow rate:\n$$V_{\\text{new}} = \\frac{P}{R_{\\text{eq}}} = \\frac{P}{17R} = \\frac{V}{17}$$",
    "examTags": [
      "EAMCET 2003"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "The steady volume flow rate of water through a capillary tube of length $l$ and radius $r$ under pressure difference $P$ is $V$. If this tube is connected in series with another tube of the same length $l$ but half the radius ($r/2$) under the same total pressure difference $P$, the new volume flow rate through the combination is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-079",
    "options": [
      "$P$",
      "$\\frac{3P}{4}$",
      "$\\frac{P}{2}$",
      "$\\frac{P}{4}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nPoiseuille's formula: $V = \\frac{\\pi P r^4}{8\\eta l} \\implies P = \\frac{8\\eta l V}{\\pi r^4} \\propto \\frac{l V}{r^4}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{P'}{P} = \\left(\\frac{l'}{l}\\right) \\left(\\frac{V'}{V}\\right) \\left(\\frac{r}{r'}\\right)^4 = (2) \\times (2) \\times \\left(\\frac{1}{2}\\right)^4 = \\frac{4}{16} = \\frac{1}{4} \\implies P' = \\frac{P}{4}$$",
    "examTags": [
      "EAMCET 2001"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A liquid flows through a horizontal uniform capillary tube under pressure difference $P$. If both the radius and length of the tube are doubled, the new pressure difference required to maintain DOUBLE the initial rate of flow is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-080",
    "options": [
      "$4\\text{ cm}^3\\text{/s}$",
      "$\\frac{16}{3}\\text{ cm}^3\\text{/s}$",
      "$\\frac{8}{17}\\text{ cm}^3\\text{/s}$",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nFluid resistance $R \\propto l$ for equal radii.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- If $R_1 = R$, then $R_2 = R/2$ because $l_2 = l_1/2$.\n- Equivalent series resistance: $R_{\\text{eq}} = R + \\frac{R}{2} = \\frac{3}{2}R$.\n- Flow rate:\n$$V_{\\text{series}} = \\frac{P}{R_{\\text{eq}}} = \\frac{P}{\\frac{3}{2}R} = \\frac{2}{3} \\left(\\frac{P}{R}\\right) = \\frac{2}{3} \\times 8 = \\frac{16}{3}\\text{ cm}^3\\text{/s}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Two capillary tubes $T_1$ and $T_2$ have lengths $l_1$ and $l_2$ and radii $r_1$ and $r_2$. The flow rate through $T_1$ under pressure difference $P$ is $8\\text{ cm}^3\\text{/s}$. If $l_1 = 2l_2$ and $r_1 = r_2$, what will be the rate of flow when both tubes are connected in series across the same pressure difference $P$?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-081",
    "options": [
      "Zero",
      "Maximum",
      "In between zero and maximum",
      "Equal to critical velocity"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nDue to the **no-slip condition** in fluid dynamics and adhesive forces between liquid molecules and the solid wall, the fluid layer immediately touching the stationary boundary has **zero velocity**.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In a laminar flow through a pipe, the velocity of the liquid layer directly in contact with the inner walls of the tube is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-082",
    "options": [
      "Zero",
      "Maximum",
      "Equal to critical velocity",
      "May have any fluctuating random value"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn turbulent flow, fluid motion is characterized by chaotic, irregular eddies and rapid velocity fluctuations in all directions.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In a turbulent flow, the velocity of the liquid molecules in contact with the walls of the tube",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-083",
    "options": [
      "Gravity force to viscous force",
      "Gravity force to pressure force",
      "Inertial force to viscous force",
      "Viscous force to pressure force"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Reynolds Number } N_R = \\frac{\\text{Inertial Force}}{\\text{Viscous Force}} = \\frac{\\rho v^2 L^2}{\\eta v L} = \\frac{\\rho v L}{\\eta}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The Reynolds number of a fluid flow represents the dimensionless ratio of",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-084",
    "options": [
      "$4 : 9$",
      "$9 : 4$",
      "$8 : 27$",
      "$1 : 1$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy continuity equation: $A_1 v_1 = A_2 v_2 \\implies \\frac{v_1}{v_2} = \\frac{A_2}{A_1} = \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9} = 4:9$.",
    "examTags": [
      "RPMT 2001"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Water is flowing through a tube of non-uniform cross-section. If the ratio of the radius at the entry to that at the exit end of the pipe is $3 : 2$, then the ratio of velocities at entry and exit is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-085",
    "options": [
      "Maximum speed and least pressure",
      "Maximum pressure and least speed",
      "Both pressure and speed maximum",
      "Both pressure and speed least"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- By the continuity equation ($A v = \\text{const}$), narrowest area $A$ produces **maximum velocity $v$**.\n- By Bernoulli's equation ($P + \\frac{1}{2}\\rho v^2 = \\text{const}$), highest velocity $v$ corresponds to **least pressure $P$**.",
    "examTags": [
      "MP PMT 1992"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Water is flowing through a horizontal pipe of non-uniform cross-section. At the narrowest portion of the pipe, the water will have",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-086",
    "options": [
      "$A_1 / A_2$",
      "$A_2 / A_1$",
      "$\\sqrt{A_2 / A_1}$",
      "$\\sqrt{A_1 / A_2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$A_1 v_1 = A_2 v_2 \\implies \\frac{v_1}{v_2} = \\frac{A_2}{A_1}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A liquid flows in a horizontal tube from left to right where $A_1$ and $A_2$ are cross-sections of the two portions. The ratio of speeds $v_1 / v_2$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-087",
    "options": [
      "The velocity of every particle passing a given point is always the same in both magnitude and direction",
      "The speed of a particle is constant along the entire streamline",
      "The kinetic energies of all particles in the fluid are identical everywhere",
      "The streamlines can intersect each other"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn steady streamline flow, each fluid particle arriving at a specific fixed point in space possesses the exact same velocity (speed and direction) as the particle preceding it.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In a streamline flow of an ideal fluid,",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-088",
    "options": [
      "Dynamic lift of an aeroplane",
      "Viscosity meter",
      "Capillary rise",
      "Hydraulic press"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAerodynamic dynamic lift on aerofoils and spinning balls (Magnus effect) is a direct consequence of Bernoulli's principle.",
    "examTags": [
      "IIT-JEE 1994"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "An application of Bernoulli's equation for fluid flow is found in",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-089",
    "options": [
      "Bernoulli's theorem",
      "Boyle's law",
      "Archimedes' principle",
      "Newton's laws of motion"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nHigh-speed air blown across the top of a narrow vertical tube dipped in liquid creates a localized low pressure by Bernoulli's theorem, drawing the liquid up to be atomized into a fine spray.",
    "examTags": [
      "MP PMT 1992",
      "AFMC 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The working of an atomizer (perfume scent-spray or carburetor) depends upon",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-090",
    "options": [
      "Move up",
      "Move down",
      "Move erratically",
      "Remain at the same level"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBlowing air under the pan increases the air speed beneath it. According to Bernoulli's principle, pressure below the pan drops, creating a downward pressure difference that pulls the pan down.",
    "examTags": [
      "CPMT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "The pans of a physical balance are in equilibrium. When air is blown rapidly under the right hand pan, the right hand pan will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-091",
    "options": [
      "Gravitational head, pressure head, and velocity head",
      "Gravity, gravitational head, and velocity head",
      "Pressure head, gravitational head, and velocity head",
      "Gravity, pressure, and velocity head"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- $\\frac{P}{\\rho g}$ is the **pressure head** (dimension of length).\n- $h$ is the **gravitational/elevation head**.\n- $\\frac{v^2}{2g}$ is the **velocity head**.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In the standard form of Bernoulli's equation $\\frac{P}{\\rho g} + h + \\frac{v^2}{2g} = \\text{constant}$, the three individual terms are called respectively:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-092",
    "options": [
      "$282.8\\text{ cm/s}$",
      "$432.6\\text{ cm/s}$",
      "$632.6\\text{ cm/s}$",
      "$832.6\\text{ cm/s}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$h_v = \\frac{v^2}{2g} \\implies v = \\sqrt{2 g h_v}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$v = \\sqrt{2 \\times 1000 \\times 40} = \\sqrt{80000} = 200\\sqrt{2} \\approx 200 \\times 1.414 = 282.8\\text{ cm/s}$$",
    "examTags": [
      "CPMT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "At what speed will the velocity head of a stream of water be equal to $40\\text{ cm of water column}$? ($g = 1000\\text{ cm/s}^2$)",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-093",
    "options": [
      "Upthrust of air equal to the weight of displaced air",
      "Force due to the pressure difference between the upper and lower surfaces of the wings created by higher air speed above the wing",
      "Vertical component of thrust created by air currents striking the bottom of wings",
      "Force due to reaction of exhaust gases"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nDue to aerofoil camber, air flows faster over the top surface than the bottom surface ($v_{\\text{top}} > v_{\\text{bottom}}$). By Bernoulli's equation, $P_{\\text{top}} < P_{\\text{bottom}}$, creating an upward dynamic lift force $\\Delta P \\times A$ balancing the aircraft's weight.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The total weight of an aeroplane flying horizontally at constant altitude is balanced by",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-094",
    "options": [
      "$v_A = v_B$ and $P_B > P_A$",
      "$v_B > v_A$ and $P_A = P_B$",
      "$v_A = v_B$ and $P_A > P_B$",
      "$v_B < v_A$ and $P_B = P_A$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- By the equation of continuity ($A v = \\text{const}$), because the tube has a uniform cross-section ($A_A = A_B$), the velocities are equal: $v_A = v_B$.\n- Applying Bernoulli's equation between A (higher elevation $h_A$) and B (lower elevation $h_B$):\n$$P_A + \\frac{1}{2}\\rho v_A^2 + \\rho g h_A = P_B + \\frac{1}{2}\\rho v_B^2 + \\rho g h_B$$\nSince $v_A = v_B$ and $h_A > h_B$:\n$$P_B = P_A + \\rho g (h_A - h_B) \\implies P_B > P_A$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "An ideal liquid flows downwards through a vertical tube of uniform cross-section from point A to point B. The liquid has velocities $v_A, v_B$ and pressures $P_A, P_B$ at points A and B respectively. Which relations are true?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-095",
    "options": [
      "Volume flow rate is $A_1 v_1 = A_2 v_2$, $v_2^2 - v_1^2 = 2gh$, and total energy per unit mass is conserved",
      "$v_2 - v_1 = \\sqrt{2gh}$ only",
      "Rate of flow is not conserved",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n1. By continuity: $V = A_1 v_1 = A_2 v_2$.\n2. By Bernoulli's equation for horizontal flow:\n$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$$\nSince $P_1 - P_2 = h \\rho g$:\n$$h \\rho g = \\frac{1}{2}\\rho (v_2^2 - v_1^2) \\implies v_2^2 - v_1^2 = 2gh$$\n3. Energy per unit mass $\\frac{P}{\\rho} + \\frac{1}{2}v^2$ remains constant throughout.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A liquid flows through a horizontal tube. The velocities in the two sections of areas $A_1$ and $A_2$ are $v_1$ and $v_2$. If the difference in the liquid levels in the two vertical manometer tubes attached to the sections is $h$, which of the following statements are correct?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-096",
    "options": [
      "$27.8\\text{ m/s}$",
      "$41.0\\text{ m/s}$",
      "$9.6\\text{ m/s}$",
      "$19.7\\text{ m/s}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nApplying Bernoulli's theorem between the top of the gasoline tank and the puncture hole:\n$$P_{\\text{top}} + h \\rho g = P_0 + \\frac{1}{2}\\rho v^2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $\\Delta P_{\\text{gas}} = (3.10 - 1.00) \\times 1.01 \\times 10^5 = 2.10 \\times 1.01 \\times 10^5 = 2.121 \\times 10^5\\text{ Pa}$\n- Hydrostatic head: $h \\rho g = 53 \\times 660 \\times 9.8 = 3.428 \\times 10^5\\text{ Pa}$\n- Total excess pressure driving efflux:\n$$\\Delta P_{\\text{total}} = 2.121 \\times 10^5 + 3.428 \\times 10^5 = 5.549 \\times 10^5\\text{ Pa}$$\n- Efflux velocity:\n$$v = \\sqrt{\\frac{2 \\Delta P_{\\text{total}}}{\\rho}} = \\sqrt{\\frac{2 \\times 5.549 \\times 10^5}{660}} = \\sqrt{1681.5} \\approx 41.0\\text{ m/s}$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Hard",
    "questionText": "A sniper fires a rifle bullet into a gasoline tank making a hole $53.0\\text{ m}$ below the gasoline surface. The tank was sealed at an absolute pressure of $3.10\\text{ atm}$. The stored gasoline has a density of $660\\text{ kg/m}^3$. The velocity with which gasoline begins to shoot out into the atmosphere ($1.0\\text{ atm}$) from the hole is (Take $g = 9.8\\text{ m/s}^2$, $1\\text{ atm} = 1.01 \\times 10^5\\text{ Pa}$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-097",
    "options": [
      "Zero",
      "$20.0\\text{ cm}$",
      "$10.6\\text{ cm}$",
      "$40.0\\text{ cm}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe total stagnation head supported by the flowing water stream is:\n$$H = \\frac{v^2}{2g}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$H = \\frac{(2.45)^2}{2 \\times 9.8} = \\frac{6.0025}{19.6} = 0.30625\\text{ m} = 30.6\\text{ cm}$$\nSince the tube opening is already $10.6\\text{ cm}$ above the water level, the water jet shoots upward above the top orifice to a height:\n$$h_{\\text{jet}} = H - 10.6\\text{ cm} = 30.6 - 10.6 = 20.0\\text{ cm}$$",
    "examTags": [
      "AIIMS",
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Hard",
    "questionText": "An L-shaped Pitot tube with a small orifice is held in a water stream. The upper vertical end of the tube is $10.6\\text{ cm}$ above the water surface. What will be the height of the water jet emerging from the orifice if the stream velocity is $2.45\\text{ m/s}$? (Take $g = 9.8\\text{ m/s}^2$)",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-098",
    "options": [
      "Cambered wing with curved convex top surface and flatter bottom surface",
      "Cambered wing with curved convex bottom surface and flat top surface",
      "Rectangular symmetric flat cross-section",
      "Symmetric biconvex wing at zero angle of attack"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAn aerofoil has greater curvature on the upper surface, forcing air to travel a longer path at higher speed ($v_{\\text{top}} > v_{\\text{bottom}}$). By Bernoulli's equation, pressure above the wing drops below pressure below the wing ($P_{\\text{top}} < P_{\\text{bottom}}$), producing an upward aerodynamic lift.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In aerofoil design, in which cross-sectional shape is the net aerodynamic dynamic lift directed UPWARDS?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-099",
    "options": [
      "$\\frac{v^2}{2g}$",
      "$\\frac{g}{2v^2}$",
      "Does not rise at all",
      "$\\frac{2v^2}{g}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAt the stagnation point inside the mouth of the Pitot tube, kinetic energy of flow is completely converted into pressure head:\n$$\\frac{1}{2}\\rho v^2 = h \\rho g \\implies h = \\frac{v^2}{2g}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "An L-shaped glass tube is immersed in flowing water such that its horizontal opening faces directly into the flow. If the current speed is $v$, the water inside the vertical limb of the tube rises to a height",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-100",
    "options": [
      "$\\sqrt{D(H - D)}$",
      "$\\frac{D(H - D)}{2}$",
      "$2\\sqrt{D(H - D)}$",
      "$4\\sqrt{D(H - D)}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Efflux velocity: $v = \\sqrt{2gD}$\n- Time of fall from height $(H - D)$: $t = \\sqrt{\\frac{2(H - D)}{g}}$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$x = v \\times t = \\sqrt{2gD} \\times \\sqrt{\\frac{2(H - D)}{g}} = 2\\sqrt{D(H - D)}$$",
    "examTags": [
      "MNR 1992",
      "CPMT 2004"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A tank is filled with water up to a height $H$. Water escapes through a small hole at a depth $D$ below the free surface. The horizontal range $x$ where the water stream strikes the floor level at the base of the tank is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-101",
    "options": [
      "Hole number 4",
      "Hole number 3 ($45\\text{ cm}$)",
      "Hole number 2",
      "Hole number 1"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe horizontal range $x = 2\\sqrt{h(H - h)}$ is maximum when the hole is positioned exactly at mid-depth of the liquid column:\n$$h = \\frac{H}{2} = \\frac{90}{2} = 45\\text{ cm}$$\nThus, Hole number 3 ($45\\text{ cm}$) yields maximum range $x_{\\text{max}} = H = 90\\text{ cm}$.",
    "examTags": [
      "CPMT 1989"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A cylindrical vessel of height $90\\text{ cm}$ is filled to the brim. It has four holes 1, 2, 3, 4 at heights of $20\\text{ cm}, 30\\text{ cm}, 45\\text{ cm}$, and $50\\text{ cm}$ from the base floor. The water falling at the maximum horizontal distance from the vessel emerges from",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-102",
    "options": [
      "$9\\text{ minutes}$",
      "$7\\text{ minutes} \\approx 7.07\\text{ min}$",
      "$5\\text{ minutes}$",
      "$3\\text{ minutes}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTime to empty from height $H$ to zero is $t \\propto \\sqrt{H}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{t'}{t} = \\sqrt{\\frac{H/2}{H}} = \\frac{1}{\\sqrt{2}}$$\n$$t' = \\frac{10}{\\sqrt{2}} = \\frac{10}{1.414} \\approx 7.07\\text{ minutes} \\approx 7\\text{ minutes}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A rectangular vessel when full of water takes $10\\text{ minutes}$ to be emptied through an orifice in its bottom. How much time will it take to be emptied when initially only half-filled with water?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-103",
    "options": [
      "$\\sqrt{\\frac{2h}{g}}$",
      "$\\frac{D}{d}\\sqrt{\\frac{2h}{g}}$",
      "$\\frac{d}{D}\\sqrt{\\frac{2h}{g}}$",
      "$\\left(\\frac{d}{D - d}\\right)\\sqrt{\\frac{2h}{g}}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Velocity upon reaching liquid surface: $v = \\sqrt{2gh}$\n- Upward buoyant force $F_b = V D g$, downward weight $W = V d g$\n- Upward retardation: $a = \\frac{F_b - W}{m} = \\frac{V D g - V d g}{V d} = \\left(\\frac{D - d}{d}\\right) g$\n- Time to come to rest: $t = \\frac{v}{a} = \\frac{\\sqrt{2gh}}{\\left(\\frac{D - d}{d}\\right) g} = \\left(\\frac{d}{D - d}\\right)\\sqrt{\\frac{2h}{g}}$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Hard",
    "questionText": "A streamlined body of density $d$ falls through air from a height $h$ onto the surface of a liquid of density $D$ ($D > d$). Neglecting viscosity, the time after which the body will momentarily come to rest inside the liquid is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-104",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$2\\sqrt{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$T_1 \\propto (\\sqrt{H} - \\sqrt{H/\\eta})$$\n$$T_2 \\propto (\\sqrt{H/\\eta} - 0)$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nSince $T_1 = T_2$:\n$$\\sqrt{H} - \\sqrt{\\frac{H}{\\eta}} = \\sqrt{\\frac{H}{\\eta}} \\implies \\sqrt{H} = 2\\sqrt{\\frac{H}{\\eta}}$$\n$$1 = \\frac{2}{\\sqrt{\\eta}} \\implies \\sqrt{\\eta} = 2 \\implies \\eta = 4$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "A large tank is filled with water to height $H$. It takes time $T_1$ to decrease the water height to $H/\\eta$ ($\n\\eta > 1$), and time $T_2$ to drain the remaining water out. If $T_1 = T_2$, the value of $\\eta$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-105",
    "options": [
      "Same everywhere across the cross section",
      "Maximum in the middle and minimum near its banks",
      "Minimum in the middle and maximum near its banks",
      "Increases continuously from one bank to the other"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nDue to viscous friction against the river bed and side banks (no-slip boundary conditions), the velocity of water is lowest near the river banks and bottom, and reaches its maximum speed near the center of the surface.",
    "examTags": [
      "CBSE PMT 1988"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The velocity of water flowing in a natural river is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-106",
    "options": [
      "Remains unchanged",
      "Decreases",
      "Increases",
      "Increases or decreases depending on external pressure"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn liquids, viscosity arises primarily from intermolecular cohesive attractions. As temperature rises, molecular thermal motion weakens cohesive bonds, causing liquid viscosity to decrease rapidly.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "As the temperature of water increases, its dynamic viscosity",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-107",
    "options": [
      "Greater than the coefficient of viscosity for cold air",
      "Smaller than the coefficient of viscosity for cold air",
      "Same as the coefficient of viscosity for cold air",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn gases, viscosity arises from the momentum transport between adjacent layers via molecular diffusion ($\\eta \\propto \\sqrt{T}$). As temperature rises, average molecular speed and collision rate increase, making the viscosity of hot air greater than that of cold air.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "The coefficient of viscosity for hot air is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-108",
    "options": [
      "High viscosity index and suitable viscosity to maintain a lubricating film under load",
      "Extremely low viscosity",
      "Zero viscosity",
      "High density with low viscosity"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nA lubricant must possess sufficiently high viscosity so that under heavy pressure and mechanical friction between moving machine parts, the oil film does not squeeze out.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A good industrial machine lubricant should have",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-109",
    "options": [
      "Glycerine",
      "Water",
      "Kerosene",
      "All of them at the same time"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nGlycerine has by far the highest coefficient of viscosity ($\\eta_{\\text{glycerine}} \\gg \\eta_{\\text{water}} > \\eta_{\\text{kerosene}}$), producing the greatest internal viscous dissipation of kinetic energy into heat.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Three identical beakers A, B, and C contain glycerine, water, and kerosene respectively. All three are stirred vigorously with a rod and left on a table. The liquid which comes to rest at the earliest is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-110",
    "options": [
      "Proportional to $\\sqrt{h}$",
      "Proportional to $h$",
      "Proportional to $1/h$",
      "Almost independent of $h$ (terminal velocity)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nFor a large fall distance in a viscous fluid (air), the downward gravitational pull is quickly balanced by upward viscous drag ($6\\pi\\eta r v_T$) and buoyancy. The raindrop attains a constant terminal velocity $v_T$, making the final speed virtually independent of the initial height $h$.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A small raindrop of water falls from rest through a large height $h$ in air. Its final impact velocity is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-111",
    "options": [
      "$8$",
      "$\\frac{1}{8}$",
      "$16$",
      "$\\frac{1}{16}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAccording to **Poiseuille's equation**:\n$$V = \\frac{\\pi P r^4}{8 \\eta l} \\implies Q = \\frac{1}{8}$$",
    "examTags": [
      "DCE 2002"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The rate of flow of liquid in a capillary tube of radius $r$ and length $l$ under pressure difference $P$ is $V = \\frac{\\pi Q P r^4}{\\eta l}$. The value of the dimensionless constant $Q$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-112",
    "options": [
      "Pressure difference",
      "Volume of the liquid collected",
      "Length of the capillary tube",
      "Inner radius of the capillary tube"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nFrom Poiseuille's equation $\\eta = \\frac{\\pi P r^4}{8 V l}$, the fractional error is:\n$$\\frac{\\Delta \\eta}{\\eta} = \\frac{\\Delta P}{P} + 4\\left(\\frac{\\Delta r}{r}\\right) + \\frac{\\Delta V}{V} + \\frac{\\Delta l}{l}$$\nSince the inner radius $r$ appears to the fourth power ($r^4$), any measurement error in $r$ is magnified by a factor of 4.",
    "examTags": [
      "EAMCET 2001"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "In Poiseuille's method for determining the coefficient of viscosity of a liquid, the physical quantity that requires the greatest accuracy of measurement is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-113",
    "options": [
      "$r_1 + r_2$",
      "$\\sqrt{r_1^2 + r_2^2}$",
      "$\\sqrt{r_1^4 + r_2^4}$",
      "$(r_1^4 + r_2^4)^{1/4}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn parallel flow, total volume rate $V = V_1 + V_2$:\n$$\\frac{\\pi P r^4}{8\\eta l} = \\frac{\\pi P r_1^4}{8\\eta l} + \\frac{\\pi P r_2^4}{8\\eta l} \\implies r^4 = r_1^4 + r_2^4 \\implies r = (r_1^4 + r_2^4)^{1/4}$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Two capillary tubes of the same length $l$ but different radii $r_1$ and $r_2$ are fitted in parallel to the bottom of a vessel under pressure head $P$. The radius $r$ of a single tube of length $l$ that can replace the combination to deliver the same total flow rate is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-114",
    "options": [
      "$9.4\\text{ m}$",
      "$4.9\\text{ m}$",
      "$0.49\\text{ m}$",
      "$0.94\\text{ m}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn series connection, flow rate $V$ is identical through both tubes:\n$$V = \\frac{\\pi P_1 r_1^4}{8\\eta l} = \\frac{\\pi P_2 r_2^4}{8\\eta l} \\implies \\frac{P_1}{P_2} = \\left(\\frac{r_2}{r_1}\\right)^4 = \\left(\\frac{2}{1}\\right)^4 = 16$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$P_1 = 16 P_2$$\n$$P_{\\text{total}} = P_1 + P_2 = 16 P_2 + P_2 = 17 P_2 = 1\\text{ m}$$\n$$P_2 = \\frac{1}{17}\\text{ m}, \\quad P_1 = \\frac{16}{17}\\text{ m} \\approx 0.941\\text{ m} \\approx 0.94\\text{ m}$$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Two capillary tubes of the same length and radii in the ratio $1 : 2$ are connected in series. A liquid flows through them in streamlined condition. If the total pressure drop across the entire combination is $1\\text{ m of water}$, the pressure difference across the first (narrower) capillary is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-115",
    "options": [
      "$4Q$",
      "$Q$",
      "$\\frac{Q}{4}$",
      "$\\frac{Q}{8}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nPoiseuille flow: $Q \\propto P r^4$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{Q'}{Q} = \\left(\\frac{P'}{P}\\right) \\left(\\frac{r'}{r}\\right)^4 = (2) \\times \\left(\\frac{1}{2}\\right)^4 = 2 \\times \\frac{1}{16} = \\frac{1}{8} \\implies Q' = \\frac{Q}{8}$$",
    "examTags": [
      "NCERT"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Water flows in a streamlined manner through a capillary tube of radius $a$ under pressure difference $P$ at flow rate $Q$. If the radius is reduced to $a/2$ and the pressure difference is increased to $2P$, the new flow rate becomes",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-116",
    "options": [
      "A uniform flat profile across the entire diameter",
      "A linear profile increasing from left to right",
      "A parabolic velocity profile with zero speed at walls and maximum speed along the central axis",
      "An inverted parabolic profile"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nFor Poiseuille laminar flow through a pipe of radius $R$, the velocity at radial distance $r$ is:\n$$v(r) = \\frac{P}{4\\eta l}(R^2 - r^2)$$\nThis represents a symmetrical **parabolic velocity profile**.",
    "examTags": [
      "BCECE 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A viscous fluid is flowing in steady streamline condition through a cylindrical tube. The velocity distribution of the fluid across the tube cross-section is represented by",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-117",
    "options": [
      "$3\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$8\\text{ m/s}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$A_1 v_1 = A_2 v_2 \\implies v_2 = v_1 \\left(\\frac{D_1}{D_2}\\right)^2 = 3 \\times \\left(\\frac{4}{2}\\right)^2 = 3 \\times 4 = 12\\text{ m/s}$$",
    "examTags": [
      "BCECE 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Water flows in a pipe of diameter $4\\text{ cm}$ with velocity $3\\text{ m/s}$. The water then enters a constriction of diameter $2\\text{ cm}$. The velocity of water in the constricted pipe is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-118",
    "options": [
      "$\\frac{8}{9} X$",
      "$\\frac{9}{8} X$",
      "$\\frac{5}{7} X$",
      "$\\frac{7}{5} X$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Fluid resistance of first tube: $R_1 = \\frac{8\\eta L}{\\pi R^4} = R_0$\n- Fluid resistance of second tube: $R_2 = \\frac{8\\eta (2L)}{\\pi (2R)^4} = \\frac{2}{16} \\left(\\frac{8\\eta L}{\\pi R^4}\\right) = \\frac{1}{8} R_0$\n- Equivalent series resistance:\n$$R_{\\text{eq}} = R_1 + R_2 = R_0 + \\frac{1}{8}R_0 = \\frac{9}{8}R_0$$\n- Net rate of flow:\n$$V_{\\text{net}} = \\frac{P}{R_{\\text{eq}}} = \\frac{P}{\\frac{9}{8}R_0} = \\frac{8}{9}\\left(\\frac{P}{R_0}\\right) = \\frac{8}{9} X$$",
    "examTags": [
      "DCE 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Two capillaries of length $L$ and $2L$ and radii $R$ and $2R$ are connected in series. The net volume flow rate through them under pressure $P$ (given $X = \\frac{\\pi P R^4}{8\\eta L}$) is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-119",
    "options": [
      "$1 < 2 < 3$",
      "$2 < 3 < 1$",
      "$3 < 2 < 1$",
      "$3 < 1 < 2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nStreamlined shapes minimize wake turbulence and form drag, while flat blunt surfaces create large pressure wakes. Thus, air drag is least for streamlined teardrop/cigar shapes (3), intermediate for spheres (2), and largest for flat bluff discs (1): $3 < 2 < 1$.",
    "examTags": [
      "KCET 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "When a body falls in air, air drag depends significantly on its shape. Consider three bodies of identical frontal cross-sectional area: (1) Flat Circular Disc, (2) Sphere (Ball), (3) Streamlined Cigar-shaped Body. The correct order of increasing air resistance is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-120",
    "options": [
      "Decreases",
      "Increases",
      "Remains the same",
      "First increases then decreases"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAs water falls under gravity, its downward speed increases ($v = \\sqrt{v_0^2 + 2gy}$). By the continuity equation $A v = \\text{constant}$, as velocity $v$ increases, the cross-sectional area $A$ must progressively **decrease**, forming a tapering stream.",
    "examTags": [
      "Orissa JEE 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "As water falls vertically from a tap down a streamline, its cross-sectional area",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-121",
    "options": [
      "$7\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$10\\text{ m/s}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\frac{1}{2}\\rho v^2 = P_1 - P_2 = (4.5 - 4.0) \\times 10^5 = 0.5 \\times 10^5\\text{ Pa}$$\n$$v = \\sqrt{\\frac{2 \\times 0.5 \\times 10^5}{10^3}} = \\sqrt{100} = 10\\text{ m/s}$$",
    "examTags": [
      "Kerala PET 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A manometer connected to a closed tap reads $4.5 \\times 10^5\\text{ Pa}$. When the tap is opened, the reading of the manometer falls to $4.0 \\times 10^5\\text{ Pa}$. The velocity of flow of water is (Take $\\rho = 10^3\\text{ kg/m}^3$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-122",
    "options": [
      "$\\frac{r^2 g}{9\\eta}(\\rho - 2\\sigma)$",
      "$\\frac{r^2 g}{9\\eta}(2\\rho - \\sigma)$",
      "$\\frac{r^2 g}{9\\eta}(\\rho - \\sigma)$",
      "$\\frac{2r^2 g}{9\\eta}(\\rho - \\sigma)$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nEquation of motion for the falling sphere:\n$$m g - F_b - 6\\pi\\eta r v = m a$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nGiven $a = g/2$:\n$$m g - F_b - 6\\pi\\eta r v = m \\left(\\frac{g}{2}\\right)$$\n$$6\\pi\\eta r v = m\\left(\\frac{g}{2}\\right) - F_b = \\left(\\frac{4}{3}\\pi r^3 \\rho\\right)\\left(\\frac{g}{2}\\right) - \\left(\\frac{4}{3}\\pi r^3 \\sigma\\right) g$$\n$$6\\pi\\eta r v = \\frac{4}{3}\\pi r^3 g \\left(\\frac{\\rho}{2} - \\sigma\\right)$$\nFor terminal velocity, $a = 0 \\implies v_T = \\frac{2r^2 g(\\rho - \\sigma)}{9\\eta}$.\nWhen $a = g/2$, $v = \\frac{1}{2} v_T = \\frac{r^2 g(\\rho - \\sigma)}{9\\eta}$.",
    "examTags": [
      "Kerala PET 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Hard",
    "questionText": "What is the velocity $v$ of a metallic sphere of radius $r$ and density $\\rho$ falling in a viscous liquid of density $\\sigma$ and viscosity $\\eta$ at the instant when its acceleration is one-half of a freely falling body ($a = g/2$)?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-123",
    "options": [
      "Thrust",
      "Pressure",
      "Angle (dimensionless $[M^0 L^0 T^0]$)",
      "Viscosity"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy dimensional homogeneity, every term in Bernoulli's equation ($P, \\frac{1}{2}\\rho v^2, \\rho g h$, and $K$) has the dimensions of pressure $[M L^{-1} T^{-2}]$. Therefore, the ratio $K/P$ is **dimensionless** $[M^0 L^0 T^0]$, matching the dimensions of **Angle** (radian).",
    "examTags": [
      "AFMC 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Consider the standard Bernoulli equation $P + \\frac{1}{2}\\rho v^2 + \\rho g h = K$. The dimensions of the ratio $K/P$ are identical to the dimensions of",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-124",
    "options": [
      "$2v$",
      "$v$",
      "$v/2$",
      "$4v$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$A_A v_A = A_B v_B \\implies v_B = v_A \\left(\\frac{r_A}{r_B}\\right)^2 = v \\left(\\frac{2r}{r}\\right)^2 = 4v$$",
    "examTags": [
      "Kerala PMT 2005"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "An incompressible fluid flows steadily through a cylindrical pipe which has radius $2r$ at point A and radius $r$ at point B further along the flow. If the velocity at point A is $v$, its velocity at point B is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-125",
    "options": [
      "$1.2\\text{ cm}$",
      "$2.35\\text{ cm}$",
      "$0.56\\text{ cm}$",
      "$0.8\\text{ cm}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nVolume of mercury pushed down from the left limb must equal volume of mercury rising in the right limb:\n$$A_L h_1 = A_R h_2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Given $A_R = 4 A_L$, if mercury rises by $x$ in the right limb ($h_2 = x$), it falls by $4x$ in the left limb ($h_1 = 4x$).\n- Total height of water column added in left limb: $H_w = 36 + 4x$.\n- Equating hydrostatic pressures at the new mercury interface:\n$$H_w \\rho_w g = (h_1 + h_2) \\rho_{\\text{Hg}} g$$\n$$(36 + 4x) \\times 1 = (4x + x) \\times 13.6 = 5x \\times 13.6 = 68x$$\n$$36 = 68x - 4x = 64x$$\n$$x = \\frac{36}{64} = 0.5625\\text{ cm} \\approx 0.56\\text{ cm}$$",
    "examTags": [
      "KCET 2005",
      "IIT-JEE"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "In a U-tube, the cross-sectional area of the left limb is one-fourth that of the right limb ($A_L = A_R / 4$). The tube contains mercury (density $= 13.6\\text{ g/cm}^3$). The initial mercury level in the narrow left limb is $36\\text{ cm}$ below the open top. What will be the rise in mercury level in the right limb if the left limb is filled to the top with water?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-126",
    "options": [
      "$\\frac{5}{4} d$",
      "$\\frac{4}{5} d$",
      "$d$",
      "$\\frac{d}{5}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTotal weight of cylinder = Sum of buoyant upthrusts from both liquids:\n$$V D g = V_1 d g + V_2 (2d) g$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\left(\\frac{A}{5} L\\right) D g = \\left(\\frac{A}{5} \\times \\frac{3L}{4}\\right) d g + \\left(\\frac{A}{5} \\times \\frac{L}{4}\\right) (2d) g$$\n$$L D = \\frac{3}{4} L d + \\frac{2}{4} L d = \\frac{5}{4} L d \\implies D = \\frac{5}{4} d$$",
    "examTags": [
      "IIT-JEE 1995"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A homogeneous solid cylinder of length $L$ and cross-sectional area $A/5$ floats with its axis vertical at a liquid-liquid interface. The lower liquid has density $2d$ and the upper liquid has density $d$. If length $L/4$ is in the denser liquid and $3L/4$ is in the lighter liquid, the density $D$ of the solid is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-127",
    "options": [
      "$l$ decreases and $h$ increases",
      "$l$ increases and $h$ decreases",
      "Both $l$ and $h$ increase",
      "Both $l$ and $h$ decrease"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n1. **For $l$:** When the coin falls off, the total load on the wooden block decreases, so the block rises and its submerged depth $l$ **decreases**.\n2. **For $h$:** When the coin was on the block, it displaced water equal to its **weight** ($V_1 = m / \\rho_w$). At the bottom, the coin displaces water equal only to its **volume** ($V_2 = m / \\rho_{\\text{coin}}$). Because $\\rho_{\\text{coin}} > \\rho_w$, $V_2 < V_1$, so total water height $h$ **decreases**.\nBoth $l$ and $h$ decrease.",
    "examTags": [
      "IIT-JEE 2002"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A wooden block with a heavy metal coin placed on its top floats in water. The submerged depth of the block is $l$ and the total water height in the beaker is $h$. After some time, the coin falls off the block and sinks to the bottom of the beaker. Then",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-128",
    "options": [
      "$3.3$",
      "$6.4$",
      "$7.2$",
      "$12.8$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Weight of sphere} = \\text{Upthrust by oil} + \\text{Upthrust by mercury}$$\n$$V \\rho g = \\left(\\frac{V}{2}\\right) \\rho_{\\text{oil}} g + \\left(\\frac{V}{2}\\right) \\rho_{\\text{Hg}} g$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\rho = \\frac{\\rho_{\\text{oil}} + \\rho_{\\text{Hg}}}{2} = \\frac{0.8 + 13.6}{2} = \\frac{14.4}{2} = 7.2\\text{ g/cm}^3$$",
    "examTags": [
      "IIT-JEE 1988"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Easy",
    "questionText": "A vessel contains oil (density $= 0.8\\text{ g/cm}^3$) floating over mercury (density $= 13.6\\text{ g/cm}^3$). A homogeneous solid sphere floats with exactly half of its volume immersed in mercury and the other half in oil. The density of the sphere in $\\text{g/cm}^3$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-129",
    "options": [
      "Zero",
      "Equal to the weight of the liquid displaced",
      "Equal to the weight of the body in air",
      "Equal to the weight of the immersed portion"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBuoyant upthrust is $F_b = V \\rho g_{\\text{eff}}$. In free fall, $g_{\\text{eff}} = g - g = 0$, so the buoyant force becomes identically **zero**.",
    "examTags": [
      "IIT-JEE 1982"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Easy",
    "questionText": "A body floats in a liquid contained in a beaker. If the whole system is allowed to fall freely under gravity ($a = g$), the buoyant upthrust on the body due to the liquid becomes",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-130",
    "options": [
      "$\\frac{r \\omega}{2g}$",
      "$\\frac{r^2 \\omega^2}{2g}$",
      "$\\sqrt{2 g r \\omega}$",
      "$\\frac{\\omega^2}{2 g r^2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn a rotating fluid frame, centrifugal acceleration $\\omega^2 x$ creates a radial pressure gradient $\\frac{\\partial P}{\\partial x} = \\rho \\omega^2 x$. Integrating from $x = 0$ to $x = r$:\n$$P(r) - P(0) = \\frac{1}{2}\\rho \\omega^2 r^2$$\nSince $P(r) - P(0) = h \\rho g$:\n$$h = \\frac{r^2 \\omega^2}{2g}$$",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A liquid of density $\\rho$ is kept in a cylindrical vessel of radius $r$ which is rotated about its central vertical axis with angular velocity $\\omega$. The difference in heights of the liquid surface at the edge and at the center of the vessel is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-131",
    "options": [
      "$50\\text{ m}^2\\text{/s}^2$",
      "$50.5\\text{ m}^2\\text{/s}^2$",
      "$51\\text{ m}^2\\text{/s}^2$",
      "$52\\text{ m}^2\\text{/s}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAccounting for the downward descent velocity of the free surface ($A V = a v \\implies V = \\frac{a}{A}v$):\n$$P_0 + \\rho g h + \\frac{1}{2}\\rho V^2 = P_0 + \\frac{1}{2}\\rho v^2$$\n$$2gh = v^2 - V^2 = v^2 \\left[1 - \\left(\\frac{a}{A}\\right)^2\\right] \\implies v^2 = \\frac{2gh}{1 - (a/A)^2}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Depth of orifice below water surface: $h = 3.000 - 0.525 = 2.475\\text{ m}$\n- $a/A = 0.1 \\implies (a/A)^2 = 0.01$\n$$v^2 = \\frac{2 \\times 10 \\times 2.475}{1 - 0.01} = \\frac{49.5}{0.99} = 50\\text{ m}^2\\text{/s}^2$$",
    "examTags": [
      "IIT-JEE 2004"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Water is filled in a cylindrical container to height $3\\text{ m}$. The ratio of the cross-sectional area of the orifice to that of the container is $a/A = 0.1$. If the orifice is at height $52.5\\text{ cm} = 0.525\\text{ m}$ from the base, the square of the speed of liquid coming out from the orifice is ($g = 10\\text{ m/s}^2$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-132",
    "options": [
      "$2\\pi L$",
      "$\\frac{L}{\\sqrt{2\\pi}}$",
      "$L$",
      "$\\frac{L}{2\\pi}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Discharge } Q = \\text{Area} \\times \\text{Velocity} = A \\sqrt{2gh}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- For square hole: $Q_1 = L^2 \\sqrt{2gy}$\n- For circular hole: $Q_2 = (\\pi R^2) \\sqrt{2g(4y)} = 2\\pi R^2 \\sqrt{2gy}$\nSince $Q_1 = Q_2$:\n$$L^2 \\sqrt{2gy} = 2\\pi R^2 \\sqrt{2gy} \\implies L^2 = 2\\pi R^2 \\implies R = \\frac{L}{\\sqrt{2\\pi}}$$",
    "examTags": [
      "IIT-JEE 2000"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A large open tank has two holes in its vertical wall: one is a square hole of side $L$ at depth $y$ from the surface, and the other is a circular hole of radius $R$ at depth $4y$. If the volume discharge rates from both holes are equal, then radius $R$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-133",
    "options": [
      "Increase of $12.5\\text{ g-wt}$",
      "Increase of $6.25\\text{ g-wt}$",
      "Decrease of $12.5\\text{ g-wt}$",
      "Decrease of $6.25\\text{ g-wt}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWhen water shoots out of the bottom orifice with velocity $v = \\sqrt{2gh}$, the reaction force on the vessel acts upwards:\n$$F_{\\text{reaction}} = \\frac{dp}{dt} = (\\rho a v) v = \\rho a v^2 = \\rho a (2gh) = 2 a \\rho g h$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nIn gram-force / gm-wt:\n$$\\Delta W = 2 a \\rho h = 2 \\times \\frac{1}{4}\\text{ cm}^2 \\times 1\\text{ g/cm}^3 \\times 25\\text{ cm} = 12.5\\text{ gm-wt}$$\nSince the reaction force pushes upwards, the effective weight on the balance decreases by $12.5\\text{ gm-wt}$.",
    "examTags": [
      "IIT-JEE",
      "AIIMS"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A cylinder containing water up to a height of $25\\text{ cm}$ has a hole of cross-section $1/4\\text{ cm}^2$ at its bottom. It is counterpoised in a balance. What is the initial change in the balancing weight when water begins to flow out? (Take $g = 980\\text{ cm/s}^2$)",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-134",
    "options": [
      "$\\rho a g h$",
      "$\\frac{2gh}{\\rho a}$",
      "$2\\rho a g h$",
      "$\\frac{\\rho g h}{a}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Reaction thrust from lower hole B (depth $h_B$): $F_B = \\rho a v_B^2 = \\rho a (2g h_B)$\n- Reaction thrust from upper hole A (depth $h_A$): $F_A = \\rho a v_A^2 = \\rho a (2g h_A)$\n- Net unbalanced thrust on the tank:\n$$F_{\\text{net}} = F_B - F_A = 2\\rho a g (h_B - h_A) = 2\\rho a g h$$\nAn equal and opposite force $2\\rho a g h$ must be applied to maintain equilibrium.",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A tank containing liquid of density $\\rho$ rests on a smooth horizontal surface. Two identical holes of area $a$ are made on opposite sides of the tank with a vertical height difference $h$ between them. The net horizontal force required to keep the tank in equilibrium is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-135",
    "options": [
      "$\\frac{n^2 h}{(n^2 + 1)s}$",
      "$\\frac{h}{(n^2 + 1)s}$",
      "$\\frac{h}{(n + 1)^2 s}$",
      "$\\frac{h}{n^2 s}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Area of left vessel $= A$, area of right vessel $= n^2 A$.\n- If mercury falls by $h_1$ in the left limb and rises by $h_2$ in the right limb: $A h_1 = (n^2 A) h_2 \\implies h_1 = n^2 h_2$.\n- Total difference in mercury levels $= h_1 + h_2 = (n^2 + 1)h_2$.\n- Equating hydrostatic pressures:\n$$h \\rho_w g = (h_1 + h_2) \\rho_{\\text{Hg}} g = (n^2 + 1)h_2 (s \\rho_w) g$$\n$$h = (n^2 + 1) s h_2 \\implies h_2 = \\frac{h}{(n^2 + 1)s}$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Two communicating vessels contain mercury. The diameter of the right vessel is $n$ times larger than that of the left vessel. If a column of water of height $h$ is poured into the left vessel, the mercury level will rise in the right-hand vessel by (where $s$ is relative density of mercury):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-136",
    "options": [
      "$\\sin\\theta = \\frac{1}{2}\\sqrt{\\frac{\\rho_0}{\\rho}}$",
      "$\\sin\\theta = \\frac{1}{2}\\frac{\\rho_0}{\\rho}$",
      "$\\sin\\theta = \\sqrt{\\frac{\\rho}{\\rho_0}}$",
      "$\\sin\\theta = \\frac{\\rho_0}{\\rho}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nLet immersed length of rod be $l$. Depth $h = l \\sin\\theta = L/2 \\implies \\sin\\theta = \\frac{L}{2l}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\nTaking torque about the bottom pivot P at equilibrium:\n- Torque of weight $W = A L \\rho g$ acting at $L/2$: $\\tau_W = (A L \\rho g)\\left(\\frac{L}{2}\\cos\\theta\\right)$\n- Torque of buoyancy $F_b = A l \\rho_0 g$ acting at $l/2$: $\\tau_b = (A l \\rho_0 g)\\left(\\frac{l}{2}\\cos\\theta\\right)$\n$$\\frac{1}{2} A L^2 \\rho g \\cos\\theta = \\frac{1}{2} A l^2 \\rho_0 g \\cos\\theta$$\n$$L^2 \\rho = l^2 \\rho_0 \\implies l = L\\sqrt{\\frac{\\rho}{\\rho_0}}$$\nSubstitute $l$ into $\\sin\\theta$:\n$$\\sin\\theta = \\frac{L}{2l} = \\frac{L}{2 L\\sqrt{\\frac{\\rho}{\\rho_0}}} = \\frac{1}{2}\\sqrt{\\frac{\\rho_0}{\\rho}}$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A uniform thin rod of density $\\rho$ is pivoted at its lower end resting on the bottom of a wide tank containing liquid of density $\\rho_0$ ($\\rho_0 > \\rho$). The depth of liquid is half the length of the rod ($h = L/2$). In equilibrium, the rod makes an angle $\\theta$ with the horizontal given by",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-137",
    "options": [
      "Remain the same",
      "Rise",
      "Lower",
      "Depend on atmospheric pressure"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Volume of liquid displaced by floating ice of mass $M$: $V_{\\text{displaced}} = \\frac{M}{\\rho_{\\text{liquid}}} = \\frac{M}{1.2}$.\n- Volume of water formed after melting: $V_{\\text{water}} = \\frac{M}{\\rho_{\\text{water}}} = \\frac{M}{1.0}$.\n- Since $V_{\\text{water}} = \\frac{M}{1.0} > \\frac{M}{1.2} = V_{\\text{displaced}}$, the molten water adds more volume than the ice originally displaced, causing the liquid level to **rise**.",
    "examTags": [
      "IIT-JEE 1994"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A block of ice floats on a liquid of density $1.2\\text{ g/cm}^3$ in a beaker. When the ice melts completely, the level of liquid in the beaker will",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-138",
    "options": [
      "$\\frac{A}{a}\\sqrt{\\frac{2}{g}}\\left[\\sqrt{H_1} - \\sqrt{H_2}\\right]$",
      "$\\sqrt{2gh}$",
      "$\\sqrt{2gh(H_1 - H_2)}$",
      "$\\frac{A}{a}\\sqrt{\\frac{g}{2}}\\left[\\sqrt{H_1} - \\sqrt{H_2}\\right]$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$-A \\frac{dh}{dt} = a \\sqrt{2gh} \\implies dt = -\\frac{A}{a\\sqrt{2g}} h^{-1/2} dh$$\nIntegrating from $H_1$ to $H_2$:\n$$t = \\frac{A}{a}\\sqrt{\\frac{2}{g}}\\left[\\sqrt{H_1} - \\sqrt{H_2}\\right]$$",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A vessel of cross-sectional area $A$ contains liquid to a height $H_1$. It has an orifice of area $a$ at the bottom. The time taken to decrease the liquid level from $H_1$ to $H_2$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "critical-thinking"
    ]
  },
  {
    "id": "errorless-phy-flu-139",
    "options": [
      "A curve starting from origin, rising with decreasing slope and becoming horizontal at terminal velocity $v_T$",
      "A straight line with constant positive slope ($v \\propto y$)",
      "A parabola curving upwards ($v \\propto y^2$)",
      "A curve that rises to a peak and then drops to zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAs the lead shot accelerates, viscous retarding force ($6\\pi\\eta r v$) increases, decreasing the net acceleration until terminal velocity $v_T$ is reached where velocity becomes strictly constant.",
    "examTags": [
      "AIIMS 2003"
    ],
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "A lead shot of $1\\text{ mm}$ diameter falls through a long column of glycerine. The variation of its velocity $v$ with distance covered $y$ is represented by",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-flu-140",
    "options": [
      "Curve A (constantly accelerating linearly)",
      "Curve B (accelerating smoothly from rest and plateauing to constant terminal velocity)",
      "Curve C (exponentially decaying to zero)",
      "Curve D (horizontal straight line from time $t=0$)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nThe velocity vs time relationship is $v(t) = v_T (1 - e^{-t/\\tau})$, which starts from $v=0$ with initial slope $g$ and approaches terminal velocity $v_T$ asymptotically (Curve B).",
    "examTags": [
      "CPMT 1988"
    ],
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "A small spherical solid ball is dropped from a great height in a viscous liquid. Its journey in the liquid is best described by which curve?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-flu-141",
    "options": [
      "Parabola with maximum at wall",
      "Straight line increasing linearly",
      "Constant velocity",
      "A curve reaching maximum intermediate speed and dropping to zero at the outer boundary wall (no-slip condition)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nNear the center, fluid rotates like a vortex, while at the outer boundary wall, viscous shear enforces the no-slip condition ($v = 0$ at $X = R$). Thus, velocity peaks at an intermediate radius and drops to zero at the container wall.",
    "examTags": [
      "IIT-JEE"
    ],
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A stirred cup of tea rotates smoothly without turbulence. A graph showing the tangential speed $v$ with which the liquid crosses points at distance $X$ from center O along a radius XO looks like",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-flu-142",
    "options": [
      "A profile having uniform high pressure at the ends and a sharp depression (dip) in the middle constricted region",
      "A profile with a high pressure peak in the middle",
      "A linearly increasing pressure along the duct",
      "A constant pressure everywhere"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn the narrow throat, velocity $v$ is highest by the continuity equation. By Bernoulli's principle, pressure $P = P_0 - \\frac{1}{2}\\rho v^2$ drops to a distinct minimum at the throat (Venturi effect).",
    "examTags": [
      "NCERT"
    ],
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Water flows through a frictionless duct with a constriction in the middle. The pressure $P$ along the axis of flow is best represented by",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-flu-143",
    "options": [
      "A straight line with negative slope",
      "A parabola opening upward",
      "A step function",
      "An asymptotic saturation curve starting from $v=0$ and leveling off at terminal velocity $v_T$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$v(t) = v_T \\left(1 - e^{-6\\pi\\eta r t / m}\\right)$$\nVelocity rises from zero and smoothly saturates at the horizontal asymptote $v = v_T$.",
    "examTags": [
      "CPMT 1990"
    ],
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which of the following curves correctly shows the variation of downward velocity $v$ with time $t$ for a small spherical body falling in a deep column of viscous liquid?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-flu-144",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Hydraulic lifts multiply force based on Pascal's principle ($P_1 = P_2 \\implies F_2 = F_1 \\frac{A_2}{A_1}$).\n- **Reason is TRUE:** Pressure is indeed defined as force/thrust per unit area, but the core mechanism of a hydraulic lift is the *undiminished transmission of pressure* throughout an enclosed fluid, not merely the definition of pressure.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Pascal's law is the basic working principle of a hydraulic lift.\n**Reason (R):** Pressure is defined as normal thrust acting per unit area.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-145",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** The extra hydrostatic column of blood of height $h \\approx 1.5\\text{ m}$ adds a significant pressure head $\\Delta P = h \\rho_{\\text{blood}} g$ at the feet relative to the head.\n- **Reason is TRUE and provides the exact explanation:** $P = h \\rho g$.",
    "examTags": [
      "AIIMS 1996"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The blood pressure in humans is greater at the feet than at the brain in an upright standing posture.\n**Reason (R):** Hydrostatic pressure of a liquid column is directly proportional to height, liquid density, and acceleration due to gravity ($P = h \\rho g$).\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-146",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is FALSE:** Fluid pressure transmits equally in all directions at a point without any unique spatial direction, making it a **scalar quantity** (or tensor).\n- **Reason is TRUE:** Force is a vector quantity, but pressure is the ratio of normal force magnitude to area, carrying no directional orientation.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Hydrostatic pressure is a vector quantity.\n**Reason (R):** Pressure is force divided by area, and force is a vector quantity.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-147",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** A body will rise to the surface if $F_b > W$ when fully immersed ($\n\\rho_{\\text{body}} < \\rho_{\\text{fluid}}$).\n- **Reason is FALSE as an explanation of floatation rise:** At floating equilibrium, upward thrust matches weight ($F_b = W$), but the condition to emerge and float from fully submerged depth requires $F_b > W$.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** For a body to rise to the surface and float, the upward buoyant upthrust when fully submerged must exceed the actual weight of the body.\n**Reason (R):** In steady floating equilibrium, the body experiences zero net vertical force.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-148",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is FALSE:** If the man drinks mass $m$ of water, the combined mass of (boat + man) increases by $m$, causing the boat to displace an extra volume $m / \\rho_w$ of water. This exactly compensates for the volume $m / \\rho_w$ removed from the pond, keeping the pond water level **unchanged**.\n- **Reason is TRUE:** By Archimedes' principle, $W_{\\text{displaced}} = W_{\\text{total}}$.",
    "examTags": [
      "AIIMS 1998"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** A man sits in a boat floating on a pond. If the man drinks some water from the pond, the water level in the pond decreases.\n**Reason (R):** According to Archimedes' principle, the weight of liquid displaced by a floating body is equal to the total weight of the body.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-149",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Water level does not change upon melting.\n- **Reason is TRUE and correctly explains (A):** The floating ice of mass $M$ displaces volume $V_d = M / \\rho_w$. Upon melting, it forms liquid water of exact same volume $V_w = M / \\rho_w$, perfectly filling the cavity it originally displaced.",
    "examTags": [
      "AIIMS 1997"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** When a piece of ice floating in water melts completely, the level of water in the container remains unchanged.\n**Reason (R):** According to Archimedes' principle, the weight of water displaced by floating ice equals the weight of water formed after the ice melts.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-150",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Narrower section produces higher flow speed.\n- **Reason is TRUE and correctly explains (A):** Conservation of mass for incompressible fluid dictates $A_1 v_1 = A_2 v_2 \\implies v \\propto 1/A$.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The velocity of a liquid increases when it flows from a broader pipe into a narrower pipe.\n**Reason (R):** According to the equation of continuity, the product of cross-sectional area and velocity remains constant ($A v = \\text{constant}$).\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-151",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Gravity initially accelerates the parachutist until air resistance grows to match gravity pull ($F_{\\text{drag}} = m g$), after which velocity remains constant.\n- **Reason is TRUE:** That constant velocity is defined as terminal velocity, but the definition itself is not the dynamic explanation of why acceleration ceases (force equilibrium is the cause).",
    "examTags": [
      "AIIMS 1999"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The downward velocity of a parachutist jumping from an aircraft first increases and then becomes constant.\n**Reason (R):** The constant maximum velocity attained by a falling body in a viscous fluid is called terminal velocity.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-152",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** High pressure regions correspond to low flow speed.\n- **Reason is TRUE and correctly explains (A):** $P + \\frac{1}{2}\\rho v^2 = \\text{constant}$. If $v$ decreases, $P$ must increase to preserve constant total mechanical energy.",
    "examTags": [
      "AIIMS 2000"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The velocity of streamline flow of a liquid is smaller where the pressure is larger, and vice versa.\n**Reason (R):** According to Bernoulli's theorem, for the horizontal streamline flow of an ideal liquid, the total energy per unit volume ($P + \\frac{1}{2}\\rho v^2$) remains constant.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-153",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Streamlining guides air smoothly along the body surface.\n- **Reason is FALSE:** Streamlining is intentionally chosen to **minimize** (not maximize) aerodynamic drag and eddy formation.",
    "examTags": [
      "AIIMS 2001"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The front of an automobile or aircraft is designed with a streamlined shape.\n**Reason (R):** A streamlined shape ensures that the drag resistance offered by the surrounding fluid is maximum.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-154",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** By Poiseuille's law, flow rate $V = \\frac{\\pi P r^4}{8\\eta l}$. Flow rate depends on the **fourth power of radius** ($r^4$) but only linearly on pressure $P$.\n- **Reason is FALSE:** Flow rate is directly proportional to thumb pressure $P$, not independent of it.",
    "examTags": [
      "AIIMS 2002"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The bore diameter of a hypodermic syringe needle controls the injection flow rate much more effectively than the thumb pressure exerted by a doctor.\n**Reason (R):** Flow rate through a capillary needle is independent of the thumb pressure exerted by the doctor.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-155",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Reaction thrust $F = \\rho a v^2 = 2 a \\rho g h$ pushes backward.\n- **Reason is TRUE and correctly explains (A):** Newton's third law and linear momentum conservation govern the recoil thrust of the fluid jet.",
    "examTags": [
      "AIIMS 2003"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** A fluid shooting out horizontally from a small orifice in a container exerts a backward thrust on the vessel.\n**Reason (R):** By conservation of linear momentum, the momentum carried away by the ejected fluid jet imparts an equal and opposite backward momentum to the container.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-156",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Stable equilibrium requires $M$ to be above $G$.\n- **Reason is TRUE and correctly explains (A):** If metacentre $M$ is above $G$, tilting creates a restoring couple that rights the vessel. If $M$ is below $G$, an overturning couple capsizes the ship.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** For a floating ship to remain in stable equilibrium, its metacentre must lie above its centre of gravity.\n**Reason (R):** When tilted, the restoring couple produced by the upward buoyant force and downward gravity will restore the ship back to its upright position.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-157",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nViscosity opposes relative motion between fluid layers. Honey has high viscosity ($\n\\approx 10\\text{ Pa}\\cdot\\text{s}$), whereas water has low viscosity ($10^{-3}\\text{ Pa}\\cdot\\text{s}$), allowing water to flow with minimal internal friction.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Water pours and flows much faster than honey.\n**Reason (R):** The dynamic coefficient of viscosity of water is much less than that of honey.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-158",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is FALSE:** Viscosity of liquids **decreases** with increasing temperature because thermal energy weakens intermolecular cohesive bonds.\n- **Reason is TRUE:** Viscosity represents internal fluid friction opposing relative shear motion.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** The viscosity of liquids increases rapidly with a rise in temperature.\n**Reason (R):** Viscosity is the internal friction property of a fluid by virtue of which it opposes relative motion between its adjacent layers.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-159",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nDynamic lift scales with forward velocity squared: $F_L = \\frac{1}{2} C_L \\rho A v^2$. The aircraft accelerates on the runway to reach a takeoff speed where $F_L > m g$.",
    "examTags": [
      "AIIMS 2004"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Aeroplanes are made to accelerate along the runway before takeoff so that they acquire the necessary lift.\n**Reason (R):** According to Bernoulli's theorem, higher airflow speed over the curved upper surface of the wings reduces air pressure, generating an upward dynamic lift force.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-160",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nA localized drop in pressure creates a steep pressure gradient, causing surrounding high-pressure air masses to rush in violently as high-speed storm winds.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** A sudden sharp drop in barometric atmospheric pressure at a place indicates an approaching storm or cyclone.\n**Reason (R):** Air flows rapidly from regions of higher atmospheric pressure towards regions of lower atmospheric pressure.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-161",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAs temperature drops in winter, lubricant viscosity increases, creating high viscous resistance against rotating machine shafts.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Machine parts often get jammed or run sluggishly in severe winter weather.\n**Reason (R):** The viscosity of lubricating oils used in machine bearings increases significantly at low temperatures.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-162",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nApparent weight is $W_{\\text{app}} = W - F_b$. For any floating object in equilibrium, $F_b = W \\implies W_{\\text{app}} = 0$.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** A block of wood is floating in water. The apparent weight of the floating block is zero.\n**Reason (R):** The entire gravitational weight of the block is balanced by the upward buoyant force exerted by the displaced water.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-163",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWhen $6\\pi\\eta r v_T + F_b = m g$, net force is zero and acceleration vanishes ($a = 0$), yielding constant terminal velocity.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** A raindrop after falling through some distance in air attains a constant terminal velocity.\n**Reason (R):** At terminal velocity, the upward viscous drag plus buoyant force exactly balances the downward gravitational weight of the raindrop.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-164",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nSince $P = F/A$, minimizing area $A$ maximizes piercing pressure $P$, allowing needles to penetrate materials easily.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Paper pins and sewing needles are manufactured with sharp pointed tips.\n**Reason (R):** Pointed ends have an extremely small contact area, generating very high pressure even with small applied forces ($P = F/A$).\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-165",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is FALSE:** Railway tracks are laid on **large-sized** broad sleepers (concrete or wooden ties).\n- **Reason is FALSE:** Large sleepers distribute the heavy train load over a large ground area to **reduce** pressure on the soil bed so tracks do not sink.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Railway tracks are laid on small-sized wooden sleepers.\n**Reason (R):** Small-sized wooden sleepers are used so that the rails exert more pressure on the ground to prevent train derailment.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-166",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAt high elevations, $P_{\\text{atm}}$ drops while internal blood pressure remains around $120\\text{ mm Hg}$ gauge, creating a large outward pressure difference driving continuous bleeding.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** It is difficult to stop bleeding from an open wound at high mountain altitudes.\n**Reason (R):** The external atmospheric pressure at high altitudes is substantially lower than normal human arterial blood pressure.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-167",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Two holes allow air to enter through one hole to maintain internal atmospheric pressure while oil pours smoothly from the other.\n- **Reason is FALSE:** The second hole is for air intake to prevent a partial vacuum, not for liquid outflow.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** To empty an oil canister smoothly, two holes are made on its lid instead of one.\n**Reason (R):** Oil will come out of both holes simultaneously, so it empties in half the time.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-168",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is FALSE:** Terminal velocity is the steady speed of a body falling in a viscous medium ($a = 0$), whereas critical velocity ($v_c = \\frac{N_R \\eta}{\\rho D}$) is the threshold speed beyond which streamline flow transitions to turbulent flow.\n- **Reason is TRUE:** Defines terminal velocity accurately.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Terminal velocity of a falling sphere is the same physical concept as critical velocity of fluid flow.\n**Reason (R):** The constant maximum velocity of fall of a body through a viscous fluid is called terminal velocity.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-169",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Water in the narrow gap between boats moves faster than outer water. By Bernoulli's principle, pressure between them drops, pushing the boats together.\n- **Reason is TRUE:** Stokes drag is $F \\propto v$, but it is unrelated to the Bernoulli attraction between moving boats.",
    "examTags": [
      "AIIMS 1995"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** When two boats sail parallel close to each other in the same direction, they are pulled towards each other.\n**Reason (R):** Viscous drag on a spherical body moving with speed $v$ is proportional to $v$.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-170",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nStreamlining prevents boundary layer separation and suppresses turbulent wake formation, drastically lowering aerodynamic drag.",
    "examTags": [
      "NCERT"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Modern high-speed cars and commercial aeroplanes are given streamlined contours.\n**Reason (R):** Streamlining reduces fluid friction (form drag and eddy dissipation) caused by the atmosphere.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-171",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- **Assertion is TRUE:** Bernoulli's principle assumes zero viscous dissipation, constant density (incompressible), irrotational and steady flow.\n- **Reason is TRUE:** $\\frac{v^2}{2g}$ is velocity head, but it is not the explanation of the ideal fluid assumptions.",
    "examTags": [
      "AIIMS"
    ],
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Given below are Assertion (A) and Reason (R):\n**Assertion (A):** Bernoulli's theorem applies strictly to incompressible, non-viscous fluids in steady streamline flow.\n**Reason (R):** The term $\\frac{v^2}{2g}$ in Bernoulli's head equation is called the velocity head.\n\nChoose the correct option:",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "assertion-and-reason"
    ]
  },
  {
    "id": "errorless-phy-flu-172",
    "options": [
      "$1.85\\text{ g/cm}^2$",
      "$89.25\\text{ g/cm}^2$",
      "$462.5\\text{ g/cm}^2$",
      "$500\\text{ g/cm}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nTotal hydrostatic pressure is the sum of the pressures exerted by each individual liquid layer:\n$$P = h_1 d_1 + h_2 d_2$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Height of water column: $h_1 = 2.5\\text{ m} = 250\\text{ cm}$\n- Height of oil column: $h_2 = 2.5\\text{ m} = 250\\text{ cm}$\n$$P = (250 \\times 1.0) + (250 \\times 0.85) = 250 \\times 1.85 = 462.5\\text{ g/cm}^2$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "A tank $5\\text{ m}$ high is half filled with water (density $= 1.0\\text{ g/cm}^3$) and then filled to the top with oil of density $0.85\\text{ g/cm}^3$. The gauge pressure at the bottom of the tank due to these liquids is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-173",
    "options": [
      "$\\rho_1 = 6$ and $\\rho_2 = 2$",
      "$\\rho_1 = 3$ and $\\rho_2 = 5$",
      "$\\rho_1 = 12$ and $\\rho_2 = 4$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Equal volume mixture: $\\frac{\\rho_1 + \\rho_2}{2} = 4 \\implies \\rho_1 + \\rho_2 = 8$\n- Equal mass mixture: $\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2} = 3 \\implies \\frac{2\\rho_1 \\rho_2}{8} = 3 \\implies \\rho_1 \\rho_2 = 12$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nSolving $\\rho_1 + \\rho_2 = 8$ and $\\rho_1 \\rho_2 = 12$ gives roots $\\rho_1 = 6\\text{ g/cm}^3$ and $\\rho_2 = 2\\text{ g/cm}^3$.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "Two substances of densities $\\rho_1$ and $\\rho_2$ are mixed in equal volumes, giving a mixture of relative density $4$. When mixed in equal masses, the relative density of the mixture is $3$. The values of $\\rho_1$ and $\\rho_2$ are",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-174",
    "options": [
      "$10\\text{ N}$",
      "$9\\text{ N}$",
      "$8\\text{ N}$",
      "$7\\text{ N}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Spring balance reading} = \\text{Actual weight} - \\text{Buoyant upthrust}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Submerged volume: $V_{\\text{in}} = 500\\text{ cm}^3 = 500 \\times 10^{-6}\\text{ m}^3$\n- Upthrust: $F_b = V_{\\text{in}} \\rho_w g = (500 \\times 10^{-6}) \\times 10^3 \\times 10 = 5\\text{ N}$\n- Reading: $W' = 12\\text{ N} - 5\\text{ N} = 7\\text{ N}$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Easy",
    "questionText": "A wooden block of volume $1000\\text{ cm}^3$ is suspended from a spring balance. It weighs $12\\text{ N}$ in air. It is suspended in water such that half of the block is below the water surface. The reading of the spring balance is (Take $g = 10\\text{ m/s}^2$, $\\rho_w = 10^3\\text{ kg/m}^3$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-175",
    "options": [
      "$4 : 49$",
      "$49 : 4$",
      "$2 : 7$",
      "$7 : 2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nCritical velocity is $v_c = \\frac{N_R \\eta}{\\rho r}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{v_{c1}}{v_{c2}} = \\left(\\frac{\\eta_1}{\\eta_2}\\right) \\left(\\frac{\\rho_2}{\\rho_1}\\right) = \\left(\\frac{52}{49}\\right) \\times \\left(\\frac{1}{13}\\right) = \\frac{4}{49} = 4:49$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Two different liquids flow through two tubes of equal radius. The ratio of coefficients of viscosity of the liquids is $52 : 49$ and the ratio of their densities is $13 : 1$. The ratio of their critical velocities $v_{c1} : v_{c2}$ will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-176",
    "options": [
      "$l_1 + l_2$",
      "$\\frac{1}{l_1} + \\frac{1}{l_2}$",
      "$\\frac{l_1 l_2}{l_1 + l_2}$",
      "$\\frac{1}{l_1 + l_2}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn parallel combination, total fluid resistance satisfies $\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\nSince $R = \\frac{8\\eta l}{\\pi r^4} \\propto l$:\n$$\\frac{1}{l} = \\frac{1}{l_1} + \\frac{1}{l_2} \\implies l = \\frac{l_1 l_2}{l_1 + l_2}$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Two capillary tubes of same radius $r$ but lengths $l_1$ and $l_2$ are fitted in parallel to the bottom of a vessel under pressure head $P$. The length $l$ of a single tube of radius $r$ that can replace both tubes to provide the same total discharge rate is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-177",
    "options": [
      "$+10\\%$",
      "$+46\\%$",
      "$-10\\%$",
      "$-40\\%$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy Poiseuille's law, $V \\propto r^4$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $r' = 1.10 r$\n- $V' = (1.10)^4 V = 1.4641 V$\n- Percentage change: $\\frac{\\Delta V}{V} \\times 100\\% = (1.4641 - 1) \\times 100\\% = +46.41\\% \\approx +46\\%$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "A capillary tube is attached horizontally to a constant head arrangement. If the radius of the capillary tube is increased by $10\\%$, the rate of flow of liquid through it will change by approximately",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-178",
    "options": [
      "$1 : 1$",
      "$2 : 3$",
      "$3 : 2$",
      "$4 : 9$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nHydrostatic pressure $P = h \\rho g$ is an intensive property and is completely independent of the surface area of the membrane.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Two stretched flat membranes of area $2\\text{ cm}^2$ and $3\\text{ cm}^2$ are placed horizontally in a liquid at the same depth. The ratio of hydrostatic pressures on them is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-179",
    "options": [
      "Equal in all vessels",
      "Maximum in vessel A",
      "Maximum in vessel B",
      "Maximum in vessel C"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$P = h \\rho g$. For equal height $h$, pressure is directly proportional to density: $P \\propto \\rho$. Since $\\rho_A > \\rho_B > \\rho_C$, pressure at the base is maximum in vessel A.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "Three identical vessels are filled to the SAME HEIGHT with three different liquids A, B, and C with densities $\\rho_A > \\rho_B > \\rho_C$. The pressure at the base will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-180",
    "options": [
      "Equal in all vessels",
      "Maximum in vessel A",
      "Maximum in vessel B",
      "Maximum in vessel C"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nIn cylindrical containers with vertical walls, total base force equals total liquid weight $F = m g$. Because masses $m$ and base areas $A$ are identical, pressure $P = \\frac{m g}{A}$ is **equal in all vessels**.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Medium",
    "questionText": "Three identical cylindrical vessels are filled with EQUAL MASSES of three different liquids A, B, and C (densities $\\rho_A > \\rho_B > \\rho_C$). The pressure at the base will be",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-181",
    "options": [
      "$100\\text{ cm}^2$",
      "$10^9\\text{ cm}^2$",
      "$2 \\times 10^4\\text{ cm}^2$",
      "$2 \\times 10^{10}\\text{ cm}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy Pascal's Law: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies A_2 = A_1 \\frac{F_2}{F_1}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- $F_1 = 10^7\\text{ dynes}$, $A_1 = 100\\text{ cm}^2$\n- $F_2 = m g = (2000 \\times 10^3\\text{ g}) \\times 980\\text{ cm/s}^2 = 1.96 \\times 10^9\\text{ dynes} \\approx 2 \\times 10^9\\text{ dynes}$\n$$A_2 = 100 \\times \\frac{1.96 \\times 10^9}{10^7} = 100 \\times 196 = 19600\\text{ cm}^2 \\approx 2 \\times 10^4\\text{ cm}^2$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A piston of cross-section area $100\\text{ cm}^2$ is used in a hydraulic press to exert a force of $10^7\\text{ dynes}$ on the liquid. The cross-sectional area of the larger piston required to support a mass of $2000\\text{ kg}$ is (Take $g = 980\\text{ cm/s}^2$):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-182",
    "options": [
      "$706\\text{ g}$",
      "$607\\text{ g}$",
      "$760\\text{ g}$",
      "$670\\text{ g}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Total mass of block } m = \\text{Mass of displaced oil} + \\text{Mass of displaced water}$$\n\n⚡ **Step-by-Step Derivation & Calculations:**\n- Base area $= 10 \\times 10 = 100\\text{ cm}^2$\n- Submerged depth in water $= 4\\text{ cm} \\implies V_w = 100 \\times 4 = 400\\text{ cm}^3$\n- Submerged depth in oil $= 10 - 4 = 6\\text{ cm} \\implies V_{\\text{oil}} = 100 \\times 6 = 600\\text{ cm}^3$\n$$m = (V_{\\text{oil}} \\rho_{\\text{oil}}) + (V_w \\rho_w) = (600 \\times 0.6) + (400 \\times 1.0) = 360 + 400 = 760\\text{ g}$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Medium",
    "questionText": "A cubical block of wood of side $10\\text{ cm}$ floats at the interface between oil and water with its lower surface horizontal and $4\\text{ cm}$ below the interface. If the density of oil is $0.6\\text{ g/cm}^3$, the mass of the block is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-183",
    "options": [
      "$\\frac{5}{12}\\pi r^4 \\rho g$",
      "$0.5\\rho r g$",
      "$\\frac{4}{3}\\pi r^3 \\rho g$",
      "$\\frac{2}{3}\\pi r^4 \\rho g$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\nAs the sphere is pushed down by distance $x$ from $x=0$ to $x=r$, the extra buoyant force increases proportionally to the circular cross-sectional slice immersed.\n\n⚡ **Step-by-Step Derivation & Calculations:**\nIntegrating the net upward restoring force $F(x) = \\pi \\rho g (r^2 x - \\frac{x^3}{3})$ from $x=0$ to $x=r$ yields:\n$$W = \\int_0^r \\pi \\rho g \\left(r^2 x - \\frac{x^3}{3}\\right) dx = \\pi \\rho g \\left[\\frac{r^4}{2} - \\frac{r^4}{12}\\right] = \\frac{5}{12}\\pi r^4 \\rho g$$",
    "examTags": [
      "Errorless Physics SET-11",
      "IIT-JEE"
    ],
    "topic": "Pascal's Law and Archimedes Principle",
    "difficulty": "Hard",
    "questionText": "A spherical ball of radius $r$ and relative density $0.5$ floats in equilibrium in water with half of its volume immersed. The work done in pushing the ball down until the whole sphere is just fully immersed in water is (where $\\rho$ is water density):",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pascal's-law-and-archimedes-principle"
    ]
  },
  {
    "id": "errorless-phy-flu-184",
    "options": [
      "$\\frac{W \\rho}{\\sigma}$",
      "$W \\left(\\frac{\\rho}{\\sigma} - 1\\right)$",
      "$\\frac{\\sigma}{\\rho} W$",
      "$W \\left(1 - \\frac{\\sigma}{\\rho}\\right)$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$W_{\\text{app}} = W - F_b = V \\rho g - V \\sigma g = V \\rho g \\left(1 - \\frac{\\sigma}{\\rho}\\right) = W \\left(1 - \\frac{\\sigma}{\\rho}\\right)$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Pressure and Density",
    "difficulty": "Easy",
    "questionText": "If $W$ is the weight of a body of density $\\rho$ in vacuum, then its apparent weight in air of density $\\sigma$ is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "pressure-and-density"
    ]
  },
  {
    "id": "errorless-phy-flu-185",
    "options": [
      "Velocity of flow is greater than the critical velocity",
      "Velocity of flow is less than the critical velocity",
      "Irregular, chaotic flow with fluctuating eddies",
      "Fluid molecules cross randomly from one layer to another"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWhen flow velocity is *less* than critical velocity ($v < v_c$), the flow is **streamline (laminar)**, not turbulent. Thus, option (b) is not a feature of turbulent flow.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Which of the following is NOT a characteristic of turbulent fluid flow?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-186",
    "options": [
      "As water moves down, its speed increases, pressure drops, and atmospheric pressure compresses it",
      "Falling water tries to reach terminal velocity",
      "The mass flow rate past any cross-section is conserved ($A v = \\text{constant}$); because velocity increases due to gravitational acceleration, area must decrease",
      "Surface tension pulls the water stream inward"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept:**\nBy the equation of continuity for an incompressible fluid:\n$$\\text{Mass rate} = \\rho A v = \\text{constant} \\implies A v = \\text{constant}$$\nAs water falls under gravity, its downward speed increases ($v = \\sqrt{v_0^2 + 2gy}$), requiring cross-sectional area $A$ to decrease proportionally.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "Water coming out of a tap and falling vertically in streamline flow forms a tapering column whose cross-sectional area decreases downward. Which of the following is the most accurate physical explanation for this?",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-187",
    "options": [
      "Top-spin (clockwise spin when moving to the right)",
      "Back-spin (counter-clockwise spin when moving to the right)",
      "No spin at all",
      "Any arbitrary spin"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\nWith **back-spin**, the top surface of the ball rotates against the oncoming relative wind ($v_{\\text{top}} = v + r\\omega$), speeding up the airflow above it. By Bernoulli's principle, pressure above the ball drops ($P_{\\text{top}} < P_{\\text{bottom}}$), creating an upward Magnus lift force that counters gravity and prolongs the flight trajectory.",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Medium",
    "questionText": "To get maximum flight distance (range), a spinning ball must be thrown with",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-188",
    "options": [
      "$x_m = 2h$ at depth $y = h$",
      "$x_m = 1.5h$ at depth $y = h/2$",
      "$x_m = 4h$ at depth $y = 2h$",
      "$x_m = h$ at depth $y = 0.75h$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept:**\n- Efflux velocity: $v = \\sqrt{2gy}$\n- Height of hole above ground: $H_{\\text{ground}} = (h - y) + h = 2h - y$\n- Time to reach ground: $t = \\sqrt{\\frac{2(2h - y)}{g}}$\n- Range: $x = v t = 2\\sqrt{y(2h - y)}$\n\n⚡ **Step-by-Step Derivation & Calculations:**\nFor maximum range, $\\frac{d}{dy}[y(2h - y)] = 0 \\implies 2h - 2y = 0 \\implies y = h$.\nSubstituting $y = h$:\n$$x_m = 2\\sqrt{h(2h - h)} = 2\\sqrt{h^2} = 2h$$",
    "examTags": [
      "Errorless Physics SET-11",
      "IIT-JEE"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Hard",
    "questionText": "A tank is filled up to height $h$ with a liquid and is placed on a platform of height $h$ above the ground. To obtain the maximum horizontal range $x_m$ on the ground, a small hole is punched at depth $y$ from the free surface. Then",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-189",
    "options": [
      "$8\\text{ s}^{-1}$",
      "$80\\text{ s}^{-1}$",
      "$0.8\\text{ s}^{-1}$",
      "$0.08\\text{ s}^{-1}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept:**\n$$\\text{Velocity Gradient} = \\frac{\\Delta v}{\\Delta x} = \\frac{8\\text{ cm/s}}{0.1\\text{ cm}} = 80\\text{ s}^{-1}$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "The relative velocity of two consecutive liquid layers is $8\\text{ cm/s}$. If the perpendicular distance between the layers is $0.1\\text{ cm}$, the velocity gradient is",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  },
  {
    "id": "errorless-phy-flu-190",
    "options": [
      "$\\frac{V}{4}$",
      "$16 V$",
      "$\\frac{V}{8}$",
      "$\\frac{V}{32}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept:**\nPoiseuille flow: $V \\propto \\frac{r^4}{l}$.\n\n⚡ **Step-by-Step Derivation & Calculations:**\n$$\\frac{V'}{V} = \\left(\\frac{r'}{r}\\right)^4 \\left(\\frac{l}{l'}\\right) = \\left(\\frac{1}{2}\\right)^4 \\left(\\frac{1}{2}\\right) = \\frac{1}{16} \\times \\frac{1}{2} = \\frac{1}{32} \\implies V' = \\frac{V}{32}$$",
    "examTags": [
      "Errorless Physics SET-11"
    ],
    "topic": "Fluid Flow",
    "difficulty": "Easy",
    "questionText": "Under a constant pressure head, the rate of flow of liquid through a capillary tube is $V$. If the length of the capillary is doubled ($l' = 2l$) and the diameter of the bore is halved ($d' = d/2$), the new rate of flow becomes",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "tags": [
      "fluid-mechanics",
      "fluid-flow"
    ]
  }
];

export const FLUID_MECHANICS_QUESTIONS: Question[] = FLUID_MECHANICS_BOOK_QUESTIONS;

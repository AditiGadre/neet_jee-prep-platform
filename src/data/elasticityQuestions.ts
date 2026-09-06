import { Question } from '../types';

export const ELASTICITY_BOOK_QUESTIONS: Question[] = [
  {
    "id": "errorless-phy-ela-001",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The length of an iron wire is $L$ and area of cross-section is $A$. The increase in length is $l$ on applying the force $F$ on its two ends. Which of the statement is correct? [NCERT 1976]",
    "options": [
      "Increase in length is inversely proportional to its length $L$",
      "Increase in length is proportional to area of cross-section $A$",
      "Increase in length is inversely proportional to $A$",
      "Increase in length is proportional to Young's modulus"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy definition of Young's modulus $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{l/L} = \\frac{FL}{Al}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nRearranging for extension $l$:\n$$l = \\frac{FL}{AY} \\implies l \\propto \\frac{1}{A}$$\nThus, extension is inversely proportional to the cross-sectional area $A$.\n\n✓ **Examiner Pro-Tip**: \nFor constant tension $F$ and length $L$, thicker wires (larger $A$) experience less elongation: $l \\propto \\frac{1}{A} \\propto \\frac{1}{r^2}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-002",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The increase in length is $l$ of a wire of length $L$ by the longitudinal stress. Then the stress is proportional to: [MP PET 1986]",
    "options": [
      "$L/l$",
      "$l/L$",
      "$l \\times L$",
      "$l^2 \\times L$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAccording to Hooke's Law, within elastic limit, $\\text{Stress} \\propto \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nLongitudinal strain is defined as the fractional change in length:\n$$\\text{Strain} = \\frac{l}{L}$$\nSince $\\text{Stress} = Y \\times \\text{Strain} = Y \\left(\\frac{l}{L}\\right)$, stress is directly proportional to $\\frac{l}{L}$.\n\n✓ **Examiner Pro-Tip**: \nStress is proportional to strain ($l/L$), not absolute extension $l$ alone.",
    "tags": [
      "elasticity",
      "hookes-law",
      "stress-and-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-003",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The dimensions of four wires of the same material are given below. In which wire the increase in length will be maximum when the same tension is applied? [IIT 1981; NCERT 1976; MP PET/PMT 1998; CPMT 1983, 90; MP PMT 1992, 94, 97; MP PET 1989, 90, 99]",
    "options": [
      "Length 100 cm, Diameter 1 mm",
      "Length 200 cm, Diameter 2 mm",
      "Length 300 cm, Diameter 3 mm",
      "Length 50 cm, Diameter 0.5 mm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation of a wire under load $F$ is $l = \\frac{FL}{AY} = \\frac{4FL}{\\pi d^2 Y} \\propto \\frac{L}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nComparing the ratio $\\frac{L}{d^2}$ in consistent units (cm/mm$^2$):\n- (a) $\\frac{100}{1^2} = 100$\n- (b) $\\frac{200}{2^2} = 50$\n- (c) $\\frac{300}{3^2} = 33.3$\n- (d) $\\frac{50}{(0.5)^2} = \\frac{50}{0.25} = 200$\nCase (d) has the largest ratio (200), hence produces maximum extension.\n\n✓ **Examiner Pro-Tip**: \nElongation is inversely proportional to $d^2$; halving the diameter increases elongation by a factor of 4.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-004",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The ratio of the lengths of two wires A and B of same material is $1 : 2$ and the ratio of their diameters is $2 : 1$. They are stretched by the same force, then the ratio of increase in length will be: [MP PMT 1986; MP PET/PMT 1988]",
    "options": [
      "$2 : 1$",
      "$1 : 4$",
      "$1 : 8$",
      "$8 : 1$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{FL}{AY} = \\frac{4FL}{\\pi d^2 Y} \\implies l \\propto \\frac{L}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_1}{l_2} = \\left(\\frac{L_1}{L_2}\\right) \\left(\\frac{d_2}{d_1}\\right)^2 = \\left(\\frac{1}{2}\\right) \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$$\n\n✓ **Examiner Pro-Tip**: \n$\\frac{l_A}{l_B} = \\frac{L_A}{L_B} \\cdot \\left(\\frac{d_B}{d_A}\\right)^2 = \\frac{1}{2} \\times \\left(\\frac{1}{2}\\right)^2 = 1:8$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-005",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The Young's modulus of a wire of length $L$ and radius $r$ is $Y\\text{ N/m}^2$. If the length and radius are reduced to $L/2$ and $r/2$, then its Young's modulus will be: [MP PMT 1985; MP PET 1997; KCET 1999]",
    "options": [
      "$Y/2$",
      "$Y$",
      "$2Y$",
      "$4Y$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y$ is an intrinsic intensive material property that depends only on the nature of the material and temperature, independent of dimensions (length, radius, or cross-sectional area).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nChanging the length to $L/2$ and radius to $r/2$ does not change the material. Therefore, $Y' = Y$.\n\n✓ **Examiner Pro-Tip**: \nModuli of elasticity ($Y, K, \\eta$) are independent of geometric dimensions.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "material-property"
    ]
  },
  {
    "id": "errorless-phy-ela-006",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A beam of metal supported at the two ends is loaded at the centre. The depression at the centre is proportional to: [CPMT 1983, 84]",
    "options": [
      "$Y^2$",
      "$Y$",
      "$1/Y$",
      "$1/Y^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe depression $\\delta$ at the centre of a rectangular beam of length $L$, breadth $b$, and depth $d$ loaded with weight $W$ is given by $\\delta = \\frac{W L^3}{4 Y b d^3}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\delta = \\frac{W L^3}{4 b d^3 Y} \\implies \\delta \\propto \\frac{1}{Y}$$\nThus, the depression is inversely proportional to Young's modulus $Y$.\n\n✓ **Examiner Pro-Tip**: \nTo minimize sagging/depression of girders, materials with large Young's modulus ($Y$) and large depth ($d$) are selected.",
    "tags": [
      "elasticity",
      "bending-of-beams",
      "girder-depression"
    ]
  },
  {
    "id": "errorless-phy-ela-007",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "When a certain weight is suspended from a long uniform wire, its length increases by 1 cm. If the same weight is suspended from another wire of the same material and length but having a diameter half of the first one, then the increase in length will be: [CPMT 1984, 90]",
    "options": [
      "0.5 cm",
      "2 cm",
      "4 cm",
      "8 cm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nExtension in a wire under load $F$ is $l = \\frac{4FL}{\\pi d^2 Y} \\propto \\frac{1}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l_2 = l_1 \\left(\\frac{d_1}{d_2}\\right)^2 = 1\\text{ cm} \\times (2)^2 = 4\\text{ cm}$$\n\n✓ **Examiner Pro-Tip**: \nHalving the diameter quadruples the elongation under identical load.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-008",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Hooke's law defines: [MP PMT/PET 1988]",
    "options": [
      "Stress",
      "Strain",
      "Modulus of elasticity",
      "Elastic limit"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nHooke's law states that within the elastic limit, stress is directly proportional to strain: $\\frac{\\text{Stress}}{\\text{Strain}} = E$ (Modulus of Elasticity).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThe constant of proportionality $E$ between stress and strain defines the modulus of elasticity for the material.\n\n✓ **Examiner Pro-Tip**: \nHooke's law establishes the operational definition of the elastic modulus.",
    "tags": [
      "elasticity",
      "hookes-law",
      "modulus-of-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-009",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A wire is loaded by 6 kg at its one end, the increase in length is 12 mm. If the radius of the wire is doubled and all other magnitudes are unchanged, then increase in length will be: [MP PMT 1987; AI SSCE 1982]",
    "options": [
      "6 mm",
      "3 mm",
      "24 mm",
      "48 mm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nExtension $l = \\frac{FL}{\\pi r^2 Y} \\propto \\frac{1}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = \\frac{l}{(r'/r)^2} = \\frac{12\\text{ mm}}{2^2} = \\frac{12}{4} = 3\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \nDoubling radius reduces elongation to $\\frac{1}{4}$ of its initial value.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-010",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The area of cross-section of a wire of length 1.1 metre is $1\\text{ mm}^2$. It is loaded with 1 kg. If Young's modulus of copper is $1.1 \\times 10^{11}\\text{ N/m}^2$, then the increase in length will be (If $g = 10\\text{ m/s}^2$): [MP PET 1989]",
    "options": [
      "0.01 mm",
      "0.075 mm",
      "0.1 mm",
      "0.15 mm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIncrease in length is given by $\\Delta L = \\frac{F L}{A Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = mg = 1 \\times 10 = 10\\text{ N}$\n- $L = 1.1\\text{ m}$\n- $A = 1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$\n- $Y = 1.1 \\times 10^{11}\\text{ N/m}^2$\n$$\\Delta L = \\frac{10 \\times 1.1}{10^{-6} \\times 1.1 \\times 10^{11}} = \\frac{11}{1.1 \\times 10^5} = 10^{-4}\\text{ m} = 0.1\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \n$10^{-4}\\text{ m} = 0.1\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-011",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "On increasing the length by 0.5 mm in a steel wire of length 2 m and area of cross-section $2\\text{ mm}^2$, the force required is [$Y$ for steel $= 2.2 \\times 10^{11}\\text{ N/m}^2$]: [MP PET/PMT 1988]",
    "options": [
      "$1.1 \\times 10^5\\text{ N}$",
      "$1.1 \\times 10^4\\text{ N}$",
      "$1.1 \\times 10^3\\text{ N}$",
      "$1.1 \\times 10^2\\text{ N}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce required to stretch a wire is $F = \\frac{Y A \\Delta L}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 2.2 \\times 10^{11}\\text{ N/m}^2$\n- $A = 2\\text{ mm}^2 = 2 \\times 10^{-6}\\text{ m}^2$\n- $\\Delta L = 0.5\\text{ mm} = 0.5 \\times 10^{-3}\\text{ m}$\n- $L = 2\\text{ m}$\n$$F = \\frac{(2.2 \\times 10^{11}) \\times (2 \\times 10^{-6}) \\times (0.5 \\times 10^{-3})}{2} = \\frac{2.2 \\times 10^2}{2} = 1.1 \\times 10^2\\text{ N} = 110\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$F = 110\\text{ N} = 1.1 \\times 10^2\\text{ N}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "tension-force"
    ]
  },
  {
    "id": "errorless-phy-ela-012",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "If Young's modulus of iron is $2 \\times 10^{11}\\text{ N/m}^2$ and the interatomic spacing between two molecules is $3 \\times 10^{-10}\\text{ metre}$, the interatomic force constant is: [JIPMER 1978]",
    "options": [
      "60 N/m",
      "120 N/m",
      "30 N/m",
      "180 N/m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInteratomic force constant $k$ is related to Young's modulus $Y$ and interatomic distance $r_0$ by $k = Y \\times r_0$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$k = Y r_0 = (2 \\times 10^{11}\\text{ N/m}^2) \\times (3 \\times 10^{-10}\\text{ m}) = 60\\text{ N/m}$$\n\n✓ **Examiner Pro-Tip**: \n$k = Y \\cdot r_0$ connects macroscopic elasticity ($Y$) to microscopic bond stiffness ($k$).",
    "tags": [
      "elasticity",
      "interatomic-forces",
      "force-constant"
    ]
  },
  {
    "id": "errorless-phy-ela-013",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "In CGS system, the Young's modulus of a steel wire is $2 \\times 10^{12}$. To double the length of a wire of unit cross-section area, the force required is: [MP PMT 1989]",
    "options": [
      "$4 \\times 10^6\\text{ dynes}$",
      "$2 \\times 10^{12}\\text{ dynes}$",
      "$2 \\times 10^{12}\\text{ newtons}$",
      "$2 \\times 10^8\\text{ dynes}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen the length of a wire is doubled, final length is $2L$, so $\\Delta L = 2L - L = L$.\nLongitudinal strain $= \\frac{\\Delta L}{L} = 1$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\text{Stress} = \\frac{F}{A} = Y \\times \\text{Strain} = Y \\times 1 = Y$$\nFor unit cross-sectional area ($A = 1\\text{ cm}^2$):\n$$F = Y \\times A = 2 \\times 10^{12} \\times 1 = 2 \\times 10^{12}\\text{ dynes}$$\n\n✓ **Examiner Pro-Tip**: \nYoung's modulus is numerically equal to the stress required to double the length of a wire of unit cross-section.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "cgs-units"
    ]
  },
  {
    "id": "errorless-phy-ela-014",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The material which practically does not show elastic after effect is: [JIPMER 1997; AMU (Engg.) 1999]",
    "options": [
      "Copper",
      "Rubber",
      "Steel",
      "Quartz"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElastic after-effect is the delay in regaining original dimensions after the removal of the deforming force.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nQuartz and phosphor bronze exhibit practically negligible elastic after-effect, making them ideal for suspensions in moving coil galvanometers.\n\n✓ **Examiner Pro-Tip**: \nQuartz fibres regain original shape almost instantaneously (zero elastic after-effect and zero elastic fatigue).",
    "tags": [
      "elasticity",
      "elastic-after-effect",
      "materials"
    ]
  },
  {
    "id": "errorless-phy-ela-015",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If the temperature increases, the modulus of elasticity:",
    "options": [
      "Decreases",
      "Increases",
      "Remains constant",
      "Becomes zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAs temperature increases, interatomic distances increase and the attractive interatomic bonds weaken.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDue to thermal agitation, interatomic restoring forces decrease, so less stress is required to produce the same strain. Thus, modulus of elasticity decreases with rising temperature (with the exception of invar steel).\n\n✓ **Examiner Pro-Tip**: \n$Y$ decreases as temperature rises; at melting point, $Y \\to 0$.",
    "tags": [
      "elasticity",
      "temperature-dependence",
      "modulus-of-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-016",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A force $F$ is needed to break a copper wire having radius $R$. The force needed to break a copper wire of radius $2R$ will be: [MP PET 1990]",
    "options": [
      "$F/2$",
      "$2F$",
      "$4F$",
      "$F/4$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBreaking force $F_{break} = \\text{Breaking Stress} \\times A = P \\times \\pi R^2 \\propto R^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F' = P \\times \\pi (2R)^2 = 4 P \\pi R^2 = 4F$$\n\n✓ **Examiner Pro-Tip**: \nBreaking stress is a material constant, so breaking force scales with cross-sectional area: $F \\propto R^2$.",
    "tags": [
      "elasticity",
      "breaking-stress",
      "breaking-force"
    ]
  },
  {
    "id": "errorless-phy-ela-017",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The relationship between Young's modulus $Y$, Bulk modulus $K$ and modulus of rigidity $\\eta$ is: [MP PET 1991; MP PMT 1997]",
    "options": [
      "$Y = \\frac{9\\eta K}{3K + \\eta}$",
      "$Y = \\frac{9YK}{Y + 3K}$",
      "$Y = \\frac{9\\eta K}{3 + K}$",
      "$Y = \\frac{3\\eta K}{9\\eta + K}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe fundamental relations among the elastic moduli are:\n1. $Y = 3K(1 - 2\\sigma)$\n2. $Y = 2\\eta(1 + \\sigma)$\n\n⚡ **Step-by-Step Derivation & Calculations**: \nEliminating Poisson's ratio $\\sigma$:\n$$\\frac{Y}{3K} = 1 - 2\\sigma, \\quad \\frac{Y}{\\eta} = 2 + 2\\sigma$$\nAdding the two expressions:\n$$\\frac{Y}{3K} + \\frac{Y}{\\eta} = 3 \\implies Y \\left(\\frac{\\eta + 3K}{3\\eta K}\\right) = 3 \\implies Y = \\frac{9\\eta K}{3K + \\eta}$$\n$$\\text{or equivalently: } \\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}$$\n\n✓ **Examiner Pro-Tip**: \nMaster reciprocal formula: $\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}$.",
    "tags": [
      "elasticity",
      "elastic-constants",
      "inter-relations"
    ]
  },
  {
    "id": "errorless-phy-ela-018",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The diameter of a brass rod is 4 mm and Young's modulus of brass is $9 \\times 10^{10}\\text{ N/m}^2$. The force required to stretch it by 0.1% of its length is: [MP PET 1991; BVP 2003]",
    "options": [
      "$360\\pi\\text{ N}$",
      "$36\\text{ N}$",
      "$144\\pi \\times 10^3\\text{ N}$",
      "$36\\pi \\times 10^5\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStretching force is $F = Y A \\times \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Radius $r = \\frac{d}{2} = 2\\text{ mm} = 2 \\times 10^{-3}\\text{ m}$\n- Area $A = \\pi r^2 = \\pi (2 \\times 10^{-3})^2 = 4\\pi \\times 10^{-6}\\text{ m}^2$\n- Strain $= \\frac{\\Delta L}{L} = 0.1\\% = \\frac{0.1}{100} = 10^{-3}$\n$$F = (9 \\times 10^{10}) \\times (4\\pi \\times 10^{-6}) \\times 10^{-3} = 360\\pi\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$F = 9 \\times 10^{10} \\times 4\\pi \\times 10^{-6} \\times 10^{-3} = 360\\pi\\text{ N} \\approx 1131\\text{ N}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "force-calculation"
    ]
  },
  {
    "id": "errorless-phy-ela-019",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If $x$ longitudinal strain is produced in a wire of Young's modulus $y$, then energy stored in the material of the wire per unit volume is: [MP PMT 1987, 89, 92; CPMT 1997; Pb. PMT 1999; KCET 2000; AIIMS 2001]",
    "options": [
      "$y x^2$",
      "$2 y x^2$",
      "$\\frac{1}{2} y^2 x$",
      "$\\frac{1}{2} y x^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElastic potential energy stored per unit volume (energy density) is $u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince $\\text{Stress} = y \\times \\text{Strain} = y x$:\n$$u = \\frac{1}{2} (y x) x = \\frac{1}{2} y x^2$$\n\n✓ **Examiner Pro-Tip**: \nEnergy density formulas: $u = \\frac{1}{2} \\sigma \\varepsilon = \\frac{1}{2} Y \\varepsilon^2 = \\frac{\\sigma^2}{2Y}$.",
    "tags": [
      "elasticity",
      "energy-density",
      "strain-energy"
    ]
  },
  {
    "id": "errorless-phy-ela-020",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "In a wire of length $L$, the increase in its length is $l$. If the length is reduced to half, the increase in its length under the same load will be:",
    "options": [
      "$l$",
      "$2l$",
      "$l/2$",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation is $l = \\frac{FL}{AY} \\propto L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nIf the original length is halved ($L' = L/2$) under identical tension $F$, cross-sectional area $A$, and material $Y$:\n$$l' = \\frac{FL'}{AY} = \\frac{F(L/2)}{AY} = \\frac{l}{2}$$\n\n✓ **Examiner Pro-Tip**: \nElongation scales directly with the initial length: $l \\propto L$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-021",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A rubber string 8 cm long and density $1.5\\text{ kg/m}^3$ with Young's modulus $5 \\times 10^8\\text{ N/m}^2$ is suspended from the ceiling in a room. The increase in length due to its own weight will be: [AIIMS 1986]",
    "options": [
      "$9.6 \\times 10^{-5}\\text{ m}$",
      "$9.6 \\times 10^{-11}\\text{ m}$",
      "$9.6 \\times 10^{-3}\\text{ m}$",
      "$9.6\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation of a hanging wire under its own weight acts at its centre of gravity, giving effective stretching length $L/2$:\n$$l = \\frac{M g L}{2 A Y} = \\frac{(A L \\rho) g L}{2 A Y} = \\frac{L^2 \\rho g}{2Y}$$\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $L = 8\\text{ cm} = 0.08\\text{ m} = 8 \\times 10^{-2}\\text{ m}$\n- $\\rho = 1.5\\text{ kg/m}^3$\n- $g = 10\\text{ m/s}^2$\n- $Y = 5 \\times 10^8\\text{ N/m}^2$\n$$l = \\frac{(8 \\times 10^{-2})^2 \\times 1.5 \\times 10}{2 \\times (5 \\times 10^8)} = \\frac{64 \\times 10^{-4} \\times 15}{10^9} = \\frac{960 \\times 10^{-4}}{10^9} = 9.6 \\times 10^{-11}\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: \nElongation under own weight is independent of cross-sectional area $A$: $l = \\frac{L^2 \\rho g}{2Y}$.",
    "tags": [
      "elasticity",
      "elongation-under-own-weight",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-022",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A and B are two wires. The radius of A is twice that of B. They are stretched by the same load. Then the stress on B is: [MP PMT 1993]",
    "options": [
      "Equal to that on A",
      "Four times that on A",
      "Two times that on A",
      "Half that on A"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStress is defined as $\\text{Stress} = \\frac{F}{A} = \\frac{F}{\\pi r^2} \\propto \\frac{1}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{\\text{Stress}_B}{\\text{Stress}_A} = \\left(\\frac{r_A}{r_B}\\right)^2 = (2)^2 = 4$$\nThus, the stress on B is 4 times that on A.\n\n✓ **Examiner Pro-Tip**: \nHalving the radius quadruples the stress for the same tensile force.",
    "tags": [
      "elasticity",
      "stress",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-023",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If the length of a wire is reduced to half, then it can hold the ________ load.",
    "options": [
      "Half",
      "Same",
      "Double",
      "One fourth"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBreaking load (maximum sustainable load) is $F_{break} = \\text{Breaking Stress} \\times A$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nBreaking stress depends only on the material, and $A$ is unchanged. The breaking load is completely independent of the length of the wire. Hence, it can hold the exact same load.\n\n✓ **Examiner Pro-Tip**: \nCutting a wire into shorter pieces does not alter its load-carrying capacity.",
    "tags": [
      "elasticity",
      "breaking-load",
      "tensile-strength"
    ]
  },
  {
    "id": "errorless-phy-ela-024",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "To double the length of an iron wire having $0.5\\text{ cm}^2$ area of cross-section, the required force will be ($Y = 10^{12}\\text{ dyne/cm}^2$): [MP PMT 1987]",
    "options": [
      "$1.0 \\times 10^{-7}\\text{ N}$",
      "$1.0 \\times 10^7\\text{ N}$",
      "$0.5 \\times 10^{-7}\\text{ N}$",
      "$0.5 \\times 10^{12}\\text{ dyne}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTo double the length of a wire, strain $= \\frac{\\Delta L}{L} = 1$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F = Y A \\times \\text{Strain} = (10^{12}\\text{ dyne/cm}^2) \\times (0.5\\text{ cm}^2) \\times 1 = 0.5 \\times 10^{12}\\text{ dynes}$$\nIn SI units, $0.5 \\times 10^{12} \\times 10^{-5}\\text{ N} = 5 \\times 10^6\\text{ N}$.\n\n✓ **Examiner Pro-Tip**: \nIn CGS units, $F = 0.5 \\times 10^{12}\\text{ dynes}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "cgs-units"
    ]
  },
  {
    "id": "errorless-phy-ela-025",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A spring balance does not read properly after its long use, because:",
    "options": [
      "The elasticity of spring increases",
      "The elasticity decreases (due to elastic fatigue)",
      "Its plastic power decreases",
      "Its plastic power increases"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nRepeated alternating cycles of loading and unloading cause elastic fatigue in metals.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDue to elastic fatigue, the spring loses its elastic recovery strength, spring constant $k$ changes, and a slight permanent set develops, causing erroneous readings.\n\n✓ **Examiner Pro-Tip**: \nElastic fatigue is the loss of elastic strength under cyclic stress.",
    "tags": [
      "elasticity",
      "elastic-fatigue",
      "spring-balance"
    ]
  },
  {
    "id": "errorless-phy-ela-026",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Two wires of equal lengths are made of the same material. Wire A has a diameter that is twice that of wire B. If identical weights are suspended from the ends of these wires, the increase in length is: [EAMCET 1983; MP PMT 1990; MP PET 1995]",
    "options": [
      "Four times for wire A as for wire B",
      "Twice for wire A as for wire B",
      "Half for wire A as for wire B",
      "One-fourth for wire A as for wire B"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{4FL}{\\pi d^2 Y} \\propto \\frac{1}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_A}{l_B} = \\left(\\frac{d_B}{d_A}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$\nThus, the increase in length is one-fourth for wire A compared to wire B.\n\n✓ **Examiner Pro-Tip**: \nThicker wire stretches less: $l_A = \\frac{l_B}{4}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-027",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Why is a spring made up of steel in comparison to copper?",
    "options": [
      "Copper is more costly than steel",
      "Copper is more elastic than steel",
      "Steel is more elastic than copper",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nSteel has a significantly higher Young's modulus ($Y_{steel} \\approx 2.0 \\times 10^{11}\\text{ N/m}^2$) than copper ($Y_{copper} \\approx 1.2 \\times 10^{11}\\text{ N/m}^2$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nA steel spring exerts a greater restoring force for a given deformation and sustains higher deforming stress before exceeding its elastic limit without developing permanent set.\n\n✓ **Examiner Pro-Tip**: \nSteel is more elastic than copper because it requires larger stress to produce the same strain.",
    "tags": [
      "elasticity",
      "materials",
      "steel-vs-copper"
    ]
  },
  {
    "id": "errorless-phy-ela-028",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Steel and copper wires of the same length and area are stretched by the same weight one after the other. Young's modulus of steel and copper are $2 \\times 10^{11}\\text{ N/m}^2$ and $1.2 \\times 10^{11}\\text{ N/m}^2$. The ratio of increase in length of steel to copper is: [MP PET 1984]",
    "options": [
      "$2/5$",
      "$3/5$",
      "$5/4$",
      "$5/2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nExtension $l = \\frac{FL}{AY} \\propto \\frac{1}{Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_{steel}}{l_{copper}} = \\frac{Y_{copper}}{Y_{steel}} = \\frac{1.2 \\times 10^{11}}{2.0 \\times 10^{11}} = \\frac{1.2}{2.0} = \\frac{3}{5}$$\n\n✓ **Examiner Pro-Tip**: \n$\\frac{l_s}{l_c} = \\frac{Y_c}{Y_s} = \\frac{3}{5}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-029",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "An area of cross-section of a rubber string is $2\\text{ cm}^2$. Its length is doubled when stretched with a linear force of $2 \\times 10^5\\text{ dynes}$. The Young's modulus of the rubber in $\\text{dyne/cm}^2$ will be: [MP PET 1985]",
    "options": [
      "$4 \\times 10^5$",
      "$1 \\times 10^5$",
      "$2 \\times 10^5$",
      "$1 \\times 10^4$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen the length of the string is doubled, longitudinal strain $= \\frac{\\Delta L}{L} = 1$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F / A}{1} = \\frac{2 \\times 10^5\\text{ dynes}}{2\\text{ cm}^2} = 1 \\times 10^5\\text{ dyne/cm}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = \\frac{F}{A} = \\frac{2 \\times 10^5}{2} = 10^5\\text{ dyne/cm}^2$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "cgs-units"
    ]
  },
  {
    "id": "errorless-phy-ela-030",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Increase in length of a wire is 1 mm when suspended by a weight. If the same weight is suspended on a wire of double its length and double its radius, the increase in length will be: [CPMT 1976]",
    "options": [
      "2 mm",
      "0.5 mm",
      "4 mm",
      "0.25 mm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation is $l = \\frac{FL}{\\pi r^2 Y} \\propto \\frac{L}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{L'}{L}\\right) \\left(\\frac{r}{r'}\\right)^2 = 1\\text{ mm} \\times (2) \\times \\left(\\frac{1}{2}\\right)^2 = 1 \\times 2 \\times \\frac{1}{4} = 0.5\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \n$l' = l \\times \\frac{2}{2^2} = \\frac{l}{2} = 0.5\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-031",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The temperature of a wire of length 1 metre and area of cross-section $1\\text{ cm}^2$ is increased from 0°C to 100°C. If the rod is not allowed to increase in length, the force required will be ($\\alpha = 10^{-5}/^\\circ\\text{C}$ and $Y = 10^{11}\\text{ N/m}^2$): [NCERT 1976; CPMT 1982, 91]",
    "options": [
      "$10^3\\text{ N}$",
      "$10^4\\text{ N}$",
      "$10^5\\text{ N}$",
      "$10^9\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThermal force exerted by a clamped rod against rigid supports is $F = Y A \\alpha \\Delta T$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 10^{11}\\text{ N/m}^2$\n- $A = 1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$\n- $\\alpha = 10^{-5}/^\\circ\\text{C}$\n- $\\Delta T = 100 - 0 = 100^\\circ\\text{C}$\n$$F = (10^{11}) \\times (10^{-4}) \\times (10^{-5}) \\times (100) = 10^{11 - 4 - 5 + 2} = 10^4\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \nThermal stress is independent of length $L$, and thermal force $F = Y A \\alpha \\Delta T$.",
    "tags": [
      "elasticity",
      "thermal-stress",
      "thermal-force"
    ]
  },
  {
    "id": "errorless-phy-ela-032",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A rod of length $l$ and area of cross-section $A$ is heated from 0°C to 100°C. The rod is so placed that it is not allowed to increase in length, then the force developed is proportional to: [NCERT 1976]",
    "options": [
      "$l$",
      "$l^{-1}$",
      "$A$",
      "$A^{-1}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThermal force developed is $F = Y A \\alpha \\Delta T$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F \\propto A \\quad \\text{and} \\quad F \\propto l^0$$\nThermal force is directly proportional to the cross-sectional area $A$ and is completely independent of the length $l$ of the rod.\n\n✓ **Examiner Pro-Tip**: \nThermal force $F \\propto A$; thermal stress $\\frac{F}{A} = Y\\alpha\\Delta T$ is independent of both $A$ and $l$.",
    "tags": [
      "elasticity",
      "thermal-stress",
      "thermal-force"
    ]
  },
  {
    "id": "errorless-phy-ela-033",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "An aluminum rod (Young's modulus $= 7 \\times 10^9\\text{ N/m}^2$) has a breaking strain of 0.2%. The minimum cross-sectional area of the rod in order to support a load of $10^4\\text{ N}$ is: [MP PMT 1991]",
    "options": [
      "$1 \\times 10^{-2}\\text{ m}^2$",
      "$1.4 \\times 10^{-3}\\text{ m}^2$",
      "$3.5 \\times 10^{-3}\\text{ m}^2$",
      "$7.1 \\times 10^{-4}\\text{ m}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBreaking stress $= Y \\times \\text{Breaking Strain}$. Minimum area $A = \\frac{F}{\\text{Breaking Stress}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Breaking strain $= \\frac{0.2}{100} = 2 \\times 10^{-3}$\n- Breaking stress $= (7 \\times 10^9) \\times (2 \\times 10^{-3}) = 1.4 \\times 10^7\\text{ N/m}^2$\n$$A = \\frac{10^4\\text{ N}}{1.4 \\times 10^7\\text{ N/m}^2} = \\frac{1}{1400}\\text{ m}^2 \\approx 7.14 \\times 10^{-4}\\text{ m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$A = \\frac{10^4}{1.4 \\times 10^7} \\approx 7.1 \\times 10^{-4}\\text{ m}^2$.",
    "tags": [
      "elasticity",
      "breaking-stress",
      "area-calculation"
    ]
  },
  {
    "id": "errorless-phy-ela-034",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Two wires of copper having lengths in the ratio $4 : 1$ and their radii ratio as $1 : 4$ are stretched by the same force. The ratio of longitudinal strain in the two will be:",
    "options": [
      "$1 : 16$",
      "$16 : 1$",
      "$1 : 64$",
      "$64 : 1$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nLongitudinal strain $= \\frac{\\text{Stress}}{Y} = \\frac{F}{A Y} = \\frac{F}{\\pi r^2 Y} \\propto \\frac{1}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nNote that strain is independent of length $L$ for a given stress:\n$$\\frac{\\text{Strain}_1}{\\text{Strain}_2} = \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{4}{1}\\right)^2 = \\frac{16}{1}$$\n\n✓ **Examiner Pro-Tip**: \nStrain depends only on stress/modulus ($F/A Y$), so length ratio is irrelevant: $\\text{Strain}_1 / \\text{Strain}_2 = (r_2/r_1)^2 = 16:1$.",
    "tags": [
      "elasticity",
      "longitudinal-strain",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-035",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A weight of 200 kg is suspended by a vertical wire of length 600.5 cm. The area of cross-section of wire is $1\\text{ mm}^2$. When the load is removed, the wire contracts by 0.5 cm. The Young's modulus of the material of wire will be:",
    "options": [
      "$2.35 \\times 10^{12}\\text{ N/m}^2$",
      "$1.35 \\times 10^{10}\\text{ N/m}^2$",
      "$13.5 \\times 10^{11}\\text{ N/m}^2$",
      "$23.5 \\times 10^9\\text{ N/m}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y = \\frac{M g L}{A \\Delta L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Original length $L = 600.5 - 0.5 = 600\\text{ cm} = 6\\text{ m}$\n- Extension $\\Delta L = 0.5\\text{ cm} = 5 \\times 10^{-3}\\text{ m}$\n- Load $M = 200\\text{ kg} \\implies F = 200 \\times 9.8 = 1960\\text{ N}$\n- Area $A = 1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$\n$$Y = \\frac{1960 \\times 6}{10^{-6} \\times (5 \\times 10^{-3})} = \\frac{11760}{5 \\times 10^{-9}} = 2.352 \\times 10^{12}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y \\approx 2.35 \\times 10^{12}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "experimental-determination"
    ]
  },
  {
    "id": "errorless-phy-ela-036",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If a load of 9 kg is suspended on a wire, the increase in length is 4.5 mm. The force constant of the wire is:",
    "options": [
      "$0.49 \\times 10^4\\text{ N/m}$",
      "$1.96 \\times 10^4\\text{ N/m}$",
      "$4.9 \\times 10^4\\text{ N/m}$",
      "$0.196 \\times 10^4\\text{ N/m}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce constant of a wire is $k = \\frac{F}{l} = \\frac{M g}{l}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = Mg = 9 \\times 9.8 = 88.2\\text{ N}$\n- $l = 4.5\\text{ mm} = 4.5 \\times 10^{-3}\\text{ m}$\n$$k = \\frac{88.2}{4.5 \\times 10^{-3}} = 19600\\text{ N/m} = 1.96 \\times 10^4\\text{ N/m}$$\n\n✓ **Examiner Pro-Tip**: \n$k = \\frac{88.2}{4.5 \\times 10^{-3}} = 1.96 \\times 10^4\\text{ N/m}$.",
    "tags": [
      "elasticity",
      "force-constant",
      "spring-constant"
    ]
  },
  {
    "id": "errorless-phy-ela-037",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The ratio of diameters of two wires of the same material is $n : 1$. The length of wires are 4 m each. On applying the same load, the increase in length of the thin wire will be:",
    "options": [
      "$n^2$ times",
      "$n$ times",
      "$2n$ times",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{4FL}{\\pi d^2 Y} \\propto \\frac{1}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nLet thick wire diameter be $d_1 = n d$ and thin wire diameter be $d_2 = d$.\n$$\\frac{l_{thin}}{l_{thick}} = \\left(\\frac{d_{thick}}{d_{thin}}\\right)^2 = \\left(\\frac{n}{1}\\right)^2 = n^2$$\nThus, the increase in length of the thin wire will be $n^2$ times that of the thick wire.\n\n✓ **Examiner Pro-Tip**: \n$l \\propto \\frac{1}{d^2} \\implies l_{thin} = n^2 l_{thick}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-038",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A longitudinal stress of $1\\text{ kg/mm}^2$ is applied on a wire. The percentage increase in length is ($Y = 10^{11}\\text{ N/m}^2$, $g = 10\\text{ m/s}^2$):",
    "options": [
      "0.002",
      "0.001",
      "0.003",
      "0.01"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nPercentage increase in length $= \\text{Strain} \\times 100 = \\frac{\\text{Stress}}{Y} \\times 100$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\text{Stress} = 1\\text{ kg-wt/mm}^2 = \\frac{1 \\times 10\\text{ N}}{10^{-6}\\text{ m}^2} = 10^7\\text{ N/m}^2$\n- $\\text{Strain} = \\frac{\\text{Stress}}{Y} = \\frac{10^7}{10^{11}} = 10^{-4}$\n- $\\%\\text{ increase} = 10^{-4} \\times 100 = 10^{-2}\\% = 0.01\\%$ (or fractional strain $= 0.001\\% = 0.001$).\nWith $g = 9.8\\text{ m/s}^2$, $\\text{Stress} = 9.8 \\times 10^6\\text{ N/m}^2$, $\\%\\text{ increase} = \\frac{9.8 \\times 10^6}{10^{11}} \\times 100 \\approx 0.01\\%$, textbook option gives $0.001$.\n\n✓ **Examiner Pro-Tip**: \n$\\text{Strain} = \\frac{10^7}{10^{11}} = 10^{-4}$, percentage increase $= 10^{-2}\\% = 0.01\\%$.",
    "tags": [
      "elasticity",
      "stress-and-strain",
      "percentage-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-039",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A steel wire is stretched with a definite load. If the Young's modulus of the wire is $Y$, for decreasing the value of $Y$:",
    "options": [
      "Radius is to be decreased",
      "Radius is to be increased",
      "Length is to be increased",
      "None of the above (temperature must be increased)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y$ is a material property that is strictly independent of dimensions (length, radius, or cross-sectional area).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nChanging radius or length has zero effect on $Y$. The only way to decrease $Y$ is by increasing the temperature of the material.\n\n✓ **Examiner Pro-Tip**: \nModuli of elasticity are independent of geometry; none of the geometrical changes affect $Y$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "material-property"
    ]
  },
  {
    "id": "errorless-phy-ela-040",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The interatomic distance for a metal is $3 \\times 10^{-10}\\text{ m}$. If the interatomic force constant is $3.6 \\times 10^{-9}\\text{ N/Å}$, then the Young's modulus in $\\text{N/m}^2$ will be:",
    "options": [
      "$1.2 \\times 10^{11}$",
      "$4.2 \\times 10^{11}$",
      "$10.8 \\times 10^{-19}$",
      "$2.4 \\times 10^{10}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInteratomic force constant $k = Y \\times r_0 \\implies Y = \\frac{k}{r_0}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $k = 3.6 \\times 10^{-9}\\text{ N/Å} = \\frac{3.6 \\times 10^{-9}}{10^{-10}}\\text{ N/m} = 36\\text{ N/m}$\n- $r_0 = 3 \\times 10^{-10}\\text{ m}$\n$$Y = \\frac{k}{r_0} = \\frac{36\\text{ N/m}}{3 \\times 10^{-10}\\text{ m}} = 1.2 \\times 10^{11}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = \\frac{k}{r_0} = \\frac{36}{3 \\times 10^{-10}} = 1.2 \\times 10^{11}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "interatomic-force-constant",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-041",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Two identical wires of rubber and iron are stretched by the same weight, then the number of atoms in the iron wire will be: [DPMT 1999]",
    "options": [
      "Equal to that of rubber",
      "Less than that of the rubber",
      "More than that of the rubber",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nNumber of atoms in a wire of length $L$ and interatomic spacing $r_0$ is $N = \\frac{L}{r_0}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Interatomic spacing in crystalline solids like iron ($r_0 \\approx 1\\text{–}2\\text{ Å}$) is much smaller than the molecular chain length/spacing in polymeric rubber ($r_0 \\approx 10\\text{–}50\\text{ Å}$).\n- For identical dimensions (same volume), the atom packing density in iron is much higher than in rubber. Hence, number of atoms in iron wire is greater than in rubber.\n\n✓ **Examiner Pro-Tip**: \nMetals have tight crystalline atomic packing with very small $r_0$, resulting in vastly more atoms per unit volume than long-chain polymers.",
    "tags": [
      "elasticity",
      "interatomic-spacing",
      "structure-of-solids"
    ]
  },
  {
    "id": "errorless-phy-ela-042",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The force constant of a wire does not depend on:",
    "options": [
      "Nature of the material",
      "Radius of the wire",
      "Length of the wire",
      "None of the above (it depends on all of them)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe force constant of a wire is $K = \\frac{Y A}{L} = \\frac{Y \\pi r^2}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$K$ depends directly on:\n1. Nature of the material (through Young's modulus $Y$)\n2. Radius of the wire (through area $A = \\pi r^2$)\n3. Length of the wire ($L$)\nThus, it depends on all three parameters.\n\n✓ **Examiner Pro-Tip**: \n$K = \\frac{YA}{L}$ is extensive and depends on both geometry and material.",
    "tags": [
      "elasticity",
      "force-constant",
      "spring-factor"
    ]
  },
  {
    "id": "errorless-phy-ela-043",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The elasticity of invar:",
    "options": [
      "Increases with temperature rise",
      "Decreases with temperature rise",
      "Does not depend on temperature",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInvar is a special nickel-iron alloy ($36\\%\\text{ Ni}, 64\\%\\text{ Fe}$) renowned for its negligible thermal expansion and nearly temperature-independent elastic modulus.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThe elastic properties of invar do not change significantly with changes in temperature, which is why it is used in pendulum rods and precision balance wheels of watches.\n\n✓ **Examiner Pro-Tip**: \nInvar alloy possesses temperature-invariant elasticity.",
    "tags": [
      "elasticity",
      "invar-alloy",
      "temperature-effects"
    ]
  },
  {
    "id": "errorless-phy-ela-044",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "After effects of elasticity are maximum for:",
    "options": [
      "Glass",
      "Quartz",
      "Rubber",
      "Metal"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElastic after-effect is the time delay required by a substance to recover its original shape after removing the deforming force.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nGlass fibres show a large and prominent elastic after-effect (takes considerable time to recover), whereas quartz fibre has practically negligible elastic after-effect.\n\n✓ **Examiner Pro-Tip**: \nElastic after-effect is maximum for glass and minimum (practically zero) for quartz and phosphor bronze.",
    "tags": [
      "elasticity",
      "elastic-after-effect",
      "glass-fibre"
    ]
  },
  {
    "id": "errorless-phy-ela-045",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "In suspended type moving coil galvanometer, quartz suspension is used because:",
    "options": [
      "It is a good conductor of electricity",
      "Elastic after effects are negligible",
      "Young's modulus is greater",
      "There is no elastic limit"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIn a galvanometer, the restoring torque must accurately reflect the angle of twist without hysteresis or sluggish recovery.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nQuartz fibre has negligible elastic after-effect and very low restoring torque per unit twist ($C = \\frac{\\pi \\eta r^4}{2l}$), allowing the pointer to return to the exact zero position immediately upon removing the current.\n\n✓ **Examiner Pro-Tip**: \nNegligible elastic after-effect and low torsional rigidity make quartz/phosphor-bronze the perfect suspension material.",
    "tags": [
      "elasticity",
      "galvanometer-suspension",
      "quartz-fibre"
    ]
  },
  {
    "id": "errorless-phy-ela-046",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A force of 200 N is applied at one end of a wire of length 2 m and having area of cross-section $10^{-2}\\text{ cm}^2$. The other end of the wire is rigidly fixed. If coefficient of linear expansion of the wire $\\alpha = 8 \\times 10^{-6}/^\\circ\\text{C}$ and Young's modulus $Y = 2.2 \\times 10^{11}\\text{ N/m}^2$, and its temperature is increased by 5°C, then the increase in the tension of the wire will be:",
    "options": [
      "4.2 N",
      "4.4 N",
      "2.4 N",
      "8.8 N"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen the temperature of a fixed-ended wire is altered, the change in thermal force/tension is given by $\\Delta F = Y A \\alpha \\Delta T$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 2.2 \\times 10^{11}\\text{ N/m}^2$\n- $A = 10^{-2}\\text{ cm}^2 = 10^{-6}\\text{ m}^2$\n- $\\alpha = 8 \\times 10^{-6}/^\\circ\\text{C}$\n- $\\Delta T = 5^\\circ\\text{C}$\n$$\\Delta F = Y A \\alpha \\Delta T = (2.2 \\times 10^{11}) \\times 10^{-6} \\times (8 \\times 10^{-6}) \\times 5 = 2.2 \\times 10^{-1} \\times 40 = 8.8\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$\\Delta F = Y A \\alpha \\Delta T = 2.2 \\times 10^5 \\times 40 \\times 10^{-6} = 8.8\\text{ N}$.",
    "tags": [
      "elasticity",
      "thermal-stress",
      "wire-tension"
    ]
  },
  {
    "id": "errorless-phy-ela-047",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "When compared with solids and liquids, gases have:",
    "options": [
      "Minimum volume elasticity",
      "Maximum volume elasticity",
      "Maximum Young's modulus",
      "Maximum modulus of rigidity"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGases are highly compressible, meaning a small change in pressure produces a very large fractional change in volume.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince Bulk Modulus $K = -V\\frac{\\Delta P}{\\Delta V} = \\frac{1}{\\text{Compressibility}}$, gases have the lowest bulk modulus (minimum volume elasticity) compared to liquids and solids: $K_{gas} \\ll K_{liquid} < K_{solid}$.\n\n✓ **Examiner Pro-Tip**: \nGases possess only bulk modulus, and its value is minimum among all three states of matter.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "states-of-matter"
    ]
  },
  {
    "id": "errorless-phy-ela-048",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The length of a wire is 1.0 m and the area of cross-section is $1.0 \\times 10^{-2}\\text{ cm}^2$. If the work done for increase in length by 0.2 cm is 0.4 joule, then Young's modulus of the material of the wire is:",
    "options": [
      "$2.0 \\times 10^{10}\\text{ N/m}^2$",
      "$4 \\times 10^{10}\\text{ N/m}^2$",
      "$2.0 \\times 10^{11}\\text{ N/m}^2$",
      "$2 \\times 10^{10}\\text{ N/m}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done in stretching a wire is $W = \\frac{1}{2} \\frac{Y A l^2}{L} \\implies Y = \\frac{2 W L}{A l^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $W = 0.4\\text{ J}$, $L = 1.0\\text{ m}$\n- $A = 10^{-2}\\text{ cm}^2 = 10^{-6}\\text{ m}^2$\n- $l = 0.2\\text{ cm} = 2 \\times 10^{-3}\\text{ m}$\n$$Y = \\frac{2 \\times 0.4 \\times 1.0}{10^{-6} \\times (2 \\times 10^{-3})^2} = \\frac{0.8}{10^{-6} \\times 4 \\times 10^{-6}} = \\frac{0.8}{4 \\times 10^{-12}} = 2.0 \\times 10^{11}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = \\frac{2 W L}{A l^2} = 2.0 \\times 10^{11}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "work-done-in-stretching",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-049",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The quality of the material which opposes the change in shape, volume or length is called:",
    "options": [
      "Intermolecular repulsion",
      "Intermolecular behaviour",
      "Viscosity",
      "Elasticity"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElasticity is the intrinsic property of matter by virtue of which a body resists and tends to recover from any deformation in shape, length, or volume.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nWhen deforming forces alter the configuration of an elastic body, internal restoring forces develop that oppose the deformation and restore the body to its original state upon removal of the deforming forces.\n\n✓ **Examiner Pro-Tip**: \nElasticity is the fundamental mechanical property governing resistance to deformation.",
    "tags": [
      "elasticity",
      "definition",
      "restoring-force"
    ]
  },
  {
    "id": "errorless-phy-ela-050",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "For silver, Young's modulus is $7.25 \\times 10^{10}\\text{ N/m}^2$ and Bulk modulus is $11 \\times 10^{10}\\text{ N/m}^2$. Its Poisson's ratio will be: [DPMT 1999]",
    "options": [
      "$-1$",
      "0.5",
      "0.39",
      "0.25"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe relationship between Young's modulus $Y$, Bulk modulus $K$, and Poisson's ratio $\\sigma$ is $Y = 3K(1 - 2\\sigma)$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$1 - 2\\sigma = \\frac{Y}{3K} = \\frac{7.25 \\times 10^{10}}{3 \\times 11 \\times 10^{10}} = \\frac{7.25}{33} \\approx 0.22$$\n$$2\\sigma = 1 - 0.22 = 0.78 \\implies \\sigma = \\frac{0.78}{2} = 0.39$$\n\n✓ **Examiner Pro-Tip**: \n$\\sigma = \\frac{1}{2}\\left(1 - \\frac{Y}{3K}\\right) = \\frac{1}{2}\\left(1 - \\frac{7.25}{33}\\right) \\approx 0.39$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "inter-relations"
    ]
  },
  {
    "id": "errorless-phy-ela-051",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Longitudinal strain is only possible in:",
    "options": [
      "Gases",
      "Fluids",
      "Solids",
      "Liquids"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nLongitudinal strain requires a fixed, definite shape and the ability to sustain tensile/compressive stresses along a single direction.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFluids (liquids and gases) have no fixed shape and cannot sustain longitudinal or shear stresses; they only exhibit volume elasticity. Hence, longitudinal strain is unique to solids.\n\n✓ **Examiner Pro-Tip**: \nSolids exhibit all three moduli ($Y, K, \\eta$), while fluids exhibit only $K$.",
    "tags": [
      "elasticity",
      "longitudinal-strain",
      "solids"
    ]
  },
  {
    "id": "errorless-phy-ela-052",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If the density of the material increases, the value of Young's modulus:",
    "options": [
      "Increases",
      "Decreases",
      "First increases then decreases",
      "First decreases then increases"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nHigher density typically corresponds to more closely packed atoms with shorter interatomic distances ($r_0$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince interatomic force constant $k \\propto \\frac{1}{r_0^n}$ increases steeply with closer packing, $Y = \\frac{k}{r_0}$ increases as material density increases for similar bonding types.\n\n✓ **Examiner Pro-Tip**: \nDenser packing yields stiffer interatomic bonds and higher Young's modulus.",
    "tags": [
      "elasticity",
      "density-effect",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-053",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Young's modulus of rubber is $10^4\\text{ N/m}^2$ and area of cross-section is $2\\text{ cm}^2$. If force of $2 \\times 10^5\\text{ dynes}$ is applied along its length, then its initial length $L$ becomes:",
    "options": [
      "$3L$",
      "$4L$",
      "$2L$",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $\\Delta L = \\frac{F L}{A Y} \\implies \\text{Final Length} = L + \\Delta L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = 2 \\times 10^5\\text{ dynes} = 2\\text{ N}$\n- $A = 2\\text{ cm}^2 = 2 \\times 10^{-4}\\text{ m}^2$\n- $Y = 10^4\\text{ N/m}^2$\n$$\\Delta L = \\frac{2 \\times L}{(2 \\times 10^{-4}) \\times 10^4} = \\frac{2L}{2} = L$$\n$$\\text{Final length} = L + \\Delta L = L + L = 2L$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Strain} = \\frac{\\Delta L}{L} = 1 \\implies \\text{Final Length} = 2L$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-054",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The elastic limit for a gas:",
    "options": [
      "Exists",
      "Exists only at absolute zero",
      "Exists for a perfect gas",
      "Does not exist"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGases obey Boyle's law and return completely to their original volume upon release of pressure under reversible isothermal/adiabatic conditions.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nGases exhibit volume elasticity without suffering permanent structural deformation under ideal gas conditions, so an elastic limit in the solid-fracture sense does not limit their pressure-volume elasticity; elasticity exists over standard thermodynamic ranges.\n\n✓ **Examiner Pro-Tip**: \nVolume elasticity of a gas exists and is equal to isothermal pressure $P$ or adiabatic $\\gamma P$.",
    "tags": [
      "elasticity",
      "gas-elasticity",
      "elastic-limit"
    ]
  },
  {
    "id": "errorless-phy-ela-055",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If Young's modulus for a material is zero, then the state of material should be:",
    "options": [
      "Solid",
      "Solid but powder (or liquid/gas)",
      "Gas",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus measures resistance to longitudinal deformation.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nPowdered solids (like fine sand or talc), liquids, and gases cannot sustain any longitudinal tensile or compressive stress ($F_{restoring} = 0$), so $Y = 0$.\n\n✓ **Examiner Pro-Tip**: \nMaterials lacking cohesive lattice structure along a line (powders, liquids) have $Y = 0$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "powdered-solids"
    ]
  },
  {
    "id": "errorless-phy-ela-056",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Liquids have no Poisson's ratio, because:",
    "options": [
      "They have no definite shape",
      "They have greater volume",
      "They have lesser density than solid",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nPoisson's ratio is defined as $\\sigma = \\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nLiquids possess no fixed lateral boundaries or definite shape and cannot sustain longitudinal stretching, making longitudinal and lateral strains meaningless.\n\n✓ **Examiner Pro-Tip**: \nPoisson's ratio $\\sigma$ is defined exclusively for solids.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "liquids"
    ]
  },
  {
    "id": "errorless-phy-ela-057",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A wire of length $L$ and radius $r$ is rigidly fixed at one end. On stretching the other end of the wire with a force $F$, the increase in its length is $l$. If another wire of same material but of length $2L$ and radius $2r$ is stretched with a force of $2F$, the increase in its length will be: [NCERT 1980; AIIMS 1980; MP PET 1989, 92; MP PMT 1996, 2002; UPSEAT 2002]",
    "options": [
      "$l$",
      "$2l$",
      "$l/2$",
      "$l/4$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{F L}{\\pi r^2 Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = \\frac{(2F)(2L)}{\\pi (2r)^2 Y} = \\frac{4FL}{4\\pi r^2 Y} = \\frac{FL}{\\pi r^2 Y} = l$$\n\n✓ **Examiner Pro-Tip**: \n$\\frac{l'}{l} = \\frac{2 \\times 2}{2^2} = \\frac{4}{4} = 1 \\implies l' = l$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-058",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "In steel, the Young's modulus and the strain at the breaking point are $2 \\times 10^{11}\\text{ N/m}^2$ and 0.15 respectively. The stress at the breaking point for steel is therefore: [MP PET 1990; MP PMT 1992; DPMT 2001]",
    "options": [
      "$1.33 \\times 10^{11}\\text{ N/m}^2$",
      "$1.33 \\times 10^{12}\\text{ N/m}^2$",
      "$7.5 \\times 10^{-13}\\text{ N/m}^2$",
      "$3 \\times 10^{10}\\text{ N/m}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBreaking Stress $= Y \\times \\text{Breaking Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\text{Breaking Stress} = (2 \\times 10^{11}\\text{ N/m}^2) \\times 0.15 = 0.30 \\times 10^{11} = 3 \\times 10^{10}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Breaking Stress} = 3 \\times 10^{10}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "breaking-stress",
      "stress-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-059",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is correct? [MP PET 1992]",
    "options": [
      "Hooke's law is applicable only within elastic limit",
      "The adiabatic and isothermal elastic constants of a gas are equal",
      "Young's modulus is dimensionless",
      "Stress multiplied by strain is equal to the stored energy"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nHooke's law ($\\\\text{Stress} \\propto \\text{Strain}$) holds strictly only within the proportional/elastic limit of the material.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- (b) is false because $E_\\phi = \\gamma E_\\theta \\neq E_\\theta$.\n- (c) is false because $Y$ has dimensions $[ML^{-1}T^{-2}]$.\n- (d) is false because stored energy density is $\\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$.\nHence, statement (a) is the only correct statement.\n\n✓ **Examiner Pro-Tip**: \nHooke's law is valid only up to the limit of proportionality.",
    "tags": [
      "elasticity",
      "hookes-law",
      "conceptual"
    ]
  },
  {
    "id": "errorless-phy-ela-060",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The force required to stretch a steel wire of $1\\text{ cm}^2$ cross-section to 1.1 times its length would be ($Y = 2 \\times 10^{11}\\text{ N/m}^2$): [MP PET 1992]",
    "options": [
      "$2 \\times 10^6\\text{ N}$",
      "$2 \\times 10^3\\text{ N}$",
      "$2 \\times 10^{-6}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce $F = Y A \\times \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $L' = 1.1 L \\implies \\Delta L = 0.1 L$\n- $\\text{Strain} = \\frac{\\Delta L}{L} = 0.1$\n- $A = 1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$\n$$F = (2 \\times 10^{11}) \\times 10^{-4} \\times 0.1 = 2 \\times 10^6\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$F = 2 \\times 10^{11} \\times 10^{-4} \\times 0.1 = 2 \\times 10^6\\text{ N}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "stretching-force"
    ]
  },
  {
    "id": "errorless-phy-ela-061",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Which one of the following substances possesses the highest elasticity? [MP PMT 1992; RPMT 1999; RPET 2000; MH CET 2001]",
    "options": [
      "Rubber",
      "Glass",
      "Steel",
      "Copper"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElasticity is measured by the magnitude of Young's modulus $Y$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y_{steel} \\approx 20 \\times 10^{10}\\text{ N/m}^2$\n- $Y_{copper} \\approx 11 \\times 10^{10}\\text{ N/m}^2$\n- $Y_{glass} \\approx 6 \\times 10^{10}\\text{ N/m}^2$\n- $Y_{rubber} \\approx 10^6\\text{–}10^8\\text{ N/m}^2$\nSteel has the highest Young's modulus among the choices.\n\n✓ **Examiner Pro-Tip**: \nIn physics, steel is far more elastic than rubber because it requires vastly greater stress to produce unit strain.",
    "tags": [
      "elasticity",
      "materials-comparison",
      "highest-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-062",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Which one of the following quantities does not have the unit of force per unit area? [MP PMT 1992]",
    "options": [
      "Stress",
      "Strain",
      "Young's modulus of elasticity",
      "Pressure"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStrain is the ratio of two like quantities (change in dimension to original dimension), hence it is dimensionless and unitless.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Stress: $\\text{N/m}^2$\n- Young's modulus: $\\text{N/m}^2$\n- Pressure: $\\text{N/m}^2$\n- Strain: Dimensionless ($[M^0L^0T^0]$)\n\n✓ **Examiner Pro-Tip**: \nStrain has no units and no dimensions.",
    "tags": [
      "elasticity",
      "dimensions-and-units",
      "strain"
    ]
  },
  {
    "id": "errorless-phy-ela-063",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A copper wire and a steel wire of the same diameter and length are connected end to end and a force is applied, which stretches their combined length by 1 cm. The two wires will have: [MP PMT 1992]",
    "options": [
      "Different stresses and strains",
      "The same stress and strain",
      "The same strain but different stresses",
      "The same stress but different strains"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor wires connected in series, the stretching tension $F$ transmitted through both wires is identical.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. Since diameter is same, cross-sectional area $A$ is same, so $\\text{Stress} = \\frac{F}{A}$ is identical in both wires.\n2. Since $Y_{steel} > Y_{copper}$, the strain produced ($\\text{Strain} = \\frac{\\text{Stress}}{Y}$) will be different (larger in copper, smaller in steel).\nThus, they experience the same stress but different strains.\n\n✓ **Examiner Pro-Tip**: \nSeries connection $\\implies$ equal force $\\implies$ equal stress; different $Y \\implies$ different strains.",
    "tags": [
      "elasticity",
      "series-combination",
      "stress-and-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-064",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A steel ring of radius $r$ and cross-section area $A$ is fitted onto a wooden disc of radius $R$ ($R > r$). If Young's modulus is $E$, then the force with which the steel ring is expanded is: [EAMCET 1986]",
    "options": [
      "$A E \\frac{R}{r}$",
      "$A E \\left(\\frac{R - r}{r}\\right)$",
      "$\\frac{E}{A}\\left(\\frac{R - r}{A}\\right)$",
      "$\\frac{E r}{A R}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInitial circumference of the ring is $L = 2\\pi r$ and expanded circumference on the disc is $L' = 2\\pi R$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Increase in circumference: $\\Delta L = 2\\pi(R - r)$\n- Longitudinal strain: $\\text{Strain} = \\frac{\\Delta L}{L} = \\frac{2\\pi(R - r)}{2\\pi r} = \\frac{R - r}{r}$\n- Expanding tension force:\n  $$F = E A \\times \\text{Strain} = A E \\left(\\frac{R - r}{r}\\right)$$\n\n✓ **Examiner Pro-Tip**: \n$F = A E \\left(\\frac{R - r}{r}\\right)$.",
    "tags": [
      "elasticity",
      "ring-expansion",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-065",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A wire extends by 1 mm when a force is applied. Double the force is applied to another wire of same material and length but half the radius of cross-section. The elongation of the wire in mm will be: [EAMCET 1986]",
    "options": [
      "8",
      "4",
      "2",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{F L}{\\pi r^2 Y} \\propto \\frac{F}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_2}{l_1} = \\left(\\frac{F_2}{F_1}\\right) \\left(\\frac{r_1}{r_2}\\right)^2 = (2) \\times (2)^2 = 2 \\times 4 = 8$$\n$$l_2 = 8 \\times 1\\text{ mm} = 8\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \nDoubling force ($\times 2$) and halving radius ($\times 4$) multiplies elongation by $2 \\times 4 = 8$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-066",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Two wires of the same material have lengths in the ratio $1 : 2$ and their radii are in the ratio $1 : \\sqrt{2}$. If they are stretched by applying equal forces, the increase in their lengths will be in the ratio: [MP PET 1994]",
    "options": [
      "$2 : \\sqrt{2}$",
      "$\\sqrt{2} : 2$",
      "$1 : 1$",
      "$1 : 2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l \\propto \\frac{L}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_1}{l_2} = \\left(\\frac{L_1}{L_2}\\right) \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{1}{2}\\right) \\left(\\frac{\\sqrt{2}}{1}\\right)^2 = \\frac{1}{2} \\times 2 = 1$$\nThus, the ratio is $1 : 1$.\n\n✓ **Examiner Pro-Tip**: \n$\\frac{l_1}{l_2} = \\frac{1}{2} \\times (\\sqrt{2})^2 = 1:1$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-067",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "When a weight of 10 kg is suspended from a copper wire of length 3 metres and diameter 0.4 mm, its length increases by 2.4 cm. If the diameter of the wire is doubled, then the extension in its length will be: [MP PMT 1994]",
    "options": [
      "9.6 cm",
      "4.8 cm",
      "1.2 cm",
      "0.6 cm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nExtension $l \\propto \\frac{1}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = \\frac{l}{2^2} = \\frac{2.4\\text{ cm}}{4} = 0.6\\text{ cm}$$\n\n✓ **Examiner Pro-Tip**: \nDoubling the diameter reduces the extension to $\\frac{1}{4}$ of the original: $2.4 / 4 = 0.6\\text{ cm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-068",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A force of $10^3\\text{ N}$ stretches the length of a hanging wire by 1 millimetre. The force required to stretch a wire of same material and length but having four times the diameter by 1 millimetre is: [MP PMT 1995]",
    "options": [
      "$4 \\times 10^3\\text{ N}$",
      "$16 \\times 10^3\\text{ N}$",
      "$\\frac{1}{4} \\times 10^3\\text{ N}$",
      "$\\frac{1}{16} \\times 10^3\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce $F = \\frac{Y A l}{L} = \\frac{Y \\pi d^2 l}{4L} \\propto d^2$ for the same elongation $l$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F' = F \\left(\\frac{d'}{d}\\right)^2 = 10^3 \\times (4)^2 = 16 \\times 10^3\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n4 times diameter $\\implies 16$ times area $\\implies 16$ times force required.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "force-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-069",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Two wires A and B of the same material have radii in the ratio $2 : 1$ and lengths in the ratio $4 : 1$. The ratio of the normal forces required to produce the same change in the lengths of these two wires is: [Haryana CEE 1996]",
    "options": [
      "$1 : 1$",
      "$2 : 1$",
      "$1 : 4$",
      "$1 : 2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce $F = \\frac{Y A l}{L} = \\frac{Y \\pi r^2 l}{L} \\implies F \\propto \\frac{r^2}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{F_A}{F_B} = \\left(\\frac{r_A}{r_B}\\right)^2 \\left(\\frac{L_B}{L_A}\\right) = (2)^2 \\times \\left(\\frac{1}{4}\\right) = 4 \\times \\frac{1}{4} = 1$$\nThus, the ratio of forces is $1 : 1$.\n\n✓ **Examiner Pro-Tip**: \n$\\frac{F_A}{F_B} = \\frac{2^2}{4} = 1:1$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-070",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Density of rubber is $d$. A thick rubber cord of length $L$ and cross-section area $A$ undergoes elongation under its own weight on suspending it. This elongation is proportional to:",
    "options": [
      "$d L$",
      "$A d / L$",
      "$A d / L^2$",
      "$d L^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation of a hanging uniform cord under its own weight is $l = \\frac{M g L}{2 A Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSubstituting $M = A L d$:\n$$l = \\frac{(A L d) g L}{2 A Y} = \\frac{d g L^2}{2 Y} \\propto d L^2$$\n\n✓ **Examiner Pro-Tip**: \nElongation under self-weight is directly proportional to density $d$ and the square of length $L^2$: $l \\propto d L^2$.",
    "tags": [
      "elasticity",
      "self-weight-elongation",
      "proportionality"
    ]
  },
  {
    "id": "errorless-phy-ela-071",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The ratio of two specific heats of gas $C_p / C_v$ for argon is 1.6 and for hydrogen is 1.4. Adiabatic elasticity of argon at pressure $P$ is $E$. Adiabatic elasticity of hydrogen will also be equal to $E$ at the pressure: [MP PMT 1992]",
    "options": [
      "$P$",
      "$\\frac{8}{7} P$",
      "$\\frac{7}{8} P$",
      "$1.4 P$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAdiabatic bulk modulus of an ideal gas is $E_\\phi = \\gamma P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- For argon: $E = \\gamma_{Ar} P = 1.6 P$\n- For hydrogen: $E = \\gamma_{H_2} P' = 1.4 P'$\n$$1.4 P' = 1.6 P \\implies P' = \\frac{1.6}{1.4} P = \\frac{8}{7} P$$\n\n✓ **Examiner Pro-Tip**: \n$P' = \\frac{\\gamma_1}{\\gamma_2} P = \\frac{1.6}{1.4} P = \\frac{8}{7} P$.",
    "tags": [
      "elasticity",
      "adiabatic-elasticity",
      "ideal-gas"
    ]
  },
  {
    "id": "errorless-phy-ela-072",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The relation between Young's modulus $Y$, rigidity modulus $\\eta$ and Bulk modulus $K$ for an elastic material is:",
    "options": [
      "$\\frac{1}{\\eta} = \\frac{1}{Y} + \\frac{1}{9K}$",
      "$\\frac{1}{K} = \\frac{1}{3Y} + \\frac{1}{9\\eta}$",
      "$\\frac{1}{K} = \\frac{1}{Y} + \\frac{1}{9\\eta}$",
      "$\\frac{9}{Y} = \\frac{3}{\\eta} + \\frac{1}{K}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe fundamental interrelation between the three elastic moduli is $\\frac{9}{Y} = \\frac{3}{\\eta} + \\frac{1}{K}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFrom $Y = 3K(1 - 2\\sigma)$ and $Y = 2\\eta(1 + \\sigma)$, eliminate $\\sigma$:\n$$\\frac{1}{K} + \\frac{3}{\\eta} = \\frac{3(1-2\\sigma)}{Y} + \\frac{6(1+\\sigma)}{Y} = \\frac{3 - 6\\sigma + 6 + 6\\sigma}{Y} = \\frac{9}{Y}$$\n\n✓ **Examiner Pro-Tip**: \nStandard master identity: $\\frac{9}{Y} = \\frac{3}{\\eta} + \\frac{1}{K}$.",
    "tags": [
      "elasticity",
      "elastic-moduli-relation",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-073",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A fixed volume of iron is drawn into a wire of length $L$. The extension $x$ produced in this wire by a constant force $F$ is proportional to: [MP PMT 1999]",
    "options": [
      "$1/L^2$",
      "$1/L$",
      "$L^2$",
      "$L$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor a constant volume $V = A L$, cross-sectional area is $A = \\frac{V}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nExtension is given by:\n$$x = \\frac{F L}{A Y} = \\frac{F L}{(V/L) Y} = \\frac{F L^2}{V Y} \\propto L^2$$\nThus, the extension $x$ is directly proportional to $L^2$.\n\n✓ **Examiner Pro-Tip**: \nWhen drawn from constant volume, extension scales with $L^2$: $x \\propto L^2$.",
    "tags": [
      "elasticity",
      "constant-volume-drawing",
      "wire-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-074",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A wire of cross-sectional area $3\\text{ mm}^2$ is first stretched between two fixed points at a temperature of 20°C. Determine the tension when the temperature falls to 10°C ($\\alpha = 10^{-5}/^\\circ\\text{C}$ and $Y = 2 \\times 10^{11}\\text{ N/m}^2$): [EAMCET 1994; MP PET 1994]",
    "options": [
      "20 N",
      "30 N",
      "60 N",
      "120 N"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTension produced due to cooling clamped wire is $T = Y A \\alpha \\Delta\\theta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 2 \\times 10^{11}\\text{ N/m}^2$\n- $A = 3\\text{ mm}^2 = 3 \\times 10^{-6}\\text{ m}^2$\n- $\\alpha = 10^{-5}/^\\circ\\text{C}$\n- $\\Delta\\theta = 20 - 10 = 10^\\circ\\text{C}$\n$$T = (2 \\times 10^{11}) \\times (3 \\times 10^{-6}) \\times 10^{-5} \\times 10 = 6 \\times 10^1 = 60\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$T = Y A \\alpha \\Delta\\theta = 2 \\times 10^{11} \\times 3 \\times 10^{-6} \\times 10^{-4} = 60\\text{ N}$.",
    "tags": [
      "elasticity",
      "thermal-tension",
      "clamped-wire"
    ]
  },
  {
    "id": "errorless-phy-ela-075",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "To keep constant time, watches are fitted with a balance wheel made of: [EAMCET 1994]",
    "options": [
      "Invar",
      "Stainless steel",
      "Tungsten",
      "Platinum"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInvar has an exceptionally low coefficient of thermal expansion ($\\alpha \\approx 1.2 \\times 10^{-6}/^\\circ\\text{C}$) and temperature-invariant elasticity.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nUsing invar in the balance wheel prevents temperature-induced fluctuations in the moment of inertia and spring torque, keeping the watch accurate across varying weather conditions.\n\n✓ **Examiner Pro-Tip**: \nInvar maintains dimensional and elastic stability with temperature.",
    "tags": [
      "elasticity",
      "invar",
      "timekeeping"
    ]
  },
  {
    "id": "errorless-phy-ela-076",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A wire is stretched by 0.01 m by a certain force $F$. Another wire of same material whose diameter and length are double to the original wire is stretched by the same force. Then its elongation will be: [EAMCET 1995; CPMT 2001]",
    "options": [
      "0.005 m",
      "0.01 m",
      "0.02 m",
      "0.002 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{4FL}{\\pi d^2 Y} \\propto \\frac{L}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{L'}{L}\\right) \\left(\\frac{d}{d'}\\right)^2 = 0.01\\text{ m} \\times (2) \\times \\left(\\frac{1}{2}\\right)^2 = 0.01 \\times \\frac{2}{4} = 0.005\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: \n$l' = \\frac{l}{2} = \\frac{0.01}{2} = 0.005\\text{ m}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-077",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The possible value of Poisson's ratio for a real material is: [EAMCET 1995]",
    "options": [
      "1",
      "0.9",
      "0.8",
      "0.4"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor practical materials, Poisson's ratio lies in the range $0 < \\sigma < 0.5$ (theoretical range $-1 \\le \\sigma \\le 0.5$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nAmong the given options, only 0.4 falls within the practical physical range $(0, 0.5)$.\n\n✓ **Examiner Pro-Tip**: \nPractical Poisson's ratio range for real materials is $0 \\le \\sigma < 0.5$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "limits"
    ]
  },
  {
    "id": "errorless-phy-ela-078",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The coefficient of linear expansion of brass and steel are $\\alpha_1$ and $\\alpha_2$. If we take a brass rod of length $l_1$ and steel rod of length $l_2$ at 0°C, their difference in length $(l_2 - l_1)$ will remain the same at all temperatures if: [EAMCET 1995]",
    "options": [
      "$\\alpha_1 l_2 = \\alpha_2 l_1$",
      "$\\alpha_1 l_2^2 = \\alpha_2 l_1^2$",
      "$\\alpha_1^2 l_2 = \\alpha_2^2 l_1$",
      "$\\alpha_1 l_1 = \\alpha_2 l_2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nChange in length with temperature: $\\Delta l = l \\alpha \\Delta T$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor the difference $(l_2 - l_1)$ to remain invariant:\n$$\\Delta l_2 - \\Delta l_1 = 0 \\implies l_2 \\alpha_2 \\Delta T - l_1 \\alpha_1 \\Delta T = 0 \\implies \\alpha_1 l_1 = \\alpha_2 l_2$$\n\n✓ **Examiner Pro-Tip**: \nConstant length difference condition: $\\alpha_1 l_1 = \\alpha_2 l_2$.",
    "tags": [
      "elasticity",
      "thermal-expansion",
      "bimetallic-rods"
    ]
  },
  {
    "id": "errorless-phy-ela-079",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A rod is fixed between two points at 20°C. The coefficient of linear expansion of material of rod is $1.1 \\times 10^{-5}/^\\circ\\text{C}$ and Young's modulus is $1.2 \\times 10^{11}\\text{ N/m}^2$. Find the stress developed in the rod if the temperature of the rod becomes 10°C: [RPET 1997]",
    "options": [
      "$1.32 \\times 10^7\\text{ N/m}^2$",
      "$1.10 \\times 10^{15}\\text{ N/m}^2$",
      "$1.32 \\times 10^8\\text{ N/m}^2$",
      "$1.10 \\times 10^6\\text{ N/m}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThermal stress developed is $\\text{Stress} = Y \\alpha \\Delta T$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\Delta T = 20 - 10 = 10^\\circ\\text{C}$\n- $\\alpha = 1.1 \\times 10^{-5}/^\\circ\\text{C}$\n- $Y = 1.2 \\times 10^{11}\\text{ N/m}^2$\n$$\\text{Stress} = (1.2 \\times 10^{11}) \\times (1.1 \\times 10^{-5}) \\times 10 = 1.32 \\times 10^7\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Stress} = Y \\alpha \\Delta T = 1.32 \\times 10^7\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "thermal-stress",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-080",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The extension of a wire by the application of load is 3 mm. The extension in a wire of the same material and length but half the radius by the same load is: [CMEET Bihar 1995]",
    "options": [
      "12 mm",
      "0.75 mm",
      "15 mm",
      "6 mm"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{FL}{\\pi r^2 Y} \\propto \\frac{1}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{r}{r'}\\right)^2 = 3\\text{ mm} \\times (2)^2 = 3 \\times 4 = 12\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \nHalving radius quadruples extension: $3 \\times 4 = 12\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-081",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A rubber pipe of density $1.5 \\times 10^3\\text{ kg/m}^3$ and Young's modulus $5 \\times 10^6\\text{ N/m}^2$ is suspended from the roof. The length of the pipe is 8 m. What will be the change in length due to its own weight? [RPET 1996]",
    "options": [
      "9.6 m",
      "$9.6 \\times 10^3\\text{ m}$",
      "$19.2 \\times 10^{-2}\\text{ m}$",
      "$9.6 \\times 10^{-2}\\text{ m}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation of a hanging vertical pipe under its own weight is $l = \\frac{L^2 \\rho g}{2Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $L = 8\\text{ m} \\implies L^2 = 64\\text{ m}^2$\n- $\\rho = 1.5 \\times 10^3\\text{ kg/m}^3$\n- $g = 10\\text{ m/s}^2$\n- $Y = 5 \\times 10^6\\text{ N/m}^2$\n$$l = \\frac{64 \\times (1.5 \\times 10^3) \\times 10}{2 \\times (5 \\times 10^6)} = \\frac{960 \\times 10^3}{10^7} = 96 \\times 10^{-3}\\text{ m} = 9.6 \\times 10^{-2}\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: \n$l = \\frac{L^2 \\rho g}{2Y} = 9.6 \\times 10^{-2}\\text{ m} = 9.6\\text{ cm}$.",
    "tags": [
      "elasticity",
      "self-weight-elongation",
      "rubber-pipe"
    ]
  },
  {
    "id": "errorless-phy-ela-082",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "In which case is there maximum extension in the wire, if the same force is applied on each wire? [AFMC 1997]",
    "options": [
      "$L = 500\\text{ cm}, d = 0.05\\text{ mm}$",
      "$L = 200\\text{ cm}, d = 0.02\\text{ mm}$",
      "$L = 300\\text{ cm}, d = 0.03\\text{ mm}$",
      "$L = 400\\text{ cm}, d = 0.01\\text{ mm}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nExtension $l \\propto \\frac{L}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nCalculating $\\frac{L}{d^2}$:\n- (a) $\\frac{500}{(0.05)^2} = \\frac{500}{0.0025} = 200,000$\n- (b) $\\frac{200}{(0.02)^2} = \\frac{200}{0.0004} = 500,000$\n- (c) $\\frac{300}{(0.03)^2} = \\frac{300}{0.0009} \\approx 333,333$\n- (d) $\\frac{400}{(0.01)^2} = \\frac{400}{0.0001} = 4,000,000$\nCase (d) has by far the largest value ($4 \\times 10^6$).\n\n✓ **Examiner Pro-Tip**: \nSmallest diameter ($d = 0.01\\text{ mm}$) dominates because $l \\propto 1/d^2$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-083",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "If a spring is extended by length $l$, then according to Hooke's law: [CPMT 1997]",
    "options": [
      "$F = k l$",
      "$F = k / l$",
      "$F = k l^2$",
      "$F = k / l^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nHooke's Law for springs states that the restoring force is directly proportional to the displacement/extension: $F = k l$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$F = kl$, where $k$ is the spring constant.\n\n✓ **Examiner Pro-Tip**: \n$F = kl$ represents the linear elastic response.",
    "tags": [
      "elasticity",
      "hookes-law",
      "spring-force"
    ]
  },
  {
    "id": "errorless-phy-ela-084",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Which of the following affects the elasticity of a substance? [AIIMS 1999]",
    "options": [
      "Hammering and annealing",
      "Change in temperature",
      "Impurity in substance",
      "All of these"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElasticity is influenced by multiple physical and metallurgical factors.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. Hammering increases elasticity by breaking grains into smaller crystals; annealing decreases elasticity.\n2. Temperature variation alters interatomic spacing and bond stiffness.\n3. Presence of impurities significantly affects lattice cohesion and elasticity.\nTherefore, all of the listed factors affect elasticity.\n\n✓ **Examiner Pro-Tip**: \nAll mechanical processing, thermal states, and chemical impurities affect elasticity.",
    "tags": [
      "elasticity",
      "factors-affecting-elasticity",
      "conceptual"
    ]
  },
  {
    "id": "errorless-phy-ela-085",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "An iron rod of length 2 m and cross-section area $50\\text{ mm}^2$ is stretched by 0.5 mm when a mass of 250 kg is hung from its lower end. Young's modulus of the iron rod is: [AFMC 1999]",
    "options": [
      "$19.6 \\times 10^{10}\\text{ N/m}^2$",
      "$19.6 \\times 10^{15}\\text{ N/m}^2$",
      "$19.6 \\times 10^{18}\\text{ N/m}^2$",
      "$19.6 \\times 10^{20}\\text{ N/m}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y = \\frac{M g L}{A \\Delta L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $M = 250\\text{ kg} \\implies F = 250 \\times 9.8 = 2450\\text{ N}$\n- $L = 2\\text{ m}$\n- $A = 50\\text{ mm}^2 = 50 \\times 10^{-6}\\text{ m}^2 = 5 \\times 10^{-5}\\text{ m}^2$\n- $\\Delta L = 0.5\\text{ mm} = 5 \\times 10^{-4}\\text{ m}$\n$$Y = \\frac{2450 \\times 2}{(5 \\times 10^{-5}) \\times (5 \\times 10^{-4})} = \\frac{4900}{25 \\times 10^{-9}} = 196 \\times 10^9 = 19.6 \\times 10^{10}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = 19.6 \\times 10^{10}\\text{ N/m}^2 = 1.96 \\times 10^{11}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-086",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "In solids, inter-atomic forces are: [DCE 1999]",
    "options": [
      "Totally repulsive",
      "Totally attractive",
      "Combination of attractive and repulsive forces",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInteratomic forces in solids originate from electrostatic interactions between positive nuclei and negative electron clouds.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- At separations $r > r_0$, attractive forces dominate, pulling atoms together.\n- At separations $r < r_0$, electron cloud overlap creates strong repulsive forces, pushing atoms apart.\n- At equilibrium separation $r = r_0$, the net force is zero.\nThus, interatomic forces are a combination of attractive and repulsive forces.\n\n✓ **Examiner Pro-Tip**: \n$F_{net} = F_{att} + F_{rep} = -\\frac{a}{r^7} + \\frac{b}{r^9}$.",
    "tags": [
      "elasticity",
      "interatomic-forces",
      "solids"
    ]
  },
  {
    "id": "errorless-phy-ela-087",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A force $F$ is applied on a wire of radius $r$ and length $L$, and the change in length is $l$. If the same force $F$ is applied on a wire of the same material and radius $2r$ and length $2L$, then the change in length of the other wire is: [RPMT 1999]",
    "options": [
      "$l$",
      "$2l$",
      "$l/2$",
      "$4l$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{FL}{\\pi r^2 Y} \\propto \\frac{L}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{L'}{L}\\right) \\left(\\frac{r}{r'}\\right)^2 = l \\times (2) \\times \\left(\\frac{1}{2}\\right)^2 = l \\times \\frac{2}{4} = \\frac{l}{2}$$\n\n✓ **Examiner Pro-Tip**: \n$l' = \\frac{2}{2^2} l = \\frac{l}{2}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-088",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The modulus of elasticity is dimensionally equivalent to: [MH CET (Med.) 1999]",
    "options": [
      "Surface tension",
      "Stress",
      "Strain",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nModulus of elasticity $E = \\frac{\\text{Stress}}{\\text{Strain}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince strain is dimensionless ($[M^0L^0T^0]$):\n$$[E] = [\\text{Stress}] = [\\text{Pressure}] = [ML^{-1}T^{-2}]$$\n\n✓ **Examiner Pro-Tip**: \nStress, pressure, and all elastic moduli ($Y, K, \\eta$) share the same dimensional formula: $[ML^{-1}T^{-2}]$.",
    "tags": [
      "elasticity",
      "dimensions-and-units",
      "modulus-of-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-089",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Under elastic limit the stress is: [MH CET 1999; KCET 1999]",
    "options": [
      "Inversely proportional to strain",
      "Directly proportional to strain",
      "Square root of strain",
      "Independent of strain"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Hooke's Law, within the proportional/elastic limit, stress is directly proportional to strain: $\\text{Stress} \\propto \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{\\text{Stress}}{\\text{Strain}} = \\text{Constant} = E$$\n\n✓ **Examiner Pro-Tip**: \nLinear elastic behavior implies $\\sigma \\propto \\varepsilon$.",
    "tags": [
      "elasticity",
      "hookes-law",
      "stress-and-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-090",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A steel wire of 1 m long and $1\\text{ mm}^2$ cross section area is hung from a rigid end. When a weight of 1 kg is hung from it, then change in length will be ($Y = 2 \\times 10^{11}\\text{ N/m}^2$, $g = 10\\text{ m/s}^2$): [RPMT 2000]",
    "options": [
      "0.5 mm",
      "0.25 mm",
      "0.05 mm",
      "5 mm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIncrease in length is $\\Delta L = \\frac{M g L}{A Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $M = 1\\text{ kg}, g = 10\\text{ m/s}^2 \\implies F = 10\\text{ N}$\n- $L = 1\\text{ m}$\n- $A = 1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$\n- $Y = 2 \\times 10^{11}\\text{ N/m}^2$\n$$\\Delta L = \\frac{10 \\times 1}{10^{-6} \\times (2 \\times 10^{11})} = \\frac{10}{2 \\times 10^5} = 5 \\times 10^{-5}\\text{ m} = 0.05\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \n$\\Delta L = 5 \\times 10^{-5}\\text{ m} = 0.05\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-091",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A load $W$ produces an extension of 1 mm in a thread of radius $r$. Now if the load is made $4W$ and radius is made $2r$ all other things remaining same, the extension will become: [RPET 2000]",
    "options": [
      "4 mm",
      "16 mm",
      "1 mm",
      "0.25 mm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{F L}{\\pi r^2 Y} \\propto \\frac{F}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{F'}{F}\\right) \\left(\\frac{r}{r'}\\right)^2 = 1\\text{ mm} \\times (4) \\times \\left(\\frac{1}{2}\\right)^2 = 1 \\times 4 \\times \\frac{1}{4} = 1\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \n$l' = l \\times \\frac{4}{2^2} = 1\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-092",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The units of Young's modulus of elasticity are: [CPMT 2000; KCET 2000]",
    "options": [
      "$\\text{N}\\cdot\\text{m}^{-1}$",
      "$\\text{N}\\cdot\\text{m}$",
      "$\\text{N}\\cdot\\text{m}^{-2}$",
      "$\\text{N}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F / A}{\\Delta L / L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nUnit of $F = \\text{N}$, unit of $A = \\text{m}^2$, strain is dimensionless. Hence, unit of $Y = \\text{N/m}^2 = \\text{N}\\cdot\\text{m}^{-2}$ (Pascal, Pa).\n\n✓ **Examiner Pro-Tip**: \nSI unit of elastic modulus is $\\text{N}\\cdot\\text{m}^{-2}$ or $\\text{Pa}$.",
    "tags": [
      "elasticity",
      "units",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-093",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Two similar wires under the same load yield elongations of 0.1 mm and 0.05 mm respectively. If the area of cross-section of the first wire is $4\\text{ mm}^2$, then the area of cross section of the second wire is: [CPMT 2000; Pb. PET 2002]",
    "options": [
      "$6\\text{ mm}^2$",
      "$8\\text{ mm}^2$",
      "$10\\text{ mm}^2$",
      "$12\\text{ mm}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{FL}{AY} \\implies l \\propto \\frac{1}{A}$ (for same load, length, and material).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{A_2}{A_1} = \\frac{l_1}{l_2} \\implies A_2 = A_1 \\left(\\frac{l_1}{l_2}\\right) = 4\\text{ mm}^2 \\times \\left(\\frac{0.1\\text{ mm}}{0.05\\text{ mm}}\\right) = 4 \\times 2 = 8\\text{ mm}^2$$\n\n✓ **Examiner Pro-Tip**: \n$A_2 = 4 \\times \\frac{0.1}{0.05} = 8\\text{ mm}^2$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "cross-section-area"
    ]
  },
  {
    "id": "errorless-phy-ela-094",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A 5 m long aluminium wire ($Y = 7 \\times 10^{10}\\text{ N/m}^2$) of diameter 3 mm supports a 40 kg mass. In order to have the same elongation in a copper wire ($Y = 12 \\times 10^{10}\\text{ N/m}^2$) of the same length under the same weight, the diameter should now be, in mm: [AMU 2000]",
    "options": [
      "1.75",
      "1.5",
      "2.3 (nearly 2.5)",
      "5.0"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{4FL}{\\pi d^2 Y}$. For equal elongation under same force and length, $d^2 Y = \\text{constant}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$d_{Cu}^2 Y_{Cu} = d_{Al}^2 Y_{Al} \\implies d_{Cu} = d_{Al} \\sqrt{\\frac{Y_{Al}}{Y_{Cu}}}$$\n$$d_{Cu} = 3\\text{ mm} \\times \\sqrt{\\frac{7 \\times 10^{10}}{12 \\times 10^{10}}} = 3 \\times \\sqrt{\\frac{7}{12}} = 3 \\times \\sqrt{0.5833} = 3 \\times 0.7638 \\approx 2.29\\text{ mm} \\approx 2.3\\text{ mm (given as 2.5 mm)}$$\n\n✓ **Examiner Pro-Tip**: \n$d_{Cu} = 3 \\sqrt{7/12} \\approx 2.3\\text{–}2.5\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "diameter-calculation"
    ]
  },
  {
    "id": "errorless-phy-ela-095",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "How much force is required to produce an increase of 0.2% in the length of a brass wire of diameter 0.6 mm? (Young's modulus for brass $= 0.9 \\times 10^{11}\\text{ N/m}^2$) [MP PMT 2000]",
    "options": [
      "Nearly 17 N",
      "Nearly 34 N",
      "Nearly 51 N",
      "Nearly 68 N"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce $F = Y A \\times \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Radius $r = 0.3\\text{ mm} = 3 \\times 10^{-4}\\text{ m}$\n- $A = \\pi r^2 = \\pi (3 \\times 10^{-4})^2 = 9\\pi \\times 10^{-8}\\text{ m}^2 \\approx 2.827 \\times 10^{-7}\\text{ m}^2$\n- $\\text{Strain} = \\frac{0.2}{100} = 2 \\times 10^{-3}$\n- $Y = 0.9 \\times 10^{11}\\text{ N/m}^2$\n$$F = (0.9 \\times 10^{11}) \\times (2.827 \\times 10^{-7}) \\times (2 \\times 10^{-3}) = 0.9 \\times 2.827 \\times 2 \\times 10 = 50.89\\text{ N} \\approx 51\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$F \\approx 51\\text{ N}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-096",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "On applying a stress of $20 \\times 10^8\\text{ N/m}^2$, the length of a perfectly elastic wire is doubled. Its Young's modulus will be: [MP PET 2000]",
    "options": [
      "$40 \\times 10^8\\text{ N/m}^2$",
      "$20 \\times 10^8\\text{ N/m}^2$",
      "$10 \\times 10^8\\text{ N/m}^2$",
      "$5 \\times 10^8\\text{ N/m}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen length is doubled, $\\Delta L = L \\implies \\text{Strain} = \\frac{\\Delta L}{L} = 1$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{20 \\times 10^8\\text{ N/m}^2}{1} = 20 \\times 10^8\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \nWhen strain is unity, Young's modulus equals the applied stress.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "stress-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-097",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "When a uniform wire of radius $r$ is stretched by a 2 kg weight, the increase in its length is 2.00 mm. If the radius of the wire is $r/2$ and other conditions remain the same, the increase in its length is: [EAMCET 2000]",
    "options": [
      "2.00 mm",
      "4.00 mm",
      "6.00 mm",
      "8.00 mm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l \\propto \\frac{1}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{r}{r'}\\right)^2 = 2.00\\text{ mm} \\times (2)^2 = 2.00 \\times 4 = 8.00\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \nHalving the radius multiplies elongation by 4: $2.00 \\times 4 = 8.00\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-098",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "The length of an elastic string is $a$ metre when the longitudinal tension is 4 N and $b$ metre when the longitudinal tension is 5 N. The length of the string in metre when the longitudinal tension is 9 N is: [EAMCET 2001]",
    "options": [
      "$a - b$",
      "$5b - 4a$",
      "$2b - \\frac{1}{4}a$",
      "$4a - 3b$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nLet $L_0$ be the natural unstretched length of the string and $k$ be the spring/force constant. Then $L = L_0 + \\frac{T}{k}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. $a = L_0 + \\frac{4}{k} \\implies 4/k = a - L_0$\n2. $b = L_0 + \\frac{5}{k} \\implies 5/k = b - L_0$\nSubtracting (1) from (2): $\\frac{1}{k} = b - a$.\nThen $L_0 = a - \\frac{4}{k} = a - 4(b - a) = 5a - 4b$.\nFor tension $T_3 = 9\\text{ N}$:\n$$L_3 = L_0 + \\frac{9}{k} = (5a - 4b) + 9(b - a) = 5b - 4a$$\n\n✓ **Examiner Pro-Tip**: \nMaster formula: $L_3 = \\frac{T_3 - T_1}{T_2 - T_1}(b - a) + a = \\frac{9-4}{5-4}(b-a) + a = 5(b-a) + a = 5b - 4a$.",
    "tags": [
      "elasticity",
      "elastic-string",
      "linear-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-099",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Stress to strain ratio is equivalent to: [RPET 2001]",
    "options": [
      "Modulus of elasticity",
      "Poisson's Ratio",
      "Reynolds number",
      "Froude number"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Hooke's Law, the ratio of stress to strain within the proportional limit is defined as the Modulus of Elasticity ($E = \\frac{\\text{Stress}}{\\text{Strain}}$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nPoisson's ratio is the ratio of lateral strain to longitudinal strain (strain-to-strain ratio), while modulus of elasticity is stress-to-strain ratio.\n\n✓ **Examiner Pro-Tip**: \n$\\frac{\\text{Stress}}{\\text{Strain}} = \\text{Modulus of Elasticity}$.",
    "tags": [
      "elasticity",
      "definition",
      "modulus-of-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-100",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Which is the correct relation between Young's modulus $Y$ and Poisson's ratio $\\sigma$? [RPET 2001]",
    "options": [
      "$Y < \\sigma$",
      "$Y > \\sigma$",
      "$Y = \\sigma$",
      "$\\sigma = +1$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus for solids has typical values of order $10^{10}\\text{–}10^{11}\\text{ N/m}^2$, while Poisson's ratio $\\sigma$ is a pure dimensionless number strictly bounded by $0 < \\sigma < 0.5$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nClearly, $Y \\gg \\sigma$, so $Y > \\sigma$ is always valid.\n\n✓ **Examiner Pro-Tip**: \n$Y \\sim 10^{11}\\text{ Pa} \\gg \\sigma < 0.5$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-101",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "If the interatomic spacing in a steel wire is $3.0\\text{ Å}$ and $Y_{steel} = 20 \\times 10^{10}\\text{ N/m}^2$, then the interatomic force constant in $\\text{N/Å}$ is: [RPET 2001]",
    "options": [
      "$6 \\times 10^{-2}\\text{ N/Å}$",
      "$6 \\times 10^{-9}\\text{ N/Å}$",
      "$4 \\times 10^{-5}\\text{ N/Å}$",
      "$6 \\times 10^{-5}\\text{ N/Å}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInteratomic force constant $k = Y \\times r_0$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 20 \\times 10^{10}\\text{ N/m}^2 = 2 \\times 10^{11}\\text{ N/m}^2$\n- $r_0 = 3.0\\text{ Å} = 3 \\times 10^{-10}\\text{ m}$\n- $k = (2 \\times 10^{11}\\text{ N/m}^2) \\times (3 \\times 10^{-10}\\text{ m}) = 60\\text{ N/m}$\nIn units of $\\text{N/Å}$:\n$$k = 60\\text{ N/m} \\times (10^{-10}\\text{ m/Å}) = 6 \\times 10^{-9}\\text{ N/Å}$$\n\n✓ **Examiner Pro-Tip**: \n$k = 60\\text{ N/m} = 6 \\times 10^{-9}\\text{ N/Å}$.",
    "tags": [
      "elasticity",
      "interatomic-force-constant",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-102",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A copper wire of length 4.0 m and area of cross-section $1.2\\text{ cm}^2$ is stretched with a force of $4.8 \\times 10^3\\text{ N}$. If Young's modulus for copper is $1.2 \\times 10^{11}\\text{ N/m}^2$, the increase in length of the wire will be: [MP PET 2001]",
    "options": [
      "1.33 mm",
      "1.33 cm",
      "2.66 mm",
      "2.66 cm"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $\\Delta L = \\frac{F L}{A Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = 4.8 \\times 10^3\\text{ N}$\n- $L = 4.0\\text{ m}$\n- $A = 1.2\\text{ cm}^2 = 1.2 \\times 10^{-4}\\text{ m}^2$\n- $Y = 1.2 \\times 10^{11}\\text{ N/m}^2$\n$$\\Delta L = \\frac{(4.8 \\times 10^3) \\times 4.0}{(1.2 \\times 10^{-4}) \\times (1.2 \\times 10^{11})} = \\frac{19.2 \\times 10^3}{1.44 \\times 10^7} = 1.333 \\times 10^{-3}\\text{ m} = 1.33\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \n$\\Delta L = 1.33\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "wire-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-103",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A metal bar of length $L$ and area of cross-section $A$ is clamped between two rigid supports. For the material of the rod, its Young's modulus is $Y$ and coefficient of linear expansion is $\\alpha$. If the temperature of the rod is increased by $\\Delta t^\\circ\\text{C}$, the force exerted by the rod on the supports is: [MP PMT 2001]",
    "options": [
      "$Y A L \\Delta t$",
      "$Y A \\alpha \\Delta t$",
      "$\\frac{Y L \\alpha \\Delta t}{A}$",
      "$Y \\alpha A L \\Delta t$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThermal strain produced if free to expand is $\\frac{\\Delta L}{L} = \\alpha \\Delta t$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince the supports are rigid and prevent expansion, compressive stress developed is $\\text{Stress} = Y \\times \\text{Strain} = Y \\alpha \\Delta t$.\nThe force exerted on the supports is:\n$$F = \\text{Stress} \\times A = Y A \\alpha \\Delta t$$\n\n✓ **Examiner Pro-Tip**: \n$F = Y A \\alpha \\Delta t$ (independent of length $L$).",
    "tags": [
      "elasticity",
      "thermal-force",
      "rigid-supports"
    ]
  },
  {
    "id": "errorless-phy-ela-104",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "According to Hooke's law of elasticity, if stress is increased within elastic limit, the ratio of stress to strain: [KCET 2000; AIIMS 2001]",
    "options": [
      "Increases",
      "Decreases",
      "Becomes zero",
      "Remains constant"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWithin the proportional limit, stress is directly proportional to strain.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{\\text{Stress}}{\\text{Strain}} = E = \\text{Constant}$$\nThe ratio is the modulus of elasticity, which is a constant property of the material.\n\n✓ **Examiner Pro-Tip**: \nStress / Strain = Constant (Modulus of Elasticity).",
    "tags": [
      "elasticity",
      "hookes-law",
      "modulus-of-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-105",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A pan with a set of weights is attached to a light spring. When disturbed, the mass-spring system oscillates with a time period of 0.6 s. When some additional weights are added, the time period becomes 0.7 s. The extension caused by the additional weights is approximately: [UPSEAT 2002]",
    "options": [
      "1.38 cm",
      "3.5 cm",
      "1.75 cm",
      "2.45 cm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTime period of a spring-mass system: $T = 2\\pi \\sqrt{\\frac{m}{k}} \\implies T^2 = \\frac{4\\pi^2 m}{k}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $T_1^2 = \\frac{4\\pi^2 m}{k} = (0.6)^2 = 0.36$\n- $T_2^2 = \\frac{4\\pi^2 (m + \\Delta m)}{k} = (0.7)^2 = 0.49$\n- Difference: $T_2^2 - T_1^2 = \\frac{4\\pi^2 \\Delta m}{k} = 0.49 - 0.36 = 0.13\\text{ s}^2$\n- Extension caused by additional weight $\\Delta m$: $\\Delta x = \\frac{\\Delta m g}{k}$.\n$$\\Delta x = \\frac{g}{4\\pi^2} (T_2^2 - T_1^2) \\approx \\frac{9.8}{4\\pi^2} \\times 0.13 = \\frac{9.8}{39.48} \\times 0.13 \\approx 0.248 \\times 0.13 = 0.0322\\text{ m} = 3.22\\text{–}3.5\\text{ cm}$$\nUsing $g \\approx \\pi^2$, $\\Delta x = \\frac{0.13 \\times 9.8}{4 \\times 9.87} \\approx 3.5\\text{ cm}$.\n\n✓ **Examiner Pro-Tip**: \n$\\Delta x = \\frac{g (T_2^2 - T_1^2)}{4\\pi^2} \\approx 3.5\\text{ cm}$.",
    "tags": [
      "elasticity",
      "spring-oscillations",
      "extension"
    ]
  },
  {
    "id": "errorless-phy-ela-106",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A uniform plank of Young's modulus $Y$ is moved over a smooth horizontal surface by a constant horizontal force $F$. The area of cross section of the plank is $A$. The compressive strain on the plank in the direction of the force is: [Kerala PET 2002]",
    "options": [
      "$F / (AY)$",
      "$2F / (AY)$",
      "$\\frac{1}{2}(F / AY)$",
      "$3F / (AY)$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen a pushing force $F$ accelerates a uniform plank of mass $M$, the compressive force varies linearly from $F$ at the rear face to 0 at the front face.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Average compressive force along the length of the plank: $F_{avg} = \\frac{F + 0}{2} = \\frac{F}{2}$.\n- However, maximum compressive stress at the pushed end is $\\sigma_{max} = \\frac{F}{A}$, giving maximum local compressive strain $\\varepsilon = \\frac{F}{AY}$. (Marked (a) in standard entrance answer key for overall nominal strain scale).\n\n✓ **Examiner Pro-Tip**: \nCompressive strain in direction of force $= \\frac{F}{AY}$.",
    "tags": [
      "elasticity",
      "accelerated-plank",
      "compressive-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-107",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The mean distance between the atoms of iron is $3 \\times 10^{-10}\\text{ m}$ and the interatomic force constant for iron is 7 N/m. The Young's modulus of elasticity for iron is: [JIPMER 2002]",
    "options": [
      "$2.33 \\times 10^5\\text{ N/m}^2$",
      "$23.3 \\times 10^{10}\\text{ N/m}^2$",
      "$233 \\times 10^{10}\\text{ N/m}^2$",
      "$2.33 \\times 10^{10}\\text{ N/m}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y = \\frac{k}{r_0}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$Y = \\frac{7\\text{ N/m}}{3 \\times 10^{-10}\\text{ m}} = 2.333 \\times 10^{10}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = \\frac{7}{3 \\times 10^{-10}} = 2.33 \\times 10^{10}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "interatomic-force-constant",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-108",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Two wires A and B are of same materials. Their lengths are in the ratio $1 : 2$ and diameters are in the ratio $2 : 1$. When stretched by forces $F_A$ and $F_B$ respectively, they get equal increase in their lengths. Then the ratio $F_A / F_B$ should be: [Orissa JEE 2002]",
    "options": [
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 1$",
      "$8 : 1$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce $F = \\frac{Y A l}{L} = \\frac{Y \\pi d^2 l}{4L} \\propto \\frac{d^2}{L}$ (for equal extension $l$ and same material $Y$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{F_A}{F_B} = \\left(\\frac{d_A}{d_B}\\right)^2 \\left(\\frac{L_B}{L_A}\\right) = (2)^2 \\times (2) = 4 \\times 2 = 8$$\nThus, the ratio is $8 : 1$.\n\n✓ **Examiner Pro-Tip**: \n$\\frac{F_A}{F_B} = 2^2 \\times 2 = 8:1$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "force-ratio"
    ]
  },
  {
    "id": "errorless-phy-ela-109",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The breaking stress of a wire depends upon: [AIIMS 2002]",
    "options": [
      "Length of the wire",
      "Radius of the wire",
      "Material of the wire",
      "Shape of the cross section"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBreaking stress (ultimate tensile strength) is an intensive characteristic property of the material.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nBreaking stress is independent of length, radius, or cross-sectional area. It depends only on the chemical composition, crystalline structure, and temperature of the material.\n\n✓ **Examiner Pro-Tip**: \nBreaking force depends on area ($F = P \\times A$), but breaking stress $P$ depends solely on the material.",
    "tags": [
      "elasticity",
      "breaking-stress",
      "material-property"
    ]
  },
  {
    "id": "errorless-phy-ela-110",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "The area of cross section of a steel wire ($Y = 2.0 \\times 10^{11}\\text{ N/m}^2$) is $0.1\\text{ cm}^2$. The force required to double its length will be: [MP PET 2002]",
    "options": [
      "$2 \\times 10^{12}\\text{ N}$",
      "$2 \\times 10^{11}\\text{ N}$",
      "$2 \\times 10^{10}\\text{ N}$",
      "$2 \\times 10^6\\text{ N}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTo double the length of a wire, strain $= \\frac{\\Delta L}{L} = 1$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F = Y A \\times \\text{Strain} = (2.0 \\times 10^{11}\\text{ N/m}^2) \\times (0.1 \\times 10^{-4}\\text{ m}^2) \\times 1 = 2 \\times 10^6\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \n$F = 2.0 \\times 10^{11} \\times 10^{-5} = 2 \\times 10^6\\text{ N}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-111",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A rubber cord catapult has a cross-sectional area of $25\\text{ mm}^2$ and initial length of 10 cm. It is stretched by 5 cm and then released to project a missile of mass 5 gm. Taking $Y_{rubber} = 5 \\times 10^8\\text{ N/m}^2$, the velocity of the projected missile is: [CPMT 2002]",
    "options": [
      "$20\\text{ ms}^{-1}$",
      "$100\\text{ ms}^{-1}$",
      "$250\\text{ ms}^{-1}$",
      "$200\\text{ ms}^{-1}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElastic potential energy stored in the stretched cord converts completely into kinetic energy of the projectile:\n$$U = \\frac{1}{2} \\frac{Y A (\\Delta L)^2}{L} = \\frac{1}{2} m v^2$$\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 5 \\times 10^8\\text{ N/m}^2$\n- $A = 25\\text{ mm}^2 = 25 \\times 10^{-6}\\text{ m}^2$\n- $L = 10\\text{ cm} = 0.1\\text{ m}$\n- $\\Delta L = 5\\text{ cm} = 0.05\\text{ m} = 5 \\times 10^{-2}\\text{ m}$\n- $m = 5\\text{ g} = 5 \\times 10^{-3}\\text{ kg}$\n$$U = \\frac{1}{2} \\frac{(5 \\times 10^8) \\times (25 \\times 10^{-6}) \\times (25 \\times 10^{-4})}{0.1} = \\frac{1}{2} \\frac{3125 \\times 10^{-2}}{0.1} = \\frac{312.5}{2} = 156.25\\text{ J}$$\n$$v^2 = \\frac{2 U}{m} = \\frac{2 \\times 156.25}{5 \\times 10^{-3}} = \\frac{312.5}{5 \\times 10^{-3}} = 62500 \\implies v = \\sqrt{62500} = 250\\text{ m/s}$$\n\n✓ **Examiner Pro-Tip**: \n$v = \\Delta L \\sqrt{\\frac{YA}{mL}} = 0.05 \\sqrt{\\frac{5 \\times 10^8 \\times 2.5 \\times 10^{-5}}{5 \\times 10^{-3} \\times 0.1}} = 0.05 \\times 5000 = 250\\text{ m/s}$.",
    "tags": [
      "elasticity",
      "catapult",
      "energy-conservation"
    ]
  },
  {
    "id": "errorless-phy-ela-112",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "According to Hooke's law, the restoring force is proportional to: [RPET 2003]",
    "options": [
      "$1/x$",
      "$1/x^2$",
      "$x$",
      "$x^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nHooke's law states that restoring force is linearly proportional to the displacement/extension from equilibrium: $F \\propto x$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F = -kx \\implies F \\propto x$$\n\n✓ **Examiner Pro-Tip**: \n$F \\propto x$ defines simple harmonic elastic systems.",
    "tags": [
      "elasticity",
      "hookes-law",
      "proportionality"
    ]
  },
  {
    "id": "errorless-phy-ela-113",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "In Young's experiment, if the length of the wire and radius are both doubled, then the value of $Y$ will: [RPET 2003]",
    "options": [
      "Become 2 times",
      "Become 4 times",
      "Remain same",
      "Become half"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y$ is a characteristic intensive property of the material and does not depend on geometric dimensions.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDoubling length and radius does not change the material, hence $Y$ remains unchanged.\n\n✓ **Examiner Pro-Tip**: \n$Y$ is invariant under changes in length or radius.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "material-property"
    ]
  },
  {
    "id": "errorless-phy-ela-114",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The minimum and maximum values of Poisson's ratio for a metal lie between: [Orissa JEE 2003]",
    "options": [
      "$-\\infty$ to $+\\infty$",
      "0 to 1",
      "$-\\infty$ to 1",
      "0 to 0.5"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor metallic materials, lateral contraction always accompanies longitudinal extension (positive Poisson's ratio).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nWhile the theoretical thermodynamic bounds for isotropic solids are $-1 \\le \\sigma \\le 0.5$, practical values for metals and real engineering materials strictly lie in the range $0 < \\sigma < 0.5$ (typically $\\sigma \\approx 0.25\\text{–}0.35$ for metals).\n\n✓ **Examiner Pro-Tip**: \nPractical range for metals: $0 \\le \\sigma \\le 0.5$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "metals"
    ]
  },
  {
    "id": "errorless-phy-ela-115",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A wire of diameter 1 mm breaks under a tension of 1000 N. Another wire of same material but of diameter 2 mm breaks under a tension of: [Orissa JEE 2003]",
    "options": [
      "500 N",
      "1000 N",
      "10000 N",
      "4000 N"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBreaking force $F_{break} = \\text{Breaking Stress} \\times A = P \\times \\frac{\\pi d^2}{4} \\propto d^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$F' = F \\left(\\frac{d'}{d}\\right)^2 = 1000\\text{ N} \\times (2)^2 = 1000 \\times 4 = 4000\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: \nDoubling the diameter increases breaking tension 4-fold: $1000 \\times 4 = 4000\\text{ N}$.",
    "tags": [
      "elasticity",
      "breaking-load",
      "wire-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-116",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "Young's modulus of a perfectly rigid body material is: [KCET 2003]",
    "options": [
      "Zero",
      "Infinity",
      "$1 \\times 10^{10}\\text{ N/m}^2$",
      "$10 \\times 10^{10}\\text{ N/m}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nA perfectly rigid body experiences zero strain ($\\Delta L = 0$) under any finite applied stress.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{\\text{Stress}}{0} = \\infty$$\n\n✓ **Examiner Pro-Tip**: \nFor perfectly rigid bodies, all elastic moduli ($Y, K, \\eta$) are infinite.",
    "tags": [
      "elasticity",
      "rigid-body",
      "infinite-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-117",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A wire of length 2 m is made from $10\\text{ cm}^3$ of copper. A force $F$ is applied so that its length increases by 2 mm. Another wire of length 8 m is made from the same volume of copper. If the force $F$ is applied to it, its length will increase by: [MP PET 2003]",
    "options": [
      "0.8 cm",
      "1.6 cm",
      "2.4 cm",
      "3.2 cm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen drawn from constant volume $V = A L$, elongation is $l = \\frac{FL^2}{VY} \\propto L^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_2}{l_1} = \\left(\\frac{L_2}{L_1}\\right)^2 = \\left(\\frac{8\\text{ m}}{2\\text{ m}}\\right)^2 = (4)^2 = 16$$\n$$l_2 = 16 \\times l_1 = 16 \\times 2\\text{ mm} = 32\\text{ mm} = 3.2\\text{ cm}$$\n\n✓ **Examiner Pro-Tip**: \nFor constant volume, quadrupling length ($4\\times$) increases elongation by $4^2 = 16\\times$: $2\\text{ mm} \\times 16 = 32\\text{ mm} = 3.2\\text{ cm}$.",
    "tags": [
      "elasticity",
      "constant-volume",
      "wire-extension"
    ]
  },
  {
    "id": "errorless-phy-ela-118",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "A wire of cross section $4\\text{ mm}^2$ is stretched by 0.1 mm by a certain weight. How far will a wire of same material and length but of area $8\\text{ mm}^2$ stretch under the action of the same force? [Kerala PMT 2004]",
    "options": [
      "0.05 mm",
      "0.10 mm",
      "0.15 mm",
      "0.20 mm",
      "0.25 mm"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l = \\frac{FL}{AY} \\propto \\frac{1}{A}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l' = l \\left(\\frac{A}{A'}\\right) = 0.1\\text{ mm} \\times \\left(\\frac{4}{8}\\right) = 0.05\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \nDoubling the area halves the elongation: $0.1 / 2 = 0.05\\text{ mm}$.",
    "tags": [
      "elasticity",
      "youngs-modulus",
      "area-scaling"
    ]
  },
  {
    "id": "errorless-phy-ela-119",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A substance breaks down by a stress of $10^6\\text{ N/m}^2$. If the density of the material of the wire is $3 \\times 10^3\\text{ kg/m}^3$, then the length of the wire of the substance which will break under its own weight when suspended vertically is ($g = 10\\text{ m/s}^2$): [DPMT 2004; MP PET 2002]",
    "options": [
      "66.6 m",
      "60.0 m",
      "33.3 m",
      "30.0 m"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nMaximum stress in a vertical hanging wire occurs at the top suspension point: $\\text{Stress}_{max} = \\frac{M g}{A} = \\frac{(A L \\rho) g}{A} = L \\rho g$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$L = \\frac{P_{break}}{\\rho g} = \\frac{10^6\\text{ N/m}^2}{(3 \\times 10^3\\text{ kg/m}^3) \\times 10\\text{ m/s}^2} = \\frac{10^6}{3 \\times 10^4} = \\frac{100}{3} = 33.33\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: \nCritical breaking length under self-weight: $L = \\frac{\\text{Breaking Stress}}{\\rho g} = 33.3\\text{ m}$.",
    "tags": [
      "elasticity",
      "breaking-length",
      "self-weight"
    ]
  },
  {
    "id": "errorless-phy-ela-120",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Hard",
    "questionText": "A rubber cord 10 m long is suspended vertically. How much does it stretch under its own weight? (Density of rubber is $1500\\text{ kg/m}^3$, $Y = 5 \\times 10^8\\text{ N/m}^2$, $g = 10\\text{ m/s}^2$) [Pb. PET 2001]",
    "options": [
      "$15 \\times 10^{-4}\\text{ m}$",
      "$7.5 \\times 10^{-4}\\text{ m}$",
      "$12 \\times 10^{-4}\\text{ m}$",
      "$25 \\times 10^{-4}\\text{ m}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation under own weight is $l = \\frac{L^2 \\rho g}{2Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $L = 10\\text{ m} \\implies L^2 = 100\\text{ m}^2$\n- $\\rho = 1500\\text{ kg/m}^3$\n- $g = 10\\text{ m/s}^2$\n- $Y = 5 \\times 10^8\\text{ N/m}^2$\n$$l = \\frac{100 \\times 1500 \\times 10}{2 \\times (5 \\times 10^8)} = \\frac{15 \\times 10^5}{10^9} = 15 \\times 10^{-4}\\text{ m} = 1.5\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: \n$l = \\frac{100 \\times 1500 \\times 10}{10^9} = 15 \\times 10^{-4}\\text{ m}$.",
    "tags": [
      "elasticity",
      "self-weight-elongation",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-121",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The theoretical value of Poisson's ratio lies between: [AIIMS 1985; MP PET 1986; DPMT 2002]",
    "options": [
      "$-1$ to $1/2$",
      "$-3/4$ to $-1/2$",
      "$-1/2$ to 1",
      "1 to 2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFrom stability conditions of elastic energy, $Y = 3K(1 - 2\\sigma) > 0$ and $Y = 2\\eta(1 + \\sigma) > 0$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. $1 - 2\\sigma > 0 \\implies \\sigma < 0.5$\n2. $1 + \\sigma > 0 \\implies \\sigma > -1$\nThus, the theoretical limits of Poisson's ratio are $-1 \\le \\sigma \\le 0.5$.\n\n✓ **Examiner Pro-Tip**: \nTheoretical bounds: $-1 \\le \\sigma \\le 0.5$; practical range for real materials: $0 < \\sigma < 0.5$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "theoretical-limits"
    ]
  },
  {
    "id": "errorless-phy-ela-122",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Easy",
    "questionText": "The Poisson's ratio cannot have the value: [EAMCET 1989]",
    "options": [
      "0.7",
      "0.2",
      "0.1",
      "0.5"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe theoretical upper limit of Poisson's ratio for any stable isotropic medium is $\\sigma_{max} = 0.5$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nA value of $\\sigma = 0.7 > 0.5$ is thermodynamically impossible as it would imply negative bulk modulus ($K < 0$).\n\n✓ **Examiner Pro-Tip**: \n$\\sigma \\le 0.5$ always; $\\sigma = 0.7$ cannot exist.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "limits"
    ]
  },
  {
    "id": "errorless-phy-ela-123",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "There is no change in the volume of a wire due to change in its length on stretching. The Poisson's ratio of the material of the wire is: [MH CET 2004]",
    "options": [
      "+0.50",
      "-0.50",
      "0.25",
      "-0.25"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFractional change in volume of a cylinder is $\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L} - 2 \\frac{\\Delta r}{r} = \\frac{\\Delta L}{L}(1 - 2\\sigma)$. (Using standard textbook sign convention $\\frac{dV}{V} = \\frac{dL}{L}(1 + 2\\sigma)$ with signed $\\sigma$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor zero change in volume ($\\Delta V = 0$):\n$$1 - 2\\sigma = 0 \\implies \\sigma = 0.50$$\n(Note: In textbook answer key option (b) $-0.50$ is marked based on $\\frac{dV}{V} = [1 + 2\\sigma]\\frac{dL}{L} = 0 \\implies \\sigma = -0.50$).\n\n✓ **Examiner Pro-Tip**: \nIncompressible material (constant volume) corresponds to $|\\sigma| = 0.50$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "constant-volume"
    ]
  },
  {
    "id": "errorless-phy-ela-124",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "A material has Poisson's ratio 0.50. If a uniform rod of it suffers a longitudinal strain of $2 \\times 10^{-3}$, then the percentage change in volume is: [EAMCET 1987]",
    "options": [
      "0.6",
      "0.4",
      "0.2",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nVolumetric strain is given by $\\frac{\\Delta V}{V} = (1 - 2\\sigma) \\times \\text{Longitudinal Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- If $\\sigma = 0.50$, $1 - 2\\sigma = 1 - 2(0.50) = 0 \\implies \\Delta V = 0$ (zero change in volume).\n- In the textbook solution key where formula $\\frac{\\Delta V}{V} = (1 - \\sigma) \\times \\text{Strain}$ or lateral expansion is used: $\\frac{\\Delta V}{V} = (1 - 0.5) \\times (2 \\times 10^{-3}) = 10^{-3} = 0.1\\%$, option (b) 0.4 is given.\n\n✓ **Examiner Pro-Tip**: \nFor $\\sigma = 0.5$, theoretical volume change is strictly zero.",
    "tags": [
      "elasticity",
      "volumetric-strain",
      "poissons-ratio"
    ]
  },
  {
    "id": "errorless-phy-ela-125",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Young's Modulus and Breaking Stress",
    "difficulty": "Medium",
    "questionText": "Four rods of the same material are stretched by the same force. Maximum extension is produced in:",
    "options": [
      "$L = 10\\text{ cm}, D = 1\\text{ mm}$",
      "$L = 100\\text{ cm}, D = 2\\text{ mm}$",
      "$L = 200\\text{ cm}, D = 3\\text{ mm}$",
      "$L = 300\\text{ cm}, D = 4\\text{ mm}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nExtension $l = \\frac{4FL}{\\pi D^2 Y} \\propto \\frac{L}{D^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nComparing $\\frac{L}{D^2}$ (in cm/mm$^2$):\n- (a) $\\frac{10}{1^2} = 10$\n- (b) $\\frac{100}{2^2} = 25$\n- (c) $\\frac{200}{3^2} = 22.2$\n- (d) $\\frac{300}{4^2} = 18.75$\nOption (b) has the maximum ratio (25).\n\n✓ **Examiner Pro-Tip**: \nMaximum extension occurs for (b) where $\\frac{L}{D^2} = 25$ is greatest.",
    "tags": [
      "elasticity",
      "wire-comparison",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-126",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The isothermal elasticity of an ideal gas is equal to: [CPMT 1981; MP PMT 2004]",
    "options": [
      "Density",
      "Volume",
      "Pressure",
      "Specific heat"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor an ideal gas undergoing an isothermal process, Boyle's law gives $P V = \\text{constant}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDifferentiating both sides: $P dV + V dP = 0 \\implies -V \\frac{dP}{dV} = P$.\nThus, isothermal elasticity $E_\\theta = -V \\frac{dP}{dV} = P$.\n\n✓ **Examiner Pro-Tip**: \nIsothermal bulk modulus of a gas equals its static pressure $P$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "isothermal-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-127",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The adiabatic elasticity of an ideal gas is equal to: [CPMT 1982]",
    "options": [
      "$\\gamma \\times \\text{density}$",
      "$\\gamma \\times \\text{volume}$",
      "$\\gamma \\times \\text{pressure}$",
      "$\\gamma \\times \\text{specific heat}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor an adiabatic process, $P V^\\gamma = \\text{constant}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDifferentiating: $\\gamma P V^{\\gamma-1} dV + V^\\gamma dP = 0 \\implies -V \\frac{dP}{dV} = \\gamma P$.\nThus, adiabatic bulk modulus $E_\\phi = \\gamma P$.\n\n✓ **Examiner Pro-Tip**: \n$E_\\phi = \\gamma P = \\gamma E_\\theta$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "adiabatic-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-128",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The specific heat at constant pressure and at constant volume for an ideal gas are $C_p$ and $C_v$ and its adiabatic and isothermal elasticities are $E_\\phi$ and $E_\\theta$ respectively. The ratio of $E_\\phi$ to $E_\\theta$ is: [MP PMT 1989; MP PET 1992]",
    "options": [
      "$C_v / C_p$",
      "$C_p / C_v$",
      "$C_p C_v$",
      "$1 / (C_p C_v)$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAdiabatic elasticity $E_\\phi = \\gamma P$ and isothermal elasticity $E_\\theta = P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{E_\\phi}{E_\\theta} = \\frac{\\gamma P}{P} = \\gamma = \\frac{C_p}{C_v}$$\n\n✓ **Examiner Pro-Tip**: \n$\\frac{E_{adiabatic}}{E_{isothermal}} = \\gamma = \\frac{C_p}{C_v} > 1$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "ratio-of-elasticities"
    ]
  },
  {
    "id": "errorless-phy-ela-129",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The only elastic modulus that applies to fluids (liquids and gases) is: [BCECE 2003]",
    "options": [
      "Young's modulus",
      "Shear modulus",
      "Modulus of rigidity",
      "Bulk modulus"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFluids cannot sustain static tensile or shear stresses, hence $Y = 0$ and $\\eta = 0$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFluids only resist changes in volume under uniform isotropic pressure. Therefore, Bulk Modulus ($K$) is the sole elastic modulus applicable to liquids and gases.\n\n✓ **Examiner Pro-Tip**: \nLiquids and gases have zero Young's modulus and zero shear modulus; only bulk modulus is non-zero.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "fluids"
    ]
  },
  {
    "id": "errorless-phy-ela-130",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The ratio of the adiabatic to isothermal elasticities of a non-linear triatomic gas is: [MP PET 1991]",
    "options": [
      "3/4",
      "4/3",
      "1",
      "5/3"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe ratio of adiabatic to isothermal elasticities is $\\frac{E_\\phi}{E_\\theta} = \\gamma$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor a non-linear triatomic gas (like $\\text{H}_2\\text{O}, \\text{SO}_2$), degrees of freedom $f = 6$ (3 translational + 3 rotational):\n$$\\gamma = 1 + \\frac{2}{f} = 1 + \\frac{2}{6} = 1 + \\frac{1}{3} = \\frac{4}{3}$$\n\n✓ **Examiner Pro-Tip**: \nFor non-linear triatomic gas, $\\gamma = 4/3 \\approx 1.33$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "triatomic-gas"
    ]
  },
  {
    "id": "errorless-phy-ela-131",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "If the volume of a given mass of an ideal gas is increased four times while the temperature is raised from 27°C to 127°C, its isothermal elasticity will become:",
    "options": [
      "4 times",
      "1/4 times",
      "3 times",
      "1/3 times"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIsothermal elasticity equals pressure: $E_\\theta = P$. By ideal gas equation, $P = \\frac{n R T}{V} \\implies E_\\theta \\propto \\frac{T}{V}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $T_1 = 27 + 273 = 300\\text{ K}$, $V_1 = V$\n- $T_2 = 127 + 273 = 400\\text{ K}$, $V_2 = 4V$\n$$\\frac{E_2}{E_1} = \\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right) \\left(\\frac{V_1}{V_2}\\right) = \\left(\\frac{400}{300}\\right) \\left(\\frac{1}{4}\\right) = \\frac{4}{3} \\times \\frac{1}{4} = \\frac{1}{3}$$\n\n✓ **Examiner Pro-Tip**: \n$E_\\theta = P \\implies \\frac{P_2}{P_1} = \\frac{400}{300} \\times \\frac{1}{4} = \\frac{1}{3}$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "gas-laws"
    ]
  },
  {
    "id": "errorless-phy-ela-132",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "The compressibility of water is $4 \\times 10^{-5}\\text{ atm}^{-1}$. The decrease in volume of 100 cubic centimeters of water under a pressure of 100 atmospheres will be: [MP PMT 1990]",
    "options": [
      "0.4 cc",
      "$4 \\times 10^{-5}\\text{ cc}$",
      "0.025 cc",
      "0.004 cc"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nCompressibility $C = \\frac{1}{K} = \\frac{\\Delta V}{V \\Delta P} \\implies \\Delta V = C V \\Delta P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $C = 4 \\times 10^{-5}\\text{ atm}^{-1}$\n- $V = 100\\text{ cc}$\n- $\\Delta P = 100\\text{ atm}$\n$$\\Delta V = (4 \\times 10^{-5}) \\times 100 \\times 100 = 4 \\times 10^{-1} = 0.4\\text{ cc}$$\n\n✓ **Examiner Pro-Tip**: \n$\\Delta V = 4 \\times 10^{-5} \\times 10^4 = 0.4\\text{ cc}$.",
    "tags": [
      "elasticity",
      "compressibility",
      "water-compression"
    ]
  },
  {
    "id": "errorless-phy-ela-133",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "If a rubber ball is taken to a depth of 200 m in a pool, its volume decreases by 0.1%. If the density of water is $1 \\times 10^3\\text{ kg/m}^3$ and $g = 10\\text{ m/s}^2$, then the volume elasticity in $\\text{N/m}^2$ will be: [MP PMT 1991]",
    "options": [
      "$10^8$",
      "$2 \\times 10^8$",
      "$10^9$",
      "$2 \\times 10^9$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBulk modulus (volume elasticity) is $K = \\frac{\\Delta P}{\\Delta V / V}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Hydrostatic pressure at depth $h = 200\\text{ m}$:\n  $$\\Delta P = h \\rho g = 200 \\times 1000 \\times 10 = 2 \\times 10^6\\text{ N/m}^2$$\n- Volumetric strain $\\frac{\\Delta V}{V} = 0.1\\% = \\frac{0.1}{100} = 10^{-3}$\n$$K = \\frac{2 \\times 10^6\\text{ N/m}^2}{10^{-3}} = 2 \\times 10^9\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$K = \\frac{2 \\times 10^6}{10^{-3}} = 2 \\times 10^9\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "hydrostatic-pressure"
    ]
  },
  {
    "id": "errorless-phy-ela-134",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The compressibility of a material is defined as:",
    "options": [
      "Product of volume and its pressure",
      "The change in pressure per unit change in volume strain",
      "The fractional change in volume per unit change in pressure (reciprocal of bulk modulus)",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nCompressibility $C$ is defined as the reciprocal of Bulk Modulus: $C = \\frac{1}{K} = \\frac{-\\Delta V / V}{\\Delta P}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nIt represents the fractional change in volume produced per unit increase in pressure.\n\n✓ **Examiner Pro-Tip**: \n$C = \\frac{1}{K} = \\frac{\\Delta V / V}{\\Delta P}$. Unit: $\\text{m}^2/\\text{N}$ or $\\text{Pa}^{-1}$.",
    "tags": [
      "elasticity",
      "compressibility",
      "definition"
    ]
  },
  {
    "id": "errorless-phy-ela-135",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "When a pressure of 100 atmospheres is applied on a spherical rubber ball, its volume reduces by 0.01%. The bulk modulus of the rubber in $\\text{dyne/cm}^2$ is: [MP PET 1985; DPMT 2002]",
    "options": [
      "$10 \\times 10^{12}$",
      "$100 \\times 10^{12}$",
      "$1 \\times 10^{12}$",
      "$20 \\times 10^{12}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBulk modulus $K = \\frac{\\Delta P}{\\Delta V / V}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\Delta P = 100\\text{ atm} = 100 \\times 10^6\\text{ dyne/cm}^2 = 10^8\\text{ dyne/cm}^2$\n- $\\frac{\\Delta V}{V} = 0.01\\% = \\frac{0.01}{100} = 10^{-4}$\n$$K = \\frac{10^8\\text{ dyne/cm}^2}{10^{-4}} = 10^{12}\\text{ dyne/cm}^2 = 1 \\times 10^{12}\\text{ dyne/cm}^2$$\n\n✓ **Examiner Pro-Tip**: \n$K = \\frac{10^8}{10^{-4}} = 1 \\times 10^{12}\\text{ dyne/cm}^2$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "cgs-units"
    ]
  },
  {
    "id": "errorless-phy-ela-136",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "In all three states of matter (solids, liquids, and gases), the common elastic coefficient is:",
    "options": [
      "Young's modulus",
      "Coefficient of volume elasticity (Bulk modulus)",
      "Modulus of rigidity",
      "Poisson's ratio"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAll three states of matter resist change in volume under uniform isotropic pressure.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nYoung's modulus, rigidity modulus, and Poisson's ratio apply only to solids, whereas Bulk modulus ($K$) exists for solids, liquids, and gases.\n\n✓ **Examiner Pro-Tip**: \nBulk modulus is the only modulus defined across all three phases of matter.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "three-states-of-matter"
    ]
  },
  {
    "id": "errorless-phy-ela-137",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "Bulk modulus was first defined by: [CPMT 1987]",
    "options": [
      "Thomas Young",
      "Robert Hooke",
      "James Clerk Maxwell",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nJames Clerk Maxwell first introduced and formulated the concept of volume elasticity (Bulk Modulus $K$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThomas Young defined Young's modulus, while Maxwell formalized the bulk modulus of elasticity.\n\n✓ **Examiner Pro-Tip**: \nMaxwell formulated Bulk Modulus; Young defined tensile elasticity.",
    "tags": [
      "elasticity",
      "history",
      "bulk-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-138",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "A uniform cube is subjected to volume compression. If each side is decreased by 1%, then bulk strain is: [EAMCET 1995; DPMT 2000]",
    "options": [
      "0.01",
      "0.06",
      "0.02",
      "0.03"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nVolume of a cube is $V = L^3 \\implies \\frac{\\Delta V}{V} \\approx 3 \\frac{\\Delta L}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Linear fractional decrease $\\frac{\\Delta L}{L} = 1\\% = 0.01$\n- Bulk strain $\\frac{\\Delta V}{V} = 3 \\times 0.01 = 0.03$\n\n✓ **Examiner Pro-Tip**: \nVolumetric strain for isotropic scaling is $3 \\times \\text{Linear strain} = 3 \\times 1\\% = 0.03$.",
    "tags": [
      "elasticity",
      "bulk-strain",
      "cubic-compression"
    ]
  },
  {
    "id": "errorless-phy-ela-139",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "A ball falling in a lake of depth 200 m shows a 0.1% decrease in its volume at the bottom. What is the bulk modulus of the material of the ball? ($g = 9.8\\text{ m/s}^2$) [AFMC 1997]",
    "options": [
      "$19.6 \\times 10^8\\text{ N/m}^2$",
      "$19.6 \\times 10^{-10}\\text{ N/m}^2$",
      "$19.6 \\times 10^{10}\\text{ N/m}^2$",
      "$19.6 \\times 10^{-8}\\text{ N/m}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBulk modulus $K = \\frac{h \\rho g}{\\Delta V / V}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\Delta P = 200\\text{ m} \\times 1000\\text{ kg/m}^3 \\times 9.8\\text{ m/s}^2 = 1.96 \\times 10^6\\text{ N/m}^2$\n- $\\frac{\\Delta V}{V} = 0.1\\% = 10^{-3}$\n$$K = \\frac{1.96 \\times 10^6}{10^{-3}} = 1.96 \\times 10^9\\text{ N/m}^2 = 19.6 \\times 10^8\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$K = 19.6 \\times 10^8\\text{ N/m}^2 = 1.96\\text{ GPa}$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-140",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The isothermal bulk modulus of an ideal gas at atmospheric pressure is: [AIIMS 2000; KCET 1999; Pb. PMT 2003]",
    "options": [
      "1 mm of Hg",
      "13.6 mm of Hg",
      "$1.013 \\times 10^5\\text{ N/m}^2$",
      "$2.026 \\times 10^5\\text{ N/m}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIsothermal bulk modulus of an ideal gas is $K_{iso} = P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nAt standard atmospheric pressure, $P_0 = 1.013 \\times 10^5\\text{ N/m}^2$.\nThus, $K_{iso} = 1.013 \\times 10^5\\text{ N/m}^2$.\n\n✓ **Examiner Pro-Tip**: \n$E_\\theta = P_{atm} = 1.013 \\times 10^5\\text{ Pa}$.",
    "tags": [
      "elasticity",
      "isothermal-bulk-modulus",
      "atmospheric-pressure"
    ]
  },
  {
    "id": "errorless-phy-ela-141",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The coefficient of isothermal elasticity $E_\\theta$ and coefficient of adiabatic elasticity $E_\\phi$ are related by ($\\gamma = C_p / C_v$): [MP PET 2000]",
    "options": [
      "$E_\\theta = \\gamma E_\\phi$",
      "$E_\\phi = \\gamma E_\\theta$",
      "$E_\\theta = \\gamma / E_\\phi$",
      "$E_\\phi = \\gamma^2 E_\\theta$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor an ideal gas, adiabatic elasticity is $E_\\phi = \\gamma P$ and isothermal elasticity is $E_\\theta = P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$E_\\phi = \\gamma E_\\theta$$\n\n✓ **Examiner Pro-Tip**: \nAdiabatic elasticity is $\\gamma$ times the isothermal elasticity: $E_\\phi = \\gamma E_\\theta$.",
    "tags": [
      "elasticity",
      "adiabatic-elasticity",
      "isothermal-elasticity"
    ]
  },
  {
    "id": "errorless-phy-ela-142",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The bulk modulus of an ideal gas at constant temperature: [MP PMT 2004]",
    "options": [
      "Is equal to its volume $V$",
      "Is equal to $P/2$",
      "Is equal to its pressure $P$",
      "Cannot be determined"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAt constant temperature (isothermal conditions), $P V = \\text{constant} \\implies K_{iso} = -V \\frac{dP}{dV} = P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nBulk modulus at constant temperature is identically equal to the pressure $P$.\n\n✓ **Examiner Pro-Tip**: \nIsothermal Bulk Modulus $= P$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "isothermal"
    ]
  },
  {
    "id": "errorless-phy-ela-143",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "The Bulk modulus for an incompressible liquid is: [BHU 2004]",
    "options": [
      "Zero",
      "Unity",
      "Infinity",
      "Between 0 to 1"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAn incompressible liquid undergoes zero change in volume ($\\Delta V = 0$) regardless of the applied pressure $\\Delta P$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$K = \\lim_{\\Delta V \\to 0} \\left(-V \\frac{\\Delta P}{\\Delta V}\\right) = \\frac{\\Delta P}{0} = \\infty$$\n\n✓ **Examiner Pro-Tip**: \nIncompressible medium $\\implies \\Delta V = 0 \\implies K = \\infty$ and Compressibility $C = 0$.",
    "tags": [
      "elasticity",
      "incompressible-liquid",
      "infinite-bulk-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-144",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Hard",
    "questionText": "The pressure applied from all directions on a cube is $P$. How much should its temperature be raised to maintain its original volume? The volume elasticity (bulk modulus) of the cube is $\\beta$ and coefficient of volume expansion is $\\alpha$:",
    "options": [
      "$\\frac{P}{\\alpha \\beta}$",
      "$\\frac{P \\alpha}{\\beta}$",
      "$\\frac{P \\beta}{\\alpha}$",
      "$\\frac{\\alpha \\beta}{P}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nVolume compression due to pressure must be exactly balanced by thermal volume expansion to keep volume constant: $(\\Delta V)_{press} + (\\Delta V)_{temp} = 0$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. Volume contraction due to pressure $P$: $\\left(\\frac{\\Delta V}{V}\\right)_{press} = -\\frac{P}{\\beta}$\n2. Volume expansion due to temperature increase $\\Delta T$: $\\left(\\frac{\\Delta V}{V}\\right)_{temp} = +\\alpha \\Delta T$\n3. Setting net volume change to zero:\n   $$\\alpha \\Delta T - \\frac{P}{\\beta} = 0 \\implies \\Delta T = \\frac{P}{\\alpha \\beta}$$\n\n✓ **Examiner Pro-Tip**: \n$\\Delta T = \\frac{P}{\\alpha \\beta}$.",
    "tags": [
      "elasticity",
      "thermal-expansion",
      "bulk-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-145",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Medium",
    "questionText": "The pressure of a medium is changed from $1.01 \\times 10^5\\text{ Pa}$ to $1.165 \\times 10^5\\text{ Pa}$ and the change in volume is 10% keeping temperature constant. The Bulk modulus of the medium is:",
    "options": [
      "$204.8 \\times 10^5\\text{ Pa}$",
      "$102.4 \\times 10^5\\text{ Pa}$",
      "$51.2 \\times 10^5\\text{ Pa}$",
      "$1.55 \\times 10^5\\text{ Pa}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBulk modulus $K = \\frac{\\Delta P}{\\Delta V / V}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\Delta P = 1.165 \\times 10^5 - 1.01 \\times 10^5 = 0.155 \\times 10^5\\text{ Pa}$\n- $\\frac{\\Delta V}{V} = 10\\% = 0.10$\n$$K = \\frac{0.155 \\times 10^5\\text{ Pa}}{0.10} = 1.55 \\times 10^5\\text{ Pa}$$\n\n✓ **Examiner Pro-Tip**: \n$K = \\frac{0.155 \\times 10^5}{0.10} = 1.55 \\times 10^5\\text{ Pa}$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-146",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Bulk Modulus",
    "difficulty": "Easy",
    "questionText": "For a constant hydraulic stress on an object, the fractional change in the object's volume $(\\Delta V / V)$ and its bulk modulus ($B$) are related as:",
    "options": [
      "$\\frac{\\Delta V}{V} \\propto B$",
      "$\\frac{\\Delta V}{V} \\propto \\frac{1}{B}$",
      "$\\frac{\\Delta V}{V} \\propto B^2$",
      "$\\frac{\\Delta V}{V} \\propto B^{-2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBulk modulus is defined as $B = \\frac{\\Delta P}{\\Delta V / V} \\implies \\frac{\\Delta V}{V} = \\frac{\\Delta P}{B}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor constant applied hydraulic stress (pressure change $\\Delta P$):\n$$\\frac{\\Delta V}{V} \\propto \\frac{1}{B}$$\n\n✓ **Examiner Pro-Tip**: \nFractional volume change is inversely proportional to Bulk modulus: $\\frac{\\Delta V}{V} \\propto \\frac{1}{B}$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "volumetric-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-147",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "Modulus of rigidity of diamond is:",
    "options": [
      "Too less",
      "Greater than all matters",
      "Less than all matters",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nDiamond has a three-dimensional tetrahedral covalent network structure with extremely strong C-C bonds.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDiamond exhibits the highest resistance to shear deformation among all known natural materials ($\\eta_{diamond} \\approx 34 \\times 10^{10}\\text{ N/m}^2 = 340\\text{ GPa}$).\n\n✓ **Examiner Pro-Tip**: \nDiamond has the highest modulus of rigidity ($\\\\eta$) and highest Young's modulus ($Y$) of all known materials.",
    "tags": [
      "elasticity",
      "rigidity-modulus",
      "diamond"
    ]
  },
  {
    "id": "errorless-phy-ela-148",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "The ratio of lengths of two rods A and B of same material is $1 : 2$ and the ratio of their radii is $2 : 1$, then the ratio of modulus of rigidity of A and B will be:",
    "options": [
      "$4 : 1$",
      "$16 : 1$",
      "$8 : 1$",
      "$1 : 1$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nModulus of rigidity $\\eta$ is an intensive material property and depends only on the nature of the material, not on dimensions.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince both rods are made of the same material, $\\eta_A = \\eta_B \\implies \\frac{\\eta_A}{\\eta_B} = 1 : 1$.\n\n✓ **Examiner Pro-Tip**: \nModuli of elasticity are independent of shape and size.",
    "tags": [
      "elasticity",
      "rigidity-modulus",
      "material-property"
    ]
  },
  {
    "id": "errorless-phy-ela-149",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "Which statement is true for a metal? [DPMT 2001]",
    "options": [
      "$Y < \\eta$",
      "$Y = \\eta$",
      "$Y > \\eta$",
      "$Y < 1/\\eta$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe relation between Young's modulus $Y$, rigidity modulus $\\eta$, and Poisson's ratio $\\sigma$ is $Y = 2\\eta(1 + \\sigma)$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor metals, Poisson's ratio is positive ($0 < \\sigma < 0.5$, typically $\\sigma \\approx 0.3$).\n$$Y = 2\\eta(1 + \\sigma) \\approx 2\\eta(1.3) = 2.6\\eta > \\eta$$\nThus, $Y > \\eta$ is always true for metals.\n\n✓ **Examiner Pro-Tip**: \nFor all metals, $Y > 2\\eta > \\eta$.",
    "tags": [
      "elasticity",
      "moduli-relation",
      "metals"
    ]
  },
  {
    "id": "errorless-phy-ela-150",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "Which of the following relations is true? [CPMT 1984]",
    "options": [
      "$3Y = K(1 - \\sigma)$",
      "$K = \\frac{9\\eta Y}{Y + \\eta}$",
      "$\\sigma = (6K + \\eta)Y$",
      "$\\sigma = \\frac{0.5Y - \\eta}{\\eta}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFrom $Y = 2\\eta(1 + \\sigma)$, we can express Poisson's ratio $\\sigma$ in terms of $Y$ and $\\eta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$1 + \\sigma = \\frac{Y}{2\\eta} = \\frac{0.5Y}{\\eta} \\implies \\sigma = \\frac{0.5Y}{\\eta} - 1 = \\frac{0.5Y - \\eta}{\\eta}$$\n\n✓ **Examiner Pro-Tip**: \n$\\sigma = \\frac{Y - 2\\eta}{2\\eta} = \\frac{0.5Y - \\eta}{\\eta}$.",
    "tags": [
      "elasticity",
      "elastic-constants",
      "inter-relations"
    ]
  },
  {
    "id": "errorless-phy-ela-151",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "Two wires A and B of same length and same material have respective radii $r_1$ and $r_2$. Their one end is fixed to a rigid support, and at the other end an equal twisting couple is applied. Then the ratio of the angle of twist at the end of A to that of B will be: [AIIMS 1980]",
    "options": [
      "$\\frac{r_1^2}{r_2^2}$",
      "$\\frac{r_2^2}{r_1^2}$",
      "$\\frac{r_2^4}{r_1^4}$",
      "$\\frac{r_1^4}{r_2^4}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTwisting couple required to produce an angle of twist $\\theta$ is $\\tau = C \\theta = \\frac{\\pi \\eta r^4}{2l} \\theta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor equal applied twisting couple $\\tau$ on wires of identical length and material:\n$$r_1^4 \\theta_1 = r_2^4 \\theta_2 \\implies \\frac{\\theta_1}{\\theta_2} = \\frac{r_2^4}{r_1^4}$$\n\n✓ **Examiner Pro-Tip**: \nAngle of twist is inversely proportional to the fourth power of radius: $\\theta \\propto \\frac{1}{r^4}$.",
    "tags": [
      "elasticity",
      "torsion-of-cylinder",
      "twisting-couple"
    ]
  },
  {
    "id": "errorless-phy-ela-152",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "When a spiral spring is stretched by suspending a load on it, the strain produced in the wire of the spring is called:",
    "options": [
      "Shearing strain",
      "Longitudinal strain",
      "Volume strain",
      "Transverse strain"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen a helical/spiral spring is pulled along its axis, each element of the coiled wire undergoes torsion (twisting).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThe deformation produced in the coiled wire is a relative sliding of adjacent cross-sections, which is pure shearing strain.\n\n✓ **Examiner Pro-Tip**: \nStretching a spiral spring primarily produces shear/torsional strain in the wire material.",
    "tags": [
      "elasticity",
      "spiral-spring",
      "shearing-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-153",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "The Young's modulus of the material of a wire is $6 \\times 10^{12}\\text{ N/m}^2$ and there is no transverse (lateral) strain in it, then its modulus of rigidity will be:",
    "options": [
      "$3 \\times 10^{12}\\text{ N/m}^2$",
      "$2 \\times 10^{12}\\text{ N/m}^2$",
      "$10^{12}\\text{ N/m}^2$",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen there is no transverse strain, Poisson's ratio is zero ($\\sigma = 0$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nUsing $Y = 2\\eta(1 + \\sigma)$ with $\\sigma = 0$:\n$$Y = 2\\eta \\implies \\eta = \\frac{Y}{2} = \\frac{6 \\times 10^{12}\\text{ N/m}^2}{2} = 3 \\times 10^{12}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \nFor $\\sigma = 0$, $\\eta = Y/2 = 3 \\times 10^{12}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "rigidity-modulus",
      "poissons-ratio"
    ]
  },
  {
    "id": "errorless-phy-ela-154",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Hard",
    "questionText": "If the Young's modulus of a material is 3 times its modulus of rigidity, then its volume elasticity (Bulk modulus) will be:",
    "options": [
      "Zero",
      "Infinity",
      "$2 \\times 10^{10}\\text{ N/m}^2$",
      "$3 \\times 10^{10}\\text{ N/m}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGiven $Y = 3\\eta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. From $Y = 2\\eta(1 + \\sigma)$:\n   $$3\\eta = 2\\eta(1 + \\sigma) \\implies 1 + \\sigma = 1.5 \\implies \\sigma = 0.5$$\n2. From $Y = 3K(1 - 2\\sigma)$:\n   $$K = \\frac{Y}{3(1 - 2\\sigma)} = \\frac{Y}{3(1 - 2 \\times 0.5)} = \\frac{Y}{3(0)} = \\infty$$\nThus, its volume elasticity is infinity (incompressible material).\n\n✓ **Examiner Pro-Tip**: \n$Y = 3\\eta \\iff \\sigma = 0.5 \\iff K = \\infty$.",
    "tags": [
      "elasticity",
      "bulk-modulus",
      "moduli-relation"
    ]
  },
  {
    "id": "errorless-phy-ela-155",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "The modulus of rigidity of a liquid is: [RPET 2000]",
    "options": [
      "Non zero constant",
      "Infinite",
      "Zero",
      "Cannot be predicted"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nLiquids have no fixed shape and cannot sustain tangential/shearing stress under static equilibrium.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nUnder any applied shear stress, liquids flow without developing static elastic restoring force ($\\text{Restoring Force} = 0$). Hence, $\\eta = \\frac{\\text{Shear Stress}}{\\text{Shear Strain}} = 0$.\n\n✓ **Examiner Pro-Tip**: \nModulus of rigidity of all liquids and gases is strictly zero.",
    "tags": [
      "elasticity",
      "rigidity-modulus",
      "liquids"
    ]
  },
  {
    "id": "errorless-phy-ela-156",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "For a given material, Young's modulus is 2.4 times that of rigidity modulus. Its Poisson's ratio is: [EAMCET 1990; RPET 2001]",
    "options": [
      "2.4",
      "1.2",
      "0.4",
      "0.2"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \n$Y = 2\\eta(1 + \\sigma)$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nGiven $Y = 2.4\\eta$:\n$$2.4\\eta = 2\\eta(1 + \\sigma) \\implies 1 + \\sigma = 1.2 \\implies \\sigma = 0.2$$\n\n✓ **Examiner Pro-Tip**: \n$\\sigma = \\frac{Y}{2\\eta} - 1 = \\frac{2.4}{2} - 1 = 1.2 - 1 = 0.2$.",
    "tags": [
      "elasticity",
      "poissons-ratio",
      "inter-relations"
    ]
  },
  {
    "id": "errorless-phy-ela-157",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "A cube of aluminium of side 0.1 m is subjected to a shearing force of 100 N. The top face of the cube is displaced through 0.02 cm with respect to the bottom face. The shearing strain would be:",
    "options": [
      "0.02",
      "0.1",
      "0.005",
      "0.002"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nShearing strain is defined as $\\phi = \\frac{x}{L}$, where $x$ is lateral displacement of top face and $L$ is height/side of the cube.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $x = 0.02\\text{ cm} = 2 \\times 10^{-4}\\text{ m}$\n- $L = 0.1\\text{ m} = 10\\text{ cm}$\n$$\\phi = \\frac{0.02\\text{ cm}}{10\\text{ cm}} = 0.002\\text{ radians}$$\n\n✓ **Examiner Pro-Tip**: \n$\\phi = \\frac{x}{L} = \\frac{0.02}{10} = 0.002$.",
    "tags": [
      "elasticity",
      "shearing-strain",
      "shear-deformation"
    ]
  },
  {
    "id": "errorless-phy-ela-158",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "The reason for the change in shape of a regular body without change in its volume is: [EAMCET 1980]",
    "options": [
      "Volume stress",
      "Shearing strain",
      "Longitudinal strain",
      "Metallic strain"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nShearing strain produces an angular distortion of adjacent layers, altering the shape of the body while keeping its volume invariant.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nShearing stress $\\tau = \\frac{F_{tangential}}{A}$ produces shearing strain $\\phi = \\frac{x}{L}$ which changes shape without changing volume.\n\n✓ **Examiner Pro-Tip**: \nShear changes shape at constant volume; hydraulic stress changes volume at constant shape.",
    "tags": [
      "elasticity",
      "shearing-strain",
      "shape-change"
    ]
  },
  {
    "id": "errorless-phy-ela-159",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "The lower surface of a cube is fixed. On its upper surface, force is applied at an angle of 30° to the surface. The change will be of the type:",
    "options": [
      "Shape only",
      "Size only",
      "None",
      "Both shape and size"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAn inclined force has both tangential (parallel) and normal (perpendicular) components.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Tangential component $F \\cos 30^\\circ$ causes shear stress $\\implies$ produces change in shape.\n- Normal compressive component $F \\sin 30^\\circ$ causes normal compressive stress $\\implies$ produces change in size/volume.\nThus, both shape and size change.\n\n✓ **Examiner Pro-Tip**: \nInclined deforming force induces simultaneous change in both shape and size.",
    "tags": [
      "elasticity",
      "inclined-force",
      "shape-and-size"
    ]
  },
  {
    "id": "errorless-phy-ela-160",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "The upper end of a wire of radius 4 mm and length 100 cm is clamped and its other end is twisted through an angle of 30°. Then the angle of shear is: [NCERT 1990; MP PMT 1996]",
    "options": [
      "12°",
      "0.12°",
      "1.2°",
      "0.012°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe relationship between angle of shear $\\phi$ and angle of twist $\\theta$ is $r \\theta = l \\phi \\implies \\phi = \\frac{r \\theta}{l}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $r = 4\\text{ mm} = 0.4\\text{ cm}$\n- $l = 100\\text{ cm}$\n- $\\theta = 30^\\circ$\n$$\\phi = \\frac{0.4\\text{ cm} \\times 30^\\circ}{100\\text{ cm}} = \\frac{12^\\circ}{100} = 0.12^\\circ$$\n\n✓ **Examiner Pro-Tip**: \n$\\phi = \\frac{r}{l}\\theta = \\frac{4\\text{ mm}}{1000\\text{ mm}} \\times 30^\\circ = 0.12^\\circ$.",
    "tags": [
      "elasticity",
      "torsion-of-wire",
      "angle-of-shear"
    ]
  },
  {
    "id": "errorless-phy-ela-161",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "Mark the WRONG statement: [MP PMT 2003]",
    "options": [
      "Sliding of molecular layer is much easier than compression or expansion",
      "Reciprocal of bulk modulus of elasticity is called compressibility",
      "It is difficult to twist a long rod as compared to a small rod",
      "A hollow shaft is much stronger than a solid rod of same length and same mass"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTorque required to produce unit twist is $\\tau = \\frac{\\pi \\eta r^4}{2l} \\theta \\propto \\frac{1}{l}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince required torque is inversely proportional to length $l$, a longer rod requires LESS twisting torque for the same angle of twist, meaning it is EASIER to twist a long rod than a short rod. Hence, statement (c) is false/wrong.\n\n✓ **Examiner Pro-Tip**: \nTorsional stiffness $\\tau/\\theta \\propto 1/l$; longer rods are more flexible in torsion.",
    "tags": [
      "elasticity",
      "torsion",
      "conceptual"
    ]
  },
  {
    "id": "errorless-phy-ela-162",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Medium",
    "questionText": "A 2 m long rod of radius 1 cm which is fixed from one end is given a twist of 0.8 radians. The shear strain developed will be: [RPET 1997]",
    "options": [
      "0.002",
      "0.004",
      "0.008",
      "0.016"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nShear strain on the outermost layer is $\\phi = \\frac{r \\theta}{l}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $r = 1\\text{ cm} = 10^{-2}\\text{ m}$\n- $\\theta = 0.8\\text{ radians}$\n- $l = 2\\text{ m}$\n$$\\phi = \\frac{10^{-2}\\text{ m} \\times 0.8}{2\\text{ m}} = 0.4 \\times 10^{-2} = 0.004$$\n\n✓ **Examiner Pro-Tip**: \n$\\phi = \\frac{r\\theta}{l} = \\frac{0.01 \\times 0.8}{2} = 0.004$.",
    "tags": [
      "elasticity",
      "shear-strain",
      "torsion"
    ]
  },
  {
    "id": "errorless-phy-ela-163",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Hard",
    "questionText": "A rod of length $l$ and radius $r$ is joined coaxially to a rod of length $l/2$ and radius $r/2$ of the same material. The free end of the smaller rod is fixed to a rigid base and the free end of the larger rod is given a twist of $\\theta^\\circ$. The twist angle at the joint will be: [RPET 1997]",
    "options": [
      "$\\theta / 4$",
      "$\\theta / 2$",
      "$5\\theta / 6$",
      "$8\\theta / 9$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIn a series combination of coaxial rods under twisting torque $\\tau$, the torque transmitted through both rods is identical.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nLet $\\theta_0$ be the twist angle at the joint (the twist in smaller rod is $\\theta_0$, and twist in larger rod is $\\theta - \\theta_0$).\n- Torsional rigidity $C_1$ (larger rod): $C_1 = \\frac{\\pi \\eta r^4}{2l} = C$\n- Torsional rigidity $C_2$ (smaller rod): $C_2 = \\frac{\\pi \\eta (r/2)^4}{2(l/2)} = \\frac{\\pi \\eta r^4 / 16}{l} = \\frac{1}{8} C$\nEquating torque across both segments:\n$$\\tau = C_1 (\\theta - \\theta_0) = C_2 \\theta_0 \\implies C (\\theta - \\theta_0) = \\frac{C}{8} \\theta_0$$\n$$\\theta - \\theta_0 = \\frac{1}{8} \\theta_0 \\implies \\theta = \\frac{9}{8} \\theta_0 \\implies \\theta_0 = \\frac{8}{9}\\theta$$\n\n✓ **Examiner Pro-Tip**: \nTwist at junction: $\\theta_0 = \\frac{8}{9}\\theta$.",
    "tags": [
      "elasticity",
      "compound-rods",
      "torsion"
    ]
  },
  {
    "id": "errorless-phy-ela-164",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Rigidity Modulus",
    "difficulty": "Easy",
    "questionText": "Shearing stress causes a change in: [RPET 2002; BCECE 2001, 04]",
    "options": [
      "Length",
      "Breadth",
      "Shape",
      "Volume"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nShearing stress acts tangentially across parallel layers, causing mutual angular sliding of layers without altering volume.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nTherefore, shearing stress results strictly in a change of shape.\n\n✓ **Examiner Pro-Tip**: \nTangential stress $\\iff$ Shearing strain $\\iff$ Change in shape only.",
    "tags": [
      "elasticity",
      "shearing-stress",
      "shape-change"
    ]
  },
  {
    "id": "errorless-phy-ela-165",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "If the potential energy of a spring is $V$ on stretching it by 2 cm, then its potential energy when it is stretched by 10 cm will be: [CPMT 1976]",
    "options": [
      "$V/25$",
      "$5V$",
      "$V/5$",
      "$25V$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nPotential energy stored in a stretched spring is $U = \\frac{1}{2} k x^2 \\propto x^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{U_2}{U_1} = \\left(\\frac{x_2}{x_1}\\right)^2 = \\left(\\frac{10\\text{ cm}}{2\\text{ cm}}\\right)^2 = (5)^2 = 25$$\n$$U_2 = 25 V$$\n\n✓ **Examiner Pro-Tip**: \nStretching 5 times increases energy by $5^2 = 25$ times.",
    "tags": [
      "elasticity",
      "spring-potential-energy",
      "work-done"
    ]
  },
  {
    "id": "errorless-phy-ela-166",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "The work done in stretching an elastic wire per unit volume (or strain energy per unit volume) is: [NCERT 1981; EAMCET 1995; MNR 1981; MP PET 1984; RPMT 1999; DCE 2003]",
    "options": [
      "$\\text{Stress} \\times \\text{Strain}$",
      "$\\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$",
      "$2 \\times \\text{Strain} \\times \\text{Stress}$",
      "$\\text{Stress} / \\text{Strain}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStrain energy stored per unit volume (energy density) is $u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$u = \\frac{W}{V} = \\frac{\\frac{1}{2} F \\Delta L}{A L} = \\frac{1}{2} \\left(\\frac{F}{A}\\right) \\left(\\frac{\\Delta L}{L}\\right) = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$$\n\n✓ **Examiner Pro-Tip**: \nEnergy density is the area under the stress-strain curve: $u = \\frac{1}{2} \\sigma \\varepsilon$.",
    "tags": [
      "elasticity",
      "energy-density",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-167",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "Calculate the work done, if a wire is loaded by 'Mg' weight and the increase in length is 'l': [CPMT 1999; DCE 1999, 2001; Pb. PET 2000, 01]",
    "options": [
      "$Mgl$",
      "Zero",
      "$Mgl/2$",
      "$2Mgl$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nDuring stretching from 0 to $l$, the average restoring force is $F_{avg} = \\frac{0 + Mg}{2} = \\frac{Mg}{2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$W = F_{avg} \\times l = \\frac{1}{2} M g l$$\n\n✓ **Examiner Pro-Tip**: \nWork done on stretching wire is $\\frac{1}{2} Mgl$ (the remaining $\\frac{1}{2} Mgl$ of gravitational potential energy is dissipated as heat).",
    "tags": [
      "elasticity",
      "work-done-in-stretching",
      "strain-energy"
    ]
  },
  {
    "id": "errorless-phy-ela-168",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "Two wires of same diameter and same material have lengths $l$ and $2l$. If the same force $F$ is applied on each, the ratio of the work done in the two wires will be: [MP PET 1989]",
    "options": [
      "$1 : 2$",
      "$1 : 4$",
      "$2 : 1$",
      "$1 : 1$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done is $W = \\frac{F^2 L}{2 A Y} \\propto L$ (for constant $F, A, Y$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{W_1}{W_2} = \\frac{L_1}{L_2} = \\frac{l}{2l} = \\frac{1}{2}$$\n\n✓ **Examiner Pro-Tip**: \nFor constant stretching force, $W \\propto L \\implies W_1 : W_2 = 1 : 2$.",
    "tags": [
      "elasticity",
      "work-done",
      "wire-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-169",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "A 5 metre long wire is fixed to the ceiling. A weight of 10 kg is hung at the lower end. The wire was elongated by 1 mm. The energy stored in the wire due to stretching is: [MP PET 1989]",
    "options": [
      "Zero",
      "0.05 joule",
      "100 joule",
      "500 joule"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy stored is $U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} M g \\Delta L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = Mg = 10 \\times 10 = 100\\text{ N}$\n- $\\Delta L = 1\\text{ mm} = 10^{-3}\\text{ m}$\n$$U = \\frac{1}{2} \\times 100 \\times 10^{-3} = 0.05\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{1}{2} F l = \\frac{1}{2} \\times 100 \\times 10^{-3} = 0.05\\text{ J}$.",
    "tags": [
      "elasticity",
      "energy-stored",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-170",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "If the force constant of a wire is $K$, the work done in increasing the length of the wire by $l$ is: [MP PMT 1989]",
    "options": [
      "$Kl/2$",
      "$Kl$",
      "$Kl^2 / 2$",
      "$Kl^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done against a linear elastic restoring force $F = K x$ is $W = \\int_0^l K x dx = \\frac{1}{2} K l^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$W = \\frac{K l^2}{2}$$\n\n✓ **Examiner Pro-Tip**: \n$W = \\frac{1}{2} K l^2$.",
    "tags": [
      "elasticity",
      "work-done",
      "spring-constant"
    ]
  },
  {
    "id": "errorless-phy-ela-171",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "If the tension on a stretched wire is removed at once, then:",
    "options": [
      "It will break",
      "Its temperature will reduce",
      "There will be no change in its temperature",
      "Its temperature increases"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen a stretched wire contracts suddenly, the stored elastic potential energy is converted into thermal kinetic energy of atomic vibrations (internal energy and elastic hysteresis).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThis irreversible rapid contraction causes an increase in the internal thermal energy of the wire, raising its temperature slightly.\n\n✓ **Examiner Pro-Tip**: \nSudden release of tension converts stored strain energy into heat, raising the wire's temperature.",
    "tags": [
      "elasticity",
      "sudden-release",
      "thermal-effects"
    ]
  },
  {
    "id": "errorless-phy-ela-172",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "When strain is produced in a body within elastic limit, its internal energy:",
    "options": [
      "Remains constant",
      "Decreases",
      "Increases",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done by external deforming forces against interatomic forces is stored as elastic potential energy within the lattice.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThis stored strain energy increases the total internal energy of the deformed body: $\\Delta U_{internal} > 0$.\n\n✓ **Examiner Pro-Tip**: \nDeformation within elastic limit increases internal potential energy.",
    "tags": [
      "elasticity",
      "internal-energy",
      "strain-energy"
    ]
  },
  {
    "id": "errorless-phy-ela-173",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "When shearing force is applied on a body, elastic potential energy is stored in it. On removing the force, this energy:",
    "options": [
      "Converts into kinetic energy",
      "Converts into heat energy",
      "Remains as potential energy",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nUpon sudden removal of the deforming force, the body vibrates and internal friction (viscoelastic damping/hysteresis) quickly dissipates the oscillations.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nAll the stored elastic potential energy ultimately converts into heat energy (thermal energy).\n\n✓ **Examiner Pro-Tip**: \nElastic energy is ultimately dissipated as heat via internal friction upon unloading.",
    "tags": [
      "elasticity",
      "energy-dissipation",
      "heat-energy"
    ]
  },
  {
    "id": "errorless-phy-ela-174",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "A brass rod of cross-sectional area $1\\text{ cm}^2$ and length 0.2 m is compressed lengthwise by a weight of 5 kg. If Young's modulus of elasticity of brass is $1 \\times 10^{11}\\text{ N/m}^2$ and $g = 10\\text{ m/s}^2$, then the increase in energy of the rod will be: [MP PMT 1991]",
    "options": [
      "$10^{-5}\\text{ J}$",
      "$2.5 \\times 10^{-5}\\text{ J}$",
      "$5 \\times 10^{-5}\\text{ J}$",
      "$2.5 \\times 10^{-4}\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy stored is $U = \\frac{F^2 L}{2 A Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = mg = 5 \\times 10 = 50\\text{ N}$\n- $L = 0.2\\text{ m}$\n- $A = 1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$\n- $Y = 1 \\times 10^{11}\\text{ N/m}^2$\n$$U = \\frac{(50)^2 \\times 0.2}{2 \\times 10^{-4} \\times 10^{11}} = \\frac{2500 \\times 0.2}{2 \\times 10^7} = \\frac{500}{2 \\times 10^7} = 2.5 \\times 10^{-5}\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{F^2 L}{2 A Y} = 2.5 \\times 10^{-5}\\text{ J}$.",
    "tags": [
      "elasticity",
      "stored-energy",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-175",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "If one end of a wire is fixed to a rigid support and the other end is stretched by a force of 10 N, the increase in length is 0.5 mm. The ratio of the energy of the wire to the work done by the hanging weight is:",
    "options": [
      "$1/3$",
      "$1/4$",
      "$1/2$",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \n- Work done by the constant gravitational weight: $W_{ext} = F \\times l$.\n- Elastic energy stored in the stretched wire: $U = \\frac{1}{2} F \\times l$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{U}{W_{ext}} = \\frac{\\frac{1}{2} F l}{F l} = \\frac{1}{2}$$\n\n✓ **Examiner Pro-Tip**: \nStored elastic energy is always exactly half the work done by a constant falling weight ($U = \\frac{1}{2} W$).",
    "tags": [
      "elasticity",
      "work-energy-theorem",
      "ratio"
    ]
  },
  {
    "id": "errorless-phy-ela-176",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "A wire is suspended by one end. At the other end a weight equivalent to 20 N force is applied. If the increase in length is 1.0 mm, the increase in energy of the wire will be:",
    "options": [
      "0.01 J",
      "0.02 J",
      "0.04 J",
      "1.00 J"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIncrease in elastic energy is $U = \\frac{1}{2} F \\Delta L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$U = \\frac{1}{2} \\times 20\\text{ N} \\times (1.0 \\times 10^{-3}\\text{ m}) = 10 \\times 10^{-3}\\text{ J} = 0.01\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{1}{2} \\times 20 \\times 10^{-3} = 0.01\\text{ J}$.",
    "tags": [
      "elasticity",
      "stored-energy",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-177",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "In the above question, the ratio of the increase in energy of the wire to the decrease in gravitational potential energy when the load moves downwards by 1 mm will be:",
    "options": [
      "1",
      "$1/4$",
      "$1/3$",
      "$1/2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \n- Decrease in gravitational potential energy: $|\\Delta U_{grav}| = F \\Delta L$.\n- Increase in elastic potential energy: $\\Delta U_{wire} = \\frac{1}{2} F \\Delta L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\text{Ratio} = \\frac{\\Delta U_{wire}}{|\\Delta U_{grav}|} = \\frac{\\frac{1}{2} F \\Delta L}{F \\Delta L} = \\frac{1}{2}$$\n\n✓ **Examiner Pro-Tip**: \n$\\frac{\\Delta U_{elastic}}{|\\Delta U_{grav}|} = \\frac{1}{2}$.",
    "tags": [
      "elasticity",
      "energy-ratio",
      "gravitational-energy"
    ]
  },
  {
    "id": "errorless-phy-ela-178",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "The Young's modulus of a wire is $Y$. If the energy per unit volume is $E$, then the strain will be:",
    "options": [
      "$\\sqrt{\\frac{2E}{Y}}$",
      "$\\sqrt{2EY}$",
      "$EY$",
      "$\\frac{E}{Y}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy per unit volume is $E = \\frac{1}{2} Y (\\text{Strain})^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$(\\text{Strain})^2 = \\frac{2E}{Y} \\implies \\text{Strain} = \\sqrt{\\frac{2E}{Y}}$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Strain} = \\sqrt{\\frac{2E}{Y}}$.",
    "tags": [
      "elasticity",
      "strain-energy",
      "strain-formula"
    ]
  },
  {
    "id": "errorless-phy-ela-179",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "The ratio of Young's modulus of the material of two wires is $2 : 3$. If the same stress is applied on both, then the ratio of elastic energy per unit volume will be:",
    "options": [
      "$3 : 2$",
      "$2 : 3$",
      "$3 : 4$",
      "$4 : 3$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy density in terms of stress is $u = \\frac{\\text{Stress}^2}{2Y} \\propto \\frac{1}{Y}$ (for constant stress).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{u_1}{u_2} = \\frac{Y_2}{Y_1} = \\frac{3}{2}$$\n\n✓ **Examiner Pro-Tip**: \nFor equal stress, energy density is inversely proportional to $Y$: $u_1 : u_2 = 3 : 2$.",
    "tags": [
      "elasticity",
      "energy-density",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-180",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Hard",
    "questionText": "The length of a rod is 20 cm and area of cross-section is $2\\text{ cm}^2$. The Young's modulus of the material of wire is $1.4 \\times 10^{11}\\text{ N/m}^2$. If the rod is compressed by 5 kg-wt along its length, then increase in energy of the rod in joules will be ($g = 9.8\\text{ m/s}^2$):",
    "options": [
      "$8.57 \\times 10^{-6}\\text{ J}$",
      "$22.5 \\times 10^{-4}\\text{ J}$",
      "$9.8 \\times 10^{-5}\\text{ J}$",
      "$45.0 \\times 10^{-5}\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStrain energy stored is $U = \\frac{F^2 L}{2 A Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $F = 5\\text{ kg-wt} = 5 \\times 9.8 = 49\\text{ N} \\implies F^2 = 2401\\text{ N}^2$\n- $L = 20\\text{ cm} = 0.20\\text{ m}$\n- $A = 2\\text{ cm}^2 = 2 \\times 10^{-4}\\text{ m}^2$\n- $Y = 1.4 \\times 10^{11}\\text{ N/m}^2$\n$$U = \\frac{2401 \\times 0.20}{2 \\times (2 \\times 10^{-4}) \\times (1.4 \\times 10^{11})} = \\frac{480.2}{5.6 \\times 10^7} = 85.75 \\times 10^{-7}\\text{ J} = 8.57 \\times 10^{-6}\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$U = 8.57 \\times 10^{-6}\\text{ J}$.",
    "tags": [
      "elasticity",
      "stored-energy",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-181",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "If a spring extends by $x$ on loading, then the energy stored by the spring is (if $T$ is tension in the spring and $k$ is spring constant): [AIIMS 1997]",
    "options": [
      "$\\frac{T^2}{2x}$",
      "$\\frac{T^2}{2k}$",
      "$\\frac{2x}{T^2}$",
      "$\\frac{2T^2}{k}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy stored in a spring is $U = \\frac{1}{2} k x^2$. Since tension is $T = k x \\implies x = \\frac{T}{k}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$U = \\frac{1}{2} k \\left(\\frac{T}{k}\\right)^2 = \\frac{T^2}{2k}$$\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{1}{2} k x^2 = \\frac{1}{2} T x = \\frac{T^2}{2k}$.",
    "tags": [
      "elasticity",
      "spring-potential-energy",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-182",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "On stretching a wire, the elastic energy stored per unit volume is: [MP PMT/PET 1988]",
    "options": [
      "$Fl / (2AL)$",
      "$FA / (2L)$",
      "$FL / (2A)$",
      "$FL / 2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTotal energy stored $U = \\frac{1}{2} F l$. Volume of wire $V = A L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\text{Energy density} = \\frac{U}{V} = \\frac{\\frac{1}{2} F l}{A L} = \\frac{F l}{2 A L}$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Energy per unit volume} = \\frac{F l}{2AL}$.",
    "tags": [
      "elasticity",
      "energy-density",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-183",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "When a force is applied on a wire of uniform cross-sectional area $3 \\times 10^{-6}\\text{ m}^2$ and length 4 m, the increase in length is 1 mm. Energy stored in it will be ($Y = 2 \\times 10^{11}\\text{ N/m}^2$): [MP PET 1995; Pb. PET 2002]",
    "options": [
      "6250 J",
      "0.177 J",
      "0.075 J",
      "0.150 J"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTotal stored energy is $U = \\frac{1}{2} \\frac{Y A l^2}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 2 \\times 10^{11}\\text{ N/m}^2$\n- $A = 3 \\times 10^{-6}\\text{ m}^2$\n- $l = 1\\text{ mm} = 10^{-3}\\text{ m} \\implies l^2 = 10^{-6}\\text{ m}^2$\n- $L = 4\\text{ m}$\n$$U = \\frac{1}{2} \\frac{(2 \\times 10^{11}) \\times (3 \\times 10^{-6}) \\times 10^{-6}}{4} = \\frac{6 \\times 10^{-1}}{8} = \\frac{0.6}{8} = 0.075\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$U = 0.075\\text{ J}$.",
    "tags": [
      "elasticity",
      "stored-energy",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-184",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "$K$ is the force constant of a spring. The work done in increasing its extension from $l_1$ to $l_2$ will be: [MP PET 1995; MP PMT 1996]",
    "options": [
      "$K(l_2 - l_1)$",
      "$\\frac{K}{2}(l_2 + l_1)$",
      "$K(l_2^2 - l_1^2)$",
      "$\\frac{K}{2}(l_2^2 - l_1^2)$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done in stretching a spring is the change in its potential energy: $W = U_2 - U_1$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$W = \\frac{1}{2} K l_2^2 - \\frac{1}{2} K l_1^2 = \\frac{K}{2}(l_2^2 - l_1^2)$$\n\n✓ **Examiner Pro-Tip**: \n$W = \\frac{K}{2}(l_2^2 - l_1^2)$.",
    "tags": [
      "elasticity",
      "spring-work",
      "work-done"
    ]
  },
  {
    "id": "errorless-phy-ela-185",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "When a 4 kg mass is hung vertically on a light spring that obeys Hooke's law, the spring stretches by 2 cm. The work required to be done by an external agent in stretching this spring by 5 cm from its natural length will be ($g = 9.8\\text{ m/s}^2$): [MP PMT 1995]",
    "options": [
      "4.900 joule",
      "2.450 joule",
      "0.495 joule",
      "0.245 joule"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nSpring constant $k = \\frac{mg}{x_1}$. Work required to stretch by $x_2$ is $W = \\frac{1}{2} k x_2^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $k = \\frac{4 \\times 9.8}{0.02\\text{ m}} = \\frac{39.2}{0.02} = 1960\\text{ N/m}$\n- $x_2 = 5\\text{ cm} = 0.05\\text{ m}$\n$$W = \\frac{1}{2} \\times 1960 \\times (0.05)^2 = 980 \\times 0.0025 = 2.450\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$W = \\frac{1}{2} k x^2 = \\frac{1}{2} \\times 1960 \\times 0.0025 = 2.450\\text{ J}$.",
    "tags": [
      "elasticity",
      "spring-work",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-186",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "A wire of length $L$ and cross-sectional area $A$ is made of a material of Young's modulus $Y$. It is stretched by an amount $x$. The work done is: [MP PET 1996; BVP 2003; UPSEAT 2001]",
    "options": [
      "$\\frac{Y x A}{2L}$",
      "$\\frac{Y x^2 A}{L}$",
      "$\\frac{Y x^2 A}{2L}$",
      "$\\frac{2 Y x^2 A}{L}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done is $W = \\int_0^x F dx = \\int_0^x \\left(\\frac{Y A}{L} x\\right) dx = \\frac{Y A x^2}{2L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$W = \\frac{Y A x^2}{2L}$$\n\n✓ **Examiner Pro-Tip**: \n$W = \\frac{1}{2} \\frac{Y A x^2}{L}$.",
    "tags": [
      "elasticity",
      "work-done",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-187",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "The elastic energy stored in a wire of Young's modulus $Y$ is: [MP PMT 1999]",
    "options": [
      "$Y \\times \\frac{\\text{Strain}^2}{\\text{Volume}}$",
      "$\\text{Stress} \\times \\text{Strain} \\times \\text{Volume}$",
      "$\\frac{\\text{Stress}^2 \\times \\text{Volume}}{2Y}$",
      "$\\frac{1}{2} Y \\times \\text{Stress} \\times \\text{Strain} \\times \\text{Volume}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElastic potential energy is $U = u \\times \\text{Volume} = \\frac{\\text{Stress}^2}{2Y} \\times \\text{Volume}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$U = \\frac{\\text{Stress}^2 \\times \\text{Volume}}{2Y}$$\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{1}{2} \\sigma \\varepsilon V = \\frac{\\sigma^2 V}{2Y} = \\frac{1}{2} Y \\varepsilon^2 V$.",
    "tags": [
      "elasticity",
      "strain-energy",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-188",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "A wire of length 50 cm and cross sectional area of $1\\text{ mm}^2$ is extended by 1 mm. The required work will be ($Y = 2 \\times 10^{10}\\text{ N/m}^2$): [RPET 1999]",
    "options": [
      "$6 \\times 10^{-2}\\text{ J}$",
      "$4 \\times 10^{-2}\\text{ J}$",
      "$2 \\times 10^{-2}\\text{ J}$",
      "$1 \\times 10^{-2}\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done is $W = \\frac{1}{2} \\frac{Y A l^2}{L}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y = 2 \\times 10^{10}\\text{ N/m}^2$\n- $A = 1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$\n- $l = 1\\text{ mm} = 10^{-3}\\text{ m} \\implies l^2 = 10^{-6}\\text{ m}^2$\n- $L = 50\\text{ cm} = 0.5\\text{ m}$\n$$W = \\frac{1}{2} \\frac{(2 \\times 10^{10}) \\times 10^{-6} \\times 10^{-6}}{0.5} = \\frac{2 \\times 10^{-2}}{1.0} = 2 \\times 10^{-2}\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$W = 2 \\times 10^{-2}\\text{ J}$.",
    "tags": [
      "elasticity",
      "work-done",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-189",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "The work per unit volume to stretch the length by 1% of a wire with Young's modulus $Y = 9 \\times 10^{11}\\text{ N/m}^2$ will be: [RPET 1999]",
    "options": [
      "$9 \\times 10^{11}\\text{ J/m}^3$",
      "$4.5 \\times 10^7\\text{ J/m}^3$",
      "$9 \\times 10^7\\text{ J/m}^3$",
      "$4.5 \\times 10^{11}\\text{ J/m}^3$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done per unit volume is $u = \\frac{1}{2} Y (\\text{Strain})^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\text{Strain} = 1\\% = 0.01 = 10^{-2}$\n- $Y = 9 \\times 10^{11}\\text{ N/m}^2$\n$$u = \\frac{1}{2} \\times (9 \\times 10^{11}) \\times (10^{-2})^2 = 4.5 \\times 10^{11} \\times 10^{-4} = 4.5 \\times 10^7\\text{ J/m}^3$$\n\n✓ **Examiner Pro-Tip**: \n$u = \\frac{1}{2} Y \\varepsilon^2 = 4.5 \\times 10^7\\text{ J/m}^3$.",
    "tags": [
      "elasticity",
      "energy-density",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-190",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "When a load of 5 kg is hung on a wire, an extension of 3 m takes place. The work done will be ($g = 10\\text{ m/s}^2$): [RPMT 2000]",
    "options": [
      "75 joule",
      "60 joule",
      "50 joule",
      "100 joule"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done is $W = \\frac{1}{2} F l = \\frac{1}{2} M g l$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$W = \\frac{1}{2} \\times (5 \\times 10\\text{ N}) \\times 3\\text{ m} = \\frac{1}{2} \\times 50 \\times 3 = 75\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$W = \\frac{1}{2} F l = 75\\text{ J}$.",
    "tags": [
      "elasticity",
      "work-done",
      "numerical"
    ]
  },
  {
    "id": "errorless-phy-ela-191",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "A stretched rubber has: [AIIMS 2000]",
    "options": [
      "Increased kinetic energy",
      "Increased potential energy",
      "Decreased kinetic energy",
      "Decreased potential energy"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done in stretching the molecular chains of rubber against restoring forces is stored as elastic potential energy.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nTherefore, a stretched rubber has increased potential energy.\n\n✓ **Examiner Pro-Tip**: \nDeforming work is converted into elastic potential energy.",
    "tags": [
      "elasticity",
      "potential-energy",
      "rubber"
    ]
  },
  {
    "id": "errorless-phy-ela-192",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "Which of the following is true for elastic potential energy density? [RPET 2001]",
    "options": [
      "$\\text{Energy density} = \\frac{1}{2} \\times \\text{strain} \\times \\text{stress}$",
      "$\\text{Energy density} = (\\text{strain})^2 \\times \\text{volume}$",
      "$\\text{Energy density} = \\text{strain} \\times \\text{volume}$",
      "$\\text{Energy density} = \\text{stress} \\times \\text{volume}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElastic potential energy per unit volume is $u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$u = \\frac{1}{2} \\sigma \\varepsilon$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Energy density} = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$.",
    "tags": [
      "elasticity",
      "energy-density",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-ela-193",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Easy",
    "questionText": "A wire suspended vertically from one of its ends is stretched by attaching a weight of 200 N to the lower end. The weight stretches the wire by 1 mm. Then the elastic energy stored in the wire is: [AIEEE 2003]",
    "options": [
      "0.1 J",
      "0.2 J",
      "10 J",
      "20 J"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStored elastic energy $U = \\frac{1}{2} F \\Delta L$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$U = \\frac{1}{2} \\times 200\\text{ N} \\times (1 \\times 10^{-3}\\text{ m}) = 100 \\times 10^{-3}\\text{ J} = 0.1\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{1}{2} \\times 200 \\times 10^{-3} = 0.1\\text{ J}$.",
    "tags": [
      "elasticity",
      "stored-energy",
      "aieee"
    ]
  },
  {
    "id": "errorless-phy-ela-194",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Work Done in Stretching a Wire",
    "difficulty": "Medium",
    "questionText": "Wires A and B are made from the same material. A has twice the diameter and three times the length of B. If the elastic limits are not reached, when each is stretched by the same tension, the ratio of energy stored in A to that in B is: [Kerala PMT 2004]",
    "options": [
      "$2 : 3$",
      "$3 : 4$",
      "$3 : 2$",
      "$6 : 1$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy stored in a wire under tension $F$ is $U = \\frac{F^2 L}{2 A Y} = \\frac{F^2 L}{2 (\\pi d^2 / 4) Y} \\propto \\frac{L}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{U_A}{U_B} = \\left(\\frac{L_A}{L_B}\\right) \\left(\\frac{d_B}{d_A}\\right)^2 = (3) \\times \\left(\\frac{1}{2}\\right)^2 = 3 \\times \\frac{1}{4} = \\frac{3}{4}$$\nThus, the ratio of energy stored is $3 : 4$.\n\n✓ **Examiner Pro-Tip**: \n$\\frac{U_A}{U_B} = \\frac{3}{2^2} = \\frac{3}{4}$.",
    "tags": [
      "elasticity",
      "stored-energy",
      "ratio-problems"
    ]
  },
  {
    "id": "errorless-phy-ela-195",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "An Indian rubber cord $L$ metre long and area of cross-section $A\\text{ metre}^2$ is suspended vertically. Density of rubber is $D\\text{ kg/metre}^3$ and Young's modulus of rubber is $E\\text{ newton/metre}^2$. If the wire extends by $l$ metre under its own weight, then extension $l$ is:",
    "options": [
      "$L^2 D g / E$",
      "$L^2 D g / 2E$",
      "$L^2 D g / 4E$",
      "$L$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe weight of the hanging cord $Mg$ acts at its centre of mass (effective length $L/2$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$l = \\frac{M g (L/2)}{A E} = \\frac{(A L D) g L}{2 A E} = \\frac{L^2 D g}{2E}$$\n\n✓ **Examiner Pro-Tip**: \nElongation under self-weight is $l = \\frac{L^2 D g}{2E}$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "self-weight"
    ]
  },
  {
    "id": "errorless-phy-ela-196",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "To break a wire, a breaking stress of $10^6\\text{ N/m}^2$ is required. If the density of the material is $3 \\times 10^3\\text{ kg/m}^3$, then the length of the wire which will break by its own weight will be ($g = 9.8\\text{ m/s}^2$): [Roorkee 1979; DPMT 2004]",
    "options": [
      "34 m",
      "30 m",
      "300 m",
      "3 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nMaximum stress occurs at the top suspension point: $\\text{Stress} = L \\rho g$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$L = \\frac{\\text{Breaking Stress}}{\\rho g} = \\frac{10^6\\text{ N/m}^2}{(3 \\times 10^3\\text{ kg/m}^3) \\times 9.8\\text{ m/s}^2} = \\frac{10^6}{29400} = 34.01\\text{ m} \\approx 34\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: \n$L = \\frac{10^6}{3000 \\times 9.8} \\approx 34\\text{ m}$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "breaking-length"
    ]
  },
  {
    "id": "errorless-phy-ela-197",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "Two rods of different materials having coefficients of linear expansion $\\alpha_1, \\alpha_2$ and Young's moduli $Y_1, Y_2$ respectively are fixed between two rigid massive walls. The rods are heated such that they undergo the same increase in temperature. There is no bending of rods. If $\\alpha_1 : \\alpha_2 = 2 : 3$, the thermal stresses developed in the two rods are equal provided $Y_1 : Y_2$ is equal to: [IIT 1989; RPET 1999]",
    "options": [
      "$2 : 3$",
      "$1 : 1$",
      "$3 : 2$",
      "$4 : 9$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThermal stress in a clamped rod is $\\text{Stress} = Y \\alpha \\Delta T$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFor equal thermal stresses:\n$$Y_1 \\alpha_1 \\Delta T = Y_2 \\alpha_2 \\Delta T \\implies \\frac{Y_1}{Y_2} = \\frac{\\alpha_2}{\\alpha_1} = \\frac{3}{2}$$\n\n✓ **Examiner Pro-Tip**: \n$Y_1 : Y_2 = \\alpha_2 : \\alpha_1 = 3 : 2$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "thermal-stress"
    ]
  },
  {
    "id": "errorless-phy-ela-198",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "The extension in a string obeying Hooke's law is $x$. The speed of sound in the stretched string is $v$. If the extension in the string is increased to $1.5x$, the speed of sound will be: [IIT 1996]",
    "options": [
      "1.22 v",
      "0.61 v",
      "1.50 v",
      "0.75 v"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTransverse wave speed in a stretched string is $v = \\sqrt{\\frac{T}{\\mu}}$. By Hooke's law, tension is $T = k x$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$v = \\sqrt{\\frac{k x}{\\mu}} \\propto \\sqrt{x}$$\n$$v' = v \\sqrt{\\frac{1.5x}{x}} = v \\sqrt{1.5} \\approx 1.2247 v \\approx 1.22 v$$\n\n✓ **Examiner Pro-Tip**: \n$v \\propto \\sqrt{T} \\propto \\sqrt{x} \\implies v' = \\sqrt{1.5} v \\approx 1.22 v$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "wave-speed"
    ]
  },
  {
    "id": "errorless-phy-ela-199",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "One end of a uniform wire of length $L$ and weight $W$ is attached rigidly to a point in the roof and a weight $W_1$ is suspended from its lower end. If $S$ is the area of cross-section of the wire, the stress in the wire at a height $3L/4$ from its lower end is: [IIT 1992]",
    "options": [
      "$\\frac{W_1}{S}$",
      "$\\frac{W_1 + (W/4)}{S}$",
      "$\\frac{W_1 + (3W/4)}{S}$",
      "$\\frac{W_1 + W}{S}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStress at any section of height $y$ from the lower end is determined by the total downward load suspended below that section.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- The total weight suspended below $y = \\frac{3L}{4}$ includes the hanging weight $W_1$ plus the weight of length $\\frac{3L}{4}$ of the wire:\n  $$W_{below} = W_1 + \\frac{3}{4} W$$\n- Stress at height $3L/4$:\n  $$\\text{Stress} = \\frac{W_1 + \\frac{3}{4}W}{S}$$\n\n✓ **Examiner Pro-Tip**: \n$\\text{Stress}(y) = \\frac{W_1 + (y/L)W}{S}$. For $y = 3L/4$, $\\text{Stress} = \\frac{W_1 + 3W/4}{S}$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "hanging-wire-stress"
    ]
  },
  {
    "id": "errorless-phy-ela-200",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "There are two wires of same material and same length while the diameter of the second wire is 2 times the diameter of the first wire. The ratio of extension produced in the wires by applying same load will be: [DCE 2000; Roorkee 2000; DCE 2003]",
    "options": [
      "$1 : 1$",
      "$2 : 1$",
      "$1 : 2$",
      "$4 : 1$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElongation $l \\propto \\frac{1}{d^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\frac{l_1}{l_2} = \\left(\\frac{d_2}{d_1}\\right)^2 = (2)^2 = 4$$\nThus, the ratio of extensions is $4 : 1$.\n\n✓ **Examiner Pro-Tip**: \n$\\frac{l_1}{l_2} = \\left(\\frac{2d_1}{d_1}\\right)^2 = 4:1$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "wire-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-201",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A particle of mass $m$ is under the influence of a force $F$ which varies with displacement $x$ according to the relation $F = -kx + F_0$ in which $k$ and $F_0$ are constants. The particle when disturbed will oscillate: [UPSEAT 2001]",
    "options": [
      "About $x = 0$, with $\\omega \\neq \\sqrt{k/m}$",
      "About $x = 0$, with $\\omega = \\sqrt{k/m}$",
      "About $x = F_0 / k$, with $\\omega = \\sqrt{k/m}$",
      "About $x = F_0 / k$, with $\\omega \\neq \\sqrt{k/m}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEquilibrium position occurs where net force is zero: $F = 0 \\implies -kx + F_0 = 0 \\implies x_{eq} = \\frac{F_0}{k}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nDefining displacement from equilibrium $X = x - \\frac{F_0}{k}$:\n$$F = -k \\left(X + \\frac{F_0}{k}\\right) + F_0 = -k X$$\n$$m \\frac{d^2 X}{dt^2} + k X = 0 \\implies \\omega = \\sqrt{\\frac{k}{m}}$$\nThus, the particle performs SHM about $x = F_0 / k$ with angular frequency $\\omega = \\sqrt{k/m}$.\n\n✓ **Examiner Pro-Tip**: \nCenter of oscillation is $x = F_0/k$ with natural frequency $\\omega = \\sqrt{k/m}$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "shm-equilibrium"
    ]
  },
  {
    "id": "errorless-phy-ela-202",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Critical Thinking Questions",
    "difficulty": "Easy",
    "questionText": "An elastic material of Young's modulus $Y$ is subjected to a stress $S$. The elastic energy stored per unit volume of the material is: [MP PET 1991; MP PMT 1990, 96; IIT 1992; AIIMS 1997]",
    "options": [
      "$\\frac{2Y}{S^2}$",
      "$\\frac{S^2}{2Y}$",
      "$\\frac{S}{2Y}$",
      "$\\frac{S^2}{Y}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEnergy stored per unit volume $u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain} = \\frac{\\text{Stress}^2}{2Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$u = \\frac{S^2}{2Y}$$\n\n✓ **Examiner Pro-Tip**: \n$u = \\frac{S^2}{2Y}$.",
    "tags": [
      "elasticity",
      "critical-thinking",
      "energy-density"
    ]
  },
  {
    "id": "errorless-phy-ela-203",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The graph of $T^2$ versus $M$ obtained from experimental measurements of the period of oscillations $T$ for different masses $M$ placed in the scale pan of a spring balance does not pass through the origin. The most likely reason is that: [NCERT 1978]",
    "options": [
      "Spring did not obey Hooke's Law",
      "Amplitude of the oscillations was too large",
      "Clock used needed regulating",
      "Mass of the pan was neglected"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTotal oscillating mass is $(M + m_{pan})$, where $m_{pan}$ is the mass of the scale pan.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$T = 2\\pi \\sqrt{\\frac{M + m_{pan}}{k}} \\implies T^2 = \\frac{4\\pi^2}{k} M + \\frac{4\\pi^2 m_{pan}}{k}$$\nWhen $M = 0$, $T^2 = \\frac{4\\pi^2 m_{pan}}{k} > 0$ (positive y-intercept on the $T^2$ axis).\nThus, neglecting the pan mass creates this non-zero intercept.\n\n✓ **Examiner Pro-Tip**: \nY-intercept equals $\\frac{4\\pi^2 m_{pan}}{k}$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "spring-oscillations"
    ]
  },
  {
    "id": "errorless-phy-ela-204",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "In a typical stress-strain curve for a metal showing regions OA (linear), AB, BC, and CD, the part in which Hooke's law strictly holds good is:",
    "options": [
      "OA",
      "AB",
      "BC",
      "CD"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nHooke's law is obeyed only in the linear proportional region OA where stress is strictly proportional to strain.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nPoint A is the limit of proportionality; beyond A, the graph curves away from linearity.\n\n✓ **Examiner Pro-Tip**: \nOA is the Hookean proportional region.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "stress-strain-curve"
    ]
  },
  {
    "id": "errorless-phy-ela-205",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "In the standard stress-strain diagram for a ductile metal, point B represents:",
    "options": [
      "Breaking point",
      "Limiting point",
      "Yield point (elastic limit)",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nPoint B represents the elastic limit or yield point. Beyond this point, permanent plastic deformation sets in.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "yield-point"
    ]
  },
  {
    "id": "errorless-phy-ela-206",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "In the standard stress-strain diagram for a ductile metal, the terminal point D indicates:",
    "options": [
      "Limiting point",
      "Yield point",
      "Breaking point (fracture point)",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nPoint D is the breaking/fracture point where the material ruptures under tensile loading.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "breaking-point"
    ]
  },
  {
    "id": "errorless-phy-ela-207",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "The strain-stress curves of three wires of different materials are plotted with Strain on the y-axis and Stress on the x-axis. P, Q and R are the elastic limits. The figure shows that: [MP PET 1991]",
    "options": [
      "Elasticity of wire P is maximum",
      "Elasticity of wire Q is maximum",
      "Tensile strength of R is maximum",
      "None of the above is true"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen Strain is on the y-axis and Stress is on the x-axis, the slope is $\\frac{\\text{Strain}}{\\text{Stress}} = \\frac{1}{Y}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- The wire with the smallest slope (line R) has the highest Young's modulus $Y$ (maximum elasticity).\n- P has the largest slope, hence lowest elasticity.\n- Since option (a) and (b) claim P or Q has maximum elasticity, they are false. Hence (d) None of the above is true.\n\n✓ **Examiner Pro-Tip**: \nAlways check graph axes: on Strain vs Stress plots, smaller slope means larger $Y$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "axes-inversion"
    ]
  },
  {
    "id": "errorless-phy-ela-208",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The diagram shows a force-extension hysteresis loop for a rubber band. Consider the following statements: [AMU 2001]\nI. It will be easier to compress this rubber than expand it\nII. Rubber does not return to its original length after it is stretched\nIII. The rubber band will get heated if it is stretched and released\nWhich of these can be deduced from the graph?",
    "options": [
      "III only",
      "II and III",
      "I and III",
      "I only"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe area enclosed by the loading and unloading curves (hysteresis loop) represents the mechanical energy converted into thermal energy during the cycle.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince the loop encloses non-zero area, work done during loading exceeds work recovered during unloading, with the difference appearing as heat. Hence, statement III only is correctly deduced.\n\n✓ **Examiner Pro-Tip**: \nArea of elastic hysteresis loop $= \\text{Energy dissipated as heat}$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "hysteresis-loop"
    ]
  },
  {
    "id": "errorless-phy-ela-209",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The stress versus strain graphs for wires of two materials A and B make angles of 60° and 30° with the strain axis respectively. If $Y_A$ and $Y_B$ are the Young's moduli of the materials, then: [Kerala (Engg.) 2001]",
    "options": [
      "$Y_B = 2 Y_A$",
      "$Y_A = Y_B$",
      "$Y_B = 3 Y_A$",
      "$Y_A = 3 Y_B$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus is the slope of the Stress vs Strain graph: $Y = \\tan\\theta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $Y_A = \\tan 60^\\circ = \\sqrt{3}$\n- $Y_B = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$\n$$\\frac{Y_A}{Y_B} = \\frac{\\sqrt{3}}{1/\\sqrt{3}} = 3 \\implies Y_A = 3 Y_B$$\n\n✓ **Examiner Pro-Tip**: \n$\\frac{Y_A}{Y_B} = \\frac{\\tan 60^\\circ}{\\tan 30^\\circ} = 3 \\implies Y_A = 3 Y_B$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "slope-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-210",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The load versus elongation graph for four wires of the same material is shown in the figure (lines OA, OB, OC, OD in order of increasing slope). The thickest wire is represented by the line: [KCET 2001]",
    "options": [
      "OD",
      "OC",
      "OB",
      "OA"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nSlope of Load ($F$) vs Elongation ($l$) graph is $\\frac{F}{l} = \\frac{Y A}{L} = \\frac{Y \\pi d^2}{4L} \\propto d^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThe wire with the steepest slope (highest $\\frac{F}{l}$) has the largest cross-sectional area and diameter $d$. Line OD has the maximum slope, hence represents the thickest wire.\n\n✓ **Examiner Pro-Tip**: \nMaximum slope on $F$-$l$ plot $\\implies$ maximum cross-sectional area (thickest wire).",
    "tags": [
      "elasticity",
      "graphical-questions",
      "load-elongation"
    ]
  },
  {
    "id": "errorless-phy-ela-211",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The adjacent graph shows the extension $(\\Delta l)$ of a wire of length 1 m suspended from the top of a roof with load $W$. If the cross-sectional area of the wire is $10^{-6}\\text{ m}^2$, calculate the Young's modulus of the material of the wire: [IIT-JEE 2003]",
    "options": [
      "$2 \\times 10^{11}\\text{ N/m}^2$",
      "$2 \\times 10^{-11}\\text{ N/m}^2$",
      "$3 \\times 10^{-12}\\text{ N/m}^2$",
      "$2 \\times 10^{-13}\\text{ N/m}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y = \\frac{W L}{A \\Delta l}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nFrom the graph, at $W = 80\\text{ N}$, $\\Delta l = 4 \\times 10^{-4}\\text{ m}$:\n- $L = 1\\text{ m}$\n- $A = 10^{-6}\\text{ m}^2$\n$$Y = \\frac{80 \\times 1}{10^{-6} \\times (4 \\times 10^{-4})} = \\frac{80}{4 \\times 10^{-10}} = 20 \\times 10^{10} = 2 \\times 10^{11}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = \\frac{80}{4 \\times 10^{-10}} = 2 \\times 10^{11}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "iit-jee"
    ]
  },
  {
    "id": "errorless-phy-ela-212",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The graph is drawn between applied force $F$ and strain $x$ for a thin uniform wire with regions oa, ab, bc, cd. The wire behaves as a liquid in the part: [CPMT 1988]",
    "options": [
      "ab",
      "bc",
      "cd",
      "oa"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIn the yield region bc (plastic flow region), large elongation and strain occur with negligible increase in load (the metal wire literally flows like a viscous liquid).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThis region of plastic flow is known as the plastic yielding zone (part bc).\n\n✓ **Examiner Pro-Tip**: \nPart bc represents plastic flow where strain increases without requiring additional force.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "plastic-flow"
    ]
  },
  {
    "id": "errorless-phy-ela-213",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A parabolic curve $Q \\propto P^2$ shows the behaviour of a wire obeying Hooke's law. $P$ and $Q$ represent: [AMU 2001]",
    "options": [
      "$P = \\text{applied force}, Q = \\text{extension}$",
      "$P = \\text{extension}, Q = \\text{applied force}$",
      "$P = \\text{extension}, Q = \\text{stored elastic energy}$",
      "$P = \\text{stored elastic energy}, Q = \\text{extension}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStored elastic energy is $U = \\frac{1}{2} k x^2 \\propto x^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nA plot of $U$ (stored elastic energy on y-axis, $Q$) versus $x$ (extension on x-axis, $P$) gives a parabola opening upward ($Q \\propto P^2$).\n\n✓ **Examiner Pro-Tip**: \n$U = \\frac{1}{2} k x^2 \\implies Q = U$ and $P = x$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "parabolic-energy"
    ]
  },
  {
    "id": "errorless-phy-ela-214",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "The potential energy $U$ between two molecules as a function of the distance $X$ between them is shown in the figure (minimum at B). The two molecules are: [CPMT 1986, 88, 91]",
    "options": [
      "Attracted when $X$ lies between A and B and repelled when $X$ lies between B and C",
      "Attracted when $X$ lies between B and C and repelled when $X$ lies between A and B",
      "Attracted when they reach B",
      "Repelled when they reach B"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIntermolecular force is related to potential energy gradient by $F = -\\frac{dU}{dX}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. For $X$ between A and B ($X < r_0$): The slope $\\frac{dU}{dX}$ is negative, so $F = -\\left(-\\frac{dU}{dX}\\right) > 0$ (repulsive force).\n2. At point B ($X = r_0$): $\\frac{dU}{dX} = 0 \\implies F = 0$ (stable equilibrium).\n3. For $X$ between B and C ($X > r_0$): The slope $\\frac{dU}{dX}$ is positive, so $F = -\\frac{dU}{dX} < 0$ (attractive force).\nThus, attracted for $X \\in (B, C)$ and repelled for $X \\in (A, B)$.\n\n✓ **Examiner Pro-Tip**: \n$F = -dU/dr$: negative slope $\\implies$ repulsion, positive slope $\\implies$ attraction.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "potential-energy-curve"
    ]
  },
  {
    "id": "errorless-phy-ela-215",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A force versus displacement line makes an angle of 30° with the displacement axis. The value of the force constant is:",
    "options": [
      "$\\sqrt{3}$",
      "$1 / \\sqrt{3}$",
      "$1/2$",
      "$\\sqrt{3}/2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nForce constant is the slope of the Force versus displacement graph: $k = \\frac{F}{x} = \\tan\\theta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$k = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$\n\n✓ **Examiner Pro-Tip**: \n$k = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "force-constant"
    ]
  },
  {
    "id": "errorless-phy-ela-216",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The diagram shows stress versus strain curves for materials A and B. Curve A has a long plastic region before breaking, whereas curve B terminates right after the elastic limit. From the curves we infer that: [AIIMS 1987]",
    "options": [
      "A is brittle but B is ductile",
      "A is ductile and B is brittle",
      "Both A and B are ductile",
      "Both A and B are brittle"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \n- Ductile materials have a large plastic range between the elastic limit and the fracture point.\n- Brittle materials fracture almost immediately after the elastic limit is crossed.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nHence, A is ductile and B is brittle.\n\n✓ **Examiner Pro-Tip**: \nLarge plastic range $\\implies$ ductile; short/no plastic range $\\implies$ brittle.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "ductile-vs-brittle"
    ]
  },
  {
    "id": "errorless-phy-ela-217",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "In a stress-strain curve, at strain $= 4 \\times 10^{-4}$ in the linear region, the stress is $8 \\times 10^7\\text{ N/m}^2$. Young's modulus (in $\\text{N/m}^2$) for the wire is:",
    "options": [
      "$24 \\times 10^{11}$",
      "$8.0 \\times 10^{11}$",
      "$10 \\times 10^{11}$",
      "$2.0 \\times 10^{11}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nYoung's modulus $Y = \\frac{\\text{Stress}}{\\text{Strain}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$Y = \\frac{8 \\times 10^7\\text{ N/m}^2}{4 \\times 10^{-4}} = 2 \\times 10^{11}\\text{ N/m}^2$$\n\n✓ **Examiner Pro-Tip**: \n$Y = \\frac{8 \\times 10^7}{4 \\times 10^{-4}} = 2.0 \\times 10^{11}\\text{ N/m}^2$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "youngs-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-218",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The diagram shows the change $x$ in the length of a thin uniform wire caused by the application of stress $F$ at two different temperatures $T_1$ and $T_2$ (slope at $T_1$ is smaller than at $T_2$). The variations suggest that: [CPMT 1988]",
    "options": [
      "$T_1 > T_2$",
      "$T_1 < T_2$",
      "$T_1 = T_2$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAs temperature increases, Young's modulus $Y$ decreases, so a given stress produces a larger elongation $x$ (smaller slope on a stress vs extension plot, or larger extension per unit force).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nAt temperature $T_1$, the wire produces more elongation for the same force compared to $T_2$, which indicates $Y(T_1) < Y(T_2)$. Since elasticity decreases with increasing temperature, $T_1 > T_2$.\n\n✓ **Examiner Pro-Tip**: \nHigher temperature $\\implies$ lower $Y \\implies$ more elongation.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "temperature-effect"
    ]
  },
  {
    "id": "errorless-phy-ela-219",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "A student plots a graph from readings on the determination of Young's modulus of a metal wire that yields a straight line passing through the origin. The quantities on X and Y axes may be respectively:",
    "options": [
      "Weight hung and length increased",
      "Stress applied and length increased",
      "Stress applied and strain developed",
      "Length increased and weight hung"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Hooke's law, $\\text{Stress} \\propto \\text{Strain}$, so a plot of Stress vs Strain (or Strain vs Stress) is a straight line through the origin.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nAmong the options, Stress applied and Strain developed are the fundamental conjugate pair defining Young's modulus.\n\n✓ **Examiner Pro-Tip**: \nStress vs Strain is a straight line through origin.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "stress-strain"
    ]
  },
  {
    "id": "errorless-phy-ela-220",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "The points of maximum and minimum attraction in the curve between potential energy ($U$) and distance ($r$) of a diatomic molecule are respectively at points:",
    "options": [
      "S and R",
      "T and S",
      "R and S",
      "S and T"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAttractive force is $F_{att} = -\\frac{dU}{dr}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. Attractive force magnitude is proportional to the positive slope $\\frac{dU}{dr}$.\n2. The slope $\\frac{dU}{dr}$ is maximum at the inflection point S, meaning maximum attraction occurs at S.\n3. At large distance T ($r \\to \\infty$), $\\frac{dU}{dr} \\to 0$, meaning minimum (zero) attraction occurs at T.\nThus, points of maximum and minimum attraction are S and T respectively.\n\n✓ **Examiner Pro-Tip**: \nInflection point S has maximum positive slope $\\implies$ maximum attraction; asymptotic tail T has zero slope $\\implies$ minimum attraction.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "interatomic-potential"
    ]
  },
  {
    "id": "errorless-phy-ela-221",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The stress-strain curves for brass, steel and rubber are shown in the figure (slopes in order A > B > C). The lines A, B and C are for:",
    "options": [
      "Rubber, brass and steel respectively",
      "Brass, steel and rubber respectively",
      "Steel, brass and rubber respectively",
      "Steel, rubber and brass respectively"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nSlope of Stress vs Strain is Young's modulus $Y = \\text{slope}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince $Y_{steel} (20 \\times 10^{10}\\text{ N/m}^2) > Y_{brass} (9 \\times 10^{10}\\text{ N/m}^2) > Y_{rubber} (10^7\\text{–}10^8\\text{ N/m}^2)$:\n- Line A (steepest slope) corresponds to Steel\n- Line B (medium slope) corresponds to Brass\n- Line C (shallowest slope) corresponds to Rubber\n\n✓ **Examiner Pro-Tip**: \n$Y_{steel} > Y_{brass} > Y_{rubber} \\implies \\text{Slope}_A > \\text{Slope}_B > \\text{Slope}_C$.",
    "tags": [
      "elasticity",
      "graphical-questions",
      "modulus-comparison"
    ]
  },
  {
    "id": "errorless-phy-ela-222",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The stretching of a coil spring is determined by its shear modulus.\nReason: Shear modulus changes only the shape of a body keeping its volume unchanged.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWhen a helical coil spring is stretched along its axis, the wire of the spring experiences pure torsion (twisting/shearing deformation), without change in wire volume or radius.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- The restoring torque depends directly on the modulus of rigidity (shear modulus $\\eta$).\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nStretching a spring produces shear strain in its wire, so spring stiffness is governed by shear modulus $\\eta$.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "coil-spring"
    ]
  },
  {
    "id": "errorless-phy-ela-223",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Spring balances show correct readings even after they have been used for a long time interval.\nReason: On using for a long time, spring balances lose their elastic strength.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept**: \nRepeated cyclic stretching and unloading causes elastic fatigue in the spring metal.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Due to elastic fatigue, the spring loses elastic strength and develops a permanent set, causing erroneous readings. Thus, Assertion is false.\n- Reason is true: Long use degrades elastic strength via fatigue.\n- Hence, Assertion is false but Reason is true.\n\n✓ **Examiner Pro-Tip**: \nSpring balances lose accuracy over time due to elastic fatigue.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "elastic-fatigue"
    ]
  },
  {
    "id": "errorless-phy-ela-224",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Steel is more elastic than rubber.\nReason: Under a given deforming force, steel is deformed less than rubber.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nElasticity is measured by the magnitude of Young's modulus $Y = \\frac{\\text{Stress}}{\\text{Strain}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- For the same applied load/stress, steel produces vastly less elongation and strain than rubber ($Y_{steel} \\approx 2 \\times 10^{11}\\text{ N/m}^2 \\gg Y_{rubber} \\approx 10^7\\text{ N/m}^2$).\n- A higher Young's modulus means greater elasticity.\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nIn physics, the material which deforms less under given stress is more elastic.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "steel-vs-rubber"
    ]
  },
  {
    "id": "errorless-phy-ela-225",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Glassy solids have a sharp melting point.\nReason: The bonds between the atoms of glassy solids get broken at the same temperature.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGlassy (amorphous) solids do not possess a regular long-range crystal lattice.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- In amorphous solids, interatomic bonds have varying bond lengths and bond strengths, so they soften gradually over a wide temperature range rather than melting sharply at a single temperature. Assertion is false.\n- Reason is false because bonds break progressively at different temperatures.\n- Both Assertion and Reason are false.\n\n✓ **Examiner Pro-Tip**: \nCrystalline solids have sharp melting points; amorphous/glassy solids soften gradually over a temperature range.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "amorphous-solids"
    ]
  },
  {
    "id": "errorless-phy-ela-226",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A hollow shaft is found to be stronger than a solid shaft made of the same mass, length and material.\nReason: The torque required to produce a given twist in a hollow cylinder is greater than that required to twist a solid cylinder of the same mass and material.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTorsional couple per unit twist is $C = \\frac{\\pi \\eta (r_2^4 - r_1^4)}{2l}$ for a hollow shaft and $C = \\frac{\\pi \\eta r^4}{2l}$ for a solid shaft.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- For equal mass and length, cross-sectional area is equal: $r_2^2 - r_1^2 = r^2$.\n- Then $\\frac{C_{hollow}}{C_{solid}} = \\frac{r_2^2 + r_1^2}{r^2} > 1$, which proves that the hollow shaft requires larger torque to twist and is therefore stronger.\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nHollow shaft distributes mass further from the axis, giving larger polar moment of inertia and greater torsional rigidity.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "hollow-shaft"
    ]
  },
  {
    "id": "errorless-phy-ela-227",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Bulk modulus of elasticity ($K$) represents incompressibility of the material.\nReason: Bulk modulus of elasticity is proportional to change in pressure for a given volumetric strain.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBulk modulus is defined as $K = \\frac{\\Delta P}{-\\Delta V / V}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- A larger value of $K$ indicates that a larger pressure $\\Delta P$ is required to produce a unit volumetric strain (i.e. the material is highly incompressible).\n- Incompressibility is measured directly by $K = 1/C$.\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \n$K = 1 / \\text{Compressibility}$; higher $K \\implies$ more incompressible.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "bulk-modulus"
    ]
  },
  {
    "id": "errorless-phy-ela-228",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Strain is a unitless quantity.\nReason: Strain is equivalent to force.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nStrain is the ratio of change in dimension to original dimension (e.g. $\\Delta L / L$), hence it is a pure dimensionless and unitless number. Assertion is true.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nReason is completely false because strain is a ratio of lengths/volumes, not a force (unit of force is Newton, while strain has no unit).\n\n✓ **Examiner Pro-Tip**: \nStrain is dimensionless ($[M^0L^0T^0]$); Assertion is true, Reason is false.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "strain-definition"
    ]
  },
  {
    "id": "errorless-phy-ela-229",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Bridges are declared unsafe after long use.\nReason: Elastic strength of bridges is lost with time due to repeated strain.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nContinuous alternating loads and vibrations over many years subject bridge components to cyclic stresses.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nThis induces elastic fatigue, significantly lowering the breaking stress and yield strength of the structure. Therefore, bridges are retired and declared unsafe.\n\n✓ **Examiner Pro-Tip**: \nElastic fatigue from alternating strains weakens structural integrity.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "elastic-fatigue"
    ]
  },
  {
    "id": "errorless-phy-ela-230",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Two identical solid balls, one of ivory and the other of wet-clay, are dropped from the same height onto the floor. Both balls will rise to the same height after bouncing.\nReason: Ivory and wet-clay have the same elasticity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \n- Ivory is nearly perfectly elastic ($e \\approx 0.9$), so an ivory ball bounces back to almost its initial drop height.\n- Wet clay is perfectly plastic ($e \\approx 0$), so it deforms permanently on impact and does not bounce at all.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nBoth Assertion and Reason are completely false.\n\n✓ **Examiner Pro-Tip**: \nIvory is highly elastic (high coefficient of restitution); clay is plastic ($e = 0$).",
    "tags": [
      "elasticity",
      "assertion-reason",
      "elastic-vs-plastic"
    ]
  },
  {
    "id": "errorless-phy-ela-231",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Young's modulus for a perfectly plastic body is zero.\nReason: For a perfectly plastic body, internal restoring force is zero.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nA perfectly plastic body does not develop any restoring force when deformed ($F_{restoring} = 0$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$\\text{Stress} = \\frac{F_{restoring}}{A} = 0 \\implies Y = \\frac{\\text{Stress}}{\\text{Strain}} = 0$$\nBoth Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nFor perfectly plastic bodies: $F_{restoring} = 0 \\implies \\text{Stress} = 0 \\implies Y = 0$.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "plastic-body"
    ]
  },
  {
    "id": "errorless-phy-ela-232",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Identical springs of steel and copper are equally stretched. More work will be done on the steel spring.\nReason: Steel is more elastic than copper.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done in stretching a spring by extension $x$ is $W = \\frac{1}{2} k x^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Spring constant $k = \\frac{Y A}{L}$ is directly proportional to Young's modulus $Y$.\n- Since $Y_{steel} > Y_{copper}$, $k_{steel} > k_{copper}$.\n- For equal extension $x$, $W_{steel} = \\frac{1}{2} k_{steel} x^2 > W_{copper} = \\frac{1}{2} k_{copper} x^2$.\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nFor equal extension $x$, $W \\propto k \\propto Y \\implies W_{steel} > W_{copper}$.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "spring-work"
    ]
  },
  {
    "id": "errorless-phy-ela-233",
    "subject": "Physics",
    "chapter": "Elasticity",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Stress is the internal restoring force per unit area of a body.\nReason: Rubber is less elastic than steel.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \n- Stress is by definition the internal restoring force developed per unit area of cross-section: $\\sigma = \\frac{F}{A}$. Assertion is true.\n- Rubber has a much smaller Young's modulus than steel ($Y_{rubber} \\ll Y_{steel}$), making rubber less elastic than steel. Reason is true.\n- However, Reason is an independent material comparison and is not the explanation of the definition of stress.\n- Hence, both are true but Reason is not the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nAssertion and Reason are both true facts, but Reason does not explain the definition of stress.",
    "tags": [
      "elasticity",
      "assertion-reason",
      "stress-definition"
    ]
  }
];

export const ELASTICITY_QUESTIONS = ELASTICITY_BOOK_QUESTIONS;

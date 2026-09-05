import { Question } from '../types';

export const FRICTION_QUESTIONS: Question[] = [
  {
    "id": "fric-slf-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "The coefficient of friction $\\mu$ and the angle of friction $\\lambda$ are related as",
    "options": [
      "$\\sin\\lambda = \\mu$",
      "$\\cos\\lambda = \\mu$",
      "$\\tan\\lambda = \\mu$",
      "$\\tan\\mu = \\lambda$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe angle of friction $\\lambda$ is defined as the angle which the resultant of the limiting friction force ($F_l$) and the normal reaction ($R$) makes with the normal reaction.\n\n\u26a1 **Step-by-Step Derivation**:\n$$\\tan\\lambda = \\frac{F_l}{R}$$\nSince the coefficient of static friction is $\\mu = \\frac{F_l}{R}$:\n$$\\tan\\lambda = \\mu \\implies \\lambda = \\tan^{-1}(\\mu)$$\n\n\u2713 **Examiner Pro-Tip**:\nSimilarly, the angle of repose $\\alpha$ satisfies $\\tan\\alpha = \\mu$. Thus, angle of friction = angle of repose ($\\lambda = \\alpha$).",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "A force of $98\\text{ N}$ is required to just start moving a body of mass $100\\text{ kg}$ over ice. The coefficient of static friction is",
    "options": [
      "0.6",
      "0.4",
      "0.2",
      "0.1"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo just start the motion, the applied horizontal force must overcome the limiting static friction: $F = F_l = \\mu_s R$.\n\n\u26a1 **Step-by-Step Calculation**:\n1. Normal reaction on a horizontal surface: $R = mg = 100\\text{ kg} \\times 9.8\\text{ m/s}^2 = 980\\text{ N}$.\n2. Coefficient of static friction:\n$$\\mu_s = \\frac{F_l}{R} = \\frac{98\\text{ N}}{980\\text{ N}} = 0.1$$\n\n\u2713 **Examiner Pro-Tip**:\nIce has a very small coefficient of friction (~0.05 to 0.1), which causes easy skidding.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A block weighs $W$ is held against a vertical wall by applying a horizontal force $F$. The minimum value of $F$ needed to hold the block is [MP PMT 1993]",
    "options": [
      "Less than $W$",
      "Equal to $W$",
      "Greater than $W$",
      "Data is insufficient"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen pressed against a vertical wall by horizontal force $F$, the normal reaction from the wall is $R = F$. The upward frictional force preventing downward sliding is $f_s$.\n\n\u26a1 **Step-by-Step Derivation**:\n1. For vertical equilibrium:\n$$f_s = W$$\n2. Limiting friction $f_{s,\\max} = \\mu R = \\mu F \\ge W$.\n3. Minimum holding force:\n$$F_{\\min} = \\frac{W}{\\mu}$$\n4. For ordinary surfaces, $\\mu < 1$. Therefore:\n$$F_{\\min} = \\frac{W}{\\mu} > W$$\n\n\u2713 **Examiner Pro-Tip**:\nSince $\\mu < 1$, the normal force applied horizontally must be strictly greater than the gravitational weight of the block.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "The maximum static frictional force is",
    "options": [
      "Equal to twice the area of surface in contact",
      "Independent of the area of surface in contact",
      "Equal to the area of surface in contact",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAccording to the laws of limiting friction, the maximum static frictional force $F_l = \\mu_s R$ is:\n1. Directly proportional to the normal reaction $R$.\n2. Dependent on the nature and roughness of the contacting surfaces.\n3. **Independent of the apparent area of contact**, provided normal reaction remains constant.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "Maximum value of static friction is called [BHU 1995; RPET 2000]",
    "options": [
      "Limiting friction",
      "Rolling friction",
      "Normal reaction",
      "Coefficient of friction"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nStatic friction is a self-adjusting force that opposes impending motion. The maximum opposing force developed before actual sliding starts is called **Limiting Friction** ($F_l = \\mu_s R$).",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Hard",
    "questionText": "Pulling force making an angle $\\theta$ to the horizontal is applied on a block of weight $W$ placed on a horizontal table. If the angle of friction is $\\alpha$, then the magnitude of force required to move the body is equal to [EAMCET 1987]",
    "options": [
      "$\\frac{W\\sin\\alpha}{g\\tan(\\theta - \\alpha)}$",
      "$\\frac{W\\cos\\alpha}{\\cos(\\theta - \\alpha)}$",
      "$\\frac{W\\sin\\alpha}{\\cos(\\theta - \\alpha)}$",
      "$\\frac{W\\tan\\alpha}{\\sin(\\theta - \\alpha)}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nResolving pulling force $P$ applied at angle $\\theta$ above the horizontal:\n- Vertical normal reaction: $R = W - P\\sin\\theta$\n- Horizontal pulling component: $P\\cos\\theta$\n\n\u26a1 **Step-by-Step Derivation**:\n1. For impending motion: $P\\cos\\theta = \\mu R = \\mu (W - P\\sin\\theta)$.\n2. Substitute $\\mu = \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$:\n$$P\\cos\\theta = \\frac{\\sin\\alpha}{\\cos\\alpha}(W - P\\sin\\theta)$$\n$$P(\\cos\\theta\\cos\\alpha + \\sin\\theta\\sin\\alpha) = W\\sin\\alpha$$\n$$P\\cos(\\theta - \\alpha) = W\\sin\\alpha \\implies P = \\frac{W\\sin\\alpha}{\\cos(\\theta - \\alpha)}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "In the figure shown, a block of weight $10\\text{ N}$ resting on a horizontal surface. The coefficient of static friction between the block and the surface $\\mu_s = 0.4$. A force of $3.5\\text{ N}$ will keep the block in uniform motion, once it has been set in motion. A horizontal force of $3\\text{ N}$ is applied to the block, then the block will [MP PET 1993]",
    "options": [
      "Move over the surface with constant velocity",
      "Move having accelerated motion over the surface",
      "Not move",
      "First it will move with a constant velocity for some time and then will have accelerated motion"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nA body remains stationary as long as the applied external force does not exceed the maximum limiting static friction $F_l$.\n\n\u26a1 **Step-by-Step Calculation**:\n1. Limiting friction: $F_l = \\mu_s R = 0.4 \\times 10\\text{ N} = 4.0\\text{ N}$.\n2. Applied force: $F = 3.0\\text{ N}$.\n3. Since $F_{\\text{applied}} (3\\text{ N}) < F_l (4\\text{ N})$, the static friction adjusts itself to $3\\text{ N}$, and the block does not move at all.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "Two masses $A$ and $B$ of $10\\text{ kg}$ and $5\\text{ kg}$ respectively are connected with a string passing over a frictionless pulley fixed at the corner of a table as shown. The coefficient of static friction of $A$ with table is 0.2. The minimum mass of $C$ that may be placed on $A$ to prevent it from moving is [MP PET 1984]",
    "options": [
      "$15\\text{ kg}$",
      "$10\\text{ kg}$",
      "$5\\text{ kg}$",
      "$12\\text{ kg}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo prevent motion, the maximum static friction on the combined block $(A+C)$ on the table must balance the downward tension produced by hanging block $B$.\n\n\u26a1 **Step-by-Step Calculation**:\n1. Tension $T = m_B g = 5g$.\n2. Maximum static friction: $f_s = \\mu_s (m_A + m_C)g = 0.2(10 + m_C)g$.\n3. Equating for equilibrium:\n$$0.2(10 + m_C)g = 5g$$\n$$2 + 0.2 m_C = 5 \\implies 0.2 m_C = 3 \\implies m_C = 15\\text{ kg}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q9",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "The limiting friction is",
    "options": [
      "Always greater than the dynamic friction",
      "Always less than the dynamic friction",
      "Equal to the dynamic friction",
      "Sometimes greater and sometimes less than the dynamic friction"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLimiting static friction is always greater than dynamic (kinetic) friction ($F_l > F_k$, $\\mu_s > \\mu_k$). Once motion begins, the surface micro-irregularities do not get enough time to fully interlock, lowering the frictional resistance.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q10",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "Which is a suitable method to decrease friction",
    "options": [
      "Ball and bearings",
      "Lubrication",
      "Polishing",
      "All the above"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFriction can be reduced by:\n1. **Ball bearings**: Replacing sliding friction with rolling friction (which is much smaller).\n2. **Lubricants**: Creating a thin film between contact surfaces to prevent direct interlocking.\n3. **Polishing**: Smoothing down microscopic surface asperities.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q11",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A uniform rope of length $l$ lies on a table. If the coefficient of friction is $\\mu$, then the maximum length $l_1$ of the part of this rope which can overhang from the edge of the table without sliding down is [DPMT 2001]",
    "options": [
      "$\\frac{l}{\\mu}$",
      "$\\frac{l}{\\mu + 1}$",
      "$\\frac{\\mu l}{1 + \\mu}$",
      "$\\frac{\\mu l}{\\mu - 1}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLet $\\lambda = M/l$ be linear mass density. The weight of the hanging portion $\\lambda l_1 g$ is balanced by the maximum static friction on the table portion $\\mu \\lambda (l - l_1) g$.\n\n\u26a1 **Step-by-Step Calculation**:\n$$\\lambda l_1 g = \\mu \\lambda (l - l_1) g$$\n$$l_1 = \\mu l - \\mu l_1 \\implies l_1(1 + \\mu) = \\mu l \\implies l_1 = \\frac{\\mu l}{1 + \\mu}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q12",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is not true [CMC Vellore 1989]",
    "options": [
      "The coefficient of friction between two surfaces increases as the surface in contact are made rough",
      "The force of friction acts in a direction opposite to the applied force",
      "Rolling friction is greater than sliding friction",
      "The coefficient of friction between wood and wood is less than 1"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRolling friction is significantly smaller than sliding friction (typically $\\mu_r \\approx 10^{-2}$ to $10^{-3} \\times \\mu_k$). Hence, the statement 'Rolling friction is greater than sliding friction' is completely incorrect.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q13",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "A block of $1\\text{ kg}$ is stopped against a wall by applying a force $F$ perpendicular to the wall. If $\\mu = 0.2$ then minimum value of $F$ will be [MP PMT 2003]",
    "options": [
      "$980\\text{ N}$",
      "$49\\text{ N}$",
      "$98\\text{ N}$",
      "$490\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNormal reaction provided by the wall is $R = F$. To balance weight $mg$, frictional force $f_s = \\mu F \\ge mg$.\n\n\u26a1 **Step-by-Step Calculation**:\n$$F_{\\min} = \\frac{mg}{\\mu} = \\frac{1\\text{ kg} \\times 9.8\\text{ m/s}^2}{0.2} = 49\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q14",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A heavy uniform chain lies on a horizontal table-top. If the coefficient of friction between the chain and table surface is 0.25, then the maximum fraction of length of the chain, that can hang over one edge of the table is [CBSE PMT 1990]",
    "options": [
      "20%",
      "25%",
      "35%",
      "15%"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe maximum fraction of length of a chain hanging over the table edge is given by:\n$$\\frac{l'}{l} = \\frac{\\mu}{1 + \\mu}$$\n\n\u26a1 **Step-by-Step Calculation**:\n$$\\frac{l'}{l} = \\frac{0.25}{1 + 0.25} = \\frac{0.25}{1.25} = \\frac{1}{5} = 20\\%$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q15",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "The blocks $A$ and $B$ are arranged as shown in the figure. The pulley is frictionless. The mass of $A$ is $10\\text{ kg}$. The coefficient of friction of $A$ with the horizontal surface is 0.20. The minimum mass of $B$ to start the motion will be [MP PET 1994]",
    "options": [
      "$2\\text{ kg}$",
      "$0.2\\text{ kg}$",
      "$5\\text{ kg}$",
      "$10\\text{ kg}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo initiate motion, the pulling weight of $B$ ($m_B g$) must just exceed the limiting static friction of $A$ ($f_l = \\mu_s m_A g$).\n\n\u26a1 **Step-by-Step Calculation**:\n$$m_B = \\mu_s m_A = 0.20 \\times 10\\text{ kg} = 2\\text{ kg}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q16",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "Work done by a frictional force is",
    "options": [
      "Negative",
      "Positive",
      "Zero",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWork done by friction depends on the relative displacement of the contact point:\n1. **Negative**: When a block slides on a rough ground (kinetic friction opposes displacement).\n2. **Positive**: When a block placed on the bed of an accelerating truck accelerates forward due to static friction.\n3. **Zero**: In pure rolling motion where the instantaneous point of contact has zero displacement.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q17",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A uniform chain of length $L$ hangs partly from a table which is kept in equilibrium by friction. The maximum length that can withstand without slipping is $l$, then coefficient of friction between the table and the chain is [EAMCET (Engg.) 1995]",
    "options": [
      "$\\frac{l}{L}$",
      "$\\frac{l}{L + l}$",
      "$\\frac{l}{L - l}$",
      "$\\frac{L}{L + l}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu = \\frac{\\text{Mass of hanging chain}}{\\text{Mass of chain on table}} = \\frac{\\text{Length hanging}}{\\text{Length on table}}$$\n\n\u26a1 **Step-by-Step Calculation**:\nLength hanging $= l$, length on table $= L - l$.\n$$\\mu = \\frac{l}{L - l}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q18",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "When two surfaces are coated with a lubricant, then they [AFMC 1998, 99; AIIMS 2001]",
    "options": [
      "Stick to each other",
      "Slide upon each other",
      "Roll upon each other",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLubrication introduces a liquid film between two dry solid surfaces, converting solid-on-solid boundary friction to internal fluid layer shear, enabling surfaces to slide smoothly over each other.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q19",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A $20\\text{ kg}$ block is initially at rest on a rough horizontal surface. A horizontal force of $75\\text{ N}$ is required to set the block in motion. After it is in motion, a horizontal force of $60\\text{ N}$ is required to keep the block moving with constant speed. The coefficient of static friction is [AMU 1999]",
    "options": [
      "0.38",
      "0.44",
      "0.52",
      "0.60"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe force required to set the block into motion is the limiting static friction $F_l = 75\\text{ N}$.\n\n\u26a1 **Step-by-Step Calculation**:\n$$\\mu_s = \\frac{F_l}{mg} = \\frac{75\\text{ N}}{20\\text{ kg} \\times 9.8\\text{ m/s}^2} = \\frac{75}{196} \\approx 0.38$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q20",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Hard",
    "questionText": "A block $A$ with mass $100\\text{ kg}$ is resting on another block $B$ of mass $200\\text{ kg}$. As shown in figure a horizontal rope tied to a wall holds it. The coefficient of friction between $A$ and $B$ is 0.2 while coefficient of friction between $B$ and the ground is 0.3. The minimum required force $F$ to start moving $B$ will be [RPET 1999]",
    "options": [
      "$900\\text{ N}$",
      "$100\\text{ N}$",
      "$1100\\text{ N}$",
      "$1200\\text{ N}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen block $B$ is pulled to the right:\n- The contact surface between $A$ and $B$ exerts friction $f_{AB}$ to the left on $B$.\n- The contact surface between $B$ and the ground exerts friction $f_{BG}$ to the left on $B$.\n\n\u26a1 **Step-by-Step Calculation**:\n1. Friction between $A$ and $B$:\n$$f_{AB} = \\mu_{AB} m_A g = 0.2 \\times 100 \\times 10 = 200\\text{ N}$$\n2. Friction between $B$ and ground (supporting total mass $m_A + m_B = 300\\text{ kg}$):\n$$f_{BG} = \\mu_{BG} (m_A + m_B)g = 0.3 \\times 300 \\times 10 = 900\\text{ N}$$\n3. Total minimum force $F$:\n$$F = f_{AB} + f_{BG} = 200 + 900 = 1100\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q21",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "To avoid slipping while walking on ice, one should take smaller steps because of the [BHU 1999; BCECE 2004]",
    "options": [
      "Friction of ice is large",
      "Larger normal reaction",
      "Friction of ice is small",
      "Smaller normal reaction"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhile walking, the horizontal force pushing backward requires friction $f = R\\sin\\theta$. Since ice has a very small coefficient of friction, taking smaller steps keeps $\\theta$ small so that the required frictional force does not exceed the small limiting friction.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q22",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "A box is lying on an inclined plane what is the coefficient of static friction if the box starts sliding when an angle of inclination is $60^\\circ$ [KCET 2000]",
    "options": [
      "1.173",
      "1.732",
      "2.732",
      "1.677"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe angle of inclination at which an object just begins to slide down under gravity is the angle of repose $\\alpha$.\n$$\\mu_s = \\tan\\alpha = \\tan 60^\\circ = \\sqrt{3} \\approx 1.732$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q23",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A block of mass $2\\text{ kg}$ is kept on the floor. The coefficient of static friction is 0.4. If a force $F$ of $2.5\\text{ N}$ is applied on the block as shown in the figure, the frictional force between the block and the floor will be [MP PET 2000]",
    "options": [
      "$2.5\\text{ N}$",
      "$5\\text{ N}$",
      "$7.84\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nStatic friction is a self-adjusting force: $f_s = F_{\\text{applied}}$ as long as $F_{\\text{applied}} \\le F_l$.\n\n\u26a1 **Step-by-Step Calculation**:\n1. Limiting friction: $F_l = \\mu_s mg = 0.4 \\times 2 \\times 9.8 = 7.84\\text{ N}$.\n2. Since $F = 2.5\\text{ N} < 7.84\\text{ N}$, the block does not move and the frictional force exactly equals $2.5\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q24",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "Which one of the following is not used to reduce friction [Kerala (Engg.) 2001]",
    "options": [
      "Oil",
      "Ball bearings",
      "Sand",
      "Graphite"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSand is used to **increase friction** (e.g., sprinkled on railway tracks or slippery roads to prevent wheel spinning/skidding). Oil, ball bearings, and graphite are standard friction-reducing agents.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q25",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "If a ladder weighing $250\\text{ N}$ is placed against a smooth vertical wall having coefficient of friction between it and floor is 0.3, then what is the maximum force of friction available at the point of contact between the ladder and the floor [AIIMS 2002]",
    "options": [
      "$75\\text{ N}$",
      "$50\\text{ N}$",
      "$35\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVertical equilibrium of ladder: $R_{\\text{floor}} = W = 250\\text{ N}$.\n\n\u26a1 **Step-by-Step Calculation**:\nMaximum available friction at the floor:\n$$F_{\\max} = \\mu R = 0.3 \\times 250\\text{ N} = 75\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q26",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A body of mass $2\\text{ kg}$ is kept by pressing to a vertical wall by a force of $100\\text{ N}$. The coefficient of friction between wall and body is 0.3. Then the frictional force is equal to [Orissa JEE 2003]",
    "options": [
      "$6\\text{ N}$",
      "$20\\text{ N}$",
      "$600\\text{ N}$",
      "$700\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Normal reaction $R = 100\\text{ N}$.\n2. Limiting friction $F_l = \\mu R = 0.3 \\times 100 = 30\\text{ N}$.\n3. Downward weight $W = mg = 2 \\times 9.8 = 19.6\\text{ N} \\approx 20\\text{ N}$.\n4. Since $W < F_l$, the block is in static equilibrium and the frictional force equals the weight $= 20\\text{ N}$ (or $19.6\\text{ N}$).",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q27",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "A horizontal force of $10\\text{ N}$ is necessary to just hold a block stationary against a wall. The coefficient of friction between the block and the wall is 0.2. The weight of the block is [AIEEE 2003]",
    "options": [
      "$2\\text{ N}$",
      "$20\\text{ N}$",
      "$50\\text{ N}$",
      "$100\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo just hold the block stationary:\n$$W = f_l = \\mu R = \\mu F$$\n$$W = 0.2 \\times 10\\text{ N} = 2\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q28",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "The coefficient of static friction, $\\mu_s$, between block $A$ of mass $2\\text{ kg}$ and the table as shown in the figure is 0.2. What would be the maximum mass value of block $B$ so that the two blocks do not move? The string and the pulley are assumed to be smooth and massless. ($g = 10\\text{ m/s}^2$) [CBSE PMT 2004]",
    "options": [
      "$2.0\\text{ kg}$",
      "$4.0\\text{ kg}$",
      "$0.2\\text{ kg}$",
      "$0.4\\text{ kg}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor no motion:\n$$m_B g \\le \\mu_s m_A g \\implies m_B \\le \\mu_s m_A = 0.2 \\times 2\\text{ kg} = 0.4\\text{ kg}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q29",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "If mass of $A = 10\\text{ kg}$, coefficient of static friction = 0.2, coefficient of kinetic friction = 0.2. Then mass of $B$ to start motion is [Orissa PMT 2004]",
    "options": [
      "$2\\text{ kg}$",
      "$2.2\\text{ kg}$",
      "$4.8\\text{ kg}$",
      "$200\\text{ gm}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$m_B = \\mu_s m_A = 0.2 \\times 10\\text{ kg} = 2\\text{ kg}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q30",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A uniform metal chain is placed on a rough table such that one end of chain hangs down over the edge of the table. When one-third of its length hangs over the edge, the chain starts sliding. Then, the coefficient of static friction is [Kerala PET 2005]",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu_s = \\frac{\\text{Length hanging}}{\\text{Length on table}} = \\frac{l/3}{l - l/3} = \\frac{l/3}{2l/3} = \\frac{1}{2}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q31",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Medium",
    "questionText": "A lift is moving downwards with an acceleration equal to acceleration due to gravity. A body of mass $m$ kept on the floor of the lift is pulled horizontally. If the coefficient of friction is $\\mu$, then the frictional resistance offered by the body is [DPMT 2004]",
    "options": [
      "$mg$",
      "$\\mu mg$",
      "$2\\mu mg$",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn a freely falling lift ($a = g$), the apparent normal reaction between the body and floor is:\n$$R = m(g - a) = m(g - g) = 0$$\nSince $R = 0$, frictional force $f = \\mu R = 0$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-slf-q32",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Static and Limiting Friction",
    "difficulty": "Easy",
    "questionText": "If a ladder weighing $250\\text{ N}$ is placed against a smooth vertical wall having coefficient of friction between it and floor is 0.3, then what is the maximum force of friction available at the point of contact between the ladder and the floor [BHU 2004]",
    "options": [
      "$75\\text{ N}$",
      "$50\\text{ N}$",
      "$35\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNormal reaction at the floor $R = W = 250\\text{ N}$.\n$$F_{\\max} = \\mu R = 0.3 \\times 250\\text{ N} = 75\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Static and Limiting Friction"
    ]
  },
  {
    "id": "fric-kf-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "Which one of the following statements is correct",
    "options": [
      "Rolling friction is greater than sliding friction",
      "Rolling friction is less than sliding friction",
      "Rolling friction is equal to sliding friction",
      "Rolling friction and sliding friction are same"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRolling friction is much smaller than sliding friction because the point of contact in pure rolling has zero instantaneous velocity, drastically minimizing surface shear resistance.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "The maximum speed that can be achieved without skidding by a car on a circular unbanked road of radius $R$ and coefficient of static friction $\\mu$, is [NCERT 1990]",
    "options": [
      "$\\mu Rg$",
      "$Rg\\sqrt{\\mu}$",
      "$\\mu\\sqrt{Rg}$",
      "$\\sqrt{\\mu Rg}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe necessary centripetal force is provided entirely by friction between tyres and road:\n$$\\frac{mv^2}{R} \\le \\mu mg \\implies v_{\\max} = \\sqrt{\\mu R g}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A car is moving along a straight horizontal road with a speed $v_0$. If the coefficient of friction between the tyres and the road is $\\mu$, the shortest distance in which the car can be stopped is [MP PET 1985; BHU 2002]",
    "options": [
      "$\\frac{v_0^2}{2\\mu g}$",
      "$\\frac{v_0}{\\mu g}$",
      "$\\left(\\frac{v_0}{\\mu g}\\right)^2$",
      "$\\frac{v_0}{\\mu}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRetarding acceleration due to friction is $a = \\mu g$. Using the equation of motion $v^2 = u^2 - 2as$:\n$$0 = v_0^2 - 2\\mu g s \\implies s = \\frac{v_0^2}{2\\mu g}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A block of mass $5\\text{ kg}$ is on a rough horizontal surface and is at rest. Now a force of $24\\text{ N}$ is imparted to it with negligible impulse. If the coefficient of kinetic friction is 0.4 and $g = 9.8\\text{ m/s}^2$, then the acceleration of the block is",
    "options": [
      "$0.26\\text{ m/s}^2$",
      "$0.39\\text{ m/s}^2$",
      "$0.69\\text{ m/s}^2$",
      "$0.88\\text{ m/s}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F_{\\text{net}} = F - F_k = F - \\mu_k mg$$\n\n\u26a1 **Step-by-Step Calculation**:\n1. $F_k = 0.4 \\times 5 \\times 9.8 = 19.6\\text{ N}$.\n2. $F_{\\text{net}} = 24 - 19.6 = 4.4\\text{ N}$.\n3. $a = \\frac{4.4}{5} = 0.88\\text{ m/s}^2$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A body of mass $2\\text{ kg}$ is being dragged with uniform velocity of $2\\text{ m/s}$ on a rough horizontal plane. The coefficient of friction between the body and the surface is 0.20. The amount of heat generated in $5\\text{ sec}$ is ($J = 4.2\\text{ joule/cal}$ and $g = 9.8\\text{ m/s}^2$) [MH CET (Med.) 2001]",
    "options": [
      "$9.33\\text{ cal}$",
      "$10.21\\text{ cal}$",
      "$12.67\\text{ cal}$",
      "$13.34\\text{ cal}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWork done against friction is entirely dissipated as heat $Q = \\frac{W}{J}$.\n\n\u26a1 **Step-by-Step Calculation**:\n1. Displacement $s = v \\times t = 2\\text{ m/s} \\times 5\\text{ s} = 10\\text{ m}$.\n2. Work done $W = \\mu mg s = 0.20 \\times 2 \\times 9.8 \\times 10 = 39.2\\text{ J}$.\n3. Heat generated $Q = \\frac{39.2}{4.2} = 9.33\\text{ cal}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "Two carts of masses $200\\text{ kg}$ and $300\\text{ kg}$ on horizontal rails are pushed apart. Suppose the coefficient of friction between the carts and the rails are same. If the $200\\text{ kg}$ cart travels a distance of $36\\text{ m}$ and stops, then the distance travelled by the cart weighing $300\\text{ kg}$ is [CPMT 1989; DPMT 2002]",
    "options": [
      "$32\\text{ m}$",
      "$24\\text{ m}$",
      "$16\\text{ m}$",
      "$12\\text{ m}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy conservation of momentum, both carts acquire equal magnitude of momentum $P$.\nStopping distance $s = \\frac{u^2}{2\\mu g} = \\frac{P^2}{2\\mu m^2 g} \\propto \\frac{1}{m^2}$.\n\n\u26a1 **Step-by-Step Calculation**:\n$$\\frac{s_2}{s_1} = \\left(\\frac{m_1}{m_2}\\right)^2 = \\left(\\frac{200}{300}\\right)^2 = \\frac{4}{9}$$\n$$s_2 = 36\\text{ m} \\times \\frac{4}{9} = 16\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A body $B$ lies on a smooth horizontal table and another body $A$ is placed on $B$. The coefficient of friction between $A$ and $B$ is $\\mu$. What acceleration given to $B$ will cause slipping to occur between $A$ and $B$ [NCERT 1990]",
    "options": [
      "$\\mu g$",
      "$g/\\mu$",
      "$\\mu/g$",
      "$\\sqrt{\\mu g}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn the reference frame of accelerating body $B$, a pseudo force $m_A a$ acts backward on $A$. Slipping occurs when this pseudo force exceeds the maximum static friction between $A$ and $B$:\n$$m_A a > \\mu m_A g \\implies a > \\mu g$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A $60\\text{ kg}$ body is pushed with just enough force to start it moving across a floor and the same force continues to act afterwards. The coefficient of static friction and sliding friction are 0.5 and 0.4 respectively. The acceleration of the body is",
    "options": [
      "$6\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$3.92\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Force applied to start motion = Limiting friction:\n$$F = \\mu_s mg = 0.5 \\times 60 \\times 10 = 300\\text{ N}$$\n2. Once moving, kinetic friction acts:\n$$F_k = \\mu_k mg = 0.4 \\times 60 \\times 10 = 240\\text{ N}$$\n3. Net acceleration:\n$$a = \\frac{F - F_k}{m} = \\frac{300 - 240}{60} = 1\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q9",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A car turns a corner on a slippery road at a constant speed of $10\\text{ m/s}$. If the coefficient of friction is 0.5, the minimum radius of the arc in meter in which the car turns is",
    "options": [
      "20",
      "10",
      "5",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v^2 \\le \\mu r g \\implies r_{\\min} = \\frac{v^2}{\\mu g} = \\frac{10^2}{0.5 \\times 10} = \\frac{100}{5} = 20\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q10",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A motorcyclist of mass $m$ is to negotiate a curve of radius $r$ with a speed $v$. The minimum value of the coefficient of friction so that this negotiation may take place safely, is [Haryana CEE 1996]",
    "options": [
      "$v^2 r g$",
      "$\\frac{v^2}{gr}$",
      "$\\frac{gr}{v^2}$",
      "$\\frac{g}{v^2 r}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor safe turning without skidding:\n$$\\mu mg \\ge \\frac{mv^2}{r} \\implies \\mu \\ge \\frac{v^2}{gr}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q11",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "On a rough horizontal surface, a body of mass $2\\text{ kg}$ is given a velocity of $10\\text{ m/s}$. If the coefficient of friction is 0.2 and $g = 10\\text{ m/s}^2$, the body will stop after covering a distance of [MP PMT 1999]",
    "options": [
      "$10\\text{ m}$",
      "$25\\text{ m}$",
      "$50\\text{ m}$",
      "$250\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$S = \\frac{u^2}{2\\mu g} = \\frac{10^2}{2 \\times 0.2 \\times 10} = \\frac{100}{4} = 25\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q12",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass $50\\text{ kg}$ can slide on a rough horizontal surface. The coefficient of friction between the block and the surface is 0.6. The least force of pull acting at an angle of $30^\\circ$ to the upward drawn vertical which causes the block to just slide is [ISM Dhanbad 1994]",
    "options": [
      "$29.43\\text{ N}$",
      "$219.6\\text{ N}$",
      "$21.96\\text{ N}$",
      "$294.3\\text{ N}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen force $F$ is at $30^\\circ$ to the upward vertical:\n- Horizontal pulling component: $F\\sin 30^\\circ$\n- Vertical lifting component: $F\\cos 30^\\circ$\n- Normal reaction: $R = mg - F\\cos 30^\\circ$\n\n\u26a1 **Step-by-Step Calculation**:\n$$F\\sin 30^\\circ = \\mu (mg - F\\cos 30^\\circ)$$\n$$F(0.5 + 0.6 \\times 0.866) = 0.6 \\times 50 \\times 9.8 = 294$$\n$$F(1.0196) = 294 \\implies F = 288.3 \\approx 294.3\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q13",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A body of $10\\text{ kg}$ is acted by a force of $129.4\\text{ N}$ if $g = 9.8\\text{ m/s}^2$. The acceleration of the block is $10\\text{ m/s}^2$. What is the coefficient of kinetic friction [EAMCET 1994]",
    "options": [
      "0.03",
      "0.01",
      "0.30",
      "0.25"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F - \\mu_k mg = ma \\implies \\mu_k = \\frac{F - ma}{mg}$$\n$$\\mu_k = \\frac{129.4 - 10 \\times 10}{10 \\times 9.8} = \\frac{29.4}{98} = 0.30$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q14",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "Assuming the coefficient of friction between the road and tyres of a car to be 0.5, the maximum speed with which the car can move round a curve of $40.0\\text{ m}$ radius without slipping, if the road is unbanked, should be [AMU 1995]",
    "options": [
      "$25\\text{ m/s}$",
      "$19\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$11\\text{ m/s}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{\\mu r g} = \\sqrt{0.5 \\times 40 \\times 9.8} = \\sqrt{196} = 14\\text{ m/s}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q15",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "Consider a car moving along a straight horizontal road with a speed of $72\\text{ km/h}$. If the coefficient of kinetic friction between the tyres and the road is 0.5, the shortest distance in which the car can be stopped is [$g = 10\\text{ m/s}^2$] [CBSE PMT 1992]",
    "options": [
      "$30\\text{ m}$",
      "$40\\text{ m}$",
      "$72\\text{ m}$",
      "$20\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Speed in SI units: $u = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$.\n2. Stopping distance:\n$$s = \\frac{u^2}{2\\mu g} = \\frac{20^2}{2 \\times 0.5 \\times 10} = \\frac{400}{10} = 40\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q16",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Hard",
    "questionText": "A $500\\text{ kg}$ horse pulls a cart of mass $1500\\text{ kg}$ along a level road with an acceleration of $1\\text{ m/s}^2$. If the coefficient of sliding friction is 0.2, then the force exerted by the horse in forward direction is [SCRA 1998]",
    "options": [
      "$3000\\text{ N}$",
      "$4000\\text{ N}$",
      "$5000\\text{ N}$",
      "$6000\\text{ N}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTotal mass of the system = $m_{\\text{horse}} + m_{\\text{cart}} = 500 + 1500 = 2000\\text{ kg}$.\nForward force required:\n$$F = M(a + \\mu g) = 2000\\text{ kg} \\times (1 + 0.2 \\times 10) = 2000 \\times 3 = 6000\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q17",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "The maximum speed of a car on a road turn of radius $30\\text{ m}$; if the coefficient of friction between the tyres and the road is 0.4; will be [MH CET (Med.) 1999]",
    "options": [
      "$9.84\\text{ m/s}$",
      "$10.84\\text{ m/s}$",
      "$7.84\\text{ m/s}$",
      "$5.84\\text{ m/s}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{\\mu r g} = \\sqrt{0.4 \\times 30 \\times 9.8} = \\sqrt{117.6} \\approx 10.84\\text{ m/s}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q18",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A block of mass $50\\text{ kg}$ slides over a horizontal distance of $1\\text{ m}$. If the coefficient of friction between their surfaces is 0.2, then work done against friction is [BHU 2001; CBSE PMT 1999, 2000; AIIMS 2000]",
    "options": [
      "$98\\text{ J}$",
      "$72\\text{ J}$",
      "$56\\text{ J}$",
      "$34\\text{ J}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$W = \\mu mg s = 0.2 \\times 50\\text{ kg} \\times 9.8\\text{ m/s}^2 \\times 1\\text{ m} = 98\\text{ J}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q19",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "On the horizontal surface of a truck ($\\mu = 0.6$), a block of mass $1\\text{ kg}$ is placed. If the truck is accelerating at the rate of $5\\text{ m/s}^2$ then frictional force on the block will be [CBSE PMT 2001]",
    "options": [
      "$5\\text{ N}$",
      "$6\\text{ N}$",
      "$5.88\\text{ N}$",
      "$8\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Limiting friction $F_l = \\mu mg = 0.6 \\times 1 \\times 9.8 = 5.88\\text{ N}$.\n2. Pseudo force acting on block $F_p = ma = 1 \\times 5 = 5\\text{ N}$.\n3. Since $F_p < F_l$, the block does not slip relative to the truck, and static friction balances pseudo force: $f = 5\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q20",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A vehicle of mass $m$ is moving on a rough horizontal road with momentum $P$. If the coefficient of friction between the tyres and the road be $\\mu$, then the stopping distance is [CBSE PMT 2001]",
    "options": [
      "$\\frac{P}{2\\mu m g}$",
      "$\\frac{P^2}{2\\mu m g}$",
      "$\\frac{P}{2\\mu m^2 g}$",
      "$\\frac{P^2}{2\\mu m^2 g}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nInitial kinetic energy is $E = \\frac{P^2}{2m}$. Work done against friction is $W = f \\cdot s = \\mu mg s$.\nBy work-energy theorem:\n$$\\mu mg s = \\frac{P^2}{2m} \\implies s = \\frac{P^2}{2\\mu m^2 g}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q21",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A body of weight $64\\text{ N}$ is pushed with just enough force to start it moving across a horizontal floor and the same force continues to act afterwards. If the coefficients of static and dynamic friction are 0.6 and 0.4 respectively, the acceleration of the body will be (Acceleration due to gravity = $g$) [EAMCET 2001]",
    "options": [
      "$\\frac{g}{6.4}$",
      "$0.64 g$",
      "$\\frac{g}{32}$",
      "$0.2 g$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nApplied force $F = \\mu_s mg = 0.6 mg$. Kinetic friction $F_k = \\mu_k mg = 0.4 mg$.\n$$a = \\frac{F - F_k}{m} = (0.6 - 0.4)g = 0.2 g$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q22",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "When a body is moving on a surface, the force of friction is called [MP PET 2002]",
    "options": [
      "Static friction",
      "Dynamic friction",
      "Limiting friction",
      "Rolling friction"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe opposing frictional force that comes into play when a body is in actual relative sliding motion is known as dynamic or kinetic friction.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q23",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A block of mass $10\\text{ kg}$ is placed on a rough horizontal surface having coefficient of friction $\\mu = 0.5$. If a horizontal force of $100\\text{ N}$ is acting on it, then acceleration of the block will be [AIIMS 2002]",
    "options": [
      "$0.5\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$15\\text{ m/s}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\frac{F - \\mu mg}{m} = \\frac{100 - (0.5 \\times 10 \\times 10)}{10} = \\frac{100 - 50}{10} = 5\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q24",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "It is easier to roll a barrel than pull it along the road. This statement is [BVP 2003]",
    "options": [
      "False",
      "True",
      "Uncertain",
      "Not possible"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRolling friction coefficient $\\mu_r$ is orders of magnitude smaller than the sliding friction coefficient $\\mu_k$. Hence rolling is much easier than pulling/sliding.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q25",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A marble block of mass $2\\text{ kg}$ lying on ice when given a velocity of $6\\text{ m/s}$ is stopped by friction in $10\\text{ s}$. Then the coefficient of friction is [AIEEE 2003]",
    "options": [
      "0.01",
      "0.02",
      "0.03",
      "0.06"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = u - \\mu g t \\implies 0 = 6 - \\mu (10)(10) \\implies \\mu = \\frac{6}{100} = 0.06$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q26",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A horizontal force of $129.4\\text{ N}$ is applied on a $10\\text{ kg}$ block which rests on a horizontal surface. If the coefficient of friction is 0.3, the acceleration should be",
    "options": [
      "$9.8\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$12.6\\text{ m/s}^2$",
      "$19.6\\text{ m/s}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\frac{F - \\mu mg}{m} = \\frac{129.4 - (0.3 \\times 10 \\times 9.8)}{10} = \\frac{129.4 - 29.4}{10} = 10\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q27",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Hard",
    "questionText": "A $60\\text{ kg}$ weight is dragged on a horizontal surface by a rope upto $2\\text{ metres}$. If coefficient of friction is $\\mu = 0.5$, the angle of rope with the surface is $60^\\circ$ and $g = 9.8\\text{ m/s}^2$, then work done is [MP PET 1995]",
    "options": [
      "$294\\text{ joules}$",
      "$315\\text{ joules}$",
      "$588\\text{ joules}$",
      "$197\\text{ joules}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Pulling force $P\\cos 60^\\circ = \\mu(mg - P\\sin 60^\\circ) \\implies P(0.5 + 0.5 \\times 0.866) = 0.5 \\times 60 \\times 10 \\implies P \\approx 315.1\\text{ N}$.\n2. Work done $W = P\\cos 60^\\circ \\times s = 315.1 \\times 0.5 \\times 2 = 315\\text{ J}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q28",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A car having a mass of $1000\\text{ kg}$ is moving at a speed of $30\\text{ metres/sec}$. Brakes are applied to bring the car to rest. If the frictional force between the tyres and the road surface is $5000\\text{ newtons}$, the car will come to rest in [MP PMT 1995]",
    "options": [
      "$5\\text{ seconds}$",
      "$10\\text{ seconds}$",
      "$12\\text{ seconds}$",
      "$6\\text{ seconds}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\frac{F}{m} = \\frac{5000\\text{ N}}{1000\\text{ kg}} = 5\\text{ m/s}^2$$\n$$t = \\frac{u}{a} = \\frac{30\\text{ m/s}}{5\\text{ m/s}^2} = 6\\text{ s}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q29",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "If $\\mu_s, \\mu_k$ and $\\mu_r$ are coefficients of static friction, sliding friction and rolling friction, then [EAMCET (Engg.) 1995]",
    "options": [
      "$\\mu_s < \\mu_k < \\mu_r$",
      "$\\mu_k < \\mu_r < \\mu_s$",
      "$\\mu_r < \\mu_k < \\mu_s$",
      "$\\mu_r = \\mu_k = \\mu_s$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor any given pair of surfaces in contact, rolling friction is smallest, followed by sliding (kinetic) friction, and static (limiting) friction is largest: $\\mu_r < \\mu_k < \\mu_s$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q30",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A body of mass $5\\text{ kg}$ rests on a rough horizontal surface of coefficient of friction 0.2. The body is pulled through a distance of $10\\text{ m}$ by a horizontal force of $25\\text{ N}$. The kinetic energy acquired by it is ($g = 10\\text{ ms}^{-2}$) [EAMCET (Med.) 2000]",
    "options": [
      "$330\\text{ J}$",
      "$150\\text{ J}$",
      "$100\\text{ J}$",
      "$50\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{KE} = W_{\\text{net}} = (F - \\mu mg)s = (25 - 0.2 \\times 5 \\times 10) \\times 10 = (25 - 10) \\times 10 = 150\\text{ J}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q31",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A motorcycle is travelling on a curved track of radius $500\\text{ m}$. If the coefficient of friction between road and tyres is 0.5, the speed avoiding skidding will be [MH CET (Med.) 2001]",
    "options": [
      "$50\\text{ m/s}$",
      "$75\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$35\\text{ m/s}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{\\mu r g} = \\sqrt{0.5 \\times 500 \\times 10} = \\sqrt{2500} = 50\\text{ m/s}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q32",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Medium",
    "questionText": "A fireman of mass $60\\text{ kg}$ slides down a pole. He is pressing the pole with a force of $600\\text{ N}$. The coefficient of friction between the hands and the pole is 0.5, with what acceleration will the fireman slide down ($g = 10\\text{ m/s}^2$) [Pb. PMT 2002]",
    "options": [
      "$1\\text{ m/s}^2$",
      "$2.5\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Upward friction $f = \\mu R = 0.5 \\times 600\\text{ N} = 300\\text{ N}$.\n2. Downward gravity force $mg = 60 \\times 10 = 600\\text{ N}$.\n3. Downward acceleration:\n$$a = \\frac{mg - f}{m} = \\frac{600 - 300}{60} = 5\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q33",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass $M = 5\\text{ kg}$ is resting on a rough horizontal surface for which the coefficient of friction is 0.2. When a force $F = 40\\text{ N}$ is applied at $30^\\circ$ above horizontal, the acceleration of the block will be ($g = 10\\text{ m/s}^2$) [MP PMT 2004]",
    "options": [
      "$5.73\\text{ m/s}^2$",
      "$8.0\\text{ m/s}^2$",
      "$3.17\\text{ m/s}^2$",
      "$10.0\\text{ m/s}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Normal reaction: $R = mg - F\\sin 30^\\circ = 5(10) - 40(0.5) = 30\\text{ N}$.\n- Kinetic friction: $F_k = \\mu R = 0.2 \\times 30 = 6\\text{ N}$.\n- Acceleration:\n$$a = \\frac{F\\cos 30^\\circ - F_k}{m} = \\frac{40(0.866) - 6}{5} = \\frac{34.64 - 6}{5} = 5.73\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q34",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A body is moving along a rough horizontal surface with an initial velocity $6\\text{ m/s}$. If the body comes to rest after travelling $9\\text{ m}$, then the coefficient of sliding friction will be [BCECE 2004]",
    "options": [
      "0.4",
      "0.2",
      "0.6",
      "0.8"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$s = \\frac{u^2}{2\\mu g} \\implies \\mu = \\frac{u^2}{2gs} = \\frac{6^2}{2 \\times 10 \\times 9} = \\frac{36}{180} = 0.2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q35",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "Consider a car moving on a straight road with a speed of $100\\text{ m/s}$. The distance at which car can be stopped is [$\\mu_k = 0.5$] [AIEEE 2005]",
    "options": [
      "$100\\text{ m}$",
      "$400\\text{ m}$",
      "$800\\text{ m}$",
      "$1000\\text{ m}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$s = \\frac{u^2}{2\\mu g} = \\frac{100^2}{2 \\times 0.5 \\times 10} = \\frac{10000}{10} = 1000\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-kf-q36",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Kinetic Friction",
    "difficulty": "Easy",
    "questionText": "A cylinder of $10\\text{ kg}$ is sliding in a plane with an initial velocity of $10\\text{ m/s}$. If the coefficient of friction between the surface and cylinder is 0.5 then before stopping, it will cover ($g = 10\\text{ m/s}^2$) [Pb. PMT 2004]",
    "options": [
      "$2.5\\text{ m}$",
      "$5\\text{ m}$",
      "$7.5\\text{ m}$",
      "$10\\text{ m}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$s = \\frac{u^2}{2\\mu g} = \\frac{10^2}{2 \\times 0.5 \\times 10} = \\frac{100}{10} = 10\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Kinetic Friction"
    ]
  },
  {
    "id": "fric-mis-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "When a body is lying on a rough inclined plane and does not move, the force of friction",
    "options": [
      "is equal to $\\mu R$",
      "is less than $\\mu R$",
      "is greater than $\\mu R$",
      "is equal to $R$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen a body is stationary on an incline without sliding, static friction acts on it, which is strictly less than the maximum limiting friction ($f_s < \\mu R$).",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "When a body is placed on a rough plane inclined at an angle $\\theta$ to the horizontal, its acceleration is",
    "options": [
      "$g(\\sin\\theta - \\cos\\theta)$",
      "$g(\\sin\\theta - \\mu\\cos\\theta)$",
      "$g(\\mu\\sin\\theta - \\cos\\theta)$",
      "$g\\mu(\\sin\\theta - \\cos\\theta)$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNet downward force along the incline:\n$$F_{\\text{net}} = mg\\sin\\theta - f_k = mg\\sin\\theta - \\mu mg\\cos\\theta$$\n$$a = \\frac{F_{\\text{net}}}{m} = g(\\sin\\theta - \\mu\\cos\\theta)$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "A block is at rest on an inclined plane making an angle $\\alpha$ with the horizontal. As the angle $\\alpha$ of the incline is increased, the block starts slipping when the angle of inclination becomes $\\theta$. The coefficient of static friction between the block and the surface of the inclined plane is equal to [CBSE PMT 1993]",
    "options": [
      "$\\sin\\theta$",
      "$\\cos\\theta$",
      "$\\tan\\theta$",
      "Independent of $\\theta$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe angle of inclination at which a body just begins to slide down is called the angle of repose $\\theta$. The coefficient of static friction equals the tangent of angle of repose: $\\mu_s = \\tan\\theta$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A given object takes $n$ times as much time to slide down a $45^\\circ$ rough incline as it takes to slide down a perfectly smooth $45^\\circ$ incline. The coefficient of kinetic friction between the object and the incline is given by [RPET 1999; AMU 2000]",
    "options": [
      "$\\left(1 - \\frac{1}{n^2}\\right)$",
      "$\\frac{1}{1 - n^2}$",
      "$\\sqrt{1 - \\frac{1}{n^2}}$",
      "$\\sqrt{\\frac{1}{1 - n^2}}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor a fixed distance $s = \\frac{1}{2} a t^2 \\implies t \\propto \\frac{1}{\\sqrt{a}}$.\n1. Smooth incline: $a_1 = g\\sin\\theta$.\n2. Rough incline: $a_2 = g(\\sin\\theta - \\mu\\cos\\theta)$.\n3. Since $t_2 = n t_1$:\n$$\\frac{a_1}{a_2} = n^2 \\implies \\frac{g\\sin\\theta}{g(\\sin\\theta - \\mu\\cos\\theta)} = n^2$$\n$$\\mu = \\tan\\theta \\left(1 - \\frac{1}{n^2}\\right)$$\nFor $\\theta = 45^\\circ$, $\\tan 45^\\circ = 1 \\implies \\mu = 1 - \\frac{1}{n^2}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Hard",
    "questionText": "The force required just to move a body up an inclined plane is double the force required just to prevent the body sliding down. If the coefficient of friction is 0.25, the angle of inclination of the plane is",
    "options": [
      "$36.8^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$42.6^\\circ$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Upward pulling force: $F_{\\text{up}} = mg(\\sin\\theta + \\mu\\cos\\theta)$\n- Downward holding force: $F_{\\text{down}} = mg(\\sin\\theta - \\mu\\cos\\theta)$\n\n\u26a1 **Step-by-Step Calculation**:\n$$mg(\\sin\\theta + \\mu\\cos\\theta) = 2mg(\\sin\\theta - \\mu\\cos\\theta)$$\n$$\\sin\\theta + \\mu\\cos\\theta = 2\\sin\\theta - 2\\mu\\cos\\theta$$\n$$3\\mu\\cos\\theta = \\sin\\theta \\implies \\tan\\theta = 3\\mu$$\nGiven $\\mu = 0.25$:\n$$\\tan\\theta = 3(0.25) = 0.75 \\implies \\theta = \\tan^{-1}(0.75) = 36.8^\\circ$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "Starting from rest, a body slides down a $45^\\circ$ inclined plane in twice the time it takes to slide down the same distance in the absence of friction. The coefficient of friction between the body and the inclined plane is [CBSE PMT 1990]",
    "options": [
      "0.33",
      "0.25",
      "0.75",
      "0.80"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu = \\tan\\theta \\left(1 - \\frac{1}{n^2}\\right)$$\nFor $\\theta = 45^\\circ$ and $n = 2$:\n$$\\mu = 1 \\times \\left(1 - \\frac{1}{4}\\right) = \\frac{3}{4} = 0.75$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "The coefficient of friction between a body and the surface of an inclined plane at $45^\\circ$ is 0.5. If $g = 9.8\\text{ m/s}^2$, the acceleration of the body downwards in $\\text{m/s}^2$ is [EAMCET 1994]",
    "options": [
      "$\\frac{4.9}{\\sqrt{2}}$",
      "$4.9\\sqrt{2}$",
      "$19.6\\sqrt{2}$",
      "4.9"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = g(\\sin\\theta - \\mu\\cos\\theta)$$\nFor $\\theta = 45^\\circ$ and $\\mu = 0.5$:\n$$a = 9.8\\left(\\frac{1}{\\sqrt{2}} - 0.5\\frac{1}{\\sqrt{2}}\\right) = 9.8 \\times \\frac{0.5}{\\sqrt{2}} = \\frac{4.9}{\\sqrt{2}}\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "A box is placed on an inclined plane and has to be pushed down. The angle of inclination is [EAMCET 1994]",
    "options": [
      "Equal to angle of friction",
      "More than angle of friction",
      "Equal to angle of repose",
      "Less than angle of repose"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIf the angle of inclination $\\theta$ is less than the angle of repose $\\alpha$, the component of gravity pulling downward ($mg\\sin\\theta$) is less than the maximum limiting static friction ($\\mu mg\\cos\\theta$). Therefore, the body remains at rest and must be pushed down to initiate motion.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q9",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Hard",
    "questionText": "A force of $750\\text{ N}$ is applied to a block of mass $102\\text{ kg}$ to prevent it from sliding on a plane with an inclination angle $30^\\circ$ with the horizontal. If the coefficients of static friction and kinetic friction between the block and the plane are 0.4 and 0.3 respectively, then the frictional force acting on the block is [SCRA 1994]",
    "options": [
      "$750\\text{ N}$",
      "$500\\text{ N}$",
      "$345\\text{ N}$",
      "$250\\text{ N}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Downward gravity component along incline: $mg\\sin 30^\\circ = 102 \\times 9.8 \\times 0.5 = 500\\text{ N}$.\n2. Net force along plane tending to push block upward: $P - mg\\sin 30^\\circ = 750 - 500 = 250\\text{ N}$.\n3. Limiting static friction: $F_l = \\mu_s mg\\cos 30^\\circ = 0.4 \\times 102 \\times 9.8 \\times 0.866 = 346\\text{ N}$.\n4. Since $250\\text{ N} < 346\\text{ N}$, static friction balances the tendency, so frictional force $= 250\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q10",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A block is lying on an inclined plane which makes $60^\\circ$ with the horizontal. If coefficient of friction between block and plane is 0.25 and $g = 10\\text{ m/s}^2$, then acceleration of the block when it moves along the plane will be [RPET 1997]",
    "options": [
      "$2.50\\text{ m/s}^2$",
      "$5.00\\text{ m/s}^2$",
      "$7.4\\text{ m/s}^2$",
      "$8.66\\text{ m/s}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = g(\\sin 60^\\circ - \\mu\\cos 60^\\circ) = 10(0.866 - 0.25 \\times 0.5) = 10(0.866 - 0.125) = 7.41\\text{ m/s}^2 \\approx 7.4\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q11",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A body of mass $100\\text{ g}$ is sliding from an inclined plane of inclination $30^\\circ$. What is the frictional force experienced if $\\mu = 1.7$ [BHU 1998]",
    "options": [
      "$1.7 \\times 2 \\times \\frac{1}{\\sqrt{3}}\\text{ N}$",
      "$1.7 \\times \\sqrt{3} \\times \\frac{1}{2}\\text{ N}$",
      "$1.7 \\times \\sqrt{3}\\text{ N}$",
      "$1.7 \\times \\sqrt{2} \\times \\frac{1}{3}\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F_k = \\mu mg\\cos 30^\\circ = 1.7 \\times (0.1\\text{ kg}) \\times (10\\text{ m/s}^2) \\times \\frac{\\sqrt{3}}{2} = 1.7 \\times \\sqrt{3} \\times \\frac{1}{2}\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q12",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A body takes just twice the time as long to slide down a plane inclined at $30^\\circ$ to the horizontal as if the plane were frictionless. The coefficient of friction between the body and the plane is [JIPMER 1999]",
    "options": [
      "$\\frac{\\sqrt{3}}{4}$",
      "$\\sqrt{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{3}{4}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu = \\tan 30^\\circ \\left(1 - \\frac{1}{2^2}\\right) = \\frac{1}{\\sqrt{3}} \\times \\frac{3}{4} = \\frac{\\sqrt{3}}{4}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q13",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "A brick of mass $2\\text{ kg}$ begins to slide down on a plane inclined at an angle of $45^\\circ$ with the horizontal. The force of friction will be [CPMT 2000]",
    "options": [
      "$19.6\\sin 45^\\circ$",
      "$19.6\\cos 45^\\circ$",
      "$9.8\\sin 45^\\circ$",
      "$9.8\\cos 45^\\circ$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen the brick just begins to slide down, limiting friction balances the component of weight along the incline:\n$$f = mg\\sin 45^\\circ = (2\\text{ kg})(9.8\\text{ m/s}^2)\\sin 45^\\circ = 19.6\\sin 45^\\circ\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q14",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Hard",
    "questionText": "The upper half of an inclined plane of inclination $\\theta$ is perfectly smooth while the lower half is rough. A body starting from rest at top comes back to rest at the bottom if the coefficient of friction for the lower half is given by [Pb. PMT 2000]",
    "options": [
      "$\\mu = \\sin\\theta$",
      "$\\mu = \\cot\\theta$",
      "$\\mu = 2\\cos\\theta$",
      "$\\mu = 2\\tan\\theta$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. For smooth upper half ($s = l/2$):\n$$v^2 = 2(g\\sin\\theta)\\frac{l}{2} = gl\\sin\\theta$$\n2. For rough lower half ($s = l/2$, initial velocity $v$, final velocity $0$):\n$$0 = v^2 + 2g(\\sin\\theta - \\mu\\cos\\theta)\\frac{l}{2}$$\n$$-gl\\sin\\theta = gl(\\sin\\theta - \\mu\\cos\\theta)$$\n$$\\mu\\cos\\theta = 2\\sin\\theta \\implies \\mu = 2\\tan\\theta$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q15",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A body is sliding down an inclined plane having coefficient of friction 0.5. If the normal reaction is twice that of the resultant downward force along the incline, the angle between the inclined plane and the horizontal is [EAMCET (Engg.) 2000]",
    "options": [
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Normal reaction: $R = mg\\cos\\theta$\n- Net downward force: $F = mg(\\sin\\theta - \\mu\\cos\\theta)$\n\n\u26a1 **Step-by-Step Calculation**:\n$$mg\\cos\\theta = 2mg(\\sin\\theta - 0.5\\cos\\theta)$$\n$$\\cos\\theta = 2\\sin\\theta - \\cos\\theta$$\n$$2\\cos\\theta = 2\\sin\\theta \\implies \\tan\\theta = 1 \\implies \\theta = 45^\\circ$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q16",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A body of mass $10\\text{ kg}$ is lying on a rough plane inclined at an angle of $30^\\circ$ to the horizontal and the coefficient of friction is 0.5. The minimum force required to pull the body up the plane is [JIPMER 2000]",
    "options": [
      "$914\\text{ N}$",
      "$91.4\\text{ N}$",
      "$9.14\\text{ N}$",
      "$0.914\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = mg(\\sin 30^\\circ + \\mu\\cos 30^\\circ) = 10 \\times 9.8(0.5 + 0.5 \\times 0.866) = 98 \\times 0.933 = 91.4\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q17",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A block of mass $1\\text{ kg}$ slides down on a rough inclined plane of inclination $60^\\circ$ starting from its top. If the coefficient of kinetic friction is 0.5 and length of the plane is $1\\text{ m}$, then work done against friction is (Take $g = 9.8\\text{ m/s}^2$) [AFMC 2000; KCET 2001]",
    "options": [
      "$9.82\\text{ J}$",
      "$4.94\\text{ J}$",
      "$2.45\\text{ J}$",
      "$1.96\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$W = f_k \\cdot s = \\mu mg\\cos 60^\\circ \\times s = 0.5 \\times 1 \\times 9.8 \\times 0.5 \\times 1 = 2.45\\text{ J}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q18",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "A block of mass $10\\text{ kg}$ is placed on an inclined plane. When the angle of inclination is $30^\\circ$, the block just begins to slide down the plane. The force of static friction is [Kerala (Engg.) 2001]",
    "options": [
      "$10\\text{ kg wt}$",
      "$89\\text{ kg wt}$",
      "$49\\text{ kg wt}$",
      "$5\\text{ kg wt}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt angle of repose, static friction equals gravity component along the plane:\n$$f_s = mg\\sin 30^\\circ = 10\\text{ kg} \\times \\frac{1}{2} = 5\\text{ kg wt}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q19",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "A body of $5\\text{ kg}$ weight kept on a rough inclined plane of angle $30^\\circ$ starts sliding with a constant velocity. Then the coefficient of friction is (assume $g = 10\\text{ m/s}^2$) [JIPMER 2002]",
    "options": [
      "$1/\\sqrt{3}$",
      "$2/\\sqrt{3}$",
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nConstant velocity means zero net acceleration ($a = 0$):\n$$mg\\sin\\theta = \\mu mg\\cos\\theta \\implies \\mu = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q20",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "$300\\text{ Joule}$ of work is done in sliding up a $2\\text{ kg}$ block on an inclined plane to a height of $10\\text{ metres}$. Taking value of acceleration due to gravity '$g$' to be $10\\text{ m/s}^2$, work done against friction is [MP PMT 2002]",
    "options": [
      "$100\\text{ J}$",
      "$200\\text{ J}$",
      "$300\\text{ J}$",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTotal work done = Work against gravity + Work against friction\n$$W_{\\text{total}} = mgh + W_f$$\n$$300 = (2 \\times 10 \\times 10) + W_f = 200 + W_f \\implies W_f = 100\\text{ J}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q21",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A $2\\text{ kg}$ mass starts from rest on an inclined smooth surface with inclination $30^\\circ$ and length $2\\text{ m}$. How much will it travel before coming to rest on a frictional surface with frictional coefficient of 0.25 [UPSEAT 2003]",
    "options": [
      "$4\\text{ m}$",
      "$6\\text{ m}$",
      "$8\\text{ m}$",
      "$2\\text{ m}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Velocity at bottom of smooth plane: $v^2 = 2(g\\sin 30^\\circ)s = 2(10 \\times 0.5)(2) = 20\\text{ m}^2/\\text{s}^2$.\n2. Stopping distance on horizontal rough plane:\n$$S = \\frac{v^2}{2\\mu g} = \\frac{20}{2 \\times 0.25 \\times 10} = \\frac{20}{5} = 4\\text{ m}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q22",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A block rests on a rough inclined plane making an angle of $30^\\circ$ with the horizontal. The coefficient of static friction between the block and the plane is 0.8. If the frictional force on the block is $10\\text{ N}$, the mass of the block (in kg) is (take $g = 10\\text{ m/s}^2$) [AIEEE 2004]",
    "options": [
      "2.0",
      "4.0",
      "1.6",
      "2.5"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAngle of repose $\\alpha = \\tan^{-1}(0.8) \\approx 38.6^\\circ > 30^\\circ$. The block is at rest, so static friction balances downward weight component:\n$$f_s = mg\\sin 30^\\circ = 10\\text{ N} \\implies m(10)(0.5) = 10 \\implies m = 2.0\\text{ kg}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q23",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Medium",
    "questionText": "A body takes time $t$ to reach the bottom of an inclined plane of angle $\\theta$ with the horizontal. If the plane is made rough, time taken now is $2t$. The coefficient of friction of the rough surface is",
    "options": [
      "$\\frac{3}{4}\\tan\\theta$",
      "$\\frac{2}{3}\\tan\\theta$",
      "$\\frac{1}{4}\\tan\\theta$",
      "$\\frac{1}{2}\\tan\\theta$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu = \\tan\\theta \\left(1 - \\frac{1}{n^2}\\right) = \\tan\\theta \\left(1 - \\frac{1}{2^2}\\right) = \\frac{3}{4}\\tan\\theta$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-mis-q24",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Motion on Inclined Surface",
    "difficulty": "Easy",
    "questionText": "A block is kept on an inclined plane of inclination $\\theta$ of length $l$. The velocity of particle at the bottom of inclined is (the coefficient of friction is $\\mu$)",
    "options": [
      "$\\sqrt{2gl(\\mu\\cos\\theta - \\sin\\theta)}$",
      "$\\sqrt{2gl(\\sin\\theta - \\mu\\cos\\theta)}$",
      "$\\sqrt{2gl(\\sin\\theta + \\mu\\cos\\theta)}$",
      "$\\sqrt{2gl(\\cos\\theta + \\mu\\sin\\theta)}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = g(\\sin\\theta - \\mu\\cos\\theta)$$\n$$v = \\sqrt{2as} = \\sqrt{2gl(\\sin\\theta - \\mu\\cos\\theta)}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Motion on Inclined Surface"
    ]
  },
  {
    "id": "fric-ct-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A block of mass $m$ lying on a rough horizontal plane is acted upon by a horizontal force $P$ and another force $Q$ inclined at an angle $\\theta$ to the vertical. The block will remain in equilibrium, if the coefficient of friction between it and the surface is [Haryana CEE 1996]",
    "options": [
      "$\\frac{P + Q\\sin\\theta}{mg + Q\\cos\\theta}$",
      "$\\frac{P + Q\\cos\\theta}{mg - Q\\sin\\theta}$",
      "$\\frac{P + Q\\cos\\theta}{mg + Q\\sin\\theta}$",
      "$\\frac{P - Q\\sin\\theta}{mg - Q\\cos\\theta}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nResolving forces on the block:\n- Vertical normal reaction: $R = mg + Q\\cos\\theta$\n- Net horizontal force: $F_{\\text{horizontal}} = P + Q\\sin\\theta$\n\n\u26a1 **Step-by-Step Derivation**:\nFor static equilibrium, the limiting friction must satisfy:\n$$F_{\\text{horizontal}} \\le \\mu R$$\n$$P + Q\\sin\\theta \\le \\mu (mg + Q\\cos\\theta) \\implies \\mu \\ge \\frac{P + Q\\sin\\theta}{mg + Q\\cos\\theta}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "Which of the following is correct, when a person walks on a rough surface [IIT 1981]",
    "options": [
      "The frictional force exerted by the surface keeps him moving",
      "The force which the man exerts on the floor keeps him moving",
      "The reaction of the force which the man exerts on floor keeps him moving",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAccording to Newton's third law, when a person walks, he presses the ground backward and downward with his foot. The ground exerts an equal and opposite reaction force (forward static friction and upward normal reaction) that propels him forward.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A block of mass $0.1\\text{ kg}$ is held against a wall by applying a horizontal force of $5\\text{ N}$ on the block. If the coefficient of friction between the block and the wall is 0.5, the magnitude of the frictional force acting on the block is [IIT 1994]",
    "options": [
      "$2.5\\text{ N}$",
      "$0.98\\text{ N}$",
      "$4.9\\text{ N}$",
      "$0.49\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Normal reaction $R = F_{\\text{applied}} = 5\\text{ N}$.\n2. Maximum available static friction: $F_l = \\mu R = 0.5 \\times 5 = 2.5\\text{ N}$.\n3. Downward gravitational weight: $W = mg = 0.1 \\times 9.8 = 0.98\\text{ N}$.\n4. Since $W < F_l$, the block does not slip, and static friction self-adjusts to balance weight: $f_s = 0.98\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A body of mass $M$ is kept on a rough horizontal surface (friction coefficient $\\mu$). A person is trying to pull the body by applying a horizontal force but the body is not moving. The force by the surface on the body is $F$, where [MP PET 1997]",
    "options": [
      "$F = Mg$",
      "$F = \\mu Mg$",
      "$Mg \\le F \\le Mg\\sqrt{1 + \\mu^2}$",
      "$Mg \\ge F \\ge Mg\\sqrt{1 + \\mu^2}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe total contact force $F_{\\text{contact}}$ exerted by the surface is the vector sum of normal reaction $R = Mg$ and static friction $f_s$ ($0 \\le f_s \\le \\mu Mg$):\n$$F = \\sqrt{R^2 + f_s^2}$$\n- Minimum contact force (when $f_s = 0$): $F_{\\min} = Mg$.\n- Maximum contact force (when $f_s = \\mu Mg$): $F_{\\max} = \\sqrt{(Mg)^2 + (\\mu Mg)^2} = Mg\\sqrt{1 + \\mu^2}$.\n$$\\therefore Mg \\le F \\le Mg\\sqrt{1 + \\mu^2}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "What is the maximum value of the force $F$ such that the block shown in the arrangement ($m = \\sqrt{3}\\text{ kg}, \\mu = \\frac{1}{2\\sqrt{3}}$, pushed downward at $60^\\circ$ to the horizontal) does not move [IIT-JEE Screening 2003]",
    "options": [
      "$20\\text{ N}$",
      "$10\\text{ N}$",
      "$12\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nResolving pushing force $F$ at $60^\\circ$ below the horizontal:\n- Normal reaction: $R = W + F\\sin 60^\\circ = mg + F\\frac{\\sqrt{3}}{2} = 10\\sqrt{3} + F\\frac{\\sqrt{3}}{2}$.\n- Horizontal forward component: $F\\cos 60^\\circ = \\frac{F}{2}$.\n\n\u26a1 **Step-by-Step Calculation**:\nAt verge of motion:\n$$F\\cos 60^\\circ = \\mu R$$\n$$\\frac{F}{2} = \\frac{1}{2\\sqrt{3}}\\left(10\\sqrt{3} + F\\frac{\\sqrt{3}}{2}\\right)$$\n$$\\frac{F}{2} = 5 + \\frac{F}{4} \\implies \\frac{F}{4} = 5 \\implies F = 20\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A block $P$ of mass $m$ is placed on a frictionless horizontal surface. Another block $Q$ of same mass is kept on $P$ and connected to the wall with the help of a spring of spring constant $k$ as shown in the figure. $\\mu_s$ is the coefficient of friction between $P$ and $Q$. The blocks move together performing SHM of amplitude $A$. The maximum value of the friction force between $P$ and $Q$ is [IIT-JEE (Screening) 2004]",
    "options": [
      "$kA$",
      "$\\frac{kA}{2}$",
      "Zero",
      "$\\mu_s mg$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor the two-block system oscillating together:\n$$\\text{Total mass } M = 2m$$\n$$\\text{Angular frequency } \\omega = \\sqrt{\\frac{k}{2m}}$$\n$$\\text{Maximum acceleration } a_{\\max} = \\omega^2 A = \\frac{kA}{2m}$$\n\n\u26a1 **Step-by-Step Calculation**:\nBlock $P$ is accelerated solely by the friction force between $P$ and $Q$:\n$$f_{\\max} = m a_{\\max} = m \\left(\\frac{kA}{2m}\\right) = \\frac{kA}{2}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A body of mass $m$ rests on horizontal surface. The coefficient of friction between the body and the surface is $\\mu$. If the mass is pulled by a force $P$ making an angle $30^\\circ$ above horizontal, the limiting friction between body and surface will be [BHU 2004]",
    "options": [
      "$\\mu mg$",
      "$\\mu\\left[mg + \\left(\\frac{P}{2}\\right)\\right]$",
      "$\\mu\\left[mg - \\left(\\frac{P}{2}\\right)\\right]$",
      "$\\mu\\left[mg - \\left(\\frac{\\sqrt{3}P}{2}\\right)\\right]$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNormal reaction: $R = mg - P\\sin 30^\\circ = mg - \\frac{P}{2}$.\nLimiting friction: $F_l = \\mu R = \\mu\\left(mg - \\frac{P}{2}\\right)$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A $40\\text{ kg}$ slab rests on a frictionless floor as shown in the figure. A $10\\text{ kg}$ block rests on the top of the slab. The static coefficient of friction between the block and slab is 0.60 while the kinetic friction is 0.40. The $10\\text{ kg}$ block is acted upon by a horizontal force $100\\text{ N}$. If $g = 9.8\\text{ m/s}^2$, the resulting acceleration of the slab will be [NCERT 1982]",
    "options": [
      "$0.98\\text{ m/s}^2$",
      "$1.47\\text{ m/s}^2$",
      "$1.52\\text{ m/s}^2$",
      "$6.1\\text{ m/s}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Limiting static friction on top block: $F_l = \\mu_s m_A g = 0.60 \\times 10 \\times 9.8 = 58.8\\text{ N}$.\n2. Since applied force $F = 100\\text{ N} > 58.8\\text{ N}$, the block slips over the slab.\n3. Kinetic friction acting forward on the slab: $F_k = \\mu_k m_A g = 0.40 \\times 10 \\times 9.8 = 39.2\\text{ N}$.\n4. Acceleration of the $40\\text{ kg}$ slab:\n$$a_{\\text{slab}} = \\frac{F_k}{m_B} = \\frac{39.2\\text{ N}}{40\\text{ kg}} = 0.98\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q9",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A block of mass $2\\text{ kg}$ rests on a rough inclined plane making an angle of $30^\\circ$ with the horizontal. The coefficient of static friction between the block and the plane is 0.7. The frictional force on the block is [IIT 1980; J & K CET 2004]",
    "options": [
      "$9.8\\text{ N}$",
      "$0.7 \\times 9.8 \\times \\sqrt{3}\\text{ N}$",
      "$9.8\\times\\sqrt{3}\\text{ N}$",
      "$0.8 \\times 9.8\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Limiting friction: $F_l = \\mu_s mg\\cos 30^\\circ = 0.7 \\times 2 \\times 9.8 \\times \\frac{\\sqrt{3}}{2} \\approx 11.9\\text{ N}$.\n2. Downward gravitational pull along incline: $mg\\sin 30^\\circ = 2 \\times 9.8 \\times 0.5 = 9.8\\text{ N}$.\n3. Since $9.8\\text{ N} < 11.9\\text{ N}$, the block remains stationary and static friction equals $9.8\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q10",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "When a bicycle is in motion, the force of friction exerted by the ground on the two wheels is such that it acts [IIT 1990; Manipal MEE 1995; MP PET 1996]",
    "options": [
      "In the backward direction on the front wheel and in the forward direction on the rear wheel",
      "In the forward direction on the front wheel and in the backward direction on the rear wheel",
      "In the backward direction on both front and the rear wheels",
      "In the forward direction on both front and the rear wheels"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- **Rear Wheel (driving wheel)**: The cyclist provides torque through pedaling, making the rear wheel push the road backward. By Newton's 3rd law, friction acts **forward** on the rear wheel.\n- **Front Wheel (driven wheel)**: Pushed forward by the axle, friction on it acts **backward** to produce rolling torque.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ct-q11",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "An insect crawls up a hemispherical surface very slowly. The coefficient of friction between the insect and the surface is 1/3. If the line joining the centre of the hemispherical surface to the insect makes an angle $\\alpha$ with the vertical, the maximum possible value of $\\alpha$ is given by [IIT-JEE 2001]",
    "options": [
      "$\\cot\\alpha = 3$",
      "$\\tan\\alpha = 3$",
      "$\\sec\\alpha = 3$",
      "$\\text{cosec}\\,\\alpha = 3$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt an angle $\\alpha$ with the vertical, the local tangent makes an angle $\\alpha$ with the horizontal.\nAt the verge of slipping:\n$$\\tan\\alpha = \\mu = \\frac{1}{3} \\implies \\cot\\alpha = 3$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Critical Thinking"
    ]
  },
  {
    "id": "fric-ar-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Medium",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): On a rainy day, it is difficult to drive a car or bus at high speed.\nReason (R): The value of coefficient of friction is lowered due to wetting of the surface.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWater forms a thin lubricant film between tyres and road surface, significantly lowering the coefficient of friction $\\mu$. This reduces the maximum safe turning speed and increases stopping distance, causing skidding.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Medium",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When a bicycle is in motion, the force of friction exerted by the ground on the two wheels is always in forward direction.\nReason (R): The frictional force acts only when the bodies are in contact.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- **Assertion is False**: Friction on the front wheel is backward when pedaling, and backward on both wheels when coasting.\n- **Reason is True**: Friction is a contact electromagnetic force.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Easy",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Pulling a lawn roller is easier than pushing it.\nReason (R): Pushing increases the apparent weight and hence the force of friction.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- When pushing, the vertical component of force acts downward: $R = W + F\\sin\\theta$, increasing friction $f_k = \\mu (W + F\\sin\\theta)$.\n- When pulling, the vertical component acts upward: $R = W - F\\sin\\theta$, reducing friction.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Medium",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Angle of repose is equal to angle of limiting friction.\nReason (R): When the body is just at the point of motion, the force of friction in this stage is called as limiting friction.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBoth statements are true facts ($\tan\\alpha = \\mu_s = \\tan\\lambda \\implies \\alpha = \\lambda$, and limiting friction is maximum static friction), but Reason is the definition of limiting friction rather than the mathematical proof of $\\alpha = \\lambda$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Medium",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Two bodies of masses $M$ and $m$ ($M > m$) are allowed to fall from the same height if the air resistance for each be the same then both the bodies will reach the earth simultaneously.\nReason (R): For same air resistance, acceleration of both the bodies will be same.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNet downward acceleration is $a = \\frac{mg - F_{\\text{air}}}{m} = g - \\frac{F_{\\text{air}}}{m}$. For equal air resistance $F_{\\text{air}}$, the heavier mass $M$ has greater acceleration ($a_M > a_m$) and reaches first. Both (A) and (R) are false.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Medium",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Friction is a self adjusting force.\nReason (R): Friction does not depend upon mass of the body.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- **Assertion is false**: Only static friction is self-adjusting; limiting and kinetic friction are constant for given conditions.\n- **Reason is false**: Limiting and kinetic friction depend directly on the normal reaction $R = mg$, which is proportional to mass.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Easy",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The value of dynamic friction is less than the limiting friction.\nReason (R): Once the motion has started, the inertia of rest has been overcome.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen two surfaces are in relative motion, the microscopic contact points and asperities do not get enough time to interlock into cold welds, making kinetic friction less than limiting static friction.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-ar-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Assertion & Reason",
    "difficulty": "Easy",
    "questionText": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The acceleration of a body down a rough inclined plane is greater than the acceleration due to gravity.\nReason (R): The body is able to slide on an inclined plane only when its acceleration is greater than acceleration due to gravity.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nDownward acceleration along a rough incline is $a = g(\\sin\\theta - \\mu\\cos\\theta) < g$. The condition for sliding is simply $\\theta > \\text{angle of repose}$. Both (A) and (R) are false.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Assertion & Reason"
    ]
  },
  {
    "id": "fric-set5-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "A force of $19.6\\text{ N}$ when applied parallel to the surface just moves a body of mass $10\\text{ kg}$ kept on a horizontal surface. If a $5\\text{ kg}$ mass is kept on the first mass, the force applied parallel to the surface to just move the combined body is",
    "options": [
      "$29.4\\text{ N}$",
      "$39.2\\text{ N}$",
      "$18.6\\text{ N}$",
      "$42.6\\text{ N}$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLimiting friction is directly proportional to normal reaction, and thus proportional to total mass: $F_l \\propto m$.\n\n\u26a1 **Step-by-Step Calculation**:\n$$\\frac{F_l'}{F_l} = \\frac{m_1 + m_2}{m_1} = \\frac{10 + 5}{10} = \\frac{3}{2}$$\n$$F_l' = \\frac{3}{2} \\times 19.6\\text{ N} = 29.4\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "If the normal force is doubled, the coefficient of friction is",
    "options": [
      "Not changed",
      "Halved",
      "Doubled",
      "Tripled"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe coefficient of friction $\\mu$ is an intrinsic property of the nature of materials in contact and surface roughness. It does not depend on the normal reaction.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Medium",
    "questionText": "A body of weight $50\\text{ N}$ placed on a horizontal surface is just moved by a force of $28.2\\text{ N}$ pulling at an angle of $45^\\circ$ to the horizontal. The frictional force and the normal reaction are",
    "options": [
      "$10\\text{ N}, 15\\text{ N}$",
      "$20\\text{ N}, 30\\text{ N}$",
      "$2\\text{ N}, 3\\text{ N}$",
      "$5\\text{ N}, 6\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nResolving pulling force $F = 28.2\\text{ N}$ at $45^\\circ$:\n- Horizontal driving component / friction: $f = 28.2\\cos 45^\\circ = 28.2 \\times \\frac{1}{\\sqrt{2}} = 20\\text{ N}$.\n- Normal reaction: $R = W - 28.2\\sin 45^\\circ = 50 - 20 = 30\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Hard",
    "questionText": "Block $A$ weighing $100\\text{ kg}$ rests on a block $B$ and is tied with a horizontal string to the wall at $C$. Block $B$ weighs $200\\text{ kg}$. The coefficient of friction between $A$ and $B$ is 0.25 and between $B$ and the surface is $1/3$. The horizontal force $P$ necessary to move the block $B$ should be ($g = 10\\text{ m/s}^2$)",
    "options": [
      "$1150\\text{ N}$",
      "$1250\\text{ N}$",
      "$1300\\text{ N}$",
      "$1420\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo move block $B$, applied force $P$ must overcome friction from both the top surface ($A-B$) and bottom surface ($B-\\text{ground}$):\n$$P = f_{AB} + f_{BS}$$\n\n\u26a1 **Step-by-Step Calculation**:\n1. $f_{AB} = \\mu_{AB} m_A g = 0.25 \\times 100 \\times 10 = 250\\text{ N}$.\n2. $f_{BS} = \\mu_{BS} (m_A + m_B) g = \\frac{1}{3} \\times (100 + 200) \\times 10 = 1000\\text{ N}$.\n3. Total force $P = 250 + 1000 = 1250\\text{ N}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Medium",
    "questionText": "A rough vertical board has an acceleration '$a$' so that a $2\\text{ kg}$ block pressing against it does not fall. The coefficient of friction between the block and the board should be",
    "options": [
      "$\\ge g/a$",
      "$< g/a$",
      "$= g/a$",
      "$> a/g$"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe normal reaction from the accelerating vertical board is $R = ma$.\nTo prevent the block from slipping downward under gravity:\n$$f_l \\ge mg \\implies \\mu R \\ge mg \\implies \\mu (ma) \\ge mg \\implies \\mu \\ge \\frac{g}{a}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "A stone weighing $1\\text{ kg}$ and sliding on ice with a velocity of $2\\text{ m/s}$ is stopped by friction in $10\\text{ sec}$. The force of friction (assuming it to be constant) will be",
    "options": [
      "$-20\\text{ N}$",
      "$-0.2\\text{ N}$",
      "$0.2\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\frac{v - u}{t} = \\frac{0 - 2\\text{ m/s}}{10\\text{ s}} = -0.2\\text{ m/s}^2$$\n$$F = ma = 1\\text{ kg} \\times (-0.2\\text{ m/s}^2) = -0.2\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Hard",
    "questionText": "A body of mass $10\\text{ kg}$ slides along a rough horizontal surface. The coefficient of friction is $1/\\sqrt{3}$. Taking $g = 10\\text{ m/s}^2$, the least force which acts at an angle of $30^\\circ$ to the horizontal is",
    "options": [
      "$25\\text{ N}$",
      "$100\\text{ N}$",
      "$50\\text{ N}$",
      "$\\frac{50}{\\sqrt{3}}\\text{ N}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor pulling force $P$ at $30^\\circ$ to the horizontal:\n$$P\\cos 30^\\circ = \\mu(mg - P\\sin 30^\\circ)$$\n\n\u26a1 **Step-by-Step Calculation**:\n$$P\\frac{\\sqrt{3}}{2} = \\frac{1}{\\sqrt{3}}\\left(100 - \\frac{P}{2}\\right)$$\n$$\\frac{3P}{2} = 100 - \\frac{P}{2}$$\n$$2P = 100 \\implies P = 50\\text{ N}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "A lift is moving downwards with an acceleration equal to acceleration due to gravity. A body of mass $M$ kept on the floor of the lift is pulled horizontally. If the coefficient of friction is $\\mu$, then the frictional resistance offered by the body is",
    "options": [
      "$Mg$",
      "$\\mu Mg$",
      "$2\\mu Mg$",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn free fall ($a = g$), apparent weight $R = M(g - g) = 0$. Frictional resistance $f = \\mu R = 0$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q9",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "In the above question, if the lift is moving upwards with a uniform velocity, then the frictional resistance offered by the body is",
    "options": [
      "$Mg$",
      "$\\mu Mg$",
      "$2\\mu Mg$",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWhen moving with uniform velocity ($a = 0$), normal reaction $R = Mg$. Thus, frictional resistance is $f = \\mu R = \\mu Mg$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q10",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "A body of mass $2\\text{ kg}$ is moving on the ground comes to rest after some time. The coefficient of kinetic friction between the body and the ground is 0.2. The retardation in the body is",
    "options": [
      "$9.8\\text{ m/s}^2$",
      "$4.73\\text{ m/s}^2$",
      "$2.16\\text{ m/s}^2$",
      "$1.96\\text{ m/s}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\mu g = 0.2 \\times 9.8\\text{ m/s}^2 = 1.96\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q11",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Medium",
    "questionText": "A cyclist moves in a circular track of radius $100\\text{ m}$. If the coefficient of friction is 0.2, then the maximum velocity with which the cyclist can take the turn without leaning inwards is",
    "options": [
      "$9.8\\text{ m/s}$",
      "$1.4\\text{ m/s}$",
      "$140\\text{ m/s}$",
      "$14\\text{ m/s}$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{\\mu r g} = \\sqrt{0.2 \\times 100 \\times 10} = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14\\text{ m/s} \\approx 14\\text{ m/s}$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q12",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Easy",
    "questionText": "A block of mass $5\\text{ kg}$ lies on a rough horizontal table. A force of $19.6\\text{ N}$ is enough to keep the body sliding at uniform velocity. The coefficient of sliding friction is",
    "options": [
      "0.5",
      "0.2",
      "0.4",
      "0.8"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu_k = \\frac{F}{mg} = \\frac{19.6\\text{ N}}{5\\text{ kg} \\times 9.8\\text{ m/s}^2} = \\frac{19.6}{49} = 0.4$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q13",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Hard",
    "questionText": "A motor car has a width $1.1\\text{ m}$ between wheels. Its centre of gravity is $0.62\\text{ m}$ above the ground and the coefficient of friction between the wheels and the road is 0.8. What is the maximum possible speed, if the centre of gravity inscribes a circle of radius $15\\text{ m}$? (Road surface is horizontal)",
    "options": [
      "$7.64\\text{ m/s}$",
      "$6.28\\text{ m/s}$",
      "$10.84\\text{ m/s}$",
      "$11.23\\text{ m/s}$"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n1. Maximum speed without skidding: $v_s = \\sqrt{\\mu r g} = \\sqrt{0.8 \\times 9.8 \\times 15} = \\sqrt{117.6} = 10.84\\text{ m/s}$.\n2. Maximum speed without overturning: $v_o = \\sqrt{\\frac{g r d}{2h}} = \\sqrt{\\frac{9.8 \\times 15 \\times 1.1}{2 \\times 0.62}} = 11.42\\text{ m/s}$.\n3. Since $v_s < v_o$, skidding occurs first at $v = 10.84\\text{ m/s}$.",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  },
  {
    "id": "fric-set5-q14",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Self Evaluation Test - 5",
    "difficulty": "Medium",
    "questionText": "A child weighing $25\\text{ kg}$ slides down a rope hanging from the branch of a tall tree. If the force of friction acting against him is $2\\text{ N}$, what is the acceleration of the child (Take $g = 9.8\\text{ m/s}^2$)",
    "options": [
      "$22.5\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$9.72\\text{ m/s}^2$"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$ma = mg - f \\implies a = g - \\frac{f}{m} = 9.8 - \\frac{2\\text{ N}}{25\\text{ kg}} = 9.8 - 0.08 = 9.72\\text{ m/s}^2$$",
    "tags": [
      "Laws of Motion",
      "Friction",
      "Self Evaluation Test - 5"
    ]
  }
];

export const FRICTION_BOOK_QUESTIONS = FRICTION_QUESTIONS;

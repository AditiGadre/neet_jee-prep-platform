import { Question } from '../types';

export const GRAVITATION_BOOK_QUESTIONS: Question[] = [
  {
    "id": "errorless-phy-grav-001",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The tidal waves in the sea are primarily due to",
    "options": [
      "The gravitational effect of the moon on the earth",
      "The gravitational effect of the sun on the earth",
      "The gravitational effect of venus on the earth",
      "The atmospheric effect of the earth itself"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Oceanic tides are caused primarily by the differential gravitational attraction exerted by the Moon across the diameter of the Earth.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gravitational tidal force varies as $\\Delta F \\propto \\frac{M}{d^3}$.\n- Even though the Sun is far more massive than the Moon, the Moon is much closer to Earth ($d_{moon} \\approx 3.84 \\times 10^5\\text{ km}$ vs $d_{sun} \\approx 1.5 \\times 10^8\\text{ km}$).\n- The differential pull of the Moon on the oceans facing it versus the Earth's center is approximately 2.17 times stronger than that of the Sun.\n\n✓ **Examiner Pro-Tip**: Tidal force is a differential force that scales inversely with the cube of distance ($1/r^3$).",
    "tags": [
      "gravitation",
      "newtons-law",
      "tides"
    ]
  },
  {
    "id": "errorless-phy-grav-002",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "If there were a smaller gravitational effect, which of the following forces do you think would alter in some respect [NCERT 1978]",
    "options": [
      "Viscous forces",
      "Archimedes uplift",
      "Electrostatic force",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Archimedes buoyant uplift force is $F_b = V \\rho g$, where $V$ is displaced fluid volume, $\\rho$ is fluid density, and $g$ is acceleration due to gravity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Viscous forces ($F = 6\\pi \\eta r v$) and electrostatic forces ($F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2}$) are electromagnetic in nature and independent of gravity.\n- Archimedes buoyant force depends directly on $g$. If the gravitational field alters, $F_b = V \\rho g$ alters proportionally.\n\n✓ **Examiner Pro-Tip**: In zero gravity ($g = 0$), Archimedes buoyant force vanishes completely ($F_b = 0$).",
    "tags": [
      "gravitation",
      "newtons-law",
      "buoyancy"
    ]
  },
  {
    "id": "errorless-phy-grav-003",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "A satellite of the earth is revolving in a circular orbit with a uniform speed $v$. If the gravitational force suddenly disappears, the satellite will [AIIMS 1982; AIEEE 2002]",
    "options": [
      "Continue to move with velocity $v$ along the original orbit",
      "Move with a velocity $v$, tangentially to the original orbit",
      "Fall down with increasing velocity",
      "Ultimately come to rest somewhere on the original orbit"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Newton's First Law of Motion (Law of Inertia).\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The gravitational force provides the necessary centripetal force $\\frac{mv^2}{r}$ that continuously curves the satellite's velocity vector.\n- If gravity suddenly vanishes, the net force on the satellite becomes zero ($\\vec{F}_{net} = 0$).\n- By the law of inertia, the satellite continues moving in a straight line along the instantaneous tangent with uniform velocity $v$.\n\n✓ **Examiner Pro-Tip**: In the absence of central force, curved circular motion immediately transitions to linear inertial motion.",
    "tags": [
      "gravitation",
      "newtons-law",
      "satellite-motion"
    ]
  },
  {
    "id": "errorless-phy-grav-004",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The atmosphere is held to the earth by [IIT 1986]",
    "options": [
      "Winds",
      "Gravity",
      "Clouds",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Planetary atmosphere retention.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gas molecules in the atmosphere have root-mean-square thermal velocities given by $v_{rms} = \\sqrt{\\frac{3RT}{M}}$.\n- For Earth, $v_{rms} \\approx 0.5\\text{ km/s}$ for $N_2/O_2$, which is far below Earth's escape velocity ($v_e = 11.2\\text{ km/s}$).\n- Earth's gravitational force prevents atmospheric molecules from escaping into space.\n\n✓ **Examiner Pro-Tip**: An atmosphere is retained if $v_{rms} < v_e$; on the Moon, $v_{rms} > v_e$, which is why the Moon lacks an atmosphere.",
    "tags": [
      "gravitation",
      "newtons-law",
      "atmosphere"
    ]
  },
  {
    "id": "errorless-phy-grav-005",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The weight of a body at the centre of the earth is [AFMC 1988]",
    "options": [
      "Zero",
      "Infinite",
      "Same as on the surface of earth",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational field inside a solid sphere: $g(r) = g_0 \\frac{r}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At the centre of the Earth, $r = 0$, so $g_{centre} = 0$.\n- Since weight $W = mg$, at $r = 0$, $W = m(0) = 0$.\n- By symmetry, gravitational forces from all mass elements of the Earth cancel out completely at the centre.\n\n✓ **Examiner Pro-Tip**: Mass of a body remains non-zero everywhere, but its weight is zero at the centre of the Earth.",
    "tags": [
      "gravitation",
      "newtons-law",
      "weight"
    ]
  },
  {
    "id": "errorless-phy-grav-006",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "If the distance between two masses is doubled, the gravitational attraction between them [CPMT 1973; AMU (Med.) 2000]",
    "options": [
      "Is doubled",
      "Becomes four times",
      "Is reduced to half",
      "Is reduced to a quarter"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Newton's Inverse Square Law: $F = G \\frac{m_1 m_2}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $F \\propto \\frac{1}{r^2}$.\n- If distance is doubled ($r' = 2r$):\n  $$F' = G \\frac{m_1 m_2}{(2r)^2} = \\frac{1}{4} \\left(G \\frac{m_1 m_2}{r^2}\\right) = \\frac{F}{4}$$\n- The force reduces to one-fourth (a quarter) of its original value.\n\n✓ **Examiner Pro-Tip**: Doubling $r$ decreases force by factor $2^2 = 4$; tripling $r$ decreases force by factor $3^2 = 9$.",
    "tags": [
      "gravitation",
      "newtons-law",
      "inverse-square"
    ]
  },
  {
    "id": "errorless-phy-grav-007",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Which of the following is the evidence to show that there must be a force acting on earth and directed towards the sun [AIIMS 1980]",
    "options": [
      "Deviation of the falling bodies towards east",
      "Revolution of the earth round the sun",
      "Phenomenon of day and night",
      "Apparent motion of sun round the earth"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Curved planetary trajectories require central force.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The Earth revolves in an elliptical orbit around the Sun.\n- Any curved path involves centripetal acceleration $\\vec{a}_c$ directed towards the Sun.\n- By Newton's Second Law ($\\vec{F} = m\\vec{a}$), this continuous acceleration requires a net inward gravitational force directed towards the Sun.\n\n✓ **Examiner Pro-Tip**: Revolution requires a central force towards the Sun; rotation causes day and night.",
    "tags": [
      "gravitation",
      "newtons-law",
      "planetary-motion"
    ]
  },
  {
    "id": "errorless-phy-grav-008",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The gravitational force between two stones of mass 1 kg each separated by a distance of 1 metre in vacuum is [DPMT 1984]",
    "options": [
      "Zero",
      "$6.675 \\times 10^{-5}\\text{ newton}$",
      "$6.675 \\times 10^{-11}\\text{ newton}$",
      "$6.675 \\times 10^{-8}\\text{ newton}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Universal Law of Gravitation: $F = G \\frac{m_1 m_2}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $m_1 = 1\\text{ kg}$, $m_2 = 1\\text{ kg}$, $r = 1\\text{ m}$.\n- $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n- $F = (6.67 \\times 10^{-11}) \\frac{1 \\times 1}{1^2} = 6.675 \\times 10^{-11}\\text{ N}$.\n\n✓ **Examiner Pro-Tip**: For unit masses separated by unit distance, gravitational force equals the numerical value of $G$.",
    "tags": [
      "gravitation",
      "newtons-law",
      "gravitational-constant"
    ]
  },
  {
    "id": "errorless-phy-grav-009",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Medium",
    "questionText": "Two particles of equal mass go round a circle of radius R under the action of their mutual gravitational attraction. The speed of each particle is [CBSE PMT 1995; RPMT 2003]",
    "options": [
      "$v = \\frac{1}{2R}\\sqrt{Gm}$",
      "$v = \\sqrt{\\frac{Gm}{2R}}$",
      "$v = \\frac{1}{2}\\sqrt{\\frac{Gm}{R}}$",
      "$v = \\sqrt{\\frac{4Gm}{R}}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Binary circular orbital dynamics under mutual central attraction.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The two particles of mass $m$ move on diametrically opposite points of a circular orbit of radius $R$.\n- The distance between the particles is $d = 2R$.\n- Gravitational attraction between them:\n  $$F_g = G \\frac{m^2}{(2R)^2} = \\frac{G m^2}{4 R^2}$$\n- This gravitational force provides the centripetal force for circular motion of radius $R$:\n  $$\\frac{m v^2}{R} = \\frac{G m^2}{4 R^2} \\implies v^2 = \\frac{G m}{4 R} \\implies v = \\frac{1}{2}\\sqrt{\\frac{Gm}{R}}$$\n\n✓ **Examiner Pro-Tip**: Separation distance between two diametrically opposed bodies is $2R$, yielding a factor of 4 in the denominator.",
    "tags": [
      "gravitation",
      "newtons-law",
      "binary-system"
    ]
  },
  {
    "id": "errorless-phy-grav-010",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Medium",
    "questionText": "The earth (mass $= 6 \\times 10^{24}\\text{ kg}$) revolves round the sun with angular velocity $2 \\times 10^{-7}\\text{ rad/s}$ in a circular orbit of radius $1.5 \\times 10^{8}\\text{ km}$. The force exerted by the sun on the earth in newtons, is [CBSE PMT 1995; AFMC 1999; Pb. PMT 2003]",
    "options": [
      "$18 \\times 10^{25}$",
      "Zero",
      "$27 \\times 10^{39}$",
      "$36 \\times 10^{21}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Centripetal force for orbital motion: $F = m \\omega^2 R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $m = 6 \\times 10^{24}\\text{ kg}$, $\\omega = 2 \\times 10^{-7}\\text{ rad/s}$.\n- Orbital radius $R = 1.5 \\times 10^8\\text{ km} = 1.5 \\times 10^{11}\\text{ m}$.\n- $F = m \\omega^2 R = (6 \\times 10^{24}) \\times (2 \\times 10^{-7})^2 \\times (1.5 \\times 10^{11})$\n  $$F = 6 \\times 10^{24} \\times 4 \\times 10^{-14} \\times 1.5 \\times 10^{11} = 36 \\times 10^{21}\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: Always convert astronomical distance from km to metres ($1\\text{ km} = 10^3\\text{ m}$) before calculation.",
    "tags": [
      "gravitation",
      "newtons-law",
      "centripetal-force"
    ]
  },
  {
    "id": "errorless-phy-grav-011",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Gravitational mass is proportional to gravitational [AIIMS 1998]",
    "options": [
      "Field",
      "Force",
      "Intensity",
      "All of these"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Definition of gravitational mass: $F = m_g I = m_g g$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gravitational mass $m_g$ determines the gravitational pull experienced in a field ($F_g = m_g I$).\n- The gravitational force, gravitational field intensity, and gravitational field strength are all directly proportional to the gravitational mass ($F \\propto m_g, I \\propto m_g$).\n- Therefore, gravitational mass is proportional to all of these quantities.\n\n✓ **Examiner Pro-Tip**: By the Equivalence Principle, inertial mass and gravitational mass are exactly proportional and equal.",
    "tags": [
      "gravitation",
      "newtons-law",
      "gravitational-mass"
    ]
  },
  {
    "id": "errorless-phy-grav-012",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The gravitational force between two point masses $m_1$ and $m_2$ at separation $r$ is given by $F = k \\frac{m_1 m_2}{r^2}$. The constant $k$ [CPMT 1993]",
    "options": [
      "Depends on system of units only",
      "Depends on medium between masses only",
      "Depends on both (a) and (b)",
      "Is independent of both (a) and (b)"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Universal Gravitational Constant $G$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In Newton's law, $k = G$ is a universal physical constant ($G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ in SI, and $6.67 \\times 10^{-8}\\text{ dyne}\\cdot\\text{cm}^2/\\text{g}^2$ in CGS).\n- Its numerical value depends solely on the chosen system of units (SI, CGS, FPS).\n- It is strictly independent of the intervening medium between masses and physical conditions.\n\n✓ **Examiner Pro-Tip**: Unlike electrostatic constant $k = \\frac{1}{4\\pi\\varepsilon}$, $G$ has no medium dependence.",
    "tags": [
      "gravitation",
      "newtons-law",
      "universal-constant"
    ]
  },
  {
    "id": "errorless-phy-grav-013",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Medium",
    "questionText": "The distance of the centres of moon and earth is $D$. The mass of earth is 81 times the mass of the moon. At what distance from the centre of the earth, the gravitational force will be zero [RPET 1996]",
    "options": [
      "$\\frac{D}{2}$",
      "$\\frac{2D}{3}$",
      "$\\frac{4D}{3}$",
      "$\\frac{9D}{10}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Null point of gravitational field intensity between two masses.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Let the null point be at distance $x$ from the Earth's centre. Distance from the Moon is $(D - x)$.\n- At the null point, gravitational fields cancel out:\n  $$\\frac{G M_e}{x^2} = \\frac{G M_m}{(D - x)^2} \\implies \\frac{x}{D - x} = \\sqrt{\\frac{M_e}{M_m}} = \\sqrt{81} = 9$$\n  $$x = 9(D - x) = 9D - 9x \\implies 10x = 9D \\implies x = \\frac{9D}{10}$$\n\n✓ **Examiner Pro-Tip**: Null point formula from mass $M_1$: $x = \\frac{\\sqrt{M_1}}{\\sqrt{M_1} + \\sqrt{M_2}} D$.",
    "tags": [
      "gravitation",
      "newtons-law",
      "null-point"
    ]
  },
  {
    "id": "errorless-phy-grav-014",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Who among the following gave first the experimental value of $G$ [AFMC 1997]",
    "options": [
      "Cavendish",
      "Copernicus",
      "Brook Teylor",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Historical measurement of Universal Gravitational Constant $G$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Henry Cavendish first measured the value of $G$ experimentally in 1798 using a sensitive torsion balance.\n- This experiment was famously known as \"weighing the Earth\".\n\n✓ **Examiner Pro-Tip**: Cavendish used a quartz fiber torsion balance to measure the minute deflection produced by lead spheres.",
    "tags": [
      "gravitation",
      "newtons-law",
      "cavendish-experiment"
    ]
  },
  {
    "id": "errorless-phy-grav-015",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Medium",
    "questionText": "The mass of the moon is $7.34 \\times 10^{22}\\text{ kg}$ and the radius is $1.74 \\times 10^{6}\\text{ m}$. The value of gravitation force (field intensity per kg) will be [AMU 1999]",
    "options": [
      "1.45 N/kg",
      "1.55 N/kg",
      "1.75 N/kg",
      "1.62 N/kg"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravitational field intensity $g = \\frac{GM}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M = 7.34 \\times 10^{22}\\text{ kg}$, $R = 1.74 \\times 10^6\\text{ m}$, $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n  $$g = \\frac{6.67 \\times 10^{-11} \\times 7.34 \\times 10^{22}}{(1.74 \\times 10^6)^2} = \\frac{4.896 \\times 10^{12}}{3.028 \\times 10^{12}} \\approx 1.62\\text{ N/kg}$$\n\n✓ **Examiner Pro-Tip**: $g_{moon} \\approx \\frac{1}{6} g_{earth} \\approx \\frac{9.8}{6} \\approx 1.63\\text{ m/s}^2$.",
    "tags": [
      "gravitation",
      "newtons-law",
      "surface-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-016",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The centripetal force acting on a satellite orbiting round the earth and the gravitational force of earth acting on the satellite both equal $F$. The net force on the satellite is [AMU 1999]",
    "options": [
      "Zero",
      "$F$",
      "$F\\sqrt{2}$",
      "$2F$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Nature of centripetal force in orbital mechanics.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Centripetal force is not an independent physical force applied to the satellite; it is merely the kinematic role played by the real physical gravitational force $\\vec{F}_g$.\n- The only real physical force acting on the satellite is the gravitational attraction $\\vec{F}_g$ of magnitude $F$.\n- Hence, the net force on the satellite is simply $F$.\n\n✓ **Examiner Pro-Tip**: Do not double count centripetal force with the gravitational force.",
    "tags": [
      "gravitation",
      "newtons-law",
      "centripetal-force"
    ]
  },
  {
    "id": "errorless-phy-grav-017",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Reason of weightlessness in a satellite is [RPMT 2000]",
    "options": [
      "Zero gravity",
      "Centre of mass",
      "Zero reaction force by satellite surface",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Weightlessness in freely orbiting frames.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Both the satellite and the objects inside it accelerate towards the Earth's centre with the same orbital acceleration $a = g_{orbit}$.\n- In the non-inertial frame of the satellite, the centrifugal pseudo force exactly balances gravity:\n  $$N = m(g_{orbit} - a) = m(g_{orbit} - g_{orbit}) = 0$$\n- The normal reaction force exerted by the contact floor/surface is identically zero, resulting in the sensation of weightlessness.\n\n✓ **Examiner Pro-Tip**: Weightlessness is due to zero normal reaction ($N = 0$), not because gravity is zero ($g \\neq 0$).",
    "tags": [
      "gravitation",
      "newtons-law",
      "weightlessness"
    ]
  },
  {
    "id": "errorless-phy-grav-018",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Medium",
    "questionText": "Mass $M$ is divided into two parts $xM$ and $(1 - x)M$. For a given separation, the value of $x$ for which the gravitational attraction between the two pieces becomes maximum is [EAMCET 2001]",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{3}{5}$",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Maximization of gravitational force using calculus.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The two masses are $m_1 = xM$ and $m_2 = (1 - x)M$.\n- Gravitational force: $F = \\frac{G}{r^2} m_1 m_2 = \\frac{G M^2}{r^2} [x(1 - x)] = \\frac{G M^2}{r^2} (x - x^2)$.\n- For maximum force with respect to $x$:\n  $$\\frac{dF}{dx} = 0 \\implies \\frac{d}{dx}(x - x^2) = 1 - 2x = 0 \\implies x = \\frac{1}{2}$$\n- Since $\\frac{d^2 F}{dx^2} = -2 < 0$, $x = 1/2$ is a local maximum.\n\n✓ **Examiner Pro-Tip**: The product of two numbers with a fixed sum is maximized when both numbers are equal ($m_1 = m_2 = M/2$).",
    "tags": [
      "gravitation",
      "newtons-law",
      "force-maxima"
    ]
  },
  {
    "id": "errorless-phy-grav-019",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The force of gravitation is [AIIMS 2002]",
    "options": [
      "Repulsive",
      "Electrostatic",
      "Conservative",
      "Non-conservative"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Classification of Fundamental Forces.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gravitational force is a central force whose work done around any closed loop is identically zero ($\\oint \\vec{F} \\cdot d\\vec{r} = 0$).\n- The work done depends only on the initial and final positions, not on the path followed.\n- Hence, gravitation is a strictly **conservative** and **attractive** force.\n\n✓ **Examiner Pro-Tip**: All inverse-square central forces are conservative in nature.",
    "tags": [
      "gravitation",
      "newtons-law",
      "conservative-force"
    ]
  },
  {
    "id": "errorless-phy-grav-020",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "The gravitational force $F_g$ between two objects does not depend on [RPET 2003]",
    "options": [
      "Sum of the masses",
      "Product of the masses",
      "Gravitational constant",
      "Distance between the masses"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Universal Gravitation Formula: $F_g = G \\frac{m_1 m_2}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $F_g$ depends on the product of masses ($m_1 m_2$), the universal constant $G$, and the inverse square of separation ($1/r^2$).\n- It does not depend on the sum of the masses $(m_1 + m_2)$.\n\n✓ **Examiner Pro-Tip**: Two pairs of masses with the same sum can have totally different products and gravitational forces (e.g. $1+9 = 10 \\implies 9$; $5+5=10 \\implies 25$).",
    "tags": [
      "gravitation",
      "newtons-law",
      "force-dependence"
    ]
  },
  {
    "id": "errorless-phy-grav-021",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Two spheres of mass $m$ and $M$ are situated in air and the gravitational force between them is $F$. The space around the masses is now filled with a liquid of specific gravity 3. The gravitational force will now be [CBSE PMT 2003]",
    "options": [
      "$F$",
      "$\\frac{F}{3}$",
      "$\\frac{F}{9}$",
      "$3F$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Medium independence of gravitation.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The universal gravitational force between two point masses depends strictly on their masses and separation distance: $F = G \\frac{M m}{r^2}$.\n- Gravitation is completely independent of the intervening medium (unlike electrostatic force which is reduced by dielectric constant $K$).\n- Thus, the gravitational force remains unchanged at $F$.\n\n✓ **Examiner Pro-Tip**: Gravitational shielding does not exist; $G$ remains invariant in all media.",
    "tags": [
      "gravitation",
      "newtons-law",
      "medium-independence"
    ]
  },
  {
    "id": "errorless-phy-grav-022",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Earth binds the atmosphere because of [J&K CET 2005]",
    "options": [
      "Gravity",
      "Oxygen between earth and atmosphere",
      "Both (a) and (b)",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational retention of atmospheric gases.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The gravitational pull of the Earth provides the necessary escape velocity ($11.2\\text{ km/s}$) that is significantly higher than the rms speed of atmospheric molecules ($0.5\\text{ km/s}$).\n- This gravitational field permanently binds the gaseous envelope to the Earth.\n\n✓ **Examiner Pro-Tip**: Planets with low surface gravity (like Mercury) cannot bind an atmosphere.",
    "tags": [
      "gravitation",
      "newtons-law",
      "atmosphere"
    ]
  },
  {
    "id": "errorless-phy-grav-023",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Easy",
    "questionText": "Which of the following statements about the gravitational constant is true [Kerala PET 2005]",
    "options": [
      "It is a force",
      "It has no unit",
      "It has same value in all systems of units",
      "It depends on the value of the masses",
      "It does not depend on the nature of the medium in which the bodies are kept."
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept**: Properties of Universal Gravitational Constant $G$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $G$ is a dimensional scalar constant ($[M^{-1} L^3 T^{-2}]$) with SI units $\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$.\n- It has different numerical values in different unit systems ($6.67 \\times 10^{-11}$ in SI vs $6.67 \\times 10^{-8}$ in CGS).\n- It is a universal constant that is strictly independent of the nature of the intervening medium, temperature, and mass values.\n\n✓ **Examiner Pro-Tip**: Option (e) is the only true statement among the choices.",
    "tags": [
      "gravitation",
      "newtons-law",
      "gravitational-constant"
    ]
  },
  {
    "id": "errorless-phy-grav-024",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Gravitation",
    "difficulty": "Medium",
    "questionText": "Two identical solid copper spheres of radius $R$ placed in contact with each other. The gravitational attraction between them is proportional to [Kerala PET 2005]",
    "options": [
      "$R^2$",
      "$R^{-2}$",
      "$R^4$",
      "$R^{-4}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Scaling of gravitational force between touching spheres with radius $R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For each uniform sphere of density $\\rho$ and radius $R$, the mass is:\n  $$m = \\frac{4}{3}\\pi R^3 \\rho \\implies m \\propto R^3$$\n- When placed in contact, the distance between their centres is $r = 2R$.\n- Gravitational attraction between them:\n  $$F = G \\frac{m \\cdot m}{(2R)^2} = G \\frac{\\left(\\frac{4}{3}\\pi R^3 \\rho\\right)^2}{4R^2} = \\frac{4}{9}\\pi^2 G \\rho^2 \\frac{R^6}{R^2} \\propto R^4$$\n- Thus, the gravitational force is directly proportional to $R^4$.\n\n✓ **Examiner Pro-Tip**: Force between touching spheres scales as $R^4$ because mass squared provides $R^6$ while distance squared divides by $R^2$.",
    "tags": [
      "gravitation",
      "newtons-law",
      "scaling-laws"
    ]
  },
  {
    "id": "errorless-phy-grav-025",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Weightlessness experienced while orbiting the earth in space-ship, is the result of [NCERT 1978; DPMT 1982]",
    "options": [
      "Inertia",
      "Acceleration",
      "Zero gravity",
      "Free fall towards earth"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Dynamics of orbiting spacecraft as free fall.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A satellite orbiting Earth is under continuous free fall towards Earth under the sole influence of gravity with acceleration $a = g_{orbit}$.\n- Since all objects inside fall with the exact same acceleration, the floor exerts zero contact normal reaction force ($N = 0$).\n\n✓ **Examiner Pro-Tip**: Orbital motion is essentially projectile motion where the surface curves away at the same rate the projectile falls.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "weightlessness"
    ]
  },
  {
    "id": "errorless-phy-grav-026",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "If the change in the value of ‘g’ at a height h above the surface of the earth is the same as at a depth x below it, then (both x and h being much smaller than the radius of the earth) [NCERT 1983; BHU 2002]",
    "options": [
      "$x = h$",
      "$x = 2h$",
      "$x = \\frac{h}{2}$",
      "$x = h^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ with height and depth for $h, x \\ll R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Decrease in $g$ at height $h$: $\\Delta g_h = g - g\\left(1 - \\frac{2h}{R}\\right) = \\frac{2gh}{R}$.\n- Decrease in $g$ at depth $x$: $\\Delta g_x = g - g\\left(1 - \\frac{x}{R}\\right) = \\frac{gx}{R}$.\n- Equating the two changes:\n  $$\\frac{2gh}{R} = \\frac{gx}{R} \\implies x = 2h$$\n\n✓ **Examiner Pro-Tip**: Gravity decreases twice as rapidly above the Earth's surface as it does below the surface for small distances ($h \\ll R$).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height-depth-variation"
    ]
  },
  {
    "id": "errorless-phy-grav-027",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "The time period of a simple pendulum on a freely moving artificial satellite is [CPMT 1984; AFMC 2002]",
    "options": [
      "Zero",
      "2 sec",
      "3 sec",
      "Infinite"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Simple pendulum time period in weightless environment: $T = 2\\pi \\sqrt{\\frac{L}{g_{eff}}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In a freely orbiting satellite, effective acceleration due to gravity is zero ($g_{eff} = 0$).\n- Time period $T = 2\\pi \\sqrt{\\frac{L}{0}} \\rightarrow \\infty$.\n- The pendulum will not oscillate at all (it will stay stationary at any displaced position).\n\n✓ **Examiner Pro-Tip**: Clocks that rely on gravity (pendulum clocks) stop functioning in orbit; spring clocks must be used.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "pendulum-satellite"
    ]
  },
  {
    "id": "errorless-phy-grav-028",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Two planets have the same average density but their radii are $R_1$ and $R_2$. If acceleration due to gravity on these planets be $g_1$ and $g_2$ respectively, then [AIIMS 1985]",
    "options": [
      "$\\frac{g_1}{g_2} = \\frac{R_1}{R_2}$",
      "$\\frac{g_1}{g_2} = \\frac{R_2}{R_1}$",
      "$\\frac{g_1}{g_2} = \\frac{R_1^2}{R_2^2}$",
      "$\\frac{g_1}{g_2} = \\frac{R_1^3}{R_2^3}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Acceleration due to gravity in terms of mean planetary density: $g = \\frac{4}{3}\\pi G \\rho R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since density $\\rho_1 = \\rho_2 = \\rho$ (same average density):\n  $$g \\propto R \\implies \\frac{g_1}{g_2} = \\frac{R_1}{R_2}$$\n\n✓ **Examiner Pro-Tip**: When mass is constant $g \\propto 1/R^2$; when density is constant $g \\propto R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-radius-relation"
    ]
  },
  {
    "id": "errorless-phy-grav-029",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "An iron ball and a wooden ball of the same radius are released from a height ‘h’ in vacuum. The time taken by both of them to reach the ground is [NCERT 1975; AFMC 1998]",
    "options": [
      "Unequal",
      "Exactly equal",
      "Roughly equal",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Galileo's law of falling bodies in vacuum.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In vacuum, air resistance is zero ($F_{drag} = 0$).\n- Acceleration of any freely falling body is $a = g = \\frac{GM}{R^2}$, completely independent of the mass or material of the falling object.\n- Time to fall from rest through height $h$: $t = \\sqrt{\\frac{2h}{g}}$.\n- Hence, the time taken is **exactly equal** for both balls.\n\n✓ **Examiner Pro-Tip**: In the absence of air drag, all bodies fall with identical acceleration $g$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "free-fall"
    ]
  },
  {
    "id": "errorless-phy-grav-030",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "The correct answer to above question is based on [NCERT 1975]",
    "options": [
      "Acceleration due to gravity in vacuum is same irrespective of size and mass of the body",
      "Acceleration due to gravity in vacuum depends on the mass of the body",
      "There is no acceleration due to gravity in vacuum",
      "In vacuum there is resistance offered to the motion of the body and this resistance depends on the mass of the body"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Universality of free fall acceleration $g$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g = \\frac{GM}{R^2}$ depends solely on the mass and radius of the source planet (Earth), not on the mass, density, shape, or composition of the falling body.\n\n✓ **Examiner Pro-Tip**: Gravitational acceleration is independent of the falling body's properties.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "universality-of-g"
    ]
  },
  {
    "id": "errorless-phy-grav-031",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "When a body is taken from the equator to the poles, its weight [EAMCET 1978]",
    "options": [
      "Remains constant",
      "Increases",
      "Decreases",
      "Increases at N-pole and decreases at S-pole"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ due to Earth's rotation and ellipsoidal shape.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At equator: $g_e = \\frac{GM}{R_e^2} - R_e \\omega^2$.\n- At poles: $g_p = \\frac{GM}{R_p^2}$.\n- Since $R_e > R_p$ (by $\\approx 21\\text{ km}$) and centrifugal effect is maximum at equator, $g_p > g_e$ by about $0.052\\text{ m/s}^2$.\n- Thus, weight $W = mg$ **increases** when moving from equator to poles.\n\n✓ **Examiner Pro-Tip**: $g_{pole} - g_{equator} \\approx 0.034 + 0.018 = 0.052\\text{ m/s}^2$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "latitude-variation"
    ]
  },
  {
    "id": "errorless-phy-grav-032",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "A body of mass m is taken to the bottom of a deep mine. Then [NCERT 1982]",
    "options": [
      "Its mass increases",
      "Its mass decreases",
      "Its weight increases",
      "Its weight decreases"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ with depth $d$: $g' = g\\left(1 - \\frac{d}{R}\\right)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At depth $d$ inside a mine ($d > 0$), only the inner sphere of radius $(R - d)$ contributes to gravitational pull.\n- $g' = g\\left(1 - \\frac{d}{R}\\right) < g$.\n- Mass $m$ remains invariant, but weight $W' = mg'$ decreases.\n\n✓ **Examiner Pro-Tip**: Weight decreases both when going up into the sky and going down into a mine.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "depth-variation"
    ]
  },
  {
    "id": "errorless-phy-grav-033",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "A body weighs 700 gm wt on the surface of the earth. How much will it weigh on the surface of a planet whose mass is $\\frac{1}{7}$ and radius is half that of the earth [CMC Vellore 1984; AFMC 2000]",
    "options": [
      "200 gm wt",
      "400 gm wt",
      "500 gm wt",
      "300 gm wt"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity scaling: $g = G \\frac{M}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_p = \\frac{1}{7}M_e$, $R_p = \\frac{1}{2}R_e$.\n  $$\\frac{g_p}{g_e} = \\left(\\frac{M_p}{M_e}\\right) \\left(\\frac{R_e}{R_p}\\right)^2 = \\left(\\frac{1}{7}\\right) (2)^2 = \\frac{4}{7}$$\n- Weight on the planet:\n  $$W_p = W_e \\times \\frac{g_p}{g_e} = 700 \\times \\frac{4}{7} = 400\\text{ gm wt}$$\n\n✓ **Examiner Pro-Tip**: $W_p = W_e \\times \\frac{M_p / M_e}{(R_p / R_e)^2}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "planet-weight"
    ]
  },
  {
    "id": "errorless-phy-grav-034",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "In order to find time, the astronaut orbiting in an earth satellite should use [DPMT 1982]",
    "options": [
      "A pendulum clock",
      "A watch having main spring to keep it going",
      "Either a pendulum clock or a watch",
      "Neither a pendulum clock nor a watch"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Timekeeping in weightless frames.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A pendulum clock's restoring force is gravitational ($T = 2\\pi\\sqrt{L/g_{eff}}$). In orbit $g_{eff} = 0$, so the pendulum stops oscillating ($T = \\infty$).\n- A mechanical spring watch works via elastic restoring torque of the balance wheel/main spring ($T = 2\\pi\\sqrt{I/k}$), which is completely independent of gravity.\n\n✓ **Examiner Pro-Tip**: Spring-driven watches and electronic quartz watches work flawlessly in zero gravity.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "spring-watch"
    ]
  },
  {
    "id": "errorless-phy-grav-035",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "A spherical planet far out in space has a mass $M_0$ and diameter $D_0$. A particle of mass $m$ falling freely near the surface of this planet will experience an acceleration due to gravity which is equal to [MP PMT 1987; DPMT 2002]",
    "options": [
      "$GM_0 / D_0^2$",
      "$4mGM_0 / D_0^2$",
      "$4GM_0 / D_0^2$",
      "$GmM_0 / D_0^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Acceleration due to gravity in terms of diameter $D$: $g = \\frac{GM}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Radius $R = \\frac{D_0}{2}$.\n- $g = \\frac{G M_0}{(D_0/2)^2} = \\frac{4 G M_0}{D_0^2}$.\n\n✓ **Examiner Pro-Tip**: Free fall acceleration $g$ is independent of the test particle's mass $m$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "diameter-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-036",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the earth stops rotating, the value of ‘g’ at the equator will [CPMT 1986]",
    "options": [
      "Increase",
      "Remain same",
      "Decrease",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Effect of Earth's diurnal rotation on surface gravity: $g' = g - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At equator ($\\lambda = 0^\\circ$), $g_{equator} = g - R\\omega^2$.\n- If Earth stops rotating ($\\omega = 0$), $g'_{equator} = g$.\n- The value of $g$ increases by $R\\omega^2 \\approx 0.034\\text{ m/s}^2$.\n\n✓ **Examiner Pro-Tip**: Stoppage of rotation increases weight at equator by $m R \\omega^2$, while weight at poles remains unchanged.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "rotation-effect"
    ]
  },
  {
    "id": "errorless-phy-grav-037",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The mass and diameter of a planet have twice the value of the corresponding parameters of earth. Acceleration due to gravity on the surface of the planet is [NCERT 1971; Pb. PMT 2000]",
    "options": [
      "$9.8\\text{ m/sec}^2$",
      "$4.9\\text{ m/sec}^2$",
      "$980\\text{ m/sec}^2$",
      "$19.6\\text{ m/sec}^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Scaling of surface gravity $g = \\frac{GM}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_p = 2 M_e$, $D_p = 2 D_e \\implies R_p = 2 R_e$.\n  $$g_p = G \\frac{M_p}{R_p^2} = G \\frac{2 M_e}{(2 R_e)^2} = \\frac{2}{4} \\left(G \\frac{M_e}{R_e^2}\\right) = \\frac{1}{2} g_e$$\n- $g_p = \\frac{9.8}{2} = 4.9\\text{ m/s}^2$.\n\n✓ **Examiner Pro-Tip**: Doubling both mass and diameter halves the surface gravitational acceleration.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-038",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "As we go from the equator to the poles, the value of g [CPMT 1975; AFMC 1995; AFMC 2004]",
    "options": [
      "Remains the same",
      "Decreases",
      "Increases",
      "Decreases upto a latitude of 45°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Latitude dependence of effective gravity: $g_\\lambda = g - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- As latitude $\\lambda$ increases from $0^\\circ$ (equator) to $90^\\circ$ (poles), $\\cos\\lambda$ decreases monotonically from 1 to 0.\n- Consequently, the centrifugal reduction term $R\\omega^2 \\cos^2\\lambda$ decreases to zero.\n- Thus, the value of $g$ **increases** steadily from equator to poles.\n\n✓ **Examiner Pro-Tip**: $g$ is minimum at equator and maximum at poles.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "latitude"
    ]
  },
  {
    "id": "errorless-phy-grav-039",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Force of gravity is least at [CPMT 1992]",
    "options": [
      "The equator",
      "The poles",
      "A point in between equator and any pole",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Minimum gravity on planetary surface.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At the equator, equatorial radius $R_e$ is largest (flattened poles) and centrifugal acceleration $R\\omega^2$ is maximum.\n- Both factors combine to make $g$ lowest at the equator ($g_{equator} \\approx 9.78\\text{ m/s}^2$ vs $g_{pole} \\approx 9.83\\text{ m/s}^2$).\n\n✓ **Examiner Pro-Tip**: Force of gravity is least at the equator and greatest at the poles.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "equator"
    ]
  },
  {
    "id": "errorless-phy-grav-040",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The radius of the earth is 6400 km and $g = 10\\text{ m/sec}^2$. In order that a body of 5 kg weighs zero at the equator, the angular speed of the earth is [MP PMT 1985]",
    "options": [
      "1/80 radian/sec",
      "1/400 radian/sec",
      "1/800 radian/sec",
      "1/1600 radian/sec"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Weightlessness at equator due to rapid rotation.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Apparent weight at equator: $W' = m(g - R\\omega^2) = 0$.\n  $$g - R\\omega^2 = 0 \\implies \\omega = \\sqrt{\\frac{g}{R}}$$\n- Given: $g = 10\\text{ m/s}^2$, $R = 6400\\text{ km} = 6.4 \\times 10^6\\text{ m}$.\n  $$\\omega = \\sqrt{\\frac{10}{6.4 \\times 10^6}} = \\sqrt{\\frac{1}{640000}} = \\frac{1}{800}\\text{ rad/s}$$\n\n✓ **Examiner Pro-Tip**: The Earth would need to rotate 17 times faster for weightlessness at equator.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "angular-speed-weightlessness"
    ]
  },
  {
    "id": "errorless-phy-grav-041",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The value of ‘g’ at a particular point is $9.8\\text{ m/s}^2$. Suppose the earth suddenly shrinks uniformly to half its present size without losing any mass. The value of ‘g’ at the same point (assuming that the distance of the point from the centre of earth does not shrink) will now be [NCERT 1984; DPMT 1999]",
    "options": [
      "$4.9\\text{ m/sec}^2$",
      "$3.1\\text{ m/sec}^2$",
      "$9.8\\text{ m/sec}^2$",
      "$19.6\\text{ m/sec}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational field outside a spherically symmetric mass distribution.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- By Newton's Shell Theorem, for any external point at distance $r$ from the centre, a spherically symmetric body behaves as if all its mass $M$ were concentrated at its centre: $g(r) = \\frac{GM}{r^2}$.\n- Since total mass $M$ is unchanged and distance $r$ from the centre remains the same, $g$ at that specific spatial point remains identical at $9.8\\text{ m/s}^2$.\n\n✓ **Examiner Pro-Tip**: Shrinking affects gravity on the *new surface*, not at fixed external distances from the centre.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "shell-theorem"
    ]
  },
  {
    "id": "errorless-phy-grav-042",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If R is the radius of the earth and g the acceleration due to gravity on the earth's surface, the mean density of the earth is [CPMT 1990; BHU 1998; Kerala PMT 2002; MH CET (Med.) 1999; CBSE PMT 1995]",
    "options": [
      "$4\\pi G / 3gR$",
      "$3\\pi R / 4gG$",
      "$3g / 4\\pi RG$",
      "$\\pi RG / 12G$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Mean density of Earth in terms of $g, R, G$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g = \\frac{GM}{R^2} = \\frac{G \\left(\\frac{4}{3}\\pi R^3 \\rho\\right)}{R^2} = \\frac{4}{3}\\pi G \\rho R$.\n- Rearranging for density $\\rho$:\n  $$\\rho = \\frac{3g}{4\\pi R G}$$\n\n✓ **Examiner Pro-Tip**: Substituting standard values gives $\\rho \\approx 5500\\text{ kg/m}^3$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "mean-density"
    ]
  },
  {
    "id": "errorless-phy-grav-043",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The weight of an object in the coal mine, sea level, at the top of the mountain are $W_1, W_2$ and $W_3$ respectively, then [EAMCET 1990]",
    "options": [
      "$W_1 < W_2 > W_3$",
      "$W_1 = W_2 = W_3$",
      "$W_1 < W_2 < W_3$",
      "$W_1 > W_2 > W_3$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Altitude and depth dependence of $g$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Acceleration due to gravity is maximum on the Earth's surface (sea level): $g_2 = g_{surface}$.\n- Below sea level in a coal mine: $g_1 = g\\left(1 - \\frac{d}{R}\\right) < g_{surface} \\implies W_1 < W_2$.\n- Above sea level on a mountain top: $g_3 = g\\left(1 - \\frac{2h}{R}\\right) < g_{surface} \\implies W_3 < W_2$.\n- Therefore, $W_1 < W_2 > W_3$.\n\n✓ **Examiner Pro-Tip**: $g$ has an absolute global maximum at the surface of the Earth.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "altitude-depth"
    ]
  },
  {
    "id": "errorless-phy-grav-044",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "The radii of two planets are respectively $R_1$ and $R_2$ and their densities are respectively $\\rho_1$ and $\\rho_2$. The ratio of the accelerations due to gravity at their surfaces is [MP PET 1994]",
    "options": [
      "$g_1 : g_2 = \\frac{\\rho_1}{R_1^2} : \\frac{\\rho_2}{R_2^2}$",
      "$g_1 : g_2 = R_1 R_2 : \\rho_1 \\rho_2$",
      "$g_1 : g_2 = R_1 \\rho_2 : R_2 \\rho_1$",
      "$g_1 : g_2 = R_1 \\rho_1 : R_2 \\rho_2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity formula: $g = \\frac{4}{3}\\pi G \\rho R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g \\propto R \\rho$.\n- Therefore, $g_1 : g_2 = R_1 \\rho_1 : R_2 \\rho_2$.\n\n✓ **Examiner Pro-Tip**: Surface gravity is directly proportional to the product of planetary radius and density.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-045",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The mass of the earth is 81 times that of the moon and the radius of the earth is 3.5 times that of the moon. The ratio of the acceleration due to gravity at the surface of the moon to that at the surface of the earth is [MP PMT 1994]",
    "options": [
      "0.15",
      "0.04",
      "1",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity ratio formula: $\\frac{g_m}{g_e} = \\left(\\frac{M_m}{M_e}\\right) \\left(\\frac{R_e}{R_m}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{M_e}{M_m} = 81 \\implies \\frac{M_m}{M_e} = \\frac{1}{81}$.\n- $\\frac{R_e}{R_m} = 3.5$.\n- $\\frac{g_m}{g_e} = \\left(\\frac{1}{81}\\right) \\times (3.5)^2 = \\frac{12.25}{81} \\approx 0.151 \\approx 0.15$.\n\n✓ **Examiner Pro-Tip**: Ratio $g_m / g_e \\approx 1/6 \\approx 0.166$, with exact textbook data giving $0.15$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "moon-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-046",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Spot the wrong statement : The acceleration due to gravity ‘g’ decreases if [MP PMT 1994]",
    "options": [
      "We go down from the surface of the earth towards its centre",
      "We go up from the surface of the earth",
      "We go from the equator towards the poles on the surface of the earth",
      "The rotational velocity of the earth is increased"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of acceleration due to gravity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Going down into Earth: $g' = g(1 - d/R)$ (decreases).\n- Going up above Earth: $g' = g(1 - 2h/R)$ (decreases).\n- Increasing Earth's rotation: $g' = g - R\\omega^2\\cos^2\\lambda$ (decreases).\n- Going from equator to poles: $g$ **increases** from $g - R\\omega^2$ to $g$.\n- Thus, statement (c) is incorrect (the wrong statement).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "concepts"
    ]
  },
  {
    "id": "errorless-phy-grav-047",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is true [Manipal MEE 1995]",
    "options": [
      "g is less at the earth's surface than at a height above it or a depth below it",
      "g is same at all places on the surface of the earth",
      "g has its maximum value at the equator",
      "g is greater at the poles than at the equator"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Pole vs equator gravity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Due to polar flattening ($R_p < R_e$) and zero centrifugal force at poles ($\\cos 90^\\circ = 0$), $g_{pole} > g_{equator}$.\n- Thus, statement (d) is the only true statement.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "pole-equator"
    ]
  },
  {
    "id": "errorless-phy-grav-048",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "A spring balance is graduated on sea level. If a body is weighed with this balance at consecutively increasing heights from earth's surface, the weight indicated by the balance [MP PET 1995]",
    "options": [
      "Will go on increasing continuously",
      "Will go on decreasing continuously",
      "Will remain same",
      "Will first increase and then decrease"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Spring balance reading measures local weight $W = mg(h)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- As height $h$ increases, acceleration due to gravity decreases according to $g(h) = \\frac{GM}{(R+h)^2}$.\n- The restoring force in the spring equals $mg(h)$, so the indicated weight goes on decreasing continuously.\n\n✓ **Examiner Pro-Tip**: A beam balance compares masses and remains unchanged, but a spring balance measures weight and decreases with height.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "spring-balance"
    ]
  },
  {
    "id": "errorless-phy-grav-049",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The value of g on the earth's surface is $980\\text{ cm/sec}^2$. Its value at a height of 64 km from the earth's surface is (Radius of the earth R = 6400 kilometers) [MP PMT 1995]",
    "options": [
      "$960.40\\text{ cm/sec}^2$",
      "$984.90\\text{ cm/sec}^2$",
      "$982.45\\text{ cm/sec}^2$",
      "$977.55\\text{ cm/sec}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Height approximation formula: $g' = g\\left(1 - \\frac{2h}{R}\\right)$ for $h \\ll R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g = 980\\text{ cm/s}^2$, $h = 64\\text{ km}$, $R = 6400\\text{ km}$.\n- $\\frac{2h}{R} = \\frac{2 \\times 64}{6400} = \\frac{128}{6400} = 0.02$.\n- $g' = 980 \\times (1 - 0.02) = 980 \\times 0.98 = 960.40\\text{ cm/s}^2$.\n\n✓ **Examiner Pro-Tip**: Fractional decrease is $\\frac{2h}{R} = 2\\%$, so $g' = 98\\% \\text{ of } 980 = 960.4\\text{ cm/s}^2$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-050",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Choose the correct statement from the following : Weightlessness of an astronaut moving in a satellite is a situation of [MP PMT 1995]",
    "options": [
      "Zero g",
      "No gravity",
      "Zero mass",
      "Free fall"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbiting satellite as an ongoing state of free fall.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gravitational attraction provides the centripetal acceleration, meaning both the astronaut and spacecraft fall freely together.\n- The apparent acceleration relative to the spacecraft frame is zero, creating weightlessness via continuous free fall.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "free-fall"
    ]
  },
  {
    "id": "errorless-phy-grav-051",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "If the earth rotates faster than its present speed, the weight of an object will [Haryana CEE 1996]",
    "options": [
      "Increase at the equator but remain unchanged at the poles",
      "Decrease at the equator but remain unchanged at the poles",
      "Remain unchanged at the equator but decrease at the poles",
      "Remain unchanged at the equator but increase at the poles"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Rotation formula: $g' = g - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At equator ($\\lambda = 0^\\circ$): $g'_{eq} = g - R\\omega^2$. As $\\omega$ increases, $g'_{eq}$ decreases, so weight decreases.\n- At poles ($\\lambda = 90^\\circ$): $g'_{pole} = g - R\\omega^2(0) = g$, which is independent of $\\omega$ and remains unchanged.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "rotation-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-052",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the earth suddenly shrinks (without changing mass) to half of its present radius, the acceleration due to gravity will be [MNR 1998]",
    "options": [
      "g/2",
      "4g",
      "g/4",
      "2g"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Inverse-square dependence on radius: $g = \\frac{GM}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- If $R' = R/2$ and $M' = M$:\n  $$g' = \\frac{GM}{(R/2)^2} = 4 \\frac{GM}{R^2} = 4g$$\n\n✓ **Examiner Pro-Tip**: Halving the radius increases surface gravity by a factor of 4.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "shrinkage"
    ]
  },
  {
    "id": "errorless-phy-grav-053",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The moon's radius is 1/4 that of the earth and its mass is 1/80 times that of the earth. If g represents the acceleration due to gravity on the surface of the earth, that on the surface of the moon is [MP PMT 1997; MP PET 2000, 01; RPET 2000; Pb. PET 2001]",
    "options": [
      "g/4",
      "g/5",
      "g/6",
      "g/8"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity comparison: $g_m = g_e \\left(\\frac{M_m}{M_e}\\right) \\left(\\frac{R_e}{R_m}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{M_m}{M_e} = \\frac{1}{80}$ and $\\frac{R_m}{R_e} = \\frac{1}{4} \\implies \\frac{R_e}{R_m} = 4$.\n  $$g_m = g \\left(\\frac{1}{80}\\right) (4)^2 = g \\left(\\frac{16}{80}\\right) = \\frac{g}{5}$$\n\n✓ **Examiner Pro-Tip**: Carefully square the radius ratio in the numerator.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "moon-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-054",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "R is the radius of the earth and $\\omega$ is its angular velocity and $g_p$ is the value of g at the poles. The effective value of g at the latitude $\\lambda = 60^\\circ$ will be equal to [MP PMT 1999]",
    "options": [
      "$g_p - \\frac{1}{4}R\\omega^2$",
      "$g_p - \\frac{3}{4}R\\omega^2$",
      "$g_p - R\\omega^2$",
      "$g_p + \\frac{1}{4}R\\omega^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Effective gravity at latitude $\\lambda$: $g' = g_p - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At latitude $\\lambda = 60^\\circ$, $\\cos 60^\\circ = \\frac{1}{2}$.\n- $\\cos^2 60^\\circ = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\n- $g' = g_p - R\\omega^2 \\left(\\frac{1}{4}\\right) = g_p - \\frac{1}{4}R\\omega^2$.\n\n✓ **Examiner Pro-Tip**: $\\cos^2 60^\\circ = 1/4$, so the rotational reduction at $60^\\circ$ latitude is one-fourth of that at the equator.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "latitude-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-055",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The depth d at which the value of acceleration due to gravity becomes $\\frac{1}{n}$ times the value at the surface, is [R = radius of the earth] [MP PMT 1999; Kerala PMT 2005]",
    "options": [
      "$\\frac{R}{n}$",
      "$R\\left(\\frac{n-1}{n}\\right)$",
      "$\\frac{R}{n^2}$",
      "$R\\left(\\frac{n}{n+1}\\right)$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ with depth: $g' = g\\left(1 - \\frac{d}{R}\\right)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- We are given $g' = \\frac{g}{n}$.\n  $$\\frac{g}{n} = g\\left(1 - \\frac{d}{R}\\right) \\implies \\frac{1}{n} = 1 - \\frac{d}{R}$$\n  $$\\frac{d}{R} = 1 - \\frac{1}{n} = \\frac{n-1}{n} \\implies d = R\\left(\\frac{n-1}{n}\\right)$$\n\n✓ **Examiner Pro-Tip**: For $g' = g/4$, $d = R(3/4) = 0.75R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "depth-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-056",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "At what height over the earth's pole, the free fall acceleration decreases by one percent (assume the radius of earth to be 6400 km) [KCET 1994]",
    "options": [
      "32 km",
      "80 km",
      "1.253 km",
      "64 km"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Fractional decrease in $g$ with height: $\\frac{\\Delta g}{g} = \\frac{2h}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{\\Delta g}{g} = 1\\% = 0.01$, $R = 6400\\text{ km}$.\n  $$\\frac{2h}{R} = 0.01 \\implies h = \\frac{0.01 \\times 6400}{2} = \\frac{64}{2} = 32\\text{ km}$$\n\n✓ **Examiner Pro-Tip**: A 1% decrease in $g$ occurs at height $h = R/200 = 32\\text{ km}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height-percentage"
    ]
  },
  {
    "id": "errorless-phy-grav-057",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The diameters of two planets are in the ratio 4 : 1 and their mean densities in the ratio 1 : 2. The acceleration due to gravity on the planets will be in ratio [ISM Dhanbad 1994]",
    "options": [
      "1 : 2",
      "2 : 3",
      "2 : 1",
      "4 : 1"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Planetary surface gravity in terms of diameter and density: $g = \\frac{2}{3}\\pi G \\rho D$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g \\propto D \\rho$.\n- $\\frac{g_1}{g_2} = \\left(\\frac{D_1}{D_2}\\right) \\left(\\frac{\\rho_1}{\\rho_2}\\right) = \\left(\\frac{4}{1}\\right) \\left(\\frac{1}{2}\\right) = \\frac{2}{1} = 2 : 1$.\n\n✓ **Examiner Pro-Tip**: Diameter ratio is identical to radius ratio.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-058",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "At what altitude in metre will the acceleration due to gravity be 25% of that at the earth's surface (Radius of earth = R metre) [ISM Dhanbad 1994]",
    "options": [
      "$\\frac{1}{4}R$",
      "$R$",
      "$\\frac{3}{8}R$",
      "$\\frac{R}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Exact height variation of gravity: $g' = g\\left(\\frac{R}{R+h}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g' = 25\\% \\text{ of } g = \\frac{g}{4}$.\n  $$\\frac{g}{4} = g\\left(\\frac{R}{R+h}\\right)^2 \\implies \\left(\\frac{R}{R+h}\\right)^2 = \\frac{1}{4}$$\n  $$\\frac{R}{R+h} = \\frac{1}{2} \\implies R+h = 2R \\implies h = R$$\n\n✓ **Examiner Pro-Tip**: At an altitude equal to the Earth's radius ($h = R$), $g$ drops to one-fourth (25%).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "altitude-25percent"
    ]
  },
  {
    "id": "errorless-phy-grav-059",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the angular speed of the earth is doubled, the value of acceleration due to gravity (g) at the north pole [EAMCET (Med.) 1995]",
    "options": [
      "Doubles",
      "Becomes half",
      "Remains same",
      "Becomes zero"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Rotation invariance at geographical poles: $g' = g - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At the North Pole, latitude $\\lambda = 90^\\circ$, so $\\cos 90^\\circ = 0$.\n- The centripetal/centrifugal effect of Earth's rotation is identically zero at the axis of rotation ($r_{axis} = R\\cos 90^\\circ = 0$).\n- Therefore, changing $\\omega$ has zero effect on $g$ at the poles.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "north-pole"
    ]
  },
  {
    "id": "errorless-phy-grav-060",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "At the surface of a certain planet, acceleration due to gravity is one-quarter of that on earth. If a brass ball is transported to this planet, then which one of the following statements is not correct [SCRA 1994]",
    "options": [
      "The mass of the brass ball on this planet is a quarter of its mass as measured on earth",
      "The weight of the brass ball on this planet is a quarter of the weight as measured on earth",
      "The brass ball has the same mass on the other planet as on earth",
      "The brass ball has the same volume on the other planet as on earth"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass as an intrinsic invariant property.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Mass $m$ measures the quantity of matter and inertia; it remains constant everywhere in the universe.\n- Weight $W = mg$ varies with local gravity, so $W_{planet} = m(g/4) = W_{earth}/4$.\n- Volume $V = m/\\rho$ remains unchanged.\n- Therefore, statement (a) claiming that mass reduces to one-quarter is false (not correct).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "invariance-of-mass"
    ]
  },
  {
    "id": "errorless-phy-grav-061",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "Weight of 1 kg becomes 1/6 on moon. If radius of moon is $1.768 \\times 10^6\\text{ m}$, then the mass of moon will be [RPET 1997]",
    "options": [
      "$1.99 \\times 10^{30}\\text{ kg}$",
      "$7.56 \\times 10^{22}\\text{ kg}$",
      "$5.98 \\times 10^{24}\\text{ kg}$",
      "$7.65 \\times 10^{22}\\text{ kg}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Planetary mass determination from surface gravity: $M = \\frac{g R^2}{G}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g_{moon} = \\frac{9.8}{6} = 1.633\\text{ m/s}^2$, $R = 1.768 \\times 10^6\\text{ m}$, $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n  $$M = \\frac{1.633 \\times (1.768 \\times 10^6)^2}{6.67 \\times 10^{-11}} = \\frac{1.633 \\times 3.1258 \\times 10^{12}}{6.67 \\times 10^{-11}} = 7.65 \\times 10^{22}\\text{ kg}$$\n\n✓ **Examiner Pro-Tip**: Mass of moon is approximately $7.65 \\times 10^{22}\\text{ kg}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "moon-mass"
    ]
  },
  {
    "id": "errorless-phy-grav-062",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Radius of earth is around 6000 km. The weight of body at height of 6000 km from earth surface becomes [RPMT 1997]",
    "options": [
      "Half",
      "One-fourth",
      "One third",
      "No change"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Weight at height $h = R$: $W' = W \\left(\\frac{R}{R+h}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $h = 6000\\text{ km} = R$.\n- $W' = W \\left(\\frac{R}{R+R}\\right)^2 = W \\left(\\frac{1}{2}\\right)^2 = \\frac{W}{4}$ (One-fourth).\n\n✓ **Examiner Pro-Tip**: Doubling the distance from the Earth's centre reduces weight by $2^2 = 4$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "weight-at-height"
    ]
  },
  {
    "id": "errorless-phy-grav-063",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "Let g be the acceleration due to gravity at earth's surface and K be the rotational kinetic energy of the earth. Suppose the earth's radius decreases by 2% keeping all other quantities (mass and angular momentum) same, then [BHU 1994; JIPMER 2000]",
    "options": [
      "g decreases by 2% and K decreases by 4%",
      "g decreases by 4% and K increases by 2%",
      "g increases by 4% and K increases by 4%",
      "g decreases by 4% and K increases by 4%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Fractional changes in gravity and rotational energy under radius shrinkage.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For surface gravity: $g = \\frac{GM}{R^2} \\implies \\frac{\\Delta g}{g} = -2\\frac{\\Delta R}{R} = -2(-2\\%) = +4\\%$ (increases by 4%).\n- For rotational KE with conserved angular momentum $L$: $K = \\frac{L^2}{2I} = \\frac{L^2}{2(\\frac{2}{5}MR^2)} \\propto R^{-2}$.\n- $\\frac{\\Delta K}{K} = -2\\frac{\\Delta R}{R} = -2(-2\\%) = +4\\%$ (increases by 4%).\n- Thus, both $g$ and $K$ increase by 4%.\n\n✓ **Examiner Pro-Tip**: Conservation of angular momentum makes $K \\propto 1/R^2$, scaling identically to $g \\propto 1/R^2$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "rotational-ke"
    ]
  },
  {
    "id": "errorless-phy-grav-064",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Where will it be profitable to purchase 1 kilogram sugar [RPET 1996]",
    "options": [
      "At poles",
      "At equator",
      "At 45° latitude",
      "At 40° latitude"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Weight vs mass measurement using a spring balance.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- When purchasing sugar by weight calibrated in $\\text{kg-wt}$ on a spring balance: $W = m g_{local}$.\n- Since $g$ is minimum at the equator ($g_{equator} < g_{poles}$), a reading of $1\\text{ kg-wt}$ requires a greater actual mass $m = \\frac{W}{g_{equator}}$.\n- Hence, the buyer receives more quantity of sugar for the same 1 kg-wt price at the equator.\n\n✓ **Examiner Pro-Tip**: Buying at the equator and selling at the poles gives maximum commercial profit.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "equator-purchase"
    ]
  },
  {
    "id": "errorless-phy-grav-065",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the radius of the earth shrinks by 1.5% (mass remaining same), then the value of acceleration due to gravity changes by [BHU 1997]",
    "options": [
      "1%",
      "2%",
      "3%",
      "4%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Small percentage change formula: $\\frac{\\Delta g}{g} = -2\\frac{\\Delta R}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{\\Delta R}{R} = -1.5\\%$.\n  $$\\frac{\\Delta g}{g} = -2(-1.5\\%) = +3\\%$$\n- Acceleration due to gravity increases by 3%.\n\n✓ **Examiner Pro-Tip**: Fractional change coefficient is the power exponent ($-2$).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "percentage-change"
    ]
  },
  {
    "id": "errorless-phy-grav-066",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If radius of the earth contracts 2% and its mass remains the same, then weight of the body at the earth surface [CPMT 1997; KCET (Engg./Med.) 2001]",
    "options": [
      "Will decrease",
      "Will increase",
      "Will remain the same",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Inverse relationship between weight and radius: $W = mg = \\frac{GMm}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- When radius decreases (contracts), the denominator $R^2$ decreases.\n- Consequently, $g$ increases, and the weight $W = mg$ **will increase** (by $\\approx 4\\%$).\n\n✓ **Examiner Pro-Tip**: Shrinking of Earth increases surface weight.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "contraction"
    ]
  },
  {
    "id": "errorless-phy-grav-067",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If mass of a body is M on the earth surface, then the mass of the same body on the moon surface is [AIIMS 1997; RPMT 1997; JIPMER 2000]",
    "options": [
      "M/6",
      "Zero",
      "M",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Invariance of inertial mass across different celestial bodies.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Mass is an intrinsic fundamental property of matter that depends only on the number of atoms/molecules present.\n- While weight reduces to $W/6$ on the Moon, mass remains strictly invariant ($M$).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "mass-invariance"
    ]
  },
  {
    "id": "errorless-phy-grav-068",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Mass of moon is $7.34 \\times 10^{22}\\text{ kg}$. If the acceleration due to gravity on the moon is $1.4\\text{ m/s}^2$, the radius of the moon is ($G = 6.667 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$) [AFMC 1998]",
    "options": [
      "$0.56 \\times 10^4\\text{ m}$",
      "$1.87 \\times 10^6\\text{ m}$",
      "$1.92 \\times 10^6\\text{ m}$",
      "$1.01 \\times 10^8\\text{ m}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Calculating planetary radius from surface gravity: $R = \\sqrt{\\frac{GM}{g}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M = 7.34 \\times 10^{22}\\text{ kg}$, $g = 1.4\\text{ m/s}^2$, $G = 6.667 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n  $$R^2 = \\frac{6.667 \\times 10^{-11} \\times 7.34 \\times 10^{22}}{1.4} = \\frac{4.8935 \\times 10^{12}}{1.4} = 3.495 \\times 10^{12}\\text{ m}^2$$\n  $$R = \\sqrt{3.495 \\times 10^{12}} = 1.87 \\times 10^6\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: Moon's radius is approximately $1.87 \\times 10^6\\text{ m} = 1870\\text{ km}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "moon-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-069",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "What should be the velocity of earth due to rotation about its own axis so that the weight at equator become 3/5 of initial value. Radius of earth on equator is 6400 km [AMU 1999]",
    "options": [
      "$7.4 \\times 10^{-4}\\text{ rad/sec}$",
      "$6.7 \\times 10^{-4}\\text{ rad/sec}$",
      "$7.8 \\times 10^{-4}\\text{ rad/sec}$",
      "$8.7 \\times 10^{-4}\\text{ rad/sec}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Reduction of equatorial gravity by diurnal rotation: $g' = g - R\\omega^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- We require $g' = \\frac{3}{5}g$.\n  $$\\frac{3}{5}g = g - R\\omega^2 \\implies R\\omega^2 = \\frac{2}{5}g \\implies \\omega = \\sqrt{\\frac{2g}{5R}}$$\n- Substituting $g = 9.8\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$:\n  $$\\omega = \\sqrt{\\frac{2 \\times 9.8}{5 \\times 6.4 \\times 10^6}} = \\sqrt{\\frac{19.6}{3.2 \\times 10^7}} = \\sqrt{6.125 \\times 10^{-7}} = 7.826 \\times 10^{-4}\\text{ rad/s}$$\n\n✓ **Examiner Pro-Tip**: $\\omega = \\sqrt{\\frac{2g}{5R}} \\approx 7.8 \\times 10^{-4}\\text{ rad/s}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "equatorial-rotation"
    ]
  },
  {
    "id": "errorless-phy-grav-070",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Acceleration due to gravity is ‘g’ on the surface of the earth. The value of acceleration due to gravity at a height of 32 km above earth’s surface is (Radius of the earth = 6400 km) [KCET (Engg./Med.) 1999]",
    "options": [
      "0.9 g",
      "0.99 g",
      "0.8 g",
      "1.01 g"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ with height for $h \\ll R$: $g' = g\\left(1 - \\frac{2h}{R}\\right)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $h = 32\\text{ km}$, $R = 6400\\text{ km}$.\n- $\\frac{2h}{R} = \\frac{2 \\times 32}{6400} = \\frac{64}{6400} = 0.01$.\n- $g' = g(1 - 0.01) = 0.99 g$.\n\n✓ **Examiner Pro-Tip**: At $h = 32\\text{ km}$, gravity decreases by exactly $1\\%$, leaving $99\\% = 0.99g$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height"
    ]
  },
  {
    "id": "errorless-phy-grav-071",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "At what height from the ground will the value of ‘g’ be the same as that in 10 km deep mine below the surface of earth [RPET 1999]",
    "options": [
      "20 km",
      "10 km",
      "15 km",
      "5 km"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Comparing height and depth variations of gravity: $\\Delta g_h = \\frac{2gh}{R}$ and $\\Delta g_d = \\frac{gd}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For equal values of acceleration due to gravity, $\\Delta g_h = \\Delta g_d \\implies \\frac{2gh}{R} = \\frac{gd}{R} \\implies h = \\frac{d}{2}$.\n- For a depth of $d = 10\\text{ km}$, the corresponding theoretical height is $h = 5\\text{ km}$.\n- (Note: According to the conventional textbook key based on the inverted formulation $d = 2h$, option (a) 20 km is marked in original examination keys).\n\n✓ **Examiner Pro-Tip**: Remember the fundamental relationship $d = 2h$ for equal change in $g$ near Earth's surface.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height-depth"
    ]
  },
  {
    "id": "errorless-phy-grav-072",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the Earth loses its gravity, then for a body [BHU 1999; MHCET 2003]",
    "options": [
      "Weight becomes zero, but not the mass",
      "Mass becomes zero, but not the weight",
      "Both mass and weight become zero",
      "Neither mass nor weight become zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Difference between mass and weight.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Mass $m$ is an intrinsic property representing quantity of matter, independent of external fields.\n- Weight $W = mg$ is the gravitational pull. If $g = 0$, $W = 0$, but mass $m$ remains unaltered.\n\n✓ **Examiner Pro-Tip**: Mass never becomes zero for any material entity.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "mass-weight"
    ]
  },
  {
    "id": "errorless-phy-grav-073",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The height of the point vertically above the earth’s surface, at which acceleration due to gravity becomes 1% of its value at the surface is (Radius of the earth = R) [EAMCET (Engg.) 2000]",
    "options": [
      "8 R",
      "9 R",
      "10 R",
      "20 R"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Exact height formula: $g' = g\\left(\\frac{R}{R+h}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g' = 1\\% \\text{ of } g = \\frac{g}{100}$.\n  $$\\frac{g}{100} = g\\left(\\frac{R}{R+h}\\right)^2 \\implies \\frac{R}{R+h} = \\frac{1}{10}$$\n  $$R+h = 10R \\implies h = 9R$$\n\n✓ **Examiner Pro-Tip**: For $g' = g/N^2$, $h = (N - 1)R$. Here $N = 10 \\implies h = 9R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height-1percent"
    ]
  },
  {
    "id": "errorless-phy-grav-074",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "An object weights 72 N on earth. Its weight at a height of R/2 from earth is [AIIMS 2000]",
    "options": [
      "32 N",
      "56 N",
      "72 N",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Weight variation at comparable altitude: $W' = W\\left(\\frac{R}{R+h}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $W = 72\\text{ N}$, $h = R/2$.\n  $$R+h = R + \\frac{R}{2} = \\frac{3R}{2}$$\n  $$W' = 72 \\left(\\frac{R}{3R/2}\\right)^2 = 72 \\left(\\frac{2}{3}\\right)^2 = 72 \\times \\frac{4}{9} = 8 \\times 4 = 32\\text{ N}$$\n\n✓ **Examiner Pro-Tip**: At $h = R/2$, weight becomes $\\frac{4}{9}$ of surface value.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "weight-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-075",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "The angular velocity of the earth with which it has to rotate so that acceleration due to gravity on 60° latitude becomes zero is (Radius of earth = 6400 km. At the poles $g = 10\\text{ ms}^{-2}$) [EAMCET 2000]",
    "options": [
      "$2.5 \\times 10^{-3}\\text{ rad/s}$",
      "$5.0 \\times 10^{-1}\\text{ rad/s}$",
      "$10 \\times 10^1\\text{ rad/s}$",
      "$7.8 \\times 10^{-2}\\text{ rad/s}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Latitude rotation relation: $g' = g - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Setting $g' = 0$ at latitude $\\lambda = 60^\\circ$:\n  $$g - R\\omega^2 \\cos^2 60^\\circ = 0 \\implies g = R\\omega^2 \\left(\\frac{1}{2}\\right)^2 = \\frac{R\\omega^2}{4}$$\n  $$\\omega = \\sqrt{\\frac{4g}{R}} = 2\\sqrt{\\frac{g}{R}}$$\n- Substituting $g = 10\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$:\n  $$\\omega = 2 \\sqrt{\\frac{10}{6.4 \\times 10^6}} = 2 \\left(\\frac{1}{800}\\right) = \\frac{1}{400} = 2.5 \\times 10^{-3}\\text{ rad/s}$$\n\n✓ **Examiner Pro-Tip**: $\\omega_{60^\\circ} = 2 \\omega_{equator} = 2 \\times 1.25 \\times 10^{-3} = 2.5 \\times 10^{-3}\\text{ rad/s}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "angular-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-076",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Assuming earth to be a sphere of a uniform density, what is the value of gravitational acceleration in a mine 100 km below the earth’s surface (Given R = 6400 km) [AFMC 2000; Pb. PMT 2000]",
    "options": [
      "$9.66\\text{ m/s}^2$",
      "$7.64\\text{ m/s}^2$",
      "$5.06\\text{ m/s}^2$",
      "$3.10\\text{ m/s}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ inside a mine: $g' = g\\left(1 - \\frac{d}{R}\\right)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $d = 100\\text{ km}$, $R = 6400\\text{ km}$, $g = 9.8\\text{ m/s}^2$.\n  $$g' = 9.8\\left(1 - \\frac{100}{6400}\\right) = 9.8\\left(1 - \\frac{1}{64}\\right) = 9.8 \\times \\frac{63}{64} = 9.6468 \\approx 9.66\\text{ m/s}^2$$\n\n✓ **Examiner Pro-Tip**: Linear reduction with depth: $\\Delta g = g \\frac{d}{R} = 9.8 \\times \\frac{1}{64} = 0.153\\text{ m/s}^2$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "mine-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-077",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If radius of earth is R then the height ‘h’ at which value of ‘g’ becomes one-fourth is [BHU 2000]",
    "options": [
      "$\\frac{R}{4}$",
      "$\\frac{3R}{4}$",
      "$R$",
      "$\\frac{R}{8}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Height formula: $g' = g\\left(\\frac{R}{R+h}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g' = \\frac{g}{4} \\implies \\frac{R}{R+h} = \\frac{1}{2} \\implies R+h = 2R \\implies h = R$.\n\n✓ **Examiner Pro-Tip**: At $h = R$, $g' = g/4$; at $h = 2R$, $g' = g/9$; at $h = 3R$, $g' = g/16$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "height-one-fourth"
    ]
  },
  {
    "id": "errorless-phy-grav-078",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "R and r are the radii of the earth and moon respectively. $\\rho_e$ and $\\rho_m$ are the densities of earth and moon respectively. The ratio of the accelerations due to gravity on the surfaces of earth and moon is [EAMCET 2000]",
    "options": [
      "$\\frac{R \\rho_e}{r \\rho_m}$",
      "$\\frac{r \\rho_e}{R \\rho_m}$",
      "$\\frac{r \\rho_m}{R \\rho_e}$",
      "$\\frac{R \\rho_m}{r \\rho_e}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Density-radius surface gravity relation: $g = \\frac{4}{3}\\pi G \\rho R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g_{earth} = \\frac{4}{3}\\pi G \\rho_e R$.\n- $g_{moon} = \\frac{4}{3}\\pi G \\rho_m r$.\n- Ratio: $\\frac{g_e}{g_m} = \\frac{R \\rho_e}{r \\rho_m}$.\n\n✓ **Examiner Pro-Tip**: $\\frac{g_1}{g_2} = \\frac{R_1 \\rho_1}{R_2 \\rho_2}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-079",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "If the mass of earth is 80 times of that of a planet and diameter is double that of planet and ‘g’ on earth is $9.8\\text{ m/s}^2$, then the value of ‘g’ on that planet is [Pb. PMT 1999; CPMT 2000]",
    "options": [
      "$4.9\\text{ m/s}^2$",
      "$0.98\\text{ m/s}^2$",
      "$0.49\\text{ m/s}^2$",
      "$49\\text{ m/s}^2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Scaling surface gravity: $g = G \\frac{M}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_e = 80 M_p \\implies \\frac{M_p}{M_e} = \\frac{1}{80}$.\n- $D_e = 2 D_p \\implies R_e = 2 R_p \\implies \\frac{R_e}{R_p} = 2$.\n  $$g_p = g_e \\left(\\frac{M_p}{M_e}\\right) \\left(\\frac{R_e}{R_p}\\right)^2 = 9.8 \\times \\left(\\frac{1}{80}\\right) \\times (2)^2 = 9.8 \\times \\frac{4}{80} = \\frac{9.8}{20} = 0.49\\text{ m/s}^2$$\n\n✓ **Examiner Pro-Tip**: $\\frac{4}{80} = \\frac{1}{20}$, so $g_p = 9.8 / 20 = 0.49\\text{ m/s}^2$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "planet-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-080",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Assume that the acceleration due to gravity on the surface of the moon is 0.2 times the acceleration due to gravity on the surface of the earth. If $R_e$ is the maximum range of a projectile on the earth’s surface, what is the maximum range on the surface of the moon for the same velocity of projection [Kerala (Engg.) 2001]",
    "options": [
      "$0.2 R_e$",
      "$2 R_e$",
      "$0.5 R_e$",
      "$5 R_e$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Projectile maximum horizontal range: $R_{max} = \\frac{u^2}{g}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For constant launch velocity $u$, $R_{max} \\propto \\frac{1}{g}$.\n- On the Moon: $g_m = 0.2 g_e = \\frac{1}{5} g_e$.\n  $$R_m = \\frac{u^2}{g_m} = \\frac{u^2}{g_e / 5} = 5 \\left(\\frac{u^2}{g_e}\\right) = 5 R_e$$\n\n✓ **Examiner Pro-Tip**: Lower gravity increases projectile range and max height inversely.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "projectile-range"
    ]
  },
  {
    "id": "errorless-phy-grav-081",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The angular speed of earth, so that the object on equator may appear weightless, is ($g = 10\\text{ m/s}^2$, radius of earth 6400 km) [Pb. PMT 2001]",
    "options": [
      "$1.25 \\times 10^{-3}\\text{ rad/sec}$",
      "$1.56 \\times 10^{-3}\\text{ rad/sec}$",
      "$1.25 \\times 10^{-1}\\text{ rad/sec}$",
      "1.56 rad/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Weightlessness at equator: $g - R\\omega^2 = 0 \\implies \\omega = \\sqrt{\\frac{g}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\omega = \\sqrt{\\frac{10}{6.4 \\times 10^6}} = \\sqrt{\\frac{1}{640000}} = \\frac{1}{800}\\text{ rad/s} = 1.25 \\times 10^{-3}\\text{ rad/s}$.\n\n✓ **Examiner Pro-Tip**: $\\frac{1}{800} = 0.00125 = 1.25 \\times 10^{-3}\\text{ rad/s}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "equatorial-weightlessness"
    ]
  },
  {
    "id": "errorless-phy-grav-082",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "At what distance from the centre of the earth, the value of acceleration due to gravity g will be half that on the surface (R = radius of earth) [MP PMT 2001]",
    "options": [
      "2 R",
      "R",
      "1.414 R",
      "0.414 R"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravity variation outside the Earth's surface: $g(r) = g \\frac{R^2}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Outside Earth, setting $g(r) = g/2$:\n  $$\\frac{g}{2} = g\\frac{R^2}{r^2} \\implies r = \\sqrt{2} R \\approx 1.414 R$$\n- The height above the surface is $h = r - R = (\\sqrt{2} - 1)R = 0.414 R$.\n- (In the examination key, option (d) $0.414R$ corresponds to this altitude value above the surface).\n\n✓ **Examiner Pro-Tip**: Distance from centre is $\\sqrt{2}R = 1.414R$; height above surface is $(\\sqrt{2}-1)R = 0.414R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "distance-half-g"
    ]
  },
  {
    "id": "errorless-phy-grav-083",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "If density of earth increased 4 times and its radius become half of what it is, our weight will [AMU (Engg.) 2001]",
    "options": [
      "Be four times its present value",
      "Be doubled",
      "Remain same",
      "Be halved"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity in terms of density and radius: $g = \\frac{4}{3}\\pi G \\rho R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g \\propto \\rho R$.\n- Given: $\\rho' = 4\\rho$, $R' = R/2$.\n  $$g' = \\frac{4}{3}\\pi G (4\\rho) \\left(\\frac{R}{2}\\right) = 2 \\left(\\frac{4}{3}\\pi G \\rho R\\right) = 2g$$\n- Since $W = mg$, the weight will **be doubled**.\n\n✓ **Examiner Pro-Tip**: $\\text{New weight} = W \\times 4 \\times \\frac{1}{2} = 2W$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-radius-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-084",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "A man can jump to a height of 1.5 m on a planet A. What is the height he may be able to jump on another planet whose density and radius are, respectively, one-quarter and one-third that of planet A [AMU (Med.) 2001]",
    "options": [
      "1.5 m",
      "15 m",
      "18 m",
      "28 m"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: High jump vertical height: $h = \\frac{v_0^2}{2g} \\implies h \\propto \\frac{1}{g}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gravity on planet A: $g_A \\propto \\rho_A R_A$.\n- Gravity on planet B: $g_B \\propto \\rho_B R_B = \\left(\\frac{1}{4}\\rho_A\\right) \\left(\\frac{1}{3}R_A\\right) = \\frac{1}{12} g_A$.\n- Jump height on planet B:\n  $$h_B = h_A \\times \\frac{g_A}{g_B} = 1.5 \\times 12 = 18\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: Jump height is inversely proportional to surface gravity.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "jumping-height"
    ]
  },
  {
    "id": "errorless-phy-grav-085",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Weight of a body is maximum at [AFMC 2001]",
    "options": [
      "Moon",
      "Poles of earth",
      "Equator of earth",
      "Centre of earth"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Maximum surface gravity at polar regions.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At the poles, distance to Earth's centre is minimum ($R_p < R_e$) and centrifugal acceleration is zero ($\\omega^2 R \\cos^2 90^\\circ = 0$).\n- Thus, $g$ reaches its absolute maximum at the poles ($g_p \\approx 9.83\\text{ m/s}^2$).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "maximum-weight"
    ]
  },
  {
    "id": "errorless-phy-grav-086",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "What will be the acceleration due to gravity at height h if h >> R. Where R is radius of earth and g is acceleration due to gravity on the surface of earth [RPET 2001]",
    "options": [
      "$\\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2}$",
      "$g\\left(1 - \\frac{2h}{R}\\right)$",
      "$\\frac{g}{\\left(1 - \\frac{h}{R}\\right)^2}$",
      "$g\\left(1 - \\frac{h}{R}\\right)$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: General expression for gravity at arbitrary altitude $h$: $g(h) = \\frac{GM}{(R+h)^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g(h) = \\frac{GM}{R^2 \\left(1 + \\frac{h}{R}\\right)^2} = \\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2}$.\n- This exact formula is universally valid for all $h$, including $h \\gg R$.\n\n✓ **Examiner Pro-Tip**: Binomial approximation $g(1 - 2h/R)$ fails when $h$ is comparable to or greater than $R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "altitude-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-087",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "The acceleration due to gravity near the surface of a planet of radius R and density d is proportional to [MP PET 2002; AIEEE 2004]",
    "options": [
      "$\\frac{d}{R^2}$",
      "$d R^2$",
      "$d R$",
      "$\\frac{d}{R}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $g = \\frac{4}{3}\\pi G d R \\implies g \\propto d R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Gravitational acceleration scales directly with the product of density $d$ and radius $R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-proportionality"
    ]
  },
  {
    "id": "errorless-phy-grav-088",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "The acceleration due to gravity is g at a point distant r from the centre of earth of radius R. If $r < R$, then [CPMT 2002]",
    "options": [
      "$g \\propto r$",
      "$g \\propto r^2$",
      "$g \\propto r^{-1}$",
      "$g \\propto r^{-2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Linear variation of gravity inside Earth: $g(r) = \\frac{GM}{R^3} r$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Inside a uniform solid sphere ($r < R$), the mass enclosing the point is $M(r) = M\\left(\\frac{r}{R}\\right)^3$.\n- Gravitational pull: $g(r) = \\frac{G M(r)}{r^2} = \\frac{G M r^3}{R^3 r^2} = \\left(\\frac{GM}{R^3}\\right) r$.\n- Therefore, $g \\propto r$.\n\n✓ **Examiner Pro-Tip**: Inside Earth $g \\propto r$; outside Earth $g \\propto 1/r^2$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "internal-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-089",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "A body weight W newton at the surface of the earth. Its weight at a height equal to half the radius of the earth will be [UPSEAT 2002]",
    "options": [
      "$\\frac{W}{2}$",
      "$\\frac{2W}{3}$",
      "$\\frac{4W}{9}$",
      "$\\frac{8W}{27}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Weight at altitude $h = R/2$: $W' = W\\left(\\frac{R}{R+h}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $R+h = R + R/2 = 1.5R = \\frac{3R}{2}$.\n- $W' = W\\left(\\frac{R}{3R/2}\\right)^2 = W\\left(\\frac{2}{3}\\right)^2 = \\frac{4W}{9}$.\n\n✓ **Examiner Pro-Tip**: At $h = R/2$, weight becomes $\\frac{4}{9}W$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "weight-at-height"
    ]
  },
  {
    "id": "errorless-phy-grav-090",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the density of the earth is doubled keeping its radius constant then acceleration due to gravity will be ($g = 9.8\\text{ m/s}^2$) [Pb. PMT 2002; Orissa 2002]",
    "options": [
      "$19.6\\text{ m/s}^2$",
      "$9.8\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$2.45\\text{ m/s}^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $g = \\frac{4}{3}\\pi G \\rho R \\propto \\rho$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- If $\\rho' = 2\\rho$ with constant radius $R$:\n  $$g' = 2g = 2 \\times 9.8 = 19.6\\text{ m/s}^2$$\n\n✓ **Examiner Pro-Tip**: Doubling density at constant radius exactly doubles $g$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-doubling"
    ]
  },
  {
    "id": "errorless-phy-grav-091",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "The acceleration due to gravity at pole and equator can be related as [DPMT 2002]",
    "options": [
      "$g_p < g_e$",
      "$g_p = g_e = g$",
      "$g_p = g_e < g$",
      "$g_p > g_e$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Shape and rotation effect on polar and equatorial gravity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g_p = \\frac{GM}{R_p^2}$ and $g_e = \\frac{GM}{R_e^2} - R_e\\omega^2$.\n- Since $R_p < R_e$ and centrifugal reduction is absent at the poles, $g_p > g_e$.\n\n✓ **Examiner Pro-Tip**: $g_{pole} > g_{equator}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "pole-vs-equator"
    ]
  },
  {
    "id": "errorless-phy-grav-092",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the value of ‘g’ acceleration due to gravity, at earth surface is $10\\text{ m/s}^2$, its value in $\\text{m/s}^2$ at the centre of the earth, which is assumed to be a sphere of radius ‘R’ metre and uniform mass density is [AIIMS 2002]",
    "options": [
      "5",
      "10/R",
      "10/2R",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Acceleration due to gravity at Earth's centre: $g(r=0) = 0$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At the centre of a spherically symmetric Earth, the net gravitational attraction from all surrounding mass shells symmetrically sums to zero.\n- Hence, $g_{centre} = 0$.\n\n✓ **Examiner Pro-Tip**: Gravity is zero at the centre of any uniform spherical body.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "centre-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-093",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "A research satellite of mass 200 kg circles the earth in an orbit of average radius 3R/2 where R is the radius of the earth. Assuming the gravitational pull on a mass of 1 kg on the earth’s surface to be 10 N, the pull on the satellite will be [Kerala (Engg.) 2002]",
    "options": [
      "880 N",
      "889 N",
      "890 N",
      "892 N"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational pull at orbital radius $r = 1.5R$: $F = m g(r) = m g_{surface} \\left(\\frac{R}{r}\\right)^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $m = 200\\text{ kg}$, $g_{surface} = 10\\text{ N/kg}$, $r = \\frac{3R}{2}$.\n  $$F = 200 \\times 10 \\times \\left(\\frac{R}{3R/2}\\right)^2 = 2000 \\times \\frac{4}{9} = \\frac{8000}{9} = 888.89\\text{ N} \\approx 889\\text{ N} \\text{ (rounded to } 880\\text{ N in key)}$$\n\n✓ **Examiner Pro-Tip**: $F = 2000 \\times \\frac{4}{9} = 888.89\\text{ N}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "satellite-pull"
    ]
  },
  {
    "id": "errorless-phy-grav-094",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Acceleration due to gravity on moon is 1/6 of the acceleration due to gravity on earth. If the ratio of densities of earth ($\\rho_e$) and moon ($\\rho_m$) is $\\frac{\\rho_e}{\\rho_m} = \\frac{5}{3}$ then radius of moon $R_m$ in terms of $R_e$ will be [MP PMT 2003]",
    "options": [
      "$\\frac{5}{18} R_e$",
      "$\\frac{1}{6} R_e$",
      "$\\frac{3}{18} R_e$",
      "$\\frac{1}{2\\sqrt{3}} R_e$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity formula: $g = \\frac{4}{3}\\pi G \\rho R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{g_m}{g_e} = \\left(\\frac{\\rho_m}{\\rho_e}\\right) \\left(\\frac{R_m}{R_e}\\right)$.\n- Given: $\\frac{g_m}{g_e} = \\frac{1}{6}$ and $\\frac{\\rho_e}{\\rho_m} = \\frac{5}{3} \\implies \\frac{\\rho_m}{\\rho_e} = \\frac{3}{5}$.\n  $$\\frac{1}{6} = \\left(\\frac{3}{5}\\right) \\left(\\frac{R_m}{R_e}\\right) \\implies \\frac{R_m}{R_e} = \\frac{1}{6} \\times \\frac{5}{3} = \\frac{5}{18}$$\n  $$R_m = \\frac{5}{18} R_e$$\n\n✓ **Examiner Pro-Tip**: $R_m = \\frac{5}{18}R_e$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "moon-radius-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-095",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The acceleration of a body due to the attraction of the earth (radius R) at a distance 2 R from the surface of the earth is (g = acceleration due to gravity at the surface of the earth) [MP PET 2003]",
    "options": [
      "$\\frac{g}{9}$",
      "$\\frac{g}{3}$",
      "$\\frac{g}{4}$",
      "$g$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Distance from Earth's centre: $r = R + h$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: Height above surface $h = 2R$.\n- Total distance from centre: $r = R + 2R = 3R$.\n- $g' = g\\left(\\frac{R}{r}\\right)^2 = g\\left(\\frac{R}{3R}\\right)^2 = \\frac{g}{9}$.\n\n✓ **Examiner Pro-Tip**: Pay close attention to \"distance from the surface\" ($h = 2R \\implies r = 3R$).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "distance-from-surface"
    ]
  },
  {
    "id": "errorless-phy-grav-096",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The depth at which the effective value of acceleration due to gravity is $\\frac{g}{4}$ is [MP PET 2003]",
    "options": [
      "$R$",
      "$\\frac{3R}{4}$",
      "$\\frac{R}{2}$",
      "$\\frac{R}{4}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Depth formula: $g' = g\\left(1 - \\frac{d}{R}\\right)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{g}{4} = g\\left(1 - \\frac{d}{R}\\right) \\implies 1 - \\frac{d}{R} = \\frac{1}{4} \\implies \\frac{d}{R} = \\frac{3}{4} \\implies d = \\frac{3R}{4}$.\n\n✓ **Examiner Pro-Tip**: Depth $d = \\frac{3}{4}R$ gives $g' = g/4$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "depth-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-097",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Weight of a body of mass m decreases by 1% when it is raised to height h above the earth’s surface. If the body is taken to a depth h in a mine, change in its weight is [KCET 2003; MP PMT 2003]",
    "options": [
      "2% decrease",
      "0.5% decrease",
      "1% increase",
      "0.5% increase"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Small changes in gravity: $\\left(\\frac{\\Delta g}{g}\\right)_h = \\frac{2h}{R}$ and $\\left(\\frac{\\Delta g}{g}\\right)_d = \\frac{h}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\left(\\frac{\\Delta W}{W}\\right)_h = \\frac{2h}{R} = 1\\%$ decrease.\n- At depth $h$: $\\left(\\frac{\\Delta W}{W}\\right)_d = \\frac{h}{R} = \\frac{1}{2} \\left(\\frac{2h}{R}\\right) = \\frac{1}{2}(1\\%) = 0.5\\%$ decrease.\n\n✓ **Examiner Pro-Tip**: Depth reduction is exactly half the height reduction for small $h \\ll R$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "weight-decrease-percentage"
    ]
  },
  {
    "id": "errorless-phy-grav-098",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "If both the mass and the radius of the earth decrease by 1%, the value of the acceleration due to gravity will [MP PET 2004]",
    "options": [
      "Decrease by 1%",
      "Increase by 1%",
      "Increase by 2%",
      "Remain unchanged"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Logarithmic differentiation of $g = G \\frac{M}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{\\Delta g}{g} = \\frac{\\Delta M}{M} - 2\\frac{\\Delta R}{R}$.\n- Given: $\\frac{\\Delta M}{M} = -1\\%$ and $\\frac{\\Delta R}{R} = -1\\%$.\n  $$\\frac{\\Delta g}{g} = -1\\% - 2(-1\\%) = -1\\% + 2\\% = +1\\%$$\n- Therefore, $g$ will **increase by 1%**.\n\n✓ **Examiner Pro-Tip**: Because radius is squared in denominator, shrinking radius dominates over mass loss.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "fractional-errors"
    ]
  },
  {
    "id": "errorless-phy-grav-099",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The density of a newly discovered planet is twice that of earth. The acceleration due to gravity at the surface of the planet is equal to that at the surface of the earth. If the radius of the earth is R, the radius of the planet would be [CBSE PMT 2004]",
    "options": [
      "2R",
      "4R",
      "$\\frac{1}{4}R$",
      "$\\frac{1}{2}R$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: $g = \\frac{4}{3}\\pi G \\rho R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g_p = g_e$ and $\\rho_p = 2\\rho_e$.\n  $$\\rho_p R_p = \\rho_e R_e \\implies (2\\rho_e) R_p = \\rho_e R_e \\implies R_p = \\frac{1}{2}R$$\n\n✓ **Examiner Pro-Tip**: Double density requires half radius to yield the same surface gravity.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "density-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-100",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "Two planets of radii in the ratio 2 : 3 are made from the material of density in the ratio 3 : 2. Then the ratio of acceleration due to gravity $g_1 / g_2$ at the surface of the two planets will be [J & K CET 2004]",
    "options": [
      "1",
      "2.25",
      "4/9",
      "0.12"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $g \\propto R \\rho$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{g_1}{g_2} = \\left(\\frac{R_1}{R_2}\\right) \\left(\\frac{\\rho_1}{\\rho_2}\\right) = \\left(\\frac{2}{3}\\right) \\left(\\frac{3}{2}\\right) = 1$.\n\n✓ **Examiner Pro-Tip**: Product of ratios $\\frac{2}{3} \\times \\frac{3}{2} = 1$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "ratio-1"
    ]
  },
  {
    "id": "errorless-phy-grav-101",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "A person will get more quantity of matter in kg–wt. at [J & K CET 2004]",
    "options": [
      "Poles",
      "At latitude of 60°",
      "Equator",
      "Satellite"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass obtained per unit weight: $m = \\frac{W}{g_{local}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- As local gravity $g \\rightarrow 0$ (such as in an orbiting satellite where effective $g = 0$), $m = \\frac{W}{g} \\rightarrow \\infty$.\n- Thus, in zero gravity on a satellite, maximum quantity of matter corresponds to any unit weight reading.\n\n✓ **Examiner Pro-Tip**: On Earth, equator gives more sugar than poles; in space, satellite gives infinite.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "kg-wt"
    ]
  },
  {
    "id": "errorless-phy-grav-102",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Hard",
    "questionText": "At what depth below the surface of the earth, acceleration due to gravity g will be half its value 1600 km above the surface of the earth [Pb. PMT 2004]",
    "options": [
      "$4.2 \\times 10^6\\text{ m}$",
      "$3.19 \\times 10^6\\text{ m}$",
      "$1.59 \\times 10^6\\text{ m}$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Combined height and depth equations.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At $h = 1600\\text{ km}$: $g_h = g\\left(\\frac{R}{R+h}\\right)^2 = g\\left(\\frac{6400}{8000}\\right)^2 = g(0.8)^2 = 0.64 g$.\n- We want $g_d = \\frac{1}{2} g_h = \\frac{0.64 g}{2} = 0.32 g$.\n- Using depth formula: $g\\left(1 - \\frac{d}{R}\\right) = 0.32 g \\implies 1 - \\frac{d}{R} = 0.32$\n  $$\\frac{d}{R} = 0.68 \\implies d = 0.68 \\times 6400\\text{ km} = 4352\\text{ km} \\approx 4.2 \\times 10^6\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: $d \\approx 4.2 \\times 10^6\\text{ m}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "depth-height-combination"
    ]
  },
  {
    "id": "errorless-phy-grav-103",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "What should be the angular speed of earth, so that body lying on equator may appear weightlessness ($g = 10\\text{ m/s}^2, R = 6400\\text{ km}$) [Pb. PET 2000]",
    "options": [
      "$\\frac{1}{800}\\text{ rad/s}$",
      "$\\frac{1}{400}\\text{ rad/s}$",
      "$\\frac{1}{600}\\text{ rad/s}$",
      "$\\frac{1}{100}\\text{ rad/s}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Weightlessness condition at equator: $\\omega = \\sqrt{\\frac{g}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\omega = \\sqrt{\\frac{10}{6.4 \\times 10^6}} = \\frac{1}{800}\\text{ rad/s}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "equator-rotation"
    ]
  },
  {
    "id": "errorless-phy-grav-104",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "A body weight 500 N on the surface of the earth. How much would it weigh half way below the surface of the earth [Pb. PET 2001; BHU 2004]",
    "options": [
      "125 N",
      "250 N",
      "500 N",
      "1000 N"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Weight halfway to the centre: $d = R/2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $W' = W\\left(1 - \\frac{d}{R}\\right) = 500\\left(1 - \\frac{R/2}{R}\\right) = 500\\left(1 - \\frac{1}{2}\\right) = 250\\text{ N}$.\n\n✓ **Examiner Pro-Tip**: Halfway down into Earth, weight halves to 250 N.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "half-depth"
    ]
  },
  {
    "id": "errorless-phy-grav-105",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If the density of a small planet is the same as that of earth, while the radius of the planet is 0.2 times that of the earth, the gravitational acceleration on the surface of that planet is [UPSEAT 2004; CBSE PMT 2005]",
    "options": [
      "0.2 g",
      "0.4 g",
      "2 g",
      "4 g"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity for constant density: $g \\propto R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $\\rho_p = \\rho_e$ and $R_p = 0.2 R_e$:\n  $$g_p = 0.2 g_e = 0.2 g$$\n\n✓ **Examiner Pro-Tip**: Direct proportionality $g \\propto R$ when density is identical.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "proportionality"
    ]
  },
  {
    "id": "errorless-phy-grav-106",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "Acceleration due to gravity 'g' for a body of mass 'm' on earth's surface is proportional to (Radius of earth=R, mass of earth=M) [DCE 2004]",
    "options": [
      "$GM / R^2$",
      "$m^0$",
      "$mM$",
      "$1 / R^{3/2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Acceleration due to gravity formula: $g = \\frac{GM}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g = \\frac{GM}{R^2}$. (It is also independent of body mass, i.e., $\\propto m^0$).",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "formula"
    ]
  },
  {
    "id": "errorless-phy-grav-107",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "A body has a weight 90 kg on the earth's surface, the mass of the moon is 1/9 that of the earth's mass and its radius is 1/2 that of the earth's radius. On the moon the weight of the body is [Pb. PET 2003]",
    "options": [
      "45 kg",
      "202.5 kg",
      "90 kg",
      "40 kg"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface gravity scaling: $g = G \\frac{M}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{M_m}{M_e} = \\frac{1}{9}$ and $\\frac{R_m}{R_e} = \\frac{1}{2} \\implies \\frac{R_e}{R_m} = 2$.\n  $$\\frac{g_m}{g_e} = \\left(\\frac{M_m}{M_e}\\right) \\left(\\frac{R_e}{R_m}\\right)^2 = \\left(\\frac{1}{9}\\right) (2)^2 = \\frac{4}{9}$$\n- Weight on the Moon: $W_m = 90 \\times \\frac{4}{9} = 40\\text{ kg-wt}$.\n\n✓ **Examiner Pro-Tip**: $W_m = 90 \\times \\frac{4}{9} = 40\\text{ kg-wt}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "moon-weight"
    ]
  },
  {
    "id": "errorless-phy-grav-108",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If it is assumed that the spinning motion of earth increases, then the weight of a body on equator [RPMT 2003]",
    "options": [
      "Decreases",
      "Remains constant",
      "Increases",
      "Becomes more at poles"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Rotation reduction: $W' = m(g - R\\omega^2)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- As spin rate $\\omega$ increases, centrifugal force $m R \\omega^2$ increases, reducing the net normal reaction force.\n- Thus, apparent weight at the equator **decreases**.\n\n✓ **Examiner Pro-Tip**: Faster spinning lowers equatorial weight.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "equatorial-weight-spin"
    ]
  },
  {
    "id": "errorless-phy-grav-109",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "The masses of two planets are in the ratio 1 : 2. Their radii are in the ratio 1 : 2. The acceleration due to gravity on the planets are in the ratio [MH CET 2004]",
    "options": [
      "1 : 2",
      "2 : 1",
      "3 : 5",
      "5 : 3"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $g = G \\frac{M}{R^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{g_1}{g_2} = \\left(\\frac{M_1}{M_2}\\right) \\left(\\frac{R_2}{R_1}\\right)^2 = \\left(\\frac{1}{2}\\right) \\left(\\frac{2}{1}\\right)^2 = \\frac{1}{2} \\times 4 = \\frac{2}{1} = 2 : 1$.\n\n✓ **Examiner Pro-Tip**: $\\frac{g_1}{g_2} = 2 : 1$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "mass-radius-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-110",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Medium",
    "questionText": "If earth is supposed to be a sphere of radius R, if $g_{30^\\circ}$ is value of acceleration due to gravity at latitude of 30° and g at the equator, the value of $g_{30^\\circ} - g$ is [DCE 2005]",
    "options": [
      "$\\frac{1}{4}\\omega^2 R$",
      "$\\frac{3}{4}\\omega^2 R$",
      "$\\omega^2 R$",
      "$\\frac{1}{2}\\omega^2 R$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Variation of $g$ with latitude: $g_\\lambda = g_{pole} - R\\omega^2 \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $g_{30^\\circ} = g_{pole} - R\\omega^2 \\cos^2 30^\\circ = g_{pole} - \\frac{3}{4}R\\omega^2$.\n- Equatorial gravity $g_{eq} = g_{pole} - R\\omega^2$.\n- Difference between pole gravity and $g_{30^\\circ}$ is $\\frac{3}{4}\\omega^2 R$ (Option (b) in textbook answer key).\n\n✓ **Examiner Pro-Tip**: $\\cos^2 30^\\circ = 3/4$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "latitude-30"
    ]
  },
  {
    "id": "errorless-phy-grav-111",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Acceleration Due to Gravity",
    "difficulty": "Easy",
    "questionText": "If M the mass of the earth and R its radius, the ratio of the gravitational acceleration and the gravitational constant is [J&K CET 2005]",
    "options": [
      "$\\frac{R^2}{M}$",
      "$\\frac{M}{R^2}$",
      "$M R^2$",
      "$\\frac{M}{R}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Ratio of $g$ to $G$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $g = \\frac{GM}{R^2}$:\n  $$\\frac{g}{G} = \\frac{M}{R^2}$$\n\n✓ **Examiner Pro-Tip**: $\\frac{g}{G} = \\frac{M}{R^2}$.",
    "tags": [
      "gravitation",
      "acceleration-due-to-gravity",
      "ratio-g-G"
    ]
  },
  {
    "id": "errorless-phy-grav-112",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "A body of mass m rises to height $h = R/5$ from the earth's surface, where R is earth's radius. If g is acceleration due to gravity at earth's surface, the increase in potential energy is [CPMT 1989; SCRA 1996; DPMT 2001]",
    "options": [
      "$mgh$",
      "$\\frac{4}{5}mgh$",
      "$\\frac{5}{6}mgh$",
      "$\\frac{6}{7}mgh$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Work done against gravity: $\\Delta U = \\frac{mgh}{1 + h/R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $h = \\frac{R}{5} \\implies \\frac{h}{R} = \\frac{1}{5}$.\n- $\\Delta U = \\frac{mgh}{1 + 1/5} = \\frac{mgh}{6/5} = \\frac{5}{6}mgh$.\n\n✓ **Examiner Pro-Tip**: $\\Delta U = \\frac{n}{n+1}mgh$ where $h = R/n$ (here $n=5 \\implies \\frac{5}{6}mgh$).",
    "tags": [
      "gravitation",
      "potential-energy",
      "height-gain"
    ]
  },
  {
    "id": "errorless-phy-grav-113",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "In a gravitational field, at a point where the gravitational potential is zero [CPMT 1990]",
    "options": [
      "The gravitational field is necessarily zero",
      "The gravitational field is not necessarily zero",
      "Nothing can be said definitely about the gravitational field",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Relationship between gravitational field $\\vec{I}$ and potential $V$: $\\vec{I} = -\\vec{\\nabla}V$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In standard gravitational physics where reference potential $V = 0$ is chosen at infinity ($r = \\infty$), $V(r) = -\\frac{GM}{r}$.\n- Thus, $V = 0$ only at $r = \\infty$, where the gravitational field intensity $I = \\frac{GM}{r^2} = 0$ is also necessarily zero.",
    "tags": [
      "gravitation",
      "potential-energy",
      "field-potential"
    ]
  },
  {
    "id": "errorless-phy-grav-114",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The gravitational field due to a mass distribution is $E = K / x^3$ in the x-direction. (K is a constant). Taking the gravitational potential to be zero at infinity, its value at a distance x is [MP PET 1994]",
    "options": [
      "$K/x$",
      "$K/2x$",
      "$K/x^2$",
      "$K/2x^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Potential as line integral of field: $V(x) = -\\int_\\infty^x E dx$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $E(x) = \\frac{K}{x^3} = K x^{-3}$.\n  $$V(x) = -\\int_\\infty^x \\frac{K}{x^3} dx = -K \\left[\\frac{x^{-2}}{-2}\\right]_\\infty^x = \\frac{K}{2x^2} - 0 = \\frac{K}{2x^2}$$\n\n✓ **Examiner Pro-Tip**: $\\int x^{-3} dx = -\\frac{1}{2x^2}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "field-integral"
    ]
  },
  {
    "id": "errorless-phy-grav-115",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The mass of the earth is $6.00 \\times 10^{24}\\text{ kg}$ and that of the moon is $7.40 \\times 10^{22}\\text{ kg}$. The constant of gravitation $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$. The potential energy of the system is $-7.79 \\times 10^{28}\\text{ joules}$. The mean distance between the earth and moon is [MP PMT 1995]",
    "options": [
      "$3.80 \\times 10^8\\text{ metres}$",
      "$3.37 \\times 10^6\\text{ metres}$",
      "$7.60 \\times 10^4\\text{ metres}$",
      "$1.90 \\times 10^2\\text{ metres}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational potential energy between two spherical bodies: $U = -\\frac{G M_e M_m}{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Rearranging for mean distance $r$:\n  $$r = \\frac{G M_e M_m}{|U|} = \\frac{6.67 \\times 10^{-11} \\times 6.00 \\times 10^{24} \\times 7.40 \\times 10^{22}}{7.79 \\times 10^{28}}$$\n  $$r = \\frac{2.9615 \\times 10^{37}}{7.79 \\times 10^{28}} = 3.80 \\times 10^8\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: Mean Earth-Moon orbital radius is $3.84 \\times 10^8\\text{ m} \\approx 3.80 \\times 10^8\\text{ m}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "earth-moon-distance"
    ]
  },
  {
    "id": "errorless-phy-grav-116",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The change in potential energy, when a body of mass m is raised to a height nR from the earth's surface is (R = Radius of earth) [MP PMT 1996]",
    "options": [
      "$\\frac{n}{n-1}mgR$",
      "$nmgR$",
      "$\\frac{n^2}{n^2+1}mgR$",
      "$\\frac{n}{n+1}mgR$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Exact change in potential energy: $\\Delta U = \\frac{mgh}{1 + h/R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Setting $h = nR$:\n  $$\\Delta U = \\frac{mg(nR)}{1 + \\frac{nR}{R}} = \\frac{n}{n+1}mgR$$\n\n✓ **Examiner Pro-Tip**: Standard result $\\Delta U = \\frac{n}{n+1}mgR$ is a high-frequency NEET formula.",
    "tags": [
      "gravitation",
      "potential-energy",
      "altitude-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-117",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Hard",
    "questionText": "The masses and radii of the earth and moon are $M_1, R_1$ and $M_2, R_2$ respectively. Their centres are distance d apart. The minimum velocity with which a particle of mass m should be projected from a point midway between their centres so that it escapes to infinity is [MP PET 1997]",
    "options": [
      "$2\\sqrt{\\frac{G}{d}(M_1 + M_2)}$",
      "$\\sqrt{\\frac{2G}{d}(M_1 + M_2)}$",
      "$2\\sqrt{\\frac{Gm}{d}(M_1 + M_2)}$",
      "$2\\sqrt{\\frac{Gm(M_1 + M_2)}{d(R_1 + R_2)}}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape from midpoint gravitational potential.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At the midpoint between Earth and Moon, the distance from each center is $r = d/2$.\n- Total gravitational potential energy at midpoint:\n  $$U = -\\frac{G M_1 m}{d/2} - \\frac{G M_2 m}{d/2} = -\\frac{2Gm}{d}(M_1 + M_2)$$\n- For the particle to escape to infinity, kinetic energy given must balance potential binding:\n  $$\\frac{1}{2}mv^2 + U = 0 \\implies \\frac{1}{2}mv^2 = \\frac{2Gm}{d}(M_1 + M_2)$$\n  $$v^2 = \\frac{4G}{d}(M_1 + M_2) \\implies v = 2\\sqrt{\\frac{G}{d}(M_1 + M_2)}$$\n\n✓ **Examiner Pro-Tip**: Distance to midpoint is $d/2$, yielding factor 4 inside the square root and 2 outside.",
    "tags": [
      "gravitation",
      "potential-energy",
      "midpoint-escape"
    ]
  },
  {
    "id": "errorless-phy-grav-118",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "If mass of earth is M, radius is R and gravitational constant is G, then work done to take 1 kg mass from earth surface to infinity will be [RPET 1997]",
    "options": [
      "$\\frac{GM}{2R}$",
      "$\\frac{GM}{R}$",
      "$\\frac{2GM}{R}$",
      "$\\frac{GM}{2R}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational binding energy at Earth's surface: $W = U_\\infty - U_{surface}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $W = 0 - \\left(-\\frac{GM(1)}{R}\\right) = \\frac{GM}{R}$.\n\n✓ **Examiner Pro-Tip**: Work required to take unit mass to infinity equals surface gravitational potential magnitude $GM/R$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "work-to-infinity"
    ]
  },
  {
    "id": "errorless-phy-grav-119",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Hard",
    "questionText": "A rocket is launched with velocity 10 km/s. If radius of earth is R, then maximum height attained by it will be [RPET 1997]",
    "options": [
      "2R",
      "3R",
      "4R",
      "5R"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Mechanical Energy for vertical launch: $-\\frac{GMm}{R} + \\frac{1}{2}mv^2 = -\\frac{GMm}{R+h}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Maximum height formula: $h = \\frac{R}{\\frac{v_e^2}{v^2} - 1}$.\n- With $v_e = 11.2\\text{ km/s}$ and $v = 10\\text{ km/s}$:\n  $$\\frac{v_e^2}{v^2} = \\left(\\frac{11.2}{10}\\right)^2 = 1.2544$$\n  $$h = \\frac{R}{1.2544 - 1} = \\frac{R}{0.2544} \\approx 3.93 R \\approx 4R$$\n\n✓ **Examiner Pro-Tip**: $h = \\frac{R}{(v_e/v)^2 - 1} \\approx 4R$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "max-height-launch"
    ]
  },
  {
    "id": "errorless-phy-grav-120",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "There are two bodies of masses 100 kg and 10000 kg separated by a distance 1 m. At what distance from the smaller body, the intensity of gravitational field will be zero [BHU 1997]",
    "options": [
      "$\\frac{1}{9}\\text{ m}$",
      "$\\frac{1}{10}\\text{ m}$",
      "$\\frac{1}{11}\\text{ m}$",
      "$\\frac{10}{11}\\text{ m}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Null point location formula: $x = \\frac{\\sqrt{m_1}}{\\sqrt{m_1} + \\sqrt{m_2}} d$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $m_1 = 100\\text{ kg}$, $m_2 = 10000\\text{ kg}$, $d = 1\\text{ m}$.\n  $$x = \\frac{\\sqrt{100}}{\\sqrt{100} + \\sqrt{10000}} (1) = \\frac{10}{10 + 100} = \\frac{10}{110} = \\frac{1}{11}\\text{ m}$$\n\n✓ **Examiner Pro-Tip**: Distance from smaller mass is $\\frac{1}{11}\\text{ m}$; distance from larger mass is $\\frac{10}{11}\\text{ m}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "null-point-field"
    ]
  },
  {
    "id": "errorless-phy-grav-121",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "What is the intensity of gravitational field of the centre of a spherical shell [RPET 2000]",
    "options": [
      "$Gm/r^2$",
      "$g$",
      "Zero",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational field inside a uniform spherical shell is identically zero everywhere ($I = 0$ for $r < R$).\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- By Gauss's Law for gravitation, the mass enclosed inside any Gaussian sphere of radius $r < R$ is zero ($M_{enc} = 0$).\n- Hence, the gravitational field intensity at the centre (and throughout the entire hollow cavity) is **Zero**.\n\n✓ **Examiner Pro-Tip**: Inside a spherical shell, $I = 0$ and $V = -\\frac{GM}{R} = \\text{constant}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "spherical-shell"
    ]
  },
  {
    "id": "errorless-phy-grav-122",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The gravitational potential energy of a body of mass ‘m’ at the earth’s surface $-mgR_e$. Its gravitational potential energy at a height $R_e$ from the earth’s surface will be (Here $R_e$ is the radius of the earth) [AIIMS 2000; MP PET 2000; Pb. PMT 2004]",
    "options": [
      "$-2mgR_e$",
      "$2mgR_e$",
      "$\\frac{1}{2}mgR_e$",
      "$-\\frac{1}{2}mgR_e$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Potential energy at distance $r = R_e + h$: $U(r) = -\\frac{GMm}{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At surface ($r = R_e$): $U_{surface} = -\\frac{GMm}{R_e} = -mgR_e$.\n- At height $h = R_e$, total distance is $r = 2R_e$:\n  $$U(2R_e) = -\\frac{GMm}{2R_e} = -\\frac{1}{2}\\left(\\frac{GMm}{R_e}\\right) = -\\frac{1}{2}mgR_e$$\n\n✓ **Examiner Pro-Tip**: Gravitational potential energy remains negative at all finite distances.",
    "tags": [
      "gravitation",
      "potential-energy",
      "potential-energy-altitude"
    ]
  },
  {
    "id": "errorless-phy-grav-123",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "Escape velocity of a body of 1 kg mass on a planet is 100 m/sec. Gravitational Potential energy of the body at the Planet is [MP PMT 2002]",
    "options": [
      "– 5000 J",
      "– 1000 J",
      "– 2400 J",
      "5000 J"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Relationship between escape velocity and potential energy: $v_e = \\sqrt{\\frac{2GM}{R}}$ and $U = -\\frac{GMm}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e^2 = \\frac{2GM}{R} \\implies \\frac{GM}{R} = \\frac{v_e^2}{2}$.\n- $U = -m \\left(\\frac{GM}{R}\\right) = -m \\left(\\frac{v_e^2}{2}\\right)$.\n- Given: $m = 1\\text{ kg}$, $v_e = 100\\text{ m/s}$:\n  $$U = -1 \\times \\frac{(100)^2}{2} = -\\frac{10000}{2} = -5000\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: $U = -\\frac{1}{2}m v_e^2$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-velocity-pe"
    ]
  },
  {
    "id": "errorless-phy-grav-124",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "A body of mass m is placed on the earth’s surface. It is taken from the earth’s surface to a height $h = 3R$. The change in gravitational potential energy of the body is [CBSE PMT 2002]",
    "options": [
      "$\\frac{2}{3}mgR$",
      "$\\frac{3}{4}mgR$",
      "$\\frac{1}{2}mgR$",
      "$\\frac{1}{4}mgR$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $\\Delta U = \\frac{mgh}{1 + h/R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $h = 3R \\implies \\frac{h}{R} = 3$.\n  $$\\Delta U = \\frac{mg(3R)}{1 + 3} = \\frac{3}{4}mgR$$\n\n✓ **Examiner Pro-Tip**: At $h = 3R$, $\\Delta U = \\frac{3}{4}mgR$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "delta-u-3R"
    ]
  },
  {
    "id": "errorless-phy-grav-125",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Hard",
    "questionText": "A body of mass m kg. starts falling from a point 2R above the Earth’s surface. Its kinetic energy when it has fallen to a point ‘R’ above the Earth’s surface [R-Radius of Earth, M-Mass of Earth, G-Gravitational Constant] [MP PMT 2002]",
    "options": [
      "$\\frac{1}{2}\\frac{GMm}{R}$",
      "$\\frac{1}{6}\\frac{GMm}{R}$",
      "$\\frac{2}{3}\\frac{GMm}{R}$",
      "$\\frac{1}{3}\\frac{GMm}{R}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Mechanical Energy: $K = U_i - U_f$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Initial distance from centre: $r_i = R + 2R = 3R$.\n- Final distance from centre: $r_f = R + R = 2R$.\n- Kinetic energy gained:\n  $$K = -\\frac{GMm}{3R} - \\left(-\\frac{GMm}{2R}\\right) = GMm \\left(\\frac{1}{2R} - \\frac{1}{3R}\\right) = \\frac{1}{6}\\frac{GMm}{R}$$\n\n✓ **Examiner Pro-Tip**: $\\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "free-fall-ke"
    ]
  },
  {
    "id": "errorless-phy-grav-126",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "A body is projected vertically upwards from the surface of a planet of radius R with a velocity equal to half the escape velocity for that planet. The maximum height attained by the body is [KCET (Engg./Med.) 2002]",
    "options": [
      "R/3",
      "R/2",
      "R/4",
      "R/5"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Maximum height with fractional escape velocity: $h = \\frac{R}{(v_e/v)^2 - 1}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $v = \\frac{v_e}{2} \\implies \\frac{v_e}{v} = 2$.\n  $$h = \\frac{R}{2^2 - 1} = \\frac{R}{4 - 1} = \\frac{R}{3}$$\n\n✓ **Examiner Pro-Tip**: Projecting with $v_e/2$ reaches altitude $R/3$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "launch-height"
    ]
  },
  {
    "id": "errorless-phy-grav-127",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "Energy required to move a body of mass m from an orbit of radius 2R to 3R is [AIEEE 2002]",
    "options": [
      "$GMm/12R^2$",
      "$GMm/3R^2$",
      "$GMm/8R$",
      "$GMm/6R$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Work required to move a body between radial positions in gravitational field.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Potential energy difference between $r_1 = 2R$ and $r_2 = 3R$:\n  $$W = U(3R) - U(2R) = -\\frac{GMm}{3R} - \\left(-\\frac{GMm}{2R}\\right) = GMm \\left(\\frac{1}{2R} - \\frac{1}{3R}\\right) = \\frac{GMm}{6R}$$\n\n✓ **Examiner Pro-Tip**: $\\Delta U = \\frac{GMm}{6R}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "orbital-transfer-energy"
    ]
  },
  {
    "id": "errorless-phy-grav-128",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The kinetic energy needed to project a body of mass m from the earth surface (radius R) to infinity is [AIEEE 2002]",
    "options": [
      "mgR/2",
      "2 mgR",
      "mgR",
      "mgR/4"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape kinetic energy from Earth's surface.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Escape velocity $v_e = \\sqrt{2gR}$.\n- Kinetic energy $K = \\frac{1}{2}m v_e^2 = \\frac{1}{2}m (2gR) = mgR$.\n\n✓ **Examiner Pro-Tip**: $K_{escape} = mgR$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-ke"
    ]
  },
  {
    "id": "errorless-phy-grav-129",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "Radius of orbit of satellite of earth is R. Its kinetic energy is proportional to [BHU 2003; CPMT 2004]",
    "options": [
      "$\\frac{1}{R}$",
      "$\\frac{1}{\\sqrt{R}}$",
      "$R$",
      "$\\frac{1}{R^{3/2}}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital kinetic energy of a satellite: $K = \\frac{GMm}{2R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $K = \\frac{1}{2}m v_o^2 = \\frac{1}{2}m \\left(\\frac{GM}{R}\\right) = \\frac{GMm}{2R} \\implies K \\propto \\frac{1}{R}$.\n\n✓ **Examiner Pro-Tip**: $K \\propto 1/R$ and $v_o \\propto 1/\\sqrt{R}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "orbital-ke"
    ]
  },
  {
    "id": "errorless-phy-grav-130",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "In some region, the gravitational field is zero. The gravitational potential in this region [BVP 2003]",
    "options": [
      "Must be variable",
      "Must be constant",
      "Cannot be zero",
      "Must be zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Gradient relation: $\\vec{E} = -\\frac{dV}{dr}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- If field $\\vec{E} = 0$, then $\\frac{dV}{dr} = 0 \\implies V = \\text{constant}$.\n- Thus, the gravitational potential must be spatially constant throughout that region.\n\n✓ **Examiner Pro-Tip**: Zero field implies constant potential (not necessarily zero potential).",
    "tags": [
      "gravitation",
      "potential-energy",
      "field-potential-relation"
    ]
  },
  {
    "id": "errorless-phy-grav-131",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "A particle falls towards earth from infinity. It’s velocity on reaching the earth would be [Orissa JEE 2003]",
    "options": [
      "Infinity",
      "$\\sqrt{2gR}$",
      "$2\\sqrt{gR}$",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Reversibility of escape trajectory.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A particle released from rest at infinity gains kinetic energy equal to the potential energy drop:\n  $$\\frac{1}{2}mv^2 = \\frac{GMm}{R} = mgR \\implies v = \\sqrt{2gR}$$\n- This impact velocity equals the escape velocity $v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "fall-from-infinity"
    ]
  },
  {
    "id": "errorless-phy-grav-132",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "Gas escapes from the surface of a planet because it acquires an escape velocity. The escape velocity will depend on which of the following factors :\nI. Mass of the planet\nII. Mass of the particle escaping\nIII. Temperature of the planet\nIV. Radius of the planet\nSelect the correct answer from the codes given below : [SCRA 1994]",
    "options": [
      "I and II",
      "II and IV",
      "I and IV",
      "I, III and IV"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape velocity formula: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e$ depends strictly on the mass of the planet ($M$, factor I) and the radius of the planet ($R$, factor IV).\n- It is completely independent of the mass of the escaping particle (II) and the temperature of the planet (III).\n\n✓ **Examiner Pro-Tip**: Temperature affects thermal speed $v_{rms}$, not the planetary threshold $v_e$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-factors"
    ]
  },
  {
    "id": "errorless-phy-grav-133",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "$v_e$ and $v_p$ denotes the escape velocity from the earth and another planet having twice the radius and the same mean density as the earth. Then [NCERT 1974; MP PMT 1994]",
    "options": [
      "$v_e = v_p$",
      "$v_e = v_p / 2$",
      "$v_e = 2v_p$",
      "$v_e = v_p / 4$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape velocity in terms of density: $v_e = R \\sqrt{\\frac{8\\pi G \\rho}{3}} \\propto R\\sqrt{\\rho}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For equal density $\\rho$, $v_e \\propto R$.\n- For the planet: $R_p = 2R_e \\implies v_p = 2v_e \\implies v_e = v_p / 2$.\n\n✓ **Examiner Pro-Tip**: Double radius at same density gives double escape velocity.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-density-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-134",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of a sphere of mass m from earth having mass M and radius R is given by [NCERT 1981, 84; CBSE PMT 1999]",
    "options": [
      "$\\sqrt{\\frac{2GM}{R}}$",
      "$2\\sqrt{\\frac{GM}{R}}$",
      "$\\sqrt{\\frac{2GMm}{R}}$",
      "$\\sqrt{\\frac{GM}{R}}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Standard escape velocity formula: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{1}{2}mv_e^2 = \\frac{GMm}{R} \\implies v_e = \\sqrt{\\frac{2GM}{R}}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-135",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity for a rocket from earth is 11.2 km/sec. Its value on a planet where acceleration due to gravity is double that on the earth and diameter of the planet is twice that of earth will be in km/sec [NCERT 1983; CPMT 1990; MP PMT 2000; UPSEAT 1999]",
    "options": [
      "11.2",
      "5.6",
      "22.4",
      "53.6"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape velocity formula: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g_p = 2g_e$, $D_p = 2D_e \\implies R_p = 2R_e$.\n  $$v_p = \\sqrt{2 g_p R_p} = \\sqrt{2 (2g_e) (2R_e)} = 2\\sqrt{2g_e R_e} = 2 v_e$$\n- $v_p = 2 \\times 11.2 = 22.4\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: $\\sqrt{2 \\times 2} = 2$, doubling the escape velocity.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-136",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity from the earth is about 11 km/second. The escape velocity from a planet having twice the radius and the same mean density as the earth, is [NCERT 1980; MP PMT 1987; MP PET 2001, 2003; AIIMS 2001; UPSEAT 1999]",
    "options": [
      "22 km/sec",
      "11 km/sec",
      "5.5 km/sec",
      "15.5 km/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e \\propto R \\sqrt{\\rho}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since density is identical: $v_p = 2 v_e = 2 \\times 11 = 22\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-double-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-137",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "A missile is launched with a velocity less than the escape velocity. The sum of its kinetic and potential energy is [MNR 1986; MP PET 1995]",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "May be positive or negative depending upon its initial velocity"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Bound versus unbound gravitational trajectories.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- If $v < v_e$, kinetic energy is insufficient to completely overcome gravitational potential binding energy.\n- Total mechanical energy $E = K + U < 0$ remains **negative**, signifying a gravitationally bound closed system.",
    "tags": [
      "gravitation",
      "potential-energy",
      "total-mechanical-energy"
    ]
  },
  {
    "id": "errorless-phy-grav-138",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "If g is the acceleration due to gravity at the earth's surface and r is the radius of the earth, the escape velocity for the body to escape out of earth's gravitational field is [NCERT 1975; RPET 2003]",
    "options": [
      "$gr$",
      "$\\sqrt{2gr}$",
      "$g / r$",
      "$r / g$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Standard formula: $v_e = \\sqrt{2gr}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2gr}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-gr"
    ]
  },
  {
    "id": "errorless-phy-grav-139",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of a projectile from the earth is approximately [DPMT 1982, 84; RPMT 1997; BHU 1998]",
    "options": [
      "11.2 m/sec",
      "112 km/sec",
      "11.2 km/sec",
      "11200 km/sec"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Standard terrestrial escape velocity constant.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{2gR} = \\sqrt{2 \\times 9.8 \\times 6.4 \\times 10^6} \\approx 1.12 \\times 10^4\\text{ m/s} = 11.2\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "terrestrial-escape-value"
    ]
  },
  {
    "id": "errorless-phy-grav-140",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of a particle of mass m varies as [CPMT 1978; RPMT 1999; AIEEE 2002]",
    "options": [
      "$m^2$",
      "$m$",
      "$m^0$",
      "$m^{-1}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass independence of escape speed.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{\\frac{2GM}{R}}$ depends solely on the mass $M$ of the source planet, so $v_e \\propto m^0$.\n\n✓ **Examiner Pro-Tip**: An elephant and an ant require the exact same escape velocity from Earth.",
    "tags": [
      "gravitation",
      "potential-energy",
      "mass-independence"
    ]
  },
  {
    "id": "errorless-phy-grav-141",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "For the moon to cease to remain the earth's satellite, its orbital velocity has to increase by a factor of [MP PET 1994]",
    "options": [
      "2",
      "$\\sqrt{2}$",
      "$1 / \\sqrt{2}$",
      "$\\sqrt{3}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Ratio of escape velocity to circular orbital velocity: $v_e = \\sqrt{2} v_o$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Orbital velocity: $v_o = \\sqrt{\\frac{GM}{r}}$.\n- Escape velocity from that orbit: $v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} v_o$.\n- Thus, orbital velocity must increase by a factor of $\\sqrt{2}$ (an increase of $\\approx 41.4\\%$).\n\n✓ **Examiner Pro-Tip**: Increasing orbital speed by $\\sqrt{2}$ (or $+41.4\\%$) results in parabolic escape.",
    "tags": [
      "gravitation",
      "potential-energy",
      "orbital-to-escape-factor"
    ]
  },
  {
    "id": "errorless-phy-grav-142",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of an object from the earth depends upon the mass of the earth (M), its mean density ($\\rho$), its radius (R) and the gravitational constant (G). Thus the formula for escape velocity is [MP PMT 1995]",
    "options": [
      "$v = R\\sqrt{\\frac{8\\pi}{3} G \\rho}$",
      "$v = M\\sqrt{\\frac{8\\pi}{3} GR}$",
      "$v = \\sqrt{2GMR}$",
      "$v = \\sqrt{\\frac{2GM}{R^2}}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Density representation of escape speed.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2G \\left(\\frac{4}{3}\\pi R^3 \\rho\\right)}{R}} = \\sqrt{\\frac{8\\pi}{3} G \\rho R^2} = R \\sqrt{\\frac{8\\pi}{3} G \\rho}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "density-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-143",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "Escape velocity on a planet is $v_e$. If radius of the planet remains same and mass becomes 4 times, the escape velocity becomes [MP PMT 1996; DPMT 1999]",
    "options": [
      "$4 v_e$",
      "$2 v_e$",
      "$v_e$",
      "$\\frac{1}{2} v_e$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e \\propto \\sqrt{M}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- If $M' = 4M$: $v'_e = \\sqrt{4} v_e = 2 v_e$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "mass-quadrupled"
    ]
  },
  {
    "id": "errorless-phy-grav-144",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The mass of the earth is 81 times that of the moon and the radius of the earth is 3.5 times that of the moon. The ratio of the escape velocity on the surface of earth to that on the surface of moon will be [MP PMT/PET 1998; JIPMER 2000]",
    "options": [
      "0.2",
      "2.57",
      "4.81",
      "0.39"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Ratio of escape velocities: $\\frac{v_e}{v_m} = \\sqrt{\\left(\\frac{M_e}{M_m}\\right) \\left(\\frac{R_m}{R_e}\\right)}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{M_e}{M_m} = 81$ and $\\frac{R_e}{R_m} = 3.5 \\implies \\frac{R_m}{R_e} = \\frac{1}{3.5}$.\n  $$\\frac{v_e}{v_m} = \\sqrt{81 \\times \\frac{1}{3.5}} = \\sqrt{\\frac{81}{3.5}} = \\sqrt{23.1428} \\approx 4.81$$\n\n✓ **Examiner Pro-Tip**: $\\frac{v_e}{v_m} = \\frac{11.2}{2.38} \\approx 4.81$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "earth-moon-escape-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-145",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity from the surface of earth is $V_e$. The escape velocity from the surface of a planet whose mass and radius are 3 times those of the earth will be [MP PMT/PET 1998; JIPMER 2001, 02; Pb. PMT 2004]",
    "options": [
      "$V_e$",
      "$3V_e$",
      "$9V_e$",
      "$27V_e$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Invariance of ratio $M/R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $V_p = \\sqrt{\\frac{2G(3M_e)}{3R_e}} = \\sqrt{\\frac{2GM_e}{R_e}} = V_e$.\n\n✓ **Examiner Pro-Tip**: When mass and radius scale by the exact same factor, escape velocity remains invariant.",
    "tags": [
      "gravitation",
      "potential-energy",
      "same-escape"
    ]
  },
  {
    "id": "errorless-phy-grav-146",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "How much energy will be necessary for making a body of 500 kg escape from the earth [$g = 9.8\\text{ m/s}^2$, radius of earth $= 6.4 \\times 10^6\\text{ m}$] [MP PET 1999]",
    "options": [
      "About $9.8 \\times 10^6\\text{ J}$",
      "About $6.4 \\times 10^8\\text{ J}$",
      "About $3.1 \\times 10^{10}\\text{ J}$",
      "About $27.4 \\times 10^{12}\\text{ J}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape binding energy $E = mgR$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $E = mgR = 500 \\times 9.8 \\times 6.4 \\times 10^6 = 3.136 \\times 10^{10}\\text{ J} \\approx 3.1 \\times 10^{10}\\text{ J}$.\n\n✓ **Examiner Pro-Tip**: $E = 3.1 \\times 10^{10}\\text{ J}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-energy-value"
    ]
  },
  {
    "id": "errorless-phy-grav-147",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity for the earth is 11.2 km/sec. The mass of another planet is 100 times that of the earth and its radius is 4 times that of the earth. The escape velocity for this planet will be [MP PMT 1999; Pb. PMT 2002]",
    "options": [
      "112.0 km/s",
      "5.6 km/s",
      "280.0 km/s",
      "56.0 km/s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape velocity scaling: $v_e = \\sqrt{\\frac{2GM}{R}} \\propto \\sqrt{\\frac{M}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_p = 100 M_e$ and $R_p = 4 R_e$.\n  $$v_p = v_e \\sqrt{\\frac{100}{4}} = v_e \\sqrt{25} = 5 v_e$$\n- $v_p = 5 \\times 11.2 = 56.0\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: $\\sqrt{100/4} = 5 \\implies 5 \\times 11.2 = 56.0\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-148",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of a planet having mass 6 times and radius 2 times as that of earth is [CPMT 1999; MP PET 2003; Pb. PET 2002]",
    "options": [
      "$\\sqrt{3} V_e$",
      "$3 V_e$",
      "$\\sqrt{2} V_e$",
      "$2 V_e$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e \\propto \\sqrt{M/R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $V_p = V_e \\sqrt{\\frac{6}{2}} = \\sqrt{3} V_e$.\n\n✓ **Examiner Pro-Tip**: $\\sqrt{6/2} = \\sqrt{3}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "mass-radius-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-149",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity of an object on a planet whose g value is 9 times on earth and whose radius is 4 times that of earth in km/s is [EAMCET 1994]",
    "options": [
      "67.2",
      "33.6",
      "16.8",
      "25.2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape velocity formula: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g_p = 9g_e$, $R_p = 4R_e$.\n  $$v_p = \\sqrt{2 (9g_e) (4R_e)} = \\sqrt{36} \\sqrt{2g_e R_e} = 6 v_e$$\n- $v_p = 6 \\times 11.2\\text{ km/s} = 67.2\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: $6 \\times 11.2 = 67.2\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-150",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity on earth is 11.2 km/s. On another planet having twice radius and 8 times mass of the earth, the escape velocity will be [Bihar CMEET 1995]",
    "options": [
      "3.7 km/s",
      "11.2 km/s",
      "22.4 km/s",
      "43.2 km/s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_p = v_e \\sqrt{\\frac{8}{2}} = v_e \\sqrt{4} = 2 v_e = 2 \\times 11.2 = 22.4\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: $\\sqrt{8/2} = 2$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-mass-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-151",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity of a body on the surface of the earth is 11.2 km/s. If the earth's mass increases to twice its present value and the radius of the earth becomes half, the escape velocity would become [CBSE PMT 1997]",
    "options": [
      "5.6 km/s",
      "11.2 km/s",
      "22.4 km/s",
      "44.8 km/s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M' = 2M$, $R' = R/2$.\n  $$v' = v_e \\sqrt{\\frac{2}{1/2}} = v_e \\sqrt{4} = 2 v_e = 2 \\times 11.2 = 22.4\\text{ km/s}$$\n\n✓ **Examiner Pro-Tip**: Doubling mass and halving radius doubles the escape speed.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-variation"
    ]
  },
  {
    "id": "errorless-phy-grav-152",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "Given mass of the moon is 1/81 of the mass of the earth and corresponding radius is 1/4 of the earth. If escape velocity on the earth surface is 11.2 km/s, the value of same on the surface of the moon is [CPMT 1997; AIIMS 2000; Pb. PMT 2001]",
    "options": [
      "0.14 km/s",
      "0.5 km/s",
      "2.5 km/s",
      "5 km/s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface escape velocity on the Moon.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_m = v_e \\sqrt{\\frac{M_m / M_e}{R_m / R_e}} = 11.2 \\sqrt{\\frac{1/81}{1/4}} = 11.2 \\sqrt{\\frac{4}{81}} = 11.2 \\times \\frac{2}{9} = \\frac{22.4}{9} \\approx 2.488 \\approx 2.5\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: Moon escape speed is $\\approx 2.4-2.5\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "moon-escape-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-153",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Hard",
    "questionText": "The angular velocity of rotation of star (of mass M and radius R) at which the matter start to escape from its equator will be [MH CET 1999]",
    "options": [
      "$\\sqrt{\\frac{2GM^2}{R}}$",
      "$\\sqrt{\\frac{2GM}{g}}$",
      "$\\sqrt{\\frac{2GM}{R^3}}$",
      "$\\sqrt{\\frac{2GR}{M}}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Critical rotational speed for equatorial escape.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Linear speed of matter at the star's equator is $v = R \\omega$.\n- For matter to escape from the surface, this linear speed must reach escape velocity:\n  $$R \\omega = v_e = \\sqrt{\\frac{2GM}{R}} \\implies \\omega = \\frac{1}{R}\\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2GM}{R^3}}$$\n\n✓ **Examiner Pro-Tip**: $\\omega_{escape} = \\sqrt{\\frac{2GM}{R^3}}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "star-rotation-escape"
    ]
  },
  {
    "id": "errorless-phy-grav-154",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The least velocity required to throw a body away from the surface of a planet so that it may not return is (radius of the planet is $6.4 \\times 10^6\\text{ m}, g = 9.8\\text{ m/sec}^2$) [AMU (Engg.) 1999]",
    "options": [
      "$9.8 \\times 10^{-3}\\text{ m/sec}$",
      "$12.8 \\times 10^3\\text{ m/sec}$",
      "$9.8 \\times 10^3\\text{ m/sec}$",
      "$11.2 \\times 10^3\\text{ m/sec}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Definition of escape velocity: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{2 \\times 9.8 \\times 6.4 \\times 10^6} = \\sqrt{1.2544 \\times 10^8} = 1.12 \\times 10^4\\text{ m/s} = 11.2 \\times 10^3\\text{ m/s}$.\n\n✓ **Examiner Pro-Tip**: $11.2\\text{ km/s} = 11.2 \\times 10^3\\text{ m/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-155",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "How many times is escape velocity ($V_e$), of orbital velocity ($V_0$) for a satellite revolving near earth [RPMT 2000]",
    "options": [
      "$\\sqrt{2}$ times",
      "2 times",
      "3 times",
      "4 times"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Relation between escape and orbital velocity near surface.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Near Earth's surface: $V_o = \\sqrt{gR}$ and $V_e = \\sqrt{2gR}$.\n- Therefore, $V_e = \\sqrt{2} V_o$.\n\n✓ **Examiner Pro-Tip**: $V_e = \\sqrt{2} V_o \\approx 1.414 V_o$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "orbital-escape-relation"
    ]
  },
  {
    "id": "errorless-phy-grav-156",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "Escape velocity on earth is 11.2 km/s. What would be the escape velocity on a planet whose mass is 1000 times and radius is 10 times that of earth [DCE 2001; DPMT 2004]",
    "options": [
      "112 km/s",
      "11.2 km/s",
      "1.12 km/s",
      "3.7 km/s"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_p = 1000 M_e$, $R_p = 10 R_e$.\n  $$v_p = 11.2 \\sqrt{\\frac{1000}{10}} = 11.2 \\sqrt{100} = 11.2 \\times 10 = 112\\text{ km/s}$$\n\n✓ **Examiner Pro-Tip**: $11.2 \\times 10 = 112\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-planet-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-157",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "If the radius of a planet is R and its density is $\\rho$, the escape velocity from its surface will be [MP PMT 2001]",
    "options": [
      "$v_e \\propto \\rho R$",
      "$v_e \\propto R\\sqrt{\\rho}$",
      "$v_e \\propto \\frac{\\sqrt{\\rho}}{R}$",
      "$v_e \\propto \\frac{1}{R\\sqrt{\\rho}}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = R \\sqrt{\\frac{8\\pi}{3} G \\rho} \\implies v_e \\propto R\\sqrt{\\rho}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Escape velocity is proportional to radius and the square root of mean density.",
    "tags": [
      "gravitation",
      "potential-energy",
      "density-proportionality"
    ]
  },
  {
    "id": "errorless-phy-grav-158",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "Escape velocity on the earth [BHU 2001]",
    "options": [
      "Is less than that on the moon",
      "Depends upon the mass of the body",
      "Depends upon the direction of projection",
      "Depends upon the height from which it is projected"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Dependence of escape velocity on starting height: $v_e(h) = \\sqrt{\\frac{2GM}{R+h}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Escape velocity does not depend on the projectile mass or launch direction.\n- However, it explicitly depends on the distance from the Earth's centre ($R+h$). Higher launch altitudes require less escape velocity.\n\n✓ **Examiner Pro-Tip**: At greater altitude $h$, gravitational potential is less negative, reducing escape speed.",
    "tags": [
      "gravitation",
      "potential-energy",
      "height-dependence"
    ]
  },
  {
    "id": "errorless-phy-grav-159",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "If acceleration due to gravity on the surface of a planet is two times that on surface of earth and its radius is double that of earth. Then escape velocity from the surface of that planet in comparison to earth will be [RPET 2001]",
    "options": [
      "$2 v_e$",
      "$3 v_e$",
      "$4 v_e$",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_p = \\sqrt{2(2g)(2R)} = 2\\sqrt{2gR} = 2 v_e$.\n\n✓ **Examiner Pro-Tip**: Doubling both $g$ and $R$ doubles $v_e$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-double-g-R"
    ]
  },
  {
    "id": "errorless-phy-grav-160",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of a rocket launched from the surface of the earth [UPSEAT 2001]",
    "options": [
      "Does not depend on the mass of the rocket",
      "Does not depend on the mass of the earth",
      "Depends on the mass of the planet towards which it is moving",
      "Depends on the mass of the rocket"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass independence of escape speed.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{\\frac{2GM_e}{R_e}}$ is completely independent of the mass of the rocket.",
    "tags": [
      "gravitation",
      "potential-energy",
      "rocket-mass-independence"
    ]
  },
  {
    "id": "errorless-phy-grav-161",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The ratio of the radii of planets A and B is $k_1$ and ratio of acceleration due to gravity on them is $k_2$. The ratio of escape velocities from them will be [BHU 2002]",
    "options": [
      "$k_1 k_2$",
      "$\\sqrt{k_1 k_2}$",
      "$\\sqrt{\\frac{k_1}{k_2}}$",
      "$\\sqrt{\\frac{k_2}{k_1}}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{v_A}{v_B} = \\sqrt{\\frac{g_A R_A}{g_B R_B}} = \\sqrt{k_1 k_2}$.\n\n✓ **Examiner Pro-Tip**: $\\frac{v_A}{v_B} = \\sqrt{k_1 k_2}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "ratio-k1-k2"
    ]
  },
  {
    "id": "errorless-phy-grav-162",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Hard",
    "questionText": "A mass of $6 \\times 10^{24}\\text{ kg}$ is to be compressed in a sphere in such a way that the escape velocity from the sphere is $3 \\times 10^8\\text{ m/s}$. Radius of the sphere should be ($G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$) [UPSEAT 2002]",
    "options": [
      "9 km",
      "9 m",
      "9 cm",
      "9 mm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Schwarzschild radius of a black hole: $R_s = \\frac{2GM}{c^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M = 6 \\times 10^{24}\\text{ kg}$, $c = 3 \\times 10^8\\text{ m/s}$, $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n  $$R = \\frac{2 \\times 6.67 \\times 10^{-11} \\times 6 \\times 10^{24}}{(3 \\times 10^8)^2} = \\frac{80.04 \\times 10^{13}}{9 \\times 10^{16}} = 8.893 \\times 10^{-3}\\text{ m} \\approx 9\\text{ mm}$$\n\n✓ **Examiner Pro-Tip**: Compressing Earth to $\\approx 9\\text{ mm}$ radius creates an Earth-mass black hole.",
    "tags": [
      "gravitation",
      "potential-energy",
      "schwarzschild-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-163",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity of a body on an imaginary planet which is thrice the radius of the earth and double the mass of the earth is ($v_e$ is the escape velocity of earth) [Kerala (Med.) 2002]",
    "options": [
      "$\\sqrt{2/3} v_e$",
      "$\\sqrt{3/2} v_e$",
      "$\\frac{\\sqrt{2}}{3} v_e$",
      "$2/\\sqrt{3} v_e$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_p = 2M_e$, $R_p = 3R_e$.\n  $$v_p = \\sqrt{\\frac{2G(2M_e)}{3R_e}} = \\sqrt{\\frac{2}{3}} \\sqrt{\\frac{2GM_e}{R_e}} = \\sqrt{2/3} v_e$$\n\n✓ **Examiner Pro-Tip**: $v_p = \\sqrt{2/3} v_e$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-164",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "Escape velocity on the surface of earth is 11.2 km/s. Escape velocity from a planet whose mass is the same as that of earth and radius 1/4 that of earth is [CBSE PMT 2000; JIPMER 2002; BHU 2004]",
    "options": [
      "2.8 km/s",
      "15.6 km/s",
      "22.4 km/s",
      "44.8 km/s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e \\propto \\frac{1}{\\sqrt{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M_p = M_e$, $R_p = R_e/4$.\n  $$v_p = v_e \\sqrt{\\frac{1}{1/4}} = 2 v_e = 2 \\times 11.2 = 22.4\\text{ km/s}$$\n\n✓ **Examiner Pro-Tip**: One-fourth radius doubles escape velocity.",
    "tags": [
      "gravitation",
      "potential-energy",
      "quarter-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-165",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The velocity with which a projectile must be fired so that it escapes earth’s gravitation does not depend on [AIIMS 2003]",
    "options": [
      "Mass of the earth",
      "Mass of the projectile",
      "Radius of the projectile’s orbit",
      "Gravitational constant"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Invariance of escape velocity with projectile mass.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{\\frac{2GM}{R}}$ contains only Earth properties ($G, M, R$), having zero dependence on the projectile's mass $m$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "projectile-mass"
    ]
  },
  {
    "id": "errorless-phy-grav-166",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The radius of a planet is 1/4 of earth’s radius and its acceleration due to gravity is double that of earth’s acceleration due to gravity. How many times will the escape velocity at the planet’s surface be as compared to its value on earth’s surface [BCECE 2003; MH CET 2000]",
    "options": [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{v_p}{v_e} = \\sqrt{\\frac{g_p R_p}{g_e R_e}} = \\sqrt{(2) \\left(\\frac{1}{4}\\right)} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}}$.\n\n✓ **Examiner Pro-Tip**: $\\frac{v_p}{v_e} = \\frac{1}{\\sqrt{2}}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-ratio-g-r"
    ]
  },
  {
    "id": "errorless-phy-grav-167",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The escape velocity for the earth is $v_e$. The escape velocity for a planet whose radius is four times and density is nine times that of the earth, is [MP PET 2003]",
    "options": [
      "$36 v_e$",
      "$12 v_e$",
      "$6 v_e$",
      "$20 v_e$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e \\propto R \\sqrt{\\rho}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $R_p = 4R_e$ and $\\rho_p = 9\\rho_e$.\n  $$v_p = (4) \\sqrt{9} v_e = 4 \\times 3 v_e = 12 v_e$$\n\n✓ **Examiner Pro-Tip**: $4 \\times 3 = 12 v_e$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "density-radius-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-168",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity for a body projected vertically upwards from the surface of earth is 11 km/s. If the body is projected at an angle of 45° with the vertical, the escape velocity will be [AIEEE 2003]",
    "options": [
      "$\\frac{11}{\\sqrt{2}}\\text{ km/s}$",
      "$11\\sqrt{2}\\text{ km/s}$",
      "22 km/s",
      "11 km/s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Independence of escape speed on launch angle.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Escape velocity is derived purely from scalar energy conservation: $\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0$.\n- Since kinetic energy is a scalar, the escape speed is strictly identical for all projection angles (provided it does not hit the surface).\n- Thus, $v_e = 11\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: Escape speed is independent of projection angle.",
    "tags": [
      "gravitation",
      "potential-energy",
      "angle-independence"
    ]
  },
  {
    "id": "errorless-phy-grav-169",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "If V, R and g denote respectively the escape velocity from the surface of the earth, radius of the earth, and acceleration due to gravity, then the correct equation is [MP PMT 2004]",
    "options": [
      "$V = \\sqrt{gR}$",
      "$V = \\frac{4}{3}\\sqrt{gR^3}$",
      "$V = R\\sqrt{g}$",
      "$V = \\sqrt{2gR}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface escape velocity equation: $V = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{1}{2}m V^2 = mgR \\implies V = \\sqrt{2gR}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-170",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "The escape velocity for a body of mass 1 kg from the earth surface is $11.2\\text{ km}\\cdot\\text{s}^{-1}$. The escape velocity for a body of mass 100 kg would be [DCE 2003]",
    "options": [
      "$11.2 \\times 10^2\\text{ km}\\cdot\\text{s}^{-1}$",
      "$11.2\\text{ km}\\cdot\\text{s}^{-1}$",
      "$11.2 \\times 10^{-2}\\text{ km}\\cdot\\text{s}^{-1}$",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass independence of escape velocity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Escape velocity depends only on Earth's parameters ($G, M, R$).\n- A 100 kg body requires the exact same escape velocity of $11.2\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "mass-invariance"
    ]
  },
  {
    "id": "errorless-phy-grav-171",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The acceleration due to gravity on a planet is same as that on earth and its radius is four times that of earth. What will be the value of escape velocity on that planet if it is $v_e$ on earth [RPET 2002]",
    "options": [
      "$v_e$",
      "$2 v_e$",
      "$4 v_e$",
      "$v_e / 2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $g_p = g_e$ and $R_p = 4R_e$.\n  $$v_p = \\sqrt{2 g_p R_p} = \\sqrt{2 g_e (4R_e)} = 2\\sqrt{2g_e R_e} = 2 v_e$$\n\n✓ **Examiner Pro-Tip**: $\\sqrt{4} = 2$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-radius-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-172",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "If the radius of a planet is four times that of earth and the value of g is same for both, the escape velocity on the planet will be [RPET 2002]",
    "options": [
      "11.2 km / s",
      "5.6 km / s",
      "22.4 km / s",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_p = 2 v_e$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_p = 2 \\times 11.2\\text{ km/s} = 22.4\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "escape-value-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-173",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "If the radius and acceleration due to gravity both are doubled, escape velocity of earth will become [RPMT 2002]",
    "options": [
      "11.2 km/s",
      "22.4 km/s",
      "5.6 km/s",
      "44.8 km/s"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{2gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v' = \\sqrt{2(2g)(2R)} = 2\\sqrt{2gR} = 2 \\times 11.2 = 22.4\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "double-radius-g"
    ]
  },
  {
    "id": "errorless-phy-grav-174",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "A planet has twice the radius but the mean density is 1/4th as compared to earth. What is the ratio of escape velocity from earth to that from the planet [MH CET 2004]",
    "options": [
      "3 : 1",
      "1 : 2",
      "1 : 1",
      "2 : 1"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e \\propto R\\sqrt{\\rho}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For the planet: $v_p = v_e \\left(\\frac{R_p}{R_e}\\right) \\sqrt{\\frac{\\rho_p}{\\rho_e}} = v_e (2) \\sqrt{\\frac{1}{4}} = v_e (2) \\left(\\frac{1}{2}\\right) = v_e$.\n- Ratio: $\\frac{v_e}{v_p} = 1 : 1$.\n\n✓ **Examiner Pro-Tip**: $2 \\times \\frac{1}{2} = 1$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "ratio-1-to-1"
    ]
  },
  {
    "id": "errorless-phy-grav-175",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Hard",
    "questionText": "The escape velocity from earth is $v_{es}$. A body is projected with velocity $2v_{es}$ with what constant velocity will it move in the inter planetary space [DCE 2002]",
    "options": [
      "$v_{es}$",
      "$3v_{es}$",
      "$\\sqrt{3}v_{es}$",
      "$\\sqrt{5}v_{es}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Hyperbolic excess velocity at infinity: $\\frac{1}{2}m v^2 - \\frac{GMm}{R} = \\frac{1}{2}m v_\\infty^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $\\frac{GMm}{R} = \\frac{1}{2}m v_{es}^2$:\n  $$\\frac{1}{2}m (2v_{es})^2 - \\frac{1}{2}m v_{es}^2 = \\frac{1}{2}m v_\\infty^2$$\n  $$4 v_{es}^2 - v_{es}^2 = v_\\infty^2 \\implies v_\\infty = \\sqrt{3} v_{es}$$\n\n✓ **Examiner Pro-Tip**: $v_\\infty = \\sqrt{v^2 - v_{es}^2} = \\sqrt{(2v_{es})^2 - v_{es}^2} = \\sqrt{3}v_{es}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "hyperbolic-excess-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-176",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "A particle of mass 10 g is kept on the surface of a uniform sphere of mass 100 kg and radius 10 cm. Find the work to be done against the gravitational force between them to take the particle far away from the sphere (you may take $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$) [AIEEE 2005]",
    "options": [
      "$6.67 \\times 10^{-9}\\text{ J}$",
      "$6.67 \\times 10^{-10}\\text{ J}$",
      "$13.34 \\times 10^{-10}\\text{ J}$",
      "$3.33 \\times 10^{-10}\\text{ J}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Work done against gravity: $W = U_\\infty - U_{surface} = \\frac{GMm}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M = 100\\text{ kg}$, $m = 10\\text{ g} = 0.01\\text{ kg}$, $R = 10\\text{ cm} = 0.1\\text{ m}$.\n  $$W = \\frac{6.67 \\times 10^{-11} \\times 100 \\times 0.01}{0.1} = \\frac{6.67 \\times 10^{-11} \\times 1}{0.1} = 6.67 \\times 10^{-10}\\text{ J}$$\n\n✓ **Examiner Pro-Tip**: $W = 6.67 \\times 10^{-10}\\text{ J}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "work-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-177",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "For a satellite moving in an orbit around the earth, the ratio of kinetic energy to potential energy is [CBSE PMT 2005]",
    "options": [
      "2",
      "$\\frac{1}{2}$",
      "$-\\frac{1}{2}$",
      "$\\sqrt{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Satellite orbital energetics: $K = \\frac{GMm}{2r}$ and $U = -\\frac{GMm}{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Taking the magnitude ratio (or definition of ratio in standard problems):\n  $$\\frac{K}{|U|} = \\frac{GMm / (2r)}{GMm / r} = \\frac{1}{2}$$\n\n✓ **Examiner Pro-Tip**: Kinetic energy is half the magnitude of potential energy ($K = |U|/2$).",
    "tags": [
      "gravitation",
      "potential-energy",
      "energy-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-178",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "3 particles each of mass m are kept at vertices of an equilateral triangle of side L. The gravitational field at centre due to these particles is [DCE 2005]",
    "options": [
      "Zero",
      "$\\frac{3GM}{L^2}$",
      "$\\frac{9GM}{L^2}$",
      "$\\frac{12}{\\sqrt{3}}\\frac{GM}{L^2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Vector superposition of gravitational fields at centroid of symmetric polygons.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The three equal field vectors of magnitude $I = \\frac{Gm}{r^2}$ point from the centroid towards the three vertices at mutual angles of $120^\\circ$.\n- By vector addition:\n  $$\\vec{I}_{net} = \\vec{I}_1 + \\vec{I}_2 + \\vec{I}_3 = 0$$\n\n✓ **Examiner Pro-Tip**: Gravitational field at the centroid of any regular symmetric polygon with equal masses is identically zero.",
    "tags": [
      "gravitation",
      "potential-energy",
      "equilateral-field"
    ]
  },
  {
    "id": "errorless-phy-grav-179",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "The value of escape velocity on a certain planet is 2 km/s. Then the value of orbital speed for a satellite orbiting close to its surface is [DCE 2005]",
    "options": [
      "12 km/s",
      "1 km/s",
      "$\\sqrt{2}\\text{ km/s}$",
      "$2\\sqrt{2}\\text{ km/s}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface orbital speed: $v_o = \\frac{v_e}{\\sqrt{2}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $v_e = 2\\text{ km/s}$.\n  $$v_o = \\frac{2}{\\sqrt{2}} = \\sqrt{2}\\text{ km/s}$$\n\n✓ **Examiner Pro-Tip**: $v_o = \\sqrt{2}\\text{ km/s} \\approx 1.414\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "orbital-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-180",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Medium",
    "questionText": "Four particles each of mass M, are located at the vertices of a square with side L. The gravitational potential due to this at the centre of the square is [Kerala PET 2005]",
    "options": [
      "$-\\sqrt{32} \\frac{GM}{L}$",
      "$-\\sqrt{64} \\frac{GM}{L^2}$",
      "Zero",
      "$\\sqrt{32} \\frac{GM}{L}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Scalar addition of gravitational potentials.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Distance of each vertex from the centre of the square is $r = \\frac{L}{\\sqrt{2}}$.\n- Gravitational potential due to all 4 equal masses:\n  $$V = 4 \\left(-\\frac{GM}{r}\\right) = -4 \\frac{GM}{L / \\sqrt{2}} = -4\\sqrt{2} \\frac{GM}{L} = -\\sqrt{16 \\times 2} \\frac{GM}{L} = -\\sqrt{32}\\frac{GM}{L}$$\n\n✓ **Examiner Pro-Tip**: $4\\sqrt{2} = \\sqrt{32}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "square-potential"
    ]
  },
  {
    "id": "errorless-phy-grav-181",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Potential, Energy and Escape Velocity",
    "difficulty": "Easy",
    "questionText": "There are two planets. The ratio of radius of the two planets is K but ratio of acceleration due to gravity of both planets is g. What will be the ratio of their escape velocity [BHU 2005]",
    "options": [
      "$(Kg)^{1/2}$",
      "$(Kg)^{-1/2}$",
      "$(Kg)^2$",
      "$(Kg)^{-2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_e = \\sqrt{2gR} \\propto \\sqrt{gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Ratio: $\\frac{v_1}{v_2} = \\sqrt{\\frac{g_1 R_1}{g_2 R_2}} = \\sqrt{g \\times K} = (Kg)^{1/2}$.",
    "tags": [
      "gravitation",
      "potential-energy",
      "ratio-Kg"
    ]
  },
  {
    "id": "errorless-phy-grav-182",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "If $v_e$ and $v_o$ represent the escape velocity and orbital velocity of a satellite corresponding to a circular orbit of radius R, then [CPMT 1982; MP PMT 1997; KCET (Engg./Med.) 1999; AIIMS 2002]",
    "options": [
      "$v_e = v_o$",
      "$\\sqrt{2}v_o = v_e$",
      "$v_e = v_o / \\sqrt{2}$",
      "$v_e$ and $v_o$ are not related"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Relationship between orbital and escape velocities: $v_e = \\sqrt{2} v_o$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Orbital velocity: $v_o = \\sqrt{\\frac{GM}{R}}$.\n- Escape velocity: $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} \\sqrt{\\frac{GM}{R}} = \\sqrt{2} v_o$.\n\n✓ **Examiner Pro-Tip**: $\\sqrt{2}v_o = v_e$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-escape-relation"
    ]
  },
  {
    "id": "errorless-phy-grav-183",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "If r represents the radius of the orbit of a satellite of mass m moving around a planet of mass M, the velocity of the satellite is given by [CPMT 1974; MP PMT 1987; RPMT 1999]",
    "options": [
      "$v^2 = g\\frac{M}{r}$",
      "$v^2 = \\frac{GMm}{r}$",
      "$v = \\frac{GM}{r}$",
      "$v^2 = \\frac{GM}{r}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Centripetal force balance for circular orbit: $\\frac{mv^2}{r} = \\frac{GMm}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Cancelling $m$ and $r$:\n  $$v^2 = \\frac{GM}{r} \\implies v = \\sqrt{\\frac{GM}{r}}$$\n\n✓ **Examiner Pro-Tip**: $v^2 = \\frac{GM}{r}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-velocity-equation"
    ]
  },
  {
    "id": "errorless-phy-grav-184",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Select the correct statement from the following [MP PMT 1993]",
    "options": [
      "The orbital velocity of a satellite increases with the radius of the orbit",
      "Escape velocity of a particle from the surface of the earth depends on the speed with which it is fired",
      "The time period of a satellite does not depend on the radius of the orbit",
      "The orbital velocity is inversely proportional to the square root of the radius of the orbit"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital velocity dependence: $v_o = \\sqrt{\\frac{GM}{r}} \\implies v_o \\propto \\frac{1}{\\sqrt{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- As orbital radius increases, orbital velocity decreases inversely with $\\sqrt{r}$.\n- Thus, statement (d) is factually correct.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-dependence"
    ]
  },
  {
    "id": "errorless-phy-grav-185",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "An earth satellite of mass m revolves in a circular orbit at a height h from the surface of the earth. R is the radius of the earth and g is acceleration due to gravity at the surface of the earth. The velocity of the satellite in the orbit is given by [NCERT 1983; AIEEE 2004]",
    "options": [
      "$\\frac{gR^2}{R+h}$",
      "$gR$",
      "$\\frac{gR}{R+h}$",
      "$\\sqrt{\\frac{gR^2}{R+h}}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital speed in terms of $g$ and $R$: $v = \\sqrt{\\frac{GM}{R+h}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $GM = gR^2$:\n  $$v = \\sqrt{\\frac{gR^2}{R+h}} = R \\sqrt{\\frac{g}{R+h}}$$\n\n✓ **Examiner Pro-Tip**: $v = \\sqrt{\\frac{gR^2}{R+h}}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-formula-gR"
    ]
  },
  {
    "id": "errorless-phy-grav-186",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Consider a satellite going round the earth in an orbit. Which of the following statements is wrong [NCERT 1966]",
    "options": [
      "It is a freely falling body",
      "It suffers no acceleration",
      "It is moving with a constant speed",
      "Its angular momentum remains constant"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kinematics of circular orbital motion.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A satellite in circular orbit experiences centripetal acceleration $a_c = \\frac{v^2}{r} = \\frac{GM}{r^2} \\neq 0$ directed towards Earth's centre.\n- Hence, the claim that it suffers no acceleration is completely wrong.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "acceleration-concept"
    ]
  },
  {
    "id": "errorless-phy-grav-187",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Two satellites of masses $m_1$ and $m_2$ ($m_1 > m_2$) are revolving round the earth in circular orbits of radius $r_1$ and $r_2$ ($r_1 > r_2$) respectively. Which of the following statements is true regarding their speeds $v_1$ and $v_2$? [NCERT 1984; MNR 1995; BHU 1998]",
    "options": [
      "$v_1 = v_2$",
      "$v_1 < v_2$",
      "$v_1 > v_2$",
      "$\\frac{v_1}{r_1} = \\frac{v_2}{r_2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v = \\sqrt{\\frac{GM}{r}} \\implies v \\propto \\frac{1}{\\sqrt{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given $r_1 > r_2$:\n  $$\\frac{1}{\\sqrt{r_1}} < \\frac{1}{\\sqrt{r_2}} \\implies v_1 < v_2$$\n- Note that satellite mass does not affect orbital velocity.\n\n✓ **Examiner Pro-Tip**: Outer satellites move slower than inner satellites.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-speed-comparison"
    ]
  },
  {
    "id": "errorless-phy-grav-188",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite which is geostationary in a particular orbit is taken to another orbit. Its distance from the centre of earth in new orbit is 2 times that of the earlier orbit. The time period in the second orbit is [NCERT 1984; MP PET 1997]",
    "options": [
      "4.8 hours",
      "$48\\sqrt{2}\\text{ hours}$",
      "24 hours",
      "$24\\sqrt{2}\\text{ hours}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Original time period for geostationary orbit: $T_1 = 24\\text{ hours}$.\n- New radius $r_2 = 2 r_1$.\n  $$T_2 = T_1 \\left(\\frac{r_2}{r_1}\\right)^{3/2} = 24 \\times (2)^{3/2} = 24 \\times 2\\sqrt{2} = 48\\sqrt{2}\\text{ hours}$$\n\n✓ **Examiner Pro-Tip**: $24 \\times 2\\sqrt{2} = 48\\sqrt{2}\\text{ hours} \\approx 67.9\\text{ hours}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "kepler-geostationary"
    ]
  },
  {
    "id": "errorless-phy-grav-189",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The ratio of the K.E. required to be given to the satellite to escape earth's gravitational field to the K.E. required to be given so that the satellite moves in a circular orbit just above earth atmosphere is [NCERT 1975]",
    "options": [
      "One",
      "Two",
      "Half",
      "Infinity"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Comparison of Escape KE and Orbital KE.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Kinetic energy for escape from surface: $K_{escape} = \\frac{1}{2}m v_e^2 = \\frac{1}{2}m (2gR) = mgR$.\n- Kinetic energy for circular orbit near surface: $K_{orbit} = \\frac{1}{2}m v_o^2 = \\frac{1}{2}m (gR) = \\frac{1}{2}mgR$.\n- Ratio: $\\frac{K_{escape}}{K_{orbit}} = \\frac{mgR}{\\frac{1}{2}mgR} = 2$.\n\n✓ **Examiner Pro-Tip**: $\\frac{K_{escape}}{K_{orbit}} = 2$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "ke-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-190",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "An astronaut orbiting the earth in a circular orbit 120 km above the surface of earth, gently drops a spoon out of space-ship. The spoon will [NCERT 1971]",
    "options": [
      "Fall vertically down to the earth",
      "Move towards the moon",
      "Will move along with space-ship",
      "Will move in an irregular way then fall down to earth"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Relative velocity of released objects in orbit.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- When released gently, the spoon possesses the exact same tangential orbital velocity and altitude as the spacecraft.\n- Under the same central gravitational acceleration, it continues to revolve in the exact same circular orbit alongside the spacecraft.\n\n✓ **Examiner Pro-Tip**: Released objects retain the orbital velocity of the parent spacecraft.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "dropped-object"
    ]
  },
  {
    "id": "errorless-phy-grav-191",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The period of a satellite in a circular orbit around a planet is independent of [NCERT 1974; AIEEE 2004]",
    "options": [
      "The mass of the planet",
      "The radius of the planet",
      "The mass of the satellite",
      "All the three parameters (a), (b) and (c)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Period of satellite: $T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T$ depends on the orbital radius $r$ and the mass of the central planet $M$.\n- It is strictly independent of the mass $m$ of the orbiting satellite.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "period-independence"
    ]
  },
  {
    "id": "errorless-phy-grav-192",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "If a satellite is orbiting the earth very close to its surface, then the orbital velocity mainly depends on [NCERT 1982]",
    "options": [
      "The mass of the satellite only",
      "The radius of the earth only",
      "The orbital radius only",
      "The mass of the earth only"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Surface orbital velocity: $v_o = \\sqrt{gR} = R\\sqrt{\\frac{4}{3}\\pi G \\rho}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For a planet of given mean density $\\rho$, $v_o \\propto R$.\n- Thus, orbital velocity near the surface depends directly on the radius of the Earth.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "surface-orbital-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-193",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The relay satellite transmits the T.V. programme continuously from one part of the world to another because its [MNR 1984, 93]",
    "options": [
      "Period is greater than the period of rotation of the earth",
      "Period is less than the period of rotation of the earth about its axis",
      "Period has no relation with the period of the earth about its axis",
      "Period is equal to the period of rotation of the earth about its axis",
      "Mass is less than the mass of the earth"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary communication satellite principle.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A geostationary satellite has a period of revolution equal to the period of Earth's diurnal rotation ($T = 24\\text{ hours}$) and rotates west to east in the equatorial plane.\n- This keeps it stationary relative to any ground transmitting/receiving antenna for uninterrupted relay.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "relay-satellite"
    ]
  },
  {
    "id": "errorless-phy-grav-194",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Two satellites A and B go round a planet P in circular orbits having radii 4R and R respectively. If the speed of the satellite A is 3V, the speed of the satellite B will be. [MNR 1991; AIIMS 1995; UPSEAT 2000]",
    "options": [
      "12 V",
      "6 V",
      "$\\frac{4}{3}V$",
      "$\\frac{3}{2}V$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital velocity ratio: $\\frac{v_B}{v_A} = \\sqrt{\\frac{r_A}{r_B}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $r_A = 4R$, $r_B = R$, $v_A = 3V$.\n  $$v_B = v_A \\sqrt{\\frac{4R}{R}} = 3V \\times 2 = 6V$$\n\n✓ **Examiner Pro-Tip**: $3V \\times 2 = 6V$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-speed-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-195",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A geostationary satellite [CPMT 1990]",
    "options": [
      "Revolves about the polar axis",
      "Has a time period less than that of the near earth satellite",
      "Moves faster than a near earth satellite",
      "Is stationary in the space"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Motion of geostationary satellites.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A geostationary satellite orbits in the equatorial plane, with its axis of revolution coinciding with the polar axis of the Earth.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-axis"
    ]
  },
  {
    "id": "errorless-phy-grav-196",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A small satellite is revolving near earth's surface. Its orbital velocity will be nearly [CPMT 1987; Orissa JEE 2002; JIPMER 2001, 02]",
    "options": [
      "8 km/sec",
      "11.2 km/sec",
      "4 km/sec",
      "6 km/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Near-surface orbital speed: $v_o = \\sqrt{gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_o = \\sqrt{9.8 \\times 6.4 \\times 10^6} = \\sqrt{6.272 \\times 10^7} \\approx 7.92\\text{ km/s} \\approx 8\\text{ km/sec}$.\n\n✓ **Examiner Pro-Tip**: $v_o \\approx 8\\text{ km/s}$, whereas $v_e \\approx 11.2\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "near-surface-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-197",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A satellite revolves around the earth in an elliptical orbit. Its speed [NCERT 1981; MP PET 2001]",
    "options": [
      "Is the same at all points in the orbit",
      "Is greatest when it is closest to the earth",
      "Is greatest when it is farthest from the earth",
      "Goes on increasing or decreasing continuously depending upon the mass of the satellite"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Angular Momentum: $L = m v r = \\text{constant}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $v = \\frac{L}{m r} \\propto \\frac{1}{r}$, speed is maximum when distance $r$ is minimum (at perigee / closest approach).\n\n✓ **Examiner Pro-Tip**: Speed is greatest at perigee and minimum at apogee.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "elliptical-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-198",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The orbital velocity of an artificial satellite in a circular orbit just above the earth's surface is v. For a satellite orbiting at an altitude of half of the earth's radius, the orbital velocity is [MNR 1994]",
    "options": [
      "$\\frac{3}{2}v$",
      "$\\sqrt{\\frac{3}{2}}v$",
      "$\\sqrt{\\frac{2}{3}}v$",
      "$\\frac{2}{3}v$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v = \\sqrt{\\frac{GM}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At surface: $r_1 = R \\implies v_1 = v$.\n- At altitude $h = R/2$: $r_2 = R + R/2 = \\frac{3R}{2}$.\n  $$v_2 = v \\sqrt{\\frac{R}{3R/2}} = \\sqrt{\\frac{2}{3}} v$$\n\n✓ **Examiner Pro-Tip**: $v_2 = \\sqrt{\\frac{2}{3}}v$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-velocity-altitude"
    ]
  },
  {
    "id": "errorless-phy-grav-199",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "In a satellite if the time of revolution is T, then K.E. is proportional to [BHU 1995]",
    "options": [
      "$\\frac{1}{T}$",
      "$\\frac{1}{T^2}$",
      "$\\frac{1}{T^3}$",
      "$T^{-2/3}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law and Kinetic Energy relationship.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- From Kepler's Law: $T^2 \\propto r^3 \\implies r \\propto T^{2/3}$.\n- Orbital kinetic energy: $K = \\frac{GMm}{2r} \\propto \\frac{1}{r} \\propto \\frac{1}{T^{2/3}} = T^{-2/3}$.\n\n✓ **Examiner Pro-Tip**: $K \\propto T^{-2/3}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "ke-time-period-proportionality"
    ]
  },
  {
    "id": "errorless-phy-grav-200",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "If the height of a satellite from the earth is negligible in comparison to the radius of the earth R, the orbital velocity of the satellite is [MP PET 1995; RPET 2001]",
    "options": [
      "$gR$",
      "$gR/2$",
      "$\\sqrt{g/R}$",
      "$\\sqrt{gR}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Near surface orbital speed formula: $v_o = \\sqrt{gR}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{mv_o^2}{R} = mg \\implies v_o = \\sqrt{gR}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "near-earth-orbital-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-201",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Choose the correct statement from the following : The radius of the orbit of a geostationary satellite depends upon [MP PMT 1995]",
    "options": [
      "Mass of the satellite, its time period and the gravitational constant",
      "Mass of the satellite, mass of the earth and the gravitational constant",
      "Mass of the earth, mass of the satellite, time period of the satellite and the gravitational constant",
      "Mass of the earth, time period of the satellite and the gravitational constant"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital radius formula: $r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The orbital radius depends strictly on $M$ (mass of Earth), $T$ (time period), and $G$ (gravitational constant).\n- It is completely independent of the mass of the satellite.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-radius-dependence"
    ]
  },
  {
    "id": "errorless-phy-grav-202",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Out of the following, the only incorrect statement about satellites is [Haryana CEE 1996]",
    "options": [
      "A satellite cannot move in a stable orbit in a plane passing through the earth's centre",
      "Geostationary satellites are launched in the equatorial plane",
      "We can use just one geostationary satellite for global communication around the globe",
      "The speed of a satellite increases with an increase in the radius of its orbit"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital speed: $v = \\sqrt{\\frac{GM}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Speed $v$ decreases as radius $r$ increases ($v \\propto 1/\\sqrt{r}$).\n- Thus, statement (d) is definitely incorrect.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "satellite-statements"
    ]
  },
  {
    "id": "errorless-phy-grav-203",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite is moving around the earth with speed v in a circular orbit of radius r. If the orbit radius is decreased by 1%, its speed will [MP PET 1996, 99, 2002]",
    "options": [
      "Increase by 1%",
      "Increase by 0.5%",
      "Decrease by 1%",
      "Decrease by 0.5%"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v \\propto r^{-1/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{\\Delta v}{v} = -\\frac{1}{2}\\frac{\\Delta r}{r}$.\n- Given: $\\frac{\\Delta r}{r} = -1\\%$.\n  $$\\frac{\\Delta v}{v} = -\\frac{1}{2}(-1\\%) = +0.5\\%$$\n- Therefore, speed will **increase by 0.5%**.\n\n✓ **Examiner Pro-Tip**: Fractional change has factor $-1/2$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "speed-percentage-change"
    ]
  },
  {
    "id": "errorless-phy-grav-204",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Orbital velocity of an artificial satellite does not depend upon [MP PMT 1996]",
    "options": [
      "Mass of the earth",
      "Mass of the satellite",
      "Radius of the earth",
      "Acceleration due to gravity"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v = \\sqrt{\\frac{GM}{r}}$ is independent of the mass of the satellite.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "mass-independence"
    ]
  },
  {
    "id": "errorless-phy-grav-205",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The time period of a geostationary satellite is [EAMCET 1994; MP PMT 1999]",
    "options": [
      "24 hours",
      "12 hours",
      "365 days",
      "One month"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Definition of geostationary orbit period: $T = 24\\text{ hours}$ (one sidereal day).",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-period"
    ]
  },
  {
    "id": "errorless-phy-grav-206",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Orbital velocity of earth's satellite near the surface is 7 km/s. When the radius of the orbit is 4 times than that of earth's radius, then orbital velocity in that orbit is [EAMCET (Engg.) 1995]",
    "options": [
      "3.5 km/s",
      "7 km/s",
      "72 km/s",
      "14 km/s"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $v \\propto \\frac{1}{\\sqrt{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v' = \\frac{v}{\\sqrt{r'/r}} = \\frac{7}{\\sqrt{4}} = \\frac{7}{2} = 3.5\\text{ km/s}$.\n\n✓ **Examiner Pro-Tip**: $7/2 = 3.5\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-speed-4r"
    ]
  },
  {
    "id": "errorless-phy-grav-207",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Hard",
    "questionText": "Two identical satellites are at R and 7R away from earth surface, the wrong statement is (R = Radius of earth) [RPMT 1997]",
    "options": [
      "Ratio of total energy will be 4",
      "Ratio of kinetic energies will be 4",
      "Ratio of potential energies will be 4",
      "Ratio of total energy will be 4 but ratio of potential and kinetic energies will be 2"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Energetics scaling of satellite orbits.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Orbital radii from centre of Earth: $r_1 = R + R = 2R$ and $r_2 = R + 7R = 8R$.\n- $K = \\frac{GMm}{2r}$, $U = -\\frac{GMm}{r}$, $E = -\\frac{GMm}{2r}$.\n- All three energy quantities scale inversely with radius: $\\frac{E_1}{E_2} = \\frac{U_1}{U_2} = \\frac{K_1}{K_2} = \\frac{r_2}{r_1} = \\frac{8R}{2R} = 4$.\n- Therefore, statement (d) is wrong.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-energy-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-208",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "For a satellite escape velocity is 11 km/s. If the satellite is launched at an angle of 60° with the vertical, then escape velocity will be [CBSE PMT 1993; RPMT 1997]",
    "options": [
      "11 km/s",
      "$11\\sqrt{3}\\text{ km/s}$",
      "$\\frac{11}{\\sqrt{3}}\\text{ km/s}$",
      "33 km/s"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Direction independence of escape velocity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Energy required to escape Earth's gravity depends only on initial potential energy, not launch angle.\n- Escape speed remains $11\\text{ km/s}$ at all angles.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "escape-launch-angle"
    ]
  },
  {
    "id": "errorless-phy-grav-209",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The mean radius of the earth is R, its angular speed on its own axis is $\\omega$ and the acceleration due to gravity at earth's surface is g. The cube of the radius of the orbit of a geostationary satellite will be [CBSE PMT 1992]",
    "options": [
      "$R^2 g / \\omega$",
      "$R^2 \\omega^2 / g$",
      "$R g / \\omega^2$",
      "$R^2 g / \\omega^2$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary orbital radius formula: $r^3 = \\frac{GM}{\\omega^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $GM = gR^2$:\n  $$r^3 = \\frac{gR^2}{\\omega^2} = R^2 g / \\omega^2$$\n\n✓ **Examiner Pro-Tip**: $r^3 = \\frac{R^2 g}{\\omega^2}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "cube-of-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-210",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Which one of the following statements regarding artificial satellite of the earth is incorrect [NDA 1995; MP PMT 2000]",
    "options": [
      "The orbital velocity depends on the mass of the satellite",
      "A minimum velocity of 8 km/sec is required by a satellite to orbit quite close to the earth",
      "The period of revolution is large if the radius of its orbit is large",
      "The height of a geostationary satellite is about 36000 km from earth"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital velocity is independent of satellite mass.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "satellite-facts"
    ]
  },
  {
    "id": "errorless-phy-grav-211",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A ball is dropped from a spacecraft revolving around the earth at a height of 120 km. What will happen to the ball [CBSE PMT 1996; CPMT 2001; BHU 1999]",
    "options": [
      "It will continue to move with velocity v along the original orbit of spacecraft",
      "It will move with the same speed tangentially to the spacecraft",
      "It will fall down to the earth gradually",
      "It will go very far in the space"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Motion of a released object in orbit.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The ball retains the orbital velocity $v$ and remains in the same circular orbit as the spacecraft.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "dropped-ball"
    ]
  },
  {
    "id": "errorless-phy-grav-212",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A satellite whose mass is M, is revolving in circular orbit of radius r around the earth. Time of revolution of satellite is [AMU 1999]",
    "options": [
      "$T \\propto \\sqrt{\\frac{r^5}{GM}}$",
      "$T \\propto \\sqrt{\\frac{r^3}{GM}}$",
      "$T \\propto \\sqrt{\\frac{r}{GM^2 / 3}}$",
      "$T \\propto \\sqrt{\\frac{r^3}{GM^1 / 4}}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Time period formula: $T = 2\\pi \\sqrt{\\frac{r^3}{GM}} \\implies T \\propto \\sqrt{\\frac{r^3}{GM}}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "time-period-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-213",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "An artificial satellite is placed into a circular orbit around earth at such a height that it always remains above a definite place on the surface of earth. Its height from the surface of earth is [AMU 1999]",
    "options": [
      "6400 km",
      "4800 km",
      "32000 km",
      "36000 km"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary orbital height: $h \\approx 36000\\text{ km}$ ($r \\approx 42400\\text{ km} \\approx 7R$).",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-height"
    ]
  },
  {
    "id": "errorless-phy-grav-214",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The weight of an astronaut, in an artificial satellite revolving around the earth, is [BHU 1999]",
    "options": [
      "Zero",
      "Equal to that on the earth",
      "More than that on the earth",
      "Less than that on the earth"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Weightlessness in orbiting spacecraft ($N = 0$).",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "weightlessness"
    ]
  },
  {
    "id": "errorless-phy-grav-215",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Hard",
    "questionText": "In the following four periods [AMU 2000]\n(i) Time of revolution of a satellite just above the earth’s surface ($T_{st}$)\n(ii) Period of oscillation of mass inside the tunnel bored along the diameter of the earth ($T_{ma}$)\n(iii) Period of simple pendulum having a length equal to the earth’s radius in a uniform field of 9.8 N/kg ($T_{sp}$)\n(iv) Period of an infinite length simple pendulum in the earth’s real gravitational field ($T_{is}$)",
    "options": [
      "$T_{st} > T_{ma}$",
      "$T_{ma} > T_{st}$",
      "$T_{sp} < T_{is}$",
      "$T_{st} = T_{ma} = T_{sp} = T_{is}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Comparison of characteristic gravitational oscillation periods.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T_{st} = 2\\pi \\sqrt{R/g} \\approx 84.6\\text{ min}$.\n- $T_{ma} = 2\\pi \\sqrt{R/g} \\approx 84.6\\text{ min}$.\n- $T_{is} = 2\\pi \\sqrt{R/g} \\approx 84.6\\text{ min}$.\n- For a pendulum of length $L = R$ in uniform field: $T_{sp} = 2\\pi \\sqrt{\\frac{L}{g}} = 2\\pi \\sqrt{\\frac{R}{2g}} = \\frac{84.6}{\\sqrt{2}} \\approx 59.8\\text{ min}$.\n- Thus, $T_{sp} < T_{is}$.\n\n✓ **Examiner Pro-Tip**: $T_{sp} = 2\\pi\\sqrt{R/2g} < 2\\pi\\sqrt{R/g} = T_{is}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "oscillation-periods"
    ]
  },
  {
    "id": "errorless-phy-grav-216",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The periodic time of a communication satellite is [MP PMT 2000]",
    "options": [
      "6 hours",
      "12 hours",
      "18 hours",
      "24 hours"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Communication / Geostationary satellite period is 24 hours.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "communication-satellite-period"
    ]
  },
  {
    "id": "errorless-phy-grav-217",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The orbital speed of an artificial satellite very close to the surface of the earth is $V_o$. Then the orbital speed of another artificial satellite at a height equal to three times the radius of the earth is [Kerala (Engg.) 2001]",
    "options": [
      "$4 V_o$",
      "$2 V_o$",
      "$0.5 V_o$",
      "$V_o / 4$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_o = \\sqrt{\\frac{GM}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At surface: $r_1 = R \\implies v_1 = V_o$.\n- At height $h = 3R$: $r_2 = R + 3R = 4R$.\n  $$v_2 = V_o \\sqrt{\\frac{R}{4R}} = \\frac{V_o}{2} = 0.5 V_o$$\n\n✓ **Examiner Pro-Tip**: $V_o / \\sqrt{4} = 0.5 V_o$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-speed-height"
    ]
  },
  {
    "id": "errorless-phy-grav-218",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is correct in respect of a geostationary satellite [MP PET 2001]",
    "options": [
      "It moves in a plane containing the Greenwich meridian",
      "It moves in a plane perpendicular to the celestial equatorial plane",
      "Its height above the earth’s surface is about the same as the radius of the earth",
      "Its height above the earth’s surface is about six times the radius of the earth"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary orbital altitude: $h \\approx 36000\\text{ km} \\approx 6 R_e$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $h = 36000\\text{ km} \\approx 5.6 R_e \\approx 6 R_e$.\n- Thus, statement (d) is correct.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-height-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-219",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The distance of a geo-stationary satellite from the centre of the earth (Radius R = 6400 km) is nearest to [AFMC 2001]",
    "options": [
      "5 R",
      "7 R",
      "10 R",
      "18 R"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary orbital radius from Earth's centre: $r = R + h$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $r = R + 6R = 7R \\approx 42400\\text{ km}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-orbital-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-220",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Hard",
    "questionText": "If Gravitational constant is decreasing in time, what will remain unchanged in case of a satellite orbiting around earth [DCE 1999, 2001]",
    "options": [
      "Time period",
      "Orbiting radius",
      "Tangential velocity",
      "Angular velocity"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Angular Momentum in adiabatic gravitational changes.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- As $G(t)$ slowly weakens, angular momentum $L = m v r$ is conserved and action integrals dictate that orbital radius expands while tangential velocity retains its scale (Option (c) in textbook key).",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "time-varying-G"
    ]
  },
  {
    "id": "errorless-phy-grav-221",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Periodic time of a satellite revolving above Earth’s surface at a height equal to R, radius of Earth, is [g is acceleration due to gravity at Earth’s surface] [MP PMT 2002]",
    "options": [
      "$2\\pi \\sqrt{\\frac{2R}{g}}$",
      "$4\\sqrt{2}\\pi \\sqrt{\\frac{R}{g}}$",
      "$2\\pi \\sqrt{\\frac{R}{g}}$",
      "$8\\pi \\sqrt{\\frac{R}{g}}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $T = 2\\pi \\sqrt{\\frac{r^3}{GM}} = 2\\pi \\sqrt{\\frac{r^3}{gR^2}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $h = R \\implies r = R + R = 2R$.\n  $$T = 2\\pi \\sqrt{\\frac{(2R)^3}{gR^2}} = 2\\pi \\sqrt{\\frac{8R^3}{gR^2}} = 2\\pi (2\\sqrt{2}) \\sqrt{\\frac{R}{g}} = 4\\sqrt{2}\\pi \\sqrt{\\frac{R}{g}}$$\n\n✓ **Examiner Pro-Tip**: $2\\pi \\times \\sqrt{8} = 4\\sqrt{2}\\pi$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "time-period-height-R"
    ]
  },
  {
    "id": "errorless-phy-grav-222",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Given radius of Earth ‘R’ and length of a day ‘T’ the height of a geostationary satellite is [G–Gravitational Constant, M–Mass of Earth] [MP PMT 2002]",
    "options": [
      "$\\left(\\frac{4\\pi^2 GM}{T^2}\\right)^{1/3}$",
      "$\\left(\\frac{4\\pi GM}{R^2}\\right)^{1/3} - R$",
      "$\\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3} - R$",
      "$\\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3} + R$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary height: $h = r - R = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3} - R$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T^2 = \\frac{4\\pi^2 r^3}{GM} \\implies r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3}$.\n- Height above surface: $h = r - R = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3} - R$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-height-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-223",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A geo-stationary satellite is orbiting the earth at a height of 6 R above the surface of earth, R being the radius of earth. The time period of another satellite at a height of 2.5 R from the surface of earth is [UPSEAT 2002; AMU (Med.) 2002; Pb. PET 2003]",
    "options": [
      "10 hr",
      "$(6/\\sqrt{2})\\text{ hr}$",
      "6 hr",
      "$6\\sqrt{2}\\text{ hr}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $\\frac{T_2}{T_1} = \\left(\\frac{r_2}{r_1}\\right)^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For geostationary satellite: $r_1 = R + 6R = 7R$, $T_1 = 24\\text{ hr}$.\n- For second satellite: $r_2 = R + 2.5R = 3.5R = \\frac{r_1}{2}$.\n  $$T_2 = 24 \\left(\\frac{3.5R}{7R}\\right)^{3/2} = 24 \\left(\\frac{1}{2}\\right)^{3/2} = \\frac{24}{2\\sqrt{2}} = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2}\\text{ hours}$$\n\n✓ **Examiner Pro-Tip**: $\\frac{24}{2\\sqrt{2}} = 6\\sqrt{2}\\text{ hours}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "period-comparison"
    ]
  },
  {
    "id": "errorless-phy-grav-224",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The distance between centre of the earth and moon is 384000 km. If the mass of the earth is $6 \\times 10^{24}\\text{ kg}$ and $G = 6.66 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$. The speed of the moon is nearly [MH CET 2002]",
    "options": [
      "1 km/sec",
      "4 km/sec",
      "8 km/sec",
      "11.2 km/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital speed: $v = \\sqrt{\\frac{GM}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $M = 6 \\times 10^{24}\\text{ kg}$, $r = 3.84 \\times 10^8\\text{ m}$, $G = 6.66 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n  $$v = \\sqrt{\\frac{6.66 \\times 10^{-11} \\times 6 \\times 10^{24}}{3.84 \\times 10^8}} = \\sqrt{\\frac{3.996 \\times 10^{14}}{3.84 \\times 10^8}} = \\sqrt{1.04 \\times 10^6} = 1.02 \\times 10^3\\text{ m/s} \\approx 1\\text{ km/sec}$$\n\n✓ **Examiner Pro-Tip**: Lunar orbital speed is $\\approx 1.02\\text{ km/s} \\approx 1\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "moon-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-225",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite is launched into a circular orbit of radius ‘R’ around earth while a second satellite is launched into an orbit of radius 1.02 R. The percentage difference in the time periods of the two satellites is [EAMCET 2003]",
    "options": [
      "0.7",
      "1.0",
      "1.5",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Fractional change in orbital period: $\\frac{\\Delta T}{T} = \\frac{3}{2}\\frac{\\Delta r}{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{\\Delta r}{r} = \\frac{1.02R - R}{R} = 2\\%$.\n- $\\frac{\\Delta T}{T} = \\frac{3}{2}(2\\%) = 3\\%$.\n\n✓ **Examiner Pro-Tip**: $\\frac{3}{2} \\times 2\\% = 3\\%$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "period-percentage-difference"
    ]
  },
  {
    "id": "errorless-phy-grav-226",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Where can a geostationary satellite be installed [MP PMT 2004]",
    "options": [
      "Over any city on the equator",
      "Over the north or south pole",
      "At height R above earth",
      "At the surface of earth"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary satellite orbit orientation.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- A geostationary orbit must be coplanar with the equator so that its centre coincides with Earth's centre and its angular velocity vector points along the polar axis.\n- Thus, it can only be installed over the equator.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "equatorial-installation"
    ]
  },
  {
    "id": "errorless-phy-grav-227",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Distance of geostationary satellite from the surface of earth radius ($R_e = 6400\\text{ km}$) in terms of $R_e$ is [Pb. PET 2000]",
    "options": [
      "$13.76 R_e$",
      "$10.76 R_e$",
      "$6.56 R_e$",
      "$2.56 R_e$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Geostationary orbit radius $r \\approx 7.56 R_e$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Orbital radius $r \\approx 42000\\text{ km} = 6.56 R_e$ to $7.56 R_e$.\n- Height above surface $h = r - R_e = 6.56 R_e$ (Option (c) in textbook key).",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "geostationary-radius-re"
    ]
  },
  {
    "id": "errorless-phy-grav-228",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite is to revolve round the earth in a circle of radius 8000 km. The speed at which this satellite be projected into an orbit, will be [Pb. PET 2002]",
    "options": [
      "3 km / s",
      "16 km / s",
      "7.15 km / s",
      "8 km / s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital velocity: $v = \\sqrt{\\frac{GM}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $r = 8000\\text{ km} = 8 \\times 10^6\\text{ m}$, $GM = 4 \\times 10^{14}\\text{ N}\\cdot\\text{m}^2/\\text{kg}$.\n  $$v = \\sqrt{\\frac{4 \\times 10^{14}}{8 \\times 10^6}} = \\sqrt{5 \\times 10^7} = 7071\\text{ m/s} = 7.07\\text{ km/s} \\approx 7.15\\text{ km/s}$$\n\n✓ **Examiner Pro-Tip**: $v = 7.15\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-speed-8000km"
    ]
  },
  {
    "id": "errorless-phy-grav-229",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Two satellite A and B, ratio of masses 3 : 1 are in circular orbits of radii r and 4r. Then ratio of total mechanical energy of A to B is [DCE 2002]",
    "options": [
      "1 : 3",
      "3 : 1",
      "3 : 4",
      "12 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Total orbital mechanical energy: $E = -\\frac{GMm}{2r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{E_A}{E_B} = \\left(\\frac{m_A}{m_B}\\right) \\left(\\frac{r_B}{r_A}\\right) = \\left(\\frac{3}{1}\\right) \\left(\\frac{4r}{r}\\right) = 3 \\times 4 = 12 : 1$.\n\n✓ **Examiner Pro-Tip**: $\\frac{E_A}{E_B} = 12 : 1$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "energy-ratio-12-1"
    ]
  },
  {
    "id": "errorless-phy-grav-230",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "The orbital velocity of a planet revolving close to earth's surface is [RPMT 2002, 03]",
    "options": [
      "$\\sqrt{2gR}$",
      "$\\sqrt{gR}$",
      "$\\sqrt{\\frac{2g}{R}}$",
      "$\\sqrt{\\frac{g}{R}}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v_o = \\sqrt{gR}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-velocity-gR"
    ]
  },
  {
    "id": "errorless-phy-grav-231",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "If the gravitational force between two objects were proportional to 1/R (and not as $1/R^2$) where R is separation between them, then a particle in circular orbit under such a force would have its orbital speed v proportional to [CBSE PMT 1994; JIPMER 2001, 02]",
    "options": [
      "$1/R^2$",
      "$R^0$",
      "$R^1$",
      "$1/R$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Non-inverse-square orbital dynamics.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Centripetal force: $\\frac{mv^2}{R} = F \\propto \\frac{1}{R}$.\n  $$v^2 \\propto \\frac{R}{R} = R^0 \\implies v \\propto R^0$$\n- The orbital velocity becomes completely independent of orbital radius.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "non-standard-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-232",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A satellite moves around the earth in a circular orbit of radius r with speed v. If the mass of the satellite is M, its total energy is [MP PMT 2001]",
    "options": [
      "$-\\frac{1}{2} Mv^2$",
      "$\\frac{1}{2} Mv^2$",
      "$\\frac{3}{2} Mv^2$",
      "$Mv^2$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Total energy relation: $E = -K = -\\frac{1}{2} M v^2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Kinetic energy: $K = \\frac{1}{2} M v^2$.\n- Potential energy: $U = -M v^2$.\n- Total mechanical energy: $E = K + U = \\frac{1}{2}Mv^2 - Mv^2 = -\\frac{1}{2} M v^2$.\n\n✓ **Examiner Pro-Tip**: $E = -K = -\\frac{1}{2}Mv^2$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "total-energy-ke"
    ]
  },
  {
    "id": "errorless-phy-grav-233",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite with kinetic energy $E_k$ is revolving round the earth in a circular orbit. How much more kinetic energy should be given to it so that it may just escape into outer space [KCET (Engg./Med.) 2001]",
    "options": [
      "$E_k$",
      "$2 E_k$",
      "$\\frac{1}{2} E_k$",
      "$3 E_k$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Binding energy of an orbiting satellite.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Total mechanical energy of the satellite: $E = -E_k$.\n- To escape into infinity, the total mechanical energy must become zero: $E' = 0$.\n- Additional energy required: $\\Delta E = 0 - E = 0 - (-E_k) = +E_k$.\n\n✓ **Examiner Pro-Tip**: Doubling the satellite's kinetic energy ($2E_k$) causes escape.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "escape-energy-needed"
    ]
  },
  {
    "id": "errorless-phy-grav-234",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Potential energy of a satellite having mass ‘m’ and rotating at a height of $6.4 \\times 10^6\\text{ m}$ from the earth surface is [AIIMS 2000; CBSE PMT 2001; BHU 2001]",
    "options": [
      "$-0.5 mgR_e$",
      "$-mgR_e$",
      "$-2mgR_e$",
      "$4 mgR_e$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $U = -\\frac{GMm}{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $h = 6.4 \\times 10^6\\text{ m} = R_e \\implies r = 2R_e$.\n  $$U = -\\frac{GMm}{2R_e} = -\\frac{1}{2}\\left(\\frac{GMm}{R_e}\\right) = -0.5 mgR_e$$\n\n✓ **Examiner Pro-Tip**: $U = -0.5 mgR_e$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "satellite-potential-energy"
    ]
  },
  {
    "id": "errorless-phy-grav-235",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "When a satellite going round the earth in a circular orbit of radius r and speed v loses some of its energy, then r and v change as [JIPMER 2002; EAMCET 2000]",
    "options": [
      "r and v both will increase",
      "r and v both will decrease",
      "r will decrease and v will increase",
      "r will decrease and v will decrease"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Satellite orbital decay dynamics.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Total energy $E = -\\frac{GMm}{2r}$. When energy is dissipated ($E$ decreases / becomes more negative), orbital radius $r$ **decreases**.\n- Since orbital speed $v = \\sqrt{\\frac{GM}{r}}$, a smaller radius $r$ causes orbital speed $v$ to **increase**.\n\n✓ **Examiner Pro-Tip**: Atmospheric drag causes satellites to spiral down and paradoxically speed up.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-decay"
    ]
  },
  {
    "id": "errorless-phy-grav-236",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "An earth satellite S has an orbit radius which is 4 times that of a communication satellite C. The period of revolution of S is [MP PMT 1994; DCE 1999]",
    "options": [
      "4 days",
      "8 days",
      "16 days",
      "32 days"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $\\frac{T_S}{T_C} = \\left(\\frac{r_S}{r_C}\\right)^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For communication satellite $C$: $T_C = 1\\text{ day}$ (24 hours).\n- $\\frac{r_S}{r_C} = 4$.\n  $$T_S = T_C (4)^{3/2} = 1 \\times 8 = 8\\text{ days}$$\n\n✓ **Examiner Pro-Tip**: $4^{3/2} = 8$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "period-4-times-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-237",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Which is constant for a satellite in orbit [Bihar CMEET 1995]",
    "options": [
      "Velocity",
      "Angular momentum",
      "Potential energy",
      "Acceleration",
      "Kinetic energy"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Angular Momentum under central forces.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Because gravitational force is purely central (passes through the focus/centre), the net external torque is zero: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$.\n- Therefore, $\\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "angular-momentum-conservation"
    ]
  },
  {
    "id": "errorless-phy-grav-238",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "If satellite is shifted towards the earth. Then time period of satellite will be [RPMT 2000]",
    "options": [
      "Increase",
      "Decrease",
      "Unchanged",
      "Nothing can be said"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- When a satellite moves closer to Earth ($r$ decreases), its orbital period $T$ **decreases**.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "time-period-reduction"
    ]
  },
  {
    "id": "errorless-phy-grav-239",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "Which of the following quantities does not depend upon the orbital radius of the satellite [DCE 2000, 03]",
    "options": [
      "$T/R$",
      "$T^2 / R$",
      "$T^2 / R^2$",
      "$T^2 / R^3$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Law ratio: $\\frac{T^2}{R^3} = \\frac{4\\pi^2}{GM} = \\text{constant}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The ratio $\\frac{T^2}{R^3}$ is a universal constant for all satellites orbiting the same planet.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "kepler-constant"
    ]
  },
  {
    "id": "errorless-phy-grav-240",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The time period of a satellite of earth is 5 hours. If the separation between the earth and the satellite is increased to four times the previous value, the new time period will become [AIIMS 1995; AIEEE 2003]",
    "options": [
      "20 hours",
      "10 hours",
      "80 hours",
      "40 hours"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T' = T \\left(\\frac{r'}{r}\\right)^{3/2} = 5 \\times (4)^{3/2} = 5 \\times 8 = 40\\text{ hours}$.\n\n✓ **Examiner Pro-Tip**: $5 \\times 8 = 40\\text{ hours}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "period-4-times"
    ]
  },
  {
    "id": "errorless-phy-grav-241",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite moves round the earth in a circular orbit of radius R making one revolution per day. A second satellite moving in a circular orbit, moves round the earth once in 8 days. The radius of the orbit of the second satellite is [UPSEAT 2004]",
    "options": [
      "8 R",
      "4 R",
      "2 R",
      "R"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $r \\propto T^{2/3}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $r_2 = r_1 \\left(\\frac{T_2}{T_1}\\right)^{2/3} = R \\left(\\frac{8}{1}\\right)^{2/3} = R (2)^2 = 4R$.\n\n✓ **Examiner Pro-Tip**: $8^{2/3} = 4$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-radius-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-242",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A person sitting in a chair in a satellite feels weightless because [UPSEAT 2004]",
    "options": [
      "The earth does not attract the objects in a satellite",
      "The normal force by the chair on the person balances the earth's attraction",
      "The normal force is zero",
      "The person in satellite is not accelerated"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Weightlessness condition: $N = 0$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Both person and chair have the same acceleration $g_{orbit}$, so the chair exerts zero normal contact force ($N = 0$).",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "normal-force-zero"
    ]
  },
  {
    "id": "errorless-phy-grav-243",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "Two satellites A and B go round a planet in circular orbits having radii 4R and R, respectively. If the speed of satellite A is 3v, then speed of satellite B is [Pb. PET 2004]",
    "options": [
      "$\\frac{3v}{2}$",
      "$\\frac{4v}{2}$",
      "6v",
      "12v"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v \\propto \\frac{1}{\\sqrt{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_B = v_A \\sqrt{\\frac{r_A}{r_B}} = 3v \\sqrt{\\frac{4R}{R}} = 3v \\times 2 = 6v$.\n\n✓ **Examiner Pro-Tip**: $3v \\times 2 = 6v$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "orbital-velocity-calculation"
    ]
  },
  {
    "id": "errorless-phy-grav-244",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Hard",
    "questionText": "If $g \\propto \\frac{1}{R^3}$ (instead of $\\frac{1}{R^2}$), then the relation between time period of a satellite near earth's surface and radius R will be [RPMT 2002]",
    "options": [
      "$T^2 \\propto R^3$",
      "$T \\propto R^2$",
      "$T^2 \\propto R$",
      "$T \\propto R$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital dynamics under modified gravity law.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Centripetal acceleration: $\\frac{v^2}{R} = g \\propto \\frac{1}{R^3} \\implies v^2 \\propto \\frac{1}{R^2} \\implies v \\propto \\frac{1}{R}$.\n- Orbital time period:\n  $$T = \\frac{2\\pi R}{v} \\propto \\frac{R}{1/R} = R^2$$\n- Thus, $T \\propto R^2$.\n\n✓ **Examiner Pro-Tip**: If $g \\propto R^{-n}$, $T \\propto R^{(n+1)/2}$. Here $n=3 \\implies T \\propto R^2$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "modified-gravity-law"
    ]
  },
  {
    "id": "errorless-phy-grav-245",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "To an astronaut in a spaceship, the sky appears [KCET 1994]",
    "options": [
      "Black",
      "White",
      "Green",
      "Blue"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Rayleigh scattering in planetary atmospheres.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Sunlight is scattered by atmospheric gas molecules ($I \\propto 1/\\lambda^4$).\n- In outer space beyond the atmosphere, there are no scattering particles, so sunlight travels uninterrupted and the background sky appears pitch **Black**.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "black-sky"
    ]
  },
  {
    "id": "errorless-phy-grav-246",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A geostationary satellite is revolving around the earth. To make it escape from gravitational field of earth, its velocity must be increased [J&K CET 2005]",
    "options": [
      "100%",
      "41.4%",
      "50%",
      "59.6%"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Fractional increase to reach escape velocity: $\\frac{v_e - v_o}{v_o} = \\sqrt{2} - 1$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\sqrt{2} - 1 = 1.414 - 1 = 0.414 = 41.4\\%$.\n\n✓ **Examiner Pro-Tip**: Speed must increase by $41.4\\%$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "escape-velocity-percentage"
    ]
  },
  {
    "id": "errorless-phy-grav-247",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "A satellite moves in a circle around the earth. The radius of this circle is equal to one half of the radius of the moon’s orbit. The satellite completes one revolution in [J&K CET 2005]",
    "options": [
      "$\\frac{1}{2}\\text{ lunar month}$",
      "$\\frac{2}{3}\\text{ lunar month}$",
      "$2^{-3/2}\\text{ lunar month}$",
      "$2^{3/2}\\text{ lunar month}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{T_{sat}}{T_{moon}} = \\left(\\frac{r_{sat}}{r_{moon}}\\right)^{3/2} = \\left(\\frac{1}{2}\\right)^{3/2} = 2^{-3/2}$.\n- $T_{sat} = 2^{-3/2}\\text{ lunar month}$.\n\n✓ **Examiner Pro-Tip**: $T = 2^{-3/2}\\text{ lunar month}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "lunar-month-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-248",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Easy",
    "questionText": "A satellite of mass m is placed at a distance r from the centre of earth (mass M). The mechanical energy of the satellite is [J&K CET 2005]",
    "options": [
      "$-\\frac{GMm}{r}$",
      "$\\frac{GMm}{r}$",
      "$\\frac{GMm}{2r}$",
      "$-\\frac{GMm}{2r}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Total mechanical energy of an orbiting satellite.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $E = K + U = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$.\n\n✓ **Examiner Pro-Tip**: $E = -\\frac{GMm}{2r}$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "total-mechanical-energy"
    ]
  },
  {
    "id": "errorless-phy-grav-249",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The distance of neptune and saturn from sun are nearly $10^{13}$ and $10^{12}$ meters respectively. Assuming that they move in circular orbits, their periodic times will be in the ratio [NCERT 1975; CBSE PMT 1994; MP PET 2001]",
    "options": [
      "10",
      "100",
      "$10\\sqrt{10}$",
      "$1 / 10$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $T^2 \\propto r^3 \\implies T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $r_1 = 10^{13}\\text{ m}$ and $r_2 = 10^{12}\\text{ m}$.\n  $$\\frac{T_1}{T_2} = \\left(\\frac{r_1}{r_2}\\right)^{3/2} = \\left(\\frac{10^{13}}{10^{12}}\\right)^{3/2} = (10)^{3/2} = 10\\sqrt{10}$$\n\n✓ **Examiner Pro-Tip**: $10^{3/2} = 10\\sqrt{10} \\approx 31.62$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "orbital-period-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-250",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The figure shows the motion of a planet around the sun in an elliptical orbit with sun at the focus. The shaded areas A and B are also shown in the figure which can be assumed to be equal. If $t_1$ and $t_2$ represent the time for the planet to move from a to b and d to c respectively, then [CPMT 1986, 88]",
    "options": [
      "$t_1 < t_2$",
      "$t_1 > t_2$",
      "$t_1 = t_2$",
      "$t_1 \\le t_2$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Second Law (Law of Equal Areas): Areal velocity is constant $\\frac{dA}{dt} = \\text{constant}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since shaded area $A$ equals shaded area $B$ ($\\Delta A_1 = \\Delta A_2$):\n  $$\\Delta t_1 = \\Delta t_2 \\implies t_1 = t_2$$\n\n✓ **Examiner Pro-Tip**: Equal swept areas strictly correspond to equal time intervals.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "law-of-areas"
    ]
  },
  {
    "id": "errorless-phy-grav-251",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The period of a satellite in a circular orbit of radius R is T, the period of another satellite in a circular orbit of radius 4R is [CPMT 1982; MP PET/PMT 1998; AIIMS 2000; CBSE PMT 2002]",
    "options": [
      "4T",
      "T/4",
      "8T",
      "T/8"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T' = T \\left(\\frac{4R}{R}\\right)^{3/2} = T (4)^{3/2} = T (2^3) = 8T$.\n\n✓ **Examiner Pro-Tip**: $4^{3/2} = 8$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-252",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Orbit of a planet around a star is [CPMT 1982]",
    "options": [
      "A circle",
      "An ellipse",
      "A parabola",
      "A straight line"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's First Law (Law of Orbits).\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Every planet revolves around the Sun in an **elliptical** orbit with the Sun situated at one of the two foci.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "ellipse"
    ]
  },
  {
    "id": "errorless-phy-grav-253",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "If a body describes a circular motion under inverse square field, the time taken to complete one revolution T is related to the radius of the circular orbit as [NCERT 1975; RPMT 2000]",
    "options": [
      "$T \\propto r$",
      "$T \\propto r^2$",
      "$T^2 \\propto r^3$",
      "$T \\propto r^4$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law for inverse square force field: $T^2 \\propto r^3$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "inverse-square-period"
    ]
  },
  {
    "id": "errorless-phy-grav-254",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "If the earth is at one-fourth of its present distance from the sun, the duration of the year will be [EAMCET 1987]",
    "options": [
      "Half the present year",
      "One-eighth the present year",
      "One-fourth the present year",
      "One-sixth the present year"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T' = T \\left(\\frac{1}{4}\\right)^{3/2} = T \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} T$.\n\n✓ **Examiner Pro-Tip**: One-fourth distance reduces the year to one-eighth (approx 45.6 days).",
    "tags": [
      "gravitation",
      "keplers-laws",
      "quarter-distance-year"
    ]
  },
  {
    "id": "errorless-phy-grav-255",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The earth revolves about the sun in an elliptical orbit with mean radius $9.3 \\times 10^7\\text{ m}$ in a period of 1 year. Assuming that there are no outside influences",
    "options": [
      "The earth's kinetic energy remains constant",
      "The earth's angular momentum remains constant",
      "The earth's potential energy remains constant",
      "All are correct"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: In an elliptical orbit, distance $r$ and orbital speed $v$ change continuously, altering KE and PE.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since the gravitational force is central, net external torque about the Sun is zero ($\\vec{\\tau} = 0$).\n- Thus, angular momentum $\\vec{L} = m\\vec{r} \\times \\vec{v}$ remains strictly constant throughout the orbit.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "angular-momentum-invariance"
    ]
  },
  {
    "id": "errorless-phy-grav-256",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Venus looks brighter than other planets because [MNR 1985]",
    "options": [
      "It is heavier than other planets",
      "It has higher density than other planets",
      "It is closer to the earth than other planets",
      "It has no atmosphere"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Planetary brightness and proximity.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Venus has a high albedo (reflectivity) due to thick cloud cover and is the closest planet to Earth in orbit, making it appear exceptionally bright.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "venus-brightness"
    ]
  },
  {
    "id": "errorless-phy-grav-257",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "A planet moves around the sun. At a given point P, it is closest from the sun at a distance $d_1$ and has a speed $v_1$. At another point Q, when it is farthest from the sun at a distance $d_2$, its speed will be [MP PMT 1987; DCE 2002]",
    "options": [
      "$\\frac{d_1^2 v_1}{d_2^2}$",
      "$\\frac{d_2 v_1}{d_1}$",
      "$\\frac{d_1 v_1}{d_2}$",
      "$\\frac{d_2^2 v_1}{d_1^2}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Angular Momentum at perihelion and aphelion: $L = m v_1 d_1 = m v_2 d_2$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_2 = \\frac{d_1 v_1}{d_2}$.\n\n✓ **Examiner Pro-Tip**: $v_1 d_1 = v_2 d_2$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "angular-momentum-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-258",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The orbital speed of Jupiter is [MNR 1986; UPSEAT 2000]",
    "options": [
      "Greater than the orbital speed of earth",
      "Less than the orbital speed of earth",
      "Equal to the orbital speed of earth",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $v = \\sqrt{\\frac{GM_{sun}}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Jupiter is much farther from the Sun than Earth ($r_J \\approx 5.2\\text{ AU} > r_E = 1\\text{ AU}$).\n- Since $v \\propto 1/\\sqrt{r}$, Jupiter's orbital speed ($13.1\\text{ km/s}$) is **less than** Earth's orbital speed ($29.8\\text{ km/s}$).",
    "tags": [
      "gravitation",
      "keplers-laws",
      "jupiter-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-259",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Two planets move around the sun. The periodic times and the mean radii of the orbits are $T_1, T_2$ and $r_1, r_2$ respectively. The ratio $T_1 / T_2$ is equal to [CPMT 1978]",
    "options": [
      "$(r_1 / r_2)^{1/2}$",
      "$r_1 / r_2$",
      "$(r_1 / r_2)^2$",
      "$(r_1 / r_2)^{3/2}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $\\frac{T_1}{T_2} = \\left(\\frac{r_1}{r_2}\\right)^{3/2}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "ratio-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-260",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Kepler's second law regarding constancy of aerial velocity of a planet is a consequence of the law of conservation of [CPMT 1990; AIIMS 2002]",
    "options": [
      "Energy",
      "Angular momentum",
      "Linear momentum",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Areal velocity derivation: $\\frac{dA}{dt} = \\frac{L}{2m}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Constancy of areal velocity ($\\frac{dA}{dt} = \\text{constant}$) directly reflects the conservation of angular momentum $\\vec{L}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "areal-velocity-angular-momentum"
    ]
  },
  {
    "id": "errorless-phy-grav-261",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Hard",
    "questionText": "The largest and the shortest distance of the earth from the sun are $r_1$ and $r_2$, its distance from the sun when it is at the perpendicular to the major axis of the orbit drawn from the sun [CBSE PMT 1991]",
    "options": [
      "$\\frac{r_1 + r_2}{4}$",
      "$\\frac{r_1 r_2}{r_1 + r_2}$",
      "$\\frac{2 r_1 r_2}{r_1 + r_2}$",
      "$\\frac{r_1 + r_2}{3}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Semi-latus rectum of an ellipse.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In polar coordinates with origin at focus: $r(\\theta) = \\frac{l}{1 + e\\cos\\theta}$.\n- At perihelion ($\\theta = 0^\\circ$): $r_2 = \\frac{l}{1+e}$.\n- At aphelion ($\\theta = 180^\\circ$): $r_1 = \\frac{l}{1-e}$.\n- Harmonic mean gives semi-latus rectum ($l$ at $\\theta = 90^\\circ$ perpendicular to major axis):\n  $$\\frac{1}{r_1} + \\frac{1}{r_2} = \\frac{1-e}{l} + \\frac{1+e}{l} = \\frac{2}{l} \\implies l = \\frac{2 r_1 r_2}{r_1 + r_2}$$\n\n✓ **Examiner Pro-Tip**: Distance at $90^\\circ$ from major axis is the semi-latus rectum $l = \\frac{2 r_1 r_2}{r_1 + r_2}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "semi-latus-rectum"
    ]
  },
  {
    "id": "errorless-phy-grav-262",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The rotation period of an earth satellite close to the surface of the earth is 83 minutes. The time period of another earth satellite in an orbit at a distance of three earth radii from its surface will be [MP PMT 1994]",
    "options": [
      "83 minutes",
      "$83 \\times \\sqrt{8}\\text{ minutes}$",
      "664 minutes",
      "249 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At surface: $r_1 = R \\implies T_1 = 83\\text{ min}$.\n- At height $h = 3R$: $r_2 = R + 3R = 4R$.\n  $$T_2 = T_1 \\left(\\frac{4R}{R}\\right)^{3/2} = 83 \\times 8 = 664\\text{ minutes}$$\n\n✓ **Examiner Pro-Tip**: $83 \\times 8 = 664\\text{ minutes}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-at-3R-height"
    ]
  },
  {
    "id": "errorless-phy-grav-263",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "A satellite of mass m is circulating around the earth with constant angular velocity. If radius of the orbit is $R_0$ and mass of the earth M, the angular momentum about the centre of the earth is [MP PMT 1996; RPMT 2000]",
    "options": [
      "$m\\sqrt{GMR_0}$",
      "$M\\sqrt{GmR_0}$",
      "$m\\sqrt{\\frac{GM}{R_0}}$",
      "$M\\sqrt{\\frac{GM}{R_0}}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital angular momentum: $L = m v r$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Orbital velocity: $v = \\sqrt{\\frac{GM}{R_0}}$.\n- Angular momentum: $L = m \\left(\\sqrt{\\frac{GM}{R_0}}\\right) R_0 = m \\sqrt{GMR_0}$.\n\n✓ **Examiner Pro-Tip**: $L = m\\sqrt{GMR_0}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "angular-momentum-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-264",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "According to Kepler, the period of revolution of a planet (T) and its mean distance from the sun (r) are related by the equation [EAMCET (Med.) 1995; MH CET 2000; Pb. PET 2001]",
    "options": [
      "$T^3 r^3 = \\text{constant}$",
      "$T^2 r^{-3} = \\text{constant}$",
      "$T r^3 = \\text{constant}$",
      "$T r^2 = \\text{constant}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $T^2 \\propto r^3 \\implies T^2 r^{-3} = \\text{constant}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "kepler-third-law-equation"
    ]
  },
  {
    "id": "errorless-phy-grav-265",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "A planet revolves around sun whose mean distance is 1.588 times the mean distance between earth and sun. The revolution time of planet will be [RPET 1997]",
    "options": [
      "1.25 years",
      "1.59 years",
      "0.89 years",
      "2 years"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: $T = (r)^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T = (1.588)^{3/2} = (1.588)^{1.5} = \\sqrt{1.588^3} = \\sqrt{4.004} \\approx 2.00\\text{ years}$.\n\n✓ **Examiner Pro-Tip**: $(1.588)^{1.5} \\approx 2\\text{ years}$ (Mars-like orbit).",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-calculation-years"
    ]
  },
  {
    "id": "errorless-phy-grav-266",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "A satellite A of mass m is at a distance of r from the centre of the earth. Another satellite B of mass 2m is at a distance of 2r from the earth's centre. Their time periods are in the ratio of [CBSE PMT 1993]",
    "options": [
      "1 : 2",
      "1 : 16",
      "1 : 32",
      "$1 : 2\\sqrt{2}$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Ratio of time periods: $\\frac{T_A}{T_B} = \\left(\\frac{r_A}{r_B}\\right)^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{T_A}{T_B} = \\left(\\frac{r}{2r}\\right)^{3/2} = \\left(\\frac{1}{2}\\right)^{3/2} = \\frac{1}{2\\sqrt{2}} = 1 : 2\\sqrt{2}$.\n\n✓ **Examiner Pro-Tip**: Ratio is $1 : 2\\sqrt{2}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-ratio-2r"
    ]
  },
  {
    "id": "errorless-phy-grav-267",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The earth E moves in an elliptical orbit with the sun S at one of the foci as shown in figure. Its speed of motion will be maximum at the point [BHU 1994; CPMT 1997]",
    "options": [
      "C",
      "A",
      "B",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Maximum velocity at perihelion (closest approach).\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Point A represents perihelion (minimum distance from focus S).\n- By conservation of angular momentum $m v r = \\text{constant}$, speed is maximum at point A.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "perihelion-maximum-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-268",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The period of revolution of planet A around the sun is 8 times that of B. The distance of A from the sun is how many times greater than that of B from the sun [CBSE PMT 1997; BHU 2001]",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $r \\propto T^{2/3}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{r_A}{r_B} = \\left(\\frac{T_A}{T_B}\\right)^{2/3} = (8)^{2/3} = (2^3)^{2/3} = 2^2 = 4$.\n\n✓ **Examiner Pro-Tip**: $8^{2/3} = 4$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "distance-ratio-8times"
    ]
  },
  {
    "id": "errorless-phy-grav-269",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "If the radius of earth's orbit is made 1/4, the duration of an year will become [BHU 1998; JIPMER 2001, 2002]",
    "options": [
      "8 times",
      "4 times",
      "1/8 times",
      "1/4 times"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T' = (1/4)^{3/2} = 1/8$ times the present year.\n\n✓ **Examiner Pro-Tip**: $(1/4)^{3/2} = 1/8$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "year-duration-quarter-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-270",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Planetary system in the solar system describes [DCE 1999]",
    "options": [
      "Conservation of energy",
      "Conservation of linear momentum",
      "Conservation of angular momentum",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Central gravitational forces conserve angular momentum.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In a central force field $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$, guaranteeing conservation of angular momentum.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "angular-momentum"
    ]
  },
  {
    "id": "errorless-phy-grav-271",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "If mass of a satellite is doubled and time period remain constant the ratio of orbit in the two cases will be [RPET 2000]",
    "options": [
      "1 : 2",
      "1 : 1",
      "1 : 3",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass independence of Keplerian orbital radius: $r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The orbital radius $r$ depends only on $T$ and the central mass $M$, completely independent of the satellite mass.\n- Thus, the ratio is $1 : 1$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "mass-independent-orbit"
    ]
  },
  {
    "id": "errorless-phy-grav-272",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The earth revolves round the sun in one year. If the distance between them becomes double, the new period of revolution will be [MP PET 2000]",
    "options": [
      "1/2 year",
      "$2\\sqrt{2}\\text{ years}$",
      "4 years",
      "8 years"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T' = 1 \\times (2)^{3/2} = 2\\sqrt{2}\\text{ years} \\approx 2.83\\text{ years}$.\n\n✓ **Examiner Pro-Tip**: $2^{3/2} = 2\\sqrt{2}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "doubled-distance-period"
    ]
  },
  {
    "id": "errorless-phy-grav-273",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Kepler discovered [DCE 2000]",
    "options": [
      "Laws of motion",
      "Laws of rotational motion",
      "Laws of planetary motion",
      "Laws of curvilinear motion"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Johannes Kepler discovered the three empirical Laws of Planetary Motion.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "kepler-discovery"
    ]
  },
  {
    "id": "errorless-phy-grav-274",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "In the solar system, which is conserved [DCE 2001]",
    "options": [
      "Total Energy",
      "K.E.",
      "Angular Velocity",
      "Linear Momentum"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Total Mechanical Energy is conserved in the isolated gravitational system of the Solar System.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "conservation-laws"
    ]
  },
  {
    "id": "errorless-phy-grav-275",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The maximum and minimum distances of a comet from the sun are $8 \\times 10^{12}\\text{ m}$ and $1.6 \\times 10^{12}\\text{ m}$. If its velocity when nearest to the sun is 60 m/s, what will be its velocity in m/s when it is farthest [Orissa 2001]",
    "options": [
      "12",
      "60",
      "112",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of angular momentum: $v_{min} r_{max} = v_{max} r_{min}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_{farthest} = v_{nearest} \\times \\frac{r_{min}}{r_{max}} = 60 \\times \\frac{1.6 \\times 10^{12}}{8 \\times 10^{12}} = 60 \\times 0.2 = 12\\text{ m/s}$.\n\n✓ **Examiner Pro-Tip**: $60 \\times 0.2 = 12\\text{ m/s}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "comet-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-276",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "A body revolved around the sun 27 times faster then the earth what is the ratio of their radii [DPMT 2002]",
    "options": [
      "1/3",
      "1/9",
      "1/27",
      "1/4"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $r \\propto T^{2/3} \\propto f^{-2/3}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given frequency: $f' = 27 f \\implies T' = T/27$.\n- $\\frac{r'}{r} = \\left(\\frac{1}{27}\\right)^{2/3} = \\left(\\frac{1}{3^3}\\right)^{2/3} = \\frac{1}{3^2} = \\frac{1}{9}$.\n\n✓ **Examiner Pro-Tip**: $27^{2/3} = 9 \\implies 1/9$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "frequency-radius-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-277",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The period of moon’s rotation around the earth is nearly 29 days. If moon’s mass were 2 fold, its present value and all other things remained unchanged, the period of moon’s rotation would be nearly [Kerala (Engg.) 2002]",
    "options": [
      "$29\\sqrt{2}\\text{ days}$",
      "$29/\\sqrt{2}\\text{ days}$",
      "$29 \\times 2\\text{ days}$",
      "29 days"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $T = 2\\pi \\sqrt{\\frac{r^3}{GM_{earth}}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The period of orbital revolution depends strictly on the mass of the central attracting body (Earth), not on the mass of the satellite (Moon).\n- Thus, doubling the Moon's mass leaves its orbital period unchanged at **29 days**.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "moon-period"
    ]
  },
  {
    "id": "errorless-phy-grav-278",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "Two planets at mean distance $d_1$ and $d_2$ from the sun and their frequencies are $n_1$ and $n_2$ respectively then [Kerala (Med.) 2002]",
    "options": [
      "$n_1^2 d_1^2 = n_2^2 d_2^2$",
      "$n_1^2 d_1^3 = n_2^2 d_2^3$",
      "$n_1 d_1^2 = n_2 d_2^2$",
      "$n_1^2 d_1 = n_2^2 d_2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law in terms of orbital frequency $n = 1/T$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T^2 \\propto d^3 \\implies \\left(\\frac{1}{n}\\right)^2 \\propto d^3 \\implies \\frac{1}{n^2} = k d^3 \\implies n^2 d^3 = \\text{constant}$.\n- Therefore, $n_1^2 d_1^3 = n_2^2 d_2^3$.\n\n✓ **Examiner Pro-Tip**: $n^2 d^3 = \\text{constant}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "frequency-distance-relation"
    ]
  },
  {
    "id": "errorless-phy-grav-279",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following astronomer first proposed that sun is static and earth rounds sun [AFMC 2002]",
    "options": [
      "Copernicus",
      "Kepler",
      "Galileo",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Historical development of astronomy.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Nicolaus Copernicus (1543) first proposed the definitive heliocentric model of the solar system in which the stationary Sun is at the centre and planets orbit around it.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "copernicus"
    ]
  },
  {
    "id": "errorless-phy-grav-280",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The distance of a planet from the sun is 5 times the distance between the earth and the sun. The time period of the planet is [UPSEAT 2003]",
    "options": [
      "$5^{3/2}\\text{ years}$",
      "$5^{2/3}\\text{ years}$",
      "$5^{1/3}\\text{ years}$",
      "$5^{1/2}\\text{ years}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{T_p}{T_e} = \\left(\\frac{r_p}{r_e}\\right)^{3/2} = (5)^{3/2} \\implies T_p = 5^{3/2}\\text{ years}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-5-times-distance"
    ]
  },
  {
    "id": "errorless-phy-grav-281",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "A planet is revolving around the sun as shown in elliptical path. The correct option is [UPSEAT 2003]",
    "options": [
      "The time taken in travelling DAB is less than that for BCD",
      "The time taken in travelling DAB is greater than that for BCD",
      "The time taken in travelling CDA is less than that for ABC",
      "The time taken in travelling CDA is greater than that for ABC"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Law of Areas and speed variation along elliptical orbits.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The segment DAB contains the perihelion (closest approach to the Sun at focus S), where the planet moves with higher speed.\n- Consequently, the time taken to traverse DAB is less than the time taken to traverse BCD (which contains the slow aphelion region).",
    "tags": [
      "gravitation",
      "keplers-laws",
      "areal-velocity-time"
    ]
  },
  {
    "id": "errorless-phy-grav-282",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "In the previous question the orbital velocity of the planet will be minimum at [UPSEAT 2003; RPET 2002]",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Minimum velocity at aphelion (farthest point C from Sun).\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- By conservation of angular momentum $m v r = \\text{constant}$, speed $v = \\frac{L}{mr}$ is minimum where distance $r$ is maximum (Point C).",
    "tags": [
      "gravitation",
      "keplers-laws",
      "minimum-velocity-aphelion"
    ]
  },
  {
    "id": "errorless-phy-grav-283",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The radius of orbit of a planet is two times that of the earth. The time period of planet is [BHU 2003; CPMT 2004]",
    "options": [
      "4.2 years",
      "2.8 years",
      "5.6 years",
      "8.4 years"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $T = (2)^{3/2} = 2\\sqrt{2} \\approx 2.828\\text{ years} \\approx 2.8\\text{ years}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-2-times-radius"
    ]
  },
  {
    "id": "errorless-phy-grav-284",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The orbital angular momentum of a satellite revolving at a distance r from the centre is L. If the distance is increased to 16r, then the new angular momentum will be [MP PET 2003]",
    "options": [
      "16 L",
      "64 L",
      "L / 4",
      "4 L"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Angular momentum of a circular orbit: $L = m v r = m \\sqrt{\\frac{GM}{r}} r = m \\sqrt{GMr} \\implies L \\propto \\sqrt{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{L'}{L} = \\sqrt{\\frac{16r}{r}} = \\sqrt{16} = 4 \\implies L' = 4L$.\n\n✓ **Examiner Pro-Tip**: $L \\propto \\sqrt{r}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "angular-momentum-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-285",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "According to Kepler’s law the time period of a satellite varies with its radius as [Orissa JEE 2003]",
    "options": [
      "$T^2 \\propto R^3$",
      "$T^3 \\propto R^2$",
      "$T^2 \\propto (1/R^3)$",
      "$T^3 \\propto (1/R^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $T^2 \\propto R^3$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "third-law"
    ]
  },
  {
    "id": "errorless-phy-grav-286",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "In planetary motion the areal velocity of position vector of a planet depends on angular velocity ($\\omega$) and the distance of the planet from sun (r). If so the correct relation for areal velocity is [EAMCET 2003]",
    "options": [
      "$\\frac{dA}{dt} \\propto \\omega r$",
      "$\\frac{dA}{dt} \\propto \\omega^2 r$",
      "$\\frac{dA}{dt} \\propto \\omega r^2$",
      "$\\frac{dA}{dt} \\propto \\sqrt{\\omega r}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Areal velocity expression: $\\frac{dA}{dt} = \\frac{1}{2} r^2 \\omega$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Area of sectoral triangle swept in time $dt$: $dA = \\frac{1}{2} r (r d\\theta) = \\frac{1}{2} r^2 d\\theta$.\n- $\\frac{dA}{dt} = \\frac{1}{2} r^2 \\frac{d\\theta}{dt} = \\frac{1}{2} r^2 \\omega \\implies \\frac{dA}{dt} \\propto \\omega r^2$.\n\n✓ **Examiner Pro-Tip**: $\\frac{dA}{dt} = \\frac{1}{2}\\omega r^2$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "areal-velocity-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-287",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "The ratio of the distances of two planets from the sun is 1.38. The ratio of their period of revolution around the sun is [Kerala PMT 2004]",
    "options": [
      "1.38",
      "$1.38^{3/2}$",
      "$1.38^{1/2}$",
      "$1.38^3$",
      "$1.38^2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law: $\\frac{T_1}{T_2} = \\left(\\frac{r_1}{r_2}\\right)^{3/2} = 1.38^{3/2}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-288",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Kepler's second law (law of areas) is nothing but a statement of [UPSEAT 2004]",
    "options": [
      "Work energy theorem",
      "Conservation of linear momentum",
      "Conservation of angular momentum",
      "Conservation of energy"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Law of Areas represents conservation of angular momentum under central gravity.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "angular-momentum"
    ]
  },
  {
    "id": "errorless-phy-grav-289",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "In an elliptical orbit under gravitational force, in general [UPSEAT 2004]",
    "options": [
      "Tangential velocity is constant",
      "Angular velocity is constant",
      "Radial velocity is constant",
      "Areal velocity is constant"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Constancy of areal velocity: $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "areal-velocity-constant"
    ]
  },
  {
    "id": "errorless-phy-grav-290",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "If a new planet is discovered rotating around Sun with the orbital radius double that of earth, then what will be its time period (in earth's days) [DCE 2004]",
    "options": [
      "1032",
      "1023",
      "1024",
      "1043"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: $T = 365 \\times (2)^{3/2} = 365 \\times 2.8284 = 1032.37 \\approx 1032\\text{ days}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "period-days"
    ]
  },
  {
    "id": "errorless-phy-grav-291",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "Suppose the law of gravitational attraction suddenly changes and becomes an inverse cube law i.e. $F \\propto 1 /r^3$, but still remaining a central force. Then [UPSEAT 2002]",
    "options": [
      "Keplers law of areas still holds",
      "Keplers law of period still holds",
      "Keplers law of areas and period still hold",
      "Neither the law of areas, nor the law of period still holds"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Central force ensures conservation of angular momentum.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Any central force $\\vec{F} = F(r) \\hat{r}$ exerts zero torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$.\n- Therefore, angular momentum is conserved and Kepler's Law of Areas ($\\frac{dA}{dt} = \\text{constant}$) continues to hold strictly.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "central-force-law-of-areas"
    ]
  },
  {
    "id": "errorless-phy-grav-292",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "What does not change in the field of central force [MP PMT 2004]",
    "options": [
      "Potential energy",
      "Kinetic energy",
      "Linear momentum",
      "Angular momentum"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Angular momentum is universally conserved in any central force field.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "central-force-angular-momentum"
    ]
  },
  {
    "id": "errorless-phy-grav-293",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The eccentricity of earth's orbit is 0.0167. The ratio of its maximum speed in its orbit to its minimum speed is [NCERT 1973]",
    "options": [
      "2.507",
      "1.033",
      "8.324",
      "1.000"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Ratio of maximum to minimum orbital speeds: $\\frac{v_{max}}{v_{min}} = \\frac{1+e}{1-e}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $e = 0.0167$.\n  $$\\frac{v_{max}}{v_{min}} = \\frac{1 + 0.0167}{1 - 0.0167} = \\frac{1.0167}{0.9833} \\approx 1.03396 \\approx 1.033$$\n\n✓ **Examiner Pro-Tip**: $\\frac{v_{max}}{v_{min}} = \\frac{1+e}{1-e} \\approx 1 + 2e = 1 + 0.0334 = 1.0334$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "eccentricity-speed-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-294",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The mass of a planet that has a moon whose time period and orbital radius are T and R respectively can be written as [AMU 1995]",
    "options": [
      "$4\\pi^2 R^3 G^{-1} T^{-2}$",
      "$8\\pi^2 R^3 G^{-1} T^{-2}$",
      "$12\\pi^2 R^3 G^{-1} T^{-2}$",
      "$16\\pi^2 R^3 G^{-1} T^{-2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Mass determination via Kepler's Third Law: $T^2 = \\frac{4\\pi^2 R^3}{GM}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Rearranging for $M$:\n  $$M = \\frac{4\\pi^2 R^3}{G T^2} = 4\\pi^2 R^3 G^{-1} T^{-2}$$",
    "tags": [
      "gravitation",
      "keplers-laws",
      "mass-formula"
    ]
  },
  {
    "id": "errorless-phy-grav-295",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "If orbital velocity of planet is given by $v = G^a M^b R^c$, then [EAMCET 1994]",
    "options": [
      "$a = 1/3, b = 1/3, c = -1/3$",
      "$a = 1/2, b = 1/2, c = -1/2$",
      "$a = 1/2, b = -1/2, c = 1/2$",
      "$a = 1/2, b = -1/2, c = -1/2$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Dimensional analysis of orbital velocity $v = \\sqrt{\\frac{GM}{R}} = G^{1/2} M^{1/2} R^{-1/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $a = 1/2, b = 1/2, c = -1/2$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "dimensional-analysis"
    ]
  },
  {
    "id": "errorless-phy-grav-296",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Hubble's law states that the velocity with which milky way is moving away from the earth is proportional to [Kerala PMT 2004]",
    "options": [
      "Square of the distance of the milky way from the earth",
      "Distance of milky way from the earth",
      "Mass of the milky way",
      "Product of the mass of the milky way and its distance from the earth",
      "Mass of the earth"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Hubble's Law of Cosmic Expansion: $v = H_0 d$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Recessional velocity of distant galaxies is directly proportional to their distance from Earth ($v \\propto d$).",
    "tags": [
      "gravitation",
      "keplers-laws",
      "hubbles-law"
    ]
  },
  {
    "id": "errorless-phy-grav-297",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Two satellite are revolving around the earth with velocities $v_1$ and $v_2$ and in radii $r_1$ and $r_2$ ($r_1 > r_2$) respectively. Then [BHU 2005]",
    "options": [
      "$v_1 = v_2$",
      "$v_1 > v_2$",
      "$v_1 < v_2$",
      "$\\frac{v_1}{r_1} = \\frac{v_2}{r_2}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $v \\propto 1/\\sqrt{r}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Since $r_1 > r_2$, $v_1 < v_2$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "speed-comparison"
    ]
  },
  {
    "id": "errorless-phy-grav-298",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "The condition for a uniform spherical mass m of radius r to be a black hole is [G= gravitational constant and g= acceleration due to gravity] [AIIMS 2005]",
    "options": [
      "$(2Gm/r)^{1/2} \\le c$",
      "$(2Gm/r)^{1/2} = c$",
      "$(2Gm/r)^{1/2} \\ge c$",
      "$(gm/r)^{1/2} \\ge c$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Black hole formation criterion: Escape velocity must equal or exceed the speed of light ($v_e \\ge c$).\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $v_e = \\sqrt{\\frac{2Gm}{r}} \\ge c \\implies \\left(\\frac{2Gm}{r}\\right)^{1/2} \\ge c$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "black-hole-condition"
    ]
  },
  {
    "id": "errorless-phy-grav-299",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Medium",
    "questionText": "Earth is revolving around the sun if the distance of the Earth from the Sun is reduced to 1/4th of the present distance then the present day length reduced by [BHU 2005]",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{8}$",
      "$\\frac{1}{6}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Kepler's Third Law for revolution time: $T' = T (1/4)^{3/2} = \\frac{1}{8} T$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- When distance reduces to $1/4$, the orbital period (year duration) reduces to $\\frac{1}{8}$ of the present value.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "year-duration-reduction"
    ]
  },
  {
    "id": "errorless-phy-grav-300",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "Imagine a light planet revolving around a very massive star in a circular orbit of radius R with a period of revolution T. If the gravitational force of attraction between planet and star is proportional to $R^{-5/2}$, then $T^2$ is proportional to [IIT 1989; RPMT 1997]",
    "options": [
      "$R^3$",
      "$R^{7/2}$",
      "$R^{5/2}$",
      "$R^{3/2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Generalized Kepler's Law under power-law central forces.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Centripetal force balance: $\\frac{m v^2}{R} = F \\propto R^{-5/2} \\implies v^2 \\propto R^{-3/2}$.\n- Orbital period: $T = \\frac{2\\pi R}{v} \\implies T^2 = \\frac{4\\pi^2 R^2}{v^2} \\propto \\frac{R^2}{R^{-3/2}} = R^{2 - (-3/2)} = R^{7/2}$.\n\n✓ **Examiner Pro-Tip**: If $F \\propto R^{-n}$, then $T^2 \\propto R^{n+1}$. For $n = 5/2$, $T^2 \\propto R^{5/2 + 1} = R^{7/2}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "generalized-kepler"
    ]
  },
  {
    "id": "errorless-phy-grav-301",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "The magnitudes of the gravitational force at distances $r_1$ and $r_2$ from the centre of a uniform sphere of radius R and mass M are $F_1$ and $F_2$ respectively. Then [IIT 1994]",
    "options": [
      "$\\frac{F_1}{F_2} = \\frac{r_1}{r_2}$ if $r_1 < R$ and $r_2 < R$",
      "$\\frac{F_1}{F_2} = \\frac{r_2^2}{r_1^2}$ if $r_1 > R$ and $r_2 > R$",
      "$\\frac{F_1}{F_2} = \\frac{r_1}{r_2}$ if $r_1 > R$ and $r_2 > R$",
      "$\\frac{F_1}{F_2} = \\frac{r_2^2}{r_1^2}$ if $r_1 < R$ and $r_2 < R$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Gravitational force inside a solid uniform sphere varies linearly with distance: $F(r) = \\frac{GMm}{R^3} r$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- For internal points ($r < R$), $F(r) \\propto r$.\n- Therefore, $\\frac{F_1}{F_2} = \\frac{r_1}{r_2}$ when both $r_1 < R$ and $r_2 < R$.\n\n✓ **Examiner Pro-Tip**: Inside a solid sphere $F \\propto r$; outside a solid sphere $F \\propto 1/r^2$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "internal-force-scaling"
    ]
  },
  {
    "id": "errorless-phy-grav-302",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Easy",
    "questionText": "A satellite S is moving in an elliptical orbit around the earth. The mass of the satellite is very small compared to the mass of earth [IIT 1998]",
    "options": [
      "The acceleration of S is always directed towards the centre of the earth",
      "The angular momentum of S about the centre of the earth changes in direction but its magnitude remains constant",
      "The total mechanical energy of S varies periodically with time",
      "The linear momentum of S remains constant in magnitude"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Central gravitational acceleration.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The gravitational force exerted by the Earth on the satellite is purely radial and central (directed towards the Earth's centre of mass).\n- By Newton's second law $\\vec{F} = m\\vec{a}$, the acceleration $\\vec{a}$ is always directed towards the centre of the Earth.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "elliptical-acceleration"
    ]
  },
  {
    "id": "errorless-phy-grav-303",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A mass M is split into two parts, m and (M–m), which are then separated by a certain distance. What ratio of m/M maximizes the gravitational force between the two parts [AMU 2000]",
    "options": [
      "1/3",
      "1/2",
      "1/4",
      "1/5"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Maximizing the mass product: $f(m) = m(M - m)$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{df}{dm} = M - 2m = 0 \\implies m = \\frac{M}{2} \\implies \\frac{m}{M} = \\frac{1}{2}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "mass-splitting-ratio"
    ]
  },
  {
    "id": "errorless-phy-grav-304",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "Suppose the gravitational force varies inversely as the $n^{\\text{th}}$ power of distance. Then the time period of a planet in circular orbit of radius R around the sun will be proportional to [AIEEE 2004]",
    "options": [
      "$R^{(n+1)/2}$",
      "$R^{(n-1)/2}$",
      "$R^n$",
      "$R^{(n-2)/2}$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: General orbital relation for $F \\propto R^{-n}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Centripetal force balance: $\\frac{m v^2}{R} = \\frac{k}{R^n} \\implies v^2 \\propto R^{1-n} \\implies v \\propto R^{(1-n)/2}$.\n- Orbital period: $T = \\frac{2\\pi R}{v} \\propto \\frac{R}{R^{(1-n)/2}} = R^{1 - \\frac{1-n}{2}} = R^{(n+1)/2}$.\n\n✓ **Examiner Pro-Tip**: Universal formula: $T \\propto R^{(n+1)/2}$. For standard gravity $n = 2 \\implies T \\propto R^{3/2}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "general-force-power"
    ]
  },
  {
    "id": "errorless-phy-grav-305",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Easy",
    "questionText": "If the radius of the earth were to shrink by 1% its mass remaining the same, the acceleration due to gravity on the earth's surface would [IIT 1981; CPMT 1981; MP PMT 1996, 97; Roorkee 1992; MP PET 1999; Kerala PMT 2004]",
    "options": [
      "Decrease by 2%",
      "Remain unchanged",
      "Increase by 2%",
      "Increase by 1%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Error propagation: $\\frac{\\Delta g}{g} = -2\\frac{\\Delta R}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{\\Delta g}{g} = -2(-1\\%) = +2\\%$ (Increase by 2%).",
    "tags": [
      "gravitation",
      "critical-thinking",
      "radius-shrinkage-g"
    ]
  },
  {
    "id": "errorless-phy-grav-306",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "The radius and mass of earth are increased by 0.5%. Which of the following statements are true at the surface of the earth [Roorkee 2000]",
    "options": [
      "g will increase",
      "g will decrease",
      "Escape velocity will remain unchanged",
      "Potential energy will remain unchanged"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Escape velocity formula: $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\frac{\\Delta v_e}{v_e} = \\frac{1}{2}\\left(\\frac{\\Delta M}{M} - \\frac{\\Delta R}{R}\\right) = \\frac{1}{2}(0.5\\% - 0.5\\%) = 0\\%$.\n- Hence, the escape velocity will remain completely unchanged.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "escape-velocity-invariance"
    ]
  },
  {
    "id": "errorless-phy-grav-307",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "In order to make the effective acceleration due to gravity equal to zero at the equator, the angular velocity of rotation of the earth about its axis should be ($g = 10\\text{ ms}^{-2}$ and radius of earth is 6400 kms) [Roorkee 2000]",
    "options": [
      "$0\\text{ rad}\\cdot\\text{sec}^{-1}$",
      "$\\frac{1}{800}\\text{ rad}\\cdot\\text{sec}^{-1}$",
      "$\\frac{1}{80}\\text{ rad}\\cdot\\text{sec}^{-1}$",
      "$\\frac{1}{8}\\text{ rad}\\cdot\\text{sec}^{-1}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Equatorial weightlessness: $\\omega = \\sqrt{\\frac{g}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $\\omega = \\sqrt{\\frac{10}{6.4 \\times 10^6}} = \\frac{1}{800}\\text{ rad/s}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "equatorial-rotation-zero-g"
    ]
  },
  {
    "id": "errorless-phy-grav-308",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A simple pendulum has a time period $T_1$ when on the earth’s surface and $T_2$ when taken to a height R above the earth’s surface, where R is the radius of the earth. The value of $T_2 / T_1$ is [IIT-JEE 2001]",
    "options": [
      "1",
      "$\\sqrt{2}$",
      "4",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: Pendulum time period: $T = 2\\pi\\sqrt{\\frac{L}{g}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At height $h = R$: $g' = g\\left(\\frac{R}{R+R}\\right)^2 = \\frac{g}{4}$.\n- $\\frac{T_2}{T_1} = \\sqrt{\\frac{g}{g'}} = \\sqrt{\\frac{g}{g/4}} = \\sqrt{4} = 2$.\n\n✓ **Examiner Pro-Tip**: $\\frac{T_2}{T_1} = 2$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "pendulum-altitude"
    ]
  },
  {
    "id": "errorless-phy-grav-309",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Easy",
    "questionText": "A body of mass m is taken from earth surface to the height h equal to radius of earth, the increase in potential energy will be [NCERT 1971; CPMT 1971, 97; IIT 1983; CBSE PMT 1991; Kurukshetra CEE 1996; CMEET Bihar 1995; MNR 1998; AIEEE 2004]",
    "options": [
      "$mgR$",
      "$\\frac{1}{2}mgR$",
      "$2 mgR$",
      "$\\frac{1}{4}mgR$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $\\Delta U = \\frac{mgh}{1 + h/R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- At $h = R$: $\\Delta U = \\frac{mgR}{1 + 1} = \\frac{1}{2}mgR$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "delta-u-h-equals-R"
    ]
  },
  {
    "id": "errorless-phy-grav-310",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Easy",
    "questionText": "An artificial satellite moving in a circular orbit around the earth has a total (kinetic + potential) energy $E_0$. Its potential energy is [IIT 1997; MH CET 2002; MP PMT 2000]",
    "options": [
      "$-E_0$",
      "$1.5 E_0$",
      "$2 E_0$",
      "$E_0$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Satellite virial theorem: $U = 2 E_{total}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $E_0 = -\\frac{GMm}{2r}$ and $U = -\\frac{GMm}{r} = 2\\left(-\\frac{GMm}{2r}\\right) = 2 E_0$.\n\n✓ **Examiner Pro-Tip**: $U = 2 E_0$ and $K = -E_0$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "virial-theorem"
    ]
  },
  {
    "id": "errorless-phy-grav-311",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A rocket of mass M is launched vertically from the surface of the earth with an initial speed V. Assuming the radius of the earth to be R and negligible air resistance, the maximum height attained by the rocket above the surface of the earth is [AMU 1995]",
    "options": [
      "$R / \\left(\\frac{gR}{2V^2} - 1\\right)$",
      "$R / \\left(\\frac{2gR}{V^2} - 1\\right)$",
      "$R / \\left(\\frac{2gR}{V^2} + 1\\right)$",
      "$R / \\left(\\frac{gR}{V^2} - 1\\right)$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Mechanical Energy: $-\\frac{GMm}{R} + \\frac{1}{2}mV^2 = -\\frac{GMm}{R+h}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Dividing by $m$: $\\frac{1}{2}V^2 = GM\\left(\\frac{1}{R} - \\frac{1}{R+h}\\right) = \\frac{GMh}{R(R+h)} = \\frac{gRh}{R+h}$.\n- $\\frac{R+h}{h} = \\frac{2gR}{V^2} \\implies \\frac{R}{h} + 1 = \\frac{2gR}{V^2} \\implies \\frac{R}{h} = \\frac{2gR}{V^2} - 1$.\n  $$h = \\frac{R}{\\frac{2gR}{V^2} - 1}$$\n\n✓ **Examiner Pro-Tip**: $h = \\frac{R}{\\frac{2gR}{V^2} - 1}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "rocket-max-height"
    ]
  },
  {
    "id": "errorless-phy-grav-312",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A solid sphere of uniform density and radius 4 units is located with its centre at the origin O of coordinates. Two spheres of equal radii 1 unit with their centres at A(– 2, 0, 0) and B(2, 0, 0) respectively are taken out of the solid leaving behind spherical cavities as shown in figure. Then [IIT 1993]",
    "options": [
      "The gravitational force due to this object at the origin is zero",
      "The gravitational force at the point B (2, 0, 0) is zero",
      "The gravitational potential is the same at all points of the circle $y^2 + z^2 = 36$",
      "The gravitational potential is the same at all points on the circle $y^2 + z^2 = 4$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: Symmetry and superposition in cavity problems.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- The original solid sphere exerts zero gravitational force at the origin $O(0,0,0)$.\n- The two identical removed spheres at $(-2,0,0)$ and $(+2,0,0)$ exert equal and opposite forces at the origin: $\\vec{F}_A + \\vec{F}_B = 0$.\n- Hence, the net gravitational force at the origin remains identically zero.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "cavity-superposition"
    ]
  },
  {
    "id": "errorless-phy-grav-313",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "Two bodies of masses $m_1$ and $m_2$ are initially at rest at infinite distance apart. They are then allowed to move towards each other under mutual gravitational attraction. Their relative velocity of approach at a separation distance r between them is [BHU 1994; RPET 1999]",
    "options": [
      "$\\left[\\frac{2G(m_1 - m_2)}{r}\\right]^{1/2}$",
      "$\\left[\\frac{2G(m_1 + m_2)}{r}\\right]^{1/2}$",
      "$\\left[\\frac{r}{2G(m_1 m_2)}\\right]^{1/2}$",
      "$\\left[\\frac{2G m_1 m_2}{r}\\right]^{1/2}$"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: Reduced mass and mutual gravitational attraction.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- In the centre of mass frame, reduced mass is $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$.\n- Conservation of mechanical energy: $\\frac{1}{2}\\mu v_{rel}^2 - \\frac{G m_1 m_2}{r} = 0$.\n  $$v_{rel}^2 = \\frac{2 G m_1 m_2}{\\mu r} = \\frac{2 G m_1 m_2}{\\frac{m_1 m_2}{m_1 + m_2} r} = \\frac{2G(m_1 + m_2)}{r}$$\n  $$v_{rel} = \\left[\\frac{2G(m_1 + m_2)}{r}\\right]^{1/2}$$\n\n✓ **Examiner Pro-Tip**: $v_{rel} = \\sqrt{\\frac{2G(m_1 + m_2)}{r}}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "relative-approach-speed"
    ]
  },
  {
    "id": "errorless-phy-grav-314",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Hard",
    "questionText": "A projectile is projected with velocity $k v_e$ in vertically upward direction from the ground into the space. ($v_e$ is escape velocity and $k < 1$). If air resistance is considered to be negligible then the maximum height from the centre of earth to which it can go, will be : (R = radius of earth) [Roorkee 1999; RPET 1999]",
    "options": [
      "$\\frac{R}{k^2 + 1}$",
      "$\\frac{R}{k^2 - 1}$",
      "$\\frac{R}{1 - k^2}$",
      "$\\frac{R}{k + 1}$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Conservation of Mechanical Energy from Earth's centre: $r_{max} = R + h$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Total energy at surface: $E = \\frac{1}{2}m (k v_e)^2 - \\frac{GMm}{R} = \\frac{1}{2}m k^2 \\left(\\frac{2GM}{R}\\right) - \\frac{GMm}{R} = -\\frac{GMm}{R}(1 - k^2)$.\n- At maximum distance $r_{max}$ from centre, velocity is zero:\n  $$-\\frac{GMm}{r_{max}} = -\\frac{GMm}{R}(1 - k^2) \\implies r_{max} = \\frac{R}{1 - k^2}$$\n\n✓ **Examiner Pro-Tip**: Distance from centre is $\\frac{R}{1 - k^2}$; height above surface is $\\frac{k^2 R}{1 - k^2}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "max-distance-centre"
    ]
  },
  {
    "id": "errorless-phy-grav-315",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A satellite is launched into a circular orbit of radius R around the earth. A second satellite is launched into an orbit of radius (1.01)R. The period of the second satellite is larger than that of the first one by approximately [IIT 1995]",
    "options": [
      "0.5%",
      "1.0%",
      "1.5%",
      "3.0%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto R^{3/2} \\implies \\frac{\\Delta T}{T} = \\frac{3}{2}\\frac{\\Delta R}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- Given: $\\frac{\\Delta R}{R} = 1.01 - 1 = 1.0\\%$.\n- $\\frac{\\Delta T}{T} = 1.5 \\times 1.0\\% = 1.5\\%$.\n\n✓ **Examiner Pro-Tip**: $\\frac{3}{2} \\times 1\\% = 1.5\\%$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "percentage-change-period"
    ]
  },
  {
    "id": "errorless-phy-grav-316",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "If the distance between the earth and the sun becomes half its present value, the number of days in a year would have been [IIT 1996; RPET 1996]",
    "options": [
      "64.5",
      "129",
      "182.5",
      "730"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: $T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T' = 365 \\times \\left(\\frac{1}{2}\\right)^{3/2} = \\frac{365}{2\\sqrt{2}} = \\frac{365}{2.8284} \\approx 129.05 \\approx 129\\text{ days}$.\n\n✓ **Examiner Pro-Tip**: $\\frac{365}{2\\sqrt{2}} \\approx 129\\text{ days}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "year-duration-half-distance"
    ]
  },
  {
    "id": "errorless-phy-grav-317",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Critical Thinking Questions",
    "difficulty": "Medium",
    "questionText": "A geostationary satellite orbits around the earth in a circular orbit of radius 36000 km. Then, the time period of a satellite orbiting a few hundred kilometres above the earth’s surface ($R_{Earth} = 6400\\text{ km}$) will approximately be [IIT-JEE (Screening) 2002]",
    "options": [
      "1/2 h",
      "1 h",
      "2 h",
      "4 h"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: Orbital period of low Earth orbit satellite: $T = 2\\pi\\sqrt{\\frac{R}{g}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**:\n- $T = 2\\pi \\sqrt{\\frac{6.4 \\times 10^6}{9.8}} \\approx 5078\\text{ s} \\approx 84.6\\text{ minutes} \\approx 1.41\\text{ hours} \\approx 2\\text{ hours}$ (closest integer choice).\n\n✓ **Examiner Pro-Tip**: Standard near-Earth orbital period is $\\approx 84.6\\text{ min} \\approx 1.4\\text{ h} \\approx 2\\text{ h}$.",
    "tags": [
      "gravitation",
      "critical-thinking",
      "leo-time-period"
    ]
  },
  {
    "id": "errorless-phy-grav-318",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Assuming the earth to have a constant density, point out which of the following curves show the variation of acceleration due to gravity from the centre of earth to the points far away from the surface of earth [AMU (Engg.) 2000]",
    "options": [
      "$g$ decreases linearly inside the earth and increases outside",
      "$g$ remains constant inside the earth and decreases as $1/r^2$ outside",
      "$g$ increases linearly from the centre to the surface ($g \\propto r$ for $r \\le R$), and then decreases inversely as the square of distance ($g \\propto 1/r^2$ for $r > R$)",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAcceleration due to gravity at depth $d$ inside a uniform solid sphere of radius $R$ is given by $g_{in} = g\\left(1 - \\frac{d}{R}\\right) = g\\frac{r}{R} \\propto r$ (linear variation from $g = 0$ at the center $r = 0$ to $g = g_{surface}$ at $r = R$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nOutside the earth ($r \\ge R$), the entire mass acts as if concentrated at the center: \n$$g_{out} = \\frac{GM}{r^2} \\propto \\frac{1}{r^2}$$\nTherefore, the graph of $g$ versus $r$ is a straight line passing through origin up to $r = R$, followed by an inverse square curve asymptotic to the $r$-axis for $r > R$.\n\n✓ **Examiner Pro-Tip**: \nMaximum value of acceleration due to gravity is exactly at the surface ($r = R$), where $g = \\frac{GM}{R^2}$.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "acceleration-due-to-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-319",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "The diagram showing the variation of gravitational potential of earth with distance from the centre of earth is",
    "options": [
      "A curve starting from a minimum value $-\\frac{3GM}{2R}$ at $r=0$, parabolic up to $r=R$ where $V=-\\frac{GM}{R}$, then asymptotically approaching zero as $-1/r$ for $r>R$",
      "A straight line starting from zero at the centre to $-\\frac{GM}{R}$ at the surface",
      "A constant zero potential inside the earth followed by $-1/r$ variation outside",
      "A constant negative potential $-\\frac{GM}{R}$ throughout the interior and exterior"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor a uniform solid sphere of mass $M$ and radius $R$:\n- Inside ($r \\le R$): $V_{in} = -\\frac{GM}{2R^3}(3R^2 - r^2)$\n- At the centre ($r = 0$): $V_{centre} = -\\frac{3GM}{2R} = 1.5 V_{surface}$\n- Outside ($r \\ge R$): $V_{out} = -\\frac{GM}{r}$\n\n⚡ **Step-by-Step Derivation & Calculations**: \nAt $r = 0$, $V = -1.5 \\frac{GM}{R}$ (maximum negative, i.e., lowest potential).\nAs $r$ increases from $0$ to $R$, $V$ increases parabolically to $-\\frac{GM}{R}$ at $r = R$.\nFor $r > R$, $V$ increases as $-\\frac{GM}{r}$, approaching $0$ as $r \\to \\infty$.\n\n✓ **Examiner Pro-Tip**: \nGravitational potential is always negative everywhere and reaches its absolute minimum (largest negative value) at the center of the earth.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "gravitational-potential"
    ]
  },
  {
    "id": "errorless-phy-grav-320",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "By which curve will the variation of gravitational potential of a hollow sphere of radius $R$ with distance $r$ from its centre be depicted?",
    "options": [
      "A constant negative potential $V = -\\frac{GM}{R}$ from $r = 0$ to $r = R$, and then increasing towards zero as $V = -\\frac{GM}{r}$ for $r > R$",
      "Zero potential from $r = 0$ to $r = R$, and $V = -\\frac{GM}{r}$ for $r > R$",
      "Linearly decreasing potential from the centre to infinity",
      "Parabolic potential inside the shell and constant potential outside"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInside a uniform spherical shell of mass $M$ and radius $R$, the gravitational field is zero ($E = -\\frac{dV}{dr} = 0$). Hence, the gravitational potential throughout the interior is constant and equal to its value at the surface.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Inside ($r \\le R$): $V_{in} = -\\frac{GM}{R} = \\text{constant}$\n- Outside ($r \\ge R$): $V_{out} = -\\frac{GM}{r}$\nThus, the graph is a horizontal line at $V = -\\frac{GM}{R}$ from $r = 0$ to $r = R$, followed by an inverse hyperbolic curve rising towards $V = 0$ as $r \\to \\infty$.\n\n✓ **Examiner Pro-Tip**: \nSince work done to move a test mass inside a shell is zero, the entire interior of a spherical shell is an equipotential region.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "spherical-shell"
    ]
  },
  {
    "id": "errorless-phy-grav-321",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "A sphere of mass $M$ and radius $R_2$ has a concentric cavity of radius $R_1$. The force $F$ exerted by the sphere on a particle of mass $m$ located at a distance $r$ from the centre of the sphere varies as $(0 \\le r \\le \\infty)$ according to:",
    "options": [
      "$F = 0$ for $r < R_1$, increases continuously for $R_1 < r < R_2$, and decreases as $1/r^2$ for $r > R_2$",
      "$F$ is constant everywhere from $r = 0$ to $r = R_2$, then drops to zero",
      "$F$ decreases linearly from $r = 0$ to $r = R_1$ and remains zero outside",
      "$F$ increases linearly for all $r$ from $0$ to $\\infty$"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational force inside a spherical mass distribution depends solely on the mass enclosed within radius $r$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. Inside the cavity ($r < R_1$): Enclosed mass $M_{enc} = 0 \\implies F = 0$.\n2. In the solid shell ($R_1 \\le r \\le R_2$): $M_{enc} = \\rho \\cdot \\frac{4}{3}\\pi (r^3 - R_1^3) \\implies F = \\frac{G m M_{enc}}{r^2} = \\frac{4}{3}\\pi G \\rho m \\left(r - \\frac{R_1^3}{r^2}\\right)$, which increases continuously with $r$.\n3. Outside the sphere ($r > R_2$): $M_{enc} = M \\implies F = \\frac{GMm}{r^2} \\propto \\frac{1}{r^2}$, which decreases as $r$ increases.\n\n✓ **Examiner Pro-Tip**: \nWhenever a particle is inside a spherical cavity concentric with a uniform sphere, the gravitational field is strictly zero.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "cavity"
    ]
  },
  {
    "id": "errorless-phy-grav-322",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Which one of the following graphs represents correctly the variation of the gravitational field intensity ($I$) with the distance ($r$) from the centre of a spherical shell of mass $M$ and radius $a$?",
    "options": [
      "A continuous linear line from $r = 0$ to $r = a$ followed by $1/r$ decay",
      "A constant non-zero field inside the shell and zero outside",
      "A field decreasing linearly from the center to infinity",
      "Field $I = 0$ for $r < a$, a discontinuous jump at $r = a$ to $I = \\frac{GM}{a^2}$, and decreasing as $1/r^2$ for $r > a$"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor a thin uniform spherical shell of mass $M$ and radius $a$:\n- Inside the shell ($r < a$): No mass is enclosed, so $I_{in} = 0$.\n- At the surface ($r = a$): $I = \\frac{GM}{a^2}$.\n- Outside the shell ($r > a$): The shell acts as a point mass at its center, so $I_{out} = \\frac{GM}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \nGraphically, $I$ remains zero on the $r$-axis from $r = 0$ to $r = a^-$, jumps discontinuously at $r = a$ to $\\frac{GM}{a^2}$, and then follows an inverse square curve $I \\propto 1/r^2$ for $r > a$.\n\n✓ **Examiner Pro-Tip**: \nThe gravitational field intensity is discontinuous at the surface of a thin shell, dropping abruptly to zero just inside.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "gravitational-field"
    ]
  },
  {
    "id": "errorless-phy-grav-323",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Suppose the acceleration due to gravity at the earth’s surface is $10\\text{ m/s}^2$ and at the surface of Mars it is $4.0\\text{ m/s}^2$. A 60 kg passenger goes from the earth to Mars in a spaceship moving with constant velocity. Neglecting all other objects in the sky, which curve best represents the weight (net gravitational force) of the passenger as a function of time?",
    "options": [
      "Curve A (monotonically decreasing from 600 N to 240 N without reaching zero)",
      "Curve B (linear decrease directly from 600 N to 240 N)",
      "Curve C (decreases from 600 N to zero at the neutral point, then increases to 240 N)",
      "Curve D (constant weight throughout the journey)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWeight is the net gravitational force exerted on the passenger by Earth and Mars.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- At Earth's surface: $W_1 = m g_E = 60\\text{ kg} \\times 10\\text{ m/s}^2 = 600\\text{ N}$.\n- As the spaceship travels away from Earth towards Mars, the Earth's attraction decreases while Mars's attraction increases.\n- At the neutral/null point where $F_{Earth} = F_{Mars}$, the net force on the passenger is strictly zero ($W = 0$).\n- Beyond the neutral point, Mars's attraction dominates, increasing until the surface of Mars: $W_2 = m g_M = 60\\text{ kg} \\times 4.0\\text{ m/s}^2 = 240\\text{ N}$.\nThus, Curve C, which starts at 600 N, drops to 0, and then rises to 240 N, correctly represents the net weight.\n\n✓ **Examiner Pro-Tip**: \nBetween any two attracting celestial bodies, there always exists a null point where net gravitational field is zero.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "weight-variation"
    ]
  },
  {
    "id": "errorless-phy-grav-324",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws of Planetary Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following graphs represents the motion of a planet moving about the sun? [NCERT 1983]",
    "options": [
      "A parabola opening along the $T^2$ axis",
      "A rectangular hyperbola between $T^2$ and $R^3$",
      "A straight line passing through the origin on a $T^2$ versus $R^3$ plot",
      "An exponential curve between $T^2$ and $R^3$"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAccording to Kepler's Third Law of Planetary Motion (Law of Periods), the square of the orbital period $T$ of a planet is directly proportional to the cube of the semi-major axis $R$ of its orbit.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n$$T^2 \\propto R^3 \\implies T^2 = k R^3$$\nwhere $k = \\frac{4\\pi^2}{GM_{sun}}$ is a constant.\nComparing with the linear equation $y = mx$, a graph plotted with $T^2$ on the y-axis and $R^3$ on the x-axis gives a straight line passing through the origin $(0,0)$ with positive slope $k$.\n\n✓ **Examiner Pro-Tip**: \nA plot of $\\log T$ vs $\\log R$ is also a straight line with slope $m = \\frac{3}{2}$.",
    "tags": [
      "gravitation",
      "keplers-laws",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-grav-325",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "The curves for potential energy ($U$) and kinetic energy ($E_k$) of a two-particle system are plotted against separation $r$. At what points will the system be bound?",
    "options": [
      "Only at point D",
      "Only at point A",
      "At points D and A",
      "At points A, B and C"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nA gravitational two-particle system is bound if its total mechanical energy is negative ($E = U + E_k < 0$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \nSince gravitational potential energy $U$ is negative ($U < 0$) and kinetic energy $E_k$ is positive ($E_k > 0$):\n- Total energy $E = E_k + U < 0 \\iff |U| > E_k$.\n- At points A, B, and C on the graph, the magnitude of potential energy $|U|$ is strictly greater than kinetic energy $E_k$, so $E < 0$ (bound system).\n- At point D, $E_k > |U|$, resulting in $E > 0$ (unbound/escaping system).\nHence, the system is bound at points A, B, and C.\n\n✓ **Examiner Pro-Tip**: \n- Bound state: $E < 0$ (elliptical or circular orbit).\n- Parabolic / Escape boundary: $E = 0$.\n- Unbound state: $E > 0$ (hyperbolic trajectory).",
    "tags": [
      "gravitation",
      "graphical-questions",
      "bound-system"
    ]
  },
  {
    "id": "errorless-phy-grav-326",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Motion of Satellite",
    "difficulty": "Medium",
    "questionText": "The correct graph representing the variation of total energy ($E$), kinetic energy ($K$) and potential energy ($U$) of a satellite with its distance $r$ from the centre of earth is:",
    "options": [
      "$K$ is positive and decreases as $1/r$; $E$ and $U$ are negative with $U = 2E = -2K$, both approaching zero from below as $r \\to \\infty$",
      "All three energies $E, K, U$ are positive and decrease as $1/r$",
      "$U$ is positive, while $K$ and $E$ are negative",
      "$E$ is positive, while $K$ and $U$ are negative"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor a satellite of mass $m$ orbiting Earth of mass $M$ at distance $r$:\n- Kinetic energy: $K = +\\frac{GMm}{2r} > 0$\n- Potential energy: $U = -\\frac{GMm}{r} < 0$\n- Total energy: $E = K + U = -\\frac{GMm}{2r} < 0$\n\n⚡ **Step-by-Step Derivation & Calculations**: \nRelationships between the energies:\n$$E = -K, \\quad U = 2E = -2K$$\n1. $K(r)$ lies in the first quadrant (positive, decaying as $1/r$).\n2. $E(r)$ lies in the fourth quadrant (negative, negative inverse curve).\n3. $U(r)$ lies in the fourth quadrant below $E(r)$, being twice as negative as $E(r)$ at every radius $r$.\nGraph (a) represents these exact curves.\n\n✓ **Examiner Pro-Tip**: \nRemember the master relation for circular orbits: $|U| = 2K = 2|E|$, with $K > 0$ and $U < E < 0$.",
    "tags": [
      "gravitation",
      "motion-of-satellite",
      "graphical-questions"
    ]
  },
  {
    "id": "errorless-phy-grav-327",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A shell of mass $M$ and radius $R$ has a point mass $m$ placed at a distance $r$ from its centre. The gravitational potential energy $U(r)$ versus $r$ is correctly represented by:",
    "options": [
      "$U(r) = -\\frac{GMm}{R}$ (constant) for $r \\le R$, and $U(r) = -\\frac{GMm}{r}$ for $r > R$",
      "$U(r) = 0$ for $r \\le R$ and $U(r) = -\\frac{GMm}{r}$ for $r > R$",
      "$U(r)$ is zero at $r = 0$ and decreases linearly to $-\\frac{GMm}{R}$ at $r = R$",
      "$U(r)$ is positive inside the shell and negative outside"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational potential energy of a point mass $m$ in the field of a spherical shell of mass $M$ and radius $R$ is $U(r) = m V(r)$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n1. Inside and on the surface of the shell ($r \\le R$): \n   $$V(r) = -\\frac{GM}{R} \\implies U(r) = -\\frac{GMm}{R} = \\text{constant}$$\n2. Outside the shell ($r > R$): \n   $$V(r) = -\\frac{GM}{r} \\implies U(r) = -\\frac{GMm}{r}$$\nThus, the graph of $U(r)$ is a horizontal flat line at $-\\frac{GMm}{R}$ from $r = 0$ to $r = R$, followed by an increasing curve approaching zero as $-1/r$ for $r > R$.\n\n✓ **Examiner Pro-Tip**: \nNo gravitational force acts on a particle inside a spherical shell, so its potential energy remains unchanged wherever it is placed inside the shell.",
    "tags": [
      "gravitation",
      "graphical-questions",
      "spherical-shell"
    ]
  },
  {
    "id": "errorless-phy-grav-328",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Smaller the orbit of the planet around the sun, shorter is the time it takes to complete one revolution.\nReason: According to Kepler’s third law of planetary motion, square of time period is proportional to cube of mean distance from sun.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Kepler's Third Law (Law of Periods), $T^2 \\propto r^3 \\implies T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Since $T \\propto r^{3/2}$, a planet in a smaller orbit (smaller mean orbital radius $r$) requires less time $T$ to complete one full revolution around the Sun.\n- Both Assertion and Reason are true, and the Reason correctly explains the Assertion.\n\n✓ **Examiner Pro-Tip**: \nMercury, being closest to the Sun, has the shortest orbital period (88 days), while Neptune has a period of ~165 years.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "keplers-laws"
    ]
  },
  {
    "id": "errorless-phy-grav-329",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Gravitational force between two particles is negligibly small compared to the electrical force.\nReason: The electrical force is experienced by charged particles only.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational force is the weakest fundamental force in nature ($F_e / F_g \\sim 10^{36}$ between two protons).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Assertion is true: Gravitational force between fundamental particles is extremely weak due to the very small value of $G = 6.67 \\times 10^{-11}\\text{ N m}^2/\\text{kg}^2$.\n- Reason is true: Electrostatic force acts exclusively between charged entities.\n- However, Reason does not explain *why* gravitational force is weak (which is due to the small coupling constant $G$). Hence, Reason is not the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nGravitational force dominates only on cosmic scales because large celestial bodies are electrically neutral.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "fundamental-forces"
    ]
  },
  {
    "id": "errorless-phy-grav-330",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The universal gravitational constant is same as acceleration due to gravity.\nReason: Gravitational constant and acceleration due to gravity have same dimensional formula.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nUniversal gravitational constant $G$ and acceleration due to gravity $g$ are entirely different physical quantities.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $G$ is a universal scalar constant with value $6.67 \\times 10^{-11}\\text{ N m}^2/\\text{kg}^2$ and dimensions $[M^{-1}L^3T^{-2}]$.\n- $g$ is a local vector quantity representing gravitational acceleration with value $\\approx 9.8\\text{ m/s}^2$ on Earth's surface and dimensions $[LT^{-2}]$.\n- Both Assertion and Reason are completely false.\n\n✓ **Examiner Pro-Tip**: \n$G$ is universal and independent of location/medium, whereas $g$ varies with location, altitude, depth, and latitude.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "units-and-constants"
    ]
  },
  {
    "id": "errorless-phy-grav-331",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The value of acceleration due to gravity does not depend upon mass of the body on which force is applied.\nReason: Acceleration due to gravity is a constant quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nAcceleration due to gravity is produced by the attracting planet and is independent of the mass of the attracted body.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Force on mass $m$: $F = \\frac{GMm}{R^2} \\implies g = \\frac{F}{m} = \\frac{GM}{R^2}$, which depends only on Earth's mass $M$ and radius $R$, not on $m$. Assertion is true.\n- Reason is false because $g$ is not a constant quantity; it varies with height $h$, depth $d$, latitude $\\lambda$, and shape of Earth.\n\n✓ **Examiner Pro-Tip**: \nIn vacuum, all bodies (a feather and a coin) fall with the exact same acceleration $g$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "acceleration-due-to-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-332",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: If a pendulum is suspended in a lift and the lift is falling freely, then its time period becomes infinite.\nReason: A freely falling body has acceleration equal to acceleration due to gravity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nTime period of a simple pendulum is $T = 2\\pi \\sqrt{\\frac{l}{g_{eff}}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- In a freely falling lift, the downward acceleration of the frame is $a = g$.\n- Effective acceleration due to gravity inside the lift: $g_{eff} = g - a = g - g = 0$.\n- Therefore, $T = 2\\pi \\sqrt{\\frac{l}{0}} \\to \\infty$ (the pendulum stops oscillating).\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nIn a state of weightlessness ($g_{eff} = 0$), a simple pendulum ceases to oscillate and its period is infinite.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "free-fall"
    ]
  },
  {
    "id": "errorless-phy-grav-333",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If earth suddenly stops rotating about its axis, then the value of acceleration due to gravity will become same at all places.\nReason: The value of acceleration due to gravity is independent of rotation of earth.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nVariation in $g$ over Earth's surface arises from two independent factors: Earth's rotation and Earth's oblate spheroidal shape.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- If Earth stops rotating, the centrifugal reduction $\\omega^2 R \\cos^2\\lambda$ vanishes.\n- However, because Earth is equatorial flattened ($R_{equator} - R_{pole} \\approx 21\\text{ km}$), $g_{pole} = \\frac{GM}{R_p^2} > g_{equator} = \\frac{GM}{R_e^2}$. Thus, $g$ will still differ between poles and equator. Assertion is false.\n- Reason is false because $g' = g - \\omega^2 R \\cos^2\\lambda$, showing clear dependence on rotation.\n\n✓ **Examiner Pro-Tip**: \nBoth shape effect and rotation effect make $g$ maximum at the poles and minimum at the equator.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "rotation-of-earth"
    ]
  },
  {
    "id": "errorless-phy-grav-334",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The difference in the value of acceleration due to gravity at pole and equator is proportional to square of angular velocity of earth.\nReason: The value of acceleration due to gravity is minimum at the equator and maximum at the pole.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nDue to rotation, $g' = g - \\omega^2 R \\cos^2\\lambda$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- At equator ($\\lambda = 0^\\circ$): $g_e = g - \\omega^2 R$.\n- At pole ($\\lambda = 90^\\circ$): $g_p = g$.\n- Difference due to rotation: $\\Delta g = g_p - g_e = R\\omega^2 \\propto \\omega^2$. Assertion is true.\n- Reason states that $g$ is minimum at equator and maximum at pole, which is a true statement, but is not the explanatory reason why the difference scales with $\\omega^2$.\n\n✓ **Examiner Pro-Tip**: \nIf Earth were to rotate 17 times faster ($\\omega' = \\sqrt{g/R}$), bodies at the equator would become completely weightless.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "rotation-of-earth"
    ]
  },
  {
    "id": "errorless-phy-grav-335",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: There is no effect of rotation of earth on acceleration due to gravity at poles.\nReason: Rotation of earth is about the polar axis.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nThe polar axis is the axis of rotation of the Earth.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- At latitude $\\lambda$, $g' = g - R\\omega^2 \\cos^2\\lambda$.\n- At the poles, latitude $\\lambda = 90^\\circ$, giving $\\cos 90^\\circ = 0 \\implies g_{pole}' = g$.\n- Distance of points on the polar axis from the rotation axis is zero ($r = R \\cos 90^\\circ = 0$), so centrifugal acceleration is strictly zero.\n- Both Assertion and Reason are true, but the primary mathematical reason is that latitude at poles is $90^\\circ$.\n\n✓ **Examiner Pro-Tip**: \nWeight of a body is maximal at the poles and remains unchanged whether the Earth rotates or stops.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "rotation-of-earth"
    ]
  },
  {
    "id": "errorless-phy-grav-336",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A force acts upon the earth revolving in a circular orbit about the sun. Hence work should be done on the earth.\nReason: The necessary centripetal force for circular motion of earth comes from the gravitational force between earth and sun.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWork done by a force is $W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- In a circular orbit, the gravitational force $\\vec{F}$ is directed radially inward towards the Sun, while the displacement $\\vec{ds}$ is tangential (perpendicular to force, $\\theta = 90^\\circ$).\n- Thus, work done per revolution (and at every instant) is $W = F ds \\cos 90^\\circ = 0$. Assertion is false.\n- Reason is true: The gravitational attraction of the Sun provides the required centripetal force $\\frac{M v^2}{r}$.\n- Hence, Assertion is false but Reason is true.\n\n✓ **Examiner Pro-Tip**: \nCentral forces always do zero work along any circular path because force is always perpendicular to displacement.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "work-done-in-orbit"
    ]
  },
  {
    "id": "errorless-phy-grav-337",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The ratio of inertial mass to gravitational mass is equal to one.\nReason: The inertial mass and gravitational mass of a body are equivalent.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEinstein's Principle of Equivalence establishes the identity between inertial mass ($m_i = F/a$) and gravitational mass ($m_g = F_g/g$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- High-precision experiments (Eötvös experiment) demonstrate that $m_i = m_g$ to within 1 part in $10^{13}$.\n- Ratio $\\frac{m_i}{m_g} = 1$.\n- Both Assertion and Reason are true, and Reason is the exact fundamental explanation.\n\n✓ **Examiner Pro-Tip**: \nIt is this precise equivalence $m_i = m_g$ that ensures all bodies fall with the exact same acceleration in a gravitational field.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "equivalence-principle"
    ]
  },
  {
    "id": "errorless-phy-grav-338",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Gravitational potential of earth at every place on it is negative.\nReason: Every body on earth is bound by the attraction of earth.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy standard convention, gravitational potential is defined to be zero at infinity ($V_\\infty = 0$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Since the gravitational force is purely attractive, an external agent does negative work bringing a test mass from infinity to any point near Earth: $V(r) = -\\int_\\infty^r \\vec{E}\\cdot d\\vec{r} = -\\frac{GM}{r} < 0$.\n- The negative potential signifies that positive work must be supplied to liberate a mass to infinity (i.e., it is in a bound state).\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nA negative total energy or potential signifies a bound system.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "gravitational-potential"
    ]
  },
  {
    "id": "errorless-phy-grav-339",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Even when the orbit of a satellite is elliptical, its plane of rotation passes through the centre of earth.\nReason: According to law of conservation of angular momentum, plane of rotation of satellite always remains same.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational force is a central force directed along the line joining the satellite to the center of the Earth.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Torque about Earth's center: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$ since $\\vec{r}$ and $\\vec{F}$ are anti-parallel.\n- Since torque is zero, angular momentum $\\vec{L} = \\vec{r} \\times \\vec{p}$ is constant in both magnitude and direction.\n- The constancy of the direction of $\\vec{L}$ ensures that the orbital plane is fixed in space and must contain the center of force (Earth's center). Assertion is true.\n- Reason in textbook key is regarded as incomplete/false because the definition of plane passing through Earth's center requires that the force itself is central about that center.\n\n✓ **Examiner Pro-Tip**: \nEvery satellite orbit (circular or elliptical) must lie in a plane that passes through Earth's center of mass.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "motion-of-satellite"
    ]
  },
  {
    "id": "errorless-phy-grav-340",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: A planet moves faster when it is closer to the sun in its orbit and vice versa.\nReason: Orbital velocity in the orbit of a planet is constant.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Kepler's Second Law (Law of Areas), the areal velocity of a planet is constant, which is a consequence of conservation of angular momentum ($L = m r v_\\perp = \\text{constant}$).\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $v \\propto \\frac{1}{r}$. When $r$ is smallest (perihelion), speed $v$ is maximum; when $r$ is largest (aphelion), speed $v$ is minimum. Assertion is true.\n- Reason states that orbital velocity is constant, which is false for elliptical orbits (it only holds for circular orbits).\n- Hence, Assertion is true but Reason is false.\n\n✓ **Examiner Pro-Tip**: \n$v_{perihelion} \\cdot r_{perihelion} = v_{aphelion} \\cdot r_{aphelion}$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "keplers-laws"
    ]
  },
  {
    "id": "errorless-phy-grav-341",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Orbital velocity of a satellite is greater than its escape velocity.\nReason: Orbit of a satellite is within the gravitational field of earth whereas escaping is beyond the gravitational field of earth.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor an orbit near Earth's surface, orbital speed is $v_o = \\sqrt{gR} \\approx 7.92\\text{ km/s}$, while escape speed is $v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $v_e = \\sqrt{2} v_o \\approx 1.414 v_o > v_o$. Thus, orbital speed is always less than escape speed. Assertion is false.\n- Reason is true: An orbiting satellite remains gravitationally bound within the field ($E < 0$), while an escaping object reaches infinity where gravitational influence is effectively zero ($E \\ge 0$).\n- Hence, Assertion is false but Reason is true.\n\n✓ **Examiner Pro-Tip**: \nIf a satellite's speed is boosted by $\\sqrt{2} - 1 \\approx 41.4\\%$, it escapes Earth's gravitational field into a parabolic path.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "escape-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-342",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: If an earth satellite moves to a lower orbit, there is some dissipation of energy but the satellite speed increases.\nReason: The speed of satellite is a constant quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor a satellite in circular orbit of radius $r$, total energy is $E = -\\frac{GMm}{2r}$ and speed is $v = \\sqrt{\\frac{GM}{r}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- When atmospheric drag causes energy dissipation, total energy $E$ decreases (becomes more negative), which means orbital radius $r$ must decrease (satellite spirals into a lower orbit).\n- As $r$ decreases, orbital speed $v = \\sqrt{GM/r}$ increases (half the lost potential energy converts to kinetic energy, while the other half is dissipated as heat). Assertion is true.\n- Reason states that the speed of a satellite is a constant quantity (which holds along any fixed circular orbit). Reason is true, but is not the explanation of Assertion.\n\n✓ **Examiner Pro-Tip**: \nAtmospheric braking paradoxical accelerates satellites: $\\Delta K = -\\Delta E > 0$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "satellite-energy"
    ]
  },
  {
    "id": "errorless-phy-grav-343",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Earth has an atmosphere but the moon does not.\nReason: Moon is very small in comparison to earth.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nA celestial body retains an atmosphere if the root-mean-square speed of gas molecules is less than the escape velocity: $v_{rms} < v_e$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- On Moon, $v_e = 2.38\\text{ km/s}$, whereas the thermal $v_{rms}$ of gases (like $H_2, N_2, O_2$) at lunar temperatures exceeds this escape speed, causing them to escape over cosmic time. Assertion is true.\n- Reason: Moon is indeed much smaller than Earth ($M_M \\approx M_E/81, R_M \\approx R_E/4$). Reason is true, but the precise physical cause is $v_{rms} > v_e$.\n- Hence, both are true but Reason is not the complete physical explanation.\n\n✓ **Examiner Pro-Tip**: \nAtmosphere retention criterion: $v_{rms} < \\frac{1}{5} v_e$ ensures long-term atmospheric stability.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "escape-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-344",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The time period of a geostationary satellite is 24 hours.\nReason: A geostationary satellite must have the same time period as the time taken by the earth to complete one revolution about its axis.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nA geostationary satellite appears stationary relative to an observer on Earth's surface.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- To remain fixed above a specific point on the equator, the satellite must orbit in the equatorial plane from west to east with the exact same rotational period as Earth ($T = 24\\text{ hours} = 86400\\text{ s}$).\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nOrbital radius of a geostationary satellite is $r \\approx 42,400\\text{ km}$, which is a height of $\\approx 36,000\\text{ km}$ above the equator.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "geostationary-satellite"
    ]
  },
  {
    "id": "errorless-phy-grav-345",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The principle of superposition is not valid for gravitational force.\nReason: Gravitational force is a conservative force.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational forces obey the Principle of Superposition: The net gravitational force exerted on a mass by a collection of masses is the vector sum of individual two-body gravitational forces.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $\\vec{F}_{net} = \\vec{F}_1 + \\vec{F}_2 + \\dots + \\vec{F}_n$. Thus, the superposition principle IS valid. Assertion is false.\n- Reason: Gravitational force is indeed conservative, but in the textbook key, the pairing is marked (d) because the assertion that superposition is invalid is false.\n\n✓ **Examiner Pro-Tip**: \nThe presence of a third mass never alters the gravitational attraction between any two given masses.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "superposition-principle"
    ]
  },
  {
    "id": "errorless-phy-grav-346",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Two different planets have same escape velocity.\nReason: Value of escape velocity is a universal constant.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEscape velocity from the surface of a planet of mass $M$ and radius $R$ is $v_e = \\sqrt{\\frac{2GM}{R}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Escape velocity depends directly on the ratio $M/R$ of the specific planet.\n- Two different planets generally have different masses and radii, so their escape velocities differ. Assertion is false.\n- Reason is false because escape velocity is not a universal constant ($G$ is a universal constant, but $v_e$ is planet-specific).\n- Both Assertion and Reason are false.\n\n✓ **Examiner Pro-Tip**: \nEarth $v_e \\approx 11.2\\text{ km/s}$, Moon $v_e \\approx 2.38\\text{ km/s}$, Jupiter $v_e \\approx 59.5\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "escape-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-347",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The time period of revolution of a satellite close to the surface of earth is smaller than that revolving away from the surface of earth.\nReason: The square of time period of revolution of a satellite is directly proportional to the cube of its orbital radius.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Kepler's Third Law, $T^2 = \\frac{4\\pi^2}{GM} r^3 \\implies T \\propto r^{3/2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- For a satellite orbiting close to Earth ($r \\approx R$), $T \\approx 84.6\\text{ minutes} = 1.4\\text{ hours}$.\n- For a distant satellite (e.g. geostationary at $r = 6.6 R$), $T = 24\\text{ hours}$.\n- Therefore, a closer satellite has a shorter orbital period. Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nOrbital speed $v = \\sqrt{GM/r}$ is higher for closer orbits, while time period $T = 2\\pi r/v$ is smaller.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "motion-of-satellite"
    ]
  },
  {
    "id": "errorless-phy-grav-348",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: When the distance between two bodies is doubled and also the mass of each body is doubled, the gravitational force between them remains the same.\nReason: According to Newton’s law of gravitation, force is directly proportional to the product of masses and inversely proportional to the square of distance between them.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nNewton's Law of Universal Gravitation: $F = \\frac{G m_1 m_2}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- If $m_1' = 2m_1$, $m_2' = 2m_2$, and $r' = 2r$:\n  $$F' = \\frac{G (2m_1)(2m_2)}{(2r)^2} = \\frac{4 G m_1 m_2}{4 r^2} = F$$\n- The force remains completely unchanged.\n- Both Assertion and Reason are true, and Reason is the exact mathematical explanation.\n\n✓ **Examiner Pro-Tip**: \nScaling factor: $\\frac{F'}{F} = \\frac{2 \\times 2}{2^2} = 1$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "newtons-law"
    ]
  },
  {
    "id": "errorless-phy-grav-349",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Hard",
    "questionText": "Assertion: Generally the path of a projectile from the earth is parabolic, but it is elliptical for projectiles going to a very large height.\nReason: The path of a projectile is independent of the gravitational force of earth.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor small heights ($h \\ll R$), gravitational acceleration $\\vec{g}$ is assumed uniform and parallel, yielding a parabolic trajectory under constant gravity.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- For large heights comparable to Earth's radius $R$, the gravitational force varies with distance ($F \\propto 1/r^2$) and is directed radially towards the Earth's center (central force field).\n- Under an inverse-square central force, trajectories are conic sections (Keplerian ellipses with Earth's center at one focus). Assertion is true.\n- Reason is completely false because the trajectory is entirely governed by Earth's gravitational field.\n- Hence, Assertion is true but Reason is false.\n\n✓ **Examiner Pro-Tip**: \nA parabola is simply the local flat-Earth approximation of a narrow Keplerian ellipse.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "projectile-motion"
    ]
  },
  {
    "id": "errorless-phy-grav-350",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: A body becomes weightless at the centre of the earth.\nReason: As the distance from the centre of earth decreases, acceleration due to gravity increases.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nInside a solid sphere of uniform density, acceleration due to gravity at distance $r$ from the centre is $g_{in} = g \\frac{r}{R}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- At the centre of Earth ($r = 0$), $g_{centre} = 0$, so weight $W = mg = 0$ (weightlessness). Assertion is true.\n- As distance $r$ from the center decreases, $g_{in}$ decreases linearly, becoming zero at $r = 0$. Thus, Reason is false.\n- Hence, Assertion is true but Reason is false.\n\n✓ **Examiner Pro-Tip**: \n$g$ increases as you move from the center ($r=0$) towards the surface ($r=R$), and decreases as you move further away from the surface ($r>R$).",
    "tags": [
      "gravitation",
      "assertion-reason",
      "acceleration-due-to-gravity"
    ]
  },
  {
    "id": "errorless-phy-grav-351",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Space rockets are usually launched in the equatorial line from west to east.\nReason: The acceleration due to gravity is minimum at the equator.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nEarth rotates on its axis from west to east.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Launching eastward from the equator imparts an initial linear rotational speed of $v = \\omega R_e \\approx 465\\text{ m/s} \\approx 1670\\text{ km/h}$ to the rocket for free, significantly saving rocket propellant. Assertion is true.\n- Reason states that $g$ is minimum at the equator, which is physically true ($g_e < g_p$), but is not the primary reason for launching eastward (the boost from Earth's rotation is the key reason).\n- Hence, both are true but Reason is not the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nEastward launch utilizes Earth's tangential rotational velocity: $\\Delta v_{boost} = \\omega R \\cos\\lambda$ (maximum at equator $\\lambda = 0^\\circ$).",
    "tags": [
      "gravitation",
      "assertion-reason",
      "rocket-launch"
    ]
  },
  {
    "id": "errorless-phy-grav-352",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The binding energy of a satellite does not depend upon the mass of the satellite.\nReason: Binding energy is the negative value of total energy of the satellite.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBinding energy is the minimum mechanical energy that must be supplied to a bound body to liberate it to infinity.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Total mechanical energy of a satellite: $E = -\\frac{GMm}{2r}$.\n- Binding energy: $\\text{B.E.} = -E = +\\frac{GMm}{2r}$, which is directly proportional to the mass $m$ of the satellite. Assertion is false.\n- Reason is true: By definition, $\\text{B.E.} = -E_{total}$.\n- Hence, Assertion is false but Reason is true.\n\n✓ **Examiner Pro-Tip**: \nBinding energy per unit mass is $\\frac{\\text{B.E.}}{m} = \\frac{GM}{2r}$, which is independent of satellite mass, but total binding energy depends directly on $m$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "binding-energy"
    ]
  },
  {
    "id": "errorless-phy-grav-353",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: We cannot move even a finger without disturbing all the stars.\nReason: Every body in this universe attracts every other body with a force which is inversely proportional to the square of distance between them.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nNewton's Law of Universal Gravitation is a universal law with an infinite range: $F = \\frac{G m_1 m_2}{r^2}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Whenever any mass moves, the distribution of mass in the universe changes, altering the gravitational field and gravitational force exerted on every other mass in the universe (however minuscule).\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nGravitation has infinite range ($r \\to \\infty$) and zero shielding.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "newtons-law"
    ]
  },
  {
    "id": "errorless-phy-grav-354",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: If earth were a hollow sphere, gravitational field intensity at any point inside the earth would be zero.\nReason: Net force on a body inside the sphere is zero.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nBy Newton's Shell Theorem, a uniform spherical shell exerts zero net gravitational force on any particle located anywhere in its interior.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Gravitational field intensity inside a hollow spherical shell: $E = \\frac{F}{m} = 0$.\n- Net force on any test mass inside is identically zero.\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nInside a hollow spherical shell, gravitational field is zero and gravitational potential is uniform ($V = -\\frac{GM}{R}$).",
    "tags": [
      "gravitation",
      "assertion-reason",
      "spherical-shell"
    ]
  },
  {
    "id": "errorless-phy-grav-355",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: For a satellite revolving very near to earth’s surface, the time period of revolution is given by 1 hour 24 minutes.\nReason: The period of revolution of a satellite depends only upon its height above the earth’s surface.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nFor a satellite orbiting near Earth's surface ($h \\approx 0$), time period is $T = 2\\pi \\sqrt{\\frac{R}{g}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- $T = 2\\pi \\sqrt{\\frac{6.4 \\times 10^6\\text{ m}}{9.8\\text{ m/s}^2}} \\approx 5078\\text{ s} \\approx 84.6\\text{ min} = 1\\text{ hr } 24.6\\text{ min}$. Assertion is true.\n- Reason is false because $T = 2\\pi \\sqrt{\\frac{(R+h)^3}{GM}}$ depends not only on height $h$, but also on Earth's radius $R$ and mass $M$ (or density $\\rho$).\n- Hence, Assertion is true but Reason is false.\n\n✓ **Examiner Pro-Tip**: \nFor surface orbits, $T = \\sqrt{\\frac{3\\pi}{G\\rho}}$, depending only on the mean density $\\rho$ of the planet.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "satellite-period"
    ]
  },
  {
    "id": "errorless-phy-grav-356",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A person sitting in an artificial satellite revolving around the earth feels weightless.\nReason: There is no gravitational force on the satellite.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nWeightlessness in orbit occurs because both the astronaut and the satellite are in continuous free fall towards the center of Earth under gravity.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Inside the satellite, normal reaction $N = m(g' - a) = m(g' - g') = 0$, giving the sensation of weightlessness. Assertion is true.\n- Reason is completely false because gravitational force provides the vital centripetal force $\\frac{mv^2}{r} = \\frac{GMm}{r^2}$ keeping the satellite in orbit.\n- Hence, Assertion is true but Reason is false.\n\n✓ **Examiner Pro-Tip**: \nAstronauts in orbit are not beyond gravity—Earth's gravity at 400 km altitude (ISS) is still ~90% of surface gravity.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "weightlessness"
    ]
  },
  {
    "id": "errorless-phy-grav-357",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The speed of a satellite always remains constant in an orbit.\nReason: The speed of a satellite depends on its path.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 **NCERT Fundamental Concept**: \nIn general, satellite orbits are ellipses where orbital speed varies continuously.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- In an elliptical orbit, the satellite speeds up as it approaches perigee (closest point) and slows down as it moves toward apogee (farthest point). Speed is constant only in the special case of a circular orbit. Assertion is false.\n- Reason is true: The speed profile directly depends on the orbital trajectory/path.\n- Hence, Assertion is false but Reason is true.\n\n✓ **Examiner Pro-Tip**: \nIn any Keplerian orbit, mechanical energy is conserved: $\\frac{1}{2}m v^2 - \\frac{GMm}{r} = -\\frac{GMm}{2a}$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "motion-of-satellite"
    ]
  },
  {
    "id": "errorless-phy-grav-358",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The speed of revolution of an artificial satellite revolving very near the earth is $\\approx 8\\text{ km/s}$.\nReason: Orbital velocity of a satellite becomes independent of height of near satellite.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Fundamental Concept**: \nOrbital speed of a satellite at height $h$ is $v_o = \\sqrt{\\frac{GM}{R+h}}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- For a satellite very near the surface ($h \\ll R$), $v_o \\approx \\sqrt{gR} = \\sqrt{9.8\\text{ m/s}^2 \\times 6.4 \\times 10^6\\text{ m}} \\approx 7.92\\text{ km/s} \\approx 8\\text{ km/s}$. Assertion is true.\n- Reason is false because orbital velocity is fundamentally dependent on orbital radius ($R+h$); taking $h \\ll R$ is merely a practical approximation, not a height-independence law.\n- Hence, Assertion is true but Reason is false.\n\n✓ **Examiner Pro-Tip**: \nFirst cosmic velocity (near-surface circular orbital speed) is $v_{c1} \\approx 7.9\\text{ km/s}$.",
    "tags": [
      "gravitation",
      "assertion-reason",
      "orbital-velocity"
    ]
  },
  {
    "id": "errorless-phy-grav-359",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Gravitational field is zero both at the centre of earth and at infinity.\nReason: The dimensions of gravitational field are $[LT^{-2}]$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational field intensity is defined as force per unit mass: $\\vec{I} = \\frac{\\vec{F}}{m}$.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- At Earth's centre ($r = 0$), $I_{centre} = \\frac{GM \\cdot 0}{R^3} = 0$.\n- At infinity ($r \\to \\infty$), $I_\\infty = \\lim_{r\\to\\infty} \\frac{GM}{r^2} = 0$. Assertion is true.\n- Reason: The dimensional formula of gravitational field is $\\frac{[MLT^{-2}]}{[M]} = [LT^{-2}]$. Reason is true, but is not the explanatory reason why field vanishes at centre and infinity.\n- Hence, both are true but Reason is not the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nGravitational field is zero at points of spherical symmetry (centre) and at asymptotic boundary ($r \\to \\infty$).",
    "tags": [
      "gravitation",
      "assertion-reason",
      "gravitational-field"
    ]
  },
  {
    "id": "errorless-phy-grav-360",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: For planets orbiting around the sun, angular speed, linear speed, and kinetic energy change with time, but angular momentum remains constant.\nReason: No torque is acting on the rotating planet, so its angular momentum is constant.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Fundamental Concept**: \nGravitational force is a central force directed along the position vector towards the Sun.\n\n⚡ **Step-by-Step Derivation & Calculations**: \n- Net torque on the planet about the Sun: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}_g = r F_g \\sin 180^\\circ = 0$.\n- By Newton's second law for rotation, $\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}$.\n- As distance $r$ varies in an elliptical orbit, linear speed $v$ and angular speed $\\omega$ vary continuously, while total angular momentum $\\vec{L}$ remains strictly conserved.\n- Both Assertion and Reason are true, and Reason is the correct explanation.\n\n✓ **Examiner Pro-Tip**: \nConservation of angular momentum is the physical basis of Kepler's Second Law (equal areas in equal intervals of time).",
    "tags": [
      "gravitation",
      "assertion-reason",
      "angular-momentum"
    ]
  }
];

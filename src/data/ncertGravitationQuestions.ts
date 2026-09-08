import { Question } from '../types';

export const NCERT_GRAVITATION_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch08-ex01",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Variation of Gravity with Altitude",
    "difficulty": "Easy",
    "questionText": "A body weighs 144 N at the surface of the Earth. When it is taken to a height h = 3R (where R is the radius of the Earth), its weight would become:",
    "options": [
      "48 N",
      "36 N",
      "16 N",
      "9 N"
    ],
    "correctAnswer": 3,
    "explanation": "g' = g / (1 + h/R)^2 = g / (1 + 3)^2 = g / 16.\nWeight w' = w / 16 = 144 / 16 = 9 N.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex02",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Newton's Law of Universal Gravitation",
    "difficulty": "Easy",
    "questionText": "If the masses of two point objects are each tripled and the distance between them is doubled, the gravitational force of attraction between them will:",
    "options": [
      "Increase by 225%",
      "Decrease by 56%",
      "Increase by 125%",
      "Decrease by 144%"
    ],
    "correctAnswer": 2,
    "explanation": "F' = G (3m1)(3m2) / (2r)^2 = (9/4) F = 2.25 F.\nPercentage change = ((2.25 F - F)/F) * 100% = +125% increase.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex03",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Dimensions of Gravitational Ratio",
    "difficulty": "Easy",
    "questionText": "If G is the universal gravitational constant and g is the acceleration due to gravity on the Earth's surface, the dimensional formula of (G / g) is:",
    "options": [
      "[M^-1 L^2]",
      "[M^-1 L]",
      "[M^-2 L]",
      "[M^-1 L^-2]"
    ],
    "correctAnswer": 0,
    "explanation": "G = [M^-1 L^3 T^-2], g = [L T^-2].\n[G / g] = [M^-1 L^3 T^-2] / [L T^-2] = [M^-1 L^2].",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex04",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Planetary Surface Gravity & Weight",
    "difficulty": "Medium",
    "questionText": "What is the weight of a 70 kg body on the surface of a planet whose mass is (1/7)th that of Earth and radius is half that of Earth?",
    "options": [
      "20 kgf",
      "40 kgf",
      "70 kgf",
      "140 kgf"
    ],
    "correctAnswer": 1,
    "explanation": "g_p = G M_p / R_p^2 = G (M_e / 7) / (R_e / 2)^2 = (4/7) g_e.\nWeight = 70 * (4/7) = 40 kgf.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex05",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Earth Rotation Effect at Poles",
    "difficulty": "Easy",
    "questionText": "If the spinning speed (angular velocity \u03c9) of the Earth decreases, then the weight of a body situated at the poles:",
    "options": [
      "Does not change",
      "Decreases",
      "Increases",
      "May increase or decrease"
    ],
    "correctAnswer": 0,
    "explanation": "g' = g - R \u03c9^2 cos^2(\u03bb). At the poles, latitude \u03bb = 90\u00b0, so cos 90\u00b0 = 0. Therefore, g'_pole = g, which is completely independent of the Earth's rotation speed.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex06",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Contraction of Earth & Fractional Change",
    "difficulty": "Easy",
    "questionText": "If the radius of the Earth contracts by 0.1% while its mass remains constant, the weight of a body on the Earth's surface will:",
    "options": [
      "Increase by 0.1%",
      "Increase by 0.2%",
      "Increase by 0.3%",
      "Remain same"
    ],
    "correctAnswer": 1,
    "explanation": "g = GM / R^2 => dg / g = -2 (dR / R) = -2 (-0.1%) = +0.2% increase.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex07",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Surface Gravity with Scaled Mass and Radius",
    "difficulty": "Medium",
    "questionText": "If the mass of the Earth decreases by 25% and its radius increases by 50%, the acceleration due to gravity at its surface decreases by nearly:",
    "options": [
      "89%",
      "67%",
      "33%",
      "11%"
    ],
    "correctAnswer": 1,
    "explanation": "M' = 0.75 M, R' = 1.5 R.\ng' = G (0.75 M) / (1.5 R)^2 = (0.75 / 2.25) g = (1/3) g.\nPercentage decrease = (1 - 1/3) * 100% = 66.67% \u2248 67%.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex08",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Maximum Gravitational Force Condition",
    "difficulty": "Medium",
    "questionText": "Two point objects of masses 2x and 3x are separated by a fixed distance r. How much mass should be transferred from 3x to 2x so that the gravitational force between them becomes maximum?",
    "options": [
      "x/4",
      "x/3",
      "x/2",
      "2x/3"
    ],
    "correctAnswer": 2,
    "explanation": "Total mass M = 2x + 3x = 5x. For fixed distance, force F \u221d m1 * m2 is maximum when m1 = m2 = 5x / 2 = 2.5x.\nMass to transfer = 3x - 2.5x = 0.5x = x/2.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex09",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Planetary Density & Radius Relation",
    "difficulty": "Medium",
    "questionText": "The acceleration due to gravity at the surface of a planet is equal to that at the surface of the Earth, and its density is 1.5 times that of Earth. If the radius of the Earth is R, the radius of the planet is:",
    "options": [
      "(3/2)R",
      "(2/3)R",
      "(9/4)R",
      "(4/9)R"
    ],
    "correctAnswer": 1,
    "explanation": "g = (4/3) \u03c0 G \u03c1 R. Since g_p = g_e => \u03c1_p R_p = \u03c1_e R_e => (1.5 \u03c1_e) R_p = \u03c1_e R => R_p = R / 1.5 = (2/3) R.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex10",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Height vs Depth Weight Comparison",
    "difficulty": "Easy",
    "questionText": "The weight of a body decreases by 1.5% when it is raised to a height h above the surface of the Earth (h << R). When the same body is taken to the same depth h in a mine, its weight will show:",
    "options": [
      "0.75% increase",
      "3.0% decrease",
      "0.75% decrease",
      "1.5% decrease"
    ],
    "correctAnswer": 2,
    "explanation": "Fractional decrease at height h: \u0394g/g = 2h/R = 1.5%.\nFractional decrease at depth h: \u0394g/g = h/R = (1/2) * (2h/R) = 1.5% / 2 = 0.75% decrease.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex11",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Interstellar Speed from Super-Escape Projection",
    "difficulty": "Medium",
    "questionText": "Let the escape velocity from the surface of a planet be u. If a body is projected vertically upwards at a speed of 200% more than the escape speed, its residual speed in interstellar space will be:",
    "options": [
      "u",
      "\u221a3 u",
      "2u",
      "2\u221a2 u"
    ],
    "correctAnswer": 3,
    "explanation": "Projection speed v = u + 200% of u = u + 2u = 3u.\nBy conservation of energy: v_\u221e = \u221a(v^2 - v_e^2) = \u221a((3u)^2 - u^2) = \u221a(9u^2 - u^2) = \u221a8 u = 2\u221a2 u.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex12",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Satellite Kinetic Energy & Time Period",
    "difficulty": "Medium",
    "questionText": "If the kinetic energy of a circular orbiting satellite is x, then its time of revolution T is proportional to:",
    "options": [
      "x^-3",
      "x^(-3/2)",
      "x^-1",
      "\u221ax"
    ],
    "correctAnswer": 1,
    "explanation": "KE = GMm / (2r) = x => r \u221d 1/x.\nBy Kepler's Third Law, T \u221d r^(3/2) \u221d (1/x)^(3/2) = x^(-3/2).",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex13",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Satellite Orbital Altitude from Escape Speed Fraction",
    "difficulty": "Hard",
    "questionText": "An artificial satellite is moving around the Earth in a circular orbit with orbital speed equal to (1/4)th the escape speed from the Earth's surface. The height h of the satellite above the Earth's surface is (where R is the radius of the Earth):",
    "options": [
      "3R",
      "5R",
      "7R",
      "8R"
    ],
    "correctAnswer": 2,
    "explanation": "v_orb = \u221a(GM / (R + h)) and v_e = \u221a(2GM / R).\nv_orb = (1/4) v_e => GM / (R + h) = (1/16) * (2GM / R) = GM / (8R) => R + h = 8R => h = 7R.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex14",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Kepler's Law Orbital Radius vs Time Graph",
    "difficulty": "Medium",
    "questionText": "Which graph correctly represents the variation of orbital radius r of a circular satellite orbit against its time period T (where T^2 \u221d r^3)?",
    "options": [
      "Curve with increasing slope (r \u221d T^(2/3), concave downward)",
      "Straight line through origin",
      "Curve with decreasing slope concave upward",
      "Horizontal line"
    ],
    "correctAnswer": 0,
    "explanation": "r = C * T^(2/3). Since the exponent 2/3 < 1, the curve starts from origin with infinite slope and bends concavely downward as T increases.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex15",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Satellite Binding Energy",
    "difficulty": "Hard",
    "questionText": "A satellite of mass 200 kg revolves around a planet of mass 5 \u00d7 10^30 kg in a circular orbit of radius 6.67 \u00d7 10^6 m. The binding energy of the satellite is (G = 6.67 \u00d7 10^-11 N m^2/kg^2):",
    "options": [
      "5 \u00d7 10^15 J",
      "-5 \u00d7 10^15 J",
      "10^16 J",
      "-10^16 J"
    ],
    "correctAnswer": 0,
    "explanation": "Binding Energy = -Total Energy = +GMm / (2r) = (6.67 \u00d7 10^-11 * 5 \u00d7 10^30 * 200) / (2 * 6.67 \u00d7 10^6) = 5 \u00d7 10^15 J.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex16",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Ratio of Satellite Orbital Speeds",
    "difficulty": "Easy",
    "questionText": "Two satellites A and B revolve around planet P in circular orbits of radii 4R and R respectively. If the speed of satellite A is 3v, the orbital speed of satellite B is:",
    "options": [
      "12v",
      "6v",
      "(4/3)v",
      "(3/2)v"
    ],
    "correctAnswer": 1,
    "explanation": "v_orb = \u221a(GM / r) => v_A / v_B = \u221a(r_B / r_A) = \u221a(R / 4R) = 1/2.\nv_B = 2 * v_A = 2 * (3v) = 6v.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex17",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Escape Velocity at Altitude",
    "difficulty": "Hard",
    "questionText": "The escape velocity of an atmospheric particle located at 1000 km above the Earth's surface is approximately (radius of Earth R = 6400 km, g = 9.8 m/s^2):",
    "options": [
      "6.5 km/s",
      "8 km/s",
      "10 km/s",
      "11.2 km/s"
    ],
    "correctAnswer": 2,
    "explanation": "v_e(h) = \u221a(2GM / (R + h)) = \u221a((2 g R^2)/(R + h)) = \u221a( (2 * 9.8 * (6.4 \u00d7 10^6)^2) / (7.4 \u00d7 10^6) ) \u2248 10.0 \u00d7 10^3 m/s = 10 km/s.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex18",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Escape vs Orbital Kinetic Energy Ratio",
    "difficulty": "Easy",
    "questionText": "The ratio of kinetic energy required for a satellite to escape from the Earth's surface to the kinetic energy required for it to revolve in a circular orbit just above the Earth's surface is:",
    "options": [
      "1 : 1",
      "2 : 1",
      "\u221a2 : 1",
      "4 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "KE_escape = (1/2) m v_e^2 = (1/2) m (2GM/R) = GMm/R.\nKE_orbit = (1/2) m v_o^2 = (1/2) m (GM/R) = GMm/(2R).\nRatio = (GMm/R) / (GMm/2R) = 2 : 1.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex19",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Disappearance of Gravity on Orbiting Satellite",
    "difficulty": "Easy",
    "questionText": "A satellite is revolving around the Earth in a circular orbit at a uniform speed v. If the gravitational attraction of the Earth suddenly disappears, the satellite will:",
    "options": [
      "Fall down to Earth",
      "Move tangentially with speed v",
      "Move radially outward with speed 2v",
      "Fly away to infinity instantly"
    ],
    "correctAnswer": 1,
    "explanation": "By Newton's First Law, in the absence of any net external force, the satellite will continue in straight-line motion along the instantaneous tangent to its orbit with speed v.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch08-ex20",
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "Gravitational Principles Verification",
    "difficulty": "Easy",
    "questionText": "Consider the following statements regarding gravitation:\n(i) Escape velocity does not depend on the mass of the projectile.\n(ii) If total mechanical energy of a satellite becomes positive, it escapes from the gravitational field.\n(iii) The orbit of a geostationary satellite is called a parking orbit.\nWhich statement(s) is/are correct?",
    "options": [
      "(i) only",
      "(i) and (ii) only",
      "(i), (ii) and (iii)",
      "(i) and (iii) only"
    ],
    "correctAnswer": 2,
    "explanation": "All three statements are factually correct physical principles of celestial gravitation.",
    "tags": [
      "NCERT NEET Physics",
      "Gravitation",
      "Class 11"
    ]
  }
];

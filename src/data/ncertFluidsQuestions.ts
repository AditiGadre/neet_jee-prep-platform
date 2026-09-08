import { Question } from '../types';

export const NCERT_FLUIDS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch10-ex01",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Dimensions of Pressure Head",
    "difficulty": "Easy",
    "questionText": "The dimensional formula for pressure head (h = P / (\u03c1 g)) in fluid mechanics is:",
    "options": [
      "[M^0 L^0 T^0]",
      "[M L^-1 T^-2]",
      "[M^0 L^1 T^-2]",
      "[M^0 L^1 T^0]"
    ],
    "correctAnswer": 3,
    "explanation": "Pressure head represents an equivalent height of a fluid column, having the dimensions of length: [M^0 L^1 T^0].",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex02",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Average Pressure on Femur Bones",
    "difficulty": "Easy",
    "questionText": "The two thigh bones (femurs), each of cross-sectional area 10 cm^2, support the upper body of a person of mass 50 kg. The average pressure sustained by the femurs is (take g = 10 m/s^2):",
    "options": [
      "2.5 \u00d7 10^5 N/m^2",
      "4 \u00d7 10^5 N/m^2",
      "5 \u00d7 10^5 N/m^2",
      "10^6 N/m^2"
    ],
    "correctAnswer": 0,
    "explanation": "Total cross-sectional area A = 2 \u00d7 10 cm^2 = 20 \u00d7 10^-4 m^2 = 2 \u00d7 10^-3 m^2.\nTotal force F = mg = 50 \u00d7 10 = 500 N.\nAverage pressure P = F / A = 500 / (2 \u00d7 10^-3) = 2.5 \u00d7 10^5 N/m^2.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex03",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Absolute Pressure Underwater",
    "difficulty": "Easy",
    "questionText": "What is the absolute hydrostatic pressure on a swimmer 20 m below the surface of a freshwater lake? (take P_atm = 1 atm, density = 1000 kg/m^3, g = 10 m/s^2):",
    "options": [
      "1 atm",
      "2 atm",
      "3 atm",
      "4 atm"
    ],
    "correctAnswer": 2,
    "explanation": "Gauge pressure P_gauge = \u03c1 g h = (1000)(10)(20) = 2 \u00d7 10^5 Pa \u2248 2 atm.\nAbsolute pressure P = P_atm + P_gauge = 1 atm + 2 atm = 3 atm.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex04",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Resultant Force on Vertical Dam",
    "difficulty": "Medium",
    "questionText": "Water is filled to a height H behind a vertical rectangular dam of width w. The total resultant thrust force exerted by the water on the dam is:",
    "options": [
      "\u03c1 g w H^2",
      "(1/2) \u03c1 g w H^2",
      "2 \u03c1 g w H^2",
      "4 \u03c1 g w H^2"
    ],
    "correctAnswer": 1,
    "explanation": "Average hydrostatic pressure P_avg = (1/2) \u03c1 g H.\nArea of dam surface A = w H.\nTotal force F = P_avg * A = (1/2) \u03c1 g w H^2.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex05",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Average Pressure on Container Wall",
    "difficulty": "Easy",
    "questionText": "A tank is filled with a liquid of density \u03c1 up to height H. The average pressure exerted on the vertical walls of the container is:",
    "options": [
      "\u03c1 g H",
      "(1/2) \u03c1 g H",
      "(1/4) \u03c1 g H",
      "(1/8) \u03c1 g H"
    ],
    "correctAnswer": 1,
    "explanation": "Pressure varies linearly from 0 at the top surface to \u03c1 g H at the bottom. Average pressure P_avg = (0 + \u03c1 g H) / 2 = (1/2) \u03c1 g H.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex06",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Pascal's Law Statement",
    "difficulty": "Easy",
    "questionText": "An increase in pressure at any point of an enclosed incompressible fluid in equilibrium is transmitted undiminished to every other point of the fluid and the container walls. This principle is:",
    "options": [
      "Archimedes' Principle",
      "Pascal's Law",
      "Bernoulli's Theorem",
      "Stokes' Law"
    ],
    "correctAnswer": 1,
    "explanation": "Pascal's law states that pressure applied to an enclosed static fluid is transmitted undiminished throughout the fluid and to the walls of the vessel.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex07",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Maximum Depth of Drinking Water with Straw",
    "difficulty": "Medium",
    "questionText": "By sucking through a straw, a boy reduces the pressure in his lungs to 750 mm of Hg (density of Hg = 13.6 g/cm^3). If atmospheric pressure is 760 mm of Hg, he can drink water from a maximum depth of:",
    "options": [
      "13.6 cm",
      "1.36 cm",
      "0.136 cm",
      "10 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Pressure difference \u0394P = 760 - 750 = 10 mm Hg = 1 cm Hg = 13.6 cm of water column.\nTherefore, the water can be drawn up from a maximum depth of 13.6 cm.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex08",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "U-tube Manometer Mercury Level Rise",
    "difficulty": "Medium",
    "questionText": "An open U-tube contains mercury. When 13.6 cm of water is poured into one arm of the tube, the mercury rises in the other arm from its initial level by (relative density of Hg = 13.6):",
    "options": [
      "1 cm",
      "0.5 cm",
      "10 cm",
      "5 cm"
    ],
    "correctAnswer": 1,
    "explanation": "Equating pressures: h_water * \u03c1_water = h_Hg_total * \u03c1_Hg => 13.6 * 1 = h_Hg_total * 13.6 => h_Hg_total = 1 cm.\nSince mercury drops by x in one arm and rises by x in the other, total difference 2x = 1 cm => x = 0.5 cm rise from initial level.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex09",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Apparent Weight of Floating Body",
    "difficulty": "Easy",
    "questionText": "An object of mass m floats in static equilibrium in a liquid of density \u03c3. The apparent weight of the floating object in the liquid is:",
    "options": [
      "mg",
      "mg (1 - \u03c3/\u03c1)",
      "mg (1 - \u03c1/\u03c3)",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "According to Archimedes' principle, for any freely floating body in static equilibrium, the upward buoyant force equals the true weight mg. Hence, apparent weight = mg - F_buoyant = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex10",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Cube Balanced at Liquid Interface",
    "difficulty": "Medium",
    "questionText": "A cube of edge length 10 cm is balanced at the interface of two immiscible liquids A and B. If liquid A (specific gravity = 0.6) submerges the lower 4 cm and liquid B (specific gravity = 0.4) submerges the upper 6 cm, the mass of the cube is:",
    "options": [
      "240 g",
      "360 g",
      "480 g",
      "540 g"
    ],
    "correctAnswer": 2,
    "explanation": "Cross-sectional area A = 10 \u00d7 10 = 100 cm^2.\nMass = m_A + m_B = (100 * 4 * 0.6) + (100 * 6 * 0.4) = 240 g + 240 g = 480 g.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex11",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Water Level Change with Sinking Iron",
    "difficulty": "Medium",
    "questionText": "A boat carrying pieces of iron is floating in a pond. If the iron pieces are thrown overboard into the water (where they sink to the bottom), the water level of the pond will:",
    "options": [
      "Increase",
      "Decrease",
      "Remain unchanged",
      "First increase then decrease"
    ],
    "correctAnswer": 1,
    "explanation": "When floating in the boat, the iron displaces a volume of water equal to its weight: V_displaced = (m / \u03c1_water). When submerged, it displaces water equal only to its own volume: V_displaced = (m / \u03c1_iron). Since \u03c1_iron > \u03c1_water, the volume of water displaced decreases, causing the water level to fall.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex12",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mixture of Equal Masses Density",
    "difficulty": "Easy",
    "questionText": "When two liquids of equal mass but different densities \u03c11 and \u03c12 are mixed together thoroughly, the density of the mixture is:",
    "options": [
      "\u03c11 + \u03c12",
      "(\u03c11 + \u03c12) / 2",
      "(2 \u03c11 \u03c12) / (\u03c11 + \u03c12)",
      "2 \u03c11 + 2 \u03c12"
    ],
    "correctAnswer": 2,
    "explanation": "Total mass M = 2m. Total volume V = (m / \u03c11) + (m / \u03c12) = m (\u03c11 + \u03c12) / (\u03c11 \u03c12).\nDensity \u03c1_mix = M / V = (2m) / (m (\u03c11 + \u03c12) / (\u03c11 \u03c12)) = (2 \u03c11 \u03c12) / (\u03c11 + \u03c12).",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex13",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mixture of Equal Volumes Density",
    "difficulty": "Easy",
    "questionText": "When two liquids of equal volume but different densities \u03c11 and \u03c12 are mixed together, the density of the resulting mixture is:",
    "options": [
      "(\u03c11 + \u03c12) / 2",
      "\u03c11 + \u03c12",
      "(2 \u03c11 \u03c12) / (\u03c11 + \u03c12)",
      "2(\u03c11 + \u03c12)"
    ],
    "correctAnswer": 0,
    "explanation": "Total volume = 2V. Total mass = V \u03c11 + V \u03c12 = V(\u03c11 + \u03c12).\nDensity \u03c1_mix = (V(\u03c11 + \u03c12)) / (2V) = (\u03c11 + \u03c12) / 2.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex14",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Gravity Dependent Fluid Phenomenon",
    "difficulty": "Easy",
    "questionText": "In a hypothetical environment where gravity is absent (g = 0), which of the following fluid phenomena ceases to exist?",
    "options": [
      "Viscosity",
      "Surface tension",
      "Hydrostatic pressure difference & Archimedes' upthrust",
      "Intermolecular cohesion"
    ],
    "correctAnswer": 2,
    "explanation": "Buoyant force F_b = V \u03c1 g and hydrostatic pressure gradient dP/dh = \u03c1 g both require a non-zero gravitational field g.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex15",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Floating Iceberg Percentage Outside",
    "difficulty": "Easy",
    "questionText": "The density of ice is 0.9 g/cm^3 and that of pure water is 1.0 g/cm^3. What percentage of the total volume of an iceberg floats outside the water?",
    "options": [
      "10%",
      "45%",
      "75%",
      "90%"
    ],
    "correctAnswer": 0,
    "explanation": "Fraction submerged = \u03c1_ice / \u03c1_water = 0.9 / 1.0 = 90%.\nFraction floating outside = 100% - 90% = 10%.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex16",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Specific Gravity from Spring Balance Readings",
    "difficulty": "Easy",
    "questionText": "The reading of a spring balance when a block is suspended in air is 60 N. When the block is completely submerged in water, the reading becomes 40 N. The specific gravity of the block is:",
    "options": [
      "3",
      "2",
      "6",
      "1.5"
    ],
    "correctAnswer": 0,
    "explanation": "Loss of weight in water = 60 - 40 = 20 N.\nSpecific gravity = (Weight in air) / (Loss of weight in water) = 60 / 20 = 3.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex17",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Reynold's Number Calculation",
    "difficulty": "Medium",
    "questionText": "A liquid of density 10^3 kg/m^3 and coefficient of viscosity 8 \u00d7 10^-2 decapoise (Pa s) flows in a cylindrical tube of radius 2 cm with a speed of 2 m/s. The Reynold's number of the flow is:",
    "options": [
      "500",
      "1000",
      "1500",
      "2000"
    ],
    "correctAnswer": 1,
    "explanation": "Diameter D = 2 * 2 cm = 4 cm = 0.04 m.\nRe = (\u03c1 v D) / \u03b7 = (1000 * 2 * 0.04) / (0.08) = 80 / 0.08 = 1000.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex18",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Velocity Head Calculation",
    "difficulty": "Easy",
    "questionText": "If the velocity of flow of water in a pipe is 4 m/s, the velocity head is (take g = 10 m/s^2):",
    "options": [
      "0.2 m",
      "0.4 m",
      "0.6 m",
      "0.8 m"
    ],
    "correctAnswer": 3,
    "explanation": "Velocity head h_v = v^2 / (2g) = (4)^2 / (2 * 10) = 16 / 20 = 0.8 m.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex19",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Kinetic Energy Density of Water",
    "difficulty": "Easy",
    "questionText": "Water is flowing in a horizontal pipe with a speed of 2 m/s. The kinetic energy per unit volume of water is (density = 1000 kg/m^3):",
    "options": [
      "500 J/m^3",
      "1000 J/m^3",
      "1500 J/m^3",
      "2000 J/m^3"
    ],
    "correctAnswer": 3,
    "explanation": "KE per unit volume = (1/2) \u03c1 v^2 = (1/2) * (1000) * (2)^2 = 2000 J/m^3.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex20",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Work Done in Expanding Soap Bubble",
    "difficulty": "Medium",
    "questionText": "The work done in increasing the radius of a soap bubble from r/2 to 2r in a soap solution of surface tension T is:",
    "options": [
      "3\u03c0 r^2 T",
      "30\u03c0 r^2 T",
      "9\u03c0 r^2 T",
      "12\u03c0 r^2 T"
    ],
    "correctAnswer": 1,
    "explanation": "A soap bubble has 2 free surfaces: A = 2 \u00d7 (4\u03c0 R^2) = 8\u03c0 R^2.\nInitial area A1 = 8\u03c0 (r/2)^2 = 2\u03c0 r^2.\nFinal area A2 = 8\u03c0 (2r)^2 = 32\u03c0 r^2.\nWork W = T \u0394A = T (32\u03c0 r^2 - 2\u03c0 r^2) = 30\u03c0 r^2 T.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex21",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Two Connected Soap Bubbles Behavior",
    "difficulty": "Easy",
    "questionText": "Two soap bubbles A (smaller radius r_A) and B (larger radius r_B) are connected by a hollow tube with a valve. When the valve is opened, what happens?",
    "options": [
      "Size of bubble A increases",
      "Size of bubble B decreases",
      "Both bubbles attain the same size",
      "Size of bubble A decreases and size of bubble B increases"
    ],
    "correctAnswer": 3,
    "explanation": "Excess pressure inside a bubble is \u0394P = 4T / r. Since r_A < r_B, the internal pressure in smaller bubble A is greater than in bubble B (P_A > P_B). Air flows from bubble A into bubble B, so bubble A shrinks and bubble B expands.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex22",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Double Bubble Interface Radius of Curvature",
    "difficulty": "Medium",
    "questionText": "Two soap bubbles of radii 2 cm and 4 cm coalesce in air to form a double bubble with a common spherical interface. The radius of curvature of the common interface is:",
    "options": [
      "2\u221a5 cm",
      "2 cm",
      "4 cm",
      "2\u221a3 cm"
    ],
    "correctAnswer": 2,
    "explanation": "1 / r = 1 / r1 - 1 / r2 = 1/2 - 1/4 = 1/4 => r = 4 cm.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex23",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Force on Square Wire Frame from Surface Tension",
    "difficulty": "Medium",
    "questionText": "A square wire frame of side l is floating horizontally on the surface of a liquid of surface tension T. The minimum force required to pull the frame off the liquid surface is:",
    "options": [
      "T l",
      "2 T l",
      "4 T l",
      "8 T l"
    ],
    "correctAnswer": 3,
    "explanation": "A liquid film pulls on both the inner and outer perimeter of the square frame.\nTotal length of contact L = 4l (outer) + 4l (inner) = 8l.\nForce F = T * L = 8 T l.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex24",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Energy in Droplet Coalescence",
    "difficulty": "Easy",
    "questionText": "When two small liquid drops coalesce to form a single larger drop, in this process, energy is:",
    "options": [
      "Absorbed",
      "Evolved (released as heat)",
      "Either absorbed or evolved",
      "Neither absorbed nor evolved"
    ],
    "correctAnswer": 1,
    "explanation": "When drops coalesce, the total surface area decreases (A_final < A_initial). The decrease in surface energy is released as heat energy (energy is evolved).",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch10-ex25",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Surface Tension at Critical Temperature",
    "difficulty": "Easy",
    "questionText": "At the critical temperature of a substance, the surface tension of the liquid becomes:",
    "options": [
      "Maximum",
      "Unchanged",
      "Zero",
      "Infinite"
    ],
    "correctAnswer": 2,
    "explanation": "At the critical temperature, the meniscus between liquid and vapor phases disappears and intermolecular cohesion drops to zero; hence, surface tension becomes zero.",
    "tags": [
      "NCERT NEET Physics",
      "Mechanical Properties of Fluids",
      "Class 11"
    ]
  }
];

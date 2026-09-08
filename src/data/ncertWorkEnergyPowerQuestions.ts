import { Question } from '../types';

export const NCERT_WORK_ENERGY_POWER_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch06-ex01",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done by Constant Force",
    "difficulty": "Easy",
    "questionText": "A particle moves from point P(1, 2, 3) to point Q(2, 1, 4) under the action of a constant force vector F = (2i + j + k) N. The net work done by the force is:",
    "options": [
      "2 J",
      "4 J",
      "16 J",
      "8 J"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement vector d = r_Q - r_P = (2 - 1)i + (1 - 2)j + (4 - 3)k = (i - j + k) m.\nWork done W = F . d = (2)(1) + (1)(-1) + (1)(1) = 2 - 1 + 1 = 2 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex02",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Scalar (Dot) Product of Vectors",
    "difficulty": "Easy",
    "questionText": "Which of the following vectors is strictly perpendicular to the vector A = 2i + 3j + 4k?",
    "options": [
      "i + j + k",
      "4i + 3j - 2k",
      "i - 3j + k",
      "i + 2j - 2k"
    ],
    "correctAnswer": 3,
    "explanation": "Two vectors are perpendicular if their dot product equals zero.\nFor option (4): A . B = (2)(1) + (3)(2) + (4)(-2) = 2 + 6 - 8 = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex03",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done against Opposing Force",
    "difficulty": "Easy",
    "questionText": "A block of mass 2 kg is placed on a smooth horizontal surface. Two forces F1 = 20 N and F2 = 5 N start acting on the block in opposite directions. If the block gets displaced by 5 m in the direction of the net force, then the work done by force F2 is:",
    "options": [
      "-75 J",
      "75 J",
      "-25 J",
      "25 J"
    ],
    "correctAnswer": 2,
    "explanation": "Net force is in the direction of F1 (since 20 N > 5 N), so displacement d = 5 m is opposite to F2.\nWork done by F2 = F2 . d = F2 * d * cos(180\u00b0) = 5 * 5 * (-1) = -25 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex04",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done from Force-Displacement Graph",
    "difficulty": "Medium",
    "questionText": "A position-dependent force F acts on a particle as shown in the force-position curve. From x = 0 to 3 m the force increases to +10 N and returns to 0 N, and from x = 3 to 5 m the force is negative reaching -10 N. The total work done on the particle for displacement from 0 to 5 m is:",
    "options": [
      "35 J",
      "25 J",
      "15 J",
      "5 J"
    ],
    "correctAnswer": 3,
    "explanation": "Work done is area under F-x graph.\nPositive area (0 to 3 m) = (1/2) * 3 * 10 = +15 J.\nNegative area (3 to 5 m) = (1/2) * 2 * (-10) = -10 J.\nTotal Work = 15 - 10 = 5 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex05",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done in Accelerated Frame",
    "difficulty": "Medium",
    "questionText": "A man of mass 50 kg is standing in an elevator. If the elevator is moving upwards with an acceleration a = g/3, then the work done by the normal reaction of the elevator floor on the man when the elevator moves up by a distance of 12 m is (take g = 10 m/s^2):",
    "options": [
      "2000 J",
      "4000 J",
      "6000 J",
      "8000 J"
    ],
    "correctAnswer": 3,
    "explanation": "Effective normal reaction N = m(g + a) = 50 * (10 + 10/3) = 50 * (40/3) = 2000/3 N.\nWork done by normal reaction W = N * d = (2000/3) * 12 = 8000 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex06",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done by Variable Force",
    "difficulty": "Easy",
    "questionText": "A particle moves along the x-axis under the action of a position-dependent force F = (5x^2 - 2x) N. The work done by the force on the particle when it moves from origin (x = 0) to x = 3 m is:",
    "options": [
      "45 J",
      "36 J",
      "32 J",
      "42 J"
    ],
    "correctAnswer": 1,
    "explanation": "W = \u222b[0 to 3] (5x^2 - 2x) dx = [5x^3/3 - x^2] from 0 to 3 = 5(27)/3 - (3)^2 = 45 - 9 = 36 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex07",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Conditions for Maximum & Minimum Work",
    "difficulty": "Easy",
    "questionText": "The angles between the applied force vector and the displacement vector for maximum and minimum work done respectively are:",
    "options": [
      "90\u00b0 and 0\u00b0",
      "0\u00b0 and 90\u00b0",
      "0\u00b0 and 180\u00b0",
      "180\u00b0 and 0\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "W = F d cos \u03b8. For maximum work, cos \u03b8 = +1 => \u03b8 = 0\u00b0. For minimum (most negative) work, cos \u03b8 = -1 => \u03b8 = 180\u00b0.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex08",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Constrained Motion Work",
    "difficulty": "Easy",
    "questionText": "A body is constrained to move along the z-axis under the action of a constant force F = (-i + 2j + 3k) N. The work done by this force in moving the body a distance 4 m along the z-axis is:",
    "options": [
      "12 J",
      "4 J",
      "2 J",
      "6 J"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement vector d = 4k m.\nWork done W = F . d = (-i + 2j + 3k) . (4k) = 3 * 4 = 12 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex09",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done in Pumping Water",
    "difficulty": "Medium",
    "questionText": "A cubical vessel of height 1 m is completely filled with water (density = 1000 kg/m^3, g = 10 m/s^2). The minimum work done in taking all the water out from the vessel over the top rim is:",
    "options": [
      "5000 J",
      "10000 J",
      "5 J",
      "10 J"
    ],
    "correctAnswer": 0,
    "explanation": "Volume V = 1 m^3 => Mass of water M = 1000 kg.\nThe center of mass of the water is at h/2 = 0.5 m below the top rim.\nMinimum work done = M g (h/2) = 1000 * 10 * 0.5 = 5000 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex10",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done with Variable Mass Rope",
    "difficulty": "Medium",
    "questionText": "A man pulls a bucket full of water from an h-metre deep well. If the mass of the uniform rope is m and the mass of the bucket full of water is M, the total work done by the man is:",
    "options": [
      "(M/2 + m)gh",
      "((M + m)/2)gh",
      "(M + m/2)gh",
      "(M + m)gh"
    ],
    "correctAnswer": 2,
    "explanation": "Work to lift bucket = Mgh.\nCenter of mass of uniform rope is raised by h/2, so work to lift rope = m g (h/2).\nTotal work = (M + m/2)gh.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex11",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Potential Energy of Springs",
    "difficulty": "Easy",
    "questionText": "The force constants K1 and K2 of two springs are in the ratio 5 : 4. Both are stretched by the same elongation. If the elastic potential energy stored in the first spring is 25 J, then the potential energy stored in the second spring is:",
    "options": [
      "25 J",
      "16 J",
      "100 J",
      "20 J"
    ],
    "correctAnswer": 3,
    "explanation": "U = (1/2) K x^2. Since elongation x is identical, U1 / U2 = K1 / K2 = 5 / 4.\nU2 = U1 * (4/5) = 25 * (4/5) = 20 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex12",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Spring Elongation under Equal Force",
    "difficulty": "Easy",
    "questionText": "Two springs have their force constants in the ratio of 3 : 4. Both the springs are stretched by applying equal pulling force F. If the elongation in the first spring is x, then the elongation in the second spring is:",
    "options": [
      "3x",
      "4x",
      "(4/3)x",
      "(3/4)x"
    ],
    "correctAnswer": 3,
    "explanation": "F = K1 x1 = K2 x2 => x2 = (K1 / K2) x1 = (3/4) x.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex13",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work-Energy Principle on Incline",
    "difficulty": "Medium",
    "questionText": "A block of mass m is released from the top of a smooth inclined plane of length x and inclination \u03b8. The horizontal surface at the bottom is rough. If the block comes to rest after moving a distance d on the horizontal surface, the coefficient of kinetic friction \u03bc between the block and the surface is:",
    "options": [
      "(x sin \u03b8)/(2d)",
      "(x cos \u03b8)/(2d)",
      "(x sin \u03b8)/d",
      "(x cos \u03b8)/d"
    ],
    "correctAnswer": 2,
    "explanation": "Vertical height descended h = x sin \u03b8 => Gain in KE at bottom = mgh = mgx sin \u03b8.\nWork done against friction on horizontal track = \u03bc N d = \u03bc mg d.\nEquating energy: mgx sin \u03b8 = \u03bc mg d => \u03bc = (x sin \u03b8) / d.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex14",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work-Energy Theorem & Kinematics",
    "difficulty": "Medium",
    "questionText": "A particle of mass 3 kg moves along the x-axis and its position at time t is given by the relation x = (2t^2 + 5) m. The work done by all forces acting on it in the time interval t = 0 to t = 3 s is:",
    "options": [
      "144 J",
      "72 J",
      "108 J",
      "216 J"
    ],
    "correctAnswer": 3,
    "explanation": "v(t) = dx/dt = 4t.\nAt t = 0: v_i = 0.\nAt t = 3 s: v_f = 4(3) = 12 m/s.\nBy Work-Energy Theorem: W = \u0394KE = (1/2) m (v_f^2 - v_i^2) = (1/2)(3)(144 - 0) = 216 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex15",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Instantaneous Power Calculation",
    "difficulty": "Easy",
    "questionText": "A force F = (2i + j + k) N acts on a particle moving with constant velocity v = (i + 2j + k) m/s. The instantaneous power delivered by the force is:",
    "options": [
      "4 W",
      "5 W",
      "6 W",
      "8 W"
    ],
    "correctAnswer": 1,
    "explanation": "Power P = F . v = (2)(1) + (1)(2) + (1)(1) = 2 + 2 + 1 = 5 W.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex16",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Potential Energy & Equilibrium",
    "difficulty": "Easy",
    "questionText": "The potential energy of a particle at position x is given by U = x^2 - 5x. Which of the following is the equilibrium position of the particle?",
    "options": [
      "x = 0",
      "x = 5",
      "x = 2.5",
      "x = 7.5"
    ],
    "correctAnswer": 2,
    "explanation": "At equilibrium, F = -dU/dx = 0 => -(2x - 5) = 0 => 2x = 5 => x = 2.5 m.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex17",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Power on Inclined Plane",
    "difficulty": "Medium",
    "questionText": "A block of mass 4 kg is pulled along a smooth inclined plane of inclination 30\u00b0 with a constant velocity of 3 m/s. The power delivered by the pulling force parallel to the incline is (take g = 10 m/s^2):",
    "options": [
      "40 W",
      "20 W",
      "60 W",
      "30 W"
    ],
    "correctAnswer": 2,
    "explanation": "Since velocity is constant, applied force F = mg sin 30\u00b0 = 4 * 10 * 0.5 = 20 N.\nPower delivered P = F * v = 20 * 3 = 60 W.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex18",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Vertical Circular Motion Pacing",
    "difficulty": "Medium",
    "questionText": "A stone is tied to one end of a light inextensible string of length l and whirled in a vertical circle. If the speed of the stone at the highest point is v (where v > \u221a(gl)), then its speed at the lowest point is:",
    "options": [
      "\u221a(4gl)",
      "\u221a(v^2 + 2gl)",
      "\u221a(v^2 + gl)",
      "\u221a(v^2 + 4gl)"
    ],
    "correctAnswer": 3,
    "explanation": "By conservation of mechanical energy between lowest point (L) and highest point (H):\n(1/2) m v_L^2 = (1/2) m v_H^2 + mg(2l) => v_L^2 = v^2 + 4gl => v_L = \u221a(v^2 + 4gl).",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex19",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Hydroelectric Turbine Power",
    "difficulty": "Easy",
    "questionText": "Water from a stream is falling on the blades of a turbine at a rate of 100 kg/s. If the height of the fall is 100 m, the power delivered to the turbine is (g = 10 m/s^2):",
    "options": [
      "100 kW",
      "0.1 kW",
      "10 kW",
      "1 kW"
    ],
    "correctAnswer": 0,
    "explanation": "Power P = (dm/dt) * g * h = 100 * 10 * 100 = 100,000 W = 100 kW.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex20",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Constant Power Kinematics",
    "difficulty": "Medium",
    "questionText": "A body is being moved from rest along a straight line by a machine delivering constant power. The distance s covered by the body in time t is directly proportional to:",
    "options": [
      "\u221at",
      "t^(3/2)",
      "t^(3/4)",
      "t^2"
    ],
    "correctAnswer": 1,
    "explanation": "P = F v = m v (dv/dt) => v dv = (P/m) dt => v^2 = (2P/m) t => v \u221d t^(1/2).\nDistance s = \u222b v dt \u221d \u222b t^(1/2) dt \u221d t^(3/2).",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex21",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Elastic Collision Maximum Energy Transfer",
    "difficulty": "Easy",
    "questionText": "In a 1D perfectly elastic collision between two masses m1 and m2, the energy transferred from the moving mass to the stationary mass is maximum when:",
    "options": [
      "m1 = 2m2",
      "m1 << m2",
      "m1 >> m2",
      "m1 = m2"
    ],
    "correctAnswer": 3,
    "explanation": "Fractional energy transferred = 4 m1 m2 / (m1 + m2)^2. This value reaches its maximum of 1 (100% transfer) when m1 = m2.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex22",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Elastic Collision Impulse",
    "difficulty": "Hard",
    "questionText": "Two identical balls each of mass 4 kg are moving towards each other with speeds 2 m/s and 3 m/s respectively. They undergo a head-on perfectly elastic collision. The magnitude of impulse imparted by one ball on the other is:",
    "options": [
      "12 Ns",
      "8 Ns",
      "20 Ns",
      "40 Ns"
    ],
    "correctAnswer": 2,
    "explanation": "For identical masses in 1D elastic collision, velocities interchange after collision.\nBall 1 initial velocity u1 = +2 m/s, final velocity v1 = -3 m/s.\nImpulse J = |m (v1 - u1)| = 4 * |-3 - 2| = 4 * 5 = 20 Ns.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex23",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "1D Elastic Collision Velocity Ratio",
    "difficulty": "Hard",
    "questionText": "A ball of mass 4 kg moving on a smooth horizontal surface makes an elastic collision with another ball of mass m at rest in the line of motion of the first ball. If after collision the first ball moves in the same direction with one fourth of its initial velocity, then the mass m of the second ball is:",
    "options": [
      "4 kg",
      "4.4 kg",
      "2.4 kg",
      "2 kg"
    ],
    "correctAnswer": 2,
    "explanation": "For 1D elastic collision with target at rest: v1 = ((m1 - m2)/(m1 + m2)) * u1.\nGiven v1 = u1 / 4 => (4 - m) / (4 + m) = 1/4 => 16 - 4m = 4 + m => 5m = 12 => m = 2.4 kg.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex24",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Collision with Massive Body",
    "difficulty": "Easy",
    "questionText": "A heavy vehicle moving with velocity 15 m/s strikes an object of very small mass at rest head-on elastically. The velocity of the small object immediately after the collision is:",
    "options": [
      "15 m/s",
      "25 m/s",
      "20 m/s",
      "30 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "When M >> m and u2 = 0, the rebound velocity of the lighter object is v2 = 2u1 - u2 = 2(15) - 0 = 30 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex25",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "2D Oblique Elastic Collision",
    "difficulty": "Easy",
    "questionText": "Two balls of equal masses m each undergo an oblique collision where one ball was initially at rest. If the collision is perfectly elastic, the angle between their velocity vectors after collision is:",
    "options": [
      "\u03c0/4",
      "\u03c0/3",
      "\u03c0/6",
      "\u03c0/2"
    ],
    "correctAnswer": 3,
    "explanation": "For two identical masses undergoing an elastic oblique collision with one initially stationary, the final velocities are always mutually perpendicular (\u03b81 + \u03b82 = 90\u00b0 = \u03c0/2).",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex26",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Rebound Velocity from Moving Floor",
    "difficulty": "Medium",
    "questionText": "A ball falls from a height such that it strikes the floor of a lift at 10 m/s downward. If the lift is moving upward with a velocity of 1 m/s, the velocity with which the ball rebounds after an elastic collision is:",
    "options": [
      "11 m/s",
      "12 m/s",
      "13 m/s",
      "9 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Velocity of approach = v_ball + v_lift = 10 + 1 = 11 m/s.\nFor elastic collision (e = 1), velocity of separation = 11 m/s.\nRebound velocity relative to ground = v_sep + v_lift = 11 + 1 = 12 m/s upward.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex27",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Spring Compression Energy Conservation",
    "difficulty": "Medium",
    "questionText": "A block of mass 10 g slides on a smooth horizontal surface with a speed of 20 m/s towards a horizontal spring of spring constant 100 N/m. The maximum compression produced in the spring is:",
    "options": [
      "2 m",
      "0.2 m",
      "20 m",
      "4/3 m"
    ],
    "correctAnswer": 1,
    "explanation": "m = 10 g = 0.01 kg, v = 20 m/s, k = 100 N/m.\n(1/2) k x^2 = (1/2) m v^2 => 100 x^2 = 0.01 * (20)^2 = 4 => x^2 = 0.04 => x = 0.2 m.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex28",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Head-on Elastic Collision of Dissimilar Masses",
    "difficulty": "Medium",
    "questionText": "Two steel balls A and B of mass 10 kg and 10 g roll towards each other with speeds 5 m/s and 1 m/s respectively on a smooth floor. After perfectly elastic collision, with what speed does ball B move?",
    "options": [
      "8 m/s",
      "10 m/s",
      "11 m/s",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "Since m_A (10 kg) >> m_B (0.01 kg), ball A continues with speed ~5 m/s.\nv_B' = 2 v_A - v_B = 2(5) - (-1) = 10 + 1 = 11 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex29",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Multiple Elastic Ball Collisions",
    "difficulty": "Easy",
    "questionText": "Two ivory balls 1 and 2 are placed together at rest. A third identical ball 3 moving with velocity u in line with the first two balls collides head-on elastically. Which of the following describes the outcome?",
    "options": [
      "Third ball comes to rest with second ball while first ball moves with speed u",
      "Third ball comes to rest and other two move together with speed u/2",
      "All three balls move together with speed u/3",
      "All three balls move in a manner making 120\u00b0 angles to each other"
    ],
    "correctAnswer": 0,
    "explanation": "Ball 3 collides elastically with ball 2, transferring its entire momentum to 2 and coming to rest. Ball 2 instantly collides elastically with ball 1, transferring its momentum to 1 and coming to rest. Thus, balls 3 and 2 remain at rest and ball 1 moves with speed u.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex30",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Inelastic Rebound Height",
    "difficulty": "Easy",
    "questionText": "A ball is dropped from height h on a horizontal floor. If it loses 60% of its mechanical energy on hitting the floor, the height up to which it will rise after the first rebound is:",
    "options": [
      "h/5",
      "(2/5)h",
      "(3/5)h",
      "(4/5)h"
    ],
    "correctAnswer": 1,
    "explanation": "Remaining kinetic energy after rebound E' = E - 0.60 E = 0.40 E = (2/5) E.\nSince height h' is directly proportional to energy, h' = (2/5) h.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex31",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Stopping Time with Constant Power",
    "difficulty": "Medium",
    "questionText": "Two cars of the same mass are moving with velocities v1 and v2 respectively. If they are brought to rest by supplying the same constant braking power in times t1 and t2 respectively, then the ratio v1 / v2 is:",
    "options": [
      "t1 / t2",
      "(t1 / t2)^2",
      "(m t1) / t2",
      "\u221a(t1 / t2)"
    ],
    "correctAnswer": 3,
    "explanation": "Braking energy P * t = (1/2) m v^2 => v = \u221a(2Pt/m) => v \u221d \u221at.\nTherefore, v1 / v2 = \u221a(t1 / t2).",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex32",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Repeated Bouncing Impulse",
    "difficulty": "Hard",
    "questionText": "A ball of mass m is dropped from height h on a horizontal floor and collides with it with speed u. If the coefficient of restitution is e, the impulse imparted to the ball by the floor on its second bounce is:",
    "options": [
      "meu",
      "meu(e + 1)",
      "me^2 u(e + 1)",
      "me^2 u(e - 1)"
    ],
    "correctAnswer": 1,
    "explanation": "Speed before 2nd collision = e u (downward).\nSpeed after 2nd collision = e(e u) = e^2 u (upward).\nImpulse J2 = m(v_after - v_before) = m(e^2 u - (-e u)) = meu(e + 1).",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex33",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "1D Inelastic Collision",
    "difficulty": "Easy",
    "questionText": "Two identical balls moving in opposite directions with speeds 20 m/s and 25 m/s undergo a head-on perfectly inelastic collision. The speed of the combined mass after collision is:",
    "options": [
      "20 m/s",
      "22.5 m/s",
      "25 m/s",
      "2.5 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "By conservation of linear momentum: m(25) - m(20) = (2m) V_f => 5m = 2m V_f => V_f = 2.5 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex34",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Kinetic Energy Loss in Inelastic Collision",
    "difficulty": "Medium",
    "questionText": "A ball of mass 5 kg moving with speed 8 m/s collides head-on with another stationary ball of mass 15 kg. If the collision is perfectly inelastic, the loss in kinetic energy of the system is:",
    "options": [
      "160 J",
      "80 J",
      "40 J",
      "120 J"
    ],
    "correctAnswer": 3,
    "explanation": "\u0394K = (1/2) * (m1 m2 / (m1 + m2)) * u1^2 = (1/2) * (5 * 15 / 20) * (8)^2 = (1/2) * 3.75 * 64 = 120 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex35",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Fraction of Energy Lost in Bounce",
    "difficulty": "Easy",
    "questionText": "A ball dropped from height h on a horizontal floor rebounds up to height (3/4)h after hitting the floor. The fraction of energy of the ball lost in the impact is:",
    "options": [
      "3/4",
      "1/2",
      "3/5",
      "1/4"
    ],
    "correctAnswer": 3,
    "explanation": "Fractional energy loss = (mgh - mg(3h/4)) / (mgh) = 1 - 3/4 = 1/4.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex36",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "2D Inelastic Collision Speed",
    "difficulty": "Medium",
    "questionText": "Two identical balls each moving with speed v at right angles to each other collide perfectly inelastically. Their speed after the collision is:",
    "options": [
      "v",
      "\u221a2 v",
      "v/2",
      "v / \u221a2"
    ],
    "correctAnswer": 3,
    "explanation": "Initial momentum vector p = mvi + mvj => |p| = \u221a2 mv.\nSince the collision is perfectly inelastic, total mass = 2m.\nFinal velocity V = |p| / (2m) = (\u221a2 mv) / (2m) = v / \u221a2.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex37",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Coefficient of Restitution Calculation",
    "difficulty": "Easy",
    "questionText": "A ball is dropped on a horizontal surface from height h. If it rebounds up to height h/2 after the first collision, the coefficient of restitution between the ball and surface is:",
    "options": [
      "1 / \u221a2",
      "1/2",
      "1/4",
      "1 / (2\u221a2)"
    ],
    "correctAnswer": 0,
    "explanation": "Rebound height h' = e^2 h => h/2 = e^2 h => e^2 = 1/2 => e = 1 / \u221a2.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex38",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done in Pulling Hanging Chain",
    "difficulty": "Medium",
    "questionText": "A uniform chain of mass 2 kg and length 4 m is placed on a smooth table with (1/4)th of its length hanging over the edge. The work done in pulling the hanging portion back onto the table is (g = 10 m/s^2):",
    "options": [
      "5 J",
      "2.5 J",
      "2 J",
      "4 J"
    ],
    "correctAnswer": 1,
    "explanation": "Hanging length l' = 4/4 = 1 m. Hanging mass m' = 2/4 = 0.5 kg.\nThe center of mass of the hanging part is at a depth of l'/2 = 0.5 m below table edge.\nWork done W = m' g (l'/2) = 0.5 * 10 * 0.5 = 2.5 J.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex39",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Kinetic Energy Percentage Change",
    "difficulty": "Easy",
    "questionText": "If the linear momentum of a body is decreased by 50%, its kinetic energy will decrease by:",
    "options": [
      "25%",
      "50%",
      "75%",
      "125%"
    ],
    "correctAnswer": 2,
    "explanation": "KE = p^2 / 2m. If p' = 0.5 p, then KE' = (0.5)^2 KE = 0.25 KE.\nPercentage decrease = ((KE - 0.25 KE)/KE) * 100% = 75%.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch06-ex40",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Conservative Force from Potential Field",
    "difficulty": "Easy",
    "questionText": "In a conservative force field, the potential energy U as a function of position x is given by U = x^2. The corresponding conservative force F is given by:",
    "options": [
      "x",
      "2x",
      "-x",
      "-2x"
    ],
    "correctAnswer": 3,
    "explanation": "Conservative force F = -dU/dx = -d(x^2)/dx = -2x.",
    "tags": [
      "NCERT NEET Physics",
      "Work, Energy and Power",
      "Class 11"
    ]
  }
];

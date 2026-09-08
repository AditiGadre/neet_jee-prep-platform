import { Question } from '../types';

export const NCERT_OSCILLATIONS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch14-ex01",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Identification of Simple Harmonic Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following mathematical functions of time does NOT represent simple harmonic motion (SHM)?",
    "options": [
      "y = A cos(\u03c9t)",
      "y = A sin(\u03c9t)",
      "y = A sin(3\u03c9t)",
      "y = A e^(kt)"
    ],
    "correctAnswer": 3,
    "explanation": "y = A e^(kt) is an exponential non-periodic function that grows indefinitely with time; it is neither periodic nor simple harmonic.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex02",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Amplitude of Displaced SHM",
    "difficulty": "Easy",
    "questionText": "A particle executing SHM along the y-axis has its displacement described by the equation y = 2 + 10 sin(5\u03c0t). The amplitude of the SHM is:",
    "options": [
      "2",
      "12",
      "10",
      "\u221a104"
    ],
    "correctAnswer": 2,
    "explanation": "The term +2 represents a constant displacement of the mean position (y_mean = 2). The maximum deviation from this mean position is the coefficient of the sine term, which is 10.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex03",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Time Period from Acceleration Relation",
    "difficulty": "Easy",
    "questionText": "A particle moves such that its linear acceleration is given by a = -4x. The time period of oscillation of the particle is:",
    "options": [
      "\u03c0 s",
      "2/\u03c0 s",
      "1/\u03c0 s",
      "2\u03c0 s"
    ],
    "correctAnswer": 0,
    "explanation": "Comparing a = -4x with standard SHM equation a = -\u03c9^2 x gives \u03c9^2 = 4 => \u03c9 = 2 rad/s.\nTime period T = 2\u03c0 / \u03c9 = 2\u03c0 / 2 = \u03c0 seconds.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex04",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Phase Difference between Velocity and Acceleration",
    "difficulty": "Easy",
    "questionText": "The phase difference between the instantaneous velocity and acceleration of a particle executing simple harmonic motion is:",
    "options": [
      "Zero",
      "\u03c0/2",
      "\u03c0",
      "2\u03c0"
    ],
    "correctAnswer": 1,
    "explanation": "If x = A sin(\u03c9t), then v = A\u03c9 cos(\u03c9t) = A\u03c9 sin(\u03c9t + \u03c0/2), and a = -A\u03c9^2 sin(\u03c9t) = A\u03c9^2 sin(\u03c9t + \u03c0).\nThe phase lead of acceleration over velocity is \u03c0 - \u03c0/2 = \u03c0/2 radians (90\u00b0).",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex05",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Instantaneous Phase Angle",
    "difficulty": "Easy",
    "questionText": "A particle executing SHM along the y-axis is described by y = 10 sin(\u03c0t / 4). The phase of the particle at t = 2 s is:",
    "options": [
      "\u03c0/4",
      "\u03c0/2",
      "\u03c0/8",
      "\u03c0"
    ],
    "correctAnswer": 1,
    "explanation": "Phase \u03b8(t) = (\u03c0 t) / 4. At t = 2 s, phase \u03b8 = (\u03c0 * 2) / 4 = \u03c0/2 radians.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex06",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Average Velocity in Quarter Period",
    "difficulty": "Medium",
    "questionText": "A particle executes SHM about y = 0 with position y = (7 m) sin(\u03c0t). Its average velocity for the time interval from t = 0 to t = 0.5 s is:",
    "options": [
      "14 m/s",
      "7 m/s",
      "1/7 m/s",
      "28 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "At t = 0: y(0) = 7 sin(0) = 0.\nAt t = 0.5 s: y(0.5) = 7 sin(\u03c0 * 0.5) = 7 sin(\u03c0/2) = 7 m.\nAverage velocity v_avg = (y(0.5) - y(0)) / (0.5 - 0) = 7 / 0.5 = 14 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex07",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Energy Distribution at Half Amplitude",
    "difficulty": "Medium",
    "questionText": "A body executes SHM with amplitude a. The ratio of kinetic energy to potential energy when its displacement from the equilibrium position is half the amplitude (x = a/2) is:",
    "options": [
      "1 : 1",
      "2 : 1",
      "1 : 3",
      "3 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "PE = (1/2) k x^2 = (1/2) k (a/2)^2 = (1/4) * (1/2 k a^2) = (1/4) E.\nKE = E - PE = (3/4) E.\nRatio KE : PE = (3/4) / (1/4) = 3 : 1.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex08",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Time Period from Quadratic Potential Energy",
    "difficulty": "Medium",
    "questionText": "The potential energy of a particle of mass 100 g moving along the x-axis is given by U = 5x(x - 4) J (where x is in metres). The time period of small oscillations is:",
    "options": [
      "0.2\u03c0 s",
      "0.1\u03c0 s",
      "\u03c0 s",
      "(1/\u03c0) s"
    ],
    "correctAnswer": 0,
    "explanation": "U(x) = 5x^2 - 20x => F = -dU/dx = -(10x - 20) = -10(x - 2).\nEffective spring constant k = 10 N/m.\nMass m = 100 g = 0.1 kg.\nTime period T = 2\u03c0 \u221a(m / k) = 2\u03c0 \u221a(0.1 / 10) = 2\u03c0 \u221a(0.01) = 0.2\u03c0 seconds.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex09",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Superposition of Harmonic Functions",
    "difficulty": "Easy",
    "questionText": "A particle executes SHM described by y = 5 sin(3\u03c0t) + 5\u221a3 cos(3\u03c0t) metres. The resultant amplitude of oscillation is:",
    "options": [
      "10 m",
      "5 m",
      "5(1 + \u221a3) m",
      "5\u221a3 m"
    ],
    "correctAnswer": 0,
    "explanation": "Resultant amplitude A = \u221a(A1^2 + A2^2) = \u221a(5^2 + (5\u221a3)^2) = \u221a(25 + 75) = \u221a100 = 10 m.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex10",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Maximum Velocity in SHM",
    "difficulty": "Easy",
    "questionText": "A particle of mass 2 kg executing SHM has an amplitude of 20 cm and a time period of 1 s. Its maximum speed is:",
    "options": [
      "0.314 m/s",
      "0.628 m/s",
      "1.256 m/s",
      "2.512 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "A = 20 cm = 0.2 m, T = 1 s => \u03c9 = 2\u03c0 / T = 2\u03c0 rad/s.\nv_max = A * \u03c9 = 0.2 * 2\u03c0 = 0.4\u03c0 = 0.4 * 3.1416 = 1.256 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex11",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Percentage Increase in Pendulum Length",
    "difficulty": "Easy",
    "questionText": "If the length of a simple pendulum is increased by 69%, the percentage increase in its time period is:",
    "options": [
      "69%",
      "30%",
      "50%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanation": "T \u221d \u221aL. If L' = L + 0.69 L = 1.69 L, then T' = \u221a(1.69) T = 1.30 T.\nPercentage increase = (1.30 - 1) * 100% = 30%.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex12",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Physical Pendulum Ring Pivoted at Rim",
    "difficulty": "Medium",
    "questionText": "A uniform thin ring of radius R and mass m is suspended in a vertical plane from a point on its circumference and allowed to oscillate. Its time period of oscillation is:",
    "options": [
      "2\u03c0 \u221a(2R / g)",
      "\u03c0 \u221a(2R / g)",
      "2\u03c0 \u221a(R / 2g)",
      "\u03c0 \u221a(R / 2g)"
    ],
    "correctAnswer": 0,
    "explanation": "Moment of inertia about the pivot at the rim: I = I_cm + m R^2 = m R^2 + m R^2 = 2 m R^2.\nDistance from pivot to CM: d = R.\nTime period T = 2\u03c0 \u221a(I / (mgd)) = 2\u03c0 \u221a( (2m R^2) / (mg R) ) = 2\u03c0 \u221a(2R / g).",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex13",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Seconds Pendulum on Moon",
    "difficulty": "Easy",
    "questionText": "A seconds pendulum (T = 2 s) is moved to the Moon where the acceleration due to gravity is (1/6)th that of Earth. In order to keep its time period unchanged at 2 s, the length of the pendulum on the Moon must be:",
    "options": [
      "6 times",
      "12 times",
      "(1/6) times",
      "(1/12) times"
    ],
    "correctAnswer": 2,
    "explanation": "T = 2\u03c0 \u221a(L / g) => L \u221d g for constant time period T. Since g_moon = g_earth / 6, the length must be reduced to (1/6) times its Earth value.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex14",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Earth Tunnel Oscillation Period",
    "difficulty": "Easy",
    "questionText": "A narrow diametrical tunnel is dug through the Earth (radius R). A particle of mass m is released from rest at the surface. The time period of its simple harmonic motion through the tunnel is:",
    "options": [
      "\u03c0 \u221a(R / g)",
      "(\u03c0/2) \u221a(R / g)",
      "2\u03c0 \u221a(R / g)",
      "(2/\u03c0) \u221a(R / g)"
    ],
    "correctAnswer": 2,
    "explanation": "Inside the uniform Earth, gravitational force is F = -(mg/R) x, giving a linear restoring force with k = mg/R.\nTime period T = 2\u03c0 \u221a(m / k) = 2\u03c0 \u221a(R / g) \u2248 84.6 minutes.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex15",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Damped Oscillation Frequency",
    "difficulty": "Easy",
    "questionText": "In a damped harmonic oscillator with damping constant b, the angular frequency of oscillation \u03c9' compared to the natural frequency \u03c9_0 is:",
    "options": [
      "Greater than natural frequency",
      "Less than natural frequency",
      "Equal to natural frequency",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "For a damped oscillator, \u03c9' = \u221a(\u03c9_0^2 - b^2 / (4m^2)) = \u221a(k/m - b^2 / (4m^2)) < \u03c9_0. Thus, the frequency is always less than the natural undamped frequency.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex16",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Forced Oscillation Driving Frequency",
    "difficulty": "Easy",
    "questionText": "In the steady state of forced (driven) harmonic oscillations, the particle oscillates with a frequency equal to:",
    "options": [
      "The frequency of the external periodic driving force",
      "The natural frequency of the body",
      "The difference of driving and natural frequencies",
      "The arithmetic mean of driving and natural frequencies"
    ],
    "correctAnswer": 0,
    "explanation": "After the initial transient natural oscillations die out due to damping, the steady-state response of a forced oscillator occurs solely at the angular frequency \u03c9_d of the driving force.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex17",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Differential Equation of Damped Oscillation",
    "difficulty": "Easy",
    "questionText": "Which of the following differential equations represents the motion of a damped harmonic oscillator?",
    "options": [
      "d^2x/dt^2 = -kx",
      "d^2x/dt^2 = -kx + f0 sin(\u03c90 t)",
      "d^2x/dt^2 - kx + dx/dt = 0",
      "d^2x/dt^2 + (b/m) dx/dt + (k/m) x = 0"
    ],
    "correctAnswer": 3,
    "explanation": "From Newton's second law: m d^2x/dt^2 = -kx - b dx/dt => d^2x/dt^2 + (b/m) dx/dt + (k/m) x = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex18",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Damped Oscillation Amplitude Decay",
    "difficulty": "Easy",
    "questionText": "In a damped harmonic oscillator, the amplitude of oscillation decays exponentially with time t according to the formula:",
    "options": [
      "A(t) = A_0 e^(-bt / 2m)",
      "A(t) = A_0 e^(bt / 2m)",
      "A(t) = A_0 e^(-bt^2 / m)",
      "A(t) = A_0 e^(m / bt^2)"
    ],
    "correctAnswer": 0,
    "explanation": "The envelope amplitude of a damped harmonic oscillator decreases exponentially as A(t) = A_0 e^(-bt / (2m)).",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex19",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Resonance Definition",
    "difficulty": "Easy",
    "questionText": "Resonance is a special case of:",
    "options": [
      "Damped oscillation",
      "Forced (driven) oscillation",
      "Natural free oscillation",
      "Non-periodic motion"
    ],
    "correctAnswer": 1,
    "explanation": "Resonance occurs in a forced oscillator when the driving frequency matches the natural frequency (\u03c9_d \u2248 \u03c9_0), resulting in maximum energy transfer and maximum amplitude.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch14-ex20",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Two-Spring System on Incline",
    "difficulty": "Medium",
    "questionText": "A block of mass M is attached between two identical springs of force constant k on a smooth inclined plane of inclination \u03b8. The time period of oscillation of the block is:",
    "options": [
      "2\u03c0 \u221a(M / 2k)",
      "2\u03c0 \u221a(2M / k)",
      "2\u03c0 \u221a(M / (k sin \u03b8))",
      "2\u03c0 \u221a(M sin \u03b8 / k)"
    ],
    "correctAnswer": 0,
    "explanation": "When the block is displaced, both springs exert restoring forces in the same direction (parallel combination): k_eff = k + k = 2k.\nTime period T = 2\u03c0 \u221a(M / k_eff) = 2\u03c0 \u221a(M / 2k), independent of inclination \u03b8.",
    "tags": [
      "NCERT NEET Physics",
      "Oscillations",
      "Class 11"
    ]
  }
];

import { Question } from '../types';
import { MOTION_2D_QUESTIONS, MOTION_2D_BOOK_QUESTIONS } from './motion2DQuestions';
import { LAWS_OF_MOTION_QUESTIONS, LAWS_OF_MOTION_BOOK_QUESTIONS, NEWTONS_LAWS_OF_MOTION_QUESTIONS } from './lawsOfMotionQuestions';
import { FRICTION_QUESTIONS, FRICTION_BOOK_QUESTIONS } from './frictionQuestions';
import { WORK_ENERGY_POWER_QUESTIONS, WORK_ENERGY_POWER_BOOK_QUESTIONS } from './workEnergyPowerQuestions';

export {
  MOTION_2D_QUESTIONS,
  MOTION_2D_BOOK_QUESTIONS,
  LAWS_OF_MOTION_QUESTIONS,
  LAWS_OF_MOTION_BOOK_QUESTIONS,
  NEWTONS_LAWS_OF_MOTION_QUESTIONS,
  FRICTION_QUESTIONS,
  FRICTION_BOOK_QUESTIONS,
  WORK_ENERGY_POWER_QUESTIONS,
  WORK_ENERGY_POWER_BOOK_QUESTIONS
};

export const ROTATIONAL_MOTION_QUESTIONS: Question[] = [
  {
    "id": "rot-q1",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "Two particles of masses 1 kg and 3 kg have position vectors (2î + 3ĵ) m and (-2î - ĵ) m. The position vector of their centre of mass is",
    "options": [
      "-î",
      "-î + ĵ",
      "-î + (1/2)ĵ",
      "î - ĵ"
    ],
    "correctAnswer": 0,
    "explanation": "R_cm = (m₁ r₁ + m₂ r₂) / (m₁ + m₂) = [1(2î + 3ĵ) + 3(-2î - ĵ)] / 4 = (-4î + 0ĵ) / 4 = -î m.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q2",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The moment of inertia of a uniform circular ring of mass M and radius R about its natural axis (perpendicular to plane passing through centre) is",
    "options": [
      "M R² / 2",
      "M R²",
      "2 M R²",
      "M R² / 4"
    ],
    "correctAnswer": 1,
    "explanation": "Every mass element of the ring is at distance R from the central perpendicular axis, so I = ∫ R² dm = M R².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q3",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "The moment of inertia of a uniform circular disc of mass M and radius R about its diameter is",
    "options": [
      "M R²",
      "M R² / 2",
      "M R² / 4",
      "2 M R² / 5"
    ],
    "correctAnswer": 2,
    "explanation": "About perpendicular central axis I_z = (1/2)MR². By perpendicular axis theorem I_x + I_y = I_z => 2 I_dia = (1/2)MR² => I_dia = (1/4)MR².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q4",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The moment of inertia of a solid sphere of mass M and radius R about its tangent is",
    "options": [
      "(2/5) M R²",
      "(7/5) M R²",
      "(3/5) M R²",
      "(5/3) M R²"
    ],
    "correctAnswer": 1,
    "explanation": "By parallel axis theorem: I_tangent = I_cm + M R² = (2/5)MR² + MR² = (7/5) M R².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q5",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "The moment of inertia of a thin uniform rod of mass M and length L about an axis through one end perpendicular to its length is",
    "options": [
      "M L² / 12",
      "M L² / 3",
      "M L² / 4",
      "M L² / 2"
    ],
    "correctAnswer": 1,
    "explanation": "I_end = I_cm + M(L/2)² = (1/12)ML² + (1/4)ML² = (4/12)ML² = (1/3) M L².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q6",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A torque of 20 N·m is applied on a flywheel of moment of inertia 4 kg·m². The angular acceleration produced is",
    "options": [
      "5 rad/s²",
      "10 rad/s²",
      "80 rad/s²",
      "0.2 rad/s²"
    ],
    "correctAnswer": 0,
    "explanation": "τ = I α => α = τ / I = 20 / 4 = 5 rad/s².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q7",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "A solid cylinder of mass M and radius R rolls down an inclined plane of angle θ without slipping. Its linear acceleration is",
    "options": [
      "g sin θ",
      "(2/3) g sin θ",
      "(1/2) g sin θ",
      "(3/5) g sin θ"
    ],
    "correctAnswer": 1,
    "explanation": "For rolling without slipping a = (g sin θ) / (1 + k²/R²). For solid cylinder k²/R² = 1/2 => a = (g sin θ) / (1 + 1/2) = (2/3) g sin θ.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q8",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "When a diver jumps into water, he tucks his body in to increase his rotation rate. This works on the principle of conservation of",
    "options": [
      "Linear momentum",
      "Angular momentum",
      "Total mechanical energy",
      "Kinetic energy"
    ],
    "correctAnswer": 1,
    "explanation": "External torque is zero (τ_ext = 0). By pulling limbs in, moment of inertia I decreases, so angular velocity ω increases to keep L = I ω constant.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q9",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "A wheel of moment of inertia 2 kg·m² is rotating at 300 rpm. The torque required to stop it in 10 s is",
    "options": [
      "π N·m",
      "2π N·m",
      "4π N·m",
      "10π N·m"
    ],
    "correctAnswer": 1,
    "explanation": "ω₀ = 300 × (2π/60) = 10π rad/s. α = (0 - 10π)/10 = -π rad/s². |τ| = I |α| = 2 × π = 2π N·m.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q10",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The ratio of rotational kinetic energy to translational kinetic energy for a solid sphere rolling without slipping is",
    "options": [
      "2 : 5",
      "5 : 2",
      "1 : 2",
      "2 : 7"
    ],
    "correctAnswer": 0,
    "explanation": "K_rot / K_trans = ((1/2) I ω²) / ((1/2) M v²) = ((1/2)(2/5 MR²)(v/R)²) / ((1/2) M v²) = 2/5 = 2 : 5.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q11",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "In the above problem, the ratio of rotational kinetic energy to TOTAL kinetic energy is",
    "options": [
      "2 : 5",
      "2 : 7",
      "5 : 7",
      "1 : 7"
    ],
    "correctAnswer": 1,
    "explanation": "K_total = K_trans + K_rot = (1 + 2/5) K_trans = (7/5) K_trans. Ratio K_rot / K_total = (2/5) / (7/5) = 2/7 = 2 : 7.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q12",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A hollow sphere and a solid sphere of same mass and radius roll down an inclined plane without slipping. Which reaches the bottom first?",
    "options": [
      "Hollow sphere",
      "Solid sphere",
      "Both reach simultaneously",
      "Depends on incline angle"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration a = (g sin θ)/(1 + k²/R²). For solid sphere k²/R² = 2/5 = 0.4. For hollow sphere k²/R² = 2/3 = 0.67. Solid sphere has greater acceleration and reaches first.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q13",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "The radius of gyration of a solid disc of radius R about its central perpendicular axis is",
    "options": [
      "R",
      "R / √2",
      "R / 2",
      "R / √3"
    ],
    "correctAnswer": 1,
    "explanation": "I = M k² = (1/2) M R² => k² = R²/2 => k = R / √2.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q14",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A force F = (2î + 3ĵ - k̂) N acts at point r = (î - ĵ + 2k̂) m. The torque τ = r × F is",
    "options": [
      "-5î + 5ĵ + 5k̂",
      "-5î + 3ĵ + 5k̂",
      "5î - 5ĵ - 5k̂",
      "-5î - 5ĵ - 5k̂"
    ],
    "correctAnswer": 0,
    "explanation": "τ = det |î ĵ k̂; 1 -1 2; 2 3 -1| = î((-1)(-1) - (2)(3)) - ĵ((1)(-1) - (2)(2)) + k̂((1)(3) - (-1)(2)) = î(1 - 6) - ĵ(-1 - 4) + k̂(3 + 2) = -5î + 5ĵ + 5k̂ N·m.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q15",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "If the Earth suddenly contracts to half of its present radius without change in mass, the duration of a day will become",
    "options": [
      "6 hours",
      "12 hours",
      "24 hours",
      "48 hours"
    ],
    "correctAnswer": 0,
    "explanation": "I = (2/5)MR². If R' = R/2, I' = I/4. By conservation of angular momentum I ω = I' ω' => I(2π/24) = (I/4)(2π/T') => T' = 24 / 4 = 6 hours.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q16",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The centre of mass of a system of particles depends on",
    "options": [
      "Masses of particles",
      "Positions of particles",
      "Relative distances between particles",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "R_cm = Σ m_i r_i / Σ m_i, which depends on individual masses and their respective spatial coordinates.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q17",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "The centre of mass of a uniform triangular lamina lies at its",
    "options": [
      "Incentre",
      "Circumcentre",
      "Centroid (intersection of medians)",
      "Orthocentre"
    ],
    "correctAnswer": 2,
    "explanation": "By symmetry and integration, the centre of mass of any uniform triangular lamina is located precisely at its centroid.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q18",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The rotational analogue of mass in linear motion is",
    "options": [
      "Torque",
      "Angular momentum",
      "Moment of inertia",
      "Angular acceleration"
    ],
    "correctAnswer": 2,
    "explanation": "Moment of inertia I opposes changes in rotational motion just as mass m opposes changes in linear motion (τ = I α vs F = m a).",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q19",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "The theorem of perpendicular axes is applicable only to",
    "options": [
      "1D objects",
      "2D laminar (planar) bodies",
      "3D spherical bodies",
      "Any arbitrary 3D shape"
    ],
    "correctAnswer": 1,
    "explanation": "The perpendicular axis theorem I_z = I_x + I_y strictly applies only to flat 2D planar (laminar) objects in the xy-plane.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q20",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A thin circular ring of mass M and radius R has moment of inertia about a tangential axis in its plane equal to",
    "options": [
      "(1/2) M R²",
      "(3/2) M R²",
      "2 M R²",
      "(3/4) M R²"
    ],
    "correctAnswer": 1,
    "explanation": "About diameter in plane I_dia = (1/2)MR². By parallel axis theorem: I_tan = I_dia + M R² = (1/2)MR² + MR² = (3/2) M R².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q21",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "A disc of mass 2 kg and radius 0.2 m is rotating at 60 rad/s. Its rotational kinetic energy is",
    "options": [
      "36 J",
      "72 J",
      "144 J",
      "288 J"
    ],
    "correctAnswer": 1,
    "explanation": "I = (1/2) M R² = (1/2)(2)(0.2²) = 0.04 kg·m². K_rot = (1/2) I ω² = (1/2)(0.04)(60²) = 0.02 × 3600 = 72 J.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q22",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "Angular momentum is a",
    "options": [
      "Scalar quantity",
      "Polar vector",
      "Axial vector (pseudo-vector)",
      "Dimensionless quantity"
    ],
    "correctAnswer": 2,
    "explanation": "Angular momentum L = r × p lies along the axis of rotation, making it an axial vector whose direction follows the right-hand grip rule.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q23",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "The angular velocity of a body increases from 10 rad/s to 30 rad/s in 4 s. The total angle turned through is",
    "options": [
      "40 rad",
      "80 rad",
      "120 rad",
      "160 rad"
    ],
    "correctAnswer": 1,
    "explanation": "θ = ((ω₀ + ω) / 2) t = ((10 + 30) / 2) × 4 = 20 × 4 = 80 rad.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q24",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is moving along line y = b with constant speed v. The angular momentum of the particle about origin at any point is",
    "options": [
      "m v b",
      "m v x",
      "m v √(x² + b²)",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Angular momentum |L| = m v r_perp. The perpendicular distance from origin to line y = b is constant b, so L = m v b (constant).",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q25",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "A solid sphere, a disc, and a ring all of same mass and radius roll down an incline without slipping. The order of their arrival at bottom is",
    "options": [
      "Ring, Disc, Sphere",
      "Sphere, Disc, Ring",
      "Disc, Sphere, Ring",
      "Simultaneously"
    ],
    "correctAnswer": 1,
    "explanation": "k²/R² values: Sphere (0.4) < Disc (0.5) < Ring (1.0). Since a = (g sin θ)/(1 + k²/R²), a_sphere > a_disc > a_ring, so order of arrival is Sphere first, then Disc, then Ring.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q26",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The dimensional formula of torque is identical to that of",
    "options": [
      "Force",
      "Work / Energy",
      "Power",
      "Momentum"
    ],
    "correctAnswer": 1,
    "explanation": "[Torque] = [r][F] = L × [M L T⁻²] = [M L² T⁻²], identical to the dimensions of work and energy.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q27",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "A constant torque of 1000 N·m turns a wheel through 200 rad. The work done by torque is",
    "options": [
      "5 J",
      "2 × 10⁵ J",
      "2 × 10⁴ J",
      "5 × 10³ J"
    ],
    "correctAnswer": 1,
    "explanation": "W = τ × θ = 1000 × 200 = 200,000 J = 2 × 10⁵ J.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q28",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "If the net external force on a system of particles is zero, then the centre of mass",
    "options": [
      "Must be at rest",
      "Must be accelerating",
      "Moves with constant velocity (or remains at rest)",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "F_ext = M a_cm. If F_ext = 0, a_cm = 0, meaning the velocity of the centre of mass is constant (v_cm = const).",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q29",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "A bomb at rest explodes into three fragments. Two fragments of equal mass m fly off mutually perpendicular with speed v. The velocity of third fragment of mass 2m is",
    "options": [
      "v/√2 in opposite direction",
      "v√2 in opposite direction",
      "v in opposite direction",
      "2v in opposite direction"
    ],
    "correctAnswer": 0,
    "explanation": "p₁ = mv î, p₂ = mv ĵ. Net momentum of first two = mv(î + ĵ) with magnitude mv√2. To conserve zero total momentum: (2m) v₃ = -mv√2 => v₃ = v / √2 at 225°.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q30",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The moment of inertia of a solid cylinder of mass M, length L and radius R about its central transverse axis is",
    "options": [
      "M (R²/4 + L²/12)",
      "M (R²/2 + L²/12)",
      "M R² / 2",
      "M L² / 12"
    ],
    "correctAnswer": 0,
    "explanation": "Standard formula for transverse central axis of a cylinder is I = M (R²/4 + L²/12).",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q31",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "A metre stick is balanced on a knife edge at its centre (50 cm mark). When two coins of 5 g each are put at 12 cm mark, the stick balances at 45 cm. Mass of stick is",
    "options": [
      "50 g",
      "66 g",
      "75 g",
      "100 g"
    ],
    "correctAnswer": 1,
    "explanation": "Clockwise torque by stick's COM at 50 cm about pivot at 45 cm = M(50 - 45) = 5M. Counter-clockwise torque by 10 g coins at 12 cm = 10(45 - 12) = 10(33) = 330. 5M = 330 => M = 66 g.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q32",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The speed of the top of a wheel of radius R rolling without slipping with forward centre-of-mass velocity v_cm is",
    "options": [
      "Zero",
      "v_cm",
      "2 v_cm",
      "v_cm / 2"
    ],
    "correctAnswer": 2,
    "explanation": "Top point has translational velocity v_cm plus rotational velocity ωR = v_cm in same direction => v_top = v_cm + v_cm = 2 v_cm.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q33",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "The speed of the contact point of a rolling wheel with the ground is",
    "options": [
      "Zero",
      "v_cm",
      "2 v_cm",
      "v_cm / √2"
    ],
    "correctAnswer": 0,
    "explanation": "At the point of contact, forward translational velocity v_cm is exactly cancelled by backward rotational velocity ωR => v_contact = v_cm - v_cm = 0.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q34",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The relation between torque τ and angular momentum L is",
    "options": [
      "τ = dL / dt",
      "τ = L × ω",
      "τ = d²L / dt²",
      "L = dτ / dt"
    ],
    "correctAnswer": 0,
    "explanation": "Newton's second law for rotation states that the net external torque equals the time rate of change of angular momentum: τ_ext = dL/dt.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q35",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "A flywheel spinning at 120 rad/s slows down to 40 rad/s under uniform retardation after turning through 160 rad. The angular deceleration is",
    "options": [
      "20 rad/s²",
      "40 rad/s²",
      "80 rad/s²",
      "10 rad/s²"
    ],
    "correctAnswer": 1,
    "explanation": "ω² - ω₀² = 2α θ => 40² - 120² = 2α(160) => 1600 - 14400 = 320α => -12800 = 320α => α = -40 rad/s².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q36",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A solid sphere of mass 1 kg and radius 10 cm rolls without slipping at 5 m/s. Its total kinetic energy is",
    "options": [
      "12.5 J",
      "17.5 J",
      "25.0 J",
      "35.0 J"
    ],
    "correctAnswer": 1,
    "explanation": "K_total = (1/2) M v² (1 + k²/R²) = (1/2)(1)(5²)(1 + 2/5) = (1/2)(25)(7/5) = 35/2 = 17.5 J.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q37",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "A ring of mass M and radius R rolls without slipping. The percentage of its total kinetic energy that is rotational is",
    "options": [
      "25%",
      "33.3%",
      "50%",
      "100%"
    ],
    "correctAnswer": 2,
    "explanation": "For a ring k²/R² = 1. K_rot = (1/2)Iω² = (1/2)Mv². K_trans = (1/2)Mv². K_total = Mv². K_rot / K_total = 1/2 = 50%.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q38",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The moment of inertia of a spherical shell (hollow sphere) of mass M and radius R about its diameter is",
    "options": [
      "(2/5) M R²",
      "(2/3) M R²",
      "M R²",
      "(3/5) M R²"
    ],
    "correctAnswer": 1,
    "explanation": "For a thin spherical shell, I_dia = (2/3) M R².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q39",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "Two rings of radii R and 2R made of same wire have ratio of moments of inertia I₁ : I₂ equal to",
    "options": [
      "1 : 2",
      "1 : 4",
      "1 : 8",
      "1 : 16"
    ],
    "correctAnswer": 2,
    "explanation": "Mass M ∝ circumference ∝ R. I = M R² ∝ R × R² = R³. Therefore I₁ / I₂ = (R / 2R)³ = 1/8 = 1 : 8.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q40",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A circular disc of mass M and radius R has a concentric circular hole of radius r. Its moment of inertia about central perpendicular axis is",
    "options": [
      "(1/2) M (R² + r²)",
      "(1/2) M (R² - r²)",
      "(1/2) M (R⁴ - r⁴)",
      "M (R² + r²)"
    ],
    "correctAnswer": 0,
    "explanation": "For an annular cylinder or disc, integration yields I = (1/2) M (R² + r²).",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q41",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "If no external torque acts on a system, which of the following must be conserved?",
    "options": [
      "Angular momentum",
      "Linear momentum",
      "Kinetic energy",
      "Potential energy"
    ],
    "correctAnswer": 0,
    "explanation": "τ_ext = dL/dt = 0 => Angular momentum L is strictly conserved.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q42",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "A rope is wound around a hollow cylinder of mass 3 kg and radius 40 cm. If rope is pulled with force 30 N, angular acceleration is",
    "options": [
      "25 rad/s²",
      "50 rad/s²",
      "75 rad/s²",
      "100 rad/s²"
    ],
    "correctAnswer": 0,
    "explanation": "For hollow cylinder I = M R² = 3(0.4)² = 0.48 kg·m². Torque τ = F R = 30 × 0.4 = 12 N·m. α = τ / I = 12 / 0.48 = 25 rad/s².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q43",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Easy",
    "questionText": "In the above problem, linear acceleration of the rope is",
    "options": [
      "5 m/s²",
      "10 m/s²",
      "15 m/s²",
      "20 m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "a = R α = 0.4 m × 25 rad/s² = 10 m/s².",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q44",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Medium",
    "questionText": "The position of centre of mass of a system depends on the choice of coordinate origin:",
    "options": [
      "True",
      "False, relative position from bodies is independent of coordinate origin",
      "Depends on masses",
      "Depends on frame velocity"
    ],
    "correctAnswer": 1,
    "explanation": "While coordinates of COM change with origin shift, its physical location relative to the particles of the body remains invariant.",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  },
  {
    "id": "rot-q45",
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "topic": "System of Particles & Rotational Motion",
    "difficulty": "Hard",
    "questionText": "A uniform rod of length L is suspended vertically from one end. The time period of small oscillations about the pivot is",
    "options": [
      "2π √(L/g)",
      "2π √(2L / 3g)",
      "2π √(L / 2g)",
      "2π √(3L / 2g)"
    ],
    "correctAnswer": 1,
    "explanation": "Physical pendulum T = 2π √(I / (mgd)). I_end = (1/3)ML², d = L/2. T = 2π √[((1/3)ML²) / (mg L/2)] = 2π √(2L / 3g).",
    "tags": [
      "Rotational Motion",
      "System of Particles & Rotational Motion"
    ]
  }
];

import { Question } from '../types';
import { MOTION_2D_QUESTIONS, MOTION_2D_BOOK_QUESTIONS } from './motion2DQuestions';
import { LAWS_OF_MOTION_QUESTIONS, LAWS_OF_MOTION_BOOK_QUESTIONS, NEWTONS_LAWS_OF_MOTION_QUESTIONS } from './lawsOfMotionQuestions';
import { FRICTION_QUESTIONS, FRICTION_BOOK_QUESTIONS } from './frictionQuestions';

export {
  MOTION_2D_QUESTIONS,
  MOTION_2D_BOOK_QUESTIONS,
  LAWS_OF_MOTION_QUESTIONS,
  LAWS_OF_MOTION_BOOK_QUESTIONS,
  NEWTONS_LAWS_OF_MOTION_QUESTIONS,
  FRICTION_QUESTIONS,
  FRICTION_BOOK_QUESTIONS
};

export const WORK_ENERGY_POWER_QUESTIONS: Question[] = [
  {
    "id": "wep-q1",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A force F = (5î + 3ĵ + 2k̂) N causes a displacement s = (2î - ĵ) m. The work done by the force is",
    "options": [
      "7 J",
      "10 J",
      "13 J",
      "17 J"
    ],
    "correctAnswer": 0,
    "explanation": "W = F · s = (5)(2) + (3)(-1) + (2)(0) = 10 - 3 + 0 = 7 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q2",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "If the kinetic energy of a body is increased by 300%, its linear momentum will increase by",
    "options": [
      "50%",
      "100%",
      "150%",
      "200%"
    ],
    "correctAnswer": 1,
    "explanation": "p = √(2mK). If K increases by 300%, K' = 4K => p' = √(2m(4K)) = 2p. Percentage increase = ((2p - p)/p) × 100% = 100%.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q3",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "A particle is moving under the force F = -k x. The work done in stretching the spring from x = 0 to x = x₀ is",
    "options": [
      "k x₀²",
      "(1/2) k x₀²",
      "-(1/2) k x₀²",
      "2 k x₀²"
    ],
    "correctAnswer": 2,
    "explanation": "W = ∫₀^{x₀} (-kx) dx = [-kx²/2]₀^{x₀} = -(1/2) k x₀².",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q4",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "An engine pumps water continuously through a hose of cross-section A with speed v. The rate at which kinetic energy is imparted to water (power) is",
    "options": [
      "(1/2) A ρ v²",
      "(1/2) A ρ v³",
      "A ρ v³",
      "A ρ v²"
    ],
    "correctAnswer": 1,
    "explanation": "Mass per second dm/dt = ρ A v. Rate of KE = (1/2)(dm/dt) v² = (1/2)(ρ A v) v² = (1/2) A ρ v³.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q5",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A ball of mass m moving with velocity v collides head-on elastically with an identical ball at rest. After collision, the velocity of the first ball is",
    "options": [
      "Zero",
      "v",
      "v / 2",
      "-v"
    ],
    "correctAnswer": 0,
    "explanation": "In head-on elastic collision of two equal masses (m₁ = m₂), the velocities are completely exchanged. The first ball comes to rest (v₁' = 0) and the second moves with v.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q6",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A body of mass 2 kg falls from height 10 m. The work done by gravity on the body is (g = 10 m/s²)",
    "options": [
      "20 J",
      "100 J",
      "200 J",
      "-200 J"
    ],
    "correctAnswer": 2,
    "explanation": "W = m g h = 2 × 10 × 10 = +200 J (force and displacement are in same downward direction).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q7",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "A motor of power 2 kW is used to pump water from a well of depth 20 m. If efficiency is 80%, volume of water pumped per minute is (g = 10 m/s², ρ = 1000 kg/m³)",
    "options": [
      "480 L",
      "4800 L",
      "240 L",
      "2400 L"
    ],
    "correctAnswer": 0,
    "explanation": "Useful power P_out = 0.80 × 2000 = 1600 W. Energy in 1 min (60 s) = 1600 × 60 = 96000 J. m g h = 96000 => m(10)(20) = 96000 => m = 480 kg = 480 L.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q8",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A body of mass 0.1 kg is moving in a vertical circle of radius 1 m. The minimum speed at the lowest point so that it completes the circle is (g = 10 m/s²)",
    "options": [
      "5 m/s",
      "7.07 m/s (√50 m/s)",
      "10 m/s",
      "14.14 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "v_lowest = √(5 g R) = √(5 × 10 × 1) = √50 ≈ 7.07 m/s.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q9",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "In vertical circular motion, the difference in tension between the lowest and highest points (T_lowest - T_highest) is",
    "options": [
      "2 mg",
      "3 mg",
      "6 mg",
      "9 mg"
    ],
    "correctAnswer": 2,
    "explanation": "T_lowest = mg + mv_L²/R and T_highest = mv_H²/R - mg. Since v_L² - v_H² = 4gR, T_lowest - T_highest = 2mg + m(4gR)/R = 6 mg.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q10",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "The potential energy of a particle in a force field is U(x) = A/x² - B/x. The equilibrium position of the particle is at x equal to",
    "options": [
      "2A / B",
      "A / B",
      "B / (2A)",
      "A / (2B)"
    ],
    "correctAnswer": 0,
    "explanation": "For equilibrium F = -dU/dx = 0. -d/dx(A x⁻² - B x⁻¹) = 0 => 2A x⁻³ - B x⁻² = 0 => 2A / x³ = B / x² => x = 2A / B.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q11",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "A uniform chain of length L and mass M is held on a smooth table with 1/3 rd of its length hanging over the edge. Work required to pull hanging part onto table is",
    "options": [
      "M g L / 6",
      "M g L / 9",
      "M g L / 18",
      "M g L / 3"
    ],
    "correctAnswer": 2,
    "explanation": "Mass of hanging part m' = M/3. Centre of mass of hanging part is at depth y_cm = (L/3)/2 = L/6. Work W = m' g y_cm = (M/3) g (L/6) = MgL / 18.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q12",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "If momentum of a body increases by 20%, its kinetic energy increases by",
    "options": [
      "20%",
      "40%",
      "44%",
      "50%"
    ],
    "correctAnswer": 2,
    "explanation": "K ∝ p². K' = (1.20 p)² = 1.44 K. Percentage increase = (1.44 - 1.0) × 100% = 44%.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q13",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A block of mass 1 kg moving at 4 m/s compresses a horizontal spring of spring constant k = 100 N/m. The maximum compression of the spring is",
    "options": [
      "0.2 m",
      "0.4 m",
      "0.8 m",
      "1.6 m"
    ],
    "correctAnswer": 1,
    "explanation": "(1/2) k x_max² = (1/2) m v² => 100 x_max² = 1(4²) = 16 => x_max² = 0.16 => x_max = 0.4 m.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q14",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "In a perfectly inelastic collision, which of the following is conserved?",
    "options": [
      "Kinetic energy only",
      "Linear momentum only",
      "Both KE and momentum",
      "Neither KE nor momentum"
    ],
    "correctAnswer": 1,
    "explanation": "Linear momentum is always conserved in all isolated collisions, but maximum kinetic energy is lost to heat and deformation in perfectly inelastic collisions.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q15",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "The coefficient of restitution e for a perfectly elastic collision is",
    "options": [
      "0",
      "0.5",
      "1",
      "Infinity"
    ],
    "correctAnswer": 2,
    "explanation": "For a perfectly elastic collision, relative speed of separation equals relative speed of approach, so e = 1.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q16",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A bullet of mass m moving with speed v strikes and embeds in a wooden block of mass M resting on a frictionless table. The common velocity is",
    "options": [
      "m v / (m + M)",
      "M v / (m + M)",
      "m v / M",
      "(m + M) v / m"
    ],
    "correctAnswer": 0,
    "explanation": "By conservation of momentum: m v = (m + M) V_common => V_common = m v / (m + M).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q17",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "In the above problem, the fraction of initial kinetic energy lost during impact is",
    "options": [
      "m / (m + M)",
      "M / (m + M)",
      "m / M",
      "M / m"
    ],
    "correctAnswer": 1,
    "explanation": "Initial K_i = (1/2)mv². Final K_f = (1/2)(m+M)V² = (1/2)m²v²/(m+M). Fraction lost = (K_i - K_f)/K_i = 1 - m/(m+M) = M/(m+M).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q18",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A force F = 20 + 10 y acts on a particle in the y-direction. Work done by this force from y = 0 to y = 1 m is",
    "options": [
      "20 J",
      "25 J",
      "30 J",
      "35 J"
    ],
    "correctAnswer": 1,
    "explanation": "W = ∫₀¹ (20 + 10y) dy = [20y + 5y²]₀¹ = 20(1) + 5(1) = 25 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q19",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "Power of a crane that can lift a 500 kg mass through a vertical height of 20 m in 10 s is (g = 10 m/s²)",
    "options": [
      "1 kW",
      "5 kW",
      "10 kW",
      "20 kW"
    ],
    "correctAnswer": 2,
    "explanation": "P = W / t = (m g h) / t = (500 × 10 × 20) / 10 = 100000 / 10 = 10000 W = 10 kW.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q20",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "Work done by centripetal force in circular motion is always",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Depends on radius"
    ],
    "correctAnswer": 2,
    "explanation": "Centripetal force is always perpendicular to displacement (F ⊥ ds => cos 90° = 0), so W = 0 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q21",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A 2 kg body is projected vertically upwards with 20 m/s. Its kinetic energy when it reaches half of maximum height is (g = 10 m/s²)",
    "options": [
      "100 J",
      "200 J",
      "300 J",
      "400 J"
    ],
    "correctAnswer": 1,
    "explanation": "Initial KE E = (1/2)(2)(20²) = 400 J. At half height, potential energy is (1/2)E = 200 J, so remaining KE = 400 - 200 = 200 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q22",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "Conservative force is that force for which work done in a closed path is",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "correctAnswer": 2,
    "explanation": "By definition of conservative forces (e.g. gravity, electrostatic), the closed path integral ∮ F · dr = 0.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q23",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "The relation between conservative force F and potential energy U is",
    "options": [
      "F = dU/dx",
      "F = -dU/dx",
      "F = ∫ U dx",
      "F = -∫ U dx"
    ],
    "correctAnswer": 1,
    "explanation": "Conservative force is the negative gradient of potential energy: F = -dU/dx.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q24",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A particle moves from r₁ = (2î + 3ĵ) m to r₂ = (4î + 6ĵ) m under force F = (3î + 2ĵ) N. The work done is",
    "options": [
      "6 J",
      "12 J",
      "18 J",
      "24 J"
    ],
    "correctAnswer": 1,
    "explanation": "Δr = r₂ - r₁ = (4-2)î + (6-3)ĵ = 2î + 3ĵ. W = F · Δr = (3)(2) + (2)(3) = 6 + 6 = 12 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q25",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "The unit of power '1 Horsepower' (1 hp) is equal to",
    "options": [
      "500 W",
      "746 W",
      "1000 W",
      "764 W"
    ],
    "correctAnswer": 1,
    "explanation": "1 horsepower (hp) = 746 Watts.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q26",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A spring of force constant k is cut into two equal halves. The force constant of each half is",
    "options": [
      "k / 2",
      "k",
      "2k",
      "4k"
    ],
    "correctAnswer": 2,
    "explanation": "Spring constant is inversely proportional to length (k ∝ 1/L). Halving the length doubles the stiffness: k' = 2k.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q27",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "Two springs of constants k₁ and k₂ are connected in series. The effective spring constant is",
    "options": [
      "k₁ + k₂",
      "k₁ k₂ / (k₁ + k₂)",
      "(k₁ + k₂) / 2",
      "√(k₁ k₂)"
    ],
    "correctAnswer": 1,
    "explanation": "In series combination: 1/k_eq = 1/k₁ + 1/k₂ => k_eq = (k₁ k₂) / (k₁ + k₂).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q28",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "Two springs of constants k₁ and k₂ are connected in parallel. The effective spring constant is",
    "options": [
      "k₁ + k₂",
      "k₁ k₂ / (k₁ + k₂)",
      "√(k₁² + k₂²)",
      "(k₁ + k₂) / 2"
    ],
    "correctAnswer": 0,
    "explanation": "In parallel combination, total restoring force is the sum of individual forces: k_eq = k₁ + k₂.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q29",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A body of mass 5 kg is moved up a 30° incline of length 10 m with constant speed. Work done by gravity is (g = 10 m/s²)",
    "options": [
      "-250 J",
      "+250 J",
      "-500 J",
      "+500 J"
    ],
    "correctAnswer": 0,
    "explanation": "Vertical height gained h = 10 sin 30° = 5 m. Work by gravity W_g = -m g h = -(5)(10)(5) = -250 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q30",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "When two bodies of masses m₁ and m₂ collide elastically in 1D, the velocity of m₁ after collision is",
    "options": [
      "[(m₁ - m₂)u₁ + 2m₂u₂] / (m₁ + m₂)",
      "[(m₂ - m₁)u₁ + 2m₁u₂] / (m₁ + m₂)",
      "[(m₁ + m₂)u₁] / (m₁ - m₂)",
      "[2m₁u₁] / (m₁ + m₂)"
    ],
    "correctAnswer": 0,
    "explanation": "Standard 1D elastic collision formula yields v₁ = [(m₁ - m₂)u₁ + 2m₂u₂] / (m₁ + m₂).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q31",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "A 1000 kg car moving at 20 m/s is brought to rest in 50 m. The average braking force is",
    "options": [
      "2000 N",
      "4000 N",
      "6000 N",
      "8000 N"
    ],
    "correctAnswer": 1,
    "explanation": "Work-Energy Theorem: W_brake = ΔK => F × s = (1/2) m v² => F × 50 = (1/2)(1000)(20²) = 200,000 => F = 4000 N.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q32",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "Which of the following is NOT a unit of energy?",
    "options": [
      "Joule",
      "Watt-hour",
      "Electron-volt (eV)",
      "Kilowatt"
    ],
    "correctAnswer": 3,
    "explanation": "Kilowatt is a unit of power (rate of energy transfer), whereas Joule, Watt-hour, and eV are units of energy.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q33",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A body of mass m is dropped from height h onto a sand floor and penetrates distance s. The average resistance of sand is",
    "options": [
      "mg (1 + h/s)",
      "mg (h/s)",
      "mg (1 - h/s)",
      "mgh s"
    ],
    "correctAnswer": 0,
    "explanation": "Loss of PE = Work by sand resistance => mg(h + s) = F × s => F = mg(1 + h/s).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q34",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A body is acted upon by a constant power source. Its velocity as a function of time t varies as",
    "options": [
      "t",
      "t^(1/2)",
      "t^(3/2)",
      "t²"
    ],
    "correctAnswer": 1,
    "explanation": "Power P = F v = (m dv/dt) v => m v dv = P dt => v² ∝ t => v ∝ t^(1/2).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q35",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "In the above problem, the displacement x as a function of time t varies as",
    "options": [
      "t^(1/2)",
      "t",
      "t^(3/2)",
      "t²"
    ],
    "correctAnswer": 2,
    "explanation": "dx/dt = v ∝ t^(1/2) => x = ∫ t^(1/2) dt ∝ t^(3/2).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q36",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A pump can fill a tank of 30 m³ in 15 minutes. If tank is at height 40 m, power of pump is (g = 10 m/s², density = 1000 kg/m³)",
    "options": [
      "13.33 kW",
      "26.67 kW",
      "40.0 kW",
      "80.0 kW"
    ],
    "correctAnswer": 0,
    "explanation": "Mass = 30 × 1000 = 30000 kg. W = m g h = 30000 × 10 × 40 = 1.2 × 10⁷ J. Time = 15 × 60 = 900 s. P = 1.2 × 10⁷ / 900 = 13333 W = 13.33 kW.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q37",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "A ball bounces from a hard floor with coefficient of restitution e = 0.8. If it is dropped from height 10 m, the height to which it rises after first bounce is",
    "options": [
      "8.0 m",
      "6.4 m",
      "4.0 m",
      "5.12 m"
    ],
    "correctAnswer": 1,
    "explanation": "Height after first bounce h₁ = e² h₀ = (0.8)² × 10 = 0.64 × 10 = 6.4 m.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q38",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "The total distance travelled by the ball before coming to rest after infinite bounces is",
    "options": [
      "h₀ (1 + e²) / (1 - e²)",
      "h₀ (1 - e²) / (1 + e²)",
      "h₀ / (1 - e²)",
      "2 h₀ / (1 - e)"
    ],
    "correctAnswer": 0,
    "explanation": "Total distance S = h₀ + 2(h₁ + h₂ + ...) = h₀ + 2h₀(e² + e⁴ + ...) = h₀ [1 + 2e²/(1 - e²)] = h₀ (1 + e²) / (1 - e²).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q39",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "The total time elapsed before the ball stops bouncing is",
    "options": [
      "t₀ (1 + e) / (1 - e)",
      "t₀ (1 - e) / (1 + e)",
      "t₀ / (1 - e)",
      "2 t₀ / (1 - e)"
    ],
    "correctAnswer": 0,
    "explanation": "Total time T = t₀ + 2t₀(e + e² + ...) = t₀(1 + e)/(1 - e) where t₀ = √(2h₀/g).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q40",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A block of mass 2 kg compresses a spring by 0.2 m. If k = 500 N/m, the speed of block when spring returns to natural length is",
    "options": [
      "1.58 m/s",
      "3.16 m/s",
      "5.0 m/s",
      "10.0 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "(1/2) m v² = (1/2) k x² => 2 v² = 500 (0.2)² = 500(0.04) = 20 => v² = 10 => v = √10 ≈ 3.16 m/s.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q41",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "Work done in stretching a spring from extension x₁ to extension x₂ is",
    "options": [
      "(1/2) k (x₂ - x₁)²",
      "(1/2) k (x₂² - x₁²)",
      "k (x₂² - x₁²)",
      "(1/2) k (x₁ + x₂)²"
    ],
    "correctAnswer": 1,
    "explanation": "W = ∫_{x₁}^{x₂} k x dx = (1/2) k (x₂² - x₁²).",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q42",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "A body of mass 1 kg is thrown with 10 m/s at 30° to horizontal. The work done by gravity over the full flight is",
    "options": [
      "Zero",
      "50 J",
      "100 J",
      "-50 J"
    ],
    "correctAnswer": 0,
    "explanation": "Net vertical displacement over full flight is zero on level ground (Δy = 0), so W_gravity = -mg Δy = 0 J.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q43",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "questionText": "The area under a Force-displacement (F-x) graph represents",
    "options": [
      "Impulse",
      "Momentum",
      "Work done",
      "Power"
    ],
    "correctAnswer": 2,
    "explanation": "W = ∫ F dx, which is geometrically represented by the area under the force-displacement graph.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q44",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Medium",
    "questionText": "Two bodies of masses 1 kg and 4 kg have equal kinetic energies. The ratio of their linear momenta is",
    "options": [
      "1 : 4",
      "1 : 2",
      "2 : 1",
      "4 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "p = √(2mK). p₁ / p₂ = √(m₁ / m₂) = √(1 / 4) = 1/2 = 1 : 2.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  },
  {
    "id": "wep-q45",
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "Work, Energy, and Power",
    "difficulty": "Hard",
    "questionText": "Two bodies of masses 1 kg and 4 kg have equal linear momenta. The ratio of their kinetic energies K₁ : K₂ is",
    "options": [
      "4 : 1",
      "1 : 4",
      "2 : 1",
      "1 : 2"
    ],
    "correctAnswer": 0,
    "explanation": "K = p² / (2m). K₁ / K₂ = m₂ / m₁ = 4 / 1 = 4 : 1.",
    "tags": [
      "Work, Energy and Power",
      "Work, Energy, and Power"
    ]
  }
];

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

import { Question } from '../types';

export const MOTION_2D_QUESTIONS: Question[] = [
  {
    "id": "motion-2d-q1",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A projectile is thrown with speed u at an angle θ with the horizontal. Its speed at the highest point of trajectory is",
    "options": [
      "Zero",
      "u cos θ",
      "u sin θ",
      "u tan θ"
    ],
    "correctAnswer": 1,
    "explanation": "At the highest point of projectile motion, the vertical component of velocity becomes zero (v_y = 0), while the horizontal component remains constant: v = v_x = u cos θ.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q2",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "For a given velocity of projection, the horizontal range is maximum when the angle of projection is",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 1,
    "explanation": "Horizontal range R = (u² sin 2θ) / g. R is maximum when sin 2θ = 1 => 2θ = 90° => θ = 45°.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q3",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "The horizontal ranges of a projectile projected at angles θ and (90° - θ) with the same initial speed are in the ratio",
    "options": [
      "1 : 1",
      "1 : 2",
      "2 : 1",
      "tan θ : 1"
    ],
    "correctAnswer": 0,
    "explanation": "Range for angle θ is R₁ = (u² sin 2θ)/g. For (90° - θ), R₂ = [u² sin(180° - 2θ)]/g = (u² sin 2θ)/g = R₁. Ratio is 1 : 1.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q4",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "A ball is projected with kinetic energy E at an angle of 45° to the horizontal. At the highest point during its flight, its kinetic energy will be",
    "options": [
      "Zero",
      "E / 2",
      "E / √2",
      "E"
    ],
    "correctAnswer": 1,
    "explanation": "Initial kinetic energy E = (1/2)mu². At highest point, speed is v = u cos 45° = u/√2. Kinetic energy E' = (1/2)m(u/√2)² = (1/2)((1/2)mu²) = E/2.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q5",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "The maximum height attained by a projectile is given by the formula",
    "options": [
      "u² sin²θ / (2g)",
      "u² sin 2θ / g",
      "u² cos²θ / (2g)",
      "2u sin θ / g"
    ],
    "correctAnswer": 0,
    "explanation": "From kinematics v_y² - u_y² = -2gH => 0 - (u sin θ)² = -2gH => H = (u² sin²θ) / (2g).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q6",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The total time of flight of a projectile on level ground is",
    "options": [
      "u sin θ / g",
      "2u sin θ / g",
      "u cos θ / g",
      "2u cos θ / g"
    ],
    "correctAnswer": 1,
    "explanation": "Time to reach highest point is t = (u sin θ)/g. Total time of flight T = 2t = (2u sin θ)/g.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q7",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "If the horizontal range of a projectile is 4√3 times its maximum height, the angle of projection is",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 0,
    "explanation": "R = 4H cot θ. Given R = 4√3 H, we have 4H cot θ = 4√3 H => cot θ = √3 => θ = 30°.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q8",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The equation of trajectory of a projectile is y = √3 x - (g x²)/2. The angle of projection is",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "Comparing with standard trajectory equation y = x tan θ - (g x²)/(2u² cos²θ), tan θ = √3 => θ = 60°.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q9",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A particle moves in a circle of radius 20 cm with a linear speed of 10 m/s. Its centripetal acceleration is",
    "options": [
      "25 m/s²",
      "50 m/s²",
      "250 m/s²",
      "500 m/s²"
    ],
    "correctAnswer": 3,
    "explanation": "Centripetal acceleration a_c = v² / r = 10² / 0.20 = 100 / 0.20 = 500 m/s².",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "In uniform circular motion, which of the following physical quantities remains constant?",
    "options": [
      "Velocity",
      "Acceleration",
      "Kinetic energy",
      "Momentum"
    ],
    "correctAnswer": 2,
    "explanation": "In uniform circular motion, speed is constant so kinetic energy K = (1/2)mv² is constant. Velocity, acceleration, and momentum continuously change direction.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A body of mass 0.5 kg is whirled in a horizontal circle of radius 1 m with angular velocity 2 rad/s. The centripetal force is",
    "options": [
      "1 N",
      "2 N",
      "4 N",
      "8 N"
    ],
    "correctAnswer": 1,
    "explanation": "Centripetal force F = m ω² r = 0.5 × 2² × 1 = 0.5 × 4 = 2 N.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The optimum banking angle θ for a curved road of radius r designed for speed v is given by",
    "options": [
      "tan θ = v² / (rg)",
      "tan θ = rg / v²",
      "sin θ = v² / (rg)",
      "cos θ = v² / (rg)"
    ],
    "correctAnswer": 0,
    "explanation": "For safe negotiation without friction: N sin θ = mv²/r and N cos θ = mg => tan θ = v² / (rg).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A car rounds an unbanked circular curve of radius 100 m at speed 10 m/s. The minimum coefficient of static friction required to prevent skidding is (g = 10 m/s²)",
    "options": [
      "0.05",
      "0.10",
      "0.20",
      "0.25"
    ],
    "correctAnswer": 1,
    "explanation": "μ_s ≥ v² / (rg) = 10² / (100 × 10) = 100 / 1000 = 0.10.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "A river flows east with a speed of 3 m/s. A swimmer can swim in still water at 4 m/s. If he swims due north across the river, his resultant velocity is",
    "options": [
      "1 m/s",
      "5 m/s at 37° East of North",
      "7 m/s",
      "5 m/s at 53° East of North"
    ],
    "correctAnswer": 1,
    "explanation": "v_resultant = √(v_swimmer² + v_river²) = √(4² + 3²) = 5 m/s. Direction tan α = v_river / v_swimmer = 3/4 => α = 37° East of North.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "To cross a river of width d flowing with velocity v_r in the shortest path, a swimmer (speed v_s in still water, v_s > v_r) must head at an angle θ with upstream where",
    "options": [
      "sin θ = v_r / v_s",
      "cos θ = v_r / v_s",
      "tan θ = v_r / v_s",
      "sin θ = v_s / v_r"
    ],
    "correctAnswer": 0,
    "explanation": "For shortest path (straight across), the horizontal component must cancel river flow: v_s sin θ = v_r => sin θ = v_r / v_s with the normal upstream.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "An object is projected horizontally from the top of a tower of height 80 m with speed 20 m/s. The time taken to hit the ground is (g = 10 m/s²)",
    "options": [
      "2 s",
      "4 s",
      "6 s",
      "8 s"
    ],
    "correctAnswer": 1,
    "explanation": "Vertical motion is purely free fall: h = (1/2)gt² => 80 = (1/2)(10)t² = 5t² => t² = 16 => t = 4 s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "In the above problem, the horizontal distance (range) from the base of the tower where the object lands is",
    "options": [
      "40 m",
      "80 m",
      "100 m",
      "160 m"
    ],
    "correctAnswer": 1,
    "explanation": "Horizontal distance x = u_x × t = 20 m/s × 4 s = 80 m.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q18",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The angle of elevation of a projectile at its highest point as seen from the point of projection is given by",
    "options": [
      "tan φ = (1/2) tan θ",
      "tan φ = 2 tan θ",
      "tan φ = tan θ",
      "tan φ = (1/4) tan θ"
    ],
    "correctAnswer": 0,
    "explanation": "From point of projection, coordinates of peak are (R/2, H). tan φ = H / (R/2) = 2H / R. Since R = 4H cot θ, 2H / R = 2H / (4H cot θ) = (1/2) tan θ.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A stone is dropped from a moving train. The path of the stone as observed by an observer on the ground is",
    "options": [
      "A straight line",
      "A parabola",
      "A circle",
      "A hyperbola"
    ],
    "correctAnswer": 1,
    "explanation": "The stone has initial horizontal velocity equal to the train's speed and undergoes vertical acceleration due to gravity, resulting in a parabolic trajectory w.r.t the ground.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q20",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "Two bullets are fired simultaneously, horizontally and with different speeds from the same height. Which bullet will hit the ground first?",
    "options": [
      "The faster one",
      "The slower one",
      "Both will reach the ground simultaneously",
      "Depends on masses"
    ],
    "correctAnswer": 2,
    "explanation": "Since initial vertical velocities are both zero (u_y = 0) and vertical acceleration is g for both, the time of descent t = √(2h/g) is identical for both.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "If T is the total time of flight and H is the maximum height of a projectile, then g T² is equal to",
    "options": [
      "2H",
      "4H",
      "8H",
      "16H"
    ],
    "correctAnswer": 2,
    "explanation": "T = (2u sin θ)/g => T² = 4u² sin²θ / g². H = (u² sin²θ)/(2g). Therefore g T² = 4(2H) = 8H.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q22",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The angular displacement of a fly wheel varies with time as θ = 2t + 3t² rad. The angular acceleration at t = 2 s is",
    "options": [
      "2 rad/s²",
      "6 rad/s²",
      "12 rad/s²",
      "14 rad/s²"
    ],
    "correctAnswer": 1,
    "explanation": "Angular velocity ω = dθ/dt = 2 + 6t. Angular acceleration α = dω/dt = 6 rad/s² (constant for all t).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q23",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A body moves along a circular path of radius 5 m with uniform speed 10 m/s. The magnitude of average acceleration during half a revolution is",
    "options": [
      "Zero",
      "40/π m/s²",
      "20/π m/s²",
      "10/π m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "Change in velocity in half revolution Δv = v - (-v) = 2v = 20 m/s. Time t = πr/v = 5π/10 = π/2 s. Average acceleration = Δv / t = 20 / (π/2) = 40/π m/s².",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q24",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "A particle has initial velocity (3î + 4ĵ) m/s and acceleration (0.4î + 0.3ĵ) m/s². Its speed after 10 s is",
    "options": [
      "7√2 m/s",
      "7 m/s",
      "8.5 m/s",
      "10 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "v = u + at = (3î + 4ĵ) + 10(0.4î + 0.3ĵ) = (3 + 4)î + (4 + 3)ĵ = 7î + 7ĵ. |v| = √(7² + 7²) = 7√2 m/s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q25",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "The radius of curvature of a projectile at its highest point where its speed is u cos θ is",
    "options": [
      "u² cos²θ / g",
      "u² / g",
      "u² sin²θ / g",
      "u² / (g cos θ)"
    ],
    "correctAnswer": 0,
    "explanation": "At the highest point, the normal acceleration is gravity g. Radius of curvature ρ = v² / a_n = (u cos θ)² / g = (u² cos²θ) / g.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q26",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "A bomber flying horizontally at a height of 500 m with speed 100 m/s releases a bomb. The horizontal distance covered by the bomb before striking ground is (g = 10 m/s²)",
    "options": [
      "500 m",
      "1000 m",
      "1500 m",
      "2000 m"
    ],
    "correctAnswer": 1,
    "explanation": "Time of fall t = √(2h/g) = √(2 × 500 / 10) = √100 = 10 s. Horizontal distance = u × t = 100 × 10 = 1000 m.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q27",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A particle is projected at an angle of 60° with the horizontal with kinetic energy K. At the highest point, its potential energy (taking ground as reference) is",
    "options": [
      "K / 4",
      "K / 2",
      "3K / 4",
      "K"
    ],
    "correctAnswer": 2,
    "explanation": "Initial energy E = K. Kinetic energy at peak K' = K cos² 60° = K(1/4) = K/4. By conservation of energy, Potential Energy U = E - K' = K - K/4 = 3K/4.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q28",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "Two projectiles A and B are thrown with identical speeds at 30° and 60° respectively. The ratio of their maximum heights H_A / H_B is",
    "options": [
      "1 : 3",
      "3 : 1",
      "1 : √3",
      "√3 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "H ∝ sin²θ. H_A / H_B = sin² 30° / sin² 60° = (1/2)² / (√3/2)² = (1/4) / (3/4) = 1/3 = 1 : 3.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q29",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "In the above problem, the ratio of their total times of flight T_A / T_B is",
    "options": [
      "1 : √3",
      "√3 : 1",
      "1 : 3",
      "3 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "T ∝ sin θ. T_A / T_B = sin 30° / sin 60° = (1/2) / (√3/2) = 1/√3 = 1 : √3.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q30",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The coordinates of a moving particle at any time t are given by x = c t and y = b t². The trajectory of the particle is",
    "options": [
      "A straight line",
      "A circle",
      "A parabola",
      "An ellipse"
    ],
    "correctAnswer": 2,
    "explanation": "From x = ct, t = x/c. Substituting in y gives y = b(x/c)² = (b/c²) x², which is the equation of a parabola.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q31",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A particle moves in a circle of radius r with constant angular speed ω. Its linear acceleration is directed",
    "options": [
      "Radially outwards",
      "Radially inwards towards centre",
      "Tangential to the path",
      "Along the axis of rotation"
    ],
    "correctAnswer": 1,
    "explanation": "In uniform circular motion, the only acceleration is the centripetal acceleration, which acts radially inwards towards the centre of the circle.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q32",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The vector position of a particle is given by r = (3t î + 2t² ĵ + 5 k̂) m. The acceleration of the particle at t = 3 s is",
    "options": [
      "2 ĵ m/s²",
      "4 ĵ m/s²",
      "6 ĵ m/s²",
      "12 ĵ m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "Velocity v = dr/dt = 3î + 4t ĵ. Acceleration a = dv/dt = 4 ĵ m/s² (constant in magnitude and direction).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q33",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A particle is projected with a speed of 40 m/s at an angle of 60° with the horizontal. Its velocity vector at t = 2 s is (g = 10 m/s²)",
    "options": [
      "20î + (20√3 - 20)ĵ",
      "20î + 20√3 ĵ",
      "20î + 10ĵ",
      "10î + 20ĵ"
    ],
    "correctAnswer": 0,
    "explanation": "v_x = u cos 60° = 40(1/2) = 20 m/s. v_y = u sin 60° - gt = 40(√3/2) - 10(2) = 20√3 - 20 m/s. Hence v = 20î + (20√3 - 20)ĵ m/s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q34",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "For a particle performing non-uniform circular motion with radius R, the total acceleration is given by",
    "options": [
      "a_c only",
      "a_t only",
      "√(a_c² + a_t²)",
      "a_c + a_t"
    ],
    "correctAnswer": 2,
    "explanation": "Centripetal acceleration a_c and tangential acceleration a_t are perpendicular vectors, so net acceleration a = √(a_c² + a_t²).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q35",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A body of mass m is suspended from a ceiling by a string of length L and rotated in a horizontal circle (conical pendulum) of radius r. The tension in string is",
    "options": [
      "mg / cos θ",
      "mg cos θ",
      "mg sin θ",
      "mg / sin θ"
    ],
    "correctAnswer": 0,
    "explanation": "Resolving vertically: T cos θ = mg => T = mg / cos θ (where θ is semi-vertical angle).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q36",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "In the conical pendulum of length L and angle θ, the period of revolution is given by",
    "options": [
      "2π √(L/g)",
      "2π √(L cos θ / g)",
      "2π √(L sin θ / g)",
      "2π √(L tan θ / g)"
    ],
    "correctAnswer": 1,
    "explanation": "Radius r = L sin θ. T_time = 2π √(r / (g tan θ)) = 2π √((L sin θ) / (g sin θ / cos θ)) = 2π √(L cos θ / g).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q37",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A ball is thrown at angle θ. If the range R equals the maximum height H, then tan θ is equal to",
    "options": [
      "1",
      "2",
      "4",
      "1/4"
    ],
    "correctAnswer": 2,
    "explanation": "R = 4H cot θ. Setting R = H gives 1 = 4 cot θ => tan θ = 4.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q38",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "The maximum horizontal range of a gun on level ground is 16 km. If g = 10 m/s², the muzzle velocity of the shell must be",
    "options": [
      "200 m/s",
      "400 m/s",
      "800 m/s",
      "1600 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "R_max = u² / g => 16000 = u² / 10 => u² = 160000 => u = 400 m/s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q39",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A cyclist turns around a curve of radius 20 m at a speed of 14 m/s. The angle made by the cycle with the vertical is (g = 9.8 m/s²)",
    "options": [
      "30°",
      "45°",
      "60°",
      "75°"
    ],
    "correctAnswer": 1,
    "explanation": "tan θ = v² / (rg) = 14² / (20 × 9.8) = 196 / 196 = 1 => θ = 45°.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q40",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "A point on the rim of a disc of radius 0.5 m has a linear speed of 10 m/s. The angular speed of the disc is",
    "options": [
      "5 rad/s",
      "10 rad/s",
      "20 rad/s",
      "50 rad/s"
    ],
    "correctAnswer": 2,
    "explanation": "v = r ω => ω = v / r = 10 / 0.5 = 20 rad/s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q41",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "When a projectile reaches the ground, its vertical velocity is",
    "options": [
      "Equal and opposite to initial vertical velocity",
      "Zero",
      "Double the initial velocity",
      "Independent of initial velocity"
    ],
    "correctAnswer": 0,
    "explanation": "By symmetry of trajectory on level ground, v_y = -u_y = -u sin θ.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q42",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "A projectile is fired with velocity u = 10 m/s at 45°. Its speed when it is at half its maximum height is",
    "options": [
      "5√3 m/s",
      "5√2 m/s",
      "5 m/s",
      "10√2 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "v² = u² - 2g(H/2) = u² - gH. Since H = u² sin² 45° / (2g) = u² / (4g), v² = u² - g(u²/4g) = 3u²/4 => v = u√3/2 = 10√3/2 = 5√3 m/s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q43",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "The angular velocity of the hour hand of a standard clock is",
    "options": [
      "π / 1800 rad/s",
      "π / 3600 rad/s",
      "π / 21600 rad/s",
      "π / 43200 rad/s"
    ],
    "correctAnswer": 2,
    "explanation": "The hour hand completes 2π radians in 12 hours = 12 × 3600 s = 43200 s. ω = 2π / 43200 = π / 21600 rad/s.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q44",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Medium",
    "questionText": "If the speed of a particle in circular motion of radius R is doubled and radius is halved, the centripetal acceleration becomes",
    "options": [
      "2 times",
      "4 times",
      "8 times",
      "16 times"
    ],
    "correctAnswer": 2,
    "explanation": "a_c = v² / r. a'_c = (2v)² / (r/2) = 4v² / (r/2) = 8 (v²/r) = 8 a_c.",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  },
  {
    "id": "motion-2d-q45",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Motion in a Plane",
    "difficulty": "Easy",
    "questionText": "A stone tied to a string of length L is whirled in a vertical circle. The minimum speed at the highest point to prevent slacking of the string is",
    "options": [
      "√(gL)",
      "√(2gL)",
      "√(3gL)",
      "√(5gL)"
    ],
    "correctAnswer": 0,
    "explanation": "At top: T + mg = mv²/L. For minimum speed without slacking, T ≥ 0 => mg = mv_min²/L => v_min = √(gL).",
    "tags": [
      "Motion in a Plane",
      "2D Kinematics",
      "Projectile Motion"
    ]
  }
];

export const LAWS_OF_MOTION_QUESTIONS: Question[] = [
  {
    "id": "lom-q1",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A rocket with a lift-off mass 20,000 kg is blasted upwards with an initial acceleration of 5.0 m/s². The initial thrust (force) of the blast is (g = 10 m/s²)",
    "options": [
      "1.0 × 10⁵ N",
      "2.0 × 10⁵ N",
      "3.0 × 10⁵ N",
      "4.0 × 10⁵ N"
    ],
    "correctAnswer": 2,
    "explanation": "Thrust F = m(g + a) = 20000 × (10 + 5) = 20000 × 15 = 3.0 × 10⁵ N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q2",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A block of mass 2 kg is placed on a rough horizontal surface with coefficient of static friction μ_s = 0.4. If a horizontal force of 5 N is applied, the frictional force is (g = 10 m/s²)",
    "options": [
      "5 N",
      "8 N",
      "10 N",
      "20 N"
    ],
    "correctAnswer": 0,
    "explanation": "Maximum static friction f_max = μ_s mg = 0.4 × 2 × 10 = 8 N. Since applied force F = 5 N < f_max, the body remains at rest and static friction equals applied force = 5 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q3",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A body of mass 5 kg is suspended by a spring balance in an elevator. The reading of the balance when the elevator is descending with an acceleration of 2 m/s² is (g = 10 m/s²)",
    "options": [
      "60 N",
      "50 N",
      "40 N",
      "10 N"
    ],
    "correctAnswer": 2,
    "explanation": "Apparent weight N = m(g - a) = 5(10 - 2) = 5 × 8 = 40 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q4",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "Two masses m₁ = 4 kg and m₂ = 6 kg are connected by a light string passing over a frictionless pulley. The acceleration of the system is (g = 10 m/s²)",
    "options": [
      "2 m/s²",
      "4 m/s²",
      "5 m/s²",
      "10 m/s²"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration a = ((m₂ - m₁) / (m₁ + m₂)) g = ((6 - 4) / (6 + 4)) × 10 = (2 / 10) × 10 = 2 m/s².",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q5",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "In the above Atwood machine problem, the tension in the connecting string is",
    "options": [
      "24 N",
      "48 N",
      "50 N",
      "60 N"
    ],
    "correctAnswer": 1,
    "explanation": "Tension T = (2 m₁ m₂ g) / (m₁ + m₂) = (2 × 4 × 6 × 10) / (4 + 6) = 480 / 10 = 48 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q6",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A cricketer catches a ball of mass 150 g moving with velocity 20 m/s in 0.1 s. The average force exerted by the ball on his hands is",
    "options": [
      "15 N",
      "30 N",
      "45 N",
      "60 N"
    ],
    "correctAnswer": 1,
    "explanation": "Impulse J = Δp = m v = 0.15 kg × 20 m/s = 3.0 N·s. Force F = J / Δt = 3.0 / 0.1 = 30 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q7",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A block slides down an inclined plane of inclination 45° with uniform velocity. The coefficient of kinetic friction between the block and plane is",
    "options": [
      "0.5",
      "1.0",
      "1/√3",
      "√3"
    ],
    "correctAnswer": 1,
    "explanation": "For motion with constant velocity (zero acceleration) down an incline: mg sin θ = μ_k mg cos θ => μ_k = tan θ = tan 45° = 1.0.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q8",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A vehicle of mass m is moving on a circular road of radius R banked at angle θ. The maximum speed without skidding on a friction coefficient μ surface is",
    "options": [
      "√[gR (tan θ + μ) / (1 - μ tan θ)]",
      "√[gR (tan θ - μ) / (1 + μ tan θ)]",
      "√[gR tan θ]",
      "√[μ gR]"
    ],
    "correctAnswer": 0,
    "explanation": "Standard banking limit with friction gives v_max = √[gR (tan θ + μ) / (1 - μ tan θ)].",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q9",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A bird of mass 1 kg is sitting in a closed wire-mesh cage of mass 1.5 kg. If the bird flies with acceleration 2 m/s² inside the cage, the reading of the balance is",
    "options": [
      "1.5 kg-wt",
      "2.5 kg-wt",
      "2.7 kg-wt",
      "Depends on direction"
    ],
    "correctAnswer": 1,
    "explanation": "In a closed container, air circulation creates downward reaction equal to the bird's weight. The reading remains (1 + 1.5) = 2.5 kg-wt.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q10",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A machine gun fires a bullet of mass 40 g with velocity 1200 m/s. The man holding it can exert a maximum force of 144 N on the gun. How many bullets can he fire per second?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "F = n × (m v) => 144 = n × (0.040 × 1200) = n × 48 => n = 144 / 48 = 3 bullets per second.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q11",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "Action and reaction forces according to Newton's third law",
    "options": [
      "Act on the same body",
      "Act on different bodies",
      "Are in the same direction",
      "Cancel each other always"
    ],
    "correctAnswer": 1,
    "explanation": "Action and reaction always act simultaneously on two different interacting bodies, so they never cancel each other out on a single isolated body.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q12",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "The angle of friction θ and the angle of repose α on a rough inclined plane are related as",
    "options": [
      "θ = α",
      "θ = 2α",
      "θ = α / 2",
      "θ + α = 90°"
    ],
    "correctAnswer": 0,
    "explanation": "Both are defined by μ = tan θ = tan α, which implies angle of friction θ = angle of repose α.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q13",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A 10 kg block is placed on a 40 kg trolley. The coefficient of static friction between block and trolley is 0.3. The maximum acceleration of trolley for which block does not slip is (g = 10 m/s²)",
    "options": [
      "1 m/s²",
      "2 m/s²",
      "3 m/s²",
      "4 m/s²"
    ],
    "correctAnswer": 2,
    "explanation": "For no slipping, pseudo force on block must not exceed max static friction: m a_max = μ_s m g => a_max = μ_s g = 0.3 × 10 = 3 m/s².",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q14",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A force F = (6t) N acts on a body of mass 2 kg initially at rest. The velocity of the body at t = 3 s is",
    "options": [
      "9 m/s",
      "13.5 m/s",
      "18 m/s",
      "27 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "a = F / m = 6t / 2 = 3t m/s². v = ∫₀³ 3t dt = [3t²/2]₀³ = 3(9)/2 = 13.5 m/s.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q15",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "Newton's second law gives the measure of",
    "options": [
      "Acceleration",
      "Force",
      "Momentum",
      "Inertia"
    ],
    "correctAnswer": 1,
    "explanation": "Newton's second law F = dp/dt = ma quantitatively defines and measures the net external force.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q16",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A bullet of mass 10 g hits a sandbag with 1000 m/s and penetrates 5 cm before stopping. The average resistive force exerted by sand is",
    "options": [
      "1.0 × 10⁵ N",
      "2.0 × 10⁵ N",
      "5.0 × 10⁴ N",
      "1.0 × 10⁴ N"
    ],
    "correctAnswer": 0,
    "explanation": "v² - u² = 2as => 0 - 1000² = 2a(0.05) => a = -10⁶ / 0.1 = -10⁷ m/s². Force F = m|a| = 0.01 × 10⁷ = 1.0 × 10⁵ N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q17",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "Three blocks of masses 2 kg, 3 kg, and 5 kg in contact on a frictionless table are pushed by force 20 N from the 2 kg side. The contact force between 2 kg and 3 kg blocks is",
    "options": [
      "4 N",
      "8 N",
      "12 N",
      "16 N"
    ],
    "correctAnswer": 3,
    "explanation": "Total mass = 2 + 3 + 5 = 10 kg. Acceleration a = 20 / 10 = 2 m/s². Force pushing (3 + 5) kg is F_contact = (3 + 5) × a = 8 × 2 = 16 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q18",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "In the above system, the contact force between 3 kg and 5 kg blocks is",
    "options": [
      "5 N",
      "10 N",
      "15 N",
      "20 N"
    ],
    "correctAnswer": 1,
    "explanation": "Force on 5 kg block is F_23 = 5 × a = 5 × 2 = 10 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q19",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A body of mass 2 kg is sliding down an incline of angle 30° with acceleration 2 m/s². The force of friction acting on the body is (g = 10 m/s²)",
    "options": [
      "2 N",
      "4 N",
      "6 N",
      "10 N"
    ],
    "correctAnswer": 2,
    "explanation": "mg sin 30° - f = m a => 2(10)(0.5) - f = 2(2) => 10 - f = 4 => f = 6 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q20",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A spring balance is attached to the roof of an elevator. A man hangs his bag on the balance. The balance reads 49 N when elevator is stationary. If elevator moves downwards with acceleration 5 m/s², balance reads (g = 9.8 m/s²)",
    "options": [
      "24 N",
      "49 N",
      "74 N",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "m = 49 / 9.8 = 5 kg. Reading N = m(g - a) = 5(9.8 - 5.0) = 5 × 4.8 = 24 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q21",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "When a horse pulls a cart, the force that helps the horse to move forward is the force exerted by",
    "options": [
      "The cart on the horse",
      "The ground on the horse",
      "The ground on the cart",
      "The horse on the ground"
    ],
    "correctAnswer": 1,
    "explanation": "The horse pushes the ground backwards; by Newton's third law, the ground exerts an equal and opposite forward reaction force on the horse.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q22",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A ball of mass m strikes a rigid wall with speed v at angle θ with the normal and reflects with same speed and angle. The impulse imparted to the ball is",
    "options": [
      "2 m v cos θ",
      "2 m v sin θ",
      "m v cos θ",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "The component perpendicular to wall changes from +mv cos θ to -mv cos θ, giving Δp = 2 mv cos θ. Parallel component does not change.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q23",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A frame of reference attached to a freely falling body is",
    "options": [
      "Inertial frame",
      "Non-inertial frame",
      "Absolute frame",
      "Universal frame"
    ],
    "correctAnswer": 1,
    "explanation": "An accelerating reference frame has non-zero acceleration w.r.t inertial frames, so a freely falling body (accelerating at g) is a non-inertial frame.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q24",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "Pseudo force acts in",
    "options": [
      "Inertial frame only",
      "Non-inertial frame only",
      "Both frames",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "Pseudo force F_p = -m a_frame is a fictitious force introduced only in non-inertial (accelerating) reference frames to apply Newton's laws.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q25",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A mass of 1 kg is suspended by a thread. It is lifted up with acceleration 4.9 m/s² and then lowered with acceleration 4.9 m/s². The ratio of tensions in the two cases is (g = 9.8 m/s²)",
    "options": [
      "1 : 3",
      "3 : 1",
      "1 : 1",
      "2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "T₁ = m(g + a) = 1(9.8 + 4.9) = 14.7 N. T₂ = m(g - a) = 1(9.8 - 4.9) = 4.9 N. T₁ / T₂ = 14.7 / 4.9 = 3 : 1.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q26",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A uniform rope of length L and mass M is pulled on a smooth horizontal floor by force F. The tension in the rope at distance x from the pulled end is",
    "options": [
      "F (1 - x/L)",
      "F (x/L)",
      "F / 2",
      "F"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration a = F/M. Mass of remaining part of length (L - x) is M' = M(L - x)/L. Tension T = M' a = M((L - x)/L) (F/M) = F(1 - x/L).",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q27",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "Frictional force is a",
    "options": [
      "Conservative force",
      "Non-conservative force",
      "Central force",
      "Pseudo force"
    ],
    "correctAnswer": 1,
    "explanation": "Friction is non-conservative because work done against friction depends on path length and dissipates mechanical energy into heat.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q28",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "Static friction is always",
    "options": [
      "Equal to dynamic friction",
      "Greater than dynamic friction",
      "Self-adjusting",
      "Constant"
    ],
    "correctAnswer": 2,
    "explanation": "Static friction varies continuously from 0 up to its maximum limiting value (μ_s N) to balance the applied external tangential force.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q29",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass 10 kg is held against a vertical wall by applying horizontal force F. If μ = 0.5, minimum force F required to prevent slipping is (g = 10 m/s²)",
    "options": [
      "50 N",
      "100 N",
      "200 N",
      "500 N"
    ],
    "correctAnswer": 2,
    "explanation": "Vertical equilibrium: f_s = mg => μ N = mg => μ F = mg => F = mg / μ = (10 × 10) / 0.5 = 200 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q30",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "If the coefficient of friction is μ, the maximum angle of an inclined plane on which a body can rest without sliding down is",
    "options": [
      "sin⁻¹(μ)",
      "cos⁻¹(μ)",
      "tan⁻¹(μ)",
      "cot⁻¹(μ)"
    ],
    "correctAnswer": 2,
    "explanation": "Limiting equilibrium gives mg sin α = μ mg cos α => tan α = μ => α = tan⁻¹(μ).",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q31",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A conveyor belt moves horizontally at speed 2 m/s. A box is gently dropped on it. If μ = 0.4, time taken by box to stop slipping is (g = 10 m/s²)",
    "options": [
      "0.2 s",
      "0.5 s",
      "1.0 s",
      "2.0 s"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration of box a = μ g = 0.4 × 10 = 4 m/s². Time to attain belt velocity v = at => t = v / a = 2 / 4 = 0.5 s.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q32",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "In the above problem, the distance covered by the box on the belt before slipping stops is",
    "options": [
      "0.25 m",
      "0.50 m",
      "1.0 m",
      "2.0 m"
    ],
    "correctAnswer": 1,
    "explanation": "s = v² / (2a) = 2² / (2 × 4) = 4 / 8 = 0.50 m.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q33",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass m is placed on an incline of angle θ. The force required to push the block up the incline with constant speed is (frictionless plane)",
    "options": [
      "mg sin θ",
      "mg cos θ",
      "mg tan θ",
      "mg"
    ],
    "correctAnswer": 0,
    "explanation": "Parallel component of gravity is mg sin θ. To move up at constant speed, applied force F = mg sin θ.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q34",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A body of mass 3 kg moves with acceleration a = (2î + 3ĵ) m/s². The magnitude of net force acting on it is",
    "options": [
      "6 N",
      "9 N",
      "3√13 N",
      "15 N"
    ],
    "correctAnswer": 2,
    "explanation": "|a| = √(2² + 3²) = √13 m/s². F = m |a| = 3√13 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q35",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A force of 50 N acts on a body of mass 10 kg for 2 seconds. The change in momentum of the body is",
    "options": [
      "25 N·s",
      "50 N·s",
      "100 N·s",
      "200 N·s"
    ],
    "correctAnswer": 2,
    "explanation": "Change in momentum Δp = Impulse = F × Δt = 50 N × 2 s = 100 N·s.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q36",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A man of mass 60 kg stands on a weighing scale in a lift moving upwards with uniform velocity 4 m/s. The reading of the scale is (g = 10 m/s²)",
    "options": [
      "Zero",
      "240 N",
      "600 N",
      "840 N"
    ],
    "correctAnswer": 2,
    "explanation": "When velocity is uniform, acceleration a = 0. Reading N = m(g + 0) = 60 × 10 = 600 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q37",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A monkey of mass 20 kg climbs up a rope that can withstand a maximum tension of 300 N. The maximum acceleration with which monkey can climb safely is (g = 10 m/s²)",
    "options": [
      "2 m/s²",
      "5 m/s²",
      "10 m/s²",
      "15 m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "T_max = m(g + a_max) => 300 = 20(10 + a) => 15 = 10 + a => a = 5 m/s².",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q38",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "If the monkey climbs down the rope, the tension in the rope is",
    "options": [
      "T = m(g + a)",
      "T = m(g - a)",
      "T = mg",
      "T = ma"
    ],
    "correctAnswer": 1,
    "explanation": "Accelerating downwards: mg - T = ma => T = m(g - a).",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q39",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A 100 kg gun fires a 1 kg shell at 500 m/s. The recoil speed of the gun is",
    "options": [
      "2 m/s",
      "5 m/s",
      "10 m/s",
      "50 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "By conservation of linear momentum: M V + m v = 0 => V = -(m v)/M = -(1 × 500) / 100 = -5 m/s.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q40",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "The momentum of a body of mass 2 kg having kinetic energy 36 J is",
    "options": [
      "6 kg·m/s",
      "12 kg·m/s",
      "18 kg·m/s",
      "72 kg·m/s"
    ],
    "correctAnswer": 1,
    "explanation": "p = √(2 m K) = √(2 × 2 × 36) = √144 = 12 kg·m/s.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q41",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A spring balance reads 10 kg when a mass is placed on it. If the whole setup falls freely under gravity, the reading on the balance becomes",
    "options": [
      "Zero",
      "5 kg",
      "10 kg",
      "20 kg"
    ],
    "correctAnswer": 0,
    "explanation": "During free fall, effective acceleration g_eff = g - g = 0, so apparent weight and reading is Zero.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q42",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is moving in a circle of radius r with constant speed v. The force acting on the particle is directed towards the centre and has magnitude",
    "options": [
      "m v² / r",
      "m v / r²",
      "m v² r",
      "m v / r"
    ],
    "correctAnswer": 0,
    "explanation": "Centripetal force is given by F = m v² / r acting radially inwards.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q43",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Easy",
    "questionText": "A block is kept on a frictionless horizontal surface. If two forces 10 N east and 10 N north act on it simultaneously, the net acceleration of mass 5 kg is",
    "options": [
      "2 m/s²",
      "2√2 m/s² at 45° N-E",
      "4 m/s²",
      "20 m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "Net force F = √(10² + 10²) = 10√2 N at 45° North-East. Acceleration a = F/m = 10√2 / 5 = 2√2 m/s².",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q44",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Medium",
    "questionText": "The coefficient of static friction is always",
    "options": [
      "Equal to coefficient of kinetic friction",
      "Greater than coefficient of kinetic friction",
      "Less than coefficient of kinetic friction",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "Because surface asperities interlock when stationary, breaking the bond requires more force: μ_s > μ_k always.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  },
  {
    "id": "lom-q45",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion & Friction",
    "difficulty": "Hard",
    "questionText": "A body of mass 1 kg is thrown upwards with velocity 20 m/s. It momentarily comes to rest after 18 m. The air resistance force acting on it is (g = 10 m/s²)",
    "options": [
      "1.1 N",
      "2.0 N",
      "3.0 N",
      "5.0 N"
    ],
    "correctAnswer": 0,
    "explanation": "v² - u² = -2a_net h => 0 - 20² = -2 a_net (18) => a_net = 400 / 36 = 11.11 m/s². a_net = g + a_air => a_air = 11.11 - 10 = 1.11 m/s². Force = m a_air = 1 × 1.11 ≈ 1.1 N.",
    "tags": [
      "Laws of Motion",
      "Laws of Motion & Friction"
    ]
  }
];

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

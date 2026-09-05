import { Question } from '../types';

export const OSCILLATIONS_SHM_QUESTIONS: Question[] = [
  {
    "id": "shm-q1",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "A particle executes simple harmonic motion with amplitude A and angular frequency ω. The maximum velocity of the particle is",
    "options": [
      "A ω",
      "A ω²",
      "A / ω",
      "A ω / 2"
    ],
    "correctAnswer": 0,
    "explanation": "v = ω √(A² - x²). Maximum velocity occurs at the mean position (x = 0): v_max = A ω.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q2",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The maximum acceleration of the particle in the above SHM occurs at",
    "options": [
      "Mean position (x = 0)",
      "Extreme positions (x = ±A)",
      "x = A / 2",
      "x = A / √2"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration a = -ω² x. |a_max| = ω² A at the extreme positions (x = ±A).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q3",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "At what displacement from the mean position are the kinetic energy and potential energy of an SHM oscillator equal?",
    "options": [
      "x = A / 2",
      "x = A / √2",
      "x = A / √3",
      "x = A"
    ],
    "correctAnswer": 1,
    "explanation": "K = (1/2)mω²(A² - x²) and U = (1/2)mω² x². K = U => A² - x² = x² => 2x² = A² => x = A / √2.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q4",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The time period of a simple pendulum of length L at a place with acceleration due to gravity g is",
    "options": [
      "2π √(L / g)",
      "2π √(g / L)",
      "π √(L / g)",
      "2π √(2L / g)"
    ],
    "correctAnswer": 0,
    "explanation": "Standard simple pendulum formula for small amplitude oscillations: T = 2π √(L / g).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q5",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "If the length of a simple pendulum is increased by 44%, its time period will increase by",
    "options": [
      "20%",
      "44%",
      "22%",
      "10%"
    ],
    "correctAnswer": 0,
    "explanation": "T ∝ √L. T' = √(1.44 L) = 1.20 T. Percentage increase = (1.20 - 1.0) × 100% = 20%.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q6",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A spring-mass system with spring constant k and mass m has time period T = 2π √(m/k). If the mass is quadrupled, the time period becomes",
    "options": [
      "T / 2",
      "2 T",
      "4 T",
      "T / 4"
    ],
    "correctAnswer": 1,
    "explanation": "T ∝ √m. If m' = 4m, T' = √(4) T = 2 T.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q7",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "Two springs of force constants k₁ and k₂ are connected in series with mass m. The frequency of oscillation ν is",
    "options": [
      "(1 / 2π) √[(k₁ + k₂) / m]",
      "(1 / 2π) √[k₁ k₂ / (m (k₁ + k₂))]",
      "(1 / 2π) √[m (k₁ + k₂) / (k₁ k₂)]",
      "(1 / 2π) √[2k₁ k₂ / m]"
    ],
    "correctAnswer": 1,
    "explanation": "k_eq = k₁ k₂ / (k₁ + k₂). Frequency ν = (1 / 2π) √(k_eq / m) = (1 / 2π) √[k₁ k₂ / (m(k₁ + k₂))].",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q8",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The total mechanical energy of a particle of mass m executing SHM with amplitude A and frequency ν is",
    "options": [
      "2 π² m ν² A²",
      "4 π² m ν² A²",
      "(1/2) m ν² A²",
      "π² m ν² A²"
    ],
    "correctAnswer": 0,
    "explanation": "E = (1/2) m ω² A² = (1/2) m (2π ν)² A² = 2 π² m ν² A².",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q9",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "The phase difference between displacement x(t) = A sin(ωt) and velocity v(t) = Aω cos(ωt) in SHM is",
    "options": [
      "0 rad",
      "π / 2 rad (90°)",
      "π rad (180°)",
      "3π / 2 rad"
    ],
    "correctAnswer": 1,
    "explanation": "v(t) = Aω sin(ωt + π/2). Velocity leads displacement by a phase angle of π/2 radians (90°).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q10",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The phase difference between displacement x(t) and acceleration a(t) = -ω² x(t) in SHM is",
    "options": [
      "0 rad",
      "π / 2 rad",
      "π rad (180°)",
      "2π rad"
    ],
    "correctAnswer": 2,
    "explanation": "a(t) = ω² A sin(ωt + π). Acceleration is in opposite phase (π radians or 180°) to displacement.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q11",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "A particle starts from mean position with amplitude A and time period T. The time taken to reach x = A/2 is",
    "options": [
      "T / 4",
      "T / 6",
      "T / 8",
      "T / 12"
    ],
    "correctAnswer": 3,
    "explanation": "x(t) = A sin(ωt) => A/2 = A sin(2π t / T) => sin(2π t / T) = 1/2 => 2π t / T = π/6 => t = T / 12.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q12",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "In the above SHM, the time taken to move from x = A/2 to the extreme position x = A is",
    "options": [
      "T / 4",
      "T / 6",
      "T / 8",
      "T / 12"
    ],
    "correctAnswer": 1,
    "explanation": "Time from 0 to A is T/4. Time from A/2 to A = T/4 - T/12 = (3T - T)/12 = 2T/12 = T / 6.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q13",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "A simple pendulum is taken inside an artificial satellite orbiting Earth. Its time period will be",
    "options": [
      "Zero",
      "Infinite",
      "Same as on Earth",
      "2 s"
    ],
    "correctAnswer": 1,
    "explanation": "Inside an orbiting satellite, effective gravity g_eff = 0. T = 2π √(L / 0) = Infinite (the pendulum does not oscillate).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q14",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "If a simple pendulum is mounted inside a lift ascending with acceleration 'a', its time period is",
    "options": [
      "2π √[L / (g + a)]",
      "2π √[L / (g - a)]",
      "2π √(L / g)",
      "2π √[L / √(g² + a²)]"
    ],
    "correctAnswer": 0,
    "explanation": "Effective gravity inside upward accelerating lift is g_eff = g + a => T = 2π √[L / (g + a)] (time period decreases).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q15",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "If the lift accelerates horizontally with acceleration 'a', the time period of the pendulum is",
    "options": [
      "2π √[L / (g + a)]",
      "2π √[L / (g - a)]",
      "2π √[L / √(g² + a²)]",
      "2π √(L / a)"
    ],
    "correctAnswer": 2,
    "explanation": "Effective gravity is the vector resultant g_eff = √(g² + a²) => T = 2π √[L / √(g² + a²)].",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q16",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The frequency of oscillation of kinetic energy in an SHM oscillator of frequency ν is",
    "options": [
      "ν",
      "2 ν",
      "ν / 2",
      "4 ν"
    ],
    "correctAnswer": 1,
    "explanation": "K(t) = (1/2)m A² ω² cos²(ωt) = (1/4)m A² ω² (1 + cos 2ωt). The angular frequency of KE is 2ω, so its frequency is 2ν.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q17",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "The average kinetic energy over one full cycle of SHM is equal to",
    "options": [
      "Total Energy E",
      "E / 2",
      "E / 4",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "Average of cos²(ωt) over a full cycle is 1/2, so <K> = (1/2) E and <U> = (1/2) E.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q18",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A seconds pendulum has a time period of exactly",
    "options": [
      "1 s",
      "2 s",
      "0.5 s",
      "4 s"
    ],
    "correctAnswer": 1,
    "explanation": "A seconds pendulum takes 1 second for each half-swing (tick from one side to other), giving full period T = 2.0 s (length L ≈ 0.993 m ≈ 1 m on Earth).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q19",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "A tunnel is dug across the Earth through its centre. A ball dropped into the tunnel will execute SHM with time period (R = 6400 km, g = 9.8 m/s²)",
    "options": [
      "42.3 minutes",
      "84.6 minutes",
      "24 hours",
      "Infinite"
    ],
    "correctAnswer": 1,
    "explanation": "Restoring force F = -(mg/R) x => ω = √(g/R). Time period T = 2π √(R/g) = 2π √(6.4 × 10⁶ / 9.8) ≈ 5060 s ≈ 84.6 minutes.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q20",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A body of mass 0.5 kg oscillates with SHM equation x = 5 sin(4t + π/3) m. The force constant k of the oscillator is",
    "options": [
      "2 N/m",
      "4 N/m",
      "8 N/m",
      "16 N/m"
    ],
    "correctAnswer": 2,
    "explanation": "ω = 4 rad/s. k = m ω² = 0.5 × 4² = 0.5 × 16 = 8 N/m.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q21",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "Two SHMs along same line are given by x₁ = A sin(ωt) and x₂ = A sin(ωt + π/3). The amplitude of the resultant motion is",
    "options": [
      "A",
      "A √2",
      "A √3",
      "2 A"
    ],
    "correctAnswer": 2,
    "explanation": "R = √(A₁² + A₂² + 2A₁A₂ cos φ) = √(A² + A² + 2A² cos 60°) = √(2A² + A²) = √(3A²) = A √3.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q22",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "Two mutually perpendicular SHMs x = A sin(ωt) and y = A sin(ωt + π/2) combine to form a path that is",
    "options": [
      "A straight line at 45°",
      "A circle",
      "An ellipse",
      "A parabola"
    ],
    "correctAnswer": 1,
    "explanation": "x = A sin(ωt) and y = A cos(ωt) => x² + y² = A²(sin²ωt + cos²ωt) = A², which is the equation of a circle of radius A.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q23",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "If phase difference φ = π (180°) in the above perpendicular SHMs (x = A sin ωt, y = A sin(ωt + π) = -A sin ωt), the trajectory is",
    "options": [
      "A straight line with slope -1 (y = -x)",
      "A circle",
      "An ellipse",
      "A figure eight"
    ],
    "correctAnswer": 0,
    "explanation": "y = -x, which is a straight line through the origin in the 2nd and 4th quadrants.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q24",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "In damped harmonic motion, the amplitude of oscillation decays with time t as",
    "options": [
      "e^(+bt)",
      "e^(-γ t)",
      "1 / t",
      "t²"
    ],
    "correctAnswer": 1,
    "explanation": "Under viscous damping force F = -b v, the displacement envelope decays exponentially: A(t) = A₀ e^(-b t / 2m).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q25",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "Resonance occurs in forced oscillations when the driving frequency is",
    "options": [
      "Much smaller than natural frequency",
      "Much larger than natural frequency",
      "Equal to the natural frequency of the oscillator",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "Resonance is the phenomenon of maximum amplitude when the frequency of the external periodic driving force matches the natural frequency of the system (ω_d = ω₀).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q26",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A U-tube containing a liquid column of total length L is disturbed. The liquid column oscillates with time period",
    "options": [
      "2π √(L / g)",
      "2π √(L / 2g)",
      "2π √(2L / g)",
      "π √(L / g)"
    ],
    "correctAnswer": 1,
    "explanation": "When liquid is displaced by y in one arm, restoring force F = -2A ρ g y. Mass M = A L ρ. a = - (2g/L) y => ω = √(2g/L) => T = 2π √(L / 2g).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q27",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "A mass m suspended from a spring of stiffness k oscillates with frequency f. If the spring is cut into 4 equal parts and same mass is attached to one part, new frequency is",
    "options": [
      "f / 2",
      "2 f",
      "4 f",
      "f / 4"
    ],
    "correctAnswer": 1,
    "explanation": "Cutting spring into 4 parts increases stiffness of each part to k' = 4k. f' = (1/2π)√(k'/m) = (1/2π)√(4k/m) = 2 f.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q28",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A solid cylinder of mass M and area A floats vertically in liquid of density ρ. If depressed slightly, its period of oscillation is",
    "options": [
      "2π √[M / (A ρ g)]",
      "2π √[A ρ g / M]",
      "2π √[M g / (A ρ)]",
      "2π √[M / (ρ g)]"
    ],
    "correctAnswer": 0,
    "explanation": "Restoring buoyant force F = -A ρ g y => k = A ρ g. Time period T = 2π √(M / k) = 2π √[M / (A ρ g)].",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q29",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "The potential energy of an SHM oscillator is U(x) = k x² / 2. The restoring force is",
    "options": [
      "-k x",
      "+k x",
      "-k x²",
      "+k x / 2"
    ],
    "correctAnswer": 0,
    "explanation": "F = -dU/dx = -d/dx(1/2 k x²) = -k x.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q30",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A particle executing SHM has velocities v₁ and v₂ at displacements x₁ and x₂. Its angular frequency ω is",
    "options": [
      "√[(v₁² - v₂²) / (x₂² - x₁²)]",
      "√[(v₁² + v₂²) / (x₁² + x₂²)]",
      "√[(x₁² - x₂²) / (v₁² - v₂²)]",
      "(v₁ - v₂) / (x₂ - x₁)"
    ],
    "correctAnswer": 0,
    "explanation": "v₁² = ω²(A² - x₁²) and v₂² = ω²(A² - x₂²). Subtracting gives v₁² - v₂² = ω²(x₂² - x₁²) => ω = √[(v₁² - v₂²) / (x₂² - x₁²)].",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q31",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "In the above problem, the amplitude A of the SHM is",
    "options": [
      "√[(v₁² x₂² - v₂² x₁²) / (v₁² - v₂²)]",
      "√[(v₁² - v₂²) / (x₂² - x₁²)]",
      "(v₁ x₂ - v₂ x₁) / (v₁ - v₂)",
      "√(x₁² + x₂²)"
    ],
    "correctAnswer": 0,
    "explanation": "Solving for A gives A = √[(v₁² x₂² - v₂² x₁²) / (v₁² - v₂²)].",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q32",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "When a mass m is connected to two identical springs of constant k in parallel, the time period is",
    "options": [
      "2π √(m / 2k)",
      "2π √(2m / k)",
      "2π √(m / k)",
      "4π √(m / k)"
    ],
    "correctAnswer": 0,
    "explanation": "In parallel k_eq = 2k => T = 2π √(m / 2k).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q33",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "When the mass is connected to two identical springs in series, the time period is",
    "options": [
      "2π √(m / 2k)",
      "2π √(2m / k)",
      "2π √(m / k)",
      "π √(m / k)"
    ],
    "correctAnswer": 1,
    "explanation": "In series k_eq = k/2 => T = 2π √(m / (k/2)) = 2π √(2m / k).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q34",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "A body of mass 1 kg is executing SHM given by x = 6 cos(100t + π/4) cm. The maximum kinetic energy is",
    "options": [
      "18 J",
      "180 J",
      "1.8 J",
      "0.18 J"
    ],
    "correctAnswer": 0,
    "explanation": "A = 0.06 m, ω = 100 rad/s. K_max = (1/2) m A² ω² = (1/2)(1)(0.06²)(100²) = (1/2)(0.0036)(10000) = 18 J.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q35",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "A spring with mass m attached has period T. If another identical spring is connected in parallel with the first, the new period is",
    "options": [
      "T / √2",
      "T √2",
      "2 T",
      "T / 2"
    ],
    "correctAnswer": 0,
    "explanation": "k' = 2k => T' = 2π √(m/2k) = T / √2.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q36",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The displacement of a particle executing SHM is x = 3 sin(2t) + 4 cos(2t). The amplitude of oscillation is",
    "options": [
      "3",
      "4",
      "5",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "A = √(3² + 4²) = √25 = 5.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q37",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "The time period of a simple pendulum of infinite length (equal to Earth's radius R = 6400 km) is",
    "options": [
      "84.6 minutes",
      "Infinity",
      "24 hours",
      "42.3 minutes"
    ],
    "correctAnswer": 0,
    "explanation": "For a very long pendulum T = 2π √[ 1 / (g (1/L + 1/R)) ]. When L -> ∞, T = 2π √(R/g) ≈ 84.6 minutes.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q38",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The motion of a torsional pendulum is described by torque equation τ = -C θ. Its time period is",
    "options": [
      "2π √(I / C)",
      "2π √(C / I)",
      "2π √(I C)",
      "2π I / C"
    ],
    "correctAnswer": 0,
    "explanation": "T = 2π √(I / C), where I is moment of inertia and C is torsional restoring constant per unit twist.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q39",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "A simple harmonic oscillator has amplitude 0.05 m and time period 0.2 s. The maximum acceleration is",
    "options": [
      "5 π² m/s²",
      "10 π² m/s²",
      "2.5 π² m/s²",
      "π² m/s²"
    ],
    "correctAnswer": 0,
    "explanation": "ω = 2π / T = 2π / 0.2 = 10π rad/s. a_max = A ω² = 0.05 × (10π)² = 0.05 × 100π² = 5 π² m/s².",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q40",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The restoring force in simple harmonic motion is strictly proportional to",
    "options": [
      "Displacement and directed towards mean position",
      "Velocity",
      "Square of displacement",
      "Time"
    ],
    "correctAnswer": 0,
    "explanation": "Fundamental definition of SHM: F = -k x (force is directly proportional to displacement and always directed towards equilibrium).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q41",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "At what displacement x is the velocity of an SHM particle equal to half of its maximum velocity?",
    "options": [
      "x = A / 2",
      "x = A √3 / 2",
      "x = A / √2",
      "x = A / 4"
    ],
    "correctAnswer": 1,
    "explanation": "v = ω √(A² - x²) = (1/2) v_max = (1/2) A ω => √(A² - x²) = A/2 => A² - x² = A²/4 => x² = 3A²/4 => x = A √3 / 2.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q42",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The velocity-displacement (v-x) graph of a particle in SHM is",
    "options": [
      "A circle (when scaled) or an ellipse",
      "A straight line",
      "A parabola",
      "A hyperbola"
    ],
    "correctAnswer": 0,
    "explanation": "v² / (A² ω²) + x² / A² = 1, which represents an ellipse in the (x, v) phase plane (circle if normalized).",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q43",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Easy",
    "questionText": "The acceleration-displacement (a-x) graph of a particle in SHM is",
    "options": [
      "A straight line passing through origin with negative slope (-ω²)",
      "A parabola",
      "A circle",
      "A horizontal line"
    ],
    "correctAnswer": 0,
    "explanation": "a = -ω² x is the equation of a straight line y = m x with negative slope m = -ω² passing through the origin.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q44",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Medium",
    "questionText": "The potential energy of a simple harmonic oscillator at extreme position is equal to",
    "options": [
      "Total mechanical energy E",
      "Zero",
      "E / 2",
      "2 E"
    ],
    "correctAnswer": 0,
    "explanation": "At x = ±A, v = 0 => K = 0, so total mechanical energy is entirely potential energy: U_max = (1/2) k A² = E.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  },
  {
    "id": "shm-q45",
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "Oscillations (Simple Harmonic Motion)",
    "difficulty": "Hard",
    "questionText": "Which of the following functions represents simple harmonic motion?",
    "options": [
      "sin(ωt) - cos(ωt)",
      "sin²(ωt)",
      "e^(-ωt)",
      "log(ωt)"
    ],
    "correctAnswer": 0,
    "explanation": "sin(ωt) - cos(ωt) = √2 sin(ωt - π/4) satisfies d²x/dt² = -ω² x, whereas sin²(ωt) contains a constant term (shifted mean) and higher harmonics.",
    "tags": [
      "Oscillations",
      "Oscillations (Simple Harmonic Motion)"
    ]
  }
];

export const WAVES_ACOUSTICS_QUESTIONS: Question[] = [
  {
    "id": "wav-q1",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "A transverse harmonic wave on a string is described by y(x, t) = 3.0 sin(36t + 0.018x + π/4) cm. The direction of wave propagation is",
    "options": [
      "Along +x direction",
      "Along -x direction",
      "Along +y direction",
      "Along -y direction"
    ],
    "correctAnswer": 1,
    "explanation": "Since the signs of ωt and kx terms are identical (+36t and +0.018x), the wave propagates in the negative x-direction (-x).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q2",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The speed of the wave in the above problem is",
    "options": [
      "20 m/s",
      "2000 cm/s (20 m/s)",
      "200 m/s",
      "2 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "v = ω / k = 36 / 0.018 = 2000 cm/s = 20 m/s.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q3",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "Speed of a transverse wave on a stretched string of tension T and mass per unit length μ is",
    "options": [
      "√(T / μ)",
      "√(μ / T)",
      "T / μ",
      "T · μ"
    ],
    "correctAnswer": 0,
    "explanation": "v = √(T / μ).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q4",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Newton's formula for the speed of sound in air was corrected by Laplace by introducing the adiabatic factor γ because",
    "options": [
      "Compression and rarefaction occur so rapidly that no heat exchange takes place (adiabatic)",
      "Sound waves are transverse",
      "Air is a poor conductor",
      "Temperature remains constant"
    ],
    "correctAnswer": 0,
    "explanation": "Laplace recognized that rapid pressure fluctuations in sound waves occur under adiabatic conditions (dQ = 0), yielding v = √(γ P / ρ).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q5",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "The fundamental frequency of a closed organ pipe of length L (closed at one end) is",
    "options": [
      "v / (4L)",
      "v / (2L)",
      "v / L",
      "2v / L"
    ],
    "correctAnswer": 0,
    "explanation": "For a closed organ pipe, λ₁ = 4L => Fundamental frequency f₁ = v / (4L).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q6",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The fundamental frequency of an open organ pipe of length L (open at both ends) is",
    "options": [
      "v / (4L)",
      "v / (2L)",
      "v / L",
      "2v / L"
    ],
    "correctAnswer": 1,
    "explanation": "For an open organ pipe, λ₁ = 2L => Fundamental frequency f₁ = v / (2L).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q7",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "An open organ pipe produces harmonics that are",
    "options": [
      "Only odd harmonics",
      "Only even harmonics",
      "All harmonics (both even and odd: 1f, 2f, 3f...)",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "An open pipe supports all integer harmonics: f_n = n (v / 2L) for n = 1, 2, 3, 4...",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q8",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "A closed organ pipe produces harmonics that are",
    "options": [
      "Only odd harmonics (1f, 3f, 5f...)",
      "All harmonics",
      "Only even harmonics",
      "Continuous"
    ],
    "correctAnswer": 0,
    "explanation": "A closed pipe produces only odd harmonics: f_n = (2n - 1)(v / 4L) for n = 1, 2, 3...",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q9",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "Beat frequency produced by two sound sources of frequencies f₁ and f₂ is equal to",
    "options": [
      "f₁ + f₂",
      "|f₁ - f₂|",
      "(f₁ + f₂) / 2",
      "√(f₁ f₂)"
    ],
    "correctAnswer": 1,
    "explanation": "Beat frequency f_beat = |f₁ - f₂| is the number of intensity maxima heard per second.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q10",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Doppler effect in sound: when an observer moves towards a stationary source with velocity v_o (speed of sound v), the observed frequency f' is",
    "options": [
      "f (v + v_o) / v",
      "f (v - v_o) / v",
      "f v / (v + v_o)",
      "f v / (v - v_o)"
    ],
    "correctAnswer": 0,
    "explanation": "f' = f [(v + v_o) / v], which is strictly greater than the source frequency f.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q11",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "When a sound source moves towards a stationary observer with speed v_s, the apparent frequency is",
    "options": [
      "f v / (v - v_s)",
      "f v / (v + v_s)",
      "f (v - v_s) / v",
      "f (v + v_s) / v"
    ],
    "correctAnswer": 0,
    "explanation": "f' = f [v / (v - v_s)]. The perceived pitch rises as wavefronts are compressed in front of the moving source.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q12",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The distance between two consecutive nodes (or consecutive antinodes) in a standing wave is",
    "options": [
      "λ",
      "λ / 2",
      "λ / 4",
      "2 λ"
    ],
    "correctAnswer": 1,
    "explanation": "Distance between adjacent nodes is λ/2; distance between a node and adjacent antinode is λ/4.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q13",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "In a stationary (standing) wave, energy is",
    "options": [
      "Transmitted continuously in forward direction",
      "Confined between nodes and not transmitted",
      "Lost into space",
      "Transmitted in reverse direction"
    ],
    "correctAnswer": 1,
    "explanation": "Standing waves are formed by superposition of two identical counter-propagating waves; energy remains localized between nodes and does not propagate.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q14",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "A tuning fork A produces 4 beats/s with another fork B of frequency 256 Hz. When fork A is loaded with a little wax, beat frequency decreases to 2 beats/s. The original frequency of fork A was",
    "options": [
      "252 Hz",
      "260 Hz",
      "258 Hz",
      "254 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "Possible frequencies for A: 256 ± 4 = 260 Hz or 252 Hz. Waxing lowers the frequency. If A = 260 Hz, waxing reduces it to e.g. 258 Hz, lowering beats to |258 - 256| = 2. Hence original frequency of A was 260 Hz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q15",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "If the tension in a stretched string is quadrupled, the speed of transverse waves on it",
    "options": [
      "Doubles",
      "Halves",
      "Becomes 4 times",
      "Remains unchanged"
    ],
    "correctAnswer": 0,
    "explanation": "v = √(T/μ). If T' = 4T, v' = √(4) v = 2 v.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q16",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Sound waves in air cannot undergo which of the following wave phenomena?",
    "options": [
      "Interference",
      "Diffraction",
      "Refraction",
      "Polarization"
    ],
    "correctAnswer": 3,
    "explanation": "Sound waves in air are longitudinal waves (oscillations along the direction of propagation) and therefore cannot be polarized (polarization requires transverse vibrations).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q17",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "The equation of a standing wave on a string fixed at both ends is y = 2A sin(kx) cos(ωt). The nodes occur at positions x equal to",
    "options": [
      "n λ / 2 (where n = 0, 1, 2...)",
      "(2n + 1) λ / 4",
      "n λ / 4",
      "n λ"
    ],
    "correctAnswer": 0,
    "explanation": "Nodes occur where amplitude 2A sin(kx) = 0 => kx = nπ => (2π/λ)x = nπ => x = n λ / 2.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q18",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The antinodes in the above standing wave occur at positions x equal to",
    "options": [
      "(2n + 1) λ / 4",
      "n λ / 2",
      "n λ",
      "2n λ"
    ],
    "correctAnswer": 0,
    "explanation": "Antinodes occur where |sin(kx)| = 1 => kx = (2n + 1)π/2 => x = (2n + 1) λ / 4.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q19",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "A train blowing a whistle of frequency 600 Hz approaches a station at 30 m/s. If speed of sound is 330 m/s, frequency heard by observer at station is",
    "options": [
      "550 Hz",
      "600 Hz",
      "660 Hz",
      "700 Hz"
    ],
    "correctAnswer": 2,
    "explanation": "f' = f [v / (v - v_s)] = 600 [ 330 / (330 - 30) ] = 600 [ 330 / 300 ] = 600 × 1.1 = 660 Hz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q20",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The speed of sound in a gas is v. If the pressure of the gas is doubled at constant temperature, the speed of sound",
    "options": [
      "Doubles",
      "Halves",
      "Remains unchanged",
      "Becomes 4 times"
    ],
    "correctAnswer": 2,
    "explanation": "v = √(γ P / ρ) = √(γ R T / M). At constant temperature T, speed of sound is completely independent of pressure changes (P/ρ = const).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q21",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "The loudness of sound depends primarily on its",
    "options": [
      "Frequency",
      "Wavelength",
      "Amplitude (Intensity)",
      "Speed"
    ],
    "correctAnswer": 2,
    "explanation": "Loudness is subjective sensation proportional to the logarithm of sound intensity, which depends on the square of amplitude (I ∝ A²).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q22",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The pitch of a sound note depends on its",
    "options": [
      "Frequency",
      "Amplitude",
      "Wave velocity",
      "Overtones"
    ],
    "correctAnswer": 0,
    "explanation": "Pitch is the acoustic perception of frequency; higher frequency corresponds to higher pitch (shrillness).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q23",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "The quality (timbre) of a sound note enables us to distinguish between two notes of same pitch and loudness produced by different instruments. Quality depends on",
    "options": [
      "Fundamental frequency only",
      "Number and relative intensities of overtones (harmonics)",
      "Amplitude",
      "Speed in air"
    ],
    "correctAnswer": 1,
    "explanation": "Timbre/quality is determined by the harmonic spectrum and overtone wave profile.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q24",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Intensity of a spherical wave spreading out from a point source in an isotropic medium varies with distance r as",
    "options": [
      "1 / r",
      "1 / r²",
      "1 / r³",
      "Independent of r"
    ],
    "correctAnswer": 1,
    "explanation": "Power P is conserved across spherical wavefronts of area 4π r², so I = P / (4π r²) ∝ 1 / r² (Inverse Square Law).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q25",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "Sound level in decibels (dB) for intensity I is defined as",
    "options": [
      "10 log₁₀(I / I₀)",
      "log₁₀(I / I₀)",
      "20 log₁₀(I / I₀)",
      "10 ln(I / I₀)"
    ],
    "correctAnswer": 0,
    "explanation": "Decibel level β = 10 log₁₀(I / I₀), where I₀ = 10⁻¹² W/m² is the threshold of human hearing at 1 kHz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q26",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "If the sound intensity is increased by 100 times, the sound level in decibels increases by",
    "options": [
      "10 dB",
      "20 dB",
      "30 dB",
      "100 dB"
    ],
    "correctAnswer": 1,
    "explanation": "Δβ = 10 log₁₀(100) = 10 × 2 = 20 dB.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q27",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "Two sound waves of intensities I and 4I interfere. The maximum and minimum intensities are",
    "options": [
      "5I and 3I",
      "9I and I",
      "4I and I",
      "25I and 9I"
    ],
    "correctAnswer": 1,
    "explanation": "I_max = (√I₁ + √I₂)² = (√I + √4I)² = (√I + 2√I)² = (3√I)² = 9I. I_min = (√4I - √I)² = (2√I - √I)² = (√I)² = I.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q28",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "A pipe open at both ends has length 50 cm. If speed of sound is 340 m/s, its second harmonic frequency is",
    "options": [
      "340 Hz",
      "680 Hz",
      "170 Hz",
      "510 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "f₁ = v / (2L) = 340 / (2 × 0.50) = 340 Hz. Second harmonic f₂ = 2 f₁ = 2 × 340 = 680 Hz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q29",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "A pipe closed at one end has fundamental frequency 250 Hz. The frequency of its third harmonic (first overtone) is",
    "options": [
      "500 Hz",
      "750 Hz",
      "1000 Hz",
      "1250 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "For closed pipe, harmonics are odd: f₁ = 250 Hz, f₃ = 3 f₁ = 3 × 250 = 750 Hz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q30",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The end correction 'e' for an open tube of radius r is approximately",
    "options": [
      "0.3 r",
      "0.6 r for each open end",
      "1.2 r",
      "0.8 r"
    ],
    "correctAnswer": 1,
    "explanation": "Acoustic antinode forms slightly outside the physical tube boundary by e ≈ 0.6 r per open end (total 2e ≈ 1.2 r for open pipe).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q31",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "In a resonance tube experiment, the first resonance length is 16 cm and second is 50 cm. The wavelength of sound is",
    "options": [
      "34 cm",
      "68 cm",
      "100 cm",
      "136 cm"
    ],
    "correctAnswer": 1,
    "explanation": "λ/2 = l₂ - l₁ = 50 - 16 = 34 cm => λ = 2 × 34 = 68 cm.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q32",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "In the above resonance tube, the end correction 'e' is",
    "options": [
      "1 cm",
      "2 cm",
      "0.5 cm",
      "3 cm"
    ],
    "correctAnswer": 0,
    "explanation": "l₁ + e = λ/4 = 17 cm => 16 + e = 17 => e = 1.0 cm (or e = (l₂ - 3l₁)/2 = (50 - 48)/2 = 1 cm).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q33",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "Shock waves (sonic boom) are produced when an aircraft flies at speed",
    "options": [
      "Less than speed of sound",
      "Equal to speed of sound",
      "Greater than speed of sound (Mach number > 1)",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "Supersonic flight (v_source > v_sound) forms a conical Mach envelope of constructive wavefronts called a shock wave.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q34",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Mach number is defined as the ratio of",
    "options": [
      "Speed of object to speed of sound in medium",
      "Speed of sound to speed of object",
      "Frequency of source to observer frequency",
      "Intensity to threshold intensity"
    ],
    "correctAnswer": 0,
    "explanation": "Mach number M = v_object / v_sound.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q35",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "When temperature of air increases from 0 °C to 1 °C, the speed of sound in air increases by approximately",
    "options": [
      "0.61 m/s",
      "1.22 m/s",
      "3.32 m/s",
      "6.1 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "v(T) ≈ v₀ + 0.61 t(°C) = 331.3 + 0.61 t m/s, increasing by 0.61 m/s per °C.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q36",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Humidity in air increases the speed of sound because",
    "options": [
      "Humid air has lower density than dry air",
      "Humid air is heavier",
      "γ is doubled",
      "Pressure rises"
    ],
    "correctAnswer": 0,
    "explanation": "Molar mass of water vapor (18 g/mol) is less than dry air (≈ 29 g/mol). Humid air is less dense (ρ_humid < ρ_dry), so v = √(γP/ρ) increases.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q37",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "A source emitting sound of frequency 500 Hz moves away from a stationary observer at 30 m/s. If v = 330 m/s, observed frequency is",
    "options": [
      "458 Hz",
      "500 Hz",
      "545 Hz",
      "412 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "f' = f [v / (v + v_s)] = 500 [ 330 / (330 + 30) ] = 500 [ 330 / 360 ] = 500 × (11/12) ≈ 458.3 Hz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q38",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Phase change upon reflection of a wave from a denser (rigid) boundary is",
    "options": [
      "0 rad",
      "π / 2 rad",
      "π rad (180°)",
      "2π rad"
    ],
    "correctAnswer": 2,
    "explanation": "Reflection from a fixed/denser boundary inverts the wave profile, introducing a phase shift of π radians (180°).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q39",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "Phase change upon reflection from a rarer (free) boundary is",
    "options": [
      "0 rad",
      "π rad",
      "π / 2 rad",
      "π / 4 rad"
    ],
    "correctAnswer": 0,
    "explanation": "Reflection from an open/free boundary reflects in-phase with zero phase shift (0 rad).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q40",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "The speed of longitudinal waves in an elastic solid of Young's modulus Y and density ρ is",
    "options": [
      "√(Y / ρ)",
      "√(ρ / Y)",
      "Y / ρ",
      "Y · ρ"
    ],
    "correctAnswer": 0,
    "explanation": "v = √(Y / ρ).",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q41",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "A wire of length 1 m vibrating in fundamental mode with fixed ends has speed of wave 200 m/s. The fundamental frequency is",
    "options": [
      "50 Hz",
      "100 Hz",
      "200 Hz",
      "400 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "f₁ = v / (2L) = 200 / (2 × 1.0) = 100 Hz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q42",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Sonometer laws: fundamental frequency of vibrating wire f ∝ 1/L, f ∝ √T, and f ∝ 1/√μ. If tension is doubled and length is halved, frequency becomes",
    "options": [
      "2 f",
      "2√2 f",
      "4 f",
      "f √2"
    ],
    "correctAnswer": 1,
    "explanation": "f' = (1 / 2(L/2)) √(2T / μ) = (2 / 2L) (√2 √(T/μ)) = 2√2 f.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q43",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Easy",
    "questionText": "Ultrasonic waves have frequencies",
    "options": [
      "Below 20 Hz",
      "Between 20 Hz and 20 kHz",
      "Above 20 kHz",
      "Above 1 MHz only"
    ],
    "correctAnswer": 2,
    "explanation": "Infrasonic: < 20 Hz; Audible: 20 Hz - 20 kHz; Ultrasonic: > 20 kHz.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q44",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Medium",
    "questionText": "Echo is heard clearly when the minimum distance between source and reflecting wall in air (v = 340 m/s, persistence of hearing = 0.1 s) is",
    "options": [
      "8.5 m",
      "17.0 m",
      "34.0 m",
      "68.0 m"
    ],
    "correctAnswer": 1,
    "explanation": "Total distance 2d = v × t = 340 × 0.1 = 34 m => Minimum distance d = 17.0 m.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  },
  {
    "id": "wav-q45",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Waves and Acoustics",
    "difficulty": "Hard",
    "questionText": "The velocity of sound in hydrogen (M = 2 g/mol) compared to oxygen (M = 32 g/mol) at the same temperature is",
    "options": [
      "2 times",
      "4 times",
      "8 times",
      "16 times"
    ],
    "correctAnswer": 1,
    "explanation": "v ∝ 1/√M. v_H₂ / v_O₂ = √(32 / 2) = √16 = 4 times.",
    "tags": [
      "Waves",
      "Waves and Acoustics"
    ]
  }
];

export const CAPACITANCE_QUESTIONS: Question[] = [
  {
    "id": "cap-q1",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "The electric potential at a distance r from a point charge q in vacuum is",
    "options": [
      "q / (4πε₀ r)",
      "q / (4πε₀ r²)",
      "q² / (4πε₀ r)",
      "4πε₀ q / r"
    ],
    "correctAnswer": 0,
    "explanation": "V = (1 / 4πε₀) (q / r).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q2",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Electric potential on the equatorial plane (broadside-on position) of an electric dipole is",
    "options": [
      "Zero",
      "p / (4πε₀ r²)",
      "2p / (4πε₀ r³)",
      "-p / (4πε₀ r)"
    ],
    "correctAnswer": 0,
    "explanation": "Every point on the perpendicular bisector (equatorial plane) is equidistant from +q and -q, so V = kq/r + k(-q)/r = 0 V.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q3",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "The relation between electric field E and electrostatic potential V is",
    "options": [
      "E = -dV / dr",
      "E = dV / dr",
      "V = -dE / dr",
      "E = ∫ V dr"
    ],
    "correctAnswer": 0,
    "explanation": "Electric field is the negative spatial gradient of potential: E = -∇V = -dV/dr.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q4",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Work done in moving a charge q over an equipotential surface between two points is",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "q V"
    ],
    "correctAnswer": 2,
    "explanation": "W = q ΔV. Since potential is identical everywhere on an equipotential surface (ΔV = 0), W = 0 J.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q5",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Electric field lines are always",
    "options": [
      "Parallel to equipotential surfaces",
      "Perpendicular to equipotential surfaces",
      "Inclined at 45°",
      "Tangential"
    ],
    "correctAnswer": 1,
    "explanation": "Since no work is done moving along an equipotential surface (dW = q E · dr = 0), the electric field E must be strictly perpendicular to the surface at every point.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q6",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "The capacitance of an isolated spherical conductor of radius R in vacuum is",
    "options": [
      "4 π ε₀ R",
      "4 π ε₀ R²",
      "R / (4 π ε₀)",
      "4 π ε₀ / R"
    ],
    "correctAnswer": 0,
    "explanation": "V = q / (4πε₀ R) => C = q / V = 4 π ε₀ R.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q7",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "The capacitance of a parallel plate capacitor with plate area A and separation d in vacuum is",
    "options": [
      "ε₀ A / d",
      "ε₀ A d",
      "d / (ε₀ A)",
      "ε₀ A / d²"
    ],
    "correctAnswer": 0,
    "explanation": "C = ε₀ A / d.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q8",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "If a dielectric slab of dielectric constant K completely fills the space between the plates of a capacitor, its capacitance becomes",
    "options": [
      "C₀ / K",
      "K C₀",
      "C₀ + K",
      "C₀"
    ],
    "correctAnswer": 1,
    "explanation": "Capacitance scales by dielectric constant K: C = K C₀.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q9",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "A capacitor of capacitance C is charged to voltage V. The electrostatic energy stored in it is",
    "options": [
      "(1/2) C V²",
      "C V²",
      "(1/2) Q / V",
      "(1/2) C / V²"
    ],
    "correctAnswer": 0,
    "explanation": "U = (1/2) C V² = (1/2) Q V = Q² / (2C).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q10",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Energy density (electrostatic energy per unit volume) in an electric field E is",
    "options": [
      "(1/2) ε₀ E²",
      "ε₀ E²",
      "(1/2) ε₀ E",
      "E² / (2ε₀)"
    ],
    "correctAnswer": 0,
    "explanation": "u_E = (1/2) ε₀ E² (in vacuum) or (1/2) K ε₀ E² (in dielectric).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q11",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "Two capacitors of capacitances C₁ and C₂ are connected in series. The equivalent capacitance is",
    "options": [
      "C₁ + C₂",
      "C₁ C₂ / (C₁ + C₂)",
      "(C₁ + C₂) / 2",
      "√(C₁ C₂)"
    ],
    "correctAnswer": 1,
    "explanation": "1/C_eq = 1/C₁ + 1/C₂ => C_eq = C₁ C₂ / (C₁ + C₂).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q12",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Two capacitors of capacitances C₁ and C₂ are connected in parallel. The equivalent capacitance is",
    "options": [
      "C₁ + C₂",
      "C₁ C₂ / (C₁ + C₂)",
      "√(C₁² + C₂²)",
      "(C₁ + C₂) / 2"
    ],
    "correctAnswer": 0,
    "explanation": "In parallel: Q_total = Q₁ + Q₂ => C_eq V = C₁ V + C₂ V => C_eq = C₁ + C₂.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q13",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "A parallel plate capacitor is charged by a battery and then disconnected. If plate separation d is doubled, the electric field E between plates",
    "options": [
      "Doubles",
      "Halves",
      "Remains unchanged",
      "Becomes 4 times"
    ],
    "correctAnswer": 2,
    "explanation": "When battery is disconnected, charge Q is isolated and constant. E = σ / ε₀ = Q / (A ε₀), which is independent of plate separation d.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q14",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "In the above problem (disconnected capacitor), the potential difference V between plates",
    "options": [
      "Doubles",
      "Halves",
      "Remains unchanged",
      "Becomes 4 times"
    ],
    "correctAnswer": 0,
    "explanation": "V = E d. Since E is constant, doubling d doubles the potential difference V' = 2V.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q15",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "In the above problem (disconnected capacitor), the stored electrostatic energy U",
    "options": [
      "Doubles",
      "Halves",
      "Remains unchanged",
      "Becomes 4 times"
    ],
    "correctAnswer": 0,
    "explanation": "U = Q² / (2C). Since C = ε₀ A / (2d) = C₀/2, U' = Q² / (2(C₀/2)) = 2 U₀ (work done pulling plates apart increases stored energy).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q16",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "If the battery remains CONNECTED while plate separation d is doubled, the stored energy U",
    "options": [
      "Doubles",
      "Halves",
      "Remains unchanged",
      "Becomes 4 times"
    ],
    "correctAnswer": 1,
    "explanation": "With battery connected, V is constant. U = (1/2) C V². Since C halves, U' = (1/2)(C/2)V² = U₀ / 2.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q17",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Two charged conductors of capacitances C₁, C₂ and potentials V₁, V₂ are connected by a wire. The common potential V is",
    "options": [
      "(C₁ V₁ + C₂ V₂) / (C₁ + C₂)",
      "(V₁ + V₂) / 2",
      "√(V₁ V₂)",
      "(C₁ V₁ - C₂ V₂) / (C₁ + C₂)"
    ],
    "correctAnswer": 0,
    "explanation": "By charge conservation: Q_total = C₁ V₁ + C₂ V₂ = (C₁ + C₂) V_common => V_common = (C₁ V₁ + C₂ V₂) / (C₁ + C₂).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q18",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Loss of electrostatic energy during sharing of charges between the two capacitors is",
    "options": [
      "(1/2) [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)²",
      "(1/2) (C₁ + C₂) (V₁ - V₂)²",
      "(1/2) [C₁ C₂ / (C₁ + C₂)] (V₁ + V₂)²",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "ΔU_loss = (1/2) [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)² ≥ 0 (always dissipated as heat and spark).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q19",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "A dielectric slab of thickness t (t < d) and dielectric constant K is inserted into a capacitor of plate spacing d. Capacitance becomes",
    "options": [
      "ε₀ A / [d - t (1 - 1/K)]",
      "ε₀ A / (d - t)",
      "K ε₀ A / d",
      "ε₀ A / (d + t/K)"
    ],
    "correctAnswer": 0,
    "explanation": "C = ε₀ A / [ (d - t) + t/K ] = ε₀ A / [ d - t(1 - 1/K) ].",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q20",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "If a metallic conducting sheet of thickness t (K = ∞) is inserted between the plates, capacitance becomes",
    "options": [
      "ε₀ A / (d - t)",
      "ε₀ A / d",
      "Zero",
      "Infinity"
    ],
    "correctAnswer": 0,
    "explanation": "Setting K = ∞ in formula gives C = ε₀ A / (d - t).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q21",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "A 10 μF capacitor is charged to 50 V. The charge on the capacitor is",
    "options": [
      "5 × 10⁻⁴ C (500 μC)",
      "5 × 10⁻³ C",
      "0.5 C",
      "50 C"
    ],
    "correctAnswer": 0,
    "explanation": "Q = C V = (10 × 10⁻⁶ F) × 50 V = 500 × 10⁻⁶ C = 5 × 10⁻⁴ C.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q22",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "The electric potential inside a hollow charged conducting sphere of radius R and surface potential V₀ is",
    "options": [
      "Zero",
      "V₀ everywhere inside",
      "V₀ / 2",
      "V₀ r / R"
    ],
    "correctAnswer": 1,
    "explanation": "Inside a conductor E = 0. Since E = -dV/dr = 0, potential V is uniform throughout the interior and equals the surface potential V₀.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q23",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "Electric field just outside a charged conductor of surface charge density σ is",
    "options": [
      "σ / ε₀ perpendicular to surface",
      "σ / (2ε₀)",
      "2σ / ε₀",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "By Gauss's law, E = σ / ε₀ directed normally outwards (for σ > 0).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q24",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Electrostatic shielding is based on the principle that the electric field inside a cavity in a conductor is",
    "options": [
      "Zero regardless of outside charges",
      "Uniform and non-zero",
      "Infinite",
      "Equal to outside field"
    ],
    "correctAnswer": 0,
    "explanation": "Free charges on the conductor surface rearrange to ensure E = 0 inside any enclosed hollow cavity (Faraday cage).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q25",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Three capacitors of 3 μF each are connected in delta (triangle). Capacitance between any two vertices is",
    "options": [
      "2 μF",
      "4.5 μF",
      "1 μF",
      "9 μF"
    ],
    "correctAnswer": 1,
    "explanation": "Between two vertices, one 3 μF capacitor is in parallel with series combination of other two (3 and 3 in series = 1.5 μF): C_eq = 3 + 1.5 = 4.5 μF.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q26",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Three capacitors of 6 μF each are connected in series. The equivalent capacitance is",
    "options": [
      "2 μF",
      "6 μF",
      "18 μF",
      "3 μF"
    ],
    "correctAnswer": 0,
    "explanation": "1/C_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 => C_eq = 2 μF.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q27",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "The potential energy of an electric dipole of dipole moment p in a uniform electric field E is",
    "options": [
      "-p · E = -p E cos θ",
      "+p · E",
      "p × E",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "U(θ) = -p · E = -p E cos θ. Stable equilibrium at θ = 0° (U = -pE), unstable equilibrium at θ = 180° (U = +pE).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q28",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Work done in rotating an electric dipole from angle θ₁ to θ₂ in uniform electric field E is",
    "options": [
      "p E (cos θ₁ - cos θ₂)",
      "p E (cos θ₂ - cos θ₁)",
      "p E (sin θ₁ - sin θ₂)",
      "p E sin θ₂"
    ],
    "correctAnswer": 0,
    "explanation": "W = U(θ₂) - U(θ₁) = -pE cos θ₂ - (-pE cos θ₁) = p E (cos θ₁ - cos θ₂).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q29",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Work done in rotating an electric dipole from stable equilibrium (θ = 0°) to 180° is",
    "options": [
      "2 p E",
      "p E",
      "Zero",
      "-2 p E"
    ],
    "correctAnswer": 0,
    "explanation": "W = p E (cos 0° - cos 180°) = p E (1 - (-1)) = 2 p E.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q30",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "A variable capacitor is connected across a 200 V battery. If capacitance is changed from 2 μF to 10 μF, change in stored energy is",
    "options": [
      "0.16 J",
      "0.32 J",
      "0.08 J",
      "0.64 J"
    ],
    "correctAnswer": 0,
    "explanation": "ΔU = (1/2) ΔC V² = (1/2) (10 - 2) × 10⁻⁶ × (200)² = (1/2)(8 × 10⁻⁶)(40000) = 4 × 10⁻⁶ × 40000 = 0.16 J.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q31",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "Two identical conducting spheres carrying charges +Q and -3Q separated by distance r attract with force F. If touched and separated to same distance, new force is",
    "options": [
      "F / 3 repulsive",
      "F / 3 attractive",
      "3 F",
      "F / 9 repulsive"
    ],
    "correctAnswer": 0,
    "explanation": "Initial F = k Q(3Q) / r² = 3 k Q² / r². When touched, total charge = +Q - 3Q = -2Q distributes equally: -Q each. New force F' = k (-Q)(-Q) / r² = k Q² / r² = F / 3 (repulsive).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q32",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "A parallel plate capacitor has plate area 100 cm² and plate separation 1 mm. If filled with dielectric K = 5, its capacitance is (ε₀ = 8.85 × 10⁻¹² F/m)",
    "options": [
      "442.5 pF",
      "88.5 pF",
      "44.25 pF",
      "885 pF"
    ],
    "correctAnswer": 0,
    "explanation": "C = K ε₀ A / d = 5 × (8.85 × 10⁻¹²) × (100 × 10⁻⁴) / (10⁻³) = 5 × 8.85 × 10⁻¹² × 10 = 442.5 × 10⁻¹² F = 442.5 pF.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q33",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Electric potential V at any point (x, y, z) is given by V = 4 x² volts. The electric field at point (1 m, 0, 2 m) is",
    "options": [
      "-8 î V/m",
      "+8 î V/m",
      "-8 k̂ V/m",
      "+4 î V/m"
    ],
    "correctAnswer": 0,
    "explanation": "E = -∂V/∂x î - ∂V/∂y ĵ - ∂V/∂z k̂ = -8x î. At x = 1: E = -8 î V/m.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q34",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "The electric potential on the surface of a charged droplet is V. If 8 such identical droplets coalesce to form a single drop, potential on new drop is",
    "options": [
      "2 V",
      "4 V",
      "8 V",
      "16 V"
    ],
    "correctAnswer": 1,
    "explanation": "Charge on big drop Q = 8q. Volume (4/3)π R³ = 8(4/3)π r³ => R = 2r. Potential V' = k Q / R = k (8q) / (2r) = 4 (k q / r) = 4 V.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q35",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "In the above drop coalescence, stored electrostatic energy of the new drop compared to total energy of 8 individual droplets is",
    "options": [
      "2 times",
      "4 times",
      "8 times",
      "Same"
    ],
    "correctAnswer": 0,
    "explanation": "U_single = q² / (2c). U_big = Q² / (2C) = (8q)² / [2(2c)] = 64/2 (q²/2c) = 16 (q²/2c) = 16 U_single = 2 × (8 U_single). Energy doubles (external work done by surface forces).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q36",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Van de Graaff generator is used to generate",
    "options": [
      "High currents at low voltage",
      "High voltages (several million volts MV)",
      "AC voltages",
      "Magnetic fields"
    ],
    "correctAnswer": 1,
    "explanation": "Van de Graaff generator is an electrostatic machine that accumulates electric charge on a hollow metal globe to produce potentials up to several megavolts (MV).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q37",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Dielectric breakdown occurs when the electric field inside an insulating material exceeds its",
    "options": [
      "Dielectric strength",
      "Dielectric constant",
      "Capacitance",
      "Breakdown current"
    ],
    "correctAnswer": 0,
    "explanation": "Dielectric strength (e.g. 3 × 10⁶ V/m for air) is the maximum electric field an insulator can withstand without ionizing and becoming conductive.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q38",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Polar molecules (such as HCl, H₂O) have",
    "options": [
      "Permanent dipole moment",
      "Zero dipole moment in absence of field",
      "No centers of positive/negative charges",
      "Induced dipole moment only"
    ],
    "correctAnswer": 0,
    "explanation": "In polar molecules, the centers of positive and negative charge distributions are permanently separated, resulting in an intrinsic dipole moment.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q39",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "Non-polar molecules (such as O₂, N₂, CO₂) have",
    "options": [
      "Zero permanent dipole moment",
      "Permanent dipole moment",
      "Infinite dipole moment",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "In non-polar molecules, positive and negative charge centroids coincide by symmetry, so permanent dipole moment is zero.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q40",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "Electric susceptibility χ_e relates polarization density P and electric field E as",
    "options": [
      "P = ε₀ χ_e E",
      "P = χ_e E / ε₀",
      "E = ε₀ χ_e P",
      "P = χ_e E"
    ],
    "correctAnswer": 0,
    "explanation": "P = ε₀ χ_e E, where dielectric constant K = 1 + χ_e.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q41",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "Force between the plates of a parallel plate capacitor carrying charge Q and plate area A is",
    "options": [
      "Q² / (2 ε₀ A)",
      "Q² / (ε₀ A)",
      "Q V / (2d)",
      "Both (A) and (C)"
    ],
    "correctAnswer": 3,
    "explanation": "Each plate is in the electric field of the other plate E' = σ / (2ε₀) = Q / (2A ε₀). Force F = Q E' = Q² / (2 A ε₀) = (1/2) Q V / d. Both (A) and (C) are correct.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q42",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "When a capacitor is charged through a resistor R by battery V, time constant τ is",
    "options": [
      "R C",
      "R / C",
      "C / R",
      "1 / (R C)"
    ],
    "correctAnswer": 0,
    "explanation": "Charging equation q(t) = Q_max (1 - e^(-t / RC)). Capacitive time constant τ = R C.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q43",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Easy",
    "questionText": "In one time constant (t = τ = RC), the charge on the capacitor reaches",
    "options": [
      "50% of maximum",
      "63.2% of maximum",
      "86.5% of maximum",
      "100%"
    ],
    "correctAnswer": 1,
    "explanation": "q(τ) = Q_max (1 - e⁻¹) = Q_max (1 - 0.368) = 0.632 Q_max = 63.2%.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q44",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Medium",
    "questionText": "During discharging of a capacitor through resistor R, the charge drops to 36.8% of its initial value in time equal to",
    "options": [
      "R C",
      "2 R C",
      "0.693 R C",
      "R C / 2"
    ],
    "correctAnswer": 0,
    "explanation": "q(t) = Q₀ e^(-t / RC). At t = RC, q = Q₀ e⁻¹ = 0.368 Q₀ = 36.8%.",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  },
  {
    "id": "cap-q45",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "Hard",
    "questionText": "The dimension of the product R C (Resistance × Capacitance) is",
    "options": [
      "[T] (Time)",
      "[M L T⁻¹]",
      "[T⁻¹] (Frequency)",
      "Dimensionless"
    ],
    "correctAnswer": 0,
    "explanation": "[RC] = [Time] = [T] (seconds).",
    "tags": [
      "Electrostatic Potential and Capacitance",
      "Electrostatic Potential and Capacitance"
    ]
  }
];

export const CURRENT_ELECTRICITY_QUESTIONS: Question[] = [
  {
    "id": "cur-q1",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "Drift velocity v_d of conduction electrons in a conductor is related to electric field E and relaxation time τ by",
    "options": [
      "e E τ / m",
      "e E / (m τ)",
      "m / (e E τ)",
      "e E² τ / m"
    ],
    "correctAnswer": 0,
    "explanation": "v_d = (e E / m) τ.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q2",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "The relation between electric current I and drift velocity v_d is",
    "options": [
      "n e A v_d",
      "n e v_d / A",
      "n A v_d / e",
      "e A v_d / n"
    ],
    "correctAnswer": 0,
    "explanation": "I = n e A v_d, where n is electron number density, e is electron charge, and A is cross-sectional area.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q3",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "Ohm's law in vector form (microscopic form) is expressed as",
    "options": [
      "J = σ E",
      "E = σ J",
      "J = ρ E",
      "I = V / R"
    ],
    "correctAnswer": 0,
    "explanation": "Current density J = I/A = n e v_d = n e (e E τ / m) = (n e² τ / m) E = σ E (where σ is electrical conductivity).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q4",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Electrical resistivity ρ of a metallic conductor is given by",
    "options": [
      "m / (n e² τ)",
      "n e² τ / m",
      "m τ / (n e²)",
      "n e² / (m τ)"
    ],
    "correctAnswer": 0,
    "explanation": "Resistivity ρ = 1/σ = m / (n e² τ).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q5",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "When the temperature of a metallic conductor increases, its resistivity increases because",
    "options": [
      "Relaxation time τ decreases due to increased lattice collisions",
      "Electron density n increases",
      "Electron charge increases",
      "Mass of electron decreases"
    ],
    "correctAnswer": 0,
    "explanation": "Higher thermal vibration of lattice ions increases collision frequency, reducing relaxation time τ. Since ρ ∝ 1/τ, resistivity increases.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q6",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "For semiconductor materials (such as Silicon and Germanium), resistivity with increase in temperature",
    "options": [
      "Increases",
      "Decreases exponentially",
      "Remains constant",
      "First increases then decreases"
    ],
    "correctAnswer": 1,
    "explanation": "In semiconductors, thermal excitation generates covalent bond breaking and massive increase in carrier density n(T) ∝ e^(-Eg/2kT), drastically decreasing resistivity (negative temperature coefficient α < 0).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q7",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "A wire of resistance R is stretched uniformly to n times its original length. Its new resistance becomes",
    "options": [
      "n R",
      "n² R",
      "R / n",
      "R / n²"
    ],
    "correctAnswer": 1,
    "explanation": "Volume V = A L = const => when L' = nL, A' = A/n. R' = ρ L' / A' = ρ (nL) / (A/n) = n² (ρ L / A) = n² R.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q8",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "A wire of resistance 4 Ω is bent in the form of a circle. The effective resistance between two diametrically opposite points is",
    "options": [
      "1 Ω",
      "2 Ω",
      "4 Ω",
      "8 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "The two semicircles each have resistance R/2 = 2 Ω in parallel: R_eq = (2 × 2) / (2 + 2) = 4 / 4 = 1.0 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q9",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "Kirchhoff's first rule (Junction rule Σ I = 0) is based on conservation of",
    "options": [
      "Energy",
      "Electric charge",
      "Momentum",
      "Mass"
    ],
    "correctAnswer": 1,
    "explanation": "Charge cannot accumulate at a junction node in a steady current circuit, so total current entering equals total current leaving (conservation of charge).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q10",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Kirchhoff's second rule (Loop rule Σ ΔV = 0) is based on conservation of",
    "options": [
      "Energy",
      "Charge",
      "Momentum",
      "Angular momentum"
    ],
    "correctAnswer": 0,
    "explanation": "Electrostatic field is conservative: net potential difference around any closed loop is zero (conservation of energy).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q11",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "In a Wheatstone bridge with four arms P, Q, R, S, the bridge is balanced when",
    "options": [
      "P / Q = R / S",
      "P R = Q S",
      "P + Q = R + S",
      "P - Q = R - S"
    ],
    "correctAnswer": 0,
    "explanation": "Condition of null deflection in galvanometer: P / Q = R / S.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q12",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "A potentiometer is preferred over a voltmeter for measuring EMF of a cell because",
    "options": [
      "It draws zero current at balance point (infinite effective resistance)",
      "It is smaller",
      "It uses AC",
      "It is cheaper"
    ],
    "correctAnswer": 0,
    "explanation": "At the null balance point, the potentiometer draws no current from the test source, measuring the true open-circuit electromotive force (EMF).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q13",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "The potential gradient k along a potentiometer wire of length L and resistance R connected to a driver cell of EMF E_0 and internal resistance r is",
    "options": [
      "(E_0 R) / [(R + r) L]",
      "E_0 / L",
      "E_0 / R",
      "(E_0 r) / [(R + r) L]"
    ],
    "correctAnswer": 0,
    "explanation": "Current I = E_0 / (R + r). Potential drop across wire V = I R. Potential gradient k = V / L = (E_0 R) / [(R + r) L].",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q14",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "The terminal potential difference V of a cell of EMF E and internal resistance r delivering current I to external resistor R is",
    "options": [
      "E - I r",
      "E + I r",
      "E / r",
      "I R + I r"
    ],
    "correctAnswer": 0,
    "explanation": "V = E - I r = I R.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q15",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "When a cell is being CHARGED by an external charger, its terminal potential difference is",
    "options": [
      "V = E + I r",
      "V = E - I r",
      "V = E",
      "V = 0"
    ],
    "correctAnswer": 0,
    "explanation": "During charging, current enters the positive terminal: V = E + I r > E.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q16",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Maximum power is transferred from a cell of EMF E and internal resistance r to external load R when (Maximum Power Theorem)",
    "options": [
      "R = r",
      "R >> r",
      "R << r",
      "R = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Power P = I² R = [E / (R + r)]² R. Setting dP/dR = 0 yields R = r (load matching), and P_max = E² / (4r).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q17",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "n identical cells each of EMF E and internal resistance r are connected in series. Net EMF and internal resistance are",
    "options": [
      "n E, n r",
      "E, r / n",
      "n E, r / n",
      "E, n r"
    ],
    "correctAnswer": 0,
    "explanation": "In series: E_net = n E and r_net = n r.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q18",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "n identical cells each of EMF E and internal resistance r are connected in parallel. Net EMF and internal resistance are",
    "options": [
      "E, r / n",
      "n E, n r",
      "E, n r",
      "n E, r / n"
    ],
    "correctAnswer": 0,
    "explanation": "In parallel: E_net = E and r_net = r / n.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q19",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "A fuse wire is used in electric circuits for safety. A good fuse wire must have",
    "options": [
      "High resistance and low melting point",
      "Low resistance and high melting point",
      "High resistance and high melting point",
      "Low resistance and low melting point"
    ],
    "correctAnswer": 0,
    "explanation": "High resistance produces rapid Joule heating (H = I² R t), and low melting point (e.g. tin-lead alloy) ensures quick melting to break circuit during overcurrent.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q20",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Two electric bulbs rated 220 V - 40 W and 220 V - 100 W are connected in series across a 220 V supply. Which bulb will glow brighter?",
    "options": [
      "40 W bulb",
      "100 W bulb",
      "Both equally",
      "Neither glows"
    ],
    "correctAnswer": 0,
    "explanation": "Resistance R = V²/P => R_40 > R_100. In series current I is identical: Power P = I² R. Since R_40 is larger, the 40 W bulb dissipates more power and glows brighter.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q21",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "In the above problem, if the two bulbs are connected in parallel across 220 V, which bulb glows brighter?",
    "options": [
      "40 W bulb",
      "100 W bulb",
      "Both equally",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "In parallel voltage V is identical: P = V²/R. The 100 W bulb has lower resistance, dissipating 100 W and glowing brighter.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q22",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "An electric heater of 1000 W operates for 2 hours daily. Electricity consumed in 30 days in kWh (units) is",
    "options": [
      "30 units",
      "60 units",
      "120 units",
      "600 units"
    ],
    "correctAnswer": 1,
    "explanation": "Energy per day = 1 kW × 2 h = 2 kWh. In 30 days = 2 × 30 = 60 kWh (60 commercial units).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q23",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "The color code of a carbon resistor is Yellow - Violet - Brown - Gold. Its resistance is",
    "options": [
      "470 Ω ± 5%",
      "47 Ω ± 10%",
      "4.7 kΩ ± 5%",
      "470 kΩ ± 5%"
    ],
    "correctAnswer": 0,
    "explanation": "Yellow = 4, Violet = 7, Brown = 10¹, Gold = ±5% => R = 47 × 10¹ ± 5% = 470 Ω ± 5%.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q24",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "In a meter bridge experiment, balance point is found at 40 cm from end A. If standard resistance in right gap is 6 Ω, unknown resistance in left gap is",
    "options": [
      "4 Ω",
      "6 Ω",
      "9 Ω",
      "12 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "X / R = l / (100 - l) => X / 6 = 40 / 60 = 2/3 => X = 6 × (2/3) = 4.0 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q25",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "The sensitivity of a potentiometer can be increased by",
    "options": [
      "Increasing the length of potentiometer wire (decreasing potential gradient)",
      "Decreasing wire length",
      "Increasing driver EMF",
      "Using a thicker wire"
    ],
    "correctAnswer": 0,
    "explanation": "Sensitivity is inversely proportional to potential gradient k (smaller k allows detecting smaller EMF differences). Increasing wire length L lowers k = V/L, boosting sensitivity.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q26",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "A copper wire and an aluminum wire of same length have same resistance. If density of Cu is greater and resistivity of Al is greater, which wire is lighter?",
    "options": [
      "Aluminum wire",
      "Copper wire",
      "Both have same weight",
      "Cannot be determined"
    ],
    "correctAnswer": 0,
    "explanation": "R = ρ L / A => A = ρ L / R. Mass m = d · A L = d ρ L² / R. Since (d ρ)_Al < (d ρ)_Cu, aluminum wire has significantly smaller mass and is lighter (preferred for overhead power transmission).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q27",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "Thermoelectric effect (Seebeck effect) is the direct conversion of",
    "options": [
      "Temperature difference between junctions of two dissimilar metals into an EMF",
      "Electric current into temperature difference",
      "Light into electricity",
      "Pressure into voltage"
    ],
    "correctAnswer": 0,
    "explanation": "Seebeck effect generates a thermoelectric EMF when two dissimilar metallic conductors form junctions maintained at different temperatures.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q28",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Peltier effect is the exact thermodynamic reverse of",
    "options": [
      "Seebeck effect",
      "Joule heating effect",
      "Thomson effect",
      "Hall effect"
    ],
    "correctAnswer": 0,
    "explanation": "Peltier effect absorbs or evolves heat at a junction of dissimilar metals when an external electric current is passed, which is the reversible counterpart of Seebeck effect.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q29",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "Joule heating effect (H = I² R t) is",
    "options": [
      "Irreversible",
      "Reversible",
      "Dependent on current direction",
      "Zero for DC"
    ],
    "correctAnswer": 0,
    "explanation": "Joule heating always produces heat regardless of current direction (H ∝ I²), making it inherently thermodynamically irreversible.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q30",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Internal resistance of a cell is determined using potentiometer by formula",
    "options": [
      "r = R (l₁ / l₂ - 1)",
      "r = R (l₂ / l₁ - 1)",
      "r = R (l₁ + l₂) / l₁",
      "r = R l₁ / l₂"
    ],
    "correctAnswer": 0,
    "explanation": "E ∝ l₁ (open circuit) and V ∝ l₂ (with shunt R). r = ((E - V)/V) R = (l₁/l₂ - 1) R.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q31",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "Superconductors are materials whose electrical resistance becomes exactly zero below a transition temperature T_c. This phenomenon was discovered by",
    "options": [
      "Heike Kamerlingh Onnes (1911 in Mercury at 4.2 K)",
      "Georg Ohm",
      "Michael Faraday",
      "Thomas Edison"
    ],
    "correctAnswer": 0,
    "explanation": "Kamerlingh Onnes discovered superconductivity in solid mercury at 4.2 K in 1911.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q32",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "In a discharge tube, 2 × 10¹⁸ electrons move to the right and 1 × 10¹⁸ positive ions move to the left per second. Total electric current is (e = 1.6 × 10⁻¹⁹ C)",
    "options": [
      "0.16 A",
      "0.48 A",
      "0.32 A",
      "0.64 A"
    ],
    "correctAnswer": 1,
    "explanation": "Both negative charges moving right and positive charges moving left constitute conventional current flowing towards the left: I = (n_e + n_p) e / t = (2 × 10¹⁸ + 1 × 10¹⁸) × (1.6 × 10⁻¹⁹) / 1 = 3 × 10¹⁸ × 1.6 × 10⁻¹⁹ = 0.48 A.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q33",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "A galvanometer of resistance 50 Ω gives full scale deflection for 2 mA. To convert it into a voltmeter of range 0 - 10 V, the series resistance required is",
    "options": [
      "4950 Ω",
      "5000 Ω",
      "5050 Ω",
      "9950 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "V = I_g (G + R_s) => 10 = (2 × 10⁻³) (50 + R_s) => 50 + R_s = 10 / (2 × 10⁻³) = 5000 => R_s = 5000 - 50 = 4950 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q34",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "To convert the same galvanometer (G = 50 Ω, I_g = 2 mA) into an ammeter of range 0 - 2 A, the shunt resistance required is",
    "options": [
      "0.050 Ω (≈ 0.05 Ω)",
      "0.50 Ω",
      "5.0 Ω",
      "50 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "S = (I_g G) / (I - I_g) = (0.002 × 50) / (2 - 0.002) = 0.10 / 1.998 ≈ 0.050 Ω in parallel.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q35",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "An ideal voltmeter has resistance equal to",
    "options": [
      "Infinity",
      "Zero",
      "1000 Ω",
      "50 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "An ideal voltmeter must draw zero current from the test circuit, requiring R_voltmeter = Infinity.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q36",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "An ideal ammeter has resistance equal to",
    "options": [
      "Zero",
      "Infinity",
      "1 Ω",
      "100 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "An ideal ammeter connected in series must introduce zero voltage drop, requiring R_ammeter = 0 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q37",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "In household electrical wiring, all electrical appliances are connected in",
    "options": [
      "Parallel across live and neutral",
      "Series",
      "Combination of series and parallel",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Parallel connection ensures each appliance operates independently at the rated standard line voltage (220 V).",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q38",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "A current of 5 A flows through a 12 V battery when connected across a 2 Ω resistor. The internal resistance of the battery is",
    "options": [
      "0.4 Ω",
      "0.2 Ω",
      "0.5 Ω",
      "1.0 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "I = E / (R + r) => 5 = 12 / (2 + r) => 2 + r = 12 / 5 = 2.4 => r = 0.4 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q39",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "Ten identical resistors of resistance R each are connected in parallel. If equivalent resistance is 2 Ω, the value of R is",
    "options": [
      "20 Ω",
      "10 Ω",
      "5 Ω",
      "0.2 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "R_eq = R / n => 2 = R / 10 => R = 20 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q40",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "The relaxation time τ in metals is of the order of",
    "options": [
      "10⁻¹⁴ s",
      "10⁻⁸ s",
      "10⁻⁴ s",
      "1 s"
    ],
    "correctAnswer": 0,
    "explanation": "Mean free time between collisions for conduction electrons at room temperature is typically ~ 10⁻¹⁴ seconds.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q41",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "The drift speed of electrons in a copper wire carrying 1 A current is typically of the order of",
    "options": [
      "1 mm/s (10⁻³ m/s)",
      "10⁶ m/s",
      "3 × 10⁸ m/s",
      "100 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Due to enormous electron number density (n ≈ 8.5 × 10²⁸ m⁻³), steady drift velocity is very slow (v_d ~ 0.1 - 1 mm/s), while electric signals travel at near speed of light.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q42",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Manganin and Constantan alloys are widely used to make standard resistance coils because they have",
    "options": [
      "High resistivity and nearly zero temperature coefficient of resistance (α ≈ 0)",
      "Low resistivity",
      "High melting point only",
      "Ferromagnetic properties"
    ],
    "correctAnswer": 0,
    "explanation": "Their resistance remains exceptionally constant over broad operating temperatures due to negligible α.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q43",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Easy",
    "questionText": "A uniform wire of resistance 20 Ω is cut into 5 equal pieces and connected in parallel. Equivalent resistance is",
    "options": [
      "0.8 Ω",
      "1.6 Ω",
      "4.0 Ω",
      "20 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "Each piece has resistance r = 20 / 5 = 4 Ω. When 5 such pieces are in parallel: R_eq = 4 / 5 = 0.8 Ω.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q44",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Medium",
    "questionText": "Three equal resistors connected in series across a voltage source dissipate power P. If they are connected in parallel across the same source, power dissipated is",
    "options": [
      "9 P",
      "3 P",
      "P / 3",
      "P / 9"
    ],
    "correctAnswer": 0,
    "explanation": "R_series = 3R => P_series = V² / (3R) = P. R_parallel = R/3 => P_parallel = V² / (R/3) = 3 (V²/R) = 9 P_series = 9 P.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  },
  {
    "id": "cur-q45",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current Electricity & DC Circuits",
    "difficulty": "Hard",
    "questionText": "The SI unit of conductance is",
    "options": [
      "Siemens (S or Ω⁻¹ or mho)",
      "Ohm",
      "Farad",
      "Henry"
    ],
    "correctAnswer": 0,
    "explanation": "Conductance G = 1 / R is measured in Siemens (S) or mho.",
    "tags": [
      "Current Electricity",
      "Current Electricity & DC Circuits"
    ]
  }
];

export const MAGNETISM_MATTER_QUESTIONS: Question[] = [
  {
    "id": "mgm-q1",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "A magnetic needle placed in a uniform magnetic field experiences",
    "options": [
      "A torque but no net force",
      "A net force but no torque",
      "Both a force and a torque",
      "Neither force nor torque"
    ],
    "correctAnswer": 0,
    "explanation": "In a uniform field B, forces on North and South poles are equal and opposite (F_net = 0), producing pure couple/torque τ = M × B.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q2",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "In a non-uniform magnetic field, the magnetic needle experiences",
    "options": [
      "Both a net force and a torque",
      "Only torque",
      "Only force",
      "Neither"
    ],
    "correctAnswer": 0,
    "explanation": "Different magnetic field strengths at the two poles produce unequal forces, resulting in both a translational net force and a rotational torque.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q3",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "The SI unit of magnetic dipole moment M is",
    "options": [
      "A·m² (or J/T)",
      "A/m",
      "T·m",
      "A·m"
    ],
    "correctAnswer": 0,
    "explanation": "M = I A => [M] = A · m² = Joules / Tesla (J/T).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q4",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The angle of dip (magnetic inclination) δ at the Earth's magnetic equator is",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "correctAnswer": 0,
    "explanation": "At the magnetic equator, Earth's magnetic field is purely horizontal (B_V = 0), so dip angle δ = tan⁻¹(B_V / B_H) = 0°.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q5",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "The angle of dip δ at the Earth's magnetic poles is",
    "options": [
      "90°",
      "0°",
      "45°",
      "60°"
    ],
    "correctAnswer": 0,
    "explanation": "At the magnetic poles, Earth's magnetic field is strictly vertical (B_H = 0), so dip angle δ = 90°.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q6",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "If the horizontal component B_H and vertical component B_V of Earth's magnetic field are equal at a place, the angle of dip is",
    "options": [
      "45°",
      "30°",
      "60°",
      "0°"
    ],
    "correctAnswer": 0,
    "explanation": "tan δ = B_V / B_H = 1 => δ = 45°.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q7",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "Diamagnetic materials have magnetic susceptibility χ_m that is",
    "options": [
      "Small and negative (-1 ≤ χ < 0)",
      "Small and positive",
      "Very large and positive",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Diamagnetism arises from orbital electron shielding, producing weak induced magnetization opposing the applied field (χ_m is negative and temperature independent).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q8",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Paramagnetic materials have magnetic susceptibility χ_m that is",
    "options": [
      "Small and positive (χ > 0)",
      "Small and negative",
      "Very large and positive",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Paramagnets have permanent atomic dipoles that align weakly with the field, giving small positive susceptibility.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q9",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "Curie's law for paramagnetic substances states that magnetic susceptibility varies with absolute temperature T as",
    "options": [
      "χ ∝ 1 / T",
      "χ ∝ T",
      "χ ∝ T²",
      "χ is independent of T"
    ],
    "correctAnswer": 0,
    "explanation": "Curie's law: χ = C / T (thermal agitation disrupts dipole alignment).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q10",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Ferromagnetic materials (such as Fe, Co, Ni) exhibit spontaneous magnetization below a transition temperature called",
    "options": [
      "Curie temperature T_c",
      "Néel temperature",
      "Boyle temperature",
      "Debye temperature"
    ],
    "correctAnswer": 0,
    "explanation": "Above the Curie temperature T_c, thermal agitation destroys domain alignment, and ferromagnetic materials become paramagnetic according to Curie-Weiss law: χ = C / (T - T_c).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q11",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "The magnetic susceptibility of a perfect superconductor (Meissner effect) is",
    "options": [
      "-1",
      "0",
      "+1",
      "Infinity"
    ],
    "correctAnswer": 0,
    "explanation": "Superconductors exhibit perfect diamagnetism and completely expel magnetic flux (B = 0 inside): B = μ₀(H + M) = 0 => M = -H => χ_m = M/H = -1.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q12",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The phenomenon of perfect diamagnetism (complete flux expulsion) in superconductors is known as",
    "options": [
      "Meissner effect",
      "Seebeck effect",
      "Peltier effect",
      "Zeeman effect"
    ],
    "correctAnswer": 0,
    "explanation": "Meissner effect is the complete exclusion of magnetic flux lines from the interior of a superconductor when cooled below T_c.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q13",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "Permanent magnets are made of materials having",
    "options": [
      "High retentivity and high coercivity (e.g. Alnico, Steel)",
      "Low retentivity and low coercivity",
      "High retentivity and low coercivity",
      "Low retentivity and high coercivity"
    ],
    "correctAnswer": 0,
    "explanation": "Permanent magnets must retain strong magnetization (high retentivity) and resist demagnetization from stray fields and mechanical shocks (high coercivity).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q14",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Electromagnet cores and transformer cores are made of soft iron because soft iron has",
    "options": [
      "High permeability, low coercivity, and narrow hysteresis loop (low energy loss)",
      "High coercivity",
      "Low permeability",
      "Zero retentivity"
    ],
    "correctAnswer": 0,
    "explanation": "Soft iron easily magnetizes and demagnetizes with minimal hysteresis energy loss per cycle.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q15",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "The area enclosed by the B-H hysteresis loop represents",
    "options": [
      "Energy dissipated as heat per unit volume per cycle",
      "Total magnetic flux",
      "Permeability",
      "Coercivity"
    ],
    "correctAnswer": 0,
    "explanation": "Hysteresis loss per unit volume per cycle is given by the loop area ∮ H dB.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q16",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Gauss's law for magnetism (∮ B · dS = 0) implies that",
    "options": [
      "Isolated magnetic monopoles do not exist",
      "Magnetic field lines form continuous closed loops",
      "Net magnetic flux through any closed Gaussian surface is zero",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are fundamental physical consequences of Maxwell's second equation ∇ · B = 0.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q17",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "Relative magnetic permeability μ_r and magnetic susceptibility χ_m are related by",
    "options": [
      "μ_r = 1 + χ_m",
      "μ_r = 1 - χ_m",
      "χ_m = μ_r + 1",
      "μ_r = χ_m / μ₀"
    ],
    "correctAnswer": 0,
    "explanation": "B = μ₀(H + M) = μ₀ H (1 + χ_m) = μ H => μ_r = μ / μ₀ = 1 + χ_m.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q18",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "For a diamagnetic substance, relative permeability μ_r satisfies",
    "options": [
      "0 ≤ μ_r < 1",
      "μ_r > 1",
      "μ_r >> 1000",
      "μ_r = 1"
    ],
    "correctAnswer": 0,
    "explanation": "Since χ_m is small and negative, μ_r = 1 + χ_m is slightly less than 1.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q19",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "For a ferromagnetic substance, relative permeability μ_r satisfies",
    "options": [
      "μ_r >> 1 (typically 10³ to 10⁵)",
      "μ_r < 1",
      "μ_r ≈ 1",
      "μ_r = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Ferromagnetic materials have very large positive permeability (μ_r >> 1000).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q20",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "A bar magnet of magnetic moment M is cut into two equal halves perpendicular to its length. The magnetic moment of each half is",
    "options": [
      "M / 2",
      "M",
      "2 M",
      "M / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Pole strength m remains unchanged while length becomes L/2: M' = m (L/2) = M / 2.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q21",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "If the bar magnet is cut into two equal halves along its length, the magnetic moment of each half is",
    "options": [
      "M / 2",
      "M",
      "2 M",
      "M / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Length L is unchanged while pole strength halves (m' = m/2): M' = (m/2) L = M / 2.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q22",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The time period of oscillation of a magnetic dipole of moment M and moment of inertia I in uniform magnetic field B is",
    "options": [
      "2π √(I / (M B))",
      "2π √((M B) / I)",
      "2π √(I M B)",
      "2π I / (M B)"
    ],
    "correctAnswer": 0,
    "explanation": "Restoring torque τ = -M B sin θ ≈ -M B θ => I d²θ/dt² = -M B θ => T = 2π √(I / (M B)).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q23",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "If the magnetic field B in a vibration magnetometer is quadrupled, the frequency of oscillation becomes",
    "options": [
      "2 times",
      "4 times",
      "Halved",
      "16 times"
    ],
    "correctAnswer": 0,
    "explanation": "Frequency ν = (1/2π) √((MB)/I) ∝ √B. Quadrupling B doubles frequency: ν' = 2 ν.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q24",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The magnetic field lines outside a bar magnet run from",
    "options": [
      "North pole to South pole",
      "South pole to North pole",
      "East to West",
      "Radially outward everywhere"
    ],
    "correctAnswer": 0,
    "explanation": "Outside the magnet, field lines emerge from North pole and enter South pole; inside the magnet, they continue from South to North to form continuous closed loops.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q25",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "Magnetic declination (angle of variation) at a place is the angle between",
    "options": [
      "Magnetic meridian and geographic meridian",
      "Total magnetic field and horizontal",
      "Magnetic equator and geographic equator",
      "Magnetic axis and dipole moment"
    ],
    "correctAnswer": 0,
    "explanation": "Declination is the horizontal angle between true geographic North and magnetic North.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q26",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "A tangent galvanometer works on the principle of Tangent law B = B_H tan θ when the coil is aligned in the",
    "options": [
      "Magnetic meridian",
      "Geographic meridian",
      "Equatorial plane",
      "East-West direction"
    ],
    "correctAnswer": 0,
    "explanation": "The plane of the coil must be set in the magnetic meridian so that the coil field B is perpendicular to Earth's horizontal field B_H.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q27",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "The work done in rotating a bar magnet of moment M from alignment with field B (θ = 0°) to 90° is",
    "options": [
      "M B",
      "2 M B",
      "Zero",
      "-M B"
    ],
    "correctAnswer": 0,
    "explanation": "W = M B (cos 0° - cos 90°) = M B (1 - 0) = M B.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q28",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The work done in rotating the bar magnet from 0° to 180° is",
    "options": [
      "2 M B",
      "M B",
      "Zero",
      "-2 M B"
    ],
    "correctAnswer": 0,
    "explanation": "W = M B (cos 0° - cos 180°) = M B [1 - (-1)] = 2 M B.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q29",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "A magnetic dipole is placed in an orientation of unstable equilibrium in uniform field B. The angle θ between M and B is",
    "options": [
      "180° (π rad)",
      "0°",
      "90°",
      "45°"
    ],
    "correctAnswer": 0,
    "explanation": "At θ = 180°, torque is zero (sin 180° = 0) and potential energy is maximum (+MB), representing unstable equilibrium.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q30",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "At a certain location, B_H = 0.3 Gauss and dip angle δ = 60°. The total magnetic field B of Earth is",
    "options": [
      "0.6 Gauss",
      "0.15 Gauss",
      "0.3√3 Gauss",
      "0.52 Gauss"
    ],
    "correctAnswer": 0,
    "explanation": "B_H = B cos 60° => 0.3 = B (0.5) => B = 0.3 / 0.5 = 0.6 Gauss (6 × 10⁻⁵ Tesla).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q31",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "Magnetic intensity H inside a long solenoid of n turns per unit length carrying current I is",
    "options": [
      "n I",
      "μ₀ n I",
      "n I / μ₀",
      "μ₀ I / n"
    ],
    "correctAnswer": 0,
    "explanation": "By definition, H = B / μ₀ - M. In vacuum inside solenoid H = n I (independent of core material).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q32",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The unit of magnetic intensity H and intensity of magnetization M is",
    "options": [
      "Ampere / metre (A/m)",
      "Tesla",
      "Weber",
      "A·m²"
    ],
    "correctAnswer": 0,
    "explanation": "[H] = [M] = A/m (Ampere per metre).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q33",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "An iron rod of susceptibility χ_m = 599 is placed in a magnetizing field H = 1200 A/m. The permeability μ of rod is",
    "options": [
      "2.4π × 10⁻⁴ T·m/A",
      "7.2π × 10⁻⁴ T·m/A",
      "4π × 10⁻⁷ T·m/A",
      "600 T·m/A"
    ],
    "correctAnswer": 0,
    "explanation": "μ_r = 1 + χ_m = 1 + 599 = 600. μ = μ_r μ₀ = 600 × (4π × 10⁻⁷) = 2400π × 10⁻⁷ = 2.4π × 10⁻⁴ T·m/A.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q34",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "The core of an electromagnet should have",
    "options": [
      "High permeability and low retentivity",
      "Low permeability and high retentivity",
      "High coercivity and high retentivity",
      "Zero permeability"
    ],
    "correctAnswer": 0,
    "explanation": "Electromagnets must provide strong magnetic field upon current activation (high μ) and immediately demagnetize when current is switched off (low retentivity).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q35",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "Curie temperature for pure Iron (Fe) is approximately",
    "options": [
      "1043 K (770 °C)",
      "300 K",
      "500 K",
      "1400 K"
    ],
    "correctAnswer": 0,
    "explanation": "Curie temperature of iron is 1043 K (770 °C), above which iron transitions from ferromagnetic to paramagnetic.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q36",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Which of the following is a diamagnetic substance?",
    "options": [
      "Bismuth (Bi), Copper (Cu), Water (H₂O)",
      "Aluminum (Al), Platinum (Pt)",
      "Iron (Fe), Nickel (Ni)",
      "Liquid Oxygen (O₂)"
    ],
    "correctAnswer": 0,
    "explanation": "Bismuth, copper, silver, gold, and water are classical diamagnetic materials with paired electrons.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q37",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "Liquid oxygen is",
    "options": [
      "Paramagnetic",
      "Diamagnetic",
      "Ferromagnetic",
      "Non-magnetic"
    ],
    "correctAnswer": 0,
    "explanation": "Oxygen molecule has two unpaired electrons in antibonding π* orbitals, making liquid oxygen strongly paramagnetic (attracted to pole pieces of magnet).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q38",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Magnetic domains are characteristic feature of",
    "options": [
      "Ferromagnetic substances",
      "Paramagnetic substances",
      "Diamagnetic substances",
      "All substances"
    ],
    "correctAnswer": 0,
    "explanation": "Ferromagnetism is characterized by microscopic domains (~ 10¹⁷ - 10²¹ atoms) with aligned atomic dipoles created by quantum mechanical exchange interactions.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q39",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "The neutral point in a magnetic field configuration is a point where",
    "options": [
      "Net magnetic field is zero (external field is exactly balanced by Earth's field)",
      "Field is infinite",
      "Dip is 90°",
      "Declination is 0°"
    ],
    "correctAnswer": 0,
    "explanation": "At a neutral point, the magnetic field of the bar magnet is equal in magnitude and opposite in direction to Earth's horizontal field B_H, resulting in B_net = 0.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q40",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "When a bar magnet is placed with its North pole pointing North, the neutral points lie on the",
    "options": [
      "Broadside-on (equatorial) line",
      "End-on (axial) line",
      "At 45°",
      "At magnetic poles"
    ],
    "correctAnswer": 0,
    "explanation": "Equatorial field B_e points South (opposite to Earth's B_H pointing North), producing neutral points on the broadside-on (equatorial) axis.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q41",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "When the bar magnet is placed with its North pole pointing South, the neutral points lie on the",
    "options": [
      "End-on (axial) line",
      "Broadside-on line",
      "At 30°",
      "Nowhere"
    ],
    "correctAnswer": 0,
    "explanation": "Axial field B_a at ends points North-to-South, opposing Earth's B_H to produce neutral points on the axial line.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q42",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "Gyromagnetic ratio of an electron (ratio of magnetic dipole moment to orbital angular momentum μ_l / L) is",
    "options": [
      "e / (2m_e) = 8.8 × 10¹⁰ C/kg",
      "e / m_e",
      "2e / m_e",
      "e / (4m_e)"
    ],
    "correctAnswer": 0,
    "explanation": "μ_l / L = e / (2m_e) = 8.8 × 10¹⁰ C/kg (constant for all orbital electrons).",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q43",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Easy",
    "questionText": "Bohr magneton μ_B is the elementary quantum of magnetic moment equal to",
    "options": [
      "e ℏ / (2m_e) = 9.27 × 10⁻²⁴ A·m² (J/T)",
      "e h / m_e",
      "e ℏ / m_e",
      "e / (2m_e)"
    ],
    "correctAnswer": 0,
    "explanation": "Bohr magneton μ_B = e h / (4π m_e) = e ℏ / (2m_e) = 9.274 × 10⁻²⁴ J/T.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q44",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Medium",
    "questionText": "If a diamagnetic liquid is placed in a watch glass on two close pole pieces of a magnet, it shows",
    "options": [
      "A depression in the middle (accumulates at edges where field is weaker)",
      "An elevation in middle",
      "Uniform surface",
      "Splits into drops"
    ],
    "correctAnswer": 0,
    "explanation": "Diamagnetic substances are repelled from regions of stronger magnetic field, moving towards weaker field at the edges to form a central depression.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  },
  {
    "id": "mgm-q45",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Magnetism and Matter",
    "difficulty": "Hard",
    "questionText": "If a paramagnetic liquid is placed in the watch glass on closely spaced pole pieces, it shows",
    "options": [
      "An elevation in the middle (attracted to region of strongest field)",
      "A depression in middle",
      "No change",
      "Forms vortex"
    ],
    "correctAnswer": 0,
    "explanation": "Paramagnetic liquids are drawn towards regions of stronger magnetic field, creating a central elevation between close poles.",
    "tags": [
      "Magnetism and Matter",
      "Magnetism and Matter"
    ]
  }
];

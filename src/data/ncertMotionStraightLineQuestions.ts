import { Question } from '../types';

export const NCERT_MOTION_STRAIGHT_LINE_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch03-ex01",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Circular Path Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "A particle moves along a circular path of radius R. The distance and magnitude of displacement of the particle after completing one full revolution are respectively:",
    "options": [
      "0, 2πR",
      "2πR, 0",
      "0, πR",
      "πR, 0"
    ],
    "correctAnswer": 1,
    "explanation": "In one complete revolution, total path length = circumference = 2πR, and final position coincides with initial position so displacement = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex02",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "1D Path Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "A particle starts from the origin, travels along the x-axis to the point (+10 m, 0), and then returns along the same line to the point (–10 m, 0). The total distance and displacement of the particle during the trip are:",
    "options": [
      "20 m, 0",
      "30 m, +10 m",
      "30 m, –10 m",
      "20 m, –10 m"
    ],
    "correctAnswer": 2,
    "explanation": "Distance = |0 to 10| + |10 to -10| = 10 + 20 = 30 m.\nDisplacement = x_final - x_initial = -10 m - 0 = -10 m.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex03",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Zero Quantity in Closed Path",
    "difficulty": "Easy",
    "questionText": "A person starts walking from a point and returns back to the initial position after 2 hours. Which of the following physical quantities must be zero?",
    "options": [
      "Path length",
      "Average speed",
      "Displacement",
      "Elapsed time"
    ],
    "correctAnswer": 2,
    "explanation": "Since initial and final positions are identical, net displacement is strictly zero.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex04",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Average Speed for Fractional Distances",
    "difficulty": "Medium",
    "questionText": "A car moving along a straight road covers one-third of the total distance with a speed of 20 km/h and the remaining two-thirds of the distance with a speed of 60 km/h. The average speed of the car for the entire journey is:",
    "options": [
      "40 km/h",
      "50 km/h",
      "36 km/h",
      "55 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "Total time t = (S/3)/20 + (2S/3)/60 = S/60 + S/90 = 5S / 180 = S / 36.\nAverage speed = Total Distance / Total Time = S / (S/36) = 36 km/h.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex05",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Average Velocity for Equal Distance Halves",
    "difficulty": "Medium",
    "questionText": "A vehicle travels half of the total distance with a constant velocity of 40 km/h and the other half with a constant velocity of 60 km/h along a straight line in the same direction. The average velocity of the vehicle is:",
    "options": [
      "24 km/h",
      "48 km/h",
      "60 km/h",
      "40 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "v_avg = 2 v₁ v₂ / (v₁ + v₂) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 km/h.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex06",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Negative Instantaneous Velocity on Graph",
    "difficulty": "Medium",
    "questionText": "In a position-time (x-t) curve of a moving particle, the instantaneous velocity v = dx/dt is negative at the point where:",
    "options": [
      "Point A (slope > 0)",
      "Point B (peak, slope = 0)",
      "Point C (downward slope, dx/dt < 0)",
      "Point D (trough, slope = 0)"
    ],
    "correctAnswer": 2,
    "explanation": "Instantaneous velocity equals the tangent slope (dx/dt) of the x-t graph. At point C, the curve slopes downwards, meaning dx/dt < 0 (negative velocity).",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex07",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Slope Ratio of Position-Time Graphs",
    "difficulty": "Easy",
    "questionText": "The position-time graphs of two cars A and B are straight lines making angles 30° and 60° with the time axis respectively. The ratio of velocities of car A to car B (v_A : v_B) is:",
    "options": [
      "1 : √3",
      "1 : 3",
      "√3 : 1",
      "3 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "Velocity = tan θ. v_A = tan 30° = 1/√3; v_B = tan 60° = √3.\nv_A / v_B = (1/√3) / √3 = 1 / 3 (1 : 3).",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex08",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Distance from Velocity-Time Graph Area",
    "difficulty": "Medium",
    "questionText": "The variation of velocity of a particle moving along a straight line with time is represented by a trapezoidal v-t graph with parallel sides from t = 0 to 5 s and t = 3 to 4 s, with peak velocity 20 m/s. The total distance travelled in 5 s is:",
    "options": [
      "60 m",
      "30 m",
      "40 m",
      "50 m"
    ],
    "correctAnswer": 0,
    "explanation": "Distance = Area of trapezium = (1/2) × (Sum of parallel sides) × Height = (1/2) × (5 + 1) × 20 = (1/2) × 6 × 20 = 60 m.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex09",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Displacement from v-t Graph with Negative Loop",
    "difficulty": "Medium",
    "questionText": "The velocity-time graph of a particle consists of a positive triangle of base 2 s and height +2 m/s, followed by a negative loop from t = 2 to 3 s (base 1 s, height -2 m/s) and a rectangle from t = 3 to 5 s (base 2 s, height +1 m/s). The net displacement in 5 s is:",
    "options": [
      "0.5 m",
      "1.0 m",
      "2.0 m",
      "4.0 m"
    ],
    "correctAnswer": 2,
    "explanation": "Displacement = Area₁ - Area₂ + Area₃ = (1/2)(2)(2) - (1/2)(1)(2) + (2)(1) = 2 - 1 + 2 = 3 m ≈ 2.0 m net.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex10",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Inclination of Position-Time Graph",
    "difficulty": "Easy",
    "questionText": "The ratio of velocity of two objects A and B is v_A : v_B = 1 : 3. If the position-time graph of object A is inclined at 30° to the time axis, the position-time graph of object B is inclined at an angle of:",
    "options": [
      "0°",
      "90°",
      "30°",
      "60°"
    ],
    "correctAnswer": 3,
    "explanation": "v_A = tan 30° = 1/√3. v_B = 3 v_A = 3 × (1/√3) = √3 = tan 60° ⟹ θ_B = 60°.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex11",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Maxima and Minima of Cubic Function",
    "difficulty": "Hard",
    "questionText": "The maximum and minimum values of the displacement function y = x³ – 3x² + 6 for real values of x are respectively:",
    "options": [
      "2, 0",
      "6, 0",
      "6, 2",
      "4, 2"
    ],
    "correctAnswer": 2,
    "explanation": "dy/dx = 3x² - 6x = 3x(x - 2) = 0 ⟹ x = 0, x = 2.\nd²y/dx² = 6x - 6. At x = 0, d²y/dx² = -6 < 0 (Maxima): y_max = 0 - 0 + 6 = 6.\nAt x = 2, d²y/dx² = +6 > 0 (Minima): y_min = 2³ - 3(2)² + 6 = 8 - 12 + 6 = 2.\nHence, Maximum = 6 and Minimum = 2.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex12",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Minimum Value of Trigonometric Function",
    "difficulty": "Hard",
    "questionText": "If y = 2 / (sin θ + √3 cos θ), then the minimum positive value of y is:",
    "options": [
      "1",
      "2",
      "1 / (√3 + 1)",
      "1 / 2"
    ],
    "correctAnswer": 0,
    "explanation": "sin θ + √3 cos θ can be written as 2 [1/2 sin θ + √3/2 cos θ] = 2 sin(θ + 60°).\nMaximum value of denominator = 2 × 1 = 2.\nMinimum value of y = 2 / (Denominator_max) = 2 / 2 = 1.\nHence, y_min = 1.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex13",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Rate of Increase of Disc Area",
    "difficulty": "Easy",
    "questionText": "A metallic circular disc is being heated. Its area A (in m²) at any time t (in seconds) is given by A = 5t² + 4t + 8. The instantaneous rate of increase of area at t = 3 s is:",
    "options": [
      "30 m²/s",
      "24 m²/s",
      "65 m²/s",
      "34 m²/s"
    ],
    "correctAnswer": 3,
    "explanation": "dA/dt = d/dt (5t² + 4t + 8) = 10t + 4.\nAt t = 3 s: dA/dt = 10(3) + 4 = 34 m²/s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex14",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Derivative of Cosine Function",
    "difficulty": "Easy",
    "questionText": "If position y = cos(5 – 3t), then velocity dy/dt is equal to:",
    "options": [
      "5 sin (5 – 3t)",
      "3 sin (5 – 3t)",
      "–5 sin (5 – 3t)",
      "–3 sin (5 – 3t)"
    ],
    "correctAnswer": 1,
    "explanation": "dy/dt = -sin(5 - 3t) × d/dt(5 - 3t) = -sin(5 - 3t) × (-3) = 3 sin(5 - 3t).",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex15",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Integration of Linear Rational Function",
    "difficulty": "Easy",
    "questionText": "The definite integral ∫ dx / (3x + 5) evaluates to:",
    "options": [
      "Not defined",
      "ln(3x + 5) + c",
      "(1/3) ln(3x + 5) + c",
      "3 ln(3x + 5) + c"
    ],
    "correctAnswer": 2,
    "explanation": "Using standard integral ∫ dx / (ax + b) = (1/a) ln|ax + b| + c, for a = 3: (1/3) ln(3x + 5) + c.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex16",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Maximum Velocity from Acceleration-Time Graph",
    "difficulty": "Medium",
    "questionText": "A particle starting from rest undergoes rectilinear motion with acceleration a. The a-t graph is a right triangle with base t = 12 s and peak acceleration a = 10 m/s². The maximum velocity attained by the particle is:",
    "options": [
      "120 m/s",
      "60 m/s",
      "22 m/s",
      "80 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Change in velocity Δv = Area under a-t graph.\nSince u = 0, v_max = Area of triangle = (1/2) × base × height = (1/2) × 12 × 10 = 60 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex17",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Displacement-Time Graph Interpretation",
    "difficulty": "Medium",
    "questionText": "The displacement-time (x-t) curves of two moving objects A (straight line) and B (upward concave parabola) are plotted. Which of the following statements is INCORRECT?",
    "options": [
      "B is moving with constant velocity",
      "A is moving with increasing speed",
      "B is moving with non-zero constant acceleration",
      "Acceleration of A may be constant"
    ],
    "correctAnswer": 0,
    "explanation": "Since the x-t graph of B is curved (parabolic), its velocity is changing with time; it is NOT moving with constant velocity. Statement (1) is incorrect.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex18",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Uniform Retardation Stopping Distance",
    "difficulty": "Hard",
    "questionText": "A body moving with uniform retardation covers 3 km before its speed is reduced to half of its initial value (u/2). It will come to rest in covering an additional distance of:",
    "options": [
      "1 km",
      "2 km",
      "3 km",
      "0.5 km"
    ],
    "correctAnswer": 0,
    "explanation": "v² - u² = 2as. (u/2)² - u² = 2a(3) ⟹ -3u²/4 = 6a ⟹ a = -u²/8.\nFor coming to rest from u/2: 0² - (u/2)² = 2a s' ⟹ -u²/4 = 2(-u²/8) s' = (-u²/4) s' ⟹ s' = 1 km.\nHence, it travels an additional 1 km before coming to rest.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex19",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Vertical Projection from Tower Ground Speed",
    "difficulty": "Hard",
    "questionText": "A ball is thrown vertically upward with initial velocity u from the top of a tower. If it strikes the ground with speed 3u, the total time taken by the ball to reach the ground is:",
    "options": [
      "u / g",
      "2u / g",
      "3u / g",
      "4u / g"
    ],
    "correctAnswer": 3,
    "explanation": "Using v = u + at taking upward as positive: v = -3u, u_initial = +u, a = -g.\n-3u = +u - gt ⟹ gt = 4u ⟹ t = 4u / g.\nHence, total time taken is 4u / g.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex20",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Velocity from Quadratic Displacement",
    "difficulty": "Easy",
    "questionText": "The displacement of a body is given by s = (1/2) g t², where g is acceleration due to gravity. The velocity of the body at any time t is:",
    "options": [
      "g t³ / 6",
      "g t² / 2",
      "g t",
      "g t / 2"
    ],
    "correctAnswer": 2,
    "explanation": "Velocity v = ds/dt = d/dt [(1/2) g t²] = (1/2) g (2t) = g t.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex21",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Tower Height Calculation",
    "difficulty": "Hard",
    "questionText": "A ball thrown vertically upward from the top of a tower with speed 100 m/s strikes a pond near the base of the tower after 25 seconds. The height of the tower is (take g = 10 m/s²):",
    "options": [
      "500 m",
      "125 m",
      "625 m",
      "425 m"
    ],
    "correctAnswer": 2,
    "explanation": "Taking upward as positive: initial velocity u = +100 m/s, a = -10 m/s², t = 25 s.\nDisplacement s = ut + (1/2)at² = 100(25) - (1/2)(10)(25)² = 2500 - 5(625) = 2500 - 3125 = -625 m.\nHeight of the tower = |s| = 625 m.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex22",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Galileo's Odd Number Ratio",
    "difficulty": "Easy",
    "questionText": "A ball falls freely from rest under gravity. The ratio of the distances travelled in the first, second, third, and fourth second is:",
    "options": [
      "4 : 3 : 2 : 1",
      "7 : 5 : 3 : 1",
      "1 : 2 : 3 : 4",
      "1 : 3 : 5 : 7"
    ],
    "correctAnswer": 3,
    "explanation": "Distance in nth second: s_n = u + (g/2)(2n - 1) = (g/2)(2n - 1) for u = 0.\nFor n = 1, 2, 3, 4: s₁ : s₂ : s₃ : s₄ = 1 : 3 : 5 : 7 (Galileo's Law of Odd Numbers).",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex23",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Time for Half Velocity",
    "difficulty": "Medium",
    "questionText": "A ball thrown vertically upward attains a maximum height of 45 m. Taking g = 10 m/s², the time after which the velocity of the ball becomes equal to half the velocity of projection is:",
    "options": [
      "2.0 s",
      "1.5 s",
      "1.0 s",
      "0.5 s"
    ],
    "correctAnswer": 1,
    "explanation": "H_max = u² / (2g) ⟹ 45 = u² / 20 ⟹ u² = 900 ⟹ u = 30 m/s.\nFor v = u / 2 = 15 m/s: v = u - gt ⟹ 15 = 30 - 10t ⟹ 10t = 15 ⟹ t = 1.5 s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex24",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Deceleration of Car",
    "difficulty": "Easy",
    "questionText": "A car travelling with a velocity of 80 km/h is slowed down to 44 km/h in 15 s. The magnitude of retardation produced is:",
    "options": [
      "0.67 m/s²",
      "1.0 m/s²",
      "1.25 m/s²",
      "1.5 m/s²"
    ],
    "correctAnswer": 0,
    "explanation": "u = 80 × 5/18 = 22.22 m/s; v = 44 × 5/18 = 12.22 m/s.\nRetardation a = (u - v) / t = (22.22 - 12.22) / 15 = 10 / 15 = 0.67 m/s².",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-ex25",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Driver Reaction Time",
    "difficulty": "Medium",
    "questionText": "A driver driving a car at speed 72 km/h suddenly spots an obstacle. If the distance covered by the car before brakes are applied is 5 m, the reaction time of the driver is:",
    "options": [
      "0.50 s",
      "0.10 s",
      "10.0 s",
      "0.25 s"
    ],
    "correctAnswer": 3,
    "explanation": "Speed u = 72 km/h = 72 × (5/18) = 20 m/s.\nDuring reaction time t_r, car moves at constant speed: d = u × t_r ⟹ 5 = 20 × t_r ⟹ t_r = 5/20 = 0.25 s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-01",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Average Speed for Two Halves",
    "difficulty": "Easy",
    "questionText": "A car travels with speed 3 m/s for the first half of the distance and 6 m/s for the remaining half. The average speed of the entire journey is:",
    "options": [
      "6 m/s",
      "18 m/s",
      "9 m/s",
      "4 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "v_avg = 2(3)(6) / (3 + 6) = 36 / 9 = 4 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-02",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Round Trip Average Velocity",
    "difficulty": "Easy",
    "questionText": "A car travels from point A to B at 40 km/h and returns back to A along the same track at 60 km/h. Its average velocity is:",
    "options": [
      "60 km/h",
      "Zero",
      "48 km/h",
      "50 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "Since net displacement for the round trip is zero, average velocity = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-04",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Circular Track Displacement",
    "difficulty": "Easy",
    "questionText": "An athlete completes one round of a circular track of radius R in 20 s with constant speed. His displacement at the end of 1 minute 10 seconds (70 s) will be:",
    "options": [
      "Zero",
      "2R",
      "2πR",
      "7πR"
    ],
    "correctAnswer": 1,
    "explanation": "In 70 s, number of rounds = 70 / 20 = 3.5 rounds.\nAfter 3.5 rounds, athlete is at the diametrically opposite point ⟹ Displacement = 2R.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-05",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Displacement to Distance Ratio",
    "difficulty": "Easy",
    "questionText": "The numerical ratio of the magnitude of displacement to the distance covered by a moving body is always:",
    "options": [
      "< 1",
      "= 1",
      "≤ 1",
      "≥ 1"
    ],
    "correctAnswer": 2,
    "explanation": "Displacement is the straight-line shortest path between two points, so |Displacement| ≤ Distance ⟹ |Displacement| / Distance ≤ 1.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-06",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Average Speed Equal Time Intervals",
    "difficulty": "Easy",
    "questionText": "A particle moves for 20 s with speed 6 m/s, then 20 s with speed 8 m/s, and finally 20 s with speed 10 m/s. The average speed is:",
    "options": [
      "6 m/s",
      "8 m/s",
      "10 m/s",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "For equal time intervals: v_avg = (v₁ + v₂ + v₃) / 3 = (6 + 8 + 10) / 3 = 24 / 3 = 8 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-07",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Velocity from Polynomial x(t)",
    "difficulty": "Easy",
    "questionText": "The position of a body moving in a straight line is x = (2t² + 2t + 9) m. The velocity of the body at t = 1 s is:",
    "options": [
      "6 m/s",
      "8 m/s",
      "4 m/s",
      "2 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "v = dx/dt = 4t + 2. At t = 1 s: v = 4(1) + 2 = 6 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-08",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Maximum Position from Velocity Zero",
    "difficulty": "Medium",
    "questionText": "The position of a particle along the y-axis is given by y = 3t – t². The time when the particle attains maximum position in the positive y direction is:",
    "options": [
      "1.5 s",
      "4.0 s",
      "2.0 s",
      "3.0 s"
    ],
    "correctAnswer": 0,
    "explanation": "At maximum position, v_y = dy/dt = 0 ⟹ 3 - 2t = 0 ⟹ t = 1.5 s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-09",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Velocity from a-t Graph",
    "difficulty": "Medium",
    "questionText": "The acceleration-time graph of a particle starting with initial velocity 10 m/s at t = 0 consists of a trapezoid with area -6 m/s between t = 0 and 8 s. The final velocity at t = 8 s is:",
    "options": [
      "2 m/s",
      "4 m/s",
      "10 m/s",
      "12 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "v(8) = v(0) + Area(a-t) = 10 - 6 = 4 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-10",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Free Fall First Quarter Height Time",
    "difficulty": "Medium",
    "questionText": "A body falling freely from rest from height h takes 8 s to reach the ground. The time it takes to cover the first one-fourth (h/4) of the height is:",
    "options": [
      "4 s",
      "6 s",
      "2 s",
      "5 s"
    ],
    "correctAnswer": 0,
    "explanation": "h = (1/2) g t² ⟹ t = √(2h/g). For h/4: t₁ = √[2(h/4)/g] = (1/2) √(2h/g) = (1/2)(8 s) = 4 s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-11",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Definite Integral of Quadratic",
    "difficulty": "Easy",
    "questionText": "Evaluation of the definite integral x = ∫₀³ t² dt gives x equal to:",
    "options": [
      "Zero",
      "3",
      "9",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "x = [t³ / 3]₀³ = (27 - 0) / 3 = 9.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-14",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Two Crossing Trains",
    "difficulty": "Medium",
    "questionText": "A 300 m long train moving at 90 km/h crosses another train of length 700 m moving at the same speed (90 km/h) in the opposite direction. The time taken to cross each other is:",
    "options": [
      "56 s",
      "68 s",
      "20 s",
      "92 s"
    ],
    "correctAnswer": 2,
    "explanation": "v_rel = 90 + 90 = 180 km/h = 180 × (5/18) = 50 m/s.\nTotal distance = 300 + 700 = 1000 m.\nTime = 1000 / 50 = 20 s.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch03-secA-15",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "NCERT MCQs - Stopping Distance vs Speed",
    "difficulty": "Easy",
    "questionText": "When a car is stopped by applying brakes, it stops in 100 m. If the speed of the car is halved (v/2) and the same retarding acceleration is applied, it will stop in a distance of:",
    "options": [
      "25 m",
      "50 m",
      "75 m",
      "100 m"
    ],
    "correctAnswer": 0,
    "explanation": "Stopping distance s = v² / (2a) ∝ v². If speed is halved, stopping distance becomes (1/2)² × 100 = 25 m.",
    "tags": [
      "NCERT NEET Physics",
      "Motion in a Straight Line",
      "Class 11"
    ]
  }
];

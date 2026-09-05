import { Question } from '../types';

export const MOTION_BOOK_QUESTIONS: Question[] = [
  {
    "id": "mot-1d-dist-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "A Body moves 6 m north, 8 m east and 10 m vertically upwards. What is its resultant displacement from initial position?",
    "options": [
      "10√2 m",
      "10 m",
      "10/√2 m",
      "10 × 2 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{r} = 8\\hat{i} + 6\\hat{j} + 10\\hat{k}$. $|\\vec{r}| = \\sqrt{8^2 + 6^2 + 10^2} = \\sqrt{64 + 36 + 100} = \\sqrt{200} = 10\\sqrt{2}\\text{ m}$.",
    "tags": [
      "DCE 2000",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-1d-dist-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "A man goes 10 m towards North, then 20 m towards east. His net displacement is:",
    "options": [
      "22.5 m",
      "25 m",
      "25.5 m",
      "30 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $|\\vec{r}| = \\sqrt{20^2 + 10^2} = \\sqrt{500} = 10\\sqrt{5} \\approx 22.36\\text{ m} \\approx 22.5\\text{ m}$.",
    "tags": [
      "KCET 1999",
      "AFMC 2003",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-1d-dist-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Medium",
    "questionText": "A person moves 30 m north, then 20 m towards east and finally 30√2 m in south-west direction. The displacement of the person from the origin will be:",
    "options": [
      "10 m along north",
      "10 m along south",
      "10 m along west",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{s} = 30\\hat{j} + 20\\hat{i} + 30\\sqrt{2}\\left(-\\frac{\\hat{i}}{\\sqrt{2}} - \\frac{\\hat{j}}{\\sqrt{2}}\\right) = 30\\hat{j} + 20\\hat{i} - 30\\hat{i} - 30\\hat{j} = -10\\hat{i} = 10\\text{ m along West}$.",
    "tags": [
      "J & K CET 2004",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-1d-dist-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Medium",
    "questionText": "An aeroplane flies 400 m north and 300 m south and then flies 1200 m upwards (or 400 m north, 300 m west, 1200 m upwards). The net displacement is:",
    "options": [
      "1200 m",
      "1300 m",
      "1400 m",
      "1500 m"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{r} = 400\\hat{j} - 300\\hat{i} + 1200\\hat{k} \\implies |\\vec{r}| = \\sqrt{400^2 + 300^2 + 1200^2} = \\sqrt{250000 + 1440000} = \\sqrt{1690000} = 1300\\text{ m}$.",
    "tags": [
      "AFMC 2004",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-1d-dist-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "An athlete completes one round of a circular track of radius R in 40 sec. What will be his displacement at the end of 2 min. 20 sec?",
    "options": [
      "Zero",
      "2R",
      "2πR",
      "7πR"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Total time $= 140\\text{ s} = 3.5\\text{ rounds}$. After 3.5 revolutions, the athlete is diametrically opposite to the start point: displacement $= 2R$.",
    "tags": [
      "NCERT 1990",
      "Kerala PMT 2004",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-1d-dist-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Medium",
    "questionText": "A wheel of radius 1 meter rolls forward half a revolution on a horizontal ground. The magnitude of the displacement of the point of the wheel initially in contact with the ground is:",
    "options": [
      "2π",
      "√2 π",
      "√(π² + 4)",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Horizontal shift $x = \\pi R = \\pi(1) = \\pi\\text{ m}$. Vertical shift $y = 2R = 2\\text{ m}$. Net displacement $d = \\sqrt{x^2 + y^2} = \\sqrt{\\pi^2 + 4}$.",
    "tags": [
      "BCECE 2005",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-1d-uni-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A person travels along a straight road for half the distance with velocity v₁ and the remaining half distance with velocity v₂. The average velocity is given by:",
    "options": [
      "v₁ v₂",
      "v₂² / v₁²",
      "(v₁ + v₂)/2",
      "2v₁v₂ / (v₁ + v₂)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Harmonic mean for equal distances: $v_{\\text{avg}} = \\frac{2d}{d/v_1 + d/v_2} = \\frac{2v_1 v_2}{v_1 + v_2}$.",
    "tags": [
      "MP PMT 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "The displacement-time graph for two particles A and B are straight lines inclined at angles of 30° and 60° with the time axis. The ratio of velocities v_A : v_B is:",
    "options": [
      "1 : 2",
      "1 : √3",
      "√3 : 1",
      "1 : 3"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v = \\tan\\theta$. $\\frac{v_A}{v_B} = \\frac{\\tan 30^\\circ}{\\tan 60^\\circ} = \\frac{1/\\sqrt{3}}{\\sqrt{3}} = \\frac{1}{3}$.",
    "tags": [
      "CPMT 1990",
      "Pb. PET 2003",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A car travels from A to B at a speed of 20 km/hr and returns at a speed of 30 km/hr. The average speed of the car for the whole journey is:",
    "options": [
      "25 km/hr",
      "24 km/hr",
      "50 km/hr",
      "5 km/hr"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(20)(30)}{20 + 30} = \\frac{1200}{50} = 24\\text{ km/hr}$.",
    "tags": [
      "MP PET 1985",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A boy walks to his school at a distance of 6 km with constant speed of 2.5 km/hour and walks back with a constant speed of 4 km/hr. His average speed for round trip is:",
    "options": [
      "24/13",
      "40/13",
      "3",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(2.5)(4)}{2.5 + 4} = \\frac{20}{6.5} = \\frac{40}{13}\\text{ km/hr}$.",
    "tags": [
      "AIIMS 1995",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A car travels first half distance at 30 km/hr and second half at 50 km/hr. Average speed is:",
    "options": [
      "42.5 km/hr",
      "40.0 km/hr",
      "37.5 km/hr",
      "35.0 km/hr"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(30)(50)}{30 + 50} = \\frac{3000}{80} = 37.5\\text{ km/hr}$.",
    "tags": [
      "Manipal MEE 1995",
      "AFMC 1998",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "One car covers 1/3 of the distance with 20 km/hr and the rest (2/3) with 60 km/hr. The average speed is:",
    "options": [
      "40 km/hr",
      "80 km/hr",
      "46 2/3 km/hr",
      "36 km/hr"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{d}{d/(3\\times 20) + 2d/(3\\times 60)} = \\frac{1}{1/60 + 2/180} = \\frac{1}{5/180} = 36\\text{ km/hr}$.",
    "tags": [
      "MP PMT 1999",
      "CPMT 2002",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A car moves for half of its time at 80 km/h and for rest half of time at 40 km/h. Total distance is 60 km. The average speed is:",
    "options": [
      "60 km/h",
      "80 km/h",
      "120 km/h",
      "180 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Arithmetic mean for equal time intervals: $v_{\\text{avg}} = \\frac{v_1 + v_2}{2} = \\frac{80 + 40}{2} = 60\\text{ km/hr}$.",
    "tags": [
      "RPET 1996",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A train has a speed of 60 km/h for the first 1 hour and 40 km/h for the next half hour. Its average speed in km/h is:",
    "options": [
      "50",
      "53.33",
      "48",
      "70"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Total distance $= 60(1) + 40(0.5) = 80\\text{ km}$. Total time $= 1.5\\text{ hr}$. $v_{\\text{avg}} = \\frac{80}{1.5} = 53.33\\text{ km/hr}$.",
    "tags": [
      "JIPMER 1999",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following is a one dimensional motion?",
    "options": [
      "Landing of an aircraft",
      "Earth revolving around the sun",
      "Motion of wheels of moving train",
      "Train running on a straight track"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Motion along a straight line requires only one spatial coordinate.",
    "tags": [
      "BHU 2000",
      "CBSE PMT 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A 150 m long train moves at 45 km/h (12.5 m/s). Time taken to cross a bridge of length 850 m is:",
    "options": [
      "56 sec",
      "68 sec",
      "80 sec",
      "92 sec"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Total distance $= 150 + 850 = 1000\\text{ m}$. Speed $= 45 \\times \\frac{5}{18} = 12.5\\text{ m/s}$. $t = \\frac{1000}{12.5} = 80\\text{ s}$.",
    "tags": [
      "CBSE PMT 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves on straight line, returns to start in 10 s covering 30 m total distance. Which statement is FALSE?",
    "options": [
      "Displacement of particle is zero",
      "Average speed of particle is 3 m/s",
      "Displacement of the particle is 30 m",
      "Both (a) and (b)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Returning to the starting point means net displacement is Zero, not 30 m.",
    "tags": [
      "CBSE PMT 2000",
      "AFMC 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves along a semicircle of radius 10 m in 5 seconds. The average velocity of the particle is:",
    "options": [
      "2π ms⁻¹",
      "4π ms⁻¹",
      "2 ms⁻¹",
      "4 ms⁻¹"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Displacement $= 2R = 2(10) = 20\\text{ m}$. Average velocity $= \\frac{20\\text{ m}}{5\\text{ s}} = 4\\text{ m/s}$.",
    "tags": [
      "Kerala (Engg.) 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "A man walks 2.5 km to market at 5 km/h (30 min) and returns at 7.5 km/h. Average speed from 0 to 40 min is:",
    "options": [
      "5 km/h",
      "25/4 km/h",
      "30/4 km/h",
      "45/8 km/h"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Distance in first 30 min $= 2.5\\text{ km}$. In remaining 10 min ($1/6\\text{ hr}$) returning at $7.5\\text{ km/h}$, distance $= 7.5 \\times 1/6 = 1.25\\text{ km}$. Total distance $= 3.75\\text{ km}$. $v_{\\text{avg}} = \\frac{3.75}{40/60} = \\frac{45}{8}\\text{ km/hr}$.",
    "tags": [
      "AMU (Med.) 2002",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "The ratio of numerical values of average velocity to average speed is always:",
    "options": [
      "Unity",
      "Unity or less",
      "Unity or more",
      "Less than unity"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Since $|\\text{Displacement}| \\leq \\text{Distance}$, $|\\vec{v}_{\\text{avg}}| / v_{\\text{avg}} \\leq 1$.",
    "tags": [
      "MP PET 2002",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A person travels first half time with velocity v₁ and next half time with v₂. Mean velocity is:",
    "options": [
      "2/V = 1/v₁ + 1/v₂",
      "V = (v₁ + v₂)/2",
      "V = √(v₁ v₂)",
      "V = v₁/v₂"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: For equal time intervals, $V_{\\text{avg}} = \\frac{v_1 + v_2}{2}$.",
    "tags": [
      "RPET 1999",
      "BHU 2002",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "If a car covers 2/5th distance with v₁ and 3/5th with v₂, average speed is:",
    "options": [
      "1/2 √(v₁v₂)",
      "(v₁ + v₂)/2",
      "2v₁v₂ / (v₁ + v₂)",
      "5v₁v₂ / (3v₁ + 2v₂)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{d}{(2d/5v_1) + (3d/5v_2)} = \\frac{5v_1 v_2}{3v_1 + 2v_2}$.",
    "tags": [
      "MP PMT 2003",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "For straight line motion with s-t graph curving upward from O to A then straight from A to D:",
    "options": [
      "Object moves with constantly increasing velocity from O to A and then with constant velocity",
      "Velocity increases uniformly",
      "Average velocity is zero",
      "The graph shown is impossible"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Concave upward curve indicates increasing velocity (acceleration), while straight line indicates constant slope/velocity.",
    "tags": [
      "DCE 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "The numerical ratio of displacement to distance covered is always:",
    "options": [
      "Less than one",
      "Equal to one",
      "Equal to or less than one",
      "Equal to or greater than one"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Displacement $\\leq$ Distance, so the ratio is $\\leq 1$.",
    "tags": [
      "BHU 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A 100 m long train moving at 45 km/hr (12.5 m/s) crosses a 1 km (1000 m) bridge. Time taken is:",
    "options": [
      "58 s",
      "68 s",
      "78 s",
      "88 s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Total distance $= 100 + 1000 = 1100\\text{ m}$. $t = \\frac{1100}{12.5} = 88\\text{ s}$.",
    "tags": [
      "BHU 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves 20 s with 3 m/s, 20 s with 4 m/s and 20 s with 5 m/s. Average velocity is:",
    "options": [
      "3 m/s",
      "4 m/s",
      "5 m/s",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: For equal intervals of time, $v_{\\text{avg}} = \\frac{3 + 4 + 5}{3} = 4\\text{ m/s}$.",
    "tags": [
      "MH CET 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "The correct statement from the following is:",
    "options": [
      "A body having zero velocity will not necessarily have zero acceleration",
      "A body having zero velocity will necessarily have zero acceleration",
      "A body having uniform speed can have only uniform acceleration",
      "A body having non-uniform velocity will have zero acceleration"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: At the top of vertical trajectory under gravity, instantaneous velocity $v = 0$ while acceleration $a = g = 9.8\\text{ m/s}^2 \\neq 0$.",
    "tags": [
      "MP PET 1993",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "A bullet loses half its velocity after penetrating 3 cm into target. How much further will it penetrate before coming to rest?",
    "options": [
      "1.5 cm",
      "1.0 cm",
      "3.0 cm",
      "2.0 cm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $(u/2)^2 = u^2 - 2a(3) \\implies 6a = 3u^2/4 \\implies a = u^2/8$.\n$0 = (u/2)^2 - 2a x \\implies 2(u^2/8)x = u^2/4 \\implies x = 1.0\\text{ cm}$.",
    "tags": [
      "AIEEE 2005",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "Boy B starts running from (a,0) at velocity v₁ along y-axis. Boy A from (0,0) runs at velocity v and catches B in time t. Then t is:",
    "options": [
      "a / √(v² + v₁²)",
      "a / √(v² - v₁²)",
      "a / (v - v₁)",
      "a / (v + v₁)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $(vt)^2 = a^2 + (v_1 t)^2 \\implies t^2(v^2 - v_1^2) = a^2 \\implies t = \\frac{a}{\\sqrt{v^2 - v_1^2}}$.",
    "tags": [
      "CBSE PMT 2005",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-uni-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A car travels half distance at 40 kmph and remaining half at 60 kmph. Average velocity is:",
    "options": [
      "40",
      "45",
      "48",
      "50"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(40)(60)}{40 + 60} = \\frac{4800}{100} = 48\\text{ km/h}$.",
    "tags": [
      "Kerala PMT 2005",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "A particle starts from rest with constant acceleration. It travels S₁ in first 10 s and S₂ in next 10 s. Then:",
    "options": [
      "S₁ = S₂",
      "S₁ = S₂ / 3",
      "S₁ = S₂ / 2",
      "S₁ = S₂ / 4"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Galileo's law of odd numbers: Distances in equal consecutive time intervals are in ratio $1 : 3 : 5$. Thus $S_1 : S_2 = 1 : 3 \\implies S_1 = S_2 / 3$.",
    "tags": [
      "NCERT 1972",
      "CPMT 1997",
      "MP PMT 2002",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "The displacement x = a₀ + a₁ t + a₂ t². The acceleration of the particle is:",
    "options": [
      "a₀",
      "a₁",
      "2a₂",
      "a₂"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $v = \\frac{dx}{dt} = a_1 + 2a_2 t \\implies a = \\frac{dv}{dt} = 2a_2$.",
    "tags": [
      "NCERT 1974",
      "RPMT 1999",
      "AFMC 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "The coordinates are x = a t² and y = b t². The speed of the particle at any moment is:",
    "options": [
      "2t(a + b)",
      "2t√(a² - b²)",
      "t√(a² + b²)",
      "2t√(a² + b²)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v_x = 2at, v_y = 2bt \\implies v = \\sqrt{(2at)^2 + (2bt)^2} = 2t\\sqrt{a^2 + b^2}$.",
    "tags": [
      "DPMT 1984",
      "CPMT 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "An electron starting from rest has velocity v = kt where k = 2 m/s². The distance travelled in first 3 seconds will be:",
    "options": [
      "9 m",
      "16 m",
      "27 m",
      "36 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $s = \\int_0^3 2t\\,dt = [t^2]_0^3 = 9\\text{ m}$.",
    "tags": [
      "NCERT 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Displacement of a body is proportional to the cube of time (x ∝ t³). The magnitude of acceleration is:",
    "options": [
      "Increasing with time",
      "Decreasing with time",
      "Constant but not zero",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $x = c t^3 \\implies v = 3 c t^2 \\implies a = 6 c t$. Acceleration increases linearly with time.",
    "tags": [
      "NCERT 1990",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Instantaneous velocity of a body can be measured:",
    "options": [
      "Graphically",
      "Vectorially",
      "By speedometer",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Instantaneous velocity is the slope of tangent to the position-time curve ($dx/dt$).",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Body moves from rest under constant acceleration. S₁ is displacement in first (p - 1) sec and S₂ in first p sec. Displacement in (p² - p + 1)th sec will be:",
    "options": [
      "S₁ + S₂",
      "S₁ S₂",
      "S₁ - S₂",
      "S₁ / S₂"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Using kinematic sequence $s_n = \\frac{a}{2}(2n - 1)$, substitution gives $S_1 + S_2$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "A body under the action of several forces will have zero acceleration:",
    "options": [
      "When body is very light",
      "When body is very heavy",
      "When body is a point body",
      "When vector sum of all forces acting on it is zero"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Newton's 2nd Law: $\\vec{a} = \\frac{\\sum \\vec{F}}{m} = 0 \\iff \\sum \\vec{F} = 0$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "A body starts from origin along X-axis with v = 4t³ - 2t. What is acceleration when it is 2 m from origin?",
    "options": [
      "28 m/s²",
      "22 m/s²",
      "12 m/s²",
      "10 m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $x = \\int (4t^3 - 2t)dt = t^4 - t^2 = 2 \\implies (t^2 - 2)(t^2 + 1) = 0 \\implies t = \\sqrt{2}\\text{ s}$.\n$a = \\frac{dv}{dt} = 12t^2 - 2 = 12(2) - 2 = 22\\text{ m/s}^2$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Relation between time and distance is t = αx² + βx. The retardation is:",
    "options": [
      "2αv³",
      "2βv³",
      "2αβv³",
      "2β²v³"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\frac{dt}{dx} = 2\\alpha x + \\beta = \\frac{1}{v} \\implies v = (2\\alpha x + \\beta)^{-1}$.\n$a = v \\frac{dv}{dx} = v \\left[-(2\\alpha x + \\beta)^{-2}(2\\alpha)\\right] = -2\\alpha v^3 \\implies \\text{Retardation} = 2\\alpha v^3$.",
    "tags": [
      "NCERT 1982",
      "AIEEE 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "For uniform acceleration with average velocities v₁, v₂, v₃ in consecutive time intervals t₁, t₂, t₃:",
    "options": [
      "(v₁ - v₂) : (v₂ - v₃) = (t₁ - t₂) : (t₂ + t₃)",
      "(v₁ - v₂) : (v₂ - v₃) = (t₁ + t₂) : (t₂ + t₃)",
      "(v₁ - v₂) : (v₂ - v₃) = (t₁ - t₂) : (t₁ - t₃)",
      "(v₁ - v₂) : (v₂ - v₃) = (t₁ - t₂) : (t₂ - t₃)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: For uniform acceleration, $(v_1 - v_2) / (v_2 - v_3) = (t_1 + t_2) / (t_2 + t_3)$.",
    "tags": [
      "NCERT 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "The acceleration of a moving body can be found from:",
    "options": [
      "Area under velocity-time graph",
      "Area under distance-time graph",
      "Slope of the velocity-time graph",
      "Slope of distance-time graph"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $a = \\frac{dv}{dt} = \\text{slope of } v\\text{-}t\\text{ curve}$.",
    "tags": [
      "DPMT 1981",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Initial velocity is u (at t=0) and acceleration is f = at. Which relation is valid?",
    "options": [
      "v = u + at²",
      "v = u + at²/2",
      "v = u + at",
      "v = u"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\int_u^v dv = \\int_0^t at\\,dt \\implies v - u = \\frac{1}{2}at^2 \\implies v = u + \\frac{1}{2}at^2$.",
    "tags": [
      "CPMT 1981",
      "BHU 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Initial velocity is 10 m/s and retardation is 2 m/s². Distance moved in 5th second is:",
    "options": [
      "1 m",
      "19 m",
      "50 m",
      "75 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $s_{5\\text{th}} = u - \\frac{a}{2}(2n - 1) = 10 - \\frac{2}{2}(2(5) - 1) = 10 - 9 = 1\\text{ m}$.",
    "tags": [
      "CPMT 1976",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Car moving at 20 m/s stops after travelling 10 m. Its acceleration is:",
    "options": [
      "20 m/sec²",
      "-20 m/sec²",
      "-40 m/sec²",
      "+2 m/sec²"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $v^2 = u^2 + 2as \\implies 0 = 20^2 + 2a(10) \\implies 20a = -400 \\implies a = -20\\text{ m/s}^2$.",
    "tags": [
      "EAMCET 1979",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "A body with uniform acceleration 2 m/s² has velocity 10 m/s. Its velocity after 4 sec is:",
    "options": [
      "12 m/sec",
      "14 m/sec",
      "16 m/sec",
      "18 m/sec"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v = u + at = 10 + 2(4) = 18\\text{ m/s}$.",
    "tags": [
      "EAMCET 1979",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Particle starting from rest travels distance x in first 2 s and y in next 2 s, then:",
    "options": [
      "y = x",
      "y = 2x",
      "y = 3x",
      "y = 4x"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: By Galileo's odd-number ratio for equal intervals, $y = 3x$.",
    "tags": [
      "EAMCET 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Initial velocity is 7 m/s, uniform acceleration 4 m/s². Distance covered in 5th second is:",
    "options": [
      "25 m",
      "35 m",
      "50 m",
      "85 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $s_{5\\text{th}} = 7 + \\frac{4}{2}(2(5) - 1) = 7 + 2(9) = 25\\text{ m}$.",
    "tags": [
      "MP PMT 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Velocity depends on time as v = 20 + 0.1t². The body is undergoing:",
    "options": [
      "Uniform acceleration",
      "Uniform retardation",
      "Non-uniform acceleration",
      "Zero acceleration"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $a = \\frac{dv}{dt} = 0.2t$ (time-dependent, non-uniform acceleration).",
    "tags": [
      "MNR 1995",
      "UPSEAT 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following four statements is FALSE?",
    "options": [
      "A body can have zero velocity and still be accelerated",
      "A body can have a constant velocity and still have a varying speed",
      "A body can have a constant speed and still have a varying velocity",
      "The direction of velocity can change when acceleration is constant"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Constant velocity requires both constant magnitude (speed) and direction. A varying speed violates constant velocity.",
    "tags": [
      "Manipal MEE 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "A particle with uniform acceleration travels 24 m and 64 m in two consecutive intervals of 4 s each. Initial velocity is:",
    "options": [
      "1 m/sec",
      "10 m/sec",
      "5 m/sec",
      "2 m/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $24 = 4u + 8a \\implies u + 2a = 6$. $24 + 64 = 88 = 8u + 32a \\implies u + 4a = 11$. Solving gives $a = 2.5\\text{ m/s}^2, u = 1\\text{ m/s}$.",
    "tags": [
      "MP PET 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Position is x = 3t² - 6t, y = t² - 2t. Which statement is correct?",
    "options": [
      "Acceleration is zero at t = 0",
      "Velocity is zero at t = 0",
      "Velocity is zero at t = 1 second",
      "Velocity and acceleration are never zero"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $v_x = 6t - 6 = 0$ at $t = 1\\text{ s}$; $v_y = 2t - 2 = 0$ at $t = 1\\text{ s}$.",
    "tags": [
      "MP PMT 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Initial velocity zero, uniform acceleration 8 m/s². Distance travelled in 5th second is:",
    "options": [
      "36 metres",
      "40 metres",
      "100 metres",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $s_{5\\text{th}} = \\frac{8}{2}(2(5) - 1) = 4(9) = 36\\text{ m}$.",
    "tags": [
      "MP PMT 1996",
      "DPMT 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "An alpha particle enters a 4 m tube at 1 km/s (1000 m/s) and exits at 9 km/s (9000 m/s). Time inside is:",
    "options": [
      "8 × 10⁻³ s",
      "80 × 10⁻³ s",
      "800 × 10⁻³ s",
      "8 × 10⁻⁴ s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{avg}} = \\frac{1000 + 9000}{2} = 5000\\text{ m/s}$. $t = \\frac{s}{v_{\\text{avg}}} = \\frac{4}{5000} = 8 \\times 10^{-4}\\text{ s}$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-25",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Cars A and B travel in same direction with v₁ and v₂ (v₁ > v₂). When A is d ahead of B, A applies brakes (retardation a). No collision occurs when:",
    "options": [
      "d < (v₁ - v₂)² / 2a",
      "d < (v₁² - v₂²) / 2a",
      "d > (v₁ - v₂)² / 2a",
      "d > (v₁² - v₂²) / 2a"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Relative velocity $v_{\\text{rel}} = v_1 - v_2$ reduced to zero with retardation $a$ requires stopping distance $s = \\frac{(v_1 - v_2)^2}{2a}$. Thus no collision if $d > \\frac{(v_1 - v_2)^2}{2a}$.",
    "tags": [
      "Pb. PET 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-26",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "A 10 kg body at 10 m/s is acted on by force for 4 s, moving at 2 m/s in opposite direction. Acceleration is:",
    "options": [
      "3 m/sec²",
      "-3 m/sec²",
      "0.3 m/sec²",
      "-0.3 m/sec²"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $a = \\frac{v - u}{t} = \\frac{-2 - 10}{4} = -3\\text{ m/s}^2$.",
    "tags": [
      "MP PET 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-27",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "A body starts from rest with a_x = 6 m/s² and a_y = 8 m/s². Its distance from origin after 4 s is:",
    "options": [
      "56 m",
      "64 m",
      "80 m",
      "128 m"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $x = \\frac{1}{2}(6)(16) = 48\\text{ m}, y = \\frac{1}{2}(8)(16) = 64\\text{ m}$. $d = \\sqrt{48^2 + 64^2} = 80\\text{ m}$.",
    "tags": [
      "MP PMT 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-28",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "A car at 10 m/s stops in 20 m. If velocity is 30 m/s (3 times), stopping distance is:",
    "options": [
      "20/3 m",
      "20 m",
      "60 m",
      "180 m"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $s \\propto u^2 \\implies s = 3^2 \\times 20 = 180\\text{ m}$.",
    "tags": [
      "MP PMT 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-29",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "y = a + bt + ct² - dt⁴. Initial velocity and acceleration are:",
    "options": [
      "b, -4d",
      "-b, 2c",
      "b, 2c",
      "2c, -4d"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: At $t = 0$: $v_0 = b$, $a_0 = 2c$.",
    "tags": [
      "CPMT 1999, 2003",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-30",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "A car at 40 km/h stops in 2 m. If moving at 80 km/h (2 times), minimum stopping distance is:",
    "options": [
      "8 m",
      "2 m",
      "4 m",
      "6 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $s \\propto v^2 \\implies s = 2^2 \\times 2 = 8\\text{ m}$.",
    "tags": [
      "CBSE PMT 1998",
      "AFMC 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-31",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Elevator car (height 2.7 m) ascends with a = 1.2 m/s². Free fall time of bolt from ceiling is:",
    "options": [
      "0.54 s",
      "√6 s",
      "0.7 s",
      "1 s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Effective $g_{\\text{eff}} = g + a = 9.8 + 1.2 = 11.0\\text{ m/s}^2$. $t = \\sqrt{\\frac{2h}{g_{\\text{eff}}}} = \\sqrt{\\frac{2(2.7)}{11.0}} \\approx 0.7\\text{ s}$.",
    "tags": [
      "KCET 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-32",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Displacement x = 2t² + t + 5. The acceleration at t = 2 s is:",
    "options": [
      "4 m/s²",
      "8 m/s²",
      "10 m/s²",
      "15 m/s²"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $v = 4t + 1 \\implies a = 4\\text{ m/s}^2$ (constant for all $t$).",
    "tags": [
      "EAMCET (Engg.) 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-33",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Two trains approach on same track at 40 m/s, 2.0 km (2000 m) apart. Deceleration to avoid collision is:",
    "options": [
      "11.8 m/s²",
      "11.0 m/s²",
      "2.1 m/s²",
      "0.8 m/s²"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Each train has stopping distance $s = 1000\\text{ m}$. $0 = 40^2 - 2a(1000) \\implies a = \\frac{1600}{2000} = 0.8\\text{ m/s}^2$.",
    "tags": [
      "AMU 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-34",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Body moves from rest with a = 5 m/s². Instantaneous speed at t = 10 s is:",
    "options": [
      "50",
      "5",
      "2",
      "0.5"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $v = u + at = 0 + 5(10) = 50\\text{ m/s}$.",
    "tags": [
      "SCRA 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-35",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "A detached boggy stops with uniform deceleration while train continues with constant speed. Distance covered relation is:",
    "options": [
      "Both equal",
      "First will be half of second",
      "First will be 1/4 of second",
      "No definite ratio"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Average speed of boggy is $v/2$, while train speed is $v$. In same time $t$, boggy distance $= (v/2)t = \\frac{1}{2}(\\text{train distance})$.",
    "tags": [
      "RPET 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-1d-non-36",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "A body starts from rest. Ratio of distance travelled during 4th and 3rd second is:",
    "options": [
      "5/7",
      "7/5",
      "3/7",
      "7/3"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\frac{s_{4\\text{th}}}{s_{3\\text{rd}}} = \\frac{2(4) - 1}{2(3) - 1} = \\frac{7}{5}$.",
    "tags": [
      "CBSE PMT 1993",
      "Non-uniform Motion"
    ]
  }
];

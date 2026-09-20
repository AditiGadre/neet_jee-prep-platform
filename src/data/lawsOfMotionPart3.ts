import { Question } from '../types';

export const LAWS_OF_MOTION_PART3_QUESTIONS: Question[] = [
  {
    "id": "lom-qb-201",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The pulleys and strings shown in the figure are smooth and of negligible mass. For the system to remain in equilibrium, the angle \ud835\udf03 shopuld be",
    "options": [
      "0\u00b0",
      "30\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "For equilibrium in vertical direction for body \ud835\udc35 we have \u221a2 \ud835\udc5a\ud835\udc54= 2\ud835\udc47cos\ud835\udf03= 2(\ud835\udc5a\ud835\udc54) cos\ud835\udf03 \ud835\udc47= \ud835\udc5a\ud835\udc54 (at equilibrium) \u2234 cos \ud835\udf03= 1 \u221a2 \u21d2 \ud835\udf03= 45\u00b0",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 135 132\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"135\" height=\"132\"/></svg>"
  },
  {
    "id": "lom-qb-202",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "An insect crawls up a hemispherical surface very slowly. The coefficient of friction between the insect and the surface is 1/3. If the line joining the centre of the hemispherical surface to the insect makes an angle \ud835\udefc with the vertical, the maximum possible value of \ud835\udefc is given by",
    "options": [
      "cot \ud835\udefc= 3",
      "tan \ud835\udefc= 3",
      "sec \ud835\udefc= 3",
      "cosec \ud835\udefc= 3"
    ],
    "correctAnswer": 0,
    "explanation": "The two forces acting on the insect are \ud835\udc5ag and \ud835\udc41. Let us resolve \ud835\udc5a\ud835\udc54 into two components: \ud835\udc5a\ud835\udc54cos \ud835\udefc balances \ud835\udc41 \ud835\udc5a\ud835\udc54sin\ud835\udefc is balanced by the frictional force \ud835\udc41= \ud835\udc5ag cos \ud835\udefc \ud835\udc53= \ud835\udc5ag sin\ud835\udefc But \ud835\udc53= \ud835\udf07\ud835\udc41= \ud835\udf07 \ud835\udc5ag cos\ud835\udefc \u21d2 cot \ud835\udefc= 1 \ud835\udf07 \u21d2 cot \ud835\udefc= 3",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-203",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Which of the following are correct?",
    "options": [
      "A parachutist of weight \ud835\udc4a strikes the ground with his legs and comes to rest with an upward acceleration of magnitude 3 g. force exerted on him by ground during landing is 4 \ud835\udc4a",
      "Two massless spring balances are hung vertically in series from a fixed point and a mass \ud835\udc40 kg is attached to the lower end of the lower spring balance. Each spring balance reads \ud835\udc40 kgf",
      "A rough vertical broad has an acceleration \ud835\udc4e along the horizontal direction so that a block of mass \ud835\udc5a pressing against its vertical side does not fall. The coefficient of friction between the block and the broad is greater than \ud835\udc54/\ud835\udc4e",
      "A man is standing at a spring platform. If man jumps away from the platform the reading of the spring balance first increases and then decreases to zero"
    ],
    "correctAnswer": 0,
    "explanation": "a \ud835\udc39\u2212\ud835\udc5ag = \ud835\udc5a\ud835\udc4e \ud835\udc39= \ud835\udc5a(g + \ud835\udc4e) = 4\ud835\udc5ag = 4\ud835\udc4a b Think of Newton\u2019s third law of motion c \ud835\udc5ag < \ud835\udc53max or \ud835\udc5ag < \ud835\udf07\ud835\udc60\ud835\udc45 or \ud835\udc5ag < \ud835\udf07\ud835\udc60\ud835\udc5a\ud835\udc4e or g < \ud835\udf07\ud835\udc60\ud835\udc4e or \ud835\udf07\ud835\udc60\ud835\udc4e> g or \ud835\udf07\ud835\udc60> g \ud835\udc4e d The jumping away of the man involved upward acceleration. It means an upward force acts on man during jumping. Then from third law, a downward force acts on platform due to which reading first increases",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-204",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass \ud835\udc5a is placed in contact with one end of a smooth tube of mass\ud835\udc40. A horizontal force \ud835\udc39 acts in the tube in each case (i) and (ii). Then,",
    "options": [
      "\ud835\udc4e\ud835\udc5a= 0 and \ud835\udc4e\ud835\udc40= \ud835\udc39 \ud835\udc40 in (\ud835\udc56)",
      "\ud835\udc4e\ud835\udc5a= \ud835\udc4e\ud835\udc40= \ud835\udc39 \ud835\udc40+ \ud835\udc5a in (\ud835\udc56)",
      "\ud835\udc4e\ud835\udc5a= \ud835\udc4e\ud835\udc40= \ud835\udc39 \ud835\udc40+ \ud835\udc5a in (\ud835\udc56\ud835\udc56)",
      "Force on \ud835\udc5a is \ud835\udc5a\ud835\udc39 \ud835\udc40+ \ud835\udc5a in (\ud835\udc56\ud835\udc56)"
    ],
    "correctAnswer": 0,
    "explanation": "In first case, \ud835\udc5a will remain at rest.\ud835\udc4e\ud835\udc40= \ud835\udc39/\ud835\udc40 In second case, both will accelerate \ud835\udc4e\ud835\udc5a= \ud835\udc4e\ud835\udc40= \ud835\udc39/(\ud835\udc40+ \ud835\udc5a) In second case, force on \ud835\udc5a= \ud835\udc5a\ud835\udc4e\ud835\udc5a= \ud835\udc5a\ud835\udc39/(\ud835\udc40+ \ud835\udc5a)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 189 96\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"189\" height=\"96\"/></svg>"
  },
  {
    "id": "lom-qb-205",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Two blocks \ud835\udc34 and \ud835\udc35 of masses \ud835\udc5a\ud835\udc34 and \ud835\udc5a\ud835\udc35 have velocity \ud835\udc63 and d2\ud835\udc63, respectively, at a given instant. 000000A horizontal force \ud835\udc39 acts on the block\ud835\udc34. There is no friction between ground and block \ud835\udc35 and coefficient of friction between \ud835\udc34 and \ud835\udc35 is\ud835\udf07. The friction",
    "options": [
      "On \ud835\udc34 supports its motion",
      "On \ud835\udc35 opposes its motion relative to \ud835\udc34",
      "On \ud835\udc35 opposes its motion",
      "Opposes the motion of both"
    ],
    "correctAnswer": 0,
    "explanation": "Friction on \ud835\udc34 and \ud835\udc35 acts as shown From the figure it is clear that friction on \ud835\udc34 supports it motion and on \ud835\udc35 opposes its motion. And friction always opposes relative motion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 169 66\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"169\" height=\"66\"/></svg>"
  },
  {
    "id": "lom-qb-206",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Mark the correct statement (s) regarding friction",
    "options": [
      "Friction force can be zero, even through the contact surface is rough",
      "Even though there is no relative motion between surfaces, frictional force may exist between them",
      "The expression \ud835\udc53\ud835\udc3f= \ud835\udf07\ud835\udc60\ud835\udc41 or \ud835\udc53\ud835\udc58= \ud835\udf07\ud835\udc58\ud835\udc41 are approximate expression",
      "The expression \ud835\udc53\ud835\udc3f= \ud835\udf07\ud835\udc60\ud835\udc41 tells that the directions of \ud835\udc53\ud835\udc3f and \ud835\udc41 are the same"
    ],
    "correctAnswer": 0,
    "explanation": "For (i); Consider a block at rest on a rough surface and no force (horizontal) is acting on it. Now friction force on it would be zero. For (ii): Consider a heavy block, under the application of small force \ud835\udc39 which is not sufficient to cause its motion, so friction force is static in nature and block doesn\u2019t move For (iii): Refer to concepts and formulae For (iv): Friction force and normal force always act perpendicular to each other",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-207",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Figure shows the displacement of particle going along the \ud835\udc4b-axis as a function of time. The force acting on the particle is zero in the region",
    "options": [
      "\ud835\udc34\ud835\udc35",
      "\ud835\udc35\ud835\udc36",
      "\ud835\udc36\ud835\udc37",
      "\ud835\udc37\ud835\udc38"
    ],
    "correctAnswer": 0,
    "explanation": "In region \ud835\udc34\ud835\udc35 and \ud835\udc36\ud835\udc37, slope of the graph is constant \ud835\udc56. \ud835\udc52. velocity is constant. It means no force acting on the particle in this region",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 212 132\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"212\" height=\"132\"/></svg>"
  },
  {
    "id": "lom-qb-208",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A string of negligible mass going over a clamped pulley of mass \ud835\udc5a supports a block of \ud835\udc40 as shown in figure. The force on the pulley by the clamp is given by",
    "options": [
      "\u221a2 \ud835\udc40g",
      "\u221a2 \ud835\udc40g",
      "(\u221a(\ud835\udc40+ \ud835\udc5a)2 + \ud835\udc5a)g",
      "(\u221a(\ud835\udc40+ \ud835\udc5a)2 + \ud835\udc402) g"
    ],
    "correctAnswer": 3,
    "explanation": "Force on the pulley are \ud835\udc39= \u221a\ud835\udc391 2 + \ud835\udc392 2 = (\u221a(\ud835\udc5a+ \ud835\udc40)2 + \ud835\udc402) g",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 671 153\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"671\" height=\"153\"/></svg>"
  },
  {
    "id": "lom-qb-209",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A car is moving in a circular horizontal track of radius 10 m with a constant speed of 10 ms\u22121. A plumb bob is suspended from the roof of the car by a light rigid rod. The angle made by the rod with the vertical is",
    "options": [
      "Zero",
      "30\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "FBD of bob is \ud835\udc47sin\ud835\udf03= \ud835\udc5a\ud835\udc632 \ud835\udc45 and \ud835\udc47cos \ud835\udf03= \ud835\udc5ag tan \ud835\udf03= \ud835\udc632 \ud835\udc45g = (10)2 (10)(10) tan \ud835\udf03= 1 or \ud835\udf03= 45\u00b0",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-210",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass \ud835\udc5a is placed on a wedge. The wedge can be accelerated in four manners marked as (1), (2), (3) and (4) as shown. If the normal reactions in situations (1), (2), (3) and (4) are \ud835\udc411, \ud835\udc412, \ud835\udc413 and \ud835\udc414, respectively, and acceleration with which the block slides on the wedge in the situations are \ud835\udc4f1, \ud835\udc4f2, \ud835\udc4f3 and \ud835\udc4f4, respectively, then",
    "options": [
      "\ud835\udc413 > \ud835\udc411 > \ud835\udc412 > \ud835\udc414",
      "\ud835\udc414 > \ud835\udc413 > \ud835\udc411 > \ud835\udc412",
      "\ud835\udc4f2 > \ud835\udc4f3 > \ud835\udc4f4 > \ud835\udc4f1",
      "\ud835\udc4f2 > \ud835\udc4f3 > \ud835\udc4f1 > \ud835\udc4f4"
    ],
    "correctAnswer": 0,
    "explanation": "Balancing forces perpendicular to incline \ud835\udc411 = \ud835\udc5a\ud835\udc54cos 37\u00b0 + \ud835\udc5a\ud835\udc4esin 37\u00b0 \ud835\udc411 = 4 5 \ud835\udc5a\ud835\udc54+ 3 5 \ud835\udc5a\ud835\udc4e And along incline, \ud835\udc5a\ud835\udc54sin 37\u00b0 \u2212\ud835\udc5a\ud835\udc4ecos 37\u00b0 = \ud835\udc5a\ud835\udc4f1 \ud835\udc4f1 = 3 5 \ud835\udc54\u22124 5 \ud835\udc4e Similarly for this case get \ud835\udc5b2 = 4 5 \ud835\udc40\ud835\udc3a\u2212 3 5 \ud835\udc40\ud835\udc34 And \ud835\udc4f2 = 3 5 g + 4 5 \ud835\udc4e Similarly for this case get \ud835\udc413 = 4 5 \ud835\udc5ag + 4 5 \ud835\udc5a\ud835\udc4e \ud835\udc4f3 = 3 5 \ud835\udc54+ 3 5 \ud835\udc4e Similarly for this case, get \ud835\udc414 = 4 5 \ud835\udc5ag \u2212 4 5 \ud835\udc5a\ud835\udc4e And \ud835\udc4f4 = 3 5 g \u2212 3 5 \ud835\udc4e",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-211",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A 3 kg block of wood is on a level surface where \ud835\udf07\ud835\udc60= 0.25 and \ud835\udf07\ud835\udc58= 0.2. A force of 7 N is being applied horizontally to the block. Mark the correct statement (s) regarding this situation",
    "options": [
      "If the block is initially at rest, it will remain at rest and friction force will be about 7 N",
      "If the block is initially moving, then it will continue its motion forever if force applied is in the direction of motion of the block",
      "If the block is initially moving and the direction of applied force is same as that of motion of block, then block moves with an acceleration of 1/3 ms\u22122 along its initial direction of motion",
      "If the block is initially moving and direction of applied force is opposite to that of initial motion of block, then block decelerates, comes to a stop, and starts moving in the opposite direction"
    ],
    "correctAnswer": 0,
    "explanation": "If the block is at rest, then force applied has to be greater than limiting friction force for its motion to begin \ud835\udc53\ud835\udc3f= \ud835\udf07\ud835\udc60\ud835\udc5ag = 0.25 \u00d7 3 g = 7.5 \ud835\udc41< \ud835\udc39applied So friction is static in nature and its value would be equal to applied force, i.e., 7 N. if the body is initially moving, then kinetic friction is present (\ud835\udc53\ud835\udc58= \ud835\udf07\ud835\udc58 \ud835\udc5a\ud835\udc54= 6 \ud835\udc41), acting opposite to direction of motion As \ud835\udc39> \ud835\udc53\ud835\udc58 the block is accelerated with an acceleration of \ud835\udc4e= [ \ud835\udc39\u2212\ud835\udc53\ud835\udc58 \ud835\udc5a] = 1 3 \ud835\udc5a\ud835\udc60\u22122 and hence its speed is continuously increasing If applied force is opposite to direction of motion, then block is under deceleration of \ud835\udc4e= \u2212[ \ud835\udc39\u2212\ud835\udc53\ud835\udc58 \ud835\udc5a] = \u2212 13 3 \ud835\udc5a\ud835\udc60\u22122 and hence after some time block stops and kinetic friction vanishes but applied force continuous to act But as \ud835\udc39< \ud835\udc53\ud835\udc3f, the block remains at rest and friction force acquires the value equal to applied force, i.e. friction is static in nature",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-212",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "80 railway wagons all of same mass 5 \u00d7 103 kg are pulled by an engine with a force of 4 \u00d7 105N. The tension in the coupling between 30th and 31st wagon from the engine is",
    "options": [
      "25 \u00d7 104 N",
      "40 \u00d7 104 N",
      "20 \u00d7 104 N",
      "32 \u00d7 104 N"
    ],
    "correctAnswer": 0,
    "explanation": "Total mass of 80 wagons = 80 \u00d7 5 \u00d7 103 = 4 \u00d7 105 kg Acceleration, \ud835\udc4e= \ud835\udc39 \ud835\udc40= 4\u00d7105 4\u00d7105 = 1 ms\u22122 Tension in the coupling between 30th and 31st wagon will be due to mass of remaining 50 wagons. Now, mass of remaining 50 wagons \ud835\udc5a= 50 \u00d7 5 \u00d7 103kg = 25 \u00d7 104kg \u2234 Required tension, \ud835\udc47= \ud835\udc5ag = 125 \u00d7 104 \u00d7 1 = 25 \u00d7 104 N",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-213",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The figure shows a block of mass \ud835\udc5a placed on a smooth wedge of mass\ud835\udc40. Calculate the minimum value of \ud835\udc40\u2032 and tension in the string, so that the block of mass \ud835\udc5a will move vertically downward with acceleration 10 ms\u22122",
    "options": [
      "The value of \ud835\udc40\u2032 is \ud835\udc40cot \ud835\udf03 1\u2212cot\ud835\udf03",
      "The value of \ud835\udc40\u2032 is \ud835\udc40tan \ud835\udf03 1\u2212tan\ud835\udf03",
      "The value of tension in the string is \ud835\udc5a\ud835\udc54 tan \ud835\udf03",
      "The value of tension is , \ud835\udc40\ud835\udc54 cot\ud835\udf03"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc40\u2032g \u2212\ud835\udc47= \ud835\udc40\u2032\ud835\udc4e (i) \ud835\udc47= \ud835\udc40\ud835\udc4e (ii) \ud835\udc40\u2032g = \ud835\udc4e(\ud835\udc40+ \ud835\udc40\u2032) \u21d2 \ud835\udc4e= \ud835\udc40\u2032g (\ud835\udc40+ \ud835\udc40\u2032) \ud835\udc5a\ud835\udc4esin \ud835\udf03= \ud835\udc5ag cos \ud835\udf03\u2192 so that normal force is zero \ud835\udc4e= g cot \ud835\udf03 g cot \ud835\udf03= \ud835\udc40\u2032g (\ud835\udc40+ \ud835\udc40\u2032) \u21d2 cot \ud835\udf03\ud835\udc40+ cot \ud835\udf03\ud835\udc40\u2032 = \ud835\udc40\u2032 cot \ud835\udf03\ud835\udc40+ cot \ud835\udf03\ud835\udc40\u2032 = \ud835\udc40\u2032 \ud835\udc40\u2032 = \ud835\udc40cot \ud835\udf03 (1 \u2212cot \ud835\udf03) , \ud835\udc47= \ud835\udc40\ud835\udc4e= \ud835\udc40g cot \ud835\udf03= \ud835\udc40g/ tan \ud835\udf03",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 286 224\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"286\" height=\"224\"/></svg>"
  },
  {
    "id": "lom-qb-214",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A block of mass 0.1 kg is held against a wall applying a horizontal force of 5 N on the block. If the coefficient of friction between the block and the wall is 0.5, the magnitude of the friction force acting on the block is",
    "options": [
      "2.5 N",
      "0.98 N",
      "4.9 N",
      "0.49 N"
    ],
    "correctAnswer": 1,
    "explanation": "The magnitude of the frictional force \ud835\udc53 has to balance the weight 0.98 N acting downwards \ud835\udc53\u2113= 0.5 \u00d7 5 = 2.5 N \ud835\udc53< \ud835\udc39\u2113 Therefore, the friction force is 0.98 N. Hence, option (b) is the correct option",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-215",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The string shown in the figure is passing over small smooth pulley rigidly attached to trolley\ud835\udc34. If the speed of trolley is constant and equal to \ud835\udc63\ud835\udc34 towards right, speed and magnitude of acceleration of block \ud835\udc35 at the instant shown in figure are",
    "options": [
      "\ud835\udc63\ud835\udc35= \ud835\udc63\ud835\udc34, \ud835\udc4e\ud835\udc35= 0",
      "\ud835\udc4e\ud835\udc35= 0",
      "\ud835\udc63\ud835\udc35= 3 5 \ud835\udc63\ud835\udc34",
      "\ud835\udc4e\ud835\udc35= 16\ud835\udc63\ud835\udc34 2 125"
    ],
    "correctAnswer": 2,
    "explanation": "(\ud835\udc66\u2212\u210e) + \u221a\ud835\udc652 + \u210e2 = \u2113 or \ud835\udc51\ud835\udc66 \ud835\udc51\ud835\udc61+ \ud835\udc65 \u221a\ud835\udc652 + \u210e2 \ud835\udc51\ud835\udc65 \ud835\udc51\ud835\udc61 = 0 \ud835\udc51\ud835\udc66 \ud835\udc51\ud835\udc61= \u2212 \ud835\udc65 \u221a\ud835\udc652 + \u210e2 \ud835\udc51\ud835\udc65 \ud835\udc51\ud835\udc61 \u21d2 \ud835\udc51\ud835\udc66 \ud835\udc51\ud835\udc61= \u22123 5 (\u2212\ud835\udc63\ud835\udc34) \ud835\udc49\ud835\udc35= 3 5 \ud835\udc63\ud835\udc34 (\ud835\udc56) \ud835\udc512\ud835\udc66 \ud835\udc51\ud835\udc612 = \ud835\udc63\ud835\udc34 2\u210e2 (\ud835\udc652 + \u210e2)3/2 \u21d2\ud835\udc4e\ud835\udc35= \ud835\udc63\ud835\udc34 2 16 (5)3 \ud835\udc4e\ud835\udc35= 16 125 \ud835\udc63\ud835\udc34",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 137 117\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"137\" height=\"117\"/></svg>"
  },
  {
    "id": "lom-qb-216",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "In the arrangement shown in the figure, the ends \ud835\udc43 and \ud835\udc44 of an unstretchable string move downwards with uniform speed\ud835\udc48. Pulleys \ud835\udc34 and \ud835\udc35 are fixed Mass \ud835\udc40 moves upwards with speed",
    "options": [
      "2 \ud835\udc48cos \ud835\udf03",
      "\ud835\udc48/ cos \ud835\udf03",
      "2 \ud835\udc48/ cos \ud835\udf03",
      "\ud835\udc48cos \ud835\udf03"
    ],
    "correctAnswer": 1,
    "explanation": "Let the velocity of the block \ud835\udc40 be \ud835\udc63 upwards, then \ud835\udc63cos \ud835\udf03= \ud835\udc48 \u21d2 \ud835\udc63= \ud835\udc48/ cos \ud835\udf03",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 132 108\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"132\" height=\"108\"/></svg>"
  },
  {
    "id": "lom-qb-217",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Suppose a body, which is acted on by exactly two forces, is accelerated. For this situation, mark the incorrect statement (s)",
    "options": [
      "The body can\u2019t move with constant speed",
      "The velocity can never be zero",
      "The vector sum of two forces can\u2019t be zero",
      "The two forces must act in the same line"
    ],
    "correctAnswer": 0,
    "explanation": "1. Since the body is accelerated, it can\u2019t have constant velocity, but it can have constant speed 2. If acceleration of the body is opposite to the velocity, then at some instant its velocity will become zero 3. As the body is accelerated, net force on it can\u2019t be zero 4. Forces may act at some angle also",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-218",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Seven pulleys are connected with the help of three light strings as shown in the figure below. Consider \ud835\udc433, \ud835\udc434, \ud835\udc435 as light pulleys and pulleys \ud835\udc436 and \ud835\udc437 have masses \ud835\udc5a each. For this arrangement, mark the correct statement (s)",
    "options": [
      "Tension in the string connecting \ud835\udc431, \ud835\udc433, and \ud835\udc434 is zero",
      "Tension in the string connecting \ud835\udc431, \ud835\udc433 and \ud835\udc434 is \ud835\udc5ag/3",
      "Tensions in all the three strings are same and equal to zero",
      "Acceleration of \ud835\udc436 is g downwards and that of \ud835\udc437 is g upwards"
    ],
    "correctAnswer": 0,
    "explanation": "First of all draw FBD of\ud835\udc433. Let tensions, in three strings be \ud835\udc471, \ud835\udc472 and \ud835\udc473, respectively 2\ud835\udc471 \u2212\ud835\udc471 = 0 \u00d7 \ud835\udc4e \u21d2 \ud835\udc471 = 0 Now draw FBD of \ud835\udc434 and \ud835\udc435 2\ud835\udc471 \u2212\ud835\udc472 = 0 \u21d2 \ud835\udc472 = 0 2\ud835\udc472 \u2212\ud835\udc473 = 0 \u21d2 \ud835\udc472 = \ud835\udc473 = 0 So forces acting on \ud835\udc436 and \ud835\udc437 will be that of gravity and they will be in free fall. Hence, acceleration of each of them will be g downwards",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 171 188\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAAC8CAIAAACIWcltAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAdY0lEQVR4nO2deVRVxx3H6TltT9rUZjmmWzSJaRpFQRZZDSCyahAMCgqiWBUxLuAGGkSthKAggoqorBpUxB1BDRbEpYACUSSWJbYGzUKMooigSAR8/R7mOGd633aB93jvyXz/4Nw7d+7cufP7zG9+87h3rp6kH6ijo+ODDz5ISUlRnC00NNTPz69vqqQ90tN0BfpILS0tPj4+CxYsuH//vvTR7777ztfXd/HixWCl7+umWfUXAohqa2sfPHggnf79998Dgr6vjzaofxHAJS1OQH8XJ6C/qxsE/Pe//z1//jyb0traun37djYlMzPzxx9/FJx1/PhxNmXTpk10u6ys7F//+hfdffz48b///W82c3h4OPKwKWfPno2Ojmbr4OHhIagqIr7i4mK6izKnT59Od2fMmMFe5eTJkyUlJezpV65caW9vZ1MaGhq++eYbNqW0tFRw0WvXrqEyMu/l6dOnrq6uT548oUd37NiB4IPuFhUVff3114IrCtotNTVVcMUvv/yysrKS7uIqGRkZ8srcuHHjmTNnJFISS0BjY6OVldWNGzfYxMmTJ8PkdPef//ynk5MT6kFTHj58OGrUKLa5YdGVK1eSbTSBhYUFbpXsdnZ2fvTRR6dPn6aZd+/ePW/ePPaK4Gn06NEolqZ4e3vn5uayedC4AQEBdBflm5mZ0Zpv2LBh+fLl9GhFRYW9vT1rucuXLyOFnRTgKFKuXr1KU3bu3BkcHMxetKamBhNO1saenp70Xj7++GPWNocOHWKnneRc9qbQhg4ODiz66enpKIS94s2bN2ER2nqSLrKpOQRlAqapU6dKZEkUAQRhtrNCq1evhjnpLnAzNTVlI21Y1MXF5YsvvqApqB9sTLbRrNbW1iwcIGPz5s10F5fDRVmeULiAQlSA9QeSLg/BUkiaEolkF6y4u7ujYmS3vr7e0tKSdVrSKRCsdeTIEfYSbm5utBDo3r17qNitW7doyieffEJd3d69e+fOnUsPlZeXg6e2tjayCxMKzoX8/f33798vaArWLcG0MDCmNjQF7UDNISgTzsnOzo6lnJUoAtAR0R3ZlAMHDnh5edFdeAiYHx2UzbNw4cItW7bQXRANk9N6AIWcnBx6dM+ePWzHhZlxDyiWphAKL1y4QFPAE6hnr4izYD+2W8yaNYv+EATaWP8h3bNJClwrW+ZnXWIvgbsQ9FdUjB10ULG///3vZPurr76CqX7++Wey+8MPP6CGd+/epeeik1y8eJG9Ymxs7KpVq+gu6etsUwC+iRMn5ufn0xSQDV8os0y0Bq6I60rkSDkBW7duDQ0NZVPQRixTcJjOzs60nxElJycHBgbSXdTA2NiY1iMsLCwqKooeRfOx3R3tC1MJeBJQCJ4cHR0FIw7amnUq8ChLliwh26RbsP4DXlEw0KKvsz0POnz4MOuucQnpoRDOedeuXTIrhvzm5uYwITmEFrO1tWVrOHv27H379rGlnThxYtKkSXS3ublZ0NehpUuXsuGXoIuzZUqPJtJSQkBeXh46K+vxCMUsU2gCjIvsWaCBtSgqh1NoPdDKPj4+NHNdXR2aFY6U7OJa8LECnhISEkJCQgR1YPv6s2fPUE80H1tz6vDhP1Gfc+fO0aNr164VDB/r16+H62ZTADpcAh3aAbqgEAiWgD3kVQw99dSpU/SoIGSJi4ujIRER4LCxsaG2lA6MoLS0NDYguHPnDmsOQZkzZ84UMC0tRQRUVVUBwJaWFpoi7SdhewTe7FnEgbM/viJWz8rKItvggL1J0nHZkBURloAnNAFLIc5FCYIpA4yHWJfuCuKg+fPnwyfRoxjCBL//YzxCJYERTSG2RPvSFLQ7Wp89SxAQCLo4CGORgmNnmQOsNCQiIl6KnSAIAiMI/IFCGqWCTtYcgjIxmsDXSpRJBgEYtNAvERKbmJjAP9cxQjOBerqLAW/MmDEwOU3BsIeAoLCwkKag4YKCgsg2BicDAwP8RYujj8JOuGcESiAAYw0yYGiAbbABm6HHYAPzC0TycHQIhnEKUjDIwRI4Bf5t3bp1SMG5KBYbCE7hMBHeo+aYuJKLYhRHYIWNmJgY/M3OzsZFr1+/jskV+igmfgcPHsTpiDBQDqyOdsTkEHcBX4pEWBF5YAxUDBsILMAfNnALI0eORIbExETUDSkYCuPj4690CcChKAR9GGiwi/uaMGECNiIiIsgVMSbiKjh32LBhIBIdA7X6/PPPrzwXqk2qR4UrGhoa4oo0Zfz48bgpsk3LJLuIwNA+ZJuGHWIJuHTpEmJXmBZAzWUEk2B4ZlOMjIwQ8rApMA9ule5iTEK16C7qxJaJieKf//xn9nR0KcSDgoui6dmUDz/8cO7/C1ccPHgw3cXUH1Eq3UUzsWXivhA/km3ENytWrHj33XcRsqxgBBtjMB46dCg8PHYBMbZJZipYjj0L1kLJdPedd95ZtGgRONbX18cubhyjGD0KV4FDbGm+vr7oXWwKEGRPgcaOHctecc6cOQg45JWJcXbZsmVkWzByKSegzwSHKZjj9ljAQiXlCMpkY/4eiPzLUVX1UZM4AYrK5ASoV5wAbRAnQFGZnAD1ihOgDeIEKCqTE6BecQK0QZwARWVyAtQrToA2iBOgqExOgHrFCdAGcQIUlckJUK90nYDOzs4HzyUzAydAiXpJAAxw+PDh8ePHGxsbv/LKK/gbEBAgeMarN1JKQEtLy7Jly15//fWIiIjVq1d7eHgI8nMClKg3BNTW1pqYmAQGBubn52Pbzs6uurp6//79Tk5O3t7ejx496nGtsrOzXV1dwdOrr75qZGRkbW0dFRXFPgTMaseOHf7+/mR72rRp7KOzEk6AUvWYgGvXrunr6586dar2uUAA3d6yZcuoUaPk2UyB4MwdHR39/PwKCgpImeXl5ZcvX46MjAQQgncliOAn4IfItoODA/tkrIQToFTSBFRVVcGrT5kyZf369fPnzxc8REv09OlT2OPMmTO1jFgCoJiYGMFjxErV3NwMbtLT09kyQQDZRk1MTU3Zx3MlXQ9p/eY3v/nqq69++umnoKAgVJt9clXCCVAqmT7AysqKPF158+ZNtK90kLV58+awsLDa/5eAAGjs2LGCR2wVCz58586dgjIpAVBpaamBgQFbH9TT0NAQDgMDR11dHUns6Og4ceIEedKVE6BE0gQgkhowYABx4Hfu3NHT05N+0N3W1hbhHmuqwsLC999/f9++fWzitm3bECUIOqU8IT/8vzRVLAEQ4GMfWUblEQAKioIXyczMRFQInjgBSiRNAMZUMq9rbW2dOnWq4M0sInhj1ioYnn/3u9/pdQkDNk0vLi4eNGiQ4JFieYIht27dyha7atUqsIghCf6fJqI0c3NzcsqzZ89QvvSj+BhNJF1vUM2ZM4cToETSBCCunj17dmpqKgZy9iU1eAX6ULaAAFhd77kQt9N0dN8333xTJAFubm5wJPTcPXv20DJ9fHzYyyFWaG9vb2xsRNCHozLfxYQOHjxYUlLCCVAiAQHoVW+88QYdUKlu375tYWFBp9qYBLImOXDgALUWoj+ajpH4rbfeEkmAvb096/ARh9IybWxsBENDS0sLBhfyQ1BTU5N0aQ0NDYcOHZLwOECpBARcunQJoZbMnGhHSoCZmRncA2uV6OhoxH3z5s3DzI0mwouAG5EEeHt7Hz16lJ4L3/7OO+/A/L/85S+3b9/OXgvTEMVFPX78mLweA3A5AUokIGDWrFns26isWAJcXFwwxNYqVHV1NUDBmCKSAIz3GPjZEgBTUlIS+bmJqqioaNiwYZj7ySsHQxXuyMHBAXElZrOcACViCaipqTnTpfr6eumcLAEffPABejzbZaW1dOlSBHcoXCQBmF+gc2NmrxisgIAAWFdkmRI+CiiV+N8EBQRgooh4EAGjzN4P85NXqcUTgDLT0tIQ9AFEeeaHS3B1dRVfpoQToFQiCUC0BadaUFBAdmEtSdcvB56enuPGjUtOToZzLi0tRYaoqCiQsW7dOpKzWwRIutaemThxouDHBqLY2Fg4CVyUE6BK9ez/AsRaRLANvD3Mhunc1KlTEbWxKy10lwBJ10IWQ4cORVCZkZFx5MgRxHTgCbYPDAwkv1NxAlSp3hOgWD0gQNK12EBOTs7KlSunT5+OaC4lJaVnVEk4AUqlnQSoqkwJJ0CpOAHaIE6AusqUcAKUihOgDeIEqKtMCSdAqTgB2iBOgLrKlHAClIoToA3iBKirTAknQKleDALa29srKipOnjxZVlZG1w8m4gQoka4T8O23306bNm3EiBH4u3z5cn9/f2NjY3d39+rqapKBE6BEOk3AiRMnDAwM9u7dK/gvItLNzc3JguacACXSXQLOnj1raWnJPpTGqqqq6sMPP0xPT+cEKJGOElBZWQnPX1xcrOBpIpIHfzkBiqSjBERFRWHUF5hc+rmSzZs3BwcHswR8//33iYmJMV1KTk4WfMlEU+IEdLtMBweHvLw8ammMBUZGRnp6em+//TZ55ZTo2rVrZmZmAh+wePHimTNndnR0wD0MGjRIGyDgBHS7zGHDhrGPE4aEhNCXC6ZMmcK6AUNDQwEBFhYW9MMmKOfYsWMir6s+cQK6XSYsx5o5LCyMEgB7s4fI60303Lt377700ktkbYPS0tLBgwfLfOGkj8UJ6F6Z9fX148ePZ98juHr1qq2tLcxPPlPBzgisra3ZczMyMkBPamrqtm3bVqxYwX5ORIPiBHSvTAj2W7NmjSDuMzY2FqTs2LGD/QQR5OXllZCQICgNUaFjl8R8EUYd4gR0r0zJ8yUsrly5Iu3wWQdgbm7O9vL29vbf//73gg+XIiQkT8E3NDSAGPF1UKE4Ad0rkyg7O9ve3h7xvEwCECeiuws+EoWBY8iQIfIKxNCg4GU0tUq7CGhsbExJSVm0aJGfn9+cOXNiY2NrpdYB0QYCIMzs0csR2AsIKCwshEtfu3Ytm/nGjRuffvrpwoUL4TlklsZ+1LKPpS0EwA3C6phAYzg8cOAAegwaF2PkhAkTEGexCwppCQGSru+Juri42NjYLFiw4C9/+UtQUNDYsWPHjBkj+FiiUqH3s9+s7GNpBQHFxcUIpJOSkmplCSMlWjkiIoKcpT0EEN2/fz83N/dvf/sbhgaZr70qFdwe+3nGPpbmCSgvLx8+fLhgSQCBMLLCQ0RGRkq0j4Del8B+Qb7vpRYCKioq4Mwx5Y2KihK8y8cK5gkICID5Ba/py1R1dbWdnR1AefEI0KzU5QNMTEzIonBZWVmGhobsB12pYB4LCwuESErNT3Tu3DnEBJwA1UotBLCLwt27d09PT0/mh09hntdee03pug2sEBgi6hZZDU6AGKmFALooHLRx40ZPT0+Z2fLy8gYPHiyzr0dHR588eVL6ECbZb7/9tshqcALESC0E+Pv7e3t7p6amwpCIA+Qt65iQkIABQmBjYAH/QVZxYtd4JTp27NjQoUNFVoMTIEaqJ4AsCifd9LC3m5sb+8P4tm3bzM3NBTbG3Jr+q23cuHGCozk5OXQtb6XiBIiR6gkoKyuDbxckPnr0qKGhobOz09HRkSYWFRVNmzZNYGOyUiNRUFCQ4OjevXsF/25RIE6AGKmegNDQ0OnTp8s8VFJScvDgQbr7+PFj6X+pQStXrnz55Zdnz54tHSSGhISQ1frEiBMgRiomAC0eHh6+adMm6f9zNDc3x8bGvvXWW+yHOODnT58+LQ2B4F9tRDU1NSCmtbVVZGU4AWLU178JwrF//fXXdPfixYsuLi4iCYiLi1u8eLH4a3ECxKiPCLh7925BQUFLS0tUVJTg1yF4e+nvBUgTgBgQDgADh/iLcgLEqI8IgOs+cuRIfn5+R0eH4BDCQw8PD0QPCgg4cOAA5o3dfayKEyBGmvzPEBUgAAFWVlbp6enV1dUsAYDGz8/Pycnpzp073S2WEyBGWkEA0c2bN2EzAwMDCwuLV1991c7Obvjw4ZMmTSosLOxZgZwAMdIiAqgw2FtaWvb+SWpOgBhpIwESFTUoJ0CMOAGquRwnQMXiBPSZOAGquRwnQMWS16BPnjw5fvx4eHi4r6+vu7s7eaK8pKREZmZOgBjpDAG3bt2aPn36qFGjgoODU1JS8vLy8vPzc3Nz4+LifHx8kP7pp58KvjXMCRAj3SAgJiYGNs7MzJT+ZwHRtWvXIiMjR4wYceHCBXoWJ0CMtJ2Ajo4OPz+/wMBA2FKe+akuXbpkZ2eXmJhIzuUEiJG2EzBjxgzpF3UVCCa3t7dPS0uTcALESasJSEpKmjlzpnjzE1VUVJiYmNTV1XECxEh7CWhqaiLLcXWXACg7O9vR0ZETIEbaS8CqVasQAPbA/ERubm6enp6cAKXSXgLgALr1MolAe/bsGT58OCdAqbSUAHNzc2dn5x6bv7YrJHz99dc5AUqlpQTo6+svXbpUgYEx0oeFhdEFHGRq4MCB8CJiLscJ0Dq9995769evl2fajIyMX/ziF3p6evi7a9cuedkGDx7MCVAqLSXAzMwsKipKnmlnzJhB3yrx9/eXl83W1ralpUXM5TgBWqe8vLxFixbJM+3GjRspAQrmC8bGxjLfWpcWJ0Dr1NDQYG9vL8+00Jo1a1577bXVq1fL+148/L+JiYnIy3ECNKDS0tKY5zp69GhbW5sgg4GBQUVFhQIIZL5VQpWenh4cHCyyMpwAzWjIkCHw9o8fP46MjHRxcREcRRwQERHRYwJQoPj1eTgBGlB9ff0rr7zS3t6O7evXr2NEF2QAGUOHDpX3HQ/FBGRmZnp4eIivDCdAA0pLS/Py8iLbK1ascHd3l84DQ06aNKm7BJDFybq1sBsnQAOC+TGpS01NDQ0NDQ8PF3ynjQozgiVLlognAJ7f2tq6u+v2cwL6Wp2dnYjkZS4vdf/+fZicTQEE3t7e0v8jkCbg3Llz5ubm+/fv7259OAF9reLiYgsLC5mHEhIS6CpUVBgyRo4cmZiYyM79WAIQLoSEhCDl6tWrPagPJ6CvNW/evE8++UQ6PTs7u66uTpoASZdvWLx4sZGR0dSpU+Pi4sjXGjDlW7NmjbOzs42Nzfbt2+FaelYfTkCfCpHawoULN23aJFhrtLq6uqio6OHDhzIJIIKNKyoq4uPjQcOf/vQnxBC7d+/u/cc6OAFaITCB8HDixIkwrZixXIWNzgnQIin2Aaw4ASqR1hHQ3t6OOFFMTk6ASqR1BIgXJ0Al4gSopihOgAYkr9ExXzh79mx4ePiECROsrKwsLS2dnJzmz5+fmZnZ3NzcraJ6Xxnt1wtFQFtbW0REhKGhob+/f1JSEuaW9PeirKys5cuXm5qa+vj43LhxQ2lRva+MrujFIQDxo7GxMQhQ/JIJUIBXoF8tkllU7yujQ3pBCNixY4eNjQ3t9IpVXV29bNmyjz76iC5uyAnQSdFG//zzz11dXbv7eslnn31Gf3jgBOikSKNXVVVhdO/Z20VLliwJDQ2VcAJ0VKTRra2txXyqTKZqampw+n/+8x9OgE4KjX706NFZs2b1zPxEKMHLy4sToJNCozs7OxcWFvaGAMjKykrewwrdqoxKbqrvpcMEwHLw4b00f23XqwcKvgouUpwADUhfX3/u3Lm9JyAnJ2fgwIG9rAwnQANCx1XwbmFt1wJjcV1SPFOorKwcMGBALyvDCdCABg0atHPnTgWmHT16NHm30NbWVrEb+MMf/tDLynACNCCMAvHx8fKMevnyZT1GJSUl8nJWV1ebm5v3sjKcAA0oIyNjxYoV8uyKuT5Gd2J+dPGqqip5OS9cuDBu3LheVoYToBbl5+cj1gsJCVm1atXWrVsfPXrEHiVPFSvw7bm5uYaGhiYmJthQkG379u3kl8HeiBOgFnV2dv76178mX6fbsmWL9KuAxsbGiqO8tWvXxsbGKsgATZ48uaioqJdV5QSoRcXFxe+++y7ZPnv27B//+EdBhrCwsOjo6N4QgHBh1KhRva8qJ0AtWrlyZVBQkKTLGXh6emJeJ8jQ1NRkamqKWV+PCViwYAHiid5XlROgFhkYGCxbtiwlJQUR35EjR2Tmwegwf/78nhFw7NgxS0tLlVSVE6B6fffddy+//LL0O8UVFRWOjo6urq40MHR3d0c0110Czp8/jzgRV1FJbTkBqtfOnTtlrgKBeQH77WpJ14dHrK2tN23aJJ4AzDL09fVLS0tVVVtOgOplb28fHx8vSGxpaYHP/+tf/ypYIaCtrc3X19fLy+vixYuKCaiurt6wYQOmiFVVVSqsLSdAxYKLjomJ2bt3r6C7EyERnV76TeHjx48bGRkBkby8PGkCysvL169fj8gxJCREeuGqXooT0NfCWCBz2ZFnz54dPHhw0qRJiCIdHBxgb8R6CBRABpwKpo73799XR304AX0kTPzS09PLysrQ3ZVmhquIjIzEZOGnn35Sd8U4AX2k1tbWM2fOwKWLzI9wsgeLyvRAnAAtFSdAqTgBqhEnQEvVXQIQOtTU1Hz55ZfXr18XuS45ESdASyWGgNu3b2OOgJkCJg42NjaYOHh7e7u5uWHCaWJi4uTktHnz5nv37ikuhBOgpVJMQEFBgZ2d3ZgxY2DjS5cuyfzxuLi4OCYmZvTo0c7OzvAN8oriBGip5BFw584dDw8PT0/P06dPyzS8tHJzc+EPfH19m5qapAvkBGipZBKQk5NjYGCAdJG2Z5WcnIxzCwsLBWVyArRU0gTAhHD78Oc9MD/RxYsXzc3NMzMz2WI5AVoqAQFpaWkODg5iPmKtWJWVlYgMsrOzacmcAC0VSwBiPfTd3nzFklVFRcXIkSMxdSSFcwK0VJSA1tZWIyMjBW8N9ECIBiwtLZ8+fSrhBGitKAFBQUFxcXEqND/Rui5JOAFaK0LAjz/+CP+vcvPXdj1vgqnBgwcPOAFaKkLA0qVLExMT1UEAFBUVtWbNGk6AlooQoK+vj86qJgIQEpqZmXECtFQgYMOGDT4+PmoyP9G4ceN6/+6ppvTiEzBjxgylL471UmvXrl24cKGm77WHevEJsLW1PXbsmFoJ2LNnj/jvm2qbXnwCRowYIe//fjK1YMGC3/72t++9996JEydEnlJQUDB58mRN32sP9eITMGTIEPHm37dvH110AvGdyLPKysocHBw0fa89lG4T0NTUVPdcMv9pm5ycjN4s/h8BIIYSMGzYMJFnwcdIfzdZV6TbBDQ2Nrp2CSNxQECAn5+f4DWSn3/+2dHRUeSK01BVVZW9vT3M/9JLL6WkpIg8Ky8vb8qUKZpqhF5KtwmAxowZc+rUKbI9cOBA6cd4Pv7446ysLJG2rO1afgYWLS0tFX9KUlKSzM8n6oR0m4CHDx8OGDDgyZMn2P72229/9atf3bp1S5Bn9+7dkZGR4s3ZAy1fvhyQaaIBVCDdJuDw4cPkFeAvvvgC3lvmB6dBhrOzs1oJwIRT3vdrtF+6TYC/v398fDwCvatXr7KvEWL79OnT33zzDdk1MTG5fPmymsx/4cIFGxsbDTWACqTDBDx79uyNN96QXgICQ8Ps2bNv375NUxISEv7xj3+oiYDg4ODU1NS+vXVVSocJKCkpwRAgnQ7HUFxczL7vgUDB0NBQVU8HsULgOXLkSPq1Gl2UrhIADz9hwgRra2tB6NfW1vbmm2+eOXMG0zP2CUFM9DEpUDkBmH8eOnSoz+9eldJVAuQJQ8Do0aOx8cMPPyA2ZA/Z2dkdPXpUheZPT093c3PT0I2qTC8aARDiMoQId+/eFfy/rr6+3tjYWPyvQ4qFSNPAwKCxsVFTt6kqvYAEYF6QlpYGty+9Ak1lZSWG7d5DUFhYaGpqWldXp5EbVK1eQAIUq6KiAvFjdnZ2j82flZX1/vvvq3YhKg2q3xEg6QoRrKyslixZ0t3ZAbxLYGCgk5OT0leJdUj9kQBJ1zK1cXFxCAs2btwo5j+HYCUiIsLExGTXrl2arruK1U8JIGpubl63bt2IESMwddy6dev58+dZq9fU1GBWCVAmTpyI6CE6Olrla9Bpg/o1AVTl5eWRkZGwtIWFhflzWVpaTp48ecOGDXAAmq6gGsUJ6O/iBPR3cQL6uzgB/V2cgP4uTkB/1/8A3vzExUr7ZrYAAAAASUVORK5CYII=\" width=\"171\" height=\"188\"/></svg>"
  },
  {
    "id": "lom-qb-219",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "If a dipole is situated in a non uniform field,",
    "options": [
      "\u2211\ud835\udc05\u20d7= 0, \u2211\ud835\udf0f\u20d7= 0",
      "\u2211\ud835\udc05\u20d7\u22600, but \u2211\ud835\udf0f\u20d7= 0",
      "\u2211\ud835\udc05\u20d7= 0, but \u2211\ud835\udf0f\u20d7\u22600",
      "\u2211\ud835\udc05\u20d7\u22600 , \u2211\ud835\udf0f\u20d7\u22600"
    ],
    "correctAnswer": 1,
    "explanation": "In a non uniform field, \u2211\ud835\udc05\u20d7\u22600. When dipole is aligned with field \u2211\ud835\udf0f\u20d7= 0 and when dipole is not aligned, \u2211\ud835\udf0f\u20d7\u22600",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-220",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A man of mass \ud835\udc40 is standing on a board of mass \ud835\udc5a. The friction coefficient between the board and the floor is \ud835\udf07, figure. The maximum force that the man can exert on the rope so that the board does not move is",
    "options": [
      "\u03bc(\ud835\udc5a+ \ud835\udc40)g",
      "\u03bc(\ud835\udc5a+ \ud835\udc40)g \u03bc + 1",
      "\u03bc(\ud835\udc5a+ \ud835\udc40)g \u03bc \u22121",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "As in clear from figure \ud835\udc45+ \ud835\udc47= (\ud835\udc5a+ \ud835\udc40)g \ud835\udc45= (\ud835\udc5a+ \ud835\udc40)g \u2212\ud835\udc47 The system will not move till \ud835\udc47\u2264\ud835\udc39 or \ud835\udc47\u2264\ud835\udf07\ud835\udc45 \ud835\udc47\u2264\ud835\udf07[(\ud835\udc5a+ \ud835\udc40)g \u2212T] \ud835\udc47\u2264\ud835\udf07(\ud835\udc5a+ \ud835\udc40)g \ud835\udf07+ 1 \u2234 \ud835\udc39max = \ud835\udf07(\ud835\udc5a+ \ud835\udc40)g \ud835\udf07+ 1",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 449 201\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"449\" height=\"201\"/></svg>"
  },
  {
    "id": "lom-qb-221",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The ring shown in the figure is given a constant horizontal acceleration(\ud835\udc4e0 = \ud835\udc54/\u221a3). Maximum deflection of the string from the vertical is \ud835\udf030, then",
    "options": [
      "\ud835\udf030 = 30\u00b0",
      "\ud835\udf030 = 60\u00b0",
      "At maximum deflection, tension in string is equal to \ud835\udc5ag",
      "At maximum deflection, tension in string is equal to 2\ud835\udc5ag \u221a3"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc47cos \ud835\udf030 = \ud835\udc5ag \u2026(i) \ud835\udc47sin\ud835\udf030 = \ud835\udc5a\ud835\udc4e0 \u2026(ii) Dividing Eq. (ii) by Eq. (i), we get tan \ud835\udf030 = \ud835\udc4e g \u21d2 \ud835\udf030 = 30\u00b0 \ud835\udc47= \ud835\udc5ag cos 30\u00b0 = 2\ud835\udc5ag \u221a3",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-222",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The accelerations of a particle as observed from two different frames \ud835\udc461 and \ud835\udc462 have equal magnitudes of 2 ms\u22122",
    "options": [
      "The relative acceleration of the frame may either be zero or 4 ms\u22122",
      "Their relative acceleration may have any value between 0 and 4 ms\u22122",
      "Both the frames may be stationary with respect to earth",
      "The frames may be moving with same acceleration in same direction"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration of particle w.r.t. frame \ud835\udc461: \ud835\udc4e\u20d7\ud835\udc5d\u2212\ud835\udc4e\u20d7\ud835\udc601 = 2\ud835\udc5b\u0302 Acceleration of particle w.r.t. frame \ud835\udc462: \ud835\udc4e\u20d7\ud835\udc5d\u2212\ud835\udc4e\u20d7\ud835\udc602 = 2\ud835\udc5a\u0302 Where \ud835\udc5a\u0302 and \ud835\udc5b\u0302 are unit vectors in any directions. Now relative acceleration of frames: \ud835\udc4e\u20d7\ud835\udc602 = \ud835\udc4e\u20d7\ud835\udc601 = 2(\ud835\udc5b\u0302 \u2212\ud835\udc5a\u0302) Its magnitude can have Any value between 0 to 4 \ud835\udc5a\ud835\udc60\u22122 depending upon the direction of \ud835\udc5a\u0302 and \ud835\udc5b\u0302",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-223",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "In the figure, the blocks\ud835\udc34, \ud835\udc35, and \ud835\udc36 of mass \ud835\udc5a each have acceleration \ud835\udc4e1, \ud835\udc4e2, and \ud835\udc4e3 , respectively. \ud835\udc391 and \ud835\udc392 are external forces of magnitude 2 \ud835\udc5ag and \ud835\udc5ag, respectively, then",
    "options": [
      "\ud835\udc4e1 \u2260\ud835\udc4e2 \u2260\ud835\udc4e3",
      "\ud835\udc4e1 = \ud835\udc4e2 \u2260\ud835\udc4e3",
      "\ud835\udc4e1 > \ud835\udc4e2 > \ud835\udc4e3",
      "\ud835\udc4e1 \u2260\ud835\udc4e2 = \ud835\udc4e3"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc4e1 = 2\ud835\udc5ag \u2212\ud835\udc5ag \ud835\udc5a = g \ud835\udc4e2 = \ud835\udc5ag + \ud835\udc5ag \u2212\ud835\udc5ag 2\ud835\udc5a = g/2 \ud835\udc4e3 = 2\ud835\udc5ag \u2212\ud835\udc5ag 3\ud835\udc5a = g/3 Clearly \ud835\udc4e1 > \ud835\udc4e2 > \ud835\udc4e3",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 195 126\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"195\" height=\"126\"/></svg>"
  },
  {
    "id": "lom-qb-224",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "During paddling of a bicycle, the force of friction exerted by the ground on the two wheels is such that it acts",
    "options": [
      "In the backward direction on the front wheel and in the forward direction on the rear wheel",
      "In the forward direction on the front wheel and in the backward direction on the rear wheel",
      "In the backward direction on both the front and the rear wheels",
      "In the forward direction on both the front and the rear wheels"
    ],
    "correctAnswer": 0,
    "explanation": "We give power to real wheel, so fr5iction on rear wheel acts in forward direction. Front wheel is a free wheel on which friction acts in backward direction. Net friction is in forward direction, due to which cycle accelerates",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-225",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A man tires to remain in equilibrium by pushing with his hands and feet against two parallel walls. For equilibrium,",
    "options": [
      "The forces of friction at the two walls must be equal",
      "Friction must be present on both walls",
      "The coefficient of friction must be the same between both walls and the man",
      "None of the above"
    ],
    "correctAnswer": 3,
    "explanation": "The horizontal forces on the man must balance, i.e., the forces exerted by the two walls on him must be equal The vertical forces can balance even if the forces of friction on the two walls are unequal. The torques due to the forces of friction about his centre of mass must balance. This requires friction on both walls",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-226",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "In the figure, a small block is kept on \ud835\udc5a, then",
    "options": [
      "The acceleration of \ud835\udc5a w.r.t. ground is \ud835\udc39 \ud835\udc5a",
      "The acceleration of \ud835\udc5a w.r.t. ground is zero",
      "The time taken by \ud835\udc5a to separate from \ud835\udc40 is \u221a2\u2113\ud835\udc40 \ud835\udc39",
      "The time taken by \ud835\udc5a to separate from \ud835\udc40 is 2\u2113\ud835\udc40 \ud835\udc39"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration of \ud835\udc40, \ud835\udc4e= ( \ud835\udc39 \ud835\udc40) \u2113= 1 2 \ud835\udc39 \ud835\udc40\ud835\udc612 \u21d2\ud835\udc61= \u221a2\ud835\udc40\u2113 \ud835\udc39",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 283 96\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"283\" height=\"96\"/></svg>"
  },
  {
    "id": "lom-qb-227",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A small block of mass of 0.1 \ud835\udc58\ud835\udc54 lies on a fixed inclined plane \ud835\udc43\ud835\udc44 which makes an angle \ud835\udf03 with the horizontal. A horizontal force of 1 \ud835\udc41 acts on the block through its center of mass as shown in the figure. The block remains stationary if (take \ud835\udc54= 10 \ud835\udc5a/\ud835\udc602)",
    "options": [
      "\ud835\udf03= 45\u00b0",
      "\ud835\udf03> 45\u00b0 and a frictional force acts on the block towards \ud835\udc43",
      "\ud835\udf03> 45\u00b0 and a frictional force acts on the block towards \ud835\udc44",
      "\ud835\udf03< 45\u00b0 and a frictional force acts on the block towards \ud835\udc44 This section contain(s) 0 questions numbered 228 to 227. Each question contains STATEMENT 1(Assertion) and STATEMENT 2(Reason). Each question has the 4 choices (a), (b), (c) and ( out of which ONLY ONE is correct. a) Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1 b) Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1 c) Statement 1 is True, Statement 2 is False  Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc53= 0, if sin\ud835\udf03= cos \ud835\udf03\u21d2\ud835\udf03= 45\u00b0 \ud835\udc53 towards \ud835\udc44, sin\ud835\udf03> cos \ud835\udf03 \u21d2\ud835\udf03> 45\u00b0 \ud835\udc53 towards \ud835\udc43, sin\ud835\udf03< cos \ud835\udf03 \u21d2\ud835\udf03< 45\u00b0",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 129 101\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"129\" height=\"101\"/></svg>"
  },
  {
    "id": "lom-qb-228",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: In the figure shown below, ground is smooth and masses of both the blocks are different. Net force acting on each of the block is not same Statement 2: Acceleration of both will be different",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Here acceleration of both will be same, but their masses are different. Hence, net force acting on each of them will not be same",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 159 65\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"159\" height=\"65\"/></svg>"
  },
  {
    "id": "lom-qb-229",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The work done in bringing a body down from the top to the base along a frictionless incline plane is the same as the work done in the bringing it down the vertical side Statement 2: The gravitational force on the body along the inclined plane is the same as that along the vertical side",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Work done in moving an object against gravitational force (conservative force) depends only on the initial and final position of the object, not upon the path taken. But gravitational force on the body along the inclined plane is not same as that along the vertical and it varies with the angle of inclination",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-230",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Force is required to move a body uniformly along a circle Statement 2: When the motion is uniform, acceleration is zero",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "This is because the direction of motion is changing continuously. Hence the velocity is changing and acceleration is being produced. Assertion is true but reason is false",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-231",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: If the net external force on the body is zero, then its acceleration is zero Statement 2: Acceleration does not depend on force",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "According to Newton\u2019s second law Acceleration = Force Mass \ud835\udc56. \ud835\udc52. If net external force on the body is zero then acceleration will be zero",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-232",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Frictional forces are conservative forces. Statement 2: Potential energy can be associated with frictional forces.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "If a body is moved in a closed path the net work done is zero. Gravity and an electrostatic field in vacuum are conservative. But any form of friction prevents the field from being conservative. Also potential energy cannot be associated with frictional forces.",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-233",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Angle of repose is equal to angle of limiting friction Statement 2: When the body is just at the point of motion, the force of friction in this stage is called as limiting friction",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "Correct answer is option (b). Refer to official Laws of Motion solution key.",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-234",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: It is easier to pull a heavy object than to push it on a level ground Statement 2: The magnitude of frictional force depends on the nature of the two surfaces in contact",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is practical experience based; so it is true. Statement 2 is also true but is not the correct explanation of Statement 1. Correct explanation is \u201c there is increase in normal reaction when the object is pushed and there is decreases in normal reaction when object is pulled\u201d",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-235",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A body in equilibrium has to be at rest only Statement 2: A body in equilibrium may be moving with a constant speed along a straight line path",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "In equilibrium, net force on body is zero, therefore, its acceleration \ud835\udc4e is zero. If the body is at rest, it will remain at rest. If the body is moving with a constant speed along a straight line path, it will continue to do so",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-236",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A block of mass \ud835\udc5a is placed on a smooth inclined plane of inclination \ud835\udf03 with the horizontal. The force exerted by the plane on the block has a magnitude \ud835\udc5ag cos \ud835\udf03 Statement 2: Normal reaction always cats perpendicular to the contact surface",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "In the direction of normal reaction, net acceleration zero. Hence, forces in this direction will be balanced. Hence \ud835\udc41= \ud835\udc5ag cos \ud835\udf03",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-237",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The acceleration of body sliding down a smooth plane of inclination 30 \u00b0is 5ms-2. Statement 2: Acceleration is given by a =\u03bcg sin\u03b8.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration of body sliding down a smooth plane inclination \u03b8 is given by \ud835\udefc= \ud835\udc54 \ud835\udc60\ud835\udc56\ud835\udc5b\u03b8 = g sin30\u02da = 10 \u00d7 1 2 = 5ms\u22122",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-238",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Use of ball bearings between two moving parts of machine is a common practice Statement 2: Ball bearings reduce vibrations and provide good stability",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Bearings are used to reduce friction",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-239",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Inertia is the property by virtue of which the body is unable to change by itself the state of rest only Statement 2: The bodies do not change their state unless acted upon by an unbalanced external force",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Inertia is the property by virtue of which the body is unable to change by itself not only the state of rest, but also the state of motion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-240",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Coefficient of friction can be greater than unity Statement 2: Force of friction is dependent on normal reaction and ratio of force of friction and normal reaction cannot exceed unity",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Coefficient of friction\ud835\udf07= tan \u03b8. The value of tan \u03b8 may exceed unity",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-241",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: On a rainy day, it is difficult to drive a car or bus at high speed Statement 2: The value of coefficient of friction is lowered due to wetting of the surface",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "On a rainy day, the roads are wet. Wetting of roads lowers the coefficient of friction between the tyres and the road. Therefore, grip of car on the road reduces and thus chances of skidding increases",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-242",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Block \ud835\udc34 is moving on horizontal surface towards right under action of force \ud835\udc39. All surfaces are smooth. At the instant shown, the force exerted by block \ud835\udc34 on block \ud835\udc35 is equal to net force on block \ud835\udc35 Statement 2: From Newton\u2019s third law, the force exerted by block \ud835\udc34 on \ud835\udc35 is equal in magnitude to force exerted by block \ud835\udc35 on \ud835\udc34",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "The FBD of block \ud835\udc34 is as follows: The force exerted by \ud835\udc35 on \ud835\udc34 is \ud835\udc41 (normal reaction). The force acting on \ud835\udc34 are \ud835\udc41 (horizontal) and \ud835\udc5ag (weight downwards) Hence Statement I is false",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 148 58\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"148\" height=\"58\"/></svg>"
  },
  {
    "id": "lom-qb-243",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: An electric fan continues to rotate for some time after the current is switched off Statement 2: It is because of inertia of rest",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Assertion is true, but the reason is false. The fan continue to rotate due to inertia of motion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-244",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A block is lying stationary as on inclined plane and coefficient of friction is\ud835\udf07. Friction on block is \ud835\udf07 \ud835\udc5ag cos \u03b8 Statement 2: Contact force on block is \ud835\udc5ag",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "Contact force is the sum of friction and normal reaction",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 51 66\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAABCCAIAAAB1vXkZAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAFd0lEQVR4nO2a9yt9fxzH/Q/KT8pPPj+IUPbM3isj/IDsKERRtuysyMyIlJLI3ntdyR7ZZK/Iyh7f58fR7eLOc69z1ef7/OntcM77cd/nNZ6vG5G33yoRYQOw1P9kvOsfJtvd3b29vSVx4w+S3d3dJScnq6ioeHh4kLj9p8gGBwf19PTy8/M3Njbs7e27u7t5fYLgyY6Ojry9vd3c3GZnZzfeNTMzo6qqen19LUyy4uJiHR2d+vr6jc+qrKx0dHQUDtnCwoKJiUlUVNTKysoGM7m6utbV1VFK9vj4GBISYm5uPjw8zJSJ0OLiIrLh7OyMCrLX19eOjg4NDY2ioiI2THTV1tZaWVn9ONnBwQGSzt3dfW5ujhssQn5+fqWlpT9F9vT0lJubq6Wl1djYyD0ToaWlJTU1NXwqwZONjY1pa2tHR0evra3xikWotbXVyMgIkSAwsqurq4CAADMzs9HRUXJMdIWFhWVkZAiGDAVJUVER5YpPJkKrq6sIBiz4IsP9lpaWnp6e8/PzrHYaGhpC5FVXV9NotLi4uOnpadT9iIgI/Mjqlp6eHkQFQpYkGfJOWlq6paWF/RmgViGuIyMj09LSZGVls7KyUlJScCUvL4/NXfgMMTExTPdtamrifGbW1ta9vb0c346oqGhOTg7SQkxMDGS4KCEhgbNkc9f6+jq6Pl4F43ZIWycnJ0BzJkOHNjQ0XF5eZrMH3qO4uDj6EmopEMfHxzs7O//8+cP+80BoGyjU9/f3b+91G97EwsICz+H8Nglh4+DgYDYb+Pj4IKqw8PX1DQoKwgJv1svLa2BggCMckhS34ORMTU3Lysrom3Kbm87Ozs3NzayerqCgQAQ7Fl1dXVjY2toib3B47LHwQlNTUyUlJdHvT05OGHfkluz8/FxXVxeRzvEMCKHWcyzF7e3t8G1SUlLIsO878lBp29raUDu4JGMvfEJ/f38kb2BgIEw50+14604gQ8zxiVVRUSEjI4O6/SUr+SK7ubmBZeXJXDAKPRcuCJUiMzNTkH2TEPIc9YZXJsRcQkICQgoJyI3RIEMGIThKSkq4x0JSa2pqwl/ANXG/Cxmyh4cH5OnExARHJkQSqhqiCgUPkcDTLiQ9LXo2IoY9Fs5VSUkJrmlycpLEFuTdNpoxyjdTppGREQDJy8unp6c/Pz+Tez55Mmypr68PCEYmtHbYXbRCNIDt7W3SD+eLDELrRbNHhyGwMACrq6srKyvX1NTw81gBkEEwPLGxsbOzs25ubpiEMUpdXFzwjyUAMgjvTk5ODtmK+YD/p9HFL9nu7q6NjU1iYiIb30xO5MleXl6ys7OJ2iFAILrI1zNjY2MMVIKlYRTPZCjlISEhHh4e3H93Qk68kaEDGhgY9PX1/QzMJ3FLdnh4CMONKoqm+aNAdHEmg5EqLCw0NzfH+EQBEF0cyBYWFtAB0ZupoWEUSzLY8/DwcBcXl+PjYyqB6GJO1t3djW6N2YZiGkZ9JTs9PUUHDA0NZTXSUKZPZOXl5ejKGECERcOoDzL4Kjiq3NxcjiMNZRJ5fHyMj493dHTc398XNswniSDSGxoavv9iamoKExhKxvj4OPVYkAjTkWZzc1NbW/vk5AQ2EDaVtJfni4zpVQcHh6WlJWJNfIVEIdKHmJCBAwdGP6ekpCTM5dRS/ZUIjUb7cik/Px9zByyhhYUF2gBGWfQoIZBhrsfw84UMbuft3bXi/PAHlPmLT2Q7Oztwp4yXqqqqKioqiDUy1Nvbm3qsNyLO4uLi+vv76Zf29vasra2xuLy81NLSElad+0u2tbXl6enJeLWgoACVDJ5MiJ3qIzeNjIyERcBKH2Qo98Ll+K5ffGZ2dna2trYoDXa/TP/w/wWR1n9aj4EZ7mHJDAAAAABJRU5ErkJggg==\" width=\"51\" height=\"66\"/></svg>"
  },
  {
    "id": "lom-qb-245",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Linear momentum of a body changes even when it is moving uniformly in a circle Statement 2: In uniform circular motion velocity remain constant",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "In uniform circular motion, the direction of motion changes, therefore velocity changes As \ud835\udc43= \ud835\udc5a\ud835\udc63 therefore momentum of a body also changes in uniform circular motion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-246",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A concept of pseudo forces is valid both for inertial as well as non-inertial frame of reference Statement 2: A frame accelerated with respect to an inertial frame is a non-inertial frame",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Pseudo force is applied only for non-inertial frame",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-247",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A frame of reference which is moving with uniform velocity is non inertial frame of reference. Statement 2: A reference frame in which Newton\u2019s laws of motion are applicable is non \u2013 inertial.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "A frame of reference which is at rest or which is moving with a uniform velocity along a straight line is called intertial frame of reference. But the frame is which Newton\u2019s laws of motion are applicable is an intertial frame",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-248",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The apparent weight of a body in an elevator moving with some downward acceleration is less than the actual weight of body Statement 2: The part of the weight is spent in producing downward acceleration, when body is in elevator",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "The apparent weight of a body in an elevator moving with downward acceleration \ud835\udc4e is given by \ud835\udc4a= \ud835\udc5a(\ud835\udc54\u2212\ud835\udc4e)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-249",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: When a bicycle is in motion, the force of friction exerted by the ground on the two wheels is always in forward direction Statement 2: The frictional force acts only when the bodies are in contact",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "When a bicycle is in motion, two cases may arise : (i) When the bicycle is being pedalled. In this case, the applied force has been communicated to rear wheel. Due to which the rear wheel pushes the earth backwards. Now the force of friction acts in the forward direction on the rear wheel but front wheel moves forward due to inertia, so force of friction works on it in backward direction (ii) When the bicycle is not being pedalled : In this case both the wheels move in forward direction, due to inertia. Hence force of friction on both the wheels acts in backward direction",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-250",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A table cloth can be pulled from a table without dislodging the dishes Statement 2: To every action there is an equal and opposite reaction",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "According to law of inertia (Newton\u2019s first law), when cloth is pulled from a table, the cloth come in state of motion but dishes remains stationary due to inertia. Therefore when we pull the cloth from table the dishes remains stationary",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-251",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A rocket in flight is a system of varying mass. Statement 2: The rocket fuel is being consumed continuously.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "The fuel is consumed continuously when the rocket if flying. Hence, the rocket in a flight is a system of varying mass.",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-252",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Aeroplanes always fly at low altitudes Statement 2: According to Newton\u2019s third law of motion, for every action there is an equal and opposite reaction",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "The wings of the aeroplane pushes the external air backward and the aeroplane move forward by reaction of pushed air. At low altitudes density of air is high and so the aeroplane gets sufficient force to move forward",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-253",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A body subjected to three concurrent forces cannot be in equilibrium Statement 2: If large number of concurrent forces acting on the same point, then the point will be in equilibrium, if sum of all the forces is equal to zero",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "A body subjected to three concurrent forces is found to in equilibrium if sum of these forces is equal to zero \ud835\udc56. \ud835\udc52. \ud835\udc39\u20d71 + \ud835\udc39\u20d72 + \ud835\udc39\u20d73 \u2026 \u2026 = 0",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-254",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Use of ball bearings between two moving parts of machine is a common practice. Statement 2: Ball bearings reduce vibrations and provide good stability.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Ball bearings, also known as anti-friction bearings are small metallic or ceramic spheres used to reduce friction between shafts and axles in a number of applications.",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-255",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A cyclist always bends inward while negotiating a curve Statement 2: By bending, cyclist lowers his centre of gravity",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "The purpose of bending is to acquire centripetal force for circular motion. By doing so component of normal reaction will counter balance the centrifugal force",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-256",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The acceleration of a body down a rough inclined plane is greater than the acceleration due to gravity Statement 2: The body is able to slide on a inclined plane only when its acceleration is greater than acceleration due to gravity",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Acceleration down a rough inclined plane \ud835\udc4e= \ud835\udc54(sin \ud835\udf03\u2212\ud835\udf07cos \ud835\udf03) and this is less than \ud835\udc54",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-257",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A reference frame attached to the earth is an inertial frame of reference Statement 2: Newton\u2019s laws can be applied in this frame of reference",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Reference frame attached to Earth is not an inertial frame of reference because Earth is revolving about the Sun, as well as it is rotating about its own axis",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-258",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: When ball of a mass m hits normally a wall with a velocity v and rebounds with same Velocity v, impulse imparted to the ball is 2mv. Statement 2: Impulse= change in linear momentum.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "We know that Inpulse =change in linear momentum =final momentum-initial momentum = mv-m(-v) =2mv",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-259",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Linear momentum of a body changes even when it is moving uniformly in a circle Statement 2: Force required to move a body uniformly along a straight line is zero",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "In uniform circular motion of a body the speed remains constant but velocity changes as direction of motion changes As linear momentum = mass \u00d7 velocity, therefore linear momentum of a body changes in a circle On the other hand, if the body is moving uniformly along a straight line then its velocity remains constant and hence acceleration is equal to zero. So force is equal to zero",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-260",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A player lowers his hands while catching a cricket ball and suffers less reaction force Statement 2: The time of catch increases when cricketer lowers its hand while catching a ball",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "By lowering his hand player increases the time of catch, by doing so he experience less force on his hand because \ud835\udc39\u221d1/\ud835\udc51\ud835\udc61",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-261",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The maximum speed with which a vehicle can go round a level curve of diameter 20 m without skidding is \u221a10 ms\u22121, given \u03bc = 0.1 Statement 2: It follows from \ud835\udc63\u2264\u221a\ud835\udf07\ud835\udc5fg",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc63= \u221a\ud835\udf07\ud835\udc5fg = \u221a0.1 \u00d7 10 \u00d7 10 = \u221a10 ms\u22121 Both the assertion and reason are true, and reason is correct explanation of assertion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-262",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A string can never remain horizontal, when loaded at the middle, however large the tension may be Statement 2: For horizontal spring, angle with vertical, \u03b8 = 90\u00b0 \u21d2\ud835\udc47= \ud835\udc4a 2 cos \u03b8 = \ud835\udc4a 2 cos 90\u00b0 = \u221e",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "As is clear from figure 2\ud835\udc47cos\u03b8 = \ud835\udc4a \ud835\udc47= \ud835\udc4a 2 cos \u03b8 For the string to become horizontal, \u03b8 = 90\u00b0, cos\u03b8 = cos 90\u00b0 = 0 \u2234\ud835\udc47= \ud835\udc4a 2 cos 90\u00b0 = \u221e Both the assertion and reason are true and latter is correct explanation of the former",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-263",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The greater the rate of the change in the momentum vector, the greater the force applied Statement 2: Newton\u2019s second law is \ud835\udc39\u20d7= \ud835\udc51\ud835\udc5d\u20d7 \ud835\udc51\ud835\udc61",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "Statement II is correct, as it represents Newton\u2019s second law as \ud835\udc39\u20d7= \ud835\udc51\ud835\udc5d\u20d7 \ud835\udc51\ud835\udc61, from this only we can say for greater value of \ud835\udc51\ud835\udc5d\u20d7 \ud835\udc51\ud835\udc61, force applied has to be more",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-264",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The driver of a moving car sees a wall in front of him. To avoid collision, he should apply brakes rather than taking a turn way from the wall Statement 2: Friction force is needed to stop the car or taking a turn on a horizontal road",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "Force needed when breaks are applied \ud835\udc531 = \ud835\udc5a\ud835\udc4e= \ud835\udc5a\ud835\udc632 \ud835\udc51 (\ud835\udc63: initial speed, \ud835\udc51: distance from wall) When turn is taken \ud835\udc532 = \ud835\udc5a\ud835\udc4e= \ud835\udc5a\ud835\udc632 \ud835\udc51 Hence, breaks must be applied",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-265",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: In high jump, it hurts less when an athlete lands on a heap of sand Statement 2: Because of greater distance and hence greater time over which the motion of an athlete is stopped, the athlete experience less force when lands on heap of sand",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc39= \u2206\ud835\udc43 \u2206\ud835\udc61. If \u2206\ud835\udc61 is more, then \ud835\udc39 will be less",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-266",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Friction is a self adjusting force Statement 2: Friction does not depend upon mass of the body",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Only static friction is a self adjusting force. This is because force of static friction is equal and opposite to applied force (so long as actual motion does not start). Frictional force = \ud835\udf07\ud835\udc5a\ud835\udc54 \ud835\udc56. \ud835\udc52. friction depends on mass",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-267",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Pulling (figure a) is easier than pushing (figure b) on a rough surface Statement 2: Normal reaction is less in pulling than in pushing",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Due to change in normal reaction, pulling is easier",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-268",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A particle is found to be at rest when seen from a frame \ud835\udc461 and moving with a constant velocity when seen from another frame\ud835\udc462. We can say both the frames are inertial Statement 2: All frames moving uniformly with respect to an internal frame are themselves internal",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "By the definition of inertial and nom-inertial frame",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-269",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Newton\u2019s third law applies is applicable only when bodies are in motion Statement 2: Newton\u2019s third law applies to all types of forces, \ud835\udc52. \ud835\udc54. gravitational, electric or magnetic forces etc.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "According to third law of motion it is impossible to have a single force out of mutual interaction between two bodies, whether they are moving or at rest. While, Newton\u2019s third law is applicable for all types of forces",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-270",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: When the lift moves with uniform velocity the man in the lift will feel weightlessness Statement 2: In downward accelerated motion of lift, apparent weight of a body decreases",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "For uniform motion apparent weight = Actual weight for downward accelerated motion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-271",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A bullet is fired from a rifle. If the rifle recoils freely, the kinetic energy of the rifle is more than that of the bullet Statement 2: In the case of rifle bullet system the law of conservation of momentum violates",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Law of conservation of linear momentum is correct when no external force acts. When bullet is fired from a rifle then both should possess equal momentum but different kinetic energy, \ud835\udc38= \ud835\udc432 2\ud835\udc5a \u2234 Kinetic energy of the rifle is less than that of bullet because \ud835\udc38\u221d1/\ud835\udc5a",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-272",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Mass is a measure of inertia of the body in linear motion Statement 2: Greater the mass, greater is the force required to change its state of rest or of uniform motion",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "According to Newton\u2019s second law of motion \ud835\udc4e= \ud835\udc39 \ud835\udc5a \ud835\udc56. \ud835\udc52. magnitude of the acceleration produced by a given force is inversely proportional to the mass of the body. Higher is the mass of the body, lesser will be the acceleration produced \ud835\udc56. \ud835\udc52. mass of the body is a measure of the opposition offered by the body to change a state, when the force is applied \ud835\udc56. \ud835\udc52. mass of a body is the measure of its inertia",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-273",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Two bodies of masses \ud835\udc40 and \ud835\udc5a(\ud835\udc40> \ud835\udc5a) are allowed to fall from the same height if the air resistance for each be the same then both the bodies will reach the earth simultaneously Statement 2: For same air resistance, acceleration of both the bodies will be same",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "The force acting on the body of mass \ud835\udc40 are its weight \ud835\udc40\ud835\udc54 acting vertically downwards and air resistance \ud835\udc39 acting vertically upward \u2234 Acceleration of the body, \ud835\udc4e= \ud835\udc40\ud835\udc54\u2212\ud835\udc39 \ud835\udc40 = \ud835\udc54\u2212 \ud835\udc39 \ud835\udc40 Now, \ud835\udc40> \ud835\udc5a, therefore, the body with larger mass will have greater acceleration and it will reach the ground first",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-274",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Force is required to move a body uniformly along a circle Statement 2: When the motion is uniform, acceleration is zero",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "When a body is moving in a circle, its speed remains same but velocity changes due to change in the direction of motion of body. According to first law of motion, force is required to change the state of a body. As in circular motion the direction of velocity of body is changing so the acceleration cannot be zero. But for a uniform motion acceleration is zero (for rectilinear motion)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-275",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: It is not possible to drive a car on a slippery road Statement 2: Friction always opposes motion",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "Both the statements are true but reason is not a correct explanation of assertion. Here, friction causes motion",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-276",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The velocity of a body at the bottom of an inclined plane of given height is more when it slides down the plane, compared to, when it rolling down the same plane Statement 2: In rolling down a body acquires both, kinetic energy of translation and rotation",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "In sliding down, the entire potential energy of body is converted only into translational energy. While in rolling motion, some part of potential energy is converted into kinetic energy of rotation and rest into kinetic energy of translation. Therefore, in sliding motion, the velocity acquired by the body is more",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-277",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The slope of momentum versus time curve give us the acceleration Statement 2: Acceleration is given by the rate of change of momentum",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "\ud835\udc39= \ud835\udc51\ud835\udc5d \ud835\udc51\ud835\udc61= Slope of momentum-time graph \ud835\udc56. \ud835\udc52. Rate of change of momentum = Slope of momentum \u2013 time graph = force",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-278",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: The value of dynamic friction is less than the limiting friction Statement 2: Once the motion has started, the inertia of rest has been overcome",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Correct answer is option (d). Refer to official Laws of Motion solution key.",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-279",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Frictional heat generated by the moving ski is the chief factor which promotes sliding in skiing while waxing the ski makes skiing more easy Statement 2: Due to friction energy dissipates in the form of heat as a result it melts the snow below it. Wax is water repellent",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "Once the ski is in motion, it melts the snow below it and hence skiing can be performed. To make skiing easier, wax has been put on bottom surface to ski as wax is water repellent and hence reduces the friction between the ski and film of water",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-280",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Two particles are moving towards each other due to mutual gravitational attraction. The momentum of each particle will increase Statement 2: Rate of change of momentum depends upon \ud835\udc39ext",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 1,
    "explanation": "Due to attraction force, their velocities increase; hence, momentum also increases. For individual particle, gravitational attractive force will be external force",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-281",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A man in a closed cabin falling freely does not experience gravity Statement 2: Inertial and gravitational mass have equivalence",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "\ud835\udc5agrav. \ud835\udc54\u2212\ud835\udc41= \ud835\udc5ainertial. \ud835\udc4e For freely falling \ud835\udc4e= \ud835\udc54. Since \ud835\udc5agrav = \ud835\udc5ainert \u21d2\ud835\udc41= 0",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-282",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: A reference frame attached to earth is an inertial frame of reference Statement 2: The reference frame which has zero acceleration is called a non inertial frame of reference",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 2,
    "explanation": "An inertial frame of reference is one which has zero acceleration and in which law of inertia hold good \ud835\udc56. \ud835\udc52. Newton\u2019s law of motion are applicable equally. Since earth is revolving around the sun and earth is rotating about its own axis also, the forces are acting on the earth and hence there will be acceleration of earth due to these factors. That is why earth cannot be taken a inertial frame of reference",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-283",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Friction is a self adjusting force Statement 2: The magnitude of static friction is equal to the applied force and its direction is opposite to that of the applied force",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 3,
    "explanation": "Static friction alone is a self adjusting force and not all types of friction. Assertion is false, reason is true",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-284",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Statement 1: Moment of inertia is same as inertia Statement 2: Moment of inertia of a body represents rotational inertia of the body This section contain(s) 0 question(s). Each question contains Statements given in 2 columns which have to be matched. Statements (A, B, C, D) in columns I have to be matched with Statements (p, q, r, s) in columns II.",
    "options": [
      "Statement 1 is True, Statement 2 is True; Statement 2 is correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is True; Statement 2 is not correct explanation for Statement 1",
      "Statement 1 is True, Statement 2 is False",
      "Statement 1 is False, Statement 2 is True"
    ],
    "correctAnswer": 0,
    "explanation": "Assertion is false, but reason is true. Moment of inertia is not inertia, but rotational inertia",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-285",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The system shown below is initially in equilibrium. Masses of the blocks \ud835\udc34, \ud835\udc35, \ud835\udc36, \ud835\udc37, and \ud835\udc38 are, respectively, 3 kg, 3 kg, 2 kg, 2 kg and 2 kg, Match the conditions in Column I with the effect in Column II Column-I Column- II (A) After spring 2 is cut, tension is string \ud835\udc34\ud835\udc35 (p) Increases (B) After spring 2 is cut, tension in string \ud835\udc36\ud835\udc37 (q) Decreases (C) After string between \ud835\udc36 and pulley is cut, tension in string \ud835\udc34\ud835\udc35 (r) Remain constant (D) After string between \ud835\udc36 and pulley is cut, tension in string \ud835\udc36\ud835\udc37 (s) Zero CODES : A B C D",
    "options": [
      "c b b,d b",
      "b b,d b c",
      "b,d b c b",
      "b c b b,d"
    ],
    "correctAnswer": 3,
    "explanation": "(i),(ii) After spring 2 is cut, tension in string \ud835\udc34\ud835\udc35 will not change (\ud835\udc47\ud835\udc36\ud835\udc37)\ud835\udc56= 4 \ud835\udc5ag (\ud835\udc47\ud835\udc36\ud835\udc37)\ud835\udc53= \ud835\udc5a\ud835\udc37g + \ud835\udc5a\ud835\udc37. \ud835\udc5a\ud835\udc34+ \ud835\udc5a\ud835\udc35\u2212\ud835\udc5a\ud835\udc36\u2212\ud835\udc5a\ud835\udc37 \ud835\udc5a\ud835\udc34+ \ud835\udc5a\ud835\udc35+ \ud835\udc5a\ud835\udc36+ \ud835\udc5a\ud835\udc37 . g = 2\ud835\udc5a\ud835\udc54(1 + 1 5) = 2.4 \ud835\udc5ag Hence \ud835\udc47\ud835\udc36\ud835\udc37 decreases (iii), (iv) After string between \ud835\udc36 and pulley is cut, tension in string \ud835\udc34\ud835\udc35 will become zero (\ud835\udc47\ud835\udc36\ud835\udc37)\ud835\udc56= (\ud835\udc5a\ud835\udc37+ \ud835\udc5a\ud835\udc38)g = 4 \ud835\udc5ag Acceleration of \ud835\udc36 and \ud835\udc37 blocks is (\ud835\udc5a\ud835\udc36+ \ud835\udc5a\ud835\udc37)g + \ud835\udc5a\ud835\udc38g = (\ud835\udc5a\ud835\udc36+ \ud835\udc5a\ud835\udc37). \ud835\udc4e \ud835\udc4e= 6\ud835\udc5ag 4\ud835\udc5ag = 3 2 g, (\ud835\udc47\ud835\udc36\ud835\udc37)\ud835\udc53+ \ud835\udc5a\ud835\udc36g = \ud835\udc5a\ud835\udc36\ud835\udc4e (\ud835\udc47\ud835\udc36\ud835\udc37)\ud835\udc53= 2\ud835\udc5a3 2 g \u22122\ud835\udc5ag = \ud835\udc5ag The tension decrease",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 128 179\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"128\" height=\"179\"/></svg>"
  },
  {
    "id": "lom-qb-286",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Column I gives four different situations involving two blocks of mass \ud835\udc5a1 and \ud835\udc5a_2 placed in different ways on smooth horizontal surface as shown. In each of the situations, horizontal forces \ud835\udc391 and \ud835\udc392 are applied or blocks of mass \ud835\udc5a1 and\ud835\udc5a2, respectively and also \ud835\udc5a2\ud835\udc391 < \ud835\udc5a1\ud835\udc392. Match the statements in Column I with corresponding results in Column II Column-I Column- II (A) Both the block are connected by the massless inelastic string. The magnitude of tension in the string is (p) \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1 + \ud835\udc5a2 ( \ud835\udc391 \ud835\udc5a1 \u2212\ud835\udc392 \ud835\udc5a2 ) (B) Both the blocks are connected by the massless inelastic string. The magnitude of tension in the string is (q) \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1 + \ud835\udc5a2 ( \ud835\udc391 \ud835\udc5a1 + \ud835\udc392 \ud835\udc5a2 ) (C) The magnitude of normal reaction between the blocks is (r) \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1 + \ud835\udc5a2 ( \ud835\udc392 \ud835\udc5a2 \u2212\ud835\udc391 \ud835\udc5a1 ) (D) The magnitude of normal reaction between the blocks is (s) \ud835\udc5a1\ud835\udc5a2 ( \ud835\udc391 + \ud835\udc392 \ud835\udc5a1 + \ud835\udc5a2 ) CODES : A B C D",
    "options": [
      "c b c b",
      "b c a c",
      "c b a b",
      "b c b c"
    ],
    "correctAnswer": 2,
    "explanation": "1. Let \ud835\udc4e be acceleration of two block system towards right, then \ud835\udc4e= \ud835\udc392 \u2212\ud835\udc391 \ud835\udc5a1 + \ud835\udc5a2 \ud835\udc392 \u2212\ud835\udc47= \ud835\udc5a2. \ud835\udc4e Solving \ud835\udc47= \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1+\ud835\udc5a2 ( \ud835\udc392 \ud835\udc5a2 + \ud835\udc391 \ud835\udc5a1) 2. Replace \ud835\udc391 by \u2013 \ud835\udc391 in result of (i), \ud835\udc47= \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1 + \ud835\udc5a2 ( \ud835\udc392 \ud835\udc5a2 \u2212\ud835\udc391 \ud835\udc5a1 ) 3. Let \ud835\udc4e be acceleration of two block system towards left, then \ud835\udc4e= \ud835\udc392 \u2212\ud835\udc391 \ud835\udc5a1 + \ud835\udc5a2 , \ud835\udc392 \u2212\ud835\udc41= \ud835\udc5a2\ud835\udc4e Solving, \ud835\udc41= \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1+\ud835\udc5a2 ( \ud835\udc391 \ud835\udc5a1 + \ud835\udc392 \ud835\udc5a2) 4. Replacing \ud835\udc391 by \u2013 \ud835\udc391 in result of (iii) \ud835\udc41= \ud835\udc5a1\ud835\udc5a2 \ud835\udc5a1 + \ud835\udc5a2 ( \ud835\udc392 \ud835\udc5a2 \u2212\ud835\udc391 \ud835\udc5a1 )",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 483 247\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"483\" height=\"247\"/></svg>"
  },
  {
    "id": "lom-qb-287",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Coefficient of friction between the block and the surface in each of the given figures is 0.4. Match Column I with that of column II Column-I Column- II (A) Force of friction is zero in (p) Fig i. (B) Force of friction is 2.5 N in (q) Fig ii. (C) Acceleration of the block is zero in (r) Fig iii. (D) Normal force is not equal to 2g in (s) Fig iv. CODES : A B C D",
    "options": [
      "A,b,c,d c,d a,c b,d",
      "c,d a,c b,d a,b,c,d",
      "a,c b,d a,b,c,d c,d",
      "b,d a,b,c,d c,d a,c"
    ],
    "correctAnswer": 1,
    "explanation": "1. Force of friction is zero in (a) and (c) because block has no tendency to move 2. Force of friction is 2.5 N in (b) and (d) because applied force in horizontal direction in both is 2.5 N 3. Acceleration is zero in all cases (iv) Normal force is not equal of 2g in (c) and (d) because some extra vertical force is also acting",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 208 144\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACQCAIAAAD2nnJPAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAZfUlEQVR4nO2deVxN+f/Hw0i2MINsTR5ClqIsSQwzIWPJaGTfyTYmu+wGqZElY5koJD8i65hosZRkza9IKEnWbEkhyt73Nffz+35+Z8696t7uOefek8/zj/v4nM/53HM+531f5/15v88953MM8hkMCTHQdQcYXxZMcAxJYYJjSAoTHENSmOAY//Dx48eXL19KsCMmOBmTm5vr5eVVuXLlWbNmeXt7L126tGPHji4uLppu56+//qpdu/ZXX31lY2Nz8+ZNlW2cnZ0rK/D09OTWnzp1ysnJqUGDBunp6aTm3bt3ISEhDRs2PHTokPJ2mODkDbRSq1atT58+kUV4qbVr12q0hefPn8+ZM+fDhw85OTkODg7t27dXbnP27NnNmzffUpCXl8db+/TpUwMDA0tLy9evX9PK8ePHq9ydVoKDH+7fv/+wYcMGKhimYNCgQSgPHjwY5SFDhqCMGu6qoUOHoowGtBlqlLfg6uqqTd++EPC7urm5kXJWVhY+s7OzNdrCs2fP4JNIOTw8vG7dusptIER3d/crV66o3MKLFy9GjRplbm4OVwdJ0I6pbKyV4LCnZs2aHRSH+vXra9M3ndBBQTsF3333HcpwGCjjE2XUkFUaNSOr8Fuq3KOpqSlGLogMrg5G46198+aNuyoeP36scms7d+5UFgp+5dmzZ9vb25coUWL+/PnK30IDjOkYiytVqjRt2jRSKZbgWrdunSYOjRo10qZvOgF9vigOsLPy7hISEvAb+/v7//777xhY8XNo2f/evXtnZmZ+bm1UVFTZsmWPHj3KqyeCIw1Kly69YcOGfPEEZ2trK5LgEHVq0zedAMGJZI1WrVop787Dw4OmCMruLV9DD7dp06bY2NiCDxAeDgEfr5IKDmzZsgWag/LEElzbtm3VNFlMTExKSor6JrawsNCmbzqhcePGRZJT4agUHM72bdu2CdLz0NDQM2fOFNpsz549vr6+vEqu4ADKxsbGcJYqt6Ct4Ozs7KhRIP8KFSrAyS9YsIBnr9WrVyMCwBCgvonx42nTN53QpEkT7iH8rwKVR4dfLjExUX1rKA+pt2/fRm6YkZGhfbfh21auXBmvICgo6NSpU6hEz69du4ZCamrq9evX8xX+cvTo0cqX6xBB0sSF0KtXL8SdKvclWAy3a9cuqIqY0tDQEB6eZzJY54sS3IQJExDRY3zBqIeAmntoiHJw+uF3Vd8abdq04e7o3r17cCSdO3dWjqg0BcNoJw7du3d///496l1dXRcuXIgCkhIEiMOHD/fx8Xny5Anv60iN8YsjSyXqJOTm5s6cOVPl7gQT3KVLl6h1kNGsW7dOpeBwDpEkFP1D5dWrVzHq79+/X9nEso7h8BsEBgaicOLEiSpVqvj5+fGODkOBRoJTmTTIEVFiOEtLy7i4OJWCg5UxCh85cuTGjRtw2j/88MPly5cxFteuXRunrNwFR2M4ri+Hz1i+fLlKwV24cAFnJhweOV2xiFFizZo1KPBGA5UxnBwRXnAICOCKlVUIwf39998TJ05MSkoiNcuWLevatSsKqMFaKI/bXu5DKgUnmPLpRwQHMOAStZ09exYt4fj9/f3Lli2Lk5AJjo/ydbjIyMgZM2YoG50Irn379hjaaU1wcHC9evUQkEZHR5uZmfECneIhuHUKlK0BwWGchTUQkpMaOLaOHTuigBrY6vTp09z2vBhOJTh7kbeuX78eJqV/dukbQgoOA8Hs2bOJbpTzAxgRcqxTpw4sSyvHjBnj5eW1ZMmSc+fO8drLcUjlXYcLCwvDoSmrjQiuS5cuvXv3pjUREREmJiawW1RUVNOmTXmnnzqCCwgIKFeuXMmSJatWrQo7Q77QdHJysgQHrj6CXRZBdIzQDanN2LFjkbOgwLUXIjYI7vz58yEhIeXLl9+9ezcqt23bhq+4u7tjCEYGxNOo3AUH3SxdupSUee6KCA6nX8uWLefMmUNN5ObmtnLlSpyQyldMLCws7AsDv0XFihUNOJQqVQqfkO+HDx90bZv/Q7AYDhpaxwH649pr3759qNy1axeyVPh8X1/f8wrg4SC4cePGDR06tFevXtyvyHpIDQ0NRZDQTYGjoyMCNe6hITc3NDQ8fPhwbGyskZHRqlWr0hQBBr4yYMCA4cOHT506lZfDqhPDwbzQMTxc9erVa9SoYW1t7eHhgdDw7du3Ehy7mujyv1T4fERvpJySksK7XCxrwR06dOh/OPDUg5OT1CNPJwV4u5MnT06fPh2nJWIMZAwODg7cr6gzpELciOGQ52Ks+CJiOE2ZO3duzZo1IbuePXsie+UNqXL8awt9LrI1kFHt2bOHlC9evLho0SLuWnUEJwu0FRwMUWQTU+MisFWul3sMpyn+/v5WVlaI6nr06IHcC5kmdy27LPIPGv15rylyvD1J5XU4QWCC+wdRb0+SdQwnOLCzrg9OGNgNmEIi3v1wLIb7B3YDJg+Jb8CUI6oFFxMTc1wNQkNDa9WqBc21VWCrwM7ODmWckWQRZdTQMq8ZWYXGyqvq1aunTh+A/lxMl/gGTDmiQnA5OTmenp5L5MP27dvFM9DHjx8DAwP91cPU1LRFixZ2CmwUkPMHuSfKZBVqyCqcZlhEJcrQE8r4pM14W7C2tlazD8eOHRPPGtqjQnBPnjyJiIg4KhPCw8PJ/agi8fr169WrV6+SD/v37xfPGtqjWnD4FQ/LB1GH1KysrHBZ8bmnR/UEJrhCgODgR3V9iBqQmJgonjW0hwmuEJjghEWF4DIzMxF4qpkh6hyo4datW+IZiAlOWNhkNoXw8uXL6OjoE/Lhzp07urZZQTDBMSSFCY4hKUxwDElhgmNIChMcQ1KY4BiSwgTHkBSJBPf27VtyfejIkSNPnz7Nycm5d++eNLtm6BVSCC49PX3NmjVkEig3N7f4+Ph8xdR24eHhEuxd3/j06VNISAhOuczMzO+//56Y5cCBA4sXL85XzI1F558vloguuHfv3jk5OdF5srlMmjRJz29tEAN3d3f4+HyF8uDvSeWDBw+oKaZPn16MNSe64DZt2jRlyhRShuyCg4PpqydiY2O7desmdgf0iq1bt/r4+BTcBnJ0cHCQpj/SI7rg2rVrh9GTlBMSEkxMTE6fPk0Wc3NzS5QoIcikoXKhfv36dKbIgIAAGxsbFGCByZMnw7HRZnZ2didPntRNF0VGdMFVrFiRKgxYWlpyFytUqBAVFSV2H/SEGzduGBkZ0UkYbt++bWxsTMqenp7cab8HDRrEnaa5OCG64ODDuNNj8wQHi+v5PfgCgoitUqVKdBF5OhXchg0buIJDeciQIVL3TxJEF1zDhg0jIiLoIgRHJskmlClTJikpSew+6AkYJeHv6WLBghs2bJjU/ZME0QU3ceLE5cuXk/KLFy9MTU1hXDKs3Llzh/tismJPVlYW/P2rV6/IIgSH842UfX19R44cSVv27dt31apVOuii+IguuIcPH3bv3p2UHz9+TN5IR+bH8/PzQ+Asdgf0Cmdn58jISFI+cOBAp06dEGDgPJw/fz4ER18QY2Fhcf/+fd11U0SkuPCLLDUsLIxXieS/uMbFBZCamvrLL78U3AYSVPkOteKBRH9tXbp0CUkZXczLy0MErT/zgErJccWMBZ9b++jRo5UrV0rZH4lhf97rgIyMDO67bLno+RMJ2sMEx5AUJjiGpDDBMSSFCY4hKUxwDElhgmNIChMcQ1KY4BiSwgTHkBQmOIakMMExJIUJjiEpTHAMSWGCY0iKdIILDg4u9vfeMApFOsENGTKE+7wWIScnZ926dS4uLl5eXt7e3nPnzkX5+PHjmm4cX3dRwH1C7PHjxz4+Pn379qWPXoOIiIhBgwbRR94ZEqNjweUrbu2vV68eXfT09ExNTdVoy9evX588eTJ58U9eXh5vrYODg7m5eWZmJq3hPq4id65cubL33xTtscuwsDDy9efPn/M2zr0/GWv379+PSpU/pTroXnDjx493d3cn5Tdv3hTh4ZGhQ4fu3r375cuXKtdOmzbtBwV0fhPuA3nFAA8Pj4YNG966dSslJSU8PLxXr16abuHixYv29vadOnX66aefePf9Y7QxNDRctmwZrUlPT+/Zs2eRe6t7wZmamsbFxaGwefPmtLQ03trAwEB3JaBL2gCDsqura4MGDSpVqqT8qA6YNWvWixcvLC0tqWMrZoLbuXMnjo4uFuGtFW5ubmQSJ5W0a9cOmjt48CCtmTlzpqa7oOhYcHDaVatWRfQ2adIkKysrbba/YcOGcuXKPXr0iFdPng1DvoIdkTO1GAuO+5A5AWbx/jeo4TZITk4uWbJktWrVFixY8PbtW+Xtw1xBQUGwLfEL+f81adHQseCgAPqI+eHDh5W/tW/fPm8lVNoFYDRRnnOOWic2NrZChQohISHFT3AmJiYwCxzPjz/+yFsL7579b1DDa4NgA1kUTvj+/fsrb5+Ya/bs2bVr1ybziMlYcAgdEIEKtYspU6ZcvXqVV8m1DuSLM9XJyUmoPeoDXA+3ZcsW3tpCPRwlIyPD2NiYm10R6PnZr18/Gxub3NxcuQru7t27cOafC/bVBAEvCS+Qq3p5eSk3GDVqFHcRPhVBiTZ71Dd4MRwPdTwcxdHRkUyWyIUKDlKztbXF6SpLweHAtm7digxAy4nQoLMePXpAVcHBwcprL1++PH/+/MjISO4UnAL6VH2gYMEVCiRIMlPoCZG0cgPuVSR4QQysshQcQxBwvuFkq1mz5oEDB4o2k8HSpUstLCxw5vv4+PBGG2zw0KFDLVq0iI6OppXI87hXSTRForlFEhMTITjkUOvXr3/y5IkEO2Woz/Pnz5UvmBfAx48fi7wvKQTn6upqZGT0zTffVK9evXTp0ikpKRLslJGvnTJEQgrBnThxomLFigYKatSoIcEev2RSU1MRtiL9h6lr1aql6+7wkUJwCNjh24jgtPlXhKEOyNkxnhBrN23aVNfd4SNR0oDAE8dfpkwZpFTS7PFLxtfXlwwphc5FJz0SCc7T07NUqVImJiZ0kkeGSAQEBFhbWyNLw+m9b98+XXeHj0SCu3HjBpKGunXrSrO7L5b169fb2tqSS7tJSUka5Z7SIN11uMqVKxfXmbn1hJUrV7Zr145OWq2faCW4yMhIc3NzKysrSwXNFJAyKmmZrDI2NjYzM6PNEM+qbEa21qBBg9mzZwt1kBKQlpbWsGFD0nkcWsGmKMBiylto1KiROqHYkiVLHBwccnNzyWIBtxvFxMRs3rzZw8ND5d0SYqOV4JABQBZp6pGSkqJmSwCLcF8FpP+cPn164sSJ6h+g+oSFhbm6uha8d/wK3bp1I3/f7d69G64uIiKCXISLj48fMWKEt7f3vHnzSGPyIi8oEs7iczO/ioe2gnN3dxfDyhDc5MmThTpICYDgxo8fL4YpIDgopoBdu7m5OTs707eDwtXRVW/evMGo8uzZs3zFX6I7duzIV7zvi6xt27at9DmctoKbM2eOGFaG4OAwhDpICYDgfv31VzFMAcENHTr0c/sdPXr0gAEDiDPbvn17+/btuWvh7eilOPxYdnZ2KAwcODA6Ovr58+djxowR0ySq0VZw8+fPp6bBoHno0CH4cGWrJSQkbNmyRX0rQ3D0pZeyAIKDS6b9R1YeGhp6/vx55UO7cuXKpk2bNBKcSg/36dOnwYMHc2++QrQHN4bhtUuXLuRG1MWLF3ft2pWsRX+qVKmSr7gOD2miAfdOfckQzMOdO3cOCTmCfSMjo6VLl3JNdvXqVeSnLVu21EhwsovhqIdLTEzs0KEDfn5DQ8MZM2Zwjys5ORkZANILjQSnHMPBpfXp0wd7pDVZWVkGBgaXLl3KV9w7Xb58+YyMDAQ8GG1JAwiOvtpLhwgWwyEmhaFRWLduXdmyZXkpAgSkqeBk5+FoDLd8+fKLFy+iAEcCEfD8HAYBTQXHe64RLqpNmza8cTY7Oxv7os+8kffS/vHHHx07diQ1+/bts7CwkMQYBSFYlnrt2jVSwGhSqlQpusgT3N69e+H/tm7dSurxk6xZs+bPP/88ceJEXFwct73sYjiapXKPvWrVqvD9PAERwaEAU/j7+5N6CAKmWLVqFUxx4cIFbnuutjAOdurUCb5tyJAhiMa4aSaGF3yXlL/99lt89+bNm3Xq1CE1GF71IQ8TMoYjhISE9OrVi1dJBffbb795eXmRShiXeAXYrlWrVohwue1V3n2qt/BiOAJ0AwfDq6SCW716NYYFnJ8o+/n5wQgoYCONGzemJyRpTy+Y5+bmYrBesWIFWdyzZ4+TkxO9Bwkjabdu3bAYExMzd+5cUgkzwqciRejevbvy8wrSo63gcGA8gyJpUg6WIaAWLVrMmjUrODiYVuJM9fb2RmHjxo2tW7fmtZddDIeflnfUY8eOPXnypErBwW7c1OHnn3+G+FCAfczMzHjtSQz38uVLRMkYDbj7RYzIvbf+8uXLQUFB3EfXoD+cycjYuI/U6xCBr8PBe8FAaUpAQDhx4fN9fHxopYeHB/IpuH3E0dCi3AXHuw6HSG7//v3KpoB96tata2lpyb1mvnbtWvj469evY5CdMGECrz1SUYRoGCLg+Xj7ffjwIc5bXRxxEdFWcFyhIF3AuUXKUVFRPAHBXpGRkV9//TUdOhFwzJw5E9/iDqa0vexiOK5QEJlRX84zBfFwaI/wLiAggFSeOXNm6tSpkN2OHTuUBdqvX7/mzZvDSip3bW9vL/HBaoMwMRy8FHy7qampvYKmTZtyxwtkrMuWLTM3N4fDxxkMzR04cACxC05cGxsbhB2DBg1auHAhN9aG4Lg5v/7DjeHguWvVqkVMYW1tTcIGAo4aWqxUqRIyJAyOFSpU2LVrFxwbzttmzZrBFAhIMNrCUFzBQZoQXO/evT98+ABTd1JA7iyEPY2NjRGf5eXlwdt17twZq2B8rEKMiLKjoyMGUzhIFLCIvFW3hhJGcLDjwX/DvSySmJhIKuHhoqOjSRnygm/DGIGzHNnZlClTuM5SjkMqFRyCdK4pkpKS6HHhqEnlsWPH4NVIOSEhASqESgIDA2ETRCnjxo3jCm7EiBFQDH2kijxeSv45JW+epY+aklVkZgLksyjT0I3ITicXe7no7L/UU6dOYWSh+T+GEkS7shZckf9LheC+/fZbbIEsIvLz9fXlCq7QP+9lhM4El5qaiqgZqSvGHRcXF+6FgDR5DqlFFhxGyUWLFiHGhSmQrvr5+XHXFvxfquwQ/rKIIMgxaVC+LCIITHD/j8oLv4IAwU2bNk2og5QAlRd+BYFcFtH18QmGdDdgaoQcYzgd3oApI/T3BkzZ/bUl3g2YxelZEHYDpjDo6gZM2aFCcEialCedVMnIkSPr1KljY2PTpk2bVq1aWSloo4A8D4JKlJGKoty8eXOUbW1tSTMUsIhKlNEAZaRp5EES8vUePXqo2Y2EhASRrHP//n01+4CIE6awtrZG51u3bs01BfcYuaYApBnao4zvoky2wDUmvuLo6KhmN2JjY0UyhVCoEFxKSoqfrBBvdpy7d+/q+uA04/LlyyKZQihUCC4+Pj40NDRMPmg5h2YBJCcny8gU4eHh+j8VmgrBxcXFHZYPERERogpO18enAUxwUsAER2GCkwImOIpcBYdUPFo+xMTE0PkNBCc9PV3Xx6cBMEV2drZIphAK9r5UhqQwwTEkhQmOISlMcAxJYYJjSAoTHENSmOAYksIEx5AUsQSXl5e3d+9efKalpXXo0IFU+vn5eXt7k7Kzs/PVq1ezs7O3bdumh2/oEQkyu8eDBw8yMjJUNnj69Cn3xYfFD1EE9/79ezc3N/IHwIcPH+Lj40n9o0eP7t27R8qJiYnkGcn09HR9mNVHAjZu3EheSL9w4cK1a9eqbPP27ds1a9ZQKxU/RBGcl5cXmU6WwJ1Rm/uKRerYVqxYQR4WL8YsWbKEzBZYKDCLk5OTeH8Q6xbhBQdJVa1aNSsri5SXL19uZWWVr7h7duDAgWQaqcjIyMaNG1+5coV8BQVzc3PBe6I/3L17l8yvS0CYERcX9+rVq+MKbt++jcrz58+jTE5IOLkFCxboqreiIrzgYLhq1arRRZzWpqampOzu7k5fJlyvXj0quJycHAMDA2L3Ysm8efNo2AC1WVtbk3fcBgUFGRoaEpFFR0dv376dtEEQYmJioqveiorwgtuzZw+dmD1f4b2o4GYpIGVLS0squH/6YWBw9uxZwTujJ3Tu3Hn16tV0cfz48fSlyvD0R44cyVd4tU+fPpFKjAYwiP7fa1QEhBfc4cOHzczM6KL6grtw4YLgndET7O3tuRMJcgWH4NXR0RHDK1J42uDFixcwSLFMHYQXHHJ+DBM0UYCq6DSzUBt92rRJkyZUYRkZGfiKnr8kShv69OmDzJQucgWXl5eHkHfKlCnk9R0ESK1EiRKINKTuqPiIkqV2794dkVz+f+f77N+/P2T39OlTBMIzZsxAISkpCQlEYGAgSVTDwsIGDBggRk/0BLgxFxcXujhs2LA5c+bQRUR4w4cP57aPiYlp27atZN2TElEEl5ycrNHcR6NGjSIXqIorcN6tWrUi5cePH0dFRSFFIIk8QKyWmprKbQ8JIhSWupeSINY/DZGRkQcPHlSn5d69e0+dOiVSN/SHo0eP8uaD/hwYAeQ1kY9GiPhfamZmJpmKsQAQphTj0I0H0vBCEyOEszgDuZfHixnsz3uGpDDBMSSFCY4hKUxwDElhgmNIChMcQ1L+A5tM2sf8otiWAAAAAElFTkSuQmCC\" width=\"208\" height=\"144\"/></svg>"
  },
  {
    "id": "lom-qb-288",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "There is no friction anywhere in the system shown in figure. The pulley is light. The wedge is free to move on a frictionless surface. A horizontal force \ud835\udc39 is applied on the system in such a way that \ud835\udc5a does not slide on \ud835\udc40 or both move together with some common acceleration. Given \ud835\udc40> \u221a2 m Match the entries of Column I with that of Column II Column-I Column- II (A) Pseudo force acting on \ud835\udc5a as seen from the frame of \ud835\udc40 is (p) Equal to \ud835\udc5a\ud835\udc39 \ud835\udc5a+\ud835\udc40 (B) Pseudo force acting on \ud835\udc40 as seen from the frame of \ud835\udc5a is (q) Greater than \ud835\udc5a\ud835\udc39 \ud835\udc5a+\ud835\udc40 (C) Normal force (for \ud835\udf03= 45\u00b0) between \ud835\udc5a and \ud835\udc40 is (r) Less than \ud835\udc5ag sin\ud835\udf03 (D) Normal force between ground and \ud835\udc40 is (s) Greater than \ud835\udc5ag sin \ud835\udf03 CODES : A B C D",
    "options": [
      "A,c b,c b,c b,d",
      "b,c b,c b,d a,c",
      "b,c b,d a,c b,c",
      "b,d a,c b,c b,c"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration of the whole system towards right: \ud835\udc4e= \ud835\udc39 \ud835\udc40+ \ud835\udc5a \ud835\udc39\u2212\ud835\udc5ag sin \ud835\udf03= \ud835\udc5a\ud835\udc4ecos\ud835\udf03 \u21d2 \ud835\udc39\u2212\ud835\udc5ag sin \ud835\udf03= \ud835\udc5a \ud835\udc39 \ud835\udc40+ \ud835\udc5acos \ud835\udf03 \u21d2\ud835\udc39= (\ud835\udc40+ \ud835\udc5a)\ud835\udc5ag sin\ud835\udf03 \ud835\udc40+ \ud835\udc5a\u2212\ud835\udc5acos\ud835\udf03 Pseudo force on \ud835\udc5a as seen from the frame of \ud835\udc40: \ud835\udc39\ud835\udc601=\ud835\udc5a\ud835\udc4e= \ud835\udc5a\ud835\udc39 \ud835\udc5a+ \ud835\udc39= \ud835\udc5ag sin\ud835\udf03( \ud835\udc5a \ud835\udc40+ \ud835\udc5a(1 \u2212cos \ud835\udf03)) < \ud835\udc5ag sin \ud835\udf03 Pseudo force ion \ud835\udc40 as seen from the frame of \ud835\udc5a: \ud835\udc39\ud835\udc602 = \ud835\udc40\ud835\udc4e= \ud835\udc40\ud835\udc39 \ud835\udc5a+ \ud835\udc39(> \ud835\udc5a\ud835\udc39 \ud835\udc5a+ \ud835\udc40) = \ud835\udc5ag sin \ud835\udf03( \ud835\udc40 \ud835\udc40+ \ud835\udc5a(1 \u2212cos \ud835\udf03)) < \ud835\udc5ag sin\ud835\udf03 Now \ud835\udc5a\ud835\udc54cos \ud835\udf03\u2212\ud835\udc41= \ud835\udc5a\ud835\udc4esin \ud835\udf03 \u21d2 \ud835\udc41= \ud835\udc5ag cos \ud835\udf03\u2212\ud835\udc5a\ud835\udc4esin\ud835\udf03 Hence \ud835\udc41 is less than \ud835\udc5ag cos \ud835\udf03. Hence, it will also be less than \ud835\udc5ag sin\ud835\udf03, because \ud835\udf03= 45\u00b0 Applying equation on \u2018m\u2019 in horizontal direction: \ud835\udc39cos \ud835\udf03\u2212\ud835\udc41sin\ud835\udf03= \ud835\udc5a\ud835\udc4e \u21d2 \ud835\udc39cos \ud835\udf03\u2212\ud835\udc41sin\ud835\udf03= \ud835\udc5a \ud835\udc39 \ud835\udc40+ \ud835\udc5a \u21d2\ud835\udc41= \ud835\udc5a\ud835\udc39 \ud835\udc40+ \ud835\udc5a( (\ud835\udc40+ \ud835\udc5a) cos \ud835\udf03\u2212\ud835\udc5a \ud835\udc5asin \ud835\udf03 ) Put \ud835\udf03= 45\u00b0 \u21d2 \ud835\udc41= \ud835\udc5a\ud835\udc39 \ud835\udc40+ \ud835\udc5a(\ud835\udc40+ \ud835\udc5a\u2212\u221a2\ud835\udc5a \ud835\udc5a ) > \ud835\udc5a\ud835\udc39 \ud835\udc5a+ \ud835\udc40 Normal force between ground and \ud835\udc40 will be(\ud835\udc40+ \ud835\udc5a)g. It is greater than \ud835\udc5ag sin \ud835\udf03. It is also greater than \ud835\udc5a\ud835\udc39 \ud835\udc40+\ud835\udc5a because \ud835\udc5a\ud835\udc39 \ud835\udc40+\ud835\udc5a is less than \ud835\udc5ag sin \ud835\udf03",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 503 111\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"503\" height=\"111\"/></svg>"
  },
  {
    "id": "lom-qb-289",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "In the figure shown, a block of mass \ud835\udc5a is released from rest when spring was in its natural length. The pulley also has mass \ud835\udc5a but it is friction less. Suppose the value of \ud835\udc5a is such that finally it is just able to lift the block \ud835\udc40 up after releasing it Column-I Column- II (A) Weight of \u2018\ud835\udc5a\u2019 required to just lift \u2018\ud835\udc40\u2019 (p) 3 \ud835\udc40 2 g (B) Tension in the rod, when \u2018\ud835\udc5a\u2019 is in equilibrium (q) \ud835\udc40g (C) Normal force acting on \ud835\udc40 when \ud835\udc5a is in equilibrium (r) \ud835\udc40 2 g (D) Tension in the string when displacement of \ud835\udc5a is maximum possible (s) 2 \ud835\udc5ag CODES : A B C D",
    "options": [
      "a b c d",
      "b,a c d a",
      "c c c b,d",
      "a,c b c,d a,b"
    ],
    "correctAnswer": 0,
    "explanation": "Let the maximum downward displacement of \ud835\udc5a is \ud835\udc650., then 1 2 \ud835\udc58\ud835\udc650 2 = \ud835\udc5ag\ud835\udc650 \u21d2 \ud835\udc650 = 2 mg/k To lift the block (\ud835\udc40): \ud835\udc58\ud835\udc650 = \ud835\udc40g \u21d2 2 \ud835\udc5ag = \ud835\udc40\ud835\udc54 \u21d2 \ud835\udc5ag = \ud835\udc40g/2 Hence (i)-(c) (ii) When \ud835\udc5a is in equilibrium \ud835\udc58\ud835\udc65= \ud835\udc5ag, \ud835\udc47= 2\ud835\udc58\ud835\udc65+ \ud835\udc5ag = 3\ud835\udc5ag = 3\ud835\udc40 2 g Hence (ii)-(a) (iii) \ud835\udc41+ \ud835\udc58\ud835\udc65= \ud835\udc40g \ud835\udc41= \ud835\udc40g \u2212\ud835\udc58\ud835\udc65= \ud835\udc40\ud835\udc54\u2212\ud835\udc40 2 g = \ud835\udc40 2 g Hence (iii)-(c) 4. Tension= \ud835\udc58\ud835\udc650 = \ud835\udc40g = 2 \ud835\udc5ag Hence (iv)-(b, d)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 418 271\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"418\" height=\"271\"/></svg>"
  },
  {
    "id": "lom-qb-290",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "For the situation shown in figure in Column I, the statements regarding friction forces are mentioned, while in Column II some information related to friction forces are given Match the entries of Column I with the entries of Column II Column-I Column- II (A) Total friction force on 3 kg block is (p) Towards right (B) Total friction force on 5 kg block is (q) Towards left (C) Friction force on 2 kg block due to 3 kg block is (r) Zero (D) Friction force on 3 kg block due to 5 kg block is (s) Non-zero CODES : A B C D",
    "options": [
      "c a,d b,d b,d",
      "a,d b,d b,d c",
      "b,d b,d c a,d",
      "b,d c a,d b,d"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc53\u21131 = 0.2 \u00d7 2 g = 4 N \ud835\udc53\u21132 = 0.1 \u00d7 5 g = 4 N \ud835\udc53\u211332 = 0.1 \u00d7 10 g = 4 N Friction on 3 kg block is towards left and non- zero. Hence (i)\u2192b, d \ud835\udc53\u21132 < \ud835\udc53\u21133 Hence 5 kg block will not move. So net friction on 5 kg will be zero Hence, (ii)\u2192(c)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 188 97\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"188\" height=\"97\"/></svg>"
  },
  {
    "id": "lom-qb-291",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Column I describes the motion of the object and one or more of the entries of Column II may be the cause of motions described in Column I. Match the entries of Column I with the entries of column II Column-I Column- II (A) An object is moving towards east (p) Net force acting on the object must be towards east (B) An object is moving towards east with constant acceleration (q) At least one force must act towards east (C) An object is moving towards east with varying acceleration (r) No forces may act towards east (D) An object is moving towards east with constant velocity (s) No force may act on the object CODES : A B C D",
    "options": [
      "A,c a,c c,d c,d",
      "c,d a,c a,c c,d",
      "a,c c,d c,d a,c",
      "c,d c,d a,c a,c"
    ],
    "correctAnswer": 1,
    "explanation": "For (i), it is not mentioned whether the object is accelerated or moving with constant velocity. So nothing can be predicted with surety If no net force is acting along east, then also it can move with constant velocity, and if no force is acting at all, then also it can move with constant velocity For (ii) and (iii): As the object is accelerated (weather uniform or non-uniform) a force must act on the object in such a manner that a component or whole of the force would be along east, and also the net force must be towards east For (iv): It is moving with constant velocity, so net force must be zero that implies no force may act on the object",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-292",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "Coefficient of friction between the masses 2 \ud835\udc5a and \ud835\udc5a is 0.5. All other surface are frictionless and pulleys are massless. Column I gives the different values of \ud835\udc5a1 and Column II gives the possible acceleration of 2 \ud835\udc5a and\ud835\udc5a. Match the columns Column-I Column- II (A) \ud835\udc5a1 = 2\ud835\udc5a (p) Accelerations of 2 \ud835\udc5a and \ud835\udc5a are same (B) \ud835\udc5a1 = 3 \ud835\udc5a (q) Accelerations of 2 \ud835\udc5a and \ud835\udc5a are different (C) \ud835\udc5a1 = 4 \ud835\udc5a (r) Acceleration of 2 \ud835\udc5a is greater than \ud835\udc5a (D) \ud835\udc5a1 = 6 \ud835\udc5a (s) Acceleration of \ud835\udc5a is less than 0.6 g CODES : A B C D",
    "options": [
      "A,d a,d b,c,d b,c,d",
      "a,d b,c,d b,c,d a,d",
      "b,c,d b,c,d a,d a,d",
      "b,c,d a,d a,d b,c,d"
    ],
    "correctAnswer": 3,
    "explanation": "Maximum possible acceleration of \ud835\udc5a: \ud835\udc4e0 = \ud835\udf07g = 0.5 g So (d) matches with all (i), (ii), (iii) and (iv) Let us assume that m and 2m move together with acceleration \ud835\udc4e: \ud835\udc4e= \ud835\udc5a1g 3\ud835\udc5a+ \ud835\udc5a1 If \ud835\udc4e= \ud835\udc4e0 \u21d2 \ud835\udc5a1g 3\ud835\udc5a+\ud835\udc5a1 = 0.5g \u21d2\ud835\udc5a1 = 3\ud835\udc5a So 3\ud835\udc5a is the maximum value of \ud835\udc5a1 such that both move together 1. \ud835\udc5a1 = 2\ud835\udc5a< 3\ud835\udc5a, hence (i)\u2192(a, d) 2. \ud835\udc5a1 = 3\ud835\udc5a hence (ii)\u2192(a, d) 3. \ud835\udc5a1 = 4\ud835\udc5a> 3\ud835\udc5a, hence (iii)\u2192(b, c, d) 4. \ud835\udc5a1 = 6\ud835\udc5a> 3\ud835\udc5a, hence (iv)\u2192(b, c, d)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 158 98\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"158\" height=\"98\"/></svg>"
  },
  {
    "id": "lom-qb-293",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A block is attached to an unstretched vertical spring and released from rest. As a result of this block comes down due to its weight, stops momentarily, and then bounces back. Finally the block starts oscillating up and down During oscillations, match Column I with Column II: Column-I Column- II (A) When the block is at its maximum downward displacement position (may be known as extreme position) (p) Acceleration is in upward direction (B) When the block is at its equilibrium position (q) Acceleration is in downward is in downward direction (C) When the block is somewhere between equilibrium position and downward extreme position (r) Acceleration is zero (D) When the block is above equilibrium position but below the initial unstretched position (s) Velocity may be in upward or in downward direction CODES : A B C D",
    "options": [
      "C,d a,d b,d a",
      "a c,d a,d b,d",
      "a,d b,d a c,d",
      "b,d a c,d a,d"
    ],
    "correctAnswer": 3,
    "explanation": "In figure, 3 is the equilibrium position where velocity is maximum and acceleration is zero. 1 and 2 are the extreme positions where velocity is zero and acceleration is maximum. 1 is the unstretched position When the block is at position 3, then \ud835\udc5ag = \ud835\udc58\ud835\udc65. So net force is zero, hence acceleration is zero. But velocity may be either in upward or downward direction Hence (ii)-(c, d) When the block is between position 3 and 2, then \ud835\udc58\ud835\udc65> \ud835\udc5ag. So net force is in upward direction, hence acceleration is in upward direction. But velocity may be either in upward or downward direction Hence (iii)-(a, d) But if the block is at position 2, then velocity is zero and acceleration is in upward direction Hence (i)-(a) When the block is between position 3 and 1, \ud835\udc5a\ud835\udc54> \ud835\udc58\ud835\udc65. So net force is in downward direction, hence acceleration is in downward direction. But velocity may be either in upwards or downward direction Hence (iv)-(b, d)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 73 123\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"73\" height=\"123\"/></svg>"
  },
  {
    "id": "lom-qb-294",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "A horizontal force \ud835\udc39 pulls a ring of mass \ud835\udc5a1 such that \ud835\udf03 remains constant with time. The ring is constrained to move along a smooth rigid horizontal wire. A bob of mass \ud835\udc5a2 hangs from \ud835\udc5a1 by an inextensible light string. Then match the entries of Column I with that of Column II Column-I Column- II (A) \ud835\udc39 (p) (\ud835\udc5a1 + \ud835\udc5a2)g (B) Force acting on \ud835\udc5a2 is (q) \ud835\udc5a2g sec \ud835\udf03 (C) Tension in the string is (r) \ud835\udc5a2 \ud835\udc39 \ud835\udc5a1 + \ud835\udc5a2 (D) Force acting on \ud835\udc5a1 by the wire is (s) (\ud835\udc5a1 + \ud835\udc5a2)g tan \ud835\udf03 CODES : A B C D",
    "options": [
      "d c b a",
      "c b a d",
      "b a d c",
      "a d c b"
    ],
    "correctAnswer": 1,
    "explanation": "\ud835\udc39= (\ud835\udc5a1 + \ud835\udc5a2)\ud835\udc4e (i) \ud835\udc47sin\ud835\udf03= \ud835\udc5a2\ud835\udc4e (ii) \ud835\udc47cos \ud835\udf03= \ud835\udc5a2g \u21d2\ud835\udc47= \ud835\udc5a2g sec \ud835\udf03 (iii) From (ii) and (iii), \ud835\udc4e= g tan \ud835\udf03 Put in (i), \ud835\udc39= (\ud835\udc5a1 + \ud835\udc5a2)gtan \ud835\udf03 Net force acting on \ud835\udc5a2 = \ud835\udc5a2\ud835\udc4e= \ud835\udc5a2\ud835\udc39 \ud835\udc5a1+\ud835\udc5a2 Force acting on \ud835\udc5a1 by wire: \ud835\udc5a1g + \ud835\udc47cos \ud835\udf03= \ud835\udc5a1g + \ud835\udc5a2g",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  },
  {
    "id": "lom-qb-295",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "For the situation shown in the figure below, match the entries of Column I with the entries of Column II Column-I Column- II (A) If \ud835\udc39= 12 N, then (p) There is relative motion between \ud835\udc34 and \ud835\udc35 (B) If \ud835\udc39= 15 N, then (q) There is relative motion between \ud835\udc35 and \ud835\udc36 (C) If \ud835\udc39= 25 N, then (r) There is relative motion between \ud835\udc36 and the ground (D) If \ud835\udc39= 40 N, then (s) Relative motion is not there at any of the surface CODES : A B C D",
    "options": [
      "B,c a,b,c c c",
      "a,b,c c c b,c",
      "c c b,c a,b,c",
      "c b,c a,b,c c"
    ],
    "correctAnswer": 1,
    "explanation": "Let \ud835\udc531, \ud835\udc532, \ud835\udc533 represent the friction forces between three contact surfaces \ud835\udc34\u2212\ud835\udc35, \ud835\udc35\u2212\ud835\udc36 and \ud835\udc36\u2212 ground, respectively. Limiting val.ues of friction forces at three surfaces are 8 N, 15 N, and 10 N respectively For relative motion between \ud835\udc36 and Ground, the minimum force needed is \ud835\udc39= 10 N For \ud835\udc39= 12 N, all the three blocks move together with same acceleration i.e., \ud835\udc4e1 = \ud835\udc4e2 = \ud835\udc4e3 = \ud835\udc4e \ud835\udc39\u2212\ud835\udc533 = (2 + 3 + 5)\ud835\udc4e \u21d2 \ud835\udc4e= 12 \u221210 10 = 1 10 ms\u22122 \ud835\udc531 = 2\ud835\udc4e= 2 5 \ud835\udc41 \u21d2 \ud835\udc532 = 12 \u2212\ud835\udc531 \u22123\ud835\udc4e= 11 \ud835\udc41 \ud835\udc533 = 10 N For \ud835\udc39= 15 N, the situation is similar For relative motion to start between \ud835\udc35 and \ud835\udc36, \ud835\udc532 \u2265 \ud835\udc53\ud835\udc3f2 \ud835\udc39\u2212\ud835\udc533 = 10\ud835\udc4e and \ud835\udc39\u2212\ud835\udc532 = 5\ud835\udc4e \ud835\udc532 = \ud835\udc39\u22125\ud835\udc4e= \ud835\udc39\u22125 [\ud835\udc39\u2212\ud835\udc533 10 ] = \ud835\udc39+ \ud835\udc533 2 \ud835\udc39+ 10 2 > 15 \u21d2\ud835\udc39> 20 N (Condition for relative motion to start between \ud835\udc35 and \ud835\udc36) For relative motion to start between \ud835\udc34 and \ud835\udc35 \ud835\udc531 3\ud835\udc53\ud835\udc3f1 = 8 N \ud835\udc39\u2212\ud835\udc531 \u2212\ud835\udc532 = 3\ud835\udc4e and \ud835\udc531 = 2\ud835\udc4e \ud835\udc531 = 2 [\ud835\udc39\u221215 5 ] > 8 \ud835\udc53> 35 N (condition for relative motion between \ud835\udc34 and \ud835\udc35)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 148 97\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"148\" height=\"97\"/></svg>"
  },
  {
    "id": "lom-qb-296",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "In the system shown in figure, masses of the blocks are such that when the system is released, acceleration of pulley \ud835\udc431 is \ud835\udc4e upwards and acceleration of block 1 is \ud835\udc4e1 upwards. It is found that acceleration of block 3 is same as that of 1 both in magnitude and direction Given that\ud835\udc4e1 > \ud835\udc4e> \ud835\udc4e1 2 . Match the following Column-I Column- II (A) Acceleration of 2 (p) 2\ud835\udc4e+ \ud835\udc4e1 (B) Acceleration of 4 (q) 2\ud835\udc4e\u2212\ud835\udc4e1 (C) Acceleration of 2 w.r.t. 3 (r) Upwards (D) Acceleration of 2 w.r.t. 4 (s) Downwards CODES : A B C D",
    "options": [
      "A,d d c b,c",
      "b,c a,d d c",
      "d c b,c a,d",
      "c b,c a,d d"
    ],
    "correctAnswer": 2,
    "explanation": "Let the accelerations of various blocks are as shown. Pulley \ud835\udc432 will have downward acceleration \ud835\udc4e Now \ud835\udc4e= \ud835\udc4e1+\ud835\udc4e2 2 \u21d2\ud835\udc4e2 = 2\ud835\udc4e\u2212\ud835\udc4e1 > 0 So acceleration of 2 is upwards Hence, (i)\u2192(b, c) And \ud835\udc4e= \u2212\ud835\udc4e1+\ud835\udc4e4 2 \u21d2\ud835\udc4e4 = 2\ud835\udc4e+ \ud835\udc4e1 >0 So acceleration of 4 is downwards Hence (\ud835\udc22\ud835\udc22) \u2192 (\ud835\udc1a, \ud835\udc1d) Acceleration of 2 w.r.t. 3: \ud835\udc4e2/3 = \ud835\udc4e2 \u2212\ud835\udc4e3 = \ud835\udc4e2 \u2212\ud835\udc4e1 = 2(\ud835\udc4e\u2212\ud835\udc4e2) < 0 This is downwards, hence (\ud835\udc22\ud835\udc22\ud835\udc22) \u2192(\ud835\udc1d) Acceleration of 2 w.r.t. 4: \ud835\udc4e2 4 = \ud835\udc4e2\u2014 \ud835\udc4e4 = 4\ud835\udc4e> 0 This is upwards. Hence, (iv)\u2192(c)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 154 187\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"154\" height=\"187\"/></svg>"
  },
  {
    "id": "lom-qb-297",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "For the situation shown in figure, in Column I, the statements regarding friction forces are mentioned, while in Column II some information related to friction forces are given Match the entries of Column I with the entries of Column II Column-I Column- II (A) Total friction force on 4 kg block is (p) Towards right (B) Total friction force on 2 kg block is (q) Towards left (C) Friction force on 6 kg block due to 2 kg block is (r) Zero (D) Total Friction force on 6 kg block is (s) Non-zero CODES : A B C D",
    "options": [
      "A,c a,c a d",
      "c,d a b,c a,d",
      "b,d c a,d c",
      "a,c a c d"
    ],
    "correctAnswer": 0,
    "explanation": "\ud835\udc53\u21131 = 0.2 \u00d7 4 g = 8 N \ud835\udc53\u21132 = 0.4 \u00d7 6 g = 24 N \ud835\udc53\u21133 = 0.5 \u00d7 12g = 60N Here only 4 kg will accelerate, 2 kg and 6 kg will remain at rest",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 229 90\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAABaCAIAAADINwbhAAAACXBIWXMAAA9hAAAPYQGoP6dpAAATS0lEQVR4nO2daVAURxvHTaWSL6nkQ06DWIaYYNSY2yOQqFyKQRQFRY2gchiCF+qrglEqBSgxsRQRNQIR1HiCIHJ4IgpYBEMEUQkKYhRNQA4PlCOg8/7f7bxdbc+isyvszsb+f9ia6Znteab7108/vdvT00USEjIddTG2AUJCOkjwKmRKErwKmZIEr0KmJMGrkClJpbxOnz7dV8jX19vbe+3atcauDRVJpbza29tXCFVU5ObmAllj14aKpFJev/jiC2OboApduXLFz8/P2FaoSIJXVUvwyknwqmoJXjkJXlUtwSsnwauqJXjlJHhVtQzP66VLl357ULrmUFFRwe6eOHGisrKS7tbW1mZnZzc3N9OUe/fu4SpFRUU0pby8HCklJSXyzA3Ha1tbG0pfnn7//n3cT1NTE5toYF4bGhp8fX3ZlLy8vA8++MCQNmiV4Xm9efPmSy+9lJycDGJSU1MdHByUf/fu3buzZ89mDUap/vLLL0uXLj18+DB2L1++PGXKlAsXLkyaNIlFtrS01NLScuXKlWT3zp07bm5ut27dkl/CQLzevn0bhmZmZvr7+7e0tND0v//+29PT09XVtVu3bllZWTTdwLwGBwe/++67XKK5ubkhbdCqjuUVpX3mzJmHn1NdXf3GG2/Q3Ueezyk9PZ0ajDbv4uKCjWvXrpHG7+Pjk5aWho3vvvsuKiqK/eLcuXNfe+21AwcOkN3w8HCt+Svi9b42oRGgBbS2tmL7kTmEhYXFxcVhIzIykjU0Pz8fDRob27ZtGz16NE03JK8o4qNHj8p57d69Oz7PnTt35MiR69evS5p+as+ePQUFBVo7is5Qx/JaVlb27LPPAkcrK6v169f/+eef8nM2b948a9YsbPz888/wl9zR+Pj4aEaJiYncCSyvy5cvDwoKItvPP/98fX29hYUFylPSVDc8KPtFEJyTk/Pyyy/D+5JdrbeglFeyAUbRAn7//XfcCer4+PHjjY2N5GhVVVX0gzp58iTNoX///ohasLF//347Ozv5JXDyjBkz6K7BeIXZMTExaHjt8YpCR6OSNLB++eWXCLYcHR1nzpwpr8vOEHi1tbVd3nHq27dvF42eeuopwAF24SaoV4Pc3d3h29atW+fk5KSHwSyvc+bModi98MILiPpALWn527dv56qYnIm6QGCA6ugYXs+fP48mhUAYvUZSUhIJSpT4V9Q96Vlyc3Otra3lJwQGBiLSp7sG4xWhFUYAiKt69+6NoIU9hHggICAAPons7tixA7vYWLRoUWxsrGHMA6+jRo1K6DjBcRBen3766VdeeQX3OGLECEBGLofWiBSEDdjWOtLSyb+C+yVLlpDt5557DgFrz549EaqSfOT+lWzAF8AjLFu2TGuB6MArPkHbvn37UIjw6qi/s2fP0qMP96/wXr/++iu5H7l/hQOjRUZkGF5BqptG8DFwAPPmzWOPoo0B0MWLF5NdNHoMPuAY0F3iiwYwT+roeABd7TPPPIOhwrBhw1BB8ngAPTLwfZxLoB7pyLW4uHjMmDGSpmsCgtjAvSCgwgZKFfEG+0X4frKBNmNjYzN48GCt+evAKzJCsIw2Cke4evVqBMgIDCRl/hVdw86dO7GB4JULpVGIGI1iA+Mw2skaeLylNR4wMzPDLaPgUlJSJE3fsnDhwoqKCrRMgxnWsbzidrgfm1hhVOTs7Dxx4kStA3MlampqQuWixJAVSZk/fz4cHFAhYWtNTY2HhwfCj6+//rqtrY1+EUTZ29tjYEB2EelidK71EjrwirJbsWLF1KlTIyIi1q5di7EeqUglvCJqmTx5MtqZp6cngmBJM1SEey4qKurTpw9xcmj09B4MzCsKOiQkhE1BbwA/gcgHDgOBNUy9ePEi/Cs8MfoHeAsld/34+hf8X3D16lUMcuguooI//vjjkd9if0RipZRXfB+9NsLhwsJC4N/a2npPI4VGS5of9jIzM+nvrGhwMB0c07lzrN9S4f8F4AY3TrbRS6AEDHDRfwGvHSulv7+ipz516lRGRgb5AauzvYsKecX4EkP1cePGBQUFITIzzEUFr5yU8gpMb9y4UV1d3anWUKmQV6NI8Mrpsf7fov8ddJQ1VIJXIsErJ6W8GmZ4QSV4JRK8chLzs1QtwSsnwauqJXjlJHhVtQSvnASvqpbglZNKeR0yZIidYllZWVlYWCg/3+iytrZWaPDQoUNnzpxp7NpQkVTKq046c+bMokWLjG2FDjI5g9UjwasRZHIGq0eCVyPI5AxWjwSvRpDJGaweCV6NIJMzWD0SvBpBJmewevSk89rY2Pj999/PmDEjJyeHTc/Lyxs5cmRHWKdFgle99aTzGh0dffTo0ZSUlBdffJF7StvMzKwjrNMiwaveetJ5raurIxvu7u7kcV8q8jw3WRunpqZG0jwikZWVRR9O0luCV731pPNK5ebmRp5jpqLrDyQlJTU3N8P7Tp06FeAOGjTIx8eHPIVmRIOfTAle/yeEBLt37+YSzc3NQ0ND6YI8O3bsIA9841qIIh7ncoJXvdUBvOo0lbusrCwyMnLXrl1aj5aUlGzfvl1XAx6z+q9evQoW5enwr15eXitWrCC7tbW1Dg4Oubm5Hh4eWlfyUS7Bq97SgVf69Av6zYaGhra2ttu3b4O/u3fvKkQWfaidnR1OjouLi4mJ4Y4iW1tbWz0q8nGqH+StWrWqoqLiwoULR44cYQ+RlU4GDhyYmZmJ3crKymXLlp0+fZoLG/SQ4FVv6fw8DCK5goKCtLQ0YHr+/PmffvpJOa+bNm0iS/pcv37d0tKSO0qWgjMkr/fu3VuwYIHb/4WogB4qLi4eN24c/P2ePXu8vb2xcfHixX79+g0YMKBXr16urq56XO7xDRbSOR6orq5OTU09ePAgMM3OzpavJLXiQW3bto0e8vX1BZT/XLhLF3bJtGPHjiE3BAMG9q/KBbLpMkQRERHtLeigRIJXvaUbr/CjiPbgJuFvrl27BhxzcnK4/vHIg6KLzEiat8Bt2LDhnwt36UKX/aivr1+/fr2kWbZOtbzCQmtrazS5oKAgRLGPk5XgVW/pw+v8+fMR9mVkZDg7OycnJyOWZc/hVhNHzEAPgW+y7lxdXV3Xrl1p+tatW21sbBDa9u3bt0ePHmSlLeUyueo3OYPVI914xYBp8+bN9vb2ISEh8J3h4eEpKSlkwWElunLlClmw7tChQ2Tdv6qqKvqLvaRu/9qBMjmD1SMdeG1rawNeoaGhcK6IAeBryRJaOv2elZCQEBMTs3LlShJFrFmzhl1XESMeDOCU50ZkctVvcgarR7r9nvXXX38lJSVxAQA92nFW6SaTq36TM1g90o3X1tbW9sbFHcurj4+P8pdYu7m5vf/++53xeuxOkru7+0cffaTkTE9PT25d3ydcuvFKNzh1uFkODg7KX2JdWFgYHx+v1/uvjaby8nIlp+3evbu9ldGfTKl0/oBYf4AoNze3vTdPPJkSvKpagldOgldVS/DKSfCqagleOQleVS3BKyfBa7tiX7hjLAleORmO1y1btqxbt27fvn3yQwEBAW5ubvRdeJLBeT1+/HhUVBT7bt/s7Oy33nrLkDZoleCVk57vO25tbW1sbIQHUvjj66FDh4KDgyXNwyTctOhjx46Rt5dXVlbSREPyGhMTs2rVKnm6Gt7PLXjl9GheKZFNTU15eXlwQiA1Pz8fCDY0NLCvQuZmZrHPkYK/jIwMbOzdu3f8+PFs/vb29lOnTj116hSbaDBecTv9+/fXeog8b1hQUACbyVt6S0tL09PTc3JyKioqDPP/s+CVkw68Xr58OSUlBfVXX1+PaiMvAqVHb968yc18LS8vp5n07NmzqKhI0ryhtF+/fmz+p0+fDg8Pf/XVV9kVKwzGq7e3N1pLZGTkp59+WlJSwh4ivIaEhJB3SeKop6cn7tfJySkwMJB9Z1/nSfDKSSmv+CwsLExKSiorK7t06dLu3bvJ+4spr1evXuWeLEBQSDOxsLAAl9g4fPjwJ598Ir8K96Zdg/H6+eefk/gkOjraxcWFPYR4YNq0aWilZHfXrl2zZs2SNCGNHpPI9JPglZMOvGIIsnnzZkSZ+PTz8yMTsRV2iyNHjkT8IGmeivby8tJ6DhsnGIxXXIg8ToiAxNbWlj0E/4qYmzAqad7wiJNTU1P9/f31fiOwrhK8clLKa01NDcYl6Do3bNgQGxs7duzYTZs2Kb/M0aNHycP7AQEBxNEePHgQIURVVRV5tuSwRvR8g/GKqIa8ICAxMZF7ZJc8ATF8+HAyQ+rs2bNz5sxBXI7gVacX5z6OBK+cFP0+0Nraitpat24dkEIwAO+C0ZWuM7URS8THx2dlZZFdxIUIcDGO8fDwQA/LPuYlGfb3AXQXW7du5ZZEKC4uXrhwIWJWRAuIVsn7uR0dHSdMmIBPBwcHMd4yihTx2tzcjDFHQkJCS0tL580hZKWG/ws4kcWIyHZUVJRh/k0QvHJSxCvqpr6+Hv1gZ1tDpUJeEX9jcAZq4W5JSGMACV45dcD7jjvKFFYq5NUoErxy0uH/rc42hZXglUjwyknMd1G1BK+cBK+qluCVk+BV1RK8clLKa3Z2NgbI8fHx7AyBgICA9PT06dOn+/j4YOA8ZMgQH0aurq4jRozweVDDhw+fMGECm2Jtbc2d4+Hh0bVrVy5x3Lhx7K63RnR32rRp3PnyFHkil0l7X7S1tfX09KS7uNPx48fT3S814kyl2W7cuJGUVXR0NFt0+/fvj4uL42Zc7Nq1KykpiU0JDAwcM2YMm0IzhA4ePMjVCL6ekJDAZYsLoe7YlNjYWO6cAwcOcNMn1ClFvLa0tISFhfXu3XvKlClkbsDy5cs//PDDsWPHovX7+vpOnDjRzMzMycmJ1hkcZLdu3biKHDhwoKWlpZeXFyWjZ8+eVlZW7Dnu7u6vv/766NGj2cSPP/74vffeo7sA2tzcnEIDM/AVljM7OztciEOzb9++bItCJt27d8d32dMAB8xmU97TiO5OmjQJd+rs7Ex2XVxccGm2BQ4dOrRHjx6UVwAXHh4+aNAgFA6dWbF06dK3334b5cZOt/D393/zzTe/+eYbmgILe/XqFRwcTHaRz4ABA2g+33777TvvvIPGQ8+fO3euhYXFggUL2GxRnn369MF3yS7q67PPPnNwcGDPIfaQCUwqlyJeL126hGrIy8sju3fv3h01alRycjLZLSoqGjx4cFlZGT0fDRo+hl0us62t7auvvgLlNKW2tnbYsGFwM+yFcAlciH1PC5oKfNvq1atpSmlpKS5HZntByAGlT+b7EaFu/Pz82N/zGxoa0ADYhSdgLTL57bff2Kunpqbivm7cuEF2GxsbcRfsgqHkTmEA2UUJoAOpr6+nJyxZsmTmzJnsv7W3bt1CnomJiTTl3LlzyISdGw7t3LkTbYCdlvDDDz+gBdK1H2EVSKX5XLx4EW3v5MmT9Hx4UHt7+6qqKjZbzp47d+6gfcIls+dotUe1ejSvhCEgS3br6upQLvRvVdQxuni6MCq0ePFixAlcnaEy2FUHOeaI5HWGbJE5LkFTMjMz4TvpcuwbNmyAa29ubia7ra2tcGks3JJm4hjsZ1fAxDZSkM6ehm/B4SEHsouKx22yU8vRMNDA6J1yPMEGuN6oqCg2TzQ8ZPJIqtDAEFPRBkbuAon0BI5OYj/bqn/88Uf40aamJpoitwf3a2Njw06aa88eNesRvHIMVVZWouAoZyiOyZMn0xWKsIEAQF5nrG+WNA+fICLkXgHA1ZmkjWm4Ouq20R7QKtDb0qPwQPBkLNySZnFPzvfDy8LXskuA4aLwxywfcDb4Fpn2Su8U1U8ahpwneHf4eK6vAF5A4eFUAXdAD/TZu2D9qCSjk7NfXg5a7ZGXg1Z71K+H8RoaGsp2rIjHcc9kFjaKCR0N+8QVukX4wrS0NDYH1Bn4hnugKeiM0CWxLwOS15kk86P379//j0bkbwsgy/VrFRUVOJ9z2Hv37uX6awRqj+yvicuhAQZOnj17Nr1TOU9a+1OMexAKP5wqZIUon4ZVkrZenqNTv/5dHrdotcckpJ1XedSYn5+P3oR0HKSYtmzZQo8CYpQR90wLign1QcNBSVPcqHsWF1L9qF32i6wflTR0snEkIAaaNCCRNBGLo6Mj57BhPEaHtL8md7RmzRr2HBKX49ZoCudyOCAURo1oe7NmzXo4VfKs5L08S6fe/TsXt7Rnj6lIC6/yqBE9CxooWZcYn1wxwauhoNmnBSVNZMkVE3DhQoXq6mquzjg/Kv2fTjKlWpKNeCRNxILhOTe2Q7eAzuEhdyTJ4nIoKCiIdTnXrl1j7/TEiRMcTxs3buT6U1waUQ17m1wm7WWFroD1o2hdLJ01NTVc/w7XIO/fOXtgDBe3tGePCUkLr4WFhdz8o3nz5tExDUbNnDtB1yl/2Z98Mpc8Bd+iM/SI0DtzvjYiIoKlE4M5dmyHxhMWFsbNbYDr5SazwmtyoYKkeX8G95gAy66kiX/YR9CQLbfwLdcAyB1xrzbgMmkvK7DLdjvou9l8kAP34yiOsv27VntgDPvGm4fYY0JS6f9bQkJaJXgVMiUJXoVMSYJXIVOS4FXIlCR4FTIl/ReI4Oy/le+rCQAAAABJRU5ErkJggg==\" width=\"229\" height=\"90\"/></svg>"
  },
  {
    "id": "lom-qb-298",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "For the figure shown, both the pulley are massless and frictionless. A force \ud835\udc39 (of any possible magnitude) is applied in horizontal direction. There is no friction between \ud835\udc40 and ground \ud835\udc5a1 and \ud835\udc5a2 are the coefficients of friction as shown between the blocks. Column I gives the different relations between \ud835\udc5a1 and\ud835\udc5a2, and Column II is regarding the motion of\ud835\udc40. Match the columns: Column-I Column- II (A) If \ud835\udf071 = \ud835\udf072 = 0 (p) May accelerate towards right (B) If \ud835\udf071 = \ud835\udf072 \u22600 (q) May accelerate towards right (C) If \ud835\udf071 > \ud835\udf072 (r) Does not accelerate (D) If \ud835\udf071 < \ud835\udf072 (s) May or may not accelerate CODES : A B C D",
    "options": [
      "A,b c,d c,d d",
      "d,c a,c c a",
      "a,d b,d a, b",
      "c c b,d a,d"
    ],
    "correctAnswer": 1,
    "explanation": "1. If \ud835\udc5a1 = \ud835\udc5a2 = 0, then there is no force on \ud835\udc40 in horizontal direction. So \ud835\udc40 does not accelerate Hence (i)-(c) 2. If \ud835\udc5a1 = \ud835\udc5a2 \u22600 \ud835\udc531 < \ud835\udf071 \ud835\udc5ag, \ud835\udc532 < \ud835\udf072\ud835\udc5ag \ud835\udc531 And \ud835\udc532 will be of same magnitude at any time whether the blocks slip on larger block or not, so net force on \ud835\udc40 is zero. Hence, \ud835\udc40 does not accelerate. So (ii)-(c) 3. \ud835\udc5a1 > \ud835\udc5a2, here \ud835\udc531 > \ud835\udc532, hence (iii)-(b, d) 4. \ud835\udc5a1 < \ud835\udc5a2, here \ud835\udc531 < \ud835\udc532, hence (iv)-(a, d)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 160 105\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"160\" height=\"105\"/></svg>"
  },
  {
    "id": "lom-qb-299",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "When the system shown in figure is released, \ud835\udc34 accelerates downwards Column-I Column- II (A) Acceleration of \ud835\udc35 (p) Towards left (B) Acceleration of \ud835\udc36 w.r.t \ud835\udc35 (q) Towards right (C) Acceleration of \ud835\udc34 w.r.t. \ud835\udc36 (r) At some angle \ud835\udf03 with horizontal (0 < \ud835\udf03< 90\u00b0) (D) Acceleration of \ud835\udc35 w.r.t. \ud835\udc34 (s) At some angle \ud835\udf03 with vertical (0 < \ud835\udf03< 90\u00b0) CODES : A B C D",
    "options": [
      "A,b c d a",
      "b a c,d c,d",
      "a,b c a,d a",
      "c,d a c b This section contain(s) 52 paragraph(s) and based upon each paragraph, multiple choice questions have to be answered. Each question has atleast 4 choices (a), (b), (c) and ( out of which ONLY ONE is correct."
    ],
    "correctAnswer": 2,
    "explanation": "The direction of acceleration of various blocks are as shown Acceleration of \ud835\udc35 is towards right, hence (i)\u2192\ud835\udc4f. Acceleration of \ud835\udc36 w.r.t. \ud835\udc35 is towards left Hence (ii)\u2192\ud835\udc4e Acceleration of \ud835\udc34 w.r.t. \ud835\udc36: \ud835\udc4e\u20d7\ud835\udc34/\ud835\udc36= \ud835\udc4e\u20d7\ud835\udc34\u2212\ud835\udc4e\u20d7\ud835\udc36= \u2212\ud835\udc4e\u0302\ud835\udc57\u2212 (\u2212\ud835\udc4e\ud835\udc56\u0302) = \ud835\udc4e\ud835\udc56\u0302 \u2212\ud835\udc4e\ud835\udc57\u0302 as shown below Hence (iii)\u2192(c, d), Similarly (iv)\u2192(c, d)",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 132 59\" class=\"max-w-md w-full h-auto mx-auto my-2\" xmlns=\"http://www.w3.org/2000/svg\"><image href=\"data:image/png;base64,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\" width=\"132\" height=\"59\"/></svg>"
  },
  {
    "id": "lom-qb-300",
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "Laws of Motion",
    "subtopic": "Newton's Laws & Friction",
    "difficulty": "Hard",
    "questionText": "The minimum force required just to slide the block on the horizontal surface is",
    "options": [
      "57.7 N",
      "100 N",
      "100 kg",
      "57.7 kg"
    ],
    "correctAnswer": 3,
    "explanation": "Minimum force required just to slide the block = force of static friction \ud835\udc53= \ud835\udf07\ud835\udc45= \ud835\udf07 \ud835\udc5ag = 0.577 \u00d7 10 \u00d7 10 = 57.7 N",
    "tags": [
      "Laws of Motion",
      "NTA Question Bank",
      "NEET 2026"
    ]
  }
];

import { Question } from '../types';

/**
 * ALLEN PRE-MEDICAL: NURTURE COURSE
 * KINEMATICS - EXERCISE-II (PYQs AIPMT/NEET: Q1 to Q35)
 * Authentic previous year questions with official keys.
 */
export const ALLEN_KINEMATICS_EXERCISE_2_QUESTIONS: Question[] = [
  {
    "id": "allen-kinematics-ex2-q01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is fired from the surface of the earth with a velocity of 5 m/s and angle \u03b8 with the horizontal. Another projectile fired from another planet with a velocity of 3 m/s at the same angle follows a trajectory which is identical with the trajectory of the projectile fired from the earth. The value of the acceleration due to gravity on the planet is (in m/s\u00b2) is: (given g = 9.8 m/s\u00b2)",
    "question": "A projectile is fired from the surface of the earth with a velocity of 5 m/s and angle \u03b8 with the horizontal. Another projectile fired from another planet with a velocity of 3 m/s at the same angle follows a trajectory which is identical with the trajectory of the projectile fired from the earth. The value of the acceleration due to gravity on the planet is (in m/s\u00b2) is: (given g = 9.8 m/s\u00b2)",
    "options": [
      "3.5",
      "5.9",
      "16.3",
      "110.8"
    ],
    "correctAnswer": 0,
    "explanation": "Trajectory equation is y = x tan \u03b8 - (g x\u00b2) / (2 u\u00b2 cos\u00b2 \u03b8). For identical trajectories with the same angle \u03b8, g / u\u00b2 must be identical: g_earth / u_earth\u00b2 = g_planet / u_planet\u00b2 => 9.8 / 5\u00b2 = g_planet / 3\u00b2 => g_planet = 9.8 \u00d7 (9 / 25) = 3.528 \u2248 3.5 m/s\u00b2.",
    "pyqYear": 2014,
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Projectile Motion",
      "KN0231",
      "NEET/AIPMT 2014",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Position & Vectors",
    "subtopic": "Position & Vectors",
    "difficulty": "Medium",
    "questionText": "A particle is moving such that its position coordinates (x, y) are (2m, 3m) at time t = 0, (6m, 7m) at time t = 2 s and (13m, 14m) at time t = 5s. Average velocity vector (Vav) from t = 0 to t = 5 s is :",
    "question": "A particle is moving such that its position coordinates (x, y) are (2m, 3m) at time t = 0, (6m, 7m) at time t = 2 s and (13m, 14m) at time t = 5s. Average velocity vector (Vav) from t = 0 to t = 5 s is :",
    "options": [
      "(1/5)(13\u00ee + 14\u0135)",
      "(7/3)(\u00ee + \u0135)",
      "2(\u00ee + \u0135)",
      "(11/5)(\u00ee + \u0135)"
    ],
    "correctAnswer": 3,
    "explanation": "Displacement vector from t = 0 to t = 5 s: \u0394r = r(5) - r(0) = (13 - 2)\u00ee + (14 - 3)\u0135 = 11\u00ee + 11\u0135 = 11(\u00ee + \u0135). Average velocity Vav = \u0394r / \u0394t = (11 / 5)(\u00ee + \u0135).",
    "pyqYear": 2014,
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Position & Vectors",
      "KN0232",
      "NEET/AIPMT 2014",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q03",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Hard",
    "questionText": "A particle of unit mass undergoes one-dimensional motion such that its velocity varies according to v(x) = \u03b2 x\u207b\u00b2\u207f where \u03b2 and n are constants and x is the position of the particle. The acceleration of the particle as a function of x, is given by :",
    "question": "A particle of unit mass undergoes one-dimensional motion such that its velocity varies according to v(x) = \u03b2 x\u207b\u00b2\u207f where \u03b2 and n are constants and x is the position of the particle. The acceleration of the particle as a function of x, is given by :",
    "options": [
      "\u20132n \u03b2\u00b2 x\u207b\u2074\u207f\u207b\u00b9",
      "\u20132 \u03b2\u00b2 x\u207b\u00b2\u207f\u207a\u00b9",
      "\u20132n \u03b2\u00b2 e\u207b\u2074\u207f\u207a\u00b9",
      "\u20132n \u03b2\u00b2 x\u207b\u00b2\u207f\u207b\u00b9"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration a = v (dv/dx). Given v = \u03b2 x\u207b\u00b2\u207f => dv/dx = -2n \u03b2 x\u207b\u00b2\u207f\u207b\u00b9. Therefore, a = (\u03b2 x\u207b\u00b2\u207f) \u00d7 (-2n \u03b2 x\u207b\u00b2\u207f\u207b\u00b9) = -2n \u03b2\u00b2 x\u207b\u2074\u207f\u207b\u00b9.",
    "pyqYear": 2015,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "KN0233",
      "NEET/AIPMT 2015",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q04",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Hard",
    "questionText": "A ship A is moving Westwards with a speed of 10 km/h and a ship B 100 km South of A, is moving Northwards with a speed of 10 km/h. The time after which the distance between them becomes shortest, is :-",
    "question": "A ship A is moving Westwards with a speed of 10 km/h and a ship B 100 km South of A, is moving Northwards with a speed of 10 km/h. The time after which the distance between them becomes shortest, is :-",
    "options": [
      "5 h",
      "5\u221a2 h",
      "10\u221a2 h",
      "0 h"
    ],
    "correctAnswer": 0,
    "explanation": "Let ship A start at origin (0, 0) moving with vA = -10 \u00ee. Position of A at time t: rA = -10t \u00ee. Ship B starts at (0, -100) moving with vB = 10 \u0135. Position of B at time t: rB = (-100 + 10t) \u0135. Distance squared D\u00b2 = (-10t)\u00b2 + (10t - 100)\u00b2 = 100t\u00b2 + 100t\u00b2 - 2000t + 10000 = 200t\u00b2 - 2000t + 10000. Differentiating and setting to 0: 400t - 2000 = 0 => t = 2000 / 400 = 5 h.",
    "pyqYear": 2015,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion",
      "KN0234",
      "NEET/AIPMT 2015",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Hard",
    "questionText": "Two particles A and B, move with constant velocities v1 and v2. At the initial moment their position vectors are r1 and r2 respectively. The condition for particle A and B for their collision is:-",
    "question": "Two particles A and B, move with constant velocities v1 and v2. At the initial moment their position vectors are r1 and r2 respectively. The condition for particle A and B for their collision is:-",
    "options": [
      "r1 - r2 = v1 - v2",
      "(r1 - r2) / |r1 - r2| = (v2 - v1) / |v2 - v1|",
      "r1 \u00b7 v1 = r2 \u00b7 v2",
      "r1 \u00d7 v1 = r2 \u00d7 v2"
    ],
    "correctAnswer": 1,
    "explanation": "For collision at time t: r1 + v1 t = r2 + v2 t => r1 - r2 = (v2 - v1) t. Since t is a positive scalar, the unit vector along (r1 - r2) must equal the unit vector along (v2 - v1): (r1 - r2) / |r1 - r2| = (v2 - v1) / |v2 - v1|.",
    "pyqYear": 2015,
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Relative Motion",
      "KN0235",
      "NEET/AIPMT 2015",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q06",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Easy",
    "questionText": "If the velocity of a particle is v = At + Bt\u00b2, where A and B are constants, then the distance travelled by it between 1s and 2s is :-",
    "question": "If the velocity of a particle is v = At + Bt\u00b2, where A and B are constants, then the distance travelled by it between 1s and 2s is :-",
    "options": [
      "3A/2 + 4B",
      "3A + 7B",
      "(3/2)A + (7/3)B",
      "A/2 + B/3"
    ],
    "correctAnswer": 2,
    "explanation": "s = \u222b\u2081\u00b2 (At + Bt\u00b2) dt = [ (A/2) t\u00b2 + (B/3) t\u00b3 ]\u2081\u00b2 = (A/2)(4 - 1) + (B/3)(8 - 1) = (3/2) A + (7/3) B.",
    "pyqYear": 2016,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "KN0236",
      "NEET/AIPMT 2016",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q07",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Medium",
    "questionText": "Two cars P and Q start from a point at the same time in a straight line and their positions are represented by xP(t) = at + bt\u00b2 and xQ(t) = ft \u2013 t\u00b2. At what time do the cars have the same velocity?",
    "question": "Two cars P and Q start from a point at the same time in a straight line and their positions are represented by xP(t) = at + bt\u00b2 and xQ(t) = ft \u2013 t\u00b2. At what time do the cars have the same velocity?",
    "options": [
      "(a + f) / (2(1 + b))",
      "(f - a) / (2(1 + b))",
      "(a - f) / (1 + b)",
      "(a + f) / (2(b - 1))"
    ],
    "correctAnswer": 1,
    "explanation": "vP = dxP/dt = a + 2bt. vQ = dxQ/dt = f - 2t. Equating velocities: a + 2bt = f - 2t => 2bt + 2t = f - a => 2t(1 + b) = f - a => t = (f - a) / (2(1 + b)).",
    "pyqYear": 2016,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "KN0237",
      "NEET/AIPMT 2016",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q08",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "Preeti reached the metro station and found that the escalator was not working. She walked up the stationary escalator in time t1. On other days, if she remains stationary on the moving escalator, then the escalator takes her up in time t2. The time taken by her to walk up on the moving escalator will be :",
    "question": "Preeti reached the metro station and found that the escalator was not working. She walked up the stationary escalator in time t1. On other days, if she remains stationary on the moving escalator, then the escalator takes her up in time t2. The time taken by her to walk up on the moving escalator will be :",
    "options": [
      "(t1 t2) / (t2 - t1)",
      "(t1 t2) / (t2 + t1)",
      "t1 \u2013 t2",
      "(t1 + t2) / 2"
    ],
    "correctAnswer": 1,
    "explanation": "Let height be L. Walking speed v1 = L / t1. Escalator speed v2 = L / t2. Walking on moving escalator: v = v1 + v2 = L / t => L/t = L/t1 + L/t2 => 1/t = (t1 + t2) / (t1 t2) => t = (t1 t2) / (t1 + t2).",
    "pyqYear": 2017,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion",
      "KN0238",
      "NEET/AIPMT 2017",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q09",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Easy",
    "questionText": "The x and y coordinates of the particle at any time are x = 5t \u2013 2t\u00b2 and y = 10t respectively, where x and y are in meters and t in seconds. The acceleration of the particle at t = 2s is :-",
    "question": "The x and y coordinates of the particle at any time are x = 5t \u2013 2t\u00b2 and y = 10t respectively, where x and y are in meters and t in seconds. The acceleration of the particle at t = 2s is :-",
    "options": [
      "5 m/s\u00b2",
      "\u2013 4 m/s\u00b2",
      "\u2013 8 m/s\u00b2",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "vx = dx/dt = 5 - 4t => ax = dvx/dt = -4 m/s\u00b2. vy = dy/dt = 10 => ay = dvy/dt = 0. Total acceleration a = ax \u00ee + ay \u0135 = -4 \u00ee m/s\u00b2. Its value at t = 2 s is -4 m/s\u00b2.",
    "pyqYear": 2017,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "KN0239",
      "NEET/AIPMT 2017",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q10",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion in 2D",
    "subtopic": "Relative Motion in 2D",
    "difficulty": "Medium",
    "questionText": "The speed of a swimmer in still water is 20 m/s. The speed of river water is 10 m/s and is flowing due east. If he is standing on the south bank and wishes to cross the river along the shortest path, the angle at which he should make his strokes w.r.t. north is given by :",
    "question": "The speed of a swimmer in still water is 20 m/s. The speed of river water is 10 m/s and is flowing due east. If he is standing on the south bank and wishes to cross the river along the shortest path, the angle at which he should make his strokes w.r.t. north is given by :",
    "options": [
      "30\u00b0 west",
      "0\u00b0",
      "60\u00b0 west",
      "45\u00b0 west"
    ],
    "correctAnswer": 0,
    "explanation": "For shortest path (directly across to north), the eastward river velocity must be canceled by the westward component of the swimmer's velocity: v_swimmer sin \u03b8 = v_river => 20 sin \u03b8 = 10 => sin \u03b8 = 1/2 => \u03b8 = 30\u00b0 West of North.",
    "pyqYear": 2019,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion in 2D",
      "KN0299",
      "NEET/AIPMT 2019",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q11",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Motion on Incline",
    "subtopic": "Motion on Incline",
    "difficulty": "Medium",
    "questionText": "When an object is shot from the bottom of a long smooth inclined plane kept at an angle 60\u00b0 with horizontal, it can travel a distance x1 along the plane. But when the inclination is decreased to 30\u00b0 and the same object is shot with the same velocity, it can travel x2 distance. Then x1 : x2 will be :",
    "question": "When an object is shot from the bottom of a long smooth inclined plane kept at an angle 60\u00b0 with horizontal, it can travel a distance x1 along the plane. But when the inclination is decreased to 30\u00b0 and the same object is shot with the same velocity, it can travel x2 distance. Then x1 : x2 will be :",
    "options": [
      "1 : \u221a2",
      "\u221a2 : 1",
      "1 : \u221a3",
      "1 : 2\u221a3"
    ],
    "correctAnswer": 2,
    "explanation": "Retardation along inclined plane is a = g sin \u03b8. Distance travelled before stopping v\u00b2 = u\u00b2 - 2as => x = u\u00b2 / (2g sin \u03b8) \u221d 1 / sin \u03b8. x1 / x2 = sin 30\u00b0 / sin 60\u00b0 = (1/2) / (\u221a3/2) = 1 / \u221a3 = 1 : \u221a3.",
    "pyqYear": 2019,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Motion on Incline",
      "KN0300",
      "NEET/AIPMT 2019",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q12",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "A person standing on the floor of an elevator drops a coin. The coin reaches the floor in time t1 if the elevator is at rest and in time t2 if the elevator is moving uniformly. Then :-",
    "question": "A person standing on the floor of an elevator drops a coin. The coin reaches the floor in time t1 if the elevator is at rest and in time t2 if the elevator is moving uniformly. Then :-",
    "options": [
      "t1 < t2 or t1 > t2 depending upon whether the lift is going up or down",
      "t1 < t2",
      "t1 > t2",
      "t1 = t2"
    ],
    "correctAnswer": 3,
    "explanation": "When moving uniformly, the acceleration of the elevator is zero (a = 0). The frame remains inertial, so the effective acceleration inside the lift is simply g, exactly the same as when at rest. Hence t1 = t2 = \u221a(2h/g).",
    "pyqYear": 2019,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion",
      "KN0301",
      "NEET/AIPMT 2019",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q13",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion in 2D",
    "subtopic": "Relative Motion in 2D",
    "difficulty": "Hard",
    "questionText": "Two bullets are fired horizontally and simultaneously towards each other from roof tops of two buildings 100 m apart and of same height of 200m with the same velocity of 25 m/s. When and where will the two bullets collide. (g = 10 m/s\u00b2)",
    "question": "Two bullets are fired horizontally and simultaneously towards each other from roof tops of two buildings 100 m apart and of same height of 200m with the same velocity of 25 m/s. When and where will the two bullets collide. (g = 10 m/s\u00b2)",
    "options": [
      "after 2s at a height 180 m",
      "after 2s at a height of 20 m",
      "after 4s at a height of 120 m",
      "they will not collide"
    ],
    "correctAnswer": 0,
    "explanation": "Relative horizontal velocity = 25 + 25 = 50 m/s. Relative acceleration in vertical direction = g - g = 0. Time of collision t = 100 / 50 = 2 s. In 2 s, vertical distance fallen by both bullets = (1/2)gt\u00b2 = (1/2)(10)(2\u00b2) = 20 m. Height above ground = 200 - 20 = 180 m.",
    "pyqYear": 2019,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion in 2D",
      "KN0302",
      "NEET/AIPMT 2019",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q14",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Speed & Velocity",
    "subtopic": "Speed & Velocity",
    "difficulty": "Easy",
    "questionText": "A person travelling in a straight line moves with a constant velocity v1 for certain distance 'x' and with a constant velocity v2 for next equal distance. The average velocity v is given by the relation :",
    "question": "A person travelling in a straight line moves with a constant velocity v1 for certain distance 'x' and with a constant velocity v2 for next equal distance. The average velocity v is given by the relation :",
    "options": [
      "1/v = 1/v1 + 1/v2",
      "2/v = 1/v1 + 1/v2",
      "v/2 = (v1 + v2) / 2",
      "v = \u221a(v1 v2)"
    ],
    "correctAnswer": 1,
    "explanation": "Total distance = 2x. Total time = x/v1 + x/v2. Average velocity v = 2x / (x/v1 + x/v2) = 2 / (1/v1 + 1/v2) => 2/v = 1/v1 + 1/v2.",
    "pyqYear": 2019,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Speed & Velocity",
      "KN0303",
      "NEET/AIPMT 2019",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q15",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Easy",
    "questionText": "A ball is thrown vertically downward with a velocity of 20 m/s from the top of a tower. It hits the ground after some time with a velocity of 80 m/s. The height of the tower is : (g = 10 m/s\u00b2)",
    "question": "A ball is thrown vertically downward with a velocity of 20 m/s from the top of a tower. It hits the ground after some time with a velocity of 80 m/s. The height of the tower is : (g = 10 m/s\u00b2)",
    "options": [
      "300 m",
      "360 m",
      "340 m",
      "320 m"
    ],
    "correctAnswer": 0,
    "explanation": "Using v\u00b2 = u\u00b2 + 2gh: 80\u00b2 = 20\u00b2 + 2(10)h => 6400 = 400 + 20h => 20h = 6000 => h = 300 m.",
    "pyqYear": 2020,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "KN0304",
      "NEET/AIPMT 2020",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q16",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A person sitting in the ground floor of a building notices through the window, of height 1.5 m, a ball dropped from the roof of the building crosses the window in 0.1 s. What is the velocity of the ball when it is at the topmost point of the window ? (g = 10 m/s\u00b2)",
    "question": "A person sitting in the ground floor of a building notices through the window, of height 1.5 m, a ball dropped from the roof of the building crosses the window in 0.1 s. What is the velocity of the ball when it is at the topmost point of the window ? (g = 10 m/s\u00b2)",
    "options": [
      "15.5 m/s",
      "14.5 m/s",
      "4.5 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "s = ut + (1/2)gt\u00b2 => 1.5 = u(0.1) + (1/2)(10)(0.1\u00b2) => 1.5 = 0.1u + 0.05 => 0.1u = 1.45 => u = 14.5 m/s.",
    "pyqYear": 2020,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "KN0305",
      "NEET/AIPMT 2020",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q17",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Constant Acceleration",
    "subtopic": "Constant Acceleration",
    "difficulty": "Medium",
    "questionText": "A small block slides down on a smooth inclined plane, starting from rest at time t = 0. Let Sn be the distance travelled by the block in the interval t = n \u2013 1 to t = n. Then, the ratio Sn / Sn+1 is :",
    "question": "A small block slides down on a smooth inclined plane, starting from rest at time t = 0. Let Sn be the distance travelled by the block in the interval t = n \u2013 1 to t = n. Then, the ratio Sn / Sn+1 is :",
    "options": [
      "(2n - 1) / 2n",
      "(2n - 1) / (2n + 1)",
      "(2n + 1) / (2n - 1)",
      "2n / (2n - 1)"
    ],
    "correctAnswer": 1,
    "explanation": "Distance in nth second: Sn = (a/2)(2n - 1). Distance in (n+1)th second: Sn+1 = (a/2)(2(n+1) - 1) = (a/2)(2n + 1). Ratio Sn / Sn+1 = (2n - 1) / (2n + 1).",
    "pyqYear": 2021,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Constant Acceleration",
      "KN0306",
      "NEET/AIPMT 2021",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q18",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A car starts from rest and accelerates at 5 m/s\u00b2. At t = 4 s, a ball is dropped out of a window by a person sitting in the car. What is the velocity and acceleration of the ball at t = 6 s ? (Take g = 10 m/s\u00b2)",
    "question": "A car starts from rest and accelerates at 5 m/s\u00b2. At t = 4 s, a ball is dropped out of a window by a person sitting in the car. What is the velocity and acceleration of the ball at t = 6 s ? (Take g = 10 m/s\u00b2)",
    "options": [
      "20 m/s, 5 m/s\u00b2",
      "20 m/s, 0",
      "20\u221a2 m/s, 0",
      "20\u221a2 m/s, 10 m/s\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "At t = 4 s, horizontal velocity vx = at = 5 \u00d7 4 = 20 m/s. Once dropped, horizontal acceleration is 0, so vx remains 20 m/s. At t = 6 s (time in air t' = 2 s), vertical velocity vy = gt' = 10 \u00d7 2 = 20 m/s. Resultant velocity v = \u221a(vx\u00b2 + vy\u00b2) = \u221a(20\u00b2 + 20\u00b2) = 20\u221a2 m/s. Acceleration in air is purely due to gravity: a = g = 10 m/s\u00b2.",
    "pyqYear": 2021,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "KN0307",
      "NEET/AIPMT 2021",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A particle moving in a circle of radius R with a uniform speed takes a time T to complete one revolution. If this particle were projected with the same speed at an angle '\u03b8' to the horizontal, the maximum height attained by it equals 4R. The angle of projection, \u03b8, is then given by :",
    "question": "A particle moving in a circle of radius R with a uniform speed takes a time T to complete one revolution. If this particle were projected with the same speed at an angle '\u03b8' to the horizontal, the maximum height attained by it equals 4R. The angle of projection, \u03b8, is then given by :",
    "options": [
      "\u03b8 = cos\u207b\u00b9 [ (gT\u00b2 / (\u03c0\u00b2R))^(1/2) ]",
      "\u03b8 = cos\u207b\u00b9 [ (\u03c0\u00b2R / (gT\u00b2))^(1/2) ]",
      "\u03b8 = sin\u207b\u00b9 [ (\u03c0\u00b2R / (gT\u00b2))^(1/2) ]",
      "\u03b8 = sin\u207b\u00b9 [ (2gT\u00b2 / (\u03c0\u00b2R))^(1/2) ]"
    ],
    "correctAnswer": 3,
    "explanation": "Speed v = 2\u03c0R / T. Maximum height H = v\u00b2 sin\u00b2 \u03b8 / (2g) = 4R => sin\u00b2 \u03b8 = 8gR / v\u00b2 = 8gR / ((4\u03c0\u00b2R\u00b2) / T\u00b2) = (2g T\u00b2) / (\u03c0\u00b2 R) => sin \u03b8 = [ (2gT\u00b2 / (\u03c0\u00b2R)) ]^(1/2) => \u03b8 = sin\u207b\u00b9 [ (2gT\u00b2 / (\u03c0\u00b2R))^(1/2) ].",
    "pyqYear": 2021,
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Projectile Motion",
      "KN0308",
      "NEET/AIPMT 2021",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q20",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Hard",
    "questionText": "A particle starts from origin with zero initial velocity along x-axis. If velocity and displacement are related as v = a x\u207b\u00b2, where a is constant. The displacement of particle after time t is :",
    "question": "A particle starts from origin with zero initial velocity along x-axis. If velocity and displacement are related as v = a x\u207b\u00b2, where a is constant. The displacement of particle after time t is :",
    "options": [
      "(at)^(1/2)",
      "(3at)^(1/3)",
      "(2at)^(1/2)",
      "(2at)^(1/3)"
    ],
    "correctAnswer": 1,
    "explanation": "v = dx/dt = a x\u207b\u00b2 => x\u00b2 dx = a dt. Integrating both sides with x=0 at t=0: \u222b\u2080\u02e3 x\u00b2 dx = \u222b\u2080\u1d57 a dt => x\u00b3 / 3 = at => x\u00b3 = 3at => x = (3at)^(1/3).",
    "pyqYear": 2021,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "KN0309",
      "NEET/AIPMT 2021",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q21",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile from Height",
    "subtopic": "Projectile from Height",
    "difficulty": "Medium",
    "questionText": "If ball is thrown from some height at an angle with horizontal, for maximum horizontal range, the angle of projection should be :",
    "question": "If ball is thrown from some height at an angle with horizontal, for maximum horizontal range, the angle of projection should be :",
    "options": [
      "Zero",
      "45\u00b0",
      "> 45\u00b0",
      "< 45\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "For projection from an elevated height above ground level, the maximum range is attained at an angle \u03b8 = (1/2) cos\u207b\u00b9(gh / (u\u00b2 + gh)) < 45\u00b0.",
    "pyqYear": 2021,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile from Height",
      "KN0310",
      "NEET/AIPMT 2021",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q22",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Graphical Analysis",
    "subtopic": "Graphical Analysis",
    "difficulty": "Easy",
    "questionText": "The displacement-time graphs of two moving particles make angles of 30\u00b0 and 45\u00b0 with the x-axis as shown in the figure. The ratio of their respective velocity is :",
    "question": "The displacement-time graphs of two moving particles make angles of 30\u00b0 and 45\u00b0 with the x-axis as shown in the figure. The ratio of their respective velocity is :",
    "options": [
      "1 : 1",
      "1 : 2",
      "1 : \u221a3",
      "\u221a3 : 1"
    ],
    "correctAnswer": 2,
    "explanation": "Velocity is the slope of the displacement-time graph: v1 / v2 = tan 30\u00b0 / tan 45\u00b0 = (1 / \u221a3) / 1 = 1 : \u221a3.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Graphical Analysis",
      "KN0311",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 200 130\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"30\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"100\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"100\" x2=\"160\" y2=\"25\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"30\" font-size=\"9\" fill=\"#dc2626\" font-weight=\"bold\">45\u00b0</text>\n  <line x1=\"30\" y1=\"100\" x2=\"160\" y2=\"60\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"65\" font-size=\"9\" fill=\"#2563eb\" font-weight=\"bold\">30\u00b0</text>\n  <text x=\"15\" y=\"20\" font-size=\"9\">s</text><text x=\"175\" y=\"112\" font-size=\"9\">t</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex2-q23",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Easy",
    "questionText": "The ratio of the distances travelled by a freely falling body in the 1st, 2nd, 3rd and 4th second :",
    "question": "The ratio of the distances travelled by a freely falling body in the 1st, 2nd, 3rd and 4th second :",
    "options": [
      "1 : 4 : 9 : 16",
      "1 : 3 : 5 : 7",
      "1 : 1 : 1 : 1",
      "1 : 2 : 3 : 4"
    ],
    "correctAnswer": 1,
    "explanation": "Galileo's law of odd numbers for free fall from rest: sn = (g/2)(2n - 1). The ratio for n = 1, 2, 3, 4 is 1 : 3 : 5 : 7.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "KN0312",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q24",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A ball is projected with a velocity, 10 ms\u20131, at an angle of 60\u00b0 with the vertical direction. Its speed at the highest point of its trajectory will be:",
    "question": "A ball is projected with a velocity, 10 ms\u20131, at an angle of 60\u00b0 with the vertical direction. Its speed at the highest point of its trajectory will be:",
    "options": [
      "5\u221a3 ms\u207b\u00b9",
      "5 ms\u207b\u00b9",
      "10 ms\u207b\u00b9",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Angle with vertical = 60\u00b0 => Angle with horizontal \u03b8 = 90\u00b0 - 60\u00b0 = 30\u00b0. At highest point, speed is purely horizontal: vx = u cos 30\u00b0 = 10 \u00d7 (\u221a3 / 2) = 5\u221a3 ms\u207b\u00b9.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "KN0313",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q25",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Easy",
    "questionText": "A stone is thrown vertically downward with an initial velocity of 40 m/s from the top of a building. If it reaches the ground with velocity 60 m/s, then the height of the building is: (Take g = 10 m/s\u00b2)",
    "question": "A stone is thrown vertically downward with an initial velocity of 40 m/s from the top of a building. If it reaches the ground with velocity 60 m/s, then the height of the building is: (Take g = 10 m/s\u00b2)",
    "options": [
      "140 m",
      "80 m",
      "100 m",
      "120 m"
    ],
    "correctAnswer": 2,
    "explanation": "Using v\u00b2 = u\u00b2 + 2gh: 60\u00b2 = 40\u00b2 + 2(10)h => 3600 = 1600 + 20h => 20h = 2000 => h = 100 m.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "KN0314",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q26",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion in 2D",
    "subtopic": "Relative Motion in 2D",
    "difficulty": "Medium",
    "questionText": "Rain is falling vertically downward with a speed of 35 m/s. Wind starts blowing after some time with a speed of 12 m/s in East to West direction. The direction in which a boy standing at the place should hold his umbrella is:",
    "question": "Rain is falling vertically downward with a speed of 35 m/s. Wind starts blowing after some time with a speed of 12 m/s in East to West direction. The direction in which a boy standing at the place should hold his umbrella is:",
    "options": [
      "tan\u207b\u00b9(12/37) w.r.t. wind",
      "tan\u207b\u00b9(12/35) w.r.t. rain",
      "tan\u207b\u00b9(12/35) w.r.t. wind",
      "tan\u207b\u00b9(12/37) w.r.t. rain"
    ],
    "correctAnswer": 1,
    "explanation": "Rain velocity v_rain = -35 \u0135 (downward). Wind velocity v_wind = -12 \u00ee (East to West). Net velocity of rain v = -12 \u00ee - 35 \u0135. Angle with the vertical (rain direction) is tan \u03b8 = |v_wind| / |v_rain| = 12 / 35 => \u03b8 = tan\u207b\u00b9(12/35) w.r.t. rain.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion in 2D",
      "KN0315",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q27",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Graphical Analysis",
    "subtopic": "Graphical Analysis",
    "difficulty": "Easy",
    "questionText": "The figure given below shows the displacement and time, (x-t) graph of particle moving along a straight line. The correct statement, about the motion of the particle is:",
    "question": "The figure given below shows the displacement and time, (x-t) graph of particle moving along a straight line. The correct statement, about the motion of the particle is:",
    "options": [
      "The particle is accelerated throughout its motion.",
      "The particle is accelerated continuously for time t0 then moves with constant velocity.",
      "The particle is at rest.",
      "The particle moves at constant velocity up to a time t0 and then stops."
    ],
    "correctAnswer": 3,
    "explanation": "From t = 0 to t0, x-t is a straight line with constant positive slope, meaning constant velocity. For t > t0, position x remains constant (horizontal line, slope = 0), meaning the particle is at rest (stops).",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Graphical Analysis",
      "KN0316",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 200 120\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"30\" y1=\"95\" x2=\"180\" y2=\"95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"15\" x2=\"30\" y2=\"95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"95\" x2=\"100\" y2=\"35\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <line x1=\"100\" y1=\"35\" x2=\"170\" y2=\"35\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"95\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/>\n  <text x=\"95\" y=\"110\" font-size=\"10\" font-weight=\"bold\">t0</text>\n  <text x=\"15\" y=\"25\" font-size=\"9\">x</text><text x=\"175\" y=\"105\" font-size=\"9\">t</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex2-q28",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A cricket ball is thrown by a player at a speed of 20 m/s in a direction 30\u00b0 above the horizontal. The maximum height attained by the ball during its motion is : (g = 10 m/s\u00b2)",
    "question": "A cricket ball is thrown by a player at a speed of 20 m/s in a direction 30\u00b0 above the horizontal. The maximum height attained by the ball during its motion is : (g = 10 m/s\u00b2)",
    "options": [
      "5 m",
      "10 m",
      "20 m",
      "25 m"
    ],
    "correctAnswer": 0,
    "explanation": "H = u\u00b2 sin\u00b2 30\u00b0 / (2g) = 20\u00b2 \u00d7 (0.5)\u00b2 / (2 \u00d7 10) = 400 \u00d7 0.25 / 20 = 100 / 20 = 5 m.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "KN0317",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q29",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Graphical Analysis",
    "subtopic": "Graphical Analysis",
    "difficulty": "Easy",
    "questionText": "The position-time (x \u2013 t) graph for positive acceleration is :",
    "question": "The position-time (x \u2013 t) graph for positive acceleration is :",
    "options": [
      "Parabolic curve concave upwards (slope increasing)",
      "Parabolic curve concave downwards",
      "Straight line passing through origin",
      "Horizontal straight line"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration a = d\u00b2x/dt\u00b2. Positive acceleration implies d\u00b2x/dt\u00b2 > 0, which corresponds to an upwardly concave curve where the slope dx/dt increases with time.",
    "pyqYear": 2022,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Graphical Analysis",
      "KN0318",
      "NEET/AIPMT 2022",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 160 120\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"25\" y1=\"95\" x2=\"145\" y2=\"95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"25\" y1=\"15\" x2=\"25\" y2=\"95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <path d=\"M 25 95 Q 65 90 130 25\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <text x=\"15\" y=\"25\" font-size=\"9\">x</text><text x=\"140\" y=\"105\" font-size=\"9\">t</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex2-q30",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A bullet is fired from a gun at the speed of 280 ms\u20131 in the direction 30\u00b0 above the horizontal. The maximum height attained by the bullet is (g = 9.8 ms\u207b\u00b2, sin 30\u00b0 = 0.5) :-",
    "question": "A bullet is fired from a gun at the speed of 280 ms\u20131 in the direction 30\u00b0 above the horizontal. The maximum height attained by the bullet is (g = 9.8 ms\u207b\u00b2, sin 30\u00b0 = 0.5) :-",
    "options": [
      "2000 m",
      "1000 m",
      "3000 m",
      "2800 m"
    ],
    "correctAnswer": 1,
    "explanation": "H = u\u00b2 sin\u00b2 30\u00b0 / (2g) = (280\u00b2 \u00d7 0.5\u00b2) / (2 \u00d7 9.8) = (78400 \u00d7 0.25) / 19.6 = 19600 / 19.6 = 1000 m.",
    "pyqYear": 2023,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "KN0319",
      "NEET/AIPMT 2023",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q31",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Speed & Velocity",
    "subtopic": "Speed & Velocity",
    "difficulty": "Easy",
    "questionText": "A vehicle travels half the distance with speed v and the remaining distance with speed 2v. Its average speed is :",
    "question": "A vehicle travels half the distance with speed v and the remaining distance with speed 2v. Its average speed is :",
    "options": [
      "2v / 3",
      "4v / 3",
      "3v / 4",
      "v / 3"
    ],
    "correctAnswer": 1,
    "explanation": "For two equal distance halves: v_avg = 2(v)(2v) / (v + 2v) = 4v\u00b2 / (3v) = 4v / 3.",
    "pyqYear": 2023,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Speed & Velocity",
      "KN0320",
      "NEET/AIPMT 2023",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q32",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A horizontal bridge is built across a river. A student standing on the bridge throws a small ball vertically upwards with a velocity 4 m s\u20131. The ball strikes the water surface after 4 s. The height of bridge above water surface is (Take g = 10 m s\u20132)",
    "question": "A horizontal bridge is built across a river. A student standing on the bridge throws a small ball vertically upwards with a velocity 4 m s\u20131. The ball strikes the water surface after 4 s. The height of bridge above water surface is (Take g = 10 m s\u20132)",
    "options": [
      "60 m",
      "64 m",
      "68 m",
      "56 m"
    ],
    "correctAnswer": 1,
    "explanation": "Displacement s = ut - (1/2)gt\u00b2 = 4(4) - (1/2)(10)(16) = 16 - 80 = -64 m. Height of bridge above water = 64 m.",
    "pyqYear": 2023,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "KN0321",
      "NEET/AIPMT 2023",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q33",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Constant Acceleration",
    "subtopic": "Constant Acceleration",
    "difficulty": "Medium",
    "questionText": "A bullet from a gun is fired on a rectangular wooden block with velocity u. When bullet travels 24 cm through the block along its length horizontally, velocity of bullet becomes u/3. Then it further penetrates into the block in the same direction before coming to rest exactly at the other end of the block. The total length of the block is :",
    "question": "A bullet from a gun is fired on a rectangular wooden block with velocity u. When bullet travels 24 cm through the block along its length horizontally, velocity of bullet becomes u/3. Then it further penetrates into the block in the same direction before coming to rest exactly at the other end of the block. The total length of the block is :",
    "options": [
      "24 cm",
      "28 cm",
      "30 cm",
      "27 cm"
    ],
    "correctAnswer": 3,
    "explanation": "Using v\u00b2 = u\u00b2 - 2as: (u/3)\u00b2 = u\u00b2 - 2a(24) => u\u00b2/9 - u\u00b2 = -48a => -8u\u00b2/9 = -48a => 2a = u\u00b2 / 27. Total distance to come to rest: 0 = u\u00b2 - 2a s_total => s_total = u\u00b2 / (2a) = 27 cm.",
    "pyqYear": 2023,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Constant Acceleration",
      "KN0322",
      "NEET/AIPMT 2023",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q34",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Vectors & Calculus",
    "subtopic": "Vectors & Calculus",
    "difficulty": "Easy",
    "questionText": "The position of a particle is given by r(t) = 4t \u00ee + 2t\u00b2 \u0135 + 5 k\u0302 where t is in seconds and r in metre. Find the magnitude and direction of velocity v(t), at t = 1s, with respect to x-axis :",
    "question": "The position of a particle is given by r(t) = 4t \u00ee + 2t\u00b2 \u0135 + 5 k\u0302 where t is in seconds and r in metre. Find the magnitude and direction of velocity v(t), at t = 1s, with respect to x-axis :",
    "options": [
      "4\u221a2 ms\u20131, 45\u00b0",
      "4\u221a2 ms\u20131, 60\u00b0",
      "3\u221a2 ms\u20131, 30\u00b0",
      "3\u221a2 ms\u20131, 45\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "v(t) = dr/dt = 4 \u00ee + 4t \u0135. At t = 1 s: v = 4 \u00ee + 4 \u0135. Magnitude = \u221a(4\u00b2 + 4\u00b2) = 4\u221a2 ms\u207b\u00b9. Direction with x-axis: tan \u03b8 = vy / vx = 4 / 4 = 1 => \u03b8 = 45\u00b0.",
    "pyqYear": 2023,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Vectors & Calculus",
      "KN0323",
      "NEET/AIPMT 2023",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex2-q35",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A ball is projected from point A with velocity 20 m s\u20131 at an angle 60\u00b0 to the horizontal direction. At the highest point B of the path (as shown in figure), the velocity v m s\u20131 of the ball will be :",
    "question": "A ball is projected from point A with velocity 20 m s\u20131 at an angle 60\u00b0 to the horizontal direction. At the highest point B of the path (as shown in figure), the velocity v m s\u20131 of the ball will be :",
    "options": [
      "20",
      "10\u221a3",
      "Zero",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "At the highest point B of a parabolic trajectory, the vertical component of velocity is zero (vy = 0). The velocity is purely horizontal: v = u cos 60\u00b0 = 20 \u00d7 (1/2) = 10 m s\u207b\u00b9.",
    "pyqYear": 2023,
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "KN0324",
      "NEET/AIPMT 2023",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 220 130\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"105\" x2=\"200\" y2=\"105\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <path d=\"M 20 105 Q 110 15 200 105\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <line x1=\"20\" y1=\"105\" x2=\"65\" y2=\"60\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n  <text x=\"35\" y=\"55\" font-size=\"9\" fill=\"#16a34a\" font-weight=\"bold\">20 m/s (60\u00b0)</text>\n  <circle cx=\"110\" cy=\"60\" r=\"3.5\" fill=\"#dc2626\"/><text x=\"105\" y=\"50\" font-size=\"10\" font-weight=\"bold\">B (apex)</text>\n  <line x1=\"110\" y1=\"60\" x2=\"145\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"150\" y=\"63\" font-size=\"9\" font-weight=\"bold\" fill=\"#dc2626\">v m/s</text>\n</svg>"
  }
];

/**
 * ALLEN PRE-MEDICAL: NURTURE COURSE
 * KINEMATICS - EXERCISE-III (ANALYTICAL QUESTIONS: Q1 to Q28)
 * Master-level conceptual and analytical problems with official keys.
 */
export const ALLEN_KINEMATICS_EXERCISE_3_QUESTIONS: Question[] = [
  {
    "id": "allen-kinematics-ex3-q01",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Speed & Velocity",
    "subtopic": "Speed & Velocity",
    "difficulty": "Medium",
    "questionText": "During the first 18 min of a 60 min trip, a car has an average speed of 14 ms\u20131. What should be the average speed for remaining 42 min so that car is having an average speed of 21 ms\u20131 for the entire trip ?",
    "question": "During the first 18 min of a 60 min trip, a car has an average speed of 14 ms\u20131. What should be the average speed for remaining 42 min so that car is having an average speed of 21 ms\u20131 for the entire trip ?",
    "options": [
      "24 ms\u20131",
      "30 ms\u20131",
      "36 ms\u20131",
      "20 ms\u20131"
    ],
    "correctAnswer": 0,
    "explanation": "Total distance s = v_avg \u00d7 t_total = 21 \u00d7 60 = 1260 m (in arbitrary scaled units). Distance in first 18 min = 14 \u00d7 18 = 252. Required distance in remaining 42 min = 1260 - 252 = 1008. Speed = 1008 / 42 = 24 ms\u207b\u00b9.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Speed & Velocity",
      "NKN0344",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q02",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Distance & Displacement",
    "subtopic": "Distance & Displacement",
    "difficulty": "Medium",
    "questionText": "Position of a particle moving along x\u2013axis is given by x = 2 + 8t \u2013 4t\u00b2. The distance travelled by the particle from t = 0 to t = 3 is :",
    "question": "Position of a particle moving along x\u2013axis is given by x = 2 + 8t \u2013 4t\u00b2. The distance travelled by the particle from t = 0 to t = 3 is :",
    "options": [
      "0",
      "8",
      "12",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "Velocity v = dx/dt = 8 - 8t. Particle turns around when v = 0 => t = 1 s. At t = 0: x(0) = 2. At t = 1 s: x(1) = 2 + 8 - 4 = 6 m (distance travelled = |6 - 2| = 4 m). At t = 3 s: x(3) = 2 + 8(3) - 4(9) = 2 + 24 - 36 = -10 m (distance travelled = |-10 - 6| = 16 m). Total distance = 4 + 16 = 20 m.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Distance & Displacement",
      "NKN0451",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q03",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Hard",
    "questionText": "In a straight line motion the distance travelled is proportional to the square root of the time taken. The acceleration of the particle is proportional to :\u2013",
    "question": "In a straight line motion the distance travelled is proportional to the square root of the time taken. The acceleration of the particle is proportional to :\u2013",
    "options": [
      "x\u207b\u00b2",
      "x\u00b2",
      "x\u00b3",
      "x\u207b\u00b3"
    ],
    "correctAnswer": 3,
    "explanation": "x \u221d \u221at => t \u221d x\u00b2 => t = k x\u00b2. Differentiating w.r.t time: 1 = 2k x (dx/dt) = 2k x v => v = 1 / (2k x) \u221d x\u207b\u00b9. Differentiating again: a = v (dv/dx) = (1 / 2k x) \u00d7 (-1 / 2k x\u00b2) = -1 / (4k\u00b2 x\u00b3) \u221d x\u207b\u00b3.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "NKN0452",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q04",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Calculus & Motion",
    "subtopic": "Calculus & Motion",
    "difficulty": "Hard",
    "questionText": "A particle is projected with velocity v0 along x-axis. The deceleration of the particle is proportional to the cube of the distance from the origin i.e., a = \u2013 \u03b1x\u00b3. The distance in which the particle stops is :-",
    "question": "A particle is projected with velocity v0 along x-axis. The deceleration of the particle is proportional to the cube of the distance from the origin i.e., a = \u2013 \u03b1x\u00b3. The distance in which the particle stops is :-",
    "options": [
      "3v0 / (2\u03b1)",
      "(3v0 / 2\u03b1)^(1/3)",
      "(3v0\u00b2 / 2\u03b1)",
      "(2v0\u00b2 / \u03b1)^(1/4)"
    ],
    "correctAnswer": 3,
    "explanation": "a = v (dv/dx) = -\u03b1 x\u00b3 => v dv = -\u03b1 x\u00b3 dx. Integrating from v0 to 0: \u222b_{v0}\u2070 v dv = -\u03b1 \u222b\u2080\u02e2 x\u00b3 dx => -v0\u00b2 / 2 = -\u03b1 s\u2074 / 4 => s\u2074 = 2v0\u00b2 / \u03b1 => s = (2v0\u00b2 / \u03b1)^(1/4).",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Calculus & Motion",
      "NKN0347",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q05",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Speed & Velocity",
    "subtopic": "Speed & Velocity",
    "difficulty": "Medium",
    "questionText": "A man walks on a straight road from his home to a market 2.5 km away with a speed of 5 km/h. Finding the market closed, he instantly turns and walks back home with a speed of 7.5 km/h. The average speed of the man over the interval of time 0 to 50 min is equal to :",
    "question": "A man walks on a straight road from his home to a market 2.5 km away with a speed of 5 km/h. Finding the market closed, he instantly turns and walks back home with a speed of 7.5 km/h. The average speed of the man over the interval of time 0 to 50 min is equal to :",
    "options": [
      "0 km/h",
      "6 km/h",
      "25/4 km/h",
      "45/8 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "Time to reach market = 2.5 km / 5 km/h = 0.5 h = 30 min. Remaining time = 50 - 30 = 20 min = 1/3 h. Distance walked back in 20 min = 7.5 km/h \u00d7 (1/3 h) = 2.5 km (he reaches back home!). Total distance = 2.5 + 2.5 = 5 km. Total time = 50 min = 5/6 h. Average speed = 5 / (5/6) = 6 km/h.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Speed & Velocity",
      "NKN0453",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q06",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Constant Acceleration",
    "subtopic": "Constant Acceleration",
    "difficulty": "Medium",
    "questionText": "A driver takes 0.20 s to apply the brakes after he sees a need for it. This is called the reaction time of the driver. If he is driving a car at a speed of 54 km/h and the brakes cause a deceleration of 6.0 m/s\u00b2. Find the distance travelled by the car after he sees the need to put the brakes on :-",
    "question": "A driver takes 0.20 s to apply the brakes after he sees a need for it. This is called the reaction time of the driver. If he is driving a car at a speed of 54 km/h and the brakes cause a deceleration of 6.0 m/s\u00b2. Find the distance travelled by the car after he sees the need to put the brakes on :-",
    "options": [
      "21.75 m",
      "18.75 m",
      "27.12 m",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Speed u = 54 km/h = 15 m/s. Distance during reaction time: s1 = u \u00d7 t_react = 15 \u00d7 0.20 = 3.0 m. Distance during braking: s2 = u\u00b2 / (2a) = 15\u00b2 / (2 \u00d7 6) = 225 / 12 = 18.75 m. Total distance = s1 + s2 = 3.0 + 18.75 = 21.75 m.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Constant Acceleration",
      "NKN0349",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q07",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Constant Acceleration",
    "subtopic": "Constant Acceleration",
    "difficulty": "Hard",
    "questionText": "A particle travels 10m in first 5 seconds and 10m in next 3 seconds. Assuming constant acceleration, what is the distance travelled in next 3 second ?",
    "question": "A particle travels 10m in first 5 seconds and 10m in next 3 seconds. Assuming constant acceleration, what is the distance travelled in next 3 second ?",
    "options": [
      "11 m",
      "12 m",
      "13 m",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "s1 = 10 m in 5 s: 10 = 5u + 12.5a => 2u + 5a = 4. s_total = 20 m in 8 s: 20 = 8u + 32a => u + 4a = 2.5. Solving gives a = 1/3 m/s\u00b2 and u = 7/6 m/s. Distance in total 11 s: s_11 = 11(7/6) + 0.5(1/3)(121) = 77/6 + 121/6 = 198/6 = 33 m. Distance in next 3 s = s_11 - s_8 = 33 - 20 = 13 m.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Constant Acceleration",
      "NKN0454",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q08",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Constant Acceleration",
    "subtopic": "Constant Acceleration",
    "difficulty": "Medium",
    "questionText": "A particle starts from rests and travels a distance S with uniform acceleration and then it travels a distance 3S with uniform retardation and comes to rest. If the complete motion of the particle is a straight line then the ratio of its average velocity to maximum velocity is :",
    "question": "A particle starts from rests and travels a distance S with uniform acceleration and then it travels a distance 3S with uniform retardation and comes to rest. If the complete motion of the particle is a straight line then the ratio of its average velocity to maximum velocity is :",
    "options": [
      "2",
      "1 / 2",
      "3",
      "1 / 3"
    ],
    "correctAnswer": 1,
    "explanation": "For motion starting from rest and ending at rest with constant acceleration segments: average velocity for each segment is v_max / 2. Since v_avg = (s1 + s2)/(t1 + t2) = (v_max/2 t1 + v_max/2 t2)/(t1 + t2) = v_max / 2, the ratio of average velocity to maximum velocity is 1 / 2.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Constant Acceleration",
      "NKN0455",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q09",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Constant Acceleration",
    "subtopic": "Constant Acceleration",
    "difficulty": "Medium",
    "questionText": "A particle is moving with uniform acceleration along a straight line. Its velocities at A & B are respectively 7 m/s & 17 m/s. M is mid point of AB. If t1 is the time taken to go from A to M and t2 the time taken to go from M to B, the ratio is equal to:-",
    "question": "A particle is moving with uniform acceleration along a straight line. Its velocities at A & B are respectively 7 m/s & 17 m/s. M is mid point of AB. If t1 is the time taken to go from A to M and t2 the time taken to go from M to B, the ratio is equal to:-",
    "options": [
      "3 : 2",
      "3 : 1",
      "2 : 1",
      "2 : 3"
    ],
    "correctAnswer": 0,
    "explanation": "Velocity at midpoint M is vM = \u221a((vA\u00b2 + vB\u00b2) / 2) = \u221a((49 + 289) / 2) = \u221a169 = 13 m/s. t1 = (vM - vA) / a = (13 - 7) / a = 6 / a. t2 = (vB - vM) / a = (17 - 13) / a = 4 / a. Ratio t1 / t2 = 6 / 4 = 3 : 2.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Constant Acceleration",
      "NKN0352",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q10",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A man throws balls with the same speed vertically upwards one after the other at an interval of 4 seconds. What should be the speed of the throw so that more than two balls are in the sky at any time ? (Given g = 9.8 m/s\u00b2)",
    "question": "A man throws balls with the same speed vertically upwards one after the other at an interval of 4 seconds. What should be the speed of the throw so that more than two balls are in the sky at any time ? (Given g = 9.8 m/s\u00b2)",
    "options": [
      "More than 39.2 m/s.",
      "At least 9.8 m/s.",
      "Any speed less than 39.2 m/s.",
      "Only with speed 39.2 m/s."
    ],
    "correctAnswer": 0,
    "explanation": "For more than 2 balls to be in the sky simultaneously, each ball must remain in the air for more than 2 time intervals: T > 2 \u00d7 4 s = 8 s. Since T = 2u / g: 2u / g > 8 => u > 4g = 4 \u00d7 9.8 = 39.2 m/s.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0456",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q11",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A very large number of balls are thrown vertically upwards in quick succession in such a way that the next ball is thrown when the previous one is at the maximum height. If the maximum height is 5 m, the number of ball thrown per minute is (take g = 10 ms\u207b\u00b2):",
    "question": "A very large number of balls are thrown vertically upwards in quick succession in such a way that the next ball is thrown when the previous one is at the maximum height. If the maximum height is 5 m, the number of ball thrown per minute is (take g = 10 ms\u207b\u00b2):",
    "options": [
      "120",
      "80",
      "60",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "Time to reach maximum height H = 5 m is t = \u221a(2H / g) = \u221a(2 \u00d7 5 / 10) = 1 s. Thus a ball is thrown every 1 second. Number of balls thrown per minute = 60 s / 1 s = 60.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0354",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q12",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A body is projected upwards with a velocity u. It passes through a certain point above the ground after t1 second. The time taken by the body to hit the ground after this instant is :",
    "question": "A body is projected upwards with a velocity u. It passes through a certain point above the ground after t1 second. The time taken by the body to hit the ground after this instant is :",
    "options": [
      "(u/g) - t1",
      "2((u/g) - t1)",
      "(2u/g) - t1",
      "2u / g"
    ],
    "correctAnswer": 2,
    "explanation": "Total time of flight T = 2u / g. The time taken to hit the ground after passing the point at time t1 is \u0394t = T - t1 = (2u / g) - t1.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0457",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q13",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A body is thrown vertically upwards from the top A of a tower. It reaches the ground in t1 seconds. If it is thrown vertically downwards from A with the same speed it reaches the ground in t2 seconds. If it is allowed to fall freely from A, then the time t (in sec) it takes to reach the ground is given by :",
    "question": "A body is thrown vertically upwards from the top A of a tower. It reaches the ground in t1 seconds. If it is thrown vertically downwards from A with the same speed it reaches the ground in t2 seconds. If it is allowed to fall freely from A, then the time t (in sec) it takes to reach the ground is given by :",
    "options": [
      "t = (t1 + t2) / 2",
      "t = (t1 - t2) / 2",
      "t = \u221a(t1 t2)",
      "t = t1 / t2"
    ],
    "correctAnswer": 2,
    "explanation": "For upward throw: -h = u t1 - (1/2)g t1\u00b2. For downward throw: -h = -u t2 - (1/2)g t2\u00b2. Multiplying and solving yields h = (1/2)g t1 t2. For free fall from rest: h = (1/2)g t\u00b2. Equating gives t\u00b2 = t1 t2 => t = \u221a(t1 t2).",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0356",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q14",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Medium",
    "questionText": "A balloon rises from the ground with an acceleration of 1.25 m/s\u00b2. After 4s, a stone is released from the balloon. The stone will \u2013 (taking g = 10 m/s\u00b2)",
    "question": "A balloon rises from the ground with an acceleration of 1.25 m/s\u00b2. After 4s, a stone is released from the balloon. The stone will \u2013 (taking g = 10 m/s\u00b2)",
    "options": [
      "have a displacement of 12.5 m",
      "cover a distance of 10m in reaching the ground",
      "reach the ground in 2s",
      "begin to move downwards after being released"
    ],
    "correctAnswer": 2,
    "explanation": "At t = 4 s: Height of balloon h = (1/2)(1.25)(4\u00b2) = 10 m. Velocity of balloon v = at = 1.25 \u00d7 4 = 5 m/s upwards. Stone starts from h = 10 m with u = +5 m/s. -10 = 5t - 5t\u00b2 => 5t\u00b2 - 5t - 10 = 0 => t\u00b2 - t - 2 = 0 => (t - 2)(t + 1) = 0 => t = 2 s to reach ground.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0458",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q15",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Hard",
    "questionText": "A parachutist drops freely from an aeroplane for 10s before the parachute opens out. Then he descends with a net retardation of 2.5 m/s\u00b2. If he bails out of the plane at a height of 2495 m and g = 10 m/sec\u00b2, his velocity on reaching the ground will be :",
    "question": "A parachutist drops freely from an aeroplane for 10s before the parachute opens out. Then he descends with a net retardation of 2.5 m/s\u00b2. If he bails out of the plane at a height of 2495 m and g = 10 m/sec\u00b2, his velocity on reaching the ground will be :",
    "options": [
      "5 m/s",
      "10 m/s",
      "15 m/s",
      "20 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Phase 1: falls 10 s freely from rest. h1 = (1/2)(10)(10\u00b2) = 500 m. Speed acquired v1 = gt = 100 m/s. Remaining height h2 = 2495 - 500 = 1995 m. Phase 2: decelerates at 2.5 m/s\u00b2. v\u00b2 = v1\u00b2 - 2ah2 = 100\u00b2 - 2(2.5)(1995) = 10000 - 9975 = 25 => v = 5 m/s.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0358",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The ceiling of a hall is 40m high. For maximum horizontal distance, the angle at which the ball can be thrown with a speed of 40 m/s without hitting the ceiling of the hall is (take g = 10 m/s\u00b2) :",
    "question": "The ceiling of a hall is 40m high. For maximum horizontal distance, the angle at which the ball can be thrown with a speed of 40 m/s without hitting the ceiling of the hall is (take g = 10 m/s\u00b2) :",
    "options": [
      "25\u00b0",
      "30\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "For maximum horizontal distance without hitting ceiling, maximum height H <= 40 m. Maximum height at 45\u00b0: H = u\u00b2 sin\u00b2 45\u00b0 / (2g) = (40\u00b2 \u00d7 0.5) / 20 = 800 / 20 = 40 m! Since the maximum height at the ideal range angle of 45\u00b0 is exactly 40 m, the ball can be thrown at 45\u00b0 without hitting the ceiling.",
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Projectile Motion",
      "NKN0459",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A particle is thrown with velocity u making an angle \u03b8 with the vertical. It just crosses the top of two poles each of height h after 1 s and 3 s respectively. The maximum height of projectile is [g = 9.8 m/s\u00b2] :",
    "question": "A particle is thrown with velocity u making an angle \u03b8 with the vertical. It just crosses the top of two poles each of height h after 1 s and 3 s respectively. The maximum height of projectile is [g = 9.8 m/s\u00b2] :",
    "options": [
      "9.8 m",
      "19.6 m",
      "39.2 m",
      "4.9 m"
    ],
    "correctAnswer": 1,
    "explanation": "By symmetry, the times to pass the same height h are t1 = 1 s and t2 = 3 s. Total time of flight T = t1 + t2 = 1 + 3 = 4 s. Maximum height H = g T\u00b2 / 8 = (9.8 \u00d7 4\u00b2) / 8 = (9.8 \u00d7 16) / 8 = 19.6 m.",
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Projectile Motion",
      "NKN0360",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 240 130\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"105\" x2=\"220\" y2=\"105\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <path d=\"M 20 105 Q 120 10 220 105\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <line x1=\"60\" y1=\"105\" x2=\"60\" y2=\"55\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"50\" y=\"85\" font-size=\"9\" fill=\"#dc2626\" font-weight=\"bold\">h (1s)</text>\n  <line x1=\"180\" y1=\"105\" x2=\"180\" y2=\"55\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"185\" y=\"85\" font-size=\"9\" fill=\"#dc2626\" font-weight=\"bold\">h (3s)</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex3-q18",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball was thrown from height H and the ball hit the floor with velocity 5\u00ee \u2013 20\u0135 m/s after 2.5 sec of its projection. Find initial speed of ball.",
    "question": "A ball was thrown from height H and the ball hit the floor with velocity 5\u00ee \u2013 20\u0135 m/s after 2.5 sec of its projection. Find initial speed of ball.",
    "options": [
      "10\u221a5 m/s",
      "5\u221a2 m/s",
      "5\u221a10 m/s",
      "5 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Horizontal velocity vx = 5 m/s (constant). Final vertical velocity vy = -20 m/s at t = 2.5 s. vy = uy - gt => -20 = uy - 10(2.5) => -20 = uy - 25 => uy = +5 m/s. Initial velocity v0 = 5 \u00ee + 5 \u0135 m/s. Initial speed = \u221a(5\u00b2 + 5\u00b2) = 5\u221a2 m/s.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "NKN0460",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 200 130\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"110\" x2=\"180\" y2=\"110\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"25\" y=\"50\" width=\"20\" height=\"60\" fill=\"#94a3b8\"/>\n  <path d=\"M 45 50 Q 80 15 140 110\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <text x=\"10\" y=\"80\" font-size=\"9\" font-weight=\"bold\">H</text>\n  <text x=\"100\" y=\"122\" font-size=\"9\" fill=\"#dc2626\" font-weight=\"bold\">v = 5\u00ee - 20\u0135 m/s</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex3-q19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Easy",
    "questionText": "In the above question, the angle of projection \u03b8 is :",
    "question": "In the above question, the angle of projection \u03b8 is :",
    "options": [
      "\u03b8 = tan\u207b\u00b9(3)",
      "\u03b8 = tan\u207b\u00b9(1/2)",
      "\u03b8 = tan\u207b\u00b9(2)",
      "\u03b8 = tan\u207b\u00b9(1)"
    ],
    "correctAnswer": 3,
    "explanation": "Initial horizontal component ux = 5 m/s, initial vertical component uy = 5 m/s. Angle of projection tan \u03b8 = uy / ux = 5 / 5 = 1 => \u03b8 = tan\u207b\u00b9(1) = 45\u00b0.",
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Projectile Motion",
      "NKN0461",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q20",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "In the above question 18 the height H is :",
    "question": "In the above question 18 the height H is :",
    "options": [
      "3.75 m",
      "2.25 m",
      "13.5 m",
      "18.75 m"
    ],
    "correctAnswer": 3,
    "explanation": "Vertical displacement s = uy t - (1/2)gt\u00b2 = 5(2.5) - (1/2)(10)(2.5\u00b2) = 12.5 - 31.25 = -18.75 m. Since the ball lands on the floor below the projection level, height H = 18.75 m.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Projectile Motion",
      "NKN0462",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "subtopic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two particles A & B are projected from a building. A is projected with speed 2V making an angle 30\u00b0 with horizontal & B with speed V making an angle 60\u00b0 with horizontal. Which particle will achieve greater height ?",
    "question": "Two particles A & B are projected from a building. A is projected with speed 2V making an angle 30\u00b0 with horizontal & B with speed V making an angle 60\u00b0 with horizontal. Which particle will achieve greater height ?",
    "options": [
      "Particle A",
      "Particle B",
      "Particle A & B will hit at same time.",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "Height achieved above building H = uy\u00b2 / (2g). For A: uyA = 2V sin 30\u00b0 = 2V(0.5) = V => HA = V\u00b2 / (2g). For B: uyB = V sin 60\u00b0 = V(\u221a3 / 2) => HB = 3V\u00b2 / (8g) = 0.375 (V\u00b2/g). Since HA > HB, Particle A will achieve greater height.",
    "tags": [
      "Kinematics",
      "Motion in a Plane",
      "Projectile Motion",
      "NKN0463",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 200 130\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"50\" y=\"50\" width=\"30\" height=\"60\" fill=\"#94a3b8\"/>\n  <line x1=\"80\" y1=\"50\" x2=\"120\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <text x=\"125\" y=\"30\" font-size=\"9\" fill=\"#2563eb\" font-weight=\"bold\">2V (30\u00b0)</text>\n  <line x1=\"80\" y1=\"50\" x2=\"105\" y2=\"10\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"108\" y=\"10\" font-size=\"9\" fill=\"#dc2626\" font-weight=\"bold\">V (60\u00b0)</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex3-q22",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion in 1D",
    "subtopic": "Relative Motion in 1D",
    "difficulty": "Hard",
    "questionText": "Yogesh and Manav are running on a straight road. If at an instant Manav has uniform speed 28 m/s and yogesh starts from rest with acceleration of 4 m/s\u00b2 from a point 80 m ahead of manav, if both are running in same direction then find out time when yogesh overtakes manav :-",
    "question": "Yogesh and Manav are running on a straight road. If at an instant Manav has uniform speed 28 m/s and yogesh starts from rest with acceleration of 4 m/s\u00b2 from a point 80 m ahead of manav, if both are running in same direction then find out time when yogesh overtakes manav :-",
    "options": [
      "4 sec",
      "10 sec",
      "Both (1) and (2) are correct",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "Positions: x_Manav = 28t, x_Yogesh = 80 + (1/2)(4)t\u00b2 = 80 + 2t\u00b2. Equating positions: 2t\u00b2 - 28t + 80 = 0 => t\u00b2 - 14t + 40 = 0 => (t - 4)(t - 10) = 0. At t = 4 s, Manav overtakes Yogesh. At t = 10 s, the accelerating Yogesh overtakes Manav.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion in 1D",
      "NKN0365",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q23",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "A long horizontal belt is moving from left to right with a uniform speed of 4m/s. There are two ink marks A and B on the belt 60 m apart. An insect runs on the belt to and fro between A and B such that its speed relative to the belt is constant and equals 6m/s. When the insect is moving on the belt in the direction of motion of the belt, its speed as observed by a person standing on ground will be :",
    "question": "A long horizontal belt is moving from left to right with a uniform speed of 4m/s. There are two ink marks A and B on the belt 60 m apart. An insect runs on the belt to and fro between A and B such that its speed relative to the belt is constant and equals 6m/s. When the insect is moving on the belt in the direction of motion of the belt, its speed as observed by a person standing on ground will be :",
    "options": [
      "6 m/s",
      "2 m/s",
      "10 m/s",
      "4 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "v_{insect,ground} = v_{insect,belt} + v_{belt,ground} = 6 + 4 = 10 m/s.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion",
      "NKN0464",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q24",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "In above question 23 if A lies to the left of B, then :",
    "question": "In above question 23 if A lies to the left of B, then :",
    "options": [
      "time taken by insect to travel from A to B and that taken to travel from B to A are equal",
      "time taken by insect to travel from A to B is less than that taken to tavel from B to A",
      "time taken by insect to travel from A to B is more than the that taken to travel from B to A",
      "none of the above"
    ],
    "correctAnswer": 0,
    "explanation": "Both ink marks A and B are fixed on the moving belt. Relative to the belt, the distance between them is 60 m and the insect moves at a constant speed of 6 m/s in both directions. Hence the time taken from A to B and from B to A are equal.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion",
      "NKN0367",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q25",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Relative Motion",
    "subtopic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "In above question 23 if A lies to the left of B, time taken by the insect to travel from B to A will be :",
    "question": "In above question 23 if A lies to the left of B, time taken by the insect to travel from B to A will be :",
    "options": [
      "6 sec",
      "15 sec",
      "10 sec",
      "30 sec"
    ],
    "correctAnswer": 2,
    "explanation": "t = distance / speed relative to belt = 60 m / 6 m/s = 10 sec.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Relative Motion",
      "NKN0465",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q26",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Graphical Analysis",
    "subtopic": "Graphical Analysis",
    "difficulty": "Hard",
    "questionText": "The position time graphs for two particles A and B moving along the same straight line are shown in figure. The time after which (from when A starts) B caught A :",
    "question": "The position time graphs for two particles A and B moving along the same straight line are shown in figure. The time after which (from when A starts) B caught A :",
    "options": [
      "8s",
      "12s",
      "16s",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "Particle A starts at t = 0 from x = 4 m with velocity vA = tan 37\u00b0 = 3/4 m/s. Position xA(t) = 4 + (3/4)t. Particle B starts at t = 4 s from x = 0 with velocity vB = tan 53\u00b0 = 4/3 m/s. Position xB(t) = (4/3)(t - 4). Equating: 4 + (3/4)t = (4/3)t - 16/3 => 4 + 16/3 = (4/3 - 3/4)t => 28/3 = (7/12)t => t = (28/3) \u00d7 (12/7) = 16 s.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Graphical Analysis",
      "NKN0369",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 200 130\" class=\"w-full max-w-xs h-28 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"30\" y1=\"105\" x2=\"180\" y2=\"105\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"15\" x2=\"30\" y2=\"105\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"85\" x2=\"160\" y2=\"25\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"30\" font-size=\"9\" fill=\"#2563eb\" font-weight=\"bold\">A (37\u00b0)</text>\n  <line x1=\"80\" y1=\"105\" x2=\"160\" y2=\"15\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"15\" font-size=\"9\" fill=\"#dc2626\" font-weight=\"bold\">B (53\u00b0)</text>\n  <text x=\"15\" y=\"85\" font-size=\"9\">4m</text><text x=\"75\" y=\"118\" font-size=\"9\">t=4s</text>\n</svg>"
  },
  {
    "id": "allen-kinematics-ex3-q27",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Hard",
    "questionText": "A stone is dropped from a height h. Another stone is thrown up simultaneously from the ground which reaches a height 3h. The two stones will cross each other after time:-",
    "question": "A stone is dropped from a height h. Another stone is thrown up simultaneously from the ground which reaches a height 3h. The two stones will cross each other after time:-",
    "options": [
      "\u221a(h / 6g)",
      "\u221a(6gh)",
      "\u221a(3gh)",
      "\u221a(h / 3g)"
    ],
    "correctAnswer": 0,
    "explanation": "Stone 1 dropped from h: y1 = h - (1/2)gt\u00b2. Stone 2 reaches max height 3h: launch velocity u = \u221a(2g(3h)) = \u221a(6gh). y2 = ut - (1/2)gt\u00b2 = \u221a(6gh) t - (1/2)gt\u00b2. They cross when y1 = y2 => h - (1/2)gt\u00b2 = \u221a(6gh) t - (1/2)gt\u00b2 => h = \u221a(6gh) t => t = h / \u221a(6gh) = \u221a(h / 6g).",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0466",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  },
  {
    "id": "allen-kinematics-ex3-q28",
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "Free Fall",
    "subtopic": "Free Fall",
    "difficulty": "Hard",
    "questionText": "A stone is dropped from the top of a tower of height h. After 1 second another stone is dropped from the balcony 20 m below the top of the tower. Both reach the bottom simultaneously at time t. What is the value of t ? (take g = 10 m/s\u00b2) :",
    "question": "A stone is dropped from the top of a tower of height h. After 1 second another stone is dropped from the balcony 20 m below the top of the tower. Both reach the bottom simultaneously at time t. What is the value of t ? (take g = 10 m/s\u00b2) :",
    "options": [
      "1 sec",
      "1.5 sec",
      "2 sec",
      "2.5 sec"
    ],
    "correctAnswer": 3,
    "explanation": "Stone 1 falls distance h in time t: h = (1/2)gt\u00b2. Stone 2 falls distance (h - 20) in time (t - 1): h - 20 = (1/2)g(t - 1)\u00b2. Subtracting: 20 = (1/2)g [t\u00b2 - (t - 1)\u00b2] = (g/2)(2t - 1) = 5(2t - 1) => 2t - 1 = 4 => 2t = 5 => t = 2.5 sec.",
    "tags": [
      "Kinematics",
      "Motion in a Straight Line",
      "Free Fall",
      "NKN0467",
      "Master Level Analytical",
      "Allen Physics Pre-Medical"
    ]
  }
];

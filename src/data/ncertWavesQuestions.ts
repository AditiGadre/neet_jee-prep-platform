import { Question } from '../types';

export const NCERT_WAVES_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch15-ex01",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Plane Progressive Wave Equation",
    "difficulty": "Easy",
    "questionText": "The mathematical equation representing a plane harmonic progressive wave propagating along the positive x-axis is:",
    "options": [
      "y = A sin(\u03c9t + kx)",
      "y = A sin(\u03c9t - kx)",
      "y = A sin(\u03c9t) sin(kx)",
      "y = A [sin(\u03c9t)] kx"
    ],
    "correctAnswer": 1,
    "explanation": "A sinusoidal wave propagating in the +x direction has the general phase (\u03c9t - kx + \u03c6), giving y = A sin(\u03c9t - kx).",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex02",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Wave Pulse Speed Calculation",
    "difficulty": "Medium",
    "questionText": "The wave function of a travelling pulse is given by y = 5 / (1 + (4x + 6t)^2) where x, y are in metres and t is in seconds. The velocity of the pulse is:",
    "options": [
      "2 m/s",
      "6 m/s",
      "1.5 m/s",
      "3 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Comparing with y = f(ax + bt), the wave speed v = |b / a| = 6 / 4 = 1.5 m/s (travelling in the -x direction).",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex03",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Phase Difference between Two Points",
    "difficulty": "Easy",
    "questionText": "The equation of a progressive wave is given by y = A cos[240(t - x/12)] where t is in seconds and x is in metres. The phase difference between two points 0.5 m apart is:",
    "options": [
      "40 rad",
      "20 rad",
      "10 rad",
      "5 rad"
    ],
    "correctAnswer": 2,
    "explanation": "Wave equation y = A cos(240t - 20x). The propagation constant k = 20 rad/m.\nPhase difference \u0394\u03c6 = k * \u0394x = 20 * 0.5 = 10 radians.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex04",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Transverse Wave Speed and String Tension",
    "difficulty": "Hard",
    "questionText": "A transverse wave on a string is described by y = 2 sin(10x + 300t) (in SI units). If the vibrating string has a linear mass density of 0.6 \u00d7 10^-3 g/cm, the tension in the string is:",
    "options": [
      "5.4 N",
      "0.054 N",
      "54 N",
      "0.0054 N"
    ],
    "correctAnswer": 1,
    "explanation": "Wave speed v = \u03c9 / k = 300 / 10 = 30 m/s.\nLinear mass density \u03bc = (0.6 \u00d7 10^-3 g) / (1 cm) = (0.6 \u00d7 10^-6 kg) / (10^-2 m) = 6 \u00d7 10^-5 kg/m.\nTension T = \u03bc v^2 = (6 \u00d7 10^-5) * (30)^2 = (6 \u00d7 10^-5) * 900 = 0.054 N.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex05",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Wave Speed in Vertically Hanging Rope",
    "difficulty": "Medium",
    "questionText": "A uniform rope of length L and mass m hangs freely from a rigid ceiling. The velocity v of a transverse wave pulse as a function of distance x from the lower free end is proportional to:",
    "options": [
      "x^0",
      "\u221ax",
      "1 / \u221ax",
      "x"
    ],
    "correctAnswer": 1,
    "explanation": "At height x from the bottom, the tension T supports the weight of the rope below it: T(x) = (m / L) x g = \u03bc g x.\nWave speed v(x) = \u221a(T / \u03bc) = \u221a( (\u03bc g x) / \u03bc ) = \u221a(g x) \u221d \u221ax.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex06",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Speed of Sound in Gas Mixture",
    "difficulty": "Hard",
    "questionText": "The speed of sound in pure hydrogen gas at NTP is 1270 m/s. What will be the speed of sound in a mixture of hydrogen and oxygen gases in the volume ratio 4 : 1 at the same temperature?",
    "options": [
      "635 m/s",
      "318 m/s",
      "158 m/s",
      "1270 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Molar mass of mixture M_mix = (4 * 2 + 1 * 32) / (4 + 1) = 40 / 5 = 8 g/mol.\nv_mix / v_H2 = \u221a(M_H2 / M_mix) = \u221a(2 / 8) = \u221a(1/4) = 1/2.\nv_mix = 1270 / 2 = 635 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex07",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Thermal Tension and Transverse Wave Speed",
    "difficulty": "Hard",
    "questionText": "A copper wire is held taut between two rigid supports at 50\u00b0C with negligible tension. If Y = 1.2 \u00d7 10^11 N/m^2, \u03b1 = 1.6 \u00d7 10^-5 /\u00b0C, and \u03c1 = 9.2 \u00d7 10^3 kg/m^3, the speed of transverse waves in the wire when cooled to 30\u00b0C is approximately:",
    "options": [
      "64.6 m/s",
      "16.2 m/s",
      "23.2 m/s",
      "32.2 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Thermal stress \u03c3 = T / A = Y * \u03b1 * \u0394T.\nWave speed v = \u221a(T / \u03bc) = \u221a(\u03c3 / \u03c1) = \u221a( (Y \u03b1 \u0394T) / \u03c1 ) = \u221a( (1.2 \u00d7 10^11 * 1.6 \u00d7 10^-5 * 20) / (9.2 \u00d7 10^3) ) = \u221a( 3.84 \u00d7 10^7 / 9.2 \u00d7 10^3 ) = \u221a4173.9 \u2248 64.6 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex08",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Audibility Limit Wavelength",
    "difficulty": "Easy",
    "questionText": "The wavelength of sound waves in hydrogen gas (v = 1350 m/s) corresponding to the lower frequency limit of human audibility (20 Hz) is:",
    "options": [
      "60 m",
      "67.5 m",
      "100 m",
      "500 m"
    ],
    "correctAnswer": 1,
    "explanation": "\u03bb = v / f = 1350 / 20 = 67.5 m.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex09",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Echo Speed of Sound Calculation",
    "difficulty": "Medium",
    "questionText": "An iron block is dropped into a 78.4 m deep well. The sound of the splash is heard at the top after 4.23 s. The speed of sound in air is (take g = 9.8 m/s^2):",
    "options": [
      "300 m/s",
      "320 m/s",
      "280 m/s",
      "340.8 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "Time for block to fall to bottom: t1 = \u221a(2h / g) = \u221a(2 * 78.4 / 9.8) = \u221a16 = 4.0 s.\nTime for sound to travel to top: t2 = 4.23 - 4.0 = 0.23 s.\nSpeed of sound v = h / t2 = 78.4 / 0.23 = 340.8 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex10",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Sound Intensity Decibel Increase",
    "difficulty": "Easy",
    "questionText": "If the intensity of a sound wave is increased by a factor of 30, the sound level in decibels increases by:",
    "options": [
      "12 dB",
      "14.77 dB",
      "10 dB",
      "13 dB"
    ],
    "correctAnswer": 1,
    "explanation": "\u0394L = 10 log10(I2 / I1) = 10 log10(30) = 10 * 1.4771 = 14.77 dB.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex11",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Standing Wave Formation at Fixed Node",
    "difficulty": "Easy",
    "questionText": "A wave represented by y1 = a cos(kx - \u03c9t) is superposed with another wave to form a stationary wave having a displacement node at x = 0. The equation of the second wave is:",
    "options": [
      "a sin(kx + \u03c9t)",
      "-a cos(kx + \u03c9t)",
      "-a cos(kx - \u03c9t)",
      "-a sin(kx - \u03c9t)"
    ],
    "correctAnswer": 1,
    "explanation": "For a node at x = 0 for all t, the net displacement y(0, t) = y1(0, t) + y2(0, t) = a cos(-\u03c9t) + y2(0, t) = 0 => y2(0, t) = -a cos(\u03c9t). The reflected wave travelling in the -x direction is y2 = -a cos(kx + \u03c9t).",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex12",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Resonant Length of Suspension Bridge",
    "difficulty": "Medium",
    "questionText": "A suspension bridge is to be built where wind gusts occur at 5 s intervals (period = 5 s). The speed of transverse waves along the bridge span is 400 m/s. Dangerous resonant oscillation in the fundamental mode will occur if the bridge span has a length of:",
    "options": [
      "2000 m",
      "1000 m",
      "400 m",
      "80 m"
    ],
    "correctAnswer": 1,
    "explanation": "Driving frequency f = 1 / T = 1 / 5 = 0.2 Hz.\nFundamental frequency of stretched span: f1 = v / (2L) => 0.2 = 400 / (2L) => 2L = 400 / 0.2 = 2000 m => L = 1000 m.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex13",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Harmonic Frequency of Stretched String",
    "difficulty": "Easy",
    "questionText": "If the fundamental frequency of a vibrating string fixed at both ends is 220 Hz (cps), the frequency of its fifth harmonic is:",
    "options": [
      "44 Hz",
      "55 Hz",
      "1100 Hz",
      "440 Hz"
    ],
    "correctAnswer": 2,
    "explanation": "For a string fixed at both ends, all integer harmonics exist: f_n = n * f1. The fifth harmonic frequency is f5 = 5 * 220 = 1100 Hz.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex14",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Wave Polarization Characteristic",
    "difficulty": "Easy",
    "questionText": "Which of the following wave phenomena is uniquely exhibited by transverse waves and CANNOT be exhibited by longitudinal sound waves?",
    "options": [
      "Interference",
      "Diffraction",
      "Polarization",
      "Doppler effect"
    ],
    "correctAnswer": 2,
    "explanation": "Polarization requires particle vibrations to be perpendicular to the direction of propagation (transverse motion). Longitudinal waves vibrate parallel to propagation and cannot be polarized.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex15",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Closed vs Open Organ Pipe Fundamental Frequency",
    "difficulty": "Easy",
    "questionText": "The fundamental frequency of an organ pipe closed at one end is 100 Hz. If the closed end is opened so that it becomes open at both ends, its new fundamental frequency will be:",
    "options": [
      "100 Hz",
      "200 Hz",
      "50 Hz",
      "400 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "f_closed = v / (4L) = 100 Hz.\nf_open = v / (2L) = 2 * (v / (4L)) = 2 * 100 = 200 Hz.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex16",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Tuning Fork Wax Loading Beat Frequency",
    "difficulty": "Medium",
    "questionText": "Two tuning forks A and B sounded together produce 5 beats per second. The frequency of B is 260 Hz. When fork B is loaded with wax, the beat frequency increases. The frequency of fork A is:",
    "options": [
      "265 Hz",
      "255 Hz",
      "260 Hz",
      "250 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "Initial possibilities: f_A = 260 + 5 = 265 Hz or f_A = 260 - 5 = 255 Hz.\nLoading B with wax reduces its frequency (f_B < 260 Hz).\nIf f_A = 255 Hz, lowering f_B increases the difference (f_B - f_A), increasing the beat frequency.\nHence, f_A = 255 Hz.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex17",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Doppler Pitch Drop on Crossing",
    "difficulty": "Hard",
    "questionText": "A policeman detects a drop of 10% in the perceived pitch of a car horn as the car passes him at constant speed. If the speed of sound in air is 330 m/s, the speed of the car is approximately:",
    "options": [
      "17.4 m/s",
      "20.4 m/s",
      "18.6 m/s",
      "16.4 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Approaching: f1 = f0 * v / (v - vs). Receding: f2 = f0 * v / (v + vs).\nf2 / f1 = (v - vs) / (v + vs) = 1 - 0.10 = 0.90.\n(330 - vs) / (330 + vs) = 0.9 => 330 - vs = 297 + 0.9 vs => 1.9 vs = 33 => vs = 33 / 1.9 \u2248 17.37 m/s \u2248 17.4 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex18",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Doppler Effect at Angle",
    "difficulty": "Hard",
    "questionText": "A train approaching a crossing at 20 m/s blows a whistle of frequency 640 Hz when 1 km from the crossing. An observer is located on a perpendicular road at a distance of \u221a3 km from the crossing. If the speed of sound is 330 m/s, the frequency heard by the observer is:",
    "options": [
      "600 Hz",
      "630 Hz",
      "660 Hz",
      "720 Hz"
    ],
    "correctAnswer": 2,
    "explanation": "Angle \u03b8 between the train's velocity vector and the line of sight: cos \u03b8 = 1 / \u221a(1^2 + (\u221a3)^2) = 1 / 2 = cos 60\u00b0.\nVelocity component along line of sight: v_s,eff = 20 cos 60\u00b0 = 10 m/s.\nApparent frequency f' = f0 * v / (v - v_s,eff) = 640 * 330 / (330 - 10) = 640 * (330 / 320) = 2 * 330 = 660 Hz.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex19",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Moving Observer Beat Frequency",
    "difficulty": "Medium",
    "questionText": "Two stationary sound sources A and B each emit sound of frequency 660 Hz. A listener moves from A towards B with a constant speed u. If the speed of sound is 330 m/s, what must be the value of u so that the listener hears 8 beats per second?",
    "options": [
      "2.8 m/s",
      "2.0 m/s",
      "3.0 m/s",
      "3.5 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Frequency from B (approaching): fB' = f(1 + u/v).\nFrequency from A (receding): fA' = f(1 - u/v).\nBeat frequency fb = fB' - fA' = 2 f (u / v) => 8 = 2 * (660) * (u / 330) = 4u => u = 8 / 4 = 2.0 m/s.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch15-ex20",
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "Echo Frequency from Approaching Train",
    "difficulty": "Hard",
    "questionText": "A train moving at a speed of 220 m/s towards a stationary cliff emits a whistle of frequency 1000 Hz. The frequency of the echo reflected back and detected by the driver on the train is (speed of sound in air = 330 m/s):",
    "options": [
      "3500 Hz",
      "4000 Hz",
      "5000 Hz",
      "3000 Hz"
    ],
    "correctAnswer": 2,
    "explanation": "Frequency reaching cliff: f_cliff = f0 * v / (v - vs) = 1000 * 330 / (330 - 220) = 1000 * (330 / 110) = 3000 Hz.\nEcho detected by moving driver: f_echo = f_cliff * (v + vo) / v = 3000 * (330 + 220) / 330 = 3000 * (550 / 330) = 5000 Hz.",
    "tags": [
      "NCERT NEET Physics",
      "Waves",
      "Class 11"
    ]
  }
];

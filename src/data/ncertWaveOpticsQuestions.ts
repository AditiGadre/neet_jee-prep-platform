import { Question } from '../types';

export const NCERT_WAVE_OPTICS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch25-01",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "YDSE Fringe Width Calculation",
    "difficulty": "Easy",
    "questionText": "In a Young's double slit experiment, two slits 2 mm apart are illuminated by monochromatic light of wavelength 8000 Å. The fringe width observed on a screen placed 1 m from the slits will be: [NCERT Pg. 364]",
    "options": [
      "2 mm",
      "4 mm",
      "0.2 mm",
      "0.4 mm"
    ],
    "correctAnswer": 3,
    "explanation": "Fringe width β = (λ D) / d.\nβ = [(8000 × 10⁻¹⁰ m) × (1 m)] / (2 × 10⁻³ m) = (8 × 10⁻⁷) / (2 × 10⁻³) = 4 × 10⁻⁴ m = 0.4 mm.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light"]
  },
  {
    "id": "ncert-phy-ch25-02",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Doppler Shift of Light",
    "difficulty": "Medium",
    "questionText": "How fast should a car drive so that a signal of wavelength 480 nm appears Doppler-shifted to 480.08 nm? [NCERT Pg. 359]",
    "options": [
      "5 × 10² m/s",
      "5 × 10⁴ m/s",
      "2 × 10³ m/s",
      "3 × 10⁴ m/s"
    ],
    "correctAnswer": 1,
    "explanation": "From the Doppler relation for light (v << c): Δλ / λ = v / c.\nΔλ = 480.08 - 480.00 = 0.08 nm.\nv = c · (Δλ / λ) = (3 × 10⁸ m/s) × (0.08 / 480) = (3 × 10⁸) / 6000 = 5 × 10⁴ m/s.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Doppler Effect"]
  },
  {
    "id": "ncert-phy-ch25-03",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Brewster's Law and Refraction Angle",
    "difficulty": "Easy",
    "questionText": "The refractive index of a transparent medium is 4/3. If unpolarised light is incident at the polarizing angle, the angle of refraction inside the medium will be: [NCERT Pg. 380]",
    "options": [
      "53°",
      "30°",
      "37°",
      "45°"
    ],
    "correctAnswer": 2,
    "explanation": "By Brewster's law, tan i_p = μ = 4/3 => i_p = 53°.\nAt the polarizing angle, the reflected and refracted rays are perpendicular: i_p + r = 90°.\nr = 90° - 53° = 37°.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Polarization"]
  },
  {
    "id": "ncert-phy-ch25-04",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Slit Separation from Angular Fringe Width",
    "difficulty": "Medium",
    "questionText": "In a YDSE experiment, the angular width of a fringe formed on a distant screen is 0.5°. If light of wavelength 7000 Å is used, the separation between the two slits is: [NCERT Pg. 364]",
    "options": [
      "0.08 mm",
      "0.08 cm",
      "0.01 mm",
      "0.02 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Angular fringe width θ = λ / d (in radians).\n0.5° = 0.5 × (π / 180) rad = π / 360 rad.\nd = λ / θ = (7000 × 10⁻¹⁰ m) / (π / 360) = (7 × 10⁻⁷ × 360) / 3.1416 ≈ 8.02 × 10⁻⁵ m ≈ 0.08 mm.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light"]
  },
  {
    "id": "ncert-phy-ch25-05",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Fringe Visibility Ratio Formula",
    "difficulty": "Medium",
    "questionText": "Two coherent sources with intensities I₁ and I₂ interfere to form a fringe pattern on a screen. The value of the ratio (I_max - I_min) / (I_max + I_min) is: [NCERT Pg. 366]",
    "options": [
      "(I₁ + I₂) / √(I₁ I₂)",
      "√(I₁ I₂) / (I₁ + I₂)",
      "(I₁ + I₂) / (2√(I₁ I₂))",
      "(2√(I₁ I₂)) / (I₁ + I₂)"
    ],
    "correctAnswer": 3,
    "explanation": "I_max = (√I₁ + √I₂)² = I₁ + I₂ + 2√(I₁I₂).\nI_min = (√I₁ - √I₂)² = I₁ + I₂ - 2√(I₁I₂).\nI_max - I_min = 4√(I₁I₂).\nI_max + I_min = 2(I₁ + I₂).\nRatio = [4√(I₁I₂)] / [2(I₁ + I₂)] = 2√(I₁I₂) / (I₁ + I₂).",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light"]
  },
  {
    "id": "ncert-phy-ch25-06",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Resultant Amplitude of Interfering Waves",
    "difficulty": "Easy",
    "questionText": "Two coherent light waves are represented by y₁ = 8 sin(ωt) and y₂ = 6 sin(ωt + 60°). The amplitude of the resultant wave upon superposition is: [NCERT Pg. 362]",
    "options": [
      "16",
      "20",
      "12",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "A = √(a₁² + a₂² + 2 a₁ a₂ cos ϕ) = √[8² + 6² + 2(8)(6) cos 60°] = √[64 + 36 + 96(0.5)] = √[100 + 48] = √148 ≈ 12.16 ≈ 12.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Superposition Principle"]
  },
  {
    "id": "ncert-phy-ch25-07",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Polarizing Angle from Refractive Index",
    "difficulty": "Easy",
    "questionText": "A transparent material has a refractive index of √3. The angle of incidence of unpolarised light at which the reflected light is completely plane polarised is: [NCERT Pg. 380]",
    "options": [
      "30°",
      "60°",
      "45°",
      "37°"
    ],
    "correctAnswer": 1,
    "explanation": "By Brewster's law: tan i_p = μ = √3 => i_p = 60°.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Polarization"]
  },
  {
    "id": "ncert-phy-ch25-08",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Intensity Ratio from Slit Widths",
    "difficulty": "Medium",
    "questionText": "If two slits in a YDSE experiment have their width ratio as 1 : 9, the ratio of minimum to maximum intensity (I_min / I_max) in the interference pattern would be: [NCERT Pg. 366]",
    "options": [
      "1 : 4",
      "1 : 8",
      "1 : √2",
      "1 : 2"
    ],
    "correctAnswer": 0,
    "explanation": "Slit width ratio w₁ / w₂ = I₁ / I₂ = 1 / 9 => a₁ / a₂ = √(I₁ / I₂) = 1 / 3.\nI_min / I_max = (a₂ - a₁)² / (a₂ + a₁)² = (3 - 1)² / (3 + 1)² = 2² / 4² = 4 / 16 = 1 : 4.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light"]
  },
  {
    "id": "ncert-phy-ch25-09",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Single Slit First Minima Width",
    "difficulty": "Easy",
    "questionText": "The first diffraction minimum due to a single slit of width a occurs at θ = 30° for light of wavelength 6000 Å. The width of the slit is: [NCERT Pg. 369]",
    "options": [
      "0.8 μm",
      "1.2 μm",
      "0.6 μm",
      "0.3 μm"
    ],
    "correctAnswer": 1,
    "explanation": "Condition for first diffraction minimum: a sin θ = 1 · λ.\na sin 30° = 6000 × 10⁻¹⁰ m => a (1/2) = 6 × 10⁻⁷ m => a = 12 × 10⁻⁷ m = 1.2 μm.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Diffraction"]
  },
  {
    "id": "ncert-phy-ch25-10",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Law of Malus for 45 Degree Analyzer",
    "difficulty": "Easy",
    "questionText": "Plane polarised light of intensity I₀ is incident on a polaroid with its electric field vector making an angle of 45° with the transmission axis of the polaroid. The transmitted light intensity will be: [NCERT Pg. 378]",
    "options": [
      "I₀",
      "I₀ / 2",
      "(3/4) I₀",
      "I₀ / 4"
    ],
    "correctAnswer": 1,
    "explanation": "By Malus's law: I = I₀ cos² θ = I₀ cos² 45° = I₀ (1 / √2)² = I₀ / 2.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Polarization"]
  },
  {
    "id": "ncert-phy-ch25-11",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Separation Between Maxima and Minima in YDSE",
    "difficulty": "Medium",
    "questionText": "The distance between the 2nd bright maximum and 5th dark minimum on the same side of the central maximum in a YDSE pattern is 5 mm. The slits are separated by 0.30 mm and the screen is at 100 cm. The wavelength of light used is: [NCERT Pg. 364]",
    "options": [
      "400 nm",
      "550 nm",
      "600 nm",
      "700 nm"
    ],
    "correctAnswer": 2,
    "explanation": "Position of 2nd bright maximum: y_2B = 2 (λ D / d).\nPosition of 5th dark minimum: y_5D = (5 - 0.5) (λ D / d) = 4.5 (λ D / d).\nSeparation Δy = (4.5 - 2) (λ D / d) = 2.5 (λ D / d).\n5 × 10⁻³ m = 2.5 × [λ × 1.0 m / (0.30 × 10⁻³ m)] => 5 × 10⁻³ = (2.5 / 3 × 10⁻⁴) λ.\nλ = (5 × 10⁻³ × 0.30 × 10⁻³) / 2.5 = 6 × 10⁻⁷ m = 600 nm.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light"]
  },
  {
    "id": "ncert-phy-ch25-12",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Microscope Resolving Power Wavelength Ratio",
    "difficulty": "Easy",
    "questionText": "The ratio of resolving powers of an optical microscope for two illuminating wavelengths λ₁ = 4500 Å and λ₂ = 600 nm is: [NCERT Pg. 375]",
    "options": [
      "4 : 7",
      "3 : 2",
      "4 : 3",
      "15 : 2"
    ],
    "correctAnswer": 2,
    "explanation": "Resolving power of a microscope is inversely proportional to the wavelength: RP ∝ 1 / λ.\nRP₁ / RP₂ = λ₂ / λ₁ = (600 nm) / (450 nm) = 600 / 450 = 4 / 3 = 4 : 3.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Resolving Power"]
  },
  {
    "id": "ncert-phy-ch25-13",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Angular Width of Central Maxima Reduction",
    "difficulty": "Easy",
    "questionText": "The angular width of the central maximum in Fraunhofer diffraction for wavelength λ = 6000 Å is θ₀. When illuminated by another monochromatic light, the angular width decreases by 30%. The wavelength of this new light is: [NEET-2019 (Odisha)]",
    "options": [
      "420 Å",
      "1800 Å",
      "4200 Å",
      "6000 Å"
    ],
    "correctAnswer": 2,
    "explanation": "Angular width of central maximum θ = 2λ / a ∝ λ.\nIf θ decreases by 30%, new width θ' = 0.70 θ₀.\nTherefore, λ' = 0.70 × λ = 0.70 × 6000 Å = 4200 Å.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Diffraction", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-14",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Path Difference for the Fifth Minimum",
    "difficulty": "Easy",
    "questionText": "In a Young's double slit experiment with light of wavelength λ and no initial phase difference, a point on the screen corresponding to the fifth minimum has a path difference of: [NEET-2019 (Odisha)]",
    "options": [
      "11λ / 2",
      "5λ / 2",
      "10λ / 2",
      "9λ / 2"
    ],
    "correctAnswer": 3,
    "explanation": "Path difference for destructive interference (dark fringe / minimum) is Δx = (2n - 1) λ / 2.\nFor the fifth minimum (n = 5): Δx = (2 × 5 - 1) λ / 2 = 9λ / 2.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-15",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Angular Fringe Width in Liquid",
    "difficulty": "Easy",
    "questionText": "In a double slit experiment, the angular width of the first fringe on a screen 1 m away is 0.2° in air. What will be the angular width of the fringe if the entire apparatus is immersed in water (μ_w = 4/3)? [NEET-2019]",
    "options": [
      "0.266°",
      "0.15°",
      "0.05°",
      "0.1°"
    ],
    "correctAnswer": 1,
    "explanation": "Angular fringe width θ = λ / d. When immersed in water, wavelength decreases to λ' = λ / μ.\nθ' = θ / μ = 0.20° / (4/3) = 0.20° × 3/4 = 0.15°.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-16",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Slit Separation Adjustment for Angular Width",
    "difficulty": "Medium",
    "questionText": "In YDSE, the separation between slits is 2 mm and the angular width of fringes is 0.20°. To increase the fringe angular width to 0.21° keeping wavelength and distance constant, the slit separation must be changed to: [NEET-2018]",
    "options": [
      "1.8 mm",
      "1.9 mm",
      "1.7 mm",
      "2.1 mm"
    ],
    "correctAnswer": 1,
    "explanation": "θ = λ / d => θ · d = constant.\nθ₁ d₁ = θ₂ d₂ => (0.20°) × (2 mm) = (0.21°) × d₂.\nd₂ = 0.40 / 0.21 ≈ 1.904 mm ≈ 1.9 mm.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-17",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Polarized Light Electric Vector Orientation",
    "difficulty": "Easy",
    "questionText": "Unpolarised light is incident from air on a transparent surface of refractive index μ at Brewster's angle i_p, where reflected and refracted rays are perpendicular. The reflected light is completely polarised with its electric vector: [NEET-2018]",
    "options": [
      "Parallel to the plane of incidence",
      "Perpendicular to the plane of incidence",
      "At 45° to the plane of incidence",
      "Vibrating randomly in all directions"
    ],
    "correctAnswer": 1,
    "explanation": "At Brewster's angle of incidence, the reflected light is completely plane polarized with its electric field vector vibrating perpendicular to the plane of incidence (parallel to the reflecting boundary surface).",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Polarization", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-18",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Coinciding Bright and Dark Fringes in Medium",
    "difficulty": "Hard",
    "questionText": "A YDSE is performed first in air and then in an unknown liquid medium. The 8th bright fringe in the medium lies at the exact position where the 5th dark fringe lies in air. The refractive index of the medium is nearly: [NEET-2017]",
    "options": [
      "1.25",
      "1.59",
      "1.69",
      "1.78"
    ],
    "correctAnswer": 3,
    "explanation": "Position of 5th dark fringe in air: y = (5 - 0.5) (λ_air D / d) = 4.5 (λ_air D / d).\nPosition of 8th bright fringe in medium: y = 8 (λ_med D / d) = 8 (λ_air D / (μ d)).\nEquating positions: 4.5 λ_air = 8 λ_air / μ => μ = 8 / 4.5 = 16 / 9 ≈ 1.778 ≈ 1.78.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-19",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Three-Polaroid Transmission at 45 Degrees",
    "difficulty": "Medium",
    "questionText": "Two Polaroids P₁ and P₂ are placed with their transmission axes crossed (at 90°). Unpolarised light of intensity I₀ is incident on P₁. A third Polaroid P₃ is inserted between P₁ and P₂ with its axis at 45° to P₁. The intensity of light transmitted through P₂ is: [NEET-2017]",
    "options": [
      "I₀ / 2",
      "I₀ / 4",
      "I₀ / 8",
      "I₀ / 16"
    ],
    "correctAnswer": 2,
    "explanation": "After passing through P₁: I₁ = I₀ / 2.\nAngle between P₁ and P₃ is 45°: I₃ = I₁ cos² 45° = (I₀ / 2) × (1/2) = I₀ / 4.\nAngle between P₃ and P₂ is (90° - 45°) = 45°: I₂ = I₃ cos² 45° = (I₀ / 4) × (1/2) = I₀ / 8.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Polarization", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-20",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Fringe Contrast from Intensity Ratio n",
    "difficulty": "Medium",
    "questionText": "An interference pattern is obtained with two coherent light sources having an intensity ratio n (I₂ / I₁ = n). The ratio (I_max - I_min) / (I_max + I_min) is: [NEET (Phase-2) 2016]",
    "options": [
      "√n / (n + 1)",
      "2√n / (n + 1)",
      "√n / (n + 1)²",
      "2√n / (n + 1)²"
    ],
    "correctAnswer": 1,
    "explanation": "Let I₁ = I, then I₂ = n I.\nI_max = (√I + √nI)² = I (1 + √n)².\nI_min = (√nI - √I)² = I (√n - 1)².\nI_max - I_min = 4 I √n.\nI_max + I_min = 2 I (n + 1).\n(I_max - I_min) / (I_max + I_min) = (4 I √n) / [2 I (n + 1)] = 2√n / (n + 1).",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-21",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Intensity on Screen Opposite to One Slit",
    "difficulty": "Hard",
    "questionText": "In YDSE, the maximum intensity is I₀. The distance between the two slits is d = 5λ, and the screen is placed at D = 10d. The intensity on the screen at a point directly opposite to one of the slits is: [NEET-2016]",
    "options": [
      "I₀ / 2",
      "I₀",
      "I₀ / 4",
      "(3/4) I₀"
    ],
    "correctAnswer": 0,
    "explanation": "A point directly opposite to one slit is at distance y = d/2 from the central maximum.\nPath difference Δx = y · d / D = (d/2) · d / (10d) = d / 20.\nSince d = 5λ: Δx = 5λ / 20 = λ / 4.\nPhase difference ϕ = (2π / λ) · Δx = (2π / λ) · (λ / 4) = π / 2.\nIntensity I = I₀ cos²(ϕ / 2) = I₀ cos²(π / 4) = I₀ (1 / √2)² = I₀ / 2.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-22",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Single-Slit Wavelet Phase Difference at First Minimum",
    "difficulty": "Medium",
    "questionText": "At the first minimum adjacent to the central maximum in a single-slit diffraction pattern, the phase difference between the Huygens' wavelet from the edge of the slit and that from the midpoint of the slit is: [Re-AIPMT-2015]",
    "options": [
      "π/8 radian",
      "π/4 radian",
      "π/2 radian",
      "π radian"
    ],
    "correctAnswer": 3,
    "explanation": "For the first minimum of a single slit of width a: total path difference between wavelets from the two opposite edges is a sin θ = λ.\nThe path difference between a wavelet from the edge and one from the midpoint (a/2) is Δx = (a/2) sin θ = λ / 2.\nPhase difference Δϕ = (2π / λ) · Δx = (2π / λ) · (λ / 2) = π radian.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Diffraction", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-23",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Diffraction Central Maxima Width Formula",
    "difficulty": "Easy",
    "questionText": "For a parallel beam of monochromatic light of wavelength λ incident on a single slit of width a, the linear width of the central diffraction maximum formed on a screen at distance D is: [AIPMT-2015]",
    "options": [
      "2Da / λ",
      "2Dλ / a",
      "Dλ / a",
      "Da / λ"
    ],
    "correctAnswer": 1,
    "explanation": "The first minima on either side occur at angular positions θ = ± λ / a. The total angular width of the central maximum is 2θ = 2λ / a. The linear width on a screen at distance D is β₀ = 2θ · D = 2Dλ / a.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Diffraction", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-24",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Intensity at Quarter-Wavelength Path Difference",
    "difficulty": "Easy",
    "questionText": "In a YDSE, the intensity of light at a point on the screen where the path difference is λ is K. The intensity at a point where the path difference is λ/4 will be: [AIPMT-2014]",
    "options": [
      "K",
      "K / 4",
      "K / 2",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "When path difference is λ, phase difference is 2π, corresponding to maximum intensity: I_max = K.\nWhen path difference is λ/4, phase difference is ϕ = (2π/λ)(λ/4) = π/2.\nIntensity I = I_max cos²(ϕ / 2) = K cos²(π / 4) = K (1 / √2)² = K / 2.",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Interference of Light", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch25-25",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Fresnel Distance Condition for Ray Optics Validity",
    "difficulty": "Medium",
    "questionText": "Light of wavelength λ is incident on a slit of width d. The resulting diffraction pattern is observed on a screen at distance D. The linear width of the principal maximum is equal to the slit width d when distance D equals:",
    "options": [
      "d / λ",
      "d / (2λ)",
      "d² / (2λ)",
      "(2d²) / λ"
    ],
    "correctAnswer": 2,
    "explanation": "Linear width of the central maximum is 2Dλ / d. Setting this equal to the slit width d:\n2Dλ / d = d => 2Dλ = d² => D = d² / (2λ).",
    "tags": ["NCERT NEET Physics", "Wave Optics", "Diffraction"]
  }
];

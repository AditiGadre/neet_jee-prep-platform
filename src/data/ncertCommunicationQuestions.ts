import { Question } from '../types';

export const NCERT_COMMUNICATION_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch30-01",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Elements of a Communication System",
    "difficulty": "Easy",
    "questionText": "Which of the following is not an essential constituent part of the core transmission link in a basic communication system?",
    "options": [
      "Transmitter",
      "Transducer",
      "Receiver",
      "Communication channel"
    ],
    "correctAnswer": 1,
    "explanation": "Every basic communication system essentially comprises three core elements: the transmitter, the transmission channel (medium), and the receiver. A transducer is an auxiliary input/output device that converts physical variables into electrical signals or vice versa.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Basic Elements"]
  },
  {
    "id": "ncert-phy-ch30-02",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Role of a Repeater",
    "difficulty": "Easy",
    "questionText": "A communication repeater is essentially a combination of:",
    "options": [
      "Receiver only",
      "Amplifier only",
      "Transmitter only",
      "A receiver, an amplifier, and a transmitter"
    ],
    "correctAnswer": 3,
    "explanation": "A repeater picks up the attenuated signal from the transmitter, amplifies and reshapes it, and retransmits it (often at a different carrier frequency) to the receiver or next repeater, thereby extending the communication range.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Repeater"]
  },
  {
    "id": "ncert-phy-ch30-03",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Function of a Modem",
    "difficulty": "Easy",
    "questionText": "A modem is an electronic device utilized to connect computers over telephone lines. It acts as:",
    "options": [
      "A modulator in transmission mode",
      "A demodulator in receiving mode",
      "A transducer for voice only",
      "Both a modulator in transmission and a demodulator in reception"
    ],
    "correctAnswer": 3,
    "explanation": "The term 'modem' is an acronym for modulator-demodulator. It converts digital data from a computer into an analog signal for transmission over telephone lines (modulation), and converts received analog signals back to digital data (demodulation).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Modem"]
  },
  {
    "id": "ncert-phy-ch30-04",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Sequence of Communication System Stages",
    "difficulty": "Easy",
    "questionText": "Consider the communication blocks: (A) Transmitter, (B) Information source, (C) User of information, (D) Channel, (E) Receiver. The correct logical sequence from start to finish is:",
    "options": [
      "A → B → C → D → E",
      "B → A → D → E → C",
      "B → D → A → C → E",
      "B → E → A → D → C"
    ],
    "correctAnswer": 1,
    "explanation": "The information originates at the Information source (B), is processed and broadcast by the Transmitter (A), propagates across the Channel (D), is captured and decoded by the Receiver (E), and finally delivered to the User of information (C).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Block Diagram"]
  },
  {
    "id": "ncert-phy-ch30-05",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Geostationary Satellite Orbital Altitude",
    "difficulty": "Easy",
    "questionText": "Geostationary communication satellites are parked at an orbital height above the surface of the Earth of approximately:",
    "options": [
      "36 km",
      "360 km",
      "3,600 km",
      "36,000 km"
    ],
    "correctAnswer": 3,
    "explanation": "Geostationary satellites orbit at a distance of ~42,400 km from the center of Earth, which corresponds to an altitude of approximately 35,800 km (~36,000 km) above the Earth's surface.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Satellite Communication"]
  },
  {
    "id": "ncert-phy-ch30-06",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Signal Attenuation Definition",
    "difficulty": "Easy",
    "questionText": "The progressive loss of amplitude and power of an electromagnetic signal as it propagates through a communication channel is called:",
    "options": [
      "Distortion",
      "Interference",
      "Attenuation",
      "Noise"
    ],
    "correctAnswer": 2,
    "explanation": "Attenuation is the decrease in signal strength caused by energy absorption, scattering, or ohmic losses in the transmission medium as the wave travels from transmitter to receiver.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Terminology"]
  },
  {
    "id": "ncert-phy-ch30-07",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Human Audio Bandwidth",
    "difficulty": "Easy",
    "questionText": "The standard audible frequency range for human hearing is:",
    "options": [
      "20 kHz to 20 MHz",
      "20 Hz to 20 kHz",
      "20 Hz to 20 MHz",
      "300 Hz to 3100 Hz"
    ],
    "correctAnswer": 1,
    "explanation": "The human ear detects acoustic frequencies spanning from 20 Hz up to 20,000 Hz (20 kHz).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Bandwidth"]
  },
  {
    "id": "ncert-phy-ch30-08",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Commercial FM Radio Frequency Band",
    "difficulty": "Easy",
    "questionText": "The internationally allocated frequency band for commercial FM radio broadcasting is:",
    "options": [
      "88 MHz to 108 MHz",
      "88 Hz to 88 kHz",
      "800 kHz to 8000 MHz",
      "540 kHz to 1600 kHz"
    ],
    "correctAnswer": 0,
    "explanation": "Standard commercial FM radio broadcast transmissions operate in the VHF spectrum between 88 MHz and 108 MHz. (By contrast, standard AM broadcast operates in the medium wave band between 540 kHz and 1600 kHz).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Frequency Bands"]
  },
  {
    "id": "ncert-phy-ch30-09",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Sky Wave Propagation Frequencies",
    "difficulty": "Easy",
    "questionText": "Radio waves having frequencies ranging from 2 MHz to 30 MHz propagate over long distances around the Earth primarily as:",
    "options": [
      "Sky waves",
      "Ground waves",
      "Space waves",
      "Tropospheric waves"
    ],
    "correctAnswer": 0,
    "explanation": "Radio waves between 2 MHz and 30 MHz are reflected back toward Earth by the ionospheric layers (such as the F-layer) via total internal reflection, forming sky waves used in shortwave long-distance broadcasting.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Sky Wave Propagation"]
  },
  {
    "id": "ncert-phy-ch30-10",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Selection of Suitable Wave Propagation Mode",
    "difficulty": "Medium",
    "questionText": "Three radio waves A, B, and C have frequencies of 1600 kHz, 5 MHz, and 60 MHz respectively. The most appropriate propagation modes for transmitting them are:",
    "options": [
      "A via space wave, B and C via sky wave",
      "A via ground wave, B via sky wave, and C via space wave",
      "B and C via ground wave, A via sky wave",
      "B via ground wave, A and C via space wave"
    ],
    "correctAnswer": 1,
    "explanation": "Frequency 1600 kHz (< 2 MHz) is transmitted via ground/surface wave propagation. Frequency 5 MHz (between 2 MHz and 30 MHz) is reflected by the ionosphere, making sky wave suitable. Frequency 60 MHz (> 30 MHz) penetrates the ionosphere and must be transmitted via line-of-sight space waves.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Wave Propagation"]
  },
  {
    "id": "ncert-phy-ch30-11",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Speed of EM Wave from Refractive Index",
    "difficulty": "Easy",
    "questionText": "The speed of electromagnetic waves in an optical dielectric medium having refractive index μ = 4 is:",
    "options": [
      "3.0 × 10⁸ m/s",
      "1.5 × 10⁸ m/s",
      "6.0 × 10⁸ m/s",
      "7.5 × 10⁷ m/s"
    ],
    "correctAnswer": 3,
    "explanation": "Velocity in a medium is v = c / μ = (3 × 10⁸ m/s) / 4 = 0.75 × 10⁸ m/s = 7.5 × 10⁷ m/s.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Wave Velocity"]
  },
  {
    "id": "ncert-phy-ch30-12",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Maximum Range of TV Transmission Tower",
    "difficulty": "Medium",
    "questionText": "A television transmitting antenna has a height of 240 m. Taking the radius of Earth as 6.4 × 10⁶ m, the maximum direct distance up to which its broadcast can be received on ground is approximately:",
    "options": [
      "100 km",
      "60 km",
      "55 km",
      "50 km"
    ],
    "correctAnswer": 2,
    "explanation": "The radio horizon distance is d = √(2 R h) = √(2 × 6.4 × 10⁶ m × 240 m) = √(3.072 × 10⁹) = √(3072 × 10⁶) ≈ 55.42 × 10³ m ≈ 55 km.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Antenna Range"]
  },
  {
    "id": "ncert-phy-ch30-13",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Surface Area Covered by Antenna Tower",
    "difficulty": "Medium",
    "questionText": "The geographical surface area covered by a TV tower of height 100 m on Earth (radius R = 6.4 × 10⁶ m) is:",
    "options": [
      "8.4π × 10⁸ m²",
      "1.28π × 10⁹ m²",
      "1.92π × 10⁸ m²",
      "8.4π × 10⁹ m²"
    ],
    "correctAnswer": 1,
    "explanation": "The maximum distance to the horizon is d = √(2Rh). The area covered is A = π d² = π (2 R h) = 2π × (6.4 × 10⁶ m) × 100 m = 1.28π × 10⁹ m².",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Coverage Area"]
  },
  {
    "id": "ncert-phy-ch30-14",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Length of a Hertz Antenna",
    "difficulty": "Easy",
    "questionText": "If λ is the wavelength of radio signals to be radiated, the physical length of a standard ungrounded Hertz dipole antenna is:",
    "options": [
      "λ",
      "λ / 4",
      "λ / 2",
      "2λ"
    ],
    "correctAnswer": 2,
    "explanation": "A Hertz antenna is a resonant half-wave dipole conductor whose length is equal to half the signal wavelength: l = λ / 2. (A quarter-wave grounded antenna is called a Marconi antenna, l = λ / 4).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Antenna Length"]
  },
  {
    "id": "ncert-phy-ch30-15",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Quarter-Wave Monopole Antenna Length",
    "difficulty": "Medium",
    "questionText": "If a radio carrier wave of frequency 1000 kHz is used to transmit a signal, the minimum length of a transmitting quarter-wave antenna will be:",
    "options": [
      "3 m",
      "30 m",
      "75 m",
      "300 m"
    ],
    "correctAnswer": 2,
    "explanation": "Wavelength λ = c / ν = (3 × 10⁸ m/s) / (1000 × 10³ Hz) = 300 m. The required minimum antenna length for a quarter-wave aerial is l = λ / 4 = 300 / 4 = 75 m.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Antenna Dimensions"]
  },
  {
    "id": "ncert-phy-ch30-16",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Sideband Frequencies in Amplitude Modulation",
    "difficulty": "Easy",
    "questionText": "A speech signal of frequency 3 kHz is used to modulate a carrier wave of frequency 1 MHz in an amplitude modulation system. The frequencies of the upper and lower sidebands are:",
    "options": [
      "1.003 MHz and 0.997 MHz",
      "3001 kHz and 2997 kHz",
      "1003 kHz and 1000 kHz",
      "1 MHz and 0.997 MHz"
    ],
    "correctAnswer": 0,
    "explanation": "Carrier frequency f_c = 1 MHz = 1000 kHz. Modulating frequency f_m = 3 kHz = 0.003 MHz. Upper sideband frequency is f_USB = f_c + f_m = 1000 + 3 = 1003 kHz = 1.003 MHz. Lower sideband frequency is f_LSB = f_c - f_m = 1000 - 3 = 997 kHz = 0.997 MHz.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Sidebands"]
  },
  {
    "id": "ncert-phy-ch30-17",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Bandwidth of AM Modulated Wave",
    "difficulty": "Easy",
    "questionText": "The total transmission bandwidth required for an amplitude modulated (AM) signal is:",
    "options": [
      "Equal to the frequency of the audio modulating signal",
      "Double the frequency of the audio modulating signal",
      "Half the frequency of the carrier wave",
      "Double the frequency of the carrier wave"
    ],
    "correctAnswer": 1,
    "explanation": "Bandwidth of an AM wave is given by BW = f_USB - f_LSB = (f_c + f_m) - (f_c - f_m) = 2f_m, which is twice the maximum frequency of the modulating signal.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "AM Bandwidth"]
  },
  {
    "id": "ncert-phy-ch30-18",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Modulation Index Calculation",
    "difficulty": "Easy",
    "questionText": "An audio signal of amplitude 0.1 V is used to modulate a radio carrier wave of amplitude 0.3 V. The modulation index is:",
    "options": [
      "3",
      "1 / 3",
      "0.03",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "The amplitude modulation index is defined as the ratio of modulating signal amplitude to carrier amplitude: μ = A_m / A_c = 0.1 V / 0.3 V = 1 / 3 ≈ 0.33.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Modulation Index"]
  },
  {
    "id": "ncert-phy-ch30-19",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Photodetector Cutoff Wavelength",
    "difficulty": "Medium",
    "questionText": "A photodetector is manufactured from a compound semiconductor having a band gap of 0.73 eV. The maximum wavelength of light that can be detected by it is nearly:",
    "options": [
      "12,400 Å",
      "17,030 Å",
      "6,200 Å",
      "1,703 Å"
    ],
    "correctAnswer": 1,
    "explanation": "The cutoff wavelength is determined by λ_max = hc / E_g = 12400 / 0.73 Å ≈ 16,986 Å ≈ 17,030 Å (using accurate hc = 12430 eV·Å, λ = 12430 / 0.73 = 17027 Å ≈ 17030 Å).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Optical Detection"]
  },
  {
    "id": "ncert-phy-ch30-20",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "UHF Frequency Classification",
    "difficulty": "Easy",
    "questionText": "Electromagnetic radiowaves with frequencies in the range of 300 MHz to 3000 MHz (3 GHz) belong to the:",
    "options": [
      "High frequency (HF) band",
      "Very high frequency (VHF) band",
      "Ultra high frequency (UHF) band",
      "Super high frequency (SHF) band"
    ],
    "correctAnswer": 2,
    "explanation": "The standard ITU frequency designations are: HF (3 to 30 MHz), VHF (30 to 300 MHz), UHF (300 to 3000 MHz), and SHF (3 to 30 GHz).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "ITU Frequency Bands"]
  },
  {
    "id": "ncert-phy-ch30-21",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Maximum Ionospheric Electron Density",
    "difficulty": "Hard",
    "questionText": "On a particular day, the critical frequency for reflection from an ionospheric layer is 10 MHz. The maximum electron density in this layer of the ionosphere is:",
    "options": [
      "10⁶ m⁻³",
      "10¹² m⁻³",
      "1.23 × 10¹² m⁻³",
      "1/9 × 10⁶ m⁻³"
    ],
    "correctAnswer": 2,
    "explanation": "The critical frequency f_c for ionospheric reflection is related to electron density N_max by f_c ≈ 9 √(N_max). For f_c = 10 MHz = 10⁷ Hz: 10⁷ = 9 √(N_max) => √(N_max) = 10⁷ / 9 => N_max = 10¹⁴ / 81 ≈ 1.23 × 10¹² m⁻³.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Critical Frequency"]
  },
  {
    "id": "ncert-phy-ch30-22",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Line of Sight Distance Between Two Antenna Towers",
    "difficulty": "Medium",
    "questionText": "A transmitting antenna at the top of a tower has a height of 32 m and the height of the receiving antenna is 50 m. The maximum line-of-sight distance between them for satisfactory communication is: (R_earth = 6.4 × 10⁶ m)",
    "options": [
      "40 km",
      "45.5 km",
      "60 km",
      "100 km"
    ],
    "correctAnswer": 1,
    "explanation": "Total line-of-sight distance is d_M = √(2 R h_T) + √(2 R h_R) = √(2 × 6.4 × 10⁶ × 32) + √(2 × 6.4 × 10⁶ × 50) = √(4.096 × 10⁸) + √(6.4 × 10⁸) = 20.24 × 10³ m + 25.30 × 10³ m = 45.54 km ≈ 45.5 km.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Space Wave"]
  },
  {
    "id": "ncert-phy-ch30-23",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Refractive Index Condition for Optical Fibres",
    "difficulty": "Easy",
    "questionText": "If μ₁ and μ₂ are the refractive indices of the core and the cladding respectively in an optical communication fibre, the condition necessary for light confinement is:",
    "options": [
      "μ₁ > μ₂",
      "μ₁ < μ₂",
      "μ₁ = μ₂",
      "μ₁ ≤ μ₂"
    ],
    "correctAnswer": 0,
    "explanation": "Light propagates along an optical fiber via total internal reflection at the core-cladding boundary. Total internal reflection occurs only when light travels from an optically denser medium into a rarer medium, requiring μ_core > μ_cladding (μ₁ > μ₂).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Optical Fibres"]
  },
  {
    "id": "ncert-phy-ch30-24",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Numerical Aperture of an Optical Fibre",
    "difficulty": "Medium",
    "questionText": "The numerical aperture (NA) of an optical fiber in air having core refractive index n₁ and cladding refractive index n₂ is expressed as:",
    "options": [
      "√(n₁² – n₂²)",
      "sin⁻¹ √(n₁² – n₂²)",
      "cos⁻¹ √(n₁² – n₂²)",
      "tan⁻¹ √(n₁² – n₂²)"
    ],
    "correctAnswer": 0,
    "explanation": "The acceptance angle θ_a is given by sin θ_a = √(n₁² - n₂²) / n₀. In air (n₀ = 1), the light-gathering capacity known as Numerical Aperture is NA = sin θ_a = √(n₁² - n₂²).",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Numerical Aperture"]
  },
  {
    "id": "ncert-phy-ch30-25",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Overmodulation and Noise",
    "difficulty": "Easy",
    "questionText": "Which of the following modulation index values results in overmodulation and severe audio waveform distortion (noise)?",
    "options": [
      "0.5",
      "0.8",
      "1.2",
      "0.7"
    ],
    "correctAnswer": 2,
    "explanation": "For distortion-free amplitude modulation, the modulation index must satisfy μ ≤ 1 (or 100%). When μ > 1 (e.g. μ = 1.2), overmodulation occurs, causing the carrier envelope to cross zero and become clipped during parts of the negative half-cycles, leading to severe distortion and noise in the demodulated audio.",
    "tags": ["NCERT NEET Physics", "Communication Systems", "Overmodulation"]
  }
];

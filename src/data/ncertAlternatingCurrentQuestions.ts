import { Question } from '../types';

export const NCERT_ALTERNATING_CURRENT_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch22-01",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Physical Meaning of Domestic AC Voltage",
    "difficulty": "Easy",
    "questionText": "The voltage of domestic AC supply in India is specified as 220 V. This value represents:",
    "options": [
      "Mean voltage",
      "Peak voltage",
      "Root mean voltage",
      "Root mean square (RMS) voltage"
    ],
    "correctAnswer": 3,
    "explanation": "All standard AC meters and domestic rating specifications measure and state the Root Mean Square (RMS) or effective value of alternating voltage: V_rms = 220 V (where peak voltage V₀ = 220√2 ≈ 311 V).",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Fundamentals"]
  },
  {
    "id": "ncert-phy-ch22-02",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "RMS Voltage and Frequency from AC Equation",
    "difficulty": "Easy",
    "questionText": "The equation of an alternating voltage is V = 100√2 sin(100πt) volts. The RMS value of voltage and its frequency are respectively:",
    "options": [
      "100 V, 50 Hz",
      "50 V, 100 Hz",
      "150 V, 50 Hz",
      "200 V, 50 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "Comparing with V = V₀ sin(2πft):\nPeak voltage V₀ = 100√2 V => V_rms = V₀ / √2 = (100√2) / √2 = 100 V.\nAngular frequency ω = 2πf = 100π => f = 50 Hz.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Fundamentals"]
  },
  {
    "id": "ncert-phy-ch22-03",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Phase Relationship in Purely Inductive Circuit",
    "difficulty": "Easy",
    "questionText": "In an AC circuit containing an ideal inductor only, the alternating current:",
    "options": [
      "Lags behind the applied voltage by a phase angle of π/2",
      "Leads the applied voltage by a phase angle of π/2",
      "Lags behind the applied voltage by a phase angle of π/3",
      "Leads the applied voltage by a phase angle of π/6"
    ],
    "correctAnswer": 0,
    "explanation": "In a purely inductive AC circuit, the self-induced back emf opposes current growth, causing the current to lag behind the applied alternating voltage by a quarter cycle, i.e., by phase angle π/2 (90°).",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Through Inductor"]
  },
  {
    "id": "ncert-phy-ch22-04",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Time Difference Corresponding to Phase Difference",
    "difficulty": "Easy",
    "questionText": "The phase difference between alternating current and voltage in an AC circuit is π/4 radian. If the frequency of AC is 50 Hz, this phase difference corresponds to a time difference of:",
    "options": [
      "0.75 s",
      "10.5 ms",
      "2.5 ms",
      "0.25 ms"
    ],
    "correctAnswer": 2,
    "explanation": "Phase difference Δϕ = (2π / T) · Δt = 2π f · Δt.\nΔt = Δϕ / (2π f) = (π/4) / (2π × 50) = 1 / (4 × 100) = 1 / 400 s = 2.5 × 10⁻³ s = 2.5 ms.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Fundamentals"]
  },
  {
    "id": "ncert-phy-ch22-05",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Superimposed DC and AC Effective Current",
    "difficulty": "Medium",
    "questionText": "A direct current of 5 A is superimposed on an alternating current I = 10 sin(ωt) flowing through a wire. The effective (RMS) value of the resulting current will be:",
    "options": [
      "7.5 A",
      "2√3 A",
      "5√3 A",
      "15 A"
    ],
    "correctAnswer": 2,
    "explanation": "For i(t) = I_dc + I₀ sin(ωt), mean square value is <i²> = I_dc² + (I₀² / 2).\nI_eff = √(I_dc² + I₀² / 2) = √(5² + 10² / 2) = √(25 + 50) = √75 = 5√3 A.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "RMS Current"]
  },
  {
    "id": "ncert-phy-ch22-06",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "RMS Value of Orthogonal AC Currents",
    "difficulty": "Easy",
    "questionText": "An alternating current is given by I = 3 sin(ωt) + 4 cos(ωt). The RMS value of this current is:",
    "options": [
      "5 / √2 A",
      "5 A",
      "4 / √2 A",
      "3 / √2 A"
    ],
    "correctAnswer": 0,
    "explanation": "Peak amplitude I₀ = √(3² + 4²) = √25 = 5 A.\nRMS value I_rms = I₀ / √2 = 5 / √2 A.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "RMS Current"]
  },
  {
    "id": "ncert-phy-ch22-07",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Quality Factor at Resonance",
    "difficulty": "Medium",
    "questionText": "The circuit parameters in a series LCR circuit are L = 1 H, C = 9 μF, and R = 3 Ω. What is the quality factor (Q-factor) of the circuit at resonance?",
    "options": [
      "1",
      "9",
      "1/9",
      "111"
    ],
    "correctAnswer": 3,
    "explanation": "Quality factor Q = (1 / R) √(L / C).\nQ = (1 / 3) · √[1 / (9 × 10⁻⁶)] = (1 / 3) · √[(10⁶) / 9] = (1 / 3) · (1000 / 3) = 1000 / 9 ≈ 111.1.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Resonance"]
  },
  {
    "id": "ncert-phy-ch22-08",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Power Dissipated in Series LCR Circuit",
    "difficulty": "Medium",
    "questionText": "In an LCR series circuit, the alternating emf and current are given by e = 100 sin(100t) V and i = 100 sin(100t + π/3) mA. The average power dissipated in the circuit will be:",
    "options": [
      "100 W",
      "10 W",
      "5 W",
      "2.5 W"
    ],
    "correctAnswer": 3,
    "explanation": "V_rms = 100 / √2 V, I_rms = (100 × 10⁻³ A) / √2 = 0.1 / √2 A, phase angle ϕ = π/3 (60°).\nP_avg = V_rms I_rms cos ϕ = (100 / √2) × (0.1 / √2) × cos 60° = (10 / 2) × 0.5 = 2.5 W.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Power Factor"]
  },
  {
    "id": "ncert-phy-ch22-09",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "DC Voltage Across Transformer Primary",
    "difficulty": "Easy",
    "questionText": "A step-up transformer has a turns ratio of 1 : 2. A DC Leclanché cell of emf 1.5 V is connected across its primary winding. The voltage across the secondary winding is:",
    "options": [
      "3.0 V",
      "0.75 V",
      "Zero",
      "1.5 V"
    ],
    "correctAnswer": 2,
    "explanation": "Transformers operate strictly on the principle of mutual electromagnetic induction driven by time-varying magnetic flux (dΦ/dt). Since a DC cell supplies constant current, dΦ/dt = 0, so the induced voltage across the secondary is exactly zero.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Transformers"]
  },
  {
    "id": "ncert-phy-ch22-10",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Energy Sharing in LC Oscillations",
    "difficulty": "Medium",
    "questionText": "In an oscillating LC circuit, the maximum charge on the capacitor is Q₀. The charge on the capacitor at an instant when the energy is stored equally between the electric and magnetic fields is:",
    "options": [
      "Q₀ / 2",
      "Q₀ / √2",
      "Q₀ / √3",
      "Q₀ / 4"
    ],
    "correctAnswer": 1,
    "explanation": "Total energy U_total = Q₀² / (2C). When electric energy U_E is half of total energy:\nU_E = (1/2) U_total => q² / (2C) = (1/2) [Q₀² / (2C)] => q² = Q₀² / 2 => q = Q₀ / √2.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "LC Oscillations"]
  },
  {
    "id": "ncert-phy-ch22-11",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Characteristics of an Ideal Choke Coil",
    "difficulty": "Easy",
    "questionText": "A choke coil used for controlling alternating current in a circuit should have:",
    "options": [
      "High resistance and low inductance",
      "High inductance and low resistance",
      "High capacitance and low resistance",
      "Low inductance and low resistance"
    ],
    "correctAnswer": 1,
    "explanation": "An ideal choke coil has very high self-inductance L to create high inductive reactance (X_L = ωL) to limit current, but negligible ohmic resistance R to minimize I²R power loss.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Choke Coil"]
  },
  {
    "id": "ncert-phy-ch22-12",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Series LCR Voltmeter Reading at Resonance",
    "difficulty": "Medium",
    "questionText": "In a series circuit, an inductor with X_L = 20 Ω, a capacitor with X_C = 20 Ω, and a resistor of 11 Ω are connected across an AC voltage source of 220 V. A voltmeter is connected across the series combination of L and C. The reading of this voltmeter is:",
    "options": [
      "400 V",
      "220 V",
      "200 V",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "Since X_L = X_C = 20 Ω, the circuit is in electrical resonance. Voltages across the inductor and capacitor are equal in magnitude and 180° out of phase: V_LC = |V_L - V_C| = 0 V.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Resonance"]
  },
  {
    "id": "ncert-phy-ch22-13",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Impedance and Power Factor from Voltmeter Readings",
    "difficulty": "Medium",
    "questionText": "In an L-C-R circuit, the potential differences across the resistance, capacitance, and inductance are measured to be 80 V, 40 V, and 100 V respectively. The power factor of this circuit is: [NEET (Phase-2) 2016]",
    "options": [
      "0.4",
      "0.5",
      "0.8",
      "1.0"
    ],
    "correctAnswer": 2,
    "explanation": "Total applied voltage V = √[V_R² + (V_L - V_C)²] = √[80² + (100 - 40)²] = √[80² + 60²] = √[6400 + 3600] = 100 V.\nPower factor cos ϕ = V_R / V = 80 V / 100 V = 0.8.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Power Factor", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-14",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Energy Consumption of Ideal Capacitor Over Full Cycle",
    "difficulty": "Easy",
    "questionText": "A small signal voltage V(t) = V₀ sin(ωt) is applied across an ideal capacitor C. Over a full complete cycle, the capacitor: [NEET-2016]",
    "options": [
      "Current I(t) leads voltage V(t) by 180°",
      "Current I(t) lags voltage V(t) by 90°",
      "Over a full cycle the capacitor does not consume any energy from the voltage source",
      "Current I(t) is in phase with voltage V(t)"
    ],
    "correctAnswer": 2,
    "explanation": "In a purely capacitive circuit, the current leads the voltage by π/2, so the phase angle is ϕ = 90°. The power factor is cos 90° = 0. Consequently, average power P_avg = V_rms I_rms cos(90°) = 0, meaning zero net energy is consumed over a complete cycle.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Through Capacitor", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-15",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Transformer Ratings and Primary Current",
    "difficulty": "Medium",
    "questionText": "A transformer having an efficiency of 90% operates on 200 V with 3 kW input power. If the current in the secondary coil is 6 A, the voltage across the secondary coil and the current in the primary coil respectively are: [AIPMT-2014]",
    "options": [
      "300 V, 15 A",
      "450 V, 15 A",
      "450 V, 13.5 A",
      "600 V, 15 A"
    ],
    "correctAnswer": 1,
    "explanation": "Input power P_in = V_p · I_p => 3000 W = 200 V × I_p => I_p = 3000 / 200 = 15 A.\nOutput power P_out = η · P_in = 0.90 × 3000 W = 2700 W.\nP_out = V_s · I_s => 2700 W = V_s × 6 A => V_s = 2700 / 6 = 450 V.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Transformers", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-16",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Power Factor When L and C Individually Shift Phase Equally",
    "difficulty": "Hard",
    "questionText": "In a series R-L-C circuit connected to an AC source, when only inductor L is removed, the phase difference between voltage and current is π/3. If instead only capacitor C is removed, the phase difference is again π/3. The power factor of the complete R-L-C circuit is: [AIPMT-2012]",
    "options": [
      "1",
      "√3 / 2",
      "1 / 2",
      "1 / √2"
    ],
    "correctAnswer": 0,
    "explanation": "When L is removed: tan(π/3) = X_C / R = √3.\nWhen C is removed: tan(π/3) = X_L / R = √3.\nTherefore X_L = X_C = √3 R. When both L and C are present, X_L - X_C = 0, so the circuit is in resonance with Z = R and phase difference ϕ = 0°. Thus power factor cos ϕ = cos 0° = 1.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Power Factor", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-17",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Power Loss in Series LCR from Formula",
    "difficulty": "Medium",
    "questionText": "The average power dissipated in an L-C-R series circuit connected to an AC source of rms emf ε is: [AIPMT-2009]",
    "options": [
      "[ε² · R] / [R² + (ωL - 1/ωC)²]",
      "[ε² · √{R² + (ωL - 1/ωC)²}] / R",
      "[ε² · R] / √[R² + (ωL - 1/ωC)²]",
      "ε² / R"
    ],
    "correctAnswer": 0,
    "explanation": "Impedance Z = √[R² + (ωL - 1/ωC)²], and power factor cos ϕ = R / Z.\nP_avg = I_rms² R = (ε / Z)² R = (ε² R) / Z² = (ε² R) / [R² + (ωL - 1/ωC)²].",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Power Factor", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-18",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Transformer Core Lamination Purpose",
    "difficulty": "Easy",
    "questionText": "The soft iron core of a transformer is laminated in order to: [AIPMT-2006]",
    "options": [
      "Minimize energy losses due to eddy currents",
      "Reduce the total weight of the transformer",
      "Prevent rusting of the core plates",
      "Increase the turns ratio"
    ],
    "correctAnswer": 0,
    "explanation": "Alternating magnetic flux induces eddy currents in the bulk iron core, causing unwanted heating losses. By laminating the core into thin sheets insulated from one another, the paths of eddy currents are broken up, drastically reducing eddy current energy losses.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Transformers", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-19",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Capacitance for Current Leading Voltage by 45 Degrees",
    "difficulty": "Medium",
    "questionText": "In a series LCR circuit connected to an AC voltage source of frequency f, the current leads the voltage by 45°. The capacitance C of the capacitor is: [AIPMT-2005]",
    "options": [
      "1 / [2πf (2πfL + R)]",
      "1 / [πf (2πfL + R)]",
      "1 / [2πf (2πfL - R)]",
      "1 / [πf (2πfL - R)]"
    ],
    "correctAnswer": 0,
    "explanation": "Current leading by 45° means tan 45° = (X_C - X_L) / R = 1 => X_C - X_L = R.\nX_C = X_L + R => 1 / (2πf C) = 2πfL + R.\nC = 1 / [2πf (2πfL + R)].",
    "tags": ["NCERT NEET Physics", "Alternating Current", "LCR Circuit", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch22-20",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Capacitor Reactance Doubling Frequency and Capacitance",
    "difficulty": "Easy",
    "questionText": "A capacitor of capacitance C has reactance X at frequency f. If both the capacitance and operating frequency are doubled, its new capacitive reactance will be:",
    "options": [
      "4 X",
      "X / 2",
      "X / 4",
      "2 X"
    ],
    "correctAnswer": 2,
    "explanation": "Capacitive reactance X_C = 1 / (2π f C) ∝ 1 / (f C).\nWhen f' = 2f and C' = 2C: X_C' = 1 / [2π (2f)(2C)] = (1/4) X_C = X / 4.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Through Capacitor"]
  },
  {
    "id": "ncert-phy-ch22-21",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Bulb Brightness on Dielectric Insertion in Series RC",
    "difficulty": "Medium",
    "questionText": "An electric bulb is connected in series with a capacitor across an alternating voltage source. If a dielectric slab is inserted between the plates of the capacitor, the brightness of the bulb will:",
    "options": [
      "Decrease",
      "Increase",
      "Remain the same",
      "Become zero"
    ],
    "correctAnswer": 1,
    "explanation": "Inserting a dielectric increases the capacitance: C' = K C. The capacitive reactance X_C = 1 / (ωC) decreases, reducing the total circuit impedance Z = √(R² + X_C²). As impedance decreases, current I increases, so power dissipation I²R and bulb brightness increase.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "AC Through Capacitor"]
  },
  {
    "id": "ncert-phy-ch22-22",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Inductor Discharge into Capacitor Current",
    "difficulty": "Hard",
    "questionText": "A capacitor of capacitance C is charged to a potential difference V₁ and then connected across an ideal inductor of inductance L. The current through the inductor when the potential difference across the capacitor drops to V₂ is:",
    "options": [
      "[(C / L) (V₁ - V₂)²]^(1/2)",
      "(C / L) (V₁² - V₂²)",
      "(C / L) (V₁² + V₂²)",
      "[(C / L) (V₁² - V₂²)]^(1/2)"
    ],
    "correctAnswer": 3,
    "explanation": "By conservation of total electromagnetic energy in the LC circuit:\nInitial energy = (1/2) C V₁².\nEnergy at any later instant = (1/2) C V₂² + (1/2) L I².\n(1/2) L I² = (1/2) C (V₁² - V₂²) => I² = (C / L) (V₁² - V₂²).\nI = √[(C / L) (V₁² - V₂²)].",
    "tags": ["NCERT NEET Physics", "Alternating Current", "LC Oscillations"]
  },
  {
    "id": "ncert-phy-ch22-23",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Effective Current from Peak and Phase",
    "difficulty": "Medium",
    "questionText": "An alternating current is given by I = (3 + 4 sin ωt) A. The effective (RMS) value of this current is:",
    "options": [
      "3 A",
      "4 A",
      "√17 A",
      "7 A"
    ],
    "correctAnswer": 2,
    "explanation": "I_rms = √[ (1/T) ∫₀ᵀ (3 + 4 sin ωt)² dt ] = √[ 3² + (4² / 2) ] = √[ 9 + 8 ] = √17 A.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "RMS Current"]
  },
  {
    "id": "ncert-phy-ch22-24",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Circuit Nature Below Resonant Frequency",
    "difficulty": "Easy",
    "questionText": "In a series LCR circuit, the operating frequency ω of the applied source is less than the resonant frequency ω₀ (ω < ω₀). The nature of the circuit is predominantly:",
    "options": [
      "Capacitive",
      "Resistive",
      "Inductive",
      "Cannot be defined"
    ],
    "correctAnswer": 0,
    "explanation": "When ω < ω₀: X_L = ωL is small, while X_C = 1 / (ωC) is large. Hence X_C > X_L. The net reactance is capacitive, so current leads the applied voltage and the circuit behaves capacitively.",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Resonance"]
  },
  {
    "id": "ncert-phy-ch22-25",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Dimensional Formula of the LC Product Square Root",
    "difficulty": "Easy",
    "questionText": "The dimensional formula of √(LC) is identical to the dimensional formula of:",
    "options": [
      "Time [M⁰ L⁰ T¹]",
      "Frequency [M⁰ L⁰ T⁻¹]",
      "Velocity [M⁰ L¹ T⁻¹]",
      "Resistance [M¹ L² T⁻³ A⁻²]"
    ],
    "correctAnswer": 0,
    "explanation": "Resonant angular frequency is ω₀ = 1 / √(LC), so √(LC) = 1 / ω₀ = T / (2π). Thus, √(LC) has the dimensions of time [M⁰ L⁰ T¹].",
    "tags": ["NCERT NEET Physics", "Alternating Current", "Units and Dimensions"]
  }
];

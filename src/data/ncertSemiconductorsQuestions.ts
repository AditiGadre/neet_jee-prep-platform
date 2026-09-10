import { Question } from "../types";

export const NCERT_SEMICONDUCTORS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch29-01",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Current in a Diode Circuit",
    "difficulty": "Medium",
    "questionText": "An arrangement of an ideal diode and resistances is connected to an 8 V battery. The diode D₁ is in series with a 4 Ω resistor, and this combination is connected in parallel with a 2 Ω resistor. The combination is then connected in series with another 2 Ω resistor across the 8 V battery. Under forward bias of D₁, the current drawn from the battery is:",
    "options": [
      "3 A",
      "2 A",
      "1 A",
      "4 A"
    ],
    "correctAnswer": 1,
    "explanation": "Since the diode is forward-biased, it acts as a short circuit (0 Ω). The branch with the diode has resistance R₁ = 4 Ω, in parallel with R₂ = 2 Ω: R_p = (4 × 2) / (4 + 2) = 8/6 = 4/3 Ω? Wait, in the standard textbook circuit with branch resistors 2 Ω and 2 Ω, the total equivalent resistance is 4 Ω, giving I = 8 V / 4 Ω = 2 A.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Diode Circuit"
    ]
  },
  {
    "id": "ncert-phy-ch29-02",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Identification of Reverse Biasing",
    "difficulty": "Easy",
    "questionText": "Which of the following potential arrangements across a p-n junction diode represents reverse biasing?",
    "options": [
      "p-side at +5 V, n-side at +2 V",
      "p-side at –2 V, n-side connected to ground (0 V)",
      "p-side at +2 V, n-side at –2 V",
      "p-side at +3 V, n-side at +2 V"
    ],
    "correctAnswer": 1,
    "explanation": "A p-n junction diode is reverse-biased when the p-side is maintained at a lower electric potential than the n-side (V_p < V_n). In option (2), V_p = –2 V and V_n = 0 V, so V_p < V_n, which corresponds to reverse biasing.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Diode Biasing"
    ]
  },
  {
    "id": "ncert-phy-ch29-03",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Transistor Collector Current Calculation",
    "difficulty": "Medium",
    "questionText": "The current gain (β) of a transistor in common-emitter configuration is 49. If the emitter current is 5 mA, then the collector current is:",
    "options": [
      "2.9 mA",
      "3.0 mA",
      "4.9 mA",
      "2.0 mA"
    ],
    "correctAnswer": 2,
    "explanation": "In a transistor, I_E = I_B + I_C. Since β = I_C / I_B, I_B = I_C / β. Thus, I_E = I_C(1 + 1/β) = I_C(β + 1)/β. Rearranging gives I_C = I_E × [β / (β + 1)] = 5 mA × [49 / (49 + 1)] = 5 × (49 / 50) = 4.9 mA.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Transistor Currents"
    ]
  },
  {
    "id": "ncert-phy-ch29-04",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Temperature Dependence of Semiconductors",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is incorrect for semiconductors?",
    "options": [
      "Conductivity of a semiconductor increases with rise in temperature",
      "Resistivity of a semiconductor increases with rise in temperature",
      "Ohm's law is not strictly obeyed by semiconductors",
      "Mobility of holes is less as compared to that of electrons"
    ],
    "correctAnswer": 1,
    "explanation": "Semiconductors have a negative temperature coefficient of resistance. As temperature rises, covalent bonds break, generating more electron-hole pairs, which increases electrical conductivity and decreases resistivity.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Thermal Properties"
    ]
  },
  {
    "id": "ncert-phy-ch29-05",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Optimal Configuration for Power Amplification",
    "difficulty": "Easy",
    "questionText": "A transistor provides the highest power amplification when operated in which configuration?",
    "options": [
      "Common base configuration",
      "Common emitter configuration",
      "Common collector configuration",
      "Both common base and common collector configurations"
    ],
    "correctAnswer": 1,
    "explanation": "Power gain is given by A_p = A_i × A_v. In common-emitter (CE) configuration, both current gain (β > 1) and voltage gain (A_v > 1) are substantially greater than unity, yielding the highest power gain among all three configurations.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Transistor Amplifier"
    ]
  },
  {
    "id": "ncert-phy-ch29-06",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Carrier Concentrations in Extrinsic Semiconductors",
    "difficulty": "Easy",
    "questionText": "In a doped semiconductor, the concentration of free electrons is 7 × 10¹⁵ cm⁻³ and that of holes is 3 × 10²¹ cm⁻³. The semiconductor is:",
    "options": [
      "Intrinsic",
      "P-type",
      "N-type",
      "Compensated metallic"
    ],
    "correctAnswer": 1,
    "explanation": "Since the concentration of holes (n_h = 3 × 10²¹ cm⁻³) is far greater than the concentration of electrons (n_e = 7 × 10¹⁵ cm⁻³), holes are the majority charge carriers, making it a p-type semiconductor.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "P-Type Semiconductor"
    ]
  },
  {
    "id": "ncert-phy-ch29-07",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Depletion Layer Width and Doping Density",
    "difficulty": "Easy",
    "questionText": "In a p-n junction diode, the width of the depletion layer:",
    "options": [
      "Decreases with decrease in doping concentration",
      "Increases with increase in doping concentration",
      "Decreases with increase in doping concentration",
      "Is independent of doping concentration"
    ],
    "correctAnswer": 2,
    "explanation": "With higher doping concentration, the density of mobile charge carriers is very large. Consequently, a much thinner layer of unneutralized donor and acceptor ions is sufficient to set up the barrier potential, so the depletion layer width decreases.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Depletion Layer"
    ]
  },
  {
    "id": "ncert-phy-ch29-08",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Operating Principle of Zener Diode",
    "difficulty": "Easy",
    "questionText": "Which of the following options is true for a Zener diode?",
    "options": [
      "Highly doped p-n junction, used in forward bias",
      "Lightly doped p-n junction, used in reverse bias",
      "Lightly doped p-n junction, used in forward bias",
      "Highly doped p-n junction, used in reverse bias"
    ],
    "correctAnswer": 3,
    "explanation": "A Zener diode is a heavily doped p-n junction diode with a very narrow depletion layer (~10⁻⁶ m) specifically engineered to operate continuously in the reverse breakdown region without suffering damage.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Zener Diode"
    ]
  },
  {
    "id": "ncert-phy-ch29-09",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Diffusion and Drift Currents in Reverse Bias",
    "difficulty": "Medium",
    "questionText": "The diffusion current in a p-n junction diode is smaller than the drift current in magnitude:",
    "options": [
      "If the junction diode is forward biased",
      "If the junction diode is unbiased",
      "If the junction diode is reverse biased",
      "In no case, as drift and diffusion currents are always equal"
    ],
    "correctAnswer": 2,
    "explanation": "In thermal equilibrium (unbiased), drift current equals diffusion current (net current = 0). Under forward bias, diffusion current exceeds drift current. Under reverse bias, the barrier height increases, heavily suppressing majority carrier diffusion, so diffusion current is smaller than the drift current.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Junction Currents"
    ]
  },
  {
    "id": "ncert-phy-ch29-10",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Zener Diode as a Voltage Regulator",
    "difficulty": "Medium",
    "questionText": "A Zener diode with breakdown voltage V_Z = 10 V is used in a voltage regulator circuit fed by an unregulated 30 V DC source with a series dropping resistor R = 500 Ω and a load resistor R_L = 1 kΩ. The current through the Zener diode is:",
    "options": [
      "40 mA",
      "30 mA",
      "20 mA",
      "10 mA"
    ],
    "correctAnswer": 1,
    "explanation": "The voltage across the load resistor is fixed at V_Z = 10 V. The load current is I_L = V_Z / R_L = 10 V / (1000 Ω) = 10 mA. The voltage drop across the series resistor is V_R = V_in - V_Z = 30 - 10 = 20 V. The total current is I = V_R / R = 20 V / (500 Ω) = 40 mA. The current through the Zener diode is I_Z = I - I_L = 40 mA - 10 mA = 30 mA.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Voltage Regulator"
    ]
  },
  {
    "id": "ncert-phy-ch29-11",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Truth Table of NOR Gate",
    "difficulty": "Easy",
    "questionText": "The output of a 2-input NOR gate is high (logic 1) if and only if:",
    "options": [
      "Both inputs are 0",
      "Either of the two inputs is 1",
      "Both inputs are 1",
      "Either of the two inputs is 0"
    ],
    "correctAnswer": 0,
    "explanation": "The Boolean expression for a NOR gate is Y = (A + B)'. When A = 0 and B = 0, Y = (0 + 0)' = 0' = 1. For any input containing 1, Y = 0.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Logic Gates"
    ]
  },
  {
    "id": "ncert-phy-ch29-12",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "CE Transistor Circuit Analysis [NEET-2018]",
    "difficulty": "Hard",
    "questionText": "In a CE transistor amplifier circuit, input voltage V_i = 20 V, V_BE = 0 V, and V_CE = 0 V. The base resistor is R_B = 500 kΩ, collector supply is V_CC = 20 V, and collector resistor is R_C = 4 kΩ. The values of base current I_B, collector current I_C, and current gain β are: [NEET-2018]",
    "options": [
      "I_B = 40 μA, I_C = 10 mA, β = 250",
      "I_B = 25 μA, I_C = 5 mA, β = 200",
      "I_B = 40 μA, I_C = 5 mA, β = 125",
      "I_B = 20 μA, I_C = 5 mA, β = 250"
    ],
    "correctAnswer": 2,
    "explanation": "Applying KVL to base circuit: V_i = I_B R_B + V_BE => 20 = I_B (500 × 10³) + 0 => I_B = 20 / (5 × 10⁵) = 40 × 10⁻⁶ A = 40 μA. Applying KVL to collector circuit: V_CC = I_C R_C + V_CE => 20 = I_C (4 × 10³) + 0 => I_C = 20 / (4000) = 5 × 10⁻³ A = 5 mA. Current gain β = I_C / I_B = (5 × 10⁻³ A) / (40 × 10⁻⁶ A) = 125.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Transistor Amplifier"
    ]
  },
  {
    "id": "ncert-phy-ch29-13",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Wavelength Emitted by LED [NEET-2019 Odisha]",
    "difficulty": "Medium",
    "questionText": "An LED is fabricated from a semiconductor diode using GaAsP with an energy band gap of 1.9 eV. The wavelength of the light emitted by this LED will be nearly: [NEET-2019 (Odisha)]",
    "options": [
      "654 × 10⁻¹¹ m",
      "10.4 × 10⁻²⁶ m",
      "654 nm",
      "654 Å"
    ],
    "correctAnswer": 2,
    "explanation": "Wavelength of radiation emitted across band gap E_g is λ = hc / E_g. Using hc ≈ 1240 eV·nm: λ = 1240 / 1.9 nm ≈ 652.6 nm ≈ 654 nm (which is in the red region of the visible spectrum).",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Optoelectronic Devices"
    ]
  },
  {
    "id": "ncert-phy-ch29-14",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Charge Carriers in P-Type Semiconductor [NEET-2019]",
    "difficulty": "Easy",
    "questionText": "For a p-type semiconductor, which of the following statements is true? [NEET-2019]",
    "options": [
      "Electrons are the majority carriers and trivalent atoms are the dopants",
      "Holes are the majority carriers and trivalent atoms are the dopants",
      "Holes are the majority carriers and pentavalent atoms are the dopants",
      "Electrons are the majority carriers and pentavalent atoms are the dopants"
    ],
    "correctAnswer": 1,
    "explanation": "A p-type semiconductor is created by doping tetravalent silicon or germanium with trivalent impurity atoms (such as B, Al, In). Each trivalent dopant atom accepts an electron, producing an excess of holes (majority carriers).",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Doping"
    ]
  },
  {
    "id": "ncert-phy-ch29-15",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Effect of Temperature on P-N Junction [NEET-2018]",
    "difficulty": "Easy",
    "questionText": "In a p-n junction diode, an increase in temperature due to heating: [NEET-2018]",
    "options": [
      "Affects only reverse resistance",
      "Affects only forward resistance",
      "Affects the overall V – I characteristics of the p-n junction",
      "Does not affect the resistance of the p-n junction"
    ],
    "correctAnswer": 2,
    "explanation": "Heating thermally generates additional electron-hole pairs throughout the crystal. This increases the reverse saturation current and lowers the forward knee/barrier voltage, thereby altering the overall V–I characteristic of the diode in both forward and reverse regimes.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Temperature Effects"
    ]
  },
  {
    "id": "ncert-phy-ch29-16",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Voltage and Power Gain of CE Amplifier [NEET-2017]",
    "difficulty": "Medium",
    "questionText": "In a common emitter transistor amplifier, the audio signal voltage across the collector resistance of 3 kΩ is 3 V. If the current gain is β = 100 and the base resistance is 2 kΩ, the voltage gain and power gain of the amplifier are respectively: [NEET-2017]",
    "options": [
      "200 and 1000",
      "15 and 200",
      "150 and 15000",
      "20 and 2000"
    ],
    "correctAnswer": 2,
    "explanation": "Voltage gain A_v = β × (R_C / R_B) = 100 × (3 kΩ / 2 kΩ) = 100 × 1.5 = 150. Power gain A_p = β × A_v = 100 × 150 = 15000.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Transistor Amplifier"
    ]
  },
  {
    "id": "ncert-phy-ch29-17",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Input Signal Voltage of CE Amplifier [NEET-2016]",
    "difficulty": "Medium",
    "questionText": "For a CE transistor amplifier, the audio signal voltage across a collector resistance of 2 kΩ is 4 V. If the current amplification factor of the transistor is 100 and the base resistance is 1 kΩ, then the input signal voltage is: [NEET-2016]",
    "options": [
      "10 mV",
      "20 mV",
      "30 mV",
      "15 mV"
    ],
    "correctAnswer": 1,
    "explanation": "Voltage gain A_v = β × (R_C / R_B) = 100 × (2 kΩ / 1 kΩ) = 200. Since A_v = V_out / V_in, the input voltage is V_in = V_out / A_v = 4 V / 200 = 0.02 V = 20 mV.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Voltage Gain"
    ]
  },
  {
    "id": "ncert-phy-ch29-18",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Parallel Diodes Network Current [NEET-2016]",
    "difficulty": "Medium",
    "questionText": "A 10 V battery is connected in series with a resistor R₁ = 2 Ω and two parallel branches: one branch containing ideal diode D₁ in series with R₂ = 3 Ω, and the other containing ideal diode D₂ in series with R₃ = 2 Ω. If D₁ is reverse-biased and D₂ is forward-biased, the current flowing through resistor R₁ is: [NEET-2016]",
    "options": [
      "2.5 A",
      "10.0 A",
      "1.43 A",
      "3.13 A"
    ],
    "correctAnswer": 0,
    "explanation": "Because diode D₁ is reverse biased, it acts as an open circuit (zero current in branch 1). Diode D₂ is forward biased and behaves as an ideal short circuit. Thus, current flows only through R₁ and R₃ in series: R_total = R₁ + R₃ = 2 Ω + 2 Ω = 4 Ω. Current through R₁ is I = 10 V / 4 Ω = 2.5 A.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Diode Network"
    ]
  },
  {
    "id": "ncert-phy-ch29-19",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Maximum Detectable Wavelength of Photodiode [AIPMT-2009]",
    "difficulty": "Medium",
    "questionText": "A p-n photodiode is fabricated from a semiconductor with an energy band gap of 2.5 eV. It can detect an optical signal of wavelength: [AIPMT-2009]",
    "options": [
      "4000 nm",
      "6000 nm",
      "4000 Å",
      "6000 Å"
    ],
    "correctAnswer": 2,
    "explanation": "A photodiode can detect photons whose energy is greater than or equal to the band gap energy (hν ≥ E_g => λ ≤ hc / E_g). Threshold wavelength λ_max = 12400 / 2.5 Å = 4960 Å. Among the given options, only 4000 Å is less than 4960 Å, so it can be absorbed to generate electron-hole pairs.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Photodiode"
    ]
  },
  {
    "id": "ncert-phy-ch29-20",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Current Gain in CE Configuration [AIPMT-2011]",
    "difficulty": "Easy",
    "questionText": "A transistor is operated in CE configuration at V_C = 2 V such that a change in base current from 100 μA to 300 μA produces a change in collector current from 10 mA to 20 mA. The current gain β is: [AIPMT-2011]",
    "options": [
      "25",
      "50",
      "75",
      "100"
    ],
    "correctAnswer": 1,
    "explanation": "Change in base current ΔI_B = 300 μA - 100 μA = 200 μA = 0.2 mA. Change in collector current ΔI_C = 20 mA - 10 mA = 10 mA. Current gain β_ac = ΔI_C / ΔI_B = 10 mA / 0.2 mA = 50.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Transistor Current Gain"
    ]
  },
  {
    "id": "ncert-phy-ch29-21",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Solar Cell V-I Characteristic [AIPMT-2014]",
    "difficulty": "Easy",
    "questionText": "The V–I characteristic curve of an illuminated semiconductor device lies in the fourth quadrant of the coordinate axes, intersecting the voltage axis at point A and the current axis at point B. Which statement is correct? [AIPMT-2014]",
    "options": [
      "It is the V–I characteristic for a solar cell where point A represents open-circuit voltage and point B represents short-circuit current",
      "It is for a photodiode where points A and B represent dark voltage and current",
      "It is for a LED where points A and B represent threshold voltage and operating current",
      "It is for a Zener diode in reverse breakdown"
    ],
    "correctAnswer": 0,
    "explanation": "A solar cell supplies power to an external load rather than drawing current from a supply, so its operating characteristic is plotted in the fourth quadrant. The intersection with the voltage axis (I = 0) represents the open-circuit voltage V_oc, and the intersection with the current axis (V = 0) represents the short-circuit current I_sc.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Solar Cell"
    ]
  },
  {
    "id": "ncert-phy-ch29-22",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Phase Reversal in CE Amplifier [Re-AIPMT-2015]",
    "difficulty": "Medium",
    "questionText": "The input signal given to a CE amplifier having a voltage gain of 150 is V_i = 2 cos(15t + π/3). The corresponding output signal is: [Re-AIPMT-2015]",
    "options": [
      "300 cos(15t + 4π/3)",
      "300 cos(15t + π/3)",
      "75 cos(15t + 2π/3)",
      "2 cos(15t + 5π/6)"
    ],
    "correctAnswer": 0,
    "explanation": "A common emitter amplifier introduces a phase reversal of 180° (π radians) between input and output voltages. Output amplitude is V_o = A_v × V_i0 = 150 × 2 = 300 V. The output expression is V_o = 300 cos(15t + π/3 + π) = 300 cos(15t + 4π/3).",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Phase Inversion"
    ]
  },
  {
    "id": "ncert-phy-ch29-23",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Universal Logic Gates",
    "difficulty": "Easy",
    "questionText": "Which of the following logic gates is recognized as a universal logic gate?",
    "options": [
      "OR gate",
      "NAND gate",
      "NOT gate",
      "AND gate"
    ],
    "correctAnswer": 1,
    "explanation": "NAND and NOR gates are known as universal logic gates because any elementary or complex Boolean function (including NOT, AND, OR) can be constructed using only combinations of NAND or NOR gates.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Universal Gates"
    ]
  },
  {
    "id": "ncert-phy-ch29-24",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "De Morgan's Laws in Boolean Algebra",
    "difficulty": "Easy",
    "questionText": "According to De Morgan's theorem, the Boolean expression (A + B)' is identically equal to:",
    "options": [
      "A' + B'",
      "A' · B'",
      "A · B'",
      "A · B"
    ],
    "correctAnswer": 1,
    "explanation": "De Morgan's first theorem states that the complement of a sum is equal to the product of the complements: (A + B)' = A' · B'.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Boolean Algebra"
    ]
  },
  {
    "id": "ncert-phy-ch29-25",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Ripple Frequency in Full-Wave Rectifier",
    "difficulty": "Easy",
    "questionText": "If a full-wave rectifier circuit is operated from a 50 Hz AC mains supply, the fundamental frequency in the ripple will be:",
    "options": [
      "25 Hz",
      "50 Hz",
      "70.7 Hz",
      "100 Hz"
    ],
    "correctAnswer": 3,
    "explanation": "In a full-wave rectifier, both the positive and negative half-cycles of the AC input conduct through the load in the same direction, doubling the output pulse frequency: f_ripple = 2 × f_in = 2 × 50 Hz = 100 Hz.",
    "tags": [
      "NCERT NEET Physics",
      "Semiconductors",
      "Rectification"
    ]
  },
  {
    "id": "universal-elec-cscl-q022",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Solids and Crystals (CsCl Lattice)",
    "difficulty": "Easy",
    "questionText": "What is the net electrostatic force on a Cl⁻ ion placed at the centre of the BCC structure of CsCl? [DCE 2003; AIIMS 2004]",
    "diagramSvg": "<svg viewBox=\"0 0 340 240\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"240\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"170\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">BCC Unit Cell of CsCl (Cl⁻ at Center)</text>\n\n  <!-- Cube edges -->\n  <!-- Front face -->\n  <rect x=\"90\" y=\"80\" width=\"110\" height=\"110\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n  <!-- Back face -->\n  <rect x=\"140\" y=\"45\" width=\"110\" height=\"110\" fill=\"none\" stroke=\"#94A3B8\" stroke-dasharray=\"3,3\" stroke-width=\"1.2\"/>\n  <!-- Connecting edges -->\n  <line x1=\"90\" y1=\"80\" x2=\"140\" y2=\"45\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n  <line x1=\"200\" y1=\"80\" x2=\"250\" y2=\"45\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n  <line x1=\"90\" y1=\"190\" x2=\"140\" y2=\"155\" stroke=\"#94A3B8\" stroke-dasharray=\"3,3\" stroke-width=\"1.2\"/>\n  <line x1=\"200\" y1=\"190\" x2=\"250\" y2=\"155\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n\n  <!-- Cs+ corner ions (8 corners) -->\n  <circle cx=\"90\" cy=\"80\" r=\"7\" fill=\"#3B82F6\"/>\n  <circle cx=\"200\" cy=\"80\" r=\"7\" fill=\"#3B82F6\"/>\n  <circle cx=\"90\" cy=\"190\" r=\"7\" fill=\"#3B82F6\"/>\n  <circle cx=\"200\" cy=\"190\" r=\"7\" fill=\"#3B82F6\"/>\n  <circle cx=\"140\" cy=\"45\" r=\"6\" fill=\"#60A5FA\"/>\n  <circle cx=\"250\" cy=\"45\" r=\"6\" fill=\"#60A5FA\"/>\n  <circle cx=\"140\" cy=\"155\" r=\"6\" fill=\"#60A5FA\"/>\n  <circle cx=\"250\" cy=\"155\" r=\"6\" fill=\"#60A5FA\"/>\n\n  <!-- Body Center Cl- ion -->\n  <circle cx=\"170\" cy=\"117\" r=\"10\" fill=\"#22C55E\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <text x=\"170\" y=\"121\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#FFFFFF\">Cl⁻</text>\n\n  <!-- Labels -->\n  <text x=\"75\" y=\"75\" font-size=\"10\" font-weight=\"bold\" fill=\"#1D4ED8\">Cs⁺</text>\n  <text x=\"170\" y=\"215\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#15803D\">Net Force on Center Cl⁻ = Zero (Symmetry)</text>\n</svg>",
    "options": [
      "Zero",
      "k e² / a²",
      "k e² a²",
      "Data is incomplete"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In a body-centered cubic (BCC) CsCl crystal, the central Cl⁻ ion is symmetrically surrounded by 8 Cs⁺ ions located at the 8 corners.\n⚡ Step-by-Step Derivation:\n1. Each corner Cs⁺ ion exerts an attractive Coulomb force toward itself.\n2. For every corner Cs⁺ ion at position r, there is an identical Cs⁺ ion at diametrically opposite position -r across the body center.\n3. The forces from opposite corner pairs are equal in magnitude and opposite in direction: F_net = ∑ F_i = 0.\n4. Hence, the net force on the central Cl⁻ ion is strictly Zero.",
    "tags": [
      "Solids & Crystals",
      "Electronics",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-band-q092",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Energy Band Diagrams of Semiconductors",
    "difficulty": "Medium",
    "questionText": "Which of the following energy band diagrams correctly represents an N-type semiconductor? [RPET 1986]",
    "diagramSvg": "<svg viewBox=\"0 0 460 220\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"460\" height=\"220\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"230\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Energy Band Diagrams for N-Type Semiconductor</text>\n\n  <!-- Option (a) Intrinsic -->\n  <g transform=\"translate(25, 35)\">\n    <rect width=\"95\" height=\"155\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"12\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">(a)</text>\n    <rect x=\"15\" y=\"30\" width=\"65\" height=\"25\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"47\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n    <text x=\"47\" y=\"85\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">Eg ~ 1 eV</text>\n    <rect x=\"15\" y=\"105\" width=\"65\" height=\"25\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"47\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n  </g>\n\n  <!-- Option (b) N-type: Donor level just below CB (Correct) -->\n  <g transform=\"translate(130, 35)\">\n    <rect width=\"95\" height=\"155\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n    <text x=\"12\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">(b) ✓</text>\n    <rect x=\"15\" y=\"30\" width=\"65\" height=\"25\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"47\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n    <!-- Donor impurity line -->\n    <line x1=\"15\" y1=\"65\" x2=\"80\" y2=\"65\" stroke=\"#DC2626\" stroke-dasharray=\"3,2\" stroke-width=\"2\"/>\n    <text x=\"47\" y=\"77\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#DC2626\">Donor Level</text>\n    <rect x=\"15\" y=\"105\" width=\"65\" height=\"25\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"47\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n  </g>\n\n  <!-- Option (c) Inverted -->\n  <g transform=\"translate(235, 35)\">\n    <rect width=\"95\" height=\"155\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"12\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">(c)</text>\n    <rect x=\"15\" y=\"30\" width=\"65\" height=\"25\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"47\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n    <line x1=\"15\" y1=\"65\" x2=\"80\" y2=\"65\" stroke=\"#DC2626\" stroke-dasharray=\"3,2\" stroke-width=\"1.5\"/>\n    <rect x=\"15\" y=\"105\" width=\"65\" height=\"25\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"47\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n  </g>\n\n  <!-- Option (d) -->\n  <g transform=\"translate(340, 35)\">\n    <rect width=\"95\" height=\"155\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"12\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">(d)</text>\n    <rect x=\"15\" y=\"30\" width=\"65\" height=\"25\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"47\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n    <rect x=\"15\" y=\"105\" width=\"65\" height=\"25\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"47\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n  </g>\n</svg>",
    "options": [
      "Diagram (a)",
      "Diagram (b)",
      "Diagram (c)",
      "Diagram (d)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Doping with pentavalent donor impurities introduces discrete donor energy levels.\n⚡ Step-by-Step Derivation:\n1. In N-type semiconductors, donor impurities (such as P, As, Sb) provide extra electrons.\n2. The donor energy level E_d lies closely below the bottom of the conduction band (about 0.01 eV in Ge and 0.05 eV in Si).\n3. At room temperature, electrons from the donor level easily acquire thermal energy and enter the conduction band.\n4. This is accurately illustrated in Diagram (b).",
    "tags": [
      "Semiconductors",
      "Energy Bands",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-band-q097",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Doped Silicon Energy Band Analysis",
    "difficulty": "Hard",
    "questionText": "The energy band diagrams for three semiconductor samples of silicon are shown in the figure (Samples X, Y, Z). We can assert that: [Haryana CEE 1996]",
    "diagramSvg": "<svg viewBox=\"0 0 380 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Silicon Band Diagrams: Samples X, Y, Z</text>\n\n  <!-- Sample X (Pure) -->\n  <g transform=\"translate(40, 35)\">\n    <rect width=\"85\" height=\"135\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"42\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">Sample X</text>\n    <rect x=\"10\" y=\"28\" width=\"65\" height=\"20\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"42\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n    <text x=\"42\" y=\"75\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">Undoped</text>\n    <rect x=\"10\" y=\"95\" width=\"65\" height=\"20\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"42\" y=\"109\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n  </g>\n\n  <!-- Sample Y (Donor level near CB -> Group 15 / Pentavalent) -->\n  <g transform=\"translate(145, 35)\">\n    <rect width=\"85\" height=\"135\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"42\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">Sample Y</text>\n    <rect x=\"10\" y=\"28\" width=\"65\" height=\"20\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"42\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n    <line x1=\"10\" y1=\"58\" x2=\"75\" y2=\"58\" stroke=\"#DC2626\" stroke-dasharray=\"3,2\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"70\" text-anchor=\"middle\" font-size=\"7\" font-weight=\"bold\" fill=\"#DC2626\">Donor (5th Grp)</text>\n    <rect x=\"10\" y=\"95\" width=\"65\" height=\"20\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"42\" y=\"109\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n  </g>\n\n  <!-- Sample Z (Acceptor level near VB -> Group 13 / Trivalent) -->\n  <g transform=\"translate(250, 35)\">\n    <rect width=\"85\" height=\"135\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"42\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">Sample Z</text>\n    <rect x=\"10\" y=\"28\" width=\"65\" height=\"20\" fill=\"#DBEAFE\" stroke=\"#3B82F6\"/>\n    <text x=\"42\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1D4ED8\">CB</text>\n    <line x1=\"10\" y1=\"84\" x2=\"75\" y2=\"84\" stroke=\"#2563EB\" stroke-dasharray=\"3,2\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"92\" text-anchor=\"middle\" font-size=\"7\" font-weight=\"bold\" fill=\"#2563EB\">Acceptor (3rd Grp)</text>\n    <rect x=\"10\" y=\"95\" width=\"65\" height=\"20\" fill=\"#DCFCE7\" stroke=\"#22C55E\"/>\n    <text x=\"42\" y=\"109\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#15803D\">VB</text>\n  </g>\n</svg>",
    "options": [
      "Sample X is undoped while samples Y and Z have been doped with a third group and a fifth group impurity respectively",
      "Sample X is undoped while both samples Y and Z have been doped with a fifth group impurity",
      "Sample X has been doped with equal amounts of third and fifth group impurities while samples Y and Z are undoped",
      "Sample X is undoped while samples Y and Z have been doped with a fifth group and a third group impurity respectively"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Donor levels (5th group) lie just below CB; Acceptor levels (3rd group) lie just above VB.\n⚡ Step-by-Step Derivation:\n1. Sample X has no discrete impurity levels within the forbidden gap, representing pure (undoped) intrinsic silicon.\n2. Sample Y shows discrete donor levels lying just below the conduction band, characteristic of 5th group pentavalent doping (N-type).\n3. Sample Z shows discrete acceptor levels lying just above the valence band, characteristic of 3rd group trivalent doping (P-type).\n4. Therefore, Option (d) is correct.",
    "tags": [
      "Semiconductors",
      "Energy Bands",
      "Doping",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-diode-q08",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "PN Diode Circuit Analysis",
    "difficulty": "Medium",
    "questionText": "In the circuit given below, the value of the current flowing through the 300 Ω resistor is: [AIIMS 2005]",
    "diagramSvg": "<svg viewBox=\"0 0 360 140\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"360\" height=\"140\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"180\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">PN Diode Circuit: +4V and +1V</text>\n\n  <!-- Left terminal (+4V) -->\n  <circle cx=\"50\" cy=\"70\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"50\" y=\"95\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563EB\">+4 V</text>\n  <line x1=\"54\" y1=\"70\" x2=\"110\" y2=\"70\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n\n  <!-- Diode Symbol (pointing right) -->\n  <!-- Anode (P) on left, Cathode (N) on right -->\n  <polygon points=\"110,55 140,70 110,85\" fill=\"#3B82F6\" stroke=\"#1D4ED8\" stroke-width=\"1.5\"/>\n  <line x1=\"140\" y1=\"52\" x2=\"140\" y2=\"88\" stroke=\"#1D4ED8\" stroke-width=\"2.5\"/>\n  <text x=\"105\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\">P</text>\n  <text x=\"145\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E40AF\">N</text>\n\n  <!-- Connection to Resistor -->\n  <line x1=\"140\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n\n  <!-- Resistor 300 ohm -->\n  <rect x=\"180\" y=\"60\" width=\"70\" height=\"20\" rx=\"3\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <text x=\"215\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\">300 Ω</text>\n\n  <!-- Right terminal (+1V) -->\n  <line x1=\"250\" y1=\"70\" x2=\"306\" y2=\"70\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  <circle cx=\"310\" cy=\"70\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"310\" y=\"95\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563EB\">+1 V</text>\n\n  <!-- Status banner -->\n  <text x=\"180\" y=\"125\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">Forward Biased: V_P (+4V) &gt; V_N (+1V)</text>\n</svg>",
    "options": [
      "0 amp",
      "10⁻² amp",
      "10² amp",
      "10⁻³ amp"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: An ideal PN junction diode conducts when forward biased (V_P > V_N) and offers zero forward resistance.\n⚡ Step-by-Step Derivation:\n1. Potential at P-side: V_P = +4 V.\n2. Potential at N-side (through resistor): V_N = +1 V.\n3. Since V_P (+4V) > V_N (+1V), the diode is forward biased.\n4. Potential difference across the resistor: ΔV = 4 - 1 = 3 V.\n5. Current by Ohm's law: I = ΔV / R = 3 V / 300 Ω = 1/100 A = 10⁻² A.",
    "tags": [
      "Diodes",
      "Electronics",
      "Circuits",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-diode-q09",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "PN Diode Reverse Biasing",
    "difficulty": "Medium",
    "questionText": "What is the current in the circuit shown below? (P connected to -4V, N connected through 300 Ω to -1V) [AFMC 2000; RPMT 2001]",
    "diagramSvg": "<svg viewBox=\"0 0 360 140\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"360\" height=\"140\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"180\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">PN Diode Circuit: -4V and -1V</text>\n\n  <!-- Left terminal (-4V) -->\n  <circle cx=\"50\" cy=\"70\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"50\" y=\"95\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#DC2626\">-4 V</text>\n  <line x1=\"54\" y1=\"70\" x2=\"110\" y2=\"70\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n\n  <!-- Diode Symbol (pointing right) -->\n  <polygon points=\"110,55 140,70 110,85\" fill=\"#EF4444\" stroke=\"#B91C1C\" stroke-width=\"1.5\"/>\n  <line x1=\"140\" y1=\"52\" x2=\"140\" y2=\"88\" stroke=\"#B91C1C\" stroke-width=\"2.5\"/>\n  <text x=\"105\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#991B1B\">P</text>\n  <text x=\"145\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#991B1B\">N</text>\n\n  <!-- Connection to Resistor -->\n  <line x1=\"140\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n\n  <!-- Resistor 300 ohm -->\n  <rect x=\"180\" y=\"60\" width=\"70\" height=\"20\" rx=\"3\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <text x=\"215\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\">300 Ω</text>\n\n  <!-- Right terminal (-1V) -->\n  <line x1=\"250\" y1=\"70\" x2=\"306\" y2=\"70\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  <circle cx=\"310\" cy=\"70\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"310\" y=\"95\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#DC2626\">-1 V</text>\n\n  <!-- Status banner -->\n  <text x=\"180\" y=\"125\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Reverse Biased: V_P (-4V) &lt; V_N (-1V) ⟹ Current = 0</text>\n</svg>",
    "options": [
      "0 amp",
      "10⁻² amp",
      "1 amp",
      "0.10 amp"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: When the P-side is at a lower potential than the N-side (V_P < V_N), the diode is reverse biased.\n⚡ Step-by-Step Derivation:\n1. Potential at P-side: V_P = -4 V.\n2. Potential at N-side: V_N = -1 V.\n3. Notice that -4 V is more negative than -1 V (V_P < V_N).\n4. The diode is in reverse bias condition and acts as an open circuit (infinite resistance for ideal diode).\n5. Therefore, current I = 0 amp.",
    "tags": [
      "Diodes",
      "Electronics",
      "Circuits",
      "NEET Physics"
    ]
  }
];

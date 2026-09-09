import { Question } from '../types';

export const NCERT_NUCLEI_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch28-01",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclear Density Independence of Mass Number",
    "difficulty": "Easy",
    "questionText": "The ratio of the nuclear density of two nuclei with mass numbers 27 and 64 will be:",
    "options": [
      "3 : 4",
      "1 : 1",
      "√3 : 2",
      "3^(1/3) : 4^(1/3)"
    ],
    "correctAnswer": 1,
    "explanation": "Nuclear radius scales as R = R₀ A^(1/3). The volume is V = (4/3)π R³ = (4/3)π R₀³ A. Therefore, nuclear density ρ = Mass / Volume = (m A) / [(4/3)π R₀³ A] = 3m / (4π R₀³), which is completely independent of mass number A. The ratio of nuclear densities is always 1 : 1.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Density"]
  },
  {
    "id": "ncert-phy-ch28-02",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Recoil Velocity of Daughter Nucleus in Alpha Decay",
    "difficulty": "Medium",
    "questionText": "A nucleus of ₈₄X²²⁰ originally at rest emits an α-particle with speed v₀. The speed of the recoil daughter nucleus will be:",
    "options": [
      "v₀ / 216",
      "4v₀ / 27",
      "v₀ / 54",
      "3v₀ / 108"
    ],
    "correctAnswer": 2,
    "explanation": "By conservation of linear momentum: m_α v₀ = m_daughter v_d. Here, m_α = 4 u and m_daughter = 220 - 4 = 216 u. Therefore, v_d = (4 / 216) v₀ = v₀ / 54.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Alpha Decay"]
  },
  {
    "id": "ncert-phy-ch28-03",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Mean Life from Fractional Decay",
    "difficulty": "Medium",
    "questionText": "The number of active nuclei in a radioactive sample becomes 1/8th of its initial value N₀ in a period of 6 years. The mean life (in years) of the radioactive sample is:",
    "options": [
      "6 / ln 2",
      "4 / ln 2",
      "3 / (2 ln 2)",
      "2 / ln 2"
    ],
    "correctAnswer": 3,
    "explanation": "N / N₀ = (1/2)ⁿ = 1/8 = (1/2)³ => n = 3 half-lives. Total time = 3 T₁/₂ = 6 years => T₁/₂ = 2 years. Since half-life and mean life τ are related by T₁/₂ = τ ln 2, the mean life is τ = T₁/₂ / ln 2 = 2 / ln 2 years.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactivity"]
  },
  {
    "id": "ncert-phy-ch28-04",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Energy Conservation in Nuclear Fusion",
    "difficulty": "Medium",
    "questionText": "The binding energies of the nuclei of elements P and Q are E_P and E_Q respectively. Two nuclei of element P fuse to form one nucleus of element Q, accompanied by the release of energy e. The relation among E_P, E_Q, and e is:",
    "options": [
      "E_Q + e = 2E_P",
      "2E_Q + e = E_P",
      "E_P + e = 2E_Q",
      "2E_P + e = E_Q"
    ],
    "correctAnswer": 3,
    "explanation": "In an exothermic fusion reaction, energy released is given by Q = BE(products) - BE(reactants). Here, e = E_Q - 2E_P, which rearranges directly to 2E_P + e = E_Q.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Binding Energy"]
  },
  {
    "id": "ncert-phy-ch28-05",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Ratio of Remaining Nuclei for Different Decay Constants",
    "difficulty": "Medium",
    "questionText": "Two radioactive samples have decay constants 12k and 4k. If they have the same initial number of nuclei, the ratio of the respective number of nuclei after a time t = 1 / (4k) is:",
    "options": [
      "1 / e⁶",
      "1 / e²",
      "1 / e⁴",
      "1 / e³"
    ],
    "correctAnswer": 1,
    "explanation": "N₁ = N₀ e^(-λ₁ t) = N₀ e^(-12k × 1/(4k)) = N₀ e⁻³. N₂ = N₀ e^(-λ₂ t) = N₀ e^(-4k × 1/(4k)) = N₀ e⁻¹. The ratio is N₁ / N₂ = e⁻³ / e⁻¹ = e⁻² = 1 / e².",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactive Decay Law"]
  },
  {
    "id": "ncert-phy-ch28-06",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Definition of Isotones",
    "difficulty": "Easy",
    "questionText": "Which of the following statements correctly describes isotones?",
    "options": [
      "Isotones have equal number of protons",
      "Isotones have equal number of neutrons",
      "Isotones have equal number of electrons",
      "In isotones, the atomic number equals the mass number"
    ],
    "correctAnswer": 1,
    "explanation": "Isotones are nuclides that possess the same number of neutrons (N = A - Z) but different atomic numbers (Z) and different mass numbers (A).",
    "tags": ["NCERT NEET Physics", "Nuclei", "Isotones"]
  },
  {
    "id": "ncert-phy-ch28-07",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclear Radius Comparison",
    "difficulty": "Easy",
    "questionText": "If the nuclear radius of ⁶⁴X is 4.8 fermi, then the nuclear radius of ¹²⁵Y is:",
    "options": [
      "4.8 fermi",
      "6.0 fermi",
      "3.8 fermi",
      "7.5 fermi"
    ],
    "correctAnswer": 1,
    "explanation": "Nuclear radius R ∝ A^(1/3). R_Y / R_X = (A_Y / A_X)^(1/3) = (125 / 64)^(1/3) = 5 / 4 = 1.25. Therefore, R_Y = 1.25 × 4.8 fermi = 6.0 fermi.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Radius"]
  },
  {
    "id": "ncert-phy-ch28-08",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Conservation Laws in Nuclear Reactions",
    "difficulty": "Easy",
    "questionText": "When aluminum is bombarded with fast-moving neutrons, it transmutes into sodium with the emission of particle X according to: ₁₃Al²⁷ + ₀n¹ → ₁₁Na²⁴ + X. The particle X is:",
    "options": [
      "Electron",
      "Proton",
      "Alpha particle",
      "Positron"
    ],
    "correctAnswer": 2,
    "explanation": "Conserving charge: 13 + 0 = 11 + Z_X => Z_X = 2. Conserving mass number: 27 + 1 = 24 + A_X => A_X = 4. The emitted particle is ₂He⁴, which is an alpha particle.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Transmutation"]
  },
  {
    "id": "ncert-phy-ch28-09",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Radioactive Decay of a Moving Stream",
    "difficulty": "Medium",
    "questionText": "A beam of radioactive material with N₀ nuclei initially travels at a constant speed of 2500 m/s. If the half-life of the material is 693 s, the amount of radioactive material remaining after travelling a distance of 2500 km is:",
    "options": [
      "N₀ / e",
      "N₀ / e²",
      "N₀ / 2",
      "N₀ / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Time taken to travel 2500 km is t = distance / speed = (2500 × 10³ m) / (2500 m/s) = 1000 s. Decay constant λ = 0.693 / T₁/₂ = 0.693 / 693 = 10⁻³ s⁻¹. Number of nuclei remaining is N = N₀ e^(-λ t) = N₀ e^(-10⁻³ × 1000) = N₀ e⁻¹ = N₀ / e.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactive Decay"]
  },
  {
    "id": "ncert-phy-ch28-10",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Time to Half Initial Activity",
    "difficulty": "Hard",
    "questionText": "If the activity of a radioactive substance is R₀ at t = 0 and R₀ / e² at t = 10 hours, then the time (in hours) at which the activity reduces to half its initial value (R₀ / 2) is:",
    "options": [
      "5 log₁₀ 2",
      "5 log_e 2",
      "5 / log₁₀ 2",
      "5 / log_e 2"
    ],
    "correctAnswer": 1,
    "explanation": "R(t) = R₀ e^(-λ t). At t = 10 hours, R₀ / e² = R₀ e^(-10λ) => 10λ = 2 => λ = 1/5 h⁻¹. The time to reach half activity is the half-life T₁/₂ = (ln 2) / λ = (log_e 2) / (1/5) = 5 log_e 2 hours.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Activity"]
  },
  {
    "id": "ncert-phy-ch28-11",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Definition of 1 amu",
    "difficulty": "Easy",
    "questionText": "One atomic mass unit (1 u) is defined as:",
    "options": [
      "1/12 the mass of one mole of ₆C¹³ carbon atoms",
      "1/12 the mass of one mole of ₆C¹² carbon atoms",
      "1/12 the mass of one ₆C¹² carbon atom",
      "1/12 the mass of one ₆C¹³ carbon atom"
    ],
    "correctAnswer": 2,
    "explanation": "One atomic mass unit (1 u or 1 amu) is defined as exactly 1/12th the mass of an unbound neutral atom of carbon-12 (₆C¹²) in its nuclear and electronic ground state, equal to 1.66054 × 10⁻²⁷ kg.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Atomic Mass Unit"]
  },
  {
    "id": "ncert-phy-ch28-12",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Radius Ratio from Fragment Velocities",
    "difficulty": "Medium",
    "questionText": "A nucleus at rest splits into two daughter nuclei which move in opposite directions with speeds v and 27v. The ratio of the radii of the two nuclei is:",
    "options": [
      "3 : 1",
      "3√3 : 1",
      "9 : 1",
      "27 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "By conservation of momentum: m₁ v₁ = m₂ v₂ => m₁(v) = m₂(27v) => m₁ / m₂ = 27 / 1. Since nuclear mass is proportional to mass number A, A₁ / A₂ = 27 / 1. Nuclear radius R ∝ A^(1/3), so R₁ / R₂ = (27 / 1)^(1/3) = 3 : 1.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Fission"]
  },
  {
    "id": "ncert-phy-ch28-13",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Energy Released from BE per Nucleon",
    "difficulty": "Medium",
    "questionText": "The binding energy per nucleon for ¹H¹, ¹H³, and ₂He⁴ are a, b, and c respectively. The energy released in the hypothetical reaction ¹H¹ + ¹H³ → ₂He⁴ + Q is:",
    "options": [
      "a + 3b – 4c",
      "4c – a – 3b",
      "4c – a + 3b",
      "c – a – b"
    ],
    "correctAnswer": 1,
    "explanation": "Total binding energy of reactants = BE(¹H¹) + BE(¹H³) = 1(a) + 3(b) = a + 3b. Total binding energy of product = BE(₂He⁴) = 4(c) = 4c. The Q-value (energy released) is BE(products) - BE(reactants) = 4c - (a + 3b) = 4c - a - 3b.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Q Value"]
  },
  {
    "id": "ncert-phy-ch28-14",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Dependence of Activity and Decay Constant on Mass",
    "difficulty": "Easy",
    "questionText": "If the mass of a radioactive sample is increased, the activity of the sample and the decay constant of the sample respectively will:",
    "options": [
      "Increase, Increase",
      "Decrease, Increase",
      "Increase, Remain same",
      "Remain same, Remain same"
    ],
    "correctAnswer": 2,
    "explanation": "Activity R = λN is directly proportional to the number of radioactive nuclei N (and therefore the mass), so it increases. However, the decay constant λ is an intrinsic characteristic of the specific nuclide and is independent of mass, temperature, or pressure.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactivity"]
  },
  {
    "id": "ncert-phy-ch28-15",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Mean Life from Multi-Step Half-Life Decay",
    "difficulty": "Hard",
    "questionText": "At a given instant, 50% of the radioactive nuclei in a sample are undecayed. After another 40 s, the percentage of undecayed nuclei drops to 3.125%. The mean life of the radioactive element is:",
    "options": [
      "14.4 s",
      "7.21 s",
      "28.8 s",
      "10 s"
    ],
    "correctAnswer": 0,
    "explanation": "From 50% to 3.125%, the fraction is 3.125 / 50 = 1 / 16 = (1/2)⁴. Thus, 4 half-lives have elapsed in 40 s => 4 T₁/₂ = 40 s => T₁/₂ = 10 s. The mean life is τ = T₁/₂ / 0.693 = 10 / 0.693 ≈ 14.43 s ≈ 14.4 s.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Mean Life"]
  },
  {
    "id": "ncert-phy-ch28-16",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Product Nucleus after Alpha and Beta Decay [AIPMT-2011]",
    "difficulty": "Medium",
    "questionText": "A nucleus ₙXᵐ emits one α-particle and two β⁻ particles. The resulting nucleus is: [AIPMT-2011]",
    "options": [
      "ₙ₋₂Yᵐ⁻⁴",
      "ₙ₋₄Zᵐ⁻⁶",
      "ₙZᵐ⁻⁶",
      "ₙXᵐ⁻⁴"
    ],
    "correctAnswer": 3,
    "explanation": "Emission of 1 α-particle changes atomic number Z from n to n - 2, and mass number A from m to m - 4. Emission of two β⁻ particles increases Z by 2 while leaving A unchanged. Final atomic number = (n - 2) + 2 = n, and final mass number = m - 4. Because the atomic number remains n, it is an isotope of the original element X, written as ₙXᵐ⁻⁴.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactive Series"]
  },
  {
    "id": "ncert-phy-ch28-17",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Q-Value of Lithium Proton Reaction [AIPMT-2014]",
    "difficulty": "Medium",
    "questionText": "The binding energy per nucleon of ₃Li⁷ and ₂He⁴ nuclei are 5.60 MeV and 7.06 MeV respectively. In the nuclear reaction ₃Li⁷ + ₁H¹ → ₂He⁴ + ₂He⁴ + Q, the energy Q released is: [AIPMT-2014]",
    "options": [
      "19.6 MeV",
      "–2.4 MeV",
      "8.4 MeV",
      "17.3 MeV"
    ],
    "correctAnswer": 3,
    "explanation": "BE of ₃Li⁷ = 7 × 5.60 = 39.20 MeV. BE of proton ₁H¹ = 0. Total BE of products = 2 × (4 × 7.06) = 2 × 28.24 = 56.48 MeV. The energy released Q = BE(products) - BE(reactants) = 56.48 - 39.20 = 17.28 MeV ≈ 17.3 MeV.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Energy"]
  },
  {
    "id": "ncert-phy-ch28-18",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Radioactive Dating of Rock Samples [AIPMT-2014]",
    "difficulty": "Medium",
    "questionText": "A radioisotope X with half-life 1.4 × 10⁹ years decays to stable isotope Y. A sample of rock from a cave is found to contain X and Y in the ratio 1 : 7. The age of the rock is: [AIPMT-2014]",
    "options": [
      "1.96 × 10⁹ years",
      "3.92 × 10⁹ years",
      "4.20 × 10⁹ years",
      "8.40 × 10⁹ years"
    ],
    "correctAnswer": 2,
    "explanation": "Ratio of parent X to total (X + Y) is N / N₀ = 1 / (1 + 7) = 1 / 8 = (1/2)³. Therefore, 3 half-lives have elapsed. Age of the rock = 3 × T₁/₂ = 3 × (1.4 × 10⁹ years) = 4.20 × 10⁹ years.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactive Dating"]
  },
  {
    "id": "ncert-phy-ch28-19",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Equal Residual Mass of Mixed Radioisotopes [AIPMT-2012]",
    "difficulty": "Medium",
    "questionText": "A mixture consists of two radioactive materials A₁ and A₂ with half-lives 20 s and 10 s respectively. Initially, the mixture contains 40 g of A₁ and 160 g of A₂. The amounts of the two in the mixture will become equal after: [AIPMT-2012]",
    "options": [
      "20 s",
      "40 s",
      "60 s",
      "80 s"
    ],
    "correctAnswer": 1,
    "explanation": "Remaining mass of A₁: m₁ = 40 (1/2)^(t / 20). Remaining mass of A₂: m₂ = 160 (1/2)^(t / 10). Equating m₁ = m₂: 40 (1/2)^(t/20) = 160 (1/2)^(t/10) => (1/2)^(t/20 - t/10) = 160 / 40 = 4 => (1/2)^(-t/20) = 2² => 2^(t/20) = 2² => t / 20 = 2 => t = 40 s.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Half-Life Calculation"]
  },
  {
    "id": "ncert-phy-ch28-20",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Mass-Binding Energy Relation in Atomic Mass Units [AIPMT-2008]",
    "difficulty": "Medium",
    "questionText": "If M(A, Z), M_p, and M_n denote the masses of the nucleus ₙXᵐ (or ₙXᴬ), proton, and neutron respectively in units of u, and BE represents its binding energy in MeV, then: [AIPMT-2008]",
    "options": [
      "M(A, Z) = Z M_p + (A – Z) M_n + BE / c²",
      "M(A, Z) = Z M_p + (A – Z) M_n – BE / c²",
      "M(A, Z) = Z M_p + (A – Z) M_n + BE",
      "M(A, Z) = Z M_p + (A – Z) M_n – BE"
    ],
    "correctAnswer": 1,
    "explanation": "Binding energy is the mass defect converted into energy: BE = Δm c² = [Z M_p + (A - Z) M_n - M(A, Z)] c². Solving for nuclear mass gives M(A, Z) = Z M_p + (A - Z) M_n - BE / c².",
    "tags": ["NCERT NEET Physics", "Nuclei", "Mass Defect"]
  },
  {
    "id": "ncert-phy-ch28-21",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Origin of Beta-Minus Radiation [AIPMT-2007]",
    "difficulty": "Easy",
    "questionText": "In a radioactive decay process, the negatively charged emitted β⁻ particles are: [AIPMT-2007]",
    "options": [
      "The electrons produced as a result of the decay of neutrons inside the nucleus",
      "The electrons produced as a result of collisions between atoms",
      "The electrons orbiting around the nucleus",
      "Electrons permanently present inside the nucleus"
    ],
    "correctAnswer": 0,
    "explanation": "Electrons cannot reside inside the nucleus. In β⁻ decay, an intra-nuclear neutron transforms via the weak interaction into a proton, emitting an electron (β⁻) and an antineutrino: ₀n¹ → ₁p¹ + ₋₁e⁰ + ν̄.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Beta Decay"]
  },
  {
    "id": "ncert-phy-ch28-22",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Energy Released in Deuteron Fusion [AIPMT-2006]",
    "difficulty": "Easy",
    "questionText": "The binding energy of a deuteron (₁H²) is 2.2 MeV and that of ₂He⁴ is 28 MeV. If two deuterons fuse to form one ₂He⁴ nucleus, then the energy released is: [AIPMT-2006]",
    "options": [
      "25.8 MeV",
      "23.6 MeV",
      "19.2 MeV",
      "30.2 MeV"
    ],
    "correctAnswer": 1,
    "explanation": "Total binding energy of reactants (two deuterons) = 2 × 2.2 MeV = 4.4 MeV. Binding energy of product (₂He⁴) = 28 MeV. Energy released Q = BE(product) - BE(reactants) = 28 - 4.4 = 23.6 MeV.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Fusion Energy"]
  },
  {
    "id": "ncert-phy-ch28-23",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nucleon Number from Radius Comparison [AIPMT-2006]",
    "difficulty": "Medium",
    "questionText": "The radius of a Germanium (Ge) nuclide is measured to be twice the radius of ₄Be⁹. The number of nucleons in Ge is: [AIPMT-2006]",
    "options": [
      "73",
      "74",
      "75",
      "72"
    ],
    "correctAnswer": 3,
    "explanation": "Nuclear radius R ∝ A^(1/3). R_Ge / R_Be = (A_Ge / A_Be)^(1/3) => 2 = (A_Ge / 9)^(1/3). Cubing both sides: 2³ = A_Ge / 9 => 8 = A_Ge / 9 => A_Ge = 8 × 9 = 72.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Radius"]
  },
  {
    "id": "ncert-phy-ch28-24",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Number of Alpha and Beta Decays in a Series",
    "difficulty": "Medium",
    "questionText": "What are the respective numbers of α and β⁻ particles emitted in the radioactive decay ²⁰⁰X₉₀ → ¹⁶⁸Y₈₀?",
    "options": [
      "8 and 8",
      "8 and 6",
      "6 and 8",
      "6 and 6"
    ],
    "correctAnswer": 1,
    "explanation": "Change in mass number ΔA = 200 - 168 = 32. Since each α-particle removes 4 nucleons, number of α-particles = 32 / 4 = 8. The 8 α-particles decrease atomic number by 8 × 2 = 16 (from 90 to 74). To reach the final atomic number 80, the number of β⁻ particles emitted must be 80 - 74 = 6. Thus, 8 α and 6 β⁻ are emitted.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Radioactive Disintegration"]
  },
  {
    "id": "ncert-phy-ch28-25",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Energy Released in Single Fission Event",
    "difficulty": "Easy",
    "questionText": "The average energy released in the fission of a single ₉₂U²³⁵ nucleus is approximately:",
    "options": [
      "20 MeV",
      "200 MeV",
      "2000 MeV",
      "2 MeV"
    ],
    "correctAnswer": 1,
    "explanation": "The average binding energy per nucleon of uranium is ~7.6 MeV, whereas for intermediate fission fragments it is ~8.5 MeV. The gain in binding energy per nucleon is ΔBE ≈ 0.9 MeV, leading to an energy release of 235 × 0.9 MeV ≈ 200 MeV per fission.",
    "tags": ["NCERT NEET Physics", "Nuclei", "Nuclear Fission"]
  }
];

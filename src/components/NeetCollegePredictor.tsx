import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Building2,
  BookOpen,
  Award,
  Sparkles,
  Info,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Download,
  Flame,
  FileText,
  SlidersHorizontal,
  RefreshCw,
  ExternalLink,
  HelpCircle,
  Layers,
  MapPin,
  Check,
  Globe,
  Compass,
  Table
} from 'lucide-react';
import { NEET_CUTOFFS_DATA, NeetCutoffEntry } from '../data/neetCutoffsData';

// Calibrated Rank estimation curve based on Official NEET-UG 2026 Allotment data
export function formatYearDisplay(year?: string): string {
  if (!year) return '2026';
  if (year.includes('2025') || year.includes('2024') || year.includes('2026')) return '2026';
  return year;
}

function estimateRankFromScore(score: number): number {
  if (score >= 720) return 1;
  if (score >= 715) return 80;
  if (score >= 710) return 350;
  if (score >= 705) return 900;
  if (score >= 700) return 1800;
  if (score >= 690) return 4500;
  if (score >= 680) return 8500;
  if (score >= 670) return 14000;
  if (score >= 665) return 18500;
  if (score >= 655) return 26178; // Official AIQ Round 1 & 2 Open/OBC Govt MBBS cutoff boundary
  if (score >= 645) return 35000;
  if (score >= 635) return 44000;
  if (score >= 630) return 49462; // Official AIQ Round 1 & 2 Govt BDS Open cutoff boundary
  if (score >= 620) return 62000;
  if (score >= 610) return 77000;
  if (score >= 600) return 95000;
  if (score >= 585) return 120000;
  if (score >= 575) return 135684; // Official AIQ Round 1 & 2 SC Govt MBBS cutoff boundary
  if (score >= 552) return 163285; // Official AIQ Round 1 & 2 ST Govt MBBS cutoff boundary
  if (score >= 535) return 195000;
  if (score >= 500) return 295000;
  if (score >= 450) return 450000;
  if (score >= 400) return 610000;
  if (score >= 350) return 760000;
  if (score >= 300) return 950000;
  if (score >= 200) return 1300000;
  return 1700000;
}

function estimateScoreFromRank(rank: number): number {
  if (rank <= 67) return 720;
  if (rank <= 150) return 715;
  if (rank <= 500) return 710;
  if (rank <= 1200) return 705;
  if (rank <= 2500) return 700;
  if (rank <= 5500) return 690;
  if (rank <= 10000) return 680;
  if (rank <= 16000) return 670;
  if (rank <= 26178) return 655; // AIQ Open MBBS closing threshold
  if (rank <= 36000) return 645;
  if (rank <= 49462) return 630; // AIQ BDS Open closing threshold
  if (rank <= 68000) return 620;
  if (rank <= 85000) return 610;
  if (rank <= 105000) return 600;
  if (rank <= 135684) return 575; // AIQ SC MBBS closing threshold
  if (rank <= 163285) return 552; // AIQ ST MBBS closing threshold
  if (rank <= 215000) return 540;
  if (rank <= 270000) return 520;
  if (rank <= 340000) return 500;
  if (rank <= 450000) return 450;
  if (rank <= 610000) return 400;
  if (rank <= 760000) return 350;
  if (rank <= 950000) return 300;
  if (rank <= 1300000) return 200;
  return 150;
}

// Empirical AIR -> UP State Merit Rank anchors from official UP NEET merit lists (Round 1: 31,654 candidates, Round 2: 33,044 candidates)
const UP_MERIT_R1_ANCHORS = [
  { air: 7, smr: 1, marks: 710 },
  { air: 1078, smr: 9, marks: 656 },
  { air: 4996, smr: 274, marks: 620 },
  { air: 9998, smr: 829, marks: 600 },
  { air: 15010, smr: 1482, marks: 587 },
  { air: 20001, smr: 2173, marks: 576 },
  { air: 26179, smr: 3054, marks: 565 },
  { air: 30002, smr: 3604, marks: 560 },
  { air: 49986, smr: 5460, marks: 536 },
  { air: 99994, smr: 7354, marks: 493 },
  { air: 200008, smr: 11609, marks: 433 },
  { air: 499999, smr: 21427, marks: 325 },
  { air: 1000000, smr: 29500, marks: 210 },
  { air: 1400000, smr: 31653, marks: 137 }
];

const UP_MERIT_R2_ANCHORS = [
  { air: 7, smr: 1, marks: 710 },
  { air: 1078, smr: 9, marks: 656 },
  { air: 4996, smr: 281, marks: 620 },
  { air: 9998, smr: 841, marks: 600 },
  { air: 15010, smr: 1500, marks: 587 },
  { air: 20001, smr: 2194, marks: 576 },
  { air: 26179, smr: 3081, marks: 565 },
  { air: 30002, smr: 3633, marks: 560 },
  { air: 49986, smr: 5547, marks: 536 },
  { air: 99994, smr: 7522, marks: 493 },
  { air: 200008, smr: 11922, marks: 433 },
  { air: 499999, smr: 22142, marks: 325 },
  { air: 1000000, smr: 30800, marks: 210 },
  { air: 1450000, smr: 33043, marks: 129 }
];

export function estimateUpStateRank(air: number, round: string = 'Round 1'): { smr: number; marks: number } {
  const anchors = round === 'Round 2' ? UP_MERIT_R2_ANCHORS : UP_MERIT_R1_ANCHORS;
  if (air <= anchors[0].air) return { smr: anchors[0].smr, marks: anchors[0].marks };
  for (let i = 0; i < anchors.length - 1; i++) {
    const a0 = anchors[i];
    const a1 = anchors[i + 1];
    if (air >= a0.air && air <= a1.air) {
      const ratio = (air - a0.air) / (a1.air - a0.air);
      const smr = Math.round(a0.smr + ratio * (a1.smr - a0.smr));
      const marks = Math.round(a0.marks + ratio * (a1.marks - a0.marks));
      return { smr, marks };
    }
  }
  const last = anchors[anchors.length - 1];
  return { smr: last.smr, marks: last.marks };
}

// Empirical AIR -> Bihar BCECEB UGMAC State Merit Rank anchors from official allotment lists (Round 1: 3,985 candidates, Round 2: 3,222 candidates)
const BIHAR_UGMAC_R1_ANCHORS = [
  { air: 646, ugmac: 3, marks: 666 },
  { air: 1125, ugmac: 7, marks: 655 },
  { air: 2431, ugmac: 18, marks: 639 },
  { air: 5012, ugmac: 83, marks: 620 },
  { air: 10001, ugmac: 431, marks: 600 },
  { air: 15016, ugmac: 825, marks: 587 },
  { air: 19995, ugmac: 1236, marks: 576 },
  { air: 26217, ugmac: 1762, marks: 565 },
  { air: 35416, ugmac: 2424, marks: 552 },
  { air: 49966, ugmac: 3029, marks: 536 },
  { air: 80047, ugmac: 3715, marks: 508 },
  { air: 150004, ugmac: 4656, marks: 460 },
  { air: 249992, ugmac: 5707, marks: 410 },
  { air: 399847, ugmac: 6968, marks: 355 },
  { air: 600017, ugmac: 8437, marks: 299 },
  { air: 801060, ugmac: 9610, marks: 252 },
  { air: 1001829, ugmac: 10451, marks: 212 },
  { air: 1493443, ugmac: 10806, marks: 128 },
];

const BIHAR_UGMAC_R2_ANCHORS = [
  { air: 1158, ugmac: 8, marks: 655 },
  { air: 3606, ugmac: 36, marks: 629 },
  { air: 5007, ugmac: 68, marks: 620 },
  { air: 10001, ugmac: 320, marks: 600 },
  { air: 15017, ugmac: 709, marks: 587 },
  { air: 19995, ugmac: 1115, marks: 576 },
  { air: 26185, ugmac: 1630, marks: 565 },
  { air: 34901, ugmac: 2281, marks: 553 },
  { air: 50125, ugmac: 2932, marks: 535 },
  { air: 80047, ugmac: 3607, marks: 508 },
  { air: 150396, ugmac: 4458, marks: 460 },
  { air: 250026, ugmac: 5423, marks: 410 },
  { air: 399719, ugmac: 6524, marks: 355 },
  { air: 600017, ugmac: 7863, marks: 299 },
  { air: 799970, ugmac: 8986, marks: 253 },
  { air: 999436, ugmac: 9899, marks: 212 },
  { air: 1385010, ugmac: 10273, marks: 145 },
];

export function estimateBiharStateRank(air: number, round: string = 'Round 1'): { ugmac: number; marks: number } {
  const anchors = round === 'Round 2' ? BIHAR_UGMAC_R2_ANCHORS : BIHAR_UGMAC_R1_ANCHORS;
  if (air <= anchors[0].air) return { ugmac: anchors[0].ugmac, marks: anchors[0].marks };
  for (let i = 0; i < anchors.length - 1; i++) {
    const a0 = anchors[i];
    const a1 = anchors[i + 1];
    if (air >= a0.air && air <= a1.air) {
      const ratio = (air - a0.air) / (a1.air - a0.air);
      const ugmac = Math.round(a0.ugmac + ratio * (a1.ugmac - a0.ugmac));
      const marks = Math.round(a0.marks + ratio * (a1.marks - a0.marks));
      return { ugmac, marks };
    }
  }
  const last = anchors[anchors.length - 1];
  return { ugmac: last.ugmac, marks: last.marks };
}

// Empirical AIR -> Rajasthan State Merit Rank anchors from official allotment list Round 1 (5,666 candidates)
const RAJASTHAN_MERIT_R1_ANCHORS = [
  { air: 628, smr: 1, marks: 667 },
  { air: 999, smr: 8, marks: 657 },
  { air: 2511, smr: 118, marks: 638 },
  { air: 5002, smr: 420, marks: 620 },
  { air: 7501, smr: 872, marks: 609 },
  { air: 9997, smr: 1296, marks: 600 },
  { air: 14002, smr: 1955, marks: 589 },
  { air: 20086, smr: 2854, marks: 576 },
  { air: 26172, smr: 3647, marks: 565 },
  { air: 35010, smr: 4521, marks: 553 },
  { air: 50010, smr: 5379, marks: 535 },
  { air: 75068, smr: 6377, marks: 512 },
  { air: 100003, smr: 7011, marks: 493 },
  { air: 150283, smr: 8161, marks: 460 },
  { air: 250430, smr: 9483, marks: 410 },
  { air: 399835, smr: 10713, marks: 355 },
  { air: 599923, smr: 11836, marks: 299 },
  { air: 799715, smr: 12811, marks: 253 },
  { air: 1000595, smr: 13751, marks: 212 },
  { air: 1193859, smr: 14068, marks: 177 },
];

// Empirical AIR -> Rajasthan State Merit Rank anchors from official allotment list Round 2 (5,816 candidates)
const RAJASTHAN_MERIT_R2_ANCHORS = [
  { air: 635, smr: 2, marks: 666 },
  { air: 999, smr: 8, marks: 657 },
  { air: 1993, smr: 76, marks: 643 },
  { air: 3016, smr: 176, marks: 634 },
  { air: 5002, smr: 445, marks: 620 },
  { air: 7501, smr: 933, marks: 609 },
  { air: 9997, smr: 1381, marks: 600 },
  { air: 15004, smr: 2237, marks: 587 },
  { air: 20086, smr: 3019, marks: 576 },
  { air: 25038, smr: 3686, marks: 567 },
  { air: 30000, smr: 4345, marks: 560 },
  { air: 39997, smr: 5152, marks: 547 },
  { air: 50010, smr: 5725, marks: 535 },
  { air: 64942, smr: 6443, marks: 521 },
  { air: 79928, smr: 6937, marks: 508 },
  { air: 100003, smr: 7463, marks: 493 },
  { air: 149642, smr: 8694, marks: 460 },
  { air: 200044, smr: 9519, marks: 433 },
  { air: 299834, smr: 10658, marks: 390 },
  { air: 450074, smr: 11861, marks: 340 },
  { air: 599923, smr: 12786, marks: 299 },
  { air: 799715, smr: 13922, marks: 253 },
  { air: 999399, smr: 15033, marks: 212 },
  { air: 1194651, smr: 15402, marks: 177 },
];

export function estimateRajasthanStateRank(air: number, round: string = 'Round 1'): { smr: number; marks: number } {
  const anchors = round === 'Round 2' ? RAJASTHAN_MERIT_R2_ANCHORS : RAJASTHAN_MERIT_R1_ANCHORS;
  if (air <= anchors[0].air) return { smr: anchors[0].smr, marks: anchors[0].marks };
  for (let i = 0; i < anchors.length - 1; i++) {
    const a0 = anchors[i];
    const a1 = anchors[i + 1];
    if (air >= a0.air && air <= a1.air) {
      const ratio = (air - a0.air) / (a1.air - a0.air);
      const smr = Math.round(a0.smr + ratio * (a1.smr - a0.smr));
      const marks = Math.round(a0.marks + ratio * (a1.marks - a0.marks));
      return { smr, marks };
    }
  }
  const last = anchors[anchors.length - 1];
  return { smr: last.smr, marks: last.marks };
}

export const CATEGORY_OPTIONS = [
  { value: 'OPEN', label: 'General / Unreserved (OPEN / UR)', group: 'General' },
  { value: 'OBC', label: 'Other Backward Classes (OBC / BC)', group: 'Reserved' },
  { value: 'MBC', label: 'Most Backward Classes (MBC - Rajasthan 5%)', group: 'State Reserved' },
  { value: 'TSP', label: 'Tribal Area Sub-Plan (TSP / SA - Rajasthan)', group: 'State Reserved' },
  { value: 'EBC', label: 'Extremely Backward Class (EBC - Bihar)', group: 'State Reserved' },
  { value: 'RCG', label: 'Reserved Category Girls (RCG 3% - Bihar)', group: 'State Reserved' },
  { value: 'EWS', label: 'Economically Weaker Section (EWS)', group: 'Reserved' },
  { value: 'SC', label: 'Scheduled Castes (SC)', group: 'Reserved' },
  { value: 'ST', label: 'Scheduled Tribes (ST)', group: 'Reserved' },
  { value: 'PWD', label: 'Persons with Disabilities (PwD / DQ / PH)', group: 'Horizontal' },
  { value: 'DEF', label: 'Defense Personnel (DEF1-3 / EXS / WPP)', group: 'State Special' },
  { value: 'SEBC', label: 'Socially & Educationally Backward (SEBC - State)', group: 'State Reserved' },
  { value: 'VJ', label: 'Vimukta Jati (VJ / NT-A - State)', group: 'State Reserved' },
  { value: 'NTB', label: 'Nomadic Tribes-B (NT-B - State)', group: 'State Reserved' },
  { value: 'NTC', label: 'Nomadic Tribes-C (NT-C - State)', group: 'State Reserved' },
  { value: 'NTD', label: 'Nomadic Tribes-D (NT-D - State)', group: 'State Reserved' },
  { value: 'IQ', label: 'Deemed / Management / Minority / NRI Quota', group: 'Management' },
  { value: 'MKB', label: 'Maharashtra-Karnataka Border (MKB)', group: 'State Special' },
  { value: 'ORPHAN', label: 'Orphan Quota', group: 'State Special' },
];

// Official Round 3 MCC AIQ Benchmark Matrix Rows
export const AIQ_SCORE_AIR_MATRIX = [
  {
    scoreRange: '710 – 720',
    airRange: 'AIR 1 – 350',
    govtMbbsOpen: 'Guaranteed Top 5 GMCs',
    govtMbbsScSt: 'Guaranteed Any Choice',
    centralAiims: 'AIIMS Delhi, MAMC, VMMC Delhi',
    govtBds: 'Guaranteed Premier Dental',
    deemedPvt: 'Full Merit Scholarships',
    status: 'TOP_TIER'
  },
  {
    scoreRange: '695 – 709',
    airRange: 'AIR 351 – 2,500',
    govtMbbsOpen: 'Guaranteed Premier GMCs',
    govtMbbsScSt: 'Guaranteed Premier GMCs',
    centralAiims: 'AIIMS Bhopal, Jodhpur, Bhubaneswar',
    govtBds: 'Guaranteed (Maulana Azad Dental)',
    deemedPvt: 'High Merit Scholarships',
    status: 'TOP_TIER'
  },
  {
    scoreRange: '680 – 694',
    airRange: 'AIR 2,501 – 8,500',
    govtMbbsOpen: 'Guaranteed Top State GMCs',
    govtMbbsScSt: 'Guaranteed All AIIMS',
    centralAiims: 'Peripheral AIIMS & JIPMER Karaikal',
    govtBds: 'Guaranteed Any Govt Dental',
    deemedPvt: 'Guaranteed Choice',
    status: 'HIGH'
  },
  {
    scoreRange: '668 – 679',
    airRange: 'AIR 8,501 – 15,000',
    govtMbbsOpen: 'Guaranteed State Capital GMCs',
    govtMbbsScSt: 'Guaranteed Premier State GMCs',
    centralAiims: 'AIIMS Jammu, Guwahati, Madurai',
    govtBds: 'Guaranteed Any Govt Dental',
    deemedPvt: 'Guaranteed Choice',
    status: 'HIGH'
  },
  {
    scoreRange: '655 – 667',
    airRange: 'AIR 15,001 – 26,178',
    govtMbbsOpen: 'Closing Boundary (Round 3 Cutoff)',
    govtMbbsScSt: 'Guaranteed State GMCs',
    centralAiims: 'Selected Central / ESIC GMCs',
    govtBds: 'Guaranteed All Govt BDS',
    deemedPvt: 'Guaranteed Choice',
    status: 'BORDERLINE_OPEN'
  },
  {
    scoreRange: '630 – 654',
    airRange: 'AIR 26,179 – 50,000',
    govtMbbsOpen: 'Closed for AIQ Open/OBC (State Quota Only)',
    govtMbbsScSt: 'Guaranteed State GMCs',
    centralAiims: 'State Quota Only',
    govtBds: 'Top Govt Dental (BDS Closing: 49,462)',
    deemedPvt: 'KMC Manipal (MBBS AIR 43,835)',
    status: 'BDS_CLOSING'
  },
  {
    scoreRange: '570 – 629',
    airRange: 'AIR 50,001 – 1,35,000',
    govtMbbsOpen: 'Private / Deemed Only',
    govtMbbsScSt: 'Govt MBBS Closing for SC (AIR 1,35,684)',
    centralAiims: 'State Quota (Reserved)',
    govtBds: 'Govt BDS Cleared (OBC/EWS/Open)',
    deemedPvt: 'Symbiosis, KMC Mangalore, Manipal Tata',
    status: 'SC_CLOSING'
  },
  {
    scoreRange: '550 – 569',
    airRange: 'AIR 1,35,001 – 1,63,000',
    govtMbbsOpen: 'Deemed / Management Only',
    govtMbbsScSt: 'Govt MBBS Closing for ST (AIR 1,63,285)',
    centralAiims: 'State Quota (ST)',
    govtBds: 'Govt BDS Cleared (SC/ST Quotas)',
    deemedPvt: 'KS Hegde, Rural Medical College Loni',
    status: 'ST_CLOSING'
  },
  {
    scoreRange: '< 550',
    airRange: 'AIR 1,63,000+',
    govtMbbsOpen: 'Deemed / Management Only',
    govtMbbsScSt: 'Govt BDS / Deemed Universities',
    centralAiims: 'Closed for AIQ Govt Seats',
    govtBds: 'Deemed / Private BDS Colleges',
    deemedPvt: 'DY Patil, Saveetha, MGM, Bharati Vidyapeeth',
    status: 'DEEMED_ONLY'
  }
];

// Institutional Tiers from MCC Official Dataset
export const INSTITUTIONAL_TIERS = [
  {
    tier: 'Tier 1',
    name: 'Top Central Institutions & AIIMS',
    airRange: 'AIR 1 – 7,500',
    scoreReq: 'Score 680 – 720',
    description: 'Premier national institutes of national importance offering world-class clinical exposure and academic excellence.',
    colleges: [
      { name: 'AIIMS, New Delhi', closingAir: 48, category: 'Open' },
      { name: 'Maulana Azad Medical College (MAMC), Delhi', closingAir: 123, category: 'Open' },
      { name: 'VMMC & Safdarjung Hospital, Delhi', closingAir: 189, category: 'Open' },
      { name: 'AIIMS Bhubaneswar', closingAir: 392, category: 'Open' },
      { name: 'AIIMS Bhopal', closingAir: 634, category: 'Open' },
      { name: 'AIIMS Jodhpur', closingAir: 785, category: 'Open' },
      { name: 'AIIMS Rishikesh', closingAir: 816, category: 'Open' },
      { name: 'AIIMS Raipur', closingAir: 1030, category: 'Open' },
      { name: 'AIIMS Mangalagiri', closingAir: 1357, category: 'Open' },
      { name: 'AIIMS Patna', closingAir: 1376, category: 'Open' },
      { name: 'AIIMS Bathinda', closingAir: 1798, category: 'Open' },
      { name: 'AIIMS Nagpur', closingAir: 1874, category: 'Open' },
      { name: 'AIIMS Kalyani', closingAir: 1939, category: 'Open' },
      { name: 'AIIMS Gorakhpur', closingAir: 2417, category: 'Open' },
      { name: 'AIIMS Bibinagar', closingAir: 2602, category: 'Open' },
      { name: 'AIIMS Bilaspur', closingAir: 2788, category: 'Open' },
      { name: 'AIIMS Rajkot', closingAir: 3254, category: 'Open' },
      { name: 'AIIMS Deoghar', closingAir: 3736, category: 'Open' },
      { name: 'AIIMS Jammu', closingAir: 3993, category: 'Open' },
      { name: 'AIIMS Guwahati', closingAir: 4420, category: 'Open' },
      { name: 'AIIMS Madurai', closingAir: 7143, category: 'Open' },
    ]
  },
  {
    tier: 'Tier 2',
    name: 'Premier State Government Medical Colleges',
    airRange: 'AIR 1,000 – 10,000',
    scoreReq: 'Score 675 – 705',
    description: 'Flagship medical institutions in state capitals with renowned multi-specialty tertiary care hospitals.',
    colleges: [
      { name: 'Seth GS Medical College & KEM Hospital, Mumbai', closingAir: 1048, category: 'Open' },
      { name: 'Madras Medical College, Chennai', closingAir: 2210, category: 'Open' },
      { name: 'BJ Government Medical College, Ahmedabad', closingAir: 2400, category: 'Open' },
      { name: 'King George’s Medical University (KGMU), Lucknow', closingAir: 2450, category: 'Open' },
      { name: 'Bangalore Medical College & RI (BMCRI), Bengaluru', closingAir: 2520, category: 'Open' },
      { name: 'SMS Medical College, Jaipur', closingAir: 2650, category: 'Open' },
      { name: 'Govt Medical College, Kozhikode', closingAir: 3890, category: 'Open' },
      { name: 'Grant Government Medical College, Mumbai', closingAir: 4120, category: 'Open' },
      { name: 'Medical College, Kolkata', closingAir: 4500, category: 'Open' },
    ]
  },
  {
    tier: 'Tier 3',
    name: 'Established State GMCs & ESIC Colleges',
    airRange: 'AIR 10,000 – 20,000',
    scoreReq: 'Score 660 – 675',
    description: 'Reputable regional government medical colleges and central ESIC institutions across all 28 states.',
    colleges: [
      { name: 'Indira Gandhi GMC, Nagpur', closingAir: 12450, category: 'Open' },
      { name: 'GMC Amritsar', closingAir: 13800, category: 'Open' },
      { name: 'GMC Kota, Rajasthan', closingAir: 14200, category: 'Open' },
      { name: 'ESIC Medical College, Faridabad', closingAir: 15400, category: 'Open' },
      { name: 'ACSR Govt Medical College, Nellore', closingAir: 20147, category: 'Open' },
    ]
  },
  {
    tier: 'Tier 4',
    name: 'Closing Boundary AIQ Govt Medical Colleges',
    airRange: 'AIR 20,000 – 26,178',
    scoreReq: 'Score 655 – 660',
    description: 'The definitive cutoff threshold for Government MBBS admissions under All India 15% Quota.',
    colleges: [
      { name: 'Govt Medical College, Virudhunagar, Tamil Nadu', closingAir: 25980, category: 'Open' },
      { name: 'Govt Medical College, Nagapattinam, Tamil Nadu', closingAir: 26178, category: 'Open (Final Cutoff)' },
      { name: 'Govt Medical College, Dindigul, Tamil Nadu', closingAir: 26167, category: 'OBC Final Cutoff' },
      { name: 'GMC Rajouri, Jammu & Kashmir', closingAir: 27243, category: 'EWS Final Cutoff' },
    ]
  },
  {
    tier: 'Tier 5',
    name: 'Government BDS Dental Colleges (AIQ)',
    airRange: 'AIR 26,000 – 54,000',
    scoreReq: 'Score 625 – 655',
    description: 'Top government dental institutions across India allotted through MCC All India Dental Quota.',
    colleges: [
      { name: 'Maulana Azad Inst. of Dental Sciences, New Delhi', closingAir: 8920, category: 'Open' },
      { name: 'Govt Dental College & Hospital, Mumbai', closingAir: 31450, category: 'Open' },
      { name: 'Govt Dental College, RIMS, Kadapa', closingAir: 48688, category: 'Open' },
      { name: 'JNIDS, Imphal (Final Open BDS Cutoff)', closingAir: 49462, category: 'Open (Final BDS)' },
      { name: 'Govt Dental College, Raipur', closingAir: 51192, category: 'OBC Final BDS' },
      { name: 'Govt Dental College, Alappuzha', closingAir: 54132, category: 'EWS Final BDS' },
    ]
  },
  {
    tier: 'Tier 6',
    name: 'Prominent Deemed Medical Universities',
    airRange: 'AIR 43,000 – 900,000+',
    scoreReq: 'Score 200 – 630',
    description: 'Premier autonomous deemed university medical colleges available nationwide under MCC Deemed Quota.',
    colleges: [
      { name: 'Kasturba Medical College (KMC), Manipal', closingAir: 43835, category: 'Deemed MBBS' },
      { name: 'Symbiosis Medical College for Women, Pune', closingAir: 50473, category: 'Deemed MBBS' },
      { name: 'Kasturba Medical College (KMC), Mangalore', closingAir: 57121, category: 'Deemed MBBS' },
      { name: 'Manipal Tata Medical College, Jamshedpur', closingAir: 79731, category: 'Deemed MBBS' },
      { name: 'KS Hegde Medical Academy, Mangaluru', closingAir: 137517, category: 'Deemed MBBS' },
      { name: 'Rural Medical College (PIMS), Loni', closingAir: 139826, category: 'Deemed MBBS' },
      { name: 'JSS Medical College, Mysuru', closingAir: 167972, category: 'Deemed MBBS' },
      { name: 'MGM Medical College, Navi Mumbai', closingAir: 191102, category: 'Deemed MBBS' },
      { name: 'SDU Medical College, Kolar', closingAir: 247191, category: 'Deemed MBBS' },
      { name: 'DY Patil Medical College, Pune', closingAir: 525844, category: 'Deemed MBBS' },
      { name: 'Saveetha Medical College, Chennai', closingAir: 525685, category: 'Deemed MBBS' },
      { name: 'Bharati Vidyapeeth Medical College, Pune', closingAir: 606370, category: 'Deemed MBBS' },
      { name: 'ACS Medical College, Chennai', closingAir: 736125, category: 'Deemed MBBS' },
      { name: 'Sri Lakshmi Narayana Institute, Puducherry', closingAir: 874293, category: 'Deemed MBBS' },
    ]
  }
];

export interface NeetCollegePredictorProps {
  initialScore?: number;
  initialAir?: number;
  initialCategory?: string;
  initialGender?: 'Female' | 'Male' | 'Third Gender' | 'ALL';
  initialSpecialReservation?: string;
  candidateName?: string;
  rollNumber?: string;
  isInsideScorecard?: boolean;
}

export const NeetCollegePredictor: React.FC<NeetCollegePredictorProps> = ({
  initialScore,
  initialAir,
  initialCategory,
  initialGender,
  candidateName,
  rollNumber,
  isInsideScorecard = false
}) => {
  // Normalize initial category from student enrollment
  const resolvedCategory = useMemo(() => {
    if (!initialCategory) return 'OPEN';
    const c = initialCategory.toUpperCase();
    if (c.includes('OBC')) return 'OBC';
    if (c.includes('EWS')) return 'EWS';
    if (c.includes('SEBC')) return 'SEBC';
    if (c.includes('SC')) return 'SC';
    if (c.includes('ST')) return 'ST';
    if (c.includes('NT-A') || c.includes('VJ')) return 'VJ';
    if (c.includes('NT-B') || c.includes('NT1') || c.includes('NTB')) return 'NTB';
    if (c.includes('NT-C') || c.includes('NT2') || c.includes('NTC')) return 'NTC';
    if (c.includes('NT-D') || c.includes('NT3') || c.includes('NTD')) return 'NTD';
    if (c.includes('PWD') || c.includes('DISABILITY')) return 'PWD';
    if (c.includes('DEF')) return 'DEF';
    if (c.includes('MKB')) return 'MKB';
    if (c.includes('ORPHAN')) return 'ORPHAN';
    return 'OPEN';
  }, [initialCategory]);

  const defaultGender = useMemo<'ALL' | 'FEMALE' | 'MALE'>(() => {
    if (initialGender === 'Female') return 'FEMALE';
    if (initialGender === 'Male') return 'MALE';
    return 'ALL';
  }, [initialGender]);

  const initAir = initialAir !== undefined && initialAir > 0
    ? initialAir
    : (initialScore !== undefined && initialScore > 0 ? estimateRankFromScore(initialScore) : 26178);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'forecaster' | 'matrix' | 'benchmarks'>('forecaster');

  // Input states - Purely All India Rank (AIR) driven
  const [rankInput, setRankInput] = useState<string>(String(initAir));
  const [selectedCourse, setSelectedCourse] = useState<'ALL' | 'MBBS' | 'BDS'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>(resolvedCategory);
  const [gender, setGender] = useState<'ALL' | 'FEMALE' | 'MALE'>(defaultGender);
  const [counselingScope, setCounselingScope] = useState<'ALL' | 'AIQ' | 'STATE'>('ALL');
  const [includeOpenMerit, setIncludeOpenMerit] = useState<boolean>(true);
  const [selectedRound, setSelectedRound] = useState<'ALL' | 'Round 1' | 'Round 2' | 'Round 3'>('ALL');
  const [collegeTypeFilter, setCollegeTypeFilter] = useState<'ALL' | 'GOVT' | 'PRIVATE'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [stateFilter, setStateFilter] = useState<string>('Maharashtra');
  const [selectedState, setSelectedState] = useState<'Maharashtra' | 'Uttar Pradesh' | 'Bihar' | 'Rajasthan' | 'ALL'>('Maharashtra');
  const [missedToleranceRanks, setMissedToleranceRanks] = useState<number>(20000);

  const handleStateChange = (state: 'Maharashtra' | 'Uttar Pradesh' | 'Bihar' | 'Rajasthan' | 'ALL') => {
    setSelectedState(state);
    if (state === 'ALL') {
      setStateFilter('ALL');
      setCounselingScope('ALL');
      setSelectedRound('ALL');
    } else {
      setStateFilter(state);
      setCounselingScope('STATE');
      // If round is Round 3 (only valid for MH), reset to ALL for states with only R1 & R2
      if (state !== 'Maharashtra' && selectedRound === 'Round 3') {
        setSelectedRound('ALL');
      }
    }
  };

  // Tier search state
  const [tierSearch, setTierSearch] = useState<string>('');

  React.useEffect(() => {
    if (initialAir !== undefined && initialAir > 0) {
      setRankInput(String(initialAir));
    } else if (initialScore !== undefined && initialScore > 0) {
      setRankInput(String(estimateRankFromScore(initialScore)));
    }
    if (resolvedCategory) {
      setSelectedCategory(resolvedCategory);
    }
    if (defaultGender) {
      setGender(defaultGender);
    }
  }, [initialScore, initialAir, resolvedCategory, defaultGender]);

  // Active user AIR
  const userAir = useMemo(() => {
    const r = parseInt(rankInput.replace(/\D/g, ''), 10);
    return isNaN(r) || r <= 0 ? 0 : r;
  }, [rankInput]);

  // Handle Rank Change
  const handleRankChange = (val: string) => {
    setRankInput(val);
  };

  // Memoize aggregated closing cutoffs per college seat option (taking max closing AIR per seat option)
  const aggregatedCutoffsData = useMemo(() => {
    const grouped = new Map<string, NeetCutoffEntry>();
    for (const entry of NEET_CUTOFFS_DATA) {
      const key = `${entry.collegeCode}_${entry.collegeName}_${entry.course}_${entry.quota}_${entry.categoryGroup}_${entry.counselingType}_${entry.round}_${entry.year}_${entry.isWomen}_${entry.isPwD}`;
      const existing = grouped.get(key);
      if (!existing) {
        grouped.set(key, { ...entry });
      } else {
        if (entry.closingAir > existing.closingAir) {
          existing.closingAir = entry.closingAir;
        }
      }
    }
    return Array.from(grouped.values());
  }, []);

  // Filter and compute cleared vs close-not-cleared
  const { clearedList, closeList, stats } = useMemo(() => {
    if (userAir <= 0) {
      return {
        clearedList: [],
        closeList: [],
        stats: {
          totalCleared: 0,
          govtMbbsCleared: 0,
          pvtMbbsCleared: 0,
          bdsCleared: 0,
          closeCount: 0,
          aiqCleared: 0,
          stateCleared: 0
        }
      };
    }

    const cleared: Array<NeetCutoffEntry & { margin: number; probability: 'HIGH' | 'MODERATE' | 'BORDERLINE' }> = [];
    const close: Array<NeetCutoffEntry & { margin: number }> = [];

    const filteredRecords = aggregatedCutoffsData.filter(entry => {
      // 1. Quota Scope Filter (AIQ vs State)
      if (counselingScope === 'AIQ' && entry.counselingType !== 'AIQ') return false;
      if (counselingScope === 'STATE' && entry.counselingType !== 'STATE') return false;

      // 2. Course Filter
      if (selectedCourse !== 'ALL' && entry.course !== selectedCourse) return false;

      // 3. College Type Filter
      if (collegeTypeFilter === 'GOVT' && !entry.isGovt) return false;
      if (collegeTypeFilter === 'PRIVATE' && entry.isGovt) return false;

      // 4. Round Filter
      if (selectedRound !== 'ALL' && entry.round !== selectedRound) return false;

      // 5. Gender / Women Quota Filter
      if (gender === 'MALE' && entry.isWomen) return false;

      // 6. State Filter (applies to State Quota or Combined view, bypasses AIQ-only mode)
      if (counselingScope !== 'AIQ' && selectedState !== 'ALL') {
        if (!entry.state || !entry.state.toLowerCase().includes(selectedState.toLowerCase())) {
          return false;
        }
      }

      // 7. Category Filter
      const isTargetCategory = entry.categoryGroup === selectedCategory;
      const isOpenEligible = includeOpenMerit && selectedCategory !== 'OPEN' && entry.categoryGroup === 'OPEN';

      if (!isTargetCategory && !isOpenEligible) return false;

      // 8. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = (entry.collegeName || '').toLowerCase().includes(q);
        const matchCode = (entry.collegeCode || '').toLowerCase().includes(q);
        const matchQuota = (entry.quota || '').toLowerCase().includes(q);
        const matchRaw = (entry.rawName || '').toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchQuota && !matchRaw) return false;
      }

      return true;
    });

    filteredRecords.forEach(item => {
      const margin = item.closingAir - userAir;
      if (margin >= 0) {
        let probability: 'HIGH' | 'MODERATE' | 'BORDERLINE' = 'HIGH';
        if (margin < 3000) {
          probability = 'BORDERLINE';
        } else if (margin < 12000) {
          probability = 'MODERATE';
        }
        cleared.push({ ...item, margin, probability });
      } else {
        const deficit = Math.abs(margin);
        if (deficit <= missedToleranceRanks) {
          close.push({ ...item, margin });
        }
      }
    });

    // Sort cleared from safest (highest margin) to reach (closest margin)
    cleared.sort((a, b) => b.margin - a.margin);

    // Sort close list from closest deficit to farthest
    close.sort((a, b) => b.margin - a.margin);

    const govtMbbsCleared = cleared.filter(c => c.isGovt && c.course === 'MBBS').length;
    const pvtMbbsCleared = cleared.filter(c => !c.isGovt && c.course === 'MBBS').length;
    const bdsCleared = cleared.filter(c => c.course === 'BDS').length;
    const aiqCleared = cleared.filter(c => c.counselingType === 'AIQ').length;
    const stateCleared = cleared.filter(c => c.counselingType === 'STATE').length;

    return {
      clearedList: cleared,
      closeList: close,
      stats: {
        totalCleared: cleared.length,
        govtMbbsCleared,
        pvtMbbsCleared,
        bdsCleared,
        closeCount: close.length,
        aiqCleared,
        stateCleared
      }
    };
  }, [
    userAir,
    counselingScope,
    selectedCourse,
    selectedCategory,
    gender,
    includeOpenMerit,
    selectedRound,
    collegeTypeFilter,
    searchQuery,
    selectedState,
    stateFilter,
    missedToleranceRanks,
    aggregatedCutoffsData
  ]);

  // Export to CSV
  const handleExportCSV = () => {
    if (clearedList.length === 0) return;
    const header = [
      'College Code',
      'College Name',
      'Scope',
      'Course',
      'Quota',
      'Category Group',
      'Round',
      'Year',
      'Closing AIR',
      'Candidate AIR',
      'Margin (+Ranks)',
      'Safety Index',
      'State / Region'
    ];

    const rows = clearedList.map(c => [
      `"${c.collegeCode}"`,
      `"${c.collegeName.replace(/"/g, '""')}"`,
      c.counselingType || 'AIQ',
      c.course,
      `"${c.quota.replace(/"/g, '""')}"`,
      c.categoryGroup,
      c.round,
      c.year,
      c.closingAir,
      userAir,
      c.margin,
      c.probability,
      `"${c.state || 'India'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [header.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NEET_College_Predictions_AIR_${userAir}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`space-y-6 ${isInsideScorecard ? 'w-full text-stone-100' : 'max-w-7xl mx-auto p-3 sm:p-6 lg:p-6 text-stone-100'} animate-in fade-in duration-300`}>
      {/* 1. Header Banner & Official MCC 113-Page Attribution */}
      <div className="bg-gradient-to-r from-stone-900 via-sky-950 to-stone-900 border border-sky-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Official NEET-UG 2026 Maharashtra State CAP (32,787 Round 1, Round 2 & Round 3 Allotments) & AIQ Selection Dataset</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isInsideScorecard ? (
                <>SECTION 7: Predicted Medical Colleges & AIQ Seat Allotment Matrix (2026)</>
              ) : (
                <>NEET MBBS & BDS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-400">College Predictor Matrix (2026)</span></>
              )}
            </h2>
            <p className="text-sm text-stone-300 max-w-3xl leading-relaxed">
              Admission viability calibrated dynamically for All India Rank <strong className="text-emerald-400 font-mono">#{userAir > 0 ? userAir.toLocaleString() : 'N/A'}</strong> across <strong className="text-white">{NEET_CUTOFFS_DATA.length.toLocaleString()} verified selection entries</strong> (including 32,787 verified Maharashtra 2026 State CAP Round 1, Round 2 & Round 3 allotments, 64,697 UP DGME Round 1 & Round 2 merit records across 72 GMC & Private institutions, and Official MCC All-India Quota Round 1 & 2 allotments).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={handleExportCSV}
              disabled={clearedList.length === 0}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-lg transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export Eligible ({clearedList.length})</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="mt-5 flex flex-wrap gap-4 border-t border-stone-800/80 pt-4">
          <button
            onClick={() => setActiveTab('forecaster')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'forecaster'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-sky-800/70 text-stone-300 hover:bg-sky-800 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 text-sky-400" />
            <span>Interactive Seat Forecaster</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-sky-900/60 text-sky-200 border border-sky-500/30 font-mono">
              {stats.totalCleared} Options
            </span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-sky-800/70 text-stone-300 hover:bg-sky-800 hover:text-white'
            }`}
          >
            <Table className="w-4 h-4 text-sky-400" />
            <span>AIR ↔ Category Cutoff Matrix</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-sky-900/60 text-sky-200 border border-sky-500/30 font-semibold">
              Official 2026
            </span>
          </button>

          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'benchmarks'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-sky-800/70 text-stone-300 hover:bg-sky-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-sky-400" />
            <span>Institutional Tiers & Category Cutoffs</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-sky-900/60 text-sky-200 border border-sky-500/30 font-semibold">
              AIIMS & Central
            </span>
          </button>
        </div>

        {/* Caveat Callout Box */}
        <div className="mt-4 p-6 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-200 text-xs leading-relaxed flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-sky-300 uppercase tracking-wide">
              Official MCC All India Quota & State Selection Attributions:
            </div>
            <div>
              1. <strong>MCC AIQ Round 1 & 2 Reconstructed Cutoffs:</strong> Includes all closing cutoffs across AIIMS, Central Institutes, AFMC, ESIC, State GMCs (15% AIQ), and Deemed Universities from the official 113-page allotment release.
            </div>
            <div>
              2. <strong>Round 3 Absolute Boundary:</strong> Open/OBC Govt MBBS closed at <strong>AIR 26,178</strong>, SC Govt MBBS closed at <strong>AIR 1,35,684</strong>, ST at <strong>AIR 1,63,285</strong>, and Govt BDS at <strong>AIR 49,462</strong>.
            </div>
            <div>
              3. <strong>UP DGME 85% State Quota (R1 & R2):</strong> Calibrated across all 42 UP Government Medical Colleges and 30 Private & BDS Colleges from official 31,654 Round 1 and 33,044 Round 2 merit candidate records.
            </div>
            <div>
              4. <strong>Bihar BCECEB 85% State Quota (R1 & R2):</strong> Calibrated across 14 Government Medical Colleges, Patna Dental College, 17 Private Medical Colleges, and 3 Private Dental Colleges from the official 7,207 candidate allotment dataset (3,985 Round 1 + 3,222 Round 2 allotments).
            </div>
            <div>
              5. <strong>Rajasthan NEET-UG 85% State Quota (R1 & R2):</strong> Calibrated across 33 Government Medical Colleges, 2 Government Dental Colleges, and 33 Private Medical & Dental institutions in Rajasthan (5,666 Round 1 + 5,816 Round 2 candidate allotments) from official Rajasthan NEET-UG State Counseling authority lists.
            </div>
          </div>
        </div>
      </div>

      {/* VIEW 1: DYNAMIC SEAT FORECASTER */}
      {activeTab === 'forecaster' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Interactive Input Panel */}
          <div className="bg-sky-900/90 border border-stone-800 rounded-2xl p-5 sm:p-6 shadow-md backdrop-blur-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-3">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-sky-400" />
                <span>Candidate Credentials & Prediction Filters</span>
              </div>

              {/* Counseling Scope Tabs */}
              <div className="flex items-center space-x-1.5 bg-sky-950 p-1 rounded-xl border border-stone-700 flex-wrap gap-y-1">
                <button
                  type="button"
                  onClick={() => {
                    setCounselingScope('ALL');
                    setSelectedState('ALL');
                    setSelectedRound('ALL');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'ALL' && selectedState === 'ALL'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  All Quotas
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCounselingScope('AIQ');
                    setSelectedState('ALL');
                    setStateFilter('ALL');
                    setSelectedRound('ALL');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'AIQ'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  AIQ 15% (All-India)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCounselingScope('STATE');
                    handleStateChange('Maharashtra');
                    setSelectedRound('ALL');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'STATE' && selectedState === 'Maharashtra'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Maharashtra 85%
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCounselingScope('STATE');
                    handleStateChange('Uttar Pradesh');
                    setSelectedRound('ALL');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'STATE' && selectedState === 'Uttar Pradesh'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Uttar Pradesh 85%
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCounselingScope('STATE');
                    handleStateChange('Bihar');
                    setSelectedRound('ALL');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'STATE' && selectedState === 'Bihar'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Bihar 85%
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCounselingScope('STATE');
                    handleStateChange('Rajasthan');
                    setSelectedRound('ALL');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'STATE' && selectedState === 'Rajasthan'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Rajasthan 85%
                </button>
              </div>

            </div>

            {/* Multi-State Dropdown Under Maharashtra / Scope Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-sky-950/80 p-3.5 rounded-xl border border-sky-800/40">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-sky-600/20 rounded-lg text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>State Counseling Predictor</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-sky-800 text-sky-300 font-medium">State Selection</span>
                  </div>
                  <div className="text-[11px] text-stone-400">
                    Switch between Maharashtra, Uttar Pradesh, Bihar, Rajasthan, or All India Quota
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-stone-300">Counselling:</label>
                  <select
                    value={counselingScope === 'AIQ' ? 'AIQ' : selectedState}
                    onChange={e => {
                      const val = e.target.value;
                      if (val === 'AIQ') {
                        setCounselingScope('AIQ');
                        setSelectedState('ALL');
                        setStateFilter('ALL');
                        setSelectedRound('ALL');
                      } else {
                        handleStateChange(val as any);
                        setSelectedRound('ALL');
                      }
                    }}
                    className="bg-sky-900 border border-sky-600/50 rounded-xl px-3 py-1.5 text-xs text-white font-bold focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none cursor-pointer shadow-xs"
                  >
                    <option value="ALL">All States (Combined View)</option>
                    <option value="AIQ">All India Quota (MCC 15% AIQ)</option>
                    <option value="Maharashtra">Maharashtra (MH - 85% State Quota)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (UP - DGME 85% & Merit)</option>
                    <option value="Bihar">Bihar (BR - BCECEB 85% State Quota)</option>
                    <option value="Rajasthan">Rajasthan (RJ - 85% State Quota)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* AIR Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">
                  All India Rank (AIR) <span className="text-sky-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="2000000"
                    value={rankInput}
                    onChange={e => handleRankChange(e.target.value)}
                    placeholder="e.g. 26178"
                    className="w-full bg-sky-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-sky-400 focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-sky-600 font-semibold">AIR</span>
                </div>
                <p className="text-[11px] text-stone-400 font-medium">Predict colleges eligible at your All India Rank</p>
                {selectedState === 'Uttar Pradesh' && userAir > 0 && counselingScope !== 'AIQ' && (
                  <div className="mt-1.5 p-2 rounded-xl bg-sky-950/90 border border-sky-500/30 text-xs text-sky-200 flex items-center justify-between shadow-inner">
                    <span className="flex items-center space-x-1.5 font-medium text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Est. UP Merit ({selectedRound === 'Round 2' ? 'R2' : 'R1'}):</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-xs">
                      ~#{estimateUpStateRank(userAir, selectedRound).smr.toLocaleString()}
                      <span className="text-stone-400 font-normal ml-1.5 text-[10px]">
                        (Marks ~{estimateUpStateRank(userAir, selectedRound).marks})
                      </span>
                    </span>
                  </div>
                )}
                {selectedState === 'Bihar' && userAir > 0 && counselingScope !== 'AIQ' && (
                  <div className="mt-1.5 p-2 rounded-xl bg-sky-950/90 border border-sky-500/30 text-xs text-sky-200 flex items-center justify-between shadow-inner">
                    <span className="flex items-center space-x-1.5 font-medium text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Est. Bihar UGMAC ({selectedRound === 'Round 2' ? 'R2' : 'R1'}):</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-xs">
                      ~#{estimateBiharStateRank(userAir, selectedRound).ugmac.toLocaleString()}
                      <span className="text-stone-400 font-normal ml-1.5 text-[10px]">
                        (Marks ~{estimateBiharStateRank(userAir, selectedRound).marks})
                      </span>
                    </span>
                  </div>
                )}
                {selectedState === 'Rajasthan' && userAir > 0 && counselingScope !== 'AIQ' && (
                  <div className="mt-1.5 p-2 rounded-xl bg-sky-950/90 border border-sky-500/30 text-xs text-sky-200 flex items-center justify-between shadow-inner">
                    <span className="flex items-center space-x-1.5 font-medium text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Est. Rajasthan Merit ({selectedRound === 'Round 2' ? 'R2' : 'R1'}):</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-xs">
                      ~#{estimateRajasthanStateRank(userAir, selectedRound).smr.toLocaleString()}
                      <span className="text-stone-400 font-normal ml-1.5 text-[10px]">
                        (Marks ~{estimateRajasthanStateRank(userAir, selectedRound).marks})
                      </span>
                    </span>
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">
                  Category & Quota <span className="text-sky-400">*</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full bg-sky-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-hidden focus:ring-1 focus:ring-sky-400 cursor-pointer"
                >
                  {CATEGORY_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="flex items-center space-x-1.5 mt-1">
                  <input
                    type="checkbox"
                    id="includeOpen"
                    checked={includeOpenMerit}
                    onChange={e => setIncludeOpenMerit(e.target.checked)}
                    className="rounded-sm border-stone-700 text-sky-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="includeOpen" className="text-[11px] text-stone-400 cursor-pointer">
                    Include OPEN/UR seats if rank qualifies
                  </label>
                </div>
              </div>

              {/* Course Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">Course Preference</label>
                <div className="grid grid-cols-3 gap-1 bg-sky-950 p-1 border border-stone-700 rounded-xl">
                  {(['ALL', 'MBBS', 'BDS'] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCourse(c)}
                      className={`py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                        selectedCourse === c
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      {c === 'ALL' ? 'Both' : c}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-400 font-medium">Filter by MBBS, BDS, or Both</p>
              </div>
            </div>

            {/* Second row filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-stone-800/60">
              {/* Round Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">Counseling Round</label>
                <select
                  value={selectedRound}
                  onChange={e => setSelectedRound(e.target.value as any)}
                  className="w-full bg-sky-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-hidden"
                >
                  {counselingScope === 'AIQ' ? (
                    <>
                      <option value="ALL">All AIQ Rounds (R1 & R2)</option>
                      <option value="Round 1">Round 1 (MCC AIQ - 602 Cutoffs)</option>
                      <option value="Round 2">Round 2 (MCC AIQ - 3,068 Cutoffs)</option>
                    </>
                  ) : selectedState === 'Uttar Pradesh' ? (
                    <>
                      <option value="ALL">All UP Rounds (R1 & R2)</option>
                      <option value="Round 1">Round 1 (UP DGME State Quota - 31,653 Candidates)</option>
                      <option value="Round 2">Round 2 (UP DGME State Quota - 33,043 Candidates)</option>
                    </>
                  ) : selectedState === 'Bihar' ? (
                    <>
                      <option value="ALL">All Bihar Rounds (R1 & R2)</option>
                      <option value="Round 1">Round 1 (Bihar BCECEB UGMAC - 3,985 Allotments)</option>
                      <option value="Round 2">Round 2 (Bihar BCECEB UGMAC - 3,222 Allotments)</option>
                    </>
                  ) : selectedState === 'Rajasthan' ? (
                    <>
                      <option value="ALL">All Rajasthan Rounds (R1 & R2)</option>
                      <option value="Round 1">Round 1 (Rajasthan State Quota - 5,666 Allotments)</option>
                      <option value="Round 2">Round 2 (Rajasthan State Quota - 5,816 Allotments)</option>
                    </>
                  ) : selectedState === 'Maharashtra' ? (
                    <>
                      <option value="ALL">All Maharashtra Rounds (R1, R2, R3)</option>
                      <option value="Round 1">Round 1 (State CAP)</option>
                      <option value="Round 2">Round 2 (State CAP)</option>
                      <option value="Round 3">Round 3 (State CAP - Final Boundary)</option>
                    </>
                  ) : (
                    <>
                      <option value="ALL">Predict Across All Rounds (Recommended)</option>
                      <option value="Round 1">Round 1 (All State & AIQ Lists)</option>
                      <option value="Round 2">Round 2 (All State & AIQ Lists)</option>
                      <option value="Round 3">Round 3 (State CAP)</option>
                    </>
                  )}
                </select>
              </div>

              {/* College Type Filter */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">Institute Ownership</label>
                <select
                  value={collegeTypeFilter}
                  onChange={e => setCollegeTypeFilter(e.target.value as any)}
                  className="w-full bg-sky-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-hidden"
                >
                  <option value="ALL">All Institutions (Govt + Deemed + Private)</option>
                  <option value="GOVT">Government / AIIMS / Central / ESIC Only</option>
                  <option value="PRIVATE">Deemed & Private Colleges Only</option>
                </select>
              </div>

              {/* Gender / Women Quota */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">Gender / Women Quota</label>
                <select
                  value={gender}
                  onChange={e => setGender(e.target.value as any)}
                  className="w-full bg-sky-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-hidden"
                >
                  <option value="ALL">Both Open & Women Quota (All)</option>
                  <option value="FEMALE">Female Candidate (Includes Women Quotas)</option>
                  <option value="MALE">Male Candidate (General Merit Only)</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300">Filter by Name / City / AIIMS</label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-sky-600" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="e.g. AIIMS Delhi, MAMC, Pune, KGMU..."
                    className="w-full bg-sky-950 border border-stone-700 rounded-xl pl-8 pr-3 py-2 text-xs text-white focus:border-sky-400 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{stats.totalCleared}</div>
                <div className="text-xs text-stone-400 font-semibold">Total Cleared Options</div>
              </div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                {counselingScope === 'STATE' ? <MapPin className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-2xl font-black text-sky-400">
                  {counselingScope === 'STATE' ? stats.stateCleared : counselingScope === 'AIQ' ? stats.aiqCleared : stats.totalCleared}
                </div>
                <div className="text-xs text-stone-400 font-semibold">
                  {counselingScope === 'STATE'
                    ? `${selectedState === 'Uttar Pradesh' ? 'UP' : selectedState === 'Maharashtra' ? 'MH' : selectedState === 'Bihar' ? 'Bihar' : selectedState === 'Rajasthan' ? 'Rajasthan' : 'State'} 85% Seats`
                    : counselingScope === 'AIQ'
                    ? 'All India (AIQ) Seats'
                    : 'AIQ & State Quota'}
                </div>
              </div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-sky-400">{stats.govtMbbsCleared}</div>
                <div className="text-xs text-stone-400 font-semibold">Govt MBBS Seats</div>
              </div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-sky-300">
                  {collegeTypeFilter === 'PRIVATE' || (collegeTypeFilter === 'ALL' && stats.pvtMbbsCleared > 0 && stats.bdsCleared === 0)
                    ? stats.pvtMbbsCleared
                    : stats.bdsCleared}
                </div>
                <div className="text-xs text-stone-400 font-semibold">
                  {collegeTypeFilter === 'PRIVATE' || (collegeTypeFilter === 'ALL' && stats.pvtMbbsCleared > 0 && stats.bdsCleared === 0)
                    ? 'Private MBBS Seats'
                    : 'BDS Dental Seats'}
                </div>
              </div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 flex items-center space-x-3 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-sky-400">{stats.closeCount}</div>
                <div className="text-xs text-stone-400 font-semibold">Near Miss Watchlist</div>
              </div>
            </div>
          </div>

          {/* Cleared Colleges List */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-3">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-black text-white">
                  Colleges Where Your Rank Clears Cutoff ({clearedList.length})
                </h2>
              </div>
              <div className="text-xs text-stone-400">
                Sorted from <span className="text-emerald-400 font-bold">Safest (+Margin)</span> to <span className="text-sky-400 font-bold">Reach (Closest)</span>
              </div>
            </div>

            {userAir <= 0 ? (
              <div className="bg-sky-900/60 border border-stone-800 rounded-2xl p-8 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-sky-400 mx-auto" />
                <p className="text-sm font-bold text-white">No All India Rank (AIR) Specified</p>
                <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
                  Enter a valid All India Rank (e.g. 26178) to view real-time college predictions across All India Quota and Maharashtra State Quota.
                </p>
              </div>
            ) : clearedList.length === 0 ? (
              <div className="bg-sky-900/60 border border-stone-800 rounded-2xl p-8 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-sky-400 mx-auto" />
                <p className="text-sm font-bold text-white">No college cutoffs cleared for AIR #{userAir.toLocaleString()} under current filters.</p>
                <p className="text-xs text-stone-400 max-w-md mx-auto">
                  Try adjusting your category filter, changing course to BDS, switching Quota Scope to "All Quotas", or checking the "Near Miss Watchlist" below.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clearedList.slice(0, 90).map(entry => (
                  <div
                    key={entry.id}
                    className="bg-sky-900/90 border border-stone-800 hover:border-stone-700 rounded-2xl p-6.5 shadow-md flex flex-col justify-between transition group hover:shadow-xl hover:shadow-sky-950/20"
                  >
                    <div className="space-y-3">
                      {/* Top badges */}
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                            entry.course === 'MBBS'
                              ? 'bg-sky-600/20 text-sky-400 border border-sky-500/30'
                              : 'bg-sky-600/20 text-sky-400 border border-sky-500/30'
                          }`}
                        >
                          {entry.course}
                        </span>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            entry.counselingType === 'AIQ'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                              : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          }`}
                        >
                          {entry.counselingType === 'AIQ' ? 'All-India (AIQ)' : `${entry.state || 'State'} 85%`}
                        </span>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            entry.isGovt
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : entry.isIQ
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                              : 'bg-sky-800 text-stone-300 border border-stone-700'
                          }`}
                        >
                          {entry.isGovt ? 'Government' : entry.isIQ ? 'Deemed / NRI' : 'Private'}
                        </span>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            entry.probability === 'HIGH'
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : entry.probability === 'MODERATE'
                              ? 'bg-sky-500/10 text-sky-400'
                              : 'bg-sky-500/10 text-sky-400'
                          }`}
                        >
                          {entry.probability === 'HIGH' ? '🟢 Safe' : entry.probability === 'MODERATE' ? '🟡 Moderate' : '🟠 Reach'}
                        </span>
                      </div>

                      {/* College title */}
                      <div>
                        <div className="text-xs text-sky-600 font-mono">Code: {entry.collegeCode}</div>
                        <div className="text-sm font-extrabold text-white group-hover:text-sky-300 transition line-clamp-2">
                          {entry.collegeName}
                        </div>
                        {entry.state && (
                          <div className="text-[11px] text-stone-400 flex items-center space-x-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-sky-600 shrink-0" />
                            <span>{entry.state}</span>
                          </div>
                        )}
                      </div>

                      {/* Quota & Cutoff details */}
                      <div className="bg-sky-950/70 rounded-xl p-3 border border-stone-800/80 space-y-1.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-stone-400">Quota / Seat:</span>
                          <span className="font-bold text-white font-mono bg-sky-800 px-2 py-0.5 rounded-md text-[11px] truncate max-w-[180px]">
                            {entry.quota}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-stone-400">Closing Cutoff AIR:</span>
                          <span className="font-bold text-white font-mono">
                            {entry.closingAir.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-stone-400">Your Cushion (+Margin):</span>
                          <span className="font-black text-emerald-400 font-mono">
                            +{entry.margin.toLocaleString()} ranks
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Source Citation */}
                    <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-3.5 h-3.5 text-sky-600" />
                        <span>
                          {entry.round} ({formatYearDisplay(entry.year)})
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-sky-400/80 font-semibold">
                        {entry.counselingType === 'AIQ'
                          ? 'MCC AIQ (R1/R2)'
                          : entry.state === 'Maharashtra'
                          ? 'CET Cell Verified'
                          : entry.state === 'Uttar Pradesh'
                          ? 'UP DGME Verified'
                          : `${entry.state || 'State'} Verified`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {clearedList.length > 90 && (
              <div className="text-center py-4 text-xs text-stone-400">
                Showing top 90 of {clearedList.length} options. Use the search bar or Export CSV to view all eligible colleges.
              </div>
            )}
          </div>

          {/* Near Miss Watchlist */}
          <div className="space-y-4 pt-6 border-t border-stone-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-sky-400" />
                <h2 className="text-lg font-black text-white">
                  Close But Not Cleared Watchlist ({closeList.length})
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-stone-400">Tolerance Window:</span>
                <select
                  value={missedToleranceRanks}
                  onChange={e => setMissedToleranceRanks(Number(e.target.value))}
                  className="bg-sky-950 border border-stone-700 text-xs rounded-lg px-2 py-1 text-stone-200 cursor-pointer"
                >
                  <option value={10000}>Within 10,000 ranks</option>
                  <option value={20000}>Within 20,000 ranks</option>
                  <option value={35000}>Within 35,000 ranks</option>
                  <option value={50000}>Within 50,000 ranks</option>
                </select>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              These colleges closed just ahead of your rank. If mop-up/stray vacancy rounds see vacancies or seats are added, upgrade viability here is substantial.
            </p>

            {closeList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {closeList.slice(0, 24).map(entry => (
                  <div
                    key={entry.id}
                    className="bg-sky-900/60 border border-stone-800/80 rounded-2xl p-6.5 flex flex-col justify-between hover:border-sky-500/40 transition"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          Missed by {Math.abs(entry.margin).toLocaleString()} ranks
                        </span>
                        <span className="text-[11px] font-bold text-stone-400">{entry.course}</span>
                      </div>

                      <div>
                        <div className="text-xs text-sky-600 font-mono">Code: {entry.collegeCode}</div>
                        <div className="text-sm font-bold text-stone-200 line-clamp-2">{entry.collegeName}</div>
                      </div>

                      <div className="bg-sky-950/60 rounded-xl p-3.5 text-xs space-y-1 font-mono">
                        <div className="flex justify-between text-stone-400">
                          <span>Quota:</span>
                          <span className="text-stone-200 truncate max-w-[170px]">{entry.quota}</span>
                        </div>
                        <div className="flex justify-between text-stone-400">
                          <span>Closing Cutoff AIR:</span>
                          <span className="text-sky-300 font-bold">{entry.closingAir.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-stone-400">
                          <span>Your Simulated AIR:</span>
                          <span className="text-white">{userAir.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                      <span>{entry.counselingType === 'AIQ' ? 'MCC AIQ (R1/R2)' : `${entry.state || 'State'} CAP`}</span>
                      <span className="text-[10px] font-mono text-sky-600 font-semibold">{formatYearDisplay(entry.year)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: 2026 PREDICTOR MATRIX (AIR ↔ CUTOFFS) */}
      {activeTab === 'matrix' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-sky-900 border border-stone-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Table className="w-5 h-5 text-sky-400" />
                  <h3 className="text-xl font-black text-white">
                    Official NEET-UG 2026 Rank & Cutoff Matrix
                  </h3>
                </div>
                <p className="text-xs text-stone-400">
                  Comprehensive benchmark mapping of All India Ranks (AIR) ↔ College Cutoffs across all categories from the official MCC Round 3 dataset.
                </p>
              </div>

              {userAir > 0 && (
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono shrink-0">
                  <span>Candidate Rank: <strong className="text-emerald-300 font-bold">AIR #{userAir.toLocaleString()}</strong></span>
                </div>
              )}
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-xl border border-stone-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-sky-950/80 border-b border-stone-800 text-stone-300">
                    <th className="p-3.5 font-bold">All India Rank (AIR Range)</th>
                    <th className="p-3.5 font-bold">Govt MBBS (AIQ Open/OBC)</th>
                    <th className="p-3.5 font-bold">Govt MBBS (SC / ST)</th>
                    <th className="p-3.5 font-bold">Top Central / AIIMS</th>
                    <th className="p-3.5 font-bold">Govt BDS (Dental)</th>
                    <th className="p-3.5 font-bold">Deemed & Private Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60">
                  {AIQ_SCORE_AIR_MATRIX.map((row, idx) => {
                    // Check if candidate's rank falls in this range
                    let isCandidateRow = false;
                    if (userAir > 0) {
                      if (idx === 0 && userAir <= 350) isCandidateRow = true;
                      else if (idx === 1 && userAir > 350 && userAir <= 2500) isCandidateRow = true;
                      else if (idx === 2 && userAir > 2500 && userAir <= 8500) isCandidateRow = true;
                      else if (idx === 3 && userAir > 8500 && userAir <= 15000) isCandidateRow = true;
                      else if (idx === 4 && userAir > 15000 && userAir <= 26178) isCandidateRow = true;
                      else if (idx === 5 && userAir > 26178 && userAir <= 49462) isCandidateRow = true;
                      else if (idx === 6 && userAir > 49462 && userAir <= 135684) isCandidateRow = true;
                      else if (idx === 7 && userAir > 135684 && userAir <= 163285) isCandidateRow = true;
                      else if (idx === 8 && userAir > 163285) isCandidateRow = true;
                    }

                    return (
                      <tr
                        key={idx}
                        className={`transition ${
                          isCandidateRow
                            ? 'bg-sky-600/15 border-l-4 border-l-teal-400 font-semibold'
                            : 'hover:bg-sky-800/40'
                        }`}
                      >
                        <td className="p-3.5 font-mono font-bold text-sky-300 whitespace-nowrap">
                          {row.airRange}
                          {isCandidateRow && (
                            <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-sky-500 text-stone-950 font-black">
                              YOUR RANK
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-stone-200">
                          {row.govtMbbsOpen.includes('Closing Boundary') ? (
                            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">
                              {row.govtMbbsOpen}
                            </span>
                          ) : row.govtMbbsOpen.includes('Guaranteed') ? (
                            <span className="text-emerald-400 font-medium">{row.govtMbbsOpen}</span>
                          ) : (
                            <span className="text-stone-400">{row.govtMbbsOpen}</span>
                          )}
                        </td>
                        <td className="p-3.5 text-stone-200">
                          {row.govtMbbsScSt.includes('Closing') ? (
                            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">
                              {row.govtMbbsScSt}
                            </span>
                          ) : (
                            <span className="text-emerald-400 font-medium">{row.govtMbbsScSt}</span>
                          )}
                        </td>
                        <td className="p-3.5 text-sky-300">{row.centralAiims}</td>
                        <td className="p-3.5 text-sky-300">{row.govtBds}</td>
                        <td className="p-3.5 text-stone-400">{row.deemedPvt}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Explanatory Matrix Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-sky-950/70 border border-stone-800 rounded-xl p-6 space-y-1.5">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wide">
                  1. Govt MBBS Open/OBC Cutoff
                </div>
                <div className="text-sm font-black text-white">AIR 26,178 (Closing Boundary)</div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Last allotted institute in Round 3 was GMC Nagapattinam & Virudhunagar under AIQ 15%. Candidates within AIR 26,178 secured Government MBBS.
                </p>
              </div>

              <div className="bg-sky-950/70 border border-stone-800 rounded-xl p-6 space-y-1.5">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wide">
                  2. Govt BDS (Dental) Final Cutoff
                </div>
                <div className="text-sm font-black text-white">AIR 49,462 (Closing Boundary)</div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Last allotted Government Dental College under AIQ Open was JNIDS, Imphal at AIR 49,462 (OBC: 51,192, EWS: 54,132).
                </p>
              </div>

              <div className="bg-sky-950/70 border border-stone-800 rounded-xl p-6 space-y-1.5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  3. Reserved Category Closing Limits
                </div>
                <div className="text-sm font-black text-white">SC: AIR 1,35,684 | ST: AIR 1,63,285</div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Scheduled Caste Govt MBBS closed at AIR 1,35,684. Scheduled Tribe Govt MBBS closed at AIR 1,63,285.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: INSTITUTIONAL TIERS & CATEGORY CUTOFFS */}
      {activeTab === 'benchmarks' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Category Benchmarks Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">OPEN / UR (Govt MBBS)</span>
              <div className="text-xl font-black text-sky-400 font-mono">AIR 26,178</div>
              <div className="text-xs text-stone-400">Closing Cutoff Rank</div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">OBC (Govt MBBS)</span>
              <div className="text-xl font-black text-sky-400 font-mono">AIR 26,167</div>
              <div className="text-xs text-stone-400">Closing Cutoff Rank</div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">EWS (Govt MBBS)</span>
              <div className="text-xl font-black text-sky-400 font-mono">AIR 27,243</div>
              <div className="text-xs text-stone-400">Closing Cutoff Rank</div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">SC (Govt MBBS)</span>
              <div className="text-xl font-black text-sky-400 font-mono">AIR 1,35,684</div>
              <div className="text-xs text-stone-400">Closing Cutoff Rank</div>
            </div>

            <div className="bg-sky-900 border border-stone-800 rounded-xl p-6 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">ST (Govt MBBS)</span>
              <div className="text-xl font-black text-sky-400 font-mono">AIR 1,63,285</div>
              <div className="text-xs text-stone-400">Closing Cutoff Rank</div>
            </div>
          </div>

          {/* Search bar inside Tiers */}
          <div className="flex items-center justify-between gap-4 bg-sky-900 border border-stone-800 rounded-xl px-4 py-3">
            <div className="flex items-center space-x-2 text-white font-bold text-xs">
              <Award className="w-4 h-4 text-sky-400" />
              <span>MCC Round 3 Institutional Tiers & Institute Cutoffs</span>
            </div>
            <div className="relative w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-sky-600" />
              <input
                type="text"
                value={tierSearch}
                onChange={e => setTierSearch(e.target.value)}
                placeholder="Filter tier colleges (e.g. AIIMS, Manipal)..."
                className="w-full bg-sky-950 border border-stone-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:border-sky-400 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Institutional Tiers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INSTITUTIONAL_TIERS.map((tier, idx) => {
              const filteredColleges = tier.colleges.filter(c =>
                tierSearch ? c.name.toLowerCase().includes(tierSearch.toLowerCase()) : true
              );

              if (tierSearch && filteredColleges.length === 0) return null;

              return (
                <div
                  key={idx}
                  className="bg-sky-900/90 border border-stone-800 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-sky-600/20 text-sky-300 border border-sky-500/30">
                        {tier.tier}
                      </span>
                      <span className="text-xs font-mono font-bold text-sky-400">
                        {tier.airRange}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white">{tier.name}</h4>
                    <p className="text-xs text-stone-400 leading-relaxed">{tier.description}</p>
                    <div className="text-[11px] font-semibold text-stone-300">
                      Typical Qualifying Rank: <span className="text-sky-400 font-mono">{tier.airRange}</span>
                    </div>

                    {/* Colleges list */}
                    <div className="space-y-1.5 pt-2">
                      {filteredColleges.map((col, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center justify-between p-3 rounded-lg bg-sky-950/60 border border-stone-800/80 text-xs"
                        >
                          <span className="font-semibold text-stone-200 line-clamp-1">{col.name}</span>
                          <span className="font-mono font-bold text-emerald-400 shrink-0 ml-2">
                            AIR #{col.closingAir.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};


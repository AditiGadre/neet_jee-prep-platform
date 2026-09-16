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

// Calibrated Rank estimation curve based on Official NEET-UG 2024-2025 AIQ Round 3 MCC Allotment data
export function formatYearDisplay(year?: string): string {
  if (!year) return '2024-2025';
  if (year.includes('2025') || year.includes('2024')) return '2024-2025';
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
  if (score >= 655) return 26178; // Official AIQ Round 3 Open/OBC Govt MBBS cutoff boundary
  if (score >= 645) return 35000;
  if (score >= 635) return 44000;
  if (score >= 630) return 49462; // Official AIQ Round 3 Govt BDS Open cutoff boundary
  if (score >= 620) return 62000;
  if (score >= 610) return 77000;
  if (score >= 600) return 95000;
  if (score >= 585) return 120000;
  if (score >= 575) return 135684; // Official AIQ Round 3 SC Govt MBBS cutoff boundary
  if (score >= 552) return 163285; // Official AIQ Round 3 ST Govt MBBS cutoff boundary
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

export const CATEGORY_OPTIONS = [
  { value: 'OPEN', label: 'General / Unreserved (OPEN / UR)', group: 'General' },
  { value: 'OBC', label: 'Other Backward Classes (OBC)', group: 'Reserved' },
  { value: 'EWS', label: 'Economically Weaker Section (EWS)', group: 'Reserved' },
  { value: 'SC', label: 'Scheduled Castes (SC)', group: 'Reserved' },
  { value: 'ST', label: 'Scheduled Tribes (ST)', group: 'Reserved' },
  { value: 'PWD', label: 'Persons with Disabilities (PwD / PH)', group: 'Horizontal' },
  { value: 'SEBC', label: 'Socially & Educationally Backward (SEBC - State)', group: 'State Reserved' },
  { value: 'VJ', label: 'Vimukta Jati (VJ / NT-A - State)', group: 'State Reserved' },
  { value: 'NTB', label: 'Nomadic Tribes-B (NT-B - State)', group: 'State Reserved' },
  { value: 'NTC', label: 'Nomadic Tribes-C (NT-C - State)', group: 'State Reserved' },
  { value: 'NTD', label: 'Nomadic Tribes-D (NT-D - State)', group: 'State Reserved' },
  { value: 'DEF', label: 'Defense Personnel (DEF1 / DEF2 / DEF3)', group: 'State Special' },
  { value: 'IQ', label: 'Deemed / Management / NRI Quota', group: 'Management' },
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

  const initScore = initialScore !== undefined ? initialScore : 655;
  const initAir = initialAir !== undefined && initialAir > 0 ? initialAir : (initialScore !== undefined && initialScore > 0 ? estimateRankFromScore(initialScore) : 26178);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'forecaster' | 'matrix' | 'benchmarks'>('forecaster');

  // Input states
  const [inputMode, setInputMode] = useState<'rank' | 'score'>(initialAir ? 'rank' : 'score');
  const [rankInput, setRankInput] = useState<string>(String(initAir));
  const [scoreInput, setScoreInput] = useState<string>(String(initScore));
  const [selectedCourse, setSelectedCourse] = useState<'ALL' | 'MBBS' | 'BDS'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>(resolvedCategory);
  const [gender, setGender] = useState<'ALL' | 'FEMALE' | 'MALE'>(defaultGender);
  const [counselingScope, setCounselingScope] = useState<'ALL' | 'AIQ' | 'STATE'>('ALL');
  const [includeOpenMerit, setIncludeOpenMerit] = useState<boolean>(true);
  const [selectedRound, setSelectedRound] = useState<'ALL' | 'Round 1' | 'Round 2' | 'Round 3'>('ALL');
  const [collegeTypeFilter, setCollegeTypeFilter] = useState<'ALL' | 'GOVT' | 'PRIVATE'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [stateFilter, setStateFilter] = useState<string>('ALL');
  const [missedToleranceRanks, setMissedToleranceRanks] = useState<number>(20000);

  // Tier search state
  const [tierSearch, setTierSearch] = useState<string>('');

  React.useEffect(() => {
    if (initialScore !== undefined) {
      setScoreInput(String(initialScore));
      if (initialAir && initialAir > 0) {
        setRankInput(String(initialAir));
      } else if (initialScore > 0) {
        setRankInput(String(estimateRankFromScore(initialScore)));
      } else {
        setRankInput('0');
      }
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
    if (inputMode === 'rank') {
      const r = parseInt(rankInput.replace(/\D/g, ''), 10);
      return isNaN(r) || r <= 0 ? 0 : r;
    } else {
      const s = parseInt(scoreInput.replace(/\D/g, ''), 10);
      if (isNaN(s) || s <= 0) return 0;
      return estimateRankFromScore(Math.min(720, s));
    }
  }, [inputMode, rankInput, scoreInput]);

  const activeScore = useMemo(() => {
    if (inputMode === 'score') {
      const s = parseInt(scoreInput.replace(/\D/g, ''), 10);
      return isNaN(s) ? 0 : s;
    } else {
      if (userAir <= 0) return 0;
      return estimateScoreFromRank(userAir);
    }
  }, [inputMode, scoreInput, userAir]);

  // Handle Score Change
  const handleScoreChange = (val: string) => {
    setScoreInput(val);
    const s = parseInt(val.replace(/\D/g, ''), 10);
    if (!isNaN(s) && s > 0) {
      const estRank = estimateRankFromScore(Math.min(720, s));
      setRankInput(String(estRank));
    } else {
      setRankInput('0');
    }
  };

  // Handle Rank Change
  const handleRankChange = (val: string) => {
    setRankInput(val);
    const r = parseInt(val.replace(/\D/g, ''), 10);
    if (!isNaN(r) && r > 0) {
      const estScore = estimateScoreFromRank(r);
      setScoreInput(String(estScore));
    } else {
      setScoreInput('0');
    }
  };

  // Filter and compute cleared vs close-not-cleared
  const { clearedList, closeList, stats } = useMemo(() => {
    if (userAir <= 0 || activeScore <= 0) {
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

    const filteredRecords = NEET_CUTOFFS_DATA.filter(entry => {
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

      // 6. State Filter
      if (stateFilter !== 'ALL' && entry.state && !entry.state.toLowerCase().includes(stateFilter.toLowerCase())) {
        return false;
      }

      // 7. Category Filter
      const isTargetCategory = entry.categoryGroup === selectedCategory;
      const isOpenEligible = includeOpenMerit && selectedCategory !== 'OPEN' && entry.categoryGroup === 'OPEN';

      if (!isTargetCategory && !isOpenEligible) return false;

      // 8. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = entry.collegeName.toLowerCase().includes(q);
        const matchCode = entry.collegeCode.toLowerCase().includes(q);
        const matchQuota = entry.quota.toLowerCase().includes(q);
        const matchRaw = entry.rawName ? entry.rawName.toLowerCase().includes(q) : false;
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
    activeScore,
    counselingScope,
    selectedCourse,
    selectedCategory,
    gender,
    includeOpenMerit,
    selectedRound,
    collegeTypeFilter,
    searchQuery,
    stateFilter,
    missedToleranceRanks
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
    <div className={`space-y-6 ${isInsideScorecard ? 'w-full text-slate-100' : 'max-w-7xl mx-auto p-2 sm:p-4 lg:p-6 text-slate-100'} animate-in fade-in duration-300`}>
      {/* 1. Header Banner & Official MCC 113-Page Attribution */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official NEET-UG AIQ 2024-2025 (MCC 113-Page Round 3) & State CAP Dataset</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isInsideScorecard ? (
                <>SECTION 7: Predicted Medical Colleges & AIQ Seat Allotment Matrix</>
              ) : (
                <>NEET MBBS & BDS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">College Predictor Matrix</span></>
              )}
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Admission viability calibrated dynamically from your score of <strong className="text-cyan-400 font-mono">{activeScore}/720 Marks</strong> (Simulated AIR: <strong className="text-emerald-400 font-mono">#{userAir > 0 ? userAir.toLocaleString() : 'N/A'}</strong>) across <strong className="text-white">10,701 verified selection entries</strong> (including 3,706 Official MCC Round 3 All-India Quota, AIIMS, Central Universities & Deemed Medical Colleges).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
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
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
          <button
            onClick={() => setActiveTab('forecaster')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'forecaster'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span>Interactive Seat Forecaster</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-200 border border-blue-500/30 font-mono">
              {stats.totalCleared} Options
            </span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Table className="w-4 h-4 text-amber-400" />
            <span>Score ↔ AIR ↔ Cutoff Matrix</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-amber-900/60 text-amber-200 border border-amber-500/30 font-semibold">
              Official AIQ 2024-2025
            </span>
          </button>

          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'benchmarks'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span>Institutional Tiers & Category Cutoffs</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-purple-900/60 text-purple-200 border border-purple-500/30 font-semibold">
              AIIMS & Central
            </span>
          </button>
        </div>

        {/* Caveat Callout Box */}
        <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-amber-300 uppercase tracking-wide">
              Official MCC All India Quota & State Selection Attributions:
            </div>
            <div>
              1. <strong>MCC AIQ Round 3 Reconstructed Cutoffs:</strong> Includes all 3,706 closing cutoffs across AIIMS, Central Institutes, AFMC, ESIC, State GMCs (15% AIQ), and Deemed Universities from the official 113-page allotment release.
            </div>
            <div>
              2. <strong>Round 3 Absolute Boundary:</strong> Open/OBC Govt MBBS closed at <strong>AIR 26,178</strong> (~655 Marks), SC Govt MBBS closed at <strong>AIR 1,35,684</strong> (~575 Marks), ST at <strong>AIR 1,63,285</strong> (~552 Marks), and Govt BDS at <strong>AIR 49,462</strong> (~630 Marks).
            </div>
          </div>
        </div>
      </div>

      {/* VIEW 1: DYNAMIC SEAT FORECASTER */}
      {activeTab === 'forecaster' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Interactive Input Panel */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md backdrop-blur-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                <span>Candidate Credentials & Prediction Filters</span>
              </div>

              {/* Counseling Scope Toggle */}
              <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setCounselingScope('ALL')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'ALL'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Quotas (10.7k)
                </button>
                <button
                  onClick={() => setCounselingScope('AIQ')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'AIQ'
                      ? 'bg-cyan-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AIQ 15% / Central / Deemed
                </button>
                <button
                  onClick={() => setCounselingScope('STATE')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    counselingScope === 'STATE'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  State 85% Quota
                </button>
              </div>

              {/* Input Mode Toggle */}
              <div className="flex items-center rounded-lg bg-slate-800/80 p-1 border border-slate-700">
                <button
                  onClick={() => setInputMode('rank')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                    inputMode === 'rank' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  By Rank (AIR)
                </button>
                <button
                  onClick={() => setInputMode('score')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                    inputMode === 'score' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  By Score (/720)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* AIR Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  All India Rank (AIR) <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="2000000"
                    value={rankInput}
                    onChange={e => handleRankChange(e.target.value)}
                    placeholder="e.g. 26178"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:outline-hidden focus:ring-1 focus:ring-cyan-400"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-semibold">AIR</span>
                </div>
                {inputMode === 'score' && (
                  <p className="text-[11px] text-cyan-400 font-medium">Calibrated from NEET Score ~{scoreInput}</p>
                )}
              </div>

              {/* NEET Score Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  NEET Score (Marks / 720)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="720"
                    value={scoreInput}
                    onChange={e => handleScoreChange(e.target.value)}
                    placeholder="e.g. 655"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:outline-hidden focus:ring-1 focus:ring-cyan-400"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-semibold">/ 720</span>
                </div>
                {inputMode === 'rank' && (
                  <p className="text-[11px] text-slate-400 font-medium">Calibrated Marks ~{scoreInput}/720</p>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  Category & Quota <span className="text-red-400">*</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-hidden focus:ring-1 focus:ring-cyan-400 cursor-pointer"
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
                    className="rounded-sm border-slate-700 text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="includeOpen" className="text-[11px] text-slate-400 cursor-pointer">
                    Include OPEN/UR seats if rank qualifies
                  </label>
                </div>
              </div>

              {/* Course Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">Course Preference</label>
                <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 border border-slate-700 rounded-xl">
                  {(['ALL', 'MBBS', 'BDS'] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCourse(c)}
                      className={`py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                        selectedCourse === c
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {c === 'ALL' ? 'Both' : c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Second row filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-slate-800/60">
              {/* Round Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">Counseling Round</label>
                <select
                  value={selectedRound}
                  onChange={e => setSelectedRound(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-hidden"
                >
                  <option value="ALL">Predict Across All Rounds (Recommended)</option>
                  <option value="Round 3">Round 3 (2024-2025 Final AIQ & State Allotment)</option>
                  <option value="Round 1">Round 1 (2024-2025)</option>
                  <option value="Round 2">Round 2 (2024-2025)</option>
                </select>
              </div>

              {/* College Type Filter */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">Institute Ownership</label>
                <select
                  value={collegeTypeFilter}
                  onChange={e => setCollegeTypeFilter(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-hidden"
                >
                  <option value="ALL">All Institutions (Govt + Deemed + Private)</option>
                  <option value="GOVT">Government / AIIMS / Central / ESIC Only</option>
                  <option value="PRIVATE">Deemed & Private Colleges Only</option>
                </select>
              </div>

              {/* Gender / Women Quota */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">Gender / Women Quota</label>
                <select
                  value={gender}
                  onChange={e => setGender(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-hidden"
                >
                  <option value="ALL">Both Open & Women Quota (All)</option>
                  <option value="FEMALE">Female Candidate (Includes Women Quotas)</option>
                  <option value="MALE">Male Candidate (General Merit Only)</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">Filter by Name / City / AIIMS</label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="e.g. AIIMS Delhi, MAMC, Pune, KGMU..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{stats.totalCleared}</div>
                <div className="text-xs text-slate-400 font-semibold">Total Cleared Options</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400">{stats.aiqCleared}</div>
                <div className="text-xs text-slate-400 font-semibold">All India (AIQ) Seats</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-blue-400">{stats.govtMbbsCleared}</div>
                <div className="text-xs text-slate-400 font-semibold">Govt MBBS Seats</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-indigo-300">{stats.bdsCleared}</div>
                <div className="text-xs text-slate-400 font-semibold">BDS Dental Seats</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400">{stats.closeCount}</div>
                <div className="text-xs text-slate-400 font-semibold">Near Miss Watchlist</div>
              </div>
            </div>
          </div>

          {/* Cleared Colleges List */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-black text-white">
                  Colleges Where Your Rank Clears Cutoff ({clearedList.length})
                </h2>
              </div>
              <div className="text-xs text-slate-400">
                Sorted from <span className="text-emerald-400 font-bold">Safest (+Margin)</span> to <span className="text-amber-400 font-bold">Reach (Closest)</span>
              </div>
            </div>

            {activeScore <= 0 || userAir <= 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
                <p className="text-sm font-bold text-white">No Medical Colleges Allotted (Current Score: 0 Marks)</p>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Enter a valid NEET score (between 150 and 720) or All India Rank to view real-time college predictions across All India Quota and State Quota.
                </p>
              </div>
            ) : clearedList.length === 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
                <p className="text-sm font-bold text-white">No college cutoffs cleared for AIR #{userAir.toLocaleString()} under current filters.</p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try adjusting your category filter, changing course to BDS, switching Quota Scope to "All Quotas", or checking the "Near Miss Watchlist" below.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clearedList.slice(0, 90).map(entry => (
                  <div
                    key={entry.id}
                    className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4.5 shadow-md flex flex-col justify-between transition group hover:shadow-xl hover:shadow-blue-950/20"
                  >
                    <div className="space-y-3">
                      {/* Top badges */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                            entry.course === 'MBBS'
                              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                              : 'bg-teal-600/20 text-teal-400 border border-teal-500/30'
                          }`}
                        >
                          {entry.course}
                        </span>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            entry.counselingType === 'AIQ'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          }`}
                        >
                          {entry.counselingType === 'AIQ' ? 'All-India (AIQ)' : 'State Quota'}
                        </span>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            entry.isGovt
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : entry.isIQ
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {entry.isGovt ? 'Government' : entry.isIQ ? 'Deemed / NRI' : 'Private'}
                        </span>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            entry.probability === 'HIGH'
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : entry.probability === 'MODERATE'
                              ? 'bg-blue-500/10 text-cyan-400'
                              : 'bg-amber-500/10 text-amber-400'
                          }`}
                        >
                          {entry.probability === 'HIGH' ? '🟢 Safe' : entry.probability === 'MODERATE' ? '🟡 Moderate' : '🟠 Reach'}
                        </span>
                      </div>

                      {/* College title */}
                      <div>
                        <div className="text-xs text-slate-500 font-mono">Code: {entry.collegeCode}</div>
                        <div className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition line-clamp-2">
                          {entry.collegeName}
                        </div>
                        {entry.state && (
                          <div className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                            <span>{entry.state}</span>
                          </div>
                        )}
                      </div>

                      {/* Quota & Cutoff details */}
                      <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 space-y-1.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Quota / Seat:</span>
                          <span className="font-bold text-white font-mono bg-slate-800 px-2 py-0.5 rounded-md text-[11px] truncate max-w-[180px]">
                            {entry.quota}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Closing Cutoff AIR:</span>
                          <span className="font-bold text-white font-mono">
                            {entry.closingAir.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Your Cushion (+Margin):</span>
                          <span className="font-black text-emerald-400 font-mono">
                            +{entry.margin.toLocaleString()} ranks
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Source Citation */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-3.5 h-3.5 text-slate-500" />
                        <span>
                          {entry.round} ({formatYearDisplay(entry.year)})
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/80 font-semibold">
                        {entry.counselingType === 'AIQ' ? 'MCC AIQ Round 3' : 'CET Cell Verified'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {clearedList.length > 90 && (
              <div className="text-center py-4 text-xs text-slate-400">
                Showing top 90 of {clearedList.length} options. Use the search bar or Export CSV to view all eligible colleges.
              </div>
            )}
          </div>

          {/* Near Miss Watchlist */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <h2 className="text-lg font-black text-white">
                  Close But Not Cleared Watchlist ({closeList.length})
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-400">Tolerance Window:</span>
                <select
                  value={missedToleranceRanks}
                  onChange={e => setMissedToleranceRanks(Number(e.target.value))}
                  className="bg-slate-950 border border-slate-700 text-xs rounded-lg px-2 py-1 text-slate-200 cursor-pointer"
                >
                  <option value={10000}>Within 10,000 ranks</option>
                  <option value={20000}>Within 20,000 ranks</option>
                  <option value={35000}>Within 35,000 ranks</option>
                  <option value={50000}>Within 50,000 ranks</option>
                </select>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              These colleges closed just ahead of your rank. If mop-up/stray vacancy rounds see vacancies or seats are added, upgrade viability here is substantial.
            </p>

            {closeList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {closeList.slice(0, 24).map(entry => (
                  <div
                    key={entry.id}
                    className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4.5 flex flex-col justify-between hover:border-amber-500/40 transition"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Missed by {Math.abs(entry.margin).toLocaleString()} ranks
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">{entry.course}</span>
                      </div>

                      <div>
                        <div className="text-xs text-slate-500 font-mono">Code: {entry.collegeCode}</div>
                        <div className="text-sm font-bold text-slate-200 line-clamp-2">{entry.collegeName}</div>
                      </div>

                      <div className="bg-slate-950/60 rounded-xl p-2.5 text-xs space-y-1 font-mono">
                        <div className="flex justify-between text-slate-400">
                          <span>Quota:</span>
                          <span className="text-slate-200 truncate max-w-[170px]">{entry.quota}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Closing Cutoff AIR:</span>
                          <span className="text-amber-300 font-bold">{entry.closingAir.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Your Simulated AIR:</span>
                          <span className="text-white">{userAir.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{entry.counselingType === 'AIQ' ? 'MCC AIQ Round 3' : 'State CAP'}</span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">{formatYearDisplay(entry.year)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: AIQ 2024-2025 PREDICTOR MATRIX (SCORE ↔ AIR ↔ CUTOFFS) */}
      {activeTab === 'matrix' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Table className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl font-black text-white">
                    Official NEET-UG AIQ 2024-2025 Predictor Matrix
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  Comprehensive benchmark mapping of NEET Scores ↔ All India Ranks (AIR) ↔ College Cutoffs across all categories from the 113-page MCC Round 3 dataset.
                </p>
              </div>

              {activeScore > 0 && (
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono shrink-0">
                  <span>Your Score: <strong>{activeScore}/720</strong></span>
                  <span>•</span>
                  <span>Est. AIR: <strong>#{userAir.toLocaleString()}</strong></span>
                </div>
              )}
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-bold">NEET Score (/720)</th>
                    <th className="p-3.5 font-bold">Expected AIR</th>
                    <th className="p-3.5 font-bold">Govt MBBS (AIQ Open/OBC)</th>
                    <th className="p-3.5 font-bold">Govt MBBS (SC / ST)</th>
                    <th className="p-3.5 font-bold">Top Central / AIIMS</th>
                    <th className="p-3.5 font-bold">Govt BDS (Dental)</th>
                    <th className="p-3.5 font-bold">Deemed & Private Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {AIQ_SCORE_AIR_MATRIX.map((row, idx) => {
                    // Check if candidate's score falls in this range
                    let isCandidateRow = false;
                    if (idx === 0 && activeScore >= 710) isCandidateRow = true;
                    else if (idx === 1 && activeScore >= 695 && activeScore < 710) isCandidateRow = true;
                    else if (idx === 2 && activeScore >= 680 && activeScore < 695) isCandidateRow = true;
                    else if (idx === 3 && activeScore >= 668 && activeScore < 680) isCandidateRow = true;
                    else if (idx === 4 && activeScore >= 655 && activeScore < 668) isCandidateRow = true;
                    else if (idx === 5 && activeScore >= 630 && activeScore < 655) isCandidateRow = true;
                    else if (idx === 6 && activeScore >= 570 && activeScore < 630) isCandidateRow = true;
                    else if (idx === 7 && activeScore >= 550 && activeScore < 570) isCandidateRow = true;
                    else if (idx === 8 && activeScore > 0 && activeScore < 550) isCandidateRow = true;

                    return (
                      <tr
                        key={idx}
                        className={`transition ${
                          isCandidateRow
                            ? 'bg-blue-600/15 border-l-4 border-l-cyan-400 font-semibold'
                            : 'hover:bg-slate-800/40'
                        }`}
                      >
                        <td className="p-3.5 font-mono font-bold text-white whitespace-nowrap">
                          {row.scoreRange}
                          {isCandidateRow && (
                            <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-cyan-500 text-slate-950 font-black">
                              YOU
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 font-mono text-cyan-300 font-bold whitespace-nowrap">
                          {row.airRange}
                        </td>
                        <td className="p-3.5 text-slate-200">
                          {row.govtMbbsOpen.includes('Closing Boundary') ? (
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                              {row.govtMbbsOpen}
                            </span>
                          ) : row.govtMbbsOpen.includes('Guaranteed') ? (
                            <span className="text-emerald-400 font-medium">{row.govtMbbsOpen}</span>
                          ) : (
                            <span className="text-slate-400">{row.govtMbbsOpen}</span>
                          )}
                        </td>
                        <td className="p-3.5 text-slate-200">
                          {row.govtMbbsScSt.includes('Closing') ? (
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                              {row.govtMbbsScSt}
                            </span>
                          ) : (
                            <span className="text-emerald-400 font-medium">{row.govtMbbsScSt}</span>
                          )}
                        </td>
                        <td className="p-3.5 text-purple-300">{row.centralAiims}</td>
                        <td className="p-3.5 text-teal-300">{row.govtBds}</td>
                        <td className="p-3.5 text-slate-400">{row.deemedPvt}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Explanatory Matrix Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1.5">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                  1. Govt MBBS Open/OBC Cutoff
                </div>
                <div className="text-sm font-black text-white">AIR 26,178 (~655 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Last allotted institute in Round 3 was GMC Nagapattinam & Virudhunagar. Candidates scoring 655+ secured Government MBBS under AIQ 15%.
                </p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  2. Govt BDS (Dental) Final Cutoff
                </div>
                <div className="text-sm font-black text-white">AIR 49,462 (~630 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Last allotted Government Dental College under AIQ Open was JNIDS, Imphal at AIR 49,462 (OBC: 51,192, EWS: 54,132).
                </p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1.5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  3. Reserved Category Closing Limits
                </div>
                <div className="text-sm font-black text-white">SC: 1,35,684 | ST: 1,63,285</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scheduled Caste Govt MBBS closed at Score ~575 (AIR 1,35,684). Scheduled Tribe Govt MBBS closed at Score ~552 (AIR 1,63,285).
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
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">OPEN / UR (Govt MBBS)</span>
              <div className="text-xl font-black text-cyan-400 font-mono">AIR 26,178</div>
              <div className="text-xs text-slate-300">Score ~655 / 720</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">OBC (Govt MBBS)</span>
              <div className="text-xl font-black text-blue-400 font-mono">AIR 26,167</div>
              <div className="text-xs text-slate-300">Score ~655 / 720</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">EWS (Govt MBBS)</span>
              <div className="text-xl font-black text-teal-400 font-mono">AIR 27,243</div>
              <div className="text-xs text-slate-300">Score ~653 / 720</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SC (Govt MBBS)</span>
              <div className="text-xl font-black text-amber-400 font-mono">AIR 1,35,684</div>
              <div className="text-xs text-slate-300">Score ~575 / 720</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ST (Govt MBBS)</span>
              <div className="text-xl font-black text-rose-400 font-mono">AIR 1,63,285</div>
              <div className="text-xs text-slate-300">Score ~552 / 720</div>
            </div>
          </div>

          {/* Search bar inside Tiers */}
          <div className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">
            <div className="flex items-center space-x-2 text-white font-bold text-xs">
              <Award className="w-4 h-4 text-purple-400" />
              <span>MCC Round 3 Institutional Tiers & Institute Cutoffs</span>
            </div>
            <div className="relative w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                value={tierSearch}
                onChange={e => setTierSearch(e.target.value)}
                placeholder="Filter tier colleges (e.g. AIIMS, Manipal)..."
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:border-purple-400 focus:outline-hidden"
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
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        {tier.tier}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {tier.airRange}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white">{tier.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{tier.description}</p>
                    <div className="text-[11px] font-semibold text-slate-300">
                      Typical Qualifying Score: <span className="text-amber-400 font-mono">{tier.scoreReq}</span>
                    </div>

                    {/* Colleges list */}
                    <div className="space-y-1.5 pt-2">
                      {filteredColleges.map((col, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs"
                        >
                          <span className="font-semibold text-slate-200 line-clamp-1">{col.name}</span>
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

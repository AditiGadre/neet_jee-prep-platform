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
  HelpCircle
} from 'lucide-react';
import { NEET_CUTOFFS_DATA, NeetCutoffEntry } from '../data/neetCutoffsData';

// Rank estimation curve based on historical NEET benchmarks
function estimateRankFromScore(score: number): number {
  if (score >= 720) return 1;
  if (score >= 715) return 80;
  if (score >= 710) return 350;
  if (score >= 705) return 900;
  if (score >= 700) return 2000;
  if (score >= 690) return 4500;
  if (score >= 680) return 8500;
  if (score >= 670) return 14000;
  if (score >= 660) return 21000;
  if (score >= 650) return 29000;
  if (score >= 640) return 38000;
  if (score >= 630) return 49000;
  if (score >= 620) return 62000;
  if (score >= 610) return 77000;
  if (score >= 600) return 95000;
  if (score >= 580) return 120000;
  if (score >= 560) return 150000;
  if (score >= 540) return 190000;
  if (score >= 520) return 240000;
  if (score >= 500) return 300000;
  if (score >= 470) return 380000;
  if (score >= 430) return 490000;
  if (score >= 380) return 620000;
  if (score >= 330) return 770000;
  if (score >= 280) return 950000;
  if (score >= 220) return 1200000;
  if (score >= 150) return 1550000;
  return 1900000;
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
  if (rank <= 24000) return 660;
  if (rank <= 33000) return 650;
  if (rank <= 43000) return 640;
  if (rank <= 55000) return 630;
  if (rank <= 68000) return 620;
  if (rank <= 85000) return 610;
  if (rank <= 105000) return 600;
  if (rank <= 135000) return 580;
  if (rank <= 170000) return 560;
  if (rank <= 215000) return 540;
  if (rank <= 270000) return 520;
  if (rank <= 340000) return 500;
  if (rank <= 420000) return 470;
  if (rank <= 540000) return 430;
  if (rank <= 670000) return 380;
  if (rank <= 830000) return 330;
  if (rank <= 1050000) return 280;
  if (rank <= 1350000) return 220;
  return 150;
}

export const CATEGORY_OPTIONS = [
  { value: 'OPEN', label: 'General / Unreserved (OPEN / UR)', group: 'General' },
  { value: 'OBC', label: 'Other Backward Classes (OBC)', group: 'Reserved' },
  { value: 'EWS', label: 'Economically Weaker Section (EWS)', group: 'Reserved' },
  { value: 'SEBC', label: 'Socially & Educationally Backward Classes (SEBC)', group: 'Reserved' },
  { value: 'SC', label: 'Scheduled Castes (SC)', group: 'Reserved' },
  { value: 'ST', label: 'Scheduled Tribes (ST)', group: 'Reserved' },
  { value: 'VJ', label: 'Vimukta Jati (VJ / NT-A)', group: 'Reserved (NT)' },
  { value: 'NTB', label: 'Nomadic Tribes-B (NT-B / NT1)', group: 'Reserved (NT)' },
  { value: 'NTC', label: 'Nomadic Tribes-C (NT-C / NT2)', group: 'Reserved (NT)' },
  { value: 'NTD', label: 'Nomadic Tribes-D (NT-D / NT3)', group: 'Reserved (NT)' },
  { value: 'PWD', label: 'Persons with Disabilities (PwD / PH)', group: 'Special Horizontal' },
  { value: 'DEF', label: 'Defense Personnel (DEF1 / DEF2 / DEF3)', group: 'Special Horizontal' },
  { value: 'IQ', label: 'Institutional / Management / NRI Quota (I.Q.)', group: 'Management' },
  { value: 'MKB', label: 'Maharashtra-Karnataka Disputed Border Area (MKB)', group: 'Special' },
  { value: 'ORPHAN', label: 'Orphan Quota (ORPHAN / ORPHANC)', group: 'Special' },
];

export const NeetCollegePredictor: React.FC = () => {
  // Input states
  const [inputMode, setInputMode] = useState<'rank' | 'score'>('rank');
  const [rankInput, setRankInput] = useState<string>('28500');
  const [scoreInput, setScoreInput] = useState<string>('650');
  const [selectedCourse, setSelectedCourse] = useState<'ALL' | 'MBBS' | 'BDS'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('OPEN');
  const [gender, setGender] = useState<'ALL' | 'FEMALE' | 'MALE'>('ALL');
  const [includeOpenMerit, setIncludeOpenMerit] = useState<boolean>(true);
  const [selectedRound, setSelectedRound] = useState<'ALL' | 'Round 1' | 'Round 2' | 'Round 3'>('ALL');
  const [collegeTypeFilter, setCollegeTypeFilter] = useState<'ALL' | 'GOVT' | 'PRIVATE'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [missedToleranceRanks, setMissedToleranceRanks] = useState<number>(20000);

  // Active user AIR
  const userAir = useMemo(() => {
    if (inputMode === 'rank') {
      const r = parseInt(rankInput.replace(/\D/g, ''), 10);
      return isNaN(r) || r <= 0 ? 1 : r;
    } else {
      const s = parseInt(scoreInput.replace(/\D/g, ''), 10);
      if (isNaN(s) || s <= 0) return 1;
      return estimateRankFromScore(Math.min(720, s));
    }
  }, [inputMode, rankInput, scoreInput]);

  // Handle Score Change
  const handleScoreChange = (val: string) => {
    setScoreInput(val);
    const s = parseInt(val.replace(/\D/g, ''), 10);
    if (!isNaN(s) && s > 0) {
      const estRank = estimateRankFromScore(Math.min(720, s));
      setRankInput(String(estRank));
    }
  };

  // Handle Rank Change
  const handleRankChange = (val: string) => {
    setRankInput(val);
    const r = parseInt(val.replace(/\D/g, ''), 10);
    if (!isNaN(r) && r > 0) {
      const estScore = estimateScoreFromRank(r);
      setScoreInput(String(estScore));
    }
  };

  // Filter and compute cleared vs close-not-cleared
  const { clearedList, closeList, stats } = useMemo(() => {
    const cleared: Array<NeetCutoffEntry & { margin: number; probability: 'HIGH' | 'MODERATE' | 'BORDERLINE' }> = [];
    const close: Array<NeetCutoffEntry & { margin: number }> = [];

    const filteredRecords = NEET_CUTOFFS_DATA.filter(entry => {
      // 1. Course Filter
      if (selectedCourse !== 'ALL' && entry.course !== selectedCourse) return false;

      // 2. College Type Filter
      if (collegeTypeFilter === 'GOVT' && !entry.isGovt) return false;
      if (collegeTypeFilter === 'PRIVATE' && entry.isGovt) return false;

      // 3. Round Filter
      if (selectedRound !== 'ALL' && entry.round !== selectedRound) return false;

      // 4. Gender / Women Quota Filter
      if (gender === 'MALE' && entry.isWomen) return false;

      // 5. Category Filter
      const isTargetCategory = entry.categoryGroup === selectedCategory;
      const isOpenEligible = includeOpenMerit && selectedCategory !== 'OPEN' && entry.categoryGroup === 'OPEN';

      if (!isTargetCategory && !isOpenEligible) return false;

      // 6. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = entry.collegeName.toLowerCase().includes(q);
        const matchCode = entry.collegeCode.toLowerCase().includes(q);
        const matchQuota = entry.quota.toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchQuota) return false;
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

    return {
      clearedList: cleared,
      closeList: close,
      stats: {
        totalCleared: cleared.length,
        govtMbbsCleared,
        pvtMbbsCleared,
        bdsCleared,
        closeCount: close.length
      }
    };
  }, [
    userAir,
    selectedCourse,
    selectedCategory,
    gender,
    includeOpenMerit,
    selectedRound,
    collegeTypeFilter,
    searchQuery,
    missedToleranceRanks
  ]);

  // Export to CSV
  const handleExportCSV = () => {
    if (clearedList.length === 0) return;
    const header = [
      'College Code',
      'College Name',
      'Course',
      'Quota',
      'Category Group',
      'Round',
      'Year',
      'Closing AIR',
      'Candidate AIR',
      'Margin (+Ranks)',
      'Safety Index',
      'PDF Source Page'
    ];

    const rows = clearedList.map(c => [
      `"${c.collegeCode}"`,
      `"${c.collegeName}"`,
      c.course,
      `"${c.quota}"`,
      c.categoryGroup,
      c.round,
      c.year,
      c.closingAir,
      userAir,
      c.margin,
      c.probability,
      `Page ${c.pageNumber}`
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
    <div className="space-y-6 max-w-7xl mx-auto p-2 sm:p-4 lg:p-6 text-slate-100 animate-in fade-in duration-300">
      {/* 1. Header Banner & Mandatory Step 3 Caveats */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Maharashtra State CET Cell CAP 2025-26 & 2024-25 Dataset</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              NEET MBBS & BDS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">College Predictor</span>
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl">
              Instant cut-off margin calculator powered by <strong>6,995 verified provisional selection entries</strong> across Maharashtra Government, Municipal, and Private Medical/Dental Colleges.
            </p>
          </div>

          <button
            onClick={handleExportCSV}
            disabled={clearedList.length === 0}
            className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-lg transition shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export Eligible Colleges ({clearedList.length})</span>
          </button>
        </div>

        {/* STEP 3 Mandatory Caveat Callout Box */}
        <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-amber-300 uppercase tracking-wide">
              Mandatory Historical Reference Disclaimer & Source Attributions:
            </div>
            <div>
              1. <strong>Historical Reference Only:</strong> 2025-26 (Rounds 1 & 3) and 2024-25 (Round 2) cutoffs reflect previous round closing ranks. Actual cutoffs in upcoming rounds vary due to applicant volume, changes in seat matrix, and score distributions.
            </div>
            <div>
              2. <strong>Exact Verifiable Citations:</strong> Every cutoff card displays the exact official State CET Cell provisional list round, year, and PDF document page number.
            </div>
            <div>
              3. <strong>Institutional Quota (`I.Q.`) / Deemed Notice:</strong> Seats marked with `I.Q.` represent 15% Management/Institutional seats in private colleges with distinct fee structures.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Input Panel */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md backdrop-blur-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-white font-bold text-sm">
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span>Candidate Credentials & Prediction Parameters</span>
          </div>
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
                placeholder="e.g. 25000"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:outline-hidden focus:ring-1 focus:ring-cyan-400"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-semibold">AIR</span>
            </div>
            {inputMode === 'score' && (
              <p className="text-[11px] text-cyan-400 font-medium">Auto-derived from NEET Score ~{scoreInput}</p>
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
                placeholder="e.g. 640"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:outline-hidden focus:ring-1 focus:ring-cyan-400"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-semibold">/ 720</span>
            </div>
            {inputMode === 'rank' && (
              <p className="text-[11px] text-slate-400 font-medium">Estimated Marks ~{scoreInput}/720</p>
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
              <option value="Round 1">Round 1 (2025-26)</option>
              <option value="Round 3">Round 3 (2025-26)</option>
              <option value="Round 2">Round 2 (2024-25 Ref)</option>
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
              <option value="ALL">All Institutions (Govt + Pvt/Trust)</option>
              <option value="GOVT">Government / Municipal Only</option>
              <option value="PRIVATE">Private / Unaided Colleges Only</option>
            </select>
          </div>

          {/* Gender / Women Quota */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-300">30% Women's Reservation</label>
            <select
              value={gender}
              onChange={e => setGender(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-hidden"
            >
              <option value="ALL">Both Open & Women Quota (All)</option>
              <option value="FEMALE">Female Candidate (Includes '(W)' Quotas)</option>
              <option value="MALE">Male Candidate (General Merit Only)</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-300">Filter by Name / City / Code</label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="e.g. Pune, Mumbai, 1103, BJMC..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Summary Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-cyan-400">{stats.govtMbbsCleared}</div>
            <div className="text-xs text-slate-400 font-semibold">Govt MBBS Seats</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-indigo-300">{stats.pvtMbbsCleared}</div>
            <div className="text-xs text-slate-400 font-semibold">Pvt MBBS Seats</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-amber-400">{stats.closeCount}</div>
            <div className="text-xs text-slate-400 font-semibold">Watchlist (Near Miss)</div>
          </div>
        </div>
      </div>

      {/* 4. Section: Cleared Colleges (Sorted Safest to Reach) */}
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

        {clearedList.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
            <p className="text-sm font-bold text-white">No college cutoffs cleared for AIR {userAir.toLocaleString()} under current filters.</p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your category filter, changing to BDS, including Institutional Quota (I.Q.), or checking the "Close But Not Cleared" list below.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clearedList.map(entry => (
              <div
                key={entry.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4.5 shadow-md flex flex-col justify-between transition group hover:shadow-xl hover:shadow-blue-950/20"
              >
                <div className="space-y-3">
                  {/* Top badges */}
                  <div className="flex items-center justify-between gap-2">
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
                        entry.isGovt
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : entry.isIQ
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {entry.isGovt ? 'Government' : entry.isIQ ? 'Institutional (I.Q.)' : 'Private / Trust'}
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
                  </div>

                  {/* Quota & Cutoff details */}
                  <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Quota:</span>
                      <span className="font-bold text-white font-mono bg-slate-800 px-2 py-0.5 rounded-md text-[11px]">
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

                {/* Bottom Source Citation (STEP 3 Requirement) */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center space-x-1">
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>
                      {entry.round} {entry.year === '2024-25' ? '(2024-25 Ref)' : '(2025-26)'}
                    </span>
                  </div>
                  <span className="font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-700/60">
                    PDF Page {entry.pageNumber}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Section: Close But Not Cleared Watchlist */}
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
              className="bg-slate-950 border border-slate-700 text-xs rounded-lg px-2 py-1 text-slate-200"
            >
              <option value={10000}>Within 10,000 ranks</option>
              <option value={20000}>Within 20,000 ranks</option>
              <option value={35000}>Within 35,000 ranks</option>
              <option value={50000}>Within 50,000 ranks</option>
            </select>
          </div>
        </div>

        <p className="text-xs text-slate-400">
          These colleges closed slightly ahead of your rank. If later counseling rounds drift or seats open in mop-up/stray rounds, you have high upgrade viability here.
        </p>

        {closeList.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 text-center text-xs text-slate-500">
            No near-miss colleges within the selected {missedToleranceRanks.toLocaleString()} rank margin.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {closeList.slice(0, 30).map(entry => (
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
                      <span className="text-slate-200">{entry.quota}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Closing Cutoff AIR:</span>
                      <span className="text-amber-300 font-bold">{entry.closingAir.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Your AIR:</span>
                      <span className="text-white">{userAir.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>
                    {entry.round} {entry.year === '2024-25' ? '(2024-25 Ref)' : '(2025-26)'}
                  </span>
                  <span className="font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-700/60">
                    PDF Page {entry.pageNumber}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

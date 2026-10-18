import { AdminEnrollmentNotification, EnrolledPackage } from '../types';

export interface PrepPackageItem {
  id: string;
  name: string;
  shortTitle: string;
  badge?: string;
  badgeColor?: string;
  batch: 'repeater' | '12th' | '11th';
  trackType: 'single' | 'combo';
  unlockedTracks: string[];
  priceNumber: number;
  price: string;
  originalPrice: string;
  savings?: string;
  testsCount: number;
  tagline: string;
  scheduleSummary: string;
  features: string[];
  isPopular?: boolean;
}

export const NEET_PREP_PACKAGES: PrepPackageItem[] = [
  // ==========================================
  // REPEATER (DROPPER) BATCH PACKAGES
  // ==========================================
  {
    id: 'repeater-track1',
    name: 'Repeater Track 1: 20-Week Chapterwise Master Series',
    shortTitle: 'Track 1 (20-Week Chapterwise)',
    batch: 'repeater',
    trackType: 'single',
    unlockedTracks: ['repeater_track1'],
    priceNumber: 4999,
    price: '₹4,999',
    originalPrice: '₹8,999',
    testsCount: 46,
    tagline: 'Comprehensive 20-Week Chapterwise, Partwise & Full Syllabus CBT Mocks',
    scheduleSummary: '01 Nov 2026 – 07 May 2027 • 20 CW + 8 PT + 18 FS Tests',
    features: [
      '46 Scheduled Sunday & Revision CBT Mocks (180 Qs / 720 Marks)',
      'Phase 1: 20 Chapter-Wise Tests (CW-01 to CW-20) every Sunday',
      'Phase 2: 8 Part-Wise Cumulative Tests (PT-01 to PT-08) every 2 days',
      'Phase 3: 18 High-Yield Full Syllabus Tests (FS-01 to FS-18) every 2 days',
      'Exact NTA NEET Computer-Based Test Simulator with Instant AIR Prediction',
      'Step-by-Step Question Explanations & NCERT Page Mapping'
    ]
  },
  {
    id: 'repeater-track2',
    name: 'Repeater Track 2: 17-Week Fast-Track Series',
    shortTitle: 'Track 2 (17-Week Fast-Track)',
    batch: 'repeater',
    trackType: 'single',
    unlockedTracks: ['repeater_track2'],
    priceNumber: 4499,
    price: '₹4,499',
    originalPrice: '₹7,999',
    testsCount: 42,
    tagline: 'Rapid Chapterwise Drill with Combined Partwise & Full Syllabus Sprint',
    scheduleSummary: '01 Nov 2026 – 06 May 2027 • 17 CW + 4 Part + 21 Full Tests',
    features: [
      '42 Scheduled Fast-Track Sunday Tests (180 Qs / 720 Marks)',
      '17 Sunday Chapterwise Tests (T01 to T17) with consolidated topics',
      '4 Consolidated Part-Wise Checkpoints (P01 to P04) every 4 days',
      '21 Intensive Full Syllabus Grand Mocks (F01 to F21) through 06 May 2027',
      'Instant Percentile, Subject Weakness Heatmap & Accuracy Breakdown'
    ]
  },
  {
    id: 'repeater-track3',
    name: 'Repeater Track 3: Physics & Chemistry 100-Q Speed Series',
    shortTitle: 'Track 3 (PC 100-Q Series)',
    batch: 'repeater',
    trackType: 'single',
    unlockedTracks: ['repeater_track3'],
    priceNumber: 1499,
    price: '₹1,499',
    originalPrice: '₹2,999',
    testsCount: 27,
    tagline: 'High-Frequency Physics & Chemistry Drill for Rapid Numerical Mastery',
    scheduleSummary: 'Starting 10 Feb 2027 • 27 Tests (PC-01 to PC-27) every 3 days',
    features: [
      '27 High-Intensity Physics & Chemistry Tests (PC-01 to PC-27)',
      '100 Questions (50 Physics + 50 Chemistry) • 120 Minutes • 400 Marks',
      'Focused Numerical Speed, Graph & Formula Retention',
      'Repetitive testing cycles every 3 days leading directly into NEET'
    ]
  },
  {
    id: 'repeater-combo-all',
    name: 'Repeater Mega Combo: All Tracks (Track 1 + 2 + 3)',
    shortTitle: 'Complete All-Track Combo (1 + 2 + 3)',
    badge: '★ Best Value Mega Pack',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    isPopular: true,
    batch: 'repeater',
    trackType: 'combo',
    unlockedTracks: ['repeater_track1', 'repeater_track2', 'repeater_track3', 'repeater_all'],
    priceNumber: 9497,
    price: '₹9,497',
    originalPrice: '₹19,997',
    savings: 'Save ₹1,499 vs individual track purchase',
    testsCount: 115,
    tagline: 'Universal Unrestricted Access to All 115 Repeater Tests Across All 3 Tracks',
    scheduleSummary: 'All 115 Repeater Tests: 46 (Track 1) + 42 (Track 2) + 27 (Track 3)',
    features: [
      'All 46 Tests of Track 1 (20-Week Chapterwise Master Series)',
      'All 42 Tests of Track 2 (17-Week Fast-Track Series)',
      'All 27 Tests of Track 3 (Physics & Chemistry 100-Q Speed Series)',
      'Universal Unlock: Instant access to every Repeater Sunday test on the platform',
      'Unified All-India Rank (AIR) & College Probability Prediction',
      'Priority 2-Device Concurrency Protected Access'
    ]
  },
  {
    id: 'repeater-combo-1-3',
    name: 'Repeater Combo: Track 1 + Track 3',
    shortTitle: 'Combo (Track 1 + 3)',
    batch: 'repeater',
    trackType: 'combo',
    unlockedTracks: ['repeater_track1', 'repeater_track3'],
    priceNumber: 5998,
    price: '₹5,998',
    originalPrice: '₹11,998',
    savings: 'Save ₹499 vs separate purchase',
    testsCount: 73,
    tagline: 'Comprehensive Chapterwise Sunday Mocks + Post-Winter PC Speed Drill',
    scheduleSummary: '73 Tests: 46 Track 1 Mocks + 27 Physics & Chemistry Tests',
    features: [
      'Full 46-Test Comprehensive Chapterwise Sunday Series (Track 1)',
      '27-Test Dedicated Physics & Chemistry Speed Series (Track 3)',
      'Dual 720-Mark Full Syllabus & 400-Mark Numerical Drills',
      'Complete question bank access and detailed step-by-step solutions'
    ]
  },
  {
    id: 'repeater-combo-2-3',
    name: 'Repeater Combo: Track 2 + Track 3',
    shortTitle: 'Combo (Track 2 + 3)',
    batch: 'repeater',
    trackType: 'combo',
    unlockedTracks: ['repeater_track2', 'repeater_track3'],
    priceNumber: 5498,
    price: '₹5,498',
    originalPrice: '₹10,998',
    savings: 'Save ₹499 vs separate purchase',
    testsCount: 69,
    tagline: 'Fast-Track Sunday Series + Post-Winter Physics & Chemistry Series',
    scheduleSummary: '69 Tests: 42 Track 2 Fast-Track + 27 Physics & Chemistry Tests',
    features: [
      'Full 42-Test Fast-Track Sunday Series (Track 2)',
      '27-Test Dedicated Physics & Chemistry Speed Series (Track 3)',
      'Fast-paced revision paired with high-frequency PC drill',
      'Detailed subject accuracy, time-spent analysis & AIR prediction'
    ]
  },

  // ==========================================
  // CLASS 12TH BATCH PACKAGES
  // ==========================================
  {
    id: '12th-track1',
    name: 'Class 12th Track 1: Complete Syllabus Master Series',
    shortTitle: 'Track 1 (Complete Syllabus)',
    batch: '12th',
    trackType: 'single',
    unlockedTracks: ['12th_track1'],
    priceNumber: 4999,
    price: '₹4,999',
    originalPrice: '₹8,999',
    testsCount: 23,
    tagline: 'Partwise, Complete Syllabus & Intensive NEET Simulation Sprint',
    scheduleSummary: '01 Nov 2026 – 07 May 2027 • 8 Part + 10 Full + 5 NEET Mocks',
    features: [
      '23 Scheduled Sunday Master Mocks (180 Qs / 720 Marks)',
      'Phase 1: 8 Part-Wise Tests covering Class 11 & 12 progressively',
      'Phase 2: 10 Full Syllabus Tests across winter & spring cycles',
      'Phase 3: 5 Intensive NEET Mock Simulations (2-day rehearsal sprint)',
      'Dedicated Board Exam & Revision Buffer (18 Jan – 20 Mar 2027)'
    ]
  },
  {
    id: '12th-track2',
    name: 'Class 12th Track 2: Physics & Chemistry Full-Syllabus Series',
    shortTitle: 'Track 2 (Physics & Chemistry)',
    batch: '12th',
    trackType: 'single',
    unlockedTracks: ['12th_track2'],
    priceNumber: 1299,
    price: '₹1,299',
    originalPrice: '₹2,499',
    testsCount: 18,
    tagline: 'Post-Board Examination Physics & Chemistry Speed Drill (Every 3 Days)',
    scheduleSummary: '10 Mar – 30 Apr 2027 • 18 Tests (PC-01 to PC-18) every 3 days',
    features: [
      '18 Post-Boards Physics & Chemistry Tests (PC-01 to PC-18)',
      '100 Questions (50 Physics + 50 Chemistry) • 120 Minutes • 400 Marks',
      'Rapid 3-day frequency following Class 12 Board examinations',
      'High-yield numerical practice and formula speed optimization'
    ]
  },
  {
    id: '12th-combo-1-2',
    name: 'Class 12th Complete Combo: Track 1 + Track 2',
    shortTitle: 'Combo (Track 1 + 2)',
    badge: '★ Most Popular for 12th',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    isPopular: true,
    batch: '12th',
    trackType: 'combo',
    unlockedTracks: ['12th_track1', '12th_track2', '12th_all'],
    priceNumber: 5298,
    price: '₹5,298',
    originalPrice: '₹11,498',
    savings: 'Save ₹1,000 vs separate purchase',
    testsCount: 41,
    tagline: 'Full Class 12th NEET (UG) Mastery: 720M Sunday Series + PC 400M Series',
    scheduleSummary: 'All 41 Class 12 Tests: Complete 720M Sunday Series + PC 400M Series',
    features: [
      'All 23 Tests of Track 1 (Complete 720-Mark Sunday Mocks)',
      'All 18 Tests of Track 2 (Post-Board Physics & Chemistry Series)',
      'Seamless Board Exam preparation buffer & post-board sprint',
      'Universal All-India Rank (AIR) & college admission percentile forecast'
    ]
  },

  // ==========================================
  // CLASS 11TH BATCH PACKAGES
  // ==========================================
  {
    id: '11th-track1',
    name: 'Class 11th Track 1: Chapterwise, Partwise & Full Syllabus Series',
    shortTitle: 'Track 1 (Chapterwise & Full)',
    batch: '11th',
    trackType: 'single',
    unlockedTracks: ['11th_track1'],
    priceNumber: 3999,
    price: '₹3,999',
    originalPrice: '₹6,999',
    testsCount: 20,
    tagline: '11 Chapterwise + 6 Partwise + 3 Full Class 11 Syllabus Diagnostic Mocks',
    scheduleSummary: '01 Nov 2026 – 30 Mar 2027 • 11 CW + 6 Part + 3 Full Tests',
    features: [
      '20 Scheduled Sunday Foundation Tests (180 Qs / 720 Marks)',
      '11 Chapter-Wise Tests (CW-01 to CW-11) building core Class 11 concepts',
      '6 Partwise Cumulative Tests (PT-01 to PT-06) every 4 days',
      '3 Full Class 11 Syllabus Diagnostic Mocks (FS-01 to FS-03)',
      'Instant topic-level accuracy, speed & NCERT conceptual feedback'
    ]
  },
  {
    id: '11th-track2',
    name: 'Class 11th Track 2: Foundation CWT & Cumulative Sunday Series',
    shortTitle: 'Track 2 (CWT & Cumulative)',
    batch: '11th',
    trackType: 'single',
    unlockedTracks: ['11th_track2'],
    priceNumber: 3999,
    price: '₹3,999',
    originalPrice: '₹6,999',
    testsCount: 20,
    tagline: '12 Chapterwise Tests + 5 Cumulative Checkpoints + 3 Full Syllabus Mocks',
    scheduleSummary: '01 Nov 2026 – 30 Mar 2027 • 12 CWT + 5 Cumulative + 3 FST Tests',
    features: [
      '20 Scheduled Sunday Foundation Tests (180 Qs / 720 Marks)',
      '12 Targeted Chapter-Wise Tests (CWT-01 to CWT-12)',
      '5 Rigorous Cumulative Retention Checkpoints (CUM-01 to CUM-05)',
      '3 Full 11th Syllabus Mocks (FST-01 to FST-03) through 30 March 2027',
      'Systematic spaced-repetition testing ensuring zero concept leakage'
    ]
  },
  {
    id: '11th-combo-1-2',
    name: 'Class 11th Complete Foundation Combo: Track 1 + Track 2',
    shortTitle: 'Combo (Track 1 + 2)',
    badge: '★ Complete 11th Mastery',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    isPopular: true,
    batch: '11th',
    trackType: 'combo',
    unlockedTracks: ['11th_track1', '11th_track2', '11th_all'],
    priceNumber: 6998,
    price: '₹6,998',
    originalPrice: '₹13,998',
    savings: 'Save ₹999 vs separate purchase',
    testsCount: 40,
    tagline: 'Comprehensive 40-Test Foundation Pack: Dual-Track Class 11 Mastery',
    scheduleSummary: 'All 40 Class 11 Foundation Tests: Dual-Track Coverage',
    features: [
      'All 20 Tests of Track 1 (Chapterwise & Full Syllabus)',
      'All 20 Tests of Track 2 (CWT & Cumulative Retention Checkpoints)',
      'Guaranteed 100% Class 11 NCERT Coverage Before Stepping into Class 12',
      'Universal All-India Rank (AIR) and comparative batch percentiles'
    ]
  }
];

export function getAllPackages(): PrepPackageItem[] {
  return NEET_PREP_PACKAGES;
}

export function getPackagesByBatch(batch: 'repeater' | '12th' | '11th'): PrepPackageItem[] {
  return NEET_PREP_PACKAGES.filter(p => p.batch === batch);
}

export function getPackageById(id: string): PrepPackageItem {
  return NEET_PREP_PACKAGES.find(p => p.id === id) || NEET_PREP_PACKAGES[0];
}

/**
 * Returns all unlocked track keys for a list of enrolled package IDs.
 */
export function getUnlockedTracksForPackages(packageIds: (string | any)[]): string[] {
  const tracks = new Set<string>();
  if (!packageIds || !Array.isArray(packageIds)) return [];
  for (const item of packageIds) {
    const pid = typeof item === 'string' ? item : (item as any)?.id;
    if (!pid) continue;
    const pkg = NEET_PREP_PACKAGES.find(p => p.id === pid);
    if (pkg) {
      pkg.unlockedTracks.forEach(t => tracks.add(t));
    }
  }
  return Array.from(tracks);
}

/**
 * Checks whether a given test is unlocked based on batch, active track, and student's enrolled packages.
 */
export function isTestTrackUnlocked(
  batch: 'repeater' | '12th' | '11th',
  track: string, // 'track1', 'track2', 'pc', 'complete'
  enrolledPackageIds: (string | any)[]
): boolean {
  if (!enrolledPackageIds || !Array.isArray(enrolledPackageIds) || enrolledPackageIds.length === 0) return false;

  const normalizedIds = enrolledPackageIds.map((p: any) => typeof p === 'string' ? p : p?.id).filter(Boolean);
  if (normalizedIds.includes('ALL') || normalizedIds.includes('all')) return true;

  const unlocked = getUnlockedTracksForPackages(normalizedIds);

  if (batch === 'repeater') {
    if (unlocked.includes('repeater_all')) return true;
    if (track === 'track1' && unlocked.includes('repeater_track1')) return true;
    if (track === 'track2' && unlocked.includes('repeater_track2')) return true;
    if (track === 'pc' && unlocked.includes('repeater_track3')) return true;
  } else if (batch === '12th') {
    if (unlocked.includes('12th_all')) return true;
    if (track === 'complete' && unlocked.includes('12th_track1')) return true;
    if (track === 'pc' && unlocked.includes('12th_track2')) return true;
  } else if (batch === '11th') {
    if (unlocked.includes('11th_all')) return true;
    if (track === 'track1' && unlocked.includes('11th_track1')) return true;
    if (track === 'track2' && unlocked.includes('11th_track2')) return true;
  }

  return false;
}

export function getAdminNotifications(): AdminEnrollmentNotification[] {
  try {
    const raw = localStorage.getItem('neet_admin_notifications');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

export function saveAdminNotification(notification: AdminEnrollmentNotification): void {
  try {
    const current = getAdminNotifications();
    const filtered = current.filter(n => n.id !== notification.id);
    const updated = [notification, ...filtered].slice(0, 50);
    localStorage.setItem('neet_admin_notifications', JSON.stringify(updated));

    window.dispatchEvent(
      new CustomEvent('neet_admin_enrollment_notification', { detail: notification })
    );

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'neet_admin_notifications',
        newValue: JSON.stringify(updated)
      })
    );
  } catch (e) {
    console.error('Failed to save admin notification:', e);
  }
}

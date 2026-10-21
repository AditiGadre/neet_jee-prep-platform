import { openRazorpayCheckout } from '../services/razorpayService';
import confetti from 'canvas-confetti';
import { syncUnlockRequestsToCloud, fetchUnlockRequestsFromCloud } from '../services/authoritativeCloudService';
import React, { useState, useEffect, useMemo } from 'react';
import {
  FileCheck2,
  Clock,
  Award,
  BarChart3,
  Calendar,
  Layers,
  ChevronRight,
  Filter,
  CheckCircle2,
  Brain,
  Zap,
  TrendingUp,
  AlertCircle,
  Play,
  Download,
  FileText,
  Sparkles,
  Atom,
  Dna,
  Bell,
  Check,
  Phone,
  MessageSquare,
  ShieldCheck,
  Lock,
  Unlock,
  GraduationCap,
  X,
  Search,
  BookOpen,
  Send,
  KeyRound
} from 'lucide-react';
import { TestItem, TestCategory, Question } from '../types';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { recordSuperUserNotification } from '../utils/superUserNotifier';
import { fetchSundayPaperFromCloud, fetchAllSundayPapersFromCloud, fetchStudentByPhoneFromCloud, cleanPhoneNumber, syncStudentEnrollmentToCloud } from '../utils/cloudSyncManager';
import { fetchAuthoritativePaper } from '../services/authoritativeCloudService';
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_DROPPER_TRACK1_TESTS,
  SUNDAY_DROPPER_TRACK2_TESTS,
  SUNDAY_DROPPER_PC_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  SUNDAY_11TH_TRACK1_TESTS,
  SUNDAY_11TH_TRACK2_TESTS,
  PLANNER_12TH_COMPLETE_TESTS,
  PLANNER_12TH_PC_TESTS,
  PLANNER_12TH_TESTS,
  REVISION_ANALYSIS_BUFFER_12TH,
  SundayPlannerTest,
  generateSundayTestQuestions,
  getSavedCustomSundayPaper,
  assertNoDuplicateQuestions
} from '../data/sundayPlannerTests';
import { isTestTrackUnlocked, getPackageById, PrepPackageItem, NEET_PREP_PACKAGES } from '../data/packagesData';

export const getCleanTestTitle = (mockTest: SundayPlannerTest, customP?: any): string => {
  if (customP?.testTitle) {
    const raw = customP.testTitle.trim();
    const isGenericDefault = /official\s+default/i.test(raw) ||
                             /default\s+sunday\s+paper/i.test(raw) ||
                             /default\s+paper/i.test(raw) ||
                             /^test-[\w-]+$/i.test(raw);
    if (!isGenericDefault && raw.length > 0) {
      return raw.startsWith(mockTest.code) ? raw : `${mockTest.code}: ${raw}`;
    }
  }
  return mockTest.title;
};

interface TestSeriesSectionProps {
  testItems: TestItem[];
  targetYear?: '2027' | '2028' | '2029';
  onStartTest: (test: TestItem) => void;
  onOpenAdmin?: () => void;
  enrolledPackageIds?: string[];
  onOpenEnrollment?: (packageId?: string) => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  targetYear = '2027',
  onStartTest,
  onOpenAdmin,
  enrolledPackageIds,
  onOpenEnrollment
}) => {
  const [activeBatch, setActiveBatch] = useState<'repeater' | '12th' | '11th'>(() => {
    try {
      const last = localStorage.getItem('neet_last_active_batch');
      if (last === 'repeater' || last === '12th' || last === '11th') return last;
    } catch {}
    return 'repeater';
  });
  const [localCustomPapers, setLocalCustomPapers] = useState<Record<string, any>>(() => {
    try {
      const raw = localStorage.getItem('neet_custom_sunday_papers');
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });
  const [repeaterTrack, setRepeaterTrack] = useState<'track1' | 'track2' | 'pc'>('track1');
  const [class12Track, setClass12Track] = useState<'complete' | 'pc'>('complete');
  const [class11Track, setClass11Track] = useState<'track1' | 'track2'>('track1');
  const [activePhaseFilter, setActivePhaseFilter] = useState<'all' | 'cwt' | 'cumulative' | 'part' | 'full' | 'mock'>('all');
  const [showRevisionBuffer, setShowRevisionBuffer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [reminderSetFor, setReminderSetFor] = useState<string | null>(null);
  const [showAdminApprovalModal, setShowAdminApprovalModal] = useState(false);
  const [accessRequestSent, setAccessRequestSent] = useState(false);
  const [pendingTestToStart, setPendingTestToStart] = useState<SundayPlannerTest | null>(null);

  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const studentName = enrolledStudent?.studentName || '';
  const rollNumber = enrolledStudent?.rollNumber || '';
  const studentPhone = enrolledStudent?.studentPhone || '';
  const parentPhone = enrolledStudent?.parentPhone || '';
  const parentName = enrolledStudent?.parentName || '';

  useEffect(() => {
    let isMounted = true;
    const fetchCloudPapers = async () => {
      try {
        const cloudPapers = await fetchAllSundayPapersFromCloud();
        if (!isMounted || !cloudPapers || Object.keys(cloudPapers).length === 0) return;
        
        setLocalCustomPapers(prev => {
          const merged = { ...prev };
          let changed = false;
          for (const [key, paper] of Object.entries(cloudPapers)) {
            // Check if cloud paper is newer than local or if local doesn't exist
            if (!merged[key] || (paper.revision && merged[key].revision && paper.revision > merged[key].revision) || !merged[key].revision) {
              merged[key] = paper;
              merged[key.toLowerCase()] = paper;
              changed = true;
            }
          }
          if (changed) {
            try {
              localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(merged));
            } catch {}
            return merged;
          }
          return prev;
        });
      } catch (err) {
        console.warn('Failed to fetch custom cloud papers:', err);
      }
    };
    
    fetchCloudPapers();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'neet_custom_sunday_papers' && e.newValue) {
        try {
          setLocalCustomPapers(JSON.parse(e.newValue));
        } catch {}
      }
    };

    const handleLocalSync = (e: any) => {
      const detail = e?.detail;
      if (detail && detail.paperCode && detail.paper) {
        setLocalCustomPapers(prev => {
          const merged = { ...prev };
          merged[detail.paperCode] = detail.paper;
          merged[detail.paperCode.toLowerCase()] = detail.paper;
          return merged;
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('neet_cloud_sunday_paper_synced', handleLocalSync);

    return () => { 
      isMounted = false; 
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('neet_cloud_sunday_paper_synced', handleLocalSync);
    };
  }, []);

  // Check whether Admin has approved specific Sunday tests or access requests
  const getUnlockedTests = () => {
    try {
      const rawReqs = localStorage.getItem('neet_unlock_requests');
      if (rawReqs) {
        const reqs = JSON.parse(rawReqs);
        if (Array.isArray(reqs)) {
          return reqs
            .filter((r: any) => r.status === 'approved' && (
               (rollNumber && r.rollNumber === rollNumber) || 
               (studentPhone && r.studentPhone === studentPhone) ||
               (!rollNumber && !studentPhone) // fallback if user isn't fully enrolled but has an approved req on this device
            ))
            .map((r: any) => (r.testCode || '').toUpperCase());
        }
      }
    } catch {}
    return [];
  };
  
  // Specific individual test code approved by admin
  const isTestSpecificallyUnlocked = (testCode: string) => {
     if (!testCode) return false;
     const unlocked = getUnlockedTests();
     return unlocked.includes(testCode.toUpperCase());
  };

  // Admin Portal Controlled Test Access State
  const [isAdminAccessGranted, setIsAdminAccessGranted] = useState<boolean>(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('neet_admin_authenticated') === 'true') return true;
    if (localStorage.getItem('neet_admin_test_access') === 'true') return true;
    const rawStudent = localStorage.getItem('neet_enrolled_student');
    if (rawStudent) {
      try {
        const student = JSON.parse(rawStudent);
        if (student?.status === 'approved') return true;
      } catch {}
    }
    return getUnlockedTests().length > 0;
  });

  useEffect(() => {
    let isMounted = true;
    const loadCloudAccess = async () => {
      try {
        const reqs = await fetchUnlockRequestsFromCloud();
        if (isMounted && reqs && reqs.length > 0) {
          localStorage.setItem('neet_unlock_requests', JSON.stringify(reqs));
          setIsAdminAccessGranted((getUnlockedTests().length > 0));
        }

        const phoneToQuery = cleanPhoneNumber(studentPhone);
        if (phoneToQuery && phoneToQuery.length === 10 && !phoneToQuery.includes('9876543210')) {
          const cloudStudent = await fetchStudentByPhoneFromCloud(phoneToQuery);
          if (isMounted && cloudStudent && cloudStudent.studentName) {
            const rawLocal = localStorage.getItem('neet_enrolled_student');
            const localStudent = rawLocal ? JSON.parse(rawLocal) : null;
            const prevPkgs = JSON.stringify(localStudent?.enrolledPackages || []);
            const nextPkgs = JSON.stringify(cloudStudent.enrolledPackages || []);
            const prevStatus = localStudent?.status || '';
            const nextStatus = cloudStudent.status || '';

            if (prevPkgs !== nextPkgs || prevStatus !== nextStatus) {
              localStorage.setItem('neet_enrolled_student', JSON.stringify(cloudStudent));
              const pkgIds: string[] = [];
              if (cloudStudent.enrolledPackages && Array.isArray(cloudStudent.enrolledPackages)) {
                cloudStudent.enrolledPackages.forEach((p: any) => {
                  const id = typeof p === 'string' ? p : p?.id;
                  if (id && !pkgIds.includes(id)) pkgIds.push(id);
                });
              } else if (cloudStudent.selectedPackage) {
                const id = typeof cloudStudent.selectedPackage === 'string' ? cloudStudent.selectedPackage : cloudStudent.selectedPackage?.id;
                if (id && !pkgIds.includes(id)) pkgIds.push(id);
              }
              if (pkgIds.length > 0) {
                localStorage.setItem('neet_enrolled_package_ids', JSON.stringify(pkgIds));
              }
              window.dispatchEvent(new Event('neet_auth_change'));
              window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
            }
          }
        }
      } catch {}
    };
    loadCloudAccess();
    // Poll every 5 seconds for universal real-time approval
    const interval = setInterval(loadCloudAccess, 5000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [rollNumber, studentPhone]);

  // Listen for Admin Portal real-time access updates
  useEffect(() => {
    const handleAccessChange = (e: any) => {
      try {
        const granted = e?.detail?.accessGranted ?? (getUnlockedTests().length > 0);
        setIsAdminAccessGranted(Boolean(granted));
      } catch {
        setIsAdminAccessGranted(false);
      }
    };

    window.addEventListener('neet_admin_access_changed', handleAccessChange);
    window.addEventListener('neet_unlock_request_sent', handleAccessChange);
    window.addEventListener('storage', handleAccessChange);
    return () => {
      window.removeEventListener('neet_admin_access_changed', handleAccessChange);
      window.removeEventListener('neet_unlock_request_sent', handleAccessChange);
      window.removeEventListener('storage', handleAccessChange);
    };
  }, [rollNumber, studentPhone]);

  // Check if today is Sunday (accounting for Indian Standard Time)
  const isSundayToday = useMemo(() => {
    try {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
      return now.getDay() === 0 || istTime.getDay() === 0;
    } catch {
      return new Date().getDay() === 0;
    }
  }, []);

  const isAdminInSession = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('neet_admin_authenticated') === 'true';

  const effectiveEnrolledIds = useMemo(() => {
    let ids: string[] = [];
    if (enrolledPackageIds && enrolledPackageIds.length > 0) {
      ids = enrolledPackageIds.map((p: any) => typeof p === 'string' ? p : p?.id).filter(Boolean);
    }
    if (ids.length === 0) {
      try {
        const raw = localStorage.getItem('neet_enrolled_package_ids');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            ids = parsed.map((p: any) => typeof p === 'string' ? p : p?.id).filter(Boolean);
          }
        }
        if (ids.length === 0) {
          const student = localStorage.getItem('neet_enrolled_student');
          if (student) {
            const parsed = JSON.parse(student);
            if (parsed.enrolledPackages && Array.isArray(parsed.enrolledPackages)) {
              ids = parsed.enrolledPackages.map((p: any) => typeof p === 'string' ? p : p?.id).filter(Boolean);
            } else if (parsed.selectedPackage) {
              const id = typeof parsed.selectedPackage === 'string' ? parsed.selectedPackage : parsed.selectedPackage?.id;
              if (id) ids = [id];
            }
          }
        }
      } catch {}
    }
    return ids;
  }, [enrolledPackageIds]);

  const currentTrackKey = activeBatch === 'repeater' ? repeaterTrack : activeBatch === '12th' ? class12Track : class11Track;

  const currentTrackPackage = useMemo<PrepPackageItem>(() => {
    if (activeBatch === 'repeater') {
      if (repeaterTrack === 'track1') return getPackageById('repeater-track1');
      if (repeaterTrack === 'track2') return getPackageById('repeater-track2');
      return getPackageById('repeater-track3');
    } else if (activeBatch === '12th') {
      if (class12Track === 'complete') return getPackageById('12th-track1');
      return getPackageById('12th-track2');
    } else {
      if (class11Track === 'track1') return getPackageById('11th-track1');
      return getPackageById('11th-track2');
    }
  }, [activeBatch, repeaterTrack, class12Track, class11Track]);

  // Check if student purchased the active track
  const isTrackPurchased = useMemo(() => {
    return isTestTrackUnlocked(activeBatch, currentTrackKey, effectiveEnrolledIds);
  }, [activeBatch, currentTrackKey, effectiveEnrolledIds]);

  // List of all enrolled package objects
  const enrolledPackagesList = useMemo(() => {
    return effectiveEnrolledIds
      .map(id => NEET_PREP_PACKAGES.find(p => p.id === id))
      .filter((pkg, idx, arr): pkg is PrepPackageItem => Boolean(pkg) && arr.findIndex(p => p?.id === pkg?.id) === idx);
  }, [effectiveEnrolledIds]);

  // Total purchased tests count across all enrolled packages
  const totalPurchasedTestsCount = useMemo(() => {
    return enrolledPackagesList.reduce((acc, p) => acc + (p.testsCount || 0), 0);
  }, [enrolledPackagesList]);

  // Active track is unlocked ONLY IF:
  // 1. Admin session is active (preview all tests), OR
  // 2. The student has purchased this track AND has been approved by Admin
  const isCurrentTrackUnlocked = useMemo(() => {
    if (isAdminInSession) return true;
    return isTrackPurchased && isAdminAccessGranted;
  }, [isAdminInSession, isTrackPurchased, isAdminAccessGranted]);

  // Sunday tests strictly unlock ONLY AFTER ADMIN APPROVAL AND PACKAGE PURCHASE
  const isSundayTestUnlocked = isCurrentTrackUnlocked;

  const activeRepeaterTests = useMemo(() => {
    if (repeaterTrack === 'track1') return SUNDAY_DROPPER_TRACK1_TESTS;
    if (repeaterTrack === 'track2') return SUNDAY_DROPPER_TRACK2_TESTS;
    return SUNDAY_DROPPER_PC_TESTS;
  }, [repeaterTrack]);

  // Filter Dropper / Repeater tests based on Phase Filter & Search Query
  const filteredDropperTests = useMemo(() => {
    return activeRepeaterTests.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'cwt' && t.phaseGroup !== 'cwt') return false;
      if (activePhaseFilter === 'cumulative' && t.phaseGroup !== 'cumulative') return false;
      if (activePhaseFilter === 'part' && t.phaseGroup !== 'part') return false;
      if (activePhaseFilter === 'full' && t.phaseGroup !== 'full') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = t.code.toLowerCase().includes(q);
        const inTitle = t.title.toLowerCase().includes(q);
        const inPhy = t.physicsUnit.toLowerCase().includes(q);
        const inChem = t.chemistryUnit.toLowerCase().includes(q);
        const inBot = t.botanyBlock.toLowerCase().includes(q);
        const inZoo = t.zoologyBlock.toLowerCase().includes(q);
        const inDate = t.dateStr.includes(q);
        return inCode || inTitle || inPhy || inChem || inBot || inZoo || inDate;
      }
      return true;
    });
  }, [activeRepeaterTests, activePhaseFilter, searchQuery]);

  const active12thTests = useMemo(() => {
    if (class12Track === 'complete') return PLANNER_12TH_COMPLETE_TESTS;
    return PLANNER_12TH_PC_TESTS;
  }, [class12Track]);

  // Class 12th Batch Scheduled Tests
  const filtered12thTests = useMemo(() => {
    return active12thTests.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'part' && !t.code.startsWith('PART')) return false;
      if (activePhaseFilter === 'full' && !t.code.startsWith('FULL') && !t.code.startsWith('PC-')) return false;
      if (activePhaseFilter === 'mock' && !t.code.startsWith('NEET MOCK')) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = t.code.toLowerCase().includes(q);
        const inTitle = t.title.toLowerCase().includes(q);
        const inPhy = t.physicsUnit.toLowerCase().includes(q);
        const inChem = t.chemistryUnit.toLowerCase().includes(q);
        const inBot = t.botanyBlock.toLowerCase().includes(q);
        const inZoo = t.zoologyBlock.toLowerCase().includes(q);
        const inDate = t.dateStr.includes(q);
        return inCode || inTitle || inPhy || inChem || inBot || inZoo || inDate;
      }
      return true;
    });
  }, [active12thTests, activePhaseFilter, searchQuery]);

  const active11thTests = useMemo(() => {
    if (class11Track === 'track1') return SUNDAY_11TH_TRACK1_TESTS;
    return SUNDAY_11TH_TRACK2_TESTS;
  }, [class11Track]);

  // Class 11th Batch Sunday Tests
  const filtered11thTests = useMemo(() => {
    return active11thTests.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'cwt' && t.phaseGroup !== 'cwt') return false;
      if (activePhaseFilter === 'cumulative' && t.phaseGroup !== 'cumulative') return false;
      if (activePhaseFilter === 'part' && t.phaseGroup !== 'part') return false;
      if (activePhaseFilter === 'full' && t.phaseGroup !== 'full') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = t.code.toLowerCase().includes(q);
        const inTitle = t.title.toLowerCase().includes(q);
        const inPhy = t.physicsUnit.toLowerCase().includes(q);
        const inChem = t.chemistryUnit.toLowerCase().includes(q);
        const inBot = t.botanyBlock.toLowerCase().includes(q);
        const inZoo = t.zoologyBlock.toLowerCase().includes(q);
        const inDate = t.dateStr.includes(q);
        return inCode || inTitle || inPhy || inChem || inBot || inZoo || inDate;
      }
      return true;
    });
  }, [active11thTests, activePhaseFilter, searchQuery]);

  const currentDisplayTests = activeBatch === 'repeater'
    ? filteredDropperTests
    : activeBatch === '12th'
    ? filtered12thTests
    : filtered11thTests;

    // Upgrade Request status for current track
  const currentTrackUpgradeRequest = useMemo(() => {
    try {
      const raw = localStorage.getItem('neet_unlock_requests');
      if (raw) {
        const reqs = JSON.parse(raw);
        if (Array.isArray(reqs)) {
          const cleanPhone = cleanPhoneNumber(studentPhone);
          return reqs.find((r: any) =>
            ((cleanPhone && cleanPhoneNumber(r.studentPhone) === cleanPhone) || (rollNumber && r.rollNumber === rollNumber)) &&
            (r.testCode === `UPGRADE:${currentTrackPackage.id}` || ((r as any).requestType === 'UPGRADE' && (r as any).targetPackageId === currentTrackPackage.id))
          );
        }
      }
    } catch {}
    return null;
  }, [studentPhone, rollNumber, currentTrackPackage.id]);

  const isUpgradePending = currentTrackUpgradeRequest?.status === 'pending';
  const isUpgradeApproved = currentTrackUpgradeRequest?.status === 'approved';

  
  const handleRazorpayTrackUpgrade = (pkg: PrepPackageItem) => {
    const rollNo = enrolledStudent?.rollNumber || rollNumber || 'NCBT-2027';
    const sName = enrolledStudent?.studentName || studentName || 'Candidate';
    const sPhone = cleanPhoneNumber(enrolledStudent?.studentPhone || studentPhone || '');
    const sEmail = enrolledStudent?.email || '';

    openRazorpayCheckout({
      packageId: pkg.id,
      packageName: pkg.name,
      amount: pkg.priceNumber,
      studentName: sName,
      studentPhone: sPhone,
      studentEmail: sEmail,
      rollNumber: rollNo,
      unlockedTracks: pkg.unlockedTracks,
      onSuccess: async (txn) => {
        try {
          let existingPkgs: string[] = [];
          const raw = localStorage.getItem('neet_enrolled_package_ids');
          if (raw) existingPkgs = JSON.parse(raw);
          if (!existingPkgs.includes(pkg.id)) {
            existingPkgs.push(pkg.id);
          }
          localStorage.setItem('neet_enrolled_package_ids', JSON.stringify(existingPkgs));
        } catch {}

        let updatedStudent = enrolledStudent;
        if (updatedStudent) {
          const prevPkgs = Array.isArray(updatedStudent.enrolledPackages)
            ? updatedStudent.enrolledPackages
            : (updatedStudent.selectedPackage ? [updatedStudent.selectedPackage] : []);
          const mergedPkgs = [
            ...prevPkgs.filter((p: any) => (p?.id || p) !== pkg.id),
            {
              id: pkg.id,
              name: pkg.name,
              price: pkg.price,
              batch: pkg.batch,
              unlockedTracks: pkg.unlockedTracks,
              enrolledAt: new Date().toISOString()
            }
          ];
          updatedStudent = {
            ...updatedStudent,
            status: 'approved',
            enrolledPackages: mergedPkgs,
            unlockedTracks: Array.from(new Set([
              ...(updatedStudent.unlockedTracks || []),
              ...(pkg.unlockedTracks || [])
            ]))
          };
          localStorage.setItem('neet_enrolled_student', JSON.stringify(updatedStudent));
          await syncStudentEnrollmentToCloud(updatedStudent);
        }

        try {
          const reqs = await fetchUnlockRequestsFromCloud();
          const list = reqs || [];
          list.unshift({
            id: 'req-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
            studentName: sName,
            rollNumber: rollNo,
            studentPhone: sPhone,
            parentPhone: updatedStudent?.parentPhone || '',
            parentEmail: sEmail,
            targetExam: 'NEET',
            targetBatch: targetYear,
            testCode: pkg.id.toUpperCase(),
            testTitle: `Paid Track Upgrade: ${pkg.shortTitle} (Txn: ${txn.paymentId})`,
            requestedAt: new Date().toISOString(),
            approvedAt: new Date().toISOString(),
            status: 'approved'
          });
          await syncUnlockRequestsToCloud(list);
        } catch {}

        window.dispatchEvent(new Event('neet_auth_change'));
        window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
        window.dispatchEvent(new CustomEvent('neet_payment_completed', { detail: txn }));

        try {
          confetti({
            particleCount: 160,
            spread: 90,
            origin: { y: 0.5 }
          });
        } catch {}

        setShowAdminApprovalModal(false);
        setAccessRequestSent(false);
      }
    });
  };

  const handleSendUpgradeRequest = async (targetPkg: PrepPackageItem) => {
    setAccessRequestSent(true);

    const newRequest = {
      id: `req-upgrade-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      studentName: studentName || 'Registered Student',
      rollNumber: rollNumber || 'ENROLLED',
      studentPhone: cleanPhoneNumber(studentPhone),
      parentPhone: parentPhone || cleanPhoneNumber(studentPhone),
      parentEmail: enrolledStudent?.parentEmail || enrolledStudent?.email || 'parent@example.com',
      targetExam: 'NEET (UG)',
      targetBatch: activeBatch === 'repeater' ? 'Dropper / Target 2027' : activeBatch === '12th' ? 'Class 12th Batch' : 'Class 11th Batch',
      requestType: 'UPGRADE' as const,
      targetPackageId: targetPkg.id,
      targetPackageName: targetPkg.name,
      testCode: `UPGRADE:${targetPkg.id}`,
      testTitle: `Track Upgrade: ${targetPkg.name}`,
      requestedAt: new Date().toISOString(),
      status: 'pending' as const
    };

    try {
      const cloudReqs = await fetchUnlockRequestsFromCloud();
      const list = cloudReqs && cloudReqs.length > 0 ? cloudReqs : [];
      list.unshift(newRequest);
      localStorage.setItem('neet_unlock_requests', JSON.stringify(list));
      syncUnlockRequestsToCloud(list);
      window.dispatchEvent(new Event('neet_unlock_request_sent'));
    } catch {}

    recordSuperUserNotification({
      contentTitle: `Track Upgrade Request: Candidate ${studentName} (Roll #${rollNumber}) requested upgrade to ${targetPkg.name}`,
      category: 'Other',
      fileSize: `${targetPkg.testsCount} Tests`,
      subject: 'Sunday Test Series'
    });
  };

  const handleLaunchDirectSundayTest = async (plannerTest: SundayPlannerTest) => {
    const isUnlocked = isAdminInSession || (isTrackPurchased && isAdminAccessGranted) || isTestSpecificallyUnlocked(plannerTest.code);
    if (!isUnlocked) {
      setPendingTestToStart(plannerTest);
      setShowAdminApprovalModal(true);
      return;
    }

    const isPCTest = plannerTest.code.startsWith('PC-') || plannerTest.totalQuestions === 100;
    const targetQCount = isPCTest ? 100 : (plannerTest.totalQuestions || 180);
    const targetMarks = isPCTest ? 400 : (plannerTest.totalMarks || 720);
    const targetDuration = isPCTest ? 120 : (plannerTest.durationMinutes || 180);

    // Query authoritative cloud paper directly (single source of truth with highest server revision)
    const paperLookupKey = plannerTest.id;
    let customPaper = await fetchAuthoritativePaper(paperLookupKey, true);
    let testQuestions: Question[] = [];
    let syllabusStr = isPCTest
      ? `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit}`
      : `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`;

    if (customPaper && Array.isArray(customPaper.questions) ) {
      testQuestions = customPaper.questions;
      if (customPaper.customChapters) {
        const bioPart = customPaper.customChapters.biology?.length ? ` | Biology: ${customPaper.customChapters.biology.join(', ')}` : '';
        syllabusStr = `Physics: ${(customPaper.customChapters.physics || []).join(', ')} | Chemistry: ${(customPaper.customChapters.chemistry || []).join(', ')}${bioPart}`;
      }
    } else {
      testQuestions = generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);
    }

    const testItem: TestItem = {
      id: plannerTest.id,
      title: getCleanTestTitle(plannerTest, customPaper),
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: syllabusStr,
      totalQuestions: targetQCount,
      durationMinutes: targetDuration,
      totalMarks: targetMarks,
      negativeMarking: `+4 for correct, -1 for incorrect, 0 for unattempted (Total ${targetMarks} Marks)`,
      difficulty: 'Mixed',
      cbtMode: true,
      features: isPCTest ? [
        '100 Questions (50 Physics + 50 Chemistry)',
        '120 Minutes (2.0 Hours NTA Timer)',
        '400 Marks (+4 / -1 NTA Official Standard)',
        'Dual-Subject Speed & Accuracy Breakdown'
      ] : [
        '180 Questions (45 Phys + 45 Chem + 45 Bot + 45 Zoo)',
        '180 Minutes (3.0 Hours NTA Timer)',
        '720 Marks (+4 / -1 NTA Official Standard)',
        'All India Rank (AIR) & College Probability Predictor'
      ],
      questions: testQuestions
    };

    onStartTest(testItem);
  };

  const handleSendAccessRequest = async () => {
    setAccessRequestSent(true);

    const newRequest = {
      id: `req-${Date.now()}`,
      studentName,
      rollNumber,
      studentPhone,
      parentPhone,
      parentEmail: enrolledStudent?.parentEmail || enrolledStudent?.email || 'parent@example.com',
      targetExam: 'NEET (UG)',
      targetBatch: activeBatch === 'repeater' ? 'Dropper / Target 2027' : activeBatch === '12th' ? 'Class 12th Batch' : 'Class 11th Batch',
      testCode: pendingTestToStart?.code || 'All Sunday Tests',
      testTitle: pendingTestToStart?.title || 'Sunday All-India Test Series (720 Marks)',
      requestedAt: new Date().toISOString(),
      status: 'pending' as const
    };

    try {
      const cloudReqs = await fetchUnlockRequestsFromCloud();
      const list = cloudReqs && cloudReqs.length > 0 ? cloudReqs : [];
      list.unshift(newRequest);
      localStorage.setItem('neet_unlock_requests', JSON.stringify(list));
      syncUnlockRequestsToCloud(list);
      window.dispatchEvent(new Event('neet_unlock_request_sent'));
    } catch {}

    recordSuperUserNotification({
      contentTitle: `Sunday Test Access Request: Candidate ${studentName} (Roll #${rollNumber}) requested authorization for ${pendingTestToStart?.code || 'All Sunday Tests'}`,
      category: 'Test Paper',
      fileSize: 'Test Access',
      subject: 'Sunday Test Series'
    });
  };

  const handleDownloadSundayPdf = async (plannerTest: SundayPlannerTest, includeSolutions: boolean = false) => {
    const isUnlocked = isAdminInSession || (localStorage.getItem('neet_admin_test_access') === 'true') || isTestSpecificallyUnlocked(plannerTest.code);
    if (!isUnlocked) {
      setPendingTestToStart(plannerTest);
      setShowAdminApprovalModal(true);
      return;
    }

    const isPCTest = plannerTest.code.startsWith('PC-') || plannerTest.totalQuestions === 100;
    const targetQCount = isPCTest ? 100 : (plannerTest.totalQuestions || 180);
    const targetMarks = isPCTest ? 400 : (plannerTest.totalMarks || 720);
    const targetDuration = isPCTest ? 120 : (plannerTest.durationMinutes || 180);

    const paperLookupKey = plannerTest.id;
    let customPaper = await fetchAuthoritativePaper(paperLookupKey, true);

    const questions = (customPaper && Array.isArray(customPaper.questions) )
      ? customPaper.questions
      : generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);

    const testItem: TestItem = {
      id: plannerTest.id,
      title: customPaper?.testTitle ? `${plannerTest.code}: ${customPaper.testTitle}` : `${plannerTest.code}: ${plannerTest.title}`,
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: isPCTest
        ? `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit}`
        : customPaper?.customChapters
        ? `Physics: ${(customPaper.customChapters.physics || []).join(', ')} | Chemistry: ${(customPaper.customChapters.chemistry || []).join(', ')}${customPaper.customChapters.biology?.length ? ` | Biology: ${customPaper.customChapters.biology.join(', ')}` : ''}`
        : `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`,
      totalQuestions: targetQCount,
      durationMinutes: targetDuration,
      totalMarks: targetMarks,
      negativeMarking: `+4 for correct, -1 for incorrect, 0 for unattempted (Total ${targetMarks} Marks)`,
      difficulty: 'Mixed',
      cbtMode: true,
      questions
    };
    downloadTestPaperPDF(testItem, includeSolutions);
  };

  const handleSetReminder = (testTitle: string, dateStr: string) => {
    setReminderSetFor(`${testTitle} (${dateStr})`);
    setTimeout(() => {
      setReminderSetFor(null);
    }, 4500);
  };

  return (
    <div className="space-y-4">
      {/* 3 Dedicated Batch Tabs with Dropdowns */}
      <div className="flex flex-wrap items-center justify-between gap-3 relative z-30 pt-1 pb-1">
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Repeater Batch */}
          <div className="relative group">
            <button
              onClick={() => {
                setActiveBatch('repeater');
                setActivePhaseFilter('all');
              }}
              className={`batch-pill-btn ${activeBatch === 'repeater' ? 'selected' : ''}`}
            >
              <span>Repeater / Dropper Batch</span>
            </button>
            
            <div className="absolute left-0 top-[calc(100%+6px)] w-80 bg-white border border-[var(--border)] shadow-[var(--shadow)] rounded-2xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
              <div className="mono-label px-2 py-1 mb-1">Select Track</div>
              <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track1'); setActivePhaseFilter('all'); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${repeaterTrack === 'track1' && activeBatch === 'repeater' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 1: Chapterwise, Partwise & Full (46 Tests)
              </button>
              <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track2'); setActivePhaseFilter('all'); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${repeaterTrack === 'track2' && activeBatch === 'repeater' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 2: 17-Week Fast-Track (42 Tests)
              </button>
              <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track3'); setActivePhaseFilter('all'); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${repeaterTrack === 'track3' && activeBatch === 'repeater' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 3: Physics & Chemistry Only (27 Tests)
              </button>
            </div>
          </div>

          {/* 12th Batch */}
          <div className="relative group">
            <button
              onClick={() => {
                setActiveBatch('12th');
                setActivePhaseFilter('all');
                setShowRevisionBuffer(false);
              }}
              className={`batch-pill-btn ${activeBatch === '12th' ? 'selected' : ''}`}
            >
              <span>12th Batch • 23 Tests</span>
            </button>
            
            <div className="absolute left-0 top-[calc(100%+6px)] w-80 bg-white border border-[var(--border)] shadow-[var(--shadow)] rounded-2xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
              <div className="mono-label px-2 py-1 mb-1">Select Track</div>
              <button onClick={() => { setActiveBatch('12th'); setClass12Track('complete'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${class12Track === 'complete' && activeBatch === '12th' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 1: Complete Syllabus Master Series (23 Tests)
              </button>
              <button onClick={() => { setActiveBatch('12th'); setClass12Track('pc'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${class12Track === 'pc' && activeBatch === '12th' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 2: Physics & Chemistry Series (18 Tests)
              </button>
            </div>
          </div>

          {/* 11th Batch */}
          <div className="relative group">
            <button
              onClick={() => {
                setActiveBatch('11th');
                setActivePhaseFilter('all');
                setShowRevisionBuffer(false);
              }}
              className={`batch-pill-btn ${activeBatch === '11th' ? 'selected' : ''}`}
            >
              <span>11th Batch • 20 Tests</span>
            </button>
            
            <div className="absolute left-0 top-[calc(100%+6px)] w-80 bg-white border border-[var(--border)] shadow-[var(--shadow)] rounded-2xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
              <div className="mono-label px-2 py-1 mb-1">Select Track</div>
              <button onClick={() => { setActiveBatch('11th'); setClass11Track('track1'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${class11Track === 'track1' && activeBatch === '11th' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 1: Chapterwise, Partwise & Full (20 Tests)
              </button>
              <button onClick={() => { setActiveBatch('11th'); setClass11Track('track2'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors rounded-xl ${class11Track === 'track2' && activeBatch === '11th' ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--text)] hover:bg-[var(--surface2)]'}`}>
                Track 2: CWT & Cumulative Master (20 Tests)
              </button>
            </div>
          </div>
        </div>

        {/* Admin Authorization Status Badge */}
        <div className="flex items-center space-x-2">
          {isAdminInSession ? (
            <span className="tag-pill tag-pill-surface2 flex items-center space-x-1.5 py-1.5 px-3">
              <Unlock className="w-3.5 h-3.5 text-cyan-600" />
              <span>Admin Master Session (Preview Mode)</span>
            </span>
          ) : isCurrentTrackUnlocked ? (
            <span className="tag-pill tag-pill-surface2 flex items-center space-x-1.5 py-1.5 px-3">
              <Unlock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Approved by Admin • {currentTrackPackage.testsCount} Tests Unlocked</span>
            </span>
          ) : isTrackPurchased ? (
            <button
              onClick={() => setShowAdminApprovalModal(true)}
              className="tag-pill tag-pill-amber flex items-center space-x-1.5 py-1.5 px-3 hover:opacity-90 transition cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-amber-700" />
              <span>Purchased • Awaiting Admin Approval</span>
            </button>
          ) : (
            <button
              onClick={() => {
                if (onOpenEnrollment) onOpenEnrollment(currentTrackPackage.id);
                else setShowAdminApprovalModal(true);
              }}
              className="btn-pill-primary btn-pill-small"
            >
              <Lock className="w-3.5 h-3.5 text-[#56514c]" />
              <span>Unlock Track ({currentTrackPackage.price})</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Purchased Package Banner (shows purchased test quota) */}
      {enrolledPackagesList.length > 0 && (
        <div className="purchased-quota-bar">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#dbeafe] text-[#1e3a8a] border-2 border-[#1c1917]">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#56514c]">
                Purchased Package &amp; Test Quota
              </div>
              <div className="text-sm font-extrabold text-[#1c1917] flex items-center gap-2 flex-wrap">
                <span>{enrolledPackagesList.map(p => p.shortTitle || p.name).join(', ')}</span>
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                  {totalPurchasedTestsCount} Tests Purchased
                </span>
              </div>
            </div>
          </div>
          <div>
            {isAdminAccessGranted ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#dcfce7] text-[#14532d] text-xs font-black border border-[#86efac]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Admin Approved • {totalPurchasedTestsCount} Tests Unlocked
              </span>
            ) : (
              <button
                onClick={() => setShowAdminApprovalModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fef3c7] text-[#78350f] text-xs font-black border border-[#fde68a] hover:bg-[#fde68a] transition cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-700" /> Awaiting Admin Approval
              </button>
            )}
          </div>
        </div>
      )}

      {/* Header Banner for Current Batch */}
      <div className="pt-2 pb-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c1917] tracking-tight">
          {activeBatch === 'repeater'
            ? repeaterTrack === 'track1'
              ? 'NEET 2026–27 Dropper Batch: Track 1 (20-Week Chapterwise • 46 Tests)'
              : repeaterTrack === 'track2'
              ? 'NEET 2026–27 Dropper Batch: Track 2 (17-Week Fast-Track • 42 Tests)'
              : 'NEET 2026–27 Dropper Batch: Track 3 (Physics & Chemistry Series • 27 Tests)'
            : activeBatch === '12th'
            ? class12Track === 'complete'
              ? 'Class 12th Complete Syllabus Master Test Series (Starting 01 Nov 2026)'
              : 'Class 12th Physics & Chemistry Full-Syllabus Series (10 Mar – 30 Apr 2027)'
            : class11Track === 'track1'
            ? 'Class 11th 2026–27 Exam Planner: Track 1 (Chapterwise, Partwise & Full Syllabus • 20 Tests)'
            : 'Class 11th Foundation Sunday Test Series: Track 2 (CWT & Cumulative • 20 Tests)'}
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-[#56514c] leading-relaxed">
          {activeBatch === '12th' && class12Track === 'pc' ? (
            '18 Tests (PC-01 to PC-18), every 3 days. 100 Questions (50 Physics + 50 Chemistry) · 120 Minutes · 400 Marks.'
          ) : activeBatch === '12th' && class12Track === 'complete' ? (
            'Starting 01 November 2026 – Concluding 07 May 2027: 3-Phase NEET (UG) Master Planner for Class 12: Phase 1: 8 Part-Wise Tests (PART 1–8) every Sunday covering Class 11 & 12 progressively; Phase 2: 10 Complete Syllabus Tests (FULL-01 to FULL-10) scheduled on Sundays across Winter and Spring phases with a dedicated Board exam preparation buffer; Phase 3: 5 NEET Mock Simulations (NEET MOCK-01 to 05) in an intensive 2-day rehearsal sprint through 07 May 2027. 180 Questions • 180 Minutes • 720 Marks CBT.'
          ) : activeBatch === 'repeater' && repeaterTrack === 'pc' ? (
            '27 Tests (PC-01 to PC-27), every 3 days. 100 Questions (50 Physics + 50 Chemistry) · 120 Minutes · 400 Marks.'
          ) : activeBatch === 'repeater' && repeaterTrack === 'track2' ? (
            '42 Tests: 17 Chapter-Wise Tests (T01 to T17) every Sunday → 4 Consolidated Part-Wise Tests (P01 to P04) every 4 days → 21 Full Syllabus Tests (F01 to F21) through 06 May 2027. 180 Questions • 180 Minutes • 720 Marks CBT.'
          ) : activeBatch === 'repeater' ? (
            '46 Tests: 20 Chapter-Wise Tests (CW-01 to CW-20) every Sunday → 8 Part-Wise Cumulative Tests (PT-01 to PT-08) every 2 days → 18 Full Syllabus Tests (FS-01 to FS-18) every 2 days through 07 May 2027. 180 Questions • 180 Minutes • 720 Marks CBT.'
          ) : class11Track === 'track1' ? (
            '20 Tests: 11 Chapter-Wise Tests (CW-01 to CW-11) on Sundays → 6 Partwise Tests (PT-01 to PT-06) every 4 days → 3 Full Syllabus Tests (FS-01 to FS-03) through 30 March 2027. 180 Questions • 180 Minutes • 720 Marks CBT.'
          ) : (
            '20 Tests: 12 Chapter-Wise Tests (CWT-01 to CWT-12) on Sundays → 5 Cumulative Checkpoints (CUM-01 to CUM-05) → 3 Full Syllabus Tests (FST-01 to FST-03) through 30 March 2027. 180 Questions • 180 Minutes • 720 Marks CBT.'
          )}
        </p>
      </div>

      {/* 12th BATCH REVISION & ANALYSIS BUFFER PANEL */}
      {activeBatch === '12th' && showRevisionBuffer && (
        <div className="p-5 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[6px_6px_0px_#1c1917] space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#1c1917]/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-[#c2410c] text-white border-2 border-[#1c1917]">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-[#1c1917]">
                  Board Examination &amp; Revision Buffer (18 January &ndash; 20 March 2027)
                </h3>
                <p className="text-xs text-[#56514c]">
                  Structured 7-cycle Board examination &amp; remediation program to eliminate errors and cement 720-mark mastery.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowRevisionBuffer(false)}
              className="px-3.5 py-1 text-xs font-bold rounded-lg bg-white hover:bg-stone-50 text-[#1c1917] border-2 border-[#1c1917] self-start sm:self-auto cursor-pointer"
            >
              Hide Buffer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {REVISION_ANALYSIS_BUFFER_12TH.map((stage, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border-2 border-[#1c1917] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1c1917] bg-[#fde68a] border border-[#1c1917] px-2 py-0.5 rounded font-mono">
                    Stage {idx + 1}
                  </span>
                  <span className="text-[11px] font-bold text-[#56514c] font-mono">
                    {stage.period}
                  </span>
                </div>
                <div className="text-xs font-bold text-[#1c1917]">
                  {stage.action}
                </div>
                <div className="text-[11px] text-[#56514c] leading-relaxed bg-white p-2.5 rounded-lg border border-[#1c1917]/20">
                  <span className="font-bold text-[#1c1917]">Output:</span> {stage.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SCHEDULED SUNDAYS CALENDAR LIST */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <h2 className="text-sm sm:text-base font-extrabold text-[#1c1917] flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#1c1917]" />
            <span>Showing {currentDisplayTests.length} {activeBatch === '12th' ? 'Scheduled Tests' : 'Scheduled Sunday Tests'}</span>
          </h2>
          <div className="text-xs font-bold font-mono">
            {isCurrentTrackUnlocked ? (
              <span className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-300">
                ✓ {currentDisplayTests.length} of {currentDisplayTests.length} Tests Unlocked (Package Approved)
              </span>
            ) : isTrackPurchased ? (
              <span className="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-300">
                🔒 {currentDisplayTests.length} Tests in Purchased Package (Awaiting Admin Approval)
              </span>
            ) : (
              <span className="text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-300">
                🔒 0 of {currentDisplayTests.length} Tests Unlocked (Package Required)
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {currentDisplayTests.map((mock: SundayPlannerTest) => {
            const paperLookupKey = mock.id;
            const customPaper = localCustomPapers[paperLookupKey] || localCustomPapers[paperLookupKey.toLowerCase()];
            
            const displayTitle = getCleanTestTitle(mock, customPaper);
            const rawDesc = customPaper?.description || mock.objective || mock.description;
            const displayDesc = /official\s+default/i.test(rawDesc) ? (mock.objective || mock.description) : rawDesc;
            
            const displayPhysics = customPaper?.customChapters?.physics?.length ? customPaper.customChapters.physics.join(', ') : mock.physicsUnit;
            const displayChemistry = customPaper?.customChapters?.chemistry?.length ? customPaper.customChapters.chemistry.join(', ') : mock.chemistryUnit;
            const displayBotany = customPaper?.customChapters?.biology?.length ? customPaper.customChapters.biology.join(', ') : mock.botanyBlock;
            const displayZoology = customPaper?.customChapters?.biology?.length ? "Combined with Botany above" : mock.zoologyBlock;

            const isPCTest = mock.code.startsWith('PC-') || mock.totalQuestions === 100;
            let phyCount = isPCTest ? 50 : 45;
            let chemCount = isPCTest ? 50 : 45;
            let botCount = isPCTest ? 0 : 45;
            let zooCount = isPCTest ? 0 : 45;
            if (customPaper && Array.isArray(customPaper.questions) && customPaper.questions.length > 0) {
              const pCount = customPaper.questions.filter(q => q.subject === 'Physics').length;
              const cCount = customPaper.questions.filter(q => q.subject === 'Chemistry').length;
              const bCount = customPaper.questions.filter(q => q.subject === 'Botany').length;
              const zCount = customPaper.questions.filter(q => q.subject === 'Zoology').length;
              const bioCount = customPaper.questions.filter(q => q.subject === 'Biology').length;

              phyCount = pCount || (isPCTest ? 50 : 45);
              chemCount = cCount || (isPCTest ? 50 : 45);

              if (isPCTest) {
                botCount = 0;
                zooCount = 0;
              } else if (bCount > 0 || zCount > 0) {
                botCount = bCount;
                zooCount = zCount;
              } else if (bioCount > 0) {
                botCount = Math.ceil(bioCount / 2);
                zooCount = Math.floor(bioCount / 2);
              } else {
                botCount = 45;
                zooCount = 45;
              }
            }
            
            const totalDynamicQs = phyCount + chemCount + botCount + zooCount;
            const totalDynamicMarks = totalDynamicQs * 4;
            const dynamicDuration = mock.durationMinutes || (isPCTest ? 120 : 180);
            const isTestCardUnlocked = isAdminInSession || (isTrackPurchased && isAdminAccessGranted) || isTestSpecificallyUnlocked(mock.code);

            return (
              <div
                key={mock.id}
                className="test-card-clean flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6"
              >
                <div className="space-y-4 flex-1 w-full">
                  {/* Badges - Blended on a single line */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag-pill tag-pill-amber">
                      {mock.dateStr}
                    </span>
                    <span className="tag-pill tag-pill-amber">
                      {mock.code} · {mock.phase}
                    </span>
                    <span className="tag-pill tag-pill-amber">
                      {totalDynamicMarks} Marks · {dynamicDuration} Mins · {totalDynamicQs} Qs
                    </span>
                    {isTestCardUnlocked ? (
                      <span className="tag-pill tag-pill-green flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Approved by Admin
                      </span>
                    ) : isTrackPurchased ? (
                      <span className="tag-pill tag-pill-amber flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-amber-700" /> Awaiting Admin Approval
                      </span>
                    ) : (
                      <span className="bg-stone-100 text-stone-700 font-bold text-xs px-3 py-1 rounded-md border border-stone-300 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-stone-500" /> Package Required
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1c1917] tracking-tight leading-snug">
                      {displayTitle}
                    </h3>
                    <p className="text-sm text-[#56514c] mt-1 leading-relaxed">
                      {displayDesc}
                    </p>
                  </div>

                  {/* Exact Syllabus Breakdown Grid (2 Cols for PC, 4 Cols for Standard) */}
                  {isPCTest ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 border-l-4 border-l-blue-500 overflow-hidden">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-blue-200/60">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-blue-900 tracking-wide uppercase">
                            <Zap className="w-4 h-4 text-blue-600 shrink-0" /> PHYSICS
                          </span>
                          <span className="font-mono text-xs sm:text-[13px] text-sky-700 font-bold whitespace-nowrap shrink-0">
                            {phyCount} QS
                          </span>
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-[#1c1917] mt-2 leading-relaxed">
                          {displayPhysics}
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 border-l-4 border-l-emerald-500 overflow-hidden">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-emerald-200/60">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-emerald-900 tracking-wide uppercase">
                            <Atom className="w-4 h-4 text-emerald-600 shrink-0" /> CHEMISTRY
                          </span>
                          <span className="font-mono text-xs sm:text-[13px] text-emerald-700 font-bold whitespace-nowrap shrink-0">
                            {chemCount} QS
                          </span>
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-[#1c1917] mt-2 leading-relaxed">
                          {displayChemistry}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
                      <div className="p-3.5 sm:p-4 rounded-xl bg-sky-50/80 border border-sky-200 overflow-hidden">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-sky-200/60">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-sky-900 tracking-wide uppercase">
                            <Zap className="w-4 h-4 text-sky-600 shrink-0" /> PHYSICS
                          </span>
                          <span className="font-mono text-xs sm:text-[13px] text-sky-700 font-bold whitespace-nowrap shrink-0">
                            {phyCount} QS
                          </span>
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-[#1c1917] mt-2 leading-relaxed">
                          {displayPhysics}
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 overflow-hidden">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-emerald-200/60">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-emerald-900 tracking-wide uppercase">
                            <Atom className="w-4 h-4 text-emerald-600 shrink-0" /> CHEMISTRY
                          </span>
                          <span className="font-mono text-xs sm:text-[13px] text-emerald-700 font-bold whitespace-nowrap shrink-0">
                            {chemCount} QS
                          </span>
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-[#1c1917] mt-2 leading-relaxed">
                          {displayChemistry}
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 border-l-4 border-l-amber-500 overflow-hidden">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-amber-200/60">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-amber-900 tracking-wide uppercase">
                            <BookOpen className="w-4 h-4 text-amber-600 shrink-0" /> BOTANY
                          </span>
                          <span className="font-mono text-xs sm:text-[13px] text-sky-700 font-bold whitespace-nowrap shrink-0">
                            {botCount} QS
                          </span>
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-[#1c1917] mt-2 leading-relaxed">
                          {displayBotany}
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-pink-50/50 border border-pink-200/80 border-l-4 border-l-pink-500 overflow-hidden">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-pink-200/60">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-pink-900 tracking-wide uppercase">
                            <Dna className="w-4 h-4 text-pink-600 shrink-0" /> ZOOLOGY
                          </span>
                          <span className="font-mono text-xs sm:text-[13px] text-sky-700 font-bold whitespace-nowrap shrink-0">
                            {zooCount} QS
                          </span>
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-[#1c1917] mt-2 leading-relaxed">
                          {displayZoology}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action CTA Button */}
                <div className="shrink-0 self-stretch sm:self-auto xl:self-center">
                  {isTestCardUnlocked ? (
                    <button
                      onClick={() => handleLaunchDirectSundayTest(mock)}
                      className="btn-pill-primary w-full sm:w-auto text-base"
                    >
                      <span>Test in CBT</span>
                    </button>
                  ) : isTrackPurchased ? (
                    <button
                      onClick={() => handleLaunchDirectSundayTest(mock)}
                      className="btn-pill-ghost w-full sm:w-auto text-sm sm:text-base border-amber-400 text-amber-800"
                    >
                      <Lock className="w-4 h-4 text-amber-700" />
                      <span>Awaiting Admin Approval</span>
                    </button>
                  ) : effectiveEnrolledIds.length > 0 ? (
                    isUpgradePending ? (
                      <button
                        onClick={() => {
                          setPendingTestToStart(mock);
                          setShowAdminApprovalModal(true);
                        }}
                        className="w-full sm:w-auto bg-[#fef3c7] hover:bg-[#fde68a] text-[#78350f] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl border-2 border-[#1c1917] transition cursor-pointer shadow-[3px_3px_0px_#1c1917] flex items-center justify-center space-x-2"
                      >
                        <Clock className="w-4 h-4 text-amber-700" />
                        <span>Upgrade Pending Approval</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setPendingTestToStart(mock);
                          setShowAdminApprovalModal(true);
                        }}
                        className="btn-pill-primary w-full sm:w-auto text-xs sm:text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-[#7c3aed]" />
                        <span>Upgrade to Track ({currentTrackPackage.price})</span>
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => {
                        setPendingTestToStart(mock);
                        setShowAdminApprovalModal(true);
                      }}
                      className="btn-pill-ghost w-full sm:w-auto text-sm sm:text-base"
                    >
                      <Lock className="w-4 h-4 text-[#56514c]" />
                      <span>Unlock Track ({currentTrackPackage.price})</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Admin Authorization Required Modal */}
      {showAdminApprovalModal && (
        <div className="fixed inset-0 z-50 bg-sky-900/80 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-sky-50/60 border border-sky-200 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 text-sky-950">
            {/* Header */}
            <div className={`p-5 text-white flex items-center justify-between ${
              isAdminAccessGranted && !isSundayToday
                ? 'bg-gradient-to-r from-sky-700 via-sky-800 to-stone-900'
                : 'bg-gradient-to-r from-sky-700 via-sky-700 to-stone-900'
            }`}>
              <div className="space-y-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                  isAdminAccessGranted && !isSundayToday
                    ? 'bg-emerald-400 text-sky-950'
                    : 'bg-cyan-400 text-sky-950'
                }`}>
                  {isAdminAccessGranted && !isSundayToday ? '✓ Candidate Authorized' : 'Administrator Authorization Required'}
                </span>
                <h3 className="text-lg font-bold flex items-center gap-4">
                  {isAdminAccessGranted && !isSundayToday ? (
                    <>
                      <Calendar className="w-5 h-5 text-sky-300" />
                      <span>Scheduled for Sunday (720M CBT)</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 text-cyan-300" />
                      <span>{isSundayToday ? 'Sunday Live Test • Admin Approval' : 'Sunday Test Series Authorization'}</span>
                    </>
                  )}
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowAdminApprovalModal(false);
                  setAccessRequestSent(false);
                }}
                className="p-1.5 rounded-xl hover:bg-sky-50/60/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {!isTrackPurchased && (
                <div className="p-4 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#1e3a8a] bg-[#dbeafe] px-2 py-0.5 rounded border border-[#bfdbfe]">
                        {currentTrackPackage.batch.toUpperCase()} • {currentTrackPackage.shortTitle}
                      </span>
                      <h4 className="text-sm font-black text-[#1c1917] mt-1.5">{currentTrackPackage.name}</h4>
                      <p className="text-xs text-[#56514c] mt-0.5 leading-relaxed">{currentTrackPackage.scheduleSummary}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base sm:text-lg font-black text-[#1e3a8a]">{currentTrackPackage.price}</div>
                      <div className="text-xs text-[#78716c] line-through">{currentTrackPackage.originalPrice}</div>
                    </div>
                  </div>

                  {effectiveEnrolledIds.length > 0 ? (
                    <div className="space-y-2 pt-1 border-t border-stone-200">
                      <div className="text-xs text-purple-900 bg-purple-50 p-2.5 rounded-xl border border-purple-200">
                        <div className="font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                          <span>Track Upgrade with Admin Approval</span>
                        </div>
                        <p className="text-[11px] text-purple-700 mt-0.5">
                          You are currently enrolled in {enrolledPackagesList.map(p => p.shortTitle).join(', ')}. You can request institutional Admin Approval to add this track.
                        </p>
                      </div>

                      
                      {/* Direct Instant Pay via Razorpay */}
                      <button
                        onClick={() => handleRazorpayTrackUpgrade(currentTrackPackage)}
                        className="w-full py-3 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] active:bg-[#075985] text-white font-black text-xs sm:text-sm border-2 border-[#1c1917] transition cursor-pointer shadow-[3px_3px_0px_#1c1917] flex items-center justify-center space-x-2 transform hover:scale-[1.01] active:scale-95"
                      >
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Pay {currentTrackPackage.price} via Razorpay (Instant Unlock)</span>
                      </button>

                      <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 font-bold">
                        <span>⚡ Instant UPI / Cards</span>
                        <span>•</span>
                        <span>Auto-Unlocks {currentTrackPackage.testsCount} Tests</span>
                      </div>

                      {isUpgradePending || accessRequestSent ? (
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>Upgrade Request Sent! Awaiting Admin Approval in Portal.</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleSendUpgradeRequest(currentTrackPackage)}
                          className="w-full py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-700 font-bold text-xs border border-stone-300 transition cursor-pointer flex items-center justify-center space-x-1"
                        >
                          <Send className="w-3.5 h-3.5 text-stone-400" />
                          <span>Or Request Upgrade via Admin Approval (Offline / Institutional)</span>
                        </button>
                      )}

                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setShowAdminApprovalModal(false);
                        if (onOpenEnrollment) {
                          onOpenEnrollment(currentTrackPackage.id);
                        }
                      }}
                      className="w-full py-2.5 rounded-xl bg-[#dbeafe] hover:bg-[#bfdbfe] active:bg-[#93c5fd] text-[#1e3a8a] font-black text-xs sm:text-sm border-2 border-[#1c1917] transition cursor-pointer shadow-[2px_2px_0px_#1c1917] flex items-center justify-center space-x-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#1e3a8a]" />
                      <span>Enroll to Unlock {currentTrackPackage.testsCount} Tests ({currentTrackPackage.price})</span>
                    </button>
                  )}
                </div>
              )}

              <p className="text-xs text-sky-700 leading-relaxed">
                {isAdminAccessGranted && !isSundayToday ? (
                  <>
                    Your candidate registration has been verified and authorized by the institution administrator! Sunday All-India Mock Tests (720 Marks) are conducted on Sundays according to the academic planner. This test room will open automatically on Sunday.
                  </>
                ) : isSundayToday ? (
                  <>
                    Sunday All-India Mock Tests (180 Questions • 720 Marks • AIR Prediction) strictly unlock ONLY after administrator approval and package purchase. Send your authorization request below to obtain faculty approval and unlock your CBT access.
                  </>
                ) : (
                  <>
                    Sunday All-India Mock Tests (180 Questions • 720 Marks • AIR Prediction) strictly unlock ONLY after administrator approval and package purchase. You can submit your authorization request now to have your profile approved ahead of Sunday.
                  </>
                )}
              </p>

              {/* Student Identification Card */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-2 text-xs">
                <div className="font-bold text-sky-900 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-sky-600" /> Candidate Verification Details:
                </div>
                <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                  <div>
                    <span className="text-sky-600">Student:</span> <span className="font-bold text-sky-950">{studentName || 'Registered Student'}</span>
                  </div>
                  <div>
                    <span className="text-sky-600">Roll No:</span> <span className="font-bold text-sky-700">{rollNumber || 'Enrolled'}</span>
                  </div>
                  <div>
                    <span className="text-sky-600">Contact:</span> <span className="font-bold text-sky-900">{studentPhone ? `+91 ${studentPhone}` : 'Enrolled Profile'}</span>
                  </div>
                  <div>
                    <span className="text-sky-600">Track:</span>{' '}
                    <span className="font-bold text-sky-950">{currentTrackPackage.shortTitle}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sky-600">Status:</span>{' '}
                    {isCurrentTrackUnlocked ? (
                      <span className="font-bold text-emerald-700">✓ Approved ({currentTrackPackage.testsCount} Tests Unlocked)</span>
                    ) : isTrackPurchased ? (
                      <span className="font-bold text-amber-700">Purchased ({currentTrackPackage.testsCount} Tests) • Pending Admin Approval</span>
                    ) : (
                      <span className="font-bold text-cyan-700">Not in Current Package • Package Required</span>
                    )}
                  </div>
                </div>
              </div>

              {accessRequestSent ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start space-x-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs">
                    <div className="font-bold text-emerald-950">✓ Access Request Sent to Admin Portal!</div>
                    <p className="text-emerald-800">
                      Your test authorization request has been logged in the Admin Portal. Once faculty approves, tests will unlock automatically.
                    </p>
                  </div>
                </div>
              ) : null}

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                {!isAdminAccessGranted && !accessRequestSent && (
                  <button
                    onClick={handleSendAccessRequest}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-2 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Manual Access Request to Administrator</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setShowAdminApprovalModal(false);
                    setAccessRequestSent(false);
                  }}
                  className="w-full py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold text-xs transition cursor-pointer"
                >
                  {isAdminAccessGranted && !isSundayToday ? 'OK, Got It' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};







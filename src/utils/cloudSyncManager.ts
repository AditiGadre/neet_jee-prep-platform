import { supabase } from '../supabaseClient';
import { Question } from '../types';

export interface SyncedSundayPaper {
  paperCode: string;
  testTitle?: string;
  customChapters?: {
    physics: string[];
    chemistry: string[];
    biology: string[];
  };
  questions: Question[];
  updatedAt: string;
  publishedBy?: string;
}

export interface SyncedAdminConfig {
  platformWideSundayAccess: boolean;
  unlockedSundayTestCodes: string[];
  approvedStudentRequests: Array<{
    id: string;
    studentName: string;
    rollNumber: string;
    studentPhone: string;
    parentPhone?: string;
    testCode: string;
    status: 'pending' | 'approved' | 'rejected';
    requestedAt: string;
    approvedAt?: string;
  }>;
  customChapters?: Array<{
    id: string;
    subject: 'Physics' | 'Chemistry' | 'Biology';
    chapterName: string;
    questionCount: number;
    source: string;
    addedAt: string;
  }>;
  lastUpdated: string;
  updatedBy?: string;
}

export interface SyncedStudentProfile {
  studentName: string;
  parentName: string;
  parentPhone: string;
  parentEmail?: string;
  studentPhone: string;
  domicileState?: string;
  caste: string;
  email: string;
  dob: string;
  dobPin: string;
  targetYear: string;
  enrolledAt: string;
  rollNumber: string;
  devices?: string[];
  studentPhoto?: string;
  gender?: string;
  disabilityStatus?: string;
  specialReservation?: string;
  selectedPackage?: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    tagline: string;
    enrolledAt: string;
  };
}

// Storage keys in Supabase questions table
const SUNDAY_PAPER_PREFIX = '__SUNDAY_PAPER__';
const ADMIN_CONFIG_ID = '__GLOBAL_ADMIN_CONFIG__';
const STUDENT_PHONE_PREFIX = '__STUDENT__';
const STUDENT_EMAIL_PREFIX = '__STUDENT_EMAIL__';

// Runtime memory caches
const memorySundayPaperCache = new Map<string, SyncedSundayPaper>();
let memoryAdminConfig: SyncedAdminConfig | null = null;
const memoryStudentPhoneCache = new Map<string, SyncedStudentProfile>();

export function cleanPhoneNumber(raw: string): string {
  if (!raw) return '';
  const digits = raw.replace(/\D/g, '');
  if (digits.length > 10 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  return digits.slice(-10);
}

export function normalizeQuestionText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// 1. SUNDAY TEST PAPER PERSISTENCE
export async function syncSundayPaperToCloud(paper: SyncedSundayPaper): Promise<boolean> {
  const cleanCode = paper.paperCode.toUpperCase().trim();
  const rowId = SUNDAY_PAPER_PREFIX + cleanCode;

  memorySundayPaperCache.set(cleanCode, paper);

  try {
    const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
    const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
    localPapers[cleanCode.toLowerCase()] = paper;
    localPapers[cleanCode] = paper;
    localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
  } catch {}

  if (!supabase) return false;

  try {
    const payloadJson = JSON.stringify(paper);
    const { error } = await supabase.from('questions').upsert(
      {
        id: rowId,
        subject: '__SYSTEM_SYNC__',
        chapter: 'SUNDAY_TEST_PAPERS',
        topic: cleanCode,
        difficulty: 'System',
        question_text: payloadJson,
        options: ['SYNC_PAYLOAD_V1'],
        correct_answer: 0,
        explanation: 'Global Synced Sunday Paper: ' + cleanCode
      },
      { onConflict: 'id' }
    );

    if (error) {
      console.warn('Supabase sync notice for Sunday Paper ' + cleanCode + ':', error);
      return false;
    }

    window.dispatchEvent(
      new CustomEvent('neet_cloud_sunday_paper_synced', { detail: { paperCode: cleanCode, paper } })
    );
    return true;
  } catch (err) {
    console.warn('Error syncing Sunday paper ' + cleanCode + ' to cloud:', err);
    return false;
  }
}

export async function fetchSundayPaperFromCloud(paperCode: string, forceCloud = true): Promise<SyncedSundayPaper | null> {
  const cleanCode = paperCode.toUpperCase().trim();
  const baseCode = cleanCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();

  // 1. If Supabase is active, query cloud database first for universal real-time consistency
  if (supabase) {
    try {
      const rowId = SUNDAY_PAPER_PREFIX + cleanCode;
      const baseRowId = SUNDAY_PAPER_PREFIX + baseCode;

      const { data, error } = await supabase
        .from('questions')
        .select('question_text')
        .or('id.eq.' + rowId + ',id.eq.' + baseRowId)
        .limit(1);

      if (!error && data && data.length > 0) {
        const paper = JSON.parse(data[0].question_text) as SyncedSundayPaper;
        if (paper && Array.isArray(paper.questions) && paper.questions.length === 180) {
          memorySundayPaperCache.set(cleanCode, paper);
          memorySundayPaperCache.set(baseCode, paper);
          try {
            const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
            const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
            localPapers[cleanCode.toLowerCase()] = paper;
            localPapers[cleanCode] = paper;
            localPapers[baseCode.toLowerCase()] = paper;
            localPapers[baseCode] = paper;
            localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
          } catch {}
          return paper;
        }
      }
    } catch (err) {
      console.warn('Error fetching Sunday paper ' + cleanCode + ' from cloud:', err);
    }
  }

  // 2. Check in-memory cache
  if (memorySundayPaperCache.has(cleanCode)) return memorySundayPaperCache.get(cleanCode)!;
  if (memorySundayPaperCache.has(baseCode)) return memorySundayPaperCache.get(baseCode)!;

  // 3. Fallback to localStorage if offline
  try {
    const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
    if (localPapersRaw) {
      const localPapers = JSON.parse(localPapersRaw);
      const matched =
        localPapers[cleanCode.toLowerCase()] ||
        localPapers[cleanCode] ||
        localPapers[baseCode.toLowerCase()] ||
        localPapers[baseCode];
      if (matched && Array.isArray(matched.questions) && matched.questions.length === 180) {
        memorySundayPaperCache.set(cleanCode, matched);
        return matched;
      }
    }
  } catch {}

  return null;
}

export async function deleteSundayPaperFromCloud(paperCode: string): Promise<boolean> {
  const cleanCode = paperCode.toUpperCase().trim();
  const baseCode = cleanCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();
  memorySundayPaperCache.delete(cleanCode);
  memorySundayPaperCache.delete(baseCode);

  try {
    const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
    if (localPapersRaw) {
      const localPapers = JSON.parse(localPapersRaw);
      delete localPapers[cleanCode.toLowerCase()];
      delete localPapers[cleanCode];
      delete localPapers[baseCode.toLowerCase()];
      delete localPapers[baseCode];
      localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
    }
  } catch {}

  if (!supabase) return false;

  try {
    const rowId = SUNDAY_PAPER_PREFIX + cleanCode;
    const baseRowId = SUNDAY_PAPER_PREFIX + baseCode;
    const { error } = await supabase.from('questions').delete().or('id.eq.' + rowId + ',id.eq.' + baseRowId);
    if (!error) {
      window.dispatchEvent(new CustomEvent('neet_cloud_sunday_paper_deleted', { detail: { paperCode: cleanCode } }));
      return true;
    }
  } catch (e) {
    console.warn('Failed to delete Sunday paper ' + cleanCode + ' from cloud:', e);
  }
  return false;
}

export async function fetchAllSundayPapersFromCloud(): Promise<Record<string, SyncedSundayPaper>> {
  const result: Record<string, SyncedSundayPaper> = {};
  if (!supabase) return result;

  try {
    const { data, error } = await supabase
      .from('questions')
      .select('id, question_text')
      .eq('subject', '__SYSTEM_SYNC__')
      .eq('chapter', 'SUNDAY_TEST_PAPERS');

    if (error || !data) return result;

    for (const row of data) {
      try {
        const paper = JSON.parse(row.question_text) as SyncedSundayPaper;
        if (paper && paper.paperCode && Array.isArray(paper.questions) && paper.questions.length === 180) {
          const code = paper.paperCode.toUpperCase();
          result[code] = paper;
          memorySundayPaperCache.set(code, paper);
        }
      } catch {}
    }

    try {
      const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
      const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
      Object.assign(localPapers, result);
      localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
    } catch {}
  } catch (err) {
    console.warn('Error fetching all Sunday papers from cloud:', err);
  }
  return result;
}

// 2. ADMIN CONFIGURATION & UNLOCK SYNC
export async function syncAdminConfigToCloud(configPartial: Partial<SyncedAdminConfig>): Promise<boolean> {
  const current = memoryAdminConfig || {
    platformWideSundayAccess: false,
    unlockedSundayTestCodes: [],
    approvedStudentRequests: [],
    customChapters: [],
    lastUpdated: new Date().toISOString()
  };

  const updatedConfig: SyncedAdminConfig = {
    ...current,
    ...configPartial,
    lastUpdated: new Date().toISOString(),
    updatedBy: configPartial.updatedBy || 'Institutional Admin'
  };

  memoryAdminConfig = updatedConfig;

  try {
    if (typeof updatedConfig.platformWideSundayAccess === 'boolean') {
      localStorage.setItem('neet_admin_test_access', updatedConfig.platformWideSundayAccess ? 'true' : 'false');
    }
    if (updatedConfig.approvedStudentRequests) {
      localStorage.setItem('neet_unlock_requests', JSON.stringify(updatedConfig.approvedStudentRequests));
    }
    localStorage.setItem('neet_cloud_admin_config', JSON.stringify(updatedConfig));
  } catch {}

  if (!supabase) return false;

  try {
    const { error } = await supabase.from('questions').upsert(
      {
        id: ADMIN_CONFIG_ID,
        subject: '__SYSTEM_SYNC__',
        chapter: 'ADMIN_SETTINGS',
        topic: 'PLATFORM_CONFIG',
        difficulty: 'System',
        question_text: JSON.stringify(updatedConfig),
        options: ['ADMIN_CONFIG_V1'],
        correct_answer: 0,
        explanation: 'Global Synced Admin Config'
      },
      { onConflict: 'id' }
    );

    if (error) {
      console.warn('Supabase sync notice for Admin Config:', error);
      return false;
    }

    window.dispatchEvent(
      new CustomEvent('neet_cloud_admin_config_synced', { detail: updatedConfig })
    );
    return true;
  } catch (err) {
    console.warn('Error syncing admin config to cloud:', err);
    return false;
  }
}

export async function fetchAdminConfigFromCloud(): Promise<SyncedAdminConfig | null> {
  try {
    const raw = localStorage.getItem('neet_cloud_admin_config');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.lastUpdated) {
        memoryAdminConfig = parsed;
      }
    }
  } catch {}

  if (!supabase) return memoryAdminConfig;

  try {
    const { data, error } = await supabase
      .from('questions')
      .select('question_text')
      .eq('id', ADMIN_CONFIG_ID)
      .limit(1);

    if (error || !data || data.length === 0) return memoryAdminConfig;

    const config = JSON.parse(data[0].question_text) as SyncedAdminConfig;
    if (config) {
      memoryAdminConfig = config;
      try {
        localStorage.setItem('neet_cloud_admin_config', JSON.stringify(config));
        if (typeof config.platformWideSundayAccess === 'boolean') {
          localStorage.setItem('neet_admin_test_access', config.platformWideSundayAccess ? 'true' : 'false');
        }
        if (Array.isArray(config.approvedStudentRequests)) {
          localStorage.setItem('neet_unlock_requests', JSON.stringify(config.approvedStudentRequests));
        }
      } catch {}
      return config;
    }
  } catch (err) {
    console.warn('Error fetching admin config from cloud:', err);
  }
  return memoryAdminConfig;
}

// 3. UNIVERSAL STUDENT ENROLLMENT BY PHONE
export async function syncStudentEnrollmentToCloud(student: SyncedStudentProfile): Promise<boolean> {
  const phone = cleanPhoneNumber(student.studentPhone);
  if (!phone || phone.length < 10) return false;

  const rowId = STUDENT_PHONE_PREFIX + phone;
  const email = (student.email || '').trim().toLowerCase();

  memoryStudentPhoneCache.set(phone, student);

  try {
    localStorage.setItem('neet_enrolled_student', JSON.stringify(student));
    localStorage.setItem('neet_user_enrolled', 'true');
  } catch {}

  if (!supabase) return false;

  try {
    const payloadJson = JSON.stringify(student);
    const rowsToUpsert: any[] = [
      {
        id: rowId,
        subject: '__SYSTEM_SYNC__',
        chapter: 'STUDENT_ENROLLMENTS',
        topic: phone,
        difficulty: 'Student',
        question_text: payloadJson,
        options: [student.studentName, student.rollNumber, student.email],
        correct_answer: 0,
        explanation: 'Student: ' + student.studentName + ' | Phone: ' + phone
      }
    ];

    if (email && email.includes('@')) {
      const emailSafeKey = email.replace(/[^a-z0-9@._-]/gi, '');
      rowsToUpsert.push({
        id: STUDENT_EMAIL_PREFIX + emailSafeKey,
        subject: '__SYSTEM_SYNC__',
        chapter: 'STUDENT_ENROLLMENTS_EMAIL',
        topic: emailSafeKey,
        difficulty: 'Student',
        question_text: payloadJson,
        options: [student.studentName, student.rollNumber, phone],
        correct_answer: 0,
        explanation: 'Student Email Index: ' + emailSafeKey
      });
    }

    const { error } = await supabase.from('questions').upsert(rowsToUpsert, { onConflict: 'id' });
    if (error) {
      console.warn('Supabase enrollment sync notice for phone ' + phone + ':', error);
      return false;
    }

    window.dispatchEvent(
      new CustomEvent('neet_cloud_student_synced', { detail: { phone, student } })
    );
    return true;
  } catch (err) {
    console.warn('Error syncing student enrollment for phone ' + phone + ':', err);
    return false;
  }
}

export async function fetchStudentByPhoneFromCloud(rawPhone: string): Promise<SyncedStudentProfile | null> {
  const phone = cleanPhoneNumber(rawPhone);
  if (!phone || phone.length < 10) return null;

  // 1. Check Supabase first for the authoritative cloud record across all systems
  if (supabase) {
    try {
      const rowId = STUDENT_PHONE_PREFIX + phone;
      const { data, error } = await supabase
        .from('questions')
        .select('question_text')
        .eq('id', rowId)
        .limit(1);

      if (!error && data && data.length > 0) {
        const student = JSON.parse(data[0].question_text) as SyncedStudentProfile;
        if (student && student.studentName) {
          memoryStudentPhoneCache.set(phone, student);
          try {
            const rawCand = localStorage.getItem('neet_registered_candidates');
            const list = rawCand ? JSON.parse(rawCand) : [];
            const filtered = list.filter((c: any) => cleanPhoneNumber(c.studentPhone || c.phone) !== phone);
            filtered.push(student);
            localStorage.setItem('neet_registered_candidates', JSON.stringify(filtered));
          } catch {}
          return student;
        }
      }
    } catch (err) {
      console.warn('Error fetching student profile for phone ' + phone + ' from cloud:', err);
    }
  }

  // 2. Memory cache check
  if (memoryStudentPhoneCache.has(phone)) {
    return memoryStudentPhoneCache.get(phone)!;
  }

  // 3. Fallback to registered candidates in localStorage
  try {
    const rawCand = localStorage.getItem('neet_registered_candidates');
    if (rawCand) {
      const list = JSON.parse(rawCand);
      if (Array.isArray(list)) {
        const found = list.find((c: any) => cleanPhoneNumber(c.studentPhone || c.phone) === phone);
        if (found && found.studentName) {
          memoryStudentPhoneCache.set(phone, found);
          return found;
        }
      }
    }
  } catch {}

  // 4. Fallback to current enrolled student in localStorage
  try {
    const rawCurr = localStorage.getItem('neet_enrolled_student');
    if (rawCurr) {
      const curr = JSON.parse(rawCurr);
      if (curr && cleanPhoneNumber(curr.studentPhone || curr.parentPhone) === phone && curr.studentName) {
        memoryStudentPhoneCache.set(phone, curr);
        return curr;
      }
    }
  } catch {}

  return null;
}

let hasInitialized = false;

export async function initCloudSync(): Promise<void> {
  if (hasInitialized) return;
  hasInitialized = true;

  try {
    await Promise.allSettled([
      fetchAllSundayPapersFromCloud(),
      fetchAdminConfigFromCloud()
    ]);
  } catch (e) {
    console.warn('Initial cloud sync notice:', e);
  }

  // Realtime subscription via Supabase channel for instant universal synchronization
  if (supabase && typeof supabase.channel === 'function') {
    try {
      supabase
        .channel('platform_universal_sync')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'questions',
            filter: 'subject=eq.__SYSTEM_SYNC__'
          },
          () => {
            fetchAllSundayPapersFromCloud().catch(() => {});
            fetchAdminConfigFromCloud().catch(() => {});
          }
        )
        .subscribe();
    } catch (e) {
      console.warn('Realtime channel subscription notice:', e);
    }
  }

  if (typeof window !== 'undefined') {
    // 20-second active background polling
    setInterval(() => {
      fetchAdminConfigFromCloud().catch(() => {});
      fetchAllSundayPapersFromCloud().catch(() => {});
    }, 20000);

    window.addEventListener('focus', () => {
      fetchAdminConfigFromCloud().catch(() => {});
      fetchAllSundayPapersFromCloud().catch(() => {});
    });
  }
}

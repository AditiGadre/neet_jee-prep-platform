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
  revision?: number;
}

import {
  commitAuthoritativePaperToCloud,
  fetchAuthoritativePaper
} from '../services/authoritativeCloudService';

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
const CUSTOM_QUESTIONS_STORE_ID = '__CUSTOM_QUESTIONS_STORE__';

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

async function insertSystemRow(row: {
  id: string;
  subject: string;
  chapter: string;
  topic: string;
  difficulty: string;
  question_text: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}): Promise<boolean> {
  if (!supabase) return false;
  try {
    const { error } = await supabase.from('questions').insert(row);
    if (error) console.warn('Supabase insert notice for ' + row.id + ':', error.message);
    return !error;
  } catch (e: any) {
    console.warn('Supabase row persist notice for ' + row.id + ':', e.message);
    return false;
  }
}

// 1. SUNDAY TEST PAPER PERSISTENCE (Authoritative Cloud Delegation)
export async function syncSundayPaperToCloud(paper: SyncedSundayPaper): Promise<boolean> {
  const result = await commitAuthoritativePaperToCloud(paper);
  return result.success;
}

export async function fetchSundayPaperFromCloud(paperCode: string, forceCloud = true): Promise<SyncedSundayPaper | null> {
  return await fetchAuthoritativePaper(paperCode, forceCloud);
}

export async function deleteSundayPaperFromCloud(paperCode: string): Promise<boolean> {
  const cleanCode = paperCode.toUpperCase().trim();
  const baseCode = cleanCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();
  memorySundayPaperCache.delete(cleanCode);
  memorySundayPaperCache.delete(baseCode);
  memorySundayPaperCache.delete('REPEATER-' + baseCode);
  memorySundayPaperCache.delete('DROPPER-' + baseCode);

  try {
    const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
    if (localPapersRaw) {
      const localPapers = JSON.parse(localPapersRaw);
      delete localPapers[cleanCode.toLowerCase()];
      delete localPapers[cleanCode];
      delete localPapers[baseCode.toLowerCase()];
      delete localPapers[baseCode];
      delete localPapers['repeater-' + baseCode.toLowerCase()];
      delete localPapers['dropper-' + baseCode.toLowerCase()];
      localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
    }
  } catch {}

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('neet_cloud_sunday_paper_deleted', { detail: { paperCode: cleanCode } }));
  }
  return true;
}


export async function fetchAllSundayPapersFromCloud(): Promise<Record<string, SyncedSundayPaper>> {
  const result: Record<string, SyncedSundayPaper> = {};
  if (!supabase) return result;

  try {
    const { data, error } = await supabase
      .from('questions')
      .select('id, topic, question_text')
      .eq('subject', '__SYSTEM_SYNC__')
      .eq('chapter', 'SUNDAY_TEST_PAPERS');

    if (error || !data) return result;

    for (const row of data) {
      try {
        const paper = JSON.parse(row.question_text) as SyncedSundayPaper;
        if (paper && Array.isArray(paper.questions) && paper.questions.length === 180) {
          const rawCode = (row.id || '')
            .replace(/^__SUNDAY_PAPER__/, '')
            .replace(/__\d+$/, '')
            .toUpperCase()
            .trim();
          const topicCode = (row.topic || '').toUpperCase().trim();
          const pCode = (paper.paperCode || '').toUpperCase().trim();

          const candidateKeys = [topicCode, rawCode, pCode].filter(Boolean);
          for (const key of candidateKeys) {
            const existing = result[key];
            if (!existing || new Date(paper.updatedAt).getTime() >= new Date(existing.updatedAt).getTime()) {
              result[key] = paper;
              memorySundayPaperCache.set(key, paper);
              if (key.startsWith('REPEATER-')) {
                const baseKey = key.replace(/^REPEATER-/, '');
                result[baseKey] = paper;
                memorySundayPaperCache.set(baseKey, paper);
              }
            }
          }
        }
      } catch {}
    }

    try {
      const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
      const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
      Object.assign(localPapers, result);
      localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
    } catch {}

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('neet_cloud_all_sunday_papers_loaded', { detail: result })
      );
    }
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
    const success = await insertSystemRow({
      id: ADMIN_CONFIG_ID + '__' + Date.now(),
      subject: '__SYSTEM_SYNC__',
      chapter: 'ADMIN_SETTINGS',
      topic: 'PLATFORM_CONFIG',
      difficulty: 'System',
      question_text: JSON.stringify(updatedConfig),
      options: ['ADMIN_CONFIG_V2'],
      correct_answer: 0,
      explanation: 'Global Synced Admin Config'
    });

    if (success) {
      window.dispatchEvent(
        new CustomEvent('neet_cloud_admin_config_synced', { detail: updatedConfig })
      );
      return true;
    }
    return false;
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
      .select('id, question_text')
      .eq('subject', '__SYSTEM_SYNC__')
      .eq('chapter', 'ADMIN_SETTINGS')
      .eq('topic', 'PLATFORM_CONFIG');

    if (!error && data && data.length > 0) {
      let latestConfig: SyncedAdminConfig | null = null;
      for (const row of data) {
        try {
          const cfg = JSON.parse(row.question_text) as SyncedAdminConfig;
          if (cfg && cfg.lastUpdated) {
            if (!latestConfig || new Date(cfg.lastUpdated).getTime() >= new Date(latestConfig.lastUpdated).getTime()) {
              latestConfig = cfg;
            }
          }
        } catch {}
      }

      if (latestConfig) {
        memoryAdminConfig = latestConfig;
        try {
          localStorage.setItem('neet_cloud_admin_config', JSON.stringify(latestConfig));
          if (typeof latestConfig.platformWideSundayAccess === 'boolean') {
            localStorage.setItem('neet_admin_test_access', latestConfig.platformWideSundayAccess ? 'true' : 'false');
          }
          if (latestConfig.approvedStudentRequests) {
            localStorage.setItem('neet_unlock_requests', JSON.stringify(latestConfig.approvedStudentRequests));
          }
        } catch {}
        return latestConfig;
      }
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

  const rowId = STUDENT_PHONE_PREFIX + phone + '__' + Date.now();
  const email = (student.email || '').trim().toLowerCase();

  memoryStudentPhoneCache.set(phone, student);

  try {
    localStorage.setItem('neet_enrolled_student', JSON.stringify(student));
    localStorage.setItem('neet_user_enrolled', 'true');
  } catch {}

  if (!supabase) return false;

  try {
    const payloadJson = JSON.stringify(student);
    const successPhone = await insertSystemRow({
      id: rowId,
      subject: '__SYSTEM_SYNC__',
      chapter: 'STUDENT_ENROLLMENTS',
      topic: phone,
      difficulty: 'Student',
      question_text: payloadJson,
      options: [student.studentName, student.rollNumber, student.email],
      correct_answer: 0,
      explanation: 'Student: ' + student.studentName + ' | Phone: ' + phone
    });

    if (email && email.includes('@')) {
      const emailSafeKey = email.replace(/[^a-z0-9@._-]/gi, '');
      await insertSystemRow({
        id: STUDENT_EMAIL_PREFIX + emailSafeKey + '__' + Date.now(),
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

    if (successPhone) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('neet_cloud_student_synced', { detail: { phone, student } })
        );
      }
      return true;
    }
    return false;
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
      const { data, error } = await supabase
        .from('questions')
        .select('id, question_text')
        .eq('subject', '__SYSTEM_SYNC__')
        .eq('chapter', 'STUDENT_ENROLLMENTS')
        .or(`topic.eq.${phone},id.eq.${STUDENT_PHONE_PREFIX + phone}`);

      if (!error && data && data.length > 0) {
        let latestStudent: SyncedStudentProfile | null = null;
        for (const row of data) {
          try {
            const student = JSON.parse(row.question_text) as SyncedStudentProfile;
            if (student && student.studentName) {
              if (
                !latestStudent ||
                new Date(student.enrolledAt || 0).getTime() >= new Date(latestStudent.enrolledAt || 0).getTime()
              ) {
                latestStudent = student;
              }
            }
          } catch {}
        }

        if (latestStudent) {
          memoryStudentPhoneCache.set(phone, latestStudent);
          try {
            const rawCand = localStorage.getItem('neet_registered_candidates');
            const list = rawCand ? JSON.parse(rawCand) : [];
            const filtered = list.filter((c: any) => cleanPhoneNumber(c.studentPhone || c.phone) !== phone);
            filtered.push(latestStudent);
            localStorage.setItem('neet_registered_candidates', JSON.stringify(filtered));
          } catch {}
          return latestStudent;
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

export async function syncCustomQuestionsToCloud(questions: Question[]): Promise<boolean> {
  if (!supabase || !questions || questions.length === 0) return false;
  try {
    const payloadJson = JSON.stringify(questions);
    const rowId = CUSTOM_QUESTIONS_STORE_ID + '__' + Date.now();
    const success = await insertSystemRow({
      id: rowId,
      subject: '__SYSTEM_SYNC__',
      chapter: 'CUSTOM_QUESTION_BANK',
      topic: 'ALL_CUSTOM_QUESTIONS',
      difficulty: 'System',
      question_text: payloadJson,
      options: [`${questions.length} Questions`],
      correct_answer: 0,
      explanation: 'Global Synced Custom Questions Store'
    });

    if (success) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('neet_cloud_custom_questions_synced', { detail: questions }));
      }
      return true;
    }
  } catch (err) {
    console.warn('Error syncing custom questions to cloud:', err);
  }
  return false;
}

export async function fetchCustomQuestionsFromCloud(): Promise<Question[] | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('id, question_text')
      .eq('subject', '__SYSTEM_SYNC__')
      .eq('chapter', 'CUSTOM_QUESTION_BANK');

    if (!error && data && data.length > 0) {
      const mergedMap = new Map<string, Question>();
      for (const row of data) {
        try {
          const qs = JSON.parse(row.question_text) as Question[];
          if (Array.isArray(qs)) {
            for (const q of qs) {
              if (q && q.id) {
                mergedMap.set(q.id, q);
              }
            }
          }
        } catch {}
      }

      if (mergedMap.size > 0) {
        const mergedQuestions = Array.from(mergedMap.values());
        try {
          const currentRaw = localStorage.getItem('neet_custom_questions');
          const current: Question[] = currentRaw ? JSON.parse(currentRaw) : [];
          const seen = new Set(current.map(q => q.id));
          let hasNew = false;
          for (const q of mergedQuestions) {
            if (!seen.has(q.id)) {
              current.push(q);
              seen.add(q.id);
              hasNew = true;
            }
          }
          if (hasNew || current.length < mergedQuestions.length) {
            localStorage.setItem('neet_custom_questions', JSON.stringify(current));
            if (typeof window !== 'undefined') {
              window.dispatchEvent(
                new CustomEvent('neet_question_bank_updated', {
                  detail: { addedCount: mergedQuestions.length, totalCustom: current.length }
                })
              );
            }
          }
        } catch {}
        return mergedQuestions;
      }
    }
  } catch (e) {
    console.warn('Error fetching custom questions from cloud:', e);
  }
  return null;
}

let hasInitialized = false;

export async function initCloudSync(): Promise<void> {
  if (hasInitialized) return;
  hasInitialized = true;

  try {
    await Promise.allSettled([
      fetchAllSundayPapersFromCloud(),
      fetchAdminConfigFromCloud(),
      fetchCustomQuestionsFromCloud()
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
          (payload: any) => {
            const row = payload?.new;
            if (row && row.chapter === 'SUNDAY_TEST_PAPERS' && row.question_text) {
              try {
                const paper = JSON.parse(row.question_text) as SyncedSundayPaper;
                if (paper && Array.isArray(paper.questions) && paper.questions.length === 180) {
                  const pCode = (paper.paperCode || row.topic || '').toUpperCase().trim();
                  const baseCode = pCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();
                  const is11th = pCode.startsWith('11TH-');
                  const is12th = pCode.startsWith('12TH-');

                  const cached = memorySundayPaperCache.get(pCode);
                  const incomingTs = new Date(paper.updatedAt || 0).getTime() || 0;
                  const cachedTs = cached ? new Date(cached.updatedAt || 0).getTime() || 0 : 0;

                  if (incomingTs >= cachedTs) {
                    memorySundayPaperCache.set(pCode, paper);
                    memorySundayPaperCache.set(baseCode, paper);
                    if (!is11th && !is12th) {
                      memorySundayPaperCache.set('REPEATER-' + baseCode, paper);
                      memorySundayPaperCache.set('DROPPER-' + baseCode, paper);
                    }
                    try {
                      const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
                      const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
                      localPapers[pCode.toLowerCase()] = paper;
                      localPapers[pCode] = paper;
                      localPapers[baseCode.toLowerCase()] = paper;
                      localPapers[baseCode] = paper;
                      if (!is11th && !is12th) {
                        localPapers['repeater-' + baseCode.toLowerCase()] = paper;
                        localPapers['repeater-' + baseCode] = paper;
                        localPapers['dropper-' + baseCode.toLowerCase()] = paper;
                        localPapers['dropper-' + baseCode] = paper;
                      }
                      localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
                    } catch {}

                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(
                        new CustomEvent('neet_cloud_sunday_paper_synced', {
                          detail: { paperCode: pCode, paper, source: 'realtime' }
                        })
                      );
                    }
                  }
                }
              } catch {}
            } else if (row && row.chapter === 'ADMIN_CONFIG') {
              fetchAdminConfigFromCloud().catch(() => {});
            } else if (row && row.chapter === 'CUSTOM_QUESTIONS') {
              fetchCustomQuestionsFromCloud().catch(() => {});
            }
          }
        )
        .subscribe();
    } catch (e) {
      console.warn('Realtime channel subscription notice:', e);
    }
  }

  if (typeof window !== 'undefined') {
    // 15-second active background polling for lightweight config & custom questions
    setInterval(() => {
      fetchAdminConfigFromCloud().catch(() => {});
      fetchCustomQuestionsFromCloud().catch(() => {});
    }, 15000);

    window.addEventListener('focus', () => {
      fetchAdminConfigFromCloud().catch(() => {});
      fetchCustomQuestionsFromCloud().catch(() => {});
    });
  }
}

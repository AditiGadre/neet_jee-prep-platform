import { DownloadRecord } from '../types';
import { supabase } from '../supabaseClient';

const STORAGE_KEY = 'neet_user_downloads';

/**
 * Get current signed-in user from localStorage or active session
 */
export function getCurrentUser() {
  try {
    const raw = localStorage.getItem('neet_local_user');
    if (raw) {
      const user = JSON.parse(raw);
      if (user && (user.name || user.phone || user.user_metadata?.name || user.user_metadata?.phone)) {
        return user;
      }
    }
    const rawEnrolled = localStorage.getItem('neet_enrolled_student');
    if (rawEnrolled) {
      const enrolled = JSON.parse(rawEnrolled);
      if (enrolled && (enrolled.studentName || enrolled.studentPhone)) {
        return {
          id: enrolled.rollNumber || 'student-' + (enrolled.studentPhone || Date.now()),
          name: enrolled.studentName || 'Enrolled Student',
          phone: enrolled.studentPhone ? `+91 ${enrolled.studentPhone}` : '',
          email: enrolled.email || 'student.target2027@neetprep.in',
          user_metadata: {
            name: enrolled.studentName || 'Enrolled Student',
            phone: enrolled.studentPhone ? `+91 ${enrolled.studentPhone}` : '',
            rollNumber: enrolled.rollNumber || ''
          }
        };
      }
    }
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Track a downloaded item associated with the current user session
 */
export function trackDownload(item: {
  title: string;
  category: DownloadRecord['category'];
  subject?: string;
  chapter?: string;
  fileSize?: string;
  questionReferences?: string;
  format?: 'PDF' | 'HTML' | 'DOC';
}): DownloadRecord {
  const user = getCurrentUser();
  const userEmail = user?.email || 'guest.student@neetcbt.in';
  const userName = user?.user_metadata?.name || user?.name || (user ? userEmail.split('@')[0] : 'Guest Student');
  const userPhone = user?.user_metadata?.phone || user?.phone || '';
  const userId = user?.id || 'guest-' + Date.now();

  const record: DownloadRecord = {
    id: 'dl-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    userId,
    userEmail,
    userName,
    userPhone,
    title: item.title,
    category: item.category,
    subject: item.subject || 'All Subjects',
    timestamp: new Date().toISOString(),
    fileSize: item.fileSize || '1.8 MB',
    questionReferences: item.questionReferences,
    format: item.format || 'PDF'
  };

  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existingList: DownloadRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    
    // Prepend new record (max 100 recent downloads)
    const updated = [record, ...existingList].slice(0, 100);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Broadcast custom event so UI updates reactively
    window.dispatchEvent(new CustomEvent('neet_downloads_change', { detail: record }));
  } catch (err) {
    console.warn('Could not save download to localStorage:', err);
  }

  // Attempt remote Supabase sync if user is logged in
  if (supabase && user && user.id && !String(user.id).startsWith('local-') && !String(user.id).startsWith('guest-')) {
    try {
      supabase.from('user_downloads').insert({
        user_id: user.id,
        user_email: userEmail,
        user_name: userName,
        user_phone: userPhone,
        title: item.title,
        category: item.category,
        subject: item.subject,
        file_size: record.fileSize,
        question_references: item.questionReferences,
        format: record.format,
        created_at: record.timestamp
      }).then(() => {}).catch(() => {});
    } catch {
      // ignore
    }
  }

  return record;
}

/**
 * Get all download records for the current user
 */
export function getUserDownloads(userEmail?: string): DownloadRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const list: DownloadRecord[] = JSON.parse(raw);
    if (userEmail) {
      const clean = userEmail.trim().toLowerCase();
      return list.filter(d => d.userEmail.toLowerCase() === clean);
    }
    return list;
  } catch {
    return [];
  }
}

/**
 * Clear download history for current user
 */
export function clearUserDownloads(userEmail?: string) {
  try {
    if (!userEmail) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      const clean = userEmail.trim().toLowerCase();
      const list = getUserDownloads();
      const filtered = list.filter(d => d.userEmail.toLowerCase() !== clean);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
    window.dispatchEvent(new CustomEvent('neet_downloads_change'));
  } catch (err) {
    console.warn('Error clearing downloads:', err);
  }
}

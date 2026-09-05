import { supabase } from '../supabaseClient';
import { getCurrentUser } from './downloadTracker';

export interface SuperUserNotification {
  id: string;
  type: 'DOWNLOAD_ALERT' | 'USER_SIGNUP' | 'TEST_COMPLETED';
  title: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  contentTitle: string;
  category: 'Test Paper' | 'Book' | 'Scorecard' | 'DPP' | 'Custom Test' | 'Other';
  fileSize: string;
  fileSizeBytes: number;
  timestamp: string;
  read: boolean;
}

const STORAGE_KEY = 'neet_superuser_notifications';

/**
 * Parses file size string (e.g. "2.4 MB", "800 KB") to approx bytes
 */
function parseFileSizeToBytes(sizeStr: string): number {
  if (!sizeStr) return 1.8 * 1024 * 1024;
  const num = parseFloat(sizeStr);
  if (isNaN(num)) return 1.5 * 1024 * 1024;
  if (sizeStr.toLowerCase().includes('kb')) return Math.round(num * 1024);
  if (sizeStr.toLowerCase().includes('gb')) return Math.round(num * 1024 * 1024 * 1024);
  return Math.round(num * 1024 * 1024); // default MB
}

/**
 * Format bytes to readable string (e.g. "14.8 MB")
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 MB';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Record a super user notification when any content is downloaded
 */
export function recordSuperUserNotification(item: {
  contentTitle: string;
  category: SuperUserNotification['category'];
  fileSize?: string;
  subject?: string;
}): SuperUserNotification {
  const user = getCurrentUser();
  const userName = user?.name || user?.user_metadata?.name || 'Enrolled Student';
  const userEmail = user?.email || 'student.target2026@neetprep.in';
  const userPhone = user?.phone || user?.user_metadata?.phone || '+91 9876543210';
  const size = item.fileSize || '1.8 MB';
  const fileSizeBytes = parseFileSizeToBytes(size);

  const notification: SuperUserNotification = {
    id: 'su-notif-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    type: 'DOWNLOAD_ALERT',
    title: `Student Download: ${item.category} - ${item.contentTitle}`,
    userName,
    userEmail,
    userPhone,
    contentTitle: item.contentTitle,
    category: item.category,
    fileSize: size,
    fileSizeBytes,
    timestamp: new Date().toISOString(),
    read: false,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: SuperUserNotification[] = raw ? JSON.parse(raw) : [];
    const updated = [notification, ...list].slice(0, 150); // Store up to 150 notifications
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Broadcast to UI
    window.dispatchEvent(new CustomEvent('neet_superuser_alert', { detail: notification }));
  } catch (err) {
    console.warn('Could not save superuser notification:', err);
  }

  // Sync to Supabase if available
  if (supabase) {
    try {
      supabase.from('superuser_notifications').insert({
        user_name: userName,
        user_email: userEmail,
        user_phone: userPhone,
        content_title: item.contentTitle,
        category: item.category,
        file_size: size,
        file_size_bytes: fileSizeBytes,
        created_at: notification.timestamp,
        read: false
      }).then(() => {}).catch(() => {});
    } catch {
      // ignore
    }
  }

  return notification;
}

/**
 * Get all super user notifications
 */
export function getSuperUserNotifications(): SuperUserNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed initial sample super user notifications if fresh
      const initial: SuperUserNotification[] = [
        {
          id: 'su-seed-1',
          type: 'DOWNLOAD_ALERT',
          title: 'Student Download: Book - Biology NCERT Class 11 & 12 Complete High-Yield Booster',
          userName: 'Dr. Aditi (NEET Aspirant)',
          userEmail: 'student.target2026@neetprep.in',
          userPhone: '+91 9876543210',
          contentTitle: 'Biology NCERT Class 11 & 12 Complete High-Yield Booster',
          category: 'Book',
          fileSize: '2.4 MB',
          fileSizeBytes: 2.4 * 1024 * 1024,
          timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
          read: false
        },
        {
          id: 'su-seed-2',
          type: 'DOWNLOAD_ALERT',
          title: 'Student Download: Test Paper - Sunday All India Grand Mock Test #1',
          userName: 'Dr. Aditi (NEET Aspirant)',
          userEmail: 'student.target2026@neetprep.in',
          userPhone: '+91 9876543210',
          contentTitle: 'Sunday All India Grand Mock Test #1 (Complete PCB)',
          category: 'Test Paper',
          fileSize: '1.8 MB',
          fileSizeBytes: 1.8 * 1024 * 1024,
          timestamp: new Date(Date.now() - 1000 * 60 * 65).toISOString(),
          read: true
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Get aggregate Super User statistics
 */
export function getSuperUserMetrics() {
  const notifications = getSuperUserNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;
  const totalDownloads = notifications.length;
  const totalBytes = notifications.reduce((acc, n) => acc + (n.fileSizeBytes || 1.8 * 1024 * 1024), 0);
  
  const uniqueStudents = Array.from(new Set(notifications.map(n => n.userEmail))).length;

  const categoryBreakdown = notifications.reduce((acc: Record<string, number>, n) => {
    acc[n.category] = (acc[n.category] || 0) + 1;
    return acc;
  }, {});

  return {
    totalDownloads,
    totalVolumeFormatted: formatBytes(totalBytes),
    totalBytes,
    unreadCount,
    uniqueStudents: uniqueStudents || 1,
    categoryBreakdown,
  };
}

/**
 * Mark all notifications as read
 */
export function markAllSuperUserNotificationsAsRead() {
  try {
    const list = getSuperUserNotifications().map(n => ({ ...n, read: true }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('neet_superuser_alert'));
  } catch (e) {
    console.warn('Error marking super user notifications as read:', e);
  }
}

/**
 * Clear super user notifications history
 */
export function clearSuperUserNotifications() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('neet_superuser_alert'));
  } catch (e) {
    console.warn('Error clearing super user notifications:', e);
  }
}

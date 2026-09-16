import { Crown, Sparkles, Building, Award } from 'lucide-react';
import { AdminEnrollmentNotification, EnrolledPackage } from '../types';

export interface PrepPackageItem {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  icon: any;
  price: string;
  originalPrice: string;
  discount: string;
  tagline: string;
  features: string[];
}

export const NEET_PREP_PACKAGES: PrepPackageItem[] = [
  {
    id: 'online-cbt',
    name: 'Online CBT All-India Test Series',
    badge: 'Most Popular',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: Sparkles,
    price: '₹2,999',
    originalPrice: '₹5,999',
    discount: '50% OFF',
    tagline: '33 Official Sunday Mocks + 200+ Chapter-Wise & Unit Tests with Instant AIR',
    features: [
      '33 Official Full-Syllabus Sunday CBT Tests (180 Qs / 720 Marks)',
      '200+ Chapter-Wise (CWT) & Unit Practice CBT Mocks',
      'Instant All-India Rank (AIR), Subject Percentile & Accuracy Analysis',
      'Exact NTA NEET Computer-Based Test Simulator Interface',
      'Dual-Device Protected Candidate Access (Laptop + Mobile)'
    ]
  },
  {
    id: 'jumbo',
    name: 'Jumbo Package (CBT + All Study Materials)',
    badge: 'All-in-One Value',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Crown,
    price: '₹5,499',
    originalPrice: '₹11,999',
    discount: '54% OFF',
    tagline: 'Complete CBT Access + 15,000+ Question Banks & DPP Generator',
    features: [
      'All Online CBT All-India Test Series Features Included',
      'Last Leap Part-II (5,070 Qs + 827 Diagrams) Master Bank',
      'Allen & Aakash High-Yield NCERT Question Archives',
      'Unlimited DPP Custom Test Generator with Chapter Isolation',
      'High-Yield Formula Sheets & Offline PDF Downloads'
    ]
  },
  {
    id: 'hybrid-cbt-omr',
    name: 'Hybrid Test Series (CBT + OMR Center Tests)',
    badge: 'CBT + Center OMR',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: Building,
    price: '₹4,499',
    originalPrice: '₹8,999',
    discount: '50% OFF',
    tagline: 'Physical Test Center Sunday OMR Mocks + Digital CBT Online Portal',
    features: [
      '40 Physical Test Center Sunday Mocks with authentic OMR evaluation',
      'Complete digital access to NEET CBT Online Portal & AI Analytics',
      'All-India Rank, detailed step-by-step solutions & percentile analysis',
      'Printed question booklets & OMR answer sheets at test centers',
      'Pan-India test center access across 150+ cities'
    ]
  },
  {
    id: 'target-batch',
    name: 'Target Dedicated Batch Pack',
    badge: 'Multi-Year Flagship',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: Award,
    price: '₹6,999',
    originalPrice: '₹14,999',
    discount: '53% OFF',
    tagline: 'Multi-Year Dedicated Academic Test Foundation for NEET Aspirants',
    features: [
      'Curriculum Schedule Mapped Specifically for Target Academic Year',
      'Chapter-Wise (CWT), Cumulative, Part & Full Syllabus Tests',
      '24/7 AI-Powered Test Doubt Resolution & Analytics',
      'Detailed Weak-Area Remediation & NCERT Page Mapping',
      'Parent Progress SMS/Email Notification Reports'
    ]
  }
];

export function getPackageById(id: string): PrepPackageItem {
  return NEET_PREP_PACKAGES.find(p => p.id === id) || NEET_PREP_PACKAGES[0];
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
  } catch (err) {
    console.error('Failed to save admin notification:', err);
  }
}

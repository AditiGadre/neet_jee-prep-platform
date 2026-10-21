import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Sparkles,
  MessageCircleQuestion,
  Play,
  Award,
  ChevronDown,
  User as UserIcon,
  LogOut,
  Download,
  Phone,
  Mail,
  ShieldCheck,
  HardDrive,
  Upload,
  GraduationCap,
  Package,
  Crown,
  Layers,
  CheckCircle2,
  X,
  ArrowRight,
  Monitor,
  Building,
  Lock
} from 'lucide-react';
import { ExamType } from '../types';
import { getCurrentUser, getUserDownloads } from '../utils/downloadTracker';
import { getSuperUserMetrics } from '../utils/superUserNotifier';
import { EnrolledStudent } from './EnrollmentGate';
import { NEET_PREP_PACKAGES } from '../data/packagesData';

import { TabType } from './Sidebar';

interface HeaderProps {
  activeExam: ExamType;
  onSelectExam: (exam: ExamType) => void;
  targetYear?: '2027' | '2028' | '2029';
  onSelectTargetYear?: (year: '2027' | '2028' | '2029') => void;
  onOpenQuickTest: () => void;
  onOpenDoubtModal: () => void;
  completedTestsCount: number;
  enrolledStudent?: EnrolledStudent | null;
  userEmail: string | null;
  onOpenAuth: () => void;
  onSignOut: () => void;
  onOpenDownloads?: () => void;
  onOpenSuperUser?: () => void;
  onOpenUploadModal?: () => void;
  onOpenEnrollment?: (packageInfo?: any) => void;
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  onOpenAdminLogin?: () => void;
  isAdmin?: boolean;
  activeTab?: TabType;
  onSelectTab?: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeExam,
  onSelectExam,
  targetYear = '2027',
  onSelectTargetYear,
  onOpenQuickTest,
  onOpenDoubtModal,
  completedTestsCount,
  enrolledStudent: propEnrolledStudent,
  userEmail,
  onOpenAuth,
  onSignOut,
  onOpenDownloads,
  onOpenSuperUser,
  onOpenUploadModal,
  onOpenEnrollment,
  onNavigateHome,
  onNavigateAbout,
  onOpenAdminLogin,
  isAdmin = false,
  activeTab = 'home',
  onSelectTab
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [downloadsCount, setDownloadsCount] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<any>(getCurrentUser());

  const enrolledStudent = propEnrolledStudent !== undefined ? propEnrolledStudent : (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const refreshUserData = () => {
    const user = getCurrentUser();
    setCurrentUser(user);
    const downloads = getUserDownloads(user?.email);
    setDownloadsCount(downloads.length);
  };

  useEffect(() => {
    refreshUserData();

    const handleDownloadsChange = () => refreshUserData();
    const handleAuthChange = () => refreshUserData();

    window.addEventListener('neet_downloads_change', handleDownloadsChange);
    window.addEventListener('neet_auth_change', handleAuthChange);

    return () => {
      window.removeEventListener('neet_downloads_change', handleDownloadsChange);
      window.removeEventListener('neet_auth_change', handleAuthChange);
    };
  }, [userEmail]);

  const userName = enrolledStudent?.studentName || currentUser?.name || currentUser?.user_metadata?.name || (userEmail ? userEmail.split('@')[0] : 'NEET Candidate');
  const userPhone = enrolledStudent?.studentPhone ? `+91 ${enrolledStudent.studentPhone}` : currentUser?.phone || currentUser?.user_metadata?.phone || '';
  const parentName = enrolledStudent?.parentName || currentUser?.parentName || 'Parent / Guardian';
  const userCaste = enrolledStudent?.caste || currentUser?.caste || 'General / Open';

  return (
    <header className="clean-navbar">
      <div className="clean-container">
        <div className="clean-navbar-inner">
          {/* Logo & Brand */}
          <div
            onClick={() => {
              if (onSelectTab) onSelectTab('home');
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="clean-logo cursor-pointer hover:opacity-90 transition shrink-0"
            title="NeetCbt Exam Platform"
          >
            Neet<span className="cbt-text">Cbt</span>
          </div>

          {/* Top Page Navigation Links (Desktop) */}
          <nav className="hidden lg:flex clean-menu-links">
            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('home');
                if (onNavigateHome) onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`clean-nav-link ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('home');
                if (onNavigateHome) onNavigateHome();
                setTimeout(() => {
                  document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="clean-nav-link"
            >
              Courses &amp; Packages
            </button>
            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('test-series');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`clean-nav-link ${activeTab === 'test-series' ? 'active' : ''}`}
            >
              Test Series (196 Tests)
            </button>
            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('about-exam');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`clean-nav-link ${activeTab === 'about-exam' ? 'active' : ''}`}
            >
              About NEET Exam &amp; Cutoffs
            </button>
            {isAdmin && (
              <button
                onClick={() => {
                  if (onSelectTab) onSelectTab('what-extra');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`clean-nav-link ${activeTab === 'what-extra' ? 'active' : ''}`}
              >
                What Extra (Admin)
              </button>
            )}
          </nav>

          {/* Target Year Selector Bar: 2027, 2028, 2029 */}
          <div className="hidden sm:inline-flex shrink-0 items-center whitespace-nowrap year-segmented-control">
            {(['2027', '2028', '2029'] as const).map(yr => (
              <button
                key={yr}
                onClick={() => onSelectTargetYear && onSelectTargetYear(yr)}
                className={`year-segmented-btn shrink-0 whitespace-nowrap ${targetYear === yr ? 'selected' : ''}`}
                title={`Select NEET Target Year ${yr}`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">

            {/* Institutional Master Admin Portal Button */}
            <button
              id="header-admin-portal-btn"
              type="button"
              onClick={isAdmin && onOpenSuperUser ? onOpenSuperUser : onOpenAdminLogin || onOpenSuperUser}
              className="clean-nav-admin-link text-xs sm:text-sm"
              title={isAdmin ? 'Institutional Master Admin Session Active (Click to open Admin Vault)' : 'Institution Director & Master Admin Security Portal'}
            >
              {isAdmin ? 'Admin Vault' : 'Admin Portal'}
            </button>

            {/* Auth / User Profile Button & Dropdown */}
            {userEmail || enrolledStudent ? (
              <div className="relative">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(!profileDropdownOpen);
                  }}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-sky-50 hover:bg-sky-50 border border-sky-200 px-2 sm:px-2.5 py-1 rounded-xl transition cursor-pointer"
                >
                  {enrolledStudent?.studentPhoto ? (
                    <img
                      src={enrolledStudent.studentPhoto}
                      alt={userName}
                      className="w-7 h-7 rounded-full object-cover border border-sky-400 shrink-0"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-600 to-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 uppercase shadow-2xs">
                      {userName.charAt(0)}
                    </div>
                  )}
                  <div className="text-left hidden sm:block max-w-[110px] truncate">
                    <p className="text-[11px] font-bold text-sky-950 truncate leading-none">{userName}</p>
                    <p className="text-[9px] text-sky-600 font-mono truncate">{userPhone}</p>
                  </div>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-84 rounded-2xl bg-white border border-[var(--border)] shadow-[var(--shadow)] py-2 z-50 animate-in fade-in zoom-in-95 duration-100 text-[var(--text)]">
                    <div className="px-4 py-3 border-b border-[var(--border)] space-y-2 bg-[var(--surface2)]/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider font-mono">
                            Verified NeetCbt Student
                          </span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-bold bg-[var(--primary-soft)] text-[var(--primary)]">
                          {userCaste}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        {enrolledStudent?.studentPhoto ? (
                          <img
                            src={enrolledStudent.studentPhoto}
                            alt={userName}
                            className="w-11 h-11 rounded-xl object-cover border-2 border-[var(--primary)] shadow-xs shrink-0"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-xl bg-[var(--primary)] text-white font-bold text-base flex items-center justify-center shrink-0 uppercase shadow-xs">
                            {userName.charAt(0)}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-[var(--text)] truncate">{userName}</p>
                          <p className="text-[10px] text-[var(--muted)]">Parent: <strong>{parentName}</strong></p>
                          {enrolledStudent?.gender && (
                            <p className="text-[10px] text-[var(--muted)]">Gender: <strong>{enrolledStudent.gender}</strong></p>
                          )}
                        </div>
                      </div>

                      {/* Badges for Disability and Defence Special Reservation */}
                      {(enrolledStudent?.disabilityStatus && enrolledStudent.disabilityStatus !== 'No Disability' ||
                        enrolledStudent?.specialReservation && enrolledStudent.specialReservation !== 'None') && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {enrolledStudent.disabilityStatus !== 'No Disability' && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[var(--primary-soft)] text-[var(--primary)] border border-blue-200 truncate max-w-full">
                              ♿ {enrolledStudent.disabilityStatus}
                            </span>
                          )}
                          {enrolledStudent.specialReservation !== 'None' && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-cyan-100 text-cyan-900 border border-cyan-200 truncate max-w-full">
                              🎖️ {enrolledStudent.specialReservation}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="space-y-0.5 font-mono text-[10px] text-[var(--muted)] pt-0.5">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-3 h-3 text-stone-400 shrink-0" />
                          <span className="truncate">{userEmail || enrolledStudent?.email}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-emerald-700 font-semibold">
                          <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{userPhone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenDownloads) onOpenDownloads();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center justify-between text-[var(--text)] hover:bg-[var(--surface2)] transition cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4 text-[var(--primary)]" />
                          <span className="font-semibold">My Downloaded Files</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-bold text-[10px] font-mono">
                          {downloadsCount}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenEnrollment) onOpenEnrollment();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-[var(--text)] hover:bg-[var(--surface2)] transition cursor-pointer"
                      >
                        <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
                        <span className="font-semibold">Candidate Enrollment Form</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenSuperUser) onOpenSuperUser();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-[var(--text)] hover:bg-cyan-50 hover:text-cyan-900 transition cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-cyan-600" />
                        <span className="font-semibold">Super User &amp; Admin Vault</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenQuickTest();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-[var(--text)] hover:bg-[var(--surface2)] transition cursor-pointer"
                      >
                        <Play className="w-4 h-4 text-stone-400" />
                        <span>Launch Sunday Mock (180 Qs)</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenDoubtModal();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-[var(--text)] hover:bg-[var(--surface2)] transition cursor-pointer"
                      >
                        <MessageCircleQuestion className="w-4 h-4 text-stone-400" />
                        <span>Ask 24/7 Academic Doubt</span>
                      </button>
                    </div>

                    <div className="pt-1.5 border-t border-[var(--border)] px-2">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onSignOut();
                        }}
                        className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center space-x-2 transition cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out / Switch Profile</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="btn-pill-primary btn-pill-small"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile & Tablet Page Navigation Bar */}
        <div className="flex lg:hidden items-center space-x-1.5 py-2.5 overflow-x-auto no-scrollbar border-t border-[var(--border)] text-xs">
          <button
            onClick={() => {
              if (onSelectTab) onSelectTab('home');
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`clean-nav-link ${activeTab === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => {
              if (onSelectTab) onSelectTab('home');
              if (onNavigateHome) onNavigateHome();
              setTimeout(() => {
                document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="clean-nav-link"
          >
            Courses &amp; Packages
          </button>
          <button
            onClick={() => {
              if (onSelectTab) onSelectTab('test-series');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`clean-nav-link ${activeTab === 'test-series' ? 'active' : ''}`}
          >
            Test Series (196 Tests)
          </button>
          <button
            onClick={() => {
              if (onSelectTab) onSelectTab('about-exam');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`clean-nav-link ${activeTab === 'about-exam' ? 'active' : ''}`}
          >
            About NEET Exam
          </button>
          {isAdmin && (
            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('what-extra');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`clean-nav-link ${activeTab === 'what-extra' ? 'active' : ''}`}
            >
              What Extra
            </button>
          )}
        </div>
      </div>
    </header>
  );
};



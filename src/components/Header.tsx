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
  isAdmin = false
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
    <header className="sticky top-0 z-30 bg-white border-b-2 border-[#1c1917] text-[#1c1917]">
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            onClick={() => onNavigateHome && onNavigateHome()}
            className={`flex items-center ${onNavigateHome ? 'cursor-pointer hover:opacity-90 transition' : ''}`}
            title="NeetCbt Exam Platform"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#1c1917]">
              NeetCbt Exam Test
            </span>
          </div>

          {/* Target Year Selector Bar: 2027, 2028, 2029 */}
          <div className="flex items-center space-x-2">
            {(['2027', '2028', '2029'] as const).map(yr => (
              <button
                key={yr}
                onClick={() => onSelectTargetYear && onSelectTargetYear(yr)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold border-2 border-[#1c1917] transition cursor-pointer ${
                  targetYear === yr
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'bg-white text-[#1c1917] hover:bg-[#f0f9ff]'
                }`}
                title={`Select NEET Target Year ${yr}`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">

            {/* Institutional Master Admin Portal Button */}
            <button
              id="header-admin-portal-btn"
              type="button"
              onClick={isAdmin && onOpenSuperUser ? onOpenSuperUser : onOpenAdminLogin || onOpenSuperUser}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shadow-2xs ${
                isAdmin
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white shadow-cyan-500/20'
                  : 'bg-sky-900 hover:bg-sky-800 text-cyan-400 border border-stone-700'
              }`}
              title={isAdmin ? 'Institutional Master Admin Session Active (Click to open Admin Vault)' : 'Institution Director & Master Admin Security Portal'}
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">{isAdmin ? 'Admin Vault' : 'Admin Portal'}</span>
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
                  <div className="absolute right-0 mt-1.5 w-84 rounded-2xl bg-sky-50/60 border border-sky-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-100 text-sky-950">
                    <div className="px-4 py-3 border-b border-stone-100 space-y-2 bg-sky-50/70">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider font-mono">
                            Verified NeetCbt Student
                          </span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-bold bg-sky-100 text-sky-800">
                          {userCaste}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        {enrolledStudent?.studentPhoto ? (
                          <img
                            src={enrolledStudent.studentPhoto}
                            alt={userName}
                            className="w-11 h-11 rounded-xl object-cover border-2 border-sky-400 shadow-xs shrink-0"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-600 text-white font-bold text-base flex items-center justify-center shrink-0 uppercase shadow-xs">
                            {userName.charAt(0)}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-sky-950 truncate">{userName}</p>
                          <p className="text-[10px] text-sky-700">Parent: <strong>{parentName}</strong></p>
                          {enrolledStudent?.gender && (
                            <p className="text-[10px] text-sky-600">Gender: <strong>{enrolledStudent.gender}</strong></p>
                          )}
                        </div>
                      </div>

                      {/* Badges for Disability and Defence Special Reservation */}
                      {(enrolledStudent?.disabilityStatus && enrolledStudent.disabilityStatus !== 'No Disability' ||
                        enrolledStudent?.specialReservation && enrolledStudent.specialReservation !== 'None') && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {enrolledStudent.disabilityStatus !== 'No Disability' && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-200 truncate max-w-full">
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

                      <div className="space-y-0.5 font-mono text-[10px] text-sky-600 pt-0.5">
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
                        className="w-full text-left px-4 py-2 text-xs flex items-center justify-between text-sky-800 hover:bg-sky-50 hover:text-sky-700 transition cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4 text-sky-600" />
                          <span className="font-semibold">My Downloaded Files</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-800 font-bold text-[10px] font-mono">
                          {downloadsCount}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenEnrollment) onOpenEnrollment();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-sky-800 hover:bg-sky-50 hover:text-sky-900 transition cursor-pointer"
                      >
                        <GraduationCap className="w-4 h-4 text-sky-600" />
                        <span className="font-semibold">Candidate Enrollment Form</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenSuperUser) onOpenSuperUser();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-sky-800 hover:bg-cyan-50 hover:text-cyan-900 transition cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-cyan-600" />
                        <span className="font-semibold">Super User & Admin Vault</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenQuickTest();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-sky-800 hover:bg-sky-50 transition cursor-pointer"
                      >
                        <Play className="w-4 h-4 text-stone-400" />
                        <span>Launch Sunday Mock (180 Qs)</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenDoubtModal();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-sky-800 hover:bg-sky-50 transition cursor-pointer"
                      >
                        <MessageCircleQuestion className="w-4 h-4 text-stone-400" />
                        <span>Ask 24/7 Academic Doubt</span>
                      </button>
                    </div>

                    <div className="pt-1.5 border-t border-stone-100 px-2">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onSignOut();
                        }}
                        className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold text-sky-600 hover:bg-sky-50 flex items-center space-x-2 transition cursor-pointer"
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
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 active:scale-95  transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 active:scale-95 "
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

    </header>
  );
};



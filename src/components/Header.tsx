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
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);
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

  const neetPackages: any[] = [];

  return (
    <header className="sticky top-0 z-30 bg-sky-50/60/95 backdrop-blur-md border-b border-sky-200/80 text-sky-900 shadow-xs">
      <div className="w-full px-3 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Brand */}
          <div
            onClick={() => onNavigateHome && onNavigateHome()}
            className={`flex items-center space-x-2.5 ${onNavigateHome ? 'cursor-pointer hover:opacity-90 transition' : ''}`}
            title="NeetCbt Exam Platform"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-sky-600 to-rose-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-xs tracking-tight">
              nc
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base tracking-tight text-sky-950">
                  NeetCbt<span className="text-sky-600"> Exam Test</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-900 border border-cyan-200">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-cyan-600" /> Target {targetYear}
                </span>
              </div>
            </div>
          </div>

          {/* Target Year Selector Bar: 2027, 2028, 2029 + Packages Dropdown */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-sky-50/90 p-1 rounded-xl border border-sky-200 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1.5 backdrop-blur-sm bg-opacity-95 ">
              {(['2027', '2028', '2029'] as const).map(yr => (
                <button
                  key={yr}
                  onClick={() => onSelectTargetYear && onSelectTargetYear(yr)}
                  className={`px-2.5 sm:px-3.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    targetYear === yr
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-sky-700 hover:text-sky-950 hover:bg-sky-100'
                  }`}
                  title={`Select NEET Target Year ${yr}`}
                >
                  {yr}
                </button>
              ))}
            </div>

            {/* Packages Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPackagesDropdownOpen(!packagesDropdownOpen)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                  packagesDropdownOpen
                    ? 'bg-gradient-to-r from-sky-600 to-rose-600 text-white border-sky-600 shadow-xs'
                    : 'bg-sky-50/60 hover:bg-sky-50 text-sky-800 border-sky-200 hover:border-sky-300 shadow-2xs'
                }`}
                title="View NEET Preparation Packages"
              >
                <Package className={`w-3.5 h-3.5 ${packagesDropdownOpen ? 'text-white' : 'text-sky-600'}`} />
                <span className="hidden sm:inline">Packages</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${packagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Packages Dropdown Menu */}
              {packagesDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-sky-950/10 backdrop-blur-[1px]"
                    onClick={() => setPackagesDropdownOpen(false)}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-0 mt-2 w-88 sm:w-[410px] bg-sky-50/60 border border-sky-200/90 rounded-2xl shadow-2xl p-3.5 z-50 animate-in fade-in zoom-in-95 duration-150 text-sky-950">
                    <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-extrabold text-sky-950 flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5 text-sky-600" /> NEET Prep Packages
                        </p>
                        <p className="text-[10px] text-sky-600">CBT, Jumbo Question Banks & Hybrid Tests</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPackagesDropdownOpen(false)}
                        className="text-stone-400 hover:text-sky-700 text-xs p-1.5 rounded-lg hover:bg-sky-50 transition cursor-pointer"
                        title="Close"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="p-1 space-y-2 max-h-[min(540px,78vh)] overflow-y-auto mt-1 pr-1 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-stone-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                      {neetPackages.map(pkg => {
                        const IconComp = pkg.icon;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => {
                              setSelectedPackage(pkg);
                              setPackagesDropdownOpen(false);
                            }}
                            className="p-3.5 rounded-xl border border-sky-200/80 hover:border-sky-400 hover:bg-sky-50/50 hover:shadow-xs transition cursor-pointer group bg-sky-50/60"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start space-x-2.5">
                                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-sky-950 group-hover:text-sky-600 transition flex items-center gap-1.5">
                                    {pkg.name}
                                  </h4>
                                  <p className="text-[10px] text-sky-600 line-clamp-1 mt-0.5">
                                    {pkg.tagline}
                                  </p>
                                </div>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border shrink-0 ${pkg.badgeColor}`}>
                                {pkg.badge}
                              </span>
                            </div>
                            <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[11px]">
                              <div className="flex items-baseline space-x-1.5">
                                <span className="font-extrabold text-sky-900 text-xs">{pkg.price}</span>
                                <span className="text-[10px] text-stone-400 line-through">{pkg.originalPrice}</span>
                              </div>
                              <span className="text-[10px] font-bold text-sky-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                                View Details →
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3 border-t border-stone-100 bg-sky-50/90 rounded-xl mt-1 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1.5 ">
                      <button
                        type="button"
                        onClick={() => {
                          setPackagesDropdownOpen(false);
                          if (onOpenEnrollment) onOpenEnrollment();
                        }}
                        className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-sky-600 to-rose-600 hover:from-sky-700 hover:to-rose-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition cursor-pointer"
                      >
                        Instant Enrollment & Access →
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            {/* About Link */}
            {onNavigateAbout && (
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateAbout();
                }}
                className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-sky-50/60 hover:bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200 shadow-2xs transition cursor-pointer"
                title="About NeetCbt Platform (Exclusively for NEET Exam Aspirants)"
              >
                <span>About</span>
              </a>
            )}

            {/* Ask Doubt Button */}
            <button
              id="header-ask-doubt-btn"
              onClick={onOpenDoubtModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sky-50/60 hover:bg-sky-50 text-sky-800 text-xs font-medium border border-sky-200 shadow-2xs transition cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 active:scale-95  transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 active:scale-95 "
              title="Instant 24/7 Subject Doubt Resolution"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5 text-sky-600" />
              <span>Ask Doubt</span>
            </button>

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
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-600 to-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 uppercase shadow-2xs">
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
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-rose-600 text-white font-bold text-base flex items-center justify-center shrink-0 uppercase shadow-xs">
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



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
  onOpenEnrollment
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

  const userName = enrolledStudent?.studentName || currentUser?.name || currentUser?.user_metadata?.name || (userEmail ? userEmail.split('@')[0] : 'Enrolled Student');
  const userPhone = enrolledStudent?.studentPhone ? `+91 ${enrolledStudent.studentPhone}` : currentUser?.phone || currentUser?.user_metadata?.phone || '+91 9876543210';
  const parentName = enrolledStudent?.parentName || currentUser?.parentName || 'Parent / Guardian';
  const userCaste = enrolledStudent?.caste || currentUser?.caste || 'General / Open';

  const neetPackages = [
    {
      id: 'online-cbt',
      name: 'Online CBT All-India Test Series',
      badge: 'Popular',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Monitor,
      price: '₹2,999',
      originalPrice: '₹5,999',
      tagline: 'Official NTA CBT simulator with instant AIR & Maharashtra CAP cutoffs',
      features: [
        'Full 180-Question (720 Marks) Sunday Proctored CBT Exams',
        'Real NTA Test Engine with Question Palette & Timer',
        'Instant All-India Rank (AIR) & Subject-wise Percentiles',
        'Maharashtra State CAP 10,509 Cutoff College Predictor (2026)',
        '2-Device Authorized Concurrency with DOB PIN Encryption'
      ]
    },
    {
      id: 'jumbo-pack',
      name: 'Jumbo Package (CBT + All Study Materials)',
      badge: 'All-in-One Value',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: Crown,
      price: '₹5,499',
      originalPrice: '₹11,999',
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
      name: `Target Dedicated Batch Pack (${targetYear})`,
      badge: `Target ${targetYear}`,
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: Award,
      price: '₹6,999',
      originalPrice: '₹14,999',
      tagline: `Multi-Year Dedicated Academic Foundation for NEET ${targetYear}`,
      features: [
        `Curriculum Schedule Mapped Specifically for Target ${targetYear}`,
        'Chapter-Wise (CWT), Cumulative, Part & Full Syllabus Tests',
        '24/7 AI-Powered Live Doubt Resolution Portal',
        'Detailed Weak-Area Remediation & NCERT Page Mapping',
        'Parent Progress SMS/Email Notification Reports'
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 shadow-xs">
      <div className="w-full px-3 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-xs tracking-tight">
              nc
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base tracking-tight text-slate-900">
                  NeetCbt<span className="text-blue-600"> Exam Test</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-amber-600" /> Target {targetYear}
                </span>
              </div>
            </div>
          </div>

          {/* Target Year Selector Bar: 2027, 2028, 2029 + Packages Dropdown */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200">
              {(['2027', '2028', '2029'] as const).map(yr => (
                <button
                  key={yr}
                  onClick={() => onSelectTargetYear && onSelectTargetYear(yr)}
                  className={`px-2.5 sm:px-3.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    targetYear === yr
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
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
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
                title="View NEET Preparation Packages"
              >
                <Package className={`w-3.5 h-3.5 ${packagesDropdownOpen ? 'text-white' : 'text-blue-600'}`} />
                <span className="hidden sm:inline">Packages</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${packagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Packages Dropdown Menu */}
              {packagesDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
                    onClick={() => setPackagesDropdownOpen(false)}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-0 mt-2 w-88 sm:w-[410px] bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 text-slate-900">
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5 text-blue-600" /> NEET Prep Packages
                        </p>
                        <p className="text-[10px] text-slate-500">CBT, Jumbo Question Banks & Hybrid Tests</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPackagesDropdownOpen(false)}
                        className="text-slate-400 hover:text-slate-600 text-xs p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                        title="Close"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="p-1 space-y-2 max-h-[min(540px,78vh)] overflow-y-auto mt-1 pr-1 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                      {neetPackages.map(pkg => {
                        const IconComp = pkg.icon;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => {
                              setSelectedPackage(pkg);
                              setPackagesDropdownOpen(false);
                            }}
                            className="p-2.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-xs transition cursor-pointer group bg-white"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start space-x-2.5">
                                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition flex items-center gap-1.5">
                                    {pkg.name}
                                  </h4>
                                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                    {pkg.tagline}
                                  </p>
                                </div>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border shrink-0 ${pkg.badgeColor}`}>
                                {pkg.badge}
                              </span>
                            </div>
                            <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                              <div className="flex items-baseline space-x-1.5">
                                <span className="font-extrabold text-blue-900 text-xs">{pkg.price}</span>
                                <span className="text-[10px] text-slate-400 line-through">{pkg.originalPrice}</span>
                              </div>
                              <span className="text-[10px] font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                                View Details →
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-2 border-t border-slate-100 bg-slate-50/90 rounded-xl mt-1 text-center">
                      <button
                        type="button"
                        onClick={() => {
                          setPackagesDropdownOpen(false);
                          if (onOpenEnrollment) onOpenEnrollment();
                        }}
                        className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition cursor-pointer"
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
            {/* Ask Doubt Button */}
            <button
              id="header-ask-doubt-btn"
              onClick={onOpenDoubtModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 shadow-2xs transition cursor-pointer"
              title="Instant 24/7 Subject Doubt Resolution"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5 text-blue-600" />
              <span>Ask Doubt</span>
            </button>

            {/* Auth / User Profile Button & Dropdown */}
            {userEmail || enrolledStudent ? (
              <div className="relative">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(!profileDropdownOpen);
                  }}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 sm:px-2.5 py-1 rounded-xl transition cursor-pointer"
                >
                  {enrolledStudent?.studentPhoto ? (
                    <img
                      src={enrolledStudent.studentPhoto}
                      alt={userName}
                      className="w-7 h-7 rounded-full object-cover border border-blue-400 shrink-0"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 uppercase shadow-2xs">
                      {userName.charAt(0)}
                    </div>
                  )}
                  <div className="text-left hidden sm:block max-w-[110px] truncate">
                    <p className="text-[11px] font-bold text-slate-900 truncate leading-none">{userName}</p>
                    <p className="text-[9px] text-slate-500 font-mono truncate">{userPhone}</p>
                  </div>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-84 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-100 text-slate-900">
                    <div className="px-4 py-3 border-b border-slate-100 space-y-2 bg-slate-50/70">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider font-mono">
                            Verified NeetCbt Student
                          </span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-bold bg-blue-100 text-blue-800">
                          {userCaste}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        {enrolledStudent?.studentPhoto ? (
                          <img
                            src={enrolledStudent.studentPhoto}
                            alt={userName}
                            className="w-11 h-11 rounded-xl object-cover border-2 border-blue-400 shadow-xs shrink-0"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-base flex items-center justify-center shrink-0 uppercase shadow-xs">
                            {userName.charAt(0)}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-900 truncate">{userName}</p>
                          <p className="text-[10px] text-slate-600">Parent: <strong>{parentName}</strong></p>
                          {enrolledStudent?.gender && (
                            <p className="text-[10px] text-slate-500">Gender: <strong>{enrolledStudent.gender}</strong></p>
                          )}
                        </div>
                      </div>

                      {/* Badges for Disability and Defence Special Reservation */}
                      {(enrolledStudent?.disabilityStatus && enrolledStudent.disabilityStatus !== 'No Disability' ||
                        enrolledStudent?.specialReservation && enrolledStudent.specialReservation !== 'None') && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {enrolledStudent.disabilityStatus !== 'No Disability' && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200 truncate max-w-full">
                              ♿ {enrolledStudent.disabilityStatus}
                            </span>
                          )}
                          {enrolledStudent.specialReservation !== 'None' && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200 truncate max-w-full">
                              🎖️ {enrolledStudent.specialReservation}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="space-y-0.5 font-mono text-[10px] text-slate-500 pt-0.5">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-3 h-3 text-slate-400 shrink-0" />
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
                        className="w-full text-left px-4 py-2 text-xs flex items-center justify-between text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold">My Downloaded Files</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] font-mono">
                          {downloadsCount}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenEnrollment) onOpenEnrollment();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-900 transition cursor-pointer"
                      >
                        <GraduationCap className="w-4 h-4 text-indigo-600" />
                        <span className="font-semibold">Candidate Enrollment Form</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenSuperUser) onOpenSuperUser();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span className="font-semibold">Super User & Admin Vault</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenQuickTest();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                      >
                        <Play className="w-4 h-4 text-slate-400" />
                        <span>Launch Sunday Mock (180 Qs)</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenDoubtModal();
                        }}
                        className="w-full text-left px-4 py-2 text-xs flex items-center space-x-2 text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                      >
                        <MessageCircleQuestion className="w-4 h-4 text-slate-400" />
                        <span>Ask 24/7 Academic Doubt</span>
                      </button>
                    </div>

                    <div className="pt-1.5 border-t border-slate-100 px-2">
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
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition cursor-pointer"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Selected Package Details Modal - Mounted directly into body to break out of header stacking context */}
      {selectedPackage && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPackage(null);
          }}
        >
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 text-slate-900 my-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 p-5 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 shadow-inner">
                  {React.createElement(selectedPackage.icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${selectedPackage.badgeColor}`}>
                    {selectedPackage.badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {selectedPackage.name}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white font-bold text-sm transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedPackage.tagline}
              </p>

              {/* Price Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Package Fee</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-black text-blue-900">{selectedPackage.price}</span>
                    <span className="text-xs text-slate-400 line-through">{selectedPackage.originalPrice}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">50% OFF</span>
                  </div>
                </div>
                <div className="text-right text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-700">NEET {targetYear} Valid</span>
                  <p>2-Device Protected</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">What's Included:</h4>
                <div className="space-y-2">
                  {selectedPackage.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enrollment CTA */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    const pkg = selectedPackage;
                    setSelectedPackage(null);
                    if (onOpenEnrollment) onOpenEnrollment(pkg);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Enroll in this Package Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  Instant activation upon candidate profile verification & DOB encryption.
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

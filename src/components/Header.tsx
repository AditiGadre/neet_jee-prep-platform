import React, { useState, useEffect } from 'react';
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
  Bell,
  Upload,
  GraduationCap
} from 'lucide-react';
import { ExamType } from '../types';
import { getCurrentUser, getUserDownloads } from '../utils/downloadTracker';
import { getSuperUserMetrics } from '../utils/superUserNotifier';

interface HeaderProps {
  activeExam: ExamType;
  onSelectExam: (exam: ExamType) => void;
  onOpenQuickTest: () => void;
  onOpenDoubtModal: () => void;
  completedTestsCount: number;
  userEmail: string | null;
  onOpenAuth: () => void;
  onSignOut: () => void;
  onOpenDownloads?: () => void;
  onOpenSuperUser?: () => void;
  onOpenUploadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeExam,
  onSelectExam,
  onOpenQuickTest,
  onOpenDoubtModal,
  completedTestsCount,
  userEmail,
  onOpenAuth,
  onSignOut,
  onOpenDownloads,
  onOpenSuperUser,
  onOpenUploadModal
}) => {
  const [examDropdownOpen, setExamDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [downloadsCount, setDownloadsCount] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<any>(getCurrentUser());

  const enrolledStudent = (() => {
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

  const examOptions: { label: string; value: ExamType; badge?: string }[] = [
    { label: 'NEET (UG) Medical', value: 'NEET', badge: 'Primary' },
    { label: 'JEE Main & Advanced', value: 'JEE_MAIN', badge: 'Engineering' },
    { label: 'CUET UG', value: 'CUET' },
    { label: 'Olympiads & KVPY', value: 'OLYMPIAD' },
    { label: 'Foundation (9th & 10th)', value: 'FOUNDATION' },
    { label: 'Class 11 & 12 Boards', value: 'BOARDS' }
  ];

  const userName = enrolledStudent?.studentName || currentUser?.name || currentUser?.user_metadata?.name || (userEmail ? userEmail.split('@')[0] : 'Enrolled Student');
  const userPhone = enrolledStudent?.studentPhone ? `+91 ${enrolledStudent.studentPhone}` : currentUser?.phone || currentUser?.user_metadata?.phone || '+91 9876543210';
  const parentName = enrolledStudent?.parentName || currentUser?.parentName || 'Parent / Guardian';
  const userCaste = enrolledStudent?.caste || currentUser?.caste || 'General / Open';

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
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-amber-600" /> Target Batch 2026
                </span>
              </div>
            </div>
          </div>

          {/* Target Exam Dropdown */}
          <div className="relative">
            <button
              id="exam-selector-btn"
              onClick={() => {
                setExamDropdownOpen(!examDropdownOpen);
                setProfileDropdownOpen(false);
              }}
              className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition cursor-pointer"
            >
              <span className="hidden sm:inline text-[10px] uppercase font-bold text-slate-400">Target:</span>
              <span className="text-blue-700 font-bold text-xs sm:text-xs">
                {examOptions.find(o => o.value === activeExam)?.label || activeExam}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {examDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-64 rounded-xl bg-white border border-slate-200 shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Select Exam Goal
                </div>
                {examOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSelectExam(option.value);
                      setExamDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition cursor-pointer ${
                      activeExam === option.value
                        ? 'text-blue-700 font-semibold bg-blue-50/70'
                        : 'text-slate-700'
                    }`}
                  >
                    <span>{option.label}</span>
                    {option.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-semibold uppercase">
                        {option.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats & Action Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            {/* My Downloads Tracker Vault Button */}
            <button
              onClick={onOpenDownloads}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition shadow-2xs cursor-pointer"
              title="View Tracked Download Vault"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Downloads</span>
              <span className="px-1.5 py-0.2 rounded-full bg-blue-600 text-white text-[10px] font-mono">
                {downloadsCount}
              </span>
            </button>

            {/* Ask Doubt Button */}
            <button
              id="header-ask-doubt-btn"
              onClick={onOpenDoubtModal}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 shadow-2xs transition cursor-pointer"
              title="Instant 24/7 Subject Doubt Resolution"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5 text-blue-600" />
              <span>Ask Doubt</span>
            </button>

            {/* Launch Mock Test */}
            <button
              id="header-start-mock-btn"
              onClick={onOpenQuickTest}
              className="hidden md:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Sunday Mock (180 Qs)</span>
            </button>

            {/* Auth / User Profile Button & Dropdown */}
            {userEmail || enrolledStudent ? (
              <div className="relative">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(!profileDropdownOpen);
                    setExamDropdownOpen(false);
                  }}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 sm:px-2.5 py-1 rounded-xl transition cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 uppercase shadow-2xs">
                    {userName.charAt(0)}
                  </div>
                  <div className="text-left hidden sm:block max-w-[110px] truncate">
                    <p className="text-[11px] font-bold text-slate-900 truncate leading-none">{userName}</p>
                    <p className="text-[9px] text-slate-500 font-mono truncate">{userPhone}</p>
                  </div>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-100 text-slate-900">
                    <div className="px-4 py-3 border-b border-slate-100 space-y-1 bg-slate-50/70">
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
                      <p className="text-xs font-bold text-slate-900 truncate">{userName}</p>
                      <p className="text-[10px] text-slate-600">Parent: <strong>{parentName}</strong></p>
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
    </header>
  );
};

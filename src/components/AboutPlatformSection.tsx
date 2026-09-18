import React from 'react';
import {
  Sparkles,
  Stethoscope,
  Target,
  ShieldCheck,
  Award,
  BookOpen,
  CheckCircle2,
  Users,
  Building2,
  Calendar,
  ArrowRight,
  Zap,
  GraduationCap
} from 'lucide-react';

interface AboutPlatformSectionProps {
  onNavigateToTestSeries?: () => void;
  onOpenEnrollment?: () => void;
}

export const AboutPlatformSection: React.FC<AboutPlatformSectionProps> = ({
  onNavigateToTestSeries,
  onOpenEnrollment
}) => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10 animate-in fade-in duration-200">
      {/* 1. Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 sm:p-8 text-white shadow-lg border border-blue-800/40">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
            <span>100% Dedicated Platform</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Exclusively Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">NEET-UG Exam Aspirants</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong>NeetCbt Exam Test</strong> is India's dedicated computer-based testing platform built solely for medical aspirants aiming for <strong>MBBS, BDS, and premier Government Medical Colleges (GMC)</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {onNavigateToTestSeries && (
              <button
                type="button"
                onClick={onNavigateToTestSeries}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center space-x-2 shadow-md cursor-pointer active:scale-95"
              >
                <span>Explore Sunday Mock Series</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <div className="flex items-center space-x-2 text-xs text-cyan-300 font-medium px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Engineering / Non-Medical Distractions</span>
            </div>
          </div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Core Identity & Manifesto */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center space-x-2.5 text-blue-700">
          <Target className="w-5 h-5 text-blue-600" />
          <h2 className="text-base sm:text-lg font-bold text-gray-900">
            Why We Are 100% NEET-Exclusive
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          Unlike generic testing portals that bundle JEE, UPSC, and board exams together, <strong>NeetCbt Exam Test</strong> focuses 100% of its resources, question bank curations, and analytics algorithms strictly on the <strong>NEET-UG medical examination pattern</strong> set by the National Medical Commission (NMC) and NTA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start space-x-3">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-gray-900">Strict PCB Blueprint</div>
              <div className="text-[11px] text-gray-600 mt-0.5">
                Exact 180 questions (45 Physics, 45 Chemistry, 90 Biology: 45 Botany + 45 Zoology).
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start space-x-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-gray-900">100% NCERT Authenticated</div>
              <div className="text-[11px] text-gray-600 mt-0.5">
                Every question is mapped line-by-line to Class 11 & 12 NCERT textbooks without out-of-syllabus bloat.
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 flex items-start space-x-3">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-gray-900">Medical Rank Predictor</div>
              <div className="text-[11px] text-gray-600 mt-0.5">
                Evaluated against 25,153+ verified Government Medical College cutoff ranks (MCC AIQ & State Quota).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Core Pillars */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider px-1">
          4 Architectural Pillars of the Platform
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              <Calendar className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              1. 33 Sunday Nationwide Mock Cycle
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Structured 33-week testing schedule from Unit-wise Cumulative Tests to full-syllabus mocks. Accurately simulates the Sunday 2:00 PM – 5:20 PM CBT test environment with strict NTA negative marking (+4 / -1).
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              2. Chapter-Isolated Vault & Custom Generator
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Complete coverage across all 96 NEET syllabus chapters (38 Biology, 30 Chemistry, 28 Physics). Generate tailored custom tests and Daily Practice Problems (DPP) with 100% topic isolation.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              3. AIR Benchmark & College Allotment Forecaster
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              After every mock test, your score is benchmarked against All India Ranks (AIR) with probabilistic admission chances for top institutions like AIIMS New Delhi, KEM Mumbai, BJMC Pune, and Madras Medical College.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
              <Building2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">
              4. Offline Test Center & 2-Device Security
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Simulates authentic test-center terminal behavior with DOB PIN encryption, automatic autosave, 2-device authorized concurrency, and downloadable test papers with complete step-by-step solutions.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Who This Platform Is For */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
        <div className="flex items-center space-x-2 text-slate-900">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            Who Is This Platform Built For?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-blue-700">Class 11 Medical Students</div>
            <p className="text-[11px] text-gray-600 mt-1">
              Building foundational conceptual mastery through chapter tests, biological classification, and mechanics drills.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-indigo-700">Class 12 Medical Students</div>
            <p className="text-[11px] text-gray-600 mt-1">
              Balancing board preparations with weekly high-yield NEET mock tests and genetics, organic chemistry, and optics mastery.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-emerald-700">Repeaters / Droppers</div>
            <p className="text-[11px] text-gray-600 mt-1">
              Targeting 680+ GMC cutoff scores through intensive 33 Sunday test cycles, error analysis, and time-management practice.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Quick Stats Footer Strip */}
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0">
            NEET
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">NeetCbt Exam Test Platform</div>
            <div className="text-[11px] text-gray-500">Dedicated exclusively to medical aspirants since Day 1.</div>
          </div>
        </div>

        {onNavigateToTestSeries && (
          <button
            type="button"
            onClick={onNavigateToTestSeries}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer active:scale-95 shrink-0"
          >
            <span>Start Practice Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

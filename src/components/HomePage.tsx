import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  Calendar,
  Lock,
  Unlock,
  ShieldCheck,
  Award,
  ArrowRight,
  Clock,
  BookOpen,
  LineChart,
  Layers,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ExternalLink,
  Crown,
  FileCheck2,
  GraduationCap
} from 'lucide-react';
import {
  NEET_PREP_PACKAGES,
  PrepPackageItem,
  getPackagesByBatch
} from '../data/packagesData';
import {
  SUNDAY_DROPPER_TRACK1_TESTS,
  PLANNER_12TH_COMPLETE_TESTS,
  SUNDAY_11TH_TRACK1_TESTS,
  SundayPlannerTest
} from '../data/sundayPlannerTests';

interface HomePageProps {
  onSelectPackage: (pkg: PrepPackageItem) => void;
  onNavigateToTestSeries: (batch?: 'repeater' | '12th' | '11th') => void;
  onNavigateToAboutExam?: () => void;
  enrolledPackageIds?: string[];
  isAdmin?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectPackage,
  onNavigateToTestSeries,
  onNavigateToAboutExam,
  enrolledPackageIds = [],
  isAdmin = false
}) => {
  const [activeBatch, setActiveBatch] = useState<'repeater' | '12th' | '11th'>('repeater');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const currentPackages = getPackagesByBatch(activeBatch);
  const singleTrackPackages = currentPackages.filter(p => p.trackType === 'single');
  const comboPackages = currentPackages.filter(p => p.trackType === 'combo');

  // Preview tests for the selected batch from authentic platform calendar
  const previewTests: SundayPlannerTest[] = (
    activeBatch === 'repeater'
      ? SUNDAY_DROPPER_TRACK1_TESTS
      : activeBatch === '12th'
      ? PLANNER_12TH_COMPLETE_TESTS
      : SUNDAY_11TH_TRACK1_TESTS
  ).slice(0, 3);

  const faqs = [
    {
      q: 'How does package-based Sunday test unlocking work?',
      a: 'When you enroll in a package (for example, Repeater Track 1 for ₹4,999 or the Complete Mega Combo for ₹9,497), all Sunday tests belonging to that track are instantly unlocked for your candidate roll number. You can take them in authentic CBT mode, receive instant All-India Ranks (AIR), and review detailed step-by-step NCERT-referenced explanations.'
    },
    {
      q: 'Can I purchase single tracks or complete combos?',
      a: 'Yes! You can purchase individual tracks (such as Track 1 Chapterwise, Track 2 Fast-Track, or Track 3 Physics & Chemistry) or save with high-value combos like the Complete All-Track Combo (Track 1 + 2 + 3) which gives unrestricted access to all 115 Repeater tests.'
    },
    {
      q: 'Is the test interface identical to the official NTA NEET exam?',
      a: 'Yes, our platform features the exact NTA computer-based testing interface, including the timed countdown clock, question palette with answered/unanswered/marked-for-review statuses, Section A/B separation, and instant submission analysis.'
    },
    {
      q: 'Can I access the test series on both mobile and laptop?',
      a: 'Yes, our platform supports dual-device protected access. Your enrollment is cryptographically bound to your registered phone number and roll number, allowing seamless transition between your laptop and mobile device without data loss.'
    },
    {
      q: 'Are full solutions and All-India Ranks predicted immediately?',
      a: 'Immediately upon submitting your CBT test, you receive your detailed scorecard with raw marks, negative marking deductions, accuracy rate, subject percentiles, step-by-step explanations, and projected All-India Rank (AIR).'
    },
    {
      q: 'What payment methods are supported, and is it secure?',
      a: 'We process payments securely through Razorpay with 256-bit bank-grade encryption. All major UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit cards, Net Banking, and EMI options are fully supported with instant test unlocking.'
    }
  ];

  const scrollToPackages = () => {
    const el = document.getElementById('packages-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-[#0f172a] selection:bg-[#eaf3ff] selection:text-[#0056b3] font-sans">
      {/* 1. TOP ADMISSIONS TICKER BANNER */}
      <div className="bg-[#007bff] text-white px-4 py-2.5 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#fde047] animate-pulse"></span>
        <span>NEET 2027 Admissions Open &bull; Official NTA Standard Computer-Based Test Simulator</span>
        <button
          onClick={scrollToPackages}
          className="ml-2 underline font-extrabold hover:text-amber-200 cursor-pointer transition"
        >
          View Packages &rarr;
        </button>
      </div>

      {/* 2. HERO SECTION WITH CORE PAGE LINKS */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf3ff] border border-blue-200 text-[#0056b3] text-xs font-extrabold">
            <Sparkles className="w-4 h-4 text-[#007bff]" />
            <span>NTA NEET (UG) Computer-Based Testing Simulation Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
            MCQ Practice and CBT Testing Platform for{' '}
            <span className="text-[#007bff] bg-blue-50 px-2 py-0.5 rounded-xl border border-blue-100 inline-block">
              Serious NEET Aspirants
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
            Practice 196 authentic 720-mark Sunday CBT mocks, master 96 NCERT chapters, analyze 25,153+ Government Medical College cutoffs, and track your All-India Rank (AIR) in real-time.
          </p>

          {/* Core Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={scrollToPackages}
              className="btn-primary"
            >
              <span>Explore Course Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToTestSeries(activeBatch)}
              className="btn-secondary"
            >
              <Calendar className="w-4 h-4 text-[#007bff]" />
              <span>Launch Sunday Test Series</span>
            </button>
            {onNavigateToAboutExam && (
              <button
                onClick={onNavigateToAboutExam}
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f172a] font-bold text-sm transition cursor-pointer flex items-center gap-2 border border-slate-300"
              >
                <BookOpen className="w-4 h-4 text-slate-700" />
                <span>About NEET Exam &amp; Cutoffs</span>
              </button>
            )}
          </div>

          {/* 3 Prominent Gateway Cards under Hero linking to pages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
            {/* Gateway 1: Course Packages */}
            <div
              onClick={scrollToPackages}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#007bff] transition">
                  1. Course Packages &amp; Batches
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Targeted single-track and multi-track combos for Droppers, Class 12th, and Class 11th with instant Sunday test unlocks.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#007bff]">
                <span>Choose Your Package</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Gateway 2: Sunday Test Series */}
            <div
              onClick={() => onNavigateToTestSeries(activeBatch)}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#007bff] transition">
                  2. Sunday Test Series (196 Tests)
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Chapterwise, Partwise &amp; Full Syllabus CBT mocks with official NTA timer, Section A/B separation, and instant AIR prediction.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>Open Test Series Simulator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Gateway 3: About Exam & Cutoffs */}
            <div
              onClick={() => onNavigateToAboutExam ? onNavigateToAboutExam() : onNavigateToTestSeries()}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <LineChart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#007bff] transition">
                  3. About NEET Exam &amp; Cutoffs
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  25,153+ Verified Government Medical College seat cutoff analytics, Marks vs Rank benchmarks, and state quota admission matrices.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-purple-600">
                <span>View Exam Guide &amp; Cutoffs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>

          {/* Trust Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="text-2xl font-black text-[#0f172a]">196 Tests</div>
              <div className="text-xs font-semibold text-[#475569] mt-0.5">Chapterwise, Part &amp; Full Mocks</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="text-2xl font-black text-[#0f172a]">720 Marks</div>
              <div className="text-xs font-semibold text-[#475569] mt-0.5">Official NTA 3h 20m CBT Timer</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="text-2xl font-black text-[#0f172a]">Instant AIR</div>
              <div className="text-xs font-semibold text-[#475569] mt-0.5">Rank &amp; College Seat Prediction</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="text-2xl font-black text-[#0f172a]">2-Device</div>
              <div className="text-xs font-semibold text-[#475569] mt-0.5">Protected Laptop + Mobile Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES & PACKAGES SECTION ("OUR OFFERINGS") */}
      <section id="packages-section" className="px-4 sm:px-6 lg:px-12 py-16 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0056b3] font-bold text-xs">
              <span>Targeted Academic Packages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Choose Packages Built for{' '}
              <span className="text-[#007bff]">
                {activeBatch === 'repeater' ? 'NEET Dropper / Repeater' : activeBatch === '12th' ? 'Class 12th Batch' : 'Class 11th Foundation'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Enroll in individual tracks or complete combos to instantly unlock corresponding Sunday CBT test papers.
            </p>

            {/* Batch Pill Switcher */}
            <div className="inline-flex p-1 bg-white rounded-full border border-slate-300 shadow-xs mt-2">
              <button
                onClick={() => setActiveBatch('repeater')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeBatch === 'repeater'
                    ? 'bg-[#007bff] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                Repeater (Dropper)
              </button>
              <button
                onClick={() => setActiveBatch('12th')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeBatch === '12th'
                    ? 'bg-[#007bff] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                Class 12th Batch
              </button>
              <button
                onClick={() => setActiveBatch('11th')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeBatch === '11th'
                    ? 'bg-[#007bff] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                Class 11th Batch
              </button>
            </div>
          </div>

          {/* RECOMMENDED COMBOS */}
          {comboPackages.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                  Recommended Combo Packs (Multi-Track Value)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comboPackages.map((pkg) => {
                  const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                  return (
                    <div
                      key={pkg.id}
                      className={`bg-white rounded-2xl border p-6 sm:p-7 relative flex flex-col justify-between transition-all ${
                        pkg.isPopular
                          ? 'border-[#007bff] shadow-lg ring-2 ring-blue-100'
                          : 'border-slate-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {pkg.badge && (
                        <div className="absolute -top-3 left-6">
                          <span className="px-3 py-0.5 rounded-full bg-amber-400 text-slate-900 text-xs font-black shadow-xs">
                            {pkg.badge}
                          </span>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="pt-1">
                          <span className="text-[11px] font-mono font-bold uppercase text-slate-500">
                            {pkg.testsCount} Tests &bull; Multi-Track Combo
                          </span>
                          <h4 className="text-xl font-bold text-[#0f172a] mt-1 leading-snug">
                            {pkg.name}
                          </h4>
                          <p className="text-xs text-[#475569] mt-1 font-normal leading-relaxed">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Price Badge */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-baseline justify-between">
                          <div>
                            <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                              {pkg.price}
                            </span>
                            <span className="text-xs text-slate-400 line-through ml-2 font-mono">
                              {pkg.originalPrice}
                            </span>
                          </div>
                          {pkg.savings && (
                            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                              {pkg.savings}
                            </span>
                          )}
                        </div>

                        {/* Schedule Line */}
                        <div className="flex items-center gap-1.5 text-xs text-[#475569] font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#007bff] shrink-0" />
                          <span>{pkg.scheduleSummary}</span>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-2 pt-2 border-t border-slate-100">
                          {pkg.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#0f172a]">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => onSelectPackage(pkg)}
                          className={`w-full py-3 rounded-full font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 ${
                            isEnrolled
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-[#007bff] hover:bg-[#0056b3] text-white shadow-sm hover:shadow'
                          }`}
                        >
                          {isEnrolled ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                              <span>✓ Enrolled &bull; Tests Unlocked</span>
                            </>
                          ) : (
                            <>
                              <Unlock className="w-4 h-4 text-white" />
                              <span>Enroll &amp; Unlock Tests ({pkg.price})</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* INDIVIDUAL TRACKS */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                Individual Track Packages
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {singleTrackPackages.map((pkg) => {
                const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                return (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md p-6 sm:p-7 relative flex flex-col justify-between transition-all"
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold uppercase text-slate-500">
                            {pkg.testsCount} Tests &bull; Single Track
                          </span>
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold uppercase">
                            {pkg.shortTitle}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-[#0f172a] mt-1.5 leading-snug">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-[#475569] mt-1 font-normal leading-relaxed">
                          {pkg.tagline}
                        </p>
                      </div>

                      {/* Price Badge */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-baseline justify-between">
                        <div>
                          <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                            {pkg.price}
                          </span>
                          <span className="text-xs text-slate-400 line-through ml-2 font-mono">
                            {pkg.originalPrice}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {pkg.testsCount} Scheduled Tests
                        </span>
                      </div>

                      {/* Schedule Line */}
                      <div className="flex items-center gap-1.5 text-xs text-[#475569] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#007bff] shrink-0" />
                        <span>{pkg.scheduleSummary}</span>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#0f172a]">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className={`w-full py-3 rounded-full font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 ${
                          isEnrolled
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : 'bg-white hover:bg-blue-50 text-[#007bff] border-2 border-[#007bff]'
                        }`}
                      >
                        {isEnrolled ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                            <span>✓ Enrolled &bull; Track Unlocked</span>
                          </>
                        ) : (
                          <>
                            <Unlock className="w-4 h-4 text-[#007bff]" />
                            <span>Enroll Track ({pkg.price})</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHEDULED SUNDAY TESTS PREVIEW SECTION */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Academic Test Series Calendar
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Scheduled Sunday Tests for {activeBatch === 'repeater' ? 'Repeater Batch' : activeBatch === '12th' ? 'Class 12th' : 'Class 11th'}
            </h2>
          </div>
          <button
            onClick={() => onNavigateToTestSeries(activeBatch)}
            className="btn-secondary self-start sm:self-auto"
          >
            <span>View Full Sunday Calendar (196 Tests)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewTests.map((t) => (
            <div
              key={t.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md space-y-3 flex flex-col justify-between transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-100 text-amber-900 font-bold text-xs px-2.5 py-0.5 rounded-full">
                    {t.dateStr}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    {t.code}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0f172a] leading-snug line-clamp-2">
                  {t.title}
                </h4>
                <p className="text-xs text-[#475569] line-clamp-2">
                  {t.objective || t.description}
                </p>

                <div className="pt-2 text-[11px] font-semibold text-slate-700 space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <div className="truncate"><span className="text-blue-700 font-bold">Phy:</span> {t.physicsUnit}</div>
                  <div className="truncate"><span className="text-emerald-700 font-bold">Chem:</span> {t.chemistryUnit}</div>
                  <div className="truncate"><span className="text-emerald-900 font-bold">Bio:</span> {t.botanyBlock}</div>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTestSeries(activeBatch)}
                className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-blue-50 text-[#0f172a] hover:text-[#007bff] font-bold text-xs border border-slate-300 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Open in CBT Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY NEET CBT EXAM PLATFORM */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              The Standard Computer-Based Test System
            </h2>
            <p className="text-sm text-[#475569]">
              Engineered exclusively for NEET-UG aspirants to master exam endurance, numerical calculation speed, and zero-panic test execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">Authentic NTA Interface</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Full-screen countdown timer, question palette with color-coded response states, Section A/B 50-question options, and instant paper auto-save.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">100% NCERT Syllabus</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Strict alignment with NMC syllabus guidelines. Every question is calibrated for high-yield theory, NCERT diagram precision, and assertion-reason logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">Instant AIR &amp; Prediction</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Projected All-India Rank, category percentile, state quota cutoff comparisons, and speed-accuracy matrices delivered the moment you submit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">2-Device Protected</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Registered student credentials sync safely across your laptop and phone, preventing unauthorized sharing while allowing uninterrupted study anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-bold text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#0f172a] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#007bff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="px-4 sm:px-6 lg:px-12 py-10 bg-[#08192e] text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-semibold text-slate-300">
            &copy; 2026&ndash;2027 NeetCbt Exam Test Platform. Built exclusively for NEET-UG Aspirants.
          </div>
          <div className="flex items-center gap-4 font-bold text-slate-300">
            <button
              onClick={() => onNavigateToTestSeries()}
              className="hover:text-white cursor-pointer"
            >
              Sunday Test Series
            </button>
            <span>&bull;</span>
            <button
              onClick={scrollToPackages}
              className="hover:text-white cursor-pointer"
            >
              Course Packages
            </button>
            <span>&bull;</span>
            {onNavigateToAboutExam && (
              <button
                onClick={onNavigateToAboutExam}
                className="hover:text-white cursor-pointer"
              >
                About NEET Exam
              </button>
            )}
            <span>&bull;</span>
            <span className="font-mono text-slate-400">neetcbtexam.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

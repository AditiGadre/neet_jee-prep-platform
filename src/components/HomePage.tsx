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
  Crown
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
  enrolledPackageIds?: string[];
  isAdmin?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectPackage,
  onNavigateToTestSeries,
  enrolledPackageIds = [],
  isAdmin = false
}) => {
  const [activeBatch, setActiveBatch] = useState<'repeater' | '12th' | '11th'>('repeater');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const currentPackages = getPackagesByBatch(activeBatch);
  const singleTrackPackages = currentPackages.filter(p => p.trackType === 'single');
  const comboPackages = currentPackages.filter(p => p.trackType === 'combo');

  // Preview tests for the selected batch
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
      a: 'When you enroll in a package (for example, Repeater Track 1 for ₹4,999 or the Complete Mega Combo for ₹9,497), all Sunday tests belonging to that track are instantly unlocked for your candidate profile. You can take them in authentic CBT mode, receive instant All-India Ranks (AIR), and review detailed step-by-step solutions.'
    },
    {
      q: 'Can I purchase single tracks or combos?',
      a: 'Yes! You can purchase individual tracks (such as Track 1 Chapterwise, Track 2 Fast-Track, or Track 3 Physics & Chemistry) or save with high-value combos like the Complete All-Track Combo (Track 1 + 2 + 3) which gives unrestricted access to all 115 Repeater tests.'
    },
    {
      q: 'Is the test interface identical to the official NTA NEET exam?',
      a: 'Yes, our platform features the exact NTA computer-based testing interface, including the timed countdown clock, question palette with answered/unanswered/marked-for-review statuses, Section A/B separation, and instant submission analysis.'
    },
    {
      q: 'Can I access the test series on both mobile and laptop?',
      a: 'Yes, our platform supports dual-device protected access. Your enrollment is cryptographically bound to your registered phone number and roll number, allowing seamless transition between your laptop and mobile device.'
    },
    {
      q: 'Are full solutions and AIR predicted immediately?',
      a: 'Immediately upon submitting your CBT test, you receive your detailed scorecard with raw marks, negative marking deductions, accuracy rate, subject percentiles, step-by-step NCERT-referenced explanations, and projected All-India Rank (AIR).'
    }
  ];

  return (
    <div className="w-full bg-white text-[#1c1917] selection:bg-[#dbeafe] selection:text-[#1e3a8a]">
      {/* Top Admissions Announcement Banner */}
      <div className="bg-[#dbeafe] border-b-2 border-[#1c1917] px-4 py-2 text-center text-xs sm:text-sm font-extrabold text-[#1e3a8a] flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>NEET 2027 Admissions Open • Official NTA Standard Computer-Based Test Series</span>
        <button
          onClick={() => {
            const el = document.getElementById('packages-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="ml-2 underline font-black hover:text-blue-700 cursor-pointer"
        >
          View Packages &rarr;
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-10 pb-16 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fde68a] border-2 border-[#1c1917] text-xs font-black shadow-[2px_2px_0px_#1c1917]">
            <Sparkles className="w-4 h-4 text-[#1c1917]" />
            <span>NTA NEET (UG) Computer-Based Testing Simulation Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1c1917] tracking-tight leading-[1.15]">
            MCQ Practice and CBT Testing Platform for{' '}
            <span className="relative inline-block px-2 text-[#1e3a8a] bg-[#dbeafe] border-2 border-[#1c1917] rounded-xl shadow-[4px_4px_0px_#1c1917]">
              Serious NEET Aspirants
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#56514c] font-medium leading-relaxed max-w-3xl mx-auto">
            Choose structured courses built to help you practice NCERT-aligned questions, take authentic 720-mark Sunday CBT mocks, identify subject weaknesses, and achieve top All-India Ranks.
          </p>

          {/* Quick Target Batch Selector */}
          <div className="pt-2 pb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-bold text-[#56514c] uppercase tracking-wider">Select Batch:</span>
            <div className="inline-flex p-1 bg-stone-100 rounded-xl border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917]">
              <button
                onClick={() => setActiveBatch('repeater')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                  activeBatch === 'repeater'
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'text-[#1c1917] hover:bg-white'
                }`}
              >
                NEET Repeater (Dropper)
              </button>
              <button
                onClick={() => setActiveBatch('12th')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                  activeBatch === '12th'
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'text-[#1c1917] hover:bg-white'
                }`}
              >
                Class 12th Batch
              </button>
              <button
                onClick={() => setActiveBatch('11th')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                  activeBatch === '11th'
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'text-[#1c1917] hover:bg-white'
                }`}
              >
                Class 11th Foundation
              </button>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('packages-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-[#dbeafe] hover:bg-[#bfdbfe] active:bg-[#93c5fd] text-[#1e3a8a] font-black text-base border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] hover:shadow-[2px_2px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition cursor-pointer flex items-center gap-2"
            >
              <span>Explore Course Packages &amp; Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigateToTestSeries(activeBatch)}
              className="px-8 py-4 rounded-xl bg-white hover:bg-stone-50 text-[#1c1917] font-black text-base border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] hover:shadow-[2px_2px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-[#1c1917]" />
              <span>Launch Sunday Test Series</span>
            </button>
          </div>

          {/* Trust Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-white border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] text-left">
              <div className="text-2xl font-black text-[#1c1917]">196 Tests</div>
              <div className="text-xs font-bold text-[#56514c] mt-0.5">Chapterwise, Part &amp; Full Syllabus</div>
            </div>
            <div className="p-4 rounded-xl bg-white border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] text-left">
              <div className="text-2xl font-black text-[#1c1917]">720 Marks</div>
              <div className="text-xs font-bold text-[#56514c] mt-0.5">Official NTA CBT Timer &amp; Marking</div>
            </div>
            <div className="p-4 rounded-xl bg-white border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] text-left">
              <div className="text-2xl font-black text-[#1c1917]">Instant AIR</div>
              <div className="text-xs font-bold text-[#56514c] mt-0.5">Rank &amp; College Probability Prediction</div>
            </div>
            <div className="p-4 rounded-xl bg-white border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] text-left">
              <div className="text-2xl font-black text-[#1c1917]">2-Device</div>
              <div className="text-xs font-bold text-[#56514c] mt-0.5">Protected Laptop + Mobile Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES & PRICING SECTION ("OUR OFFERINGS") */}
      <section id="packages-section" className="px-4 sm:px-6 lg:px-12 py-16 bg-[#f8fafc] border-y-2 border-[#1c1917]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fde68a] text-[#1c1917] font-extrabold text-xs border border-[#1c1917]">
              <span>Targeted Academic Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1c1917] tracking-tight">
              Choose Packages Built for{' '}
              <span className="text-[#1e3a8a] underline decoration-4 decoration-[#dbeafe]">
                {activeBatch === 'repeater' ? 'NEET Dropper / Repeater' : activeBatch === '12th' ? 'Class 12th Batch' : 'Class 11th Batch'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#56514c] font-medium">
              Enroll in individual tracks or complete combos to instantly unlock corresponding Sunday CBT test papers.
            </p>

            {/* Batch Pill Switcher */}
            <div className="inline-flex p-1.5 bg-white rounded-xl border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] mt-2">
              <button
                onClick={() => setActiveBatch('repeater')}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                  activeBatch === 'repeater'
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'text-[#1c1917] hover:bg-stone-50'
                }`}
              >
                Repeater (Dropper)
              </button>
              <button
                onClick={() => setActiveBatch('12th')}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                  activeBatch === '12th'
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'text-[#1c1917] hover:bg-stone-50'
                }`}
              >
                Class 12th Batch
              </button>
              <button
                onClick={() => setActiveBatch('11th')}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                  activeBatch === '11th'
                    ? 'bg-[#dbeafe] text-[#1e3a8a] shadow-[2px_2px_0px_#1c1917]'
                    : 'text-[#1c1917] hover:bg-stone-50'
                }`}
              >
                Class 11th Batch
              </button>
            </div>
          </div>

          {/* COMBOS HIGHLIGHT ROW */}
          {comboPackages.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg sm:text-xl font-extrabold text-[#1c1917]">
                  Recommended Combo Packs (Multi-Track Value)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comboPackages.map((pkg) => {
                  const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                  return (
                    <div
                      key={pkg.id}
                      className={`bg-white rounded-2xl border-2 border-[#1c1917] p-6 sm:p-7 relative flex flex-col justify-between transition-all ${
                        pkg.isPopular
                          ? 'shadow-[6px_6px_0px_#1c1917] ring-2 ring-[#dbeafe]'
                          : 'shadow-[4px_4px_0px_#1c1917]'
                      }`}
                    >
                      {pkg.badge && (
                        <div className="absolute -top-3.5 left-6">
                          <span className="px-3 py-1 rounded-md bg-[#fde68a] border-2 border-[#1c1917] text-[#1c1917] text-xs font-black shadow-[2px_2px_0px_#1c1917]">
                            {pkg.badge}
                          </span>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="pt-2">
                          <span className="text-[11px] font-mono font-bold uppercase text-[#56514c]">
                            {pkg.testsCount} Tests • Multi-Track Combo
                          </span>
                          <h4 className="text-xl font-black text-[#1c1917] mt-1 leading-snug">
                            {pkg.name}
                          </h4>
                          <p className="text-xs text-[#56514c] mt-1 font-medium leading-relaxed">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Price Badge */}
                        <div className="p-3.5 rounded-xl bg-stone-50 border-2 border-[#1c1917] flex items-baseline justify-between">
                          <div>
                            <span className="text-2xl sm:text-3xl font-black text-[#1c1917]">
                              {pkg.price}
                            </span>
                            <span className="text-xs text-[#56514c] line-through ml-2 font-mono">
                              {pkg.originalPrice}
                            </span>
                          </div>
                          {pkg.savings && (
                            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                              {pkg.savings}
                            </span>
                          )}
                        </div>

                        {/* Schedule Line */}
                        <div className="flex items-center gap-1.5 text-xs text-[#56514c] font-semibold">
                          <Clock className="w-3.5 h-3.5 text-[#1c1917] shrink-0" />
                          <span>{pkg.scheduleSummary}</span>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-2 pt-1 border-t border-stone-200">
                          {pkg.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#1c1917]">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="font-medium">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => onSelectPackage(pkg)}
                          className={`w-full py-3.5 rounded-xl font-black text-sm border-2 border-[#1c1917] transition cursor-pointer flex items-center justify-center gap-2 ${
                            isEnrolled
                              ? 'bg-emerald-100 text-emerald-900 shadow-[2px_2px_0px_#1c1917]'
                              : 'bg-[#dbeafe] hover:bg-[#bfdbfe] active:bg-[#93c5fd] text-[#1e3a8a] shadow-[3px_3px_0px_#1c1917] hover:shadow-[1px_1px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px]'
                          }`}
                        >
                          {isEnrolled ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                              <span>✓ Enrolled • Tests Unlocked</span>
                            </>
                          ) : (
                            <>
                              <Unlock className="w-4 h-4 text-[#1e3a8a]" />
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

          {/* INDIVIDUAL TRACKS ROW */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-700" />
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1c1917]">
                Individual Track Packages
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {singleTrackPackages.map((pkg) => {
                const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                return (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] p-6 sm:p-7 relative flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold uppercase text-[#56514c]">
                            {pkg.testsCount} Tests • Single Track
                          </span>
                          <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300 text-[10px] font-black uppercase">
                            {pkg.shortTitle}
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-[#1c1917] mt-1.5 leading-snug">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-[#56514c] mt-1 font-medium leading-relaxed">
                          {pkg.tagline}
                        </p>
                      </div>

                      {/* Price Badge */}
                      <div className="p-3.5 rounded-xl bg-stone-50 border-2 border-[#1c1917] flex items-baseline justify-between">
                        <div>
                          <span className="text-2xl sm:text-3xl font-black text-[#1c1917]">
                            {pkg.price}
                          </span>
                          <span className="text-xs text-[#56514c] line-through ml-2 font-mono">
                            {pkg.originalPrice}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded border border-sky-300">
                          {pkg.testsCount} Scheduled Tests
                        </span>
                      </div>

                      {/* Schedule Line */}
                      <div className="flex items-center gap-1.5 text-xs text-[#56514c] font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#1c1917] shrink-0" />
                        <span>{pkg.scheduleSummary}</span>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2 pt-1 border-t border-stone-200">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#1c1917]">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className={`w-full py-3.5 rounded-xl font-black text-sm border-2 border-[#1c1917] transition cursor-pointer flex items-center justify-center gap-2 ${
                          isEnrolled
                            ? 'bg-emerald-100 text-emerald-900 shadow-[2px_2px_0px_#1c1917]'
                            : 'bg-[#dbeafe] hover:bg-[#bfdbfe] active:bg-[#93c5fd] text-[#1e3a8a] shadow-[3px_3px_0px_#1c1917] hover:shadow-[1px_1px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px]'
                        }`}
                      >
                        {isEnrolled ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                            <span>✓ Enrolled • Track Unlocked</span>
                          </>
                        ) : (
                          <>
                            <Unlock className="w-4 h-4 text-[#1e3a8a]" />
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

      {/* SCHEDULE PREVIEW SECTION */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#1c1917] pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#56514c]">
              Academic Test Series
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1c1917] tracking-tight">
              Scheduled Sunday Tests for {activeBatch === 'repeater' ? 'Repeater Batch' : activeBatch === '12th' ? 'Class 12th' : 'Class 11th'}
            </h2>
          </div>
          <button
            onClick={() => onNavigateToTestSeries(activeBatch)}
            className="px-6 py-2.5 rounded-xl bg-[#dbeafe] hover:bg-[#bfdbfe] text-[#1e3a8a] font-black text-sm border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] transition cursor-pointer flex items-center gap-2 self-start sm:self-auto"
          >
            <span>View Full Sunday Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewTests.map((t) => (
            <div
              key={t.id}
              className="p-5 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-[#fde68a] text-[#1c1917] font-bold text-xs px-2.5 py-0.5 rounded-md border border-[#1c1917]">
                    {t.dateStr}
                  </span>
                  <span className="font-mono text-xs font-extrabold text-[#1c1917]">
                    {t.code}
                  </span>
                </div>
                <h4 className="text-base font-black text-[#1c1917] leading-snug line-clamp-2">
                  {t.title}
                </h4>
                <p className="text-xs text-[#56514c] line-clamp-2">
                  {t.objective || t.description}
                </p>

                <div className="pt-2 text-[11px] font-bold text-stone-700 space-y-1 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                  <div className="truncate"><span className="text-sky-700">Phy:</span> {t.physicsUnit}</div>
                  <div className="truncate"><span className="text-emerald-700">Chem:</span> {t.chemistryUnit}</div>
                  <div className="truncate"><span className="text-emerald-800">Bio:</span> {t.botanyBlock}</div>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTestSeries(activeBatch)}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-stone-50 text-[#1c1917] font-black text-xs border-2 border-[#1c1917] shadow-[2px_2px_0px_#1c1917] transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Open in CBT Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY NEET CBT EXAM PLATFORM */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white border-t-2 border-[#1c1917]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-[#1c1917] tracking-tight">
              The Standard Computer-Based Test System
            </h2>
            <p className="text-sm text-[#56514c] font-medium">
              Engineered exclusively for NEET-UG aspirants to master exam endurance, numerical calculation speed, and zero-panic test execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#dbeafe] border-2 border-[#1c1917] flex items-center justify-center text-[#1e3a8a]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#1c1917]">Authentic NTA Interface</h3>
              <p className="text-xs text-[#56514c] leading-relaxed">
                Full-screen countdown timer, question palette with color-coded response states, Section A/B 50-question options, and instant paper auto-save.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fde68a] border-2 border-[#1c1917] flex items-center justify-center text-[#1c1917]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#1c1917]">100% NCERT Syllabus</h3>
              <p className="text-xs text-[#56514c] leading-relaxed">
                Strict alignment with NMC syllabus guidelines. Every question is calibrated for high-yield theory, NCERT diagram precision, and assertion-reason logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border-2 border-[#1c1917] flex items-center justify-center text-emerald-900">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#1c1917]">Instant AIR &amp; Prediction</h3>
              <p className="text-xs text-[#56514c] leading-relaxed">
                Projected All-India Rank, category percentile, state quota cutoff comparisons, and speed-accuracy matrices delivered the moment you submit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_#1c1917] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border-2 border-[#1c1917] flex items-center justify-center text-purple-900">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#1c1917]">2-Device Protected</h3>
              <p className="text-xs text-[#56514c] leading-relaxed">
                Registered student credentials sync safely across your laptop and phone, preventing unauthorized sharing while allowing uninterrupted study anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-[#f8fafc] border-t-2 border-[#1c1917]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-200 text-[#1c1917] font-bold text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1c1917] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-2 border-[#1c1917] shadow-[3px_3px_0px_#1c1917] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-black text-sm sm:text-base text-[#1c1917] flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1c1917] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1c1917] shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#56514c] font-medium leading-relaxed border-t border-stone-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 sm:px-6 lg:px-12 py-8 bg-white border-t-2 border-[#1c1917] text-xs text-[#56514c]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-extrabold text-[#1c1917]">
            &copy; 2026–2027 NeetCbt Exam Test Platform. Built exclusively for NEET-UG Aspirants.
          </div>
          <div className="flex items-center gap-4 font-bold">
            <button
              onClick={() => onNavigateToTestSeries()}
              className="hover:underline text-[#1c1917] cursor-pointer"
            >
              Sunday Test Series
            </button>
            <span>&bull;</span>
            <button
              onClick={() => {
                const el = document.getElementById('packages-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:underline text-[#1c1917] cursor-pointer"
            >
              Course Packages
            </button>
            <span>&bull;</span>
            <span className="font-mono text-[#1c1917]">neetcbtexam.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

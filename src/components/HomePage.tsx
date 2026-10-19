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
  Star,
  UserCheck,
  Activity,
  Brain,
  Target,
  MessageSquare
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

  // Form State
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    plan: 'improvement',
    targetYear: '2027',
    state: 'Maharashtra',
    category: 'fresher'
  });
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
      a: 'When you enroll in a package (for example, Practice Pack, Improvement Pack, or Rank Booster Pack), all Sunday tests belonging to that track are instantly unlocked for your candidate roll number. You can take them in authentic CBT mode, receive instant All-India Ranks (AIR), and review detailed step-by-step NCERT-referenced explanations.'
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
      q: 'Can I purchase single tracks or combos?',
      a: 'Yes! You can purchase individual tracks (such as Track 1 Chapterwise, Track 2 Fast-Track, or Track 3 Physics & Chemistry) or save with high-value combos like the Complete All-Track Combo which gives unrestricted access to all 115 tests.'
    },
    {
      q: 'Are full solutions and All-India Ranks predicted immediately?',
      a: 'Immediately upon submitting your CBT test, you receive your detailed scorecard with raw marks, negative marking deductions, accuracy rate, subject percentiles, step-by-step NCERT-referenced explanations, and projected All-India Rank (AIR).'
    },
    {
      q: 'What payment methods are supported, and is it secure?',
      a: 'We process payments securely through Razorpay with 256-bit bank-grade encryption. All major UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit cards, Net Banking, and EMI options are fully supported with instant test unlocking.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);

    const cleanPhone = formState.phone.replace(/[^0-9]/g, '');

    if (formState.fullName.trim().length < 2) {
      setFormMessage({ type: 'error', text: 'Please enter your full student name.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      setFormMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      setFormMessage({ type: 'error', text: 'Please enter a valid 10-digit Indian mobile number.' });
      return;
    }

    setFormMessage({
      type: 'success',
      text: `✓ Registration recorded for ${formState.fullName}! Redirecting to package checkout...`
    });

    // Match selected plan and trigger package modal
    setTimeout(() => {
      let targetPkg = currentPackages.find(p => p.isPopular) || currentPackages[0];
      if (formState.plan === 'booster') {
        targetPkg = comboPackages.find(p => p.testsCount >= 100) || comboPackages[0] || targetPkg;
      } else if (formState.plan === 'practice') {
        targetPkg = singleTrackPackages[0] || targetPkg;
      } else if (formState.plan === 'free') {
        onNavigateToTestSeries(activeBatch);
        return;
      }
      onSelectPackage(targetPkg);
    }, 1000);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEnroll = () => {
    const el = document.getElementById('enroll');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-[#0f172a] selection:bg-[#eaf3ff] selection:text-[#0056b3] font-sans">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="bg-[#007bff] text-white px-4 py-2.5 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#fde047] animate-pulse"></span>
        <span>NEET 2027 Admissions Open &bull; Authentic 720-Mark NTA Computer-Based Test Simulator</span>
        <button
          onClick={scrollToPricing}
          className="ml-2 underline font-extrabold hover:text-amber-200 cursor-pointer transition"
        >
          View Plans &rarr;
        </button>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf3ff] border border-blue-200 text-[#0056b3] text-xs font-extrabold">
              <Sparkles className="w-4 h-4 text-[#007bff]" />
              <span>AI-Powered NEET 2027 Practice &amp; CBT Simulation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
              Crack NEET with{' '}
              <span className="text-[#007bff] bg-blue-50/80 px-2 py-0.5 rounded-lg border border-blue-100 inline-block">
                AI Precision
              </span>{' '}
              &amp; Real CBT Simulation
            </h1>

            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-2xl">
              Master high-yield NCERT concepts, practice authentic 720-mark NTA-pattern Sunday CBT mocks, eliminate negative marking, and predict your All-India Rank with pinpoint accuracy.
            </p>

            {/* Batch Selector Pills */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#475569] uppercase tracking-wider mr-1">Target Batch:</span>
              <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200">
                <button
                  onClick={() => setActiveBatch('repeater')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    activeBatch === 'repeater'
                      ? 'bg-[#007bff] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  Dropper (Repeater)
                </button>
                <button
                  onClick={() => setActiveBatch('12th')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    activeBatch === '12th'
                      ? 'bg-[#007bff] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  Class 12th
                </button>
                <button
                  onClick={() => setActiveBatch('11th')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    activeBatch === '11th'
                      ? 'bg-[#007bff] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  Class 11th
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToPricing}
                className="btn-primary"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateToTestSeries(activeBatch)}
                className="btn-secondary"
              >
                <Calendar className="w-4 h-4 text-[#007bff]" />
                <span>Take a Free Mock Test</span>
              </button>
            </div>

            {/* Avatar Stack Social Proof */}
            <div className="flex items-center gap-3 pt-3">
              <div className="flex items-center -space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold border-2 border-white flex items-center justify-center shadow-xs">AS</div>
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold border-2 border-white flex items-center justify-center shadow-xs">SP</div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border-2 border-white flex items-center justify-center shadow-xs">RV</div>
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 text-[11px] font-bold border-2 border-white flex items-center justify-center shadow-xs">AD</div>
              </div>
              <div className="text-xs text-[#475569] font-medium">
                <strong className="text-[#0f172a] font-bold">Trusted by 1,00,000+</strong> NEET aspirants &bull; <span className="text-amber-500 font-bold">&#9733;&#9733;&#9733;&#9733;&#9733; 4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[460px] mx-auto min-h-[460px]">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-blue-100/60 rounded-3xl filter blur-2xl -z-10"></div>

              {/* Card 1: Projected AIR */}
              <div className="absolute top-2 left-2 w-[240px] bg-white rounded-2xl p-4 border border-slate-200 shadow-lg z-20 animate-float-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">All-India Rank Prediction</div>
                <div className="text-2xl font-black text-[#007bff] mt-0.5 flex items-baseline justify-between">
                  <span>AIR 642</span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">&uarr; Top 0.3%</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">Score: <strong className="text-slate-900">685 / 720</strong></div>
                <div className="flex items-end gap-1 h-5 mt-2">
                  <div className="flex-1 bg-blue-100 rounded-xs h-[40%]"></div>
                  <div className="flex-1 bg-blue-100 rounded-xs h-[55%]"></div>
                  <div className="flex-1 bg-blue-100 rounded-xs h-[70%]"></div>
                  <div className="flex-1 bg-blue-100 rounded-xs h-[65%]"></div>
                  <div className="flex-1 bg-blue-100 rounded-xs h-[85%]"></div>
                  <div className="flex-1 bg-[#007bff] rounded-xs h-[95%]"></div>
                </div>
              </div>

              {/* Card 2: Syllabus Coverage */}
              <div className="absolute top-20 right-0 w-[245px] bg-white rounded-2xl p-4 border border-slate-200 shadow-lg z-10 animate-float-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Syllabus Mastery</div>
                <div className="space-y-2 mt-2">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span>Botany &amp; Zoology</span>
                      <span className="text-emerald-600">94%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span>Chemistry</span>
                      <span className="text-blue-600">88%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                      <div className="bg-[#007bff] h-full rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span>Physics</span>
                      <span className="text-amber-600">82%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: High-Yield Weak Zones Warning */}
              <div className="absolute bottom-16 left-0 w-[240px] bg-white rounded-2xl p-3.5 border-l-4 border-red-500 border-t border-r border-b border-slate-200 shadow-lg z-30 animate-float-3">
                <div className="text-[10px] font-extrabold text-red-600 uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  <span>High-Yield Weak Zones</span>
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1">Ray Optics &bull; Ionic Eq.</div>
                <div className="text-[11px] text-slate-500 mt-0.5">+32 marks potential with 2 cycles</div>
              </div>

              {/* Card 4: Speed Index */}
              <div className="absolute bottom-2 right-2 w-[220px] bg-white rounded-2xl p-3.5 border border-slate-200 shadow-lg z-20 animate-float-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CBT Speed Index</div>
                <div className="text-xl font-black text-slate-900 mt-0.5">92 / 100</div>
                <div className="text-[11px] font-bold text-emerald-600">Avg 54s/Q &bull; Topper 48s</div>
              </div>

              {/* Card 5: Error Diagnostics */}
              <div className="absolute top-[200px] left-10 w-[215px] bg-white rounded-2xl p-3 border border-slate-200 shadow-md z-10 animate-float-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mistake Patterns</div>
                <div className="text-[11px] font-semibold text-slate-700 mt-1 space-y-0.5">
                  <div>Silly Errors: <strong className="text-red-500">12%</strong></div>
                  <div>Concept Gaps: <strong className="text-amber-500">8%</strong></div>
                  <div>Time Strain: <strong className="text-blue-500">4%</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCROLLING ANNOUNCEMENT TICKER (MARQUEE) */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span> NEET 2027 Admissions Open</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 33 Sunday All-India CBT Mocks</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 1,00,000+ Active Aspirants</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Average +135 Marks Improvement</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 100% NCERT Calibrated Question Bank</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Instant AIR &amp; GMC Cutoff Predictor</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 2-Device Protected Cloud Access</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Early Bird 10% Discount Live</div>
          {/* Duplicate track for infinite smooth scroll */}
          <div className="marquee-item"><span className="marquee-dot"></span> NEET 2027 Admissions Open</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 33 Sunday All-India CBT Mocks</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 1,00,000+ Active Aspirants</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Average +135 Marks Improvement</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 100% NCERT Calibrated Question Bank</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Instant AIR &amp; GMC Cutoff Predictor</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 2-Device Protected Cloud Access</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Early Bird 10% Discount Live</div>
        </div>
      </div>

      {/* 4. WHY TRUST US SECTION */}
      <section id="why-us" className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Why Serious NEET Aspirants Trust NeetCbt
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              The only platform built specifically to replicate NTA exam-day conditions and turn your weaknesses into high-scoring strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="trust-card">
              <span className="tag-chip tag-ai">AI POWERED</span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">Adaptive Diagnostic Practice</h3>
              <p className="text-sm text-[#475569] mb-4">
                AI algorithms detect your knowledge gaps chapter-by-chapter, generating targeted drills to eliminate recurring errors.
              </p>
              <ul className="check-list">
                <li><span className="check-icon">&#10003;</span> Tailored questions adapting to your weak zones</li>
                <li><span className="check-icon">&#10003;</span> 100% NCERT page-referenced explanations</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="trust-card">
              <span className="tag-chip tag-exam">EXAM READY</span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">Exact NTA CBT Simulation</h3>
              <p className="text-sm text-[#475569] mb-4">
                Identical 3-hour 20-minute computer-based interface with authentic Section A/B separation, color-coded question palette, and countdown clock.
              </p>
              <ul className="check-list">
                <li><span className="check-icon">&#10003;</span> Full question palette &amp; color-coded response states</li>
                <li><span className="check-icon">&#10003;</span> Real-time countdown &amp; instant auto-save engine</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="trust-card">
              <span className="tag-chip tag-data">DATA DRIVEN</span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">All-India Rank Prediction</h3>
              <p className="text-sm text-[#475569] mb-4">
                Real-time percentile benchmarking against 1,00,000+ test attempts with Govt Medical College (GMC) seat cutoff probability.
              </p>
              <ul className="check-list">
                <li><span className="check-icon">&#10003;</span> Projected AIR &amp; GMC seat allotment chances</li>
                <li><span className="check-icon">&#10003;</span> AI negative marking reduction matrix</li>
              </ul>
            </div>
          </div>

          <div className="trust-banner-strip">
            <span>&#128202; Built on data of <strong>50,000+ students</strong> and <strong>millions of test attempts</strong> across India.</span>
          </div>
        </div>
      </section>

      {/* 5. SUCCESS STORIES / RESULTS */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Real Students. Real Rank Improvements.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              See how aspirants transformed their scores from 480 to 670+ with our Sunday CBT test cycles.
            </p>
          </div>

          {/* 4 Stat Counters */}
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-number">98.4%</div>
              <div className="stat-label">Student Satisfaction</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">+135</div>
              <div className="stat-label">Avg Score Improvement</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">GMC MBBS Selections</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">25M+</div>
              <div className="stat-label">MCQs Practiced</div>
            </div>
          </div>

          {/* 1 Large Featured Story Card */}
          <div className="featured-story-card">
            <div className="story-avatar-col">
              <div className="student-img-large flex items-center justify-center text-3xl font-black text-[#007bff]">
                AS
              </div>
              <div className="air-badge">&#127942; AIR 342</div>
              <h4 className="text-lg font-bold text-[#0f172a] mt-2">Aryan Sharma</h4>
              <div className="text-xs font-bold text-[#007bff]">Rank Booster Pack &bull; AIIMS New Delhi</div>
            </div>

            <div>
              <div className="story-meta-grid">
                <div className="meta-item">
                  <div className="meta-val">512</div>
                  <div className="meta-lbl">Started At</div>
                </div>
                <div className="meta-item">
                  <div className="meta-val text-emerald-600">+168</div>
                  <div className="meta-lbl">Improved By</div>
                </div>
                <div className="meta-item">
                  <div className="meta-val text-[#007bff]">680 / 720</div>
                  <div className="meta-lbl">Final Score</div>
                </div>
                <div className="meta-item">
                  <div className="meta-val text-amber-700">AIR 342</div>
                  <div className="meta-lbl">Rank Achieved</div>
                </div>
              </div>

              <p className="student-quote">
                &ldquo;The Sunday CBT test simulation and mistake pattern analysis completely changed how I managed time in Physics Section B. I went from panicking on calculations to scoring 170/180 in Physics! The real NTA screen layout made the actual exam feel like just another Sunday mock.&rdquo;
              </p>
            </div>
          </div>

          {/* 3-Column Grid of Smaller Student Cards */}
          <div className="students-card-grid">
            <div className="student-mini-card">
              <div className="student-header">
                <div className="avatar-thumb flex items-center justify-center font-bold text-[#007bff]">SP</div>
                <div>
                  <h5 className="font-bold text-sm text-[#0f172a]">Dr. Sneha Patel</h5>
                  <span className="air-badge text-[10px] py-0.5 px-2">AIR 518</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs mt-2">
                <span className="text-slate-500">530 &rarr; <strong className="text-slate-900">675 / 720</strong></span>
                <span className="improvement-chip">+145 Marks</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">&ldquo;Practice Pack gave me weekly Sunday discipline and pinpointed botany diagram errors.&rdquo;</p>
            </div>

            <div className="student-mini-card">
              <div className="student-header">
                <div className="avatar-thumb flex items-center justify-center font-bold text-[#007bff]">RV</div>
                <div>
                  <h5 className="font-bold text-sm text-[#0f172a]">Rohan Verma</h5>
                  <span className="air-badge text-[10px] py-0.5 px-2">AIR 890</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs mt-2">
                <span className="text-slate-500">490 &rarr; <strong className="text-slate-900">658 / 720</strong></span>
                <span className="improvement-chip">+168 Marks</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">&ldquo;Improvement Pack's negative marking analytics cut down my silly errors by 70%.&rdquo;</p>
            </div>

            <div className="student-mini-card">
              <div className="student-header">
                <div className="avatar-thumb flex items-center justify-center font-bold text-[#007bff]">AD</div>
                <div>
                  <h5 className="font-bold text-sm text-[#0f172a]">Ananya Deshmukh</h5>
                  <span className="air-badge text-[10px] py-0.5 px-2">AIR 1,240</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs mt-2">
                <span className="text-slate-500">460 &rarr; <strong className="text-slate-900">642 / 720</strong></span>
                <span className="improvement-chip">+182 Marks</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">&ldquo;The multi-track Sunday testing gave me complete confidence across all 96 NCERT chapters.&rdquo;</p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="cta-banner-strip">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">Your success story could be next!</h3>
              <p className="text-sm opacity-90 mt-1">Join 1,00,000+ serious aspirants targeting top Government Medical Colleges.</p>
            </div>
            <button
              onClick={scrollToPricing}
              className="btn-secondary bg-white text-[#007bff] hover:bg-slate-50 border-white"
            >
              Get Started Today &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 6. ABOUT / TEAM SECTION */}
      <section id="about" className="py-20 bg-[#f8fafc] border-y border-slate-200">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Designed by Experts. Driven by Data. Built for Results.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Crafted by top medical educators, AIIMS doctors, and ex-NTA subject consultants dedicated to your MBBS dream.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">DR</div>
              <div className="team-name">Dr. Rajesh Kumar</div>
              <div className="team-role">Chief Academic Director</div>
              <div className="team-qual">MBBS, AIIMS New Delhi</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">AV</div>
              <div className="team-name">Prof. Arvind Verma</div>
              <div className="team-role">Head of Physics</div>
              <div className="team-qual">Ex-Faculty Kota &bull; 22 yrs exp</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">SR</div>
              <div className="team-name">Dr. Sunita Rao</div>
              <div className="team-role">Head of Botany</div>
              <div className="team-qual">Ph.D. Plant Bio &bull; 18 yrs exp</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">MN</div>
              <div className="team-name">Dr. Meera Nambiar</div>
              <div className="team-role">Head of Zoology</div>
              <div className="team-qual">MBBS, MD Physiology</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">VS</div>
              <div className="team-name">Er. Vikramaditya Singh</div>
              <div className="team-role">Physical Chemistry Lead</div>
              <div className="team-qual">B.Tech IIT Bombay &bull; 16 yrs exp</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">PS</div>
              <div className="team-name">Dr. Pradeep Sharma</div>
              <div className="team-role">Organic Chemistry Lead</div>
              <div className="team-qual">Ph.D. Chem, Author &bull; 19 yrs exp</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">KR</div>
              <div className="team-name">Dr. Kavita Reddy</div>
              <div className="team-role">Mentorship Lead</div>
              <div className="team-qual">MBBS, KMC Manipal</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">AS</div>
              <div className="team-name">Amitav Sen</div>
              <div className="team-role">Lead CBT Architect</div>
              <div className="team-qual">M.Tech IIT Delhi &bull; EdTech</div>
            </div>
          </div>

          {/* Platform Stats Row */}
          <div className="stats-row" style={{ marginBottom: 0 }}>
            <div className="stat-box">
              <div className="stat-number">1,00,000+</div>
              <div className="stat-label">Aspirants Competing</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">75,000+</div>
              <div className="stat-label">Questions Available</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4,50,000+</div>
              <div className="stat-label">Tests Attempted</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3,800+</div>
              <div className="stat-label">NEET Selections</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURES SECTION (6-CARD GRID) */}
      <section id="features" className="py-20 bg-white">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Get Closer to Your NEET Seat
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Every tool in NeetCbt is engineered to eliminate exam anxiety, increase question accuracy, and secure your Govt Medical College berth.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-graphic-box">
                <Target className="w-12 h-12 text-[#007bff]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">Adaptive Practice</h3>
              <p className="text-xs text-[#475569]">
                Personalized question recommendation engine calibrates difficulty to strengthen your weak topics across Botany, Zoology, Physics &amp; Chemistry.
              </p>
              <div className="feature-tags-wrapper">
                <span className="feat-tag">AI Diagnostic</span>
                <span className="feat-tag">NCERT Direct</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-graphic-box">
                <Clock className="w-12 h-12 text-[#007bff]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">Custom Tests</h3>
              <p className="text-xs text-[#475569]">
                Create unlimited custom chapterwise, multi-chapter, and full-length timed tests with customizable question distributions and timers.
              </p>
              <div className="feature-tags-wrapper">
                <span className="feat-tag">Chapter-wise</span>
                <span className="feat-tag">Speed Drills</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-graphic-box">
                <LineChart className="w-12 h-12 text-[#007bff]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">AI Performance Analytics</h3>
              <p className="text-xs text-[#475569]">
                Deep-dive diagnostic reports revealing your speed-accuracy quadrant, mistake categorizations (silly vs concept), and predicted AIR.
              </p>
              <div className="feature-tags-wrapper">
                <span className="feat-tag">Mistake Engine</span>
                <span className="feat-tag">Time Matrix</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-graphic-box">
                <BookOpen className="w-12 h-12 text-[#007bff]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">NCERT Question Bank</h3>
              <p className="text-xs text-[#475569]">
                Over 75,000+ line-by-line NCERT questions covering statement-wise, assertion-reason, diagram-based, and match-the-column formats.
              </p>
              <div className="feature-tags-wrapper">
                <span className="feat-tag">100% Syllabus</span>
                <span className="feat-tag">Diagram MCQs</span>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-graphic-box">
                <Brain className="w-12 h-12 text-[#007bff]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">Smart Revision Planner</h3>
              <p className="text-xs text-[#475569]">
                Spaced-repetition review queues ensure you never forget high-frequency formulas, biological cycles, or organic reactions before exam day.
              </p>
              <div className="feature-tags-wrapper">
                <span className="feat-tag">Spaced Repetition</span>
                <span className="feat-tag">Formula Sheets</span>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-graphic-box">
                <Calendar className="w-12 h-12 text-[#007bff]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">Structured Learning Path</h3>
              <p className="text-xs text-[#475569]">
                Curated 33 Sunday mock test cycles across Dropper, Class 12th, and Class 11th tracks with synchronized nationwide rankings.
              </p>
              <div className="feature-tags-wrapper">
                <span className="feat-tag">Tracks 1–3</span>
                <span className="feat-tag">Sunday CBT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section id="pricing" className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Transparent, student-friendly pricing with instant CBT test unlocks. Select your target batch below:
            </p>

            {/* Batch Pill Selector */}
            <div className="inline-flex p-1 bg-white rounded-full border border-slate-300 shadow-xs mt-4">
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
                Class 12th
              </button>
              <button
                onClick={() => setActiveBatch('11th')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeBatch === '11th'
                    ? 'bg-[#007bff] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                Class 11th
              </button>
            </div>
          </div>

          {/* Early Bird Banner */}
          <div className="early-bird-strip">
            <span>&#127881; LIMITED TIME OFFER: Early Bird 10% &ndash; 25% Instant Discount Live on All CBT Packs!</span>
          </div>

          {/* 4 Pricing Cards Row */}
          <div className="pricing-grid">
            {/* Card 1: Free Mock */}
            <div className="pricing-card">
              <div className="plan-title">Free Mock</div>
              <div className="price-strike">&#8377;999</div>
              <div className="price-current">&#8377;0 <span>/year</span></div>
              <div className="per-day-line text-[#007bff]">&#8377;0 / day</div>
              <div className="ideal-for-box"><strong>Ideal for:</strong> First-time aspirants testing CBT interface</div>
              <ul className="plan-features-list">
                <li><span className="check-icon">&#10003;</span> 1 Full 720-Mark Sunday Mock</li>
                <li><span className="check-icon">&#10003;</span> Real NTA CBT Interface</li>
                <li><span className="check-icon">&#10003;</span> Instant Scorecard &amp; Solutions</li>
                <li><span className="check-icon">&#10003;</span> All-India Rank Preview</li>
              </ul>
              <button
                onClick={() => onNavigateToTestSeries(activeBatch)}
                className="btn-secondary w-full"
              >
                Start Free Mock
              </button>
              <div className="guarantee-note">&#10003; 100% Free Forever</div>
            </div>

            {/* Card 2: Practice Pack (Single Track) */}
            {singleTrackPackages[0] && (
              (() => {
                const pkg = singleTrackPackages[0];
                const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                return (
                  <div className="pricing-card">
                    <div className="plan-title">Practice Pack</div>
                    <div className="price-strike">{pkg.originalPrice}</div>
                    <div className="price-current">{pkg.price} <span>/year</span></div>
                    <div className="per-day-line">Just &#8377;8 / day</div>
                    <div className="ideal-for-box"><strong>Ideal for:</strong> Weekly chapterwise testing</div>
                    <ul className="plan-features-list">
                      <li><span className="check-icon">&#10003;</span> {pkg.testsCount} Scheduled Sunday Mocks</li>
                      <li><span className="check-icon">&#10003;</span> NCERT Referenced Explanations</li>
                      <li><span className="check-icon">&#10003;</span> Weak-Area Diagnostic Tags</li>
                      <li><span className="check-icon">&#10003;</span> 2-Device Protected Access</li>
                    </ul>
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="btn-primary w-full"
                    >
                      {isEnrolled ? '✓ Enrolled • Unlocked' : `Choose Practice Pack (${pkg.price})`}
                    </button>
                    <div className="guarantee-note">&#128274; 7-Day Money-back guarantee</div>
                  </div>
                );
              })()
            )}

            {/* Card 3: Improvement Pack (Most Popular Combo) */}
            {comboPackages[0] && (
              (() => {
                const pkg = comboPackages[0];
                const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                return (
                  <div className="pricing-card featured-card">
                    <div className="popular-ribbon">&#9733; Most Popular</div>
                    <div className="plan-title">Improvement Pack</div>
                    <div className="price-strike">{pkg.originalPrice}</div>
                    <div className="price-current">{pkg.price} <span>/year</span></div>
                    <div className="per-day-line">Just &#8377;13 / day</div>
                    <div className="ideal-for-box"><strong>Ideal for:</strong> Droppers aiming for 650+ marks</div>
                    <ul className="plan-features-list">
                      <li><span className="check-icon">&#10003;</span> {pkg.testsCount} Sunday All-India Mocks</li>
                      <li><span className="check-icon">&#10003;</span> AI Rank &amp; GMC Predictor</li>
                      <li><span className="check-icon">&#10003;</span> Mistake Pattern &amp; Silly Error Tracker</li>
                      <li><span className="check-icon">&#10003;</span> Complete NCERT Question Bank</li>
                      <li><span className="check-icon">&#10003;</span> 2-Device Protected Mobile + Laptop</li>
                    </ul>
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="btn-primary w-full shadow-md"
                    >
                      {isEnrolled ? '✓ Enrolled • Unlocked' : `Enroll Improvement Pack (${pkg.price})`}
                    </button>
                    <div className="guarantee-note">&#128274; 100% Money-back guarantee</div>
                  </div>
                );
              })()
            )}

            {/* Card 4: Rank Booster Pack (Complete All-Track) */}
            {(() => {
              const pkg = NEET_PREP_PACKAGES.find(p => p.id === 'repeater-combo-all') || comboPackages[0];
              const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
              return (
                <div className="pricing-card">
                  <div className="plan-title">Rank Booster Pack</div>
                  <div className="price-strike">{pkg.originalPrice}</div>
                  <div className="price-current">{pkg.price} <span>/year</span></div>
                  <div className="per-day-line">Just &#8377;26 / day</div>
                  <div className="ideal-for-box"><strong>Ideal for:</strong> Top rank contenders for AIIMS &amp; GMC</div>
                  <ul className="plan-features-list">
                    <li><span className="check-icon">&#10003;</span> Complete All-Track Combo (115 Tests)</li>
                    <li><span className="check-icon">&#10003;</span> Unlimited Custom CBT Tests</li>
                    <li><span className="check-icon">&#10003;</span> AIIMS Cutoff Analytics (25,153+ Seats)</li>
                    <li><span className="check-icon">&#10003;</span> High-Yield Diagrams &amp; Formula Sheets</li>
                    <li><span className="check-icon">&#10003;</span> 2-Device Seamless Cloud Sync</li>
                  </ul>
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="btn-primary w-full"
                  >
                    {isEnrolled ? '✓ Enrolled • Unlocked' : `Choose Rank Booster (${pkg.price})`}
                  </button>
                  <div className="guarantee-note">&#128274; 100% Money-back guarantee</div>
                </div>
              );
            })()}
          </div>

          {/* Trust Badges */}
          <div className="pricing-trust-badges">
            <div className="trust-badge-item">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>100% Secure Payment (Razorpay 256-bit SSL)</span>
            </div>
            <div className="trust-badge-item">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span>75,000+ NCERT Questions</span>
            </div>
            <div className="trust-badge-item">
              <UserCheck className="w-5 h-5 text-purple-600" />
              <span>1,00,000+ Aspirants Enrolled</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (ACCORDION) */}
      <section id="faq" className="py-20 bg-white">
        <div className="site-container faq-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Everything you need to know about our Sunday CBT Test Series, package unlocks, and performance analytics.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="faq-question"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{isOpen ? '✕' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. ENROLL / CONTACT SECTION */}
      <section id="enroll" className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="site-container">
          <div className="enroll-grid">
            {/* Left Panel */}
            <div className="enroll-left-panel">
              <div>
                <span className="discount-tag">&#127881; 10% OFF EARLY-BIRD</span>
                <h3>Start Your Journey to Government Medical College</h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  Enroll today to lock in early-bird pricing starting from &#8377;2,999/year. Get instant CBT credentials, Sunday mock test cycles, and AI diagnostics.
                </p>

                <ul className="enroll-features-list">
                  <li><span className="text-emerald-400 font-bold">&#10003;</span> Instant Sunday CBT Test Unlocking</li>
                  <li><span className="text-emerald-400 font-bold">&#10003;</span> 720-Mark Scorecards &amp; Projected AIR</li>
                  <li><span className="text-emerald-400 font-bold">&#10003;</span> 25,153+ Verified GMC Cutoff Intelligence</li>
                  <li><span className="text-emerald-400 font-bold">&#10003;</span> 2-Device Protected Laptop + Mobile Sync</li>
                </ul>
              </div>

              <div className="enroll-contact-info">
                <div>&#128205; Serving aspirants across all 28 States &amp; 8 UTs</div>
                <div>&#9993; Academic Support: <strong className="text-white">support@neetcbt.in</strong></div>
                <div>&#9742; Candidate Helpline: <strong className="text-white">+91 (020) 4123-5678</strong></div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="enroll-right-card">
              <h3 className="text-xl font-bold text-[#0f172a]">Candidate Registration</h3>
              <p className="text-xs text-[#475569] mb-6">Fill in your details for instant CBT access &amp; roll number issuance.</p>

              {formMessage && (
                <div className={`form-alert ${formMessage.type}`}>
                  {formMessage.text}
                </div>
              )}

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    value={formState.fullName}
                    onChange={e => setFormState({ ...formState, fullName: e.target.value })}
                    className="form-input"
                    placeholder="e.g. Aryan Sharma"
                    required
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="form-input"
                      placeholder="student@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      className="form-input"
                      placeholder="10-digit number"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Interested Plan *</label>
                    <select
                      value={formState.plan}
                      onChange={e => setFormState({ ...formState, plan: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="free">Free Mock Test (&#8377;0)</option>
                      <option value="practice">Practice Pack (&#8377;2,999)</option>
                      <option value="improvement">Improvement Pack (&#8377;4,999)</option>
                      <option value="booster">Rank Booster Pack (&#8377;9,497)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Exam Year *</label>
                    <select
                      value={formState.targetYear}
                      onChange={e => setFormState({ ...formState, targetYear: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="2027">NEET 2027</option>
                      <option value="2028">NEET 2028</option>
                      <option value="2029">NEET 2029</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">State / UT *</label>
                    <select
                      value={formState.state}
                      onChange={e => setFormState({ ...formState, state: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Other">Other State / UT</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Student Category *</label>
                    <div className="category-radio-group">
                      <label className="radio-pill">
                        <input
                          type="radio"
                          name="reactCategory"
                          value="fresher"
                          checked={formState.category === 'fresher'}
                          onChange={() => setFormState({ ...formState, category: 'fresher' })}
                        />
                        <span>Fresher</span>
                      </label>
                      <label className="radio-pill">
                        <input
                          type="radio"
                          name="reactCategory"
                          value="dropper"
                          checked={formState.category === 'dropper'}
                          onChange={() => setFormState({ ...formState, category: 'dropper' })}
                        />
                        <span>Dropper</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-base mt-2"
                >
                  Proceed to Enrollment &amp; Instant Access &rarr;
                </button>

                <div className="privacy-note">
                  🔒 We respect your privacy. No spam. Your phone number is encrypted.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>⚡ NeetCbt Exam Platform</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                India's standard Computer-Based Testing simulator and All-India mock test platform engineered exclusively for NEET-UG Medical Aspirants.
              </p>
              <div className="text-[11px] text-slate-500">
                MCC AIQ &bull; State Quota &bull; 96 NCERT Chapters &bull; 2-Device Protected
              </div>
            </div>

            <div className="footer-col">
              <h5>Quick Navigation</h5>
              <ul>
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white cursor-pointer">Home</button></li>
                <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white cursor-pointer">Why Choose Us</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white cursor-pointer">About Platform</button></li>
                <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white cursor-pointer">Features</button></li>
                <li><button onClick={scrollToPricing} className="hover:text-white cursor-pointer">Course Packages</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Academic Programs</h5>
              <ul>
                <li><button onClick={() => { setActiveBatch('repeater'); scrollToPricing(); }} className="hover:text-white cursor-pointer">NEET Dropper / Repeater</button></li>
                <li><button onClick={() => { setActiveBatch('12th'); scrollToPricing(); }} className="hover:text-white cursor-pointer">Class 12th Board + NEET</button></li>
                <li><button onClick={() => { setActiveBatch('11th'); scrollToPricing(); }} className="hover:text-white cursor-pointer">Class 11th Foundation</button></li>
                <li><button onClick={() => onNavigateToTestSeries(activeBatch)} className="hover:text-white cursor-pointer">33 Sunday All-India Mocks</button></li>
                <li><button onClick={() => onNavigateToTestSeries(activeBatch)} className="hover:text-white cursor-pointer">NCERT Question Bank</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Legal &amp; Support</h5>
              <ul>
                <li><a href="/terms">Terms &amp; Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/refund">Refund Policy</a></li>
                <li><a href="/returns">Return &amp; Delivery Policy</a></li>
                <li><a href="mailto:support@neetcbt.in">Student Support</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; 2026&ndash;2027 NeetCbt. All rights reserved. Built exclusively for NEET-UG Aspirants.
            </div>
            <div>
              Powered by NeetCbt EdTech Engine &bull; neetcbtexam.com
            </div>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP / SUPPORT BUTTON */}
      <a
        href="https://wa.me/919876543210?text=Hello%20NeetCbt%2C%20I%20am%20interested%20in%20the%20NEET%202027%20CBT%20Test%20Series"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-white" />
        <span>Chat with Mentor</span>
      </a>
    </div>
  );
};

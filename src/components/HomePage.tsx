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
    <div className="w-full bg-[var(--bg)] text-[var(--text)] font-sans">
      {/* 1. TOP ADMISSIONS TICKER BANNER */}
      <div className="clean-announcement-bar">
        <span className="pulsing-dot"></span>
        <span>NEET 2027 Admissions Open &bull; Official NTA Standard Computer-Based Test Simulator</span>
        <button
          onClick={scrollToPackages}
          className="clean-announcement-link"
        >
          View Packages &rarr;
        </button>
      </div>

      {/* 2. HERO SECTION */}
      <section className="clean-hero">
        <div className="clean-container">
          <div className="clean-hero-grid">
            {/* Left Column: Heading, Lead, Buttons, Stats */}
            <div>
              <div className="clean-hero-chip">
                <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                <span>NTA NEET (UG) Computer-Based Testing Simulation Suite</span>
              </div>

              <h1 className="clean-hero-h1">
                MCQ Practice and CBT Testing Platform for{' '}
                <span className="gradient-text-hero">
                  Serious NEET Aspirants
                </span>
              </h1>

              <p className="clean-hero-lead">
                Practice 196 authentic 720-mark Sunday CBT mocks, master 96 NCERT chapters, analyze 25,153+ Government Medical College cutoffs, and track your All-India Rank (AIR) in real-time.
              </p>

              {/* Core Action Buttons */}
              <div className="clean-hero-buttons">
                <button
                  onClick={scrollToPackages}
                  className="btn-pill-primary"
                >
                  <span>Explore Course Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigateToTestSeries(activeBatch)}
                  className="btn-pill-ghost"
                >
                  <Calendar className="w-4 h-4 text-[var(--primary)]" />
                  <span>Launch Sunday Test Series</span>
                </button>
                {onNavigateToAboutExam && (
                  <button
                    onClick={onNavigateToAboutExam}
                    className="btn-pill-ghost text-xs"
                  >
                    <BookOpen className="w-4 h-4 text-[var(--muted)]" />
                    <span>About NEET Exam &amp; Cutoffs</span>
                  </button>
                )}
              </div>

              {/* Stats Row */}
              <div className="clean-hero-stats-row">
                <div className="hero-stat-item">
                  <div className="stat-num">196</div>
                  <div className="stat-lbl">Sunday Tests</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-num">720</div>
                  <div className="stat-lbl">Official CBT Marks</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-num">25k+</div>
                  <div className="stat-lbl">GMC Cutoffs</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-num">2-Device</div>
                  <div className="stat-lbl">Protected Access</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Panel Card */}
            <div className="hero-panel-card">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <div>
                  <div className="mono-label">Active Batch Tracker</div>
                  <div className="text-base font-extrabold text-[var(--text)] mt-0.5">
                    {activeBatch === 'repeater' ? 'NEET Dropper (115 Tests)' : activeBatch === '12th' ? 'Class 12th Master (23 Tests)' : 'Class 11th Foundation (20 Tests)'}
                  </div>
                </div>
                <span className="tag-pill tag-pill-green">Verified NTA Pattern</span>
              </div>

              <div className="space-y-4 py-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--muted)] mb-1">
                    <span>Physics (45 Qs • 180 Marks)</span>
                    <span className="text-[var(--primary)] font-bold">NCERT Calibrated</span>
                  </div>
                  <div className="progress-track-thin">
                    <div className="progress-fill-gradient" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--muted)] mb-1">
                    <span>Chemistry (45 Qs • 180 Marks)</span>
                    <span className="text-[var(--accent)] font-bold">100% Solved</span>
                  </div>
                  <div className="progress-track-thin">
                    <div className="progress-fill-gradient" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--muted)] mb-1">
                    <span>Biology (90 Qs • 360 Marks)</span>
                    <span className="text-emerald-700 font-bold">High-Yield Theory</span>
                  </div>
                  <div className="progress-track-thin">
                    <div className="progress-fill-gradient" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-medium text-[var(--muted)]">
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <ShieldCheck className="w-4 h-4" /> Bank-Grade 256-Bit Secured
                </span>
                <span className="font-mono text-[11px] text-[var(--primary)] font-bold">AIR PREDICTOR</span>
              </div>
            </div>
          </div>

          {/* 3 Prominent Gateway Module Cards */}
          <div className="module-cards-grid">
            {/* Gateway 1: Course Packages */}
            <div
              onClick={scrollToPackages}
              className="module-card group"
            >
              <div>
                <div className="icon-holder-square">
                  <GraduationCap className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="module-card-title group-hover:text-[var(--primary)] transition">
                  1. Course Packages &amp; Batches
                </h3>
                <p className="module-card-desc">
                  Targeted single-track and multi-track combos for Droppers, Class 12th, and Class 11th with instant Sunday test unlocks.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[var(--primary)]">
                <span>Choose Your Package</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Gateway 2: Sunday Test Series */}
            <div
              onClick={() => onNavigateToTestSeries(activeBatch)}
              className="module-card group"
            >
              <div>
                <div className="icon-holder-square">
                  <FileCheck2 className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="module-card-title group-hover:text-[var(--primary)] transition">
                  2. Sunday Test Series (196 Tests)
                </h3>
                <p className="module-card-desc">
                  Chapterwise, Partwise &amp; Full Syllabus CBT mocks with official NTA timer, Section A/B separation, and instant AIR prediction.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[var(--primary)]">
                <span>Open Test Series Simulator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>

            {/* Gateway 3: About Exam & Cutoffs */}
            <div
              onClick={() => onNavigateToAboutExam ? onNavigateToAboutExam() : onNavigateToTestSeries()}
              className="module-card group"
            >
              <div>
                <div className="icon-holder-square">
                  <LineChart className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="module-card-title group-hover:text-[var(--primary)] transition">
                  3. About NEET Exam &amp; Cutoffs
                </h3>
                <p className="module-card-desc">
                  25,153+ Verified Government Medical College seat cutoff analytics, Marks vs Rank benchmarks, and state quota admission matrices.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[var(--primary)]">
                <span>View Exam Guide &amp; Cutoffs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES & PACKAGES SECTION ("OUR OFFERINGS") */}
      <section id="packages-section" className="section-padding bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="clean-container space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="clean-hero-chip">
              Targeted Academic Packages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
              Choose Packages Built for{' '}
              <span className="text-[var(--primary)]">
                {activeBatch === 'repeater' ? 'NEET Dropper / Repeater' : activeBatch === '12th' ? 'Class 12th Batch' : 'Class 11th Foundation'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)]">
              Enroll in individual tracks or complete combos to instantly unlock corresponding Sunday CBT test papers.
            </p>

            {/* Batch Pill Switcher */}
            <div className="batch-pill-row">
              <button
                onClick={() => setActiveBatch('repeater')}
                className={`batch-pill-btn ${activeBatch === 'repeater' ? 'selected' : ''}`}
              >
                Repeater (Dropper)
              </button>
              <button
                onClick={() => setActiveBatch('12th')}
                className={`batch-pill-btn ${activeBatch === '12th' ? 'selected' : ''}`}
              >
                Class 12th Batch
              </button>
              <button
                onClick={() => setActiveBatch('11th')}
                className={`batch-pill-btn ${activeBatch === '11th' ? 'selected' : ''}`}
              >
                Class 11th Batch
              </button>
            </div>
          </div>

          {/* RECOMMENDED COMBOS */}
          {comboPackages.length > 0 && (
            <div className="space-y-6 mt-10 pt-4">
              <div className="flex items-center gap-2.5">
                <Crown className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text)]">
                  Recommended Combo Packs (Multi-Track Value)
                </h3>
              </div>

              <div className="pricing-combo-grid pt-3">
                {comboPackages.map((pkg) => {
                  const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                  return (
                    <div
                      key={pkg.id}
                      className={`pricing-card-clean ${pkg.isPopular ? 'featured-mega' : ''}`}
                    >
                      {pkg.badge && (
                        <div className="amber-ribbon-badge">
                          {pkg.badge}
                        </div>
                      )}

                      <div className="pricing-meta-label">
                        {pkg.testsCount} Tests &bull; Multi-Track Combo
                      </div>
                      <h4 className="pricing-card-title">
                        {pkg.name}
                      </h4>
                      <p className="pricing-card-sub">
                        {pkg.tagline}
                      </p>

                      <div className="pricing-price-row">
                        <span className="price-new-bold">{pkg.price}</span>
                        <span className="price-old-struck">{pkg.originalPrice}</span>
                      </div>

                      {pkg.savings && (
                        <div>
                          <span className="green-save-pill">{pkg.savings}</span>
                        </div>
                      )}

                      <div className="schedule-badge-row">
                        <Clock className="w-4 h-4 text-[var(--primary)] shrink-0" />
                        <span>{pkg.scheduleSummary}</span>
                      </div>

                      <div className="feature-list-clean">
                        {pkg.features.map((feat, idx) => (
                          <div key={idx} className="feature-item-clean">
                            <span className="round-check-icon">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 mt-auto">
                        <button
                          onClick={() => onSelectPackage(pkg)}
                          className={isEnrolled ? "btn-pill-unlocked w-full" : "btn-pill-primary w-full"}
                        >
                          {isEnrolled ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
          <div className="space-y-6 pt-12">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[var(--primary)]" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)]">
                Individual Track Packages
              </h3>
            </div>

            <div className="pricing-combo-grid pt-3">
              {singleTrackPackages.map((pkg) => {
                const isEnrolled = enrolledPackageIds.includes(pkg.id) || enrolledPackageIds.includes('ALL');
                return (
                  <div
                    key={pkg.id}
                    className="pricing-card-clean"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="pricing-meta-label">
                          {pkg.testsCount} Tests &bull; Single Track
                        </span>
                        <span className="tag-pill tag-pill-surface2">
                          {pkg.shortTitle}
                        </span>
                      </div>
                      <h4 className="pricing-card-title">
                        {pkg.name}
                      </h4>
                      <p className="pricing-card-sub">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="pricing-price-row">
                      <span className="price-new-bold">{pkg.price}</span>
                      <span className="price-old-struck">{pkg.originalPrice}</span>
                    </div>

                    <div>
                      <span className="tag-pill tag-pill-surface2 mb-3 inline-block">
                        {pkg.testsCount} Scheduled Tests
                      </span>
                    </div>

                    <div className="schedule-badge-row">
                      <Clock className="w-4 h-4 text-[var(--primary)] shrink-0" />
                      <span>{pkg.scheduleSummary}</span>
                    </div>

                    <div className="feature-list-clean">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="feature-item-clean">
                          <span className="round-check-icon">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 mt-auto">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className={isEnrolled ? "btn-pill-unlocked w-full" : "btn-pill-ghost w-full"}
                      >
                        {isEnrolled ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>✓ Enrolled &bull; Track Unlocked</span>
                          </>
                        ) : (
                          <>
                            <Unlock className="w-4 h-4 text-[var(--primary)]" />
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
      <section className="section-padding bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="clean-container space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
            <div>
              <div className="mono-label">
                Academic Test Series Calendar
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight mt-1">
                Scheduled Sunday Tests for {activeBatch === 'repeater' ? 'Repeater Batch' : activeBatch === '12th' ? 'Class 12th' : 'Class 11th'}
              </h2>
            </div>
            <button
              onClick={() => onNavigateToTestSeries(activeBatch)}
              className="btn-pill-ghost self-start sm:self-auto"
            >
              <span>View Full Sunday Calendar (196 Tests)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewTests.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] space-y-3 flex flex-col justify-between transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="tag-pill tag-pill-amber">
                      {t.dateStr}
                    </span>
                    <span className="tag-pill tag-pill-surface2">
                      {t.code}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[var(--text)] leading-snug line-clamp-2">
                    {t.title}
                  </h4>
                  <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                    {t.objective || t.description}
                  </p>

                  <div className="pt-2 text-[11px] font-semibold text-[var(--text)] space-y-1.5 bg-[var(--surface2)]/60 p-3 rounded-xl border border-[var(--border)]">
                    <div className="truncate"><span className="text-[var(--primary)] font-bold">Phy:</span> {t.physicsUnit}</div>
                    <div className="truncate"><span className="text-emerald-700 font-bold">Chem:</span> {t.chemistryUnit}</div>
                    <div className="truncate"><span className="text-teal-800 font-bold">Bio:</span> {t.botanyBlock}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigateToTestSeries(activeBatch)}
                    className="w-full py-2.5 rounded-full bg-[var(--primary-soft)] hover:bg-[var(--primary)] text-[var(--primary)] hover:text-white font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Open in CBT Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY NEET CBT EXAM PLATFORM */}
      <section className="section-padding bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="clean-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
              The Standard Computer-Based Test System
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Engineered exclusively for NEET-UG aspirants to master exam endurance, numerical calculation speed, and zero-panic test execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition space-y-3">
              <div className="icon-holder-square">
                <Zap className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">Authentic NTA Interface</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Full-screen countdown timer, question palette with color-coded response states, Section A/B 50-question options, and instant paper auto-save.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition space-y-3">
              <div className="icon-holder-square bg-amber-50 text-amber-700">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">100% NCERT Syllabus</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Strict alignment with NMC syllabus guidelines. Every question is calibrated for high-yield theory, NCERT diagram precision, and assertion-reason logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition space-y-3">
              <div className="icon-holder-square bg-emerald-50 text-emerald-700">
                <LineChart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">Instant AIR &amp; Prediction</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Projected All-India Rank, category percentile, state quota cutoff comparisons, and speed-accuracy matrices delivered the moment you submit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition space-y-3">
              <div className="icon-holder-square bg-purple-50 text-purple-700">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">2-Device Protected</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Registered student credentials sync safely across your laptop and phone, preventing unauthorized sharing while allowing uninterrupted study anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="section-padding bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="clean-container max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-bold text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-[var(--shadow-sm)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-[var(--text)] flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--surface2)]/40 transition"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[var(--primary)] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--muted)] shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

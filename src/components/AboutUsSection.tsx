import React from 'react';
import {
  Info,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Users,
  LineChart,
  BookOpen,
  Headphones,
  Award,
  Sparkles
} from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
          <Info className="w-3 h-3" />
          <span>NeetCbt Exam Test Pedagogy & Story</span>
        </div>
        <h1 className="text-base sm:text-lg font-bold text-slate-900">
          4. About NeetCbt Exam Test
        </h1>
        <p className="mt-0.5 text-xs text-slate-600 max-w-3xl">
          India&apos;s most trusted NCERT-first NEET preparation platform, empowering over 1,500,000 aspirants with Target Batches, Sunday 180-Marks CBT Mocks, and Continuous AI Tutor doubt solving.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Mission */}
        <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
            Our Core Mission
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
            100% NCERT Focused Practice & Transparent Rank Tracking
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            We believe that NEET selection requires targeted daily practice rather than endless theory. By combining strict NCERT question filters, micro-targets, audio-video solutions, and high-yield test series, we ensure every student practices questions that actually mirror the examination.
          </p>
        </div>

        {/* Vision */}
        <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <Eye className="w-4 h-4" />
          </div>
          <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
            Our Vision
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
            Empowering Every Aspirant to Enter Top Government Medical Colleges
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            To provide every serious NEET aspirant in tier-1, 2, and 3 cities with the exact same high-caliber Q-banks, Dr. NK Sharma's biology mastery, and pen-and-paper Classroom Test Series previously exclusive to premier Kota institutes.
          </p>
        </div>
      </div>

      {/* Why Choose Us (Exact 5 Document Pillars) */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs">
        <div className="border-b border-gray-100 pb-3">
          <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-0.5">
            Why Choose Us
          </div>
          <h2 className="text-sm sm:text-base font-bold text-gray-900">
            5 Core Pillars That Set Us Apart
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Expert faculty, AI analytics, mock tests, revision tools and mentor support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <Users className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">1. Expert Faculty</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Taught by distinguished AIIMS doctors and IIT alumni with an average teaching pedigree of 14+ years.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <LineChart className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">2. AI Analytics</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Deep diagnostic scans identify weak sub-topics, calculate time per question, and simulate national percentiles.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">3. Mock Tests</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Official CBT platform with Minor, Major, Part and Full Syllabus Grand Test Series.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">4. Revision Tools</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Instant interactive flashcards, visual mind maps, NCERT line-by-line notes, formula handbooks, and DPP generator.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
              <Headphones className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">5. Mentor Support</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Dedicated 1-on-1 guidance, weekly exam strategy audits, and 24/7 academic doubt solving forums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

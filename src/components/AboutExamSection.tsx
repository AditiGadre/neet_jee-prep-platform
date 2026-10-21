import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  Clock,
  Award,
  Layers,
  Building2,
  AlertCircle,
  FileText,
  MapPin,
  Sparkles,
  Search
} from 'lucide-react';
import { COLLEGES_DATA } from '../data/mockData';

export const AboutExamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'what-is-neet' | 'pattern' | 'syllabus' | 'colleges'>('what-is-neet');
  const [collegeSearch, setCollegeSearch] = useState('');
  const [collegeTypeFilter, setCollegeTypeFilter] = useState('All');

  const filteredColleges = COLLEGES_DATA.filter(clg => {
    const matchesType = collegeTypeFilter === 'All' || clg.type === collegeTypeFilter;
    const matchesSearch =
      clg.name.toLowerCase().includes(collegeSearch.toLowerCase()) ||
      clg.location.toLowerCase().includes(collegeSearch.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] space-y-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Comprehensive Information Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
            About NEET-UG Exam
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[var(--muted)] max-w-3xl leading-relaxed">
            Everything you need to know about the National Eligibility cum Entrance Test (NEET-UG), Exam Pattern, Official Syllabus, and Medical Colleges Seat Matrix.
          </p>
        </div>

        {/* Sub-tabs for Section */}
        <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-2.5">
          {[
            { id: 'what-is-neet', label: 'What is NEET?' },
            { id: 'pattern', label: 'Exam Pattern & Rules' },
            { id: 'syllabus', label: 'Official Syllabus Breakdown' },
            { id: 'colleges', label: 'Colleges, Seats & Cut-offs' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[var(--primary)] text-white shadow-sm'
                  : 'bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-stone-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. WHAT IS NEET? */}
      {activeTab === 'what-is-neet' && (
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] space-y-6 animate-in fade-in duration-100">
          <div className="border-b border-[var(--border)] pb-5">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-[var(--primary)]" />
              <span>What is NEET?</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] mt-2.5 leading-relaxed max-w-4xl">
              <strong>National Eligibility cum Entrance Test (NEET-UG)</strong> is the single all-India entrance examination for admission into undergraduate medical courses across India, including <strong>MBBS, BDS, BAMS, BHMS, BUMS, BYNS, and BSMS</strong>, in all government, private, deemed medical universities and premier institutes like AIIMS and JIPMER.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1.5">
              <div className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Conducting Body</div>
              <div className="text-base font-extrabold text-[var(--text)]">National Testing Agency</div>
              <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed">Conducted under directives of National Medical Commission (NMC) &amp; MoHFW.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1.5">
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Total MBBS Seats</div>
              <div className="text-base font-extrabold text-[var(--text)]">108,000+ Seats</div>
              <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed">Across 700+ Government and Private Medical Colleges in India.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1.5">
              <div className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Annual Applicants</div>
              <div className="text-base font-extrabold text-[var(--text)]">2.4+ Million Aspirants</div>
              <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed">Largest single competitive exam in the world.</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXAM PATTERN */}
      {activeTab === 'pattern' && (
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] space-y-6 animate-in fade-in duration-100">
          <div className="border-b border-[var(--border)] pb-5">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[var(--primary)]" />
              <span>Exam Pattern &amp; Official Rules</span>
            </h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Strict 45 questions per subject (180 total questions, 720 marks).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1">
              <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Total Duration</div>
              <div className="text-xl font-extrabold text-[var(--text)]">180 Mins</div>
              <div className="text-xs text-[var(--muted)] font-mono">(3.0 Hours)</div>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1">
              <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Total Questions</div>
              <div className="text-xl font-extrabold text-[var(--text)]">180 Questions</div>
              <div className="text-xs text-[var(--accent)] font-semibold font-mono">(All 180 Compulsory)</div>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1">
              <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Maximum Marks</div>
              <div className="text-xl font-extrabold text-[var(--text)]">720 Marks</div>
              <div className="text-xs text-[var(--muted)] font-mono">180 Questions &times; 4 Marks</div>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-1">
              <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Marking Scheme</div>
              <div className="text-xl font-extrabold text-[var(--text)]">+4 / -1 / 0</div>
              <div className="text-xs text-amber-700 font-semibold font-mono">Negative marking applies</div>
            </div>
          </div>

          {/* Section Breakdown Table */}
          <div className="overflow-x-auto border border-[var(--border)] rounded-2xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--surface2)] text-[var(--text)] font-bold uppercase tracking-wider text-xs border-b border-[var(--border)]">
                <tr>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Questions</th>
                  <th className="p-4">Total Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-[var(--text)]">
                <tr className="hover:bg-[var(--surface2)]/50 transition">
                  <td className="p-4 font-bold">Physics</td>
                  <td className="p-4 text-[var(--muted)] font-medium">45 Questions</td>
                  <td className="p-4 font-bold">180 Marks</td>
                </tr>
                <tr className="hover:bg-[var(--surface2)]/50 transition">
                  <td className="p-4 font-bold">Chemistry</td>
                  <td className="p-4 text-[var(--muted)] font-medium">45 Questions</td>
                  <td className="p-4 font-bold">180 Marks</td>
                </tr>
                <tr className="hover:bg-[var(--surface2)]/50 transition">
                  <td className="p-4 font-bold">Botany</td>
                  <td className="p-4 text-[var(--muted)] font-medium">45 Questions</td>
                  <td className="p-4 font-bold">180 Marks</td>
                </tr>
                <tr className="hover:bg-[var(--surface2)]/50 transition">
                  <td className="p-4 font-bold">Zoology</td>
                  <td className="p-4 text-[var(--muted)] font-medium">45 Questions</td>
                  <td className="p-4 font-bold">180 Marks</td>
                </tr>
                <tr className="bg-[var(--primary-soft)] font-extrabold text-[var(--text)] border-t border-[var(--border)]">
                  <td className="p-4">Total (PCB)</td>
                  <td className="p-4">180 Questions</td>
                  <td className="p-4 text-[var(--primary)] font-extrabold">720 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. SYLLABUS */}
      {activeTab === 'syllabus' && (
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] space-y-6 animate-in fade-in duration-100">
          <div className="border-b border-[var(--border)] pb-5">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] flex items-center space-x-2">
              <Layers className="w-5 h-5 text-[var(--primary)]" />
              <span>Official Syllabus &amp; Chapter Weightages</span>
            </h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Physics, Chemistry and Biology based on the latest official NMC updated syllabus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Physics */}
            <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-3">
              <h3 className="text-sm font-bold text-[var(--text)] flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span>Physics Syllabus</span>
                <span className="text-xs font-mono font-bold text-[var(--primary)]">180 Marks</span>
              </h3>
              <ul className="text-sm text-[var(--muted)] space-y-2 pt-1">
                <li>&bull; Mechanics &amp; Laws of Motion (22%)</li>
                <li>&bull; Electrodynamics &amp; Current Electricity (24%)</li>
                <li>&bull; Optics: Ray &amp; Wave Optics (10%)</li>
                <li>&bull; Modern Physics &amp; Semiconductor (14%)</li>
                <li>&bull; Thermodynamics &amp; Kinetic Theory (12%)</li>
                <li>&bull; Oscillations &amp; Waves (8%)</li>
                <li>&bull; Gravitation &amp; Bulk Properties (10%)</li>
              </ul>
            </div>

            {/* Chemistry */}
            <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-3">
              <h3 className="text-sm font-bold text-[var(--text)] flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span>Chemistry Syllabus</span>
                <span className="text-xs font-mono font-bold text-[var(--primary)]">180 Marks</span>
              </h3>
              <ul className="text-sm text-[var(--muted)] space-y-2 pt-1">
                <li>&bull; Organic Chemistry (Mechanisms &amp; Named Rxns) (34%)</li>
                <li>&bull; Chemical Bonding &amp; Periodic Table (16%)</li>
                <li>&bull; Coordination Compounds &amp; d/f Block (14%)</li>
                <li>&bull; Physical Chemistry (Kinetics, Electro, Thermo) (26%)</li>
                <li>&bull; Solutions &amp; Equilibrium (10%)</li>
              </ul>
            </div>

            {/* Biology */}
            <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-3">
              <h3 className="text-sm font-bold text-[var(--text)] flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span>Biology Syllabus</span>
                <span className="text-xs font-mono font-bold text-[var(--accent)]">360 Marks (50%)</span>
              </h3>
              <ul className="text-sm text-[var(--muted)] space-y-2 pt-1">
                <li>&bull; Genetics &amp; Molecular Inheritance (20%)</li>
                <li>&bull; Human Physiology Systems (18%)</li>
                <li>&bull; Ecology and Environment (14%)</li>
                <li>&bull; Plant Physiology (Photosynthesis &amp; Respiration) (12%)</li>
                <li>&bull; Cell Biology &amp; Biomolecules (10%)</li>
                <li>&bull; Human Reproduction &amp; Health (10%)</li>
                <li>&bull; Biotechnology &amp; Applications (10%)</li>
                <li>&bull; Diversity in Living World (6%)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. COLLEGES & SEATS */}
      {activeTab === 'colleges' && (
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] space-y-6 animate-in fade-in duration-100">
          <div className="border-b border-[var(--border)] pb-5">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-[var(--primary)]" />
              <span>Colleges, Seats, Cut-offs &amp; Counselling</span>
            </h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Government and private colleges, AIIMS, seat matrix, cut-offs and counselling information.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'AIIMS', 'Government', 'Private'].map(type => (
                <button
                  key={type}
                  onClick={() => setCollegeTypeFilter(type)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    collegeTypeFilter === type
                      ? 'bg-[var(--primary)] text-white shadow-sm'
                      : 'bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-stone-200/70'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search college or state..."
                value={collegeSearch}
                onChange={e => setCollegeSearch(e.target.value)}
                className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          {/* Colleges Table */}
          <div className="overflow-x-auto border border-[var(--border)] rounded-2xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--surface2)] text-[var(--text)] font-bold uppercase tracking-wider text-xs border-b border-[var(--border)]">
                <tr>
                  <th className="p-4">NIRF</th>
                  <th className="p-4">Medical College &amp; Location</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Seats</th>
                  <th className="p-4">Gen Cut-off (AIR)</th>
                  <th className="p-4">Approx Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-[var(--text)]">
                {filteredColleges.map(clg => (
                  <tr key={clg.id} className="hover:bg-[var(--surface2)]/50 transition">
                    <td className="p-4 font-bold text-[var(--primary)] font-mono">#{clg.nirfRank}</td>
                    <td className="p-4">
                      <div className="font-bold text-[var(--text)]">{clg.name}</div>
                      <div className="text-xs text-[var(--muted)] flex items-center space-x-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{clg.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--primary-soft)] text-[var(--primary)]">
                        {clg.type}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{clg.totalSeats} Seats</td>
                    <td className="p-4 font-bold text-[var(--accent)] font-mono">AIR &le; {clg.closingRankGen}</td>
                    <td className="p-4 text-[var(--muted)] font-mono">{clg.approxFeePerYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Counselling Roadmap Guide */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-4">
            <h3 className="text-base font-bold text-[var(--text)]">Medical Counselling Process (MCC &amp; State Quota)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white border border-[var(--border)] shadow-xs space-y-1">
                <div className="font-bold text-[var(--text)]">1. AIQ 15% (MCC)</div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">All India Quota for AIIMS, JIPMER, Deemed &amp; 15% Central Govt seats.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[var(--border)] shadow-xs space-y-1">
                <div className="font-bold text-[var(--text)]">2. State 85% Quota</div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">State Domicile quota counselling conducted by respective state authority.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[var(--border)] shadow-xs space-y-1">
                <div className="font-bold text-[var(--text)]">3. Choice Filling</div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">Preference locking for colleges based on previous year closing ranks.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[var(--border)] shadow-xs space-y-1">
                <div className="font-bold text-[var(--text)]">4. Seat Allotment</div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">Round 1, Round 2, Mop-Up round and physical document verification.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

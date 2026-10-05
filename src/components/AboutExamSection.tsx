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
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-sky-50/60 border border-sky-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-sky-200">
              <BookOpen className="w-3 h-3" />
              <span>Comprehensive Information Hub</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-sky-950">
              3. About NEET Exam
            </h1>
            <p className="mt-0.5 text-xs text-sky-600 max-w-3xl">
              Everything you need to know about the National Eligibility cum Entrance Test (NEET-UG), Exam Pattern, Official Syllabus, and Medical Colleges Seat Matrix.
            </p>
          </div>
        </div>

        {/* Sub-tabs for Section 3 */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
          {[
            { id: 'what-is-neet', label: 'What is NEET?' },
            { id: 'pattern', label: 'Exam Pattern & Rules' },
            { id: 'syllabus', label: 'Official Syllabus Breakdown' },
            { id: 'colleges', label: 'Colleges, Seats & Cut-offs' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. WHAT IS NEET? */}
      {activeTab === 'what-is-neet' && (
        <div className="bg-sky-50/60 border border-sky-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-sky-950 flex items-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <span>What is NEET?</span>
            </h2>
            <p className="text-xs text-sky-700 mt-1.5 leading-relaxed">
              <strong>National Eligibility cum Entrance Test (NEET-UG)</strong> is the single all-India entrance examination for admission into undergraduate medical courses across India, including <strong>MBBS, BDS, BAMS, BHMS, BUMS, BYNS, and BSMS</strong>, in all government, private, deemed medical universities and premier institutes like AIIMS and JIPMER.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-0.5">Conducting Body</div>
              <div className="text-xs font-bold text-sky-950">National Testing Agency</div>
              <p className="text-[11px] text-sky-600 mt-1">Conducted under directives of National Medical Commission (NMC) & MoHFW.</p>
            </div>

            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-0.5">Total MBBS Seats</div>
              <div className="text-xs font-bold text-sky-950">108,000+ Seats</div>
              <p className="text-[11px] text-sky-600 mt-1">Across 700+ Government and Private Medical Colleges in India.</p>
            </div>

            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-0.5">Annual Applicants</div>
              <div className="text-xs font-bold text-sky-950">2.4+ Million Aspirants</div>
              <p className="text-[11px] text-sky-600 mt-1">Largest single competitive exam in the world.</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXAM PATTERN */}
      {activeTab === 'pattern' && (
        <div className="bg-sky-50/60 border border-sky-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-sky-950 flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Exam Pattern & Official Rules</span>
            </h2>
            <p className="text-xs text-sky-600 mt-0.5">
              Strict 45 questions per subject (180 total questions, 720 marks).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-sky-600 uppercase">Total Duration</div>
              <div className="text-base font-bold text-sky-950 mt-0.5">180 Mins</div>
              <div className="text-[11px] text-sky-600 font-mono">(3 Hours)</div>
            </div>
            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-sky-600 uppercase">Total Questions</div>
              <div className="text-base font-bold text-sky-950 mt-0.5">180 Questions</div>
              <div className="text-[11px] text-emerald-600 font-mono">(All 180 Compulsory)</div>
            </div>
            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-sky-600 uppercase">Maximum Marks</div>
              <div className="text-base font-bold text-sky-950 mt-0.5">720 Marks</div>
              <div className="text-[11px] text-sky-600 font-mono">180 Questions x 4 Marks</div>
            </div>
            <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
              <div className="text-[10px] font-bold text-sky-600 uppercase">Marking Scheme</div>
              <div className="text-base font-bold text-sky-950 mt-0.5">+4 / -1 / 0</div>
              <div className="text-[11px] text-sky-700 font-mono">Negative marking applies</div>
            </div>
          </div>

          {/* Section Breakdown Table */}
          <div className="overflow-x-auto border border-sky-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-sky-50 text-sky-800 font-bold uppercase tracking-wider border-b border-sky-200">
                <tr>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Questions</th>
                  <th className="p-3.5">Total Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sky-800">
                <tr className="hover:bg-sky-50">
                  <td className="p-3.5 font-semibold text-sky-950">Physics</td>
                  <td className="p-3.5 font-medium">45 Questions</td>
                  <td className="p-3.5 font-bold text-sky-950">180 Marks</td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="p-3.5 font-semibold text-sky-950">Chemistry</td>
                  <td className="p-3.5 font-medium">45 Questions</td>
                  <td className="p-3.5 font-bold text-sky-950">180 Marks</td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="p-3.5 font-semibold text-sky-950">Botany</td>
                  <td className="p-3.5 font-medium">45 Questions</td>
                  <td className="p-3.5 font-bold text-sky-950">180 Marks</td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="p-3.5 font-semibold text-sky-950">Zoology</td>
                  <td className="p-3.5 font-medium">45 Questions</td>
                  <td className="p-3.5 font-bold text-sky-950">180 Marks</td>
                </tr>
                <tr className="bg-sky-50/80 font-bold text-sky-950 border-t border-sky-200">
                  <td className="p-3.5">Total (PCB)</td>
                  <td className="p-3.5">180 Questions</td>
                  <td className="p-3.5 text-sky-700 font-extrabold">720 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. SYLLABUS */}
      {activeTab === 'syllabus' && (
        <div className="bg-sky-50/60 border border-sky-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-sky-950 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-sky-600" />
              <span>Official Syllabus & Chapter Weightages</span>
            </h2>
            <p className="text-xs text-sky-600 mt-0.5">
              Physics, Chemistry and Biology based on the latest official NMC updated syllabus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Physics */}
            <div className="p-6 rounded-lg bg-sky-50 border border-sky-200 space-y-2">
              <h3 className="text-xs font-bold text-sky-950 flex items-center justify-between pb-2 border-b border-sky-200">
                <span>Physics Syllabus</span>
                <span className="text-[11px] font-mono text-sky-600">180 Marks</span>
              </h3>
              <ul className="text-xs text-sky-700 space-y-1.5 pt-1">
                <li>&bull; Mechanics & Laws of Motion (22%)</li>
                <li>&bull; Electrodynamics & Current Electricity (24%)</li>
                <li>&bull; Optics: Ray & Wave Optics (10%)</li>
                <li>&bull; Modern Physics & Semiconductor (14%)</li>
                <li>&bull; Thermodynamics & Kinetic Theory (12%)</li>
                <li>&bull; Oscillations & Waves (8%)</li>
                <li>&bull; Gravitation & Bulk Properties (10%)</li>
              </ul>
            </div>

            {/* Chemistry */}
            <div className="p-6 rounded-lg bg-sky-50 border border-sky-200 space-y-2">
              <h3 className="text-xs font-bold text-sky-950 flex items-center justify-between pb-2 border-b border-sky-200">
                <span>Chemistry Syllabus</span>
                <span className="text-[11px] font-mono text-sky-600">180 Marks</span>
              </h3>
              <ul className="text-xs text-sky-700 space-y-1.5 pt-1">
                <li>&bull; Organic Chemistry (Mechanisms & Named Rxns) (34%)</li>
                <li>&bull; Chemical Bonding & Periodic Table (16%)</li>
                <li>&bull; Coordination Compounds & d/f Block (14%)</li>
                <li>&bull; Physical Chemistry (Kinetics, Electro, Thermo) (26%)</li>
                <li>&bull; Solutions & Equilibrium (10%)</li>
              </ul>
            </div>

            {/* Biology */}
            <div className="p-6 rounded-lg bg-sky-50 border border-sky-200 space-y-2">
              <h3 className="text-xs font-bold text-sky-950 flex items-center justify-between pb-2 border-b border-sky-200">
                <span>Biology Syllabus</span>
                <span className="text-[11px] font-mono text-sky-600">360 Marks (50%)</span>
              </h3>
              <ul className="text-xs text-sky-700 space-y-1.5 pt-1">
                <li>&bull; Genetics & Molecular Inheritance (20%)</li>
                <li>&bull; Human Physiology Systems (18%)</li>
                <li>&bull; Ecology and Environment (14%)</li>
                <li>&bull; Plant Physiology (Photosynthesis & Respiration) (12%)</li>
                <li>&bull; Cell Biology & Biomolecules (10%)</li>
                <li>&bull; Human Reproduction & Health (10%)</li>
                <li>&bull; Biotechnology & Applications (10%)</li>
                <li>&bull; Diversity in Living World (6%)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. COLLEGES & SEATS */}
      {activeTab === 'colleges' && (
        <div className="bg-sky-50/60 border border-sky-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-4">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-sky-950 flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-sky-600" />
                <span>Colleges, Seats, Cut-offs & Counselling</span>
              </h2>
              <p className="text-xs text-sky-600 mt-0.5">
                Government and private colleges, AIIMS, seat matrix, cut-offs and counselling information.
              </p>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 custom-scrollbar">
              {['All', 'AIIMS', 'Government', 'Private'].map(type => (
                <button
                  key={type}
                  onClick={() => setCollegeTypeFilter(type)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                    collegeTypeFilter === type
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search college or state..."
                value={collegeSearch}
                onChange={e => setCollegeSearch(e.target.value)}
                className="w-full sm:w-64 p-3 rounded bg-sky-50 border border-sky-300 text-xs text-sky-950 placeholder-stone-400 focus:bg-sky-50/60 focus:border-sky-500"
              />
            </div>
          </div>

          {/* Colleges Table */}
          <div className="overflow-x-auto border border-sky-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-sky-50 text-sky-800 font-bold uppercase tracking-wider border-b border-sky-200">
                <tr>
                  <th className="p-3.5">NIRF</th>
                  <th className="p-3.5">Medical College & Location</th>
                  <th className="p-3.5">Type</th>
                  <th className="p-3.5">Seats</th>
                  <th className="p-3.5">Gen Cut-off (AIR)</th>
                  <th className="p-3.5">Approx Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sky-800">
                {filteredColleges.map(clg => (
                  <tr key={clg.id} className="hover:bg-sky-50">
                    <td className="p-3.5 font-bold text-sky-600 font-mono">#{clg.nirfRank}</td>
                    <td className="p-3.5">
                      <div className="font-bold text-sky-950">{clg.name}</div>
                      <div className="text-[11px] text-sky-600 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{clg.location}</span>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                        {clg.type}
                      </span>
                    </td>
                    <td className="p-3.5 font-medium">{clg.totalSeats} Seats</td>
                    <td className="p-3.5 font-bold text-emerald-600 font-mono">AIR &le; {clg.closingRankGen}</td>
                    <td className="p-3.5 text-sky-700 font-mono">{clg.approxFeePerYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Counselling Roadmap Guide */}
          <div className="p-6 rounded-lg bg-sky-50 border border-sky-200 space-y-3">
            <h3 className="text-xs font-bold text-sky-950">Medical Counselling Process (MCC & State Quota)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4.5 text-xs">
              <div className="p-3 rounded bg-sky-50/60 border border-sky-200 shadow-xs">
                <div className="font-bold text-sky-950 mb-0.5">1. AIQ 15% (MCC)</div>
                <p className="text-[11px] text-sky-600">All India Quota for AIIMS, JIPMER, Deemed & 15% Central Govt seats.</p>
              </div>
              <div className="p-3 rounded bg-sky-50/60 border border-sky-200 shadow-xs">
                <div className="font-bold text-sky-950 mb-0.5">2. State 85% Quota</div>
                <p className="text-[11px] text-sky-600">State Domicile quota counselling conducted by respective state authority.</p>
              </div>
              <div className="p-3 rounded bg-sky-50/60 border border-sky-200 shadow-xs">
                <div className="font-bold text-sky-950 mb-0.5">3. Choice Filling</div>
                <p className="text-[11px] text-sky-600">Preference locking for colleges based on previous year closing ranks.</p>
              </div>
              <div className="p-3 rounded bg-sky-50/60 border border-sky-200 shadow-xs">
                <div className="font-bold text-sky-950 mb-0.5">4. Seat Allotment</div>
                <p className="text-[11px] text-sky-600">Round 1, Round 2, Mop-Up round and physical document verification.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


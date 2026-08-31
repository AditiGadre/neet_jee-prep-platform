import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  Clock,
  Award,
  Layers,
  Building2,
  CheckCircle2,
  AlertCircle,
  FileText,
  MapPin,
  GraduationCap,
  Sparkles,
  Search
} from 'lucide-react';
import { COLLEGES_DATA } from '../data/mockData';

export const AboutExamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'what-is-neet' | 'pattern' | 'syllabus' | 'other-courses' | 'colleges'>('what-is-neet');
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
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
              <BookOpen className="w-3 h-3" />
              <span>Comprehensive Information Hub</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900">
              3. About NEET Exam
            </h1>
            <p className="mt-0.5 text-xs text-gray-500 max-w-3xl">
              Everything you need to know about the National Eligibility cum Entrance Test (NEET-UG), Exam Pattern, Official Syllabus, Other Competitive Courses, and Medical Colleges Seat Matrix.
            </p>
          </div>
        </div>

        {/* Sub-tabs for Section 3 */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
          {[
            { id: 'what-is-neet', label: 'What is NEET?' },
            { id: 'pattern', label: 'Exam Pattern & Rules' },
            { id: 'syllabus', label: 'Official Syllabus Breakdown' },
            { id: 'other-courses', label: 'Other Courses (JEE/CUET/Olympiads)' },
            { id: 'colleges', label: 'Colleges, Seats & Cut-offs' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. WHAT IS NEET? */}
      {activeTab === 'what-is-neet' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>What is NEET?</span>
            </h2>
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
              <strong>National Eligibility cum Entrance Test (NEET-UG)</strong> is the single all-India entrance examination for admission into undergraduate medical courses across India, including <strong>MBBS, BDS, BAMS, BHMS, BUMS, BYNS, and BSMS</strong>, in all government, private, deemed medical universities and premier institutes like AIIMS and JIPMER.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-0.5">Conducting Body</div>
              <div className="text-xs font-bold text-gray-900">National Testing Agency</div>
              <p className="text-[11px] text-gray-500 mt-1">Conducted under directives of National Medical Commission (NMC) & MoHFW.</p>
            </div>

            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-0.5">Total MBBS Seats</div>
              <div className="text-xs font-bold text-gray-900">108,000+ Seats</div>
              <p className="text-[11px] text-gray-500 mt-1">Across 700+ Government and Private Medical Colleges in India.</p>
            </div>

            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-0.5">Annual Applicants</div>
              <div className="text-xs font-bold text-gray-900">2.4+ Million Aspirants</div>
              <p className="text-[11px] text-gray-500 mt-1">Largest single competitive exam in the world.</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXAM PATTERN */}
      {activeTab === 'pattern' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Exam Pattern & Latest Guidelines</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Subjects, marking scheme, duration and latest guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Total Duration</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">200 Minutes</div>
              <div className="text-[11px] text-blue-600 font-mono">(3 Hours 20 Mins)</div>
            </div>
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Total Questions</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">200 Questions</div>
              <div className="text-[11px] text-emerald-600 font-mono">(Attempt Any 180)</div>
            </div>
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Maximum Marks</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">720 Marks</div>
              <div className="text-[11px] text-gray-500 font-mono">180 Questions x 4 Marks</div>
            </div>
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Marking Scheme</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">+4 / -1 / 0</div>
              <div className="text-[11px] text-amber-700 font-mono">Negative marking applies</div>
            </div>
          </div>

          {/* Section Breakdown Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-50 text-gray-700 font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="p-2.5">Subject</th>
                  <th className="p-2.5">Section A (Compulsory)</th>
                  <th className="p-2.5">Section B (Attempt any 10 of 15)</th>
                  <th className="p-2.5">Total Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-semibold text-gray-900">Physics</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-semibold text-gray-900">Chemistry</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-semibold text-gray-900">Botany</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-semibold text-gray-900">Zoology</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. SYLLABUS */}
      {activeTab === 'syllabus' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Official Syllabus & Chapter Weightages</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Physics, Chemistry and Biology based on the latest official NMC updated syllabus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Physics */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-xs font-bold text-gray-900 flex items-center justify-between pb-2 border-b border-gray-200">
                <span>Physics Syllabus</span>
                <span className="text-[11px] font-mono text-gray-500">180 Marks</span>
              </h3>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-1">
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
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-xs font-bold text-gray-900 flex items-center justify-between pb-2 border-b border-gray-200">
                <span>Chemistry Syllabus</span>
                <span className="text-[11px] font-mono text-gray-500">180 Marks</span>
              </h3>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-1">
                <li>&bull; Organic Chemistry (Mechanisms & Named Rxns) (34%)</li>
                <li>&bull; Chemical Bonding & Periodic Table (16%)</li>
                <li>&bull; Coordination Compounds & d/f Block (14%)</li>
                <li>&bull; Physical Chemistry (Kinetics, Electro, Thermo) (26%)</li>
                <li>&bull; Solutions & Equilibrium (10%)</li>
              </ul>
            </div>

            {/* Biology */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-xs font-bold text-gray-900 flex items-center justify-between pb-2 border-b border-gray-200">
                <span>Biology Syllabus</span>
                <span className="text-[11px] font-mono text-gray-500">360 Marks (50%)</span>
              </h3>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-1">
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

      {/* 4. OTHER COURSES */}
      {activeTab === 'other-courses' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Other Competitive Exam Courses</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              JEE Main, JEE Advanced, CUET, Olympiads, Foundation and Board preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: 'JEE Main',
                desc: 'National engineering entrance for NITs, IIITs & CFTIs with 300 marks CBT format.',
                tag: 'Engineering'
              },
              {
                title: 'JEE Advanced',
                desc: 'Elite entrance for Indian Institutes of Technology (IITs) with multi-concept analytical tests.',
                tag: 'IIT Premier'
              },
              {
                title: 'CUET (UG)',
                desc: 'Central Universities Common Entrance Test for DU, BHU, JNU undergraduate admissions.',
                tag: 'Central Universities'
              },
              {
                title: 'Olympiads (NSEP, NSEC, NSEB)',
                desc: 'National Science Olympiads & International Olympiad selection camp training.',
                tag: 'Scholarship'
              },
              {
                title: 'Foundation (Class 9 & 10)',
                desc: 'Early conceptual grooming in Mathematics, Physics & Biology for future top rankers.',
                tag: 'Early Edge'
              },
              {
                title: 'Board Exam Preparation (Class 11 & 12)',
                desc: 'CBSE / State Board subjective answer writing, derivations, and numerical formats.',
                tag: 'Academic Mastery'
              }
            ].map((course, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {course.tag}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-gray-900">{course.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. COLLEGES & SEATS */}
      {activeTab === 'colleges' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Colleges, Seats, Cut-offs & Counselling</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
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
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                className="w-full sm:w-64 p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* Colleges Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-50 text-gray-700 font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="p-2.5">NIRF</th>
                  <th className="p-2.5">Medical College & Location</th>
                  <th className="p-2.5">Type</th>
                  <th className="p-2.5">Seats</th>
                  <th className="p-2.5">Gen Cut-off (AIR)</th>
                  <th className="p-2.5">Approx Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredColleges.map(clg => (
                  <tr key={clg.id} className="hover:bg-gray-50">
                    <td className="p-2.5 font-bold text-amber-600 font-mono">#{clg.nirfRank}</td>
                    <td className="p-2.5">
                      <div className="font-bold text-gray-900">{clg.name}</div>
                      <div className="text-[11px] text-gray-500 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span>{clg.location}</span>
                      </div>
                    </td>
                    <td className="p-2.5">
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {clg.type}
                      </span>
                    </td>
                    <td className="p-2.5 font-medium">{clg.totalSeats} Seats</td>
                    <td className="p-2.5 font-bold text-emerald-600 font-mono">AIR &le; {clg.closingRankGen}</td>
                    <td className="p-2.5 text-gray-600 font-mono">{clg.approxFeePerYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Counselling Roadmap Guide */}
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
            <h3 className="text-xs font-bold text-gray-900">Medical Counselling Process (MCC & State Quota)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="p-3 rounded bg-white border border-gray-200 shadow-xs">
                <div className="font-bold text-gray-900 mb-0.5">1. AIQ 15% (MCC)</div>
                <p className="text-[11px] text-gray-500">All India Quota for AIIMS, JIPMER, Deemed & 15% Central Govt seats.</p>
              </div>
              <div className="p-3 rounded bg-white border border-gray-200 shadow-xs">
                <div className="font-bold text-gray-900 mb-0.5">2. State 85% Quota</div>
                <p className="text-[11px] text-gray-500">State Domicile quota counselling conducted by respective state authority.</p>
              </div>
              <div className="p-3 rounded bg-white border border-gray-200 shadow-xs">
                <div className="font-bold text-gray-900 mb-0.5">3. Choice Filling</div>
                <p className="text-[11px] text-gray-500">Preference locking for colleges based on previous year closing ranks.</p>
              </div>
              <div className="p-3 rounded bg-white border border-gray-200 shadow-xs">
                <div className="font-bold text-gray-900 mb-0.5">4. Seat Allotment</div>
                <p className="text-[11px] text-gray-500">Round 1, Round 2, Mop-Up round and physical document verification.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

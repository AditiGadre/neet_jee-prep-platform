import React, { useState } from 'react';
import {
  TvMinimalPlay,
  Video,
  FileCheck,
  CalendarCheck,
  UserCheck,
  CheckCircle2,
  Star,
  Users,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Play,
  Download,
  X,
  Volume2,
  Maximize2,
  Filter,
  Check,
  FileText
} from 'lucide-react';
import { OnlineCourse } from '../types';
import { CLASSROOM_LECTURES_DATA, ClassroomLecture } from '../data/coursesData';

interface OnlineCoursesSectionProps {
  courses: OnlineCourse[];
  onEnroll: (course: OnlineCourse) => void;
}

export const OnlineCoursesSection: React.FC<OnlineCoursesSectionProps> = ({
  courses,
  onEnroll
}) => {
  const [activeView, setActiveView] = useState<'lectures' | 'batches'>('lectures');
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | 'Biology' | 'Physics' | 'Chemistry'>('ALL');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [activeLectureForWatch, setActiveLectureForWatch] = useState<ClassroomLecture | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<string>('1x');
  const [videoProgress, setVideoProgress] = useState<number>(35);
  const [enrolledSuccessId, setEnrolledSuccessId] = useState<string | null>(null);

  const batchFilters = ['all', 'Target Batch', 'Masterclass', 'Classroom Test Series', 'Dropper Batch', 'Foundation', 'Crash Course'];

  const filteredCourses = courses.filter(
    c => selectedBatch === 'all' || c.batchType === selectedBatch
  );

  const filteredLectures = CLASSROOM_LECTURES_DATA.filter(
    lec => selectedSubject === 'ALL' || lec.subject === selectedSubject
  );

  const handleEnrollClick = (course: OnlineCourse) => {
    setEnrolledSuccessId(course.id);
    onEnroll(course);
    setTimeout(() => {
      setEnrolledSuccessId(null);
    }, 4000);
  };

  return (
    <div className="space-y-5">
      {/* Top Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <TvMinimalPlay className="w-3.5 h-3.5 text-blue-600" />
              <span>Official NEETcbt Classroom Lectures & Target Batches</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Classroom Lectures & Academic Programs
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Daily physical classroom lectures, 4K video replay archives, and proctored hybrid batches. Taught by senior faculty from AIIMS, IITs, and top medical faculties with NCERT line-by-line coverage.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live & 4K Archives Active
            </span>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">4K Classroom Lectures</div>
              <div className="text-[10px] text-slate-500 font-mono">Full Video Archive</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Daily DPP & Notes</div>
              <div className="text-[10px] text-slate-500 font-mono">NCERT Line-by-Line</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Sunday Mocks</div>
              <div className="text-[10px] text-slate-500 font-mono">OMR + Digital CBT</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-700 shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">IIT/AIIMS Mentors</div>
              <div className="text-[10px] text-slate-500 font-mono">Sub-10m Doubt Desk</div>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs: Classroom Video Lectures vs Structured Batches */}
        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => setActiveView('lectures')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeView === 'lectures'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Classroom Video Lectures Archive</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white font-mono">
              {CLASSROOM_LECTURES_DATA.length} Lectures
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('batches')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeView === 'batches'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Target Batches & Classroom Programs</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-700 font-mono">
              {courses.length} Batches
            </span>
          </button>
        </div>
      </div>

      {/* VIEW 1: CLASSROOM VIDEO LECTURES ARCHIVE */}
      {activeView === 'lectures' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Subject Filter Bar */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-blue-600" /> Subject:
              </span>
              {(['ALL', 'Biology', 'Physics', 'Chemistry'] as const).map(subj => (
                <button
                  key={subj}
                  onClick={() => setSelectedSubject(subj)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    selectedSubject === subj
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {subj === 'ALL' ? 'All Subjects' : subj}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <strong className="text-slate-900">{filteredLectures.length}</strong> Classroom Lectures
            </div>
          </div>

          {/* Lectures Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLectures.map(lec => (
              <div
                key={lec.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail & Video Badge */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={lec.thumbnailUrl}
                      alt={lec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Subject Tag */}
                    <span
                      className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-xs ${
                        lec.subject === 'Biology'
                          ? 'bg-emerald-600'
                          : lec.subject === 'Physics'
                          ? 'bg-blue-600'
                          : 'bg-amber-600'
                      }`}
                    >
                      {lec.subject}
                    </span>

                    {/* Duration */}
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" /> {lec.duration}
                    </span>

                    {/* Play Button Overlay */}
                    <button
                      type="button"
                      onClick={() => setActiveLectureForWatch(lec)}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                      title="Watch Classroom Lecture"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>

                  {/* Lecture Details */}
                  <div className="p-4 space-y-2.5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                        {lec.chapter}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2 mt-0.5 leading-snug">
                        {lec.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                      <div>
                        <span className="font-semibold text-slate-900">{lec.faculty}</span>
                        <p className="text-[10px] text-slate-400">{lec.facultyDesignation}</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                        {lec.batch}
                      </span>
                    </div>

                    {/* Key Topics */}
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Core Topics Covered:</div>
                      <div className="flex flex-wrap gap-1">
                        {lec.keyTopics.slice(0, 3).map((topic, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                          >
                            • {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveLectureForWatch(lec)}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-xs transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Classroom Lecture</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: TARGET BATCHES & CLASSROOM PROGRAMS */}
      {activeView === 'batches' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Filter Tabs */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-2 overflow-x-auto shadow-xs">
            {batchFilters.map(batch => (
              <button
                key={batch}
                onClick={() => setSelectedBatch(batch)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedBatch === batch
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {batch === 'all' ? 'All Programs' : batch}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredCourses.map(course => {
              const isEnrolledSuccess = enrolledSuccessId === course.id;

              return (
                <div
                  key={course.id}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs overflow-hidden flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* Card Header */}
                    <div className="p-5 border-b border-slate-100 bg-slate-50/60">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                          {course.batchType}
                        </span>
                        {course.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                            ⭐ {course.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {course.title}
                      </h3>

                      <div className="flex items-center space-x-3 text-xs text-slate-500 mt-2 font-mono">
                        <span className="flex items-center text-amber-600 font-semibold">
                          <Star className="w-3 h-3 fill-current mr-1" />
                          {course.rating}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1 text-slate-400" />
                          {course.enrolledCount.toLocaleString()} Enrolled
                        </span>
                      </div>

                      <div className="mt-3 flex items-baseline space-x-2">
                        <span className="text-xl font-black text-slate-900">{course.price}</span>
                        <span className="text-xs text-slate-400 line-through font-mono">{course.originalPrice}</span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono">
                          {course.discount}
                        </span>
                      </div>
                    </div>

                    {/* What is Included */}
                    <div className="p-5 space-y-3.5">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-blue-600" />
                          <span>Course Deliverables</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li className="flex items-start space-x-2">
                            <Video className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800">Classroom Lectures:</strong>{' '}
                              {course.includes.liveClasses}
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800">Assignments & Notes:</strong>{' '}
                              {course.includes.assignments}
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CalendarCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800">Sunday Mocks:</strong>{' '}
                              {course.includes.weeklyTests}
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <UserCheck className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-800">1-on-1 Mentorship:</strong>{' '}
                              {course.includes.mentorSupport}
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Top Faculty */}
                      <div className="pt-3 border-t border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Faculty Mentors
                        </div>
                        <div className="space-y-1.5">
                          {course.faculty.map((fac, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                              <div>
                                <span className="font-semibold text-slate-800">{fac.name}</span>
                                <span className="text-slate-500 text-[11px] ml-1">({fac.subject})</span>
                              </div>
                              <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 font-medium">
                                {fac.almaMater}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="p-5 pt-0">
                    {isEnrolledSuccess ? (
                      <div className="w-full py-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5 animate-in fade-in">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Enrolled Successfully! Access Unlocked</span>
                      </div>
                    ) : (
                      <button
                        id={`btn-enroll-${course.id}`}
                        onClick={() => handleEnrollClick(course)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition cursor-pointer"
                      >
                        <span>Enroll in {course.batchType}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* INTERACTIVE CLASSROOM LECTURE PLAYER MODAL */}
      {activeLectureForWatch && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden text-white my-auto animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
              <div className="flex items-center space-x-3">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    activeLectureForWatch.subject === 'Biology'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : activeLectureForWatch.subject === 'Physics'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {activeLectureForWatch.subject}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {activeLectureForWatch.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeLectureForWatch.faculty} • {activeLectureForWatch.chapter}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveLectureForWatch(null)}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated 4K Video Player Interface */}
            <div className="relative aspect-video w-full bg-black flex flex-col justify-between overflow-hidden">
              <img
                src={activeLectureForWatch.thumbnailUrl}
                alt={activeLectureForWatch.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

              {/* Top Watermark / Status */}
              <div className="relative z-10 p-4 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider">
                    ● 4K Classroom
                  </span>
                  <span className="text-slate-300 font-mono text-[11px]">
                    NCERT Line-by-Line Replay
                  </span>
                </div>
                <div className="text-slate-400 text-xs font-mono">
                  Duration: {activeLectureForWatch.duration}
                </div>
              </div>

              {/* Center Play / Pause Indicator */}
              <div className="relative z-10 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 cursor-pointer"
                >
                  {isPlaying ? (
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-6 bg-white rounded-xs" />
                      <div className="w-2 h-6 bg-white rounded-xs" />
                    </div>
                  ) : (
                    <Play className="w-7 h-7 fill-current ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-2">
                {/* Timeline Progress Bar */}
                <div
                  className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setVideoProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-white cursor-pointer"
                    >
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <span className="text-slate-500 font-mono text-[11px]">
                      {Math.round((videoProgress / 100) * 80)}:15 / {activeLectureForWatch.duration}
                    </span>
                    <Volume2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="flex items-center space-x-2.5">
                    {/* Playback speed selector */}
                    <div className="flex items-center space-x-1 text-[11px] font-mono">
                      <span className="text-slate-500">Speed:</span>
                      {['1x', '1.25x', '1.5x', '2x'].map(spd => (
                        <button
                          key={spd}
                          onClick={() => setPlaybackSpeed(spd)}
                          className={`px-1.5 py-0.5 rounded text-[10px] cursor-pointer ${
                            playbackSpeed === spd
                              ? 'bg-blue-600 text-white font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {spd}
                        </button>
                      ))}
                    </div>
                    <Maximize2 className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lecture Notes & High-Yield Breakdown */}
            <div className="p-5 sm:p-6 space-y-4 bg-slate-900">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" /> Key Concepts & NCERT Line Citations
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    High-yield summary notes taught in this classroom session.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Lecture Notes PDF downloaded successfully (DOB encrypted).')}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition cursor-pointer self-start sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Notes PDF</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeLectureForWatch.keyTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-2 text-xs text-slate-300"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

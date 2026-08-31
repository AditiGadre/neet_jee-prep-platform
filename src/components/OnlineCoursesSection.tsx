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
  BookOpen
} from 'lucide-react';
import { OnlineCourse } from '../types';

interface OnlineCoursesSectionProps {
  courses: OnlineCourse[];
  onEnroll: (course: OnlineCourse) => void;
}

export const OnlineCoursesSection: React.FC<OnlineCoursesSectionProps> = ({
  courses,
  onEnroll
}) => {
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [enrolledSuccessId, setEnrolledSuccessId] = useState<string | null>(null);

  const batchFilters = ['all', 'Target Batch', 'Masterclass', 'Classroom Test Series', 'Dropper Batch', 'Foundation', 'Crash Course'];

  const filteredCourses = courses.filter(
    c => selectedBatch === 'all' || c.batchType === selectedBatch
  );

  const handleEnrollClick = (course: OnlineCourse) => {
    setEnrolledSuccessId(course.id);
    onEnroll(course);
    setTimeout(() => {
      setEnrolledSuccessId(null);
    }, 4000);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <TvMinimalPlay className="w-3 h-3 text-amber-600" /> NEETcbt Programs 2026
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Target Batches & Online Courses
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Target Batch (Ascend & Vital), Masterclass in Biology by Dr. NK Sharma, Classroom Test Series (CTS), and Dropper Batches with NCERT Line-by-Line practice and sub-10 minute doubt resolution.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded font-bold">
              ● Target Batch 2026 Admissions Open
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid from Content Document */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-blue-100 text-blue-700">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Live & Recorded</div>
              <div className="text-[10px] text-gray-500 font-mono">Classes with 4K Replay</div>
            </div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-green-100 text-green-700">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Daily Assignments</div>
              <div className="text-[10px] text-gray-500 font-mono">Graded with Video Hints</div>
            </div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-amber-100 text-amber-700">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Weekly Tests</div>
              <div className="text-[10px] text-gray-500 font-mono">Sunday All-India CBT</div>
            </div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-purple-100 text-purple-700">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Mentor Support</div>
              <div className="text-[10px] text-gray-500 font-mono">1-on-1 Doubt & Strategy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center space-x-2 overflow-x-auto shadow-xs custom-scrollbar">
        {batchFilters.map(batch => (
          <button
            key={batch}
            onClick={() => setSelectedBatch(batch)}
            className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedBatch === batch
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {batch === 'all' ? 'All Batches' : batch}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {filteredCourses.map(course => {
          const isEnrolledSuccess = enrolledSuccessId === course.id;

          return (
            <div
              key={course.id}
              className="rounded-lg bg-white border border-gray-200 hover:border-gray-300 shadow-xs overflow-hidden flex flex-col justify-between transition-all"
            >
              <div>
                {/* Card Header */}
                <div className="p-4 border-b border-gray-100 bg-gray-50/50">
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

                  <h3 className="text-sm font-bold text-gray-900">
                    {course.title}
                  </h3>

                  <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1 font-mono">
                    <span className="flex items-center text-amber-600 font-semibold">
                      <Star className="w-3 h-3 fill-current mr-1" />
                      {course.rating}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1 text-gray-400" />
                      {course.enrolledCount.toLocaleString()} Enrolled
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-xs text-gray-400 line-through font-mono">{course.originalPrice}</span>
                    <span className="text-[11px] font-bold text-green-700 bg-green-50 px-1.5 py-0.2 rounded border border-green-200 font-mono">
                      {course.discount}
                    </span>
                  </div>
                </div>

                {/* What is Included (Exact 5 Features from Doc) */}
                <div className="p-4 space-y-3">
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                      <span>Course Deliverables</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      <li className="flex items-start space-x-2">
                        <Video className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800">Live & Recorded:</strong>{' '}
                          {course.includes.liveClasses}
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileCheck className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800">Assignments:</strong>{' '}
                          {course.includes.assignments}
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CalendarCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800">Weekly Tests:</strong>{' '}
                          {course.includes.weeklyTests}
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800">Mentor Support:</strong>{' '}
                          {course.includes.mentorSupport}
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Top Star Faculty */}
                  <div className="pt-2.5 border-t border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Faculty Mentors
                    </div>
                    <div className="space-y-1">
                      {course.faculty.map((fac, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs py-1 px-2 rounded bg-gray-50 border border-gray-200">
                          <div>
                            <span className="font-semibold text-gray-800">{fac.name}</span>
                            <span className="text-gray-500 text-[11px] ml-1">({fac.subject})</span>
                          </div>
                          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-1 py-0.2 rounded border border-blue-200">
                            {fac.almaMater}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                {isEnrolledSuccess ? (
                  <div className="w-full py-2 rounded bg-green-50 border border-green-300 text-green-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span>Enrolled Successfully! Access Unlocked</span>
                  </div>
                ) : (
                  <button
                    id={`btn-enroll-${course.id}`}
                    onClick={() => handleEnrollClick(course)}
                    className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors active:scale-98"
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
  );
};

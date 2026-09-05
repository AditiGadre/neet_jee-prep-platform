import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  User,
  Users,
  Phone,
  Mail,
  Award,
  CheckCircle2,
  Lock,
  ArrowRight,
  GraduationCap,
  Calendar,
  AlertCircle,
  Laptop,
  Smartphone,
  KeyRound
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  checkDeviceAuthorization,
  deauthorizeDevice,
  ActiveDevice
} from '../utils/deviceSessionManager';

export interface EnrolledStudent {
  studentName: string;
  parentName: string;
  parentPhone: string;
  studentPhone: string;
  caste: 'General / Open' | 'OBC-NCL' | 'SC (Scheduled Caste)' | 'ST (Scheduled Tribe)' | 'GEN-EWS';
  email: string;
  dob: string; // YYYY-MM-DD
  dobPin: string; // DDMMYYYY for PDF password
  targetYear: '2025' | '2026' | '2027';
  enrolledAt: string;
  rollNumber: string;
  devices: string[];
}

interface EnrollmentGateProps {
  onEnrollSuccess: (student: EnrolledStudent) => void;
}

export const EnrollmentGate: React.FC<EnrollmentGateProps> = ({ onEnrollSuccess }) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [caste, setCaste] = useState<EnrolledStudent['caste']>('General / Open');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('2006-08-15');
  const [targetYear, setTargetYear] = useState<EnrolledStudent['targetYear']>('2026');
  const [agreedTerms, setAgreedTerms] = useState(true);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2-Device Concurrency Challenge State
  const [deviceLimitError, setDeviceLimitError] = useState<{
    show: boolean;
    devices: ActiveDevice[];
  } | null>(null);

  const formatDobToPin = (dateStr: string): string => {
    // Convert YYYY-MM-DD -> DDMMYYYY
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}${parts[1]}${parts[0]}`;
    }
    return '15082006';
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!studentName.trim()) {
      newErrors.studentName = 'Student full name is required';
    } else if (studentName.trim().length < 3) {
      newErrors.studentName = 'Please enter a valid full name (min 3 characters)';
    }

    if (!parentName.trim()) {
      newErrors.parentName = 'Parent / Guardian name is required';
    } else if (parentName.trim().length < 3) {
      newErrors.parentName = 'Please enter a valid parent name (min 3 characters)';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanParentPhone = parentPhone.replace(/\D/g, '');
    if (!cleanParentPhone) {
      newErrors.parentPhone = 'Parent contact number is required';
    } else if (!phoneRegex.test(cleanParentPhone)) {
      newErrors.parentPhone = 'Enter valid 10-digit Indian mobile number (starts with 6-9)';
    }

    const cleanStudentPhone = studentPhone.replace(/\D/g, '');
    if (!cleanStudentPhone) {
      newErrors.studentPhone = 'Student contact number is required';
    } else if (!phoneRegex.test(cleanStudentPhone)) {
      newErrors.studentPhone = 'Enter valid 10-digit Indian mobile number (starts with 6-9)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email ID is required';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!dob) {
      newErrors.dob = 'Date of birth is required for PDF password protection';
    }

    if (!agreedTerms) {
      newErrors.terms = 'Please accept the enrollment confirmation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // 2-Device Concurrency Verification
    const authCheck = checkDeviceAuthorization(email.trim().toLowerCase());
    if (!authCheck.authorized) {
      setIsSubmitting(false);
      setDeviceLimitError({
        show: true,
        devices: authCheck.activeDevices
      });
      return;
    }

    const rollNo = 'NCBT-2026-' + Math.floor(100000 + Math.random() * 900000);
    const dobPin = formatDobToPin(dob);

    const studentData: EnrolledStudent = {
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      parentPhone: parentPhone.replace(/\D/g, ''),
      studentPhone: studentPhone.replace(/\D/g, ''),
      caste,
      email: email.trim().toLowerCase(),
      dob,
      dobPin,
      targetYear,
      enrolledAt: new Date().toISOString(),
      rollNumber: rollNo,
      devices: [authCheck.currentDeviceId]
    };

    localStorage.setItem('neet_enrolled_student', JSON.stringify(studentData));
    localStorage.setItem('neet_user_enrolled', 'true');
    localStorage.setItem(
      'neet_local_user',
      JSON.stringify({
        id: 'student-' + studentData.rollNumber,
        name: studentData.studentName,
        email: studentData.email,
        phone: '+91 ' + studentData.studentPhone,
        parentName: studentData.parentName,
        parentPhone: '+91 ' + studentData.parentPhone,
        caste: studentData.caste,
        dob: studentData.dob,
        dobPin: studentData.dobPin,
        targetYear: studentData.targetYear,
        rollNumber: studentData.rollNumber
      })
    );

    window.dispatchEvent(new Event('neet_auth_change'));

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    setTimeout(() => {
      setIsSubmitting(false);
      onEnrollSuccess(studentData);
    }, 600);
  };

  const handleDeauthorizeAndContinue = (deviceToRemoveId: string) => {
    const updatedDevices = deauthorizeDevice(email.trim().toLowerCase(), deviceToRemoveId);
    setDeviceLimitError(null);
    // Proceed with enrollment
    const rollNo = 'NCBT-2026-' + Math.floor(100000 + Math.random() * 900000);
    const dobPin = formatDobToPin(dob);

    const studentData: EnrolledStudent = {
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      parentPhone: parentPhone.replace(/\D/g, ''),
      studentPhone: studentPhone.replace(/\D/g, ''),
      caste,
      email: email.trim().toLowerCase(),
      dob,
      dobPin,
      targetYear,
      enrolledAt: new Date().toISOString(),
      rollNumber: rollNo,
      devices: updatedDevices.map(d => d.deviceId)
    };

    localStorage.setItem('neet_enrolled_student', JSON.stringify(studentData));
    localStorage.setItem('neet_user_enrolled', 'true');
    localStorage.setItem('neet_local_user', JSON.stringify(studentData));
    window.dispatchEvent(new Event('neet_auth_change'));
    onEnrollSuccess(studentData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 p-5 sm:p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-black text-base border border-white/30 shadow-inner">
                nc
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-lg tracking-tight text-white">
                    NeetCbt<span className="text-cyan-300"> Exam Test</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900 shadow-xs">
                    Mandatory Portal
                  </span>
                </div>
                <p className="text-[11px] text-blue-100 font-medium">
                  Official CBT All-India Test Engine & Dynamic Question Bank
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white/15 border border-white/20 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>2-Device Protected</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/20">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
              <GraduationCap className="w-5 h-5 text-cyan-300" /> Student Verification & Security Enrollment
            </h2>
            <p className="text-xs text-blue-100 mt-0.5">
              Complete your profile. Your <strong>Date of Birth (DOB)</strong> will serve as the encryption password for all downloaded Test Papers & Scorecard PDFs.
            </p>
          </div>
        </div>

        {/* 2-DEVICE LIMIT EXCEEDED MODAL CHALLENGE */}
        {deviceLimitError && deviceLimitError.show ? (
          <div className="p-6 space-y-4 bg-rose-50/50">
            <div className="p-4 rounded-xl bg-rose-100/80 border border-rose-300 text-rose-900 space-y-2">
              <div className="flex items-center space-x-2 text-rose-800 font-bold text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>Device Limit Exceeded (Maximum 2 Active Devices Allowed)</span>
              </div>
              <p className="text-xs text-rose-700 leading-relaxed">
                Your NeetCbt account is currently active on <strong>2 other devices</strong>. To access tests from this new device, please choose a device below to deauthorize and replace:
              </p>
            </div>

            <div className="space-y-2">
              {deviceLimitError.devices.map((dev, i) => (
                <div
                  key={dev.deviceId}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center space-x-3">
                    <Laptop className="w-5 h-5 text-slate-500" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{dev.deviceName}</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        Last Active: {new Date(dev.lastActive).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeauthorizeAndContinue(dev.deviceId)}
                    className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition cursor-pointer"
                  >
                    Logout Device {i + 1} & Login Here
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Enrollment Form Body */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={studentName}
                    onChange={e => {
                      setStudentName(e.target.value);
                      if (errors.studentName) setErrors(prev => ({ ...prev, studentName: '' }));
                    }}
                    placeholder="e.g. Aditi Sanjay Gadre"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition ${
                      errors.studentName
                        ? 'border-rose-300 focus:ring-rose-200 text-rose-900'
                        : 'border-slate-200 focus:ring-blue-100 focus:border-blue-600 text-slate-900'
                    }`}
                  />
                </div>
                {errors.studentName && (
                  <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.studentName}
                  </p>
                )}
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent / Guardian Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={parentName}
                    onChange={e => {
                      setParentName(e.target.value);
                      if (errors.parentName) setErrors(prev => ({ ...prev, parentName: '' }));
                    }}
                    placeholder="e.g. Sanjay Gadre"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition ${
                      errors.parentName
                        ? 'border-rose-300 focus:ring-rose-200 text-rose-900'
                        : 'border-slate-200 focus:ring-blue-100 focus:border-blue-600 text-slate-900'
                    }`}
                  />
                </div>
                {errors.parentName && (
                  <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.parentName}
                  </p>
                )}
              </div>

              {/* Parent Contact Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent Contact Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    value={parentPhone}
                    onChange={e => {
                      setParentPhone(e.target.value.replace(/\D/g, ''));
                      if (errors.parentPhone) setErrors(prev => ({ ...prev, parentPhone: '' }));
                    }}
                    placeholder="10-digit Mobile No."
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white font-mono focus:outline-none focus:ring-2 transition ${
                      errors.parentPhone
                        ? 'border-rose-300 focus:ring-rose-200 text-rose-900'
                        : 'border-slate-200 focus:ring-blue-100 focus:border-blue-600 text-slate-900'
                    }`}
                  />
                </div>
                {errors.parentPhone && (
                  <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.parentPhone}
                  </p>
                )}
              </div>

              {/* Student Contact Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Contact Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    value={studentPhone}
                    onChange={e => {
                      setStudentPhone(e.target.value.replace(/\D/g, ''));
                      if (errors.studentPhone) setErrors(prev => ({ ...prev, studentPhone: '' }));
                    }}
                    placeholder="10-digit Mobile No."
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white font-mono focus:outline-none focus:ring-2 transition ${
                      errors.studentPhone
                        ? 'border-rose-300 focus:ring-rose-200 text-rose-900'
                        : 'border-slate-200 focus:ring-blue-100 focus:border-blue-600 text-slate-900'
                    }`}
                  />
                </div>
                {errors.studentPhone && (
                  <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.studentPhone}
                  </p>
                )}
              </div>

              {/* Date of Birth (DOB) -> Password Protection PIN */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Date of Birth (DOB) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={dob}
                    onChange={e => {
                      setDob(e.target.value);
                      if (errors.dob) setErrors(prev => ({ ...prev, dob: '' }));
                    }}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 text-slate-900 font-semibold transition"
                  />
                </div>
                <p className="text-[10px] text-blue-700 font-mono mt-1 flex items-center gap-1">
                  <KeyRound className="w-3 h-3 text-blue-600" /> PDF Password: <strong>{formatDobToPin(dob)}</strong> (Format: DDMMYYYY)
                </p>
              </div>

              {/* Caste / Reservation Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Caste / Reservation Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={caste}
                  onChange={e => setCaste(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 text-slate-900 font-medium transition cursor-pointer"
                >
                  <option value="General / Open">General / Open (UR)</option>
                  <option value="OBC-NCL">OBC-NCL (Other Backward Class)</option>
                  <option value="SC (Scheduled Caste)">SC (Scheduled Caste)</option>
                  <option value="ST (Scheduled Tribe)">ST (Scheduled Tribe)</option>
                  <option value="GEN-EWS">GEN-EWS (Economically Weaker Section)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">
                  Used for accurate Eligible Medical Colleges calculation on Sunday Scorecards.
                </p>
              </div>

              {/* Email ID */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Email ID <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    placeholder="e.g. aditi.gadre@gmail.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition ${
                      errors.email
                        ? 'border-rose-300 focus:ring-rose-200 text-rose-900'
                        : 'border-slate-200 focus:ring-blue-100 focus:border-blue-600 text-slate-900'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Target Batch Select */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">Target NEET Exam Year:</span>
              </div>
              <div className="flex items-center space-x-2">
                {(['2025', '2026', '2027'] as const).map(yr => (
                  <button
                    type="button"
                    key={yr}
                    onClick={() => setTargetYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      targetYear === yr
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    NEET {yr}
                  </button>
                ))}
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="pt-2">
              <label className="flex items-start space-x-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={e => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  I confirm that the details provided are genuine and acknowledge that this account will be bound to <strong>maximum 2 active devices</strong> and PDFs locked with my DOB PIN.
                </span>
              </label>
              {errors.terms && (
                <p className="text-[10px] text-rose-600 font-semibold mt-1">
                  {errors.terms}
                </p>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <Lock className="w-4 h-4" />
                <span>{isSubmitting ? 'Verifying 2-Device Concurrency & DOB...' : 'Submit Enrollment & Enter NeetCbt Exam Test'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

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
  KeyRound,
  Camera,
  Upload,
  Trash2,
  Accessibility,
  Shield
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
  parentEmail?: string;
  studentPhone: string;
  domicileState?: string;
  caste: 'General / Open' | 'OBC-NCL' | 'SC (Scheduled Caste)' | 'ST (Scheduled Tribe)' | 'GEN-EWS';
  email: string;
  dob: string; // YYYY-MM-DD
  dobPin: string; // DDMMYYYY for PDF password
  targetYear: '2027' | '2028' | '2029';
  enrolledAt: string;
  rollNumber: string;
  devices: string[];
  // New aspirant fields
  studentPhoto?: string;
  gender: 'Female' | 'Male' | 'Third Gender';
  disabilityStatus: string;
  specialReservation: string;
}

interface EnrollmentGateProps {
  onEnrollSuccess: (student: EnrolledStudent) => void;
  onOpenAdmin?: () => void;
}

export const EnrollmentGate: React.FC<EnrollmentGateProps> = ({ onEnrollSuccess, onOpenAdmin }) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [domicileState, setDomicileState] = useState('Maharashtra');
  const [caste, setCaste] = useState<EnrolledStudent['caste']>('General / Open');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('2006-08-15');
  const [targetYear, setTargetYear] = useState<EnrolledStudent['targetYear']>('2027');
  const [agreedTerms, setAgreedTerms] = useState(true);

  // New Aspirant Fields State
  const [studentPhoto, setStudentPhoto] = useState<string>('');
  const [gender, setGender] = useState<'Female' | 'Male' | 'Third Gender'>('Female');
  const [disabilityStatus, setDisabilityStatus] = useState<string>('No Disability');
  const [specialReservation, setSpecialReservation] = useState<string>('None');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, studentPhoto: 'Photo file size must be less than 2MB' }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setStudentPhoto(reader.result as string);
      setErrors(prev => ({ ...prev, studentPhoto: '' }));
    };
    reader.readAsDataURL(file);
  };

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

    if (parentEmail.trim() && !emailRegex.test(parentEmail.trim())) {
      newErrors.parentEmail = 'Please enter a valid parent email address';
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

    const rollNo = `NCBT-${targetYear}-` + Math.floor(100000 + Math.random() * 900000);
    const dobPin = formatDobToPin(dob);

    const studentData: EnrolledStudent = {
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      parentPhone: parentPhone.replace(/\D/g, ''),
      parentEmail: parentEmail.trim().toLowerCase() || email.trim().toLowerCase(),
      studentPhone: studentPhone.replace(/\D/g, ''),
      domicileState,
      caste,
      email: email.trim().toLowerCase(),
      dob,
      dobPin,
      targetYear,
      enrolledAt: new Date().toISOString(),
      rollNumber: rollNo,
      devices: [authCheck.currentDeviceId],
      studentPhoto,
      gender,
      disabilityStatus,
      specialReservation
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
        parentEmail: studentData.parentEmail,
        domicileState: studentData.domicileState,
        caste: studentData.caste,
        dob: studentData.dob,
        dobPin: studentData.dobPin,
        targetYear: studentData.targetYear,
        rollNumber: studentData.rollNumber,
        studentPhoto: studentData.studentPhoto,
        gender: studentData.gender,
        disabilityStatus: studentData.disabilityStatus,
        specialReservation: studentData.specialReservation
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
    const rollNo = `NCBT-${targetYear}-` + Math.floor(100000 + Math.random() * 900000);
    const dobPin = formatDobToPin(dob);

    const studentData: EnrolledStudent = {
      studentName: studentName.trim(),
      parentName: parentName.trim(),
      parentPhone: parentPhone.replace(/\D/g, ''),
      parentEmail: parentEmail.trim().toLowerCase() || email.trim().toLowerCase(),
      studentPhone: studentPhone.replace(/\D/g, ''),
      domicileState,
      caste,
      email: email.trim().toLowerCase(),
      dob,
      dobPin,
      targetYear,
      enrolledAt: new Date().toISOString(),
      rollNumber: rollNo,
      devices: updatedDevices.map(d => d.deviceId),
      studentPhoto,
      gender,
      disabilityStatus,
      specialReservation
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
              {/* Photo Upload Section */}
              <div className="sm:col-span-2 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-100 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative group shrink-0">
                  <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-blue-400 overflow-hidden bg-white shadow-xs flex items-center justify-center">
                    {studentPhoto ? (
                      <img src={studentPhoto} alt="Student Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center p-2 text-slate-400">
                        <Camera className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                        <span className="text-[9px] font-bold text-slate-500 block leading-tight">Passport Photo</span>
                      </div>
                    )}
                  </div>
                  {studentPhoto && (
                    <button
                      type="button"
                      onClick={() => setStudentPhoto('')}
                      className="absolute -top-1.5 -right-1.5 p-1 bg-rose-600 text-white rounded-full shadow-xs hover:bg-rose-700 transition cursor-pointer"
                      title="Remove Photo"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <label className="cursor-pointer inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Photo</span>
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                    <button
                      type="button"
                      onClick={() => setStudentPhoto('https://images.unsplash.com/photo-1594824813511-209a823b1853?w=300&auto=format&fit=crop&q=80')}
                      className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs transition cursor-pointer"
                    >
                      Doctor Girl Avatar
                    </button>
                    <button
                      type="button"
                      onClick={() => setStudentPhoto('https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80')}
                      className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs transition cursor-pointer"
                    >
                      Doctor Boy Avatar
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Official candidate passport-size photograph for NTA CBT Hall Ticket, Admit Card & PDF scorecards.
                  </p>
                  {errors.studentPhoto && <p className="text-[10px] text-rose-600 font-semibold">{errors.studentPhoto}</p>}
                </div>
              </div>

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

              {/* Parent Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent Email ID <span className="text-slate-400 font-normal">(Optional Contact)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={parentEmail}
                    onChange={e => {
                      setParentEmail(e.target.value);
                      if (errors.parentEmail) setErrors(prev => ({ ...prev, parentEmail: '' }));
                    }}
                    placeholder="e.g. parent.name@gmail.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition ${
                      errors.parentEmail
                        ? 'border-rose-300 focus:ring-rose-200 text-rose-900'
                        : 'border-slate-200 focus:ring-blue-100 focus:border-blue-600 text-slate-900'
                    }`}
                  />
                </div>
                {errors.parentEmail && (
                  <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.parentEmail}
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
                  <KeyRound className="w-3 h-3 text-blue-600" /> PDF Password Format: DDMMYYYY (Protected via DOB)
                </p>
              </div>

              {/* Domicile State */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  State of Domicile <span className="text-rose-500">*</span>
                </label>
                <select
                  value={domicileState}
                  onChange={e => setDomicileState(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 text-slate-900 font-medium transition cursor-pointer"
                >
                  <option value="Maharashtra">Maharashtra (MH State Quota)</option>
                  <option value="Delhi (NCT)">Delhi (NCT - DU / IPU Quota)</option>
                  <option value="Karnataka">Karnataka (KEA State Quota)</option>
                  <option value="Uttar Pradesh">Uttar Pradesh (UP State Quota)</option>
                  <option value="Rajasthan">Rajasthan (State Quota)</option>
                  <option value="Gujarat">Gujarat (State Quota)</option>
                  <option value="Tamil Nadu">Tamil Nadu (TN State Quota)</option>
                  <option value="Kerala">Kerala (KEAM State Quota)</option>
                  <option value="Telangana">Telangana (KNRUHS Quota)</option>
                  <option value="Andhra Pradesh">Andhra Pradesh (YSRUHS Quota)</option>
                  <option value="Madhya Pradesh">Madhya Pradesh (MP State Quota)</option>
                  <option value="Bihar">Bihar (BCECEB Quota)</option>
                  <option value="West Bengal">West Bengal (WB State Quota)</option>
                  <option value="Punjab">Punjab (BFUHS Quota)</option>
                  <option value="Haryana">Haryana (State Quota)</option>
                  <option value="Odisha">Odisha (OJEE Quota)</option>
                  <option value="Assam">Assam (DME Quota)</option>
                  <option value="Jharkhand">Jharkhand (JCECEB Quota)</option>
                  <option value="Chhattisgarh">Chhattisgarh (CG State Quota)</option>
                  <option value="Uttarakhand">Uttarakhand (HNBUMU Quota)</option>
                  <option value="Himachal Pradesh">Himachal Pradesh (HP State Quota)</option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir (JKBOPEE Quota)</option>
                  <option value="Goa">Goa (DTE Quota)</option>
                  <option value="Other State / UT">Other State / Union Territory</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">
                  85% State Quota counselling eligibility will be mapped to this domicile.
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

              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Gender <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-1 bg-slate-50 p-1 border border-slate-200 rounded-xl">
                  {(['Female', 'Male', 'Third Gender'] as const).map(g => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                        gender === g
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  {gender === 'Female' ? '✨ Eligible for 30% Horizontal Women Reservation (W)' : 'NTA NEET official gender entry.'}
                </p>
              </div>

              {/* Disability Status (PwD) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Disability Status (PwD) <span className="text-rose-500">*</span></span>
                  {disabilityStatus !== 'No Disability' && (
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.2 rounded-md">5% Quota Active</span>
                  )}
                </label>
                <select
                  value={disabilityStatus}
                  onChange={e => setDisabilityStatus(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 text-slate-900 font-medium transition cursor-pointer"
                >
                  <option value="No Disability">No Disability</option>
                  <option value="PwD (Locomotor Disability / Orthopedic)">PwD (Locomotor Disability / Orthopedic)</option>
                  <option value="PwD (Visual Impairment / Blindness / Low Vision)">PwD (Visual Impairment / Blindness / Low Vision)</option>
                  <option value="PwD (Hearing Impairment / Deaf / Hard of Hearing)">PwD (Hearing Impairment / Deaf / Hard of Hearing)</option>
                  <option value="PwD (Speech & Language Disability)">PwD (Speech & Language Disability)</option>
                  <option value="PwD (Intellectual Disability / Dyslexia / Autism)">PwD (Intellectual Disability / Dyslexia / Autism)</option>
                  <option value="PwD (Mental Illness)">PwD (Mental Illness)</option>
                  <option value="PwD (Multiple Disabilities / Other)">PwD (Multiple Disabilities / Other)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">
                  5% Horizontal reservation under RPwD Act 2016 for benchmark disability &ge; 40%.
                </p>
              </div>

              {/* Special Horizontal Reservation (Defence / MKB / Orphan) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Defence & Special Quota</span>
                  {specialReservation !== 'None' && (
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded-md">Special Quota</span>
                  )}
                </label>
                <select
                  value={specialReservation}
                  onChange={e => setSpecialReservation(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 text-slate-900 font-medium transition cursor-pointer"
                >
                  <option value="None">None / Not Applicable</option>
                  <option value="DEF-1: Ward of Ex-Servicemen (Maharashtra State Domicile)">DEF-1: Ward of Ex-Servicemen (Maharashtra Domicile)</option>
                  <option value="DEF-2: Ward of Active Defence Personnel (Maharashtra Domicile)">DEF-2: Ward of Active Defence Personnel (Maharashtra Domicile)</option>
                  <option value="DEF-3: Ward of Active Defence Personnel (Transferred to Maharashtra)">DEF-3: Ward of Active Defence Personnel (Transferred to MH)</option>
                  <option value="MKB: Maharashtra-Karnataka Disputed Border Area">MKB: Maharashtra-Karnataka Disputed Border Area (865 villages)</option>
                  <option value="Orphan Category A (Institutional Orphan)">Orphan Category A (Institutional Orphan)</option>
                  <option value="Orphan Category C (Non-Institutional Orphan)">Orphan Category C (Non-Institutional Orphan)</option>
                  <option value="Freedom Fighter (FF) Ward / Grandchild">Freedom Fighter (FF) Ward / Grandchild</option>
                  <option value="Hilly Area (HA) Resident">Hilly Area (HA) Resident</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">
                  Specific defense, MKB, and orphan quotas apply in State CAP counselling.
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

            {/* Target Batch Select (2027, 2028, 2029) */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">Target NEET Exam Year:</span>
              </div>
              <div className="flex items-center space-x-2">
                {(['2027', '2028', '2029'] as const).map(yr => (
                  <button
                    type="button"
                    key={yr}
                    onClick={() => setTargetYear(yr)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
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
            <div className="pt-3 space-y-2.5">
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

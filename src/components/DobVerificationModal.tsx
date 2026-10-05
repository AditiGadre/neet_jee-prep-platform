import React, { useState, useEffect } from 'react';
import { X, Lock, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { getStudentDobPin } from '../utils/pdfDownloader';

interface DobVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle: string;
  category: string;
  onVerified: () => void;
}

export const DobVerificationModal: React.FC<DobVerificationModalProps> = ({
  isOpen,
  onClose,
  documentTitle,
  category,
  onVerified
}) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studentInfo, setStudentInfo] = useState<{ pin: string; dobFormatted: string; studentName: string }>({
    pin: '15082006',
    dobFormatted: '2006-08-15',
    studentName: 'Enrolled Candidate'
  });

  useEffect(() => {
    if (isOpen) {
      const info = getStudentDobPin();
      setStudentInfo(info);
      setPin('');
      setError(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPin = pin.trim().replace(/\D/g, '');

    if (cleanPin.length !== 8) {
      setError('Please enter your 8-digit Date of Birth in DDMMYYYY format (e.g. 15082006).');
      return;
    }

    // Validate against student's registered DOB pin or standard calendar format
    const expectedPin = studentInfo.pin || '15082006';
    const day = parseInt(cleanPin.slice(0, 2), 10);
    const month = parseInt(cleanPin.slice(2, 4), 10);
    const year = parseInt(cleanPin.slice(4, 8), 10);

    const isValidDate = day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1990 && year <= 2015;

    // Check if matches registered pin OR is a valid calendar date
    if (cleanPin === expectedPin || isValidDate) {
      setIsSubmitting(true);
      setError(null);
      try {
        sessionStorage.setItem('neet_dob_verified', 'true');
      } catch {}

      // Form submit directly triggers PDF generation and save dialog
      setTimeout(() => {
        onVerified();
        onClose();
      }, 100);
    } else {
      setError(`Incorrect PIN. Please enter candidate's valid 8-digit registered DOB.`);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-sky-900/80 backdrop-blur-xs flex items-center justify-center p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-sky-50/60 border border-sky-200 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200 text-sky-950">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-700 via-rose-700 to-teal-700 p-5 text-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-400 text-sky-950 uppercase font-mono tracking-wider">
              DOB Security Verification
            </span>
            <h3 className="text-base sm:text-lg font-black flex items-center gap-4">
              <Lock className="w-5 h-5 text-sky-300" />
              <span>Direct PDF Download</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-sky-50/60/10 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-1 text-xs">
            <div className="flex items-center space-x-1.5 text-sky-900 font-bold">
              <FileText className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="truncate">{documentTitle || 'Examination Document'}</span>
            </div>
            <div className="text-sky-700 flex justify-between pt-1">
              <span>Candidate: <strong className="text-sky-950">{studentInfo.studentName}</strong></span>
              <span className="font-mono text-sky-700 font-bold uppercase">{category}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-sky-800">
              Enter Date of Birth (DDMMYYYY) <span className="text-sky-500">*</span>
            </label>
            <p className="text-[11px] text-sky-600">
              Enter your 8-digit DOB (e.g., <code className="bg-sky-50 px-1.5 py-0.5 rounded font-mono text-sky-600 font-bold">15082006</code> for 15 Aug 2006) to generate your official PDF directly:
            </p>

            <div className="relative">
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, '').slice(0, 8));
                  if (error) setError(null);
                }}
                placeholder="DDMMYYYY"
                maxLength={8}
                autoFocus
                className="w-full px-4 py-3 bg-sky-50 border-2 border-sky-400 focus:border-sky-600 rounded-xl text-center text-xl font-mono font-bold tracking-widest text-sky-900 outline-hidden transition shadow-inner"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs font-mono font-bold">
                {pin.length}/8
              </div>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-sky-300 text-sky-800 text-xs font-bold hover:bg-sky-50 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || pin.length < 8}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShieldCheck className="w-4 h-4 text-sky-300" />
              <span>{isSubmitting ? 'Generating PDF...' : 'Verify & Download PDF'}</span>
            </button>
          </div>

          <p className="text-[10px] text-center text-stone-400 font-mono">
            Secured direct client-side PDF synthesis &bull; Watermarked for neetcbtexam.com
          </p>
        </form>
      </div>
    </div>
  );
};


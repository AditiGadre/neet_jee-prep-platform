import React from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 text-slate-900 my-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/25">
              <Scale className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold">Terms & Conditions of Use</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white font-mono">
                  v2.4
                </span>
              </div>
              <p className="text-xs text-blue-100 mt-0.5">
                NeetCbt Exam Test — Official Academic & Computer-Based Testing Portal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            title="Close Terms & Conditions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Terms Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs text-slate-700 leading-relaxed">
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 space-y-1">
            <p className="font-bold flex items-center gap-1.5 text-blue-900">
              <FileText className="w-4 h-4 text-blue-600" /> Standard Institutional Agreement
            </p>
            <p className="text-[11px] text-blue-800">
              Please read these Terms and Conditions carefully before using the NeetCbt Exam Platform. By enrolling, registering, logging in, or attempting any Computer-Based Test (CBT), you agree to be bound by these terms.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">1</span>
              Acceptance of Terms & Educational Purpose
            </h3>
            <p>
              The NeetCbt Exam Platform provides educational examination simulations, All-India Rank (AIR) analytics, Daily Practice Problems (DPP), and academic diagnostic tools designed exclusively for students preparing for the National Eligibility cum Entrance Test (NEET-UG). The services provided are for academic preparation purposes only.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">2</span>
              User Accounts & 2-Device Concurrency Policy
            </h3>
            <p>
              Each candidate account is individual and strictly non-transferable. To preserve system integrity and prevent unauthorized distribution of question papers, candidate accounts are cryptographically restricted to a <strong>maximum of two (2) authorized active devices</strong>. Simultaneous sessions from more than two devices will trigger an automated security lock requiring administrative re-verification.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Candidates must provide authentic personal details including genuine phone numbers and date of birth.</li>
              <li>Providing placeholder or dummy contact numbers will lead to immediate account suspension.</li>
              <li>Candidates are solely responsible for maintaining the confidentiality of their login credentials.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">3</span>
              Intellectual Property Rights & PDF Encryption
            </h3>
            <p>
              All mock test papers, questions, diagrams, vector illustrations, proprietary explanations, ranking algorithms, and software code are the exclusive intellectual property of the institution.
            </p>
            <p>
              All downloaded test paper PDFs and diagnostic scorecards are encrypted and password-protected using the candidate unique <strong>Date of Birth PIN (DDMMYYYY)</strong>. Any attempt to scrape, duplicate, publicly republish, reverse engineer, or commercially distribute platform content without written authorization is strictly prohibited and subject to legal action under the Indian Copyright Act, 1957.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">4</span>
              Sunday Proctored Test Series & Unlock Protocol
            </h3>
            <p>
              Sunday All-India Mock Tests (720 Marks, 180 Questions) strictly follow the scheduled academic planner. In order to simulate genuine competitive examination conditions:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Sunday Only Access:</strong> Scheduled Sunday test papers unlock exclusively on Sundays (Indian Standard Time).</li>
              <li><strong>Admin Approval Requirement:</strong> Papers unlock only upon institutional administrator verification and authorization. Test papers cannot be unlocked individually on weekdays.</li>
              <li><strong>Zero Duplicate Guarantee:</strong> All official Sunday tests are generated from isolated chapter pools with zero cross-paper question overlaps.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">5</span>
              CBT Code of Conduct & Anti-Cheating Policy
            </h3>
            <p>
              Candidates taking online CBT exams agree to maintain examination integrity. The platform monitors active test tabs, window blur events, and abnormal response durations. Use of external browser automation, screen capture software, or unauthorized assistance during live proctored tests will result in test disqualification.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">6</span>
              Subscriptions, Packages & Refund Policy
            </h3>
            <p>
              Access to specialized packages (Online CBT All-India Test Series, Jumbo Package, Hybrid CBT + OMR Test Series, and Target Dedicated Batch Packs) is granted upon successful enrollment. Because digital access to question banks, downloadable resources, and test engines is provided immediately upon registration, payments made for enrolled packages are non-refundable.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">7</span>
              AIR Predictions & Forecast Disclaimers
            </h3>
            <p>
              All India Rank (AIR) estimates, national percentiles, and medical college cut-off forecasts are statistical projections derived from official NTA percentile matrices and historical State Common Entrance Test Cell (CET Cell / MCC) admission data. They are provided as guidance tools and do not represent a legal guarantee of admission.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">8</span>
              Privacy & Student Data Security
            </h3>
            <p>
              Student performance records, test attempt histories, and contact information are protected under standard data security protocols. Personal student information is never sold to third-party advertisers. Academic progress may be communicated to registered parents or guardians via automated SMS / Email notifications.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-[11px]">9</span>
              Governing Law & Jurisdiction
            </h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising in relation to platform services shall be subject to the exclusive jurisdiction of the competent courts of India.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Last Updated: September 2026 • Compliant with IT Act 2000 & NEP Guidelines</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Headphones,
  GraduationCap,
  Laptop,
  Users,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

interface SupportSectionProps {
  onOpenAskDoubtModal: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({
  onOpenAskDoubtModal
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [counsellingFormSubmitted, setCounsellingFormSubmitted] = useState(false);
  const [counsellingName, setCounsellingName] = useState('');
  const [counsellingPhone, setCounsellingPhone] = useState('');
  const [counsellingGoal, setCounsellingGoal] = useState('NEET 2026 Strategy');

  const [techTicketSubmitted, setTechTicketSubmitted] = useState(false);
  const [techIssue, setTechIssue] = useState('');

  const handleCounsellingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!counsellingName || !counsellingPhone) return;
    setCounsellingFormSubmitted(true);
    setTimeout(() => {
      setCounsellingFormSubmitted(false);
      setCounsellingName('');
      setCounsellingPhone('');
    }, 4000);
  };

  const handleTechSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!techIssue) return;
    setTechTicketSubmitted(true);
    setTimeout(() => {
      setTechTicketSubmitted(false);
      setTechIssue('');
    }, 4000);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
              <Headphones className="w-3 h-3" />
              <span>24/7 Student Assistance</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900">
              6. Our Support Team
            </h1>
            <p className="mt-0.5 text-xs text-gray-500 max-w-3xl">
              Academic Support, Technical Support, Counselling, Contact Channels (Phone, Email, WhatsApp, Live Chat) and FAQs.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Support Pillars Grid from Document */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* 1. Academic Support */}
        <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                1. Academic Support
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                Subject Experts & Doubt Resolution
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Stuck on a tricky organic mechanism or Physics numerical? Submit your question to our senior academic panel for sub-10 minute verified step-by-step solutions.
            </p>
            <div className="text-[11px] text-gray-500 flex items-center space-x-1.5 pt-0.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Available 24/7 &bull; AIIMS & IIT Faculty</span>
            </div>
          </div>

          <button
            onClick={onOpenAskDoubtModal}
            className="w-full py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Instant Doubt Solver</span>
          </button>
        </div>

        {/* 2. Technical Support */}
        <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                2. Technical Support
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                Platform, Login & Payment Assistance
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Instant help with CBT simulator test submission, course video playback, OTP login, or payment receipt verification.
            </p>
          </div>

          {techTicketSubmitted ? (
            <div className="p-2.5 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Ticket #9842 Raised! Agent Connecting</span>
            </div>
          ) : (
            <form onSubmit={handleTechSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Describe tech issue (e.g. CBT loading)..."
                value={techIssue}
                onChange={e => setTechIssue(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Tech Ticket</span>
              </button>
            </form>
          )}
        </div>

        {/* 3. Counselling */}
        <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                3. Counselling
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                Course Guidance & Exam Strategy
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Book a 1-on-1 strategy session with senior counsellors to formulate your customized 6-month study timetable and batch selection.
            </p>
          </div>

          {counsellingFormSubmitted ? (
            <div className="p-2.5 rounded bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Session Scheduled! Callback in 15 Mins</span>
            </div>
          ) : (
            <form onSubmit={handleCounsellingSubmit} className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={counsellingName}
                  onChange={e => setCounsellingName(e.target.value)}
                  className="p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={counsellingPhone}
                  onChange={e => setCounsellingPhone(e.target.value)}
                  className="p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <span>Book 1-on-1 Counselling</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 4. Contact Channels (Exact List from Document) */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs">
        <div className="border-b border-gray-100 pb-3">
          <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
            Direct Helpdesk
          </span>
          <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-0.5">
            Contact Channels (Phone, Email, WhatsApp & Live Chat)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Phone */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-emerald-700">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">Phone Toll-Free</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-900 font-mono">1800-890-7200</div>
            <div className="text-[11px] text-gray-500">Mon - Sun (8:00 AM - 10:00 PM)</div>
          </div>

          {/* Email */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-blue-700">
              <Mail className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">Official Email</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-900 font-mono">support@neetcbt.com</div>
            <div className="text-[11px] text-gray-500">Sub-2 hour ticket turnaround</div>
          </div>

          {/* WhatsApp */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-emerald-700">
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">WhatsApp Desk</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-900 font-mono">+91 98234 56789</div>
            <div className="text-[11px] text-gray-500">Instant PDF DPPs & Test Alerts</div>
          </div>

          {/* Live Chat */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-amber-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">Live Chat</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-emerald-700">Online Now (0m Wait)</div>
            <div className="text-[11px] text-gray-500">Connected with Senior Mentor</div>
          </div>
        </div>
      </div>

      {/* 5. Interactive FAQs Accordion */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Frequently Asked Questions (FAQ)</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Instant clarity on test series, CBT mode, syllabus, and enrolment.
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded bg-gray-50 border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {faq.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-3 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-200 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

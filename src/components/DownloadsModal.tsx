import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  FileText,
  BookOpen,
  Award,
  FileSpreadsheet,
  Trash2,
  Search,
  CheckCircle2,
  Calendar,
  HardDrive,
  User,
  Phone,
  Mail,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowDownToLine,
  RefreshCw
} from 'lucide-react';
import { DownloadRecord } from '../types';
import { getUserDownloads, clearUserDownloads, getCurrentUser } from '../utils/downloadTracker';
import { TEST_SERIES_DATA, BOOKS_DATA } from '../data/mockData';
import { downloadBookPDF, downloadTestPaperPDF, downloadDppPDF } from '../utils/pdfDownloader';
import { ALL_FINGERTIPS_BIOLOGY_QUESTIONS } from '../data/fingertipsBiologyQuestions';

interface DownloadsModalProps {
  onClose: () => void;
}

export const DownloadsModal: React.FC<DownloadsModalProps> = ({ onClose }) => {
  const [downloads, setDownloads] = useState<DownloadRecord[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [user, setUser] = useState<any>(getCurrentUser());
  const [reDownloadSuccess, setReDownloadSuccess] = useState<string | null>(null);

  const reloadDownloads = () => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    const userEmail = currentUser?.email;
    const records = getUserDownloads(userEmail);
    setDownloads(records);
  };

  useEffect(() => {
    reloadDownloads();

    const handleDownloadsChange = () => {
      reloadDownloads();
    };
    const handleAuthChange = () => {
      reloadDownloads();
    };

    window.addEventListener('neet_downloads_change', handleDownloadsChange);
    window.addEventListener('neet_auth_change', handleAuthChange);

    return () => {
      window.removeEventListener('neet_downloads_change', handleDownloadsChange);
      window.removeEventListener('neet_auth_change', handleAuthChange);
    };
  }, []);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your download history?')) {
      clearUserDownloads(user?.email);
      reloadDownloads();
    }
  };

  const handleRemoveItem = (id: string) => {
    try {
      const raw = localStorage.getItem('neet_user_downloads');
      if (raw) {
        const list: DownloadRecord[] = JSON.parse(raw);
        const filtered = list.filter(item => item.id !== id);
        localStorage.setItem('neet_user_downloads', JSON.stringify(filtered));
        reloadDownloads();
      }
    } catch (e) {
      console.warn('Could not remove download record:', e);
    }
  };

  const handleReDownload = (record: DownloadRecord) => {
    // Attempt matching with existing mock data to regenerate the PDF
    if (record.category === 'Book') {
      const match = BOOKS_DATA.find(b => b.title.toLowerCase() === record.title.toLowerCase()) || {
        id: 'book-' + Date.now(),
        title: record.title,
        category: 'PDFs' as const,
        subject: (record.subject as any) || 'All',
        pages: 120,
        size: record.fileSize || '2.4 MB',
        description: 'Complete NCERT High-Yield Revision Document and Formula Reference.',
        rating: 4.9,
        highlights: [
          'Full NCERT line-by-line coverage',
          'Examiner traps and solved illustrations',
          '37-year repeated question patterns'
        ]
      };
      downloadBookPDF(match);
    } else if (record.category === 'DPP') {
      downloadDppPDF({
        date: new Date().toISOString().split('T')[0],
        subject: record.subject || 'Biology & Chemistry High-Yield',
        level: 'CBT Standard NEET/JEE Level',
        questions: ALL_FINGERTIPS_BIOLOGY_QUESTIONS.slice(0, 45)
      });
    } else {
      // Test Paper / Scorecard / Default
      const match = TEST_SERIES_DATA.find(t => t.title.toLowerCase().includes(record.title.toLowerCase()) || record.title.toLowerCase().includes(t.title.toLowerCase())) || TEST_SERIES_DATA[0];
      downloadTestPaperPDF(match, true);
    }

    setReDownloadSuccess(`Re-downloading "${record.title}"...`);
    setTimeout(() => setReDownloadSuccess(null), 3000);
  };

  // Quick Seed Sample Downloads if list is empty
  const handleDownloadSamplePaper = () => {
    const sample = TEST_SERIES_DATA[0];
    downloadTestPaperPDF(sample, true);
  };

  const handleDownloadSampleBook = () => {
    const sample = BOOKS_DATA[0];
    downloadBookPDF(sample);
  };

  const handleDownloadSampleDpp = () => {
    downloadDppPDF({
      date: new Date().toISOString().split('T')[0],
      subject: 'Biology Botany & Zoology High-Yield',
      level: 'CBT Standard Level',
      questions: ALL_FINGERTIPS_BIOLOGY_QUESTIONS.slice(0, 45)
    });
  };

  // Filtered Downloads
  const filteredDownloads = downloads.filter(d => {
    const matchesCategory = activeCategory === 'All' || d.category === activeCategory;
    const matchesQuery =
      !searchQuery ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.subject && d.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (d.category && d.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const getCategoryBadge = (category: DownloadRecord['category']) => {
    switch (category) {
      case 'Test Paper':
        return { bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: FileText, label: 'Test Paper' };
      case 'Book':
        return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: BookOpen, label: 'Book / Notes' };
      case 'Scorecard':
        return { bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: Award, label: 'Scorecard' };
      case 'DPP':
        return { bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: FileSpreadsheet, label: 'Daily DPP' };
      default:
        return { bg: 'bg-gray-50 text-gray-700 border-gray-200', icon: Download, label: category || 'PDF Document' };
    }
  };

  const formatTimestamp = (iso: string) => {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso;
      return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col max-h-[90vh] text-gray-900 relative animate-in zoom-in-95 duration-150 overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-200 bg-gray-50/80 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <ArrowDownToLine className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span>My Download History & Vault</span>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    {downloads.length} Files Tracked
                  </span>
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  All PDF test papers, NCERT books, scorecards, and DPPs are automatically logged to your student session.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Session Info Card */}
        <div className="px-4 sm:px-5 py-2.5 bg-blue-50/60 border-b border-blue-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="flex items-center space-x-1.5 text-blue-900 font-semibold">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>{user?.name || user?.user_metadata?.name || 'Enrolled Student'}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-gray-600 font-mono text-[11px]">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              <span>{user?.email || 'student.target2026@neetprep.in'}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-gray-600 font-mono text-[11px]">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{user?.phone || user?.user_metadata?.phone || '+91 9876543210'}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Active Account Session</span>
            </span>
          </div>
        </div>

        {/* Notification Toast */}
        {reDownloadSuccess && (
          <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-in fade-in">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{reDownloadSuccess}</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-mono">100% Verified</span>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-white">
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'Test Paper', 'Book', 'Scorecard', 'DPP'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat === 'All' ? 'All Downloads' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1 sm:w-60">
              <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search downloaded files..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            {downloads.length > 0 && (
              <button
                onClick={handleClearAll}
                className="p-1.5 rounded-lg bg-gray-100 hover:bg-rose-50 text-gray-500 hover:text-rose-600 border border-gray-200 transition cursor-pointer shrink-0"
                title="Clear All Download History"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content List */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-3 bg-[#f9fafb]">
          {filteredDownloads.length > 0 ? (
            <div className="space-y-2.5">
              {filteredDownloads.map(item => {
                const badge = getCategoryBadge(item.category);
                const BadgeIcon = badge.icon;

                return (
                  <div
                    key={item.id}
                    className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-gray-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex items-start space-x-3 min-w-0">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${badge.bg}`}>
                        <BadgeIcon className="w-4 h-4" />
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border uppercase font-mono ${badge.bg}`}>
                            {badge.label}
                          </span>
                          <span className="text-[11px] text-gray-500 font-mono flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-gray-400 inline" />
                            <span>{formatTimestamp(item.timestamp)}</span>
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-gray-100 text-gray-600">
                            {item.fileSize || '1.8 MB'} &bull; {item.format || 'PDF'}
                          </span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                          {item.title}
                        </h4>

                        {item.subject && (
                          <p className="text-[11px] text-gray-500 truncate">
                            Syllabus / Scope: <span className="font-medium text-gray-700">{item.subject}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => handleReDownload(item)}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer active:scale-95 shadow-2xs"
                        title="Re-download PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Re-Download</span>
                      </button>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                        title="Remove from history"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 px-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <HardDrive className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  {searchQuery ? 'No matching downloads found' : 'No downloads tracked yet in this session'}
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Whenever you download test question papers, scorecard PDFs, NCERT books, or daily DPPs, they will be preserved here with 1-click re-download.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={handleDownloadSamplePaper}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Sample NEET Test PDF</span>
                </button>
                <button
                  onClick={handleDownloadSampleBook}
                  className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Download Biology NCERT Book PDF</span>
                </button>
                <button
                  onClick={handleDownloadSampleDpp}
                  className="px-3 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Download Today&apos;s DPP</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <HardDrive className="w-3.5 h-3.5 text-gray-400" />
            <span>Encrypted local and cloud storage synced</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition cursor-pointer"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
};

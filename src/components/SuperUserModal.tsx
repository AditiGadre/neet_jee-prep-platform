import React, { useState, useEffect } from 'react';
import {
  X,
  Bell,
  ShieldCheck,
  Download,
  FileText,
  BookOpen,
  Award,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  HardDrive,
  User,
  Phone,
  Mail,
  Search,
  Trash2,
  CheckCheck,
  TrendingUp,
  Activity,
  Users,
  Database,
  ArrowDownToLine,
  FileDown
} from 'lucide-react';
import {
  SuperUserNotification,
  getSuperUserNotifications,
  getSuperUserMetrics,
  markAllSuperUserNotificationsAsRead,
  clearSuperUserNotifications
} from '../utils/superUserNotifier';

interface SuperUserModalProps {
  onClose: () => void;
}

export const SuperUserModal: React.FC<SuperUserModalProps> = ({ onClose }) => {
  const [notifications, setNotifications] = useState<SuperUserNotification[]>([]);
  const [metrics, setMetrics] = useState(getSuperUserMetrics());
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const reloadData = () => {
    setNotifications(getSuperUserNotifications());
    setMetrics(getSuperUserMetrics());
  };

  useEffect(() => {
    reloadData();

    const handleAlert = () => reloadData();
    window.addEventListener('neet_superuser_alert', handleAlert);
    return () => window.removeEventListener('neet_superuser_alert', handleAlert);
  }, []);

  const handleMarkAllRead = () => {
    markAllSuperUserNotificationsAsRead();
    reloadData();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all Super User download notifications?')) {
      clearSuperUserNotifications();
      reloadData();
    }
  };

  const handleExportCSV = () => {
    if (notifications.length === 0) return;
    const headers = ['Timestamp', 'Student Name', 'Contact Number', 'Email', 'Category', 'Document Title', 'File Size'];
    const rows = notifications.map(n => [
      `"${new Date(n.timestamp).toLocaleString()}"`,
      `"${n.userName}"`,
      `"${n.userPhone}"`,
      `"${n.userEmail}"`,
      `"${n.category}"`,
      `"${n.contentTitle.replace(/"/g, '""')}"`,
      `"${n.fileSize}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `neet_cbt_downloads_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter notifications
  const filteredNotifications = notifications.filter(n => {
    const matchesCat = categoryFilter === 'All' || n.category === categoryFilter;
    const matchesQuery =
      !searchQuery ||
      n.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.userPhone.includes(searchQuery) ||
      n.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.contentTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Test Paper':
        return { bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: FileText };
      case 'Book':
        return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: BookOpen };
      case 'Scorecard':
        return { bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: Award };
      case 'DPP':
        return { bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: FileSpreadsheet };
      default:
        return { bg: 'bg-gray-50 text-gray-700 border-gray-200', icon: Download };
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col max-h-[92vh] text-gray-900 relative animate-in zoom-in-95 duration-150 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Super User & Admin Control Center
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold font-mono">
                  LIVE FEED ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Real-time tracking of student downloads, total bandwidth volume, contact numbers, and activity alerts.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Summary Metrics Cards */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
              <span>Total Volume</span>
              <HardDrive className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono mt-1">
              {metrics.totalVolumeFormatted}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Content Downloaded</p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
              <span>Total Downloads</span>
              <ArrowDownToLine className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-1">
              {metrics.totalDownloads}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Verified PDF Actions</p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
              <span>Active Students</span>
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-purple-700 font-mono mt-1">
              {metrics.uniqueStudents}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5 font-medium">With Verified Phone/Email</p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
              <span>Unread Alerts</span>
              <Bell className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono mt-1">
              {metrics.unreadCount}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5 font-medium">New Notifications</p>
          </div>
        </div>

        {/* Filter & Action Toolbar */}
        <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-white">
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'Test Paper', 'Book', 'Scorecard', 'DPP'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat === 'All' ? 'All Alerts' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1 sm:w-60">
              <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search student, phone, or title..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleMarkAllRead}
              className="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center space-x-1 border border-gray-200 transition cursor-pointer"
              title="Mark All as Read"
            >
              <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">Mark Read</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold flex items-center space-x-1 transition cursor-pointer"
              title="Export CSV Report"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">Export CSV</span>
            </button>

            {notifications.length > 0 && (
              <button
                onClick={handleClear}
                className="p-1.5 rounded-lg bg-gray-100 hover:bg-rose-50 text-gray-400 hover:text-rose-600 border border-gray-200 transition cursor-pointer"
                title="Clear All Notifications"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Live Notification Feed */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-2.5 bg-[#f9fafb]">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(item => {
              const badge = getCategoryBadge(item.category);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={item.id}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs ${
                    !item.read ? 'bg-white border-blue-300 ring-1 ring-blue-100' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-3 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${badge.bg}`}>
                      <BadgeIcon className="w-4 h-4" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border uppercase font-mono ${badge.bg}`}>
                          {item.category}
                        </span>
                        {!item.read && (
                          <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold text-[9px] uppercase font-mono">
                            NEW
                          </span>
                        )}
                        <span className="text-[11px] text-gray-500 font-mono flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span>{new Date(item.timestamp).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 border border-gray-200 font-bold">
                          {item.fileSize}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                        {item.contentTitle}
                      </h4>

                      {/* Student Info Details */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs pt-0.5">
                        <span className="inline-flex items-center space-x-1 text-blue-900 font-bold">
                          <User className="w-3 h-3 text-blue-600" />
                          <span>{item.userName}</span>
                        </span>
                        <span className="inline-flex items-center space-x-1 text-emerald-800 font-mono font-semibold text-[11px]">
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span>{item.userPhone}</span>
                        </span>
                        <span className="inline-flex items-center space-x-1 text-gray-500 font-mono text-[11px]">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span>{item.userEmail}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 self-end sm:self-center shrink-0">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold font-mono">
                      ✓ Notified
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <Bell className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-gray-900">No Super User alerts at this time</h3>
                <p className="text-xs text-gray-500">
                  Every time any student downloads test papers, NCERT books, scorecards, or DPPs, notifications will stream here in real-time.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-white flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1.5 font-mono text-[11px]">
            <Activity className="w-3.5 h-3.5 text-green-600" />
            <span>Super User Telemetry Sync: Connected & Active</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition cursor-pointer"
          >
            Close Panel
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import {
  FileCheck2,
  Sparkles,
  BookOpen,
  Trophy,
  Headphones,
  Sliders,
  Layers,
  Network,
  LineChart,
  FileSpreadsheet,
  BookMarked,
  HelpCircle,
  ShieldCheck,
  Zap,
  ArrowDownToLine,
  Home
} from 'lucide-react';

export type TabType =
  | 'home'
  | 'test-series'
  | 'what-extra'
  | 'about-exam'
  | 'support';

interface SidebarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  extraSubTab?: string;
  onSelectExtraSubTab?: (subTab: string) => void;
  onOpenAdmin?: () => void;
  onNavigateToAbout?: () => void;
  isAdmin?: boolean;
}

interface MenuItem {
  id: TabType;
  label: string;
  sublabel: string;
  icon: any;
  badge?: string;
  highlight?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  extraSubTab,
  onSelectExtraSubTab,
  onOpenAdmin,
  onNavigateToAbout,
  isAdmin = false
}) => {
  const menuItems: MenuItem[] = [
    {
      id: 'home' as TabType,
      label: '1. Home & Packages',
      sublabel: 'Course Packages & Batch Tracks',
      icon: Home,
      badge: 'Pricing'
    },
    {
      id: 'test-series' as TabType,
      label: '2. Test Series & Sunday Mocks',
      sublabel: '196 Tests • NTA CBT Simulator',
      icon: FileCheck2,
      badge: '196 Tests'
    },
    ...(isAdmin
      ? [
          {
            id: 'what-extra' as TabType,
            label: '3. What Extra We Offer',
            sublabel: 'Custom DPP, Chapter Tests & Analytics',
            icon: Sparkles,
            badge: 'Admin'
          }
        ]
      : []),
    {
      id: 'about-exam' as TabType,
      label: isAdmin ? '4. About NEET CBT Exam' : '3. About NEET CBT Exam',
      sublabel: 'CBT Pattern, Syllabus, Seats & Marks vs Rank',
      icon: BookOpen
    }
  ];

  const extraSubModules = [
    { id: 'custom-test', label: 'Custom Practice Test Generator', icon: Sliders },
    { id: 'analytics', label: 'Performance Analytics', icon: LineChart },
    { id: 'dpp-generator', label: 'DPP', icon: FileSpreadsheet },
    { id: 'my-downloads', label: 'My Download Vault', icon: ArrowDownToLine }
  ];

  return (
    <aside className="w-full lg:w-64 bg-white border-r-2 border-[#1c1917] flex flex-col shrink-0 text-[#1c1917] select-none">
      {/* Platform Header in Sidebar */}
      <div className="p-5 border-b-2 border-[#1c1917] bg-white">
        <div className="flex items-center space-x-2">
          <div>
            <div className="text-[10px] font-black uppercase tracking-wider text-[#56514c]">
              Platform Modules
            </div>
            <div className="text-base font-extrabold text-[#1c1917]">
              NeetCbt Exam Test
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Items */}
      <div className="p-3 space-y-2 flex-1 overflow-y-auto">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => onSelectTab(item.id)}
                className={`w-full text-left p-3 rounded-xl text-xs transition flex items-center justify-between cursor-pointer border-2 border-[#1c1917] ${
                  isActive
                    ? 'bg-[#dbeafe] text-[#1e3a8a] font-extrabold shadow-[3px_3px_0px_#1c1917]'
                    : 'bg-white text-[#1c1917] hover:bg-[#f0f9ff]'
                }`}
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-[#1e3a8a]' : 'text-[#1c1917]'
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="truncate font-bold">{item.label}</div>
                    <div className={`text-[10px] truncate ${isActive ? 'text-[#1e40af]' : 'text-[#56514c]'}`}>
                      {item.sublabel}
                    </div>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase shrink-0 border border-[#1c1917] ${
                      isActive
                        ? 'bg-[#bfdbfe] text-[#1e3a8a]'
                        : 'bg-[#fde68a] text-[#1c1917]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Collapsible Sub-modules under What Extra We Offer */}
              {item.id === 'what-extra' && isActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l-2 border-sky-200 ml-4 animate-in fade-in slide-in-from-top-1 duration-150">
                  {extraSubModules.map(sub => {
                    const SubIcon = sub.icon;
                    const isSubActive = extraSubTab === sub.id;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => {
                          if (onSelectExtraSubTab) onSelectExtraSubTab(sub.id);
                        }}
                        className={`w-full text-left px-2 py-1.5 rounded-lg text-[11px] transition flex items-center space-x-2 cursor-pointer ${
                          isSubActive
                            ? 'bg-sky-50 text-sky-700 font-bold border border-sky-100'
                            : 'text-sky-600 hover:bg-sky-50 hover:text-sky-900'
                        }`}
                      >
                        <SubIcon className={`w-3 h-3 ${isSubActive ? 'text-sky-500' : 'text-stone-400'}`} />
                        <span className="truncate">{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Verified Banner in Bottom Sidebar */}
      <div className="p-3 bg-sky-50/80 border-t border-sky-200">
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-sky-50 to-sky-50 border border-sky-200/60 space-y-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-sky-700">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
            <span>NeetCbt Verified</span>
          </div>
          <p className="text-[10px] text-sky-600 font-mono">
            Target Batch 2027–2029 &bull; 100% NCERT Authenticated
          </p>
        </div>
        <div className="mt-2 text-center">
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToAbout) onNavigateToAbout();
            }}
            className="text-[10.5px] font-semibold text-sky-600 hover:text-sky-600 transition inline-flex items-center gap-1 cursor-pointer"
          >
            <span>About NeetCbt Platform</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </aside>
  );
};


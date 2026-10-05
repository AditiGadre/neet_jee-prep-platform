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
  ArrowDownToLine
} from 'lucide-react';

export type TabType =
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
  onNavigateToAbout
}) => {
  const menuItems: MenuItem[] = [
    {
      id: 'test-series' as TabType,
      label: '1. Test Series & Sunday Mocks',
      sublabel: '180 Marks Combined PCB (33 Sunday Cycle)',
      icon: FileCheck2,
      badge: '180 Qs PCB'
    },
    {
      id: 'what-extra' as TabType,
      label: '2. What Extra We Offer',
      sublabel: 'Custom DPP, Chapter Tests & Analytics',
      icon: Sparkles,
      badge: '4 Tools'
    },
    {
      id: 'about-exam' as TabType,
      label: '3. About NEET CBT Exam',
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
    <aside className="w-full lg:w-64 bg-sky-50/60 border-r border-sky-200 flex flex-col shrink-0 text-sky-950 select-none">
      {/* Platform Header in Sidebar */}
      <div className="p-6 border-b border-stone-100 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-orange-600 to-teal-500 flex items-center justify-center font-black text-xs shadow-xs">
            nc
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Platform Modules
            </div>
            <div className="text-sm font-extrabold text-sky-950">
              NeetCbt<span className="text-orange-600"> Exam Test</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Items */}
      <div className="p-3 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => onSelectTab(item.id)}
                className={`w-full text-left p-3.5 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-md shadow-orange-900/10'
                    : 'text-sky-700 hover:bg-orange-50 hover:text-orange-700'
                }`}
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-white' : item.highlight ? 'text-orange-500' : 'text-stone-400'
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{item.label}</div>
                    <div className="text-[10px] text-sky-600 truncate font-normal group-hover:text-orange-600/70">
                      {item.sublabel}
                    </div>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold uppercase shrink-0 ${
                      isActive
                        ? 'bg-sky-50/60/20 text-white'
                        : item.highlight
                        ? 'bg-amber-100 text-amber-700 border border-amber-200'
                        : 'bg-sky-50 text-sky-600 border border-sky-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Collapsible Sub-modules under What Extra We Offer */}
              {item.id === 'what-extra' && isActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l-2 border-orange-200 ml-4 animate-in fade-in slide-in-from-top-1 duration-150">
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
                            ? 'bg-orange-50 text-orange-700 font-bold border border-orange-100'
                            : 'text-sky-600 hover:bg-sky-50 hover:text-sky-900'
                        }`}
                      >
                        <SubIcon className={`w-3 h-3 ${isSubActive ? 'text-orange-500' : 'text-stone-400'}`} />
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
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 space-y-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-orange-700">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
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
            className="text-[10.5px] font-semibold text-sky-600 hover:text-orange-600 transition inline-flex items-center gap-1 cursor-pointer"
          >
            <span>About NeetCbt Platform</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </aside>
  );
};


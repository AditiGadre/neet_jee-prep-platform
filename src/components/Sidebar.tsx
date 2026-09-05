import React from 'react';
import {
  FileCheck2,
  TvMinimalPlay,
  Sparkles,
  BookOpen,
  Info,
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
  | 'online-courses'
  | 'what-extra'
  | 'about-exam'
  | 'about-us'
  | 'our-results'
  | 'support';

interface SidebarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  extraSubTab?: string;
  onSelectExtraSubTab?: (subTab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  extraSubTab,
  onSelectExtraSubTab
}) => {
  const menuItems = [
    {
      id: 'test-series' as TabType,
      label: '1. Test Series & Sunday Mocks',
      sublabel: '180 Marks Combined PCB & Chapter Customizer',
      icon: FileCheck2,
      badge: '180 Qs PCB'
    },
    {
      id: 'what-extra' as TabType,
      label: '2. What Extra We Offer',
      sublabel: 'Custom DPP, 10K Flashcards, Mind Maps, NCERT Audio',
      icon: Sparkles,
      badge: '8 Tools',
      highlight: true
    },
    {
      id: 'about-exam' as TabType,
      label: '3. About NEET CBT Exam',
      sublabel: 'CBT Pattern, Syllabus, Seats & Marks vs Rank',
      icon: BookOpen
    },
    {
      id: 'about-us' as TabType,
      label: '4. About NeetCbt Exam Test',
      sublabel: 'Philosophy, NCERT First & AI Learning Engine',
      icon: Info
    },
    {
      id: 'our-results' as TabType,
      label: '5. NEET Results & Rankers',
      sublabel: 'AIIMS Delhi Selections, Toppers & Verifications',
      icon: Trophy,
      badge: 'AIR 1'
    },
    {
      id: 'support' as TabType,
      label: '6. Support & FAQ',
      sublabel: '24/7 Academic Doubt Desk & Counselling',
      icon: Headphones
    }
  ];

  const extraSubModules = [
    { id: 'custom-test', label: 'Custom Test Generator', icon: Sliders },
    { id: 'flash-cards', label: 'Interactive Flashcards', icon: Layers },
    { id: 'mind-maps', label: 'Visual Mind Maps', icon: Network },
    { id: 'analytics', label: 'Performance Analytics', icon: LineChart },
    { id: 'dpp-generator', label: 'DPP Generator', icon: FileSpreadsheet },
    { id: 'books', label: 'NCERT Notes & eBooks', icon: BookMarked },
    { id: 'pyqs', label: 'NEET/JEE PYQ Bank', icon: HelpCircle },
    { id: 'my-downloads', label: 'My Download Vault', icon: ArrowDownToLine }
  ];

  return (
    <aside className="w-full lg:w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 text-white select-none">
      {/* Platform Header in Sidebar */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-black text-xs shadow-xs">
            nc
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Platform Modules
            </div>
            <div className="text-sm font-extrabold text-white">
              NeetCbt<span className="text-cyan-400"> Exam Test</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Items */}
      <div className="p-2 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => onSelectTab(item.id)}
                className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-900/20'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-white' : item.highlight ? 'text-amber-400' : 'text-slate-400'
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 truncate font-normal">
                      {item.sublabel}
                    </div>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold uppercase shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.highlight
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Collapsible Sub-modules under What Extra We Offer */}
              {item.id === 'what-extra' && isActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l-2 border-blue-500/40 ml-4 animate-in fade-in slide-in-from-top-1 duration-150">
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
                            ? 'bg-white/10 text-cyan-300 font-bold'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                        }`}
                      >
                        <SubIcon className="w-3 h-3 text-slate-400" />
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
      <div className="p-3 bg-slate-950/60 border-t border-slate-800/80">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-800/40 space-y-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>NeetCbt Verified</span>
          </div>
          <p className="text-[10px] text-slate-400 font-mono">
            Target Batch 2026 &bull; 100% NCERT Authenticated
          </p>
        </div>
      </div>
    </aside>
  );
};

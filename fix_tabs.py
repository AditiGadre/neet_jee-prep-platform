import re

with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace the 3 Dedicated Batch Tabs block
old_tabs_regex = re.compile(r'\{\/\* 3 Dedicated Batch Tabs.*?<span>11th Batch</span>\s*<span[^>]*>\s*20 Sunday Tests\s*</span>\s*</button>\s*</div>', re.DOTALL)

new_tabs = '''{/* 3 Dedicated Batch Tabs with Dropdowns */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-xs relative z-30">
          <div className="flex flex-wrap items-center gap-1.5">
            
            {/* Repeater Batch */}
            <div className="relative group">
              <button
                onClick={() => {
                  setActiveBatch('repeater');
                  setActivePhaseFilter('all');
                }}
                className={px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer }
              >
                <Zap className={w-4 h-4 } />
                <span>Repeater / Dropper Batch</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current font-mono">
                  Starts 11 Oct
                </span>
              </button>
              
              <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-stone-200 shadow-xl rounded-xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider px-2 py-1 mb-1">Select Track</div>
                <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track1'); setActivePhaseFilter('all'); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 1: Chapterwise, Partwise & Full (46 Tests)
                </button>
                <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track2'); setActivePhaseFilter('all'); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 2: 17-Week Fast-Track (46 Tests)
                </button>
                <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track3'); setActivePhaseFilter('all'); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 3: Physics & Chemistry Only (27 Tests)
                </button>
              </div>
            </div>

            {/* 12th Batch */}
            <div className="relative group">
              <button
                onClick={() => {
                  setActiveBatch('12th');
                  setActivePhaseFilter('all');
                  setShowRevisionBuffer(false);
                }}
                className={px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer }
              >
                <GraduationCap className={w-4 h-4 } />
                <span>12th Batch</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current font-mono">
                  23 Tests
                </span>
              </button>
              
              <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-stone-200 shadow-xl rounded-xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider px-2 py-1 mb-1">Select Track</div>
                <button onClick={() => { setActiveBatch('12th'); setClass12Track('complete'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 1: Complete Syllabus Master Series
                </button>
                <button onClick={() => { setActiveBatch('12th'); setClass12Track('pc'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 2: Physics & Chemistry Series
                </button>
              </div>
            </div>

            {/* 11th Batch */}
            <div className="relative group">
              <button
                onClick={() => {
                  setActiveBatch('11th');
                  setActivePhaseFilter('all');
                  setShowRevisionBuffer(false);
                }}
                className={px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer }
              >
                <Atom className={w-4 h-4 } />
                <span>11th Batch</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current font-mono">
                  20 Tests
                </span>
              </button>
              
              <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-stone-200 shadow-xl rounded-xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider px-2 py-1 mb-1">Select Track</div>
                <button onClick={() => { setActiveBatch('11th'); setClass11Track('track1'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 1: Chapterwise, Partwise & Full
                </button>
                <button onClick={() => { setActiveBatch('11th'); setClass11Track('track2'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors }>
                  Track 2: CWT & Cumulative Master
                </button>
              </div>
            </div>
          </div>'''

code = old_tabs_regex.sub(new_tabs, code)

# Remove the old segmented controls completely
old_segmented_regex = re.compile(r'\{\/\* Track Switcher Segmented Control for Class 11th Batch \*\/\}[\s\S]*?\{\/\* Track Switcher Segmented Control for Repeater \/ Dropper Batch \*\/\}[\s\S]*?<\/button>\s*<\/div>\s*\}\s*\{\/\* Header Banner', re.DOTALL)

# Wait, the segmented controls are NOT consecutively placed like that. They are placed AFTER the header banner in the original!
# Let's check: in the output, it was:
# </div>
# {/* Track Switcher Segmented Control for Class 11th Batch */}
# {activeBatch === '11th' && (...
# So they are placed separately. Let's just remove them individually.

code = re.sub(r'\{\/\* Track Switcher Segmented Control for Class 11th Batch \*\/\}[\s\S]*?(?=\{\/\* Track Switcher Segmented Control for Class 12th Batch \*\/\}|\{\/\* 12th BATCH REVISION)', '', code)
code = re.sub(r'\{\/\* Track Switcher Segmented Control for Class 12th Batch \*\/\}[\s\S]*?(?=\{\/\* Track Switcher Segmented Control for Repeater|\{\/\* 12th BATCH REVISION)', '', code)
code = re.sub(r'\{\/\* Track Switcher Segmented Control for Repeater \/ Dropper Batch \*\/\}[\s\S]*?(?=\{\/\* 12th BATCH REVISION|\{\/\* LIST VIEW)', '', code)

# Also fix the weird gradient in 12th BATCH REVISION just in case it had purple or whatever:
code = code.replace('bg-gradient-to-br from-purple-50/80 via-white to-rose-50/50 border border-purple-200', 'bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 border border-amber-200')
code = code.replace('bg-purple-600', 'bg-amber-500')
code = code.replace('border-purple-100', 'border-amber-100')

with open('src/components/TestSeriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

import re

with open('src/components/Sidebar.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Container
code = code.replace(
    'bg-stone-900 border-r border-stone-800 flex flex-col shrink-0 text-white select-none',
    'bg-white border-r border-stone-200 flex flex-col shrink-0 text-stone-900 select-none'
)

# Header
code = code.replace(
    'p-6 border-b border-stone-800/80 bg-stone-950/40',
    'p-6 border-b border-stone-100 bg-gradient-to-b from-amber-50/50 to-white'
)
code = code.replace(
    'text-stone-400\n              Platform Modules',
    'text-stone-500\n              Platform Modules'
)
code = code.replace(
    'text-sm font-extrabold text-white',
    'text-sm font-extrabold text-stone-900'
)
code = code.replace(
    'text-teal-400"> Exam Test',
    'text-orange-600"> Exam Test'
)

# Button classes
code = code.replace(
    '''? 'bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold shadow-md shadow-amber-900/20'
                    : 'text-stone-300 hover:bg-stone-800/70 hover:text-white'
                }''',
    '''? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-md shadow-orange-900/10'
                    : 'text-stone-600 hover:bg-orange-50 hover:text-orange-700'
                }'''
)

code = code.replace(
    '''? 'text-white' : item.highlight ? 'text-amber-400' : 'text-stone-400'
                    }''',
    '''? 'text-white' : item.highlight ? 'text-orange-500' : 'text-stone-400'
                    }'''
)

code = code.replace(
    '''text-[10px] text-stone-400 truncate font-normal''',
    '''text-[10px] text-stone-500 truncate font-normal group-hover:text-orange-600/70'''
)

# Badges
code = code.replace(
    '''? 'bg-white/20 text-white'
                        : item.highlight
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : 'bg-stone-800 text-stone-400'
                    }''',
    '''? 'bg-white/20 text-white'
                        : item.highlight
                        ? 'bg-amber-100 text-amber-700 border border-amber-200'
                        : 'bg-stone-100 text-stone-500 border border-stone-200'
                    }'''
)

# Sub-modules
code = code.replace(
    '''border-l-2 border-orange-500/40 ml-4 animate-in''',
    '''border-l-2 border-orange-200 ml-4 animate-in'''
)
code = code.replace(
    '''? 'bg-white/10 text-teal-300 font-bold'
                            : 'text-stone-400 hover:bg-white/5 hover:text-stone-200'
                        }''',
    '''? 'bg-orange-50 text-orange-700 font-bold border border-orange-100'
                            : 'text-stone-500 hover:bg-stone-50 hover:text-stone-800'
                        }'''
)
code = code.replace(
    '''<SubIcon className="w-3 h-3 text-stone-400" />''',
    '''<SubIcon className={w-3 h-3 } />'''
)

# Footer banner
code = code.replace(
    '''p-3 bg-stone-950/60 border-t border-stone-800/80''',
    '''p-3 bg-stone-50/80 border-t border-stone-200'''
)
code = code.replace(
    '''p-3.5 rounded-xl bg-gradient-to-br from-orange-900/40 to-stone-900 border border-orange-800/40 space-y-1''',
    '''p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 space-y-1'''
)
code = code.replace(
    '''text-teal-300">\n            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />''',
    '''text-orange-700">\n            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />'''
)
code = code.replace(
    '''text-[10px] text-stone-400 font-mono''',
    '''text-[10px] text-stone-500 font-mono'''
)
code = code.replace(
    '''text-[10.5px] font-semibold text-stone-400 hover:text-teal-300 transition''',
    '''text-[10.5px] font-semibold text-stone-500 hover:text-orange-600 transition'''
)


with open('src/components/Sidebar.tsx', 'w', encoding='utf-8') as f:
    f.write(code)


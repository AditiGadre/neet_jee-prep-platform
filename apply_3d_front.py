
import re
import os

def upgrade_ui(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    # 1. Upgrade Buttons: Add 3D transform, hover scaling, shadow elevation
    code = re.sub(
        r"(<button[^>]*?className=[\x27\x22])([^\x27\x22]*)([\x27\x22])",
        lambda m: m.group(1) + m.group(2) + " transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 " + m.group(3),
        code
    )

    # 2. Upgrade Cards/Containers: Add glass/3D float effects to rounded-xl/2xl elements
    # Exclude absolute positioning wrappers or empty divs
    code = re.sub(
        r"(<div[^>]*?className=[\x27\x22])([^\x27\x22]*bg-(?:white|slate-[15]0|orange-50)[^\x27\x22]*rounded-[x2]l[^\x27\x22]*)([\x27\x22])",
        lambda m: m.group(1) + m.group(2) + " transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5 backdrop-blur-sm bg-opacity-95 " + m.group(3) if "hover:-translate-y" not in m.group(2) else m.group(0),
        code
    )

    # 3. Add vibrant gradients to Header explicitly if it exists
    if "Header.tsx" in filepath:
        code = re.sub(
            r"bg-white border-b border-slate-200",
            r"bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm sticky top-0 z-40 transition-all duration-500",
            code
        )

    # 4. Enhance Sidebar visually
    if "Sidebar.tsx" in filepath:
        code = re.sub(
            r"bg-white border-r border-slate-200",
            r"bg-white/90 backdrop-blur-lg border-r border-slate-200/50 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] transition-all duration-500",
            code
        )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(code)

files_to_upgrade = [
    "src/App.tsx",
    "src/components/EnrollmentGate.tsx",
    "src/components/TestSeriesSection.tsx",
    "src/components/Header.tsx",
    "src/components/Sidebar.tsx",
    "src/components/WhatExtraSection.tsx",
    "src/components/AboutPlatformSection.tsx"
]

for f in files_to_upgrade:
    if os.path.exists(f):
        upgrade_ui(f)
        print(f"Upgraded {f}")


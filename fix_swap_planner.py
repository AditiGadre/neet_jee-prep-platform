import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# Modify handleStartSwapMenu
old_swap_menu_logic = """    let targetChapters: string[] = [];
    if (sub === 'Physics') targetChapters = sundayPhyUnits;
    else if (sub === 'Chemistry') targetChapters = sundayChemUnits;
    else targetChapters = sundayBioUnits;"""

new_swap_menu_logic = """    // STRICT PLANNER ADHERENCE: Compute target chapters freshly from the official planner, ignoring corrupted state
    let targetChapters: string[] = [];
    const cleanKey = selectedPlannerPreset.replace(/^(11th|12th)-/i, '').toLowerCase();
    const planner = SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
        || SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
        || SUNDAY_11TH_TRACK1_TESTS.find(t => t.code.toLowerCase() === cleanKey)
        || SUNDAY_11TH_TRACK2_TESTS.find(t => t.code.toLowerCase() === cleanKey)
        || PLANNER_12TH_TESTS.find(t => t.code.toLowerCase() === cleanKey)
        || SUNDAY_DROPPER_PLANNER_TESTS[0];

    if (sub === 'Physics') {
      targetChapters = OFFICIAL_PHYSICS_UNITS.filter(u => planner.physicsKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase())));
    } else if (sub === 'Chemistry') {
      targetChapters = OFFICIAL_CHEMISTRY_UNITS.filter(u => planner.chemistryKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase())));
    } else {
      const botMatch = OFFICIAL_BOTANY_BLOCKS.filter(b => planner.botanyKeywords?.some(kw => b.toLowerCase().includes(kw.toLowerCase()))).map(b => `[Botany] ${b}`);
      const zooMatch = OFFICIAL_ZOOLOGY_BLOCKS.filter(z => planner.zoologyKeywords?.some(kw => z.toLowerCase().includes(kw.toLowerCase()))).map(z => `[Zoology] ${z}`);
      targetChapters = [...botMatch, ...zooMatch];
    }"""

text = text.replace(old_swap_menu_logic, new_swap_menu_logic)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Updated handleStartSwapMenu to strictly compute from planner")

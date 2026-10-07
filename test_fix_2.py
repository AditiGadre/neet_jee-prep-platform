import re

with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace where it checks if (!isSundayTestUnlocked)
launch_pattern = r"const handleLaunchDirectSundayTest = async \(plannerTest: SundayPlannerTest\) => \{\s*if \(!isSundayTestUnlocked\)"
launch_new = '''const handleLaunchDirectSundayTest = async (plannerTest: SundayPlannerTest) => {
    if (!isTestSpecificallyUnlocked(plannerTest.code))'''

content = re.sub(launch_pattern, launch_new, content)

dl_pattern = r"const handleDownloadSundayPdf = async \(plannerTest: SundayPlannerTest, includeSolutions: boolean = false\) => \{\s*if \(!isSundayTestUnlocked\)"
dl_new = '''const handleDownloadSundayPdf = async (plannerTest: SundayPlannerTest, includeSolutions: boolean = false) => {
    if (!isTestSpecificallyUnlocked(plannerTest.code))'''

content = re.sub(dl_pattern, dl_new, content)

# Remove isSundayTestUnlocked state dependency
# Actually isAdminAccessGranted is currently a boolean state.
# Let's change isAdminAccessGranted usage if any.

with open('src/components/TestSeriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated launch handlers")

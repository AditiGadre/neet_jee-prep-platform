import re
with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# add import
import_pattern = r"import \{\n\s*syncStudentEnrollmentToCloud,\n\s*fetchStudentByPhoneFromCloud"
new_import = "import {\n  fetchAllStudentsFromCloud,\n  syncStudentEnrollmentToCloud,\n  fetchStudentByPhoneFromCloud"
text = re.sub(import_pattern, new_import, text)

# add fetch effect
fetch_effect = """
  useEffect(() => {
    let isMounted = true;
    const loadCloudStudents = async () => {
      try {
        const cloudStudents = await fetchAllStudentsFromCloud();
        if (isMounted && cloudStudents && cloudStudents.length > 0) {
          setRegisteredCandidates(prev => {
            const map = new Map(prev.map(s => [s.email || s.rollNumber, s]));
            for (const c of cloudStudents) {
              map.set(c.email || c.rollNumber, c);
            }
            return Array.from(map.values());
          });
        }
      } catch (e) {
        console.error('Failed to load cloud students in admin panel', e);
      }
    };
    loadCloudStudents();
    return () => { isMounted = false; };
  }, []);
"""

text = text.replace("  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);", "  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);\n" + fetch_effect)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Updated AdminSection")

import re
with open("src/utils/cloudSyncManager.ts", "r", encoding="utf8") as f:
    text = f.read()

new_func = """
export async function fetchAllStudentsFromCloud(): Promise<SyncedStudentProfile[]> {
  const students: SyncedStudentProfile[] = [];
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('questions')
        .select('question_text')
        .eq('subject', '__SYSTEM_SYNC__')
        .eq('chapter', 'STUDENT_ENROLLMENTS');
        
      if (!error && data) {
        for (const row of data) {
          try {
            if (row.question_text) {
              const parsed = JSON.parse(row.question_text);
              if (parsed && parsed.rollNumber) students.push(parsed);
            }
          } catch {}
        }
      }
    }
  } catch (err) {
    console.warn('Error fetching all students from cloud:', err);
  }
  return students;
}
"""
text += "\n" + new_func

with open("src/utils/cloudSyncManager.ts", "w", encoding="utf8") as f:
    f.write(text)
print("Added fetchAllStudentsFromCloud")

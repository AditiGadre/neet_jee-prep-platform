import re

with open('src/services/authoritativeCloudService.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'// 5b\. Direct Supabase Client.*?return \{\s*success: true,\s*paper: normalizedPaper,\s*revision: nextRevision,\s*timestamp: isoTimestamp\s*\};', re.DOTALL)

new_code = '''// 5b. Direct Supabase Client (if available)
    let directSuccess = false;
    let directError = "Unknown error";
    if (supabase) {
      try {
        const payloadJson = JSON.stringify(normalizedPaper);
        const rowId = ${SUNDAY_PAPER_PREFIX}__REV____;

        const res = await insertSupabaseSystemRow({
          id: rowId,
          subject: '__SYSTEM_SYNC__',
          chapter: 'SUNDAY_TEST_PAPERS',
          topic: canonicalCode,
          difficulty: 'System',
          question_text: payloadJson,
          options: ['SYNC_PAYLOAD_V3', canonicalCode, REV_],
          correct_answer: nextRevision,
          explanation: Authoritative Sunday Paper:  Rev 
        }, 2);
        
        if (res && res.success) {
          directSuccess = true;
        } else {
          directError = res?.error || "Direct insert failed silently";
        }
      } catch (err: any) {
        directError = err?.message;
        console.warn('[SYNC-DEBUG] Cloud database save notice:', err?.message);
      }
    }

    if (!directSuccess) {
      return { success: false, error: "Cloud sync completely failed: " + directError, timestamp: isoTimestamp };
    }

    return {
      success: true,
      paper: normalizedPaper,
      revision: nextRevision,
      timestamp: isoTimestamp
    };'''

content, count = pattern.subn(new_code, content)
print("Replaced count:", count)

with open('src/services/authoritativeCloudService.ts', 'w', encoding='utf-8') as f:
    f.write(content)

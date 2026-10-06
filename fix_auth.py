import re

with open('src/services/authoritativeCloudService.ts', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = '''      try {
        const insertedData = await insertSupabaseSystemRow(
          normalizedPaper,
          nextRevision,
          adminUser,
          isForceRevert
        );
        return {
          success: true,
          paper: normalizedPaper,
          revision: nextRevision,
          timestamp: isoTimestamp
        };
      } catch (err: any) {'''

new_code = '''      try {
        const insertedData = await insertSupabaseSystemRow(
          normalizedPaper,
          nextRevision,
          adminUser,
          isForceRevert
        );
        if (!insertedData || !insertedData.success) {
          return { success: false, error: insertedData?.error || "Direct client insertion failed", timestamp: isoTimestamp };
        }
        return {
          success: true,
          paper: normalizedPaper,
          revision: nextRevision,
          timestamp: isoTimestamp
        };
      } catch (err: any) {'''

content = content.replace(old_code, new_code)

with open('src/services/authoritativeCloudService.ts', 'w', encoding='utf-8') as f:
    f.write(content)

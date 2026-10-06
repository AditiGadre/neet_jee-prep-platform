import fs from "fs";
let content = fs.readFileSync("src/services/authoritativeCloudService.ts", "utf8");

content = content.replace(
    /const rowId = \`\$\{SUNDAY_PAPER_PREFIX\}\$\{canonicalCode\}__REV_\$\{nextRevision\}__\$\{now\}_\$\{Math\.random\(\)\.toString\(36\)\.slice\(2, 6\)\}\`;\s*const res = await insertSupabaseSystemRow\(\{\s*id: rowId,\s*subject: .__SYSTEM_SYNC__.,\s*chapter: .SUNDAY_TEST_PAPERS.,\s*topic: canonicalCode,\s*difficulty: .System.,\s*question_text: payloadJson,\s*options: \..SYNC_PAYLOAD_V3., canonicalCode, REV_.,\s*correct_answer: nextRevision,\s*explanation: Authoritative Sunday Paper:  Rev \s*\}, 2\);/g,
    `const rowId = \\`${SUNDAY_PAPER_PREFIX}${canonicalCode}__REV_${nextRevision}__${now}_${Math.random().toString(36).slice(2, 6)}\\`;

        const res = await insertSupabaseSystemRow({
          id: rowId,
          subject: \\`__SYSTEM_SYNC__\\`,
          chapter: \\`SUNDAY_TEST_PAPERS\\`,
          topic: canonicalCode,
          difficulty: \\`System\\`,
          question_text: payloadJson,
          options: [\\`SYNC_PAYLOAD_V3\\`, canonicalCode, \\`REV_${nextRevision}\\`],
          correct_answer: nextRevision,
          explanation: \\`Authoritative Sunday Paper: ${canonicalCode} Rev ${nextRevision}\\`
        }, 2);`
);

fs.writeFileSync("src/services/authoritativeCloudService.ts", content);

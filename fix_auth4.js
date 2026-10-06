import fs from "fs";
let content = fs.readFileSync("src/services/authoritativeCloudService.ts", "utf8");

content = content.replace(
    /const rowId = \$\{SUNDAY_PAPER_PREFIX\}__REV____;/g,
    "const rowId = `${SUNDAY_PAPER_PREFIX}${canonicalCode}__REV_${nextRevision}__${now}_${Math.random().toString(36).slice(2, 6)}`;"
);

fs.writeFileSync("src/services/authoritativeCloudService.ts", content);

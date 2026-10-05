
const fs = require("fs");
let code = fs.readFileSync("src/components/TestSeriesSection.tsx", "utf8");

// We need to restore the backticks and template expressions that got stripped.

code = code.replace(
  "className={px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer }",
  "className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${activeBatch === \\"repeater\\" ? \\"bg-orange-600 text-white shadow-md\\" : \\"bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200\\"}`}"
);

code = code.replace(
  "<Zap className={w-4 h-4 } />",
  "<Zap className={`w-4 h-4 ${activeBatch === \\"repeater\\" ? \\"text-amber-300\\" : \\"text-stone-400\\"}`} />"
);

code = code.replace(
  "className={px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer }",
  "className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${activeBatch === \\"12th\\" ? \\"bg-amber-500 text-white shadow-md\\" : \\"bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200\\"}`}"
);

code = code.replace(
  "<GraduationCap className={w-4 h-4 } />",
  "<GraduationCap className={`w-4 h-4 ${activeBatch === \\"12th\\" ? \\"text-white\\" : \\"text-stone-400\\"}`} />"
);

code = code.replace(
  "className={px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer }",
  "className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${activeBatch === \\"11th\\" ? \\"bg-rose-500 text-white shadow-md\\" : \\"bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200\\"}`}"
);

code = code.replace(
  "<Atom className={w-4 h-4 } />",
  "<Atom className={`w-4 h-4 ${activeBatch === \\"11th\\" ? \\"text-white\\" : \\"text-stone-400\\"}`} />"
);

fs.writeFileSync("src/components/TestSeriesSection.tsx", code);


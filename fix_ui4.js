const fs = require('fs');
let content = fs.readFileSync('src/components/AdminSection.tsx', 'utf8');

// The file currently looks like:
//                                 )} className="text-xs text-rose-600 hover:underline font-bold">Delete Legacy Diagram</button>
//                                   </div>
//                                 )}
const broken =  className="text-xs text-rose-600 hover:underline font-bold">Delete Legacy Diagram</button>
                                  </div>
                                )};

content = content.replace(broken, "");
fs.writeFileSync('src/components/AdminSection.tsx', content);

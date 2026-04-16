const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Form submit CTA
content = content.replace(
  'shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_50px_rgba(197,160,89,0.6)]',
  'shadow-[0_0_20px_var(--jcp-fire-glow)] hover:shadow-[0_0_40px_var(--jcp-fire-glow)]'
);

content = content.replace(
  /className="py-32 bg-jcp-bg relative overflow-hidden"/g,
  'className="section-padding bg-jcp-bg relative overflow-hidden"'
);

fs.writeFileSync('src/App.tsx', content);

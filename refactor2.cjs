const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/py-24 md:py-32/g, 'section-padding');
content = content.replace(/py-24/g, 'section-padding');

fs.writeFileSync('src/App.tsx', content);
console.log('Padding replaced.');

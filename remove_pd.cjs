const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove PowerDigital component definition
const powerDigitalRegex = /const PowerDigital = \(\) => \{[\s\S]*?(?=const BottomCTA = \(\) => \{)/;
content = content.replace(powerDigitalRegex, '');

// 2. Remove PowerDigital invocation
content = content.replace(/<PowerDigital \/>\n\s*/, '');

fs.writeFileSync('src/App.tsx', content);

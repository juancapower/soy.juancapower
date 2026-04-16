const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Logo "Power" in Dorado
content = content.replace(/JuanCa <span className="text-jcp-fire">Power<\/span>/g, 'JuanCa <span className="text-[#FDF6E3]">Power</span>');

// 2. Floating WhatsApp button background to jcp-fire
content = content.replace(/bg-\[#25D366\] text-white p-4 rounded-full shadow-\[0_0_20px_rgba\(37,211,102,0\.4\)\] hover:scale-110 hover:shadow-\[0_0_30px_rgba\(37,211,102,0\.6\)\]/g, 'bg-jcp-fire text-white p-4 rounded-full shadow-[0_0_20px_var(--jcp-fire-glow)] hover:scale-110 hover:shadow-[0_0_30px_var(--jcp-fire-glow)]');

// 3. Navbar Desktop button
content = content.replace(
  /className="px-6 py-2\.5 bg-jcp-fire text-white font-space font-semibold rounded-lg hover:bg-jcp-fire-l transition-all shadow-\[0_0_15px_var\(--jcp-fire-glow\)\] hover:shadow-\[0_0_25px_var\(--jcp-fire-glow\)\]"/g,
  'className="px-6 py-2.5 bg-[#FDF6E3] text-black font-space font-semibold rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(253,246,227,0.3)] hover:shadow-[0_0_25px_rgba(253,246,227,0.5)]"'
);

// 4. Navbar Mobile button
content = content.replace(
  /className="w-full text-center px-6 py-3 bg-jcp-fire text-white font-space font-semibold rounded-lg hover:bg-jcp-fire-l transition-colors mt-4"/g,
  'className="w-full text-center px-6 py-3 bg-[#FDF6E3] text-black font-space font-semibold rounded-[8px] hover:bg-white transition-colors mt-4"'
);

// 5. Remove 'No tiene comparación' and replace with Despierta.juancapower.com link/button
const eventosRegex = /<blockquote className="quote-background pl-8 py-2 mb-8 bg-transparent border-0 relative">[\s\S]*?<\/blockquote>/;
content = content.replace(eventosRegex, `<a href="https://despierta.juancapower.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-jcp-fire text-white font-space font-bold rounded-lg hover:bg-jcp-fire-l transition-all shadow-[0_0_15px_var(--jcp-fire-glow)] hover:shadow-[0_0_25px_var(--jcp-fire-glow)] mb-8">\n              Ver próximos eventos en despierta.juancapower.com <ArrowRight className="w-5 h-5 ml-2" />\n            </a>`);

// 6. Evento Despierta tu Power 28 de Marzo como pasado y en gris
// Currently I don't see it exactly if I replaced it before but wait, I see in Eventos section:
// Let me look at the Eventos section carefully.

fs.writeFileSync('src/App.tsx', content);

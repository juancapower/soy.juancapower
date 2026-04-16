const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The replacement for Eventos:
// Add 'Despierta tu Power' as past inside Eventos section
const eventosBodyRegex = /<div className="space-y-8 mt-10">[\s\S]*?<\/div>(\s*<\/div>)/;

const eventosBodyTarget = `<div className="space-y-8 mt-10">
              {/* Próximo Evento */}
              <div className="bg-jcp-surface border border-jcp-gold p-8 rounded-[16px] relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                <div className="absolute top-0 right-0 px-4 py-1 bg-jcp-gold text-jcp-bg text-xs font-bold font-mono uppercase rounded-bl-xl z-10">
                  Evento Principal
                </div>
                
                <div className="flex-1 w-full relative z-10">
                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <img src="https://res.cloudinary.com/doguggkp8/image/upload/v1775669543/Recurso_62_wwqnzv.png" alt="Logo Trascendiendo el Duelo" className="h-16 w-auto object-contain" />
                  </div>
                  <h4 className="text-[20px] font-space font-bold mb-2">Trascendiendo el duelo</h4>
                  <p className="font-jakarta text-[14px] text-jcp-text-2 font-normal mb-6">Junto a Daniela Sarfati y grandes speakers.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-mono mb-8 text-jcp-text">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-jcp-fire" />
                      Próximamente
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-jcp-fire" />
                      Trujillo, Perú
                    </div>
                  </div>
                  
                  <a href="https://despierta.juancapower.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-jcp-gold text-jcp-gold font-space font-bold rounded-lg hover:bg-jcp-gold hover:text-jcp-bg transition-all text-[14px]">
                    Reservar mi lugar <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Evento Pasado */}
              <div className="bg-jcp-surface-2 p-8 rounded-[16px] border border-jcp-border-n opacity-70">
                <div className="text-xs font-mono font-bold text-jcp-text-3 uppercase tracking-wider mb-2">Evento Pasado</div>
                <h4 className="text-[20px] font-space font-bold mb-2 text-jcp-text-2">Despierta tu Power</h4>
                <div className="flex items-center text-[14px] font-mono text-jcp-text-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  28 de marzo • Trujillo
                </div>
              </div>
            </div>$1`;

content = content.replace(eventosBodyRegex, eventosBodyTarget);

fs.writeFileSync('src/App.tsx', content);


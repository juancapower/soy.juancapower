const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The replacement for SistemaPower layout:

const sistemaBodyRegex = /<div className="grid md:grid-cols-2 gap-6">[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/section>)/;

const newSistemaBody = `        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative">
          
          {/* Architectural Lines */}
          <div className="hidden md:block absolute top-[120px] bottom-[120px] left-1/2 -translate-x-1/2 w-px bg-jcp-border-n z-0"></div>
          <div className="hidden md:block absolute top-[120px] left-1/4 right-1/4 h-px bg-jcp-border-n z-0"></div>
          <div className="hidden md:block absolute bottom-[120px] left-1/4 right-1/4 h-px bg-jcp-border-n z-0"></div>

          {/* Techo: Abundancia y Plenitud */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-jcp-surface-2 border border-jcp-gold/40 rounded-t-[3rem] p-8 md:p-10 text-center relative overflow-hidden shadow-[0_0_20px_rgba(197,160,89,0.15)] z-10"
          >
             <div className="absolute inset-0 bg-jcp-gold/5 blur-2xl"></div>
             <h4 className="text-[28px] font-space font-bold mb-4 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-jcp-cream to-jcp-gold" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>
               ✨ Abundancia y Plenitud
             </h4>
             <p className="text-[16px] font-jakarta text-jcp-text-2 font-normal relative z-10 max-w-xl mx-auto">El resultado de un sistema alineado. La manifestación de tu propósito en todas las áreas de tu vida.</p>
          </motion.div>

          {/* Columnas: Emoción y Cuerpo */}
          <div className="grid md:grid-cols-2 gap-6 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-jcp-surface-2 border border-jcp-border-n p-8 relative overflow-hidden group hover:border-jcp-border transition-colors text-center"
            >
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">1</div>
               <div className="text-3xl mb-4 relative z-10">💧</div>
               <h4 className="text-[20px] font-space font-semibold mb-2 text-jcp-text relative z-10">Emoción</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Dominio de tu energía interior. Pasa del estrés a la calma y toma decisiones asertivas.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-jcp-surface-2 border border-jcp-border-n p-8 relative overflow-hidden group hover:border-jcp-border transition-colors text-center"
            >
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">2</div>
               <div className="text-3xl mb-4 relative z-10">💪</div>
               <h4 className="text-[20px] font-space font-semibold mb-2 text-jcp-text relative z-10">Cuerpo</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Construcción de hábitos innegociables. Transforma tu cuerpo físico y maximiza tu energía.</p>
            </motion.div>
          </div>

          {/* Base: Espíritu y Mente */}
          <div className="grid md:grid-cols-2 gap-6 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-jcp-surface-2 border border-jcp-border-n rounded-bl-[3rem] p-8 relative overflow-hidden group hover:border-jcp-border transition-colors text-center"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-jcp-gold/5 to-transparent"></div>
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">3</div>
               <div className="text-3xl mb-4 relative z-10">🌌</div>
               <h4 className="text-[20px] font-space font-semibold mb-2 text-jcp-text relative z-10">Espíritu</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Conexión profunda con tu propósito y fe. La base inquebrantable de tu transformación.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-jcp-surface-2 border border-jcp-border-n rounded-br-[3rem] p-8 relative overflow-hidden group hover:border-jcp-border transition-colors text-center"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-jcp-gold/5 to-transparent"></div>
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">4</div>
               <div className="text-3xl mb-4 relative z-10">🧠</div>
               <h4 className="text-[20px] font-space font-semibold mb-2 text-jcp-text relative z-10">Mente</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Reprogramación de creencias limitantes. Construcción de una mentalidad de acero y enfoque láser.</p>
            </motion.div>
          </div>

        </div>`;

content = content.replace(/<div className="max-w-4xl mx-auto flex flex-col gap-8">[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/section>)/, newSistemaBody);

fs.writeFileSync('src/App.tsx', content);


const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// We have 3 target blocks to replace. I'll use multi block replacement with precise anchors.
// Block 1: Historia (between `const Historia = () => {` and `const SistemaPower = () => {`)
const historiaRegex = /const Historia = \(\) => \{[\s\S]*?(?=const SistemaPower = \(\) => \{)/;
const newHistoria = `const Historia = () => {
  return (
    <section id="historia" className="section-padding bg-jcp-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 relative flex"
          >
            {/* Timeline line */}
            <div className="w-[3px] bg-gradient-to-b from-jcp-fire via-jcp-fire-l to-transparent shrink-0 rounded-full mr-8 hidden md:block"></div>
            
            <div>
              <div className="text-sm font-mono font-bold text-jcp-gold uppercase tracking-[0.2em] mb-4">🌌 Mi Historia</div>
              <h2 className="text-[36px] md:text-[40px] font-space font-semibold mb-8 text-jcp-text leading-tight">
                Mi camino no empezó en la cima.
              </h2>
              
              <blockquote className="quote-background pl-6 py-2 mb-8 border-l border-jcp-border">
                <p className="font-cormorant text-[28px] text-jcp-cream font-semibold italic leading-snug relative z-10">
                  "Empezó en el dolor."
                </p>
              </blockquote>
              
              <div className="space-y-6 text-[16px] text-jcp-text-2 font-jakarta font-normal leading-[1.75] max-w-2xl">
                <p>
                  En la pérdida de mi madre, gordo pesando +de 100 kilos y en la profunda depresión que me trajo la ruptura de mi matrimonio en pandemia. Estaba atrapado, viviendo en piloto automático, desconectado de mi verdadero potencial.
                </p>
                <p>
                  Decidí reconstruirme. Perdí peso, recuperé mi disciplina y me conecté con mi mentalidad y espiritualidad para abrazar mi propósito.
                </p>
                <p>
                  Hoy, mi mayor motor es mi hija Valeria. Ella me recuerda todos los días que el liderazgo empieza en casa. Mi fe en Dios y mi compromiso con la acción masiva me han llevado a crear una vida que no necesita motivación externa, porque está construida sobre disciplina y resultados.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative w-full"
          >
            <div className="aspect-[3/4] rounded-[24px] overflow-hidden relative z-10">
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514609/JuanCa_Power_ygvsaf.png" 
                alt="JuanCa Power - Transformación Personal y Liderazgo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-jcp-fire/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-jcp-surface-2 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

`;

content = content.replace(historiaRegex, newHistoria);

// Block 2: SistemaPower (between `const SistemaPower = () => {` and `const Servicios = () => {`)
const sistemaRegex = /const SistemaPower = \(\) => \{[\s\S]*?(?=const Servicios = \(\) => \{)/;
const newSistema = `const SistemaPower = () => {
  return (
    <section id="sistema" className="section-padding relative overflow-hidden" style={{ backgroundImage: 'var(--background-image-gradient-space)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-sm font-mono font-bold text-jcp-gold uppercase tracking-[0.2em] mb-4">⚡ Sistema Power 4</div>
          <h2 className="text-[36px] font-space font-semibold mb-4 text-jcp-text">Un marco de transformación integral.</h2>
          <p className="text-[20px] font-cormorant italic text-jcp-text-2 font-normal">
            Diseñado para alinear tu vida, maximizar tu energía y generar resultados predecibles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-jcp-surface-2 border border-jcp-border-n rounded-[14px] p-6 relative overflow-hidden group"
            >
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">1</div>
               <div className="text-3xl mb-4 relative z-10">🌌</div>
               <h4 className="text-[18px] font-space font-semibold mb-2 text-jcp-text relative z-10">Espíritu</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Conexión profunda con tu propósito y fe. La base inquebrantable de tu transformación.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-jcp-surface-2 border border-jcp-border-n rounded-[14px] p-6 relative overflow-hidden group"
            >
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">2</div>
               <div className="text-3xl mb-4 relative z-10">🧠</div>
               <h4 className="text-[18px] font-space font-semibold mb-2 text-jcp-text relative z-10">Mente</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Reprogramación de creencias limitantes. Construcción de una mentalidad de acero y enfoque láser.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-jcp-surface-2 border border-jcp-border-n rounded-[14px] p-6 relative overflow-hidden group"
            >
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">3</div>
               <div className="text-3xl mb-4 relative z-10">💧</div>
               <h4 className="text-[18px] font-space font-semibold mb-2 text-jcp-text relative z-10">Emoción</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Dominio de tu energía interior. Pasa del estrés a la calma y toma decisiones asertivas.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-jcp-surface-2 border border-jcp-border-n rounded-[14px] p-6 relative overflow-hidden group"
            >
               <div className="absolute -bottom-4 right-2 text-8xl font-mono text-white opacity-5 select-none pointer-events-none font-bold">4</div>
               <div className="text-3xl mb-4 relative z-10">💪</div>
               <h4 className="text-[18px] font-space font-semibold mb-2 text-jcp-text relative z-10">Cuerpo</h4>
               <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed relative z-10">Construcción de hábitos innegociables. Transforma tu cuerpo físico y maximiza tu energía.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-jcp-surface-2 border border-jcp-gold/40 rounded-[24px] p-8 md:p-10 text-center relative overflow-hidden mt-4 shadow-[0_0_20px_rgba(197,160,89,0.15)]"
          >
             <div className="absolute inset-0 bg-jcp-gold/5 blur-2xl"></div>
             <h4 className="text-3xl font-space font-bold mb-4 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-jcp-cream to-jcp-gold" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>
               ✨ Abundancia y Plenitud
             </h4>
             <p className="text-[16px] font-jakarta text-jcp-text-2 font-normal relative z-10 max-w-xl mx-auto">El resultado de un sistema alineado.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

`;

content = content.replace(sistemaRegex, newSistema);

// Block 3: Servicios (between `const Servicios = () => {` and `const TestimonioVideo`)
const serviciosRegex = /const Servicios = \(\) => \{[\s\S]*?(?=const TestimonioVideo: React\.FC)/;
const newServicios = `const Servicios = () => {
  return (
    <section id="servicios" className="section-padding bg-jcp-surface relative overflow-hidden border-y border-jcp-border-n">
      {/* Subtle radial glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-jcp-fire/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <div className="text-sm font-mono font-bold text-jcp-fire uppercase tracking-[0.2em] mb-4">🔥 Trabaja Conmigo</div>
          <h2 className="text-[36px] font-space font-semibold mb-4 text-jcp-text">Espacios limitados para personas comprometidas.</h2>
          <p className="text-[20px] font-cormorant italic text-jcp-fire-l font-medium">
            Obsesiónate con tu objetivo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Speaker */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-jcp-surface-2 p-8 rounded-[16px] border border-jcp-border-n relative overflow-hidden group hover:border-jcp-border transition-colors h-full flex flex-col"
          >
            <div className="inline-block px-3 py-1 bg-white/5 text-jcp-text-2 text-xs font-mono font-bold uppercase tracking-wider rounded border border-white/10 mb-6 w-fit">
              Corporativo
            </div>
            <h4 className="text-[24px] font-space font-bold mb-4 text-jcp-text">Speaker</h4>
            <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed flex-grow">
              Llevo el mensaje de transformación, liderazgo y mentalidad de alto rendimiento a escenarios, empresas e instituciones. Una experiencia inmersiva diseñada para romper el piloto automático.
            </p>
            <a href="mailto:hola@juancapower.com" className="inline-flex items-center justify-center w-full mt-8 px-6 py-3 border border-jcp-border-n text-jcp-text-2 font-space font-bold rounded-lg hover:border-jcp-text hover:text-jcp-text transition-all text-[14px]">
              Solicitar cotización <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* Card 2: Mentoría Élite 1:1 - DESTACADA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-jcp-surface-2 p-8 rounded-[16px] border border-jcp-gold relative overflow-hidden group h-full flex flex-col lg:-translate-y-4 shadow-[0_0_30px_rgba(197,160,89,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-jcp-gold/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="inline-flex items-center px-3 py-1 bg-jcp-gold/10 text-jcp-gold text-xs font-mono font-bold uppercase tracking-wider rounded border border-jcp-gold/20 mb-6 w-fit">
              Servicio Premium ✨
            </div>
            <h4 className="text-[28px] font-space font-bold mb-4 text-jcp-text">Mentoría Élite 1:1</h4>
            <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed flex-grow mb-6">
              Acompañamiento privado y exclusivo para quienes están listos para dejar las excusas. Diseñaremos un plan de acción implacable para tu vida personal y profesional.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Claridad de propósito', 'Estrategia inquebrantable', 'Reprogramación mental'].map((item, i) => (
                <li key={i} className="flex items-start text-jcp-text text-[14px] font-jakarta">
                  <CheckCircle2 className="w-4 h-4 text-jcp-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/51963335717?text=Hola%20JuanCa,%20quiero%20aplicar%20a%20la%20mentoría%20élite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-4 bg-jcp-fire text-white font-space font-bold rounded-lg hover:bg-jcp-fire-l transition-all text-[16px] shadow-[0_0_15px_var(--jcp-fire-glow)] hover:shadow-[0_0_25px_var(--jcp-fire-glow)]">
              Aplicar ahora <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* Card 3: Comunidad Power */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-jcp-surface-2 p-8 rounded-[16px] border border-jcp-border-n relative overflow-hidden group hover:border-jcp-border transition-colors h-full flex flex-col"
          >
            <div className="inline-flex items-center px-3 py-1 bg-[#25D366]/10 text-[#25D366] text-xs font-mono font-bold uppercase tracking-wider rounded border border-[#25D366]/20 mb-6 w-fit">
              WhatsApp
            </div>
            <h4 className="text-[24px] font-space font-bold mb-4 text-jcp-text">Comunidad Power</h4>
            <p className="text-[14px] font-jakarta text-jcp-text-2 font-normal leading-relaxed flex-grow">
              Únete a nuestro grupo exclusivo de WhatsApp con personas elevando sus estándares todos los días. La tribu que necesitas.
            </p>
            <a href="https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe?mode=gi_t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full mt-8 px-6 py-3 border border-[#25D366]/30 text-[#25D366] font-space font-bold rounded-lg hover:bg-[#25D366]/10 transition-all text-[14px]">
              Unirme gratis <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

`;

content = content.replace(serviciosRegex, newServicios);

fs.writeFileSync('src/App.tsx', content);

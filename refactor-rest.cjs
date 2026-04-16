const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Refactor TestimonioVideo and Testimonios
const testimoniosRegex = /const TestimonioVideo: React\.FC[\s\S]*?(?=const Eventos = \(\) => \{)/;
const newTestimonios = `const TestimonioVideo: React.FC<{ src: string, name: string }> = ({ src, name }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group shrink-0 w-full mb-4"
      onClick={toggleMute}
    >
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
      />
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-2 rounded-full text-white z-10 transition-opacity">
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
    </div>
  );
};

const Testimonios = () => {
  const testimonios = [
    {
      name: "Ybeth A.",
      cargo: "Emprendedora",
      quote: "JuanCa me ayudó a encontrar esa fuerza interior que no sabía que tenía. Mi vida personal ha dado un giro total.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667361/Testimonio_YbethA_hjhhsw.mp4",
    },
    {
      name: "Fiorella S.",
      cargo: "Líder de Equipo",
      quote: "No es motivación barata, es estrategia, disciplina y resultados reales medibles. La comunidad Power es increíble.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_FiorellaS_k6drko.mp4",
    },
    {
      name: "Gabriella V.",
      cargo: "CEO",
      quote: "Alinear mis emociones con mi propósito de negocio fue el desbloqueo que necesitaba para escalar.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_GabrielaV_zpq676.mp4",
    },
    {
      name: "Karen G.",
      cargo: "Profesional Independiente",
      quote: "Entender que la mente dirige y el cuerpo ejecuta cambió mi forma de trabajar. Las sesiones 1 a 1 valen cada céntimo.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_KarenG_fkgzkm.mp4",
    },
    {
      name: "Alvaro V.",
      cargo: "Director Comercial",
      quote: "Pasé del piloto automático a tener el control intencional de mis días. La transformación es brutal y expansiva.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667358/Testimonio_AlvaroV_u1liet.mp4",
    }
  ];

  return (
    <section id="testimonios" className="section-padding bg-jcp-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-sm font-mono font-bold text-jcp-gold uppercase tracking-[0.2em] mb-4">💬 Resultados Reales</div>
          <h2 className="text-[32px] font-space font-semibold mb-8 text-jcp-text">Lo que dicen quienes ya tomaron acción.</h2>

          {/* Quote destacado */}
          <div className="bg-gradient-to-r from-[#1D1107] to-[#120B05] border border-jcp-fire/20 p-8 md:p-12 rounded-[24px] mb-12 shadow-[0_0_30px_var(--jcp-fire-glow)] relative">
            <div className="absolute -top-6 -left-2 text-jcp-fire/10 text-9xl font-cormorant select-none">"</div>
            <p className="font-cormorant text-[22px] italic text-jcp-cream relative z-10 font-medium">
              "El principal cambio no fue solo en mis finanzas o mi negocio, sino en la paz mental y la seguridad con la que tomo mis decisiones cada mañana."
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {testimonios.map((t, i) => (
            <div key={i} className="bg-jcp-surface border border-jcp-border-n rounded-[12px] p-5 flex flex-col relative">
              <TestimonioVideo src={t.video} name={t.name} />
              
              <div className="relative mt-2 flex-grow flex flex-col justify-between">
                <div className="absolute top-0 right-0 text-jcp-gold/10 text-6xl font-cormorant select-none">"</div>
                <p className="font-cormorant italic text-[16px] text-jcp-text mb-4 relative z-10 leading-snug">
                  "{t.quote}"
                </p>
                <div>
                  <div className="flex items-center text-jcp-fire mb-2 text-sm">
                    ★★★★★
                  </div>
                  <div className="font-space font-semibold text-[14px] text-jcp-text">{t.name}</div>
                  <div className="font-mono text-[10px] text-jcp-text-3 uppercase tracking-wider mt-1">{t.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

`;
content = content.replace(testimoniosRegex, newTestimonios);

// 2. Refactor Eventos -> Also adding RecursosGratuitos right before it.
const eventosRegex = /const Eventos = \(\) => \{[\s\S]*?(?=const PowerDigital = \(\) => \{)/;
const newEventos = `const RecursosGratuitos = () => {
  return (
    <section id="recursos" className="section-padding bg-jcp-surface relative border-y border-jcp-border-n">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm font-mono font-bold text-jcp-gold uppercase tracking-[0.2em] mb-4">🎁 Recursos Gratuitos</div>
          <h2 className="text-[32px] font-space font-semibold mb-4 text-jcp-text">Reprograma tu Mente</h2>
          <p className="text-[16px] font-jakarta font-normal text-jcp-text-2 mb-10 max-w-2xl mx-auto">
            Un sistema paso a paso para hackear tus creencias limitantes. Accede a mi clase gratis "Mentalidad Power" y descarga mis ebooks gratuitos para empezar tu camino de transformación personal.
          </p>
          <a href="#contacto" className="inline-flex items-center px-8 py-4 bg-jcp-fire text-white font-space font-bold rounded-lg hover:bg-jcp-fire-l transition-all text-[16px] shadow-[0_0_20px_var(--jcp-fire-glow)] hover:shadow-[0_0_30px_var(--jcp-fire-glow)] hover:-translate-y-1">
            Accede al material gratuito <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Eventos = () => {
  return (
    <section id="eventos" className="section-padding bg-jcp-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="text-sm font-mono font-bold text-jcp-gold uppercase tracking-[0.2em] mb-4">🎤 Próximos eventos</div>
            <h2 className="text-[32px] font-space font-semibold mb-6 text-jcp-text">La energía de la transformación en vivo.</h2>
            
            <blockquote className="quote-background pl-8 py-2 mb-8 bg-transparent border-0 relative">
              <p className="font-cormorant text-[24px] text-jcp-gold font-semibold italic leading-snug relative z-10">
                "No tiene comparación."
              </p>
            </blockquote>

            <div className="space-y-8 mt-10">
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
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="columns-2 sm:columns-2 gap-4 space-y-4"
          >
            {/* Masonry Grid of images */}
            <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776364279/CajaArequipa_Piura1_h6hbaz.jpg" alt="Evento" className="w-full rounded-xl object-cover mb-4" />
            <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514826/escenario_naywym.png" alt="Evento" className="w-full rounded-xl object-cover mb-4 aspect-video" />
            <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776364279/CajaArequipa_Piura2_hw7due.jpg" alt="Evento" className="w-full rounded-xl object-cover mb-4 aspect-video" />
            <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512311/TallerPNL_pizarra_onq7x1.png" alt="Evento" className="w-full rounded-xl object-cover mb-4 aspect-[3/4]" />
            <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776364279/CajaArequipa_Piura3_f9pi1u.jpg" alt="Evento" className="w-full rounded-xl object-cover mb-4 aspect-video" />
            <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512311/DtP_Inicio_gelwvj.png" alt="Evento" className="w-full rounded-xl object-cover mb-4 aspect-[4/5]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

`;
content = content.replace(eventosRegex, newEventos);

// 3. Refactor BottomCTA and Footer
const bottomCtaRegex = /const BottomCTA = \(\) => \{[\s\S]*?(?=export default function App)/;
const newBottomCta = `const BottomCTA = () => {
  return (
    <section id="contacto" className="section-padding bg-jcp-bg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B0D17 0%, #1A130C 100%)' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(230,81,0,0.15)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[36px] md:text-[42px] font-cormorant font-semibold italic mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-jcp-cream to-jcp-gold" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>
            El momento de tomar el control es ahora.
          </h2>
          <h3 className="text-[20px] font-space font-medium text-jcp-text-2 mb-8 max-w-2xl">
            No esperes a que las circunstancias sean perfectas.
          </h3>
          <p className="text-[16px] font-jakarta font-normal text-jcp-text-2 mb-10 max-w-2xl leading-[1.7]">
            Mi programa no es motivación, es reprogramación y acción masiva. Las plazas son limitadas debido a que trabajo personalmente con cada uno en la Mentoría Elite. Da el salto y reserva tu sesión exploratoria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <a 
              href="https://wa.me/51963335717?text=Hola%20JuanCa,%20quiero%20agendar%20mi%20sesión%20gratuita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-jcp-fire text-white font-space font-bold rounded-[8px] hover:bg-jcp-fire-l transition-all text-[18px] shadow-[0_0_20px_var(--jcp-fire-glow)] hover:shadow-[0_0_40px_var(--jcp-fire-glow)] hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              🔥 Agenda tu sesión gratuita
            </a>
            <a 
              href="mailto:hola@juancapower.com" 
              className="inline-flex items-center px-8 py-5 border border-jcp-border text-jcp-text font-space font-bold rounded-[8px] hover:border-jcp-text transition-all text-[16px] w-full sm:w-auto justify-center"
            >
              hola@juancapower.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-jcp-text-3 font-mono text-[11px] uppercase tracking-widest">
            <span>hola@juancapower.com</span>
            <span className="w-1 h-1 bg-jcp-text-3 rounded-full"></span>
            <span>+51 963 335 717</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-jcp-surface pt-16 pb-6 border-t border-jcp-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-[13px] font-jakarta text-jcp-text-3 font-normal max-w-sm mb-6 leading-relaxed">
              Mentoría premium, transformación real y liderazgo personal. Desarrollo de hábitos inquebrantables.
            </p>
          </div>
          
          {/* Col 2 */}
          <div className="md:col-span-1">
            <h4 className="font-space font-bold mb-6 text-jcp-text">Menú</h4>
            <ul className="space-y-4">
              <li><a href="#sistema" className="text-[13px] font-jakarta text-jcp-text-2 hover:text-jcp-gold transition-colors font-normal">Sistema Power 4</a></li>
              <li><a href="#servicios" className="text-[13px] font-jakarta text-jcp-text-2 hover:text-jcp-gold transition-colors font-normal">Trabaja Conmigo</a></li>
              <li><a href="#eventos" className="text-[13px] font-jakarta text-jcp-text-2 hover:text-jcp-gold transition-colors font-normal">Eventos</a></li>
              <li><a href="#recursos" className="text-[13px] font-jakarta text-jcp-text-2 hover:text-jcp-gold transition-colors font-normal">Recursos Gratuitos</a></li>
              <li><a href="#contacto" className="text-[13px] font-jakarta text-jcp-text-2 hover:text-jcp-gold transition-colors font-normal">Contacto</a></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="md:col-span-1">
            <h4 className="font-space font-bold mb-6 text-jcp-text">Sociales</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[8px] bg-jcp-surface-2 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-fire transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[8px] bg-jcp-surface-2 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-fire transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://youtube.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[8px] bg-jcp-surface-2 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-fire transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/soyjuancapower1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[8px] bg-jcp-surface-2 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-fire transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-4 text-[13px] font-jakarta text-jcp-text-3 font-normal">@soyjuancapower</p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-jcp-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-mono text-jcp-text-3 tracking-widest uppercase text-center md:text-left">
            © 2026 JuanCa Power · Diseñado por <a href="https://digital.juancapower.com" className="hover:text-jcp-gold underline underline-offset-4">Power Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

`;
content = content.replace(bottomCtaRegex, newBottomCta);

// 4. Also need to ensure <RecursosGratuitos /> is added to <main>
content = content.replace('<Testimonios />\n        <Eventos />', '<Testimonios />\n        <RecursosGratuitos />\n        <Eventos />');


fs.writeFileSync('src/App.tsx', content);

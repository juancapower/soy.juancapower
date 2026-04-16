import React, { useState, useEffect } from 'react';
import { Menu, X, Star, ChevronRight, Play, ArrowRight, CheckCircle2, MapPin, Calendar, Mail, Instagram, Youtube, Facebook, MessageCircle, Flame, Brain, Dumbbell, Heart, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import EliteSection from './components/EliteSection';

const NoiseOverlay = () => (
  <div 
    className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
  ></div>
);

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/51963335717" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="fixed bottom-6 right-6 z-[60] bg-jcp-fire text-white p-4 rounded-full shadow-[0_0_20px_var(--jcp-fire-glow)] hover:scale-110 hover:shadow-[0_0_30px_var(--jcp-fire-glow)] transition-all flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

const Logo = () => (
  <div className="flex items-center space-x-3">
    <img 
      src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514898/favicon_pegejm.png" 
      alt="Isotipo JuanCa Power" 
      className="h-10 w-10 md:h-12 md:w-12 object-contain"
      referrerPolicy="no-referrer"
    />
    <div className="flex flex-col justify-center">
      <span className="font-space font-bold text-xl md:text-2xl leading-none tracking-tight text-white mb-1">
        JuanCa <span className="text-[#C5A059]">Power</span>
      </span>
      <span className="font-cormorant italic text-jcp-gold text-[12px] md:text-[14px] leading-none">
        No esperes motivación.
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'sistema', name: 'Sistema Power', href: '#sistema' },
    { id: 'servicios', name: 'Trabaja Conmigo', href: '#servicios' },
    { id: 'eventos', name: 'Eventos', href: '#eventos' },
    { id: 'recursos', name: 'Recursos', href: '/mentalidadpower' },
    { id: 'contacto', name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-jcp-surface/90 backdrop-blur-xl border-b border-jcp-border-n py-4 shadow-lg shadow-black/20' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <Logo />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                className="text-[14px] font-jakarta font-medium text-jcp-text-2 hover:text-jcp-text transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/51963335717"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#E65100] text-white font-space font-semibold rounded-lg hover:bg-jcp-fire-l transition-all shadow-[0_0_15px_var(--jcp-fire-glow)] hover:shadow-[0_0_25px_var(--jcp-fire-glow)]"
            >
              Agenda tu sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-jcp-text p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 bg-jcp-bg z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6 pb-6 flex flex-col`}>
        <div className="flex-1 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-jakarta font-medium text-jcp-text-2 hover:text-jcp-text transition-colors border-b border-jcp-border-n pb-4"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a 
            href="https://wa.me/51963335717"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 bg-[#E65100] text-white font-space font-semibold rounded-lg hover:bg-jcp-fire-l transition-all shadow-[0_0_15px_var(--jcp-fire-glow)] hover:shadow-[0_0_25px_var(--jcp-fire-glow)] text-center text-lg"
          >
            Agenda tu sesión
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775666946/JuanCa_Hero_zyte0x.png" 
          alt="JuanCa Power - Speaker y Mentor de Mentalidad en Perú" 
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jcp-bg/80 via-jcp-bg/60 to-jcp-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-jcp-bg/90 via-jcp-bg/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-jcp-gold/30 bg-jcp-fire/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-jcp-fire animate-pulse"></span>
            <span className="text-xs font-space font-medium text-jcp-gold tracking-wider uppercase">Mentoría Premium 1:1 Activa</span>
          </div>
          
          <h1 className="text-[clamp(44px,7vw,80px)] font-bold tracking-tight mb-6 leading-[1.1] title-tight">
            <span className="block text-[18px] text-jcp-text-2 font-jakarta mb-4 font-normal tracking-normal uppercase normal-case">Speaker & Mentor de Mentalidad en Perú</span>
            <span className="text-jcp-text">No esperes motivación.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold opacity-100 via-jcp-cream to-jcp-gold" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Crea resultados.</span>
          </h1>
          
          <p className="text-[16px] text-jcp-text-2 mb-10 max-w-[560px] font-jakarta font-normal leading-relaxed">
            Transforma tus relaciones, tu cuerpo y tu gestión emocional. Deja de andar en automático y construye una vida con propósito, yo te guío.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="https://wa.me/51963335717?text=Hola%20JuanCa,%20quiero%20agendar%20mi%20sesión%20gratuita" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-jcp-fire text-white font-space font-bold rounded-lg hover:bg-jcp-fire-l transition-all flex items-center justify-center group text-[16px] shadow-[0_0_15px_var(--jcp-fire-glow)] hover:shadow-[0_0_25px_var(--jcp-fire-glow)]">
              Agenda tu sesión gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicios" className="px-8 py-4 border border-jcp-border text-jcp-text-2 font-space font-bold rounded-lg hover:text-jcp-text hover:bg-white/5 transition-all flex items-center justify-center text-[16px]">
              Ver cómo funciono <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-8 pt-8 border-t border-jcp-border-n max-w-lg"
          >
            <div>
              <div className="text-2xl font-space font-bold text-jcp-text mb-1">+200</div>
              <div className="text-[12px] text-jcp-text-2 uppercase tracking-wider font-space">Personas Impactadas</div>
            </div>
            <div className="w-px h-12 bg-jcp-border-n"></div>
            <div>
              <div className="text-2xl font-space font-bold text-jcp-text mb-1 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-jcp-gold" />
                5
              </div>
              <div className="text-[12px] text-jcp-text-2 uppercase tracking-wider font-space">Ciudades Impactadas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Historia = () => {
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
              
              <blockquote className="quote-background pl-8 py-2 mb-8 bg-transparent border-0 relative">
                <p className="font-cormorant text-[28px] text-jcp-gold font-semibold italic leading-snug relative z-10">
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

const SistemaPower = () => {
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

                <div className="max-w-4xl mx-auto flex flex-col gap-6 relative">
          
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

        </div>
      </div>
    </section>
  );
};

const Servicios = () => {
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

const TestimonioVideo: React.FC<{ src: string, name: string }> = ({ src, name }) => {
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

const RecursosGratuitos = () => {
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
          <a href="https://mentalidad.juancapower.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-jcp-fire text-white font-space font-bold rounded-lg hover:bg-jcp-fire-l transition-all text-[16px] shadow-[0_0_20px_var(--jcp-fire-glow)] hover:shadow-[0_0_30px_var(--jcp-fire-glow)] hover:-translate-y-1">
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
            
            <a href="https://despierta.juancapower.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-jcp-gold text-jcp-gold font-space font-bold rounded-lg hover:bg-jcp-gold hover:text-jcp-bg transition-all mb-8">
              Próximos eventos <ArrowRight className="w-5 h-5 ml-2" />
            </a>

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

              {/* Evento Pasado */}
              <div className="bg-jcp-surface-2 p-8 rounded-[16px] border border-jcp-border-n opacity-70">
                <div className="text-xs font-mono font-bold text-jcp-text-3 uppercase tracking-wider mb-4">Evento Pasado</div>
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773382331/logo_ofofvn.png" alt="Logo Despierta tu Power" className="h-12 w-auto object-contain opacity-80" />
                </div>
                <h4 className="text-[20px] font-space font-bold mb-2 text-jcp-text-2">Despierta tu Power</h4>
                <div className="flex items-center text-[14px] font-mono text-jcp-text-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  28 de marzo • Trujillo
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

const BottomCTA = () => {
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

export default function App() {
  return (
    <div className="min-h-screen bg-jcp-bg text-jcp-text font-jakarta selection:bg-jcp-fire/30 selection:text-gold-light">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <SistemaPower />
        <Servicios />
        <Testimonios />
        <RecursosGratuitos />
        <Eventos />
        <EliteSection />
        <BottomCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

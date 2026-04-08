import React, { useState, useEffect } from 'react';
import { Menu, X, Star, ChevronRight, Play, ArrowRight, CheckCircle2, MapPin, Calendar, Mail, Instagram, Youtube, Facebook, MessageCircle, Flame, Brain, Dumbbell, Heart, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

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
    className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

const Logo = () => (
  <img 
    src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775674989/JuanCa_Power_Hor_kqtnsc.png" 
    alt="JuanCa Power" 
    className="h-10 md:h-12 w-auto"
    referrerPolicy="no-referrer"
  />
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
    { id: 'inicio', name: 'Inicio', href: '#inicio' },
    { id: 'historia', name: 'Mi Historia', href: '#historia' },
    { id: 'sistema', name: 'Sistema Power 4', href: '#sistema' },
    { id: 'servicios', name: 'Servicios', href: '#servicios' },
    { id: 'testimonios', name: 'Testimonios', href: '#testimonios' },
    { id: 'eventos', name: 'Eventos', href: '#eventos' },
    { id: 'agencia', name: <>Agencia <span className="text-cyan-400">Power</span> Digital</>, href: 'https://digital.juancapower.com' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-main/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <Logo />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                className="text-sm font-space font-medium text-text-muted hover:text-gold-premium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              className="px-6 py-2.5 bg-gold-premium text-bg-main font-space font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              Agenda tu sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-1 border-t border-white/5 shadow-2xl">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-space font-medium text-text-muted hover:text-gold-premium transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-gold-premium text-bg-main font-space font-semibold rounded-full hover:bg-gold-light transition-colors text-center mt-4"
            >
              Agenda tu sesión
            </a>
          </div>
        </div>
      )}
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
          alt="JuanCa Power Background" 
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/80 via-bg-main/60 to-bg-main"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main/90 via-bg-main/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold-premium/30 bg-gold-premium/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-premium animate-pulse"></span>
            <span className="text-xs font-space font-medium text-gold-premium tracking-wider uppercase">Mentoría Premium 1:1 Activa</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            No esperes motivación. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-premium">Crea resultados.</span>
          </h1>
          
          <p className="font-cormorant text-2xl md:text-3xl text-text-muted italic mb-8 max-w-2xl leading-relaxed">
            "Todo de la mano de Dios, es posible. Todo siempre sucede a tu favor."
          </p>
          
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl font-light leading-relaxed">
            Transforma tus relaciones, tu cuerpo y tu gestión emocional. Deja de andar en automático y construye una vida con propósito, yo te guío.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contacto" className="px-8 py-4 bg-gold-premium text-bg-main font-space font-bold rounded-full hover:bg-gold-light transition-all flex items-center justify-center group text-lg shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(197,160,89,0.5)]">
              Agenda tu sesión
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicios" className="px-8 py-4 border border-gold-premium text-gold-premium font-space font-bold rounded-full hover:bg-gold-premium/10 transition-all flex items-center justify-center text-lg">
              Accede a material gratuito
            </a>
          </div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 max-w-lg"
          >
            <div>
              <div className="text-3xl font-space font-bold text-text-main mb-1">+200</div>
              <div className="text-sm text-text-muted uppercase tracking-wider font-space">Personas Impactadas</div>
            </div>
            <div>
              <div className="text-3xl font-space font-bold text-text-main mb-1 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-gold-premium" />
                5
              </div>
              <div className="text-sm text-text-muted uppercase tracking-wider font-space">Ciudades Impactadas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Historia = () => {
  return (
    <section id="historia" className="py-24 md:py-32 bg-surface-1 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative z-10">
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514609/JuanCa_Power_ygvsaf.png" 
                alt="JuanCa Power Perfil" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-premium/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-surface-2 rounded-full z-0"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-space font-bold text-gold-premium uppercase tracking-[0.2em] mb-4">Mi Historia</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Del piloto automático a una <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-premium">vida con propósito.</span>
            </h3>
            
            <div className="space-y-6 text-text-muted text-lg font-light leading-relaxed">
              <p>
                Mi camino no empezó en la cima. Empezó en el dolor, en la pérdida de mi madre, gordo pesando +de 100 kilos y en la profunda depresión que me trajo la ruptura de mi matrimonio en pandemia. Estaba atrapado, viviendo en piloto automático, desconectado de mi verdadero potencial.
              </p>
              
              <blockquote className="border-l-4 border-gold-premium pl-6 my-8 py-2">
                <p className="font-cormorant text-3xl md:text-4xl text-white italic leading-snug">
                  "La transformación real requiere decisiones difíciles."
                </p>
              </blockquote>

              <p>
                Decidí reconstruirme. Perdí peso, recuperé mi disciplina y me conecté con mi mentalidad y espiritualidad para abrazar mi propósito.
              </p>
              <p>
                Hoy, mi mayor motor es mi hija Valeria. Ella me recuerda todos los días que el liderazgo empieza en casa. Mi fe en Dios y mi compromiso con la acción masiva me han llevado a crear una vida que no necesita motivación externa, porque está construida sobre disciplina y resultados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SistemaPower = () => {
  return (
    <section id="sistema" className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-premium/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-space font-bold text-gold-premium uppercase tracking-[0.2em] mb-4">El Método</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Sistema Power 4</h3>
          <p className="text-xl text-text-muted font-light">
            Un marco de transformación integral diseñado para alinear tu vida, maximizar tu energía y generar resultados predecibles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Architectural Lines */}
          <div className="hidden md:block absolute top-[120px] bottom-[120px] left-1/2 -translate-x-1/2 w-px bg-white/10 z-0"></div>
          <div className="hidden md:block absolute top-[120px] left-1/4 right-1/4 h-px bg-white/10 z-0"></div>
          <div className="hidden md:block absolute bottom-[120px] left-1/4 right-1/4 h-px bg-white/10 z-0"></div>

          {/* Techo: Abundancia y Plenitud */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface-1 p-8 rounded-t-[3rem] border border-white/5 border-b-0 hover:border-gold-premium/30 transition-colors text-center mb-4 relative overflow-hidden group z-10"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-gold-premium/5 to-transparent"></div>
             <Star className="w-12 h-12 text-gold-premium mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
             <h4 className="text-2xl font-space font-bold mb-2">Abundancia y Plenitud</h4>
             <p className="text-text-muted font-light leading-relaxed max-w-2xl mx-auto">El resultado de un sistema alineado. La manifestación de tu propósito en todas las áreas de tu vida.</p>
          </motion.div>

          {/* Columnas: Cuerpo y Emociones */}
          <div className="grid md:grid-cols-2 gap-4 mb-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface-1 p-8 border border-white/5 hover:border-gold-premium/30 transition-colors text-center group"
            >
              <Dumbbell className="w-12 h-12 text-gold-premium mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-2xl font-space font-bold mb-2">Cuerpo</h4>
              <p className="text-text-muted font-light leading-relaxed">Disciplina física como vehículo de energía. Si no dominas tu cuerpo, no dominas tu vida.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-surface-1 p-8 border border-white/5 hover:border-gold-premium/30 transition-colors text-center group"
            >
              <Heart className="w-12 h-12 text-gold-premium mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-2xl font-space font-bold mb-2">Emociones</h4>
              <p className="text-text-muted font-light leading-relaxed">Inteligencia emocional y resiliencia. Aprender a actuar a pesar del miedo o la falta de motivación.</p>
            </motion.div>
          </div>

          {/* Base: Mente y Espíritu */}
          <div className="grid md:grid-cols-2 gap-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-1 p-8 rounded-bl-[3rem] border border-white/5 hover:border-gold-premium/30 transition-colors text-center relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-gold-premium/5 to-transparent"></div>
               <Brain className="w-12 h-12 text-gold-premium mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
               <h4 className="text-2xl font-space font-bold mb-2">Mente</h4>
               <p className="text-text-muted font-light leading-relaxed">Reprogramación de creencias limitantes. Construcción de una mentalidad de acero y enfoque láser.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-surface-1 p-8 rounded-br-[3rem] border border-white/5 hover:border-gold-premium/30 transition-colors text-center relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-gold-premium/5 to-transparent"></div>
               <Flame className="w-12 h-12 text-gold-premium mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
               <h4 className="text-2xl font-space font-bold mb-2">Espíritu</h4>
               <p className="text-text-muted font-light leading-relaxed">Conexión profunda con tu propósito y fe. La base inquebrantable de tu transformación.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Servicios = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-surface-2 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-space font-bold text-gold-premium uppercase tracking-[0.2em] mb-4">Trabaja Conmigo</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Oferta Actual</h3>
          </div>
          <p className="text-text-muted font-light max-w-md">
            Espacios limitados para personas comprometidas con su transformación. No trabajo con excusas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Service */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-bg-main p-10 rounded-3xl border border-gold-premium/20 relative overflow-hidden group hover:border-gold-premium/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-premium/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-premium/20 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-gold-premium/10 text-gold-premium text-xs font-space font-bold uppercase tracking-wider rounded-full mb-6">
                Servicio Premium
              </div>
              <h4 className="text-3xl md:text-4xl font-bold mb-4">Mentoría 1:1</h4>
              <p className="text-lg text-text-muted font-light mb-8 max-w-xl">
                Agenda tu primera mentoría totalmente gratis. Sesiones privadas de alto impacto vía Google Meet. Diseñaremos un plan de acción implacable para tu vida personal y profesional.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Claridad absoluta de propósito', 'Estrategia de disciplina inquebrantable', 'Reprogramación mental', 'Acompañamiento directo'].map((item, i) => (
                  <li key={i} className="flex items-center text-text-main">
                    <CheckCircle2 className="w-5 h-5 text-gold-premium mr-3 flex-shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="https://wa.me/51963335717?text=Hola%20JuanCa,%20quiero%20agendar%20mi%20primera%20mentoría%20gratuita" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-gold-premium text-bg-main font-space font-bold rounded-full hover:bg-gold-light transition-all text-center shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(197,160,89,0.5)]">
                  Agendar primera mentoría gratuita
                </a>
                <span className="text-text-muted font-space text-sm">Desde S/75 a S/150 (40-60 min)</span>
              </div>
            </div>
          </motion.div>

          {/* Secondary Services */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-surface-1 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors"
            >
              <h4 className="text-xl font-space font-bold mb-2 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                Comunidad Salón Power
              </h4>
              <p className="text-text-muted font-light text-sm mb-6">Únete a nuestro grupo exclusivo de WhatsApp con personas elevando sus estándares todos los días.</p>
              <a href="https://wa.me/51963335717" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] text-black font-space font-bold rounded-full hover:bg-[#20bd5a] transition-colors text-sm hover:scale-105">
                <MessageCircle className="w-4 h-4 mr-2" />
                Unirme al grupo de WhatsApp
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-surface-1 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="inline-block px-2 py-1 bg-[#E65100]/20 text-[#E65100] text-[10px] font-space font-bold uppercase tracking-wider rounded mb-4">
                Próximamente
              </div>
              <h4 className="text-xl font-space font-bold mb-2">Mini Curso: Reprograma tu Mente</h4>
              <p className="text-text-muted font-light text-sm mb-4">Un sistema paso a paso para hackear tus creencias limitantes.</p>
              <div className="text-lg font-space font-bold text-text-main">S/97</div>
            </motion.div>
          </div>
        </div>

        {/* Free Resources & Corporate */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mt-8"
        >
          <div className="bg-surface-1 p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-premium/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="inline-block px-2 py-1 bg-gold-premium/10 text-gold-premium text-[10px] font-space font-bold uppercase tracking-wider rounded mb-4">
                Speaker
              </div>
              <h4 className="text-xl font-space font-bold mb-2">Conferencias y Talleres</h4>
              <p className="text-text-muted font-light text-sm mb-6">
                Llevo el mensaje de transformación y liderazgo a empresas e instituciones. Experiencia comprobada con Caja Arequipa y más.
              </p>
            </div>
            <a href="mailto:hola@juancapower.com" className="text-gold-premium font-space font-bold text-sm flex items-center hover:text-gold-light transition-colors relative z-10">
              Solicitar propuesta <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-surface-1 p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-space font-bold mb-2">Recursos Gratuitos</h4>
              <p className="text-text-muted font-light text-sm mb-6">
                Accede a mi clase gratis "Mentalidad Power" en YouTube y descarga mis ebooks gratuitos para empezar tu camino.
              </p>
            </div>
            <a href="https://youtube.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="text-gold-premium font-space font-bold text-sm flex items-center hover:text-gold-light transition-colors">
              Ver contenido <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonioVideo: React.FC<{ src: string, name: string }> = ({ src, name }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className="bg-surface-1 rounded-2xl overflow-hidden border border-white/5 relative aspect-[9/16] group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <div className="flex items-center justify-between">
          <span className="font-space font-bold text-white">{name}</span>
          <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm text-white hover:bg-gold-premium transition-colors">
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full backdrop-blur-sm flex items-center justify-center text-white group-hover:opacity-0 transition-opacity">
        <Play className="w-5 h-5 ml-1" />
      </div>
      
      {/* Mobile Tap Indicator */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 md:hidden">
        {isMuted ? <VolumeX size={14} className="text-white" /> : <Volume2 size={14} className="text-white" />}
        <span className="text-white text-[10px] font-space font-bold uppercase tracking-wider">Tap</span>
      </div>
    </div>
  );
};

const Testimonios = () => {
  const testimonios = [
    {
      name: "Ybeth A.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667361/Testimonio_YbethA_hjhhsw.mp4",
    },
    {
      name: "Fiorella S.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_FiorellaS_k6drko.mp4",
    },
    {
      name: "Gabriella V.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_GabrielaV_zpq676.mp4",
    },
    {
      name: "Karen G.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_KarenG_fkgzkm.mp4",
    },
    {
      name: "Alvaro V.",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667358/Testimonio_AlvaroV_u1liet.mp4",
    }
  ];

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-space font-bold text-gold-premium uppercase tracking-[0.2em] mb-4">Resultados Reales</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Lo que dicen quienes ya tomaron acción</h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {testimonios.map((t, i) => (
            <TestimonioVideo key={i} src={t.video} name={t.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Eventos = () => {
  return (
    <section id="eventos" className="py-24 md:py-32 bg-surface-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-space font-bold text-gold-premium uppercase tracking-[0.2em] mb-4">En Vivo</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Escenarios y Eventos</h3>
            <p className="text-text-muted font-light text-lg mb-12">
              La energía de la transformación en vivo no tiene comparación. Llevo el mensaje a escenarios, talleres y eventos corporativos para generar impacto real y duradero.
            </p>

            <div className="space-y-8">
              {/* Próximo Evento */}
              <div className="bg-surface-2 p-8 rounded-3xl border border-[#E65100]/30 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div className="absolute top-0 right-0 px-4 py-1 bg-[#E65100] text-white text-xs font-bold font-space uppercase rounded-bl-xl z-10">
                  Próximo Evento
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <img src="https://res.cloudinary.com/doguggkp8/image/upload/v1775669543/Recurso_62_wwqnzv.png" alt="Logo Trascendiendo el Duelo" className="h-16 w-auto object-contain" />
                  </div>
                  <p className="text-text-muted font-light mb-6">Junto a Daniela Sarfati y otros grandes speakers.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-space mb-8">
                    <div className="flex items-center text-text-main">
                      <Calendar className="w-4 h-4 mr-2 text-[#E65100]" />
                      03 de mayo de 2026
                    </div>
                    <div className="flex items-center text-text-main">
                      <MapPin className="w-4 h-4 mr-2 text-[#E65100]" />
                      Trujillo, Perú
                    </div>
                  </div>
                  
                  <a href="https://despierta.juancapower.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#E65100] text-white font-space font-bold rounded-full hover:bg-[#cc4800] transition-colors">
                    Ver detalles del evento <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
                <div className="w-full md:w-48 shrink-0">
                  <img src="https://res.cloudinary.com/doguggkp8/image/upload/v1775669608/MobileTeDv2_v8ztzd.jpg" alt="Afiche Trascendiendo el Duelo" className="w-full h-auto rounded-xl shadow-lg border border-white/10" />
                </div>
              </div>

              {/* Evento Pasado */}
              <div className="bg-bg-main p-8 rounded-3xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-xs font-space text-text-muted uppercase tracking-wider mb-2">Evento Pasado</div>
                <h4 className="text-xl font-space font-bold mb-2">Despierta tu Power</h4>
                <div className="flex items-center text-sm font-space text-text-muted">
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775669405/Despierta_tu_Power_pxfjyw.jpg" 
                alt="JuanCa Power en escenario" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-2 p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs">
              <div className="text-3xl font-space font-bold text-gold-premium mb-1">+10</div>
              <div className="text-sm text-text-main font-light">Talleres y conferencias realizados en Lima y el norte del Perú.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PowerDigital = () => {
  return (
    <section className="py-24 bg-surface-1 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-space font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Mi Partner Tecnológico</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              ¿Quieres saber cuál es la agencia que trabaja mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">branding y página web?</span>
            </h3>
            <p className="text-text-muted font-light text-lg mb-10 max-w-lg">
              Conoce a <span className="text-cyan-400 font-bold">Power Digital</span>. Mi extensión estratégica enfocada en IA, branding y creación de contenido para potenciar tu marca personal, emprendimientos y negocios en el mundo digital.
            </p>
            <a href="https://digital.juancapower.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-space font-bold rounded-full hover:bg-cyan-300 transition-colors hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Visitar Power Digital <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="absolute inset-0 bg-cyan-400/10 blur-[60px] rounded-full scale-75 z-0"></div>
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
              <div className="absolute bottom-6 left-0 w-full text-center z-30">
                <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-white text-sm font-space font-bold rounded-full border border-white/10">
                  Conoce a Amara - Modelo Digital 100% IA
                </span>
              </div>
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1774478528/hf_20260313_184816_fc5087de-2ff6-498d-a0a0-3c6f3bcef096_tfwmtg.jpg" 
                alt="Amara - Modelo Digital" 
                className="w-full h-full object-cover relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  return (
    <section className="py-32 bg-bg-main relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775666946/JuanCa_Hero_zyte0x.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gold-premium/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Tu nueva vida está a una <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-premium">decisión de distancia.</span>
          </h2>
          <p className="text-xl text-text-muted font-light mb-12 max-w-2xl mx-auto">
            No esperes a que las circunstancias sean perfectas. El momento de tomar el control y crear resultados es ahora.
          </p>
          
          <a 
            href="https://wa.me/51963335717?text=Hola%20JuanCa,%20quiero%20agendar%20mi%20primera%20mentoría%20gratuita" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-gold-premium text-bg-main font-space font-bold rounded-full hover:bg-gold-light transition-all text-xl shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_50px_rgba(197,160,89,0.6)] hover:scale-105"
          >
            Agenda tu mentoría gratuita
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-main pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-text-muted font-light max-w-sm mb-8">
              Mentoría premium, transformación real y liderazgo personal. No esperes motivación, crea resultados.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold-premium hover:border-gold-premium transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold-premium hover:border-gold-premium transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://youtube.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold-premium hover:border-gold-premium transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/soyjuancapower1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold-premium hover:border-gold-premium transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-space font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-text-muted hover:text-gold-premium transition-colors font-light">Inicio</a></li>
              <li><a href="#historia" className="text-text-muted hover:text-gold-premium transition-colors font-light">Mi Historia</a></li>
              <li><a href="#sistema" className="text-text-muted hover:text-gold-premium transition-colors font-light">Sistema Power 4</a></li>
              <li><a href="#servicios" className="text-text-muted hover:text-gold-premium transition-colors font-light">Servicios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-text-muted font-light">
              <li>hola@juancapower.com</li>
              <li>+51 963 335 717</li>
              <li className="pt-4">
                <span className="block font-space font-bold text-text-main mb-2">Presencia en Perú:</span>
                Lima, Piura, Talara, Trujillo, Sullana
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm font-light">
            © {new Date().getFullYear()} JuanCa Power. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-text-muted font-light">
            <a href="#" className="hover:text-gold-premium transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-gold-premium transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-main font-jakarta selection:bg-gold-premium/30 selection:text-gold-light">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <SistemaPower />
        <Servicios />
        <Testimonios />
        <Eventos />
        <PowerDigital />
        <BottomCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

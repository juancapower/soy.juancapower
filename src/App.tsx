import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MapPin, Calendar, Mail, Instagram, Youtube, Facebook, Star, Flame } from 'lucide-react';
import { motion } from 'motion/react';

// Import our highly polished, modular JuanCa Power 3.0 sections
import EventosSection from './components/EventosSection';
import HistoriaSection from './components/HistoriaSection';
import SistemaPowerSection from './components/SistemaPowerSection';
import PowerDigitalSection from './components/PowerDigitalSection';
import ComunidadSection from './components/ComunidadSection';
import ConferenciasSection from './components/ConferenciasSection';
import TestimoniosSection from './components/TestimoniosSection';
import EliteSection from './components/EliteSection';
import MentoriaSection from './components/MentoriaSection';
import SocialProofHighlights from './components/SocialProofHighlights';
import RutaConversionSection from './components/RutaConversionSection';

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
    className="fixed bottom-6 right-6 z-[60] bg-jcp-power text-white p-4 rounded-full shadow-[0_0_20px_var(--jcp-power-glow)] hover:scale-110 hover:shadow-[0_0_30px_var(--jcp-power-glow)] transition-all flex items-center justify-center animate-bounce"
    aria-label="Contactar por WhatsApp"
  >
    <WhatsAppIcon size={28} />
  </a>
);

const Logo = () => (
  <div className="flex items-center space-x-3 group">
    {/* Isotipo JuanCa Power Refined */}
    <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden rounded-xl border border-jcp-gold/30 bg-jcp-surface shadow-[0_0_15px_rgba(197,160,89,0.15)] group-hover:border-jcp-power/40 group-hover:shadow-[0_0_20px_rgba(67,97,238,0.25)] transition-all">
      <img 
        src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783016428/Favicon_JuanCaPower_w4zc3b.png" 
        alt="Isotipo JuanCa Power" 
        className="h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className="font-space font-bold text-lg md:text-xl leading-none tracking-tight text-[#d8d9da]">
        JuanCa Power
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
    { id: 'eventos', name: 'Eventos', href: '#eventos' },
    { id: 'sistema', name: 'Sistema Power', href: '#sistema' },
    { id: 'comunidad', name: 'Comunidad', href: '#comunidad' },
    { id: 'conferencias', name: 'Conferencias', href: '#conferencias' },
    { id: 'mentoria', name: 'Mentoría', href: '#mentoria' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-jcp-surface/90 backdrop-blur-xl border-b border-jcp-border-n py-4 shadow-lg shadow-black/20' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <Logo />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-jcp-text-2 hover:text-jcp-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#mentoria"
              className="px-5 py-2.5 bg-jcp-power text-white font-space font-bold rounded-lg text-xs hover:bg-jcp-power-l transition-all shadow-[0_0_15px_var(--jcp-power-glow)] hover:shadow-[0_0_25px_var(--jcp-power-glow)]"
            >
              Agenda una Sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-jcp-text p-2"
              aria-label="Toggle Menu"
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
              className="text-lg font-space font-bold uppercase tracking-wider text-jcp-text-2 hover:text-jcp-gold transition-colors border-b border-white/5 pb-4"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a 
            href="#mentoria"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 bg-jcp-power text-white font-space font-bold rounded-lg hover:bg-jcp-power-l transition-all shadow-[0_0_15px_var(--jcp-power-glow)] hover:shadow-[0_0_25px_var(--jcp-power-glow)] text-center text-base"
          >
            Agenda una Sesión
          </a>
        </div>
      </div>
    </nav>
  );
};

const DigitalParticles = () => {
  const particles = Array.from({ length: 8 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 3; // 3px to 8px
        const isGold = Math.random() > 0.5;
        const colorClass = isGold ? "bg-[#C5A059]" : "bg-[#4361EE]";
        const duration = Math.random() * 15 + 15; // 15s to 30s
        const delay = Math.random() * -15;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-30 ${colorClass}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0B0D17]">
      {/* Background Image with Cinematic Ken Burns and Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          animate={{ 
            scale: [1.02, 1.08, 1.02],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 25, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
          src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783036806/JuanCaPower_Hero_kajv6v.png" 
          alt="JuanCa Power en escenario" 
          className="w-full h-full object-cover object-center opacity-65 lg:opacity-75"
          referrerPolicy="no-referrer"
        />
        {/* Obsidian Overlay Filters */}
        <div className="absolute inset-0 bg-[#0B0D17]/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D17]/90 via-transparent to-[#0B0D17]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D17] via-[#0B0D17]/80 to-transparent"></div>
        
        {/* Tech Glow Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4361EE]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D6B15F]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <DigitalParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-[#D6B15F]/20 bg-jcp-power/10 mb-8 self-start backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4361EE] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold text-[#D6B15F] tracking-[0.15em] uppercase">
              SPEAKER • MENTOR DE TRANSFORMACIÓN • CEO POWER DIGITAL
            </span>
          </motion.div>
          
          {/* Título */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(44px,6.5vw,76px)] font-space font-bold tracking-tight mb-4 leading-none text-white uppercase"
          >
            JUANCA POWER
          </motion.h1>

          {/* Frase principal */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1 mb-6"
          >
            <h2 className="text-2xl md:text-4xl lg:text-[46px] font-space font-bold leading-tight text-white/95">
              Despierta tu poder.
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-[46px] font-space font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D6B15F] via-[#E7C97A] to-[#F4D890]">
              Lidera tu mente.
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-[46px] font-space font-bold leading-tight text-[#4361EE]">
              Transforma tu vida.
            </h2>
          </motion.div>
          
          {/* Descripción */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-jcp-text-2 mb-8 max-w-[720px] font-jakarta font-normal leading-relaxed"
          >
            Mentoría, experiencias y sistema de transformación para personas y equipos que quieren vivir con propósito, disciplina e impacto.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14"
          >
            <a 
              href="#mentoria" 
              className="relative group px-8 py-4 bg-jcp-power text-white font-space font-bold rounded-xl overflow-hidden transition-all flex items-center justify-center text-sm shadow-[0_0_20px_rgba(67,97,238,0.35)] hover:shadow-[0_0_35px_rgba(67,97,238,0.55)] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10 flex items-center gap-2">
                ⚡ Agendar mentoría
              </span>
            </a>
            <a 
              href="#eventos" 
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-space font-bold rounded-xl transition-all flex items-center justify-center text-sm hover:-translate-y-0.5 shadow-sm"
            >
              🔥 Ver experiencia en vivo
            </a>
          </motion.div>

          {/* Authority Metrics Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 border-t border-white/5 max-w-3xl"
          >
            <div>
              <div className="text-2xl md:text-3xl font-space font-bold text-white mb-0.5">+300</div>
              <div className="text-[10px] text-jcp-text-3 uppercase tracking-widest font-mono font-bold">personas impactadas</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/5"></div>
            <div>
              <div className="text-2xl md:text-3xl font-space font-bold text-white mb-0.5">+50</div>
              <div className="text-[10px] text-jcp-text-3 uppercase tracking-widest font-mono font-bold">mentorías</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/5"></div>
            <div>
              <div className="text-2xl md:text-3xl font-space font-bold text-white mb-0.5">2 países</div>
              <div className="text-xs text-jcp-text-3 font-sans font-medium flex items-center gap-1">
                <span>(</span>
                <span className="text-base" title="Perú">🇵🇪</span>
                <span className="mx-0.5 text-[10px] font-mono uppercase text-jcp-text-3">y</span>
                <span className="text-base" title="USA">🇺🇸</span>
                <span>)</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/5"></div>
            <div>
              <div className="text-sm font-space font-bold text-jcp-gold mb-0.5">SPEAKER & MENTOR</div>
              <div className="text-[10px] text-jcp-text-3 uppercase tracking-widest font-mono font-bold">de transformación</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  return (
    <section id="contacto" className="section-padding bg-jcp-bg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B0D17 0%, #10121F 100%)' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(67,97,238,0.12)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-4">LLAMADO AL LIDERAZGO</span>
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 leading-tight text-white tracking-tight">
            Tu próxima versión <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>no se espera. Se entrena.</span>
          </h2>
          <p className="font-jakarta text-jcp-text-2 text-base leading-relaxed mb-10 max-w-2xl">
            No bases tu futuro en motivación barata o discursos vacíos. Adopta un sistema científico de alto rendimiento corporal, mental, espiritual y estratégico optimizado para sostener tus resultados en el tiempo. Las plazas son exclusivas y limitadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 w-full sm:w-auto">
            <a 
              href="#mentoria" 
              className="inline-flex items-center px-8 py-4 bg-jcp-power text-white font-space font-bold rounded-xl hover:bg-jcp-power-l transition-all text-sm shadow-[0_0_20px_var(--jcp-power-glow)] hover:shadow-[0_0_35px_var(--jcp-power-glow)] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              ⚡ Agendar mentoría
            </a>
            <a 
              href="#eventos" 
              className="inline-flex items-center px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-space font-bold rounded-xl text-sm w-full sm:w-auto justify-center"
            >
              🎟️ Reservar mi lugar
            </a>
          </div>

          <div className="flex items-center gap-4 text-jcp-text-3 font-mono text-[10px] uppercase tracking-widest border-t border-white/5 pt-6 w-full justify-center">
            <span>hola@juancapower.com</span>
            <span className="w-1.5 h-1.5 bg-jcp-gold rounded-full"></span>
            <span>+51 963 335 717</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-jcp-surface pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Logo />
              <p className="text-xs font-jakarta text-jcp-text-2 max-w-sm mt-6 leading-relaxed">
                Sistemas avanzados de transformación personal, mentalidad premium y expansión digital de legado.
              </p>
            </div>
            <p className="mt-8 text-[11px] font-mono text-jcp-text-3 uppercase tracking-wider">
              No esperes motivación. Crea resultados.
            </p>
          </div>
          
          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-space font-bold text-sm uppercase tracking-widest text-white mb-6 border-b border-white/5 pb-2">Menú</h4>
            <ul className="space-y-3">
              <li><a href="#eventos" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Evento</a></li>
              <li><a href="#historia" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Historia</a></li>
              <li><a href="#sistema" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Sistema Power 4</a></li>
              <li><a href="#power-digital" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Power Digital</a></li>
              <li><a href="#comunidad" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Comunidad</a></li>
              <li><a href="#conferencias" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Conferencias</a></li>
              <li><a href="#mentoria" className="text-xs font-mono text-jcp-text-2 hover:text-jcp-gold transition-colors">Mentoría</a></li>
            </ul>
          </div>
          
          {/* Social Icons Column */}
          <div className="md:col-span-4">
            <h4 className="font-space font-bold text-sm uppercase tracking-widest text-white mb-6 border-b border-white/5 pb-2">Sociales</h4>
            <div className="flex space-x-3 mb-6">
              <a href="https://instagram.com/soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-power transition-all hover:shadow-[0_0_10px_var(--jcp-power-glow)]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-power transition-all hover:shadow-[0_0_10px_var(--jcp-power-glow)]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://youtube.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-power transition-all hover:shadow-[0_0_10px_var(--jcp-power-glow)]">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/soyjuancapower1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-jcp-text-2 hover:text-white hover:bg-jcp-power transition-all hover:shadow-[0_0_10px_var(--jcp-power-glow)]">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-jcp-text-3 uppercase tracking-wider">@soyjuancapower</p>
          </div>
        </div>
        
        {/* Under-Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-jcp-text-3 tracking-widest uppercase text-center md:text-left">
            © 2026 JuanCa Power · Diseñado por <a href="https://digital.juancapower.com" className="hover:text-jcp-gold underline underline-offset-4">Power Digital</a>
          </p>
          <span className="text-[9px] font-mono text-jcp-text-3 tracking-widest uppercase">
            LIDERAZGO & TRANSFORMACIÓN PERSONAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    // Fallback attempts to ensure scroll happens after layout and paints
    setTimeout(handleHashScroll, 100);
    setTimeout(handleHashScroll, 500);
    setTimeout(handleHashScroll, 1000);

    window.addEventListener('load', handleHashScroll);
    return () => window.removeEventListener('load', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-jcp-bg text-jcp-text font-jakarta selection:bg-jcp-power/30 selection:text-gold-light">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        
        {/* SOCIAL PROOF HIGHLIGHTS */}
        <SocialProofHighlights />
        
        {/* SECCIÓN 2 — PRÓXIMO EVENTO */}
        <EventosSection />
        
        {/* SECCIÓN 3 — HISTORIA */}
        <HistoriaSection />
        
        {/* SECCIÓN 4 — SISTEMA POWER 4™ */}
        <SistemaPowerSection />
        
        {/* RUTA DE CONVERSIÓN — ELIGE TU CAMINO */}
        <RutaConversionSection />
        
        {/* SECCIÓN 5 — POWER DIGITAL™ */}
        <PowerDigitalSection />
        
        {/* SECCIÓN 6 — COMUNIDAD POWER */}
        <ComunidadSection />
        
        {/* SECCIÓN 7 — MENTORÍA PREMIUM */}
        <MentoriaSection />
        
        {/* SECCIÓN 8 — CONFERENCIAS */}
        <ConferenciasSection />
        
        {/* SECCIÓN 9 — TESTIMONIOS */}
        <TestimoniosSection />
        
        {/* BACKED BY ELITE SECTION */}
        <EliteSection />
        
        <BottomCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

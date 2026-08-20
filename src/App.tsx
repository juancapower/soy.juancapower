import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MapPin, Calendar, Mail, Instagram, Youtube, Facebook, Star, Flame, ShieldCheck } from 'lucide-react';
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
import LiberaTuPropositoPage from './pages/LiberaTuPropositoPage';

import { OFFICIAL_EVENT_INFO, PAYMENT_CONFIG, TICKET_ZONES, buildLtpGeneralWhatsAppLink } from './data/liberaTuProposito';
import { trackLtpContact } from './utils/ltpTracking';

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

const InstagramBrandIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <radialGradient id="rgInstaHero" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#rgInstaHero)"/>
    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="#ffffff"/>
  </svg>
);

const TikTokBrandIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const YoutubeBrandIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookBrandIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="12" fill="#1877F2"/>
    <path fill="#FFFFFF" d="M15.12 12.7l.42-2.73h-2.62V8.2c0-.75.37-1.48 1.54-1.48h1.19V4.4a14.52 14.52 0 00-2.12-.18c-2.16 0-3.57 1.31-3.57 3.68v2.07H7.55v2.73h2.41V24h2.98V12.7h2.18z"/>
  </svg>
);

const LinkedInBrandIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M19 19H16.33V14.82C16.33 13.82 16.31 12.54 14.94 12.54C13.55 12.54 13.34 13.62 13.34 14.75V19H10.67V10.42H13.23V11.59H13.27C13.63 10.91 14.51 10.19 15.82 10.19C18.54 10.19 19.04 11.98 19.04 14.31V19ZM7.76 9.25C6.9 9.25 6.21 8.56 6.21 7.7C6.21 6.84 6.9 6.15 7.76 6.15C8.62 6.15 9.31 6.84 9.31 7.7C9.31 8.56 8.62 9.25 7.76 9.25ZM9.1 19H6.42V10.42H9.1V19Z" fill="white"/>
  </svg>
);

const SpotifyBrandIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="12" fill="#1DB954"/>
    <path fill="#000000" d="M17.9 16.2a.7.7 0 01-1 .2c-2.7-1.6-6.1-2-10.1-1.1a.7.7 0 11-.3-1.4c4.4-1 8.2-.5 11.2 1.3a.7.7 0 01.2 1zm1.5-3.3a.9.9 0 01-1.2.3c-3.1-1.9-7.8-2.5-11.5-1.3a.9.9 0 11-.5-1.7c4.2-1.3 9.4-.6 13 1.6a.9.9 0 01.2 1.1zm.1-3.4C15.8 7.3 9.7 7.1 6.2 8.2a1 1 0 01-.6-2c4-1.2 10.8-1 15.1 1.6a1 1 0 01-1.2 1.7z"/>
  </svg>
);

const NoiseOverlay = () => (
  <div 
    className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" 
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
  ></div>
);

const FloatingWhatsApp = ({ isLtp = false }: { isLtp?: boolean }) => {
  const href = isLtp
    ? buildLtpGeneralWhatsAppLink()
    : "https://wa.me/51963335717";

  const handleClick = () => {
    if (isLtp) {
      trackLtpContact({
        zone_id: 'general',
        zone_name: 'Consulta Floating WhatsApp',
        quantity: 1,
        value: 0,
      });
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[60] bg-jcp-power text-white p-4 rounded-full shadow-[0_0_20px_var(--jcp-power-glow)] hover:scale-110 hover:shadow-[0_0_30px_var(--jcp-power-glow)] transition-all flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
};

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

const Navbar = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
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
    { id: 'historia', name: 'Mi Historia', href: '#historia' },
    { id: 'ltp', name: 'Libera Tu Propósito 🎟️', href: '/libera-tu-proposito', isSublanding: true },
    { id: 'sistema', name: 'Sistema Power 4', href: '#sistema' },
    { id: 'decision', name: 'Tu Decisión', href: '#elige-tu-camino' },
    { id: 'testimonios', name: 'Testimonios', href: '#testimonios' },
  ];

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.isSublanding && onNavigate) {
      e.preventDefault();
      onNavigate(link.href);
    } else if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
      e.preventDefault();
      onNavigate('/' + link.href);
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
      e.preventDefault();
      onNavigate('/#mentoria');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-jcp-surface/90 backdrop-blur-xl border-b border-jcp-border-n py-4 shadow-lg shadow-black/20' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            onClick={(e) => {
              if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="flex-shrink-0"
          >
            <Logo />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                  link.isSublanding 
                    ? 'text-jcp-gold font-bold px-3 py-1 bg-jcp-gold/10 border border-jcp-gold/25 rounded-full hover:bg-jcp-gold/20 shadow-[0_0_12px_rgba(214,177,95,0.15)]' 
                    : 'text-jcp-text-2 hover:text-jcp-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#mentoria"
              onClick={handleCtaClick}
              className="px-5 py-2.5 bg-jcp-power text-white font-space font-bold rounded-lg text-xs hover:bg-jcp-power-l transition-all shadow-[0_0_15px_var(--jcp-power-glow)] hover:shadow-[0_0_25px_var(--jcp-power-glow)]"
            >
              Agenda tu Sesión
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
              onClick={(e) => handleNavClick(e, link)}
              className={`text-lg font-space font-bold uppercase tracking-wider transition-colors border-b border-white/5 pb-4 ${
                link.isSublanding ? 'text-jcp-gold' : 'text-jcp-text-2 hover:text-jcp-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a 
            href="#mentoria"
            onClick={handleCtaClick}
            className="block w-full py-4 bg-jcp-power text-white font-space font-bold rounded-lg hover:bg-jcp-power-l transition-all shadow-[0_0_15px_var(--jcp-power-glow)] hover:shadow-[0_0_25px_var(--jcp-power-glow)] text-center text-base"
          >
            Agenda tu Sesión
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

const Hero = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
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
          className="w-full h-full object-cover object-center lg:object-[center_25%] opacity-85 lg:opacity-95"
          referrerPolicy="no-referrer"
        />
        {/* Obsidian Overlay Filters - Adjusted for maximum photo visibility and legibility */}
        <div className="absolute inset-0 bg-[#0B0D17]/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D17]/80 via-transparent to-[#0B0D17]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D17] via-[#0B0D17]/65 to-transparent/30"></div>
        
        {/* Tech Glow Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4361EE]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D6B15F]/15 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <DigitalParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-[#D6B15F]/35 bg-[#D6B15F]/10 mb-8 self-start backdrop-blur-md shadow-[0_0_20px_rgba(214,177,95,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#D6B15F] animate-ping"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D6B15F] tracking-[0.15em] uppercase">
              🔥 PRÓXIMO EVENTO PRESENCIAL · LIMA 2026
            </span>
          </motion.div>
          
          {/* Título Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(22px,3vw,32px)] font-space font-extrabold tracking-widest text-[#D6B15F] uppercase mb-2"
          >
            JUANCA POWER
          </motion.div>

          {/* H1 Principal Único Visible */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(36px,5.2vw,62px)] font-space font-bold tracking-tight mb-6 leading-[1.08] text-white uppercase"
          >
            Despierta tu POWER y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B15F] via-[#E7C97A] to-[#F4D890]">construye tu nueva versión</span>
          </motion.h1>
          
          {/* Descripción concisa */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-jcp-text-2 mb-8 max-w-[760px] font-jakarta font-normal leading-relaxed"
          >
            JuanCa Power es speaker, mentor y creador del Sistema POWER 4 (Espíritu, Mente, Emoción y Cuerpo). Acompaña a personas, emprendedores y organizaciones a potenciar su liderazgo, integrar tecnología e Inteligencia Artificial y tomar decisiones con propósito y visión estratégica.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-10"
          >
            {/* MAIN PRIMARY CTA: LIBERA TU PROPÓSITO */}
            <a 
              href="/libera-tu-proposito" 
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/libera-tu-proposito');
                }
              }}
              className="relative group px-8 py-4.5 bg-gradient-to-r from-[#D6B15F] via-[#F5DC9A] to-[#D6B15F] hover:from-[#E7C97A] hover:via-[#FFF3C4] hover:to-[#E7C97A] text-black font-space font-extrabold rounded-2xl overflow-hidden transition-all flex items-center justify-center text-base sm:text-lg shadow-[0_0_35px_rgba(214,177,95,0.45)] hover:shadow-[0_0_55px_rgba(214,177,95,0.7)] hover:-translate-y-1 transform border border-white/50"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <div className="relative z-10 flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                </span>
                <span className="tracking-tight uppercase">🎟️ Libera Tu Propósito // Entradas Lima 2026</span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>

            {/* SECONDARY CTA: AGENDA MENTORÍA */}
            <a 
              href="#mentoria" 
              className="px-7 py-4.5 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 text-white font-space font-bold rounded-2xl transition-all flex items-center justify-center text-sm sm:text-base hover:-translate-y-0.5 shadow-sm"
            >
              ⚡ Agenda mentoría 1-a-1
            </a>
          </motion.div>

          {/* MINIMALIST HERO SOCIAL MEDIA BAR */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5 mb-12"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-jcp-text-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white">Sígueme:</span>
            </span>

            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a 
                href="https://instagram.com/soyjuancapower" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#E1306C]/80 hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(225,48,108,0.4)] flex items-center justify-center group"
                title="Instagram @soyjuancapower"
              >
                <InstagramBrandIcon size={20} className="transition-transform group-hover:scale-105" />
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@soyjuancapower" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#00F2FE]/80 hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] flex items-center justify-center group"
                title="TikTok @soyjuancapower"
              >
                <TikTokBrandIcon size={20} className="text-white transition-transform group-hover:scale-105" />
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@soyjuancapower" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#FF0000]/80 hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] flex items-center justify-center group"
                title="YouTube @soyjuancapower"
              >
                <YoutubeBrandIcon size={20} className="transition-transform group-hover:scale-105" />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/soyjuancapower1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#1877F2]/80 hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(24,119,242,0.4)] flex items-center justify-center group"
                title="Facebook @soyjuancapower1"
              >
                <FacebookBrandIcon size={20} className="transition-transform group-hover:scale-105" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/soyjuancapower/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#0A66C2]/80 hover:scale-110 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] flex items-center justify-center group"
                title="LinkedIn soyjuancapower"
              >
                <LinkedInBrandIcon size={20} className="transition-transform group-hover:scale-105" />
              </a>
            </div>

            <span className="text-[11px] font-mono font-bold text-jcp-gold bg-jcp-gold/10 px-3 py-1 rounded-full border border-jcp-gold/25 shadow-[0_0_10px_rgba(214,177,95,0.15)]">
              @soyjuancapower
            </span>
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
    <footer className="bg-jcp-surface pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Legal Info Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Logo />
              <p className="text-xs font-jakarta text-jcp-text-2 max-w-sm mt-5 leading-relaxed">
                Sistemas avanzados de transformación personal, mentalidad premium y expansión digital de legado.
              </p>
            </div>

            {/* Official Company Badge */}
            <div className="mt-6 p-4 bg-white/[0.02] border border-white/10 rounded-2xl max-w-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-jcp-gold shrink-0" />
                <span className="font-space font-bold text-xs text-white tracking-wide">
                  JC ESTRATEGIA Y DISEÑO INTEGRAL E.I.R.L.
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-jcp-text-2 pl-6">
                <span>RUC: <strong className="text-jcp-gold font-bold">20615315525</strong></span>
                <span className="text-white/20">•</span>
                <span className="text-jcp-text-3 uppercase tracking-wider">Perú</span>
              </div>
            </div>

            <p className="mt-6 text-[11px] font-mono text-jcp-text-3 uppercase tracking-wider">
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
            <h4 className="font-space font-bold text-sm uppercase tracking-widest text-white mb-6 border-b border-white/5 pb-2">Redes Oficiales</h4>
            <div className="flex flex-wrap gap-2.5 mb-6">
              <a href="https://instagram.com/soyjuancapower" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all hover:shadow-[0_0_15px_rgba(225,48,108,0.35)]" title="Instagram @soyjuancapower">
                <InstagramBrandIcon size={20} />
              </a>
              <a href="https://tiktok.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00F2FE] hover:bg-black transition-all hover:shadow-[0_0_15px_rgba(0,242,254,0.35)]" title="TikTok @soyjuancapower">
                <TikTokBrandIcon size={20} className="text-white" />
              </a>
              <a href="https://youtube.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.35)]" title="YouTube @soyjuancapower">
                <YoutubeBrandIcon size={20} />
              </a>
              <a href="https://www.facebook.com/soyjuancapower1" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all hover:shadow-[0_0_15px_rgba(24,119,242,0.35)]" title="Facebook soyjuancapower1">
                <FacebookBrandIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/soyjuancapower/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all hover:shadow-[0_0_15px_rgba(10,102,194,0.35)]" title="LinkedIn soyjuancapower">
                <LinkedInBrandIcon size={20} />
              </a>
            </div>
            <p className="text-[11px] font-mono text-jcp-text-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>@soyjuancapower</span>
            </p>
          </div>
        </div>
        
        {/* Under-Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="text-[10px] font-mono text-jcp-text-3 tracking-widest uppercase">
              © 2026 JuanCa Power · Diseñado por <a href="https://digital.juancapower.com" className="hover:text-jcp-gold underline underline-offset-4">Power Digital</a>
            </p>
            <p className="text-[10px] font-mono text-jcp-text-3/80 tracking-wider">
              <span className="text-white/80 font-bold">JC ESTRATEGIA Y DISEÑO INTEGRAL E.I.R.L.</span> · RUC 20615315525 · Perú
            </p>
          </div>
          <span className="text-[9px] font-mono text-jcp-text-3 tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            LIDERAZGO & TRANSFORMACIÓN PERSONAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path.split('#')[0].split('?')[0]);
      
      const hash = path.includes('#') ? path.substring(path.indexOf('#') + 1) : '';
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      const normalized = currentPath.toLowerCase();
      if (hash && (normalized === '/' || normalized === '')) {
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
  }, [currentPath]);

  // Dynamic Head Metadata Updates for Client-Side Navigation
  useEffect(() => {
    const isLtp = currentPath.toLowerCase().includes('libera-tu-proposito');
    
    if (isLtp) {
      document.title = "Libera tu Propósito Lima 2026 | Entradas y zonas";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Conoce fechas, sede, zonas, precios y beneficios de Libera tu Propósito, evento presencial del 17 y 18 de octubre de 2026 en Miraflores, Lima. Reserva por WhatsApp.');
      }
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://www.juancapower.com/libera-tu-proposito');
      }
    } else {
      document.title = "JuanCa Power | Speaker, Mentor y Creador del Sistema POWER 4";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'JuanCa Power integra mentalidad, propósito, liderazgo, tecnología e IA para ayudar a personas y marcas a construir una versión más consciente y estratégica.');
      }
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://www.juancapower.com/');
      }
    }
  }, [currentPath]);

  // Normalize path for robust route matching (supports query params, trailing slashes, case-insensitivity)
  const normalizedPath = currentPath.toLowerCase().trim();
  const isLiberaTuProposito = 
    normalizedPath.includes('libera-tu-proposito') || 
    normalizedPath.startsWith('/libera-tu-proposito');

  // Check if user is requesting sublanding
  if (isLiberaTuProposito) {
    return (
      <div className="min-h-screen bg-jcp-bg text-jcp-text font-jakarta selection:bg-jcp-power/30 selection:text-gold-light">
        <NoiseOverlay />
        <Navbar onNavigate={navigateTo} />
        <main>
          <LiberaTuPropositoPage onNavigate={navigateTo} />
        </main>
        <Footer />
        <FloatingWhatsApp isLtp={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jcp-bg text-jcp-text font-jakarta selection:bg-jcp-power/30 selection:text-gold-light">
      <NoiseOverlay />
      <Navbar onNavigate={navigateTo} />
      <main>
        <Hero onNavigate={navigateTo} />
        
        {/* SOCIAL PROOF HIGHLIGHTS */}
        <SocialProofHighlights />
        
        {/* SECCIÓN 2 — PRÓXIMO EVENTO */}
        <EventosSection onNavigate={navigateTo} />
        
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

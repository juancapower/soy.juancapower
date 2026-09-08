import React, { useState, useEffect } from 'react';
import HomeNavbar from './components/home/HomeNavbar';
import HeroSection from './components/home/HeroSection';
import PosicionamientoSection from './components/home/PosicionamientoSection';
import ProximoEventoCompact from './components/home/ProximoEventoCompact';
import TerritoriosSection from './components/home/TerritoriosSection';
import HistoriaEditorialSection from './components/home/HistoriaEditorialSection';
import PowerLabSection from './components/home/PowerLabSection';
import TrabajaConmigoSection from './components/home/TrabajaConmigoSection';
import PowerDigitalTeaser from './components/home/PowerDigitalTeaser';
import CtaFinalSection from './components/home/CtaFinalSection';
import HomeFooter from './components/home/HomeFooter';

import LiberaTuPropositoPage from './pages/LiberaTuPropositoPage';
import { buildLtpGeneralWhatsAppLink } from './data/liberaTuProposito';
import { trackLtpContact } from './utils/ltpTracking';

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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

const FloatingWhatsApp = ({ isLtp = false }: { isLtp?: boolean }) => {
  const href = isLtp
    ? buildLtpGeneralWhatsAppLink()
    : "https://wa.me/51963335717?text=Hola%20JuanCa,%20te%20escribo%20desde%20tu%20web%20personal.";

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
      className="fixed bottom-6 right-6 z-[60] bg-[#4361ee] hover:bg-[#6a82fb] text-white p-3.5 rounded-full shadow-[0_0_25px_rgba(67,97,238,0.35)] hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
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
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    setTimeout(handleHashScroll, 100);
    setTimeout(handleHashScroll, 400);

    window.addEventListener('load', handleHashScroll);
    return () => window.removeEventListener('load', handleHashScroll);
  }, [currentPath]);

  // Dynamic Head Metadata Updates for Client-Side Navigation
  useEffect(() => {
    const isLtp = currentPath.toLowerCase().includes('libera-tu-proposito');
    
    if (isLtp) {
      document.title = "Libera tu Propósito Lima 2026 | Entradas y Zonas Oficiales";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Conoce fechas, sede, zonas, precios y beneficios de Libera tu Propósito, evento presencial del 17 y 18 de octubre de 2026 en Miraflores, Lima. Reserva por WhatsApp.');
      }
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://www.juancapower.com/libera-tu-proposito');
      }
    } else {
      document.title = "JuanCa Power | Marca Personal · Mentalidad, Tecnología y Propósito";
      
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

  // Normalize path for robust route matching
  const normalizedPath = currentPath.toLowerCase().trim();

  // Temporary 302 redirect for /powerprompts to Notion guide
  const isPowerPrompts = 
    normalizedPath === '/powerprompts' || 
    normalizedPath.startsWith('/powerprompts/') || 
    normalizedPath.startsWith('/powerprompts?') || 
    normalizedPath.startsWith('/powerprompts#') ||
    normalizedPath === '/powerprompts.html';

  if (isPowerPrompts) {
    if (typeof window !== 'undefined') {
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      window.location.replace('https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5' + search + hash);
    }
    return (
      <div className="min-h-screen bg-[#0b0d17] text-[#f8f9fa] flex flex-col items-center justify-center p-6 text-center font-jakarta">
        <p className="text-xl font-space font-bold mb-4 text-white">Redirigiendo a Power Prompts…</p>
        <a 
          href="https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5"
          className="text-[#deb660] underline font-mono text-sm hover:text-[#ecd28a] transition-colors"
        >
          Haz clic aquí si no eres redirigido automáticamente
        </a>
      </div>
    );
  }

  const isLiberaTuProposito = 
    normalizedPath.includes('libera-tu-proposito') || 
    normalizedPath.startsWith('/libera-tu-proposito');

  // Sublanding /libera-tu-proposito
  if (isLiberaTuProposito) {
    return (
      <div className="min-h-screen bg-[#0b0d17] text-[#f8f9fa] font-jakarta selection:bg-[#4361ee]/30 selection:text-[#deb660]">
        <NoiseOverlay />
        <HomeNavbar onNavigate={navigateTo} />
        <main>
          <LiberaTuPropositoPage onNavigate={navigateTo} />
        </main>
        <HomeFooter onNavigate={navigateTo} />
        <FloatingWhatsApp isLtp={true} />
      </div>
    );
  }

  // Home Page: Rediseño Integral de Marca Personal
  return (
    <div className="min-h-screen bg-[#0b0d17] text-[#f8f9fa] font-jakarta selection:bg-[#4361ee]/30 selection:text-[#deb660]">
      <NoiseOverlay />
      <HomeNavbar onNavigate={navigateTo} />
      <main>
        {/* 01. HERO (DARK) */}
        <HeroSection onNavigate={navigateTo} />

        {/* 02. BLOQUE DE LOS 4 PILARES (LIGHT) */}
        <PosicionamientoSection />

        {/* 03. PRÓXIMO EVENTO (DARK) */}
        <ProximoEventoCompact onNavigate={navigateTo} />

        {/* 04. TRES TERRITORIOS (LIGHT) */}
        <TerritoriosSection />

        {/* 05. HISTORIA (DARK) */}
        <HistoriaEditorialSection />

        {/* 06. POWER LAB TEASER (LIGHT) */}
        <PowerLabSection onNavigate={navigateTo} />

        {/* 07. TRABAJA CONMIGO: SPEAKER + MENTORÍA (DARK) */}
        <TrabajaConmigoSection />

        {/* 08. POWER DIGITAL (LIGHT) */}
        <PowerDigitalTeaser />

        {/* 09. CTA FINAL (DARK) */}
        <CtaFinalSection />
      </main>
      <HomeFooter onNavigate={navigateTo} />
      <FloatingWhatsApp />
    </div>
  );
}

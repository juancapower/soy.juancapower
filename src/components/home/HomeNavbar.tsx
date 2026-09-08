import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HomeNavbarProps {
  onNavigate?: (path: string) => void;
}

export default function HomeNavbar({ onNavigate }: HomeNavbarProps) {
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
    { id: 'sobre-mi', name: 'Sobre mí', href: '#sobre-mi' },
    { id: 'power-lab', name: 'Power Lab', href: '#power-lab' },
    { id: 'speaker', name: 'Speaker', href: '#speaker' },
    { id: 'mentoria', name: 'Mentoría', href: '#mentoria' },
    { id: 'eventos', name: 'Eventos', href: '/libera-tu-proposito', isSublanding: true },
    { id: 'contacto', name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);

    if (link.isSublanding && onNavigate) {
      e.preventDefault();
      onNavigate(link.href);
      return;
    }

    if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
      e.preventDefault();
      onNavigate('/' + link.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0d17]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Lockup */}
          <a
            href="#inicio"
            onClick={(e) => {
              if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="flex items-center space-x-3.5 group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl border border-white/12 bg-[#101322] shadow-sm group-hover:border-[#deb660]/40 transition-colors">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783016428/Favicon_JuanCaPower_w4zc3b.png"
                alt="Isotipo JuanCa Power"
                className="h-5 w-5 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-base tracking-tight text-white group-hover:text-[#f8f9fa] transition-colors leading-none">
                JuanCa Power
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9ea3b5] mt-1">
                Mentalidad · IA · Propósito
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-[13px] font-jakarta tracking-wide transition-colors ${
                  link.isSublanding
                    ? 'text-white font-semibold hover:text-[#deb660] flex items-center gap-1.5'
                    : 'text-[#9ea3b5] hover:text-white font-medium'
                }`}
              >
                <span>{link.name}</span>
                {link.isSublanding && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#deb660]" />
                )}
              </a>
            ))}

            {/* External Partner link: Power Digital */}
            <a
              href="https://www.powerdigital.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-jakarta font-medium text-[#9ea3b5] hover:text-white transition-colors flex items-center gap-1 group py-1"
            >
              <span>Power Digital</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#636980] group-hover:text-[#deb660] transition-colors" />
            </a>

            {/* Direct CTA */}
            <a
              href="#mentoria"
              onClick={(e) => {
                if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
                  e.preventDefault();
                  onNavigate('/#mentoria');
                }
              }}
              className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-white font-jakarta text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              Mentoría 1:1
            </a>
          </nav>

          {/* Mobile Button Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="#mentoria"
              className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-jakarta text-xs font-semibold border border-white/10"
            >
              Mentoría
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/5 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0b0d17]/98 backdrop-blur-2xl z-50 px-6 py-8 flex flex-col justify-between border-t border-white/10 overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#636980] mb-2">
              Navegación Principal
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-lg font-space font-semibold tracking-tight py-2.5 border-b border-white/[0.05] flex items-center justify-between ${
                  link.isSublanding ? 'text-[#deb660]' : 'text-white hover:text-[#4361ee]'
                }`}
              >
                <span>{link.name}</span>
                {link.isSublanding && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#deb660]/10 border border-[#deb660]/30 text-[#deb660]">
                    17–18 Oct
                  </span>
                )}
              </a>
            ))}

            <div className="pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#636980] block mb-3">
                Ecosistema
              </span>
              <a
                href="https://www.powerdigital.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-sm text-white"
              >
                <div>
                  <div className="font-semibold text-white">Power Digital</div>
                  <div className="text-xs text-[#9ea3b5]">Growth Partner para marcas con propósito</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9ea3b5]" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href="#mentoria"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full block py-4 text-center bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg"
            >
              Agenda tu mentoría 1:1
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

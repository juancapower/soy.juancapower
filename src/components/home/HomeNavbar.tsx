import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface HomeNavbarProps {
  onNavigate?: (path: string) => void;
}

export default function HomeNavbar({ onNavigate }: HomeNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
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
    setIsEcosystemOpen(false);

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
          ? 'bg-[#0b0d17]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#101322] shadow-sm group-hover:border-[#4361ee]/50 transition-all">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783016428/Favicon_JuanCaPower_w4zc3b.png"
                alt="Isotipo JuanCa Power"
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-base md:text-lg tracking-tight text-white leading-none">
                JuanCa Power
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9ea3b5] mt-0.5">
                Mentalidad · IA · Propósito
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-[13px] font-jakarta transition-colors tracking-wide ${
                  link.isSublanding
                    ? 'text-white font-medium hover:text-[#deb660] flex items-center gap-1.5'
                    : 'text-[#9ea3b5] hover:text-white'
                }`}
              >
                {link.name}
                {link.isSublanding && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#deb660] inline-block animate-pulse" />
                )}
              </a>
            ))}

            {/* Ecosistema Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                className="text-[13px] font-jakarta text-[#9ea3b5] hover:text-white flex items-center gap-1 transition-colors py-1 cursor-pointer"
                aria-expanded={isEcosystemOpen}
              >
                <span>Ecosistema</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isEcosystemOpen ? 'rotate-180 text-white' : ''}`} />
              </button>

              {isEcosystemOpen && (
                <div
                  className="absolute right-0 mt-3 w-56 bg-[#101322] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setIsEcosystemOpen(false)}
                >
                  <a
                    href="https://www.powerdigital.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-xs font-jakarta text-[#f8f9fa] group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#4361ee] transition-colors">
                        Power Digital
                      </div>
                      <div className="text-[10px] text-[#9ea3b5]">Growth Partner para marcas</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9ea3b5] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="/powerprompts"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-xs font-jakarta text-[#f8f9fa] group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#deb660] transition-colors">
                        Power Prompts
                      </div>
                      <div className="text-[10px] text-[#9ea3b5]">Guía 01 con ChatGPT</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9ea3b5] group-hover:text-white transition-colors" />
                  </a>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <a
              href="#mentoria"
              onClick={(e) => {
                if (onNavigate && typeof window !== 'undefined' && window.location.pathname.includes('libera-tu-proposito')) {
                  e.preventDefault();
                  onNavigate('/#mentoria');
                }
              }}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-white/30 text-white font-jakarta text-xs font-semibold hover:bg-white/10 transition-all shadow-sm"
            >
              Agenda una mentoría
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="#mentoria"
              className="px-3 py-1.5 rounded-lg bg-[#4361ee] text-white font-jakarta text-xs font-semibold"
            >
              Mentoría
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/5"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0b0d17]/98 backdrop-blur-2xl z-40 px-6 py-8 flex flex-col justify-between border-t border-white/10 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9ea3b5] mb-2">
              Navegación
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-lg font-space font-semibold tracking-tight transition-colors py-2 border-b border-white/[0.05] flex items-center justify-between ${
                  link.isSublanding ? 'text-[#deb660]' : 'text-white hover:text-[#4361ee]'
                }`}
              >
                <span>{link.name}</span>
                {link.isSublanding && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#deb660]/10 border border-[#deb660]/30 text-[#deb660]">
                    17-18 Oct
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9ea3b5] block mb-3">
                Ecosistema
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href="https://www.powerdigital.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-sm text-white"
                >
                  <div>
                    <div className="font-medium text-white">Power Digital</div>
                    <div className="text-[11px] text-[#9ea3b5]">Growth Partner para marcas con propósito</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9ea3b5]" />
                </a>
                <a
                  href="/powerprompts"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-sm text-white"
                >
                  <div>
                    <div className="font-medium text-[#deb660]">Power Prompts</div>
                    <div className="text-[11px] text-[#9ea3b5]">Guía 01 con ChatGPT (Rompepatrones)</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#deb660]" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <a
              href="#mentoria"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full block py-3.5 text-center bg-[#4361ee] text-white font-jakarta font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(67,97,238,0.3)]"
            >
              Agenda una mentoría 1:1
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

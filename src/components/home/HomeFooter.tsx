import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HomeFooterProps {
  onNavigate?: (path: string) => void;
}

export default function HomeFooter({ onNavigate }: HomeFooterProps) {
  const exploreLinks = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Power Lab', href: '#power-lab' },
    { name: 'Speaker & Keynotes', href: '#speaker' },
    { name: 'Mentoría 1:1', href: '#mentoria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const ecosystemLinks = [
    { name: 'Power Digital', href: 'https://www.powerdigital.pe', isExternal: true },
    { name: 'Power Prompts #01', href: '/powerprompts', isSublanding: true },
    { name: 'Canal de YouTube', href: 'https://youtube.com/@soyjuancapower', isExternal: true },
  ];

  const socialLinks = [
    { name: 'Instagram', handle: '@soyjuancapower', href: 'https://instagram.com/soyjuancapower' },
    { name: 'TikTok', handle: '@soyjuancapower', href: 'https://tiktok.com/@soyjuancapower' },
    { name: 'YouTube', handle: '@soyjuancapower', href: 'https://youtube.com/@soyjuancapower' },
    { name: 'LinkedIn', handle: 'JuanCa Power', href: 'https://www.linkedin.com/in/soyjuancapower/' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string, isSublanding?: boolean) => {
    if (isSublanding && onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className="bg-[#080911] border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* Brand & Identity Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-xl border border-white/10 bg-[#101322] flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783016428/Favicon_JuanCaPower_w4zc3b.png"
                    alt="Logo JuanCa Power"
                    className="h-4 w-4 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-space font-bold text-lg text-white">
                  JuanCa Power
                </span>
              </div>

              <p className="text-sm font-jakarta text-[#9ea3b5] max-w-sm leading-relaxed mb-6">
                Mentalidad, tecnología y propósito. Acompañando a profesionales, líderes y creadores
                a construir una versión más consciente, lúcida y estratégica.
              </p>
            </div>

            {/* Official Legal Entity Info */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-sm">
              <div className="text-xs font-space font-bold text-white mb-1">
                JC ESTRATEGIA Y DISEÑO INTEGRAL E.I.R.L.
              </div>
              <div className="text-xs font-mono text-[#8a8f9f]">
                RUC: <span className="text-[#deb660]">20615315525</span> · Lima, Perú
              </div>
            </div>
          </div>

          {/* Navigation Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-sm font-jakarta text-[#9ea3b5] hover:text-white transition-colors flex items-center justify-between py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#deb660] rounded"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-4">
              Ecosistema
            </h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleLinkClick(e, item.href, item.isSublanding)}
                    className="text-sm font-jakarta text-[#9ea3b5] hover:text-[#deb660] transition-colors flex items-center gap-1.5 py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#deb660] rounded"
                  >
                    <span>{item.name}</span>
                    {item.isExternal && <ArrowUpRight className="w-3.5 h-3.5 text-[#8a8f9f]" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-4">
              Conexión
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-jakarta text-[#9ea3b5] hover:text-white transition-colors flex items-center justify-between py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#deb660] rounded"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs font-mono text-[#8a8f9f]">{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright & closure */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8a8f9f]">
          <div>
            © {new Date().getFullYear()} JuanCa Power. Todos los derechos reservados.
          </div>
          <div className="text-[#9ea3b5]">
            No esperes motivación. Construye resultados con propósito.
          </div>
        </div>
      </div>
    </footer>
  );
}

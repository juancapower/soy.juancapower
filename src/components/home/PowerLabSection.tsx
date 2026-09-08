import React from 'react';
import { motion } from 'motion/react';
import { Terminal, BookOpen, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

interface PowerLabSectionProps {
  onNavigate?: (path: string) => void;
}

export default function PowerLabSection({ onNavigate }: PowerLabSectionProps) {
  const handleNavigation = (e: React.MouseEvent, path: string) => {
    if (onNavigate && !path.startsWith('http')) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <section id="power-lab" className="py-20 lg:py-28 bg-[#0b0d17] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow and Headline */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#deb660] uppercase tracking-wider mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#deb660]" />
              <span>Power Lab // Hub de Conocimiento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
              Power Lab.{' '}
              <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660] block sm:inline">
                Laboratorio de ideas y herramientas.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl">
              Ideas, herramientas y recursos para pensar mejor, crear con intención y utilizar la tecnología como amplificador humano.
            </p>
          </motion.div>
        </div>

        {/* The Two Flagship Tracks (Open Editorial Layout, High Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-y border-white/[0.08] py-10 lg:py-14 mb-12">
          {/* Track 1: POWER PROMPTS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8a8f9f]">
                  [01] // Framework de Criterio
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#4361ee]/40 transition-colors">
                  <Terminal className="w-5 h-5 text-[#4361ee]" />
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-space font-bold text-white tracking-tight mb-3 group-hover:text-[#4361ee] transition-colors">
                Power Prompts
              </h3>

              <p className="text-sm sm:text-base font-jakarta text-[#9ea3b5] leading-relaxed mb-6">
                Prompts estructurados para cuestionar supuestos, pensar, crear y tomar mejores decisiones.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8a8f9f]">Edición 01 disponible</span>
              <a
                href="/powerprompts"
                onClick={(e) => handleNavigation(e, '/powerprompts')}
                className="inline-flex items-center gap-1.5 text-xs font-jakarta font-semibold text-white hover:text-[#4361ee] transition-colors"
              >
                <span>Acceso libre</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Track 2: RECURSOS GRATUITOS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8a8f9f]">
                  [02] // Biblioteca Práctica
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#deb660]/40 transition-colors">
                  <BookOpen className="w-5 h-5 text-[#deb660]" />
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-space font-bold text-white tracking-tight mb-3 group-hover:text-[#deb660] transition-colors">
                Recursos Gratuitos
              </h3>

              <p className="text-sm sm:text-base font-jakarta text-[#9ea3b5] leading-relaxed mb-6">
                Guías, frameworks y herramientas prácticas para crecimiento, claridad y ejecución.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8a8f9f]">Material descargable</span>
              <a
                href="/power-lab"
                onClick={(e) => handleNavigation(e, '/power-lab')}
                className="inline-flex items-center gap-1.5 text-xs font-jakarta font-semibold text-white hover:text-[#deb660] transition-colors"
              >
                <span>Próximamente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Action Engine (Primary in #4361ee + Secondary in Outline Claro) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="/power-lab"
            onClick={(e) => handleNavigation(e, '/power-lab')}
            className="px-8 py-4 rounded-xl bg-[#4361ee] hover:bg-[#3651d4] text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4361ee]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361ee]"
          >
            <span>Explorar Power Lab</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/powerprompts"
            onClick={(e) => handleNavigation(e, '/powerprompts')}
            className="px-7 py-4 rounded-xl border border-white/15 hover:bg-white/[0.06] hover:border-white/30 text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Ver Power Prompts #01</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

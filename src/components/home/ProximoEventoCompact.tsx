import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface ProximoEventoCompactProps {
  onNavigate?: (path: string) => void;
}

export default function ProximoEventoCompact({ onNavigate }: ProximoEventoCompactProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/libera-tu-proposito');
    }
  };

  return (
    <section id="proximo-evento" className="py-14 lg:py-20 bg-[#0b0d17] border-y border-white/[0.08] relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-7 sm:p-9 lg:p-10 border border-white/12 bg-gradient-to-r from-[#101322] via-[#0e111d] to-[#0b0d17] overflow-hidden group shadow-xl"
        >
          {/* Subtle Warm Amber Atmospheric Highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#deb660]/[0.06] rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#deb660]/10 border border-[#deb660]/25 text-[#deb660] font-mono text-xs uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#deb660] animate-pulse" />
                <span>Próximo Evento · Lima · 17–18 Octubre 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-extrabold text-white tracking-tight mb-3">
                Libera tu Propósito 2026
              </h3>

              <p className="text-sm sm:text-base text-[#9ea3b5] font-jakarta leading-relaxed mb-6">
                Una inmersión vivencial de dos días para desbloquear patrones limitantes,
                alinear tu energía vital y activar un liderazgo con verdadera dirección.
              </p>

              <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-[#f8f9fa]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#deb660]" />
                  <span>17 y 18 de Octubre, 2026</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#deb660]" />
                  <span>Miraflores, Lima</span>
                </span>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-stretch sm:items-start lg:items-end gap-3 flex-shrink-0">
              <a
                href="/libera-tu-proposito"
                onClick={handleClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#4361ee] hover:bg-[#3651d4] text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4361ee]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361ee]"
              >
                <span>Conocer el evento</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="font-mono text-xs text-[#8a8f9f]">
                Preventa activa · Zonas limitadas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

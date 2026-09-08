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
    <section id="proximo-evento" className="py-12 bg-[#0b0d17] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10 bg-gradient-to-r from-[#101322] to-[#0b0d17] overflow-hidden group"
        >
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#deb660]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#deb660]/10 border border-[#deb660]/20 text-[#deb660] font-mono text-[11px] uppercase tracking-[0.2em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#deb660] animate-pulse"></span>
                <span>Próximo Evento Presencial · Lima 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-extrabold text-white tracking-tight mb-3">
                Libera tu Propósito 2026
              </h3>

              <p className="text-sm sm:text-base text-[#9ea3b5] font-jakarta leading-relaxed mb-6">
                Una inmersión presencial de dos días para romper patrones, ordenar tu energía,
                alinear tu propósito de vida y activar tu verdadero liderazgo.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#f8f9fa]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#deb660]" />
                  <span>17 y 18 de Octubre, 2026</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#deb660]" />
                  <span>Miraflores, Lima</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <a
                href="/libera-tu-proposito"
                onClick={handleClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] hover:text-[#0b0d17] transition-all shadow-md group/btn"
              >
                <span>Conocer el evento</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <span className="text-[11px] font-mono text-[#636980]">
                Cupos y zonas disponibles
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

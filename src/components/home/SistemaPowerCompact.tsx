import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SistemaPowerCompact() {
  const nodes = [
    { name: 'Mente', detail: 'Patrones & Foco' },
    { name: 'Cuerpo', detail: 'Energía Vital' },
    { name: 'Propósito', detail: 'Alineación & Ser' },
    { name: 'Estrategia', detail: 'Sistemas & IA' },
  ];

  return (
    <section id="sistema" className="py-16 lg:py-20 bg-[#0b0d17] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#101322]/40 border border-white/[0.07] flex flex-col lg:flex-row lg:items-center justify-between gap-10"
        >
          {/* Editorial Left Side */}
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-3">
              04 // Marco Conceptual
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-white tracking-tight mb-3">
              Sistema Power 4™
            </h2>

            <p className="text-sm sm:text-base text-[#9ea3b5] font-jakarta leading-relaxed mb-6">
              Un marco para integrar mente, cuerpo, propósito y estrategia. Sin fricción, sin dogmas y con rigor de ejecución.
            </p>

            <a
              href="#power-lab"
              className="inline-flex items-center gap-2 py-2 px-3 -ml-3 rounded-lg text-xs font-jakarta font-semibold text-white hover:text-[#deb660] hover:bg-white/[0.04] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#deb660]"
            >
              <span>Explorar en Power Lab</span>
              <ArrowRight className="w-4 h-4 text-[#deb660] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Compact Architectural Representation of the 4 Dimensions */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nodes.map((node, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-center flex flex-col justify-center min-w-[120px]"
                >
                  <span className="font-mono text-xs text-[#deb660] uppercase tracking-wider block mb-0.5">
                    0{idx + 1}
                  </span>
                  <span className="font-space font-bold text-sm text-white">
                    {node.name}
                  </span>
                  <span className="text-xs font-jakarta text-[#8a8f9f] mt-1">
                    {node.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

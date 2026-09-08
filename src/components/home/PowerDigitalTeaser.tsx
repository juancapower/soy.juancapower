import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PowerDigitalTeaser() {
  return (
    <section id="power-digital" className="py-16 lg:py-20 bg-[#0b0d17] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10 bg-[#101322]/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#4361ee] font-semibold block mb-2">
              Ecosistema · Partner Estratégico
            </span>
            <h3 className="text-2xl sm:text-3xl font-space font-bold text-white tracking-tight mb-2">
              Power Digital
            </h3>
            <p className="text-sm sm:text-base text-[#9ea3b5] font-jakarta leading-relaxed">
              La firma de consultoría y crecimiento estratégico para marcas y organizaciones que buscan
              posicionarse en la nueva economía con tecnología, contenido de impacto e Inteligencia Artificial.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://www.powerdigital.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361ee]"
            >
              <span>Visitar powerdigital.pe</span>
              <ArrowUpRight className="w-4 h-4 text-[#deb660] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

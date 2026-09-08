import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PowerDigitalTeaser() {
  return (
    <section id="power-digital" className="py-20 lg:py-28 bg-[#0b0d17] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 bg-gradient-to-br from-[#101322] to-[#0b0d17] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#4361ee] block mb-3">
              Ecosistema Empresarial
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-extrabold text-white tracking-tight mb-3">
              ¿Vienes por el crecimiento de tu empresa o marca?
            </h3>
            <p className="text-sm sm:text-base text-[#9ea3b5] font-jakarta leading-relaxed mb-6">
              <strong className="text-white font-semibold">Power Digital</strong> es nuestro partner estratégico
              especializado en acelerar marcas y empresas que buscan posicionamiento de alto nivel con tecnología e IA.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#636980]">
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">Estrategia</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">Branding</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">Contenido</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">Inteligencia Artificial</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">Growth</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://www.powerdigital.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#4361ee] hover:bg-[#6a82fb] text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#4361ee]/20 group"
            >
              <span>Explorar Power Digital</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

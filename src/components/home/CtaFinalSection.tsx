import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export default function CtaFinalSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.06] relative overflow-hidden">
      {/* Editorial subtle lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#deb660]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-4">
            08 // El Momento es Ahora
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            Tu próxima versión no se espera.{' '}
            <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660] block">
              Se entrena y se diseña.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl mx-auto mb-10">
            Deja de aplazar tus decisiones por falta de claridad. Conecta con un método
            probado que alinea tu mente, tu liderazgo y las herramientas del futuro.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12">
            <a
              href="#mentoria"
              className="px-8 py-4 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] transition-colors flex items-center justify-center gap-2 group shadow-lg"
            >
              <span>Agendar una mentoría</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:hola@juancapower.com"
              className="px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] text-white font-jakarta text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#9ea3b5]" />
              <span>hola@juancapower.com</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#636980]">
            <span>Lima, Perú</span>
            <span className="w-1 h-1 rounded-full bg-[#deb660]"></span>
            <span>+51 963 335 717</span>
            <span className="w-1 h-1 rounded-full bg-[#deb660]"></span>
            <span>@soyjuancapower</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Brain, Heart, Target, TrendingUp, ArrowRight } from 'lucide-react';

export default function SistemaPowerCompact() {
  const pillars = [
    {
      title: 'Mente',
      desc: 'Reprogramación de creencias, modelos mentales y foco implacable.',
      icon: <Brain className="w-5 h-5 text-[#deb660]" />,
    },
    {
      title: 'Cuerpo',
      desc: 'Energía biológica, disciplina física y sostenibilidad vital.',
      icon: <Heart className="w-5 h-5 text-[#4361ee]" />,
    },
    {
      title: 'Propósito',
      desc: 'Alineación espiritual, conciencia y sentido de trascendencia.',
      icon: <Target className="w-5 h-5 text-[#deb660]" />,
    },
    {
      title: 'Estrategia',
      desc: 'Sistemas digitales, adopción de IA y visión de largo plazo.',
      icon: <TrendingUp className="w-5 h-5 text-[#4361ee]" />,
    },
  ];

  return (
    <section id="sistema" className="py-20 lg:py-28 bg-[#0b0d17] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Header Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-3">
              04 // Marco Metodológico
            </span>
            <h2 className="text-3xl sm:text-4xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-5">
              Sistema Power 4™
            </h2>
            <p className="text-base text-[#9ea3b5] font-jakarta leading-relaxed mb-8">
              Un marco de desarrollo integral diseñado para sincronizar cuatro dimensiones fundamentales.
              Si una de ellas colapsa, el rendimiento general se desgasta.
            </p>

            <a
              href="#power-lab"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#deb660] transition-colors group"
            >
              <span>Explorar recursos del sistema</span>
              <ArrowRight className="w-4 h-4 text-[#deb660] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#101322] border border-white/[0.07] hover:border-white/15 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-jakarta font-bold text-lg text-white mb-1.5">
                  {p.title}
                </h3>
                <p className="font-jakarta text-xs text-[#9ea3b5] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

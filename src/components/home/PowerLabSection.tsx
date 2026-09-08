import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, BookOpen, Video, ArrowUpRight, Compass } from 'lucide-react';

export default function PowerLabSection() {
  const categories = [
    {
      title: 'Power Prompts',
      tag: 'IA & Creatividad',
      icon: <Terminal className="w-5 h-5 text-[#deb660]" />,
      desc: 'Ingeniería de prompts estructurada para romper bloqueos y extraer respuestas profundas de ChatGPT y Claude.',
      highlight: 'Guía 01 disponible gratis',
      href: '/powerprompts',
      isExternalOrRedirect: true,
      badge: 'Destacado',
    },
    {
      title: 'Mentalidad & Conciencia',
      tag: 'Filosofía & PNL',
      icon: <Compass className="w-5 h-5 text-[#4361ee]" />,
      desc: 'Reflexiones y modelos sobre autoliderazgo, reprogramación de creencias y leyes universales.',
      highlight: 'Serie sobre La Ley del Uno',
      href: '#sobre-mi',
      badge: 'Serie en curso',
    },
    {
      title: 'Recursos & Herramientas',
      tag: 'Sistemas',
      icon: <BookOpen className="w-5 h-5 text-[#deb660]" />,
      desc: 'Plantillas, guías descargables y marcos conceptuales para estructurar tus objetivos de vida y negocio.',
      highlight: 'Marcos de Sistema Power 4',
      href: '#mentoria',
      badge: 'Descargables',
    },
    {
      title: 'Lives & Transmisiones',
      tag: 'Contenido en vivo',
      icon: <Video className="w-5 h-5 text-[#4361ee]" />,
      desc: 'Sesiones abiertas de debate, análisis de tendencias en tecnología y respuestas en directo con la comunidad.',
      highlight: 'YouTube & Instagram',
      href: 'https://youtube.com/@soyjuancapower',
      isExternal: true,
      badge: 'En vivo',
    },
  ];

  return (
    <section id="power-lab" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.06] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#4361ee]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#deb660] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 // Hub de Conocimiento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight">
              Power Lab
            </h2>
            <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed mt-4">
              El laboratorio de ideas, prompts, análisis y recursos abiertos donde comparto
              mis aprendizajes en tecnología, conciencia y crecimiento humano.
            </p>
          </div>

          <a
            href="/powerprompts"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#deb660]/10 border border-[#deb660]/25 text-[#deb660] hover:bg-[#deb660]/20 font-jakarta font-semibold text-xs transition-colors self-start md:self-auto"
          >
            <span>Ver Power Prompts #01</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.a
              key={idx}
              href={cat.href}
              target={cat.isExternal ? '_blank' : undefined}
              rel={cat.isExternal ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#101322] border border-white/[0.08] hover:border-[#deb660]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] text-[#9ea3b5] border border-white/10 uppercase tracking-wider">
                    {cat.badge}
                  </span>
                </div>

                <div className="font-mono text-xs uppercase tracking-widest text-[#deb660] mb-2">
                  {cat.tag}
                </div>

                <h3 className="font-jakarta font-bold text-xl text-white group-hover:text-[#deb660] transition-colors mb-3">
                  {cat.title}
                </h3>

                <p className="font-jakarta text-xs sm:text-sm text-[#9ea3b5] leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-white">
                <span className="text-[#deb660]">{cat.highlight}</span>
                <ArrowUpRight className="w-4 h-4 text-[#9ea3b5] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

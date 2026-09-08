import React from 'react';
import { motion } from 'motion/react';
import { Compass, Cpu, Mic, ArrowUpRight } from 'lucide-react';

export default function TerritoriosSection() {
  const territories = [
    {
      id: 'mentalidad',
      tag: 'Territorio 01',
      title: 'Mentalidad & Propósito',
      icon: <Compass className="w-6 h-6 text-[#deb660]" />,
      lead: 'Transformación personal, conciencia, liderazgo y desarrollo interno.',
      desc: 'El verdadero crecimiento no empieza con herramientas externas, sino con la reprogramación de tu estructura mental y emocional. Deconstruyo patrones limitantes mediante PNL, claridad existencial y principios universales para operar desde la serenidad y la certeza.',
      bullets: ['Autoliderazgo & Conciencia', 'Gestión de Estados Emocionales', 'Propósito de Vida & Trascendencia'],
      href: '#sobre-mi',
    },
    {
      id: 'ia-growth',
      tag: 'Territorio 02',
      title: 'IA & Growth',
      icon: <Cpu className="w-6 h-6 text-[#4361ee]" />,
      lead: 'Pensamiento sobre IA, creatividad, tecnología y nuevas formas de trabajar.',
      desc: 'Como Ingeniero de Sistemas, entiendo la inteligencia artificial no como una moda, sino como un amplificador de la capacidad humana. Enseño a profesionales y creadores a estructurar flujos de pensamiento, diseñar prompts de alto impacto y ganar velocidad sin perder autenticidad.',
      bullets: ['Adopción Estratégica de IA', 'Power Prompts & Modelos Mentales', 'Sistemas de Creación & Productividad'],
      href: '#power-lab',
    },
    {
      id: 'speaker',
      tag: 'Territorio 03',
      title: 'Speaker & Experiencias',
      icon: <Mic className="w-6 h-6 text-[#deb660]" />,
      lead: 'Conferencias, talleres, eventos y experiencias en vivo.',
      desc: 'Experiencias de alto impacto para organizaciones, convenciones y comunidades. Mensajes contundentes que combinan vulnerabilidad real, rigor metodológico y visión tecnológica para despertar equipos y mover a la acción sostenida.',
      bullets: ['Keynotes Corporativas', 'Talleres Inmersivos', 'Eventos Presenciales de Marca'],
      href: '#speaker',
    },
  ];

  return (
    <section id="territorios" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-3">
            02 // Ejes Temáticos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            Tres territorios donde <br />
            <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660]">
              convergen la mente y la tecnología.
            </span>
          </h2>
          <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed">
            Una propuesta integral que une la profundidad de la conciencia humana con la precisión de los sistemas digitales modernos.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {territories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#101322] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#636980]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-jakarta font-bold text-white tracking-tight mb-3 group-hover:text-[#4361ee] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-jakarta font-medium text-[#deb660] mb-4 leading-snug">
                  {item.lead}
                </p>

                <p className="text-xs sm:text-sm text-[#9ea3b5] font-jakarta leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-8">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-jakarta text-[#f8f9fa]">
                      <span className="w-1 h-1 rounded-full bg-[#deb660]"></span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[#9ea3b5] group-hover:text-white transition-colors pt-4 border-t border-white/[0.06]"
              >
                <span>Conoce más</span>
                <ArrowUpRight className="w-4 h-4 text-[#deb660] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

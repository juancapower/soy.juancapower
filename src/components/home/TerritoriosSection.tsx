import React from 'react';
import { motion } from 'motion/react';
import { Compass, Cpu, Mic, ArrowUpRight } from 'lucide-react';

export default function TerritoriosSection() {
  const territories = [
    {
      id: 'mentalidad',
      num: '01',
      tag: 'Eje 01',
      title: 'Mentalidad & Propósito',
      icon: <Compass className="w-5 h-5 text-[#deb660]" />,
      lead: 'Reprogramación mental, claridad y autoliderazgo.',
      desc: 'Deconstrucción de patrones limitantes para operar desde la serenidad, la certeza y el propósito auténtico.',
      disciplines: 'Autoliderazgo · Leyes del Ser · Inteligencia Emocional',
      href: '#sobre-mi',
    },
    {
      id: 'ia-growth',
      num: '02',
      tag: 'Eje 02',
      title: 'IA & Growth',
      icon: <Cpu className="w-5 h-5 text-[#4361ee]" />,
      lead: 'Pensamiento exponencial y sistemas de trabajo con IA.',
      desc: 'Inteligencia artificial como amplificador humano. Flujos de pensamiento, prompts estratégicos y ejecución sin perder autenticidad.',
      disciplines: 'Power Prompts · Modelos Mentales · Adopción de IA',
      href: '#power-lab',
    },
    {
      id: 'speaker',
      num: '03',
      tag: 'Eje 03',
      title: 'Speaker & Experiencias',
      icon: <Mic className="w-5 h-5 text-[#deb660]" />,
      lead: 'Conferencias magnas, talleres y eventos en vivo.',
      desc: 'Experiencias de alto impacto para organizaciones. Mensajes que unen profundidad humana, rigor y decisiones reales.',
      disciplines: 'Keynotes · Inmersiones Presenciales · Convenciones',
      href: '#speaker',
    },
  ];

  return (
    <section id="territorios" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            Tres territorios donde <br />
            <span className="font-cormorant italic font-normal text-[1.12em] text-[#deb660]">
              convergen la mente y la tecnología.
            </span>
          </h2>
          <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl">
            Una propuesta que une la profundidad de la conciencia humana con la precisión de los sistemas digitales contemporáneos.
          </p>
        </div>

        {/* Expansive Architectural Triptych (Not SaaS Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.08] border-y border-white/[0.08] py-8 lg:py-12">
          {territories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="flex flex-col justify-between lg:px-10 first:lg:pl-0 last:lg:pr-0 group"
            >
              <div>
                {/* Index & Bespoke Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-[#636980] group-hover:text-[#deb660] transition-colors">
                    [{item.num}] // {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-[28px] font-space font-bold text-white tracking-tight mb-3 group-hover:text-[#f8f9fa] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-jakarta font-semibold text-[#deb660] mb-3 leading-snug">
                  {item.lead}
                </p>

                <p className="text-sm sm:text-[15px] font-jakarta text-[#9ea3b5] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono text-[#8a8f9f] mb-6 pt-4 border-t border-white/[0.08]">
                  {item.disciplines}
                </div>

                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-jakarta font-semibold text-white hover:text-[#deb660] hover:bg-white/[0.05] border border-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#deb660]"
                >
                  <span>Explorar territorio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

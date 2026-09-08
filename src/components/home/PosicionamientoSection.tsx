import React from 'react';
import { motion } from 'motion/react';

export default function PosicionamientoSection() {
  const archetypes = [
    {
      num: '01',
      title: 'Ingeniero',
      subtitle: 'Sistemas & Lógica',
      manifesto: 'Estructura analítica para resolver problemas complejos y ordenar el caos.',
      tag: 'Arquitectura',
    },
    {
      num: '02',
      title: 'Estratega',
      subtitle: 'Crecimiento & Modelos',
      manifesto: 'Apalancamiento de recursos, tecnología y posicionamiento en el mercado.',
      tag: 'Escala',
    },
    {
      num: '03',
      title: 'Speaker',
      subtitle: 'Presencia & Impacto',
      manifesto: 'Conferencias que trascienden el aplauso y detonan decisiones reales.',
      tag: 'Escenario',
    },
    {
      num: '04',
      title: 'Creador',
      subtitle: 'Contenido & IA',
      manifesto: 'Formatos profundos que conectan con audiencias conscientes.',
      tag: 'Comunidad',
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-[#0b0d17] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Editorial Eyebrow & Lead Statement */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-5">
              01 // Posicionamiento & Enfoque
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-[1.14] mb-8">
              Durante años construí sistemas para organizaciones.{' '}
              <span className="text-[#9ea3b5] font-normal">
                Hoy aplico esa misma mentalidad al crecimiento humano, las marcas, la tecnología y la inteligencia artificial.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-3xl">
              No creo en la motivación superficial sin método. Creo en el diseño consciente:
              reprogramar hábitos, estructurar pensamientos, apalancarse en la tecnología y
              construir una presencia que perdure.
            </p>
          </motion.div>
        </div>

        {/* Expressive Typographic Composition: 4 Archetypes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {archetypes.map((item, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-2xl bg-[#101322]/60 border border-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="w-8 h-[2px] bg-white/10 group-hover:bg-[#deb660] transition-colors mb-6" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#deb660] tracking-widest">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#636980]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-space font-bold text-white tracking-tight group-hover:text-[#f8f9fa] transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-[#9ea3b5] mb-4">
                  {item.subtitle}
                </div>

                <p className="text-xs font-jakarta text-[#9ea3b5] leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.manifesto}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#636980]">
                <span>JC Power</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-[#deb660]">→</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

export default function PosicionamientoSection() {
  const pillars = [
    {
      num: '01',
      stage: 'SER',
      title: 'Espiritualidad',
      subtitle: 'Propósito & Conciencia',
      description:
        'Reconocer la conexión con Dios y asumir nuestra capacidad creadora como base del propósito, la dirección y la transformación personal.',
      tag: 'Origen',
    },
    {
      num: '02',
      stage: 'MENTE',
      title: 'Coach de PNL',
      subtitle: 'Patrones & Creencias',
      description:
        'Programación Neurolingüística avanzada e hipnosis para identificar condicionamientos inconscientes, transformar creencias y sostener cambios reales.',
      tag: 'Estructura Mental',
    },
    {
      num: '03',
      stage: 'SISTEMA',
      title: 'Ingeniero de Sistemas',
      subtitle: 'Análisis & Procesos',
      description:
        'Formación tecnológica y corporativa que aporta pensamiento analítico, rigor y la habilidad de traducir ideas complejas en sistemas ejecutables.',
      tag: 'Diferencial',
    },
    {
      num: '04',
      stage: 'AMPLIFICACIÓN',
      title: 'Inteligencia Artificial',
      subtitle: 'Escala & Criterio',
      description:
        'Apalancamiento tecnológico que potencia los pilares previos: permite pensar, sistematizar y ejecutar con mayor capacidad sin sustituir el criterio humano.',
      tag: 'Multiplicador',
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#0b0d17] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Editorial Eyebrow & Lead Statement */}
        <div className="max-w-4xl mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] font-semibold">
                01 // Pilares de Convergencia
              </span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8f9f] bg-white/[0.03] px-2.5 py-0.5 rounded-full border border-white/10">
                Ser → Mente → Sistema → Amplificación
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-[1.15] mb-6">
              Cuatro dimensiones donde convergen{' '}
              <span className="text-[#9ea3b5] font-normal">
                el crecimiento interior, la estructura analítica y la tecnología.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl">
              Sin dogmas ni motivación vacía. Una visión integral que conecta el origen del ser, la reprogramación de la mente, la disciplina de los sistemas y el apalancamiento de la Inteligencia Artificial.
            </p>
          </motion.div>
        </div>

        {/* Open Editorial Typographic Composition (Editorial Progression, No SaaS Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-t border-white/[0.12] pt-10 lg:pt-14"
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-start relative"
            >
              {/* Monospace Index and Progression Stage Marker */}
              <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-3 mb-5 sm:mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm tracking-[0.2em] text-[#deb660] font-semibold">
                    {item.num}
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#4361ee] font-semibold">
                    {item.stage}
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8f9f]">
                  {item.tag}
                </span>
              </div>

              {/* Dominant Typographic Pillar Name */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-space font-bold text-white tracking-tight leading-[1.1] mb-3 group-hover:text-[#deb660] transition-colors">
                {item.title}
              </h3>

              {/* Focus Subtitle */}
              <div className="text-xs sm:text-sm font-jakarta font-semibold text-[#c4c7d4] mb-3">
                {item.subtitle}
              </div>

              {/* Scannable Conceptual Core */}
              <p className="text-sm sm:text-[15px] font-jakarta text-[#9ea3b5] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

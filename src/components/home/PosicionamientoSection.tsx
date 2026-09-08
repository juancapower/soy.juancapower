import React from 'react';
import { motion } from 'motion/react';

export default function PosicionamientoSection() {
  const roles = [
    { title: 'Ingeniero', desc: 'Estructura, lógica y sistemas' },
    { title: 'Estratega', desc: 'Visión de negocio y crecimiento' },
    { title: 'Speaker', desc: 'Mensaje transformador en escena' },
    { title: 'Creador', desc: 'Ideas, contenidos y experiencias' },
  ];

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-[#0b0d17] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-6">
              01 // Posicionamiento
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-[1.15] mb-8">
              Durante años construí sistemas para organizaciones.{' '}
              <span className="text-[#9ea3b5] font-normal">
                Hoy aplico esa misma mentalidad al crecimiento humano, las marcas, la tecnología y la inteligencia artificial.
              </span>
            </h2>

            <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl">
              No creo en la motivación superficial sin método. Creo en el diseño consciente:
              reprogramar hábitos, estructurar pensamientos, apalancarse en la tecnología y
              construir una presencia que perdure.
            </p>
          </motion.div>

          {/* Right Column: 4 Core Archetypes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col divide-y divide-white/[0.08]"
          >
            {roles.map((role, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0 flex items-baseline justify-between group">
                <div>
                  <h3 className="text-2xl font-space font-bold text-white group-hover:text-[#4361ee] transition-colors tracking-tight">
                    {role.title}
                  </h3>
                  <p className="text-xs text-[#636980] font-jakarta mt-0.5">
                    {role.desc}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#deb660]/70">0{idx + 1}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

export default function HistoriaEditorialSection() {
  return (
    <section id="historia" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/12 bg-[#101322] shadow-2xl">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783015853/JuanCaPower_Foto_Frontal_gxocai.png"
                alt="JuanCa Power"
                className="w-full h-full object-cover object-top filter contrast-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/25 to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0b0d17]/85 backdrop-blur-md border border-white/10">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#deb660] block mb-0.5">
                  Trayectoria
                </span>
                <p className="font-space font-bold text-lg text-white">Juan Carlos</p>
                <p className="font-jakarta text-xs text-[#9ea3b5]">Ingeniero de Sistemas · Speaker · Mentor</p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="lg:col-span-7 max-w-2xl"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-4">
              03 // Origen & Filosofía
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-8">
              Mi camino no empezó en la cima.{' '}
              <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660] block mt-1">
                Empezó en el dolor.
              </span>
            </h2>

            {/* Editorial Pull Quote */}
            <div className="mb-8 pl-6 border-l-2 border-[#deb660]/60">
              <p className="font-cormorant italic text-2xl lg:text-3xl text-[#f8f9fa] leading-snug">
                "No empecé con claridad. Empecé con dolor. Y desde ahí construí propósito."
              </p>
            </div>

            <div className="space-y-5 text-base font-jakarta text-[#9ea3b5] leading-relaxed">
              <p>
                Durante años me dediqué al diseño de sistemas y tecnología para organizaciones.
                Pero la vida me enfrentó a una pérdida devastadora: el duelo más profundo que un ser
                humano puede atravesar.
              </p>
              <p>
                En ese punto de quiebre entendí que ninguna estructura externa sostiene a una
                persona si su mundo interno está fragmentado. Comencé a estudiar la mente, las
                leyes universales de la conciencia, la reprogramación de hábitos y el autoliderazgo.
              </p>
              <p>
                Hoy uno esos dos mundos: la profundidad del desarrollo interior con la contundencia
                de los sistemas modernos y la Inteligencia Artificial. No te hablo desde la teoría;
                te hablo desde la reconstrucción.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center gap-6">
              <div>
                <div className="font-space font-bold text-sm text-white">JuanCa Power</div>
                <div className="font-mono text-[11px] text-[#636980]">Lima, Perú</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

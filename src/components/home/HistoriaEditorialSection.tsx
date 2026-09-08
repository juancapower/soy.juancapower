import React from 'react';
import { motion } from 'motion/react';

export default function HistoriaEditorialSection() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#101322] shadow-2xl">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783015853/JuanCaPower_Foto_Frontal_gxocai.png"
                alt="JuanCa Power"
                className="w-full h-full object-cover object-top filter contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#deb660] block mb-1">
                  Juan Carlos
                </span>
                <p className="font-space font-bold text-xl text-white">JuanCa Power</p>
                <p className="font-jakarta text-xs text-[#9ea3b5]">Ingeniero de Sistemas & Mentor</p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Storytelling Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-4">
              03 // Origen & Filosofía
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-8">
              Mi camino no empezó en la cima.{' '}
              <span className="text-[#deb660] block">Empezó en el dolor.</span>
            </h2>

            {/* Editorial Pull Quote */}
            <div className="mb-8 pl-6 border-l-2 border-[#deb660]/60">
              <p className="font-cormorant italic text-2xl lg:text-3xl text-[#f8f9fa] leading-relaxed">
                "No empecé con claridad. Empecé con dolor. Y desde ahí construí propósito."
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base font-jakarta text-[#9ea3b5] leading-relaxed">
              <p>
                Durante años trabajé como Ingeniero de Sistemas, liderando proyectos y diseñando arquitecturas digitales.
                Por fuera todo parecía marchar bien, pero por dentro cargaba con un profundo vacío existencial y una desconexión total
                de mi propia salud y propósito.
              </p>
              <p>
                La pérdida de mi madre, rupturas dolorosas y una crisis de salud marcaron el punto de inflexión.
                Entendí que ninguna meta material sustituye la falta de alineación interna. Decidí aplicar el mismo rigor
                de la ingeniería a mi mente, mi cuerpo y mi espiritualidad.
              </p>
              <p>
                De ese proceso de deconstrucción y renacimiento nació <strong className="text-white font-semibold">JuanCa Power</strong>:
                una plataforma para acompañar a otros a despertar su potencial, dominar la tecnología y liderar su propia vida
                con absoluta autenticidad.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-6">
              <div>
                <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
                  Especialización
                </span>
                <span className="text-xs text-[#636980]">
                  PNL, Liderazgo Consciente, IA aplicada
                </span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div>
                <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
                  Base
                </span>
                <span className="text-xs text-[#636980]">Lima, Perú · Alcance Global</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

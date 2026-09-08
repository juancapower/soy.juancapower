import React from 'react';
import { motion } from 'motion/react';
import { Mic, ArrowRight, Mail, Users, CheckCircle2 } from 'lucide-react';

export default function SpeakerSection() {
  const formats = [
    {
      num: '01',
      title: 'Keynotes & Conferencias Magnas',
      desc: 'Disertaciones de 60 a 90 minutos para congresos corporativos, convenciones y cumbres de innovación.',
      scope: 'Gran formato',
    },
    {
      num: '02',
      title: 'Talleres Inmersivos & Bootcamps',
      desc: 'Entrenamientos presenciales intensivos para directivos y equipos: mentalidad, autoliderazgo e IA aplicada.',
      scope: 'Interactivos',
    },
    {
      num: '03',
      title: 'Paneles & Moderación Estratégica',
      desc: 'Conversaciones que elevan el debate sobre el futuro del trabajo, la inteligencia artificial y el propósito humano.',
      scope: 'Estratégico',
    },
  ];

  const whatsappSpeakerUrl =
    'https://wa.me/51963335717?text=Hola%20JuanCa,%20nos%20gustar%C3%ADa%20invitarte%20como%20speaker%20a%20nuestro%20evento.';

  return (
    <section id="speaker" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle backdrop light */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#deb660]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative & Action Engine (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-4">
              06 // Speaker & Conferencias
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
              Lleva estas ideas a tu <br />
              <span className="font-cormorant italic font-normal text-[1.12em] text-[#deb660]">
                escenario u organización.
              </span>
            </h2>

            <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl mb-10">
              Conferencias que trascienden la motivación efímera. Combino rigor de sistemas,
              inteligencia emocional, herramientas de IA y relatos humanos para mover audiencias
              hacia decisiones reales y sostenidas.
            </p>

            {/* Formats Layout */}
            <div className="space-y-4 mb-10">
              {formats.map((fmt, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#101322]/50 border border-white/[0.07] hover:border-white/20 transition-colors flex items-start gap-4"
                >
                  <span className="font-mono text-xs text-[#deb660] mt-0.5">{fmt.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-space font-bold text-sm sm:text-base text-white">
                        {fmt.title}
                      </h4>
                      <span className="font-mono text-xs uppercase text-[#8a8f9f] tracking-wider whitespace-nowrap">
                        {fmt.scope}
                      </span>
                    </div>
                    <p className="font-jakarta text-sm text-[#9ea3b5] mt-1 leading-relaxed">
                      {fmt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action Button: Invitar como speaker */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappSpeakerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#4361ee] hover:bg-[#3651d4] text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4361ee]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361ee]"
              >
                <span>Invitar a JuanCa como speaker</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:hola@juancapower.com?subject=Invitaci%C3%B3n%20como%20Speaker%20-%20JuanCa%20Power"
                className="px-7 py-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] text-white font-jakarta text-xs font-semibold transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#deb660]"
              >
                <Mail className="w-4 h-4 text-[#9ea3b5]" />
                <span>hola@juancapower.com</span>
              </a>
            </div>
          </motion.div>

          {/* Real Stage Visual Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Large Stage Shot */}
            <div className="relative rounded-3xl overflow-hidden border border-white/12 bg-[#101322] shadow-2xl">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775514826/escenario_naywym.png"
                alt="JuanCa Power en conferencia magistral en escenario"
                className="w-full aspect-[4/3] object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-white">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Conferencias & Keynotes</span>
                </span>
                <span className="text-[#deb660]">Internacional</span>
              </div>
            </div>

            {/* Inset Second Stage Photo (Piura / Convención) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#101322]">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1776364279/CajaArequipa_Piura2_hw7due.jpg"
                alt="Evento corporativo Caja Arequipa con JuanCa Power en Piura"
                className="w-full aspect-[16/10] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-2.5 bg-[#0b0d17]/90 font-mono text-xs text-[#c4c7d4]">
                Piura · Convenciones
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mic, Sparkles, UserCheck } from 'lucide-react';

export default function TrabajaConmigoSection() {
  const whatsappSpeakerUrl =
    'https://wa.me/51963335717?text=Hola%20JuanCa,%20nos%20gustar%C3%ADa%20invitarte%20como%20speaker%20a%20nuestro%20evento.';
  const calendarMentoriaUrl =
    'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Cfa-gmREBDeKuFMB1kPZ1APs09ssHUnVAYXU1hEqtj62KyE6vQZtEok2A7YgWbNdkMDbb1suK';

  return (
    <section id="trabaja-conmigo" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle Atmosphere Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#deb660]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#4361ee]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-4">
              05 // Colaboración Directa
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
              Trabaja conmigo.{' '}
              <span className="font-cormorant italic font-normal text-[1.12em] text-[#deb660] block sm:inline">
                Dos formas de conectar y transformar.
              </span>
            </h2>

            <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl">
              Espacios diseñados para elevar el pensamiento, alinear el propósito y accionar decisiones de alto impacto tanto en audiencias colectivas como en procesos individuales.
            </p>
          </motion.div>
        </div>

        {/* Two Editorial Paths (Not SaaS Cards, Expansive & Clean) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 border-t border-white/[0.08] pt-12 lg:pt-16">
          {/* Path A: SPEAKER & EXPERIENCIAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between group"
          >
            <div id="speaker" className="scroll-mt-28">
              {/* Photo of JuanCa on stage */}
              <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-[#101322] shadow-2xl mb-8 aspect-[16/10]">
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775514826/escenario_naywym.png"
                  alt="JuanCa Power en conferencia magistral en escenario"
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/30 to-transparent opacity-85" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Conferencias & Keynotes</span>
                  </span>
                  <span className="text-[#deb660]">Presencial & Virtual</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#deb660]">
                  [01] // Organizaciones & Eventos
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-space font-bold text-white tracking-tight mb-4 group-hover:text-[#deb660] transition-colors">
                Speaker & Experiencias
              </h3>

              <p className="text-base font-jakarta text-[#9ea3b5] leading-relaxed mb-8">
                Conferencias, talleres y conversaciones para organizaciones, comunidades y eventos.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <a
                href={whatsappSpeakerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#4361ee] hover:bg-[#3651d4] text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#4361ee]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361ee]"
              >
                <span>Invitar a JuanCa</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Path B: MENTORÍA 1:1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between group"
          >
            <div id="mentoria" className="scroll-mt-28">
              {/* Photo / Visual for 1:1 Mentorship */}
              <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-[#101322] shadow-2xl mb-8 aspect-[16/10]">
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783015853/JuanCaPower_Foto_Frontal_gxocai.png"
                  alt="JuanCa Power - Mentoría Estratégica 1:1"
                  className="w-full h-full object-cover object-[center_20%] filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/30 to-transparent opacity-85" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#deb660]" />
                    <span>Sesiones Exclusivas 1:1</span>
                  </span>
                  <span className="text-[#deb660]">Cupos Limitados</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#4361ee]">
                  [02] // Crecimiento & Reinvención
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-space font-bold text-white tracking-tight mb-4 group-hover:text-[#4361ee] transition-colors">
                Mentoría 1:1
              </h3>

              <p className="text-base font-jakarta text-[#9ea3b5] leading-relaxed mb-8">
                Acompañamiento estratégico para líderes, profesionales y creadores en procesos de cambio, crecimiento y reinvención.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <a
                href={calendarMentoriaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/35 text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explorar mentoría</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

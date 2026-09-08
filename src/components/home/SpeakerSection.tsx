import React from 'react';
import { motion } from 'motion/react';
import { Mic, ArrowRight, CheckCircle2, Users, Sparkles, Building } from 'lucide-react';

export default function SpeakerSection() {
  const formats = [
    {
      title: 'Conferencias Magnas',
      desc: 'Keynotes inspiracionales de 60 a 90 minutos para congresos corporativos y convenciones masivas.',
      badge: 'Escenarios Grandes',
    },
    {
      title: 'Talleres & Bootcamps',
      desc: 'Sesiones inmersivas de aplicación práctica en liderazgo personal, PNL y flujos de trabajo con IA.',
      badge: 'Interactivo',
    },
    {
      title: 'Paneles & Moderación',
      desc: 'Conversaciones estratégicas sobre tecnología, futuro del trabajo y cultura organizacional.',
      badge: 'Conversaciones',
    },
  ];

  const whatsappSpeakerUrl =
    'https://wa.me/51963335717?text=Hola%20JuanCa,%20nos%20gustar%C3%ADa%20invitarte%20como%20speaker%20a%20nuestro%20evento.';

  return (
    <section id="speaker" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Real stage photos) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#101322] group">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775514826/escenario_naywym.png"
                alt="JuanCa Power en escenario como conferencista"
                className="w-full aspect-[4/3] object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Conferencias & Keynotes</span>
                </span>
                <span className="text-[#deb660]">Internacional</span>
              </div>
            </div>

            {/* Inset Second Stage Photo Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#101322]">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1776364279/CajaArequipa_Piura2_hw7due.jpg"
                alt="Evento corporativo"
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Speaker Pitch & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-3">
              06 // Experiencias en Vivo
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
              Lleva estas ideas <br />
              <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660]">
                a tu escenario u organización.
              </span>
            </h2>

            <p className="text-base text-[#9ea3b5] font-jakarta leading-relaxed mb-8">
              Conferencias que combinan la visión de la ingeniería de sistemas con la fuerza
              de la transformación emocional y la adopción real de tecnologías exponenciales.
              Sin discursos vacíos ni fórmulas mágicas: contenido estructurado, energía y llamados claros a la acción.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {formats.map((fmt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#101322] border border-white/[0.06] flex flex-col justify-between"
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#deb660] mb-2 block">
                    {fmt.badge}
                  </span>
                  <h4 className="font-jakarta font-bold text-sm text-white mb-1.5">
                    {fmt.title}
                  </h4>
                  <p className="text-[11px] text-[#9ea3b5] font-jakarta leading-relaxed">
                    {fmt.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappSpeakerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] transition-colors flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Invitar a JuanCa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:hola@juancapower.com?subject=Invitaci%C3%B3n%20como%20Speaker%20-%20JuanCa%20Power"
                className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] text-white font-jakarta text-xs font-semibold transition-colors flex items-center justify-center text-center"
              >
                hola@juancapower.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

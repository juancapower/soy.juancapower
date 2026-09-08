import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function MentoriaEditorialSection() {
  const calendarLink =
    'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Cfa-gmREBDeKuFMB1kPZ1APs09ssHUnVAYXU1hEqtj62KyE6vQZtEok2A7YgWbNdkMDbb1suK';
  const whatsappLink =
    'https://wa.me/51963335717?text=Hola%20JuanCa,%20me%20gustar%C3%ADa%20coordinar%20una%20mentor%C3%ADa%201:1';

  const profiles = [
    'Profesionales y líderes en procesos de reinvención o transición de carrera',
    'Emprendedores que buscan estructurar su marca personal con propósito y tecnología',
    'Creadores que desean integrar flujos de IA y modelos mentales de alto rendimiento',
    'Personas decididas a superar el piloto automático y construir hábitos sostenibles',
  ];

  return (
    <section id="mentoria" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-3">
            07 // Acompañamiento Estratégico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            Mentoría 1:1 con JuanCa
          </h2>
          <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed">
            Un espacio confidencial y de alta exigencia para diagnosticar tus bloqueos,
            ordenar tu estrategia de vida o negocio y trazar una hoja de ruta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Profiles & Approach */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-jakarta font-bold text-white tracking-tight">
              ¿Para quién está diseñado este proceso?
            </h3>
            <div className="space-y-4">
              {profiles.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#101322] border border-white/[0.06]">
                  <CheckCircle2 className="w-5 h-5 text-[#deb660] shrink-0 mt-0.5" />
                  <span className="text-sm font-jakarta text-[#f8f9fa] leading-relaxed">
                    {p}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 mt-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#deb660] block mb-1">
                Garantía de Compromiso
              </span>
              <p className="text-xs text-[#9ea3b5] font-jakarta leading-relaxed">
                La primera sesión de diagnóstico (30 min) permite evaluar si tu momento actual
                y mi metodología hacen match mutuo antes de asumir cualquier compromiso formal.
              </p>
            </div>
          </div>

          {/* Action Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#101322] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#deb660]/10 border border-[#deb660]/25 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#deb660]" />
              </div>
              <h3 className="text-2xl font-jakarta font-bold text-white mb-3">
                Agenda tu sesión inicial
              </h3>
              <p className="text-sm text-[#9ea3b5] font-jakarta leading-relaxed mb-8">
                Elige el horario que mejor se adapte en el calendario oficial o contáctame directamente por WhatsApp.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] transition-colors flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Agendar en Google Calendar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-jakarta text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Coordinar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

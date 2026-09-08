import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react';

export default function MentoriaEditorialSection() {
  const calendarLink =
    'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Cfa-gmREBDeKuFMB1kPZ1APs09ssHUnVAYXU1hEqtj62KyE6vQZtEok2A7YgWbNdkMDbb1suK';
  const whatsappLink =
    'https://wa.me/51963335717?text=Hola%20JuanCa,%20me%20gustar%C3%ADa%20coordinar%20una%20mentor%C3%ADa%201:1';

  return (
    <section id="mentoria" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Left Side (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#deb660] block mb-4">
              07 // Acompañamiento Estratégico
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
              Mentoría 1:1 con JuanCa.{' '}
              <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660] block sm:inline">
                Claridad, estrategia y método.
              </span>
            </h2>

            <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed mb-8 max-w-2xl">
              Un proceso confidencial y exclusivo para líderes, profesionales y creadores que necesitan
              desmontar el piloto automático, estructurar sus decisiones con rigor y acelerar su crecimiento
              con propósito y tecnología.
            </p>

            <div className="space-y-4 mb-10 text-sm font-jakarta text-[#f8f9fa] max-w-xl">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#deb660] mt-2 shrink-0" />
                <p className="text-[#9ea3b5]">
                  <strong className="text-white font-semibold">Diagnóstico profundo:</strong> Identificamos los cuellos de botella reales en tu mente, hábitos y modelo de trabajo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#deb660] mt-2 shrink-0" />
                <p className="text-[#9ea3b5]">
                  <strong className="text-white font-semibold">Integración tecnológica:</strong> Diseñamos flujos prácticos de IA adaptados a tu contexto particular.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#deb660] mt-2 shrink-0" />
                <p className="text-[#9ea3b5]">
                  <strong className="text-white font-semibold">Relación directa:</strong> Cada sesión es 100% personalizada con JuanCa, sin delegar a terceros.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-[#636980]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#deb660]" />
                <span>Total confidencialidad</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#deb660]" />
                <span>Sesión inicial: 30 min</span>
              </span>
            </div>
          </motion.div>

          {/* Exclusive Booking Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#101322] border border-white/12 shadow-2xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#deb660]/10 border border-[#deb660]/20 text-[#deb660] font-mono text-[10px] uppercase tracking-widest mb-6">
                <span>Cupos Limitados · 1 Proceso a la Vez</span>
              </div>

              <h3 className="text-2xl font-space font-bold text-white tracking-tight mb-2">
                Sesión de Exploración
              </h3>

              <p className="text-xs sm:text-sm text-[#9ea3b5] font-jakarta leading-relaxed mb-8">
                30 minutos para conversar sobre tu situación actual, tus metas y validar si existe un
                match genuino antes de iniciar cualquier acompañamiento formal.
              </p>

              <div className="space-y-3 mb-8">
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-[#0b0d17]" />
                  <span>Agendar en Google Calendar</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-jakarta text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <span>Coordinar horario por WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#deb660]" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-[#636980] leading-relaxed">
                Requisito: Disposición real a cuestionar viejos patrones y ejecutar cambios conscientes.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

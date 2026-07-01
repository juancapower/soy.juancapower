import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function MentoriaSection() {
  const calendarLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Cfa-gmREBDeKuFMB1kPZ1APs09ssHUnVAYXU1hEqtj62KyE6vQZtEok2A7YgWbNdkMDbb1suK";
  const whatsappLink = "https://wa.me/51963335717?text=Hola%20JuanCa,%20prefiero%20coordinar%20mi%20mentoria%20gratuita%20por%20aqu%C3%AD";

  return (
    <section id="mentoria" className="section-padding bg-jcp-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-jcp-power/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-jcp-gold/10 border border-jcp-gold/20 rounded-full mb-6">
            <span className="text-xs font-mono font-bold text-jcp-gold uppercase tracking-[0.2em]">Inicia tu Transformación</span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-space font-semibold mb-6 text-jcp-text">
            Agenda tu <span className="text-jcp-gold">Mentoria</span>
          </h2>
          <p className="text-[18px] font-jakarta text-jcp-text-2 max-w-2xl mx-auto leading-relaxed">
            El compromiso con tu éxito comienza hoy. Recuerda que la <span className="text-jcp-power font-bold uppercase">primera sesión es 100% gratuita</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Option 1: Google Calendar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-jcp-surface border border-jcp-border-n p-8 md:p-10 rounded-[24px] hover:border-jcp-gold/40 transition-all duration-500 shadow-2xl"
          >
            <div className="w-16 h-16 bg-jcp-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-jcp-gold" />
            </div>
            
            <h3 className="text-[24px] font-space font-bold mb-4 text-jcp-text">Elige tu horario</h3>
            <p className="text-jcp-text-2 mb-8 font-jakarta leading-relaxed">
              Reserva directamente en mi agenda. Elige el día y la hora que mejor te acomode para nuestra primera sesión gratuita.
            </p>

            <ul className="mb-10 space-y-4">
              <li className="flex items-center text-jcp-text-2 text-sm font-jakarta">
                <CheckCircle2 className="w-5 h-5 text-jcp-gold mr-3 shrink-0" />
                Reserva inmediata y confirmada
              </li>
              <li className="flex items-center text-jcp-text-2 text-sm font-jakarta">
                <CheckCircle2 className="w-5 h-5 text-jcp-gold mr-3 shrink-0" />
                Sincronización con tu calendario
              </li>
              <li className="flex items-center text-jcp-text-2 text-sm font-jakarta">
                <CheckCircle2 className="w-5 h-5 text-jcp-gold mr-3 shrink-0" />
                Recordatorios automáticos
              </li>
            </ul>

            <a 
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-jcp-gold text-jcp-bg font-space font-bold rounded-xl flex items-center justify-center group-hover:bg-jcp-cream transition-all shadow-[0_10px_30px_rgba(197,160,89,0.2)]"
            >
              Ver disponibilidad
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Option 2: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-jcp-surface border border-jcp-border-n p-8 md:p-10 rounded-[24px] hover:border-jcp-power/40 transition-all duration-500 shadow-2xl"
          >
            <div className="w-16 h-16 bg-jcp-power/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="w-8 h-8 text-jcp-power" />
            </div>
            
            <h3 className="text-[24px] font-space font-bold mb-4 text-jcp-text">Consulta por WhatsApp</h3>
            <p className="text-jcp-text-2 mb-8 font-jakarta leading-relaxed">
              ¿Tienes dudas o prefieres coordinar por mensaje? Escríbeme directamente y agendamos tu sesión gratuita de forma personalizada.
            </p>

            <ul className="mb-10 space-y-4">
              <li className="flex items-center text-jcp-text-2 text-sm font-jakarta">
                <CheckCircle2 className="w-5 h-5 text-jcp-power mr-3 shrink-0" />
                Comunicación directa y rápida
              </li>
              <li className="flex items-center text-jcp-text-2 text-sm font-jakarta">
                <CheckCircle2 className="w-5 h-5 text-jcp-power mr-3 shrink-0" />
                Resolución de dudas específicas
              </li>
              <li className="flex items-center text-jcp-text-2 text-sm font-jakarta">
                <CheckCircle2 className="w-5 h-5 text-jcp-power mr-3 shrink-0" />
                Atención 100% personalizada
              </li>
            </ul>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border-2 border-jcp-power text-jcp-power font-space font-bold rounded-xl flex items-center justify-center hover:bg-jcp-power hover:text-white transition-all shadow-[0_10px_30px_var(--jcp-power-glow)]"
            >
              Hablar con JuanCa
              <WhatsAppIcon className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Note about free session */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-jcp-text-3 font-mono text-xs uppercase tracking-widest max-w-lg mx-auto">
            Nota: La cortesía de la primera sesión gratuita aplica únicamente para nuevos prospectos de mentoría individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

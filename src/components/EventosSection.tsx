import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Flame, User, Building2, ExternalLink, Ticket, ShieldCheck } from 'lucide-react';
import { OFFICIAL_EVENT_INFO } from '../data/liberaTuProposito';

interface EventosSectionProps {
  onNavigate?: (path: string) => void;
}

export default function EventosSection({ onNavigate }: EventosSectionProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target event date: October 17, 2026
    const targetDate = new Date('2026-10-17T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSublandingClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/libera-tu-proposito');
    }
  };

  return (
    <section id="eventos" className="section-padding bg-jcp-bg relative overflow-hidden border-y border-jcp-border-n">
      {/* Background visual effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jcp-power/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-jcp-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Decorative digital circuit pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4361EE 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-jcp-gold/10 border border-jcp-gold/25 rounded-full text-xs font-mono text-jcp-gold uppercase tracking-widest mb-4">
            <Flame className="w-3.5 h-3.5 text-jcp-gold" />
            <span>PRÓXIMO EVENTO PRESENCIAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4 tracking-tight">
            Libera tu Propósito <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold via-[#E6B044] to-jcp-cream">// Lima 2026</span>
          </h2>
          <p className="font-cormorant italic text-jcp-text-2 text-2xl">
            "{OFFICIAL_EVENT_INFO.claim}"
          </p>
        </div>

        {/* Highlight upcoming event */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="proximo-evento-ticket"
          className="bg-gradient-to-br from-[#0F1122] via-[#0B0D17] to-[#161B33] border-2 border-jcp-gold/30 rounded-[32px] overflow-hidden p-8 lg:p-12 shadow-[0_0_50px_rgba(197,160,89,0.15)] relative mb-12"
        >
          {/* Subtle circuit line decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jcp-power via-jcp-gold to-jcp-power-l"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual poster column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-jcp-power to-jcp-gold opacity-25 blur-2xl rounded-2xl pointer-events-none"></div>
              <div className="relative aspect-[3/4] w-full max-w-[380px] rounded-2xl overflow-hidden border-2 border-jcp-gold/40 shadow-2xl group">
                <img 
                  src={OFFICIAL_EVENT_INFO.posterUrl} 
                  alt={`${OFFICIAL_EVENT_INFO.name} - Conecta con tu poder`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Event Description Column */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-jcp-power/15 border border-jcp-power/30 rounded text-[11px] font-mono font-bold text-jcp-power-l uppercase tracking-wider">
                    Lima, Perú
                  </span>
                  <span className="px-3 py-1 bg-[#D6B15F]/15 border border-[#D6B15F]/30 rounded text-[11px] font-mono font-bold text-[#D6B15F] uppercase tracking-wider">
                    Creado por Orlando Denegri · Organiza BINLP
                  </span>
                  <span className="px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded text-[11px] font-mono font-bold text-blue-300 uppercase tracking-wider">
                    🎤 JuanCa Power // Speaker Invitado
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-space font-bold text-white mb-2 tracking-tight uppercase">
                  {OFFICIAL_EVENT_INFO.name}
                </h3>

                <p className="font-mono text-sm text-jcp-gold uppercase tracking-widest mb-4">
                  ✨ {OFFICIAL_EVENT_INFO.claim}
                </p>

                {/* Responsible Value Proposition */}
                <p className="font-jakarta text-white font-medium text-base leading-relaxed mb-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  {OFFICIAL_EVENT_INFO.valueProposition}
                </p>

                <p className="font-jakarta text-jcp-text-2 text-xs leading-relaxed mb-6">
                  {OFFICIAL_EVENT_INFO.supportText}
                </p>

                {/* Official Roles Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-black/40 border border-white/5 text-xs font-jakarta">
                  <div className="flex items-center gap-2.5 text-jcp-text-2">
                    <User className="w-4 h-4 text-jcp-gold shrink-0" />
                    <span><strong>Creador:</strong> {OFFICIAL_EVENT_INFO.createdBy}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-jcp-text-2">
                    <Building2 className="w-4 h-4 text-jcp-power-l shrink-0" />
                    <span><strong>Organizador:</strong> {OFFICIAL_EVENT_INFO.organizedBy}</span>
                  </div>
                </div>

                {/* Event Details Row */}
                <div className="flex flex-wrap gap-y-4 gap-x-8 text-xs font-mono text-white mb-8 border-y border-white/10 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-jcp-gold" />
                    <span>{OFFICIAL_EVENT_INFO.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-jcp-power-l" />
                    <span>{OFFICIAL_EVENT_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Countdown & Sublanding Navigation CTA */}
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mt-auto bg-[#0A0C16] p-6 rounded-2xl border border-jcp-gold/30">
                <div className="flex gap-4 text-center">
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.days}</span>
                    <span className="text-[10px] uppercase font-mono text-jcp-text-3">Días</span>
                  </div>
                  <span className="text-jcp-gold text-xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.hours}</span>
                    <span className="text-[10px] uppercase font-mono text-jcp-text-3">Hrs</span>
                  </div>
                  <span className="text-jcp-gold text-xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.minutes}</span>
                    <span className="text-[10px] uppercase font-mono text-jcp-text-3">Min</span>
                  </div>
                  <span className="text-jcp-gold text-xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.seconds}</span>
                    <span className="text-[10px] uppercase font-mono text-jcp-text-3">Seg</span>
                  </div>
                </div>

                <a 
                  href="/libera-tu-proposito"
                  onClick={handleSublandingClick}
                  className="px-8 py-4 bg-gradient-to-r from-jcp-gold to-[#E7C97A] hover:from-[#E7C97A] hover:to-jcp-gold text-black font-space font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(214,177,95,0.35)] hover:shadow-[0_0_35px_rgba(214,177,95,0.5)] text-center text-sm w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Ver Entradas y Zonas</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Past Events Portfolio Grid */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="font-mono text-xs text-jcp-gold uppercase tracking-widest block mb-2">Autoridad Demostrada</span>
              <h4 className="text-2xl md:text-3xl font-space font-bold text-white">
                Trayectoria de Transformación Reciente
              </h4>
            </div>
            <span className="text-sm font-jakarta text-jcp-text-3 max-w-md">
              Cientos de almas ya han cruzado el umbral del cambio en ciudades clave de Perú.
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event past 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-jcp-surface-2 rounded-2xl border border-white/5 overflow-hidden group hover:border-jcp-gold/30 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1778769044/TrascendiendoElDuelo_grupal_mzytdc.jpg" 
                  alt="Trascendiendo el Duelo - JuanCa Power" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jcp-surface-2 to-transparent"></div>
                <span className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono text-jcp-text-2 uppercase rounded">
                  Speaker invitado
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-jcp-gold mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>3 de Mayo, 2026</span>
                </div>
                <h5 className="font-space font-bold text-lg text-white mb-2 group-hover:text-jcp-gold transition-colors">
                  Trascendiendo el Duelo
                </h5>
                <p className="text-xs text-jcp-text-3 font-mono mb-4">📍 Trujillo, Perú</p>
                <p className="text-sm text-jcp-text-2 font-jakarta">
                  Un taller inmersivo profundo diseñado para convertir el dolor en la mayor fuente de poder y propósito.
                </p>
              </div>
            </motion.div>

            {/* Event past 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-jcp-surface-2 rounded-2xl border border-white/5 overflow-hidden group hover:border-jcp-gold/30 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775514826/escenario_naywym.png" 
                  alt="Despierta Tu Power Trujillo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jcp-surface-2 to-transparent"></div>
                <span className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono text-jcp-text-2 uppercase rounded">
                  Evento propio
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-jcp-gold mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>28 de Marzo, 2026</span>
                </div>
                <h5 className="font-space font-bold text-lg text-white mb-2 group-hover:text-jcp-gold transition-colors">
                  Despierta tu Power
                </h5>
                <p className="text-xs text-jcp-text-3 font-mono mb-4">📍 Trujillo, Perú</p>
                <p className="text-sm text-jcp-text-2 font-jakarta">
                  Conferencia magistral presencial enfocada en la ruptura de patrones mentales y la activación de hábitos Élite.
                </p>
              </div>
            </motion.div>

            {/* Event past 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-jcp-surface-2 rounded-2xl border border-white/5 overflow-hidden group hover:border-jcp-gold/30 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden relative grid grid-cols-3 gap-0.5 bg-black/40">
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1776364279/CajaArequipa_Piura2_hw7due.jpg" 
                  alt="Caja Arequipa 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1776364279/CajaArequipa_Piura3_f9pi1u.jpg" 
                  alt="Caja Arequipa 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1776364279/CajaArequipa_Piura4_jifq7j.jpg" 
                  alt="Caja Arequipa 3" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jcp-surface-2 via-transparent to-transparent pointer-events-none"></div>
                <span className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono text-jcp-text-2 uppercase rounded pointer-events-none">
                  Taller Corporativo
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-jcp-gold mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Febrero, 2026</span>
                </div>
                <h5 className="font-space font-bold text-lg text-white mb-2 group-hover:text-jcp-gold transition-colors">
                  Mentalidad de Alto Rendimiento para corporativos
                </h5>
                <p className="text-xs text-jcp-text-3 font-mono mb-4">📍 Piura, Perú</p>
                <p className="text-sm text-jcp-text-2 font-jakarta">
                  Mentoría corporativa para equipos comerciales líderes enfocada en neuro-liderazgo y superación de límites de venta.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

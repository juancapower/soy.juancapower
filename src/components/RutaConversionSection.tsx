import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Calendar, ArrowRight } from 'lucide-react';

export default function RutaConversionSection() {
  const caminos = [
    {
      title: "Quiero transformar mi vida",
      phrase: "Lidera tu mente, disciplina tu cuerpo y reconecta con tu propósito supremo.",
      result: "Mentoría de alto impacto y acompañamiento estratégico individual.",
      ctaText: "Agendar mentoría",
      ctaHref: "#mentoria",
      icon: <Sparkles className="w-6 h-6 text-jcp-gold" />,
      tag: "MENTORÍA INDIVIDUAL ÉLITE",
      color: "from-jcp-gold/10 to-transparent",
      borderColor: "hover:border-jcp-gold/40 hover:shadow-[0_0_30px_rgba(214,177,95,0.15)]"
    },
    {
      title: "Quiero llevar esto a mi equipo",
      phrase: "Optimiza el rendimiento, la mentalidad de ventas y el enfoque de tu organización.",
      result: "Conferencias de alto impacto y talleres inmersivos a medida.",
      ctaText: "Llevar a mi organización",
      ctaHref: "https://wa.me/51963335717?text=Hola%20JuanCa,%20me%20interesa%20llevar%20tu%20sistema%20de%20transformación%20y%20alto%20rendimiento%20a%20mi%20organización",
      icon: <Users className="w-6 h-6 text-jcp-power" />,
      tag: "EMPRESAS & EQUIPOS",
      color: "from-jcp-power/10 to-transparent",
      borderColor: "hover:border-jcp-power/40 hover:shadow-[0_0_30px_rgba(67,97,238,0.15)]"
    },
    {
      title: "Quiero asistir a una experiencia",
      phrase: "Siente la energía transformadora de las dinámicas inmersivas en vivo.",
      result: "Eventos presenciales de alto impacto emocional y de propósito.",
      ctaText: "Reservar mi lugar",
      ctaHref: "#eventos",
      icon: <Calendar className="w-6 h-6 text-jcp-power-l" />,
      tag: "EXPERIENCIA EN VIVO",
      color: "from-jcp-power-l/10 to-transparent",
      borderColor: "hover:border-jcp-power-l/40 hover:shadow-[0_0_30px_rgba(110,141,255,0.15)]"
    }
  ];

  return (
    <section id="elige-tu-camino" className="section-padding bg-[#0B0D17] relative overflow-hidden border-y border-white/5">
      {/* Background soft gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-jcp-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-jcp-power/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.25em] block mb-3">CONVERSIÓN DIRECTA</span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4 tracking-tight leading-tight">
            Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold via-jcp-gold-l to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Camino de Poder</span>
          </h2>
          <p className="font-jakarta text-jcp-text-2 text-base md:text-lg leading-relaxed">
            Tu transformación comienza en la decisión. Selecciona el canal idóneo para conectar con el sistema de JuanCa Power.
          </p>
        </div>

        {/* 3-Column path cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {caminos.map((camino, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`bg-gradient-to-b ${camino.color} to-jcp-surface/20 border border-white/5 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${camino.borderColor} group`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-jcp-text-3 uppercase tracking-widest block mb-4">
                  {camino.tag}
                </span>
                
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {camino.icon}
                </div>

                <h3 className="font-space font-bold text-xl text-white mb-3 group-hover:text-jcp-gold transition-colors">
                  {camino.title}
                </h3>
                
                <p className="font-jakarta text-sm text-jcp-text-2 leading-relaxed mb-4">
                  {camino.phrase}
                </p>

                <div className="h-px bg-white/5 my-4"></div>

                <p className="font-mono text-[11px] text-jcp-gold/90 leading-relaxed mb-6">
                  ✨ <span className="font-bold text-white">Resultado:</span> {camino.result}
                </p>
              </div>

              <a
                href={camino.ctaHref}
                target={camino.ctaHref.startsWith('http') ? "_blank" : undefined}
                rel={camino.ctaHref.startsWith('http') ? "noopener noreferrer" : undefined}
                className="w-full py-3.5 bg-white/5 hover:bg-jcp-power hover:text-white border border-white/10 hover:border-jcp-power rounded-xl text-center font-space font-bold text-xs text-white uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:translate-y-0"
              >
                {camino.ctaText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck } from 'lucide-react';

export default function SocialProofHighlights() {
  const highlights = [
    {
      name: "Álvaro V.",
      role: "Ing. de Sistemas",
      text: "Dejé atrás el piloto automático. El cambio de mentalidad y enfoque con JuanCa es brutal.",
      badge: "Mentalidad"
    },
    {
      name: "Fiorella S.",
      role: "Líder de Equipo",
      text: "No es motivación barata, es estrategia pura, disciplina de acero y resultados medibles.",
      badge: "Resultados"
    },
    {
      name: "Ybeth A.",
      role: "Maestra de Inicial",
      text: "JuanCa me ayudó a encontrar mi fuerza interior. Mi vida personal dio un giro completo.",
      badge: "Propósito"
    }
  ];

  return (
    <section className="py-12 bg-[#0E1122]/60 border-y border-white/5 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-jcp-power/5 via-transparent to-jcp-gold/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Authority Intro */}
          <div className="lg:max-w-xs shrink-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1 text-jcp-gold mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h4 className="font-space font-bold text-lg text-white">Casos de Éxito Reales</h4>
            <p className="font-jakarta text-xs text-jcp-text-2 mt-1">
              Resultados respaldados por personas que transformaron su vida con el método Power.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid sm:grid-cols-3 gap-6 w-full">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-jcp-surface border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-jcp-gold/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono font-bold text-jcp-text-2 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <div className="flex items-center text-jcp-gold text-[10px]">
                    ★★★★★
                  </div>
                </div>
                <p className="font-jakarta text-xs text-jcp-text-2 leading-relaxed mb-4 italic">
                  "{item.text}"
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="font-space font-bold text-xs text-white">{item.name}</span>
                  <span className="font-mono text-[9px] text-jcp-text-3 uppercase">{item.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

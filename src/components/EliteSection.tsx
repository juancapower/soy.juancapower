import React from 'react';
import { motion } from 'motion/react';

const mentors = [
  {
    name: "Orlando Denegri",
    role: "PNL y Coaching",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juanca_y_orlando_denegri_wxy2xs.jpg"
  },
  {
    name: "Jorge Serratos",
    role: "Negocios",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juanca_y_jorge_serratos_rxbvo8.jpg"
  },
  {
    name: "Jorge Loza",
    role: "Dinero y Espiritualidad",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juanca_y_jorge_loza_tyijnt.jpg"
  },
  {
    name: "Pedro Castre",
    role: "Finanzas",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juanca_y_pedro_Castre_u8itr4.jpg"
  },
  {
    name: "Stefany Berdejo",
    role: "Hipnosis",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juanca_y_estefany_berdejo_kmjprg.jpg"
  },
  {
    name: "Daniel Iriarte",
    role: "El Tiburón de las Ventas",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juanca_y_tiburon_dxidhn.jpg"
  },
  {
    name: "WIGO Éxito",
    role: "ÉXITO y ABUNDANCIA",
    img: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1773384474/juganca_y_wilfredo_guevara_wcvaja.jpg"
  }
];

export default function EliteSection() {
  return (
    <section id="elite" className="bg-jcp-bg border-y border-jcp-border-n" style={{ paddingBlock: 'clamp(80px, 10vw, 120px)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Badge superior */}
          <div className="inline-block px-4 py-1.5 bg-jcp-gold/10 border border-jcp-gold/20 rounded-full mb-4">
            <span className="text-xs font-mono font-bold text-jcp-gold uppercase tracking-[0.2em]">Mentoría de Alto Nivel</span>
          </div>

          {/* Título */}
          <h2 className="text-[32px] md:text-[36px] font-space font-semibold mb-6 text-jcp-text">
            Respaldado por la <span className="text-jcp-gold">Élite</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-[16px] font-jakarta font-normal text-jcp-text-2 max-w-2xl mx-auto leading-relaxed">
            No camino solo. Cada paso ha sido guiado por los referentes
            más influyentes del emprendimiento y las ventas en Latinoamérica.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {mentors.map((m) => (
            <div 
              key={m.name} 
              className="relative rounded-[14px] overflow-hidden aspect-[3/4] cursor-default border border-[rgba(255,255,255,0.07)] group transition-all duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] hover:border-[rgba(197,160,89,0.3)]"
            >
              <img 
                src={m.img} 
                alt={m.name} 
                className="w-full h-full object-cover object-top block transition-transform duration-500 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay gradiente */}
              <div 
                className="absolute inset-0 z-[1]"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 70%)'
                }}
              ></div>
              
              {/* Nombre y rol */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-[2]">
                <strong className="font-space font-bold text-[0.95rem] text-white tracking-[-0.01em] block">{m.name}</strong>
                <span className="font-mono text-[9px] text-white/55 tracking-[0.1em] uppercase block mt-[3px]">{m.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

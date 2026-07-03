import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Flame } from 'lucide-react';

const TestimonioVideo: React.FC<{ src: string, name: string, isMuted: boolean, onToggleMute: () => void }> = ({ src, name, isMuted, onToggleMute }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync the DOM element's muted property with the state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMute();
  };

  return (
    <div 
      className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shrink-0 w-full mb-4 border border-white/5"
      onClick={toggleMute}
    >
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        loop
        muted={isMuted}
        playsInline
        autoPlay
        preload="metadata"
      />
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white z-10 hover:bg-black/80 transition-all">
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function TestimoniosSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const testimonios = [
    {
      name: "Ybeth A.",
      cargo: "Maestra de Inicial",
      quote: "JuanCa me ayudó a encontrar esa fuerza interior que no sabía que tenía. Mi vida personal ha dado un giro total y he sanado profundamente.",
      resultado: "Reconexión espiritual y paz",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667361/Testimonio_YbethA_hjhhsw.mp4",
    },
    {
      name: "Fiorella S.",
      cargo: "Líder de Equipo",
      quote: "No es motivación barata, es estrategia pura, disciplina de acero y resultados reales medibles. La comunidad Power es mi mejor apoyo diario.",
      resultado: "Disciplina de acero y foco",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_FiorellaS_k6drko.mp4",
    },
    {
      name: "Gabriella V.",
      cargo: "Líder de Equipo",
      quote: "Alinear mis emociones con mi propósito de negocio fue el desbloqueo innegociable que necesitaba para escalar profesionalmente.",
      resultado: "Desbloqueo emocional para escalar",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_GabrielaV_zpq676.mp4",
    },
    {
      name: "Karen G.",
      cargo: "Abogada",
      quote: "Entender de forma práctica que la mente dirige y el cuerpo ejecuta cambió mi productividad. Sus sesiones valen cada céntimo.",
      resultado: "Reprogramación mental",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667359/Testimonio_KarenG_fkgzkm.mp4",
    },
    {
      name: "Alvaro V.",
      cargo: "Ing. de Sistemas",
      quote: "Pasé del piloto automático a tener el control diario e intencional de mis hábitos y decisiones. La transformación es brutal.",
      resultado: "Productividad y control diario",
      video: "https://res.cloudinary.com/ddn6qh7ve/video/upload/q_auto/f_auto/v1775667358/Testimonio_AlvaroV_u1liet.mp4",
    }
  ];

  return (
    <section id="testimonios" className="section-padding bg-jcp-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jcp-power/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-2">RESULTADOS COMPROBADOS // CASOS DE ÉXITO</span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4 tracking-tight">
            Lo que dicen quienes <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Ya Tomaron Acción</span>
          </h2>
          <p className="font-cormorant italic text-jcp-text-2 text-2xl">
            Prueba social con testimonios reales y cambios tangibles.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonios.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-b from-jcp-surface to-jcp-surface/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-jcp-gold/30 transition-all duration-300"
            >
              <div>
                <TestimonioVideo 
                  src={t.video} 
                  name={t.name} 
                  isMuted={activeVideoIndex !== idx}
                  onToggleMute={() => setActiveVideoIndex(activeVideoIndex === idx ? null : idx)}
                />
                
                {/* Highlighted Result Tag */}
                <div className="mt-3 px-2.5 py-1 bg-jcp-gold/5 border border-jcp-gold/20 rounded-lg inline-block">
                  <span className="font-mono text-[10px] text-jcp-gold font-bold uppercase tracking-wider block">
                    ✨ {t.resultado}
                  </span>
                </div>
                
                <p className="text-xs text-jcp-text-2 font-jakarta leading-relaxed mt-3 italic mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <div className="flex items-center text-jcp-gold mb-1 text-xs tracking-wider">
                  ★★★★★
                </div>
                <h5 className="font-space font-bold text-sm text-white">{t.name}</h5>
                <span className="font-mono text-[9px] text-jcp-text-3 uppercase tracking-wider">{t.cargo}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

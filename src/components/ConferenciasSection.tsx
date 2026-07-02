import React from 'react';
import { motion } from 'motion/react';
import { Presentation, ShieldAlert, Award, Star, Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function ConferenciasSection() {
  const topics = [
    {
      title: "Liderazgo Personal",
      desc: "Cómo guiar tu vida antes de liderar equipos. Herramientas de autogestión, disciplina celular y ruptura de la comodidad para comandar proyectos con propósito.",
      tag: "INSPIRACIÓN"
    },
    {
      title: "Mentalidad de Alto Rendimiento",
      desc: "Estrategias de reprogramación mental y PNL para equipos comerciales y ejecutivos. Técnicas innegociables para mantener el foco láser bajo extrema presión.",
      tag: "SISTEMAS"
    },
    {
      title: "Inteligencia Emocional",
      desc: "La clave silenciosa de los resultados. Cómo neutralizar el estrés y convertir el dolor o la crisis corporativa en combustible de enfoque y empatía estratégica.",
      tag: "EQUILIBRIO"
    },
    {
      title: "Transformación Digital con IA",
      desc: "Estrategias prácticas para integrar flujos de Inteligencia Artificial en el día a día corporativo, aumentando el rendimiento sin perder el propósito humano.",
      tag: "TECNOLOGÍA"
    }
  ];

  return (
    <section id="conferencias" className="section-padding bg-jcp-surface relative overflow-hidden border-y border-jcp-border-n">
      {/* Background spotlights & tech aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(67,97,238,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-jcp-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-2">CONFERENCISTA INTERNACIONAL</span>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 tracking-tight">
              Lleva JuanCa Power a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Organización</span>
            </h2>
            <p className="font-cormorant italic text-jcp-text-2 text-2xl leading-relaxed">
              "No soy un coach motivacional. Soy un arquitecto de transformación corporativa."
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="font-jakarta text-jcp-text-2 text-base leading-relaxed">
              JuanCa Power combina más de 10 años como Ingeniero de Sistemas liderando equipos tecnológicos de alta complejidad con su profunda historia de reconstrucción personal. Sus conferencias fusionan la precisión de los sistemas digitales, la ciencia de la PNL, y la fuerza emocional necesaria para despertar al personal corporativo de la apatía y el piloto automático.
            </p>
          </div>
        </div>

        {/* Topics grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-jcp-surface-2 border border-white/5 p-8 rounded-2xl hover:border-jcp-power/30 hover:bg-jcp-surface-3 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[9px] text-jcp-gold border border-jcp-gold/30 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-4">
                  {topic.tag}
                </span>
                <h4 className="font-space font-bold text-xl text-white mb-3">
                  {topic.title}
                </h4>
                <p className="font-jakarta text-sm text-jcp-text-2 leading-relaxed mb-6">
                  {topic.desc}
                </p>
              </div>

              {/* Bullet validation check */}
              <div className="flex items-center gap-2 text-xs font-mono text-jcp-text-3 border-t border-white/5 pt-4">
                <CheckCircle className="w-4 h-4 text-jcp-power" />
                <span>Disponible para auditorios presenciales u online</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate social proof & interactive call box */}
        <div className="bg-gradient-to-br from-[#0B0D17] to-[#121526] border border-jcp-gold/30 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Star className="w-4 h-4 text-jcp-gold fill-jcp-gold" />
              <Star className="w-4 h-4 text-jcp-gold fill-jcp-gold" />
              <Star className="w-4 h-4 text-jcp-gold fill-jcp-gold" />
              <Star className="w-4 h-4 text-jcp-gold fill-jcp-gold" />
              <Star className="w-4 h-4 text-jcp-gold fill-jcp-gold" />
              <span className="text-xs font-mono text-jcp-text-3 uppercase tracking-wider ml-2">Altamente Recomendado</span>
            </div>
            <h4 className="font-space font-bold text-2xl text-white mb-2">
              ¿Quieres elevar los estándares de tu equipo?
            </h4>
            <p className="font-jakarta text-sm text-jcp-text-2 max-w-2xl">
              Diseñamos talleres corporativos, conferencias magistrales in situ o inmersiones intensivas a la medida de los desafíos de tu organización. Solicita una llamada para coordinar disponibilidad de agenda internacional.
            </p>
          </div>

          <a
            href="mailto:hola@juancapower.com?subject=Solicitud%20de%20Conferencia%20Magistral%20-%20JuanCa%20Power"
            className="inline-flex items-center gap-2 px-8 py-4 bg-jcp-power hover:bg-jcp-power-l text-white font-space font-bold rounded-xl transition-all shadow-[0_0_20px_var(--jcp-power-glow)] text-sm shrink-0 w-full lg:w-auto justify-center"
          >
            Solicitar conferencia <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

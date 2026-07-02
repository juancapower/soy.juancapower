import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, BrainCircuit, Share2, TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';

export default function ComunidadSection() {
  const communityFeatures = [
    {
      title: "Comunidad",
      desc: "Una tribu de personas selectas con altos estándares que se empujan mutuamente hacia el siguiente nivel.",
      icon: <Users className="w-5 h-5 text-jcp-gold" />
    },
    {
      title: "Aprendizaje",
      desc: "Material educativo exclusivo de mentalidad, PNL, hábitos y desarrollo estratégico personal.",
      icon: <BookOpen className="w-5 h-5 text-jcp-power-l" />
    },
    {
      title: "Inteligencia Artificial",
      desc: "Talleres y herramientas de IA aplicada para optimizar tu tiempo y automatizar flujos de trabajo.",
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Networking",
      desc: "Alianzas estratégicas reales con profesionales y fundadores tecnológicos dentro del ecosistema.",
      icon: <Share2 className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Crecimiento",
      desc: "Elevación constante de tus niveles de energía, disciplina física y mental de manera grupal.",
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="comunidad" className="section-padding bg-jcp-bg relative overflow-hidden border-y border-jcp-border-n">
      {/* Visual background lines and glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-jcp-power/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-jcp-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Descriptive and CTA */}
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-3">LA TRIBU DE ALTO NIVEL</span>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 tracking-tight leading-tight">
              Comunidad <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Power</span>
            </h2>
            <p className="font-cormorant italic text-jcp-text-2 text-2xl leading-relaxed mb-6">
              "Emprendedores con propósito construyendo su versión más poderosa."
            </p>
            <p className="font-jakarta text-jcp-text-2 text-base leading-relaxed mb-8">
              No dejes que tu entorno sabotee tus sueños. El secreto de los grandes líderes es rodearse de mentes hambrientas de evolución. Nuestra comunidad exclusiva en WhatsApp reúne a fundadores, profesionales y creativos comprometidos en crear resultados reales, sin excusas ni simulaciones.
            </p>
            
            <a 
              href="https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe?mode=gi_t" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 bg-jcp-power text-white font-space font-bold rounded-xl hover:bg-jcp-power-l transition-all text-sm shadow-[0_0_20px_var(--jcp-power-glow)] hover:shadow-[0_0_30px_var(--jcp-power-glow)] hover:-translate-y-1 group"
            >
              Unirme a Comunidad Power 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Grid of features */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {communityFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="bg-jcp-surface-2 border border-white/5 p-6 rounded-2xl hover:border-jcp-gold/30 hover:bg-jcp-surface-3 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:bg-jcp-power/15 group-hover:border-jcp-power/30 transition-colors">
                    {feat.icon}
                  </div>
                  <h4 className="font-space font-bold text-lg text-white mb-2 group-hover:text-jcp-gold transition-colors">
                    {feat.title}
                  </h4>
                  <p className="font-jakarta text-xs text-jcp-text-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}

              {/* Special interactive WhatsApp Live card */}
              <div className="bg-gradient-to-br from-[#0B0D17] to-[#121526] border border-[#25D366]/30 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full text-[9px] font-mono text-[#25D366] font-bold uppercase tracking-wider">
                      Canal Directo
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  </div>
                  <h4 className="font-space font-bold text-lg text-[#25D366] mb-2 flex items-center gap-1.5">
                    Grupo de WhatsApp 🟢
                  </h4>
                  <p className="font-jakarta text-xs text-jcp-text-2 leading-relaxed">
                    Acceso 100% libre para personas de acción. Conversaciones de alto impacto todos los días.
                  </p>
                </div>
                <a 
                  href="https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-6 text-xs font-mono font-bold text-[#25D366] hover:text-white transition-colors flex items-center gap-1"
                >
                  Unirse gratis ahora <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

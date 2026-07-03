import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, AlertCircle, Heart, Award } from 'lucide-react';

export default function HistoriaSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      tag: "01. LA CAÍDA",
      title: "Vivir bajo la sombra del piloto automático.",
      quote: "Estaba roto por dentro, pero fingía estar bien por fuera.",
      desc: "Fingía estar bien, pero cargaba con una crisis total. En 2016 perdí a mi madre, mi matrimonio se fracturó, e inicié pandemia con más de 100 kilos y un vacío existencial inmenso. Estaba viviendo en piloto automático, lejos de mi hija y de mi verdadero potencial.",
      badge: "El dolor",
      icon: <AlertCircle className="w-5 h-5 text-red-400" />,
      glowColor: "rgba(239, 68, 68, 0.15)"
    },
    {
      id: 1,
      tag: "02. LA RECONSTRUCCIÓN",
      title: "La decisión innegociable de cambiar mi destino.",
      quote: "El dolor no te destruye si decides usarlo como combustible.",
      desc: "Tomé la decisión innegociable de no ser víctima de mis circunstancias. Reduje mi peso drásticamente, discipliné mi cuerpo, reprogramé mi mente mediante PNL, y sané a través de la meditación y la espiritualidad profunda. Me convertí en el ingeniero de mi propio destino.",
      badge: "Disciplina de Acero",
      icon: <Heart className="w-5 h-5 text-jcp-gold" />,
      glowColor: "rgba(197, 160, 89, 0.2)"
    },
    {
      id: 2,
      tag: "03. EL PROPÓSITO",
      title: "Despertar líderes y dejar un legado eterno.",
      quote: "Mi mayor motor tiene nombre propio: mi hija Valeria.",
      desc: "Hoy, Valeria (mi hija) inspira mis máximos estándares. Mi misión no es motivar temporalmente; es equipar a miles de personas, emprendedores y marcas individuales con un sistema de alto rendimiento, mentalidad inquebrantable y trascendencia.",
      badge: "Trascendencia",
      icon: <Award className="w-5 h-5 text-jcp-power-l" />,
      glowColor: "rgba(67, 97, 238, 0.2)"
    }
  ];

  return (
    <section id="historia" className="section-padding bg-jcp-surface relative overflow-hidden border-y border-jcp-border-n">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-jcp-power/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-jcp-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Portrait with floating badges */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden border-2 border-jcp-gold/30 shadow-[0_0_50px_rgba(214,177,95,0.1)] group">
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783015853/JuanCaPower_Foto_Frontal_gxocai.png" 
                alt="JuanCa Power - Transformación y Liderazgo" 
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17]/95 via-transparent to-transparent opacity-90"></div>
              
              {/* Dynamic Overlay based on active step */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-2">Fundador de Power Digital</span>
                <h4 className="font-space font-bold text-2xl text-white">JuanCa Power</h4>
                <p className="font-jakarta text-xs text-jcp-text-2 mt-1">Ingeniero de Sistemas & Mentor de Mentalidad</p>
              </div>
            </div>

            {/* Glowing active card background glow */}
            <div 
              className="absolute -inset-4 rounded-[40px] opacity-45 blur-2xl -z-10 transition-all duration-700"
              style={{ backgroundColor: steps[activeStep].glowColor }}
            ></div>
          </motion.div>

          {/* Right Column: Storytelling steps & Interactive Selector */}
          <div className="lg:col-span-7">
            <div className="text-left mb-8">
              <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.25em] block mb-3">🌌 Mi historia</span>
              <h2 className="text-3xl md:text-5xl font-space font-bold text-white tracking-tight leading-tight mb-4">
                Mi camino no empezó en la cima. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Empezó en el dolor.</span>
              </h2>

              {/* Permanent Highlight Quote Block */}
              <div className="mt-5 p-6 bg-gradient-to-r from-[#121526] to-[#0A0C16] border-l-4 border-jcp-gold rounded-r-2xl shadow-xl">
                <p className="font-cormorant italic text-xl md:text-2xl text-jcp-gold-l leading-relaxed">
                  "No empecé con claridad. Empecé con dolor. Y desde ahí construí propósito."
                </p>
              </div>
            </div>

            {/* Step Selection Buttons */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/5 pb-6">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-5 py-3 rounded-xl font-space font-bold text-sm tracking-wider transition-all flex items-center gap-2 ${
                    activeStep === step.id 
                      ? 'bg-jcp-power text-white shadow-[0_0_15px_var(--jcp-power-glow)]' 
                      : 'bg-white/5 text-jcp-text-2 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {step.tag.split('.')[1].trim()}
                </button>
              ))}
            </div>

            {/* Active Content Display with AnimatePresence */}
            <div className="min-h-[260px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-xs font-mono text-jcp-gold tracking-widest uppercase">{steps[activeStep].tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-jcp-gold"></span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-jcp-text-2 uppercase tracking-wider flex items-center gap-1">
                      {steps[activeStep].icon}
                      {steps[activeStep].badge}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-space font-bold text-white mb-4 leading-snug">
                    {steps[activeStep].title}
                  </h3>

                  <blockquote className="border-l-2 border-jcp-gold pl-4 py-1 mb-6">
                    <p className="font-cormorant italic text-[22px] md:text-[24px] text-jcp-gold leading-relaxed">
                      "{steps[activeStep].quote}"
                    </p>
                  </blockquote>

                  <p className="font-jakarta text-jcp-text-2 text-base leading-relaxed mb-8">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress and quote prompt */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="text-xs font-mono text-jcp-text-3">
                  Paso {activeStep + 1} de {steps.length}
                </div>
                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-2 text-sm font-space font-bold text-jcp-gold hover:text-jcp-cream transition-colors"
                >
                  Siguiente fase <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

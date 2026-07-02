import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Flame, Activity, Zap, ChevronRight, ShieldCheck, Coins } from 'lucide-react';

export default function SistemaPowerSection() {
  const [selectedPillar, setSelectedPillar] = useState<number>(1); // Default to Mente

  const pillars = [
    {
      id: 0,
      name: "ESPÍRITU",
      icon: <Sparkles className="w-6 h-6" />,
      sub: "Propósito & Conexión Profunda",
      emoji: "🌌",
      metrics: ["Alineación Existencial: 100%", "Fórmula de Propósito", "Fe Inquebrantable"],
      tools: ["Meditación de Desbloqueo", "Ruta de Propósito", "Visualización Avanzada"],
      description: "La base inquebrantable de toda tu existencia. Sin conexión con tu propósito y sin fe, cualquier éxito material estará vacío. Aquí alineamos tu visión de vida para que cada acción responda a un porqué divino y poderoso.",
      quote: "Tu mayor sistema no está afuera. Está dentro de ti.",
      color: "from-purple-500/20 to-blue-500/20",
      accentColor: "text-purple-400",
      borderColor: "group-hover:border-purple-500/30",
      number: "01"
    },
    {
      id: 1,
      name: "MENTE",
      icon: <Brain className="w-6 h-6" />,
      sub: "Creencias & Enfoque Láser",
      emoji: "🧠",
      metrics: ["Fuerza de Voluntad: Máxima", "Reprogramación Subconsciente", "Foco Ininterrumpido"],
      tools: ["Hackeo de Creencias Limitantes", "Sistemas de Enfoque Profundo", "Afirmaciones de Alta Frecuencia"],
      description: "Reprogramamos las creencias subconscientes que han saboteado tu crecimiento durante años. Construimos una mentalidad de acero capaz de ignorar el ruido exterior y ejecutar planes de alta complejidad con enfoque láser.",
      quote: "La mente dirige. El cuerpo ejecuta.",
      color: "from-blue-500/20 to-indigo-500/20",
      accentColor: "text-blue-400",
      borderColor: "group-hover:border-blue-500/30",
      number: "02"
    },
    {
      id: 2,
      name: "EMOCIÓN",
      icon: <Flame className="w-6 h-6" />,
      sub: "Dominio & Calma Interior",
      emoji: "💧",
      metrics: ["Inteligencia Emocional: Élite", "Gestión de Estrés: 10/10", "Paz Mental Constante"],
      tools: ["Anclajes de Poder Emocional", "Técnicas de Autogestión Cognitiva", "Liberación de Bloqueos Históricos"],
      description: "El control absoluto de tu energía interna. Pasa de reaccionar en piloto automático a responder de forma intencional y estratégica. Domina tu temperamento y aprende a tomar decisiones óptimas bajo presión extrema.",
      quote: "La maestría interna precede a la victoria externa.",
      color: "from-amber-500/20 to-red-500/20",
      accentColor: "text-amber-400",
      borderColor: "group-hover:border-amber-500/30",
      number: "03"
    },
    {
      id: 3,
      name: "CUERPO",
      icon: <Activity className="w-6 h-6" />,
      sub: "Disciplina, Energía & Salud",
      emoji: "💪",
      metrics: ["Energía Diaria: Vital", "Optimización de Sueño", "Nutrición Celular Activa"],
      tools: ["Rutinas de Alto Rendimiento", "Hábitos Físicos Innegociables", "Optimización Metabólica"],
      description: "El cuerpo es el vehículo físico que materializa tus sueños. Si no posees niveles extraordinarios de energía y salud celular, no podrás ejecutar tus planes. Diseñamos hábitos innegociables para optimizar tu metabolismo.",
      quote: "El cansancio es el nido de la cobardía.",
      color: "from-emerald-500/20 to-teal-500/20",
      accentColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/30",
      number: "04"
    },
    {
      id: 4,
      name: "PLENITUD & ABUNDANCIA",
      icon: <Coins className="w-6 h-6" />,
      sub: "Libertad Financiera, Negocios & Legado",
      emoji: "💰",
      metrics: ["Visión Empresarial: Élite", "Escalamiento Digital", "Monetización de Propósito"],
      tools: ["Modelos de Negocio Premium", "Sistemas de Automatización", "Estrategias de Conversión"],
      description: "La cúspide del Sistema Power 4 que se expande hacia la libertad total. Al integrar Mente, Cuerpo, Emoción y Espíritu, creas la vasija perfecta para atraer abundancia financiera, construir negocios con propósito y consolidar un legado duradero.",
      quote: "La abundancia no es algo que adquieres, es algo con lo que sintonizas.",
      color: "from-amber-500/20 to-yellow-500/20",
      accentColor: "text-jcp-gold",
      borderColor: "group-hover:border-jcp-gold/30",
      number: "05"
    }
  ];

  return (
    <section id="sistema" className="section-padding relative overflow-hidden" style={{ backgroundImage: 'var(--background-image-gradient-space)' }}>
      {/* Background tech elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(67,97,238,0.06)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-jcp-power/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-jcp-power/15 border border-jcp-power/30 rounded-full text-xs font-mono text-jcp-power-l uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>METODOLOGÍA EXCLUSIVA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4 tracking-tight">
            Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-gold via-[#D4B06A] to-jcp-cream" style={{ backgroundImage: 'var(--background-image-gradient-gold)' }}>Power 4™</span>
          </h2>
          <p className="text-xl font-cormorant italic text-jcp-text-2">
            Un marco arquitectónico de transformación integral diseñado para operar como un software de alto rendimiento.
          </p>
        </div>

        {/* Interactive Dashboard Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Pillar Nodes (House Shape Layout) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* 1. Techo (Roof) - Plenitud & Abundancia (Triangle Shape) */}
            <div 
              onClick={() => setSelectedPillar(4)}
              className={`relative cursor-pointer transition-all duration-300 group ${
                selectedPillar === 4 ? 'scale-[1.02] z-10' : 'hover:scale-[1.01]'
              }`}
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                height: '190px',
                width: '100%',
              }}
            >
              {/* Border simulation using background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${
                selectedPillar === 4 ? 'from-[#C5A059] via-[#D4B06A]/60 to-[#C5A059]/30' : 'from-white/15 via-white/5 to-white/5'
              }`} />
              <div 
                className="absolute inset-[1.5px] bg-gradient-to-b from-[#14120E] to-[#0A0C16] flex flex-col items-center justify-end pb-5 pt-10 px-6 text-center"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              >
                {/* Glow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-t from-amber-500/10 to-transparent blur-3xl rounded-full" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`p-2 rounded-xl bg-white/5 border border-white/10 mb-1.5 ${
                    selectedPillar === 4 ? 'text-jcp-gold border-jcp-gold/30' : 'text-jcp-text-2'
                  }`}>
                    {pillars[4].icon}
                  </div>
                  <h3 className="font-space font-bold text-sm sm:text-base text-white tracking-wider uppercase flex items-center justify-center gap-1.5">
                    {pillars[4].name}
                    <span className="text-base">{pillars[4].emoji}</span>
                  </h3>
                  <p className="text-[11px] text-jcp-text-3 font-jakarta max-w-[240px] leading-snug">
                    {pillars[4].sub}
                  </p>
                  <div className="mt-1 flex items-center text-[9px] font-mono text-jcp-gold font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver parámetros</span>
                    <ChevronRight className="w-3 h-3 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Columnas (Columns) - Emoción y Cuerpo como cards rectangulares verticales */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* EMOCIÓN (ID 2) */}
              <div
                onClick={() => setSelectedPillar(2)}
                className={`group p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-60 ${
                  selectedPillar === 2 
                    ? 'bg-gradient-to-br from-[#121526] to-[#0A0C16] border-jcp-gold/60 shadow-[0_0_25px_rgba(197,160,89,0.18)] z-10' 
                    : 'bg-jcp-surface-2 border-white/5 hover:border-white/15 hover:bg-jcp-surface-3'
                }`}
              >
                {/* Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pillars[2].color} blur-2xl rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#C5A059_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${selectedPillar === 2 ? pillars[2].accentColor : 'text-jcp-text-2'}`}>
                    {pillars[2].icon}
                  </div>
                  <span className="font-mono text-[9px] text-jcp-text-3 font-bold tracking-widest uppercase">
                    Pilar Soporte
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-space font-bold text-lg text-white mb-0.5 flex items-center gap-1.5">
                    {pillars[2].name}
                    <span className="text-sm">{pillars[2].emoji}</span>
                  </h3>
                  <p className="text-xs text-jcp-text-3 font-jakarta leading-tight">{pillars[2].sub}</p>
                  
                  <div className="mt-3 flex items-center text-[10px] font-mono text-jcp-gold font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver parámetros</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* CUERPO (ID 3) */}
              <div
                onClick={() => setSelectedPillar(3)}
                className={`group p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-60 ${
                  selectedPillar === 3 
                    ? 'bg-gradient-to-br from-[#121526] to-[#0A0C16] border-jcp-gold/60 shadow-[0_0_25px_rgba(197,160,89,0.18)] z-10' 
                    : 'bg-jcp-surface-2 border-white/5 hover:border-white/15 hover:bg-jcp-surface-3'
                }`}
              >
                {/* Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pillars[3].color} blur-2xl rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#C5A059_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${selectedPillar === 3 ? pillars[3].accentColor : 'text-jcp-text-2'}`}>
                    {pillars[3].icon}
                  </div>
                  <span className="font-mono text-[9px] text-jcp-text-3 font-bold tracking-widest uppercase">
                    Pilar Soporte
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-space font-bold text-lg text-white mb-0.5 flex items-center gap-1.5">
                    {pillars[3].name}
                    <span className="text-sm">{pillars[3].emoji}</span>
                  </h3>
                  <p className="text-xs text-jcp-text-3 font-jakarta leading-tight">{pillars[3].sub}</p>
                  
                  <div className="mt-3 flex items-center text-[10px] font-mono text-jcp-gold font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver parámetros</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              </div>

            </div>

            {/* 3. Bases (Foundation) - Espíritu y Mente al lado de la otra como bases */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* ESPÍRITU (ID 0) */}
              <div
                onClick={() => setSelectedPillar(0)}
                className={`group p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-44 ${
                  selectedPillar === 0 
                    ? 'bg-gradient-to-br from-[#121526] to-[#0A0C16] border-jcp-gold/60 shadow-[0_0_25px_rgba(197,160,89,0.18)] z-10' 
                    : 'bg-jcp-surface-2 border-white/5 hover:border-white/15 hover:bg-jcp-surface-3'
                }`}
              >
                {/* Glow */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pillars[0].color} blur-2xl rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#C5A059_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${selectedPillar === 0 ? pillars[0].accentColor : 'text-jcp-text-2'}`}>
                    {pillars[0].icon}
                  </div>
                  <span className="font-mono text-[9px] text-jcp-text-3 font-bold tracking-widest uppercase">
                    Base del Sistema
                  </span>
                </div>

                <div className="relative z-10 mt-2">
                  <h3 className="font-space font-bold text-base text-white mb-0.5 flex items-center gap-1.5">
                    {pillars[0].name}
                    <span className="text-sm">{pillars[0].emoji}</span>
                  </h3>
                  <p className="text-[11px] text-jcp-text-3 font-jakarta leading-tight">{pillars[0].sub}</p>
                  
                  <div className="mt-2 flex items-center text-[10px] font-mono text-jcp-gold font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver parámetros</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* MENTE (ID 1) */}
              <div
                onClick={() => setSelectedPillar(1)}
                className={`group p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-44 ${
                  selectedPillar === 1 
                    ? 'bg-gradient-to-br from-[#121526] to-[#0A0C16] border-jcp-gold/60 shadow-[0_0_25px_rgba(197,160,89,0.18)] z-10' 
                    : 'bg-jcp-surface-2 border-white/5 hover:border-white/15 hover:bg-jcp-surface-3'
                }`}
              >
                {/* Glow */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pillars[1].color} blur-2xl rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#C5A059_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${selectedPillar === 1 ? pillars[1].accentColor : 'text-jcp-text-2'}`}>
                    {pillars[1].icon}
                  </div>
                  <span className="font-mono text-[9px] text-jcp-text-3 font-bold tracking-widest uppercase">
                    Base del Sistema
                  </span>
                </div>

                <div className="relative z-10 mt-2">
                  <h3 className="font-space font-bold text-base text-white mb-0.5 flex items-center gap-1.5">
                    {pillars[1].name}
                    <span className="text-sm">{pillars[1].emoji}</span>
                  </h3>
                  <p className="text-[11px] text-jcp-text-3 font-jakarta leading-tight">{pillars[1].sub}</p>
                  
                  <div className="mt-2 flex items-center text-[10px] font-mono text-jcp-gold font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver parámetros</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic System Console / Details Viewer */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B0D17] border border-jcp-gold/25 rounded-3xl p-8 shadow-[0_0_40px_rgba(67,97,238,0.1)] relative overflow-hidden min-h-[480px] flex flex-col justify-between">
              {/* Console corner highlights */}
              <div className="absolute top-4 right-4 flex space-x-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-jcp-power opacity-60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-jcp-gold opacity-60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-jcp-cream opacity-60"></span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPillar}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top details */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] text-jcp-text-3 uppercase tracking-widest block mb-2">Pilar Activo // Sistema de Control</span>
                    <h3 className="font-space font-bold text-3xl text-white mb-1 flex items-center gap-2">
                      Dimensión: {pillars[selectedPillar].name}
                      <span className="text-xl">{pillars[selectedPillar].emoji}</span>
                    </h3>
                    <span className="text-sm font-mono text-jcp-gold block mb-4">{pillars[selectedPillar].sub}</span>
                    <div className="w-full h-px bg-white/5 mb-6"></div>
                  </div>

                  {/* Elegant cormorant italic quote */}
                  <blockquote className="border-l-2 border-jcp-gold pl-4 py-1 mb-6">
                    <p className="font-cormorant italic text-xl md:text-2xl text-jcp-gold leading-relaxed">
                      "{pillars[selectedPillar].quote}"
                    </p>
                  </blockquote>

                  {/* Description */}
                  <p className="font-jakarta text-jcp-text-2 text-sm leading-relaxed mb-6">
                    {pillars[selectedPillar].description}
                  </p>

                  {/* Systems Specs / Bullet points */}
                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h5 className="font-mono text-xs text-jcp-text-3 uppercase tracking-wider mb-3">Métricas de Control</h5>
                      <ul className="space-y-2">
                        {pillars[selectedPillar].metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-mono text-jcp-text-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-jcp-power"></span>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-mono text-xs text-jcp-text-3 uppercase tracking-wider mb-3">Herramientas del Sistema</h5>
                      <ul className="space-y-2">
                        {pillars[selectedPillar].tools.map((tool, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-mono text-jcp-text-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-jcp-gold"></span>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Secure component verification footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-jcp-text-3">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  SISTEMA TOTALMENTE INTEGRADO
                </span>
                <span>VER 3.0 // SECURE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

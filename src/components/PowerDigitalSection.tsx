import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Laptop, Cpu, Globe, Rocket, ChevronRight, HelpCircle } from 'lucide-react';

export default function PowerDigitalSection() {
  const [activeLetter, setActiveLetter] = useState<string>('W'); // Default highlighted is Workflow (IA)

  const steps = [
    {
      letter: 'P',
      name: 'Propósito',
      tagline: 'Define tu mensaje innegociable',
      icon: <Globe className="w-5 h-5 text-jcp-gold" />,
      desc: 'El cimiento de cualquier marca de impacto. Encontramos la intersección exacta entre tu historia personal profunda, tus talentos únicos y la necesidad del mercado para extraer un mensaje magnético, claro e inspirador.',
      details: ['Análisis de Legado Personal', 'Diferenciador Clave de Marca', 'Declaración de Misión Global']
    },
    {
      letter: 'O',
      name: 'Originalidad',
      tagline: 'Construye tu identidad de marca',
      icon: <Laptop className="w-5 h-5 text-jcp-power-l" />,
      desc: 'No seas una copia de un coach genérico. Diseñamos un posicionamiento premium y una identidad visual y de comunicación magnética que transmita autoridad inmediata, permitiéndote cobrar high-ticket.',
      details: ['Arquitectura de Marca Luxury Tech', 'Tono de Voz y Storytelling', 'Canales de Comunicación Élite']
    },
    {
      letter: 'W',
      name: 'Workflow',
      tagline: 'Sistemas inteligentes usando IA',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      desc: 'El verdadero poder de la tecnología. Estructuramos y automatizamos todo tu flujo de captación, agendamiento y retención integrando Inteligencia Artificial para reducir fricción y liberar tu tiempo.',
      details: ['Automatización de Agendas Integrada', 'Sistemas de Prospección de IA', 'Workflows de Nutrición Digital']
    },
    {
      letter: 'E',
      name: 'Expansión',
      tagline: 'Contenido estratégico y comunidad',
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      desc: 'Multiplica tu alcance de manera exponencial. Creamos una máquina de distribución de contenido vertical corto y largo, y establecemos comunidades privadas (Skool/WhatsApp) donde tus seguidores se convierten en fans leales.',
      details: ['Plan de Contenido Viral con Propósito', 'Estructura de Tribus Digitales', 'Eventos e Inmersiones Online']
    },
    {
      letter: 'R',
      name: 'Resultados',
      tagline: 'Conversión y Monetización de Legado',
      icon: <Rocket className="w-5 h-5 text-amber-400" />,
      desc: 'Propósito sin ingresos es solo un hobby. Diseñamos embudos de conversión limpios y procesos de ventas consultivos sofisticados para transformar interacciones digitales en clientes de alta rentabilidad.',
      details: ['Estructura de Ofertas High-Ticket', 'Guías de Venta Consultiva', 'Embudos de Conversión Líquidos']
    }
  ];

  const currentStep = steps.find(s => s.letter === activeLetter) || steps[2];

  return (
    <section id="power-digital" className="section-padding bg-jcp-surface relative overflow-hidden border-y border-jcp-border-n">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-jcp-power/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jcp-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-2">EXTENSIÓN DEL ECOSISTEMA // POWER DIGITAL</span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4 tracking-tight">
            Convierte tu propósito en <span className="text-transparent bg-clip-text bg-gradient-to-r from-jcp-power via-jcp-power-l to-jcp-cream" style={{ backgroundImage: 'linear-gradient(135deg, var(--jcp-power) 0%, var(--jcp-power-l) 60%, var(--jcp-cream) 100%)' }}>Impacto Digital</span>
          </h2>
          <p className="font-cormorant italic text-jcp-text-2 text-2xl">
            Método Power Digital™ — Para emprendedores con visión y marcas personales premium.
          </p>
        </div>

        {/* Process Visual flow */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interconnected Letters */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-xs text-jcp-text-3 uppercase tracking-widest mb-2 text-center lg:text-left">Haz clic sobre cada fase del sistema</span>
            
            <div className="flex flex-col gap-3">
              {steps.map((step) => {
                const isActive = activeLetter === step.letter;
                return (
                  <div
                    key={step.letter}
                    onClick={() => setActiveLetter(step.letter)}
                    className={`flex items-center gap-5 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#121526] to-[#0A0C16] border-jcp-power shadow-[0_0_15px_var(--jcp-power-glow)] translate-x-2' 
                        : 'bg-jcp-surface-2 border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Big Letter Icon */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-space font-bold text-xl ${
                      isActive ? 'bg-jcp-power text-white' : 'bg-white/5 text-jcp-text-2'
                    }`}>
                      {step.letter}
                    </div>

                    {/* Step label */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-space font-semibold text-base ${isActive ? 'text-white' : 'text-jcp-text-2'}`}>
                          {step.name}
                        </h4>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-jcp-power animate-pulse"></span>}
                      </div>
                      <p className="text-xs text-jcp-text-3 font-jakarta">{step.tagline}</p>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-jcp-power rotate-90' : 'text-jcp-text-3'}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Step detail console */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B0D17] border border-jcp-border rounded-3xl p-8 lg:p-10 shadow-2xl relative min-h-[440px] flex flex-col justify-between overflow-hidden">
              {/* Circuit wire design accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-jcp-power/5 rounded-full blur-2xl"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLetter}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-jcp-power/10 border border-jcp-power/20 flex items-center justify-center">
                      {currentStep.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-jcp-text-3 uppercase tracking-wider block">MÉTODO POWER DIGITAL</span>
                      <h3 className="font-space font-bold text-2xl text-white">
                        Fase {currentStep.letter} — {currentStep.name}
                      </h3>
                    </div>
                  </div>

                  <h4 className="font-space font-semibold text-lg text-jcp-gold mb-4">
                    {currentStep.tagline}
                  </h4>

                  <p className="font-jakarta text-jcp-text-2 text-[15px] leading-relaxed mb-8">
                    {currentStep.desc}
                  </p>

                  <div>
                    <h5 className="font-mono text-xs text-jcp-text-3 uppercase tracking-wider mb-4">Sistemas de implementación</h5>
                    <div className="grid sm:grid-cols-1 gap-3">
                      {currentStep.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl text-xs font-mono text-jcp-text-2">
                          <span className="w-2 h-2 rounded-full bg-jcp-power"></span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Prompt */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[11px] font-mono text-jcp-text-3 uppercase tracking-wider">¿Listo para construir tu sistema digital?</span>
                <a 
                  href="https://wa.me/51963335717?text=Hola%20JuanCa,%20estoy%20interesado%20en%20implementar%20el%20método%20Power%20Digital" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-xs font-space font-bold text-jcp-power-l hover:text-white transition-colors"
                >
                  Agendar asesoría técnica <ChevronRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Video, Download, ArrowUpRight, Sparkles, BookOpen, Layers, Radio } from 'lucide-react';

export default function PowerLabSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const researchTopics = [
    'Todos',
    'Mentalidad',
    'Conciencia',
    'IA & Growth',
    'Sistema Power',
    'Ley del Uno',
    'Videos & Lives',
  ];

  return (
    <section id="power-lab" className="py-24 lg:py-32 bg-[#0b0d17] border-t border-white/[0.08] relative overflow-hidden">
      {/* Editorial Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[650px] h-[650px] bg-[#4361ee]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#deb660]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#deb660] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 // Hub de Conocimiento & Experimentación</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
              Power Lab.{' '}
              <span className="font-cormorant italic font-normal text-[1.1em] text-[#deb660] block sm:inline">
                Laboratorio de ideas y conciencia.
              </span>
            </h2>

            <p className="text-base lg:text-lg text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl">
              Un espacio abierto para investigar, deconstruir y compartir modelos mentales,
              adopción de Inteligencia Artificial, autoconocimiento y herramientas prácticas de transformación.
            </p>
          </div>

          {/* Research Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {researchTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveFilter(topic)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === topic
                    ? 'bg-white text-[#0b0d17] font-semibold'
                    : 'bg-white/[0.03] border border-white/10 text-[#9ea3b5] hover:text-white hover:bg-white/[0.07]'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Flagship: POWER PROMPTS #01 (Feature Module) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-r from-[#101322] via-[#101322]/90 to-[#0b0d17] border border-white/12 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4361ee]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#deb660]/10 border border-[#deb660]/30 text-[#deb660] font-mono text-[10px] uppercase tracking-widest mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Recurso Destacado · Edición 01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-white tracking-tight mb-3">
                Power Prompts #01:{' '}
                <span className="text-[#deb660] font-cormorant italic font-normal text-[1.15em]">
                  Rompepatrones con ChatGPT
                </span>
              </h3>

              <p className="text-sm sm:text-base text-[#9ea3b5] font-jakarta leading-relaxed max-w-2xl mb-6">
                Ingeniería de prompts estructurada para cuestionar tus supuestos, diseñar modelos de pensamiento
                y acelerar tu creatividad sin depender de respuestas genéricas. Un marco de trabajo directo para pensar mejor con IA.
              </p>

              <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-[#636980]">
                <span>Formato: Notion Guide</span>
                <span>·</span>
                <span>Acceso: 100% Libre</span>
                <span>·</span>
                <span>Estatus: Disponible</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <a
                href="/powerprompts"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Acceder a Power Prompts</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] font-mono text-[#636980]">
                Apertura directa sin registro forzado
              </span>
            </div>
          </div>
        </motion.div>

        {/* Two Highlighted Primary Doors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Door 1: LEY DEL UNO (Lives y Conversaciones) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#101322]/70 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[10px] uppercase tracking-widest">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>Lives & Conversaciones</span>
                </div>
                <span className="font-mono text-xs text-[#636980]">01 // Conciencia</span>
              </div>

              <h3 className="text-2xl font-space font-bold text-white tracking-tight mb-3 group-hover:text-[#deb660] transition-colors">
                La Ley del Uno
              </h3>

              <p className="text-sm font-jakarta text-[#9ea3b5] leading-relaxed mb-6">
                Transmisiones en vivo, debates y reflexiones profundas sobre la naturaleza de la realidad,
                las leyes de la conciencia, el autoconocimiento y la integración del ser. Conversaciones sin filtro para expandir perspectiva.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                <div className="text-xs font-mono text-white mb-1">Ejes de conversación:</div>
                <div className="text-xs text-[#636980] font-jakarta">
                  Unicidad · Densidades de conciencia · Reprogramación del ego · Filosofía hermética
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <a
                href="https://youtube.com/@soyjuancapower"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-jakarta font-semibold text-white group-hover:text-[#deb660] transition-colors"
              >
                <span>Ver transmisiones en YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-[#636980]">@soyjuancapower</span>
            </div>
          </motion.div>

          {/* Door 2: RECURSOS GRATUITOS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#101322]/70 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#deb660]/10 border border-[#deb660]/25 text-[#deb660] font-mono text-[10px] uppercase tracking-widest">
                  <Download className="w-3 h-3" />
                  <span>Acceso Abierto</span>
                </div>
                <span className="font-mono text-xs text-[#636980]">02 // Herramientas</span>
              </div>

              <h3 className="text-2xl font-space font-bold text-white tracking-tight mb-3 group-hover:text-[#deb660] transition-colors">
                Recursos Gratuitos
              </h3>

              <p className="text-sm font-jakarta text-[#9ea3b5] leading-relaxed mb-6">
                Plantillas, frameworks de toma de decisiones, guías de claridad y herramientas de adopción
                tecnológica desarrolladas para que apliques el Sistema Power de manera inmediata y autónoma.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                <div className="text-xs font-mono text-white mb-1">Materiales disponibles:</div>
                <div className="text-xs text-[#636980] font-jakarta">
                  Power Prompts #01 · Framework Sistema Power 4 · Protocolo de Claridad Matutina
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <a
                href="/powerprompts"
                className="inline-flex items-center gap-2 text-xs font-jakarta font-semibold text-white group-hover:text-[#deb660] transition-colors"
              >
                <span>Descargar recursos y guías</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-[#636980]">Sin fricción</span>
            </div>
          </motion.div>
        </div>

        {/* Thematic Research Tracks Notice */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9ea3b5]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4361ee] inline-block" />
            <span>Power Lab se actualiza continuamente con nuevos ensayos, directos y herramientas de IA.</span>
          </div>
          <a
            href="https://instagram.com/soyjuancapower"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#deb660] hover:underline whitespace-nowrap"
          >
            Sigue las actualizaciones en Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

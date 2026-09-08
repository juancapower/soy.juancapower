import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0b0d17]"
    >
      {/* Editorial Subtle Atmosphere */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4361ee]/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-[#deb660]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Narrative Engine (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow / Positioning mark */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-6 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#deb660]" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#f8f9fa] font-medium">
                Mentalidad · Tecnología · Propósito
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[64px] xl:text-[70px] font-jakarta font-extrabold tracking-[-0.035em] text-white leading-[1.05] mb-6"
            >
              Despierta tu Power.{' '}
              <span className="font-cormorant italic font-normal text-[1.12em] text-[#deb660] block tracking-normal mt-1">
                Construye una vida
              </span>{' '}
              y una marca con propósito.
            </motion.h1>

            {/* Thesis Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9ea3b5] font-jakarta font-normal leading-relaxed max-w-xl mb-10"
            >
              Acompaño a profesionales, líderes y creadores a integrar claridad interna,
              rigor de sistemas e Inteligencia Artificial para trascender el piloto automático
              y operar en su máximo nivel de impacto y serenidad.
            </motion.p>

            {/* Decisive Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
            >
              <a
                href="#sobre-mi"
                className="px-7 py-4 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#deb660] hover:text-[#0b0d17] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
              >
                <span>Conoce mi trabajo</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#mentoria"
                className="px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Agenda una mentoría</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#deb660]" />
              </a>
            </motion.div>

            {/* Typographic Metric Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-8 sm:gap-10"
            >
              <div>
                <div className="font-space text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  +300
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#636980]">
                  Vidas impactadas
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 hidden sm:block" />

              <div>
                <div className="font-space text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  +50
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#636980]">
                  Procesos 1:1
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 hidden sm:block" />

              <div>
                <div className="font-space text-base lg:text-lg font-bold text-white tracking-tight">
                  Ingeniero & Speaker
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#deb660]">
                  Lima · Internacional
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Balanced Editorial Portrait Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Refined Framing Layer */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/12 bg-[#101322] shadow-2xl">
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783036806/JuanCaPower_Hero_kajv6v.png"
                  alt="JuanCa Power"
                  className="w-full h-full object-cover object-top filter contrast-[1.04]"
                  referrerPolicy="no-referrer"
                />

                {/* Editorial Vignette & Lighting Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d17]/40 via-transparent to-transparent" />

                {/* Top Corner Mono Coordinate Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#0b0d17]/80 backdrop-blur-md border border-white/10 font-mono text-[9px] uppercase tracking-widest text-[#9ea3b5]">
                  Lima · PE
                </div>

                {/* Bottom Editorial Caption */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0b0d17]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-space font-bold text-sm text-white">
                      Juan Carlos
                    </span>
                    <span className="font-mono text-[10px] text-[#deb660] uppercase tracking-widest">
                      Speaker & Mentor
                    </span>
                  </div>
                  <p className="font-jakarta text-[11px] text-[#9ea3b5] leading-relaxed">
                    Ingeniero de Sistemas. Desarrollo humano con rigor metodológico e IA aplicada.
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Hairline Accent */}
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-28 h-28 border-b-2 border-l-2 border-[#deb660]/30 rounded-bl-3xl pointer-events-none -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

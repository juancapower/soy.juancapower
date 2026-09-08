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
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#0b0d17]"
    >
      {/* Editorial Hero Background Image */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 xl:w-1/2 h-full pointer-events-none overflow-hidden select-none z-0">
        <img
          src="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1783036806/JuanCaPower_Hero_kajv6v.png"
          alt="JuanCa Power"
          aria-hidden="true"
          className="w-full h-full object-cover object-[center_top] lg:object-top opacity-55 sm:opacity-65 lg:opacity-90 filter contrast-[1.06]"
          referrerPolicy="no-referrer"
        />
        {/* Directional fades ensuring text legibility on mobile and a seamless edge blend on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d17] via-[#0b0d17]/80 to-[#0b0d17]/40 lg:via-[#0b0d17]/25 lg:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/80 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0b0d17]/70 to-transparent" />
      </div>

      {/* Editorial Subtle Atmosphere Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4361ee]/[0.07] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-[#deb660]/[0.04] rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl lg:max-w-3xl flex flex-col justify-center">
          {/* Eyebrow / Positioning mark */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-6 self-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#deb660]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#f8f9fa] font-medium">
              Mentalidad · Tecnología · Propósito
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[34px] sm:text-5xl lg:text-[64px] xl:text-[70px] font-jakarta font-extrabold tracking-[-0.035em] text-white leading-[1.06] mb-6"
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
            sistemas e Inteligencia Artificial para operar en su máximo nivel de impacto y serenidad.
          </motion.p>

          {/* Decisive Dual CTAs: Primary in Azul Power (#4361ee), Secondary in Outline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
          >
            <a
              href="#sobre-mi"
              className="px-8 py-4 rounded-xl bg-[#4361ee] hover:bg-[#3651d4] text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#4361ee]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361ee]"
            >
              <span>Más sobre mi</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#mentoria"
              className="px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white font-jakarta font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#deb660]"
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
            className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-8 sm:gap-12"
          >
            <div>
              <div className="font-space text-2xl lg:text-3xl font-bold text-white tracking-tight">
                +300
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#8a8f9f] mt-1">
                Vidas impactadas
              </div>
            </div>

            <div className="w-px h-8 bg-white/10 hidden sm:block" />

            <div>
              <div className="font-space text-2xl lg:text-3xl font-bold text-white tracking-tight">
                +50
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#8a8f9f] mt-1">
                Marcas potenciadas
              </div>
            </div>

            <div className="w-px h-8 bg-white/10 hidden sm:block" />

            <div>
              <div className="font-space text-base lg:text-lg font-bold text-white tracking-tight">
                Ingeniero & Coach
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#deb660] mt-1">
                Trujillo · Lima · Internacional
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0b0d17]"
    >
      {/* Editorial Background Composition */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783036806/JuanCaPower_Hero_kajv6v.png"
          alt="JuanCa Power"
          className="w-full h-full object-cover object-center lg:object-[center_28%]"
          referrerPolicy="no-referrer"
        />

        {/* Precise Editorial Lighting Overlays (no muddy blackouts) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/70 to-[#0b0d17]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d17] via-[#0b0d17]/85 to-transparent"></div>

        {/* Ambient Subtle Accent (Controlled, minimal) */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#4361ee]/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Territories Definition */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4361ee]"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#f8f9fa] font-medium">
              Mentalidad · Tecnología · Propósito
            </span>
          </motion.div>

          {/* Headline Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[68px] font-jakarta font-extrabold tracking-[-0.035em] text-white leading-[1.06] mb-6"
          >
            Despierta tu Power. <br />
            <span className="font-cormorant italic font-normal text-[1.12em] text-[#deb660] leading-none">
              Construye una vida
            </span>{' '}
            y una marca con propósito.
          </motion.h1>

          {/* Narrative Positioning Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9ea3b5] font-jakarta font-normal leading-relaxed max-w-2xl mb-10"
          >
            Acompaño a profesionales, líderes y creadores a integrar claridad interna,
            pensamiento estratégico y herramientas de Inteligencia Artificial para
            trascender el piloto automático y operar en su máximo nivel.
          </motion.p>

          {/* Clean Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <a
              href="#territorios"
              className="px-7 py-4 rounded-xl bg-white text-[#0b0d17] font-jakarta font-semibold text-sm hover:bg-[#f8f9fa] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
            >
              <span>Conoce mi trabajo</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#mentoria"
              className="px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white font-jakarta font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Agenda una mentoría</span>
              <ArrowRight className="w-4 h-4 text-[#deb660]" />
            </a>
          </motion.div>

          {/* Minimalist Credibility Bar */}
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
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#636980]">
                Vidas impactadas
              </div>
            </div>

            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>

            <div>
              <div className="font-space text-2xl lg:text-3xl font-bold text-white tracking-tight">
                +50
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#636980]">
                Procesos de mentoría 1:1
              </div>
            </div>

            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>

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
      </div>
    </section>
  );
}

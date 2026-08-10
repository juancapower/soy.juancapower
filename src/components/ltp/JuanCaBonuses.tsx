import React from 'react';
import { Gift, ExternalLink, Sparkles, MessageCircle, BarChart2, Tv } from 'lucide-react';
import { JUANCA_BONUSES } from '../../data/liberaTuProposito';

const bonusIcons = [
  <Sparkles key="1" className="w-5 h-5 text-jcp-gold" />,
  <MessageCircle key="2" className="w-5 h-5 text-emerald-400" />,
  <BarChart2 key="3" className="w-5 h-5 text-indigo-400" />,
  <Tv key="4" className="w-5 h-5 text-amber-400" />
];

export default function JuanCaBonuses() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jcp-gold/15 border border-jcp-gold/30 text-xs font-space font-bold text-jcp-gold uppercase tracking-widest mb-3">
              <Gift className="w-4 h-4 text-jcp-gold" />
              <span>BONUS EXCLUSIVOS DE MARCA</span>
            </div>
            <h3 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Beneficios Adicionales al Reservar con JuanCa Power
            </h3>
          </div>
          <p className="font-jakarta text-xs text-jcp-text-3 max-w-md">
            * Estos beneficios son otorgados de forma complementaria por el equipo de JuanCa Power.
          </p>
        </div>

        {/* 4 Cards Grid - Open layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {JUANCA_BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-jcp-gold/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {bonusIcons[idx]}
                </div>
                <h4 className="font-space font-bold text-sm text-white mb-2 group-hover:text-jcp-gold transition-colors">
                  {bonus.title}
                </h4>
                <p className="font-jakarta text-xs text-jcp-text-2 leading-relaxed mb-4">
                  {bonus.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="font-mono text-[10px] text-jcp-gold/90 font-medium tracking-wide">
                  ℹ️ {bonus.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

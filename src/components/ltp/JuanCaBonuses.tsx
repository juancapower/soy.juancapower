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
    <div className="my-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#121528] via-[#0B0D17] to-[#181C38] border border-jcp-gold/30 shadow-[0_0_30px_rgba(214,177,95,0.08)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-jcp-gold/10 border border-jcp-gold/20">
          <Gift className="w-5 h-5 text-jcp-gold" />
        </div>
        <div>
          <span className="font-mono text-[10px] text-jcp-gold uppercase tracking-widest block">
            Bonus de Marca
          </span>
          <h3 className="font-space font-bold text-xl md:text-2xl text-white">
            Beneficios adicionales al reservar con JuanCa Power
          </h3>
        </div>
      </div>

      <p className="font-jakarta text-xs md:text-sm text-jcp-text-2 mb-8 leading-relaxed max-w-3xl">
        Estos recursos son entregados directamente por JuanCa Power y no forman parte del programa oficial de BINLP.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {JUANCA_BONUSES.map((bonus, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-jcp-gold/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                {bonusIcons[idx]}
                <h4 className="font-space font-bold text-sm text-white">
                  {bonus.title}
                </h4>
              </div>
              <p className="font-jakarta text-xs text-jcp-text-2 leading-relaxed mb-3">
                {bonus.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-white/5">
              <span className="font-mono text-[10px] text-jcp-gold/90 font-medium tracking-wide">
                ℹ️ {bonus.note}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Check, Info, Users, User, Sparkles, ArrowRight } from 'lucide-react';
import { TicketZone, calculatePrice } from '../../data/liberaTuProposito';

export interface TicketCardProps {
  key?: string | number;
  zone: TicketZone;
  isSelected: boolean;
  selectedQuantity: number;
  onSelectZone: (zoneId: string, quantity: number) => void;
}

export default function TicketCard({
  zone,
  isSelected,
  selectedQuantity,
  onSelectZone,
}: TicketCardProps) {
  const activeQty = isSelected ? selectedQuantity : (zone.pairPrice ? selectedQuantity : 1);
  const { total, savings } = calculatePrice(zone, activeQty);
  const canBuyPair = zone.pairPrice !== undefined;

  return (
    <div
      onClick={() => onSelectZone(zone.id, activeQty)}
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'bg-gradient-to-b from-[#161B33] via-[#0E1122] to-[#0A0C18] border-2 border-jcp-gold shadow-[0_15px_40px_rgba(214,177,95,0.2)] -translate-y-1'
          : 'bg-white/[0.03] hover:bg-white/[0.05] border border-white/12 hover:border-white/25 shadow-lg'
      }`}
    >
      {/* Top Selection Ribbon */}
      {isSelected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-jcp-gold to-[#E7C97A] text-black font-space font-extrabold text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(214,177,95,0.5)] flex items-center gap-1.5 whitespace-nowrap z-20">
          <Sparkles className="w-3 h-3 text-black" />
          <span>ZONA SELECCIONADA</span>
        </div>
      )}

      <div>
        {/* Header & Badges */}
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <span
            className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider border ${zone.colorClass.badgeBg}`}
          >
            {zone.name}
          </span>
          {zone.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-space font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider">
              {zone.badge}
            </span>
          )}
        </div>

        {/* Location Info */}
        <p className="text-xs font-jakarta text-jcp-text-2 mb-5 leading-relaxed min-h-[40px]">
          <strong className="text-white font-semibold">Ubicación:</strong> {zone.location}
        </p>

        {/* Dynamic Pricing Box */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-xs font-jakarta text-jcp-text-3 uppercase tracking-wide">
              {activeQty === 2 && canBuyPair ? 'Pase Doble (2 personas)' : 'Pase Individual (1 persona)'}
            </span>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-space font-extrabold text-white">
                S/{total.toLocaleString('es-PE')}
              </span>
              <span className="block text-[10px] font-mono text-jcp-text-3">incl. IGV</span>
            </div>
          </div>

          {canBuyPair ? (
            <div className="pt-2.5 border-t border-white/10 mt-3 flex items-center justify-between text-xs font-jakarta">
              <span className="text-jcp-gold font-bold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-jcp-gold" />
                Promo 2P: S/{zone.pairPrice?.toLocaleString('es-PE')}
              </span>
              {savings && savings > 0 ? (
                <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2 py-0.5 rounded-full text-[10px]">
                  Ahorras S/{savings}
                </span>
              ) : (
                <span className="text-jcp-text-3 text-[11px]">Individual: S/{zone.individualPrice}</span>
              )}
            </div>
          ) : (
            <div className="pt-2.5 border-t border-white/10 mt-3 text-[11px] font-jakarta text-jcp-text-3 italic">
              Pase de acceso élite individual exclusivo
            </div>
          )}
        </div>

        {/* Benefits Checklist */}
        <div className="mb-6 space-y-3">
          <h4 className="font-space font-bold text-xs text-white uppercase tracking-wider">
            Lo que incluye tu experiencia:
          </h4>
          <ul className="space-y-2.5">
            {zone.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs font-jakarta text-jcp-text-2 leading-snug">
                <div className="p-0.5 rounded-full bg-jcp-gold/15 text-jcp-gold shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notice alert */}
        {zone.notice && (
          <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-[11px] font-jakarta leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{zone.notice}</span>
          </div>
        )}
      </div>

      {/* Select CTA Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelectZone(zone.id, activeQty);
        }}
        className={`w-full min-h-[50px] py-3 px-4 rounded-xl font-space font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
          isSelected
            ? 'bg-gradient-to-r from-jcp-gold to-[#E7C97A] text-black shadow-[0_0_25px_rgba(214,177,95,0.4)] hover:brightness-110'
            : 'bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:border-jcp-gold/50'
        }`}
      >
        {isSelected ? (
          <>
            <Check className="w-4 h-4 text-black" />
            <span>Confirmar Selección</span>
          </>
        ) : (
          <>
            <span>Elegir {zone.name}</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

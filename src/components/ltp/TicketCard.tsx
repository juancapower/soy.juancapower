import React from 'react';
import { Check, Info, Users, User } from 'lucide-react';
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
  // Compute price for currently selected quantity if this card is active, or default to 1
  const activeQty = isSelected ? selectedQuantity : 1;
  const { total } = calculatePrice(zone, activeQty);

  const canBuyPair = zone.pairPrice !== undefined;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 bg-[#0F1120] border ${
        isSelected
          ? `${zone.colorClass.border} shadow-[0_0_25px_rgba(214,177,95,0.12)] ring-1 ring-[#D6B15F]/30`
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      {/* Top Header & Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider border ${zone.colorClass.badgeBg}`}
          >
            {zone.name}
          </span>
          {zone.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-space font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider">
              {zone.badge}
            </span>
          )}
        </div>

        {/* Location */}
        <p className="text-xs font-jakarta text-jcp-text-2 mb-4 leading-relaxed min-h-[36px]">
          <strong className="text-white font-semibold">Ubicación:</strong> {zone.location}
        </p>

        {/* Pricing Display */}
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-5">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-xs font-jakarta font-medium text-jcp-text-3 uppercase tracking-wide">1 Persona</span>
            <span className="text-xl font-space font-bold text-white">
              S/{zone.individualPrice.toLocaleString('es-PE')}
              <span className="text-[10px] font-jakarta text-jcp-text-3 font-normal ml-1">incl. IGV</span>
            </span>
          </div>

          {canBuyPair ? (
            <div className="flex items-baseline justify-between pt-2 border-t border-white/5 mt-2">
              <span className="text-xs font-jakarta text-jcp-gold font-bold uppercase tracking-wide flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Promo 2 Personas
              </span>
              <span className="text-lg font-space font-bold text-jcp-gold">
                S/{zone.pairPrice?.toLocaleString('es-PE')}
                <span className="text-[10px] font-jakarta text-jcp-text-3 font-normal ml-1">incl. IGV</span>
              </span>
            </div>
          ) : (
            <div className="pt-2 border-t border-white/5 mt-2">
              <span className="text-[11px] font-jakarta text-jcp-text-3 italic block">
                Entrada individual exclusiva (sin opción 2x1)
              </span>
            </div>
          )}
        </div>

        {/* Quantity selector inside card when 2-person option exists */}
        {canBuyPair && (
          <div className="mb-5">
            <label className="text-xs font-jakarta font-medium uppercase text-jcp-text-2 block mb-2 tracking-wide">
              Seleccionar asistentes:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onSelectZone(zone.id, 1)}
                className={`min-h-[44px] px-3 py-2 rounded-lg font-space font-bold text-xs flex items-center justify-center gap-1.5 transition-all border ${
                  isSelected && selectedQuantity === 1
                    ? 'bg-jcp-gold text-black border-jcp-gold shadow-md'
                    : 'bg-white/5 text-jcp-text-2 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
                aria-label="Seleccionar 1 persona"
              >
                <User className="w-3.5 h-3.5" /> 1 Persona (S/{zone.individualPrice})
              </button>

              <button
                type="button"
                onClick={() => onSelectZone(zone.id, 2)}
                className={`min-h-[44px] px-3 py-2 rounded-lg font-space font-bold text-xs flex items-center justify-center gap-1.5 transition-all border ${
                  isSelected && selectedQuantity === 2
                    ? 'bg-jcp-gold text-black border-jcp-gold shadow-md'
                    : 'bg-white/5 text-jcp-text-2 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
                aria-label="Seleccionar 2 personas en promoción"
              >
                <Users className="w-3.5 h-3.5" /> 2 Personas (S/{zone.pairPrice})
              </button>
            </div>
          </div>
        )}

        {/* Benefits List */}
        <div className="mb-5">
          <h4 className="font-space font-bold text-xs text-white uppercase tracking-wider mb-3">
            Beneficios incluidos:
          </h4>
          <ul className="space-y-2">
            {zone.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs font-jakarta text-jcp-text-2">
                <Check className="w-4 h-4 text-jcp-gold shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notice if present */}
        {zone.notice && (
          <div className="mb-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-[11px] font-jakarta leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{zone.notice}</span>
          </div>
        )}
      </div>

      {/* Primary Selection Button */}
      <button
        type="button"
        onClick={() => onSelectZone(zone.id, canBuyPair ? (isSelected ? selectedQuantity : 1) : 1)}
        className={`w-full min-h-[48px] py-3 px-4 rounded-xl font-space font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
          isSelected
            ? 'bg-jcp-gold text-black shadow-[0_0_20px_rgba(214,177,95,0.3)] hover:bg-[#E7C97A]'
            : 'bg-white/10 text-white border border-white/10 hover:bg-white/15'
        }`}
        aria-label={`Elegir ${zone.name}`}
      >
        {isSelected ? (
          <>
            <Check className="w-4 h-4" /> Zona seleccionada (S/{total.toLocaleString('es-PE')})
          </>
        ) : (
          `Elegir ${zone.name}`
        )}
      </button>
    </div>
  );
}

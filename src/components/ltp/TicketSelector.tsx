import React, { useState } from 'react';
import { TICKET_ZONES, OFFICIAL_EVENT_INFO, TicketZone } from '../../data/liberaTuProposito';
import TicketCard from './TicketCard';
import OrderSummary from './OrderSummary';
import JuanCaBonuses from './JuanCaBonuses';
import SeatMapSection from './SeatMapSection';
import { Users, User, Ticket, Sparkles, Check } from 'lucide-react';

export default function TicketSelector() {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('indomable');
  const [globalQuantity, setGlobalQuantity] = useState<number>(1);

  const selectedZone = TICKET_ZONES.find((z) => z.id === selectedZoneId) || TICKET_ZONES[0];

  const handleSelectZone = (zoneId: string, qty: number) => {
    const targetZone = TICKET_ZONES.find((z) => z.id === zoneId);
    if (!targetZone) return;

    setSelectedZoneId(zoneId);
    if (targetZone.pairPrice === undefined) {
      setGlobalQuantity(1);
    } else {
      setGlobalQuantity(qty);
    }
  };

  const handleGlobalQuantityChange = (qty: number) => {
    if (selectedZone.pairPrice === undefined && qty === 2) {
      // If user switches to 2 but selected zone is Face Your Fear (which doesn't have pairPrice), auto-switch to MFT or Indomable
      setSelectedZoneId('indomable');
    }
    setGlobalQuantity(qty);
  };

  return (
    <div className="py-12 lg:py-20" id="entradas">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jcp-gold/15 border border-jcp-gold/30 text-xs font-space font-bold text-jcp-gold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(214,177,95,0.2)]">
          <Ticket className="w-4 h-4 text-jcp-gold" />
          <span>ENTRADAS OFICIALES & PRECIOS</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white mb-4 tracking-tight">
          Elige Tu Nivel de Experiencia
        </h2>
        
        <p className="font-jakarta text-sm sm:text-base text-jcp-text-2 leading-relaxed">
          Compara los cuatro niveles de inmersión para Libera tu Propósito Lima 2026. Selecciona el número de personas para activar la tarifa promocional.
        </p>

        {/* Quantity Toggle Switcher Bar */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-xl">
          <button
            type="button"
            onClick={() => handleGlobalQuantityChange(1)}
            className={`px-5 py-3 rounded-xl font-space font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
              globalQuantity === 1
                ? 'bg-gradient-to-r from-jcp-gold to-[#E7C97A] text-black shadow-md'
                : 'text-jcp-text-2 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>1 Pase Individual</span>
          </button>

          <button
            type="button"
            onClick={() => handleGlobalQuantityChange(2)}
            className={`px-5 py-3 rounded-xl font-space font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 relative ${
              globalQuantity === 2
                ? 'bg-gradient-to-r from-jcp-gold to-[#E7C97A] text-black shadow-md'
                : 'text-jcp-text-2 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>2 Personas (Promo 2x1)</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500 text-black text-[9px] font-extrabold ml-1">
              AHORRA HASTA S/600
            </span>
          </button>
        </div>

        <div className="mt-4 text-xs font-mono text-jcp-gold/90">
          ℹ️ {OFFICIAL_EVENT_INFO.promoNotice}
        </div>
      </div>

      {/* 4 Cards Grid - Fluid and Spacious */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
        {TICKET_ZONES.map((zone) => (
          <TicketCard
            key={zone.id}
            zone={zone}
            isSelected={selectedZoneId === zone.id}
            selectedQuantity={globalQuantity}
            onSelectZone={handleSelectZone}
          />
        ))}
      </div>

      {/* Auditorium Seat Map */}
      <SeatMapSection />

      {/* Order Summary Section */}
      <OrderSummary
        selectedZone={selectedZone}
        quantity={globalQuantity}
        onQuantityChange={handleGlobalQuantityChange}
      />

      {/* JuanCa Power Bonuses */}
      <JuanCaBonuses />
    </div>
  );
}

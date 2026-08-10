import React, { useState } from 'react';
import { TICKET_ZONES, OFFICIAL_EVENT_INFO, TicketZone } from '../../data/liberaTuProposito';
import TicketCard from './TicketCard';
import OrderSummary from './OrderSummary';
import JuanCaBonuses from './JuanCaBonuses';
import SeatMapSection from './SeatMapSection';

export default function TicketSelector() {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('indomable');
  const [quantity, setQuantity] = useState<number>(1);

  const selectedZone = TICKET_ZONES.find((z) => z.id === selectedZoneId) || TICKET_ZONES[0];

  const handleSelectZone = (zoneId: string, qty: number) => {
    const targetZone = TICKET_ZONES.find((z) => z.id === zoneId);
    if (!targetZone) return;

    setSelectedZoneId(zoneId);
    // Face Your Fear has no pair option, force quantity = 1
    if (targetZone.pairPrice === undefined) {
      setQuantity(1);
    } else {
      setQuantity(qty);
    }
  };

  const handleQuantityChange = (qty: number) => {
    if (selectedZone.pairPrice === undefined) {
      setQuantity(1);
    } else {
      setQuantity(qty);
    }
  };

  return (
    <div className="mt-16 pt-16 border-t border-white/10" id="entradas">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-space font-bold text-xs text-jcp-gold uppercase tracking-[0.2em] block mb-3">
          SELECCIÓN OFICIAL DE ENTRADAS
        </span>
        <h3 className="text-3xl md:text-4xl font-space font-bold text-white mb-4 tracking-tight">
          Elige Tu Experiencia
        </h3>
        <p className="font-jakarta text-sm text-jcp-text-2 leading-relaxed">
          Compara las cuatro zonas oficiales, selecciona la cantidad de asistentes y continúa tu reserva directamente por WhatsApp con el equipo oficial.
        </p>

        <div className="mt-4 inline-block px-4 py-1.5 bg-jcp-gold/10 border border-jcp-gold/20 rounded-full text-xs font-mono text-jcp-gold font-medium">
          ℹ️ {OFFICIAL_EVENT_INFO.promoNotice}
        </div>
      </div>

      {/* Official Auditorium Seat Map & Distribution */}
      <SeatMapSection />

      {/* 4 Cards Grid - 1 col mobile, 2 cols tablet/desktop, 4 cols ultra wide */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {TICKET_ZONES.map((zone) => (
          <TicketCard
            key={zone.id}
            zone={zone}
            isSelected={selectedZoneId === zone.id}
            selectedQuantity={quantity}
            onSelectZone={handleSelectZone}
          />
        ))}
      </div>

      {/* Order Summary Block */}
      <OrderSummary
        selectedZone={selectedZone}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />

      {/* JuanCa Power Specific Bonuses */}
      <JuanCaBonuses />
    </div>
  );
}

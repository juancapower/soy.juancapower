import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, CreditCard, CheckCircle2, ShieldCheck, ExternalLink, Info, Copy, Check, Sparkles, Lock } from 'lucide-react';
import { TicketZone, calculatePrice, buildWhatsAppLink, PAYMENT_CONFIG } from '../../data/liberaTuProposito';

interface OrderSummaryProps {
  selectedZone: TicketZone;
  quantity: number;
  onQuantityChange: (qty: number) => void;
}

export default function OrderSummary({
  selectedZone,
  quantity,
  onQuantityChange,
}: OrderSummaryProps) {
  const { total, savings } = calculatePrice(selectedZone, quantity);
  const waLink = buildWhatsAppLink(selectedZone.name, quantity, total);
  const [showMercadoPago, setShowMercadoPago] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const canSelectPair = selectedZone.pairPrice !== undefined;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAYMENT_CONFIG.mercadoPagoLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="resumen-pedido" className="py-12 relative">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#12162F] via-[#0D1022] to-[#070914] border-2 border-jcp-gold/40 p-6 sm:p-10 shadow-[0_20px_60px_rgba(214,177,95,0.18)] relative overflow-hidden backdrop-blur-2xl">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-jcp-gold/15 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jcp-gold/15 border border-jcp-gold/30 text-xs font-space font-bold text-jcp-gold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-jcp-gold" />
              <span>PASO FINAL // RESUMEN DE TU ENTRADA</span>
            </div>
            <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {selectedZone.name}
            </h3>
            <p className="text-xs sm:text-sm text-jcp-text-2 font-jakarta mt-1">
              📍 {selectedZone.location}
            </p>
          </div>

          {/* Asistentes Toggle Switch inside summary */}
          <div className="flex items-center gap-3 bg-black/50 p-2 rounded-2xl border border-white/10 shrink-0">
            <span className="text-xs font-mono text-jcp-text-3 uppercase pl-2">Asistentes:</span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => onQuantityChange(1)}
                className={`px-3.5 py-2 rounded-xl text-xs font-space font-bold transition-all ${
                  quantity === 1
                    ? 'bg-jcp-gold text-black shadow-md'
                    : 'bg-white/5 text-jcp-text-2 hover:text-white'
                }`}
              >
                1 Persona
              </button>
              {canSelectPair && (
                <button
                  type="button"
                  onClick={() => onQuantityChange(2)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-space font-bold transition-all ${
                    quantity === 2
                      ? 'bg-jcp-gold text-black shadow-md'
                      : 'bg-white/5 text-jcp-text-2 hover:text-white'
                  }`}
                >
                  2 Personas (Promo)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8 relative z-10">
          
          {/* Benefits Column */}
          <div className="md:col-span-7 space-y-4">
            <h4 className="font-space font-bold text-xs uppercase text-white tracking-wider">
              Beneficios confirmados para esta zona:
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {selectedZone.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-xs font-jakarta text-jcp-text-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-jcp-gold shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {selectedZone.notice && (
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-200/90 font-jakarta leading-relaxed flex items-start gap-2.5 mt-4">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{selectedZone.notice}</span>
              </div>
            )}
          </div>

          {/* Price Calculation Column */}
          <div className="md:col-span-5 bg-black/60 border border-white/12 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-inner">
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs font-jakarta text-jcp-text-2">
                <span>Modalidad:</span>
                <span className="font-bold text-white">{quantity === 1 ? 'Individual' : 'Promoción 2 Personas'}</span>
              </div>
              <div className="flex justify-between text-xs font-jakarta text-jcp-text-2">
                <span>Total de Asistentes:</span>
                <span className="font-bold text-white">{quantity} {quantity === 1 ? 'persona' : 'personas'}</span>
              </div>
              {savings && savings > 0 ? (
                <div className="flex justify-between text-xs font-jakarta text-emerald-400 font-bold bg-emerald-500/15 p-2.5 rounded-xl border border-emerald-500/30">
                  <span>Ahorro aplicado:</span>
                  <span>-S/{savings.toLocaleString('es-PE')}</span>
                </div>
              ) : null}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
              <span className="font-space font-bold text-sm text-white">Total Final:</span>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-space font-extrabold text-jcp-gold drop-shadow-[0_0_10px_rgba(214,177,95,0.3)]">
                  S/{total.toLocaleString('es-PE')}
                </span>
                <span className="block text-[10px] font-mono text-jcp-text-3">incluye IGV</span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp & Payment Actions Box */}
        <div className="p-6 bg-black/80 rounded-2xl border border-white/15 relative z-10">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center items-center">
            
            {/* Direct WhatsApp CTA Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[56px] px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-space font-extrabold text-sm sm:text-base rounded-2xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3 uppercase tracking-wider"
              aria-label="Continuar mi reserva por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Reservar Mi Entrada por WhatsApp</span>
            </a>

            <p className="text-xs font-jakarta text-jcp-text-2 leading-relaxed">
              {PAYMENT_CONFIG.paymentNoticeText}
            </p>

            <div className="text-xs font-jakarta font-semibold text-jcp-gold bg-jcp-gold/10 border border-jcp-gold/25 px-4 py-3 rounded-xl w-full">
              ℹ️ {PAYMENT_CONFIG.receiptInstruction}
            </div>

            {/* Mercado Pago Expandable Toggle */}
            <div className="w-full pt-4 border-t border-white/10 mt-2">
              <button
                type="button"
                onClick={() => setShowMercadoPago(!showMercadoPago)}
                className="text-xs font-mono text-jcp-text-3 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <CreditCard className="w-4 h-4 text-jcp-gold" />
                <span>{showMercadoPago ? 'Ocultar opción de pago Mercado Pago' : 'Ver pago directo con tarjeta de crédito/débito (Mercado Pago)'}</span>
              </button>

              {showMercadoPago && (
                <div className="mt-4 p-5 bg-white/[0.03] border border-white/10 rounded-2xl text-left text-xs font-jakarta space-y-3 animate-fadeIn">
                  <div className="flex items-start gap-2.5 text-jcp-text-2">
                    <ShieldCheck className="w-4 h-4 text-jcp-gold shrink-0 mt-0.5" />
                    <p>
                      Puedes efectuar tu pago con cualquier tarjeta bancaria mediante el enlace oficial de Mercado Pago. Tras realizar el pago, envía tu comprobante por WhatsApp para emitir tu boleta/factura y validar tu acceso.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={PAYMENT_CONFIG.mercadoPagoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-space font-bold text-xs rounded-xl transition-all inline-flex items-center justify-center gap-2"
                    >
                      Abrir link Mercado Pago <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-full sm:w-auto px-4 py-3 bg-white/5 hover:bg-white/10 text-jcp-text-2 text-xs font-mono rounded-xl transition-all inline-flex items-center justify-center gap-2 border border-white/10"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedLink ? 'Enlace Copiado' : 'Copiar enlace'}
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, CreditCard, CheckCircle2, ShieldCheck, ExternalLink, Info, Copy, Check } from 'lucide-react';
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
    <div
      id="resumen-pedido"
      className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#101326] to-[#0A0C16] border-2 border-jcp-gold/40 shadow-[0_0_40px_rgba(214,177,95,0.15)] relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShoppingBag className="w-4 h-4 text-jcp-gold" />
            <span className="font-space text-xs text-jcp-gold uppercase tracking-widest font-bold">
              Resumen de Pedido // Entrada Oficial
            </span>
          </div>
          <h3 className="font-space font-bold text-2xl text-white">
            {selectedZone.name}
          </h3>
          <p className="text-xs text-jcp-text-2 font-jakarta mt-0.5">
            {selectedZone.location}
          </p>
        </div>

        {/* Quantity selector inside summary */}
        <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/10">
          <span className="text-xs font-mono text-jcp-text-2 uppercase">Asistentes:</span>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => onQuantityChange(1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-space font-bold transition-all ${
                quantity === 1
                  ? 'bg-jcp-gold text-black'
                  : 'bg-white/5 text-jcp-text-3 hover:text-white'
              }`}
            >
              1 Entrada
            </button>
            {canSelectPair && (
              <button
                type="button"
                onClick={() => onQuantityChange(2)}
                className={`px-3 py-1.5 rounded-lg text-xs font-space font-bold transition-all ${
                  quantity === 2
                    ? 'bg-jcp-gold text-black'
                    : 'bg-white/5 text-jcp-text-3 hover:text-white'
                }`}
              >
                2 Entradas (Promo)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Order Breakdown */}
      <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
        {/* Benefits column */}
        <div className="md:col-span-7">
          <h4 className="font-space font-bold text-xs uppercase text-white tracking-wider mb-3">
            Incluye en esta zona:
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2 mb-4">
            {selectedZone.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-jakarta text-jcp-text-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-jcp-gold shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {selectedZone.notice && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-amber-200/90 font-jakarta leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{selectedZone.notice}</span>
            </div>
          )}
        </div>

        {/* Pricing & Total column */}
        <div className="md:col-span-5 bg-white/[0.03] border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs font-jakarta text-jcp-text-2">
              <span>Tipo de pase:</span>
              <span className="font-bold text-white">{quantity === 1 ? 'Individual' : 'Promoción 2x1'}</span>
            </div>
            <div className="flex justify-between text-xs font-jakarta text-jcp-text-2">
              <span>Cantidad:</span>
              <span className="font-bold text-white">{quantity} {quantity === 1 ? 'persona' : 'personas'}</span>
            </div>
            {savings && savings > 0 ? (
              <div className="flex justify-between text-xs font-jakarta text-emerald-400 font-bold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                <span>Ahorro aplicado:</span>
                <span>-S/{savings.toLocaleString('es-PE')}</span>
              </div>
            ) : null}
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
            <span className="font-space font-bold text-sm text-white">Total a pagar:</span>
            <div className="text-right">
              <span className="text-3xl font-space font-bold text-jcp-gold">
                S/{total.toLocaleString('es-PE')}
              </span>
              <span className="block text-[10px] font-mono text-jcp-text-3">incluye IGV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action & Payments Section */}
      <div className="p-6 bg-[#070811] rounded-2xl border border-white/10">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center items-center">
          
          {/* Primary WhatsApp CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[52px] px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-space font-bold text-base rounded-xl transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3"
            aria-label="Continuar mi reserva por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Continuar mi reserva por WhatsApp</span>
          </a>

          {/* Payment options notice text directly below CTA */}
          <p className="text-xs font-jakarta text-jcp-text-2 leading-relaxed">
            {PAYMENT_CONFIG.paymentNoticeText}
          </p>

          <p className="text-xs font-jakarta font-medium text-jcp-gold/90 bg-jcp-gold/10 border border-jcp-gold/20 px-4 py-2.5 rounded-xl">
            ℹ️ {PAYMENT_CONFIG.receiptInstruction}
          </p>

          {/* Secondary Payment Method Accordion / Option */}
          <div className="w-full pt-4 border-t border-white/10 mt-2">
            <button
              type="button"
              onClick={() => setShowMercadoPago(!showMercadoPago)}
              className="text-xs font-mono text-jcp-text-3 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <CreditCard className="w-3.5 h-3.5 text-jcp-gold" />
              <span>{showMercadoPago ? 'Ocultar opción secundaria Mercado Pago' : ' Ver opción de pago directo con tarjeta (Mercado Pago)'}</span>
            </button>

            {showMercadoPago && (
              <div className="mt-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl text-left text-xs font-jakarta space-y-3">
                <div className="flex items-start gap-2 text-jcp-text-2">
                  <ShieldCheck className="w-4 h-4 text-jcp-gold shrink-0 mt-0.5" />
                  <p>
                    Si prefieres pagar directamente por Mercado Pago con tarjeta de crédito/débito, puedes usar el link oficial de cobranza. Recuerda adjuntar tu comprobante por WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={PAYMENT_CONFIG.mercadoPagoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-space font-bold text-xs rounded-lg transition-all inline-flex items-center gap-2"
                  >
                    Abrir link Mercado Pago <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3 py-2.5 bg-white/5 hover:bg-white/10 text-jcp-text-2 text-xs font-mono rounded-lg transition-all inline-flex items-center gap-1.5"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedLink ? 'Copiado' : 'Copiar enlace'}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

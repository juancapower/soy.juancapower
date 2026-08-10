import React, { useState } from 'react';
import { Maximize2, X, MapPin, Sparkles, ZoomIn } from 'lucide-react';

const SEAT_MAP_IMAGE_URL = "https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1786381534/ZonasLiberaTuProp%C3%B3sito_2026_ivbws3.png";

export default function SeatMapSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jcp-gold/10 border border-jcp-gold/25 text-xs font-space font-bold text-jcp-gold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(214,177,95,0.15)]">
            <MapPin className="w-3.5 h-3.5 text-jcp-gold" />
            <span>DISTRIBUCIÓN DEL AUDITORIO</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-white tracking-tight">
            Ubicación de Zonas en Sala
          </h3>
          <p className="font-jakarta text-sm text-jcp-text-2 mt-2 max-w-2xl leading-relaxed">
            Colegio Médico de Miraflores, Lima. Consulta la distribución oficial para elegir tu cercanía al escenario.
          </p>
        </div>

        {/* Side-by-side Grid: Map Image (left, no recuadro) & 4 Zones with short desc (right) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image WITHOUT heavy recuadro box */}
          <div className="lg:col-span-7 relative group">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative cursor-pointer overflow-hidden rounded-2xl transition-all hover:scale-[1.01]"
            >
              <img 
                src={SEAT_MAP_IMAGE_URL} 
                alt="Mapa Oficial de Zonas - Libera tu Propósito" 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay button for zoom */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] rounded-2xl">
                <span className="px-5 py-2.5 rounded-full bg-jcp-gold text-black font-space font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(214,177,95,0.7)]">
                  <Maximize2 className="w-4 h-4" />
                  <span>Ampliar Mapa</span>
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-mono text-jcp-text-3 px-1">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Plano oficial del escenario</span>
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-jcp-gold hover:underline flex items-center gap-1 font-semibold"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Ver mapa en pantalla completa</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Zones with brief description */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-space font-bold text-sm uppercase text-white tracking-wider mb-2">
              Resumen de Zonas
            </h4>

            {/* Zone 1: Face Your Fear & MFT */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition-all flex items-start gap-3.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#EAB308] shrink-0 mt-1 shadow-[0_0_12px_rgba(234,177,8,0.7)]"></div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h5 className="font-space font-bold text-sm text-white">Face Your Fear & MFT</h5>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/30">Fila VIP</span>
                </div>
                <p className="text-xs font-jakarta text-jcp-text-2 mt-1 leading-relaxed">
                  Ubicación central inmediata al escenario con máxima proximidad y acceso exclusivo.
                </p>
              </div>
            </div>

            {/* Zone 2: Indomable */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-400/50 transition-all flex items-start gap-3.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] shrink-0 mt-1 shadow-[0_0_12px_rgba(59,130,246,0.7)]"></div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h5 className="font-space font-bold text-sm text-white">Zona Indomable</h5>
                  <span className="text-[10px] font-mono text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded-full border border-blue-500/30">Platea Media</span>
                </div>
                <p className="text-xs font-jakarta text-jcp-text-2 mt-1 leading-relaxed">
                  Excelente perspectiva central en platea baja. Incluye caminata sobre fuego (Firewalking).
                </p>
              </div>
            </div>

            {/* Zone 3: Despertar */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/50 transition-all flex items-start gap-3.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#A855F7] shrink-0 mt-1 shadow-[0_0_12px_rgba(168,85,247,0.7)]"></div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h5 className="font-space font-bold text-sm text-white">Zona Despertar</h5>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">Balcón Preferencial</span>
                </div>
                <p className="text-xs font-jakarta text-jcp-text-2 mt-1 leading-relaxed">
                  Visión panorámica completa desde el nivel superior con óptima acústica.
                </p>
              </div>
            </div>

            {/* Zone 4: Acreditación Ágil */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/50 transition-all flex items-start gap-3.5">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shrink-0 mt-1 shadow-[0_0_12px_rgba(52,211,153,0.7)]"></div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h5 className="font-space font-bold text-sm text-white">Check-In Ágil</h5>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">Acceso Rápido</span>
                </div>
                <p className="text-xs font-jakarta text-jcp-text-2 mt-1 leading-relaxed">
                  Módulos de acreditación rápida diferenciados por zona al ingresar.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Header */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between py-2 border-b border-white/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-jcp-gold" />
              <span className="font-space font-bold text-sm sm:text-base">
                Mapa Oficial de Auditorio · Libera tu Propósito 2026
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content - Full Image */}
          <div 
            className="flex-1 w-full max-w-6xl flex items-center justify-center p-2 my-2 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={SEAT_MAP_IMAGE_URL} 
              alt="Mapa de Zonas en alta resolución" 
              className="max-h-[82vh] max-w-full object-contain rounded-xl border border-white/10 shadow-[0_0_60px_rgba(214,177,95,0.25)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Modal Footer */}
          <div 
            className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs font-jakarta text-jcp-text-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span>📍 Colegio Médico de Miraflores, Lima · 17 y 18 de Octubre 2026</span>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2.5 bg-jcp-gold text-black font-space font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#E7C97A] transition-colors"
            >
              Cerrar e Ir a Entradas
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

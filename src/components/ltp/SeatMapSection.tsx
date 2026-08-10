import React, { useState } from 'react';
import { Maximize2, X, Map, Sparkles, Layers, ZoomIn, CheckCircle2 } from 'lucide-react';

const SEAT_MAP_IMAGE_URL = "https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1786381534/ZonasLiberaTuProp%C3%B3sito_2026_ivbws3.png";

export default function SeatMapSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-16 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-6 md:p-10 relative overflow-hidden backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-jcp-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-jcp-power/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jcp-gold/10 border border-jcp-gold/25 text-xs font-space font-bold text-jcp-gold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(214,177,95,0.15)]">
              <Map className="w-4 h-4 text-jcp-gold" />
              <span>MAPA OFICIAL DEL AUDITORIO</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-space font-bold text-white tracking-tight">
              Disposición de Asientos y Zonas
            </h3>
            <p className="font-jakarta text-xs md:text-sm text-jcp-text-2 mt-1.5 max-w-2xl">
              Conoce la distribución exacta del recinto. Ubica las zonas Despertar, Indomable, MFT y Face Your Fear para asegurar la cercanía ideal al escenario.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-jcp-gold/40 text-xs font-space font-bold text-white transition-all shadow-sm hover:text-jcp-gold shrink-0 self-start md:self-auto"
          >
            <ZoomIn className="w-4 h-4 text-jcp-gold" />
            <span>Ver Mapa Ampliado</span>
          </button>
        </div>

        {/* Seat Map Image Card */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative rounded-2xl overflow-hidden border border-jcp-gold/30 bg-black/60 shadow-[0_15px_45px_rgba(0,0,0,0.8)] group cursor-pointer"
        >
          {/* Subtle Top Indicator Bar */}
          <div className="bg-black/90 px-4 py-2 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-jcp-text-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-bold">Colegio Médico de Miraflores · Auditorio Principal</span>
            </span>
            <span className="hidden sm:inline-block text-jcp-gold">Haz clic para hacer zoom 🔍</span>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-black/80 via-black/40 to-black/80">
            <img 
              src={SEAT_MAP_IMAGE_URL} 
              alt="Disposición de Asientos y Zonas Libera tu Propósito 2026" 
              className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Hover overlay button */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="px-6 py-3 rounded-full bg-jcp-gold text-black font-space font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(214,177,95,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Maximize2 className="w-4 h-4" />
                <span>Ampliar Mapa de Asientos</span>
              </span>
            </div>
          </div>
        </div>

        {/* Zone Highlights Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#EAB308] shrink-0 mt-0.5 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
            <div>
              <span className="block font-space font-bold text-xs text-white">Zona MFT & Face Your Fear</span>
              <span className="text-[11px] font-jakarta text-jcp-text-3">Primeras filas centrales frente al escenario</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6] shrink-0 mt-0.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            <div>
              <span className="block font-space font-bold text-xs text-white">Zona Indomable</span>
              <span className="text-[11px] font-jakarta text-jcp-text-3">Ubicación central con acceso a Firewalking</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#A855F7] shrink-0 mt-0.5 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
            <div>
              <span className="block font-space font-bold text-xs text-white">Zona Despertar</span>
              <span className="text-[11px] font-jakarta text-jcp-text-3">Auditorio preferencial general</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
            <div>
              <span className="block font-space font-bold text-xs text-white">Acceso y Servicios</span>
              <span className="text-[11px] font-jakarta text-jcp-text-3">Acreditación ágil y zonas de experiencia</span>
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
                Disposición de Asientos y Zonas · Libera tu Propósito 2026
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
              className="max-h-[82vh] max-w-full object-contain rounded-xl border border-white/10 shadow-[0_0_50px_rgba(214,177,95,0.2)]"
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
              className="px-6 py-2 bg-jcp-gold text-black font-space font-bold rounded-lg hover:bg-[#E7C97A] transition-colors"
            >
              Cerrar e Ir a Entradas
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

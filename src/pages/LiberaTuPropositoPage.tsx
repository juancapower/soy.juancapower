import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, MapPin, Flame, User, Building2, 
  ShieldCheck, MessageCircle, HelpCircle, ChevronDown, ChevronUp, CheckCircle2,
  Sparkles, Award, Star, Ticket, ExternalLink, ArrowDown, Zap, Heart, Compass, Target, ArrowRight
} from 'lucide-react';
import { OFFICIAL_EVENT_INFO, PAYMENT_CONFIG, TICKET_ZONES, buildLtpGeneralWhatsAppLink } from '../data/liberaTuProposito';
import TicketSelector from '../components/ltp/TicketSelector';
import { initUTMTracking, trackLtpViewContent, trackLtpContact } from '../utils/ltpTracking';

interface LiberaTuPropositoPageProps {
  onNavigate: (path: string) => void;
}

export default function LiberaTuPropositoPage({ onNavigate }: LiberaTuPropositoPageProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // Scroll to top when page opens
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    // Initialize UTM tracking & fire Meta Pixel ViewContent event
    initUTMTracking();
    trackLtpViewContent();

    // Target event date: October 17, 2026
    const targetDate = new Date('2026-10-17T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
  };

  const faqs = [
    {
      q: "¿Qué es 'Libera tu Propósito Lima 2026' y cuál es la propuesta de valor del entrenamiento?",
      a: "Libera tu Propósito es un entrenamiento presencial intensivo de 2 días (17 y 18 de octubre de 2026) en Lima, Perú. Está diseñado para ayudarte a identificar patrones limitantes, reprogramar tu mentalidad con herramientas de PNL y Neuro-Liderazgo, y estructurar un plan claro para expandir tus proyectos de vida y negocios."
    },
    {
      q: "¿Quiénes son los creadores, organizadores y speakers principales del evento?",
      a: "El evento es una experiencia creada por Orlando Denegri y organizada oficialmente por BINLP (Business Institute & NLP). Cuenta con la participación magistral de JuanCa Power como Speaker Invitado especial, quien imparte estrategias de alto rendimiento, aceleración de marca y superación de límites."
    },
    {
      q: "¿Qué incluye cada una de las 4 zonas disponibles (Despertar, Indomable, MFT y Face Your Fear)?",
      a: "Disponemos de 4 experiencias adaptadas a tu nivel de compromiso:\n• Zona Despertar: Ingreso los 2 días, kit de bienvenida y certificado de participación.\n• Zona Indomable: Todo lo anterior + Experiencia Fire Walking (caminata sobre brasas) + 1 mes de membresía virtual con Orlando Denegri.\n• Zona MFT: Todo lo anterior + Desayuno empresarial posterior + Meet & Greet exclusivo + Foto oficial con speakers + Certificación de Coaching y PNL.\n• Zona Face Your Fear: Todo lo de MFT + Retiro Élite de 5 días en Valle Sagrado del Cusco (del 2 al 6 de diciembre) con hospedaje, alimentación y movilidad local en Cusco incluidos."
    },
    {
      q: "¿Cómo funciona la tarifa preferencial para 2 personas (Opción Promo)?",
      a: "Las zonas Despertar, Indomable y MFT cuentan con la opción de adquirir un pase doble para 2 asistentes con un descuento significativo (ahorro de hasta S/600). La Zona Face Your Fear es un pase individual de acceso premium exclusivo."
    },
    {
      q: "¿Cómo se realiza la reserva y cuáles son los medios de pago?",
      a: "Tu reserva comienza por WhatsApp. Amara te ayudará a elegir la zona y cantidad de entradas, te indicará las opciones de pago disponibles y JuanCa validará el pago antes de confirmar tu registro."
    },
    {
      q: "¿Qué beneficios y bonus adicionales entrega JuanCa Power al reservar desde este portal?",
      a: "Al realizar tu reserva desde esta web oficial de JuanCa Power, recibes bonus exclusivos administrados por su equipo: acceso a recursos digitales en Hotmart, membresía a la Comunidad Power WhatsApp, opción a diagnóstico digital para tu negocio y la posibilidad de postular a una entrevista en el canal Marcas Power."
    },
    {
      q: "¿Qué incluye la experiencia de la Zona Face Your Fear en el Cusco?",
      a: "Incluye la entrada completa al evento presencial en Lima (17 y 18 de octubre) con todos los beneficios MFT, más la participación en el Retiro Face Your Fear de 5 días en el Valle Sagrado del Cusco (del 2 al 6 de diciembre de 2026). Incluye hospedaje, alimentación y movilidad local desde el punto de reunión informado en Cusco hasta el lugar del retiro, además del retorno al mismo punto al finalizar. El traslado del participante hacia y desde Cusco no está incluido."
    }
  ];

  // Structured Data (JSON-LD) for SEO & AEO (Answer Engine Optimization)
  const jsonLdEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Libera tu Propósito - Lima 2026",
    "description": OFFICIAL_EVENT_INFO.valueProposition,
    "startDate": "2026-10-17T09:00:00-05:00",
    "endDate": "2026-10-18T19:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Colegio Médico de Miraflores",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. 28 de Julio 776",
        "addressLocality": "Miraflores",
        "addressRegion": "Lima",
        "addressCountry": "PE"
      }
    },
    "image": [OFFICIAL_EVENT_INFO.posterUrl],
    "organizer": {
      "@type": "Organization",
      "name": "BINLP - Business Institute & NLP",
      "url": "https://juancapower.com/libera-tu-proposito"
    },
    "performer": [
      {
        "@type": "Person",
        "name": "Orlando Denegri",
        "jobTitle": "Creador y Speaker Principal"
      },
      {
        "@type": "Person",
        "name": "JuanCa Power",
        "jobTitle": "Speaker Invitado y Mentor de Alto Rendimiento"
      }
    ],
    "offers": TICKET_ZONES.map(zone => ({
      "@type": "Offer",
      "name": zone.name,
      "price": zone.individualPrice,
      "priceCurrency": "PEN",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": "https://juancapower.com/libera-tu-proposito"
    }))
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a.replace(/\n/g, "<br/>")
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#070814] text-jcp-text font-jakarta selection:bg-jcp-power/30 selection:text-gold-light relative overflow-x-hidden">
      {/* Inject SEO & AEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Atmospheric High-Ticket Ambient Lighting */}
      <div className="fixed top-0 right-1/4 w-[800px] h-[800px] bg-jcp-gold/10 rounded-full blur-[200px] pointer-events-none z-0"></div>
      <div className="fixed top-1/3 -left-32 w-[700px] h-[700px] bg-jcp-power/15 rounded-full blur-[200px] pointer-events-none z-0"></div>

      {/* Navigation Top Sub-Bar */}
      <div className="relative z-20 pt-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 border-b border-white/10 text-xs font-mono">
          <a 
            href="/" 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-jcp-text-2 hover:text-jcp-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a juancapower.com</span>
          </a>

          <div className="hidden sm:flex items-center gap-2 text-jcp-gold font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Edición Presencial Lima 2026</span>
          </div>
        </div>
      </div>

      {/* ==========================================
          HERO SECTION — OPEN, ATMOSPHERIC & IMPACTFUL
         ========================================== */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Poster Column - Left */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-jcp-power via-jcp-gold to-jcp-power-l opacity-25 blur-3xl rounded-3xl pointer-events-none"></div>
              
              <div className="relative aspect-[3/4] w-full max-w-[420px] rounded-3xl overflow-hidden border border-jcp-gold/40 shadow-[0_30px_70px_rgba(0,0,0,0.9)] group">
                <img 
                  src={OFFICIAL_EVENT_INFO.posterUrl} 
                  alt={`${OFFICIAL_EVENT_INFO.name} - Conecta con tu poder`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/12 text-center shadow-xl">
                  <span className="font-space text-xs text-jcp-gold font-extrabold uppercase tracking-widest block mb-0.5">
                    Entrenamiento Presencial
                  </span>
                  <span className="font-jakarta text-xs text-white/90 font-medium">
                    17 y 18 de Octubre 2026 · Miraflores, Lima
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column - Right */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 bg-jcp-gold/15 border border-jcp-gold/30 rounded-full text-xs font-space font-bold text-jcp-gold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(214,177,95,0.2)]">
                  <Flame className="w-4 h-4 text-jcp-gold" />
                  EVENTO PRESENCIAL ÉLITE
                </span>
                <span className="px-4 py-1.5 bg-blue-500/15 border border-blue-500/30 rounded-full text-xs font-space font-bold text-blue-300 uppercase tracking-wider">
                  🎤 JuanCa Power // Speaker Invitado
                </span>
              </div>

              {/* Title & Claim */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold text-white tracking-tight uppercase leading-[1.05]">
                  {OFFICIAL_EVENT_INFO.name}
                </h1>
                <p className="font-cormorant italic text-jcp-gold text-2xl sm:text-3xl lg:text-4xl font-light">
                  "{OFFICIAL_EVENT_INFO.claim}"
                </p>
              </div>

              {/* Value Proposition */}
              <div className="space-y-4 border-l-2 border-jcp-gold/60 pl-6 py-1">
                <p className="font-jakarta text-white/95 font-semibold text-lg sm:text-xl leading-relaxed">
                  {OFFICIAL_EVENT_INFO.valueProposition}
                </p>
                <p className="font-jakarta text-jcp-text-2 text-sm sm:text-base leading-relaxed">
                  {OFFICIAL_EVENT_INFO.supportText}
                </p>
              </div>

              {/* Organization & Speaker Roles */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-jakarta">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 bg-jcp-gold/15 rounded-xl border border-jcp-gold/25">
                    <User className="w-4 h-4 text-jcp-gold shrink-0" />
                  </div>
                  <div>
                    <span className="text-jcp-text-3 font-mono block text-[10px] uppercase">Creador del Entrenamiento</span>
                    <strong className="text-white font-semibold text-sm">{OFFICIAL_EVENT_INFO.createdBy}</strong>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 bg-jcp-power/15 rounded-xl border border-jcp-power/25">
                    <Building2 className="w-4 h-4 text-jcp-power-l shrink-0" />
                  </div>
                  <div>
                    <span className="text-jcp-text-3 font-mono block text-[10px] uppercase">Organización Oficial</span>
                    <strong className="text-white font-semibold text-sm">{OFFICIAL_EVENT_INFO.organizedBy}</strong>
                  </div>
                </div>
              </div>

              {/* Countdown & High-Ticket CTA Anchor */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-black/90 via-[#0C0E1F] to-black/90 border border-jcp-gold/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Countdown display */}
                <div className="flex gap-4 text-center">
                  <div>
                    <span className="block font-space font-extrabold text-2xl sm:text-3xl text-white">{timeLeft.days}</span>
                    <span className="text-[10px] uppercase font-mono font-bold text-jcp-text-3">Días</span>
                  </div>
                  <span className="text-jcp-gold text-2xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-extrabold text-2xl sm:text-3xl text-white">{timeLeft.hours}</span>
                    <span className="text-[10px] uppercase font-mono font-bold text-jcp-text-3">Hrs</span>
                  </div>
                  <span className="text-jcp-gold text-2xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-extrabold text-2xl sm:text-3xl text-white">{timeLeft.minutes}</span>
                    <span className="text-[10px] uppercase font-mono font-bold text-jcp-text-3">Min</span>
                  </div>
                  <span className="text-jcp-gold text-2xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-extrabold text-2xl sm:text-3xl text-white">{timeLeft.seconds}</span>
                    <span className="text-[10px] uppercase font-mono font-bold text-jcp-text-3">Seg</span>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <a
                  href="#entradas"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-jcp-gold to-[#E7C97A] hover:from-[#E7C97A] hover:to-jcp-gold text-black font-space font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(214,177,95,0.4)] hover:shadow-[0_0_50px_rgba(214,177,95,0.6)] text-center flex items-center justify-center gap-2.5"
                >
                  <Ticket className="w-4 h-4 text-black" />
                  <span>Asegurar Mi Entrada</span>
                  <ArrowDown className="w-4 h-4 text-black animate-bounce" />
                </a>
              </div>

              {/* Guarantee items */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-jakarta text-jcp-text-3 pt-1">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Reserva guiada y validada por WhatsApp
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-jcp-gold" />
                  Soporte personalizado vía WhatsApp
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION: LA EXPERIENCIA (CERCANÍA & CULTURA)
         ========================================== */}
      <section className="py-16 lg:py-24 border-t border-b border-white/10 bg-gradient-to-b from-transparent via-[#0B0D1B] to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jcp-power/15 border border-jcp-power/30 text-xs font-space font-bold text-jcp-power-l uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-jcp-power-l" />
              <span>CERCANÍA & TRANSFORMACIÓN REAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white tracking-tight mb-4">
              Un Entrenamiento Diseñado para Romper tus Límites
            </h2>
            <p className="font-jakarta text-base text-jcp-text-2 leading-relaxed">
              Libera tu Propósito no es un evento teórico pasivo. Es un espacio presencial de inmersión total donde la neurociencia, la Programación Neuro-Lingüística (PNL) y el alto rendimiento se unen para que tomes el control de tu vida.
            </p>
          </div>

          {/* JuanCa Power Personal Message with 9:16 Portrait */}
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-jcp-gold/10 via-black/60 to-jcp-power/10 border border-jcp-gold/30 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Image 9:16 Portrait Column */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-2xl overflow-hidden border-2 border-jcp-gold/40 shadow-[0_0_30px_rgba(214,177,95,0.25)] group">
                  <img 
                    src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783046674/hf_20260702_180619_3edec26b-fcca-4008-8821-66cae05edc7c_h4jswp.png" 
                    alt="JuanCa Power - Speaker Invitado" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="font-space font-extrabold text-sm text-white block">JuanCa Power</span>
                    <span className="font-mono text-[11px] text-jcp-gold block">Speaker Invitado Especial</span>
                  </div>
                </div>
              </div>

              {/* Message Content Column */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jcp-gold/15 border border-jcp-gold/30 text-xs font-mono font-bold text-jcp-gold uppercase tracking-widest">
                  <span>MENSAJE DE JUANKA POWER</span>
                  <span className="text-white/30">•</span>
                  <span>SPEAKER INVITADO</span>
                </div>

                <blockquote className="font-cormorant italic text-2xl sm:text-3xl lg:text-4xl text-white font-light leading-snug">
                  "El propósito no se encuentra buscando afuera; se libera cuando rompes las creencias que te mantenían retenido. Nos vemos en Lima este 17 y 18 de octubre."
                </blockquote>

                <p className="font-jakarta text-sm text-jcp-text-2 leading-relaxed">
                  Junto a Orlando Denegri y el equipo de BINLP, estaremos compartiendo herramientas clave de alto rendimiento, estrategia de negocios y mentalidad indomable para llevar tus proyectos al siguiente nivel.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-jcp-text-2">
                    🔥 Alto Rendimiento
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-jcp-text-2">
                    🧠 Reprogramación PNL
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-jcp-text-2">
                    🚀 Estrategia de Expansión
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          MAIN INTERACTIVE SECTION: TICKET SELECTOR
         ========================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <TicketSelector />

        {/* ==========================================
            FAQS & AEO (ANSWER ENGINE OPTIMIZATION)
           ========================================== */}
        <section className="py-16 lg:py-24 border-t border-white/10" id="faq">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jcp-gold/10 border border-jcp-gold/25 text-xs font-space font-bold text-jcp-gold uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-jcp-gold" />
              <span>RESPUESTAS & TRANSMISIÓN DE CONFIANZA</span>
            </div>
            <h3 className="font-space font-bold text-3xl sm:text-4xl text-white tracking-tight mb-3">
              Preguntas Frecuentes
            </h3>
            <p className="font-jakarta text-sm text-jcp-text-2 leading-relaxed">
              Aclaramos todas las dudas sobre la organización oficial, medios de pago, promociones dobles y beneficios exclusivos.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all hover:border-jcp-gold/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-space font-bold text-base text-white flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-jcp-gold font-mono text-sm shrink-0 mt-0.5">0{idx + 1}.</span>
                    <span className="leading-snug">{faq.q}</span>
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-jcp-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-jcp-text-3 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 text-xs sm:text-sm font-jakarta text-jcp-text-2 leading-relaxed border-t border-white/5 bg-black/40">
                    <p className="whitespace-pre-line">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct WhatsApp help footer */}
          <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-space font-bold text-sm text-white">¿Tienes alguna pregunta adicional?</h4>
                <p className="text-xs font-jakarta text-jcp-text-2">Chatea con el equipo oficial de JuanCa Power para ayudarte al instante.</p>
              </div>
            </div>
            <a
              href={buildLtpGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackLtpContact({
                  zone_id: 'general',
                  zone_name: 'Consulta FAQ WhatsApp',
                  quantity: 1,
                  value: 0,
                })
              }
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-space font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0 inline-flex items-center gap-2"
            >
              Consultar por WhatsApp
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

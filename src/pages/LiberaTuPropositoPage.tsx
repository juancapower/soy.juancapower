import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, MapPin, Flame, User, Building2, 
  ShieldCheck, MessageCircle, HelpCircle, ChevronDown, ChevronUp, CheckCircle2,
  Sparkles, Award, Star, Ticket, ExternalLink, ArrowDown
} from 'lucide-react';
import { OFFICIAL_EVENT_INFO, PAYMENT_CONFIG, TICKET_ZONES } from '../data/liberaTuProposito';
import TicketSelector from '../components/ltp/TicketSelector';

interface LiberaTuPropositoPageProps {
  onNavigate: (path: string) => void;
}

export default function LiberaTuPropositoPage({ onNavigate }: LiberaTuPropositoPageProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // Scroll to top when page opens
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

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
      a: "Disponemos de 4 experiencias adaptadas a tu nivel de compromiso:\n• Zona Despertar: Ingreso los 2 días, kit de bienvenida y certificado de participación.\n• Zona Indomable: Todo lo anterior + Experiencia Fire Walking (caminata sobre brasas) + 1 mes de membresía virtual con Orlando Denegri.\n• Zona MFT: Todo lo anterior + Desayuno empresarial posterior + Meet & Greet exclusivo + Foto oficial con speakers + Certificación de Coaching y PNL.\n• Zona Face Your Fear: Todo lo de MFT + Retiro Élite de 5 días en Valle Sagrado del Cusco (del 2 al 6 de diciembre) con hospedaje, alimentación y movilidad en Cusco incluidos."
    },
    {
      q: "¿Cómo funciona la tarifa preferencial para 2 personas (Opción Promo)?",
      a: "Las zonas Despertar, Indomable y MFT cuentan con la opción de adquirir un pase doble para 2 asistentes con un descuento significativo (ahorro de hasta S/600). La Zona Face Your Fear es un pase individual de acceso premium exclusivo."
    },
    {
      q: "¿Cuáles son los métodos de pago aceptados y cómo se emite mi comprobante oficial?",
      a: "Aceptamos Yape, Plin y Mercado Pago (tarjetas de crédito y débito con opción a cuotas). Todos los precios incluyen IGV y se emite boleta o factura oficial. Tras transferir, solo debes enviar tu comprobante por WhatsApp para validar y recibir tu pase digital."
    },
    {
      q: "¿Qué beneficios y bonus adicionales entrega JuanCa Power al reservar desde este portal?",
      a: "Al realizar tu reserva desde esta web oficial de JuanCa Power, recibes bonus exclusivos administrados por su equipo: acceso a recursos digitales en Hotmart, membresía a la Comunidad Power WhatsApp, opción a diagnóstico digital para tu negocio y la posibilidad de postular a una entrevista en el canal Marcas Power."
    },
    {
      q: "¿Qué incluye la experiencia de la Zona Face Your Fear en el Cusco?",
      a: "Incluye la entrada completa al evento presencial en Lima (17 y 18 de octubre) con todos los beneficios MFT, más la participación en el Retiro Face Your Fear de 5 días en el Valle Sagrado del Cusco (del 2 al 6 de diciembre de 2026). Incluye hospedaje, alimentación y movilidad desde el punto de reunión en Cusco."
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
      <div className="fixed top-0 right-1/4 w-[700px] h-[700px] bg-jcp-gold/10 rounded-full blur-[180px] pointer-events-none z-0"></div>
      <div className="fixed top-1/3 -left-32 w-[600px] h-[600px] bg-jcp-power/15 rounded-full blur-[180px] pointer-events-none z-0"></div>

      {/* ==========================================
          HERO SECTION — ULTRA PREMIUM FULL HERO
         ========================================== */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 border-b border-white/10 overflow-hidden">
        {/* Backlight Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-jcp-power/20 via-jcp-gold/15 to-transparent rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jcp-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Poster Column - Left */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-jcp-power via-jcp-gold to-jcp-power-l opacity-25 blur-3xl rounded-3xl pointer-events-none"></div>
              
              <div className="relative aspect-[3/4] w-full max-w-[400px] rounded-3xl overflow-hidden border border-jcp-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
                <img 
                  src={OFFICIAL_EVENT_INFO.posterUrl} 
                  alt={`${OFFICIAL_EVENT_INFO.name} - Conecta con tu poder`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                  <span className="font-space text-xs text-jcp-gold font-bold uppercase tracking-wider block">
                    Experiencia Presencial Exclusiva
                  </span>
                  <span className="font-jakarta text-[11px] text-white/90 font-medium">
                    Lima, Perú · 17 y 18 de Octubre
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column - Right */}
            <div className="lg:col-span-7 space-y-7">
              
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
              <div className="space-y-3 border-l-2 border-jcp-gold/60 pl-6 py-1">
                <p className="font-jakarta text-white/95 font-semibold text-lg sm:text-xl leading-relaxed">
                  {OFFICIAL_EVENT_INFO.valueProposition}
                </p>
                <p className="font-jakarta text-jcp-text-2 text-sm leading-relaxed">
                  {OFFICIAL_EVENT_INFO.supportText}
                </p>
              </div>

              {/* Organization & Speaker Roles */}
              <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-jakarta">
                <div className="flex items-center gap-3 text-jcp-text-2">
                  <div className="p-2 bg-jcp-gold/10 rounded-xl border border-jcp-gold/20">
                    <User className="w-4 h-4 text-jcp-gold shrink-0" />
                  </div>
                  <span><strong className="text-white font-semibold block">Creador del Evento</strong> {OFFICIAL_EVENT_INFO.createdBy}</span>
                </div>
                <div className="flex items-center gap-3 text-jcp-text-2">
                  <div className="p-2 bg-jcp-power/10 rounded-xl border border-jcp-power/20">
                    <Building2 className="w-4 h-4 text-jcp-power-l shrink-0" />
                  </div>
                  <span><strong className="text-white font-semibold block">Organización Oficial</strong> {OFFICIAL_EVENT_INFO.organizedBy}</span>
                </div>
              </div>

              {/* Event Date & Venue */}
              <div className="flex flex-wrap gap-4 text-xs font-space text-white">
                <div className="flex items-center gap-2.5 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl">
                  <Calendar className="w-4 h-4 text-jcp-gold" />
                  <span className="font-semibold">{OFFICIAL_EVENT_INFO.date}</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl">
                  <MapPin className="w-4 h-4 text-jcp-power-l" />
                  <span className="font-semibold">{OFFICIAL_EVENT_INFO.location}</span>
                </div>
              </div>

              {/* Countdown & High-Ticket CTA Anchor */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-black/80 via-[#0B0D1A] to-black/80 border border-jcp-gold/40 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="flex gap-4 text-center">
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.days}</span>
                    <span className="text-[10px] uppercase font-space font-bold text-jcp-text-3">Días</span>
                  </div>
                  <span className="text-jcp-gold text-xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.hours}</span>
                    <span className="text-[10px] uppercase font-space font-bold text-jcp-text-3">Hrs</span>
                  </div>
                  <span className="text-jcp-gold text-xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.minutes}</span>
                    <span className="text-[10px] uppercase font-space font-bold text-jcp-text-3">Min</span>
                  </div>
                  <span className="text-jcp-gold text-xl font-bold">:</span>
                  <div>
                    <span className="block font-space font-bold text-2xl text-white">{timeLeft.seconds}</span>
                    <span className="text-[10px] uppercase font-space font-bold text-jcp-text-3">Seg</span>
                  </div>
                </div>

                <a
                  href="#entradas"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-jcp-gold to-[#E7C97A] hover:from-[#E7C97A] hover:to-jcp-gold text-black font-space font-bold text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(214,177,95,0.35)] hover:shadow-[0_0_45px_rgba(214,177,95,0.5)] text-center flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Asegurar Mi Entrada Oficial</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-jakarta text-jcp-text-3 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Precios oficiales con IGV incluido
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-jcp-gold" />
                  Atención directa por WhatsApp
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-blue-400" />
                  Certificación incluida según zona
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24">

        {/* ==========================================
            TICKET SELECTOR SECTION
           ========================================== */}
        <TicketSelector />

        {/* ==========================================
            FAQS & AEO (ANSWER ENGINE OPTIMIZATION)
           ========================================== */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden" id="faq">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jcp-gold/10 border border-jcp-gold/20 text-xs font-space font-bold text-jcp-gold uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-jcp-gold" />
              <span>PREGUNTAS FRECUENTES Y VALIDACIÓN</span>
            </div>
            <h3 className="font-space font-bold text-3xl md:text-4xl text-white tracking-tight mb-3">
              Información Clave para Asistentes
            </h3>
            <p className="font-jakarta text-sm text-jcp-text-2 leading-relaxed">
              Resolvemos tus inquietudes sobre la organización del evento, zonas, promociones 2x1, métodos de pago y el Retiro Face Your Fear en Cusco.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-2xl bg-black/30 overflow-hidden transition-all hover:border-jcp-gold/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-space font-bold text-base text-white flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-jcp-gold font-mono text-sm shrink-0">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-jcp-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-jcp-text-3 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-sm font-jakarta text-jcp-text-2 leading-relaxed border-t border-white/5 bg-white/[0.01]">
                    <p className="whitespace-pre-line">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

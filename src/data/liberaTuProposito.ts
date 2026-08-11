import { getAttributionValues } from '../utils/ltpTracking';

export type TicketZone = {
  id: string;
  name: string;
  badge?: string;
  color: string;
  colorClass: {
    border: string;
    bg: string;
    text: string;
    badgeBg: string;
  };
  location: string;
  individualPrice: number;
  pairPrice?: number;
  benefits: string[];
  notice?: string;
};

export const OFFICIAL_EVENT_INFO = {
  name: "Libera tu Propósito",
  claim: "Conecta con tu poder",
  date: "17 y 18 de Octubre, 2026",
  location: "Colegio Médico de Miraflores, Lima, Perú",
  createdBy: "Orlando Denegri",
  organizedBy: "BINLP — Business Institute & NLP",
  juancaRole: "Speaker invitado",
  posterUrl: "https://res.cloudinary.com/ddn6qh7ve/image/upload/v1786487780/libera-tu-proposito-lima-2026-og-1200x630-02_uxsmj1.webp",
  valueProposition: "Dos días de experiencias, herramientas y conversaciones orientadas a reconocer tus recursos, cuestionar patrones y tomar decisiones con mayor claridad y propósito.",
  supportText: "Una experiencia presencial creada por Orlando Denegri y organizada por BINLP, con la participación de JuanCa Power y otros speakers invitados.",
  promoNotice: "Promoción vigente sujeta a disponibilidad y confirmación del organizador.",
  promoDeadline: undefined as string | undefined,
};

export const TICKET_ZONES: TicketZone[] = [
  {
    id: "despertar",
    name: "Zona Despertar",
    color: "#F97316",
    colorClass: {
      border: "border-orange-500/40 hover:border-orange-500/80",
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      badgeBg: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    },
    location: "Balcón nivel 2 o platea trasera nivel 1, sujeta a asignación y disponibilidad del organizador.",
    individualPrice: 300,
    pairPrice: 500,
    benefits: [
      "Ingreso al evento (17 y 18 de octubre)",
      "Kit de bienvenida",
      "Certificado de participación"
    ]
  },
  {
    id: "indomable",
    name: "Zona Indomable",
    color: "#14B8A6",
    colorClass: {
      border: "border-teal-500/40 hover:border-teal-500/80",
      bg: "bg-teal-500/10",
      text: "text-teal-300",
      badgeBg: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    },
    location: "Platea media nivel 1.",
    individualPrice: 490,
    pairPrice: 800,
    benefits: [
      "Ingreso al evento (17 y 18 de octubre)",
      "Kit de bienvenida",
      "Certificado de participación",
      "Experiencia Fire Walking",
      "Acceso por un mes a la membresía virtual de Orlando Denegri"
    ],
    notice: "La fecha y condiciones específicas de la experiencia Fire Walking se encuentran por confirmar por el organizador."
  },
  {
    id: "mft",
    name: "Zona MFT",
    color: "#EC4899",
    colorClass: {
      border: "border-pink-500/40 hover:border-pink-500/80",
      bg: "bg-pink-500/10",
      text: "text-pink-300",
      badgeBg: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    },
    location: "Laterales próximos al escenario.",
    individualPrice: 1800,
    pairPrice: 3000,
    benefits: [
      "Ingreso al evento (17 y 18 de octubre)",
      "Certificado de participación",
      "Experiencia Fire Walking",
      "Acceso por un mes a la membresía virtual de Orlando Denegri",
      "Desayuno empresarial posterior al evento",
      "Meet & Greet con Orlando Denegri y Jorge Serratos",
      "Foto con speakers",
      "Certificación de Coaching y PNL",
      "Certificación como speaker en PNL"
    ],
    notice: "Beneficios y condiciones sujetos a la programación y confirmación oficial de BINLP."
  },
  {
    id: "face_your_fear",
    name: "Zona Face Your Fear",
    badge: "Acceso Premium",
    color: "#4361EE",
    colorClass: {
      border: "border-blue-500/50 hover:border-blue-400",
      bg: "bg-blue-500/10",
      text: "text-blue-300",
      badgeBg: "bg-blue-500/20 text-blue-200 border-blue-400/40",
    },
    location: "Zona central más próxima al escenario.",
    individualPrice: 9997,
    pairPrice: undefined,
    benefits: [
      "Todos los beneficios indicados oficialmente para Zona MFT",
      "Retiro transformacional de cinco días en Valle Sagrado del Cusco (del 2 al 6 de diciembre de 2026)",
      "Hospedaje, alimentación y movilidad local desde el punto de reunión en Cusco",
      "Acceso al grupo élite de networking de BINLP para miembros Titanium"
    ],
    notice: "Face Your Fear incluye hospedaje, alimentación y movilidad local desde el punto de reunión informado en Cusco hasta el lugar del retiro, además del retorno al mismo punto al finalizar. El traslado del participante hacia y desde Cusco no está incluido."
  }
];

export const JUANCA_BONUSES = [
  {
    title: "Recursos Digitales Exclusivos",
    desc: "Acceso a una selección de recursos digitales de JuanCa Power alojados en Hotmart.",
    note: "Entrega directa por JuanCa Power."
  },
  {
    title: "Comunidad Power WhatsApp",
    desc: "Acceso a la Comunidad Power de WhatsApp para compartir recursos, novedades y próximas actividades.",
    note: "Punto de encuentro y networking activo."
  },
  {
    title: "Diagnóstico Digital Inicial",
    desc: "Para emprendedores o personas con negocio: posibilidad de solicitar un análisis inicial de su ecosistema digital.",
    note: "Postulación disponible para emprendedores y negocios."
  },
  {
    title: "Entrevista en Marcas Power",
    desc: "Posibilidad de participar en una entrevista para el canal Marcas Power y visibilizar tu trayectoria.",
    note: "Participación sujeta a evaluación, disponibilidad y coordinación."
  }
];

export const PAYMENT_CONFIG = {
  whatsappNumber: "51963335717",
  whatsappFormatted: "+51 963 335 717",
  paymentNoticeText: "La reserva se inicia por WhatsApp. Amara te indicará las opciones disponibles y JuanCa validará el pago antes de confirmar tu registro.",
  receiptInstruction: "Tu reserva es guiada y validada directamente por WhatsApp antes de confirmar tu registro."
};

export function calculatePrice(zone: TicketZone, quantity: number): { total: number; savings?: number } {
  if (quantity === 2 && zone.pairPrice) {
    const regularTotal = zone.individualPrice * 2;
    const total = zone.pairPrice;
    return {
      total,
      savings: regularTotal - total
    };
  }
  return {
    total: zone.individualPrice * quantity
  };
}

export function buildWhatsAppLink(zoneName: string, quantity: number, totalAmount: number): string {
  const { ref, camp } = getAttributionValues();
  const quantityText = quantity === 1 ? '1 entrada' : `${quantity} entradas`;

  const message = `Hola, vengo de la página de Libera tu Propósito y quiero reservar.

Zona: ${zoneName}
Cantidad: ${quantityText}
Total referencial: S/${totalAmount.toLocaleString('es-PE')}

Referencia: ${ref}
Campaña: ${camp}

Mi nombre es:`;

  return `https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildLtpGeneralWhatsAppLink(): string {
  const { ref, camp } = getAttributionValues();

  const message = `Hola, vengo de la página de Libera tu Propósito y quiero consultar sobre el evento.

Referencia: ${ref}
Campaña: ${camp}

Mi nombre es:`;

  return `https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}


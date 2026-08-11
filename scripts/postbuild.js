import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

let baseHtml = fs.readFileSync(indexPath, 'utf-8');

// 1. Ensure dist/index.html has exact Home metadata
const homeHtml = baseHtml;
fs.writeFileSync(indexPath, homeHtml, 'utf-8');

// 2. Build Event Page HTML (dist/libera-tu-proposito/index.html)
const ltpTitle = 'Libera tu Propósito Lima 2026 | Entradas y zonas';
const ltpDescription = 'Conoce fechas, sede, zonas, precios y beneficios de Libera tu Propósito, evento presencial del 17 y 18 de octubre de 2026 en Miraflores, Lima. Reserva por WhatsApp.';
const ltpCanonical = 'https://www.juancapower.com/libera-tu-proposito';
const ltpOgImage = 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1786487780/libera-tu-proposito-lima-2026-og-1200x630-02_uxsmj1.webp';

const ltpJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.juancapower.com/libera-tu-proposito#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.juancapower.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Libera tu Propósito",
          "item": "https://www.juancapower.com/libera-tu-proposito"
        }
      ]
    },
    {
      "@type": "Event",
      "@id": "https://www.juancapower.com/libera-tu-proposito#event",
      "name": "Libera tu Propósito",
      "description": "Evento presencial de desarrollo personal, liderazgo y herramientas de PNL, hipnosis y coaching del 17 y 18 de octubre de 2026 en Miraflores, Lima.",
      "startDate": "2026-10-17",
      "endDate": "2026-10-18",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Colegio Médico",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Miraflores",
          "addressRegion": "Lima",
          "addressCountry": "PE"
        }
      },
      "image": [ltpOgImage],
      "organizer": {
        "@type": "Organization",
        "name": "BINLP – Business Institute & NLP",
        "url": "https://www.juancapower.com/libera-tu-proposito"
      },
      "creator": {
        "@type": "Person",
        "name": "Orlando Denegri"
      },
      "performer": {
        "@type": "Person",
        "name": "JuanCa Power",
        "url": "https://www.juancapower.com/"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Zona Despertar",
          "price": "300",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Zona Indomable",
          "price": "490",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Zona MFT",
          "price": "1800",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Zona Face Your Fear",
          "price": "9997",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  ]
};

let ltpHtml = baseHtml;

// Replace title
ltpHtml = ltpHtml.replace(
  /<title>.*?<\/title>/s,
  `<title>${ltpTitle}</title>`
);

// Replace meta description
ltpHtml = ltpHtml.replace(
  /<meta name="description" content=".*?" \/>/s,
  `<meta name="description" content="${ltpDescription}" />`
);

// Replace canonical link
ltpHtml = ltpHtml.replace(
  /<link rel="canonical" href=".*?" \/>/s,
  `<link rel="canonical" href="${ltpCanonical}" />`
);

// Replace OG tags
ltpHtml = ltpHtml.replace(
  /<meta property="og:url" content=".*?" \/>/s,
  `<meta property="og:url" content="${ltpCanonical}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="og:title" content=".*?" \/>/s,
  `<meta property="og:title" content="${ltpTitle}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="og:description" content=".*?" \/>/s,
  `<meta property="og:description" content="${ltpDescription}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="og:image" content=".*?" \/>/s,
  `<meta property="og:image" content="${ltpOgImage}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="og:image:alt" content=".*?" \/>/s,
  `<meta property="og:image:alt" content="Libera tu Propósito Lima 2026 - Afiche Oficial" />`
);

// Replace Twitter tags
ltpHtml = ltpHtml.replace(
  /<meta property="twitter:url" content=".*?" \/>/s,
  `<meta property="twitter:url" content="${ltpCanonical}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="twitter:title" content=".*?" \/>/s,
  `<meta property="twitter:title" content="${ltpTitle}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="twitter:description" content=".*?" \/>/s,
  `<meta property="twitter:description" content="${ltpDescription}" />`
);
ltpHtml = ltpHtml.replace(
  /<meta property="twitter:image" content=".*?" \/>/s,
  `<meta property="twitter:image" content="${ltpOgImage}" />`
);

// Replace JSON-LD schema
ltpHtml = ltpHtml.replace(
  /<script type="application\/ld\+json">.*?<\/script>/s,
  `<script type="application/ld+json">\n${JSON.stringify(ltpJsonLd, null, 2)}\n    </script>`
);

const ltpDir = path.join(distDir, 'libera-tu-proposito');
if (!fs.existsSync(ltpDir)) {
  fs.mkdirSync(ltpDir, { recursive: true });
}
fs.writeFileSync(path.join(ltpDir, 'index.html'), ltpHtml, 'utf-8');

// 3. Create 404.html for GitHub Pages SPA fallback
fs.writeFileSync(path.join(distDir, '404.html'), homeHtml, 'utf-8');

console.log('Postbuild static page generation completed successfully!');
console.log('- dist/index.html (Home Page)');
console.log('- dist/libera-tu-proposito/index.html (Event Page)');
console.log('- dist/404.html (GitHub Pages Fallback)');

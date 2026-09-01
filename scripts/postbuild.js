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
const ltpOgImage = 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1786487780/libera-tu-proposito-lima-2026-og-1200x630-02_uxsmj1.webp';

const ltpHeadMeta = `<title>Libera tu Propósito Lima 2026 | Entradas y zonas</title>

    <meta name="description" content="Conoce fechas, sede, zonas, precios y beneficios de Libera tu Propósito, evento presencial del 17 y 18 de octubre de 2026 en Miraflores, Lima. Reserva por WhatsApp.">
    <meta name="robots" content="index, follow">
    <meta name="facebook-domain-verification" content="lnmc1a2ppaekth1xafsk8apilvnfxb">
    <link rel="canonical" href="https://www.juancapower.com/libera-tu-proposito/">
    <link rel="icon" type="image/png" href="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783016428/Favicon_JuanCaPower_w4zc3b.png">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_PE">
    <meta property="og:site_name" content="JuanCa Power">
    <meta property="og:title" content="Libera tu Propósito Lima 2026 | Entradas y zonas">
    <meta property="og:description" content="Evento presencial el 17 y 18 de octubre de 2026 en Miraflores, Lima. Conoce las zonas, beneficios y reserva tu entrada por WhatsApp.">
    <meta property="og:url" content="https://www.juancapower.com/libera-tu-proposito/">
    <meta property="og:image" content="${ltpOgImage}">
    <meta property="og:image:secure_url" content="${ltpOgImage}">
    <meta property="og:image:type" content="image/webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Libera tu Propósito Lima 2026, evento presencial del 17 y 18 de octubre en Miraflores">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Libera tu Propósito Lima 2026 | Entradas y zonas">
    <meta name="twitter:description" content="Conoce fechas, sede, zonas, beneficios y reserva tu entrada por WhatsApp.">
    <meta name="twitter:image" content="${ltpOgImage}">`;

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
          "item": "https://www.juancapower.com/libera-tu-proposito/"
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
        "url": "https://www.juancapower.com/libera-tu-proposito/"
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
          "url": "https://www.juancapower.com/libera-tu-proposito/",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Zona Indomable",
          "price": "490",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito/",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Zona MFT",
          "price": "1800",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito/",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Zona Face Your Fear",
          "price": "9997",
          "priceCurrency": "PEN",
          "url": "https://www.juancapower.com/libera-tu-proposito/",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  ]
};

let ltpHtml = baseHtml;

// Replace all Home head tags (title up to Schema Markup comment) with LTP head tags
ltpHtml = ltpHtml.replace(
  /<title>.*?<!-- Schema Markup -->/s,
  `${ltpHeadMeta}\n\n    <!-- Schema Markup -->`
);

// Replace JSON-LD schema with LTP schema
ltpHtml = ltpHtml.replace(
  /<script type="application\/ld\+json">.*?<\/script>/s,
  `<script type="application/ld+json">\n${JSON.stringify(ltpJsonLd, null, 2)}\n    </script>`
);

// Write to dist/libera-tu-proposito/index.html
const ltpDir = path.join(distDir, 'libera-tu-proposito');
if (!fs.existsSync(ltpDir)) {
  fs.mkdirSync(ltpDir, { recursive: true });
}
fs.writeFileSync(path.join(ltpDir, 'index.html'), ltpHtml, 'utf-8');

// Also write to dist/libera-tu-proposito.html for clean URL static servers
fs.writeFileSync(path.join(distDir, 'libera-tu-proposito.html'), ltpHtml, 'utf-8');

// 3. Create PowerPrompts 302 Redirect (dist/powerprompts/index.html & dist/powerprompts.html)
const powerPromptsRedirectHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Power Prompts 01: Rompepatrones con ChatGPT | JuanCa Power</title>
    <meta name="description" content="Redirigiendo a Power Prompts 01: Rompepatrones con ChatGPT por JuanCa Power.">
    <meta name="robots" content="noindex, follow">

    <link rel="canonical" href="https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_PE">
    <meta property="og:site_name" content="JuanCa Power">
    <meta property="og:title" content="Power Prompts 01: Rompepatrones con ChatGPT | JuanCa Power">
    <meta property="og:description" content="Accede a la guía oficial de Power Prompts 01: Rompepatrones con ChatGPT de JuanCa Power.">
    <meta property="og:url" content="https://juancapower.com/powerprompts">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Power Prompts 01: Rompepatrones con ChatGPT | JuanCa Power">
    <meta name="twitter:description" content="Accede a la guía oficial de Power Prompts 01: Rompepatrones con ChatGPT de JuanCa Power.">

    <meta http-equiv="refresh" content="0;url=https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5">
    <script>
      (function() {
        var search = window.location.search || '';
        var hash = window.location.hash || '';
        var targetUrl = 'https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5' + search + hash;
        window.location.replace(targetUrl);
      })();
    </script>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background-color: #030712; color: #fff; text-align: center; padding: 20px;">
    <p style="font-size: 1.25rem; margin-bottom: 1rem; font-weight: 500;">Redirigiendo a Power Prompts…</p>
    <a id="redirect-link" href="https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5" style="color: #D6B15F; text-decoration: underline; font-size: 1rem;">Haz clic aquí si no eres redirigido automáticamente</a>
    <script>
      (function() {
        var search = window.location.search || '';
        var hash = window.location.hash || '';
        var targetUrl = 'https://app.notion.com/p/POWER-PROMPTS-01-Rompepatrones-con-ChatGPT-3cef574ee8138135b65ffb558ed09fe5' + search + hash;
        var link = document.getElementById('redirect-link');
        if (link) {
          link.href = targetUrl;
        }
      })();
    </script>
</body>
</html>`;

const powerPromptsDir = path.join(distDir, 'powerprompts');
if (!fs.existsSync(powerPromptsDir)) {
  fs.mkdirSync(powerPromptsDir, { recursive: true });
}
fs.writeFileSync(path.join(powerPromptsDir, 'index.html'), powerPromptsRedirectHtml, 'utf-8');
fs.writeFileSync(path.join(distDir, 'powerprompts.html'), powerPromptsRedirectHtml, 'utf-8');

// 4. Create 404.html for GitHub Pages SPA fallback
fs.writeFileSync(path.join(distDir, '404.html'), homeHtml, 'utf-8');

console.log('Postbuild static page generation completed successfully!');
console.log('- dist/index.html (Home Page)');
console.log('- dist/libera-tu-proposito/index.html (Event Page)');
console.log('- dist/libera-tu-proposito.html (Clean URL Event Page)');
console.log('- dist/powerprompts/index.html (Power Prompts Redirect)');
console.log('- dist/powerprompts.html (Power Prompts Clean URL Redirect)');
console.log('- dist/404.html (GitHub Pages Fallback)');


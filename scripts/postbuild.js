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

// 2. Permanent Redirect from /libera-tu-proposito to Home (dist/libera-tu-proposito/index.html & dist/libera-tu-proposito.html)
// Event concluded — eliminate all commercial infrastructure, Offer, and Event schemas
const ltpRedirectHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JuanCa Power | Speaker, Mentor y Creador del Sistema POWER 4</title>
    <meta name="description" content="Redirigiendo a la página oficial de JuanCa Power.">
    <meta name="robots" content="noindex, follow">
    <link rel="canonical" href="https://www.juancapower.com/">
    <meta http-equiv="refresh" content="0;url=/">
    <script>
      (function() {
        window.location.replace('/');
      })();
    </script>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background-color: #0b0d17; color: #fff; text-align: center; padding: 20px;">
    <p style="font-size: 1.25rem; margin-bottom: 1rem; font-weight: 500;">Redirigiendo a juancapower.com…</p>
    <a href="/" style="color: #deb660; text-decoration: underline; font-size: 1rem;">Haz clic aquí si no eres redirigido automáticamente</a>
</body>
</html>`;

const ltpDir = path.join(distDir, 'libera-tu-proposito');
if (!fs.existsSync(ltpDir)) {
  fs.mkdirSync(ltpDir, { recursive: true });
}
fs.writeFileSync(path.join(ltpDir, 'index.html'), ltpRedirectHtml, 'utf-8');
fs.writeFileSync(path.join(distDir, 'libera-tu-proposito.html'), ltpRedirectHtml, 'utf-8');

// 3. PowerPrompts 302 Redirect to Notion guide (dist/powerprompts/index.html & dist/powerprompts.html)
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

console.log('Postbuild generation completed successfully!');
console.log('- dist/index.html (Home Page)');
console.log('- dist/libera-tu-proposito/index.html (Redirect to /)');
console.log('- dist/libera-tu-proposito.html (Clean URL Redirect to /)');
console.log('- dist/powerprompts/index.html (Power Prompts Redirect to Notion)');
console.log('- dist/powerprompts.html (Power Prompts Clean URL Redirect)');
console.log('- dist/404.html (GitHub Pages Fallback)');

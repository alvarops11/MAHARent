// Genera assets/icons/sprite.svg a partir de los SVG originales de assets/svg-src/icons.
// Uso: npm run icons
//
// 1. Optimiza cada SVG con SVGO (configuración en svgo.config.js).
// 2. Convierte cada icono en un <symbol id="icon-nombre"> dentro de un único sprite.
// 3. Los iconos con versión rellena (nombre-fill.svg) incluyen ambos trazados en el mismo
//    <symbol>; el CSS elige cuál se ve con la variable --icon-fill (0 = contorno, 1 = relleno).
//
// En el HTML: <svg class="icon icon--md" aria-hidden="true"><use href="assets/icons/sprite.svg#icon-menu"></use></svg>

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize, loadConfig } from 'svgo';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'assets', 'svg-src', 'icons');
const outFile = path.join(root, 'assets', 'icons', 'sprite.svg');

const config = await loadConfig(path.join(root, 'svgo.config.js'));

async function optimizeIcon(file) {
  const original = await readFile(path.join(srcDir, file), 'utf8');
  const { data } = optimize(original, { ...config, path: file });
  const viewBox = data.match(/viewBox="([^"]+)"/)[1];
  const inner = data.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  return { viewBox, inner, before: Buffer.byteLength(original), after: Buffer.byteLength(data) };
}

const files = (await readdir(srcDir)).filter((f) => f.endsWith('.svg')).sort();
const names = files.filter((f) => !f.endsWith('-fill.svg')).map((f) => f.slice(0, -4));

let before = 0;
let after = 0;
const symbols = [];

for (const name of names) {
  const icon = await optimizeIcon(name + '.svg');
  before += icon.before;
  after += icon.after;
  let content = icon.inner;

  if (files.includes(name + '-fill.svg')) {
    const filled = await optimizeIcon(name + '-fill.svg');
    before += filled.before;
    after += filled.after;
    content =
      '<g style="opacity:calc(1 - var(--icon-fill, 0))">' + icon.inner + '</g>' +
      '<g style="opacity:var(--icon-fill, 0)">' + filled.inner + '</g>';
  }

  symbols.push(`  <symbol id="icon-${name}" viewBox="${icon.viewBox}">${content}</symbol>`);
}

const sprite =
  '<svg xmlns="http://www.w3.org/2000/svg">\n' +
  '  <!-- Generado con "npm run icons" desde assets/svg-src/icons. No editar a mano. -->\n' +
  symbols.join('\n') +
  '\n</svg>\n';

await mkdir(path.dirname(outFile), { recursive: true });
await writeFile(outFile, sprite);

console.log(`Iconos: ${names.length} (${files.length} archivos SVG de origen)`);
console.log(`SVG originales: ${before} bytes -> optimizados con SVGO: ${after} bytes`);
console.log(`Sprite: ${path.relative(root, outFile)} (${Buffer.byteLength(sprite)} bytes)`);

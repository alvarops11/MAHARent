// Configuración de SVGO para los SVG de MAHARent (iconos y logotipos).
// Uso: npm run icons (genera assets/icons/sprite.svg) o npx svgo <archivo.svg>
module.exports = {
  multipass: true, // repite las pasadas hasta que el archivo no se reduce más
  plugins: [
    {
      // preset-default ya elimina: metadatos (<metadata>, <title> de editor), comentarios,
      // datos de Inkscape/Sodipodi/Illustrator, grupos vacíos o innecesarios, atributos por defecto,
      // y además simplifica los trazados (convertPathData, mergePaths, collapseGroups...)
      name: 'preset-default',
      params: {
        overrides: {
          // el viewBox es imprescindible para que el SVG escale con el tamaño de la fuente (1em)
          removeViewBox: false
        }
      }
    },
    // sin width/height fijos: el tamaño lo decide el CSS (.icon { width: 1em; height: 1em })
    'removeDimensions',
    // los editores dejan ids y clases que no se usan en la web
    'removeEditorsNSData',
    { name: 'removeAttrs', params: { attrs: ['class', 'data-name', 'id'] } }
  ]
};

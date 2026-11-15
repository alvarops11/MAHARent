# Cotejo de elementos multimedia con el manual de diseño

## Cómo he realizado el cotejo
Como manual de diseño he usado el que generó **Google Stitch** al crear el prototipo: el archivo `DESIGN.md` (paleta, escala tipográfica, espaciados, radios y sombras) y el código de las 6 pantallas.

He revisado los elementos multimedia tratados: **iconos SVG** (96 iconos, 250 usos), **fotografías de vehículos** (27), la **imagen destacada** del inicio, el **logotipo** y el **vídeo** del login.

1. **Tokens:** comparé con un script los valores del `DESIGN.md` con nuestros `_variables.scss`, `_typography-tokens.scss` y `tailwind.config.js`.
2. **Medición en el navegador:** a 375, 768 y 1440 px leí con `getComputedStyle` el color, tamaño, márgenes, radios y tipografía reales de cada elemento y de los textos que lo acompañan.
3. **Comparación con el prototipo:** cuando algo no coincidía, miré cómo estaba en el código de Stitch para saber si el fallo venía del manual, del prototipo o de nuestra implementación.

El propio `DESIGN.md` se contradice: los tokens dicen `primary #000000`, pero el texto habla de un azul marino `#0B192C`. Como el prototipo usa los tokens, he tomado los tokens como referencia.

**Resultado general:** la paleta (47/47 colores), la tipografía (13/13 estilos) y los espaciados (11/11) coinciden con el manual. Todos los iconos usan colores de la paleta, y las fotos, el logo y el vídeo respetan los tamaños y proporciones del prototipo.

## Desviaciones corregidas
| | Desviación | Corrección |
|---|---|---|
| D1 | El precio de las tarjetas del marketplace iba en azul; el manual reserva el ámbar para los precios. | Cambiado a ámbar (`$color-on-tertiary-container`) en `_cards.scss`. |
| D3 | En móvil el margen lateral era de 24 px; el manual indica 16 px. | El mixin `container` usa 16 px en móvil, 24 px en tablet y 48 px en escritorio. |
| D4 | La zona de la foto de las tarjetas tenía un fondo plano; el manual pide un degradado suave. | Añadido el degradado `surface-container-low → surface-container-lowest`. |
| D5 | El padding de las tarjetas era de 16 px también en escritorio; el manual pide 24 px. | 16 px en móvil y tablet, 24 px desde `lg`. |

Después de cada cambio recompilé el SASS y volví a medir en los tres anchos: márgenes y padding correctos, precios en ámbar y sin scroll horizontal.

**Desviación justificada (D2):** el precio de la ficha usa un ámbar más oscuro (`#b87500`) que el del manual (`#F59E0B`), porque el del manual tiene un contraste de 2,15:1 sobre blanco y no cumple WCAG. El nuestro tiene 3,76:1, válido para texto grande.

## Desviaciones pendientes
- **D6 Radios:** seguimos los del prototipo (12 px en tarjetas), pero el texto del manual pide 24 px, y el inicio tiene sus propios radios. *Decisión de equipo.*
- **D7 Sombras:** el tono y los valores son ligeramente distintos a los niveles del manual. *Diferencia mínima.*
- **D8 Cabecera:** mide 64 px frente a los 80 px del prototipo. *Decisión de equipo.*
- **D9 Vídeo del login:** está en 4K y pesa 22 MB para mostrarse a 450×253 px. *Recodificar a 720p en MP4 y WebM y añadir un `poster`.*
- **D10 Imagen del inicio:** se carga desde diariomotor.com, una web de terceros. *Sustituir por una imagen propia o libre guardada en local.*
- **D11 Logotipo:** sigue en PNG. *Pasarlo a SVG y optimizarlo con SVGO.*
- **D12 Manual:** el `DESIGN.md` es incoherente. *Regenerarlo en Stitch o dejar documentado que prevalecen los tokens.*

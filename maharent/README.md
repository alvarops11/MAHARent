# MAHARent

Frontend de renting de coches con **HTML5 semántico**, **SASS (arquitectura 7-1 simplificada)** y metodología **BEM**. Tailwind se mantiene cargado desde CDN (con la configuración compartida en `js/tailwind.config.js`), pero todo el estilo del proyecto vive en SCSS.

## Páginas

| Página | Descripción |
|---|---|
| `index.html` | Inicio: hero, ecosistema y ofertas destacadas con filtro |
| `marketplace.html` | Listado con filtros, vista cuadrícula/lista y favoritos |
| `vehiculo.html` | Detalle de vehículo: galería, ficha, condiciones y visor 3D |
| `dashboard.html` | Panel de empresa: KPIs, flota, publicaciones y solicitudes |
| `login.html` | Inicio de sesión |
| `contacto.html` | Formulario de contacto |

## Estructura

```
maharent/
├── *.html
├── css/            main.css (+ .map) generado por SASS
├── scss/
│   ├── main.scss   único punto de entrada (solo @use)
│   ├── abstracts/  variables, tokens tipográficos, breakpoints, funciones, mixins (_index.scss los reúne)
│   ├── base/       reset (Box Model), tipografía, iconos, utilidades
│   ├── layout/     grid (CSS Grid 4/8/12), header, navigation, sidebar, footer (Flexbox)
│   ├── components/ buttons, cards, badges, forms, tabs-toggles, tables, modals, avatar
│   └── pages/      un parcial por página
├── js/             main.js (interacciones) y tailwind.config.js
└── assets/img/
```

## Compilar

```bash
npm run sass         # compila scss/main.scss -> css/main.css (+ mapa)
npm run sass:watch   # recompila al guardar
npm run serve        # servidor local en http://127.0.0.1:8000
```

También funciona **Live Sass** (`glenn2223.live-sass`) con la configuración de `.vscode/settings.json` abriendo la carpeta `maharent` como espacio de trabajo.

## Convenciones

- **BEM**: `bloque__elemento--modificador`, en minúsculas y con guiones simples (`vehicle-card__price--highlight`). Sin elementos anidados (`a__b__c`).
- **Mobile-First**: estilos base para móvil y ampliación con `@include respond-to('md' | 'lg' | 'xl')` (breakpoints alineados con Tailwind).
- **Tokens**: colores, espaciado, radios y sombras en `abstracts/_variables.scss`; escala tipográfica en `_typography-tokens.scss`. No se usan colores sueltos en los parciales.
- **Layout**: CSS Grid para estructuras bidimensionales y Flexbox para alineaciones lineales.
- **Tailwind**: el bloque `table` se llama `data-table` y el `container` de Tailwind está desactivado en `js/tailwind.config.js` para evitar colisiones con las clases del proyecto.

## Verificación

- `css/main.css` validado con el validador CSS del W3C: 0 errores (solo avisos por prefijos de navegador).
- Las 6 páginas validadas con el validador HTML del W3C (Nu): 0 errores y 0 avisos.
- Sin `style=""`, sin `<style>` ni `<script>` inline, un único `<main>` y un único `<h1>` por página.
- Probado en 375, 768 y 1440 px sin scroll horizontal.

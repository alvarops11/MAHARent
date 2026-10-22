# Maharent - Fase 1: estructura SASS

## Requisitos

- VS Code con la extensión **Live Sass** (`glenn2223.live-sass`)
- Git

## Pasos

1. **Carpetas:** crear `css/`, `js/`, `assets/img/` y `scss/` con subcarpetas `abstracts/`, `base/`, `layout/`, `components/` y `pages/`.
2. **Parciales:** crear los `_*.scss` de cada subcarpeta (ver la estructura del proyecto), cada uno con solo una línea de comentario inicial.
3. **Entrada:** crear `scss/main.scss` con un `@use` por cada parcial, sin reglas CSS.
4. **Configurar Live Sass:** crear `.vscode/settings.json` con `"liveSassCompile.settings.formats"` (formato `expanded`, `.css`), `savePath: "/css"` y `generateMap: true`.
5. **Compilar:** *Ctrl+Shift+P > Live Sass: Compile Sass - Without Watch Mode*.
6. **Comprobar:** `css/main.css` y `css/main.css.map` existen, no hay errores en *Problemas* y `main.css` solo contiene la referencia al mapa.
7. **Commit:**

   ```bash
   git add .
   git commit -m "Fase 1: estructura SASS y configuración Live Sass"
   ```

## Criterios de cierre

- [X] Carpetas y parciales creados.
- [X] `main.scss` con `@use` para todos los parciales.
- [X] Live Sass compila sin errores y genera `css/main.css` y `css/main.css.map`.
- [X] Commit de cierre realizado.

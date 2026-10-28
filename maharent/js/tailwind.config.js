// Configuración de Tailwind compartida por todas las páginas.
// Debe cargarse justo después de cdn.tailwindcss.com. Los tokens coinciden con scss/abstracts/_variables.scss.
tailwind.config = {
  darkMode: 'class',
  // El contenedor de Tailwind choca con el bloque .container de SCSS
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        background: '#f8f9ff',
        surface: '#f8f9ff',
        'surface-bright': '#f8f9ff',
        'surface-dim': '#cbdbf5',
        'surface-variant': '#d3e4fe',
        'surface-tint': '#525f75',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eff4ff',
        'surface-container': '#e5eeff',
        'surface-container-high': '#dce9ff',
        'surface-container-highest': '#d3e4fe',
        'inverse-surface': '#213145',
        'inverse-on-surface': '#eaf1ff',
        'on-background': '#0b1c30',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#44474c',
        outline: '#75777d',
        'outline-variant': '#c5c6cd',
        primary: '#000000',
        'on-primary': '#ffffff',
        'primary-container': '#0e1c2f',
        'on-primary-container': '#77849c',
        'primary-fixed': '#d6e3fe',
        'primary-fixed-dim': '#bac7e1',
        'on-primary-fixed': '#0e1c2f',
        'on-primary-fixed-variant': '#3a475c',
        'inverse-primary': '#bac7e1',
        secondary: '#0051d5',
        'on-secondary': '#ffffff',
        'secondary-container': '#316bf3',
        'on-secondary-container': '#fefcff',
        'secondary-fixed': '#dbe1ff',
        'secondary-fixed-dim': '#b4c5ff',
        'on-secondary-fixed': '#00174b',
        'on-secondary-fixed-variant': '#003ea8',
        tertiary: '#000000',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#2a1700',
        'on-tertiary-container': '#b87500',
        'tertiary-fixed': '#ffddb8',
        'tertiary-fixed-dim': '#ffb95f',
        'on-tertiary-fixed': '#2a1700',
        'on-tertiary-fixed-variant': '#653e00',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'margin-sm': '1rem',
        margin: '1.5rem',
        'margin-lg': '3rem',
        'gutter-sm': '1rem',
        gutter: '1.5rem',
        'gutter-lg': '2rem'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  }
};

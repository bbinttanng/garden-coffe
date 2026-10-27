/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#003629",
        "on-primary": "#ffffff",
        "primary-container": "#1b4d3e",
        "on-primary-container": "#8abda9",
        "primary-fixed": "#baeed9",
        "primary-fixed-dim": "#9ed1bd",
        "on-primary-fixed": "#002117",
        "on-primary-fixed-variant": "#1d4f40",
        "inverse-primary": "#9ed1bd",

        "secondary": "#45664e",
        "on-secondary": "#ffffff",
        "secondary-container": "#c4e9cb",
        "on-secondary-container": "#496a52",
        "secondary-fixed": "#c7ecce",
        "secondary-fixed-dim": "#abcfb2",
        "on-secondary-fixed": "#01210f",
        "on-secondary-fixed-variant": "#2e4e37",

        "tertiary": "#521f00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#6e3513",
        "on-tertiary-container": "#f19f74",
        "tertiary-fixed": "#ffdbcb",
        "tertiary-fixed-dim": "#ffb691",
        "on-tertiary-fixed": "#341100",
        "on-tertiary-fixed-variant": "#713714",

        "surface": "#fcf9f3",
        "surface-dim": "#dcdad4",
        "surface-bright": "#fcf9f3",
        "surface-variant": "#e5e2dc",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3ed",
        "surface-container": "#f0eee8",
        "surface-container-high": "#ebe8e2",
        "surface-container-highest": "#e5e2dc",

        "background": "#fcf9f3",
        "on-background": "#1c1c18",
        "on-surface": "#1c1c18",
        "on-surface-variant": "#404945",
        "inverse-surface": "#31312d",
        "inverse-on-surface": "#f3f0ea",

        "outline": "#707974",
        "outline-variant": "#c0c9c3",
        "surface-tint": "#376757",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "serif": ["Playfair Display", "serif"],
        "title-lg": ["Plus Jakarta Sans", "sans-serif"],
        "title-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "sans-serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      }
    }
  },
  plugins: [],
};

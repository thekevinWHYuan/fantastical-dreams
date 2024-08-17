import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "palette-purple": "#7554ae",
        "palette-pink": "#f3c6f2",
        "palette-light-purple": "#ad88c6",
        "palette-blue": "#caedff"
      },
      backgroundImage:{
        "windows-desktop": "url('/src/public/windowsScreen.png')",
        "mini-scanline": "repeating-linear-gradient(to bottom, gray 0px, gray 2px, white 2px, white 4px)"
      },
      cursor: {
        "cute-cursor": "url('/src/public/nso_cursor.cur'), pointer",
        "cute-pointer": "url('/src/public/nso_point.cur'), pointer"
      },
      keyframes: {
        "app-open": {
            "0%": {transform: "scale(0.1)"},
            "100%": {transform: "scale(1)"}
        },
        "flicker":{
          "0%": {opacity: "0.67861"},
          "5%": {opacity: "0.74769"},
          "10%": {opacity: "0.63604"},
          "15%": {opacity: "0.70626"},
          "20%": {opacity: "0.88128"},
          "25%": {opacity: "0.63891"},
          "30%": {opacity: "0.95583"},
          "35%": {opacity: "0.57807"},
          "40%": {opacity: "0.66559"},
          "45%": {opacity: "0.84693"},
          "50%": {opacity: "0.96019"},
          "55%": {opacity: "0.88594"},
          "60%": {opacity: "0.50313"},
          "65%": {opacity: "0.71988"},
          "70%": {opacity: "0.53455"},
          "75%": {opacity: "0.67288"},
          "80%": {opacity: "0.71428"},
          "85%": {opacity: "0.70419"},
          "90%": {opacity: "0.7003"},
          "95%": {opacity: "0.86108"},
          "100%": {opacity: "0.94387"}
        },
        "scanline": {
          '0%': {transform: "translateY(calc(-50dvh))"},
          '100%': {transform: "translateY(calc(99vh))"},
        },
      },
      animation: {  
        "app-open": "app-open 0.1s ease-in-out",
        "flicker": "flicker infinite 0.15s",
        "scanline": "scanline 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

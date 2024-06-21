import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        "windows-desktop": "url('/src/public/windowsScreen.png')"
      },
      cursor: {
        "cute-cursor": "url('/src/public/nso_cursor.cur'), pointer",
        "cute-pointer": "url('/src/public/nso_point.cur'), pointer"
      }
    },
  },
  plugins: [],
};

export default config;

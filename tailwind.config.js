/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white64: 'rgba(255, 255, 255, 0.64)',
        colorsPanes: 'rgb(26, 23, 47)',
        colorsWhite4: '#ffffff0a',
        colorsWhite8: 'rgba(255, 255, 255, 0.08)',
        colorsWhite16: 'rgba(255, 255, 255, 0.16)',
        // colorsWhite4: 'rgba(255, 255, 255, 0.04)',
        textBright: 'rgb(255, 255, 255)',
      },
      fontFamily: {
        SpaceMono: ['Space Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

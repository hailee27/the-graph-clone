/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary': '#2C8D27',
      'primary-light': '#F2F8F2',
      'secondary': '#FF7715',
      'secondary-light': 'rgba(255, 119, 21, 0.2)',
      'secondary-thin': '#FFF7F1',
      'secondary-mono': '#FFFBF7',
      'tertiary': '#888888',
      'tertiary-light': '#D9D9D9',
      'tertiary-thin': '#F6F6F6',
      'primary-text': '#333333',
      'secondary-text': '#888888'
    }
  },
  plugins: [],
};

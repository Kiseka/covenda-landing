/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      '3xl': { 'max': '5536px' },

      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      container: {
        padding: '2rem',
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        'edge-space': '4rem',
        'edge-space-sm': '2rem',
      },
      colors: {
        'body-bg': '#fafcfd',
        'flame': {
          '50': '#fcf5f0',
          '100': '#f8e7dc',
          '200': '#efccb9',
          '300': '#e5a98c',
          '400': '#da7e5d',
          '500': '#d36545',
          '600': '#c34933',
          '700': '#a2382c',
          '800': '#82302a',
          '900': '#692925',
          '950': '#391311',
        },
      },
      width: {
        '18': '4.5rem',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      maxWidth: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      minWidth: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      fontFamily: {
        'circular': ['Circular', 'sans-serif'],
        'dm-sans': ['DMSANS', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
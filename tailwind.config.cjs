/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,ts}',
    './src/pages/**/*.{html,js,ts}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background':
          "url('./src/assets/img/side-view-mushroom-frying-with-stove-fire-human-hand-pan.png')",
        'header-gradient':
          'linear-gradient(180deg, rgba(36, 36, 36, 0.1) 0%, #242424 100%)',
      },
      colors: {
        'primary-button': '#FDC543',
        'primary-button-hover': '#F6B51E',
        'primary-button-border': '#FDC543',
        'secundary-button': '#006655',
        'secundary-button-hover': '#005547',
        'secundary-button-border': '#006655',
        'main-text-color': '#242424',
      },
    },
  },
  plugins: [],
};

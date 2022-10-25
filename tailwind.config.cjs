/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,ts}',
    './src/pages/**/*.{html,js,ts}',
    './index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background':
          "url('./assets/img/side-view-mushroom-frying-with-stove-fire-human-hand-pan.png')",
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
        'white-text-color': '#FFF9EB',
        'green-color': '#006655',
        'yellow-color': '#FDC543',
        'white-color': '#FFF9EB',
      },
      minHeight: {
        300: '300px',
        160: '160px',
      },
      boxShadow: {
        cards: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.1));',
        levelUp: '0px 0px 20px rgba(0, 0, 0, 0.25);',
      },
      width: {
        540: '540px',
        300: '300px',
        perc90: '90%',
        inherit: 'inherit',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};

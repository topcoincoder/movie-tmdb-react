module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '276px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1920px',
    },
    extend: {
      lineHeight: {
        '12': '3rem',
      },
      fontFamily: {
        'open-sans': [' "Open Sans" ', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

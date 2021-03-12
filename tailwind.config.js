// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'am-black': '#1d1d1d',
        'am-white': '#fbfbfb',
        'am-green-light': '#47ff75',
        'am-green-dark': '#005214',
      },
      fontFamily: {
        am: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
      backgroundOpacity: ['dark'],
      display: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'buzz-purple-dark': '#1f1837',
        'buzz-purple-light': '#65285a',
        'buzz-purple-neon': '#e200b9',
        'buzz-green': '#a6f673',
        'buzz-green-neon': '#61ff00',
        'buzz-white': '#f6f6f6',
        'buzz-gray': '#2f2f2f',
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '100%',
            h2: {
              color: '#1f1837',
            },
            h3: {
              color: '#1f1837',
            },
            'ul > li::before': {
              'background-color': '#e200b9',
            },
            img: {
              'margin-left': 'auto',
              'margin-right': 'auto',
              'border-radius': '0.5rem',
              '--tw-shadow':
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              'box-shadow':
                'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
            },
          },
        },
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

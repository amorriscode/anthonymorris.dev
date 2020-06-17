// eslint-disable-next-line no-undef
module.exports = {
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx'
  ],
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
    },
  },
  variants: {
    cursor: ['hover'],
  },
  plugins: [],
};
  
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx', './data/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        fanwood: ['Fanwood Text', 'serif'],
        mono: ['Space Mono', 'monospace'],
        tenor: ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

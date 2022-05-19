const colors = require('tailwindcss/colors')
// import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
      mauve: '#d9bbf9ff',
      tuscany: '#cca7a2ff',
      heliotrope: '#aa9fb1ff',
      darkblue: '#7871aaff',
      purple: '#4e5283ff',
      yellow: colors.yellow,
      slate: colors.slate,
    }
  },
  plugins: [],
}
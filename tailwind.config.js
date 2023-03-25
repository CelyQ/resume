const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        khand: ['var(--font-khand)', ...fontFamily.sans],
        rubik: ['var(--font-rubik-bubbles)', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}

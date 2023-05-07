/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      serif: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      dialog: ['Arsenal']
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./plugins/tailwind/shadows'),
    require('./plugins/tailwind/nuxt-typography')
  ]
}

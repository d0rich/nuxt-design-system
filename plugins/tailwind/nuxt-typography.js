/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss/plugin')} */
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  addUtilities({
    '.nuxt-typography-connector': {
      '--typography-font-sans': theme('fontFamily.sans'),
      '--typography-font-serif': theme('fontFamily.serif'),
      '--typography-font-mono': theme('fontFamily.mono'),
      '--typography-font-dialog': theme('fontFamily.dialog')
    }
  })
})

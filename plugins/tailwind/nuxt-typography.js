/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss/plugin')} */
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  addUtilities({
    '.nuxt-typography-connector': {
      '--tw-typography-font-sans': theme('fontFamily.sans'),
      '--tw-typography-font-serif': theme('fontFamily.serif'),
      '--tw-typography-font-mono': theme('fontFamily.mono'),
      '--tw-typography-font-dialog': theme('fontFamily.dialog')
    }
  })
})

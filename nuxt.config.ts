export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Roboto Slab': true,
      'JetBrains Mono': true,
      Arsenal: true
    },
    preload: true
  }
})

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  build: {
    transpile: ['gsap', 'consola']
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  components: {
    dirs: [
      {
        path: join(currentDir, './components'),
        ignore: ['**/*.ts']
      }
    ]
  },
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

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import * as fs from 'fs'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },
  vite: {
    build: {
      rollupOptions: {
        external(source, importer, isResolved) {
          return source === 'gsap/MorphSVGPlugin' && !fs.existsSync('./node_modules/gsap/MorphSVGPlugin.js')
        },
      }
    }
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

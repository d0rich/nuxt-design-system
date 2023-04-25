export default defineNuxtConfig({
  extends: '../',
  colorMode: {
    preference: 'light'
  },
  nitro: {
    prerender: {
      routes: ['/_d0rich/meta.json']
    }
  }
})

import consola from 'console'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(async () => {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)
  try {
    gsap.registerPlugin(await import('gsap/MorphSVGPlugin'))
  } catch (error) {
    consola.info('Free GSAP is used. Morph SVG plugin is ignored.')
  }
})

import gsap from 'gsap'
import consola from 'console'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)
  try {
    gsap.registerPlugin(MorphSVGPlugin)
  } catch (error) {
    consola.info('Free GSAP is used. Morph SVG plugin is ignored.')
  }
})

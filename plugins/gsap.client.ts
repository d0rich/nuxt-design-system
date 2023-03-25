import consola from 'consola/src/browser'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MorphSVGPlugin)
  if (!isMorphSVGPluginInstalled())
    consola.warn('Free GSAP is used. Morph SVG plugin is ignored.')
})

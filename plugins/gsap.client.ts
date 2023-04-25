// @ts-ignore
import consola from 'consola'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(MorphSVGPlugin)
  if (!isMorphSVGPluginInstalled())
    consola.warn('Free GSAP is used. Morph SVG plugin is ignored.')
  window.gsap = gsap
})

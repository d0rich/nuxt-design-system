import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from 'gsap-trial/MorphSVGPlugin'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MorphSVGPlugin)
})

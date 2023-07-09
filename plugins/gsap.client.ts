import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)
  window.gsap = gsap
})

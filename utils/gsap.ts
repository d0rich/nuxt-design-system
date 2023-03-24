import gsap from 'gsap'

export function isMorphSVGPluginInstalled() {
  return typeof gsap.plugins.morphSVG === 'function'
}

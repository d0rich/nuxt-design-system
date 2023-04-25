<script setup lang="ts">
import type { LineEdge } from '~~/../types'

type ScrollTrigger = gsap.TweenVars['scrollTrigger']

const svg1Container = ref<SVGSVGElement | null>(null)
const svg1Polygon = ref<SVGPolygonElement | null>(null)
const svgLineColor = ref('fill-orange-500')

function switchColor() {
  svgLineColor.value =
    svgLineColor.value === 'fill-orange-500'
      ? 'fill-purple-500'
      : 'fill-orange-500'
}

function applyLineAnimation() {
  if (!svg1Container.value || !svg1Polygon.value) return
  const scrollTrigger: ScrollTrigger = {
    scrub: 1,
    trigger: svg1Container.value,
    start: 'top 80%',
    end: 'bottom 20%'
  }
  const line: LineEdge[] = [
    { left: { x: 10, y: 0 }, right: { x: 13, y: 0 } },
    { left: { x: 87, y: 4 }, right: { x: 90, y: 1 } },
    { left: { x: 83, y: 16 }, right: { x: 87, y: 10 } },
    { left: { x: 97, y: 6 }, right: { x: 94, y: 7 } },
    { left: { x: 43, y: 8 }, right: { x: 50, y: 9 } },
    { left: { x: 45, y: 67 }, right: { x: 57, y: 49 } },
    { left: { x: 90, y: 40 }, right: { x: 85, y: 38 } },
    { left: { x: 83, y: 23 }, right: { x: 72, y: 14 } },
    { left: { x: 95, y: 28 }, right: { x: 98, y: 25 } },
    { left: { x: 97, y: 93 }, right: { x: 99, y: 99 } },
    { left: { x: 40, y: 76 }, right: { x: 30, y: 75 } },
    { left: { x: 80, y: 60 }, right: { x: 95, y: 50 } },
    { left: { x: 50, y: 100 }, right: { x: 75, y: 100 } }
  ]
  applyLinePerPointAnimation(
    line,
    svg1Container.value,
    svg1Polygon.value,
    (point, keyframes) => {
      gsap.to(point, {
        keyframes,
        scrollTrigger
      })
    }
  )
}

onMounted(() => {
  applyLineAnimation()
})
</script>

<template>
  <DWrapBackground
    class="font-dialog bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-fixed bg-center overflow-hidden"
    overlay-class="backdrop-saturate-50 bg-opacity-80 bg-green-900"
  >
    <template #svg>
      <svg
        ref="svg1Container"
        height="100%"
        width="100%"
        class="absolute top-0 w-full h-full"
        viewBox="70 0 10 100"
        preserveAspectRatio="xMidYMin"
      >
        <polygon
          ref="svg1Polygon"
          class="transition-colors"
          :class="svgLineColor"
        />
      </svg>
    </template>
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>SVG lines animation toolkit</h1>
      <div class="flex flex-col gap-20 items-start">
        <DCard class="max-w-md">
          <DCardTitle>Description</DCardTitle>

          Design system provides toolkit for SVG lines animation. It's very
          easy.
        </DCard>

        <DCard class="max-w-md self-end">
          <DCardTitle>Switch color</DCardTitle>
          <p>Switch color on example.</p>
          <DBigBangButton class="underline" text="Boop" @click="switchColor" />
        </DCard>

        <DCard class="max-w-md">
          <DCardTitle>GSAP compatible</DCardTitle>

          It is much easer to use GSAP with this toolkit. For example use GSAP's
          scrollTrigger plugin.
        </DCard>
      </div>
    </div>
  </DWrapBackground>
</template>

<style scoped>
h1 {
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold text-white;
}
</style>

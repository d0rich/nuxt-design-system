<script lang="ts">
import gsap from 'gsap'

export default {
  name: 'DBigBangButtonAnimation'
}
</script>

<script setup lang="ts">
const paths = {
  first: 'M 0 0 C -489.471 -116.5 -526.692 -193.268 -563.913 -311.911',
  last: 'M 0 0 C 317.761 171.963 466.645 199.879 680.666 171.963',
  intermediate: [
    'M 0 0 C 36.277 125.437 19.992 358.068 -49.797 413.9',
    'M 0 0 C 52.561 -69.974 71.171 -118.827 64.192 -446.837',
    'M 0 0 C -3.271 137.068 -26.534 395.289 33.95 439.489'
  ]
}

const { text } = useDBigBangButtonUtils()
const symbols = computed(() => text.value.split(''))

let clearTask: NodeJS.Timeout

watch(text, (val) => {
  clearTimeout(clearTask)
  if (val) clearTask = setTimeout(() => (text.value = ''), 1500)
})
function pathFromIndex(i: number) {
  if (i === 0) return paths.first
  if (i === symbols.value.length - 1) return paths.last
  return paths.intermediate[
    Math.floor(Math.random() * paths.intermediate.length)
  ]
  // return paths.intermediate[i % paths.intermediate.length]
}

function onEnter(el: Element, done: () => void) {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      rotateX: -90
    },
    {
      opacity: 1,
      rotateX: 0,
      rotate: -12 + Math.random() * 24,
      delay: Math.random() * 0.3,
      duration: 0.2,
      onComplete: done
    }
  )
}

function onLeave(el: Element, done: () => void) {
  const index = +gsap.getProperty(el, 'i')
  gsap.to(el, {
    motionPath: {
      path: pathFromIndex(index)
    },
    opacity: 0,
    rotate: -180 + Math.random() * 360,
    duration: 0.2,
    onComplete: done
  })
}
</script>

<template>
  <div id="big-bang-button-animation">
    <TransitionGroup
      tag="div"
      class="bbb__text-container"
      @enter="onEnter"
      @leave="onLeave"
    >
      <span
        v-for="(symbol, index) in symbols"
        :key="index"
        :i="index"
        v-text="symbol"
      />
    </TransitionGroup>
  </div>
</template>

<style>
#big-bang-button-animation {
  overflow: hidden;
  pointer-events: none;
  @apply fixed w-full h-full top-0 left-0
         text-center uppercase text-7xl md:text-9xl font-extrabold;
}

#big-bang-button-animation > .bbb__text-container {
  width: fit-content;
  margin-left: auto;
  margin-right: 0.5em;
  perspective: 200px;
  transform-origin: right top;
  transform: rotate3d(0, 1, 0, 35deg) rotate(-12deg);
}

#big-bang-button-animation span {
  @apply inline-block mx-2;
}

#big-bang-button-animation span:nth-of-type(3n + 1) {
  @apply text-neutral-900 bg-neutral-50;
}
#big-bang-button-animation span:nth-of-type(4n + 3) {
  @apply bg-neutral-900 text-neutral-50;
}
</style>

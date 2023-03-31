<script lang="ts">
export default {
  name: 'DAnimationSpinner'
}
</script>

<script setup lang="ts">
const transformOrigin = '315 315'
defineProps({
  spinPeriod: {
    type: Number,
    default: 10
  },
  bladeWigglePeriod: {
    type: Number,
    default: 5
  }
})
</script>

<template>
  <svg
    class="spinner"
    viewBox="0 0 630 630"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      '--d-spinner-spin-period': spinPeriod + 's',
      '--d-spinner-blade-wiggle-period': bladeWigglePeriod + 's'
    }"
  >
    <defs>
      <DAnimationDefLetterD id="d-letter" />
      <use
        id="d-spinner-blade"
        href="#d-letter"
        class="d-animation-spinner__blade"
        :transform-origin="transformOrigin"
      />
      <g
        id="spinner"
        class="d-animation-spinner__spinner"
        :transform-origin="transformOrigin"
      >
        <use
          href="#d-spinner-blade"
          transform="rotate(0)"
          :transform-origin="transformOrigin"
        />
        <use
          href="#d-spinner-blade"
          transform="rotate(120)"
          :transform-origin="transformOrigin"
        />
        <use
          href="#d-spinner-blade"
          transform="rotate(240)"
          :transform-origin="transformOrigin"
        />
      </g>
    </defs>
    <use
      href="#spinner"
      transform="translate( -20 20 )"
      class="fill-black"
      :transform-origin="transformOrigin"
    />
    <use
      href="#spinner"
      class="fill-white"
      :transform-origin="transformOrigin"
    />
  </svg>
</template>

<style>
.d-animation-spinner__blade {
  --transform-static: scale(0.5) rotate(220deg);
  animation: d-spinner-blade-wiggle var(--d-spinner-blade-wiggle-period)
    ease-in-out infinite;
}
@keyframes d-spinner-blade-wiggle {
  0% {
    transform: translate(0px, -150px) var(--transform-static);
  }
  50% {
    transform: translate(0px, -120px) var(--transform-static);
  }
  100% {
    transform: translate(0px, -150px) var(--transform-static);
  }
}
.d-animation-spinner__spinner {
  animation: d-spinner-spin var(--d-spinner-spin-period) linear infinite;
}
@keyframes d-spinner-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>

<script lang="ts">
export default {
  name: 'DAnimationFloatingLetter'
}
</script>

<script setup lang="ts">
defineProps({
  floatPeriod: {
    type: Number,
    default: 5
  },
  pathClass: {
    type: [String, Object as () => Record<string, boolean>],
    default: ''
  }
})
</script>

<template>
  <svg
    viewBox="0 0 630 630"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      '--d-floating-letter-float-period': floatPeriod + 's'
    }"
  >
    <DAnimationDefLetterD
      class="d-animation-floating-letter"
      :class="pathClass"
    />
  </svg>
</template>

<style>
.d-animation-floating-letter {
  animation: d-animation-floating-letter-float
    var(--d-floating-letter-float-period) ease-in-out infinite;
  transform-origin: 315px 315px;
}

@keyframes d-animation-floating-letter-float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 40px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>

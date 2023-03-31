<script lang="ts">
export default {
  name: 'DAnimationHypnosis'
}
</script>

<script setup lang="ts">
defineProps({
  wigglePeriod: {
    type: Number,
    default: 10
  },
  delay: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <svg
    viewBox="0 0 630 630"
    xmlns="http://www.w3.org/2000/svg"
    class="d-animation-hypnosis"
    :style="{
      '--d-hypnosis-wiggle-period': wigglePeriod + 's',
      '--d-hypnosis-delay': delay + 's'
    }"
  >
    <defs>
      <DAnimationDefLetterD id="d-letter" />
      <use id="d-hypnosis-section" href="#d-letter" />
    </defs>
    <use href="#d-hypnosis-section" class="d-animation-hypnosis__section" />
    <use href="#d-hypnosis-section" class="d-animation-hypnosis__section" />
    <use href="#d-hypnosis-section" class="d-animation-hypnosis__section" />
    <use href="#d-hypnosis-section" class="d-animation-hypnosis__section" />
    <use href="#d-hypnosis-section" class="d-animation-hypnosis__section" />
    <use href="#d-hypnosis-section" class="d-animation-hypnosis__section" />
  </svg>
</template>

<style>
.d-animation-hypnosis > .d-animation-hypnosis__section {
  --hypnosis-section-min-posion: scale(
    calc(var(--hypnosis-section-count) / 12)
  );
  --hypnosis-section-max-posion: translate(
    calc(var(--hypnosis-section-count) / 6)
  );
  transform: var(--hypnosis-section-min-posion);
  transform-origin: 315px 315px;
  animation: d-animation-hypnosis-section-wiggle var(--d-hypnosis-wiggle-period)
    ease-in-out infinite alternate
    calc((var(--hypnosis-section-count) - 6) * -1 * var(--d-hypnosis-delay));
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(2n + 1) {
  @apply fill-white;
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(2) {
  --hypnosis-section-count: 1;
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(3) {
  --hypnosis-section-count: 2;
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(4) {
  --hypnosis-section-count: 3;
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(5) {
  --hypnosis-section-count: 4;
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(6) {
  --hypnosis-section-count: 5;
}

.d-animation-hypnosis > .d-animation-hypnosis__section:nth-child(7) {
  --hypnosis-section-count: 6;
}

@keyframes d-animation-hypnosis-section-wiggle {
  0% {
    transform: var(--hypnosis-section-min-posion);
  }
  50% {
    transform: var(--hypnosis-section-max-posion);
  }
  100% {
    transform: var(--hypnosis-section-min-posion);
  }
}
</style>

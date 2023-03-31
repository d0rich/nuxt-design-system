<script lang="ts">
export default {
  name: 'DAnimationAccordion'
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
    viewBox="0 0 630 210"
    xmlns="http://www.w3.org/2000/svg"
    class="d-animation-accordion"
    :style="{
      '--d-accordion-wiggle-period': wigglePeriod + 's',
      '--d-accordion-delay': delay + 's'
    }"
  >
    <defs>
      <DAnimationDefLetterD id="d-letter" />
      <use id="d-accordion-section" href="#d-letter" transform="scale(0.33)" />
    </defs>
    <use href="#d-accordion-section" class="d-animation-accordion__section" />
    <use href="#d-accordion-section" class="d-animation-accordion__section" />
    <use href="#d-accordion-section" class="d-animation-accordion__section" />
    <use href="#d-accordion-section" class="d-animation-accordion__section" />
    <use href="#d-accordion-section" class="d-animation-accordion__section" />
    <use href="#d-accordion-section" class="d-animation-accordion__section" />
  </svg>
</template>

<style>
.d-animation-accordion > .d-animation-accordion__section {
  --accordion-section-min-posion: translate(
    calc(var(--accordion-section-count) * 50px),
    0
  );
  --accordion-section-max-posion: translate(
    calc(var(--accordion-section-count) * 70px),
    0
  );
  transform: var(--accordion-section-min-posion);
  animation: d-animation-accordion-section-wiggle
    var(--d-accordion-wiggle-period) ease-in-out infinite alternate
    calc((var(--accordion-section-count) - 1) * var(--d-accordion-delay));
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(2n + 1) {
  @apply fill-white;
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(2) {
  --accordion-section-count: 1;
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(3) {
  --accordion-section-count: 2;
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(4) {
  --accordion-section-count: 3;
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(5) {
  --accordion-section-count: 4;
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(6) {
  --accordion-section-count: 5;
}

.d-animation-accordion > .d-animation-accordion__section:nth-child(7) {
  --accordion-section-count: 6;
}

@keyframes d-animation-accordion-section-wiggle {
  0% {
    transform: var(--accordion-section-min-posion);
  }
  50% {
    transform: var(--accordion-section-max-posion);
  }
  100% {
    transform: var(--accordion-section-min-posion);
  }
}
</style>

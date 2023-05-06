<script lang="ts">
export default {
  name: 'DCard'
}
</script>

<script setup lang="ts">
defineProps({
  mode: {
    type: String as () => 'default' | 'homepage-story' | 'homepage-skills',
    default: 'default'
  },
  dense: Boolean
})
</script>

<template>
  <DWrapShape
    :shape-class="{
      card__bg: !dense,
      'card__bg--dense': dense
    }"
    :class="{
      'card--homepage-story force-light': mode === 'homepage-story',
      'card--homepage-skills force-light': mode === 'homepage-skills',
      card: mode === 'default'
    }"
  >
    <div
      :class="{
        card__content: !dense,
        'card__content--dense': dense
      }"
    >
      <slot />
    </div>
  </DWrapShape>
</template>

<style>
:root {
  --d-card-x-ray--idle__position: calc(60vw - 50vh) -25vh / auto 150vh no-repeat
    fixed;
  --d-card-x-ray--idle__color: url('../../../assets/img/character/idle-shape-yellow-400.svg')
    var(--d-card-x-ray--idle__position);
  --d-card-x-ray--idle__white: url('../../../assets/img/character/idle-shape-white.svg')
    var(--d-card-x-ray--idle__position);
  --d-card-x-ray--action__position: center / auto 100vh no-repeat fixed;
  --d-card-x-ray--action__color: url('../../../assets/img/character/action-shape-cyan-400.svg')
    var(--d-card-x-ray--action__position);
  --d-card-x-ray--action__white: url('../../../assets/img/character/action-shape-white.svg')
    var(--d-card-x-ray--action__position);
}
</style>

<style>
.card__content,
.card__content--dense {
  @apply md:text-lg;
}

.card__content {
  padding: var(--shape-card-padding);
  @apply print:p-0;
}

.card__content--dense {
  padding: var(--shape-card--dense__padding);
  @apply print:p-0;
}

.card--homepage-story .card__content,
.card--homepage-skills .card__content {
  @apply text-black;
}

.force-light :is(.card__bg, .card__bg--dense) {
  @apply !bg-white dark:bg-white;
}

.card--homepage-story :is(.card__bg, .card__bg--dense) {
  background: var(--d-card-x-ray--idle__color);
}

.card--homepage-skills :is(.card__bg, .card__bg--dense) {
  background: var(--d-card-x-ray--action__color);
}

.card__bg,
.card__bg--dense {
  @apply bg-white dark:bg-neutral-700
        print:bg-none;
}

.card__bg {
  clip-path: var(--shape-card);
}

.card__bg--dense {
  clip-path: var(--shape-card--dense);
}

@media print {
  .card__bg {
    clip-path: none !important;
    background: none !important;
  }
}
</style>

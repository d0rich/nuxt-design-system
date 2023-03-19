<template>
  <DWrapShape
    shape-class="card__bg"
    :class="{
      'card--homepage-story force-light': mode === 'homepage-story',
      'card--homepage-skills force-light': mode === 'homepage-skills',
      card: mode === 'default'
    }"
  >
    <div class="card__content">
      <slot />
    </div>
  </DWrapShape>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    mode: {
      type: String as () => 'default' | 'homepage-story' | 'homepage-skills',
      default: 'default'
    }
  },
  setup() {}
})
</script>

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
.card__content {
  padding: var(--shape-card-padding);
  @apply md:text-lg print:p-0;
}

.card--homepage-story .card__content,
.card--homepage-skills .card__content {
  @apply text-black;
}

.force-light .card__bg {
  @apply dark:bg-white;
}

.card--homepage-story .card__bg {
  background: var(--d-card-x-ray--idle__color);
  clip-path: var(--shape-card);
}

.card--homepage-skills .card__bg {
  background: var(--d-card-x-ray--action__color);
  clip-path: var(--shape-card);
}

.card__bg {
  clip-path: var(--shape-card);
  @apply bg-white dark:bg-neutral-700
        print:bg-none;
}

@media print {
  .card__bg {
    clip-path: none !important;
    background: none !important;
  }
}
</style>

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
  background: url('../../../assets/img/character/idle-shape-yellow-400.svg') fixed;
  background-position-x: calc(60vw - 50vh);
  background-position-y: -25vh;
  background-size: auto 150vh;
  background-repeat: no-repeat;
  clip-path: var(--shape-card);
}

.card--homepage-skills .card__bg {
  background: url('../../../assets/img/character/action-shape-cyan-400.svg') fixed;
  background-position: center;
  background-size: auto 100vh;
  background-repeat: no-repeat;
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

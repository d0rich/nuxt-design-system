<script lang="ts">
export default {
  name: 'DCardTitle'
}
</script>

<template>
  <div class="card__title">
    <DWrapShape
      class="card__title__content"
      shape-class="card__title__content__shape"
    >
      <h3 class="card__title__content__text">
        <slot />
      </h3>
    </DWrapShape>
    <span class="ml-2 print:text-neutral-600">
      <slot name="extra" />
    </span>
  </div>
</template>

<style>
.card__title {
  @apply text-2xl md:text-3xl font-semibold -mt-5 mb-3
        print:text-base print:ml-0 print:mb-0;
}

.card__title__content {
  @apply inline-block -ml-10
        print:ml-0;
}

.card__title__content__text {
  @apply p-5 text-white dark:text-black
        print:p-0 print:text-inherit;
}

.card__title__content__shape {
  clip-path: polygon(
    0.4em 0.4em,
    100% 0%,
    calc(100% - 0.4em) calc(100% - 0.4em),
    0% 100%
  );
  @apply bg-black dark:bg-white
        print:bg-transparent;
}

.force-light .card__title__content__text {
  @apply dark:text-white;
}
.force-light .card__title__content__shape {
  @apply dark:bg-black;
}

@media print {
  .card__title__content__shape {
    clip-path: none;
  }
}
</style>

<script lang="ts">
export default {
  name: 'DWrapShape'
}
</script>

<script setup lang="ts">
export type HighlightVariant =
  | 'negative-tile'
  | 'list-item'
  | 'negative-list-item'

const props = defineProps({
  linkExact: Boolean,
  noPassiveLink: Boolean,
  variant: {
    type: String as () => HighlightVariant,
    default: 'negative-tile'
  },
  tag: {
    type: String,
    default: 'div'
  }
})

const currentComponent = computed(() => {
  // @ts-ignore
  if (props.to || props.href) return resolveComponent('NuxtLink')
  return props.tag
})
</script>

<template>
  <DWrapShape>
    <Component
      v-bind="props"
      :is="currentComponent"
      class="d-focus-hl"
      :class="{
        'd-focus-hl--exact': linkExact,
        'd-focus-hl--not-exact': !linkExact,
        'd-focus-hl--no-passive-link': noPassiveLink
      }"
    >
      <div
        v-if="variant === 'negative-tile'"
        class="d-focus-hl__hl--negative-tile"
      />
      <div
        v-else-if="variant === 'list-item'"
        class="d-focus-hl__hl--list-item"
      />
      <div
        v-else-if="variant === 'negative-list-item'"
        class="d-focus-hl__hl--negative-list-item"
      />
      <slot />
    </Component>
  </DWrapShape>
</template>

<!-- common -->
<style>
.d-focus-hl {
  @apply relative;
}
</style>

<!-- negative-tile -->
<style>
.d-focus-hl:has(.d-focus-hl__hl--negative-tile) {
  @apply w-fit;
}

.d-focus-hl > .d-focus-hl__hl--negative-tile {
  width: 0%;
  height: 0%;
  top: 50%;
  left: 50%;
  content: '';
  opacity: 0;
  pointer-events: none;
  @apply absolute backdrop-invert transition-all;
}

.d-focus-hl:hover > .d-focus-hl__hl--negative-tile,
*:focus .d-focus-hl__hl--negative-tile {
  opacity: 1;
  animation: hl--negative-tile-animation linear 1s infinite;
}

.d-focus-hl:hover > .d-focus-hl__hl--negative-tile {
  width: 110%;
  height: 130%;
  top: -15%;
  left: -5%;
}

*:focus .d-focus-hl__hl--negative-tile {
  width: 140% !important;
  height: 200% !important;
  top: -50% !important;
  left: -20% !important;
}

.router-link-active
  .d-focus-hl--not-exact:not(.d-focus-hl--no-passive-link)
  .d-focus-hl__hl--negative-tile,
.router-link-exact-active
  .d-focus-hl--exact:not(.d-focus-hl--no-passive-link)
  .d-focus-hl__hl--negative-tile {
  opacity: 1;
  width: 120% !important;
  height: 120% !important;
  top: -10% !important;
  left: -10% !important;
}

@keyframes hl--negative-tile-animation {
  0%,
  100% {
    transform: skew(0deg) rotate(12deg);
  }
  50% {
    transform: skew(-40deg) rotate(-28deg);
  }
}
</style>

<!-- list-item -->
<style>
.d-focus-hl:has(.d-focus-hl__hl--list-item) {
  @apply w-full;
}

.d-focus-hl > .d-focus-hl__hl--list-item {
  width: 0%;
  height: 200%;
  top: -50%;
  left: 0;
  content: '';
  clip-path: polygon(1rem 0, 0% 100%, 100% 50%);
  @apply absolute bg-red-600  transition-all -z-10;
}

.d-focus-hl:hover > .d-focus-hl__hl--list-item,
*:focus .d-focus-hl__hl--list-item {
  opacity: 1;
  animation: hl--list-item-animation 0.3s infinite;
}

.d-focus-hl:hover > .d-focus-hl__hl--list-item {
  width: 200%;
  height: 130%;
  top: -15%;
  left: -5%;
}

*:focus .d-focus-hl__hl--list-item {
  width: 220% !important;
  height: 200% !important;
  top: -50% !important;
  left: -5% !important;
}

.router-link-active
  .d-focus-hl--not-exact:not(.d-focus-hl--no-passive-link)
  .d-focus-hl__hl--list-item,
.router-link-exact-active
  .d-focus-hl--exact:not(.d-focus-hl--no-passive-link)
  .d-focus-hl__hl--list-item {
  opacity: 1;
  width: 220% !important;
  height: 200% !important;
  top: -50% !important;
  left: -5% !important;
}

@keyframes hl--list-item-animation {
  0%,
  100% {
    clip-path: polygon(1rem 0, 0% 100%, 90% 50%);
  }
  50% {
    clip-path: polygon(1rem 10%, 0% 90%, 90% 50%);
  }
}
</style>

<!-- negative-list-item -->
<style>
.d-focus-hl:has(.d-focus-hl__hl--negative-list-item) {
  @apply w-full;
}

.d-focus-hl > .d-focus-hl__hl--negative-list-item {
  width: 0%;
  height: 200%;
  top: -50%;
  left: 0;
  content: '';
  clip-path: polygon(1rem 0, 0% 100%, 100% 50%);
  @apply absolute backdrop-invert transition-all;
}

.d-focus-hl:hover > .d-focus-hl__hl--negative-list-item,
*:focus .d-focus-hl__hl--negative-list-item {
  opacity: 1;
  animation: hl--negative-list-item-animation 0.3s infinite;
}

.d-focus-hl:hover > .d-focus-hl__hl--negative-list-item {
  width: 200%;
  height: 130%;
  top: -15%;
  left: -5%;
}

*:focus .d-focus-hl__hl--negative-list-item {
  width: 220% !important;
  height: 200% !important;
  top: -50% !important;
  left: -5% !important;
}

.router-link-active
  .d-focus-hl--not-exact:not(.d-focus-hl--no-passive-link)
  .d-focus-hl__hl--negative-list-item,
.router-link-exact-active
  .d-focus-hl--exact:not(.d-focus-hl--no-passive-link)
  .d-focus-hl__hl--negative-list-item {
  opacity: 1;
  width: 220% !important;
  height: 200% !important;
  top: -50% !important;
  left: -5% !important;
}

@keyframes hl--negative-list-item-animation {
  0%,
  100% {
    clip-path: polygon(1rem 0, 0% 100%, 90% 50%);
  }
  50% {
    clip-path: polygon(1rem 10%, 0% 90%, 90% 50%);
  }
}
</style>

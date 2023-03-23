<script setup lang="ts">
import FocusHighlight, { HighlightVariant } from './wrap/FocusHighlight.vue'

const props = defineProps({
  to: {
    type: String,
    default: undefined
  },
  href: {
    type: String,
    default: undefined
  },
  exact: Boolean,
  noPassiveHl: Boolean,
  tag: {
    type: String,
    default: 'button'
  },
  highlight: {
    type: String as () => HighlightVariant,
    default: undefined
  }
})

const currentComponent = computed(() => {
  if (props.to || props.href) return resolveComponent('NuxtLink')
  return props.tag
})
</script>

<template>
  <Component :is="currentComponent" class="d-btn" v-bind="props">
    <FocusHighlight
      :variant="highlight"
      :link-exact="exact"
      :no-passive-link="noPassiveHl"
    >
      <slot />
    </FocusHighlight>
  </Component>
</template>

<style>
.d-btn {
  @apply font-extrabold uppercase -rotate-6 select-none relative inline-block;
}
</style>

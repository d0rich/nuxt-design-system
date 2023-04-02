<script lang="ts">
import { type HighlightVariant } from './wrap'

export default {
  name: 'DBtn'
}
</script>

<script setup lang="ts">
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
  noRotate: Boolean,
  tag: {
    type: String,
    default: 'button'
  },
  highlight: {
    type: String as () => HighlightVariant,
    default: undefined
  },
  colorClass: [String, Object as () => Record<string, boolean>]
})

const currentComponent = computed(() => {
  if (props.to || props.href) return resolveComponent('NuxtLink')
  return props.tag
})
</script>

<template>
  <Component
    :is="currentComponent"
    class="d-btn"
    :class="{
      '-rotate-6': !noRotate
    }"
    v-bind="props"
  >
    <DWrapFocusHighlight
      :variant="highlight"
      :link-exact="exact"
      :no-passive-link="noPassiveHl"
      :color-class="colorClass"
    >
      <slot />
    </DWrapFocusHighlight>
  </Component>
</template>

<style>
.d-btn {
  @apply font-extrabold uppercase select-none relative inline-block;
}
</style>

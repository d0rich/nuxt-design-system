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
  /**
   * If true, the highlight will be shown only if the link is exact string a URL.
   */
  exact: Boolean,
  /**
   * Turn off the highlight for active links.
   */
  noPassiveHighlight: Boolean,
  /**
   * Turn on the highlight even if the link is not active.
   */
  active: Boolean,
  noRotate: Boolean,
  tag: {
    type: String,
    default: 'button'
  },
  highlight: {
    type: String as () => HighlightVariant,
    default: undefined
  },
  colorClass: [String, Object as () => Record<string, boolean>],
  textTransform: {
    type: String as () => 'uppercase' | 'capitalize' | 'lowercase' | 'none',
    default: 'uppercase'
  }
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
      '-rotate-6': !noRotate,
      uppercase: textTransform === 'uppercase',
      capitalize: textTransform === 'capitalize',
      lowercase: textTransform === 'lowercase'
    }"
    v-bind="props"
  >
    <DWrapFocusHighlight
      :variant="highlight"
      :link-exact="exact"
      :no-passive-link="noPassiveHighlight"
      :color-class="colorClass"
      :active="active"
    >
      <slot />
    </DWrapFocusHighlight>
  </Component>
</template>

<style>
.d-btn {
  @apply font-extrabold select-none relative inline-block;
}
</style>

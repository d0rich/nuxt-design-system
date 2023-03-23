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

<script lang="ts">
import FocusHighlight, { HighlightVariant } from './wrap/FocusHighlight.vue'

export default defineComponent({
  name: 'DButton',
  components: {
    FocusHighlight
  },
  props: {
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
  },
  setup(props) {
    const NuxtLink = resolveComponent('NuxtLink')
    return {
      currentComponent: computed(() => {
        if (props.to || props.href) return NuxtLink
        return props.tag
      }),
      props
    }
  }
})
</script>

<style>
.d-btn {
  @apply font-extrabold uppercase -rotate-6 select-none relative inline-block;
}
</style>

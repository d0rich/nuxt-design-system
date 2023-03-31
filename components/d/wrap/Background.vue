<script lang="ts">
import { type StyleValue } from 'vue'

export default {
  name: 'DWrapBackground'
}
</script>

<script setup lang="ts">
defineProps({
  overlayClass: {
    type: [String, Object as () => Record<string, boolean>],
    default: ''
  },
  overlayStyle: {
    type: Object as () => StyleValue,
    default: () => {}
  },
  dotsClass: {
    type: [String, Object as () => Record<string, boolean>],
    default: ''
  },
  dotsStyle: {
    type: Object as () => StyleValue,
    default: () => {}
  },
  dots: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'div'
  }
})
</script>

<template>
  <Component :is="tag" class="mbg__main-container">
    <div class="mbg__relative-container">
      <div class="mbg__layer" :class="overlayClass" :style="overlayStyle" />
      <div class="mbg__layer">
        <slot name="svg" />
      </div>
      <div
        v-if="dots"
        class="mbg__layer mbg__dots"
        :class="dotsClass"
        :style="dotsStyle"
      />
      <div class="mbg__content">
        <slot />
      </div>
    </div>
  </Component>
</template>

<style>
.mbg__main-container {
  isolation: isolate;
}
.mbg__relative-container {
  @apply relative w-full h-full;
}
.mbg__layer {
  inset: 0;
  @apply absolute;
}
.mbg__dots {
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>');
  background-size: 2rem;
}
.mbg__content {
  @apply relative z-[1];
}
</style>

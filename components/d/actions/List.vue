<script setup lang="ts">
export type ActionListItem<TEmit = any> = {
  title: string
  emit?: TEmit
  attrs?: {
    to?: string
    href?: string
    target?: '_blank' | '_self' | '_parent' | '_top' | string
    [k: string]: any
  }
}

defineEmits(['actionFocus', 'actionUnfocus', 'actionChoose'])

defineProps({
  actions: {
    type: Array as () => ActionListItem[],
    default: () => []
  },
  listClass: {
    type: [String, Object as () => Record<string, boolean>],
    default: ''
  }
})
</script>

<template>
  <DWrapShape
    shape-class="dark:bg-neutral-900 dark:bg-opacity-80 backdrop-blur"
    :shape-style="{
      clipPath: 'polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)'
    }"
  >
    <TransitionGroup
      name="actions"
      tag="ul"
      class="p-7 relative [&_button]:font-sans [&_button]:font-bold [&_button]:text-left font-sans font-bold"
      :class="listClass"
    >
      <li v-for="action in actions" :key="action.title">
        <DWrapFocusHighlight
          v-bind="action.attrs"
          tag="button"
          variant="negative-list-item"
          no-passive-hl
          @click="$emit('actionChoose', action.emit)"
          @mouseenter="$emit('actionFocus', action.emit)"
          @touchstart="$emit('actionFocus', action.emit)"
          @focusin="$emit('actionFocus', action.emit)"
          @mouseleave="$emit('actionUnfocus', action.emit)"
          @touchend="$emit('actionUnfocus', action.emit)"
          @focusout="$emit('actionUnfocus', action.emit)"
        >
          {{ action.title }}
        </DWrapFocusHighlight>
      </li>
    </TransitionGroup>
  </DWrapShape>
</template>

<style></style>

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
      class="p-7 relative"
      :class="listClass"
    >
      <li v-for="action in actions" :key="action.title">
        <DBtn
          :to="action.to"
          tag="button"
          highlight="negative-list-item"
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
        </DBtn>
      </li>
    </TransitionGroup>
  </DWrapShape>
</template>

<script lang="ts">
export type ActionListItem<TEmit = any> = {
  title: string
  to?: string
  emit?: TEmit
}

export default defineComponent({
  props: {
    actions: {
      type: Array as () => ActionListItem[],
      default: () => []
    },
    listClass: {
      type: [String, Object as () => Record<string, boolean>],
      default: ''
    }
  },
  emits: ['actionFocus', 'actionUnfocus', 'actionChoose'],
  setup() {}
})
</script>

<style></style>

<template>
  <div>
    <Transition name="character" mode="out-in">
      <img v-if="pose === 'idle'" :src="getAsset('idle')" />
      <img v-else-if="pose === 'action'" :src="getAsset('action')" />
      <img v-else-if="pose === 'profi'" :src="getAsset('profi')" />
    </Transition>
  </div>
</template>

<script lang="ts">
import idle from '~~/assets/img/character/idle.webp'
import idleColor from '~~/assets/img/character/idle-color.webp'
import idleOutline from '~~/assets/img/character/idle-outline.webp'
import idleOutlineColor from '~~/assets/img/character/idle-outline-color.webp'
import action from '~~/assets/img/character/action.webp'
import actionColor from '~~/assets/img/character/action-color.webp'
import actionOutline from '~~/assets/img/character/action-outline.webp'
import actionOutlineColor from '~~/assets/img/character/action-outline-color.webp'
import profi from '~~/assets/img/character/profi.webp'
import profiColor from '~~/assets/img/character/profi-color.webp'
import profiOutline from '~~/assets/img/character/profi-outline.webp'
import profiOutlineColor from '~~/assets/img/character/profi-outline-color.webp'

export type CharacterPose = 'idle' | 'action' | 'profi'

export default defineComponent({
  props: {
    pose: {
      type: String as () => CharacterPose,
      required: true
    },
    outline: Boolean,
    color: Boolean
  },
  setup(props) {
    const assets = {
      idle,
      idleColor,
      idleOutline,
      idleOutlineColor,
      action,
      actionColor,
      actionOutline,
      actionOutlineColor,
      profi,
      profiColor,
      profiOutline,
      profiOutlineColor
    }
    return {
      assets,
      getAsset: (pose: CharacterPose) =>
        assets[
          `${pose}${props.outline ? 'Outline' : ''}${
            props.color ? 'Color' : ''
          }`
        ]
    }
  }
})
</script>

<style scoped>
img {
  @apply w-full h-auto;
}

.character-enter-active,
.character-leave-active {
  @apply transition-all;
}

.character-enter-from,
.character-leave-to {
  @apply opacity-0;
}
</style>

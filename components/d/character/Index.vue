<script setup lang="ts">
import KUTE from 'kute.js'
import gsap from 'gsap'

import idle from '../../../assets/img/character/idle.webp'
import idleColor from '../../../assets/img/character/idle-color.webp'
import idleOutline from '../../../assets/img/character/idle-outline.webp'
import idleOutlineColor from '../../../assets/img/character/idle-outline-color.webp'
import action from '../../../assets/img/character/action.webp'
import actionColor from '../../../assets/img/character/action-color.webp'
import actionOutline from '../../../assets/img/character/action-outline.webp'
import actionOutlineColor from '../../../assets/img/character/action-outline-color.webp'
import profi from '../../../assets/img/character/profi.webp'
import profiColor from '../../../assets/img/character/profi-color.webp'
import profiOutline from '../../../assets/img/character/profi-outline.webp'
import profiOutlineColor from '../../../assets/img/character/profi-outline-color.webp'

export type CharacterPose = 'idle' | 'action' | 'profi'

const props = defineProps({
  pose: {
    type: String as () => CharacterPose,
    required: true
  },
  outline: Boolean,
  color: Boolean
})

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

function getAsset(pose: CharacterPose) {
  return assets[
    `${pose}${props.outline ? 'Outline' : ''}${props.color ? 'Color' : ''}`
  ]
}

const shapeToAnimate = ref<ComponentPublicInstance | null>(null)
const shapeIdle = ref<ComponentPublicInstance | null>(null)
const shapeAction = ref<ComponentPublicInstance | null>(null)
const shapeProfi = ref<ComponentPublicInstance | null>(null)

watch(
  () => props.pose,
  (newPose, oldPose) => {
    console.log(oldPose, newPose)
    const poseShapeMap: Record<CharacterPose, SVGPathElement> = {
      idle: shapeIdle.value?.$el,
      action: shapeAction.value?.$el,
      profi: shapeProfi.value?.$el
    }
    gsap.fromTo(
      shapeToAnimate.value?.$el,
      { morphSVG: poseShapeMap[oldPose] },
      { morphSVG: poseShapeMap[newPose], duration: .2 }
    )
    // KUTE.fromTo(
    //   shapeToAnimate.value?.$el,
    //   { path: poseShapeMap[oldPose] },
    //   { path: poseShapeMap[newPose] },
    //   {
    //     duration: 200,
    //     easing: KUTE.Easing.easingCubicInOut
    //   }
    // ).start()
  }
)
</script>

<template>
  <div>
    <div class="relative isolate">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <DCharacterShapeIdle id="shape-idle" ref="shapeIdle" />
          <DCharacterShapeAction id="shape-action" ref="shapeAction" />
          <DCharacterShapeProfi id="shape-profi" ref="shapeProfi" />
        </defs>
        <DCharacterShapeIdle
          id="shape-to-animate"
          ref="shapeToAnimate"
          class="fill-white"
        />
      </svg>
      <!-- <Transition name="character" mode="out-in">
        <img v-if="pose === 'idle'" :src="getAsset('idle')" />
        <img v-else-if="pose === 'action'" :src="getAsset('action')" />
        <img v-else-if="pose === 'profi'" :src="getAsset('profi')" />
      </Transition> -->
    </div>
  </div>
</template>

<style scoped>
img {
  @apply w-full h-auto absolute inset-0 z-10;
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

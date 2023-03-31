<script lang="ts">
export default {
  name: 'DCharacter'
}
</script>

<script setup lang="ts">
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
  color: Boolean,
  noShape: Boolean,
  noImage: Boolean,
  shapeClass: {
    type: [String, Object as () => Record<string, boolean>],
    default: () => 'fill-white'
  }
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

let initialSvgPath: ReturnType<typeof resolveComponent>
const useHref = ref(`#${props.pose}-shape`)

switch (props.pose) {
  case 'idle':
    initialSvgPath = resolveComponent('DCharacterShapeIdle')
    break
  case 'profi':
    initialSvgPath = resolveComponent('DCharacterShapeProfi')
    break
  case 'action':
    initialSvgPath = resolveComponent('DCharacterShapeAction')
    break
}

const shapeToAnimate = ref<ComponentPublicInstance | null>(null)
const shapeIdle = ref<ComponentPublicInstance | null>(null)
const shapeAction = ref<ComponentPublicInstance | null>(null)
const shapeProfi = ref<ComponentPublicInstance | null>(null)

watch(
  () => props.pose,
  (newPose, oldPose) => {
    if (props.noShape) return
    const poseShapeMap: Record<CharacterPose, SVGPathElement> = {
      idle: shapeIdle.value?.$el,
      action: shapeAction.value?.$el,
      profi: shapeProfi.value?.$el
    }
    if (isMorphSVGPluginInstalled()) {
      gsap.fromTo(
        shapeToAnimate.value?.$el,
        { morphSVG: poseShapeMap[oldPose] },
        { morphSVG: poseShapeMap[newPose], duration: 0.2 }
      )
    } else {
      useHref.value = `#${newPose}-shape`
    }
  }
)
</script>

<template>
  <div>
    <div class="relative isolate w-full h-full">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <defs v-if="!noShape">
          <DCharacterShapeIdle id="idle-shape" ref="shapeIdle" />
          <DCharacterShapeAction id="action-shape" ref="shapeAction" />
          <DCharacterShapeProfi id="profi-shape" ref="shapeProfi" />
        </defs>
        <g v-if="!noShape">
          <component
            :is="initialSvgPath"
            v-show="isMorphSVGPluginInstalled()"
            ref="shapeToAnimate"
            :class="shapeClass"
          />
          <use
            v-show="!isMorphSVGPluginInstalled()"
            :class="shapeClass"
            :href="useHref"
          />
        </g>
      </svg>
      <Transition v-if="!noImage" name="character" mode="out-in">
        <img v-if="pose === 'idle'" :src="getAsset('idle')" />
        <img v-else-if="pose === 'action'" :src="getAsset('action')" />
        <img v-else-if="pose === 'profi'" :src="getAsset('profi')" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
svg {
  @apply w-full h-full;
}

img {
  @apply w-full h-auto absolute inset-0 my-auto z-10;
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

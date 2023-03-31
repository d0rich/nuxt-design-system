<script lang="ts">
import spider from '../../assets/img/masks/spider.webp'
import spiderColor from '../../assets/img/masks/spider-color.webp'
import spiderOutline from '../../assets/img/masks/spider-outline.webp'
import spiderOutlineColor from '../../assets/img/masks/spider-outline-color.webp'
import owl from '../../assets/img/masks/owl.webp'
import owlColor from '../../assets/img/masks/owl-color.webp'
import owlOutline from '../../assets/img/masks/owl-outline.webp'
import owlOutlineColor from '../../assets/img/masks/owl-outline-color.webp'
import wolf from '../../assets/img/masks/wolf.webp'
import wolfColor from '../../assets/img/masks/wolf-color.webp'
import wolfOutline from '../../assets/img/masks/wolf-outline.webp'
import wolfOutlineColor from '../../assets/img/masks/wolf-outline-color.webp'

export default {
  name: 'DMask'
}
</script>

<script setup lang="ts">
export type MaskType = 'wolf' | 'owl' | 'spider'

const props = defineProps({
  mask: {
    type: String as () => MaskType,
    required: true
  },
  outline: Boolean,
  color: Boolean
})

const assets = {
  spider,
  spiderColor,
  spiderOutline,
  spiderOutlineColor,
  owl,
  owlColor,
  owlOutline,
  owlOutlineColor,
  wolf,
  wolfColor,
  wolfOutline,
  wolfOutlineColor
}

function getAsset(mask: MaskType) {
  return assets[
    `${mask}${props.outline ? 'Outline' : ''}${props.color ? 'Color' : ''}`
  ]
}
</script>

<template>
  <div>
    <Transition name="mask" mode="out-in">
      <img v-if="mask === 'spider'" :src="getAsset('spider')" />
      <img v-else-if="mask === 'owl'" :src="getAsset('owl')" />
      <img v-else-if="mask === 'wolf'" :src="getAsset('wolf')" />
    </Transition>
  </div>
</template>

<style scoped>
img {
  @apply w-full h-full;
}

.mask-enter-active,
.mask-leave-active {
  @apply transition-all;
}

.mask-enter-from {
  @apply opacity-0 -translate-x-10;
}

.mask-leave-to {
  @apply opacity-0 translate-x-10;
}
</style>

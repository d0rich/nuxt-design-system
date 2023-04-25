<script setup lang="ts">
import { CharacterPose, MaskType } from '~~/../types'

const pose = ref<CharacterPose>('idle')
const characterImage = ref<boolean>(true)
const characterOutline = ref<boolean>(false)
const characterColor = ref<boolean>(false)
onMounted(() => {
  const poses: CharacterPose[] = ['idle', 'action', 'profi']
  setInterval(() => {
    pose.value = poses[Math.floor(Math.random() * poses.length)]
  }, 1000)
  setInterval(() => {
    characterImage.value = !characterImage.value
  }, 3000)
  setInterval(() => {
    characterOutline.value = !characterOutline.value
  }, 5000)
  setInterval(() => {
    characterColor.value = !characterColor.value
  }, 2000)
})

const mask = ref<MaskType>('owl')
const maskOutline = ref<boolean>(false)
const maskColor = ref<boolean>(false)
onMounted(() => {
  const masks: MaskType[] = ['owl', 'spider', 'wolf']
  setInterval(() => {
    mask.value = masks[Math.floor(Math.random() * masks.length)]
  }, 1000)
  setInterval(() => {
    maskOutline.value = !maskOutline.value
  }, 5000)
  setInterval(() => {
    maskColor.value = !maskColor.value
  }, 2000)
})
</script>

<template>
  <div class="bg-slate-700 overflow-hidden">
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>Identica</h1>
      <div class="grid md:grid-cols-2 gap-5 items-center">
        <DCard class="max-w-md">
          <DCardTitle>Character</DCardTitle>

          Some elements are specific for my projects. For example, this
          character variations.
        </DCard>
        <DCharacter
          :pose="pose"
          :no-image="characterImage"
          :outline="characterOutline"
          :color="characterColor"
        />
        <DCard class="max-w-md">
          <DCardTitle>Masks</DCardTitle>

          It also includes some masks. These are symbolising different sides of
          my personality.
        </DCard>
        <DMask :mask="mask" :color="maskColor" :outline="maskOutline" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold text-white;
}
</style>

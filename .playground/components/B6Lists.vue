<script setup lang="ts">
import type { CharacterPose, ActionFanItem, ActionListItem } from '../../types'
const pose = ref<CharacterPose>('action')
const listItems = ref<ActionListItem<CharacterPose>[]>([
  { title: 'Idle', emit: 'idle' },
  { title: 'Action', emit: 'action' },
  { title: 'Profi', emit: 'profi' }
])
const fanItems = ref<ActionFanItem<CharacterPose>[]>([
  { title: 'Idle', emit: 'idle' }
])
</script>

<template>
  <DWrapBackground
    class="font-dialog bg-[url('~/assets/img/bg/skills.png')] bg-cover bg-fixed bg-center overflow-hidden dark text-white"
    overlay-class="backdrop-saturate-50 bg-opacity-90 bg-violet-900"
  >
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>Action Lists</h1>
      <div class="grid md:grid-cols-2 gap-20 justify-center items-center">
        <DCard class="max-w-md">
          <DCardTitle>Lists</DCardTitle>

          Specific component for lists of actions. Hover it or click it to see
          animation.
        </DCard>

        <DActionsList :actions="listItems" @action-focus="pose = $event">
          <template #header>Click me</template>
        </DActionsList>

        <DCharacter :pose="pose" no-image />

        <DCard class="max-w-md">
          <DCardTitle>Fan</DCardTitle>
          <p>
            Fan is another variation of list. It can be oriented to left or to
            right.
          </p>
          <p>Try add more items to action fan.</p>
          <div class="grid grid-cols-2 gap-3">
            <DBtn @click="fanItems.push({ title: 'New', emit: 'action' })"
              >Add Item</DBtn
            >
            <DBtn @click="fanItems = [{ title: 'Idle', emit: 'idle' }]"
              >Reset Items</DBtn
            >
          </div>
        </DCard>

        <DActionsFan
          class="text-white max-w-xs"
          side="left"
          :actions="fanItems"
          @action-focus="pose = $event"
        />
        <DActionsFan
          class="text-white max-w-xs"
          side="right"
          :actions="fanItems"
        />
      </div>
    </div>
  </DWrapBackground>
</template>

<style scoped>
h1 {
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold text-white;
}
</style>

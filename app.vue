<script setup lang="ts">
import { CharacterPose } from './components/d/character/Index.vue'
import { ActionListItem } from './components/d/actions/List.vue'

const pose = ref<CharacterPose>('action')
const poseOptions = ref<ActionListItem<CharacterPose>[]>([
  { title: 'Idle', emit: 'idle' },
  { title: 'Action', emit: 'action' },
  { title: 'Profi', emit: 'profi' }
])
</script>

<template>
  <Head>
    <Title>d0rich • Nuxt design system</Title>
  </Head>
  <main class="w-full min-h-screen bg-neutral-300 px-3 py-10">
    <div class="prose prose-lg mx-auto">
      <h1 class="sharp-shadow ss-red-500 ss-br-1">d0rich Nuxt design system</h1>
      <section class="grid md:grid-cols-2 not-prose items-center">
        <DCharacter :pose="pose" no-image />
        <DActionsList
          class="text-white"
          :actions="poseOptions"
          @action-focus="pose = $event"
        />
      </section>
    </div>
  </main>
</template>

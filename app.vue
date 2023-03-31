<script setup lang="ts">
import { CharacterPose } from './components/d/character/Index.vue'
import { ActionListItem } from './components/d/actions/List.vue'
import { ActionFanItem } from './components/d/actions/Fan.vue'

const pose = ref<CharacterPose>('action')
const listItems = ref<ActionListItem<CharacterPose>[]>([
  { title: 'Idle', emit: 'idle' },
  { title: 'Action', emit: 'action' },
  { title: 'Profi', emit: 'profi' }
])

const fanItems = ref<ActionFanItem<CharacterPose>[]>([
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
      <section class="my-7">
        <h2 class="sharp-shadow ss-cyan-500 ss-br-1">
          FocusHighlight and Buttons
        </h2>
        <div class="not-prose flex flex-wrap gap-3">
          <DBtn>Just Button</DBtn>
          <DBtn href="https://d0rich.me" target="_blank">Link Button</DBtn>
          <DBtn highlight="negative-tile">Default highlight</DBtn>
          <DBtn highlight="list-item">List highlight</DBtn>
          <DBtn highlight="negative-list-item">List highlight (negative)</DBtn>
        </div>
      </section>
      <section class="my-7">
        <h2 class="sharp-shadow ss-cyan-500 ss-br-1">Lists</h2>
        <div class="grid md:grid-cols-2 not-prose items-center">
          <DCharacter :pose="pose" no-image />
          <DActionsList
            class="text-white"
            :actions="listItems"
            @action-focus="pose = $event"
          />
        </div>
        <div class="grid md:grid-cols-3 not-prose items-center">
          <DActionsFan
            class="text-white py-48"
            side="left"
            :actions="fanItems"
            @action-focus="pose = $event"
          />
          <DCharacter :pose="pose" shape-class="fill-red-500" no-image />
          <DActionsFan
            class="text-white py-48"
            side="right"
            :actions="fanItems"
            @action-focus="pose = $event"
          />
        </div>
      </section>
      <section class="my-7">
        <h2 class="sharp-shadow ss-cyan-500 ss-br-1">Animations</h2>
        <div class="grid grid-cols-2">
          <DAnimationSpinner />
          <DAnimationAccordion />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { CharacterPose, ActionFanItem, ActionListItem } from '../../types'

definePageMeta({
  colorMode: 'light'
})

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
  <main class="">
    <B1Intro />
    <B2Shapes />
    <B3Shadows />
    <B4SvgLines />
    <B5Buttons />
    <div class="prose prose-lg mx-auto">
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
        <div class="grid grid-cols-2 items-center">
          <DAnimationSpinner />
          <DAnimationAccordion />
          <DAnimationHypnosis />
          <DAnimationFloatingLetter />
        </div>
      </section>
      <section class="my-7">
        <h2 class="sharp-shadow ss-cyan-500 ss-br-1">Content components</h2>
        <div class="not-prose">
          <ContentProseBlockquote>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quibusdam possimus aliquid earum adipisci tempore quidem molestiae
            distinctio quaerat reiciendis.
          </ContentProseBlockquote>
          <ContentAlert>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quibusdam possimus aliquid earum adipisci tempore quidem molestiae
            distinctio quaerat reiciendis.
          </ContentAlert>
          <ContentAlert type="question">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quibusdam possimus aliquid earum adipisci tempore quidem molestiae
            distinctio quaerat reiciendis.
          </ContentAlert>
          <ContentAlert type="warning">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quibusdam possimus aliquid earum adipisci tempore quidem molestiae
            distinctio quaerat reiciendis.
          </ContentAlert>
        </div>
      </section>
    </div>
  </main>
</template>

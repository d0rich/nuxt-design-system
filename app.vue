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
          <DBtn no-rotate>No Rotate</DBtn>
        </div>
        <div class="no-prose my-5">
          <DBtn highlight="negative-tile" class="!block"
            >Default highlight</DBtn
          >
          <DBtn highlight="list-item" class="!block">List highlight</DBtn>
          <DBtn highlight="list-item" color-class="bg-blue-600" class="!block"
            >Custom color</DBtn
          >
          <DBtn highlight="negative-list-item" class="!block"
            >List highlight (negative)</DBtn
          >
          <DBtn
            highlight="composite-list-item"
            class="!block"
            color-class="bg-white"
            >List highlight (composite)</DBtn
          >
        </div>
        <div class="no-prose my-5">
          <DBtn href="https://d0rich.me" target="_blank">Link Button</DBtn>
          <DBtn no-rotate active class="!block">Active Link</DBtn>
          <DBtn no-rotate active class="!block" highlight="negative-list-item"
            >Active List Link</DBtn
          >
          <DBtn
            no-rotate
            no-passive-highlight
            active
            class="router-link-active !block"
            highlight="negative-list-item"
            >Active List Link</DBtn
          >
          <DBtn text-transform="none" class="!block">No Text transform</DBtn>
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
        <div class="grid grid-cols-2 items-center">
          <DAnimationSpinner />
          <DAnimationAccordion />
          <DAnimationHypnosis />
          <DAnimationFloatingLetter />
        </div>
      </section>
      <section class="my-7">
        <h2 class="sharp-shadow ss-cyan-500 ss-br-1">Shapes</h2>
        <div class="grid grid-cols-2 items-center">
          <DWrapShape
            shape-class="bg-white"
            :shape-style="{
              clipPath: 'var(--shape-bubble--left)'
            }"
          >
            <div style="padding: var(--shape-bubble--left__padding)">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              quibusdam possimus aliquid earum adipisci tempore quidem molestiae
              distinctio quaerat reiciendis.
            </div>
          </DWrapShape>
          <DWrapShape
            shape-class="bg-white"
            :shape-style="{
              clipPath: 'var(--shape-bubble--right)'
            }"
          >
            <div style="padding: var(--shape-bubble--right__padding)">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              quibusdam possimus aliquid earum adipisci tempore quidem molestiae
              distinctio quaerat reiciendis.
            </div>
          </DWrapShape>
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

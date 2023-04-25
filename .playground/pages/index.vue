<script setup lang="ts">
import type { CharacterPose, ActionFanItem, ActionListItem } from '../../types'

definePageMeta({
  colorMode: 'light'
})
</script>

<template>
  <main class="">
    <B1Intro />
    <B2Shapes />
    <B3Shadows />
    <B4SvgLines />
    <B5Buttons />
    <B6Lists />
    <B7Identica />
    <B8Animations />
    <div class="prose prose-lg mx-auto">
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

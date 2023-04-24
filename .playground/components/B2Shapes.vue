<template>
  <DWrapBackground
    class="font-dialog bg-[url('~/assets/img/bg/skills.png')] bg-cover bg-fixed bg-center"
    overlay-class="backdrop-saturate-50 bg-opacity-90"
    :overlay-style="{
      background:
        'var(--d-card-x-ray--action__white), rgb(14 116 144 / var(--tw-bg-opacity))'
    }"
  >
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>Shapes</h1>
      <div class="text-xl flex flex-col items-start">
        <!-- First replic -->
        <DWrapShape
          tag="blockquote"
          class="font-dialog text-black dark:text-white my-6"
          shape-class="bg-white dark:bg-black opacity-80"
          :shape-style="{
            clipPath: 'var(--shape-bubble--right)'
          }"
        >
          <template #bg-overlay>
            <div
              class="absolute inset-0 bg-black dark:bg-white"
              style="clip-path: var(--shape-bubble--right__outline)"
            />
          </template>
          <div style="padding: var(--shape-bubble--right__padding)">
            Did you know that this design system has shape system?
          </div>
        </DWrapShape>
        <!-- Second replic -->
        <DWrapShape
          tag="blockquote"
          class="font-dialog text-black dark:text-white my-6 self-end max-w-screen-sm"
          shape-class="bg-white dark:bg-black opacity-80"
          :shape-style="{
            clipPath: 'var(--shape-bubble--left)'
          }"
        >
          <template #bg-overlay>
            <div
              class="absolute inset-0 bg-black dark:bg-white"
              style="clip-path: var(--shape-bubble--left__outline)"
            />
          </template>
          <div style="padding: var(--shape-bubble--left__padding)">
            Wow, that's cool! It seems like it's very flexible! There are some
            predefined shapes, but you can also create your own!
          </div>
        </DWrapShape>
      </div>
      <!-- Card -->
      <div class="grid sm:grid-cols-2 gap-20 items-center">
        <DCard mode="homepage-skills">
          <DCardTitle>XRay Example</DCardTitle>

          It also has XRay effect, which displays only main shape from
          background!
        </DCard>

        <DCard mode="homepage-skills" dense>
          <DCardTitle>Dense example</DCardTitle>

          Cards have densed mode. It's useful for displaying more content in one
          place.
        </DCard>
      </div>
    </div>
  </DWrapBackground>
</template>

<style scoped>
h1 {
  background: var(--d-card-x-ray--action__color),
    rgb(255 255 255 / var(--tw-bg-opacity));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold bg-opacity-100;
}
</style>

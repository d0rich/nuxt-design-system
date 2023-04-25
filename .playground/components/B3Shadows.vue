<template>
  <DWrapBackground
    class="font-dialog bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-fixed bg-center dark text-white"
    overlay-class="backdrop-saturate-50 bg-opacity-80 bg-black"
  >
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>Shadows</h1>
      <div class="flex flex-col gap-20 items-start">
        <DCard class="max-w-md sharp-shadow ss-br-5 ss-yellow-500">
          <DCardTitle>Description</DCardTitle>

          Shadows are implemented as TailwindCSS plugin. It's very easy to use.
        </DCard>

        <DCard
          class="max-w-md self-end transition-all sharp-shadow ss-bl-5 ss-violet-500 hover:ss-tl-5 hover:ss-cyan-500"
        >
          <DCardTitle>Animation (Hover me)</DCardTitle>

          These shadows are also animatable! Hover this card to see it in
          action.
        </DCard>
      </div>
    </div>
  </DWrapBackground>
</template>

<style scoped>
h1 {
  @apply sharp-shadow ss-red-700 ss-br-2 text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold text-white;
}

h1::first-letter {
  @apply bg-cyan-700;
}
</style>

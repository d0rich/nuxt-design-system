<template>
  <DWrapBackground
    class="font-dialog bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-fixed bg-center dark text-white"
    overlay-class="backdrop-saturate-50 bg-opacity-80"
    :overlay-style="{
      background:
        'var(--d-card-x-ray--idle__white), rgb(161 98 7 / var(--tw-bg-opacity))'
    }"
  >
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>Animations</h1>
      <DCard class="max-w-md ml-auto" mode="homepage-story">
        <DCardTitle>Animated elements</DCardTitle>

        This design system has some atomic animated elements. It can be used for
        stuffing background.
      </DCard>
      <div class="grid grid-cols-2 items-center">
        <DAnimationSpinner />
        <DAnimationAccordion />
        <DAnimationHypnosis />
        <DAnimationFloatingLetter />
      </div>
    </div>
  </DWrapBackground>
</template>

<style scoped>
h1 {
  @apply sharp-shadow ss-red-700 ss-br-2 text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold text-white;
}
</style>

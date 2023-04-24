<template>
  <div class="relative h-screen w-full">
    <div
      class="absolute inset-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"
    />
    <DWrapShape
      class="absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]"
      shape-class="intro-shape"
    >
      <div tag="div" class="p-10 text-xl font-serif text-center text-white">
        <p>Design system inspired by Persona 5 UI</p>
        <p class="italic">
          Authored by <a href="https://d0rich.me" class="underline">d0rich</a>
        </p>
      </div>
    </DWrapShape>
  </div>
</template>

<style>
.intro-shape {
  clip-path: polygon(3% 3%, 100% 0%, 95% 95%, 0% 100%);
  animation: intro-shape-clip-path 5s linear infinite;
  @apply backdrop-invert bg-neutral-900 bg-opacity-60;
}

@keyframes intro-shape-clip-path {
  0%,
  100% {
    clip-path: polygon(3% 3%, 100% 0%, 95% 95%, 0% 100%);
  }
  25% {
    clip-path: polygon(5% 3%, 96% 4%, 96% 97%, 0 99%);
  }
  50% {
    clip-path: polygon(3% 2%, 100% 0, 90% 94%, 1% 91%);
  }
  75% {
    clip-path: polygon(4% 7%, 96% 1%, 99% 99%, 8% 95%);
  }
}
</style>

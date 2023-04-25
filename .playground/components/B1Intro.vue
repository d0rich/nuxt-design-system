<template>
  <div class="relative h-screen w-full">
    <div
      class="absolute inset-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"
    />
    <DWrapShape
      class="absolute flex items-center inset-0 w-fit mx-auto z-[3]"
      shape-class="intro-shape"
    >
      <div class="p-10 text-xl font-serif text-center prose prose-invert">
        <h1>d0rich design system</h1>
        <p>Design system inspired by Persona 5 UI</p>
        <p>
          References:
          <ul>
            <li>
              <a href="https://ridwankhan.com/the-ui-and-ux-of-persona-5-183180eb7cce">The UI and UX of Persona 5</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/Persona5/comments/gmw6hz/persona_5_royal_fonts_if_i_find_more_about_the/">Persona 5 Royal Fonts</a>
            </li>
          </ul>
        </p>
        <p class="italic">
          Authored by <a href="https://d0rich.me">d0rich</a>
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

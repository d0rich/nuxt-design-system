<template>
  <DWrapShape
    tag="blockquote"
    class="d-blockquote"
    shape-class="d-blockquote__shape"
  >
    <template #bg-overlay>
      <div class="d-blockquote__outline" />
    </template>
    <div class="d-blockquote__body">
      <slot />
    </div>
  </DWrapShape>
</template>

<style>
.d-blockquote {
  @apply font-dialog text-black dark:text-white my-6;
}

.d-blockquote__body {
  padding: var(--shape-bubble--right__padding);
}

.d-blockquote__outline {
  @apply absolute inset-0 bg-black dark:bg-white;
  clip-path: var(--shape-bubble--right__outline);
}

.d-blockquote__shape {
  @apply bg-white dark:bg-black opacity-80;
  clip-path: var(--shape-bubble--right);
}
</style>

<template>
  <DWrapShape class="d-alert" shape-class="d-alert__shape">
    <template #bg-overlay>
      <div class="d-alert__outline" />
    </template>
    <div class="d-alert__body">
      <slot />
    </div>
  </DWrapShape>
</template>

<style>
.d-alert {
  @apply font-dialog text-black dark:text-white my-6;
}

.d-alert__shape {
  @apply bg-white dark:bg-black opacity-80;
  clip-path: var(--shape-card--dense);
}

.d-alert__outline {
  @apply absolute inset-0 bg-black dark:bg-white;
  clip-path: var(--shape-card--dense__outline);
}

.d-alert__body {
  padding: var(--shape-card--dense__padding);
}
</style>

<template>
  <DWrapShape
    tag="blockquote"
    class="font-dialog text-black dark:text-white"
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
      <slot />
    </div>
  </DWrapShape>
</template>

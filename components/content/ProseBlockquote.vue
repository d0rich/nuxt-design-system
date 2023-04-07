<template>
  <DWrapShape
    tag="blockquote"
    class="font-dialog text-black dark:text-white"
    shape-class="bg-white dark:bg-black"
    filter-class="sharp-shadow ss-black dark:ss-white ss-br-2"
    :shape-style="{
      clipPath: 'var(--shape-bubble--right)'
    }"
  >
    <div style="padding: var(--shape-bubble--right__padding)">
      <slot />
    </div>
  </DWrapShape>
</template>

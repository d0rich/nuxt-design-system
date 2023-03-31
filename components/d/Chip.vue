<script lang="ts">
export default {
  name: 'DChip'
}
</script>

<template>
  <span class="d-chip">
    <slot />
  </span>
</template>

<style>
.d-chip {
  display: inline-block;
  clip-path: polygon(
    0 0,
    100% 0.2em,
    calc(100% - 0.3em) 100%,
    0.2em calc(100% - 0.3em)
  );
  padding: 0.4em;
}

@media print {
  .d-chip {
    clip-path: none;
    padding: 0;
    background: unset !important;
  }
}
</style>

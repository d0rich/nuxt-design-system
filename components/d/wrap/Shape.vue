<script lang="ts">
import { type StyleValue } from 'vue'

export default {
  name: 'DWrapShape'
}
</script>

<script setup lang="ts">
defineProps<{
  shapeClass?: string | Record<string, boolean>
  shapeStyle?: StyleValue
  filterClass?: string | Record<string, boolean>
  filterStyle?: StyleValue
  tag?: string
}>()
</script>

<template>
  <Component :is="tag ?? 'div'">
    <div class="d-shape">
      <div class="d-shape__bg-filter" :class="filterClass" :style="filterStyle">
        <div class="d-shape__bg-wrapper">
          <div class="d-shape__bg" :class="shapeClass" :style="shapeStyle" />
        </div>
      </div>
      <slot />
    </div>
  </Component>
</template>

<style>
.d-shape,
.d-shape > * {
  @apply relative;
}

.d-shape__bg-filter {
  @apply absolute top-0 left-0 w-full h-full;
}

.d-shape__bg-wrapper {
  @apply relative w-full h-full;
}

.d-shape__bg {
  @apply absolute w-full h-full;
}
</style>

<!-- Global shapes -->
<style>
:root {
  --shape-bubble: polygon(
    0 calc(100% - 20px),
    20px calc(100% - 10px),
    25px calc(100% - 15px),
    45px calc(100% - 5px),
    70px calc(100% - 10px),
    100% 100%,
    calc(100% - 40px) 0,
    45px 30px,
    40px calc(100% - 30px),
    20px calc(100% - 45px),
    18px calc(100% - 25px)
  );
  --shape-bubble-padding: 35px 45px 15px 50px;
}

:root {
  --shape-card: polygon(2em 0, 0% 100%, 100% calc(100% - 5em), 100% 4em);
  --shape-card-padding: 4.5em 0.5em 5.5em 2.5em;
}
</style>

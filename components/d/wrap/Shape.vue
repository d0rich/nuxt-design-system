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
          <div class="d-shape__bg" :class="shapeClass" :style="shapeStyle">
            <slot name="shape-content" />
          </div>
          <slot name="bg-overlay" />
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
  --shape-bubble--right: polygon(
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
  --shape-bubble--right__outline: polygon(
    0 calc(100% - 20px),
    5px calc(100% - 20px),
    20px calc(100% - 10px),
    25px calc(100% - 15px),
    45px calc(100% - 5px),
    70px calc(100% - 10px),
    calc(100% - 20px) calc(100% - 10px),
    calc(100% - 50px) 7px,
    45px 30px,
    40px calc(100% - 30px),
    20px calc(100% - 45px),
    18px calc(100% - 25px),
    5px calc(100% - 20px),
    0 calc(100% - 20px),
    16px calc(100% - 28px),
    17px calc(100% - 53px),
    39px calc(100% - 40px),
    38px 23px,
    calc(100% - 40px) 0,
    100% 100%,
    70px calc(100% - 7px),
    45px 100%,
    25px calc(100% - 11px),
    19px calc(100% - 7px),
    0 calc(100% - 20px)
  );
  --shape-bubble--right__padding: 35px 45px 15px 50px;
}

:root {
  --shape-bubble--left: polygon(
    100% calc(100% - 20px),
    calc(100% - 20px) calc(100% - 10px),
    calc(100% - 25px) calc(100% - 15px),
    calc(100% - 45px) calc(100% - 5px),
    calc(100% - 70px) calc(100% - 10px),
    0 100%,
    40px 0,
    calc(100% - 45px) 30px,
    calc(100% - 40px) calc(100% - 30px),
    calc(100% - 20px) calc(100% - 45px),
    calc(100% - 18px) calc(100% - 25px)
  );
  --shape-bubble--left__outline: polygon(
    100% calc(100% - 20px),
    calc(100% - 5px) calc(100% - 20px),
    calc(100% - 20px) calc(100% - 10px),
    calc(100% - 25px) calc(100% - 15px),
    calc(100% - 45px) calc(100% - 5px),
    calc(100% - 70px) calc(100% - 10px),
    20px calc(100% - 10px),
    50px 7px,
    calc(100% - 45px) 30px,
    calc(100% - 40px) calc(100% - 30px),
    calc(100% - 20px) calc(100% - 45px),
    calc(100% - 18px) calc(100% - 25px),
    calc(100% - 5px) calc(100% - 20px),
    100% calc(100% - 20px),
    calc(100% - 16px) calc(100% - 28px),
    calc(100% - 17px) calc(100% - 53px),
    calc(100% - 39px) calc(100% - 40px),
    calc(100% - 38px) 23px,
    40px 0,
    0 100%,
    calc(100% - 70px) calc(100% - 7px),
    calc(100% - 45px) 100%,
    calc(100% - 25px) calc(100% - 11px),
    calc(100% - 19px) calc(100% - 7px),
    100% calc(100% - 20px)
  );
  --shape-bubble--left__padding: 35px 50px 15px 45px;
}

:root {
  --shape-card: polygon(2em 0, 0% 100%, 100% calc(100% - 5em), 100% 4em);
  --shape-card-padding: 4.5em 0.5em 5.5em 2.5em;
}

:root {
  --shape-card--dense: polygon(
    0.5em 0,
    0% 100%,
    100% calc(100% - 2em),
    100% 1.5em
  );
  --shape-card--dense__outline: polygon(
    0.5em 0,
    0.8em 0.3em,
    0.4em calc(100% - 0.7em),
    calc(100% - 0.3em) calc(100% - 2em),
    calc(100% - 0.4em) 1.5em,
    0.8em 0.3em,
    0.5em 0,
    100% 1em,
    100% calc(100% - 1.8em),
    0% 100%
  );
  --shape-card--dense__padding: 2em 0.5em 2.5em 1em;
}
</style>

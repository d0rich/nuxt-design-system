<script setup lang="ts">
defineProps({
  type: {
    type: String as () => 'info' | 'question' | 'warning',
    default: 'info'
  }
})
</script>

<template>
  <DWrapShape
    class="d-alert"
    :class="{
      'd-alert--info': type === 'info',
      'd-alert--question': type === 'question',
      'd-alert--warning': type === 'warning'
    }"
    shape-class="d-alert__shape"
  >
    <template #bg-overlay>
      <div class="d-alert__outline" />
    </template>
    <div class="d-alert__body">
      <slot />
      <svg
        viewBox="0 0 1067 1067"
        xmlns="http://www.w3.org/2000/svg"
        class="d-alert__sign"
      >
        <!-- info -->
        <g v-if="type === 'info'">
          <path
            d="M202.481,1025.68l427.138,-769.216l171.992,106.943l-461.057,689.584l-138.073,-27.311Z"
          />
          <path
            d="M832.695,310.003l-170.011,-113.247l92.566,-170.289l218.937,122.443l-141.492,161.093Z"
          />
        </g>
        <!-- question -->
        <g v-if="type === 'question'">
          <path
            d="M289.17,836.982l100.67,63.007l-27.42,149.27l-200.047,-83.328l126.797,-128.949Z"
          />
          <path
            d="M335.818,766.179l95.499,91.347l134.944,-217.987l249.128,-6.228l174.389,-139.096l14.533,-236.672l-170.237,-224.215l-170.238,-8.304l-242.9,124.564l114.184,64.358l178.542,-41.522l161.933,130.793l-68.51,205.53l-203.455,-53.978l-178.542,70.587l-89.27,240.823Z"
          />
        </g>
        <!-- warning -->
        <g v-if="type === 'warning'">
          <path
            d="M304.988,722.034l335.792,-712.747l299.877,30.543l-514.204,743.146l-121.465,-60.942Z"
          />
          <path
            d="M253.974,839.059l148.42,40.169l-118.767,182.487l-131.537,-66.719l101.884,-155.937Z"
          />
        </g>
      </svg>
    </div>
  </DWrapShape>
</template>

<style>
.d-alert {
  @apply font-dialog text-black dark:text-white mb-6 mt-12;
}

.d-alert__shape {
  @apply bg-white dark:bg-black opacity-80;
  clip-path: var(--shape-card--dense);
}

.d-alert__outline {
  @apply absolute inset-0 bg-black dark:bg-white;
  clip-path: var(--shape-card--dense__outline);
}

.d-alert--info .d-alert__outline {
  @apply bg-cyan-500;
}

.d-alert--question .d-alert__outline {
  @apply bg-yellow-500;
}

.d-alert--warning .d-alert__outline {
  @apply bg-red-500;
}

.d-alert__body {
  padding: var(--shape-card--dense__padding);
}

.d-alert__sign {
  @apply absolute w-[5em] -top-[1.5em] -left-[1.5em]
         pointer-events-none
         sharp-shadow ss-white ss-r-1;
}

.d-alert--info .d-alert__sign {
  @apply fill-cyan-500;
}

.d-alert--question .d-alert__sign {
  @apply fill-yellow-500;
}

.d-alert--warning .d-alert__sign {
  @apply fill-red-500;
}
</style>

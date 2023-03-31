<script lang="ts">
export default {
  name: 'DAnimationSpinner'
}
</script>

<script setup lang="ts">
const transformOrigin = '315 315'
</script>

<template>
  <svg class="spinner" viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <DAnimationDefLetterD id="d-letter" />
      <use href="#d-letter" id="d-blade" transform="translate(0 -150) scale(0.5) rotate(220)" :transform-origin="transformOrigin" />
      <g id="spinner" class="d-animation-spinner__spinner" :transform-origin="transformOrigin">
        <use href="#d-blade" transform="rotate(0)" :transform-origin="transformOrigin" />
        <use href="#d-blade" transform="rotate(120)" :transform-origin="transformOrigin" />
        <use href="#d-blade" transform="rotate(240)" :transform-origin="transformOrigin" />
      </g>
    </defs>
    <use href="#spinner" transform="translate( -20 20 )" class="fill-black" :transform-origin="transformOrigin" />
    <use href="#spinner" class="fill-white" :transform-origin="transformOrigin" />
  </svg>
</template>

<style>
.d-animation-spinner__spinner {
  animation: spin 2s linear infinite;
}
@keyframes spin  {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

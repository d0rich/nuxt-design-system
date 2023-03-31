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
      <DAnimationDefLetterD id="d-blade" transform="scale(0.5)" :transform-origin="transformOrigin" />
      <g id="d-blade--shadow">
        <use href="#base" transform="translate( -10 10 )" class="fill-black" />
        <use href="#base" class="fill-white" />
      </g>
      <g id="spinner" class="d-animation-spinner__spinner" :transform-origin="transformOrigin">
        <use href="#d-blade" transform="translate(0 -150) rotate(240)"  :transform-origin="transformOrigin" />
        <use href="#d-blade" transform="translate(-129.9 75) rotate(120)"  :transform-origin="transformOrigin" />
        <use href="#d-blade" transform="translate(129.9 75) rotate(300)"  :transform-origin="transformOrigin" />
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
    transform: rotate(-360deg);
  }
}
</style>

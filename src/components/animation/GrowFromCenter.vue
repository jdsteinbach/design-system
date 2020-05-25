<template>
  <transition name="grow-from-center">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'GrowFromCenter'
};
</script>

<style>
[class*="grow-from-center"] {
  transform-origin: center;
  position: fixed;
}

.grow-from-center-enter-active,
.grow-from-center-leave-active {
  transition: transform .25s ease-in-out, opacity .2s;
}

.grow-from-center-enter,
.grow-from-center-leave-to {
  transform: scale(.5);
  opacity: 0;
}
</style>

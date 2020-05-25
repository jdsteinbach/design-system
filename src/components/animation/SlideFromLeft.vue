<template>
  <transition name="slide-from-left">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFromLeft'
};
</script>

<style>
.slide-from-left-enter-active,
.slide-from-left-leave-active {
  position: absolute;
  transition: transform .25s ease-in-out;
}

.slide-from-left-enter,
.slide-from-left-leave-to {
  transform: translateX(-100%);
}
</style>

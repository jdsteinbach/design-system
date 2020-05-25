<template>
  <transition name="slide-from-right">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFromRight'
};
</script>

<style>
.slide-from-right-enter-active,
.slide-from-right-leave-active {
  position: absolute;
  transition: transform .25s ease-in-out;
}

.slide-from-right-enter,
.slide-from-right-leave-to {
  transform: translateX(100%);
}
</style>

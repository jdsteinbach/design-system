<template>
  <transition name="slide-from-top">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFromTop'
};
</script>

<style>
.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: transform .25s ease-in-out;
}

.slide-from-top-enter,
.slide-from-top-leave-to {
  transform: translateY(-100%);
}
</style>

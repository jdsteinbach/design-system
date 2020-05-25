<template>
  <transition name="slide-from-bottom">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFromBottom'
};
</script>

<style>
.slide-from-bottom-enter-active,
.slide-from-bottom-leave-active {
  transition: transform .25s ease-in-out;
}

.slide-from-bottom-enter,
.slide-from-bottom-leave-to {
  transform: translateY(100%);
}
</style>

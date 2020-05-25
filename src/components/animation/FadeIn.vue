<template>
  <transition name="fade-in">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'FadeIn'
};
</script>

<style>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity .2s;
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="modal-subheader">
    <!-- @slot Inner element(s) -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalSubheader'
};
</script>

<style lang="scss">
.modal-subheader {
  padding: 0 var(--spacing);
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  background: var(--color-background);
}
</style>

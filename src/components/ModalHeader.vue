<template>
  <div class="modal-header">
    <!-- @slot Inner element(s) -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalHeader'
};
</script>

<style scoped lang="scss">
.modal-header {
  padding: 0 var(--spacing);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  background: var(--color-brand-1);

  --text-font-size: 19px;
  --text-color: var(--color-white);

  --button-fg-color: var(--color-action-on-dark) !important;

  &:hover,
  &:active {
    --button-fg-color: var(--color-action-bright);
  }
}
</style>

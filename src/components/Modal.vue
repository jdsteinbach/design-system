<template>
  <section class="modal">
    <header v-if="$slots.header" class="modal__header">
      <!-- @slot Modal header -->
      <slot name="header" />
    </header>
    <div v-if="$slots.content" class="modal__content">
      <!-- @slot Modal content: automatically scrolls tall contents -->
      <slot name="content" />
    </div>
    <footer v-if="$slots.footer" class="modal__footer">
      <!-- @slot Modal footer -->
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Modal'
};
</script>

<style lang="scss">
.modal {
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: var(--color-white);

  // BEM Leak: modals shouldn't be router-view components, but they are, so until that gets fixed, this is here
  &.router-view {
    max-height: calc(100vh - var(--footer-height));
    margin-top: var(--header-height);
    position: fixed;
    z-index: 11;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    > .modal__header {
      grid-column: 1 / -1;
    }
  }
}

.modal__content {
  margin-top: var(
    --modal-content-margin-top,
    var(--spacing)
  );
  margin-right: auto;
  margin-bottom: var(
    --modal-content-margin-bottom,
    var(--spacing)
  );
  margin-left: auto;
  padding: 0 var(--spacing);
  width: var(--content-max-width);
  max-width: 100%;
  flex: 1 1 auto;
  font-size: 16px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: var(--color-white);

  // @TODO UXD hack: solve margins better in the future
  > p.ui-text {
    --text-margin-bottom: var(--spacing);
  }
}

.modal__footer {
  padding: var(--spacing);
  flex: 0 0 auto;
  border-top: 1px solid var(--color-dividers);
  background-color: var(--color-white);
}
</style>

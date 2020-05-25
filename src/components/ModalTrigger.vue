<template>
  <ui-button
    v-bind="$attrs"
    class="modal-trigger"
    @click="triggerModal"
  >
    <!-- @slot Text content -->
    <slot />
  </ui-button>
</template>

<script>
export default {
  name: 'ModalTrigger',

  methods: {
    triggerModal(e) {
      /**
       * Fire `openHook` event
       *
       * @type {any}
       */
      this.$emit('openHook');

      /**
       * Fire `modalTrigger` event on parent
       *
       * @type {any}
       */
      this.$parent.$emit('modalTrigger', e);
    }
  }
};
</script>

<template>
  <ui-text-button
    v-bind="$attrs"
    class="modal-trigger"
    @click="triggerModal"
  >
    <!-- @slot Text content -->
    <slot />
  </ui-text-button>
</template>

<script>
export default {
  name: 'ModalTriggerText',

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

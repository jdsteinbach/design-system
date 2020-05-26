<template>
  <div :data-id="id" style="display:contents">
    <!-- @slot Modal trigger -->
    <slot
      v-if="!hideTrigger"
      name="trigger"
    >
      <modal-trigger
        theme="secondary"
        size="small"
      >
        Show Inner Modal
      </modal-trigger>
    </slot>

    <portal :order="id" to="inner-modal">
      <fade-in>
        <button
          v-if="isOpen"
          type="button"
          class="inner-modal-scrim"
          @click="closeModal"
        >
          <span class="u-screen-reader-only">Close</span>
        </button>
      </fade-in>
      <grow-from-center>
        <section
          v-if="isOpen"
          :class="modalClass"
          class="inner-modal"
        >
          <header
            class="inner-modal__header"
            :class="{ 'is-empty': !$slots.header }"
          >
            <!-- @slot Modal header -->
            <slot name="header" />
            <button class="inner-modal__close" @click="closeModal">
              <span class="u-screen-reader-only">Close</span>
              <svgicon name="close-x" />
            </button>
          </header>
          <div class="inner-modal__content">
            <!-- @slot Modal contents -->
            <slot name="content" />
          </div>
          <footer class="inner-modal__footer">
            <!-- @slot Modal footer -->
            <slot name="footer" />
          </footer>
        </section>
      </grow-from-center>
    </portal>
  </div>
</template>

<script>
import ModalTrigger from '@/components/ModalTrigger';

export default {
  name: 'InnerModal',

  components: {
    ModalTrigger
  },

  props: {
    /**
     * Optional class to add to modal
     */
    modalClass: {
      type: String,
      default: ''
    },

    /**
     * Should the trigger be hidden?
     * Only use if you're sending an event for this modal to listen on
     */
    hideTrigger: {
      type: Boolean,
      default: false
    }
  },

  data: function() {
    return {
      isOpen: false,
      id: 0
    };
  },

  mounted() {
    this.id = this._uid;
  },

  created() {
    this.$on('modalTrigger', this.openModal);
  },

  methods: {
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.isOpen = true;
    }
  }
};
</script>

<style lang="scss">
.inner-modal-scrim {
  @include button-reset();

  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  background-color: var(--color-black-faded);
}

.inner-modal {
  margin: auto;
  max-width: var(--content-max-width);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  position: fixed;
  top: var(--spacing);
  right: var(--spacing);
  bottom: var(--spacing);
  left: var(--spacing);
  z-index: 5;
  border-radius: 8px;
  background-color: var(--color-white);
}

.inner-modal__header {
  padding: 0 var(--spacing);
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 0 0 auto;
  position: relative;
  border-bottom: 1px solid var(--color-dividers);

  &.is-empty {
    border-bottom: 0;
  }
}

.inner-modal__content {
  padding:
    var(--inner-modal-content-padding-vt, 0)
    var(--inner-modal-content-padding-hz, var(--spacing));
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex: 1 1 auto;
  overflow: scroll;
}

.inner-modal__footer {
  padding: var(--spacing);
  flex: 0 0 auto;
  text-align: center;
  border-top: var(--inner-modal-footer-border, none);
}

.inner-modal__close {
  @include button-reset;

  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 50%;
  right: var(--spacing);
  transform: translateY(-50%);

  svg {
    width: 13px;
    height: 13px;
    pointer-events: none;
  }
}

.inner-modal__to-top {
  margin-top: var(--spacing-half);
  width: 100%;
  text-align: center;
}
</style>

<template>
  <div
    :style="modifierStyles"
    :class="{'aligner--background': background}"
    class="aligner"
  >
    <!-- @slot Inner elements -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiAligner',

  props: {
    /**
     * Horizontal Flexbox value (align-items)
     */
    horizontal: {
      type: String,
      default: ''
    },

    /**
     * Vertical Flexbox value (justify-content)
     */
    vertical: {
      type: String,
      default: ''
    },

    /**
     * Optional background color
     */
    background: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    modifierStyles() {
      return {
        ...this.horizontal && {
          '--aligner-horizontal': this.horizontal
        },
        ...this.vertical && {
          '--aligner-vertical': this.vertical
        }
      };
    }
  }
};
</script>

<style lang="scss">
.aligner {
  padding: var(--aligner-padding-vt, 0) var(--aligner-padding-hz, 0);
  display: flex;
  justify-content: var(--aligner-horizontal, space-between);
  align-items: var(--aligner-vertical, center);
  background-color: var(--aligner-background, transparent);
}

.aligner--background {
  --aligner-padding-vt: var(--spacing-half);
  --aligner-padding-hz: var(--spacing-half);
  --aligner-background: var(--color-background);
}
</style>

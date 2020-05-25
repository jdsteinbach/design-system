<template>
  <div
    :style="modifierStyles"
    class="ui-spacer"
    aria-hidden="true"
    role="presentation"
  />
</template>

<script>
export default {
  name: 'UiSpacer',

  props: {
    /**
     * Height spacing variable:
     *
     * default 20px;
     * half: default / 2
     * quarter: default / 4
     * eighth: default / 8
     * double: default * 2
     */
    height: {
      type: String,
      default: undefined,
      validator(value) {
        return ['default', 'half', 'quarter', 'eighth', 'double'].indexOf(value) > -1;
      }
    }
  },

  computed: {
    modifierStyles() {
      return {
        ...this.height && {
          '--spacer-height': `var(--spacing-${this.height})`
        }
      };
    }
  }
};
</script>

<style lang="scss">
.ui-spacer {
  margin: 0;
  padding: 0;
  height: var(--spacer-height, var(--spacing));
}
</style>

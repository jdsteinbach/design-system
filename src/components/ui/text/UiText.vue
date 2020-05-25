<template>
  <component
    :is="tag"
    :style="textStyles"
    class="ui-text"
  >
    <!-- @slot Text contents -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UiText',

  props: {
    /**
     * HTML tag for this text
     */
    tag: {
      type: String,
      default: 'p'
    },

    /**
     * Size (from style guide) for this text
     */
    size: {
      type: String,
      default: 'body-1',
      validator: (size) => {
        const isValid = [
          'body-1',
          'body-2',
          'subheading',
          'title',
          'headline',
          'display-1',
          'display-2',
          'small'
        ].indexOf(size) > -1;
        if (!isValid) {
          console.log(`Invalid size: ${size}`);
        }
        return isValid;
      }
    }
  },

  computed: {
    textStyles() {
      return {
        '--text-font-size': `var(--font-size-${this.size})`,
        '--text-line-height': `var(--line-height-${this.size})`,
        ...(this.size.indexOf('display') === 0) && {
          '--text-font-family': 'var(--font-family-heading)',
          '--text-font-weight': 300
        }
      };
    }
  }
};
</script>

<style scoped lang="scss">
.ui-text {
  margin:
    var(--text-margin-top, 0)
    var(--text-margin-right, 0)
    var(--text-margin-bottom, 0)
    var(--text-margin-left, 0);
  font-family: var(--text-font-family, var(--font-family-body));
  font-size: var(--text-font-size, 1rem);
  line-height: var(--text-line-height, #{(26/16)});
  font-style: var(--text-font-style, normal);
  font-weight: var(--text-font-weight, normal);
  color: var(--text-color, var(--color-black));

  a {
    color: var(--color-action);

    &:hover,
    &:active,
    &:focus {
      color: var(--color-action-bright);
    }
  }
}
</style>

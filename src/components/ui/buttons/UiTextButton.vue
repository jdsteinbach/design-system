<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component
    :is="tag"
    :class="modifierClass"
    :type="tag === 'button' ? type : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :href="tag === 'a' ? href : undefined"
    class="ui-text-button"
    @click="$emit('click')"
  >
    <!-- @slot Icon and/or text -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UiTextButton',
  props: {
    /**
     * HTML tag: `button`, `a`, or `router-link
     * @values a, button, router-link
     */
    tag: {
      type: String,
      default: 'button',
      validator: function(value) {
        return ['a', 'button', 'router-link'].indexOf(value) > -1;
      }
    },

    /**
     * Label for icon-only buttons
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * Visual theme values
     * @values primary, secondary, icon, light, cancel
     */
    theme: {
      type: String,
      default: 'primary',
      validator: function(value) {
        return ['primary', 'secondary', 'light'].indexOf(value) > -1;
      }
    },

    /**
     * HTML button `type` attribute: `button` or `submit`
     * @values button, submit
     */
    type: {
      type: String,
      default: 'button'
    },

    /**
     * HTML anchor `href` attribute
     * @values any valid URL or fragment
     */
    href: {
      type: String,
      default: ''
    },

    /**
     * Vue router-link `to` attribute
     * @values route name or object
     */
    to: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    modifierClass: function() {
      return `ui-text-button--${this.theme}`;
    }
  }
};
</script>

<style lang="scss">
.ui-text-button {
  margin:
    var(--button-margin-top, 0)
    var(--button-margin-right, 0)
    var(--button-margin-bottom, 0)
    var(--button-margin-left, 0);
  padding: 0 var(--button-hz-padding, 0);
  width: var(--button-width, auto);
  height: var(--button-height, auto);
  display: var(--button-display, inline-block);
  appearance: none;
  border: 0;
  font-size: var(--button-font-size, 15px);
  color: var(--button-fg-color, var(--color-action));
  text-decoration: none;
  background-color: transparent;
  transition: opacity .2s, color .2s;

  &:hover,
  &:active {
    --button-fg-color: var(--color-action-bright);
  }

  &:focus {
    outline: 2px solid var(--color-action-bright);
    outline-offset: 2px;
  }

  &:disabled,
  &[disabled] {
    --button-fg-color: var(--color-border);

    pointer-events: none;
  }
}

.ui-text-button--secondary {
  --button-fg-color: var(--color-black);

  &:hover,
  &:active {
    --button-fg-color: var(--color-action);
  }
}

.ui-text-button--light {
  --button-fg-color: var(--color-white);

  &:hover,
  &:active {
    --button-fg-color: var(--color-action-bright);
  }
}
</style>

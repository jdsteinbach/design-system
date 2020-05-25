<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component
    :is="tag"
    :class="modifierClass"
    :type="type"
    :to="to"
    :href="href"
    class="ui-button"
    @click="$emit('click')"
  >
    <!-- @slot Icon and/or text -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    /**
     * HTML tag: `button`, `a`, or `router-link
     * @values a, button, router-link
     */
    tag: {
      type: String,
      default: 'button',
      validator(value) {
        return ['a', 'button', 'router-link'].indexOf(value) > -1;
      }
    },

    /**
     * Visual theme values
     * @values primary, secondary, icon, alert, cancel
     */
    theme: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'icon', 'alert', 'cancel'].indexOf(value) > -1;
      }
    },

    /**
     * Visual size value
     * @values small, [none]
     */
    size: {
      type: String,
      default: '',
      validator(value) {
        return ['small', ''].indexOf(value) > -1;
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
     * `to` value for router-link
     */
    to: {
      type: [String, Object],
      default: undefined
    },

    /**
     * `href` value for link
     */
    href: {
      type: String,
      default: undefined
    }
  },
  computed: {
    modifierClass() {
      return `ui-button--${this.theme}${this.size && ` ui-button--${  this.size}`}`;
    }
  }
};
</script>

<style lang="scss">
.ui-button {
  margin:
    var(--button-margin-top, 0)
    var(--button-margin-right, 0)
    var(--button-margin-bottom, 0)
    var(--button-margin-left, 0);
  padding: 0 var(--button-hz-padding, var(--spacing));
  width: var(--button-width, 100%);
  min-height: var(--button-height, 50px);
  display: var(--button-display, flex);
  align-items: center;
  justify-content: center;
  appearance: none;
  border:
    var(--button-border-width, 1px)
    solid
    var(--button-border-color, var(--button-bg-color, var(--color-action)));
  border-radius: 3px;
  font-size: var(--button-font-size, 18px);
  color: var(--button-fg-color, var(--color-white));
  background-color: var(--button-bg-color, var(--color-action));
  cursor: pointer;
  text-decoration: none;
  transition: opacity .2s, color .2s, background-color .2s, border-color .2s;

  &:hover,
  &:active {
    --button-bg-color: var(--color-action-bright);
    --button-fg-color: var(--color-white);
  }

  &:focus {
    outline: 2px solid var(--color-action-bright);
    outline-offset: 2px;
  }

  &:disabled,
  &[disabled] {
    --button-bg-color: var(--color-border);

    pointer-events: none;
  }
}

.ui-button--secondary {
  --button-bg-color: transparent;
  --button-fg-color: var(--color-action);
  --button-border-color: currentColor;

  &:hover,
  &:active {
    --button-bg-color: transparent;
    --button-fg-color: var(--color-action-bright);
  }

  &:disabled,
  &[disabled] {
    --button-bg-color: transparent;
    --button-fg-color: var(--color-border);
  }
}

.ui-button--alert {
  --button-bg-color: var(--color-alert);
  --button-fg-color: var(--color-white);
  --button-border-color: var(--color-alert);

  &:hover,
  &:active {
    --button-bg-color: var(--color-alert-active);
    --button-fg-color: var(--color-white);
    --button-border-color: var(--color-alert-active);
  }

  &:disabled,
  &[disabled] {
    --button-border-color: var(--color-border);
  }
}

.ui-button--cancel {
  --button-bg-color: var(--color-border);
  --button-fg-color: var(--color-black);
  --button-border-color: var(--color-border);

  &:hover,
  &:active {
    --button-bg-color: var(--color-border-active);
    --button-fg-color: var(--color-black);
    --button-border-color: var(--color-border-active);
  }
}

.ui-button--small {
  --button-height: 32px;
  --button-display: inline-flex;
  --button-width: auto;
}

.ui-button--icon {
  --button-bg-color: transparent;
  --button-fg-color: var(--color-action);
  --button-height: auto;
  --button-hz-padding: 0;

  &:hover,
  &:active {
    --button-bg-color: transparent;
    --button-fg-color: var(--color-action-bright);
  }

  &:focus {
    outline: 2px solid var(--color-action-bright);
    outline-offset: 2px;
  }

  &:disabled,
  &[disabled] {
    --button-bg-color: transparent;
    --button-fg-color: var(--color-border);
  }
}
</style>

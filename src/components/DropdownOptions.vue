<template>
  <div class="dropdown" :class="{'is-open':isOpen}">
    <!-- @slot Dropdown contents: <dropdown-option> elements -->
    <slot />
  </div>
</template>

<script>

export default {
  name: 'DropdownOptions',
  props: {
    /**
     * Is dropdown open?
     */
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">

.dropdown {
  width: auto;
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  z-index: 3;
  pointer-events: var(--dropdown-options-events, none);
  background-color: var(--color-white);
  opacity: var(--dropdown-options-opacity, 0);
  transform: var(--dropdown-options-transform, translateY(calc(var(--spacing) * -.5)));
  transform-origin: center top;
  transition: opacity .2s, transform .2s ease-in-out;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 3px 6px rgba(#000, .25);
    opacity: var(--dropdown-options-opacity, 0);

    transition: opacity .2s .1s;
  }
}

.is-open {
  --dropdown-options-opacity: 1;
  --dropdown-options-transform: none;
  --dropdown-options-events: default;
  --border-radius-trigger-bottom: 0;
}

.dropdown-item {
  --dropdown-options-button-bg: var(--color-white);
  --dropdown-options-button-fg: var(--color-black);
  --dropdown-options-button-svg: var(--color-action);

  padding: 0 var(--spacing);
  display: flex;
  position: relative;
  font-size: var(--font-size-body-1);
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &:active {
    --dropdown-options-button-bg: var(--color-background);

    z-index: 2;
  }
}
</style>

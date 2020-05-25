<template>
  <div class="dropdown-option">
    <button
      type="button"
      class="dropdown-option__button"
      @click="$emit('click')"
    >
      <span class="u-screen-reader-only">
        {{ label }}
      </span>
    </button>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'DropdownOption',
  props: {
    /**
     * Each item should have a `title` and a `value`, with an optional `count`
     */
    label: {
      type: String,
      default: 'Click'
    }
  }
};
</script>

<style lang="scss">

.dropdown-option {
  --dropdown-nav-button-bg: var(--color-white);
  --dropdown-nav-button-fg: var(--color-black);
  --dropdown-nav-button-svg: var(--color-action);

  padding: 0 var(--spacing);
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  appearance: none;
  position: relative;
  z-index: 2;
  font-size: var(--font-size-body-1);
  white-space: nowrap;
  border: 0;
  background-color: var(--dropdown-nav-button-bg);
  color: var(--dropdown-nav-button-fg);
  cursor: pointer;
  transition: opacity .2s, color .2s, background-color .2s;

  button:focus {
    outline: 2px solid var(--color-action-bright);
    outline-offset: 2px;
  }

  &:not(:first-child) {
    border-top: 1px solid var(--color-dividers);
  }

  &:hover,
  &:active {
    --dropdown-nav-button-bg: var(--color-background);

    z-index: 2;
  }
}

.dropdown-option__button {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
}
</style>

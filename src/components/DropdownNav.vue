<template>
  <div :class="{'is-open':isOpen}" class="dropdown-nav">
    <button
      class="dropdown-nav__trigger"
      type="button"
      @click="toggleList"
    >
      {{ selectedItem.title }}
      <svgicon
        icon="chevron-down"
        width="10"
        height="6"
        color="currentColor"
      />
    </button>
    <ul class="dropdown-nav__list">
      <li
        v-for="item in items"
        :key="item.value"
        class="dropdown-nav__list-item"
      >
        <button
          :class="item.value == selectedItem.value ? ' is-selected' : ''"
          class="dropdown-nav__list-button"
          type="button"
          @click="setSelected(item)"
        >
          {{ item.title }}
          <svgicon
            v-if="item.value == selectedItem.value"
            icon="check"
            width="15"
            height="11"
            color="currentColor"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownNav',
  props: {
    /**
     * Items array: objects containing a `title` & `value`
     */
    items: {
      type: Array,
      default: () => ([])
    },

    /**
     * Item object: matches item in `items` array
     * Sets default item
     */
    active: {
      type: Object,
      default: () => ({})
    }
  },
  data: function() {
    return {
      isOpen: false,
      selected: false
    };
  },
  computed: {
    selectedItem() {
      return this.selected;
    }
  },
  mounted() {
    let activeItem = this.active || this.items[0];
    this.setSelected(activeItem);
  },
  methods: {
    toggleList() {
      this.isOpen = !this.isOpen;
    },
    setSelected(item) {
      this.selected = item;
      this.isOpen = false;

      /**
       * Fire `input` event on value change
       *
       * @type {any}
       */
      this.$emit('input', this.selected);
    }
  }
};
</script>

<style lang="scss">
.dropdown-nav {
  --dropdown-nav-button-bg: var(--color-background);
  --dropdown-nav-button-svg: var(--color-action);
  --dropdown-nav-button-fg: var(--color-black);

  position: relative;
  z-index: 2;
  background-color: var(--color-white);
}

.is-open {
  --dropdown-nav-button-bg: var(--color-action);
  --dropdown-nav-button-fg: var(--color-white);
  --dropdown-nav-button-svg: var(--color-white);
  --dropdown-nav-list-opacity: 1;
  --dropdown-nav-list-transform: none;
  --dropdown-nav-list-events: default;
  --border-radius-trigger-bottom: 0;
}

.dropdown-nav__trigger,
.dropdown-nav__list-button {
  padding: 0 calc(var(--spacing-quarter) * 3);
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  appearance: none;
  position: relative;
  z-index: 2;
  border: 0;
  font-size: 18px;
  background-color: var(--dropdown-nav-button-bg);
  color: var(--dropdown-nav-button-fg);
  transition: opacity .2s, color .2s, background-color .2s;

  svg {
    color: var(--dropdown-nav-button-svg);
    transition: inherit;
  }

  &:focus {
    outline: 2px solid var(--color-action-bright);
    outline-offset: 2px;
  }
}

.dropdown-nav__trigger {
  border-radius: 4px 4px var(--border-radius-trigger-bottom, 4px) var(--border-radius-trigger-bottom, 4px);

  &:hover,
  &:active {
    --dropdown-nav-button-bg: var(--color-dividers);
  }
  .is-open & {
    --dropdown-nav-button-bg: var(--color-action);
  }
}

.dropdown-nav__list-button {
  --dropdown-nav-button-bg: var(--color-white);
  --dropdown-nav-button-fg: var(--color-black);
  --dropdown-nav-button-svg: var(--color-action);

  &:hover,
  &:active {
    --dropdown-nav-button-bg: var(--color-background);

    z-index: 2;
  }
}

.is-selected {
  font-weight: bold;
}

.dropdown-nav__list {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  z-index: 1;
  pointer-events: var(--dropdown-nav-list-events, none);
  opacity: var(--dropdown-nav-list-opacity, 0);
  transform: var(--dropdown-nav-list-transform, translateY(calc(var(--spacing) * -.5)));
  transform-origin: center top;
  transition: opacity .2s, transform .2s ease-in-out;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -42px;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 3px 6px rgba(#000, .25);
    opacity: var(--dropdown-nav-list-opacity, 0);

    transition: opacity .2s .1s;
  }
}
</style>

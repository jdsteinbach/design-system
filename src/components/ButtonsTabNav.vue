<template>
  <nav class="buttons-tab-nav">
    <ui-button
      v-for="(tab, i) in tabs"
      :key="`${i}-${tab}`"
      :class="{'is-active': tab == active}"
      class="buttons-tab-nav__button"
      @click="setActive(tab)"
    >
      {{ tab }}
    </ui-button>
  </nav>
</template>

<script>
export default {
  name: 'ButtonsTabNav',
  props: {
    /**
     * Tabs array: strings for each tab text
     */
    tabs: {
      type: Array,
      default: () => ([])
    },

    /**
     * Active Tab: matches string in `tabs` array
     */
    active: {
      type: String,
      default: ''
    }
  },
  mounted() {
    let activeItem = this.active || this.tabs[0];
    this.setActive(activeItem);
  },
  methods: {
    setActive(item) {
      this.active = item;
      /**
       * Fire `input` event on change
       *
       * @type {any}
       */
      this.$emit('input', this.active);
    }
  }
};
</script>

<style lang="scss">
.buttons-tab-nav {
  margin: var(--spacing) 0;
  display: inline-flex;
  background-color: var(--color-background);
}

.buttons-tab-nav__button {
  --button-height: 33px;
  --button-hz-padding: var(--spacing);

  display: inline-flex;
  width: fit-content;
  white-space: nowrap;

  &:not(.is-active) {
    --button-bg-color: transparent;
    --button-fg-color: var(--color-black);

    &:hover,
    &:active {
      --button-bg-color: var(--color-dividers);
    }
  }

  &.is-active {
    pointer-events: none;
  }
}
</style>

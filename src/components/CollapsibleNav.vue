<template>
  <div :class="{'is-open':isOpen}" class="collapsible-nav">
    <button
      class="collapsible-nav__trigger"
      type="button"
      @click="toggleOpen"
    >
      {{ title }}
      <svgicon
        icon="chevron-down"
        width="10"
        height="6"
        color="currentColor"
      />
    </button>
    <nav v-show-slide:200:ease-in-out="isOpen" class="collapsible-nav__list">
      <router-link
        v-for="(link, i) in links"
        :key="i"
        :to="link.href"
        class="collapsible-nav__item"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleNav',
  props: {
    /**
     * Links array: objects containing link `text` & `href`
     */
    links: {
      type: Array,
      default: () => ([])
    },

    /**
     * Title string: shown on nav title
     */
    title: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
.collapsible-nav {
  --collapsible-nav-button-bg: var(--color-background);
  --collapsible-nav-button-svg: var(--color-action);
  --collapsible-nav-button-fg: var(--color-black);

  position: relative;
  z-index: 1;
}

.is-open {
  --collapsible-nav-button-bg: var(--color-action);
  --collapsible-nav-button-fg: var(--color-white);
  --collapsible-nav-button-svg: var(--color-white);
  --collapsible-nav-list-opacity: 1;
  --collapsible-nav-list-transform: none;
  --collapsible-nav-list-events: default;
  --border-radius-trigger-bottom: 0;
}

.collapsible-nav__trigger,
.collapsible-nav__item {
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
  text-decoration: none;
  color: var(--collapsible-nav-button-fg);
  background-color: var(--collapsible-nav-button-bg);
  transition: transform .2s, opacity .2s, color .2s, background-color .2s;

  svg {
    color: var(--collapsible-nav-button-svg);
    transform: scaleY(var(--collapsible-nav-icon-scale, 1));
    transition: inherit;
  }

  &:focus {
    outline: 2px solid var(--color-action-bright);
    outline-offset: -2px;
  }
}

.collapsible-nav__trigger {
  border-radius: 2px 2px var(--border-radius-trigger-bottom, 2px) var(--border-radius-trigger-bottom, 2px);

  &:hover,
  &:active {
    --collapsible-nav-button-bg: var(--color-dividers);
  }
  .is-open & {
    --collapsible-nav-button-bg: var(--color-action);
    --collapsible-nav-icon-scale: -1;
  }
}

.collapsible-nav__item {
  --collapsible-nav-button-bg: var(--color-white);
  --collapsible-nav-button-fg: var(--color-black);
  --collapsible-nav-button-svg: var(--color-action);

  &:hover,
  &:active {
    --collapsible-nav-button-bg: var(--color-background);

    z-index: 2;
  }
}

.collapsible-nav__list {
  border: 1px solid var(--color-dividers);
  border-top: 0;
  border-radius: 0 0 2px 2px;
}
</style>

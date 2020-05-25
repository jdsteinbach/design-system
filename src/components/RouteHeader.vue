<template>
  <div class="route-header">
    <div class="route-header__contents">
      <router-link class="route-header__link" :to="href">
        <svgicon
          class="route-header__icon"
          name="chevron-left"
          height="24"
          width="8"
          color="currentColor"
        />
      </router-link>

      <h2 class="route-header__title">
        <!-- @slot Text content -->
        <slot />
      </h2>

      <div class="route-header__action">
        <!-- @slot Action button -->
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteHeader',
  props: {
    /**
     * Passed directly to `router-link` as its `to` attr
     */
    href: {
      type: [Object, String],
      default: '/'
    }
  }
};
</script>

<style lang="scss">
.route-header {
  height: 50px;
  display: flex;
  align-items: center;
  color: var(--color-black);
  background-color: var(--color-background);
}

.route-header__contents {
  margin: 0 auto;
  padding: 0 var(--spacing);
  width: 100%;
  max-width: var(--content-max-width);
  height: var(--header-height);
  display: flex;
  align-items: center;
}

.route-header__link {
  color: inherit;

  &:hover,
  &:active {
    color: var(--color-action);
  }
}

.route-header__icon {
  margin-right: var(--spacing-half);
  text-decoration: none;
  transition: color .2s;
  pointer-events: none;
}

.route-header__title {
  margin: 0;
  font-size: 22px;
  font-weight: normal;
  color: inherit;
}

.route-header__action {
  margin-left: auto;
  display: flex;
  align-items: center;
}
</style>

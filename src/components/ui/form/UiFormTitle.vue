<template>
  <ui-text
    :tag="tag"
    size="title"
    class="form-title"
  >
    <!-- @slot Text content -->
    <slot />
  </ui-text>
</template>

<script>
export default {
  name: 'FormTitle',
  props: {
    /**
     * HTML tag
     */
    tag: {
      type: String,
      default: 'h2'
    }
  }
};
</script>

<style scoped lang="scss">
.form-title {
  --text-margin-top: var(--spacing-half);
  --text-margin-bottom: var(--spacing-half);

  &:first-child {
    --text-margin-top: 0;
  }
}
</style>

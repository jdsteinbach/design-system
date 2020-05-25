<template>
  <ui-text
    :tag="tag"
    size="subheading"
    class="form-heading"
  >
    <!-- @slot Text content -->
    <slot />
  </ui-text>
</template>

<script>
export default {
  name: 'FormHeading',
  props: {
    /**
     * HTML tag
     */
    tag: {
      type: String,
      default: 'h3'
    }
  }
};
</script>

<style scoped lang="scss">
.form-heading {
  --text-margin-top: var(--spacing);
  --text-margin-bottom: var(--spacing-half);
  --text-font-weight: 500;
}
</style>

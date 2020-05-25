<template>
  <ui-text
    :tag="tag"
    size="small"
    class="form-optional"
  >
    <slot>The following fields are optional.</slot>
  </ui-text>
</template>

<script>
export default {
  name: 'FormOptional',
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  }
};
</script>

<style scoped lang="scss">
.form-optional {
  --text-margin-top: var(--spacing);
  --text-margin-bottom: var(--spacing-half);
  --text-font-style: italic;
  --text-font-weight: bold;
}
</style>

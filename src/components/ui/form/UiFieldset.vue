<template>
  <fieldset class="fieldset">
    <ui-text
      size="small"
      tag="legend"
      class="fieldset__label"
    >
      {{ label }}
    </ui-text>
    <ui-aligner class="fieldset__fields">
      <!-- @slot UIField components -->
      <slot />
    </ui-aligner>
  </fieldset>
</template>

<script>
export default {
  name: 'UiFieldset',

  props: {
    /**
     * Label string: describes grouped inputs
     */
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.fieldset {
  display: block;
}

.fieldset__label {
  --text-margin-bottom: var(--spacing-half);
  --text-font-weight: bold;

  display: block;
}

.fieldset__fields {
  --aligner-horizontal: flex-start;
  --field-margin-right: var(--spacing);
}
</style>

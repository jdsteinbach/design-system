<template>
  <div class="form-progress">
    <ui-text
      :class="{'form-progress__label--hidden': labelHidden}"
      class="form-progress__label"
      size="small"
    >
      <span v-if="labelHidden" class="u-screen-reader-only">
        {{ label }}
      </span>
      <template v-else>
        {{ label }}
      </template>
    </ui-text>
    <div :style="progressStyle" class="form-progress__meter">
      <span class="u-screen-reader-only">
        {{ progressText }}
      </span>
    </div>
    <!-- @slot Action link -->
    <slot class="form-progress__action" />
  </div>
</template>

<script>
export default {
  name: 'UiFormProgress',

  props: {
    /**
     * Label string: describes progress bar
     */
    label: {
      type: String,
      default: 'Progress:'
    },

    /**
     * Progress value (0-100)
     */
    progress: {
      type: Number,
      default: 0
    },

    /**
     * Should the label be visually hidden?
     */
    labelHidden: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    progressStyle() {
      return `--progress-percent:${this.progress}%`;
    },
    progressText() {
      return `${this.progress} percent`;
    }
  }
};
</script>

<style lang="scss">
.form-progress {
  --button-margin-left: 10px;

  margin:
    var(--form-progress-margin-top, 0)
    var(--form-progress-margin-right, auto)
    var(--form-progress-margin-bottom, var(--spacing-half))
    var(--form-progress-margin-left, auto);
  padding:
    var(--form-progress-padding-vt, 0)
    var(--form-progress-padding-hz, 0);
  width: auto;
  max-width: var(--content-max-width);
  height: var(--form-progress-height, auto);
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  justify-content: stretch;
  align-items: center;
}

.form-progress__label {
  --text-margin-right: 10px;
}

.form-progress__label--hidden {
  --text-margin-right: 0;
}

.form-progress__meter {
  height: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  background-color: var(--color-background);

  &::before {
    content: "";
    width: 100%;
    height: 10px;
    position: absolute;
    right: 100%;
    left: -100%;
    background-color: var(--color-success);
    transform: translateX(var(--progress-percent, 0%));
    transition: transform .1s ease-in-out;
  }
}
</style>

<template>
  <li class="review-item">
    <svgicon
      :name="iconName"
      class="review-item__icon"
    />

    <ui-text
      class="review-item__label"
      size="subheading"
    >
      {{ label }}
    </ui-text>

    <router-link
      v-if="to"
      :to="to"
      class="review-item__link"
    >
      Go to {{ label }}
    </router-link>

    <ui-text class="review-item__meta">
      {{ meta }}
    </ui-text>
  </li>
</template>

<script>
export default {
  name: 'ReviewItem',

  props: {
    /**
     * Primary text labelling this row
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * Secondary text (right-aligned)
     */
    meta: {
      type: String,
      default: ''
    },

    /**
     * Sets icon: `in-progress` gets `icon-pen`, otherwise `filled-check`
     */
    status: {
      type: String,
      default: ''
    },

    /**
     * Adds a router-link, provides `to` value
     */
    to: {
      type: [String, Object],
      default: undefined
    }
  },

  computed: {
    iconName() {
      return (this.status === 'in-progress')
        ? 'pen'
        : 'filled-check';
    }
  }
};
</script>

<style lang="scss">
.review-item {
  padding: var(--spacing-half) var(--spacing);
  display: flex;
  align-items: baseline;
  position: relative;
  background-color: var(--color-background);
}

.review-item__icon {
  margin-right: var(--spacing);
  width: 17.5px;
  height: 17.5px;
  align-self: center;
  color: var(--color-success);
}

.review-item__link {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: transparent;
  background-color: var(--color-action);
  opacity: 0;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.1;
  }
}

.review-item__meta {
  --text-margin-left: auto;
  --text-color: var(--color-black-faded);

  text-transform: capitalize;
}
</style>

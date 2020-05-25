<template>
  <div class="confirmation-block">
    <svgicon
      :name="icon"
      color="#253b4e #17d6b9"
      class="confirmation-block__icon"
    />
    <ui-text
      tag="h2"
      size="title"
      class="confirmation-block__title"
    >
      {{ title }}
    </ui-text>
    <hr
      v-if="heading || description"
      class="confirmation-block__divider"
    >
    <ui-text
      v-if="heading"
      size="subheading"
      class="confirmation-block__heading"
    >
      {{ heading }}
    </ui-text>
    <ui-text
      v-if="description"
      size="body-2"
      class="confirmation-block__description"
    >
      {{ description }}
    </ui-text>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationBlock',

  props: {
    /**
     * Title for block
     */
    title: {
      type: String,
      default: '',
      required: true
    },

    /**
     * Icon name:
     * confirm-account, confirm-delete, confirm-document, confirm-save
     */
    icon: {
      type: String,
      default: '',
      required: true
    },

    /**
     * Heading: displayed under horizontal divider
     */
    heading: {
      type: String,
      default: ''
    },

    /**
     * Description: displayed under heading
     */
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
.confirmation-block {
  padding: var(--spacing-double) var(--spacing);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.confirmation-block__icon {
  margin: 0 auto;
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  display: block;
}

.confirmation-block__title {
  --text-margin-top: var(--spacing-half);
  --text-margin-bottom: var(--spacing-quarter);
}

.confirmation-block__divider {
  margin: var(--spacing-half) auto var(--spacing);
  width: 150px;
  height: 0;
  border: 0;
  border-top: 1px solid var(--color-black);
  opacity: 0.15;
}

.confirmation-block__heading {
  --text-font-weight: bold;

  max-width: 20em;
}

.confirmation-block__description {
  max-width: 20em;

  .confirmation-block__heading + & {
    --text-margin-top: var(--spacing-half);
  }
}
</style>

<template>
  <div class="loading" role="presentation">
    <div class="loading__indicator">
      <div class="loading__motion" />
    </div>
    <ui-text :size="size" class="loading__description">
      {{ text }}
    </ui-text>
  </div>
</template>

<script>
export default {
  name: 'LoadingIndicator',

  props: {
    /**
     * Size (from ui-text) for this text
     */
    size: {
      type: String,
      default: 'heading'
    },

    /**
     * Text to describe loading state
     */
    text: {
      type: String,
      default: 'Loading…'
    }
  }
};
</script>

<style lang="scss">
.loading {
  overflow: hidden;
}

.loading__indicator {
  --loading-duration: 1.5s;
  --loading-easing: cubic-bezier(.5,0,.5,1);

  margin-bottom: var(--spacing-half);
  height: var(--spacing-half);
  border: 1px solid var(--color-action);
  border-radius: var(--spacing-quarter);
  background-color: var(--color-background);
}

.loading__motion {
  height: inherit;
  position: relative;
  border-radius: inherit;
  animation: indicator var(--loading-duration) var(--loading-easing) infinite alternate;

  &::before {
    content: "";
    width: 25%;
    height: inherit;
    display: inline-block;
    position: absolute;
    top: -1px;
    background-color: var(--color-action);
    border-radius: inherit;
    animation: dot var(--loading-duration) var(--loading-easing) infinite alternate;
  }
}

.loading__description {
  --text-margin-bottom: var(--spacing);
}

@keyframes indicator {
  0% {
    transform: none;
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes dot {
  0% {
    transform: none;
  }

  50% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>

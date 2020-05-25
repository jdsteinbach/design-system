const withBackgroundDark = story => {
  const StoryComponent = story();

  return {
    components: { StoryComponent },
    data() {
      return {
        styles: {
          backgroundColor: 'var(--color-brand-1, #000)',
          padding: 'var(--spacing-half) var(--spacing)'
        }
      };
    },
    template: `<section :style="[styles]">
      <story-component />
    </section>`
  }
};

export { withBackgroundDark };

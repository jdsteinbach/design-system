const withPadding = story => {
  const StoryComponent = story();

  return {
    components: { StoryComponent },
    data() {
      return {
        styles: {
          padding: 'var(--spacing, 10px)'
        }
      };
    },
    template: `<section :style="styles">
      <story-component />
    </section>`
  }
};

export { withPadding };

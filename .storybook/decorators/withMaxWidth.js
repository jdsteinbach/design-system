const withMaxWidth = story => {
  const StoryComponent = story();

  return {
    components: { StoryComponent },
    data() {
      return {
        styles: {
          padding: 'var(--spacing, 10px)',
          maxWidth: 'var(--content-max-width, 40rem)'
        }
      };
    },
    template: `<section :style="styles">
      <story-component />
    </section>`
  }
};

export { withMaxWidth };

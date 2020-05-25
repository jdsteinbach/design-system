const withDropdown = story => {
  const StoryComponent = story();

  return {
    components: { StoryComponent },
    template: `<section style="position:relative">
      <story-component />
    </section>`
  }
};

export { withDropdown };

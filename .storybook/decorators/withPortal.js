const withPortal = story => {
  const StoryComponent = story();
  return {
    components: { StoryComponent },
    template: `<div>
      <story-component />
      <portal-target name="overlay" multiple />
      <portal-target name="inner-modal" multiple />
      <portal-target name="modal" multiple />
    </div>`
  }
};

export { withPortal };

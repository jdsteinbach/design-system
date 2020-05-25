const withBackground = story => {
  const StoryComponent = story();

  return {
    components: { StoryComponent },
    data() {
      return {
        shared: {
          padding: 'var(--spacing, 10px)'
        },
        light: {
          backgroundColor: 'var(--color-background, #fff)'
        },
        dark: {
          backgroundColor: 'var(--color-black, #000)'
        }
      };
    },
    template: `<section>
      <div :style="[shared]" style="--dropdown-z-index:13">
        <story-component />
      </div>
      <div :style="[shared, light]" style="--dropdown-z-index:12">
        <story-component />
      </div>
      <div :style="[shared, dark]" style="--dropdown-z-index:11">
        <story-component />
      </div>
    </section>`
  }
};

export { withBackground };

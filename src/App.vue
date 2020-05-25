<template>
  <div id="root">
    <ui-text size="title" tag="h1">
      Vue App Not Available
    </ui-text>
    <ui-spacer />
    <ui-text tag="p">
      Please run Storybook instead:
    </ui-text>
    <ui-spacer height="quarter" />
    <pre><ui-text tag="code">npm run storybook</ui-text></pre>
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oxygen:400,700|Roboto:400,400i,500,500i,700,700i&display=swap");

@import "./assets/scss/global";

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  line-height: 1.625;
  color: var(--color-black);
}

*,
::before,
::after {
  box-sizing: border-box;
}

#root {
  min-height: 100%;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.vue-portal-target {
  position: relative;
  z-index: 10;
}

pre > code {
  padding: var(--spacing-half);
  display: block;
  background-color: #ddd;
  --text-font-family: monospace;
}
</style>

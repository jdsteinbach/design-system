<template>
  <hr class="ui-divider">
</template>

<script>
export default {
  name: 'UiDivider'
};
</script>

<style lang="scss" scoped>
.ui-divider {
  margin:
    var(--divider-margin-top, 0)
    var(--divider-margin-right, 0)
    var(--divider-margin-bottom, 0)
    var(--divider-margin-left, 0);
  border-top-style: solid;
  border-top-color: var(--divider-color, var(--color-border));
  border-width: var(--divider-height, 1px) 0 0;
}
</style>

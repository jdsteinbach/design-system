<template>
  <ul class="review-item-list">
    <!-- @slot `review-item` components -->
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ReviewItemList'
};
</script>

<style lang="scss">
.review-item-list {
  border-radius: 4px;
  overflow: hidden;

  > li:not(:first-child) {
    margin-top: 1px;
  }
}
</style>

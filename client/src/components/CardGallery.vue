<template>
  <section class="cardGallery">
    <ul>
      <ItemCard v-for="(item, i) in items" :key="i" :item="item" />
    </ul>
  </section>
</template>

<script>
import ItemCard from './ItemCard';

export default {
  name: 'CardGallery',
  components: { ItemCard },
  props: ['items'],
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
  ul
    margin: 0
    padding: 0
    display: flex
    justify-content: space-between
</style>
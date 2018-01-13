<template>
  <section class="cardGallery">
    <h2>{{sectionName}}</h2>
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
  props: ['items', 'sectionName'],
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
  h2
    background: #324D8F
    color: #fff
    text-align: center
  ul
    margin: 0
    padding: 0
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-column-gap: 1%
</style>
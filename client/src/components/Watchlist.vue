<template>
  <main class="watchlist">
    <h2>Watchlist</h2>
    <p>List of watched items</p>
    <CardGallery :items="watchItems" />
  </main>
</template>

<script>
import ItemCard from './ItemCard';
import CardGallery from './CardGallery';

export default {
  components: {
    ItemCard,
    CardGallery,
  },
  data() {
    return {};
  },
  computed: {
    watchItems() {
      return this.$store.state.watchItems;
    },
  },
};
</script>

<style scoped>

</style>
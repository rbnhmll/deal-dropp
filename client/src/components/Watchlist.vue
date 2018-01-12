<template>
  <main class="watchlist">
    <CardGallery :items="watchedItems" :sectionName="'Watchlist'" />
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
    watchedItems() {
      return this.$store.state.watchedItems;
    },
  },
};
</script>

<style scoped>

</style>
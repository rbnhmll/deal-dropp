<template>
  <main class="watchlist">
    <div class="wrapper">
      <CardGallery :items="watchedItems" :sectionName="'Watchlist'" />
    </div>
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

<style lang="sass" scoped>

</style>
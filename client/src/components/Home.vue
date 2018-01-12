<template>
  <main class="home">
    <p>Some info about the site</p>
    <SearchBar />
    <CardGallery :items="searchResults" />
  </main>
</template>

<script>
import SearchBar from './SearchBar';
import CardGallery from './CardGallery';

export default {
  name: 'Home',
  components: {
    SearchBar,
    CardGallery,
  },
  data() {
    return {};
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

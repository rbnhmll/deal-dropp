<template>
  <main class="home">
    <SearchBar />
    
    <h2>Search Results</h2>
    <CardGallery :items="searchResults" />

    <h2>Popular Dropps</h2>
    <CardGallery :items="popularDropps" />

    <h2>Recent Dropps</h2>
    <CardGallery :items="recentDropps" />
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
    popularDropps() {
      return this.$store.state.popularDropps;
    },
    recentDropps() {
      return this.$store.state.recentDropps;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

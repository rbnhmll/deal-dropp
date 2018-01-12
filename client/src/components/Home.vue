<template>
  <main class="home">
    <SearchBar />
    <CardGallery :items="searchResults" :sectionName="'Search Results'" />
    <CardGallery :items="popularDropps" :sectionName="'Popular Dropps'" />
    <CardGallery :items="recentDropps" :sectionName="'Recent Dropps'" />
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

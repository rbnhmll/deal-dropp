<template>
  <main class="home">
    <p>Some info about the site</p>
    <SearchBar />
  </main>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
  },
  data() {
    return {
      hey: 'hey',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

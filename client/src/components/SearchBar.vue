<template>
  <div>
    <form action="">
      <input class="search" type="search" name="" id="" placeholder="Search">
      <div class="search__options">
        <label
          v-for="item in providers"
          :for="item.id"
          :key="item.id"
        >
          {{item.name}}
          <input
            type="checkbox"
            :name="item.id"
            :id="item.id"
            :checked="item.checked"
            @change="setProviders"
          >
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    providers() {
      return this.$store.state.searchParams.providers;
    },
    searchQuery() {
      return this.$store.state.searchParams.searchQuery;
    },
  },
  methods: {
    setProviders(e) {
      this.$store.commit('setProviders', e.target);
    },
  },
};
</script>

<style lang="sass" scoped>
  .search
    box-sizing: border-box
    width: 100%
    padding: 15px
    border-radius: 43px
    border: 2px solid grey
</style>
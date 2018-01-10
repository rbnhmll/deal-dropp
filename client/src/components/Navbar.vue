<template>
  <header>
    <h1>Deal Dropp 💧</h1>
    <nav>
      <ul>
        <li><a href="#">Watchlist</a></li>
        <li><a href="#">🤦‍♂️</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Navbar',
  };
</script>

<style lang="sass" scoped>
  header
    display: flex
    justify-content: space-between
    align-items: center
  ul
    display: flex
    margin: 0
    padding: 0
    list-style: none
    li
      padding: 5px
</style>
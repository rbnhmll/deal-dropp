<template>
  <header>
    <div class="wrapper">
      <h1>
        <a href="/#/">
          Deal Dropp
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/#/watchlist">Watchlist</a>
          </li>
          <li>
            <a href="/#/account">🤦‍♂️</a>
          </li>
          <li>
            <a href="#">Sign Out</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="sass" scoped>
  header .wrapper
    display: flex
    justify-content: space-between
    align-items: center
  h1
    position: relative
    a
      text-decoration: none
    &:before,
    &:after
      content: "💧"
      position: absolute
      right: 0
      z-index: -1
      top: 5%
    &:before
      right: 10px
    &:after
      right: 0
  a
    color: #222

  ul
    display: flex
    margin: 0
    padding: 0
    list-style: none
    li
      padding: 5px
</style>
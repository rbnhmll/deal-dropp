<template>
  <div id="app">
    <Navbar />
    <router-view class="main"/>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    AppFooter,
  },
};
</script>

<style lang="sass">
@import './assets/styles/_reset.scss';

.wrapper
  max-width: 1080px
  margin: 0 auto

#app
  min-height: 100vh
  display: flex
  flex-direction: column
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.main
  flex: 1
</style>

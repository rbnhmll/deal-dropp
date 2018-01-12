<template>
  <li>
    <a :href="item.url" target="_blank">{{item.name}}</a>
    <span>${{item.price}}</span>
  </li>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['item'],
};
</script>

<style scoped>

</style>
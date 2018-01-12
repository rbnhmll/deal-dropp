<template>
  <li>
    <a :href="item.url" target="_blank">
      <img class="itemImage" :src="item.imageSRC" alt="Random image">
      <h3 class="itemName">{{item.name}}</h3>
      <p class="itemPrice">${{item.price}}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['item'],
};
</script>

<style lang="sass" scoped>
  li
    list-style-type: none
    width: 31%
  .itemImage
    max-width: 100%
  .itemName,
  .itemPrice
    margin: 0
</style>
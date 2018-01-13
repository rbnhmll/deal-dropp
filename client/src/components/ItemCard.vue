<template>
  <li>
    <a :href="item.url" target="_blank">
      <img class="itemImage" :src="item.imageSRC" alt="Random image">
      <h3 class="itemName">{{item.name}}</h3>
      <p class="itemPrice">${{item.price}}</p>
      <div class="actions">
        <a href="#">Buy now</a>
        <a href="#">Watch item</a>
      </div>
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
    // width: 24%
    text-align: center
    border: 1px solid grey    
  .itemImage
    max-width: 100%
  .itemName,
  .itemPrice
    margin: 0
  .actions
    display: flex
    a
      display: inline-block
      width: 50%
      border: 1px solid black
</style>
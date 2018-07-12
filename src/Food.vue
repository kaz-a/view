<template>
  <ul>
    <li v-for="food in foods">{{ food }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      foods: ['Taco', 'Burger', 'Pizza']
    }
  }
}
</script>

<style>

</style>

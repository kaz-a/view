<template>
  <div>
    <h1>List of foods</h1>
    <ul>
      <li v-for="food in foods">{{ food }}</li>
    </ul>
  </div>
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

<style scoped>
  h1{
    color: green;
  }
</style>

<template>
  <div id="foods">
    <ul>
      <li v-for="food in foods" v-on:click="food.show = !food.show">
        <h2>{{ food.name }}</h2>
        <h3 v-show="food.show">${{ food.price }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foods: [
        { name: 'Pizza', price: 10, show: false },
        { name: 'Cake', price: 7, show: false },
        { name: 'Steak', price: 100, show: false },
        { name: 'Tacos', price: 15, show: false },
        { name: 'Turkish Coffee', price: 8, show: false },
        { name: 'Chicken Pot Pie', price: 23, show: false }
      ]
    }
  }
}
</script>

<style scoped>
  #foods{
    widht: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>

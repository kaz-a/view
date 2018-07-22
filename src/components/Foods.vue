<template>
  <div id="foods">
    <ul>
      <li v-for="food in foods" v-on:click="food.show = !food.show">
        <h2>{{ food.name }}</h2>
        <h3 v-show="food.show">${{ food.price }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteFood">Delete food</button>
  </div>
</template>

<script>
export default {
  // // without validation:
  // props: [ 'foods' ], 

  // with validation: 
  props: {
    foods: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    deleteFood: function(){
      this.foods.pop();
    }
  }
}
</script>

<style scoped>
  #foods{
    width: 100%;
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

<template>
  <div>
    <app-header></app-header>
    <app-foods v-bind:foods="foods"></app-foods>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Foods from './components/Foods.vue'

export default {
  // register component
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-foods': Foods
  },
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

<style>
  
</style>

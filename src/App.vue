<template>
  <div>
    <app-header></app-header>
    <app-foods></app-foods>
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
      
    }
  }
}
</script>

<style>
  
</style>

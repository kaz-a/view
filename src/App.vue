<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <foods></foods>
  </div>
</template>

<script>
import Foods from './Food.vue'

export default {
  // registering component locally (make this component only available to this file)
  components: {
    'foods': Foods
  },
  data () {
    return {
      title: 'Food!!!'
    }
  }
}
</script>

<style>
  h1{
    color: purple;
  }
</style>

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

<<<<<<< HEAD
<style>

=======
<style scoped>
  h1{
    color: purple;
  }
>>>>>>> d7aaac45a5be40c6e33d824168a04b8fc4c5d826
</style>

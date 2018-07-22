<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      title: 'Vue foods'
    }
  },
  methods: {
    changeTitle: function(){
      // // change title locally on this component only
      // this.title = "View Foods"
      
      // change title in parent component
      this.$emit('changeTitle', 'View Foods');
    }
  }
}
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>

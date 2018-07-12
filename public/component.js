Vue.component('greeting', {
  template: '<p>hey there {{ name }}<button v-on:click="changeName">Change name</button></p>',
  data: function(){
    // use function instead of a simple object here, to
    // return a fresh copy of data to EACH instance, but not BOTH instances
    return {
      name: 'yoshi'
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario'
    }
  }
})

// instance
new Vue({
  el: '#vue-app-one'
})

// instance
new Vue({
  el: '#vue-app-two'
})

new Vue({
  el: '#vue-app',
  data: {
    output: 'your fav food'
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.input.value) // whatever you type in the input box
      this.output = this.$refs.input.value
      console.log(this.$refs.test.innerText) // hello
    }
  }
})
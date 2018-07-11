new Vue({
  el: '#vue-app',
  data: {
    name: 'kaz',
    job: 'jedi'
  },
  methods: {
    greet: function(time){
      return `Good ${time}, ${this.name}!`
    }
  }
})
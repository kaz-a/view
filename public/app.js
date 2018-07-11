new Vue({
  el: '#vue-app',
  data: {
    name: 'kaz',
    job: 'jedi',
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com">google</a>'
  },
  methods: {
    greet: function(time){
      return `Good ${time}, ${this.name}!`
    }
  }
})
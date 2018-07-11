new Vue({
  el: '#vue-app',
  data: {
    name: 'kaz',
    job: 'jedi',
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com">google</a>',
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time){
      return `Good ${time}, ${this.name}!`
    },
    add: function(){
      this.age++;
    },
    subtract: function(){
      this.age--;
    },
    addBy: function(increment){
      this.age += increment;
    },
    subtractBy: function(increment){
      this.age -= increment;
    },
    updateXY: function(event){
      // get the click event object
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
})
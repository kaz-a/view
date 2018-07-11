new Vue({
  el: '#vue-app',
  data: {
    name: 'kaz',
    job: 'jedi',
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com">google</a>',
    age: 25,
    x: 0,
    y: 0,
    username: "",
    email: "",
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [
      { name: 'Ryu', age: 25 },
      { name: 'Yoshi', age: 35 },
      { name: 'Ken', age: 55 },
    ]
  },
  methods: {
    greet: function(time){
      console.log('greet function ran')
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
      // get the clicked event object
      // console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    }, 
    click: function(){
      alert('you clicked me')
    },
    logName: function(){
      console.log('you entered your name')
    },
    logAge: function(){
      console.log('you entered your age')
    },
    // addToA: function(){
    //   console.log('addToA')
    //   return this.a + this.age;
    // },
    // addToB: function(){
    //   console.log('addToB')
    //   return this.b + this.age;
    // }
  }, 
  computed:{ 
    // computed properties are more efficient than methods
    // vue.js doens't know which method needs to run so it runs everything
    // when one of the methods runs, the entire methods run too!
    // computed methods do: it watches which variable needs to be computed, 
    // and it only runs when needed.
    addToA: function(){
      console.log('addToA function ran')
      return this.a + this.age;
    },
    addToB: function(){
      console.log('addToB function ran')
      return this.b + this.age;
    },
    compClasses: function(){ // dynanic css
      return {
        red: true,
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})
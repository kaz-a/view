import Vue from 'vue'
import App from './App.vue'
// import Foods from './Food.vue'

// // registering component globally
// Vue.component('foods', Foods)

new Vue({
  el: '#app',
  render: h => h(App)
})

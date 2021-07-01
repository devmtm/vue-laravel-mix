import App from "./views/layouts/App.vue";
import ExampleComponent from "./components/ExampleComponent.vue";

window.Vue = require('vue').default;

// Vue.component('app', App)
Vue.component('example', ExampleComponent)

const app = new Vue({
  el: '#app',
  // template: `<app></app>`,
  render: h => h(App),
  created() {
    console.log('App Created!')
  },

  data: {
    name: "Ahmedo"
  }
});




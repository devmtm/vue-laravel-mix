import App from "./views/layouts/App.vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import router from "./router";

window.Vue = require('vue').default;


// Vue.component('app', App)
Vue.component('example', ExampleComponent)


const app = new Vue({
  router,
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




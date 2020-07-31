import Vue from 'vue'
import App from './App.vue'
import spinner from './layouts/Spinner.vue'

Vue.config.productionTip = false

Vue.component('spinner', spinner);

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import oidc from './plugins/OidcPlugin'

import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(oidc)

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

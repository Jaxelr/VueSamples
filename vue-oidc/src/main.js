import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import oidcPlugins from './plugins/OidcPlugins'
import oidcMixins from './mixins/OidcMixins'

import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(oidcPlugins)

Vue.mixin(oidcMixins.accesToken)

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

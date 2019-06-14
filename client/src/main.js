// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import store from './store.js'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.http.options.root = '/root'
Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

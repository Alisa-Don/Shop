import Vue from 'vue'
import App from './App.vue'

import router from '@/router/router.js'

import store from '@/store/store'

import '@/style/common.scss'

Vue.config.productionTip = false

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

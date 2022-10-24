import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui
import useEle from '@/plugins/ele'
// mock
import '@/mock/mockServer'

useEle(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')

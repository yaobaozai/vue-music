import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

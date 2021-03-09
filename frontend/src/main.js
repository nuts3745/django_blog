import Vue from 'vue'
import VueAnalytics from "vue-analytics"
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = (url, opts) => fetch(url, opts)
Vue.prototype.$httpPosts = 'http://127.0.0.1:8000/blog/api/posts/'
Vue.prototype.$httpCategories = 'http://127.0.0.1:8000/blog/api/categories/'

Vue.use(VueAnalytics, {
  id: '',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

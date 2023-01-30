import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './navigation/index'
import store from './stores/index'

import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

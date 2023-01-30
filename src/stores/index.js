import Vue from 'vue'
import Vuex from 'vuex'

import productsData from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    productsData,
  },
})

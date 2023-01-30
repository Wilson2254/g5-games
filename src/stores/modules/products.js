import { fetchProducts } from '../../api/resources/products'
import { setLocalItem } from '../../utils/localStorage'

const store = {
  namespaced: true,

  state: {
    productsList: [],
  },

  getters: {
    productsList: ({ productsList }) => productsList,
  },

  mutations: {
    UPDATE_PRODUCTS_LIST(state, value) {
      state.productsList = value
    },
    SET_PRODUCT_LOCAL_STORAGE(state) {
      setLocalItem('productList', state.productsList)
    },
  },

  actions: {
    async fetchProductList({ commit }) {
      const { products: responseProductList } = await fetchProducts()
      commit('UPDATE_PRODUCTS_LIST', responseProductList)
      commit('SET_PRODUCT_LOCAL_STORAGE', responseProductList)
    },
  },
}

export default store

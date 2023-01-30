import api from '../http-client'

// Получение товаров
async function fetchProducts() {
  try {
    const response = await api.get('https://dummyjson.com/products?limit=100')
    return response?.data || {}
  } catch (error) {
    console.error(`Ошибка получения товаров - ${error}`)
    return {}
  }
}

export { fetchProducts }

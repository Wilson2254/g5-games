import api from '../http-client'

async function fetchSliderImages() {
  try {
    const response = await api.get('https://random.dog/woof.json')
    return response?.data || {}
  } catch (error) {
    console.error(`Ошибка получения изображения - ${error}`)
    return {}
  }
}
export { fetchSliderImages }

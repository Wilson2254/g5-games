import api from '../http-client'

async function fetchSliderImages() {
  const response = await api.get('https://random.dog/woof.json')
  return response?.data || {}
}
export { fetchSliderImages }

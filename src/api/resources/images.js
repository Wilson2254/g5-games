import api from '../http-client'

async function fetchSliderImages(params = {}) {
  const response = await api.get('https://random.dog/woof.json', { params })
  return response?.data?.data || {}
}

export { fetchSliderImages }

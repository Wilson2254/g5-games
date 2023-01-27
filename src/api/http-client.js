import axios from 'axios'

const httpClient = axios.create({
  baseURL: '/vue',
  headers: {
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default httpClient

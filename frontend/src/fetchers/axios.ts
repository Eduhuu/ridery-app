import axios from 'axios'
import router from '@/router'

axios.interceptors.request.use(req => {
  const token = localStorage.getItem('token')
  req.headers.Authorization = token
  return req
})
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      router.push({ path: '/login' })
    }
    return Promise.reject(error)
  },
)
export default axios

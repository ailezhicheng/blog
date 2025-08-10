import axios from 'axios'
const request = axios.create({
  baseURL: 'https://nbplus507.dpdns.org',
  // baseURL: 'http://127.0.0.1:3000'
})

request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default request

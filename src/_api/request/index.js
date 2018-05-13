import axios from 'axios'
import _config from '@/_config'
// import qs from 'qs'
import store from '@/store'

const instance = axios.create({
  baseURL: _config.apiBaseUrl, // api的base_url
  timeout: 10000 // 请求超时时间
  // transformRequest: data => qs.stringify(data)
})
// request拦截器
instance.interceptors.request.use(
  e => {
    e.params = e.params || {}
    e.headers = e.headers || {}
    if (store.getters.token) {
      e.headers['Authorization'] = store.getters.token
    }
    return e
  },
  error => ({ status: 0, msg: error.message })
)
const ApiStatus = {
  ERROR: 500,
  SUCCESS: 200,
  TOKENINVALID: 401
}
// respone拦截器
instance.interceptors.response.use(
  response => {
    const resp = response.data
    if (response.status === ApiStatus.SUCCESS) {
      return resp
    }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default instance

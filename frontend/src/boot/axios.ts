import axios, { AxiosInstance } from 'axios'
import { boot } from 'quasar/wrappers'
import qs from 'qs'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
  baseURL: 'http://localhost',
  headers: {
    Accept: 'application/json'
  }
})

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axiosInstance
})

export { axiosInstance }

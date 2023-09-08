import axios from 'axios'

const BASE_URL = 'https://json-server-6gjfchfpb-wanted-team7.vercel.app'

const axiosInstance = axios.create({ baseURL: BASE_URL })

axiosInstance.interceptors.request.use((config) => {
  console.info('calling api')
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export interface QueryParam {
  [key: string]: string
  q: string
}

const instance = {
  get: <T>(url: string, param: QueryParam) =>
    axiosInstance.get<T>(url, {
      params: param,
    }),
}

export { instance }

import axios from 'axios'

const clientInstance = axios.create({
  baseURL: import.meta.env.API_URL
})

// clientInstance.interceptors.request.use((req) => {
//   return req
// })

export default clientInstance
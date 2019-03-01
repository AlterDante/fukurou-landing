import axios from 'axios'

const http = axios.create({
  baseURL: '/',
  withCredentials: false,

})
export default http

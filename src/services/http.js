import axios from 'axios'

const http = axios.create({
  baseURL: 'https://racursproduction.com/',
  withCredentials: false,

})
export default http

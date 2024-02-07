import axios from 'axios'
import { CorsOrigin } from 'vite'
const headers ={};
const axiosInstance =  axios.create({
    baseURL: 'http://localhost:3000/api/'
})
export default axiosInstance;
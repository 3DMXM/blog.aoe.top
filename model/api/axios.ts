import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'aoe' }
})

export default axiosInstance;
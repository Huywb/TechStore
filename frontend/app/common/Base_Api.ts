import axios from 'axios'

const BASE_URL = axios.create({
    baseURL: 'http://localhost:4000/v1/api',
    withCredentials: true
})

BASE_URL.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default BASE_URL
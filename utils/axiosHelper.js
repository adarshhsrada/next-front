import axios from "axios";
import  apiBaseUrl from '../services/urlService';

console.log("api base url===",apiBaseUrl.baseUrl)

axios.defaults.baseURL = apiBaseUrl.baseUrl


let token = localStorage.getItem('token');

// axios.interceptors.request.use((request) => {

    // request.headers = request.headers || {};

    // Add your custom headers or perform actions here
    // For example, you can add an authorization header for authentication

    axios.defaults.headers.common.Authorization = `Bearer ${token}`
// })

axios.interceptors.response.use((response) => {
    if (response.status === 401) {
        console.log("logout user===>>", response.data)
    }
    return response.data
})

export default axios
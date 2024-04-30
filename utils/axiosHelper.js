import axios from "axios";
import apiBaseUrl from '../services/urlService';

console.log("api base url===", apiBaseUrl.baseUrl)

axios.defaults.baseURL = apiBaseUrl.baseUrl


let token = localStorage.getItem('token');

// axios.interceptors.request.use((request) => {

// request.headers = request.headers || {};

// Add your custom headers or perform actions here
// For example, you can add an authorization header for authentication

axios.defaults.headers.common.Authorization = `Bearer ${token}`
// })

axios.interceptors.response.use(
    (response) => {
      return response.data; // Return the response data
    },
    (error) => {
      // Log the error
      // console.log("Failed to fetch API:", error);
      // Forward the error to the Promise chain
      return Promise.reject(error.response.data);
    }
  );
  
export default axios
import axios from 'axios';


const setSession = (token) => {
    token && (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
    !token && (axios.defaults.headers.common.Authorization = localStorage.getItem("token"))
}

export { setSession }
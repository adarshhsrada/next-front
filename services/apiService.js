import Axios from "../utils/axiosHelper";

export const login = ( payload ) => Axios.post("auth/loginwithJiweman" , payload) 
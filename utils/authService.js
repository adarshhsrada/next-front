const getLocalUserData = () => {
    const isUserToken = localStorage.getItem("user")
    const isUserData = localStorage.getItem("userData")


    return { token: isUserToken, userData: isUserData, isUser: (isUserToken & isUserData) ? true : false }
}

const setLocalUserData = (token, data) => {
    localStorage.setItem("user", token)
    localStorage.setItem("userData", data)
}




export default { getLocalUserData, setLocalUserData } 
import * as Actions from './action'

const userData = {
    token: "",
    userData: {},
    message: "",
    loading: false,
    success: false
}


const userAuthReducer = (state = userData, action) => {
    console.log("===", action)
    switch (action.type) {
        case Actions.USER_LOGIN:
            return {
                ...userData,
                loading: true,
            }

        case Actions.USER_LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                message: action.payload.message,
                loading: false,
                token: action.payload.token,
                userData: action.payload.data
            }
        case Actions.USER_LOGIN_FAIL:
            return {
                ...state,
                success: false,
                loading: false,
                message: action.payload.message
            }
        default:
            return {
                ...userData
            }
    }
}

export default userAuthReducer
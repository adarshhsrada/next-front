import * as Actions from './action'

const userData = {
    token: "",
    userData: {},
    error: ""
}


const userAuthReducer = (state = userData, action) => {
    switch (action) {
        case Actions.USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userData: action.payload.data
            }
        case Actions.USER_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...userData
            }
    }
}

export default userAuthReducer
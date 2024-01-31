import * as Actions from '../actions'

const initialState = {
    userData: "",
    token: ""
}



const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.LOGIN_USER:
            console.log('loginUser reducer data=>>>', action.payload)
            return {
                ...state,
                userData: action.payload,
                token: action.payload.token
            };
        case Actions.LOGOUT_USER:
            return {
                ...initialState
            }
        default:
            return { ...state }
    }
}


export default userReducer
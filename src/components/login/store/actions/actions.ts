export const LOGIN_USER = "[APP_AUTH] LOGIN_USER";
export const LOGIN_USER_SUCCESS = "[APP_AUTH] LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAILED = "[APP_AUTH] LOGIN_USER_FAILED"

export const LOGIN_USER_DATA = "LOGIN_USER_DATA";
// export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const LOGOUT_USER = "LOGOUT_USER";




export const loginUser = () => {
    return {
        type: LOGIN_USER_SUCCESS,
    }
}

export const loginUserSuccess = () => {
    return {
        type: LOGIN_USER_SUCCESS,
    }
}

export const loginUserFailed = () => {
    return {
        type: LOGIN_USER_SUCCESS,
    }
}

export const logUser = () => {
    return {
        type: LOGOUT_USER,
        payload: {}
    }
}
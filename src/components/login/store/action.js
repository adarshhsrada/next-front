export const USER_LOGIN = "[AUTH] USER_LOGIN";
export const USER_LOGIN_SUCCESS = "[AUTH] USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "[AUTH] USER_LOGIN_FAIL";

export const callLoginUser = (payload) => {
    return {
        type: USER_LOGIN,
        payload
    }
}

export const loginUserSuccess = (payload) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}

export const loginUserFail = (payload) => {
    return {
        type: USER_LOGIN_FAIL,
        payload
    }
}
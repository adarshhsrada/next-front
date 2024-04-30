import { USER_LOGIN } from "./action";
import { put, takeEvery, call } from "redux-saga/effects";
import { login } from '../../../../services/apiService';
import setLocalUserData from '../../../../utils/authService';

function* loginUser(data) {
    try {

        console.log("%%bol")
        const apiRes = call(login(data))

        setLocalUserData(apiRes.token, apiRes.data)

        console.log("login success ", data)
    } catch {
        console.log("error in login", error)
    }
}


function* authSaga() {
    takeEvery(USER_LOGIN, loginUser)
}

export default authSaga
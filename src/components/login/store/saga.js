import { USER_LOGIN, loginUserFail, loginUserSuccess } from "./action";
import { put, takeEvery, call } from "redux-saga/effects";
import { login } from '../../../../services/apiService';
import {setLocalUserData} from '../../../../utils/authService';

function* loginUser({ payload }) {
    try {
        const apiRes = yield call(login, payload)
        console.log("apiRes====", apiRes)
        setLocalUserData(apiRes.token, apiRes.data)
        yield put(loginUserSuccess(apiRes))
    } catch (error) {
        yield put(loginUserFail(error))
    }
}


function* authSaga() {
    yield takeEvery(USER_LOGIN, loginUser)
}

export default authSaga
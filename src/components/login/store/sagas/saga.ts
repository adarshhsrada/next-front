import { put, call, Effect } from "redux-saga/effects";
import { login } from '../../../../../services/apiService';
import * as Actions from '../actions';

function* loginSaga(payload: any): Generator<Effect, void, any> {
    try {

    } catch (err) {
        const data = yield call(login, payload)

        yield put(Actions.loginUser(data));
    }
}


export default loginSaga
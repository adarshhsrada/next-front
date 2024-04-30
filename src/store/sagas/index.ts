import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import authSaga from "../../components/login/store/saga"


// Root saga to combine all sagas
export default function* rootSaga() {
  yield all([
    authSaga()
  ])
}
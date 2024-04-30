import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import authSaga from "../../components/login/store/saga"


// Root saga to combine all sagas
function* rootSaga() {
  yield all([
    fork(authSaga)
    // takeEvery('FETCH_DATA', fetchDataSaga), // Replace with your action type
    // Other sagas
  ]);
}

export default rootSaga;
import { all, call, put, takeEvery } from 'redux-saga/effects';
// Import your sagas here

// Example saga
function* fetchDataSaga() {
  try {
    // Your async logic here
  } catch (error) {
    // Handle error
  }
}

// Root saga to combine all sagas
function* rootSaga() {
  yield all([
    takeEvery('FETCH_DATA', fetchDataSaga), // Replace with your action type
    // Other sagas
  ]);
}

export default rootSaga;
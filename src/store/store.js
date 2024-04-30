import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import your root reducer
import rootSaga from './sagas'; // Import your root saga
import { createWrapper } from 'next-redux-wrapper'
const sagaMiddleware = createSagaMiddleware();

// const createStore = () => {
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// return store
// }

export default store

// export const storeWrapper = createWrapper(createStore);


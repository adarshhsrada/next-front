import { compose, configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; 
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/index"


const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer : rootReducer,
    middleware : [sagaMiddleware ,reduxDevTools]
})

sagaMiddleware.run(store)
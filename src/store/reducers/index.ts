import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "../../components/login/store/reducer";
// Import your reducers here

const rootReducer = combineReducers({
  // Your reducers here
  userReducer
});

export default rootReducer;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import amountReducer from "./amountReducer";

const rootReducer = combineReducers({
  users: userReducer,
  amounts: amountReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

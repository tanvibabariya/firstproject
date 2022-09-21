import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authreducer } from "./auth.reducer";


export const rootreducer  = combineReducers({
  auth : authreducer,
  alert : alertReducer
})
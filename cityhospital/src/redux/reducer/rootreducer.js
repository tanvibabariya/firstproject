import { combineReducers } from "redux";
import { authreducer } from "./auth.reducer";


export const rootreducer  = combineReducers({
  auth : authreducer
})
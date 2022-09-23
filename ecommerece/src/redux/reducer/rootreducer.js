import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authreducer } from "./auth.reducer";
import { categoryreducer } from "./category.reducer";
import { productreducer } from "./product.reducer";


export const rootreducer  = combineReducers({
  auth : authreducer,
  alert : alertReducer,
  category : categoryreducer,
  product : productreducer
})
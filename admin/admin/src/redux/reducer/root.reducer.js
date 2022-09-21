import { combineReducers } from "redux";
import { categoryreducer } from "./category.reducer";


export let rootreducer = combineReducers({
   
    category : categoryreducer
})
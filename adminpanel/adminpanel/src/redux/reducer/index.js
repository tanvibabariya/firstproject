import { combineReducers } from "redux";
import {counterReducer} from "./counter.reducer";
import { doctorreducer } from "./doctor.reducer";
import { medicinereducer } from "./medicines.reducer";
import { patientsreducer } from "./patients.reducer";

export let rootreducer = combineReducers({
    counter : counterReducer,
    medicines : medicinereducer,
    patients : patientsreducer,
    doctors : doctorreducer
})
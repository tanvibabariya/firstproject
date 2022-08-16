import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as ActionTypes from '../redux/ActionTypes'

function* signUp(action) {
    try {
       const user = yield call(Api.fetchUser, action.payload.userId);
     //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
     //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }
 
 function* watch() {
   yield takeEvery(ActionTypes.SIGNUP, signUp);
 }
 
 export default function* authSaga() {
     yield all([
       watch()
     ])
   }

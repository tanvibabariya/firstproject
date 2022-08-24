import { call, takeEvery, all } from 'redux-saga/effects'
import { signInAPI, signUpAPI } from '../../common/api/auth.api';
import * as ActionTypes from '../ActionTypes'


function* signUp(action) {
  try {
    const user = yield call(signUpAPI, action.payload);
     console.log(user);
  } catch (e) {
  console.log(e);
  }
}

function* signIn(action){
  try{
    const user = yield call(signInAPI, action.payload);
  }catch(e){
  console.log(e);
  }
}

function* WatchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* WatchSignIn(){
  yield takeEvery(ActionTypes.SIGNIN_USER, signIn);
}

export default function* authSaga() {
  yield all([
    WatchSignUp(),
    WatchSignIn()
  ])
}
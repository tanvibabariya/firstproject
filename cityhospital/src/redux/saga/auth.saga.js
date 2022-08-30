import { call, takeEvery, all , put} from 'redux-saga/effects'
import { signInAPI, signUpAPI } from '../../common/api/auth.api';
import { setAlert } from '../action/alert.action';
import * as ActionTypes from '../ActionTypes'


function* signUp(action) {
  try {
    const user = yield call(signUpAPI, action.payload);
    yield put(setAlert({text : user.payload , color:"success"}))
  } catch (e) {
    yield put(setAlert({text : e.payload , color:"error"}))
  }
}

function* signIn(action){
  try{
    const user = yield call(signInAPI, action.payload);
    yield put(setAlert({text : user.payload , color:"success"}))
  }catch(e){
    yield put(setAlert({text : e.payload , color:"error"}))
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
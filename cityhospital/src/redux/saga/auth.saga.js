import { call, takeEvery, all , put} from 'redux-saga/effects'
import { ForgotPasswordAPI, GoogleSignInAPI, LogoutAPI, signInAPI, signUpAPI } from '../../common/api/auth.api';
import { history } from '../../history';
import { setAlert } from '../action/alert.action';
import { LoggedoutAction, SignedInuserAction } from '../action/auth.action';
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
    yield put (SignedInuserAction(user.payload))
    history.push("/")
    yield put(setAlert({text : "Login  Successfully ", color:"success"}))
  }catch(e){
    yield put(setAlert({text : e.payload , color:"error"}))
  }
}

function* googlesignIn(action){
  try{
   const user = yield call(GoogleSignInAPI)
   yield put (SignedInuserAction(user.payload))
   history.push("/")
   yield put(setAlert({text : "Login  Successfully ", color:"success"}))
  }catch(e){
    yield put(setAlert({text : e.payload , color:"error"}))
  }
}


function* logout(action){
  try{
    const user = yield call(LogoutAPI);
    yield put (LoggedoutAction (user.payload))
    history.push("/login")
    yield put(setAlert({text : "Logout Successfully" , color:"success"}))
  }catch(e){
    yield put(setAlert({text : e.payload , color:"error"}))
  }
}

function* forgotpassword(action){
  console.log(action);
  try{
    const user = yield call(ForgotPasswordAPI, action.payload)
    history.push('/');
    yield put(setAlert({text: user.payload, color: "success"}))
 }catch(e){
    yield put(setAlert({text: e.payload, color: "error"}))
 }
}

function* WatchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* WatchSignIn(){
  yield takeEvery(ActionTypes.SIGNIN_USER, signIn);
}

function* WatchGoogleSignIn(){
  yield takeEvery(ActionTypes.GOOGLESIGNIN_USER, googlesignIn)
}

function* WatchForgotPassword(){
  yield takeEvery(ActionTypes.FORGOT_PASSWORD,forgotpassword)
}
 function* WatchLogout(){
  yield takeEvery(ActionTypes.LOGOUT_USER, logout);
 }

export default function* authSaga() {
  yield all([
    WatchSignUp(),
    WatchSignIn(),
    WatchLogout(),
    WatchGoogleSignIn(),
    WatchForgotPassword() 
  ])
}
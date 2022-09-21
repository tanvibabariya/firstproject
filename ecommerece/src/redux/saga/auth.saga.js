import { call, takeEvery, all, put} from 'redux-saga/effects'
import { ForgotPasswordAPI, GoogleSignInAPI, LogoutAPI, signInAPI, signUpAPI } from '../../comman/auth.api';
import { history } from '../../history';
import { LogedoutUser, SignedInuser } from '../action/auth.action';
import { setAlert } from '../action/alert.action';
import *  as ActionType from '../ActionType'

function* SignUp(action) {
  try {
    const user = yield call(signUpAPI, action.payload);
    // console.log(user);
    yield put(setAlert({ text: user.payload, color: "success" }))
  } catch (e) {
    // console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* SignIn(action) {
  try {

    const user = yield call(signInAPI, action.payload);
    // console.log(user);
    yield put(SignedInuser(user.payload))
    history.push("/")
    yield put(setAlert({ text: "Login  Successfully ", color: "success" }))
  } catch (e) {
    // console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* GoogleSignIn() {
  try {                             
    const user = yield call(GoogleSignInAPI)
    yield put(SignedInuser(user.payload))
    history.push("/")
    yield put(setAlert({ text: "Login  Successfully ", color: "success" }))
  } catch (e) {
    // console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* Logout(action) {
  try {
    const user = yield call(LogoutAPI);
    // console.log(user);
    yield put(LogedoutUser(user.payload))
    history.push("/login")
    yield put(setAlert({ text: "Logout Successfully", color: "success" }))
  } catch (e) {
    // console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}


function* Forgotpassword(action) {
  console.log(action);
  try {
    const user = yield call(ForgotPasswordAPI, action.payload)
    console.log(user);
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }))
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* WatchSignUp() {
  yield takeEvery(ActionType.SIGNUP_USER, SignUp);
}

function* WatchSignIn() {
  yield takeEvery(ActionType.SIGNIN_USER, SignIn)
}

function* WatchGoogleSignIn() {
  yield takeEvery(ActionType.GOOGLESIGNIN_USER, GoogleSignIn)
}

function* WatchLogOut() {
  yield takeEvery(ActionType.LOGOUT_USER, Logout)
}

function* WatchForgotPassword() {
  yield takeEvery(ActionType.FORGOT_PASSWORD, Forgotpassword)
}
export default function* authSaga() {
  yield all([
    WatchSignUp(),
    WatchSignIn(),
    WatchGoogleSignIn(),
    WatchLogOut(),
    WatchForgotPassword()
  ])
}
import { call, takeEvery, all } from 'redux-saga/effects'
import { signupAPI } from '../../common/api/auth.api';
import * as ActionTypes from '../ActionTypes'


function* signUp(action) {
  try {
    const user = yield call(signupAPI, action.payload);
     console.log(user);
  } catch (e) {
  console.log(e);
  }
}

function* WatchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export default function* authSaga() {
  yield all([
    WatchSignUp()
  ])
}
import * as ActionType from '../ActionType'

export const SignUpuser = (values) => (dispatch) => {
  //   console.log(values);
  dispatch({ type: ActionType.SIGNUP_USER, payload: values })
}

export const SignInuser = (values) => (dispatch) => {
  //  console.log(values);
  dispatch({ type: ActionType.SIGNIN_USER, payload: values })
}

export const GoogleSignInuser = () => (dispatch) => {
  dispatch({ type: ActionType.GOOGLESIGNIN_USER })
}

export const SignedInuser = (values) => (dispatch) => {
  dispatch({ type: ActionType.SIGNEDIN_USER, payload: values })
}

export const LogoutUser = () => (dispatch) => {
  dispatch({ type: ActionType.LOGOUT_USER })
}

export const LogedoutUser = ()=>(dispatch)=>{
  dispatch({type: ActionType.LOGGEDOUT_USER})
}

export const ForgotPassword = (values)=>(dispatch)=>{
  dispatch ({type:ActionType.FORGOT_PASSWORD, payload: values})
}
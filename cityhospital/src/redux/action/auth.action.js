import * as ActionTypes from '../ActionTypes'


export const SignUpuserAction = (values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNUP_USER, payload :values})
}

export const SignInuserAction =(values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNIN_USER, payload :values})
}

export const SignedInuserAction =(values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNEDIN_USER, payload :values})
}

export const  LogoutAction =()=>(dispatch)=>{
  dispatch ({type:ActionTypes.LOGOUT_USER})
}

export const LoggedoutAction = ()=>(dispatch)=>{
  dispatch ({type:ActionTypes.LOGGEDOUT_USER})
}
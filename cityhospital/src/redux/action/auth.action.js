import * as ActionTypes from '../ActionTypes'


export const SignUpuserAction = (values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNUP_USER, payload :values})
}

export const SignInuserAction =(values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNIN_USER, payload :values})
}
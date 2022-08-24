import * as ActionTypes from '../ActionTypes'


export const Signupuser = (values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNUP_USER, payload :values})
}

export const Signinuser =(values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNIN_USER, payload :values})
}
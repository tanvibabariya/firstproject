import * as ActionTypes from '../ActionTypes'


export const Signupuser = (values)=>(dispatch)=>{
  dispatch({type:ActionTypes.SIGNUP_USER, payload :values})
}
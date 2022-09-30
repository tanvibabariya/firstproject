import *  as  ActionType  from '../ActionType'

export const addToCart = (data)=> (dispatch)=>{
    dispatch({type:ActionType.ADD_TO_CART , payload:data })
}
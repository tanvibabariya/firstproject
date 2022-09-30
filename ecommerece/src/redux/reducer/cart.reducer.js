 import * as ActionType from '../ActionType'
  
 const iniVal = {
    cart: [],
    error: ''

 }

  export const cartreducer = ( state = iniVal , action) =>{
    console.log(state , action);
    switch (action.type){
        case ActionType.ADD_TO_CART :
            return{
                ...state,
                cart: (state.cart.concat(action.payload)),
                error: ''
            }
           
            default:
                return state;
    }
    
  }
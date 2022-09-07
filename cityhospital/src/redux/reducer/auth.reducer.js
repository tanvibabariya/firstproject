 import * as ActionTypes from "../ActionTypes"
 
const initval = {
    isload: false,
    user: null,
    error: ''   
}
export const authreducer = (state = initval, action) => {
    switch (action.type) {
        case ActionTypes.SIGNEDIN_USER:
        return{
            ...state,
            isload: false,
            user: action.payload,
            error: '' 
        }
        case ActionTypes.LOGGEDOUT_USER:
            return{
                ...state,
                isload: false,
                user: null,
                error: '' 
            }
            case ActionTypes.FORGOT_PASSWORD:
                return{
                    ...state,
                    isload: false,
                    user: action.payload,
                    error: '' 
                }
        default:
            return state;
    }
} 
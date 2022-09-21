import * as ActionType from '../ActionType'

const initVal = {
    isloading: false,
    user: null,
    error: ''

}
export const authreducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionType.SIGNEDIN_USER:
            return {
                ...state,
                isloading: false,
                user: action.payload,
                error: ''
            }
        case ActionType.LOGGEDOUT_USER:
            return {
                ...state,
                isloading: false,
                user: null,
                error: ''
            }
        case ActionType.FORGOT_PASSWORD:
            return {
                ...state,
                isload: false,
                user: action.payload,
                error: ''
            }
        default:
            return state;
    }
}
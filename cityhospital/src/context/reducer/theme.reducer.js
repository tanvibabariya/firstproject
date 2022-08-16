import { TOGGLE_THEME } from "../Actiontype";


export const themereducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload
            }
            default:
            return state
    }
}
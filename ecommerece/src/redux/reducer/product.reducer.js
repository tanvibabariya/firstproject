import * as ActionType from '../ActionType'

const inVal = {
    isLoading: false,
    product: [],
    error: ''

}

export const productreducer = (state = inVal, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                error: ''
            }
        case ActionType.ADD_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: (state.product.concat(action.payload)),
                error: ''
            }
        case ActionType.DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionType.UPDATE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.map((d) => {
                    if (d.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return d;
                    }
                }),
                error: ''
            }
        case ActionType.ERROR_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [],
                error: action.payload
            }

        default:
            return state;
    }
}
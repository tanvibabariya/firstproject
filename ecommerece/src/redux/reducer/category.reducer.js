import * as ActionType from '../ActionType'

const inVal = {
    isLoading: false,
    category: [],
    error: ''

}

export const categoryreducer = (state = inVal, action) => {
    switch (action.type) {
        case ActionType.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ''
            }
        case ActionType.ADD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: (state.category.concat(action.payload)),
                error: ''
            }
        case ActionType.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((c) => c.id !== action.payload),
                error: ''
            }
        case ActionType.UPDATE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((c) => {
                    if (c.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return c;
                    }
                }),
                error: ''
            }
        case ActionType.ERROR_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: [],
                error: action.payload
            }

        default:
            return state;
    }
}
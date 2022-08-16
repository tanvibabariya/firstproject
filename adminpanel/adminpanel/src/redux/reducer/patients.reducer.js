import * as Actiontype from '../actiontype'

const inVal = {
    isLoading: false,
    patients: [],
    error: ''

}

export const patientsreducer = (state = inVal, action) => {
    console.log(action.payload, action.type, state);
    switch (action.type) {
        case Actiontype.GET_PATIENTS:
            return {
                ...state,
                isLoading: false,
                patients: action.payload,
                error: ''
            }
        case Actiontype.ADD_PATIENTS:
            return {
                ...state,
                isLoading: false,
                patients: action.payload,
                error: ''
            }

        case Actiontype.DELETE_PATIENTS:
            return {
                ...state,
                isLoading: false,
                patients: state.patients.filter((p) => p.id != action.payload),
                error: ''
            }

        case Actiontype.UPDATE_PATIENTS:
            return {
                ...state,
                isLoading: false,
                patients: state.patients.map((p) => {
                    if (p.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return p;
                    }
                }),
                error: ''
            }
        case Actiontype.LOADING_PATIENTS:
            return {
                ...state,
                isLoading: true,
                medicines: [],
                error: ''
            }
        case Actiontype.ERROR_PATIENTS:
            return {
                ...state,
                isLoading: false,
                patients: [],
                error: action.payload
            }
        default:
            return state;
    }
}

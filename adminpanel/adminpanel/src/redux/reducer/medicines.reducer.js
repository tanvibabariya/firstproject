import * as Actiontype from '../actiontype'

const inVal = {
    isLoading: false,
    medicines: [],
    error: ''

}
export const medicinereducer = (state = inVal, action) => {
    console.log(state, action.type, action.payload);
    switch (action.type) {
        case Actiontype.GET_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: action.payload,
                error: ''
            }
        case Actiontype.ADD_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: action.payload,
                error: ''
            }
        case Actiontype.DELETE_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: state.medicines.filter((m) => m.id != action.payload),
                error: ''
            }
        case Actiontype.UPDATE_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicines: state.medicines.map((m)=>{
                    if(m.id === action.payload.id){
                        return action.payload;
                    }else{
                        return m ;
                    }
                }
                ),
                error: ''
            }
        case Actiontype.LOADING_MEDICINES:
            return {
                ...state,
                isLoading: true,
                medicines: [],
                error: ''
            }
        case Actiontype.ERROR_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicines: [],
                error: action.payload
            }
        default:
            return state;
    }

}
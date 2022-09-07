import * as Actiontype from '../actiontype'

const inVal = {
    isLoading: false,
    doctors: [],
    error: ''

}

export const doctorreducer = (state=inVal,action) =>{
    switch(action.type){
        case Actiontype.GET_DOCTORS:
        return{
            ...state,
            isLoading: false,
            doctors: action.payload,
            error: ''
        }
        case Actiontype.ADD_DOCTORS:
            return{
                ...state,
                isLoading: false,
                doctors: action.payload,
                error: ''
            }
            case Actiontype.ERROR_DOCTORS:
                return {
                    ...state,
                    isLoading: false,
                    doctors: [],
                    error: action.payload
                }
           
            default:
                return state;
}
}
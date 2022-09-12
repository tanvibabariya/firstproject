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
                doctors: (state.doctors.concat(action.payload)),
                error: ''
            }
            case Actiontype.DELETE_DOCTORS:
                return{
                    ...state,
                    isLoading: false,
                    doctors: state.doctors.filter((d) => d.id != action.payload),
                    error: ''
                }
                case Actiontype.UPDATE_DOCTORS:
                    return{
                        ...state,
                        isLoading: false,
                        doctors: state.doctors.map((d)=>{
                            if(d.id === action.payload.id){
                                return action.payload;
                            }else{
                                return d ;
                            }
                        }
                        ),
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
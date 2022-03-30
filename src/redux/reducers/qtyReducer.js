import { INCREMENT , DECREMENT } from "../actions/qtyAction";

const qtyReducer = ( state = { qty : 1 } , action ) => {
    
    switch(action.type) {
        case INCREMENT :
            return {...state , qty : state.qty + 1};
            case DECREMENT :
            return {...state , qty : state.qty - 1};
        default :
            return state
    }

}

export default qtyReducer;
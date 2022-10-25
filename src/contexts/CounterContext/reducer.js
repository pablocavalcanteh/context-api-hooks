import * as  actionTypes from './action-types'
import { initialState } from '.';

export const reducer = (state, action) => {

    console.log(action)

    switch(action.type) {
        case actionTypes.INCREASE:
            return {...state, counter: state.counter++};
        case actionTypes.DECREASE:
                return {...state, counter: state.counter--};
        case actionTypes.RESET:
                return {...initialState};
        default:
            break;
    }
    
    return state;
}
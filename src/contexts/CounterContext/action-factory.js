import * as  actionTypes from './action-types'

export const factoryActions = (dispatch) => {
    return {
        increase: () => dispatch({type: actionTypes.INCREASE}),
        decrease: () => dispatch({type: actionTypes.DECREASE}),
        reset: () => dispatch({type: actionTypes.RESET})
    }
}
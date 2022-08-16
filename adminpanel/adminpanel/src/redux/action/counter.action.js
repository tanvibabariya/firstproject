import * as Actiontype from '../actiontype'

export let increment = () => (dispatch) => {

    dispatch({ type: Actiontype.INCREMENT_COUNTER })
}

export let decrement = () => (dispatch) => {

    dispatch({ type: Actiontype.DECREMENT_COUNTER })
}
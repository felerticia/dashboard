import constants from '../constants/counter'


export const incrementCounter = () => (dispatch) => {
    dispatch({ type: constants.INCREMENT_COUNTER })
}



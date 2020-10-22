import constants from '../constants/transition'


export const toggleTransitions = () => (dispatch) => {
    dispatch({ type: constants.TOGGLE_TRANSITIONS })
}



import constants from '../constants/transition'

const initialState = {
    transitions: true,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case constants.TOGGLE_TRANSITIONS:
            return {
                ...state,
                transitions: !state.transitions,
            }

        default:
            return state
    }
}

